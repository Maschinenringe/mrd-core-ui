import * as _ from 'underscore';
import * as i1$1 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { SecurityContext, Injectable, Optional, Inject, EventEmitter, booleanAttribute, Directive, Input, Output, NgModule, numberAttribute, Component, ChangeDetectionStrategy, HostListener, ViewChild, InjectionToken, inject } from '@angular/core';
import { of, tap, map, finalize, share, Subscription, take } from 'rxjs';
import * as i1 from '@angular/common/http';
import * as i2 from '@angular/platform-browser';
import { BasePushStrategyObject, Util } from 'mrd-core';
import { ComponentPortal } from '@angular/cdk/portal';
import * as i1$2 from '@angular/cdk/overlay';

class ConfigUtil {
    static config;
    static customConfig;
    static setConfig(config) {
        this.config = undefined;
        this.customConfig = config;
        this.getConfig();
    }
    static getConfig() {
        if (this.config) {
            return this.config;
        }
        let defaultConfig = this.baseConfig;
        if (this.customConfig) {
            this.extendObject(defaultConfig, this.customConfig);
        }
        this.config = defaultConfig;
        return defaultConfig;
    }
    static extendObject(obj, extObj) {
        for (const [key, value] of Object.entries(extObj)) {
            if (_.isObject(value) && !_.isArray(value)) {
                obj[key] = this.extendObject(obj[key], value);
            }
            else {
                obj[key] = value;
            }
        }
        ;
        return obj;
    }
    static get baseConfig() {
        return {
            baseFont: {
                // size: "16px",
                family: "URW Din,Lato,sans-serif"
            },
            baseColors: {
                primary: "#68b022",
                accent: "#e7e7e7",
                warn: "#b00122",
                disabled: "#afa6a6"
            },
            formField: {
                borderRadius: "7px",
                borderRadiusRounded: "70px",
            },
            button: {
                backgroundColor: "transparent",
                textLightColor: "#ffffff",
                textDarkColor: "#000000",
                hoverColor: "#d3d3d361",
                activeColor: "#d3d3d3",
                disabled: {
                    text: "#a6a6a6",
                    background: "transparent"
                },
                border: "0 unset unset",
                borderRadius: "4px",
                minHeight: "36px",
                fontSize: "0.9em",
                iconSize: "1em",
                outline: {
                    border: "1px solid #d3d3d3"
                },
                flat: {
                    backgroundColor: "#ffffff",
                    disabled: {
                        text: "#a6a6a6",
                        background: "#d3d3d3"
                    }
                },
                raised: {
                    backgroundColor: "#ffffff",
                    disabled: {
                        text: "#a6a6a6",
                        background: "#d3d3d3"
                    }
                },
                icon: {
                    borderRadius: "50%",
                    fontSize: "1em",
                    diameter: "3em"
                },
                fab: {
                    backgroundColor: "#ffffff",
                    disabled: {
                        text: "#a6a6a6",
                        background: "#d3d3d3"
                    },
                    borderRadius: "50%",
                    fontSize: "1em",
                    diameter: "4em"
                },
                miniFab: {
                    backgroundColor: "#ffffff",
                    disabled: {
                        text: "#a6a6a6",
                        background: "#d3d3d3"
                    },
                    borderRadius: "50%",
                    fontSize: "1em",
                    diameter: "3em"
                },
                toggle: {
                    backgroundColor: "#ffffff",
                    unselectedBgColor: "#c8cac6",
                }
            },
            geoIcon: {
                width: "40px",
                height: "40px",
                margin: "5px",
                transitionTime: "1s",
                mainColor: "#000000",
                mainSelectedColor: "#ffffff",
                mainOpacity: 0.2,
                mainSelectedOpacity: 1,
                backColor: "#000000",
                backSelectedColor: "#ffffff",
                backOpacity: 0.2,
                backSelectedOpacity: 0.2,
                overlayColor: "#8ebf62",
                overlaySelectedColor: "#ffa500",
                overlayOpacity: 1,
                overlaySelectedOpacity: 1
            }
        };
    }
}

class ColorUtil {
    static isHexColor(color) {
        return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
    }
    static isRgbColor(color) {
        return /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/.test(color);
    }
    static isRgbaColor(color) {
        return /^rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), (0|1|0\.\d+)\)$/.test(color);
    }
    static hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    static hexToRgba(hex) {
        if (ColorUtil.hexHasAlpha(hex)) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16),
                a: parseInt(result[4], 16) / 255
            } : null;
        }
        else {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16),
                a: 1
            } : null;
        }
    }
    static hexHasAlpha(hex) {
        return /^#?([a-f\d]{8})$/i.test(hex);
    }
    static rgbToHex(r, g, b, a) {
        return '#' + [r, g, b].map((x) => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('');
    }
    static rgbaToHex(r, g, b, a) {
        a = !a ? 1 : a;
        let alpha = ((a * 255) | 1 << 8).toString(16).slice(1);
        return ColorUtil.rgbToHex(r, g, b) + alpha;
    }
    static rgbStringToHex(rgb) {
        const result = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/.exec(rgb);
        if (result) {
            return ColorUtil.rgbToHex(parseInt(result[1], 10), parseInt(result[2], 10), parseInt(result[3], 10));
        }
        return null;
    }
    static rgbaStringToHex(rgba) {
        const result = /^rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), (0|1|0\.\d+)\)$/.exec(rgba);
        if (result) {
            return ColorUtil.rgbaToHex(parseInt(result[1], 10), parseInt(result[2], 10), parseInt(result[3], 10), parseFloat(result[4]));
        }
        return null;
    }
    static rgbaStringToRgb(rgba) {
        const result = /^rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), (0|1|0\.\d+)\)$/.exec(rgba);
        if (result) {
            return {
                r: parseInt(result[1], 10),
                g: parseInt(result[2], 10),
                b: parseInt(result[3], 10),
                a: result[4] ? parseFloat(result[4]) : 1
            };
        }
        return null;
    }
    static shouldTextBeDark(color, debug) {
        if (debug) {
            //debugger;
        }
        const rgba = ColorUtil.hexToRgba(color);
        if (rgba) {
            const { r, g, b, a } = rgba;
            const mixedColor = {
                r: r * a + (1 - a) * 255,
                g: g * a + (1 - a) * 255,
                b: b * a + (1 - a) * 255,
                a: 1
            };
            const brightness = Math.round(((mixedColor.r * 299) + (mixedColor.g * 587) + (mixedColor.b * 114)) / 1000);
            return brightness > 125;
        }
        return true;
    }
    static changeColorOpacity(color, opacity) {
        if (opacity > 1) {
            opacity /= 100;
        }
        if (ColorUtil.isRgbColor(color) || ColorUtil.isRgbaColor(color)) {
            let rgba = ColorUtil.rgbaStringToRgb(color);
            if (rgba) {
                return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a * opacity})`;
            }
            return color;
        }
        const rgb = ColorUtil.hexToRgba(color);
        if (rgb) {
            return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a * opacity})`;
        }
        return color;
    }
    static changeColorBrightnessPercent(color, percent) {
        let rgba;
        if (ColorUtil.isRgbColor(color) || ColorUtil.isRgbaColor(color)) {
            rgba = ColorUtil.rgbaStringToRgb(color);
        }
        else {
            rgba = ColorUtil.hexToRgba(color);
        }
        if (rgba) {
            if ([rgba.r, rgba.g, rgba.b].filter((c) => c === 0 || c === 255).length === 3) {
                rgba.r = rgba.r === 0 ? 1 : rgba.r;
                rgba.g = rgba.g === 0 ? 1 : rgba.g;
                rgba.b = rgba.b === 0 ? 1 : rgba.b;
            }
            return ColorUtil.rgbToHex(Math.min(255, Math.max(0, Math.round(rgba.r * (1 + percent / 100)))), Math.min(255, Math.max(0, Math.round(rgba.g * (1 + percent / 100)))), Math.min(255, Math.max(0, Math.round(rgba.b * (1 + percent / 100)))), rgba.a);
        }
        return color;
    }
}

function colorAttribute(value, fallbackValue) {
    if (ColorUtil.isRgbColor(value)) {
        return ColorUtil.rgbStringToHex(value);
    }
    else if (ColorUtil.isRgbaColor(value)) {
        return ColorUtil.rgbaStringToHex(value);
    }
    else if (ColorUtil.isHexColor(value)) {
        return value;
    }
    else {
        console.error('Farben können nur Hex-, RGB- oder RGBA-Werte sein. (Wert: ' + value + ')');
        return fallbackValue || null;
    }
}
function colorThemeAttribute(value, fallbackValue) {
    if (ColorUtil.isRgbColor(value)) {
        return ColorUtil.rgbStringToHex(value);
    }
    else if (ColorUtil.isRgbaColor(value)) {
        return ColorUtil.rgbaStringToHex(value);
    }
    else if (ColorUtil.isHexColor(value)) {
        return value;
    }
    else if (['primary', 'accent', 'warn'].includes(value)) {
        this.primary = value === 'primary';
        this.accent = value === 'accent';
        this.warn = value === 'warn';
    }
    else {
        console.error('Farben können nur Hex-, RGB- , RGBA-Werte oder "primary", "accent" oder "warn" sein. (Wert: ' + value + ')');
        return fallbackValue || null;
    }
}

function sizeAttribute(value, fallbackValue, defaultUnit) {
    if (typeof value === 'number') {
        return defaultUnit ? `${value}${defaultUnit}` : `${value}px`;
    }
    if (typeof value === 'string' && !sizeRegex.test(value)) {
        let numberValue = parseInt(value, 10);
        if (!isNaN(numberValue)) {
            return defaultUnit ? `${numberValue}${defaultUnit}` : `${numberValue}px`;
        }
    }
    return value || fallbackValue || null;
}
const sizeRegex = /(\d+)(px|em|rem|vw|vh|vmin|vmax|%)/;

