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
const _c0 = ["mrdButtonTextContent"];
const _c1 = ["buttonTouchArea"];
function MrdSButtonComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵprojection(1, 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(9);
    i0.ɵɵclassProp("full-icon", ctx_r2.isFullIcon);
    i0.ɵɵproperty("hideIfTruncated", ctx_r2.collapse)("hideOnTruncatedElement", _r4)("parentResizeElement", ctx_r2.elementRef.nativeElement);
} }
function MrdSButtonComponent_span_7_mrd_icon_group_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mrd-icon-group", 16);
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵproperty("svgs", ctx_r10.iconStateMap)("hostElement", _r0)("disabled", ctx_r10.disabled)("hovered", ctx_r10.hovered)("loading", ctx_r10.isLoading)("size", ctx_r10.iconSizeNumber);
} }
function MrdSButtonComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵtemplate(1, MrdSButtonComponent_span_7_mrd_icon_group_1_Template, 1, 6, "mrd-icon-group", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(9);
    i0.ɵɵstyleProp("margin-right", !ctx_r3.isIconButton ? "6px" : "0px");
    i0.ɵɵclassProp("full-icon", ctx_r3.isFullIcon);
    i0.ɵɵproperty("hideIfTruncated", ctx_r3.collapse)("hideOnTruncatedElement", _r4)("parentResizeElement", ctx_r3.elementRef.nativeElement);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.iconStateMap);
} }
function MrdSButtonComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵlistener("hiddenChanged", function MrdSButtonComponent_span_11_Template_span_hiddenChanged_0_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.buttonCollapsed($event)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("hideIfTruncated", ctx_r5.collapse)("parentResizeElement", ctx_r5.elementRef.nativeElement);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.defaultButtonText, " ");
} }
function MrdSButtonComponent_span_12_mrd_icon_group_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mrd-icon-group", 16);
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵproperty("svgs", ctx_r13.iconStateMap)("hostElement", _r0)("disabled", ctx_r13.disabled)("hovered", ctx_r13.hovered)("loading", ctx_r13.isLoading)("size", ctx_r13.iconSizeNumber);
} }
function MrdSButtonComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵtemplate(1, MrdSButtonComponent_span_12_mrd_icon_group_1_Template, 1, 6, "mrd-icon-group", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(9);
    i0.ɵɵstyleProp("margin-left", !ctx_r6.isIconButton ? "6px" : "0px");
    i0.ɵɵclassProp("full-icon", ctx_r6.isFullIcon);
    i0.ɵɵproperty("hideIfTruncated", ctx_r6.collapse)("hideOnTruncatedElement", _r4)("parentResizeElement", ctx_r6.elementRef.nativeElement);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.iconStateMap);
} }
function MrdSButtonComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵprojection(1, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(9);
    i0.ɵɵclassProp("full-icon", ctx_r7.isFullIcon);
    i0.ɵɵproperty("hideIfTruncated", ctx_r7.collapse)("hideOnTruncatedElement", _r4)("parentResizeElement", ctx_r7.elementRef.nativeElement);
} }
function MrdSButtonComponent_mrd_progress_bar_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mrd-progress-bar", 17);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r8.loadingProgress == null ? null : ctx_r8.loadingProgress.value)("mode", ctx_r8.loadingProgress ? "determinate" : "indeterminate")("color", ctx_r8.progressColor);
} }
function MrdSButtonComponent_mrd_progress_spinner_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mrd-progress-spinner", 18);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r9.loadingProgress == null ? null : ctx_r9.loadingProgress.value)("mode", ctx_r9.loadingProgress ? "determinate" : "indeterminate")("color", ctx_r9.progressColor);
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
        } }, inputs: { theme: "theme", editButton: ["edit-button", "editButton", booleanAttribute], saveButton: ["save-button", "saveButton", booleanAttribute], cancelButton: ["cancel-button", "cancelButton", booleanAttribute], closeIconButton: ["close-icon-button", "closeIconButton", booleanAttribute], deleteButton: ["delete-button", "deleteButton", booleanAttribute], addButton: ["add-button", "addButton", booleanAttribute], toggle: ["toggle-button", "toggle", booleanAttribute], toggleSelected: ["selected", "toggleSelected", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], hovered: ["hovered", "hovered", booleanAttribute], loading: "loading", isLoading: ["isLoading", "isLoading", booleanAttribute], loadingProgress: "loadingProgress", showTooltip: ["tooltip", "showTooltip", booleanAttribute], tooltipText: "tooltipText", tooltipIfTruncated: ["tooltipIfTruncated", "tooltipIfTruncated", booleanAttribute], tooltipIfCollapsed: ["tooltipIfCollapsed", "tooltipIfCollapsed", booleanAttribute], size: "size", value: "value", iconStateMap: "iconStateMap", iconEnd: ["iconEnd", "iconEnd", booleanAttribute] }, outputs: { click: "click" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c5, decls: 16, vars: 70, consts: [[1, "mrd-button-container", 3, "ngStyle", "mrdToolTip", "showOnTruncatedElement", "showToolTip"], ["buttonContainer", ""], [1, "mrd-button-background"], [1, "mrd-button-touch-area", 3, "mouseenter", "mouseleave", "mousedown", "mouseup"], ["buttonTouchArea", ""], [1, "mrd-button-content", 3, "ngClass"], ["class", "mrd-button-icon-content", "displayState", "flex", "requiredHideAttribute", "icon-collapse", "checkChildrenForAttribute", "", 3, "full-icon", "hideIfTruncated", "hideOnTruncatedElement", "parentResizeElement", 4, "ngIf"], ["class", "mrd-button-icon-content", "displayState", "flex", "requiredHideAttribute", "icon-collapse", "checkChildrenForAttribute", "", 3, "margin-right", "full-icon", "hideIfTruncated", "hideOnTruncatedElement", "parentResizeElement", 4, "ngIf"], [1, "mrd-button-text-content", 3, "hideIfTruncated", "parentResizeElement", "hiddenChanged"], ["mrdButtonTextContent", ""], ["class", "mrd-button-text-content", 3, "hideIfTruncated", "parentResizeElement", "hiddenChanged", 4, "ngIf"], ["class", "mrd-button-icon-content", "displayState", "flex", "requiredHideAttribute", "icon-collapse", "checkChildrenForAttribute", "", 3, "margin-left", "full-icon", "hideIfTruncated", "hideOnTruncatedElement", "parentResizeElement", 4, "ngIf"], ["class", "mrd-button-progress-bar", 3, "value", "mode", "color", 4, "ngIf"], ["class", "mrd-button-progress-spinner", 3, "value", "mode", "color", 4, "ngIf"], ["displayState", "flex", "requiredHideAttribute", "icon-collapse", "checkChildrenForAttribute", "", 1, "mrd-button-icon-content", 3, "hideIfTruncated", "hideOnTruncatedElement", "parentResizeElement"], [3, "svgs", "hostElement", "disabled", "hovered", "loading", "size", 4, "ngIf"], [3, "svgs", "hostElement", "disabled", "hovered", "loading", "size"], [1, "mrd-button-progress-bar", 3, "value", "mode", "color"], [1, "mrd-button-progress-spinner", 3, "value", "mode", "color"]], template: function MrdSButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c2);
            i0.ɵɵelementStart(0, "button", 0, 1);
            i0.ɵɵelement(2, "div", 2);
            i0.ɵɵelementStart(3, "div", 3, 4);
            i0.ɵɵlistener("mouseenter", function MrdSButtonComponent_Template_div_mouseenter_3_listener() { return ctx.isTouchHovered = true; })("mouseleave", function MrdSButtonComponent_Template_div_mouseleave_3_listener() { ctx.isTouchHovered = false; return ctx.isTouchActive = false; })("mousedown", function MrdSButtonComponent_Template_div_mousedown_3_listener() { return ctx.isTouchActive = true; })("mouseup", function MrdSButtonComponent_Template_div_mouseup_3_listener() { return ctx.isTouchActive = false; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span", 5);
            i0.ɵɵtemplate(6, MrdSButtonComponent_span_6_Template, 2, 5, "span", 6);
            i0.ɵɵtemplate(7, MrdSButtonComponent_span_7_Template, 2, 8, "span", 7);
            i0.ɵɵelementStart(8, "span", 8, 9);
            i0.ɵɵlistener("hiddenChanged", function MrdSButtonComponent_Template_span_hiddenChanged_8_listener($event) { return ctx.buttonCollapsed($event); });
            i0.ɵɵprojection(10);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(11, MrdSButtonComponent_span_11_Template, 2, 3, "span", 10);
            i0.ɵɵtemplate(12, MrdSButtonComponent_span_12_Template, 2, 8, "span", 11);
            i0.ɵɵtemplate(13, MrdSButtonComponent_span_13_Template, 2, 5, "span", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(14, MrdSButtonComponent_mrd_progress_bar_14_Template, 1, 3, "mrd-progress-bar", 12);
            i0.ɵɵtemplate(15, MrdSButtonComponent_mrd_progress_spinner_15_Template, 1, 3, "mrd-progress-spinner", 13);
            i0.ɵɵelementEnd();
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
            i0.ɵɵproperty("ngIf", ctx.iconStateMap && !ctx.iconEnd);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("hideIfTruncated", ctx.collapse)("parentResizeElement", ctx.elementRef.nativeElement);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.isIconButton && !(ctx.buttonText == null ? null : ctx.buttonText.length));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.iconStateMap && ctx.iconEnd);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isSpecificButton && !ctx.iconStateMap);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isIconButton && (ctx.isLoading || (ctx.loading == null ? null : ctx.loading.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) === 0));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isIconButton && (ctx.isLoading || (ctx.loading == null ? null : ctx.loading.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) || (ctx.loadingProgress == null ? null : ctx.loadingProgress.value) === 0));
        } }, dependencies: [i1.NgClass, i1.NgIf, i1.NgStyle, i2.ToolTipRendererDirective, i3.HideIfTruncatedDirective, i4.MrdProgressBarComponent, i5.MrdProgressSpinnerComponent, i6.MrdIconGroupComponent], styles: ["[_nghost-%COMP%]{position:relative;display:inline-flex;flex-direction:column;justify-content:center;align-items:center;max-width:100%}.active[_nghost-%COMP%]{z-index:10}.mrd-button-container[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:center;min-height:var(--min-height);height:inherit;max-width:100%;width:100%;padding:var(--padding);font-size:var(--font-size);font-family:var(--font-family);font-weight:var(--font-weight);letter-spacing:.1px;border-radius:var(--border-radius);color:var(--text-color)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;z-index:1;width:100%}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]   .mrd-button-icon-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content[_ngcontent-%COMP%]   .mrd-button-text-content[_ngcontent-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]     mrd-icon{margin:0 2px}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-content.isCollapsed[_ngcontent-%COMP%]   .mrd-button-text-content[_ngcontent-%COMP%]{padding:0 16px}.mrd-button-container.disabled[_ngcontent-%COMP%]{color:var(--disabled-text-color);cursor:initial}.mrd-button-container.disabled[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{border:var(--disabled-border);background-color:var(--disabled-bg-color)}.mrd-button-container[_ngcontent-%COMP%]:hover:not(.disabled), .mrd-button-container.hovered[_ngcontent-%COMP%]:not(.disabled), .mrd-button-container.touch-hovered[_ngcontent-%COMP%]:not(.disabled){color:var(--hover-text-color)}.mrd-button-container[_ngcontent-%COMP%]:hover:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.hovered[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.touch-hovered[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]{border:var(--hover-border);background-color:var(--hover-bg-color)}.mrd-button-container[_ngcontent-%COMP%]:active:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%], .mrd-button-container.touch-active[_ngcontent-%COMP%]:not(.disabled)   .mrd-button-background[_ngcontent-%COMP%]{border:var(--active-border, var(--hover-border));background-color:var(--active-bg-color, var(--hover-bg-color))}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{position:absolute;inset:0;border:var(--border);border-radius:var(--border-radius);background-color:var(--bg-color)}.mrd-button-container[_ngcontent-%COMP%]   .mrd-button-touch-area[_ngcontent-%COMP%]{position:absolute;inset:-8px}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]{min-width:var(--diameter)!important;height:var(--diameter)}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{min-height:unset;width:var(--diameter);height:var(--diameter)}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]     mrd-icon{margin:0!important;font-size:calc(var(--diameter) / 2)}.mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container.mrd-icon-button[_ngcontent-%COMP%]   .mrd-button-icon-content.full-icon[_ngcontent-%COMP%]     mrd-icon{font-size:var(--diameter)}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]{padding:0 44px;transition:color .2s}.mrd-button-container.mrd-toggle-button.mrd-toggle-selected[_ngcontent-%COMP%]{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040;transform:scale(1.15);z-index:10}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040;z-index:5}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:hover{z-index:5}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]   .mrd-button-background[_ngcontent-%COMP%]{transition:background-color .2s}.mrd-button-container.mrd-toggle-button[_ngcontent-%COMP%]:not(.mrd-toggle-selected)   .mrd-button-background[_ngcontent-%COMP%]{background-color:var(--unselected-color)}.mrd-button-container[_ngcontent-%COMP%]     [mrd-icon], .mrd-button-container[_ngcontent-%COMP%]     mrd-icon{font-size:1.5em;margin-right:4px;margin-top:2px;width:var(--icon-size);height:var(--icon-size);min-width:1em}.mrd-button-container[_ngcontent-%COMP%]     [mrd-icon][icon-end], .mrd-button-container[_ngcontent-%COMP%]     mrd-icon[icon-end]{margin-right:0;margin-left:4px}.mrd-button-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:10%;left:5px;right:5px;height:10%;min-height:10%}.mrd-button-progress-spinner[_ngcontent-%COMP%]{position:absolute;top:3px;left:3px;width:calc(100% - 6px)!important;height:calc(100% - 6px)!important}"], changeDetection: 0 });
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
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- Der eigentlich HTML-Button -->\r\n<button class=\"mrd-button-container\"\r\n  #buttonContainer\r\n  [style.--text-color]=\"textColor\"\r\n  [style.--hover-text-color]=\"hoverTextColor\"\r\n  [style.--disabled-text-color]=\"disabledTextColor\"\r\n  [style.--active-text-color]=\"activeTextColor\"\r\n  [style.--bg-color]=\"bgColor\"\r\n  [style.--hover-bg-color]=\"hoverBgColor\"\r\n  [style.--disabled-bg-color]=\"disabledBgColor\"\r\n  [style.--active-bg-color]=\"activeBgColor\"\r\n  [style.--border]=\"border\"\r\n  [style.--hover-border]=\"hoverBorder\"\r\n  [style.--disabled-border]=\"disabledBorder\"\r\n  [style.--active-border]=\"activeBorder\"\r\n\r\n  [style.--border-radius]=\"borderRadius\"\r\n  [style.--min-height]=\"minHeight\"\r\n  [style.--font-size]=\"fontSize\"\r\n  [style.--font-family]=\"fontFamily\"\r\n  [style.--font-weight]=\"fontWeight\"\r\n  [style.--diameter]=\"diameter\"\r\n  [style.--icon-size]=\"iconSize\"\r\n  [style.--padding]=\"padding\"\r\n  [style.--unselected-color]=\"toggleUnselectedColor\"\r\n\r\n  [ngStyle]=\"{'min-width': !collapse ? 'fit-content' : 'unset'}\"\r\n  [class.hovered]=\"hovered\"\r\n  [class.touch-hovered]=\"isTouchHovered\"\r\n  [class.touch-active]=\"isTouchActive\"\r\n  [class.disabled]=\"disabled\"\r\n  [class.mrd-icon-button]=\"isIconButton\"\r\n  [mrdToolTip]=\"tooltipText\" [showOnTruncatedElement]=\"tooltipIfTruncated ? mrdButtonTextContent : undefined\" [showToolTip]=\"showTooltip || (tooltipIfCollapsed && isCollapsed)\">\r\n  <div class=\"mrd-button-background\"></div>\r\n  <div class=\"mrd-button-touch-area\" #buttonTouchArea\r\n    (mouseenter)=\"isTouchHovered = true\"\r\n    (mouseleave)=\"isTouchHovered = false; isTouchActive = false\"\r\n    (mousedown)=\"isTouchActive = true\"\r\n    (mouseup)=\"isTouchActive = false\"></div>\r\n  <!-- Der Content des Buttons -->\r\n  <span class=\"mrd-button-content\" [ngClass]=\"{'isCollapsed': isCollapsed}\">\r\n    <!-- Linker Icon-Container -->\r\n    <span class=\"mrd-button-icon-content\" *ngIf=\"!isSpecificButton && !iconStateMap\"\r\n          [class.full-icon]=\"isFullIcon\" \r\n          [hideIfTruncated]=\"collapse\" \r\n          displayState=\"flex\" \r\n          requiredHideAttribute=\"icon-collapse\"\r\n          checkChildrenForAttribute \r\n          [hideOnTruncatedElement]=\"mrdButtonTextContent\" \r\n          [parentResizeElement]=\"this.elementRef.nativeElement\">\r\n      <ng-content select=\"mrd-icon:not([icon-end]), [mrd-icon]:not([icon-end])\"></ng-content>\r\n    </span>\r\n\r\n    <span class=\"mrd-button-icon-content\" *ngIf=\"iconStateMap && !iconEnd\"\r\n          [style.margin-right]=\"!isIconButton ? '6px' : '0px'\"\r\n          [class.full-icon]=\"isFullIcon\" \r\n          [hideIfTruncated]=\"collapse\" \r\n          displayState=\"flex\" \r\n          requiredHideAttribute=\"icon-collapse\"\r\n          checkChildrenForAttribute \r\n          [hideOnTruncatedElement]=\"mrdButtonTextContent\" \r\n          [parentResizeElement]=\"this.elementRef.nativeElement\">\r\n        <mrd-icon-group *ngIf=\"iconStateMap\" [svgs]=\"iconStateMap\" [hostElement]=\"buttonContainer\" [disabled]=\"disabled\" [hovered]=\"hovered\" [loading]=\"isLoading\" [size]=\"iconSizeNumber\"></mrd-icon-group>\r\n    </span>\r\n    \r\n    <!-- Der Text des Buttons -->\r\n    <span class=\"mrd-button-text-content\" \r\n          (hiddenChanged)=\"buttonCollapsed($event)\" \r\n          [hideIfTruncated]=\"collapse\" \r\n          #mrdButtonTextContent \r\n          [parentResizeElement]=\"this.elementRef.nativeElement\">\r\n      <ng-content select=\":not([mrd-icon]):not(mrd-icon)\"></ng-content>\r\n    </span>\r\n    <span class=\"mrd-button-text-content\" *ngIf=\"!isIconButton && !buttonText?.length\"\r\n      (hiddenChanged)=\"buttonCollapsed($event)\" \r\n      [hideIfTruncated]=\"collapse\" \r\n      [parentResizeElement]=\"this.elementRef.nativeElement\">\r\n        {{defaultButtonText}}\r\n      </span>\r\n\r\n    <span class=\"mrd-button-icon-content\" *ngIf=\"iconStateMap && iconEnd\"\r\n          [style.margin-left]=\"!isIconButton ? '6px' : '0px'\"\r\n          [class.full-icon]=\"isFullIcon\" \r\n          [hideIfTruncated]=\"collapse\" \r\n          displayState=\"flex\" \r\n          requiredHideAttribute=\"icon-collapse\"\r\n          checkChildrenForAttribute \r\n          [hideOnTruncatedElement]=\"mrdButtonTextContent\" \r\n          [parentResizeElement]=\"this.elementRef.nativeElement\">\r\n        <mrd-icon-group *ngIf=\"iconStateMap\" [svgs]=\"iconStateMap\" [hostElement]=\"buttonContainer\" [disabled]=\"disabled\" [hovered]=\"hovered\" [loading]=\"isLoading\" [size]=\"iconSizeNumber\"></mrd-icon-group>\r\n    </span>\r\n\r\n\r\n   \r\n    <!-- Rechter Icon-Container -->\r\n    <span class=\"mrd-button-icon-content\" *ngIf=\"!isSpecificButton && !iconStateMap\" \r\n          [class.full-icon]=\"isFullIcon\" \r\n          [hideIfTruncated]=\"collapse\" \r\n          displayState=\"flex\" \r\n          requiredHideAttribute=\"icon-collapse\"\r\n          checkChildrenForAttribute \r\n          [hideOnTruncatedElement]=\"mrdButtonTextContent\" \r\n          [parentResizeElement]=\"this.elementRef.nativeElement\">\r\n      <ng-content select=\"mrd-icon[icon-end], [mrd-icon][icon-end]\"></ng-content>\r\n    </span>\r\n  </span>\r\n\r\n  <!-- Die Progress-Bar eines Buttons (nicht f\u00FCr Icon-, Fab- und Mini-Fab-Buttons) -->\r\n  <mrd-progress-bar class=\"mrd-button-progress-bar\"\r\n    *ngIf=\"!isIconButton && (isLoading || loading?.value || loadingProgress?.value || loadingProgress?.value === 0)\"\r\n    [value]=\"loadingProgress?.value\" [mode]=\"loadingProgress ? 'determinate' : 'indeterminate'\" [color]=\"progressColor\"></mrd-progress-bar>\r\n  <!-- Der Progress-Spinner eines Buttons (nur f\u00FCr Icon-, Fab- und Mini-Fab-Buttons) -->\r\n  <mrd-progress-spinner class=\"mrd-button-progress-spinner\"\r\n    *ngIf=\"isIconButton && (isLoading || loading?.value || loadingProgress?.value || loadingProgress?.value === 0)\"\r\n    [value]=\"loadingProgress?.value\" [mode]=\"loadingProgress ? 'determinate' : 'indeterminate'\" [color]=\"progressColor\"></mrd-progress-spinner>\r\n</button>\r\n", styles: [":host{position:relative;display:inline-flex;flex-direction:column;justify-content:center;align-items:center;max-width:100%}:host.active{z-index:10}.mrd-button-container{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:center;min-height:var(--min-height);height:inherit;max-width:100%;width:100%;padding:var(--padding);font-size:var(--font-size);font-family:var(--font-family);font-weight:var(--font-weight);letter-spacing:.1px;border-radius:var(--border-radius);color:var(--text-color)}.mrd-button-container .mrd-button-content{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;z-index:1;width:100%}.mrd-button-container .mrd-button-content .mrd-button-icon-content{display:flex;flex-direction:row;align-items:center;justify-content:center}.mrd-button-container .mrd-button-content .mrd-button-text-content{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-button-container .mrd-button-content.isCollapsed ::ng-deep [mrd-icon],.mrd-button-container .mrd-button-content.isCollapsed ::ng-deep mrd-icon{margin:0 2px}.mrd-button-container .mrd-button-content.isCollapsed .mrd-button-text-content{padding:0 16px}.mrd-button-container.disabled{color:var(--disabled-text-color);cursor:initial}.mrd-button-container.disabled .mrd-button-background{border:var(--disabled-border);background-color:var(--disabled-bg-color)}.mrd-button-container:hover:not(.disabled),.mrd-button-container.hovered:not(.disabled),.mrd-button-container.touch-hovered:not(.disabled){color:var(--hover-text-color)}.mrd-button-container:hover:not(.disabled) .mrd-button-background,.mrd-button-container.hovered:not(.disabled) .mrd-button-background,.mrd-button-container.touch-hovered:not(.disabled) .mrd-button-background{border:var(--hover-border);background-color:var(--hover-bg-color)}.mrd-button-container:active:not(.disabled) .mrd-button-background,.mrd-button-container.touch-active:not(.disabled) .mrd-button-background{border:var(--active-border, var(--hover-border));background-color:var(--active-bg-color, var(--hover-bg-color))}.mrd-button-container .mrd-button-background{position:absolute;inset:0;border:var(--border);border-radius:var(--border-radius);background-color:var(--bg-color)}.mrd-button-container .mrd-button-touch-area{position:absolute;inset:-8px}.mrd-button-container.mrd-icon-button{min-width:var(--diameter)!important;height:var(--diameter)}.mrd-button-container.mrd-icon-button .mrd-button-background{min-height:unset;width:var(--diameter);height:var(--diameter)}.mrd-button-container.mrd-icon-button ::ng-deep [mrd-icon],.mrd-button-container.mrd-icon-button ::ng-deep mrd-icon{margin:0!important;font-size:calc(var(--diameter) / 2)}.mrd-button-container.mrd-icon-button .mrd-button-icon-content.full-icon ::ng-deep [mrd-icon],.mrd-button-container.mrd-icon-button .mrd-button-icon-content.full-icon ::ng-deep mrd-icon{font-size:var(--diameter)}.mrd-button-container.mrd-toggle-button{padding:0 44px;transition:color .2s}.mrd-button-container.mrd-toggle-button.mrd-toggle-selected{--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040;transform:scale(1.15);z-index:10}.mrd-button-container.mrd-toggle-button:active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040;z-index:5}.mrd-button-container.mrd-toggle-button:hover{z-index:5}.mrd-button-container.mrd-toggle-button .mrd-button-background{transition:background-color .2s}.mrd-button-container.mrd-toggle-button:not(.mrd-toggle-selected) .mrd-button-background{background-color:var(--unselected-color)}.mrd-button-container ::ng-deep [mrd-icon],.mrd-button-container ::ng-deep mrd-icon{font-size:1.5em;margin-right:4px;margin-top:2px;width:var(--icon-size);height:var(--icon-size);min-width:1em}.mrd-button-container ::ng-deep [mrd-icon][icon-end],.mrd-button-container ::ng-deep mrd-icon[icon-end]{margin-right:0;margin-left:4px}.mrd-button-progress-bar{position:absolute;bottom:10%;left:5px;right:5px;height:10%;min-height:10%}.mrd-button-progress-spinner{position:absolute;top:3px;left:3px;width:calc(100% - 6px)!important;height:calc(100% - 6px)!important}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXMtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvcy1tb2R1bGVzL21yZC1zLWJ1dHRvbi9jb21wb25lbnRzL21yZC1zLWJ1dHRvbi9tcmQtcy1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9zLW1vZHVsZXMvbXJkLXMtYnV0dG9uL2NvbXBvbmVudHMvbXJkLXMtYnV0dG9uL21yZC1zLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdELGtCQUFrQixFQUF5QyxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNsTCxPQUFPLEVBQUUsc0JBQXNCLEVBQW1CLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6RSxPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFhLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6TSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbkUsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lDcUM1QixnQ0FPNEQ7SUFDMUQscUJBQXVGO0lBQ3pGLGlCQUFPOzs7O0lBUkQsOENBQThCO0lBQzlCLGlEQUE0QiwrQkFBQSx3REFBQTs7O0lBa0I5QixxQ0FBb007Ozs7SUFBL0osMkNBQXFCLG9CQUFBLDhCQUFBLDRCQUFBLDhCQUFBLGdDQUFBOzs7SUFUOUQsZ0NBUTREO0lBQ3hELGtHQUFvTTtJQUN4TSxpQkFBTzs7OztJQVRELG9FQUFvRDtJQUNwRCw4Q0FBOEI7SUFDOUIsaURBQTRCLCtCQUFBLHdEQUFBO0lB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U0J1dHRvbiwgTXJkU0J1dHRvblNpemUsIE1yZFNCdXR0b25TaXplVHlwZSwgTXJkU0J1dHRvblN0YXRlQ29sb3IsIE1yZFNCdXR0b25UaGVtZSwgTXJkU0J1dHRvblR5cGUgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbC9jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgeyBCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0LCBPYnNlcnZhYmxlVmFsdWUsIFV0aWwgfSBmcm9tICdtcmQtY29yZSc7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCwgYm9vbGVhbkF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNcmRDb25maWdNb2RlbCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL21vZGVsL2NvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IENvbmZpZ1V0aWwgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuaW1wb3J0IHsgU3ZnU3RhdGVNYXAgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50cy9tcmQtaWNvbi1ncm91cC9tcmQtaWNvbi1ncm91cC5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIERpZXNlcyBLb21wb25lbnRlIHN0ZWxsdCBkZW4gTXJkLUJ1dHRvbiB6dXIgVmVyZsO8Z3VuZy5cclxuICpcclxuICogRGVyIEJ1dHRvbiBrYW5uIG1pdHRlbHMgZGVyIGVudHNwcmVjaGVuZGVuIEF0dHJpYnV0ZSBpbiBmb2xnZW5kZW4gU3RpbGVuIGRhcmdlc3RlbGx0IHdlcmRlbjpcclxuICogLSBTdGFuZGFyZC1CdXR0b24gKGRlZmF1bHQpXHJcbiAqIC0gSWNvbi1CdXR0b24gKEF0dHJpYnV0bmFtZTogaWNvbi1idXR0b24pXHJcbiAqIC0gUmFpc2VkLUJ1dHRvbiAoQXR0cmlidXRuYW1lOiByYWlzZWQtYnV0dG9uKVxyXG4gKiAtIE91dGxpbmUtQnV0dG9uIChBdHRyaWJ1dG5hbWU6IG91dGxpbmUtYnV0dG9uKVxyXG4gKiAtIEZsYXQtQnV0dG9uIChBdHRyaWJ1dG5hbWU6IGZsYXQtYnV0dG9uKVxyXG4gKiAtIEZhYi1CdXR0b24gKEF0dHJpYnV0bmFtZTogZmFiLWJ1dHRvbilcclxuICogLSBNaW5pRmFiLUJ1dHRvbiAoQXR0cmlidXRuYW1lOiBtaW5pRmFiLWJ1dHRvbilcclxuICpcclxuICogV2VpdGVyaGluIGvDtm5uZW4gZGllIHN0YW5kYXJkIFRoZW1lcyAocHJpbWFyeSwgYWNjZW50LCB3YXJuKSBmw7xyIGRpZSBIaW50ZXJncnVuZC0gYnp3LiBUZXh0ZmFyYmUgZmVzdGdlbGVndCB3ZXJkZW4gKGplIG5hY2ggU3R5bGUpLlxyXG4gKlxyXG4gKiBGw7xyIHdlaXRlcmUgQW5wYXNzdW5nZW4gc2llaGUgZGllIEluZm9ybWF0aW9uZW4gZGVyIGVpbnplbG5lbiBBdHRyaWJ1dGUgb2RlciBkaWUgRG9rdW1lbnRhdGlvbi5cclxuICpcclxuICogQGNsYXNzIE1yZFNCdXR0b25Db21wb25lbnRcclxuICogQGV4dGVuZHMge0Jhc2VQdXNoU3RyYXRlZ3lPYmplY3R9XHJcbiAqIEBpbXBsZW1lbnRzIHtBZnRlclZpZXdJbml0fVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtcmQtcy1idXR0b24nLFxyXG4gIGhvc3Q6IHtcclxuICAgJ1tzdHlsZS5taW4td2lkdGhdJzogJyFjb2xsYXBzZSA/IFwiZml0LWNvbnRlbnRcIiA6IFwidW5zZXRcIicsXHJcbiAgICdbc3R5bGUubWFyZ2luXSc6ICd0b2dnbGUgPyBcIjAgLTE2cHhcIiA6IFwidW5zZXRcIicsXHJcbiAgICdbc3R5bGUudHJhbnNpdGlvbl0nOiAndG9nZ2xlID8gXCJ0cmFuc2Zvcm0gMC4yc1wiIDogXCJ1bnNldFwiJyxcclxuICAgJ1tjbGFzcy5hY3RpdmVdJzogJ3RvZ2dsZSAmJiB0b2dnbGVTZWxlY3RlZCcsXHJcbiAgICcobW91c2VlbnRlciknOiAnb25Nb3VzZUVudGVyKCknLFxyXG4gICAnKG1vdXNlbGVhdmUpJzogJ29uTW91c2VMZWF2ZSgpJ1xyXG4gIH0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1zLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLXMtYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZFNCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAvKipcclxuICAgKiBSZWZlcmVueiBhdWYgZGFzIFRleHQtRWxlbWVudCBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFbGVtZW50UmVmPEhUTUxFbGVtZW50Pn1cclxuICAgKiBAbWVtYmVyb2YgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBWaWV3Q2hpbGQoJ21yZEJ1dHRvblRleHRDb250ZW50Jywge3N0YXRpYzogdHJ1ZX0pIG1yZEJ1dHRvblRleHRDb250ZW50PzogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZmVyZW56IGF1ZiBkYXMgVG91Y2gtQXJlYS1FbGVtZW50IGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0VsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+fVxyXG4gICAqIEBtZW1iZXJvZiBNcmRTQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQFZpZXdDaGlsZCgnYnV0dG9uVG91Y2hBcmVhJywge3N0YXRpYzogdHJ1ZX0pIGJ1dHRvblRvdWNoQXJlYT86IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCB3ZWxjaGVzIFRoZW1lIGRlciBCdXR0b24gaGF0LlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZFNCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgdGhlbWU/OiBNcmRTQnV0dG9uVHlwZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBlaW4gRWRpdC1CdXR0b24gaXN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZFNCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnZWRpdC1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZWRpdEJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdzYXZlLWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzYXZlQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHthbGlhczogJ2NhbmNlbC1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgY2FuY2VsQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHthbGlhczogJ2Nsb3NlLWljb24tYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGNsb3NlSWNvbkJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdkZWxldGUtYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGRlbGV0ZUJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdhZGQtYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGFkZEJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGVpbiBUb2dnbGUtQnV0dG9uIGlzdC5cclxuICAgKiBcclxuICAgKiBUb2dnbGUtQnV0dG9ucyBzb2xsdGVuIGltbWVyIGlubmVyaGFsYiBlaW5lciBUb2dnbGUtQnV0dG9uLUdyb3VwIHZlcndlbmRldCB3ZXJkZW4uXHJcbiAgICogU3RhbmRhcmRtw6TDn2lnIGhhYmVuIHNpZSBlaW5lbiB3ZWnDn2VuIEhpbnRlcmdydW5kIHVuZCBkaWUgVGV4dGZhcmJlIGlzdCBzY2h3YXJ6LCBhdcOfZXJkZW0gYmVzaXR6ZW4gc2llIGltIHNlbGVrdGllcnRlbiBadXN0YW5kIGVpbmVuIFNjaGF0dGVuLlxyXG4gICAqIFxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRTQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ3RvZ2dsZS1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSB0b2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiwgYWxzIFRvZ2dsZS1CdXR0b24sIHNlbGVrdGllcnQgaXN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZFNCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnc2VsZWN0ZWQnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSB0b2dnbGVTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGRlYWt0aXZpZXJ0IGlzdC5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRTQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIEJ1dHRvbiBkZWFrdGl2aWVydCBpc3QuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGhvdmVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRWluZSBPYnNlcnZhYmxlVmFsdWUsIGRpZSDDvGJlcmdlYmVuIHdlcmRlbiBrYW5uLCB1bSB6dSBiZXN0aW1tZW4sXHJcbiAgICogb2IgZGVyIEJ1dHRvbiBlaW5lbiBMYWRlYmFsa2VuL0xhZGVzcGlubmVyIGFuemVpZ2VuIHNvbGwuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBsb2FkaW5nPzogT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+O1xyXG5cclxuICAvKipcclxuICAgKiBFaW4gYm9vbGVhbiwgZGVyIGJlc3RpbW10LCBvYiBkZXIgQnV0dG9uIGVpbmVuIExhZGViYWxrZW4vTGFkZXNwaW5uZXIgYW56ZWlnZW4gc29sbC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRTQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVpbmUgT2JzZXJ2YWJsZVZhbHVlLCBkaWUgw7xiZXJnZWJlbiB3ZXJkZW4ga2FubiwgdW0gZGVuIEZvcnRzY2hyaXR0IGRlcyBMYWRlYmFsa2Vucy9MYWRlc3Bpbm5lcnMgenUgYmVzdGltbWVuLlxyXG4gICAqXHJcbiAgICogQHR5cGUge09ic2VydmFibGVWYWx1ZTxudW1iZXI+fVxyXG4gICAqIEBtZW1iZXJvZiBNcmRTQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIGxvYWRpbmdQcm9ncmVzcz86IE9ic2VydmFibGVWYWx1ZTxudW1iZXI+O1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uLVRleHQgdmVyc2Nod2luZGV0LCB3ZW5uIGVyIHp1IGxhbmcgaXN0IHVuZCBhdXNnZXB1bmt0ZXQgd2VyZGVuIHfDvHJkZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRTQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgLypASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pKi8gcHVibGljIGNvbGxhcHNlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgXHJcbiAgcHJpdmF0ZSBfY29sbGFwc2VUbzogTXJkU0J1dHRvblNpemVUeXBlID0gTXJkU0J1dHRvblNpemVUeXBlLklDT047XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBCdXR0b24gZWluZW4gVG9vbHRpcCBhbnplaWdlbiBzb2xsLlxyXG4gICAqXHJcbiAgICogRGVyIFRvb2x0aXAtVGV4dCB3aXJkIHN0YW5kYXJkbcOkw59pZyBhdXMgZGVtIEluaGFsdCBkZXMgQnV0dG9ucyBvaG5lIGR1cmNoIFttcmQtaWNvbl0gZ2VrZW5uemVpY2huZXRlIEljb25zIGdlbmVyaWVydC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRTQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ3Rvb2x0aXAnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2hvd1Rvb2x0aXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGVyIFRleHQgZGVzIFRvb2x0aXBzLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0b29sdGlwVGV4dD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIFRvb2x0aXAgbnVyIGFuZ2V6ZWlndCB3ZXJkZW4gc29sbCwgd2VubiBkZXIgQnV0dG9uLVRleHQgYXVzZ2VwdW5rdGV0IHdpcmQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNldCB0b29sdGlwSWZUcnVuY2F0ZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuc2hvd1Rvb2x0aXAgPSB2YWx1ZSB8fCB0aGlzLnNob3dUb29sdGlwO1xyXG4gICAgdGhpcy5fdG9vbHRpcElmVHJ1bmNhdGVkID0gdmFsdWU7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgdG9vbHRpcElmVHJ1bmNhdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXBJZlRydW5jYXRlZDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfdG9vbHRpcElmVHJ1bmNhdGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBUb29sdGlwIG51ciBhbmdlemVpZ3Qgd2VyZGVuIHNvbGwsIHdlbm4gZGVyIEJ1dHRvbiBjb2xsYWJpZXJ0IGlzdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRTQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgdG9vbHRpcElmQ29sbGFwc2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIEljb24gZGVzIEJ1dHRvbnMgZGllIHZvbGxlIEdyw7bDn2UgZGVzIEJ1dHRvbnMgZWlubmVobWVuIHNvbGwuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzaXplOiBNcmRTQnV0dG9uU2l6ZVR5cGUgPSBNcmRTQnV0dG9uU2l6ZVR5cGUuQklHO1xyXG5cclxuICAvKipcclxuICAgKiBEZXIgV2VydCBkZXMgQnV0dG9ucyBhbHMgVG9nZ2xlLUJ1dHRvbi5cclxuICAgKiBcclxuICAgKiBAdHlwZSB7YW55fVxyXG4gICAqIEBtZW1iZXJvZiBNcmRTQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIHZhbHVlPzogYW55O1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgaWNvblN0YXRlTWFwOiBTdmdTdGF0ZU1hcHx1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGljb25FbmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRGFzIEtsaWNrLUV2ZW50IGR1cmNoIGRlbiBOdXR6ZXIuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPEV2ZW50Pn1cclxuICAgKiBAbWVtYmVyb2YgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2xpY2s6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRGllIEtvbmZpZ3VyYXRpb24gZGVzIE1yZC1CdXR0b25zLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAdHlwZSB7TXJkQ29uZmlnTW9kZWx9XHJcbiAgICogQG1lbWJlcm9mIE1yZFNCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBwcml2YXRlIF9jb25maWc6IE1yZENvbmZpZ01vZGVsID0gQ29uZmlnVXRpbC5nZXRDb25maWcoKTtcclxuXHJcbiAgcHJpdmF0ZSBtb3VzZUVudGVyTGlzdGVuZXI/OiAoKSA9PiB2b2lkO1xyXG4gIHByaXZhdGUgbW91c2VMZWF2ZUxpc3RlbmVyPzogKCkgPT4gdm9pZDtcclxuXHJcbiAgcHJpdmF0ZSB1bmNvbGxhcHNlZEFwcGVhcmFuY2U/OiBNcmRTQnV0dG9uU2l6ZVR5cGU7XHJcblxyXG4gIHByaXZhdGUgYnV0dG9uQ29uZmlnPzogTXJkU0J1dHRvbjtcclxuICBwcml2YXRlIHRoZW1lQ29uZmlnPzogTXJkU0J1dHRvblRoZW1lO1xyXG4gIHByaXZhdGUgc2l6ZUNvbmZpZz86IE1yZFNCdXR0b25TaXplO1xyXG4gIFxyXG4gIHB1YmxpYyB0ZXh0Q29sb3I/OiBzdHJpbmc7XHJcbiAgcHVibGljIGhvdmVyVGV4dENvbG9yPzogc3RyaW5nO1xyXG4gIHB1YmxpYyBkaXNhYmxlZFRleHRDb2xvcj86IHN0cmluZztcclxuICBwdWJsaWMgYWN0aXZlVGV4dENvbG9yPzogc3RyaW5nO1xyXG4gIHB1YmxpYyBiZ0NvbG9yPzogc3RyaW5nO1xyXG4gIHB1YmxpYyBob3ZlckJnQ29sb3I/OiBzdHJpbmc7XHJcbiAgcHVibGljIGRpc2FibGVkQmdDb2xvcj86IHN0cmluZztcclxuICBwdWJsaWMgYWN0aXZlQmdDb2xvcj86IHN0cmluZztcclxuICBwdWJsaWMgYm9yZGVyPzogc3RyaW5nO1xyXG4gIHB1YmxpYyBob3ZlckJvcmRlcj86IHN0cmluZztcclxuICBwdWJsaWMgZGlzYWJsZWRCb3JkZXI/OiBzdHJpbmc7XHJcbiAgcHVibGljIGFjdGl2ZUJvcmRlcj86IHN0cmluZztcclxuICBwdWJsaWMgcHJvZ3Jlc3NDb2xvcj86IHN0cmluZztcclxuICBwdWJsaWMgaG92ZXJQcm9ncmVzc0NvbG9yPzogc3RyaW5nO1xyXG4gIHB1YmxpYyBkaXNhYmxlZFByb2dyZXNzQ29sb3I/OiBzdHJpbmc7XHJcbiAgcHVibGljIGFjdGl2ZVByb2dyZXNzQ29sb3I/OiBzdHJpbmc7XHJcbiAgcHVibGljIHRvZ2dsZVVuc2VsZWN0ZWRDb2xvcj86IHN0cmluZztcclxuXHJcbiAgcHVibGljIGJvcmRlclJhZGl1cz86IHN0cmluZztcclxuICBwdWJsaWMgbWluSGVpZ2h0Pzogc3RyaW5nO1xyXG4gIHB1YmxpYyBmb250U2l6ZT86IHN0cmluZztcclxuICBwdWJsaWMgZm9udEZhbWlseT86IHN0cmluZztcclxuICBwdWJsaWMgZm9udFdlaWdodD86IHN0cmluZztcclxuICBwdWJsaWMgZGlhbWV0ZXI/OiBzdHJpbmc7XHJcbiAgcHVibGljIGljb25TaXplPzogc3RyaW5nO1xyXG4gIHB1YmxpYyBpY29uU2l6ZU51bWJlcj86IG51bWJlcjtcclxuICBwdWJsaWMgdGV4dEljb25HYXA/OiBzdHJpbmc7XHJcbiAgcHVibGljIHBhZGRpbmc/OiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBpc0ljb25CdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgaXNGdWxsSWNvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpc0NvbGxhcHNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpc0hvdmVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgaXNTcGVjaWZpY0J1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpc1RvdWNoSG92ZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpc1RvdWNoQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBidXR0b25UZXh0OiBzdHJpbmcgPSAnJztcclxuICBwdWJsaWMgZGVmYXVsdEJ1dHRvblRleHQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAvLyBwdWJsaWMgaWNvblN0YXRlTWFwPzogU3ZnU3RhdGVNYXA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD5cclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIEhpZXIgc29yZ2VuIHdpciBkYWbDvHIsIGRhc3MgZGVyIFN0YW5kYXJkIENsaWNrLUhhbmRsZXIgdm9uIEFuZ3VsYXIgZW50ZmVybnQgd2lyZFxyXG4gICAgY29uc3QgaG9zdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgY29uc3QgYnV0dG9uID0gaG9zdC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcclxuXHJcbiAgICBjb25zdCBuZXdIb3N0OiBIVE1MRWxlbWVudCA9IGhvc3QuY2xvbmVOb2RlKCkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBuZXdIb3N0LmFwcGVuZENoaWxkKGJ1dHRvbiEpO1xyXG5cclxuICAgIEFycmF5LmZyb20oaG9zdC5hdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHIgPT4gbmV3SG9zdC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKSk7XHJcbiAgICBob3N0LnBhcmVudE5vZGUhLnJlcGxhY2VDaGlsZChuZXdIb3N0LCBob3N0KTtcclxuICAgIG5ld0hvc3Quc3R5bGUubWluV2lkdGggPSAhdGhpcy5jb2xsYXBzZSA/ICdmaXQtY29udGVudCcgOiAndW5zZXQnO1xyXG4gICAgbmV3SG9zdC5zdHlsZS5tYXJnaW4gPSB0aGlzLnRvZ2dsZSA/ICcwIC0xNnB4JyA6ICd1bnNldCc7XHJcbiAgICBuZXdIb3N0LnN0eWxlLnRyYW5zaXRpb24gPSB0aGlzLnRvZ2dsZSA/ICd0cmFuc2Zvcm0gMC4ycycgOiAndW5zZXQnO1xyXG4gICAgaWYgKHRoaXMudG9nZ2xlICYmIHRoaXMudG9nZ2xlU2VsZWN0ZWQpIHtcclxuICAgICAgbmV3SG9zdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIG5ld0hvc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKTtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50ID0gbmV3SG9zdDtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmxvYWRpbmcpKSB7XHJcbiAgICAgIHRoaXMubWFya0ZvckNoZWNrSWYodGhpcy5sb2FkaW5nIS5jaGFuZ2VkKVxyXG4gICAgfVxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMubG9hZGluZ1Byb2dyZXNzKSkge1xyXG4gICAgICB0aGlzLm1hcmtGb3JDaGVja0lmKHRoaXMubG9hZGluZ1Byb2dyZXNzIS5jaGFuZ2VkKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXBkYXRlU3R5bGUoKTtcclxuXHJcbiAgICB0aGlzLmlzSG92ZXJlZCA9IHRoaXMuaG92ZXJlZDtcclxuICAgIC8vIE1hbnVlbGxlcyBBbmjDpG5nZW4gZGVyIE1vdXNlZW50ZXItIHVuZCBNb3VzZWxlYXZlLUxpc3RlbmVyIG1pdCBSZW5kZXJlcjJcclxuICAgIHRoaXMubW91c2VFbnRlckxpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmlzSG92ZXJlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICB0aGlzLm1vdXNlTGVhdmVMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgdGhpcy5pc0hvdmVyZWQgPSB0aGlzLmhvdmVyZWQ7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm1vdXNlRW50ZXJMaXN0ZW5lcikgeyB0aGlzLm1vdXNlRW50ZXJMaXN0ZW5lcigpOyB9XHJcbiAgICBpZiAodGhpcy5tb3VzZUxlYXZlTGlzdGVuZXIpIHsgdGhpcy5tb3VzZUxlYXZlTGlzdGVuZXIoKTsgfVxyXG5cclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vbkNsaWNrKGV2ZW50KSk7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIH1cclxuICB9ICBcclxuXHJcbiAgcHVibGljIHVwZGF0ZVN0eWxlKCk6IHZvaWQge1xyXG4gICAgbGV0IHNwZWNpZmljQnV0dG9uQ29uZmlnOiBNcmREZWZpbmVkQnV0dG9ufHVuZGVmaW5lZDtcclxuICAgIGlmICh0aGlzLmVkaXRCdXR0b24pIHtcclxuICAgICAgdGhpcy5pc1NwZWNpZmljQnV0dG9uID0gdHJ1ZTtcclxuICAgICAgc3BlY2lmaWNCdXR0b25Db25maWcgPSB0aGlzLl9jb25maWcuc0J1dHRvbj8uZGVmaW5lZEJ1dHRvbnM/LmJlYXJiZWl0ZW47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zYXZlQnV0dG9uKSB7XHJcbiAgICAgIHRoaXMuaXNTcGVjaWZpY0J1dHRvbiA9IHRydWU7XHJcbiAgICAgIHNwZWNpZmljQnV0dG9uQ29uZmlnID0gdGhpcy5fY29uZmlnLnNCdXR0b24/LmRlZmluZWRCdXR0b25zPy5zcGVpY2hlcm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jYW5jZWxCdXR0b24pIHtcclxuICAgICAgdGhpcy5pc1NwZWNpZmljQnV0dG9uID0gdHJ1ZTtcclxuICAgICAgc3BlY2lmaWNCdXR0b25Db25maWcgPSB0aGlzLl9jb25maWcuc0J1dHRvbj8uZGVmaW5lZEJ1dHRvbnM/LmFiYnJlY2hlbjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNsb3NlSWNvbkJ1dHRvbikge1xyXG4gICAgICB0aGlzLmlzU3BlY2lmaWNCdXR0b24gPSB0cnVlO1xyXG4gICAgICBzcGVjaWZpY0J1dHRvbkNvbmZpZyA9IHRoaXMuX2NvbmZpZy5zQnV0dG9uPy5kZWZpbmVkQnV0dG9ucz8uc2NobGllc3Nlbkljb247XHJcbiAgICAgIHRoaXMuc2l6ZSA9IE1yZFNCdXR0b25TaXplVHlwZS5GVUxMX0lDT047XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kZWxldGVCdXR0b24pIHtcclxuICAgICAgdGhpcy5pc1NwZWNpZmljQnV0dG9uID0gdHJ1ZTtcclxuICAgICAgc3BlY2lmaWNCdXR0b25Db25maWcgPSB0aGlzLl9jb25maWcuc0J1dHRvbj8uZGVmaW5lZEJ1dHRvbnM/LmxvZXNjaGVuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYWRkQnV0dG9uKSB7XHJcbiAgICAgIHRoaXMuaXNTcGVjaWZpY0J1dHRvbiA9IHRydWU7XHJcbiAgICAgIHNwZWNpZmljQnV0dG9uQ29uZmlnID0gdGhpcy5fY29uZmlnLnNCdXR0b24/LmRlZmluZWRCdXR0b25zPy5oaW56dWZ1ZWdlbjtcclxuICAgIH1cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZChzcGVjaWZpY0J1dHRvbkNvbmZpZykpIHtcclxuICAgICAgdGhpcy50aGVtZSA/Pz0gc3BlY2lmaWNCdXR0b25Db25maWchLnRoZW1lO1xyXG4gICAgICB0aGlzLmRlZmF1bHRCdXR0b25UZXh0ID0gc3BlY2lmaWNCdXR0b25Db25maWchLnRleHQgPz8gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50aGVtZSA/Pz0gTXJkU0J1dHRvblR5cGUuVEVYVF9PTkxZO1xyXG4gICAgdGhpcy5idXR0b25Db25maWcgPSB0aGlzLl9jb25maWcuc0J1dHRvbiE7XHJcbiAgICB0aGlzLnRoZW1lQ29uZmlnID0gdGhpcy50aGVtZSAhPT0gTXJkU0J1dHRvblR5cGUuVEVYVF9PTkxZID8gdGhpcy5idXR0b25Db25maWdbdGhpcy50aGVtZV0hIDogdGhpcy5idXR0b25Db25maWchO1xyXG4gICAgdGhpcy5zaXplQ29uZmlnID0gdGhpcy5zaXplICE9PSBNcmRTQnV0dG9uU2l6ZVR5cGUuQklHID8gdGhpcy5idXR0b25Db25maWdbdGhpcy5zaXplXSEgOiB0aGlzLmJ1dHRvbkNvbmZpZyE7XHJcblxyXG4gICAgdGhpcy5pc0ljb25CdXR0b24gPSB0aGlzLnNpemUgPT09IE1yZFNCdXR0b25TaXplVHlwZS5JQ09OIHx8IHRoaXMuc2l6ZSA9PT0gTXJkU0J1dHRvblNpemVUeXBlLkZVTExfSUNPTjtcclxuICAgIHRoaXMuaXNGdWxsSWNvbiA9IHRoaXMuc2l6ZSA9PT0gTXJkU0J1dHRvblNpemVUeXBlLkZVTExfSUNPTjtcclxuXHJcbiAgICB0aGlzLnRleHRDb2xvciA9IHRoaXMudGhlbWVDb25maWcudGV4dD8uZGVmYXVsdCB8fCB0aGlzLmJ1dHRvbkNvbmZpZy50ZXh0Py5kZWZhdWx0O1xyXG4gICAgdGhpcy5ob3ZlclRleHRDb2xvciA9IHRoaXMudGhlbWVDb25maWcudGV4dD8uaG92ZXIgfHwgdGhpcy5idXR0b25Db25maWcudGV4dD8uaG92ZXI7XHJcbiAgICB0aGlzLmRpc2FibGVkVGV4dENvbG9yID0gdGhpcy50aGVtZUNvbmZpZy50ZXh0Py5kaXNhYmxlZCB8fCB0aGlzLmJ1dHRvbkNvbmZpZy50ZXh0Py5kaXNhYmxlZDtcclxuICAgIHRoaXMuYWN0aXZlVGV4dENvbG9yID0gdGhpcy50aGVtZUNvbmZpZy50ZXh0Py5hY3RpdmUgfHwgdGhpcy5idXR0b25Db25maWcudGV4dD8uYWN0aXZlO1xyXG5cclxuICAgIHRoaXMuYmdDb2xvciA9IHRoaXMudGhlbWVDb25maWcuYmFja2dyb3VuZD8uZGVmYXVsdCB8fCB0aGlzLmJ1dHRvbkNvbmZpZy5iYWNrZ3JvdW5kPy5kZWZhdWx0O1xyXG4gICAgdGhpcy5ob3ZlckJnQ29sb3IgPSB0aGlzLnRoZW1lQ29uZmlnLmJhY2tncm91bmQ/LmhvdmVyIHx8IHRoaXMuYnV0dG9uQ29uZmlnLmJhY2tncm91bmQ/LmhvdmVyO1xyXG4gICAgdGhpcy5kaXNhYmxlZEJnQ29sb3IgPSB0aGlzLnRoZW1lQ29uZmlnLmJhY2tncm91bmQ/LmRpc2FibGVkIHx8IHRoaXMuYnV0dG9uQ29uZmlnLmJhY2tncm91bmQ/LmRpc2FibGVkO1xyXG4gICAgdGhpcy5hY3RpdmVCZ0NvbG9yID0gdGhpcy50aGVtZUNvbmZpZy5iYWNrZ3JvdW5kPy5hY3RpdmUgfHwgdGhpcy5idXR0b25Db25maWcuYmFja2dyb3VuZD8uYWN0aXZlO1xyXG5cclxuICAgIHRoaXMucHJvZ3Jlc3NDb2xvciA9IHRoaXMudGhlbWVDb25maWcucHJvZ3Jlc3M/LmRlZmF1bHQgfHwgdGhpcy5idXR0b25Db25maWcucHJvZ3Jlc3M/LmRlZmF1bHQ7XHJcbiAgICB0aGlzLmhvdmVyUHJvZ3Jlc3NDb2xvciA9IHRoaXMudGhlbWVDb25maWcucHJvZ3Jlc3M/LmhvdmVyIHx8IHRoaXMuYnV0dG9uQ29uZmlnLnByb2dyZXNzPy5ob3ZlcjtcclxuICAgIHRoaXMuZGlzYWJsZWRQcm9ncmVzc0NvbG9yID0gdGhpcy50aGVtZUNvbmZpZy5wcm9ncmVzcz8uZGlzYWJsZWQgfHwgdGhpcy5idXR0b25Db25maWcucHJvZ3Jlc3M/LmRpc2FibGVkO1xyXG4gICAgdGhpcy5hY3RpdmVQcm9ncmVzc0NvbG9yID0gdGhpcy50aGVtZUNvbmZpZy5wcm9ncmVzcz8uYWN0aXZlIHx8IHRoaXMuYnV0dG9uQ29uZmlnLnByb2dyZXNzPy5hY3RpdmU7XHJcbiAgICAvLyB0aGlzLnRvZ2dsZVVuc2VsZWN0ZWRDb2xvciA9IHRoaXMudGhlbWVDb25maWcudW5zZWxlY3RlZEJnQ29sb3IgfHwgdGhpcy5idXR0b25Db25maWcudW5zZWxlY3RlZEJnQ29sb3I7XHJcblxyXG4gICAgdGhpcy5ib3JkZXIgPSBfLmlzT2JqZWN0KHRoaXMudGhlbWVDb25maWcuYm9yZGVyKSA/ICh0aGlzLnRoZW1lQ29uZmlnLmJvcmRlciBhcyBNcmRTQnV0dG9uU3RhdGVDb2xvcik/LmRlZmF1bHQgOiB0aGlzLnRoZW1lQ29uZmlnLmJvcmRlciBhcyBzdHJpbmcgfHwgdGhpcy5idXR0b25Db25maWcuYm9yZGVyIGFzIHN0cmluZztcclxuICAgIHRoaXMuaG92ZXJCb3JkZXIgPSBfLmlzT2JqZWN0KHRoaXMudGhlbWVDb25maWcuYm9yZGVyKSA/ICh0aGlzLnRoZW1lQ29uZmlnLmJvcmRlciBhcyBNcmRTQnV0dG9uU3RhdGVDb2xvcik/LmhvdmVyIDogdGhpcy50aGVtZUNvbmZpZy5ib3JkZXIgYXMgc3RyaW5nIHx8IHRoaXMuYnV0dG9uQ29uZmlnLmJvcmRlciBhcyBzdHJpbmc7XHJcbiAgICB0aGlzLmRpc2FibGVkQm9yZGVyID0gXy5pc09iamVjdCh0aGlzLnRoZW1lQ29uZmlnLmJvcmRlcikgPyAodGhpcy50aGVtZUNvbmZpZy5ib3JkZXIgYXMgTXJkU0J1dHRvblN0YXRlQ29sb3IpPy5kaXNhYmxlZCA6IHRoaXMudGhlbWVDb25maWcuYm9yZGVyIGFzIHN0cmluZyB8fCB0aGlzLmJ1dHRvbkNvbmZpZy5ib3JkZXIgYXMgc3RyaW5nO1xyXG4gICAgdGhpcy5hY3RpdmVCb3JkZXIgPSBfLmlzT2JqZWN0KHRoaXMudGhlbWVDb25maWcuYm9yZGVyKSA/ICh0aGlzLnRoZW1lQ29uZmlnLmJvcmRlciBhcyBNcmRTQnV0dG9uU3RhdGVDb2xvcik/LmFjdGl2ZSA6IHRoaXMudGhlbWVDb25maWcuYm9yZGVyIGFzIHN0cmluZyB8fCB0aGlzLmJ1dHRvbkNvbmZpZy5ib3JkZXIgYXMgc3RyaW5nO1xyXG5cclxuICAgIHRoaXMuYm9yZGVyUmFkaXVzID0gdGhpcy5zaXplQ29uZmlnLmJvcmRlclJhZGl1cyB8fCB0aGlzLmJ1dHRvbkNvbmZpZy5ib3JkZXJSYWRpdXM7XHJcbiAgICB0aGlzLmZvbnRGYW1pbHkgPSB0aGlzLnNpemVDb25maWcuZm9udD8uZmFtaWx5IHx8IHRoaXMuYnV0dG9uQ29uZmlnLmZvbnQ/LmZhbWlseSB8fCB0aGlzLl9jb25maWcuYmFzZUZvbnQhLmZhbWlseTtcclxuICAgIHRoaXMuZm9udFNpemUgPSB0aGlzLnNpemVDb25maWcuZm9udD8uc2l6ZSB8fCB0aGlzLmJ1dHRvbkNvbmZpZy5mb250Py5zaXplIHx8IHRoaXMuX2NvbmZpZy5iYXNlRm9udCEuc2l6ZTtcclxuICAgIHRoaXMuZm9udFdlaWdodCA9IHRoaXMuc2l6ZUNvbmZpZy5mb250Py53ZWlnaHQgfHwgdGhpcy5idXR0b25Db25maWcuZm9udD8ud2VpZ2h0IHx8IHRoaXMuX2NvbmZpZy5iYXNlRm9udCEud2VpZ2h0O1xyXG4gICAgdGhpcy5taW5IZWlnaHQgPSB0aGlzLnNpemVDb25maWcubWluSGVpZ2h0IHx8IHRoaXMuYnV0dG9uQ29uZmlnLm1pbkhlaWdodDtcclxuICAgIHRoaXMuZGlhbWV0ZXIgPSB0aGlzLnNpemVDb25maWcuZGlhbWV0ZXIgfHwgdGhpcy5idXR0b25Db25maWcuZGlhbWV0ZXI7XHJcbiAgICB0aGlzLmljb25TaXplID0gdGhpcy5zaXplQ29uZmlnLmljb25TaXplIHx8IHRoaXMuYnV0dG9uQ29uZmlnLmljb25TaXplO1xyXG4gICAgdGhpcy5pY29uU2l6ZU51bWJlciA9IHRoaXMuc2l6ZUNvbmZpZy5pY29uU2l6ZU51bWJlciB8fCB0aGlzLmJ1dHRvbkNvbmZpZy5pY29uU2l6ZU51bWJlcjtcclxuICAgIHRoaXMudGV4dEljb25HYXAgPSB0aGlzLnNpemVDb25maWcudGV4dEljb25HYXAgfHwgdGhpcy5idXR0b25Db25maWcudGV4dEljb25HYXA7XHJcbiAgICB0aGlzLnBhZGRpbmcgPSB0aGlzLnNpemVDb25maWcucGFkZGluZyB8fCB0aGlzLmJ1dHRvbkNvbmZpZy5wYWRkaW5nO1xyXG5cclxuICAgIHRoaXMuaWNvbkVuZCA9IHNwZWNpZmljQnV0dG9uQ29uZmlnPy5pY29uRW5kID8/IHRoaXMuaWNvbkVuZDtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZChzcGVjaWZpY0J1dHRvbkNvbmZpZykgJiYgVXRpbC5pc0RlZmluZWQoc3BlY2lmaWNCdXR0b25Db25maWchLmljb25Hcm91cCkpIHtcclxuICAgICAgdGhpcy5pY29uU3RhdGVNYXAgPSB7XHJcbiAgICAgICAgZGVmYXVsdDogc3BlY2lmaWNCdXR0b25Db25maWchLmljb25Hcm91cD8uZGVmYXVsdCA/IHNwZWNpZmljQnV0dG9uQ29uZmlnIS5pY29uR3JvdXAuZGVmYXVsdCh0aGlzLmljb25TaXplTnVtYmVyISkgOiBudWxsLFxyXG4gICAgICAgIGRpc2FibGVkOiBzcGVjaWZpY0J1dHRvbkNvbmZpZyEuaWNvbkdyb3VwPy5kaXNhYmxlZCA/IHNwZWNpZmljQnV0dG9uQ29uZmlnIS5pY29uR3JvdXAuZGlzYWJsZWQodGhpcy5pY29uU2l6ZU51bWJlciEpIDogbnVsbCxcclxuICAgICAgICBob3Zlcjogc3BlY2lmaWNCdXR0b25Db25maWchLmljb25Hcm91cD8uaG92ZXIgPyBzcGVjaWZpY0J1dHRvbkNvbmZpZyEuaWNvbkdyb3VwLmhvdmVyKHRoaXMuaWNvblNpemVOdW1iZXIhKSA6IG51bGxcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm1yZEJ1dHRvblRleHRDb250ZW50KSB7XHJcbiAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IHRoaXMubXJkQnV0dG9uVGV4dENvbnRlbnQubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICB9XHJcbiAgICAvLyBGYWxscyBrZWluIGV4cGxpemlldGVyICd0b29sdGlwVGV4dCcgZ2VzZXR6dCBpc3QsIHdpcmQgZGVyIFRleHQgZGVzIEJ1dHRvbnMgYWxzIFRvb2x0aXAtVGV4dCB2ZXJ3ZW5kZXRcclxuICAgIGlmICghdGhpcy50b29sdGlwVGV4dCkge1xyXG4gICAgICB0aGlzLnRvb2x0aXBUZXh0ID0gdGhpcy5idXR0b25UZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnRvZ2dsZSAmJiB0aGlzLnRvZ2dsZVNlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2ssIHdlbm4gc2ljaCBkZXIgQ29sbGFicy1TdGF0dXMgZGVzIEJ1dHRvbnMgw6RuZGVydC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBpc0NvbGxhcHNlZCBHaWJ0IGFuLCBvYiBkZXIgQnV0dG9uIGtvbGxhYmllcnQgaXN0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBidXR0b25Db2xsYXBzZWQoaXNDb2xsYXBzZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIC8vIFdpciByZWFnaWVyZW4gbnVyLCB3ZW5uIHNpY2ggZGVyIFN0YXR1cyDDpG5kZXJ0XHJcbiAgICBpZiAodGhpcy5pc0NvbGxhcHNlZCAhPT0gaXNDb2xsYXBzZWQpIHtcclxuICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9IGlzQ29sbGFwc2VkO1xyXG4gICAgICAvLyBXZW5uICdjb2xsYXBzZVRvJyBnZXNldHp0IGlzdCwgd2lyZCBkZXIgQnV0dG9uIGVudHNwcmVjaGVuZCB1bWdlc3R5bHRcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuX2NvbGxhcHNlVG8pKSB7XHJcbiAgICAgICAgLy8gRGllc2UgV2VydGUgbcO8c3NlbiB6dXLDvGNrZ2VzZXR6dCB3ZXJkZW4sIGRhIHNpZSBmw7xyIGRlbiBuZXVlbiBTdHlsZSBuZXUgZ2VzZXR6dCB3ZXJkZW4gbcO8c3NlblxyXG4gICAgICAgIHRoaXMuYm9yZGVyUmFkaXVzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZm9udFNpemUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5taW5IZWlnaHQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5kaWFtZXRlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmljb25TaXplID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmIChpc0NvbGxhcHNlZCkge1xyXG4gICAgICAgICAgdGhpcy51bmNvbGxhcHNlZEFwcGVhcmFuY2UgPSB0aGlzLnNpemU7XHJcbiAgICAgICAgICB0aGlzLnNpemUgPSB0aGlzLl9jb2xsYXBzZVRvO1xyXG4gICAgICAgICAgdGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zaXplID0gdGhpcy51bmNvbGxhcHNlZEFwcGVhcmFuY2UgfHwgdGhpcy5zaXplO1xyXG4gICAgICAgICAgdGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmNsaWNrLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIjwhLS0gRGVyIGVpZ2VudGxpY2ggSFRNTC1CdXR0b24gLS0+XHJcbjxidXR0b24gY2xhc3M9XCJtcmQtYnV0dG9uLWNvbnRhaW5lclwiXHJcbiAgI2J1dHRvbkNvbnRhaW5lclxyXG4gIFtzdHlsZS4tLXRleHQtY29sb3JdPVwidGV4dENvbG9yXCJcclxuICBbc3R5bGUuLS1ob3Zlci10ZXh0LWNvbG9yXT1cImhvdmVyVGV4dENvbG9yXCJcclxuICBbc3R5bGUuLS1kaXNhYmxlZC10ZXh0LWNvbG9yXT1cImRpc2FibGVkVGV4dENvbG9yXCJcclxuICBbc3R5bGUuLS1hY3RpdmUtdGV4dC1jb2xvcl09XCJhY3RpdmVUZXh0Q29sb3JcIlxyXG4gIFtzdHlsZS4tLWJnLWNvbG9yXT1cImJnQ29sb3JcIlxyXG4gIFtzdHlsZS4tLWhvdmVyLWJnLWNvbG9yXT1cImhvdmVyQmdDb2xvclwiXHJcbiAgW3N0eWxlLi0tZGlzYWJsZWQtYmctY29sb3JdPVwiZGlzYWJsZWRCZ0NvbG9yXCJcclxuICBbc3R5bGUuLS1hY3RpdmUtYmctY29sb3JdPVwiYWN0aXZlQmdDb2xvclwiXHJcbiAgW3N0eWxlLi0tYm9yZGVyXT1cImJvcmRlclwiXHJcbiAgW3N0eWxlLi0taG92ZXItYm9yZGVyXT1cImhvdmVyQm9yZGVyXCJcclxuICBbc3R5bGUuLS1kaXNhYmxlZC1ib3JkZXJdPVwiZGlzYWJsZWRCb3JkZXJcIlxyXG4gIFtzdHlsZS4tLWFjdGl2ZS1ib3JkZXJdPVwiYWN0aXZlQm9yZGVyXCJcclxuXHJcbiAgW3N0eWxlLi0tYm9yZGVyLXJhZGl1c109XCJib3JkZXJSYWRpdXNcIlxyXG4gIFtzdHlsZS4tLW1pbi1oZWlnaHRdPVwibWluSGVpZ2h0XCJcclxuICBbc3R5bGUuLS1mb250LXNpemVdPVwiZm9udFNpemVcIlxyXG4gIFtzdHlsZS4tLWZvbnQtZmFtaWx5XT1cImZvbnRGYW1pbHlcIlxyXG4gIFtzdHlsZS4tLWZvbnQtd2VpZ2h0XT1cImZvbnRXZWlnaHRcIlxyXG4gIFtzdHlsZS4tLWRpYW1ldGVyXT1cImRpYW1ldGVyXCJcclxuICBbc3R5bGUuLS1pY29uLXNpemVdPVwiaWNvblNpemVcIlxyXG4gIFtzdHlsZS4tLXBhZGRpbmddPVwicGFkZGluZ1wiXHJcbiAgW3N0eWxlLi0tdW5zZWxlY3RlZC1jb2xvcl09XCJ0b2dnbGVVbnNlbGVjdGVkQ29sb3JcIlxyXG5cclxuICBbbmdTdHlsZV09XCJ7J21pbi13aWR0aCc6ICFjb2xsYXBzZSA/ICdmaXQtY29udGVudCcgOiAndW5zZXQnfVwiXHJcbiAgW2NsYXNzLmhvdmVyZWRdPVwiaG92ZXJlZFwiXHJcbiAgW2NsYXNzLnRvdWNoLWhvdmVyZWRdPVwiaXNUb3VjaEhvdmVyZWRcIlxyXG4gIFtjbGFzcy50b3VjaC1hY3RpdmVdPVwiaXNUb3VjaEFjdGl2ZVwiXHJcbiAgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICBbY2xhc3MubXJkLWljb24tYnV0dG9uXT1cImlzSWNvbkJ1dHRvblwiXHJcbiAgW21yZFRvb2xUaXBdPVwidG9vbHRpcFRleHRcIiBbc2hvd09uVHJ1bmNhdGVkRWxlbWVudF09XCJ0b29sdGlwSWZUcnVuY2F0ZWQgPyBtcmRCdXR0b25UZXh0Q29udGVudCA6IHVuZGVmaW5lZFwiIFtzaG93VG9vbFRpcF09XCJzaG93VG9vbHRpcCB8fCAodG9vbHRpcElmQ29sbGFwc2VkICYmIGlzQ29sbGFwc2VkKVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJtcmQtYnV0dG9uLWJhY2tncm91bmRcIj48L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibXJkLWJ1dHRvbi10b3VjaC1hcmVhXCIgI2J1dHRvblRvdWNoQXJlYVxyXG4gICAgKG1vdXNlZW50ZXIpPVwiaXNUb3VjaEhvdmVyZWQgPSB0cnVlXCJcclxuICAgIChtb3VzZWxlYXZlKT1cImlzVG91Y2hIb3ZlcmVkID0gZmFsc2U7IGlzVG91Y2hBY3RpdmUgPSBmYWxzZVwiXHJcbiAgICAobW91c2Vkb3duKT1cImlzVG91Y2hBY3RpdmUgPSB0cnVlXCJcclxuICAgIChtb3VzZXVwKT1cImlzVG91Y2hBY3RpdmUgPSBmYWxzZVwiPjwvZGl2PlxyXG4gIDwhLS0gRGVyIENvbnRlbnQgZGVzIEJ1dHRvbnMgLS0+XHJcbiAgPHNwYW4gY2xhc3M9XCJtcmQtYnV0dG9uLWNvbnRlbnRcIiBbbmdDbGFzc109XCJ7J2lzQ29sbGFwc2VkJzogaXNDb2xsYXBzZWR9XCI+XHJcbiAgICA8IS0tIExpbmtlciBJY29uLUNvbnRhaW5lciAtLT5cclxuICAgIDxzcGFuIGNsYXNzPVwibXJkLWJ1dHRvbi1pY29uLWNvbnRlbnRcIiAqbmdJZj1cIiFpc1NwZWNpZmljQnV0dG9uICYmICFpY29uU3RhdGVNYXBcIlxyXG4gICAgICAgICAgW2NsYXNzLmZ1bGwtaWNvbl09XCJpc0Z1bGxJY29uXCIgXHJcbiAgICAgICAgICBbaGlkZUlmVHJ1bmNhdGVkXT1cImNvbGxhcHNlXCIgXHJcbiAgICAgICAgICBkaXNwbGF5U3RhdGU9XCJmbGV4XCIgXHJcbiAgICAgICAgICByZXF1aXJlZEhpZGVBdHRyaWJ1dGU9XCJpY29uLWNvbGxhcHNlXCJcclxuICAgICAgICAgIGNoZWNrQ2hpbGRyZW5Gb3JBdHRyaWJ1dGUgXHJcbiAgICAgICAgICBbaGlkZU9uVHJ1bmNhdGVkRWxlbWVudF09XCJtcmRCdXR0b25UZXh0Q29udGVudFwiIFxyXG4gICAgICAgICAgW3BhcmVudFJlc2l6ZUVsZW1lbnRdPVwidGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXJkLWljb246bm90KFtpY29uLWVuZF0pLCBbbXJkLWljb25dOm5vdChbaWNvbi1lbmRdKVwiPjwvbmctY29udGVudD5cclxuICAgIDwvc3Bhbj5cclxuXHJcbiAgICA8c3BhbiBjbGFzcz1cIm1yZC1idXR0b24taWNvbi1jb250ZW50XCIgKm5nSWY9XCJpY29uU3RhdGVNYXAgJiYgIWljb25FbmRcIlxyXG4gICAgICAgICAgW3N0eWxlLm1hcmdpbi1yaWdodF09XCIhaXNJY29uQnV0dG9uID8gJzZweCcgOiAnMHB4J1wiXHJcbiAgICAgICAgICBbY2xhc3MuZnVsbC1pY29uXT1cImlzRnVsbEljb25cIiBcclxuICAgICAgICAgIFtoaWRlSWZUcnVuY2F0ZWRdPVwiY29sbGFwc2VcIiBcclxuICAgICAgICAgIGRpc3BsYXlTdGF0ZT1cImZsZXhcIiBcclxuICAgICAgICAgIHJlcXVpcmVkSGlkZUF0dHJpYnV0ZT1cImljb24tY29sbGFwc2VcIlxyXG4gICAgICAgICAgY2hlY2tDaGlsZHJlbkZvckF0dHJpYnV0ZSBcclxuICAgICAgICAgIFtoaWRlT25UcnVuY2F0ZWRFbGVtZW50XT1cIm1yZEJ1dHRvblRleHRDb250ZW50XCIgXHJcbiAgICAgICAgICBbcGFyZW50UmVzaXplRWxlbWVudF09XCJ0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFwiPlxyXG4gICAgICAgIDxtcmQtaWNvbi1ncm91cCAqbmdJZj1cImljb25TdGF0ZU1hcFwiIFtzdmdzXT1cImljb25TdGF0ZU1hcFwiIFtob3N0RWxlbWVudF09XCJidXR0b25Db250YWluZXJcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbaG92ZXJlZF09XCJob3ZlcmVkXCIgW2xvYWRpbmddPVwiaXNMb2FkaW5nXCIgW3NpemVdPVwiaWNvblNpemVOdW1iZXJcIj48L21yZC1pY29uLWdyb3VwPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgXHJcbiAgICA8IS0tIERlciBUZXh0IGRlcyBCdXR0b25zIC0tPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJtcmQtYnV0dG9uLXRleHQtY29udGVudFwiIFxyXG4gICAgICAgICAgKGhpZGRlbkNoYW5nZWQpPVwiYnV0dG9uQ29sbGFwc2VkKCRldmVudClcIiBcclxuICAgICAgICAgIFtoaWRlSWZUcnVuY2F0ZWRdPVwiY29sbGFwc2VcIiBcclxuICAgICAgICAgICNtcmRCdXR0b25UZXh0Q29udGVudCBcclxuICAgICAgICAgIFtwYXJlbnRSZXNpemVFbGVtZW50XT1cInRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIjpub3QoW21yZC1pY29uXSk6bm90KG1yZC1pY29uKVwiPjwvbmctY29udGVudD5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwibXJkLWJ1dHRvbi10ZXh0LWNvbnRlbnRcIiAqbmdJZj1cIiFpc0ljb25CdXR0b24gJiYgIWJ1dHRvblRleHQ/Lmxlbmd0aFwiXHJcbiAgICAgIChoaWRkZW5DaGFuZ2VkKT1cImJ1dHRvbkNvbGxhcHNlZCgkZXZlbnQpXCIgXHJcbiAgICAgIFtoaWRlSWZUcnVuY2F0ZWRdPVwiY29sbGFwc2VcIiBcclxuICAgICAgW3BhcmVudFJlc2l6ZUVsZW1lbnRdPVwidGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcIj5cclxuICAgICAgICB7e2RlZmF1bHRCdXR0b25UZXh0fX1cclxuICAgICAgPC9zcGFuPlxyXG5cclxuICAgIDxzcGFuIGNsYXNzPVwibXJkLWJ1dHRvbi1pY29uLWNvbnRlbnRcIiAqbmdJZj1cImljb25TdGF0ZU1hcCAmJiBpY29uRW5kXCJcclxuICAgICAgICAgIFtzdHlsZS5tYXJnaW4tbGVmdF09XCIhaXNJY29uQnV0dG9uID8gJzZweCcgOiAnMHB4J1wiXHJcbiAgICAgICAgICBbY2xhc3MuZnVsbC1pY29uXT1cImlzRnVsbEljb25cIiBcclxuICAgICAgICAgIFtoaWRlSWZUcnVuY2F0ZWRdPVwiY29sbGFwc2VcIiBcclxuICAgICAgICAgIGRpc3BsYXlTdGF0ZT1cImZsZXhcIiBcclxuICAgICAgICAgIHJlcXVpcmVkSGlkZUF0dHJpYnV0ZT1cImljb24tY29sbGFwc2VcIlxyXG4gICAgICAgICAgY2hlY2tDaGlsZHJlbkZvckF0dHJpYnV0ZSBcclxuICAgICAgICAgIFtoaWRlT25UcnVuY2F0ZWRFbGVtZW50XT1cIm1yZEJ1dHRvblRleHRDb250ZW50XCIgXHJcbiAgICAgICAgICBbcGFyZW50UmVzaXplRWxlbWVudF09XCJ0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFwiPlxyXG4gICAgICAgIDxtcmQtaWNvbi1ncm91cCAqbmdJZj1cImljb25TdGF0ZU1hcFwiIFtzdmdzXT1cImljb25TdGF0ZU1hcFwiIFtob3N0RWxlbWVudF09XCJidXR0b25Db250YWluZXJcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbaG92ZXJlZF09XCJob3ZlcmVkXCIgW2xvYWRpbmddPVwiaXNMb2FkaW5nXCIgW3NpemVdPVwiaWNvblNpemVOdW1iZXJcIj48L21yZC1pY29uLWdyb3VwPlxyXG4gICAgPC9zcGFuPlxyXG5cclxuXHJcbiAgIFxyXG4gICAgPCEtLSBSZWNodGVyIEljb24tQ29udGFpbmVyIC0tPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJtcmQtYnV0dG9uLWljb24tY29udGVudFwiICpuZ0lmPVwiIWlzU3BlY2lmaWNCdXR0b24gJiYgIWljb25TdGF0ZU1hcFwiIFxyXG4gICAgICAgICAgW2NsYXNzLmZ1bGwtaWNvbl09XCJpc0Z1bGxJY29uXCIgXHJcbiAgICAgICAgICBbaGlkZUlmVHJ1bmNhdGVkXT1cImNvbGxhcHNlXCIgXHJcbiAgICAgICAgICBkaXNwbGF5U3RhdGU9XCJmbGV4XCIgXHJcbiAgICAgICAgICByZXF1aXJlZEhpZGVBdHRyaWJ1dGU9XCJpY29uLWNvbGxhcHNlXCJcclxuICAgICAgICAgIGNoZWNrQ2hpbGRyZW5Gb3JBdHRyaWJ1dGUgXHJcbiAgICAgICAgICBbaGlkZU9uVHJ1bmNhdGVkRWxlbWVudF09XCJtcmRCdXR0b25UZXh0Q29udGVudFwiIFxyXG4gICAgICAgICAgW3BhcmVudFJlc2l6ZUVsZW1lbnRdPVwidGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXJkLWljb25baWNvbi1lbmRdLCBbbXJkLWljb25dW2ljb24tZW5kXVwiPjwvbmctY29udGVudD5cclxuICAgIDwvc3Bhbj5cclxuICA8L3NwYW4+XHJcblxyXG4gIDwhLS0gRGllIFByb2dyZXNzLUJhciBlaW5lcyBCdXR0b25zIChuaWNodCBmw7xyIEljb24tLCBGYWItIHVuZCBNaW5pLUZhYi1CdXR0b25zKSAtLT5cclxuICA8bXJkLXByb2dyZXNzLWJhciBjbGFzcz1cIm1yZC1idXR0b24tcHJvZ3Jlc3MtYmFyXCJcclxuICAgICpuZ0lmPVwiIWlzSWNvbkJ1dHRvbiAmJiAoaXNMb2FkaW5nIHx8IGxvYWRpbmc/LnZhbHVlIHx8IGxvYWRpbmdQcm9ncmVzcz8udmFsdWUgfHwgbG9hZGluZ1Byb2dyZXNzPy52YWx1ZSA9PT0gMClcIlxyXG4gICAgW3ZhbHVlXT1cImxvYWRpbmdQcm9ncmVzcz8udmFsdWVcIiBbbW9kZV09XCJsb2FkaW5nUHJvZ3Jlc3MgPyAnZGV0ZXJtaW5hdGUnIDogJ2luZGV0ZXJtaW5hdGUnXCIgW2NvbG9yXT1cInByb2dyZXNzQ29sb3JcIj48L21yZC1wcm9ncmVzcy1iYXI+XHJcbiAgPCEtLSBEZXIgUHJvZ3Jlc3MtU3Bpbm5lciBlaW5lcyBCdXR0b25zIChudXIgZsO8ciBJY29uLSwgRmFiLSB1bmQgTWluaS1GYWItQnV0dG9ucykgLS0+XHJcbiAgPG1yZC1wcm9ncmVzcy1zcGlubmVyIGNsYXNzPVwibXJkLWJ1dHRvbi1wcm9ncmVzcy1zcGlubmVyXCJcclxuICAgICpuZ0lmPVwiaXNJY29uQnV0dG9uICYmIChpc0xvYWRpbmcgfHwgbG9hZGluZz8udmFsdWUgfHwgbG9hZGluZ1Byb2dyZXNzPy52YWx1ZSB8fCBsb2FkaW5nUHJvZ3Jlc3M/LnZhbHVlID09PSAwKVwiXHJcbiAgICBbdmFsdWVdPVwibG9hZGluZ1Byb2dyZXNzPy52YWx1ZVwiIFttb2RlXT1cImxvYWRpbmdQcm9ncmVzcyA/ICdkZXRlcm1pbmF0ZScgOiAnaW5kZXRlcm1pbmF0ZSdcIiBbY29sb3JdPVwicHJvZ3Jlc3NDb2xvclwiPjwvbXJkLXByb2dyZXNzLXNwaW5uZXI+XHJcbjwvYnV0dG9uPlxyXG4iXX0=