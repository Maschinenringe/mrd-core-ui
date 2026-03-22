import { HttpClient } from '@angular/common/http';
import * as i0 from '@angular/core';
import { ErrorHandler, AfterViewInit, OnChanges, OnDestroy, EventEmitter, ElementRef, SimpleChanges, OnInit, ChangeDetectorRef, Renderer2, TemplateRef, InjectionToken, ViewRef, ViewContainerRef, QueryList, ComponentRef, Injector, AfterViewChecked, AfterContentInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { BasePushStrategyObject, ObservableValue, BaseObject, AccessableFormControl, AccessableFormArray } from 'mrd-core';
import * as i2 from '@angular/common';
import * as i16 from '@angular/cdk/overlay';
import { Overlay, OverlayPositionBuilder, OverlayRef, ConnectedPosition } from '@angular/cdk/overlay';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentType } from '@angular/cdk/portal';
import moment, { Moment } from 'moment';

interface MrdConfigModel {
    baseFont?: MrdBaseFont;
    baseColors: MrdBaseColor;
    button?: MrdButton;
    geoIcon?: MrdGeoIcon;
    formField?: {
        focusColor?: string;
        focusColorDark?: string;
        /** Wird aus focusColor errechnet, wenn nicht angegeben */
        focusColorOutline?: string;
        errorColor?: string;
        erroColorDark?: string;
        /** Wird aus errorColor errechnet, wenn nicht angegeben */
        errorColorOutline?: string;
        borderRadius?: string;
        borderRadiusRounded?: string;
        fill?: {
            backgroundColor?: string;
        };
        input?: {
            color?: string;
        };
    };
    checkbox?: MrdCheckbox;
    toggleSwitch?: MrdToggleSwitch;
}
interface MrdBaseFont {
    size?: string;
    family: string;
}
interface MrdBaseColor {
    primary?: string | MrdBaseColorTheme;
    accent?: string | MrdBaseColorTheme;
    warn?: string | MrdBaseColorTheme;
    disabled?: string | MrdBaseColorTheme;
}
interface MrdBaseColorButton {
    primary?: string | MrdBaseColorTheme;
    accent?: string | MrdBaseColorTheme;
    warn?: string | MrdBaseColorTheme;
    disabled?: MrdBaseColorTheme;
}
interface MrdBaseColorTheme {
    text: string;
    background: string;
    border?: string | MrdBorder;
}
interface MrdButton extends MrdBaseColorButton, MrdButtonAppearance {
    outline?: MrdButtonAppearance;
    flat?: MrdButtonAppearance;
    raised?: MrdButtonAppearance;
    icon?: MrdButtonAppearance;
    fab?: MrdButtonAppearance;
    miniFab?: MrdButtonAppearance;
    toggle?: MrdButtonAppearance;
}
interface MrdButtonAppearance extends MrdBaseColorButton {
    backgroundColor?: string;
    textLightColor?: string;
    textDarkColor?: string;
    hoverColor?: string;
    activeColor?: string;
    progressColor?: string;
    unselectedBgColor?: string;
    border?: string | MrdBorder;
    borderRadius?: string;
    fontSize?: string;
    fontFamily?: string;
    minHeight?: string;
    diameter?: string;
    iconSize?: string;
}
interface MrdBorder {
    width: string;
    style: string;
    color: string;
}
interface MrdGeoIcon {
    width?: string;
    height?: string;
    margin?: string;
    transitionTime?: string;
    mainColor?: string;
    mainSelectedColor?: string;
    overlayColor?: string;
    overlaySelectedColor?: string;
    backColor?: string;
    backSelectedColor?: string;
    mainOpacity?: number;
    mainSelectedOpacity?: number;
    overlayOpacity?: number;
    overlaySelectedOpacity?: number;
    backOpacity?: number;
    backSelectedOpacity?: number;
}
interface MrdCheckbox extends MrdBaseColor {
    fill?: {
        unselected?: MrdBaseColor;
        selected?: MrdBaseColor;
    };
    outline?: {
        unselected?: MrdBaseColor;
        selected?: MrdBaseColor;
    };
    checkboxSize?: string;
}
interface MrdToggleSwitch {
    width?: string;
    height?: string;
    bgColor?: string;
    bgNeutralColor?: string;
    knobColor?: string;
    knobNeutralColor?: string;
    bgDisabledColor?: string;
    knobDisabledColor?: string;
}

declare class ConfigUtil {
    private static config;
    private static customConfig;
    static setConfig(config: MrdConfigModel): void;
    static getConfig(): MrdConfigModel;
    private static extendObject;
    static getMostSpecificValue(entry: string[]): any;
    private static get baseConfig();
}

