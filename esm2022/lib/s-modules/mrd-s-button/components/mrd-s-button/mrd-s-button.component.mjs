import { MrdSButtonSizeType, MrdSButtonType } from './../../../../common/model/config.model';
import { BasePushStrategyObject, Util } from 'mrd-core';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, booleanAttribute } from '@angular/core';
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
    renderer;
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
     * Das Klick-Event durch den Nutzer.
     *
     * @type {EventEmitter<Event>}
     * @memberof MrdSButtonComponent
     */
    click = new EventEmitter();
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
        newHost.style.minWidth = !this.collapse ? 'fit-content' : 'unset';
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
        this.updateStyle();
        this.isHovered = this.hovered;
        // Manuelles Anhängen der Mouseenter- und Mouseleave-Listener mit Renderer2
        this.mouseEnterListener = this.renderer.listen(this.elementRef.nativeElement, 'mouseenter', () => {
            this.isHovered = true;
            this.cdr.markForCheck();
        });
        this.mouseLeaveListener = this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', () => {
            this.isHovered = this.hovered;
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
    onClick(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (!this.disabled) {
            this.click.emit(event);
        }
    }
    /** @nocollapse */ static ɵfac = function MrdSButtonComponent_Factory(t) { return new (t || MrdSButtonComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdSButtonComponent, selectors: [["mrd-s-button"]], viewQuery: function MrdSButtonComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
            i0.ɵɵviewQuery(_c1, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mrdButtonTextContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.buttonTouchArea = _t.first);
        } }, hostVars: 8, hostBindings: function MrdSButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseenter", function MrdSButtonComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function MrdSButtonComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
        } if (rf & 2) {
            i0.ɵɵstyleProp("min-width", !ctx.collapse ? "fit-content" : "unset")("margin", ctx.toggle ? "0 -16px" : "unset")("transition", ctx.toggle ? "transform 0.2s" : "unset");
            i0.ɵɵclassProp("active", ctx.toggle && ctx.toggleSelected);
        } }, inputs: { theme: "theme", editButton: ["edit-button", "editButton", booleanAttribute], saveButton: ["save-button", "saveButton", booleanAttribute], cancelButton: ["cancel-button", "cancelButton", booleanAttribute], closeIconButton: ["close-icon-button", "closeIconButton", booleanAttribute], deleteButton: ["delete-button", "deleteButton", booleanAttribute], addButton: ["add-button", "addButton", booleanAttribute], toggle: ["toggle-button", "toggle", booleanAttribute], toggleSelected: ["selected", "toggleSelected", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], hovered: ["hovered", "hovered", booleanAttribute], loading: "loading", isLoading: ["isLoading", "isLoading", booleanAttribute], loadingProgress: "loadingProgress", showTooltip: ["tooltip", "showTooltip", booleanAttribute], tooltipText: "tooltipText", tooltipIfTruncated: ["tooltipIfTruncated", "tooltipIfTruncated", booleanAttribute], tooltipIfCollapsed: ["tooltipIfCollapsed", "tooltipIfCollapsed", booleanAttribute], size: "size", value: "value", iconStateMap: "iconStateMap", iconEnd: ["iconEnd", "iconEnd", booleanAttribute] }, outputs: { click: "click" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c5, decls: 18, vars: 70, consts: [[1, "mrd-button-container", 3, "ngStyle", "mrdToolTip", "showOnTruncatedElement", "showToolTip"], ["buttonContainer", ""], [1, "mrd-button-background"], [1, "mrd-button-touch-area", 3, "mouseenter", "mouseleave", "mousedown", "mouseup"], ["buttonTouchArea", ""], [1, "mrd-button-content", 3, "ngClass"], ["class", "mrd-button-icon-content", "displayState", "flex", "requiredHideAttribute", "icon-collapse", "checkChildrenForAttribute", "", 3, "full-icon", "hideIfTruncated", "hideOnTruncatedElement", "parentResizeElement", 4, "ngIf"], ["class", "mrd-button-icon-content", "displayState", "flex", "requiredHideAttribute", "icon-collapse", "checkChildrenForAttribute", "", 3, "margin-right", "full-icon", "hideIfTruncated", "hideOnTruncatedElement", "parentResizeElement", 4, "ngIf"], [1, "mrd-button-text-content", 3, "hideIfTruncated", "parentResizeElement", "hiddenChanged"], ["mrdButtonTextContent", ""], ["class", "mrd-button-text-content", 3, "hideIfTruncated", "parentResizeElement", "hiddenChanged", 4, "ngIf"], ["class", "mrd-button-icon-content", "displayState", "flex", "requiredHideAttribute", "icon-collapse", "checkChildrenForAttribute", "", 3, "margin-left", "full-icon", "hideIfTruncated", "hideOnTruncatedElement", "parentResizeElement", 4, "ngIf"], ["class", "mrd-button-progress-bar", 3, "value", "mode", "color", 4, "ngIf"], ["class", "mrd-button-progress-spinner", 3, "value", "mode", "color", 4, "ngIf"], ["definiertesIcon", ""], ["displayState", "flex", "requiredHideAttribute", "icon-collapse", "checkChildrenForAttribute", "", 1, "mrd-button-icon-content", 3, "hideIfTruncated", "hideOnTruncatedElement", "parentResizeElement"], [3, "svgs", "hostElement", "disabled", "hovered", "loading", "size", 4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "svgs", "hostElement", "disabled", "hovered", "loading", "size"], [3, "ngTemplateOutlet"], [1, "mrd-button-progress-bar", 3, "value", "mode", "color"], [1, "mrd-button-progress-spinner", 3, "value", "mode", "color"], [3, "icon", "outline", "full", "dashed", "direction", "size"]], template: function MrdSButtonComponent_Template(rf, ctx) { if (rf & 1) {
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
                    '[class.active]': 'toggle && toggleSelected',
                    '(mouseenter)': 'onMouseEnter()',
                    '(mouseleave)': 'onMouseLeave()'
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- Der eigentlich HTML-Button -->\n<button class=\"mrd-button-container\"\n  #buttonContainer\n  [style.--text-color]=\"textColor\"\n  [style.--hover-text-color]=\"hoverTextColor\"\n  [style.--disabled-text-color]=\"disabledTextColor\"\n  [style.--active-text-color]=\"activeTextColor\"\n  [style.--bg-color]=\"bgColor\"\n  [style.--hover-bg-color]=\"hoverBgColor\"\n  [style.--disabled-bg-color]=\"disabledBgColor\"\n  [style.--active-bg-color]=\"activeBgColor\"\n  [style.--border]=\"border\"\n  [style.--hover-border]=\"hoverBorder\"\n  [style.--disabled-border]=\"disabledBorder\"\n  [style.--active-border]=\"activeBorder\"\n\n  [style.--border-radius]=\"borderRadius\"\n  [style.--min-height]=\"minHeight\"\n  [style.--font-size]=\"fontSize\"\n  [style.--font-family]=\"fontFamily\"\n  [style.--font-weight]=\"fontWeight\"\n  [style.--diameter]=\"diameter\"\n  [style.--icon-size]=\"iconSize\"\n  [style.--padding]=\"padding\"\n  [style.--unselected-color]=\"toggleUnselectedColor\"\n\n  [ngStyle]=\"{'min-width': !collapse ? 'fit-content' : 'unset'}\"\n  [class.hovered]=\"hovered\"\n  [class.touch-hovered]=\"isTouchHovered\"\n  [class.touch-active]=\"isTouchActive\"\n  [class.disabled]=\"disabled\"\n  [class.mrd-icon-button]=\"isIconButton\"\n  [mrdToolTip]=\"tooltipText\" [showOnTruncatedElement]=\"tooltipIfTruncated ? mrdButtonTextContent : undefined\" [showToolTip]=\"showTooltip || (tooltipIfCollapsed && isCollapsed)\">\n  <div class=\"mrd-button-background\"></div>\n  <div class=\"mrd-button-touch-area\" #buttonTouchArea\n    (mouseenter)=\"isTouchHovered = true\"\n    (mouseleave)=\"isTouchHovered = false; isTouchActive = false\"\n    (mousedown)=\"isTouchActive = true\"\n    (mouseup)=\"isTouchActive = false\"></div>\n  <!-- Der Content des Buttons -->\n  <span class=\"mrd-button-content\" [ngClass]=\"{'isCollapsed': isCollapsed}\">\n    <!-- Linker Icon-Container -->\n    <span class=\"mrd-button-icon-content\" *ngIf=\"!isSpecificButton && !iconStateMap\"\n          [class.full-icon]=\"isFullIcon\" \n          [hideIfTruncated]=\"collapse\" \n          displayState=\"flex\" \n          requiredHideAttribute=\"icon-collapse\"\n          checkChildrenForAttribute \n          [hideOnTruncatedElement]=\"mrdButtonTextContent\" \n          [parentResizeElement]=\"this.elementRef.nativeElement\">\n      <ng-content select=\"mrd-icon:not([icon-end]), [mrd-icon]:not([icon-end])\"></ng-content>\n    </span>\n\n    <span class=\"mrd-button-icon-content\" *ngIf=\"(iconStateMap || iconDefinition) && !iconEnd\"\n          [style.margin-right]=\"!isIconButton ? '6px' : '0px'\"\n          [class.full-icon]=\"isFullIcon\" \n          [hideIfTruncated]=\"collapse\" \n          displayState=\"flex\" \n          requiredHideAttribute=\"icon-collapse\"\n          checkChildrenForAttribute \n          [hideOnTruncatedElement]=\"mrdButtonTextContent\" \n          [parentResizeElement]=\"this.elementRef.nativeElement\">\n        <mrd-icon-group *ngIf=\"iconStateMap\" [svgs]=\"iconStateMap\" [hostElement]=\"buttonContainer\" [disabled]=\"disabled\" [hovered]=\"hovered\" [loading]=\"isLoading\" [size]=\"iconSizeNumber\"></mrd-icon-group>\n        <ng-container *ngIf=\"!iconStateMap && iconDefinition\" [ngTemplateOutlet]=\"definiertesIcon\"></ng-container>\n    </span>\n    \n    <!-- Der Text des Buttons -->\n    <span class=\"mrd-button-text-content\" \n          (hiddenChanged)=\"buttonCollapsed($event)\" \n          [hideIfTruncated]=\"collapse\" \n          #mrdButtonTextContent \n          [parentResizeElement]=\"this.elementRef.nativeElement\">\n      <ng-content select=\":not([mrd-icon]):not(mrd-icon)\"></ng-content>\n    </span>\n    <span class=\"mrd-button-text-content\" *ngIf=\"!isIconButton && !buttonText?.length\"\n      (hiddenChanged)=\"buttonCollapsed($event)\" \n      [hideIfTruncated]=\"collapse\" \n      [parentResizeElement]=\"this.elementRef.nativeElement\">\n        {{defaultButtonText}}\n      </span>\n\n    <span class=\"mrd-button-icon-content\" *ngIf=\"(iconStateMap || iconDefinition) && iconEnd\"\n          [style.margin-left]=\"!isIconButton ? '6px' : '0px'\"\n          [class.full-icon]=\"isFullIcon\" \n          [hideIfTruncated]=\"collapse\" \n          displayState=\"flex\" \n          requiredHideAttribute=\"icon-collapse\"\n          checkChildrenForAttribute \n          [hideOnTruncatedElement]=\"mrdButtonTextContent\" \n          [parentResizeElement]=\"this.elementRef.nativeElement\">\n        <mrd-icon-group *ngIf=\"iconStateMap\" [svgs]=\"iconStateMap\" [hostElement]=\"buttonContainer\" [disabled]=\"disabled\" [hovered]=\"hovered\" [loading]=\"isLoading\" [size]=\"iconSizeNumber\"></mrd-icon-group>\n        <ng-container *ngIf=\"!iconStateMap && iconDefinition\" [ngTemplateOutlet]=\"definiertesIcon\"></ng-container>\n    </span>\n\n\n   \n    <!-- Rechter Icon-Container -->\n    <span class=\"mrd-button-icon-content\" *ngIf=\"!isSpecificButton && !iconStateMap\" \n          [class.full-icon]=\"isFullIcon\" \n          [hideIfTruncated]=\"collapse\" \n          displayState=\"flex\" \n          requiredHideAttribute=\"icon-collapse\"\n          checkChildrenForAttribute \n          [hideOnTruncatedElement]=\"mrdButtonTextContent\" \n          [parentResizeElement]=\"this.elementRef.nativeElement\">\n      <ng-content select=\"mrd-icon[icon-end], [mrd-icon][icon-end]\"></ng-content>\n    </span>\n  </span>\n\n  <!-- Die Progress-Bar eines Buttons (nicht f\u00FCr Icon-, Fab- und Mini-Fab-Buttons) -->\n  <mrd-progress-bar class=\"mrd-button-progress-bar\"\n    *ngIf=\"!isIconButton && (isLoading || loading?.value || loadingProgress?.value || loadingProgress?.value === 0)\"\n    [value]=\"loadingProgress?.value\" [mode]=\"loadingProgress ? 'determinate' : 'indeterminate'\" [color]=\"progressColor\"></mrd-progress-bar>\n  <!-- Der Progress-Spinner eines Buttons (nur f\u00FCr Icon-, Fab- und Mini-Fab-Buttons) -->\n  <mrd-progress-spinner class=\"mrd-button-progress-spinner\"\n    *ngIf=\"isIconButton && (isLoading || loading?.value || loadingProgress?.value || loadingProgress?.value === 0)\"\n    [value]=\"loadingProgress?.value\" [mode]=\"loadingProgress ? 'determinate' : 'indeterminate'\" [color]=\"progressColor\"></mrd-progress-spinner>\n</button>\n\n<ng-template #definiertesIcon>\n  <mrd-icon [icon]=\"iconDefinition.symbol\"\n    [outline]=\"iconDefinition.outer === 'outline'\"\n    [full]=\"iconDefinition.outer === 'full'\"\n    [dashed]=\"iconDefinition.outer === 'dashed'\"\n    [direction]=\"iconDefinition.direction\"\n    [size]=\"iconSizeNumber\"></mrd-icon>\n</ng-template>\n", styles: [":host{position:relative;display:inline-flex;flex-direction:column;justify-content:center;align-items:center;max-width:100%}:host.active{z-index:10}.mrd-button-container{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:center;min-height:var(--min-height);height:inherit;max-width:100%;width:100%;padding:var(--padding);font-size:var(--font-size);font-family:var(--font-family);font-weight:var(--font-weight);letter-spacing:.1px;border-radius:var(--border-radius);color:var(--text-color)}.mrd-button-container .mrd-button-content{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;z-index:1;width:100%}.mrd-button-container .mrd-button-content .mrd-button-icon-content{display:flex;flex-direction:row;align-items:center;justify-content:center}.mrd-button-container .mrd-button-content .mrd-button-text-content{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:20px}.mrd-button-container .mrd-button-content.isCollapsed ::ng-deep [mrd-icon],.mrd-button-container .mrd-button-content.isCollapsed ::ng-deep mrd-icon{margin:0 2px}.mrd-button-container .mrd-button-content.isCollapsed .mrd-button-text-content{padding:0 16px}.mrd-button-container.disabled{color:var(--disabled-text-color);cursor:initial}.mrd-button-container.disabled .mrd-button-background{border:var(--disabled-border);background-color:var(--disabled-bg-color)}.mrd-button-container:hover:not(.disabled),.mrd-button-container.hovered:not(.disabled),.mrd-button-container.touch-hovered:not(.disabled){color:var(--hover-text-color)}.mrd-button-container:hover:not(.disabled) .mrd-button-background,.mrd-button-container.hovered:not(.disabled) .mrd-button-background,.mrd-button-container.touch-hovered:not(.disabled) .mrd-button-background{border:var(--hover-border);background-color:var(--hover-bg-color)}.mrd-button-container:active:not(.disabled) .mrd-button-background,.mrd-button-container.touch-active:not(.disabled) .mrd-button-background{border:var(--active-border, var(--hover-border));background-color:var(--active-bg-color, var(--hover-bg-color))}.mrd-button-container .mrd-button-background{position:absolute;inset:0;border:var(--border);border-radius:var(--border-radius);background-color:var(--bg-color)}.mrd-button-container .mrd-button-touch-area{position:absolute;inset:-8px}.mrd-button-container.mrd-icon-button{min-width:var(--diameter)!important;height:var(--diameter)}.mrd-button-container.mrd-icon-button .mrd-button-background{min-height:unset;width:var(--diameter);height:var(--diameter)}.mrd-button-container.mrd-icon-button ::ng-deep [mrd-icon],.mrd-button-container.mrd-icon-button ::ng-deep mrd-icon{margin:0!important;font-size:calc(var(--diameter) / 2)}.mrd-button-container.mrd-icon-button .mrd-button-icon-content.full-icon ::ng-deep [mrd-icon],.mrd-button-container.mrd-icon-button .mrd-button-icon-content.full-icon ::ng-deep mrd-icon{font-size:var(--diameter)}.mrd-button-container.mrd-toggle-button{padding:0 44px;transition:color .2s}.mrd-button-container.mrd-toggle-button.mrd-toggle-selected{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040;transform:scale(1.15);z-index:10}.mrd-button-container.mrd-toggle-button:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040;z-index:5}.mrd-button-container.mrd-toggle-button:hover{z-index:5}.mrd-button-container.mrd-toggle-button .mrd-button-background{transition:background-color .2s}.mrd-button-container.mrd-toggle-button:not(.mrd-toggle-selected) .mrd-button-background{background-color:var(--unselected-color)}.mrd-button-container ::ng-deep [mrd-icon],.mrd-button-container ::ng-deep mrd-icon{font-size:1.5em;margin-right:4px;margin-top:2px;width:var(--icon-size);height:var(--icon-size);min-width:1em}.mrd-button-container ::ng-deep [mrd-icon][icon-end],.mrd-button-container ::ng-deep mrd-icon[icon-end]{margin-right:0;margin-left:4px}.mrd-button-progress-bar{position:absolute;bottom:10%;left:5px;right:5px;height:10%;min-height:10%}.mrd-button-progress-spinner{position:absolute;top:3px;left:3px;width:calc(100% - 6px)!important;height:calc(100% - 6px)!important}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { mrdButtonTextContent: [{
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
        }], click: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXMtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvcy1tb2R1bGVzL21yZC1zLWJ1dHRvbi9jb21wb25lbnRzL21yZC1zLWJ1dHRvbi9tcmQtcy1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9zLW1vZHVsZXMvbXJkLXMtYnV0dG9uL2NvbXBvbmVudHMvbXJkLXMtYnV0dG9uL21yZC1zLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdELGtCQUFrQixFQUF5QyxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNsTCxPQUFPLEVBQUUsc0JBQXNCLEVBQW1CLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6RSxPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFhLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6TSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbkUsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7Ozs7Ozs7Ozs7OztJQ3FDNUIsZ0NBTzREO0lBQzFELHFCQUF1RjtJQUN6RixpQkFBTzs7OztJQVJELDhDQUE4QjtJQUM5QixpREFBNEIsK0JBQUEsd0RBQUE7OztJQWtCOUIscUNBQW9NOzs7O0lBQS9KLDJDQUFxQixvQkFBQSw4QkFBQSw0QkFBQSw4QkFBQSxnQ0FBQTs7O0lBQzFELDRCQUEwRzs7OztJQUFwRCx1Q0FBb0M7OztJQVY5RixnQ0FRNEQ7SUFDeEQsa0dBQW9NO0lBQ3BNLDhGQUEwRztJQUM5RyxpQkFBTzs7OztJQVZELG9F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TUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztRQUNuRywwR0FBMEc7UUFFMUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBK0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBZ0IsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQWdCLENBQUM7UUFDekwsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBK0IsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBZ0IsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQWdCLENBQUM7UUFDNUwsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBK0IsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBZ0IsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQWdCLENBQUM7UUFDbE0sSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBK0IsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBZ0IsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQWdCLENBQUM7UUFFOUwsSUFBSSxDQUFDLFlBQVks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QUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBUXRDLFdBQVc7a0JBQTFCLEtBQUs7WUFRMkMsa0JBQWtCO2tCQUFsRSxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBZVMsa0JBQWtCO2tCQUE5RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBUXBCLElBQUk7a0JBQW5CLEtBQUs7WUFRVSxLQUFLO2tCQUFwQixLQUFLO1lBRVUsWUFBWTtrQkFBM0IsS0FBSztZQUV1QyxPQUFPO2tCQUFuRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBU25CLEtBQUs7a0JBQXJCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNcmREZWZpbmVkQnV0dG9uLCBNcmRTQnV0dG9uLCBNcmRTQnV0dG9uU2l6ZSwgTXJkU0J1dHRvblNpemVUeXBlLCBNcmRTQnV0dG9uU3RhdGVDb2xvciwgTXJkU0J1dHRvblRoZW1lLCBNcmRTQnV0dG9uVHlwZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL21vZGVsL2NvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IEJhc2VQdXNoU3RyYXRlZ3lPYmplY3QsIE9ic2VydmFibGVWYWx1ZSwgVXRpbCB9IGZyb20gJ21yZC1jb3JlJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFJlbmRlcmVyMiwgVmlld0NoaWxkLCBib29sZWFuQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1yZENvbmZpZ01vZGVsIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vbW9kZWwvY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgQ29uZmlnVXRpbCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29uZmlnLnV0aWwnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQgeyBTdmdTdGF0ZU1hcCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL21yZC1pY29uLWdyb3VwL21yZC1pY29uLWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1yZEljb25EZWZpbml0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3NlcnZpY2UvbXJkLWljb24tc3ltYm9sLXJlZ2lzdHJ5LnNlcnZpY2UnO1xyXG5cclxuLyoqXHJcbiAqIERpZXNlcyBLb21wb25lbnRlIHN0ZWxsdCBkZW4gTXJkLUJ1dHRvbiB6dXIgVmVyZsO8Z3VuZy5cclxuICpcclxuICogRGVyIEJ1dHRvbiBrYW5uIG1pdHRlbHMgZGVyIGVudHNwcmVjaGVuZGVuIEF0dHJpYnV0ZSBpbiBmb2xnZW5kZW4gU3RpbGVuIGRhcmdlc3RlbGx0IHdlcmRlbjpcclxuICogLSBTdGFuZGFyZC1CdXR0b24gKGRlZmF1bHQpXHJcbiAqIC0gSWNvbi1CdXR0b24gKEF0dHJpYnV0bmFtZTogaWNvbi1idXR0b24pXHJcbiAqIC0gUmFpc2VkLUJ1dHRvbiAoQXR0cmlidXRuYW1lOiByYWlzZWQtYnV0dG9uKVxyXG4gKiAtIE91dGxpbmUtQnV0dG9uIChBdHRyaWJ1dG5hbWU6IG91dGxpbmUtYnV0dG9uKVxyXG4gKiAtIEZsYXQtQnV0dG9uIChBdHRyaWJ1dG5hbWU6IGZsYXQtYnV0dG9uKVxyXG4gKiAtIEZhYi1CdXR0b24gKEF0dHJpYnV0bmFtZTogZmFiLWJ1dHRvbilcclxuICogLSBNaW5pRmFiLUJ1dHRvbiAoQXR0cmlidXRuYW1lOiBtaW5pRmFiLWJ1dHRvbilcclxuICpcclxuICogV2VpdGVyaGluIGvDtm5uZW4gZGllIHN0YW5kYXJkIFRoZW1lcyAocHJpbWFyeSwgYWNjZW50LCB3YXJuKSBmw7xyIGRpZSBIaW50ZXJncnVuZC0gYnp3LiBUZXh0ZmFyYmUgZmVzdGdlbGVndCB3ZXJkZW4gKGplIG5hY2ggU3R5bGUpLlxyXG4gKlxyXG4gKiBGw7xyIHdlaXRlcmUgQW5wYXNzdW5nZW4gc2llaGUgZGllIEluZm9ybWF0aW9uZW4gZGVyIGVpbnplbG5lbiBBdHRyaWJ1dGUgb2RlciBkaWUgRG9rdW1lbnRhdGlvbi5cclxuICpcclxuICogQGNsYXNzIE1yZFNCdXR0b25Db21wb25lbnRcclxuICogQGV4dGVuZHMge0Jhc2VQdXNoU3RyYXRlZ3lPYmplY3R9XHJcbiAqIEBpbXBsZW1lbnRzIHtBZnRlclZpZXdJbml0fVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtcmQtcy1idXR0b24nLFxyXG4gIGhvc3Q6IHtcclxuICAgJ1tzdHlsZS5taW4td2lkdGhdJzogJyFjb2xsYXBzZSA/IFwiZml0LWNvbnRlbnRcIiA6IFwidW5zZXRcIicsXHJcbiAgICdbc3R5bGUubWFyZ2luXSc6ICd0b2dnbGUgPyBcIjAgLTE2cHhcIiA6IFwidW5zZXRcIicsXHJcbiAgICdbc3R5bGUudHJhbnNpdGlvbl0nOiAndG9nZ2xlID8gXCJ0cmFuc2Zvcm0gMC4yc1wiIDogXCJ1bnNldFwiJyxcclxuICAgJ1tjbGFzcy5hY3RpdmVdJzogJ3RvZ2dsZSAmJiB0b2dnbGVTZWxlY3RlZCcsXHJcbiAgICcobW91c2VlbnRlciknOiAnb25Nb3VzZUVudGVyKCknLFxyXG4gICAnKG1vdXNlbGVhdmUpJzogJ29uTW91c2VMZWF2ZSgpJ1xyXG4gIH0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1zLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLXMtYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZFNCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAvKipcclxuICAgKiBSZWZlcmVueiBhdWYgZGFzIFRleHQtRWxlbWVudCBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50UmVmPEhUTUxFbGVtZW50Pn1cclxuICAgKiBAbWVtYmVyb2YgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBWaWV3Q2hpbGQoJ21yZEJ1dHRvblRleHRDb250ZW50Jywge3N0YXRpYzogdHJ1ZX0pIG1yZEJ1dHRvblRleHRDb250ZW50PzogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZmVyZW56IGF1ZiBkYXMgVG91Y2gtQXJlYS1FbGVtZW50IGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+fVxyXG4gICAqIEBtZW1iZXJvZiBNcmRTQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQFZpZXdDaGlsZCgnYnV0dG9uVG91Y2hBcmVhJywge3N0YXRpYzogdHJ1ZX0pIGJ1dHRvblRvdWNoQXJlYT86IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCB3ZWxjaGVzIFRoZW1lIGRlciBCdXR0b24gaGF0LlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZFNCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgdGhlbWU/OiBNcmRTQnV0dG9uVHlwZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBlaW4gRWRpdC1CdXR0b24gaXN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZFNCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnZWRpdC1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZWRpdEJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdzYXZlLWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzYXZlQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHthbGlhczogJ2NhbmNlbC1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgY2FuY2VsQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHthbGlhczogJ2Nsb3NlLWljb24tYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGNsb3NlSWNvbkJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdkZWxldGUtYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGRlbGV0ZUJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdhZGQtYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGFkZEJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGVpbiBUb2dnbGUtQnV0dG9uIGlzdC5cclxuICAgKiBcclxuICAgKiBUb2dnbGUtQnV0dG9ucyBzb2xsdGVuIGltbWVyIGlubmVyaGFsYiBlaW5lciBUb2dnbGUtQnV0dG9uLUdyb3VwIHZlcndlbmRldCB3ZXJkZW4uXHJcbiAgICogU3RhbmRhcmRtw6TDn2lnIGhhYmVuIHNpZSBlaW5lbiB3ZWnDn2VuIEhpbnRlcmdydW5kIHVuZCBkaWUgVGV4dGZhcmJlIGlzdCBzY2h3YXJ6LCBhdcOfZXJkZW0gYmVzaXR6ZW4gc2llIGltIHNlbGVrdGllcnRlbiBadXN0YW5kIGVpbmVuIFNjaGF0dGVuLlxyXG4gICAqIFxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRTQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ3RvZ2dsZS1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSB0b2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiwgYWxzIFRvZ2dsZS1CdXR0b24sIHNlbGVrdGllcnQgaXN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZFNCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnc2VsZWN0ZWQnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSB0b2dnbGVTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGRlYWt0aXZpZXJ0IGlzdC5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRTQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBkZWFrdGl2aWVydCBpc3QuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGhvdmVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRWluZSBPYnNlcnZhYmxlVmFsdWUsIGRpZSDDvGJlcmdlYmVuIHdlcmRlbiBrYW5uLCB1bSB6dSBiZXN0aW1tZW4sXHJcbiAgICogb2IgZGVyIEJ1dHRvbiBlaW5lbiBMYWRlYmFsa2VuL0xhZGVzcGlubmVyIGFuemVpZ2VuIHNvbGwuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBsb2FkaW5nPzogT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+O1xyXG5cclxuICAvKipcclxuICAgKiBFaW4gYm9vbGVhbiwgZGVyIGJlc3RpbW10LCBvYiBkZXIgQnV0dG9uIGVpbmVuIExhZGViYWxrZW4vTGFkZXNwaW5uZXIgYW56ZWlnZW4gc29sbC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRTQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVpbmUgT2JzZXJ2YWJsZVZhbHVlLCBkaWUgw7xiZXJnZWJlbiB3ZXJkZW4ga2FubiwgdW0gZGVuIEZvcnRzY2hyaXR0IGRlcyBMYWRlYmFsa2Vucy9MYWRlc3Bpbm5lcnMgenUgYmVzdGltbWVuLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09ic2VydmFibGVWYWx1ZTxudW1iZXI+fVxyXG4gICAqIEBtZW1iZXJvZiBNcmRTQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIGxvYWRpbmdQcm9ncmVzcz86IE9ic2VydmFibGVWYWx1ZTxudW1iZXI+O1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uLVRleHQgdmVyc2Nod2luZGV0LCB3ZW5uIGVyIHp1IGxhbmcgaXN0IHVuZCBhdXNnZXB1bmt0ZXQgd2VyZGVuIHfDvHJkZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRTQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgLypASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pKi8gcHVibGljIGNvbGxhcHNlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgXHJcbiAgcHJpdmF0ZSBfY29sbGFwc2VUbzogTXJkU0J1dHRvblNpemVUeXBlID0gTXJkU0J1dHRvblNpemVUeXBlLklDT047XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZWluZW4gVG9vbHRpcCBhbnplaWdlbiBzb2xsLlxyXG4gICAqXHJcbiAgICogRGVyIFRvb2x0aXAtVGV4dCB3aXJkIHN0YW5kYXJkbcOkw59pZyBhdXMgZGVtIEluaGFsdCBkZXMgQnV0dG9ucyBvaG5lIGR1cmNoIFttcmQtaWNvbl0gZ2VrZW5uemVpY2huZXRlIEljb25zIGdlbmVyaWVydC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRTQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ3Rvb2x0aXAnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2hvd1Rvb2x0aXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGVyIFRleHQgZGVzIFRvb2x0aXBzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0b29sdGlwVGV4dD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIFRvb2x0aXAgbnVyIGFuZ2V6ZWlndCB3ZXJkZW4gc29sbCwgd2VubiBkZXIgQnV0dG9uLVRleHQgYXVzZ2VwdW5rdGV0IHdpcmQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNldCB0b29sdGlwSWZUcnVuY2F0ZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuc2hvd1Rvb2x0aXAgPSB2YWx1ZSB8fCB0aGlzLnNob3dUb29sdGlwO1xyXG4gICAgdGhpcy5fdG9vbHRpcElmVHJ1bmNhdGVkID0gdmFsdWU7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgdG9vbHRpcElmVHJ1bmNhdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXBJZlRydW5jYXRlZDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfdG9vbHRpcElmVHJ1bmNhdGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBUb29sdGlwIG51ciBhbmdlemVpZ3Qgd2VyZGVuIHNvbGwsIHdlbm4gZGVyIEJ1dHRvbiBjb2xsYWJpZXJ0IGlzdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRTQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgdG9vbHRpcElmQ29sbGFwc2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIEljb24gZGVzIEJ1dHRvbnMgZGllIHZvbGxlIEdyw7bDn2UgZGVzIEJ1dHRvbnMgZWlubmVobWVuIHNvbGwuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzaXplOiBNcmRTQnV0dG9uU2l6ZVR5cGUgPSBNcmRTQnV0dG9uU2l6ZVR5cGUuQklHO1xyXG5cclxuICAvKipcclxuICAgKiBEZXIgV2VydCBkZXMgQnV0dG9ucyBhbHMgVG9nZ2xlLUJ1dHRvbi5cclxuICAgKiBcclxuICAgKiBAdHlwZSB7YW55fVxyXG4gICAqIEBtZW1iZXJvZiBNcmRTQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIHZhbHVlPzogYW55O1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgaWNvblN0YXRlTWFwOiBTdmdTdGF0ZU1hcHx1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGljb25FbmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRGFzIEtsaWNrLUV2ZW50IGR1cmNoIGRlbiBOdXR6ZXIuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPEV2ZW50Pn1cclxuICAgKiBAbWVtYmVyb2YgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2xpY2s6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRGllIEtvbmZpZ3VyYXRpb24gZGVzIE1yZC1CdXR0b25zLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAdHlwZSB7TXJkQ29uZmlnTW9kZWx9XHJcbiAgICogQG1lbWJlcm9mIE1yZFNCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBwcml2YXRlIF9jb25maWc6IE1yZENvbmZpZ01vZGVsID0gQ29uZmlnVXRpbC5nZXRDb25maWcoKTtcclxuXHJcbiAgcHJpdmF0ZSBtb3VzZUVudGVyTGlzdGVuZXI/OiAoKSA9PiB2b2lkO1xyXG4gIHByaXZhdGUgbW91c2VMZWF2ZUxpc3RlbmVyPzogKCkgPT4gdm9pZDtcclxuXHJcbiAgcHJpdmF0ZSB1bmNvbGxhcHNlZEFwcGVhcmFuY2U/OiBNcmRTQnV0dG9uU2l6ZVR5cGU7XHJcblxyXG4gIHByaXZhdGUgYnV0dG9uQ29uZmlnPzogTXJkU0J1dHRvbjtcclxuICBwcml2YXRlIHRoZW1lQ29uZmlnPzogTXJkU0J1dHRvblRoZW1lO1xyXG4gIHByaXZhdGUgc2l6ZUNvbmZpZz86IE1yZFNCdXR0b25TaXplO1xyXG4gIFxyXG4gIHB1YmxpYyB0ZXh0Q29sb3I/OiBzdHJpbmc7XHJcbiAgcHVibGljIGhvdmVyVGV4dENvbG9yPzogc3RyaW5nO1xyXG4gIHB1YmxpYyBkaXNhYmxlZFRleHRDb2xvcj86IHN0cmluZztcclxuICBwdWJsaWMgYWN0aXZlVGV4dENvbG9yPzogc3RyaW5nO1xyXG4gIHB1YmxpYyBiZ0NvbG9yPzogc3RyaW5nO1xyXG4gIHB1YmxpYyBob3ZlckJnQ29sb3I/OiBzdHJpbmc7XHJcbiAgcHVibGljIGRpc2FibGVkQmdDb2xvcj86IHN0cmluZztcclxuICBwdWJsaWMgYWN0aXZlQmdDb2xvcj86IHN0cmluZztcclxuICBwdWJsaWMgYm9yZGVyPzogc3RyaW5nO1xyXG4gIHB1YmxpYyBob3ZlckJvcmRlcj86IHN0cmluZztcclxuICBwdWJsaWMgZGlzYWJsZWRCb3JkZXI/OiBzdHJpbmc7XHJcbiAgcHVibGljIGFjdGl2ZUJvcmRlcj86IHN0cmluZztcclxuICBwdWJsaWMgcHJvZ3Jlc3NDb2xvcj86IHN0cmluZztcclxuICBwdWJsaWMgaG92ZXJQcm9ncmVzc0NvbG9yPzogc3RyaW5nO1xyXG4gIHB1YmxpYyBkaXNhYmxlZFByb2dyZXNzQ29sb3I/OiBzdHJpbmc7XHJcbiAgcHVibGljIGFjdGl2ZVByb2dyZXNzQ29sb3I/OiBzdHJpbmc7XHJcbiAgcHVibGljIHRvZ2dsZVVuc2VsZWN0ZWRDb2xvcj86IHN0cmluZztcclxuXHJcbiAgcHVibGljIGJvcmRlclJhZGl1cz86IHN0cmluZztcclxuICBwdWJsaWMgbWluSGVpZ2h0Pzogc3RyaW5nO1xyXG4gIHB1YmxpYyBmb250U2l6ZT86IHN0cmluZztcclxuICBwdWJsaWMgZm9udEZhbWlseT86IHN0cmluZztcclxuICBwdWJsaWMgZm9udFdlaWdodD86IHN0cmluZztcclxuICBwdWJsaWMgZGlhbWV0ZXI/OiBzdHJpbmc7XHJcbiAgcHVibGljIGljb25TaXplPzogc3RyaW5nO1xyXG4gIHB1YmxpYyBpY29uU2l6ZU51bWJlcj86IG51bWJlcjtcclxuICBwdWJsaWMgdGV4dEljb25HYXA/OiBzdHJpbmc7XHJcbiAgcHVibGljIHBhZGRpbmc/OiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBpc0ljb25CdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgaXNGdWxsSWNvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpc0NvbGxhcHNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpc0hvdmVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgaXNTcGVjaWZpY0J1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpc1RvdWNoSG92ZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpc1RvdWNoQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBidXR0b25UZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgLyoqIEljb24gZWluZXMgdm9yZGVmaW5pZXJ0ZW4gQnV0dG9ucyBwZXIgbXJkLWljb24gKEZhcmJlIGZvbGd0IGRlbSBUZXh0KTsgbnVyIG9obmUgaWNvblN0YXRlTWFwICovXHJcbiAgcHVibGljIGljb25EZWZpbml0aW9uPzogTXJkSWNvbkRlZmluaXRpb247XHJcbiAgcHVibGljIGRlZmF1bHRCdXR0b25UZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgLy8gcHVibGljIGljb25TdGF0ZU1hcD86IFN2Z1N0YXRlTWFwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+XHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBIaWVyIHNvcmdlbiB3aXIgZGFmw7xyLCBkYXNzIGRlciBTdGFuZGFyZCBDbGljay1IYW5kbGVyIHZvbiBBbmd1bGFyIGVudGZlcm50IHdpcmRcclxuICAgIGNvbnN0IGhvc3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGhvc3QucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XHJcblxyXG4gICAgY29uc3QgbmV3SG9zdDogSFRNTEVsZW1lbnQgPSBob3N0LmNsb25lTm9kZSgpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgbmV3SG9zdC5hcHBlbmRDaGlsZChidXR0b24hKTtcclxuXHJcbiAgICBBcnJheS5mcm9tKGhvc3QuYXR0cmlidXRlcykuZm9yRWFjaChhdHRyID0+IG5ld0hvc3Quc2V0QXR0cmlidXRlKGF0dHIubmFtZSwgYXR0ci52YWx1ZSkpO1xyXG4gICAgaG9zdC5wYXJlbnROb2RlIS5yZXBsYWNlQ2hpbGQobmV3SG9zdCwgaG9zdCk7XHJcbiAgICBuZXdIb3N0LnN0eWxlLm1pbldpZHRoID0gIXRoaXMuY29sbGFwc2UgPyAnZml0LWNvbnRlbnQnIDogJ3Vuc2V0JztcclxuICAgIG5ld0hvc3Quc3R5bGUubWFyZ2luID0gdGhpcy50b2dnbGUgPyAnMCAtMTZweCcgOiAndW5zZXQnO1xyXG4gICAgbmV3SG9zdC5zdHlsZS50cmFuc2l0aW9uID0gdGhpcy50b2dnbGUgPyAndHJhbnNmb3JtIDAuMnMnIDogJ3Vuc2V0JztcclxuICAgIGlmICh0aGlzLnRvZ2dsZSAmJiB0aGlzLnRvZ2dsZVNlbGVjdGVkKSB7XHJcbiAgICAgIG5ld0hvc3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBuZXdIb3N0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vbkNsaWNrKGV2ZW50KSk7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCA9IG5ld0hvc3Q7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5sb2FkaW5nKSkge1xyXG4gICAgICB0aGlzLm1hcmtGb3JDaGVja0lmKHRoaXMubG9hZGluZyEuY2hhbmdlZClcclxuICAgIH1cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmxvYWRpbmdQcm9ncmVzcykpIHtcclxuICAgICAgdGhpcy5tYXJrRm9yQ2hlY2tJZih0aGlzLmxvYWRpbmdQcm9ncmVzcyEuY2hhbmdlZClcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKCk7XHJcblxyXG4gICAgdGhpcy5pc0hvdmVyZWQgPSB0aGlzLmhvdmVyZWQ7XHJcbiAgICAvLyBNYW51ZWxsZXMgQW5ow6RuZ2VuIGRlciBNb3VzZWVudGVyLSB1bmQgTW91c2VsZWF2ZS1MaXN0ZW5lciBtaXQgUmVuZGVyZXIyXHJcbiAgICB0aGlzLm1vdXNlRW50ZXJMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgdGhpcy5pc0hvdmVyZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgdGhpcy5tb3VzZUxlYXZlTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaXNIb3ZlcmVkID0gdGhpcy5ob3ZlcmVkO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tb3VzZUVudGVyTGlzdGVuZXIpIHsgdGhpcy5tb3VzZUVudGVyTGlzdGVuZXIoKTsgfVxyXG4gICAgaWYgKHRoaXMubW91c2VMZWF2ZUxpc3RlbmVyKSB7IHRoaXMubW91c2VMZWF2ZUxpc3RlbmVyKCk7IH1cclxuXHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMub25DbGljayhldmVudCkpO1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUpIHtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfSAgXHJcblxyXG4gIHB1YmxpYyB1cGRhdGVTdHlsZSgpOiB2b2lkIHtcclxuICAgIGxldCBzcGVjaWZpY0J1dHRvbkNvbmZpZzogTXJkRGVmaW5lZEJ1dHRvbnx1bmRlZmluZWQ7XHJcbiAgICBpZiAodGhpcy5lZGl0QnV0dG9uKSB7XHJcbiAgICAgIHRoaXMuaXNTcGVjaWZpY0J1dHRvbiA9IHRydWU7XHJcbiAgICAgIHNwZWNpZmljQnV0dG9uQ29uZmlnID0gdGhpcy5fY29uZmlnLnNCdXR0b24/LmRlZmluZWRCdXR0b25zPy5iZWFyYmVpdGVuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2F2ZUJ1dHRvbikge1xyXG4gICAgICB0aGlzLmlzU3BlY2lmaWNCdXR0b24gPSB0cnVlO1xyXG4gICAgICBzcGVjaWZpY0J1dHRvbkNvbmZpZyA9IHRoaXMuX2NvbmZpZy5zQnV0dG9uPy5kZWZpbmVkQnV0dG9ucz8uc3BlaWNoZXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY2FuY2VsQnV0dG9uKSB7XHJcbiAgICAgIHRoaXMuaXNTcGVjaWZpY0J1dHRvbiA9IHRydWU7XHJcbiAgICAgIHNwZWNpZmljQnV0dG9uQ29uZmlnID0gdGhpcy5fY29uZmlnLnNCdXR0b24/LmRlZmluZWRCdXR0b25zPy5hYmJyZWNoZW47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jbG9zZUljb25CdXR0b24pIHtcclxuICAgICAgdGhpcy5pc1NwZWNpZmljQnV0dG9uID0gdHJ1ZTtcclxuICAgICAgc3BlY2lmaWNCdXR0b25Db25maWcgPSB0aGlzLl9jb25maWcuc0J1dHRvbj8uZGVmaW5lZEJ1dHRvbnM/LnNjaGxpZXNzZW5JY29uO1xyXG4gICAgICB0aGlzLnNpemUgPSBNcmRTQnV0dG9uU2l6ZVR5cGUuRlVMTF9JQ09OO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGVsZXRlQnV0dG9uKSB7XHJcbiAgICAgIHRoaXMuaXNTcGVjaWZpY0J1dHRvbiA9IHRydWU7XHJcbiAgICAgIHNwZWNpZmljQnV0dG9uQ29uZmlnID0gdGhpcy5fY29uZmlnLnNCdXR0b24/LmRlZmluZWRCdXR0b25zPy5sb2VzY2hlbjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmFkZEJ1dHRvbikge1xyXG4gICAgICB0aGlzLmlzU3BlY2lmaWNCdXR0b24gPSB0cnVlO1xyXG4gICAgICBzcGVjaWZpY0J1dHRvbkNvbmZpZyA9IHRoaXMuX2NvbmZpZy5zQnV0dG9uPy5kZWZpbmVkQnV0dG9ucz8uaGluenVmdWVnZW47XHJcbiAgICB9XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQoc3BlY2lmaWNCdXR0b25Db25maWcpKSB7XHJcbiAgICAgIHRoaXMudGhlbWUgPz89IHNwZWNpZmljQnV0dG9uQ29uZmlnIS50aGVtZTtcclxuICAgICAgdGhpcy5kZWZhdWx0QnV0dG9uVGV4dCA9IHNwZWNpZmljQnV0dG9uQ29uZmlnIS50ZXh0ID8/ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGhlbWUgPz89IE1yZFNCdXR0b25UeXBlLlRFWFRfT05MWTtcclxuICAgIHRoaXMuYnV0dG9uQ29uZmlnID0gdGhpcy5fY29uZmlnLnNCdXR0b24hO1xyXG4gICAgdGhpcy50aGVtZUNvbmZpZyA9IHRoaXMudGhlbWUgIT09IE1yZFNCdXR0b25UeXBlLlRFWFRfT05MWSA/IHRoaXMuYnV0dG9uQ29uZmlnW3RoaXMudGhlbWVdISA6IHRoaXMuYnV0dG9uQ29uZmlnITtcclxuICAgIHRoaXMuc2l6ZUNvbmZpZyA9IHRoaXMuc2l6ZSAhPT0gTXJkU0J1dHRvblNpemVUeXBlLkJJRyA/IHRoaXMuYnV0dG9uQ29uZmlnW3RoaXMuc2l6ZV0hIDogdGhpcy5idXR0b25Db25maWchO1xyXG5cclxuICAgIHRoaXMuaXNJY29uQnV0dG9uID0gdGhpcy5zaXplID09PSBNcmRTQnV0dG9uU2l6ZVR5cGUuSUNPTiB8fCB0aGlzLnNpemUgPT09IE1yZFNCdXR0b25TaXplVHlwZS5GVUxMX0lDT047XHJcbiAgICB0aGlzLmlzRnVsbEljb24gPSB0aGlzLnNpemUgPT09IE1yZFNCdXR0b25TaXplVHlwZS5GVUxMX0lDT047XHJcblxyXG4gICAgdGhpcy50ZXh0Q29sb3IgPSB0aGlzLnRoZW1lQ29uZmlnLnRleHQ/LmRlZmF1bHQgfHwgdGhpcy5idXR0b25Db25maWcudGV4dD8uZGVmYXVsdDtcclxuICAgIHRoaXMuaG92ZXJUZXh0Q29sb3IgPSB0aGlzLnRoZW1lQ29uZmlnLnRleHQ/LmhvdmVyIHx8IHRoaXMuYnV0dG9uQ29uZmlnLnRleHQ/LmhvdmVyO1xyXG4gICAgdGhpcy5kaXNhYmxlZFRleHRDb2xvciA9IHRoaXMudGhlbWVDb25maWcudGV4dD8uZGlzYWJsZWQgfHwgdGhpcy5idXR0b25Db25maWcudGV4dD8uZGlzYWJsZWQ7XHJcbiAgICB0aGlzLmFjdGl2ZVRleHRDb2xvciA9IHRoaXMudGhlbWVDb25maWcudGV4dD8uYWN0aXZlIHx8IHRoaXMuYnV0dG9uQ29uZmlnLnRleHQ/LmFjdGl2ZTtcclxuXHJcbiAgICB0aGlzLmJnQ29sb3IgPSB0aGlzLnRoZW1lQ29uZmlnLmJhY2tncm91bmQ/LmRlZmF1bHQgfHwgdGhpcy5idXR0b25Db25maWcuYmFja2dyb3VuZD8uZGVmYXVsdDtcclxuICAgIHRoaXMuaG92ZXJCZ0NvbG9yID0gdGhpcy50aGVtZUNvbmZpZy5iYWNrZ3JvdW5kPy5ob3ZlciB8fCB0aGlzLmJ1dHRvbkNvbmZpZy5iYWNrZ3JvdW5kPy5ob3ZlcjtcclxuICAgIHRoaXMuZGlzYWJsZWRCZ0NvbG9yID0gdGhpcy50aGVtZUNvbmZpZy5iYWNrZ3JvdW5kPy5kaXNhYmxlZCB8fCB0aGlzLmJ1dHRvbkNvbmZpZy5iYWNrZ3JvdW5kPy5kaXNhYmxlZDtcclxuICAgIHRoaXMuYWN0aXZlQmdDb2xvciA9IHRoaXMudGhlbWVDb25maWcuYmFja2dyb3VuZD8uYWN0aXZlIHx8IHRoaXMuYnV0dG9uQ29uZmlnLmJhY2tncm91bmQ/LmFjdGl2ZTtcclxuXHJcbiAgICB0aGlzLnByb2dyZXNzQ29sb3IgPSB0aGlzLnRoZW1lQ29uZmlnLnByb2dyZXNzPy5kZWZhdWx0IHx8IHRoaXMuYnV0dG9uQ29uZmlnLnByb2dyZXNzPy5kZWZhdWx0O1xyXG4gICAgdGhpcy5ob3ZlclByb2dyZXNzQ29sb3IgPSB0aGlzLnRoZW1lQ29uZmlnLnByb2dyZXNzPy5ob3ZlciB8fCB0aGlzLmJ1dHRvbkNvbmZpZy5wcm9ncmVzcz8uaG92ZXI7XHJcbiAgICB0aGlzLmRpc2FibGVkUHJvZ3Jlc3NDb2xvciA9IHRoaXMudGhlbWVDb25maWcucHJvZ3Jlc3M/LmRpc2FibGVkIHx8IHRoaXMuYnV0dG9uQ29uZmlnLnByb2dyZXNzPy5kaXNhYmxlZDtcclxuICAgIHRoaXMuYWN0aXZlUHJvZ3Jlc3NDb2xvciA9IHRoaXMudGhlbWVDb25maWcucHJvZ3Jlc3M/LmFjdGl2ZSB8fCB0aGlzLmJ1dHRvbkNvbmZpZy5wcm9ncmVzcz8uYWN0aXZlO1xyXG4gICAgLy8gdGhpcy50b2dnbGVVbnNlbGVjdGVkQ29sb3IgPSB0aGlzLnRoZW1lQ29uZmlnLnVuc2VsZWN0ZWRCZ0NvbG9yIHx8IHRoaXMuYnV0dG9uQ29uZmlnLnVuc2VsZWN0ZWRCZ0NvbG9yO1xyXG5cclxuICAgIHRoaXMuYm9yZGVyID0gXy5pc09iamVjdCh0aGlzLnRoZW1lQ29uZmlnLmJvcmRlcikgPyAodGhpcy50aGVtZUNvbmZpZy5ib3JkZXIgYXMgTXJkU0J1dHRvblN0YXRlQ29sb3IpPy5kZWZhdWx0IDogdGhpcy50aGVtZUNvbmZpZy5ib3JkZXIgYXMgc3RyaW5nIHx8IHRoaXMuYnV0dG9uQ29uZmlnLmJvcmRlciBhcyBzdHJpbmc7XHJcbiAgICB0aGlzLmhvdmVyQm9yZGVyID0gXy5pc09iamVjdCh0aGlzLnRoZW1lQ29uZmlnLmJvcmRlcikgPyAodGhpcy50aGVtZUNvbmZpZy5ib3JkZXIgYXMgTXJkU0J1dHRvblN0YXRlQ29sb3IpPy5ob3ZlciA6IHRoaXMudGhlbWVDb25maWcuYm9yZGVyIGFzIHN0cmluZyB8fCB0aGlzLmJ1dHRvbkNvbmZpZy5ib3JkZXIgYXMgc3RyaW5nO1xyXG4gICAgdGhpcy5kaXNhYmxlZEJvcmRlciA9IF8uaXNPYmplY3QodGhpcy50aGVtZUNvbmZpZy5ib3JkZXIpID8gKHRoaXMudGhlbWVDb25maWcuYm9yZGVyIGFzIE1yZFNCdXR0b25TdGF0ZUNvbG9yKT8uZGlzYWJsZWQgOiB0aGlzLnRoZW1lQ29uZmlnLmJvcmRlciBhcyBzdHJpbmcgfHwgdGhpcy5idXR0b25Db25maWcuYm9yZGVyIGFzIHN0cmluZztcclxuICAgIHRoaXMuYWN0aXZlQm9yZGVyID0gXy5pc09iamVjdCh0aGlzLnRoZW1lQ29uZmlnLmJvcmRlcikgPyAodGhpcy50aGVtZUNvbmZpZy5ib3JkZXIgYXMgTXJkU0J1dHRvblN0YXRlQ29sb3IpPy5hY3RpdmUgOiB0aGlzLnRoZW1lQ29uZmlnLmJvcmRlciBhcyBzdHJpbmcgfHwgdGhpcy5idXR0b25Db25maWcuYm9yZGVyIGFzIHN0cmluZztcclxuXHJcbiAgICB0aGlzLmJvcmRlclJhZGl1cyA9IHRoaXMuc2l6ZUNvbmZpZy5ib3JkZXJSYWRpdXMgfHwgdGhpcy5idXR0b25Db25maWcuYm9yZGVyUmFkaXVzO1xyXG4gICAgdGhpcy5mb250RmFtaWx5ID0gdGhpcy5zaXplQ29uZmlnLmZvbnQ/LmZhbWlseSB8fCB0aGlzLmJ1dHRvbkNvbmZpZy5mb250Py5mYW1pbHkgfHwgdGhpcy5fY29uZmlnLmJhc2VGb250IS5mYW1pbHk7XHJcbiAgICB0aGlzLmZvbnRTaXplID0gdGhpcy5zaXplQ29uZmlnLmZvbnQ/LnNpemUgfHwgdGhpcy5idXR0b25Db25maWcuZm9udD8uc2l6ZSB8fCB0aGlzLl9jb25maWcuYmFzZUZvbnQhLnNpemU7XHJcbiAgICB0aGlzLmZvbnRXZWlnaHQgPSB0aGlzLnNpemVDb25maWcuZm9udD8ud2VpZ2h0IHx8IHRoaXMuYnV0dG9uQ29uZmlnLmZvbnQ/LndlaWdodCB8fCB0aGlzLl9jb25maWcuYmFzZUZvbnQhLndlaWdodDtcclxuICAgIHRoaXMubWluSGVpZ2h0ID0gdGhpcy5zaXplQ29uZmlnLm1pbkhlaWdodCB8fCB0aGlzLmJ1dHRvbkNvbmZpZy5taW5IZWlnaHQ7XHJcbiAgICB0aGlzLmRpYW1ldGVyID0gdGhpcy5zaXplQ29uZmlnLmRpYW1ldGVyIHx8IHRoaXMuYnV0dG9uQ29uZmlnLmRpYW1ldGVyO1xyXG4gICAgdGhpcy5pY29uU2l6ZSA9IHRoaXMuc2l6ZUNvbmZpZy5pY29uU2l6ZSB8fCB0aGlzLmJ1dHRvbkNvbmZpZy5pY29uU2l6ZTtcclxuICAgIHRoaXMuaWNvblNpemVOdW1iZXIgPSB0aGlzLnNpemVDb25maWcuaWNvblNpemVOdW1iZXIgfHwgdGhpcy5idXR0b25Db25maWcuaWNvblNpemVOdW1iZXI7XHJcbiAgICB0aGlzLnRleHRJY29uR2FwID0gdGhpcy5zaXplQ29uZmlnLnRleHRJY29uR2FwIHx8IHRoaXMuYnV0dG9uQ29uZmlnLnRleHRJY29uR2FwO1xyXG4gICAgdGhpcy5wYWRkaW5nID0gdGhpcy5zaXplQ29uZmlnLnBhZGRpbmcgfHwgdGhpcy5idXR0b25Db25maWcucGFkZGluZztcclxuXHJcbiAgICB0aGlzLmljb25FbmQgPSBzcGVjaWZpY0J1dHRvbkNvbmZpZz8uaWNvbkVuZCA/PyB0aGlzLmljb25FbmQ7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQoc3BlY2lmaWNCdXR0b25Db25maWcpICYmIFV0aWwuaXNEZWZpbmVkKHNwZWNpZmljQnV0dG9uQ29uZmlnIS5pY29uR3JvdXApKSB7XHJcbiAgICAgIHRoaXMuaWNvblN0YXRlTWFwID0ge1xyXG4gICAgICAgIGRlZmF1bHQ6IHNwZWNpZmljQnV0dG9uQ29uZmlnIS5pY29uR3JvdXA/LmRlZmF1bHQgPyBzcGVjaWZpY0J1dHRvbkNvbmZpZyEuaWNvbkdyb3VwLmRlZmF1bHQodGhpcy5pY29uU2l6ZU51bWJlciEpIDogbnVsbCxcclxuICAgICAgICBkaXNhYmxlZDogc3BlY2lmaWNCdXR0b25Db25maWchLmljb25Hcm91cD8uZGlzYWJsZWQgPyBzcGVjaWZpY0J1dHRvbkNvbmZpZyEuaWNvbkdyb3VwLmRpc2FibGVkKHRoaXMuaWNvblNpemVOdW1iZXIhKSA6IG51bGwsXHJcbiAgICAgICAgaG92ZXI6IHNwZWNpZmljQnV0dG9uQ29uZmlnIS5pY29uR3JvdXA/LmhvdmVyID8gc3BlY2lmaWNCdXR0b25Db25maWchLmljb25Hcm91cC5ob3Zlcih0aGlzLmljb25TaXplTnVtYmVyISkgOiBudWxsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGljb25Hcm91cCAoZWlnZW5lIFNWR3MgamUgWnVzdGFuZCkgaGF0IFZvcnJhbmcsIGRhbWl0IGFuZ2VwYXNzdGUgSG9zdC1Db25maWdzIGVyaGFsdGVuIGJsZWliZW5cclxuICAgIHRoaXMuaWNvbkRlZmluaXRpb24gPSBVdGlsLmlzRGVmaW5lZChzcGVjaWZpY0J1dHRvbkNvbmZpZz8uaWNvbkdyb3VwKSA/IHVuZGVmaW5lZCA6IHNwZWNpZmljQnV0dG9uQ29uZmlnPy5pY29uO1xyXG5cclxuICAgIGlmICh0aGlzLm1yZEJ1dHRvblRleHRDb250ZW50KSB7XHJcbiAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IHRoaXMubXJkQnV0dG9uVGV4dENvbnRlbnQubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICB9XHJcbiAgICAvLyBGYWxscyBrZWluIGV4cGxpemlldGVyICd0b29sdGlwVGV4dCcgZ2VzZXR6dCBpc3QsIHdpcmQgZGVyIFRleHQgZGVzIEJ1dHRvbnMgYWxzIFRvb2x0aXAtVGV4dCB2ZXJ3ZW5kZXRcclxuICAgIGlmICghdGhpcy50b29sdGlwVGV4dCkge1xyXG4gICAgICB0aGlzLnRvb2x0aXBUZXh0ID0gdGhpcy5idXR0b25UZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnRvZ2dsZSAmJiB0aGlzLnRvZ2dsZVNlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2ssIHdlbm4gc2ljaCBkZXIgQ29sbGFicy1TdGF0dXMgZGVzIEJ1dHRvbnMgw6RuZGVydC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBpc0NvbGxhcHNlZCBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGtvbGxhYmllcnQgaXN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBidXR0b25Db2xsYXBzZWQoaXNDb2xsYXBzZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIC8vIFdpciByZWFnaWVyZW4gbnVyLCB3ZW5uIHNpY2ggZGVyIFN0YXR1cyDDpG5kZXJ0XHJcbiAgICBpZiAodGhpcy5pc0NvbGxhcHNlZCAhPT0gaXNDb2xsYXBzZWQpIHtcclxuICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9IGlzQ29sbGFwc2VkO1xyXG4gICAgICAvLyBXZW5uICdjb2xsYXBzZVRvJyBnZXNldHp0IGlzdCwgd2lyZCBkZXIgQnV0dG9uIGVudHNwcmVjaGVuZCB1bWdlc3R5bHRcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuX2NvbGxhcHNlVG8pKSB7XHJcbiAgICAgICAgLy8gRGllc2UgV2VydGUgbcO8c3NlbiB6dXLDvGNrZ2VzZXR6dCB3ZXJkZW4sIGRhIHNpZSBmw7xyIGRlbiBuZXVlbiBTdHlsZSBuZXUgZ2VzZXR6dCB3ZXJkZW4gbcO8c3NlblxyXG4gICAgICAgIHRoaXMuYm9yZGVyUmFkaXVzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZm9udFNpemUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5taW5IZWlnaHQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5kaWFtZXRlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmljb25TaXplID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmIChpc0NvbGxhcHNlZCkge1xyXG4gICAgICAgICAgdGhpcy51bmNvbGxhcHNlZEFwcGVhcmFuY2UgPSB0aGlzLnNpemU7XHJcbiAgICAgICAgICB0aGlzLnNpemUgPSB0aGlzLl9jb2xsYXBzZVRvO1xyXG4gICAgICAgICAgdGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zaXplID0gdGhpcy51bmNvbGxhcHNlZEFwcGVhcmFuY2UgfHwgdGhpcy5zaXplO1xyXG4gICAgICAgICAgdGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmNsaWNrLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIjwhLS0gRGVyIGVpZ2VudGxpY2ggSFRNTC1CdXR0b24gLS0+XG48YnV0dG9uIGNsYXNzPVwibXJkLWJ1dHRvbi1jb250YWluZXJcIlxuICAjYnV0dG9uQ29udGFpbmVyXG4gIFtzdHlsZS4tLXRleHQtY29sb3JdPVwidGV4dENvbG9yXCJcbiAgW3N0eWxlLi0taG92ZXItdGV4dC1jb2xvcl09XCJob3ZlclRleHRDb2xvclwiXG4gIFtzdHlsZS4tLWRpc2FibGVkLXRleHQtY29sb3JdPVwiZGlzYWJsZWRUZXh0Q29sb3JcIlxuICBbc3R5bGUuLS1hY3RpdmUtdGV4dC1jb2xvcl09XCJhY3RpdmVUZXh0Q29sb3JcIlxuICBbc3R5bGUuLS1iZy1jb2xvcl09XCJiZ0NvbG9yXCJcbiAgW3N0eWxlLi0taG92ZXItYmctY29sb3JdPVwiaG92ZXJCZ0NvbG9yXCJcbiAgW3N0eWxlLi0tZGlzYWJsZWQtYmctY29sb3JdPVwiZGlzYWJsZWRCZ0NvbG9yXCJcbiAgW3N0eWxlLi0tYWN0aXZlLWJnLWNvbG9yXT1cImFjdGl2ZUJnQ29sb3JcIlxuICBbc3R5bGUuLS1ib3JkZXJdPVwiYm9yZGVyXCJcbiAgW3N0eWxlLi0taG92ZXItYm9yZGVyXT1cImhvdmVyQm9yZGVyXCJcbiAgW3N0eWxlLi0tZGlzYWJsZWQtYm9yZGVyXT1cImRpc2FibGVkQm9yZGVyXCJcbiAgW3N0eWxlLi0tYWN0aXZlLWJvcmRlcl09XCJhY3RpdmVCb3JkZXJcIlxuXG4gIFtzdHlsZS4tLWJvcmRlci1yYWRpdXNdPVwiYm9yZGVyUmFkaXVzXCJcbiAgW3N0eWxlLi0tbWluLWhlaWdodF09XCJtaW5IZWlnaHRcIlxuICBbc3R5bGUuLS1mb250LXNpemVdPVwiZm9udFNpemVcIlxuICBbc3R5bGUuLS1mb250LWZhbWlseV09XCJmb250RmFtaWx5XCJcbiAgW3N0eWxlLi0tZm9udC13ZWlnaHRdPVwiZm9udFdlaWdodFwiXG4gIFtzdHlsZS4tLWRpYW1ldGVyXT1cImRpYW1ldGVyXCJcbiAgW3N0eWxlLi0taWNvbi1zaXplXT1cImljb25TaXplXCJcbiAgW3N0eWxlLi0tcGFkZGluZ109XCJwYWRkaW5nXCJcbiAgW3N0eWxlLi0tdW5zZWxlY3RlZC1jb2xvcl09XCJ0b2dnbGVVbnNlbGVjdGVkQ29sb3JcIlxuXG4gIFtuZ1N0eWxlXT1cInsnbWluLXdpZHRoJzogIWNvbGxhcHNlID8gJ2ZpdC1jb250ZW50JyA6ICd1bnNldCd9XCJcbiAgW2NsYXNzLmhvdmVyZWRdPVwiaG92ZXJlZFwiXG4gIFtjbGFzcy50b3VjaC1ob3ZlcmVkXT1cImlzVG91Y2hIb3ZlcmVkXCJcbiAgW2NsYXNzLnRvdWNoLWFjdGl2ZV09XCJpc1RvdWNoQWN0aXZlXCJcbiAgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgW2NsYXNzLm1yZC1pY29uLWJ1dHRvbl09XCJpc0ljb25CdXR0b25cIlxuICBbbXJkVG9vbFRpcF09XCJ0b29sdGlwVGV4dFwiIFtzaG93T25UcnVuY2F0ZWRFbGVtZW50XT1cInRvb2x0aXBJZlRydW5jYXRlZCA/IG1yZEJ1dHRvblRleHRDb250ZW50IDogdW5kZWZpbmVkXCIgW3Nob3dUb29sVGlwXT1cInNob3dUb29sdGlwIHx8ICh0b29sdGlwSWZDb2xsYXBzZWQgJiYgaXNDb2xsYXBzZWQpXCI+XG4gIDxkaXYgY2xhc3M9XCJtcmQtYnV0dG9uLWJhY2tncm91bmRcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm1yZC1idXR0b24tdG91Y2gtYXJlYVwiICNidXR0b25Ub3VjaEFyZWFcbiAgICAobW91c2VlbnRlcik9XCJpc1RvdWNoSG92ZXJlZCA9IHRydWVcIlxuICAgIChtb3VzZWxlYXZlKT1cImlzVG91Y2hIb3ZlcmVkID0gZmFsc2U7IGlzVG91Y2hBY3RpdmUgPSBmYWxzZVwiXG4gICAgKG1vdXNlZG93bik9XCJpc1RvdWNoQWN0aXZlID0gdHJ1ZVwiXG4gICAgKG1vdXNldXApPVwiaXNUb3VjaEFjdGl2ZSA9IGZhbHNlXCI+PC9kaXY+XG4gIDwhLS0gRGVyIENvbnRlbnQgZGVzIEJ1dHRvbnMgLS0+XG4gIDxzcGFuIGNsYXNzPVwibXJkLWJ1dHRvbi1jb250ZW50XCIgW25nQ2xhc3NdPVwieydpc0NvbGxhcHNlZCc6IGlzQ29sbGFwc2VkfVwiPlxuICAgIDwhLS0gTGlua2VyIEljb24tQ29udGFpbmVyIC0tPlxuICAgIDxzcGFuIGNsYXNzPVwibXJkLWJ1dHRvbi1pY29uLWNvbnRlbnRcIiAqbmdJZj1cIiFpc1NwZWNpZmljQnV0dG9uICYmICFpY29uU3RhdGVNYXBcIlxuICAgICAgICAgIFtjbGFzcy5mdWxsLWljb25dPVwiaXNGdWxsSWNvblwiIFxuICAgICAgICAgIFtoaWRlSWZUcnVuY2F0ZWRdPVwiY29sbGFwc2VcIiBcbiAgICAgICAgICBkaXNwbGF5U3RhdGU9XCJmbGV4XCIgXG4gICAgICAgICAgcmVxdWlyZWRIaWRlQXR0cmlidXRlPVwiaWNvbi1jb2xsYXBzZVwiXG4gICAgICAgICAgY2hlY2tDaGlsZHJlbkZvckF0dHJpYnV0ZSBcbiAgICAgICAgICBbaGlkZU9uVHJ1bmNhdGVkRWxlbWVudF09XCJtcmRCdXR0b25UZXh0Q29udGVudFwiIFxuICAgICAgICAgIFtwYXJlbnRSZXNpemVFbGVtZW50XT1cInRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XCI+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtcmQtaWNvbjpub3QoW2ljb24tZW5kXSksIFttcmQtaWNvbl06bm90KFtpY29uLWVuZF0pXCI+PC9uZy1jb250ZW50PlxuICAgIDwvc3Bhbj5cblxuICAgIDxzcGFuIGNsYXNzPVwibXJkLWJ1dHRvbi1pY29uLWNvbnRlbnRcIiAqbmdJZj1cIihpY29uU3RhdGVNYXAgfHwgaWNvbkRlZmluaXRpb24pICYmICFpY29uRW5kXCJcbiAgICAgICAgICBbc3R5bGUubWFyZ2luLXJpZ2h0XT1cIiFpc0ljb25CdXR0b24gPyAnNnB4JyA6ICcwcHgnXCJcbiAgICAgICAgICBbY2xhc3MuZnVsbC1pY29uXT1cImlzRnVsbEljb25cIiBcbiAgICAgICAgICBbaGlkZUlmVHJ1bmNhdGVkXT1cImNvbGxhcHNlXCIgXG4gICAgICAgICAgZGlzcGxheVN0YXRlPVwiZmxleFwiIFxuICAgICAgICAgIHJlcXVpcmVkSGlkZUF0dHJpYnV0ZT1cImljb24tY29sbGFwc2VcIlxuICAgICAgICAgIGNoZWNrQ2hpbGRyZW5Gb3JBdHRyaWJ1dGUgXG4gICAgICAgICAgW2hpZGVPblRydW5jYXRlZEVsZW1lbnRdPVwibXJkQnV0dG9uVGV4dENvbnRlbnRcIiBcbiAgICAgICAgICBbcGFyZW50UmVzaXplRWxlbWVudF09XCJ0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFwiPlxuICAgICAgICA8bXJkLWljb24tZ3JvdXAgKm5nSWY9XCJpY29uU3RhdGVNYXBcIiBbc3Znc109XCJpY29uU3RhdGVNYXBcIiBbaG9zdEVsZW1lbnRdPVwiYnV0dG9uQ29udGFpbmVyXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2hvdmVyZWRdPVwiaG92ZXJlZFwiIFtsb2FkaW5nXT1cImlzTG9hZGluZ1wiIFtzaXplXT1cImljb25TaXplTnVtYmVyXCI+PC9tcmQtaWNvbi1ncm91cD5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpY29uU3RhdGVNYXAgJiYgaWNvbkRlZmluaXRpb25cIiBbbmdUZW1wbGF0ZU91dGxldF09XCJkZWZpbmllcnRlc0ljb25cIj48L25nLWNvbnRhaW5lcj5cbiAgICA8L3NwYW4+XG4gICAgXG4gICAgPCEtLSBEZXIgVGV4dCBkZXMgQnV0dG9ucyAtLT5cbiAgICA8c3BhbiBjbGFzcz1cIm1yZC1idXR0b24tdGV4dC1jb250ZW50XCIgXG4gICAgICAgICAgKGhpZGRlbkNoYW5nZWQpPVwiYnV0dG9uQ29sbGFwc2VkKCRldmVudClcIiBcbiAgICAgICAgICBbaGlkZUlmVHJ1bmNhdGVkXT1cImNvbGxhcHNlXCIgXG4gICAgICAgICAgI21yZEJ1dHRvblRleHRDb250ZW50IFxuICAgICAgICAgIFtwYXJlbnRSZXNpemVFbGVtZW50XT1cInRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XCI+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCI6bm90KFttcmQtaWNvbl0pOm5vdChtcmQtaWNvbilcIj48L25nLWNvbnRlbnQ+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwibXJkLWJ1dHRvbi10ZXh0LWNvbnRlbnRcIiAqbmdJZj1cIiFpc0ljb25CdXR0b24gJiYgIWJ1dHRvblRleHQ/Lmxlbmd0aFwiXG4gICAgICAoaGlkZGVuQ2hhbmdlZCk9XCJidXR0b25Db2xsYXBzZWQoJGV2ZW50KVwiIFxuICAgICAgW2hpZGVJZlRydW5jYXRlZF09XCJjb2xsYXBzZVwiIFxuICAgICAgW3BhcmVudFJlc2l6ZUVsZW1lbnRdPVwidGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcIj5cbiAgICAgICAge3tkZWZhdWx0QnV0dG9uVGV4dH19XG4gICAgICA8L3NwYW4+XG5cbiAgICA8c3BhbiBjbGFzcz1cIm1yZC1idXR0b24taWNvbi1jb250ZW50XCIgKm5nSWY9XCIoaWNvblN0YXRlTWFwIHx8IGljb25EZWZpbml0aW9uKSAmJiBpY29uRW5kXCJcbiAgICAgICAgICBbc3R5bGUubWFyZ2luLWxlZnRdPVwiIWlzSWNvbkJ1dHRvbiA/ICc2cHgnIDogJzBweCdcIlxuICAgICAgICAgIFtjbGFzcy5mdWxsLWljb25dPVwiaXNGdWxsSWNvblwiIFxuICAgICAgICAgIFtoaWRlSWZUcnVuY2F0ZWRdPVwiY29sbGFwc2VcIiBcbiAgICAgICAgICBkaXNwbGF5U3RhdGU9XCJmbGV4XCIgXG4gICAgICAgICAgcmVxdWlyZWRIaWRlQXR0cmlidXRlPVwiaWNvbi1jb2xsYXBzZVwiXG4gICAgICAgICAgY2hlY2tDaGlsZHJlbkZvckF0dHJpYnV0ZSBcbiAgICAgICAgICBbaGlkZU9uVHJ1bmNhdGVkRWxlbWVudF09XCJtcmRCdXR0b25UZXh0Q29udGVudFwiIFxuICAgICAgICAgIFtwYXJlbnRSZXNpemVFbGVtZW50XT1cInRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XCI+XG4gICAgICAgIDxtcmQtaWNvbi1ncm91cCAqbmdJZj1cImljb25TdGF0ZU1hcFwiIFtzdmdzXT1cImljb25TdGF0ZU1hcFwiIFtob3N0RWxlbWVudF09XCJidXR0b25Db250YWluZXJcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbaG92ZXJlZF09XCJob3ZlcmVkXCIgW2xvYWRpbmddPVwiaXNMb2FkaW5nXCIgW3NpemVdPVwiaWNvblNpemVOdW1iZXJcIj48L21yZC1pY29uLWdyb3VwPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWljb25TdGF0ZU1hcCAmJiBpY29uRGVmaW5pdGlvblwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImRlZmluaWVydGVzSWNvblwiPjwvbmctY29udGFpbmVyPlxuICAgIDwvc3Bhbj5cblxuXG4gICBcbiAgICA8IS0tIFJlY2h0ZXIgSWNvbi1Db250YWluZXIgLS0+XG4gICAgPHNwYW4gY2xhc3M9XCJtcmQtYnV0dG9uLWljb24tY29udGVudFwiICpuZ0lmPVwiIWlzU3BlY2lmaWNCdXR0b24gJiYgIWljb25TdGF0ZU1hcFwiIFxuICAgICAgICAgIFtjbGFzcy5mdWxsLWljb25dPVwiaXNGdWxsSWNvblwiIFxuICAgICAgICAgIFtoaWRlSWZUcnVuY2F0ZWRdPVwiY29sbGFwc2VcIiBcbiAgICAgICAgICBkaXNwbGF5U3RhdGU9XCJmbGV4XCIgXG4gICAgICAgICAgcmVxdWlyZWRIaWRlQXR0cmlidXRlPVwiaWNvbi1jb2xsYXBzZVwiXG4gICAgICAgICAgY2hlY2tDaGlsZHJlbkZvckF0dHJpYnV0ZSBcbiAgICAgICAgICBbaGlkZU9uVHJ1bmNhdGVkRWxlbWVudF09XCJtcmRCdXR0b25UZXh0Q29udGVudFwiIFxuICAgICAgICAgIFtwYXJlbnRSZXNpemVFbGVtZW50XT1cInRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XCI+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtcmQtaWNvbltpY29uLWVuZF0sIFttcmQtaWNvbl1baWNvbi1lbmRdXCI+PC9uZy1jb250ZW50PlxuICAgIDwvc3Bhbj5cbiAgPC9zcGFuPlxuXG4gIDwhLS0gRGllIFByb2dyZXNzLUJhciBlaW5lcyBCdXR0b25zIChuaWNodCBmw7xyIEljb24tLCBGYWItIHVuZCBNaW5pLUZhYi1CdXR0b25zKSAtLT5cbiAgPG1yZC1wcm9ncmVzcy1iYXIgY2xhc3M9XCJtcmQtYnV0dG9uLXByb2dyZXNzLWJhclwiXG4gICAgKm5nSWY9XCIhaXNJY29uQnV0dG9uICYmIChpc0xvYWRpbmcgfHwgbG9hZGluZz8udmFsdWUgfHwgbG9hZGluZ1Byb2dyZXNzPy52YWx1ZSB8fCBsb2FkaW5nUHJvZ3Jlc3M/LnZhbHVlID09PSAwKVwiXG4gICAgW3ZhbHVlXT1cImxvYWRpbmdQcm9ncmVzcz8udmFsdWVcIiBbbW9kZV09XCJsb2FkaW5nUHJvZ3Jlc3MgPyAnZGV0ZXJtaW5hdGUnIDogJ2luZGV0ZXJtaW5hdGUnXCIgW2NvbG9yXT1cInByb2dyZXNzQ29sb3JcIj48L21yZC1wcm9ncmVzcy1iYXI+XG4gIDwhLS0gRGVyIFByb2dyZXNzLVNwaW5uZXIgZWluZXMgQnV0dG9ucyAobnVyIGbDvHIgSWNvbi0sIEZhYi0gdW5kIE1pbmktRmFiLUJ1dHRvbnMpIC0tPlxuICA8bXJkLXByb2dyZXNzLXNwaW5uZXIgY2xhc3M9XCJtcmQtYnV0dG9uLXByb2dyZXNzLXNwaW5uZXJcIlxuICAgICpuZ0lmPVwiaXNJY29uQnV0dG9uICYmIChpc0xvYWRpbmcgfHwgbG9hZGluZz8udmFsdWUgfHwgbG9hZGluZ1Byb2dyZXNzPy52YWx1ZSB8fCBsb2FkaW5nUHJvZ3Jlc3M/LnZhbHVlID09PSAwKVwiXG4gICAgW3ZhbHVlXT1cImxvYWRpbmdQcm9ncmVzcz8udmFsdWVcIiBbbW9kZV09XCJsb2FkaW5nUHJvZ3Jlc3MgPyAnZGV0ZXJtaW5hdGUnIDogJ2luZGV0ZXJtaW5hdGUnXCIgW2NvbG9yXT1cInByb2dyZXNzQ29sb3JcIj48L21yZC1wcm9ncmVzcy1zcGlubmVyPlxuPC9idXR0b24+XG5cbjxuZy10ZW1wbGF0ZSAjZGVmaW5pZXJ0ZXNJY29uPlxuICA8bXJkLWljb24gW2ljb25dPVwiaWNvbkRlZmluaXRpb24uc3ltYm9sXCJcbiAgICBbb3V0bGluZV09XCJpY29uRGVmaW5pdGlvbi5vdXRlciA9PT0gJ291dGxpbmUnXCJcbiAgICBbZnVsbF09XCJpY29uRGVmaW5pdGlvbi5vdXRlciA9PT0gJ2Z1bGwnXCJcbiAgICBbZGFzaGVkXT1cImljb25EZWZpbml0aW9uLm91dGVyID09PSAnZGFzaGVkJ1wiXG4gICAgW2RpcmVjdGlvbl09XCJpY29uRGVmaW5pdGlvbi5kaXJlY3Rpb25cIlxuICAgIFtzaXplXT1cImljb25TaXplTnVtYmVyXCI+PC9tcmQtaWNvbj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=