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
    value;
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
    ngOnInit() {
        // Hier sorgen wir dafür, dass der Standard Click-Handler von Angular entfernt wird
        const host = this.elementRef.nativeElement;
        const button = host.querySelector('button');
        const newHost = host.cloneNode();
        newHost.appendChild(button);
        Array.from(host.attributes).forEach(attr => newHost.setAttribute(attr.name, attr.value));
        host.parentNode.replaceChild(newHost, host);
        newHost.style.minWidth = this.fitContent ? 'fit-content' : 'unset';
        newHost.style.margin = this.toggle ? '0 -16px' : 'unset';
        newHost.style.transition = this.toggle ? 'transform 0.2s' : 'unset';
        if (this.toggle && this.toggleSelected) {
            newHost.classList.add('active');
        }
        newHost.addEventListener('click', (event) => this.onClick(event));
        this.elementRef.nativeElement = newHost;
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
        this.elementRef.nativeElement.removeEventListener('click', (event) => this.onClick(event));
        if (this.elementRef.nativeElement.parentNode) {
            this.elementRef.nativeElement.parentNode.removeChild(this.elementRef.nativeElement);
        }
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
        event.preventDefault();
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (!this.disabled) {
            this.click.emit(event);
        }
    }
    /** @nocollapse */ static ɵfac = function MrdButtonComponent_Factory(t) { return new (t || MrdButtonComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdButtonComponent, selectors: [["mrd-button"]], viewQuery: function MrdButtonComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mrdButtonTextContent = _t.first);
        } }, hostVars: 8, hostBindings: function MrdButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("min-width", ctx.fitContent ? "fit-content" : "unset")("margin", ctx.toggle ? "0 -16px" : "unset")("transition", ctx.toggle ? "transform 0.2s" : "unset");
            i0.ɵɵclassProp("active", ctx.toggle && ctx.toggleSelected);
        } }, inputs: { icon: ["icon-button", "icon", booleanAttribute], raised: ["raised-button", "raised", booleanAttribute], outline: ["outline-button", "outline", booleanAttribute], flat: ["flat-button", "flat", booleanAttribute], fab: ["fab-button", "fab", booleanAttribute], miniFab: ["miniFab-button", "miniFab", booleanAttribute], toggle: ["toggle-button", "toggle", booleanAttribute], toggleSelected: ["selected", "toggleSelected", booleanAttribute], primary: ["primary", "primary", booleanAttribute], accent: ["accent", "accent", booleanAttribute], warn: ["warn", "warn", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], loading: "loading", isLoading: ["isLoading", "isLoading", booleanAttribute], loadingProgress: "loadingProgress", customTextColor: ["color", "customTextColor", colorThemeAttribute], customBgColor: ["backgroundColor", "customBgColor", colorAttribute], keepCustomTextColor: ["keepCustomTextColor", "keepCustomTextColor", booleanAttribute], keepCustomBgColor: ["keepCustomBgColor", "keepCustomBgColor", booleanAttribute], customToggleUnselectedColor: ["customToggleUnselectedColor", "customToggleUnselectedColor", colorAttribute], customToggleUnselectedTextColor: ["customToggleUnselectedTextColor", "customToggleUnselectedTextColor", colorAttribute], customToggleSelectedTextColor: ["customToggleSelectedTextColor", "customToggleSelectedTextColor", colorAttribute], progressColor: ["progressColor", "progressColor", colorAttribute], collapse: ["collapse", "collapse", booleanAttribute], collapseTo: "collapseTo", fitContent: ["fit-content", "fitContent", booleanAttribute], showTooltip: ["tooltip", "showTooltip", booleanAttribute], tooltipText: "tooltipText", tooltipIfTruncated: ["tooltipIfTruncated", "tooltipIfTruncated", booleanAttribute], minHeight: ["minHeight", "minHeight", sizeAttribute], fontSize: ["fontSize", "fontSize", sizeAttribute], fontFamily: "fontFamily", diameter: ["diameter", "diameter", sizeAttribute], iconSize: ["iconSize", "iconSize", sizeAttribute], fullIcon: ["fullIcon", "fullIcon", booleanAttribute], borderRadius: ["borderRadius", "borderRadius", sizeAttribute], value: "value" }, outputs: { click: "click" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c6, decls: 14, vars: 68, consts: [[1, "mrd-button-container", 3, "ngStyle", "ngClass", "mrdToolTip", "showOnTruncatedElement", "showToolTip"], ["buttonContainer", ""], [1, "mrd-button-background"], [1, "mrd-button-focus"], [1, "mrd-button-content", 3, "ngClass"], ["displayState", "flex", "requiredHideAttribute", "icon-collapse", "checkChildrenForAttribute", "", 1, "mrd-button-icon-content", 3, "ngClass", "hideIfTruncated", "hideOnTruncatedElement", "parentResizeElement"], [1, "mrd-button-text-content", 3, "hideIfTruncated", "parentResizeElement", "hiddenChanged"], ["mrdButtonTextContent", ""], ["class", "mrd-button-progress-bar", 3, "value", "mode", "color", 4, "ngIf"], ["class", "mrd-button-progress-spinner", 3, "value", "mode", "color", 4, "ngIf"], [1, "mrd-button-progress-bar", 3, "value", "mode", "color"], [1, "mrd-button-progress-spinner", 3, "value", "mode", "color"]], template: function MrdButtonComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵstyleProp("--bg-color", ctx.bgColor)("--text-color", ctx.textColor)("--disabled-text-color", ctx.disabledTextColor)("--disabled-bg-color", ctx.disabledBgColor)("--border-width", ctx.borderWidth)("--border-color", ctx.borderColor)("--border-style", ctx.borderStyle)("--border-radius", ctx.borderRadius)("--min-height", ctx.minHeight)("--font-size", ctx.fontSize)("--font-family", ctx.fontFamily)("--diameter", ctx.diameter)("--icon-size", ctx.iconSize)("--unselected-color", ctx.toggleUnselectedColor);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(50, _c2, ctx.fitContent ? "fit-content" : "unset"))("ngClass", i0.ɵɵpureFunctionV(52, _c3, [ctx.icon, ctx.raised, ctx.outline, ctx.flat, ctx.fab, ctx.miniFab, ctx.toggle, ctx.toggleSelected, ctx.disabled]))("mrdToolTip", ctx.tooltipText)("showOnTruncatedElement", ctx.tooltipIfTruncated ? _r1 : undefined)("showToolTip", ctx.showTooltip);
            i0.ɵɵadvance(3);
            i0.ɵɵstyleProp("--hover-color", ctx.hoverColor)("--active-color", ctx.activeColor);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(62, _c4, ctx.isCollapsed));
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
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle, i2.MrdProgressBarComponent, i3.MrdProgressSpinnerComponent, i4.ToolTipRendererDirective, i5.HideIfTruncatedDirective], styles: ["[_nghost-%COMP%]{position:relative;display:inline-flex;flex-direction:column;justify-content:center;align-items:center;max-width:100%}.active[_nghost-%COMP%]{z-index:10}.mrd-button-container[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:center;min-height:var(--min-height);height:inherit;max-width:100%;width:100%;padding:0 16px;font-size:var(--font-size);font-family:var(--font-family);font-weight:700;letter-spacing:.1px;border:var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius);color:var(--text-color)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;z-index:1;width:100%}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]   .mrd-button-icon-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]   .mrd-button-text-content[_ngcontent-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]     mrd-icon{margin:0 2px}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]   .mrd-button-text-content[_ngcontent-%COMP%]{padding:0 16px}.mrd-button-container.disabled[_ngcontent-%COMP%]{color:var(--disabled-text-color);pointer-events:none;cursor:initial}.mrd-button-container.disabled[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{background-color:var(--disabled-bg-color)}.mrd-button-container[_ngcontent-%COMP%]:hover:not(.disabled)   .mrd-button-focus[_ngcontent-%COMP%]{background-color:var(--hover-color)}.mrd-button-container[_ngcontent-%COMP%]:active:not(.disabled)   .mrd-button-focus[_ngcontent-%COMP%]{background-color:var(--active-color)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-focus[_ngcontent-%COMP%]{position:absolute;inset:0;border-radius:var(--border-radius)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{position:absolute;inset:0;border-radius:var(--border-radius);background-color:var(--bg-color)}.mrd-button-container.mrd-raised-button[_ngcontent-%COMP%]:not(.disabled){--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-raised-button[_ngcontent-%COMP%]:not(.disabled):active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]{min-width:var(--diameter)!important;height:var(--diameter);padding:0}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{min-height:unset;width:var(--diameter);height:var(--diameter)}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]     mrd-icon{margin:0!important;font-size:calc(var(--diameter) / 2)}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     mrd-icon{font-size:var(--diameter)}.mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]:active, .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]{padding:0 44px;transition:color .2s}.mrd-button-container.mrd-toggle-button.mrd-toggle-selected[_ngcontent-%COMP%]{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040;transform:scale(1.15);z-index:10}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040;z-index:5}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:hover{z-index:5}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{transition:background-color .2s}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:not(.mrd-toggle-selected)   .mrd-button-background[_ngcontent-%COMP%]{background-color:var(--unselected-color)}.mrd-button-container[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container[_ngcontent-%COMP%]     mrd-icon{font-size:1.5em;margin-right:4px;margin-top:2px;width:var(--icon-size);height:var(--icon-size);min-width:1em}.mrd-button-container[_ngcontent-%COMP%]     [mrd-icon][icon-end], .mrd-button-container[_ngcontent-%COMP%]     mrd-icon[icon-end]{margin-right:0;margin-left:4px}.mrd-button-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:10%;left:5px;right:5px;height:10%;min-height:10%}.mrd-button-progress-spinner[_ngcontent-%COMP%]{position:absolute;top:3px;left:3px;width:calc(100% - 6px)!important;height:calc(100% - 6px)!important}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdButtonComponent, [{
        type: Component,
        args: [{ selector: 'mrd-button', host: {
                    '[style.min-width]': 'fitContent ? "fit-content" : "unset"',
                    '[style.margin]': 'toggle ? "0 -16px" : "unset"',
                    '[style.transition]': 'toggle ? "transform 0.2s" : "unset"',
                    '[class.active]': 'toggle && toggleSelected'
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- Der eigentlich HTML-Button -->\r\n<button class=\"mrd-button-container\"\r\n  #buttonContainer\r\n  [style.--bg-color]=\"bgColor\"\r\n  [style.--text-color]=\"textColor\"\r\n  [style.--disabled-text-color]=\"disabledTextColor\"\r\n  [style.--disabled-bg-color]=\"disabledBgColor\"\r\n  [style.--border-width]=\"borderWidth\"\r\n  [style.--border-color]=\"borderColor\"\r\n  [style.--border-style]=\"borderStyle\"\r\n  [style.--border-radius]=\"borderRadius\"\r\n  [style.--min-height]=\"minHeight\"\r\n  [style.--font-size]=\"fontSize\"\r\n  [style.--font-family]=\"fontFamily\"\r\n  [style.--diameter]=\"diameter\"\r\n  [style.--icon-size]=\"iconSize\"\r\n  [style.--unselected-color]=\"toggleUnselectedColor\"\r\n\r\n  [ngStyle]=\"{'min-width': fitContent ? 'fit-content' : 'unset'}\"\r\n  [ngClass]=\"{'mrd-icon-button': icon, 'mrd-raised-button': raised, 'mrd-outline-button': outline,\r\n    'mrd-flat-button': flat, 'mrd-fab-button': fab, 'mrd-mini-fab-button': miniFab, 'mrd-toggle-button': toggle,\r\n    'mrd-toggle-selected': toggleSelected, 'disabled': disabled}\"\r\n\r\n  [mrdToolTip]=\"tooltipText\" [showOnTruncatedElement]=\"tooltipIfTruncated ? mrdButtonTextContent : undefined\" [showToolTip]=\"showTooltip\">\r\n  <div class=\"mrd-button-background\">\r\n    <!-- Ein Overlay \u00FCber dem Button welches den Hover- und Active-Effekt anzeigt -->\r\n    <div class=\"mrd-button-focus\" [style.--hover-color]=\"hoverColor\" [style.--active-color]=\"activeColor\"></div>\r\n  </div>\r\n  <!-- Ein Overlay \u00FCber dem Button welches den Hover- und Active-Effekt anzeigt -->\r\n  <!-- <div class=\"mrd-button-focus\" [style.--hover-color]=\"hoverColor\" [style.--active-color]=\"activeColor\"></div> -->\r\n  <!-- Der Content des Buttons -->\r\n  <span class=\"mrd-button-content\" [ngClass]=\"{'isCollapsed': isCollapsed}\">\r\n    <!-- Icons links vom Text -->\r\n    <span class=\"mrd-button-icon-content\" [ngClass]=\"{'full-icon': fullIcon}\" [hideIfTruncated]=\"collapse\" displayState=\"flex\" requiredHideAttribute=\"icon-collapse\"\r\n      checkChildrenForAttribute [hideOnTruncatedElement]=\"mrdButtonTextContent\" [parentResizeElement]=\"this.elementRef.nativeElement\"><ng-content select=\"mrd-icon:not([icon-end]), [mrd-icon]:not([icon-end])\"></ng-content></span>\r\n    <!-- Der Text des Buttons -->\r\n    <span class=\"mrd-button-text-content\" (hiddenChanged)=\"buttonCollapsed($event)\" [hideIfTruncated]=\"collapse\" #mrdButtonTextContent [parentResizeElement]=\"this.elementRef.nativeElement\"><ng-content select=\":not([mrd-icon]):not(mrd-icon)\"></ng-content></span>\r\n    <!-- Icons rechts vom Text -->\r\n    <span class=\"mrd-button-icon-content\" [ngClass]=\"{'full-icon': fullIcon}\" [hideIfTruncated]=\"collapse\" displayState=\"flex\" requiredHideAttribute=\"icon-collapse\"\r\n      checkChildrenForAttribute [hideOnTruncatedElement]=\"mrdButtonTextContent\" [parentResizeElement]=\"this.elementRef.nativeElement\"><ng-content select=\"mrd-icon[icon-end], [mrd-icon][icon-end]\"></ng-content></span>\r\n  </span>\r\n  <!-- Die Progress-Bar eines Buttons (nicht f\u00FCr Icon-, Fab- und Mini-Fab-Buttons) -->\r\n  <mrd-progress-bar class=\"mrd-button-progress-bar\"\r\n    *ngIf=\"!disabled && !icon && !fab && !miniFab && (isLoading || loading?.value || loadingProgress?.value || loadingProgress?.value === 0)\"\r\n    [value]=\"loadingProgress?.value\" [mode]=\"loadingProgress ? 'determinate' : 'indeterminate'\" [color]=\"progressColor\"></mrd-progress-bar>\r\n  <!-- Der Progress-Spinner eines Buttons (nur f\u00FCr Icon-, Fab- und Mini-Fab-Buttons) -->\r\n  <mrd-progress-spinner class=\"mrd-button-progress-spinner\"\r\n    *ngIf=\"!disabled && (icon || fab || miniFab) && (isLoading || loading?.value || loadingProgress?.value || loadingProgress?.value === 0)\"\r\n    [value]=\"loadingProgress?.value\" [mode]=\"loadingProgress ? 'determinate' : 'indeterminate'\" [color]=\"progressColor\"></mrd-progress-spinner>\r\n</button>\r\n", styles: [":host{position:relative;display:inline-flex;flex-direction:column;justify-content:center;align-items:center;max-width:100%}:host.active{z-index:10}.mrd-button-container{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:center;min-height:var(--min-height);height:inherit;max-width:100%;width:100%;padding:0 16px;font-size:var(--font-size);font-family:var(--font-family);font-weight:700;letter-spacing:.1px;border:var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius);color:var(--text-color)}.mrd-button-container .mrd-button-content{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;z-index:1;width:100%}.mrd-button-container .mrd-button-content .mrd-button-icon-content{display:flex;flex-direction:row;align-items:center;justify-content:center}.mrd-button-container .mrd-button-content .mrd-button-text-content{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-button-container .mrd-button-content.isCollapsed ::ng-deep [mrd-icon],.mrd-button-container .mrd-button-content.isCollapsed ::ng-deep mrd-icon{margin:0 2px}.mrd-button-container .mrd-button-content.isCollapsed .mrd-button-text-content{padding:0 16px}.mrd-button-container.disabled{color:var(--disabled-text-color);pointer-events:none;cursor:initial}.mrd-button-container.disabled .mrd-button-background{background-color:var(--disabled-bg-color)}.mrd-button-container:hover:not(.disabled) .mrd-button-focus{background-color:var(--hover-color)}.mrd-button-container:active:not(.disabled) .mrd-button-focus{background-color:var(--active-color)}.mrd-button-container .mrd-button-focus{position:absolute;inset:0;border-radius:var(--border-radius)}.mrd-button-container .mrd-button-background{position:absolute;inset:0;border-radius:var(--border-radius);background-color:var(--bg-color)}.mrd-button-container.mrd-raised-button:not(.disabled){--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-raised-button:not(.disabled):active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-icon-button,.mrd-button-container.mrd-fab-button,.mrd-button-container.mrd-mini-fab-button{min-width:var(--diameter)!important;height:var(--diameter);padding:0}.mrd-button-container.mrd-icon-button .mrd-button-background,.mrd-button-container.mrd-fab-button .mrd-button-background,.mrd-button-container.mrd-mini-fab-button .mrd-button-background{min-height:unset;width:var(--diameter);height:var(--diameter)}.mrd-button-container.mrd-icon-button ::ng-deep [mrd-icon],.mrd-button-container.mrd-icon-button ::ng-deep mrd-icon,.mrd-button-container.mrd-fab-button ::ng-deep [mrd-icon],.mrd-button-container.mrd-fab-button ::ng-deep mrd-icon,.mrd-button-container.mrd-mini-fab-button ::ng-deep [mrd-icon],.mrd-button-container.mrd-mini-fab-button ::ng-deep mrd-icon{margin:0!important;font-size:calc(var(--diameter) / 2)}.mrd-button-container.mrd-icon-button .mrd-button-icon-content.full-icon ::ng-deep [mrd-icon],.mrd-button-container.mrd-icon-button .mrd-button-icon-content.full-icon ::ng-deep mrd-icon,.mrd-button-container.mrd-fab-button .mrd-button-icon-content.full-icon ::ng-deep [mrd-icon],.mrd-button-container.mrd-fab-button .mrd-button-icon-content.full-icon ::ng-deep mrd-icon,.mrd-button-container.mrd-mini-fab-button .mrd-button-icon-content.full-icon ::ng-deep [mrd-icon],.mrd-button-container.mrd-mini-fab-button .mrd-button-icon-content.full-icon ::ng-deep mrd-icon{font-size:var(--diameter)}.mrd-button-container.mrd-mini-fab-button:not(.disabled) .mrd-button-background,.mrd-button-container.mrd-fab-button:not(.disabled) .mrd-button-background{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-mini-fab-button:not(.disabled) .mrd-button-background:active,.mrd-button-container.mrd-fab-button:not(.disabled) .mrd-button-background:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-toggle-button{padding:0 44px;transition:color .2s}.mrd-button-container.mrd-toggle-button.mrd-toggle-selected{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040;transform:scale(1.15);z-index:10}.mrd-button-container.mrd-toggle-button:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040;z-index:5}.mrd-button-container.mrd-toggle-button:hover{z-index:5}.mrd-button-container.mrd-toggle-button .mrd-button-background{transition:background-color .2s}.mrd-button-container.mrd-toggle-button:not(.mrd-toggle-selected) .mrd-button-background{background-color:var(--unselected-color)}.mrd-button-container ::ng-deep [mrd-icon],.mrd-button-container ::ng-deep mrd-icon{font-size:1.5em;margin-right:4px;margin-top:2px;width:var(--icon-size);height:var(--icon-size);min-width:1em}.mrd-button-container ::ng-deep [mrd-icon][icon-end],.mrd-button-container ::ng-deep mrd-icon[icon-end]{margin-right:0;margin-left:4px}.mrd-button-progress-bar{position:absolute;bottom:10%;left:5px;right:5px;height:10%;min-height:10%}.mrd-button-progress-spinner{position:absolute;top:3px;left:3px;width:calc(100% - 6px)!important;height:calc(100% - 6px)!important}\n"] }]
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
        }], value: [{
            type: Input
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWJ1dHRvbi9jb21wb25lbnRzL21yZC1idXR0b24vbXJkLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWJ1dHRvbi9jb21wb25lbnRzL21yZC1idXR0b24vbXJkLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsc0JBQXNCLEVBQW1CLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6RSxPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsWUFBWSxFQUFnQixLQUFLLEVBQXFCLE1BQU0sRUFBVyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDck4sT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWpFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNuRSxPQUFPLEtBQUssQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUVoQyxPQUFPLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOzs7Ozs7Ozs7SUNpQzdFLHVDQUV5STs7O0lBQXZJLDRGQUFnQyxrRUFBQSwrQkFBQTs7O0lBRWxDLDJDQUU2STs7O0lBQTNJLDRGQUFnQyxrRUFBQSwrQkFBQTs7Ozs7Ozs7QUR0Q3BDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBYUgsTUFBTSxPQUFPLGtCQUFtQixTQUFRLHNCQUFzQjtJQXVWaEQ7SUFDSDtJQXRW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TyxDQUFDLE1BQU0sQ0FBQyxNQUFpQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNySztRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDaEksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3pJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxVQUFVLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUNuSixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUMzRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUMzRyxJQUFJLENBQUMsWUFBWSxH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QWEsQ0FBQTtJQUNiLHdDQUFpQixDQUFBO0lBQ2pCLDBDQUFtQixDQUFBO0lBQ25CLG9DQUFhLENBQUE7SUFDYixrQ0FBVyxDQUFBO0lBQ1gsMkNBQW9CLENBQUE7SUFDcEIsd0NBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQVRJLG1CQUFtQixLQUFuQixtQkFBbUIsUUFTdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNcmRCb3JkZXIgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbC9jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgeyBCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0LCBPYnNlcnZhYmxlVmFsdWUsIFV0aWwgfSBmcm9tICdtcmQtY29yZSc7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsUmVuZGVyZXIyLFZpZXdDaGlsZCwgYm9vbGVhbkF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2xvclV0aWwgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbG9yLnV0aWwnO1xyXG5pbXBvcnQgeyBNcmRDb25maWdNb2RlbCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL21vZGVsL2NvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IENvbmZpZ1V0aWwgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuaW1wb3J0IHsgTXJkQmFzZUNvbG9yVGhlbWUgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbC9jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgeyBjb2xvckF0dHJpYnV0ZSwgY29sb3JUaGVtZUF0dHJpYnV0ZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvY29sb3ItdHJhbnNmb3JtJztcclxuaW1wb3J0IHsgc2l6ZUF0dHJpYnV0ZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvc2l6ZS10cmFuc2Zvcm0nO1xyXG4vKipcclxuICogRGllc2VzIEtvbXBvbmVudGUgc3RlbGx0IGRlbiBNcmQtQnV0dG9uIHp1ciBWZXJmw7xndW5nLlxyXG4gKlxyXG4gKiBEZXIgQnV0dG9uIGthbm4gbWl0dGVscyBkZXIgZW50c3ByZWNoZW5kZW4gQXR0cmlidXRlIGluIGZvbGdlbmRlbiBTdGlsZW4gZGFyZ2VzdGVsbHQgd2VyZGVuOlxyXG4gKiAtIFN0YW5kYXJkLUJ1dHRvbiAoZGVmYXVsdClcclxuICogLSBJY29uLUJ1dHRvbiAoQXR0cmlidXRuYW1lOiBpY29uLWJ1dHRvbilcclxuICogLSBSYWlzZWQtQnV0dG9uIChBdHRyaWJ1dG5hbWU6IHJhaXNlZC1idXR0b24pXHJcbiAqIC0gT3V0bGluZS1CdXR0b24gKEF0dHJpYnV0bmFtZTogb3V0bGluZS1idXR0b24pXHJcbiAqIC0gRmxhdC1CdXR0b24gKEF0dHJpYnV0bmFtZTogZmxhdC1idXR0b24pXHJcbiAqIC0gRmFiLUJ1dHRvbiAoQXR0cmlidXRuYW1lOiBmYWItYnV0dG9uKVxyXG4gKiAtIE1pbmlGYWItQnV0dG9uIChBdHRyaWJ1dG5hbWU6IG1pbmlGYWItYnV0dG9uKVxyXG4gKlxyXG4gKiBXZWl0ZXJoaW4ga8O2bm5lbiBkaWUgc3RhbmRhcmQgVGhlbWVzIChwcmltYXJ5LCBhY2NlbnQsIHdhcm4pIGbDvHIgZGllIEhpbnRlcmdydW5kLSBiencuIFRleHRmYXJiZSBmZXN0Z2VsZWd0IHdlcmRlbiAoamUgbmFjaCBTdHlsZSkuXHJcbiAqXHJcbiAqIEbDvHIgd2VpdGVyZSBBbnBhc3N1bmdlbiBzaWVoZSBkaWUgSW5mb3JtYXRpb25lbiBkZXIgZWluemVsbmVuIEF0dHJpYnV0ZSBvZGVyIGRpZSBEb2t1bWVudGF0aW9uLlxyXG4gKlxyXG4gKiBAY2xhc3MgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAqIEBleHRlbmRzIHtCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0fVxyXG4gKiBAaW1wbGVtZW50cyB7QWZ0ZXJWaWV3SW5pdH1cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLWJ1dHRvbicsXHJcbiAgaG9zdDoge1xyXG4gICAnW3N0eWxlLm1pbi13aWR0aF0nOiAnZml0Q29udGVudCA/IFwiZml0LWNvbnRlbnRcIiA6IFwidW5zZXRcIicsXHJcbiAgICdbc3R5bGUubWFyZ2luXSc6ICd0b2dnbGUgPyBcIjAgLTE2cHhcIiA6IFwidW5zZXRcIicsXHJcbiAgICdbc3R5bGUudHJhbnNpdGlvbl0nOiAndG9nZ2xlID8gXCJ0cmFuc2Zvcm0gMC4yc1wiIDogXCJ1bnNldFwiJyxcclxuICAgJ1tjbGFzcy5hY3RpdmVdJzogJ3RvZ2dsZSAmJiB0b2dnbGVTZWxlY3RlZCdcclxuICB9LFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZEJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIEJhc2VQdXNoU3RyYXRlZ3lPYmplY3QgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZmVyZW56IGF1ZiBkYXMgVGV4dC1FbGVtZW50IGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+fVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBAVmlld0NoaWxkKCdtcmRCdXR0b25UZXh0Q29udGVudCcsIHtzdGF0aWM6IHRydWV9KSBtcmRCdXR0b25UZXh0Q29udGVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZWluIEljb24tQnV0dG9uIGlzdC5cclxuICAgKlxyXG4gICAqIERlciBDb250ZW50IGRlcyBCdXR0b25zIHNvbGx0ZSBudXIgZWluIEljb24gc2Vpbi5cclxuICAgKiBEZXIgQnV0dG9uIGhhdCBzdGFuZGFyZG3DpMOfaWcgZWluZW4gdHJhbnNwYXJlbnRlbiBIaW50ZXJncnVuZCB1bmQgZGllIEZhcmJlIGRlcyBJY29ucyBpc3Qgc2Nod2Fyei5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnaWNvbi1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBpY29uOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZWluIFJhaXNlZC1CdXR0b24gaXN0LlxyXG4gICAqXHJcbiAgICogUmFpc2VkLUJ1dHRvbnMgaGFiZW4gZWluZW4gU2NoYXR0ZW4uXHJcbiAgICogRGVyIEJ1dHRvbiBoYXQgc3RhbmRhcmRtw6TDn2lnIGVpbmVuIHdlacOfZW4gSGludGVyZ3J1bmQgdW5kIGRpZSBUZXh0ZmFyYmUgc2Nod2Fyei5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAncmFpc2VkLWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHJhaXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZWluIE91dGxpbmUtQnV0dG9uIGlzdC5cclxuICAgKlxyXG4gICAqIE91dGxpbmUtQnV0dG9ucyBoYWJlbiBzdGFuZGFyZG3DpMOfaWcgZWluZW4gdHJhbnNwYXJlbnRlbiBIaW50ZXJncnVuZCB1bmQgZWluZW4gZ3JhdWVuIFJhbmQsIHNvd2llIGVpbmVuIHNjaHdhcnplbiBUZXh0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdvdXRsaW5lLWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIG91dGxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGVpbiBGbGF0LUJ1dHRvbiBpc3QuXHJcbiAgICpcclxuICAgKiBGbGF0LUJ1dHRvbnMgaGFiZW4gc3RhbmRhcmRtw6TDn2lnIGVpbmVuIHdlacOfZW4gSGludGVyZ3J1bmQgdW5kIGRpZSBUZXh0ZmFyYmUgaXN0IHNjaHdhcnouXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ2ZsYXQtYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgZmxhdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZWluIEZhYi1CdXR0b24gaXN0LlxyXG4gICAqXHJcbiAgICogRmFiLUJ1dHRvbnMgc2luZCBrcmVpc2bDtnJtaWdlIEJ1dHRvbnMuXHJcbiAgICogU3RhbmRhcmRtw6TDn2lnIGhhYmVuIHNpZSBlaW5lbiB3ZWnDn2VuIEhpbnRlcmdydW5kIHVuZCBkaWUgSWNvbmZhcmJlIGlzdCBzY2h3YXJ6LCBhdcOfZXJkZW0gYmVzaXR6ZW4gc2llIGVpbmVuIFNjaGF0dGVuLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdmYWItYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgZmFiOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBlaW4gTWluaUZhYi1CdXR0b24gaXN0LlxyXG4gICAqXHJcbiAgICogTWluaUZhYi1CdXR0b25zIHNpbmQga3JlaXNmw7ZybWlnZSBCdXR0b25zIHZvbiBkZXIgR3LDtsOfZSBlaW5lcyBJY29uLUJ1dHRvbnMuXHJcbiAgICogU3RhbmRhcmRtw6TDn2lnIGhhYmVuIHNpZSBlaW5lbiB3ZWnDn2VuIEhpbnRlcmdydW5kIHVuZCBkaWUgSWNvbmZhcmJlIGlzdCBzY2h3YXJ6LCBhdcOfZXJkZW0gYmVzaXR6ZW4gc2llIGVpbmVuIFNjaGF0dGVuLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdtaW5pRmFiLWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIG1pbmlGYWI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHthbGlhczogJ3RvZ2dsZS1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSB0b2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHthbGlhczogJ3NlbGVjdGVkJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgdG9nZ2xlU2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBkYXMgVGhlbWUgXCJwcmltYXJ5XCIgaGF0LlxyXG4gICAqXHJcbiAgICogSGllcmR1cmNoIHdpcmQgZGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIEJ1dHRvbnMgYXVmIGRpZSBwcmltw6RyZSBGYXJiZSBkZXMgVGhlbWVzIGdlc2V0enQuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcHJpbWFyeTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGRhcyBUaGVtZSBcImFjY2VudFwiIGhhdC5cclxuICAgKlxyXG4gICAqIEhpZXJkdXJjaCB3aXJkIGRpZSBIaW50ZXJncnVuZGZhcmJlIGRlcyBCdXR0b25zIGF1ZiBkaWUgQWt6ZW50ZmFyYmUgZGVzIFRoZW1lcyBnZXNldHp0LlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGFjY2VudDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGRhcyBUaGVtZSBcIndhcm5cIiBoYXQuXHJcbiAgICpcclxuICAgKiBIaWVyZHVyY2ggd2lyZCBkaWUgSGludGVyZ3J1bmRmYXJiZSBkZXMgQnV0dG9ucyBhdWYgZGllIFdhcm5mYXJiZSBkZXMgVGhlbWVzIGdlc2V0enQuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgd2FybjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGRlYWt0aXZpZXJ0IGlzdC5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBFaW5lIE9ic2VydmFibGVWYWx1ZSwgZGllIMO8YmVyZ2ViZW4gd2VyZGVuIGthbm4sIHVtIHp1IGJlc3RpbW1lbixcclxuICAgKiBvYiBkZXIgQnV0dG9uIGVpbmVuIExhZGViYWxrZW4vTGFkZXNwaW5uZXIgYW56ZWlnZW4gc29sbC5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbG9hZGluZzogT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+O1xyXG4gIC8qKlxyXG4gICAqIEVpbiBib29sZWFuLCBkZXIgYmVzdGltbXQsIG9iIGRlciBCdXR0b24gZWluZW4gTGFkZWJhbGtlbi9MYWRlc3Bpbm5lciBhbnplaWdlbiBzb2xsLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEVpbmUgT2JzZXJ2YWJsZVZhbHVlLCBkaWUgw7xiZXJnZWJlbiB3ZXJkZW4ga2FubiwgdW0gZGVuIEZvcnRzY2hyaXR0IGRlcyBMYWRlYmFsa2Vucy9MYWRlc3Bpbm5lcnMgenUgYmVzdGltbWVuLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09ic2VydmFibGVWYWx1ZTxudW1iZXI+fVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbG9hZGluZ1Byb2dyZXNzOiBPYnNlcnZhYmxlVmFsdWU8bnVtYmVyPjtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0enQgZGllIEdydW5kZmFyYmUgZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBEaWVzZSB3aXJkIGplIG5hY2ggU3R5bGUgZGVzIEJ1dHRvbnMgYWxzIEhpbnRlcmdydW5kZmFyYmUgb2RlciBUZXh0ZmFyYmUgdmVyd2VuZGV0LlxyXG4gICAqXHJcbiAgICogRXMga8O2bm5lbiBIZXgtLCBSR0ItIG9kZXIgUkdCQS1XZXJ0ZSwgc293aWUgXCJwcmltYXJ5XCIsIFwiYWNjZW50XCIgb2RlciBcIndhcm5cIiBhbmdlZ2ViZW4gd2VyZGVuLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdjb2xvcicsIHRyYW5zZm9ybTogY29sb3JUaGVtZUF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21UZXh0Q29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0enQgZGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBFcyBrw7ZubmVuIEhleC0sIFJHQi0gb2RlciBSR0JBLVdlcnRlIGFuZ2VnZWJlbiB3ZXJkZW4uXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ2JhY2tncm91bmRDb2xvcicsIHRyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tQmdDb2xvcjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkaWUgYmVudXR6ZXJkZWZpbmllcnRlIFRleHRmYXJiZSBuaWNodCBkdXJjaCBlaW4gZGVmbmllcnRlcyBUaGVtYSDDvGJlcnNjaHJpZWJlbiB3ZXJkZW4gc29sbC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBrZWVwQ3VzdG9tVGV4dENvbG9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGllIGJlbnV0emVyZGVmaW5pZXJ0ZSBIaW50ZXJncnVuZGZhcmJlIG5pY2h0IGR1cmNoIGVpbiBkZWZpbmllcnRlcyBUaGVtYSDDvGJlcnNjaHJpZWJlbiB3ZXJkZW4gc29sbC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBrZWVwQ3VzdG9tQmdDb2xvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21Ub2dnbGVVbnNlbGVjdGVkVGV4dENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21Ub2dnbGVTZWxlY3RlZFRleHRDb2xvcjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBTZXR6dCBkaWUgRmFyYmUgZGVzIExhZGViYWxrZW5zL0xhZGVzcGlubmVycy5cclxuICAgKlxyXG4gICAqIEVzIGvDtm5uZW4gSGV4LSwgUkdCLSBvZGVyIFJHQkEtV2VydGUgYW5nZWdlYmVuIHdlcmRlbi5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgcHJvZ3Jlc3NDb2xvcjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uLVRleHQgdmVyc2Nod2luZGV0LCB3ZW5uIGVyIHp1IGxhbmcgaXN0IHVuZCBhdXNnZXB1bmt0ZXQgd2VyZGVuIHfDvHJkZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBjb2xsYXBzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIHp1IHdlbGNoZW0gU3R5bGUgZGVyIEJ1dHRvbiBrb2xsYWJpZXJlbiBzb2xsLlxyXG4gICAqIE3DtmdsaWNoZSBXZXJ0ZTogXCJpY29uXCIsIFwiZmFiXCIsIFwibWluaUZhYlwiXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIHNldCBjb2xsYXBzZVRvKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLl9jb2xsYXBzZVRvID09PSB2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUgPT09IE1yZEJ1dHRvbkFwcGVhcmFuY2UuSUNPTiB8fCB2YWx1ZSA9PT0gTXJkQnV0dG9uQXBwZWFyYW5jZS5GQUIgfHwgdmFsdWUgPT09IE1yZEJ1dHRvbkFwcGVhcmFuY2UuTUlOSV9GQUIpIHtcclxuICAgICAgdGhpcy5fY29sbGFwc2VUbyA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmNvbGxhcHNlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ0RhcyBBdHRyaWJ1dCBjb2xsYXBzZVRvIGthbm4gbnVyIFwiaWNvblwiLCBcImZhYlwiIG9kZXIgXCJtaW5pRmFiXCIgc2Vpbi4nKTtcclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIGdldCBjb2xsYXBzZVRvKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29sbGFwc2VUbztcclxuICB9XHJcbiAgcHJpdmF0ZSBfY29sbGFwc2VUbzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBTb3JndCBkYWbDvHIsIGRhc3MgZGVyIEJ1dHRvbiBpbW1lciBtaW5kZXN0ZW5zIHNvIGJyZWl0IGlzdCwgd2llIHNlaW4gSW5oYWx0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdmaXQtY29udGVudCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBmaXRDb250ZW50OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZWluZW4gVG9vbHRpcCBhbnplaWdlbiBzb2xsLlxyXG4gICAqXHJcbiAgICogRGVyIFRvb2x0aXAtVGV4dCB3aXJkIHN0YW5kYXJkbcOkw59pZyBhdXMgZGVtIEluaGFsdCBkZXMgQnV0dG9ucyBvaG5lIGR1cmNoIFttcmQtaWNvbl0gZ2VrZW5uemVpY2huZXRlIEljb25zIGdlbmVyaWVydC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAndG9vbHRpcCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzaG93VG9vbHRpcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIERlciBUZXh0IGRlcyBUb29sdGlwcy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0b29sdGlwVGV4dDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBUb29sdGlwIG51ciBhbmdlemVpZ3Qgd2VyZGVuIHNvbGwsIHdlbm4gZGVyIEJ1dHRvbi1UZXh0IGF1c2dlcHVua3RldCB3aXJkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNldCB0b29sdGlwSWZUcnVuY2F0ZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuc2hvd1Rvb2x0aXAgPSB2YWx1ZSB8fCB0aGlzLnNob3dUb29sdGlwO1xyXG4gICAgdGhpcy5fdG9vbHRpcElmVHJ1bmNhdGVkID0gdmFsdWU7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgdG9vbHRpcElmVHJ1bmNhdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXBJZlRydW5jYXRlZDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfdG9vbHRpcElmVHJ1bmNhdGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIERpZSBNaW5kZXN0aMO2aGUgZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBXaXJkIGVpbmUgWmFobCBhbmdlZ2ViZW4sIHdpcmQgZGllc2UgYWxzIFBpeGVsd2VydCBpbnRlcnByZXRpZXJ0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZyB8IG51bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgbWluSGVpZ2h0OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogRGllIFNjaHJpZnRncsO2w59lIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogV2lyZCBlaW5lIFphaGwgYW5nZWdlYmVuLCB3aXJkIGRpZXNlIGFscyBQaXhlbHdlcnQgaW50ZXJwcmV0aWVydC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIGZvbnRTaXplOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBmb250RmFtaWx5OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogRGVyIER1cmNobWVzc2VyIGbDvHIgSWNvbi0sIEZhYi0gdW5kIE1pbmlGYWItQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIFdpcmQgZWluZSBaYWhsIGFuZ2VnZWJlbiwgd2lyZCBkaWVzZSBhbHMgUGl4ZWx3ZXJ0IGludGVycHJldGllcnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBkaWFtZXRlcjogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIERpZSBHcsO2w59lIGRlcyBJY29ucy5cclxuICAgKlxyXG4gICAqIFdpcmQgZWluZSBaYWhsIGFuZ2VnZWJlbiwgd2lyZCBkaWVzZSBhbHMgUGl4ZWx3ZXJ0IGludGVycHJldGllcnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBpY29uU2l6ZTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBmdWxsSWNvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIERlciBSYWRpdXMgZGVyIEVja2VuIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogV2lyZCBlaW5lIFphaGwgYW5nZWdlYmVuLCB3aXJkIGRpZXNlIGFscyBQaXhlbHdlcnQgaW50ZXJwcmV0aWVydC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIGJvcmRlclJhZGl1czogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgdmFsdWU6IGFueTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGFzIEtsaWNrLUV2ZW50IGR1cmNoIGRlbiBOdXR6ZXIuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPEV2ZW50Pn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBjbGljazogRXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcblxyXG5cclxuICAvKipcclxuICAgKiBEaWUgS29uZmlndXJhdGlvbiBkZXMgTXJkLUJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEB0eXBlIHtNcmRDb25maWdNb2RlbH1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfY29uZmlnOiBNcmRDb25maWdNb2RlbCA9IENvbmZpZ1V0aWwuZ2V0Q29uZmlnKCk7XHJcblxyXG4gIHB1YmxpYyBpc0NvbGxhcHNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdW5jb2xsYXBzZWRBcHBlYXJhbmNlOiBNcmRCdXR0b25BcHBlYXJhbmNlO1xyXG5cclxuICBwcml2YXRlIGJ1dHRvblByaW1hcnk6IHN0cmluZyB8IE1yZEJhc2VDb2xvclRoZW1lO1xyXG4gIHByaXZhdGUgYnV0dG9uQWNjZW50OiBzdHJpbmcgfCBNcmRCYXNlQ29sb3JUaGVtZTtcclxuICBwcml2YXRlIGJ1dHRvbldhcm46IHN0cmluZyB8IE1yZEJhc2VDb2xvclRoZW1lO1xyXG4gIHByaXZhdGUgYnV0dG9uRGlzYWJsZWQ6IE1yZEJhc2VDb2xvclRoZW1lO1xyXG4gIHByaXZhdGUgYnV0dG9uUHJvZ3Jlc3M6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGJnQ29sb3I6IHN0cmluZztcclxuICBwcml2YXRlIHRleHRMaWdodENvbG9yOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSB0ZXh0RGFya0NvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIHRleHRDb2xvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBob3ZlckNvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIGFjdGl2ZUNvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIGRpc2FibGVkVGV4dENvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIGRpc2FibGVkQmdDb2xvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyB0b2dnbGVVbnNlbGVjdGVkQ29sb3I6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGJvcmRlcldpZHRoOiBzdHJpbmc7XHJcbiAgcHVibGljIGJvcmRlclN0eWxlOiBzdHJpbmc7XHJcbiAgcHVibGljIGJvcmRlckNvbG9yOiBzdHJpbmc7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+XHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBIaWVyIHNvcmdlbiB3aXIgZGFmw7xyLCBkYXNzIGRlciBTdGFuZGFyZCBDbGljay1IYW5kbGVyIHZvbiBBbmd1bGFyIGVudGZlcm50IHdpcmRcclxuICAgIGNvbnN0IGhvc3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGhvc3QucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XHJcblxyXG4gICAgY29uc3QgbmV3SG9zdDogSFRNTEVsZW1lbnQgPSBob3N0LmNsb25lTm9kZSgpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgbmV3SG9zdC5hcHBlbmRDaGlsZChidXR0b24pXHJcblxyXG4gICAgQXJyYXkuZnJvbShob3N0LmF0dHJpYnV0ZXMpLmZvckVhY2goYXR0ciA9PiBuZXdIb3N0LnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpKTtcclxuICAgIGhvc3QucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3SG9zdCwgaG9zdCk7XHJcbiAgICBuZXdIb3N0LnN0eWxlLm1pbldpZHRoID0gdGhpcy5maXRDb250ZW50ID8gJ2ZpdC1jb250ZW50JyA6ICd1bnNldCc7XHJcbiAgICBuZXdIb3N0LnN0eWxlLm1hcmdpbiA9IHRoaXMudG9nZ2xlID8gJzAgLTE2cHgnIDogJ3Vuc2V0JztcclxuICAgIG5ld0hvc3Quc3R5bGUudHJhbnNpdGlvbiA9IHRoaXMudG9nZ2xlID8gJ3RyYW5zZm9ybSAwLjJzJyA6ICd1bnNldCc7XHJcbiAgICBpZiAodGhpcy50b2dnbGUgJiYgdGhpcy50b2dnbGVTZWxlY3RlZCkge1xyXG4gICAgICBuZXdIb3N0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgbmV3SG9zdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMub25DbGljayhldmVudCkpO1xyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgPSBuZXdIb3N0O1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMubG9hZGluZykpIHtcclxuICAgICAgdGhpcy5tYXJrRm9yQ2hlY2tJZih0aGlzLmxvYWRpbmcuY2hhbmdlZClcclxuICAgIH1cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmxvYWRpbmdQcm9ncmVzcykpIHtcclxuICAgICAgdGhpcy5tYXJrRm9yQ2hlY2tJZih0aGlzLmxvYWRpbmdQcm9ncmVzcy5jaGFuZ2VkKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5pdEJhc2VTdHlsZSgpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU3R5bGUoKTtcclxuXHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vbkNsaWNrKGV2ZW50KSk7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVTdHlsZSgpOiB2b2lkIHtcclxuICAgIGxldCB0aGVtZXNDb3VudCA9IFt0aGlzLnByaW1hcnksIHRoaXMuYWNjZW50LCB0aGlzLndhcm5dLmZpbHRlcigodmFsdWUpID0+IHZhbHVlKS5sZW5ndGg7XHJcbiAgICBpZiAodGhlbWVzQ291bnQgPiAxKSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdFaW4gTXJkQnV0dG9uIGthbm4gbnVyIGVpbiBUaGVtYSBoYWJlbi4gU2V0emUgXCJwcmltYXJ5XCIsIFwiYWNjZW50XCIgb2RlciBcIndhcm5cIiBhbHMgVGhlbWEuJyk7XHJcbiAgICB9XHJcbiAgICBsZXQgYXBwZWFyYW5jZUNvdW50ID0gW3RoaXMuaWNvbiwgdGhpcy5yYWlzZWQsIHRoaXMub3V0bGluZSwgdGhpcy5mbGF0LCB0aGlzLmZhYiwgdGhpcy5taW5pRmFiLCB0aGlzLnRvZ2dsZV0uZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUpLmxlbmd0aDtcclxuICAgIGlmIChhcHBlYXJhbmNlQ291bnQgPiAxKSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdFaW4gTXJkQnV0dG9uIGthbm4gbnVyIGVpbmVuIFN0eWxlIGhhYmVuLiBTZXR6ZSBcImljb24tYnV0dG9uXCIsIFwicmFpc2VkLWJ1dHRvblwiLCBcIm91dGxpbmUtYnV0dG9uXCIsIFwiZmxhdC1idXR0b25cIiwgXCJmYWItYnV0dG9uXCIsIFwibWluaUZhYi1idXR0b25cIiBvZGVyIGtlaW5lbiBTdHlsZS4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGYWxscyBpcmdlbmRlaW5lIEZhcmJlL1RoZW1hIGdlc2V0enQgaXN0LCB3aXJkIGRpZSBIaW50ZXJncnVuZC0gdW5kIFRleHRmYXJiZSBkZXMgQnV0dG9ucyBhbmhhbmQgZGllc2VyIHVuZCBkZXMgU3R5bGVzIGdlc2V0enQuXHJcbiAgICBpZiAodGhpcy5wcmltYXJ5IHx8IHRoaXMuYWNjZW50IHx8IHRoaXMud2FybiB8fCB0aGlzLmN1c3RvbUJnQ29sb3IgfHwgdGhpcy5jdXN0b21UZXh0Q29sb3IpIHtcclxuICAgICAgLy8gV2VubiAna2VlcEN1c3RvbUJnQ29sb3InIGdlc2V0enQgaXN0LCBkYW5uIHdpcmQgJ2N1c3RvbUJnQ29sb3InIGFscyAnYmFzZUNvbG9yJyB2ZXJ3ZW5kZXRcclxuICAgICAgbGV0IGJhc2VDb2xvcjogc3RyaW5nID0gdGhpcy5rZWVwQ3VzdG9tQmdDb2xvciAmJiAhIXRoaXMuY3VzdG9tQmdDb2xvciA/IHRoaXMuY3VzdG9tQmdDb2xvciA6XHJcbiAgICAgICAgLy8gU29uc3Qgd2VubiBlaW4gVGhlbWUgZ2VzZXR6dCBpc3QsIHdpcmQgZGllIGVudHNwcmVjaGVuZGUgRmFyYmUgZGVzIFRoZW1lcyB2ZXJ3ZW5kZXRcclxuICAgICAgICB0aGlzLnByaW1hcnkgPyBfLmlzT2JqZWN0KHRoaXMuYnV0dG9uUHJpbWFyeSkgPyAodGhpcy5idXR0b25QcmltYXJ5IGFzIE1yZEJhc2VDb2xvclRoZW1lKS5iYWNrZ3JvdW5kIDogdGhpcy5idXR0b25QcmltYXJ5IGFzIHN0cmluZyA6XHJcbiAgICAgICAgdGhpcy5hY2NlbnQgPyBfLmlzT2JqZWN0KHRoaXMuYnV0dG9uQWNjZW50KSA/ICh0aGlzLmJ1dHRvbkFjY2VudCBhcyBNcmRCYXNlQ29sb3JUaGVtZSkuYmFja2dyb3VuZCA6IHRoaXMuYnV0dG9uQWNjZW50IGFzIHN0cmluZyA6XHJcbiAgICAgICAgdGhpcy53YXJuID8gXy5pc09iamVjdCh0aGlzLmJ1dHRvbldhcm4pID8gKHRoaXMuYnV0dG9uV2FybiBhcyBNcmRCYXNlQ29sb3JUaGVtZSkuYmFja2dyb3VuZCA6IHRoaXMuYnV0dG9uV2FybiBhcyBzdHJpbmcgOlxyXG4gICAgICAgIC8vIFNvbnN0IHdlbm4gJ2N1c3RvbUJnQ29sb3InIGdlc2V0enQgaXN0LCB3aXJkICdjdXN0b21CZ0NvbG9yJyB2ZXJ3ZW5kZXQsIHNvbnN0ICdjdXN0b21UZXh0Q29sb3InXHJcbiAgICAgICAgISF0aGlzLmN1c3RvbUJnQ29sb3IgPyB0aGlzLmN1c3RvbUJnQ29sb3IgOiB0aGlzLmN1c3RvbVRleHRDb2xvcjtcclxuXHJcbiAgICAgIC8vIFdlbm4gJ2tlZXBDdXN0b21UZXh0Q29sb3InIGdlc2V0enQgaXN0LCBkYW5uIHdpcmQgJ2N1c3RvbVRleHRDb2xvcicgYWxzICdiYXNlVGV4dENvbG9yJyB2ZXJ3ZW5kZXRcclxuICAgICAgbGV0IGJhc2VUZXh0Q29sb3IgPSB0aGlzLmtlZXBDdXN0b21UZXh0Q29sb3IgJiYgISF0aGlzLmN1c3RvbVRleHRDb2xvciA/IHRoaXMuY3VzdG9tVGV4dENvbG9yIDpcclxuICAgICAgICAvLyBTb25zdCB3ZW5uIGVpbiBUaGVtZSBnZXNldHp0IGlzdCwgd2lyZCBkaWUgZW50c3ByZWNoZW5kZSBGYXJiZSBkZXMgVGhlbWVzIHZlcndlbmRldFxyXG4gICAgICAgIHRoaXMucHJpbWFyeSA/IF8uaXNPYmplY3QodGhpcy5idXR0b25QcmltYXJ5KSA/ICh0aGlzLmJ1dHRvblByaW1hcnkgYXMgTXJkQmFzZUNvbG9yVGhlbWUpLnRleHQgOiB0aGlzLmJ1dHRvblByaW1hcnkgYXMgc3RyaW5nIDpcclxuICAgICAgICB0aGlzLmFjY2VudCA/IF8uaXNPYmplY3QodGhpcy5idXR0b25BY2NlbnQpID8gKHRoaXMuYnV0dG9uQWNjZW50IGFzIE1yZEJhc2VDb2xvclRoZW1lKS50ZXh0IDogdGhpcy5idXR0b25BY2NlbnQgYXMgc3RyaW5nIDpcclxuICAgICAgICB0aGlzLndhcm4gPyBfLmlzT2JqZWN0KHRoaXMuYnV0dG9uV2FybikgPyAodGhpcy5idXR0b25XYXJuIGFzIE1yZEJhc2VDb2xvclRoZW1lKS50ZXh0IDogdGhpcy5idXR0b25XYXJuIGFzIHN0cmluZyA6XHJcbiAgICAgICAgLy8gU29uc3Qgd2VubiAnY3VzdG9tVGV4dENvbG9yJyBnZXNldHp0IGlzdCwgd2lyZCAnY3VzdG9tVGV4dENvbG9yJyB2ZXJ3ZW5kZXQsIHNvbnN0ICd0ZXh0RGFya0NvbG9yJ1xyXG4gICAgICAgICEhdGhpcy5jdXN0b21UZXh0Q29sb3IgPyB0aGlzLmN1c3RvbVRleHRDb2xvciA6IHRoaXMudGV4dERhcmtDb2xvcjtcclxuXHJcbiAgICAgIC8vICdiZ0NvbG9yJyB3aXJkIGF1ZiAnYmFzZUNvbG9yJyBnZXNldHp0XHJcbiAgICAgIHRoaXMuYmdDb2xvciA9IGJhc2VDb2xvcjtcclxuICAgICAgLy8gV2VubiAna2VlcEN1c3RvbVRleHRDb2xvcicgb2RlciBrZWluIFRoZW1hIHVuZCAnY3VzdG9tQmdDb2xvcicsIHVuZCAnY3VzdG9tVGV4dENvbG9yJyBnZXNldHp0IHNpbmQsIHdpcmQgJ3RleHRDb2xvcicgYXVmICdjdXN0b21UZXh0Q29sb3InIGdlc2V0enRcclxuICAgICAgdGhpcy50ZXh0Q29sb3IgPSAodGhpcy5rZWVwQ3VzdG9tVGV4dENvbG9yIHx8ICh0aGVtZXNDb3VudCA9PT0gMCAmJiB0aGlzLmN1c3RvbUJnQ29sb3IpKSAmJiAhIXRoaXMuY3VzdG9tVGV4dENvbG9yID8gdGhpcy5jdXN0b21UZXh0Q29sb3IgOlxyXG4gICAgICAgIC8vIFNvbnN0IHdlbm4gZWluIFRoZW1hIHVuZCAna2VlcEN1c3RvbUJnQ29sb3InIGdlc2V0enQgaXN0LCB3aXJkICdiYXNlVGV4dENvbG9yJyB2ZXJ3ZW5kZXRcclxuICAgICAgICAodGhlbWVzQ291bnQgPT09IDEgJiYgdGhpcy5rZWVwQ3VzdG9tQmdDb2xvcikgPyBiYXNlVGV4dENvbG9yIDpcclxuICAgICAgICAvLyBTb25zdCwgd2VubiBkaWUgQXBwZWFyYW5jZSBuaWNodCBUb2dnbGUgaXN0IG9kZXIgZGVyIFRvZ2dsZS1CdXR0b24gc2VsZWt0aWVydCBpc3QsXHJcbiAgICAgICAgLy8gd2lyZCBhbmhhbmQgZGVyICdiYXNlQ29sb3InIGVudHNjaGllZGVuLCBvYiAndGV4dERhcmtDb2xvcicgb2RlciAndGV4dExpZ2h0Q29sb3InIHZlcndlbmRldCB3aXJkXHJcbiAgICAgICAgdGhpcy50b2dnbGUgPyB0aGlzLnRvZ2dsZVNlbGVjdGVkICYmIHRoaXMuY3VzdG9tVG9nZ2xlU2VsZWN0ZWRUZXh0Q29sb3IgPyB0aGlzLmN1c3RvbVRvZ2dsZVNlbGVjdGVkVGV4dENvbG9yIDpcclxuICAgICAgICAgICF0aGlzLnRvZ2dsZVNlbGVjdGVkICYmIHRoaXMuY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvciA/IHRoaXMuY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvciA6XHJcbiAgICAgICAgLyohdGhpcy50b2dnbGUgfHwqLyB0aGlzLnRvZ2dsZVNlbGVjdGVkID8gQ29sb3JVdGlsLnNob3VsZFRleHRCZURhcmsoYmFzZUNvbG9yKSA/IHRoaXMudGV4dERhcmtDb2xvciA6IHRoaXMudGV4dExpZ2h0Q29sb3IgOlxyXG4gICAgICAgIENvbG9yVXRpbC5zaG91bGRUZXh0QmVEYXJrKHRoaXMudG9nZ2xlVW5zZWxlY3RlZENvbG9yKSA/IHRoaXMudGV4dERhcmtDb2xvciA6IHRoaXMudGV4dExpZ2h0Q29sb3IgOlxyXG4gICAgICAgIC8vIFdlbm4gZGllIEFwcGVhcmFuY2UgVG9nZ2xlIGlzdCB1bmQgZGVyIEJ1dHRvbiBuaWNodCBzZWxla3RpZXJ0IGlzdCB1bmQgJ2N1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRUZXh0Q29sb3InIGdlc2V0enQgaXN0LFxyXG4gICAgICAgIC8vIHdpcmQgZGllc2UgdmVyd2VuZGV0XHJcbiAgICAgICAgLy8gdGhpcy5jdXN0b21Ub2dnbGVVbnNlbGVjdGVkVGV4dENvbG9yID8gdGhpcy5jdXN0b21Ub2dnbGVVbnNlbGVjdGVkVGV4dENvbG9yIDpcclxuICAgICAgICAvLyBTb25zdCB3aXJkIGFuaGFuZCB2b24gJ3RvZ2dsZVVuc2VsZWN0ZWRDb2xvcicgZW50c2NoaWVkZW4sIG9iICd0ZXh0RGFya0NvbG9yJyBvZGVyICd0ZXh0TGlnaHRDb2xvcicgdmVyd2VuZGV0IHdpcmRcclxuICAgICAgICBDb2xvclV0aWwuc2hvdWxkVGV4dEJlRGFyayhiYXNlQ29sb3IpID8gdGhpcy50ZXh0RGFya0NvbG9yIDogdGhpcy50ZXh0TGlnaHRDb2xvcjtcclxuICAgICAgICAvLyBTb25zdCB3aXJkICd0b2dnbGVVbnNlbGVjdGVkVGV4dENvbG9yJyB2ZXJ3ZW5kZXRcclxuICAgICAgLy8gJ2hvdmVyQ29sb3InIHdpcmQgYXVmIDIwJSB0cmFuc3BhcmVudGUgVmVyc2lvbiB2b24gJ2Jhc2VDb2xvcicgZ2VzZXR6dFxyXG4gICAgICB0aGlzLmhvdmVyQ29sb3IgPSBDb2xvclV0aWwuY2hhbmdlQ29sb3JPcGFjaXR5KGJhc2VDb2xvciwgMjApO1xyXG4gICAgICAvLyAnYWN0aXZlQ29sb3InIHdpcmQgYXVmIDMwJSB0cmFuc3BhcmVudGUgVmVyc2lvbiB2b24gJ2Jhc2VDb2xvcicgbWl0IDEwJSBoZWxsZXJlciBGYXJiZSBnZXNldHp0XHJcbiAgICAgIHRoaXMuYWN0aXZlQ29sb3IgPSBDb2xvclV0aWwuY2hhbmdlQ29sb3JPcGFjaXR5KENvbG9yVXRpbC5jaGFuZ2VDb2xvckJyaWdodG5lc3NQZXJjZW50KGJhc2VDb2xvciwgMTApLCAzMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRsO8ciBkZW4gU3RhbmRhcmQtU3R5bGUsIE91dGxpbmUtU3R5bGUgdW5kIEljb24tU3R5bGVcclxuICAgIGlmIChhcHBlYXJhbmNlQ291bnQgPT09IDAgfHwgdGhpcy5vdXRsaW5lIHx8IHRoaXMuaWNvbikge1xyXG4gICAgICAvLyBXZW5uIGVpbiBUaGVtYSB1bmQgJ2tlZXBDdXN0b21CZ0NvbG9yJyBuaWNodCBnZXNldHogaXN0IE9ERVJcclxuICAgICAgLy8ga2VpbmUgJ2N1c3RvbUJnQ29sb3InLCBhYmVyICdjdXN0b21UZXh0Q29sb3InIGdlc2V0enQgc2luZC4uLlxyXG4gICAgICBpZiAoKHRoZW1lc0NvdW50ID09PSAxICYmICF0aGlzLmtlZXBDdXN0b21CZ0NvbG9yKSB8fCAoIXRoaXMuY3VzdG9tQmdDb2xvciAmJiB0aGlzLmN1c3RvbVRleHRDb2xvcikpIHtcclxuICAgICAgICAvLyAuLi4gd2lyZCAndGV4dENvbG9yJywgZmFsbHMgbmljaHQgZHVyY2ggJ2tlZXBDdXN0b21UZXh0Q29sb3InIHVuZCAnY3VzdG9tVGV4dENvbG9yJyBmZXN0LCBhdWYgJ2JnQ29sb3InIGdlc2V0enRcclxuICAgICAgICB0aGlzLnRleHRDb2xvciA9ICh0aGlzLmtlZXBDdXN0b21UZXh0Q29sb3IgJiYgISF0aGlzLmN1c3RvbVRleHRDb2xvcikgPyB0aGlzLmN1c3RvbVRleHRDb2xvciA6IHRoaXMuYmdDb2xvcjtcclxuICAgICAgICAvLyAuLi4gd2lyZCAnYmdDb2xvcicsIGZhbGxzIG5pY2h0IGR1cmNoICdrZWVwQ3VzdG9tQmdDb2xvcicgdW5kICdjdXN0b21CZ0NvbG9yJyBmZXN0LCBhdWYgZGllIFN0YW5kYXJkLUhpbnRlcmdydW5kZmFyYmUgZ2VzZXR6dFxyXG4gICAgICAgIHRoaXMuYmdDb2xvciA9ICh0aGlzLmtlZXBDdXN0b21CZ0NvbG9yICYmICEhdGhpcy5jdXN0b21CZ0NvbG9yKSA/IHRoaXMuY3VzdG9tQmdDb2xvciA6IHRoaXMuX2NvbmZpZy5idXR0b24uYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmFsbHMga2VpbmUgJ3Byb2dyZXNzQ29sb3InIGdlc2V0enQgaXN0Li4uXHJcbiAgICBpZiAoIXRoaXMucHJvZ3Jlc3NDb2xvcikge1xyXG4gICAgICAvLyAuLi4gdW5kIHdpciBlaW4gVGhlbWUgb2RlciBlaW5lIGJlbnV0emVyZGVmaW5pZXJ0ZSBUZXh0ZmFyYmUgb2RlciBIaW50ZXJncnVuZGZhcmJlIGhhYmVuLi4uXHJcbiAgICAgIGlmICh0aGVtZXNDb3VudCA9PT0gMSB8fCB0aGlzLmN1c3RvbVRleHRDb2xvciB8fCB0aGlzLmN1c3RvbUJnQ29sb3IpIHtcclxuICAgICAgICAvLyAuLi4gd2lyZCAncHJvZ3Jlc3NDb2xvcicgZsO8ciBkZW4gU3RhbmRhcmQtU3R5bGUsIE91dGxpbmUtU3R5bGUgdW5kIEljb24tU3R5bGUgYXVmICd0ZXh0Q29sb3InIGdlc2V0enQsXHJcbiAgICAgICAgLy8gYW5zb25zdGVuIGF1ZiAyMCUgaGVsbGVyZSBWZXJzaW9uIHZvbiAnYmdDb2xvcidcclxuICAgICAgICBpZiAoYXBwZWFyYW5jZUNvdW50ID09PSAwIHx8IHRoaXMub3V0bGluZSB8fCB0aGlzLmljb24pIHtcclxuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NDb2xvciA9IHRoaXMudGV4dENvbG9yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnByb2dyZXNzQ29sb3IgPSBDb2xvclV0aWwuY2hhbmdlQ29sb3JCcmlnaHRuZXNzUGVyY2VudCh0aGlzLmJnQ29sb3IsIDIwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gT2huZSBUaGVtZSB1bmQgYmVudXR6ZXJkZWZpbmllcnRlIEZhcmJlbiB3aXJkICdwcm9ncmVzc0NvbG9yJyBhdWYgZGllIEdydW5kLVByb2dyZXNzLUNvbG9yIGdlc2V0enRcclxuICAgICAgICB0aGlzLnByb2dyZXNzQ29sb3IgPSB0aGlzLmJ1dHRvblByb2dyZXNzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmFsbHMga2VpbiBleHBsaXppZXRlciAndG9vbHRpcFRleHQnIGdlc2V0enQgaXN0LCB3aXJkIGRlciBUZXh0IGRlcyBCdXR0b25zIGFscyBUb29sdGlwLVRleHQgdmVyd2VuZGV0XHJcbiAgICBpZiAodGhpcy5tcmRCdXR0b25UZXh0Q29udGVudCAmJiAhdGhpcy50b29sdGlwVGV4dCkge1xyXG4gICAgICB0aGlzLnRvb2x0aXBUZXh0ID0gdGhpcy5tcmRCdXR0b25UZXh0Q29udGVudC5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnRvZ2dsZSAmJiB0aGlzLnRvZ2dsZVNlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0enQgZGllIFN0YW5kYXJkLVN0eWxlcyBhbmhhbmQgZGVyIEtvbmZpZ3VyYXRpb24gdW5kIGRlciBnZXNldHp0ZW4gQXR0cmlidXRlLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBpbml0QmFzZVN0eWxlKCk6IHZvaWQge1xyXG4gICAgbGV0IGFwcGVhcmFuY2U6IE1yZEJ1dHRvbkFwcGVhcmFuY2UgPSB0aGlzLmljb24gPyBNcmRCdXR0b25BcHBlYXJhbmNlLklDT04gOiB0aGlzLnJhaXNlZCA/IE1yZEJ1dHRvbkFwcGVhcmFuY2UuUkFJU0VEIDpcclxuICAgICAgdGhpcy5vdXRsaW5lID8gTXJkQnV0dG9uQXBwZWFyYW5jZS5PVVRMSU5FIDogdGhpcy5mbGF0ID8gTXJkQnV0dG9uQXBwZWFyYW5jZS5GTEFUIDogdGhpcy5mYWIgPyBNcmRCdXR0b25BcHBlYXJhbmNlLkZBQiA6XHJcbiAgICAgIHRoaXMubWluaUZhYiA/IE1yZEJ1dHRvbkFwcGVhcmFuY2UuTUlOSV9GQUIgOiB0aGlzLnRvZ2dsZSA/IE1yZEJ1dHRvbkFwcGVhcmFuY2UuVE9HR0xFIDogbnVsbDsvL01yZEJ1dHRvbkFwcGVhcmFuY2UuREVGQVVMVDtcclxuICAgIHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlID0gdGhpcy51bmNvbGxhcHNlZEFwcGVhcmFuY2UgIT09IHVuZGVmaW5lZCA/IHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlIDogYXBwZWFyYW5jZTtcclxuXHJcbiAgICB0aGlzLmJ1dHRvblByaW1hcnkgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5wcmltYXJ5IHx8IHRoaXMuX2NvbmZpZy5idXR0b24ucHJpbWFyeSB8fCB0aGlzLl9jb25maWcuYmFzZUNvbG9ycy5wcmltYXJ5O1xyXG4gICAgdGhpcy5idXR0b25BY2NlbnQgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5hY2NlbnQgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5hY2NlbnQgfHwgdGhpcy5fY29uZmlnLmJhc2VDb2xvcnMuYWNjZW50O1xyXG4gICAgdGhpcy5idXR0b25XYXJuID0gdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8ud2FybiB8fCB0aGlzLl9jb25maWcuYnV0dG9uLndhcm4gfHwgdGhpcy5fY29uZmlnLmJhc2VDb2xvcnMud2FybjtcclxuICAgIHRoaXMuYnV0dG9uRGlzYWJsZWQgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5kaXNhYmxlZCB8fCB0aGlzLl9jb25maWcuYnV0dG9uLmRpc2FibGVkXHJcbiAgICB0aGlzLmJ1dHRvblByb2dyZXNzID0gdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8ucHJvZ3Jlc3NDb2xvciB8fCB0aGlzLl9jb25maWcuYnV0dG9uPy5wcm9ncmVzc0NvbG9yIHx8XHJcbiAgICAgIChfLmlzT2JqZWN0KHRoaXMuYnV0dG9uUHJpbWFyeSkgPyAodGhpcy5idXR0b25QcmltYXJ5IGFzIE1yZEJhc2VDb2xvclRoZW1lKS50ZXh0IDogdGhpcy5idXR0b25QcmltYXJ5IGFzIHN0cmluZyk7XHJcblxyXG4gICAgdGhpcy5iZ0NvbG9yID0gdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8uYmFja2dyb3VuZENvbG9yIHx8IHRoaXMuX2NvbmZpZy5idXR0b24uYmFja2dyb3VuZENvbG9yO1xyXG4gICAgdGhpcy50ZXh0TGlnaHRDb2xvciA9IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LnRleHRMaWdodENvbG9yIHx8IHRoaXMuX2NvbmZpZy5idXR0b24udGV4dExpZ2h0Q29sb3I7XHJcbiAgICB0aGlzLnRleHREYXJrQ29sb3IgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy50ZXh0RGFya0NvbG9yIHx8IHRoaXMuX2NvbmZpZy5idXR0b24udGV4dERhcmtDb2xvcjtcclxuICAgIHRoaXMudGV4dENvbG9yID0gdGhpcy50ZXh0RGFya0NvbG9yO1xyXG4gICAgdGhpcy5ob3ZlckNvbG9yID0gdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8uaG92ZXJDb2xvciB8fCB0aGlzLl9jb25maWcuYnV0dG9uLmhvdmVyQ29sb3I7XHJcbiAgICB0aGlzLmFjdGl2ZUNvbG9yID0gdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8uYWN0aXZlQ29sb3IgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5hY3RpdmVDb2xvcjtcclxuICAgIHRoaXMuZGlzYWJsZWRUZXh0Q29sb3IgPSB0aGlzLmJ1dHRvbkRpc2FibGVkLnRleHQ7XHJcbiAgICB0aGlzLmRpc2FibGVkQmdDb2xvciA9IHRoaXMuYnV0dG9uRGlzYWJsZWQuYmFja2dyb3VuZDtcclxuICAgIHRoaXMudG9nZ2xlVW5zZWxlY3RlZENvbG9yID0gdGhpcy5jdXN0b21Ub2dnbGVVbnNlbGVjdGVkQ29sb3IgfHwgdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8udW5zZWxlY3RlZEJnQ29sb3I7XHJcblxyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LmJvcmRlcikge1xyXG4gICAgICBpZiAoXy5pc09iamVjdCh0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdLmJvcmRlcikpIHtcclxuICAgICAgICB0aGlzLmJvcmRlcldpZHRoID0gKHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0uYm9yZGVyIGFzIE1yZEJvcmRlcikud2lkdGg7XHJcbiAgICAgICAgdGhpcy5ib3JkZXJTdHlsZSA9ICh0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdLmJvcmRlciBhcyBNcmRCb3JkZXIpLnN0eWxlO1xyXG4gICAgICAgIHRoaXMuYm9yZGVyQ29sb3IgPSAodGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXS5ib3JkZXIgYXMgTXJkQm9yZGVyKS5jb2xvcjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgYm9yZGVyID0gICh0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdLmJvcmRlciBhcyBzdHJpbmcpLnNwbGl0KCcgJylcclxuICAgICAgICB0aGlzLmJvcmRlcldpZHRoID0gYm9yZGVyWzBdO1xyXG4gICAgICAgIHRoaXMuYm9yZGVyU3R5bGUgPSBib3JkZXJbMV07XHJcbiAgICAgICAgdGhpcy5ib3JkZXJDb2xvciA9IGJvcmRlclsyXTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ib3JkZXJXaWR0aCA9IF8uaXNPYmplY3QodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIpID8gKHRoaXMuX2NvbmZpZy5idXR0b24uYm9yZGVyIGFzIE1yZEJvcmRlcik/LndpZHRoIDogKHRoaXMuX2NvbmZpZy5idXR0b24uYm9yZGVyIGFzIHN0cmluZykuc3BsaXQoJyAnKVswXTtcclxuICAgICAgdGhpcy5ib3JkZXJTdHlsZSA9IF8uaXNPYmplY3QodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIpID8gKHRoaXMuX2NvbmZpZy5idXR0b24uYm9yZGVyIGFzIE1yZEJvcmRlcik/LnN0eWxlIDogKHRoaXMuX2NvbmZpZy5idXR0b24uYm9yZGVyIGFzIHN0cmluZykuc3BsaXQoJyAnKVsxXTtcclxuICAgICAgdGhpcy5ib3JkZXJDb2xvciA9IF8uaXNPYmplY3QodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIpID8gKHRoaXMuX2NvbmZpZy5idXR0b24uYm9yZGVyIGFzIE1yZEJvcmRlcik/LmNvbG9yIDogKHRoaXMuX2NvbmZpZy5idXR0b24uYm9yZGVyIGFzIHN0cmluZykuc3BsaXQoJyAnKVsyXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1pbkhlaWdodCA9IHRoaXMubWluSGVpZ2h0IHx8IHRoaXMuZGlhbWV0ZXIgfHwgdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8ubWluSGVpZ2h0IHx8IHRoaXMuX2NvbmZpZy5idXR0b24ubWluSGVpZ2h0O1xyXG4gICAgdGhpcy5mb250U2l6ZSA9IHRoaXMuZm9udFNpemUgfHwgdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8uZm9udFNpemUgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5mb250U2l6ZSB8fCB0aGlzLl9jb25maWcuYmFzZUZvbnQuc2l6ZTtcclxuICAgIHRoaXMuZm9udEZhbWlseSA9IHRoaXMuZm9udEZhbWlseSB8fCB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5mb250RmFtaWx5IHx8IHRoaXMuX2NvbmZpZy5idXR0b24uZm9udEZhbWlseSB8fCB0aGlzLl9jb25maWcuYmFzZUZvbnQuZmFtaWx5O1xyXG4gICAgdGhpcy5kaWFtZXRlciA9IHRoaXMuZGlhbWV0ZXIgfHwgdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8uZGlhbWV0ZXIgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5kaWFtZXRlcjtcclxuICAgIHRoaXMuaWNvblNpemUgPSB0aGlzLmljb25TaXplIHx8IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/Lmljb25TaXplIHx8IHRoaXMuX2NvbmZpZy5idXR0b24uaWNvblNpemU7XHJcbiAgICB0aGlzLmJvcmRlclJhZGl1cyA9IHRoaXMuYm9yZGVyUmFkaXVzIHx8IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LmJvcmRlclJhZGl1cyB8fCB0aGlzLl9jb25maWcuYnV0dG9uLmJvcmRlclJhZGl1cztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrLCB3ZW5uIHNpY2ggZGVyIENvbGxhYnMtU3RhdHVzIGRlcyBCdXR0b25zIMOkbmRlcnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaXNDb2xsYXBzZWQgR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBrb2xsYWJpZXJ0IGlzdC5cclxuICAgKi9cclxuICBwdWJsaWMgYnV0dG9uQ29sbGFwc2VkKGlzQ29sbGFwc2VkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAvLyBXaXIgcmVhZ2llcmVuIG51ciwgd2VubiBzaWNoIGRlciBTdGF0dXMgw6RuZGVydFxyXG4gICAgaWYgKHRoaXMuaXNDb2xsYXBzZWQgIT09IGlzQ29sbGFwc2VkKSB7XHJcbiAgICAgIHRoaXMuaXNDb2xsYXBzZWQgPSBpc0NvbGxhcHNlZDtcclxuICAgICAgLy8gV2VubiAnY29sbGFwc2VUbycgZ2VzZXR6dCBpc3QsIHdpcmQgZGVyIEJ1dHRvbiBlbnRzcHJlY2hlbmQgdW1nZXN0eWx0XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmNvbGxhcHNlVG8pKSB7XHJcbiAgICAgICAgLy8gRGllc2UgV2VydGUgbcO8c3NlbiB6dXLDvGNrZ2VzZXR6dCB3ZXJkZW4sIGRhIHNpZSBmw7xyIGRlbiBuZXVlbiBTdHlsZSBuZXUgZ2VzZXR6dCB3ZXJkZW4gbcO8c3NlblxyXG4gICAgICAgIHRoaXMuYm9yZGVyUmFkaXVzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZm9udFNpemUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5taW5IZWlnaHQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5kaWFtZXRlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmljb25TaXplID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmIChpc0NvbGxhcHNlZCkge1xyXG4gICAgICAgICAgdGhpcy5pY29uID0gdGhpcy5jb2xsYXBzZVRvID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLklDT04gPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnJhaXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5vdXRsaW5lID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmZsYXQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuZmFiID0gdGhpcy5jb2xsYXBzZVRvID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLkZBQiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubWluaUZhYiA9IHRoaXMuY29sbGFwc2VUbyA9PT0gTXJkQnV0dG9uQXBwZWFyYW5jZS5NSU5JX0ZBQiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubmdBZnRlclZpZXdJbml0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaWNvbiA9IHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLklDT04gPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnJhaXNlZCA9IHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLlJBSVNFRCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMub3V0bGluZSA9IHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLk9VVExJTkUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmZsYXQgPSB0aGlzLnVuY29sbGFwc2VkQXBwZWFyYW5jZSA9PT0gTXJkQnV0dG9uQXBwZWFyYW5jZS5GTEFUID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5mYWIgPSB0aGlzLnVuY29sbGFwc2VkQXBwZWFyYW5jZSA9PT0gTXJkQnV0dG9uQXBwZWFyYW5jZS5GQUIgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm1pbmlGYWIgPSB0aGlzLnVuY29sbGFwc2VkQXBwZWFyYW5jZSA9PT0gTXJkQnV0dG9uQXBwZWFyYW5jZS5NSU5JX0ZBQiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubmdBZnRlclZpZXdJbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgXHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5jbGljay5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmVudW0gTXJkQnV0dG9uQXBwZWFyYW5jZSB7XHJcbiAgLy8gREVGQVVMVCA9IG51bGwsXHJcbiAgSUNPTiA9ICdpY29uJyxcclxuICBSQUlTRUQgPSAncmFpc2VkJyxcclxuICBPVVRMSU5FID0gJ291dGxpbmUnLFxyXG4gIEZMQVQgPSAnZmxhdCcsXHJcbiAgRkFCID0gJ2ZhYicsXHJcbiAgTUlOSV9GQUIgPSAnbWluaUZhYicsXHJcbiAgVE9HR0xFID0gJ3RvZ2dsZSdcclxufVxyXG4iLCI8IS0tIERlciBlaWdlbnRsaWNoIEhUTUwtQnV0dG9uIC0tPlxyXG48YnV0dG9uIGNsYXNzPVwibXJkLWJ1dHRvbi1jb250YWluZXJcIlxyXG4gICNidXR0b25Db250YWluZXJcclxuICBbc3R5bGUuLS1iZy1jb2xvcl09XCJiZ0NvbG9yXCJcclxuICBbc3R5bGUuLS10ZXh0LWNvbG9yXT1cInRleHRDb2xvclwiXHJcbiAgW3N0eWxlLi0tZGlzYWJsZWQtdGV4dC1jb2xvcl09XCJkaXNhYmxlZFRleHRDb2xvclwiXHJcbiAgW3N0eWxlLi0tZGlzYWJsZWQtYmctY29sb3JdPVwiZGlzYWJsZWRCZ0NvbG9yXCJcclxuICBbc3R5bGUuLS1ib3JkZXItd2lkdGhdPVwiYm9yZGVyV2lkdGhcIlxyXG4gIFtzdHlsZS4tLWJvcmRlci1jb2xvcl09XCJib3JkZXJDb2xvclwiXHJcbiAgW3N0eWxlLi0tYm9yZGVyLXN0eWxlXT1cImJvcmRlclN0eWxlXCJcclxuICBbc3R5bGUuLS1ib3JkZXItcmFkaXVzXT1cImJvcmRlclJhZGl1c1wiXHJcbiAgW3N0eWxlLi0tbWluLWhlaWdodF09XCJtaW5IZWlnaHRcIlxyXG4gIFtzdHlsZS4tLWZvbnQtc2l6ZV09XCJmb250U2l6ZVwiXHJcbiAgW3N0eWxlLi0tZm9udC1mYW1pbHldPVwiZm9udEZhbWlseVwiXHJcbiAgW3N0eWxlLi0tZGlhbWV0ZXJdPVwiZGlhbWV0ZXJcIlxyXG4gIFtzdHlsZS4tLWljb24tc2l6ZV09XCJpY29uU2l6ZVwiXHJcbiAgW3N0eWxlLi0tdW5zZWxlY3RlZC1jb2xvcl09XCJ0b2dnbGVVbnNlbGVjdGVkQ29sb3JcIlxyXG5cclxuICBbbmdTdHlsZV09XCJ7J21pbi13aWR0aCc6IGZpdENvbnRlbnQgPyAnZml0LWNvbnRlbnQnIDogJ3Vuc2V0J31cIlxyXG4gIFtuZ0NsYXNzXT1cInsnbXJkLWljb24tYnV0dG9uJzogaWNvbiwgJ21yZC1yYWlzZWQtYnV0dG9uJzogcmFpc2VkLCAnbXJkLW91dGxpbmUtYnV0dG9uJzogb3V0bGluZSxcclxuICAgICdtcmQtZmxhdC1idXR0b24nOiBmbGF0LCAnbXJkLWZhYi1idXR0b24nOiBmYWIsICdtcmQtbWluaS1mYWItYnV0dG9uJzogbWluaUZhYiwgJ21yZC10b2dnbGUtYnV0dG9uJzogdG9nZ2xlLFxyXG4gICAgJ21yZC10b2dnbGUtc2VsZWN0ZWQnOiB0b2dnbGVTZWxlY3RlZCwgJ2Rpc2FibGVkJzogZGlzYWJsZWR9XCJcclxuXHJcbiAgW21yZFRvb2xUaXBdPVwidG9vbHRpcFRleHRcIiBbc2hvd09uVHJ1bmNhdGVkRWxlbWVudF09XCJ0b29sdGlwSWZUcnVuY2F0ZWQgPyBtcmRCdXR0b25UZXh0Q29udGVudCA6IHVuZGVmaW5lZFwiIFtzaG93VG9vbFRpcF09XCJzaG93VG9vbHRpcFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJtcmQtYnV0dG9uLWJhY2tncm91bmRcIj5cclxuICAgIDwhLS0gRWluIE92ZXJsYXkgw7xiZXIgZGVtIEJ1dHRvbiB3ZWxjaGVzIGRlbiBIb3Zlci0gdW5kIEFjdGl2ZS1FZmZla3QgYW56ZWlndCAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJtcmQtYnV0dG9uLWZvY3VzXCIgW3N0eWxlLi0taG92ZXItY29sb3JdPVwiaG92ZXJDb2xvclwiIFtzdHlsZS4tLWFjdGl2ZS1jb2xvcl09XCJhY3RpdmVDb2xvclwiPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDwhLS0gRWluIE92ZXJsYXkgw7xiZXIgZGVtIEJ1dHRvbiB3ZWxjaGVzIGRlbiBIb3Zlci0gdW5kIEFjdGl2ZS1FZmZla3QgYW56ZWlndCAtLT5cclxuICA8IS0tIDxkaXYgY2xhc3M9XCJtcmQtYnV0dG9uLWZvY3VzXCIgW3N0eWxlLi0taG92ZXItY29sb3JdPVwiaG92ZXJDb2xvclwiIFtzdHlsZS4tLWFjdGl2ZS1jb2xvcl09XCJhY3RpdmVDb2xvclwiPjwvZGl2PiAtLT5cclxuICA8IS0tIERlciBDb250ZW50IGRlcyBCdXR0b25zIC0tPlxyXG4gIDxzcGFuIGNsYXNzPVwibXJkLWJ1dHRvbi1jb250ZW50XCIgW25nQ2xhc3NdPVwieydpc0NvbGxhcHNlZCc6IGlzQ29sbGFwc2VkfVwiPlxyXG4gICAgPCEtLSBJY29ucyBsaW5rcyB2b20gVGV4dCAtLT5cclxuICAgIDxzcGFuIGNsYXNzPVwibXJkLWJ1dHRvbi1pY29uLWNvbnRlbnRcIiBbbmdDbGFzc109XCJ7J2Z1bGwtaWNvbic6IGZ1bGxJY29ufVwiIFtoaWRlSWZUcnVuY2F0ZWRdPVwiY29sbGFwc2VcIiBkaXNwbGF5U3RhdGU9XCJmbGV4XCIgcmVxdWlyZWRIaWRlQXR0cmlidXRlPVwiaWNvbi1jb2xsYXBzZVwiXHJcbiAgICAgIGNoZWNrQ2hpbGRyZW5Gb3JBdHRyaWJ1dGUgW2hpZGVPblRydW5jYXRlZEVsZW1lbnRdPVwibXJkQnV0dG9uVGV4dENvbnRlbnRcIiBbcGFyZW50UmVzaXplRWxlbWVudF09XCJ0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFwiPjxuZy1jb250ZW50IHNlbGVjdD1cIm1yZC1pY29uOm5vdChbaWNvbi1lbmRdKSwgW21yZC1pY29uXTpub3QoW2ljb24tZW5kXSlcIj48L25nLWNvbnRlbnQ+PC9zcGFuPlxyXG4gICAgPCEtLSBEZXIgVGV4dCBkZXMgQnV0dG9ucyAtLT5cclxuICAgIDxzcGFuIGNsYXNzPVwibXJkLWJ1dHRvbi10ZXh0LWNvbnRlbnRcIiAoaGlkZGVuQ2hhbmdlZCk9XCJidXR0b25Db2xsYXBzZWQoJGV2ZW50KVwiIFtoaWRlSWZUcnVuY2F0ZWRdPVwiY29sbGFwc2VcIiAjbXJkQnV0dG9uVGV4dENvbnRlbnQgW3BhcmVudFJlc2l6ZUVsZW1lbnRdPVwidGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcIj48bmctY29udGVudCBzZWxlY3Q9XCI6bm90KFttcmQtaWNvbl0pOm5vdChtcmQtaWNvbilcIj48L25nLWNvbnRlbnQ+PC9zcGFuPlxyXG4gICAgPCEtLSBJY29ucyByZWNodHMgdm9tIFRleHQgLS0+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm1yZC1idXR0b24taWNvbi1jb250ZW50XCIgW25nQ2xhc3NdPVwieydmdWxsLWljb24nOiBmdWxsSWNvbn1cIiBbaGlkZUlmVHJ1bmNhdGVkXT1cImNvbGxhcHNlXCIgZGlzcGxheVN0YXRlPVwiZmxleFwiIHJlcXVpcmVkSGlkZUF0dHJpYnV0ZT1cImljb24tY29sbGFwc2VcIlxyXG4gICAgICBjaGVja0NoaWxkcmVuRm9yQXR0cmlidXRlIFtoaWRlT25UcnVuY2F0ZWRFbGVtZW50XT1cIm1yZEJ1dHRvblRleHRDb250ZW50XCIgW3BhcmVudFJlc2l6ZUVsZW1lbnRdPVwidGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcIj48bmctY29udGVudCBzZWxlY3Q9XCJtcmQtaWNvbltpY29uLWVuZF0sIFttcmQtaWNvbl1baWNvbi1lbmRdXCI+PC9uZy1jb250ZW50Pjwvc3Bhbj5cclxuICA8L3NwYW4+XHJcbiAgPCEtLSBEaWUgUHJvZ3Jlc3MtQmFyIGVpbmVzIEJ1dHRvbnMgKG5pY2h0IGbDvHIgSWNvbi0sIEZhYi0gdW5kIE1pbmktRmFiLUJ1dHRvbnMpIC0tPlxyXG4gIDxtcmQtcHJvZ3Jlc3MtYmFyIGNsYXNzPVwibXJkLWJ1dHRvbi1wcm9ncmVzcy1iYXJcIlxyXG4gICAgKm5nSWY9XCIhZGlzYWJsZWQgJiYgIWljb24gJiYgIWZhYiAmJiAhbWluaUZhYiAmJiAoaXNMb2FkaW5nIHx8IGxvYWRpbmc/LnZhbHVlIHx8IGxvYWRpbmdQcm9ncmVzcz8udmFsdWUgfHwgbG9hZGluZ1Byb2dyZXNzPy52YWx1ZSA9PT0gMClcIlxyXG4gICAgW3ZhbHVlXT1cImxvYWRpbmdQcm9ncmVzcz8udmFsdWVcIiBbbW9kZV09XCJsb2FkaW5nUHJvZ3Jlc3MgPyAnZGV0ZXJtaW5hdGUnIDogJ2luZGV0ZXJtaW5hdGUnXCIgW2NvbG9yXT1cInByb2dyZXNzQ29sb3JcIj48L21yZC1wcm9ncmVzcy1iYXI+XHJcbiAgPCEtLSBEZXIgUHJvZ3Jlc3MtU3Bpbm5lciBlaW5lcyBCdXR0b25zIChudXIgZsO8ciBJY29uLSwgRmFiLSB1bmQgTWluaS1GYWItQnV0dG9ucykgLS0+XHJcbiAgPG1yZC1wcm9ncmVzcy1zcGlubmVyIGNsYXNzPVwibXJkLWJ1dHRvbi1wcm9ncmVzcy1zcGlubmVyXCJcclxuICAgICpuZ0lmPVwiIWRpc2FibGVkICYmIChpY29uIHx8IGZhYiB8fCBtaW5pRmFiKSAmJiAoaXNMb2FkaW5nIHx8IGxvYWRpbmc/LnZhbHVlIHx8IGxvYWRpbmdQcm9ncmVzcz8udmFsdWUgfHwgbG9hZGluZ1Byb2dyZXNzPy52YWx1ZSA9PT0gMClcIlxyXG4gICAgW3ZhbHVlXT1cImxvYWRpbmdQcm9ncmVzcz8udmFsdWVcIiBbbW9kZV09XCJsb2FkaW5nUHJvZ3Jlc3MgPyAnZGV0ZXJtaW5hdGUnIDogJ2luZGV0ZXJtaW5hdGUnXCIgW2NvbG9yXT1cInByb2dyZXNzQ29sb3JcIj48L21yZC1wcm9ncmVzcy1zcGlubmVyPlxyXG48L2J1dHRvbj5cclxuIl19