declare class ColorUtil {
    static isHexColor(color: string): boolean;
    static isRgbColor(color: string): boolean;
    static isRgbaColor(color: string): boolean;
    static hexToRgb(hex: string): {
        r: number;
        g: number;
        b: number;
    };
    static hexToRgba(hex: string): {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    static hexHasAlpha(hex: string): boolean;
    static rgbToHex(r: number, g: number, b: number, a?: number): string;
    static rgbaToHex(r: number, g: number, b: number, a: number): string;
    static rgbStringToRgba(rgb: string): {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    static rgbStringToHex(rgb: string): string;
    static rgbaStringToHex(rgba: string): string;
    static rgbaStringToRgb(rgba: string): {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    static shouldTextBeDark(color: string, debug?: boolean): boolean;
    static changeColorOpacity(color: string, opacity: number): string;
    static changeColorBrightnessPercent(color: string, percent: number): string;
}

declare function colorAttribute(value: string, fallbackValue?: string): string;
declare function colorThemeAttribute(value: string, fallbackValue?: string): string;

declare function sizeAttribute(value: string | number, fallbackValue?: string, defaultUnit?: string): string;

declare function timeAttribute(value: string | number, fallbackValue?: string, defaultUnit?: string): string;

/** Options that can be used to configure how an icon or the icons in an icon set are presented. */
interface IconOptions {
    /** View box to set on the icon. */
    viewBox?: string;
    /** Whether or not to fetch the icon or icon set using HTTP credentials. */
    withCredentials?: boolean;
}
declare class MrdIconRegistryService {
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

declare class HideIfTruncatedDirective implements AfterViewInit, OnChanges, OnDestroy {
    private elementRef;
    hideIfTruncated: boolean;
    checkChildrenForAttribute: boolean;
    hideOnTruncatedElement: HTMLElement;
    requiredHideAttribute: string;
    displayState: string;
    parentResizeElement: HTMLElement;
    hiddenChanged: EventEmitter<boolean>;
    private mutationObserver;
    private parentMutationObserver;
    private resizeObserver;
    private blockNextResizeEvent;
    private resizeTimeout;
    constructor(elementRef: ElementRef<HTMLElement>);
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HideIfTruncatedDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HideIfTruncatedDirective, "[hideIfTruncated]", never, { "hideIfTruncated": { "alias": "hideIfTruncated"; "required": false; }; "checkChildrenForAttribute": { "alias": "checkChildrenForAttribute"; "required": false; }; "hideOnTruncatedElement": { "alias": "hideOnTruncatedElement"; "required": false; }; "requiredHideAttribute": { "alias": "requiredHideAttribute"; "required": false; }; "displayState": { "alias": "displayState"; "required": false; }; "parentResizeElement": { "alias": "parentResizeElement"; "required": false; }; }, { "hiddenChanged": "hiddenChanged"; }, never, never, false, never>;
    static ngAcceptInputType_hideIfTruncated: unknown;
    static ngAcceptInputType_checkChildrenForAttribute: unknown;
}

declare class ToggleOnHoverDirective implements AfterViewInit, OnDestroy {
    private elementRef;
    toggleOnHover: string;
    deepToggleElementSearch: boolean;
    hoverElementParentDepth: number;
    hoverElement: HTMLElement;
    displayShowStyle: string;
    displayShowStyleToggleElement: string;
    private toggleElement;
    constructor(elementRef: ElementRef<HTMLElement>);
    ngAfterViewInit(): void;
    private mouseEnter;
    private mouseLeave;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleOnHoverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ToggleOnHoverDirective, "[toggleOnHover]", never, { "toggleOnHover": { "alias": "toggleOnHover"; "required": false; }; "deepToggleElementSearch": { "alias": "deepToggleElementSearch"; "required": false; }; "hoverElementParentDepth": { "alias": "hoverElementParentDepth"; "required": false; }; "hoverElement": { "alias": "hoverElement"; "required": false; }; "displayShowStyle": { "alias": "displayShowStyle"; "required": false; }; "displayShowStyleToggleElement": { "alias": "displayShowStyleToggleElement"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_deepToggleElementSearch: unknown;
    static ngAcceptInputType_hoverElementParentDepth: unknown;
}

/***
 * Limitiert die Eingabe einer Zahl auf x (default 2) Nachkommastellen.
 */
declare class DecimalNumberDirective implements OnChanges {
    private el;
    decimalNumber: boolean;
    nachkommastellen: number;
    private regex;
    private specialKeys;
    constructor(el: ElementRef);
    onKeyDown(event: KeyboardEvent): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DecimalNumberDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DecimalNumberDirective, "[decimalNumber]", never, { "decimalNumber": { "alias": "decimalNumber"; "required": false; }; "nachkommastellen": { "alias": "nachkommastellen"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_decimalNumber: unknown;
}

/**
 * Sorgt für die korrekte Eingabe von Uhrzeiten im Format HH:mm.
 */
declare class TimeInputDirective {
    timeInput: boolean;
    private specialKeys;
    private regex;
    constructor();
    onKeyDown(event: KeyboardEvent): void;
    private isValidTimeInput;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeInputDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TimeInputDirective, "[timeInput]", never, { "timeInput": { "alias": "timeInput"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_timeInput: unknown;
}

declare class MrdDirectiveModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdDirectiveModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MrdDirectiveModule, [typeof HideIfTruncatedDirective, typeof ToggleOnHoverDirective, typeof DecimalNumberDirective, typeof TimeInputDirective], never, [typeof HideIfTruncatedDirective, typeof ToggleOnHoverDirective, typeof DecimalNumberDirective, typeof TimeInputDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MrdDirectiveModule>;
}

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
declare class MrdButtonComponent extends BasePushStrategyObject implements OnInit, AfterViewInit, OnDestroy {
    protected cdr: ChangeDetectorRef;
    private renderer;
    elementRef: ElementRef<HTMLElement>;
    /**
     * Referenz auf das Text-Element des Buttons.
     *
     * @type {ElementRef<HTMLElement>}
     * @memberof MrdButtonComponent
     */
    mrdButtonTextContent: ElementRef<HTMLElement>;
    /**
     * Gibt an, ob der Button ein Icon-Button ist.
     *
     * Der Content des Buttons sollte nur ein Icon sein.
     * Der Button hat standardmäßig einen transparenten Hintergrund und die Farbe des Icons ist schwarz.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    icon: boolean;
    /**
     * Gibt an, ob der Button ein Raised-Button ist.
     *
     * Raised-Buttons haben einen Schatten.
     * Der Button hat standardmäßig einen weißen Hintergrund und die Textfarbe schwarz.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    raised: boolean;
    /**
     * Gibt an, ob der Button ein Outline-Button ist.
     *
     * Outline-Buttons haben standardmäßig einen transparenten Hintergrund und einen grauen Rand, sowie einen schwarzen Text.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    outline: boolean;
    /**
     * Gibt an, ob der Button ein Flat-Button ist.
     *
     * Flat-Buttons haben standardmäßig einen weißen Hintergrund und die Textfarbe ist schwarz.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    flat: boolean;
    /**
     * Gibt an, ob der Button ein Fab-Button ist.
     *
     * Fab-Buttons sind kreisförmige Buttons.
     * Standardmäßig haben sie einen weißen Hintergrund und die Iconfarbe ist schwarz, außerdem besitzen sie einen Schatten.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    fab: boolean;
    /**
     * Gibt an, ob der Button ein MiniFab-Button ist.
     *
     * MiniFab-Buttons sind kreisförmige Buttons von der Größe eines Icon-Buttons.
     * Standardmäßig haben sie einen weißen Hintergrund und die Iconfarbe ist schwarz, außerdem besitzen sie einen Schatten.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    miniFab: boolean;
    /**
     * Gibt an, ob der Button ein Toggle-Button ist.
     *
     * Toggle-Buttons sollten immer innerhalb einer Toggle-Button-Group verwendet werden.
     * Standardmäßig haben sie einen weißen Hintergrund und die Textfarbe ist schwarz, außerdem besitzen sie im selektierten Zustand einen Schatten.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    toggle: boolean;
    /**
     * Gibt an, ob der Button, als Toggle-Button, selektiert ist.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    toggleSelected: boolean;
    /**
     * Gibt an, ob der Button das Theme "primary" hat.
     *
     * Hierdurch wird die Hintergrundfarbe des Buttons auf die primäre Farbe des Themes gesetzt.
     *
     * @memberof MrdButtonComponent
     */
    primary: boolean;
    /**
     * Gibt an, ob der Button das Theme "accent" hat.
     *
     * Hierdurch wird die Hintergrundfarbe des Buttons auf die Akzentfarbe des Themes gesetzt.
     *
     * @memberof MrdButtonComponent
     */
    accent: boolean;
    /**
     * Gibt an, ob der Button das Theme "warn" hat.
     *
     * Hierdurch wird die Hintergrundfarbe des Buttons auf die Warnfarbe des Themes gesetzt.
     *
     * @memberof MrdButtonComponent
     */
    warn: boolean;
    /**
     * Gibt an, ob der Button deaktiviert ist.
     *
     * @memberof MrdButtonComponent
     */
    disabled: boolean;
    /**
     * Eine ObservableValue, die übergeben werden kann, um zu bestimmen,
     * ob der Button einen Ladebalken/Ladespinner anzeigen soll.
     *
     * @memberof MrdButtonComponent
     */
    loading: ObservableValue<boolean>;
    /**
     * Ein boolean, der bestimmt, ob der Button einen Ladebalken/Ladespinner anzeigen soll.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    isLoading: boolean;
    /**
     * Eine ObservableValue, die übergeben werden kann, um den Fortschritt des Ladebalkens/Ladespinners zu bestimmen.
     *
     * @type {ObservableValue<number>}
     * @memberof MrdButtonComponent
     */
    loadingProgress: ObservableValue<number>;
    /**
     * Setzt die Grundfarbe des Buttons.
     *
     * Diese wird je nach Style des Buttons als Hintergrundfarbe oder Textfarbe verwendet.
     *
     * Es können Hex-, RGB- oder RGBA-Werte, sowie "primary", "accent" oder "warn" angegeben werden.
     *
     * @memberof MrdButtonComponent
     */
    customTextColor: string;
    /**
     * Setzt die Hintergrundfarbe des Buttons.
     *
     * Es können Hex-, RGB- oder RGBA-Werte angegeben werden.
     *
     * @memberof MrdButtonComponent
     */
    customBgColor: string;
    /**
     * Gibt an, ob die benutzerdefinierte Textfarbe nicht durch ein defniertes Thema überschrieben werden soll.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    keepCustomTextColor: boolean;
    /**
     * Gibt an, ob die benutzerdefinierte Hintergrundfarbe nicht durch ein definiertes Thema überschrieben werden soll.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    keepCustomBgColor: boolean;
    /**
     * Setzt die Hintergrundfarbe des unselektierten Toggle-Buttons.
     *
     * Es können Hex-, RGB- oder RGBA-Werte angegeben werden.
     */
    customToggleUnselectedColor: string;
    /**
     * Setzt die Textfarbe des unselektierten Toggle-Buttons.
     *
     * Es können Hex-, RGB- oder RGBA-Werte angegeben werden.
     */
    customToggleUnselectedTextColor: string;
    /**
     * Setzt die Textfarbe des selektierten Toggle-Buttons.
     *
     * Es können Hex-, RGB- oder RGBA-Werte angegeben werden.
     */
    customToggleSelectedTextColor: string;
    /**
     * Setzt die Farbe des Ladebalkens/Ladespinners.
     *
     * Es können Hex-, RGB- oder RGBA-Werte angegeben werden.
     *
     * @memberof MrdButtonComponent
     */
    progressColor: string;
    /**
     * Gibt an, ob der Button-Text verschwindet, wenn er zu lang ist und ausgepunktet werden würde.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    collapse: boolean;
    /**
     * Gibt an, zu welchem Style der Button kollabieren soll.
     * Mögliche Werte: "icon", "fab", "miniFab"
     *
     * @memberof MrdButtonComponent
     */
    set collapseTo(value: string);
    get collapseTo(): string;
    private _collapseTo;
    /**
     * Sorgt dafür, dass der Button immer mindestens so breit ist, wie sein Inhalt.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    fitContent: boolean;
    /**
     * Gibt an, ob der Button einen Tooltip anzeigen soll.
     *
     * Der Tooltip-Text wird standardmäßig aus dem Inhalt des Buttons ohne durch [mrd-icon] gekennzeichnete Icons generiert.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    showTooltip: boolean;
    /**
     * Der Text des Tooltips.
     *
     * @type {string}
     * @memberof MrdButtonComponent
     */
    tooltipText: string;
    /**
     * Gibt an, ob der Tooltip nur angezeigt werden soll, wenn der Button-Text ausgepunktet wird.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    set tooltipIfTruncated(value: boolean);
    get tooltipIfTruncated(): boolean;
    private _tooltipIfTruncated;
    /**
     * Gibt an, ob der Tooltip nur angezeigt werden soll, wenn der Button collabiert ist.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    tooltipIfCollapsed: boolean;
    /**
     * Die Mindesthöhe des Buttons.
     *
     * Wird eine Zahl angegeben, wird diese als Pixelwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdButtonComponent
     */
    minHeight: string;
    /**
     * Die Schriftgröße des Buttons.
     *
     * Wird eine Zahl angegeben, wird diese als Pixelwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdButtonComponent
     */
    fontSize: string;
    /**
     * Die Schriftfamilie des Buttons.
     *
     * @type {string}
     * @memberof MrdButtonComponent
     */
    fontFamily: string;
    /**
     * Die Schriftdicke des Buttons.
     *
     * @type {string}
     * @memberof MrdButtonComponent
     */
    fontWeight: string;
    /**
     * Der Durchmesser für Icon-, Fab- und MiniFab-Buttons.
     *
     * Wird eine Zahl angegeben, wird diese als Pixelwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdButtonComponent
     */
    diameter: string;
    /**
     * Die Größe des Icons.
     *
     * Wird eine Zahl angegeben, wird diese als Pixelwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdButtonComponent
     */
    iconSize: string;
    /**
     * Gibt an, ob Icon des Buttons die volle Größe des Buttons einnehmen soll.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    fullIcon: boolean;
    /**
     * Der Radius der Ecken des Buttons.
     *
     * Wird eine Zahl angegeben, wird diese als Pixelwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdButtonComponent
     */
    borderRadius: string;
    /**
     * Die Farbe des Buttons, wenn er gehovert wird.
     *
     * Es können Hex-, RGB- oder RGBA-Werte angegeben werden.
     *
     * @type {string}
     * @memberof MrdButtonComponent
     */
    customHoverColor: string;
    /**
     * Die Farbe des Textes des Buttons, wenn er gehovert wird.
     *
     * Es können Hex-, RGB- oder RGBA-Werte angegeben werden.
     *
     * @type {string}
     * @memberof MrdButtonComponent
     */
    customHoverTextColor: string;
    /**
     * Der Wert des Buttons als Toggle-Button.
     *
     * @type {any}
     * @memberof MrdButtonComponent
     */
    value: any;
    /**
     * Das Klick-Event durch den Nutzer.
     *
     * @type {EventEmitter<Event>}
     * @memberof MrdButtonComponent
     */
    click: EventEmitter<Event>;
    /**
     * Die Konfiguration des Mrd-Buttons.
     *
     * @private
     * @type {MrdConfigModel}
     * @memberof MrdButtonComponent
     */
    private _config;
    private mouseEnterListener;
    private mouseLeaveListener;
    private uncollapsedAppearance;
    private buttonPrimary;
    private buttonAccent;
    private buttonWarn;
    private buttonDisabled;
    private buttonProgress;
    private textLightColor;
    private textDarkColor;
    bgColor: string;
    textColor: string;
    hoverColor: string;
    hoverTextColor: string;
    activeColor: string;
    disabledTextColor: string;
    disabledBgColor: string;
    toggleUnselectedColor: string;
    borderWidth: string;
    borderStyle: string;
    borderColor: string;
    isCollapsed: boolean;
    isHovered: boolean;
    constructor(cdr: ChangeDetectorRef, renderer: Renderer2, elementRef: ElementRef<HTMLElement>);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    updateStyle(): void;
    /**
     * Setzt die Standard-Styles anhand der Konfiguration und der gesetzten Attribute.
     *
     * @private
     * @memberof MrdButtonComponent
     */
    private initBaseStyle;
    /**
     * Callback, wenn sich der Collabs-Status des Buttons ändert.
     *
     * @param isCollapsed Gibt an, ob der Button kollabiert ist.
     */
    buttonCollapsed(isCollapsed: boolean): void;
    onClick(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdButtonComponent, "mrd-button", never, { "icon": { "alias": "icon-button"; "required": false; }; "raised": { "alias": "raised-button"; "required": false; }; "outline": { "alias": "outline-button"; "required": false; }; "flat": { "alias": "flat-button"; "required": false; }; "fab": { "alias": "fab-button"; "required": false; }; "miniFab": { "alias": "miniFab-button"; "required": false; }; "toggle": { "alias": "toggle-button"; "required": false; }; "toggleSelected": { "alias": "selected"; "required": false; }; "primary": { "alias": "primary"; "required": false; }; "accent": { "alias": "accent"; "required": false; }; "warn": { "alias": "warn"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "isLoading": { "alias": "isLoading"; "required": false; }; "loadingProgress": { "alias": "loadingProgress"; "required": false; }; "customTextColor": { "alias": "color"; "required": false; }; "customBgColor": { "alias": "backgroundColor"; "required": false; }; "keepCustomTextColor": { "alias": "keepCustomTextColor"; "required": false; }; "keepCustomBgColor": { "alias": "keepCustomBgColor"; "required": false; }; "customToggleUnselectedColor": { "alias": "customToggleUnselectedColor"; "required": false; }; "customToggleUnselectedTextColor": { "alias": "customToggleUnselectedTextColor"; "required": false; }; "customToggleSelectedTextColor": { "alias": "customToggleSelectedTextColor"; "required": false; }; "progressColor": { "alias": "progressColor"; "required": false; }; "collapse": { "alias": "collapse"; "required": false; }; "collapseTo": { "alias": "collapseTo"; "required": false; }; "fitContent": { "alias": "fit-content"; "required": false; }; "showTooltip": { "alias": "tooltip"; "required": false; }; "tooltipText": { "alias": "tooltipText"; "required": false; }; "tooltipIfTruncated": { "alias": "tooltipIfTruncated"; "required": false; }; "tooltipIfCollapsed": { "alias": "tooltipIfCollapsed"; "required": false; }; "minHeight": { "alias": "minHeight"; "required": false; }; "fontSize": { "alias": "fontSize"; "required": false; }; "fontFamily": { "alias": "fontFamily"; "required": false; }; "fontWeight": { "alias": "fontWeight"; "required": false; }; "diameter": { "alias": "diameter"; "required": false; }; "iconSize": { "alias": "iconSize"; "required": false; }; "fullIcon": { "alias": "fullIcon"; "required": false; }; "borderRadius": { "alias": "borderRadius"; "required": false; }; "customHoverColor": { "alias": "customHoverColor"; "required": false; }; "customHoverTextColor": { "alias": "customHoverTextColor"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "click": "click"; }, never, ["mrd-icon:not([icon-end]), [mrd-icon]:not([icon-end])", ":not([mrd-icon]):not(mrd-icon)", "mrd-icon[icon-end], [mrd-icon][icon-end]"], false, never>;
    static ngAcceptInputType_icon: unknown;
    static ngAcceptInputType_raised: unknown;
    static ngAcceptInputType_outline: unknown;
    static ngAcceptInputType_flat: unknown;
    static ngAcceptInputType_fab: unknown;
    static ngAcceptInputType_miniFab: unknown;
    static ngAcceptInputType_toggle: unknown;
    static ngAcceptInputType_toggleSelected: unknown;
    static ngAcceptInputType_primary: unknown;
    static ngAcceptInputType_accent: unknown;
    static ngAcceptInputType_warn: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_isLoading: unknown;
    static ngAcceptInputType_customTextColor: string;
    static ngAcceptInputType_customBgColor: string;
    static ngAcceptInputType_keepCustomTextColor: unknown;
    static ngAcceptInputType_keepCustomBgColor: unknown;
    static ngAcceptInputType_customToggleUnselectedColor: string;
    static ngAcceptInputType_customToggleUnselectedTextColor: string;
    static ngAcceptInputType_customToggleSelectedTextColor: string;
    static ngAcceptInputType_progressColor: string;
    static ngAcceptInputType_collapse: unknown;
    static ngAcceptInputType_fitContent: unknown;
    static ngAcceptInputType_showTooltip: unknown;
    static ngAcceptInputType_tooltipIfTruncated: unknown;
    static ngAcceptInputType_tooltipIfCollapsed: unknown;
    static ngAcceptInputType_minHeight: string | number;
    static ngAcceptInputType_fontSize: string | number;
    static ngAcceptInputType_diameter: string | number;
    static ngAcceptInputType_iconSize: string | number;
    static ngAcceptInputType_fullIcon: unknown;
    static ngAcceptInputType_borderRadius: string | number;
    static ngAcceptInputType_customHoverColor: string;
    static ngAcceptInputType_customHoverTextColor: string;
}

declare class MrdProgressBarComponent implements AfterViewInit {
    private cdr;
    private config;
    set mode(mode: 'determinate' | 'indeterminate');
    get mode(): 'determinate' | 'indeterminate';
    private _mode;
    set value(value: number);
    get value(): number;
    private _value;
    set color(color: string);
    get color(): string;
    private _color;
    private _bgColor;
    get bgColor(): string;
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdProgressBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdProgressBarComponent, "mrd-progress-bar", never, { "mode": { "alias": "mode"; "required": false; }; "value": { "alias": "value"; "required": false; }; "color": { "alias": "color"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_value: unknown;
}

declare class MrdProgressBarModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdProgressBarModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MrdProgressBarModule, [typeof MrdProgressBarComponent], [typeof i2.CommonModule], [typeof MrdProgressBarComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MrdProgressBarModule>;
}

declare class MrdProgressSpinnerComponent implements AfterViewInit, OnDestroy {
    private config;
    mode: 'determinate' | 'indeterminate';
    set color(color: string);
    get color(): string;
    private _color;
    get value(): number;
    set value(v: number);
    private _value;
    get diameter(): number;
    set diameter(size: number);
    private _diameter;
    get strokeWidth(): number;
    set strokeWidth(value: number);
    private _strokeWidth;
    showLabel: boolean;
    set labelText(label: string);
    get labelText(): string;
    private _labelText;
    dots: string;
    private interval;
    get circleRadius(): number;
    get strokeCircumference(): number;
    get strokeDashOffset(): number;
    get circleStrokeWidth(): number;
    get viewBox(): string;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdProgressSpinnerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdProgressSpinnerComponent, "mrd-progress-spinner", never, { "mode": { "alias": "mode"; "required": false; }; "color": { "alias": "color"; "required": false; }; "value": { "alias": "value"; "required": false; }; "diameter": { "alias": "diameter"; "required": false; }; "strokeWidth": { "alias": "strokeWidth"; "required": false; }; "showLabel": { "alias": "showLabel"; "required": false; }; "labelText": { "alias": "labelText"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_value: unknown;
    static ngAcceptInputType_diameter: unknown;
    static ngAcceptInputType_strokeWidth: unknown;
    static ngAcceptInputType_showLabel: unknown;
}

declare class MrdProgressSpinnerModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdProgressSpinnerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MrdProgressSpinnerModule, [typeof MrdProgressSpinnerComponent], [typeof i2.CommonModule], [typeof MrdProgressSpinnerComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MrdProgressSpinnerModule>;
}

declare class MrdTooltipComponent implements OnInit {
    /**
     * This is simple text which is to be shown in the tooltip
     */
    text: string;
    /**
     * This provides finer control on the content to be visible on the tooltip
     * This template will be injected in ToolTipRenderer directive in the consumer template
     * <ng-template #template>
     *  content.....
     * </ng-template>
     */
    contentTemplate: TemplateRef<any>;
    defaultStyle: boolean;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdTooltipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdTooltipComponent, "mrd-tooltip", never, { "text": { "alias": "text"; "required": false; }; "contentTemplate": { "alias": "contentTemplate"; "required": false; }; "defaultStyle": { "alias": "defaultStyle"; "required": false; }; }, {}, never, never, false, never>;
}

declare class ToolTipRendererDirective {
    private _overlay;
    private _overlayPositionBuilder;
    private _elementRef;
    /**
     * Gibt an, ob der Tooltip angezeigt werden soll
     *
     * @memberof ToolTipRendererDirective
     */
    set showToolTip(value: any);
    private _showToolTip;
    /**
     * Der Text, der im Tooltip angezeigt werden soll
     *
     * @type {string}
     * @memberof ToolTipRendererDirective
     */
    text: string;
    /**
     * Ein eigenes Template, das im Tooltip angezeigt werden soll
     *
     * @type {TemplateRef<any>}
     * @memberof ToolTipRendererDirective
     */
    contentTemplate: TemplateRef<any>;
    /**
     * Gibt an, ob der Standard-Style des Tooltips verwendet werden soll.
     *
     * Standard: true
     *
     * @type {boolean}
     * @memberof ToolTipRendererDirective
     */
    defaultStyle: boolean;
    /**
     * Die Position, an der der Tooltip angezeigt werden soll.
     *
     * Standard: 'bottom'
     *
     * @type {('top' | 'bottom' | 'left' | 'right')}
     * @memberof ToolTipRendererDirective
     */
    position: 'top' | 'bottom' | 'left' | 'right';
    /**
     * Gibt an, ob der Tooltip nur angezeigt werden soll, wenn der Text abgeschnitten wird.
     *
     * Standard: false
     *
     * @type {boolean}
     * @memberof ToolTipRendererDirective
     */
    showIfTruncated: boolean;
    /**
     * Wenn gesetzt, wird der Tooltip nur angezeigt, wenn der Inhalt des Elements abgeschnitten wird
     *
     * @type {HTMLElement}
     * @memberof ToolTipRendererDirective
     */
    showOnTruncatedElement: HTMLElement;
    /**
     * Gibt an, ob der Tooltip geöffnet bleiben soll, wenn der Mauszeiger über dem Tooltip ist.
     *
     * Standard: false
     *
     * @type {boolean}
     * @memberof ToolTipRendererDirective
     */
    keepOnTooltipHover: boolean;
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
    showDelay: number;
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
    hideDelay: number;
    private _overlayRef;
    private disabled;
    private tooltipRef;
    private origin;
    constructor(_overlay: Overlay, _overlayPositionBuilder: OverlayPositionBuilder, _elementRef: ElementRef);
    ngOnInit(): void;
    /**
     * This method will be called whenever the mouse enters in the Host element
     * i.e. where this directive is applied
     * This method will show the tooltip by instantiating the CustomToolTipComponent and attaching to the overlay
     */
    show(): void;
    private isMouseOverTooltip;
    /**
     * This method will be called when the mouse goes out of the host element
     * i.e. where this directive is applied
     * This method will close the tooltip by detaching the overlay from the view
     */
    hide(event?: MouseEvent): void;
    /**
     * Destroy lifecycle event handler
     * This method will make sure to close the tooltip
     */
    ngOnDestroy(): void;
    /**
     * This method will close the tooltip by detaching the component from the overlay
     */
    private closeToolTip;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolTipRendererDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ToolTipRendererDirective, "[mrdToolTip]", ["mrdToolTip"], { "showToolTip": { "alias": "showToolTip"; "required": false; }; "text": { "alias": "mrdToolTip"; "required": false; }; "contentTemplate": { "alias": "contentTemplate"; "required": false; }; "defaultStyle": { "alias": "defaultStyle"; "required": false; }; "position": { "alias": "position"; "required": false; }; "showIfTruncated": { "alias": "showIfTruncated"; "required": false; }; "showOnTruncatedElement": { "alias": "showOnTruncatedElement"; "required": false; }; "keepOnTooltipHover": { "alias": "keepOnTooltipHover"; "required": false; }; "showDelay": { "alias": "showDelay"; "required": false; }; "hideDelay": { "alias": "hideDelay"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_showIfTruncated: unknown;
    static ngAcceptInputType_keepOnTooltipHover: unknown;
    static ngAcceptInputType_showDelay: unknown;
    static ngAcceptInputType_hideDelay: unknown;
}

declare class MrdTooltipModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdTooltipModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MrdTooltipModule, [typeof MrdTooltipComponent, typeof ToolTipRendererDirective], [typeof i2.CommonModule], [typeof ToolTipRendererDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MrdTooltipModule>;
}

/**
 * Dieses Modul stellt den Mrd-Button zur Verfügung.
 *
 * @export MrdButtonComponent
 * @class MrdButtonModule
 */
declare class MrdButtonModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdButtonModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MrdButtonModule, [typeof MrdButtonComponent], [typeof i2.CommonModule, typeof MrdProgressBarModule, typeof MrdProgressSpinnerModule, typeof MrdTooltipModule, typeof MrdDirectiveModule], [typeof MrdButtonComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MrdButtonModule>;
}

/**
 * Injection token used to provide the current location to `MatIcon`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * @docs-private
 */
declare const MRD_ICON_LOCATION: InjectionToken<MrdIconLocation>;
/**
 * Stubbed out location for `MatIcon`.
 * @docs-private
 */
interface MrdIconLocation {
    getPathname: () => string;
}
/** @docs-private */
declare function MRD_ICON_LOCATION_FACTORY(): MrdIconLocation;
declare class MrdIconComponent {
    private _elementRef;
    private _location;
    private _errorHandler;
    private _iconRegistry;
    /** Name of the icon in the SVG icon set. */
    get svgIcon(): string;
    set svgIcon(value: string);
    private _svgIcon;
    _svgName: string | null;
    _svgNamespace: string | null;
    /** Keeps track of the current page path. */
    private _previousPath?;
    /** Keeps track of the elements and attributes that we've prefixed with the current path. */
    private _elementsWithExternalReferences?;
    /** Subscription to the current in-progress SVG icon request. */
    private _currentIconFetch;
    constructor(_elementRef: ElementRef<HTMLElement>, _location: MrdIconLocation, _errorHandler: ErrorHandler, _iconRegistry: MrdIconRegistryService);
    private _setSvgElement;
    private _clearSvgElement;
    /**
     * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
     * reference. This is required because WebKit browsers require references to be prefixed with
     * the current path, if the page has a `base` tag.
     */
    private _prependPathToReferences;
    /**
     * Caches the children of an SVG element that have `url()`
     * references that we need to prefix with the current path.
     */
    private _cacheChildrenWithExternalReferences;
    /** Sets a new SVG icon with a particular name. */
    private _updateSvgIcon;
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
    private _splitIconName;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdIconComponent, "mrd-icon", never, { "svgIcon": { "alias": "svgIcon"; "required": false; }; }, {}, never, ["*"], false, never>;
}

/**
 * Dieses Modul stellt den Mrd-Icon zur Verfügung.
 *
 * @export MrdIconComponent
 * @class MrdIconModule
 */
declare class MrdIconModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdIconModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MrdIconModule, [typeof MrdIconComponent], [typeof i2.CommonModule], [typeof MrdIconComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MrdIconModule>;
}

declare class MrdTabComponent {
    private cdr;
    readonly tr: TemplateRef<any>;
    _implicitContent: TemplateRef<any>;
    set label(value: string);
    get label(): string;
    private _label;
    private _embeddedViewRef;
    get content(): ViewRef | null;
    /**
     * Zero based index of the tab
     *
     * @memberof MrdTabComponent
     */
    set index(value: number);
    get index(): number;
    private _index;
    set active(value: boolean);
    get active(): boolean;
    private _active;
    preserveContent: boolean;
    constructor(cdr: ChangeDetectorRef, tr: TemplateRef<any>);
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdTabComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdTabComponent, "[mrdTab]", never, { "label": { "alias": "mrdTab"; "required": false; }; "preserveContent": { "alias": "mrdTabPreserveContent"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_preserveContent: unknown;
}

declare class MatTabBodyPortal implements OnInit {
    private viewContainerRef;
    private _host;
    /** Subscription to events for when the tab body begins centering. */
    private _centeringSub;
    /** Subscription to events for when the tab body finishes leaving from center position. */
    private _leavingSub;
    constructor(viewContainerRef: ViewContainerRef, _host: MrdTabBodyComponent);
    /** Set initial visibility or set up subscription for changing visibility. */
    ngOnInit(): void;
    /** Clean up centering subscription. */
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatTabBodyPortal, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatTabBodyPortal, "[mrdTabBodyHost]", never, {}, {}, never, never, false, never>;
}
declare class MrdTabBodyComponent {
    private cdr;
    set content(value: ViewRef);
    get content(): ViewRef;
    private _content;
    set index(value: number);
    get index(): number;
    private _index;
    set active(value: boolean);
    get active(): boolean;
    private _active;
    preserveContent: boolean;
    private hideTimeout;
    _isHidden: EventEmitter<boolean>;
    _goingToActive: EventEmitter<boolean>;
    set translate(value: number | string);
    get translate(): string;
    private _translate;
    set hidden(value: boolean);
    get hidden(): boolean;
    private _hidden;
    constructor(cdr: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdTabBodyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdTabBodyComponent, "mrd-tab-body", never, { "content": { "alias": "content"; "required": false; }; "index": { "alias": "index"; "required": false; }; "active": { "alias": "active"; "required": false; }; "preserveContent": { "alias": "preserveContent"; "required": false; }; "hidden": { "alias": "hidden"; "required": false; }; }, { "_isHidden": "_isHidden"; "_goingToActive": "_goingToActive"; }, never, never, false, never>;
    static ngAcceptInputType_preserveContent: unknown;
}

declare class MrdTabGroupComponent extends BaseObject implements AfterViewInit {
    private cdr;
    private router;
    private route;
    tabs: QueryList<MrdTabComponent>;
    tabBodys: QueryList<MrdTabBodyComponent>;
    tabHeader: QueryList<ElementRef>;
    rounded: boolean;
    labelsFit: boolean;
    noHeader: boolean;
    queryParameterActive: string;
    set headerHeight(value: number);
    get headerHeight(): number;
    private _headerHeight;
    set selectedIndex(value: number);
    get selectedIndex(): number;
    private _selectedIndex;
    changeTab: ObservableValue<number>;
    selectedTabChanged: EventEmitter<MrdTabComponent>;
    selectedTabIndexChanged: EventEmitter<number>;
    tabUnderlineLeft: number;
    tabUnderlineWidth: number;
    private activeIndex;
    private activeTab;
    private activeTabBody;
    constructor(cdr: ChangeDetectorRef, router: Router, route: ActivatedRoute);
    ngAfterViewInit(): void;
    activateTab(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdTabGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdTabGroupComponent, "mrd-tab-group", never, { "rounded": { "alias": "rounded"; "required": false; }; "labelsFit": { "alias": "labelsFit"; "required": false; }; "noHeader": { "alias": "noHeader"; "required": false; }; "queryParameterActive": { "alias": "queryParameterActive"; "required": false; }; "headerHeight": { "alias": "headerHeight"; "required": false; }; "selectedIndex": { "alias": "selectedIndex"; "required": false; }; "changeTab": { "alias": "changeTab"; "required": false; }; }, { "selectedTabChanged": "selectedTabChanged"; "selectedTabIndexChanged": "selectedTabIndexChanged"; }, ["tabs"], never, false, never>;
    static ngAcceptInputType_rounded: unknown;
    static ngAcceptInputType_labelsFit: unknown;
    static ngAcceptInputType_noHeader: unknown;
}

declare class MrdTabsModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdTabsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MrdTabsModule, [typeof MrdTabGroupComponent, typeof MrdTabComponent, typeof MrdTabBodyComponent, typeof MatTabBodyPortal], [typeof i2.CommonModule], [typeof MrdTabGroupComponent, typeof MrdTabComponent, typeof MrdTabBodyComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MrdTabsModule>;
}

/**
 * Komponente für die Darstellung von Geo-Icons (Schlagzeichnungen).
 *
 * @class MrdGeoIconComponent
 * @implements {AfterViewInit}
 */
declare class MrdGeoIconComponent {
    private static _config;
    /**
     * Breite des Icons.
     *
     * Wird eine Zahl übergeben, wird diese als Pixelwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdGeoIconComponent
     */
    width: string;
    /**
     * Höhe des Icons.
     *
     * Wird eine Zahl übergeben, wird diese als Pixelwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdGeoIconComponent
     */
    height: string;
    /**
     * Margin um das Icon.
     *
     * Wird eine Zahl übergeben, wird diese als Pixelwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdGeoIconComponent
     */
    margin: string;
    /**
     * Übergangszeit für Farbwechsel (Selektiert <-> nicht selektiert).
     *
     * Wird eine Zahl übergeben, wird diese als Sekundenwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdGeoIconComponent
     */
    transitionTime: string;
    /**
     * Hauptfarbe des Icons.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    mainColor: string;
    /**
     * Hauptfarbe des Icons, wenn es selektiert ist.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    mainSelectedColor: string;
    /**
     * Deckkraft der Hauptfarbe des Icons.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    mainOpacity: number;
    /**
     * Deckkraft der Hauptfarbe des Icons, wenn es selektiert ist.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    mainSelectedOpacity: number;
    /**
     * Farbe der 2. Ebene des Icons.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    overlayColor: string;
    /**
     * Farbe der 2. Ebene des Icons, wenn es selektiert ist.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    overlaySelectedColor: string;
    /**
     * Deckkraft der 2. Ebene des Icons.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    overlayOpacity: number;
    /**
     * Deckkraft der 2. Ebene des Icons, wenn es selektiert ist.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    overlaySelectedOpacity: number;
    /**
     * Hintergrundfarbe des Icons, wenn es eine zweite Ebene gibt.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    backColor: string;
    /**
     * Hintergrundfarbe des Icons, wenn es eine zweite Ebene gibt und diese selektiert ist.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    backSelectedColor: string;
    /**
     * Deckkraft des Hintergrunds des Icons.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    backOpacity: number;
    /**
     * Deckkraft des Hintergrunds des Icons, wenn es selektiert ist.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    backSelectedOpacity: number;
    /**
     * Gibt an, ob das Icon selektiert ist.
     *
     * @type {boolean}
     * @memberof MrdGeoIconComponent
     */
    isSelected: boolean;
    /**
     * Daten für die Basis des Icons.
     *
     * @type {any[]}
     * @memberof MrdGeoIconComponent
     */
    set baseData(value: any[]);
    get baseData(): any[];
    private _baseData;
    /**
     * Daten für die 2. Ebene des Icons.
     *
     * @type {any[]}
     * @memberof MrdGeoIconComponent
     */
    set overlayData(value: any[]);
    get overlayData(): any[];
    /**
     * Gibt an, ob das Icon eine 2. Ebene hat.
     *
     * @type {boolean}
     * @memberof MrdGeoIconComponent
     */
    hasOverlay: boolean;
    /**
     * Beinhaltet die Daten der ersten Ebene des Icons.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    base: string;
    /**
     * Beinhaltet die Daten der zweiten Ebene des Icons.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    overlay: string;
    viewBox: string;
    private getPathString;
    mercEncode(lat: any, lng: any, w: any, h: any): number[];
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdGeoIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdGeoIconComponent, "mrd-geo-icon", never, { "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "margin": { "alias": "margin"; "required": false; }; "transitionTime": { "alias": "transitionTime"; "required": false; }; "mainColor": { "alias": "mainColor"; "required": false; }; "mainSelectedColor": { "alias": "mainSelectedColor"; "required": false; }; "mainOpacity": { "alias": "mainOpacity"; "required": false; }; "mainSelectedOpacity": { "alias": "mainSelectedOpacity"; "required": false; }; "overlayColor": { "alias": "overlayColor"; "required": false; }; "overlaySelectedColor": { "alias": "overlaySelectedColor"; "required": false; }; "overlayOpacity": { "alias": "overlayOpacity"; "required": false; }; "overlaySelectedOpacity": { "alias": "overlaySelectedOpacity"; "required": false; }; "backColor": { "alias": "backColor"; "required": false; }; "backSelectedColor": { "alias": "backSelectedColor"; "required": false; }; "backOpacity": { "alias": "backOpacity"; "required": false; }; "backSelectedOpacity": { "alias": "backSelectedOpacity"; "required": false; }; "isSelected": { "alias": "isSelected"; "required": false; }; "baseData": { "alias": "baseData"; "required": false; }; "overlayData": { "alias": "overlayData"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_width: any;
    static ngAcceptInputType_height: any;
    static ngAcceptInputType_margin: any;
    static ngAcceptInputType_transitionTime: any;
    static ngAcceptInputType_mainColor: string;
    static ngAcceptInputType_mainSelectedColor: string;
    static ngAcceptInputType_mainOpacity: any;
    static ngAcceptInputType_mainSelectedOpacity: any;
    static ngAcceptInputType_overlayColor: string;
    static ngAcceptInputType_overlaySelectedColor: string;
    static ngAcceptInputType_overlayOpacity: any;
    static ngAcceptInputType_overlaySelectedOpacity: any;
    static ngAcceptInputType_backColor: string;
    static ngAcceptInputType_backSelectedColor: string;
    static ngAcceptInputType_backOpacity: any;
    static ngAcceptInputType_backSelectedOpacity: any;
    static ngAcceptInputType_isSelected: unknown;
}

declare class MrdGeoIconModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdGeoIconModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MrdGeoIconModule, [typeof MrdGeoIconComponent], [typeof i2.CommonModule], [typeof MrdGeoIconComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MrdGeoIconModule>;
}

/**
 * Interface für die Referenz auf ein FlyOut.
 *
 * @interface MrdFlyOutComponentRef
 */
interface MrdFlyOutComponentRef {
    /**
     * Der Identifier des FlyOuts
     *
     * @type {string}
     * @memberof MrdFlyOutComponentRef
     */
    identifier: string;
    /**
     * Die Referenz auf das Overlay, in dem das FlyOut liegt
     *
     * @type {OverlayRef}
     * @memberof MrdFlyOutComponentRef
     */
    overlayRef: OverlayRef;
    /**
     * Die Referenz auf die MrdFlyOutComponent
     *
     * @type {ComponentRef<MrdFlyOutComponent>}
     * @memberof MrdFlyOutComponentRef
     */
    componentRef: ComponentRef<MrdFlyOutComponent>;
    /**
     * Die Referenz auf die in das FlyOut geladene Komponente
     *
     * @type {ComponentRef<any>}
     * @memberof MrdFlyOutComponentRef
     */
    contentRef: ComponentRef<any>;
    /**
     * Das vom FlyOut ausgelöste Event, wenn das FlyOut geöffnet wurde
     *
     * @type {EventEmitter<void>}
     * @memberof MrdFlyOutComponentRef
     */
    afterOpened?: EventEmitter<void>;
    /**
     * Das vom FlyOut ausgelöste Event, wenn das FlyOut geschlossen wird.
     * Gibt einen Wert zurück, wenn über die MrdFlyOutCloseDirective ein Wert übergeben wurde.
     *
     * @type {EventEmitter<any>}
     * @memberof MrdFlyOutComponentRef
     */
    onClose?: EventEmitter<any>;
    /**
     * Das vom FlyOut ausgelöste Event, wenn das FlyOut geschlossen wurde.
     * Gibt einen Wert zurück, wenn über die MrdFlyOutCloseDirective ein Wert übergeben wurde.
     *
     * @type {EventEmitter<any>}
     * @memberof MrdFlyOutComponentRef
     */
    afterClosed?: EventEmitter<any>;
}

/**
 * Das Interface für die Konfiguration der MrdFlyOutComponent.
 *
 * @interface MrdFlyOutConfig
 */
interface MrdFlyOutConfig {
    /**
     * Daten, die an die Komponente übergeben werden, die im FlyOut eingebettet ist.
     *
     * @type {*}
     * @memberof MrdFlyOutConfig
     */
    data?: any;
    /**
     * Die Richtung, aus der das FlyOut einfliegt.
     * Default: 'bottom'
     *
     * @type {('top' | 'bottom' | 'left' | 'right')}
     * @memberof MrdFlyOutConfig
     */
    flyInFrom?: 'top' | 'bottom' | 'left' | 'right';
    /**
     * Gibt an, ob das FlyOut beim Klick auf den Hintergrund nicht geschlossen wird.
     * Default: false;
     *
     * @type {boolean}
     * @memberof MrdFlyOutConfig
     */
    disableCloseOnBackdrop?: boolean;
    /**
     * Die Farbe des Hintergrunds.
     * Default: 'rgba(0, 0, 0, 0.5)'
     *
     * @type {string}
     * @memberof MrdFlyOutConfig
     */
    backdropColor?: string;
    /**
     * Gibt an, ob der Standard-Schließen-Button nicht angezeigt wird.
     * Default: false
     *
     * @type {boolean}
     * @memberof MrdFlyOutConfig
     */
    hideDefaultCloseButton?: boolean;
    width?: string;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    padding?: string;
    borderRadius?: string;
    backgroundColor?: string;
    transitionTime?: string;
    centered?: boolean;
}

/**
 * Der Service, um FlyOuts zu öffnen und zu schließen.
 *
 * @export
 * @class FlyOutService
 */
declare class FlyOutService {
    private overlay;
    private injector;
    /**
     * Die Map, die die offenen FlyOuts beinhaltet.
     *
     * @private
     * @type {Map<string, MrdFlyOutComponentRef>}
     * @memberof FlyOutService
     */
    private overlayMap;
    constructor(overlay: Overlay, injector: Injector);
    /**
     * Öffnet ein FlyOut mit der übergebenen Komponente und optionalen Konfiguration.
     *
     * @param {ComponentType<any>} component
     * @param {MrdFlyOutConfig} [config] (optional)
     * @return {MrdFlyOutComponentRef}
     * @memberof FlyOutService
     */
    open(component: ComponentType<any>, config?: MrdFlyOutConfig): MrdFlyOutComponentRef;
    /**
     * Schließt das FlyOut mit der übergebenen ID.
     *
     * @param {string} id
     * @memberof FlyOutService
     */
    close(id: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlyOutService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FlyOutService>;
}
/**
 * Der Service, um Daten an ein FlyOut zu übergeben.
 *
 * @class FlyOutData
 */
declare class FlyOutData {
    data: {};
    static ɵfac: i0.ɵɵFactoryDeclaration<FlyOutData, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FlyOutData>;
}

/**
 * Diese Komponente stellt ein FlyOut dar, das von oben nach unten, von unten nach oben, von links nach rechts oder von rechts nach links einfliegt.
 *
 * @export
 * @class MrdFlyOutComponent
 * @extends {BaseObject}
 * @implements {AfterViewInit}
 */
declare class MrdFlyOutComponent extends BaseObject implements AfterViewInit {
    protected cdr: ChangeDetectorRef;
    protected flyOutService: FlyOutService;
    container: ElementRef<HTMLElement>;
    /**
     * Die Referenz auf das Content-Element, in das die eingebettete Komponente geladen wird.
     *
     * @type {ViewContainerRef}
     * @memberof MrdFlyOutComponent
     */
    content: ViewContainerRef;
    /**
     * Setzt die Konfiguration des FlyOuts.
     *
     * @memberof MrdFlyOutComponent
     */
    set config(value: MrdFlyOutConfig);
    /**
     * Setzt die Richtung, aus der das FlyOut einfliegt.
     * Default: 'bottom'
     *
     * @memberof MrdFlyOutComponent
     */
    set flyInFrom(value: 'top' | 'bottom' | 'left' | 'right');
    /**
     * Gibt an, ob der Standard-Schließen-Button nicht angezeigt wird.
     * Default: false
     *
     * @type {boolean}
     * @memberof MrdFlyOutComponent
     */
    hideDefaultCloseButton: boolean;
    /**
     * Gibt an, ob das FlyOut beim Klick auf den Hintergrund nicht geschlossen wird.
     * Default: false;
     *
     * @type {boolean}
     * @memberof MrdFlyOutComponent
     */
    disableClose: boolean;
    /**
     * Gibt an, ob das FlyOut beim Drücken der Escape-Taste geschlossen wird.
     * Default: true;
     *
     * @type {boolean}
     * @memberof MrdFlyOutComponent
     */
    closeOnEsc: boolean;
    /**
     * Die Farbe des Hintergrunds.
     * Default: 'rgba(0, 0, 0, 0.5)'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    backdropColor: string;
    /**
     * Die Breite des FlyOuts.
     * Default: 'fit-content'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    width: string;
    /**
     * Die maximale Breite des FlyOuts.
     * Default: '95vw'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    maxWidth: string;
    /**
     * Die Höhe des FlyOuts.
     * Default: 'fit-content'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    height: string;
    /**
     * Die maximale Höhe des FlyOuts.
     * Default: '95vh'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    maxHeight: string;
    /**
     * Das Padding des FlyOuts zum Rand.
     * Default: '1em'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    padding: string;
    /**
     * Der Radius der Ecken des FlyOuts.
     * Default: '20px'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    borderRadius: string;
    /**
     * Die Hintergrundfarbe des FlyOuts.
     * Default: '#fff'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    backgroundColor: string;
    /**
     * Die Zeit, die das FlyOut benötigt, um zu öffnen oder zu schließen.
     * Default: '500ms'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    transitionTime: string;
    /**
     * Das vom FlyOut ausgelöste Event, wenn das FlyOut geöffnet wurde.
     *
     * @type {EventEmitter<void>}
     * @memberof MrdFlyOutComponent
     */
    afterOpened: EventEmitter<void>;
    /**
     * Das vom FlyOut ausgelöste Event, wenn das FlyOut geschlossen wird.
     * Gibt einen Wert zurück, wenn über die MrdFlyOutCloseDirective ein Wert übergeben wurde.
     *
     * @type {EventEmitter<any>}
     * @memberof MrdFlyOutComponent
     */
    onClose: EventEmitter<any>;
    /**
     * Das vom FlyOut ausgelöste Event, wenn das FlyOut geschlossen wurde.
     * Gibt einen Wert zurück, wenn über die MrdFlyOutCloseDirective ein Wert übergeben wurde.
     *
     * @type {EventEmitter<any>}
     * @memberof MrdFlyOutComponent
     */
    afterClosed: EventEmitter<any>;
    /**
     * Gibt an, ob das FlyOut von oben nach unten einfliegt.
     *
     * @type {boolean}
     * @memberof MrdFlyOutComponent
     */
    topDown: boolean;
    /**
     * Gibt an, ob das FlyOut von unten nach oben einfliegt.
     *
     * @type {boolean}
     * @memberof MrdFlyOutComponent
     */
    bottomUp: boolean;
    /**
     * Gibt an, ob das FlyOut von links nach rechts einfliegt.
     *
     * @type {boolean}
     * @memberof MrdFlyOutComponent
     */
    leftRight: boolean;
    /**
     * Gibt an, ob das FlyOut von rechts nach links einfliegt.
     *
     * @type {boolean}
     * @memberof MrdFlyOutComponent
     */
    rightLeft: boolean;
    centered: boolean;
    /**
     * Die ID des Overlays.
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    overlayId: string;
    /**
     * Der ObservableValue, der den Zustand des FlyOuts steuert.
     *
     * @type {ObservableValue<boolean>}
     * @memberof MrdFlyOutComponent
     */
    stateToggle: ObservableValue<boolean>;
    constructor(cdr: ChangeDetectorRef, flyOutService: FlyOutService);
    /**
     * Initialisiert das Einfahren des FlyOut.
     *
     * @memberof MrdFlyOutComponent
     */
    ngAfterViewInit(): void;
    /**
     * Wird aufgerufen, wenn auf den Hintergrund geklickt wurde.
     *
     * @memberof MrdFlyOutComponent
     */
    backdropClicked(): void;
    /**
     * Schließt das FlyOut.
     *
     * @param {*} [returnValue]
     * @memberof MrdFlyOutComponent
     */
    close(returnValue?: any): void;
    /**
     * Wird aufgerufen, wenn das FlyOut über eine MrdFlyOutCloseDirective geschlossen wird.
     *
     * @memberof MrdFlyOutComponent
     */
    closeDirectiveClicked(returnValue: any): void;
    get containerHeight(): string;
    get containerWidth(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdFlyOutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdFlyOutComponent, "mrd-fly-out", never, {}, {}, never, never, false, never>;
}

/**
 * Diese Directive kann verwendet werden, um das, die Komponente umgebende, FlyOut zu schließen.
 * Wird ein Wert übergebene, wird dieser über die Events onClose und afterClosed der FlyOut-Komponente zurückgegeben.
 *
 * @class MrdFlyOutCloseDirective
 */
declare class MrdFlyOutCloseDirective {
    componentRef: ComponentRef<MrdFlyOutComponent>;
    /**
     * Setzt den Wert, der über die Events onClose und afterClosed der FlyOut-Komponente zurückgegeben wird.
     * Default: undefined
     *
     * @memberof MrdFlyOutCloseDirective
     */
    set mrdFlyOutClose(value: any);
    /**
     * Der Rückgabewert, der über die Events onClose und afterClosed der FlyOut-Komponente zurückgegeben wird.
     *
     * @private
     * @type {*}
     * @memberof MrdFlyOutCloseDirective
     */
    private value;
    constructor(componentRef: ComponentRef<MrdFlyOutComponent>);
    /**
     * Der Hostlistener, wenn das Element der Directive geklickt wird.
     * Falls die Komponente innerhalb eines MrdFlyOuts liegt,
     * wird die closeDirectiveClicked-Methode der FlyOut-Komponente mit dem übergebenen Rückgabewert aufgerufen.
     */
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdFlyOutCloseDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdFlyOutCloseDirective, "[mrdFlyOutClose]", never, { "mrdFlyOutClose": { "alias": "mrdFlyOutClose"; "required": false; }; }, {}, never, never, false, never>;
}

declare class MrdFlyOutModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdFlyOutModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MrdFlyOutModule, [typeof MrdFlyOutComponent, typeof MrdFlyOutCloseDirective], [typeof i2.CommonModule, typeof MrdButtonModule], [typeof MrdFlyOutComponent, typeof MrdFlyOutCloseDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MrdFlyOutModule>;
}

declare class MrdButtonToggleGroupComponent extends BaseObject implements AfterViewInit {
    protected cdr: ChangeDetectorRef;
    buttons: QueryList<MrdButtonComponent>;
    rounded: boolean;
    set disabled(value: boolean);
    multiple: boolean;
    set index(index: number | number[]);
    get index(): number | number[];
    private _selectedIndex;
    /**
     * Gibt an, ob die ButtonGroup das Theme "primary" hat.
     *
     * Hierdurch wird die Hintergrundfarbe des Buttons auf die primäre Farbe des Themes gesetzt.
     *
     * @memberof MrdButtonComponent
     */
    primary: boolean;
    /**
     * Gibt an, ob die ButtonGroup das Theme "accent" hat.
     *
     * Hierdurch wird die Hintergrundfarbe des Buttons auf die Akzentfarbe des Themes gesetzt.
     *
     * @memberof MrdButtonComponent
     */
    accent: boolean;
    /**
     * Gibt an, ob die ButtonGroup das Theme "warn" hat.
     *
     * Hierdurch wird die Hintergrundfarbe des Buttons auf die Warnfarbe des Themes gesetzt.
     *
     * @memberof MrdButtonComponent
     */
    warn: boolean;
    /**
     * Setzt die Grundfarbe des Buttons.
     *
     * Diese wird je nach Style des Buttons als Hintergrundfarbe oder Textfarbe verwendet.
     *
     * Es können Hex-, RGB- oder RGBA-Werte, sowie "primary", "accent" oder "warn" angegeben werden.
     *
     * @memberof MrdButtonComponent
     */
    customTextColor: string;
    /**
     * Setzt die Hintergrundfarbe des Buttons.
     *
     * Es können Hex-, RGB- oder RGBA-Werte angegeben werden.
     *
     * @memberof MrdButtonComponent
     */
    customBgColor: string;
    /**
     * Gibt an, ob die benutzerdefinierte Textfarbe nicht durch ein defniertes Thema überschrieben werden soll.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    keepCustomTextColor: boolean;
    /**
     * Gibt an, ob die benutzerdefinierte Hintergrundfarbe nicht durch ein definiertes Thema überschrieben werden soll.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    keepCustomBgColor: boolean;
    customToggleUnselectedColor: string;
    customToggleUnselectedTextColor: string;
    customToggleSelectedColor: string;
    customToggleSelectedTextColor: string;
    /**
     * Die Mindesthöhe des Buttons.
     *
     * @type {string | number}
     * @memberof MrdButtonComponent
     */
    minHeight: string;
    /**
     * Die Schriftgröße des Buttons.
     *
     * @type {string | number}
     * @memberof MrdButtonComponent
     */
    fontSize: string;
    /**
     * Der Radius der Ecken des Buttons.
     *
     * @type {string | number}
     * @memberof MrdButtonComponent
     */
    borderRadius: string;
    set value(value: any | any[]);
    get value(): any | any[];
    private _value;
    valueChange: EventEmitter<any>;
    /**
     * Das Klick-Event durch den Nutzer.
     *
     * @type {EventEmitter<Event>}
     * @memberof MrdButtonComponent
     */
    indexChange: EventEmitter<number | number[]>;
    /**
     * Die Konfiguration des Mrd-Buttons.
     *
     * @private
     * @type {MrdConfigModel}
     * @memberof MrdButtonComponent
     */
    private _config;
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdButtonToggleGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdButtonToggleGroupComponent, "mrd-button-toggle-group", never, { "rounded": { "alias": "rounded"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "index": { "alias": "index"; "required": false; }; "primary": { "alias": "primary"; "required": false; }; "accent": { "alias": "accent"; "required": false; }; "warn": { "alias": "warn"; "required": false; }; "customTextColor": { "alias": "color"; "required": false; }; "customBgColor": { "alias": "backgroundColor"; "required": false; }; "keepCustomTextColor": { "alias": "keepCustomTextColor"; "required": false; }; "keepCustomBgColor": { "alias": "keepCustomBgColor"; "required": false; }; "customToggleUnselectedColor": { "alias": "unselectedBgColor"; "required": false; }; "customToggleUnselectedTextColor": { "alias": "unselectedTextColor"; "required": false; }; "customToggleSelectedColor": { "alias": "selectedBgColor"; "required": false; }; "customToggleSelectedTextColor": { "alias": "selectedTextColor"; "required": false; }; "minHeight": { "alias": "minHeight"; "required": false; }; "fontSize": { "alias": "fontSize"; "required": false; }; "borderRadius": { "alias": "borderRadius"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "valueChange": "valueChange"; "indexChange": "indexChange"; }, ["buttons"], ["*"], false, never>;
    static ngAcceptInputType_rounded: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_multiple: unknown;
    static ngAcceptInputType_index: unknown;
    static ngAcceptInputType_primary: unknown;
    static ngAcceptInputType_accent: unknown;
    static ngAcceptInputType_warn: unknown;
    static ngAcceptInputType_customTextColor: string;
    static ngAcceptInputType_customBgColor: string;
    static ngAcceptInputType_keepCustomTextColor: unknown;
    static ngAcceptInputType_keepCustomBgColor: unknown;
    static ngAcceptInputType_customToggleUnselectedColor: string;
    static ngAcceptInputType_customToggleUnselectedTextColor: string;
    static ngAcceptInputType_customToggleSelectedColor: string;
    static ngAcceptInputType_customToggleSelectedTextColor: string;
    static ngAcceptInputType_minHeight: string | number;
    static ngAcceptInputType_fontSize: string | number;
    static ngAcceptInputType_borderRadius: string | number;
}

declare class MrdButtonToggleModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdButtonToggleModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MrdButtonToggleModule, [typeof MrdButtonToggleGroupComponent], [typeof i2.CommonModule, typeof MrdButtonModule], [typeof MrdButtonToggleGroupComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MrdButtonToggleModule>;
}

declare class MrdCheckboxComponent implements AfterViewInit, AfterViewChecked {
    private cdr;
    label: ElementRef<HTMLElement>;
    formControl: AccessableFormControl;
    rounded: boolean;
    color: string;
    colorHover: string;
    colorChecked: string;
    colorCheckedHover: string;
    bgColor: string;
    bgColorHover: string;
    bgColorChecked: string;
    bgColorCheckedHover: string;
    border: string;
    borderHover: string;
    borderChecked: string;
    borderCheckedHover: string;
    checked: boolean;
    disabled: boolean;
    customIcons: boolean;
    customHoverIcons: boolean;
    checkboxSize: string;
    checkboxHeight: string;
    checkboxWidth: string;
    singleLine: boolean;
    fitContent: boolean;
    ellipsis: boolean;
    tooltip: boolean;
    tooltipIfTruncated: boolean;
    set tooltipText(value: string);
    get tooltipText(): string;
    private _tooltipText;
    private customTooltipText;
    tooltipPosition: 'top' | 'bottom' | 'left' | 'right';
    tooltipDisabled: boolean;
    checkedChange: EventEmitter<boolean>;
    private config;
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdCheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdCheckboxComponent, "mrd-checkbox", never, { "formControl": { "alias": "mrdFormControl"; "required": false; }; "rounded": { "alias": "rounded"; "required": false; }; "color": { "alias": "color"; "required": false; }; "colorHover": { "alias": "colorHover"; "required": false; }; "colorChecked": { "alias": "colorChecked"; "required": false; }; "colorCheckedHover": { "alias": "colorCheckedHover"; "required": false; }; "bgColor": { "alias": "bgColor"; "required": false; }; "bgColorHover": { "alias": "bgColorHover"; "required": false; }; "bgColorChecked": { "alias": "bgColorChecked"; "required": false; }; "bgColorCheckedHover": { "alias": "bgColorCheckedHover"; "required": false; }; "border": { "alias": "border"; "required": false; }; "borderHover": { "alias": "borderHover"; "required": false; }; "borderChecked": { "alias": "borderChecked"; "required": false; }; "borderCheckedHover": { "alias": "borderCheckedHover"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "customIcons": { "alias": "customIcons"; "required": false; }; "customHoverIcons": { "alias": "customHoverIcons"; "required": false; }; "checkboxSize": { "alias": "checkboxSize"; "required": false; }; "checkboxHeight": { "alias": "checkboxHeight"; "required": false; }; "checkboxWidth": { "alias": "checkboxWidth"; "required": false; }; "singleLine": { "alias": "single-line"; "required": false; }; "fitContent": { "alias": "fit-content"; "required": false; }; "ellipsis": { "alias": "ellipsis"; "required": false; }; "tooltip": { "alias": "tooltip"; "required": false; }; "tooltipIfTruncated": { "alias": "tooltipIfTruncated"; "required": false; }; "tooltipText": { "alias": "tooltipText"; "required": false; }; "tooltipPosition": { "alias": "tooltipPosition"; "required": false; }; "tooltipDisabled": { "alias": "tooltipDisabled"; "required": false; }; }, { "checkedChange": "checkedChange"; }, never, ["[icon-checked]", "[icon-unchecked]", "[icon-checked-hover]", "[icon-unchecked-hover]", "*"], false, never>;
    static ngAcceptInputType_rounded: unknown;
    static ngAcceptInputType_color: string;
    static ngAcceptInputType_colorHover: string;
    static ngAcceptInputType_colorChecked: string;
    static ngAcceptInputType_colorCheckedHover: string;
    static ngAcceptInputType_bgColor: string;
    static ngAcceptInputType_bgColorHover: string;
    static ngAcceptInputType_bgColorChecked: string;
    static ngAcceptInputType_bgColorCheckedHover: string;
    static ngAcceptInputType_checked: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_customIcons: unknown;
    static ngAcceptInputType_customHoverIcons: unknown;
    static ngAcceptInputType_checkboxSize: string | number;
    static ngAcceptInputType_checkboxHeight: string | number;
    static ngAcceptInputType_checkboxWidth: string | number;
    static ngAcceptInputType_singleLine: unknown;
    static ngAcceptInputType_fitContent: unknown;
    static ngAcceptInputType_ellipsis: unknown;
    static ngAcceptInputType_tooltip: unknown;
    static ngAcceptInputType_tooltipIfTruncated: unknown;
    static ngAcceptInputType_tooltipDisabled: unknown;
}

/**
 * Dieses Modul stellt den Mrd-Checkbox zur Verfügung.
 *
 * @export MrdCheckboxComponent
 * @class MrdCheckboxModule
 */
declare class MrdCheckboxModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdCheckboxModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MrdCheckboxModule, [typeof MrdCheckboxComponent], [typeof i2.CommonModule, typeof MrdTooltipModule], [typeof MrdCheckboxComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MrdCheckboxModule>;
}

declare class MrdChipComponent implements AfterViewInit {
    private cdr;
    chipText: ElementRef<HTMLElement> | undefined;
    primary: boolean;
    accent: boolean;
    warn: boolean;
    set color(value: string);
    get color(): string;
    private _color;
    set backgroundColor(value: string);
    get backgroundColor(): string;
    private _backgroundColor;
    clickable: boolean;
    closeable: boolean;
    prefixIcon: string;
    suffixIcon: string;
    set disabled(value: boolean);
    get disabled(): boolean;
    private _disabled;
    closeIconColor: string;
    closeIconCrossColor: string;
    close: EventEmitter<void>;
    /**
       * Die Konfiguration des Mrd-Buttons.
       *
       * @private
       * @type {MrdConfigModel}
       * @memberof MrdButtonComponent
       */
    private _config;
    chipTextValue: string;
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    closeClicked(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdChipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdChipComponent, "mrd-chip", never, { "primary": { "alias": "primary"; "required": false; }; "accent": { "alias": "accent"; "required": false; }; "warn": { "alias": "warn"; "required": false; }; "color": { "alias": "color"; "required": false; }; "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "clickable": { "alias": "clickable"; "required": false; }; "closeable": { "alias": "closeable"; "required": false; }; "prefixIcon": { "alias": "prefixIcon"; "required": false; }; "suffixIcon": { "alias": "suffixIcon"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "closeIconColor": { "alias": "closeIconColor"; "required": false; }; "closeIconCrossColor": { "alias": "closeIconCrossColor"; "required": false; }; }, { "close": "close"; }, never, ["*"], false, never>;
    static ngAcceptInputType_primary: unknown;
    static ngAcceptInputType_accent: unknown;
    static ngAcceptInputType_warn: unknown;
    static ngAcceptInputType_color: string;
    static ngAcceptInputType_backgroundColor: string;
    static ngAcceptInputType_clickable: unknown;
    static ngAcceptInputType_closeable: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_closeIconColor: string;
    static ngAcceptInputType_closeIconCrossColor: string;
}

/**
 * Dieses Modul stellt den Mrd-Chip zur Verfügung.
 *
 * @export MrdChipComponent
 * @class MrdChipModule
 */
declare class MrdChipModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdChipModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MrdChipModule, [typeof MrdChipComponent], [typeof i2.CommonModule, typeof MrdIconModule, typeof MrdButtonModule, typeof MrdTooltipModule], [typeof MrdChipComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MrdChipModule>;
}

declare class MrdInputComponent extends BaseObject implements AfterViewInit {
    private cdr;
    private static readonly DEFAULT_MAX_LENGTH;
    private static readonly DEFAULT_MIN_ROWS;
    private static readonly DEFAULT_MAX_ROWS;
    private static readonly DEFAULT_LINE_HEIGHT;
    private static readonly DATE_REGEX;
    private static readonly DATE_REGEX_INPUT;
    baseInputElement: ElementRef<HTMLInputElement>;
    textAreaElement: ElementRef<HTMLTextAreaElement>;
    dateInputElement: ElementRef<HTMLInputElement>;
    timeInputElement: ElementRef<HTMLInputElement>;
    formControl: AccessableFormControl;
    placeholder: string;
    value: string;
    maxLength: number;
    minRows: number;
    maxRows: number;
    lineHeight: number;
    disabled: boolean;
    readonly: boolean;
    required: boolean;
    textarea: boolean;
    date: boolean;
    rangeStart: boolean;
    rangeEnd: boolean;
    time: boolean;
    customDateTimeToggle: boolean;
    validateOnBlur: boolean;
    formControlChangeOnBlur: boolean;
    set color(value: string);
    get color(): string;
    private _color;
    set centered(value: boolean);
    get centered(): boolean;
    private _centered;
    set textEnd(value: boolean);
    get textEnd(): boolean;
    private _textEnd;
    datePickerToggle: HTMLElement;
    maxDigits: number;
    autofocus: boolean;
    touched: EventEmitter<void>;
    focused: EventEmitter<void>;
    blurred: EventEmitter<void>;
    valueChange: EventEmitter<string>;
    inputChange: EventEmitter<string>;
    disabledColor: string;
    labelPresent: boolean;
    isFocused: boolean;
    showDatepicker: ObservableValue<boolean>;
    showTimepicker: ObservableValue<boolean>;
    private formControlChangeValue;
    _positions: ConnectedPosition[];
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    private formControlChanged;
    input(event: InputEvent): void;
    dateChanged(event: Moment): void;
    timeChanged(event: Moment): void;
    private calculateTextAreaHeight;
    inputClicked(event: MouseEvent): void;
    focus(event: FocusEvent): void;
    blur(event: FocusEvent): void;
    toggleClicked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdInputComponent, "mrd-input", never, { "formControl": { "alias": "mrdFormControl"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "value": { "alias": "value"; "required": false; }; "maxLength": { "alias": "maxLength"; "required": false; }; "minRows": { "alias": "minRows"; "required": false; }; "maxRows": { "alias": "maxRows"; "required": false; }; "lineHeight": { "alias": "lineHeight"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; "textarea": { "alias": "textarea"; "required": false; }; "date": { "alias": "date"; "required": false; }; "rangeStart": { "alias": "rangeStart"; "required": false; }; "rangeEnd": { "alias": "rangeEnd"; "required": false; }; "time": { "alias": "time"; "required": false; }; "customDateTimeToggle": { "alias": "customDateTimeToggle"; "required": false; }; "validateOnBlur": { "alias": "validateOnBlur"; "required": false; }; "formControlChangeOnBlur": { "alias": "formControlChangeOnBlur"; "required": false; }; "color": { "alias": "color"; "required": false; }; "centered": { "alias": "text-centered"; "required": false; }; "textEnd": { "alias": "text-end"; "required": false; }; "datePickerToggle": { "alias": "datePickerToggle"; "required": false; }; "maxDigits": { "alias": "maxDigits"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; }, { "touched": "touched"; "focused": "focused"; "blurred": "blurred"; "valueChange": "valueChange"; "inputChange": "inputChange"; }, never, ["[unfocusedOverlay]"], false, never>;
    static ngAcceptInputType_maxLength: unknown;
    static ngAcceptInputType_minRows: unknown;
    static ngAcceptInputType_maxRows: unknown;
    static ngAcceptInputType_lineHeight: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_readonly: unknown;
    static ngAcceptInputType_required: unknown;
    static ngAcceptInputType_textarea: unknown;
    static ngAcceptInputType_date: unknown;
    static ngAcceptInputType_rangeStart: unknown;
    static ngAcceptInputType_rangeEnd: unknown;
    static ngAcceptInputType_time: unknown;
    static ngAcceptInputType_customDateTimeToggle: unknown;
    static ngAcceptInputType_validateOnBlur: unknown;
    static ngAcceptInputType_formControlChangeOnBlur: unknown;
    static ngAcceptInputType_color: string;
    static ngAcceptInputType_centered: unknown;
    static ngAcceptInputType_textEnd: unknown;
    static ngAcceptInputType_autofocus: unknown;
}
declare class MrdDatePickerToggle implements AfterViewInit {
    private elementRef;
    mrdDateTimePickerToggle: MrdInputComponent;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    onClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdDatePickerToggle, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdDatePickerToggle, "[mrdDateTimePickerToggle]", never, { "mrdDateTimePickerToggle": { "alias": "mrdDateTimePickerToggle"; "required": false; }; }, {}, never, never, false, never>;
}

declare class MrdLabelComponent extends BasePushStrategyObject {
    protected cdr: ChangeDetectorRef;
    set labelTop(value: boolean);
    get labelTop(): boolean;
    private _labelTop;
    float: 'always' | 'auto' | 'never';
    floating: ObservableValue<boolean>;
    required: ObservableValue<boolean>;
    constructor(cdr: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdLabelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdLabelComponent, "mrd-label", never, { "labelTop": { "alias": "labelTop"; "required": false; }; "float": { "alias": "float"; "required": false; }; }, {}, never, ["*"], false, never>;
    static ngAcceptInputType_labelTop: unknown;
}

declare class MrdErrorComponent {
    private cdr;
    ellipsis: number;
    private _error;
    set error(value: string);
    get error(): string;
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdErrorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdErrorComponent, "mrd-error", never, { "ellipsis": { "alias": "ellipsis"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_ellipsis: unknown;
}

declare class MrdSelectOptionComponent implements AfterViewInit {
    private elementRef;
    private select;
    private cdr;
    optionValue: ElementRef<HTMLElement> | undefined;
    value: any;
    noCheckbox: boolean;
    disabled: boolean;
    optionClicked: EventEmitter<MrdSelectOptionChange>;
    optionLabel: string;
    _selected: boolean;
    _filtered: boolean;
    _focused: boolean;
    multiple: boolean;
    constructor(elementRef: ElementRef, select: MrdSelectComponent, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    optionClick(): void;
    set selected(value: boolean);
    get selected(): boolean;
    set filtered(value: boolean);
    get filtered(): boolean;
    set focused(value: boolean);
    get focused(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdSelectOptionComponent, [null, { host: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdSelectOptionComponent, "mrd-select-option", never, { "value": { "alias": "value"; "required": false; }; "noCheckbox": { "alias": "noCheckbox"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "optionClicked": "optionClicked"; }, never, ["mrd-icon:not([icon-end]), [mrd-icon]:not([icon-end])", "*", "mrd-icon[icon-end], [mrd-icon][icon-end]"], false, never>;
    static ngAcceptInputType_noCheckbox: unknown;
    static ngAcceptInputType_disabled: unknown;
}
interface MrdSelectOptionChange {
    key: any;
    value: string;
    option: MrdSelectOptionComponent;
    checked?: boolean;
}

declare class MrdSelectCustomTriggerComponent {
    triggerClick: EventEmitter<void>;
    triggerClicked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdSelectCustomTriggerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdSelectCustomTriggerComponent, "mrd-select-custom-trigger", never, {}, { "triggerClick": "triggerClick"; }, never, ["*"], false, never>;
}

declare class MrdSelectComponent extends BasePushStrategyObject implements OnInit, AfterContentInit, AfterViewInit {
    private elementRef;
    protected cdr: ChangeDetectorRef;
    selectContainer: ElementRef;
    searchSelectionInput: ElementRef;
    options: QueryList<MrdSelectOptionComponent>;
    customTrigger: MrdSelectCustomTriggerComponent;
    private _initialized;
    readonly optionSelectionChanges: Observable<any>;
    formControl: AccessableFormControl;
    formArrayControl: AccessableFormArray<any>;
    set value(value: any);
    get value(): any;
    private _value;
    identifier: string;
    items: any[];
    autoComplete: boolean;
    searchSelection: boolean;
    chipSelection: boolean;
    nullable: boolean;
    set multiple(value: boolean);
    get multiple(): boolean;
    private _multiple;
    closeOnSelect: boolean;
    disabled: boolean;
    chipPrefixIcon: string;
    chipSuffixIcon: string;
    showOptions: ObservableValue<boolean>;
    smoothScroll: boolean;
    searchAutofocus: boolean;
    touched: EventEmitter<void>;
    focused: EventEmitter<void>;
    blurred: EventEmitter<void>;
    /**
     * Event that is emitted when the chip close button is clicked.
     * @type {EventEmitter<void>}
     * @memberof MrdSelectComponent
     * @returns The value of the chip that was closed.
     */
    chipClose: EventEmitter<void>;
    valueChange: EventEmitter<any>;
    optionsVisible: boolean;
    _showNoOptionsOnSearch: boolean;
    standalone: boolean;
    showValue: string;
    searchText: string;
    optionsWidthExceeded: boolean;
    optionsHeightExceeded: boolean;
    private optionChangeSubscription;
    _positions: ConnectedPosition[];
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    private formControlChanged;
    private formArrayControlChanged;
    private modelChanged;
    private _resetOptions;
    removeSelected(): void;
    chipClosed(option: MrdSelectOptionComponent): void;
    autoCompleteInput(event: InputEvent): void;
    searchInput(event: InputEvent): void;
    onKeyDown(event: KeyboardEvent): void;
    triggerClicked(): void;
    get selectedOptions(): MrdSelectOptionComponent[];
    set showNoOptionsOnSearch(value: boolean);
    get showNoOptionsOnSearch(): boolean;
    focus(event: FocusEvent): void;
    blur(event: FocusEvent): void;
    chipCloseClicked(value: any): void;
    get optionsMinWidth(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdSelectComponent, "mrd-select", never, { "formControl": { "alias": "mrdFormControl"; "required": false; }; "formArrayControl": { "alias": "mrdFormArray"; "required": false; }; "value": { "alias": "value"; "required": false; }; "identifier": { "alias": "identifier"; "required": false; }; "items": { "alias": "items"; "required": false; }; "autoComplete": { "alias": "autoComplete"; "required": false; }; "searchSelection": { "alias": "searchSelection"; "required": false; }; "chipSelection": { "alias": "chipSelection"; "required": false; }; "nullable": { "alias": "nullable"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "closeOnSelect": { "alias": "closeOnSelect"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "chipPrefixIcon": { "alias": "chipPrefixIcon"; "required": false; }; "chipSuffixIcon": { "alias": "chipSuffixIcon"; "required": false; }; "showOptions": { "alias": "showOptions"; "required": false; }; "smoothScroll": { "alias": "smoothScroll"; "required": false; }; "searchAutofocus": { "alias": "searchAutofocus"; "required": false; }; }, { "touched": "touched"; "focused": "focused"; "blurred": "blurred"; "chipClose": "chipClose"; "valueChange": "valueChange"; }, ["customTrigger", "options"], ["mrd-select-custom-trigger", "[addButton]", "mrd-select-option"], false, never>;
    static ngAcceptInputType_autoComplete: unknown;
    static ngAcceptInputType_searchSelection: unknown;
    static ngAcceptInputType_chipSelection: unknown;
    static ngAcceptInputType_nullable: unknown;
    static ngAcceptInputType_multiple: unknown;
    static ngAcceptInputType_closeOnSelect: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_smoothScroll: unknown;
    static ngAcceptInputType_searchAutofocus: unknown;
}

declare class MrdFormFieldComponent extends BaseObject implements AfterViewInit, OnDestroy {
    private cdr;
    config: MrdConfigModel;
    input: MrdInputComponent;
    select: MrdSelectComponent;
    label: MrdLabelComponent;
    error: MrdErrorComponent;
    outline: boolean;
    fill: boolean;
    dark: boolean;
    requiredAsterisk: boolean;
    rounded: boolean;
    borderRadius: string;
    centered: boolean;
    textEnd: boolean;
    fillColor: string;
    disabled: boolean;
    focused: boolean;
    hasError: boolean;
    focusColor: string;
    focusColorDark: string;
    focusColorOutline: string;
    errorColor: string;
    errorColorDark: string;
    errorColorOutline: string;
    private timeouts;
    constructor(cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdFormFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdFormFieldComponent, "mrd-form-field", never, { "outline": { "alias": "outline"; "required": false; }; "fill": { "alias": "fill"; "required": false; }; "dark": { "alias": "dark"; "required": false; }; "requiredAsterisk": { "alias": "requiredAsterisk"; "required": false; }; "rounded": { "alias": "rounded"; "required": false; }; "borderRadius": { "alias": "borderRadius"; "required": false; }; "centered": { "alias": "text-centered"; "required": false; }; "textEnd": { "alias": "text-end"; "required": false; }; "fillColor": { "alias": "fillColor"; "required": false; }; }, {}, ["input", "select", "label", "error"], ["mrd-prefix", "mrd-input", "mrd-select", "mrd-label", "mrd-date-range-picker", "mrd-suffix", "mrd-hint", "mrd-error"], false, never>;
    static ngAcceptInputType_outline: unknown;
    static ngAcceptInputType_fill: unknown;
    static ngAcceptInputType_dark: unknown;
    static ngAcceptInputType_rounded: unknown;
    static ngAcceptInputType_borderRadius: string | number;
    static ngAcceptInputType_centered: unknown;
    static ngAcceptInputType_textEnd: unknown;
    static ngAcceptInputType_fillColor: string;
}

declare class MrdHintComponent implements AfterViewInit {
    private cdr;
    hintContent: ElementRef;
    ellipsis: number;
    tootltipText: string;
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdHintComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdHintComponent, "mrd-hint", never, { "ellipsis": { "alias": "ellipsis"; "required": false; }; }, {}, never, ["*"], false, never>;
    static ngAcceptInputType_ellipsis: unknown;
}

declare class MrdPrefixComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdPrefixComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdPrefixComponent, "mrd-prefix", never, {}, {}, never, ["*"], false, never>;
}

declare class MrdSuffixComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdSuffixComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdSuffixComponent, "mrd-suffix", never, {}, {}, never, ["*"], false, never>;
}

declare class MrdDatepickerComponent implements AfterViewInit {
    private cdr;
    date: string | Moment | null;
    range: boolean;
    startDate: Moment | null;
    endDate: Moment | null;
    dateChanged: EventEmitter<moment.Moment>;
    dateRangeChanged: EventEmitter<{
        start: Moment | null;
        end: Moment | null;
    }>;
    placeholder: string[];
    days: Day[];
    endHoverDate: Moment | null;
    monthIndex: number;
    months: string[];
    fullMonths: string[];
    year: number;
    yearRange: number[];
    showDays: boolean;
    showMonths: boolean;
    showYears: boolean;
    private today;
    private calendarDate;
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    private checkDate;
    private initYearRange;
    private initCalendar;
    trackById(index: number, item: Day): string;
    dateSelected(day: Day): void;
    yearSelected(year: number): void;
    monthSelected(month: number): void;
    changeView(): void;
    previous(): void;
    next(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdDatepickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdDatepickerComponent, "mrd-datepicker", never, { "date": { "alias": "date"; "required": false; }; "range": { "alias": "range-picker"; "required": false; }; "startDate": { "alias": "startDate"; "required": false; }; "endDate": { "alias": "endDate"; "required": false; }; }, { "dateChanged": "dateChanged"; "dateRangeChanged": "dateRangeChanged"; }, never, never, false, never>;
    static ngAcceptInputType_range: unknown;
}
interface Day {
    date: Moment;
    day: string;
    isToday?: boolean;
    isSelected?: ObservableValue<boolean>;
    isWeekend?: boolean;
    isDisabled?: ObservableValue<boolean>;
    betweenRange?: ObservableValue<boolean>;
    rangeSelected?: ObservableValue<boolean>;
    rangeHover?: ObservableValue<boolean>;
    rangeHoverBetween?: ObservableValue<boolean>;
    changed: () => void;
}

declare class MrdDateRangePickerComponent implements AfterViewInit {
    inputs: QueryList<MrdInputComponent>;
    dateInputElement: ElementRef<HTMLElement>;
    showDatepicker: ObservableValue<boolean>;
    startValue: Moment | null;
    endValue: Moment | null;
    startInput: MrdInputComponent | null;
    endInput: MrdInputComponent | null;
    _positions: ConnectedPosition[];
    constructor();
    ngAfterViewInit(): void;
    rangeChanged(value: {
        start: Moment | null;
        end: Moment | null;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdDateRangePickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdDateRangePickerComponent, "mrd-date-range-picker", never, {}, {}, ["inputs"], ["mrd-input"], false, never>;
}

declare class MrdDateRangeIndicatorDirective implements AfterViewInit {
    private _elementRef;
    set startDate(value: Moment | null);
    private _startDate;
    set buttonDate(value: Day);
    private _buttonDate;
    private day;
    set hoverEndDate(value: Moment | null);
    private _hoverEndDate;
    set endDate(value: Moment | null);
    private _endDate;
    isHovering: EventEmitter<Moment>;
    constructor(_elementRef: ElementRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdDateRangeIndicatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdDateRangeIndicatorDirective, "[mrdDateRangeIndicator]", never, { "startDate": { "alias": "startDate"; "required": false; }; "buttonDate": { "alias": "mrdDateRangeIndicator"; "required": false; }; "hoverEndDate": { "alias": "hoverEndDate"; "required": false; }; "endDate": { "alias": "endDate"; "required": false; }; }, { "isHovering": "isHovering"; }, never, never, false, never>;
}

declare class MrdTimepickerComponent implements AfterViewInit {
    time: string | Moment | null;
    timeChanged: EventEmitter<moment.Moment>;
    hour: number;
    minute: number;
    hours: number[];
    minutes: number[];
    constructor();
    ngAfterViewInit(): void;
    private checkDate;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdTimepickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdTimepickerComponent, "mrd-timepicker", never, { "time": { "alias": "time"; "required": false; }; }, { "timeChanged": "timeChanged"; }, never, never, false, never>;
}

declare class MrdFormFieldModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdFormFieldModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MrdFormFieldModule, [typeof MrdFormFieldComponent, typeof MrdInputComponent, typeof MrdSelectComponent, typeof MrdSelectOptionComponent, typeof MrdSelectCustomTriggerComponent, typeof MrdErrorComponent, typeof MrdHintComponent, typeof MrdLabelComponent, typeof MrdPrefixComponent, typeof MrdSuffixComponent, typeof MrdDatePickerToggle, typeof MrdDatepickerComponent, typeof MrdDateRangePickerComponent, typeof MrdDateRangeIndicatorDirective, typeof MrdTimepickerComponent], [typeof i2.CommonModule, typeof i16.OverlayModule, typeof MrdTooltipModule, typeof MrdChipModule, typeof MrdCheckboxModule, typeof MrdButtonModule, typeof MrdIconModule, typeof MrdDirectiveModule], [typeof MrdFormFieldComponent, typeof MrdInputComponent, typeof MrdSelectComponent, typeof MrdSelectOptionComponent, typeof MrdSelectCustomTriggerComponent, typeof MrdErrorComponent, typeof MrdHintComponent, typeof MrdLabelComponent, typeof MrdPrefixComponent, typeof MrdSuffixComponent, typeof MrdDatePickerToggle, typeof MrdDateRangePickerComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MrdFormFieldModule>;
}

declare class MrdDecimalComponent {
    private cdr;
    set backgroundColor(value: string);
    get backgroundColor(): string;
    private _backgroundColor;
    set color(value: string);
    get color(): string;
    private _color;
    set textEnd(value: boolean);
    get textEnd(): boolean;
    private _textEnd;
    set centered(value: boolean);
    get centered(): boolean;
    private _centered;
    set value(value: number);
    get value(): number;
    private _value;
    set maxDigits(value: number);
    get maxDigits(): number;
    private _maxDigits;
    set minDigits(value: number);
    get minDigits(): number;
    private _minDigits;
    set tausendertrennpunkt(value: boolean);
    get tausendertrennpunkt(): boolean;
    private _tausendertrennpunkt;
    smallDigits: boolean;
    private decimalString;
    private digitsString;
    constructor(cdr: ChangeDetectorRef);
    get decimalValue(): string;
    get digitsValue(): string;
    private generateValueString;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdDecimalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdDecimalComponent, "mrd-decimal", never, { "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "color": { "alias": "color"; "required": false; }; "textEnd": { "alias": "text-end"; "required": false; }; "centered": { "alias": "text-centered"; "required": false; }; "value": { "alias": "value"; "required": false; }; "maxDigits": { "alias": "maxDigits"; "required": false; }; "minDigits": { "alias": "minDigits"; "required": false; }; "tausendertrennpunkt": { "alias": "tausendertrennpunkt"; "required": false; }; "smallDigits": { "alias": "smallDigits"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_textEnd: unknown;
    static ngAcceptInputType_centered: unknown;
    static ngAcceptInputType_maxDigits: unknown;
    static ngAcceptInputType_minDigits: unknown;
    static ngAcceptInputType_tausendertrennpunkt: unknown;
    static ngAcceptInputType_smallDigits: unknown;
}

declare class MrdDecimalModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdDecimalModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MrdDecimalModule, [typeof MrdDecimalComponent], [typeof i2.CommonModule], [typeof MrdDecimalComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MrdDecimalModule>;
}

declare enum MrdToggleSwitchState {
    LEFT = "left",
    NEUTRAL = "neutral",
    RIGHT = "right"
}

declare class MrdToggleSwitchComponent implements OnInit {
    private cdr;
    MrdToggleSwitchState: typeof MrdToggleSwitchState;
    bgColor: string;
    bgNeutralColor: string;
    knobColor: string;
    knobNeutralColor: string;
    width: string;
    height: string;
    bgDisabledColor: string;
    knobDisabledColor: string;
    disabled: boolean;
    set state(value: MrdToggleSwitchState);
    get state(): MrdToggleSwitchState;
    private _state;
    stateChange: EventEmitter<MrdToggleSwitchState>;
    private _config;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    toggle(event: PointerEvent, state?: MrdToggleSwitchState): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdToggleSwitchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdToggleSwitchComponent, "mrd-toggle-switch", never, { "bgColor": { "alias": "bgColor"; "required": false; }; "bgNeutralColor": { "alias": "bgNeutralColor"; "required": false; }; "knobColor": { "alias": "knobColor"; "required": false; }; "knobNeutralColor": { "alias": "knobNeutralColor"; "required": false; }; "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "bgDisabledColor": { "alias": "bgDisabledColor"; "required": false; }; "knobDisabledColor": { "alias": "knobDisabledColor"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "state": { "alias": "state"; "required": false; }; }, { "stateChange": "stateChange"; }, never, never, false, never>;
    static ngAcceptInputType_bgColor: string;
    static ngAcceptInputType_bgNeutralColor: string;
    static ngAcceptInputType_knobColor: string;
    static ngAcceptInputType_knobNeutralColor: string;
    static ngAcceptInputType_width: string | number;
    static ngAcceptInputType_height: string | number;
    static ngAcceptInputType_bgDisabledColor: string;
    static ngAcceptInputType_knobDisabledColor: string;
    static ngAcceptInputType_disabled: unknown;
}

declare class MrdToggleSwitchModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdToggleSwitchModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MrdToggleSwitchModule, [typeof MrdToggleSwitchComponent], [typeof i2.CommonModule], [typeof MrdToggleSwitchComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MrdToggleSwitchModule>;
}

declare class MrdStepComponent {
    private cdr;
    readonly tr: TemplateRef<any>;
    _implicitContent: TemplateRef<any>;
    set label(value: string);
    get label(): string;
    private _label;
    mrdStepControl: AccessableFormControl;
    private _embeddedViewRef;
    get content(): ViewRef | null;
    /**
     * Zero based index of the step
     *
     * @memberof MrdStepComponent
     */
    set index(value: number);
    get index(): number;
    private _index;
    set active(value: boolean);
    get active(): boolean;
    private _active;
    get valid(): boolean;
    get touched(): boolean;
    private _touched;
    constructor(cdr: ChangeDetectorRef, tr: TemplateRef<any>);
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdStepComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdStepComponent, "[mrdStep]", never, { "label": { "alias": "mrdStep"; "required": false; }; "mrdStepControl": { "alias": "mrdStepControl"; "required": false; }; }, {}, never, never, false, never>;
}

declare class MrdStepperComponent extends BaseObject implements AfterViewInit {
    private cdr;
    private router;
    private route;
    steps: QueryList<MrdStepComponent>;
    stepBodys: QueryList<MrdTabBodyComponent>;
    stepHeader: QueryList<ElementRef>;
    labelposition: 'top' | 'right' | 'bottom' | 'left';
    set headerHeight(value: number);
    get headerHeight(): number;
    private _headerHeight;
    set selectedIndex(value: number);
    get selectedIndex(): number;
    private _selectedIndex;
    changeStep: ObservableValue<number>;
    linear: boolean;
    selectedStepChanged: EventEmitter<MrdStepComponent>;
    selectedStepIndexChanged: EventEmitter<number>;
    activeIndex: number;
    private activeStep;
    private activeStepBody;
    constructor(cdr: ChangeDetectorRef, router: Router, route: ActivatedRoute);
    ngAfterViewInit(): void;
    activateStep(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdStepperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdStepperComponent, "mrd-stepper", never, { "labelposition": { "alias": "labelposition"; "required": false; }; "headerHeight": { "alias": "headerHeight"; "required": false; }; "selectedIndex": { "alias": "selectedIndex"; "required": false; }; "changeStep": { "alias": "changeStep"; "required": false; }; "linear": { "alias": "linear"; "required": false; }; }, { "selectedStepChanged": "selectedStepChanged"; "selectedStepIndexChanged": "selectedStepIndexChanged"; }, ["steps"], never, false, never>;
    static ngAcceptInputType_linear: unknown;
}

declare class MrdStepperModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdStepperModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MrdStepperModule, [typeof MrdStepComponent, typeof MrdStepperComponent], [typeof i2.CommonModule, typeof MrdTabsModule], [typeof MrdStepComponent, typeof MrdStepperComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MrdStepperModule>;
}

export { ColorUtil, ConfigUtil, DecimalNumberDirective, FlyOutData, FlyOutService, HideIfTruncatedDirective, MRD_ICON_LOCATION, MRD_ICON_LOCATION_FACTORY, MatTabBodyPortal, MrdButtonComponent, MrdButtonModule, MrdButtonToggleGroupComponent, MrdButtonToggleModule, MrdCheckboxComponent, MrdCheckboxModule, MrdChipComponent, MrdChipModule, MrdDatePickerToggle, MrdDateRangeIndicatorDirective, MrdDateRangePickerComponent, MrdDatepickerComponent, MrdDecimalComponent, MrdDecimalModule, MrdDirectiveModule, MrdErrorComponent, MrdFlyOutCloseDirective, MrdFlyOutComponent, MrdFlyOutModule, MrdFormFieldComponent, MrdFormFieldModule, MrdGeoIconComponent, MrdGeoIconModule, MrdHintComponent, MrdIconComponent, MrdIconModule, MrdIconRegistryService, MrdInputComponent, MrdLabelComponent, MrdPrefixComponent, MrdProgressBarComponent, MrdProgressBarModule, MrdProgressSpinnerComponent, MrdProgressSpinnerModule, MrdSelectComponent, MrdSelectCustomTriggerComponent, MrdSelectOptionComponent, MrdStepComponent, MrdStepperComponent, MrdStepperModule, MrdSuffixComponent, MrdTabBodyComponent, MrdTabComponent, MrdTabGroupComponent, MrdTabsModule, MrdTimepickerComponent, MrdToggleSwitchComponent, MrdToggleSwitchModule, MrdToggleSwitchState, MrdTooltipModule, TimeInputDirective, ToggleOnHoverDirective, ToolTipRendererDirective, colorAttribute, colorThemeAttribute, sizeAttribute, timeAttribute };
export type { Day, MrdConfigModel, MrdFlyOutComponentRef, MrdFlyOutConfig, MrdIconLocation, MrdSelectOptionChange };
