import * as _ from 'underscore';
import * as i1$1 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { SecurityContext, Injectable, Optional, Inject, EventEmitter, booleanAttribute, Directive, Input, Output, NgModule, numberAttribute, Component, ChangeDetectionStrategy, HostListener, ViewChild, InjectionToken, inject, TemplateRef, forwardRef, ContentChildren, ViewChildren, Injector, ComponentRef, ViewContainerRef, Host, ContentChild } from '@angular/core';
import { of, tap, map, finalize, share, Subscription, take, startWith, Subject, defer, switchMap, merge } from 'rxjs';
import * as i1 from '@angular/common/http';
import * as i2 from '@angular/platform-browser';
import { BasePushStrategyObject, Util, BaseObject, SubscriptionHandler, ObservableValue } from 'mrd-core';
import { ComponentPortal } from '@angular/cdk/portal';
import * as i1$2 from '@angular/cdk/overlay';
import { OverlayModule } from '@angular/cdk/overlay';
import * as i1$3 from '@angular/router';
import moment from 'moment';

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
    static getMostSpecificValue(entry) {
        let tree = entry.slice();
        while (tree.length > 0 && _.isObject(this.config[tree[0]])) {
            tree = tree.slice(1);
        }
    }
    static get baseConfig() {
        return {
            baseFont: {
                // size: "16px",
                family: "URW Din,Lato,sans-serif"
            },
            baseColors: {
                primary: "#68b022",
                accent: "#293D4F",
                warn: "#b00122",
                disabled: "#afa6a6"
            },
            formField: {
                borderRadius: "7px",
                borderRadiusRounded: "70px",
                fill: {
                    backgroundColor: "#D8DFE880"
                }
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
            },
            checkbox: {
                checkboxSize: "16px",
                fill: {
                    unselected: {
                        primary: {
                            background: "#ffffff",
                            text: "#000000"
                        }
                    },
                    selected: {
                        primary: {
                            background: "#68b022",
                            text: "#ffffff"
                        }
                    }
                }
            }
        };
    }
}

class ColorUtil {
    static isHexColor(color) {
        return /^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
    }
    static isRgbColor(color) {
        return /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/.test(color);
    }
    static isRgbaColor(color) {
        return /^rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), (0|1|0\.\d+)\)$/.test(color);
    }
    static hexToRgb(hex) {
        const result = /^#?([A-Fa-f\d]{2})([A-Fa-f\d]{2})([A-Fa-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    static hexToRgba(hex) {
        if (ColorUtil.hexHasAlpha(hex)) {
            const result = /^#?([A-Fa-f\d]{2})([A-Fa-f\d]{2})([A-Fa-f\d]{2})([A-Fa-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16),
                a: parseInt(result[4], 16) / 255
            } : null;
        }
        else {
            const result = /^#?([A-Fa-f\d]{2})([A-Fa-f\d]{2})([A-Fa-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16),
                a: 1
            } : null;
        }
    }
    static hexHasAlpha(hex) {
        return /^#?([A-Fa-f\d]{8})$/i.test(hex);
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
const _c0$k = function (a0) { return { "transform": a0 }; };
function MrdProgressBarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 4);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(1, _c0$k, "translateX(" + ctx_r1.value + "%)"));
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
const _c0$j = function (a0) { return { "mrd-tooltip-container": a0 }; };
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
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0$j, ctx.defaultStyle));
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

const _c0$i = ["mrdButtonTextContent"];
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
const _c1$c = [[["mrd-icon", 3, "icon-end", ""], ["", "mrd-icon", "", 3, "icon-end", ""]], [["", 3, "mrd-icon", "", 5, "mrd-icon"]], [["mrd-icon", "icon-end", ""], ["", "mrd-icon", "", "icon-end", ""]]];
const _c2$8 = function (a0) { return { "min-width": a0 }; };
const _c3$6 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) { return { "mrd-icon-button": a0, "mrd-raised-button": a1, "mrd-outline-button": a2, "mrd-flat-button": a3, "mrd-fab-button": a4, "mrd-mini-fab-button": a5, "mrd-toggle-button": a6, "mrd-toggle-selected": a7, "disabled": a8 }; };
const _c4$1 = function (a0) { return { "isCollapsed": a0 }; };
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
    fontFamily;
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
        this.fontSize = this.fontSize || this._config.button[appearance]?.fontSize || this._config.button.fontSize || this._config.baseFont.size;
        this.fontFamily = this.fontFamily || this._config.button[appearance]?.fontFamily || this._config.button.fontFamily || this._config.baseFont.family;
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
            i0.ɵɵviewQuery(_c0$i, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mrdButtonTextContent = _t.first);
        } }, hostVars: 8, hostBindings: function MrdButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("min-width", ctx.fitContent ? "fit-content" : "unset")("margin", ctx.toggle ? "0 -16px" : "unset")("transition", ctx.toggle ? "transform 0.2s" : "unset");
            i0.ɵɵclassProp("active", ctx.toggle && ctx.toggleSelected);
        } }, inputs: { icon: ["icon-button", "icon", booleanAttribute], raised: ["raised-button", "raised", booleanAttribute], outline: ["outline-button", "outline", booleanAttribute], flat: ["flat-button", "flat", booleanAttribute], fab: ["fab-button", "fab", booleanAttribute], miniFab: ["miniFab-button", "miniFab", booleanAttribute], toggle: ["toggle-button", "toggle", booleanAttribute], toggleSelected: ["selected", "toggleSelected", booleanAttribute], primary: ["primary", "primary", booleanAttribute], accent: ["accent", "accent", booleanAttribute], warn: ["warn", "warn", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], loading: "loading", isLoading: ["isLoading", "isLoading", booleanAttribute], loadingProgress: "loadingProgress", customTextColor: ["color", "customTextColor", colorThemeAttribute], customBgColor: ["backgroundColor", "customBgColor", colorAttribute], keepCustomTextColor: ["keepCustomTextColor", "keepCustomTextColor", booleanAttribute], keepCustomBgColor: ["keepCustomBgColor", "keepCustomBgColor", booleanAttribute], customToggleUnselectedColor: ["customToggleUnselectedColor", "customToggleUnselectedColor", colorAttribute], customToggleUnselectedTextColor: ["customToggleUnselectedTextColor", "customToggleUnselectedTextColor", colorAttribute], customToggleSelectedTextColor: ["customToggleSelectedTextColor", "customToggleSelectedTextColor", colorAttribute], progressColor: ["progressColor", "progressColor", colorAttribute], collapse: ["collapse", "collapse", booleanAttribute], collapseTo: "collapseTo", fitContent: ["fit-content", "fitContent", booleanAttribute], showTooltip: ["tooltip", "showTooltip", booleanAttribute], tooltipText: "tooltipText", tooltipIfTruncated: ["tooltipIfTruncated", "tooltipIfTruncated", booleanAttribute], minHeight: ["minHeight", "minHeight", sizeAttribute], fontSize: ["fontSize", "fontSize", sizeAttribute], fontFamily: "fontFamily", diameter: ["diameter", "diameter", sizeAttribute], iconSize: ["iconSize", "iconSize", sizeAttribute], fullIcon: ["fullIcon", "fullIcon", booleanAttribute], borderRadius: ["borderRadius", "borderRadius", sizeAttribute] }, outputs: { click: "click" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c6, decls: 14, vars: 68, consts: [[1, "mrd-button-container", 3, "ngStyle", "ngClass", "mrdToolTip", "showOnTruncatedElement", "showToolTip", "click"], ["buttonContainer", ""], [1, "mrd-button-background"], [1, "mrd-button-focus"], [1, "mrd-button-content", 3, "ngClass"], ["displayState", "flex", "requiredHideAttribute", "icon-collapse", "checkChildrenForAttribute", "", 1, "mrd-button-icon-content", 3, "ngClass", "hideIfTruncated", "hideOnTruncatedElement", "parentResizeElement"], [1, "mrd-button-text-content", 3, "hideIfTruncated", "parentResizeElement", "hiddenChanged"], ["mrdButtonTextContent", ""], ["class", "mrd-button-progress-bar", 3, "value", "mode", "color", 4, "ngIf"], ["class", "mrd-button-progress-spinner", 3, "value", "mode", "color", 4, "ngIf"], [1, "mrd-button-progress-bar", 3, "value", "mode", "color"], [1, "mrd-button-progress-spinner", 3, "value", "mode", "color"]], template: function MrdButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1$c);
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
            i0.ɵɵstyleProp("--bg-color", ctx.bgColor)("--text-color", ctx.textColor)("--disabled-text-color", ctx.disabledTextColor)("--disabled-bg-color", ctx.disabledBgColor)("--border-width", ctx.borderWidth)("--border-color", ctx.borderColor)("--border-style", ctx.borderStyle)("--border-radius", ctx.borderRadius)("--min-height", ctx.minHeight)("--font-size", ctx.fontSize)("--font-family", ctx.fontFamily)("--diameter", ctx.diameter)("--icon-size", ctx.iconSize)("--unselected-color", ctx.toggleUnselectedColor);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(50, _c2$8, ctx.fitContent ? "fit-content" : "unset"))("ngClass", i0.ɵɵpureFunctionV(52, _c3$6, [ctx.icon, ctx.raised, ctx.outline, ctx.flat, ctx.fab, ctx.miniFab, ctx.toggle, ctx.toggleSelected, ctx.disabled]))("mrdToolTip", ctx.tooltipText)("showOnTruncatedElement", ctx.tooltipIfTruncated ? _r1 : undefined)("showToolTip", ctx.showTooltip);
            i0.ɵɵadvance(3);
            i0.ɵɵstyleProp("--hover-color", ctx.hoverColor)("--active-color", ctx.activeColor);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(62, _c4$1, ctx.isCollapsed));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(64, _c5, ctx.fullIcon))("hideIfTruncated", ctx.collapse)("hideOnTruncatedElement", _r1)("parentResizeElement", ctx.elementRef.nativeElement);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("hideIfTruncated", ctx.collapse)("parentResizeElement", ctx.elementRef.nativeElement);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(66, _c5, ctx.fullIcon))("hideIfTruncated", ctx.collapse)("hideOnTruncatedElement", _r1)("parentResizeElement", ctx.elementRef.nativeElement);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.disabled && !ctx.icon && !ctx.fab && !ctx.miniFab && (ctx.isLoading || (ctx.loading == null ? null : ctx.loading.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) === 0));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.disabled && (ctx.icon || ctx.fab || ctx.miniFab) && (ctx.isLoading || (ctx.loading == null ? null : ctx.loading.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) === 0));
        } }, dependencies: [i1$1.NgClass, i1$1.NgIf, i1$1.NgStyle, MrdProgressBarComponent, MrdProgressSpinnerComponent, ToolTipRendererDirective, HideIfTruncatedDirective], styles: ["[_nghost-%COMP%]{position:relative;display:inline-flex;flex-direction:column;justify-content:center;align-items:center;max-width:100%}.active[_nghost-%COMP%]{z-index:10}.mrd-button-container[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:center;min-height:var(--min-height);height:inherit;max-width:100%;width:100%;padding:0 16px;font-size:var(--font-size);font-family:var(--font-family);font-weight:700;letter-spacing:.1px;border:var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius);color:var(--text-color)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;z-index:1;width:100%}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]   .mrd-button-icon-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]   .mrd-button-text-content[_ngcontent-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]     mrd-icon{margin:0 2px}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]   .mrd-button-text-content[_ngcontent-%COMP%]{padding:0 16px}.mrd-button-container.disabled[_ngcontent-%COMP%]{color:var(--disabled-text-color);pointer-events:none;cursor:initial}.mrd-button-container.disabled[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{background-color:var(--disabled-bg-color)}.mrd-button-container[_ngcontent-%COMP%]:hover:not(.disabled)   .mrd-button-focus[_ngcontent-%COMP%]{background-color:var(--hover-color)}.mrd-button-container[_ngcontent-%COMP%]:active:not(.disabled)   .mrd-button-focus[_ngcontent-%COMP%]{background-color:var(--active-color)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-focus[_ngcontent-%COMP%]{position:absolute;inset:0;border-radius:var(--border-radius)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{position:absolute;inset:0;border-radius:var(--border-radius);background-color:var(--bg-color)}.mrd-button-container.mrd-raised-button[_ngcontent-%COMP%]:not(.disabled){--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-raised-button[_ngcontent-%COMP%]:not(.disabled):active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]{min-width:var(--diameter)!important;height:var(--diameter);padding:0}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{min-height:unset;width:var(--diameter);height:var(--diameter)}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]     mrd-icon{margin:0!important;font-size:calc(var(--diameter) / 2)}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     mrd-icon{font-size:var(--diameter)}.mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]:active, .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]{padding:0 44px;transition:color .2s}.mrd-button-container.mrd-toggle-button.mrd-toggle-selected[_ngcontent-%COMP%]{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040;transform:scale(1.15);z-index:10}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040;z-index:5}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:hover{z-index:5}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{transition:background-color .2s}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:not(.mrd-toggle-selected)   .mrd-button-background[_ngcontent-%COMP%]{background-color:var(--unselected-color)}.mrd-button-container[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container[_ngcontent-%COMP%]     mrd-icon{font-size:1.5em;margin-right:4px;margin-top:2px;width:var(--icon-size);height:var(--icon-size);min-width:1em}.mrd-button-container[_ngcontent-%COMP%]     [mrd-icon][icon-end], .mrd-button-container[_ngcontent-%COMP%]     mrd-icon[icon-end]{margin-right:0;margin-left:4px}.mrd-button-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:10%;left:5px;right:5px;height:10%;min-height:10%}.mrd-button-progress-spinner[_ngcontent-%COMP%]{position:absolute;top:3px;left:3px;width:calc(100% - 6px)!important;height:calc(100% - 6px)!important}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdButtonComponent, [{
        type: Component,
        args: [{ selector: 'mrd-button', host: {
                    '[style.min-width]': 'fitContent ? "fit-content" : "unset"',
                    '[style.margin]': 'toggle ? "0 -16px" : "unset"',
                    '[style.transition]': 'toggle ? "transform 0.2s" : "unset"',
                    '[class.active]': 'toggle && toggleSelected'
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- Der eigentlich HTML-Button -->\r\n<button class=\"mrd-button-container\"\r\n  #buttonContainer\r\n  [style.--bg-color]=\"bgColor\"\r\n  [style.--text-color]=\"textColor\"\r\n  [style.--disabled-text-color]=\"disabledTextColor\"\r\n  [style.--disabled-bg-color]=\"disabledBgColor\"\r\n  [style.--border-width]=\"borderWidth\"\r\n  [style.--border-color]=\"borderColor\"\r\n  [style.--border-style]=\"borderStyle\"\r\n  [style.--border-radius]=\"borderRadius\"\r\n  [style.--min-height]=\"minHeight\"\r\n  [style.--font-size]=\"fontSize\"\r\n  [style.--font-family]=\"fontFamily\"\r\n  [style.--diameter]=\"diameter\"\r\n  [style.--icon-size]=\"iconSize\"\r\n  [style.--unselected-color]=\"toggleUnselectedColor\"\r\n\r\n  (click)=\"onClick($event)\"\r\n\r\n  [ngStyle]=\"{'min-width': fitContent ? 'fit-content' : 'unset'}\"\r\n  [ngClass]=\"{'mrd-icon-button': icon, 'mrd-raised-button': raised, 'mrd-outline-button': outline,\r\n    'mrd-flat-button': flat, 'mrd-fab-button': fab, 'mrd-mini-fab-button': miniFab, 'mrd-toggle-button': toggle,\r\n    'mrd-toggle-selected': toggleSelected, 'disabled': disabled}\"\r\n\r\n  [mrdToolTip]=\"tooltipText\" [showOnTruncatedElement]=\"tooltipIfTruncated ? mrdButtonTextContent : undefined\" [showToolTip]=\"showTooltip\">\r\n  <div class=\"mrd-button-background\">\r\n    <!-- Ein Overlay \u00FCber dem Button welches den Hover- und Active-Effekt anzeigt -->\r\n    <div class=\"mrd-button-focus\" [style.--hover-color]=\"hoverColor\" [style.--active-color]=\"activeColor\"></div>\r\n  </div>\r\n  <!-- Ein Overlay \u00FCber dem Button welches den Hover- und Active-Effekt anzeigt -->\r\n  <!-- <div class=\"mrd-button-focus\" [style.--hover-color]=\"hoverColor\" [style.--active-color]=\"activeColor\"></div> -->\r\n  <!-- Der Content des Buttons -->\r\n  <span class=\"mrd-button-content\" [ngClass]=\"{'isCollapsed': isCollapsed}\">\r\n    <!-- Icons links vom Text -->\r\n    <span class=\"mrd-button-icon-content\" [ngClass]=\"{'full-icon': fullIcon}\" [hideIfTruncated]=\"collapse\" displayState=\"flex\" requiredHideAttribute=\"icon-collapse\"\r\n      checkChildrenForAttribute [hideOnTruncatedElement]=\"mrdButtonTextContent\" [parentResizeElement]=\"this.elementRef.nativeElement\"><ng-content select=\"mrd-icon:not([icon-end]), [mrd-icon]:not([icon-end])\"></ng-content></span>\r\n    <!-- Der Text des Buttons -->\r\n    <span class=\"mrd-button-text-content\" (hiddenChanged)=\"buttonCollapsed($event)\" [hideIfTruncated]=\"collapse\" #mrdButtonTextContent [parentResizeElement]=\"this.elementRef.nativeElement\"><ng-content select=\":not([mrd-icon]):not(mrd-icon)\"></ng-content></span>\r\n    <!-- Icons rechts vom Text -->\r\n    <span class=\"mrd-button-icon-content\" [ngClass]=\"{'full-icon': fullIcon}\" [hideIfTruncated]=\"collapse\" displayState=\"flex\" requiredHideAttribute=\"icon-collapse\"\r\n      checkChildrenForAttribute [hideOnTruncatedElement]=\"mrdButtonTextContent\" [parentResizeElement]=\"this.elementRef.nativeElement\"><ng-content select=\"mrd-icon[icon-end], [mrd-icon][icon-end]\"></ng-content></span>\r\n  </span>\r\n  <!-- Die Progress-Bar eines Buttons (nicht f\u00FCr Icon-, Fab- und Mini-Fab-Buttons) -->\r\n  <mrd-progress-bar class=\"mrd-button-progress-bar\"\r\n    *ngIf=\"!disabled && !icon && !fab && !miniFab && (isLoading || loading?.value || loadingProgress?.value || loadingProgress?.value === 0)\"\r\n    [value]=\"loadingProgress?.value\" [mode]=\"loadingProgress ? 'determinate' : 'indeterminate'\" [color]=\"progressColor\"></mrd-progress-bar>\r\n  <!-- Der Progress-Spinner eines Buttons (nur f\u00FCr Icon-, Fab- und Mini-Fab-Buttons) -->\r\n  <mrd-progress-spinner class=\"mrd-button-progress-spinner\"\r\n    *ngIf=\"!disabled && (icon || fab || miniFab) && (isLoading || loading?.value || loadingProgress?.value || loadingProgress?.value === 0)\"\r\n    [value]=\"loadingProgress?.value\" [mode]=\"loadingProgress ? 'determinate' : 'indeterminate'\" [color]=\"progressColor\"></mrd-progress-spinner>\r\n</button>\r\n", styles: [":host{position:relative;display:inline-flex;flex-direction:column;justify-content:center;align-items:center;max-width:100%}:host.active{z-index:10}.mrd-button-container{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:center;min-height:var(--min-height);height:inherit;max-width:100%;width:100%;padding:0 16px;font-size:var(--font-size);font-family:var(--font-family);font-weight:700;letter-spacing:.1px;border:var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius);color:var(--text-color)}.mrd-button-container .mrd-button-content{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;z-index:1;width:100%}.mrd-button-container .mrd-button-content .mrd-button-icon-content{display:flex;flex-direction:row;align-items:center;justify-content:center}.mrd-button-container .mrd-button-content .mrd-button-text-content{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-button-container .mrd-button-content.isCollapsed ::ng-deep [mrd-icon],.mrd-button-container .mrd-button-content.isCollapsed ::ng-deep mrd-icon{margin:0 2px}.mrd-button-container .mrd-button-content.isCollapsed .mrd-button-text-content{padding:0 16px}.mrd-button-container.disabled{color:var(--disabled-text-color);pointer-events:none;cursor:initial}.mrd-button-container.disabled .mrd-button-background{background-color:var(--disabled-bg-color)}.mrd-button-container:hover:not(.disabled) .mrd-button-focus{background-color:var(--hover-color)}.mrd-button-container:active:not(.disabled) .mrd-button-focus{background-color:var(--active-color)}.mrd-button-container .mrd-button-focus{position:absolute;inset:0;border-radius:var(--border-radius)}.mrd-button-container .mrd-button-background{position:absolute;inset:0;border-radius:var(--border-radius);background-color:var(--bg-color)}.mrd-button-container.mrd-raised-button:not(.disabled){--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-raised-button:not(.disabled):active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-icon-button,.mrd-button-container.mrd-fab-button,.mrd-button-container.mrd-mini-fab-button{min-width:var(--diameter)!important;height:var(--diameter);padding:0}.mrd-button-container.mrd-icon-button .mrd-button-background,.mrd-button-container.mrd-fab-button .mrd-button-background,.mrd-button-container.mrd-mini-fab-button .mrd-button-background{min-height:unset;width:var(--diameter);height:var(--diameter)}.mrd-button-container.mrd-icon-button ::ng-deep [mrd-icon],.mrd-button-container.mrd-icon-button ::ng-deep mrd-icon,.mrd-button-container.mrd-fab-button ::ng-deep [mrd-icon],.mrd-button-container.mrd-fab-button ::ng-deep mrd-icon,.mrd-button-container.mrd-mini-fab-button ::ng-deep [mrd-icon],.mrd-button-container.mrd-mini-fab-button ::ng-deep mrd-icon{margin:0!important;font-size:calc(var(--diameter) / 2)}.mrd-button-container.mrd-icon-button .mrd-button-icon-content.full-icon ::ng-deep [mrd-icon],.mrd-button-container.mrd-icon-button .mrd-button-icon-content.full-icon ::ng-deep mrd-icon,.mrd-button-container.mrd-fab-button .mrd-button-icon-content.full-icon ::ng-deep [mrd-icon],.mrd-button-container.mrd-fab-button .mrd-button-icon-content.full-icon ::ng-deep mrd-icon,.mrd-button-container.mrd-mini-fab-button .mrd-button-icon-content.full-icon ::ng-deep [mrd-icon],.mrd-button-container.mrd-mini-fab-button .mrd-button-icon-content.full-icon ::ng-deep mrd-icon{font-size:var(--diameter)}.mrd-button-container.mrd-mini-fab-button:not(.disabled) .mrd-button-background,.mrd-button-container.mrd-fab-button:not(.disabled) .mrd-button-background{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-mini-fab-button:not(.disabled) .mrd-button-background:active,.mrd-button-container.mrd-fab-button:not(.disabled) .mrd-button-background:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-toggle-button{padding:0 44px;transition:color .2s}.mrd-button-container.mrd-toggle-button.mrd-toggle-selected{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040;transform:scale(1.15);z-index:10}.mrd-button-container.mrd-toggle-button:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040;z-index:5}.mrd-button-container.mrd-toggle-button:hover{z-index:5}.mrd-button-container.mrd-toggle-button .mrd-button-background{transition:background-color .2s}.mrd-button-container.mrd-toggle-button:not(.mrd-toggle-selected) .mrd-button-background{background-color:var(--unselected-color)}.mrd-button-container ::ng-deep [mrd-icon],.mrd-button-container ::ng-deep mrd-icon{font-size:1.5em;margin-right:4px;margin-top:2px;width:var(--icon-size);height:var(--icon-size);min-width:1em}.mrd-button-container ::ng-deep [mrd-icon][icon-end],.mrd-button-container ::ng-deep mrd-icon[icon-end]{margin-right:0;margin-left:4px}.mrd-button-progress-bar{position:absolute;bottom:10%;left:5px;right:5px;height:10%;min-height:10%}.mrd-button-progress-spinner{position:absolute;top:3px;left:3px;width:calc(100% - 6px)!important;height:calc(100% - 6px)!important}\n"] }]
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
        }], fontFamily: [{
            type: Input
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

const _c0$h = ["*"];
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
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdIconComponent, selectors: [["mrd-icon"]], inputs: { svgIcon: "svgIcon" }, ngContentSelectors: _c0$h, decls: 1, vars: 0, template: function MrdIconComponent_Template(rf, ctx) { if (rf & 1) {
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

class MrdTabComponent {
    cdr;
    tr;
    _implicitContent;
    set label(value) {
        this._label = value;
        this.cdr.detectChanges();
    }
    get label() {
        return this._label;
    }
    _label;
    _embeddedViewRef = null;
    get content() {
        if (!this._embeddedViewRef || this._embeddedViewRef.destroyed) {
            this._embeddedViewRef = this.tr.createEmbeddedView({ $implicit: 'Angular', dateNow: new Date() });
        }
        return this._embeddedViewRef;
    }
    /**
     * Zero based index of the tab
     *
     * @memberof MrdTabComponent
     */
    set index(value) {
        this._index = value;
        this.cdr.detectChanges();
    }
    get index() {
        return this._index;
    }
    _index;
    set active(value) {
        this._active = value;
        this.cdr.detectChanges();
    }
    get active() {
        return this._active;
    }
    _active;
    preserveContent = false;
    constructor(cdr, tr) {
        this.cdr = cdr;
        this.tr = tr;
    }
    /** @nocollapse */ static ɵfac = function MrdTabComponent_Factory(t) { return new (t || MrdTabComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdTabComponent, selectors: [["", "mrdTab", ""]], viewQuery: function MrdTabComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(TemplateRef, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._implicitContent = _t.first);
        } }, inputs: { label: ["mrdTab", "label"], preserveContent: ["mrdTabPreserveContent", "preserveContent", booleanAttribute] }, features: [i0.ɵɵInputTransformsFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdTabComponent, [{
        type: Directive,
        args: [{
                selector: '[mrdTab]'
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.TemplateRef }]; }, { _implicitContent: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }], label: [{
            type: Input,
            args: ["mrdTab"]
        }], preserveContent: [{
            type: Input,
            args: [{ alias: 'mrdTabPreserveContent', transform: booleanAttribute }]
        }] }); })();

function MrdTabBodyComponent_ng_template_1_Template(rf, ctx) { }
const _c0$g = function (a0, a1) { return { "transform": a0, "display": a1 }; };
class MatTabBodyPortal {
    viewContainerRef;
    _host;
    /** Subscription to events for when the tab body begins centering. */
    _centeringSub = Subscription.EMPTY;
    /** Subscription to events for when the tab body finishes leaving from center position. */
    _leavingSub = Subscription.EMPTY;
    constructor(viewContainerRef, _host) {
        this.viewContainerRef = viewContainerRef;
        this._host = _host;
    }
    /** Set initial visibility or set up subscription for changing visibility. */
    ngOnInit() {
        this._centeringSub = this._host._goingToActive
            .pipe(startWith(this._host.active))
            .subscribe((isCentering) => {
            if (isCentering && this.viewContainerRef.length === 0) {
                this.viewContainerRef.insert(this._host.content);
            }
        });
        this._leavingSub = this._host._isHidden.subscribe(() => {
            if (!this._host.preserveContent) {
                this.viewContainerRef.clear();
            }
        });
    }
    /** Clean up centering subscription. */
    ngOnDestroy() {
        this._centeringSub.unsubscribe();
        this._leavingSub.unsubscribe();
    }
    /** @nocollapse */ static ɵfac = function MatTabBodyPortal_Factory(t) { return new (t || MatTabBodyPortal)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(forwardRef(() => MrdTabBodyComponent))); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MatTabBodyPortal, selectors: [["", "mrdTabBodyHost", ""]] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatTabBodyPortal, [{
        type: Directive,
        args: [{
                selector: '[mrdTabBodyHost]'
            }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: MrdTabBodyComponent, decorators: [{
                type: Inject,
                args: [forwardRef(() => MrdTabBodyComponent)]
            }] }]; }, null); })();
