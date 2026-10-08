import { BasePushStrategyObject, Util } from 'mrd-core';
import { ChangeDetectionStrategy, Component, Input, ViewChild, booleanAttribute } from '@angular/core';
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
const _c3 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return { "mrd-icon-button": a0, "mrd-raised-button": a1, "mrd-outline-button": a2, "mrd-flat-button": a3, "mrd-fab-button": a4, "mrd-mini-fab-button": a5, "mrd-toggle-button": a6, "mrd-toggle-selected": a7, "mrd-toggle-simple": a8, "disabled": a9 }; };
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
    ngZone;
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
    /**
     * Gibt an, ob der Button ein Toggle-Button ist.
     *
     * Toggle-Buttons sollten immer innerhalb einer Toggle-Button-Group verwendet werden.
     * Standardmäßig haben sie einen weißen Hintergrund und die Textfarbe ist schwarz, außerdem besitzen sie im selektierten Zustand einen Schatten.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    toggle = false;
    /**
     * Gibt an, ob der Button, als Toggle-Button, selektiert ist.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    toggleSelected = false;
    /**
     * Gibt an, ob der Button, als Toggle-Button, in der einfachen Variante dargestellt wird.
     *
     * Der selektierte Button wird dann nur eingefaerbt, ohne Vergroesserung, Schatten und Ueberlappung.
     * Wird von der Toggle-Button-Group ueber deren Attribut "simple" gesetzt.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    toggleSimple = false;
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
    /**
     * Setzt die Hintergrundfarbe des unselektierten Toggle-Buttons.
     *
     * Es können Hex-, RGB- oder RGBA-Werte angegeben werden.
     */
    customToggleUnselectedColor;
    /**
     * Setzt die Textfarbe des unselektierten Toggle-Buttons.
     *
     * Es können Hex-, RGB- oder RGBA-Werte angegeben werden.
     */
    customToggleUnselectedTextColor;
    /**
     * Setzt die Textfarbe des selektierten Toggle-Buttons.
     *
     * Es können Hex-, RGB- oder RGBA-Werte angegeben werden.
     */
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
     * Gibt an, ob der Tooltip nur angezeigt werden soll, wenn der Button collabiert ist.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    tooltipIfCollapsed = false;
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
     * Die Schriftfamilie des Buttons.
     *
     * @type {string}
     * @memberof MrdButtonComponent
     */
    fontFamily;
    /**
     * Die Schriftdicke des Buttons.
     *
     * @type {string}
     * @memberof MrdButtonComponent
     */
    fontWeight;
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
    /**
     * Gibt an, ob Icon des Buttons die volle Größe des Buttons einnehmen soll.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
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
     * Die Farbe des Buttons, wenn er gehovert wird.
     *
     * Es können Hex-, RGB- oder RGBA-Werte angegeben werden.
     *
     * @type {string}
     * @memberof MrdButtonComponent
     */
    customHoverColor;
    /**
     * Die Farbe des Textes des Buttons, wenn er gehovert wird.
     *
     * Es können Hex-, RGB- oder RGBA-Werte angegeben werden.
     *
     * @type {string}
     * @memberof MrdButtonComponent
     */
    customHoverTextColor;
    /**
     * Der Wert des Buttons als Toggle-Button.
     *
     * @type {any}
     * @memberof MrdButtonComponent
     */
    value;
    /**
     * Die Konfiguration des Mrd-Buttons.
     *
     * @private
     * @type {MrdConfigModel}
     * @memberof MrdButtonComponent
     */
    _config = ConfigUtil.getConfig();
    mouseEnterListener;
    mouseLeaveListener;
    uncollapsedAppearance;
    buttonPrimary;
    buttonAccent;
    buttonWarn;
    buttonDisabled;
    buttonProgress;
    textLightColor;
    textDarkColor;
    bgColor;
    textColor;
    hoverColor;
    hoverTextColor;
    activeColor;
    disabledTextColor;
    disabledBgColor;
    toggleUnselectedColor;
    borderWidth;
    borderStyle;
    borderColor;
    isCollapsed = false;
    isHovered = false;
    constructor(cdr, ngZone, elementRef) {
        super();
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        const host = this.elementRef.nativeElement;
        // Ausserhalb der Zone, weil die Listener selbst keine Change Detection brauchen; Angulars (click) am Host laeuft weiter in der Zone
        this.ngZone.runOutsideAngular(() => {
            host.addEventListener('click', this.klickPruefen, { capture: true });
            host.addEventListener('click', this.klickAbschirmen);
        });
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
    ngOnDestroy() {
        this.elementRef.nativeElement.removeEventListener('click', this.klickPruefen, { capture: true });
        this.elementRef.nativeElement.removeEventListener('click', this.klickAbschirmen);
        super.ngOnDestroy();
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
            // wenn customHoverColor gegeben dann setze diese sonst wird 'hoverColor' auf eine 20% transparente Version von 'baseColor' gesetzt
            this.hoverColor = this.customHoverColor ? this.customHoverColor : ColorUtil.changeColorOpacity(baseColor, 20);
            this.hoverTextColor = this.customHoverTextColor ? this.customHoverTextColor : this.textColor; //ColorUtil.shouldTextBeDark(this.hoverColor) ? this.textDarkColor : this.textLightColor;
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
        if (this.toggle && this.toggleSelected) {
            this.elementRef.nativeElement.classList.add('active');
        }
        else {
            this.elementRef.nativeElement.classList.remove('active');
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
        this.hoverTextColor = this.textColor;
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
    onMouseEnter() {
        this.isHovered = true;
        this.cdr.markForCheck();
    }
    onMouseLeave() {
        this.isHovered = false;
        this.cdr.markForCheck();
    }
    /**
     * Capture-Phase am Host: laeuft vor Angulars `(click)`, auch wenn direkt auf den Host geklickt wird.
     * Deaktiviert endet der Klick hier, sodass weder `(click)` noch umgebende Elemente ihn erhalten.
     */
    klickPruefen = (event) => {
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    };
    /** Wie bisher: `(click)` am Host feuert, umgebende Elemente (z. B. eine klickbare Listenzeile) erhalten den Klick nicht */
    klickAbschirmen = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };
    /** @nocollapse */ static ɵfac = function MrdButtonComponent_Factory(t) { return new (t || MrdButtonComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdButtonComponent, selectors: [["mrd-button"]], viewQuery: function MrdButtonComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mrdButtonTextContent = _t.first);
        } }, hostVars: 6, hostBindings: function MrdButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseenter", function MrdButtonComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function MrdButtonComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
        } if (rf & 2) {
            i0.ɵɵstyleProp("min-width", ctx.fitContent ? "fit-content" : "unset")("margin", ctx.toggle ? "0 -16px" : "unset")("transition", ctx.toggle ? "transform 0.2s" : "unset");
        } }, inputs: { icon: ["icon-button", "icon", booleanAttribute], raised: ["raised-button", "raised", booleanAttribute], outline: ["outline-button", "outline", booleanAttribute], flat: ["flat-button", "flat", booleanAttribute], fab: ["fab-button", "fab", booleanAttribute], miniFab: ["miniFab-button", "miniFab", booleanAttribute], toggle: ["toggle-button", "toggle", booleanAttribute], toggleSelected: ["selected", "toggleSelected", booleanAttribute], toggleSimple: ["toggleSimple", "toggleSimple", booleanAttribute], primary: ["primary", "primary", booleanAttribute], accent: ["accent", "accent", booleanAttribute], warn: ["warn", "warn", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], loading: "loading", isLoading: ["isLoading", "isLoading", booleanAttribute], loadingProgress: "loadingProgress", customTextColor: ["color", "customTextColor", colorThemeAttribute], customBgColor: ["backgroundColor", "customBgColor", colorAttribute], keepCustomTextColor: ["keepCustomTextColor", "keepCustomTextColor", booleanAttribute], keepCustomBgColor: ["keepCustomBgColor", "keepCustomBgColor", booleanAttribute], customToggleUnselectedColor: ["customToggleUnselectedColor", "customToggleUnselectedColor", colorAttribute], customToggleUnselectedTextColor: ["customToggleUnselectedTextColor", "customToggleUnselectedTextColor", colorAttribute], customToggleSelectedTextColor: ["customToggleSelectedTextColor", "customToggleSelectedTextColor", colorAttribute], progressColor: ["progressColor", "progressColor", colorAttribute], collapse: ["collapse", "collapse", booleanAttribute], collapseTo: "collapseTo", fitContent: ["fit-content", "fitContent", booleanAttribute], showTooltip: ["tooltip", "showTooltip", booleanAttribute], tooltipText: "tooltipText", tooltipIfTruncated: ["tooltipIfTruncated", "tooltipIfTruncated", booleanAttribute], tooltipIfCollapsed: ["tooltipIfCollapsed", "tooltipIfCollapsed", booleanAttribute], minHeight: ["minHeight", "minHeight", sizeAttribute], fontSize: ["fontSize", "fontSize", sizeAttribute], fontFamily: "fontFamily", fontWeight: "fontWeight", diameter: ["diameter", "diameter", sizeAttribute], iconSize: ["iconSize", "iconSize", sizeAttribute], fullIcon: ["fullIcon", "fullIcon", booleanAttribute], borderRadius: ["borderRadius", "borderRadius", sizeAttribute], customHoverColor: ["customHoverColor", "customHoverColor", colorAttribute], customHoverTextColor: ["customHoverTextColor", "customHoverTextColor", colorAttribute], value: "value" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c6, decls: 14, vars: 73, consts: [[1, "mrd-button-container", 3, "ngStyle", "ngClass", "mrdToolTip", "showOnTruncatedElement", "showToolTip"], ["buttonContainer", ""], [1, "mrd-button-background"], [1, "mrd-button-focus"], [1, "mrd-button-content", 3, "ngClass"], ["displayState", "flex", "requiredHideAttribute", "icon-collapse", "checkChildrenForAttribute", "", 1, "mrd-button-icon-content", 3, "ngClass", "hideIfTruncated", "hideOnTruncatedElement", "parentResizeElement"], [1, "mrd-button-text-content", 3, "hideIfTruncated", "parentResizeElement", "hiddenChanged"], ["mrdButtonTextContent", ""], ["class", "mrd-button-progress-bar", 3, "value", "mode", "color", 4, "ngIf"], ["class", "mrd-button-progress-spinner", 3, "value", "mode", "color", 4, "ngIf"], [1, "mrd-button-progress-bar", 3, "value", "mode", "color"], [1, "mrd-button-progress-spinner", 3, "value", "mode", "color"]], template: function MrdButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "button", 0, 1)(2, "div", 2);
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
            i0.ɵɵstyleProp("--bg-color", ctx.bgColor)("--text-color", ctx.textColor)("--hover-text-color", ctx.hoverTextColor)("--disabled-text-color", ctx.disabledTextColor)("--disabled-bg-color", ctx.disabledBgColor)("--border-width", ctx.borderWidth)("--border-color", ctx.borderColor)("--border-style", ctx.borderStyle)("--border-radius", ctx.borderRadius)("--min-height", ctx.minHeight)("--font-size", ctx.fontSize)("--font-family", ctx.fontFamily)("--font-weight", ctx.fontWeight)("--diameter", ctx.diameter)("--icon-size", ctx.iconSize)("--unselected-color", ctx.toggleUnselectedColor);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(54, _c2, ctx.fitContent ? "fit-content" : "unset"))("ngClass", i0.ɵɵpureFunctionV(56, _c3, [ctx.icon, ctx.raised, ctx.outline, ctx.flat, ctx.fab, ctx.miniFab, ctx.toggle, ctx.toggleSelected, ctx.toggle && ctx.toggleSimple, ctx.disabled]))("mrdToolTip", ctx.tooltipText)("showOnTruncatedElement", ctx.tooltipIfTruncated ? _r1 : undefined)("showToolTip", ctx.showTooltip || ctx.tooltipIfCollapsed && ctx.isCollapsed);
            i0.ɵɵadvance(3);
            i0.ɵɵstyleProp("--hover-color", ctx.hoverColor)("--active-color", ctx.activeColor);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(67, _c4, ctx.isCollapsed));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(69, _c5, ctx.fullIcon))("hideIfTruncated", ctx.collapse)("hideOnTruncatedElement", _r1)("parentResizeElement", ctx.elementRef.nativeElement);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("hideIfTruncated", ctx.collapse)("parentResizeElement", ctx.elementRef.nativeElement);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(71, _c5, ctx.fullIcon))("hideIfTruncated", ctx.collapse)("hideOnTruncatedElement", _r1)("parentResizeElement", ctx.elementRef.nativeElement);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.disabled && !ctx.icon && !ctx.fab && !ctx.miniFab && (ctx.isLoading || (ctx.loading == null ? null : ctx.loading.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) === 0));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.disabled && (ctx.icon || ctx.fab || ctx.miniFab) && (ctx.isLoading || (ctx.loading == null ? null : ctx.loading.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) === 0));
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle, i2.MrdProgressBarComponent, i3.MrdProgressSpinnerComponent, i4.ToolTipRendererDirective, i5.HideIfTruncatedDirective], styles: ["[_nghost-%COMP%]{position:relative;display:inline-flex;flex-direction:column;justify-content:center;align-items:center;max-width:100%}.active[_nghost-%COMP%]{z-index:10}.mrd-button-container[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:center;min-height:var(--min-height);height:inherit;max-width:100%;width:100%;padding:0 16px;font-size:var(--font-size);font-family:var(--font-family);font-weight:var(--font-weight);letter-spacing:.1px;border:var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius);color:var(--text-color)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;z-index:1;width:100%}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]   .mrd-button-icon-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]   .mrd-button-text-content[_ngcontent-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]     mrd-icon{margin:0 2px}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]   .mrd-button-text-content[_ngcontent-%COMP%]{padding:0 16px}.mrd-button-container.disabled[_ngcontent-%COMP%]{color:var(--disabled-text-color);cursor:initial}.mrd-button-container.disabled[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{background-color:var(--disabled-bg-color)}.mrd-button-container[_ngcontent-%COMP%]:hover:not(.disabled){color:var(--hover-text-color)}.mrd-button-container[_ngcontent-%COMP%]:hover:not(.disabled)   .mrd-button-focus[_ngcontent-%COMP%]{background-color:var(--hover-color)}.mrd-button-container[_ngcontent-%COMP%]:active:not(.disabled)   .mrd-button-focus[_ngcontent-%COMP%]{background-color:var(--active-color)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-focus[_ngcontent-%COMP%]{position:absolute;inset:0;border-radius:var(--border-radius)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{position:absolute;inset:0;border-radius:var(--border-radius);background-color:var(--bg-color)}.mrd-button-container.mrd-raised-button[_ngcontent-%COMP%]:not(.disabled){--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-raised-button[_ngcontent-%COMP%]:not(.disabled):active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]{min-width:var(--diameter)!important;height:var(--diameter);padding:0}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{min-height:unset;width:var(--diameter);height:var(--diameter)}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]     mrd-icon{margin:0!important;font-size:calc(var(--diameter) / 2)}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     mrd-icon{font-size:var(--diameter)}.mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]:active, .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]{padding:0 44px;transition:color .2s}.mrd-button-container.mrd-toggle-button.mrd-toggle-selected[_ngcontent-%COMP%]{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040;transform:scale(1.15);z-index:10}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040;z-index:5}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:hover{z-index:5}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{transition:background-color .2s}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:not(.mrd-toggle-selected)   .mrd-button-background[_ngcontent-%COMP%]{background-color:var(--unselected-color)}.mrd-button-container.mrd-toggle-button.mrd-toggle-simple[_ngcontent-%COMP%]{padding:0 16px}.mrd-button-container.mrd-toggle-button.mrd-toggle-simple.mrd-toggle-selected[_ngcontent-%COMP%], .mrd-button-container.mrd-toggle-button.mrd-toggle-simple[_ngcontent-%COMP%]:active{--webkit-box-shadow: none;box-shadow:none;transform:none}.mrd-button-container[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container[_ngcontent-%COMP%]     mrd-icon{font-size:1.5em;margin-right:4px;margin-top:2px;width:var(--icon-size);height:var(--icon-size);min-width:1em}.mrd-button-container[_ngcontent-%COMP%]     [mrd-icon][icon-end], .mrd-button-container[_ngcontent-%COMP%]     mrd-icon[icon-end]{margin-right:0;margin-left:4px}.mrd-button-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:10%;left:5px;right:5px;height:10%;min-height:10%}.mrd-button-progress-spinner[_ngcontent-%COMP%]{position:absolute;top:3px;left:3px;width:calc(100% - 6px)!important;height:calc(100% - 6px)!important}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdButtonComponent, [{
        type: Component,
        args: [{ selector: 'mrd-button', host: {
                    '[style.min-width]': 'fitContent ? "fit-content" : "unset"',
                    '[style.margin]': 'toggle ? "0 -16px" : "unset"',
                    '[style.transition]': 'toggle ? "transform 0.2s" : "unset"',
                    // Die Klasse active setzt updateStyle(), weil eine Toggle-Gruppe toggleSelected erst nach dem Check der Eltern setzt
                    '(mouseenter)': 'onMouseEnter()',
                    '(mouseleave)': 'onMouseLeave()'
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- Der eigentlich HTML-Button -->\r\n<button class=\"mrd-button-container\"\r\n  #buttonContainer\r\n  [style.--bg-color]=\"bgColor\"\r\n  [style.--text-color]=\"textColor\"\r\n  [style.--hover-text-color]=\"hoverTextColor\"\r\n  [style.--disabled-text-color]=\"disabledTextColor\"\r\n  [style.--disabled-bg-color]=\"disabledBgColor\"\r\n  [style.--border-width]=\"borderWidth\"\r\n  [style.--border-color]=\"borderColor\"\r\n  [style.--border-style]=\"borderStyle\"\r\n  [style.--border-radius]=\"borderRadius\"\r\n  [style.--min-height]=\"minHeight\"\r\n  [style.--font-size]=\"fontSize\"\r\n  [style.--font-family]=\"fontFamily\"\r\n  [style.--font-weight]=\"fontWeight\"\r\n  [style.--diameter]=\"diameter\"\r\n  [style.--icon-size]=\"iconSize\"\r\n  [style.--unselected-color]=\"toggleUnselectedColor\"\r\n\r\n  [ngStyle]=\"{'min-width': fitContent ? 'fit-content' : 'unset'}\"\r\n  [ngClass]=\"{'mrd-icon-button': icon, 'mrd-raised-button': raised, 'mrd-outline-button': outline,\r\n    'mrd-flat-button': flat, 'mrd-fab-button': fab, 'mrd-mini-fab-button': miniFab, 'mrd-toggle-button': toggle,\r\n    'mrd-toggle-selected': toggleSelected, 'mrd-toggle-simple': toggle && toggleSimple, 'disabled': disabled}\"\r\n\r\n  [mrdToolTip]=\"tooltipText\" [showOnTruncatedElement]=\"tooltipIfTruncated ? mrdButtonTextContent : undefined\" [showToolTip]=\"showTooltip || (tooltipIfCollapsed && isCollapsed)\">\r\n  <div class=\"mrd-button-background\">\r\n    <!-- Ein Overlay \u00FCber dem Button welches den Hover- und Active-Effekt anzeigt -->\r\n    <div class=\"mrd-button-focus\" [style.--hover-color]=\"hoverColor\" [style.--active-color]=\"activeColor\"></div>\r\n  </div>\r\n  <!-- Ein Overlay \u00FCber dem Button welches den Hover- und Active-Effekt anzeigt -->\r\n  <!-- <div class=\"mrd-button-focus\" [style.--hover-color]=\"hoverColor\" [style.--active-color]=\"activeColor\"></div> -->\r\n  <!-- Der Content des Buttons -->\r\n  <span class=\"mrd-button-content\" [ngClass]=\"{'isCollapsed': isCollapsed}\">\r\n    <!-- Linker Icon-Container -->\r\n    <span class=\"mrd-button-icon-content\" \r\n          [ngClass]=\"{'full-icon': fullIcon}\" \r\n          [hideIfTruncated]=\"collapse\" \r\n          displayState=\"flex\" \r\n          requiredHideAttribute=\"icon-collapse\"\r\n          checkChildrenForAttribute \r\n          [hideOnTruncatedElement]=\"mrdButtonTextContent\" \r\n          [parentResizeElement]=\"this.elementRef.nativeElement\">\r\n      <ng-content select=\"mrd-icon:not([icon-end]), [mrd-icon]:not([icon-end])\"></ng-content>\r\n    </span>\r\n    \r\n    <!-- Der Text des Buttons -->\r\n    <span class=\"mrd-button-text-content\" \r\n          (hiddenChanged)=\"buttonCollapsed($event)\" \r\n          [hideIfTruncated]=\"collapse\" \r\n          #mrdButtonTextContent \r\n          [parentResizeElement]=\"this.elementRef.nativeElement\">\r\n      <ng-content select=\":not([mrd-icon]):not(mrd-icon)\"></ng-content>\r\n    </span>\r\n    \r\n    <!-- Rechter Icon-Container -->\r\n    <span class=\"mrd-button-icon-content\" \r\n          [ngClass]=\"{'full-icon': fullIcon}\" \r\n          [hideIfTruncated]=\"collapse\" \r\n          displayState=\"flex\" \r\n          requiredHideAttribute=\"icon-collapse\"\r\n          checkChildrenForAttribute \r\n          [hideOnTruncatedElement]=\"mrdButtonTextContent\" \r\n          [parentResizeElement]=\"this.elementRef.nativeElement\">\r\n      <ng-content select=\"mrd-icon[icon-end], [mrd-icon][icon-end]\"></ng-content>\r\n    </span>\r\n  </span>\r\n\r\n  <!-- Die Progress-Bar eines Buttons (nicht f\u00FCr Icon-, Fab- und Mini-Fab-Buttons) -->\r\n  <mrd-progress-bar class=\"mrd-button-progress-bar\"\r\n    *ngIf=\"!disabled && !icon && !fab && !miniFab && (isLoading || loading?.value || loadingProgress?.value || loadingProgress?.value === 0)\"\r\n    [value]=\"loadingProgress?.value\" [mode]=\"loadingProgress ? 'determinate' : 'indeterminate'\" [color]=\"progressColor\"></mrd-progress-bar>\r\n  <!-- Der Progress-Spinner eines Buttons (nur f\u00FCr Icon-, Fab- und Mini-Fab-Buttons) -->\r\n  <mrd-progress-spinner class=\"mrd-button-progress-spinner\"\r\n    *ngIf=\"!disabled && (icon || fab || miniFab) && (isLoading || loading?.value || loadingProgress?.value || loadingProgress?.value === 0)\"\r\n    [value]=\"loadingProgress?.value\" [mode]=\"loadingProgress ? 'determinate' : 'indeterminate'\" [color]=\"progressColor\"></mrd-progress-spinner>\r\n</button>\r\n", styles: [":host{position:relative;display:inline-flex;flex-direction:column;justify-content:center;align-items:center;max-width:100%}:host.active{z-index:10}.mrd-button-container{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:center;min-height:var(--min-height);height:inherit;max-width:100%;width:100%;padding:0 16px;font-size:var(--font-size);font-family:var(--font-family);font-weight:var(--font-weight);letter-spacing:.1px;border:var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius);color:var(--text-color)}.mrd-button-container .mrd-button-content{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;z-index:1;width:100%}.mrd-button-container .mrd-button-content .mrd-button-icon-content{display:flex;flex-direction:row;align-items:center;justify-content:center}.mrd-button-container .mrd-button-content .mrd-button-text-content{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-button-container .mrd-button-content.isCollapsed ::ng-deep [mrd-icon],.mrd-button-container .mrd-button-content.isCollapsed ::ng-deep mrd-icon{margin:0 2px}.mrd-button-container .mrd-button-content.isCollapsed .mrd-button-text-content{padding:0 16px}.mrd-button-container.disabled{color:var(--disabled-text-color);cursor:initial}.mrd-button-container.disabled .mrd-button-background{background-color:var(--disabled-bg-color)}.mrd-button-container:hover:not(.disabled){color:var(--hover-text-color)}.mrd-button-container:hover:not(.disabled) .mrd-button-focus{background-color:var(--hover-color)}.mrd-button-container:active:not(.disabled) .mrd-button-focus{background-color:var(--active-color)}.mrd-button-container .mrd-button-focus{position:absolute;inset:0;border-radius:var(--border-radius)}.mrd-button-container .mrd-button-background{position:absolute;inset:0;border-radius:var(--border-radius);background-color:var(--bg-color)}.mrd-button-container.mrd-raised-button:not(.disabled){--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-raised-button:not(.disabled):active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-icon-button,.mrd-button-container.mrd-fab-button,.mrd-button-container.mrd-mini-fab-button{min-width:var(--diameter)!important;height:var(--diameter);padding:0}.mrd-button-container.mrd-icon-button .mrd-button-background,.mrd-button-container.mrd-fab-button .mrd-button-background,.mrd-button-container.mrd-mini-fab-button .mrd-button-background{min-height:unset;width:var(--diameter);height:var(--diameter)}.mrd-button-container.mrd-icon-button ::ng-deep [mrd-icon],.mrd-button-container.mrd-icon-button ::ng-deep mrd-icon,.mrd-button-container.mrd-fab-button ::ng-deep [mrd-icon],.mrd-button-container.mrd-fab-button ::ng-deep mrd-icon,.mrd-button-container.mrd-mini-fab-button ::ng-deep [mrd-icon],.mrd-button-container.mrd-mini-fab-button ::ng-deep mrd-icon{margin:0!important;font-size:calc(var(--diameter) / 2)}.mrd-button-container.mrd-icon-button .mrd-button-icon-content.full-icon ::ng-deep [mrd-icon],.mrd-button-container.mrd-icon-button .mrd-button-icon-content.full-icon ::ng-deep mrd-icon,.mrd-button-container.mrd-fab-button .mrd-button-icon-content.full-icon ::ng-deep [mrd-icon],.mrd-button-container.mrd-fab-button .mrd-button-icon-content.full-icon ::ng-deep mrd-icon,.mrd-button-container.mrd-mini-fab-button .mrd-button-icon-content.full-icon ::ng-deep [mrd-icon],.mrd-button-container.mrd-mini-fab-button .mrd-button-icon-content.full-icon ::ng-deep mrd-icon{font-size:var(--diameter)}.mrd-button-container.mrd-mini-fab-button:not(.disabled) .mrd-button-background,.mrd-button-container.mrd-fab-button:not(.disabled) .mrd-button-background{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-mini-fab-button:not(.disabled) .mrd-button-background:active,.mrd-button-container.mrd-fab-button:not(.disabled) .mrd-button-background:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-toggle-button{padding:0 44px;transition:color .2s}.mrd-button-container.mrd-toggle-button.mrd-toggle-selected{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040;transform:scale(1.15);z-index:10}.mrd-button-container.mrd-toggle-button:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040;z-index:5}.mrd-button-container.mrd-toggle-button:hover{z-index:5}.mrd-button-container.mrd-toggle-button .mrd-button-background{transition:background-color .2s}.mrd-button-container.mrd-toggle-button:not(.mrd-toggle-selected) .mrd-button-background{background-color:var(--unselected-color)}.mrd-button-container.mrd-toggle-button.mrd-toggle-simple{padding:0 16px}.mrd-button-container.mrd-toggle-button.mrd-toggle-simple.mrd-toggle-selected,.mrd-button-container.mrd-toggle-button.mrd-toggle-simple:active{--webkit-box-shadow: none;box-shadow:none;transform:none}.mrd-button-container ::ng-deep [mrd-icon],.mrd-button-container ::ng-deep mrd-icon{font-size:1.5em;margin-right:4px;margin-top:2px;width:var(--icon-size);height:var(--icon-size);min-width:1em}.mrd-button-container ::ng-deep [mrd-icon][icon-end],.mrd-button-container ::ng-deep mrd-icon[icon-end]{margin-right:0;margin-left:4px}.mrd-button-progress-bar{position:absolute;bottom:10%;left:5px;right:5px;height:10%;min-height:10%}.mrd-button-progress-spinner{position:absolute;top:3px;left:3px;width:calc(100% - 6px)!important;height:calc(100% - 6px)!important}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i0.ElementRef }]; }, { mrdButtonTextContent: [{
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
        }], toggleSimple: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
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
        }], tooltipIfCollapsed: [{
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
        }], fontWeight: [{
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
        }], customHoverColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], customHoverTextColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], value: [{
            type: Input
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWJ1dHRvbi9jb21wb25lbnRzL21yZC1idXR0b24vbXJkLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWJ1dHRvbi9jb21wb25lbnRzL21yZC1idXR0b24vbXJkLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsc0JBQXNCLEVBQW1CLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6RSxPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQTJELEtBQUssRUFBZ0MsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hPLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbkUsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFaEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7Ozs7Ozs7O0lDNEQ3RSx1Q0FFeUk7OztJQUF2SSw0RkFBZ0Msa0VBQUEsK0JBQUE7OztJQUVsQywyQ0FFNkk7OztJQUEzSSw0RkFBZ0Msa0VBQUEsK0JBQUE7Ozs7Ozs7O0FEaEVwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQWVILE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxzQkFBc0I7SUE2YWhEO0lBQ0Y7SUFDRDtJQTdhVDs7Ozs7T0FLRztJQUNn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QUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2hJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUN6SSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsVUFBVSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDbkosSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDM0csSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDM0csSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFlBQVksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDN0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxlQUFlLENB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RSxhQUFhLEVBQUM7WUFPakIsVUFBVTtrQkFBekIsS0FBSztZQU9VLFVBQVU7a0JBQXpCLEtBQUs7WUFTb0MsUUFBUTtrQkFBakQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUM7WUFTUyxRQUFRO2tCQUFqRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGFBQWEsRUFBQztZQU9ZLFFBQVE7a0JBQXBELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFTTSxZQUFZO2tCQUFyRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGFBQWEsRUFBQztZQVVVLGdCQUFnQjtrQkFBMUQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxjQUFjLEVBQUM7WUFTUyxvQkFBb0I7a0JBQTlELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsY0FBYyxFQUFDO1lBUWxCLEtBQUs7a0JBQXBCLEtBQUs7O0FBeVNSLElBQUssbUJBU0o7QUFURCxXQUFLLG1CQUFtQjtJQUN0QixrQkFBa0I7SUFDbEIsb0NBQWEsQ0FBQTtJQUNiLHdDQUFpQixDQUFBO0lBQ2pCLDBDQUFtQixDQUFBO0lBQ25CLG9DQUFhLENBQUE7SUFDYixrQ0FBVyxDQUFBO0lBQ1gsMkNBQW9CLENBQUE7SUFDcEIsd0NBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQVRJLG1CQUFtQixLQUFuQixtQkFBbUIsUUFTdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNcmRCb3JkZXIgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbC9jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgeyBCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0LCBPYnNlcnZhYmxlVmFsdWUsIFV0aWwgfSBmcm9tICdtcmQtY29yZSc7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIFF1ZXJ5TGlzdCwgVmlld0NoaWxkLCBib29sZWFuQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbG9yVXRpbCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29sb3IudXRpbCc7XHJcbmltcG9ydCB7IE1yZENvbmZpZ01vZGVsIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vbW9kZWwvY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgQ29uZmlnVXRpbCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29uZmlnLnV0aWwnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQgeyBNcmRCYXNlQ29sb3JUaGVtZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL21vZGVsL2NvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IGNvbG9yQXR0cmlidXRlLCBjb2xvclRoZW1lQXR0cmlidXRlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9jb2xvci10cmFuc2Zvcm0nO1xyXG5pbXBvcnQgeyBzaXplQXR0cmlidXRlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9zaXplLXRyYW5zZm9ybSc7XHJcblxyXG4vKipcclxuICogRGllc2VzIEtvbXBvbmVudGUgc3RlbGx0IGRlbiBNcmQtQnV0dG9uIHp1ciBWZXJmw7xndW5nLlxyXG4gKlxyXG4gKiBEZXIgQnV0dG9uIGthbm4gbWl0dGVscyBkZXIgZW50c3ByZWNoZW5kZW4gQXR0cmlidXRlIGluIGZvbGdlbmRlbiBTdGlsZW4gZGFyZ2VzdGVsbHQgd2VyZGVuOlxyXG4gKiAtIFN0YW5kYXJkLUJ1dHRvbiAoZGVmYXVsdClcclxuICogLSBJY29uLUJ1dHRvbiAoQXR0cmlidXRuYW1lOiBpY29uLWJ1dHRvbilcclxuICogLSBSYWlzZWQtQnV0dG9uIChBdHRyaWJ1dG5hbWU6IHJhaXNlZC1idXR0b24pXHJcbiAqIC0gT3V0bGluZS1CdXR0b24gKEF0dHJpYnV0bmFtZTogb3V0bGluZS1idXR0b24pXHJcbiAqIC0gRmxhdC1CdXR0b24gKEF0dHJpYnV0bmFtZTogZmxhdC1idXR0b24pXHJcbiAqIC0gRmFiLUJ1dHRvbiAoQXR0cmlidXRuYW1lOiBmYWItYnV0dG9uKVxyXG4gKiAtIE1pbmlGYWItQnV0dG9uIChBdHRyaWJ1dG5hbWU6IG1pbmlGYWItYnV0dG9uKVxyXG4gKlxyXG4gKiBXZWl0ZXJoaW4ga8O2bm5lbiBkaWUgc3RhbmRhcmQgVGhlbWVzIChwcmltYXJ5LCBhY2NlbnQsIHdhcm4pIGbDvHIgZGllIEhpbnRlcmdydW5kLSBiencuIFRleHRmYXJiZSBmZXN0Z2VsZWd0IHdlcmRlbiAoamUgbmFjaCBTdHlsZSkuXHJcbiAqXHJcbiAqIEbDvHIgd2VpdGVyZSBBbnBhc3N1bmdlbiBzaWVoZSBkaWUgSW5mb3JtYXRpb25lbiBkZXIgZWluemVsbmVuIEF0dHJpYnV0ZSBvZGVyIGRpZSBEb2t1bWVudGF0aW9uLlxyXG4gKlxyXG4gKiBAY2xhc3MgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAqIEBleHRlbmRzIHtCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0fVxyXG4gKiBAaW1wbGVtZW50cyB7QWZ0ZXJWaWV3SW5pdH1cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLWJ1dHRvbicsXHJcbiAgaG9zdDoge1xyXG4gICAnW3N0eWxlLm1pbi13aWR0aF0nOiAnZml0Q29udGVudCA/IFwiZml0LWNvbnRlbnRcIiA6IFwidW5zZXRcIicsXHJcbiAgICdbc3R5bGUubWFyZ2luXSc6ICd0b2dnbGUgPyBcIjAgLTE2cHhcIiA6IFwidW5zZXRcIicsXHJcbiAgICdbc3R5bGUudHJhbnNpdGlvbl0nOiAndG9nZ2xlID8gXCJ0cmFuc2Zvcm0gMC4yc1wiIDogXCJ1bnNldFwiJyxcclxuICAgLy8gRGllIEtsYXNzZSBhY3RpdmUgc2V0enQgdXBkYXRlU3R5bGUoKSwgd2VpbCBlaW5lIFRvZ2dsZS1HcnVwcGUgdG9nZ2xlU2VsZWN0ZWQgZXJzdCBuYWNoIGRlbSBDaGVjayBkZXIgRWx0ZXJuIHNldHp0XHJcbiAgICcobW91c2VlbnRlciknOiAnb25Nb3VzZUVudGVyKCknLFxyXG4gICAnKG1vdXNlbGVhdmUpJzogJ29uTW91c2VMZWF2ZSgpJ1xyXG4gIH0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC1idXR0b24uY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgQmFzZVB1c2hTdHJhdGVneU9iamVjdCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZmVyZW56IGF1ZiBkYXMgVGV4dC1FbGVtZW50IGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+fVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBAVmlld0NoaWxkKCdtcmRCdXR0b25UZXh0Q29udGVudCcsIHtzdGF0aWM6IHRydWV9KSBtcmRCdXR0b25UZXh0Q29udGVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZWluIEljb24tQnV0dG9uIGlzdC5cclxuICAgKlxyXG4gICAqIERlciBDb250ZW50IGRlcyBCdXR0b25zIHNvbGx0ZSBudXIgZWluIEljb24gc2Vpbi5cclxuICAgKiBEZXIgQnV0dG9uIGhhdCBzdGFuZGFyZG3DpMOfaWcgZWluZW4gdHJhbnNwYXJlbnRlbiBIaW50ZXJncnVuZCB1bmQgZGllIEZhcmJlIGRlcyBJY29ucyBpc3Qgc2Nod2Fyei5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnaWNvbi1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBpY29uOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZWluIFJhaXNlZC1CdXR0b24gaXN0LlxyXG4gICAqXHJcbiAgICogUmFpc2VkLUJ1dHRvbnMgaGFiZW4gZWluZW4gU2NoYXR0ZW4uXHJcbiAgICogRGVyIEJ1dHRvbiBoYXQgc3RhbmRhcmRtw6TDn2lnIGVpbmVuIHdlacOfZW4gSGludGVyZ3J1bmQgdW5kIGRpZSBUZXh0ZmFyYmUgc2Nod2Fyei5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAncmFpc2VkLWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHJhaXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZWluIE91dGxpbmUtQnV0dG9uIGlzdC5cclxuICAgKlxyXG4gICAqIE91dGxpbmUtQnV0dG9ucyBoYWJlbiBzdGFuZGFyZG3DpMOfaWcgZWluZW4gdHJhbnNwYXJlbnRlbiBIaW50ZXJncnVuZCB1bmQgZWluZW4gZ3JhdWVuIFJhbmQsIHNvd2llIGVpbmVuIHNjaHdhcnplbiBUZXh0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdvdXRsaW5lLWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIG91dGxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGVpbiBGbGF0LUJ1dHRvbiBpc3QuXHJcbiAgICpcclxuICAgKiBGbGF0LUJ1dHRvbnMgaGFiZW4gc3RhbmRhcmRtw6TDn2lnIGVpbmVuIHdlacOfZW4gSGludGVyZ3J1bmQgdW5kIGRpZSBUZXh0ZmFyYmUgaXN0IHNjaHdhcnouXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ2ZsYXQtYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgZmxhdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZWluIEZhYi1CdXR0b24gaXN0LlxyXG4gICAqXHJcbiAgICogRmFiLUJ1dHRvbnMgc2luZCBrcmVpc2bDtnJtaWdlIEJ1dHRvbnMuXHJcbiAgICogU3RhbmRhcmRtw6TDn2lnIGhhYmVuIHNpZSBlaW5lbiB3ZWnDn2VuIEhpbnRlcmdydW5kIHVuZCBkaWUgSWNvbmZhcmJlIGlzdCBzY2h3YXJ6LCBhdcOfZXJkZW0gYmVzaXR6ZW4gc2llIGVpbmVuIFNjaGF0dGVuLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdmYWItYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgZmFiOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBlaW4gTWluaUZhYi1CdXR0b24gaXN0LlxyXG4gICAqXHJcbiAgICogTWluaUZhYi1CdXR0b25zIHNpbmQga3JlaXNmw7ZybWlnZSBCdXR0b25zIHZvbiBkZXIgR3LDtsOfZSBlaW5lcyBJY29uLUJ1dHRvbnMuXHJcbiAgICogU3RhbmRhcmRtw6TDn2lnIGhhYmVuIHNpZSBlaW5lbiB3ZWnDn2VuIEhpbnRlcmdydW5kIHVuZCBkaWUgSWNvbmZhcmJlIGlzdCBzY2h3YXJ6LCBhdcOfZXJkZW0gYmVzaXR6ZW4gc2llIGVpbmVuIFNjaGF0dGVuLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdtaW5pRmFiLWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIG1pbmlGYWI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGVpbiBUb2dnbGUtQnV0dG9uIGlzdC5cclxuICAgKiBcclxuICAgKiBUb2dnbGUtQnV0dG9ucyBzb2xsdGVuIGltbWVyIGlubmVyaGFsYiBlaW5lciBUb2dnbGUtQnV0dG9uLUdyb3VwIHZlcndlbmRldCB3ZXJkZW4uXHJcbiAgICogU3RhbmRhcmRtw6TDn2lnIGhhYmVuIHNpZSBlaW5lbiB3ZWnDn2VuIEhpbnRlcmdydW5kIHVuZCBkaWUgVGV4dGZhcmJlIGlzdCBzY2h3YXJ6LCBhdcOfZXJkZW0gYmVzaXR6ZW4gc2llIGltIHNlbGVrdGllcnRlbiBadXN0YW5kIGVpbmVuIFNjaGF0dGVuLlxyXG4gICAqIFxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAndG9nZ2xlLWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHRvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uLCBhbHMgVG9nZ2xlLUJ1dHRvbiwgc2VsZWt0aWVydCBpc3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ3NlbGVjdGVkJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgdG9nZ2xlU2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiwgYWxzIFRvZ2dsZS1CdXR0b24sIGluIGRlciBlaW5mYWNoZW4gVmFyaWFudGUgZGFyZ2VzdGVsbHQgd2lyZC5cclxuICAgKlxyXG4gICAqIERlciBzZWxla3RpZXJ0ZSBCdXR0b24gd2lyZCBkYW5uIG51ciBlaW5nZWZhZXJidCwgb2huZSBWZXJncm9lc3NlcnVuZywgU2NoYXR0ZW4gdW5kIFVlYmVybGFwcHVuZy5cclxuICAgKiBXaXJkIHZvbiBkZXIgVG9nZ2xlLUJ1dHRvbi1Hcm91cCB1ZWJlciBkZXJlbiBBdHRyaWJ1dCBcInNpbXBsZVwiIGdlc2V0enQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSB0b2dnbGVTaW1wbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBkYXMgVGhlbWUgXCJwcmltYXJ5XCIgaGF0LlxyXG4gICAqXHJcbiAgICogSGllcmR1cmNoIHdpcmQgZGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIEJ1dHRvbnMgYXVmIGRpZSBwcmltw6RyZSBGYXJiZSBkZXMgVGhlbWVzIGdlc2V0enQuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcHJpbWFyeTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGRhcyBUaGVtZSBcImFjY2VudFwiIGhhdC5cclxuICAgKlxyXG4gICAqIEhpZXJkdXJjaCB3aXJkIGRpZSBIaW50ZXJncnVuZGZhcmJlIGRlcyBCdXR0b25zIGF1ZiBkaWUgQWt6ZW50ZmFyYmUgZGVzIFRoZW1lcyBnZXNldHp0LlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGFjY2VudDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGRhcyBUaGVtZSBcIndhcm5cIiBoYXQuXHJcbiAgICpcclxuICAgKiBIaWVyZHVyY2ggd2lyZCBkaWUgSGludGVyZ3J1bmRmYXJiZSBkZXMgQnV0dG9ucyBhdWYgZGllIFdhcm5mYXJiZSBkZXMgVGhlbWVzIGdlc2V0enQuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgd2FybjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGRlYWt0aXZpZXJ0IGlzdC5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBFaW5lIE9ic2VydmFibGVWYWx1ZSwgZGllIMO8YmVyZ2ViZW4gd2VyZGVuIGthbm4sIHVtIHp1IGJlc3RpbW1lbixcclxuICAgKiBvYiBkZXIgQnV0dG9uIGVpbmVuIExhZGViYWxrZW4vTGFkZXNwaW5uZXIgYW56ZWlnZW4gc29sbC5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbG9hZGluZzogT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+O1xyXG4gIC8qKlxyXG4gICAqIEVpbiBib29sZWFuLCBkZXIgYmVzdGltbXQsIG9iIGRlciBCdXR0b24gZWluZW4gTGFkZWJhbGtlbi9MYWRlc3Bpbm5lciBhbnplaWdlbiBzb2xsLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEVpbmUgT2JzZXJ2YWJsZVZhbHVlLCBkaWUgw7xiZXJnZWJlbiB3ZXJkZW4ga2FubiwgdW0gZGVuIEZvcnRzY2hyaXR0IGRlcyBMYWRlYmFsa2Vucy9MYWRlc3Bpbm5lcnMgenUgYmVzdGltbWVuLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09ic2VydmFibGVWYWx1ZTxudW1iZXI+fVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbG9hZGluZ1Byb2dyZXNzOiBPYnNlcnZhYmxlVmFsdWU8bnVtYmVyPjtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0enQgZGllIEdydW5kZmFyYmUgZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBEaWVzZSB3aXJkIGplIG5hY2ggU3R5bGUgZGVzIEJ1dHRvbnMgYWxzIEhpbnRlcmdydW5kZmFyYmUgb2RlciBUZXh0ZmFyYmUgdmVyd2VuZGV0LlxyXG4gICAqXHJcbiAgICogRXMga8O2bm5lbiBIZXgtLCBSR0ItIG9kZXIgUkdCQS1XZXJ0ZSwgc293aWUgXCJwcmltYXJ5XCIsIFwiYWNjZW50XCIgb2RlciBcIndhcm5cIiBhbmdlZ2ViZW4gd2VyZGVuLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdjb2xvcicsIHRyYW5zZm9ybTogY29sb3JUaGVtZUF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21UZXh0Q29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0enQgZGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBFcyBrw7ZubmVuIEhleC0sIFJHQi0gb2RlciBSR0JBLVdlcnRlIGFuZ2VnZWJlbiB3ZXJkZW4uXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ2JhY2tncm91bmRDb2xvcicsIHRyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tQmdDb2xvcjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkaWUgYmVudXR6ZXJkZWZpbmllcnRlIFRleHRmYXJiZSBuaWNodCBkdXJjaCBlaW4gZGVmbmllcnRlcyBUaGVtYSDDvGJlcnNjaHJpZWJlbiB3ZXJkZW4gc29sbC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBrZWVwQ3VzdG9tVGV4dENvbG9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGllIGJlbnV0emVyZGVmaW5pZXJ0ZSBIaW50ZXJncnVuZGZhcmJlIG5pY2h0IGR1cmNoIGVpbiBkZWZpbmllcnRlcyBUaGVtYSDDvGJlcnNjaHJpZWJlbiB3ZXJkZW4gc29sbC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBrZWVwQ3VzdG9tQmdDb2xvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBTZXR6dCBkaWUgSGludGVyZ3J1bmRmYXJiZSBkZXMgdW5zZWxla3RpZXJ0ZW4gVG9nZ2xlLUJ1dHRvbnMuXHJcbiAgICogXHJcbiAgICogRXMga8O2bm5lbiBIZXgtLCBSR0ItIG9kZXIgUkdCQS1XZXJ0ZSBhbmdlZ2ViZW4gd2VyZGVuLlxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21Ub2dnbGVVbnNlbGVjdGVkQ29sb3I6IHN0cmluZztcclxuICAvKipcclxuICAgKiBTZXR6dCBkaWUgVGV4dGZhcmJlIGRlcyB1bnNlbGVrdGllcnRlbiBUb2dnbGUtQnV0dG9ucy5cclxuICAgKiBcclxuICAgKiBFcyBrw7ZubmVuIEhleC0sIFJHQi0gb2RlciBSR0JBLVdlcnRlIGFuZ2VnZWJlbiB3ZXJkZW4uXHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRUZXh0Q29sb3I6IHN0cmluZztcclxuICAvKipcclxuICAgKiBTZXR6dCBkaWUgVGV4dGZhcmJlIGRlcyBzZWxla3RpZXJ0ZW4gVG9nZ2xlLUJ1dHRvbnMuXHJcbiAgICogXHJcbiAgICogRXMga8O2bm5lbiBIZXgtLCBSR0ItIG9kZXIgUkdCQS1XZXJ0ZSBhbmdlZ2ViZW4gd2VyZGVuLlxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21Ub2dnbGVTZWxlY3RlZFRleHRDb2xvcjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBTZXR6dCBkaWUgRmFyYmUgZGVzIExhZGViYWxrZW5zL0xhZGVzcGlubmVycy5cclxuICAgKlxyXG4gICAqIEVzIGvDtm5uZW4gSGV4LSwgUkdCLSBvZGVyIFJHQkEtV2VydGUgYW5nZWdlYmVuIHdlcmRlbi5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgcHJvZ3Jlc3NDb2xvcjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uLVRleHQgdmVyc2Nod2luZGV0LCB3ZW5uIGVyIHp1IGxhbmcgaXN0IHVuZCBhdXNnZXB1bmt0ZXQgd2VyZGVuIHfDvHJkZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBjb2xsYXBzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIHp1IHdlbGNoZW0gU3R5bGUgZGVyIEJ1dHRvbiBrb2xsYWJpZXJlbiBzb2xsLlxyXG4gICAqIE3DtmdsaWNoZSBXZXJ0ZTogXCJpY29uXCIsIFwiZmFiXCIsIFwibWluaUZhYlwiXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIHNldCBjb2xsYXBzZVRvKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLl9jb2xsYXBzZVRvID09PSB2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUgPT09IE1yZEJ1dHRvbkFwcGVhcmFuY2UuSUNPTiB8fCB2YWx1ZSA9PT0gTXJkQnV0dG9uQXBwZWFyYW5jZS5GQUIgfHwgdmFsdWUgPT09IE1yZEJ1dHRvbkFwcGVhcmFuY2UuTUlOSV9GQUIpIHtcclxuICAgICAgdGhpcy5fY29sbGFwc2VUbyA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmNvbGxhcHNlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ0RhcyBBdHRyaWJ1dCBjb2xsYXBzZVRvIGthbm4gbnVyIFwiaWNvblwiLCBcImZhYlwiIG9kZXIgXCJtaW5pRmFiXCIgc2Vpbi4nKTtcclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIGdldCBjb2xsYXBzZVRvKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29sbGFwc2VUbztcclxuICB9XHJcbiAgcHJpdmF0ZSBfY29sbGFwc2VUbzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBTb3JndCBkYWbDvHIsIGRhc3MgZGVyIEJ1dHRvbiBpbW1lciBtaW5kZXN0ZW5zIHNvIGJyZWl0IGlzdCwgd2llIHNlaW4gSW5oYWx0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdmaXQtY29udGVudCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBmaXRDb250ZW50OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZWluZW4gVG9vbHRpcCBhbnplaWdlbiBzb2xsLlxyXG4gICAqXHJcbiAgICogRGVyIFRvb2x0aXAtVGV4dCB3aXJkIHN0YW5kYXJkbcOkw59pZyBhdXMgZGVtIEluaGFsdCBkZXMgQnV0dG9ucyBvaG5lIGR1cmNoIFttcmQtaWNvbl0gZ2VrZW5uemVpY2huZXRlIEljb25zIGdlbmVyaWVydC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAndG9vbHRpcCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzaG93VG9vbHRpcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIERlciBUZXh0IGRlcyBUb29sdGlwcy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0b29sdGlwVGV4dDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBUb29sdGlwIG51ciBhbmdlemVpZ3Qgd2VyZGVuIHNvbGwsIHdlbm4gZGVyIEJ1dHRvbi1UZXh0IGF1c2dlcHVua3RldCB3aXJkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNldCB0b29sdGlwSWZUcnVuY2F0ZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuc2hvd1Rvb2x0aXAgPSB2YWx1ZSB8fCB0aGlzLnNob3dUb29sdGlwO1xyXG4gICAgdGhpcy5fdG9vbHRpcElmVHJ1bmNhdGVkID0gdmFsdWU7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgdG9vbHRpcElmVHJ1bmNhdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXBJZlRydW5jYXRlZDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfdG9vbHRpcElmVHJ1bmNhdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIFRvb2x0aXAgbnVyIGFuZ2V6ZWlndCB3ZXJkZW4gc29sbCwgd2VubiBkZXIgQnV0dG9uIGNvbGxhYmllcnQgaXN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHRvb2x0aXBJZkNvbGxhcHNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBEaWUgTWluZGVzdGjDtmhlIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogV2lyZCBlaW5lIFphaGwgYW5nZWdlYmVuLCB3aXJkIGRpZXNlIGFscyBQaXhlbHdlcnQgaW50ZXJwcmV0aWVydC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIG1pbkhlaWdodDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIERpZSBTY2hyaWZ0Z3LDtsOfZSBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIFdpcmQgZWluZSBaYWhsIGFuZ2VnZWJlbiwgd2lyZCBkaWVzZSBhbHMgUGl4ZWx3ZXJ0IGludGVycHJldGllcnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBmb250U2l6ZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIERpZSBTY2hyaWZ0ZmFtaWxpZSBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBmb250RmFtaWx5OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogRGllIFNjaHJpZnRkaWNrZSBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBmb250V2VpZ2h0OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogRGVyIER1cmNobWVzc2VyIGbDvHIgSWNvbi0sIEZhYi0gdW5kIE1pbmlGYWItQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIFdpcmQgZWluZSBaYWhsIGFuZ2VnZWJlbiwgd2lyZCBkaWVzZSBhbHMgUGl4ZWx3ZXJ0IGludGVycHJldGllcnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBkaWFtZXRlcjogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIERpZSBHcsO2w59lIGRlcyBJY29ucy5cclxuICAgKlxyXG4gICAqIFdpcmQgZWluZSBaYWhsIGFuZ2VnZWJlbiwgd2lyZCBkaWVzZSBhbHMgUGl4ZWx3ZXJ0IGludGVycHJldGllcnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBpY29uU2l6ZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIEljb24gZGVzIEJ1dHRvbnMgZGllIHZvbGxlIEdyw7bDn2UgZGVzIEJ1dHRvbnMgZWlubmVobWVuIHNvbGwuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZnVsbEljb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBEZXIgUmFkaXVzIGRlciBFY2tlbiBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIFdpcmQgZWluZSBaYWhsIGFuZ2VnZWJlbiwgd2lyZCBkaWVzZSBhbHMgUGl4ZWx3ZXJ0IGludGVycHJldGllcnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBib3JkZXJSYWRpdXM6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRGllIEZhcmJlIGRlcyBCdXR0b25zLCB3ZW5uIGVyIGdlaG92ZXJ0IHdpcmQuXHJcbiAgICogXHJcbiAgICogRXMga8O2bm5lbiBIZXgtLCBSR0ItIG9kZXIgUkdCQS1XZXJ0ZSBhbmdlZ2ViZW4gd2VyZGVuLlxyXG4gICAqIFxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21Ib3ZlckNvbG9yOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogRGllIEZhcmJlIGRlcyBUZXh0ZXMgZGVzIEJ1dHRvbnMsIHdlbm4gZXIgZ2Vob3ZlcnQgd2lyZC5cclxuICAgKiBcclxuICAgKiBFcyBrw7ZubmVuIEhleC0sIFJHQi0gb2RlciBSR0JBLVdlcnRlIGFuZ2VnZWJlbiB3ZXJkZW4uXHJcbiAgICogXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbUhvdmVyVGV4dENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlciBXZXJ0IGRlcyBCdXR0b25zIGFscyBUb2dnbGUtQnV0dG9uLlxyXG4gICAqIFxyXG4gICAqIEB0eXBlIHthbnl9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZTogYW55O1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRGllIEtvbmZpZ3VyYXRpb24gZGVzIE1yZC1CdXR0b25zLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAdHlwZSB7TXJkQ29uZmlnTW9kZWx9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2NvbmZpZzogTXJkQ29uZmlnTW9kZWwgPSBDb25maWdVdGlsLmdldENvbmZpZygpO1xyXG5cclxuICBwcml2YXRlIG1vdXNlRW50ZXJMaXN0ZW5lcjogKCkgPT4gdm9pZDtcclxuICBwcml2YXRlIG1vdXNlTGVhdmVMaXN0ZW5lcjogKCkgPT4gdm9pZDtcclxuXHJcbiAgcHJpdmF0ZSB1bmNvbGxhcHNlZEFwcGVhcmFuY2U6IE1yZEJ1dHRvbkFwcGVhcmFuY2U7XHJcblxyXG4gIHByaXZhdGUgYnV0dG9uUHJpbWFyeTogc3RyaW5nIHwgTXJkQmFzZUNvbG9yVGhlbWU7XHJcbiAgcHJpdmF0ZSBidXR0b25BY2NlbnQ6IHN0cmluZyB8IE1yZEJhc2VDb2xvclRoZW1lO1xyXG4gIHByaXZhdGUgYnV0dG9uV2Fybjogc3RyaW5nIHwgTXJkQmFzZUNvbG9yVGhlbWU7XHJcbiAgcHJpdmF0ZSBidXR0b25EaXNhYmxlZDogTXJkQmFzZUNvbG9yVGhlbWU7XHJcbiAgcHJpdmF0ZSBidXR0b25Qcm9ncmVzczogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIHRleHRMaWdodENvbG9yOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSB0ZXh0RGFya0NvbG9yOiBzdHJpbmc7XHJcbiAgXHJcbiAgcHVibGljIGJnQ29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgdGV4dENvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIGhvdmVyQ29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgaG92ZXJUZXh0Q29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgYWN0aXZlQ29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgZGlzYWJsZWRUZXh0Q29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgZGlzYWJsZWRCZ0NvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIHRvZ2dsZVVuc2VsZWN0ZWRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgYm9yZGVyV2lkdGg6IHN0cmluZztcclxuICBwdWJsaWMgYm9yZGVyU3R5bGU6IHN0cmluZztcclxuICBwdWJsaWMgYm9yZGVyQ29sb3I6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGlzQ29sbGFwc2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGlzSG92ZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD5cclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICBjb25zdCBob3N0OiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgLy8gQXVzc2VyaGFsYiBkZXIgWm9uZSwgd2VpbCBkaWUgTGlzdGVuZXIgc2VsYnN0IGtlaW5lIENoYW5nZSBEZXRlY3Rpb24gYnJhdWNoZW47IEFuZ3VsYXJzIChjbGljaykgYW0gSG9zdCBsYWV1ZnQgd2VpdGVyIGluIGRlciBab25lXHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGhvc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmtsaWNrUHJ1ZWZlbiwge2NhcHR1cmU6IHRydWV9KTtcclxuICAgICAgaG9zdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMua2xpY2tBYnNjaGlybWVuKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMubG9hZGluZykpIHtcclxuICAgICAgdGhpcy5tYXJrRm9yQ2hlY2tJZih0aGlzLmxvYWRpbmcuY2hhbmdlZClcclxuICAgIH1cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmxvYWRpbmdQcm9ncmVzcykpIHtcclxuICAgICAgdGhpcy5tYXJrRm9yQ2hlY2tJZih0aGlzLmxvYWRpbmdQcm9ncmVzcy5jaGFuZ2VkKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5pdEJhc2VTdHlsZSgpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU3R5bGUoKTtcclxuXHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5rbGlja1BydWVmZW4sIHtjYXB0dXJlOiB0cnVlfSk7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMua2xpY2tBYnNjaGlybWVuKTtcclxuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlU3R5bGUoKTogdm9pZCB7XHJcbiAgICBsZXQgdGhlbWVzQ291bnQgPSBbdGhpcy5wcmltYXJ5LCB0aGlzLmFjY2VudCwgdGhpcy53YXJuXS5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZSkubGVuZ3RoO1xyXG4gICAgaWYgKHRoZW1lc0NvdW50ID4gMSkge1xyXG4gICAgICB0aHJvdyBFcnJvcignRWluIE1yZEJ1dHRvbiBrYW5uIG51ciBlaW4gVGhlbWEgaGFiZW4uIFNldHplIFwicHJpbWFyeVwiLCBcImFjY2VudFwiIG9kZXIgXCJ3YXJuXCIgYWxzIFRoZW1hLicpO1xyXG4gICAgfVxyXG4gICAgbGV0IGFwcGVhcmFuY2VDb3VudCA9IFt0aGlzLmljb24sIHRoaXMucmFpc2VkLCB0aGlzLm91dGxpbmUsIHRoaXMuZmxhdCwgdGhpcy5mYWIsIHRoaXMubWluaUZhYiwgdGhpcy50b2dnbGVdLmZpbHRlcigodmFsdWUpID0+IHZhbHVlKS5sZW5ndGg7XHJcbiAgICBpZiAoYXBwZWFyYW5jZUNvdW50ID4gMSkge1xyXG4gICAgICB0aHJvdyBFcnJvcignRWluIE1yZEJ1dHRvbiBrYW5uIG51ciBlaW5lbiBTdHlsZSBoYWJlbi4gU2V0emUgXCJpY29uLWJ1dHRvblwiLCBcInJhaXNlZC1idXR0b25cIiwgXCJvdXRsaW5lLWJ1dHRvblwiLCBcImZsYXQtYnV0dG9uXCIsIFwiZmFiLWJ1dHRvblwiLCBcIm1pbmlGYWItYnV0dG9uXCIgb2RlciBrZWluZW4gU3R5bGUuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmFsbHMgaXJnZW5kZWluZSBGYXJiZS9UaGVtYSBnZXNldHp0IGlzdCwgd2lyZCBkaWUgSGludGVyZ3J1bmQtIHVuZCBUZXh0ZmFyYmUgZGVzIEJ1dHRvbnMgYW5oYW5kIGRpZXNlciB1bmQgZGVzIFN0eWxlcyBnZXNldHp0LlxyXG4gICAgaWYgKHRoaXMucHJpbWFyeSB8fCB0aGlzLmFjY2VudCB8fCB0aGlzLndhcm4gfHwgdGhpcy5jdXN0b21CZ0NvbG9yIHx8IHRoaXMuY3VzdG9tVGV4dENvbG9yKSB7XHJcbiAgICAgIC8vIFdlbm4gJ2tlZXBDdXN0b21CZ0NvbG9yJyBnZXNldHp0IGlzdCwgZGFubiB3aXJkICdjdXN0b21CZ0NvbG9yJyBhbHMgJ2Jhc2VDb2xvcicgdmVyd2VuZGV0XHJcbiAgICAgIGxldCBiYXNlQ29sb3I6IHN0cmluZyA9IHRoaXMua2VlcEN1c3RvbUJnQ29sb3IgJiYgISF0aGlzLmN1c3RvbUJnQ29sb3IgPyB0aGlzLmN1c3RvbUJnQ29sb3IgOlxyXG4gICAgICAgIC8vIFNvbnN0IHdlbm4gZWluIFRoZW1lIGdlc2V0enQgaXN0LCB3aXJkIGRpZSBlbnRzcHJlY2hlbmRlIEZhcmJlIGRlcyBUaGVtZXMgdmVyd2VuZGV0XHJcbiAgICAgICAgdGhpcy5wcmltYXJ5ID8gXy5pc09iamVjdCh0aGlzLmJ1dHRvblByaW1hcnkpID8gKHRoaXMuYnV0dG9uUHJpbWFyeSBhcyBNcmRCYXNlQ29sb3JUaGVtZSkuYmFja2dyb3VuZCA6IHRoaXMuYnV0dG9uUHJpbWFyeSBhcyBzdHJpbmcgOlxyXG4gICAgICAgIHRoaXMuYWNjZW50ID8gXy5pc09iamVjdCh0aGlzLmJ1dHRvbkFjY2VudCkgPyAodGhpcy5idXR0b25BY2NlbnQgYXMgTXJkQmFzZUNvbG9yVGhlbWUpLmJhY2tncm91bmQgOiB0aGlzLmJ1dHRvbkFjY2VudCBhcyBzdHJpbmcgOlxyXG4gICAgICAgIHRoaXMud2FybiA/IF8uaXNPYmplY3QodGhpcy5idXR0b25XYXJuKSA/ICh0aGlzLmJ1dHRvbldhcm4gYXMgTXJkQmFzZUNvbG9yVGhlbWUpLmJhY2tncm91bmQgOiB0aGlzLmJ1dHRvbldhcm4gYXMgc3RyaW5nIDpcclxuICAgICAgICAvLyBTb25zdCB3ZW5uICdjdXN0b21CZ0NvbG9yJyBnZXNldHp0IGlzdCwgd2lyZCAnY3VzdG9tQmdDb2xvcicgdmVyd2VuZGV0LCBzb25zdCAnY3VzdG9tVGV4dENvbG9yJ1xyXG4gICAgICAgICEhdGhpcy5jdXN0b21CZ0NvbG9yID8gdGhpcy5jdXN0b21CZ0NvbG9yIDogdGhpcy5jdXN0b21UZXh0Q29sb3I7XHJcblxyXG4gICAgICAvLyBXZW5uICdrZWVwQ3VzdG9tVGV4dENvbG9yJyBnZXNldHp0IGlzdCwgZGFubiB3aXJkICdjdXN0b21UZXh0Q29sb3InIGFscyAnYmFzZVRleHRDb2xvcicgdmVyd2VuZGV0XHJcbiAgICAgIGxldCBiYXNlVGV4dENvbG9yID0gdGhpcy5rZWVwQ3VzdG9tVGV4dENvbG9yICYmICEhdGhpcy5jdXN0b21UZXh0Q29sb3IgPyB0aGlzLmN1c3RvbVRleHRDb2xvciA6XHJcbiAgICAgICAgLy8gU29uc3Qgd2VubiBlaW4gVGhlbWUgZ2VzZXR6dCBpc3QsIHdpcmQgZGllIGVudHNwcmVjaGVuZGUgRmFyYmUgZGVzIFRoZW1lcyB2ZXJ3ZW5kZXRcclxuICAgICAgICB0aGlzLnByaW1hcnkgPyBfLmlzT2JqZWN0KHRoaXMuYnV0dG9uUHJpbWFyeSkgPyAodGhpcy5idXR0b25QcmltYXJ5IGFzIE1yZEJhc2VDb2xvclRoZW1lKS50ZXh0IDogdGhpcy5idXR0b25QcmltYXJ5IGFzIHN0cmluZyA6XHJcbiAgICAgICAgdGhpcy5hY2NlbnQgPyBfLmlzT2JqZWN0KHRoaXMuYnV0dG9uQWNjZW50KSA/ICh0aGlzLmJ1dHRvbkFjY2VudCBhcyBNcmRCYXNlQ29sb3JUaGVtZSkudGV4dCA6IHRoaXMuYnV0dG9uQWNjZW50IGFzIHN0cmluZyA6XHJcbiAgICAgICAgdGhpcy53YXJuID8gXy5pc09iamVjdCh0aGlzLmJ1dHRvbldhcm4pID8gKHRoaXMuYnV0dG9uV2FybiBhcyBNcmRCYXNlQ29sb3JUaGVtZSkudGV4dCA6IHRoaXMuYnV0dG9uV2FybiBhcyBzdHJpbmcgOlxyXG4gICAgICAgIC8vIFNvbnN0IHdlbm4gJ2N1c3RvbVRleHRDb2xvcicgZ2VzZXR6dCBpc3QsIHdpcmQgJ2N1c3RvbVRleHRDb2xvcicgdmVyd2VuZGV0LCBzb25zdCAndGV4dERhcmtDb2xvcidcclxuICAgICAgICAhIXRoaXMuY3VzdG9tVGV4dENvbG9yID8gdGhpcy5jdXN0b21UZXh0Q29sb3IgOiB0aGlzLnRleHREYXJrQ29sb3I7XHJcblxyXG4gICAgICAvLyAnYmdDb2xvcicgd2lyZCBhdWYgJ2Jhc2VDb2xvcicgZ2VzZXR6dFxyXG4gICAgICB0aGlzLmJnQ29sb3IgPSBiYXNlQ29sb3I7XHJcbiAgICAgIC8vIFdlbm4gJ2tlZXBDdXN0b21UZXh0Q29sb3InIG9kZXIga2VpbiBUaGVtYSB1bmQgJ2N1c3RvbUJnQ29sb3InLCB1bmQgJ2N1c3RvbVRleHRDb2xvcicgZ2VzZXR6dCBzaW5kLCB3aXJkICd0ZXh0Q29sb3InIGF1ZiAnY3VzdG9tVGV4dENvbG9yJyBnZXNldHp0XHJcbiAgICAgIHRoaXMudGV4dENvbG9yID0gKHRoaXMua2VlcEN1c3RvbVRleHRDb2xvciB8fCAodGhlbWVzQ291bnQgPT09IDAgJiYgdGhpcy5jdXN0b21CZ0NvbG9yKSkgJiYgISF0aGlzLmN1c3RvbVRleHRDb2xvciA/IHRoaXMuY3VzdG9tVGV4dENvbG9yIDpcclxuICAgICAgICAvLyBTb25zdCB3ZW5uIGVpbiBUaGVtYSB1bmQgJ2tlZXBDdXN0b21CZ0NvbG9yJyBnZXNldHp0IGlzdCwgd2lyZCAnYmFzZVRleHRDb2xvcicgdmVyd2VuZGV0XHJcbiAgICAgICAgKHRoZW1lc0NvdW50ID09PSAxICYmIHRoaXMua2VlcEN1c3RvbUJnQ29sb3IpID8gYmFzZVRleHRDb2xvciA6XHJcbiAgICAgICAgLy8gU29uc3QsIHdlbm4gZGllIEFwcGVhcmFuY2UgbmljaHQgVG9nZ2xlIGlzdCBvZGVyIGRlciBUb2dnbGUtQnV0dG9uIHNlbGVrdGllcnQgaXN0LFxyXG4gICAgICAgIC8vIHdpcmQgYW5oYW5kIGRlciAnYmFzZUNvbG9yJyBlbnRzY2hpZWRlbiwgb2IgJ3RleHREYXJrQ29sb3InIG9kZXIgJ3RleHRMaWdodENvbG9yJyB2ZXJ3ZW5kZXQgd2lyZFxyXG4gICAgICAgIHRoaXMudG9nZ2xlID8gdGhpcy50b2dnbGVTZWxlY3RlZCAmJiB0aGlzLmN1c3RvbVRvZ2dsZVNlbGVjdGVkVGV4dENvbG9yID8gdGhpcy5jdXN0b21Ub2dnbGVTZWxlY3RlZFRleHRDb2xvciA6XHJcbiAgICAgICAgICAhdGhpcy50b2dnbGVTZWxlY3RlZCAmJiB0aGlzLmN1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRUZXh0Q29sb3IgPyB0aGlzLmN1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRUZXh0Q29sb3IgOlxyXG4gICAgICAgIC8qIXRoaXMudG9nZ2xlIHx8Ki8gdGhpcy50b2dnbGVTZWxlY3RlZCA/IENvbG9yVXRpbC5zaG91bGRUZXh0QmVEYXJrKGJhc2VDb2xvcikgPyB0aGlzLnRleHREYXJrQ29sb3IgOiB0aGlzLnRleHRMaWdodENvbG9yIDpcclxuICAgICAgICBDb2xvclV0aWwuc2hvdWxkVGV4dEJlRGFyayh0aGlzLnRvZ2dsZVVuc2VsZWN0ZWRDb2xvcikgPyB0aGlzLnRleHREYXJrQ29sb3IgOiB0aGlzLnRleHRMaWdodENvbG9yIDpcclxuICAgICAgICAvLyBXZW5uIGRpZSBBcHBlYXJhbmNlIFRvZ2dsZSBpc3QgdW5kIGRlciBCdXR0b24gbmljaHQgc2VsZWt0aWVydCBpc3QgdW5kICdjdXN0b21Ub2dnbGVVbnNlbGVjdGVkVGV4dENvbG9yJyBnZXNldHp0IGlzdCxcclxuICAgICAgICAvLyB3aXJkIGRpZXNlIHZlcndlbmRldFxyXG4gICAgICAgIC8vIHRoaXMuY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvciA/IHRoaXMuY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvciA6XHJcbiAgICAgICAgLy8gU29uc3Qgd2lyZCBhbmhhbmQgdm9uICd0b2dnbGVVbnNlbGVjdGVkQ29sb3InIGVudHNjaGllZGVuLCBvYiAndGV4dERhcmtDb2xvcicgb2RlciAndGV4dExpZ2h0Q29sb3InIHZlcndlbmRldCB3aXJkXHJcbiAgICAgICAgQ29sb3JVdGlsLnNob3VsZFRleHRCZURhcmsoYmFzZUNvbG9yKSA/IHRoaXMudGV4dERhcmtDb2xvciA6IHRoaXMudGV4dExpZ2h0Q29sb3I7XHJcbiAgICAgICAgLy8gU29uc3Qgd2lyZCAndG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvcicgdmVyd2VuZGV0XHJcbiAgICAgIC8vIHdlbm4gY3VzdG9tSG92ZXJDb2xvciBnZWdlYmVuIGRhbm4gc2V0emUgZGllc2Ugc29uc3Qgd2lyZCAnaG92ZXJDb2xvcicgYXVmIGVpbmUgMjAlIHRyYW5zcGFyZW50ZSBWZXJzaW9uIHZvbiAnYmFzZUNvbG9yJyBnZXNldHp0XHJcbiAgICAgIHRoaXMuaG92ZXJDb2xvciA9IHRoaXMuY3VzdG9tSG92ZXJDb2xvciA/IHRoaXMuY3VzdG9tSG92ZXJDb2xvciA6IENvbG9yVXRpbC5jaGFuZ2VDb2xvck9wYWNpdHkoYmFzZUNvbG9yLCAyMCk7XHJcbiAgICAgIHRoaXMuaG92ZXJUZXh0Q29sb3IgPSB0aGlzLmN1c3RvbUhvdmVyVGV4dENvbG9yID8gdGhpcy5jdXN0b21Ib3ZlclRleHRDb2xvciA6IHRoaXMudGV4dENvbG9yOyAvL0NvbG9yVXRpbC5zaG91bGRUZXh0QmVEYXJrKHRoaXMuaG92ZXJDb2xvcikgPyB0aGlzLnRleHREYXJrQ29sb3IgOiB0aGlzLnRleHRMaWdodENvbG9yO1xyXG4gICAgICAvLyAnYWN0aXZlQ29sb3InIHdpcmQgYXVmIDMwJSB0cmFuc3BhcmVudGUgVmVyc2lvbiB2b24gJ2Jhc2VDb2xvcicgbWl0IDEwJSBoZWxsZXJlciBGYXJiZSBnZXNldHp0XHJcbiAgICAgIHRoaXMuYWN0aXZlQ29sb3IgPSBDb2xvclV0aWwuY2hhbmdlQ29sb3JPcGFjaXR5KENvbG9yVXRpbC5jaGFuZ2VDb2xvckJyaWdodG5lc3NQZXJjZW50KGJhc2VDb2xvciwgMTApLCAzMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRsO8ciBkZW4gU3RhbmRhcmQtU3R5bGUsIE91dGxpbmUtU3R5bGUgdW5kIEljb24tU3R5bGVcclxuICAgIGlmIChhcHBlYXJhbmNlQ291bnQgPT09IDAgfHwgdGhpcy5vdXRsaW5lIHx8IHRoaXMuaWNvbikge1xyXG4gICAgICAvLyBXZW5uIGVpbiBUaGVtYSB1bmQgJ2tlZXBDdXN0b21CZ0NvbG9yJyBuaWNodCBnZXNldHogaXN0IE9ERVJcclxuICAgICAgLy8ga2VpbmUgJ2N1c3RvbUJnQ29sb3InLCBhYmVyICdjdXN0b21UZXh0Q29sb3InIGdlc2V0enQgc2luZC4uLlxyXG4gICAgICBpZiAoKHRoZW1lc0NvdW50ID09PSAxICYmICF0aGlzLmtlZXBDdXN0b21CZ0NvbG9yKSB8fCAoIXRoaXMuY3VzdG9tQmdDb2xvciAmJiB0aGlzLmN1c3RvbVRleHRDb2xvcikpIHtcclxuICAgICAgICAvLyAuLi4gd2lyZCAndGV4dENvbG9yJywgZmFsbHMgbmljaHQgZHVyY2ggJ2tlZXBDdXN0b21UZXh0Q29sb3InIHVuZCAnY3VzdG9tVGV4dENvbG9yJyBmZXN0LCBhdWYgJ2JnQ29sb3InIGdlc2V0enRcclxuICAgICAgICB0aGlzLnRleHRDb2xvciA9ICh0aGlzLmtlZXBDdXN0b21UZXh0Q29sb3IgJiYgISF0aGlzLmN1c3RvbVRleHRDb2xvcikgPyB0aGlzLmN1c3RvbVRleHRDb2xvciA6IHRoaXMuYmdDb2xvcjtcclxuICAgICAgICAvLyAuLi4gd2lyZCAnYmdDb2xvcicsIGZhbGxzIG5pY2h0IGR1cmNoICdrZWVwQ3VzdG9tQmdDb2xvcicgdW5kICdjdXN0b21CZ0NvbG9yJyBmZXN0LCBhdWYgZGllIFN0YW5kYXJkLUhpbnRlcmdydW5kZmFyYmUgZ2VzZXR6dFxyXG4gICAgICAgIHRoaXMuYmdDb2xvciA9ICh0aGlzLmtlZXBDdXN0b21CZ0NvbG9yICYmICEhdGhpcy5jdXN0b21CZ0NvbG9yKSA/IHRoaXMuY3VzdG9tQmdDb2xvciA6IHRoaXMuX2NvbmZpZy5idXR0b24uYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmFsbHMga2VpbmUgJ3Byb2dyZXNzQ29sb3InIGdlc2V0enQgaXN0Li4uXHJcbiAgICBpZiAoIXRoaXMucHJvZ3Jlc3NDb2xvcikge1xyXG4gICAgICAvLyAuLi4gdW5kIHdpciBlaW4gVGhlbWUgb2RlciBlaW5lIGJlbnV0emVyZGVmaW5pZXJ0ZSBUZXh0ZmFyYmUgb2RlciBIaW50ZXJncnVuZGZhcmJlIGhhYmVuLi4uXHJcbiAgICAgIGlmICh0aGVtZXNDb3VudCA9PT0gMSB8fCB0aGlzLmN1c3RvbVRleHRDb2xvciB8fCB0aGlzLmN1c3RvbUJnQ29sb3IpIHtcclxuICAgICAgICAvLyAuLi4gd2lyZCAncHJvZ3Jlc3NDb2xvcicgZsO8ciBkZW4gU3RhbmRhcmQtU3R5bGUsIE91dGxpbmUtU3R5bGUgdW5kIEljb24tU3R5bGUgYXVmICd0ZXh0Q29sb3InIGdlc2V0enQsXHJcbiAgICAgICAgLy8gYW5zb25zdGVuIGF1ZiAyMCUgaGVsbGVyZSBWZXJzaW9uIHZvbiAnYmdDb2xvcidcclxuICAgICAgICBpZiAoYXBwZWFyYW5jZUNvdW50ID09PSAwIHx8IHRoaXMub3V0bGluZSB8fCB0aGlzLmljb24pIHtcclxuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NDb2xvciA9IHRoaXMudGV4dENvbG9yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnByb2dyZXNzQ29sb3IgPSBDb2xvclV0aWwuY2hhbmdlQ29sb3JCcmlnaHRuZXNzUGVyY2VudCh0aGlzLmJnQ29sb3IsIDIwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gT2huZSBUaGVtZSB1bmQgYmVudXR6ZXJkZWZpbmllcnRlIEZhcmJlbiB3aXJkICdwcm9ncmVzc0NvbG9yJyBhdWYgZGllIEdydW5kLVByb2dyZXNzLUNvbG9yIGdlc2V0enRcclxuICAgICAgICB0aGlzLnByb2dyZXNzQ29sb3IgPSB0aGlzLmJ1dHRvblByb2dyZXNzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmFsbHMga2VpbiBleHBsaXppZXRlciAndG9vbHRpcFRleHQnIGdlc2V0enQgaXN0LCB3aXJkIGRlciBUZXh0IGRlcyBCdXR0b25zIGFscyBUb29sdGlwLVRleHQgdmVyd2VuZGV0XHJcbiAgICBpZiAodGhpcy5tcmRCdXR0b25UZXh0Q29udGVudCAmJiAhdGhpcy50b29sdGlwVGV4dCkge1xyXG4gICAgICB0aGlzLnRvb2x0aXBUZXh0ID0gdGhpcy5tcmRCdXR0b25UZXh0Q29udGVudC5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnRvZ2dsZSAmJiB0aGlzLnRvZ2dsZVNlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0enQgZGllIFN0YW5kYXJkLVN0eWxlcyBhbmhhbmQgZGVyIEtvbmZpZ3VyYXRpb24gdW5kIGRlciBnZXNldHp0ZW4gQXR0cmlidXRlLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBpbml0QmFzZVN0eWxlKCk6IHZvaWQge1xyXG4gICAgbGV0IGFwcGVhcmFuY2U6IE1yZEJ1dHRvbkFwcGVhcmFuY2UgPSB0aGlzLmljb24gPyBNcmRCdXR0b25BcHBlYXJhbmNlLklDT04gOiB0aGlzLnJhaXNlZCA/IE1yZEJ1dHRvbkFwcGVhcmFuY2UuUkFJU0VEIDpcclxuICAgICAgdGhpcy5vdXRsaW5lID8gTXJkQnV0dG9uQXBwZWFyYW5jZS5PVVRMSU5FIDogdGhpcy5mbGF0ID8gTXJkQnV0dG9uQXBwZWFyYW5jZS5GTEFUIDogdGhpcy5mYWIgPyBNcmRCdXR0b25BcHBlYXJhbmNlLkZBQiA6XHJcbiAgICAgIHRoaXMubWluaUZhYiA/IE1yZEJ1dHRvbkFwcGVhcmFuY2UuTUlOSV9GQUIgOiB0aGlzLnRvZ2dsZSA/IE1yZEJ1dHRvbkFwcGVhcmFuY2UuVE9HR0xFIDogbnVsbDsvL01yZEJ1dHRvbkFwcGVhcmFuY2UuREVGQVVMVDtcclxuICAgIHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlID0gdGhpcy51bmNvbGxhcHNlZEFwcGVhcmFuY2UgIT09IHVuZGVmaW5lZCA/IHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlIDogYXBwZWFyYW5jZTtcclxuXHJcbiAgICB0aGlzLmJ1dHRvblByaW1hcnkgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5wcmltYXJ5IHx8IHRoaXMuX2NvbmZpZy5idXR0b24ucHJpbWFyeSB8fCB0aGlzLl9jb25maWcuYmFzZUNvbG9ycy5wcmltYXJ5O1xyXG4gICAgdGhpcy5idXR0b25BY2NlbnQgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5hY2NlbnQgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5hY2NlbnQgfHwgdGhpcy5fY29uZmlnLmJhc2VDb2xvcnMuYWNjZW50O1xyXG4gICAgdGhpcy5idXR0b25XYXJuID0gdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8ud2FybiB8fCB0aGlzLl9jb25maWcuYnV0dG9uLndhcm4gfHwgdGhpcy5fY29uZmlnLmJhc2VDb2xvcnMud2FybjtcclxuICAgIHRoaXMuYnV0dG9uRGlzYWJsZWQgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5kaXNhYmxlZCB8fCB0aGlzLl9jb25maWcuYnV0dG9uLmRpc2FibGVkXHJcbiAgICB0aGlzLmJ1dHRvblByb2dyZXNzID0gdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8ucHJvZ3Jlc3NDb2xvciB8fCB0aGlzLl9jb25maWcuYnV0dG9uPy5wcm9ncmVzc0NvbG9yIHx8XHJcbiAgICAgIChfLmlzT2JqZWN0KHRoaXMuYnV0dG9uUHJpbWFyeSkgPyAodGhpcy5idXR0b25QcmltYXJ5IGFzIE1yZEJhc2VDb2xvclRoZW1lKS50ZXh0IDogdGhpcy5idXR0b25QcmltYXJ5IGFzIHN0cmluZyk7XHJcblxyXG4gICAgdGhpcy5iZ0NvbG9yID0gdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8uYmFja2dyb3VuZENvbG9yIHx8IHRoaXMuX2NvbmZpZy5idXR0b24uYmFja2dyb3VuZENvbG9yO1xyXG4gICAgdGhpcy50ZXh0TGlnaHRDb2xvciA9IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LnRleHRMaWdodENvbG9yIHx8IHRoaXMuX2NvbmZpZy5idXR0b24udGV4dExpZ2h0Q29sb3I7XHJcbiAgICB0aGlzLnRleHREYXJrQ29sb3IgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy50ZXh0RGFya0NvbG9yIHx8IHRoaXMuX2NvbmZpZy5idXR0b24udGV4dERhcmtDb2xvcjtcclxuICAgIHRoaXMudGV4dENvbG9yID0gdGhpcy50ZXh0RGFya0NvbG9yO1xyXG4gICAgdGhpcy5ob3ZlckNvbG9yID0gdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8uaG92ZXJDb2xvciB8fCB0aGlzLl9jb25maWcuYnV0dG9uLmhvdmVyQ29sb3I7XHJcbiAgICB0aGlzLmhvdmVyVGV4dENvbG9yID0gdGhpcy50ZXh0Q29sb3I7XHJcbiAgICB0aGlzLmFjdGl2ZUNvbG9yID0gdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8uYWN0aXZlQ29sb3IgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5hY3RpdmVDb2xvcjtcclxuICAgIHRoaXMuZGlzYWJsZWRUZXh0Q29sb3IgPSB0aGlzLmJ1dHRvbkRpc2FibGVkLnRleHQ7XHJcbiAgICB0aGlzLmRpc2FibGVkQmdDb2xvciA9IHRoaXMuYnV0dG9uRGlzYWJsZWQuYmFja2dyb3VuZDtcclxuICAgIHRoaXMudG9nZ2xlVW5zZWxlY3RlZENvbG9yID0gdGhpcy5jdXN0b21Ub2dnbGVVbnNlbGVjdGVkQ29sb3IgfHwgdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8udW5zZWxlY3RlZEJnQ29sb3I7XHJcblxyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LmJvcmRlcikge1xyXG4gICAgICBpZiAoXy5pc09iamVjdCh0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdLmJvcmRlcikpIHtcclxuICAgICAgICB0aGlzLmJvcmRlcldpZHRoID0gKHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0uYm9yZGVyIGFzIE1yZEJvcmRlcikud2lkdGg7XHJcbiAgICAgICAgdGhpcy5ib3JkZXJTdHlsZSA9ICh0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdLmJvcmRlciBhcyBNcmRCb3JkZXIpLnN0eWxlO1xyXG4gICAgICAgIHRoaXMuYm9yZGVyQ29sb3IgPSAodGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXS5ib3JkZXIgYXMgTXJkQm9yZGVyKS5jb2xvcjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgYm9yZGVyID0gICh0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdLmJvcmRlciBhcyBzdHJpbmcpLnNwbGl0KCcgJylcclxuICAgICAgICB0aGlzLmJvcmRlcldpZHRoID0gYm9yZGVyWzBdO1xyXG4gICAgICAgIHRoaXMuYm9yZGVyU3R5bGUgPSBib3JkZXJbMV07XHJcbiAgICAgICAgdGhpcy5ib3JkZXJDb2xvciA9IGJvcmRlclsyXTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ib3JkZXJXaWR0aCA9IF8uaXNPYmplY3QodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIpID8gKHRoaXMuX2NvbmZpZy5idXR0b24uYm9yZGVyIGFzIE1yZEJvcmRlcik/LndpZHRoIDogKHRoaXMuX2NvbmZpZy5idXR0b24uYm9yZGVyIGFzIHN0cmluZykuc3BsaXQoJyAnKVswXTtcclxuICAgICAgdGhpcy5ib3JkZXJTdHlsZSA9IF8uaXNPYmplY3QodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIpID8gKHRoaXMuX2NvbmZpZy5idXR0b24uYm9yZGVyIGFzIE1yZEJvcmRlcik/LnN0eWxlIDogKHRoaXMuX2NvbmZpZy5idXR0b24uYm9yZGVyIGFzIHN0cmluZykuc3BsaXQoJyAnKVsxXTtcclxuICAgICAgdGhpcy5ib3JkZXJDb2xvciA9IF8uaXNPYmplY3QodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIpID8gKHRoaXMuX2NvbmZpZy5idXR0b24uYm9yZGVyIGFzIE1yZEJvcmRlcik/LmNvbG9yIDogKHRoaXMuX2NvbmZpZy5idXR0b24uYm9yZGVyIGFzIHN0cmluZykuc3BsaXQoJyAnKVsyXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1pbkhlaWdodCA9IHRoaXMubWluSGVpZ2h0IHx8IHRoaXMuZGlhbWV0ZXIgfHwgdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8ubWluSGVpZ2h0IHx8IHRoaXMuX2NvbmZpZy5idXR0b24ubWluSGVpZ2h0O1xyXG4gICAgdGhpcy5mb250U2l6ZSA9IHRoaXMuZm9udFNpemUgfHwgdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8uZm9udFNpemUgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5mb250U2l6ZSB8fCB0aGlzLl9jb25maWcuYmFzZUZvbnQuc2l6ZTtcclxuICAgIHRoaXMuZm9udEZhbWlseSA9IHRoaXMuZm9udEZhbWlseSB8fCB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5mb250RmFtaWx5IHx8IHRoaXMuX2NvbmZpZy5idXR0b24uZm9udEZhbWlseSB8fCB0aGlzLl9jb25maWcuYmFzZUZvbnQuZmFtaWx5O1xyXG4gICAgdGhpcy5kaWFtZXRlciA9IHRoaXMuZGlhbWV0ZXIgfHwgdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8uZGlhbWV0ZXIgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5kaWFtZXRlcjtcclxuICAgIHRoaXMuaWNvblNpemUgPSB0aGlzLmljb25TaXplIHx8IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/Lmljb25TaXplIHx8IHRoaXMuX2NvbmZpZy5idXR0b24uaWNvblNpemU7XHJcbiAgICB0aGlzLmJvcmRlclJhZGl1cyA9IHRoaXMuYm9yZGVyUmFkaXVzIHx8IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LmJvcmRlclJhZGl1cyB8fCB0aGlzLl9jb25maWcuYnV0dG9uLmJvcmRlclJhZGl1cztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrLCB3ZW5uIHNpY2ggZGVyIENvbGxhYnMtU3RhdHVzIGRlcyBCdXR0b25zIMOkbmRlcnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaXNDb2xsYXBzZWQgR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBrb2xsYWJpZXJ0IGlzdC5cclxuICAgKi9cclxuICBwdWJsaWMgYnV0dG9uQ29sbGFwc2VkKGlzQ29sbGFwc2VkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAvLyBXaXIgcmVhZ2llcmVuIG51ciwgd2VubiBzaWNoIGRlciBTdGF0dXMgw6RuZGVydFxyXG4gICAgaWYgKHRoaXMuaXNDb2xsYXBzZWQgIT09IGlzQ29sbGFwc2VkKSB7XHJcbiAgICAgIHRoaXMuaXNDb2xsYXBzZWQgPSBpc0NvbGxhcHNlZDtcclxuICAgICAgLy8gV2VubiAnY29sbGFwc2VUbycgZ2VzZXR6dCBpc3QsIHdpcmQgZGVyIEJ1dHRvbiBlbnRzcHJlY2hlbmQgdW1nZXN0eWx0XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmNvbGxhcHNlVG8pKSB7XHJcbiAgICAgICAgLy8gRGllc2UgV2VydGUgbcO8c3NlbiB6dXLDvGNrZ2VzZXR6dCB3ZXJkZW4sIGRhIHNpZSBmw7xyIGRlbiBuZXVlbiBTdHlsZSBuZXUgZ2VzZXR6dCB3ZXJkZW4gbcO8c3NlblxyXG4gICAgICAgIHRoaXMuYm9yZGVyUmFkaXVzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZm9udFNpemUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5taW5IZWlnaHQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5kaWFtZXRlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmljb25TaXplID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmIChpc0NvbGxhcHNlZCkge1xyXG4gICAgICAgICAgdGhpcy5pY29uID0gdGhpcy5jb2xsYXBzZVRvID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLklDT04gPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnJhaXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5vdXRsaW5lID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmZsYXQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuZmFiID0gdGhpcy5jb2xsYXBzZVRvID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLkZBQiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubWluaUZhYiA9IHRoaXMuY29sbGFwc2VUbyA9PT0gTXJkQnV0dG9uQXBwZWFyYW5jZS5NSU5JX0ZBQiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubmdBZnRlclZpZXdJbml0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaWNvbiA9IHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLklDT04gPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnJhaXNlZCA9IHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLlJBSVNFRCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMub3V0bGluZSA9IHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLk9VVExJTkUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmZsYXQgPSB0aGlzLnVuY29sbGFwc2VkQXBwZWFyYW5jZSA9PT0gTXJkQnV0dG9uQXBwZWFyYW5jZS5GTEFUID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5mYWIgPSB0aGlzLnVuY29sbGFwc2VkQXBwZWFyYW5jZSA9PT0gTXJkQnV0dG9uQXBwZWFyYW5jZS5GQUIgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm1pbmlGYWIgPSB0aGlzLnVuY29sbGFwc2VkQXBwZWFyYW5jZSA9PT0gTXJkQnV0dG9uQXBwZWFyYW5jZS5NSU5JX0ZBQiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubmdBZnRlclZpZXdJbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25Nb3VzZUVudGVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0hvdmVyZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25Nb3VzZUxlYXZlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0hvdmVyZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FwdHVyZS1QaGFzZSBhbSBIb3N0OiBsYWV1ZnQgdm9yIEFuZ3VsYXJzIGAoY2xpY2spYCwgYXVjaCB3ZW5uIGRpcmVrdCBhdWYgZGVuIEhvc3QgZ2VrbGlja3Qgd2lyZC5cclxuICAgKiBEZWFrdGl2aWVydCBlbmRldCBkZXIgS2xpY2sgaGllciwgc29kYXNzIHdlZGVyIGAoY2xpY2spYCBub2NoIHVtZ2ViZW5kZSBFbGVtZW50ZSBpaG4gZXJoYWx0ZW4uXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZWFkb25seSBrbGlja1BydWVmZW4gPSAoZXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvKiogV2llIGJpc2hlcjogYChjbGljaylgIGFtIEhvc3QgZmV1ZXJ0LCB1bWdlYmVuZGUgRWxlbWVudGUgKHouIEIuIGVpbmUga2xpY2tiYXJlIExpc3RlbnplaWxlKSBlcmhhbHRlbiBkZW4gS2xpY2sgbmljaHQgKi9cclxuICBwcml2YXRlIHJlYWRvbmx5IGtsaWNrQWJzY2hpcm1lbiA9IChldmVudDogRXZlbnQpOiB2b2lkID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9O1xyXG59XHJcblxyXG5lbnVtIE1yZEJ1dHRvbkFwcGVhcmFuY2Uge1xyXG4gIC8vIERFRkFVTFQgPSBudWxsLFxyXG4gIElDT04gPSAnaWNvbicsXHJcbiAgUkFJU0VEID0gJ3JhaXNlZCcsXHJcbiAgT1VUTElORSA9ICdvdXRsaW5lJyxcclxuICBGTEFUID0gJ2ZsYXQnLFxyXG4gIEZBQiA9ICdmYWInLFxyXG4gIE1JTklfRkFCID0gJ21pbmlGYWInLFxyXG4gIFRPR0dMRSA9ICd0b2dnbGUnXHJcbn1cclxuIiwiPCEtLSBEZXIgZWlnZW50bGljaCBIVE1MLUJ1dHRvbiAtLT5cclxuPGJ1dHRvbiBjbGFzcz1cIm1yZC1idXR0b24tY29udGFpbmVyXCJcclxuICAjYnV0dG9uQ29udGFpbmVyXHJcbiAgW3N0eWxlLi0tYmctY29sb3JdPVwiYmdDb2xvclwiXHJcbiAgW3N0eWxlLi0tdGV4dC1jb2xvcl09XCJ0ZXh0Q29sb3JcIlxyXG4gIFtzdHlsZS4tLWhvdmVyLXRleHQtY29sb3JdPVwiaG92ZXJUZXh0Q29sb3JcIlxyXG4gIFtzdHlsZS4tLWRpc2FibGVkLXRleHQtY29sb3JdPVwiZGlzYWJsZWRUZXh0Q29sb3JcIlxyXG4gIFtzdHlsZS4tLWRpc2FibGVkLWJnLWNvbG9yXT1cImRpc2FibGVkQmdDb2xvclwiXHJcbiAgW3N0eWxlLi0tYm9yZGVyLXdpZHRoXT1cImJvcmRlcldpZHRoXCJcclxuICBbc3R5bGUuLS1ib3JkZXItY29sb3JdPVwiYm9yZGVyQ29sb3JcIlxyXG4gIFtzdHlsZS4tLWJvcmRlci1zdHlsZV09XCJib3JkZXJTdHlsZVwiXHJcbiAgW3N0eWxlLi0tYm9yZGVyLXJhZGl1c109XCJib3JkZXJSYWRpdXNcIlxyXG4gIFtzdHlsZS4tLW1pbi1oZWlnaHRdPVwibWluSGVpZ2h0XCJcclxuICBbc3R5bGUuLS1mb250LXNpemVdPVwiZm9udFNpemVcIlxyXG4gIFtzdHlsZS4tLWZvbnQtZmFtaWx5XT1cImZvbnRGYW1pbHlcIlxyXG4gIFtzdHlsZS4tLWZvbnQtd2VpZ2h0XT1cImZvbnRXZWlnaHRcIlxyXG4gIFtzdHlsZS4tLWRpYW1ldGVyXT1cImRpYW1ldGVyXCJcclxuICBbc3R5bGUuLS1pY29uLXNpemVdPVwiaWNvblNpemVcIlxyXG4gIFtzdHlsZS4tLXVuc2VsZWN0ZWQtY29sb3JdPVwidG9nZ2xlVW5zZWxlY3RlZENvbG9yXCJcclxuXHJcbiAgW25nU3R5bGVdPVwieydtaW4td2lkdGgnOiBmaXRDb250ZW50ID8gJ2ZpdC1jb250ZW50JyA6ICd1bnNldCd9XCJcclxuICBbbmdDbGFzc109XCJ7J21yZC1pY29uLWJ1dHRvbic6IGljb24sICdtcmQtcmFpc2VkLWJ1dHRvbic6IHJhaXNlZCwgJ21yZC1vdXRsaW5lLWJ1dHRvbic6IG91dGxpbmUsXHJcbiAgICAnbXJkLWZsYXQtYnV0dG9uJzogZmxhdCwgJ21yZC1mYWItYnV0dG9uJzogZmFiLCAnbXJkLW1pbmktZmFiLWJ1dHRvbic6IG1pbmlGYWIsICdtcmQtdG9nZ2xlLWJ1dHRvbic6IHRvZ2dsZSxcclxuICAgICdtcmQtdG9nZ2xlLXNlbGVjdGVkJzogdG9nZ2xlU2VsZWN0ZWQsICdtcmQtdG9nZ2xlLXNpbXBsZSc6IHRvZ2dsZSAmJiB0b2dnbGVTaW1wbGUsICdkaXNhYmxlZCc6IGRpc2FibGVkfVwiXHJcblxyXG4gIFttcmRUb29sVGlwXT1cInRvb2x0aXBUZXh0XCIgW3Nob3dPblRydW5jYXRlZEVsZW1lbnRdPVwidG9vbHRpcElmVHJ1bmNhdGVkID8gbXJkQnV0dG9uVGV4dENvbnRlbnQgOiB1bmRlZmluZWRcIiBbc2hvd1Rvb2xUaXBdPVwic2hvd1Rvb2x0aXAgfHwgKHRvb2x0aXBJZkNvbGxhcHNlZCAmJiBpc0NvbGxhcHNlZClcIj5cclxuICA8ZGl2IGNsYXNzPVwibXJkLWJ1dHRvbi1iYWNrZ3JvdW5kXCI+XHJcbiAgICA8IS0tIEVpbiBPdmVybGF5IMO8YmVyIGRlbSBCdXR0b24gd2VsY2hlcyBkZW4gSG92ZXItIHVuZCBBY3RpdmUtRWZmZWt0IGFuemVpZ3QgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXJkLWJ1dHRvbi1mb2N1c1wiIFtzdHlsZS4tLWhvdmVyLWNvbG9yXT1cImhvdmVyQ29sb3JcIiBbc3R5bGUuLS1hY3RpdmUtY29sb3JdPVwiYWN0aXZlQ29sb3JcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8IS0tIEVpbiBPdmVybGF5IMO8YmVyIGRlbSBCdXR0b24gd2VsY2hlcyBkZW4gSG92ZXItIHVuZCBBY3RpdmUtRWZmZWt0IGFuemVpZ3QgLS0+XHJcbiAgPCEtLSA8ZGl2IGNsYXNzPVwibXJkLWJ1dHRvbi1mb2N1c1wiIFtzdHlsZS4tLWhvdmVyLWNvbG9yXT1cImhvdmVyQ29sb3JcIiBbc3R5bGUuLS1hY3RpdmUtY29sb3JdPVwiYWN0aXZlQ29sb3JcIj48L2Rpdj4gLS0+XHJcbiAgPCEtLSBEZXIgQ29udGVudCBkZXMgQnV0dG9ucyAtLT5cclxuICA8c3BhbiBjbGFzcz1cIm1yZC1idXR0b24tY29udGVudFwiIFtuZ0NsYXNzXT1cInsnaXNDb2xsYXBzZWQnOiBpc0NvbGxhcHNlZH1cIj5cclxuICAgIDwhLS0gTGlua2VyIEljb24tQ29udGFpbmVyIC0tPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJtcmQtYnV0dG9uLWljb24tY29udGVudFwiIFxyXG4gICAgICAgICAgW25nQ2xhc3NdPVwieydmdWxsLWljb24nOiBmdWxsSWNvbn1cIiBcclxuICAgICAgICAgIFtoaWRlSWZUcnVuY2F0ZWRdPVwiY29sbGFwc2VcIiBcclxuICAgICAgICAgIGRpc3BsYXlTdGF0ZT1cImZsZXhcIiBcclxuICAgICAgICAgIHJlcXVpcmVkSGlkZUF0dHJpYnV0ZT1cImljb24tY29sbGFwc2VcIlxyXG4gICAgICAgICAgY2hlY2tDaGlsZHJlbkZvckF0dHJpYnV0ZSBcclxuICAgICAgICAgIFtoaWRlT25UcnVuY2F0ZWRFbGVtZW50XT1cIm1yZEJ1dHRvblRleHRDb250ZW50XCIgXHJcbiAgICAgICAgICBbcGFyZW50UmVzaXplRWxlbWVudF09XCJ0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtcmQtaWNvbjpub3QoW2ljb24tZW5kXSksIFttcmQtaWNvbl06bm90KFtpY29uLWVuZF0pXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9zcGFuPlxyXG4gICAgXHJcbiAgICA8IS0tIERlciBUZXh0IGRlcyBCdXR0b25zIC0tPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJtcmQtYnV0dG9uLXRleHQtY29udGVudFwiIFxyXG4gICAgICAgICAgKGhpZGRlbkNoYW5nZWQpPVwiYnV0dG9uQ29sbGFwc2VkKCRldmVudClcIiBcclxuICAgICAgICAgIFtoaWRlSWZUcnVuY2F0ZWRdPVwiY29sbGFwc2VcIiBcclxuICAgICAgICAgICNtcmRCdXR0b25UZXh0Q29udGVudCBcclxuICAgICAgICAgIFtwYXJlbnRSZXNpemVFbGVtZW50XT1cInRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIjpub3QoW21yZC1pY29uXSk6bm90KG1yZC1pY29uKVwiPjwvbmctY29udGVudD5cclxuICAgIDwvc3Bhbj5cclxuICAgIFxyXG4gICAgPCEtLSBSZWNodGVyIEljb24tQ29udGFpbmVyIC0tPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJtcmQtYnV0dG9uLWljb24tY29udGVudFwiIFxyXG4gICAgICAgICAgW25nQ2xhc3NdPVwieydmdWxsLWljb24nOiBmdWxsSWNvbn1cIiBcclxuICAgICAgICAgIFtoaWRlSWZUcnVuY2F0ZWRdPVwiY29sbGFwc2VcIiBcclxuICAgICAgICAgIGRpc3BsYXlTdGF0ZT1cImZsZXhcIiBcclxuICAgICAgICAgIHJlcXVpcmVkSGlkZUF0dHJpYnV0ZT1cImljb24tY29sbGFwc2VcIlxyXG4gICAgICAgICAgY2hlY2tDaGlsZHJlbkZvckF0dHJpYnV0ZSBcclxuICAgICAgICAgIFtoaWRlT25UcnVuY2F0ZWRFbGVtZW50XT1cIm1yZEJ1dHRvblRleHRDb250ZW50XCIgXHJcbiAgICAgICAgICBbcGFyZW50UmVzaXplRWxlbWVudF09XCJ0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtcmQtaWNvbltpY29uLWVuZF0sIFttcmQtaWNvbl1baWNvbi1lbmRdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPCEtLSBEaWUgUHJvZ3Jlc3MtQmFyIGVpbmVzIEJ1dHRvbnMgKG5pY2h0IGbDvHIgSWNvbi0sIEZhYi0gdW5kIE1pbmktRmFiLUJ1dHRvbnMpIC0tPlxyXG4gIDxtcmQtcHJvZ3Jlc3MtYmFyIGNsYXNzPVwibXJkLWJ1dHRvbi1wcm9ncmVzcy1iYXJcIlxyXG4gICAgKm5nSWY9XCIhZGlzYWJsZWQgJiYgIWljb24gJiYgIWZhYiAmJiAhbWluaUZhYiAmJiAoaXNMb2FkaW5nIHx8IGxvYWRpbmc/LnZhbHVlIHx8IGxvYWRpbmdQcm9ncmVzcz8udmFsdWUgfHwgbG9hZGluZ1Byb2dyZXNzPy52YWx1ZSA9PT0gMClcIlxyXG4gICAgW3ZhbHVlXT1cImxvYWRpbmdQcm9ncmVzcz8udmFsdWVcIiBbbW9kZV09XCJsb2FkaW5nUHJvZ3Jlc3MgPyAnZGV0ZXJtaW5hdGUnIDogJ2luZGV0ZXJtaW5hdGUnXCIgW2NvbG9yXT1cInByb2dyZXNzQ29sb3JcIj48L21yZC1wcm9ncmVzcy1iYXI+XHJcbiAgPCEtLSBEZXIgUHJvZ3Jlc3MtU3Bpbm5lciBlaW5lcyBCdXR0b25zIChudXIgZsO8ciBJY29uLSwgRmFiLSB1bmQgTWluaS1GYWItQnV0dG9ucykgLS0+XHJcbiAgPG1yZC1wcm9ncmVzcy1zcGlubmVyIGNsYXNzPVwibXJkLWJ1dHRvbi1wcm9ncmVzcy1zcGlubmVyXCJcclxuICAgICpuZ0lmPVwiIWRpc2FibGVkICYmIChpY29uIHx8IGZhYiB8fCBtaW5pRmFiKSAmJiAoaXNMb2FkaW5nIHx8IGxvYWRpbmc/LnZhbHVlIHx8IGxvYWRpbmdQcm9ncmVzcz8udmFsdWUgfHwgbG9hZGluZ1Byb2dyZXNzPy52YWx1ZSA9PT0gMClcIlxyXG4gICAgW3ZhbHVlXT1cImxvYWRpbmdQcm9ncmVzcz8udmFsdWVcIiBbbW9kZV09XCJsb2FkaW5nUHJvZ3Jlc3MgPyAnZGV0ZXJtaW5hdGUnIDogJ2luZGV0ZXJtaW5hdGUnXCIgW2NvbG9yXT1cInByb2dyZXNzQ29sb3JcIj48L21yZC1wcm9ncmVzcy1zcGlubmVyPlxyXG48L2J1dHRvbj5cclxuIl19