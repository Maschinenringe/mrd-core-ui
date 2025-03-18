import { BasePushStrategyObject, Util } from 'mrd-core';
import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, Output, ViewChild, booleanAttribute } from '@angular/core';
import { ColorUtil } from './../../../../common/util/color.util';
import { ConfigUtil } from './../../../../common/util/config.util';
import * as _ from 'underscore';
import { colorAttribute, colorThemeAttribute } from './../../../../common/transforms/color-transform';
import { sizeAttribute } from './../../../../common/transforms/size-transform';
import { CustomHoverIconDirective } from './../../../../common/directive/custom-hover-icon/custom-hover-icon.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../mrd-progress-bar/components/mrd-progress-bar/mrd-progress-bar.component";
import * as i3 from "../../../mrd-progress-spinner/components/mrd-progress-spinner/mrd-progress-spinner.component";
import * as i4 from "../../../mrd-tooltip/common/directive/tool-tip-renderer/tool-tip-renderer.directive";
import * as i5 from "../../../../common/directive/hide-if-truncated/hide-if-truncated.directive";
const _c0 = ["mrdButtonTextContent"];
function MrdButtonComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1, 1);
    i0.ɵɵelementContainerEnd();
} }
function MrdButtonComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 2);
} }
function MrdButtonComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1, 3);
    i0.ɵɵelementContainerEnd();
} }
function MrdButtonComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 4);
} }
function MrdButtonComponent_mrd_progress_bar_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mrd-progress-bar", 13);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r8.loadingProgress == null ? null : ctx_r8.loadingProgress.value)("mode", ctx_r8.loadingProgress ? "determinate" : "indeterminate")("color", ctx_r8.progressColor);
} }
function MrdButtonComponent_mrd_progress_spinner_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mrd-progress-spinner", 14);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r9.loadingProgress == null ? null : ctx_r9.loadingProgress.value)("mode", ctx_r9.loadingProgress ? "determinate" : "indeterminate")("color", ctx_r9.progressColor);
} }
const _c1 = [[["", 3, "mrd-icon", "", 3, "mrd-icon", ""]], [["mrd-icon", "customHoverIcon", ""], ["", "mrd-icon", "", "customHoverIcon", ""]], [["mrd-icon", 3, "customHoverIcon", "", 3, "icon-end", ""], ["", "mrd-icon", "", 3, "customHoverIcon", "", 3, "icon-end", ""]], [["mrd-icon", "customHoverIcon", ""], ["", "mrd-icon", "", "customHoverIcon", ""]], [["mrd-icon", "icon-end", "", 3, "customHoverIcon", ""], ["", "mrd-icon", "", "icon-end", "", 3, "customHoverIcon", ""]]];
const _c2 = function (a0) { return { "min-width": a0 }; };
const _c3 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) { return { "mrd-icon-button": a0, "mrd-raised-button": a1, "mrd-outline-button": a2, "mrd-flat-button": a3, "mrd-fab-button": a4, "mrd-mini-fab-button": a5, "mrd-toggle-button": a6, "mrd-toggle-selected": a7, "disabled": a8 }; };
const _c4 = function (a0) { return { "isCollapsed": a0 }; };
const _c5 = function (a0) { return { "full-icon": a0 }; };
const _c6 = [":not([mrd-icon]):not([mrd-icon])", "mrd-icon[customHoverIcon], [mrd-icon][customHoverIcon]", "mrd-icon:not([customHoverIcon]):not([icon-end]), [mrd-icon]:not([customHoverIcon]):not([icon-end])", "mrd-icon[customHoverIcon], [mrd-icon][customHoverIcon]", "mrd-icon[icon-end]:not([customHoverIcon]), [mrd-icon][icon-end]:not([customHoverIcon])"];
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
    renderer;
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
    customHoverColor;
    customHoverIconDir;
    hasCustomHoverIcon = false;
    isHovered = false;
    mouseEnterListener;
    mouseLeaveListener;
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
    constructor(cdr, renderer, elementRef) {
        super();
        this.cdr = cdr;
        this.renderer = renderer;
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
        this.hasCustomHoverIcon = !!this.customHoverIconDir;
        // Manuelles Anhängen der Mouseenter- und Mouseleave-Listener mit Renderer2
        this.mouseEnterListener = this.renderer.listen(this.elementRef.nativeElement, 'mouseenter', () => {
            this.isHovered = true;
            this.cdr.markForCheck();
        });
        this.mouseLeaveListener = this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', () => {
            this.isHovered = false;
            this.cdr.markForCheck();
        });
        this.cdr.detectChanges();
    }
    ngOnDestroy() {
        if (this.mouseEnterListener) {
            this.mouseEnterListener();
        }
        if (this.mouseLeaveListener) {
            this.mouseLeaveListener();
        }
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
            // wenn customHoverColor gegeben dann setze diese sonst wird 'hoverColor' auf eine 20% transparente Version von 'baseColor' gesetzt
            this.hoverColor = this.customHoverColor ? this.customHoverColor : ColorUtil.changeColorOpacity(baseColor, 20);
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
    /** @nocollapse */ static ɵfac = function MrdButtonComponent_Factory(t) { return new (t || MrdButtonComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdButtonComponent, selectors: [["mrd-button"]], contentQueries: function MrdButtonComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, CustomHoverIconDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.customHoverIconDir = _t.first);
        } }, viewQuery: function MrdButtonComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mrdButtonTextContent = _t.first);
        } }, hostVars: 8, hostBindings: function MrdButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("min-width", ctx.fitContent ? "fit-content" : "unset")("margin", ctx.toggle ? "0 -16px" : "unset")("transition", ctx.toggle ? "transform 0.2s" : "unset");
            i0.ɵɵclassProp("active", ctx.toggle && ctx.toggleSelected);
        } }, inputs: { icon: ["icon-button", "icon", booleanAttribute], raised: ["raised-button", "raised", booleanAttribute], outline: ["outline-button", "outline", booleanAttribute], flat: ["flat-button", "flat", booleanAttribute], fab: ["fab-button", "fab", booleanAttribute], miniFab: ["miniFab-button", "miniFab", booleanAttribute], toggle: ["toggle-button", "toggle", booleanAttribute], toggleSelected: ["selected", "toggleSelected", booleanAttribute], primary: ["primary", "primary", booleanAttribute], accent: ["accent", "accent", booleanAttribute], warn: ["warn", "warn", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], loading: "loading", isLoading: ["isLoading", "isLoading", booleanAttribute], loadingProgress: "loadingProgress", customTextColor: ["color", "customTextColor", colorThemeAttribute], customBgColor: ["backgroundColor", "customBgColor", colorAttribute], keepCustomTextColor: ["keepCustomTextColor", "keepCustomTextColor", booleanAttribute], keepCustomBgColor: ["keepCustomBgColor", "keepCustomBgColor", booleanAttribute], customToggleUnselectedColor: ["customToggleUnselectedColor", "customToggleUnselectedColor", colorAttribute], customToggleUnselectedTextColor: ["customToggleUnselectedTextColor", "customToggleUnselectedTextColor", colorAttribute], customToggleSelectedTextColor: ["customToggleSelectedTextColor", "customToggleSelectedTextColor", colorAttribute], progressColor: ["progressColor", "progressColor", colorAttribute], collapse: ["collapse", "collapse", booleanAttribute], collapseTo: "collapseTo", fitContent: ["fit-content", "fitContent", booleanAttribute], showTooltip: ["tooltip", "showTooltip", booleanAttribute], tooltipText: "tooltipText", tooltipIfTruncated: ["tooltipIfTruncated", "tooltipIfTruncated", booleanAttribute], minHeight: ["minHeight", "minHeight", sizeAttribute], fontSize: ["fontSize", "fontSize", sizeAttribute], fontFamily: "fontFamily", diameter: ["diameter", "diameter", sizeAttribute], iconSize: ["iconSize", "iconSize", sizeAttribute], fullIcon: ["fullIcon", "fullIcon", booleanAttribute], borderRadius: ["borderRadius", "borderRadius", sizeAttribute], value: "value", customHoverColor: "customHoverColor" }, outputs: { click: "click" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c6, decls: 18, vars: 72, consts: [[1, "mrd-button-container", 3, "ngStyle", "ngClass", "mrdToolTip", "showOnTruncatedElement", "showToolTip"], ["buttonContainer", ""], [1, "mrd-button-background"], [1, "mrd-button-focus"], [1, "mrd-button-content", 3, "ngClass"], ["displayState", "flex", "requiredHideAttribute", "icon-collapse", "checkChildrenForAttribute", "", 1, "mrd-button-icon-content", 3, "ngClass", "hideIfTruncated", "hideOnTruncatedElement", "parentResizeElement"], [4, "ngIf", "ngIfElse"], ["defaultLeftIcons", ""], [1, "mrd-button-text-content", 3, "hideIfTruncated", "parentResizeElement", "hiddenChanged"], ["mrdButtonTextContent", ""], ["defaultRightIcons", ""], ["class", "mrd-button-progress-bar", 3, "value", "mode", "color", 4, "ngIf"], ["class", "mrd-button-progress-spinner", 3, "value", "mode", "color", 4, "ngIf"], [1, "mrd-button-progress-bar", 3, "value", "mode", "color"], [1, "mrd-button-progress-spinner", 3, "value", "mode", "color"]], template: function MrdButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "button", 0, 1)(2, "div", 2);
            i0.ɵɵelement(3, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span", 4)(5, "span", 5);
            i0.ɵɵtemplate(6, MrdButtonComponent_ng_container_6_Template, 2, 0, "ng-container", 6);
            i0.ɵɵtemplate(7, MrdButtonComponent_ng_template_7_Template, 1, 0, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "span", 8, 9);
            i0.ɵɵlistener("hiddenChanged", function MrdButtonComponent_Template_span_hiddenChanged_9_listener($event) { return ctx.buttonCollapsed($event); });
            i0.ɵɵprojection(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "span", 5);
            i0.ɵɵtemplate(13, MrdButtonComponent_ng_container_13_Template, 2, 0, "ng-container", 6);
            i0.ɵɵtemplate(14, MrdButtonComponent_ng_template_14_Template, 1, 0, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(16, MrdButtonComponent_mrd_progress_bar_16_Template, 1, 3, "mrd-progress-bar", 11);
            i0.ɵɵtemplate(17, MrdButtonComponent_mrd_progress_spinner_17_Template, 1, 3, "mrd-progress-spinner", 12);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const _r2 = i0.ɵɵreference(8);
            const _r4 = i0.ɵɵreference(10);
            const _r6 = i0.ɵɵreference(15);
            i0.ɵɵstyleProp("--bg-color", ctx.bgColor)("--text-color", ctx.textColor)("--disabled-text-color", ctx.disabledTextColor)("--disabled-bg-color", ctx.disabledBgColor)("--border-width", ctx.borderWidth)("--border-color", ctx.borderColor)("--border-style", ctx.borderStyle)("--border-radius", ctx.borderRadius)("--min-height", ctx.minHeight)("--font-size", ctx.fontSize)("--font-family", ctx.fontFamily)("--diameter", ctx.diameter)("--icon-size", ctx.iconSize)("--unselected-color", ctx.toggleUnselectedColor);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(54, _c2, ctx.fitContent ? "fit-content" : "unset"))("ngClass", i0.ɵɵpureFunctionV(56, _c3, [ctx.icon, ctx.raised, ctx.outline, ctx.flat, ctx.fab, ctx.miniFab, ctx.toggle, ctx.toggleSelected, ctx.disabled]))("mrdToolTip", ctx.tooltipText)("showOnTruncatedElement", ctx.tooltipIfTruncated ? _r4 : undefined)("showToolTip", ctx.showTooltip);
            i0.ɵɵadvance(3);
            i0.ɵɵstyleProp("--hover-color", ctx.hoverColor)("--active-color", ctx.activeColor);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(66, _c4, ctx.isCollapsed));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(68, _c5, ctx.fullIcon))("hideIfTruncated", ctx.collapse)("hideOnTruncatedElement", _r4)("parentResizeElement", ctx.elementRef.nativeElement);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isHovered && ctx.hasCustomHoverIcon)("ngIfElse", _r2);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("hideIfTruncated", ctx.collapse)("parentResizeElement", ctx.elementRef.nativeElement);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(70, _c5, ctx.fullIcon))("hideIfTruncated", ctx.collapse)("hideOnTruncatedElement", _r4)("parentResizeElement", ctx.elementRef.nativeElement);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isHovered && ctx.hasCustomHoverIcon)("ngIfElse", _r6);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.disabled && !ctx.icon && !ctx.fab && !ctx.miniFab && (ctx.isLoading || (ctx.loading == null ? null : ctx.loading.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) === 0));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.disabled && (ctx.icon || ctx.fab || ctx.miniFab) && (ctx.isLoading || (ctx.loading == null ? null : ctx.loading.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) === 0));
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle, i2.MrdProgressBarComponent, i3.MrdProgressSpinnerComponent, i4.ToolTipRendererDirective, i5.HideIfTruncatedDirective], styles: ["[_nghost-%COMP%]{position:relative;display:inline-flex;flex-direction:column;justify-content:center;align-items:center;max-width:100%}.active[_nghost-%COMP%]{z-index:10}.mrd-button-container[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:center;min-height:var(--min-height);height:inherit;max-width:100%;width:100%;padding:0 16px;font-size:var(--font-size);font-family:var(--font-family);font-weight:700;letter-spacing:.1px;border:var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius);color:var(--text-color)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;z-index:1;width:100%}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]   .mrd-button-icon-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]   .mrd-button-text-content[_ngcontent-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]     mrd-icon{margin:0 2px}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]   .mrd-button-text-content[_ngcontent-%COMP%]{padding:0 16px}.mrd-button-container.disabled[_ngcontent-%COMP%]{color:var(--disabled-text-color);cursor:initial}.mrd-button-container.disabled[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{background-color:var(--disabled-bg-color)}.mrd-button-container[_ngcontent-%COMP%]:hover:not(.disabled)   .mrd-button-focus[_ngcontent-%COMP%]{background-color:var(--hover-color)}.mrd-button-container[_ngcontent-%COMP%]:active:not(.disabled)   .mrd-button-focus[_ngcontent-%COMP%]{background-color:var(--active-color)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-focus[_ngcontent-%COMP%]{position:absolute;inset:0;border-radius:var(--border-radius)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{position:absolute;inset:0;border-radius:var(--border-radius);background-color:var(--bg-color)}.mrd-button-container.mrd-raised-button[_ngcontent-%COMP%]:not(.disabled){--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-raised-button[_ngcontent-%COMP%]:not(.disabled):active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]{min-width:var(--diameter)!important;height:var(--diameter);padding:0}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{min-height:unset;width:var(--diameter);height:var(--diameter)}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]     mrd-icon{margin:0!important;font-size:calc(var(--diameter) / 2)}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     mrd-icon{font-size:var(--diameter)}.mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]:active, .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]{padding:0 44px;transition:color .2s}.mrd-button-container.mrd-toggle-button.mrd-toggle-selected[_ngcontent-%COMP%]{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040;transform:scale(1.15);z-index:10}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040;z-index:5}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:hover{z-index:5}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{transition:background-color .2s}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:not(.mrd-toggle-selected)   .mrd-button-background[_ngcontent-%COMP%]{background-color:var(--unselected-color)}.mrd-button-container[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container[_ngcontent-%COMP%]     mrd-icon{font-size:1.5em;margin-right:4px;margin-top:2px;width:var(--icon-size);height:var(--icon-size);min-width:1em}.mrd-button-container[_ngcontent-%COMP%]     [mrd-icon][icon-end], .mrd-button-container[_ngcontent-%COMP%]     mrd-icon[icon-end]{margin-right:0;margin-left:4px}.mrd-button-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:10%;left:5px;right:5px;height:10%;min-height:10%}.mrd-button-progress-spinner[_ngcontent-%COMP%]{position:absolute;top:3px;left:3px;width:calc(100% - 6px)!important;height:calc(100% - 6px)!important}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdButtonComponent, [{
        type: Component,
        args: [{ selector: 'mrd-button', host: {
                    '[style.min-width]': 'fitContent ? "fit-content" : "unset"',
                    '[style.margin]': 'toggle ? "0 -16px" : "unset"',
                    '[style.transition]': 'toggle ? "transform 0.2s" : "unset"',
                    '[class.active]': 'toggle && toggleSelected'
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- Der eigentlich HTML-Button -->\r\n<button class=\"mrd-button-container\"\r\n  #buttonContainer\r\n  [style.--bg-color]=\"bgColor\"\r\n  [style.--text-color]=\"textColor\"\r\n  [style.--disabled-text-color]=\"disabledTextColor\"\r\n  [style.--disabled-bg-color]=\"disabledBgColor\"\r\n  [style.--border-width]=\"borderWidth\"\r\n  [style.--border-color]=\"borderColor\"\r\n  [style.--border-style]=\"borderStyle\"\r\n  [style.--border-radius]=\"borderRadius\"\r\n  [style.--min-height]=\"minHeight\"\r\n  [style.--font-size]=\"fontSize\"\r\n  [style.--font-family]=\"fontFamily\"\r\n  [style.--diameter]=\"diameter\"\r\n  [style.--icon-size]=\"iconSize\"\r\n  [style.--unselected-color]=\"toggleUnselectedColor\"\r\n\r\n  [ngStyle]=\"{'min-width': fitContent ? 'fit-content' : 'unset'}\"\r\n  [ngClass]=\"{'mrd-icon-button': icon, 'mrd-raised-button': raised, 'mrd-outline-button': outline,\r\n    'mrd-flat-button': flat, 'mrd-fab-button': fab, 'mrd-mini-fab-button': miniFab, 'mrd-toggle-button': toggle,\r\n    'mrd-toggle-selected': toggleSelected, 'disabled': disabled}\"\r\n\r\n  [mrdToolTip]=\"tooltipText\" [showOnTruncatedElement]=\"tooltipIfTruncated ? mrdButtonTextContent : undefined\" [showToolTip]=\"showTooltip\">\r\n  <div class=\"mrd-button-background\">\r\n    <!-- Ein Overlay \u00FCber dem Button welches den Hover- und Active-Effekt anzeigt -->\r\n    <div class=\"mrd-button-focus\" [style.--hover-color]=\"hoverColor\" [style.--active-color]=\"activeColor\"></div>\r\n  </div>\r\n  <!-- Ein Overlay \u00FCber dem Button welches den Hover- und Active-Effekt anzeigt -->\r\n  <!-- <div class=\"mrd-button-focus\" [style.--hover-color]=\"hoverColor\" [style.--active-color]=\"activeColor\"></div> -->\r\n  <!-- Der Content des Buttons -->\r\n  <span class=\"mrd-button-content\" [ngClass]=\"{'isCollapsed': isCollapsed}\">\r\n    <!-- Linker Icon-Container -->\r\n    <span class=\"mrd-button-icon-content\" \r\n          [ngClass]=\"{'full-icon': fullIcon}\" \r\n          [hideIfTruncated]=\"collapse\" \r\n          displayState=\"flex\" \r\n          requiredHideAttribute=\"icon-collapse\"\r\n          checkChildrenForAttribute \r\n          [hideOnTruncatedElement]=\"mrdButtonTextContent\" \r\n          [parentResizeElement]=\"this.elementRef.nativeElement\">\r\n      <ng-container *ngIf=\"isHovered && hasCustomHoverIcon; else defaultLeftIcons\">\r\n        <ng-content select=\"mrd-icon[customHoverIcon], [mrd-icon][customHoverIcon]\"></ng-content>\r\n      </ng-container>\r\n      <ng-template #defaultLeftIcons>\r\n        <ng-content select=\"mrd-icon:not([customHoverIcon]):not([icon-end]), [mrd-icon]:not([customHoverIcon]):not([icon-end])\"></ng-content>\r\n      </ng-template>\r\n    </span>\r\n    \r\n    <!-- Der Text des Buttons -->\r\n    <span class=\"mrd-button-text-content\" \r\n          (hiddenChanged)=\"buttonCollapsed($event)\" \r\n          [hideIfTruncated]=\"collapse\" \r\n          #mrdButtonTextContent \r\n          [parentResizeElement]=\"this.elementRef.nativeElement\">\r\n      <ng-content select=\":not([mrd-icon]):not([mrd-icon])\"></ng-content>\r\n    </span>\r\n    \r\n    <!-- Rechter Icon-Container -->\r\n    <span class=\"mrd-button-icon-content\" \r\n          [ngClass]=\"{'full-icon': fullIcon}\" \r\n          [hideIfTruncated]=\"collapse\" \r\n          displayState=\"flex\" \r\n          requiredHideAttribute=\"icon-collapse\"\r\n          checkChildrenForAttribute \r\n          [hideOnTruncatedElement]=\"mrdButtonTextContent\" \r\n          [parentResizeElement]=\"this.elementRef.nativeElement\">\r\n      <ng-container *ngIf=\"isHovered && hasCustomHoverIcon; else defaultRightIcons\">\r\n        <ng-content select=\"mrd-icon[customHoverIcon], [mrd-icon][customHoverIcon]\"></ng-content>\r\n      </ng-container>\r\n      <ng-template #defaultRightIcons>\r\n        <ng-content select=\"mrd-icon[icon-end]:not([customHoverIcon]), [mrd-icon][icon-end]:not([customHoverIcon])\"></ng-content>\r\n      </ng-template>\r\n    </span>\r\n  </span>\r\n\r\n  <!-- Die Progress-Bar eines Buttons (nicht f\u00FCr Icon-, Fab- und Mini-Fab-Buttons) -->\r\n  <mrd-progress-bar class=\"mrd-button-progress-bar\"\r\n    *ngIf=\"!disabled && !icon && !fab && !miniFab && (isLoading || loading?.value || loadingProgress?.value || loadingProgress?.value === 0)\"\r\n    [value]=\"loadingProgress?.value\" [mode]=\"loadingProgress ? 'determinate' : 'indeterminate'\" [color]=\"progressColor\"></mrd-progress-bar>\r\n  <!-- Der Progress-Spinner eines Buttons (nur f\u00FCr Icon-, Fab- und Mini-Fab-Buttons) -->\r\n  <mrd-progress-spinner class=\"mrd-button-progress-spinner\"\r\n    *ngIf=\"!disabled && (icon || fab || miniFab) && (isLoading || loading?.value || loadingProgress?.value || loadingProgress?.value === 0)\"\r\n    [value]=\"loadingProgress?.value\" [mode]=\"loadingProgress ? 'determinate' : 'indeterminate'\" [color]=\"progressColor\"></mrd-progress-spinner>\r\n</button>\r\n", styles: [":host{position:relative;display:inline-flex;flex-direction:column;justify-content:center;align-items:center;max-width:100%}:host.active{z-index:10}.mrd-button-container{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:center;min-height:var(--min-height);height:inherit;max-width:100%;width:100%;padding:0 16px;font-size:var(--font-size);font-family:var(--font-family);font-weight:700;letter-spacing:.1px;border:var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius);color:var(--text-color)}.mrd-button-container .mrd-button-content{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;z-index:1;width:100%}.mrd-button-container .mrd-button-content .mrd-button-icon-content{display:flex;flex-direction:row;align-items:center;justify-content:center}.mrd-button-container .mrd-button-content .mrd-button-text-content{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-button-container .mrd-button-content.isCollapsed ::ng-deep [mrd-icon],.mrd-button-container .mrd-button-content.isCollapsed ::ng-deep mrd-icon{margin:0 2px}.mrd-button-container .mrd-button-content.isCollapsed .mrd-button-text-content{padding:0 16px}.mrd-button-container.disabled{color:var(--disabled-text-color);cursor:initial}.mrd-button-container.disabled .mrd-button-background{background-color:var(--disabled-bg-color)}.mrd-button-container:hover:not(.disabled) .mrd-button-focus{background-color:var(--hover-color)}.mrd-button-container:active:not(.disabled) .mrd-button-focus{background-color:var(--active-color)}.mrd-button-container .mrd-button-focus{position:absolute;inset:0;border-radius:var(--border-radius)}.mrd-button-container .mrd-button-background{position:absolute;inset:0;border-radius:var(--border-radius);background-color:var(--bg-color)}.mrd-button-container.mrd-raised-button:not(.disabled){--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-raised-button:not(.disabled):active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-icon-button,.mrd-button-container.mrd-fab-button,.mrd-button-container.mrd-mini-fab-button{min-width:var(--diameter)!important;height:var(--diameter);padding:0}.mrd-button-container.mrd-icon-button .mrd-button-background,.mrd-button-container.mrd-fab-button .mrd-button-background,.mrd-button-container.mrd-mini-fab-button .mrd-button-background{min-height:unset;width:var(--diameter);height:var(--diameter)}.mrd-button-container.mrd-icon-button ::ng-deep [mrd-icon],.mrd-button-container.mrd-icon-button ::ng-deep mrd-icon,.mrd-button-container.mrd-fab-button ::ng-deep [mrd-icon],.mrd-button-container.mrd-fab-button ::ng-deep mrd-icon,.mrd-button-container.mrd-mini-fab-button ::ng-deep [mrd-icon],.mrd-button-container.mrd-mini-fab-button ::ng-deep mrd-icon{margin:0!important;font-size:calc(var(--diameter) / 2)}.mrd-button-container.mrd-icon-button .mrd-button-icon-content.full-icon ::ng-deep [mrd-icon],.mrd-button-container.mrd-icon-button .mrd-button-icon-content.full-icon ::ng-deep mrd-icon,.mrd-button-container.mrd-fab-button .mrd-button-icon-content.full-icon ::ng-deep [mrd-icon],.mrd-button-container.mrd-fab-button .mrd-button-icon-content.full-icon ::ng-deep mrd-icon,.mrd-button-container.mrd-mini-fab-button .mrd-button-icon-content.full-icon ::ng-deep [mrd-icon],.mrd-button-container.mrd-mini-fab-button .mrd-button-icon-content.full-icon ::ng-deep mrd-icon{font-size:var(--diameter)}.mrd-button-container.mrd-mini-fab-button:not(.disabled) .mrd-button-background,.mrd-button-container.mrd-fab-button:not(.disabled) .mrd-button-background{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-mini-fab-button:not(.disabled) .mrd-button-background:active,.mrd-button-container.mrd-fab-button:not(.disabled) .mrd-button-background:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-toggle-button{padding:0 44px;transition:color .2s}.mrd-button-container.mrd-toggle-button.mrd-toggle-selected{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040;transform:scale(1.15);z-index:10}.mrd-button-container.mrd-toggle-button:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040;z-index:5}.mrd-button-container.mrd-toggle-button:hover{z-index:5}.mrd-button-container.mrd-toggle-button .mrd-button-background{transition:background-color .2s}.mrd-button-container.mrd-toggle-button:not(.mrd-toggle-selected) .mrd-button-background{background-color:var(--unselected-color)}.mrd-button-container ::ng-deep [mrd-icon],.mrd-button-container ::ng-deep mrd-icon{font-size:1.5em;margin-right:4px;margin-top:2px;width:var(--icon-size);height:var(--icon-size);min-width:1em}.mrd-button-container ::ng-deep [mrd-icon][icon-end],.mrd-button-container ::ng-deep mrd-icon[icon-end]{margin-right:0;margin-left:4px}.mrd-button-progress-bar{position:absolute;bottom:10%;left:5px;right:5px;height:10%;min-height:10%}.mrd-button-progress-spinner{position:absolute;top:3px;left:3px;width:calc(100% - 6px)!important;height:calc(100% - 6px)!important}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { mrdButtonTextContent: [{
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
        }], customHoverColor: [{
            type: Input
        }], customHoverIconDir: [{
            type: ContentChild,
            args: [CustomHoverIconDirective, { static: false }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWJ1dHRvbi9jb21wb25lbnRzL21yZC1idXR0b24vbXJkLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWJ1dHRvbi9jb21wb25lbnRzL21yZC1idXR0b24vbXJkLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsc0JBQXNCLEVBQW1CLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6RSxPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsWUFBWSxFQUFjLFlBQVksRUFBZ0IsS0FBSyxFQUFxQixNQUFNLEVBQVcsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25PLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbkUsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFaEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMvRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQzs7Ozs7Ozs7O0lDK0JsSCw2QkFBNkU7SUFDM0UscUJBQXlGO0lBQzNGLDBCQUFlOzs7SUFFYixxQkFBcUk7OztJQXNCdkksNkJBQThFO0lBQzVFLHFCQUF5RjtJQUMzRiwwQkFBZTs7O0lBRWIscUJBQXlIOzs7SUFNL0gs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LE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQW9CLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFpQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNySztRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDaEksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3pJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxVQUFVLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUNuSixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUMzRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElB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RUFBRSxhQUFhLEVBQUM7WUFFWSxRQUFRO2tCQUFwRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBU00sWUFBWTtrQkFBckQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUM7WUFFakIsS0FBSztrQkFBcEIsS0FBSztZQUVVLGdCQUFnQjtrQkFBL0IsS0FBSztZQUVxRCxrQkFBa0I7a0JBQTVFLFlBQVk7bUJBQUMsd0JBQXdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBZXhDLEtBQUs7a0JBQXJCLE1BQU07O0FBNlNULElBQUssbUJBU0o7QUFURCxXQUFLLG1CQUFtQjtJQUN0QixrQkFBa0I7SUFDbEIsb0NBQWEsQ0FBQTtJQUNiLHdDQUFpQixDQUFBO0lBQ2pCLDBDQUFtQixDQUFBO0lBQ25CLG9DQUFhLENBQUE7SUFDYixrQ0FBVyxDQUFBO0lBQ1gsMkNBQW9CLENBQUE7SUFDcEIsd0NBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQVRJLG1CQUFtQixLQUFuQixtQkFBbUIsUUFTdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNcmRCb3JkZXIgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbC9jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgeyBCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0LCBPYnNlcnZhYmxlVmFsdWUsIFV0aWwgfSBmcm9tICdtcmQtY29yZSc7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCxSZW5kZXJlcjIsVmlld0NoaWxkLCBib29sZWFuQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbG9yVXRpbCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29sb3IudXRpbCc7XHJcbmltcG9ydCB7IE1yZENvbmZpZ01vZGVsIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vbW9kZWwvY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgQ29uZmlnVXRpbCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29uZmlnLnV0aWwnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQgeyBNcmRCYXNlQ29sb3JUaGVtZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL21vZGVsL2NvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IGNvbG9yQXR0cmlidXRlLCBjb2xvclRoZW1lQXR0cmlidXRlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9jb2xvci10cmFuc2Zvcm0nO1xyXG5pbXBvcnQgeyBzaXplQXR0cmlidXRlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9zaXplLXRyYW5zZm9ybSc7XHJcbmltcG9ydCB7IEN1c3RvbUhvdmVySWNvbkRpcmVjdGl2ZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL2RpcmVjdGl2ZS9jdXN0b20taG92ZXItaWNvbi9jdXN0b20taG92ZXItaWNvbi5kaXJlY3RpdmUnO1xyXG4vKipcclxuICogRGllc2VzIEtvbXBvbmVudGUgc3RlbGx0IGRlbiBNcmQtQnV0dG9uIHp1ciBWZXJmw7xndW5nLlxyXG4gKlxyXG4gKiBEZXIgQnV0dG9uIGthbm4gbWl0dGVscyBkZXIgZW50c3ByZWNoZW5kZW4gQXR0cmlidXRlIGluIGZvbGdlbmRlbiBTdGlsZW4gZGFyZ2VzdGVsbHQgd2VyZGVuOlxyXG4gKiAtIFN0YW5kYXJkLUJ1dHRvbiAoZGVmYXVsdClcclxuICogLSBJY29uLUJ1dHRvbiAoQXR0cmlidXRuYW1lOiBpY29uLWJ1dHRvbilcclxuICogLSBSYWlzZWQtQnV0dG9uIChBdHRyaWJ1dG5hbWU6IHJhaXNlZC1idXR0b24pXHJcbiAqIC0gT3V0bGluZS1CdXR0b24gKEF0dHJpYnV0bmFtZTogb3V0bGluZS1idXR0b24pXHJcbiAqIC0gRmxhdC1CdXR0b24gKEF0dHJpYnV0bmFtZTogZmxhdC1idXR0b24pXHJcbiAqIC0gRmFiLUJ1dHRvbiAoQXR0cmlidXRuYW1lOiBmYWItYnV0dG9uKVxyXG4gKiAtIE1pbmlGYWItQnV0dG9uIChBdHRyaWJ1dG5hbWU6IG1pbmlGYWItYnV0dG9uKVxyXG4gKlxyXG4gKiBXZWl0ZXJoaW4ga8O2bm5lbiBkaWUgc3RhbmRhcmQgVGhlbWVzIChwcmltYXJ5LCBhY2NlbnQsIHdhcm4pIGbDvHIgZGllIEhpbnRlcmdydW5kLSBiencuIFRleHRmYXJiZSBmZXN0Z2VsZWd0IHdlcmRlbiAoamUgbmFjaCBTdHlsZSkuXHJcbiAqXHJcbiAqIEbDvHIgd2VpdGVyZSBBbnBhc3N1bmdlbiBzaWVoZSBkaWUgSW5mb3JtYXRpb25lbiBkZXIgZWluemVsbmVuIEF0dHJpYnV0ZSBvZGVyIGRpZSBEb2t1bWVudGF0aW9uLlxyXG4gKlxyXG4gKiBAY2xhc3MgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAqIEBleHRlbmRzIHtCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0fVxyXG4gKiBAaW1wbGVtZW50cyB7QWZ0ZXJWaWV3SW5pdH1cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLWJ1dHRvbicsXHJcbiAgaG9zdDoge1xyXG4gICAnW3N0eWxlLm1pbi13aWR0aF0nOiAnZml0Q29udGVudCA/IFwiZml0LWNvbnRlbnRcIiA6IFwidW5zZXRcIicsXHJcbiAgICdbc3R5bGUubWFyZ2luXSc6ICd0b2dnbGUgPyBcIjAgLTE2cHhcIiA6IFwidW5zZXRcIicsXHJcbiAgICdbc3R5bGUudHJhbnNpdGlvbl0nOiAndG9nZ2xlID8gXCJ0cmFuc2Zvcm0gMC4yc1wiIDogXCJ1bnNldFwiJyxcclxuICAgJ1tjbGFzcy5hY3RpdmVdJzogJ3RvZ2dsZSAmJiB0b2dnbGVTZWxlY3RlZCdcclxuICB9LFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZEJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIEJhc2VQdXNoU3RyYXRlZ3lPYmplY3QgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZmVyZW56IGF1ZiBkYXMgVGV4dC1FbGVtZW50IGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+fVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBAVmlld0NoaWxkKCdtcmRCdXR0b25UZXh0Q29udGVudCcsIHtzdGF0aWM6IHRydWV9KSBtcmRCdXR0b25UZXh0Q29udGVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZWluIEljb24tQnV0dG9uIGlzdC5cclxuICAgKlxyXG4gICAqIERlciBDb250ZW50IGRlcyBCdXR0b25zIHNvbGx0ZSBudXIgZWluIEljb24gc2Vpbi5cclxuICAgKiBEZXIgQnV0dG9uIGhhdCBzdGFuZGFyZG3DpMOfaWcgZWluZW4gdHJhbnNwYXJlbnRlbiBIaW50ZXJncnVuZCB1bmQgZGllIEZhcmJlIGRlcyBJY29ucyBpc3Qgc2Nod2Fyei5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnaWNvbi1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBpY29uOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZWluIFJhaXNlZC1CdXR0b24gaXN0LlxyXG4gICAqXHJcbiAgICogUmFpc2VkLUJ1dHRvbnMgaGFiZW4gZWluZW4gU2NoYXR0ZW4uXHJcbiAgICogRGVyIEJ1dHRvbiBoYXQgc3RhbmRhcmRtw6TDn2lnIGVpbmVuIHdlacOfZW4gSGludGVyZ3J1bmQgdW5kIGRpZSBUZXh0ZmFyYmUgc2Nod2Fyei5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAncmFpc2VkLWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHJhaXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZWluIE91dGxpbmUtQnV0dG9uIGlzdC5cclxuICAgKlxyXG4gICAqIE91dGxpbmUtQnV0dG9ucyBoYWJlbiBzdGFuZGFyZG3DpMOfaWcgZWluZW4gdHJhbnNwYXJlbnRlbiBIaW50ZXJncnVuZCB1bmQgZWluZW4gZ3JhdWVuIFJhbmQsIHNvd2llIGVpbmVuIHNjaHdhcnplbiBUZXh0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdvdXRsaW5lLWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIG91dGxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGVpbiBGbGF0LUJ1dHRvbiBpc3QuXHJcbiAgICpcclxuICAgKiBGbGF0LUJ1dHRvbnMgaGFiZW4gc3RhbmRhcmRtw6TDn2lnIGVpbmVuIHdlacOfZW4gSGludGVyZ3J1bmQgdW5kIGRpZSBUZXh0ZmFyYmUgaXN0IHNjaHdhcnouXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ2ZsYXQtYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgZmxhdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZWluIEZhYi1CdXR0b24gaXN0LlxyXG4gICAqXHJcbiAgICogRmFiLUJ1dHRvbnMgc2luZCBrcmVpc2bDtnJtaWdlIEJ1dHRvbnMuXHJcbiAgICogU3RhbmRhcmRtw6TDn2lnIGhhYmVuIHNpZSBlaW5lbiB3ZWnDn2VuIEhpbnRlcmdydW5kIHVuZCBkaWUgSWNvbmZhcmJlIGlzdCBzY2h3YXJ6LCBhdcOfZXJkZW0gYmVzaXR6ZW4gc2llIGVpbmVuIFNjaGF0dGVuLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdmYWItYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgZmFiOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBlaW4gTWluaUZhYi1CdXR0b24gaXN0LlxyXG4gICAqXHJcbiAgICogTWluaUZhYi1CdXR0b25zIHNpbmQga3JlaXNmw7ZybWlnZSBCdXR0b25zIHZvbiBkZXIgR3LDtsOfZSBlaW5lcyBJY29uLUJ1dHRvbnMuXHJcbiAgICogU3RhbmRhcmRtw6TDn2lnIGhhYmVuIHNpZSBlaW5lbiB3ZWnDn2VuIEhpbnRlcmdydW5kIHVuZCBkaWUgSWNvbmZhcmJlIGlzdCBzY2h3YXJ6LCBhdcOfZXJkZW0gYmVzaXR6ZW4gc2llIGVpbmVuIFNjaGF0dGVuLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdtaW5pRmFiLWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIG1pbmlGYWI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHthbGlhczogJ3RvZ2dsZS1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSB0b2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHthbGlhczogJ3NlbGVjdGVkJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgdG9nZ2xlU2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBkYXMgVGhlbWUgXCJwcmltYXJ5XCIgaGF0LlxyXG4gICAqXHJcbiAgICogSGllcmR1cmNoIHdpcmQgZGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIEJ1dHRvbnMgYXVmIGRpZSBwcmltw6RyZSBGYXJiZSBkZXMgVGhlbWVzIGdlc2V0enQuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcHJpbWFyeTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGRhcyBUaGVtZSBcImFjY2VudFwiIGhhdC5cclxuICAgKlxyXG4gICAqIEhpZXJkdXJjaCB3aXJkIGRpZSBIaW50ZXJncnVuZGZhcmJlIGRlcyBCdXR0b25zIGF1ZiBkaWUgQWt6ZW50ZmFyYmUgZGVzIFRoZW1lcyBnZXNldHp0LlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGFjY2VudDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGRhcyBUaGVtZSBcIndhcm5cIiBoYXQuXHJcbiAgICpcclxuICAgKiBIaWVyZHVyY2ggd2lyZCBkaWUgSGludGVyZ3J1bmRmYXJiZSBkZXMgQnV0dG9ucyBhdWYgZGllIFdhcm5mYXJiZSBkZXMgVGhlbWVzIGdlc2V0enQuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgd2FybjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGRlYWt0aXZpZXJ0IGlzdC5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBFaW5lIE9ic2VydmFibGVWYWx1ZSwgZGllIMO8YmVyZ2ViZW4gd2VyZGVuIGthbm4sIHVtIHp1IGJlc3RpbW1lbixcclxuICAgKiBvYiBkZXIgQnV0dG9uIGVpbmVuIExhZGViYWxrZW4vTGFkZXNwaW5uZXIgYW56ZWlnZW4gc29sbC5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbG9hZGluZzogT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+O1xyXG4gIC8qKlxyXG4gICAqIEVpbiBib29sZWFuLCBkZXIgYmVzdGltbXQsIG9iIGRlciBCdXR0b24gZWluZW4gTGFkZWJhbGtlbi9MYWRlc3Bpbm5lciBhbnplaWdlbiBzb2xsLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEVpbmUgT2JzZXJ2YWJsZVZhbHVlLCBkaWUgw7xiZXJnZWJlbiB3ZXJkZW4ga2FubiwgdW0gZGVuIEZvcnRzY2hyaXR0IGRlcyBMYWRlYmFsa2Vucy9MYWRlc3Bpbm5lcnMgenUgYmVzdGltbWVuLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09ic2VydmFibGVWYWx1ZTxudW1iZXI+fVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbG9hZGluZ1Byb2dyZXNzOiBPYnNlcnZhYmxlVmFsdWU8bnVtYmVyPjtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0enQgZGllIEdydW5kZmFyYmUgZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBEaWVzZSB3aXJkIGplIG5hY2ggU3R5bGUgZGVzIEJ1dHRvbnMgYWxzIEhpbnRlcmdydW5kZmFyYmUgb2RlciBUZXh0ZmFyYmUgdmVyd2VuZGV0LlxyXG4gICAqXHJcbiAgICogRXMga8O2bm5lbiBIZXgtLCBSR0ItIG9kZXIgUkdCQS1XZXJ0ZSwgc293aWUgXCJwcmltYXJ5XCIsIFwiYWNjZW50XCIgb2RlciBcIndhcm5cIiBhbmdlZ2ViZW4gd2VyZGVuLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdjb2xvcicsIHRyYW5zZm9ybTogY29sb3JUaGVtZUF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21UZXh0Q29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0enQgZGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBFcyBrw7ZubmVuIEhleC0sIFJHQi0gb2RlciBSR0JBLVdlcnRlIGFuZ2VnZWJlbiB3ZXJkZW4uXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ2JhY2tncm91bmRDb2xvcicsIHRyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tQmdDb2xvcjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkaWUgYmVudXR6ZXJkZWZpbmllcnRlIFRleHRmYXJiZSBuaWNodCBkdXJjaCBlaW4gZGVmbmllcnRlcyBUaGVtYSDDvGJlcnNjaHJpZWJlbiB3ZXJkZW4gc29sbC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBrZWVwQ3VzdG9tVGV4dENvbG9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGllIGJlbnV0emVyZGVmaW5pZXJ0ZSBIaW50ZXJncnVuZGZhcmJlIG5pY2h0IGR1cmNoIGVpbiBkZWZpbmllcnRlcyBUaGVtYSDDvGJlcnNjaHJpZWJlbiB3ZXJkZW4gc29sbC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBrZWVwQ3VzdG9tQmdDb2xvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21Ub2dnbGVVbnNlbGVjdGVkVGV4dENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21Ub2dnbGVTZWxlY3RlZFRleHRDb2xvcjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBTZXR6dCBkaWUgRmFyYmUgZGVzIExhZGViYWxrZW5zL0xhZGVzcGlubmVycy5cclxuICAgKlxyXG4gICAqIEVzIGvDtm5uZW4gSGV4LSwgUkdCLSBvZGVyIFJHQkEtV2VydGUgYW5nZWdlYmVuIHdlcmRlbi5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgcHJvZ3Jlc3NDb2xvcjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uLVRleHQgdmVyc2Nod2luZGV0LCB3ZW5uIGVyIHp1IGxhbmcgaXN0IHVuZCBhdXNnZXB1bmt0ZXQgd2VyZGVuIHfDvHJkZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBjb2xsYXBzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIHp1IHdlbGNoZW0gU3R5bGUgZGVyIEJ1dHRvbiBrb2xsYWJpZXJlbiBzb2xsLlxyXG4gICAqIE3DtmdsaWNoZSBXZXJ0ZTogXCJpY29uXCIsIFwiZmFiXCIsIFwibWluaUZhYlwiXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIHNldCBjb2xsYXBzZVRvKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLl9jb2xsYXBzZVRvID09PSB2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUgPT09IE1yZEJ1dHRvbkFwcGVhcmFuY2UuSUNPTiB8fCB2YWx1ZSA9PT0gTXJkQnV0dG9uQXBwZWFyYW5jZS5GQUIgfHwgdmFsdWUgPT09IE1yZEJ1dHRvbkFwcGVhcmFuY2UuTUlOSV9GQUIpIHtcclxuICAgICAgdGhpcy5fY29sbGFwc2VUbyA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmNvbGxhcHNlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ0RhcyBBdHRyaWJ1dCBjb2xsYXBzZVRvIGthbm4gbnVyIFwiaWNvblwiLCBcImZhYlwiIG9kZXIgXCJtaW5pRmFiXCIgc2Vpbi4nKTtcclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIGdldCBjb2xsYXBzZVRvKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29sbGFwc2VUbztcclxuICB9XHJcbiAgcHJpdmF0ZSBfY29sbGFwc2VUbzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBTb3JndCBkYWbDvHIsIGRhc3MgZGVyIEJ1dHRvbiBpbW1lciBtaW5kZXN0ZW5zIHNvIGJyZWl0IGlzdCwgd2llIHNlaW4gSW5oYWx0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdmaXQtY29udGVudCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBmaXRDb250ZW50OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZWluZW4gVG9vbHRpcCBhbnplaWdlbiBzb2xsLlxyXG4gICAqXHJcbiAgICogRGVyIFRvb2x0aXAtVGV4dCB3aXJkIHN0YW5kYXJkbcOkw59pZyBhdXMgZGVtIEluaGFsdCBkZXMgQnV0dG9ucyBvaG5lIGR1cmNoIFttcmQtaWNvbl0gZ2VrZW5uemVpY2huZXRlIEljb25zIGdlbmVyaWVydC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAndG9vbHRpcCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzaG93VG9vbHRpcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIERlciBUZXh0IGRlcyBUb29sdGlwcy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0b29sdGlwVGV4dDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBUb29sdGlwIG51ciBhbmdlemVpZ3Qgd2VyZGVuIHNvbGwsIHdlbm4gZGVyIEJ1dHRvbi1UZXh0IGF1c2dlcHVua3RldCB3aXJkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNldCB0b29sdGlwSWZUcnVuY2F0ZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuc2hvd1Rvb2x0aXAgPSB2YWx1ZSB8fCB0aGlzLnNob3dUb29sdGlwO1xyXG4gICAgdGhpcy5fdG9vbHRpcElmVHJ1bmNhdGVkID0gdmFsdWU7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgdG9vbHRpcElmVHJ1bmNhdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXBJZlRydW5jYXRlZDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfdG9vbHRpcElmVHJ1bmNhdGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIERpZSBNaW5kZXN0aMO2aGUgZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBXaXJkIGVpbmUgWmFobCBhbmdlZ2ViZW4sIHdpcmQgZGllc2UgYWxzIFBpeGVsd2VydCBpbnRlcnByZXRpZXJ0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZyB8IG51bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgbWluSGVpZ2h0OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogRGllIFNjaHJpZnRncsO2w59lIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogV2lyZCBlaW5lIFphaGwgYW5nZWdlYmVuLCB3aXJkIGRpZXNlIGFscyBQaXhlbHdlcnQgaW50ZXJwcmV0aWVydC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIGZvbnRTaXplOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBmb250RmFtaWx5OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogRGVyIER1cmNobWVzc2VyIGbDvHIgSWNvbi0sIEZhYi0gdW5kIE1pbmlGYWItQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIFdpcmQgZWluZSBaYWhsIGFuZ2VnZWJlbiwgd2lyZCBkaWVzZSBhbHMgUGl4ZWx3ZXJ0IGludGVycHJldGllcnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBkaWFtZXRlcjogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIERpZSBHcsO2w59lIGRlcyBJY29ucy5cclxuICAgKlxyXG4gICAqIFdpcmQgZWluZSBaYWhsIGFuZ2VnZWJlbiwgd2lyZCBkaWVzZSBhbHMgUGl4ZWx3ZXJ0IGludGVycHJldGllcnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBpY29uU2l6ZTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBmdWxsSWNvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIERlciBSYWRpdXMgZGVyIEVja2VuIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogV2lyZCBlaW5lIFphaGwgYW5nZWdlYmVuLCB3aXJkIGRpZXNlIGFscyBQaXhlbHdlcnQgaW50ZXJwcmV0aWVydC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIGJvcmRlclJhZGl1czogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgdmFsdWU6IGFueTtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIGN1c3RvbUhvdmVyQ29sb3I6IHN0cmluZztcclxuXHJcbiAgQENvbnRlbnRDaGlsZChDdXN0b21Ib3Zlckljb25EaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSBjdXN0b21Ib3Zlckljb25EaXI6IEN1c3RvbUhvdmVySWNvbkRpcmVjdGl2ZTtcclxuXHJcbiAgXHJcbiAgcHVibGljIGhhc0N1c3RvbUhvdmVySWNvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpc0hvdmVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBtb3VzZUVudGVyTGlzdGVuZXI6ICgpID0+IHZvaWQ7XHJcbiAgcHJpdmF0ZSBtb3VzZUxlYXZlTGlzdGVuZXI6ICgpID0+IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIERhcyBLbGljay1FdmVudCBkdXJjaCBkZW4gTnV0emVyLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxFdmVudD59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2xpY2s6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRGllIEtvbmZpZ3VyYXRpb24gZGVzIE1yZC1CdXR0b25zLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAdHlwZSB7TXJkQ29uZmlnTW9kZWx9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2NvbmZpZzogTXJkQ29uZmlnTW9kZWwgPSBDb25maWdVdGlsLmdldENvbmZpZygpO1xyXG5cclxuICBwdWJsaWMgaXNDb2xsYXBzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIHVuY29sbGFwc2VkQXBwZWFyYW5jZTogTXJkQnV0dG9uQXBwZWFyYW5jZTtcclxuXHJcbiAgcHJpdmF0ZSBidXR0b25QcmltYXJ5OiBzdHJpbmcgfCBNcmRCYXNlQ29sb3JUaGVtZTtcclxuICBwcml2YXRlIGJ1dHRvbkFjY2VudDogc3RyaW5nIHwgTXJkQmFzZUNvbG9yVGhlbWU7XHJcbiAgcHJpdmF0ZSBidXR0b25XYXJuOiBzdHJpbmcgfCBNcmRCYXNlQ29sb3JUaGVtZTtcclxuICBwcml2YXRlIGJ1dHRvbkRpc2FibGVkOiBNcmRCYXNlQ29sb3JUaGVtZTtcclxuICBwcml2YXRlIGJ1dHRvblByb2dyZXNzOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBiZ0NvbG9yOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSB0ZXh0TGlnaHRDb2xvcjogc3RyaW5nO1xyXG4gIHByaXZhdGUgdGV4dERhcmtDb2xvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyB0ZXh0Q29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgaG92ZXJDb2xvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBhY3RpdmVDb2xvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBkaXNhYmxlZFRleHRDb2xvcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBkaXNhYmxlZEJnQ29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgdG9nZ2xlVW5zZWxlY3RlZENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBib3JkZXJXaWR0aDogc3RyaW5nO1xyXG4gIHB1YmxpYyBib3JkZXJTdHlsZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBib3JkZXJDb2xvcjogc3RyaW5nO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PlxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gSGllciBzb3JnZW4gd2lyIGRhZsO8ciwgZGFzcyBkZXIgU3RhbmRhcmQgQ2xpY2stSGFuZGxlciB2b24gQW5ndWxhciBlbnRmZXJudCB3aXJkXHJcbiAgICBjb25zdCBob3N0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCBidXR0b24gPSBob3N0LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xyXG5cclxuICAgIGNvbnN0IG5ld0hvc3Q6IEhUTUxFbGVtZW50ID0gaG9zdC5jbG9uZU5vZGUoKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIG5ld0hvc3QuYXBwZW5kQ2hpbGQoYnV0dG9uKVxyXG5cclxuICAgIEFycmF5LmZyb20oaG9zdC5hdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHIgPT4gbmV3SG9zdC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKSk7XHJcbiAgICBob3N0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0hvc3QsIGhvc3QpO1xyXG4gICAgbmV3SG9zdC5zdHlsZS5taW5XaWR0aCA9IHRoaXMuZml0Q29udGVudCA/ICdmaXQtY29udGVudCcgOiAndW5zZXQnO1xyXG4gICAgbmV3SG9zdC5zdHlsZS5tYXJnaW4gPSB0aGlzLnRvZ2dsZSA/ICcwIC0xNnB4JyA6ICd1bnNldCc7XHJcbiAgICBuZXdIb3N0LnN0eWxlLnRyYW5zaXRpb24gPSB0aGlzLnRvZ2dsZSA/ICd0cmFuc2Zvcm0gMC4ycycgOiAndW5zZXQnO1xyXG4gICAgaWYgKHRoaXMudG9nZ2xlICYmIHRoaXMudG9nZ2xlU2VsZWN0ZWQpIHtcclxuICAgICAgbmV3SG9zdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIG5ld0hvc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKTtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50ID0gbmV3SG9zdDtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmxvYWRpbmcpKSB7XHJcbiAgICAgIHRoaXMubWFya0ZvckNoZWNrSWYodGhpcy5sb2FkaW5nLmNoYW5nZWQpXHJcbiAgICB9XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5sb2FkaW5nUHJvZ3Jlc3MpKSB7XHJcbiAgICAgIHRoaXMubWFya0ZvckNoZWNrSWYodGhpcy5sb2FkaW5nUHJvZ3Jlc3MuY2hhbmdlZClcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluaXRCYXNlU3R5bGUoKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKCk7XHJcblxyXG4gICAgdGhpcy5oYXNDdXN0b21Ib3Zlckljb24gPSAhIXRoaXMuY3VzdG9tSG92ZXJJY29uRGlyO1xyXG5cclxuICAgIC8vIE1hbnVlbGxlcyBBbmjDpG5nZW4gZGVyIE1vdXNlZW50ZXItIHVuZCBNb3VzZWxlYXZlLUxpc3RlbmVyIG1pdCBSZW5kZXJlcjJcclxuICAgIHRoaXMubW91c2VFbnRlckxpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmlzSG92ZXJlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICB0aGlzLm1vdXNlTGVhdmVMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgdGhpcy5pc0hvdmVyZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubW91c2VFbnRlckxpc3RlbmVyKSB7IHRoaXMubW91c2VFbnRlckxpc3RlbmVyKCk7IH1cclxuICAgIGlmICh0aGlzLm1vdXNlTGVhdmVMaXN0ZW5lcikgeyB0aGlzLm1vdXNlTGVhdmVMaXN0ZW5lcigpOyB9XHJcblxyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKTtcclxuICAgIGlmICh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH0gIFxyXG5cclxuICBwdWJsaWMgdXBkYXRlU3R5bGUoKTogdm9pZCB7XHJcbiAgICBsZXQgdGhlbWVzQ291bnQgPSBbdGhpcy5wcmltYXJ5LCB0aGlzLmFjY2VudCwgdGhpcy53YXJuXS5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZSkubGVuZ3RoO1xyXG4gICAgaWYgKHRoZW1lc0NvdW50ID4gMSkge1xyXG4gICAgICB0aHJvdyBFcnJvcignRWluIE1yZEJ1dHRvbiBrYW5uIG51ciBlaW4gVGhlbWEgaGFiZW4uIFNldHplIFwicHJpbWFyeVwiLCBcImFjY2VudFwiIG9kZXIgXCJ3YXJuXCIgYWxzIFRoZW1hLicpO1xyXG4gICAgfVxyXG4gICAgbGV0IGFwcGVhcmFuY2VDb3VudCA9IFt0aGlzLmljb24sIHRoaXMucmFpc2VkLCB0aGlzLm91dGxpbmUsIHRoaXMuZmxhdCwgdGhpcy5mYWIsIHRoaXMubWluaUZhYiwgdGhpcy50b2dnbGVdLmZpbHRlcigodmFsdWUpID0+IHZhbHVlKS5sZW5ndGg7XHJcbiAgICBpZiAoYXBwZWFyYW5jZUNvdW50ID4gMSkge1xyXG4gICAgICB0aHJvdyBFcnJvcignRWluIE1yZEJ1dHRvbiBrYW5uIG51ciBlaW5lbiBTdHlsZSBoYWJlbi4gU2V0emUgXCJpY29uLWJ1dHRvblwiLCBcInJhaXNlZC1idXR0b25cIiwgXCJvdXRsaW5lLWJ1dHRvblwiLCBcImZsYXQtYnV0dG9uXCIsIFwiZmFiLWJ1dHRvblwiLCBcIm1pbmlGYWItYnV0dG9uXCIgb2RlciBrZWluZW4gU3R5bGUuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmFsbHMgaXJnZW5kZWluZSBGYXJiZS9UaGVtYSBnZXNldHp0IGlzdCwgd2lyZCBkaWUgSGludGVyZ3J1bmQtIHVuZCBUZXh0ZmFyYmUgZGVzIEJ1dHRvbnMgYW5oYW5kIGRpZXNlciB1bmQgZGVzIFN0eWxlcyBnZXNldHp0LlxyXG4gICAgaWYgKHRoaXMucHJpbWFyeSB8fCB0aGlzLmFjY2VudCB8fCB0aGlzLndhcm4gfHwgdGhpcy5jdXN0b21CZ0NvbG9yIHx8IHRoaXMuY3VzdG9tVGV4dENvbG9yKSB7XHJcbiAgICAgIC8vIFdlbm4gJ2tlZXBDdXN0b21CZ0NvbG9yJyBnZXNldHp0IGlzdCwgZGFubiB3aXJkICdjdXN0b21CZ0NvbG9yJyBhbHMgJ2Jhc2VDb2xvcicgdmVyd2VuZGV0XHJcbiAgICAgIGxldCBiYXNlQ29sb3I6IHN0cmluZyA9IHRoaXMua2VlcEN1c3RvbUJnQ29sb3IgJiYgISF0aGlzLmN1c3RvbUJnQ29sb3IgPyB0aGlzLmN1c3RvbUJnQ29sb3IgOlxyXG4gICAgICAgIC8vIFNvbnN0IHdlbm4gZWluIFRoZW1lIGdlc2V0enQgaXN0LCB3aXJkIGRpZSBlbnRzcHJlY2hlbmRlIEZhcmJlIGRlcyBUaGVtZXMgdmVyd2VuZGV0XHJcbiAgICAgICAgdGhpcy5wcmltYXJ5ID8gXy5pc09iamVjdCh0aGlzLmJ1dHRvblByaW1hcnkpID8gKHRoaXMuYnV0dG9uUHJpbWFyeSBhcyBNcmRCYXNlQ29sb3JUaGVtZSkuYmFja2dyb3VuZCA6IHRoaXMuYnV0dG9uUHJpbWFyeSBhcyBzdHJpbmcgOlxyXG4gICAgICAgIHRoaXMuYWNjZW50ID8gXy5pc09iamVjdCh0aGlzLmJ1dHRvbkFjY2VudCkgPyAodGhpcy5idXR0b25BY2NlbnQgYXMgTXJkQmFzZUNvbG9yVGhlbWUpLmJhY2tncm91bmQgOiB0aGlzLmJ1dHRvbkFjY2VudCBhcyBzdHJpbmcgOlxyXG4gICAgICAgIHRoaXMud2FybiA/IF8uaXNPYmplY3QodGhpcy5idXR0b25XYXJuKSA/ICh0aGlzLmJ1dHRvbldhcm4gYXMgTXJkQmFzZUNvbG9yVGhlbWUpLmJhY2tncm91bmQgOiB0aGlzLmJ1dHRvbldhcm4gYXMgc3RyaW5nIDpcclxuICAgICAgICAvLyBTb25zdCB3ZW5uICdjdXN0b21CZ0NvbG9yJyBnZXNldHp0IGlzdCwgd2lyZCAnY3VzdG9tQmdDb2xvcicgdmVyd2VuZGV0LCBzb25zdCAnY3VzdG9tVGV4dENvbG9yJ1xyXG4gICAgICAgICEhdGhpcy5jdXN0b21CZ0NvbG9yID8gdGhpcy5jdXN0b21CZ0NvbG9yIDogdGhpcy5jdXN0b21UZXh0Q29sb3I7XHJcblxyXG4gICAgICAvLyBXZW5uICdrZWVwQ3VzdG9tVGV4dENvbG9yJyBnZXNldHp0IGlzdCwgZGFubiB3aXJkICdjdXN0b21UZXh0Q29sb3InIGFscyAnYmFzZVRleHRDb2xvcicgdmVyd2VuZGV0XHJcbiAgICAgIGxldCBiYXNlVGV4dENvbG9yID0gdGhpcy5rZWVwQ3VzdG9tVGV4dENvbG9yICYmICEhdGhpcy5jdXN0b21UZXh0Q29sb3IgPyB0aGlzLmN1c3RvbVRleHRDb2xvciA6XHJcbiAgICAgICAgLy8gU29uc3Qgd2VubiBlaW4gVGhlbWUgZ2VzZXR6dCBpc3QsIHdpcmQgZGllIGVudHNwcmVjaGVuZGUgRmFyYmUgZGVzIFRoZW1lcyB2ZXJ3ZW5kZXRcclxuICAgICAgICB0aGlzLnByaW1hcnkgPyBfLmlzT2JqZWN0KHRoaXMuYnV0dG9uUHJpbWFyeSkgPyAodGhpcy5idXR0b25QcmltYXJ5IGFzIE1yZEJhc2VDb2xvclRoZW1lKS50ZXh0IDogdGhpcy5idXR0b25QcmltYXJ5IGFzIHN0cmluZyA6XHJcbiAgICAgICAgdGhpcy5hY2NlbnQgPyBfLmlzT2JqZWN0KHRoaXMuYnV0dG9uQWNjZW50KSA/ICh0aGlzLmJ1dHRvbkFjY2VudCBhcyBNcmRCYXNlQ29sb3JUaGVtZSkudGV4dCA6IHRoaXMuYnV0dG9uQWNjZW50IGFzIHN0cmluZyA6XHJcbiAgICAgICAgdGhpcy53YXJuID8gXy5pc09iamVjdCh0aGlzLmJ1dHRvbldhcm4pID8gKHRoaXMuYnV0dG9uV2FybiBhcyBNcmRCYXNlQ29sb3JUaGVtZSkudGV4dCA6IHRoaXMuYnV0dG9uV2FybiBhcyBzdHJpbmcgOlxyXG4gICAgICAgIC8vIFNvbnN0IHdlbm4gJ2N1c3RvbVRleHRDb2xvcicgZ2VzZXR6dCBpc3QsIHdpcmQgJ2N1c3RvbVRleHRDb2xvcicgdmVyd2VuZGV0LCBzb25zdCAndGV4dERhcmtDb2xvcidcclxuICAgICAgICAhIXRoaXMuY3VzdG9tVGV4dENvbG9yID8gdGhpcy5jdXN0b21UZXh0Q29sb3IgOiB0aGlzLnRleHREYXJrQ29sb3I7XHJcblxyXG4gICAgICAvLyAnYmdDb2xvcicgd2lyZCBhdWYgJ2Jhc2VDb2xvcicgZ2VzZXR6dFxyXG4gICAgICB0aGlzLmJnQ29sb3IgPSBiYXNlQ29sb3I7XHJcbiAgICAgIC8vIFdlbm4gJ2tlZXBDdXN0b21UZXh0Q29sb3InIG9kZXIga2VpbiBUaGVtYSB1bmQgJ2N1c3RvbUJnQ29sb3InLCB1bmQgJ2N1c3RvbVRleHRDb2xvcicgZ2VzZXR6dCBzaW5kLCB3aXJkICd0ZXh0Q29sb3InIGF1ZiAnY3VzdG9tVGV4dENvbG9yJyBnZXNldHp0XHJcbiAgICAgIHRoaXMudGV4dENvbG9yID0gKHRoaXMua2VlcEN1c3RvbVRleHRDb2xvciB8fCAodGhlbWVzQ291bnQgPT09IDAgJiYgdGhpcy5jdXN0b21CZ0NvbG9yKSkgJiYgISF0aGlzLmN1c3RvbVRleHRDb2xvciA/IHRoaXMuY3VzdG9tVGV4dENvbG9yIDpcclxuICAgICAgICAvLyBTb25zdCB3ZW5uIGVpbiBUaGVtYSB1bmQgJ2tlZXBDdXN0b21CZ0NvbG9yJyBnZXNldHp0IGlzdCwgd2lyZCAnYmFzZVRleHRDb2xvcicgdmVyd2VuZGV0XHJcbiAgICAgICAgKHRoZW1lc0NvdW50ID09PSAxICYmIHRoaXMua2VlcEN1c3RvbUJnQ29sb3IpID8gYmFzZVRleHRDb2xvciA6XHJcbiAgICAgICAgLy8gU29uc3QsIHdlbm4gZGllIEFwcGVhcmFuY2UgbmljaHQgVG9nZ2xlIGlzdCBvZGVyIGRlciBUb2dnbGUtQnV0dG9uIHNlbGVrdGllcnQgaXN0LFxyXG4gICAgICAgIC8vIHdpcmQgYW5oYW5kIGRlciAnYmFzZUNvbG9yJyBlbnRzY2hpZWRlbiwgb2IgJ3RleHREYXJrQ29sb3InIG9kZXIgJ3RleHRMaWdodENvbG9yJyB2ZXJ3ZW5kZXQgd2lyZFxyXG4gICAgICAgIHRoaXMudG9nZ2xlID8gdGhpcy50b2dnbGVTZWxlY3RlZCAmJiB0aGlzLmN1c3RvbVRvZ2dsZVNlbGVjdGVkVGV4dENvbG9yID8gdGhpcy5jdXN0b21Ub2dnbGVTZWxlY3RlZFRleHRDb2xvciA6XHJcbiAgICAgICAgICAhdGhpcy50b2dnbGVTZWxlY3RlZCAmJiB0aGlzLmN1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRUZXh0Q29sb3IgPyB0aGlzLmN1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRUZXh0Q29sb3IgOlxyXG4gICAgICAgIC8qIXRoaXMudG9nZ2xlIHx8Ki8gdGhpcy50b2dnbGVTZWxlY3RlZCA/IENvbG9yVXRpbC5zaG91bGRUZXh0QmVEYXJrKGJhc2VDb2xvcikgPyB0aGlzLnRleHREYXJrQ29sb3IgOiB0aGlzLnRleHRMaWdodENvbG9yIDpcclxuICAgICAgICBDb2xvclV0aWwuc2hvdWxkVGV4dEJlRGFyayh0aGlzLnRvZ2dsZVVuc2VsZWN0ZWRDb2xvcikgPyB0aGlzLnRleHREYXJrQ29sb3IgOiB0aGlzLnRleHRMaWdodENvbG9yIDpcclxuICAgICAgICAvLyBXZW5uIGRpZSBBcHBlYXJhbmNlIFRvZ2dsZSBpc3QgdW5kIGRlciBCdXR0b24gbmljaHQgc2VsZWt0aWVydCBpc3QgdW5kICdjdXN0b21Ub2dnbGVVbnNlbGVjdGVkVGV4dENvbG9yJyBnZXNldHp0IGlzdCxcclxuICAgICAgICAvLyB3aXJkIGRpZXNlIHZlcndlbmRldFxyXG4gICAgICAgIC8vIHRoaXMuY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvciA/IHRoaXMuY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvciA6XHJcbiAgICAgICAgLy8gU29uc3Qgd2lyZCBhbmhhbmQgdm9uICd0b2dnbGVVbnNlbGVjdGVkQ29sb3InIGVudHNjaGllZGVuLCBvYiAndGV4dERhcmtDb2xvcicgb2RlciAndGV4dExpZ2h0Q29sb3InIHZlcndlbmRldCB3aXJkXHJcbiAgICAgICAgQ29sb3JVdGlsLnNob3VsZFRleHRCZURhcmsoYmFzZUNvbG9yKSA/IHRoaXMudGV4dERhcmtDb2xvciA6IHRoaXMudGV4dExpZ2h0Q29sb3I7XHJcbiAgICAgICAgLy8gU29uc3Qgd2lyZCAndG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvcicgdmVyd2VuZGV0XHJcbiAgICAgIC8vIHdlbm4gY3VzdG9tSG92ZXJDb2xvciBnZWdlYmVuIGRhbm4gc2V0emUgZGllc2Ugc29uc3Qgd2lyZCAnaG92ZXJDb2xvcicgYXVmIGVpbmUgMjAlIHRyYW5zcGFyZW50ZSBWZXJzaW9uIHZvbiAnYmFzZUNvbG9yJyBnZXNldHp0XHJcbiAgICAgIHRoaXMuaG92ZXJDb2xvciA9IHRoaXMuY3VzdG9tSG92ZXJDb2xvciA/IHRoaXMuY3VzdG9tSG92ZXJDb2xvciA6IENvbG9yVXRpbC5jaGFuZ2VDb2xvck9wYWNpdHkoYmFzZUNvbG9yLCAyMCk7XHJcbiAgICAgIC8vICdhY3RpdmVDb2xvcicgd2lyZCBhdWYgMzAlIHRyYW5zcGFyZW50ZSBWZXJzaW9uIHZvbiAnYmFzZUNvbG9yJyBtaXQgMTAlIGhlbGxlcmVyIEZhcmJlIGdlc2V0enRcclxuICAgICAgdGhpcy5hY3RpdmVDb2xvciA9IENvbG9yVXRpbC5jaGFuZ2VDb2xvck9wYWNpdHkoQ29sb3JVdGlsLmNoYW5nZUNvbG9yQnJpZ2h0bmVzc1BlcmNlbnQoYmFzZUNvbG9yLCAxMCksIDMwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGw7xyIGRlbiBTdGFuZGFyZC1TdHlsZSwgT3V0bGluZS1TdHlsZSB1bmQgSWNvbi1TdHlsZVxyXG4gICAgaWYgKGFwcGVhcmFuY2VDb3VudCA9PT0gMCB8fCB0aGlzLm91dGxpbmUgfHwgdGhpcy5pY29uKSB7XHJcbiAgICAgIC8vIFdlbm4gZWluIFRoZW1hIHVuZCAna2VlcEN1c3RvbUJnQ29sb3InIG5pY2h0IGdlc2V0eiBpc3QgT0RFUlxyXG4gICAgICAvLyBrZWluZSAnY3VzdG9tQmdDb2xvcicsIGFiZXIgJ2N1c3RvbVRleHRDb2xvcicgZ2VzZXR6dCBzaW5kLi4uXHJcbiAgICAgIGlmICgodGhlbWVzQ291bnQgPT09IDEgJiYgIXRoaXMua2VlcEN1c3RvbUJnQ29sb3IpIHx8ICghdGhpcy5jdXN0b21CZ0NvbG9yICYmIHRoaXMuY3VzdG9tVGV4dENvbG9yKSkge1xyXG4gICAgICAgIC8vIC4uLiB3aXJkICd0ZXh0Q29sb3InLCBmYWxscyBuaWNodCBkdXJjaCAna2VlcEN1c3RvbVRleHRDb2xvcicgdW5kICdjdXN0b21UZXh0Q29sb3InIGZlc3QsIGF1ZiAnYmdDb2xvcicgZ2VzZXR6dFxyXG4gICAgICAgIHRoaXMudGV4dENvbG9yID0gKHRoaXMua2VlcEN1c3RvbVRleHRDb2xvciAmJiAhIXRoaXMuY3VzdG9tVGV4dENvbG9yKSA/IHRoaXMuY3VzdG9tVGV4dENvbG9yIDogdGhpcy5iZ0NvbG9yO1xyXG4gICAgICAgIC8vIC4uLiB3aXJkICdiZ0NvbG9yJywgZmFsbHMgbmljaHQgZHVyY2ggJ2tlZXBDdXN0b21CZ0NvbG9yJyB1bmQgJ2N1c3RvbUJnQ29sb3InIGZlc3QsIGF1ZiBkaWUgU3RhbmRhcmQtSGludGVyZ3J1bmRmYXJiZSBnZXNldHp0XHJcbiAgICAgICAgdGhpcy5iZ0NvbG9yID0gKHRoaXMua2VlcEN1c3RvbUJnQ29sb3IgJiYgISF0aGlzLmN1c3RvbUJnQ29sb3IpID8gdGhpcy5jdXN0b21CZ0NvbG9yIDogdGhpcy5fY29uZmlnLmJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBGYWxscyBrZWluZSAncHJvZ3Jlc3NDb2xvcicgZ2VzZXR6dCBpc3QuLi5cclxuICAgIGlmICghdGhpcy5wcm9ncmVzc0NvbG9yKSB7XHJcbiAgICAgIC8vIC4uLiB1bmQgd2lyIGVpbiBUaGVtZSBvZGVyIGVpbmUgYmVudXR6ZXJkZWZpbmllcnRlIFRleHRmYXJiZSBvZGVyIEhpbnRlcmdydW5kZmFyYmUgaGFiZW4uLi5cclxuICAgICAgaWYgKHRoZW1lc0NvdW50ID09PSAxIHx8IHRoaXMuY3VzdG9tVGV4dENvbG9yIHx8IHRoaXMuY3VzdG9tQmdDb2xvcikge1xyXG4gICAgICAgIC8vIC4uLiB3aXJkICdwcm9ncmVzc0NvbG9yJyBmw7xyIGRlbiBTdGFuZGFyZC1TdHlsZSwgT3V0bGluZS1TdHlsZSB1bmQgSWNvbi1TdHlsZSBhdWYgJ3RleHRDb2xvcicgZ2VzZXR6dCxcclxuICAgICAgICAvLyBhbnNvbnN0ZW4gYXVmIDIwJSBoZWxsZXJlIFZlcnNpb24gdm9uICdiZ0NvbG9yJ1xyXG4gICAgICAgIGlmIChhcHBlYXJhbmNlQ291bnQgPT09IDAgfHwgdGhpcy5vdXRsaW5lIHx8IHRoaXMuaWNvbikge1xyXG4gICAgICAgICAgdGhpcy5wcm9ncmVzc0NvbG9yID0gdGhpcy50ZXh0Q29sb3I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NDb2xvciA9IENvbG9yVXRpbC5jaGFuZ2VDb2xvckJyaWdodG5lc3NQZXJjZW50KHRoaXMuYmdDb2xvciwgMjApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBPaG5lIFRoZW1lIHVuZCBiZW51dHplcmRlZmluaWVydGUgRmFyYmVuIHdpcmQgJ3Byb2dyZXNzQ29sb3InIGF1ZiBkaWUgR3J1bmQtUHJvZ3Jlc3MtQ29sb3IgZ2VzZXR6dFxyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NDb2xvciA9IHRoaXMuYnV0dG9uUHJvZ3Jlc3M7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBGYWxscyBrZWluIGV4cGxpemlldGVyICd0b29sdGlwVGV4dCcgZ2VzZXR6dCBpc3QsIHdpcmQgZGVyIFRleHQgZGVzIEJ1dHRvbnMgYWxzIFRvb2x0aXAtVGV4dCB2ZXJ3ZW5kZXRcclxuICAgIGlmICh0aGlzLm1yZEJ1dHRvblRleHRDb250ZW50ICYmICF0aGlzLnRvb2x0aXBUZXh0KSB7XHJcbiAgICAgIHRoaXMudG9vbHRpcFRleHQgPSB0aGlzLm1yZEJ1dHRvblRleHRDb250ZW50Lm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudG9nZ2xlICYmIHRoaXMudG9nZ2xlU2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXR6dCBkaWUgU3RhbmRhcmQtU3R5bGVzIGFuaGFuZCBkZXIgS29uZmlndXJhdGlvbiB1bmQgZGVyIGdlc2V0enRlbiBBdHRyaWJ1dGUuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBwcml2YXRlIGluaXRCYXNlU3R5bGUoKTogdm9pZCB7XHJcbiAgICBsZXQgYXBwZWFyYW5jZTogTXJkQnV0dG9uQXBwZWFyYW5jZSA9IHRoaXMuaWNvbiA/IE1yZEJ1dHRvbkFwcGVhcmFuY2UuSUNPTiA6IHRoaXMucmFpc2VkID8gTXJkQnV0dG9uQXBwZWFyYW5jZS5SQUlTRUQgOlxyXG4gICAgICB0aGlzLm91dGxpbmUgPyBNcmRCdXR0b25BcHBlYXJhbmNlLk9VVExJTkUgOiB0aGlzLmZsYXQgPyBNcmRCdXR0b25BcHBlYXJhbmNlLkZMQVQgOiB0aGlzLmZhYiA/IE1yZEJ1dHRvbkFwcGVhcmFuY2UuRkFCIDpcclxuICAgICAgdGhpcy5taW5pRmFiID8gTXJkQnV0dG9uQXBwZWFyYW5jZS5NSU5JX0ZBQiA6IHRoaXMudG9nZ2xlID8gTXJkQnV0dG9uQXBwZWFyYW5jZS5UT0dHTEUgOiBudWxsOy8vTXJkQnV0dG9uQXBwZWFyYW5jZS5ERUZBVUxUO1xyXG4gICAgdGhpcy51bmNvbGxhcHNlZEFwcGVhcmFuY2UgPSB0aGlzLnVuY29sbGFwc2VkQXBwZWFyYW5jZSAhPT0gdW5kZWZpbmVkID8gdGhpcy51bmNvbGxhcHNlZEFwcGVhcmFuY2UgOiBhcHBlYXJhbmNlO1xyXG5cclxuICAgIHRoaXMuYnV0dG9uUHJpbWFyeSA9IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LnByaW1hcnkgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5wcmltYXJ5IHx8IHRoaXMuX2NvbmZpZy5iYXNlQ29sb3JzLnByaW1hcnk7XHJcbiAgICB0aGlzLmJ1dHRvbkFjY2VudCA9IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LmFjY2VudCB8fCB0aGlzLl9jb25maWcuYnV0dG9uLmFjY2VudCB8fCB0aGlzLl9jb25maWcuYmFzZUNvbG9ycy5hY2NlbnQ7XHJcbiAgICB0aGlzLmJ1dHRvbldhcm4gPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy53YXJuIHx8IHRoaXMuX2NvbmZpZy5idXR0b24ud2FybiB8fCB0aGlzLl9jb25maWcuYmFzZUNvbG9ycy53YXJuO1xyXG4gICAgdGhpcy5idXR0b25EaXNhYmxlZCA9IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LmRpc2FibGVkIHx8IHRoaXMuX2NvbmZpZy5idXR0b24uZGlzYWJsZWRcclxuICAgIHRoaXMuYnV0dG9uUHJvZ3Jlc3MgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5wcm9ncmVzc0NvbG9yIHx8IHRoaXMuX2NvbmZpZy5idXR0b24/LnByb2dyZXNzQ29sb3IgfHxcclxuICAgICAgKF8uaXNPYmplY3QodGhpcy5idXR0b25QcmltYXJ5KSA/ICh0aGlzLmJ1dHRvblByaW1hcnkgYXMgTXJkQmFzZUNvbG9yVGhlbWUpLnRleHQgOiB0aGlzLmJ1dHRvblByaW1hcnkgYXMgc3RyaW5nKTtcclxuXHJcbiAgICB0aGlzLmJnQ29sb3IgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5iYWNrZ3JvdW5kQ29sb3IgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLnRleHRMaWdodENvbG9yID0gdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8udGV4dExpZ2h0Q29sb3IgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi50ZXh0TGlnaHRDb2xvcjtcclxuICAgIHRoaXMudGV4dERhcmtDb2xvciA9IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LnRleHREYXJrQ29sb3IgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi50ZXh0RGFya0NvbG9yO1xyXG4gICAgdGhpcy50ZXh0Q29sb3IgPSB0aGlzLnRleHREYXJrQ29sb3I7XHJcbiAgICB0aGlzLmhvdmVyQ29sb3IgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5ob3ZlckNvbG9yIHx8IHRoaXMuX2NvbmZpZy5idXR0b24uaG92ZXJDb2xvcjtcclxuICAgIHRoaXMuYWN0aXZlQ29sb3IgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5hY3RpdmVDb2xvciB8fCB0aGlzLl9jb25maWcuYnV0dG9uLmFjdGl2ZUNvbG9yO1xyXG4gICAgdGhpcy5kaXNhYmxlZFRleHRDb2xvciA9IHRoaXMuYnV0dG9uRGlzYWJsZWQudGV4dDtcclxuICAgIHRoaXMuZGlzYWJsZWRCZ0NvbG9yID0gdGhpcy5idXR0b25EaXNhYmxlZC5iYWNrZ3JvdW5kO1xyXG4gICAgdGhpcy50b2dnbGVVbnNlbGVjdGVkQ29sb3IgPSB0aGlzLmN1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRDb2xvciB8fCB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy51bnNlbGVjdGVkQmdDb2xvcjtcclxuXHJcbiAgICBpZiAodGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8uYm9yZGVyKSB7XHJcbiAgICAgIGlmIChfLmlzT2JqZWN0KHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0uYm9yZGVyKSkge1xyXG4gICAgICAgIHRoaXMuYm9yZGVyV2lkdGggPSAodGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXS5ib3JkZXIgYXMgTXJkQm9yZGVyKS53aWR0aDtcclxuICAgICAgICB0aGlzLmJvcmRlclN0eWxlID0gKHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0uYm9yZGVyIGFzIE1yZEJvcmRlcikuc3R5bGU7XHJcbiAgICAgICAgdGhpcy5ib3JkZXJDb2xvciA9ICh0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdLmJvcmRlciBhcyBNcmRCb3JkZXIpLmNvbG9yO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBib3JkZXIgPSAgKHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0uYm9yZGVyIGFzIHN0cmluZykuc3BsaXQoJyAnKVxyXG4gICAgICAgIHRoaXMuYm9yZGVyV2lkdGggPSBib3JkZXJbMF07XHJcbiAgICAgICAgdGhpcy5ib3JkZXJTdHlsZSA9IGJvcmRlclsxXTtcclxuICAgICAgICB0aGlzLmJvcmRlckNvbG9yID0gYm9yZGVyWzJdO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmJvcmRlcldpZHRoID0gXy5pc09iamVjdCh0aGlzLl9jb25maWcuYnV0dG9uLmJvcmRlcikgPyAodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIgYXMgTXJkQm9yZGVyKT8ud2lkdGggOiAodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIgYXMgc3RyaW5nKS5zcGxpdCgnICcpWzBdO1xyXG4gICAgICB0aGlzLmJvcmRlclN0eWxlID0gXy5pc09iamVjdCh0aGlzLl9jb25maWcuYnV0dG9uLmJvcmRlcikgPyAodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIgYXMgTXJkQm9yZGVyKT8uc3R5bGUgOiAodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIgYXMgc3RyaW5nKS5zcGxpdCgnICcpWzFdO1xyXG4gICAgICB0aGlzLmJvcmRlckNvbG9yID0gXy5pc09iamVjdCh0aGlzLl9jb25maWcuYnV0dG9uLmJvcmRlcikgPyAodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIgYXMgTXJkQm9yZGVyKT8uY29sb3IgOiAodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIgYXMgc3RyaW5nKS5zcGxpdCgnICcpWzJdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWluSGVpZ2h0ID0gdGhpcy5taW5IZWlnaHQgfHwgdGhpcy5kaWFtZXRlciB8fCB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5taW5IZWlnaHQgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5taW5IZWlnaHQ7XHJcbiAgICB0aGlzLmZvbnRTaXplID0gdGhpcy5mb250U2l6ZSB8fCB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5mb250U2l6ZSB8fCB0aGlzLl9jb25maWcuYnV0dG9uLmZvbnRTaXplIHx8IHRoaXMuX2NvbmZpZy5iYXNlRm9udC5zaXplO1xyXG4gICAgdGhpcy5mb250RmFtaWx5ID0gdGhpcy5mb250RmFtaWx5IHx8IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LmZvbnRGYW1pbHkgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5mb250RmFtaWx5IHx8IHRoaXMuX2NvbmZpZy5iYXNlRm9udC5mYW1pbHk7XHJcbiAgICB0aGlzLmRpYW1ldGVyID0gdGhpcy5kaWFtZXRlciB8fCB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5kaWFtZXRlciB8fCB0aGlzLl9jb25maWcuYnV0dG9uLmRpYW1ldGVyO1xyXG4gICAgdGhpcy5pY29uU2l6ZSA9IHRoaXMuaWNvblNpemUgfHwgdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8uaWNvblNpemUgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5pY29uU2l6ZTtcclxuICAgIHRoaXMuYm9yZGVyUmFkaXVzID0gdGhpcy5ib3JkZXJSYWRpdXMgfHwgdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8uYm9yZGVyUmFkaXVzIHx8IHRoaXMuX2NvbmZpZy5idXR0b24uYm9yZGVyUmFkaXVzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2ssIHdlbm4gc2ljaCBkZXIgQ29sbGFicy1TdGF0dXMgZGVzIEJ1dHRvbnMgw6RuZGVydC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBpc0NvbGxhcHNlZCBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGtvbGxhYmllcnQgaXN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBidXR0b25Db2xsYXBzZWQoaXNDb2xsYXBzZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIC8vIFdpciByZWFnaWVyZW4gbnVyLCB3ZW5uIHNpY2ggZGVyIFN0YXR1cyDDpG5kZXJ0XHJcbiAgICBpZiAodGhpcy5pc0NvbGxhcHNlZCAhPT0gaXNDb2xsYXBzZWQpIHtcclxuICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9IGlzQ29sbGFwc2VkO1xyXG4gICAgICAvLyBXZW5uICdjb2xsYXBzZVRvJyBnZXNldHp0IGlzdCwgd2lyZCBkZXIgQnV0dG9uIGVudHNwcmVjaGVuZCB1bWdlc3R5bHRcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuY29sbGFwc2VUbykpIHtcclxuICAgICAgICAvLyBEaWVzZSBXZXJ0ZSBtw7xzc2VuIHp1csO8Y2tnZXNldHp0IHdlcmRlbiwgZGEgc2llIGbDvHIgZGVuIG5ldWVuIFN0eWxlIG5ldSBnZXNldHp0IHdlcmRlbiBtw7xzc2VuXHJcbiAgICAgICAgdGhpcy5ib3JkZXJSYWRpdXMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLm1pbkhlaWdodCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmRpYW1ldGVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuaWNvblNpemUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKGlzQ29sbGFwc2VkKSB7XHJcbiAgICAgICAgICB0aGlzLmljb24gPSB0aGlzLmNvbGxhcHNlVG8gPT09IE1yZEJ1dHRvbkFwcGVhcmFuY2UuSUNPTiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMucmFpc2VkID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm91dGxpbmUgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuZmxhdCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5mYWIgPSB0aGlzLmNvbGxhcHNlVG8gPT09IE1yZEJ1dHRvbkFwcGVhcmFuY2UuRkFCID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5taW5pRmFiID0gdGhpcy5jb2xsYXBzZVRvID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLk1JTklfRkFCID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5pY29uID0gdGhpcy51bmNvbGxhcHNlZEFwcGVhcmFuY2UgPT09IE1yZEJ1dHRvbkFwcGVhcmFuY2UuSUNPTiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMucmFpc2VkID0gdGhpcy51bmNvbGxhcHNlZEFwcGVhcmFuY2UgPT09IE1yZEJ1dHRvbkFwcGVhcmFuY2UuUkFJU0VEID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5vdXRsaW5lID0gdGhpcy51bmNvbGxhcHNlZEFwcGVhcmFuY2UgPT09IE1yZEJ1dHRvbkFwcGVhcmFuY2UuT1VUTElORSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuZmxhdCA9IHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLkZMQVQgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmZhYiA9IHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLkZBQiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubWluaUZhYiA9IHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLk1JTklfRkFCID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmNsaWNrLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZW51bSBNcmRCdXR0b25BcHBlYXJhbmNlIHtcclxuICAvLyBERUZBVUxUID0gbnVsbCxcclxuICBJQ09OID0gJ2ljb24nLFxyXG4gIFJBSVNFRCA9ICdyYWlzZWQnLFxyXG4gIE9VVExJTkUgPSAnb3V0bGluZScsXHJcbiAgRkxBVCA9ICdmbGF0JyxcclxuICBGQUIgPSAnZmFiJyxcclxuICBNSU5JX0ZBQiA9ICdtaW5pRmFiJyxcclxuICBUT0dHTEUgPSAndG9nZ2xlJ1xyXG59XHJcbiIsIjwhLS0gRGVyIGVpZ2VudGxpY2ggSFRNTC1CdXR0b24gLS0+XHJcbjxidXR0b24gY2xhc3M9XCJtcmQtYnV0dG9uLWNvbnRhaW5lclwiXHJcbiAgI2J1dHRvbkNvbnRhaW5lclxyXG4gIFtzdHlsZS4tLWJnLWNvbG9yXT1cImJnQ29sb3JcIlxyXG4gIFtzdHlsZS4tLXRleHQtY29sb3JdPVwidGV4dENvbG9yXCJcclxuICBbc3R5bGUuLS1kaXNhYmxlZC10ZXh0LWNvbG9yXT1cImRpc2FibGVkVGV4dENvbG9yXCJcclxuICBbc3R5bGUuLS1kaXNhYmxlZC1iZy1jb2xvcl09XCJkaXNhYmxlZEJnQ29sb3JcIlxyXG4gIFtzdHlsZS4tLWJvcmRlci13aWR0aF09XCJib3JkZXJXaWR0aFwiXHJcbiAgW3N0eWxlLi0tYm9yZGVyLWNvbG9yXT1cImJvcmRlckNvbG9yXCJcclxuICBbc3R5bGUuLS1ib3JkZXItc3R5bGVdPVwiYm9yZGVyU3R5bGVcIlxyXG4gIFtzdHlsZS4tLWJvcmRlci1yYWRpdXNdPVwiYm9yZGVyUmFkaXVzXCJcclxuICBbc3R5bGUuLS1taW4taGVpZ2h0XT1cIm1pbkhlaWdodFwiXHJcbiAgW3N0eWxlLi0tZm9udC1zaXplXT1cImZvbnRTaXplXCJcclxuICBbc3R5bGUuLS1mb250LWZhbWlseV09XCJmb250RmFtaWx5XCJcclxuICBbc3R5bGUuLS1kaWFtZXRlcl09XCJkaWFtZXRlclwiXHJcbiAgW3N0eWxlLi0taWNvbi1zaXplXT1cImljb25TaXplXCJcclxuICBbc3R5bGUuLS11bnNlbGVjdGVkLWNvbG9yXT1cInRvZ2dsZVVuc2VsZWN0ZWRDb2xvclwiXHJcblxyXG4gIFtuZ1N0eWxlXT1cInsnbWluLXdpZHRoJzogZml0Q29udGVudCA/ICdmaXQtY29udGVudCcgOiAndW5zZXQnfVwiXHJcbiAgW25nQ2xhc3NdPVwieydtcmQtaWNvbi1idXR0b24nOiBpY29uLCAnbXJkLXJhaXNlZC1idXR0b24nOiByYWlzZWQsICdtcmQtb3V0bGluZS1idXR0b24nOiBvdXRsaW5lLFxyXG4gICAgJ21yZC1mbGF0LWJ1dHRvbic6IGZsYXQsICdtcmQtZmFiLWJ1dHRvbic6IGZhYiwgJ21yZC1taW5pLWZhYi1idXR0b24nOiBtaW5pRmFiLCAnbXJkLXRvZ2dsZS1idXR0b24nOiB0b2dnbGUsXHJcbiAgICAnbXJkLXRvZ2dsZS1zZWxlY3RlZCc6IHRvZ2dsZVNlbGVjdGVkLCAnZGlzYWJsZWQnOiBkaXNhYmxlZH1cIlxyXG5cclxuICBbbXJkVG9vbFRpcF09XCJ0b29sdGlwVGV4dFwiIFtzaG93T25UcnVuY2F0ZWRFbGVtZW50XT1cInRvb2x0aXBJZlRydW5jYXRlZCA/IG1yZEJ1dHRvblRleHRDb250ZW50IDogdW5kZWZpbmVkXCIgW3Nob3dUb29sVGlwXT1cInNob3dUb29sdGlwXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm1yZC1idXR0b24tYmFja2dyb3VuZFwiPlxyXG4gICAgPCEtLSBFaW4gT3ZlcmxheSDDvGJlciBkZW0gQnV0dG9uIHdlbGNoZXMgZGVuIEhvdmVyLSB1bmQgQWN0aXZlLUVmZmVrdCBhbnplaWd0IC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1yZC1idXR0b24tZm9jdXNcIiBbc3R5bGUuLS1ob3Zlci1jb2xvcl09XCJob3ZlckNvbG9yXCIgW3N0eWxlLi0tYWN0aXZlLWNvbG9yXT1cImFjdGl2ZUNvbG9yXCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPCEtLSBFaW4gT3ZlcmxheSDDvGJlciBkZW0gQnV0dG9uIHdlbGNoZXMgZGVuIEhvdmVyLSB1bmQgQWN0aXZlLUVmZmVrdCBhbnplaWd0IC0tPlxyXG4gIDwhLS0gPGRpdiBjbGFzcz1cIm1yZC1idXR0b24tZm9jdXNcIiBbc3R5bGUuLS1ob3Zlci1jb2xvcl09XCJob3ZlckNvbG9yXCIgW3N0eWxlLi0tYWN0aXZlLWNvbG9yXT1cImFjdGl2ZUNvbG9yXCI+PC9kaXY+IC0tPlxyXG4gIDwhLS0gRGVyIENvbnRlbnQgZGVzIEJ1dHRvbnMgLS0+XHJcbiAgPHNwYW4gY2xhc3M9XCJtcmQtYnV0dG9uLWNvbnRlbnRcIiBbbmdDbGFzc109XCJ7J2lzQ29sbGFwc2VkJzogaXNDb2xsYXBzZWR9XCI+XHJcbiAgICA8IS0tIExpbmtlciBJY29uLUNvbnRhaW5lciAtLT5cclxuICAgIDxzcGFuIGNsYXNzPVwibXJkLWJ1dHRvbi1pY29uLWNvbnRlbnRcIiBcclxuICAgICAgICAgIFtuZ0NsYXNzXT1cInsnZnVsbC1pY29uJzogZnVsbEljb259XCIgXHJcbiAgICAgICAgICBbaGlkZUlmVHJ1bmNhdGVkXT1cImNvbGxhcHNlXCIgXHJcbiAgICAgICAgICBkaXNwbGF5U3RhdGU9XCJmbGV4XCIgXHJcbiAgICAgICAgICByZXF1aXJlZEhpZGVBdHRyaWJ1dGU9XCJpY29uLWNvbGxhcHNlXCJcclxuICAgICAgICAgIGNoZWNrQ2hpbGRyZW5Gb3JBdHRyaWJ1dGUgXHJcbiAgICAgICAgICBbaGlkZU9uVHJ1bmNhdGVkRWxlbWVudF09XCJtcmRCdXR0b25UZXh0Q29udGVudFwiIFxyXG4gICAgICAgICAgW3BhcmVudFJlc2l6ZUVsZW1lbnRdPVwidGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzSG92ZXJlZCAmJiBoYXNDdXN0b21Ib3Zlckljb247IGVsc2UgZGVmYXVsdExlZnRJY29uc1wiPlxyXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm1yZC1pY29uW2N1c3RvbUhvdmVySWNvbl0sIFttcmQtaWNvbl1bY3VzdG9tSG92ZXJJY29uXVwiPjwvbmctY29udGVudD5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdExlZnRJY29ucz5cclxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtcmQtaWNvbjpub3QoW2N1c3RvbUhvdmVySWNvbl0pOm5vdChbaWNvbi1lbmRdKSwgW21yZC1pY29uXTpub3QoW2N1c3RvbUhvdmVySWNvbl0pOm5vdChbaWNvbi1lbmRdKVwiPjwvbmctY29udGVudD5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvc3Bhbj5cclxuICAgIFxyXG4gICAgPCEtLSBEZXIgVGV4dCBkZXMgQnV0dG9ucyAtLT5cclxuICAgIDxzcGFuIGNsYXNzPVwibXJkLWJ1dHRvbi10ZXh0LWNvbnRlbnRcIiBcclxuICAgICAgICAgIChoaWRkZW5DaGFuZ2VkKT1cImJ1dHRvbkNvbGxhcHNlZCgkZXZlbnQpXCIgXHJcbiAgICAgICAgICBbaGlkZUlmVHJ1bmNhdGVkXT1cImNvbGxhcHNlXCIgXHJcbiAgICAgICAgICAjbXJkQnV0dG9uVGV4dENvbnRlbnQgXHJcbiAgICAgICAgICBbcGFyZW50UmVzaXplRWxlbWVudF09XCJ0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCI6bm90KFttcmQtaWNvbl0pOm5vdChbbXJkLWljb25dKVwiPjwvbmctY29udGVudD5cclxuICAgIDwvc3Bhbj5cclxuICAgIFxyXG4gICAgPCEtLSBSZWNodGVyIEljb24tQ29udGFpbmVyIC0tPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJtcmQtYnV0dG9uLWljb24tY29udGVudFwiIFxyXG4gICAgICAgICAgW25nQ2xhc3NdPVwieydmdWxsLWljb24nOiBmdWxsSWNvbn1cIiBcclxuICAgICAgICAgIFtoaWRlSWZUcnVuY2F0ZWRdPVwiY29sbGFwc2VcIiBcclxuICAgICAgICAgIGRpc3BsYXlTdGF0ZT1cImZsZXhcIiBcclxuICAgICAgICAgIHJlcXVpcmVkSGlkZUF0dHJpYnV0ZT1cImljb24tY29sbGFwc2VcIlxyXG4gICAgICAgICAgY2hlY2tDaGlsZHJlbkZvckF0dHJpYnV0ZSBcclxuICAgICAgICAgIFtoaWRlT25UcnVuY2F0ZWRFbGVtZW50XT1cIm1yZEJ1dHRvblRleHRDb250ZW50XCIgXHJcbiAgICAgICAgICBbcGFyZW50UmVzaXplRWxlbWVudF09XCJ0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNIb3ZlcmVkICYmIGhhc0N1c3RvbUhvdmVySWNvbjsgZWxzZSBkZWZhdWx0UmlnaHRJY29uc1wiPlxyXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm1yZC1pY29uW2N1c3RvbUhvdmVySWNvbl0sIFttcmQtaWNvbl1bY3VzdG9tSG92ZXJJY29uXVwiPjwvbmctY29udGVudD5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFJpZ2h0SWNvbnM+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXJkLWljb25baWNvbi1lbmRdOm5vdChbY3VzdG9tSG92ZXJJY29uXSksIFttcmQtaWNvbl1baWNvbi1lbmRdOm5vdChbY3VzdG9tSG92ZXJJY29uXSlcIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8IS0tIERpZSBQcm9ncmVzcy1CYXIgZWluZXMgQnV0dG9ucyAobmljaHQgZsO8ciBJY29uLSwgRmFiLSB1bmQgTWluaS1GYWItQnV0dG9ucykgLS0+XHJcbiAgPG1yZC1wcm9ncmVzcy1iYXIgY2xhc3M9XCJtcmQtYnV0dG9uLXByb2dyZXNzLWJhclwiXHJcbiAgICAqbmdJZj1cIiFkaXNhYmxlZCAmJiAhaWNvbiAmJiAhZmFiICYmICFtaW5pRmFiICYmIChpc0xvYWRpbmcgfHwgbG9hZGluZz8udmFsdWUgfHwgbG9hZGluZ1Byb2dyZXNzPy52YWx1ZSB8fCBsb2FkaW5nUHJvZ3Jlc3M/LnZhbHVlID09PSAwKVwiXHJcbiAgICBbdmFsdWVdPVwibG9hZGluZ1Byb2dyZXNzPy52YWx1ZVwiIFttb2RlXT1cImxvYWRpbmdQcm9ncmVzcyA/ICdkZXRlcm1pbmF0ZScgOiAnaW5kZXRlcm1pbmF0ZSdcIiBbY29sb3JdPVwicHJvZ3Jlc3NDb2xvclwiPjwvbXJkLXByb2dyZXNzLWJhcj5cclxuICA8IS0tIERlciBQcm9ncmVzcy1TcGlubmVyIGVpbmVzIEJ1dHRvbnMgKG51ciBmw7xyIEljb24tLCBGYWItIHVuZCBNaW5pLUZhYi1CdXR0b25zKSAtLT5cclxuICA8bXJkLXByb2dyZXNzLXNwaW5uZXIgY2xhc3M9XCJtcmQtYnV0dG9uLXByb2dyZXNzLXNwaW5uZXJcIlxyXG4gICAgKm5nSWY9XCIhZGlzYWJsZWQgJiYgKGljb24gfHwgZmFiIHx8IG1pbmlGYWIpICYmIChpc0xvYWRpbmcgfHwgbG9hZGluZz8udmFsdWUgfHwgbG9hZGluZ1Byb2dyZXNzPy52YWx1ZSB8fCBsb2FkaW5nUHJvZ3Jlc3M/LnZhbHVlID09PSAwKVwiXHJcbiAgICBbdmFsdWVdPVwibG9hZGluZ1Byb2dyZXNzPy52YWx1ZVwiIFttb2RlXT1cImxvYWRpbmdQcm9ncmVzcyA/ICdkZXRlcm1pbmF0ZScgOiAnaW5kZXRlcm1pbmF0ZSdcIiBbY29sb3JdPVwicHJvZ3Jlc3NDb2xvclwiPjwvbXJkLXByb2dyZXNzLXNwaW5uZXI+XHJcbjwvYnV0dG9uPlxyXG4iXX0=