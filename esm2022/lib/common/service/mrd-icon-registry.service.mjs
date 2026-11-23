import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional, SecurityContext } from '@angular/core';
import { finalize, map, of, share, tap, throwError } from 'rxjs';
import { MRD_ICON_NAMESPACE } from './mrd-icon-symbol-registry.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/platform-browser";
import * as i3 from "./mrd-icon-symbol-registry.service";
/**
 * The Trusted Types policy, or null if Trusted Types are not
 * enabled/supported, or undefined if the policy has not been created yet.
 */
let policy;
/**
 * Returns the Trusted Types policy, or null if Trusted Types are not
 * enabled/supported. The first call to this function will create the policy.
 */
function getPolicy() {
    if (policy === undefined) {
        policy = null;
        if (typeof window !== 'undefined') {
            const ttWindow = window;
            if (ttWindow.trustedTypes !== undefined) {
                policy = ttWindow.trustedTypes.createPolicy('angular#components', {
                    createHTML: (s) => s,
                });
            }
        }
    }
    return policy;
}
/**
 * Unsafely promote a string to a TrustedHTML, falling back to strings when
 * Trusted Types are not available.
 * @security This is a security-sensitive function; any use of this function
 * must go through security review. In particular, it must be assured that the
 * provided string will never cause an XSS vulnerability if used in a context
 * that will be interpreted as HTML by a browser, e.g. when assigning to
 * element.innerHTML.
 */
export function trustedHTMLFromString(html) {
    return getPolicy()?.createHTML(html) || html;
}
/**
 * Configuration for an icon, including the URL and possibly the cached SVG element.
 * @docs-private
 */