function timeAttribute(value, fallbackValue, defaultUnit) {
    if (typeof value === 'number') {
        return defaultUnit ? `${value}${defaultUnit}` : `${value}s`;
    }
    if (typeof value === 'string') {
        let numberValue = parseInt(value, 10);
        if (!isNaN(numberValue)) {
            return defaultUnit ? `${value}${numberValue}` : `${numberValue}s`;
        }
    }
    return value || fallbackValue || null;
}

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
function trustedHTMLFromString(html) {
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
class MrdIconRegistryService {
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

class HideIfTruncatedDirective {
    elementRef;
    hideIfTruncated = true;
    checkChildrenForAttribute = false;
    hideOnTruncatedElement;
    requiredHideAttribute;
    displayState = 'block';
    parentResizeElement;
    hiddenChanged = new EventEmitter();
    mutationObserver;
    resizeObserver;
    blockNextResizeEvent = false;
    resizeTimeout;
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        if (this.hideIfTruncated) {
            this.mutationObserver = new MutationObserver(() => {
                this.ngOnChanges();
            });
            this.mutationObserver.observe(this.elementRef.nativeElement, { childList: true, subtree: true, characterData: true });
            if (this.parentResizeElement) {
                this.resizeObserver = new ResizeObserver((event) => {
                    // if (this.blockNextResizeEvent) {
                    //   this.blockNextResizeEvent = false;
                    //   return;
                    // }
                    if (this.resizeTimeout) {
                        clearTimeout(this.resizeTimeout);
                    }
                    this.elementRef.nativeElement.style.display = this.displayState;
                    this.resizeTimeout = setTimeout(() => this.ngOnChanges(), 10);
                });
                this.resizeObserver.observe(this.parentResizeElement);
            }
        }
    }
    ngOnChanges() {
        if (this.hideIfTruncated) {
            const element = this.elementRef.nativeElement;
            if (element.scrollWidth <= element.clientWidth) {
                element.style.display = this.displayState;
                this.hiddenChanged.emit(false);
            }
            else {
                element.style.display = 'none';
                this.hiddenChanged.emit(true);
            }
            if (this.checkChildrenForAttribute) {
                // const element = this.elementRef.nativeElement;
                const children = element.children;
                for (let i = 0; i < children.length; i++) {
                    if (children[i].getAttribute(this.requiredHideAttribute) !== null && children[i].style) {
                        if (this.hideOnTruncatedElement) {
                            children[i].style.display = this.hideOnTruncatedElement.style.display !== 'none' && this.hideOnTruncatedElement.scrollWidth <= this.hideOnTruncatedElement.clientWidth ? this.displayState : 'none';
                        }
                        else {
                            children[i].style.display = element.style.display === 'none' || children[i].scrollWidth <= children[i].clientWidth ? this.displayState : 'none';
                        }
                    }
                }
            }
            this.blockNextResizeEvent = true;
        }
    }
    ngOnDestroy() {
        if (this.mutationObserver) {
            this.mutationObserver.disconnect();
        }
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }
    /** @nocollapse */ static ɵfac = function HideIfTruncatedDirective_Factory(t) { return new (t || HideIfTruncatedDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: HideIfTruncatedDirective, selectors: [["", "hideIfTruncated", ""]], inputs: { hideIfTruncated: ["hideIfTruncated", "hideIfTruncated", booleanAttribute], checkChildrenForAttribute: ["checkChildrenForAttribute", "checkChildrenForAttribute", booleanAttribute], hideOnTruncatedElement: "hideOnTruncatedElement", requiredHideAttribute: "requiredHideAttribute", displayState: "displayState", parentResizeElement: "parentResizeElement" }, outputs: { hiddenChanged: "hiddenChanged" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵNgOnChangesFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HideIfTruncatedDirective, [{
        type: Directive,
        args: [{
                selector: '[hideIfTruncated]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { hideIfTruncated: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], checkChildrenForAttribute: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], hideOnTruncatedElement: [{
            type: Input
        }], requiredHideAttribute: [{
            type: Input
        }], displayState: [{
            type: Input
        }], parentResizeElement: [{
            type: Input
        }], hiddenChanged: [{
            type: Output
        }] }); })();

class MrdDirectiveModule {
    /** @nocollapse */ static ɵfac = function MrdDirectiveModule_Factory(t) { return new (t || MrdDirectiveModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdDirectiveModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({});
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdDirectiveModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    HideIfTruncatedDirective
                ],
                exports: [
                    HideIfTruncatedDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdDirectiveModule, { declarations: [HideIfTruncatedDirective], exports: [HideIfTruncatedDirective] }); })();

function MrdProgressBarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 3);
} }
const _c0$3 = function (a0) { return { "transform": a0 }; };
function MrdProgressBarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 4);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(1, _c0$3, "translateX(" + ctx_r1.value + "%)"));
} }
class MrdProgressBarComponent {
    cdr;
    config = ConfigUtil.getConfig();
    set mode(mode) {
        this._mode = mode;
    }
    get mode() {
        return this._mode;
    }
    _mode = 'indeterminate';
    set value(value) {
        this._value = Math.max(0, Math.min(100, value || 0));
    }
    get value() {
        return this.mode === 'determinate' ? this._value - 100 : -100;
    }
    _value = 0;
    set color(color) {
        if (color === 'primary') {
            color = this.config.baseColors.primary;
        }
        if (color === 'accent') {
            color = this.config.baseColors.accent;
        }
        if (color === 'warn') {
            color = this.config.baseColors.warn;
        }
        this._color = color;
        this._bgColor = ColorUtil.changeColorOpacity(color, 20);
    }
    get color() {
        return this._color;
    }
    _color = this.config.baseColors.primary;
    _bgColor = ColorUtil.changeColorOpacity(this.config.baseColors.primary, 20);
    get bgColor() {
        return this._bgColor;
    }
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
    /** @nocollapse */ static ɵfac = function MrdProgressBarComponent_Factory(t) { return new (t || MrdProgressBarComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdProgressBarComponent, selectors: [["mrd-progress-bar"]], inputs: { mode: "mode", value: ["value", "value", numberAttribute], color: "color" }, features: [i0.ɵɵInputTransformsFeature], decls: 3, vars: 6, consts: [[1, "mrd-progressbar-container"], ["class", "mrd-progressbar indeterminate", 4, "ngIf"], ["class", "mrd-progressbar determinate", 3, "ngStyle", 4, "ngIf"], [1, "mrd-progressbar", "indeterminate"], [1, "mrd-progressbar", "determinate", 3, "ngStyle"]], template: function MrdProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, MrdProgressBarComponent_div_1_Template, 1, 0, "div", 1);
            i0.ɵɵtemplate(2, MrdProgressBarComponent_div_2_Template, 1, 3, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleProp("--progress-bar-color", ctx.color)("--progress-bar-bg-color", ctx.bgColor);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.mode === "indeterminate");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.mode === "determinate");
        } }, dependencies: [i1$1.NgIf, i1$1.NgStyle], styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1;max-width:100%;min-height:5px;height:100%}.mrd-progressbar-container[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;width:100%;height:100%;overflow:hidden;background-color:var(--progress-bar-bg-color)}.mrd-progressbar-container[_ngcontent-%COMP%]   .mrd-progressbar[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--progress-bar-color)}.mrd-progressbar-container[_ngcontent-%COMP%]   .mrd-progressbar.indeterminate[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_mrd-progressbar-indeterminate-animation 1s infinite linear}.mrd-progressbar-container[_ngcontent-%COMP%]   .mrd-progressbar.determinate[_ngcontent-%COMP%]{transform:translate(-100%);transition:transform .3s linear}@keyframes _ngcontent-%COMP%_mrd-progressbar-indeterminate-animation{0%{width:100%;transform:translate(-100%)}50%{width:70%;transform:translate(0)}to{width:100%;transform:translate(100%)}}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdProgressBarComponent, [{
        type: Component,
        args: [{ selector: 'mrd-progress-bar', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-progressbar-container\"\r\n  [style.--progress-bar-color]=\"color\" [style.--progress-bar-bg-color]=\"bgColor\">\r\n  <div class=\"mrd-progressbar indeterminate\" *ngIf=\"mode === 'indeterminate'\"></div>\r\n  <div class=\"mrd-progressbar determinate\" *ngIf=\"mode === 'determinate'\" [ngStyle]=\"{'transform': 'translateX(' + value + '%)'}\"></div>\r\n</div>\r\n", styles: [":host{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1;max-width:100%;min-height:5px;height:100%}.mrd-progressbar-container{position:relative;display:flex;flex:1;width:100%;height:100%;overflow:hidden;background-color:var(--progress-bar-bg-color)}.mrd-progressbar-container .mrd-progressbar{position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--progress-bar-color)}.mrd-progressbar-container .mrd-progressbar.indeterminate{animation:mrd-progressbar-indeterminate-animation 1s infinite linear}.mrd-progressbar-container .mrd-progressbar.determinate{transform:translate(-100%);transition:transform .3s linear}@keyframes mrd-progressbar-indeterminate-animation{0%{width:100%;transform:translate(-100%)}50%{width:70%;transform:translate(0)}to{width:100%;transform:translate(100%)}}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { mode: [{
            type: Input
        }], value: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], color: [{
            type: Input
        }] }); })();

function MrdProgressSpinnerComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 4);
    i0.ɵɵelement(1, "circle", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("viewBox", ctx_r1.viewBox);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("stroke-dasharray", ctx_r1.strokeCircumference, "px")("stroke-width", ctx_r1.circleStrokeWidth, "%")("stroke-dashoffset", ctx_r1.strokeCircumference / 2, "px");
    i0.ɵɵattribute("r", ctx_r1.circleRadius);
} }
function MrdProgressSpinnerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    i0.ɵɵelementContainer(3, 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 10);
    i0.ɵɵelementContainer(5, 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 11);
    i0.ɵɵelementContainer(7, 9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵstyleProp("--spinner-color", ctx_r2.color);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function MrdProgressSpinnerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 4);
    i0.ɵɵelement(2, "circle", 13);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("--spinner-color", ctx_r3.color);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("viewBox", ctx_r3.viewBox);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("stroke-dasharray", ctx_r3.strokeCircumference, "px")("stroke-dashoffset", ctx_r3.strokeDashOffset, "px")("stroke-width", ctx_r3.circleStrokeWidth, "%");
    i0.ɵɵattribute("r", ctx_r3.circleRadius);
} }
function MrdProgressSpinnerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 15);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.labelText, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.dots);
} }
class MrdProgressSpinnerComponent {
    config = ConfigUtil.getConfig();
    mode = 'indeterminate';
    set color(color) {
        if (color === 'primary') {
            color = this.config.baseColors.primary;
        }
        if (color === 'accent') {
            color = this.config.baseColors.accent;
        }
        if (color === 'warn') {
            color = this.config.baseColors.warn;
        }
        this._color = color;
    }
    get color() {
        return this._color;
    }
    _color = this.config.baseColors.primary;
    get value() {
        return this.mode === 'determinate' ? this._value : 0;
    }
    set value(v) {
        this._value = Math.max(0, Math.min(100, v || 0));
    }
    _value = 0;
    get diameter() {
        return this._diameter;
    }
    set diameter(size) {
        this._diameter = size || 0;
    }
    _diameter = 100;
    get strokeWidth() {
        return this._strokeWidth ?? this.diameter / 10;
    }
    set strokeWidth(value) {
        this._strokeWidth = value || 0;
    }
    _strokeWidth;
    showLabel = false;
    set labelText(label) {
        this._labelText = label;
    }
    get labelText() {
        return this._labelText || '';
    }
    _labelText = 'Lade Daten';
    dots = '';
    interval;
    get circleRadius() {
        return (this.diameter - this.strokeWidth) / 2;
    }
    get strokeCircumference() {
        return 2 * Math.PI * this.circleRadius;
    }
    get strokeDashOffset() {
        if (this.mode === 'determinate') {
            return (this.strokeCircumference * (100 - this._value)) / 100;
        }
        return null;
    }
    get circleStrokeWidth() {
        if (this.diameter === 110) {
            debugger;
        }
        return (this.strokeWidth / this.diameter) * 100;
    }
    get viewBox() {
        const viewBox = this.circleRadius * 2 + this.strokeWidth;
        return `0 0 ${viewBox} ${viewBox}`;
    }
    ngAfterViewInit() {
        if (this.showLabel) {
            this.interval = setInterval(() => {
                if (this.dots.length === 3) {
                    this.dots = '';
                }
                else {
                    this.dots = this.dots + '.';
                }
            }, 700);
        }
    }
    ngOnDestroy() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
    /** @nocollapse */ static ɵfac = function MrdProgressSpinnerComponent_Factory(t) { return new (t || MrdProgressSpinnerComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdProgressSpinnerComponent, selectors: [["mrd-progress-spinner"]], hostVars: 6, hostBindings: function MrdProgressSpinnerComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("width", ctx.diameter, "px")("height", ctx.diameter, "px")("margin-bottom", ctx.showLabel ? 1.5 : 0, "em");
        } }, inputs: { mode: "mode", color: "color", value: ["value", "value", numberAttribute], diameter: ["diameter", "diameter", numberAttribute], strokeWidth: ["strokeWidth", "strokeWidth", numberAttribute], showLabel: ["showLabel", "showLabel", booleanAttribute], labelText: "labelText" }, features: [i0.ɵɵInputTransformsFeature], decls: 5, vars: 3, consts: [["circle", ""], ["class", "mrd-spinner-indeterminate-container", "aria-hidden", "true", 3, "--spinner-color", 4, "ngIf"], ["class", "mrd-progess-spinner-determinate-container", "aria-hidden", "true", 3, "--spinner-color", 4, "ngIf"], ["class", "mrd-progress-spinner-label", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mrd-spinner-indeterminate-circle-svg"], ["cx", "50%", "cy", "50%", 1, "mrd-spinner-indeterminate-circle-svg-circle"], ["aria-hidden", "true", 1, "mrd-spinner-indeterminate-container"], [1, "mrd-spinner-indeterminate-spinners"], [1, "mrd-spinner-indeterminate-part", "mrd-spinner-indeterminate-part-left"], [3, "ngTemplateOutlet"], [1, "mrd-spinner-indeterminate-gap-part"], [1, "mrd-spinner-indeterminate-part", "mrd-spinner-indeterminate-part-right"], ["aria-hidden", "true", 1, "mrd-progess-spinner-determinate-container"], ["cx", "50%", "cy", "50%", 1, "mrd-spinner-determinate-circle-svg-circle"], [1, "mrd-progress-spinner-label"], [1, "mrd-progress-spinner-label-dots"]], template: function MrdProgressSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, MrdProgressSpinnerComponent_ng_template_0_Template, 2, 8, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, MrdProgressSpinnerComponent_div_2_Template, 8, 5, "div", 1);
            i0.ɵɵtemplate(3, MrdProgressSpinnerComponent_div_3_Template, 3, 10, "div", 2);
            i0.ɵɵtemplate(4, MrdProgressSpinnerComponent_div_4_Template, 4, 2, "div", 3);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.mode === "indeterminate");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.mode === "determinate");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showLabel);
        } }, dependencies: [i1$1.NgIf, i1$1.NgTemplateOutlet], styles: ["[_nghost-%COMP%]{position:relative;display:block}.mrd-progess-spinner-determinate-container[_ngcontent-%COMP%]{transform:rotate(-90deg)}.mrd-spinner-determinate-circle-svg-circle[_ngcontent-%COMP%]{transition:stroke-dashoffset .5s 0ms cubic-bezier(0,0,.2,1)}.mrd-progess-spinner-determinate-container[_ngcontent-%COMP%], .mrd-spinner-indeterminate-circle-svg[_ngcontent-%COMP%], .mrd-spinner-indeterminate-container[_ngcontent-%COMP%], .mrd-spinner-indeterminate-spinners[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%}.mrd-spinner-indeterminate-container[_ngcontent-%COMP%]{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mrd-spinner-indeterminate-spinners[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_mrd-spinner-indeterminate-spinners-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mrd-spinner-indeterminate-part[_ngcontent-%COMP%]{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mrd-spinner-indeterminate-gap-part[_ngcontent-%COMP%]{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mrd-spinner-indeterminate-container[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_mrd-spinner-indeterminate-container-rotate 1.5682352941176s linear infinite}.mrd-spinner-indeterminate-container[_ngcontent-%COMP%]{opacity:1}.mrd-spinner-determinate-circle-svg-circle[_ngcontent-%COMP%], .mrd-spinner-indeterminate-circle-svg[_ngcontent-%COMP%]{stroke:var(--spinner-color)}.mrd-spinner-indeterminate-part[_ngcontent-%COMP%]   .mrd-spinner-indeterminate-circle-svg[_ngcontent-%COMP%]{width:200%}.mrd-spinner-indeterminate-part-right[_ngcontent-%COMP%]   .mrd-spinner-indeterminate-circle-svg[_ngcontent-%COMP%]{left:-100%}.mrd-spinner-determinate-circle-svg-circle-graphic[_ngcontent-%COMP%], .mrd-spinner-indeterminate-circle-svg[_ngcontent-%COMP%]{fill:#0000}.mrd-spinner-indeterminate-gap-part[_ngcontent-%COMP%]   .mrd-spinner-indeterminate-circle-svg[_ngcontent-%COMP%]{left:-900%;width:2000%;transform:rotate(180deg)}.mrd-progress-spinner-label[_ngcontent-%COMP%]{position:absolute;height:1.5em;margin:0 .25em;bottom:-1.5em;left:6px;right:0;text-align:center}.mrd-progress-spinner-label[_ngcontent-%COMP%]   .mrd-progress-spinner-label-dots[_ngcontent-%COMP%]{display:inline-block;width:12px;text-align:start}.mrd-spinner-indeterminate-part-left[_ngcontent-%COMP%]   .mrd-spinner-indeterminate-circle-svg[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_mrd-spinner-indeterminate-circle-left-rotate 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mrd-spinner-indeterminate-part-right[_ngcontent-%COMP%]   .mrd-spinner-indeterminate-circle-svg[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_mrd-spinner-indeterminate-circle-right-rotate 1333ms cubic-bezier(.4,0,.2,1) infinite both}@keyframes _ngcontent-%COMP%_mrd-spinner-indeterminate-circle-right-rotate{0%{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}@keyframes _ngcontent-%COMP%_mrd-spinner-indeterminate-circle-left-rotate{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes _ngcontent-%COMP%_mrd-spinner-indeterminate-spinners-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(1080deg)}}@keyframes _ngcontent-%COMP%_mrd-spinner-indeterminate-container-rotate{to{transform:rotate(360deg)}}"] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdProgressSpinnerComponent, [{
        type: Component,
        args: [{ selector: 'mrd-progress-spinner', host: {
                    '[style.width.px]': 'diameter',
                    '[style.height.px]': 'diameter',
                    '[style.margin-bottom.em]': 'showLabel ? 1.5 : 0'
                }, template: "<ng-template #circle>\r\n  <svg xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\" class=\"mrd-spinner-indeterminate-circle-svg\" [attr.viewBox]=\"viewBox\">\r\n    <circle cx=\"50%\" cy=\"50%\" class=\"mrd-spinner-indeterminate-circle-svg-circle\" [attr.r]=\"circleRadius\"\r\n      [style.stroke-dasharray.px]=\"strokeCircumference\" [style.stroke-width.%]=\"circleStrokeWidth\" [style.stroke-dashoffset.px]=\"strokeCircumference / 2\"\r\n      ></circle>\r\n  </svg>\r\n</ng-template>\r\n\r\n<div class=\"mrd-spinner-indeterminate-container\" aria-hidden=\"true\" *ngIf=\"mode === 'indeterminate'\" [style.--spinner-color]=\"color\">\r\n  <div class=\"mrd-spinner-indeterminate-spinners\">\r\n    <div class=\"mrd-spinner-indeterminate-part mrd-spinner-indeterminate-part-left\">\r\n      <ng-container [ngTemplateOutlet]=\"circle\"></ng-container>\r\n    </div>\r\n    <div class=\"mrd-spinner-indeterminate-gap-part\">\r\n      <ng-container [ngTemplateOutlet]=\"circle\"></ng-container>\r\n    </div>\r\n    <div class=\"mrd-spinner-indeterminate-part mrd-spinner-indeterminate-part-right\">\r\n      <ng-container [ngTemplateOutlet]=\"circle\"></ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"mrd-progess-spinner-determinate-container\" aria-hidden=\"true\" *ngIf=\"mode === 'determinate'\" [style.--spinner-color]=\"color\">\r\n  <svg class=\"mrd-spinner-indeterminate-circle-svg\" [attr.viewBox]=\"viewBox\"\r\n       xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\">\r\n    <circle [attr.r]=\"circleRadius\"\r\n            [style.stroke-dasharray.px]=\"strokeCircumference\"\r\n            [style.stroke-dashoffset.px]=\"strokeDashOffset\"\r\n            [style.stroke-width.%]=\"circleStrokeWidth\"\r\n            class=\"mrd-spinner-determinate-circle-svg-circle\"\r\n            cx=\"50%\" cy=\"50%\"/>\r\n  </svg>\r\n</div>\r\n\r\n<div class=\"mrd-progress-spinner-label\" *ngIf=\"showLabel\">\r\n  {{labelText}}<span class=\"mrd-progress-spinner-label-dots\">{{dots}}</span>\r\n</div>\r\n", styles: [":host{position:relative;display:block}.mrd-progess-spinner-determinate-container{transform:rotate(-90deg)}.mrd-spinner-determinate-circle-svg-circle{transition:stroke-dashoffset .5s 0ms cubic-bezier(0,0,.2,1)}.mrd-progess-spinner-determinate-container,.mrd-spinner-indeterminate-circle-svg,.mrd-spinner-indeterminate-container,.mrd-spinner-indeterminate-spinners{position:absolute;width:100%;height:100%}.mrd-spinner-indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mrd-spinner-indeterminate-spinners{animation:mrd-spinner-indeterminate-spinners-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mrd-spinner-indeterminate-part{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mrd-spinner-indeterminate-gap-part{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mrd-spinner-indeterminate-container{animation:mrd-spinner-indeterminate-container-rotate 1.5682352941176s linear infinite}.mrd-spinner-indeterminate-container{opacity:1}.mrd-spinner-determinate-circle-svg-circle,.mrd-spinner-indeterminate-circle-svg{stroke:var(--spinner-color)}.mrd-spinner-indeterminate-part .mrd-spinner-indeterminate-circle-svg{width:200%}.mrd-spinner-indeterminate-part-right .mrd-spinner-indeterminate-circle-svg{left:-100%}.mrd-spinner-determinate-circle-svg-circle-graphic,.mrd-spinner-indeterminate-circle-svg{fill:#0000}.mrd-spinner-indeterminate-gap-part .mrd-spinner-indeterminate-circle-svg{left:-900%;width:2000%;transform:rotate(180deg)}.mrd-progress-spinner-label{position:absolute;height:1.5em;margin:0 .25em;bottom:-1.5em;left:6px;right:0;text-align:center}.mrd-progress-spinner-label .mrd-progress-spinner-label-dots{display:inline-block;width:12px;text-align:start}.mrd-spinner-indeterminate-part-left .mrd-spinner-indeterminate-circle-svg{animation:mrd-spinner-indeterminate-circle-left-rotate 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mrd-spinner-indeterminate-part-right .mrd-spinner-indeterminate-circle-svg{animation:mrd-spinner-indeterminate-circle-right-rotate 1333ms cubic-bezier(.4,0,.2,1) infinite both}@keyframes mrd-spinner-indeterminate-circle-right-rotate{0%{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}@keyframes mrd-spinner-indeterminate-circle-left-rotate{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mrd-spinner-indeterminate-spinners-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(1080deg)}}@keyframes mrd-spinner-indeterminate-container-rotate{to{transform:rotate(360deg)}}\n"] }]
    }], null, { mode: [{
            type: Input
        }], color: [{
            type: Input
        }], value: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], diameter: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], strokeWidth: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], showLabel: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], labelText: [{
            type: Input
        }] }); })();

function MrdTooltipComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.text, " ");
} }
function MrdTooltipComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0$2 = function (a0) { return { "mrd-tooltip-container": a0 }; };
class MrdTooltipComponent {
    /**
     * This is simple text which is to be shown in the tooltip
     */
    text;
    /**
     * This provides finer control on the content to be visible on the tooltip
     * This template will be injected in ToolTipRenderer directive in the consumer template
     * <ng-template #template>
     *  content.....
     * </ng-template>
     */
    contentTemplate;
    defaultStyle = true;
    constructor() { }
    ngOnInit() {
    }
    /** @nocollapse */ static ɵfac = function MrdTooltipComponent_Factory(t) { return new (t || MrdTooltipComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdTooltipComponent, selectors: [["mrd-tooltip"]], inputs: { text: "text", contentTemplate: "contentTemplate", defaultStyle: "defaultStyle" }, decls: 5, vars: 4, consts: [[3, "ngClass"], ["simpleText", ""], [4, "ngTemplateOutlet"]], template: function MrdTooltipComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "div", 0);
            i0.ɵɵtemplate(2, MrdTooltipComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, MrdTooltipComponent_ng_container_4_Template, 1, 0, "ng-container", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0$2, ctx.defaultStyle));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate || _r0);
        } }, dependencies: [i1$1.NgClass, i1$1.NgTemplateOutlet], styles: [".mrd-tooltip-container[_ngcontent-%COMP%]{border-radius:8px;padding:2px 12px;background:#737373;box-shadow:0 0 25px #0000004d;color:#fff;word-break:normal;max-width:350px;font-size:14px}"] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdTooltipComponent, [{
        type: Component,
        args: [{ selector: 'mrd-tooltip', template: "<div>\r\n  <div [ngClass]=\"{'mrd-tooltip-container': defaultStyle}\">\r\n    <ng-template #simpleText>\r\n      {{text}}\r\n    </ng-template>\r\n    <ng-container *ngTemplateOutlet=\"contentTemplate || simpleText\">\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n", styles: [".mrd-tooltip-container{border-radius:8px;padding:2px 12px;background:#737373;box-shadow:0 0 25px #0000004d;color:#fff;word-break:normal;max-width:350px;font-size:14px}\n"] }]
    }], function () { return []; }, { text: [{
            type: Input
        }], contentTemplate: [{
            type: Input
        }], defaultStyle: [{
            type: Input
        }] }); })();