class MrdTabBodyComponent {
    cdr;
    set content(value) {
        this._content = value;
        this.cdr.detectChanges();
    }
    get content() {
        return this._content;
    }
    _content;
    set index(value) {
        this._index = value;
        this.cdr.detectChanges();
    }
    get index() {
        return this._index;
    }
    _index;
    set active(value) {
        this._active = value;
        this.cdr.detectChanges();
    }
    get active() {
        return this._active;
    }
    _active;
    preserveContent = false;
    hideTimeout;
    _isHidden = new EventEmitter();
    _goingToActive = new EventEmitter();
    set translate(value) {
        if (value !== 0) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = setTimeout(() => {
                this.hidden = true;
                this._isHidden.emit(true);
                console.log(this.index, 'hide');
                this.cdr.detectChanges();
            }, 1000);
            this._translate = value + '%';
        }
        else {
            clearTimeout(this.hideTimeout);
            this.hidden = false;
            this._goingToActive.emit(true);
            setTimeout(() => {
                this._translate = value + '%';
                this.cdr.detectChanges();
            }, 1);
        }
        this.cdr.detectChanges();
    }
    get translate() {
        return this._translate;
    }
    _translate = '0%';
    set hidden(value) {
        this._hidden = value;
        this.cdr.detectChanges();
    }
    get hidden() {
        return this._hidden;
    }
    _hidden = true;
    constructor(cdr) {
        this.cdr = cdr;
    }
    /** @nocollapse */ static ɵfac = function MrdTabBodyComponent_Factory(t) { return new (t || MrdTabBodyComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdTabBodyComponent, selectors: [["mrd-tab-body"]], inputs: { content: "content", index: "index", active: "active", preserveContent: ["preserveContent", "preserveContent", booleanAttribute], hidden: "hidden" }, outputs: { _isHidden: "_isHidden", _goingToActive: "_goingToActive" }, features: [i0.ɵɵInputTransformsFeature], decls: 2, vars: 4, consts: [[1, "mrd-tab-content", 3, "ngStyle"], ["mrdTabBodyHost", ""]], template: function MrdTabBodyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, MrdTabBodyComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(1, _c0$g, "translateX(" + ctx.translate + ")", ctx.hidden ? "none" : "block"));
        } }, dependencies: [i1$1.NgStyle, MatTabBodyPortal], styles: [".mrd-tab-content[_ngcontent-%COMP%]{display:block;position:absolute;inset:0;transition:transform 1s ease-out}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdTabBodyComponent, [{
        type: Component,
        args: [{ selector: 'mrd-tab-body', changeDetection: ChangeDetectionStrategy.OnPush, template: "\r\n<div\r\n  class=\"mrd-tab-content\"\r\n  [ngStyle]=\"{'transform': 'translateX('+translate+')', 'display': hidden ? 'none' : 'block'}\">\r\n  <ng-template mrdTabBodyHost></ng-template>\r\n</div>\r\n", styles: [".mrd-tab-content{display:block;position:absolute;inset:0;transition:transform 1s ease-out}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { content: [{
            type: Input,
            args: ['content']
        }], index: [{
            type: Input
        }], active: [{
            type: Input
        }], preserveContent: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], _isHidden: [{
            type: Output
        }], _goingToActive: [{
            type: Output
        }], hidden: [{
            type: Input
        }] }); })();

const _c0$f = ["mrdTabHeader"];
const _c1$b = function (a0, a1, a2) { return { "tab-active": a0, "tabs-rounded": a1, "fit-labels": a2 }; };
function MrdTabGroupComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6, 7);
    i0.ɵɵlistener("click", function MrdTabGroupComponent_div_0_div_1_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const tab_r3 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r5.activateTab(tab_r3.index)); });
    i0.ɵɵtext(2);
    i0.ɵɵelement(3, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c1$b, tab_r3.active, ctx_r2.rounded, ctx_r2.labelsFit));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", tab_r3.label, " ");
} }
const _c2$7 = function (a0) { return { "height": a0 }; };
function MrdTabGroupComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, MrdTabGroupComponent_div_0_div_1_Template, 4, 6, "div", 4);
    i0.ɵɵelement(2, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(6, _c2$7, ctx_r0.headerHeight + "px"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.tabs);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("left", ctx_r0.tabUnderlineLeft, "px")("width", ctx_r0.tabUnderlineWidth, "px");
} }
function MrdTabGroupComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "mrd-tab-body", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tab_r7 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("content", tab_r7.content)("active", tab_r7.active)("index", tab_r7.index)("preserveContent", tab_r7.preserveContent);
} }
class MrdTabGroupComponent extends BaseObject {
    cdr;
    router;
    route;
    tabs;
    tabBodys;
    tabHeader;
    rounded = false;
    labelsFit = false;
    noHeader = false;
    queryParameterActive;
    set headerHeight(value) {
        this._headerHeight = value;
        this.cdr.detectChanges();
    }
    get headerHeight() {
        return this._headerHeight;
    }
    _headerHeight;
    set selectedIndex(value) {
        this._selectedIndex = value;
        this.activateTab(value);
    }
    get selectedIndex() {
        return this._selectedIndex;
    }
    _selectedIndex;
    changeTab;
    selectedTabChanged = new EventEmitter();
    selectedTabIndexChanged = new EventEmitter();
    tabUnderlineLeft = 0;
    tabUnderlineWidth = 0;
    activeIndex;
    activeTab;
    activeTabBody;
    constructor(cdr, router, route) {
        super();
        this.cdr = cdr;
        this.router = router;
        this.route = route;
    }
    ngAfterViewInit() {
        this.tabs.forEach((tab, index) => {
            tab.index = index;
        });
        if (Util.isDefined(this.changeTab)) {
            this.watch(this.changeTab.changed, new SubscriptionHandler((index) => {
                this.activateTab(index);
            }));
            if (Util.isDefined(this.changeTab.value)) {
                this.activateTab(this.changeTab.value);
            }
        }
        if (Util.isDefined(this.selectedIndex) && this.selectedIndex !== this.activeIndex) {
            this.activateTab(this.selectedIndex);
        }
        if (this.queryParameterActive) {
            this.route.queryParams.subscribe((params) => {
                if (Util.isDefined(params[this.queryParameterActive])) {
                    let index = parseInt(params[this.queryParameterActive]);
                    if (index >= 0 && index < this.tabs.length) {
                        this.activateTab(index);
                    }
                }
                else {
                    this.activateTab(0);
                }
            });
        }
        else if (!Util.isDefined(this.activeIndex)) {
            this.activateTab(0);
        }
    }
    activateTab(index) {
        if (Util.isDefined(this.activeIndex) && Util.isDefined(this.activeTab)) {
            if (index === this.activeIndex) {
                return;
            }
            if (index > this.activeIndex) {
                this.activeTabBody.translate = -100;
                this.activeTab.active = false;
            }
            if (index < this.activeIndex) {
                this.activeTabBody.translate = 100;
                this.activeTab.active = false;
            }
        }
        if (Util.isDefined(this.tabBodys)) {
            this.tabBodys.forEach((tab, i) => {
                if (i < index) {
                    tab.translate = -100;
                }
                if (i > index) {
                    tab.translate = 100;
                }
            });
            let tabBody = this.tabBodys.get(index);
            let tab = this.tabs.get(index);
            // Frag mich nicht wieso, aber wenn die Tabs nicht über die Standard-Header, sondern über
            // selectedIndex oder changeTab gesetzt werden, dann ist der Content des TabBodys manchmal destroyed.
            // Deshalb setzen wir ihn hier wieder auf den Content des Tabs, der immer funktioniert.
            if (tabBody.content.destroyed) {
                tabBody.content = tab.content;
            }
            tab.active = true;
            tabBody.translate = 0;
            this.activeIndex = index;
            this.activeTabBody = tabBody;
            this.activeTab = tab;
            if (this.queryParameterActive) {
                this.router.navigate([], {
                    queryParams: {
                        [this.queryParameterActive]: index
                    },
                    queryParamsHandling: 'merge'
                });
            }
            if (!this.noHeader) {
                let header = this.tabHeader.get(index);
                this.tabUnderlineLeft = header.nativeElement.offsetLeft;
                this.tabUnderlineWidth = header.nativeElement.offsetWidth;
            }
            this.selectedTabChanged.emit(tab);
            this.selectedTabIndexChanged.emit(index);
        }
        this.cdr.detectChanges();
    }
    /** @nocollapse */ static ɵfac = function MrdTabGroupComponent_Factory(t) { return new (t || MrdTabGroupComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1$3.Router), i0.ɵɵdirectiveInject(i1$3.ActivatedRoute)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdTabGroupComponent, selectors: [["mrd-tab-group"]], contentQueries: function MrdTabGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, MrdTabComponent, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabs = _t);
        } }, viewQuery: function MrdTabGroupComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(MrdTabBodyComponent, 5);
            i0.ɵɵviewQuery(_c0$f, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabBodys = _t);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabHeader = _t);
        } }, inputs: { rounded: ["rounded", "rounded", booleanAttribute], labelsFit: ["labelsFit", "labelsFit", booleanAttribute], noHeader: ["noHeader", "noHeader", booleanAttribute], queryParameterActive: "queryParameterActive", headerHeight: "headerHeight", selectedIndex: "selectedIndex", changeTab: "changeTab" }, outputs: { selectedTabChanged: "selectedTabChanged", selectedTabIndexChanged: "selectedTabIndexChanged" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 2, consts: [["class", "mrd-tab-group-tabs-container", 3, "ngStyle", 4, "ngIf"], [1, "mrd-tab-group-content-container"], [4, "ngFor", "ngForOf"], [1, "mrd-tab-group-tabs-container", 3, "ngStyle"], ["class", "mrd-tab-group-tab", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "mrd-tab-underline"], [1, "mrd-tab-group-tab", 3, "ngClass", "click"], ["mrdTabHeader", ""], [1, "mrd-tab-group-tab-indicator"], [3, "content", "active", "index", "preserveContent"]], template: function MrdTabGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, MrdTabGroupComponent_div_0_Template, 3, 8, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtemplate(2, MrdTabGroupComponent_ng_container_2_Template, 2, 4, "ng-container", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.noHeader);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.tabs);
        } }, dependencies: [i1$1.NgClass, i1$1.NgForOf, i1$1.NgIf, i1$1.NgStyle, MrdTabBodyComponent], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;flex:1 1 100%;max-height:100%}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;border-bottom:1px solid lightgrey;background-color:#e5e5e5;position:relative}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-underline[_ngcontent-%COMP%]{position:absolute;bottom:0;height:2px;background-color:#00f;transition:left .3s,width .3s}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab[_ngcontent-%COMP%]{display:flex;flex:1 1 100%;flex-direction:column;align-items:center;justify-content:center;min-width:-moz-fit-content;min-width:fit-content;height:100%;padding:12px 32px;position:relative;color:gray;font-weight:700;background-color:#f0f0f0;border:1px solid #d2d2d2}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.fit-labels[_ngcontent-%COMP%]{max-width:-moz-fit-content;max-width:fit-content}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tabs-rounded[_ngcontent-%COMP%], .mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tabs-rounded[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]{border-top-right-radius:24px;border-top-left-radius:24px}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tab-active[_ngcontent-%COMP%]{background-color:#68b022;color:#fff;border-color:#68b022}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tab-active[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]:hover{background-color:#000;opacity:.1}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]{position:absolute;inset:0}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]:active{pointer-events:none}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]:hover{background-color:#68b022;opacity:.2}.mrd-tab-group-content-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:1 1 100%;overflow:hidden;position:relative}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdTabGroupComponent, [{
        type: Component,
        args: [{ selector: 'mrd-tab-group', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-tab-group-tabs-container\" [ngStyle]=\"{'height': headerHeight+'px'}\" *ngIf=\"!noHeader\">\r\n  <div class=\"mrd-tab-group-tab\" #mrdTabHeader *ngFor=\"let tab of tabs\"\r\n    [ngClass]=\"{'tab-active': tab.active, 'tabs-rounded': rounded, 'fit-labels': labelsFit}\" (click)=\"activateTab(tab.index)\">\r\n    {{tab.label}}\r\n    <div class=\"mrd-tab-group-tab-indicator\"></div>\r\n  </div>\r\n  <div class=\"mrd-tab-underline\" [style.left.px]=\"tabUnderlineLeft\" [style.width.px]=\"tabUnderlineWidth\"></div>\r\n</div>\r\n<div class=\"mrd-tab-group-content-container\">\r\n  <!-- <ng-content></ng-content> -->\r\n  <ng-container *ngFor=\"let tab of tabs\">\r\n    <mrd-tab-body\r\n      [content]=\"tab.content\"\r\n      [active]=\"tab.active\"\r\n      [index]=\"tab.index\"\r\n      [preserveContent]=\"tab.preserveContent\"\r\n    >\r\n\r\n    </mrd-tab-body>\r\n  </ng-container>\r\n</div>\r\n", styles: [":host{display:flex;flex-direction:column;width:100%;flex:1 1 100%;max-height:100%}.mrd-tab-group-tabs-container{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;border-bottom:1px solid lightgrey;background-color:#e5e5e5;position:relative}.mrd-tab-group-tabs-container .mrd-tab-underline{position:absolute;bottom:0;height:2px;background-color:#00f;transition:left .3s,width .3s}.mrd-tab-group-tabs-container .mrd-tab-group-tab{display:flex;flex:1 1 100%;flex-direction:column;align-items:center;justify-content:center;min-width:-moz-fit-content;min-width:fit-content;height:100%;padding:12px 32px;position:relative;color:gray;font-weight:700;background-color:#f0f0f0;border:1px solid #d2d2d2}.mrd-tab-group-tabs-container .mrd-tab-group-tab.fit-labels{max-width:-moz-fit-content;max-width:fit-content}.mrd-tab-group-tabs-container .mrd-tab-group-tab.tabs-rounded,.mrd-tab-group-tabs-container .mrd-tab-group-tab.tabs-rounded .mrd-tab-group-tab-indicator{border-top-right-radius:24px;border-top-left-radius:24px}.mrd-tab-group-tabs-container .mrd-tab-group-tab.tab-active{background-color:#68b022;color:#fff;border-color:#68b022}.mrd-tab-group-tabs-container .mrd-tab-group-tab.tab-active .mrd-tab-group-tab-indicator:hover{background-color:#000;opacity:.1}.mrd-tab-group-tabs-container .mrd-tab-group-tab .mrd-tab-group-tab-indicator{position:absolute;inset:0}.mrd-tab-group-tabs-container .mrd-tab-group-tab .mrd-tab-group-tab-indicator:active{pointer-events:none}.mrd-tab-group-tabs-container .mrd-tab-group-tab .mrd-tab-group-tab-indicator:hover{background-color:#68b022;opacity:.2}.mrd-tab-group-content-container{display:flex;flex-direction:row;flex:1 1 100%;overflow:hidden;position:relative}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1$3.Router }, { type: i1$3.ActivatedRoute }]; }, { tabs: [{
            type: ContentChildren,
            args: [MrdTabComponent]
        }], tabBodys: [{
            type: ViewChildren,
            args: [MrdTabBodyComponent]
        }], tabHeader: [{
            type: ViewChildren,
            args: ['mrdTabHeader']
        }], rounded: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], labelsFit: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], noHeader: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], queryParameterActive: [{
            type: Input
        }], headerHeight: [{
            type: Input
        }], selectedIndex: [{
            type: Input
        }], changeTab: [{
            type: Input
        }], selectedTabChanged: [{
            type: Output
        }], selectedTabIndexChanged: [{
            type: Output
        }] }); })();

class MrdTabsModule {
    /** @nocollapse */ static ɵfac = function MrdTabsModule_Factory(t) { return new (t || MrdTabsModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdTabsModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdTabsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MrdTabGroupComponent,
                    MrdTabComponent,
                    MrdTabBodyComponent,
                    MatTabBodyPortal
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    MrdTabGroupComponent,
                    MrdTabComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdTabsModule, { declarations: [MrdTabGroupComponent,
        MrdTabComponent,
        MrdTabBodyComponent,
        MatTabBodyPortal], imports: [CommonModule], exports: [MrdTabGroupComponent,
        MrdTabComponent] }); })();

const _c0$e = function (a0, a1, a2) { return { "selected": a0, "main": a1, "back": a2 }; };
const _c1$a = function (a0, a1) { return { "selected": a0, "over": a1 }; };
/**
 * Komponente für die Darstellung von Geo-Icons (Schlagzeichnungen).
 *
 * @class MrdGeoIconComponent
 * @implements {AfterViewInit}
 */
class MrdGeoIconComponent {
    static _config = ConfigUtil.getConfig().geoIcon;
    /**
     * Breite des Icons.
     *
     * Wird eine Zahl übergeben, wird diese als Pixelwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdGeoIconComponent
     */
    width = MrdGeoIconComponent._config.width;
    /**
     * Höhe des Icons.
     *
     * Wird eine Zahl übergeben, wird diese als Pixelwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdGeoIconComponent
     */
    height = MrdGeoIconComponent._config.height;
    /**
     * Margin um das Icon.
     *
     * Wird eine Zahl übergeben, wird diese als Pixelwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdGeoIconComponent
     */
    margin = MrdGeoIconComponent._config.margin;
    /**
     * Übergangszeit für Farbwechsel (Selektiert <-> nicht selektiert).
     *
     * Wird eine Zahl übergeben, wird diese als Sekundenwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdGeoIconComponent
     */
    transitionTime = MrdGeoIconComponent._config.transitionTime;
    /**
     * Hauptfarbe des Icons.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    mainColor = MrdGeoIconComponent._config.mainColor;
    /**
     * Hauptfarbe des Icons, wenn es selektiert ist.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    mainSelectedColor = MrdGeoIconComponent._config.mainSelectedColor;
    /**
     * Deckkraft der Hauptfarbe des Icons.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    mainOpacity = MrdGeoIconComponent._config.mainOpacity;
    /**
     * Deckkraft der Hauptfarbe des Icons, wenn es selektiert ist.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    mainSelectedOpacity = MrdGeoIconComponent._config.mainSelectedOpacity;
    /**
     * Farbe der 2. Ebene des Icons.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    overlayColor = MrdGeoIconComponent._config.overlayColor;
    /**
     * Farbe der 2. Ebene des Icons, wenn es selektiert ist.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    overlaySelectedColor = MrdGeoIconComponent._config.overlaySelectedColor;
    /**
     * Deckkraft der 2. Ebene des Icons.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    overlayOpacity = MrdGeoIconComponent._config.overlayOpacity;
    /**
     * Deckkraft der 2. Ebene des Icons, wenn es selektiert ist.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    overlaySelectedOpacity = MrdGeoIconComponent._config.overlaySelectedOpacity;
    /**
     * Hintergrundfarbe des Icons, wenn es eine zweite Ebene gibt.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    backColor = MrdGeoIconComponent._config.backColor;
    /**
     * Hintergrundfarbe des Icons, wenn es eine zweite Ebene gibt und diese selektiert ist.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    backSelectedColor = MrdGeoIconComponent._config.backSelectedColor;
    /**
     * Deckkraft des Hintergrunds des Icons.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    backOpacity = MrdGeoIconComponent._config.backOpacity;
    /**
     * Deckkraft des Hintergrunds des Icons, wenn es selektiert ist.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    backSelectedOpacity = MrdGeoIconComponent._config.backSelectedOpacity;
    /**
     * Gibt an, ob das Icon selektiert ist.
     *
     * @type {boolean}
     * @memberof MrdGeoIconComponent
     */
    isSelected = false;
    /**
     * Daten für die Basis des Icons.
     *
     * @type {any[]}
     * @memberof MrdGeoIconComponent
     */
    set baseData(value) {
        this._baseData = value;
        let path = this.getPathString(value);
        this.base = path.ps;
        this.viewBox = path.vbs;
    }
    get baseData() {
        return this._baseData;
    }
    _baseData;
    /**
     * Daten für die 2. Ebene des Icons.
     *
     * @type {any[]}
     * @memberof MrdGeoIconComponent
     */
    set overlayData(value) {
        this._baseData = value;
        let p = this.getPathString(value);
        this.overlay = p.ps;
        if (!value) {
            this.hasOverlay = false;
        }
        else {
            this.hasOverlay = true;
        }
    }
    get overlayData() {
        return this._baseData;
    }
    /**
     * Gibt an, ob das Icon eine 2. Ebene hat.
     *
     * @type {boolean}
     * @memberof MrdGeoIconComponent
     */
    hasOverlay;
    /**
     * Beinhaltet die Daten der ersten Ebene des Icons.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    base;
    /**
     * Beinhaltet die Daten der zweiten Ebene des Icons.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    overlay;
    viewBox;
    getPathString(d) {
        if (!d) {
            return { ps: "", vb: [0, 0, 0, 0], vbs: "0 0 1 1" };
        }
        // Wenn der zweite Level ein Array ist Handelt es sich um daten mit inselflaechen.
        // Dann wird die erste Flaeche verwendet ohne inseln
        if (Array.isArray(d) && Array.isArray(d[0]) && Array.isArray(d[0][0])) {
            d = d[0];
        }
        var vb = [0, 0, 0, 0];
        var ps;
        for (let i = 0; i < d.length; i++) {
            if (!ps) {
                ps = "M";
            }
            else {
                ps += "L";
            }
            let dd2 = this.mercEncode(d[i][1], d[i][0], 100, 100);
            let d1 = dd2[0] * 30000;
            let d2 = dd2[1] * 30000;
            if (vb[0] == 0 || vb[0] > d1) {
                vb[0] = d1;
            }
            if (vb[1] == 0 || vb[1] > d2) {
                vb[1] = d2;
            }
            if (vb[2] == 0 || vb[2] < d1) {
                vb[2] = d1;
            }
            if (vb[3] == 0 || vb[3] < d2) {
                vb[3] = d2;
            }
            ps += d1 + " " + d2;
        }
        ps += "z";
        return { ps: ps, vb: vb, vbs: vb[0] + " " + vb[1] + " " + (vb[2] - vb[0]) + " " + (vb[3] - vb[1]) };
    }
    mercEncode(lat, lng, w, h) {
        // get x
        var x = (lng + 180) * (w / 360);
        // convert from degrees to radians
        var latRad = lat * Math.PI / 180;
        // get y value
        var mercN = Math.log(Math.tan((Math.PI / 4) + (latRad / 2)));
        var y = (h / 2) - (w * mercN / (2 * Math.PI));
        return [x, y];
    }
    /** @nocollapse */ static ɵfac = function MrdGeoIconComponent_Factory(t) { return new (t || MrdGeoIconComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdGeoIconComponent, selectors: [["mrd-geo-icon"]], inputs: { width: ["width", "width", (value) => sizeAttribute(value, MrdGeoIconComponent._config.width)], height: ["height", "height", (value) => sizeAttribute(value, MrdGeoIconComponent._config.height)], margin: ["margin", "margin", (value) => sizeAttribute(value, MrdGeoIconComponent._config.margin)], transitionTime: ["transitionTime", "transitionTime", (value) => timeAttribute(value, MrdGeoIconComponent._config.transitionTime)], mainColor: ["mainColor", "mainColor", (value) => colorAttribute(value, MrdGeoIconComponent._config.mainColor)], mainSelectedColor: ["mainSelectedColor", "mainSelectedColor", (value) => colorAttribute(value, MrdGeoIconComponent._config.mainSelectedColor)], mainOpacity: ["mainOpacity", "mainOpacity", (value) => numberAttribute(value, MrdGeoIconComponent._config.mainOpacity)], mainSelectedOpacity: ["mainSelectedOpacity", "mainSelectedOpacity", (value) => numberAttribute(value, MrdGeoIconComponent._config.mainSelectedOpacity)], overlayColor: ["overlayColor", "overlayColor", (value) => colorAttribute(value, MrdGeoIconComponent._config.overlayColor)], overlaySelectedColor: ["overlaySelectedColor", "overlaySelectedColor", (value) => colorAttribute(value, MrdGeoIconComponent._config.overlaySelectedColor)], overlayOpacity: ["overlayOpacity", "overlayOpacity", (value) => numberAttribute(value, MrdGeoIconComponent._config.overlayOpacity)], overlaySelectedOpacity: ["overlaySelectedOpacity", "overlaySelectedOpacity", (value) => numberAttribute(value, MrdGeoIconComponent._config.overlaySelectedOpacity)], backColor: ["backColor", "backColor", (value) => colorAttribute(value, MrdGeoIconComponent._config.backColor)], backSelectedColor: ["backSelectedColor", "backSelectedColor", (value) => colorAttribute(value, MrdGeoIconComponent._config.backSelectedColor)], backOpacity: ["backOpacity", "backOpacity", (value) => numberAttribute(value, MrdGeoIconComponent._config.backOpacity)], backSelectedOpacity: ["backSelectedOpacity", "backSelectedOpacity", (value) => numberAttribute(value, MrdGeoIconComponent._config.backSelectedOpacity)], isSelected: ["isSelected", "isSelected", booleanAttribute], baseData: "baseData", overlayData: "overlayData" }, features: [i0.ɵɵInputTransformsFeature], decls: 4, vars: 44, consts: [[1, "geoicon"], [3, "ngClass"]], template: function MrdGeoIconComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(0, "svg", 0)(1, "g");
            i0.ɵɵelement(2, "path", 1)(3, "path", 1);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵstyleProp("--width", ctx.width)("--height", ctx.height)("--margin", ctx.margin)("--transitionTime", ctx.transitionTime)("--mainColor", ctx.mainColor)("--mainSelectedColor", ctx.mainSelectedColor)("--backColor", ctx.backColor)("--backSelectedColor", ctx.backSelectedColor)("--overColor", ctx.overlayColor)("--overSelectedColor", ctx.overlaySelectedColor)("--mainOpacity", ctx.mainOpacity)("--mainSelectedOpacity", ctx.mainSelectedOpacity)("--backOpacity", ctx.backOpacity)("--backSelectedOpacity", ctx.backSelectedOpacity)("--overOpacity", ctx.overlayOpacity)("--overSelectedOpacity", ctx.overlaySelectedOpacity);
            i0.ɵɵattribute("viewBox", ctx.viewBox);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(37, _c0$e, ctx.isSelected, !ctx.hasOverlay, ctx.hasOverlay));
            i0.ɵɵattribute("d", ctx.base);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(41, _c1$a, ctx.isSelected, ctx.hasOverlay));
            i0.ɵɵattribute("d", ctx.overlay);
        } }, dependencies: [i1$1.NgClass], styles: [".geoicon[_ngcontent-%COMP%]{width:var(--width);height:var(--height);margin:var(--margin)}.geoicon[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{opacity:var(--mainOpacity);fill:var(--mainColor);transition:fill var(--transitionTime),opacity var(--transitionTime)}.geoicon[_ngcontent-%COMP%]   .main.selected[_ngcontent-%COMP%]{opacity:var(--mainSelectedOpacity);fill:var(--mainSelectedColor)}.geoicon[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{opacity:var(--backOpacity);fill:var(--backColor);transition:fill var(--transitionTime)}.geoicon[_ngcontent-%COMP%]   .back.selected[_ngcontent-%COMP%]{opacity:var(--backSelectedOpacity);fill:var(--backSelectedColor)}.geoicon[_ngcontent-%COMP%]   .over[_ngcontent-%COMP%]{opacity:var(--overOpacity);fill:var(--overColor);transition:fill var(--transitionTime)}.geoicon[_ngcontent-%COMP%]   .over.selected[_ngcontent-%COMP%]{opacity:var(--overSelectedOpacity);fill:var(--overSelectedColor)}"] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdGeoIconComponent, [{
        type: Component,
        args: [{ selector: 'mrd-geo-icon', template: "<svg class=\"geoicon\" [attr.viewBox]=\"viewBox\"\r\n  [style.--width]=\"width\"\r\n  [style.--height]=\"height\"\r\n  [style.--margin]=\"margin\"\r\n  [style.--transitionTime]=\"transitionTime\"\r\n  [style.--mainColor]=\"mainColor\"\r\n  [style.--mainSelectedColor]=\"mainSelectedColor\"\r\n  [style.--backColor]=\"backColor\"\r\n  [style.--backSelectedColor]=\"backSelectedColor\"\r\n  [style.--overColor]=\"overlayColor\"\r\n  [style.--overSelectedColor]=\"overlaySelectedColor\"\r\n  [style.--mainOpacity]=\"mainOpacity\"\r\n  [style.--mainSelectedOpacity]=\"mainSelectedOpacity\"\r\n  [style.--backOpacity]=\"backOpacity\"\r\n  [style.--backSelectedOpacity]=\"backSelectedOpacity\"\r\n  [style.--overOpacity]=\"overlayOpacity\"\r\n  [style.--overSelectedOpacity]=\"overlaySelectedOpacity\"\r\n  >\r\n  <g>\r\n    <path [attr.d]=\"base\" [ngClass]=\"{'selected': isSelected, 'main': !hasOverlay, 'back':hasOverlay}\" ></path>\r\n    <path [attr.d]=\"overlay\" [ngClass]=\"{'selected': isSelected, 'over': hasOverlay}\"></path>\r\n  </g>\r\n</svg>\r\n", styles: [".geoicon{width:var(--width);height:var(--height);margin:var(--margin)}.geoicon .main{opacity:var(--mainOpacity);fill:var(--mainColor);transition:fill var(--transitionTime),opacity var(--transitionTime)}.geoicon .main.selected{opacity:var(--mainSelectedOpacity);fill:var(--mainSelectedColor)}.geoicon .back{opacity:var(--backOpacity);fill:var(--backColor);transition:fill var(--transitionTime)}.geoicon .back.selected{opacity:var(--backSelectedOpacity);fill:var(--backSelectedColor)}.geoicon .over{opacity:var(--overOpacity);fill:var(--overColor);transition:fill var(--transitionTime)}.geoicon .over.selected{opacity:var(--overSelectedOpacity);fill:var(--overSelectedColor)}\n"] }]
    }], null, { width: [{
            type: Input,
            args: [{ transform: (value) => sizeAttribute(value, MrdGeoIconComponent._config.width) }]
        }], height: [{
            type: Input,
            args: [{ transform: (value) => sizeAttribute(value, MrdGeoIconComponent._config.height) }]
        }], margin: [{
            type: Input,
            args: [{ transform: (value) => sizeAttribute(value, MrdGeoIconComponent._config.margin) }]
        }], transitionTime: [{
            type: Input,
            args: [{ transform: (value) => timeAttribute(value, MrdGeoIconComponent._config.transitionTime) }]
        }], mainColor: [{
            type: Input,
            args: [{ transform: (value) => colorAttribute(value, MrdGeoIconComponent._config.mainColor) }]
        }], mainSelectedColor: [{
            type: Input,
            args: [{ transform: (value) => colorAttribute(value, MrdGeoIconComponent._config.mainSelectedColor) }]
        }], mainOpacity: [{
            type: Input,
            args: [{ transform: (value) => numberAttribute(value, MrdGeoIconComponent._config.mainOpacity) }]
        }], mainSelectedOpacity: [{
            type: Input,
            args: [{ transform: (value) => numberAttribute(value, MrdGeoIconComponent._config.mainSelectedOpacity) }]
        }], overlayColor: [{
            type: Input,
            args: [{ transform: (value) => colorAttribute(value, MrdGeoIconComponent._config.overlayColor) }]
        }], overlaySelectedColor: [{
            type: Input,
            args: [{ transform: (value) => colorAttribute(value, MrdGeoIconComponent._config.overlaySelectedColor) }]
        }], overlayOpacity: [{
            type: Input,
            args: [{ transform: (value) => numberAttribute(value, MrdGeoIconComponent._config.overlayOpacity) }]
        }], overlaySelectedOpacity: [{
            type: Input,
            args: [{ transform: (value) => numberAttribute(value, MrdGeoIconComponent._config.overlaySelectedOpacity) }]
        }], backColor: [{
            type: Input,
            args: [{ transform: (value) => colorAttribute(value, MrdGeoIconComponent._config.backColor) }]
        }], backSelectedColor: [{
            type: Input,
            args: [{ transform: (value) => colorAttribute(value, MrdGeoIconComponent._config.backSelectedColor) }]
        }], backOpacity: [{
            type: Input,
            args: [{ transform: (value) => numberAttribute(value, MrdGeoIconComponent._config.backOpacity) }]
        }], backSelectedOpacity: [{
            type: Input,
            args: [{ transform: (value) => numberAttribute(value, MrdGeoIconComponent._config.backSelectedOpacity) }]
        }], isSelected: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], baseData: [{
            type: Input
        }], overlayData: [{
            type: Input
        }] }); })();