class SvgIconConfig {
    url;
    svgText;
    options;
    svgElement;
    constructor(url, svgText, options) {
        this.url = url;
        this.svgText = svgText;
        this.options = options;
    }
}
export class MrdIconRegistryService {
    _httpClient;
    _sanitizer;
    _errorHandler;
    _symbolRegistry;
    _document;
    /**
     * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
     */
    _svgIconConfigs = new Map();
    /** Cache for icons loaded by direct URLs. */
    _cachedIconsByUrl = new Map();
    /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */
    _inProgressUrlFetches = new Map();
    /** Registered icon resolver functions. */
    _resolvers = [];
    /** Schlüssel der aus Factory-Symbolen gebauten "mrd:"-Icons in `_svgIconConfigs` */
    _factoryIconKeys = new Set();
    constructor(_httpClient, _sanitizer, document, _errorHandler, _symbolRegistry) {
        this._httpClient = _httpClient;
        this._sanitizer = _sanitizer;
        this._errorHandler = _errorHandler;
        this._symbolRegistry = _symbolRegistry;
        this._document = document;
        // Aus Factory-Symbolen gebaute "mrd:"-Icons verwerfen, sobald sich Symbole ändern (z. B. nach dem Laden aus der Datenbank)
        this._symbolRegistry.aenderungen$.subscribe(() => this._mrdIconsVerwerfen());
    }
    _mrdIconsVerwerfen() {
        this._factoryIconKeys.forEach((key) => this._svgIconConfigs.delete(key));
        this._factoryIconKeys.clear();
    }
    /**
     * Registriert ein Icon aus SVG-Markup (ohne HTTP) im Standard-Namensraum.
     * @param literal Mit `DomSanitizer.bypassSecurityTrustHtml` freigegebenes SVG-Markup.
     */
    addSvgIconLiteral(iconName, literal, options) {
        return this.addSvgIconLiteralInNamespace('', iconName, literal, options);
    }
    addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
        const bereinigt = this._sanitizer.sanitize(SecurityContext.HTML, literal);
        if (!bereinigt) {
            throw Error(`Das SVG-Literal fuer "${iconName}" ist leer oder wurde vom Sanitizer entfernt.`);
        }
        return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig('', trustedHTMLFromString(bereinigt), options));
    }
    /**
     * Registriert eine Funktion, die unbekannte Icon-Namen in eine URL aufloest,
     * z. B. `(name, ns) => ns === 'app' ? sanitizer.bypassSecurityTrustResourceUrl(`assets/${name}.svg`) : null`.
     */
    addSvgIconResolver(resolver) {
        this._resolvers.push(resolver);
        return this;
    }
    /**
     * Erzeugt ein Icon-Element aus SVG-Markup, z. B. aus der IconFactory.
     * @security Das Markup wird ohne Sanitizing uebernommen - nur mit selbst erzeugten oder im Code hinterlegten SVGs aufrufen.
     */
    createSvgElementFromTrustedString(svg, options) {
        return this._setSvgAttributes(this._svgElementFromString(trustedHTMLFromString(svg)), options);
    }
    /**
     * Registers an icon by URL in the default namespace.
     * @param iconName Name under which the icon should be registered.
     * @param url
     */
    addSvgIcon(iconName, url, options) {
        return this.addSvgIconInNamespace('', iconName, url, options);
    }
    /**
     * Registers an icon by URL in the specified namespace.
     * @param namespace Namespace in which the icon should be registered.
     * @param iconName Name under which the icon should be registered.
     * @param url
     */
    addSvgIconInNamespace(namespace, iconName, url, options) {
        return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, null, options));
    }
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
     * The response from the URL may be cached so this will not always cause an HTTP request, but
     * the produced element will always be a new copy of the originally fetched icon. (That is,
     * it will not contain any modifications made to elements previously returned).
     *
     * @param safeUrl URL from which to fetch the SVG icon.
     */
    getSvgIconFromUrl(safeUrl) {
        const url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeUrl);
        if (!url) {
            throw Error(`Failed to sanitize URL: ${safeUrl}`);
        }
        const cachedIcon = this._cachedIconsByUrl.get(url);
        if (cachedIcon) {
            return of(cloneSvg(cachedIcon));
        }
        return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl, null)).pipe(tap(svg => this._cachedIconsByUrl.set(url, svg)), map(svg => cloneSvg(svg)));
    }
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
     * if not, the Observable will throw an error.
     *
     * @param name Name of the icon to be retrieved.
     * @param namespace Namespace in which to look for the icon.
     */
    getNamedSvgIcon(name, namespace = '') {
        const key = iconKey(namespace, name);
        let config = this._svgIconConfigs.get(key);
        // Return (copy of) cached icon if possible.
        if (config) {
            return this._getSvgFromConfig(config);
        }
        // Otherwise try to resolve the config from one of the resolver functions.
        config = this._getIconConfigFromResolvers(namespace, name);
        if (config) {
            this._svgIconConfigs.set(key, config);
            return this._getSvgFromConfig(config);
        }
        // Symbole der IconFactory stehen ohne Registrierung unter "mrd:<name>" bereit
        if (namespace === MRD_ICON_NAMESPACE) {
            const svg = this._symbolRegistry.createSvgFromName(name);
            if (svg) {
                config = new SvgIconConfig('', trustedHTMLFromString(svg));
                this._svgIconConfigs.set(key, config);
                this._factoryIconKeys.add(key);
                return this._getSvgFromConfig(config);
            }
        }
        return throwError(() => Error(`Icon "${key}" ist nicht registriert.`));
    }
    /**
     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
     */
    _getSvgFromConfig(config) {
        if (config.svgText) {
            // We already have the SVG element for this icon, return a copy.
            return of(cloneSvg(this._svgElementFromConfig(config)));
        }
        else {
            // Fetch the icon from the config's URL, cache it, and return a copy.
            return this._loadSvgIconFromConfig(config).pipe(map(svg => cloneSvg(svg)));
        }
    }
    /** Tries to create an icon config through the registered resolver functions. */
    _getIconConfigFromResolvers(namespace, name) {
        for (let i = 0; i < this._resolvers.length; i++) {
            const result = this._resolvers[i](name, namespace);
            if (result) {
                return isSafeUrlWithOptions(result)
                    ? new SvgIconConfig(result.url, null, result.options)
                    : new SvgIconConfig(result, null);
            }
        }
        return undefined;
    }
    /**
     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     */
    _loadSvgIconFromConfig(config) {
        return this._fetchIcon(config).pipe(tap(svgText => (config.svgText = svgText)), map(() => this._svgElementFromConfig(config)));
    }
    /**
     * Creates a DOM element from the given SVG string.
     */
    _svgElementFromString(str) {
        const div = this._document.createElement('DIV');
        div.innerHTML = str;
        const svg = div.querySelector('svg');
        if (!svg) {
            throw Error('<svg> tag not found');
        }
        return svg;
    }
    /**
     * Converts an element into an SVG node by cloning all of its children.
     */
    // private _toSvgElement(element: Element): SVGElement {
    //   const svg = this._svgElementFromString(trustedHTMLFromString('<svg></svg>'));
    //   const attributes = element.attributes;
    //   // Copy over all the attributes from the `symbol` to the new SVG, except the id.
    //   for (let i = 0; i < attributes.length; i++) {
    //     const {name, value} = attributes[i];
    //     if (name !== 'id') {
    //       svg.setAttribute(name, value);
    //     }
    //   }
    //   for (let i = 0; i < element.childNodes.length; i++) {
    //     if (element.childNodes[i].nodeType === this._document.ELEMENT_NODE) {
    //       svg.appendChild(element.childNodes[i].cloneNode(true));
    //     }
    //   }
    //   return svg;
    // }
    /**
     * Sets the default attributes for an SVG element to be used as an icon.
     */
    _setSvgAttributes(svg, options) {
        svg.setAttribute('fit', '');
        svg.setAttribute('height', '100%');
        svg.setAttribute('width', '100%');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.
        if (options && options.viewBox) {
            svg.setAttribute('viewBox', options.viewBox);
        }
        return svg;
    }
    /**
     * Returns an Observable which produces the string contents of the given icon. Results may be
     * cached, so future calls with the same URL may not cause another HTTP request.
     */
    _fetchIcon(iconConfig) {
        const { url: safeUrl, options } = iconConfig;
        const withCredentials = options?.withCredentials ?? false;
        if (!this._httpClient) {
            throw Error('Could not fetch icon, HttpClient is not available.');
        }
        // TODO: add an ngDevMode check
        if (safeUrl == null) {
            throw Error(`Cannot fetch icon from URL "${safeUrl}".`);
        }
        const url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeUrl);
        // TODO: add an ngDevMode check
        if (!url) {
            throw Error(`Failed to sanitize URL: ${safeUrl}`);
        }
        // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
        // already a request in progress for that URL. It's necessary to call share() on the
        // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.
        const inProgressFetch = this._inProgressUrlFetches.get(url);
        if (inProgressFetch) {
            return inProgressFetch;
        }
        const req = this._httpClient.get(url, { responseType: 'text', withCredentials }).pipe(map(svg => {
            // Security: This SVG is fetched from a SafeResourceUrl, and is thus
            // trusted HTML.
            return trustedHTMLFromString(svg);
        }), finalize(() => this._inProgressUrlFetches.delete(url)), share());
        this._inProgressUrlFetches.set(url, req);
        return req;
    }
    /**
     * Registers an icon config by name in the specified namespace.
     * @param namespace Namespace in which to register the icon config.
     * @param iconName Name under which to register the config.
     * @param config Config to be registered.
     */
    _addSvgIconConfig(namespace, iconName, config) {
        this._svgIconConfigs.set(iconKey(namespace, iconName), config);
        return this;
    }
    /** Parses a config's text into an SVG element. */
    _svgElementFromConfig(config) {
        if (!config.svgElement) {
            const svg = this._svgElementFromString(config.svgText);
            this._setSvgAttributes(svg, config.options);
            config.svgElement = svg;
        }
        return config.svgElement;
    }
    /** @nocollapse */ static ɵfac = function MrdIconRegistryService_Factory(t) { return new (t || MrdIconRegistryService)(i0.ɵɵinject(i1.HttpClient, 8), i0.ɵɵinject(i2.DomSanitizer), i0.ɵɵinject(DOCUMENT, 8), i0.ɵɵinject(i0.ErrorHandler), i0.ɵɵinject(i3.MrdIconSymbolRegistryService)); };
    /** @nocollapse */ static ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: MrdIconRegistryService, factory: MrdIconRegistryService.ɵfac, providedIn: 'root' });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdIconRegistryService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient, decorators: [{
                type: Optional
            }] }, { type: i2.DomSanitizer }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i0.ErrorHandler }, { type: i3.MrdIconSymbolRegistryService }]; }, null); })();