class ToolTipRendererDirective {
    _overlay;
    _overlayPositionBuilder;
    _elementRef;
    /**
     * Gibt an, ob der Tooltip angezeigt werden soll
     *
     * @memberof ToolTipRendererDirective
     */
    set showToolTip(value) {
        this._showToolTip = value;
        this.ngOnInit();
    }
    ;
    _showToolTip = true;
    /**
     * Der Text, der im Tooltip angezeigt werden soll
     *
     * @type {string}
     * @memberof ToolTipRendererDirective
     */
    text;
    /**
     * Ein eigenes Template, das im Tooltip angezeigt werden soll
     *
     * @type {TemplateRef<any>}
     * @memberof ToolTipRendererDirective
     */
    contentTemplate;
    /**
     * Gibt an, ob der Standard-Style des Tooltips verwendet werden soll.
     *
     * Standard: true
     *
     * @type {boolean}
     * @memberof ToolTipRendererDirective
     */
    defaultStyle = true;
    /**
     * Die Position, an der der Tooltip angezeigt werden soll.
     *
     * Standard: 'bottom'
     *
     * @type {('top' | 'bottom' | 'left' | 'right')}
     * @memberof ToolTipRendererDirective
     */
    position = 'bottom';
    /**
     * Gibt an, ob der Tooltip nur angezeigt werden soll, wenn der Text abgeschnitten wird.
     *
     * Standard: false
     *
     * @type {boolean}
     * @memberof ToolTipRendererDirective
     */
    showIfTruncated = false;
    /**
     * Wenn gesetzt, wird der Tooltip nur angezeigt, wenn der Inhalt des Elements abgeschnitten wird
     *
     * @type {HTMLElement}
     * @memberof ToolTipRendererDirective
     */
    showOnTruncatedElement;
    /**
     * Gibt an, ob der Tooltip geöffnet bleiben soll, wenn der Mauszeiger über dem Tooltip ist.
     *
     * Standard: false
     *
     * @type {boolean}
     * @memberof ToolTipRendererDirective
     */
    keepOnTooltipHover = false;
    /**
     * Gibt an, wie lange gewartet werden soll, bevor der Tooltip angezeigt wird.
     *
     * Wert in Millisekunden
     *
     * Standard: 0
     *
     * @type {number}
     * @memberof ToolTipRendererDirective
     */
    showDelay = 0;
    /**
     * Gibt an, wie lange gewartet werden soll, bevor der Tooltip geschlossen wird.
     *
     * Wert in Millisekunden
     *
     * Standard: 0
     *
     * @type {number}
     * @memberof ToolTipRendererDirective
     */
    hideDelay = 0;
    _overlayRef;
    disabled = true;
    tooltipRef;
    constructor(_overlay, _overlayPositionBuilder, _elementRef) {
        this._overlay = _overlay;
        this._overlayPositionBuilder = _overlayPositionBuilder;
        this._elementRef = _elementRef;
    }
    ngOnInit() {
        if (!this._showToolTip) {
            return;
        }
        // Standardwerte sind für Position 'bottom'
        let overlayY = "top";
        let offsetY = 5;
        let originY = "bottom";
        let originX = "center";
        let overlayX = "center";
        let offsetX = 0;
        if (this.position === "top") {
            originY = "top";
            overlayY = "bottom";
            offsetY = -5;
        }
        if (this.position === "left") {
            originY = "center";
            overlayY = "center";
            offsetY = 0;
            originX = "start";
            overlayX = "end";
            offsetX = -5;
        }
        if (this.position === "right") {
            originY = "center";
            overlayY = "center";
            offsetY = 0;
            originX = "end";
            overlayX = "start";
            offsetX = 5;
        }
        const positionStrategy = this._overlayPositionBuilder
            .flexibleConnectedTo(this._elementRef)
            .withPositions([{
                originX: originX,
                originY: originY,
                overlayX: overlayX,
                overlayY: overlayY,
                offsetY: offsetY,
                offsetX: offsetX
            }]);
        this._overlayRef = this._overlay.create({ positionStrategy });
    }
    /**
     * This method will be called whenever the mouse enters in the Host element
     * i.e. where this directive is applied
     * This method will show the tooltip by instantiating the CustomToolTipComponent and attaching to the overlay
     */
    show() {
        if (this.showIfTruncated) {
            const element = this._elementRef.nativeElement;
            this.disabled = element.scrollWidth <= element.clientWidth;
            if (element.style.webkitLineClamp !== '' && element.classList && element.classList.value && element.classList.value.includes('ellipsis')) {
                this.disabled = element.scrollHeight <= element.clientHeight;
            }
        }
        else if (this.showOnTruncatedElement) {
            this.disabled = this.showOnTruncatedElement.scrollWidth <= this.showOnTruncatedElement.clientWidth;
        }
        else {
            this.disabled = false;
        }
        //attach the component if it has not already attached to the overlay
        if (!this.disabled && this._overlayRef && !this._overlayRef.hasAttached()) {
            setTimeout(() => {
                this.tooltipRef = this._overlayRef.attach(new ComponentPortal(MrdTooltipComponent));
                this.tooltipRef.instance.text = this.text;
                this.tooltipRef.instance.contentTemplate = this.contentTemplate;
                this.tooltipRef.instance.defaultStyle = this.defaultStyle;
                if (this.keepOnTooltipHover) {
                    this.tooltipRef.location.nativeElement.onmouseleave = () => {
                        this.closeToolTip();
                    };
                }
            }, this.showDelay);
        }
    }
    isMouseOverTooltip(event) {
        // Überprüfe, ob der Mauszeiger sich über dem Tooltip befindet
        if (!this.tooltipRef) {
            return false;
        }
        const tooltipRect = this.tooltipRef.location.nativeElement.getBoundingClientRect();
        return (event.clientX + 10 >= tooltipRect.left &&
            event.clientX - 10 <= tooltipRect.right &&
            event.clientY + 10 >= tooltipRect.top &&
            event.clientY - 10 <= tooltipRect.bottom);
    }
    /**
     * This method will be called when the mouse goes out of the host element
     * i.e. where this directive is applied
     * This method will close the tooltip by detaching the overlay from the view
     */
    hide(event) {
        if (this.tooltipRef && this.keepOnTooltipHover && event) {
            setTimeout(() => {
                if (!this.isMouseOverTooltip(event)) {
                    this.closeToolTip();
                }
                else {
                    this.tooltipRef.location.nativeElement.onmouseleave = () => {
                        this.closeToolTip();
                    };
                }
            }, 200);
        }
        else {
            this.closeToolTip();
        }
    }
    /**
     * Destroy lifecycle event handler
     * This method will make sure to close the tooltip
     */
    ngOnDestroy() {
        this.closeToolTip();
    }
    /**
     * This method will close the tooltip by detaching the component from the overlay
     */
    closeToolTip() {
        if (this._overlayRef) {
            setTimeout(() => {
                this._overlayRef.detach();
            }, this.hideDelay);
        }
    }
    /** @nocollapse */ static ɵfac = function ToolTipRendererDirective_Factory(t) { return new (t || ToolTipRendererDirective)(i0.ɵɵdirectiveInject(i1$2.Overlay), i0.ɵɵdirectiveInject(i1$2.OverlayPositionBuilder), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: ToolTipRendererDirective, selectors: [["", "mrdToolTip", ""]], hostBindings: function ToolTipRendererDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseenter", function ToolTipRendererDirective_mouseenter_HostBindingHandler() { return ctx.show(); })("mouseleave", function ToolTipRendererDirective_mouseleave_HostBindingHandler($event) { return ctx.hide($event); });
        } }, inputs: { showToolTip: "showToolTip", text: ["mrdToolTip", "text"], contentTemplate: "contentTemplate", defaultStyle: "defaultStyle", position: "position", showIfTruncated: ["showIfTruncated", "showIfTruncated", booleanAttribute], showOnTruncatedElement: "showOnTruncatedElement", keepOnTooltipHover: ["keepOnTooltipHover", "keepOnTooltipHover", booleanAttribute], showDelay: ["showDelay", "showDelay", numberAttribute], hideDelay: ["hideDelay", "hideDelay", numberAttribute] }, exportAs: ["mrdToolTip"], features: [i0.ɵɵInputTransformsFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolTipRendererDirective, [{
        type: Directive,
        args: [{
                selector: '[mrdToolTip]',
                exportAs: 'mrdToolTip'
            }]
    }], function () { return [{ type: i1$2.Overlay }, { type: i1$2.OverlayPositionBuilder }, { type: i0.ElementRef }]; }, { showToolTip: [{
            type: Input
        }], text: [{
            type: Input,
            args: [`mrdToolTip`]
        }], contentTemplate: [{
            type: Input
        }], defaultStyle: [{
            type: Input
        }], position: [{
            type: Input
        }], showIfTruncated: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], showOnTruncatedElement: [{
            type: Input
        }], keepOnTooltipHover: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], showDelay: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], hideDelay: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], show: [{
            type: HostListener,
            args: ['mouseenter']
        }], hide: [{
            type: HostListener,
            args: ['mouseleave', ['$event']]
        }] }); })();

const _c0$1 = ["mrdButtonTextContent"];
function MrdButtonComponent_mrd_progress_bar_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mrd-progress-bar", 10);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r2.loadingProgress == null ? null : ctx_r2.loadingProgress.value)("mode", ctx_r2.loadingProgress ? "determinate" : "indeterminate")("color", ctx_r2.progressColor);
} }
function MrdButtonComponent_mrd_progress_spinner_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mrd-progress-spinner", 11);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r3.loadingProgress == null ? null : ctx_r3.loadingProgress.value)("mode", ctx_r3.loadingProgress ? "determinate" : "indeterminate")("color", ctx_r3.progressColor);
} }
const _c1 = [[["mrd-icon", 3, "icon-end", ""], ["", "mrd-icon", "", 3, "icon-end", ""]], [["", 3, "mrd-icon", "", 5, "mrd-icon"]], [["mrd-icon", "icon-end", ""], ["", "mrd-icon", "", "icon-end", ""]]];
const _c2 = function (a0) { return { "min-width": a0 }; };
const _c3 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) { return { "mrd-icon-button": a0, "mrd-raised-button": a1, "mrd-outline-button": a2, "mrd-flat-button": a3, "mrd-fab-button": a4, "mrd-mini-fab-button": a5, "mrd-toggle-button": a6, "mrd-toggle-selected": a7, "disabled": a8 }; };
const _c4 = function (a0) { return { "isCollapsed": a0 }; };
const _c5 = function (a0) { return { "full-icon": a0 }; };
const _c6 = ["mrd-icon:not([icon-end]), [mrd-icon]:not([icon-end])", ":not([mrd-icon]):not(mrd-icon)", "mrd-icon[icon-end], [mrd-icon][icon-end]"];
/**
 * Dieses Komponente stellt den Mrd-Button zur Verfügung.
 *
 * Der Button kann mittels der entsprechenden Attribute in folgenden Stilen dargestellt werden:
 * - Standard-Button (default)
 * - Icon-Button (Attributname: icon-button)
 * - Raised-Button (Attributname: raised-button)
 * - Outline-Button (Attributname: outline-button)
 * - Flat-Button (Attributname: flat-button)
 * - Fab-Button (Attributname: fab-button)
 * - MiniFab-Button (Attributname: miniFab-button)
 *
 * Weiterhin können die standard Themes (primary, accent, warn) für die Hintergrund- bzw. Textfarbe festgelegt werden (je nach Style).
 *
 * Für weitere Anpassungen siehe die Informationen der einzelnen Attribute oder die Dokumentation.
 *
 * @class MrdButtonComponent
 * @extends {BasePushStrategyObject}
 * @implements {AfterViewInit}
 */