class MrdGeoIconModule {
    /** @nocollapse */ static ɵfac = function MrdGeoIconModule_Factory(t) { return new (t || MrdGeoIconModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdGeoIconModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdGeoIconModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MrdGeoIconComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    MrdGeoIconComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdGeoIconModule, { declarations: [MrdGeoIconComponent], imports: [CommonModule], exports: [MrdGeoIconComponent] }); })();

/**
 * Der Service, um FlyOuts zu öffnen und zu schließen.
 *
 * @export
 * @class FlyOutService
 */
class FlyOutService {
    overlay;
    injector;
    /**
     * Die Map, die die offenen FlyOuts beinhaltet.
     *
     * @private
     * @type {Map<string, MrdFlyOutComponentRef>}
     * @memberof FlyOutService
     */
    overlayMap = new Map();
    constructor(overlay, injector) {
        this.overlay = overlay;
        this.injector = injector;
    }
    /**
     * Öffnet ein FlyOut mit der übergebenen Komponente und optionalen Konfiguration.
     *
     * @param {ComponentType<any>} component
     * @param {MrdFlyOutConfig} [config] (optional)
     * @return {MrdFlyOutComponentRef}
     * @memberof FlyOutService
     */
    open(component, config) {
        // Wir erzeugen ein neues Overlay
        let overlayRef = this.overlay.create();
        // Wir fügen die MrdFlyOutComponent in das Overlay ein
        let componentRef = overlayRef.attach(new ComponentPortal(MrdFlyOutComponent));
        // Wir setzen die ID des Overlays
        componentRef.instance.overlayId = Util.guid();
        // Wir setzen die Konfiguration
        componentRef.instance.config = config;
        // Wir erzeugen einen neuen Injector, um die Daten und die Referenz auf die MrdFlyOutComponent, an die eingebettete Komponente zu übergeben
        let contentInjector = Injector.create({
            providers: [{ provide: FlyOutData, useValue: config?.data }, { provide: (ComponentRef), useValue: componentRef }],
            parent: this.injector
        });
        // Wir fügen die eingebettete Komponente in das FlyOut ein
        let contentRef = componentRef.instance.content.createComponent(component, { injector: contentInjector });
        // Wir erzeugen unser Referenz-Objekt...
        let mrdFlyComponentRef = {
            identifier: componentRef.instance.overlayId,
            overlayRef: overlayRef,
            componentRef: componentRef,
            contentRef: contentRef,
            afterOpened: componentRef.instance.afterOpened,
            onClose: componentRef.instance.onClose,
            afterClosed: componentRef.instance.afterClosed
        };
        // ... und fügen es der Map hinzu
        this.overlayMap.set(componentRef.instance.overlayId, mrdFlyComponentRef);
        // Wir geben die Referenz zurück
        return mrdFlyComponentRef;
    }
    /**
     * Schließt das FlyOut mit der übergebenen ID.
     *
     * @param {string} id
     * @memberof FlyOutService
     */
    close(id) {
        // Wir holen die Referenz aus der Map
        let mrdComponentRef = this.overlayMap.get(id);
        // Wir zerstören das FlyOut und das Overlay
        mrdComponentRef.overlayRef.detach();
        mrdComponentRef.overlayRef.dispose();
        this.overlayMap.delete(id);
    }
    /** @nocollapse */ static ɵfac = function FlyOutService_Factory(t) { return new (t || FlyOutService)(i0.ɵɵinject(i1$2.Overlay), i0.ɵɵinject(i0.Injector)); };
    /** @nocollapse */ static ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: FlyOutService, factory: FlyOutService.ɵfac, providedIn: 'root' });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FlyOutService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1$2.Overlay }, { type: i0.Injector }]; }, null); })();
/**
 * Der Service, um Daten an ein FlyOut zu übergeben.
 *
 * @class FlyOutData
 */
class FlyOutData {
    data = {};
    /** @nocollapse */ static ɵfac = function FlyOutData_Factory(t) { return new (t || FlyOutData)(); };
    /** @nocollapse */ static ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: FlyOutData, factory: FlyOutData.ɵfac, providedIn: 'root' });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FlyOutData, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

const _c0$d = ["content"];
function MrdFlyOutComponent_mrd_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-button", 6);
    i0.ɵɵlistener("click", function MrdFlyOutComponent_mrd_button_4_Template_mrd_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 7);
    i0.ɵɵelement(2, "path", 8)(3, "path", 9);
    i0.ɵɵelementEnd()();
} }
const _c1$9 = function (a0) { return { "open": a0 }; };
const _c2$6 = function (a0, a1, a2, a3, a4) { return { "open": a0, "topDown": a1, "bottomUp": a2, "leftRight": a3, "rightLeft": a4 }; };
/**
 * Diese Komponente stellt ein FlyOut dar, das von oben nach unten, von unten nach oben, von links nach rechts oder von rechts nach links einfliegt.
 *
 * @export
 * @class MrdFlyOutComponent
 * @extends {BaseObject}
 * @implements {AfterViewInit}
 */
class MrdFlyOutComponent extends BaseObject {
    cdr;
    flyOutService;
    /**
     * Die Referenz auf das Content-Element, in das die eingebettete Komponente geladen wird.
     *
     * @type {ViewContainerRef}
     * @memberof MrdFlyOutComponent
     */
    content;
    /**
     * Setzt die Konfiguration des FlyOuts.
     *
     * @memberof MrdFlyOutComponent
     */
    set config(value) {
        if (value) {
            this.flyInFrom = value.flyInFrom;
            this.disableClose = value.disableCloseOnBackdrop ?? this.disableClose;
            this.backdropColor = value.backdropColor ?? this.backdropColor;
            this.hideDefaultCloseButton = value.hideDefaultCloseButton ?? this.hideDefaultCloseButton;
            this.width = value.width ?? this.width;
            this.maxWidth = value.maxWidth ?? this.maxWidth;
            this.height = value.height ?? this.height;
            this.maxHeight = value.maxHeight ?? this.maxHeight;
            this.padding = value.padding ?? this.padding;
            this.borderRadius = value.borderRadius ?? this.borderRadius;
            this.backgroundColor = value.backgroundColor ?? this.backgroundColor;
            this.transitionTime = value.transitionTime ?? this.transitionTime;
        }
    }
    /**
     * Setzt die Richtung, aus der das FlyOut einfliegt.
     * Default: 'bottom'
     *
     * @memberof MrdFlyOutComponent
     */
    set flyInFrom(value) {
        this.topDown = this.bottomUp = this.leftRight = this.rightLeft = false;
        switch (value) {
            case 'top':
                this.topDown = true;
                break;
            case 'bottom':
                this.bottomUp = true;
                break;
            case 'left':
                this.leftRight = true;
                break;
            case 'right':
                this.rightLeft = true;
                break;
            default:
                this.bottomUp = true;
                break;
        }
    }
    /**
     * Gibt an, ob der Standard-Schließen-Button nicht angezeigt wird.
     * Default: false
     *
     * @type {boolean}
     * @memberof MrdFlyOutComponent
     */
    hideDefaultCloseButton = false;
    /**
     * Gibt an, ob das FlyOut beim Klick auf den Hintergrund nicht geschlossen wird.
     * Default: false;
     *
     * @type {boolean}
     * @memberof MrdFlyOutComponent
     */
    disableClose = false;
    /**
     * Die Farbe des Hintergrunds.
     * Default: 'rgba(0, 0, 0, 0.5)'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    backdropColor = 'rgba(0, 0, 0, 0.5)';
    /**
     * Die Breite des FlyOuts.
     * Default: 'fit-content'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    width = 'fit-content';
    /**
     * Die maximale Breite des FlyOuts.
     * Default: '95vw'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    maxWidth = '95vw';
    /**
     * Die Höhe des FlyOuts.
     * Default: 'fit-content'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    height = 'fit-content';
    /**
     * Die maximale Höhe des FlyOuts.
     * Default: '95vh'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    maxHeight = '95vh';
    /**
     * Das Padding des FlyOuts zum Rand.
     * Default: '1em'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    padding = '1em';
    /**
     * Der Radius der Ecken des FlyOuts.
     * Default: '20px'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    borderRadius = '20px';
    /**
     * Die Hintergrundfarbe des FlyOuts.
     * Default: '#fff'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    backgroundColor = '#fff';
    /**
     * Die Zeit, die das FlyOut benötigt, um zu öffnen oder zu schließen.
     * Default: '1.0s'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    transitionTime = '1.0s';
    /**
     * Das vom FlyOut ausgelöste Event, wenn das FlyOut geöffnet wurde.
     *
     * @type {EventEmitter<void>}
     * @memberof MrdFlyOutComponent
     */
    afterOpened = new EventEmitter();
    /**
     * Das vom FlyOut ausgelöste Event, wenn das FlyOut geschlossen wird.
     * Gibt einen Wert zurück, wenn über die MrdFlyOutCloseDirective ein Wert übergeben wurde.
     *
     * @type {EventEmitter<any>}
     * @memberof MrdFlyOutComponent
     */
    onClose = new EventEmitter();
    /**
     * Das vom FlyOut ausgelöste Event, wenn das FlyOut geschlossen wurde.
     * Gibt einen Wert zurück, wenn über die MrdFlyOutCloseDirective ein Wert übergeben wurde.
     *
     * @type {EventEmitter<any>}
     * @memberof MrdFlyOutComponent
     */
    afterClosed = new EventEmitter();
    /**
     * Gibt an, ob das FlyOut von oben nach unten einfliegt.
     *
     * @type {boolean}
     * @memberof MrdFlyOutComponent
     */
    topDown = false;
    /**
     * Gibt an, ob das FlyOut von unten nach oben einfliegt.
     *
     * @type {boolean}
     * @memberof MrdFlyOutComponent
     */
    bottomUp = true;
    /**
     * Gibt an, ob das FlyOut von links nach rechts einfliegt.
     *
     * @type {boolean}
     * @memberof MrdFlyOutComponent
     */
    leftRight = false;
    /**
     * Gibt an, ob das FlyOut von rechts nach links einfliegt.
     *
     * @type {boolean}
     * @memberof MrdFlyOutComponent
     */
    rightLeft = false;
    /**
     * Die ID des Overlays.
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    overlayId;
    /**
     * Der ObservableValue, der den Zustand des FlyOuts steuert.
     *
     * @type {ObservableValue<boolean>}
     * @memberof MrdFlyOutComponent
     */
    stateToggle = new ObservableValue(false);
    constructor(cdr, flyOutService) {
        super();
        this.cdr = cdr;
        this.flyOutService = flyOutService;
    }
    /**
     * Initialisiert das Einfahren des FlyOut.
     *
     * @memberof MrdFlyOutComponent
     */
    ngAfterViewInit() {
        setTimeout(() => {
            this.stateToggle.value = true;
            this.afterOpened.emit();
            this.cdr.detectChanges();
        }, 100);
    }
    /**
     * Wird aufgerufen, wenn auf den Hintergrund geklickt wurde.
     *
     * @memberof MrdFlyOutComponent
     */
    backdropClicked() {
        if (!this.disableClose) {
            this.close();
        }
    }
    /**
     * Schließt das FlyOut.
     *
     * @param {*} [returnValue]
     * @memberof MrdFlyOutComponent
     */
    close(returnValue) {
        this.onClose.emit(returnValue);
        this.stateToggle.value = false;
        this.cdr.detectChanges();
        setTimeout(() => {
            this.afterClosed.emit(returnValue);
            this.flyOutService.close(this.overlayId);
        }, 1000);
    }
    /**
     * Wird aufgerufen, wenn das FlyOut über eine MrdFlyOutCloseDirective geschlossen wird.
     *
     * @memberof MrdFlyOutComponent
     */
    closeDirectiveClicked(returnValue) {
        this.close(returnValue);
    }
    /** @nocollapse */ static ɵfac = function MrdFlyOutComponent_Factory(t) { return new (t || MrdFlyOutComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(FlyOutService)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdFlyOutComponent, selectors: [["mrd-fly-out"]], viewQuery: function MrdFlyOutComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$d, 7, ViewContainerRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 31, consts: [[1, "backdrop", 3, "ngClass", "click"], [1, "mrd-fly-out"], [1, "mrd-fly-out__container", 3, "ngClass"], [1, "mrd-fly-out__content"], ["icon-button", "", "iconSize", "2em", "class", "mrd-fly-out__close", 3, "click", 4, "ngIf"], ["content", ""], ["icon-button", "", "iconSize", "2em", 1, "mrd-fly-out__close", 3, "click"], ["mrd-icon", "", "width", "48", "height", "48", "viewBox", "0 0 48 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M43.1253 20.1956C42.3728 16.4129 40.5155 12.9384 37.7883 10.2113C34.1313 6.55443 29.1715 4.5 24 4.5C18.8285 4.5 13.8687 6.55443 10.2117 10.2113C7.48449 12.9384 5.62722 16.4129 4.87475 20.1956C4.12228 23.9782 4.5084 27.899 5.98429 31.4622C7.46017 35.0253 9.95953 38.0709 13.1663 40.2136C16.3731 42.3563 20.1432 43.5 24 43.5C27.8568 43.5 31.6269 42.3563 34.8337 40.2136C38.0405 38.0709 40.5398 35.0253 42.0157 31.4622C43.4916 27.899 43.8777 23.9782 43.1253 20.1956ZM47.5388 19.3176C46.6127 14.6621 44.3268 10.3857 40.9702 7.02923C36.4694 2.52855 30.365 0 24 0C17.635 0 11.5306 2.52855 7.02976 7.02923C3.67321 10.3857 1.38735 14.6621 0.461228 19.3176C-0.464888 23.9732 0.0103406 28.7987 1.82682 33.1842C3.64329 37.5697 6.71943 41.318 10.6662 43.9552C14.613 46.5924 19.2532 48 24 48C28.7468 48 33.387 46.5924 37.3338 43.9552C41.2806 41.318 44.3567 37.5697 46.1732 33.1842C47.9897 28.7987 48.4649 23.9732 47.5388 19.3176Z", "fill", "#949EA7"], ["d", "M27.9366 30.9242L23.9998 26.9867L20.0631 30.9242C19.867 31.1204 19.6341 31.276 19.3777 31.3821C19.1213 31.4881 18.8465 31.5425 18.5691 31.5422C18.2918 31.5424 18.0171 31.488 17.7609 31.3819C17.5047 31.2759 17.2719 31.1203 17.0758 30.9242C16.6798 30.528 16.4573 29.9907 16.4573 29.4305C16.4573 28.8704 16.6798 28.3331 17.0758 27.9369L21.0126 24.0002L17.0758 20.0634C16.8797 19.8673 16.724 19.6344 16.6179 19.3782C16.5117 19.1219 16.457 18.8472 16.457 18.5698C16.457 18.2924 16.5117 18.0177 16.6179 17.7614C16.724 17.5051 16.8797 17.2723 17.0758 17.0762C17.4719 16.6802 18.009 16.4577 18.5691 16.4577C19.1291 16.4577 19.6663 16.6802 20.0623 17.0762L23.9991 21.0129L27.9358 17.0762C28.3319 16.6802 28.869 16.4577 29.4291 16.4577C29.9891 16.4577 30.5263 16.6802 30.9223 17.0762C31.1185 17.2723 31.2741 17.5051 31.3803 17.7614C31.4865 18.0177 31.5411 18.2924 31.5411 18.5698C31.5411 18.8472 31.4865 19.1219 31.3803 19.3782C31.2741 19.6344 31.1185 19.8673 30.9223 20.0634L26.9856 24.0002L30.9223 27.9369C31.3184 28.3331 31.5408 28.8704 31.5408 29.4305C31.5408 29.9907 31.3184 30.528 30.9223 30.9242C30.7264 31.1204 30.4936 31.276 30.2373 31.3821C29.9811 31.4882 29.7064 31.5425 29.4291 31.5422C29.1519 31.5425 28.8773 31.4881 28.6212 31.382C28.3651 31.276 28.1324 31.1204 27.9366 30.9242Z", "fill", "#949EA7"]], template: function MrdFlyOutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function MrdFlyOutComponent_Template_div_click_0_listener() { return ctx.backdropClicked(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵtemplate(4, MrdFlyOutComponent_mrd_button_4_Template, 4, 0, "mrd-button", 4);
            i0.ɵɵelement(5, "div", null, 5);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵstyleProp("--bd-color", ctx.backdropColor)("--bd-transition-time", ctx.transitionTime);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(23, _c1$9, ctx.stateToggle.value));
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("--fo-width", ctx.width)("--fo-max-width", ctx.maxWidth)("--fo-height", ctx.height)("--fo-max-height", ctx.maxHeight)("--fo-bg-color", ctx.backgroundColor)("--fo-padding", ctx.padding)("--fo-border-radius", ctx.borderRadius)("--fo-transition-time", ctx.transitionTime);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(25, _c2$6, ctx.stateToggle.value, ctx.topDown, ctx.bottomUp, ctx.leftRight, ctx.rightLeft));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.hideDefaultCloseButton);
        } }, dependencies: [i1$1.NgClass, i1$1.NgIf, MrdButtonComponent], styles: ["[_nghost-%COMP%]{width:100vw;height:100vh;position:absolute;inset:0}.backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:transparent;transition:background-color var(--bd-transition-time) ease-in-out;z-index:2}.backdrop.open[_ngcontent-%COMP%]{display:block;background-color:var(--bd-color)}.mrd-fly-out[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;width:100%;height:100%}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container[_ngcontent-%COMP%]{position:absolute;width:var(--fo-width);max-width:var(--fo-max-width);height:var(--fo-height);max-height:var(--fo-max-height);background-color:var(--fo-bg-color);box-shadow:0 0 10px #00000080;border-radius:var(--fo-border-radius);padding:var(--fo-padding);transition:top var(--fo-transition-time) ease-in-out,bottom var(--fo-transition-time) ease-in-out,left var(--fo-transition-time) ease-in-out,right var(--fo-transition-time) ease-in-out;z-index:3}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container[_ngcontent-%COMP%]   .mrd-fly-out__content[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.topDown[_ngcontent-%COMP%]{padding-top:4em;top:-100%}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.bottomUp[_ngcontent-%COMP%]{padding-bottom:4em;bottom:-100%}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.leftRight[_ngcontent-%COMP%]{padding-left:4em;left:-100%}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.rightLeft[_ngcontent-%COMP%]{padding-right:4em;right:-100%}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.topDown[_ngcontent-%COMP%]{top:-3em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.bottomUp[_ngcontent-%COMP%]{bottom:-2em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.leftRight[_ngcontent-%COMP%]{left:-2em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.rightLeft[_ngcontent-%COMP%]{right:-2em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__close[_ngcontent-%COMP%]{position:absolute;top:0;right:0}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdFlyOutComponent, [{
        type: Component,
        args: [{ selector: 'mrd-fly-out', changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- Der Hintergrund des FlyOuts -->\r\n<div class=\"backdrop\" [ngClass]=\"{'open': stateToggle.value}\" (click)=\"backdropClicked()\"\r\n  [style.--bd-color]=\"backdropColor\"\r\n  [style.--bd-transition-time]=\"transitionTime\"\r\n  ></div>\r\n<!-- Die \u00E4u\u00DFerste Komponente des FlyOuts, das den Container zentriert -->\r\n<div class=\"mrd-fly-out\"\r\n  [style.--fo-width]=\"width\"\r\n  [style.--fo-max-width]=\"maxWidth\"\r\n  [style.--fo-height]=\"height\"\r\n  [style.--fo-max-height]=\"maxHeight\"\r\n  [style.--fo-bg-color]=\"backgroundColor\"\r\n  [style.--fo-padding]=\"padding\"\r\n  [style.--fo-border-radius]=\"borderRadius\"\r\n  [style.--fo-transition-time]=\"transitionTime\"\r\n  >\r\n  <!-- Der Container, der das Grundlayout des FlyOuts bereitstellt -->\r\n  <div class=\"mrd-fly-out__container\" [ngClass]=\"{'open': stateToggle.value,\r\n    'topDown': topDown, 'bottomUp': bottomUp, 'leftRight': leftRight, 'rightLeft': rightLeft}\">\r\n    <!-- Der Inhalt des FlyOuts -->\r\n    <div class=\"mrd-fly-out__content\">\r\n      <!-- Der Standard Schlie\u00DFen-Button des FlyOuts -->\r\n      <mrd-button icon-button iconSize=\"2em\" (click)=\"close()\" class=\"mrd-fly-out__close\" *ngIf=\"!hideDefaultCloseButton\">\r\n        <svg mrd-icon width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M43.1253 20.1956C42.3728 16.4129 40.5155 12.9384 37.7883 10.2113C34.1313 6.55443 29.1715 4.5 24 4.5C18.8285 4.5 13.8687 6.55443 10.2117 10.2113C7.48449 12.9384 5.62722 16.4129 4.87475 20.1956C4.12228 23.9782 4.5084 27.899 5.98429 31.4622C7.46017 35.0253 9.95953 38.0709 13.1663 40.2136C16.3731 42.3563 20.1432 43.5 24 43.5C27.8568 43.5 31.6269 42.3563 34.8337 40.2136C38.0405 38.0709 40.5398 35.0253 42.0157 31.4622C43.4916 27.899 43.8777 23.9782 43.1253 20.1956ZM47.5388 19.3176C46.6127 14.6621 44.3268 10.3857 40.9702 7.02923C36.4694 2.52855 30.365 0 24 0C17.635 0 11.5306 2.52855 7.02976 7.02923C3.67321 10.3857 1.38735 14.6621 0.461228 19.3176C-0.464888 23.9732 0.0103406 28.7987 1.82682 33.1842C3.64329 37.5697 6.71943 41.318 10.6662 43.9552C14.613 46.5924 19.2532 48 24 48C28.7468 48 33.387 46.5924 37.3338 43.9552C41.2806 41.318 44.3567 37.5697 46.1732 33.1842C47.9897 28.7987 48.4649 23.9732 47.5388 19.3176Z\" fill=\"#949EA7\"/>\r\n          <path d=\"M27.9366 30.9242L23.9998 26.9867L20.0631 30.9242C19.867 31.1204 19.6341 31.276 19.3777 31.3821C19.1213 31.4881 18.8465 31.5425 18.5691 31.5422C18.2918 31.5424 18.0171 31.488 17.7609 31.3819C17.5047 31.2759 17.2719 31.1203 17.0758 30.9242C16.6798 30.528 16.4573 29.9907 16.4573 29.4305C16.4573 28.8704 16.6798 28.3331 17.0758 27.9369L21.0126 24.0002L17.0758 20.0634C16.8797 19.8673 16.724 19.6344 16.6179 19.3782C16.5117 19.1219 16.457 18.8472 16.457 18.5698C16.457 18.2924 16.5117 18.0177 16.6179 17.7614C16.724 17.5051 16.8797 17.2723 17.0758 17.0762C17.4719 16.6802 18.009 16.4577 18.5691 16.4577C19.1291 16.4577 19.6663 16.6802 20.0623 17.0762L23.9991 21.0129L27.9358 17.0762C28.3319 16.6802 28.869 16.4577 29.4291 16.4577C29.9891 16.4577 30.5263 16.6802 30.9223 17.0762C31.1185 17.2723 31.2741 17.5051 31.3803 17.7614C31.4865 18.0177 31.5411 18.2924 31.5411 18.5698C31.5411 18.8472 31.4865 19.1219 31.3803 19.3782C31.2741 19.6344 31.1185 19.8673 30.9223 20.0634L26.9856 24.0002L30.9223 27.9369C31.3184 28.3331 31.5408 28.8704 31.5408 29.4305C31.5408 29.9907 31.3184 30.528 30.9223 30.9242C30.7264 31.1204 30.4936 31.276 30.2373 31.3821C29.9811 31.4882 29.7064 31.5425 29.4291 31.5422C29.1519 31.5425 28.8773 31.4881 28.6212 31.382C28.3651 31.276 28.1324 31.1204 27.9366 30.9242Z\" fill=\"#949EA7\"/>\r\n        </svg>\r\n      </mrd-button>\r\n      <!-- Der Inhalt des FlyOuts (die eingebettete Komponente wird hier reingealden) -->\r\n      <div #content></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n", styles: [":host{width:100vw;height:100vh;position:absolute;inset:0}.backdrop{position:absolute;inset:0;background-color:transparent;transition:background-color var(--bd-transition-time) ease-in-out;z-index:2}.backdrop.open{display:block;background-color:var(--bd-color)}.mrd-fly-out{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;width:100%;height:100%}.mrd-fly-out .mrd-fly-out__container{position:absolute;width:var(--fo-width);max-width:var(--fo-max-width);height:var(--fo-height);max-height:var(--fo-max-height);background-color:var(--fo-bg-color);box-shadow:0 0 10px #00000080;border-radius:var(--fo-border-radius);padding:var(--fo-padding);transition:top var(--fo-transition-time) ease-in-out,bottom var(--fo-transition-time) ease-in-out,left var(--fo-transition-time) ease-in-out,right var(--fo-transition-time) ease-in-out;z-index:3}.mrd-fly-out .mrd-fly-out__container .mrd-fly-out__content{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center}.mrd-fly-out .mrd-fly-out__container.topDown{padding-top:4em;top:-100%}.mrd-fly-out .mrd-fly-out__container.bottomUp{padding-bottom:4em;bottom:-100%}.mrd-fly-out .mrd-fly-out__container.leftRight{padding-left:4em;left:-100%}.mrd-fly-out .mrd-fly-out__container.rightLeft{padding-right:4em;right:-100%}.mrd-fly-out .mrd-fly-out__container.open.topDown{top:-3em}.mrd-fly-out .mrd-fly-out__container.open.bottomUp{bottom:-2em}.mrd-fly-out .mrd-fly-out__container.open.leftRight{left:-2em}.mrd-fly-out .mrd-fly-out__container.open.rightLeft{right:-2em}.mrd-fly-out .mrd-fly-out__close{position:absolute;top:0;right:0}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: FlyOutService }]; }, { content: [{
            type: ViewChild,
            args: ['content', { read: ViewContainerRef, static: true }]
        }] }); })();

