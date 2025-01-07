import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional, SecurityContext } from '@angular/core';
import { finalize, map, of, share, tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/platform-browser";
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
    constructor(_httpClient, _sanitizer, document, _errorHandler) {
        this._httpClient = _httpClient;
        this._sanitizer = _sanitizer;
        this._errorHandler = _errorHandler;
        this._document = document;
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
        // See if we have any icon sets registered for the namespace.
        // const iconSetConfigs = this._iconSetConfigs.get(namespace);
        // if (iconSetConfigs) {
        //   return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
        // }
        throw Error(`IconName not Fountd ${key}`);
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
    /** @nocollapse */ static ɵfac = function MrdIconRegistryService_Factory(t) { return new (t || MrdIconRegistryService)(i0.ɵɵinject(i1.HttpClient, 8), i0.ɵɵinject(i2.DomSanitizer), i0.ɵɵinject(DOCUMENT, 8), i0.ɵɵinject(i0.ErrorHandler)); };
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
            }] }, { type: i0.ErrorHandler }]; }, null); })();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWljb24tcmVnaXN0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvY29tbW9uL3NlcnZpY2UvbXJkLWljb24tcmVnaXN0cnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsT0FBTyxFQUFnQixNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQWMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFtQmpFOzs7R0FHRztBQUNILElBQUksTUFBNEMsQ0FBQztBQUVqRDs7O0dBR0c7QUFDSCxTQUFTLFNBQVM7SUFDaEIsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1FBQ3hCLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUNqQyxNQUFNLFFBQVEsR0FBRyxNQUE4RCxDQUFDO1lBQ2hGLElBQUksUUFBUSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7Z0JBQ3ZDLE1BQU0sR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsRUFBRTtvQkFDaEUsVUFBVSxFQUFFLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2lCQUM3QixDQUFDLENBQUM7YUFDSjtTQUNGO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQ7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLFVBQVUscUJBQXFCLENBQUMsSUFBWTtJQUNoRCxPQUFPLFNBQVMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSyxJQUErQixDQUFDO0FBQzNFLENBQUM7QUEwQkQ7OztHQUdHO0FBQ0gsTUFBTSxhQUFhO0lBSVI7SUFDQTtJQUNBO0lBTFQsVUFBVSxDQUFvQjtJQUU5QixZQUNTLEdBQW9CLEVBQ3BCLE9BQTJCLEVBQzNCLE9BQXFCO1FBRnJCLFFBQUcsR0FBSCxHQUFHLENBQWlCO1FBQ3BCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBQzNCLFlBQU8sR0FBUCxPQUFPLENBQWM7SUFDM0IsQ0FBQztDQUNMO0FBT0QsTUFBTSxPQUFPLHNCQUFzQjtJQW1CWDtJQUNaO0lBRVM7SUFwQlgsU0FBUyxDQUFXO0lBRTVCOztPQUVHO0lBQ0ssZUFBZSxHQUFHLElBQUksR0FBRyxFQUF5QixDQUFDO0lBRTNELDZDQUE2QztJQUNyQyxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsRUFBc0IsQ0FBQztJQUUxRCxvRkFBb0Y7SUFDNUUscUJBQXFCLEdBQUcsSUFBSSxHQUFHLEVBQW1DLENBQUM7SUFFM0UsMENBQTBDO0lBQ2xDLFVBQVUsR0FBbUIsRUFBRSxDQUFDO0lBRXhDLFlBQ3NCLFdBQXVCLEVBQ25DLFVBQXdCLEVBQ0YsUUFBYSxFQUMxQixhQUEyQjtRQUh4QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUNuQyxlQUFVLEdBQVYsVUFBVSxDQUFjO1FBRWYsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFFNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxVQUFVLENBQUMsUUFBZ0IsRUFBRSxHQUFvQixFQUFFLE9BQXFCO1FBQ3RFLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHFCQUFxQixDQUNuQixTQUFpQixFQUNqQixRQUFnQixFQUNoQixHQUFvQixFQUNwQixPQUFxQjtRQUVyQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksYUFBYSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILGlCQUFpQixDQUFDLE9BQXdCO1FBQ3hDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFNUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE1BQU0sS0FBSyxDQUFDLDJCQUEyQixPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVuRCxJQUFJLFVBQVUsRUFBRTtZQUNkLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUN2RSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUNqRCxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDMUIsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsZUFBZSxDQUFDLElBQVksRUFBRSxZQUFvQixFQUFFO1FBQ2xELE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFM0MsNENBQTRDO1FBQzVDLElBQUksTUFBTSxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdkM7UUFFRCwwRUFBMEU7UUFDMUUsTUFBTSxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFM0QsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDdEMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdkM7UUFFRCw2REFBNkQ7UUFDN0QsOERBQThEO1FBRTlELHdCQUF3QjtRQUN4QixpRUFBaUU7UUFDakUsSUFBSTtRQUNKLE1BQU0sS0FBSyxDQUFDLHVCQUF1QixHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7T0FFRztJQUNLLGlCQUFpQixDQUFDLE1BQXFCO1FBQzdDLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNsQixnRUFBZ0U7WUFDaEUsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hGO2FBQU07WUFDTCxxRUFBcUU7WUFDckUsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUU7SUFDSCxDQUFDO0lBRUQsZ0ZBQWdGO0lBQ3hFLDJCQUEyQixDQUFDLFNBQWlCLEVBQUUsSUFBWTtRQUNqRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFbkQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsT0FBTyxvQkFBb0IsQ0FBQyxNQUFNLENBQUM7b0JBQ2pDLENBQUMsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDO29CQUNyRCxDQUFDLENBQUMsSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3JDO1NBQ0Y7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssc0JBQXNCLENBQUMsTUFBcUI7UUFDbEQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDakMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLEVBQzFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBNkIsQ0FBQyxDQUFDLENBQ3JFLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSyxxQkFBcUIsQ0FBQyxHQUFnQjtRQUM1QyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQXdCLENBQUM7UUFDekMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQWUsQ0FBQztRQUVuRCxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsTUFBTSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUNwQztRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsd0RBQXdEO0lBQ3hELGtGQUFrRjtJQUNsRiwyQ0FBMkM7SUFFM0MscUZBQXFGO0lBQ3JGLGtEQUFrRDtJQUNsRCwyQ0FBMkM7SUFFM0MsMkJBQTJCO0lBQzNCLHVDQUF1QztJQUN2QyxRQUFRO0lBQ1IsTUFBTTtJQUVOLDBEQUEwRDtJQUMxRCw0RUFBNEU7SUFDNUUsZ0VBQWdFO0lBQ2hFLFFBQVE7SUFDUixNQUFNO0lBRU4sZ0JBQWdCO0lBQ2hCLElBQUk7SUFFSjs7T0FFRztJQUNLLGlCQUFpQixDQUFDLEdBQWUsRUFBRSxPQUFxQjtRQUM5RCxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1QixHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNuQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsQyxHQUFHLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ3pELEdBQUcsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsd0RBQXdEO1FBRWhHLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDOUIsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlDO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssVUFBVSxDQUFDLFVBQXlCO1FBQzFDLE1BQU0sRUFBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxHQUFHLFVBQVUsQ0FBQztRQUMzQyxNQUFNLGVBQWUsR0FBRyxPQUFPLEVBQUUsZUFBZSxJQUFJLEtBQUssQ0FBQztRQUUxRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixNQUFNLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1NBQ25FO1FBRUQsK0JBQStCO1FBQy9CLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtZQUNuQixNQUFNLEtBQUssQ0FBQywrQkFBK0IsT0FBTyxJQUFJLENBQUMsQ0FBQztTQUN6RDtRQUVELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFNUUsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixNQUFNLEtBQUssQ0FBQywyQkFBMkIsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUNuRDtRQUVELHlGQUF5RjtRQUN6RixvRkFBb0Y7UUFDcEYsNEZBQTRGO1FBQzVGLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFNUQsSUFBSSxlQUFlLEVBQUU7WUFDbkIsT0FBTyxlQUFlLENBQUM7U0FDeEI7UUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUNqRixHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDUixvRUFBb0U7WUFDcEUsZ0JBQWdCO1lBQ2hCLE9BQU8scUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLEVBQ0YsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDdEQsS0FBSyxFQUFFLENBQ1IsQ0FBQztRQUVGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssaUJBQWlCLENBQUMsU0FBaUIsRUFBRSxRQUFnQixFQUFFLE1BQXFCO1FBQ2xGLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsa0RBQWtEO0lBQzFDLHFCQUFxQixDQUFDLE1BQTJCO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQ3RCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7U0FDekI7UUFFRCxPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQzttR0FuUlUsc0JBQXNCLDJFQXFCWCxRQUFROytGQXJCbkIsc0JBQXNCLFdBQXRCLHNCQUFzQixtQkFGckIsTUFBTTs7dUZBRVAsc0JBQXNCO2NBSGxDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7c0JBb0JJLFFBQVE7O3NCQUVSLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsUUFBUTs7QUFpUWhDLDhEQUE4RDtBQUM5RCxTQUFTLFFBQVEsQ0FBQyxHQUFlO0lBQy9CLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQWUsQ0FBQztBQUMzQyxDQUFDO0FBRUQsbUVBQW1FO0FBQ25FLFNBQVMsT0FBTyxDQUFDLFNBQWlCLEVBQUUsSUFBWTtJQUM5QyxPQUFPLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQ2hDLENBQUM7QUFFRCxTQUFTLG9CQUFvQixDQUFDLEtBQVU7SUFDdEMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBFcnJvckhhbmRsZXIsIEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFNlY3VyaXR5Q29udGV4dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVSZXNvdXJjZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSwgbWFwLCBPYnNlcnZhYmxlLCBvZiwgc2hhcmUsIHRhcCB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFRydXN0ZWRIVE1MIHtcclxuICBfX2JyYW5kX186ICdUcnVzdGVkSFRNTCc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBUcnVzdGVkVHlwZVBvbGljeUZhY3Rvcnkge1xyXG4gIGNyZWF0ZVBvbGljeShcclxuICAgIHBvbGljeU5hbWU6IHN0cmluZyxcclxuICAgIHBvbGljeU9wdGlvbnM6IHtcclxuICAgICAgY3JlYXRlSFRNTD86IChpbnB1dDogc3RyaW5nKSA9PiBzdHJpbmc7XHJcbiAgICB9LFxyXG4gICk6IFRydXN0ZWRUeXBlUG9saWN5O1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgVHJ1c3RlZFR5cGVQb2xpY3kge1xyXG4gIGNyZWF0ZUhUTUwoaW5wdXQ6IHN0cmluZyk6IFRydXN0ZWRIVE1MO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIFRydXN0ZWQgVHlwZXMgcG9saWN5LCBvciBudWxsIGlmIFRydXN0ZWQgVHlwZXMgYXJlIG5vdFxyXG4gKiBlbmFibGVkL3N1cHBvcnRlZCwgb3IgdW5kZWZpbmVkIGlmIHRoZSBwb2xpY3kgaGFzIG5vdCBiZWVuIGNyZWF0ZWQgeWV0LlxyXG4gKi9cclxubGV0IHBvbGljeTogVHJ1c3RlZFR5cGVQb2xpY3kgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIFRydXN0ZWQgVHlwZXMgcG9saWN5LCBvciBudWxsIGlmIFRydXN0ZWQgVHlwZXMgYXJlIG5vdFxyXG4gKiBlbmFibGVkL3N1cHBvcnRlZC4gVGhlIGZpcnN0IGNhbGwgdG8gdGhpcyBmdW5jdGlvbiB3aWxsIGNyZWF0ZSB0aGUgcG9saWN5LlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UG9saWN5KCk6IFRydXN0ZWRUeXBlUG9saWN5IHwgbnVsbCB7XHJcbiAgaWYgKHBvbGljeSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBwb2xpY3kgPSBudWxsO1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGNvbnN0IHR0V2luZG93ID0gd2luZG93IGFzIHVua25vd24gYXMge3RydXN0ZWRUeXBlcz86IFRydXN0ZWRUeXBlUG9saWN5RmFjdG9yeX07XHJcbiAgICAgIGlmICh0dFdpbmRvdy50cnVzdGVkVHlwZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHBvbGljeSA9IHR0V2luZG93LnRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3koJ2FuZ3VsYXIjY29tcG9uZW50cycsIHtcclxuICAgICAgICAgIGNyZWF0ZUhUTUw6IChzOiBzdHJpbmcpID0+IHMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHBvbGljeTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFVuc2FmZWx5IHByb21vdGUgYSBzdHJpbmcgdG8gYSBUcnVzdGVkSFRNTCwgZmFsbGluZyBiYWNrIHRvIHN0cmluZ3Mgd2hlblxyXG4gKiBUcnVzdGVkIFR5cGVzIGFyZSBub3QgYXZhaWxhYmxlLlxyXG4gKiBAc2VjdXJpdHkgVGhpcyBpcyBhIHNlY3VyaXR5LXNlbnNpdGl2ZSBmdW5jdGlvbjsgYW55IHVzZSBvZiB0aGlzIGZ1bmN0aW9uXHJcbiAqIG11c3QgZ28gdGhyb3VnaCBzZWN1cml0eSByZXZpZXcuIEluIHBhcnRpY3VsYXIsIGl0IG11c3QgYmUgYXNzdXJlZCB0aGF0IHRoZVxyXG4gKiBwcm92aWRlZCBzdHJpbmcgd2lsbCBuZXZlciBjYXVzZSBhbiBYU1MgdnVsbmVyYWJpbGl0eSBpZiB1c2VkIGluIGEgY29udGV4dFxyXG4gKiB0aGF0IHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgSFRNTCBieSBhIGJyb3dzZXIsIGUuZy4gd2hlbiBhc3NpZ25pbmcgdG9cclxuICogZWxlbWVudC5pbm5lckhUTUwuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJ1c3RlZEhUTUxGcm9tU3RyaW5nKGh0bWw6IHN0cmluZyk6IFRydXN0ZWRIVE1MIHtcclxuICByZXR1cm4gZ2V0UG9saWN5KCk/LmNyZWF0ZUhUTUwoaHRtbCkgfHwgKGh0bWwgYXMgdW5rbm93biBhcyBUcnVzdGVkSFRNTCk7XHJcbn1cclxuXHJcbi8qKiBPcHRpb25zIHRoYXQgY2FuIGJlIHVzZWQgdG8gY29uZmlndXJlIGhvdyBhbiBpY29uIG9yIHRoZSBpY29ucyBpbiBhbiBpY29uIHNldCBhcmUgcHJlc2VudGVkLiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEljb25PcHRpb25zIHtcclxuICAvKiogVmlldyBib3ggdG8gc2V0IG9uIHRoZSBpY29uLiAqL1xyXG4gIHZpZXdCb3g/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0byBmZXRjaCB0aGUgaWNvbiBvciBpY29uIHNldCB1c2luZyBIVFRQIGNyZWRlbnRpYWxzLiAqL1xyXG4gIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgaW52b2tlZCBieSB0aGUgaWNvbiByZWdpc3RyeSB3aGVuIHRyeWluZyB0byByZXNvbHZlIHRoZVxyXG4gKiBVUkwgZnJvbSB3aGljaCB0byBmZXRjaCBhbiBpY29uLiBUaGUgcmV0dXJuZWQgVVJMIHdpbGwgYmUgdXNlZCB0byBtYWtlIGEgcmVxdWVzdCBmb3IgdGhlIGljb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBJY29uUmVzb2x2ZXIgPSAoXHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIG5hbWVzcGFjZTogc3RyaW5nLFxyXG4pID0+IFNhZmVSZXNvdXJjZVVybCB8IFNhZmVSZXNvdXJjZVVybFdpdGhJY29uT3B0aW9ucyB8IG51bGw7XHJcblxyXG4vKiogT2JqZWN0IHRoYXQgc3BlY2lmaWVzIGEgVVJMIGZyb20gd2hpY2ggdG8gZmV0Y2ggYW4gaWNvbiBhbmQgdGhlIG9wdGlvbnMgdG8gdXNlIGZvciBpdC4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTYWZlUmVzb3VyY2VVcmxXaXRoSWNvbk9wdGlvbnMge1xyXG4gIHVybDogU2FmZVJlc291cmNlVXJsO1xyXG4gIG9wdGlvbnM6IEljb25PcHRpb25zO1xyXG59XHJcblxyXG4vKipcclxuICogQ29uZmlndXJhdGlvbiBmb3IgYW4gaWNvbiwgaW5jbHVkaW5nIHRoZSBVUkwgYW5kIHBvc3NpYmx5IHRoZSBjYWNoZWQgU1ZHIGVsZW1lbnQuXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbmNsYXNzIFN2Z0ljb25Db25maWcge1xyXG4gIHN2Z0VsZW1lbnQ6IFNWR0VsZW1lbnQgfCBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyB1cmw6IFNhZmVSZXNvdXJjZVVybCxcclxuICAgIHB1YmxpYyBzdmdUZXh0OiBUcnVzdGVkSFRNTCB8IG51bGwsXHJcbiAgICBwdWJsaWMgb3B0aW9ucz86IEljb25PcHRpb25zLFxyXG4gICkge31cclxufVxyXG4vKiogSWNvbiBjb25maWd1cmF0aW9uIHdob3NlIGNvbnRlbnQgaGFzIGFscmVhZHkgYmVlbiBsb2FkZWQuICovXHJcbnR5cGUgTG9hZGVkU3ZnSWNvbkNvbmZpZyA9IFN2Z0ljb25Db25maWcgJiB7c3ZnVGV4dDogVHJ1c3RlZEhUTUx9O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkSWNvblJlZ2lzdHJ5U2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudDtcclxuXHJcbiAgLyoqXHJcbiAgICogVVJMcyBhbmQgY2FjaGVkIFNWRyBlbGVtZW50cyBmb3IgaW5kaXZpZHVhbCBpY29ucy4gS2V5cyBhcmUgb2YgdGhlIGZvcm1hdCBcIltuYW1lc3BhY2VdOltpY29uXVwiLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3N2Z0ljb25Db25maWdzID0gbmV3IE1hcDxzdHJpbmcsIFN2Z0ljb25Db25maWc+KCk7XHJcblxyXG4gIC8qKiBDYWNoZSBmb3IgaWNvbnMgbG9hZGVkIGJ5IGRpcmVjdCBVUkxzLiAqL1xyXG4gIHByaXZhdGUgX2NhY2hlZEljb25zQnlVcmwgPSBuZXcgTWFwPHN0cmluZywgU1ZHRWxlbWVudD4oKTtcclxuXHJcbiAgLyoqIEluLXByb2dyZXNzIGljb24gZmV0Y2hlcy4gVXNlZCB0byBjb2FsZXNjZSBtdWx0aXBsZSByZXF1ZXN0cyB0byB0aGUgc2FtZSBVUkwuICovXHJcbiAgcHJpdmF0ZSBfaW5Qcm9ncmVzc1VybEZldGNoZXMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2YWJsZTxUcnVzdGVkSFRNTD4+KCk7XHJcblxyXG4gIC8qKiBSZWdpc3RlcmVkIGljb24gcmVzb2x2ZXIgZnVuY3Rpb25zLiAqL1xyXG4gIHByaXZhdGUgX3Jlc29sdmVyczogSWNvblJlc29sdmVyW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9odHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55LFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIsXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXJzIGFuIGljb24gYnkgVVJMIGluIHRoZSBkZWZhdWx0IG5hbWVzcGFjZS5cclxuICAgKiBAcGFyYW0gaWNvbk5hbWUgTmFtZSB1bmRlciB3aGljaCB0aGUgaWNvbiBzaG91bGQgYmUgcmVnaXN0ZXJlZC5cclxuICAgKiBAcGFyYW0gdXJsXHJcbiAgICovXHJcbiAgYWRkU3ZnSWNvbihpY29uTmFtZTogc3RyaW5nLCB1cmw6IFNhZmVSZXNvdXJjZVVybCwgb3B0aW9ucz86IEljb25PcHRpb25zKTogdGhpcyB7XHJcbiAgICByZXR1cm4gdGhpcy5hZGRTdmdJY29uSW5OYW1lc3BhY2UoJycsIGljb25OYW1lLCB1cmwsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXJzIGFuIGljb24gYnkgVVJMIGluIHRoZSBzcGVjaWZpZWQgbmFtZXNwYWNlLlxyXG4gICAqIEBwYXJhbSBuYW1lc3BhY2UgTmFtZXNwYWNlIGluIHdoaWNoIHRoZSBpY29uIHNob3VsZCBiZSByZWdpc3RlcmVkLlxyXG4gICAqIEBwYXJhbSBpY29uTmFtZSBOYW1lIHVuZGVyIHdoaWNoIHRoZSBpY29uIHNob3VsZCBiZSByZWdpc3RlcmVkLlxyXG4gICAqIEBwYXJhbSB1cmxcclxuICAgKi9cclxuICBhZGRTdmdJY29uSW5OYW1lc3BhY2UoXHJcbiAgICBuYW1lc3BhY2U6IHN0cmluZyxcclxuICAgIGljb25OYW1lOiBzdHJpbmcsXHJcbiAgICB1cmw6IFNhZmVSZXNvdXJjZVVybCxcclxuICAgIG9wdGlvbnM/OiBJY29uT3B0aW9ucyxcclxuICApOiB0aGlzIHtcclxuICAgIHJldHVybiB0aGlzLl9hZGRTdmdJY29uQ29uZmlnKG5hbWVzcGFjZSwgaWNvbk5hbWUsIG5ldyBTdmdJY29uQ29uZmlnKHVybCwgbnVsbCwgb3B0aW9ucykpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgcHJvZHVjZXMgdGhlIGljb24gKGFzIGFuIGA8c3ZnPmAgRE9NIGVsZW1lbnQpIGZyb20gdGhlIGdpdmVuIFVSTC5cclxuICAgKiBUaGUgcmVzcG9uc2UgZnJvbSB0aGUgVVJMIG1heSBiZSBjYWNoZWQgc28gdGhpcyB3aWxsIG5vdCBhbHdheXMgY2F1c2UgYW4gSFRUUCByZXF1ZXN0LCBidXRcclxuICAgKiB0aGUgcHJvZHVjZWQgZWxlbWVudCB3aWxsIGFsd2F5cyBiZSBhIG5ldyBjb3B5IG9mIHRoZSBvcmlnaW5hbGx5IGZldGNoZWQgaWNvbi4gKFRoYXQgaXMsXHJcbiAgICogaXQgd2lsbCBub3QgY29udGFpbiBhbnkgbW9kaWZpY2F0aW9ucyBtYWRlIHRvIGVsZW1lbnRzIHByZXZpb3VzbHkgcmV0dXJuZWQpLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHNhZmVVcmwgVVJMIGZyb20gd2hpY2ggdG8gZmV0Y2ggdGhlIFNWRyBpY29uLlxyXG4gICAqL1xyXG4gIGdldFN2Z0ljb25Gcm9tVXJsKHNhZmVVcmw6IFNhZmVSZXNvdXJjZVVybCk6IE9ic2VydmFibGU8U1ZHRWxlbWVudD4ge1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5fc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5SRVNPVVJDRV9VUkwsIHNhZmVVcmwpO1xyXG5cclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBGYWlsZWQgdG8gc2FuaXRpemUgVVJMOiAke3NhZmVVcmx9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FjaGVkSWNvbiA9IHRoaXMuX2NhY2hlZEljb25zQnlVcmwuZ2V0KHVybCk7XHJcblxyXG4gICAgaWYgKGNhY2hlZEljb24pIHtcclxuICAgICAgcmV0dXJuIG9mKGNsb25lU3ZnKGNhY2hlZEljb24pKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fbG9hZFN2Z0ljb25Gcm9tQ29uZmlnKG5ldyBTdmdJY29uQ29uZmlnKHNhZmVVcmwsIG51bGwpKS5waXBlKFxyXG4gICAgICB0YXAoc3ZnID0+IHRoaXMuX2NhY2hlZEljb25zQnlVcmwuc2V0KHVybCEsIHN2ZykpLFxyXG4gICAgICBtYXAoc3ZnID0+IGNsb25lU3ZnKHN2ZykpLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IHByb2R1Y2VzIHRoZSBpY29uIChhcyBhbiBgPHN2Zz5gIERPTSBlbGVtZW50KSB3aXRoIHRoZSBnaXZlbiBuYW1lXHJcbiAgICogYW5kIG5hbWVzcGFjZS4gVGhlIGljb24gbXVzdCBoYXZlIGJlZW4gcHJldmlvdXNseSByZWdpc3RlcmVkIHdpdGggYWRkSWNvbiBvciBhZGRJY29uU2V0O1xyXG4gICAqIGlmIG5vdCwgdGhlIE9ic2VydmFibGUgd2lsbCB0aHJvdyBhbiBlcnJvci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGljb24gdG8gYmUgcmV0cmlldmVkLlxyXG4gICAqIEBwYXJhbSBuYW1lc3BhY2UgTmFtZXNwYWNlIGluIHdoaWNoIHRvIGxvb2sgZm9yIHRoZSBpY29uLlxyXG4gICAqL1xyXG4gIGdldE5hbWVkU3ZnSWNvbihuYW1lOiBzdHJpbmcsIG5hbWVzcGFjZTogc3RyaW5nID0gJycpOiBPYnNlcnZhYmxlPFNWR0VsZW1lbnQ+IHtcclxuICAgIGNvbnN0IGtleSA9IGljb25LZXkobmFtZXNwYWNlLCBuYW1lKTtcclxuICAgIGxldCBjb25maWcgPSB0aGlzLl9zdmdJY29uQ29uZmlncy5nZXQoa2V5KTtcclxuXHJcbiAgICAvLyBSZXR1cm4gKGNvcHkgb2YpIGNhY2hlZCBpY29uIGlmIHBvc3NpYmxlLlxyXG4gICAgaWYgKGNvbmZpZykge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZ2V0U3ZnRnJvbUNvbmZpZyhjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE90aGVyd2lzZSB0cnkgdG8gcmVzb2x2ZSB0aGUgY29uZmlnIGZyb20gb25lIG9mIHRoZSByZXNvbHZlciBmdW5jdGlvbnMuXHJcbiAgICBjb25maWcgPSB0aGlzLl9nZXRJY29uQ29uZmlnRnJvbVJlc29sdmVycyhuYW1lc3BhY2UsIG5hbWUpO1xyXG5cclxuICAgIGlmIChjb25maWcpIHtcclxuICAgICAgdGhpcy5fc3ZnSWNvbkNvbmZpZ3Muc2V0KGtleSwgY29uZmlnKTtcclxuICAgICAgcmV0dXJuIHRoaXMuX2dldFN2Z0Zyb21Db25maWcoY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZWUgaWYgd2UgaGF2ZSBhbnkgaWNvbiBzZXRzIHJlZ2lzdGVyZWQgZm9yIHRoZSBuYW1lc3BhY2UuXHJcbiAgICAvLyBjb25zdCBpY29uU2V0Q29uZmlncyA9IHRoaXMuX2ljb25TZXRDb25maWdzLmdldChuYW1lc3BhY2UpO1xyXG5cclxuICAgIC8vIGlmIChpY29uU2V0Q29uZmlncykge1xyXG4gICAgLy8gICByZXR1cm4gdGhpcy5fZ2V0U3ZnRnJvbUljb25TZXRDb25maWdzKG5hbWUsIGljb25TZXRDb25maWdzKTtcclxuICAgIC8vIH1cclxuICAgIHRocm93IEVycm9yKGBJY29uTmFtZSBub3QgRm91bnRkICR7a2V5fWApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgY2FjaGVkIGljb24gZm9yIGEgU3ZnSWNvbkNvbmZpZyBpZiBhdmFpbGFibGUsIG9yIGZldGNoZXMgaXQgZnJvbSBpdHMgVVJMIGlmIG5vdC5cclxuICAgKi9cclxuICBwcml2YXRlIF9nZXRTdmdGcm9tQ29uZmlnKGNvbmZpZzogU3ZnSWNvbkNvbmZpZyk6IE9ic2VydmFibGU8U1ZHRWxlbWVudD4ge1xyXG4gICAgaWYgKGNvbmZpZy5zdmdUZXh0KSB7XHJcbiAgICAgIC8vIFdlIGFscmVhZHkgaGF2ZSB0aGUgU1ZHIGVsZW1lbnQgZm9yIHRoaXMgaWNvbiwgcmV0dXJuIGEgY29weS5cclxuICAgICAgcmV0dXJuIG9mKGNsb25lU3ZnKHRoaXMuX3N2Z0VsZW1lbnRGcm9tQ29uZmlnKGNvbmZpZyBhcyBMb2FkZWRTdmdJY29uQ29uZmlnKSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gRmV0Y2ggdGhlIGljb24gZnJvbSB0aGUgY29uZmlnJ3MgVVJMLCBjYWNoZSBpdCwgYW5kIHJldHVybiBhIGNvcHkuXHJcbiAgICAgIHJldHVybiB0aGlzLl9sb2FkU3ZnSWNvbkZyb21Db25maWcoY29uZmlnKS5waXBlKG1hcChzdmcgPT4gY2xvbmVTdmcoc3ZnKSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFRyaWVzIHRvIGNyZWF0ZSBhbiBpY29uIGNvbmZpZyB0aHJvdWdoIHRoZSByZWdpc3RlcmVkIHJlc29sdmVyIGZ1bmN0aW9ucy4gKi9cclxuICBwcml2YXRlIF9nZXRJY29uQ29uZmlnRnJvbVJlc29sdmVycyhuYW1lc3BhY2U6IHN0cmluZywgbmFtZTogc3RyaW5nKTogU3ZnSWNvbkNvbmZpZyB8IHVuZGVmaW5lZCB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Jlc29sdmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9yZXNvbHZlcnNbaV0obmFtZSwgbmFtZXNwYWNlKTtcclxuXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICByZXR1cm4gaXNTYWZlVXJsV2l0aE9wdGlvbnMocmVzdWx0KVxyXG4gICAgICAgICAgPyBuZXcgU3ZnSWNvbkNvbmZpZyhyZXN1bHQudXJsLCBudWxsLCByZXN1bHQub3B0aW9ucylcclxuICAgICAgICAgIDogbmV3IFN2Z0ljb25Db25maWcocmVzdWx0LCBudWxsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2FkcyB0aGUgY29udGVudCBvZiB0aGUgaWNvbiBVUkwgc3BlY2lmaWVkIGluIHRoZSBTdmdJY29uQ29uZmlnIGFuZCBjcmVhdGVzIGFuIFNWRyBlbGVtZW50XHJcbiAgICogZnJvbSBpdC5cclxuICAgKi9cclxuICBwcml2YXRlIF9sb2FkU3ZnSWNvbkZyb21Db25maWcoY29uZmlnOiBTdmdJY29uQ29uZmlnKTogT2JzZXJ2YWJsZTxTVkdFbGVtZW50PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmV0Y2hJY29uKGNvbmZpZykucGlwZShcclxuICAgICAgdGFwKHN2Z1RleHQgPT4gKGNvbmZpZy5zdmdUZXh0ID0gc3ZnVGV4dCkpLFxyXG4gICAgICBtYXAoKCkgPT4gdGhpcy5fc3ZnRWxlbWVudEZyb21Db25maWcoY29uZmlnIGFzIExvYWRlZFN2Z0ljb25Db25maWcpKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgRE9NIGVsZW1lbnQgZnJvbSB0aGUgZ2l2ZW4gU1ZHIHN0cmluZy5cclxuICAgKi9cclxuICBwcml2YXRlIF9zdmdFbGVtZW50RnJvbVN0cmluZyhzdHI6IFRydXN0ZWRIVE1MKTogU1ZHRWxlbWVudCB7XHJcbiAgICBjb25zdCBkaXYgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgIGRpdi5pbm5lckhUTUwgPSBzdHIgYXMgdW5rbm93biBhcyBzdHJpbmc7XHJcbiAgICBjb25zdCBzdmcgPSBkaXYucXVlcnlTZWxlY3Rvcignc3ZnJykgYXMgU1ZHRWxlbWVudDtcclxuXHJcbiAgICBpZiAoIXN2Zykge1xyXG4gICAgICB0aHJvdyBFcnJvcignPHN2Zz4gdGFnIG5vdCBmb3VuZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdmc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb252ZXJ0cyBhbiBlbGVtZW50IGludG8gYW4gU1ZHIG5vZGUgYnkgY2xvbmluZyBhbGwgb2YgaXRzIGNoaWxkcmVuLlxyXG4gICAqL1xyXG4gIC8vIHByaXZhdGUgX3RvU3ZnRWxlbWVudChlbGVtZW50OiBFbGVtZW50KTogU1ZHRWxlbWVudCB7XHJcbiAgLy8gICBjb25zdCBzdmcgPSB0aGlzLl9zdmdFbGVtZW50RnJvbVN0cmluZyh0cnVzdGVkSFRNTEZyb21TdHJpbmcoJzxzdmc+PC9zdmc+JykpO1xyXG4gIC8vICAgY29uc3QgYXR0cmlidXRlcyA9IGVsZW1lbnQuYXR0cmlidXRlcztcclxuXHJcbiAgLy8gICAvLyBDb3B5IG92ZXIgYWxsIHRoZSBhdHRyaWJ1dGVzIGZyb20gdGhlIGBzeW1ib2xgIHRvIHRoZSBuZXcgU1ZHLCBleGNlcHQgdGhlIGlkLlxyXG4gIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgLy8gICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBhdHRyaWJ1dGVzW2ldO1xyXG5cclxuICAvLyAgICAgaWYgKG5hbWUgIT09ICdpZCcpIHtcclxuICAvLyAgICAgICBzdmcuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfVxyXG5cclxuICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgLy8gICAgIGlmIChlbGVtZW50LmNoaWxkTm9kZXNbaV0ubm9kZVR5cGUgPT09IHRoaXMuX2RvY3VtZW50LkVMRU1FTlRfTk9ERSkge1xyXG4gIC8vICAgICAgIHN2Zy5hcHBlbmRDaGlsZChlbGVtZW50LmNoaWxkTm9kZXNbaV0uY2xvbmVOb2RlKHRydWUpKTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfVxyXG5cclxuICAvLyAgIHJldHVybiBzdmc7XHJcbiAgLy8gfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBkZWZhdWx0IGF0dHJpYnV0ZXMgZm9yIGFuIFNWRyBlbGVtZW50IHRvIGJlIHVzZWQgYXMgYW4gaWNvbi5cclxuICAgKi9cclxuICBwcml2YXRlIF9zZXRTdmdBdHRyaWJ1dGVzKHN2ZzogU1ZHRWxlbWVudCwgb3B0aW9ucz86IEljb25PcHRpb25zKTogU1ZHRWxlbWVudCB7XHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdmaXQnLCAnJyk7XHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMTAwJScpO1xyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTAwJScpO1xyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWlkWU1pZCBtZWV0Jyk7XHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdmb2N1c2FibGUnLCAnZmFsc2UnKTsgLy8gRGlzYWJsZSBJRTExIGRlZmF1bHQgYmVoYXZpb3IgdG8gbWFrZSBTVkdzIGZvY3VzYWJsZS5cclxuXHJcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnZpZXdCb3gpIHtcclxuICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsIG9wdGlvbnMudmlld0JveCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN2ZztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB3aGljaCBwcm9kdWNlcyB0aGUgc3RyaW5nIGNvbnRlbnRzIG9mIHRoZSBnaXZlbiBpY29uLiBSZXN1bHRzIG1heSBiZVxyXG4gICAqIGNhY2hlZCwgc28gZnV0dXJlIGNhbGxzIHdpdGggdGhlIHNhbWUgVVJMIG1heSBub3QgY2F1c2UgYW5vdGhlciBIVFRQIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZmV0Y2hJY29uKGljb25Db25maWc6IFN2Z0ljb25Db25maWcpOiBPYnNlcnZhYmxlPFRydXN0ZWRIVE1MPiB7XHJcbiAgICBjb25zdCB7dXJsOiBzYWZlVXJsLCBvcHRpb25zfSA9IGljb25Db25maWc7XHJcbiAgICBjb25zdCB3aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zPy53aXRoQ3JlZGVudGlhbHMgPz8gZmFsc2U7XHJcblxyXG4gICAgaWYgKCF0aGlzLl9odHRwQ2xpZW50KSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdDb3VsZCBub3QgZmV0Y2ggaWNvbiwgSHR0cENsaWVudCBpcyBub3QgYXZhaWxhYmxlLicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IGFkZCBhbiBuZ0Rldk1vZGUgY2hlY2tcclxuICAgIGlmIChzYWZlVXJsID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYENhbm5vdCBmZXRjaCBpY29uIGZyb20gVVJMIFwiJHtzYWZlVXJsfVwiLmApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVybCA9IHRoaXMuX3Nhbml0aXplci5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuUkVTT1VSQ0VfVVJMLCBzYWZlVXJsKTtcclxuXHJcbiAgICAvLyBUT0RPOiBhZGQgYW4gbmdEZXZNb2RlIGNoZWNrXHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICB0aHJvdyBFcnJvcihgRmFpbGVkIHRvIHNhbml0aXplIFVSTDogJHtzYWZlVXJsfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFN0b3JlIGluLXByb2dyZXNzIGZldGNoZXMgdG8gYXZvaWQgc2VuZGluZyBhIGR1cGxpY2F0ZSByZXF1ZXN0IGZvciBhIFVSTCB3aGVuIHRoZXJlIGlzXHJcbiAgICAvLyBhbHJlYWR5IGEgcmVxdWVzdCBpbiBwcm9ncmVzcyBmb3IgdGhhdCBVUkwuIEl0J3MgbmVjZXNzYXJ5IHRvIGNhbGwgc2hhcmUoKSBvbiB0aGVcclxuICAgIC8vIE9ic2VydmFibGUgcmV0dXJuZWQgYnkgaHR0cC5nZXQoKSBzbyB0aGF0IG11bHRpcGxlIHN1YnNjcmliZXJzIGRvbid0IGNhdXNlIG11bHRpcGxlIFhIUnMuXHJcbiAgICBjb25zdCBpblByb2dyZXNzRmV0Y2ggPSB0aGlzLl9pblByb2dyZXNzVXJsRmV0Y2hlcy5nZXQodXJsKTtcclxuXHJcbiAgICBpZiAoaW5Qcm9ncmVzc0ZldGNoKSB7XHJcbiAgICAgIHJldHVybiBpblByb2dyZXNzRmV0Y2g7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVxID0gdGhpcy5faHR0cENsaWVudC5nZXQodXJsLCB7cmVzcG9uc2VUeXBlOiAndGV4dCcsIHdpdGhDcmVkZW50aWFsc30pLnBpcGUoXHJcbiAgICAgIG1hcChzdmcgPT4ge1xyXG4gICAgICAgIC8vIFNlY3VyaXR5OiBUaGlzIFNWRyBpcyBmZXRjaGVkIGZyb20gYSBTYWZlUmVzb3VyY2VVcmwsIGFuZCBpcyB0aHVzXHJcbiAgICAgICAgLy8gdHJ1c3RlZCBIVE1MLlxyXG4gICAgICAgIHJldHVybiB0cnVzdGVkSFRNTEZyb21TdHJpbmcoc3ZnKTtcclxuICAgICAgfSksXHJcbiAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMuX2luUHJvZ3Jlc3NVcmxGZXRjaGVzLmRlbGV0ZSh1cmwpKSxcclxuICAgICAgc2hhcmUoKSxcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5faW5Qcm9ncmVzc1VybEZldGNoZXMuc2V0KHVybCwgcmVxKTtcclxuICAgIHJldHVybiByZXE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlcnMgYW4gaWNvbiBjb25maWcgYnkgbmFtZSBpbiB0aGUgc3BlY2lmaWVkIG5hbWVzcGFjZS5cclxuICAgKiBAcGFyYW0gbmFtZXNwYWNlIE5hbWVzcGFjZSBpbiB3aGljaCB0byByZWdpc3RlciB0aGUgaWNvbiBjb25maWcuXHJcbiAgICogQHBhcmFtIGljb25OYW1lIE5hbWUgdW5kZXIgd2hpY2ggdG8gcmVnaXN0ZXIgdGhlIGNvbmZpZy5cclxuICAgKiBAcGFyYW0gY29uZmlnIENvbmZpZyB0byBiZSByZWdpc3RlcmVkLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2FkZFN2Z0ljb25Db25maWcobmFtZXNwYWNlOiBzdHJpbmcsIGljb25OYW1lOiBzdHJpbmcsIGNvbmZpZzogU3ZnSWNvbkNvbmZpZyk6IHRoaXMge1xyXG4gICAgdGhpcy5fc3ZnSWNvbkNvbmZpZ3Muc2V0KGljb25LZXkobmFtZXNwYWNlLCBpY29uTmFtZSksIGNvbmZpZyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKiBQYXJzZXMgYSBjb25maWcncyB0ZXh0IGludG8gYW4gU1ZHIGVsZW1lbnQuICovXHJcbiAgcHJpdmF0ZSBfc3ZnRWxlbWVudEZyb21Db25maWcoY29uZmlnOiBMb2FkZWRTdmdJY29uQ29uZmlnKTogU1ZHRWxlbWVudCB7XHJcbiAgICBpZiAoIWNvbmZpZy5zdmdFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IHN2ZyA9IHRoaXMuX3N2Z0VsZW1lbnRGcm9tU3RyaW5nKGNvbmZpZy5zdmdUZXh0KTtcclxuICAgICAgdGhpcy5fc2V0U3ZnQXR0cmlidXRlcyhzdmcsIGNvbmZpZy5vcHRpb25zKTtcclxuICAgICAgY29uZmlnLnN2Z0VsZW1lbnQgPSBzdmc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZy5zdmdFbGVtZW50O1xyXG4gIH1cclxufVxyXG5cclxuLyoqIENsb25lcyBhbiBTVkdFbGVtZW50IHdoaWxlIHByZXNlcnZpbmcgdHlwZSBpbmZvcm1hdGlvbi4gKi9cclxuZnVuY3Rpb24gY2xvbmVTdmcoc3ZnOiBTVkdFbGVtZW50KTogU1ZHRWxlbWVudCB7XHJcbiAgcmV0dXJuIHN2Zy5jbG9uZU5vZGUodHJ1ZSkgYXMgU1ZHRWxlbWVudDtcclxufVxyXG5cclxuLyoqIFJldHVybnMgdGhlIGNhY2hlIGtleSB0byB1c2UgZm9yIGFuIGljb24gbmFtZXNwYWNlIGFuZCBuYW1lLiAqL1xyXG5mdW5jdGlvbiBpY29uS2V5KG5hbWVzcGFjZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICByZXR1cm4gbmFtZXNwYWNlICsgJzonICsgbmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTYWZlVXJsV2l0aE9wdGlvbnModmFsdWU6IGFueSk6IHZhbHVlIGlzIFNhZmVSZXNvdXJjZVVybFdpdGhJY29uT3B0aW9ucyB7XHJcbiAgcmV0dXJuICEhKHZhbHVlLnVybCAmJiB2YWx1ZS5vcHRpb25zKTtcclxufVxyXG4iXX0=