class MrdButtonComponent extends BasePushStrategyObject {
    cdr;
    elementRef;
    /**
     * Referenz auf das Text-Element des Buttons.
     *
     * @type {ElementRef<HTMLElement>}
     * @memberof MrdButtonComponent
     */
    mrdButtonTextContent;
    /**
     * Gibt an, ob der Button ein Icon-Button ist.
     *
     * Der Content des Buttons sollte nur ein Icon sein.
     * Der Button hat standardmäßig einen transparenten Hintergrund und die Farbe des Icons ist schwarz.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    icon = false;
    /**
     * Gibt an, ob der Button ein Raised-Button ist.
     *
     * Raised-Buttons haben einen Schatten.
     * Der Button hat standardmäßig einen weißen Hintergrund und die Textfarbe schwarz.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    raised = false;
    /**
     * Gibt an, ob der Button ein Outline-Button ist.
     *
     * Outline-Buttons haben standardmäßig einen transparenten Hintergrund und einen grauen Rand, sowie einen schwarzen Text.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    outline = false;
    /**
     * Gibt an, ob der Button ein Flat-Button ist.
     *
     * Flat-Buttons haben standardmäßig einen weißen Hintergrund und die Textfarbe ist schwarz.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    flat = false;
    /**
     * Gibt an, ob der Button ein Fab-Button ist.
     *
     * Fab-Buttons sind kreisförmige Buttons.
     * Standardmäßig haben sie einen weißen Hintergrund und die Iconfarbe ist schwarz, außerdem besitzen sie einen Schatten.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    fab = false;
    /**
     * Gibt an, ob der Button ein MiniFab-Button ist.
     *
     * MiniFab-Buttons sind kreisförmige Buttons von der Größe eines Icon-Buttons.
     * Standardmäßig haben sie einen weißen Hintergrund und die Iconfarbe ist schwarz, außerdem besitzen sie einen Schatten.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    miniFab = false;
    toggle = false;
    toggleSelected = false;
    /**
     * Gibt an, ob der Button das Theme "primary" hat.
     *
     * Hierdurch wird die Hintergrundfarbe des Buttons auf die primäre Farbe des Themes gesetzt.
     *
     * @memberof MrdButtonComponent
     */
    primary = false;
    /**
     * Gibt an, ob der Button das Theme "accent" hat.
     *
     * Hierdurch wird die Hintergrundfarbe des Buttons auf die Akzentfarbe des Themes gesetzt.
     *
     * @memberof MrdButtonComponent
     */
    accent = false;
    /**
     * Gibt an, ob der Button das Theme "warn" hat.
     *
     * Hierdurch wird die Hintergrundfarbe des Buttons auf die Warnfarbe des Themes gesetzt.
     *
     * @memberof MrdButtonComponent
     */
    warn = false;
    /**
     * Gibt an, ob der Button deaktiviert ist.
     *
     * @memberof MrdButtonComponent
     */
    disabled = false;
    /**
     * Eine ObservableValue, die übergeben werden kann, um zu bestimmen,
     * ob der Button einen Ladebalken/Ladespinner anzeigen soll.
     *
     * @memberof MrdButtonComponent
     */
    loading;
    /**
     * Ein boolean, der bestimmt, ob der Button einen Ladebalken/Ladespinner anzeigen soll.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    isLoading = false;
    /**
     * Eine ObservableValue, die übergeben werden kann, um den Fortschritt des Ladebalkens/Ladespinners zu bestimmen.
     *
     * @type {ObservableValue<number>}
     * @memberof MrdButtonComponent
     */
    loadingProgress;
    /**
     * Setzt die Grundfarbe des Buttons.
     *
     * Diese wird je nach Style des Buttons als Hintergrundfarbe oder Textfarbe verwendet.
     *
     * Es können Hex-, RGB- oder RGBA-Werte, sowie "primary", "accent" oder "warn" angegeben werden.
     *
     * @memberof MrdButtonComponent
     */
    customTextColor;
    /**
     * Setzt die Hintergrundfarbe des Buttons.
     *
     * Es können Hex-, RGB- oder RGBA-Werte angegeben werden.
     *
     * @memberof MrdButtonComponent
     */
    customBgColor;
    /**
     * Gibt an, ob die benutzerdefinierte Textfarbe nicht durch ein defniertes Thema überschrieben werden soll.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    keepCustomTextColor = false;
    /**
     * Gibt an, ob die benutzerdefinierte Hintergrundfarbe nicht durch ein definiertes Thema überschrieben werden soll.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    keepCustomBgColor = false;
    customToggleUnselectedColor;
    customToggleUnselectedTextColor;
    customToggleSelectedTextColor;
    /**
     * Setzt die Farbe des Ladebalkens/Ladespinners.
     *
     * Es können Hex-, RGB- oder RGBA-Werte angegeben werden.
     *
     * @memberof MrdButtonComponent
     */
    progressColor;
    /**
     * Gibt an, ob der Button-Text verschwindet, wenn er zu lang ist und ausgepunktet werden würde.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    collapse = false;
    /**
     * Gibt an, zu welchem Style der Button kollabieren soll.
     * Mögliche Werte: "icon", "fab", "miniFab"
     *
     * @memberof MrdButtonComponent
     */
    set collapseTo(value) {
        if (this._collapseTo === value) {
            return;
        }
        if (value === MrdButtonAppearance.ICON || value === MrdButtonAppearance.FAB || value === MrdButtonAppearance.MINI_FAB) {
            this._collapseTo = value;
            this.collapse = true;
        }
        else if (value) {
            throw Error('Das Attribut collapseTo kann nur "icon", "fab" oder "miniFab" sein.');
        }
    }
    get collapseTo() {
        return this._collapseTo;
    }
    _collapseTo;
    /**
     * Sorgt dafür, dass der Button immer mindestens so breit ist, wie sein Inhalt.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    fitContent = false;
    /**
     * Gibt an, ob der Button einen Tooltip anzeigen soll.
     *
     * Der Tooltip-Text wird standardmäßig aus dem Inhalt des Buttons ohne durch [mrd-icon] gekennzeichnete Icons generiert.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    showTooltip = false;
    /**
     * Der Text des Tooltips.
     *
     * @type {string}
     * @memberof MrdButtonComponent
     */
    tooltipText;
    /**
     * Gibt an, ob der Tooltip nur angezeigt werden soll, wenn der Button-Text ausgepunktet wird.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    set tooltipIfTruncated(value) {
        this.showTooltip = value || this.showTooltip;
        this._tooltipIfTruncated = value;
    }
    get tooltipIfTruncated() {
        return this._tooltipIfTruncated;
    }
    _tooltipIfTruncated = false;
    /**
     * Die Mindesthöhe des Buttons.
     *
     * Wird eine Zahl angegeben, wird diese als Pixelwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdButtonComponent
     */
    minHeight;
    /**
     * Die Schriftgröße des Buttons.
     *
     * Wird eine Zahl angegeben, wird diese als Pixelwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdButtonComponent
     */
    fontSize;
    /**
     * Der Durchmesser für Icon-, Fab- und MiniFab-Buttons.
     *
     * Wird eine Zahl angegeben, wird diese als Pixelwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdButtonComponent
     */
    diameter;
    /**
     * Die Größe des Icons.
     *
     * Wird eine Zahl angegeben, wird diese als Pixelwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdButtonComponent
     */
    iconSize;
    fullIcon = false;
    /**
     * Der Radius der Ecken des Buttons.
     *
     * Wird eine Zahl angegeben, wird diese als Pixelwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdButtonComponent
     */
    borderRadius;
    /**
     * Das Klick-Event durch den Nutzer.
     *
     * @type {EventEmitter<Event>}
     * @memberof MrdButtonComponent
     */
    click = new EventEmitter();
    /**
     * Die Konfiguration des Mrd-Buttons.
     *
     * @private
     * @type {MrdConfigModel}
     * @memberof MrdButtonComponent
     */
    _config = ConfigUtil.getConfig();
    isCollapsed = false;
    uncollapsedAppearance;
    buttonPrimary;
    buttonAccent;
    buttonWarn;
    buttonDisabled;
    buttonProgress;
    bgColor;
    textLightColor;
    textDarkColor;
    textColor;
    hoverColor;
    activeColor;
    disabledTextColor;
    disabledBgColor;
    toggleUnselectedColor;
    borderWidth;
    borderStyle;
    borderColor;
    constructor(cdr, elementRef) {
        super();
        this.cdr = cdr;
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        if (Util.isDefined(this.loading)) {
            this.markForCheckIf(this.loading.changed);
        }
        if (Util.isDefined(this.loadingProgress)) {
            this.markForCheckIf(this.loadingProgress.changed);
        }
        this.initBaseStyle();
        this.updateStyle();
        this.cdr.detectChanges();
    }
    updateStyle() {
        let themesCount = [this.primary, this.accent, this.warn].filter((value) => value).length;
        if (themesCount > 1) {
            throw Error('Ein MrdButton kann nur ein Thema haben. Setze "primary", "accent" oder "warn" als Thema.');
        }
        let appearanceCount = [this.icon, this.raised, this.outline, this.flat, this.fab, this.miniFab, this.toggle].filter((value) => value).length;
        if (appearanceCount > 1) {
            throw Error('Ein MrdButton kann nur einen Style haben. Setze "icon-button", "raised-button", "outline-button", "flat-button", "fab-button", "miniFab-button" oder keinen Style.');
        }
        // Falls irgendeine Farbe/Thema gesetzt ist, wird die Hintergrund- und Textfarbe des Buttons anhand dieser und des Styles gesetzt.
        if (this.primary || this.accent || this.warn || this.customBgColor || this.customTextColor) {
            // Wenn 'keepCustomBgColor' gesetzt ist, dann wird 'customBgColor' als 'baseColor' verwendet
            let baseColor = this.keepCustomBgColor && !!this.customBgColor ? this.customBgColor :
                // Sonst wenn ein Theme gesetzt ist, wird die entsprechende Farbe des Themes verwendet
                this.primary ? _.isObject(this.buttonPrimary) ? this.buttonPrimary.background : this.buttonPrimary :
                    this.accent ? _.isObject(this.buttonAccent) ? this.buttonAccent.background : this.buttonAccent :
                        this.warn ? _.isObject(this.buttonWarn) ? this.buttonWarn.background : this.buttonWarn :
                            // Sonst wenn 'customBgColor' gesetzt ist, wird 'customBgColor' verwendet, sonst 'customTextColor'
                            !!this.customBgColor ? this.customBgColor : this.customTextColor;
            // Wenn 'keepCustomTextColor' gesetzt ist, dann wird 'customTextColor' als 'baseTextColor' verwendet
            let baseTextColor = this.keepCustomTextColor && !!this.customTextColor ? this.customTextColor :
                // Sonst wenn ein Theme gesetzt ist, wird die entsprechende Farbe des Themes verwendet
                this.primary ? _.isObject(this.buttonPrimary) ? this.buttonPrimary.text : this.buttonPrimary :
                    this.accent ? _.isObject(this.buttonAccent) ? this.buttonAccent.text : this.buttonAccent :
                        this.warn ? _.isObject(this.buttonWarn) ? this.buttonWarn.text : this.buttonWarn :
                            // Sonst wenn 'customTextColor' gesetzt ist, wird 'customTextColor' verwendet, sonst 'textDarkColor'
                            !!this.customTextColor ? this.customTextColor : this.textDarkColor;
            // 'bgColor' wird auf 'baseColor' gesetzt
            this.bgColor = baseColor;
            // Wenn 'keepCustomTextColor' oder kein Thema und 'customBgColor', und 'customTextColor' gesetzt sind, wird 'textColor' auf 'customTextColor' gesetzt
            this.textColor = (this.keepCustomTextColor || (themesCount === 0 && this.customBgColor)) && !!this.customTextColor ? this.customTextColor :
                // Sonst wenn ein Thema und 'keepCustomBgColor' gesetzt ist, wird 'baseTextColor' verwendet
                (themesCount === 1 && this.keepCustomBgColor) ? baseTextColor :
                    // Sonst, wenn die Appearance nicht Toggle ist oder der Toggle-Button selektiert ist,
                    // wird anhand der 'baseColor' entschieden, ob 'textDarkColor' oder 'textLightColor' verwendet wird
                    this.toggle ? this.toggleSelected && this.customToggleSelectedTextColor ? this.customToggleSelectedTextColor :
                        !this.toggleSelected && this.customToggleUnselectedTextColor ? this.customToggleUnselectedTextColor :
                            /*!this.toggle ||*/ this.toggleSelected ? ColorUtil.shouldTextBeDark(baseColor) ? this.textDarkColor : this.textLightColor :
                                ColorUtil.shouldTextBeDark(this.toggleUnselectedColor) ? this.textDarkColor : this.textLightColor :
                        // Wenn die Appearance Toggle ist und der Button nicht selektiert ist und 'customToggleUnselectedTextColor' gesetzt ist,
                        // wird diese verwendet
                        // this.customToggleUnselectedTextColor ? this.customToggleUnselectedTextColor :
                        // Sonst wird anhand von 'toggleUnselectedColor' entschieden, ob 'textDarkColor' oder 'textLightColor' verwendet wird
                        ColorUtil.shouldTextBeDark(baseColor) ? this.textDarkColor : this.textLightColor;
            // Sonst wird 'toggleUnselectedTextColor' verwendet
            // 'hoverColor' wird auf 20% transparente Version von 'baseColor' gesetzt
            this.hoverColor = ColorUtil.changeColorOpacity(baseColor, 20);
            // 'activeColor' wird auf 30% transparente Version von 'baseColor' mit 10% hellerer Farbe gesetzt
            this.activeColor = ColorUtil.changeColorOpacity(ColorUtil.changeColorBrightnessPercent(baseColor, 10), 30);
        }
        // Für den Standard-Style, Outline-Style und Icon-Style
        if (appearanceCount === 0 || this.outline || this.icon) {
            // Wenn ein Thema und 'keepCustomBgColor' nicht gesetz ist ODER
            // keine 'customBgColor', aber 'customTextColor' gesetzt sind...
            if ((themesCount === 1 && !this.keepCustomBgColor) || (!this.customBgColor && this.customTextColor)) {
                // ... wird 'textColor', falls nicht durch 'keepCustomTextColor' und 'customTextColor' fest, auf 'bgColor' gesetzt
                this.textColor = (this.keepCustomTextColor && !!this.customTextColor) ? this.customTextColor : this.bgColor;
                // ... wird 'bgColor', falls nicht durch 'keepCustomBgColor' und 'customBgColor' fest, auf die Standard-Hintergrundfarbe gesetzt
                this.bgColor = (this.keepCustomBgColor && !!this.customBgColor) ? this.customBgColor : this._config.button.backgroundColor;
            }
        }
        // Falls keine 'progressColor' gesetzt ist...
        if (!this.progressColor) {
            // ... und wir ein Theme oder eine benutzerdefinierte Textfarbe oder Hintergrundfarbe haben...
            if (themesCount === 1 || this.customTextColor || this.customBgColor) {
                // ... wird 'progressColor' für den Standard-Style, Outline-Style und Icon-Style auf 'textColor' gesetzt,
                // ansonsten auf 20% hellere Version von 'bgColor'
                if (appearanceCount === 0 || this.outline || this.icon) {
                    this.progressColor = this.textColor;
                }
                else {
                    this.progressColor = ColorUtil.changeColorBrightnessPercent(this.bgColor, 20);
                }
            }
            else {
                // Ohne Theme und benutzerdefinierte Farben wird 'progressColor' auf die Grund-Progress-Color gesetzt
                this.progressColor = this.buttonProgress;
            }
        }
        // Falls kein explizieter 'tooltipText' gesetzt ist, wird der Text des Buttons als Tooltip-Text verwendet
        if (this.mrdButtonTextContent && !this.tooltipText) {
            this.tooltipText = this.mrdButtonTextContent.nativeElement.textContent;
        }
        this.cdr.detectChanges();
    }
    /**
     * Setzt die Standard-Styles anhand der Konfiguration und der gesetzten Attribute.
     *
     * @private
     * @memberof MrdButtonComponent
     */
    initBaseStyle() {
        let appearance = this.icon ? MrdButtonAppearance.ICON : this.raised ? MrdButtonAppearance.RAISED :
            this.outline ? MrdButtonAppearance.OUTLINE : this.flat ? MrdButtonAppearance.FLAT : this.fab ? MrdButtonAppearance.FAB :
                this.miniFab ? MrdButtonAppearance.MINI_FAB : this.toggle ? MrdButtonAppearance.TOGGLE : null; //MrdButtonAppearance.DEFAULT;
        this.uncollapsedAppearance = this.uncollapsedAppearance !== undefined ? this.uncollapsedAppearance : appearance;
        this.buttonPrimary = this._config.button[appearance]?.primary || this._config.button.primary || this._config.baseColors.primary;
        this.buttonAccent = this._config.button[appearance]?.accent || this._config.button.accent || this._config.baseColors.accent;
        this.buttonWarn = this._config.button[appearance]?.warn || this._config.button.warn || this._config.baseColors.warn;
        this.buttonDisabled = this._config.button[appearance]?.disabled || this._config.button.disabled;
        this.buttonProgress = this._config.button[appearance]?.progressColor || this._config.button?.progressColor ||
            (_.isObject(this.buttonPrimary) ? this.buttonPrimary.text : this.buttonPrimary);
        this.bgColor = this._config.button[appearance]?.backgroundColor || this._config.button.backgroundColor;
        this.textLightColor = this._config.button[appearance]?.textLightColor || this._config.button.textLightColor;
        this.textDarkColor = this._config.button[appearance]?.textDarkColor || this._config.button.textDarkColor;
        this.textColor = this.textDarkColor;
        this.hoverColor = this._config.button[appearance]?.hoverColor || this._config.button.hoverColor;
        this.activeColor = this._config.button[appearance]?.activeColor || this._config.button.activeColor;
        this.disabledTextColor = this.buttonDisabled.text;
        this.disabledBgColor = this.buttonDisabled.background;
        this.toggleUnselectedColor = this.customToggleUnselectedColor || this._config.button[appearance]?.unselectedBgColor;
        if (this._config.button[appearance]?.border) {
            if (_.isObject(this._config.button[appearance].border)) {
                this.borderWidth = this._config.button[appearance].border.width;
                this.borderStyle = this._config.button[appearance].border.style;
                this.borderColor = this._config.button[appearance].border.color;
            }
            else {
                let border = this._config.button[appearance].border.split(' ');
                this.borderWidth = border[0];
                this.borderStyle = border[1];
                this.borderColor = border[2];
            }
        }
        else {
            this.borderWidth = _.isObject(this._config.button.border) ? this._config.button.border?.width : this._config.button.border.split(' ')[0];
            this.borderStyle = _.isObject(this._config.button.border) ? this._config.button.border?.style : this._config.button.border.split(' ')[1];
            this.borderColor = _.isObject(this._config.button.border) ? this._config.button.border?.color : this._config.button.border.split(' ')[2];
        }
        this.minHeight = this.minHeight || this.diameter || this._config.button[appearance]?.minHeight || this._config.button.minHeight;
        this.fontSize = this.fontSize || this._config.button[appearance]?.fontSize || this._config.button.fontSize;
        this.diameter = this.diameter || this._config.button[appearance]?.diameter || this._config.button.diameter;
        this.iconSize = this.iconSize || this._config.button[appearance]?.iconSize || this._config.button.iconSize;
        this.borderRadius = this.borderRadius || this._config.button[appearance]?.borderRadius || this._config.button.borderRadius;
    }
    /**
     * Callback, wenn sich der Collabs-Status des Buttons ändert.
     *
     * @param isCollapsed Gibt an, ob der Button kollabiert ist.
     */
    buttonCollapsed(isCollapsed) {
        // Wir reagieren nur, wenn sich der Status ändert
        if (this.isCollapsed !== isCollapsed) {
            this.isCollapsed = isCollapsed;
            // Wenn 'collapseTo' gesetzt ist, wird der Button entsprechend umgestylt
            if (Util.isDefined(this.collapseTo)) {
                // Diese Werte müssen zurückgesetzt werden, da sie für den neuen Style neu gesetzt werden müssen
                this.borderRadius = undefined;
                this.fontSize = undefined;
                this.minHeight = undefined;
                this.diameter = undefined;
                this.iconSize = undefined;
                if (isCollapsed) {
                    this.icon = this.collapseTo === MrdButtonAppearance.ICON ? true : false;
                    this.raised = false;
                    this.outline = false;
                    this.flat = false;
                    this.fab = this.collapseTo === MrdButtonAppearance.FAB ? true : false;
                    this.miniFab = this.collapseTo === MrdButtonAppearance.MINI_FAB ? true : false;
                    this.ngAfterViewInit();
                }
                else {
                    this.icon = this.uncollapsedAppearance === MrdButtonAppearance.ICON ? true : false;
                    this.raised = this.uncollapsedAppearance === MrdButtonAppearance.RAISED ? true : false;
                    this.outline = this.uncollapsedAppearance === MrdButtonAppearance.OUTLINE ? true : false;
                    this.flat = this.uncollapsedAppearance === MrdButtonAppearance.FLAT ? true : false;
                    this.fab = this.uncollapsedAppearance === MrdButtonAppearance.FAB ? true : false;
                    this.miniFab = this.uncollapsedAppearance === MrdButtonAppearance.MINI_FAB ? true : false;
                    this.ngAfterViewInit();
                }
            }
        }
    }
    onClick(event) {
        event.stopPropagation();
        event.preventDefault();
        this.click.emit(event);
    }
    /** @nocollapse */ static ɵfac = function MrdButtonComponent_Factory(t) { return new (t || MrdButtonComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdButtonComponent, selectors: [["mrd-button"]], viewQuery: function MrdButtonComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$1, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mrdButtonTextContent = _t.first);
        } }, hostVars: 8, hostBindings: function MrdButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("min-width", ctx.fitContent ? "fit-content" : "unset")("margin", ctx.toggle ? "0 -16px" : "unset")("transition", ctx.toggle ? "transform 0.2s" : "unset");
            i0.ɵɵclassProp("active", ctx.toggle && ctx.toggleActive);
        } }, inputs: { icon: ["icon-button", "icon", booleanAttribute], raised: ["raised-button", "raised", booleanAttribute], outline: ["outline-button", "outline", booleanAttribute], flat: ["flat-button", "flat", booleanAttribute], fab: ["fab-button", "fab", booleanAttribute], miniFab: ["miniFab-button", "miniFab", booleanAttribute], toggle: ["toggle-button", "toggle", booleanAttribute], toggleSelected: ["selected", "toggleSelected", booleanAttribute], primary: ["primary", "primary", booleanAttribute], accent: ["accent", "accent", booleanAttribute], warn: ["warn", "warn", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], loading: "loading", isLoading: ["isLoading", "isLoading", booleanAttribute], loadingProgress: "loadingProgress", customTextColor: ["color", "customTextColor", colorThemeAttribute], customBgColor: ["backgroundColor", "customBgColor", colorAttribute], keepCustomTextColor: ["keepCustomTextColor", "keepCustomTextColor", booleanAttribute], keepCustomBgColor: ["keepCustomBgColor", "keepCustomBgColor", booleanAttribute], customToggleUnselectedColor: ["customToggleUnselectedColor", "customToggleUnselectedColor", colorAttribute], customToggleUnselectedTextColor: ["customToggleUnselectedTextColor", "customToggleUnselectedTextColor", colorAttribute], customToggleSelectedTextColor: ["customToggleSelectedTextColor", "customToggleSelectedTextColor", colorAttribute], progressColor: ["progressColor", "progressColor", colorAttribute], collapse: ["collapse", "collapse", booleanAttribute], collapseTo: "collapseTo", fitContent: ["fit-content", "fitContent", booleanAttribute], showTooltip: ["tooltip", "showTooltip", booleanAttribute], tooltipText: "tooltipText", tooltipIfTruncated: ["tooltipIfTruncated", "tooltipIfTruncated", booleanAttribute], minHeight: ["minHeight", "minHeight", sizeAttribute], fontSize: ["fontSize", "fontSize", sizeAttribute], diameter: ["diameter", "diameter", sizeAttribute], iconSize: ["iconSize", "iconSize", sizeAttribute], fullIcon: ["fullIcon", "fullIcon", booleanAttribute], borderRadius: ["borderRadius", "borderRadius", sizeAttribute] }, outputs: { click: "click" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c6, decls: 14, vars: 66, consts: [[1, "mrd-button-container", 3, "ngStyle", "ngClass", "mrdToolTip", "showOnTruncatedElement", "showToolTip", "click"], ["buttonContainer", ""], [1, "mrd-button-background"], [1, "mrd-button-focus"], [1, "mrd-button-content", 3, "ngClass"], ["displayState", "flex", "requiredHideAttribute", "icon-collapse", "checkChildrenForAttribute", "", 1, "mrd-button-icon-content", 3, "ngClass", "hideIfTruncated", "hideOnTruncatedElement", "parentResizeElement"], [1, "mrd-button-text-content", 3, "hideIfTruncated", "parentResizeElement", "hiddenChanged"], ["mrdButtonTextContent", ""], ["class", "mrd-button-progress-bar", 3, "value", "mode", "color", 4, "ngIf"], ["class", "mrd-button-progress-spinner", 3, "value", "mode", "color", 4, "ngIf"], [1, "mrd-button-progress-bar", 3, "value", "mode", "color"], [1, "mrd-button-progress-spinner", 3, "value", "mode", "color"]], template: function MrdButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "button", 0, 1);
            i0.ɵɵlistener("click", function MrdButtonComponent_Template_button_click_0_listener($event) { return ctx.onClick($event); });
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelement(3, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span", 4)(5, "span", 5);
            i0.ɵɵprojection(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "span", 6, 7);
            i0.ɵɵlistener("hiddenChanged", function MrdButtonComponent_Template_span_hiddenChanged_7_listener($event) { return ctx.buttonCollapsed($event); });
            i0.ɵɵprojection(9, 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "span", 5);
            i0.ɵɵprojection(11, 2);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(12, MrdButtonComponent_mrd_progress_bar_12_Template, 1, 3, "mrd-progress-bar", 8);
            i0.ɵɵtemplate(13, MrdButtonComponent_mrd_progress_spinner_13_Template, 1, 3, "mrd-progress-spinner", 9);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const _r1 = i0.ɵɵreference(8);
            i0.ɵɵstyleProp("--bg-color", ctx.bgColor)("--text-color", ctx.textColor)("--disabled-text-color", ctx.disabledTextColor)("--disabled-bg-color", ctx.disabledBgColor)("--border-width", ctx.borderWidth)("--border-color", ctx.borderColor)("--border-style", ctx.borderStyle)("--border-radius", ctx.borderRadius)("--min-height", ctx.minHeight)("--font-size", ctx.fontSize)("--diameter", ctx.diameter)("--icon-size", ctx.iconSize)("--unselected-color", ctx.toggleUnselectedColor);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(48, _c2, ctx.fitContent ? "fit-content" : "unset"))("ngClass", i0.ɵɵpureFunctionV(50, _c3, [ctx.icon, ctx.raised, ctx.outline, ctx.flat, ctx.fab, ctx.miniFab, ctx.toggle, ctx.toggleSelected, ctx.disabled]))("mrdToolTip", ctx.tooltipText)("showOnTruncatedElement", ctx.tooltipIfTruncated ? _r1 : undefined)("showToolTip", ctx.showTooltip);
            i0.ɵɵadvance(3);
            i0.ɵɵstyleProp("--hover-color", ctx.hoverColor)("--active-color", ctx.activeColor);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(60, _c4, ctx.isCollapsed));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(62, _c5, ctx.fullIcon))("hideIfTruncated", ctx.collapse)("hideOnTruncatedElement", _r1)("parentResizeElement", ctx.elementRef.nativeElement);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("hideIfTruncated", ctx.collapse)("parentResizeElement", ctx.elementRef.nativeElement);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(64, _c5, ctx.fullIcon))("hideIfTruncated", ctx.collapse)("hideOnTruncatedElement", _r1)("parentResizeElement", ctx.elementRef.nativeElement);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.disabled && !ctx.icon && !ctx.fab && !ctx.miniFab && (ctx.isLoading || (ctx.loading == null ? null : ctx.loading.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) === 0));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.disabled && (ctx.icon || ctx.fab || ctx.miniFab) && (ctx.isLoading || (ctx.loading == null ? null : ctx.loading.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) === 0));
        } }, dependencies: [i1$1.NgClass, i1$1.NgIf, i1$1.NgStyle, MrdProgressBarComponent, MrdProgressSpinnerComponent, ToolTipRendererDirective, HideIfTruncatedDirective], styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;max-width:100%}.active[_nghost-%COMP%]{transform:scale(1.15);z-index:10}.mrd-button-container[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:center;min-height:var(--min-height);height:inherit;max-width:100%;width:inherit;padding:0 16px;font-size:var(--font-size);font-weight:700;letter-spacing:.1px;border:var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius);color:var(--text-color)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;z-index:1;width:100%}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]   .mrd-button-icon-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]   .mrd-button-text-content[_ngcontent-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]     mrd-icon{margin:0 2px}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]   .mrd-button-text-content[_ngcontent-%COMP%]{padding:0 16px}.mrd-button-container.disabled[_ngcontent-%COMP%]{color:var(--disabled-text-color);pointer-events:none;cursor:initial}.mrd-button-container.disabled[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{background-color:var(--disabled-bg-color)}.mrd-button-container[_ngcontent-%COMP%]:hover:not(.disabled)   .mrd-button-focus[_ngcontent-%COMP%]{background-color:var(--hover-color)}.mrd-button-container[_ngcontent-%COMP%]:active:not(.disabled)   .mrd-button-focus[_ngcontent-%COMP%]{background-color:var(--active-color)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-focus[_ngcontent-%COMP%]{position:absolute;inset:0;border-radius:var(--border-radius)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{position:absolute;inset:0;border-radius:var(--border-radius);background-color:var(--bg-color)}.mrd-button-container.mrd-raised-button[_ngcontent-%COMP%]:not(.disabled){--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-raised-button[_ngcontent-%COMP%]:not(.disabled):active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]{min-width:var(--diameter)!important;height:var(--diameter);padding:0}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{min-height:unset;width:var(--diameter);height:var(--diameter)}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]     mrd-icon{margin:0!important;font-size:calc(var(--diameter) / 2)}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     mrd-icon{font-size:var(--diameter)}.mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]:active, .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]{padding:0 56px;transition:color .2s}.mrd-button-container.mrd-toggle-button.mrd-toggle-selected[_ngcontent-%COMP%]{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040;transform:scale(1.15);z-index:10}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040;z-index:5}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:hover{z-index:5}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{transition:background-color .2s}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:not(.mrd-toggle-selected)   .mrd-button-background[_ngcontent-%COMP%]{background-color:var(--unselected-color)}.mrd-button-container[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container[_ngcontent-%COMP%]     mrd-icon{font-size:1.5em;margin-right:4px;margin-top:2px;width:var(--icon-size);height:var(--icon-size);min-width:1em}.mrd-button-container[_ngcontent-%COMP%]     [mrd-icon][icon-end], .mrd-button-container[_ngcontent-%COMP%]     mrd-icon[icon-end]{margin-right:0;margin-left:4px}.mrd-button-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:10%;left:5px;right:5px;height:10%;min-height:10%}.mrd-button-progress-spinner[_ngcontent-%COMP%]{position:absolute;top:3px;left:3px;width:calc(100% - 6px)!important;height:calc(100% - 6px)!important}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdButtonComponent, [{
        type: Component,
        args: [{ selector: 'mrd-button', host: {
                    '[style.min-width]': 'fitContent ? "fit-content" : "unset"',
                    '[style.margin]': 'toggle ? "0 -16px" : "unset"',
                    '[style.transition]': 'toggle ? "transform 0.2s" : "unset"',
                    '[class.active]': 'toggle && toggleActive'
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- Der eigentlich HTML-Button -->\r\n<button class=\"mrd-button-container\"\r\n  #buttonContainer\r\n  [style.--bg-color]=\"bgColor\"\r\n  [style.--text-color]=\"textColor\"\r\n  [style.--disabled-text-color]=\"disabledTextColor\"\r\n  [style.--disabled-bg-color]=\"disabledBgColor\"\r\n  [style.--border-width]=\"borderWidth\"\r\n  [style.--border-color]=\"borderColor\"\r\n  [style.--border-style]=\"borderStyle\"\r\n  [style.--border-radius]=\"borderRadius\"\r\n  [style.--min-height]=\"minHeight\"\r\n  [style.--font-size]=\"fontSize\"\r\n  [style.--diameter]=\"diameter\"\r\n  [style.--icon-size]=\"iconSize\"\r\n  [style.--unselected-color]=\"toggleUnselectedColor\"\r\n\r\n  (click)=\"onClick($event)\"\r\n\r\n  [ngStyle]=\"{'min-width': fitContent ? 'fit-content' : 'unset'}\"\r\n  [ngClass]=\"{'mrd-icon-button': icon, 'mrd-raised-button': raised, 'mrd-outline-button': outline,\r\n    'mrd-flat-button': flat, 'mrd-fab-button': fab, 'mrd-mini-fab-button': miniFab, 'mrd-toggle-button': toggle,\r\n    'mrd-toggle-selected': toggleSelected, 'disabled': disabled}\"\r\n\r\n  [mrdToolTip]=\"tooltipText\" [showOnTruncatedElement]=\"tooltipIfTruncated ? mrdButtonTextContent : undefined\" [showToolTip]=\"showTooltip\">\r\n  <div class=\"mrd-button-background\">\r\n    <!-- Ein Overlay \u00FCber dem Button welches den Hover- und Active-Effekt anzeigt -->\r\n    <div class=\"mrd-button-focus\" [style.--hover-color]=\"hoverColor\" [style.--active-color]=\"activeColor\"></div>\r\n  </div>\r\n  <!-- Ein Overlay \u00FCber dem Button welches den Hover- und Active-Effekt anzeigt -->\r\n  <!-- <div class=\"mrd-button-focus\" [style.--hover-color]=\"hoverColor\" [style.--active-color]=\"activeColor\"></div> -->\r\n  <!-- Der Content des Buttons -->\r\n  <span class=\"mrd-button-content\" [ngClass]=\"{'isCollapsed': isCollapsed}\">\r\n    <!-- Icons links vom Text -->\r\n    <span class=\"mrd-button-icon-content\" [ngClass]=\"{'full-icon': fullIcon}\" [hideIfTruncated]=\"collapse\" displayState=\"flex\" requiredHideAttribute=\"icon-collapse\"\r\n      checkChildrenForAttribute [hideOnTruncatedElement]=\"mrdButtonTextContent\" [parentResizeElement]=\"this.elementRef.nativeElement\"><ng-content select=\"mrd-icon:not([icon-end]), [mrd-icon]:not([icon-end])\"></ng-content></span>\r\n    <!-- Der Text des Buttons -->\r\n    <span class=\"mrd-button-text-content\" (hiddenChanged)=\"buttonCollapsed($event)\" [hideIfTruncated]=\"collapse\" #mrdButtonTextContent [parentResizeElement]=\"this.elementRef.nativeElement\"><ng-content select=\":not([mrd-icon]):not(mrd-icon)\"></ng-content></span>\r\n    <!-- Icons rechts vom Text -->\r\n    <span class=\"mrd-button-icon-content\" [ngClass]=\"{'full-icon': fullIcon}\" [hideIfTruncated]=\"collapse\" displayState=\"flex\" requiredHideAttribute=\"icon-collapse\"\r\n      checkChildrenForAttribute [hideOnTruncatedElement]=\"mrdButtonTextContent\" [parentResizeElement]=\"this.elementRef.nativeElement\"><ng-content select=\"mrd-icon[icon-end], [mrd-icon][icon-end]\"></ng-content></span>\r\n  </span>\r\n  <!-- Die Progress-Bar eines Buttons (nicht f\u00FCr Icon-, Fab- und Mini-Fab-Buttons) -->\r\n  <mrd-progress-bar class=\"mrd-button-progress-bar\"\r\n    *ngIf=\"!disabled && !icon && !fab && !miniFab && (isLoading || loading?.value || loadingProgress?.value || loadingProgress?.value === 0)\"\r\n    [value]=\"loadingProgress?.value\" [mode]=\"loadingProgress ? 'determinate' : 'indeterminate'\" [color]=\"progressColor\"></mrd-progress-bar>\r\n  <!-- Der Progress-Spinner eines Buttons (nur f\u00FCr Icon-, Fab- und Mini-Fab-Buttons) -->\r\n  <mrd-progress-spinner class=\"mrd-button-progress-spinner\"\r\n    *ngIf=\"!disabled && (icon || fab || miniFab) && (isLoading || loading?.value || loadingProgress?.value || loadingProgress?.value === 0)\"\r\n    [value]=\"loadingProgress?.value\" [mode]=\"loadingProgress ? 'determinate' : 'indeterminate'\" [color]=\"progressColor\"></mrd-progress-spinner>\r\n</button>\r\n", styles: [":host{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;max-width:100%}:host.active{transform:scale(1.15);z-index:10}.mrd-button-container{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:center;min-height:var(--min-height);height:inherit;max-width:100%;width:inherit;padding:0 16px;font-size:var(--font-size);font-weight:700;letter-spacing:.1px;border:var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius);color:var(--text-color)}.mrd-button-container .mrd-button-content{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;z-index:1;width:100%}.mrd-button-container .mrd-button-content .mrd-button-icon-content{display:flex;flex-direction:row;align-items:center;justify-content:center}.mrd-button-container .mrd-button-content .mrd-button-text-content{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-button-container .mrd-button-content.isCollapsed ::ng-deep [mrd-icon],.mrd-button-container .mrd-button-content.isCollapsed ::ng-deep mrd-icon{margin:0 2px}.mrd-button-container .mrd-button-content.isCollapsed .mrd-button-text-content{padding:0 16px}.mrd-button-container.disabled{color:var(--disabled-text-color);pointer-events:none;cursor:initial}.mrd-button-container.disabled .mrd-button-background{background-color:var(--disabled-bg-color)}.mrd-button-container:hover:not(.disabled) .mrd-button-focus{background-color:var(--hover-color)}.mrd-button-container:active:not(.disabled) .mrd-button-focus{background-color:var(--active-color)}.mrd-button-container .mrd-button-focus{position:absolute;inset:0;border-radius:var(--border-radius)}.mrd-button-container .mrd-button-background{position:absolute;inset:0;border-radius:var(--border-radius);background-color:var(--bg-color)}.mrd-button-container.mrd-raised-button:not(.disabled){--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-raised-button:not(.disabled):active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-icon-button,.mrd-button-container.mrd-fab-button,.mrd-button-container.mrd-mini-fab-button{min-width:var(--diameter)!important;height:var(--diameter);padding:0}.mrd-button-container.mrd-icon-button .mrd-button-background,.mrd-button-container.mrd-fab-button .mrd-button-background,.mrd-button-container.mrd-mini-fab-button .mrd-button-background{min-height:unset;width:var(--diameter);height:var(--diameter)}.mrd-button-container.mrd-icon-button ::ng-deep [mrd-icon],.mrd-button-container.mrd-icon-button ::ng-deep mrd-icon,.mrd-button-container.mrd-fab-button ::ng-deep [mrd-icon],.mrd-button-container.mrd-fab-button ::ng-deep mrd-icon,.mrd-button-container.mrd-mini-fab-button ::ng-deep [mrd-icon],.mrd-button-container.mrd-mini-fab-button ::ng-deep mrd-icon{margin:0!important;font-size:calc(var(--diameter) / 2)}.mrd-button-container.mrd-icon-button .mrd-button-icon-content.full-icon ::ng-deep [mrd-icon],.mrd-button-container.mrd-icon-button .mrd-button-icon-content.full-icon ::ng-deep mrd-icon,.mrd-button-container.mrd-fab-button .mrd-button-icon-content.full-icon ::ng-deep [mrd-icon],.mrd-button-container.mrd-fab-button .mrd-button-icon-content.full-icon ::ng-deep mrd-icon,.mrd-button-container.mrd-mini-fab-button .mrd-button-icon-content.full-icon ::ng-deep [mrd-icon],.mrd-button-container.mrd-mini-fab-button .mrd-button-icon-content.full-icon ::ng-deep mrd-icon{font-size:var(--diameter)}.mrd-button-container.mrd-mini-fab-button:not(.disabled) .mrd-button-background,.mrd-button-container.mrd-fab-button:not(.disabled) .mrd-button-background{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-mini-fab-button:not(.disabled) .mrd-button-background:active,.mrd-button-container.mrd-fab-button:not(.disabled) .mrd-button-background:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-toggle-button{padding:0 56px;transition:color .2s}.mrd-button-container.mrd-toggle-button.mrd-toggle-selected{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040;transform:scale(1.15);z-index:10}.mrd-button-container.mrd-toggle-button:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040;z-index:5}.mrd-button-container.mrd-toggle-button:hover{z-index:5}.mrd-button-container.mrd-toggle-button .mrd-button-background{transition:background-color .2s}.mrd-button-container.mrd-toggle-button:not(.mrd-toggle-selected) .mrd-button-background{background-color:var(--unselected-color)}.mrd-button-container ::ng-deep [mrd-icon],.mrd-button-container ::ng-deep mrd-icon{font-size:1.5em;margin-right:4px;margin-top:2px;width:var(--icon-size);height:var(--icon-size);min-width:1em}.mrd-button-container ::ng-deep [mrd-icon][icon-end],.mrd-button-container ::ng-deep mrd-icon[icon-end]{margin-right:0;margin-left:4px}.mrd-button-progress-bar{position:absolute;bottom:10%;left:5px;right:5px;height:10%;min-height:10%}.mrd-button-progress-spinner{position:absolute;top:3px;left:3px;width:calc(100% - 6px)!important;height:calc(100% - 6px)!important}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, { mrdButtonTextContent: [{
            type: ViewChild,
            args: ['mrdButtonTextContent', { static: true }]
        }], icon: [{
            type: Input,
            args: [{ alias: 'icon-button', transform: booleanAttribute }]
        }], raised: [{
            type: Input,
            args: [{ alias: 'raised-button', transform: booleanAttribute }]
        }], outline: [{
            type: Input,
            args: [{ alias: 'outline-button', transform: booleanAttribute }]
        }], flat: [{
            type: Input,
            args: [{ alias: 'flat-button', transform: booleanAttribute }]
        }], fab: [{
            type: Input,
            args: [{ alias: 'fab-button', transform: booleanAttribute }]
        }], miniFab: [{
            type: Input,
            args: [{ alias: 'miniFab-button', transform: booleanAttribute }]
        }], toggle: [{
            type: Input,
            args: [{ alias: 'toggle-button', transform: booleanAttribute }]
        }], toggleSelected: [{
            type: Input,
            args: [{ alias: 'selected', transform: booleanAttribute }]
        }], primary: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], accent: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], warn: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], disabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], loading: [{
            type: Input
        }], isLoading: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], loadingProgress: [{
            type: Input
        }], customTextColor: [{
            type: Input,
            args: [{ alias: 'color', transform: colorThemeAttribute }]
        }], customBgColor: [{
            type: Input,
            args: [{ alias: 'backgroundColor', transform: colorAttribute }]
        }], keepCustomTextColor: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], keepCustomBgColor: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], customToggleUnselectedColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], customToggleUnselectedTextColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], customToggleSelectedTextColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], progressColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], collapse: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], collapseTo: [{
            type: Input
        }], fitContent: [{
            type: Input,
            args: [{ alias: 'fit-content', transform: booleanAttribute }]
        }], showTooltip: [{
            type: Input,
            args: [{ alias: 'tooltip', transform: booleanAttribute }]
        }], tooltipText: [{
            type: Input
        }], tooltipIfTruncated: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], minHeight: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], fontSize: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], diameter: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], iconSize: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], fullIcon: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], borderRadius: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], click: [{
            type: Output
        }] }); })();