/**
 * Diese Directive kann verwendet werden, um das, die Komponente umgebende, FlyOut zu schließen.
 * Wird ein Wert übergebene, wird dieser über die Events onClose und afterClosed der FlyOut-Komponente zurückgegeben.
 *
 * @class MrdFlyOutCloseDirective
 */
class MrdFlyOutCloseDirective {
    componentRef;
    /**
     * Setzt den Wert, der über die Events onClose und afterClosed der FlyOut-Komponente zurückgegeben wird.
     * Default: undefined
     *
     * @memberof MrdFlyOutCloseDirective
     */
    set mrdFlyOutClose(value) {
        this.value = value === '' ? undefined : value;
    }
    /**
     * Der Rückgabewert, der über die Events onClose und afterClosed der FlyOut-Komponente zurückgegeben wird.
     *
     * @private
     * @type {*}
     * @memberof MrdFlyOutCloseDirective
     */
    value;
    constructor(
    // Wir injecten die MrdFlyOutComponent, um die closeDirectiveClicked-Methode aufrufen zu können
    componentRef) {
        this.componentRef = componentRef;
    }
    /**
     * Der Hostlistener, wenn das Element der Directive geklickt wird.
     * Falls die Komponente innerhalb eines MrdFlyOuts liegt,
     * wird die closeDirectiveClicked-Methode der FlyOut-Komponente mit dem übergebenen Rückgabewert aufgerufen.
     */
    onClick() {
        this.componentRef?.instance.closeDirectiveClicked(this.value);
    }
    ;
    /** @nocollapse */ static ɵfac = function MrdFlyOutCloseDirective_Factory(t) { return new (t || MrdFlyOutCloseDirective)(i0.ɵɵdirectiveInject((ComponentRef))); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdFlyOutCloseDirective, selectors: [["", "mrdFlyOutClose", ""]], hostBindings: function MrdFlyOutCloseDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function MrdFlyOutCloseDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } }, inputs: { mrdFlyOutClose: "mrdFlyOutClose" } });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdFlyOutCloseDirective, [{
        type: Directive,
        args: [{
                selector: '[mrdFlyOutClose]'
            }]
    }], function () { return [{ type: i0.ComponentRef, decorators: [{
                type: Inject,
                args: [(ComponentRef)]
            }] }]; }, { mrdFlyOutClose: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();

class MrdFlyOutModule {
    /** @nocollapse */ static ɵfac = function MrdFlyOutModule_Factory(t) { return new (t || MrdFlyOutModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdFlyOutModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
            MrdButtonModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdFlyOutModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MrdFlyOutComponent,
                    MrdFlyOutCloseDirective
                ],
                imports: [
                    CommonModule,
                    MrdButtonModule
                ],
                exports: [
                    MrdFlyOutComponent,
                    MrdFlyOutCloseDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdFlyOutModule, { declarations: [MrdFlyOutComponent,
        MrdFlyOutCloseDirective], imports: [CommonModule,
        MrdButtonModule], exports: [MrdFlyOutComponent,
        MrdFlyOutCloseDirective] }); })();

const _c0$c = ["*"];
class MrdButtonToggleGroupComponent extends BaseObject {
    cdr;
    buttons;
    rounded = false;
    disabled = false;
    multiple = false;
    set selectedIndex(index) {
        if (this.multiple && !Array.isArray(index)) {
            index = [index];
        }
        this._selectedIndex = index;
        if (this.buttons) {
            this.buttons.forEach((b, i) => {
                if (this.multiple) {
                    if (index.includes(i) && !b.toggleSelected) {
                        b.toggleSelected = true;
                        b.updateStyle();
                    }
                    else if (!index.includes(i) && b.toggleSelected) {
                        b.toggleSelected = false;
                        b.updateStyle();
                    }
                }
                else if (i === index && !b.toggleSelected) {
                    b.toggleSelected = true;
                    b.updateStyle();
                }
                else if (i !== index && b.toggleSelected) {
                    b.toggleSelected = false;
                    b.updateStyle();
                }
            });
        }
        this.indexChange.emit(index);
        this.cdr.detectChanges();
    }
    get selectedIndex() {
        return this._selectedIndex;
    }
    _selectedIndex = 0;
    /**
     * Gibt an, ob die ButtonGroup das Theme "primary" hat.
     *
     * Hierdurch wird die Hintergrundfarbe des Buttons auf die primäre Farbe des Themes gesetzt.
     *
     * @memberof MrdButtonComponent
     */
    primary = false;
    /**
     * Gibt an, ob die ButtonGroup das Theme "accent" hat.
     *
     * Hierdurch wird die Hintergrundfarbe des Buttons auf die Akzentfarbe des Themes gesetzt.
     *
     * @memberof MrdButtonComponent
     */
    accent = false;
    /**
     * Gibt an, ob die ButtonGroup das Theme "warn" hat.
     *
     * Hierdurch wird die Hintergrundfarbe des Buttons auf die Warnfarbe des Themes gesetzt.
     *
     * @memberof MrdButtonComponent
     */
    warn = false;
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
    customToggleSelectedColor;
    customToggleSelectedTextColor;
    /**
     * Die Mindesthöhe des Buttons.
     *
     * @type {string | number}
     * @memberof MrdButtonComponent
     */
    minHeight;
    /**
     * Die Schriftgröße des Buttons.
     *
     * @type {string | number}
     * @memberof MrdButtonComponent
     */
    fontSize;
    /**
     * Der Radius der Ecken des Buttons.
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
    indexChange = new EventEmitter();
    /**
     * Die Konfiguration des Mrd-Buttons.
     *
     * @private
     * @type {MrdConfigModel}
     * @memberof MrdButtonComponent
     */
    _config = ConfigUtil.getConfig();
    // public activeIndex: number|number[] = 0;
    constructor(cdr) {
        super();
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        if (this.multiple && !Array.isArray(this.selectedIndex)) {
            this.selectedIndex = [this.selectedIndex];
        }
        this.buttons.forEach((button, index) => {
            button.elementRef.nativeElement.style.width = `calc(${100 / this.buttons.length}% + 28px)`;
            // button.flat = true;
            button.primary = this.primary;
            button.accent = this.accent;
            button.warn = this.warn;
            button.customTextColor ??= this.customTextColor;
            button.customBgColor ??= this.customBgColor;
            button.keepCustomTextColor ||= this.keepCustomTextColor;
            button.keepCustomBgColor ||= this.keepCustomBgColor;
            button.customToggleUnselectedColor ??= this.customToggleUnselectedColor;
            button.customToggleUnselectedTextColor ??= this.customToggleUnselectedTextColor;
            button.customToggleSelectedTextColor ??= this.customToggleSelectedTextColor;
            button.minHeight ??= this.minHeight;
            button.fontSize ??= this.fontSize;
            button.borderRadius = this.borderRadius ?? this.rounded ? '50px' : '4px';
            button.toggleSelected = this.multiple ? this.selectedIndex.includes(index) : this.selectedIndex === index;
            button.updateStyle();
            this.watch(button.click.asObservable(), new SubscriptionHandler((event) => {
                event.stopPropagation();
                event.preventDefault();
                if (this.multiple) {
                    this.selectedIndex = this.selectedIndex.includes(index) ? this.selectedIndex.filter(i => i !== index) : [...this.selectedIndex, index];
                }
                else {
                    this.selectedIndex = index;
                }
                // this.activeIndex = index;
                // button.toggleSelected = this.multiple ? !button.toggleSelected : true;
                // if (!this.multiple) {
                //   this.buttons.forEach((b, i) => {
                //     if (i !== index) {
                //       b.toggleSelected = false;
                //       b.updateStyle();
                //     }
                //   });
                // }
                // button.updateStyle();
                this.indexChange.emit(this.selectedIndex);
                this.cdr.detectChanges();
            }));
        });
        this.cdr.detectChanges();
    }
    /** @nocollapse */ static ɵfac = function MrdButtonToggleGroupComponent_Factory(t) { return new (t || MrdButtonToggleGroupComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdButtonToggleGroupComponent, selectors: [["mrd-button-toggle-group"]], contentQueries: function MrdButtonToggleGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, MrdButtonComponent, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.buttons = _t);
        } }, inputs: { rounded: ["rounded", "rounded", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], multiple: ["multiple", "multiple", booleanAttribute], selectedIndex: ["selectedIndex", "selectedIndex", numberAttribute], primary: ["primary", "primary", booleanAttribute], accent: ["accent", "accent", booleanAttribute], warn: ["warn", "warn", booleanAttribute], customTextColor: ["color", "customTextColor", colorThemeAttribute], customBgColor: ["backgroundColor", "customBgColor", colorAttribute], keepCustomTextColor: ["keepCustomTextColor", "keepCustomTextColor", booleanAttribute], keepCustomBgColor: ["keepCustomBgColor", "keepCustomBgColor", booleanAttribute], customToggleUnselectedColor: ["unselectedBgColor", "customToggleUnselectedColor", colorAttribute], customToggleUnselectedTextColor: ["unselectedTextColor", "customToggleUnselectedTextColor", colorAttribute], customToggleSelectedColor: ["selectedBgColor", "customToggleSelectedColor", colorAttribute], customToggleSelectedTextColor: ["selectedTextColor", "customToggleSelectedTextColor", colorAttribute], minHeight: ["minHeight", "minHeight", sizeAttribute], fontSize: ["fontSize", "fontSize", sizeAttribute], borderRadius: ["borderRadius", "borderRadius", sizeAttribute] }, outputs: { indexChange: "indexChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$c, decls: 2, vars: 0, consts: [[1, "flex", "flex-row", "justify-center"]], template: function MrdButtonToggleGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } }, styles: ["[_nghost-%COMP%]{width:calc(100% - 48px);margin:8px 24px}[_nghost-%COMP%]     mrd-button[toggle-button]:first-of-type{margin:0 -16px 0 -32px!important}[_nghost-%COMP%]     mrd-button[toggle-button]:last-of-type{margin:0 -32px 0 -16px!important}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdButtonToggleGroupComponent, [{
        type: Component,
        args: [{ selector: 'mrd-button-toggle-group', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"flex flex-row justify-center\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", styles: [":host{width:calc(100% - 48px);margin:8px 24px}:host ::ng-deep mrd-button[toggle-button]:first-of-type{margin:0 -16px 0 -32px!important}:host ::ng-deep mrd-button[toggle-button]:last-of-type{margin:0 -32px 0 -16px!important}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { buttons: [{
            type: ContentChildren,
            args: [MrdButtonComponent]
        }], rounded: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], disabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], multiple: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], selectedIndex: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], primary: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], accent: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], warn: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
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
            args: [{ alias: 'unselectedBgColor', transform: colorAttribute }]
        }], customToggleUnselectedTextColor: [{
            type: Input,
            args: [{ alias: 'unselectedTextColor', transform: colorAttribute }]
        }], customToggleSelectedColor: [{
            type: Input,
            args: [{ alias: 'selectedBgColor', transform: colorAttribute }]
        }], customToggleSelectedTextColor: [{
            type: Input,
            args: [{ alias: 'selectedTextColor', transform: colorAttribute }]
        }], minHeight: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], fontSize: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], borderRadius: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], indexChange: [{
            type: Output
        }] }); })();

class MrdButtonToggleModule {
    /** @nocollapse */ static ɵfac = function MrdButtonToggleModule_Factory(t) { return new (t || MrdButtonToggleModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdButtonToggleModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
            MrdButtonModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdButtonToggleModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MrdButtonToggleGroupComponent,
                ],
                imports: [
                    CommonModule,
                    MrdButtonModule
                ],
                exports: [
                    MrdButtonToggleGroupComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdButtonToggleModule, { declarations: [MrdButtonToggleGroupComponent], imports: [CommonModule,
        MrdButtonModule], exports: [MrdButtonToggleGroupComponent] }); })();

const _c0$b = ["checkboxlabel"];
function MrdCheckboxComponent_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 8);
    i0.ɵɵelement(2, "g", 9)(3, "g", 10);
    i0.ɵɵelementStart(4, "g", 11)(5, "title");
    i0.ɵɵtext(6, "check");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "path", 12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} }
function MrdCheckboxComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 6);
    i0.ɵɵtemplate(1, MrdCheckboxComponent_span_1_ng_container_1_Template, 8, 0, "ng-container", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.checked);
} }
function MrdCheckboxComponent_div_2_ng_content_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1, ["*ngIf", "checked"]);
} }
function MrdCheckboxComponent_div_2_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 2, ["*ngIf", "!checked"]);
} }
const _c1$8 = function (a0) { return { "isHover": a0 }; };
function MrdCheckboxComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, MrdCheckboxComponent_div_2_ng_content_1_Template, 1, 0, "ng-content", 7);
    i0.ɵɵtemplate(2, MrdCheckboxComponent_div_2_ng_content_2_Template, 1, 0, "ng-content", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c1$8, !ctx_r1.customHoverIcons));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.checked);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.checked);
} }
function MrdCheckboxComponent_div_3_ng_content_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 3, ["*ngIf", "checked"]);
} }
function MrdCheckboxComponent_div_3_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 4, ["*ngIf", "!checked"]);
} }
function MrdCheckboxComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtemplate(1, MrdCheckboxComponent_div_3_ng_content_1_Template, 1, 0, "ng-content", 7);
    i0.ɵɵtemplate(2, MrdCheckboxComponent_div_3_ng_content_2_Template, 1, 0, "ng-content", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.checked);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.checked);
} }
const _c2$5 = ["*", [["", "icon-checked", ""]], [["", "icon-unchecked", ""]], [["", "icon-checked-hover", ""]], [["", "icon-unchecked-hover", ""]]];
const _c3$5 = function (a0) { return { "mrd-checkbox-disabled": a0 }; };
const _c4 = ["*", "[icon-checked]", "[icon-unchecked]", "[icon-checked-hover]", "[icon-unchecked-hover]"];
class MrdCheckboxComponent {
    cdr;
    label;
    formControl;
    // @Input({transform: booleanAttribute}) public fill: boolean = false;
    // @Input({transform: booleanAttribute}) public outline: boolean = false;
    rounded = false;
    // @Input({transform: booleanAttribute}) public primary: boolean = false;
    // @Input({transform: booleanAttribute}) public accent: boolean = false;
    // @Input({transform: booleanAttribute}) public warn: boolean = false;
    color = '#000000';
    colorHover = '#000000';
    colorChecked = '#000000';
    colorCheckedHover = '#000000';
    bgColor = 'transparent';
    bgColorHover = 'transparent';
    bgColorChecked = 'transparent';
    bgColorCheckedHover = 'transparent';
    border = 'none';
    borderHover = 'none';
    borderChecked = 'none';
    borderCheckedHover = 'none';
    checked = false;
    disabled = false;
    customIcons = false;
    customHoverIcons = false;
    checkboxSize = '16px';
    checkboxHeight;
    checkboxWidth;
    singleLine = false;
    fitContent = false;
    ellipsis = false;
    tooltip = false;
    tooltipIfTruncated = false;
    set tooltipText(value) {
        if (Util.isDefined(value)) {
            this.customTooltipText = true;
            this._tooltipText = value;
        }
        else if (Util.isDefined(this.label)) {
            this._tooltipText = this.label.nativeElement.innerText;
        }
    }
    get tooltipText() {
        return this._tooltipText;
    }
    _tooltipText;
    customTooltipText = false;
    tooltipPosition = 'bottom';
    tooltipDisabled = false;
    checkedChange = new EventEmitter();
    config = ConfigUtil.getConfig();
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        if (Util.isDefined(this.formControl) && Util.isDefined(this.formControl.value)) {
            this.checked = !!this.formControl.value;
        }
        if (this.tooltipIfTruncated) {
            this.tooltip = true;
        }
        if (this.tooltip && !Util.isDefined(this.tooltipText)) {
            this._tooltipText = this.label.nativeElement.innerText;
        }
        if (!Util.isDefined(this.checkboxHeight)) {
            this.checkboxHeight = this.checkboxSize;
        }
        if (!Util.isDefined(this.checkboxWidth)) {
            this.checkboxWidth = this.checkboxSize;
        }
        this.cdr.detectChanges();
        // ['checkbox', 'fill', 'selected', 'primary', 'text'];
        // ['checkbox', 'selected', 'primary', 'text'];
        // ['baseColor', 'primary'];
        // if (this.primary) {
        //   this.color = _.isObject(this.config.baseColors.primary) ? (this.config.baseColors.primary as MrdBaseColorTheme).text : this.config.baseColors.primary as string;
        // } else if (this.accent) {
        //   this.color = this.config.accentColor;
        // } else if (this.warn) {
        //   this.color = this.config.warnColor;
        // }
    }
    ngAfterViewChecked() {
        if (this.tooltip && Util.isDefined(this.label) && !this.customTooltipText && (!Util.isDefined(this.tooltipText) || this.tooltipText !== this.label.nativeElement.innerText)) {
            this._tooltipText = this.label.nativeElement.innerText;
        }
    }
    // private initBaseStyle(): void {
    // }
    toggle() {
        if (this.disabled || (Util.isDefined(this.formControl) && this.formControl.disabled)) {
            return;
        }
        this.checked = !this.checked;
        if (Util.isDefined(this.formControl)) {
            this.formControl.setValue(this.checked);
        }
        this.checkedChange.emit(this.checked);
        this.cdr.detectChanges();
    }
    /** @nocollapse */ static ɵfac = function MrdCheckboxComponent_Factory(t) { return new (t || MrdCheckboxComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdCheckboxComponent, selectors: [["mrd-checkbox"]], viewQuery: function MrdCheckboxComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$b, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.label = _t.first);
        } }, hostVars: 2, hostBindings: function MrdCheckboxComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("max-width", ctx.fitContent ? "fit-content" : "100%");
        } }, inputs: { formControl: "formControl", rounded: ["rounded", "rounded", booleanAttribute], color: ["color", "color", colorAttribute], colorHover: ["colorHover", "colorHover", colorAttribute], colorChecked: ["colorChecked", "colorChecked", colorAttribute], colorCheckedHover: ["colorCheckedHover", "colorCheckedHover", colorAttribute], bgColor: ["bgColor", "bgColor", colorAttribute], bgColorHover: ["bgColorHover", "bgColorHover", colorAttribute], bgColorChecked: ["bgColorChecked", "bgColorChecked", colorAttribute], bgColorCheckedHover: ["bgColorCheckedHover", "bgColorCheckedHover", colorAttribute], border: "border", borderHover: "borderHover", borderChecked: "borderChecked", borderCheckedHover: "borderCheckedHover", checked: ["checked", "checked", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], customIcons: ["customIcons", "customIcons", booleanAttribute], customHoverIcons: ["customHoverIcons", "customHoverIcons", booleanAttribute], checkboxSize: ["checkboxSize", "checkboxSize", sizeAttribute], checkboxHeight: ["checkboxHeight", "checkboxHeight", sizeAttribute], checkboxWidth: ["checkboxWidth", "checkboxWidth", sizeAttribute], singleLine: ["single-line", "singleLine", booleanAttribute], fitContent: ["fit-content", "fitContent", booleanAttribute], ellipsis: ["ellipsis", "ellipsis", booleanAttribute], tooltip: ["tooltip", "tooltip", booleanAttribute], tooltipIfTruncated: ["tooltipIfTruncated", "tooltipIfTruncated", booleanAttribute], tooltipText: "tooltipText", tooltipPosition: "tooltipPosition", tooltipDisabled: ["tooltipDisabled", "tooltipDisabled", booleanAttribute] }, outputs: { checkedChange: "checkedChange" }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c4, decls: 7, vars: 46, consts: [[1, "mrd-checkbox-container", 3, "ngClass", "mrdToolTip", "showToolTip", "position", "showOnTruncatedElement", "click"], ["class", "mrd-checkbox-box", 4, "ngIf"], ["class", "mrd-checkbox-custom", 3, "ngClass", 4, "ngIf"], ["class", "mrd-checkbox-custom-hover", 4, "ngIf"], [1, "mrd-checkbox-label"], ["checkboxlabel", ""], [1, "mrd-checkbox-box"], [4, "ngIf"], ["fill", "#ffffff", "width", "16px", "height", "16px", "viewBox", "-4 0 32 32", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "stroke", "#000000", "stroke-width", "0.00032"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "SVGRepo_iconCarrier"], ["d", "M19.375 5.063l-9.5 13.625-6.563-4.875-3.313 4.594 11.188 8.531 12.813-18.375z"], [1, "mrd-checkbox-custom", 3, "ngClass"], [1, "mrd-checkbox-custom-hover"]], template: function MrdCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c2$5);
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function MrdCheckboxComponent_Template_div_click_0_listener() { return ctx.toggle(); });
            i0.ɵɵtemplate(1, MrdCheckboxComponent_span_1_Template, 2, 1, "span", 1);
            i0.ɵɵtemplate(2, MrdCheckboxComponent_div_2_Template, 3, 5, "div", 2);
            i0.ɵɵtemplate(3, MrdCheckboxComponent_div_3_Template, 3, 2, "div", 3);
            i0.ɵɵelementStart(4, "span", 4, 5);
            i0.ɵɵprojection(6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const _r3 = i0.ɵɵreference(5);
            i0.ɵɵstyleProp("--box-height", ctx.checkboxHeight)("--box-width", ctx.checkboxWidth)("--bg-color", ctx.bgColor)("--bg-color-hover", ctx.bgColorHover)("--bg-color-checked", ctx.bgColorChecked)("--bg-color-checked-hover", ctx.bgColorCheckedHover)("--color", ctx.color)("--color-hover", ctx.colorHover)("--color-checked", ctx.colorChecked)("--color-checked-hover", ctx.colorCheckedHover)("--border", ctx.border)("--border-hover", ctx.borderHover)("--border-checked", ctx.borderChecked)("--border-checked-hover", ctx.borderCheckedHover);
            i0.ɵɵclassProp("rounded", ctx.rounded)("checked", ctx.checked);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(44, _c3$5, (ctx.formControl == null ? null : ctx.formControl.disabled) || ctx.disabled))("mrdToolTip", ctx.tooltipText)("showToolTip", ctx.tooltip && !ctx.tooltipDisabled)("position", ctx.tooltipPosition)("showOnTruncatedElement", ctx.tooltipIfTruncated ? _r3 : undefined);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.customIcons);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.customIcons);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.customHoverIcons);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("singleLine", ctx.singleLine)("ellipsis", ctx.ellipsis);
        } }, dependencies: [i1$1.NgClass, i1$1.NgIf, ToolTipRendererDirective], styles: ["[_nghost-%COMP%]{display:block;width:-moz-fit-content;width:fit-content}.mrd-checkbox-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;cursor:pointer;color:var(--color);background-color:var(--bg-color);border:var(--border);padding:4px 8px 4px 4px;line-height:1.25em}.mrd-checkbox-container.rounded[_ngcontent-%COMP%]{border-radius:999999px}.mrd-checkbox-container[_ngcontent-%COMP%]     [icon-checked], .mrd-checkbox-container[_ngcontent-%COMP%]     [icon-unchecked], .mrd-checkbox-container[_ngcontent-%COMP%]     [icon-checked-hover], .mrd-checkbox-container[_ngcontent-%COMP%]     [icon-unchecked-hover]{display:block;max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-height);min-height:var(--box-width);margin-right:6px}.mrd-checkbox-container.checked[_ngcontent-%COMP%]{color:var(--color-checked);background-color:var(--bg-color-checked);border:var(--border-checked)}.mrd-checkbox-container.checked[_ngcontent-%COMP%]   .mrd-checkbox-box[_ngcontent-%COMP%]{background-color:#3faa49;border:none}.mrd-checkbox-container[_ngcontent-%COMP%]   .mrd-checkbox-box[_ngcontent-%COMP%]{max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-width);min-height:var(--box-height);display:inline-block;border:2px solid rgba(0,0,0,.54);border-radius:2px;text-align:center;margin-right:6px}.mrd-checkbox-container[_ngcontent-%COMP%]   .mrd-checkbox-label[_ngcontent-%COMP%]{overflow:hidden}.mrd-checkbox-container[_ngcontent-%COMP%]   .mrd-checkbox-label.singleLine[_ngcontent-%COMP%]{white-space:nowrap}.mrd-checkbox-container[_ngcontent-%COMP%]   .mrd-checkbox-label.ellipsis[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]{cursor:inherit}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]   .mrd-checkbox-box[_ngcontent-%COMP%]{border-color:#afa6a6}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]   .mrd-checkbox-box.checked[_ngcontent-%COMP%]{background-color:#afa6a6af}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]   .mrd-checkbox-label[_ngcontent-%COMP%]{color:#afa6a6}.mrd-checkbox-container[_ngcontent-%COMP%]:hover:not(.mrd-checkbox-disabled){color:var(--color-hover);background-color:var(--bg-color-hover);border:var(--border-hover)}.mrd-checkbox-container[_ngcontent-%COMP%]:hover:not(.mrd-checkbox-disabled).checked{color:var(--color-checked-hover);background-color:var(--bg-color-checked-hover);border:var(--border-checked-hover)}.mrd-checkbox-container[_ngcontent-%COMP%]:hover:not(.mrd-checkbox-disabled)   .mrd-checkbox-custom[_ngcontent-%COMP%]:not(.isHover){display:none}.mrd-checkbox-container[_ngcontent-%COMP%]:hover:not(.mrd-checkbox-disabled)   .mrd-checkbox-custom-hover[_ngcontent-%COMP%]{display:flex}.mrd-checkbox-custom[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.mrd-checkbox-custom-hover[_ngcontent-%COMP%]{display:none;flex-direction:column;justify-content:center;align-items:center}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdCheckboxComponent, [{
        type: Component,
        args: [{ selector: 'mrd-checkbox', host: {
                    "[style.max-width]": "fitContent ? 'fit-content' : '100%'",
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-checkbox-container\" [ngClass]=\"{'mrd-checkbox-disabled': formControl?.disabled || disabled}\" (click)=\"toggle()\"\r\n  [mrdToolTip]=\"tooltipText\" [showToolTip]=\"tooltip && !tooltipDisabled\" [position]=\"tooltipPosition\" [showOnTruncatedElement]=\"tooltipIfTruncated ? checkboxlabel : undefined\"\r\n  [style.--box-height]=\"checkboxHeight\" \r\n  [style.--box-width]=\"checkboxWidth\"\r\n  [style.--bg-color]=\"bgColor\"\r\n  [style.--bg-color-hover]=\"bgColorHover\"\r\n  [style.--bg-color-checked]=\"bgColorChecked\"\r\n  [style.--bg-color-checked-hover]=\"bgColorCheckedHover\"\r\n  [style.--color]=\"color\"\r\n  [style.--color-hover]=\"colorHover\"\r\n  [style.--color-checked]=\"colorChecked\"\r\n  [style.--color-checked-hover]=\"colorCheckedHover\"\r\n  [style.--border]=\"border\"\r\n  [style.--border-hover]=\"borderHover\"\r\n  [style.--border-checked]=\"borderChecked\"\r\n  [style.--border-checked-hover]=\"borderCheckedHover\"\r\n  [class.rounded]=\"rounded\"\r\n  [class.checked]=\"checked\"\r\n  >\r\n  <span class=\"mrd-checkbox-box\" *ngIf=\"!customIcons\">\r\n    <ng-container *ngIf=\"checked\">\r\n      <svg fill=\"#ffffff\" width=\"16px\" height=\"16px\" viewBox=\"-4 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"#000000\" stroke-width=\"0.00032\">\r\n        <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\r\n        <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g>\r\n        <g id=\"SVGRepo_iconCarrier\"> <title>check</title> <path d=\"M19.375 5.063l-9.5 13.625-6.563-4.875-3.313 4.594 11.188 8.531 12.813-18.375z\"></path></g>\r\n      </svg>\r\n    </ng-container>\r\n  </span>\r\n  <div class=\"mrd-checkbox-custom\" [ngClass]=\"{'isHover': !customHoverIcons}\" *ngIf=\"customIcons\">\r\n    <ng-content *ngIf=\"checked\" select=\"[icon-checked]\"></ng-content>\r\n    <ng-content *ngIf=\"!checked\" select=\"[icon-unchecked]\"></ng-content>\r\n  </div>\r\n  <div class=\"mrd-checkbox-custom-hover\" *ngIf=\"customHoverIcons\">\r\n    <ng-content *ngIf=\"checked\" select=\"[icon-checked-hover]\"></ng-content>\r\n    <ng-content *ngIf=\"!checked\" select=\"[icon-unchecked-hover]\"></ng-content>\r\n  </div>\r\n  \r\n  \r\n  <span #checkboxlabel class=\"mrd-checkbox-label\"\r\n    [class.singleLine]=\"singleLine\"\r\n    [class.ellipsis]=\"ellipsis\"\r\n  ><ng-content></ng-content></span>\r\n</div>\r\n", styles: [":host{display:block;width:-moz-fit-content;width:fit-content}.mrd-checkbox-container{display:flex;flex-direction:row;align-items:center;cursor:pointer;color:var(--color);background-color:var(--bg-color);border:var(--border);padding:4px 8px 4px 4px;line-height:1.25em}.mrd-checkbox-container.rounded{border-radius:999999px}.mrd-checkbox-container ::ng-deep [icon-checked],.mrd-checkbox-container ::ng-deep [icon-unchecked],.mrd-checkbox-container ::ng-deep [icon-checked-hover],.mrd-checkbox-container ::ng-deep [icon-unchecked-hover]{display:block;max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-height);min-height:var(--box-width);margin-right:6px}.mrd-checkbox-container.checked{color:var(--color-checked);background-color:var(--bg-color-checked);border:var(--border-checked)}.mrd-checkbox-container.checked .mrd-checkbox-box{background-color:#3faa49;border:none}.mrd-checkbox-container .mrd-checkbox-box{max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-width);min-height:var(--box-height);display:inline-block;border:2px solid rgba(0,0,0,.54);border-radius:2px;text-align:center;margin-right:6px}.mrd-checkbox-container .mrd-checkbox-label{overflow:hidden}.mrd-checkbox-container .mrd-checkbox-label.singleLine{white-space:nowrap}.mrd-checkbox-container .mrd-checkbox-label.ellipsis{white-space:nowrap;text-overflow:ellipsis}.mrd-checkbox-container.mrd-checkbox-disabled{cursor:inherit}.mrd-checkbox-container.mrd-checkbox-disabled .mrd-checkbox-box{border-color:#afa6a6}.mrd-checkbox-container.mrd-checkbox-disabled .mrd-checkbox-box.checked{background-color:#afa6a6af}.mrd-checkbox-container.mrd-checkbox-disabled .mrd-checkbox-label{color:#afa6a6}.mrd-checkbox-container:hover:not(.mrd-checkbox-disabled){color:var(--color-hover);background-color:var(--bg-color-hover);border:var(--border-hover)}.mrd-checkbox-container:hover:not(.mrd-checkbox-disabled).checked{color:var(--color-checked-hover);background-color:var(--bg-color-checked-hover);border:var(--border-checked-hover)}.mrd-checkbox-container:hover:not(.mrd-checkbox-disabled) .mrd-checkbox-custom:not(.isHover){display:none}.mrd-checkbox-container:hover:not(.mrd-checkbox-disabled) .mrd-checkbox-custom-hover{display:flex}.mrd-checkbox-custom{display:flex;flex-direction:column;justify-content:center;align-items:center}.mrd-checkbox-custom-hover{display:none;flex-direction:column;justify-content:center;align-items:center}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { label: [{
            type: ViewChild,
            args: ['checkboxlabel']
        }], formControl: [{
            type: Input
        }], rounded: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], color: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], colorHover: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], colorChecked: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], colorCheckedHover: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], bgColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], bgColorHover: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], bgColorChecked: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], bgColorCheckedHover: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], border: [{
            type: Input
        }], borderHover: [{
            type: Input
        }], borderChecked: [{
            type: Input
        }], borderCheckedHover: [{
            type: Input
        }], checked: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], disabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], customIcons: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], customHoverIcons: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], checkboxSize: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], checkboxHeight: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], checkboxWidth: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], singleLine: [{
            type: Input,
            args: [{ alias: 'single-line', transform: booleanAttribute }]
        }], fitContent: [{
            type: Input,
            args: [{ alias: 'fit-content', transform: booleanAttribute }]
        }], ellipsis: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], tooltip: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], tooltipIfTruncated: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], tooltipText: [{
            type: Input
        }], tooltipPosition: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], checkedChange: [{
            type: Output
        }] }); })();

/**
 * Dieses Modul stellt den Mrd-Checkbox zur Verfügung.
 *
 * @export MrdCheckboxComponent
 * @class MrdCheckboxModule
 */
class MrdCheckboxModule {
    /** @nocollapse */ static ɵfac = function MrdCheckboxModule_Factory(t) { return new (t || MrdCheckboxModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdCheckboxModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
            MrdTooltipModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdCheckboxModule, [{
        type: NgModule,
        args: [{
                declarations: [MrdCheckboxComponent],
                imports: [
                    CommonModule,
                    MrdTooltipModule
                ],
                exports: [MrdCheckboxComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdCheckboxModule, { declarations: [MrdCheckboxComponent], imports: [CommonModule,
        MrdTooltipModule], exports: [MrdCheckboxComponent] }); })();

const _c0$a = ["chipText"];
function MrdChipComponent_mrd_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mrd-icon", 7);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("svgIcon", ctx_r0.prefixIcon);
} }
function MrdChipComponent_mrd_icon_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mrd-icon", 7);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("svgIcon", ctx_r2.suffixIcon);
} }
const _c1$7 = ["*"];
class MrdChipComponent {
    cdr;
    chipText;
    prefixIcon;
    suffixIcon;
    close = new EventEmitter();
    chipTextValue;
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        if (this.chipText) {
            this.chipTextValue = this.chipText.nativeElement.innerText;
        }
        this.cdr.detectChanges();
    }
    closeClicked() {
        this.close.emit();
    }
    /** @nocollapse */ static ɵfac = function MrdChipComponent_Factory(t) { return new (t || MrdChipComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdChipComponent, selectors: [["mrd-chip"]], viewQuery: function MrdChipComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$a, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.chipText = _t.first);
        } }, inputs: { prefixIcon: "prefixIcon", suffixIcon: "suffixIcon" }, outputs: { close: "close" }, ngContentSelectors: _c1$7, decls: 9, vars: 3, consts: [[1, "mrd-chip-container"], [1, "mrd-chip-content"], [3, "svgIcon", 4, "ngIf"], ["showIfTruncated", "", 1, "mrd-chip-text", 3, "mrdToolTip"], ["chipText", ""], ["icon-button", "", "fullIcon", "", "diameter", "1em", 3, "click"], ["svgIcon", "mrd_close_grey"], [3, "svgIcon"]], template: function MrdChipComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, MrdChipComponent_mrd_icon_2_Template, 1, 1, "mrd-icon", 2);
            i0.ɵɵelementStart(3, "div", 3, 4);
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, MrdChipComponent_mrd_icon_6_Template, 1, 1, "mrd-icon", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mrd-button", 5);
            i0.ɵɵlistener("click", function MrdChipComponent_Template_mrd_button_click_7_listener() { return ctx.closeClicked(); });
            i0.ɵɵelement(8, "mrd-icon", 6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.prefixIcon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("mrdToolTip", ctx.chipTextValue);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.suffixIcon);
        } }, dependencies: [i1$1.NgIf, MrdIconComponent, MrdButtonComponent, ToolTipRendererDirective], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:-moz-fit-content;width:fit-content;max-width:100%}.mrd-chip-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.125em .7em;gap:1em;border-radius:2em;background-color:#ced9dd;max-width:100%}.mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;width:calc(100% - 2em);gap:.5em;line-height:1.5em}.mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-content[_ngcontent-%COMP%]   .mrd-chip-text[_ngcontent-%COMP%]{width:calc(100% - 1em);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-content[_ngcontent-%COMP%]   mrd-icon[_ngcontent-%COMP%]{display:block;width:1em;height:1em}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdChipComponent, [{
        type: Component,
        args: [{ selector: 'mrd-chip', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-chip-container\">\r\n  <div class=\"mrd-chip-content\">\r\n    <mrd-icon *ngIf=\"prefixIcon\" [svgIcon]=\"prefixIcon\"></mrd-icon>\r\n    <div #chipText class=\"mrd-chip-text\" [mrdToolTip]=\"chipTextValue\" showIfTruncated>\r\n      <ng-content></ng-content>\r\n    </div>\r\n    <mrd-icon *ngIf=\"suffixIcon\" [svgIcon]=\"suffixIcon\"></mrd-icon>\r\n  </div>\r\n\r\n  <mrd-button icon-button fullIcon diameter=\"1em\" (click)=\"closeClicked()\">\r\n    <mrd-icon svgIcon=\"mrd_close_grey\"></mrd-icon>\r\n  </mrd-button>\r\n</div>\r\n", styles: [":host{display:flex;flex-direction:column;justify-content:center;align-items:center;width:-moz-fit-content;width:fit-content;max-width:100%}.mrd-chip-container{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.125em .7em;gap:1em;border-radius:2em;background-color:#ced9dd;max-width:100%}.mrd-chip-container .mrd-chip-content{display:flex;flex-direction:row;align-items:center;width:calc(100% - 2em);gap:.5em;line-height:1.5em}.mrd-chip-container .mrd-chip-content .mrd-chip-text{width:calc(100% - 1em);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-chip-container .mrd-chip-content mrd-icon{display:block;width:1em;height:1em}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { chipText: [{
            type: ViewChild,
            args: ['chipText']
        }], prefixIcon: [{
            type: Input,
            args: ['prefixIcon']
        }], suffixIcon: [{
            type: Input,
            args: ['suffixIcon']
        }], close: [{
            type: Output
        }] }); })();

/**
 * Dieses Modul stellt den Mrd-Chip zur Verfügung.
 *
 * @export MrdChipComponent
 * @class MrdChipModule
 */
class MrdChipModule {
    /** @nocollapse */ static ɵfac = function MrdChipModule_Factory(t) { return new (t || MrdChipModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdChipModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
            MrdIconModule,
            MrdButtonModule,
            MrdTooltipModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdChipModule, [{
        type: NgModule,
        args: [{
                declarations: [MrdChipComponent],
                imports: [
                    CommonModule,
                    MrdIconModule,
                    MrdButtonModule,
                    MrdTooltipModule
                ],
                exports: [MrdChipComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdChipModule, { declarations: [MrdChipComponent], imports: [CommonModule,
        MrdIconModule,
        MrdButtonModule,
        MrdTooltipModule], exports: [MrdChipComponent] }); })();

const _c0$9 = ["baseInput"];
const _c1$6 = ["textArea"];
const _c2$4 = ["dateInput"];
function MrdInputComponent_input_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 3, 4);
    i0.ɵɵlistener("click", function MrdInputComponent_input_0_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.inputClicked($event)); })("focus", function MrdInputComponent_input_0_Template_input_focus_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.focus($event)); })("blur", function MrdInputComponent_input_0_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.blur($event)); })("input", function MrdInputComponent_input_0_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.input($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("pointer-events", ctx_r0.readonly ? "none" : "auto")("text-align", ctx_r0.centered ? "center" : "start");
    i0.ɵɵproperty("value", ctx_r0.value)("disabled", (ctx_r0.formControl == null ? null : ctx_r0.formControl.disabled) || ctx_r0.disabled)("placeholder", ctx_r0.placeholder);
} }
function MrdInputComponent_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 5, 6);
    i0.ɵɵlistener("input", function MrdInputComponent_input_1_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.input($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r1.customDateToggle ? "0" : "20px")("padding", "0");
} }
const _c3$4 = function (a0) { return { "line-height": a0 }; };
function MrdInputComponent_textarea_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "textarea", 7, 8);
    i0.ɵɵlistener("click", function MrdInputComponent_textarea_2_Template_textarea_click_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.inputClicked($event)); })("focus", function MrdInputComponent_textarea_2_Template_textarea_focus_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.focus($event)); })("blur", function MrdInputComponent_textarea_2_Template_textarea_blur_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.blur($event)); })("input", function MrdInputComponent_textarea_2_Template_textarea_input_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.input($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("pointer-events", ctx_r2.readonly ? "none" : "auto");
    i0.ɵɵproperty("value", ctx_r2.value)("disabled", (ctx_r2.formControl == null ? null : ctx_r2.formControl.disabled) || ctx_r2.disabled)("placeholder", ctx_r2.placeholder)("ngStyle", i0.ɵɵpureFunction1(6, _c3$4, ctx_r2.lineHeight + "px"));
} }
class MrdInputComponent extends BaseObject {
    cdr;
    static DEFAULT_MAX_LENGTH = 512;
    static DEFAULT_MIN_ROWS = 1;
    static DEFAULT_MAX_ROWS = 2;
    static DEFAULT_LINE_HEIGHT = 24;
    static DATE_REGEX = /(\d{2}).(\d{2}).(\d{4})/;
    static DATE_REGEX_INPUT = /(\d{4})-(\d{2})-(\d{2})/;
    baseInputElement;
    textAreaElement;
    dateInputElement;
    formControl;
    placeholder = ' ';
    value = '';
    maxLength;
    minRows = MrdInputComponent.DEFAULT_MIN_ROWS;
    maxRows = MrdInputComponent.DEFAULT_MAX_ROWS;
    lineHeight = MrdInputComponent.DEFAULT_LINE_HEIGHT;
    disabled = false;
    readonly = false;
    required = false;
    textarea = false;
    date = false;
    customDateToggle = false;
    centered = false;
    datePickerToggle;
    touched = new EventEmitter();
    focused = new EventEmitter();
    blurred = new EventEmitter();
    valueChange = new EventEmitter();
    constructor(cdr) {
        super();
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        if (this.maxLength !== undefined && Number.isNaN(this.maxLength)) {
            this.maxLength = MrdInputComponent.DEFAULT_MAX_LENGTH;
        }
        if (this.minRows !== undefined && Number.isNaN(this.minRows)) {
            this.minRows = MrdInputComponent.DEFAULT_MIN_ROWS;
        }
        if (this.maxRows !== undefined && Number.isNaN(this.maxRows)) {
            this.maxRows = MrdInputComponent.DEFAULT_MAX_ROWS;
        }
        if (this.lineHeight !== undefined && Number.isNaN(this.lineHeight)) {
            this.lineHeight = MrdInputComponent.DEFAULT_LINE_HEIGHT;
        }
        if (this.textarea && Util.isDefined(this.textAreaElement) && Util.isDefined(this.maxLength)) {
            this.textAreaElement.nativeElement.maxLength = this.maxLength;
            this.calculateTextAreaHeight();
        }
        if (this.date && Util.isDefined(this.formControl) && !this.formControl.convertTo) {
            this.formControl.convertTo = (value) => {
                return Util.isDefined(value) && moment.isMoment(value) ? value.format('DD.MM.YYYY') : value;
            };
        }
        if (Util.isDefined(this.formControl) && Util.isDefined(this.formControl.value)) {
            this.value = this.formControl.value;
            this.cdr.detectChanges();
        }
        if (Util.isDefined(this.formControl)) {
            this.watch(this.formControl.valueChanges, new SubscriptionHandler(() => this.formControlChanged()));
        }
    }
    formControlChanged() {
        if (this.textarea) {
            if (Util.isDefined(this.textAreaElement)) {
                this.calculateTextAreaHeight();
            }
        }
        if (Util.isDefined(this.formControl.control.value)) {
            this.value = this.date ? this.formControl.value : this.formControl.control.value;
        }
        else {
            this.value = null;
        }
        this.valueChange.emit(this.value);
        this.cdr.detectChanges();
    }
    input(event) {
        let targetValue = event.target.value;
        if (this.textarea) {
            if (Util.isDefined(this.textAreaElement)) {
                this.calculateTextAreaHeight();
            }
        }
        if (Util.isDefined(this.formControl)) {
            let dateMatch = MrdInputComponent.DATE_REGEX.test(targetValue);
            let dateInputMatch = MrdInputComponent.DATE_REGEX_INPUT.test(targetValue);
            this.formControl.setValue(this.date && (dateMatch || dateInputMatch) ? (dateMatch ? moment(targetValue, 'DD.MM.YYYY').utc(true) : moment(targetValue, 'YYYY-MM-DD').utc(true)) : targetValue);
            if (this.date && dateInputMatch) {
                this.baseInputElement.nativeElement.focus();
            }
        }
        else {
            this.value = targetValue;
        }
        this.valueChange.emit(this.value);
        this.cdr.detectChanges();
    }
    calculateTextAreaHeight() {
        this.textAreaElement.nativeElement.style.height = 'auto';
        this.textAreaElement.nativeElement.style.height =
            this.textAreaElement.nativeElement.scrollHeight > (this.maxRows * this.lineHeight) ?
                (this.maxRows * this.lineHeight) + 'px' :
                this.textAreaElement.nativeElement.scrollHeight < (this.minRows * this.lineHeight) ?
                    (this.minRows * this.lineHeight) + 'px' :
                    this.textAreaElement.nativeElement.scrollHeight + 'px';
    }
    inputClicked(event) {
        this.touched.emit();
    }
    focus(event) {
        this.focused.emit();
    }
    blur(event) {
        if (this.formControl && this.date && this.formControl.control.value && this.formControl.control.value !== '') {
            if (!moment.isMoment(this.formControl.control.value)) {
                let momentDate = moment(this.formControl.control.value, 'DD.MM.YYYY').utc(true);
                if (momentDate.isValid()) {
                    this.formControl.setValue(momentDate);
                }
            }
        }
        this.blurred.emit();
    }
    toggleClicked() {
        this.dateInputElement.nativeElement.showPicker();
    }
    /** @nocollapse */ static ɵfac = function MrdInputComponent_Factory(t) { return new (t || MrdInputComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdInputComponent, selectors: [["mrd-input"]], viewQuery: function MrdInputComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$9, 5);
            i0.ɵɵviewQuery(_c1$6, 5);
            i0.ɵɵviewQuery(_c2$4, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.baseInputElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.textAreaElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dateInputElement = _t.first);
        } }, inputs: { formControl: ["mrdFormControl", "formControl"], placeholder: "placeholder", value: "value", maxLength: ["maxLength", "maxLength", numberAttribute], minRows: ["minRows", "minRows", numberAttribute], maxRows: ["maxRows", "maxRows", numberAttribute], lineHeight: ["lineHeight", "lineHeight", numberAttribute], disabled: ["disabled", "disabled", booleanAttribute], readonly: ["readonly", "readonly", booleanAttribute], required: ["required", "required", booleanAttribute], textarea: ["textarea", "textarea", booleanAttribute], date: ["date", "date", booleanAttribute], customDateToggle: ["customDateToggle", "customDateToggle", booleanAttribute], centered: ["centered", "centered", booleanAttribute], datePickerToggle: "datePickerToggle" }, outputs: { touched: "touched", focused: "focused", blurred: "blurred", valueChange: "valueChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 3, consts: [[3, "value", "disabled", "placeholder", "pointer-events", "text-align", "click", "focus", "blur", "input", 4, "ngIf"], ["type", "date", 3, "width", "padding", "input", 4, "ngIf"], ["rows", "1", 3, "value", "disabled", "placeholder", "pointer-events", "ngStyle", "click", "focus", "blur", "input", 4, "ngIf"], [3, "value", "disabled", "placeholder", "click", "focus", "blur", "input"], ["baseInput", ""], ["type", "date", 3, "input"], ["dateInput", ""], ["rows", "1", 3, "value", "disabled", "placeholder", "ngStyle", "click", "focus", "blur", "input"], ["textArea", ""]], template: function MrdInputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, MrdInputComponent_input_0_Template, 2, 7, "input", 0);
            i0.ɵɵtemplate(1, MrdInputComponent_input_1_Template, 2, 4, "input", 1);
            i0.ɵɵtemplate(2, MrdInputComponent_textarea_2_Template, 2, 8, "textarea", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.textarea);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.date);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.textarea);
        } }, dependencies: [i1$1.NgIf, i1$1.NgStyle], styles: ["[_nghost-%COMP%]{width:100%;display:flex;flex-direction:row}input[_ngcontent-%COMP%]{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}input[disabled][_ngcontent-%COMP%]{color:#afa6a6}textarea[_ngcontent-%COMP%]{outline:unset;background-color:transparent;width:100%;padding:0 2px;line-height:1.5em}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdInputComponent, [{
        type: Component,
        args: [{ selector: 'mrd-input', changeDetection: ChangeDetectionStrategy.OnPush, template: "<input #baseInput\r\n  (click)=\"inputClicked($event)\"\r\n  (focus)=\"focus($event)\"\r\n  (blur)=\"blur($event)\"\r\n  [value]=\"value\"\r\n  (input)=\"input($event)\"\r\n  [disabled]=\"formControl?.disabled || disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  [style.pointer-events]=\"readonly ? 'none' : 'auto'\"\r\n  [style.text-align]=\"centered ? 'center' : 'start'\"\r\n  *ngIf=\"!textarea\"\r\n  >\r\n<input #dateInput\r\n  *ngIf=\"date\"\r\n  [style.width]=\"customDateToggle ? '0' : '20px'\"\r\n  [style.padding]=\"'0'\"\r\n  type=\"date\"\r\n  (input)=\"input($event)\"\r\n>\r\n<textarea #textArea\r\n  (click)=\"inputClicked($event)\"\r\n  (focus)=\"focus($event)\"\r\n  (blur)=\"blur($event)\"\r\n  [value]=\"value\"\r\n  (input)=\"input($event)\"\r\n  [disabled]=\"formControl?.disabled || disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  [style.pointer-events]=\"readonly ? 'none' : 'auto'\"\r\n  *ngIf=\"textarea\"\r\n  rows=\"1\"\r\n  [ngStyle]=\"{'line-height': lineHeight + 'px'}\"\r\n></textarea>\r\n", styles: [":host{width:100%;display:flex;flex-direction:row}input{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}input[disabled]{color:#afa6a6}textarea{outline:unset;background-color:transparent;width:100%;padding:0 2px;line-height:1.5em}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { baseInputElement: [{
            type: ViewChild,
            args: ['baseInput']
        }], textAreaElement: [{
            type: ViewChild,
            args: ['textArea']
        }], dateInputElement: [{
            type: ViewChild,
            args: ['dateInput']
        }], formControl: [{
            type: Input,
            args: ['mrdFormControl']
        }], placeholder: [{
            type: Input
        }], value: [{
            type: Input
        }], maxLength: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], minRows: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], maxRows: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], lineHeight: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], disabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], readonly: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], required: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], textarea: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], date: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], customDateToggle: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], centered: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], datePickerToggle: [{
            type: Input
        }], touched: [{
            type: Output
        }], focused: [{
            type: Output
        }], blurred: [{
            type: Output
        }], valueChange: [{
            type: Output
        }] }); })();
