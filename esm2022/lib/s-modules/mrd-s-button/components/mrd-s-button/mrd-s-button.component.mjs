import { MrdSButtonSizeType, MrdSButtonType } from './../../../../common/model/config.model';
import { BasePushStrategyObject, Util } from 'mrd-core';
import { ChangeDetectionStrategy, Component, Input, ViewChild, booleanAttribute } from '@angular/core';
import { ConfigUtil } from './../../../../common/util/config.util';
import * as _ from 'underscore';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../../modules/mrd-tooltip/common/directive/tool-tip-renderer/tool-tip-renderer.directive";
import * as i3 from "../../../../common/directive/hide-if-truncated/hide-if-truncated.directive";
import * as i4 from "../../../../modules/mrd-progress-bar/components/mrd-progress-bar/mrd-progress-bar.component";
import * as i5 from "../../../../modules/mrd-progress-spinner/components/mrd-progress-spinner/mrd-progress-spinner.component";
import * as i6 from "../../../../common/components/mrd-icon-group/mrd-icon-group.component";
import * as i7 from "../../../../modules/mrd-icon/components/mrd-icon.component";
const _c0 = ["mrdButtonTextContent"];
const _c1 = ["buttonTouchArea"];
function MrdSButtonComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵprojection(1, 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(9);
    i0.ɵɵclassProp("full-icon", ctx_r2.isFullIcon);
    i0.ɵɵproperty("hideIfTruncated", ctx_r2.collapse)("hideOnTruncatedElement", _r4)("parentResizeElement", ctx_r2.elementRef.nativeElement);
} }
function MrdSButtonComponent_span_7_mrd_icon_group_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mrd-icon-group", 18);
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵproperty("svgs", ctx_r12.iconStateMap)("hostElement", _r0)("disabled", ctx_r12.disabled)("hovered", ctx_r12.hovered)("loading", ctx_r12.isLoading)("size", ctx_r12.iconSizeNumber);
} }
function MrdSButtonComponent_span_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 19);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r10 = i0.ɵɵreference(17);
    i0.ɵɵproperty("ngTemplateOutlet", _r10);
} }
function MrdSButtonComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵtemplate(1, MrdSButtonComponent_span_7_mrd_icon_group_1_Template, 1, 6, "mrd-icon-group", 16);
    i0.ɵɵtemplate(2, MrdSButtonComponent_span_7_ng_container_2_Template, 1, 1, "ng-container", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(9);
    i0.ɵɵstyleProp("margin-right", !ctx_r3.isIconButton ? "6px" : "0px");
    i0.ɵɵclassProp("full-icon", ctx_r3.isFullIcon);
    i0.ɵɵproperty("hideIfTruncated", ctx_r3.collapse)("hideOnTruncatedElement", _r4)("parentResizeElement", ctx_r3.elementRef.nativeElement);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.iconStateMap);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r3.iconStateMap && ctx_r3.iconDefinition);
} }
function MrdSButtonComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵlistener("hiddenChanged", function MrdSButtonComponent_span_11_Template_span_hiddenChanged_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.buttonCollapsed($event)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("hideIfTruncated", ctx_r5.collapse)("parentResizeElement", ctx_r5.elementRef.nativeElement);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.defaultButtonText, " ");
} }
function MrdSButtonComponent_span_12_mrd_icon_group_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mrd-icon-group", 18);
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵproperty("svgs", ctx_r16.iconStateMap)("hostElement", _r0)("disabled", ctx_r16.disabled)("hovered", ctx_r16.hovered)("loading", ctx_r16.isLoading)("size", ctx_r16.iconSizeNumber);
} }
function MrdSButtonComponent_span_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 19);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r10 = i0.ɵɵreference(17);
    i0.ɵɵproperty("ngTemplateOutlet", _r10);
} }
function MrdSButtonComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵtemplate(1, MrdSButtonComponent_span_12_mrd_icon_group_1_Template, 1, 6, "mrd-icon-group", 16);
    i0.ɵɵtemplate(2, MrdSButtonComponent_span_12_ng_container_2_Template, 1, 1, "ng-container", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(9);
    i0.ɵɵstyleProp("margin-left", !ctx_r6.isIconButton ? "6px" : "0px");
    i0.ɵɵclassProp("full-icon", ctx_r6.isFullIcon);
    i0.ɵɵproperty("hideIfTruncated", ctx_r6.collapse)("hideOnTruncatedElement", _r4)("parentResizeElement", ctx_r6.elementRef.nativeElement);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.iconStateMap);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r6.iconStateMap && ctx_r6.iconDefinition);
} }
function MrdSButtonComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵprojection(1, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(9);
    i0.ɵɵclassProp("full-icon", ctx_r7.isFullIcon);
    i0.ɵɵproperty("hideIfTruncated", ctx_r7.collapse)("hideOnTruncatedElement", _r4)("parentResizeElement", ctx_r7.elementRef.nativeElement);
} }
function MrdSButtonComponent_mrd_progress_bar_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mrd-progress-bar", 20);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r8.loadingProgress == null ? null : ctx_r8.loadingProgress.value)("mode", ctx_r8.loadingProgress ? "determinate" : "indeterminate")("color", ctx_r8.progressColor);
} }
function MrdSButtonComponent_mrd_progress_spinner_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mrd-progress-spinner", 21);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r9.loadingProgress == null ? null : ctx_r9.loadingProgress.value)("mode", ctx_r9.loadingProgress ? "determinate" : "indeterminate")("color", ctx_r9.progressColor);
} }
function MrdSButtonComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mrd-icon", 22);
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", ctx_r11.iconDefinition.symbol)("outline", ctx_r11.iconDefinition.outer === "outline")("full", ctx_r11.iconDefinition.outer === "full")("dashed", ctx_r11.iconDefinition.outer === "dashed")("direction", ctx_r11.iconDefinition.direction)("size", ctx_r11.iconSizeNumber);
} }
const _c2 = [[["", 3, "mrd-icon", "", 5, "mrd-icon"]], [["mrd-icon", 3, "icon-end", ""], ["", "mrd-icon", "", 3, "icon-end", ""]], [["mrd-icon", "icon-end", ""], ["", "mrd-icon", "", "icon-end", ""]]];
const _c3 = function (a0) { return { "min-width": a0 }; };
const _c4 = function (a0) { return { "isCollapsed": a0 }; };
const _c5 = [":not([mrd-icon]):not(mrd-icon)", "mrd-icon:not([icon-end]), [mrd-icon]:not([icon-end])", "mrd-icon[icon-end], [mrd-icon][icon-end]"];
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
 * @class MrdSButtonComponent
 * @extends {BasePushStrategyObject}
 * @implements {AfterViewInit}
 */