var MrdButtonAppearance;
(function (MrdButtonAppearance) {
    // DEFAULT = null,
    MrdButtonAppearance["ICON"] = "icon";
    MrdButtonAppearance["RAISED"] = "raised";
    MrdButtonAppearance["OUTLINE"] = "outline";
    MrdButtonAppearance["FLAT"] = "flat";
    MrdButtonAppearance["FAB"] = "fab";
    MrdButtonAppearance["MINI_FAB"] = "miniFab";
    MrdButtonAppearance["TOGGLE"] = "toggle";
})(MrdButtonAppearance || (MrdButtonAppearance = {}));

class MrdProgressBarModule {
    /** @nocollapse */ static ɵfac = function MrdProgressBarModule_Factory(t) { return new (t || MrdProgressBarModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdProgressBarModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdProgressBarModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MrdProgressBarComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    MrdProgressBarComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdProgressBarModule, { declarations: [MrdProgressBarComponent], imports: [CommonModule], exports: [MrdProgressBarComponent] }); })();

class MrdProgressSpinnerModule {
    /** @nocollapse */ static ɵfac = function MrdProgressSpinnerModule_Factory(t) { return new (t || MrdProgressSpinnerModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdProgressSpinnerModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdProgressSpinnerModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MrdProgressSpinnerComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    MrdProgressSpinnerComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdProgressSpinnerModule, { declarations: [MrdProgressSpinnerComponent], imports: [CommonModule], exports: [MrdProgressSpinnerComponent] }); })();