class MrdDatePickerToggle {
    elementRef;
    mrdDatePickerToggle;
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        if (this.elementRef.nativeElement.closest('mrd-icon')) {
            this.elementRef.nativeElement.style.cursor = 'pointer';
            this.elementRef.nativeElement.style.width = '20px';
            this.elementRef.nativeElement.style.height = '20px';
        }
    }
    onClick(event) {
        if (Util.isDefined(this.mrdDatePickerToggle)) {
            this.mrdDatePickerToggle.toggleClicked();
        }
    }
    /** @nocollapse */ static ɵfac = function MrdDatePickerToggle_Factory(t) { return new (t || MrdDatePickerToggle)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdDatePickerToggle, selectors: [["", "mrdDatePickerToggle", ""]], hostBindings: function MrdDatePickerToggle_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function MrdDatePickerToggle_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } }, inputs: { mrdDatePickerToggle: "mrdDatePickerToggle" } });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdDatePickerToggle, [{
        type: Directive,
        args: [{
                selector: '[mrdDatePickerToggle]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { mrdDatePickerToggle: [{
            type: Input,
            args: ['mrdDatePickerToggle']
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();

function MrdLabelComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "\u00A0*");
    i0.ɵɵelementContainerEnd();
} }
const _c0$8 = function (a0, a1, a2) { return { "mrd-label-floating": a0, "mrd-label-hidden": a1, "mrd-label-top": a2 }; };
const _c1$5 = ["*"];
class MrdLabelComponent extends BasePushStrategyObject {
    cdr;
    labelTop = false;
    float = 'auto';
    floating = new ObservableValue(false);
    required = new ObservableValue(false);
    constructor(cdr) {
        super();
        this.cdr = cdr;
        this.watch(this.floating.changed, new SubscriptionHandler(() => this.cdr.detectChanges()));
        this.watch(this.required.changed, new SubscriptionHandler(() => this.cdr.detectChanges()));
    }
    /** @nocollapse */ static ɵfac = function MrdLabelComponent_Factory(t) { return new (t || MrdLabelComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdLabelComponent, selectors: [["mrd-label"]], inputs: { labelTop: ["labelTop", "labelTop", booleanAttribute], float: "float" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1$5, decls: 3, vars: 6, consts: [[1, "mrd-label-content", 3, "ngClass"], [4, "ngIf"]], template: function MrdLabelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵtemplate(2, MrdLabelComponent_ng_container_2_Template, 2, 0, "ng-container", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c0$8, ctx.float === "always" || ctx.floating.value, ctx.float === "never" && ctx.floating.value, ctx.labelTop));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.required.value);
        } }, dependencies: [i1$1.NgClass, i1$1.NgIf], styles: [".mrd-label-content[_ngcontent-%COMP%]{position:absolute;top:0;left:2px;transition:top .3s,font-size .3s;color:#afa6a6;pointer-events:none;width:100%;overflow:hidden;text-overflow:ellipsis;height:100%;display:flex;flex-direction:column;justify-content:center}.mrd-label-content.mrd-label-top[_ngcontent-%COMP%]{justify-content:flex-start}.mrd-label-content.mrd-label-floating[_ngcontent-%COMP%]{top:-1.25em;font-size:.75em;justify-content:flex-start}.mrd-label-content.mrd-label-hidden[_ngcontent-%COMP%]{display:none}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdLabelComponent, [{
        type: Component,
        args: [{ selector: 'mrd-label', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-label-content\" [ngClass]=\"{'mrd-label-floating': float === 'always' || floating.value, 'mrd-label-hidden': float === 'never' && floating.value, 'mrd-label-top': labelTop}\">\r\n  <ng-content></ng-content><ng-container *ngIf=\"required.value\">&nbsp;*</ng-container>\r\n</div>\r\n", styles: [".mrd-label-content{position:absolute;top:0;left:2px;transition:top .3s,font-size .3s;color:#afa6a6;pointer-events:none;width:100%;overflow:hidden;text-overflow:ellipsis;height:100%;display:flex;flex-direction:column;justify-content:center}.mrd-label-content.mrd-label-top{justify-content:flex-start}.mrd-label-content.mrd-label-floating{top:-1.25em;font-size:.75em;justify-content:flex-start}.mrd-label-content.mrd-label-hidden{display:none}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { labelTop: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], float: [{
            type: Input
        }] }); })();

const _c0$7 = function (a0) { return { "mrd-error-ellipsis": a0 }; };
const _c1$4 = function (a0) { return { "-webkit-line-clamp": a0 }; };
class MrdErrorComponent {
    cdr;
    ellipsis;
    _error = '';
    set error(value) {
        this._error = value;
        this.cdr.detectChanges();
    }
    get error() {
        return this._error;
    }
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        if (this.ellipsis !== undefined && Number.isNaN(this.ellipsis)) {
            this.ellipsis = 1;
        }
        this.cdr.detectChanges();
    }
    /** @nocollapse */ static ɵfac = function MrdErrorComponent_Factory(t) { return new (t || MrdErrorComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdErrorComponent, selectors: [["mrd-error"]], inputs: { ellipsis: ["ellipsis", "ellipsis", numberAttribute] }, features: [i0.ɵɵInputTransformsFeature], decls: 2, vars: 8, consts: [["showIfTruncated", "", 1, "mrd-error-container", 3, "ngClass", "ngStyle", "mrdToolTip"]], template: function MrdErrorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0$7, ctx.ellipsis > 0))("ngStyle", i0.ɵɵpureFunction1(6, _c1$4, ctx.ellipsis > 0 ? ctx.ellipsis : ""))("mrdToolTip", ctx.error);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx.error, "\n");
        } }, dependencies: [i1$1.NgClass, i1$1.NgStyle, ToolTipRendererDirective], styles: ["[_nghost-%COMP%]{font-size:.75em;color:#db2929;display:flex;flex:0 1 fit-content}.mrd-error-container[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;min-width:-moz-fit-content;min-width:fit-content}.mrd-error-container.mrd-error-ellipsis[_ngcontent-%COMP%]{white-space:nowrap;white-space:normal;display:-webkit-box}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdErrorComponent, [{
        type: Component,
        args: [{ selector: 'mrd-error', changeDetection: ChangeDetectionStrategy.OnPush, template: "<span class=\"mrd-error-container\"\r\n  [ngClass]=\"{'mrd-error-ellipsis': ellipsis > 0}\"\r\n  [ngStyle]=\"{'-webkit-line-clamp': ellipsis > 0 ? ellipsis : ''}\"\r\n  [mrdToolTip]=\"error\" showIfTruncated>\r\n  {{error}}\r\n</span>\r\n", styles: [":host{font-size:.75em;color:#db2929;display:flex;flex:0 1 fit-content}.mrd-error-container{overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;min-width:-moz-fit-content;min-width:fit-content}.mrd-error-container.mrd-error-ellipsis{white-space:nowrap;white-space:normal;display:-webkit-box}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { ellipsis: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }] }); })();

const _c0$6 = ["optionValue"];
function MrdSelectOptionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelement(1, "mrd-checkbox", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r0.selected);
} }
const _c1$3 = [[["mrd-icon", 3, "icon-end", ""], ["", "mrd-icon", "", 3, "icon-end", ""]], "*", [["mrd-icon", "icon-end", ""], ["", "mrd-icon", "", "icon-end", ""]]];
const _c2$3 = function (a0, a1, a2) { return { "selected": a0, "filtered": a1, "focused": a2 }; };
const _c3$3 = ["mrd-icon:not([icon-end]), [mrd-icon]:not([icon-end])", "*", "mrd-icon[icon-end], [mrd-icon][icon-end]"];
class MrdSelectOptionComponent {
    elementRef;
    select;
    cdr;
    optionValue;
    value;
    noCheckbox = false;
    optionClicked = new EventEmitter();
    optionLabel;
    _selected = false;
    _filtered = false;
    _focused = false;
    multiple = false;
    constructor(elementRef, select, cdr) {
        this.elementRef = elementRef;
        this.select = select;
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        this.multiple = this.select.multiple;
        if (this.optionValue) {
            this.optionLabel = this.optionValue.nativeElement.innerText;
        }
        this.cdr.detectChanges();
    }
    optionClick() {
        this.optionClicked.emit({ key: this.value, value: this.optionValue?.nativeElement.innerText || '', option: this, checked: !this.selected });
        this.cdr.markForCheck();
    }
    set selected(value) {
        this._selected = value;
        this.cdr.detectChanges();
        this.cdr.markForCheck();
    }
    get selected() {
        return this._selected;
    }
    set filtered(value) {
        this._filtered = value;
        this.cdr.detectChanges();
        this.cdr.markForCheck();
    }
    get filtered() {
        return this._filtered;
    }
    set focused(value) {
        this._focused = value;
        this.cdr.detectChanges();
        this.cdr.markForCheck();
    }
    get focused() {
        return this._focused;
    }
    /** @nocollapse */ static ɵfac = function MrdSelectOptionComponent_Factory(t) { return new (t || MrdSelectOptionComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(MrdSelectComponent, 1), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdSelectOptionComponent, selectors: [["mrd-select-option"]], viewQuery: function MrdSelectOptionComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$6, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.optionValue = _t.first);
        } }, inputs: { value: "value", noCheckbox: ["noCheckbox", "noCheckbox", booleanAttribute] }, outputs: { optionClicked: "optionClicked" }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c3$3, decls: 8, vars: 6, consts: [[1, "mrd-select-option-item", 3, "ngClass", "click"], ["class", "mrd-select-option-checkbox-wrapper", 4, "ngIf"], [1, "mrd-select-option-value-text"], ["optionValue", ""], [1, "mrd-select-option-checkbox-wrapper"], [3, "checked"]], template: function MrdSelectOptionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1$3);
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function MrdSelectOptionComponent_Template_div_click_0_listener() { return ctx.optionClick(); });
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtemplate(2, MrdSelectOptionComponent_div_2_Template, 2, 1, "div", 1);
            i0.ɵɵprojection(3);
            i0.ɵɵelementStart(4, "span", 2, 3);
            i0.ɵɵprojection(6, 1);
            i0.ɵɵelementEnd();
            i0.ɵɵprojection(7, 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c2$3, ctx.selected, ctx.filtered, ctx.focused));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.multiple && !ctx.noCheckbox);
        } }, dependencies: [i1$1.NgClass, i1$1.NgIf, MrdCheckboxComponent], styles: ["[_nghost-%COMP%]{display:block;width:100%}.mrd-select-search-option[_nghost-%COMP%]   .mrd-select-option-item[_ngcontent-%COMP%]:hover{background-color:inherit}.mrd-select-option-item[_ngcontent-%COMP%]{height:3em;border-bottom:1px solid #afafaf;white-space:nowrap;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:0 16px;cursor:pointer}.mrd-select-option-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;align-items:center}.mrd-select-option-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   .mrd-select-option-value-text[_ngcontent-%COMP%]{display:flex;flex:1}.mrd-select-option-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]     .mat-icon{height:20px;width:20px;font-size:20px;margin-right:6px}.mrd-select-option-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]     .mat-icon.icon-end{margin-right:0;margin-left:6px}.mrd-select-option-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   .mrd-select-option-checkbox-wrapper[_ngcontent-%COMP%]{display:flex;pointer-events:none}.mrd-select-option-item.selected[_ngcontent-%COMP%]{background-color:#3fb61a21}.mrd-select-option-item.filtered[_ngcontent-%COMP%]{display:none}.mrd-select-option-item.focused[_ngcontent-%COMP%], .mrd-select-option-item[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}.mrd-select-option-item[_ngcontent-%COMP%]:last-of-type{border-bottom:none}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdSelectOptionComponent, [{
        type: Component,
        args: [{ selector: 'mrd-select-option', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-select-option-item\" [ngClass]=\"{'selected': selected, 'filtered': filtered, 'focused': focused}\" (click)=\"optionClick()\">\r\n  <span>\r\n    <div *ngIf=\"multiple && !noCheckbox\" class=\"mrd-select-option-checkbox-wrapper\">\r\n      <!-- <span class=\"mrd-select-option-checkbox\" [ngClass]=\"{'selected': selected}\">\r\n        <ng-container *ngIf=\"selected\">\r\n          <svg fill=\"#ffffff\" width=\"16px\" height=\"16px\" viewBox=\"-4 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"#000000\" stroke-width=\"0.00032\">\r\n            <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\r\n            <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g>\r\n            <g id=\"SVGRepo_iconCarrier\"> <title>check</title> <path d=\"M19.375 5.063l-9.5 13.625-6.563-4.875-3.313 4.594 11.188 8.531 12.813-18.375z\"></path></g>\r\n          </svg>\r\n        </ng-container>\r\n      </span> -->\r\n      <mrd-checkbox [checked]=\"selected\"></mrd-checkbox>\r\n    </div>\r\n    <ng-content select=\"mrd-icon:not([icon-end]), [mrd-icon]:not([icon-end])\"></ng-content>\r\n    <span #optionValue class=\"mrd-select-option-value-text\"><ng-content></ng-content></span>\r\n    <ng-content select=\"mrd-icon[icon-end], [mrd-icon][icon-end]\"></ng-content>\r\n  </span>\r\n</div>\r\n", styles: [":host{display:block;width:100%}:host.mrd-select-search-option .mrd-select-option-item:hover{background-color:inherit}.mrd-select-option-item{height:3em;border-bottom:1px solid #afafaf;white-space:nowrap;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:0 16px;cursor:pointer}.mrd-select-option-item>span{width:100%;display:flex;flex-direction:row;align-items:center}.mrd-select-option-item>span .mrd-select-option-value-text{display:flex;flex:1}.mrd-select-option-item>span ::ng-deep .mat-icon{height:20px;width:20px;font-size:20px;margin-right:6px}.mrd-select-option-item>span ::ng-deep .mat-icon.icon-end{margin-right:0;margin-left:6px}.mrd-select-option-item>span .mrd-select-option-checkbox-wrapper{display:flex;pointer-events:none}.mrd-select-option-item.selected{background-color:#3fb61a21}.mrd-select-option-item.filtered{display:none}.mrd-select-option-item.focused,.mrd-select-option-item:hover{background-color:#f0f0f0}.mrd-select-option-item:last-of-type{border-bottom:none}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: MrdSelectComponent, decorators: [{
                type: Host
            }] }, { type: i0.ChangeDetectorRef }]; }, { optionValue: [{
            type: ViewChild,
            args: ['optionValue']
        }], value: [{
            type: Input
        }], noCheckbox: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], optionClicked: [{
            type: Output
        }] }); })();

const _c0$5 = ["*"];
class MrdSelectCustomTriggerComponent {
    triggerClick = new EventEmitter();
    triggerClicked() {
        this.triggerClick.emit();
    }
    /** @nocollapse */ static ɵfac = function MrdSelectCustomTriggerComponent_Factory(t) { return new (t || MrdSelectCustomTriggerComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdSelectCustomTriggerComponent, selectors: [["mrd-select-custom-trigger"]], outputs: { triggerClick: "triggerClick" }, ngContentSelectors: _c0$5, decls: 2, vars: 0, consts: [[3, "click"]], template: function MrdSelectCustomTriggerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵlistener("click", function MrdSelectCustomTriggerComponent_Template_span_click_0_listener() { return ctx.triggerClicked(); });
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } }, styles: ["[_nghost-%COMP%]{display:block;height:1.5em;width:100%;cursor:pointer;padding-left:2px}[_nghost-%COMP%] > span[_ngcontent-%COMP%]{width:100%;height:100%;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdSelectCustomTriggerComponent, [{
        type: Component,
        args: [{ selector: 'mrd-select-custom-trigger', template: "<span (click)=\"triggerClicked()\"><ng-content></ng-content></span>\r\n", styles: [":host{display:block;height:1.5em;width:100%;cursor:pointer;padding-left:2px}:host>span{width:100%;height:100%;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"] }]
    }], null, { triggerClick: [{
            type: Output
        }] }); })();

