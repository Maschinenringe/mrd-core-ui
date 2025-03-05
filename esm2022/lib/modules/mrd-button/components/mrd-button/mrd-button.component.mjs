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
        } }, inputs: { icon: ["icon-button", "icon", booleanAttribute], raised: ["raised-button", "raised", booleanAttribute], outline: ["outline-button", "outline", booleanAttribute], flat: ["flat-button", "flat", booleanAttribute], fab: ["fab-button", "fab", booleanAttribute], miniFab: ["miniFab-button", "miniFab", booleanAttribute], toggle: ["toggle-button", "toggle", booleanAttribute], toggleSelected: ["selected", "toggleSelected", booleanAttribute], primary: ["primary", "primary", booleanAttribute], accent: ["accent", "accent", booleanAttribute], warn: ["warn", "warn", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], loading: "loading", isLoading: ["isLoading", "isLoading", booleanAttribute], loadingProgress: "loadingProgress", customTextColor: ["color", "customTextColor", colorThemeAttribute], customBgColor: ["backgroundColor", "customBgColor", colorAttribute], keepCustomTextColor: ["keepCustomTextColor", "keepCustomTextColor", booleanAttribute], keepCustomBgColor: ["keepCustomBgColor", "keepCustomBgColor", booleanAttribute], customToggleUnselectedColor: ["customToggleUnselectedColor", "customToggleUnselectedColor", colorAttribute], customToggleUnselectedTextColor: ["customToggleUnselectedTextColor", "customToggleUnselectedTextColor", colorAttribute], customToggleSelectedTextColor: ["customToggleSelectedTextColor", "customToggleSelectedTextColor", colorAttribute], progressColor: ["progressColor", "progressColor", colorAttribute], collapse: ["collapse", "collapse", booleanAttribute], collapseTo: "collapseTo", fitContent: ["fit-content", "fitContent", booleanAttribute], showTooltip: ["tooltip", "showTooltip", booleanAttribute], tooltipText: "tooltipText", tooltipIfTruncated: ["tooltipIfTruncated", "tooltipIfTruncated", booleanAttribute], minHeight: ["minHeight", "minHeight", sizeAttribute], fontSize: ["fontSize", "fontSize", sizeAttribute], fontFamily: "fontFamily", diameter: ["diameter", "diameter", sizeAttribute], iconSize: ["iconSize", "iconSize", sizeAttribute], fullIcon: ["fullIcon", "fullIcon", booleanAttribute], borderRadius: ["borderRadius", "borderRadius", sizeAttribute] }, outputs: { click: "click" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c6, decls: 14, vars: 68, consts: [[1, "mrd-button-container", 3, "ngStyle", "ngClass", "mrdToolTip", "showOnTruncatedElement", "showToolTip"], ["buttonContainer", ""], [1, "mrd-button-background"], [1, "mrd-button-focus"], [1, "mrd-button-content", 3, "ngClass"], ["displayState", "flex", "requiredHideAttribute", "icon-collapse", "checkChildrenForAttribute", "", 1, "mrd-button-icon-content", 3, "ngClass", "hideIfTruncated", "hideOnTruncatedElement", "parentResizeElement"], [1, "mrd-button-text-content", 3, "hideIfTruncated", "parentResizeElement", "hiddenChanged"], ["mrdButtonTextContent", ""], ["class", "mrd-button-progress-bar", 3, "value", "mode", "color", 4, "ngIf"], ["class", "mrd-button-progress-spinner", 3, "value", "mode", "color", 4, "ngIf"], [1, "mrd-button-progress-bar", 3, "value", "mode", "color"], [1, "mrd-button-progress-spinner", 3, "value", "mode", "color"]], template: function MrdButtonComponent_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWJ1dHRvbi9jb21wb25lbnRzL21yZC1idXR0b24vbXJkLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWJ1dHRvbi9jb21wb25lbnRzL21yZC1idXR0b24vbXJkLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsc0JBQXNCLEVBQW1CLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6RSxPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsWUFBWSxFQUFnQixLQUFLLEVBQXFCLE1BQU0sRUFBVyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDck4sT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWpFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNuRSxPQUFPLEtBQUssQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUVoQyxPQUFPLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOzs7Ozs7Ozs7SUNpQzdFLHVDQUV5STs7O0lBQXZJLDRGQUFnQyxrRUFBQSwrQkFBQTs7O0lBRWxDLDJDQUU2STs7O0lBQTNJLDRGQUFnQyxrRUFBQSwrQkFBQTs7Ozs7Ozs7QUR0Q3BDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBYUgsTUFBTSxPQUFPLGtCQUFtQixTQUFRLHNCQUFzQjtJQXFWaEQ7SUFDSDtJQXBW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Q0FBQTtJQUNuQixvQ0FBYSxDQUFBO0lBQ2Isa0NBQVcsQ0FBQTtJQUNYLDJDQUFvQixDQUFBO0lBQ3BCLHdDQUFpQixDQUFBO0FBQ25CLENBQUMsRUFUSSxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBU3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXJkQm9yZGVyIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vbW9kZWwvY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgQmFzZVB1c2hTdHJhdGVneU9iamVjdCwgT2JzZXJ2YWJsZVZhbHVlLCBVdGlsIH0gZnJvbSAnbXJkLWNvcmUnO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LFJlbmRlcmVyMixWaWV3Q2hpbGQsIGJvb2xlYW5BdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29sb3JVdGlsIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb2xvci51dGlsJztcclxuaW1wb3J0IHsgTXJkQ29uZmlnTW9kZWwgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbC9jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgeyBDb25maWdVdGlsIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb25maWcudXRpbCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcbmltcG9ydCB7IE1yZEJhc2VDb2xvclRoZW1lIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vbW9kZWwvY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgY29sb3JBdHRyaWJ1dGUsIGNvbG9yVGhlbWVBdHRyaWJ1dGUgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi90cmFuc2Zvcm1zL2NvbG9yLXRyYW5zZm9ybSc7XHJcbmltcG9ydCB7IHNpemVBdHRyaWJ1dGUgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi90cmFuc2Zvcm1zL3NpemUtdHJhbnNmb3JtJztcclxuLyoqXHJcbiAqIERpZXNlcyBLb21wb25lbnRlIHN0ZWxsdCBkZW4gTXJkLUJ1dHRvbiB6dXIgVmVyZsO8Z3VuZy5cclxuICpcclxuICogRGVyIEJ1dHRvbiBrYW5uIG1pdHRlbHMgZGVyIGVudHNwcmVjaGVuZGVuIEF0dHJpYnV0ZSBpbiBmb2xnZW5kZW4gU3RpbGVuIGRhcmdlc3RlbGx0IHdlcmRlbjpcclxuICogLSBTdGFuZGFyZC1CdXR0b24gKGRlZmF1bHQpXHJcbiAqIC0gSWNvbi1CdXR0b24gKEF0dHJpYnV0bmFtZTogaWNvbi1idXR0b24pXHJcbiAqIC0gUmFpc2VkLUJ1dHRvbiAoQXR0cmlidXRuYW1lOiByYWlzZWQtYnV0dG9uKVxyXG4gKiAtIE91dGxpbmUtQnV0dG9uIChBdHRyaWJ1dG5hbWU6IG91dGxpbmUtYnV0dG9uKVxyXG4gKiAtIEZsYXQtQnV0dG9uIChBdHRyaWJ1dG5hbWU6IGZsYXQtYnV0dG9uKVxyXG4gKiAtIEZhYi1CdXR0b24gKEF0dHJpYnV0bmFtZTogZmFiLWJ1dHRvbilcclxuICogLSBNaW5pRmFiLUJ1dHRvbiAoQXR0cmlidXRuYW1lOiBtaW5pRmFiLWJ1dHRvbilcclxuICpcclxuICogV2VpdGVyaGluIGvDtm5uZW4gZGllIHN0YW5kYXJkIFRoZW1lcyAocHJpbWFyeSwgYWNjZW50LCB3YXJuKSBmw7xyIGRpZSBIaW50ZXJncnVuZC0gYnp3LiBUZXh0ZmFyYmUgZmVzdGdlbGVndCB3ZXJkZW4gKGplIG5hY2ggU3R5bGUpLlxyXG4gKlxyXG4gKiBGw7xyIHdlaXRlcmUgQW5wYXNzdW5nZW4gc2llaGUgZGllIEluZm9ybWF0aW9uZW4gZGVyIGVpbnplbG5lbiBBdHRyaWJ1dGUgb2RlciBkaWUgRG9rdW1lbnRhdGlvbi5cclxuICpcclxuICogQGNsYXNzIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gKiBAZXh0ZW5kcyB7QmFzZVB1c2hTdHJhdGVneU9iamVjdH1cclxuICogQGltcGxlbWVudHMge0FmdGVyVmlld0luaXR9XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1idXR0b24nLFxyXG4gIGhvc3Q6IHtcclxuICAgJ1tzdHlsZS5taW4td2lkdGhdJzogJ2ZpdENvbnRlbnQgPyBcImZpdC1jb250ZW50XCIgOiBcInVuc2V0XCInLFxyXG4gICAnW3N0eWxlLm1hcmdpbl0nOiAndG9nZ2xlID8gXCIwIC0xNnB4XCIgOiBcInVuc2V0XCInLFxyXG4gICAnW3N0eWxlLnRyYW5zaXRpb25dJzogJ3RvZ2dsZSA/IFwidHJhbnNmb3JtIDAuMnNcIiA6IFwidW5zZXRcIicsXHJcbiAgICdbY2xhc3MuYWN0aXZlXSc6ICd0b2dnbGUgJiYgdG9nZ2xlU2VsZWN0ZWQnXHJcbiAgfSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWJ1dHRvbi5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmRCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAvKipcclxuICAgKiBSZWZlcmVueiBhdWYgZGFzIFRleHQtRWxlbWVudCBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50UmVmPEhUTUxFbGVtZW50Pn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQFZpZXdDaGlsZCgnbXJkQnV0dG9uVGV4dENvbnRlbnQnLCB7c3RhdGljOiB0cnVlfSkgbXJkQnV0dG9uVGV4dENvbnRlbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGVpbiBJY29uLUJ1dHRvbiBpc3QuXHJcbiAgICpcclxuICAgKiBEZXIgQ29udGVudCBkZXMgQnV0dG9ucyBzb2xsdGUgbnVyIGVpbiBJY29uIHNlaW4uXHJcbiAgICogRGVyIEJ1dHRvbiBoYXQgc3RhbmRhcmRtw6TDn2lnIGVpbmVuIHRyYW5zcGFyZW50ZW4gSGludGVyZ3J1bmQgdW5kIGRpZSBGYXJiZSBkZXMgSWNvbnMgaXN0IHNjaHdhcnouXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ2ljb24tYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgaWNvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGVpbiBSYWlzZWQtQnV0dG9uIGlzdC5cclxuICAgKlxyXG4gICAqIFJhaXNlZC1CdXR0b25zIGhhYmVuIGVpbmVuIFNjaGF0dGVuLlxyXG4gICAqIERlciBCdXR0b24gaGF0IHN0YW5kYXJkbcOkw59pZyBlaW5lbiB3ZWnDn2VuIEhpbnRlcmdydW5kIHVuZCBkaWUgVGV4dGZhcmJlIHNjaHdhcnouXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ3JhaXNlZC1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSByYWlzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGVpbiBPdXRsaW5lLUJ1dHRvbiBpc3QuXHJcbiAgICpcclxuICAgKiBPdXRsaW5lLUJ1dHRvbnMgaGFiZW4gc3RhbmRhcmRtw6TDn2lnIGVpbmVuIHRyYW5zcGFyZW50ZW4gSGludGVyZ3J1bmQgdW5kIGVpbmVuIGdyYXVlbiBSYW5kLCBzb3dpZSBlaW5lbiBzY2h3YXJ6ZW4gVGV4dC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnb3V0bGluZS1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBvdXRsaW5lOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBlaW4gRmxhdC1CdXR0b24gaXN0LlxyXG4gICAqXHJcbiAgICogRmxhdC1CdXR0b25zIGhhYmVuIHN0YW5kYXJkbcOkw59pZyBlaW5lbiB3ZWnDn2VuIEhpbnRlcmdydW5kIHVuZCBkaWUgVGV4dGZhcmJlIGlzdCBzY2h3YXJ6LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdmbGF0LWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGZsYXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGVpbiBGYWItQnV0dG9uIGlzdC5cclxuICAgKlxyXG4gICAqIEZhYi1CdXR0b25zIHNpbmQga3JlaXNmw7ZybWlnZSBCdXR0b25zLlxyXG4gICAqIFN0YW5kYXJkbcOkw59pZyBoYWJlbiBzaWUgZWluZW4gd2Vpw59lbiBIaW50ZXJncnVuZCB1bmQgZGllIEljb25mYXJiZSBpc3Qgc2Nod2FyeiwgYXXDn2VyZGVtIGJlc2l0emVuIHNpZSBlaW5lbiBTY2hhdHRlbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnZmFiLWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGZhYjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZWluIE1pbmlGYWItQnV0dG9uIGlzdC5cclxuICAgKlxyXG4gICAqIE1pbmlGYWItQnV0dG9ucyBzaW5kIGtyZWlzZsO2cm1pZ2UgQnV0dG9ucyB2b24gZGVyIEdyw7bDn2UgZWluZXMgSWNvbi1CdXR0b25zLlxyXG4gICAqIFN0YW5kYXJkbcOkw59pZyBoYWJlbiBzaWUgZWluZW4gd2Vpw59lbiBIaW50ZXJncnVuZCB1bmQgZGllIEljb25mYXJiZSBpc3Qgc2Nod2FyeiwgYXXDn2VyZGVtIGJlc2l0emVuIHNpZSBlaW5lbiBTY2hhdHRlbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnbWluaUZhYi1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBtaW5pRmFiOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7YWxpYXM6ICd0b2dnbGUtYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgdG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7YWxpYXM6ICdzZWxlY3RlZCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHRvZ2dsZVNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZGFzIFRoZW1lIFwicHJpbWFyeVwiIGhhdC5cclxuICAgKlxyXG4gICAqIEhpZXJkdXJjaCB3aXJkIGRpZSBIaW50ZXJncnVuZGZhcmJlIGRlcyBCdXR0b25zIGF1ZiBkaWUgcHJpbcOkcmUgRmFyYmUgZGVzIFRoZW1lcyBnZXNldHp0LlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHByaW1hcnk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBkYXMgVGhlbWUgXCJhY2NlbnRcIiBoYXQuXHJcbiAgICpcclxuICAgKiBIaWVyZHVyY2ggd2lyZCBkaWUgSGludGVyZ3J1bmRmYXJiZSBkZXMgQnV0dG9ucyBhdWYgZGllIEFremVudGZhcmJlIGRlcyBUaGVtZXMgZ2VzZXR6dC5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBhY2NlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBkYXMgVGhlbWUgXCJ3YXJuXCIgaGF0LlxyXG4gICAqXHJcbiAgICogSGllcmR1cmNoIHdpcmQgZGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIEJ1dHRvbnMgYXVmIGRpZSBXYXJuZmFyYmUgZGVzIFRoZW1lcyBnZXNldHp0LlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHdhcm46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBkZWFrdGl2aWVydCBpc3QuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRWluZSBPYnNlcnZhYmxlVmFsdWUsIGRpZSDDvGJlcmdlYmVuIHdlcmRlbiBrYW5uLCB1bSB6dSBiZXN0aW1tZW4sXHJcbiAgICogb2IgZGVyIEJ1dHRvbiBlaW5lbiBMYWRlYmFsa2VuL0xhZGVzcGlubmVyIGFuemVpZ2VuIHNvbGwuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIGxvYWRpbmc6IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPjtcclxuICAvKipcclxuICAgKiBFaW4gYm9vbGVhbiwgZGVyIGJlc3RpbW10LCBvYiBkZXIgQnV0dG9uIGVpbmVuIExhZGViYWxrZW4vTGFkZXNwaW5uZXIgYW56ZWlnZW4gc29sbC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBFaW5lIE9ic2VydmFibGVWYWx1ZSwgZGllIMO8YmVyZ2ViZW4gd2VyZGVuIGthbm4sIHVtIGRlbiBGb3J0c2Nocml0dCBkZXMgTGFkZWJhbGtlbnMvTGFkZXNwaW5uZXJzIHp1IGJlc3RpbW1lbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYnNlcnZhYmxlVmFsdWU8bnVtYmVyPn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIGxvYWRpbmdQcm9ncmVzczogT2JzZXJ2YWJsZVZhbHVlPG51bWJlcj47XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHp0IGRpZSBHcnVuZGZhcmJlIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogRGllc2Ugd2lyZCBqZSBuYWNoIFN0eWxlIGRlcyBCdXR0b25zIGFscyBIaW50ZXJncnVuZGZhcmJlIG9kZXIgVGV4dGZhcmJlIHZlcndlbmRldC5cclxuICAgKlxyXG4gICAqIEVzIGvDtm5uZW4gSGV4LSwgUkdCLSBvZGVyIFJHQkEtV2VydGUsIHNvd2llIFwicHJpbWFyeVwiLCBcImFjY2VudFwiIG9kZXIgXCJ3YXJuXCIgYW5nZWdlYmVuIHdlcmRlbi5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnY29sb3InLCB0cmFuc2Zvcm06IGNvbG9yVGhlbWVBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tVGV4dENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHp0IGRpZSBIaW50ZXJncnVuZGZhcmJlIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogRXMga8O2bm5lbiBIZXgtLCBSR0ItIG9kZXIgUkdCQS1XZXJ0ZSBhbmdlZ2ViZW4gd2VyZGVuLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdiYWNrZ3JvdW5kQ29sb3InLCB0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbUJnQ29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGllIGJlbnV0emVyZGVmaW5pZXJ0ZSBUZXh0ZmFyYmUgbmljaHQgZHVyY2ggZWluIGRlZm5pZXJ0ZXMgVGhlbWEgw7xiZXJzY2hyaWViZW4gd2VyZGVuIHNvbGwuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMga2VlcEN1c3RvbVRleHRDb2xvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRpZSBiZW51dHplcmRlZmluaWVydGUgSGludGVyZ3J1bmRmYXJiZSBuaWNodCBkdXJjaCBlaW4gZGVmaW5pZXJ0ZXMgVGhlbWEgw7xiZXJzY2hyaWViZW4gd2VyZGVuIHNvbGwuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMga2VlcEN1c3RvbUJnQ29sb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tVG9nZ2xlU2VsZWN0ZWRUZXh0Q29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0enQgZGllIEZhcmJlIGRlcyBMYWRlYmFsa2Vucy9MYWRlc3Bpbm5lcnMuXHJcbiAgICpcclxuICAgKiBFcyBrw7ZubmVuIEhleC0sIFJHQi0gb2RlciBSR0JBLVdlcnRlIGFuZ2VnZWJlbiB3ZXJkZW4uXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIHByb2dyZXNzQ29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbi1UZXh0IHZlcnNjaHdpbmRldCwgd2VubiBlciB6dSBsYW5nIGlzdCB1bmQgYXVzZ2VwdW5rdGV0IHdlcmRlbiB3w7xyZGUuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgY29sbGFwc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCB6dSB3ZWxjaGVtIFN0eWxlIGRlciBCdXR0b24ga29sbGFiaWVyZW4gc29sbC5cclxuICAgKiBNw7ZnbGljaGUgV2VydGU6IFwiaWNvblwiLCBcImZhYlwiLCBcIm1pbmlGYWJcIlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgY29sbGFwc2VUbyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5fY29sbGFwc2VUbyA9PT0gdmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLklDT04gfHwgdmFsdWUgPT09IE1yZEJ1dHRvbkFwcGVhcmFuY2UuRkFCIHx8IHZhbHVlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLk1JTklfRkFCKSB7XHJcbiAgICAgIHRoaXMuX2NvbGxhcHNlVG8gPSB2YWx1ZTtcclxuICAgICAgdGhpcy5jb2xsYXBzZSA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdEYXMgQXR0cmlidXQgY29sbGFwc2VUbyBrYW5uIG51ciBcImljb25cIiwgXCJmYWJcIiBvZGVyIFwibWluaUZhYlwiIHNlaW4uJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgY29sbGFwc2VUbygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbGxhcHNlVG87XHJcbiAgfVxyXG4gIHByaXZhdGUgX2NvbGxhcHNlVG86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU29yZ3QgZGFmw7xyLCBkYXNzIGRlciBCdXR0b24gaW1tZXIgbWluZGVzdGVucyBzbyBicmVpdCBpc3QsIHdpZSBzZWluIEluaGFsdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnZml0LWNvbnRlbnQnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZml0Q29udGVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGVpbmVuIFRvb2x0aXAgYW56ZWlnZW4gc29sbC5cclxuICAgKlxyXG4gICAqIERlciBUb29sdGlwLVRleHQgd2lyZCBzdGFuZGFyZG3DpMOfaWcgYXVzIGRlbSBJbmhhbHQgZGVzIEJ1dHRvbnMgb2huZSBkdXJjaCBbbXJkLWljb25dIGdla2VubnplaWNobmV0ZSBJY29ucyBnZW5lcmllcnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ3Rvb2x0aXAnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2hvd1Rvb2x0aXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBEZXIgVGV4dCBkZXMgVG9vbHRpcHMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgdG9vbHRpcFRleHQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgVG9vbHRpcCBudXIgYW5nZXplaWd0IHdlcmRlbiBzb2xsLCB3ZW5uIGRlciBCdXR0b24tVGV4dCBhdXNnZXB1bmt0ZXQgd2lyZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgdG9vbHRpcElmVHJ1bmNhdGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnNob3dUb29sdGlwID0gdmFsdWUgfHwgdGhpcy5zaG93VG9vbHRpcDtcclxuICAgIHRoaXMuX3Rvb2x0aXBJZlRydW5jYXRlZCA9IHZhbHVlO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IHRvb2x0aXBJZlRydW5jYXRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl90b29sdGlwSWZUcnVuY2F0ZWQ7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3Rvb2x0aXBJZlRydW5jYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBEaWUgTWluZGVzdGjDtmhlIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogV2lyZCBlaW5lIFphaGwgYW5nZWdlYmVuLCB3aXJkIGRpZXNlIGFscyBQaXhlbHdlcnQgaW50ZXJwcmV0aWVydC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIG1pbkhlaWdodDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIERpZSBTY2hyaWZ0Z3LDtsOfZSBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIFdpcmQgZWluZSBaYWhsIGFuZ2VnZWJlbiwgd2lyZCBkaWVzZSBhbHMgUGl4ZWx3ZXJ0IGludGVycHJldGllcnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBmb250U2l6ZTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgZm9udEZhbWlseTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIERlciBEdXJjaG1lc3NlciBmw7xyIEljb24tLCBGYWItIHVuZCBNaW5pRmFiLUJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBXaXJkIGVpbmUgWmFobCBhbmdlZ2ViZW4sIHdpcmQgZGllc2UgYWxzIFBpeGVsd2VydCBpbnRlcnByZXRpZXJ0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZyB8IG51bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgZGlhbWV0ZXI6IHN0cmluZztcclxuICAvKipcclxuICAgKiBEaWUgR3LDtsOfZSBkZXMgSWNvbnMuXHJcbiAgICpcclxuICAgKiBXaXJkIGVpbmUgWmFobCBhbmdlZ2ViZW4sIHdpcmQgZGllc2UgYWxzIFBpeGVsd2VydCBpbnRlcnByZXRpZXJ0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZyB8IG51bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgaWNvblNpemU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZnVsbEljb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBEZXIgUmFkaXVzIGRlciBFY2tlbiBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIFdpcmQgZWluZSBaYWhsIGFuZ2VnZWJlbiwgd2lyZCBkaWVzZSBhbHMgUGl4ZWx3ZXJ0IGludGVycHJldGllcnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBib3JkZXJSYWRpdXM6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRGFzIEtsaWNrLUV2ZW50IGR1cmNoIGRlbiBOdXR6ZXIuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPEV2ZW50Pn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBjbGljazogRXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcblxyXG5cclxuICAvKipcclxuICAgKiBEaWUgS29uZmlndXJhdGlvbiBkZXMgTXJkLUJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEB0eXBlIHtNcmRDb25maWdNb2RlbH1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfY29uZmlnOiBNcmRDb25maWdNb2RlbCA9IENvbmZpZ1V0aWwuZ2V0Q29uZmlnKCk7XHJcblxyXG4gIHB1YmxpYyBpc0NvbGxhcHNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdW5jb2xsYXBzZWRBcHBlYXJhbmNlOiBNcmRCdXR0b25BcHBlYXJhbmNlO1xyXG5cclxuICBwcml2YXRlIGJ1dHRvblByaW1hcnk6IHN0cmluZyB8IE1yZEJhc2VDb2xvclRoZW1lO1xyXG4gIHByaXZhdGUgYnV0dG9uQWNjZW50OiBzdHJpbmcgfCBNcmRCYXNlQ29sb3JUaGVtZTtcclxuICBwcml2YXRlIGJ1dHRvbldhcm46IHN0cmluZyB8IE1yZEJhc2VDb2xvclRoZW1lO1xyXG4gIHByaXZhdGUgYnV0dG9uRGlzYWJsZWQ6IE1yZEJhc2VDb2xvclRoZW1lO1xyXG4gIHByaXZhdGUgYnV0dG9uUHJvZ3Jlc3M6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGJnQ29sb3I6IHN0cmluZztcclxuICBwcml2YXRlIHRleHRMaWdodENvbG9yOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSB0ZXh0RGFya0NvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIHRleHRDb2xvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBob3ZlckNvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIGFjdGl2ZUNvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIGRpc2FibGVkVGV4dENvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIGRpc2FibGVkQmdDb2xvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyB0b2dnbGVVbnNlbGVjdGVkQ29sb3I6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGJvcmRlcldpZHRoOiBzdHJpbmc7XHJcbiAgcHVibGljIGJvcmRlclN0eWxlOiBzdHJpbmc7XHJcbiAgcHVibGljIGJvcmRlckNvbG9yOiBzdHJpbmc7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+XHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBIaWVyIHNvcmdlbiB3aXIgZGFmw7xyLCBkYXNzIGRlciBTdGFuZGFyZCBDbGljay1IYW5kbGVyIHZvbiBBbmd1bGFyIGVudGZlcm50IHdpcmRcclxuICAgIGNvbnN0IGhvc3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGhvc3QucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XHJcblxyXG4gICAgY29uc3QgbmV3SG9zdDogSFRNTEVsZW1lbnQgPSBob3N0LmNsb25lTm9kZSgpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgbmV3SG9zdC5hcHBlbmRDaGlsZChidXR0b24pXHJcblxyXG4gICAgQXJyYXkuZnJvbShob3N0LmF0dHJpYnV0ZXMpLmZvckVhY2goYXR0ciA9PiBuZXdIb3N0LnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpKTtcclxuICAgIGhvc3QucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3SG9zdCwgaG9zdCk7XHJcbiAgICBuZXdIb3N0LnN0eWxlLm1pbldpZHRoID0gdGhpcy5maXRDb250ZW50ID8gJ2ZpdC1jb250ZW50JyA6ICd1bnNldCc7XHJcbiAgICBuZXdIb3N0LnN0eWxlLm1hcmdpbiA9IHRoaXMudG9nZ2xlID8gJzAgLTE2cHgnIDogJ3Vuc2V0JztcclxuICAgIG5ld0hvc3Quc3R5bGUudHJhbnNpdGlvbiA9IHRoaXMudG9nZ2xlID8gJ3RyYW5zZm9ybSAwLjJzJyA6ICd1bnNldCc7XHJcbiAgICBpZiAodGhpcy50b2dnbGUgJiYgdGhpcy50b2dnbGVTZWxlY3RlZCkge1xyXG4gICAgICBuZXdIb3N0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgbmV3SG9zdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMub25DbGljayhldmVudCkpO1xyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgPSBuZXdIb3N0O1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMubG9hZGluZykpIHtcclxuICAgICAgdGhpcy5tYXJrRm9yQ2hlY2tJZih0aGlzLmxvYWRpbmcuY2hhbmdlZClcclxuICAgIH1cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmxvYWRpbmdQcm9ncmVzcykpIHtcclxuICAgICAgdGhpcy5tYXJrRm9yQ2hlY2tJZih0aGlzLmxvYWRpbmdQcm9ncmVzcy5jaGFuZ2VkKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5pdEJhc2VTdHlsZSgpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU3R5bGUoKTtcclxuXHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vbkNsaWNrKGV2ZW50KSk7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVTdHlsZSgpOiB2b2lkIHtcclxuICAgIGxldCB0aGVtZXNDb3VudCA9IFt0aGlzLnByaW1hcnksIHRoaXMuYWNjZW50LCB0aGlzLndhcm5dLmZpbHRlcigodmFsdWUpID0+IHZhbHVlKS5sZW5ndGg7XHJcbiAgICBpZiAodGhlbWVzQ291bnQgPiAxKSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdFaW4gTXJkQnV0dG9uIGthbm4gbnVyIGVpbiBUaGVtYSBoYWJlbi4gU2V0emUgXCJwcmltYXJ5XCIsIFwiYWNjZW50XCIgb2RlciBcIndhcm5cIiBhbHMgVGhlbWEuJyk7XHJcbiAgICB9XHJcbiAgICBsZXQgYXBwZWFyYW5jZUNvdW50ID0gW3RoaXMuaWNvbiwgdGhpcy5yYWlzZWQsIHRoaXMub3V0bGluZSwgdGhpcy5mbGF0LCB0aGlzLmZhYiwgdGhpcy5taW5pRmFiLCB0aGlzLnRvZ2dsZV0uZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUpLmxlbmd0aDtcclxuICAgIGlmIChhcHBlYXJhbmNlQ291bnQgPiAxKSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdFaW4gTXJkQnV0dG9uIGthbm4gbnVyIGVpbmVuIFN0eWxlIGhhYmVuLiBTZXR6ZSBcImljb24tYnV0dG9uXCIsIFwicmFpc2VkLWJ1dHRvblwiLCBcIm91dGxpbmUtYnV0dG9uXCIsIFwiZmxhdC1idXR0b25cIiwgXCJmYWItYnV0dG9uXCIsIFwibWluaUZhYi1idXR0b25cIiBvZGVyIGtlaW5lbiBTdHlsZS4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGYWxscyBpcmdlbmRlaW5lIEZhcmJlL1RoZW1hIGdlc2V0enQgaXN0LCB3aXJkIGRpZSBIaW50ZXJncnVuZC0gdW5kIFRleHRmYXJiZSBkZXMgQnV0dG9ucyBhbmhhbmQgZGllc2VyIHVuZCBkZXMgU3R5bGVzIGdlc2V0enQuXHJcbiAgICBpZiAodGhpcy5wcmltYXJ5IHx8IHRoaXMuYWNjZW50IHx8IHRoaXMud2FybiB8fCB0aGlzLmN1c3RvbUJnQ29sb3IgfHwgdGhpcy5jdXN0b21UZXh0Q29sb3IpIHtcclxuICAgICAgLy8gV2VubiAna2VlcEN1c3RvbUJnQ29sb3InIGdlc2V0enQgaXN0LCBkYW5uIHdpcmQgJ2N1c3RvbUJnQ29sb3InIGFscyAnYmFzZUNvbG9yJyB2ZXJ3ZW5kZXRcclxuICAgICAgbGV0IGJhc2VDb2xvcjogc3RyaW5nID0gdGhpcy5rZWVwQ3VzdG9tQmdDb2xvciAmJiAhIXRoaXMuY3VzdG9tQmdDb2xvciA/IHRoaXMuY3VzdG9tQmdDb2xvciA6XHJcbiAgICAgICAgLy8gU29uc3Qgd2VubiBlaW4gVGhlbWUgZ2VzZXR6dCBpc3QsIHdpcmQgZGllIGVudHNwcmVjaGVuZGUgRmFyYmUgZGVzIFRoZW1lcyB2ZXJ3ZW5kZXRcclxuICAgICAgICB0aGlzLnByaW1hcnkgPyBfLmlzT2JqZWN0KHRoaXMuYnV0dG9uUHJpbWFyeSkgPyAodGhpcy5idXR0b25QcmltYXJ5IGFzIE1yZEJhc2VDb2xvclRoZW1lKS5iYWNrZ3JvdW5kIDogdGhpcy5idXR0b25QcmltYXJ5IGFzIHN0cmluZyA6XHJcbiAgICAgICAgdGhpcy5hY2NlbnQgPyBfLmlzT2JqZWN0KHRoaXMuYnV0dG9uQWNjZW50KSA/ICh0aGlzLmJ1dHRvbkFjY2VudCBhcyBNcmRCYXNlQ29sb3JUaGVtZSkuYmFja2dyb3VuZCA6IHRoaXMuYnV0dG9uQWNjZW50IGFzIHN0cmluZyA6XHJcbiAgICAgICAgdGhpcy53YXJuID8gXy5pc09iamVjdCh0aGlzLmJ1dHRvbldhcm4pID8gKHRoaXMuYnV0dG9uV2FybiBhcyBNcmRCYXNlQ29sb3JUaGVtZSkuYmFja2dyb3VuZCA6IHRoaXMuYnV0dG9uV2FybiBhcyBzdHJpbmcgOlxyXG4gICAgICAgIC8vIFNvbnN0IHdlbm4gJ2N1c3RvbUJnQ29sb3InIGdlc2V0enQgaXN0LCB3aXJkICdjdXN0b21CZ0NvbG9yJyB2ZXJ3ZW5kZXQsIHNvbnN0ICdjdXN0b21UZXh0Q29sb3InXHJcbiAgICAgICAgISF0aGlzLmN1c3RvbUJnQ29sb3IgPyB0aGlzLmN1c3RvbUJnQ29sb3IgOiB0aGlzLmN1c3RvbVRleHRDb2xvcjtcclxuXHJcbiAgICAgIC8vIFdlbm4gJ2tlZXBDdXN0b21UZXh0Q29sb3InIGdlc2V0enQgaXN0LCBkYW5uIHdpcmQgJ2N1c3RvbVRleHRDb2xvcicgYWxzICdiYXNlVGV4dENvbG9yJyB2ZXJ3ZW5kZXRcclxuICAgICAgbGV0IGJhc2VUZXh0Q29sb3IgPSB0aGlzLmtlZXBDdXN0b21UZXh0Q29sb3IgJiYgISF0aGlzLmN1c3RvbVRleHRDb2xvciA/IHRoaXMuY3VzdG9tVGV4dENvbG9yIDpcclxuICAgICAgICAvLyBTb25zdCB3ZW5uIGVpbiBUaGVtZSBnZXNldHp0IGlzdCwgd2lyZCBkaWUgZW50c3ByZWNoZW5kZSBGYXJiZSBkZXMgVGhlbWVzIHZlcndlbmRldFxyXG4gICAgICAgIHRoaXMucHJpbWFyeSA/IF8uaXNPYmplY3QodGhpcy5idXR0b25QcmltYXJ5KSA/ICh0aGlzLmJ1dHRvblByaW1hcnkgYXMgTXJkQmFzZUNvbG9yVGhlbWUpLnRleHQgOiB0aGlzLmJ1dHRvblByaW1hcnkgYXMgc3RyaW5nIDpcclxuICAgICAgICB0aGlzLmFjY2VudCA/IF8uaXNPYmplY3QodGhpcy5idXR0b25BY2NlbnQpID8gKHRoaXMuYnV0dG9uQWNjZW50IGFzIE1yZEJhc2VDb2xvclRoZW1lKS50ZXh0IDogdGhpcy5idXR0b25BY2NlbnQgYXMgc3RyaW5nIDpcclxuICAgICAgICB0aGlzLndhcm4gPyBfLmlzT2JqZWN0KHRoaXMuYnV0dG9uV2FybikgPyAodGhpcy5idXR0b25XYXJuIGFzIE1yZEJhc2VDb2xvclRoZW1lKS50ZXh0IDogdGhpcy5idXR0b25XYXJuIGFzIHN0cmluZyA6XHJcbiAgICAgICAgLy8gU29uc3Qgd2VubiAnY3VzdG9tVGV4dENvbG9yJyBnZXNldHp0IGlzdCwgd2lyZCAnY3VzdG9tVGV4dENvbG9yJyB2ZXJ3ZW5kZXQsIHNvbnN0ICd0ZXh0RGFya0NvbG9yJ1xyXG4gICAgICAgICEhdGhpcy5jdXN0b21UZXh0Q29sb3IgPyB0aGlzLmN1c3RvbVRleHRDb2xvciA6IHRoaXMudGV4dERhcmtDb2xvcjtcclxuXHJcbiAgICAgIC8vICdiZ0NvbG9yJyB3aXJkIGF1ZiAnYmFzZUNvbG9yJyBnZXNldHp0XHJcbiAgICAgIHRoaXMuYmdDb2xvciA9IGJhc2VDb2xvcjtcclxuICAgICAgLy8gV2VubiAna2VlcEN1c3RvbVRleHRDb2xvcicgb2RlciBrZWluIFRoZW1hIHVuZCAnY3VzdG9tQmdDb2xvcicsIHVuZCAnY3VzdG9tVGV4dENvbG9yJyBnZXNldHp0IHNpbmQsIHdpcmQgJ3RleHRDb2xvcicgYXVmICdjdXN0b21UZXh0Q29sb3InIGdlc2V0enRcclxuICAgICAgdGhpcy50ZXh0Q29sb3IgPSAodGhpcy5rZWVwQ3VzdG9tVGV4dENvbG9yIHx8ICh0aGVtZXNDb3VudCA9PT0gMCAmJiB0aGlzLmN1c3RvbUJnQ29sb3IpKSAmJiAhIXRoaXMuY3VzdG9tVGV4dENvbG9yID8gdGhpcy5jdXN0b21UZXh0Q29sb3IgOlxyXG4gICAgICAgIC8vIFNvbnN0IHdlbm4gZWluIFRoZW1hIHVuZCAna2VlcEN1c3RvbUJnQ29sb3InIGdlc2V0enQgaXN0LCB3aXJkICdiYXNlVGV4dENvbG9yJyB2ZXJ3ZW5kZXRcclxuICAgICAgICAodGhlbWVzQ291bnQgPT09IDEgJiYgdGhpcy5rZWVwQ3VzdG9tQmdDb2xvcikgPyBiYXNlVGV4dENvbG9yIDpcclxuICAgICAgICAvLyBTb25zdCwgd2VubiBkaWUgQXBwZWFyYW5jZSBuaWNodCBUb2dnbGUgaXN0IG9kZXIgZGVyIFRvZ2dsZS1CdXR0b24gc2VsZWt0aWVydCBpc3QsXHJcbiAgICAgICAgLy8gd2lyZCBhbmhhbmQgZGVyICdiYXNlQ29sb3InIGVudHNjaGllZGVuLCBvYiAndGV4dERhcmtDb2xvcicgb2RlciAndGV4dExpZ2h0Q29sb3InIHZlcndlbmRldCB3aXJkXHJcbiAgICAgICAgdGhpcy50b2dnbGUgPyB0aGlzLnRvZ2dsZVNlbGVjdGVkICYmIHRoaXMuY3VzdG9tVG9nZ2xlU2VsZWN0ZWRUZXh0Q29sb3IgPyB0aGlzLmN1c3RvbVRvZ2dsZVNlbGVjdGVkVGV4dENvbG9yIDpcclxuICAgICAgICAgICF0aGlzLnRvZ2dsZVNlbGVjdGVkICYmIHRoaXMuY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvciA/IHRoaXMuY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvciA6XHJcbiAgICAgICAgLyohdGhpcy50b2dnbGUgfHwqLyB0aGlzLnRvZ2dsZVNlbGVjdGVkID8gQ29sb3JVdGlsLnNob3VsZFRleHRCZURhcmsoYmFzZUNvbG9yKSA/IHRoaXMudGV4dERhcmtDb2xvciA6IHRoaXMudGV4dExpZ2h0Q29sb3IgOlxyXG4gICAgICAgIENvbG9yVXRpbC5zaG91bGRUZXh0QmVEYXJrKHRoaXMudG9nZ2xlVW5zZWxlY3RlZENvbG9yKSA/IHRoaXMudGV4dERhcmtDb2xvciA6IHRoaXMudGV4dExpZ2h0Q29sb3IgOlxyXG4gICAgICAgIC8vIFdlbm4gZGllIEFwcGVhcmFuY2UgVG9nZ2xlIGlzdCB1bmQgZGVyIEJ1dHRvbiBuaWNodCBzZWxla3RpZXJ0IGlzdCB1bmQgJ2N1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRUZXh0Q29sb3InIGdlc2V0enQgaXN0LFxyXG4gICAgICAgIC8vIHdpcmQgZGllc2UgdmVyd2VuZGV0XHJcbiAgICAgICAgLy8gdGhpcy5jdXN0b21Ub2dnbGVVbnNlbGVjdGVkVGV4dENvbG9yID8gdGhpcy5jdXN0b21Ub2dnbGVVbnNlbGVjdGVkVGV4dENvbG9yIDpcclxuICAgICAgICAvLyBTb25zdCB3aXJkIGFuaGFuZCB2b24gJ3RvZ2dsZVVuc2VsZWN0ZWRDb2xvcicgZW50c2NoaWVkZW4sIG9iICd0ZXh0RGFya0NvbG9yJyBvZGVyICd0ZXh0TGlnaHRDb2xvcicgdmVyd2VuZGV0IHdpcmRcclxuICAgICAgICBDb2xvclV0aWwuc2hvdWxkVGV4dEJlRGFyayhiYXNlQ29sb3IpID8gdGhpcy50ZXh0RGFya0NvbG9yIDogdGhpcy50ZXh0TGlnaHRDb2xvcjtcclxuICAgICAgICAvLyBTb25zdCB3aXJkICd0b2dnbGVVbnNlbGVjdGVkVGV4dENvbG9yJyB2ZXJ3ZW5kZXRcclxuICAgICAgLy8gJ2hvdmVyQ29sb3InIHdpcmQgYXVmIDIwJSB0cmFuc3BhcmVudGUgVmVyc2lvbiB2b24gJ2Jhc2VDb2xvcicgZ2VzZXR6dFxyXG4gICAgICB0aGlzLmhvdmVyQ29sb3IgPSBDb2xvclV0aWwuY2hhbmdlQ29sb3JPcGFjaXR5KGJhc2VDb2xvciwgMjApO1xyXG4gICAgICAvLyAnYWN0aXZlQ29sb3InIHdpcmQgYXVmIDMwJSB0cmFuc3BhcmVudGUgVmVyc2lvbiB2b24gJ2Jhc2VDb2xvcicgbWl0IDEwJSBoZWxsZXJlciBGYXJiZSBnZXNldHp0XHJcbiAgICAgIHRoaXMuYWN0aXZlQ29sb3IgPSBDb2xvclV0aWwuY2hhbmdlQ29sb3JPcGFjaXR5KENvbG9yVXRpbC5jaGFuZ2VDb2xvckJyaWdodG5lc3NQZXJjZW50KGJhc2VDb2xvciwgMTApLCAzMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRsO8ciBkZW4gU3RhbmRhcmQtU3R5bGUsIE91dGxpbmUtU3R5bGUgdW5kIEljb24tU3R5bGVcclxuICAgIGlmIChhcHBlYXJhbmNlQ291bnQgPT09IDAgfHwgdGhpcy5vdXRsaW5lIHx8IHRoaXMuaWNvbikge1xyXG4gICAgICAvLyBXZW5uIGVpbiBUaGVtYSB1bmQgJ2tlZXBDdXN0b21CZ0NvbG9yJyBuaWNodCBnZXNldHogaXN0IE9ERVJcclxuICAgICAgLy8ga2VpbmUgJ2N1c3RvbUJnQ29sb3InLCBhYmVyICdjdXN0b21UZXh0Q29sb3InIGdlc2V0enQgc2luZC4uLlxyXG4gICAgICBpZiAoKHRoZW1lc0NvdW50ID09PSAxICYmICF0aGlzLmtlZXBDdXN0b21CZ0NvbG9yKSB8fCAoIXRoaXMuY3VzdG9tQmdDb2xvciAmJiB0aGlzLmN1c3RvbVRleHRDb2xvcikpIHtcclxuICAgICAgICAvLyAuLi4gd2lyZCAndGV4dENvbG9yJywgZmFsbHMgbmljaHQgZHVyY2ggJ2tlZXBDdXN0b21UZXh0Q29sb3InIHVuZCAnY3VzdG9tVGV4dENvbG9yJyBmZXN0LCBhdWYgJ2JnQ29sb3InIGdlc2V0enRcclxuICAgICAgICB0aGlzLnRleHRDb2xvciA9ICh0aGlzLmtlZXBDdXN0b21UZXh0Q29sb3IgJiYgISF0aGlzLmN1c3RvbVRleHRDb2xvcikgPyB0aGlzLmN1c3RvbVRleHRDb2xvciA6IHRoaXMuYmdDb2xvcjtcclxuICAgICAgICAvLyAuLi4gd2lyZCAnYmdDb2xvcicsIGZhbGxzIG5pY2h0IGR1cmNoICdrZWVwQ3VzdG9tQmdDb2xvcicgdW5kICdjdXN0b21CZ0NvbG9yJyBmZXN0LCBhdWYgZGllIFN0YW5kYXJkLUhpbnRlcmdydW5kZmFyYmUgZ2VzZXR6dFxyXG4gICAgICAgIHRoaXMuYmdDb2xvciA9ICh0aGlzLmtlZXBDdXN0b21CZ0NvbG9yICYmICEhdGhpcy5jdXN0b21CZ0NvbG9yKSA/IHRoaXMuY3VzdG9tQmdDb2xvciA6IHRoaXMuX2NvbmZpZy5idXR0b24uYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmFsbHMga2VpbmUgJ3Byb2dyZXNzQ29sb3InIGdlc2V0enQgaXN0Li4uXHJcbiAgICBpZiAoIXRoaXMucHJvZ3Jlc3NDb2xvcikge1xyXG4gICAgICAvLyAuLi4gdW5kIHdpciBlaW4gVGhlbWUgb2RlciBlaW5lIGJlbnV0emVyZGVmaW5pZXJ0ZSBUZXh0ZmFyYmUgb2RlciBIaW50ZXJncnVuZGZhcmJlIGhhYmVuLi4uXHJcbiAgICAgIGlmICh0aGVtZXNDb3VudCA9PT0gMSB8fCB0aGlzLmN1c3RvbVRleHRDb2xvciB8fCB0aGlzLmN1c3RvbUJnQ29sb3IpIHtcclxuICAgICAgICAvLyAuLi4gd2lyZCAncHJvZ3Jlc3NDb2xvcicgZsO8ciBkZW4gU3RhbmRhcmQtU3R5bGUsIE91dGxpbmUtU3R5bGUgdW5kIEljb24tU3R5bGUgYXVmICd0ZXh0Q29sb3InIGdlc2V0enQsXHJcbiAgICAgICAgLy8gYW5zb25zdGVuIGF1ZiAyMCUgaGVsbGVyZSBWZXJzaW9uIHZvbiAnYmdDb2xvcidcclxuICAgICAgICBpZiAoYXBwZWFyYW5jZUNvdW50ID09PSAwIHx8IHRoaXMub3V0bGluZSB8fCB0aGlzLmljb24pIHtcclxuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NDb2xvciA9IHRoaXMudGV4dENvbG9yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnByb2dyZXNzQ29sb3IgPSBDb2xvclV0aWwuY2hhbmdlQ29sb3JCcmlnaHRuZXNzUGVyY2VudCh0aGlzLmJnQ29sb3IsIDIwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gT2huZSBUaGVtZSB1bmQgYmVudXR6ZXJkZWZpbmllcnRlIEZhcmJlbiB3aXJkICdwcm9ncmVzc0NvbG9yJyBhdWYgZGllIEdydW5kLVByb2dyZXNzLUNvbG9yIGdlc2V0enRcclxuICAgICAgICB0aGlzLnByb2dyZXNzQ29sb3IgPSB0aGlzLmJ1dHRvblByb2dyZXNzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmFsbHMga2VpbiBleHBsaXppZXRlciAndG9vbHRpcFRleHQnIGdlc2V0enQgaXN0LCB3aXJkIGRlciBUZXh0IGRlcyBCdXR0b25zIGFscyBUb29sdGlwLVRleHQgdmVyd2VuZGV0XHJcbiAgICBpZiAodGhpcy5tcmRCdXR0b25UZXh0Q29udGVudCAmJiAhdGhpcy50b29sdGlwVGV4dCkge1xyXG4gICAgICB0aGlzLnRvb2x0aXBUZXh0ID0gdGhpcy5tcmRCdXR0b25UZXh0Q29udGVudC5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnRvZ2dsZSAmJiB0aGlzLnRvZ2dsZVNlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0enQgZGllIFN0YW5kYXJkLVN0eWxlcyBhbmhhbmQgZGVyIEtvbmZpZ3VyYXRpb24gdW5kIGRlciBnZXNldHp0ZW4gQXR0cmlidXRlLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBpbml0QmFzZVN0eWxlKCk6IHZvaWQge1xyXG4gICAgbGV0IGFwcGVhcmFuY2U6IE1yZEJ1dHRvbkFwcGVhcmFuY2UgPSB0aGlzLmljb24gPyBNcmRCdXR0b25BcHBlYXJhbmNlLklDT04gOiB0aGlzLnJhaXNlZCA/IE1yZEJ1dHRvbkFwcGVhcmFuY2UuUkFJU0VEIDpcclxuICAgICAgdGhpcy5vdXRsaW5lID8gTXJkQnV0dG9uQXBwZWFyYW5jZS5PVVRMSU5FIDogdGhpcy5mbGF0ID8gTXJkQnV0dG9uQXBwZWFyYW5jZS5GTEFUIDogdGhpcy5mYWIgPyBNcmRCdXR0b25BcHBlYXJhbmNlLkZBQiA6XHJcbiAgICAgIHRoaXMubWluaUZhYiA/IE1yZEJ1dHRvbkFwcGVhcmFuY2UuTUlOSV9GQUIgOiB0aGlzLnRvZ2dsZSA/IE1yZEJ1dHRvbkFwcGVhcmFuY2UuVE9HR0xFIDogbnVsbDsvL01yZEJ1dHRvbkFwcGVhcmFuY2UuREVGQVVMVDtcclxuICAgIHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlID0gdGhpcy51bmNvbGxhcHNlZEFwcGVhcmFuY2UgIT09IHVuZGVmaW5lZCA/IHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlIDogYXBwZWFyYW5jZTtcclxuXHJcbiAgICB0aGlzLmJ1dHRvblByaW1hcnkgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5wcmltYXJ5IHx8IHRoaXMuX2NvbmZpZy5idXR0b24ucHJpbWFyeSB8fCB0aGlzLl9jb25maWcuYmFzZUNvbG9ycy5wcmltYXJ5O1xyXG4gICAgdGhpcy5idXR0b25BY2NlbnQgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5hY2NlbnQgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5hY2NlbnQgfHwgdGhpcy5fY29uZmlnLmJhc2VDb2xvcnMuYWNjZW50O1xyXG4gICAgdGhpcy5idXR0b25XYXJuID0gdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8ud2FybiB8fCB0aGlzLl9jb25maWcuYnV0dG9uLndhcm4gfHwgdGhpcy5fY29uZmlnLmJhc2VDb2xvcnMud2FybjtcclxuICAgIHRoaXMuYnV0dG9uRGlzYWJsZWQgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5kaXNhYmxlZCB8fCB0aGlzLl9jb25maWcuYnV0dG9uLmRpc2FibGVkXHJcbiAgICB0aGlzLmJ1dHRvblByb2dyZXNzID0gdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8ucHJvZ3Jlc3NDb2xvciB8fCB0aGlzLl9jb25maWcuYnV0dG9uPy5wcm9ncmVzc0NvbG9yIHx8XHJcbiAgICAgIChfLmlzT2JqZWN0KHRoaXMuYnV0dG9uUHJpbWFyeSkgPyAodGhpcy5idXR0b25QcmltYXJ5IGFzIE1yZEJhc2VDb2xvclRoZW1lKS50ZXh0IDogdGhpcy5idXR0b25QcmltYXJ5IGFzIHN0cmluZyk7XHJcblxyXG4gICAgdGhpcy5iZ0NvbG9yID0gdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8uYmFja2dyb3VuZENvbG9yIHx8IHRoaXMuX2NvbmZpZy5idXR0b24uYmFja2dyb3VuZENvbG9yO1xyXG4gICAgdGhpcy50ZXh0TGlnaHRDb2xvciA9IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LnRleHRMaWdodENvbG9yIHx8IHRoaXMuX2NvbmZpZy5idXR0b24udGV4dExpZ2h0Q29sb3I7XHJcbiAgICB0aGlzLnRleHREYXJrQ29sb3IgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy50ZXh0RGFya0NvbG9yIHx8IHRoaXMuX2NvbmZpZy5idXR0b24udGV4dERhcmtDb2xvcjtcclxuICAgIHRoaXMudGV4dENvbG9yID0gdGhpcy50ZXh0RGFya0NvbG9yO1xyXG4gICAgdGhpcy5ob3ZlckNvbG9yID0gdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8uaG92ZXJDb2xvciB8fCB0aGlzLl9jb25maWcuYnV0dG9uLmhvdmVyQ29sb3I7XHJcbiAgICB0aGlzLmFjdGl2ZUNvbG9yID0gdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8uYWN0aXZlQ29sb3IgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5hY3RpdmVDb2xvcjtcclxuICAgIHRoaXMuZGlzYWJsZWRUZXh0Q29sb3IgPSB0aGlzLmJ1dHRvbkRpc2FibGVkLnRleHQ7XHJcbiAgICB0aGlzLmRpc2FibGVkQmdDb2xvciA9IHRoaXMuYnV0dG9uRGlzYWJsZWQuYmFja2dyb3VuZDtcclxuICAgIHRoaXMudG9nZ2xlVW5zZWxlY3RlZENvbG9yID0gdGhpcy5jdXN0b21Ub2dnbGVVbnNlbGVjdGVkQ29sb3IgfHwgdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8udW5zZWxlY3RlZEJnQ29sb3I7XHJcblxyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LmJvcmRlcikge1xyXG4gICAgICBpZiAoXy5pc09iamVjdCh0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdLmJvcmRlcikpIHtcclxuICAgICAgICB0aGlzLmJvcmRlcldpZHRoID0gKHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0uYm9yZGVyIGFzIE1yZEJvcmRlcikud2lkdGg7XHJcbiAgICAgICAgdGhpcy5ib3JkZXJTdHlsZSA9ICh0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdLmJvcmRlciBhcyBNcmRCb3JkZXIpLnN0eWxlO1xyXG4gICAgICAgIHRoaXMuYm9yZGVyQ29sb3IgPSAodGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXS5ib3JkZXIgYXMgTXJkQm9yZGVyKS5jb2xvcjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgYm9yZGVyID0gICh0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdLmJvcmRlciBhcyBzdHJpbmcpLnNwbGl0KCcgJylcclxuICAgICAgICB0aGlzLmJvcmRlcldpZHRoID0gYm9yZGVyWzBdO1xyXG4gICAgICAgIHRoaXMuYm9yZGVyU3R5bGUgPSBib3JkZXJbMV07XHJcbiAgICAgICAgdGhpcy5ib3JkZXJDb2xvciA9IGJvcmRlclsyXTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ib3JkZXJXaWR0aCA9IF8uaXNPYmplY3QodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIpID8gKHRoaXMuX2NvbmZpZy5idXR0b24uYm9yZGVyIGFzIE1yZEJvcmRlcik/LndpZHRoIDogKHRoaXMuX2NvbmZpZy5idXR0b24uYm9yZGVyIGFzIHN0cmluZykuc3BsaXQoJyAnKVswXTtcclxuICAgICAgdGhpcy5ib3JkZXJTdHlsZSA9IF8uaXNPYmplY3QodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIpID8gKHRoaXMuX2NvbmZpZy5idXR0b24uYm9yZGVyIGFzIE1yZEJvcmRlcik/LnN0eWxlIDogKHRoaXMuX2NvbmZpZy5idXR0b24uYm9yZGVyIGFzIHN0cmluZykuc3BsaXQoJyAnKVsxXTtcclxuICAgICAgdGhpcy5ib3JkZXJDb2xvciA9IF8uaXNPYmplY3QodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIpID8gKHRoaXMuX2NvbmZpZy5idXR0b24uYm9yZGVyIGFzIE1yZEJvcmRlcik/LmNvbG9yIDogKHRoaXMuX2NvbmZpZy5idXR0b24uYm9yZGVyIGFzIHN0cmluZykuc3BsaXQoJyAnKVsyXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1pbkhlaWdodCA9IHRoaXMubWluSGVpZ2h0IHx8IHRoaXMuZGlhbWV0ZXIgfHwgdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8ubWluSGVpZ2h0IHx8IHRoaXMuX2NvbmZpZy5idXR0b24ubWluSGVpZ2h0O1xyXG4gICAgdGhpcy5mb250U2l6ZSA9IHRoaXMuZm9udFNpemUgfHwgdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8uZm9udFNpemUgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5mb250U2l6ZSB8fCB0aGlzLl9jb25maWcuYmFzZUZvbnQuc2l6ZTtcclxuICAgIHRoaXMuZm9udEZhbWlseSA9IHRoaXMuZm9udEZhbWlseSB8fCB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5mb250RmFtaWx5IHx8IHRoaXMuX2NvbmZpZy5idXR0b24uZm9udEZhbWlseSB8fCB0aGlzLl9jb25maWcuYmFzZUZvbnQuZmFtaWx5O1xyXG4gICAgdGhpcy5kaWFtZXRlciA9IHRoaXMuZGlhbWV0ZXIgfHwgdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8uZGlhbWV0ZXIgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5kaWFtZXRlcjtcclxuICAgIHRoaXMuaWNvblNpemUgPSB0aGlzLmljb25TaXplIHx8IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/Lmljb25TaXplIHx8IHRoaXMuX2NvbmZpZy5idXR0b24uaWNvblNpemU7XHJcbiAgICB0aGlzLmJvcmRlclJhZGl1cyA9IHRoaXMuYm9yZGVyUmFkaXVzIHx8IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LmJvcmRlclJhZGl1cyB8fCB0aGlzLl9jb25maWcuYnV0dG9uLmJvcmRlclJhZGl1cztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrLCB3ZW5uIHNpY2ggZGVyIENvbGxhYnMtU3RhdHVzIGRlcyBCdXR0b25zIMOkbmRlcnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaXNDb2xsYXBzZWQgR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBrb2xsYWJpZXJ0IGlzdC5cclxuICAgKi9cclxuICBwdWJsaWMgYnV0dG9uQ29sbGFwc2VkKGlzQ29sbGFwc2VkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAvLyBXaXIgcmVhZ2llcmVuIG51ciwgd2VubiBzaWNoIGRlciBTdGF0dXMgw6RuZGVydFxyXG4gICAgaWYgKHRoaXMuaXNDb2xsYXBzZWQgIT09IGlzQ29sbGFwc2VkKSB7XHJcbiAgICAgIHRoaXMuaXNDb2xsYXBzZWQgPSBpc0NvbGxhcHNlZDtcclxuICAgICAgLy8gV2VubiAnY29sbGFwc2VUbycgZ2VzZXR6dCBpc3QsIHdpcmQgZGVyIEJ1dHRvbiBlbnRzcHJlY2hlbmQgdW1nZXN0eWx0XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmNvbGxhcHNlVG8pKSB7XHJcbiAgICAgICAgLy8gRGllc2UgV2VydGUgbcO8c3NlbiB6dXLDvGNrZ2VzZXR6dCB3ZXJkZW4sIGRhIHNpZSBmw7xyIGRlbiBuZXVlbiBTdHlsZSBuZXUgZ2VzZXR6dCB3ZXJkZW4gbcO8c3NlblxyXG4gICAgICAgIHRoaXMuYm9yZGVyUmFkaXVzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZm9udFNpemUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5taW5IZWlnaHQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5kaWFtZXRlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmljb25TaXplID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmIChpc0NvbGxhcHNlZCkge1xyXG4gICAgICAgICAgdGhpcy5pY29uID0gdGhpcy5jb2xsYXBzZVRvID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLklDT04gPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnJhaXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5vdXRsaW5lID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmZsYXQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuZmFiID0gdGhpcy5jb2xsYXBzZVRvID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLkZBQiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubWluaUZhYiA9IHRoaXMuY29sbGFwc2VUbyA9PT0gTXJkQnV0dG9uQXBwZWFyYW5jZS5NSU5JX0ZBQiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubmdBZnRlclZpZXdJbml0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaWNvbiA9IHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLklDT04gPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnJhaXNlZCA9IHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLlJBSVNFRCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMub3V0bGluZSA9IHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLk9VVExJTkUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmZsYXQgPSB0aGlzLnVuY29sbGFwc2VkQXBwZWFyYW5jZSA9PT0gTXJkQnV0dG9uQXBwZWFyYW5jZS5GTEFUID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5mYWIgPSB0aGlzLnVuY29sbGFwc2VkQXBwZWFyYW5jZSA9PT0gTXJkQnV0dG9uQXBwZWFyYW5jZS5GQUIgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm1pbmlGYWIgPSB0aGlzLnVuY29sbGFwc2VkQXBwZWFyYW5jZSA9PT0gTXJkQnV0dG9uQXBwZWFyYW5jZS5NSU5JX0ZBQiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubmdBZnRlclZpZXdJbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgXHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5jbGljay5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmVudW0gTXJkQnV0dG9uQXBwZWFyYW5jZSB7XHJcbiAgLy8gREVGQVVMVCA9IG51bGwsXHJcbiAgSUNPTiA9ICdpY29uJyxcclxuICBSQUlTRUQgPSAncmFpc2VkJyxcclxuICBPVVRMSU5FID0gJ291dGxpbmUnLFxyXG4gIEZMQVQgPSAnZmxhdCcsXHJcbiAgRkFCID0gJ2ZhYicsXHJcbiAgTUlOSV9GQUIgPSAnbWluaUZhYicsXHJcbiAgVE9HR0xFID0gJ3RvZ2dsZSdcclxufVxyXG4iLCI8IS0tIERlciBlaWdlbnRsaWNoIEhUTUwtQnV0dG9uIC0tPlxyXG48YnV0dG9uIGNsYXNzPVwibXJkLWJ1dHRvbi1jb250YWluZXJcIlxyXG4gICNidXR0b25Db250YWluZXJcclxuICBbc3R5bGUuLS1iZy1jb2xvcl09XCJiZ0NvbG9yXCJcclxuICBbc3R5bGUuLS10ZXh0LWNvbG9yXT1cInRleHRDb2xvclwiXHJcbiAgW3N0eWxlLi0tZGlzYWJsZWQtdGV4dC1jb2xvcl09XCJkaXNhYmxlZFRleHRDb2xvclwiXHJcbiAgW3N0eWxlLi0tZGlzYWJsZWQtYmctY29sb3JdPVwiZGlzYWJsZWRCZ0NvbG9yXCJcclxuICBbc3R5bGUuLS1ib3JkZXItd2lkdGhdPVwiYm9yZGVyV2lkdGhcIlxyXG4gIFtzdHlsZS4tLWJvcmRlci1jb2xvcl09XCJib3JkZXJDb2xvclwiXHJcbiAgW3N0eWxlLi0tYm9yZGVyLXN0eWxlXT1cImJvcmRlclN0eWxlXCJcclxuICBbc3R5bGUuLS1ib3JkZXItcmFkaXVzXT1cImJvcmRlclJhZGl1c1wiXHJcbiAgW3N0eWxlLi0tbWluLWhlaWdodF09XCJtaW5IZWlnaHRcIlxyXG4gIFtzdHlsZS4tLWZvbnQtc2l6ZV09XCJmb250U2l6ZVwiXHJcbiAgW3N0eWxlLi0tZm9udC1mYW1pbHldPVwiZm9udEZhbWlseVwiXHJcbiAgW3N0eWxlLi0tZGlhbWV0ZXJdPVwiZGlhbWV0ZXJcIlxyXG4gIFtzdHlsZS4tLWljb24tc2l6ZV09XCJpY29uU2l6ZVwiXHJcbiAgW3N0eWxlLi0tdW5zZWxlY3RlZC1jb2xvcl09XCJ0b2dnbGVVbnNlbGVjdGVkQ29sb3JcIlxyXG5cclxuICBbbmdTdHlsZV09XCJ7J21pbi13aWR0aCc6IGZpdENvbnRlbnQgPyAnZml0LWNvbnRlbnQnIDogJ3Vuc2V0J31cIlxyXG4gIFtuZ0NsYXNzXT1cInsnbXJkLWljb24tYnV0dG9uJzogaWNvbiwgJ21yZC1yYWlzZWQtYnV0dG9uJzogcmFpc2VkLCAnbXJkLW91dGxpbmUtYnV0dG9uJzogb3V0bGluZSxcclxuICAgICdtcmQtZmxhdC1idXR0b24nOiBmbGF0LCAnbXJkLWZhYi1idXR0b24nOiBmYWIsICdtcmQtbWluaS1mYWItYnV0dG9uJzogbWluaUZhYiwgJ21yZC10b2dnbGUtYnV0dG9uJzogdG9nZ2xlLFxyXG4gICAgJ21yZC10b2dnbGUtc2VsZWN0ZWQnOiB0b2dnbGVTZWxlY3RlZCwgJ2Rpc2FibGVkJzogZGlzYWJsZWR9XCJcclxuXHJcbiAgW21yZFRvb2xUaXBdPVwidG9vbHRpcFRleHRcIiBbc2hvd09uVHJ1bmNhdGVkRWxlbWVudF09XCJ0b29sdGlwSWZUcnVuY2F0ZWQgPyBtcmRCdXR0b25UZXh0Q29udGVudCA6IHVuZGVmaW5lZFwiIFtzaG93VG9vbFRpcF09XCJzaG93VG9vbHRpcFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJtcmQtYnV0dG9uLWJhY2tncm91bmRcIj5cclxuICAgIDwhLS0gRWluIE92ZXJsYXkgw7xiZXIgZGVtIEJ1dHRvbiB3ZWxjaGVzIGRlbiBIb3Zlci0gdW5kIEFjdGl2ZS1FZmZla3QgYW56ZWlndCAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJtcmQtYnV0dG9uLWZvY3VzXCIgW3N0eWxlLi0taG92ZXItY29sb3JdPVwiaG92ZXJDb2xvclwiIFtzdHlsZS4tLWFjdGl2ZS1jb2xvcl09XCJhY3RpdmVDb2xvclwiPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDwhLS0gRWluIE92ZXJsYXkgw7xiZXIgZGVtIEJ1dHRvbiB3ZWxjaGVzIGRlbiBIb3Zlci0gdW5kIEFjdGl2ZS1FZmZla3QgYW56ZWlndCAtLT5cclxuICA8IS0tIDxkaXYgY2xhc3M9XCJtcmQtYnV0dG9uLWZvY3VzXCIgW3N0eWxlLi0taG92ZXItY29sb3JdPVwiaG92ZXJDb2xvclwiIFtzdHlsZS4tLWFjdGl2ZS1jb2xvcl09XCJhY3RpdmVDb2xvclwiPjwvZGl2PiAtLT5cclxuICA8IS0tIERlciBDb250ZW50IGRlcyBCdXR0b25zIC0tPlxyXG4gIDxzcGFuIGNsYXNzPVwibXJkLWJ1dHRvbi1jb250ZW50XCIgW25nQ2xhc3NdPVwieydpc0NvbGxhcHNlZCc6IGlzQ29sbGFwc2VkfVwiPlxyXG4gICAgPCEtLSBJY29ucyBsaW5rcyB2b20gVGV4dCAtLT5cclxuICAgIDxzcGFuIGNsYXNzPVwibXJkLWJ1dHRvbi1pY29uLWNvbnRlbnRcIiBbbmdDbGFzc109XCJ7J2Z1bGwtaWNvbic6IGZ1bGxJY29ufVwiIFtoaWRlSWZUcnVuY2F0ZWRdPVwiY29sbGFwc2VcIiBkaXNwbGF5U3RhdGU9XCJmbGV4XCIgcmVxdWlyZWRIaWRlQXR0cmlidXRlPVwiaWNvbi1jb2xsYXBzZVwiXHJcbiAgICAgIGNoZWNrQ2hpbGRyZW5Gb3JBdHRyaWJ1dGUgW2hpZGVPblRydW5jYXRlZEVsZW1lbnRdPVwibXJkQnV0dG9uVGV4dENvbnRlbnRcIiBbcGFyZW50UmVzaXplRWxlbWVudF09XCJ0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFwiPjxuZy1jb250ZW50IHNlbGVjdD1cIm1yZC1pY29uOm5vdChbaWNvbi1lbmRdKSwgW21yZC1pY29uXTpub3QoW2ljb24tZW5kXSlcIj48L25nLWNvbnRlbnQ+PC9zcGFuPlxyXG4gICAgPCEtLSBEZXIgVGV4dCBkZXMgQnV0dG9ucyAtLT5cclxuICAgIDxzcGFuIGNsYXNzPVwibXJkLWJ1dHRvbi10ZXh0LWNvbnRlbnRcIiAoaGlkZGVuQ2hhbmdlZCk9XCJidXR0b25Db2xsYXBzZWQoJGV2ZW50KVwiIFtoaWRlSWZUcnVuY2F0ZWRdPVwiY29sbGFwc2VcIiAjbXJkQnV0dG9uVGV4dENvbnRlbnQgW3BhcmVudFJlc2l6ZUVsZW1lbnRdPVwidGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcIj48bmctY29udGVudCBzZWxlY3Q9XCI6bm90KFttcmQtaWNvbl0pOm5vdChtcmQtaWNvbilcIj48L25nLWNvbnRlbnQ+PC9zcGFuPlxyXG4gICAgPCEtLSBJY29ucyByZWNodHMgdm9tIFRleHQgLS0+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm1yZC1idXR0b24taWNvbi1jb250ZW50XCIgW25nQ2xhc3NdPVwieydmdWxsLWljb24nOiBmdWxsSWNvbn1cIiBbaGlkZUlmVHJ1bmNhdGVkXT1cImNvbGxhcHNlXCIgZGlzcGxheVN0YXRlPVwiZmxleFwiIHJlcXVpcmVkSGlkZUF0dHJpYnV0ZT1cImljb24tY29sbGFwc2VcIlxyXG4gICAgICBjaGVja0NoaWxkcmVuRm9yQXR0cmlidXRlIFtoaWRlT25UcnVuY2F0ZWRFbGVtZW50XT1cIm1yZEJ1dHRvblRleHRDb250ZW50XCIgW3BhcmVudFJlc2l6ZUVsZW1lbnRdPVwidGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcIj48bmctY29udGVudCBzZWxlY3Q9XCJtcmQtaWNvbltpY29uLWVuZF0sIFttcmQtaWNvbl1baWNvbi1lbmRdXCI+PC9uZy1jb250ZW50Pjwvc3Bhbj5cclxuICA8L3NwYW4+XHJcbiAgPCEtLSBEaWUgUHJvZ3Jlc3MtQmFyIGVpbmVzIEJ1dHRvbnMgKG5pY2h0IGbDvHIgSWNvbi0sIEZhYi0gdW5kIE1pbmktRmFiLUJ1dHRvbnMpIC0tPlxyXG4gIDxtcmQtcHJvZ3Jlc3MtYmFyIGNsYXNzPVwibXJkLWJ1dHRvbi1wcm9ncmVzcy1iYXJcIlxyXG4gICAgKm5nSWY9XCIhZGlzYWJsZWQgJiYgIWljb24gJiYgIWZhYiAmJiAhbWluaUZhYiAmJiAoaXNMb2FkaW5nIHx8IGxvYWRpbmc/LnZhbHVlIHx8IGxvYWRpbmdQcm9ncmVzcz8udmFsdWUgfHwgbG9hZGluZ1Byb2dyZXNzPy52YWx1ZSA9PT0gMClcIlxyXG4gICAgW3ZhbHVlXT1cImxvYWRpbmdQcm9ncmVzcz8udmFsdWVcIiBbbW9kZV09XCJsb2FkaW5nUHJvZ3Jlc3MgPyAnZGV0ZXJtaW5hdGUnIDogJ2luZGV0ZXJtaW5hdGUnXCIgW2NvbG9yXT1cInByb2dyZXNzQ29sb3JcIj48L21yZC1wcm9ncmVzcy1iYXI+XHJcbiAgPCEtLSBEZXIgUHJvZ3Jlc3MtU3Bpbm5lciBlaW5lcyBCdXR0b25zIChudXIgZsO8ciBJY29uLSwgRmFiLSB1bmQgTWluaS1GYWItQnV0dG9ucykgLS0+XHJcbiAgPG1yZC1wcm9ncmVzcy1zcGlubmVyIGNsYXNzPVwibXJkLWJ1dHRvbi1wcm9ncmVzcy1zcGlubmVyXCJcclxuICAgICpuZ0lmPVwiIWRpc2FibGVkICYmIChpY29uIHx8IGZhYiB8fCBtaW5pRmFiKSAmJiAoaXNMb2FkaW5nIHx8IGxvYWRpbmc/LnZhbHVlIHx8IGxvYWRpbmdQcm9ncmVzcz8udmFsdWUgfHwgbG9hZGluZ1Byb2dyZXNzPy52YWx1ZSA9PT0gMClcIlxyXG4gICAgW3ZhbHVlXT1cImxvYWRpbmdQcm9ncmVzcz8udmFsdWVcIiBbbW9kZV09XCJsb2FkaW5nUHJvZ3Jlc3MgPyAnZGV0ZXJtaW5hdGUnIDogJ2luZGV0ZXJtaW5hdGUnXCIgW2NvbG9yXT1cInByb2dyZXNzQ29sb3JcIj48L21yZC1wcm9ncmVzcy1zcGlubmVyPlxyXG48L2J1dHRvbj5cclxuIl19