class MrdTooltipModule {
    /** @nocollapse */ static ɵfac = function MrdTooltipModule_Factory(t) { return new (t || MrdTooltipModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdTooltipModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdTooltipModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MrdTooltipComponent,
                    ToolTipRendererDirective
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    ToolTipRendererDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdTooltipModule, { declarations: [MrdTooltipComponent,
        ToolTipRendererDirective], imports: [CommonModule], exports: [ToolTipRendererDirective] }); })();

/**
 * Dieses Modul stellt den Mrd-Button zur Verfügung.
 *
 * @export MrdButtonComponent
 * @class MrdButtonModule
 */
class MrdButtonModule {
    /** @nocollapse */ static ɵfac = function MrdButtonModule_Factory(t) { return new (t || MrdButtonModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdButtonModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
            MrdProgressBarModule,
            MrdProgressSpinnerModule,
            MrdTooltipModule,
            MrdDirectiveModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdButtonModule, [{
        type: NgModule,
        args: [{
                declarations: [MrdButtonComponent],
                imports: [
                    CommonModule,
                    MrdProgressBarModule,
                    MrdProgressSpinnerModule,
                    MrdTooltipModule,
                    MrdDirectiveModule
                ],
                exports: [MrdButtonComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdButtonModule, { declarations: [MrdButtonComponent], imports: [CommonModule,
        MrdProgressBarModule,
        MrdProgressSpinnerModule,
        MrdTooltipModule,
        MrdDirectiveModule], exports: [MrdButtonComponent] }); })();

const _c0 = ["*"];
/**
 * Injection token used to provide the current location to `MatIcon`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * @docs-private
 */
const MRD_ICON_LOCATION = new InjectionToken('mrd-icon-location', {
    providedIn: 'root',
    factory: MRD_ICON_LOCATION_FACTORY,
});
/** @docs-private */
function MRD_ICON_LOCATION_FACTORY() {
    const _document = inject(DOCUMENT);
    const _location = _document ? _document.location : null;
    return {
        // Note that this needs to be a function, rather than a property, because Angular
        // will only resolve it once, but we want the current path on each call.
        getPathname: () => (_location ? _location.pathname + _location.search : ''),
    };
}
/** SVG attributes that accept a FuncIRI (e.g. `url(<something>)`). */
const funcIriAttributes = [
    'clip-path',
    'color-profile',
    'src',
    'cursor',
    'fill',
    'filter',
    'marker',
    'marker-start',
    'marker-mid',
    'marker-end',
    'mask',
    'stroke',
];
/** Selector that can be used to find all elements that are using a `FuncIRI`. */
const funcIriAttributeSelector = funcIriAttributes.map(attr => `[${attr}]`).join(', ');
/** Regex that can be used to extract the id out of a FuncIRI. */
const funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
class MrdIconComponent {
    _elementRef;
    _location;
    _errorHandler;
    _iconRegistry;
    /** Name of the icon in the SVG icon set. */
    get svgIcon() {
        return this._svgIcon;
    }
    set svgIcon(value) {
        if (value !== this._svgIcon) {
            if (value) {
                this._updateSvgIcon(value);
            }
            else if (this._svgIcon) {
                this._clearSvgElement();
            }
            this._svgIcon = value;
        }
    }
    _svgIcon;
    _svgName;
    _svgNamespace;
    /** Keeps track of the current page path. */
    _previousPath;
    /** Keeps track of the elements and attributes that we've prefixed with the current path. */
    _elementsWithExternalReferences;
    /** Subscription to the current in-progress SVG icon request. */
    _currentIconFetch = Subscription.EMPTY;
    constructor(_elementRef, _location, _errorHandler, _iconRegistry) {
        this._elementRef = _elementRef;
        this._location = _location;
        this._errorHandler = _errorHandler;
        this._iconRegistry = _iconRegistry;
    }
    _setSvgElement(svg) {
        this._clearSvgElement();
        // Note: we do this fix here, rather than the icon registry, because the
        // references have to point to the URL at the time that the icon was created.
        const path = this._location.getPathname();
        this._previousPath = path;
        this._cacheChildrenWithExternalReferences(svg);
        this._prependPathToReferences(path);
        this._elementRef.nativeElement.appendChild(svg);
    }
    _clearSvgElement() {
        const layoutElement = this._elementRef.nativeElement;
        let childCount = layoutElement.childNodes.length;
        if (this._elementsWithExternalReferences) {
            this._elementsWithExternalReferences.clear();
        }
        // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
        // we can't use innerHTML, because IE will throw if the element has a data binding.
        while (childCount--) {
            const child = layoutElement.childNodes[childCount];
            // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
            // of any loose text nodes, as well as any SVG elements in order to remove any old icons.
            if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
                child.remove();
            }
        }
    }
    /**
     * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
     * reference. This is required because WebKit browsers require references to be prefixed with
     * the current path, if the page has a `base` tag.
     */
    _prependPathToReferences(path) {
        const elements = this._elementsWithExternalReferences;
        if (elements) {
            elements.forEach((attrs, element) => {
                attrs.forEach(attr => {
                    element.setAttribute(attr.name, `url('${path}#${attr.value}')`);
                });
            });
        }
    }
    /**
     * Caches the children of an SVG element that have `url()`
     * references that we need to prefix with the current path.
     */
    _cacheChildrenWithExternalReferences(element) {
        const elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
        const elements = (this._elementsWithExternalReferences =
            this._elementsWithExternalReferences || new Map());
        for (let i = 0; i < elementsWithFuncIri.length; i++) {
            funcIriAttributes.forEach(attr => {
                const elementWithReference = elementsWithFuncIri[i];
                const value = elementWithReference.getAttribute(attr);
                const match = value ? value.match(funcIriPattern) : null;
                if (match) {
                    let attributes = elements.get(elementWithReference);
                    if (!attributes) {
                        attributes = [];
                        elements.set(elementWithReference, attributes);
                    }
                    attributes.push({ name: attr, value: match[1] });
                }
            });
        }
    }
    /** Sets a new SVG icon with a particular name. */
    _updateSvgIcon(rawName) {
        this._svgNamespace = null;
        this._svgName = null;
        this._currentIconFetch.unsubscribe();
        if (rawName) {
            const [namespace, iconName] = this._splitIconName(rawName);
            if (namespace) {
                this._svgNamespace = namespace;
            }
            if (iconName) {
                this._svgName = iconName;
            }
            this._currentIconFetch = this._iconRegistry
                .getNamedSvgIcon(iconName, namespace)
                .pipe(take(1))
                .subscribe(svg => this._setSvgElement(svg), (err) => {
                const errorMessage = `Error retrieving icon ${namespace}:${iconName}! ${err.message}`;
                this._errorHandler.handleError(new Error(errorMessage));
            });
        }
    }
    /**
     * Splits an svgIcon binding value into its icon set and icon name components.
     * Returns a 2-element array of [(icon set), (icon name)].
     * The separator for the two fields is ':'. If there is no separator, an empty
     * string is returned for the icon set and the entire value is returned for
     * the icon name. If the argument is falsy, returns an array of two empty strings.
     * Throws an error if the name contains two or more ':' separators.
     * Examples:
     *   `'social:cake' -> ['social', 'cake']
     *   'penguin' -> ['', 'penguin']
     *   null -> ['', '']
     *   'a:b:c' -> (throws Error)`
     */
    _splitIconName(iconName) {
        if (!iconName) {
            return ['', ''];
        }
        const parts = iconName.split(':');
        switch (parts.length) {
            case 1:
                return ['', parts[0]]; // Use default namespace.
            case 2:
                return parts;
            default:
                throw Error(`Invalid icon name: "${iconName}"`); // TODO: add an ngDevMode check
        }
    }
    /** @nocollapse */ static ɵfac = function MrdIconComponent_Factory(t) { return new (t || MrdIconComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(MRD_ICON_LOCATION), i0.ɵɵdirectiveInject(i0.ErrorHandler), i0.ɵɵdirectiveInject(MrdIconRegistryService)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdIconComponent, selectors: [["mrd-icon"]], inputs: { svgIcon: "svgIcon" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function MrdIconComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } } });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdIconComponent, [{
        type: Component,
        args: [{ selector: 'mrd-icon', template: "<ng-content></ng-content>\r\n" }]
    }], function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MRD_ICON_LOCATION]
            }] }, { type: i0.ErrorHandler }, { type: MrdIconRegistryService }]; }, { svgIcon: [{
            type: Input
        }] }); })();

/**
 * Dieses Modul stellt den Mrd-Icon zur Verfügung.
 *
 * @export MrdIconComponent
 * @class MrdIconModule
 */
class MrdIconModule {
    /** @nocollapse */ static ɵfac = function MrdIconModule_Factory(t) { return new (t || MrdIconModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdIconModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdIconModule, [{
        type: NgModule,
        args: [{
                declarations: [MrdIconComponent],
                imports: [
                    CommonModule
                ],
                exports: [MrdIconComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdIconModule, { declarations: [MrdIconComponent], imports: [CommonModule], exports: [MrdIconComponent] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ColorUtil, ConfigUtil, HideIfTruncatedDirective, MRD_ICON_LOCATION, MRD_ICON_LOCATION_FACTORY, MrdButtonComponent, MrdButtonModule, MrdDirectiveModule, MrdIconComponent, MrdIconModule, MrdIconRegistryService, MrdProgressBarComponent, MrdProgressBarModule, MrdProgressSpinnerComponent, MrdProgressSpinnerModule, MrdTooltipModule, ToolTipRendererDirective, colorAttribute, colorThemeAttribute, sizeAttribute, timeAttribute };
//# sourceMappingURL=mrd-core-ui.mjs.map