const _c0$4 = ["selectContainer"];
function MrdSelectComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 4);
    i0.ɵɵlistener("click", function MrdSelectComponent_ng_container_2_Template_input_click_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.triggerClicked()); })("input", function MrdSelectComponent_ng_container_2_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.autoCompleteInput($event)); })("keydown", function MrdSelectComponent_ng_container_2_Template_input_keydown_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.onKeyDown($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r1.value);
} }
function MrdSelectComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1);
    i0.ɵɵelementContainerEnd();
} }
function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵlistener("click", function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_1_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r12.triggerClicked()); });
    i0.ɵɵelementStart(2, "span", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(4, "svg", 7);
    i0.ɵɵelement(5, "g", 8)(6, "g", 9);
    i0.ɵɵelementStart(7, "g", 10);
    i0.ɵɵelement(8, "path", 11);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("mrdToolTip", ctx_r10.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r10.value);
} }
function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_ng_container_1_mrd_chip_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-chip", 17);
    i0.ɵɵlistener("close", function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_ng_container_1_mrd_chip_1_Template_mrd_chip_close_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const option_r17 = restoredCtx.$implicit; const ctx_r18 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r18.chipClosed(option_r17)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r17 = ctx.$implicit;
    const ctx_r16 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("prefixIcon", ctx_r16.chipPrefixIcon)("suffixIcon", ctx_r16.chipSuffixIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r17.optionLabel);
} }
function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_ng_container_1_mrd_chip_1_Template, 2, 3, "mrd-chip", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r15.selectedOptions);
} }
function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementStart(2, "div", 15);
    i0.ɵɵlistener("click", function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r20.triggerClicked()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 7);
    i0.ɵɵelement(4, "g", 8)(5, "g", 9);
    i0.ɵɵelementStart(6, "g", 10);
    i0.ɵɵelement(7, "path", 11);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r14.selectedOptions && ctx_r14.selectedOptions.length > 0);
} }
function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵtemplate(2, MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_Template, 8, 1, "div", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r11.chipSelection);
} }
function MrdSelectComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_container_3_ng_container_2_ng_container_1_Template, 9, 2, "ng-container", 2);
    i0.ɵɵtemplate(2, MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_Template, 3, 1, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r9.chipSelection);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.chipSelection);
} }
function MrdSelectComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 2);
    i0.ɵɵtemplate(2, MrdSelectComponent_ng_container_3_ng_container_2_Template, 3, 2, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.customTrigger);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.customTrigger);
} }
function MrdSelectComponent_ng_template_4_mrd_select_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-select-option", 23)(1, "input", 24);
    i0.ɵɵlistener("input", function MrdSelectComponent_ng_template_4_mrd_select_option_1_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r25.searchInput($event)); })("click", function MrdSelectComponent_ng_template_4_mrd_select_option_1_Template_input_click_1_listener($event) { return $event.stopPropagation(); })("keydown", function MrdSelectComponent_ng_template_4_mrd_select_option_1_Template_input_keydown_1_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r28 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r28.onKeyDown($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r22.searchText);
} }
function MrdSelectComponent_ng_template_4_mrd_select_option_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-select-option", 25);
    i0.ɵɵlistener("optionClicked", function MrdSelectComponent_ng_template_4_mrd_select_option_3_Template_mrd_select_option_optionClicked_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r29.removeSelected()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r23.multiple ? "Auswahl l\u00F6schen" : "-");
} }
function MrdSelectComponent_ng_template_4_mrd_select_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mrd-select-option", 26);
    i0.ɵɵtext(1, "Keine Eintr\u00E4ge gefunden");
    i0.ɵɵelementEnd();
} }
function MrdSelectComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_template_4_mrd_select_option_1_Template, 2, 1, "mrd-select-option", 19);
    i0.ɵɵelementStart(2, "div", 20);
    i0.ɵɵtemplate(3, MrdSelectComponent_ng_template_4_mrd_select_option_3_Template, 2, 2, "mrd-select-option", 21);
    i0.ɵɵtemplate(4, MrdSelectComponent_ng_template_4_mrd_select_option_4_Template, 2, 0, "mrd-select-option", 22);
    i0.ɵɵprojection(5, 1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.searchSelection);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.nullable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.searchSelection && ctx_r3.searchText.length > 0 && ctx_r3.showNoOptionsOnSearch);
} }
const _c1$2 = [[["mrd-select-custom-trigger"]], [["mrd-select-option"]]];
const _c2$2 = function (a0) { return { "mrd-select-disabled": a0 }; };
const _c3$2 = ["mrd-select-custom-trigger", "mrd-select-option"];
class MrdSelectComponent extends BasePushStrategyObject {
    elementRef;
    cdr;
    selectContainer;
    options;
    customTrigger;
    _initialized = new Subject();
    optionSelectionChanges = defer(() => {
        const options = this.options;
        if (options) {
            return options.changes.pipe(startWith(options), switchMap(() => merge(...options.map(option => option.optionClicked))));
        }
        return this._initialized.pipe(switchMap(() => this.optionSelectionChanges));
    });
    formControl;
    formArrayControl;
    identifier = 'id';
    items = [];
    autoComplete = false;
    searchSelection = false;
    chipSelection = false;
    nullable = false;
    get multiple() {
        return this._multiple;
    }
    set multiple(value) {
        this._multiple = value;
    }
    _multiple = false;
    chipPrefixIcon;
    chipSuffixIcon;
    touched = new EventEmitter();
    focused = new EventEmitter();
    blurred = new EventEmitter();
    showOptions = new ObservableValue(false);
    optionsVisible = false;
    _showNoOptionsOnSearch = false;
    value = '';
    searchText = '';
    optionsWidthExceeded = false;
    optionsHeightExceeded = false;
    optionChangeSubscription;
    _positions = [
        {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
        },
        {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
        },
        {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom'
        },
        {
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom'
        },
    ];
    constructor(elementRef, cdr) {
        super();
        this.elementRef = elementRef;
        this.cdr = cdr;
    }
    ngOnInit() {
        // this.watch(this.showOptions.changed, new SubscriptionHandler((value: boolean) => {
        //   if (value) {
        //     setTimeout(() => {
        //       let optionsContainer = this.elementRef.nativeElement.querySelector('.mrd-select-options-container');
        //       let optionsContainerRight = optionsContainer.getBoundingClientRect().right;
        //       let optionsContainerBottom = optionsContainer.getBoundingClientRect().bottom;
        //       let windowWidth = window.innerWidth;
        //       if (optionsContainerRight > windowWidth) {
        //         this.optionsWidthExceeded = true;
        //       } else {
        //         this.optionsWidthExceeded = false;
        //       }
        //       let windowHeight = window.innerHeight;
        //       if (optionsContainerBottom > windowHeight) {
        //         this.optionsHeightExceeded = true;
        //       } else {
        //         this.optionsHeightExceeded = false;
        //       }
        //       this.optionsVisible = true;
        //       this.cdr.markForCheck();
        //     });
        //   } else {
        //     this.optionsWidthExceeded = false;
        //     this.optionsHeightExceeded = false;
        //     this.optionsVisible = false;
        //   }
        // }));
    }
    ngAfterContentInit() {
        this._initialized.next(null);
        this._initialized.complete();
        this.watch(this.options.changes.pipe(startWith(null)), new SubscriptionHandler(() => {
            this._resetOptions();
            if (Util.isDefined(this.formArrayControl) && Util.isDefined(this.formArrayControl.value)) {
                let selectedValues = (this.formArrayControl.value).map(value => value[this.identifier]);
                this.options.forEach(option => {
                    if (selectedValues.includes(option.value)) {
                        option.optionClick();
                    }
                });
            }
        }));
        if (Util.isDefined(this.customTrigger)) {
            this.watch(this.customTrigger.triggerClick, new SubscriptionHandler(() => {
                this.triggerClicked();
            }));
        }
    }
    ngAfterViewInit() {
        if (Util.isDefined(this.formControl) && Util.isDefined(this.formArrayControl)) {
            throw new Error('Es kann nur ein FormControl oder ein FormArrayControl verwendet werden.');
        }
        if (Util.isDefined(this.formControl)) {
            this.watch(this.formControl.valueChanges, new SubscriptionHandler(() => this.formControlChanged()));
        }
        if (Util.isDefined(this.formArrayControl)) {
            this.watch(this.formArrayControl.control.valueChanges, new SubscriptionHandler(() => this.formArrayControlChanged()));
        }
        if (Util.isDefined(this.formControl) && Util.isDefined(this.formControl.value)) {
            if (!this.multiple) {
                this.options.find(option => option.value === this.formControl.value)?.optionClick();
            }
            else {
                let selectedValues = this.formControl.value;
                this.options.forEach(option => {
                    if (selectedValues.includes(option.value)) {
                        option.optionClick();
                    }
                });
            }
        }
        if (Util.isDefined(this.formArrayControl) && Util.isDefined(this.formArrayControl.value)) {
            let selectedValues = (this.formArrayControl.value).map(value => value[this.identifier]);
            this.options.forEach(option => {
                if (selectedValues.includes(option.value)) {
                    option.optionClick();
                }
            });
        }
    }
    formControlChanged() {
        if (this.autoComplete) {
            this.value = this.formControl.value;
            this.options.forEach(option => {
                option.focused = false;
                if ((option.optionValue?.nativeElement.innerText || '').toLowerCase().indexOf(this.value?.toLowerCase()) > -1) {
                    option.filtered = false;
                }
                else {
                    option.filtered = true;
                }
            });
            if (this.value.length > 0) {
                let filteredOptions = this.options.filter(option => !option.filtered);
                if (filteredOptions.length > 0) {
                    filteredOptions[0].focused = true;
                }
                this.showNoOptionsOnSearch = filteredOptions.length === 0;
            }
        }
        else {
            if (!Util.isDefined(this.formControl.value)) {
                this.value = '';
                this.options.forEach(option => option.selected = false);
            }
            else {
                if (!this.multiple) {
                    this.options.forEach(option => option.selected = false);
                    let option = this.options.find(option => option.value === this.formControl.value);
                    if (Util.isDefined(option)) {
                        option.selected = true;
                        this.value = option.optionValue?.nativeElement.innerText || '';
                    }
                }
                else {
                    let selectedValues = this.formControl.value;
                    this.options.forEach(option => {
                        if (selectedValues.includes(option.value)) {
                            option.selected = true;
                        }
                        else {
                            option.selected = false;
                        }
                    });
                    let selectedOptions = this.options.filter(option => option.selected);
                    this.value = selectedOptions.length === 0 ? '' : selectedOptions.map(option => option.optionValue?.nativeElement.innerText || '').join(', ');
                }
            }
        }
        this.cdr.markForCheck();
        this.cdr.detectChanges();
    }
    formArrayControlChanged() {
        if (this.autoComplete) {
            // TODO: Implement
        }
        else {
            if (!Util.isDefined(this.formArrayControl.control.value) || this.formArrayControl.control.value.length === 0) {
                this.value = '';
                this.options.forEach(option => option.selected = false);
            }
            else {
                let selectedValues = this.formArrayControl.control.value.map(value => value[this.identifier]);
                this.options.forEach(option => {
                    if (selectedValues.includes(option.value)) {
                        option.selected = true;
                    }
                    else {
                        option.selected = false;
                    }
                });
                let selectedOptions = this.options.filter(option => option.selected);
                this.value = selectedOptions.length === 0 ? '' : selectedOptions.map(option => option.optionValue?.nativeElement.innerText || '').join(', ');
            }
        }
        this.cdr.markForCheck();
        this.cdr.detectChanges();
    }
    _resetOptions() {
        if (Util.isDefined(this.optionChangeSubscription) && !this.optionChangeSubscription.closed) {
            this.optionChangeSubscription.unsubscribe();
        }
        this.optionChangeSubscription = this.watch(this.optionSelectionChanges, new SubscriptionHandler((event) => {
            if (Util.isDefined(event)) {
                if (!this.multiple) {
                    this.options.forEach(option => option.selected = false);
                }
                this.options.forEach(option => option.focused = false);
                this.searchText = '';
                this.showNoOptionsOnSearch = false;
                if (Util.isDefined(event.option) && !this.autoComplete) {
                    event.option.selected = this.multiple ? event.checked : true;
                    this.cdr.markForCheck();
                    this.cdr.detectChanges();
                }
                if (!this.multiple) {
                    if (Util.isDefined(this.formControl) && this.formControl.value !== event.key) {
                        this.formControl.setValue(event.key);
                    }
                    else {
                        this.value = event.value;
                    }
                    this.showOptions.value = false;
                }
                else {
                    let selectedOptions = this.options.filter(option => option.selected);
                    if (Util.isDefined(this.formControl)) {
                        this.formControl.setValue(selectedOptions.length === 0 ? null : selectedOptions.map(option => option.value));
                    }
                    if (Util.isDefined(this.formArrayControl)) {
                        this.formArrayControl.reset(selectedOptions.length === 0 ? [] : selectedOptions.map(option => this.items.find(item => item[this.identifier] === option.value)));
                    }
                    // this.value = selectedOptions.length === 0 ? '' : selectedOptions.map(option => option.optionValue?.nativeElement.innerText || '').join(', ');
                }
            }
            this.cdr.detectChanges();
        }));
    }
    removeSelected() {
        // this.options.forEach(option => option.selected = false);
        if (Util.isDefined(this.formControl)) {
            this.formControl.setValue(null);
        }
        if (Util.isDefined(this.formArrayControl)) {
            this.formArrayControl.reset([]);
        }
        // this.value = '';
        if (!this.multiple) {
            this.showOptions.value = false;
        }
        this.cdr.detectChanges();
    }
    chipClosed(option) {
        option.selected = false;
        let selectedOptions = this.options.filter(option => option.selected);
        if (Util.isDefined(this.formControl)) {
            this.formControl.setValue(selectedOptions.length === 0 ? null : selectedOptions.map(option => option.value));
        }
        if (Util.isDefined(this.formArrayControl)) {
            this.formArrayControl.reset(selectedOptions.length === 0 ? [] : selectedOptions.map(option => this.items.find(item => item[this.identifier] === option.value)));
        }
        // this.value = selectedOptions.length === 0 ? '' : selectedOptions.map(option => option.optionValue?.nativeElement.innerText || '').join(', ');
        this.cdr.detectChanges();
    }
    autoCompleteInput(event) {
        if (Util.isDefined(this.formControl)) {
            this.formControl.setValue(event.target.value);
        }
        // this.value = (event.target as HTMLInputElement).value;
        // this.options.forEach(option => {
        //   option.focused = false;
        //   if ((option.optionValue?.nativeElement.innerText || '').toLowerCase().indexOf(this.value.toLowerCase()) > -1) {
        //     option.filtered = false;
        //   } else {
        //     option.filtered = true;
        //   }
        // });
        // if (this.value.length > 0) {
        //   let filteredOptions = this.options.filter(option => !option.filtered);
        //   if (filteredOptions.length > 0) {
        //     filteredOptions[0].focused = true;
        //   }
        //   this.showNoOptionsOnSearch = filteredOptions.length === 0;
        // }
        this.cdr.markForCheck();
    }
    searchInput(event) {
        this.searchText = event.target.value;
        this.options.forEach(option => {
            option.focused = false;
            if ((option.optionValue?.nativeElement.innerText || '').toLowerCase().indexOf(this.searchText.toLowerCase()) > -1) {
                option.filtered = false;
            }
            else {
                option.filtered = true;
            }
        });
        if (this.searchText.length > 0) {
            let filteredOptions = this.options.filter(option => !option.filtered);
            if (filteredOptions.length > 0) {
                filteredOptions[0].focused = true;
            }
            this.showNoOptionsOnSearch = filteredOptions.length === 0;
        }
        this.cdr.markForCheck();
    }
    onKeyDown(event) {
        let filteredOptions = this.options.filter(option => !option.filtered);
        if (event.key === 'Enter') {
            let selectedOption = filteredOptions.find(option => option.focused);
            if (Util.isDefined(selectedOption)) {
                selectedOption.optionClick();
            }
        }
        if (event.key === 'ArrowDown') {
            let focusedOption = filteredOptions.find(option => option.focused);
            if (Util.isDefined(focusedOption)) {
                let focusedOptionIndex = filteredOptions.findIndex((option) => option.focused);
                if (focusedOptionIndex > -1 && focusedOptionIndex < filteredOptions.length - 2) {
                    focusedOption.focused = false;
                    filteredOptions[focusedOptionIndex + 1].focused = true;
                }
            }
            else {
                filteredOptions[0].focused = true;
            }
            this.cdr.markForCheck();
        }
        if (event.key === 'ArrowUp') {
            let focusedOption = filteredOptions.find(option => option.focused);
            if (Util.isDefined(focusedOption)) {
                let focusedOptionIndex = filteredOptions.findIndex((option) => option.focused);
                if (focusedOptionIndex > 0) {
                    focusedOption.focused = false;
                    filteredOptions[focusedOptionIndex - 1].focused = true;
                }
            }
            else {
                filteredOptions[filteredOptions.length - 1].focused = true;
            }
            this.cdr.markForCheck();
        }
    }
    triggerClicked() {
        if ((!Util.isDefined(this.formControl) || !this.formControl.disabled) && (!Util.isDefined(this.formArrayControl) || !this.formArrayControl.control.disabled)) {
            this.touched.emit();
            this.focused.emit();
            this.showOptions.value = true;
            setTimeout(() => {
                let selectedOption = document.querySelector('.mrd-select-options-overlay .mrd-select-options-scroll .mrd-select-option-item.selected');
                if (Util.isDefined(selectedOption)) {
                    selectedOption.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
                }
            }, 10);
            this.cdr.markForCheck();
        }
    }
    get selectedOptions() {
        return this.options.filter(option => option.selected);
    }
    set showNoOptionsOnSearch(value) {
        this._showNoOptionsOnSearch = value;
        this.cdr.markForCheck();
        this.cdr.detectChanges();
    }
    get showNoOptionsOnSearch() {
        return this._showNoOptionsOnSearch;
    }
    focus(event) {
        this.focused.emit();
    }
    blur(event) {
        this.blurred.emit();
    }
    get optionsMinWidth() {
        return this.selectContainer ? `${this.selectContainer.nativeElement.getBoundingClientRect().width}px` : 'auto';
    }
    /** @nocollapse */ static ɵfac = function MrdSelectComponent_Factory(t) { return new (t || MrdSelectComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdSelectComponent, selectors: [["mrd-select"]], contentQueries: function MrdSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, MrdSelectCustomTriggerComponent, 5);
            i0.ɵɵcontentQuery(dirIndex, MrdSelectOptionComponent, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.customTrigger = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.options = _t);
        } }, viewQuery: function MrdSelectComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$4, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectContainer = _t.first);
        } }, inputs: { formControl: ["mrdFormControl", "formControl"], formArrayControl: ["mrdFormArray", "formArrayControl"], identifier: "identifier", items: "items", autoComplete: ["autoComplete", "autoComplete", booleanAttribute], searchSelection: ["searchSelection", "searchSelection", booleanAttribute], chipSelection: ["chipSelection", "chipSelection", booleanAttribute], nullable: ["nullable", "nullable", booleanAttribute], multiple: ["multiple", "multiple", booleanAttribute], chipPrefixIcon: "chipPrefixIcon", chipSuffixIcon: "chipSuffixIcon" }, outputs: { touched: "touched", focused: "focused", blurred: "blurred" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c3$2, decls: 5, vars: 10, consts: [[1, "mrd-select-container", 3, "ngClass"], ["selectContainer", ""], [4, "ngIf"], ["cdk-connected-overlay", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", "cdkConnectedOverlayPanelClass", "mrd-select-options-overlay", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "backdropClick"], [3, "value", "click", "input", "keydown"], [1, "mrd-select-trigger", 3, "click"], ["showIfTruncated", "", 3, "mrdToolTip"], ["fill", "currentColor", "width", "14px", "height", "14px", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke", "#CCCCCC", "stroke-width", "0.048"], ["id", "SVGRepo_iconCarrier"], ["d", "M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"], [1, "mrd-chip-container"], ["class", "mrd-chip-values", 4, "ngIf"], [1, "mrd-chip-values"], [1, "mrd-select-trigger-chip", 3, "click"], [3, "prefixIcon", "suffixIcon", "close", 4, "ngFor", "ngForOf"], [3, "prefixIcon", "suffixIcon", "close"], [1, "mrd-select-options-container"], ["class", "mrd-select-search-option", "noCheckbox", "", 4, "ngIf"], [1, "mrd-select-options-scroll"], ["noCheckbox", "", 3, "value", "optionClicked", 4, "ngIf"], ["noCheckbox", "", 4, "ngIf"], ["noCheckbox", "", 1, "mrd-select-search-option"], ["placeholder", "Suche", 3, "value", "input", "click", "keydown"], ["noCheckbox", "", 3, "value", "optionClicked"], ["noCheckbox", ""]], template: function MrdSelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1$2);
            i0.ɵɵelementStart(0, "div", 0, 1);
            i0.ɵɵtemplate(2, MrdSelectComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
            i0.ɵɵtemplate(3, MrdSelectComponent_ng_container_3_Template, 3, 2, "ng-container", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, MrdSelectComponent_ng_template_4_Template, 6, 3, "ng-template", 3);
            i0.ɵɵlistener("backdropClick", function MrdSelectComponent_Template_ng_template_backdropClick_4_listener() { return ctx.showOptions.value = false; });
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c2$2, ctx.formControl == null ? null : ctx.formControl.disabled));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.autoComplete);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.autoComplete);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.showOptions.value)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayMinWidth", ctx.optionsMinWidth);
        } }, styles: ["[_nghost-%COMP%]{width:100%}input[_ngcontent-%COMP%]{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-trigger[_ngcontent-%COMP%]{display:flex;height:1.5em;width:100%;cursor:pointer;padding-left:2px;flex-direction:row;align-items:center}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-trigger[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-trigger[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{margin-right:8px}.mrd-select-container[_ngcontent-%COMP%]   .mrd-chip-container[_ngcontent-%COMP%]{margin-top:4px}.mrd-select-container[_ngcontent-%COMP%]   .mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-values[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:8px}.mrd-select-container[_ngcontent-%COMP%]   .mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-values[_ngcontent-%COMP%]   .mrd-select-trigger-chip[_ngcontent-%COMP%]{display:flex;height:1.5em;min-width:30%;max-width:100%;flex:1 1 30%;cursor:pointer;padding-left:2px;flex-direction:row;align-items:center;justify-content:flex-end}.mrd-select-container[_ngcontent-%COMP%]   .mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-values[_ngcontent-%COMP%]   .mrd-select-trigger-chip[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{margin-right:8px}.mrd-select-container.mrd-select-disabled[_ngcontent-%COMP%]   .mrd-select-trigger[_ngcontent-%COMP%]{color:#afa6a6;cursor:inherit}  .cdk-overlay-pane.mrd-select-options-overlay .mrd-select-options-container{display:flex;flex-direction:column;width:100%;background-color:#fff;border-radius:.375rem;--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)),var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)),var(--tw-shadow)}  .cdk-overlay-pane.mrd-select-options-overlay .mrd-select-options-container .mrd-select-search-option{border-bottom:1px solid rgba(0,0,0,.2196078431)}  .cdk-overlay-pane.mrd-select-options-overlay .mrd-select-options-container .mrd-select-options-scroll{overflow-y:auto;max-height:15em}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdSelectComponent, [{
        type: Component,
        args: [{ selector: 'mrd-select', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div #selectContainer class=\"mrd-select-container\" [ngClass]=\"{'mrd-select-disabled': formControl?.disabled}\">\r\n  <ng-container *ngIf=\"autoComplete\">\r\n    <input\r\n    (click)=\"triggerClicked()\"\r\n    [value]=\"value\"\r\n    (input)=\"autoCompleteInput($event)\"\r\n    (keydown)=\"onKeyDown($event)\"\r\n  >\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"!autoComplete\">\r\n    <ng-container *ngIf=\"customTrigger\">\r\n      <ng-content select=\"mrd-select-custom-trigger\"></ng-content>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!customTrigger\">\r\n      <ng-container *ngIf=\"!chipSelection\">\r\n        <div class=\"mrd-select-trigger\" (click)=\"triggerClicked()\">\r\n          <span [mrdToolTip]=\"value\" showIfTruncated>{{value}}</span>\r\n          <svg fill=\"currentColor\" width=\"14px\" height=\"14px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\r\n            <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#CCCCCC\" stroke-width=\"0.048\"></g>\r\n            <g id=\"SVGRepo_iconCarrier\"><path d=\"M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z\"></path></g>\r\n          </svg>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"chipSelection\">\r\n        <div class=\"mrd-chip-container\">\r\n          <div class=\"mrd-chip-values\" *ngIf=\"chipSelection\">\r\n            <ng-container *ngIf=\"selectedOptions && selectedOptions.length > 0\">\r\n              <mrd-chip *ngFor=\"let option of selectedOptions\"\r\n                (close)=\"chipClosed(option)\"\r\n                [prefixIcon]=\"chipPrefixIcon\"\r\n                [suffixIcon]=\"chipSuffixIcon\"\r\n                >{{option.optionLabel}}</mrd-chip>\r\n            </ng-container>\r\n            <div class=\"mrd-select-trigger-chip\" (click)=\"triggerClicked()\">\r\n              <svg fill=\"currentColor\" width=\"14px\" height=\"14px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\r\n                <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#CCCCCC\" stroke-width=\"0.048\"></g>\r\n                <g id=\"SVGRepo_iconCarrier\"><path d=\"M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z\"></path></g>\r\n              </svg>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n</div>\r\n\r\n<ng-template\r\n  cdk-connected-overlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\r\n  cdkConnectedOverlayPanelClass=\"mrd-select-options-overlay\"\r\n  [cdkConnectedOverlayOrigin]=\"selectContainer\"\r\n  [cdkConnectedOverlayOpen]=\"showOptions.value\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  [cdkConnectedOverlayMinWidth]=\"optionsMinWidth\"\r\n  (backdropClick)=\"showOptions.value = false\"\r\n>\r\n  <div class=\"mrd-select-options-container\">\r\n    <mrd-select-option *ngIf=\"searchSelection\" class=\"mrd-select-search-option\" noCheckbox>\r\n      <input\r\n        placeholder=\"Suche\"\r\n        [value]=\"searchText\"\r\n        (input)=\"searchInput($event)\"\r\n        (click)=\"$event.stopPropagation()\"\r\n        (keydown)=\"onKeyDown($event)\"\r\n      >\r\n    </mrd-select-option>\r\n    <div class=\"mrd-select-options-scroll\">\r\n      <mrd-select-option *ngIf=\"nullable\" noCheckbox [value]=\"null\" (optionClicked)=\"removeSelected()\">{{multiple ? 'Auswahl l\u00F6schen' : '-'}}</mrd-select-option>\r\n      <mrd-select-option *ngIf=\"searchSelection && searchText.length > 0 && showNoOptionsOnSearch\" noCheckbox>Keine Eintr\u00E4ge gefunden</mrd-select-option>\r\n      <ng-content select=\"mrd-select-option\"></ng-content>\r\n    </div>\r\n  </div>\r\n</ng-template>", styles: [":host{width:100%}input{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}.mrd-select-container .mrd-select-trigger{display:flex;height:1.5em;width:100%;cursor:pointer;padding-left:2px;flex-direction:row;align-items:center}.mrd-select-container .mrd-select-trigger>span{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-select-container .mrd-select-trigger>svg{margin-right:8px}.mrd-select-container .mrd-chip-container{margin-top:4px}.mrd-select-container .mrd-chip-container .mrd-chip-values{display:flex;flex-direction:row;flex-wrap:wrap;gap:8px}.mrd-select-container .mrd-chip-container .mrd-chip-values .mrd-select-trigger-chip{display:flex;height:1.5em;min-width:30%;max-width:100%;flex:1 1 30%;cursor:pointer;padding-left:2px;flex-direction:row;align-items:center;justify-content:flex-end}.mrd-select-container .mrd-chip-container .mrd-chip-values .mrd-select-trigger-chip>svg{margin-right:8px}.mrd-select-container.mrd-select-disabled .mrd-select-trigger{color:#afa6a6;cursor:inherit}::ng-deep .cdk-overlay-pane.mrd-select-options-overlay .mrd-select-options-container{display:flex;flex-direction:column;width:100%;background-color:#fff;border-radius:.375rem;--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)),var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)),var(--tw-shadow)}::ng-deep .cdk-overlay-pane.mrd-select-options-overlay .mrd-select-options-container .mrd-select-search-option{border-bottom:1px solid rgba(0,0,0,.2196078431)}::ng-deep .cdk-overlay-pane.mrd-select-options-overlay .mrd-select-options-container .mrd-select-options-scroll{overflow-y:auto;max-height:15em}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { selectContainer: [{
            type: ViewChild,
            args: ['selectContainer']
        }], options: [{
            type: ContentChildren,
            args: [MrdSelectOptionComponent]
        }], customTrigger: [{
            type: ContentChild,
            args: [MrdSelectCustomTriggerComponent]
        }], formControl: [{
            type: Input,
            args: ['mrdFormControl']
        }], formArrayControl: [{
            type: Input,
            args: ['mrdFormArray']
        }], identifier: [{
            type: Input
        }], items: [{
            type: Input
        }], autoComplete: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], searchSelection: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], chipSelection: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], nullable: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], multiple: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], chipPrefixIcon: [{
            type: Input
        }], chipSuffixIcon: [{
            type: Input
        }], touched: [{
            type: Output
        }], focused: [{
            type: Output
        }], blurred: [{
            type: Output
        }] }); })();

