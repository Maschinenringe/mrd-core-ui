import { BasePushStrategyObject, ObservableValue } from 'mrd-core';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
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
export declare class MrdButtonComponent extends BasePushStrategyObject implements AfterViewInit {
    protected cdr: ChangeDetectorRef;
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
    toggle: boolean;
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
    customToggleUnselectedColor: string;
    customToggleUnselectedTextColor: string;
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
    isCollapsed: boolean;
    private uncollapsedAppearance;
    private buttonPrimary;
    private buttonAccent;
    private buttonWarn;
    private buttonDisabled;
    private buttonProgress;
    bgColor: string;
    private textLightColor;
    private textDarkColor;
    textColor: string;
    hoverColor: string;
    activeColor: string;
    disabledTextColor: string;
    disabledBgColor: string;
    toggleUnselectedColor: string;
    borderWidth: string;
    borderStyle: string;
    borderColor: string;
    constructor(cdr: ChangeDetectorRef, elementRef: ElementRef<HTMLElement>);
    ngAfterViewInit(): void;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdButtonComponent, "mrd-button", never, { "icon": { "alias": "icon-button"; "required": false; }; "raised": { "alias": "raised-button"; "required": false; }; "outline": { "alias": "outline-button"; "required": false; }; "flat": { "alias": "flat-button"; "required": false; }; "fab": { "alias": "fab-button"; "required": false; }; "miniFab": { "alias": "miniFab-button"; "required": false; }; "toggle": { "alias": "toggle-button"; "required": false; }; "toggleSelected": { "alias": "selected"; "required": false; }; "primary": { "alias": "primary"; "required": false; }; "accent": { "alias": "accent"; "required": false; }; "warn": { "alias": "warn"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "isLoading": { "alias": "isLoading"; "required": false; }; "loadingProgress": { "alias": "loadingProgress"; "required": false; }; "customTextColor": { "alias": "color"; "required": false; }; "customBgColor": { "alias": "backgroundColor"; "required": false; }; "keepCustomTextColor": { "alias": "keepCustomTextColor"; "required": false; }; "keepCustomBgColor": { "alias": "keepCustomBgColor"; "required": false; }; "customToggleUnselectedColor": { "alias": "customToggleUnselectedColor"; "required": false; }; "customToggleUnselectedTextColor": { "alias": "customToggleUnselectedTextColor"; "required": false; }; "customToggleSelectedTextColor": { "alias": "customToggleSelectedTextColor"; "required": false; }; "progressColor": { "alias": "progressColor"; "required": false; }; "collapse": { "alias": "collapse"; "required": false; }; "collapseTo": { "alias": "collapseTo"; "required": false; }; "fitContent": { "alias": "fit-content"; "required": false; }; "showTooltip": { "alias": "tooltip"; "required": false; }; "tooltipText": { "alias": "tooltipText"; "required": false; }; "tooltipIfTruncated": { "alias": "tooltipIfTruncated"; "required": false; }; "minHeight": { "alias": "minHeight"; "required": false; }; "fontSize": { "alias": "fontSize"; "required": false; }; "diameter": { "alias": "diameter"; "required": false; }; "iconSize": { "alias": "iconSize"; "required": false; }; "fullIcon": { "alias": "fullIcon"; "required": false; }; "borderRadius": { "alias": "borderRadius"; "required": false; }; }, { "click": "click"; }, never, ["mrd-icon:not([icon-end]), [mrd-icon]:not([icon-end])", ":not([mrd-icon]):not(mrd-icon)", "mrd-icon[icon-end], [mrd-icon][icon-end]"], false, never>;
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
    static ngAcceptInputType_minHeight: string | number;
    static ngAcceptInputType_fontSize: string | number;
    static ngAcceptInputType_diameter: string | number;
    static ngAcceptInputType_iconSize: string | number;
    static ngAcceptInputType_fullIcon: unknown;
    static ngAcceptInputType_borderRadius: string | number;
}