export class MrdSButtonComponent extends BasePushStrategyObject {
    cdr;
    ngZone;
    elementRef;
    /**
     * Referenz auf das Text-Element des Buttons.
     *
     * @type {ElementRef<HTMLElement>}
     * @memberof MrdSButtonComponent
     */
    mrdButtonTextContent;
    /**
     * Referenz auf das Touch-Area-Element des Buttons.
     *
     * @type {ElementRef<HTMLElement>}
     * @memberof MrdSButtonComponent
     */
    buttonTouchArea;
    /**
     * Gibt an, welches Theme der Button hat.
     *
     * @memberof MrdSButtonComponent
     */
    theme;
    /**
     * Gibt an, ob der Button ein Edit-Button ist.
     *
     * @type {boolean}
     * @memberof MrdSButtonComponent
     */
    editButton = false;
    saveButton = false;
    cancelButton = false;
    closeIconButton = false;
    deleteButton = false;
    addButton = false;
    /**
     * Gibt an, ob der Button ein Toggle-Button ist.
     *
     * Toggle-Buttons sollten immer innerhalb einer Toggle-Button-Group verwendet werden.
     * Standardmäßig haben sie einen weißen Hintergrund und die Textfarbe ist schwarz, außerdem besitzen sie im selektierten Zustand einen Schatten.
     *
     * @type {boolean}
     * @memberof MrdSButtonComponent
     */
    toggle = false;
    /**
     * Gibt an, ob der Button, als Toggle-Button, selektiert ist.
     *
     * @type {boolean}
     * @memberof MrdSButtonComponent
     */
    toggleSelected = false;
    /**
     * Gibt an, ob der Button deaktiviert ist.
     *
     * @memberof MrdSButtonComponent
     */
    disabled = false;
    /**
     * Gibt an, ob der Button deaktiviert ist.
     *
     * @memberof MrdSButtonComponent
     */
    hovered = false;
    /**
     * Eine ObservableValue, die übergeben werden kann, um zu bestimmen,
     * ob der Button einen Ladebalken/Ladespinner anzeigen soll.
     *
     * @memberof MrdSButtonComponent
     */
    loading;
    /**
     * Ein boolean, der bestimmt, ob der Button einen Ladebalken/Ladespinner anzeigen soll.
     *
     * @type {boolean}
     * @memberof MrdSButtonComponent
     */
    isLoading = false;
    /**
     * Eine ObservableValue, die übergeben werden kann, um den Fortschritt des Ladebalkens/Ladespinners zu bestimmen.
     *
     * @type {ObservableValue<number>}
     * @memberof MrdSButtonComponent
     */
    loadingProgress;
    /**
     * Gibt an, ob der Button-Text verschwindet, wenn er zu lang ist und ausgepunktet werden würde.
     *
     * @type {boolean}
     * @memberof MrdSButtonComponent
     */
    /*@Input({transform: booleanAttribute})*/ collapse = false;
    _collapseTo = MrdSButtonSizeType.ICON;
    /**
     * Gibt an, ob der Button einen Tooltip anzeigen soll.
     *
     * Der Tooltip-Text wird standardmäßig aus dem Inhalt des Buttons ohne durch [mrd-icon] gekennzeichnete Icons generiert.
     *
     * @type {boolean}
     * @memberof MrdSButtonComponent
     */
    showTooltip = false;
    /**
     * Der Text des Tooltips.
     *
     * @type {string}
     * @memberof MrdSButtonComponent
     */
    tooltipText;
    /**
     * Gibt an, ob der Tooltip nur angezeigt werden soll, wenn der Button-Text ausgepunktet wird.
     *
     * @type {boolean}
     * @memberof MrdSButtonComponent
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
     * @memberof MrdSButtonComponent
     */
    tooltipIfCollapsed = false;
    /**
     * Gibt an, ob Icon des Buttons die volle Größe des Buttons einnehmen soll.
     *
     * @type {boolean}
     * @memberof MrdSButtonComponent
     */
    size = MrdSButtonSizeType.BIG;
    /**
     * Der Wert des Buttons als Toggle-Button.
     *
     * @type {any}
     * @memberof MrdSButtonComponent
     */
    value;
    iconStateMap;
    iconEnd = true;
    /**
     * Die Konfiguration des Mrd-Buttons.
     *
     * @private
     * @type {MrdConfigModel}
     * @memberof MrdSButtonComponent
     */
    _config = ConfigUtil.getConfig();
    mouseEnterListener;
    mouseLeaveListener;
    uncollapsedAppearance;
    buttonConfig;
    themeConfig;
    sizeConfig;
    textColor;
    hoverTextColor;
    disabledTextColor;
    activeTextColor;
    bgColor;
    hoverBgColor;
    disabledBgColor;
    activeBgColor;
    border;
    hoverBorder;
    disabledBorder;
    activeBorder;
    progressColor;
    hoverProgressColor;
    disabledProgressColor;
    activeProgressColor;
    toggleUnselectedColor;
    borderRadius;
    minHeight;
    fontSize;
    fontFamily;
    fontWeight;
    diameter;
    iconSize;
    iconSizeNumber;
    textIconGap;
    padding;
    isIconButton = false;
    isFullIcon = false;
    isCollapsed = false;
    isHovered = false;
    isSpecificButton = false;
    isTouchHovered = false;
    isTouchActive = false;
    buttonText = '';
    /** Icon eines vordefinierten Buttons per mrd-icon (Farbe folgt dem Text); nur ohne iconStateMap */
    iconDefinition;
    defaultButtonText = '';
    // public iconStateMap?: SvgStateMap;
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
        this.updateStyle();
        this.isHovered = this.hovered;
        this.cdr.detectChanges();
    }
    ngOnDestroy() {
        this.elementRef.nativeElement.removeEventListener('click', this.klickPruefen, { capture: true });
        this.elementRef.nativeElement.removeEventListener('click', this.klickAbschirmen);
        super.ngOnDestroy();
    }
    updateStyle() {
        let specificButtonConfig;
        if (this.editButton) {
            this.isSpecificButton = true;
            specificButtonConfig = this._config.sButton?.definedButtons?.bearbeiten;
        }
        if (this.saveButton) {
            this.isSpecificButton = true;
            specificButtonConfig = this._config.sButton?.definedButtons?.speichern;
        }
        if (this.cancelButton) {
            this.isSpecificButton = true;
            specificButtonConfig = this._config.sButton?.definedButtons?.abbrechen;
        }
        if (this.closeIconButton) {
            this.isSpecificButton = true;
            specificButtonConfig = this._config.sButton?.definedButtons?.schliessenIcon;
            this.size = MrdSButtonSizeType.FULL_ICON;
        }
        if (this.deleteButton) {
            this.isSpecificButton = true;
            specificButtonConfig = this._config.sButton?.definedButtons?.loeschen;
        }
        if (this.addButton) {
            this.isSpecificButton = true;
            specificButtonConfig = this._config.sButton?.definedButtons?.hinzufuegen;
        }
        if (Util.isDefined(specificButtonConfig)) {
            this.theme ??= specificButtonConfig.theme;
            this.defaultButtonText = specificButtonConfig.text ?? '';
        }
        this.theme ??= MrdSButtonType.TEXT_ONLY;
        this.buttonConfig = this._config.sButton;
        this.themeConfig = this.theme !== MrdSButtonType.TEXT_ONLY ? this.buttonConfig[this.theme] : this.buttonConfig;
        this.sizeConfig = this.size !== MrdSButtonSizeType.BIG ? this.buttonConfig[this.size] : this.buttonConfig;
        this.isIconButton = this.size === MrdSButtonSizeType.ICON || this.size === MrdSButtonSizeType.FULL_ICON;
        this.isFullIcon = this.size === MrdSButtonSizeType.FULL_ICON;
        this.textColor = this.themeConfig.text?.default || this.buttonConfig.text?.default;
        this.hoverTextColor = this.themeConfig.text?.hover || this.buttonConfig.text?.hover;
        this.disabledTextColor = this.themeConfig.text?.disabled || this.buttonConfig.text?.disabled;
        this.activeTextColor = this.themeConfig.text?.active || this.buttonConfig.text?.active;
        this.bgColor = this.themeConfig.background?.default || this.buttonConfig.background?.default;
        this.hoverBgColor = this.themeConfig.background?.hover || this.buttonConfig.background?.hover;
        this.disabledBgColor = this.themeConfig.background?.disabled || this.buttonConfig.background?.disabled;
        this.activeBgColor = this.themeConfig.background?.active || this.buttonConfig.background?.active;
        this.progressColor = this.themeConfig.progress?.default || this.buttonConfig.progress?.default;
        this.hoverProgressColor = this.themeConfig.progress?.hover || this.buttonConfig.progress?.hover;
        this.disabledProgressColor = this.themeConfig.progress?.disabled || this.buttonConfig.progress?.disabled;
        this.activeProgressColor = this.themeConfig.progress?.active || this.buttonConfig.progress?.active;
        // this.toggleUnselectedColor = this.themeConfig.unselectedBgColor || this.buttonConfig.unselectedBgColor;
        this.border = _.isObject(this.themeConfig.border) ? this.themeConfig.border?.default : this.themeConfig.border || this.buttonConfig.border;
        this.hoverBorder = _.isObject(this.themeConfig.border) ? this.themeConfig.border?.hover : this.themeConfig.border || this.buttonConfig.border;
        this.disabledBorder = _.isObject(this.themeConfig.border) ? this.themeConfig.border?.disabled : this.themeConfig.border || this.buttonConfig.border;
        this.activeBorder = _.isObject(this.themeConfig.border) ? this.themeConfig.border?.active : this.themeConfig.border || this.buttonConfig.border;
        this.borderRadius = this.sizeConfig.borderRadius || this.buttonConfig.borderRadius;
        this.fontFamily = this.sizeConfig.font?.family || this.buttonConfig.font?.family || this._config.baseFont.family;
        this.fontSize = this.sizeConfig.font?.size || this.buttonConfig.font?.size || this._config.baseFont.size;
        this.fontWeight = this.sizeConfig.font?.weight || this.buttonConfig.font?.weight || this._config.baseFont.weight;
        this.minHeight = this.sizeConfig.minHeight || this.buttonConfig.minHeight;
        this.diameter = this.sizeConfig.diameter || this.buttonConfig.diameter;
        this.iconSize = this.sizeConfig.iconSize || this.buttonConfig.iconSize;
        this.iconSizeNumber = this.sizeConfig.iconSizeNumber || this.buttonConfig.iconSizeNumber;
        this.textIconGap = this.sizeConfig.textIconGap || this.buttonConfig.textIconGap;
        this.padding = this.sizeConfig.padding || this.buttonConfig.padding;
        this.iconEnd = specificButtonConfig?.iconEnd ?? this.iconEnd;
        if (Util.isDefined(specificButtonConfig) && Util.isDefined(specificButtonConfig.iconGroup)) {
            this.iconStateMap = {
                default: specificButtonConfig.iconGroup?.default ? specificButtonConfig.iconGroup.default(this.iconSizeNumber) : null,
                disabled: specificButtonConfig.iconGroup?.disabled ? specificButtonConfig.iconGroup.disabled(this.iconSizeNumber) : null,
                hover: specificButtonConfig.iconGroup?.hover ? specificButtonConfig.iconGroup.hover(this.iconSizeNumber) : null
            };
        }
        // iconGroup (eigene SVGs je Zustand) hat Vorrang, damit angepasste Host-Configs erhalten bleiben
        this.iconDefinition = Util.isDefined(specificButtonConfig?.iconGroup) ? undefined : specificButtonConfig?.icon;
        if (this.mrdButtonTextContent) {
            this.buttonText = this.mrdButtonTextContent.nativeElement.textContent.trim();
        }
        // Falls kein explizieter 'tooltipText' gesetzt ist, wird der Text des Buttons als Tooltip-Text verwendet
        if (!this.tooltipText) {
            this.tooltipText = this.buttonText;
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
     * Callback, wenn sich der Collabs-Status des Buttons ändert.
     *
     * @param isCollapsed Gibt an, ob der Button kollabiert ist.
     */
    buttonCollapsed(isCollapsed) {
        // Wir reagieren nur, wenn sich der Status ändert
        if (this.isCollapsed !== isCollapsed) {
            this.isCollapsed = isCollapsed;
            // Wenn 'collapseTo' gesetzt ist, wird der Button entsprechend umgestylt
            if (Util.isDefined(this._collapseTo)) {
                // Diese Werte müssen zurückgesetzt werden, da sie für den neuen Style neu gesetzt werden müssen
                this.borderRadius = undefined;
                this.fontSize = undefined;
                this.minHeight = undefined;
                this.diameter = undefined;
                this.iconSize = undefined;
                if (isCollapsed) {
                    this.uncollapsedAppearance = this.size;
                    this.size = this._collapseTo;
                    this.ngAfterViewInit();
                }
                else {
                    this.size = this.uncollapsedAppearance || this.size;
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
        this.isHovered = this.hovered;
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
    /** @nocollapse */ static ɵfac = function MrdSButtonComponent_Factory(t) { return new (t || MrdSButtonComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdSButtonComponent, selectors: [["mrd-s-button"]], viewQuery: function MrdSButtonComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
            i0.ɵɵviewQuery(_c1, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mrdButtonTextContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.buttonTouchArea = _t.first);
        } }, hostVars: 6, hostBindings: function MrdSButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseenter", function MrdSButtonComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function MrdSButtonComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
        } if (rf & 2) {
            i0.ɵɵstyleProp("min-width", !ctx.collapse ? "fit-content" : "unset")("margin", ctx.toggle ? "0 -16px" : "unset")("transition", ctx.toggle ? "transform 0.2s" : "unset");
        } }, inputs: { theme: "theme", editButton: ["edit-button", "editButton", booleanAttribute], saveButton: ["save-button", "saveButton", booleanAttribute], cancelButton: ["cancel-button", "cancelButton", booleanAttribute], closeIconButton: ["close-icon-button", "closeIconButton", booleanAttribute], deleteButton: ["delete-button", "deleteButton", booleanAttribute], addButton: ["add-button", "addButton", booleanAttribute], toggle: ["toggle-button", "toggle", booleanAttribute], toggleSelected: ["selected", "toggleSelected", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], hovered: ["hovered", "hovered", booleanAttribute], loading: "loading", isLoading: ["isLoading", "isLoading", booleanAttribute], loadingProgress: "loadingProgress", showTooltip: ["tooltip", "showTooltip", booleanAttribute], tooltipText: "tooltipText", tooltipIfTruncated: ["tooltipIfTruncated", "tooltipIfTruncated", booleanAttribute], tooltipIfCollapsed: ["tooltipIfCollapsed", "tooltipIfCollapsed", booleanAttribute], size: "size", value: "value", iconStateMap: "iconStateMap", iconEnd: ["iconEnd", "iconEnd", booleanAttribute] }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c5, decls: 18, vars: 70, consts: [[1, "mrd-button-container", 3, "ngStyle", "mrdToolTip", "showOnTruncatedElement", "showToolTip"], ["buttonContainer", ""], [1, "mrd-button-background"], [1, "mrd-button-touch-area", 3, "mouseenter", "mouseleave", "mousedown", "mouseup"], ["buttonTouchArea", ""], [1, "mrd-button-content", 3, "ngClass"], ["class", "mrd-button-icon-content", "displayState", "flex", "requiredHideAttribute", "icon-collapse", "checkChildrenForAttribute", "", 3, "full-icon", "hideIfTruncated", "hideOnTruncatedElement", "parentResizeElement", 4, "ngIf"], ["class", "mrd-button-icon-content", "displayState", "flex", "requiredHideAttribute", "icon-collapse", "checkChildrenForAttribute", "", 3, "margin-right", "full-icon", "hideIfTruncated", "hideOnTruncatedElement", "parentResizeElement", 4, "ngIf"], [1, "mrd-button-text-content", 3, "hideIfTruncated", "parentResizeElement", "hiddenChanged"], ["mrdButtonTextContent", ""], ["class", "mrd-button-text-content", 3, "hideIfTruncated", "parentResizeElement", "hiddenChanged", 4, "ngIf"], ["class", "mrd-button-icon-content", "displayState", "flex", "requiredHideAttribute", "icon-collapse", "checkChildrenForAttribute", "", 3, "margin-left", "full-icon", "hideIfTruncated", "hideOnTruncatedElement", "parentResizeElement", 4, "ngIf"], ["class", "mrd-button-progress-bar", 3, "value", "mode", "color", 4, "ngIf"], ["class", "mrd-button-progress-spinner", 3, "value", "mode", "color", 4, "ngIf"], ["definiertesIcon", ""], ["displayState", "flex", "requiredHideAttribute", "icon-collapse", "checkChildrenForAttribute", "", 1, "mrd-button-icon-content", 3, "hideIfTruncated", "hideOnTruncatedElement", "parentResizeElement"], [3, "svgs", "hostElement", "disabled", "hovered", "loading", "size", 4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "svgs", "hostElement", "disabled", "hovered", "loading", "size"], [3, "ngTemplateOutlet"], [1, "mrd-button-progress-bar", 3, "value", "mode", "color"], [1, "mrd-button-progress-spinner", 3, "value", "mode", "color"], [3, "icon", "outline", "full", "dashed", "direction", "size"]], template: function MrdSButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c2);
            i0.ɵɵelementStart(0, "button", 0, 1);
            i0.ɵɵelement(2, "div", 2);
            i0.ɵɵelementStart(3, "div", 3, 4);
            i0.ɵɵlistener("mouseenter", function MrdSButtonComponent_Template_div_mouseenter_3_listener() { return ctx.isTouchHovered = true; })("mouseleave", function MrdSButtonComponent_Template_div_mouseleave_3_listener() { ctx.isTouchHovered = false; return ctx.isTouchActive = false; })("mousedown", function MrdSButtonComponent_Template_div_mousedown_3_listener() { return ctx.isTouchActive = true; })("mouseup", function MrdSButtonComponent_Template_div_mouseup_3_listener() { return ctx.isTouchActive = false; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span", 5);
            i0.ɵɵtemplate(6, MrdSButtonComponent_span_6_Template, 2, 5, "span", 6);
            i0.ɵɵtemplate(7, MrdSButtonComponent_span_7_Template, 3, 9, "span", 7);
            i0.ɵɵelementStart(8, "span", 8, 9);
            i0.ɵɵlistener("hiddenChanged", function MrdSButtonComponent_Template_span_hiddenChanged_8_listener($event) { return ctx.buttonCollapsed($event); });
            i0.ɵɵprojection(10);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(11, MrdSButtonComponent_span_11_Template, 2, 3, "span", 10);
            i0.ɵɵtemplate(12, MrdSButtonComponent_span_12_Template, 3, 9, "span", 11);
            i0.ɵɵtemplate(13, MrdSButtonComponent_span_13_Template, 2, 5, "span", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(14, MrdSButtonComponent_mrd_progress_bar_14_Template, 1, 3, "mrd-progress-bar", 12);
            i0.ɵɵtemplate(15, MrdSButtonComponent_mrd_progress_spinner_15_Template, 1, 3, "mrd-progress-spinner", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(16, MrdSButtonComponent_ng_template_16_Template, 1, 6, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const _r4 = i0.ɵɵreference(9);
            i0.ɵɵstyleProp("--text-color", ctx.textColor)("--hover-text-color", ctx.hoverTextColor)("--disabled-text-color", ctx.disabledTextColor)("--active-text-color", ctx.activeTextColor)("--bg-color", ctx.bgColor)("--hover-bg-color", ctx.hoverBgColor)("--disabled-bg-color", ctx.disabledBgColor)("--active-bg-color", ctx.activeBgColor)("--border", ctx.border)("--hover-border", ctx.hoverBorder)("--disabled-border", ctx.disabledBorder)("--active-border", ctx.activeBorder)("--border-radius", ctx.borderRadius)("--min-height", ctx.minHeight)("--font-size", ctx.fontSize)("--font-family", ctx.fontFamily)("--font-weight", ctx.fontWeight)("--diameter", ctx.diameter)("--icon-size", ctx.iconSize)("--padding", ctx.padding)("--unselected-color", ctx.toggleUnselectedColor);
            i0.ɵɵclassProp("hovered", ctx.hovered)("touch-hovered", ctx.isTouchHovered)("touch-active", ctx.isTouchActive)("disabled", ctx.disabled)("mrd-icon-button", ctx.isIconButton);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(66, _c3, !ctx.collapse ? "fit-content" : "unset"))("mrdToolTip", ctx.tooltipText)("showOnTruncatedElement", ctx.tooltipIfTruncated ? _r4 : undefined)("showToolTip", ctx.showTooltip || ctx.tooltipIfCollapsed && ctx.isCollapsed);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(68, _c4, ctx.isCollapsed));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isSpecificButton && !ctx.iconStateMap);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (ctx.iconStateMap || ctx.iconDefinition) && !ctx.iconEnd);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("hideIfTruncated", ctx.collapse)("parentResizeElement", ctx.elementRef.nativeElement);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.isIconButton && !(ctx.buttonText == null ? null : ctx.buttonText.length));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (ctx.iconStateMap || ctx.iconDefinition) && ctx.iconEnd);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isSpecificButton && !ctx.iconStateMap);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isIconButton && (ctx.isLoading || (ctx.loading == null ? null : ctx.loading.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) === 0));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isIconButton && (ctx.isLoading || (ctx.loading == null ? null : ctx.loading.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) === 0));
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i2.ToolTipRendererDirective, i3.HideIfTruncatedDirective, i4.MrdProgressBarComponent, i5.MrdProgressSpinnerComponent, i6.MrdIconGroupComponent, i7.MrdIconComponent], styles: ["[_nghost-%COMP%]{position:relative;display:inline-flex;flex-direction:column;justify-content:center;align-items:center;max-width:100%}.active[_nghost-%COMP%]{z-index:10}.mrd-button-container[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:center;min-height:var(--min-height);height:inherit;max-width:100%;width:100%;padding:var(--padding);font-size:var(--font-size);font-family:var(--font-family);font-weight:var(--font-weight);letter-spacing:.1px;border-radius:var(--border-radius);color:var(--text-color)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;z-index:1;width:100%}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]   .mrd-button-icon-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]   .mrd-button-text-content[_ngcontent-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:20px}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]     mrd-icon{margin:0 2px}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]   .mrd-button-text-content[_ngcontent-%COMP%]{padding:0 16px}.mrd-button-container.disabled[_ngcontent-%COMP%]{color:var(--disabled-text-color);cursor:initial}.mrd-button-container.disabled[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{border:var(--disabled-border);background-color:var(--disabled-bg-color)}.mrd-button-container[_ngcontent-%COMP%]:hover:not(.disabled), .mrd-button-container.hovered[_ngcontent-%COMP%]:not(.disabled), .mrd-button-container.touch-hovered[_ngcontent-%COMP%]:not(.disabled){color:var(--hover-text-color)}.mrd-button-container[_ngcontent-%COMP%]:hover:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.hovered[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.touch-hovered[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]{border:var(--hover-border);background-color:var(--hover-bg-color)}.mrd-button-container[_ngcontent-%COMP%]:active:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.touch-active[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]{border:var(--active-border, var(--hover-border));background-color:var(--active-bg-color, var(--hover-bg-color))}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{position:absolute;inset:0;border:var(--border);border-radius:var(--border-radius);background-color:var(--bg-color)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-touch-area[_ngcontent-%COMP%]{position:absolute;inset:-8px}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]{min-width:var(--diameter)!important;height:var(--diameter)}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{min-height:unset;width:var(--diameter);height:var(--diameter)}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]     mrd-icon{margin:0!important;font-size:calc(var(--diameter) / 2)}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     mrd-icon{font-size:var(--diameter)}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]{padding:0 44px;transition:color .2s}.mrd-button-container.mrd-toggle-button.mrd-toggle-selected[_ngcontent-%COMP%]{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040;transform:scale(1.15);z-index:10}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040;z-index:5}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:hover{z-index:5}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{transition:background-color .2s}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:not(.mrd-toggle-selected)   .mrd-button-background[_ngcontent-%COMP%]{background-color:var(--unselected-color)}.mrd-button-container[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container[_ngcontent-%COMP%]     mrd-icon{font-size:1.5em;margin-right:4px;margin-top:2px;width:var(--icon-size);height:var(--icon-size);min-width:1em}.mrd-button-container[_ngcontent-%COMP%]     [mrd-icon][icon-end], .mrd-button-container[_ngcontent-%COMP%]     mrd-icon[icon-end]{margin-right:0;margin-left:4px}.mrd-button-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:10%;left:5px;right:5px;height:10%;min-height:10%}.mrd-button-progress-spinner[_ngcontent-%COMP%]{position:absolute;top:3px;left:3px;width:calc(100% - 6px)!important;height:calc(100% - 6px)!important}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdSButtonComponent, [{
        type: Component,
        args: [{ selector: 'mrd-s-button', host: {
                    '[style.min-width]': '!collapse ? "fit-content" : "unset"',
                    '[style.margin]': 'toggle ? "0 -16px" : "unset"',
                    '[style.transition]': 'toggle ? "transform 0.2s" : "unset"',
                    // Die Klasse active setzt updateStyle(), weil eine Toggle-Gruppe toggleSelected erst nach dem Check der Eltern setzt
                    '(mouseenter)': 'onMouseEnter()',
                    '(mouseleave)': 'onMouseLeave()'
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- Der eigentlich HTML-Button -->\n<button class=\"mrd-button-container\"\n  #buttonContainer\n  [style.--text-color]=\"textColor\"\n  [style.--hover-text-color]=\"hoverTextColor\"\n  [style.--disabled-text-color]=\"disabledTextColor\"\n  [style.--active-text-color]=\"activeTextColor\"\n  [style.--bg-color]=\"bgColor\"\n  [style.--hover-bg-color]=\"hoverBgColor\"\n  [style.--disabled-bg-color]=\"disabledBgColor\"\n  [style.--active-bg-color]=\"activeBgColor\"\n  [style.--border]=\"border\"\n  [style.--hover-border]=\"hoverBorder\"\n  [style.--disabled-border]=\"disabledBorder\"\n  [style.--active-border]=\"activeBorder\"\n\n  [style.--border-radius]=\"borderRadius\"\n  [style.--min-height]=\"minHeight\"\n  [style.--font-size]=\"fontSize\"\n  [style.--font-family]=\"fontFamily\"\n  [style.--font-weight]=\"fontWeight\"\n  [style.--diameter]=\"diameter\"\n  [style.--icon-size]=\"iconSize\"\n  [style.--padding]=\"padding\"\n  [style.--unselected-color]=\"toggleUnselectedColor\"\n\n  [ngStyle]=\"{'min-width': !collapse ? 'fit-content' : 'unset'}\"\n  [class.hovered]=\"hovered\"\n  [class.touch-hovered]=\"isTouchHovered\"\n  [class.touch-active]=\"isTouchActive\"\n  [class.disabled]=\"disabled\"\n  [class.mrd-icon-button]=\"isIconButton\"\n  [mrdToolTip]=\"tooltipText\" [showOnTruncatedElement]=\"tooltipIfTruncated ? mrdButtonTextContent : undefined\" [showToolTip]=\"showTooltip || (tooltipIfCollapsed && isCollapsed)\">\n  <div class=\"mrd-button-background\"></div>\n  <div class=\"mrd-button-touch-area\" #buttonTouchArea\n    (mouseenter)=\"isTouchHovered = true\"\n    (mouseleave)=\"isTouchHovered = false; isTouchActive = false\"\n    (mousedown)=\"isTouchActive = true\"\n    (mouseup)=\"isTouchActive = false\"></div>\n  <!-- Der Content des Buttons -->\n  <span class=\"mrd-button-content\" [ngClass]=\"{'isCollapsed': isCollapsed}\">\n    <!-- Linker Icon-Container -->\n    <span class=\"mrd-button-icon-content\" *ngIf=\"!isSpecificButton && !iconStateMap\"\n          [class.full-icon]=\"isFullIcon\" \n          [hideIfTruncated]=\"collapse\" \n          displayState=\"flex\" \n          requiredHideAttribute=\"icon-collapse\"\n          checkChildrenForAttribute \n          [hideOnTruncatedElement]=\"mrdButtonTextContent\" \n          [parentResizeElement]=\"this.elementRef.nativeElement\">\n      <ng-content select=\"mrd-icon:not([icon-end]), [mrd-icon]:not([icon-end])\"></ng-content>\n    </span>\n\n    <span class=\"mrd-button-icon-content\" *ngIf=\"(iconStateMap || iconDefinition) && !iconEnd\"\n          [style.margin-right]=\"!isIconButton ? '6px' : '0px'\"\n          [class.full-icon]=\"isFullIcon\" \n          [hideIfTruncated]=\"collapse\" \n          displayState=\"flex\" \n          requiredHideAttribute=\"icon-collapse\"\n          checkChildrenForAttribute \n          [hideOnTruncatedElement]=\"mrdButtonTextContent\" \n          [parentResizeElement]=\"this.elementRef.nativeElement\">\n        <mrd-icon-group *ngIf=\"iconStateMap\" [svgs]=\"iconStateMap\" [hostElement]=\"buttonContainer\" [disabled]=\"disabled\" [hovered]=\"hovered\" [loading]=\"isLoading\" [size]=\"iconSizeNumber\"></mrd-icon-group>\n        <ng-container *ngIf=\"!iconStateMap && iconDefinition\" [ngTemplateOutlet]=\"definiertesIcon\"></ng-container>\n    </span>\n    \n    <!-- Der Text des Buttons -->\n    <span class=\"mrd-button-text-content\" \n          (hiddenChanged)=\"buttonCollapsed($event)\" \n          [hideIfTruncated]=\"collapse\" \n          #mrdButtonTextContent \n          [parentResizeElement]=\"this.elementRef.nativeElement\">\n      <ng-content select=\":not([mrd-icon]):not(mrd-icon)\"></ng-content>\n    </span>\n    <span class=\"mrd-button-text-content\" *ngIf=\"!isIconButton && !buttonText?.length\"\n      (hiddenChanged)=\"buttonCollapsed($event)\" \n      [hideIfTruncated]=\"collapse\" \n      [parentResizeElement]=\"this.elementRef.nativeElement\">\n        {{defaultButtonText}}\n      </span>\n\n    <span class=\"mrd-button-icon-content\" *ngIf=\"(iconStateMap || iconDefinition) && iconEnd\"\n          [style.margin-left]=\"!isIconButton ? '6px' : '0px'\"\n          [class.full-icon]=\"isFullIcon\" \n          [hideIfTruncated]=\"collapse\" \n          displayState=\"flex\" \n          requiredHideAttribute=\"icon-collapse\"\n          checkChildrenForAttribute \n          [hideOnTruncatedElement]=\"mrdButtonTextContent\" \n          [parentResizeElement]=\"this.elementRef.nativeElement\">\n        <mrd-icon-group *ngIf=\"iconStateMap\" [svgs]=\"iconStateMap\" [hostElement]=\"buttonContainer\" [disabled]=\"disabled\" [hovered]=\"hovered\" [loading]=\"isLoading\" [size]=\"iconSizeNumber\"></mrd-icon-group>\n        <ng-container *ngIf=\"!iconStateMap && iconDefinition\" [ngTemplateOutlet]=\"definiertesIcon\"></ng-container>\n    </span>\n\n\n   \n    <!-- Rechter Icon-Container -->\n    <span class=\"mrd-button-icon-content\" *ngIf=\"!isSpecificButton && !iconStateMap\" \n          [class.full-icon]=\"isFullIcon\" \n          [hideIfTruncated]=\"collapse\" \n          displayState=\"flex\" \n          requiredHideAttribute=\"icon-collapse\"\n          checkChildrenForAttribute \n          [hideOnTruncatedElement]=\"mrdButtonTextContent\" \n          [parentResizeElement]=\"this.elementRef.nativeElement\">\n      <ng-content select=\"mrd-icon[icon-end], [mrd-icon][icon-end]\"></ng-content>\n    </span>\n  </span>\n\n  <!-- Die Progress-Bar eines Buttons (nicht f\u00FCr Icon-, Fab- und Mini-Fab-Buttons) -->\n  <mrd-progress-bar class=\"mrd-button-progress-bar\"\n    *ngIf=\"!isIconButton && (isLoading || loading?.value || loadingProgress?.value || loadingProgress?.value === 0)\"\n    [value]=\"loadingProgress?.value\" [mode]=\"loadingProgress ? 'determinate' : 'indeterminate'\" [color]=\"progressColor\"></mrd-progress-bar>\n  <!-- Der Progress-Spinner eines Buttons (nur f\u00FCr Icon-, Fab- und Mini-Fab-Buttons) -->\n  <mrd-progress-spinner class=\"mrd-button-progress-spinner\"\n    *ngIf=\"isIconButton && (isLoading || loading?.value || loadingProgress?.value || loadingProgress?.value === 0)\"\n    [value]=\"loadingProgress?.value\" [mode]=\"loadingProgress ? 'determinate' : 'indeterminate'\" [color]=\"progressColor\"></mrd-progress-spinner>\n</button>\n\n<ng-template #definiertesIcon>\n  <mrd-icon [icon]=\"iconDefinition.symbol\"\n    [outline]=\"iconDefinition.outer === 'outline'\"\n    [full]=\"iconDefinition.outer === 'full'\"\n    [dashed]=\"iconDefinition.outer === 'dashed'\"\n    [direction]=\"iconDefinition.direction\"\n    [size]=\"iconSizeNumber\"></mrd-icon>\n</ng-template>\n", styles: [":host{position:relative;display:inline-flex;flex-direction:column;justify-content:center;align-items:center;max-width:100%}:host.active{z-index:10}.mrd-button-container{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:center;min-height:var(--min-height);height:inherit;max-width:100%;width:100%;padding:var(--padding);font-size:var(--font-size);font-family:var(--font-family);font-weight:var(--font-weight);letter-spacing:.1px;border-radius:var(--border-radius);color:var(--text-color)}.mrd-button-container .mrd-button-content{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;z-index:1;width:100%}.mrd-button-container .mrd-button-content .mrd-button-icon-content{display:flex;flex-direction:row;align-items:center;justify-content:center}.mrd-button-container .mrd-button-content .mrd-button-text-content{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:20px}.mrd-button-container .mrd-button-content.isCollapsed ::ng-deep [mrd-icon],.mrd-button-container .mrd-button-content.isCollapsed ::ng-deep mrd-icon{margin:0 2px}.mrd-button-container .mrd-button-content.isCollapsed .mrd-button-text-content{padding:0 16px}.mrd-button-container.disabled{color:var(--disabled-text-color);cursor:initial}.mrd-button-container.disabled .mrd-button-background{border:var(--disabled-border);background-color:var(--disabled-bg-color)}.mrd-button-container:hover:not(.disabled),.mrd-button-container.hovered:not(.disabled),.mrd-button-container.touch-hovered:not(.disabled){color:var(--hover-text-color)}.mrd-button-container:hover:not(.disabled) .mrd-button-background,.mrd-button-container.hovered:not(.disabled) .mrd-button-background,.mrd-button-container.touch-hovered:not(.disabled) .mrd-button-background{border:var(--hover-border);background-color:var(--hover-bg-color)}.mrd-button-container:active:not(.disabled) .mrd-button-background,.mrd-button-container.touch-active:not(.disabled) .mrd-button-background{border:var(--active-border, var(--hover-border));background-color:var(--active-bg-color, var(--hover-bg-color))}.mrd-button-container .mrd-button-background{position:absolute;inset:0;border:var(--border);border-radius:var(--border-radius);background-color:var(--bg-color)}.mrd-button-container .mrd-button-touch-area{position:absolute;inset:-8px}.mrd-button-container.mrd-icon-button{min-width:var(--diameter)!important;height:var(--diameter)}.mrd-button-container.mrd-icon-button .mrd-button-background{min-height:unset;width:var(--diameter);height:var(--diameter)}.mrd-button-container.mrd-icon-button ::ng-deep [mrd-icon],.mrd-button-container.mrd-icon-button ::ng-deep mrd-icon{margin:0!important;font-size:calc(var(--diameter) / 2)}.mrd-button-container.mrd-icon-button .mrd-button-icon-content.full-icon ::ng-deep [mrd-icon],.mrd-button-container.mrd-icon-button .mrd-button-icon-content.full-icon ::ng-deep mrd-icon{font-size:var(--diameter)}.mrd-button-container.mrd-toggle-button{padding:0 44px;transition:color .2s}.mrd-button-container.mrd-toggle-button.mrd-toggle-selected{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040;transform:scale(1.15);z-index:10}.mrd-button-container.mrd-toggle-button:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040;z-index:5}.mrd-button-container.mrd-toggle-button:hover{z-index:5}.mrd-button-container.mrd-toggle-button .mrd-button-background{transition:background-color .2s}.mrd-button-container.mrd-toggle-button:not(.mrd-toggle-selected) .mrd-button-background{background-color:var(--unselected-color)}.mrd-button-container ::ng-deep [mrd-icon],.mrd-button-container ::ng-deep mrd-icon{font-size:1.5em;margin-right:4px;margin-top:2px;width:var(--icon-size);height:var(--icon-size);min-width:1em}.mrd-button-container ::ng-deep [mrd-icon][icon-end],.mrd-button-container ::ng-deep mrd-icon[icon-end]{margin-right:0;margin-left:4px}.mrd-button-progress-bar{position:absolute;bottom:10%;left:5px;right:5px;height:10%;min-height:10%}.mrd-button-progress-spinner{position:absolute;top:3px;left:3px;width:calc(100% - 6px)!important;height:calc(100% - 6px)!important}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i0.ElementRef }]; }, { mrdButtonTextContent: [{
            type: ViewChild,
            args: ['mrdButtonTextContent', { static: true }]
        }], buttonTouchArea: [{
            type: ViewChild,
            args: ['buttonTouchArea', { static: true }]
        }], theme: [{
            type: Input
        }], editButton: [{
            type: Input,
            args: [{ alias: 'edit-button', transform: booleanAttribute }]
        }], saveButton: [{
            type: Input,
            args: [{ alias: 'save-button', transform: booleanAttribute }]
        }], cancelButton: [{
            type: Input,
            args: [{ alias: 'cancel-button', transform: booleanAttribute }]
        }], closeIconButton: [{
            type: Input,
            args: [{ alias: 'close-icon-button', transform: booleanAttribute }]
        }], deleteButton: [{
            type: Input,
            args: [{ alias: 'delete-button', transform: booleanAttribute }]
        }], addButton: [{
            type: Input,
            args: [{ alias: 'add-button', transform: booleanAttribute }]
        }], toggle: [{
            type: Input,
            args: [{ alias: 'toggle-button', transform: booleanAttribute }]
        }], toggleSelected: [{
            type: Input,
            args: [{ alias: 'selected', transform: booleanAttribute }]
        }], disabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], hovered: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], loading: [{
            type: Input
        }], isLoading: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], loadingProgress: [{
            type: Input
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
        }], size: [{
            type: Input
        }], value: [{
            type: Input
        }], iconStateMap: [{
            type: Input
        }], iconEnd: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXMtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvcy1tb2R1bGVzL21yZC1zLWJ1dHRvbi9jb21wb25lbnRzL21yZC1zLWJ1dHRvbi9tcmQtcy1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9zLW1vZHVsZXMvbXJkLXMtYnV0dG9uL2NvbXBvbmVudHMvbXJkLXMtYnV0dG9uL21yZC1zLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdELGtCQUFrQixFQUF5QyxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNsTCxPQUFPLEVBQUUsc0JBQXNCLEVBQW1CLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6RSxPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsS0FBSyxFQUFxQixTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEssT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ25FLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7SUNxQzVCLGdDQU80RDtJQUMxRCxxQkFBdUY7SUFDekYsaUJBQU87Ozs7SUFSRCw4Q0FBOEI7SUFDOUIsaURBQTRCLCtCQUFBLHdEQUFBOzs7SUFrQjlCLHFDQUFvTTs7OztJQUEvSiwyQ0FBcUIsb0JBQUEsOEJBQUEsNEJBQUEsOEJBQUEsZ0NBQUE7OztJQUMxRCw0QkFBMEc7Ozs7SUFBcEQsdUNBQW9DOzs7SUFWOUYsZ0NBUTREO0lBQ3hELGtHQUFvTTtJQUNwTSw4RkFBMEc7SUFDOUcsaUJBQU87Ozs7SUFWRCxvRUFBb0Q7SUFDcEQsOENBQThCO0lB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WUFFVSxZQUFZO2tCQUEzQixLQUFLO1lBRXVDLE9BQU87a0JBQW5ELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNcmREZWZpbmVkQnV0dG9uLCBNcmRTQnV0dG9uLCBNcmRTQnV0dG9uU2l6ZSwgTXJkU0J1dHRvblNpemVUeXBlLCBNcmRTQnV0dG9uU3RhdGVDb2xvciwgTXJkU0J1dHRvblRoZW1lLCBNcmRTQnV0dG9uVHlwZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL21vZGVsL2NvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IEJhc2VQdXNoU3RyYXRlZ3lPYmplY3QsIE9ic2VydmFibGVWYWx1ZSwgVXRpbCB9IGZyb20gJ21yZC1jb3JlJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgVmlld0NoaWxkLCBib29sZWFuQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1yZENvbmZpZ01vZGVsIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vbW9kZWwvY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgQ29uZmlnVXRpbCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29uZmlnLnV0aWwnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQgeyBTdmdTdGF0ZU1hcCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL21yZC1pY29uLWdyb3VwL21yZC1pY29uLWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1yZEljb25EZWZpbml0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3NlcnZpY2UvbXJkLWljb24tc3ltYm9sLXJlZ2lzdHJ5LnNlcnZpY2UnO1xyXG5cclxuLyoqXHJcbiAqIERpZXNlcyBLb21wb25lbnRlIHN0ZWxsdCBkZW4gTXJkLUJ1dHRvbiB6dXIgVmVyZsO8Z3VuZy5cclxuICpcclxuICogRGVyIEJ1dHRvbiBrYW5uIG1pdHRlbHMgZGVyIGVudHNwcmVjaGVuZGVuIEF0dHJpYnV0ZSBpbiBmb2xnZW5kZW4gU3RpbGVuIGRhcmdlc3RlbGx0IHdlcmRlbjpcclxuICogLSBTdGFuZGFyZC1CdXR0b24gKGRlZmF1bHQpXHJcbiAqIC0gSWNvbi1CdXR0b24gKEF0dHJpYnV0bmFtZTogaWNvbi1idXR0b24pXHJcbiAqIC0gUmFpc2VkLUJ1dHRvbiAoQXR0cmlidXRuYW1lOiByYWlzZWQtYnV0dG9uKVxyXG4gKiAtIE91dGxpbmUtQnV0dG9uIChBdHRyaWJ1dG5hbWU6IG91dGxpbmUtYnV0dG9uKVxyXG4gKiAtIEZsYXQtQnV0dG9uIChBdHRyaWJ1dG5hbWU6IGZsYXQtYnV0dG9uKVxyXG4gKiAtIEZhYi1CdXR0b24gKEF0dHJpYnV0bmFtZTogZmFiLWJ1dHRvbilcclxuICogLSBNaW5pRmFiLUJ1dHRvbiAoQXR0cmlidXRuYW1lOiBtaW5pRmFiLWJ1dHRvbilcclxuICpcclxuICogV2VpdGVyaGluIGvDtm5uZW4gZGllIHN0YW5kYXJkIFRoZW1lcyAocHJpbWFyeSwgYWNjZW50LCB3YXJuKSBmw7xyIGRpZSBIaW50ZXJncnVuZC0gYnp3LiBUZXh0ZmFyYmUgZmVzdGdlbGVndCB3ZXJkZW4gKGplIG5hY2ggU3R5bGUpLlxyXG4gKlxyXG4gKiBGw7xyIHdlaXRlcmUgQW5wYXNzdW5nZW4gc2llaGUgZGllIEluZm9ybWF0aW9uZW4gZGVyIGVpbnplbG5lbiBBdHRyaWJ1dGUgb2RlciBkaWUgRG9rdW1lbnRhdGlvbi5cclxuICpcclxuICogQGNsYXNzIE1yZFNCdXR0b25Db21wb25lbnRcclxuICogQGV4dGVuZHMge0Jhc2VQdXNoU3RyYXRlZ3lPYmplY3R9XHJcbiAqIEBpbXBsZW1lbnRzIHtBZnRlclZpZXdJbml0fVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtcmQtcy1idXR0b24nLFxyXG4gIGhvc3Q6IHtcclxuICAgJ1tzdHlsZS5taW4td2lkdGhdJzogJyFjb2xsYXBzZSA/IFwiZml0LWNvbnRlbnRcIiA6IFwidW5zZXRcIicsXHJcbiAgICdbc3R5bGUubWFyZ2luXSc6ICd0b2dnbGUgPyBcIjAgLTE2cHhcIiA6IFwidW5zZXRcIicsXHJcbiAgICdbc3R5bGUudHJhbnNpdGlvbl0nOiAndG9nZ2xlID8gXCJ0cmFuc2Zvcm0gMC4yc1wiIDogXCJ1bnNldFwiJyxcclxuICAgLy8gRGllIEtsYXNzZSBhY3RpdmUgc2V0enQgdXBkYXRlU3R5bGUoKSwgd2VpbCBlaW5lIFRvZ2dsZS1HcnVwcGUgdG9nZ2xlU2VsZWN0ZWQgZXJzdCBuYWNoIGRlbSBDaGVjayBkZXIgRWx0ZXJuIHNldHp0XHJcbiAgICcobW91c2VlbnRlciknOiAnb25Nb3VzZUVudGVyKCknLFxyXG4gICAnKG1vdXNlbGVhdmUpJzogJ29uTW91c2VMZWF2ZSgpJ1xyXG4gIH0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1zLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLXMtYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZFNCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVmZXJlbnogYXVmIGRhcyBUZXh0LUVsZW1lbnQgZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RWxlbWVudFJlZjxIVE1MRWxlbWVudD59XHJcbiAgICogQG1lbWJlcm9mIE1yZFNCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBAVmlld0NoaWxkKCdtcmRCdXR0b25UZXh0Q29udGVudCcsIHtzdGF0aWM6IHRydWV9KSBtcmRCdXR0b25UZXh0Q29udGVudD86IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAvKipcclxuICAgKiBSZWZlcmVueiBhdWYgZGFzIFRvdWNoLUFyZWEtRWxlbWVudCBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50UmVmPEhUTUxFbGVtZW50Pn1cclxuICAgKiBAbWVtYmVyb2YgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBWaWV3Q2hpbGQoJ2J1dHRvblRvdWNoQXJlYScsIHtzdGF0aWM6IHRydWV9KSBidXR0b25Ub3VjaEFyZWE/OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgd2VsY2hlcyBUaGVtZSBkZXIgQnV0dG9uIGhhdC5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRTQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIHRoZW1lPzogTXJkU0J1dHRvblR5cGU7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZWluIEVkaXQtQnV0dG9uIGlzdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRTQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ2VkaXQtYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGVkaXRCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe2FsaWFzOiAnc2F2ZS1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2F2ZUJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdjYW5jZWwtYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGNhbmNlbEJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdjbG9zZS1pY29uLWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBjbG9zZUljb25CdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe2FsaWFzOiAnZGVsZXRlLWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBkZWxldGVCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe2FsaWFzOiAnYWRkLWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBhZGRCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBlaW4gVG9nZ2xlLUJ1dHRvbiBpc3QuXHJcbiAgICogXHJcbiAgICogVG9nZ2xlLUJ1dHRvbnMgc29sbHRlbiBpbW1lciBpbm5lcmhhbGIgZWluZXIgVG9nZ2xlLUJ1dHRvbi1Hcm91cCB2ZXJ3ZW5kZXQgd2VyZGVuLlxyXG4gICAqIFN0YW5kYXJkbcOkw59pZyBoYWJlbiBzaWUgZWluZW4gd2Vpw59lbiBIaW50ZXJncnVuZCB1bmQgZGllIFRleHRmYXJiZSBpc3Qgc2Nod2FyeiwgYXXDn2VyZGVtIGJlc2l0emVuIHNpZSBpbSBzZWxla3RpZXJ0ZW4gWnVzdGFuZCBlaW5lbiBTY2hhdHRlbi5cclxuICAgKiBcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICd0b2dnbGUtYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgdG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24sIGFscyBUb2dnbGUtQnV0dG9uLCBzZWxla3RpZXJ0IGlzdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRTQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ3NlbGVjdGVkJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgdG9nZ2xlU2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBkZWFrdGl2aWVydCBpc3QuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZGVha3RpdmllcnQgaXN0LlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZFNCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBob3ZlcmVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVpbmUgT2JzZXJ2YWJsZVZhbHVlLCBkaWUgw7xiZXJnZWJlbiB3ZXJkZW4ga2FubiwgdW0genUgYmVzdGltbWVuLFxyXG4gICAqIG9iIGRlciBCdXR0b24gZWluZW4gTGFkZWJhbGtlbi9MYWRlc3Bpbm5lciBhbnplaWdlbiBzb2xsLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZFNCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbG9hZGluZz86IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPjtcclxuXHJcbiAgLyoqXHJcbiAgICogRWluIGJvb2xlYW4sIGRlciBiZXN0aW1tdCwgb2IgZGVyIEJ1dHRvbiBlaW5lbiBMYWRlYmFsa2VuL0xhZGVzcGlubmVyIGFuemVpZ2VuIHNvbGwuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBFaW5lIE9ic2VydmFibGVWYWx1ZSwgZGllIMO8YmVyZ2ViZW4gd2VyZGVuIGthbm4sIHVtIGRlbiBGb3J0c2Nocml0dCBkZXMgTGFkZWJhbGtlbnMvTGFkZXNwaW5uZXJzIHp1IGJlc3RpbW1lbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtPYnNlcnZhYmxlVmFsdWU8bnVtYmVyPn1cclxuICAgKiBAbWVtYmVyb2YgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBsb2FkaW5nUHJvZ3Jlc3M/OiBPYnNlcnZhYmxlVmFsdWU8bnVtYmVyPjtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbi1UZXh0IHZlcnNjaHdpbmRldCwgd2VubiBlciB6dSBsYW5nIGlzdCB1bmQgYXVzZ2VwdW5rdGV0IHdlcmRlbiB3w7xyZGUuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIC8qQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSovIHB1YmxpYyBjb2xsYXBzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG4gIHByaXZhdGUgX2NvbGxhcHNlVG86IE1yZFNCdXR0b25TaXplVHlwZSA9IE1yZFNCdXR0b25TaXplVHlwZS5JQ09OO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGVpbmVuIFRvb2x0aXAgYW56ZWlnZW4gc29sbC5cclxuICAgKlxyXG4gICAqIERlciBUb29sdGlwLVRleHQgd2lyZCBzdGFuZGFyZG3DpMOfaWcgYXVzIGRlbSBJbmhhbHQgZGVzIEJ1dHRvbnMgb2huZSBkdXJjaCBbbXJkLWljb25dIGdla2VubnplaWNobmV0ZSBJY29ucyBnZW5lcmllcnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICd0b29sdGlwJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNob3dUb29sdGlwOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlciBUZXh0IGRlcyBUb29sdGlwcy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIE1yZFNCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgdG9vbHRpcFRleHQ/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBUb29sdGlwIG51ciBhbmdlemVpZ3Qgd2VyZGVuIHNvbGwsIHdlbm4gZGVyIEJ1dHRvbi1UZXh0IGF1c2dlcHVua3RldCB3aXJkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZFNCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgdG9vbHRpcElmVHJ1bmNhdGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnNob3dUb29sdGlwID0gdmFsdWUgfHwgdGhpcy5zaG93VG9vbHRpcDtcclxuICAgIHRoaXMuX3Rvb2x0aXBJZlRydW5jYXRlZCA9IHZhbHVlO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IHRvb2x0aXBJZlRydW5jYXRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl90b29sdGlwSWZUcnVuY2F0ZWQ7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3Rvb2x0aXBJZlRydW5jYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgVG9vbHRpcCBudXIgYW5nZXplaWd0IHdlcmRlbiBzb2xsLCB3ZW5uIGRlciBCdXR0b24gY29sbGFiaWVydCBpc3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHRvb2x0aXBJZkNvbGxhcHNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBJY29uIGRlcyBCdXR0b25zIGRpZSB2b2xsZSBHcsO2w59lIGRlcyBCdXR0b25zIGVpbm5laG1lbiBzb2xsLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZFNCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgc2l6ZTogTXJkU0J1dHRvblNpemVUeXBlID0gTXJkU0J1dHRvblNpemVUeXBlLkJJRztcclxuXHJcbiAgLyoqXHJcbiAgICogRGVyIFdlcnQgZGVzIEJ1dHRvbnMgYWxzIFRvZ2dsZS1CdXR0b24uXHJcbiAgICogXHJcbiAgICogQHR5cGUge2FueX1cclxuICAgKiBAbWVtYmVyb2YgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZT86IGFueTtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIGljb25TdGF0ZU1hcDogU3ZnU3RhdGVNYXB8dW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBpY29uRW5kOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIERpZSBLb25maWd1cmF0aW9uIGRlcyBNcmQtQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHR5cGUge01yZENvbmZpZ01vZGVsfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRTQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfY29uZmlnOiBNcmRDb25maWdNb2RlbCA9IENvbmZpZ1V0aWwuZ2V0Q29uZmlnKCk7XHJcblxyXG4gIHByaXZhdGUgbW91c2VFbnRlckxpc3RlbmVyPzogKCkgPT4gdm9pZDtcclxuICBwcml2YXRlIG1vdXNlTGVhdmVMaXN0ZW5lcj86ICgpID0+IHZvaWQ7XHJcblxyXG4gIHByaXZhdGUgdW5jb2xsYXBzZWRBcHBlYXJhbmNlPzogTXJkU0J1dHRvblNpemVUeXBlO1xyXG5cclxuICBwcml2YXRlIGJ1dHRvbkNvbmZpZz86IE1yZFNCdXR0b247XHJcbiAgcHJpdmF0ZSB0aGVtZUNvbmZpZz86IE1yZFNCdXR0b25UaGVtZTtcclxuICBwcml2YXRlIHNpemVDb25maWc/OiBNcmRTQnV0dG9uU2l6ZTtcclxuICBcclxuICBwdWJsaWMgdGV4dENvbG9yPzogc3RyaW5nO1xyXG4gIHB1YmxpYyBob3ZlclRleHRDb2xvcj86IHN0cmluZztcclxuICBwdWJsaWMgZGlzYWJsZWRUZXh0Q29sb3I/OiBzdHJpbmc7XHJcbiAgcHVibGljIGFjdGl2ZVRleHRDb2xvcj86IHN0cmluZztcclxuICBwdWJsaWMgYmdDb2xvcj86IHN0cmluZztcclxuICBwdWJsaWMgaG92ZXJCZ0NvbG9yPzogc3RyaW5nO1xyXG4gIHB1YmxpYyBkaXNhYmxlZEJnQ29sb3I/OiBzdHJpbmc7XHJcbiAgcHVibGljIGFjdGl2ZUJnQ29sb3I/OiBzdHJpbmc7XHJcbiAgcHVibGljIGJvcmRlcj86IHN0cmluZztcclxuICBwdWJsaWMgaG92ZXJCb3JkZXI/OiBzdHJpbmc7XHJcbiAgcHVibGljIGRpc2FibGVkQm9yZGVyPzogc3RyaW5nO1xyXG4gIHB1YmxpYyBhY3RpdmVCb3JkZXI/OiBzdHJpbmc7XHJcbiAgcHVibGljIHByb2dyZXNzQ29sb3I/OiBzdHJpbmc7XHJcbiAgcHVibGljIGhvdmVyUHJvZ3Jlc3NDb2xvcj86IHN0cmluZztcclxuICBwdWJsaWMgZGlzYWJsZWRQcm9ncmVzc0NvbG9yPzogc3RyaW5nO1xyXG4gIHB1YmxpYyBhY3RpdmVQcm9ncmVzc0NvbG9yPzogc3RyaW5nO1xyXG4gIHB1YmxpYyB0b2dnbGVVbnNlbGVjdGVkQ29sb3I/OiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBib3JkZXJSYWRpdXM/OiBzdHJpbmc7XHJcbiAgcHVibGljIG1pbkhlaWdodD86IHN0cmluZztcclxuICBwdWJsaWMgZm9udFNpemU/OiBzdHJpbmc7XHJcbiAgcHVibGljIGZvbnRGYW1pbHk/OiBzdHJpbmc7XHJcbiAgcHVibGljIGZvbnRXZWlnaHQ/OiBzdHJpbmc7XHJcbiAgcHVibGljIGRpYW1ldGVyPzogc3RyaW5nO1xyXG4gIHB1YmxpYyBpY29uU2l6ZT86IHN0cmluZztcclxuICBwdWJsaWMgaWNvblNpemVOdW1iZXI/OiBudW1iZXI7XHJcbiAgcHVibGljIHRleHRJY29uR2FwPzogc3RyaW5nO1xyXG4gIHB1YmxpYyBwYWRkaW5nPzogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgaXNJY29uQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGlzRnVsbEljb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgaXNDb2xsYXBzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgaXNIb3ZlcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGlzU3BlY2lmaWNCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgaXNUb3VjaEhvdmVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgaXNUb3VjaEFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgYnV0dG9uVGV4dDogc3RyaW5nID0gJyc7XHJcblxyXG4gIC8qKiBJY29uIGVpbmVzIHZvcmRlZmluaWVydGVuIEJ1dHRvbnMgcGVyIG1yZC1pY29uIChGYXJiZSBmb2xndCBkZW0gVGV4dCk7IG51ciBvaG5lIGljb25TdGF0ZU1hcCAqL1xyXG4gIHB1YmxpYyBpY29uRGVmaW5pdGlvbj86IE1yZEljb25EZWZpbml0aW9uO1xyXG4gIHB1YmxpYyBkZWZhdWx0QnV0dG9uVGV4dDogc3RyaW5nID0gJyc7XHJcblxyXG4gIC8vIHB1YmxpYyBpY29uU3RhdGVNYXA/OiBTdmdTdGF0ZU1hcDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD5cclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICBjb25zdCBob3N0OiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgLy8gQXVzc2VyaGFsYiBkZXIgWm9uZSwgd2VpbCBkaWUgTGlzdGVuZXIgc2VsYnN0IGtlaW5lIENoYW5nZSBEZXRlY3Rpb24gYnJhdWNoZW47IEFuZ3VsYXJzIChjbGljaykgYW0gSG9zdCBsYWV1ZnQgd2VpdGVyIGluIGRlciBab25lXHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGhvc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmtsaWNrUHJ1ZWZlbiwge2NhcHR1cmU6IHRydWV9KTtcclxuICAgICAgaG9zdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMua2xpY2tBYnNjaGlybWVuKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMubG9hZGluZykpIHtcclxuICAgICAgdGhpcy5tYXJrRm9yQ2hlY2tJZih0aGlzLmxvYWRpbmchLmNoYW5nZWQpXHJcbiAgICB9XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5sb2FkaW5nUHJvZ3Jlc3MpKSB7XHJcbiAgICAgIHRoaXMubWFya0ZvckNoZWNrSWYodGhpcy5sb2FkaW5nUHJvZ3Jlc3MhLmNoYW5nZWQpXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51cGRhdGVTdHlsZSgpO1xyXG5cclxuICAgIHRoaXMuaXNIb3ZlcmVkID0gdGhpcy5ob3ZlcmVkO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMua2xpY2tQcnVlZmVuLCB7Y2FwdHVyZTogdHJ1ZX0pO1xyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmtsaWNrQWJzY2hpcm1lbik7XHJcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVN0eWxlKCk6IHZvaWQge1xyXG4gICAgbGV0IHNwZWNpZmljQnV0dG9uQ29uZmlnOiBNcmREZWZpbmVkQnV0dG9ufHVuZGVmaW5lZDtcclxuICAgIGlmICh0aGlzLmVkaXRCdXR0b24pIHtcclxuICAgICAgdGhpcy5pc1NwZWNpZmljQnV0dG9uID0gdHJ1ZTtcclxuICAgICAgc3BlY2lmaWNCdXR0b25Db25maWcgPSB0aGlzLl9jb25maWcuc0J1dHRvbj8uZGVmaW5lZEJ1dHRvbnM/LmJlYXJiZWl0ZW47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zYXZlQnV0dG9uKSB7XHJcbiAgICAgIHRoaXMuaXNTcGVjaWZpY0J1dHRvbiA9IHRydWU7XHJcbiAgICAgIHNwZWNpZmljQnV0dG9uQ29uZmlnID0gdGhpcy5fY29uZmlnLnNCdXR0b24/LmRlZmluZWRCdXR0b25zPy5zcGVpY2hlcm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jYW5jZWxCdXR0b24pIHtcclxuICAgICAgdGhpcy5pc1NwZWNpZmljQnV0dG9uID0gdHJ1ZTtcclxuICAgICAgc3BlY2lmaWNCdXR0b25Db25maWcgPSB0aGlzLl9jb25maWcuc0J1dHRvbj8uZGVmaW5lZEJ1dHRvbnM/LmFiYnJlY2hlbjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNsb3NlSWNvbkJ1dHRvbikge1xyXG4gICAgICB0aGlzLmlzU3BlY2lmaWNCdXR0b24gPSB0cnVlO1xyXG4gICAgICBzcGVjaWZpY0J1dHRvbkNvbmZpZyA9IHRoaXMuX2NvbmZpZy5zQnV0dG9uPy5kZWZpbmVkQnV0dG9ucz8uc2NobGllc3Nlbkljb247XHJcbiAgICAgIHRoaXMuc2l6ZSA9IE1yZFNCdXR0b25TaXplVHlwZS5GVUxMX0lDT047XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kZWxldGVCdXR0b24pIHtcclxuICAgICAgdGhpcy5pc1NwZWNpZmljQnV0dG9uID0gdHJ1ZTtcclxuICAgICAgc3BlY2lmaWNCdXR0b25Db25maWcgPSB0aGlzLl9jb25maWcuc0J1dHRvbj8uZGVmaW5lZEJ1dHRvbnM/LmxvZXNjaGVuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYWRkQnV0dG9uKSB7XHJcbiAgICAgIHRoaXMuaXNTcGVjaWZpY0J1dHRvbiA9IHRydWU7XHJcbiAgICAgIHNwZWNpZmljQnV0dG9uQ29uZmlnID0gdGhpcy5fY29uZmlnLnNCdXR0b24/LmRlZmluZWRCdXR0b25zPy5oaW56dWZ1ZWdlbjtcclxuICAgIH1cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZChzcGVjaWZpY0J1dHRvbkNvbmZpZykpIHtcclxuICAgICAgdGhpcy50aGVtZSA/Pz0gc3BlY2lmaWNCdXR0b25Db25maWchLnRoZW1lO1xyXG4gICAgICB0aGlzLmRlZmF1bHRCdXR0b25UZXh0ID0gc3BlY2lmaWNCdXR0b25Db25maWchLnRleHQgPz8gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50aGVtZSA/Pz0gTXJkU0J1dHRvblR5cGUuVEVYVF9PTkxZO1xyXG4gICAgdGhpcy5idXR0b25Db25maWcgPSB0aGlzLl9jb25maWcuc0J1dHRvbiE7XHJcbiAgICB0aGlzLnRoZW1lQ29uZmlnID0gdGhpcy50aGVtZSAhPT0gTXJkU0J1dHRvblR5cGUuVEVYVF9PTkxZID8gdGhpcy5idXR0b25Db25maWdbdGhpcy50aGVtZV0hIDogdGhpcy5idXR0b25Db25maWchO1xyXG4gICAgdGhpcy5zaXplQ29uZmlnID0gdGhpcy5zaXplICE9PSBNcmRTQnV0dG9uU2l6ZVR5cGUuQklHID8gdGhpcy5idXR0b25Db25maWdbdGhpcy5zaXplXSEgOiB0aGlzLmJ1dHRvbkNvbmZpZyE7XHJcblxyXG4gICAgdGhpcy5pc0ljb25CdXR0b24gPSB0aGlzLnNpemUgPT09IE1yZFNCdXR0b25TaXplVHlwZS5JQ09OIHx8IHRoaXMuc2l6ZSA9PT0gTXJkU0J1dHRvblNpemVUeXBlLkZVTExfSUNPTjtcclxuICAgIHRoaXMuaXNGdWxsSWNvbiA9IHRoaXMuc2l6ZSA9PT0gTXJkU0J1dHRvblNpemVUeXBlLkZVTExfSUNPTjtcclxuXHJcbiAgICB0aGlzLnRleHRDb2xvciA9IHRoaXMudGhlbWVDb25maWcudGV4dD8uZGVmYXVsdCB8fCB0aGlzLmJ1dHRvbkNvbmZpZy50ZXh0Py5kZWZhdWx0O1xyXG4gICAgdGhpcy5ob3ZlclRleHRDb2xvciA9IHRoaXMudGhlbWVDb25maWcudGV4dD8uaG92ZXIgfHwgdGhpcy5idXR0b25Db25maWcudGV4dD8uaG92ZXI7XHJcbiAgICB0aGlzLmRpc2FibGVkVGV4dENvbG9yID0gdGhpcy50aGVtZUNvbmZpZy50ZXh0Py5kaXNhYmxlZCB8fCB0aGlzLmJ1dHRvbkNvbmZpZy50ZXh0Py5kaXNhYmxlZDtcclxuICAgIHRoaXMuYWN0aXZlVGV4dENvbG9yID0gdGhpcy50aGVtZUNvbmZpZy50ZXh0Py5hY3RpdmUgfHwgdGhpcy5idXR0b25Db25maWcudGV4dD8uYWN0aXZlO1xyXG5cclxuICAgIHRoaXMuYmdDb2xvciA9IHRoaXMudGhlbWVDb25maWcuYmFja2dyb3VuZD8uZGVmYXVsdCB8fCB0aGlzLmJ1dHRvbkNvbmZpZy5iYWNrZ3JvdW5kPy5kZWZhdWx0O1xyXG4gICAgdGhpcy5ob3ZlckJnQ29sb3IgPSB0aGlzLnRoZW1lQ29uZmlnLmJhY2tncm91bmQ/LmhvdmVyIHx8IHRoaXMuYnV0dG9uQ29uZmlnLmJhY2tncm91bmQ/LmhvdmVyO1xyXG4gICAgdGhpcy5kaXNhYmxlZEJnQ29sb3IgPSB0aGlzLnRoZW1lQ29uZmlnLmJhY2tncm91bmQ/LmRpc2FibGVkIHx8IHRoaXMuYnV0dG9uQ29uZmlnLmJhY2tncm91bmQ/LmRpc2FibGVkO1xyXG4gICAgdGhpcy5hY3RpdmVCZ0NvbG9yID0gdGhpcy50aGVtZUNvbmZpZy5iYWNrZ3JvdW5kPy5hY3RpdmUgfHwgdGhpcy5idXR0b25Db25maWcuYmFja2dyb3VuZD8uYWN0aXZlO1xyXG5cclxuICAgIHRoaXMucHJvZ3Jlc3NDb2xvciA9IHRoaXMudGhlbWVDb25maWcucHJvZ3Jlc3M/LmRlZmF1bHQgfHwgdGhpcy5idXR0b25Db25maWcucHJvZ3Jlc3M/LmRlZmF1bHQ7XHJcbiAgICB0aGlzLmhvdmVyUHJvZ3Jlc3NDb2xvciA9IHRoaXMudGhlbWVDb25maWcucHJvZ3Jlc3M/LmhvdmVyIHx8IHRoaXMuYnV0dG9uQ29uZmlnLnByb2dyZXNzPy5ob3ZlcjtcclxuICAgIHRoaXMuZGlzYWJsZWRQcm9ncmVzc0NvbG9yID0gdGhpcy50aGVtZUNvbmZpZy5wcm9ncmVzcz8uZGlzYWJsZWQgfHwgdGhpcy5idXR0b25Db25maWcucHJvZ3Jlc3M/LmRpc2FibGVkO1xyXG4gICAgdGhpcy5hY3RpdmVQcm9ncmVzc0NvbG9yID0gdGhpcy50aGVtZUNvbmZpZy5wcm9ncmVzcz8uYWN0aXZlIHx8IHRoaXMuYnV0dG9uQ29uZmlnLnByb2dyZXNzPy5hY3RpdmU7XHJcbiAgICAvLyB0aGlzLnRvZ2dsZVVuc2VsZWN0ZWRDb2xvciA9IHRoaXMudGhlbWVDb25maWcudW5zZWxlY3RlZEJnQ29sb3IgfHwgdGhpcy5idXR0b25Db25maWcudW5zZWxlY3RlZEJnQ29sb3I7XHJcblxyXG4gICAgdGhpcy5ib3JkZXIgPSBfLmlzT2JqZWN0KHRoaXMudGhlbWVDb25maWcuYm9yZGVyKSA/ICh0aGlzLnRoZW1lQ29uZmlnLmJvcmRlciBhcyBNcmRTQnV0dG9uU3RhdGVDb2xvcik/LmRlZmF1bHQgOiB0aGlzLnRoZW1lQ29uZmlnLmJvcmRlciBhcyBzdHJpbmcgfHwgdGhpcy5idXR0b25Db25maWcuYm9yZGVyIGFzIHN0cmluZztcclxuICAgIHRoaXMuaG92ZXJCb3JkZXIgPSBfLmlzT2JqZWN0KHRoaXMudGhlbWVDb25maWcuYm9yZGVyKSA/ICh0aGlzLnRoZW1lQ29uZmlnLmJvcmRlciBhcyBNcmRTQnV0dG9uU3RhdGVDb2xvcik/LmhvdmVyIDogdGhpcy50aGVtZUNvbmZpZy5ib3JkZXIgYXMgc3RyaW5nIHx8IHRoaXMuYnV0dG9uQ29uZmlnLmJvcmRlciBhcyBzdHJpbmc7XHJcbiAgICB0aGlzLmRpc2FibGVkQm9yZGVyID0gXy5pc09iamVjdCh0aGlzLnRoZW1lQ29uZmlnLmJvcmRlcikgPyAodGhpcy50aGVtZUNvbmZpZy5ib3JkZXIgYXMgTXJkU0J1dHRvblN0YXRlQ29sb3IpPy5kaXNhYmxlZCA6IHRoaXMudGhlbWVDb25maWcuYm9yZGVyIGFzIHN0cmluZyB8fCB0aGlzLmJ1dHRvbkNvbmZpZy5ib3JkZXIgYXMgc3RyaW5nO1xyXG4gICAgdGhpcy5hY3RpdmVCb3JkZXIgPSBfLmlzT2JqZWN0KHRoaXMudGhlbWVDb25maWcuYm9yZGVyKSA/ICh0aGlzLnRoZW1lQ29uZmlnLmJvcmRlciBhcyBNcmRTQnV0dG9uU3RhdGVDb2xvcik/LmFjdGl2ZSA6IHRoaXMudGhlbWVDb25maWcuYm9yZGVyIGFzIHN0cmluZyB8fCB0aGlzLmJ1dHRvbkNvbmZpZy5ib3JkZXIgYXMgc3RyaW5nO1xyXG5cclxuICAgIHRoaXMuYm9yZGVyUmFkaXVzID0gdGhpcy5zaXplQ29uZmlnLmJvcmRlclJhZGl1cyB8fCB0aGlzLmJ1dHRvbkNvbmZpZy5ib3JkZXJSYWRpdXM7XHJcbiAgICB0aGlzLmZvbnRGYW1pbHkgPSB0aGlzLnNpemVDb25maWcuZm9udD8uZmFtaWx5IHx8IHRoaXMuYnV0dG9uQ29uZmlnLmZvbnQ/LmZhbWlseSB8fCB0aGlzLl9jb25maWcuYmFzZUZvbnQhLmZhbWlseTtcclxuICAgIHRoaXMuZm9udFNpemUgPSB0aGlzLnNpemVDb25maWcuZm9udD8uc2l6ZSB8fCB0aGlzLmJ1dHRvbkNvbmZpZy5mb250Py5zaXplIHx8IHRoaXMuX2NvbmZpZy5iYXNlRm9udCEuc2l6ZTtcclxuICAgIHRoaXMuZm9udFdlaWdodCA9IHRoaXMuc2l6ZUNvbmZpZy5mb250Py53ZWlnaHQgfHwgdGhpcy5idXR0b25Db25maWcuZm9udD8ud2VpZ2h0IHx8IHRoaXMuX2NvbmZpZy5iYXNlRm9udCEud2VpZ2h0O1xyXG4gICAgdGhpcy5taW5IZWlnaHQgPSB0aGlzLnNpemVDb25maWcubWluSGVpZ2h0IHx8IHRoaXMuYnV0dG9uQ29uZmlnLm1pbkhlaWdodDtcclxuICAgIHRoaXMuZGlhbWV0ZXIgPSB0aGlzLnNpemVDb25maWcuZGlhbWV0ZXIgfHwgdGhpcy5idXR0b25Db25maWcuZGlhbWV0ZXI7XHJcbiAgICB0aGlzLmljb25TaXplID0gdGhpcy5zaXplQ29uZmlnLmljb25TaXplIHx8IHRoaXMuYnV0dG9uQ29uZmlnLmljb25TaXplO1xyXG4gICAgdGhpcy5pY29uU2l6ZU51bWJlciA9IHRoaXMuc2l6ZUNvbmZpZy5pY29uU2l6ZU51bWJlciB8fCB0aGlzLmJ1dHRvbkNvbmZpZy5pY29uU2l6ZU51bWJlcjtcclxuICAgIHRoaXMudGV4dEljb25HYXAgPSB0aGlzLnNpemVDb25maWcudGV4dEljb25HYXAgfHwgdGhpcy5idXR0b25Db25maWcudGV4dEljb25HYXA7XHJcbiAgICB0aGlzLnBhZGRpbmcgPSB0aGlzLnNpemVDb25maWcucGFkZGluZyB8fCB0aGlzLmJ1dHRvbkNvbmZpZy5wYWRkaW5nO1xyXG5cclxuICAgIHRoaXMuaWNvbkVuZCA9IHNwZWNpZmljQnV0dG9uQ29uZmlnPy5pY29uRW5kID8/IHRoaXMuaWNvbkVuZDtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZChzcGVjaWZpY0J1dHRvbkNvbmZpZykgJiYgVXRpbC5pc0RlZmluZWQoc3BlY2lmaWNCdXR0b25Db25maWchLmljb25Hcm91cCkpIHtcclxuICAgICAgdGhpcy5pY29uU3RhdGVNYXAgPSB7XHJcbiAgICAgICAgZGVmYXVsdDogc3BlY2lmaWNCdXR0b25Db25maWchLmljb25Hcm91cD8uZGVmYXVsdCA/IHNwZWNpZmljQnV0dG9uQ29uZmlnIS5pY29uR3JvdXAuZGVmYXVsdCh0aGlzLmljb25TaXplTnVtYmVyISkgOiBudWxsLFxyXG4gICAgICAgIGRpc2FibGVkOiBzcGVjaWZpY0J1dHRvbkNvbmZpZyEuaWNvbkdyb3VwPy5kaXNhYmxlZCA/IHNwZWNpZmljQnV0dG9uQ29uZmlnIS5pY29uR3JvdXAuZGlzYWJsZWQodGhpcy5pY29uU2l6ZU51bWJlciEpIDogbnVsbCxcclxuICAgICAgICBob3Zlcjogc3BlY2lmaWNCdXR0b25Db25maWchLmljb25Hcm91cD8uaG92ZXIgPyBzcGVjaWZpY0J1dHRvbkNvbmZpZyEuaWNvbkdyb3VwLmhvdmVyKHRoaXMuaWNvblNpemVOdW1iZXIhKSA6IG51bGxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gaWNvbkdyb3VwIChlaWdlbmUgU1ZHcyBqZSBadXN0YW5kKSBoYXQgVm9ycmFuZywgZGFtaXQgYW5nZXBhc3N0ZSBIb3N0LUNvbmZpZ3MgZXJoYWx0ZW4gYmxlaWJlblxyXG4gICAgdGhpcy5pY29uRGVmaW5pdGlvbiA9IFV0aWwuaXNEZWZpbmVkKHNwZWNpZmljQnV0dG9uQ29uZmlnPy5pY29uR3JvdXApID8gdW5kZWZpbmVkIDogc3BlY2lmaWNCdXR0b25Db25maWc/Lmljb247XHJcblxyXG4gICAgaWYgKHRoaXMubXJkQnV0dG9uVGV4dENvbnRlbnQpIHtcclxuICAgICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy5tcmRCdXR0b25UZXh0Q29udGVudC5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKTtcclxuICAgIH1cclxuICAgIC8vIEZhbGxzIGtlaW4gZXhwbGl6aWV0ZXIgJ3Rvb2x0aXBUZXh0JyBnZXNldHp0IGlzdCwgd2lyZCBkZXIgVGV4dCBkZXMgQnV0dG9ucyBhbHMgVG9vbHRpcC1UZXh0IHZlcndlbmRldFxyXG4gICAgaWYgKCF0aGlzLnRvb2x0aXBUZXh0KSB7XHJcbiAgICAgIHRoaXMudG9vbHRpcFRleHQgPSB0aGlzLmJ1dHRvblRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudG9nZ2xlICYmIHRoaXMudG9nZ2xlU2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxsYmFjaywgd2VubiBzaWNoIGRlciBDb2xsYWJzLVN0YXR1cyBkZXMgQnV0dG9ucyDDpG5kZXJ0LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGlzQ29sbGFwc2VkIEdpYnQgYW4sIG9iIGRlciBCdXR0b24ga29sbGFiaWVydCBpc3QuXHJcbiAgICovXHJcbiAgcHVibGljIGJ1dHRvbkNvbGxhcHNlZChpc0NvbGxhcHNlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgLy8gV2lyIHJlYWdpZXJlbiBudXIsIHdlbm4gc2ljaCBkZXIgU3RhdHVzIMOkbmRlcnRcclxuICAgIGlmICh0aGlzLmlzQ29sbGFwc2VkICE9PSBpc0NvbGxhcHNlZCkge1xyXG4gICAgICB0aGlzLmlzQ29sbGFwc2VkID0gaXNDb2xsYXBzZWQ7XHJcbiAgICAgIC8vIFdlbm4gJ2NvbGxhcHNlVG8nIGdlc2V0enQgaXN0LCB3aXJkIGRlciBCdXR0b24gZW50c3ByZWNoZW5kIHVtZ2VzdHlsdFxyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5fY29sbGFwc2VUbykpIHtcclxuICAgICAgICAvLyBEaWVzZSBXZXJ0ZSBtw7xzc2VuIHp1csO8Y2tnZXNldHp0IHdlcmRlbiwgZGEgc2llIGbDvHIgZGVuIG5ldWVuIFN0eWxlIG5ldSBnZXNldHp0IHdlcmRlbiBtw7xzc2VuXHJcbiAgICAgICAgdGhpcy5ib3JkZXJSYWRpdXMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLm1pbkhlaWdodCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmRpYW1ldGVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuaWNvblNpemUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKGlzQ29sbGFwc2VkKSB7XHJcbiAgICAgICAgICB0aGlzLnVuY29sbGFwc2VkQXBwZWFyYW5jZSA9IHRoaXMuc2l6ZTtcclxuICAgICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuX2NvbGxhcHNlVG87XHJcbiAgICAgICAgICB0aGlzLm5nQWZ0ZXJWaWV3SW5pdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNpemUgPSB0aGlzLnVuY29sbGFwc2VkQXBwZWFyYW5jZSB8fCB0aGlzLnNpemU7XHJcbiAgICAgICAgICB0aGlzLm5nQWZ0ZXJWaWV3SW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uTW91c2VFbnRlcigpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNIb3ZlcmVkID0gdHJ1ZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uTW91c2VMZWF2ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNIb3ZlcmVkID0gdGhpcy5ob3ZlcmVkO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYXB0dXJlLVBoYXNlIGFtIEhvc3Q6IGxhZXVmdCB2b3IgQW5ndWxhcnMgYChjbGljaylgLCBhdWNoIHdlbm4gZGlyZWt0IGF1ZiBkZW4gSG9zdCBnZWtsaWNrdCB3aXJkLlxyXG4gICAqIERlYWt0aXZpZXJ0IGVuZGV0IGRlciBLbGljayBoaWVyLCBzb2Rhc3Mgd2VkZXIgYChjbGljaylgIG5vY2ggdW1nZWJlbmRlIEVsZW1lbnRlIGlobiBlcmhhbHRlbi5cclxuICAgKi9cclxuICBwcml2YXRlIHJlYWRvbmx5IGtsaWNrUHJ1ZWZlbiA9IChldmVudDogRXZlbnQpOiB2b2lkID0+IHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8qKiBXaWUgYmlzaGVyOiBgKGNsaWNrKWAgYW0gSG9zdCBmZXVlcnQsIHVtZ2ViZW5kZSBFbGVtZW50ZSAoei4gQi4gZWluZSBrbGlja2JhcmUgTGlzdGVuemVpbGUpIGVyaGFsdGVuIGRlbiBLbGljayBuaWNodCAqL1xyXG4gIHByaXZhdGUgcmVhZG9ubHkga2xpY2tBYnNjaGlybWVuID0gKGV2ZW50OiBFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH07XHJcbn0iLCI8IS0tIERlciBlaWdlbnRsaWNoIEhUTUwtQnV0dG9uIC0tPlxuPGJ1dHRvbiBjbGFzcz1cIm1yZC1idXR0b24tY29udGFpbmVyXCJcbiAgI2J1dHRvbkNvbnRhaW5lclxuICBbc3R5bGUuLS10ZXh0LWNvbG9yXT1cInRleHRDb2xvclwiXG4gIFtzdHlsZS4tLWhvdmVyLXRleHQtY29sb3JdPVwiaG92ZXJUZXh0Q29sb3JcIlxuICBbc3R5bGUuLS1kaXNhYmxlZC10ZXh0LWNvbG9yXT1cImRpc2FibGVkVGV4dENvbG9yXCJcbiAgW3N0eWxlLi0tYWN0aXZlLXRleHQtY29sb3JdPVwiYWN0aXZlVGV4dENvbG9yXCJcbiAgW3N0eWxlLi0tYmctY29sb3JdPVwiYmdDb2xvclwiXG4gIFtzdHlsZS4tLWhvdmVyLWJnLWNvbG9yXT1cImhvdmVyQmdDb2xvclwiXG4gIFtzdHlsZS4tLWRpc2FibGVkLWJnLWNvbG9yXT1cImRpc2FibGVkQmdDb2xvclwiXG4gIFtzdHlsZS4tLWFjdGl2ZS1iZy1jb2xvcl09XCJhY3RpdmVCZ0NvbG9yXCJcbiAgW3N0eWxlLi0tYm9yZGVyXT1cImJvcmRlclwiXG4gIFtzdHlsZS4tLWhvdmVyLWJvcmRlcl09XCJob3ZlckJvcmRlclwiXG4gIFtzdHlsZS4tLWRpc2FibGVkLWJvcmRlcl09XCJkaXNhYmxlZEJvcmRlclwiXG4gIFtzdHlsZS4tLWFjdGl2ZS1ib3JkZXJdPVwiYWN0aXZlQm9yZGVyXCJcblxuICBbc3R5bGUuLS1ib3JkZXItcmFkaXVzXT1cImJvcmRlclJhZGl1c1wiXG4gIFtzdHlsZS4tLW1pbi1oZWlnaHRdPVwibWluSGVpZ2h0XCJcbiAgW3N0eWxlLi0tZm9udC1zaXplXT1cImZvbnRTaXplXCJcbiAgW3N0eWxlLi0tZm9udC1mYW1pbHldPVwiZm9udEZhbWlseVwiXG4gIFtzdHlsZS4tLWZvbnQtd2VpZ2h0XT1cImZvbnRXZWlnaHRcIlxuICBbc3R5bGUuLS1kaWFtZXRlcl09XCJkaWFtZXRlclwiXG4gIFtzdHlsZS4tLWljb24tc2l6ZV09XCJpY29uU2l6ZVwiXG4gIFtzdHlsZS4tLXBhZGRpbmddPVwicGFkZGluZ1wiXG4gIFtzdHlsZS4tLXVuc2VsZWN0ZWQtY29sb3JdPVwidG9nZ2xlVW5zZWxlY3RlZENvbG9yXCJcblxuICBbbmdTdHlsZV09XCJ7J21pbi13aWR0aCc6ICFjb2xsYXBzZSA/ICdmaXQtY29udGVudCcgOiAndW5zZXQnfVwiXG4gIFtjbGFzcy5ob3ZlcmVkXT1cImhvdmVyZWRcIlxuICBbY2xhc3MudG91Y2gtaG92ZXJlZF09XCJpc1RvdWNoSG92ZXJlZFwiXG4gIFtjbGFzcy50b3VjaC1hY3RpdmVdPVwiaXNUb3VjaEFjdGl2ZVwiXG4gIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gIFtjbGFzcy5tcmQtaWNvbi1idXR0b25dPVwiaXNJY29uQnV0dG9uXCJcbiAgW21yZFRvb2xUaXBdPVwidG9vbHRpcFRleHRcIiBbc2hvd09uVHJ1bmNhdGVkRWxlbWVudF09XCJ0b29sdGlwSWZUcnVuY2F0ZWQgPyBtcmRCdXR0b25UZXh0Q29udGVudCA6IHVuZGVmaW5lZFwiIFtzaG93VG9vbFRpcF09XCJzaG93VG9vbHRpcCB8fCAodG9vbHRpcElmQ29sbGFwc2VkICYmIGlzQ29sbGFwc2VkKVwiPlxuICA8ZGl2IGNsYXNzPVwibXJkLWJ1dHRvbi1iYWNrZ3JvdW5kXCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJtcmQtYnV0dG9uLXRvdWNoLWFyZWFcIiAjYnV0dG9uVG91Y2hBcmVhXG4gICAgKG1vdXNlZW50ZXIpPVwiaXNUb3VjaEhvdmVyZWQgPSB0cnVlXCJcbiAgICAobW91c2VsZWF2ZSk9XCJpc1RvdWNoSG92ZXJlZCA9IGZhbHNlOyBpc1RvdWNoQWN0aXZlID0gZmFsc2VcIlxuICAgIChtb3VzZWRvd24pPVwiaXNUb3VjaEFjdGl2ZSA9IHRydWVcIlxuICAgIChtb3VzZXVwKT1cImlzVG91Y2hBY3RpdmUgPSBmYWxzZVwiPjwvZGl2PlxuICA8IS0tIERlciBDb250ZW50IGRlcyBCdXR0b25zIC0tPlxuICA8c3BhbiBjbGFzcz1cIm1yZC1idXR0b24tY29udGVudFwiIFtuZ0NsYXNzXT1cInsnaXNDb2xsYXBzZWQnOiBpc0NvbGxhcHNlZH1cIj5cbiAgICA8IS0tIExpbmtlciBJY29uLUNvbnRhaW5lciAtLT5cbiAgICA8c3BhbiBjbGFzcz1cIm1yZC1idXR0b24taWNvbi1jb250ZW50XCIgKm5nSWY9XCIhaXNTcGVjaWZpY0J1dHRvbiAmJiAhaWNvblN0YXRlTWFwXCJcbiAgICAgICAgICBbY2xhc3MuZnVsbC1pY29uXT1cImlzRnVsbEljb25cIiBcbiAgICAgICAgICBbaGlkZUlmVHJ1bmNhdGVkXT1cImNvbGxhcHNlXCIgXG4gICAgICAgICAgZGlzcGxheVN0YXRlPVwiZmxleFwiIFxuICAgICAgICAgIHJlcXVpcmVkSGlkZUF0dHJpYnV0ZT1cImljb24tY29sbGFwc2VcIlxuICAgICAgICAgIGNoZWNrQ2hpbGRyZW5Gb3JBdHRyaWJ1dGUgXG4gICAgICAgICAgW2hpZGVPblRydW5jYXRlZEVsZW1lbnRdPVwibXJkQnV0dG9uVGV4dENvbnRlbnRcIiBcbiAgICAgICAgICBbcGFyZW50UmVzaXplRWxlbWVudF09XCJ0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFwiPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXJkLWljb246bm90KFtpY29uLWVuZF0pLCBbbXJkLWljb25dOm5vdChbaWNvbi1lbmRdKVwiPjwvbmctY29udGVudD5cbiAgICA8L3NwYW4+XG5cbiAgICA8c3BhbiBjbGFzcz1cIm1yZC1idXR0b24taWNvbi1jb250ZW50XCIgKm5nSWY9XCIoaWNvblN0YXRlTWFwIHx8IGljb25EZWZpbml0aW9uKSAmJiAhaWNvbkVuZFwiXG4gICAgICAgICAgW3N0eWxlLm1hcmdpbi1yaWdodF09XCIhaXNJY29uQnV0dG9uID8gJzZweCcgOiAnMHB4J1wiXG4gICAgICAgICAgW2NsYXNzLmZ1bGwtaWNvbl09XCJpc0Z1bGxJY29uXCIgXG4gICAgICAgICAgW2hpZGVJZlRydW5jYXRlZF09XCJjb2xsYXBzZVwiIFxuICAgICAgICAgIGRpc3BsYXlTdGF0ZT1cImZsZXhcIiBcbiAgICAgICAgICByZXF1aXJlZEhpZGVBdHRyaWJ1dGU9XCJpY29uLWNvbGxhcHNlXCJcbiAgICAgICAgICBjaGVja0NoaWxkcmVuRm9yQXR0cmlidXRlIFxuICAgICAgICAgIFtoaWRlT25UcnVuY2F0ZWRFbGVtZW50XT1cIm1yZEJ1dHRvblRleHRDb250ZW50XCIgXG4gICAgICAgICAgW3BhcmVudFJlc2l6ZUVsZW1lbnRdPVwidGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcIj5cbiAgICAgICAgPG1yZC1pY29uLWdyb3VwICpuZ0lmPVwiaWNvblN0YXRlTWFwXCIgW3N2Z3NdPVwiaWNvblN0YXRlTWFwXCIgW2hvc3RFbGVtZW50XT1cImJ1dHRvbkNvbnRhaW5lclwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtob3ZlcmVkXT1cImhvdmVyZWRcIiBbbG9hZGluZ109XCJpc0xvYWRpbmdcIiBbc2l6ZV09XCJpY29uU2l6ZU51bWJlclwiPjwvbXJkLWljb24tZ3JvdXA+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaWNvblN0YXRlTWFwICYmIGljb25EZWZpbml0aW9uXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiZGVmaW5pZXJ0ZXNJY29uXCI+PC9uZy1jb250YWluZXI+XG4gICAgPC9zcGFuPlxuICAgIFxuICAgIDwhLS0gRGVyIFRleHQgZGVzIEJ1dHRvbnMgLS0+XG4gICAgPHNwYW4gY2xhc3M9XCJtcmQtYnV0dG9uLXRleHQtY29udGVudFwiIFxuICAgICAgICAgIChoaWRkZW5DaGFuZ2VkKT1cImJ1dHRvbkNvbGxhcHNlZCgkZXZlbnQpXCIgXG4gICAgICAgICAgW2hpZGVJZlRydW5jYXRlZF09XCJjb2xsYXBzZVwiIFxuICAgICAgICAgICNtcmRCdXR0b25UZXh0Q29udGVudCBcbiAgICAgICAgICBbcGFyZW50UmVzaXplRWxlbWVudF09XCJ0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFwiPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiOm5vdChbbXJkLWljb25dKTpub3QobXJkLWljb24pXCI+PC9uZy1jb250ZW50PlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cIm1yZC1idXR0b24tdGV4dC1jb250ZW50XCIgKm5nSWY9XCIhaXNJY29uQnV0dG9uICYmICFidXR0b25UZXh0Py5sZW5ndGhcIlxuICAgICAgKGhpZGRlbkNoYW5nZWQpPVwiYnV0dG9uQ29sbGFwc2VkKCRldmVudClcIiBcbiAgICAgIFtoaWRlSWZUcnVuY2F0ZWRdPVwiY29sbGFwc2VcIiBcbiAgICAgIFtwYXJlbnRSZXNpemVFbGVtZW50XT1cInRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XCI+XG4gICAgICAgIHt7ZGVmYXVsdEJ1dHRvblRleHR9fVxuICAgICAgPC9zcGFuPlxuXG4gICAgPHNwYW4gY2xhc3M9XCJtcmQtYnV0dG9uLWljb24tY29udGVudFwiICpuZ0lmPVwiKGljb25TdGF0ZU1hcCB8fCBpY29uRGVmaW5pdGlvbikgJiYgaWNvbkVuZFwiXG4gICAgICAgICAgW3N0eWxlLm1hcmdpbi1sZWZ0XT1cIiFpc0ljb25CdXR0b24gPyAnNnB4JyA6ICcwcHgnXCJcbiAgICAgICAgICBbY2xhc3MuZnVsbC1pY29uXT1cImlzRnVsbEljb25cIiBcbiAgICAgICAgICBbaGlkZUlmVHJ1bmNhdGVkXT1cImNvbGxhcHNlXCIgXG4gICAgICAgICAgZGlzcGxheVN0YXRlPVwiZmxleFwiIFxuICAgICAgICAgIHJlcXVpcmVkSGlkZUF0dHJpYnV0ZT1cImljb24tY29sbGFwc2VcIlxuICAgICAgICAgIGNoZWNrQ2hpbGRyZW5Gb3JBdHRyaWJ1dGUgXG4gICAgICAgICAgW2hpZGVPblRydW5jYXRlZEVsZW1lbnRdPVwibXJkQnV0dG9uVGV4dENvbnRlbnRcIiBcbiAgICAgICAgICBbcGFyZW50UmVzaXplRWxlbWVudF09XCJ0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFwiPlxuICAgICAgICA8bXJkLWljb24tZ3JvdXAgKm5nSWY9XCJpY29uU3RhdGVNYXBcIiBbc3Znc109XCJpY29uU3RhdGVNYXBcIiBbaG9zdEVsZW1lbnRdPVwiYnV0dG9uQ29udGFpbmVyXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2hvdmVyZWRdPVwiaG92ZXJlZFwiIFtsb2FkaW5nXT1cImlzTG9hZGluZ1wiIFtzaXplXT1cImljb25TaXplTnVtYmVyXCI+PC9tcmQtaWNvbi1ncm91cD5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpY29uU3RhdGVNYXAgJiYgaWNvbkRlZmluaXRpb25cIiBbbmdUZW1wbGF0ZU91dGxldF09XCJkZWZpbmllcnRlc0ljb25cIj48L25nLWNvbnRhaW5lcj5cbiAgICA8L3NwYW4+XG5cblxuICAgXG4gICAgPCEtLSBSZWNodGVyIEljb24tQ29udGFpbmVyIC0tPlxuICAgIDxzcGFuIGNsYXNzPVwibXJkLWJ1dHRvbi1pY29uLWNvbnRlbnRcIiAqbmdJZj1cIiFpc1NwZWNpZmljQnV0dG9uICYmICFpY29uU3RhdGVNYXBcIiBcbiAgICAgICAgICBbY2xhc3MuZnVsbC1pY29uXT1cImlzRnVsbEljb25cIiBcbiAgICAgICAgICBbaGlkZUlmVHJ1bmNhdGVkXT1cImNvbGxhcHNlXCIgXG4gICAgICAgICAgZGlzcGxheVN0YXRlPVwiZmxleFwiIFxuICAgICAgICAgIHJlcXVpcmVkSGlkZUF0dHJpYnV0ZT1cImljb24tY29sbGFwc2VcIlxuICAgICAgICAgIGNoZWNrQ2hpbGRyZW5Gb3JBdHRyaWJ1dGUgXG4gICAgICAgICAgW2hpZGVPblRydW5jYXRlZEVsZW1lbnRdPVwibXJkQnV0dG9uVGV4dENvbnRlbnRcIiBcbiAgICAgICAgICBbcGFyZW50UmVzaXplRWxlbWVudF09XCJ0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFwiPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXJkLWljb25baWNvbi1lbmRdLCBbbXJkLWljb25dW2ljb24tZW5kXVwiPjwvbmctY29udGVudD5cbiAgICA8L3NwYW4+XG4gIDwvc3Bhbj5cblxuICA8IS0tIERpZSBQcm9ncmVzcy1CYXIgZWluZXMgQnV0dG9ucyAobmljaHQgZsO8ciBJY29uLSwgRmFiLSB1bmQgTWluaS1GYWItQnV0dG9ucykgLS0+XG4gIDxtcmQtcHJvZ3Jlc3MtYmFyIGNsYXNzPVwibXJkLWJ1dHRvbi1wcm9ncmVzcy1iYXJcIlxuICAgICpuZ0lmPVwiIWlzSWNvbkJ1dHRvbiAmJiAoaXNMb2FkaW5nIHx8IGxvYWRpbmc/LnZhbHVlIHx8IGxvYWRpbmdQcm9ncmVzcz8udmFsdWUgfHwgbG9hZGluZ1Byb2dyZXNzPy52YWx1ZSA9PT0gMClcIlxuICAgIFt2YWx1ZV09XCJsb2FkaW5nUHJvZ3Jlc3M/LnZhbHVlXCIgW21vZGVdPVwibG9hZGluZ1Byb2dyZXNzID8gJ2RldGVybWluYXRlJyA6ICdpbmRldGVybWluYXRlJ1wiIFtjb2xvcl09XCJwcm9ncmVzc0NvbG9yXCI+PC9tcmQtcHJvZ3Jlc3MtYmFyPlxuICA8IS0tIERlciBQcm9ncmVzcy1TcGlubmVyIGVpbmVzIEJ1dHRvbnMgKG51ciBmw7xyIEljb24tLCBGYWItIHVuZCBNaW5pLUZhYi1CdXR0b25zKSAtLT5cbiAgPG1yZC1wcm9ncmVzcy1zcGlubmVyIGNsYXNzPVwibXJkLWJ1dHRvbi1wcm9ncmVzcy1zcGlubmVyXCJcbiAgICAqbmdJZj1cImlzSWNvbkJ1dHRvbiAmJiAoaXNMb2FkaW5nIHx8IGxvYWRpbmc/LnZhbHVlIHx8IGxvYWRpbmdQcm9ncmVzcz8udmFsdWUgfHwgbG9hZGluZ1Byb2dyZXNzPy52YWx1ZSA9PT0gMClcIlxuICAgIFt2YWx1ZV09XCJsb2FkaW5nUHJvZ3Jlc3M/LnZhbHVlXCIgW21vZGVdPVwibG9hZGluZ1Byb2dyZXNzID8gJ2RldGVybWluYXRlJyA6ICdpbmRldGVybWluYXRlJ1wiIFtjb2xvcl09XCJwcm9ncmVzc0NvbG9yXCI+PC9tcmQtcHJvZ3Jlc3Mtc3Bpbm5lcj5cbjwvYnV0dG9uPlxuXG48bmctdGVtcGxhdGUgI2RlZmluaWVydGVzSWNvbj5cbiAgPG1yZC1pY29uIFtpY29uXT1cImljb25EZWZpbml0aW9uLnN5bWJvbFwiXG4gICAgW291dGxpbmVdPVwiaWNvbkRlZmluaXRpb24ub3V0ZXIgPT09ICdvdXRsaW5lJ1wiXG4gICAgW2Z1bGxdPVwiaWNvbkRlZmluaXRpb24ub3V0ZXIgPT09ICdmdWxsJ1wiXG4gICAgW2Rhc2hlZF09XCJpY29uRGVmaW5pdGlvbi5vdXRlciA9PT0gJ2Rhc2hlZCdcIlxuICAgIFtkaXJlY3Rpb25dPVwiaWNvbkRlZmluaXRpb24uZGlyZWN0aW9uXCJcbiAgICBbc2l6ZV09XCJpY29uU2l6ZU51bWJlclwiPjwvbXJkLWljb24+XG48L25nLXRlbXBsYXRlPlxuIl19