const _c0$3 = [[["mrd-prefix"]], [["mrd-input"]], [["mrd-select"]], [["mrd-label"]], [["mrd-suffix"]], [["mrd-hint"]], [["mrd-error"]]];
const _c1$1 = function (a0, a1) { return { "mrd-form-field-container-fill": a0, "mrd-form-field-container-outline": a1 }; };
const _c2$1 = function (a0, a1, a2, a3, a4, a5) { return { "mrd-form-field-error": a0, "mrd-form-field-disabled": a1, "mrd-form-field-focused": a2, "mrd-form-field-content-container-outline": a3, "mrd-form-field-content-container-fill": a4, "mrd-form-field-dark-theme": a5 }; };
const _c3$1 = ["mrd-prefix", "mrd-input", "mrd-select", "mrd-label", "mrd-suffix", "mrd-hint", "mrd-error"];
class MrdFormFieldComponent extends BaseObject {
    cdr;
    config = ConfigUtil.getConfig();
    input;
    select;
    label;
    error;
    // @Input() public appearance: 'standard' | 'outline' = 'standard';
    outline = false;
    fill = false;
    dark = false;
    requiredAsterisk = true;
    rounded = false;
    borderRadius;
    centered = false;
    fillColor;
    disabled = false;
    focused = false;
    hasError = false;
    focusColor = this.config.formField?.focusColor ?? this.config.baseColors.primary;
    focusColorDark = this.config.formField?.focusColorDark ?? ColorUtil.changeColorBrightnessPercent(this.config.baseColors.primary, 10);
    focusColorOutline = this.config.formField?.focusColorOutline ?? ColorUtil.changeColorOpacity(this.config.baseColors.primary, 40);
    errorColor = this.config.formField?.errorColor ?? this.config.baseColors.warn;
    errorColorDark = this.config.formField?.erroColorDark ?? ColorUtil.changeColorBrightnessPercent(this.config.baseColors.warn, 10);
    errorColorOutline = this.config.formField?.errorColorOutline ?? ColorUtil.changeColorOpacity(this.config.baseColors.warn, 40);
    timeouts = [];
    constructor(cdr) {
        super();
        this.cdr = cdr;
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.timeouts.forEach((timeout) => clearTimeout(timeout));
    }
    ngAfterViewInit() {
        this.borderRadius = this.borderRadius ?? this.rounded ? this.config.formField?.borderRadiusRounded : this.config.formField?.borderRadius;
        this.fillColor = this.fillColor ?? this.config.formField?.fill?.backgroundColor;
        if (Util.isDefined(this.input)) {
            this.input.centered = this.centered;
            if (Util.isDefined(this.input.formControl)) {
                this.watch(this.input.formControl.valueChanges, new SubscriptionHandler(() => {
                    if (Util.isDefined(this.error)) {
                        this.error.error = Util.isDefined(this.input.formControl.error) ? this.input.formControl.error.error : '';
                    }
                    this.hasError = Util.isDefined(this.input.formControl.error);
                    this.input.formControl.markAsDirty();
                    this.cdr.markForCheck();
                }));
                this.watch(this.input.formControl.control.statusChanges, new SubscriptionHandler(() => {
                    if (this.requiredAsterisk && Util.isDefined(this.label) && this.input.formControl.required) {
                        this.timeouts.push(setTimeout(() => this.label.required.value = true, 1));
                    }
                    else if (Util.isDefined(this.label)) {
                        this.timeouts.push(setTimeout(() => this.label.required.value = false, 1));
                    }
                    this.disabled = this.input.formControl.disabled;
                    this.cdr.markForCheck();
                }));
                if (Util.isDefined(this.error) && this.input.formControl.touched) {
                    this.error.error = Util.isDefined(this.input.formControl.error) ? this.input.formControl.error.error : '';
                    this.hasError = Util.isDefined(this.input.formControl.error);
                }
                if (this.requiredAsterisk && Util.isDefined(this.label) && this.input.formControl.required) {
                    this.timeouts.push(setTimeout(() => this.label.required.value = true, 1));
                }
                this.disabled = this.input.formControl.disabled;
                if (Util.isDefined(this.input.formControl.value)) {
                    this.input.formControl.control.updateValueAndValidity({ emitEvent: false });
                    if (Util.isDefined(this.error)) {
                        this.error.error = Util.isDefined(this.input.formControl.error) ? this.input.formControl.error.error : '';
                    }
                    this.hasError = Util.isDefined(this.input.formControl.error);
                }
                this.cdr.detectChanges();
            }
            if (Util.isDefined(this.label)) {
                if ((Util.isDefined(this.input.formControl) && Util.isDefined(this.input.formControl.value) && this.input.formControl.value !== '') ||
                    (Util.isDefined(this.input.value) && this.input.value !== '')) {
                    this.label.floating.value = true;
                }
                if (this.input.textarea) {
                    this.label.labelTop = true;
                    this.cdr.detectChanges();
                }
            }
            this.input.touched.subscribe(() => {
                if (Util.isDefined(this.input.formControl)) {
                    this.input.formControl.markAsTouched();
                }
                this.cdr.markForCheck();
            });
            this.input.focused.subscribe(() => {
                this.focused = true;
                if (Util.isDefined(this.label)) {
                    this.label.floating.value = true;
                }
                this.cdr.markForCheck();
            });
            this.input.blurred.subscribe(() => {
                this.focused = false;
                if (Util.isDefined(this.label)) {
                    if (Util.isDefined(this.input.formControl)) {
                        if (!Util.isDefined(this.input.formControl.value) || this.input.formControl.value === '') {
                            this.label.floating.value = false;
                        }
                    }
                    else if (!Util.isDefined(this.input.value) || this.input.value === '') {
                        this.label.floating.value = false;
                    }
                }
                if (Util.isDefined(this.input.formControl)) {
                    this.input.formControl.control.updateValueAndValidity({ emitEvent: false });
                    if (Util.isDefined(this.error)) {
                        this.error.error = Util.isDefined(this.input.formControl.error) ? this.input.formControl.error.error : '';
                    }
                    this.hasError = Util.isDefined(this.input.formControl.error);
                }
                this.cdr.markForCheck();
            });
        }
        if (Util.isDefined(this.select)) {
            if (Util.isDefined(this.select.formControl)) {
                this.watch(this.select.formControl.valueChanges, new SubscriptionHandler(() => {
                    if (Util.isDefined(this.error)) {
                        this.error.error = Util.isDefined(this.select.formControl.error) ? this.select.formControl.error.error : '';
                    }
                    this.hasError = Util.isDefined(this.select.formControl.error);
                    if (Util.isDefined(this.label)) {
                        if (Util.isDefined(this.select.formControl.value) && this.select.formControl.value !== '') {
                            this.label.floating.value = true;
                        }
                        else {
                            this.label.floating.value = false;
                        }
                    }
                    this.select.formControl.markAsDirty();
                    this.cdr.markForCheck();
                }));
                this.watch(this.select.formControl.control.statusChanges, new SubscriptionHandler(() => {
                    if (this.requiredAsterisk && Util.isDefined(this.label) && this.select.formControl.required) {
                        this.timeouts.push(setTimeout(() => this.label.required.value = true, 1));
                    }
                    else {
                        this.timeouts.push(setTimeout(() => this.label.required.value = false, 1));
                    }
                    this.disabled = this.select.formControl.disabled;
                    this.cdr.markForCheck();
                }));
                if (Util.isDefined(this.error) && this.select.formControl.touched) {
                    this.error.error = Util.isDefined(this.select.formControl.error) ? this.select.formControl.error.error : '';
                }
                if (this.requiredAsterisk && Util.isDefined(this.label) && this.select.formControl.required) {
                    this.timeouts.push(setTimeout(() => this.label.required.value = true, 1));
                }
                this.disabled = this.select.formControl.disabled;
                if (Util.isDefined(this.select.formControl.value)) {
                    this.select.formControl.control.updateValueAndValidity({ emitEvent: false });
                    if (Util.isDefined(this.error)) {
                        this.error.error = Util.isDefined(this.select.formControl.error) ? this.select.formControl.error.error : '';
                    }
                    this.hasError = Util.isDefined(this.select.formControl.error);
                }
                this.cdr.detectChanges();
            }
            if (Util.isDefined(this.select.formArrayControl)) {
                this.watch(this.select.formArrayControl.control.valueChanges, new SubscriptionHandler(() => {
                    debugger;
                    if (Util.isDefined(this.error)) {
                        this.error.error = Util.isDefined(this.select.formArrayControl.error) ? this.select.formArrayControl.error.error : '';
                    }
                    this.hasError = Util.isDefined(this.select.formArrayControl.error);
                    if (Util.isDefined(this.label)) {
                        if (Util.isDefined(this.select.formArrayControl.control.value) && this.select.formArrayControl.control.value.length > 0) {
                            this.label.floating.value = true;
                        }
                        else {
                            this.label.floating.value = false;
                        }
                    }
                    this.select.formArrayControl.markAsDirty();
                    this.cdr.markForCheck();
                }));
                this.watch(this.select.formArrayControl.control.statusChanges, new SubscriptionHandler(() => {
                    if (this.requiredAsterisk && Util.isDefined(this.label) && this.select.formArrayControl.required) {
                        this.timeouts.push(setTimeout(() => this.label.required.value = true, 1));
                    }
                    else {
                        this.timeouts.push(setTimeout(() => this.label.required.value = false, 1));
                    }
                    this.disabled = this.select.formArrayControl.control.disabled;
                    this.cdr.markForCheck();
                }));
                if (Util.isDefined(this.error) && this.select.formArrayControl.touched) {
                    this.error.error = Util.isDefined(this.select.formArrayControl.error) ? this.select.formArrayControl.error.error : '';
                }
                if (this.requiredAsterisk && Util.isDefined(this.label) && this.select.formArrayControl.required) {
                    this.timeouts.push(setTimeout(() => this.label.required.value = true, 1));
                }
                this.disabled = this.select.formArrayControl.control.disabled;
                if (this.select.formArrayControl.value.length > 0) {
                    this.select.formArrayControl.control.updateValueAndValidity({ emitEvent: false });
                    if (Util.isDefined(this.error)) {
                        this.error.error = Util.isDefined(this.select.formArrayControl.error) ? this.select.formArrayControl.error.error : '';
                    }
                    this.hasError = Util.isDefined(this.select.formArrayControl.error);
                }
                this.cdr.detectChanges();
            }
            if (Util.isDefined(this.label)) {
                if ((Util.isDefined(this.select.formControl) && Util.isDefined(this.select.formControl.value) && this.select.formControl.value !== '') ||
                    (Util.isDefined(this.select.value) && this.select.value !== '')) {
                    this.label.floating.value = true;
                }
                if ((Util.isDefined(this.select.formArrayControl) && Util.isDefined(this.select.formArrayControl.value) && this.select.formArrayControl.value.length > 0) ||
                    (Util.isDefined(this.select.value) && this.select.value.length > 0)) {
                    this.label.floating.value = true;
                }
            }
            this.select.touched.subscribe(() => {
                if (this.select.autoComplete && Util.isDefined(this.select.formControl)) {
                    this.select.formControl.markAsTouched();
                }
                if (this.select.autoComplete && Util.isDefined(this.select.formArrayControl)) {
                    this.select.formArrayControl.markAsTouched();
                }
            });
            this.select.focused.subscribe(() => {
                this.focused = true;
                if (this.select.autoComplete && Util.isDefined(this.label)) {
                    this.label.floating.value = true;
                }
                this.cdr.detectChanges();
            });
            this.select.blurred.subscribe(() => {
                this.focused = false;
                if (Util.isDefined(this.label)) {
                    if ((!Util.isDefined(this.select.formControl) || !Util.isDefined(this.select.formControl.value) || this.select.formControl.value === '') &&
                        (!Util.isDefined(this.select.value) || this.select.value === '')) {
                        this.label.floating.value = false;
                    }
                    if ((!Util.isDefined(this.select.formArrayControl) || !Util.isDefined(this.select.formArrayControl.value) || this.select.formArrayControl.value.length === 0) &&
                        (!Util.isDefined(this.select.value) || this.select.value.length === 0)) {
                        this.label.floating.value = false;
                    }
                }
                if (Util.isDefined(this.select.formControl)) {
                    this.select.formControl.control.updateValueAndValidity({ emitEvent: false });
                    if (Util.isDefined(this.error)) {
                        this.error.error = Util.isDefined(this.select.formControl.error) ? this.select.formControl.error.error : '';
                    }
                    this.hasError = Util.isDefined(this.select.formControl.error);
                }
                if (Util.isDefined(this.select.formArrayControl)) {
                    this.select.formArrayControl.control.updateValueAndValidity({ emitEvent: false });
                    if (Util.isDefined(this.error)) {
                        this.error.error = Util.isDefined(this.select.formArrayControl.error) ? this.select.formArrayControl.error.error : '';
                    }
                    this.hasError = Util.isDefined(this.select.formArrayControl.error);
                }
                this.cdr.markForCheck();
            });
        }
        this.cdr.markForCheck();
    }
    /** @nocollapse */ static ɵfac = function MrdFormFieldComponent_Factory(t) { return new (t || MrdFormFieldComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdFormFieldComponent, selectors: [["mrd-form-field"]], contentQueries: function MrdFormFieldComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, MrdInputComponent, 5);
            i0.ɵɵcontentQuery(dirIndex, MrdSelectComponent, 5);
            i0.ɵɵcontentQuery(dirIndex, MrdLabelComponent, 5);
            i0.ɵɵcontentQuery(dirIndex, MrdErrorComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.input = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.select = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.label = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.error = _t.first);
        } }, hostVars: 2, hostBindings: function MrdFormFieldComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("font-family", ctx.config == null ? null : ctx.config.baseFont.family);
        } }, inputs: { outline: ["outline", "outline", booleanAttribute], fill: ["fill", "fill", booleanAttribute], dark: ["dark", "dark", booleanAttribute], requiredAsterisk: "requiredAsterisk", rounded: ["rounded", "rounded", booleanAttribute], borderRadius: ["borderRadius", "borderRadius", sizeAttribute], centered: ["centered", "centered", booleanAttribute], fillColor: ["fillColor", "fillColor", colorAttribute] }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c3$1, decls: 11, vars: 28, consts: [[1, "mrd-form-field-container", 3, "ngClass"], [1, "mrd-form-field-content-container", 3, "ngClass"], [1, "mrd-form-field-input-content-container"], [1, "mrd-form-field-subcontent-container"]], template: function MrdFormFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0$3);
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵprojection(4, 1);
            i0.ɵɵprojection(5, 2);
            i0.ɵɵprojection(6, 3);
            i0.ɵɵelementEnd();
            i0.ɵɵprojection(7, 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 3);
            i0.ɵɵprojection(9, 5);
            i0.ɵɵprojection(10, 6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵstyleProp("--focus-color", ctx.focusColor)("--error-color", ctx.errorColor)("--focus-color-dark", ctx.focusColorDark)("--error-color-dark", ctx.errorColorDark)("--focus-color-outline", ctx.focusColorOutline)("--error-color-outline", ctx.errorColorOutline)("--ff-border-radius", ctx.borderRadius)("--ff-fill-color", ctx.fillColor);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(18, _c1$1, ctx.fill, ctx.outline));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction6(21, _c2$1, ctx.hasError, ctx.disabled, ctx.focused, ctx.outline, ctx.fill, ctx.dark));
        } }, dependencies: [i1$1.NgClass], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;width:264px}.mrd-form-field-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}.mrd-form-field-container[_ngcontent-%COMP%]:not(.mrd-form-field-container-outline):not(.mrd-form-field-container-fill){padding-top:1.25em}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-content-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;border-bottom:1px solid #afa6a6;padding-bottom:4px}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-content-container.mrd-form-field-content-container-outline[_ngcontent-%COMP%]{border-radius:var(--ff-border-radius);background-color:#fcfdfd;padding:12px;border:1px solid #293d4f}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-content-container.mrd-form-field-content-container-outline.mrd-form-field-dark-theme[_ngcontent-%COMP%]{background-color:#bcbcbc}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-content-container.mrd-form-field-content-container-outline.mrd-form-field-dark-theme[_ngcontent-%COMP%]:not(.mrd-form-field-focused):not(.mrd-form-field-error)  .s-label-content{color:#ebebeb}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-content-container.mrd-form-field-content-container-outline.mrd-form-field-dark-theme.mrd-form-field-focused[_ngcontent-%COMP%]:not(.mrd-form-field-error)  .s-label-content{color:var(--focus-color-dark)}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-content-container.mrd-form-field-content-container-outline.mrd-form-field-dark-theme.mrd-form-field-error[_ngcontent-%COMP%]:not(.mrd-form-field-focused)  .s-label-content{color:var(--error-color-dark)}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-content-container.mrd-form-field-content-container-outline[_ngcontent-%COMP%]     .s-label-content.s-label-floating{top:-2.5em}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-content-container.mrd-form-field-content-container-fill[_ngcontent-%COMP%]{border-radius:var(--ff-border-radius);background-color:var(--ff-fill-color);border-bottom:unset;padding:12px}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-content-container.mrd-form-field-content-container-fill.mrd-form-field-dark-theme[_ngcontent-%COMP%]{background-color:#fff}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-content-container.mrd-form-field-content-container-fill.mrd-form-field-dark-theme.mrd-form-field-focused[_ngcontent-%COMP%]:not(.mrd-form-field-error)  .s-label-content{color:var(--focus-color-dark)}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-content-container.mrd-form-field-content-container-fill.mrd-form-field-dark-theme.mrd-form-field-error[_ngcontent-%COMP%]:not(.mrd-form-field-focused)  .s-label-content{color:var(--error-color-dark)}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-content-container.mrd-form-field-content-container-fill[_ngcontent-%COMP%]:not(.mrd-form-field-focused):not(.mrd-form-field-error)  .s-label-content{color:#293d4f}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-content-container.mrd-form-field-content-container-fill[_ngcontent-%COMP%]     .s-label-content.s-label-floating{top:-2.5em}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-content-container.mrd-form-field-disabled[_ngcontent-%COMP%]{border-bottom-style:dotted}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-content-container.mrd-form-field-focused[_ngcontent-%COMP%]{border-bottom-color:var(--focus-color)}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-content-container.mrd-form-field-focused.mrd-form-field-content-container-outline[_ngcontent-%COMP%]{border-color:var(--focus-color-outline)}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-content-container.mrd-form-field-focused[_ngcontent-%COMP%]     .s-label-content{color:var(--focus-color)}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-content-container.mrd-form-field-focused[_ngcontent-%COMP%]     .s-select-container .s-select-trigger>svg{fill:var(--focus-color)}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-content-container.mrd-form-field-error[_ngcontent-%COMP%]{border-bottom-color:var(--error-color)}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-content-container.mrd-form-field-error.mrd-form-field-content-container-outline[_ngcontent-%COMP%]{border-color:var(--error-color-outline)}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-content-container.mrd-form-field-error[_ngcontent-%COMP%]     .s-label-content{color:var(--error-color)}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-content-container.mrd-form-field-error[_ngcontent-%COMP%]     .s-select-container .s-select-trigger>svg{fill:var(--error-color)}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-content-container[_ngcontent-%COMP%]   .mrd-form-field-input-content-container[_ngcontent-%COMP%]{position:relative;display:flex;flex:1 1 100%;min-width:0px}.mrd-form-field-container[_ngcontent-%COMP%]   .mrd-form-field-subcontent-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 4px;max-height:-moz-fit-content;max-height:fit-content;min-height:1em}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdFormFieldComponent, [{
        type: Component,
        args: [{ selector: 'mrd-form-field', host: {
                    "[style.font-family]": "config?.baseFont.family"
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-form-field-container\"\r\n  [ngClass]=\"{'mrd-form-field-container-fill': fill, 'mrd-form-field-container-outline': outline}\"\r\n  [style.--focus-color]=\"focusColor\"\r\n  [style.--error-color]=\"errorColor\"\r\n  [style.--focus-color-dark]=\"focusColorDark\"\r\n  [style.--error-color-dark]=\"errorColorDark\"\r\n  [style.--focus-color-outline]=\"focusColorOutline\"\r\n  [style.--error-color-outline]=\"errorColorOutline\"\r\n  [style.--ff-border-radius]=\"borderRadius\"\r\n  [style.--ff-fill-color]=\"fillColor\"\r\n>\r\n  <div class=\"mrd-form-field-content-container\"\r\n    [ngClass]=\"{'mrd-form-field-error': hasError, 'mrd-form-field-disabled': disabled, 'mrd-form-field-focused': focused,\r\n      'mrd-form-field-content-container-outline': outline, 'mrd-form-field-content-container-fill': fill, 'mrd-form-field-dark-theme': dark}\">\r\n    <ng-content select=\"mrd-prefix\"></ng-content>\r\n    <div class=\"mrd-form-field-input-content-container\">\r\n\r\n      <ng-content select=\"mrd-input\"></ng-content>\r\n      <ng-content select=\"mrd-select\"></ng-content>\r\n      <ng-content select=\"mrd-label\"></ng-content>\r\n\r\n    </div>\r\n    <ng-content select=\"mrd-suffix\"></ng-content>\r\n  </div>\r\n  <div class=\"mrd-form-field-subcontent-container\">\r\n    <ng-content select=\"mrd-hint\"></ng-content>\r\n    <ng-content select=\"mrd-error\"></ng-content>\r\n  </div>\r\n</div>\r\n", styles: [":host{display:flex;flex-direction:column;width:264px}.mrd-form-field-container{display:flex;flex-direction:column;position:relative}.mrd-form-field-container:not(.mrd-form-field-container-outline):not(.mrd-form-field-container-fill){padding-top:1.25em}.mrd-form-field-container .mrd-form-field-content-container{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;border-bottom:1px solid #afa6a6;padding-bottom:4px}.mrd-form-field-container .mrd-form-field-content-container.mrd-form-field-content-container-outline{border-radius:var(--ff-border-radius);background-color:#fcfdfd;padding:12px;border:1px solid #293d4f}.mrd-form-field-container .mrd-form-field-content-container.mrd-form-field-content-container-outline.mrd-form-field-dark-theme{background-color:#bcbcbc}.mrd-form-field-container .mrd-form-field-content-container.mrd-form-field-content-container-outline.mrd-form-field-dark-theme:not(.mrd-form-field-focused):not(.mrd-form-field-error)::ng-deep .s-label-content{color:#ebebeb}.mrd-form-field-container .mrd-form-field-content-container.mrd-form-field-content-container-outline.mrd-form-field-dark-theme.mrd-form-field-focused:not(.mrd-form-field-error)::ng-deep .s-label-content{color:var(--focus-color-dark)}.mrd-form-field-container .mrd-form-field-content-container.mrd-form-field-content-container-outline.mrd-form-field-dark-theme.mrd-form-field-error:not(.mrd-form-field-focused)::ng-deep .s-label-content{color:var(--error-color-dark)}.mrd-form-field-container .mrd-form-field-content-container.mrd-form-field-content-container-outline ::ng-deep .s-label-content.s-label-floating{top:-2.5em}.mrd-form-field-container .mrd-form-field-content-container.mrd-form-field-content-container-fill{border-radius:var(--ff-border-radius);background-color:var(--ff-fill-color);border-bottom:unset;padding:12px}.mrd-form-field-container .mrd-form-field-content-container.mrd-form-field-content-container-fill.mrd-form-field-dark-theme{background-color:#fff}.mrd-form-field-container .mrd-form-field-content-container.mrd-form-field-content-container-fill.mrd-form-field-dark-theme.mrd-form-field-focused:not(.mrd-form-field-error)::ng-deep .s-label-content{color:var(--focus-color-dark)}.mrd-form-field-container .mrd-form-field-content-container.mrd-form-field-content-container-fill.mrd-form-field-dark-theme.mrd-form-field-error:not(.mrd-form-field-focused)::ng-deep .s-label-content{color:var(--error-color-dark)}.mrd-form-field-container .mrd-form-field-content-container.mrd-form-field-content-container-fill:not(.mrd-form-field-focused):not(.mrd-form-field-error)::ng-deep .s-label-content{color:#293d4f}.mrd-form-field-container .mrd-form-field-content-container.mrd-form-field-content-container-fill ::ng-deep .s-label-content.s-label-floating{top:-2.5em}.mrd-form-field-container .mrd-form-field-content-container.mrd-form-field-disabled{border-bottom-style:dotted}.mrd-form-field-container .mrd-form-field-content-container.mrd-form-field-focused{border-bottom-color:var(--focus-color)}.mrd-form-field-container .mrd-form-field-content-container.mrd-form-field-focused.mrd-form-field-content-container-outline{border-color:var(--focus-color-outline)}.mrd-form-field-container .mrd-form-field-content-container.mrd-form-field-focused ::ng-deep .s-label-content{color:var(--focus-color)}.mrd-form-field-container .mrd-form-field-content-container.mrd-form-field-focused ::ng-deep .s-select-container .s-select-trigger>svg{fill:var(--focus-color)}.mrd-form-field-container .mrd-form-field-content-container.mrd-form-field-error{border-bottom-color:var(--error-color)}.mrd-form-field-container .mrd-form-field-content-container.mrd-form-field-error.mrd-form-field-content-container-outline{border-color:var(--error-color-outline)}.mrd-form-field-container .mrd-form-field-content-container.mrd-form-field-error ::ng-deep .s-label-content{color:var(--error-color)}.mrd-form-field-container .mrd-form-field-content-container.mrd-form-field-error ::ng-deep .s-select-container .s-select-trigger>svg{fill:var(--error-color)}.mrd-form-field-container .mrd-form-field-content-container .mrd-form-field-input-content-container{position:relative;display:flex;flex:1 1 100%;min-width:0px}.mrd-form-field-container .mrd-form-field-subcontent-container{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 4px;max-height:-moz-fit-content;max-height:fit-content;min-height:1em}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { input: [{
            type: ContentChild,
            args: [MrdInputComponent]
        }], select: [{
            type: ContentChild,
            args: [MrdSelectComponent]
        }], label: [{
            type: ContentChild,
            args: [MrdLabelComponent]
        }], error: [{
            type: ContentChild,
            args: [MrdErrorComponent]
        }], outline: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], fill: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], dark: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], requiredAsterisk: [{
            type: Input
        }], rounded: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], borderRadius: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], centered: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], fillColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }] }); })();

const _c0$2 = ["hintContent"];
const _c1 = function (a0) { return { "mrd-hint-ellipsis": a0 }; };
const _c2 = function (a0) { return { "-webkit-line-clamp": a0 }; };
const _c3 = ["*"];
class MrdHintComponent {
    cdr;
    hintContent;
    ellipsis;
    tootltipText = '';
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        if (Util.isDefined(this.hintContent) && Util.isDefined(this.hintContent.nativeElement) && Util.isDefined(this.hintContent.nativeElement.innerText)) {
            this.tootltipText = this.hintContent.nativeElement.innerText;
        }
        if (this.ellipsis !== undefined && Number.isNaN(this.ellipsis)) {
            this.ellipsis = 1;
        }
        this.cdr.detectChanges();
    }
    /** @nocollapse */ static ɵfac = function MrdHintComponent_Factory(t) { return new (t || MrdHintComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdHintComponent, selectors: [["mrd-hint"]], viewQuery: function MrdHintComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.hintContent = _t.first);
        } }, inputs: { ellipsis: ["ellipsis", "ellipsis", numberAttribute] }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c3, decls: 3, vars: 7, consts: [["showIfTruncated", "", 1, "mrd-hint-container", 3, "ngClass", "ngStyle", "mrdToolTip"], ["hintContent", ""]], template: function MrdHintComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "span", 0, 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c1, ctx.ellipsis > 0))("ngStyle", i0.ɵɵpureFunction1(5, _c2, ctx.ellipsis > 0 ? ctx.ellipsis : ""))("mrdToolTip", ctx.tootltipText);
        } }, dependencies: [i1$1.NgClass, i1$1.NgStyle, ToolTipRendererDirective], styles: ["[_nghost-%COMP%]{font-size:.75em;color:#afa6a6;display:flex;flex:1 1 fit-content}.mrd-hint-container[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;min-width:-moz-fit-content;min-width:fit-content}.mrd-hint-container.mrd-hint-ellipsis[_ngcontent-%COMP%]{white-space:nowrap;white-space:normal;display:-webkit-box}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdHintComponent, [{
        type: Component,
        args: [{ selector: 'mrd-hint', changeDetection: ChangeDetectionStrategy.OnPush, template: "<span class=\"mrd-hint-container\"\r\n  [ngClass]=\"{'mrd-hint-ellipsis': ellipsis > 0}\"\r\n  [ngStyle]=\"{'-webkit-line-clamp': ellipsis > 0 ? ellipsis : ''}\"\r\n  [mrdToolTip]=\"tootltipText\" showIfTruncated #hintContent>\r\n  <ng-content></ng-content>\r\n</span>\r\n", styles: [":host{font-size:.75em;color:#afa6a6;display:flex;flex:1 1 fit-content}.mrd-hint-container{overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;min-width:-moz-fit-content;min-width:fit-content}.mrd-hint-container.mrd-hint-ellipsis{white-space:nowrap;white-space:normal;display:-webkit-box}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { hintContent: [{
            type: ViewChild,
            args: ['hintContent']
        }], ellipsis: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }] }); })();

const _c0$1 = ["*"];
class MrdPrefixComponent {
    /** @nocollapse */ static ɵfac = function MrdPrefixComponent_Factory(t) { return new (t || MrdPrefixComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdPrefixComponent, selectors: [["mrd-prefix"]], ngContentSelectors: _c0$1, decls: 1, vars: 0, template: function MrdPrefixComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, styles: ["[_nghost-%COMP%]{display:flex;max-width:-moz-fit-content;max-width:fit-content;margin-right:4px}"] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdPrefixComponent, [{
        type: Component,
        args: [{ selector: 'mrd-prefix', template: "<ng-content></ng-content>\r\n", styles: [":host{display:flex;max-width:-moz-fit-content;max-width:fit-content;margin-right:4px}\n"] }]
    }], null, null); })();

const _c0 = ["*"];
class MrdSuffixComponent {
    /** @nocollapse */ static ɵfac = function MrdSuffixComponent_Factory(t) { return new (t || MrdSuffixComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdSuffixComponent, selectors: [["mrd-suffix"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MrdSuffixComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, styles: ["[_nghost-%COMP%]{display:flex;max-width:-moz-fit-content;max-width:fit-content;margin-left:4px}"] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdSuffixComponent, [{
        type: Component,
        args: [{ selector: 'mrd-suffix', template: "<ng-content></ng-content>\r\n", styles: [":host{display:flex;max-width:-moz-fit-content;max-width:fit-content;margin-left:4px}\n"] }]
    }], null, null); })();

class MrdFormFieldModule {
    /** @nocollapse */ static ɵfac = function MrdFormFieldModule_Factory(t) { return new (t || MrdFormFieldModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdFormFieldModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
            OverlayModule,
            MrdTooltipModule,
            MrdChipModule,
            MrdCheckboxModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdFormFieldModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MrdFormFieldComponent,
                    MrdInputComponent,
                    MrdSelectComponent,
                    MrdSelectOptionComponent,
                    MrdSelectCustomTriggerComponent,
                    MrdErrorComponent,
                    MrdHintComponent,
                    MrdLabelComponent,
                    MrdPrefixComponent,
                    MrdSuffixComponent,
                    MrdDatePickerToggle
                ],
                imports: [
                    CommonModule,
                    OverlayModule,
                    MrdTooltipModule,
                    MrdChipModule,
                    MrdCheckboxModule
                ],
                exports: [
                    MrdFormFieldComponent,
                    MrdInputComponent,
                    MrdSelectComponent,
                    MrdSelectOptionComponent,
                    MrdSelectCustomTriggerComponent,
                    MrdErrorComponent,
                    MrdHintComponent,
                    MrdLabelComponent,
                    MrdPrefixComponent,
                    MrdSuffixComponent,
                    MrdDatePickerToggle
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdFormFieldModule, { declarations: [MrdFormFieldComponent,
        MrdInputComponent,
        MrdSelectComponent,
        MrdSelectOptionComponent,
        MrdSelectCustomTriggerComponent,
        MrdErrorComponent,
        MrdHintComponent,
        MrdLabelComponent,
        MrdPrefixComponent,
        MrdSuffixComponent,
        MrdDatePickerToggle], imports: [CommonModule,
        OverlayModule,
        MrdTooltipModule,
        MrdChipModule,
        MrdCheckboxModule], exports: [MrdFormFieldComponent,
        MrdInputComponent,
        MrdSelectComponent,
        MrdSelectOptionComponent,
        MrdSelectCustomTriggerComponent,
        MrdErrorComponent,
        MrdHintComponent,
        MrdLabelComponent,
        MrdPrefixComponent,
        MrdSuffixComponent,
        MrdDatePickerToggle] }); })();
i0.ɵɵsetComponentScope(MrdSelectComponent, [i1$1.NgClass, i1$1.NgForOf, i1$1.NgIf, i1$2.CdkConnectedOverlay, ToolTipRendererDirective, MrdChipComponent, MrdSelectOptionComponent], []);

/**
 * Generated bundle index. Do not edit.
 */

export { ColorUtil, ConfigUtil, FlyOutData, FlyOutService, HideIfTruncatedDirective, MRD_ICON_LOCATION, MRD_ICON_LOCATION_FACTORY, MrdButtonComponent, MrdButtonModule, MrdButtonToggleGroupComponent, MrdButtonToggleModule, MrdCheckboxComponent, MrdCheckboxModule, MrdChipComponent, MrdChipModule, MrdDatePickerToggle, MrdDirectiveModule, MrdErrorComponent, MrdFlyOutCloseDirective, MrdFlyOutComponent, MrdFlyOutModule, MrdFormFieldComponent, MrdFormFieldModule, MrdGeoIconComponent, MrdGeoIconModule, MrdHintComponent, MrdIconComponent, MrdIconModule, MrdIconRegistryService, MrdInputComponent, MrdLabelComponent, MrdPrefixComponent, MrdProgressBarComponent, MrdProgressBarModule, MrdProgressSpinnerComponent, MrdProgressSpinnerModule, MrdSelectComponent, MrdSelectCustomTriggerComponent, MrdSelectOptionComponent, MrdSuffixComponent, MrdTabComponent, MrdTabGroupComponent, MrdTabsModule, MrdTooltipModule, ToolTipRendererDirective, colorAttribute, colorThemeAttribute, sizeAttribute, timeAttribute };
//# sourceMappingURL=mrd-core-ui.mjs.map
