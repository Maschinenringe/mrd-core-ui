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
    onClick(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (!this.disabled) {
            this.click.emit(event);
        }
    }
    /** @nocollapse */ static ɵfac = function MrdButtonComponent_Factory(t) { return new (t || MrdButtonComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdButtonComponent, selectors: [["mrd-button"]], viewQuery: function MrdButtonComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mrdButtonTextContent = _t.first);
        } }, hostVars: 8, hostBindings: function MrdButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseenter", function MrdButtonComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function MrdButtonComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
        } if (rf & 2) {
            i0.ɵɵstyleProp("min-width", ctx.fitContent ? "fit-content" : "unset")("margin", ctx.toggle ? "0 -16px" : "unset")("transition", ctx.toggle ? "transform 0.2s" : "unset");
            i0.ɵɵclassProp("active", ctx.toggle && ctx.toggleSelected);
        } }, inputs: { icon: ["icon-button", "icon", booleanAttribute], raised: ["raised-button", "raised", booleanAttribute], outline: ["outline-button", "outline", booleanAttribute], flat: ["flat-button", "flat", booleanAttribute], fab: ["fab-button", "fab", booleanAttribute], miniFab: ["miniFab-button", "miniFab", booleanAttribute], toggle: ["toggle-button", "toggle", booleanAttribute], toggleSelected: ["selected", "toggleSelected", booleanAttribute], primary: ["primary", "primary", booleanAttribute], accent: ["accent", "accent", booleanAttribute], warn: ["warn", "warn", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], loading: "loading", isLoading: ["isLoading", "isLoading", booleanAttribute], loadingProgress: "loadingProgress", customTextColor: ["color", "customTextColor", colorThemeAttribute], customBgColor: ["backgroundColor", "customBgColor", colorAttribute], keepCustomTextColor: ["keepCustomTextColor", "keepCustomTextColor", booleanAttribute], keepCustomBgColor: ["keepCustomBgColor", "keepCustomBgColor", booleanAttribute], customToggleUnselectedColor: ["customToggleUnselectedColor", "customToggleUnselectedColor", colorAttribute], customToggleUnselectedTextColor: ["customToggleUnselectedTextColor", "customToggleUnselectedTextColor", colorAttribute], customToggleSelectedTextColor: ["customToggleSelectedTextColor", "customToggleSelectedTextColor", colorAttribute], progressColor: ["progressColor", "progressColor", colorAttribute], collapse: ["collapse", "collapse", booleanAttribute], collapseTo: "collapseTo", fitContent: ["fit-content", "fitContent", booleanAttribute], showTooltip: ["tooltip", "showTooltip", booleanAttribute], tooltipText: "tooltipText", tooltipIfTruncated: ["tooltipIfTruncated", "tooltipIfTruncated", booleanAttribute], tooltipIfCollapsed: ["tooltipIfCollapsed", "tooltipIfCollapsed", booleanAttribute], minHeight: ["minHeight", "minHeight", sizeAttribute], fontSize: ["fontSize", "fontSize", sizeAttribute], fontFamily: "fontFamily", fontWeight: "fontWeight", diameter: ["diameter", "diameter", sizeAttribute], iconSize: ["iconSize", "iconSize", sizeAttribute], fullIcon: ["fullIcon", "fullIcon", booleanAttribute], borderRadius: ["borderRadius", "borderRadius", sizeAttribute], customHoverColor: ["customHoverColor", "customHoverColor", colorAttribute], customHoverTextColor: ["customHoverTextColor", "customHoverTextColor", colorAttribute], value: "value" }, outputs: { click: "click" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c6, decls: 14, vars: 74, consts: [[1, "mrd-button-container", 3, "ngStyle", "ngClass", "mrdToolTip", "showOnTruncatedElement", "showToolTip"], ["buttonContainer", ""], [1, "mrd-button-background"], [1, "mrd-button-focus"], [1, "mrd-button-content", 3, "ngClass"], ["displayState", "flex", "requiredHideAttribute", "icon-collapse", "checkChildrenForAttribute", "", 1, "mrd-button-icon-content", 3, "ngClass", "hideIfTruncated", "hideOnTruncatedElement", "parentResizeElement"], [1, "mrd-button-text-content", 3, "hideIfTruncated", "parentResizeElement", "hiddenChanged"], ["mrdButtonTextContent", ""], ["class", "mrd-button-progress-bar", 3, "value", "mode", "color", 4, "ngIf"], ["class", "mrd-button-progress-spinner", 3, "value", "mode", "color", 4, "ngIf"], [1, "mrd-button-progress-bar", 3, "value", "mode", "color"], [1, "mrd-button-progress-spinner", 3, "value", "mode", "color"]], template: function MrdButtonComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵstyleProp("--bg-color", ctx.bgColor)("--text-color", ctx.textColor)("--hover-text-color", ctx.hoverTextColor)("--disabled-text-color", ctx.disabledTextColor)("--disabled-bg-color", ctx.disabledBgColor)("--border-width", ctx.borderWidth)("--border-color", ctx.borderColor)("--border-style", ctx.borderStyle)("--border-radius", ctx.borderRadius)("--min-height", ctx.minHeight)("--font-size", ctx.fontSize)("--font-family", ctx.fontFamily)("--font-weight", ctx.fontWeight)("--diameter", ctx.diameter)("--icon-size", ctx.iconSize)("--unselected-color", ctx.toggleUnselectedColor)("--test", "test");
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(56, _c2, ctx.fitContent ? "fit-content" : "unset"))("ngClass", i0.ɵɵpureFunctionV(58, _c3, [ctx.icon, ctx.raised, ctx.outline, ctx.flat, ctx.fab, ctx.miniFab, ctx.toggle, ctx.toggleSelected, ctx.disabled]))("mrdToolTip", ctx.tooltipText)("showOnTruncatedElement", ctx.tooltipIfTruncated ? _r1 : undefined)("showToolTip", ctx.showTooltip || ctx.tooltipIfCollapsed && ctx.isCollapsed);
            i0.ɵɵadvance(3);
            i0.ɵɵstyleProp("--hover-color", ctx.hoverColor)("--active-color", ctx.activeColor);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(68, _c4, ctx.isCollapsed));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(70, _c5, ctx.fullIcon))("hideIfTruncated", ctx.collapse)("hideOnTruncatedElement", _r1)("parentResizeElement", ctx.elementRef.nativeElement);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("hideIfTruncated", ctx.collapse)("parentResizeElement", ctx.elementRef.nativeElement);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(72, _c5, ctx.fullIcon))("hideIfTruncated", ctx.collapse)("hideOnTruncatedElement", _r1)("parentResizeElement", ctx.elementRef.nativeElement);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.disabled && !ctx.icon && !ctx.fab && !ctx.miniFab && (ctx.isLoading || (ctx.loading == null ? null : ctx.loading.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) === 0));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.disabled && (ctx.icon || ctx.fab || ctx.miniFab) && (ctx.isLoading || (ctx.loading == null ? null : ctx.loading.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) === 0));
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle, i2.MrdProgressBarComponent, i3.MrdProgressSpinnerComponent, i4.ToolTipRendererDirective, i5.HideIfTruncatedDirective], styles: ["[_nghost-%COMP%]{position:relative;display:inline-flex;flex-direction:column;justify-content:center;align-items:center;max-width:100%}.active[_nghost-%COMP%]{z-index:10}.mrd-button-container[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:center;min-height:var(--min-height);height:inherit;max-width:100%;width:100%;padding:0 16px;font-size:var(--font-size);font-family:var(--font-family);font-weight:var(--font-weight);letter-spacing:.1px;border:var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius);color:var(--text-color)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;z-index:1;width:100%}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]   .mrd-button-icon-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]   .mrd-button-text-content[_ngcontent-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]     mrd-icon{margin:0 2px}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]   .mrd-button-text-content[_ngcontent-%COMP%]{padding:0 16px}.mrd-button-container.disabled[_ngcontent-%COMP%]{color:var(--disabled-text-color);cursor:initial}.mrd-button-container.disabled[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{background-color:var(--disabled-bg-color)}.mrd-button-container[_ngcontent-%COMP%]:hover:not(.disabled){color:var(--hover-text-color)}.mrd-button-container[_ngcontent-%COMP%]:hover:not(.disabled)   .mrd-button-focus[_ngcontent-%COMP%]{background-color:var(--hover-color)}.mrd-button-container[_ngcontent-%COMP%]:active:not(.disabled)   .mrd-button-focus[_ngcontent-%COMP%]{background-color:var(--active-color)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-focus[_ngcontent-%COMP%]{position:absolute;inset:0;border-radius:var(--border-radius)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{position:absolute;inset:0;border-radius:var(--border-radius);background-color:var(--bg-color)}.mrd-button-container.mrd-raised-button[_ngcontent-%COMP%]:not(.disabled){--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-raised-button[_ngcontent-%COMP%]:not(.disabled):active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]{min-width:var(--diameter)!important;height:var(--diameter);padding:0}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{min-height:unset;width:var(--diameter);height:var(--diameter)}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]     mrd-icon{margin:0!important;font-size:calc(var(--diameter) / 2)}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     mrd-icon, .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     mrd-icon{font-size:var(--diameter)}.mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-mini-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]:active, .mrd-button-container.mrd-fab-button[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]{padding:0 44px;transition:color .2s}.mrd-button-container.mrd-toggle-button.mrd-toggle-selected[_ngcontent-%COMP%]{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040;transform:scale(1.15);z-index:10}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040;z-index:5}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:hover{z-index:5}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{transition:background-color .2s}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:not(.mrd-toggle-selected)   .mrd-button-background[_ngcontent-%COMP%]{background-color:var(--unselected-color)}.mrd-button-container[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container[_ngcontent-%COMP%]     mrd-icon{font-size:1.5em;margin-right:4px;margin-top:2px;width:var(--icon-size);height:var(--icon-size);min-width:1em}.mrd-button-container[_ngcontent-%COMP%]     [mrd-icon][icon-end], .mrd-button-container[_ngcontent-%COMP%]     mrd-icon[icon-end]{margin-right:0;margin-left:4px}.mrd-button-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:10%;left:5px;right:5px;height:10%;min-height:10%}.mrd-button-progress-spinner[_ngcontent-%COMP%]{position:absolute;top:3px;left:3px;width:calc(100% - 6px)!important;height:calc(100% - 6px)!important}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdButtonComponent, [{
        type: Component,
        args: [{ selector: 'mrd-button', host: {
                    '[style.min-width]': 'fitContent ? "fit-content" : "unset"',
                    '[style.margin]': 'toggle ? "0 -16px" : "unset"',
                    '[style.transition]': 'toggle ? "transform 0.2s" : "unset"',
                    '[class.active]': 'toggle && toggleSelected',
                    '(mouseenter)': 'onMouseEnter()',
                    '(mouseleave)': 'onMouseLeave()'
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- Der eigentlich HTML-Button -->\r\n<button class=\"mrd-button-container\"\r\n  #buttonContainer\r\n  [style.--bg-color]=\"bgColor\"\r\n  [style.--text-color]=\"textColor\"\r\n  [style.--hover-text-color]=\"hoverTextColor\"\r\n  [style.--disabled-text-color]=\"disabledTextColor\"\r\n  [style.--disabled-bg-color]=\"disabledBgColor\"\r\n  [style.--border-width]=\"borderWidth\"\r\n  [style.--border-color]=\"borderColor\"\r\n  [style.--border-style]=\"borderStyle\"\r\n  [style.--border-radius]=\"borderRadius\"\r\n  [style.--min-height]=\"minHeight\"\r\n  [style.--font-size]=\"fontSize\"\r\n  [style.--font-family]=\"fontFamily\"\r\n  [style.--font-weight]=\"fontWeight\"\r\n  [style.--diameter]=\"diameter\"\r\n  [style.--icon-size]=\"iconSize\"\r\n  [style.--unselected-color]=\"toggleUnselectedColor\"\r\n  [style.--test]=\"'test'\"\r\n\r\n  [ngStyle]=\"{'min-width': fitContent ? 'fit-content' : 'unset'}\"\r\n  [ngClass]=\"{'mrd-icon-button': icon, 'mrd-raised-button': raised, 'mrd-outline-button': outline,\r\n    'mrd-flat-button': flat, 'mrd-fab-button': fab, 'mrd-mini-fab-button': miniFab, 'mrd-toggle-button': toggle,\r\n    'mrd-toggle-selected': toggleSelected, 'disabled': disabled}\"\r\n\r\n  [mrdToolTip]=\"tooltipText\" [showOnTruncatedElement]=\"tooltipIfTruncated ? mrdButtonTextContent : undefined\" [showToolTip]=\"showTooltip || (tooltipIfCollapsed && isCollapsed)\">\r\n  <div class=\"mrd-button-background\">\r\n    <!-- Ein Overlay \u00FCber dem Button welches den Hover- und Active-Effekt anzeigt -->\r\n    <div class=\"mrd-button-focus\" [style.--hover-color]=\"hoverColor\" [style.--active-color]=\"activeColor\"></div>\r\n  </div>\r\n  <!-- Ein Overlay \u00FCber dem Button welches den Hover- und Active-Effekt anzeigt -->\r\n  <!-- <div class=\"mrd-button-focus\" [style.--hover-color]=\"hoverColor\" [style.--active-color]=\"activeColor\"></div> -->\r\n  <!-- Der Content des Buttons -->\r\n  <span class=\"mrd-button-content\" [ngClass]=\"{'isCollapsed': isCollapsed}\">\r\n    <!-- Linker Icon-Container -->\r\n    <span class=\"mrd-button-icon-content\" \r\n          [ngClass]=\"{'full-icon': fullIcon}\" \r\n          [hideIfTruncated]=\"collapse\" \r\n          displayState=\"flex\" \r\n          requiredHideAttribute=\"icon-collapse\"\r\n          checkChildrenForAttribute \r\n          [hideOnTruncatedElement]=\"mrdButtonTextContent\" \r\n          [parentResizeElement]=\"this.elementRef.nativeElement\">\r\n      <ng-content select=\"mrd-icon:not([icon-end]), [mrd-icon]:not([icon-end])\"></ng-content>\r\n    </span>\r\n    \r\n    <!-- Der Text des Buttons -->\r\n    <span class=\"mrd-button-text-content\" \r\n          (hiddenChanged)=\"buttonCollapsed($event)\" \r\n          [hideIfTruncated]=\"collapse\" \r\n          #mrdButtonTextContent \r\n          [parentResizeElement]=\"this.elementRef.nativeElement\">\r\n      <ng-content select=\":not([mrd-icon]):not(mrd-icon)\"></ng-content>\r\n    </span>\r\n    \r\n    <!-- Rechter Icon-Container -->\r\n    <span class=\"mrd-button-icon-content\" \r\n          [ngClass]=\"{'full-icon': fullIcon}\" \r\n          [hideIfTruncated]=\"collapse\" \r\n          displayState=\"flex\" \r\n          requiredHideAttribute=\"icon-collapse\"\r\n          checkChildrenForAttribute \r\n          [hideOnTruncatedElement]=\"mrdButtonTextContent\" \r\n          [parentResizeElement]=\"this.elementRef.nativeElement\">\r\n      <ng-content select=\"mrd-icon[icon-end], [mrd-icon][icon-end]\"></ng-content>\r\n    </span>\r\n  </span>\r\n\r\n  <!-- Die Progress-Bar eines Buttons (nicht f\u00FCr Icon-, Fab- und Mini-Fab-Buttons) -->\r\n  <mrd-progress-bar class=\"mrd-button-progress-bar\"\r\n    *ngIf=\"!disabled && !icon && !fab && !miniFab && (isLoading || loading?.value || loadingProgress?.value || loadingProgress?.value === 0)\"\r\n    [value]=\"loadingProgress?.value\" [mode]=\"loadingProgress ? 'determinate' : 'indeterminate'\" [color]=\"progressColor\"></mrd-progress-bar>\r\n  <!-- Der Progress-Spinner eines Buttons (nur f\u00FCr Icon-, Fab- und Mini-Fab-Buttons) -->\r\n  <mrd-progress-spinner class=\"mrd-button-progress-spinner\"\r\n    *ngIf=\"!disabled && (icon || fab || miniFab) && (isLoading || loading?.value || loadingProgress?.value || loadingProgress?.value === 0)\"\r\n    [value]=\"loadingProgress?.value\" [mode]=\"loadingProgress ? 'determinate' : 'indeterminate'\" [color]=\"progressColor\"></mrd-progress-spinner>\r\n</button>\r\n", styles: [":host{position:relative;display:inline-flex;flex-direction:column;justify-content:center;align-items:center;max-width:100%}:host.active{z-index:10}.mrd-button-container{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:center;min-height:var(--min-height);height:inherit;max-width:100%;width:100%;padding:0 16px;font-size:var(--font-size);font-family:var(--font-family);font-weight:var(--font-weight);letter-spacing:.1px;border:var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius);color:var(--text-color)}.mrd-button-container .mrd-button-content{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;z-index:1;width:100%}.mrd-button-container .mrd-button-content .mrd-button-icon-content{display:flex;flex-direction:row;align-items:center;justify-content:center}.mrd-button-container .mrd-button-content .mrd-button-text-content{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-button-container .mrd-button-content.isCollapsed ::ng-deep [mrd-icon],.mrd-button-container .mrd-button-content.isCollapsed ::ng-deep mrd-icon{margin:0 2px}.mrd-button-container .mrd-button-content.isCollapsed .mrd-button-text-content{padding:0 16px}.mrd-button-container.disabled{color:var(--disabled-text-color);cursor:initial}.mrd-button-container.disabled .mrd-button-background{background-color:var(--disabled-bg-color)}.mrd-button-container:hover:not(.disabled){color:var(--hover-text-color)}.mrd-button-container:hover:not(.disabled) .mrd-button-focus{background-color:var(--hover-color)}.mrd-button-container:active:not(.disabled) .mrd-button-focus{background-color:var(--active-color)}.mrd-button-container .mrd-button-focus{position:absolute;inset:0;border-radius:var(--border-radius)}.mrd-button-container .mrd-button-background{position:absolute;inset:0;border-radius:var(--border-radius);background-color:var(--bg-color)}.mrd-button-container.mrd-raised-button:not(.disabled){--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-raised-button:not(.disabled):active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-icon-button,.mrd-button-container.mrd-fab-button,.mrd-button-container.mrd-mini-fab-button{min-width:var(--diameter)!important;height:var(--diameter);padding:0}.mrd-button-container.mrd-icon-button .mrd-button-background,.mrd-button-container.mrd-fab-button .mrd-button-background,.mrd-button-container.mrd-mini-fab-button .mrd-button-background{min-height:unset;width:var(--diameter);height:var(--diameter)}.mrd-button-container.mrd-icon-button ::ng-deep [mrd-icon],.mrd-button-container.mrd-icon-button ::ng-deep mrd-icon,.mrd-button-container.mrd-fab-button ::ng-deep [mrd-icon],.mrd-button-container.mrd-fab-button ::ng-deep mrd-icon,.mrd-button-container.mrd-mini-fab-button ::ng-deep [mrd-icon],.mrd-button-container.mrd-mini-fab-button ::ng-deep mrd-icon{margin:0!important;font-size:calc(var(--diameter) / 2)}.mrd-button-container.mrd-icon-button .mrd-button-icon-content.full-icon ::ng-deep [mrd-icon],.mrd-button-container.mrd-icon-button .mrd-button-icon-content.full-icon ::ng-deep mrd-icon,.mrd-button-container.mrd-fab-button .mrd-button-icon-content.full-icon ::ng-deep [mrd-icon],.mrd-button-container.mrd-fab-button .mrd-button-icon-content.full-icon ::ng-deep mrd-icon,.mrd-button-container.mrd-mini-fab-button .mrd-button-icon-content.full-icon ::ng-deep [mrd-icon],.mrd-button-container.mrd-mini-fab-button .mrd-button-icon-content.full-icon ::ng-deep mrd-icon{font-size:var(--diameter)}.mrd-button-container.mrd-mini-fab-button:not(.disabled) .mrd-button-background,.mrd-button-container.mrd-fab-button:not(.disabled) .mrd-button-background{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.mrd-button-container.mrd-mini-fab-button:not(.disabled) .mrd-button-background:active,.mrd-button-container.mrd-fab-button:not(.disabled) .mrd-button-background:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.mrd-button-container.mrd-toggle-button{padding:0 44px;transition:color .2s}.mrd-button-container.mrd-toggle-button.mrd-toggle-selected{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040;transform:scale(1.15);z-index:10}.mrd-button-container.mrd-toggle-button:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040;z-index:5}.mrd-button-container.mrd-toggle-button:hover{z-index:5}.mrd-button-container.mrd-toggle-button .mrd-button-background{transition:background-color .2s}.mrd-button-container.mrd-toggle-button:not(.mrd-toggle-selected) .mrd-button-background{background-color:var(--unselected-color)}.mrd-button-container ::ng-deep [mrd-icon],.mrd-button-container ::ng-deep mrd-icon{font-size:1.5em;margin-right:4px;margin-top:2px;width:var(--icon-size);height:var(--icon-size);min-width:1em}.mrd-button-container ::ng-deep [mrd-icon][icon-end],.mrd-button-container ::ng-deep mrd-icon[icon-end]{margin-right:0;margin-left:4px}.mrd-button-progress-bar{position:absolute;bottom:10%;left:5px;right:5px;height:10%;min-height:10%}.mrd-button-progress-spinner{position:absolute;top:3px;left:3px;width:calc(100% - 6px)!important;height:calc(100% - 6px)!important}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWJ1dHRvbi9jb21wb25lbnRzL21yZC1idXR0b24vbXJkLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWJ1dHRvbi9jb21wb25lbnRzL21yZC1idXR0b24vbXJkLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsc0JBQXNCLEVBQW1CLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6RSxPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQTZDLFlBQVksRUFBZ0IsS0FBSyxFQUFxQixNQUFNLEVBQXFCLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5UCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ25FLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBRWhDLE9BQU8sRUFBRSxjQUFjLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7Ozs7Ozs7OztJQzZEN0UsdUNBRXlJOzs7SUFBdkksNEZBQWdDLGtFQUFBLCtCQUFBOzs7SUFFbEMsMkNBRTZJOzs7SUFBM0ksNEZBQWdDLGtFQUFBLCtCQUFBOzs7Ozs7OztBRGpFcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFlSCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsc0JBQXNCO0lBMmFoRDtJQUNGO0lB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QyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFVTSxTQUFTO2tCQUFsRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGFBQWEsRUFBQztZQVNTLFFBQVE7a0JBQWpELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsYUFBYSxFQUFDO1lBT2pCLFVBQVU7a0JBQXpCLEtBQUs7WUFPVSxVQUFVO2tCQUF6QixLQUFLO1lBU29DLFFBQVE7a0JBQWpELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsYUFBYSxFQUFDO1lBU1MsUUFBUTtrQkFBakQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUM7WUFPWSxRQUFRO2tCQUFwRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBU00sWUFBWTtrQkFBckQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUM7WUFVVSxnQkFBZ0I7a0JBQTFELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsY0FBYyxFQUFDO1lBU1Msb0JBQW9CO2tCQUE5RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGNBQWMsRUFBQztZQVFsQixLQUFLO2tCQUFwQixLQUFLO1lBU1csS0FBSztrQkFBckIsTUFBTTs7QUFvVFQsSUFBSyxtQkFTSjtBQVRELFdBQUssbUJBQW1CO0lBQ3RCLGtCQUFrQjtJQUNsQixvQ0FBYSxDQUFBO0lBQ2Isd0NBQWlCLENBQUE7SUFDakIsMENBQW1CLENBQUE7SUFDbkIsb0NBQWEsQ0FBQTtJQUNiLGtDQUFXLENBQUE7SUFDWCwyQ0FBb0IsQ0FBQTtJQUNwQix3Q0FBaUIsQ0FBQTtBQUNuQixDQUFDLEVBVEksbUJBQW1CLEtBQW5CLG1CQUFtQixRQVN2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1yZEJvcmRlciB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL21vZGVsL2NvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IEJhc2VQdXNoU3RyYXRlZ3lPYmplY3QsIE9ic2VydmFibGVWYWx1ZSwgVXRpbCB9IGZyb20gJ21yZC1jb3JlJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgQ29udGVudENoaWxkcmVuLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsUXVlcnlMaXN0LFJlbmRlcmVyMixWaWV3Q2hpbGQsIGJvb2xlYW5BdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29sb3JVdGlsIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb2xvci51dGlsJztcclxuaW1wb3J0IHsgTXJkQ29uZmlnTW9kZWwgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbC9jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgeyBDb25maWdVdGlsIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb25maWcudXRpbCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcbmltcG9ydCB7IE1yZEJhc2VDb2xvclRoZW1lIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vbW9kZWwvY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgY29sb3JBdHRyaWJ1dGUsIGNvbG9yVGhlbWVBdHRyaWJ1dGUgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi90cmFuc2Zvcm1zL2NvbG9yLXRyYW5zZm9ybSc7XHJcbmltcG9ydCB7IHNpemVBdHRyaWJ1dGUgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi90cmFuc2Zvcm1zL3NpemUtdHJhbnNmb3JtJztcclxuXHJcbi8qKlxyXG4gKiBEaWVzZXMgS29tcG9uZW50ZSBzdGVsbHQgZGVuIE1yZC1CdXR0b24genVyIFZlcmbDvGd1bmcuXHJcbiAqXHJcbiAqIERlciBCdXR0b24ga2FubiBtaXR0ZWxzIGRlciBlbnRzcHJlY2hlbmRlbiBBdHRyaWJ1dGUgaW4gZm9sZ2VuZGVuIFN0aWxlbiBkYXJnZXN0ZWxsdCB3ZXJkZW46XHJcbiAqIC0gU3RhbmRhcmQtQnV0dG9uIChkZWZhdWx0KVxyXG4gKiAtIEljb24tQnV0dG9uIChBdHRyaWJ1dG5hbWU6IGljb24tYnV0dG9uKVxyXG4gKiAtIFJhaXNlZC1CdXR0b24gKEF0dHJpYnV0bmFtZTogcmFpc2VkLWJ1dHRvbilcclxuICogLSBPdXRsaW5lLUJ1dHRvbiAoQXR0cmlidXRuYW1lOiBvdXRsaW5lLWJ1dHRvbilcclxuICogLSBGbGF0LUJ1dHRvbiAoQXR0cmlidXRuYW1lOiBmbGF0LWJ1dHRvbilcclxuICogLSBGYWItQnV0dG9uIChBdHRyaWJ1dG5hbWU6IGZhYi1idXR0b24pXHJcbiAqIC0gTWluaUZhYi1CdXR0b24gKEF0dHJpYnV0bmFtZTogbWluaUZhYi1idXR0b24pXHJcbiAqXHJcbiAqIFdlaXRlcmhpbiBrw7ZubmVuIGRpZSBzdGFuZGFyZCBUaGVtZXMgKHByaW1hcnksIGFjY2VudCwgd2FybikgZsO8ciBkaWUgSGludGVyZ3J1bmQtIGJ6dy4gVGV4dGZhcmJlIGZlc3RnZWxlZ3Qgd2VyZGVuIChqZSBuYWNoIFN0eWxlKS5cclxuICpcclxuICogRsO8ciB3ZWl0ZXJlIEFucGFzc3VuZ2VuIHNpZWhlIGRpZSBJbmZvcm1hdGlvbmVuIGRlciBlaW56ZWxuZW4gQXR0cmlidXRlIG9kZXIgZGllIERva3VtZW50YXRpb24uXHJcbiAqXHJcbiAqIEBjbGFzcyBNcmRCdXR0b25Db21wb25lbnRcclxuICogQGV4dGVuZHMge0Jhc2VQdXNoU3RyYXRlZ3lPYmplY3R9XHJcbiAqIEBpbXBsZW1lbnRzIHtBZnRlclZpZXdJbml0fVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtcmQtYnV0dG9uJyxcclxuICBob3N0OiB7XHJcbiAgICdbc3R5bGUubWluLXdpZHRoXSc6ICdmaXRDb250ZW50ID8gXCJmaXQtY29udGVudFwiIDogXCJ1bnNldFwiJyxcclxuICAgJ1tzdHlsZS5tYXJnaW5dJzogJ3RvZ2dsZSA/IFwiMCAtMTZweFwiIDogXCJ1bnNldFwiJyxcclxuICAgJ1tzdHlsZS50cmFuc2l0aW9uXSc6ICd0b2dnbGUgPyBcInRyYW5zZm9ybSAwLjJzXCIgOiBcInVuc2V0XCInLFxyXG4gICAnW2NsYXNzLmFjdGl2ZV0nOiAndG9nZ2xlICYmIHRvZ2dsZVNlbGVjdGVkJyxcclxuICAgJyhtb3VzZWVudGVyKSc6ICdvbk1vdXNlRW50ZXIoKScsXHJcbiAgICcobW91c2VsZWF2ZSknOiAnb25Nb3VzZUxlYXZlKCknXHJcbiAgfSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWJ1dHRvbi5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmRCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAvKipcclxuICAgKiBSZWZlcmVueiBhdWYgZGFzIFRleHQtRWxlbWVudCBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50UmVmPEhUTUxFbGVtZW50Pn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQFZpZXdDaGlsZCgnbXJkQnV0dG9uVGV4dENvbnRlbnQnLCB7c3RhdGljOiB0cnVlfSkgbXJkQnV0dG9uVGV4dENvbnRlbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGVpbiBJY29uLUJ1dHRvbiBpc3QuXHJcbiAgICpcclxuICAgKiBEZXIgQ29udGVudCBkZXMgQnV0dG9ucyBzb2xsdGUgbnVyIGVpbiBJY29uIHNlaW4uXHJcbiAgICogRGVyIEJ1dHRvbiBoYXQgc3RhbmRhcmRtw6TDn2lnIGVpbmVuIHRyYW5zcGFyZW50ZW4gSGludGVyZ3J1bmQgdW5kIGRpZSBGYXJiZSBkZXMgSWNvbnMgaXN0IHNjaHdhcnouXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ2ljb24tYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgaWNvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGVpbiBSYWlzZWQtQnV0dG9uIGlzdC5cclxuICAgKlxyXG4gICAqIFJhaXNlZC1CdXR0b25zIGhhYmVuIGVpbmVuIFNjaGF0dGVuLlxyXG4gICAqIERlciBCdXR0b24gaGF0IHN0YW5kYXJkbcOkw59pZyBlaW5lbiB3ZWnDn2VuIEhpbnRlcmdydW5kIHVuZCBkaWUgVGV4dGZhcmJlIHNjaHdhcnouXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ3JhaXNlZC1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSByYWlzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGVpbiBPdXRsaW5lLUJ1dHRvbiBpc3QuXHJcbiAgICpcclxuICAgKiBPdXRsaW5lLUJ1dHRvbnMgaGFiZW4gc3RhbmRhcmRtw6TDn2lnIGVpbmVuIHRyYW5zcGFyZW50ZW4gSGludGVyZ3J1bmQgdW5kIGVpbmVuIGdyYXVlbiBSYW5kLCBzb3dpZSBlaW5lbiBzY2h3YXJ6ZW4gVGV4dC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnb3V0bGluZS1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBvdXRsaW5lOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBlaW4gRmxhdC1CdXR0b24gaXN0LlxyXG4gICAqXHJcbiAgICogRmxhdC1CdXR0b25zIGhhYmVuIHN0YW5kYXJkbcOkw59pZyBlaW5lbiB3ZWnDn2VuIEhpbnRlcmdydW5kIHVuZCBkaWUgVGV4dGZhcmJlIGlzdCBzY2h3YXJ6LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdmbGF0LWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGZsYXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGVpbiBGYWItQnV0dG9uIGlzdC5cclxuICAgKlxyXG4gICAqIEZhYi1CdXR0b25zIHNpbmQga3JlaXNmw7ZybWlnZSBCdXR0b25zLlxyXG4gICAqIFN0YW5kYXJkbcOkw59pZyBoYWJlbiBzaWUgZWluZW4gd2Vpw59lbiBIaW50ZXJncnVuZCB1bmQgZGllIEljb25mYXJiZSBpc3Qgc2Nod2FyeiwgYXXDn2VyZGVtIGJlc2l0emVuIHNpZSBlaW5lbiBTY2hhdHRlbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnZmFiLWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGZhYjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZWluIE1pbmlGYWItQnV0dG9uIGlzdC5cclxuICAgKlxyXG4gICAqIE1pbmlGYWItQnV0dG9ucyBzaW5kIGtyZWlzZsO2cm1pZ2UgQnV0dG9ucyB2b24gZGVyIEdyw7bDn2UgZWluZXMgSWNvbi1CdXR0b25zLlxyXG4gICAqIFN0YW5kYXJkbcOkw59pZyBoYWJlbiBzaWUgZWluZW4gd2Vpw59lbiBIaW50ZXJncnVuZCB1bmQgZGllIEljb25mYXJiZSBpc3Qgc2Nod2FyeiwgYXXDn2VyZGVtIGJlc2l0emVuIHNpZSBlaW5lbiBTY2hhdHRlbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnbWluaUZhYi1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBtaW5pRmFiOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBlaW4gVG9nZ2xlLUJ1dHRvbiBpc3QuXHJcbiAgICogXHJcbiAgICogVG9nZ2xlLUJ1dHRvbnMgc29sbHRlbiBpbW1lciBpbm5lcmhhbGIgZWluZXIgVG9nZ2xlLUJ1dHRvbi1Hcm91cCB2ZXJ3ZW5kZXQgd2VyZGVuLlxyXG4gICAqIFN0YW5kYXJkbcOkw59pZyBoYWJlbiBzaWUgZWluZW4gd2Vpw59lbiBIaW50ZXJncnVuZCB1bmQgZGllIFRleHRmYXJiZSBpc3Qgc2Nod2FyeiwgYXXDn2VyZGVtIGJlc2l0emVuIHNpZSBpbSBzZWxla3RpZXJ0ZW4gWnVzdGFuZCBlaW5lbiBTY2hhdHRlbi5cclxuICAgKiBcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ3RvZ2dsZS1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSB0b2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiwgYWxzIFRvZ2dsZS1CdXR0b24sIHNlbGVrdGllcnQgaXN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdzZWxlY3RlZCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHRvZ2dsZVNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZGFzIFRoZW1lIFwicHJpbWFyeVwiIGhhdC5cclxuICAgKlxyXG4gICAqIEhpZXJkdXJjaCB3aXJkIGRpZSBIaW50ZXJncnVuZGZhcmJlIGRlcyBCdXR0b25zIGF1ZiBkaWUgcHJpbcOkcmUgRmFyYmUgZGVzIFRoZW1lcyBnZXNldHp0LlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHByaW1hcnk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBkYXMgVGhlbWUgXCJhY2NlbnRcIiBoYXQuXHJcbiAgICpcclxuICAgKiBIaWVyZHVyY2ggd2lyZCBkaWUgSGludGVyZ3J1bmRmYXJiZSBkZXMgQnV0dG9ucyBhdWYgZGllIEFremVudGZhcmJlIGRlcyBUaGVtZXMgZ2VzZXR6dC5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBhY2NlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBkYXMgVGhlbWUgXCJ3YXJuXCIgaGF0LlxyXG4gICAqXHJcbiAgICogSGllcmR1cmNoIHdpcmQgZGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIEJ1dHRvbnMgYXVmIGRpZSBXYXJuZmFyYmUgZGVzIFRoZW1lcyBnZXNldHp0LlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHdhcm46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBkZWFrdGl2aWVydCBpc3QuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRWluZSBPYnNlcnZhYmxlVmFsdWUsIGRpZSDDvGJlcmdlYmVuIHdlcmRlbiBrYW5uLCB1bSB6dSBiZXN0aW1tZW4sXHJcbiAgICogb2IgZGVyIEJ1dHRvbiBlaW5lbiBMYWRlYmFsa2VuL0xhZGVzcGlubmVyIGFuemVpZ2VuIHNvbGwuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIGxvYWRpbmc6IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPjtcclxuICAvKipcclxuICAgKiBFaW4gYm9vbGVhbiwgZGVyIGJlc3RpbW10LCBvYiBkZXIgQnV0dG9uIGVpbmVuIExhZGViYWxrZW4vTGFkZXNwaW5uZXIgYW56ZWlnZW4gc29sbC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBFaW5lIE9ic2VydmFibGVWYWx1ZSwgZGllIMO8YmVyZ2ViZW4gd2VyZGVuIGthbm4sIHVtIGRlbiBGb3J0c2Nocml0dCBkZXMgTGFkZWJhbGtlbnMvTGFkZXNwaW5uZXJzIHp1IGJlc3RpbW1lbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYnNlcnZhYmxlVmFsdWU8bnVtYmVyPn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIGxvYWRpbmdQcm9ncmVzczogT2JzZXJ2YWJsZVZhbHVlPG51bWJlcj47XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHp0IGRpZSBHcnVuZGZhcmJlIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogRGllc2Ugd2lyZCBqZSBuYWNoIFN0eWxlIGRlcyBCdXR0b25zIGFscyBIaW50ZXJncnVuZGZhcmJlIG9kZXIgVGV4dGZhcmJlIHZlcndlbmRldC5cclxuICAgKlxyXG4gICAqIEVzIGvDtm5uZW4gSGV4LSwgUkdCLSBvZGVyIFJHQkEtV2VydGUsIHNvd2llIFwicHJpbWFyeVwiLCBcImFjY2VudFwiIG9kZXIgXCJ3YXJuXCIgYW5nZWdlYmVuIHdlcmRlbi5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnY29sb3InLCB0cmFuc2Zvcm06IGNvbG9yVGhlbWVBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tVGV4dENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHp0IGRpZSBIaW50ZXJncnVuZGZhcmJlIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogRXMga8O2bm5lbiBIZXgtLCBSR0ItIG9kZXIgUkdCQS1XZXJ0ZSBhbmdlZ2ViZW4gd2VyZGVuLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdiYWNrZ3JvdW5kQ29sb3InLCB0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbUJnQ29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGllIGJlbnV0emVyZGVmaW5pZXJ0ZSBUZXh0ZmFyYmUgbmljaHQgZHVyY2ggZWluIGRlZm5pZXJ0ZXMgVGhlbWEgw7xiZXJzY2hyaWViZW4gd2VyZGVuIHNvbGwuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMga2VlcEN1c3RvbVRleHRDb2xvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRpZSBiZW51dHplcmRlZmluaWVydGUgSGludGVyZ3J1bmRmYXJiZSBuaWNodCBkdXJjaCBlaW4gZGVmaW5pZXJ0ZXMgVGhlbWEgw7xiZXJzY2hyaWViZW4gd2VyZGVuIHNvbGwuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMga2VlcEN1c3RvbUJnQ29sb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0enQgZGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIHVuc2VsZWt0aWVydGVuIFRvZ2dsZS1CdXR0b25zLlxyXG4gICAqIFxyXG4gICAqIEVzIGvDtm5uZW4gSGV4LSwgUkdCLSBvZGVyIFJHQkEtV2VydGUgYW5nZWdlYmVuIHdlcmRlbi5cclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZENvbG9yOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogU2V0enQgZGllIFRleHRmYXJiZSBkZXMgdW5zZWxla3RpZXJ0ZW4gVG9nZ2xlLUJ1dHRvbnMuXHJcbiAgICogXHJcbiAgICogRXMga8O2bm5lbiBIZXgtLCBSR0ItIG9kZXIgUkdCQS1XZXJ0ZSBhbmdlZ2ViZW4gd2VyZGVuLlxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21Ub2dnbGVVbnNlbGVjdGVkVGV4dENvbG9yOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogU2V0enQgZGllIFRleHRmYXJiZSBkZXMgc2VsZWt0aWVydGVuIFRvZ2dsZS1CdXR0b25zLlxyXG4gICAqIFxyXG4gICAqIEVzIGvDtm5uZW4gSGV4LSwgUkdCLSBvZGVyIFJHQkEtV2VydGUgYW5nZWdlYmVuIHdlcmRlbi5cclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tVG9nZ2xlU2VsZWN0ZWRUZXh0Q29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0enQgZGllIEZhcmJlIGRlcyBMYWRlYmFsa2Vucy9MYWRlc3Bpbm5lcnMuXHJcbiAgICpcclxuICAgKiBFcyBrw7ZubmVuIEhleC0sIFJHQi0gb2RlciBSR0JBLVdlcnRlIGFuZ2VnZWJlbiB3ZXJkZW4uXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIHByb2dyZXNzQ29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbi1UZXh0IHZlcnNjaHdpbmRldCwgd2VubiBlciB6dSBsYW5nIGlzdCB1bmQgYXVzZ2VwdW5rdGV0IHdlcmRlbiB3w7xyZGUuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgY29sbGFwc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCB6dSB3ZWxjaGVtIFN0eWxlIGRlciBCdXR0b24ga29sbGFiaWVyZW4gc29sbC5cclxuICAgKiBNw7ZnbGljaGUgV2VydGU6IFwiaWNvblwiLCBcImZhYlwiLCBcIm1pbmlGYWJcIlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgY29sbGFwc2VUbyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5fY29sbGFwc2VUbyA9PT0gdmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLklDT04gfHwgdmFsdWUgPT09IE1yZEJ1dHRvbkFwcGVhcmFuY2UuRkFCIHx8IHZhbHVlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLk1JTklfRkFCKSB7XHJcbiAgICAgIHRoaXMuX2NvbGxhcHNlVG8gPSB2YWx1ZTtcclxuICAgICAgdGhpcy5jb2xsYXBzZSA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdEYXMgQXR0cmlidXQgY29sbGFwc2VUbyBrYW5uIG51ciBcImljb25cIiwgXCJmYWJcIiBvZGVyIFwibWluaUZhYlwiIHNlaW4uJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgY29sbGFwc2VUbygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbGxhcHNlVG87XHJcbiAgfVxyXG4gIHByaXZhdGUgX2NvbGxhcHNlVG86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU29yZ3QgZGFmw7xyLCBkYXNzIGRlciBCdXR0b24gaW1tZXIgbWluZGVzdGVucyBzbyBicmVpdCBpc3QsIHdpZSBzZWluIEluaGFsdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnZml0LWNvbnRlbnQnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZml0Q29udGVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGVpbmVuIFRvb2x0aXAgYW56ZWlnZW4gc29sbC5cclxuICAgKlxyXG4gICAqIERlciBUb29sdGlwLVRleHQgd2lyZCBzdGFuZGFyZG3DpMOfaWcgYXVzIGRlbSBJbmhhbHQgZGVzIEJ1dHRvbnMgb2huZSBkdXJjaCBbbXJkLWljb25dIGdla2VubnplaWNobmV0ZSBJY29ucyBnZW5lcmllcnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ3Rvb2x0aXAnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2hvd1Rvb2x0aXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBEZXIgVGV4dCBkZXMgVG9vbHRpcHMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgdG9vbHRpcFRleHQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgVG9vbHRpcCBudXIgYW5nZXplaWd0IHdlcmRlbiBzb2xsLCB3ZW5uIGRlciBCdXR0b24tVGV4dCBhdXNnZXB1bmt0ZXQgd2lyZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgdG9vbHRpcElmVHJ1bmNhdGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnNob3dUb29sdGlwID0gdmFsdWUgfHwgdGhpcy5zaG93VG9vbHRpcDtcclxuICAgIHRoaXMuX3Rvb2x0aXBJZlRydW5jYXRlZCA9IHZhbHVlO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IHRvb2x0aXBJZlRydW5jYXRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl90b29sdGlwSWZUcnVuY2F0ZWQ7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3Rvb2x0aXBJZlRydW5jYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBUb29sdGlwIG51ciBhbmdlemVpZ3Qgd2VyZGVuIHNvbGwsIHdlbm4gZGVyIEJ1dHRvbiBjb2xsYWJpZXJ0IGlzdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyB0b29sdGlwSWZDb2xsYXBzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGllIE1pbmRlc3Row7ZoZSBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIFdpcmQgZWluZSBaYWhsIGFuZ2VnZWJlbiwgd2lyZCBkaWVzZSBhbHMgUGl4ZWx3ZXJ0IGludGVycHJldGllcnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBtaW5IZWlnaHQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBEaWUgU2NocmlmdGdyw7bDn2UgZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBXaXJkIGVpbmUgWmFobCBhbmdlZ2ViZW4sIHdpcmQgZGllc2UgYWxzIFBpeGVsd2VydCBpbnRlcnByZXRpZXJ0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZyB8IG51bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgZm9udFNpemU6IHN0cmluZztcclxuICAvKipcclxuICAgKiBEaWUgU2NocmlmdGZhbWlsaWUgZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgZm9udEZhbWlseTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIERpZSBTY2hyaWZ0ZGlja2UgZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgZm9udFdlaWdodDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIERlciBEdXJjaG1lc3NlciBmw7xyIEljb24tLCBGYWItIHVuZCBNaW5pRmFiLUJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBXaXJkIGVpbmUgWmFobCBhbmdlZ2ViZW4sIHdpcmQgZGllc2UgYWxzIFBpeGVsd2VydCBpbnRlcnByZXRpZXJ0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZyB8IG51bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgZGlhbWV0ZXI6IHN0cmluZztcclxuICAvKipcclxuICAgKiBEaWUgR3LDtsOfZSBkZXMgSWNvbnMuXHJcbiAgICpcclxuICAgKiBXaXJkIGVpbmUgWmFobCBhbmdlZ2ViZW4sIHdpcmQgZGllc2UgYWxzIFBpeGVsd2VydCBpbnRlcnByZXRpZXJ0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZyB8IG51bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgaWNvblNpemU6IHN0cmluZztcclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBJY29uIGRlcyBCdXR0b25zIGRpZSB2b2xsZSBHcsO2w59lIGRlcyBCdXR0b25zIGVpbm5laG1lbiBzb2xsLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGZ1bGxJY29uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogRGVyIFJhZGl1cyBkZXIgRWNrZW4gZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBXaXJkIGVpbmUgWmFobCBhbmdlZ2ViZW4sIHdpcmQgZGllc2UgYWxzIFBpeGVsd2VydCBpbnRlcnByZXRpZXJ0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZyB8IG51bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgYm9yZGVyUmFkaXVzOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIERpZSBGYXJiZSBkZXMgQnV0dG9ucywgd2VubiBlciBnZWhvdmVydCB3aXJkLlxyXG4gICAqIFxyXG4gICAqIEVzIGvDtm5uZW4gSGV4LSwgUkdCLSBvZGVyIFJHQkEtV2VydGUgYW5nZWdlYmVuIHdlcmRlbi5cclxuICAgKiBcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tSG92ZXJDb2xvcjogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIERpZSBGYXJiZSBkZXMgVGV4dGVzIGRlcyBCdXR0b25zLCB3ZW5uIGVyIGdlaG92ZXJ0IHdpcmQuXHJcbiAgICogXHJcbiAgICogRXMga8O2bm5lbiBIZXgtLCBSR0ItIG9kZXIgUkdCQS1XZXJ0ZSBhbmdlZ2ViZW4gd2VyZGVuLlxyXG4gICAqIFxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21Ib3ZlclRleHRDb2xvcjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBEZXIgV2VydCBkZXMgQnV0dG9ucyBhbHMgVG9nZ2xlLUJ1dHRvbi5cclxuICAgKiBcclxuICAgKiBAdHlwZSB7YW55fVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgdmFsdWU6IGFueTtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIERhcyBLbGljay1FdmVudCBkdXJjaCBkZW4gTnV0emVyLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxFdmVudD59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2xpY2s6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRGllIEtvbmZpZ3VyYXRpb24gZGVzIE1yZC1CdXR0b25zLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAdHlwZSB7TXJkQ29uZmlnTW9kZWx9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2NvbmZpZzogTXJkQ29uZmlnTW9kZWwgPSBDb25maWdVdGlsLmdldENvbmZpZygpO1xyXG5cclxuICBwcml2YXRlIG1vdXNlRW50ZXJMaXN0ZW5lcjogKCkgPT4gdm9pZDtcclxuICBwcml2YXRlIG1vdXNlTGVhdmVMaXN0ZW5lcjogKCkgPT4gdm9pZDtcclxuXHJcbiAgcHJpdmF0ZSB1bmNvbGxhcHNlZEFwcGVhcmFuY2U6IE1yZEJ1dHRvbkFwcGVhcmFuY2U7XHJcblxyXG4gIHByaXZhdGUgYnV0dG9uUHJpbWFyeTogc3RyaW5nIHwgTXJkQmFzZUNvbG9yVGhlbWU7XHJcbiAgcHJpdmF0ZSBidXR0b25BY2NlbnQ6IHN0cmluZyB8IE1yZEJhc2VDb2xvclRoZW1lO1xyXG4gIHByaXZhdGUgYnV0dG9uV2Fybjogc3RyaW5nIHwgTXJkQmFzZUNvbG9yVGhlbWU7XHJcbiAgcHJpdmF0ZSBidXR0b25EaXNhYmxlZDogTXJkQmFzZUNvbG9yVGhlbWU7XHJcbiAgcHJpdmF0ZSBidXR0b25Qcm9ncmVzczogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIHRleHRMaWdodENvbG9yOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSB0ZXh0RGFya0NvbG9yOiBzdHJpbmc7XHJcbiAgXHJcbiAgcHVibGljIGJnQ29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgdGV4dENvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIGhvdmVyQ29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgaG92ZXJUZXh0Q29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgYWN0aXZlQ29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgZGlzYWJsZWRUZXh0Q29sb3I6IHN0cmluZztcclxuICBwdWJsaWMgZGlzYWJsZWRCZ0NvbG9yOiBzdHJpbmc7XHJcbiAgcHVibGljIHRvZ2dsZVVuc2VsZWN0ZWRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgYm9yZGVyV2lkdGg6IHN0cmluZztcclxuICBwdWJsaWMgYm9yZGVyU3R5bGU6IHN0cmluZztcclxuICBwdWJsaWMgYm9yZGVyQ29sb3I6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGlzQ29sbGFwc2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGlzSG92ZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PlxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gSGllciBzb3JnZW4gd2lyIGRhZsO8ciwgZGFzcyBkZXIgU3RhbmRhcmQgQ2xpY2stSGFuZGxlciB2b24gQW5ndWxhciBlbnRmZXJudCB3aXJkXHJcbiAgICBjb25zdCBob3N0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCBidXR0b24gPSBob3N0LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xyXG5cclxuICAgIGNvbnN0IG5ld0hvc3Q6IEhUTUxFbGVtZW50ID0gaG9zdC5jbG9uZU5vZGUoKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIG5ld0hvc3QuYXBwZW5kQ2hpbGQoYnV0dG9uKVxyXG5cclxuICAgIEFycmF5LmZyb20oaG9zdC5hdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHIgPT4gbmV3SG9zdC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKSk7XHJcbiAgICBob3N0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0hvc3QsIGhvc3QpO1xyXG4gICAgbmV3SG9zdC5zdHlsZS5taW5XaWR0aCA9IHRoaXMuZml0Q29udGVudCA/ICdmaXQtY29udGVudCcgOiAndW5zZXQnO1xyXG4gICAgbmV3SG9zdC5zdHlsZS5tYXJnaW4gPSB0aGlzLnRvZ2dsZSA/ICcwIC0xNnB4JyA6ICd1bnNldCc7XHJcbiAgICBuZXdIb3N0LnN0eWxlLnRyYW5zaXRpb24gPSB0aGlzLnRvZ2dsZSA/ICd0cmFuc2Zvcm0gMC4ycycgOiAndW5zZXQnO1xyXG4gICAgaWYgKHRoaXMudG9nZ2xlICYmIHRoaXMudG9nZ2xlU2VsZWN0ZWQpIHtcclxuICAgICAgbmV3SG9zdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIG5ld0hvc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKTtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50ID0gbmV3SG9zdDtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmxvYWRpbmcpKSB7XHJcbiAgICAgIHRoaXMubWFya0ZvckNoZWNrSWYodGhpcy5sb2FkaW5nLmNoYW5nZWQpXHJcbiAgICB9XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5sb2FkaW5nUHJvZ3Jlc3MpKSB7XHJcbiAgICAgIHRoaXMubWFya0ZvckNoZWNrSWYodGhpcy5sb2FkaW5nUHJvZ3Jlc3MuY2hhbmdlZClcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluaXRCYXNlU3R5bGUoKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKCk7XHJcblxyXG4gICAgLy8gTWFudWVsbGVzIEFuaMOkbmdlbiBkZXIgTW91c2VlbnRlci0gdW5kIE1vdXNlbGVhdmUtTGlzdGVuZXIgbWl0IFJlbmRlcmVyMlxyXG4gICAgdGhpcy5tb3VzZUVudGVyTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaXNIb3ZlcmVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICBcclxuICAgIHRoaXMubW91c2VMZWF2ZUxpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmlzSG92ZXJlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tb3VzZUVudGVyTGlzdGVuZXIpIHsgdGhpcy5tb3VzZUVudGVyTGlzdGVuZXIoKTsgfVxyXG4gICAgaWYgKHRoaXMubW91c2VMZWF2ZUxpc3RlbmVyKSB7IHRoaXMubW91c2VMZWF2ZUxpc3RlbmVyKCk7IH1cclxuXHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMub25DbGljayhldmVudCkpO1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUpIHtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfSAgXHJcblxyXG4gIHB1YmxpYyB1cGRhdGVTdHlsZSgpOiB2b2lkIHtcclxuICAgIGxldCB0aGVtZXNDb3VudCA9IFt0aGlzLnByaW1hcnksIHRoaXMuYWNjZW50LCB0aGlzLndhcm5dLmZpbHRlcigodmFsdWUpID0+IHZhbHVlKS5sZW5ndGg7XHJcbiAgICBpZiAodGhlbWVzQ291bnQgPiAxKSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdFaW4gTXJkQnV0dG9uIGthbm4gbnVyIGVpbiBUaGVtYSBoYWJlbi4gU2V0emUgXCJwcmltYXJ5XCIsIFwiYWNjZW50XCIgb2RlciBcIndhcm5cIiBhbHMgVGhlbWEuJyk7XHJcbiAgICB9XHJcbiAgICBsZXQgYXBwZWFyYW5jZUNvdW50ID0gW3RoaXMuaWNvbiwgdGhpcy5yYWlzZWQsIHRoaXMub3V0bGluZSwgdGhpcy5mbGF0LCB0aGlzLmZhYiwgdGhpcy5taW5pRmFiLCB0aGlzLnRvZ2dsZV0uZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUpLmxlbmd0aDtcclxuICAgIGlmIChhcHBlYXJhbmNlQ291bnQgPiAxKSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdFaW4gTXJkQnV0dG9uIGthbm4gbnVyIGVpbmVuIFN0eWxlIGhhYmVuLiBTZXR6ZSBcImljb24tYnV0dG9uXCIsIFwicmFpc2VkLWJ1dHRvblwiLCBcIm91dGxpbmUtYnV0dG9uXCIsIFwiZmxhdC1idXR0b25cIiwgXCJmYWItYnV0dG9uXCIsIFwibWluaUZhYi1idXR0b25cIiBvZGVyIGtlaW5lbiBTdHlsZS4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGYWxscyBpcmdlbmRlaW5lIEZhcmJlL1RoZW1hIGdlc2V0enQgaXN0LCB3aXJkIGRpZSBIaW50ZXJncnVuZC0gdW5kIFRleHRmYXJiZSBkZXMgQnV0dG9ucyBhbmhhbmQgZGllc2VyIHVuZCBkZXMgU3R5bGVzIGdlc2V0enQuXHJcbiAgICBpZiAodGhpcy5wcmltYXJ5IHx8IHRoaXMuYWNjZW50IHx8IHRoaXMud2FybiB8fCB0aGlzLmN1c3RvbUJnQ29sb3IgfHwgdGhpcy5jdXN0b21UZXh0Q29sb3IpIHtcclxuICAgICAgLy8gV2VubiAna2VlcEN1c3RvbUJnQ29sb3InIGdlc2V0enQgaXN0LCBkYW5uIHdpcmQgJ2N1c3RvbUJnQ29sb3InIGFscyAnYmFzZUNvbG9yJyB2ZXJ3ZW5kZXRcclxuICAgICAgbGV0IGJhc2VDb2xvcjogc3RyaW5nID0gdGhpcy5rZWVwQ3VzdG9tQmdDb2xvciAmJiAhIXRoaXMuY3VzdG9tQmdDb2xvciA/IHRoaXMuY3VzdG9tQmdDb2xvciA6XHJcbiAgICAgICAgLy8gU29uc3Qgd2VubiBlaW4gVGhlbWUgZ2VzZXR6dCBpc3QsIHdpcmQgZGllIGVudHNwcmVjaGVuZGUgRmFyYmUgZGVzIFRoZW1lcyB2ZXJ3ZW5kZXRcclxuICAgICAgICB0aGlzLnByaW1hcnkgPyBfLmlzT2JqZWN0KHRoaXMuYnV0dG9uUHJpbWFyeSkgPyAodGhpcy5idXR0b25QcmltYXJ5IGFzIE1yZEJhc2VDb2xvclRoZW1lKS5iYWNrZ3JvdW5kIDogdGhpcy5idXR0b25QcmltYXJ5IGFzIHN0cmluZyA6XHJcbiAgICAgICAgdGhpcy5hY2NlbnQgPyBfLmlzT2JqZWN0KHRoaXMuYnV0dG9uQWNjZW50KSA/ICh0aGlzLmJ1dHRvbkFjY2VudCBhcyBNcmRCYXNlQ29sb3JUaGVtZSkuYmFja2dyb3VuZCA6IHRoaXMuYnV0dG9uQWNjZW50IGFzIHN0cmluZyA6XHJcbiAgICAgICAgdGhpcy53YXJuID8gXy5pc09iamVjdCh0aGlzLmJ1dHRvbldhcm4pID8gKHRoaXMuYnV0dG9uV2FybiBhcyBNcmRCYXNlQ29sb3JUaGVtZSkuYmFja2dyb3VuZCA6IHRoaXMuYnV0dG9uV2FybiBhcyBzdHJpbmcgOlxyXG4gICAgICAgIC8vIFNvbnN0IHdlbm4gJ2N1c3RvbUJnQ29sb3InIGdlc2V0enQgaXN0LCB3aXJkICdjdXN0b21CZ0NvbG9yJyB2ZXJ3ZW5kZXQsIHNvbnN0ICdjdXN0b21UZXh0Q29sb3InXHJcbiAgICAgICAgISF0aGlzLmN1c3RvbUJnQ29sb3IgPyB0aGlzLmN1c3RvbUJnQ29sb3IgOiB0aGlzLmN1c3RvbVRleHRDb2xvcjtcclxuXHJcbiAgICAgIC8vIFdlbm4gJ2tlZXBDdXN0b21UZXh0Q29sb3InIGdlc2V0enQgaXN0LCBkYW5uIHdpcmQgJ2N1c3RvbVRleHRDb2xvcicgYWxzICdiYXNlVGV4dENvbG9yJyB2ZXJ3ZW5kZXRcclxuICAgICAgbGV0IGJhc2VUZXh0Q29sb3IgPSB0aGlzLmtlZXBDdXN0b21UZXh0Q29sb3IgJiYgISF0aGlzLmN1c3RvbVRleHRDb2xvciA/IHRoaXMuY3VzdG9tVGV4dENvbG9yIDpcclxuICAgICAgICAvLyBTb25zdCB3ZW5uIGVpbiBUaGVtZSBnZXNldHp0IGlzdCwgd2lyZCBkaWUgZW50c3ByZWNoZW5kZSBGYXJiZSBkZXMgVGhlbWVzIHZlcndlbmRldFxyXG4gICAgICAgIHRoaXMucHJpbWFyeSA/IF8uaXNPYmplY3QodGhpcy5idXR0b25QcmltYXJ5KSA/ICh0aGlzLmJ1dHRvblByaW1hcnkgYXMgTXJkQmFzZUNvbG9yVGhlbWUpLnRleHQgOiB0aGlzLmJ1dHRvblByaW1hcnkgYXMgc3RyaW5nIDpcclxuICAgICAgICB0aGlzLmFjY2VudCA/IF8uaXNPYmplY3QodGhpcy5idXR0b25BY2NlbnQpID8gKHRoaXMuYnV0dG9uQWNjZW50IGFzIE1yZEJhc2VDb2xvclRoZW1lKS50ZXh0IDogdGhpcy5idXR0b25BY2NlbnQgYXMgc3RyaW5nIDpcclxuICAgICAgICB0aGlzLndhcm4gPyBfLmlzT2JqZWN0KHRoaXMuYnV0dG9uV2FybikgPyAodGhpcy5idXR0b25XYXJuIGFzIE1yZEJhc2VDb2xvclRoZW1lKS50ZXh0IDogdGhpcy5idXR0b25XYXJuIGFzIHN0cmluZyA6XHJcbiAgICAgICAgLy8gU29uc3Qgd2VubiAnY3VzdG9tVGV4dENvbG9yJyBnZXNldHp0IGlzdCwgd2lyZCAnY3VzdG9tVGV4dENvbG9yJyB2ZXJ3ZW5kZXQsIHNvbnN0ICd0ZXh0RGFya0NvbG9yJ1xyXG4gICAgICAgICEhdGhpcy5jdXN0b21UZXh0Q29sb3IgPyB0aGlzLmN1c3RvbVRleHRDb2xvciA6IHRoaXMudGV4dERhcmtDb2xvcjtcclxuXHJcbiAgICAgIC8vICdiZ0NvbG9yJyB3aXJkIGF1ZiAnYmFzZUNvbG9yJyBnZXNldHp0XHJcbiAgICAgIHRoaXMuYmdDb2xvciA9IGJhc2VDb2xvcjtcclxuICAgICAgLy8gV2VubiAna2VlcEN1c3RvbVRleHRDb2xvcicgb2RlciBrZWluIFRoZW1hIHVuZCAnY3VzdG9tQmdDb2xvcicsIHVuZCAnY3VzdG9tVGV4dENvbG9yJyBnZXNldHp0IHNpbmQsIHdpcmQgJ3RleHRDb2xvcicgYXVmICdjdXN0b21UZXh0Q29sb3InIGdlc2V0enRcclxuICAgICAgdGhpcy50ZXh0Q29sb3IgPSAodGhpcy5rZWVwQ3VzdG9tVGV4dENvbG9yIHx8ICh0aGVtZXNDb3VudCA9PT0gMCAmJiB0aGlzLmN1c3RvbUJnQ29sb3IpKSAmJiAhIXRoaXMuY3VzdG9tVGV4dENvbG9yID8gdGhpcy5jdXN0b21UZXh0Q29sb3IgOlxyXG4gICAgICAgIC8vIFNvbnN0IHdlbm4gZWluIFRoZW1hIHVuZCAna2VlcEN1c3RvbUJnQ29sb3InIGdlc2V0enQgaXN0LCB3aXJkICdiYXNlVGV4dENvbG9yJyB2ZXJ3ZW5kZXRcclxuICAgICAgICAodGhlbWVzQ291bnQgPT09IDEgJiYgdGhpcy5rZWVwQ3VzdG9tQmdDb2xvcikgPyBiYXNlVGV4dENvbG9yIDpcclxuICAgICAgICAvLyBTb25zdCwgd2VubiBkaWUgQXBwZWFyYW5jZSBuaWNodCBUb2dnbGUgaXN0IG9kZXIgZGVyIFRvZ2dsZS1CdXR0b24gc2VsZWt0aWVydCBpc3QsXHJcbiAgICAgICAgLy8gd2lyZCBhbmhhbmQgZGVyICdiYXNlQ29sb3InIGVudHNjaGllZGVuLCBvYiAndGV4dERhcmtDb2xvcicgb2RlciAndGV4dExpZ2h0Q29sb3InIHZlcndlbmRldCB3aXJkXHJcbiAgICAgICAgdGhpcy50b2dnbGUgPyB0aGlzLnRvZ2dsZVNlbGVjdGVkICYmIHRoaXMuY3VzdG9tVG9nZ2xlU2VsZWN0ZWRUZXh0Q29sb3IgPyB0aGlzLmN1c3RvbVRvZ2dsZVNlbGVjdGVkVGV4dENvbG9yIDpcclxuICAgICAgICAgICF0aGlzLnRvZ2dsZVNlbGVjdGVkICYmIHRoaXMuY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvciA/IHRoaXMuY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvciA6XHJcbiAgICAgICAgLyohdGhpcy50b2dnbGUgfHwqLyB0aGlzLnRvZ2dsZVNlbGVjdGVkID8gQ29sb3JVdGlsLnNob3VsZFRleHRCZURhcmsoYmFzZUNvbG9yKSA/IHRoaXMudGV4dERhcmtDb2xvciA6IHRoaXMudGV4dExpZ2h0Q29sb3IgOlxyXG4gICAgICAgIENvbG9yVXRpbC5zaG91bGRUZXh0QmVEYXJrKHRoaXMudG9nZ2xlVW5zZWxlY3RlZENvbG9yKSA/IHRoaXMudGV4dERhcmtDb2xvciA6IHRoaXMudGV4dExpZ2h0Q29sb3IgOlxyXG4gICAgICAgIC8vIFdlbm4gZGllIEFwcGVhcmFuY2UgVG9nZ2xlIGlzdCB1bmQgZGVyIEJ1dHRvbiBuaWNodCBzZWxla3RpZXJ0IGlzdCB1bmQgJ2N1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRUZXh0Q29sb3InIGdlc2V0enQgaXN0LFxyXG4gICAgICAgIC8vIHdpcmQgZGllc2UgdmVyd2VuZGV0XHJcbiAgICAgICAgLy8gdGhpcy5jdXN0b21Ub2dnbGVVbnNlbGVjdGVkVGV4dENvbG9yID8gdGhpcy5jdXN0b21Ub2dnbGVVbnNlbGVjdGVkVGV4dENvbG9yIDpcclxuICAgICAgICAvLyBTb25zdCB3aXJkIGFuaGFuZCB2b24gJ3RvZ2dsZVVuc2VsZWN0ZWRDb2xvcicgZW50c2NoaWVkZW4sIG9iICd0ZXh0RGFya0NvbG9yJyBvZGVyICd0ZXh0TGlnaHRDb2xvcicgdmVyd2VuZGV0IHdpcmRcclxuICAgICAgICBDb2xvclV0aWwuc2hvdWxkVGV4dEJlRGFyayhiYXNlQ29sb3IpID8gdGhpcy50ZXh0RGFya0NvbG9yIDogdGhpcy50ZXh0TGlnaHRDb2xvcjtcclxuICAgICAgICAvLyBTb25zdCB3aXJkICd0b2dnbGVVbnNlbGVjdGVkVGV4dENvbG9yJyB2ZXJ3ZW5kZXRcclxuICAgICAgLy8gd2VubiBjdXN0b21Ib3ZlckNvbG9yIGdlZ2ViZW4gZGFubiBzZXR6ZSBkaWVzZSBzb25zdCB3aXJkICdob3ZlckNvbG9yJyBhdWYgZWluZSAyMCUgdHJhbnNwYXJlbnRlIFZlcnNpb24gdm9uICdiYXNlQ29sb3InIGdlc2V0enRcclxuICAgICAgdGhpcy5ob3ZlckNvbG9yID0gdGhpcy5jdXN0b21Ib3ZlckNvbG9yID8gdGhpcy5jdXN0b21Ib3ZlckNvbG9yIDogQ29sb3JVdGlsLmNoYW5nZUNvbG9yT3BhY2l0eShiYXNlQ29sb3IsIDIwKTtcclxuICAgICAgdGhpcy5ob3ZlclRleHRDb2xvciA9IHRoaXMuY3VzdG9tSG92ZXJUZXh0Q29sb3IgPyB0aGlzLmN1c3RvbUhvdmVyVGV4dENvbG9yIDogdGhpcy50ZXh0Q29sb3I7IC8vQ29sb3JVdGlsLnNob3VsZFRleHRCZURhcmsodGhpcy5ob3ZlckNvbG9yKSA/IHRoaXMudGV4dERhcmtDb2xvciA6IHRoaXMudGV4dExpZ2h0Q29sb3I7XHJcbiAgICAgIC8vICdhY3RpdmVDb2xvcicgd2lyZCBhdWYgMzAlIHRyYW5zcGFyZW50ZSBWZXJzaW9uIHZvbiAnYmFzZUNvbG9yJyBtaXQgMTAlIGhlbGxlcmVyIEZhcmJlIGdlc2V0enRcclxuICAgICAgdGhpcy5hY3RpdmVDb2xvciA9IENvbG9yVXRpbC5jaGFuZ2VDb2xvck9wYWNpdHkoQ29sb3JVdGlsLmNoYW5nZUNvbG9yQnJpZ2h0bmVzc1BlcmNlbnQoYmFzZUNvbG9yLCAxMCksIDMwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGw7xyIGRlbiBTdGFuZGFyZC1TdHlsZSwgT3V0bGluZS1TdHlsZSB1bmQgSWNvbi1TdHlsZVxyXG4gICAgaWYgKGFwcGVhcmFuY2VDb3VudCA9PT0gMCB8fCB0aGlzLm91dGxpbmUgfHwgdGhpcy5pY29uKSB7XHJcbiAgICAgIC8vIFdlbm4gZWluIFRoZW1hIHVuZCAna2VlcEN1c3RvbUJnQ29sb3InIG5pY2h0IGdlc2V0eiBpc3QgT0RFUlxyXG4gICAgICAvLyBrZWluZSAnY3VzdG9tQmdDb2xvcicsIGFiZXIgJ2N1c3RvbVRleHRDb2xvcicgZ2VzZXR6dCBzaW5kLi4uXHJcbiAgICAgIGlmICgodGhlbWVzQ291bnQgPT09IDEgJiYgIXRoaXMua2VlcEN1c3RvbUJnQ29sb3IpIHx8ICghdGhpcy5jdXN0b21CZ0NvbG9yICYmIHRoaXMuY3VzdG9tVGV4dENvbG9yKSkge1xyXG4gICAgICAgIC8vIC4uLiB3aXJkICd0ZXh0Q29sb3InLCBmYWxscyBuaWNodCBkdXJjaCAna2VlcEN1c3RvbVRleHRDb2xvcicgdW5kICdjdXN0b21UZXh0Q29sb3InIGZlc3QsIGF1ZiAnYmdDb2xvcicgZ2VzZXR6dFxyXG4gICAgICAgIHRoaXMudGV4dENvbG9yID0gKHRoaXMua2VlcEN1c3RvbVRleHRDb2xvciAmJiAhIXRoaXMuY3VzdG9tVGV4dENvbG9yKSA/IHRoaXMuY3VzdG9tVGV4dENvbG9yIDogdGhpcy5iZ0NvbG9yO1xyXG4gICAgICAgIC8vIC4uLiB3aXJkICdiZ0NvbG9yJywgZmFsbHMgbmljaHQgZHVyY2ggJ2tlZXBDdXN0b21CZ0NvbG9yJyB1bmQgJ2N1c3RvbUJnQ29sb3InIGZlc3QsIGF1ZiBkaWUgU3RhbmRhcmQtSGludGVyZ3J1bmRmYXJiZSBnZXNldHp0XHJcbiAgICAgICAgdGhpcy5iZ0NvbG9yID0gKHRoaXMua2VlcEN1c3RvbUJnQ29sb3IgJiYgISF0aGlzLmN1c3RvbUJnQ29sb3IpID8gdGhpcy5jdXN0b21CZ0NvbG9yIDogdGhpcy5fY29uZmlnLmJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBGYWxscyBrZWluZSAncHJvZ3Jlc3NDb2xvcicgZ2VzZXR6dCBpc3QuLi5cclxuICAgIGlmICghdGhpcy5wcm9ncmVzc0NvbG9yKSB7XHJcbiAgICAgIC8vIC4uLiB1bmQgd2lyIGVpbiBUaGVtZSBvZGVyIGVpbmUgYmVudXR6ZXJkZWZpbmllcnRlIFRleHRmYXJiZSBvZGVyIEhpbnRlcmdydW5kZmFyYmUgaGFiZW4uLi5cclxuICAgICAgaWYgKHRoZW1lc0NvdW50ID09PSAxIHx8IHRoaXMuY3VzdG9tVGV4dENvbG9yIHx8IHRoaXMuY3VzdG9tQmdDb2xvcikge1xyXG4gICAgICAgIC8vIC4uLiB3aXJkICdwcm9ncmVzc0NvbG9yJyBmw7xyIGRlbiBTdGFuZGFyZC1TdHlsZSwgT3V0bGluZS1TdHlsZSB1bmQgSWNvbi1TdHlsZSBhdWYgJ3RleHRDb2xvcicgZ2VzZXR6dCxcclxuICAgICAgICAvLyBhbnNvbnN0ZW4gYXVmIDIwJSBoZWxsZXJlIFZlcnNpb24gdm9uICdiZ0NvbG9yJ1xyXG4gICAgICAgIGlmIChhcHBlYXJhbmNlQ291bnQgPT09IDAgfHwgdGhpcy5vdXRsaW5lIHx8IHRoaXMuaWNvbikge1xyXG4gICAgICAgICAgdGhpcy5wcm9ncmVzc0NvbG9yID0gdGhpcy50ZXh0Q29sb3I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NDb2xvciA9IENvbG9yVXRpbC5jaGFuZ2VDb2xvckJyaWdodG5lc3NQZXJjZW50KHRoaXMuYmdDb2xvciwgMjApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBPaG5lIFRoZW1lIHVuZCBiZW51dHplcmRlZmluaWVydGUgRmFyYmVuIHdpcmQgJ3Byb2dyZXNzQ29sb3InIGF1ZiBkaWUgR3J1bmQtUHJvZ3Jlc3MtQ29sb3IgZ2VzZXR6dFxyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NDb2xvciA9IHRoaXMuYnV0dG9uUHJvZ3Jlc3M7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBGYWxscyBrZWluIGV4cGxpemlldGVyICd0b29sdGlwVGV4dCcgZ2VzZXR6dCBpc3QsIHdpcmQgZGVyIFRleHQgZGVzIEJ1dHRvbnMgYWxzIFRvb2x0aXAtVGV4dCB2ZXJ3ZW5kZXRcclxuICAgIGlmICh0aGlzLm1yZEJ1dHRvblRleHRDb250ZW50ICYmICF0aGlzLnRvb2x0aXBUZXh0KSB7XHJcbiAgICAgIHRoaXMudG9vbHRpcFRleHQgPSB0aGlzLm1yZEJ1dHRvblRleHRDb250ZW50Lm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudG9nZ2xlICYmIHRoaXMudG9nZ2xlU2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXR6dCBkaWUgU3RhbmRhcmQtU3R5bGVzIGFuaGFuZCBkZXIgS29uZmlndXJhdGlvbiB1bmQgZGVyIGdlc2V0enRlbiBBdHRyaWJ1dGUuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBwcml2YXRlIGluaXRCYXNlU3R5bGUoKTogdm9pZCB7XHJcbiAgICBsZXQgYXBwZWFyYW5jZTogTXJkQnV0dG9uQXBwZWFyYW5jZSA9IHRoaXMuaWNvbiA/IE1yZEJ1dHRvbkFwcGVhcmFuY2UuSUNPTiA6IHRoaXMucmFpc2VkID8gTXJkQnV0dG9uQXBwZWFyYW5jZS5SQUlTRUQgOlxyXG4gICAgICB0aGlzLm91dGxpbmUgPyBNcmRCdXR0b25BcHBlYXJhbmNlLk9VVExJTkUgOiB0aGlzLmZsYXQgPyBNcmRCdXR0b25BcHBlYXJhbmNlLkZMQVQgOiB0aGlzLmZhYiA/IE1yZEJ1dHRvbkFwcGVhcmFuY2UuRkFCIDpcclxuICAgICAgdGhpcy5taW5pRmFiID8gTXJkQnV0dG9uQXBwZWFyYW5jZS5NSU5JX0ZBQiA6IHRoaXMudG9nZ2xlID8gTXJkQnV0dG9uQXBwZWFyYW5jZS5UT0dHTEUgOiBudWxsOy8vTXJkQnV0dG9uQXBwZWFyYW5jZS5ERUZBVUxUO1xyXG4gICAgdGhpcy51bmNvbGxhcHNlZEFwcGVhcmFuY2UgPSB0aGlzLnVuY29sbGFwc2VkQXBwZWFyYW5jZSAhPT0gdW5kZWZpbmVkID8gdGhpcy51bmNvbGxhcHNlZEFwcGVhcmFuY2UgOiBhcHBlYXJhbmNlO1xyXG5cclxuICAgIHRoaXMuYnV0dG9uUHJpbWFyeSA9IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LnByaW1hcnkgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5wcmltYXJ5IHx8IHRoaXMuX2NvbmZpZy5iYXNlQ29sb3JzLnByaW1hcnk7XHJcbiAgICB0aGlzLmJ1dHRvbkFjY2VudCA9IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LmFjY2VudCB8fCB0aGlzLl9jb25maWcuYnV0dG9uLmFjY2VudCB8fCB0aGlzLl9jb25maWcuYmFzZUNvbG9ycy5hY2NlbnQ7XHJcbiAgICB0aGlzLmJ1dHRvbldhcm4gPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy53YXJuIHx8IHRoaXMuX2NvbmZpZy5idXR0b24ud2FybiB8fCB0aGlzLl9jb25maWcuYmFzZUNvbG9ycy53YXJuO1xyXG4gICAgdGhpcy5idXR0b25EaXNhYmxlZCA9IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LmRpc2FibGVkIHx8IHRoaXMuX2NvbmZpZy5idXR0b24uZGlzYWJsZWRcclxuICAgIHRoaXMuYnV0dG9uUHJvZ3Jlc3MgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5wcm9ncmVzc0NvbG9yIHx8IHRoaXMuX2NvbmZpZy5idXR0b24/LnByb2dyZXNzQ29sb3IgfHxcclxuICAgICAgKF8uaXNPYmplY3QodGhpcy5idXR0b25QcmltYXJ5KSA/ICh0aGlzLmJ1dHRvblByaW1hcnkgYXMgTXJkQmFzZUNvbG9yVGhlbWUpLnRleHQgOiB0aGlzLmJ1dHRvblByaW1hcnkgYXMgc3RyaW5nKTtcclxuXHJcbiAgICB0aGlzLmJnQ29sb3IgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5iYWNrZ3JvdW5kQ29sb3IgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLnRleHRMaWdodENvbG9yID0gdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8udGV4dExpZ2h0Q29sb3IgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi50ZXh0TGlnaHRDb2xvcjtcclxuICAgIHRoaXMudGV4dERhcmtDb2xvciA9IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LnRleHREYXJrQ29sb3IgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi50ZXh0RGFya0NvbG9yO1xyXG4gICAgdGhpcy50ZXh0Q29sb3IgPSB0aGlzLnRleHREYXJrQ29sb3I7XHJcbiAgICB0aGlzLmhvdmVyQ29sb3IgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5ob3ZlckNvbG9yIHx8IHRoaXMuX2NvbmZpZy5idXR0b24uaG92ZXJDb2xvcjtcclxuICAgIHRoaXMuaG92ZXJUZXh0Q29sb3IgPSB0aGlzLnRleHRDb2xvcjtcclxuICAgIHRoaXMuYWN0aXZlQ29sb3IgPSB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5hY3RpdmVDb2xvciB8fCB0aGlzLl9jb25maWcuYnV0dG9uLmFjdGl2ZUNvbG9yO1xyXG4gICAgdGhpcy5kaXNhYmxlZFRleHRDb2xvciA9IHRoaXMuYnV0dG9uRGlzYWJsZWQudGV4dDtcclxuICAgIHRoaXMuZGlzYWJsZWRCZ0NvbG9yID0gdGhpcy5idXR0b25EaXNhYmxlZC5iYWNrZ3JvdW5kO1xyXG4gICAgdGhpcy50b2dnbGVVbnNlbGVjdGVkQ29sb3IgPSB0aGlzLmN1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRDb2xvciB8fCB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy51bnNlbGVjdGVkQmdDb2xvcjtcclxuXHJcbiAgICBpZiAodGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8uYm9yZGVyKSB7XHJcbiAgICAgIGlmIChfLmlzT2JqZWN0KHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0uYm9yZGVyKSkge1xyXG4gICAgICAgIHRoaXMuYm9yZGVyV2lkdGggPSAodGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXS5ib3JkZXIgYXMgTXJkQm9yZGVyKS53aWR0aDtcclxuICAgICAgICB0aGlzLmJvcmRlclN0eWxlID0gKHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0uYm9yZGVyIGFzIE1yZEJvcmRlcikuc3R5bGU7XHJcbiAgICAgICAgdGhpcy5ib3JkZXJDb2xvciA9ICh0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdLmJvcmRlciBhcyBNcmRCb3JkZXIpLmNvbG9yO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBib3JkZXIgPSAgKHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0uYm9yZGVyIGFzIHN0cmluZykuc3BsaXQoJyAnKVxyXG4gICAgICAgIHRoaXMuYm9yZGVyV2lkdGggPSBib3JkZXJbMF07XHJcbiAgICAgICAgdGhpcy5ib3JkZXJTdHlsZSA9IGJvcmRlclsxXTtcclxuICAgICAgICB0aGlzLmJvcmRlckNvbG9yID0gYm9yZGVyWzJdO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmJvcmRlcldpZHRoID0gXy5pc09iamVjdCh0aGlzLl9jb25maWcuYnV0dG9uLmJvcmRlcikgPyAodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIgYXMgTXJkQm9yZGVyKT8ud2lkdGggOiAodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIgYXMgc3RyaW5nKS5zcGxpdCgnICcpWzBdO1xyXG4gICAgICB0aGlzLmJvcmRlclN0eWxlID0gXy5pc09iamVjdCh0aGlzLl9jb25maWcuYnV0dG9uLmJvcmRlcikgPyAodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIgYXMgTXJkQm9yZGVyKT8uc3R5bGUgOiAodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIgYXMgc3RyaW5nKS5zcGxpdCgnICcpWzFdO1xyXG4gICAgICB0aGlzLmJvcmRlckNvbG9yID0gXy5pc09iamVjdCh0aGlzLl9jb25maWcuYnV0dG9uLmJvcmRlcikgPyAodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIgYXMgTXJkQm9yZGVyKT8uY29sb3IgOiAodGhpcy5fY29uZmlnLmJ1dHRvbi5ib3JkZXIgYXMgc3RyaW5nKS5zcGxpdCgnICcpWzJdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWluSGVpZ2h0ID0gdGhpcy5taW5IZWlnaHQgfHwgdGhpcy5kaWFtZXRlciB8fCB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5taW5IZWlnaHQgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5taW5IZWlnaHQ7XHJcbiAgICB0aGlzLmZvbnRTaXplID0gdGhpcy5mb250U2l6ZSB8fCB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5mb250U2l6ZSB8fCB0aGlzLl9jb25maWcuYnV0dG9uLmZvbnRTaXplIHx8IHRoaXMuX2NvbmZpZy5iYXNlRm9udC5zaXplO1xyXG4gICAgdGhpcy5mb250RmFtaWx5ID0gdGhpcy5mb250RmFtaWx5IHx8IHRoaXMuX2NvbmZpZy5idXR0b25bYXBwZWFyYW5jZV0/LmZvbnRGYW1pbHkgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5mb250RmFtaWx5IHx8IHRoaXMuX2NvbmZpZy5iYXNlRm9udC5mYW1pbHk7XHJcbiAgICB0aGlzLmRpYW1ldGVyID0gdGhpcy5kaWFtZXRlciB8fCB0aGlzLl9jb25maWcuYnV0dG9uW2FwcGVhcmFuY2VdPy5kaWFtZXRlciB8fCB0aGlzLl9jb25maWcuYnV0dG9uLmRpYW1ldGVyO1xyXG4gICAgdGhpcy5pY29uU2l6ZSA9IHRoaXMuaWNvblNpemUgfHwgdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8uaWNvblNpemUgfHwgdGhpcy5fY29uZmlnLmJ1dHRvbi5pY29uU2l6ZTtcclxuICAgIHRoaXMuYm9yZGVyUmFkaXVzID0gdGhpcy5ib3JkZXJSYWRpdXMgfHwgdGhpcy5fY29uZmlnLmJ1dHRvblthcHBlYXJhbmNlXT8uYm9yZGVyUmFkaXVzIHx8IHRoaXMuX2NvbmZpZy5idXR0b24uYm9yZGVyUmFkaXVzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2ssIHdlbm4gc2ljaCBkZXIgQ29sbGFicy1TdGF0dXMgZGVzIEJ1dHRvbnMgw6RuZGVydC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBpc0NvbGxhcHNlZCBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGtvbGxhYmllcnQgaXN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBidXR0b25Db2xsYXBzZWQoaXNDb2xsYXBzZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIC8vIFdpciByZWFnaWVyZW4gbnVyLCB3ZW5uIHNpY2ggZGVyIFN0YXR1cyDDpG5kZXJ0XHJcbiAgICBpZiAodGhpcy5pc0NvbGxhcHNlZCAhPT0gaXNDb2xsYXBzZWQpIHtcclxuICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9IGlzQ29sbGFwc2VkO1xyXG4gICAgICAvLyBXZW5uICdjb2xsYXBzZVRvJyBnZXNldHp0IGlzdCwgd2lyZCBkZXIgQnV0dG9uIGVudHNwcmVjaGVuZCB1bWdlc3R5bHRcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuY29sbGFwc2VUbykpIHtcclxuICAgICAgICAvLyBEaWVzZSBXZXJ0ZSBtw7xzc2VuIHp1csO8Y2tnZXNldHp0IHdlcmRlbiwgZGEgc2llIGbDvHIgZGVuIG5ldWVuIFN0eWxlIG5ldSBnZXNldHp0IHdlcmRlbiBtw7xzc2VuXHJcbiAgICAgICAgdGhpcy5ib3JkZXJSYWRpdXMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLm1pbkhlaWdodCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmRpYW1ldGVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuaWNvblNpemUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKGlzQ29sbGFwc2VkKSB7XHJcbiAgICAgICAgICB0aGlzLmljb24gPSB0aGlzLmNvbGxhcHNlVG8gPT09IE1yZEJ1dHRvbkFwcGVhcmFuY2UuSUNPTiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMucmFpc2VkID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm91dGxpbmUgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuZmxhdCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5mYWIgPSB0aGlzLmNvbGxhcHNlVG8gPT09IE1yZEJ1dHRvbkFwcGVhcmFuY2UuRkFCID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5taW5pRmFiID0gdGhpcy5jb2xsYXBzZVRvID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLk1JTklfRkFCID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5pY29uID0gdGhpcy51bmNvbGxhcHNlZEFwcGVhcmFuY2UgPT09IE1yZEJ1dHRvbkFwcGVhcmFuY2UuSUNPTiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMucmFpc2VkID0gdGhpcy51bmNvbGxhcHNlZEFwcGVhcmFuY2UgPT09IE1yZEJ1dHRvbkFwcGVhcmFuY2UuUkFJU0VEID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5vdXRsaW5lID0gdGhpcy51bmNvbGxhcHNlZEFwcGVhcmFuY2UgPT09IE1yZEJ1dHRvbkFwcGVhcmFuY2UuT1VUTElORSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuZmxhdCA9IHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLkZMQVQgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmZhYiA9IHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLkZBQiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubWluaUZhYiA9IHRoaXMudW5jb2xsYXBzZWRBcHBlYXJhbmNlID09PSBNcmRCdXR0b25BcHBlYXJhbmNlLk1JTklfRkFCID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmNsaWNrLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZW51bSBNcmRCdXR0b25BcHBlYXJhbmNlIHtcclxuICAvLyBERUZBVUxUID0gbnVsbCxcclxuICBJQ09OID0gJ2ljb24nLFxyXG4gIFJBSVNFRCA9ICdyYWlzZWQnLFxyXG4gIE9VVExJTkUgPSAnb3V0bGluZScsXHJcbiAgRkxBVCA9ICdmbGF0JyxcclxuICBGQUIgPSAnZmFiJyxcclxuICBNSU5JX0ZBQiA9ICdtaW5pRmFiJyxcclxuICBUT0dHTEUgPSAndG9nZ2xlJ1xyXG59XHJcbiIsIjwhLS0gRGVyIGVpZ2VudGxpY2ggSFRNTC1CdXR0b24gLS0+XHJcbjxidXR0b24gY2xhc3M9XCJtcmQtYnV0dG9uLWNvbnRhaW5lclwiXHJcbiAgI2J1dHRvbkNvbnRhaW5lclxyXG4gIFtzdHlsZS4tLWJnLWNvbG9yXT1cImJnQ29sb3JcIlxyXG4gIFtzdHlsZS4tLXRleHQtY29sb3JdPVwidGV4dENvbG9yXCJcclxuICBbc3R5bGUuLS1ob3Zlci10ZXh0LWNvbG9yXT1cImhvdmVyVGV4dENvbG9yXCJcclxuICBbc3R5bGUuLS1kaXNhYmxlZC10ZXh0LWNvbG9yXT1cImRpc2FibGVkVGV4dENvbG9yXCJcclxuICBbc3R5bGUuLS1kaXNhYmxlZC1iZy1jb2xvcl09XCJkaXNhYmxlZEJnQ29sb3JcIlxyXG4gIFtzdHlsZS4tLWJvcmRlci13aWR0aF09XCJib3JkZXJXaWR0aFwiXHJcbiAgW3N0eWxlLi0tYm9yZGVyLWNvbG9yXT1cImJvcmRlckNvbG9yXCJcclxuICBbc3R5bGUuLS1ib3JkZXItc3R5bGVdPVwiYm9yZGVyU3R5bGVcIlxyXG4gIFtzdHlsZS4tLWJvcmRlci1yYWRpdXNdPVwiYm9yZGVyUmFkaXVzXCJcclxuICBbc3R5bGUuLS1taW4taGVpZ2h0XT1cIm1pbkhlaWdodFwiXHJcbiAgW3N0eWxlLi0tZm9udC1zaXplXT1cImZvbnRTaXplXCJcclxuICBbc3R5bGUuLS1mb250LWZhbWlseV09XCJmb250RmFtaWx5XCJcclxuICBbc3R5bGUuLS1mb250LXdlaWdodF09XCJmb250V2VpZ2h0XCJcclxuICBbc3R5bGUuLS1kaWFtZXRlcl09XCJkaWFtZXRlclwiXHJcbiAgW3N0eWxlLi0taWNvbi1zaXplXT1cImljb25TaXplXCJcclxuICBbc3R5bGUuLS11bnNlbGVjdGVkLWNvbG9yXT1cInRvZ2dsZVVuc2VsZWN0ZWRDb2xvclwiXHJcbiAgW3N0eWxlLi0tdGVzdF09XCIndGVzdCdcIlxyXG5cclxuICBbbmdTdHlsZV09XCJ7J21pbi13aWR0aCc6IGZpdENvbnRlbnQgPyAnZml0LWNvbnRlbnQnIDogJ3Vuc2V0J31cIlxyXG4gIFtuZ0NsYXNzXT1cInsnbXJkLWljb24tYnV0dG9uJzogaWNvbiwgJ21yZC1yYWlzZWQtYnV0dG9uJzogcmFpc2VkLCAnbXJkLW91dGxpbmUtYnV0dG9uJzogb3V0bGluZSxcclxuICAgICdtcmQtZmxhdC1idXR0b24nOiBmbGF0LCAnbXJkLWZhYi1idXR0b24nOiBmYWIsICdtcmQtbWluaS1mYWItYnV0dG9uJzogbWluaUZhYiwgJ21yZC10b2dnbGUtYnV0dG9uJzogdG9nZ2xlLFxyXG4gICAgJ21yZC10b2dnbGUtc2VsZWN0ZWQnOiB0b2dnbGVTZWxlY3RlZCwgJ2Rpc2FibGVkJzogZGlzYWJsZWR9XCJcclxuXHJcbiAgW21yZFRvb2xUaXBdPVwidG9vbHRpcFRleHRcIiBbc2hvd09uVHJ1bmNhdGVkRWxlbWVudF09XCJ0b29sdGlwSWZUcnVuY2F0ZWQgPyBtcmRCdXR0b25UZXh0Q29udGVudCA6IHVuZGVmaW5lZFwiIFtzaG93VG9vbFRpcF09XCJzaG93VG9vbHRpcCB8fCAodG9vbHRpcElmQ29sbGFwc2VkICYmIGlzQ29sbGFwc2VkKVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJtcmQtYnV0dG9uLWJhY2tncm91bmRcIj5cclxuICAgIDwhLS0gRWluIE92ZXJsYXkgw7xiZXIgZGVtIEJ1dHRvbiB3ZWxjaGVzIGRlbiBIb3Zlci0gdW5kIEFjdGl2ZS1FZmZla3QgYW56ZWlndCAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJtcmQtYnV0dG9uLWZvY3VzXCIgW3N0eWxlLi0taG92ZXItY29sb3JdPVwiaG92ZXJDb2xvclwiIFtzdHlsZS4tLWFjdGl2ZS1jb2xvcl09XCJhY3RpdmVDb2xvclwiPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDwhLS0gRWluIE92ZXJsYXkgw7xiZXIgZGVtIEJ1dHRvbiB3ZWxjaGVzIGRlbiBIb3Zlci0gdW5kIEFjdGl2ZS1FZmZla3QgYW56ZWlndCAtLT5cclxuICA8IS0tIDxkaXYgY2xhc3M9XCJtcmQtYnV0dG9uLWZvY3VzXCIgW3N0eWxlLi0taG92ZXItY29sb3JdPVwiaG92ZXJDb2xvclwiIFtzdHlsZS4tLWFjdGl2ZS1jb2xvcl09XCJhY3RpdmVDb2xvclwiPjwvZGl2PiAtLT5cclxuICA8IS0tIERlciBDb250ZW50IGRlcyBCdXR0b25zIC0tPlxyXG4gIDxzcGFuIGNsYXNzPVwibXJkLWJ1dHRvbi1jb250ZW50XCIgW25nQ2xhc3NdPVwieydpc0NvbGxhcHNlZCc6IGlzQ29sbGFwc2VkfVwiPlxyXG4gICAgPCEtLSBMaW5rZXIgSWNvbi1Db250YWluZXIgLS0+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm1yZC1idXR0b24taWNvbi1jb250ZW50XCIgXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJ7J2Z1bGwtaWNvbic6IGZ1bGxJY29ufVwiIFxyXG4gICAgICAgICAgW2hpZGVJZlRydW5jYXRlZF09XCJjb2xsYXBzZVwiIFxyXG4gICAgICAgICAgZGlzcGxheVN0YXRlPVwiZmxleFwiIFxyXG4gICAgICAgICAgcmVxdWlyZWRIaWRlQXR0cmlidXRlPVwiaWNvbi1jb2xsYXBzZVwiXHJcbiAgICAgICAgICBjaGVja0NoaWxkcmVuRm9yQXR0cmlidXRlIFxyXG4gICAgICAgICAgW2hpZGVPblRydW5jYXRlZEVsZW1lbnRdPVwibXJkQnV0dG9uVGV4dENvbnRlbnRcIiBcclxuICAgICAgICAgIFtwYXJlbnRSZXNpemVFbGVtZW50XT1cInRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm1yZC1pY29uOm5vdChbaWNvbi1lbmRdKSwgW21yZC1pY29uXTpub3QoW2ljb24tZW5kXSlcIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L3NwYW4+XHJcbiAgICBcclxuICAgIDwhLS0gRGVyIFRleHQgZGVzIEJ1dHRvbnMgLS0+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm1yZC1idXR0b24tdGV4dC1jb250ZW50XCIgXHJcbiAgICAgICAgICAoaGlkZGVuQ2hhbmdlZCk9XCJidXR0b25Db2xsYXBzZWQoJGV2ZW50KVwiIFxyXG4gICAgICAgICAgW2hpZGVJZlRydW5jYXRlZF09XCJjb2xsYXBzZVwiIFxyXG4gICAgICAgICAgI21yZEJ1dHRvblRleHRDb250ZW50IFxyXG4gICAgICAgICAgW3BhcmVudFJlc2l6ZUVsZW1lbnRdPVwidGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiOm5vdChbbXJkLWljb25dKTpub3QobXJkLWljb24pXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9zcGFuPlxyXG4gICAgXHJcbiAgICA8IS0tIFJlY2h0ZXIgSWNvbi1Db250YWluZXIgLS0+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm1yZC1idXR0b24taWNvbi1jb250ZW50XCIgXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJ7J2Z1bGwtaWNvbic6IGZ1bGxJY29ufVwiIFxyXG4gICAgICAgICAgW2hpZGVJZlRydW5jYXRlZF09XCJjb2xsYXBzZVwiIFxyXG4gICAgICAgICAgZGlzcGxheVN0YXRlPVwiZmxleFwiIFxyXG4gICAgICAgICAgcmVxdWlyZWRIaWRlQXR0cmlidXRlPVwiaWNvbi1jb2xsYXBzZVwiXHJcbiAgICAgICAgICBjaGVja0NoaWxkcmVuRm9yQXR0cmlidXRlIFxyXG4gICAgICAgICAgW2hpZGVPblRydW5jYXRlZEVsZW1lbnRdPVwibXJkQnV0dG9uVGV4dENvbnRlbnRcIiBcclxuICAgICAgICAgIFtwYXJlbnRSZXNpemVFbGVtZW50XT1cInRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm1yZC1pY29uW2ljb24tZW5kXSwgW21yZC1pY29uXVtpY29uLWVuZF1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8IS0tIERpZSBQcm9ncmVzcy1CYXIgZWluZXMgQnV0dG9ucyAobmljaHQgZsO8ciBJY29uLSwgRmFiLSB1bmQgTWluaS1GYWItQnV0dG9ucykgLS0+XHJcbiAgPG1yZC1wcm9ncmVzcy1iYXIgY2xhc3M9XCJtcmQtYnV0dG9uLXByb2dyZXNzLWJhclwiXHJcbiAgICAqbmdJZj1cIiFkaXNhYmxlZCAmJiAhaWNvbiAmJiAhZmFiICYmICFtaW5pRmFiICYmIChpc0xvYWRpbmcgfHwgbG9hZGluZz8udmFsdWUgfHwgbG9hZGluZ1Byb2dyZXNzPy52YWx1ZSB8fCBsb2FkaW5nUHJvZ3Jlc3M/LnZhbHVlID09PSAwKVwiXHJcbiAgICBbdmFsdWVdPVwibG9hZGluZ1Byb2dyZXNzPy52YWx1ZVwiIFttb2RlXT1cImxvYWRpbmdQcm9ncmVzcyA/ICdkZXRlcm1pbmF0ZScgOiAnaW5kZXRlcm1pbmF0ZSdcIiBbY29sb3JdPVwicHJvZ3Jlc3NDb2xvclwiPjwvbXJkLXByb2dyZXNzLWJhcj5cclxuICA8IS0tIERlciBQcm9ncmVzcy1TcGlubmVyIGVpbmVzIEJ1dHRvbnMgKG51ciBmw7xyIEljb24tLCBGYWItIHVuZCBNaW5pLUZhYi1CdXR0b25zKSAtLT5cclxuICA8bXJkLXByb2dyZXNzLXNwaW5uZXIgY2xhc3M9XCJtcmQtYnV0dG9uLXByb2dyZXNzLXNwaW5uZXJcIlxyXG4gICAgKm5nSWY9XCIhZGlzYWJsZWQgJiYgKGljb24gfHwgZmFiIHx8IG1pbmlGYWIpICYmIChpc0xvYWRpbmcgfHwgbG9hZGluZz8udmFsdWUgfHwgbG9hZGluZ1Byb2dyZXNzPy52YWx1ZSB8fCBsb2FkaW5nUHJvZ3Jlc3M/LnZhbHVlID09PSAwKVwiXHJcbiAgICBbdmFsdWVdPVwibG9hZGluZ1Byb2dyZXNzPy52YWx1ZVwiIFttb2RlXT1cImxvYWRpbmdQcm9ncmVzcyA/ICdkZXRlcm1pbmF0ZScgOiAnaW5kZXRlcm1pbmF0ZSdcIiBbY29sb3JdPVwicHJvZ3Jlc3NDb2xvclwiPjwvbXJkLXByb2dyZXNzLXNwaW5uZXI+XHJcbjwvYnV0dG9uPlxyXG4iXX0=