/** Clones an SVGElement while preserving type information. */
function cloneSvg(svg) {
    return svg.cloneNode(true);
}
/** Returns the cache key to use for an icon namespace and name. */
function iconKey(namespace, name) {
    return namespace + ':' + name;
}
function isSafeUrlWithOptions(value) {
    return !!(value.url && value.options);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWljb24tcmVnaXN0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvY29tbW9uL3NlcnZpY2UvbXJkLWljb24tcmVnaXN0cnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsT0FBTyxFQUFnQixNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQWMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBZ0MsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7QUFtQnRHOzs7R0FHRztBQUNILElBQUksTUFBNEMsQ0FBQztBQUVqRDs7O0dBR0c7QUFDSCxTQUFTLFNBQVM7SUFDaEIsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1FBQ3hCLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUNqQyxNQUFNLFFBQVEsR0FBRyxNQUE4RCxDQUFDO1lBQ2hGLElBQUksUUFBUSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7Z0JBQ3ZDLE1BQU0sR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsRUFBRTtvQkFDaEUsVUFBVSxFQUFFLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2lCQUM3QixDQUFDLENBQUM7YUFDSjtTQUNGO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQ7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLFVBQVUscUJBQXFCLENBQUMsSUFBWTtJQUNo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QztTQUN6QjtRQUVELE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO21HQXBVVSxzQkFBc0IsMkVBd0JYLFFBQVE7K0ZBeEJuQixzQkFBc0IsV0FBdEIsc0JBQXNCLG1CQUZyQixNQUFNOzt1RkFFUCxzQkFBc0I7Y0FIbEMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkF1QkksUUFBUTs7c0JBRVIsUUFBUTs7c0JBQUksTUFBTTt1QkFBQyxRQUFROztBQStTaEMsOERBQThEO0FBQzlELFNBQVMsUUFBUSxDQUFDLEdBQWU7SUFDL0IsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBZSxDQUFDO0FBQzNDLENBQUM7QUFFRCxtRUFBbUU7QUFDbkUsU0FBUyxPQUFPLENBQUMsU0FBaUIsRUFBRSxJQUFZO0lBQzlDLE9BQU8sU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7QUFDaEMsQ0FBQztBQUVELFNBQVMsb0JBQW9CLENBQUMsS0FBVTtJQUN0QyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEVycm9ySGFuZGxlciwgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2VjdXJpdHlDb250ZXh0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwsIFNhZmVSZXNvdXJjZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSwgbWFwLCBPYnNlcnZhYmxlLCBvZiwgc2hhcmUsIHRhcCwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNUkRfSUNPTl9OQU1FU1BBQ0UsIE1yZEljb25TeW1ib2xSZWdpc3RyeVNlcnZpY2UgfSBmcm9tICcuL21yZC1pY29uLXN5bWJvbC1yZWdpc3RyeS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBUcnVzdGVkSFRNTCB7XHJcbiAgX19icmFuZF9fOiAnVHJ1c3RlZEhUTUwnO1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgVHJ1c3RlZFR5cGVQb2xpY3lGYWN0b3J5IHtcclxuICBjcmVhdGVQb2xpY3koXHJcbiAgICBwb2xpY3lOYW1lOiBzdHJpbmcsXHJcbiAgICBwb2xpY3lPcHRpb25zOiB7XHJcbiAgICAgIGNyZWF0ZUhUTUw/OiAoaW5wdXQ6IHN0cmluZykgPT4gc3RyaW5nO1xyXG4gICAgfSxcclxuICApOiBUcnVzdGVkVHlwZVBvbGljeTtcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFRydXN0ZWRUeXBlUG9saWN5IHtcclxuICBjcmVhdGVIVE1MKGlucHV0OiBzdHJpbmcpOiBUcnVzdGVkSFRNTDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBUcnVzdGVkIFR5cGVzIHBvbGljeSwgb3IgbnVsbCBpZiBUcnVzdGVkIFR5cGVzIGFyZSBub3RcclxuICogZW5hYmxlZC9zdXBwb3J0ZWQsIG9yIHVuZGVmaW5lZCBpZiB0aGUgcG9saWN5IGhhcyBub3QgYmVlbiBjcmVhdGVkIHlldC5cclxuICovXHJcbmxldCBwb2xpY3k6IFRydXN0ZWRUeXBlUG9saWN5IHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBUcnVzdGVkIFR5cGVzIHBvbGljeSwgb3IgbnVsbCBpZiBUcnVzdGVkIFR5cGVzIGFyZSBub3RcclxuICogZW5hYmxlZC9zdXBwb3J0ZWQuIFRoZSBmaXJzdCBjYWxsIHRvIHRoaXMgZnVuY3Rpb24gd2lsbCBjcmVhdGUgdGhlIHBvbGljeS5cclxuICovXHJcbmZ1bmN0aW9uIGdldFBvbGljeSgpOiBUcnVzdGVkVHlwZVBvbGljeSB8IG51bGwge1xyXG4gIGlmIChwb2xpY3kgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcG9saWN5ID0gbnVsbDtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBjb25zdCB0dFdpbmRvdyA9IHdpbmRvdyBhcyB1bmtub3duIGFzIHt0cnVzdGVkVHlwZXM/OiBUcnVzdGVkVHlwZVBvbGljeUZhY3Rvcnl9O1xyXG4gICAgICBpZiAodHRXaW5kb3cudHJ1c3RlZFR5cGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBwb2xpY3kgPSB0dFdpbmRvdy50cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KCdhbmd1bGFyI2NvbXBvbmVudHMnLCB7XHJcbiAgICAgICAgICBjcmVhdGVIVE1MOiAoczogc3RyaW5nKSA9PiBzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwb2xpY3k7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVbnNhZmVseSBwcm9tb3RlIGEgc3RyaW5nIHRvIGEgVHJ1c3RlZEhUTUwsIGZhbGxpbmcgYmFjayB0byBzdHJpbmdzIHdoZW5cclxuICogVHJ1c3RlZCBUeXBlcyBhcmUgbm90IGF2YWlsYWJsZS5cclxuICogQHNlY3VyaXR5IFRoaXMgaXMgYSBzZWN1cml0eS1zZW5zaXRpdmUgZnVuY3Rpb247IGFueSB1c2Ugb2YgdGhpcyBmdW5jdGlvblxyXG4gKiBtdXN0IGdvIHRocm91Z2ggc2VjdXJpdHkgcmV2aWV3LiBJbiBwYXJ0aWN1bGFyLCBpdCBtdXN0IGJlIGFzc3VyZWQgdGhhdCB0aGVcclxuICogcHJvdmlkZWQgc3RyaW5nIHdpbGwgbmV2ZXIgY2F1c2UgYW4gWFNTIHZ1bG5lcmFiaWxpdHkgaWYgdXNlZCBpbiBhIGNvbnRleHRcclxuICogdGhhdCB3aWxsIGJlIGludGVycHJldGVkIGFzIEhUTUwgYnkgYSBicm93c2VyLCBlLmcuIHdoZW4gYXNzaWduaW5nIHRvXHJcbiAqIGVsZW1lbnQuaW5uZXJIVE1MLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRydXN0ZWRIVE1MRnJvbVN0cmluZyhodG1sOiBzdHJpbmcpOiBUcnVzdGVkSFRNTCB7XHJcbiAgcmV0dXJuIGdldFBvbGljeSgpPy5jcmVhdGVIVE1MKGh0bWwpIHx8IChodG1sIGFzIHVua25vd24gYXMgVHJ1c3RlZEhUTUwpO1xyXG59XHJcblxyXG4vKiogT3B0aW9ucyB0aGF0IGNhbiBiZSB1c2VkIHRvIGNvbmZpZ3VyZSBob3cgYW4gaWNvbiBvciB0aGUgaWNvbnMgaW4gYW4gaWNvbiBzZXQgYXJlIHByZXNlbnRlZC4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJY29uT3B0aW9ucyB7XHJcbiAgLyoqIFZpZXcgYm94IHRvIHNldCBvbiB0aGUgaWNvbi4gKi9cclxuICB2aWV3Qm94Pzogc3RyaW5nO1xyXG5cclxuICAvKiogV2hldGhlciBvciBub3QgdG8gZmV0Y2ggdGhlIGljb24gb3IgaWNvbiBzZXQgdXNpbmcgSFRUUCBjcmVkZW50aWFscy4gKi9cclxuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGludm9rZWQgYnkgdGhlIGljb24gcmVnaXN0cnkgd2hlbiB0cnlpbmcgdG8gcmVzb2x2ZSB0aGVcclxuICogVVJMIGZyb20gd2hpY2ggdG8gZmV0Y2ggYW4gaWNvbi4gVGhlIHJldHVybmVkIFVSTCB3aWxsIGJlIHVzZWQgdG8gbWFrZSBhIHJlcXVlc3QgZm9yIHRoZSBpY29uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgSWNvblJlc29sdmVyID0gKFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICBuYW1lc3BhY2U6IHN0cmluZyxcclxuKSA9PiBTYWZlUmVzb3VyY2VVcmwgfCBTYWZlUmVzb3VyY2VVcmxXaXRoSWNvbk9wdGlvbnMgfCBudWxsO1xyXG5cclxuLyoqIE9iamVjdCB0aGF0IHNwZWNpZmllcyBhIFVSTCBmcm9tIHdoaWNoIHRvIGZldGNoIGFuIGljb24gYW5kIHRoZSBvcHRpb25zIHRvIHVzZSBmb3IgaXQuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2FmZVJlc291cmNlVXJsV2l0aEljb25PcHRpb25zIHtcclxuICB1cmw6IFNhZmVSZXNvdXJjZVVybDtcclxuICBvcHRpb25zOiBJY29uT3B0aW9ucztcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbmZpZ3VyYXRpb24gZm9yIGFuIGljb24sIGluY2x1ZGluZyB0aGUgVVJMIGFuZCBwb3NzaWJseSB0aGUgY2FjaGVkIFNWRyBlbGVtZW50LlxyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5jbGFzcyBTdmdJY29uQ29uZmlnIHtcclxuICBzdmdFbGVtZW50OiBTVkdFbGVtZW50IHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgdXJsOiBTYWZlUmVzb3VyY2VVcmwsXHJcbiAgICBwdWJsaWMgc3ZnVGV4dDogVHJ1c3RlZEhUTUwgfCBudWxsLFxyXG4gICAgcHVibGljIG9wdGlvbnM/OiBJY29uT3B0aW9ucyxcclxuICApIHt9XHJcbn1cclxuLyoqIEljb24gY29uZmlndXJhdGlvbiB3aG9zZSBjb250ZW50IGhhcyBhbHJlYWR5IGJlZW4gbG9hZGVkLiAqL1xyXG50eXBlIExvYWRlZFN2Z0ljb25Db25maWcgPSBTdmdJY29uQ29uZmlnICYge3N2Z1RleHQ6IFRydXN0ZWRIVE1MfTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZEljb25SZWdpc3RyeVNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIF9kb2N1bWVudDogRG9jdW1lbnQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFVSTHMgYW5kIGNhY2hlZCBTVkcgZWxlbWVudHMgZm9yIGluZGl2aWR1YWwgaWNvbnMuIEtleXMgYXJlIG9mIHRoZSBmb3JtYXQgXCJbbmFtZXNwYWNlXTpbaWNvbl1cIi5cclxuICAgKi9cclxuICBwcml2YXRlIF9zdmdJY29uQ29uZmlncyA9IG5ldyBNYXA8c3RyaW5nLCBTdmdJY29uQ29uZmlnPigpO1xyXG5cclxuICAvKiogQ2FjaGUgZm9yIGljb25zIGxvYWRlZCBieSBkaXJlY3QgVVJMcy4gKi9cclxuICBwcml2YXRlIF9jYWNoZWRJY29uc0J5VXJsID0gbmV3IE1hcDxzdHJpbmcsIFNWR0VsZW1lbnQ+KCk7XHJcblxyXG4gIC8qKiBJbi1wcm9ncmVzcyBpY29uIGZldGNoZXMuIFVzZWQgdG8gY29hbGVzY2UgbXVsdGlwbGUgcmVxdWVzdHMgdG8gdGhlIHNhbWUgVVJMLiAqL1xyXG4gIHByaXZhdGUgX2luUHJvZ3Jlc3NVcmxGZXRjaGVzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmFibGU8VHJ1c3RlZEhUTUw+PigpO1xyXG5cclxuICAvKiogUmVnaXN0ZXJlZCBpY29uIHJlc29sdmVyIGZ1bmN0aW9ucy4gKi9cclxuICBwcml2YXRlIF9yZXNvbHZlcnM6IEljb25SZXNvbHZlcltdID0gW107XHJcblxyXG4gIC8qKiBTY2hsw7xzc2VsIGRlciBhdXMgRmFjdG9yeS1TeW1ib2xlbiBnZWJhdXRlbiBcIm1yZDpcIi1JY29ucyBpbiBgX3N2Z0ljb25Db25maWdzYCAqL1xyXG4gIHByaXZhdGUgX2ZhY3RvcnlJY29uS2V5cyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2h0dHBDbGllbnQ6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcixcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnksXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9lcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcixcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3N5bWJvbFJlZ2lzdHJ5OiBNcmRJY29uU3ltYm9sUmVnaXN0cnlTZXJ2aWNlLFxyXG4gICkge1xyXG4gICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcclxuICAgIC8vIEF1cyBGYWN0b3J5LVN5bWJvbGVuIGdlYmF1dGUgXCJtcmQ6XCItSWNvbnMgdmVyd2VyZmVuLCBzb2JhbGQgc2ljaCBTeW1ib2xlIMOkbmRlcm4gKHouIEIuIG5hY2ggZGVtIExhZGVuIGF1cyBkZXIgRGF0ZW5iYW5rKVxyXG4gICAgdGhpcy5fc3ltYm9sUmVnaXN0cnkuYWVuZGVydW5nZW4kLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9tcmRJY29uc1ZlcndlcmZlbigpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX21yZEljb25zVmVyd2VyZmVuKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fZmFjdG9yeUljb25LZXlzLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB0aGlzLl9zdmdJY29uQ29uZmlncy5kZWxldGUoa2V5KSk7XHJcbiAgICB0aGlzLl9mYWN0b3J5SWNvbktleXMuY2xlYXIoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdHJpZXJ0IGVpbiBJY29uIGF1cyBTVkctTWFya3VwIChvaG5lIEhUVFApIGltIFN0YW5kYXJkLU5hbWVuc3JhdW0uXHJcbiAgICogQHBhcmFtIGxpdGVyYWwgTWl0IGBEb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWxgIGZyZWlnZWdlYmVuZXMgU1ZHLU1hcmt1cC5cclxuICAgKi9cclxuICBhZGRTdmdJY29uTGl0ZXJhbChpY29uTmFtZTogc3RyaW5nLCBsaXRlcmFsOiBTYWZlSHRtbCwgb3B0aW9ucz86IEljb25PcHRpb25zKTogdGhpcyB7XHJcbiAgICByZXR1cm4gdGhpcy5hZGRTdmdJY29uTGl0ZXJhbEluTmFtZXNwYWNlKCcnLCBpY29uTmFtZSwgbGl0ZXJhbCwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBhZGRTdmdJY29uTGl0ZXJhbEluTmFtZXNwYWNlKG5hbWVzcGFjZTogc3RyaW5nLCBpY29uTmFtZTogc3RyaW5nLCBsaXRlcmFsOiBTYWZlSHRtbCwgb3B0aW9ucz86IEljb25PcHRpb25zKTogdGhpcyB7XHJcbiAgICBjb25zdCBiZXJlaW5pZ3QgPSB0aGlzLl9zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LkhUTUwsIGxpdGVyYWwpO1xyXG4gICAgaWYgKCFiZXJlaW5pZ3QpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYERhcyBTVkctTGl0ZXJhbCBmdWVyIFwiJHtpY29uTmFtZX1cIiBpc3QgbGVlciBvZGVyIHd1cmRlIHZvbSBTYW5pdGl6ZXIgZW50ZmVybnQuYCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fYWRkU3ZnSWNvbkNvbmZpZyhuYW1lc3BhY2UsIGljb25OYW1lLCBuZXcgU3ZnSWNvbkNvbmZpZygnJywgdHJ1c3RlZEhUTUxGcm9tU3RyaW5nKGJlcmVpbmlndCksIG9wdGlvbnMpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdHJpZXJ0IGVpbmUgRnVua3Rpb24sIGRpZSB1bmJla2FubnRlIEljb24tTmFtZW4gaW4gZWluZSBVUkwgYXVmbG9lc3QsXHJcbiAgICogei4gQi4gYChuYW1lLCBucykgPT4gbnMgPT09ICdhcHAnID8gc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChgYXNzZXRzLyR7bmFtZX0uc3ZnYCkgOiBudWxsYC5cclxuICAgKi9cclxuICBhZGRTdmdJY29uUmVzb2x2ZXIocmVzb2x2ZXI6IEljb25SZXNvbHZlcik6IHRoaXMge1xyXG4gICAgdGhpcy5fcmVzb2x2ZXJzLnB1c2gocmVzb2x2ZXIpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFcnpldWd0IGVpbiBJY29uLUVsZW1lbnQgYXVzIFNWRy1NYXJrdXAsIHouIEIuIGF1cyBkZXIgSWNvbkZhY3RvcnkuXHJcbiAgICogQHNlY3VyaXR5IERhcyBNYXJrdXAgd2lyZCBvaG5lIFNhbml0aXppbmcgdWViZXJub21tZW4gLSBudXIgbWl0IHNlbGJzdCBlcnpldWd0ZW4gb2RlciBpbSBDb2RlIGhpbnRlcmxlZ3RlbiBTVkdzIGF1ZnJ1ZmVuLlxyXG4gICAqL1xyXG4gIGNyZWF0ZVN2Z0VsZW1lbnRGcm9tVHJ1c3RlZFN0cmluZyhzdmc6IHN0cmluZywgb3B0aW9ucz86IEljb25PcHRpb25zKTogU1ZHRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2V0U3ZnQXR0cmlidXRlcyh0aGlzLl9zdmdFbGVtZW50RnJvbVN0cmluZyh0cnVzdGVkSFRNTEZyb21TdHJpbmcoc3ZnKSksIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXJzIGFuIGljb24gYnkgVVJMIGluIHRoZSBkZWZhdWx0IG5hbWVzcGFjZS5cclxuICAgKiBAcGFyYW0gaWNvbk5hbWUgTmFtZSB1bmRlciB3aGljaCB0aGUgaWNvbiBzaG91bGQgYmUgcmVnaXN0ZXJlZC5cclxuICAgKiBAcGFyYW0gdXJsXHJcbiAgICovXHJcbiAgYWRkU3ZnSWNvbihpY29uTmFtZTogc3RyaW5nLCB1cmw6IFNhZmVSZXNvdXJjZVVybCwgb3B0aW9ucz86IEljb25PcHRpb25zKTogdGhpcyB7XHJcbiAgICByZXR1cm4gdGhpcy5hZGRTdmdJY29uSW5OYW1lc3BhY2UoJycsIGljb25OYW1lLCB1cmwsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXJzIGFuIGljb24gYnkgVVJMIGluIHRoZSBzcGVjaWZpZWQgbmFtZXNwYWNlLlxyXG4gICAqIEBwYXJhbSBuYW1lc3BhY2UgTmFtZXNwYWNlIGluIHdoaWNoIHRoZSBpY29uIHNob3VsZCBiZSByZWdpc3RlcmVkLlxyXG4gICAqIEBwYXJhbSBpY29uTmFtZSBOYW1lIHVuZGVyIHdoaWNoIHRoZSBpY29uIHNob3VsZCBiZSByZWdpc3RlcmVkLlxyXG4gICAqIEBwYXJhbSB1cmxcclxuICAgKi9cclxuICBhZGRTdmdJY29uSW5OYW1lc3BhY2UoXHJcbiAgICBuYW1lc3BhY2U6IHN0cmluZyxcclxuICAgIGljb25OYW1lOiBzdHJpbmcsXHJcbiAgICB1cmw6IFNhZmVSZXNvdXJjZVVybCxcclxuICAgIG9wdGlvbnM/OiBJY29uT3B0aW9ucyxcclxuICApOiB0aGlzIHtcclxuICAgIHJldHVybiB0aGlzLl9hZGRTdmdJY29uQ29uZmlnKG5hbWVzcGFjZSwgaWNvbk5hbWUsIG5ldyBTdmdJY29uQ29uZmlnKHVybCwgbnVsbCwgb3B0aW9ucykpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgcHJvZHVjZXMgdGhlIGljb24gKGFzIGFuIGA8c3ZnPmAgRE9NIGVsZW1lbnQpIGZyb20gdGhlIGdpdmVuIFVSTC5cclxuICAgKiBUaGUgcmVzcG9uc2UgZnJvbSB0aGUgVVJMIG1heSBiZSBjYWNoZWQgc28gdGhpcyB3aWxsIG5vdCBhbHdheXMgY2F1c2UgYW4gSFRUUCByZXF1ZXN0LCBidXRcclxuICAgKiB0aGUgcHJvZHVjZWQgZWxlbWVudCB3aWxsIGFsd2F5cyBiZSBhIG5ldyBjb3B5IG9mIHRoZSBvcmlnaW5hbGx5IGZldGNoZWQgaWNvbi4gKFRoYXQgaXMsXHJcbiAgICogaXQgd2lsbCBub3QgY29udGFpbiBhbnkgbW9kaWZpY2F0aW9ucyBtYWRlIHRvIGVsZW1lbnRzIHByZXZpb3VzbHkgcmV0dXJuZWQpLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHNhZmVVcmwgVVJMIGZyb20gd2hpY2ggdG8gZmV0Y2ggdGhlIFNWRyBpY29uLlxyXG4gICAqL1xyXG4gIGdldFN2Z0ljb25Gcm9tVXJsKHNhZmVVcmw6IFNhZmVSZXNvdXJjZVVybCk6IE9ic2VydmFibGU8U1ZHRWxlbWVudD4ge1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5fc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5SRVNPVVJDRV9VUkwsIHNhZmVVcmwpO1xyXG5cclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBGYWlsZWQgdG8gc2FuaXRpemUgVVJMOiAke3NhZmVVcmx9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FjaGVkSWNvbiA9IHRoaXMuX2NhY2hlZEljb25zQnlVcmwuZ2V0KHVybCk7XHJcblxyXG4gICAgaWYgKGNhY2hlZEljb24pIHtcclxuICAgICAgcmV0dXJuIG9mKGNsb25lU3ZnKGNhY2hlZEljb24pKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fbG9hZFN2Z0ljb25Gcm9tQ29uZmlnKG5ldyBTdmdJY29uQ29uZmlnKHNhZmVVcmwsIG51bGwpKS5waXBlKFxyXG4gICAgICB0YXAoc3ZnID0+IHRoaXMuX2NhY2hlZEljb25zQnlVcmwuc2V0KHVybCEsIHN2ZykpLFxyXG4gICAgICBtYXAoc3ZnID0+IGNsb25lU3ZnKHN2ZykpLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IHByb2R1Y2VzIHRoZSBpY29uIChhcyBhbiBgPHN2Zz5gIERPTSBlbGVtZW50KSB3aXRoIHRoZSBnaXZlbiBuYW1lXHJcbiAgICogYW5kIG5hbWVzcGFjZS4gVGhlIGljb24gbXVzdCBoYXZlIGJlZW4gcHJldmlvdXNseSByZWdpc3RlcmVkIHdpdGggYWRkSWNvbiBvciBhZGRJY29uU2V0O1xyXG4gICAqIGlmIG5vdCwgdGhlIE9ic2VydmFibGUgd2lsbCB0aHJvdyBhbiBlcnJvci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGljb24gdG8gYmUgcmV0cmlldmVkLlxyXG4gICAqIEBwYXJhbSBuYW1lc3BhY2UgTmFtZXNwYWNlIGluIHdoaWNoIHRvIGxvb2sgZm9yIHRoZSBpY29uLlxyXG4gICAqL1xyXG4gIGdldE5hbWVkU3ZnSWNvbihuYW1lOiBzdHJpbmcsIG5hbWVzcGFjZTogc3RyaW5nID0gJycpOiBPYnNlcnZhYmxlPFNWR0VsZW1lbnQ+IHtcclxuICAgIGNvbnN0IGtleSA9IGljb25LZXkobmFtZXNwYWNlLCBuYW1lKTtcclxuICAgIGxldCBjb25maWcgPSB0aGlzLl9zdmdJY29uQ29uZmlncy5nZXQoa2V5KTtcclxuXHJcbiAgICAvLyBSZXR1cm4gKGNvcHkgb2YpIGNhY2hlZCBpY29uIGlmIHBvc3NpYmxlLlxyXG4gICAgaWYgKGNvbmZpZykge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZ2V0U3ZnRnJvbUNvbmZpZyhjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE90aGVyd2lzZSB0cnkgdG8gcmVzb2x2ZSB0aGUgY29uZmlnIGZyb20gb25lIG9mIHRoZSByZXNvbHZlciBmdW5jdGlvbnMuXHJcbiAgICBjb25maWcgPSB0aGlzLl9nZXRJY29uQ29uZmlnRnJvbVJlc29sdmVycyhuYW1lc3BhY2UsIG5hbWUpO1xyXG5cclxuICAgIGlmIChjb25maWcpIHtcclxuICAgICAgdGhpcy5fc3ZnSWNvbkNvbmZpZ3Muc2V0KGtleSwgY29uZmlnKTtcclxuICAgICAgcmV0dXJuIHRoaXMuX2dldFN2Z0Zyb21Db25maWcoY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTeW1ib2xlIGRlciBJY29uRmFjdG9yeSBzdGVoZW4gb2huZSBSZWdpc3RyaWVydW5nIHVudGVyIFwibXJkOjxuYW1lPlwiIGJlcmVpdFxyXG4gICAgaWYgKG5hbWVzcGFjZSA9PT0gTVJEX0lDT05fTkFNRVNQQUNFKSB7XHJcbiAgICAgIGNvbnN0IHN2ZyA9IHRoaXMuX3N5bWJvbFJlZ2lzdHJ5LmNyZWF0ZVN2Z0Zyb21OYW1lKG5hbWUpO1xyXG4gICAgICBpZiAoc3ZnKSB7XHJcbiAgICAgICAgY29uZmlnID0gbmV3IFN2Z0ljb25Db25maWcoJycsIHRydXN0ZWRIVE1MRnJvbVN0cmluZyhzdmcpKTtcclxuICAgICAgICB0aGlzLl9zdmdJY29uQ29uZmlncy5zZXQoa2V5LCBjb25maWcpO1xyXG4gICAgICAgIHRoaXMuX2ZhY3RvcnlJY29uS2V5cy5hZGQoa2V5KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0U3ZnRnJvbUNvbmZpZyhjb25maWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRocm93RXJyb3IoKCkgPT4gRXJyb3IoYEljb24gXCIke2tleX1cIiBpc3QgbmljaHQgcmVnaXN0cmllcnQuYCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgY2FjaGVkIGljb24gZm9yIGEgU3ZnSWNvbkNvbmZpZyBpZiBhdmFpbGFibGUsIG9yIGZldGNoZXMgaXQgZnJvbSBpdHMgVVJMIGlmIG5vdC5cclxuICAgKi9cclxuICBwcml2YXRlIF9nZXRTdmdGcm9tQ29uZmlnKGNvbmZpZzogU3ZnSWNvbkNvbmZpZyk6IE9ic2VydmFibGU8U1ZHRWxlbWVudD4ge1xyXG4gICAgaWYgKGNvbmZpZy5zdmdUZXh0KSB7XHJcbiAgICAgIC8vIFdlIGFscmVhZHkgaGF2ZSB0aGUgU1ZHIGVsZW1lbnQgZm9yIHRoaXMgaWNvbiwgcmV0dXJuIGEgY29weS5cclxuICAgICAgcmV0dXJuIG9mKGNsb25lU3ZnKHRoaXMuX3N2Z0VsZW1lbnRGcm9tQ29uZmlnKGNvbmZpZyBhcyBMb2FkZWRTdmdJY29uQ29uZmlnKSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gRmV0Y2ggdGhlIGljb24gZnJvbSB0aGUgY29uZmlnJ3MgVVJMLCBjYWNoZSBpdCwgYW5kIHJldHVybiBhIGNvcHkuXHJcbiAgICAgIHJldHVybiB0aGlzLl9sb2FkU3ZnSWNvbkZyb21Db25maWcoY29uZmlnKS5waXBlKG1hcChzdmcgPT4gY2xvbmVTdmcoc3ZnKSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFRyaWVzIHRvIGNyZWF0ZSBhbiBpY29uIGNvbmZpZyB0aHJvdWdoIHRoZSByZWdpc3RlcmVkIHJlc29sdmVyIGZ1bmN0aW9ucy4gKi9cclxuICBwcml2YXRlIF9nZXRJY29uQ29uZmlnRnJvbVJlc29sdmVycyhuYW1lc3BhY2U6IHN0cmluZywgbmFtZTogc3RyaW5nKTogU3ZnSWNvbkNvbmZpZyB8IHVuZGVmaW5lZCB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Jlc29sdmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9yZXNvbHZlcnNbaV0obmFtZSwgbmFtZXNwYWNlKTtcclxuXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICByZXR1cm4gaXNTYWZlVXJsV2l0aE9wdGlvbnMocmVzdWx0KVxyXG4gICAgICAgICAgPyBuZXcgU3ZnSWNvbkNvbmZpZyhyZXN1bHQudXJsLCBudWxsLCByZXN1bHQub3B0aW9ucylcclxuICAgICAgICAgIDogbmV3IFN2Z0ljb25Db25maWcocmVzdWx0LCBudWxsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2FkcyB0aGUgY29udGVudCBvZiB0aGUgaWNvbiBVUkwgc3BlY2lmaWVkIGluIHRoZSBTdmdJY29uQ29uZmlnIGFuZCBjcmVhdGVzIGFuIFNWRyBlbGVtZW50XHJcbiAgICogZnJvbSBpdC5cclxuICAgKi9cclxuICBwcml2YXRlIF9sb2FkU3ZnSWNvbkZyb21Db25maWcoY29uZmlnOiBTdmdJY29uQ29uZmlnKTogT2JzZXJ2YWJsZTxTVkdFbGVtZW50PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmV0Y2hJY29uKGNvbmZpZykucGlwZShcclxuICAgICAgdGFwKHN2Z1RleHQgPT4gKGNvbmZpZy5zdmdUZXh0ID0gc3ZnVGV4dCkpLFxyXG4gICAgICBtYXAoKCkgPT4gdGhpcy5fc3ZnRWxlbWVudEZyb21Db25maWcoY29uZmlnIGFzIExvYWRlZFN2Z0ljb25Db25maWcpKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgRE9NIGVsZW1lbnQgZnJvbSB0aGUgZ2l2ZW4gU1ZHIHN0cmluZy5cclxuICAgKi9cclxuICBwcml2YXRlIF9zdmdFbGVtZW50RnJvbVN0cmluZyhzdHI6IFRydXN0ZWRIVE1MKTogU1ZHRWxlbWVudCB7XHJcbiAgICBjb25zdCBkaXYgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgIGRpdi5pbm5lckhUTUwgPSBzdHIgYXMgdW5rbm93biBhcyBzdHJpbmc7XHJcbiAgICBjb25zdCBzdmcgPSBkaXYucXVlcnlTZWxlY3Rvcignc3ZnJykgYXMgU1ZHRWxlbWVudDtcclxuXHJcbiAgICBpZiAoIXN2Zykge1xyXG4gICAgICB0aHJvdyBFcnJvcignPHN2Zz4gdGFnIG5vdCBmb3VuZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdmc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb252ZXJ0cyBhbiBlbGVtZW50IGludG8gYW4gU1ZHIG5vZGUgYnkgY2xvbmluZyBhbGwgb2YgaXRzIGNoaWxkcmVuLlxyXG4gICAqL1xyXG4gIC8vIHByaXZhdGUgX3RvU3ZnRWxlbWVudChlbGVtZW50OiBFbGVtZW50KTogU1ZHRWxlbWVudCB7XHJcbiAgLy8gICBjb25zdCBzdmcgPSB0aGlzLl9zdmdFbGVtZW50RnJvbVN0cmluZyh0cnVzdGVkSFRNTEZyb21TdHJpbmcoJzxzdmc+PC9zdmc+JykpO1xyXG4gIC8vICAgY29uc3QgYXR0cmlidXRlcyA9IGVsZW1lbnQuYXR0cmlidXRlcztcclxuXHJcbiAgLy8gICAvLyBDb3B5IG92ZXIgYWxsIHRoZSBhdHRyaWJ1dGVzIGZyb20gdGhlIGBzeW1ib2xgIHRvIHRoZSBuZXcgU1ZHLCBleGNlcHQgdGhlIGlkLlxyXG4gIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgLy8gICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBhdHRyaWJ1dGVzW2ldO1xyXG5cclxuICAvLyAgICAgaWYgKG5hbWUgIT09ICdpZCcpIHtcclxuICAvLyAgICAgICBzdmcuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfVxyXG5cclxuICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgLy8gICAgIGlmIChlbGVtZW50LmNoaWxkTm9kZXNbaV0ubm9kZVR5cGUgPT09IHRoaXMuX2RvY3VtZW50LkVMRU1FTlRfTk9ERSkge1xyXG4gIC8vICAgICAgIHN2Zy5hcHBlbmRDaGlsZChlbGVtZW50LmNoaWxkTm9kZXNbaV0uY2xvbmVOb2RlKHRydWUpKTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfVxyXG5cclxuICAvLyAgIHJldHVybiBzdmc7XHJcbiAgLy8gfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IGF0dHJpYnV0ZXMgZm9yIGFuIFNWRyBlbGVtZW50IHRvIGJlIHVzZWQgYXMgYW4gaWNvbi5cclxuICAgKi9cclxuICBwcml2YXRlIF9zZXRTdmdBdHRyaWJ1dGVzKHN2ZzogU1ZHRWxlbWVudCwgb3B0aW9ucz86IEljb25PcHRpb25zKTogU1ZHRWxlbWVudCB7XHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdmaXQnLCAnJyk7XHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMTAwJScpO1xyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTAwJScpO1xyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWlkWU1pZCBtZWV0Jyk7XHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdmb2N1c2FibGUnLCAnZmFsc2UnKTsgLy8gRGlzYWJsZSBJRTExIGRlZmF1bHQgYmVoYXZpb3IgdG8gbWFrZSBTVkdzIGZvY3VzYWJsZS5cclxuXHJcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnZpZXdCb3gpIHtcclxuICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsIG9wdGlvbnMudmlld0JveCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN2ZztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB3aGljaCBwcm9kdWNlcyB0aGUgc3RyaW5nIGNvbnRlbnRzIG9mIHRoZSBnaXZlbiBpY29uLiBSZXN1bHRzIG1heSBiZVxyXG4gICAqIGNhY2hlZCwgc28gZnV0dXJlIGNhbGxzIHdpdGggdGhlIHNhbWUgVVJMIG1heSBub3QgY2F1c2UgYW5vdGhlciBIVFRQIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZmV0Y2hJY29uKGljb25Db25maWc6IFN2Z0ljb25Db25maWcpOiBPYnNlcnZhYmxlPFRydXN0ZWRIVE1MPiB7XHJcbiAgICBjb25zdCB7dXJsOiBzYWZlVXJsLCBvcHRpb25zfSA9IGljb25Db25maWc7XHJcbiAgICBjb25zdCB3aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zPy53aXRoQ3JlZGVudGlhbHMgPz8gZmFsc2U7XHJcblxyXG4gICAgaWYgKCF0aGlzLl9odHRwQ2xpZW50KSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdDb3VsZCBub3QgZmV0Y2ggaWNvbiwgSHR0cENsaWVudCBpcyBub3QgYXZhaWxhYmxlLicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IGFkZCBhbiBuZ0Rldk1vZGUgY2hlY2tcclxuICAgIGlmIChzYWZlVXJsID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYENhbm5vdCBmZXRjaCBpY29uIGZyb20gVVJMIFwiJHtzYWZlVXJsfVwiLmApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVybCA9IHRoaXMuX3Nhbml0aXplci5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuUkVTT1VSQ0VfVVJMLCBzYWZlVXJsKTtcclxuXHJcbiAgICAvLyBUT0RPOiBhZGQgYW4gbmdEZXZNb2RlIGNoZWNrXHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgRmFpbGVkIHRvIHNhbml0aXplIFVSTDogJHtzYWZlVXJsfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFN0b3JlIGluLXByb2dyZXNzIGZldGNoZXMgdG8gYXZvaWQgc2VuZGluZyBhIGR1cGxpY2F0ZSByZXF1ZXN0IGZvciBhIFVSTCB3aGVuIHRoZXJlIGlzXHJcbiAgICAvLyBhbHJlYWR5IGEgcmVxdWVzdCBpbiBwcm9ncmVzcyBmb3IgdGhhdCBVUkwuIEl0J3MgbmVjZXNzYXJ5IHRvIGNhbGwgc2hhcmUoKSBvbiB0aGVcclxuICAgIC8vIE9ic2VydmFibGUgcmV0dXJuZWQgYnkgaHR0cC5nZXQoKSBzbyB0aGF0IG11bHRpcGxlIHN1YnNjcmliZXJzIGRvbid0IGNhdXNlIG11bHRpcGxlIFhIUnMuXHJcbiAgICBjb25zdCBpblByb2dyZXNzRmV0Y2ggPSB0aGlzLl9pblByb2dyZXNzVXJsRmV0Y2hlcy5nZXQodXJsKTtcclxuXHJcbiAgICBpZiAoaW5Qcm9ncmVzc0ZldGNoKSB7XHJcbiAgICAgIHJldHVybiBpblByb2dyZXNzRmV0Y2g7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVxID0gdGhpcy5faHR0cENsaWVudC5nZXQodXJsLCB7cmVzcG9uc2VUeXBlOiAndGV4dCcsIHdpdGhDcmVkZW50aWFsc30pLnBpcGUoXHJcbiAgICAgIG1hcChzdmcgPT4ge1xyXG4gICAgICAgIC8vIFNlY3VyaXR5OiBUaGlzIFNWRyBpcyBmZXRjaGVkIGZyb20gYSBTYWZlUmVzb3VyY2VVcmwsIGFuZCBpcyB0aHVzXHJcbiAgICAgICAgLy8gdHJ1c3RlZCBIVE1MLlxyXG4gICAgICAgIHJldHVybiB0cnVzdGVkSFRNTEZyb21TdHJpbmcoc3ZnKTtcclxuICAgICAgfSksXHJcbiAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMuX2luUHJvZ3Jlc3NVcmxGZXRjaGVzLmRlbGV0ZSh1cmwpKSxcclxuICAgICAgc2hhcmUoKSxcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5faW5Qcm9ncmVzc1VybEZldGNoZXMuc2V0KHVybCwgcmVxKTtcclxuICAgIHJldHVybiByZXE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlcnMgYW4gaWNvbiBjb25maWcgYnkgbmFtZSBpbiB0aGUgc3BlY2lmaWVkIG5hbWVzcGFjZS5cclxuICAgKiBAcGFyYW0gbmFtZXNwYWNlIE5hbWVzcGFjZSBpbiB3aGljaCB0byByZWdpc3RlciB0aGUgaWNvbiBjb25maWcuXHJcbiAgICogQHBhcmFtIGljb25OYW1lIE5hbWUgdW5kZXIgd2hpY2ggdG8gcmVnaXN0ZXIgdGhlIGNvbmZpZy5cclxuICAgKiBAcGFyYW0gY29uZmlnIENvbmZpZyB0byBiZSByZWdpc3RlcmVkLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2FkZFN2Z0ljb25Db25maWcobmFtZXNwYWNlOiBzdHJpbmcsIGljb25OYW1lOiBzdHJpbmcsIGNvbmZpZzogU3ZnSWNvbkNvbmZpZyk6IHRoaXMge1xyXG4gICAgdGhpcy5fc3ZnSWNvbkNvbmZpZ3Muc2V0KGljb25LZXkobmFtZXNwYWNlLCBpY29uTmFtZSksIGNvbmZpZyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKiBQYXJzZXMgYSBjb25maWcncyB0ZXh0IGludG8gYW4gU1ZHIGVsZW1lbnQuICovXHJcbiAgcHJpdmF0ZSBfc3ZnRWxlbWVudEZyb21Db25maWcoY29uZmlnOiBMb2FkZWRTdmdJY29uQ29uZmlnKTogU1ZHRWxlbWVudCB7XHJcbiAgICBpZiAoIWNvbmZpZy5zdmdFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IHN2ZyA9IHRoaXMuX3N2Z0VsZW1lbnRGcm9tU3RyaW5nKGNvbmZpZy5zdmdUZXh0KTtcclxuICAgICAgdGhpcy5fc2V0U3ZnQXR0cmlidXRlcyhzdmcsIGNvbmZpZy5vcHRpb25zKTtcclxuICAgICAgY29uZmlnLnN2Z0VsZW1lbnQgPSBzdmc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZy5zdmdFbGVtZW50O1xyXG4gIH1cclxufVxyXG5cclxuLyoqIENsb25lcyBhbiBTVkdFbGVtZW50IHdoaWxlIHByZXNlcnZpbmcgdHlwZSBpbmZvcm1hdGlvbi4gKi9cclxuZnVuY3Rpb24gY2xvbmVTdmcoc3ZnOiBTVkdFbGVtZW50KTogU1ZHRWxlbWVudCB7XHJcbiAgcmV0dXJuIHN2Zy5jbG9uZU5vZGUodHJ1ZSkgYXMgU1ZHRWxlbWVudDtcclxufVxyXG5cclxuLyoqIFJldHVybnMgdGhlIGNhY2hlIGtleSB0byB1c2UgZm9yIGFuIGljb24gbmFtZXNwYWNlIGFuZCBuYW1lLiAqL1xyXG5mdW5jdGlvbiBpY29uS2V5KG5hbWVzcGFjZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICByZXR1cm4gbmFtZXNwYWNlICsgJzonICsgbmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTYWZlVXJsV2l0aE9wdGlvbnModmFsdWU6IGFueSk6IHZhbHVlIGlzIFNhZmVSZXNvdXJjZVVybFdpdGhJY29uT3B0aW9ucyB7XHJcbiAgcmV0dXJuICEhKHZhbHVlLnVybCAmJiB2YWx1ZS5vcHRpb25zKTtcclxufVxyXG4iXX0=