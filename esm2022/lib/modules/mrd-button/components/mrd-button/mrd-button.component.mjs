import { BasePushStrategyObject, Util } from 'mrd-core';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, booleanAttribute } from '@angular/core';
import { ColorUtil } from './../../../../common/util/color.util';
import { ConfigUtil } from './../../../../common/util/config.util';
import * as _ from 'underscore';
import { colorAttribute, colorThemeAttribute } from './../../../../common/transforms/color-transform';
import { sizeAttribute } from './../../../../common/transforms/size-transform';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../mrd-progress-bar/components/mrd-progress-bar/mrd-progress-bar.component";
import * as i3 from "../../../mrd-progress-spinner/components/mrd-progress-spinner/mrd-progress-spinner.component";
import * as i4 from "../../../mrd-tooltip/common/directive/tool-tip-renderer/tool-tip-renderer.directive";
import * as i5 from "../../../../common/directive/hide-if-truncated/hide-if-truncated.directive";
const _c0 = ["mrdButtonTextContent"];
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
export class MrdButtonComponent extends BasePushStrategyObject {
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
            i0.ɵɵviewQuery(_c0, 7);
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
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle, i2.MrdProgressBarComponent, i3.MrdProgressSpinnerComponent, i4.ToolTipRendererDirective, i5.HideIfTruncatedDirective], styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;max-width:100%}.active[_nghost-%COMP%]{transform:scale(1.15);z-index:10}.mrd-button-container[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:center;min-height:var(--min-height);height:inherit;max-width:100%;width:inherit;padding:0 16px;font-size:var(--font-size);font-weight:700;letter-spacing:.1px;border:var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius);color:var(--text-color)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;z-index:1;width:100%}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]   .mrd-button-icon-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]   .mrd-button-text-content[_ngcontent-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]     mrd-icon{margin:0 2px}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]   .mrd-button-text-content[_ngcontent-%COMP%]{padding:0 16px}.mrd-button-container.disabled[_ngcontent-%COMP%]{color:var(--disabled-text-color);pointer-events:none;cursor:initial}.mrd-button-container.disabled[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{background-color:var(--disabled-bg-color)}.mrd-button-container[_ngcontent-%COMP%]:hover:not(.disabled)   .mrd-button-focus[_ngcontent-%COMP%]{background-color:var(--hover-color)}.mrd-button-container[_ngcontent-%COMP%]:active:not(.disabled)   .mrd-button-focus[_ngcontent-%COMP%]{background-color:var(--active-color)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-focus[_ngcontent-%COMP%]{position:absolute;inset:0;border-radius:var(--border-radius)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{position:absolute;inset:0;border-radius:var(--border-radius);background-color:var(--bg-color)}.mrd-button-container.mrd-raised-button[_ngcontent-%COMP%]:not(.disabled){--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-raised-button[_ngcontent-%COMP%]:not(.disabled):active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]{min-width:var(--diameter)!important;height:var(--diameter);padding:0}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{min-height:unset;width:var(--diameter);height:var(--diameter)}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]     mrd-icon{margin:0!important;font-size:calc(var(--diameter) / 2)}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     mrd-icon{font-size:var(--diameter)}.mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]:active, .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]{padding:0 56px;transition:color .2s}.mrd-button-container.mrd-toggle-button.mrd-toggle-selected[_ngcontent-%COMP%]{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040;transform:scale(1.15);z-index:10}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040;z-index:5}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:hover{z-index:5}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{transition:background-color .2s}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:not(.mrd-toggle-selected)   .mrd-button-background[_ngcontent-%COMP%]{background-color:var(--unselected-color)}.mrd-button-container[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container[_ngcontent-%COMP%]     mrd-icon{font-size:1.5em;margin-right:4px;margin-top:2px;width:var(--icon-size);height:var(--icon-size);min-width:1em}.mrd-button-container[_ngcontent-%COMP%]     [mrd-icon][icon-end], .mrd-button-container[_ngcontent-%COMP%]     mrd-icon[icon-end]{margin-right:0;margin-left:4px}.mrd-button-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:10%;left:5px;right:5px;height:10%;min-height:10%}.mrd-button-progress-spinner[_ngcontent-%COMP%]{position:absolute;top:3px;left:3px;width:calc(100% - 6px)!important;height:calc(100% - 6px)!important}"], changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWJ1dHRvbi9jb21wb25lbnRzL21yZC1idXR0b24vbXJkLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWJ1dHRvbi9jb21wb25lbnRzL21yZC1idXR0b24vbXJkLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsc0JBQXNCLEVBQW1CLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6RSxPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFLLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbkUsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFaEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7Ozs7Ozs7O0lDa0M3RSx1Q0FFeUk7OztJQUF2SSw0RkFBZ0Msa0VBQUEsK0JBQUE7OztJQUVsQywyQ0FFNkk7OztJQUEzSSw0RkFBZ0Msa0VBQUEsK0JBQUE7Ozs7Ozs7O0FEdkNwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQWFILE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxzQkFBc0I7SUFtVmhEO0lBQ0g7SUFsVlQ7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RUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQWlCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BLLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQWlCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JLO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNoSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUMzRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUMzRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxJQUFJLElB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QW1CLENBQUE7SUFDbkIsb0NBQWEsQ0FBQTtJQUNiLGtDQUFXLENBQUE7SUFDWCwyQ0FBb0IsQ0FBQTtJQUNwQix3Q0FBaUIsQ0FBQTtBQUNuQixDQUFDLEVBVEksbUJBQW1CLEtBQW5CLG1CQUFtQixRQVN2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1yZEJvcmRlciB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL21vZGVsL2NvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IEJhc2VQdXNoU3RyYXRlZ3lPYmplY3QsIE9ic2VydmFibGVWYWx1ZSwgVXRpbCB9IGZyb20gJ21yZC1jb3JlJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCxWaWV3Q2hpbGQsIGJvb2xlYW5BdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29sb3JVdGlsIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb2xvci51dGlsJztcclxuaW1wb3J0IHsgTXJkQ29uZmlnTW9kZWwgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbC9jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgeyBDb25maWdVdGlsIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb25maWcudXRpbCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcbmltcG9ydCB7IE1yZEJhc2VDb2xvclRoZW1lIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vbW9kZWwvY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgY29sb3JBdHRyaWJ1dGUsIGNvbG9yVGhlbWVBdHRyaWJ1dGUgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi90cmFuc2Zvcm1zL2NvbG9yLXRyYW5zZm9ybSc7XHJcbmltcG9ydCB7IHNpemVBdHRyaWJ1dGUgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi90cmFuc2Zvcm1zL3NpemUtdHJhbnNmb3JtJztcclxuLyoqXHJcbiAqIERpZXNlcyBLb21wb25lbnRlIHN0ZWxsdCBkZW4gTXJkLUJ1dHRvbiB6dXIgVmVyZsO8Z3VuZy5cclxuICpcclxuICogRGVyIEJ1dHRvbiBrYW5uIG1pdHRlbHMgZGVyIGVudHNwcmVjaGVuZGVuIEF0dHJpYnV0ZSBpbiBmb2xnZW5kZW4gU3RpbGVuIGRhcmdlc3RlbGx0IHdlcmRlbjpcclxuICogLSBTdGFuZGFyZC1CdXR0b24gKGRlZmF1bHQpXHJcbiAqIC0gSWNvbi1CdXR0b24gKEF0dHJpYnV0bmFtZTogaWNvbi1idXR0b24pXHJcbiAqIC0gUmFpc2VkLUJ1dHRvbiAoQXR0cmlidXRuYW1lOiByYWlzZWQtYnV0dG9uKVxyXG4gKiAtIE91dGxpbmUtQnV0dG9uIChBdHRyaWJ1dG5hbWU6IG91dGxpbmUtYnV0dG9uKVxyXG4gKiAtIEZsYXQtQnV0dG9uIChBdHRyaWJ1dG5hbWU6IGZsYXQtYnV0dG9uKVxyXG4gKiAtIEZhYi1CdXR0b24gKEF0dHJpYnV0bmFtZTogZmFiLWJ1dHRvbilcclxuICogLSBNaW5pRmFiLUJ1dHRvbiAoQXR0cmlidXRuYW1lOiBtaW5pRmFiLWJ1dHRvbilcclxuICpcclxuICogV2VpdGVyaGluIGvDtm5uZW4gZGllIHN0YW5kYXJkIFRoZW1lcyAocHJpbWFyeSwgYWNjZW50LCB3YXJuKSBmw7xyIGRpZSBIaW50ZXJncnVuZC0gYnp3LiBUZXh0ZmFyYmUgZmVzdGdlbGVndCB3ZXJkZW4gKGplIG5hY2ggU3R5bGUpLlxyXG4gKlxyXG4gKiBGw7xyIHdlaXRlcmUgQW5wYXNzdW5nZW4gc2llaGUgZGllIEluZm9ybWF0aW9uZW4gZGVyIGVpbnplbG5lbiBBdHRyaWJ1dGUgb2RlciBkaWUgRG9rdW1lbnRhdGlvbi5cclxuICpcclxuICogQGNsYXNzIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gKiBAZXh0ZW5kcyB7QmFzZVB1c2hTdHJhdGVneU9iamVjdH1cclxuICogQGltcGxlbWVudHMge0FmdGVyVmlld0luaXR9XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1idXR0b24nLFxyXG4gIGhvc3Q6IHtcclxuICAgJ1tzdHlsZS5taW4td2lkdGhdJzogJ2ZpdENvbnRlbnQgPyBcImZpdC1jb250ZW50XCIgOiBcInVuc2V0XCInLFxyXG4gICAnW3N0eWxlLm1hcmdpbl0nOiAndG9nZ2xlID8gXCIwIC0xNnB4XCIgOiBcInVuc2V0XCInLFxyXG4gICAnW3N0eWxlLnRyYW5zaXRpb25dJzogJ3RvZ2dsZSA/IFwidHJhbnNmb3JtIDAuMnNcIiA6IFwidW5zZXRcIicsXHJcbiAgICdbY2xhc3MuYWN0aXZlXSc6ICd0b2dnbGUgJiYgdG9nZ2xlQWN0aXZlJ1xyXG4gIH0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC1idXR0b24uY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgQmFzZVB1c2hTdHJhdGVneU9iamVjdCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICAvKipcclxuICAgKiBSZWZlcmVueiBhdWYgZGFzIFRleHQtRWxlbWVudCBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50UmVmPEhUTUxFbGVtZW50Pn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQFZpZXdDaGlsZCgnbXJkQnV0dG9uVGV4dENvbnRlbnQnLCB7c3RhdGljOiB0cnVlfSkgbXJkQnV0dG9uVGV4dENvbnRlbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGVpbiBJY29uLUJ1dHRvbiBpc3QuXHJcbiAgICpcclxuICAgKiBEZXIgQ29udGVudCBkZXMgQnV0dG9ucyBzb2xsdGUgbnVyIGVpbiBJY29uIHNlaW4uXHJcbiAgICogRGVyIEJ1dHRvbiBoYXQgc3RhbmRhcmRtw6TDn2lnIGVpbmVuIHRyYW5zcGFyZW50ZW4gSGludGVyZ3J1bmQgdW5kIGRpZSBGYXJiZSBkZXMgSWNvbnMgaXN0IHNjaHdhcnouXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ2ljb24tYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgaWNvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGVpbiBSYWlzZWQtQnV0dG9uIGlzdC5cclxuICAgKlxyXG4gICAqIFJhaXNlZC1CdXR0b25zIGhhYmVuIGVpbmVuIFNjaGF0dGVuLlxyXG4gICAqIERlciBCdXR0b24gaGF0IHN0YW5kYXJkbcOkw59pZyBlaW5lbiB3ZWnDn2VuIEhpbnRlcmdydW5kIHVuZCBkaWUgVGV4dGZhcmJlIHNjaHdhcnouXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ3JhaXNlZC1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSByYWlzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGVpbiBPdXRsaW5lLUJ1dHRvbiBpc3QuXHJcbiAgICpcclxuICAgKiBPdXRsaW5lLUJ1dHRvbnMgaGFiZW4gc3RhbmRhcmRtw6TDn2lnIGVpbmVuIHRyYW5zcGFyZW50ZW4gSGludGVyZ3J1bmQgdW5kIGVpbmVuIGdyYXVlbiBSYW5kLCBzb3dpZSBlaW5lbiBzY2h3YXJ6ZW4gVGV4dC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnb3V0bGluZS1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBvdXRsaW5lOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBlaW4gRmxhdC1CdXR0b24gaXN0LlxyXG4gICAqXHJcbiAgICogRmxhdC1CdXR0b25zIGhhYmVuIHN0YW5kYXJkbcOkw59pZyBlaW5lbiB3ZWnDn2VuIEhpbnRlcmdydW5kIHVuZCBkaWUgVGV4dGZhcmJlIGlzdCBzY2h3YXJ6LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdmbGF0LWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGZsYXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGVpbiBGYWItQnV0dG9uIGlzdC5cclxuICAgKlxyXG4gICAqIEZhYi1CdXR0b25zIHNpbmQga3JlaXNmw7ZybWlnZSBCdXR0b25zLlxyXG4gICAqIFN0YW5kYXJkbcOkw59pZyBoYWJlbiBzaWUgZWluZW4gd2Vpw59lbiBIaW50ZXJncnVuZCB1bmQgZGllIEljb25mYXJiZSBpc3Qgc2Nod2FyeiwgYXXDn2VyZGVtIGJlc2l0emVuIHNpZSBlaW5lbiBTY2hhdHRlbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnZmFiLWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGZhYjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZWluIE1pbmlGYWItQnV0dG9uIGlzdC5cclxuICAgKlxyXG4gICAqIE1pbmlGYWItQnV0dG9ucyBzaW5kIGtyZWlzZsO2cm1pZ2UgQnV0dG9ucyB2b24gZGVyIEdyw7bDn2UgZWluZXMgSWNvbi1CdXR0b25zLlxyXG4gICAqIFN0YW5kYXJkbcOkw59pZyBoYWJlbiBzaWUgZWluZW4gd2Vpw59lbiBIaW50ZXJncnVuZCB1bmQgZGllIEljb25mYXJiZSBpc3Qgc2Nod2FyeiwgYXXDn2VyZGVtIGJlc2l0emVuIHNpZSBlaW5lbiBTY2hhdHRlbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnbWluaUZhYi1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBtaW5pRmFiOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7YWxpYXM6ICd0b2dnbGUtYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgdG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7YWxpYXM6ICdzZWxlY3RlZCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHRvZ2dsZVNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZGFzIFRoZW1lIFwicHJpbWFyeVwiIGhhdC5cclxuICAgKlxyXG4gICAqIEhpZXJkdXJjaCB3aXJkIGRpZSBIaW50ZXJncnVuZGZhcmJlIGRlcyBCdXR0b25zIGF1ZiBkaWUgcHJpbcOkcmUgRmFyYmUgZGVzIFRoZW1lcyBnZXNldHp0LlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHByaW1hcnk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBkYXMgVGhlbWUgXCJhY2NlbnRcIiBoYXQuXHJcbiAgICpcclxuICAgKiBIaWVyZHVyY2ggd2lyZCBkaWUgSGludGVyZ3J1bmRmYXJiZSBkZXMgQnV0dG9ucyBhdWYgZGllIEFremVudGZhcmJlIGRlcyBUaGVtZXMgZ2VzZXR6dC5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBhY2NlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBkYXMgVGhlbWUgXCJ3YXJuXCIgaGF0LlxyXG4gICAqXHJcbiAgICogSGllcmR1cmNoIHdpcmQgZGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIEJ1dHRvbnMgYXVmIGRpZSBXYXJuZmFyYmUgZGVzIFRoZW1lcyBnZXNldHp0LlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHdhcm46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBkZWFrdGl2aWVydCBpc3QuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRWluZSBPYnNlcnZhYmxlVmFsdWUsIGRpZSDDvGJlcmdlYmVuIHdlcmRlbiBrYW5uLCB1bSB6dSBiZXN0aW1tZW4sXHJcbiAgICogb2IgZGVyIEJ1dHRvbiBlaW5lbiBMYWRlYmFsa2VuL0xhZGVzcGlubmVyIGFuemVpZ2VuIHNvbGwuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIGxvYWRpbmc6IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPjtcclxuICAvKipcclxuICAgKiBFaW4gYm9vbGVhbiwgZGVyIGJlc3RpbW10LCBvYiBkZXIgQnV0dG9uIGVpbmVuIExhZGViYWxrZW4vTGFkZXNwaW5uZXIgYW56ZWlnZW4gc29sbC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBFaW5lIE9ic2VydmFibGVWYWx1ZSwgZGllIMO8YmVyZ2ViZW4gd2VyZGVuIGthbm4sIHVtIGRlbiBGb3J0c2Nocml0dCBkZXMgTGFkZWJhbGtlbnMvTGFkZXNwaW5uZXJzIHp1IGJlc3RpbW1lbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYnNlcnZhYmxlVmFsdWU8bnVtYmVyPn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIGxvYWRpbmdQcm9ncmVzczogT2JzZXJ2YWJsZVZhbHVlPG51bWJlcj47XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHp0IGRpZSBHcnVuZGZhcmJlIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogRGllc2Ugd2lyZCBqZSBuYWNoIFN0eWxlIGRlcyBCdXR0b25zIGFscyBIaW50ZXJncnVuZGZhcmJlIG9kZXIgVGV4dGZhcmJlIHZlcndlbmRldC5cclxuICAgKlxyXG4gICAqIEVzIGvDtm5uZW4gSGV4LSwgUkdCLSBvZGVyIFJHQkEtV2VydGUsIHNvd2llIFwicHJpbWFyeVwiLCBcImFjY2VudFwiIG9kZXIgXCJ3YXJuXCIgYW5nZWdlYmVuIHdlcmRlbi5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnY29sb3InLCB0cmFuc2Zvcm06IGNvbG9yVGhlbWVBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tVGV4dENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHp0IGRpZSBIaW50ZXJncnVuZGZhcmJlIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogRXMga8O2bm5lbiBIZXgtLCBSR0ItIG9kZXIgUkdCQS1XZXJ0ZSBhbmdlZ2ViZW4gd2VyZGVuLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdiYWNrZ3JvdW5kQ29sb3InLCB0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbUJnQ29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGllIGJlbnV0emVyZGVmaW5pZXJ0ZSBUZXh0ZmFyYmUgbmljaHQgZHVyY2ggZWluIGRlZm5pZXJ0ZXMgVGhlbWEgw7xiZXJzY2hyaWViZW4gd2VyZGVuIHNvbGwuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMga2VlcEN1c3RvbVRleHRDb2xvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRpZSBiZW51dHplcmRlZmluaWVydGUgSGludGVyZ3J1bmRmYXJiZSBuaWNodCBkdXJjaCBlaW4gZGVmaW5pZXJ0ZXMgVGhlbWEgw7xiZXJzY2hyaWViZW4gd2VyZGVuIHNvbGwuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMga2VlcEN1c3RvbUJnQ29sb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tVG9nZ2xlU2VsZWN0ZWRUZXh0Q29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0enQgZGllIEZhcmJlIGRlcyBMYWRlYmFsa2Vucy9MYWRlc3Bpbm5lcnMuXHJcbiAgICpcclxuICAgKiBFcyBrw7ZubmVuIEhleC0sIFJHQi0gb2RlciBSR0JBLVdlcnRlIGFuZ2VnZWJlbiB3ZXJkZW4uXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIHByb2dyZXNzQ29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbi1UZXh0IHZlcnNjaHdpbmRldCwgd2VubiBlciB6dSBsYW5nIGlzdCB1bmQgYXVzZ2VwdW5rdGV0IHdlcmRlbiB3w7xyZGUuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgY29sbGFwc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCB6dSB3ZWxjaGVtIFN0eWxlIGRlciBCdXR0b24ga29sbGFiaWVyZW4gc29sbC5cclxuICAgKiBNw7ZnbGljaGUgV2VydGU6IFwiaWNvblwiLCBcImZhYlwiLCBcIm1pbmlGYWJcIlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgY29sbGFwc2VUbyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5fY29sbGFwc2VUbyA9PT0gdmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLklDT04gfHwgdmFsdWUgPT09IE1yZEJ1dHRvbkFwcGVhcmFuY2UuRkFCIHx8IHZhbHVlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLk1JTklfRkFCKSB7XHJcbiAgICAgIHRoaXMuX2NvbGxhcHNlVG8gPSB2YWx1ZTtcclxuICAgICAgdGhpcy5jb2xsYXBzZSA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdEYXMgQXR0cmlidXQgY29sbGFwc2VUbyBrYW5uIG51ciBcImljb25cIiwgXCJmYWJcIiBvZGVyIFwibWluaUZhYlwiIHNlaW4uJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgY29sbGFwc2VUbygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbGxhcHNlVG87XHJcbiAgfVxyXG4gIHByaXZhdGUgX2NvbGxhcHNlVG86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU29yZ3QgZGFmw7xyLCBkYXNzIGRlciBCdXR0b24gaW1tZXIgbWluZGVzdGVucyBzbyBicmVpdCBpc3QsIHdpZSBzZWluIEluaGFsdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnZml0LWNvbnRlbnQnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZml0Q29udGVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGVpbmVuIFRvb2x0aXAgYW56ZWlnZW4gc29sbC5cclxuICAgKlxyXG4gICAqIERlciBUb29sdGlwLVRleHQgd2lyZCBzdGFuZGFyZG3DpMOfaWcgYXVzIGRlbSBJbmhhbHQgZGVzIEJ1dHRvbnMgb2huZSBkdXJjaCBbbXJkLWljb25dIGdla2VubnplaWNobmV0ZSBJY29ucyBnZW5lcmllcnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ3Rvb2x0aXAnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2hvd1Rvb2x0aXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBEZXIgVGV4dCBkZXMgVG9vbHRpcHMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgdG9vbHRpcFRleHQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgVG9vbHRpcCBudXIgYW5nZXplaWd0IHdlcmRlbiBzb2xsLCB3ZW5uIGRlciBCdXR0b24tVGV4dCBhdXNnZXB1bmt0ZXQgd2lyZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgdG9vbHRpcElmVHJ1bmNhdGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnNob3dUb29sdGlwID0gdmFsdWUgfHwgdGhpcy5zaG93VG9vbHRpcDtcclxuICAgIHRoaXMuX3Rvb2x0aXBJZlRydW5jYXRlZCA9IHZhbHVlO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IHRvb2x0aXBJZlRydW5jYXRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl90b29sdGlwSWZUcnVuY2F0ZWQ7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3Rvb2x0aXBJZlRydW5jYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBEaWUgTWluZGVzdGjDtmhlIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogV2lyZCBlaW5lIFphaGwgYW5nZWdlYmVuLCB3aXJkIGRpZXNlIGFscyBQaXhlbHdlcnQgaW50ZXJwcmV0aWVydC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIG1pbkhlaWdodDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIERpZSBTY2hyaWZ0Z3LDtsOfZSBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIFdpcmQgZWluZSBaYWhsIGFuZ2VnZWJlbiwgd2lyZCBkaWVzZSBhbHMgUGl4ZWx3ZXJ0IGludGVycHJldGllcnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBmb250U2l6ZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIERlciBEdXJjaG1lc3NlciBmw7xyIEljb24tLCBGYWItIHVuZCBNaW5pRmFiLUJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBXaXJkIGVpbmUgWmFobCBhbmdlZ2ViZW4sIHdpcmQgZGllc2UgYWxzIFBpeGVsd2VydCBpbnRlcnByZXRpZXJ0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZyB8IG51bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgZGlhbWV0ZXI6IHN0cmluZztcclxuICAvKipcclxuICAgKiBEaWUgR3LDtsOfZSBkZXMgSWNvbnMuXHJcbiAgICpcclxuICAgKiBXaXJkIGVpbmUgWmFobCBhbmdlZ2ViZW4sIHdpcmQgZGllc2UgYWxzIFBpeGVsd2VydCBpbnRlcnByZXRpZXJ0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZyB8IG51bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgaWNvblNpemU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZnVsbEljb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBEZXIgUmFkaXVzIGRlciBFY2tlbiBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIFdpcmQgZWluZSBaYWhsIGFuZ2VnZWJlbiwgd2lyZCBkaWVzZSBhbHMgUGl4ZWx3ZXJ0IGludGVycHJldGllcnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBib3JkZXJSYWRpdXM6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRGFzIEtsaWNrLUV2ZW50IGR1cmNoIGRlbiBOdXR6ZXIuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPEV2ZW50Pn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBjbGljazogRXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcblxyXG5cclxuICAvKipcclxuICAgKiBEaWUgS29uZmlndXJhdGlvbiBkZXMgTXJkLUJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEB0eXBlIHtNcmRDb25maWdNb2RlbH1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfY29uZmlnOiBNcmRDb25maWdNb2RlbCA9IENvbmZpZ1V0aWwuZ2V0Q29uZmlnKCk7XHJcblxyXG4gIHB1YmxpYyBpc0NvbGxhcHNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdW5jb2xsYXBzZWRBcHBlYXJhbmNlOiBNcmRCdXR0b25BcHBlYXJhbmNlO1xyXG5cclxuICBwcml2YXRlIGJ1dHRvblByaW1hcnk6IHN0cmluZyB8IE1yZEJhc2VDb2xvclRoZW1lO1xyXG4gIHByaXZhdGUgYnV0dG9uQWNjZW50OiBzdHJpbmcgfCBNcmRCYXNlQ29sb3JUaGVtZTtcclxuICBwcml2YXRlIGJ1dHRvbldhcm46IHN0cmluZyB8IE1yZEJhc2VDb2xvclRoZW1lO1xyXG4gIHByaXZhdGUgYnV0dG9uRGlzYWJsZWQ6IE1yZEJhc2VDb2xvclRoZW1lO1xyXG4gIHByaXZhdGUgYnV0dG9uUHJvZ3Jlc3M6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGJnQ29sb3I6IHN0cmluZztcclxuICBwcml2YXRlIHRleHRMaWdodENvbG9yOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSB0ZXh0RGFya0NvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIHRleHRDb2xvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBob3ZlckNvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIGFjdGl2ZUNvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIGRpc2FibGVkVGV4dENvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIGRpc2FibGVkQmdDb2xvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyB0b2dnbGVVbnNlbGVjdGVkQ29sb3I6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGJvcmRlcldpZHRoOiBzdHJpbmc7XHJcbiAgcHVibGljIGJvcmRlclN0eWxlOiBzdHJpbmc7XHJcbiAgcHVibGljIGJvcmRlckNvbG9yOiBzdHJpbmc7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+XHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMubG9hZGluZykpIHtcclxuICAgICAgdGhpcy5tYXJrRm9yQ2hlY2tJZih0aGlzLmxvYWRpbmcuY2hhbmdlZClcclxuICAgIH1cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmxvYWRpbmdQcm9ncmVzcykpIHtcclxuICAgICAgdGhpcy5tYXJrRm9yQ2hlY2tJZih0aGlzLmxvYWRpbmdQcm9ncmVzcy5jaGFuZ2VkKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5pdEJhc2VTdHlsZSgpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU3R5bGUoKTtcclxuXHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlU3R5bGUoKTogdm9pZCB7XHJcbiAgICBsZXQgdGhlbWVzQ291bnQgPSBbdGhpcy5wcmltYXJ5LCB0aGlzLmFjY2VudCwgdGhpcy53YXJuXS5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZSkubGVuZ3RoO1xyXG4gICAgaWYgKHRoZW1lc0NvdW50ID4gMSkge1xyXG4gICAgICB0aHJvdyBFcnJvcignRWluIE1yZEJ1dHRvbiBrYW5uIG51ciBlaW4gVGhlbWEgaGFiZW4uIFNldHplIFwicHJpbWFyeVwiLCBcImFjY2VudFwiIG9kZXIgXCJ3YXJuXCIgYWxzIFRoZW1hLicpO1xyXG4gICAgfVxyXG4gICAgbGV0IGFwcGVhcmFuY2VDb3VudCA9IFt0aGlzLmljb24sIHRoaXMucmFpc2VkLCB0aGlzLm91dGxpbmUsIHRoaXMuZmxhdCwgdGhpcy5mYWIsIHRoaXMubWluaUZhYiwgdGhpcy50b2dnbGVdLmZpbHRlcigodmFsdWUpID0+IHZhbHVlKS5sZW5ndGg7XHJcbiAgICBpZiAoYXBwZWFyYW5jZUNvdW50ID4gMSkge1xyXG4gICAgICB0aHJvdyBFcnJvcignRWluIE1yZEJ1dHRvbiBrYW5uIG51ciBlaW5lbiBTdHlsZSBoYWJlbi4gU2V0emUgXCJpY29uLWJ1dHRvblwiLCBcInJhaXNlZC1idXR0b25cIiwgXCJvdXRsaW5lLWJ1dHRvblwiLCBcImZsYXQtYnV0dG9uXCIsIFwiZmFiLWJ1dHRvblwiLCBcIm1pbmlGYWItYnV0dG9uXCIgb2RlciBrZWluZW4gU3R5bGUuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmFsbHMgaXJnZW5kZWluZSBGYXJiZS9UaGVtYSBnZXNldHp0IGlzdCwgd2lyZCBkaWUgSGludGVyZ3J1bmQtIHVuZCBUZXh0ZmFyYmUgZGVzIEJ1dHRvbnMgYW5oYW5kIGRpZXNlciB1bmQgZGVzIFN0eWxlcyBnZXNldHp0LlxyXG4gICAgaWYgKHRoaXMucHJpbWFyeSB8fCB0aGlzLmFjY2VudCB8fCB0aGlzLndhcm4gfHwgdGhpcy5jdXN0b21CZ0NvbG9yIHx8IHRoaXMuY3VzdG9tVGV4dENvbG9yKSB7XHJcbiAgICAgIC8vIFdlbm4gJ2tlZXBDdXN0b21CZ0NvbG9yJyBnZXNldHp0IGlzdCwgZGFubiB3aXJkICdjdXN0b21CZ0NvbG9yJyBhbHMgJ2Jhc2VDb2xvcicgdmVyd2VuZGV0XHJcbiAgICAgIGxldCBiYXNlQ29sb3I6IHN0cmluZyA9IHRoaXMua2VlcEN1c3RvbUJnQ29sb3IgJiYgISF0aGlzLmN1c3RvbUJnQ29sb3IgPyB0aGlzLmN1c3RvbUJnQ29sb3IgOlxyXG4gICAgICAgIC8vIFNvbnN0IHdlbm4gZWluIFRoZW1lIGdlc2V0enQgaXN0LCB3aXJkIGRpZSBlbnRzcHJlY2hlbmRlIEZhcmJlIGRlcyBUaGVtZXMgdmVyd2VuZGV0XHJcbiAgICAgICAgdGhpcy5wcmltYXJ5ID8gXy5pc09iamVjdCh0aGlzLmJ1dHRvblByaW1hcnkpID8gKHRoaXMuYnV0dG9uUHJpbWFyeSBhcyBNcmRCYXNlQ29sb3JUaGVtZSkuYmFja2dyb3VuZCA6IHRoaXMuYnV0dG9uUHJpbWFyeSBhcyBzdHJpbmcgOlxyXG4gICAgICAgIHRoaXMuYWNjZW50ID8gXy5pc09iamVjdCh0aGlzLmJ1dHRvbkFjY2VudCkgPyAodGhpcy5idXR0b25BY2NlbnQgYXMgTXJkQmFzZUNvbG9yVGhlbWUpLmJhY2tncm91bmQgOiB0aGlzLmJ1dHRvbkFjY2VudCBhcyBzdHJpbmcgOlxyXG4gICAgICAgIHRoaXMud2FybiA/IF8uaXNPYmplY3QodGhpcy5idXR0b25XYXJuKSA/ICh0aGlzLmJ1dHRvbldhcm4gYXMgTXJkQmFzZUNvbG9yVGhlbWUpLmJhY2tncm91bmQgOiB0aGlzLmJ1dHRvbldhcm4gYXMgc3RyaW5nIDpcclxuICAgICAgICAvLyBTb25zdCB3ZW5uICdjdXN0b21CZ0NvbG9yJyBnZXNldHp0IGlzdCwgd2lyZCAnY3VzdG9tQmdDb2xvcicgdmVyd2VuZGV0LCBzb25zdCAnY3VzdG9tVGV4dENvbG9yJ1xyXG4gICAgICAgICEhdGhpcy5jdXN0b21CZ0NvbG9yID8gdGhpcy5jdXN0b21CZ0NvbG9yIDogdGhpcy5jdXN0b21UZXh0Q29sb3I7XHJcblxyXG4gICAgICAvLyBXZW5uICdrZWVwQ3VzdG9tVGV4dENvbG9yJyBnZXNldHp0IGlzdCwgZGFubiB3aXJkICdjdXN0b21UZXh0Q29sb3InIGFscyAnYmFzZVRleHRDb2xvcicgdmVyd2VuZGV0XHJcbiAgICAgIGxldCBiYXNlVGV4dENvbG9yID0gdGhpcy5rZWVwQ3VzdG9tVGV4dENvbG9yICYmICEhdGhpcy5jdXN0b21UZXh0Q29sb3IgPyB0aGlzLmN1c3RvbVRleHRDb2xvciA6XHJcbiAgICAgICAgLy8gU29uc3Qgd2VubiBlaW4gVGhlbWUgZ2VzZXR6dCBpc3QsIHdpcmQgZGllIGVudHNwcmVjaGVuZGUgRmFyYmUgZGVzIFRoZW1lcyB2ZXJ3ZW5kZXRcclxuICAgICAgICB0aGlzLnByaW1hcnkgPyBfLmlzT2JqZWN0KHRoaXMuYnV0dG9uUHJpbWFyeSkgPyAodGhpcy5idXR0b25QcmltYXJ5IGFzIE1yZEJhc2VDb2xvclRoZW1lKS50ZXh0IDogdGhpcy5idXR0b25QcmltYXJ5IGFzIHN0cmluZyA6XHJcbiAgICAgICAgdGhpcy5hY2NlbnQgPyBfLmlzT2JqZWN0KHRoaXMuYnV0dG9uQWNjZW50KSA/ICh0aGlzLmJ1dHRvbkFjY2VudCBhcyBNcmRCYXNlQ29sb3JUaGVtZSkudGV4dCA6IHRoaXMuYnV0dG9uQWNjZW50IGFzIHN0cmluZyA6XHJcbiAgICAgICAgdGhpcy53YXJuID8gXy5pc09iamVjdCh0aGlzLmJ1dHRvbldhcm4pID8gKHRoaXMuYnV0dG9uV2FybiBhcyBNcmRCYXNlQ29sb3JUaGVtZSkudGV4dCA6IHRoaXMuYnV0dG9uV2FybiBhcyBzdHJpbmcgOlxyXG4gICAgICAgIC8vIFNvbnN0IHdlbm4gJ2N1c3RvbVRleHRDb2xvcicgZ2VzZXR6dCBpc3QsIHdpcmQgJ2N1c3RvbVRleHRDb2xvcicgdmVyd2VuZGV0LCBzb25zdCAndGV4dERhcmtDb2xvcidcclxuICAgICAgICAhIXRoaXMuY3VzdG9tVGV4dENvbG9yID8gdGhpcy5jdXN0b21UZXh0Q29sb3IgOiB0aGlzLnRleHREYXJrQ29sb3I7XHJcblxyXG4gICAgICAvLyAnYmdDb2xvcicgd2lyZCBhdWYgJ2Jhc2VDb2xvcicgZ2VzZXR6dFxyXG4gICAgICB0aGlzLmJnQ29sb3IgPSBiYXNlQ29sb3I7XHJcbiAgICAgIC8vIFdlbm4gJ2tlZXBDdXN0b21UZXh0Q29sb3InIG9kZXIga2VpbiBUaGVtYSB1bmQgJ2N1c3RvbUJnQ29sb3InLCB1bmQgJ2N1c3RvbVRleHRDb2xvcicgZ2VzZXR6dCBzaW5kLCB3aXJkICd0ZXh0Q29sb3InIGF1ZiAnY3VzdG9tVGV4dENvbG9yJyBnZXNldHp0XHJcbiAgICAgIHRoaXMudGV4dENvbG9yID0gKHRoaXMua2VlcEN1c3RvbVRleHRDb2xvciB8fCAodGhlbWVzQ291bnQgPT09IDAgJiYgdGhpcy5jdXN0b21CZ0NvbG9yKSkgJiYgISF0aGlzLmN1c3RvbVRleHRDb2xvciA/IHRoaXMuY3VzdG9tVGV4dENvbG9yIDpcclxuICAgICAgICAvLyBTb25zdCB3ZW5uIGVpbiBUaGVtYSB1bmQgJ2tlZXBDdXN0b21CZ0NvbG9yJyBnZXNldHp0IGlzdCwgd2lyZCAnYmFzZVRleHRDb2xvcicgdmVyd2VuZGV0XHJcbiAgICAgICAgKHRoZW1lc0NvdW50ID09PSAxICYmIHRoaXMua2VlcEN1c3RvbUJnQ29sb3IpID8gYmFzZVRleHRDb2xvciA6XHJcbiAgICAgICAgLy8gU29uc3QsIHdlbm4gZGllIEFwcGVhcmFuY2UgbmljaHQgVG9nZ2xlIGlzdCBvZGVyIGRlciBUb2dnbGUtQnV0dG9uIHNlbGVrdGllcnQgaXN0LFxyXG4gICAgICAgIC8vIHdpcmQgYW5oYW5kIGRlciAnYmFzZUNvbG9yJyBlbnRzY2hpZWRlbiwgb2IgJ3RleHREYXJrQ29sb3InIG9kZXIgJ3RleHRMaWdodENvbG9yJyB2ZXJ3ZW5kZXQgd2lyZFxyXG4gICAgICAgIHRoaXMudG9nZ2xlID8gdGhpcy50b2dnbGVTZWxlY3RlZCAmJiB0aGlzLmN1c3RvbVRvZ2dsZVNlbGVjdGVkVGV4dENvbG9yID8gdGhpcy5jdXN0b21Ub2dnbGVTZWxlY3RlZFRleHRDb2xvciA6XHJcbiAgICAgICAgICAhdGhpcy50b2dnbGVTZWxlY3RlZCAmJiB0aGlzLmN1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRUZXh0Q29sb3IgPyB0aGlzLmN1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRUZXh0Q29sb3IgOlxyXG4gICAgICAgIC8qIXRoaXMudG9nZ2xlIHx8Ki8gdGhpcy50b2dnbGVTZWxlY3RlZCA/IENvbG9yVXRpbC5zaG91bGRUZXh0QmVEYXJrKGJhc2VDb2xvcikgPyB0aGlzLnRleHREYXJrQ29sb3IgOiB0aGlzLnRleHRMaWdodENvbG9yIDpcclxuICAgICAgICBDb2xvclV0aWwuc2hvdWxkVGV4dEJlRGFyayh0aGlzLnRvZ2dsZVVuc2VsZWN0ZWRDb2xvcikgPyB0aGlzLnRleHREYXJrQ29sb3IgOiB0aGlzLnRleHRMaWdodENvbG9yIDpcclxuICAgICAgICAvLyBXZW5uIGRpZSBBcHBlYXJhbmNlIFRvZ2dsZSBpc3QgdW5kIGRlciBCdXR0b24gbmljaHQgc2VsZWt0aWVydCBpc3QgdW5kICdjdXN0b21Ub2dnbGVVbnNlbGVjdGVkVGV4dENvbG9yJyBnZXNldHp0IGlzdCxcclxuICAgICAgICAvLyB3aXJkIGRpZXNlIHZlcndlbmRldFxyXG4gICAgICAgIC8vIHRoaXMuY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvciA/IHRoaXMuY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvciA6XHJcbiAgICAgICAgLy8gU29uc3Qgd2lyZCBhbmhhbmQgdm9uICd0b2dnbGVVbnNlbGVjdGVkQ29sb3InIGVudHNjaGllZGVuLCBvYiAndGV4dERhcmtDb2xvcicgb2RlciAndGV4dExpZ2h0Q29sb3InIHZlcndlbmRldCB3aXJkXHJcbiAgICAgICAgQ29sb3JVdGlsLnNob3VsZFRleHRCZURhcmsoYmFzZUNvbG9yKSA/IHRoaXMudGV4dERhcmtDb2xvciA6IHRoaXMudGV4dExpZ2h0Q29sb3I7XHJcbiAgICAgICAgLy8gU29uc3Qgd2lyZCAndG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvcicgdmVyd2VuZGV0XHJcbiAgICAgIC8vICdob3ZlckNvbG9yJyB3aXJkIGF1ZiAyMCUgdHJhbnNwYXJlbnRlIFZlcnNpb24gdm9uICdiYXNlQ29sb3InIGdlc2V0enRcclxuICAgICAgdGhpcy5ob3ZlckNvbG9yID0gQ29sb3JVdGlsLmNoYW5nZUNvbG9yT3BhY2l0eShiYXNlQ29sb3IsIDIwKTtcclxuICAgICAgLy8gJ2FjdGl2ZUNvbG9yJyB3aXJkIGF1ZiAzMCUgdHJhbnNwYXJlbnRlIFZlcnNpb24gdm9uICdiYXNlQ29sb3InIG1pdCAxMCUgaGVsbGVyZXIgRmFyYmUgZ2VzZXR6dFxyXG4gICAgICB0aGlzLmFjdGl2ZUNvbG9yID0gQ29sb3JVdGlsLmNoYW5nZUNvbG9yT3BhY2l0eShDb2xvclV0aWwuY2hhbmdlQ29sb3JCcmlnaHRuZXNzUGVyY2VudChiYXNlQ29sb3IsIDEwKSwgMzApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEbDvHIgZGVuIFN0YW5kYXJkLVN0eWxlLCBPdXRsaW5lLVN0eWxlIHVuZCBJY29uLVN0eWxlXHJcbiAgICBpZiAoYXBwZWFyYW5jZUNvdW50ID09PSAwIHx8IHRoaXMub3V0bGluZSB8fCB0aGlzLmljb24pIHtcclxuICAgICAgLy8gV2VubiBlaW4gVGhlbWEgdW5kICdrZWVwQ3VzdG9tQmdDb2xvcicgbmljaHQgZ2VzZXR6IGlzdCBPREVSXHJcbiAgICAgIC8vIGtlaW5lICdjdXN0b21CZ0NvbG9yJywgYWJlciAnY3VzdG9tVGV4dENvbG9yJyBnZXNldHp0IHNpbmQuLi5cclxuICAgICAgaWYgKCh0aGVtZXNDb3VudCA9PT0gMSAmJiAhdGhpcy5rZWVwQ3VzdG9tQmdDb2xvcikgfHwgKCF0aGlzLmN1c3RvbUJnQ29sb3IgJiYgdGhpcy5jdXN0b21UZXh0Q29sb3IpKSB7XHJcbiAgICAgICAgLy8gLi4uIHdpcmQgJ3RleHRDb2xvcicsIGZhbGxzIG5pY2h0IGR1cmNoICdrZWVwQ3VzdG9tVGV4dENvbG9yJyB1bmQgJ2N1c3RvbVRleHRDb2xvcicgZmVzdCwgYXVmICdiZ0NvbG9yJyBnZXNldHp0XHJcbiAgICAgICAgdGhpcy50ZXh0Q29sb3IgPSAodGhpcy5rZWVwQ3VzdG9tVGV4dENvbG9yICYmICEhdGhpcy5jdXN0b21UZXh0Q29sb3IpID8gdGhpcy5jdXN0b21UZXh0Q29sb3IgOiB0aGlzLmJnQ29sb3I7XHJcbiAgICAgICAgLy8gLi4uIHdpcmQgJ2JnQ29sb3InLCBmYWxscyBuaWNodCBkdXJjaCAna2VlcEN1c3RvbUJnQ29sb3InIHVuZCAnY3VzdG9tQmdDb2xvcicgZmVzdCwgYXVmIGRpZSBTdGFuZGFyZC1IaW50ZXJncnVuZGZhcmJlIGdlc2V0enRcclxuICAgICAgICB0aGlzLmJnQ29sb3IgPSAodGhpcy5rZWVwQ3VzdG9tQmdDb2xvciAmJiAhIXRoaXMuY3VzdG9tQmdDb2xvcikgPyB0aGlzLmN1c3RvbUJnQ29sb3IgOiB0aGlzLl9jb25maWcuYnV0dG9uLmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZhbGxzIGtlaW5lICdwcm9ncmVzc0NvbG9yJyBnZXNldHp0IGlzdC4uLlxyXG4gICAgaWYgKCF0aGlzLnByb2dyZXNzQ29sb3IpIHtcclxuICAgICAgLy8gLi4uIHVuZCB3aXIgZWluIFRoZW1lIG9kZXIgZWluZSBiZW51dHplcmRlZmluaWVydGUgVGV4dGZhcmJlIG9kZXIgSGludGVyZ3J1bmRmYXJiZSBoYWJlbi4uLlxyXG4gICAgICBpZiAodGhlbWVzQ291bnQgPT09IDEgfHwgdGhpcy5jdXN0b21UZXh0Q29sb3IgfHwgdGhpcy5jdXN0b21CZ0NvbG9yKSB7XHJcbiAgICAgICAgLy8gLi4uIHdpcmQgJ3Byb2dyZXNzQ29sb3InIGbDvHIgZGVuIFN0YW5kYXJkLVN0eWxlLCBPdXRsaW5lLVN0eWxlIHVuZCBJY29uLVN0eWxlIGF1ZiAndGV4dENvbG9yJyBnZXNldHp0LFxyXG4gICAgICAgIC8vIGFuc29uc3RlbiBhdWYgMjAlIGhlbGxlcmUgVmVyc2lvbiB2b24gJ2JnQ29sb3InXHJcbiAgICAgICAgaWYgKGFwcGVhcmFuY2VDb3VudCA9PT0gMCB8fCB0aGlzLm91dGxpbmUgfHwgdGhpcy5pY29uKSB7XHJcbiAgICAgICAgICB0aGlzLnByb2dyZXNzQ29sb3IgPSB0aGlzLnRleHRDb2xvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5wcm9ncmVzc0NvbG9yID0gQ29sb3JVdGlsLmNoYW5nZUNvbG9yQnJpZ2h0bmVzc1BlcmNlbnQodGhpcy5iZ0NvbG9yLCAyMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIE9obmUgVGhlbWUgdW5kIGJlbnV0emVyZGVmaW5pZXJ0ZSBGYXJiZW4gd2lyZCAncHJvZ3Jlc3NDb2xvcicgYXVmIGRpZSBHcnVuZC1Qcm9ncmVzcy1Db2xvciBnZXNldHp0XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0NvbG9yID0gdGhpcy5idXR0b25Qcm9ncmVzcztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZhbGxzIGtlaW4gZXhwbGl6aWV0ZXIgJ3Rvb2x0aXBUZXh0JyBnZXNldHp0IGlzdCwgd2lyZCBkZXIgVGV4dCBkZXMgQnV0dG9ucyBhbHMgVG9vbHRpcC1UZXh0IHZlcndlbmRldFxyXG4gICAgaWYgKHRoaXMubXJkQnV0dG9uVGV4dENvbnRlbnQgJiYgIXRoaXMudG9vbHRpcFRleHQpIHtcclxuICAgICAgdGhpcy50b29sdGlwVGV4dCA9IHRoaXMubXJkQnV0dG9uVGV4dENvbnRlbnQubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXR6dCBkaWUgU3RhbmRhcmQtU3R5bGVzIGFuaGFuZCBkZXIgS29uZmlndXJhdGlvbiB1bmQgZGVyIGdlc2V0enRlbiBBdHRyaWJ1dGUuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBwcml2YXRlIGluaXRCYXNlU3R5bGUoKTogdm9pZCB7XHJcbiAgICBsZXQgYXBwZWFyYW5jZTogTXJkQnV0dG9uQXBwZWFyYW5jZSA9IHRoaXMuaWNvbiA/IE1yZEJ1dHRvbkFwcGVhcmFuY2UuSUNPTiA6IHRoaXMucmFpc2VkID8gTXJkQnV0dG9uQXBwZWFyYW5jZS5SQUlTRUQgOlxyXG4gICAgICB0aGlzLm91dGxpbmUgPyBNcmRCdXR0b25BcHBlYXJhbmNlLk9VVExJTkUgOiB0aGlzLmZsYXQgPyBNcmRCdXR0b25BcHBlYXJhbmNlLkZMQVQgOiB0aGlzLmZhYiA/IE1yZEJ1dHRvbkFwcGVhcmFuY2UuRkFCIDpcclxuICAgICAgdGhpcy5taW5pRmFiID8gTXJkQnV0dG9uQXBwZWFyYW5jZS5NSU5JX0ZBQiA6IHRoaXMudG9nZ2xlID8gTXJkQnV0dG9uQXBwZWFyYW5jZS5UT0dHTEUgOiBudWxsOy8vTXJkQnV0dG9uQXBwZWFyYW5jZS5ERUZBVUxUO1xyXG4gICAgdGhpcy51bmNvbGxhcHNlZEFwcGVhcmFuY2UgPSB0aGlzLnVuY29sbGFwc2VkQXBwZWFyYW5jZSAhPT0gdW5kZWZpbmVkID8gdGhpcy51bmNvbGxhcHNlZEFwcGVhcmFuY2UgOiBhcHBlYXJhbmNlO1xyXG5cclxuICAgIHRoaXMuYnV0dG9uUHJpbWFyeSA9IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LnByaW1hcnkgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5wcmltYXJ5IHx8IHRoaXMuX2NvbmZpZy5iYXNlQ29sb3JzLnByaW1hcnk7XHJcbiAgICB0aGlzLmJ1dHRvbkFjY2VudCA9IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LmFjY2VudCB8fCB0aGlzLl9jb25maWcuYnV0dG9uLmFjY2VudCB8fCB0aGlzLl9jb25maWcuYmFzZUNvbG9ycy5hY2NlbnQ7XHJcbiAgICB0aGlzLmJ1dHRvbldhcm4gPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy53YXJuIHx8IHRoaXMuX2NvbmZpZy5idXR0b24ud2FybiB8fCB0aGlzLl9jb25maWcuYmFzZUNvbG9ycy53YXJuO1xyXG4gICAgdGhpcy5idXR0b25EaXNhYmxlZCA9IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LmRpc2FibGVkIHx8IHRoaXMuX2NvbmZpZy5idXR0b24uZGlzYWJsZWRcclxuICAgIHRoaXMuYnV0dG9uUHJvZ3Jlc3MgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5wcm9ncmVzc0NvbG9yIHx8IHRoaXMuX2NvbmZpZy5idXR0b24/LnByb2dyZXNzQ29sb3IgfHxcclxuICAgICAgKF8uaXNPYmplY3QodGhpcy5idXR0b25QcmltYXJ5KSA/ICh0aGlzLmJ1dHRvblByaW1hcnkgYXMgTXJkQmFzZUNvbG9yVGhlbWUpLnRleHQgOiB0aGlzLmJ1dHRvblByaW1hcnkgYXMgc3RyaW5nKTtcclxuXHJcbiAgICB0aGlzLmJnQ29sb3IgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5iYWNrZ3JvdW5kQ29sb3IgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLnRleHRMaWdodENvbG9yID0gdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8udGV4dExpZ2h0Q29sb3IgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi50ZXh0TGlnaHRDb2xvcjtcclxuICAgIHRoaXMudGV4dERhcmtDb2xvciA9IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LnRleHREYXJrQ29sb3IgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi50ZXh0RGFya0NvbG9yO1xyXG4gICAgdGhpcy50ZXh0Q29sb3IgPSB0aGlzLnRleHREYXJrQ29sb3I7XHJcbiAgICB0aGlzLmhvdmVyQ29sb3IgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5ob3ZlckNvbG9yIHx8IHRoaXMuX2NvbmZpZy5idXR0b24uaG92ZXJDb2xvcjtcclxuICAgIHRoaXMuYWN0aXZlQ29sb3IgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5hY3RpdmVDb2xvciB8fCB0aGlzLl9jb25maWcuYnV0dG9uLmFjdGl2ZUNvbG9yO1xyXG4gICAgdGhpcy5kaXNhYmxlZFRleHRDb2xvciA9IHRoaXMuYnV0dG9uRGlzYWJsZWQudGV4dDtcclxuICAgIHRoaXMuZGlzYWJsZWRCZ0NvbG9yID0gdGhpcy5idXR0b25EaXNhYmxlZC5iYWNrZ3JvdW5kO1xyXG4gICAgdGhpcy50b2dnbGVVbnNlbGVjdGVkQ29sb3IgPSB0aGlzLmN1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRDb2xvciB8fCB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy51bnNlbGVjdGVkQmdDb2xvcjtcclxuXHJcbiAgICBpZiAodGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8uYm9yZGVyKSB7XHJcbiAgICAgIGlmIChfLmlzT2JqZWN0KHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0uYm9yZGVyKSkge1xyXG4gICAgICAgIHRoaXMuYm9yZGVyV2lkdGggPSAodGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXS5ib3JkZXIgYXMgTXJkQm9yZGVyKS53aWR0aDtcclxuICAgICAgICB0aGlzLmJvcmRlclN0eWxlID0gKHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0uYm9yZGVyIGFzIE1yZEJvcmRlcikuc3R5bGU7XHJcbiAgICAgICAgdGhpcy5ib3JkZXJDb2xvciA9ICh0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdLmJvcmRlciBhcyBNcmRCb3JkZXIpLmNvbG9yO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBib3JkZXIgPSAgKHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0uYm9yZGVyIGFzIHN0cmluZykuc3BsaXQoJyAnKVxyXG4gICAgICAgIHRoaXMuYm9yZGVyV2lkdGggPSBib3JkZXJbMF07XHJcbiAgICAgICAgdGhpcy5ib3JkZXJTdHlsZSA9IGJvcmRlclsxXTtcclxuICAgICAgICB0aGlzLmJvcmRlckNvbG9yID0gYm9yZGVyWzJdO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmJvcmRlcldpZHRoID0gXy5pc09iamVjdCh0aGlzLl9jb25maWcuYnV0dG9uLmJvcmRlcikgPyAodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIgYXMgTXJkQm9yZGVyKT8ud2lkdGggOiAodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIgYXMgc3RyaW5nKS5zcGxpdCgnICcpWzBdO1xyXG4gICAgICB0aGlzLmJvcmRlclN0eWxlID0gXy5pc09iamVjdCh0aGlzLl9jb25maWcuYnV0dG9uLmJvcmRlcikgPyAodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIgYXMgTXJkQm9yZGVyKT8uc3R5bGUgOiAodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIgYXMgc3RyaW5nKS5zcGxpdCgnICcpWzFdO1xyXG4gICAgICB0aGlzLmJvcmRlckNvbG9yID0gXy5pc09iamVjdCh0aGlzLl9jb25maWcuYnV0dG9uLmJvcmRlcikgPyAodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIgYXMgTXJkQm9yZGVyKT8uY29sb3IgOiAodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIgYXMgc3RyaW5nKS5zcGxpdCgnICcpWzJdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWluSGVpZ2h0ID0gdGhpcy5taW5IZWlnaHQgfHwgdGhpcy5kaWFtZXRlciB8fCB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5taW5IZWlnaHQgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5taW5IZWlnaHQ7XHJcbiAgICB0aGlzLmZvbnRTaXplID0gdGhpcy5mb250U2l6ZSB8fCB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5mb250U2l6ZSB8fCB0aGlzLl9jb25maWcuYnV0dG9uLmZvbnRTaXplO1xyXG4gICAgdGhpcy5kaWFtZXRlciA9IHRoaXMuZGlhbWV0ZXIgfHwgdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8uZGlhbWV0ZXIgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5kaWFtZXRlcjtcclxuICAgIHRoaXMuaWNvblNpemUgPSB0aGlzLmljb25TaXplIHx8IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/Lmljb25TaXplIHx8IHRoaXMuX2NvbmZpZy5idXR0b24uaWNvblNpemU7XHJcbiAgICB0aGlzLmJvcmRlclJhZGl1cyA9IHRoaXMuYm9yZGVyUmFkaXVzIHx8IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LmJvcmRlclJhZGl1cyB8fCB0aGlzLl9jb25maWcuYnV0dG9uLmJvcmRlclJhZGl1cztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrLCB3ZW5uIHNpY2ggZGVyIENvbGxhYnMtU3RhdHVzIGRlcyBCdXR0b25zIMOkbmRlcnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaXNDb2xsYXBzZWQgR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBrb2xsYWJpZXJ0IGlzdC5cclxuICAgKi9cclxuICBwdWJsaWMgYnV0dG9uQ29sbGFwc2VkKGlzQ29sbGFwc2VkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAvLyBXaXIgcmVhZ2llcmVuIG51ciwgd2VubiBzaWNoIGRlciBTdGF0dXMgw6RuZGVydFxyXG4gICAgaWYgKHRoaXMuaXNDb2xsYXBzZWQgIT09IGlzQ29sbGFwc2VkKSB7XHJcbiAgICAgIHRoaXMuaXNDb2xsYXBzZWQgPSBpc0NvbGxhcHNlZDtcclxuICAgICAgLy8gV2VubiAnY29sbGFwc2VUbycgZ2VzZXR6dCBpc3QsIHdpcmQgZGVyIEJ1dHRvbiBlbnRzcHJlY2hlbmQgdW1nZXN0eWx0XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmNvbGxhcHNlVG8pKSB7XHJcbiAgICAgICAgLy8gRGllc2UgV2VydGUgbcO8c3NlbiB6dXLDvGNrZ2VzZXR6dCB3ZXJkZW4sIGRhIHNpZSBmw7xyIGRlbiBuZXVlbiBTdHlsZSBuZXUgZ2VzZXR6dCB3ZXJkZW4gbcO8c3NlblxyXG4gICAgICAgIHRoaXMuYm9yZGVyUmFkaXVzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZm9udFNpemUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5taW5IZWlnaHQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5kaWFtZXRlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmljb25TaXplID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmIChpc0NvbGxhcHNlZCkge1xyXG4gICAgICAgICAgdGhpcy5pY29uID0gdGhpcy5jb2xsYXBzZVRvID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLklDT04gPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnJhaXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5vdXRsaW5lID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmZsYXQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuZmFiID0gdGhpcy5jb2xsYXBzZVRvID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLkZBQiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubWluaUZhYiA9IHRoaXMuY29sbGFwc2VUbyA9PT0gTXJkQnV0dG9uQXBwZWFyYW5jZS5NSU5JX0ZBQiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubmdBZnRlclZpZXdJbml0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaWNvbiA9IHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLklDT04gPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnJhaXNlZCA9IHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLlJBSVNFRCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMub3V0bGluZSA9IHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLk9VVExJTkUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmZsYXQgPSB0aGlzLnVuY29sbGFwc2VkQXBwZWFyYW5jZSA9PT0gTXJkQnV0dG9uQXBwZWFyYW5jZS5GTEFUID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5mYWIgPSB0aGlzLnVuY29sbGFwc2VkQXBwZWFyYW5jZSA9PT0gTXJkQnV0dG9uQXBwZWFyYW5jZS5GQUIgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm1pbmlGYWIgPSB0aGlzLnVuY29sbGFwc2VkQXBwZWFyYW5jZSA9PT0gTXJkQnV0dG9uQXBwZWFyYW5jZS5NSU5JX0ZBQiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubmdBZnRlclZpZXdJbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuY2xpY2suZW1pdChldmVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5lbnVtIE1yZEJ1dHRvbkFwcGVhcmFuY2Uge1xyXG4gIC8vIERFRkFVTFQgPSBudWxsLFxyXG4gIElDT04gPSAnaWNvbicsXHJcbiAgUkFJU0VEID0gJ3JhaXNlZCcsXHJcbiAgT1VUTElORSA9ICdvdXRsaW5lJyxcclxuICBGTEFUID0gJ2ZsYXQnLFxyXG4gIEZBQiA9ICdmYWInLFxyXG4gIE1JTklfRkFCID0gJ21pbmlGYWInLFxyXG4gIFRPR0dMRSA9ICd0b2dnbGUnXHJcbn1cclxuIiwiPCEtLSBEZXIgZWlnZW50bGljaCBIVE1MLUJ1dHRvbiAtLT5cclxuPGJ1dHRvbiBjbGFzcz1cIm1yZC1idXR0b24tY29udGFpbmVyXCJcclxuICAjYnV0dG9uQ29udGFpbmVyXHJcbiAgW3N0eWxlLi0tYmctY29sb3JdPVwiYmdDb2xvclwiXHJcbiAgW3N0eWxlLi0tdGV4dC1jb2xvcl09XCJ0ZXh0Q29sb3JcIlxyXG4gIFtzdHlsZS4tLWRpc2FibGVkLXRleHQtY29sb3JdPVwiZGlzYWJsZWRUZXh0Q29sb3JcIlxyXG4gIFtzdHlsZS4tLWRpc2FibGVkLWJnLWNvbG9yXT1cImRpc2FibGVkQmdDb2xvclwiXHJcbiAgW3N0eWxlLi0tYm9yZGVyLXdpZHRoXT1cImJvcmRlcldpZHRoXCJcclxuICBbc3R5bGUuLS1ib3JkZXItY29sb3JdPVwiYm9yZGVyQ29sb3JcIlxyXG4gIFtzdHlsZS4tLWJvcmRlci1zdHlsZV09XCJib3JkZXJTdHlsZVwiXHJcbiAgW3N0eWxlLi0tYm9yZGVyLXJhZGl1c109XCJib3JkZXJSYWRpdXNcIlxyXG4gIFtzdHlsZS4tLW1pbi1oZWlnaHRdPVwibWluSGVpZ2h0XCJcclxuICBbc3R5bGUuLS1mb250LXNpemVdPVwiZm9udFNpemVcIlxyXG4gIFtzdHlsZS4tLWRpYW1ldGVyXT1cImRpYW1ldGVyXCJcclxuICBbc3R5bGUuLS1pY29uLXNpemVdPVwiaWNvblNpemVcIlxyXG4gIFtzdHlsZS4tLXVuc2VsZWN0ZWQtY29sb3JdPVwidG9nZ2xlVW5zZWxlY3RlZENvbG9yXCJcclxuXHJcbiAgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXHJcblxyXG4gIFtuZ1N0eWxlXT1cInsnbWluLXdpZHRoJzogZml0Q29udGVudCA/ICdmaXQtY29udGVudCcgOiAndW5zZXQnfVwiXHJcbiAgW25nQ2xhc3NdPVwieydtcmQtaWNvbi1idXR0b24nOiBpY29uLCAnbXJkLXJhaXNlZC1idXR0b24nOiByYWlzZWQsICdtcmQtb3V0bGluZS1idXR0b24nOiBvdXRsaW5lLFxyXG4gICAgJ21yZC1mbGF0LWJ1dHRvbic6IGZsYXQsICdtcmQtZmFiLWJ1dHRvbic6IGZhYiwgJ21yZC1taW5pLWZhYi1idXR0b24nOiBtaW5pRmFiLCAnbXJkLXRvZ2dsZS1idXR0b24nOiB0b2dnbGUsXHJcbiAgICAnbXJkLXRvZ2dsZS1zZWxlY3RlZCc6IHRvZ2dsZVNlbGVjdGVkLCAnZGlzYWJsZWQnOiBkaXNhYmxlZH1cIlxyXG5cclxuICBbbXJkVG9vbFRpcF09XCJ0b29sdGlwVGV4dFwiIFtzaG93T25UcnVuY2F0ZWRFbGVtZW50XT1cInRvb2x0aXBJZlRydW5jYXRlZCA/IG1yZEJ1dHRvblRleHRDb250ZW50IDogdW5kZWZpbmVkXCIgW3Nob3dUb29sVGlwXT1cInNob3dUb29sdGlwXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm1yZC1idXR0b24tYmFja2dyb3VuZFwiPlxyXG4gICAgPCEtLSBFaW4gT3ZlcmxheSDDvGJlciBkZW0gQnV0dG9uIHdlbGNoZXMgZGVuIEhvdmVyLSB1bmQgQWN0aXZlLUVmZmVrdCBhbnplaWd0IC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1yZC1idXR0b24tZm9jdXNcIiBbc3R5bGUuLS1ob3Zlci1jb2xvcl09XCJob3ZlckNvbG9yXCIgW3N0eWxlLi0tYWN0aXZlLWNvbG9yXT1cImFjdGl2ZUNvbG9yXCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPCEtLSBFaW4gT3ZlcmxheSDDvGJlciBkZW0gQnV0dG9uIHdlbGNoZXMgZGVuIEhvdmVyLSB1bmQgQWN0aXZlLUVmZmVrdCBhbnplaWd0IC0tPlxyXG4gIDwhLS0gPGRpdiBjbGFzcz1cIm1yZC1idXR0b24tZm9jdXNcIiBbc3R5bGUuLS1ob3Zlci1jb2xvcl09XCJob3ZlckNvbG9yXCIgW3N0eWxlLi0tYWN0aXZlLWNvbG9yXT1cImFjdGl2ZUNvbG9yXCI+PC9kaXY+IC0tPlxyXG4gIDwhLS0gRGVyIENvbnRlbnQgZGVzIEJ1dHRvbnMgLS0+XHJcbiAgPHNwYW4gY2xhc3M9XCJtcmQtYnV0dG9uLWNvbnRlbnRcIiBbbmdDbGFzc109XCJ7J2lzQ29sbGFwc2VkJzogaXNDb2xsYXBzZWR9XCI+XHJcbiAgICA8IS0tIEljb25zIGxpbmtzIHZvbSBUZXh0IC0tPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJtcmQtYnV0dG9uLWljb24tY29udGVudFwiIFtuZ0NsYXNzXT1cInsnZnVsbC1pY29uJzogZnVsbEljb259XCIgW2hpZGVJZlRydW5jYXRlZF09XCJjb2xsYXBzZVwiIGRpc3BsYXlTdGF0ZT1cImZsZXhcIiByZXF1aXJlZEhpZGVBdHRyaWJ1dGU9XCJpY29uLWNvbGxhcHNlXCJcclxuICAgICAgY2hlY2tDaGlsZHJlbkZvckF0dHJpYnV0ZSBbaGlkZU9uVHJ1bmNhdGVkRWxlbWVudF09XCJtcmRCdXR0b25UZXh0Q29udGVudFwiIFtwYXJlbnRSZXNpemVFbGVtZW50XT1cInRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XCI+PG5nLWNvbnRlbnQgc2VsZWN0PVwibXJkLWljb246bm90KFtpY29uLWVuZF0pLCBbbXJkLWljb25dOm5vdChbaWNvbi1lbmRdKVwiPjwvbmctY29udGVudD48L3NwYW4+XHJcbiAgICA8IS0tIERlciBUZXh0IGRlcyBCdXR0b25zIC0tPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJtcmQtYnV0dG9uLXRleHQtY29udGVudFwiIChoaWRkZW5DaGFuZ2VkKT1cImJ1dHRvbkNvbGxhcHNlZCgkZXZlbnQpXCIgW2hpZGVJZlRydW5jYXRlZF09XCJjb2xsYXBzZVwiICNtcmRCdXR0b25UZXh0Q29udGVudCBbcGFyZW50UmVzaXplRWxlbWVudF09XCJ0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFwiPjxuZy1jb250ZW50IHNlbGVjdD1cIjpub3QoW21yZC1pY29uXSk6bm90KG1yZC1pY29uKVwiPjwvbmctY29udGVudD48L3NwYW4+XHJcbiAgICA8IS0tIEljb25zIHJlY2h0cyB2b20gVGV4dCAtLT5cclxuICAgIDxzcGFuIGNsYXNzPVwibXJkLWJ1dHRvbi1pY29uLWNvbnRlbnRcIiBbbmdDbGFzc109XCJ7J2Z1bGwtaWNvbic6IGZ1bGxJY29ufVwiIFtoaWRlSWZUcnVuY2F0ZWRdPVwiY29sbGFwc2VcIiBkaXNwbGF5U3RhdGU9XCJmbGV4XCIgcmVxdWlyZWRIaWRlQXR0cmlidXRlPVwiaWNvbi1jb2xsYXBzZVwiXHJcbiAgICAgIGNoZWNrQ2hpbGRyZW5Gb3JBdHRyaWJ1dGUgW2hpZGVPblRydW5jYXRlZEVsZW1lbnRdPVwibXJkQnV0dG9uVGV4dENvbnRlbnRcIiBbcGFyZW50UmVzaXplRWxlbWVudF09XCJ0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFwiPjxuZy1jb250ZW50IHNlbGVjdD1cIm1yZC1pY29uW2ljb24tZW5kXSwgW21yZC1pY29uXVtpY29uLWVuZF1cIj48L25nLWNvbnRlbnQ+PC9zcGFuPlxyXG4gIDwvc3Bhbj5cclxuICA8IS0tIERpZSBQcm9ncmVzcy1CYXIgZWluZXMgQnV0dG9ucyAobmljaHQgZsO8ciBJY29uLSwgRmFiLSB1bmQgTWluaS1GYWItQnV0dG9ucykgLS0+XHJcbiAgPG1yZC1wcm9ncmVzcy1iYXIgY2xhc3M9XCJtcmQtYnV0dG9uLXByb2dyZXNzLWJhclwiXHJcbiAgICAqbmdJZj1cIiFkaXNhYmxlZCAmJiAhaWNvbiAmJiAhZmFiICYmICFtaW5pRmFiICYmIChpc0xvYWRpbmcgfHwgbG9hZGluZz8udmFsdWUgfHwgbG9hZGluZ1Byb2dyZXNzPy52YWx1ZSB8fCBsb2FkaW5nUHJvZ3Jlc3M/LnZhbHVlID09PSAwKVwiXHJcbiAgICBbdmFsdWVdPVwibG9hZGluZ1Byb2dyZXNzPy52YWx1ZVwiIFttb2RlXT1cImxvYWRpbmdQcm9ncmVzcyA/ICdkZXRlcm1pbmF0ZScgOiAnaW5kZXRlcm1pbmF0ZSdcIiBbY29sb3JdPVwicHJvZ3Jlc3NDb2xvclwiPjwvbXJkLXByb2dyZXNzLWJhcj5cclxuICA8IS0tIERlciBQcm9ncmVzcy1TcGlubmVyIGVpbmVzIEJ1dHRvbnMgKG51ciBmw7xyIEljb24tLCBGYWItIHVuZCBNaW5pLUZhYi1CdXR0b25zKSAtLT5cclxuICA8bXJkLXByb2dyZXNzLXNwaW5uZXIgY2xhc3M9XCJtcmQtYnV0dG9uLXByb2dyZXNzLXNwaW5uZXJcIlxyXG4gICAgKm5nSWY9XCIhZGlzYWJsZWQgJiYgKGljb24gfHwgZmFiIHx8IG1pbmlGYWIpICYmIChpc0xvYWRpbmcgfHwgbG9hZGluZz8udmFsdWUgfHwgbG9hZGluZ1Byb2dyZXNzPy52YWx1ZSB8fCBsb2FkaW5nUHJvZ3Jlc3M/LnZhbHVlID09PSAwKVwiXHJcbiAgICBbdmFsdWVdPVwibG9hZGluZ1Byb2dyZXNzPy52YWx1ZVwiIFttb2RlXT1cImxvYWRpbmdQcm9ncmVzcyA/ICdkZXRlcm1pbmF0ZScgOiAnaW5kZXRlcm1pbmF0ZSdcIiBbY29sb3JdPVwicHJvZ3Jlc3NDb2xvclwiPjwvbXJkLXByb2dyZXNzLXNwaW5uZXI+XHJcbjwvYnV0dG9uPlxyXG4iXX0=