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
    constructor(_httpClient, _sanitizer, document, _errorHandler, _symbolRegistry) {
        this._httpClient = _httpClient;
        this._sanitizer = _sanitizer;
        this._errorHandler = _errorHandler;
        this._symbolRegistry = _symbolRegistry;
        this._document = document;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWljb24tcmVnaXN0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvY29tbW9uL3NlcnZpY2UvbXJkLWljb24tcmVnaXN0cnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsT0FBTyxFQUFnQixNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQWMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBZ0MsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7QUFtQnRHOzs7R0FHRztBQUNILElBQUksTUFBNEMsQ0FBQztBQUVqRDs7O0dBR0c7QUFDSCxTQUFTLFNBQVM7SUFDaEIsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1FBQ3hCLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUNqQyxNQUFNLFFBQVEsR0FBRyxNQUE4RCxDQUFDO1lBQ2hGLElBQUksUUFBUSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7Z0JBQ3ZDLE1BQU0sR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsRUFBRTtvQkFDaEUsVUFBVSxFQUFFLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2lCQUM3QixDQUFDLENBQUM7YUFDSjtTQUNGO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQ7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLFVBQVUscUJBQXFCLENBQUMsSUFBWTtJQUNo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QUcsR0FBRyxJQUFJLENBQUM7QUFDaEMsQ0FBQztBQUVELFNBQVMsb0JBQW9CLENBQUMsS0FBVTtJQUN0QyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEVycm9ySGFuZGxlciwgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2VjdXJpdHlDb250ZXh0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwsIFNhZmVSZXNvdXJjZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSwgbWFwLCBPYnNlcnZhYmxlLCBvZiwgc2hhcmUsIHRhcCwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNUkRfSUNPTl9OQU1FU1BBQ0UsIE1yZEljb25TeW1ib2xSZWdpc3RyeVNlcnZpY2UgfSBmcm9tICcuL21yZC1pY29uLXN5bWJvbC1yZWdpc3RyeS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBUcnVzdGVkSFRNTCB7XHJcbiAgX19icmFuZF9fOiAnVHJ1c3RlZEhUTUwnO1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgVHJ1c3RlZFR5cGVQb2xpY3lGYWN0b3J5IHtcclxuICBjcmVhdGVQb2xpY3koXHJcbiAgICBwb2xpY3lOYW1lOiBzdHJpbmcsXHJcbiAgICBwb2xpY3lPcHRpb25zOiB7XHJcbiAgICAgIGNyZWF0ZUhUTUw/OiAoaW5wdXQ6IHN0cmluZykgPT4gc3RyaW5nO1xyXG4gICAgfSxcclxuICApOiBUcnVzdGVkVHlwZVBvbGljeTtcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFRydXN0ZWRUeXBlUG9saWN5IHtcclxuICBjcmVhdGVIVE1MKGlucHV0OiBzdHJpbmcpOiBUcnVzdGVkSFRNTDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBUcnVzdGVkIFR5cGVzIHBvbGljeSwgb3IgbnVsbCBpZiBUcnVzdGVkIFR5cGVzIGFyZSBub3RcclxuICogZW5hYmxlZC9zdXBwb3J0ZWQsIG9yIHVuZGVmaW5lZCBpZiB0aGUgcG9saWN5IGhhcyBub3QgYmVlbiBjcmVhdGVkIHlldC5cclxuICovXHJcbmxldCBwb2xpY3k6IFRydXN0ZWRUeXBlUG9saWN5IHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBUcnVzdGVkIFR5cGVzIHBvbGljeSwgb3IgbnVsbCBpZiBUcnVzdGVkIFR5cGVzIGFyZSBub3RcclxuICogZW5hYmxlZC9zdXBwb3J0ZWQuIFRoZSBmaXJzdCBjYWxsIHRvIHRoaXMgZnVuY3Rpb24gd2lsbCBjcmVhdGUgdGhlIHBvbGljeS5cclxuICovXHJcbmZ1bmN0aW9uIGdldFBvbGljeSgpOiBUcnVzdGVkVHlwZVBvbGljeSB8IG51bGwge1xyXG4gIGlmIChwb2xpY3kgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcG9saWN5ID0gbnVsbDtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBjb25zdCB0dFdpbmRvdyA9IHdpbmRvdyBhcyB1bmtub3duIGFzIHt0cnVzdGVkVHlwZXM/OiBUcnVzdGVkVHlwZVBvbGljeUZhY3Rvcnl9O1xyXG4gICAgICBpZiAodHRXaW5kb3cudHJ1c3RlZFR5cGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBwb2xpY3kgPSB0dFdpbmRvdy50cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KCdhbmd1bGFyI2NvbXBvbmVudHMnLCB7XHJcbiAgICAgICAgICBjcmVhdGVIVE1MOiAoczogc3RyaW5nKSA9PiBzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwb2xpY3k7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVbnNhZmVseSBwcm9tb3RlIGEgc3RyaW5nIHRvIGEgVHJ1c3RlZEhUTUwsIGZhbGxpbmcgYmFjayB0byBzdHJpbmdzIHdoZW5cclxuICogVHJ1c3RlZCBUeXBlcyBhcmUgbm90IGF2YWlsYWJsZS5cclxuICogQHNlY3VyaXR5IFRoaXMgaXMgYSBzZWN1cml0eS1zZW5zaXRpdmUgZnVuY3Rpb247IGFueSB1c2Ugb2YgdGhpcyBmdW5jdGlvblxyXG4gKiBtdXN0IGdvIHRocm91Z2ggc2VjdXJpdHkgcmV2aWV3LiBJbiBwYXJ0aWN1bGFyLCBpdCBtdXN0IGJlIGFzc3VyZWQgdGhhdCB0aGVcclxuICogcHJvdmlkZWQgc3RyaW5nIHdpbGwgbmV2ZXIgY2F1c2UgYW4gWFNTIHZ1bG5lcmFiaWxpdHkgaWYgdXNlZCBpbiBhIGNvbnRleHRcclxuICogdGhhdCB3aWxsIGJlIGludGVycHJldGVkIGFzIEhUTUwgYnkgYSBicm93c2VyLCBlLmcuIHdoZW4gYXNzaWduaW5nIHRvXHJcbiAqIGVsZW1lbnQuaW5uZXJIVE1MLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRydXN0ZWRIVE1MRnJvbVN0cmluZyhodG1sOiBzdHJpbmcpOiBUcnVzdGVkSFRNTCB7XHJcbiAgcmV0dXJuIGdldFBvbGljeSgpPy5jcmVhdGVIVE1MKGh0bWwpIHx8IChodG1sIGFzIHVua25vd24gYXMgVHJ1c3RlZEhUTUwpO1xyXG59XHJcblxyXG4vKiogT3B0aW9ucyB0aGF0IGNhbiBiZSB1c2VkIHRvIGNvbmZpZ3VyZSBob3cgYW4gaWNvbiBvciB0aGUgaWNvbnMgaW4gYW4gaWNvbiBzZXQgYXJlIHByZXNlbnRlZC4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJY29uT3B0aW9ucyB7XHJcbiAgLyoqIFZpZXcgYm94IHRvIHNldCBvbiB0aGUgaWNvbi4gKi9cclxuICB2aWV3Qm94Pzogc3RyaW5nO1xyXG5cclxuICAvKiogV2hldGhlciBvciBub3QgdG8gZmV0Y2ggdGhlIGljb24gb3IgaWNvbiBzZXQgdXNpbmcgSFRUUCBjcmVkZW50aWFscy4gKi9cclxuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGludm9rZWQgYnkgdGhlIGljb24gcmVnaXN0cnkgd2hlbiB0cnlpbmcgdG8gcmVzb2x2ZSB0aGVcclxuICogVVJMIGZyb20gd2hpY2ggdG8gZmV0Y2ggYW4gaWNvbi4gVGhlIHJldHVybmVkIFVSTCB3aWxsIGJlIHVzZWQgdG8gbWFrZSBhIHJlcXVlc3QgZm9yIHRoZSBpY29uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgSWNvblJlc29sdmVyID0gKFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICBuYW1lc3BhY2U6IHN0cmluZyxcclxuKSA9PiBTYWZlUmVzb3VyY2VVcmwgfCBTYWZlUmVzb3VyY2VVcmxXaXRoSWNvbk9wdGlvbnMgfCBudWxsO1xyXG5cclxuLyoqIE9iamVjdCB0aGF0IHNwZWNpZmllcyBhIFVSTCBmcm9tIHdoaWNoIHRvIGZldGNoIGFuIGljb24gYW5kIHRoZSBvcHRpb25zIHRvIHVzZSBmb3IgaXQuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2FmZVJlc291cmNlVXJsV2l0aEljb25PcHRpb25zIHtcclxuICB1cmw6IFNhZmVSZXNvdXJjZVVybDtcclxuICBvcHRpb25zOiBJY29uT3B0aW9ucztcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbmZpZ3VyYXRpb24gZm9yIGFuIGljb24sIGluY2x1ZGluZyB0aGUgVVJMIGFuZCBwb3NzaWJseSB0aGUgY2FjaGVkIFNWRyBlbGVtZW50LlxyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5jbGFzcyBTdmdJY29uQ29uZmlnIHtcclxuICBzdmdFbGVtZW50OiBTVkdFbGVtZW50IHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgdXJsOiBTYWZlUmVzb3VyY2VVcmwsXHJcbiAgICBwdWJsaWMgc3ZnVGV4dDogVHJ1c3RlZEhUTUwgfCBudWxsLFxyXG4gICAgcHVibGljIG9wdGlvbnM/OiBJY29uT3B0aW9ucyxcclxuICApIHt9XHJcbn1cclxuLyoqIEljb24gY29uZmlndXJhdGlvbiB3aG9zZSBjb250ZW50IGhhcyBhbHJlYWR5IGJlZW4gbG9hZGVkLiAqL1xyXG50eXBlIExvYWRlZFN2Z0ljb25Db25maWcgPSBTdmdJY29uQ29uZmlnICYge3N2Z1RleHQ6IFRydXN0ZWRIVE1MfTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZEljb25SZWdpc3RyeVNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIF9kb2N1bWVudDogRG9jdW1lbnQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFVSTHMgYW5kIGNhY2hlZCBTVkcgZWxlbWVudHMgZm9yIGluZGl2aWR1YWwgaWNvbnMuIEtleXMgYXJlIG9mIHRoZSBmb3JtYXQgXCJbbmFtZXNwYWNlXTpbaWNvbl1cIi5cclxuICAgKi9cclxuICBwcml2YXRlIF9zdmdJY29uQ29uZmlncyA9IG5ldyBNYXA8c3RyaW5nLCBTdmdJY29uQ29uZmlnPigpO1xyXG5cclxuICAvKiogQ2FjaGUgZm9yIGljb25zIGxvYWRlZCBieSBkaXJlY3QgVVJMcy4gKi9cclxuICBwcml2YXRlIF9jYWNoZWRJY29uc0J5VXJsID0gbmV3IE1hcDxzdHJpbmcsIFNWR0VsZW1lbnQ+KCk7XHJcblxyXG4gIC8qKiBJbi1wcm9ncmVzcyBpY29uIGZldGNoZXMuIFVzZWQgdG8gY29hbGVzY2UgbXVsdGlwbGUgcmVxdWVzdHMgdG8gdGhlIHNhbWUgVVJMLiAqL1xyXG4gIHByaXZhdGUgX2luUHJvZ3Jlc3NVcmxGZXRjaGVzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmFibGU8VHJ1c3RlZEhUTUw+PigpO1xyXG5cclxuICAvKiogUmVnaXN0ZXJlZCBpY29uIHJlc29sdmVyIGZ1bmN0aW9ucy4gKi9cclxuICBwcml2YXRlIF9yZXNvbHZlcnM6IEljb25SZXNvbHZlcltdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfaHR0cENsaWVudDogSHR0cENsaWVudCxcclxuICAgIHByaXZhdGUgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ6IGFueSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Vycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc3ltYm9sUmVnaXN0cnk6IE1yZEljb25TeW1ib2xSZWdpc3RyeVNlcnZpY2UsXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0cmllcnQgZWluIEljb24gYXVzIFNWRy1NYXJrdXAgKG9obmUgSFRUUCkgaW0gU3RhbmRhcmQtTmFtZW5zcmF1bS5cclxuICAgKiBAcGFyYW0gbGl0ZXJhbCBNaXQgYERvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbGAgZnJlaWdlZ2ViZW5lcyBTVkctTWFya3VwLlxyXG4gICAqL1xyXG4gIGFkZFN2Z0ljb25MaXRlcmFsKGljb25OYW1lOiBzdHJpbmcsIGxpdGVyYWw6IFNhZmVIdG1sLCBvcHRpb25zPzogSWNvbk9wdGlvbnMpOiB0aGlzIHtcclxuICAgIHJldHVybiB0aGlzLmFkZFN2Z0ljb25MaXRlcmFsSW5OYW1lc3BhY2UoJycsIGljb25OYW1lLCBsaXRlcmFsLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGFkZFN2Z0ljb25MaXRlcmFsSW5OYW1lc3BhY2UobmFtZXNwYWNlOiBzdHJpbmcsIGljb25OYW1lOiBzdHJpbmcsIGxpdGVyYWw6IFNhZmVIdG1sLCBvcHRpb25zPzogSWNvbk9wdGlvbnMpOiB0aGlzIHtcclxuICAgIGNvbnN0IGJlcmVpbmlndCA9IHRoaXMuX3Nhbml0aXplci5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuSFRNTCwgbGl0ZXJhbCk7XHJcbiAgICBpZiAoIWJlcmVpbmlndCkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgRGFzIFNWRy1MaXRlcmFsIGZ1ZXIgXCIke2ljb25OYW1lfVwiIGlzdCBsZWVyIG9kZXIgd3VyZGUgdm9tIFNhbml0aXplciBlbnRmZXJudC5gKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9hZGRTdmdJY29uQ29uZmlnKG5hbWVzcGFjZSwgaWNvbk5hbWUsIG5ldyBTdmdJY29uQ29uZmlnKCcnLCB0cnVzdGVkSFRNTEZyb21TdHJpbmcoYmVyZWluaWd0KSwgb3B0aW9ucykpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0cmllcnQgZWluZSBGdW5rdGlvbiwgZGllIHVuYmVrYW5udGUgSWNvbi1OYW1lbiBpbiBlaW5lIFVSTCBhdWZsb2VzdCxcclxuICAgKiB6LiBCLiBgKG5hbWUsIG5zKSA9PiBucyA9PT0gJ2FwcCcgPyBzYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKGBhc3NldHMvJHtuYW1lfS5zdmdgKSA6IG51bGxgLlxyXG4gICAqL1xyXG4gIGFkZFN2Z0ljb25SZXNvbHZlcihyZXNvbHZlcjogSWNvblJlc29sdmVyKTogdGhpcyB7XHJcbiAgICB0aGlzLl9yZXNvbHZlcnMucHVzaChyZXNvbHZlcik7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVyemV1Z3QgZWluIEljb24tRWxlbWVudCBhdXMgU1ZHLU1hcmt1cCwgei4gQi4gYXVzIGRlciBJY29uRmFjdG9yeS5cclxuICAgKiBAc2VjdXJpdHkgRGFzIE1hcmt1cCB3aXJkIG9obmUgU2FuaXRpemluZyB1ZWJlcm5vbW1lbiAtIG51ciBtaXQgc2VsYnN0IGVyemV1Z3RlbiBvZGVyIGltIENvZGUgaGludGVybGVndGVuIFNWR3MgYXVmcnVmZW4uXHJcbiAgICovXHJcbiAgY3JlYXRlU3ZnRWxlbWVudEZyb21UcnVzdGVkU3RyaW5nKHN2Zzogc3RyaW5nLCBvcHRpb25zPzogSWNvbk9wdGlvbnMpOiBTVkdFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLl9zZXRTdmdBdHRyaWJ1dGVzKHRoaXMuX3N2Z0VsZW1lbnRGcm9tU3RyaW5nKHRydXN0ZWRIVE1MRnJvbVN0cmluZyhzdmcpKSwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlcnMgYW4gaWNvbiBieSBVUkwgaW4gdGhlIGRlZmF1bHQgbmFtZXNwYWNlLlxyXG4gICAqIEBwYXJhbSBpY29uTmFtZSBOYW1lIHVuZGVyIHdoaWNoIHRoZSBpY29uIHNob3VsZCBiZSByZWdpc3RlcmVkLlxyXG4gICAqIEBwYXJhbSB1cmxcclxuICAgKi9cclxuICBhZGRTdmdJY29uKGljb25OYW1lOiBzdHJpbmcsIHVybDogU2FmZVJlc291cmNlVXJsLCBvcHRpb25zPzogSWNvbk9wdGlvbnMpOiB0aGlzIHtcclxuICAgIHJldHVybiB0aGlzLmFkZFN2Z0ljb25Jbk5hbWVzcGFjZSgnJywgaWNvbk5hbWUsIHVybCwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlcnMgYW4gaWNvbiBieSBVUkwgaW4gdGhlIHNwZWNpZmllZCBuYW1lc3BhY2UuXHJcbiAgICogQHBhcmFtIG5hbWVzcGFjZSBOYW1lc3BhY2UgaW4gd2hpY2ggdGhlIGljb24gc2hvdWxkIGJlIHJlZ2lzdGVyZWQuXHJcbiAgICogQHBhcmFtIGljb25OYW1lIE5hbWUgdW5kZXIgd2hpY2ggdGhlIGljb24gc2hvdWxkIGJlIHJlZ2lzdGVyZWQuXHJcbiAgICogQHBhcmFtIHVybFxyXG4gICAqL1xyXG4gIGFkZFN2Z0ljb25Jbk5hbWVzcGFjZShcclxuICAgIG5hbWVzcGFjZTogc3RyaW5nLFxyXG4gICAgaWNvbk5hbWU6IHN0cmluZyxcclxuICAgIHVybDogU2FmZVJlc291cmNlVXJsLFxyXG4gICAgb3B0aW9ucz86IEljb25PcHRpb25zLFxyXG4gICk6IHRoaXMge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FkZFN2Z0ljb25Db25maWcobmFtZXNwYWNlLCBpY29uTmFtZSwgbmV3IFN2Z0ljb25Db25maWcodXJsLCBudWxsLCBvcHRpb25zKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBwcm9kdWNlcyB0aGUgaWNvbiAoYXMgYW4gYDxzdmc+YCBET00gZWxlbWVudCkgZnJvbSB0aGUgZ2l2ZW4gVVJMLlxyXG4gICAqIFRoZSByZXNwb25zZSBmcm9tIHRoZSBVUkwgbWF5IGJlIGNhY2hlZCBzbyB0aGlzIHdpbGwgbm90IGFsd2F5cyBjYXVzZSBhbiBIVFRQIHJlcXVlc3QsIGJ1dFxyXG4gICAqIHRoZSBwcm9kdWNlZCBlbGVtZW50IHdpbGwgYWx3YXlzIGJlIGEgbmV3IGNvcHkgb2YgdGhlIG9yaWdpbmFsbHkgZmV0Y2hlZCBpY29uLiAoVGhhdCBpcyxcclxuICAgKiBpdCB3aWxsIG5vdCBjb250YWluIGFueSBtb2RpZmljYXRpb25zIG1hZGUgdG8gZWxlbWVudHMgcHJldmlvdXNseSByZXR1cm5lZCkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc2FmZVVybCBVUkwgZnJvbSB3aGljaCB0byBmZXRjaCB0aGUgU1ZHIGljb24uXHJcbiAgICovXHJcbiAgZ2V0U3ZnSWNvbkZyb21Vcmwoc2FmZVVybDogU2FmZVJlc291cmNlVXJsKTogT2JzZXJ2YWJsZTxTVkdFbGVtZW50PiB7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLl9zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LlJFU09VUkNFX1VSTCwgc2FmZVVybCk7XHJcblxyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEZhaWxlZCB0byBzYW5pdGl6ZSBVUkw6ICR7c2FmZVVybH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYWNoZWRJY29uID0gdGhpcy5fY2FjaGVkSWNvbnNCeVVybC5nZXQodXJsKTtcclxuXHJcbiAgICBpZiAoY2FjaGVkSWNvbikge1xyXG4gICAgICByZXR1cm4gb2YoY2xvbmVTdmcoY2FjaGVkSWNvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9sb2FkU3ZnSWNvbkZyb21Db25maWcobmV3IFN2Z0ljb25Db25maWcoc2FmZVVybCwgbnVsbCkpLnBpcGUoXHJcbiAgICAgIHRhcChzdmcgPT4gdGhpcy5fY2FjaGVkSWNvbnNCeVVybC5zZXQodXJsISwgc3ZnKSksXHJcbiAgICAgIG1hcChzdmcgPT4gY2xvbmVTdmcoc3ZnKSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgcHJvZHVjZXMgdGhlIGljb24gKGFzIGFuIGA8c3ZnPmAgRE9NIGVsZW1lbnQpIHdpdGggdGhlIGdpdmVuIG5hbWVcclxuICAgKiBhbmQgbmFtZXNwYWNlLiBUaGUgaWNvbiBtdXN0IGhhdmUgYmVlbiBwcmV2aW91c2x5IHJlZ2lzdGVyZWQgd2l0aCBhZGRJY29uIG9yIGFkZEljb25TZXQ7XHJcbiAgICogaWYgbm90LCB0aGUgT2JzZXJ2YWJsZSB3aWxsIHRocm93IGFuIGVycm9yLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgaWNvbiB0byBiZSByZXRyaWV2ZWQuXHJcbiAgICogQHBhcmFtIG5hbWVzcGFjZSBOYW1lc3BhY2UgaW4gd2hpY2ggdG8gbG9vayBmb3IgdGhlIGljb24uXHJcbiAgICovXHJcbiAgZ2V0TmFtZWRTdmdJY29uKG5hbWU6IHN0cmluZywgbmFtZXNwYWNlOiBzdHJpbmcgPSAnJyk6IE9ic2VydmFibGU8U1ZHRWxlbWVudD4ge1xyXG4gICAgY29uc3Qga2V5ID0gaWNvbktleShuYW1lc3BhY2UsIG5hbWUpO1xyXG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuX3N2Z0ljb25Db25maWdzLmdldChrZXkpO1xyXG5cclxuICAgIC8vIFJldHVybiAoY29weSBvZikgY2FjaGVkIGljb24gaWYgcG9zc2libGUuXHJcbiAgICBpZiAoY29uZmlnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9nZXRTdmdGcm9tQ29uZmlnKGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3RoZXJ3aXNlIHRyeSB0byByZXNvbHZlIHRoZSBjb25maWcgZnJvbSBvbmUgb2YgdGhlIHJlc29sdmVyIGZ1bmN0aW9ucy5cclxuICAgIGNvbmZpZyA9IHRoaXMuX2dldEljb25Db25maWdGcm9tUmVzb2x2ZXJzKG5hbWVzcGFjZSwgbmFtZSk7XHJcblxyXG4gICAgaWYgKGNvbmZpZykge1xyXG4gICAgICB0aGlzLl9zdmdJY29uQ29uZmlncy5zZXQoa2V5LCBjb25maWcpO1xyXG4gICAgICByZXR1cm4gdGhpcy5fZ2V0U3ZnRnJvbUNvbmZpZyhjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFN5bWJvbGUgZGVyIEljb25GYWN0b3J5IHN0ZWhlbiBvaG5lIFJlZ2lzdHJpZXJ1bmcgdW50ZXIgXCJtcmQ6PG5hbWU+XCIgYmVyZWl0XHJcbiAgICBpZiAobmFtZXNwYWNlID09PSBNUkRfSUNPTl9OQU1FU1BBQ0UpIHtcclxuICAgICAgY29uc3Qgc3ZnID0gdGhpcy5fc3ltYm9sUmVnaXN0cnkuY3JlYXRlU3ZnRnJvbU5hbWUobmFtZSk7XHJcbiAgICAgIGlmIChzdmcpIHtcclxuICAgICAgICBjb25maWcgPSBuZXcgU3ZnSWNvbkNvbmZpZygnJywgdHJ1c3RlZEhUTUxGcm9tU3RyaW5nKHN2ZykpO1xyXG4gICAgICAgIHRoaXMuX3N2Z0ljb25Db25maWdzLnNldChrZXksIGNvbmZpZyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldFN2Z0Zyb21Db25maWcoY29uZmlnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aHJvd0Vycm9yKCgpID0+IEVycm9yKGBJY29uIFwiJHtrZXl9XCIgaXN0IG5pY2h0IHJlZ2lzdHJpZXJ0LmApKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGNhY2hlZCBpY29uIGZvciBhIFN2Z0ljb25Db25maWcgaWYgYXZhaWxhYmxlLCBvciBmZXRjaGVzIGl0IGZyb20gaXRzIFVSTCBpZiBub3QuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZ2V0U3ZnRnJvbUNvbmZpZyhjb25maWc6IFN2Z0ljb25Db25maWcpOiBPYnNlcnZhYmxlPFNWR0VsZW1lbnQ+IHtcclxuICAgIGlmIChjb25maWcuc3ZnVGV4dCkge1xyXG4gICAgICAvLyBXZSBhbHJlYWR5IGhhdmUgdGhlIFNWRyBlbGVtZW50IGZvciB0aGlzIGljb24sIHJldHVybiBhIGNvcHkuXHJcbiAgICAgIHJldHVybiBvZihjbG9uZVN2Zyh0aGlzLl9zdmdFbGVtZW50RnJvbUNvbmZpZyhjb25maWcgYXMgTG9hZGVkU3ZnSWNvbkNvbmZpZykpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEZldGNoIHRoZSBpY29uIGZyb20gdGhlIGNvbmZpZydzIFVSTCwgY2FjaGUgaXQsIGFuZCByZXR1cm4gYSBjb3B5LlxyXG4gICAgICByZXR1cm4gdGhpcy5fbG9hZFN2Z0ljb25Gcm9tQ29uZmlnKGNvbmZpZykucGlwZShtYXAoc3ZnID0+IGNsb25lU3ZnKHN2ZykpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBUcmllcyB0byBjcmVhdGUgYW4gaWNvbiBjb25maWcgdGhyb3VnaCB0aGUgcmVnaXN0ZXJlZCByZXNvbHZlciBmdW5jdGlvbnMuICovXHJcbiAgcHJpdmF0ZSBfZ2V0SWNvbkNvbmZpZ0Zyb21SZXNvbHZlcnMobmFtZXNwYWNlOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IFN2Z0ljb25Db25maWcgfCB1bmRlZmluZWQge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9yZXNvbHZlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fcmVzb2x2ZXJzW2ldKG5hbWUsIG5hbWVzcGFjZSk7XHJcblxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgcmV0dXJuIGlzU2FmZVVybFdpdGhPcHRpb25zKHJlc3VsdClcclxuICAgICAgICAgID8gbmV3IFN2Z0ljb25Db25maWcocmVzdWx0LnVybCwgbnVsbCwgcmVzdWx0Lm9wdGlvbnMpXHJcbiAgICAgICAgICA6IG5ldyBTdmdJY29uQ29uZmlnKHJlc3VsdCwgbnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9hZHMgdGhlIGNvbnRlbnQgb2YgdGhlIGljb24gVVJMIHNwZWNpZmllZCBpbiB0aGUgU3ZnSWNvbkNvbmZpZyBhbmQgY3JlYXRlcyBhbiBTVkcgZWxlbWVudFxyXG4gICAqIGZyb20gaXQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfbG9hZFN2Z0ljb25Gcm9tQ29uZmlnKGNvbmZpZzogU3ZnSWNvbkNvbmZpZyk6IE9ic2VydmFibGU8U1ZHRWxlbWVudD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZldGNoSWNvbihjb25maWcpLnBpcGUoXHJcbiAgICAgIHRhcChzdmdUZXh0ID0+IChjb25maWcuc3ZnVGV4dCA9IHN2Z1RleHQpKSxcclxuICAgICAgbWFwKCgpID0+IHRoaXMuX3N2Z0VsZW1lbnRGcm9tQ29uZmlnKGNvbmZpZyBhcyBMb2FkZWRTdmdJY29uQ29uZmlnKSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIERPTSBlbGVtZW50IGZyb20gdGhlIGdpdmVuIFNWRyBzdHJpbmcuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfc3ZnRWxlbWVudEZyb21TdHJpbmcoc3RyOiBUcnVzdGVkSFRNTCk6IFNWR0VsZW1lbnQge1xyXG4gICAgY29uc3QgZGl2ID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XHJcbiAgICBkaXYuaW5uZXJIVE1MID0gc3RyIGFzIHVua25vd24gYXMgc3RyaW5nO1xyXG4gICAgY29uc3Qgc3ZnID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpIGFzIFNWR0VsZW1lbnQ7XHJcblxyXG4gICAgaWYgKCFzdmcpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJzxzdmc+IHRhZyBub3QgZm91bmQnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3ZnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVydHMgYW4gZWxlbWVudCBpbnRvIGFuIFNWRyBub2RlIGJ5IGNsb25pbmcgYWxsIG9mIGl0cyBjaGlsZHJlbi5cclxuICAgKi9cclxuICAvLyBwcml2YXRlIF90b1N2Z0VsZW1lbnQoZWxlbWVudDogRWxlbWVudCk6IFNWR0VsZW1lbnQge1xyXG4gIC8vICAgY29uc3Qgc3ZnID0gdGhpcy5fc3ZnRWxlbWVudEZyb21TdHJpbmcodHJ1c3RlZEhUTUxGcm9tU3RyaW5nKCc8c3ZnPjwvc3ZnPicpKTtcclxuICAvLyAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBlbGVtZW50LmF0dHJpYnV0ZXM7XHJcblxyXG4gIC8vICAgLy8gQ29weSBvdmVyIGFsbCB0aGUgYXR0cmlidXRlcyBmcm9tIHRoZSBgc3ltYm9sYCB0byB0aGUgbmV3IFNWRywgZXhjZXB0IHRoZSBpZC5cclxuICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xyXG4gIC8vICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gYXR0cmlidXRlc1tpXTtcclxuXHJcbiAgLy8gICAgIGlmIChuYW1lICE9PSAnaWQnKSB7XHJcbiAgLy8gICAgICAgc3ZnLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH1cclxuXHJcbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gIC8vICAgICBpZiAoZWxlbWVudC5jaGlsZE5vZGVzW2ldLm5vZGVUeXBlID09PSB0aGlzLl9kb2N1bWVudC5FTEVNRU5UX05PREUpIHtcclxuICAvLyAgICAgICBzdmcuYXBwZW5kQ2hpbGQoZWxlbWVudC5jaGlsZE5vZGVzW2ldLmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH1cclxuXHJcbiAgLy8gICByZXR1cm4gc3ZnO1xyXG4gIC8vIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgZGVmYXVsdCBhdHRyaWJ1dGVzIGZvciBhbiBTVkcgZWxlbWVudCB0byBiZSB1c2VkIGFzIGFuIGljb24uXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfc2V0U3ZnQXR0cmlidXRlcyhzdmc6IFNWR0VsZW1lbnQsIG9wdGlvbnM/OiBJY29uT3B0aW9ucyk6IFNWR0VsZW1lbnQge1xyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgnZml0JywgJycpO1xyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzEwMCUnKTtcclxuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzEwMCUnKTtcclxuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1pZFlNaWQgbWVldCcpO1xyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgnZm9jdXNhYmxlJywgJ2ZhbHNlJyk7IC8vIERpc2FibGUgSUUxMSBkZWZhdWx0IGJlaGF2aW9yIHRvIG1ha2UgU1ZHcyBmb2N1c2FibGUuXHJcblxyXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy52aWV3Qm94KSB7XHJcbiAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBvcHRpb25zLnZpZXdCb3gpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdmc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgd2hpY2ggcHJvZHVjZXMgdGhlIHN0cmluZyBjb250ZW50cyBvZiB0aGUgZ2l2ZW4gaWNvbi4gUmVzdWx0cyBtYXkgYmVcclxuICAgKiBjYWNoZWQsIHNvIGZ1dHVyZSBjYWxscyB3aXRoIHRoZSBzYW1lIFVSTCBtYXkgbm90IGNhdXNlIGFub3RoZXIgSFRUUCByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2ZldGNoSWNvbihpY29uQ29uZmlnOiBTdmdJY29uQ29uZmlnKTogT2JzZXJ2YWJsZTxUcnVzdGVkSFRNTD4ge1xyXG4gICAgY29uc3Qge3VybDogc2FmZVVybCwgb3B0aW9uc30gPSBpY29uQ29uZmlnO1xyXG4gICAgY29uc3Qgd2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucz8ud2l0aENyZWRlbnRpYWxzID8/IGZhbHNlO1xyXG5cclxuICAgIGlmICghdGhpcy5faHR0cENsaWVudCkge1xyXG4gICAgICB0aHJvdyBFcnJvcignQ291bGQgbm90IGZldGNoIGljb24sIEh0dHBDbGllbnQgaXMgbm90IGF2YWlsYWJsZS4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBhZGQgYW4gbmdEZXZNb2RlIGNoZWNrXHJcbiAgICBpZiAoc2FmZVVybCA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBDYW5ub3QgZmV0Y2ggaWNvbiBmcm9tIFVSTCBcIiR7c2FmZVVybH1cIi5gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLl9zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LlJFU09VUkNFX1VSTCwgc2FmZVVybCk7XHJcblxyXG4gICAgLy8gVE9ETzogYWRkIGFuIG5nRGV2TW9kZSBjaGVja1xyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEZhaWxlZCB0byBzYW5pdGl6ZSBVUkw6ICR7c2FmZVVybH1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdG9yZSBpbi1wcm9ncmVzcyBmZXRjaGVzIHRvIGF2b2lkIHNlbmRpbmcgYSBkdXBsaWNhdGUgcmVxdWVzdCBmb3IgYSBVUkwgd2hlbiB0aGVyZSBpc1xyXG4gICAgLy8gYWxyZWFkeSBhIHJlcXVlc3QgaW4gcHJvZ3Jlc3MgZm9yIHRoYXQgVVJMLiBJdCdzIG5lY2Vzc2FyeSB0byBjYWxsIHNoYXJlKCkgb24gdGhlXHJcbiAgICAvLyBPYnNlcnZhYmxlIHJldHVybmVkIGJ5IGh0dHAuZ2V0KCkgc28gdGhhdCBtdWx0aXBsZSBzdWJzY3JpYmVycyBkb24ndCBjYXVzZSBtdWx0aXBsZSBYSFJzLlxyXG4gICAgY29uc3QgaW5Qcm9ncmVzc0ZldGNoID0gdGhpcy5faW5Qcm9ncmVzc1VybEZldGNoZXMuZ2V0KHVybCk7XHJcblxyXG4gICAgaWYgKGluUHJvZ3Jlc3NGZXRjaCkge1xyXG4gICAgICByZXR1cm4gaW5Qcm9ncmVzc0ZldGNoO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcSA9IHRoaXMuX2h0dHBDbGllbnQuZ2V0KHVybCwge3Jlc3BvbnNlVHlwZTogJ3RleHQnLCB3aXRoQ3JlZGVudGlhbHN9KS5waXBlKFxyXG4gICAgICBtYXAoc3ZnID0+IHtcclxuICAgICAgICAvLyBTZWN1cml0eTogVGhpcyBTVkcgaXMgZmV0Y2hlZCBmcm9tIGEgU2FmZVJlc291cmNlVXJsLCBhbmQgaXMgdGh1c1xyXG4gICAgICAgIC8vIHRydXN0ZWQgSFRNTC5cclxuICAgICAgICByZXR1cm4gdHJ1c3RlZEhUTUxGcm9tU3RyaW5nKHN2Zyk7XHJcbiAgICAgIH0pLFxyXG4gICAgICBmaW5hbGl6ZSgoKSA9PiB0aGlzLl9pblByb2dyZXNzVXJsRmV0Y2hlcy5kZWxldGUodXJsKSksXHJcbiAgICAgIHNoYXJlKCksXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX2luUHJvZ3Jlc3NVcmxGZXRjaGVzLnNldCh1cmwsIHJlcSk7XHJcbiAgICByZXR1cm4gcmVxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXJzIGFuIGljb24gY29uZmlnIGJ5IG5hbWUgaW4gdGhlIHNwZWNpZmllZCBuYW1lc3BhY2UuXHJcbiAgICogQHBhcmFtIG5hbWVzcGFjZSBOYW1lc3BhY2UgaW4gd2hpY2ggdG8gcmVnaXN0ZXIgdGhlIGljb24gY29uZmlnLlxyXG4gICAqIEBwYXJhbSBpY29uTmFtZSBOYW1lIHVuZGVyIHdoaWNoIHRvIHJlZ2lzdGVyIHRoZSBjb25maWcuXHJcbiAgICogQHBhcmFtIGNvbmZpZyBDb25maWcgdG8gYmUgcmVnaXN0ZXJlZC5cclxuICAgKi9cclxuICBwcml2YXRlIF9hZGRTdmdJY29uQ29uZmlnKG5hbWVzcGFjZTogc3RyaW5nLCBpY29uTmFtZTogc3RyaW5nLCBjb25maWc6IFN2Z0ljb25Db25maWcpOiB0aGlzIHtcclxuICAgIHRoaXMuX3N2Z0ljb25Db25maWdzLnNldChpY29uS2V5KG5hbWVzcGFjZSwgaWNvbk5hbWUpLCBjb25maWcpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKiogUGFyc2VzIGEgY29uZmlnJ3MgdGV4dCBpbnRvIGFuIFNWRyBlbGVtZW50LiAqL1xyXG4gIHByaXZhdGUgX3N2Z0VsZW1lbnRGcm9tQ29uZmlnKGNvbmZpZzogTG9hZGVkU3ZnSWNvbkNvbmZpZyk6IFNWR0VsZW1lbnQge1xyXG4gICAgaWYgKCFjb25maWcuc3ZnRWxlbWVudCkge1xyXG4gICAgICBjb25zdCBzdmcgPSB0aGlzLl9zdmdFbGVtZW50RnJvbVN0cmluZyhjb25maWcuc3ZnVGV4dCk7XHJcbiAgICAgIHRoaXMuX3NldFN2Z0F0dHJpYnV0ZXMoc3ZnLCBjb25maWcub3B0aW9ucyk7XHJcbiAgICAgIGNvbmZpZy5zdmdFbGVtZW50ID0gc3ZnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb25maWcuc3ZnRWxlbWVudDtcclxuICB9XHJcbn1cclxuXHJcbi8qKiBDbG9uZXMgYW4gU1ZHRWxlbWVudCB3aGlsZSBwcmVzZXJ2aW5nIHR5cGUgaW5mb3JtYXRpb24uICovXHJcbmZ1bmN0aW9uIGNsb25lU3ZnKHN2ZzogU1ZHRWxlbWVudCk6IFNWR0VsZW1lbnQge1xyXG4gIHJldHVybiBzdmcuY2xvbmVOb2RlKHRydWUpIGFzIFNWR0VsZW1lbnQ7XHJcbn1cclxuXHJcbi8qKiBSZXR1cm5zIHRoZSBjYWNoZSBrZXkgdG8gdXNlIGZvciBhbiBpY29uIG5hbWVzcGFjZSBhbmQgbmFtZS4gKi9cclxuZnVuY3Rpb24gaWNvbktleShuYW1lc3BhY2U6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIG5hbWVzcGFjZSArICc6JyArIG5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU2FmZVVybFdpdGhPcHRpb25zKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBTYWZlUmVzb3VyY2VVcmxXaXRoSWNvbk9wdGlvbnMge1xyXG4gIHJldHVybiAhISh2YWx1ZS51cmwgJiYgdmFsdWUub3B0aW9ucyk7XHJcbn1cclxuIl19