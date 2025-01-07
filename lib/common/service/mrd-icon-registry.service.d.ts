import { HttpClient } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare interface TrustedHTML {
    __brand__: 'TrustedHTML';
}
export declare interface TrustedTypePolicyFactory {
    createPolicy(policyName: string, policyOptions: {
        createHTML?: (input: string) => string;
    }): TrustedTypePolicy;
}
export declare interface TrustedTypePolicy {
    createHTML(input: string): TrustedHTML;
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
export declare function trustedHTMLFromString(html: string): TrustedHTML;
/** Options that can be used to configure how an icon or the icons in an icon set are presented. */
export interface IconOptions {
    /** View box to set on the icon. */
    viewBox?: string;
    /** Whether or not to fetch the icon or icon set using HTTP credentials. */
    withCredentials?: boolean;
}
/**
 * Function that will be invoked by the icon registry when trying to resolve the
 * URL from which to fetch an icon. The returned URL will be used to make a request for the icon.
 */
export type IconResolver = (name: string, namespace: string) => SafeResourceUrl | SafeResourceUrlWithIconOptions | null;
/** Object that specifies a URL from which to fetch an icon and the options to use for it. */
export interface SafeResourceUrlWithIconOptions {
    url: SafeResourceUrl;
    options: IconOptions;
}
export declare class MrdIconRegistryService {
    private _httpClient;
    private _sanitizer;
    private readonly _errorHandler;
    private _document;
    /**
     * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
     */
    private _svgIconConfigs;
    /** Cache for icons loaded by direct URLs. */
    private _cachedIconsByUrl;
    /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */
    private _inProgressUrlFetches;
    /** Registered icon resolver functions. */
    private _resolvers;
    constructor(_httpClient: HttpClient, _sanitizer: DomSanitizer, document: any, _errorHandler: ErrorHandler);
    /**
     * Registers an icon by URL in the default namespace.
     * @param iconName Name under which the icon should be registered.
     * @param url
     */
    addSvgIcon(iconName: string, url: SafeResourceUrl, options?: IconOptions): this;
    /**
     * Registers an icon by URL in the specified namespace.
     * @param namespace Namespace in which the icon should be registered.
     * @param iconName Name under which the icon should be registered.
     * @param url
     */
    addSvgIconInNamespace(namespace: string, iconName: string, url: SafeResourceUrl, options?: IconOptions): this;
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
     * The response from the URL may be cached so this will not always cause an HTTP request, but
     * the produced element will always be a new copy of the originally fetched icon. (That is,
     * it will not contain any modifications made to elements previously returned).
     *
     * @param safeUrl URL from which to fetch the SVG icon.
     */
    getSvgIconFromUrl(safeUrl: SafeResourceUrl): Observable<SVGElement>;
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
     * if not, the Observable will throw an error.
     *
     * @param name Name of the icon to be retrieved.
     * @param namespace Namespace in which to look for the icon.
     */
    getNamedSvgIcon(name: string, namespace?: string): Observable<SVGElement>;
    /**
     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
     */
    private _getSvgFromConfig;
    /** Tries to create an icon config through the registered resolver functions. */
    private _getIconConfigFromResolvers;
    /**
     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     */
    private _loadSvgIconFromConfig;
    /**
     * Creates a DOM element from the given SVG string.
     */
    private _svgElementFromString;
    /**
     * Converts an element into an SVG node by cloning all of its children.
     */
    /**
     * Sets the default attributes for an SVG element to be used as an icon.
     */
    private _setSvgAttributes;
    /**
     * Returns an Observable which produces the string contents of the given icon. Results may be
     * cached, so future calls with the same URL may not cause another HTTP request.
     */
    private _fetchIcon;
    /**
     * Registers an icon config by name in the specified namespace.
     * @param namespace Namespace in which to register the icon config.
     * @param iconName Name under which to register the config.
     * @param config Config to be registered.
     */
    private _addSvgIconConfig;
    /** Parses a config's text into an SVG element. */
    private _svgElementFromConfig;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdIconRegistryService, [{ optional: true; }, null, { optional: true; }, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MrdIconRegistryService>;
}
