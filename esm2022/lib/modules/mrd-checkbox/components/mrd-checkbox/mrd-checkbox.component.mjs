import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, booleanAttribute } from '@angular/core';
import { BaseObject, SubscriptionHandler, Util } from 'mrd-core';
import { merge } from 'rxjs';
import { sizeAttribute } from '../../../../common/transforms/size-transform';
import { colorAttribute } from '../../../../common/transforms/color-transform';
import { ConfigUtil } from '../../../../common/util/config.util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../mrd-tooltip/common/directive/tool-tip-renderer/tool-tip-renderer.directive";
const _c0 = ["checkboxlabel"];
function MrdCheckboxComponent_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 9);
} }
function MrdCheckboxComponent_span_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 10);
    i0.ɵɵelement(2, "g", 11)(3, "g", 12);
    i0.ɵɵelementStart(4, "g", 13)(5, "title");
    i0.ɵɵtext(6, "check");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "path", 14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} }
function MrdCheckboxComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 6);
    i0.ɵɵtemplate(1, MrdCheckboxComponent_span_1_span_1_Template, 1, 0, "span", 7);
    i0.ɵɵtemplate(2, MrdCheckboxComponent_span_1_ng_container_2_Template, 8, 0, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.indeterminate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.checked && !ctx_r0.indeterminate);
} }
function MrdCheckboxComponent_div_2_ng_content_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1, ["*ngIf", "checked"]);
} }
function MrdCheckboxComponent_div_2_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 2, ["*ngIf", "!checked"]);
} }
const _c1 = function (a0) { return { "isHover": a0 }; };
function MrdCheckboxComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, MrdCheckboxComponent_div_2_ng_content_1_Template, 1, 0, "ng-content", 8);
    i0.ɵɵtemplate(2, MrdCheckboxComponent_div_2_ng_content_2_Template, 1, 0, "ng-content", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c1, !ctx_r1.customHoverIcons));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.checked);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.checked);
} }
function MrdCheckboxComponent_div_3_ng_content_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 3, ["*ngIf", "checked"]);
} }
function MrdCheckboxComponent_div_3_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 4, ["*ngIf", "!checked"]);
} }
function MrdCheckboxComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtemplate(1, MrdCheckboxComponent_div_3_ng_content_1_Template, 1, 0, "ng-content", 8);
    i0.ɵɵtemplate(2, MrdCheckboxComponent_div_3_ng_content_2_Template, 1, 0, "ng-content", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.checked);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.checked);
} }
const _c2 = ["*", [["", "icon-checked", ""]], [["", "icon-unchecked", ""]], [["", "icon-checked-hover", ""]], [["", "icon-unchecked-hover", ""]]];
const _c3 = function (a0) { return { "mrd-checkbox-disabled": a0 }; };
const _c4 = ["*", "[icon-checked]", "[icon-unchecked]", "[icon-checked-hover]", "[icon-unchecked-hover]"];
export class MrdCheckboxComponent extends BaseObject {
    cdr;
    label;
    /** Wert und Deaktivierung des Controls werden laufend uebernommen, auch nach setValue(), reset(), disable() und enable() */
    set formControl(control) {
        this.formularAbo?.unsubscribe();
        this._formControl = control;
        if (Util.isDefined(control)) {
            if (Util.isDefined(control.value)) {
                this.checked = !!control.value;
            }
            // statusChanges, damit disable()/enable() auch bei OnPush sofort sichtbar werden
            this.formularAbo = this.watch(merge(control.valueChanges, control.control.statusChanges), new SubscriptionHandler(() => {
                this.checked = !!control.value;
                this.cdr.markForCheck();
            }));
        }
    }
    get formControl() {
        return this._formControl;
    }
    _formControl;
    formularAbo;
    // @Input({transform: booleanAttribute}) public fill: boolean = false;
    // @Input({transform: booleanAttribute}) public outline: boolean = false;
    rounded = false;
    // @Input({transform: booleanAttribute}) public primary: boolean = false;
    // @Input({transform: booleanAttribute}) public accent: boolean = false;
    // @Input({transform: booleanAttribute}) public warn: boolean = false;
    color = '#000000';
    colorHover = '#000000';
    colorChecked = '#000000';
    colorCheckedHover = '#000000';
    bgColor = 'transparent';
    bgColorHover = 'transparent';
    bgColorChecked = 'transparent';
    bgColorCheckedHover = 'transparent';
    border = 'none';
    borderHover = 'none';
    borderChecked = 'none';
    borderCheckedHover = 'none';
    checked = false;
    /**
     * Teilweise ausgewaehlt (z. B. "alle uebernehmen", wenn nur ein Teil gewaehlt ist): Strich statt Haken.
     * Ein Klick hebt den Zustand auf (`indeterminateChange`) und schaltet `checked` wie gewohnt um.
     * Gilt nur fuer das Standard-Kaestchen, nicht fuer `customIcons`.
     */
    indeterminate = false;
    disabled = false;
    customIcons = false;
    customHoverIcons = false;
    checkboxSize = '16px';
    checkboxHeight;
    checkboxWidth;
    singleLine = false;
    fitContent = false;
    ellipsis = false;
    tooltip = false;
    tooltipIfTruncated = false;
    set tooltipText(value) {
        if (Util.isDefined(value)) {
            this.customTooltipText = true;
            this._tooltipText = value;
        }
        else if (Util.isDefined(this.label)) {
            this._tooltipText = this.label.nativeElement.innerText;
        }
    }
    get tooltipText() {
        return this._tooltipText;
    }
    _tooltipText;
    customTooltipText = false;
    tooltipPosition = 'bottom';
    tooltipDisabled = false;
    /**
     * Die Checkbox schaltet nicht selbst um, sondern meldet den gewuenschten Wert ueber `checkedChange`;
     * angezeigt wird allein `checked`. Fuer Listen, die selbst entscheiden, ob ein Klick zaehlt. Nicht mit `mrdFormControl` kombinieren.
     */
    controlled = false;
    /** Klick nicht an umgebende Elemente weitergeben (auch wenn deaktiviert), z. B. in einer klickbaren Zeile */
    stopPropagation = false;
    checkedChange = new EventEmitter();
    indeterminateChange = new EventEmitter();
    config = ConfigUtil.getConfig();
    constructor(cdr) {
        super();
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        if (Util.isDefined(this.formControl) && Util.isDefined(this.formControl.value)) {
            this.checked = !!this.formControl.value;
        }
        if (this.tooltipIfTruncated) {
            this.tooltip = true;
        }
        if (this.tooltip && !Util.isDefined(this.tooltipText)) {
            this._tooltipText = this.label.nativeElement.innerText;
        }
        if (!Util.isDefined(this.checkboxHeight)) {
            this.checkboxHeight = this.checkboxSize;
        }
        if (!Util.isDefined(this.checkboxWidth)) {
            this.checkboxWidth = this.checkboxSize;
        }
        this.cdr.detectChanges();
        // ['checkbox', 'fill', 'selected', 'primary', 'text'];
        // ['checkbox', 'selected', 'primary', 'text'];
        // ['baseColor', 'primary'];
        // if (this.primary) {
        //   this.color = _.isObject(this.config.baseColors.primary) ? (this.config.baseColors.primary as MrdBaseColorTheme).text : this.config.baseColors.primary as string;
        // } else if (this.accent) {
        //   this.color = this.config.accentColor;
        // } else if (this.warn) {
        //   this.color = this.config.warnColor;
        // }
    }
    ngAfterViewChecked() {
        // Ohne Beschriftung entfaellt der Abstand zwischen Kaestchen und Text. Direkt am DOM, weil sich die Beschriftung
        // erst nach der Pruefung des Templates ergibt (projizierter Inhalt) - ein Binding wuerde hier ExpressionChanged ausloesen.
        if (Util.isDefined(this.label)) {
            const ohneText = (this.label.nativeElement.textContent ?? '').trim().length === 0;
            this.label.nativeElement.parentElement?.classList.toggle('ohne-text', ohneText);
        }
        if (this.tooltip && Util.isDefined(this.label) && !this.customTooltipText && (!Util.isDefined(this.tooltipText) || this.tooltipText !== this.label.nativeElement.innerText)) {
            this._tooltipText = this.label.nativeElement.innerText;
        }
    }
    // private initBaseStyle(): void {
    // }
    get ariaChecked() {
        if (this.indeterminate) {
            return 'mixed';
        }
        return this.checked ? 'true' : 'false';
    }
    toggle(event) {
        if (this.stopPropagation) {
            event?.stopPropagation();
        }
        if (this.disabled || (Util.isDefined(this.formControl) && this.formControl.disabled)) {
            return;
        }
        if (this.controlled) {
            this.checkedChange.emit(!this.checked);
            return;
        }
        if (this.indeterminate) {
            this.indeterminate = false;
            this.indeterminateChange.emit(false);
        }
        this.checked = !this.checked;
        if (Util.isDefined(this.formControl)) {
            this.formControl.setValue(this.checked);
        }
        this.checkedChange.emit(this.checked);
        this.cdr.detectChanges();
    }
    /** @nocollapse */ static ɵfac = function MrdCheckboxComponent_Factory(t) { return new (t || MrdCheckboxComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdCheckboxComponent, selectors: [["mrd-checkbox"]], viewQuery: function MrdCheckboxComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.label = _t.first);
        } }, hostVars: 2, hostBindings: function MrdCheckboxComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("max-width", ctx.fitContent ? "fit-content" : "100%");
        } }, inputs: { formControl: ["mrdFormControl", "formControl"], rounded: ["rounded", "rounded", booleanAttribute], color: ["color", "color", colorAttribute], colorHover: ["colorHover", "colorHover", colorAttribute], colorChecked: ["colorChecked", "colorChecked", colorAttribute], colorCheckedHover: ["colorCheckedHover", "colorCheckedHover", colorAttribute], bgColor: ["bgColor", "bgColor", colorAttribute], bgColorHover: ["bgColorHover", "bgColorHover", colorAttribute], bgColorChecked: ["bgColorChecked", "bgColorChecked", colorAttribute], bgColorCheckedHover: ["bgColorCheckedHover", "bgColorCheckedHover", colorAttribute], border: "border", borderHover: "borderHover", borderChecked: "borderChecked", borderCheckedHover: "borderCheckedHover", checked: ["checked", "checked", booleanAttribute], indeterminate: ["indeterminate", "indeterminate", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], customIcons: ["customIcons", "customIcons", booleanAttribute], customHoverIcons: ["customHoverIcons", "customHoverIcons", booleanAttribute], checkboxSize: ["checkboxSize", "checkboxSize", sizeAttribute], checkboxHeight: ["checkboxHeight", "checkboxHeight", sizeAttribute], checkboxWidth: ["checkboxWidth", "checkboxWidth", sizeAttribute], singleLine: ["single-line", "singleLine", booleanAttribute], fitContent: ["fit-content", "fitContent", booleanAttribute], ellipsis: ["ellipsis", "ellipsis", booleanAttribute], tooltip: ["tooltip", "tooltip", booleanAttribute], tooltipIfTruncated: ["tooltipIfTruncated", "tooltipIfTruncated", booleanAttribute], tooltipText: "tooltipText", tooltipPosition: "tooltipPosition", tooltipDisabled: ["tooltipDisabled", "tooltipDisabled", booleanAttribute], controlled: ["controlled", "controlled", booleanAttribute], stopPropagation: ["stopPropagation", "stopPropagation", booleanAttribute] }, outputs: { checkedChange: "checkedChange", indeterminateChange: "indeterminateChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c4, decls: 7, vars: 50, consts: [["role", "checkbox", 1, "mrd-checkbox-container", 3, "ngClass", "mrdToolTip", "showToolTip", "position", "showOnTruncatedElement", "click"], ["class", "mrd-checkbox-box", 4, "ngIf"], ["class", "mrd-checkbox-custom", 3, "ngClass", 4, "ngIf"], ["class", "mrd-checkbox-custom-hover", 4, "ngIf"], [1, "mrd-checkbox-label"], ["checkboxlabel", ""], [1, "mrd-checkbox-box"], ["class", "mrd-checkbox-strich", 4, "ngIf"], [4, "ngIf"], [1, "mrd-checkbox-strich"], ["fill", "#ffffff", "width", "16px", "height", "16px", "viewBox", "-4 0 32 32", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "stroke", "#000000", "stroke-width", "0.00032"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "SVGRepo_iconCarrier"], ["d", "M19.375 5.063l-9.5 13.625-6.563-4.875-3.313 4.594 11.188 8.531 12.813-18.375z"], [1, "mrd-checkbox-custom", 3, "ngClass"], [1, "mrd-checkbox-custom-hover"]], template: function MrdCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c2);
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function MrdCheckboxComponent_Template_div_click_0_listener($event) { return ctx.toggle($event); });
            i0.ɵɵtemplate(1, MrdCheckboxComponent_span_1_Template, 3, 2, "span", 1);
            i0.ɵɵtemplate(2, MrdCheckboxComponent_div_2_Template, 3, 5, "div", 2);
            i0.ɵɵtemplate(3, MrdCheckboxComponent_div_3_Template, 3, 2, "div", 3);
            i0.ɵɵelementStart(4, "span", 4, 5);
            i0.ɵɵprojection(6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const _r3 = i0.ɵɵreference(5);
            i0.ɵɵstyleProp("--box-height", ctx.checkboxHeight)("--box-width", ctx.checkboxWidth)("--bg-color", ctx.bgColor)("--bg-color-hover", ctx.bgColorHover)("--bg-color-checked", ctx.bgColorChecked)("--bg-color-checked-hover", ctx.bgColorCheckedHover)("--color", ctx.color)("--color-hover", ctx.colorHover)("--color-checked", ctx.colorChecked)("--color-checked-hover", ctx.colorCheckedHover)("--border", ctx.border)("--border-hover", ctx.borderHover)("--border-checked", ctx.borderChecked)("--border-checked-hover", ctx.borderCheckedHover);
            i0.ɵɵclassProp("rounded", ctx.rounded)("checked", ctx.checked && !ctx.indeterminate)("indeterminate", ctx.indeterminate);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(48, _c3, (ctx.formControl == null ? null : ctx.formControl.disabled) || ctx.disabled))("mrdToolTip", ctx.tooltipText)("showToolTip", ctx.tooltip && !ctx.tooltipDisabled)("position", ctx.tooltipPosition)("showOnTruncatedElement", ctx.tooltipIfTruncated ? _r3 : undefined);
            i0.ɵɵattribute("aria-checked", ctx.ariaChecked)("aria-disabled", (ctx.formControl == null ? null : ctx.formControl.disabled) || ctx.disabled);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.customIcons);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.customIcons);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.customHoverIcons);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("singleLine", ctx.singleLine)("ellipsis", ctx.ellipsis);
        } }, dependencies: [i1.NgClass, i1.NgIf, i2.ToolTipRendererDirective], styles: ["[_nghost-%COMP%]{display:block;width:-moz-fit-content;width:fit-content}.mrd-checkbox-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;cursor:pointer;color:var(--color);background-color:var(--bg-color);border:var(--border);padding:4px 8px 4px 4px;line-height:1.25em}.mrd-checkbox-container.rounded[_ngcontent-%COMP%]{border-radius:999999px}.mrd-checkbox-container.ohne-text[_ngcontent-%COMP%]   .mrd-checkbox-box[_ngcontent-%COMP%], .mrd-checkbox-container.ohne-text[_ngcontent-%COMP%]     [icon-checked], .mrd-checkbox-container.ohne-text[_ngcontent-%COMP%]     [icon-unchecked], .mrd-checkbox-container.ohne-text[_ngcontent-%COMP%]     [icon-checked-hover], .mrd-checkbox-container.ohne-text[_ngcontent-%COMP%]     [icon-unchecked-hover]{margin-right:0}.mrd-checkbox-container[_ngcontent-%COMP%]     [icon-checked], .mrd-checkbox-container[_ngcontent-%COMP%]     [icon-unchecked], .mrd-checkbox-container[_ngcontent-%COMP%]     [icon-checked-hover], .mrd-checkbox-container[_ngcontent-%COMP%]     [icon-unchecked-hover]{display:block;max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-height);min-height:var(--box-width);margin-right:6px}.mrd-checkbox-container.indeterminate[_ngcontent-%COMP%]   .mrd-checkbox-box[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;background-color:#65b32e;border:none}.mrd-checkbox-container[_ngcontent-%COMP%]   .mrd-checkbox-strich[_ngcontent-%COMP%]{width:60%;height:2px;background-color:#fff}.mrd-checkbox-container.checked[_ngcontent-%COMP%]{color:var(--color-checked);background-color:var(--bg-color-checked);border:var(--border-checked)}.mrd-checkbox-container.checked[_ngcontent-%COMP%]   .mrd-checkbox-box[_ngcontent-%COMP%]{background-color:#65b32e;border:none}.mrd-checkbox-container[_ngcontent-%COMP%]   .mrd-checkbox-box[_ngcontent-%COMP%]{max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-width);min-height:var(--box-height);display:inline-block;border:2px solid rgba(0,0,0,.54);border-radius:2px;text-align:center;margin-right:6px}.mrd-checkbox-container[_ngcontent-%COMP%]   .mrd-checkbox-label[_ngcontent-%COMP%]{overflow:hidden}.mrd-checkbox-container[_ngcontent-%COMP%]   .mrd-checkbox-label.singleLine[_ngcontent-%COMP%]{white-space:nowrap}.mrd-checkbox-container[_ngcontent-%COMP%]   .mrd-checkbox-label.ellipsis[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]{cursor:inherit}.mrd-checkbox-container.mrd-checkbox-disabled.indeterminate[_ngcontent-%COMP%]   .mrd-checkbox-box[_ngcontent-%COMP%]{background-color:#afa6a6af}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]   .mrd-checkbox-box[_ngcontent-%COMP%]{border-color:#afa6a6}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]   .mrd-checkbox-box.checked[_ngcontent-%COMP%]{background-color:#afa6a6af}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]   .mrd-checkbox-label[_ngcontent-%COMP%]{color:#afa6a6}.mrd-checkbox-container[_ngcontent-%COMP%]:hover:not(.mrd-checkbox-disabled){color:var(--color-hover);background-color:var(--bg-color-hover);border:var(--border-hover)}.mrd-checkbox-container[_ngcontent-%COMP%]:hover:not(.mrd-checkbox-disabled).checked{color:var(--color-checked-hover);background-color:var(--bg-color-checked-hover);border:var(--border-checked-hover)}.mrd-checkbox-container[_ngcontent-%COMP%]:hover:not(.mrd-checkbox-disabled)   .mrd-checkbox-custom[_ngcontent-%COMP%]:not(.isHover){display:none}.mrd-checkbox-container[_ngcontent-%COMP%]:hover:not(.mrd-checkbox-disabled)   .mrd-checkbox-custom-hover[_ngcontent-%COMP%]{display:flex}.mrd-checkbox-custom[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.mrd-checkbox-custom-hover[_ngcontent-%COMP%]{display:none;flex-direction:column;justify-content:center;align-items:center}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdCheckboxComponent, [{
        type: Component,
        args: [{ selector: 'mrd-checkbox', host: {
                    "[style.max-width]": "fitContent ? 'fit-content' : '100%'",
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-checkbox-container\" [ngClass]=\"{'mrd-checkbox-disabled': formControl?.disabled || disabled}\" (click)=\"toggle($event)\"\r\n  role=\"checkbox\" [attr.aria-checked]=\"ariaChecked\" [attr.aria-disabled]=\"formControl?.disabled || disabled\"\r\n  [mrdToolTip]=\"tooltipText\" [showToolTip]=\"tooltip && !tooltipDisabled\" [position]=\"tooltipPosition\" [showOnTruncatedElement]=\"tooltipIfTruncated ? checkboxlabel : undefined\"\r\n  [style.--box-height]=\"checkboxHeight\" \r\n  [style.--box-width]=\"checkboxWidth\"\r\n  [style.--bg-color]=\"bgColor\"\r\n  [style.--bg-color-hover]=\"bgColorHover\"\r\n  [style.--bg-color-checked]=\"bgColorChecked\"\r\n  [style.--bg-color-checked-hover]=\"bgColorCheckedHover\"\r\n  [style.--color]=\"color\"\r\n  [style.--color-hover]=\"colorHover\"\r\n  [style.--color-checked]=\"colorChecked\"\r\n  [style.--color-checked-hover]=\"colorCheckedHover\"\r\n  [style.--border]=\"border\"\r\n  [style.--border-hover]=\"borderHover\"\r\n  [style.--border-checked]=\"borderChecked\"\r\n  [style.--border-checked-hover]=\"borderCheckedHover\"\r\n  [class.rounded]=\"rounded\"\r\n  [class.checked]=\"checked && !indeterminate\"\r\n  [class.indeterminate]=\"indeterminate\"\r\n  >\r\n  <span class=\"mrd-checkbox-box\" *ngIf=\"!customIcons\">\r\n    <span class=\"mrd-checkbox-strich\" *ngIf=\"indeterminate\"></span>\r\n    <ng-container *ngIf=\"checked && !indeterminate\">\r\n      <svg fill=\"#ffffff\" width=\"16px\" height=\"16px\" viewBox=\"-4 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"#000000\" stroke-width=\"0.00032\">\r\n        <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\r\n        <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g>\r\n        <g id=\"SVGRepo_iconCarrier\"> <title>check</title> <path d=\"M19.375 5.063l-9.5 13.625-6.563-4.875-3.313 4.594 11.188 8.531 12.813-18.375z\"></path></g>\r\n      </svg>\r\n    </ng-container>\r\n  </span>\r\n  <div class=\"mrd-checkbox-custom\" [ngClass]=\"{'isHover': !customHoverIcons}\" *ngIf=\"customIcons\">\r\n    <ng-content *ngIf=\"checked\" select=\"[icon-checked]\"></ng-content>\r\n    <ng-content *ngIf=\"!checked\" select=\"[icon-unchecked]\"></ng-content>\r\n  </div>\r\n  <div class=\"mrd-checkbox-custom-hover\" *ngIf=\"customHoverIcons\">\r\n    <ng-content *ngIf=\"checked\" select=\"[icon-checked-hover]\"></ng-content>\r\n    <ng-content *ngIf=\"!checked\" select=\"[icon-unchecked-hover]\"></ng-content>\r\n  </div>\r\n  \r\n  \r\n  <span #checkboxlabel class=\"mrd-checkbox-label\"\r\n    [class.singleLine]=\"singleLine\"\r\n    [class.ellipsis]=\"ellipsis\"\r\n  ><ng-content></ng-content></span>\r\n</div>\r\n", styles: [":host{display:block;width:-moz-fit-content;width:fit-content}.mrd-checkbox-container{display:flex;flex-direction:row;align-items:center;cursor:pointer;color:var(--color);background-color:var(--bg-color);border:var(--border);padding:4px 8px 4px 4px;line-height:1.25em}.mrd-checkbox-container.rounded{border-radius:999999px}.mrd-checkbox-container.ohne-text .mrd-checkbox-box,.mrd-checkbox-container.ohne-text ::ng-deep [icon-checked],.mrd-checkbox-container.ohne-text ::ng-deep [icon-unchecked],.mrd-checkbox-container.ohne-text ::ng-deep [icon-checked-hover],.mrd-checkbox-container.ohne-text ::ng-deep [icon-unchecked-hover]{margin-right:0}.mrd-checkbox-container ::ng-deep [icon-checked],.mrd-checkbox-container ::ng-deep [icon-unchecked],.mrd-checkbox-container ::ng-deep [icon-checked-hover],.mrd-checkbox-container ::ng-deep [icon-unchecked-hover]{display:block;max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-height);min-height:var(--box-width);margin-right:6px}.mrd-checkbox-container.indeterminate .mrd-checkbox-box{display:inline-flex;align-items:center;justify-content:center;background-color:#65b32e;border:none}.mrd-checkbox-container .mrd-checkbox-strich{width:60%;height:2px;background-color:#fff}.mrd-checkbox-container.checked{color:var(--color-checked);background-color:var(--bg-color-checked);border:var(--border-checked)}.mrd-checkbox-container.checked .mrd-checkbox-box{background-color:#65b32e;border:none}.mrd-checkbox-container .mrd-checkbox-box{max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-width);min-height:var(--box-height);display:inline-block;border:2px solid rgba(0,0,0,.54);border-radius:2px;text-align:center;margin-right:6px}.mrd-checkbox-container .mrd-checkbox-label{overflow:hidden}.mrd-checkbox-container .mrd-checkbox-label.singleLine{white-space:nowrap}.mrd-checkbox-container .mrd-checkbox-label.ellipsis{white-space:nowrap;text-overflow:ellipsis}.mrd-checkbox-container.mrd-checkbox-disabled{cursor:inherit}.mrd-checkbox-container.mrd-checkbox-disabled.indeterminate .mrd-checkbox-box{background-color:#afa6a6af}.mrd-checkbox-container.mrd-checkbox-disabled .mrd-checkbox-box{border-color:#afa6a6}.mrd-checkbox-container.mrd-checkbox-disabled .mrd-checkbox-box.checked{background-color:#afa6a6af}.mrd-checkbox-container.mrd-checkbox-disabled .mrd-checkbox-label{color:#afa6a6}.mrd-checkbox-container:hover:not(.mrd-checkbox-disabled){color:var(--color-hover);background-color:var(--bg-color-hover);border:var(--border-hover)}.mrd-checkbox-container:hover:not(.mrd-checkbox-disabled).checked{color:var(--color-checked-hover);background-color:var(--bg-color-checked-hover);border:var(--border-checked-hover)}.mrd-checkbox-container:hover:not(.mrd-checkbox-disabled) .mrd-checkbox-custom:not(.isHover){display:none}.mrd-checkbox-container:hover:not(.mrd-checkbox-disabled) .mrd-checkbox-custom-hover{display:flex}.mrd-checkbox-custom{display:flex;flex-direction:column;justify-content:center;align-items:center}.mrd-checkbox-custom-hover{display:none;flex-direction:column;justify-content:center;align-items:center}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { label: [{
            type: ViewChild,
            args: ['checkboxlabel']
        }], formControl: [{
            type: Input,
            args: ['mrdFormControl']
        }], rounded: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], color: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], colorHover: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], colorChecked: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], colorCheckedHover: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], bgColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], bgColorHover: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], bgColorChecked: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], bgColorCheckedHover: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], border: [{
            type: Input
        }], borderHover: [{
            type: Input
        }], borderChecked: [{
            type: Input
        }], borderCheckedHover: [{
            type: Input
        }], checked: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], indeterminate: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], disabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], customIcons: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], customHoverIcons: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], checkboxSize: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], checkboxHeight: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], checkboxWidth: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], singleLine: [{
            type: Input,
            args: [{ alias: 'single-line', transform: booleanAttribute }]
        }], fitContent: [{
            type: Input,
            args: [{ alias: 'fit-content', transform: booleanAttribute }]
        }], ellipsis: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], tooltip: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], tooltipIfTruncated: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], tooltipText: [{
            type: Input
        }], tooltipPosition: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], controlled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], stopPropagation: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], checkedChange: [{
            type: Output
        }], indeterminateChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtY2hlY2tib3gvY29tcG9uZW50cy9tcmQtY2hlY2tib3gvbXJkLWNoZWNrYm94LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtY2hlY2tib3gvY29tcG9uZW50cy9tcmQtY2hlY2tib3gvbXJkLWNoZWNrYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBbUMsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0wsT0FBTyxFQUF5QixVQUFVLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxLQUFLLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUF1QixNQUFNLCtDQUErQyxDQUFDO0FBRXBHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7O0lDZ0I3RCwwQkFBK0Q7OztJQUMvRCw2QkFBZ0Q7SUFDOUMsbUJBQTZKO0lBQTdKLCtCQUE2SjtJQUMzSix3QkFBK0MsWUFBQTtJQUUvQyw2QkFBNEIsWUFBQTtJQUFRLHFCQUFLO0lBQUEsaUJBQVE7SUFBQywyQkFBK0Y7SUFBQSxpQkFBSSxFQUFBO0lBRXpKLDBCQUFlOzs7SUFSakIsK0JBQW9EO0lBQ2xELDhFQUErRDtJQUMvRCw4RkFNZTtJQUNqQixp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RUFBQztZQU1TLFVBQVU7a0JBQXRELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFUyxlQUFlO2tCQUEzRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBRW5CLGFBQWE7a0JBQTdCLE1BQU07WUFDVSxtQkFBbUI7a0JBQW5DLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdDaGVja2VkLCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIGJvb2xlYW5BdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWNjZXNzYWJsZUZvcm1Db250cm9sLCBCYXNlT2JqZWN0LCBTdWJzY3JpcHRpb25IYW5kbGVyLCBVdGlsIH0gZnJvbSAnbXJkLWNvcmUnO1xyXG5pbXBvcnQgeyBtZXJnZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHNpemVBdHRyaWJ1dGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9zaXplLXRyYW5zZm9ybSc7XHJcbmltcG9ydCB7IGNvbG9yQXR0cmlidXRlLCBjb2xvclRoZW1lQXR0cmlidXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvY29sb3ItdHJhbnNmb3JtJztcclxuaW1wb3J0IHsgTXJkQmFzZUNvbG9yVGhlbWUsIE1yZENvbmZpZ01vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21vZGVsL2NvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IENvbmZpZ1V0aWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb25maWcudXRpbCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1jaGVja2JveCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWNoZWNrYm94LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgaG9zdDoge1xyXG4gICAgXCJbc3R5bGUubWF4LXdpZHRoXVwiOiBcImZpdENvbnRlbnQgPyAnZml0LWNvbnRlbnQnIDogJzEwMCUnXCIsXHJcbiAgfSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkQ2hlY2tib3hDb21wb25lbnQgZXh0ZW5kcyBCYXNlT2JqZWN0IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NoZWNrYm94bGFiZWwnKSBwdWJsaWMgbGFiZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAvKiogV2VydCB1bmQgRGVha3RpdmllcnVuZyBkZXMgQ29udHJvbHMgd2VyZGVuIGxhdWZlbmQgdWViZXJub21tZW4sIGF1Y2ggbmFjaCBzZXRWYWx1ZSgpLCByZXNldCgpLCBkaXNhYmxlKCkgdW5kIGVuYWJsZSgpICovXHJcbiAgQElucHV0KCdtcmRGb3JtQ29udHJvbCcpIHB1YmxpYyBzZXQgZm9ybUNvbnRyb2woY29udHJvbDogQWNjZXNzYWJsZUZvcm1Db250cm9sKSB7XHJcbiAgICB0aGlzLmZvcm11bGFyQWJvPy51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5fZm9ybUNvbnRyb2wgPSBjb250cm9sO1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKGNvbnRyb2wpKSB7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChjb250cm9sLnZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9ICEhY29udHJvbC52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgICAvLyBzdGF0dXNDaGFuZ2VzLCBkYW1pdCBkaXNhYmxlKCkvZW5hYmxlKCkgYXVjaCBiZWkgT25QdXNoIHNvZm9ydCBzaWNodGJhciB3ZXJkZW5cclxuICAgICAgdGhpcy5mb3JtdWxhckFibyA9IHRoaXMud2F0Y2gobWVyZ2UoY29udHJvbC52YWx1ZUNoYW5nZXMsIGNvbnRyb2wuY29udHJvbC5zdGF0dXNDaGFuZ2VzKSwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9ICEhY29udHJvbC52YWx1ZTtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgZ2V0IGZvcm1Db250cm9sKCk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9ybUNvbnRyb2w7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2Zvcm1Db250cm9sOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2w7XHJcbiAgcHJpdmF0ZSBmb3JtdWxhckFibzogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAvLyBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBmaWxsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLy8gQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgb3V0bGluZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHJvdW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLy8gQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcHJpbWFyeTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8vIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGFjY2VudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8vIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHdhcm46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGNvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGNvbG9ySG92ZXI6IHN0cmluZyA9ICcjMDAwMDAwJztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY29sb3JDaGVja2VkOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGNvbG9yQ2hlY2tlZEhvdmVyOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGJnQ29sb3I6IHN0cmluZyA9ICd0cmFuc3BhcmVudCc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGJnQ29sb3JIb3Zlcjogc3RyaW5nID0gJ3RyYW5zcGFyZW50JztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgYmdDb2xvckNoZWNrZWQ6IHN0cmluZyA9ICd0cmFuc3BhcmVudCc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGJnQ29sb3JDaGVja2VkSG92ZXI6IHN0cmluZyA9ICd0cmFuc3BhcmVudCc7IFxyXG4gIEBJbnB1dCgpIHB1YmxpYyBib3JkZXI6IHN0cmluZyA9ICdub25lJztcclxuICBASW5wdXQoKSBwdWJsaWMgYm9yZGVySG92ZXI6IHN0cmluZyA9ICdub25lJztcclxuICBASW5wdXQoKSBwdWJsaWMgYm9yZGVyQ2hlY2tlZDogc3RyaW5nID0gJ25vbmUnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBib3JkZXJDaGVja2VkSG92ZXI6IHN0cmluZyA9ICdub25lJztcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIFRlaWx3ZWlzZSBhdXNnZXdhZWhsdCAoei4gQi4gXCJhbGxlIHVlYmVybmVobWVuXCIsIHdlbm4gbnVyIGVpbiBUZWlsIGdld2FlaGx0IGlzdCk6IFN0cmljaCBzdGF0dCBIYWtlbi5cclxuICAgKiBFaW4gS2xpY2sgaGVidCBkZW4gWnVzdGFuZCBhdWYgKGBpbmRldGVybWluYXRlQ2hhbmdlYCkgdW5kIHNjaGFsdGV0IGBjaGVja2VkYCB3aWUgZ2V3b2hudCB1bS5cclxuICAgKiBHaWx0IG51ciBmdWVyIGRhcyBTdGFuZGFyZC1LYWVzdGNoZW4sIG5pY2h0IGZ1ZXIgYGN1c3RvbUljb25zYC5cclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBpbmRldGVybWluYXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21JY29uczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbUhvdmVySWNvbnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgY2hlY2tib3hTaXplOiBzdHJpbmcgPSAnMTZweCc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgY2hlY2tib3hIZWlnaHQ6IHN0cmluZztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBjaGVja2JveFdpZHRoOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCh7YWxpYXM6ICdzaW5nbGUtbGluZScsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzaW5nbGVMaW5lOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHthbGlhczogJ2ZpdC1jb250ZW50JywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGZpdENvbnRlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBlbGxpcHNpczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyB0b29sdGlwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgdG9vbHRpcElmVHJ1bmNhdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcHVibGljIHNldCB0b29sdGlwVGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuY3VzdG9tVG9vbHRpcFRleHQgPSB0cnVlO1xyXG4gICAgICB0aGlzLl90b29sdGlwVGV4dCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmxhYmVsKSkge1xyXG4gICAgICB0aGlzLl90b29sdGlwVGV4dCA9IHRoaXMubGFiZWwubmF0aXZlRWxlbWVudC5pbm5lclRleHQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgdG9vbHRpcFRleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl90b29sdGlwVGV4dDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfdG9vbHRpcFRleHQ6IHN0cmluZztcclxuICBwcml2YXRlIGN1c3RvbVRvb2x0aXBUZXh0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcHVibGljIHRvb2x0aXBQb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcgPSAnYm90dG9tJztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyB0b29sdGlwRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGllIENoZWNrYm94IHNjaGFsdGV0IG5pY2h0IHNlbGJzdCB1bSwgc29uZGVybiBtZWxkZXQgZGVuIGdld3VlbnNjaHRlbiBXZXJ0IHVlYmVyIGBjaGVja2VkQ2hhbmdlYDtcclxuICAgKiBhbmdlemVpZ3Qgd2lyZCBhbGxlaW4gYGNoZWNrZWRgLiBGdWVyIExpc3RlbiwgZGllIHNlbGJzdCBlbnRzY2hlaWRlbiwgb2IgZWluIEtsaWNrIHphZWhsdC4gTmljaHQgbWl0IGBtcmRGb3JtQ29udHJvbGAga29tYmluaWVyZW4uXHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgY29udHJvbGxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKiBLbGljayBuaWNodCBhbiB1bWdlYmVuZGUgRWxlbWVudGUgd2VpdGVyZ2ViZW4gKGF1Y2ggd2VubiBkZWFrdGl2aWVydCksIHouIEIuIGluIGVpbmVyIGtsaWNrYmFyZW4gWmVpbGUgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzdG9wUHJvcGFnYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBjaGVja2VkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBpbmRldGVybWluYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIHByaXZhdGUgY29uZmlnOiBNcmRDb25maWdNb2RlbCA9IENvbmZpZ1V0aWwuZ2V0Q29uZmlnKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tlZCA9ICEhdGhpcy5mb3JtQ29udHJvbC52YWx1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRvb2x0aXBJZlRydW5jYXRlZCkge1xyXG4gICAgICB0aGlzLnRvb2x0aXAgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudG9vbHRpcCAmJiAhVXRpbC5pc0RlZmluZWQodGhpcy50b29sdGlwVGV4dCkpIHtcclxuICAgICAgdGhpcy5fdG9vbHRpcFRleHQgPSB0aGlzLmxhYmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0O1xyXG4gICAgfVxyXG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLmNoZWNrYm94SGVpZ2h0KSkge1xyXG4gICAgICB0aGlzLmNoZWNrYm94SGVpZ2h0ID0gdGhpcy5jaGVja2JveFNpemU7XHJcbiAgICB9XHJcbiAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKHRoaXMuY2hlY2tib3hXaWR0aCkpIHtcclxuICAgICAgdGhpcy5jaGVja2JveFdpZHRoID0gdGhpcy5jaGVja2JveFNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgLy8gWydjaGVja2JveCcsICdmaWxsJywgJ3NlbGVjdGVkJywgJ3ByaW1hcnknLCAndGV4dCddO1xyXG4gICAgLy8gWydjaGVja2JveCcsICdzZWxlY3RlZCcsICdwcmltYXJ5JywgJ3RleHQnXTtcclxuICAgIC8vIFsnYmFzZUNvbG9yJywgJ3ByaW1hcnknXTtcclxuICAgIC8vIGlmICh0aGlzLnByaW1hcnkpIHtcclxuICAgIC8vICAgdGhpcy5jb2xvciA9IF8uaXNPYmplY3QodGhpcy5jb25maWcuYmFzZUNvbG9ycy5wcmltYXJ5KSA/ICh0aGlzLmNvbmZpZy5iYXNlQ29sb3JzLnByaW1hcnkgYXMgTXJkQmFzZUNvbG9yVGhlbWUpLnRleHQgOiB0aGlzLmNvbmZpZy5iYXNlQ29sb3JzLnByaW1hcnkgYXMgc3RyaW5nO1xyXG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLmFjY2VudCkge1xyXG4gICAgLy8gICB0aGlzLmNvbG9yID0gdGhpcy5jb25maWcuYWNjZW50Q29sb3I7XHJcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMud2Fybikge1xyXG4gICAgLy8gICB0aGlzLmNvbG9yID0gdGhpcy5jb25maWcud2FybkNvbG9yO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgLy8gT2huZSBCZXNjaHJpZnR1bmcgZW50ZmFlbGx0IGRlciBBYnN0YW5kIHp3aXNjaGVuIEthZXN0Y2hlbiB1bmQgVGV4dC4gRGlyZWt0IGFtIERPTSwgd2VpbCBzaWNoIGRpZSBCZXNjaHJpZnR1bmdcclxuICAgIC8vIGVyc3QgbmFjaCBkZXIgUHJ1ZWZ1bmcgZGVzIFRlbXBsYXRlcyBlcmdpYnQgKHByb2ppemllcnRlciBJbmhhbHQpIC0gZWluIEJpbmRpbmcgd3VlcmRlIGhpZXIgRXhwcmVzc2lvbkNoYW5nZWQgYXVzbG9lc2VuLlxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMubGFiZWwpKSB7XHJcbiAgICAgIGNvbnN0IG9obmVUZXh0ID0gKHRoaXMubGFiZWwubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudCA/PyAnJykudHJpbSgpLmxlbmd0aCA9PT0gMDtcclxuICAgICAgdGhpcy5sYWJlbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC50b2dnbGUoJ29obmUtdGV4dCcsIG9obmVUZXh0KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRvb2x0aXAgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5sYWJlbCkgJiYgIXRoaXMuY3VzdG9tVG9vbHRpcFRleHQgJiYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLnRvb2x0aXBUZXh0KSB8fCB0aGlzLnRvb2x0aXBUZXh0ICE9PSB0aGlzLmxhYmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0KSkge1xyXG4gICAgICB0aGlzLl90b29sdGlwVGV4dCA9IHRoaXMubGFiZWwubmF0aXZlRWxlbWVudC5pbm5lclRleHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBwcml2YXRlIGluaXRCYXNlU3R5bGUoKTogdm9pZCB7XHJcblxyXG4gIC8vIH1cclxuXHJcbiAgcHVibGljIGdldCBhcmlhQ2hlY2tlZCgpOiAndHJ1ZScgfCAnZmFsc2UnIHwgJ21peGVkJyB7XHJcbiAgICBpZiAodGhpcy5pbmRldGVybWluYXRlKSB7XHJcbiAgICAgIHJldHVybiAnbWl4ZWQnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY2hlY2tlZCA/ICd0cnVlJyA6ICdmYWxzZSc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlKGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICBldmVudD8uc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgJiYgdGhpcy5mb3JtQ29udHJvbC5kaXNhYmxlZCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY29udHJvbGxlZCkge1xyXG4gICAgICB0aGlzLmNoZWNrZWRDaGFuZ2UuZW1pdCghdGhpcy5jaGVja2VkKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaW5kZXRlcm1pbmF0ZSkge1xyXG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5pbmRldGVybWluYXRlQ2hhbmdlLmVtaXQoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHRoaXMuY2hlY2tlZCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoZWNrZWRDaGFuZ2UuZW1pdCh0aGlzLmNoZWNrZWQpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibXJkLWNoZWNrYm94LWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cInsnbXJkLWNoZWNrYm94LWRpc2FibGVkJzogZm9ybUNvbnRyb2w/LmRpc2FibGVkIHx8IGRpc2FibGVkfVwiIChjbGljayk9XCJ0b2dnbGUoJGV2ZW50KVwiXHJcbiAgcm9sZT1cImNoZWNrYm94XCIgW2F0dHIuYXJpYS1jaGVja2VkXT1cImFyaWFDaGVja2VkXCIgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWRcIlxyXG4gIFttcmRUb29sVGlwXT1cInRvb2x0aXBUZXh0XCIgW3Nob3dUb29sVGlwXT1cInRvb2x0aXAgJiYgIXRvb2x0aXBEaXNhYmxlZFwiIFtwb3NpdGlvbl09XCJ0b29sdGlwUG9zaXRpb25cIiBbc2hvd09uVHJ1bmNhdGVkRWxlbWVudF09XCJ0b29sdGlwSWZUcnVuY2F0ZWQgPyBjaGVja2JveGxhYmVsIDogdW5kZWZpbmVkXCJcclxuICBbc3R5bGUuLS1ib3gtaGVpZ2h0XT1cImNoZWNrYm94SGVpZ2h0XCIgXHJcbiAgW3N0eWxlLi0tYm94LXdpZHRoXT1cImNoZWNrYm94V2lkdGhcIlxyXG4gIFtzdHlsZS4tLWJnLWNvbG9yXT1cImJnQ29sb3JcIlxyXG4gIFtzdHlsZS4tLWJnLWNvbG9yLWhvdmVyXT1cImJnQ29sb3JIb3ZlclwiXHJcbiAgW3N0eWxlLi0tYmctY29sb3ItY2hlY2tlZF09XCJiZ0NvbG9yQ2hlY2tlZFwiXHJcbiAgW3N0eWxlLi0tYmctY29sb3ItY2hlY2tlZC1ob3Zlcl09XCJiZ0NvbG9yQ2hlY2tlZEhvdmVyXCJcclxuICBbc3R5bGUuLS1jb2xvcl09XCJjb2xvclwiXHJcbiAgW3N0eWxlLi0tY29sb3ItaG92ZXJdPVwiY29sb3JIb3ZlclwiXHJcbiAgW3N0eWxlLi0tY29sb3ItY2hlY2tlZF09XCJjb2xvckNoZWNrZWRcIlxyXG4gIFtzdHlsZS4tLWNvbG9yLWNoZWNrZWQtaG92ZXJdPVwiY29sb3JDaGVja2VkSG92ZXJcIlxyXG4gIFtzdHlsZS4tLWJvcmRlcl09XCJib3JkZXJcIlxyXG4gIFtzdHlsZS4tLWJvcmRlci1ob3Zlcl09XCJib3JkZXJIb3ZlclwiXHJcbiAgW3N0eWxlLi0tYm9yZGVyLWNoZWNrZWRdPVwiYm9yZGVyQ2hlY2tlZFwiXHJcbiAgW3N0eWxlLi0tYm9yZGVyLWNoZWNrZWQtaG92ZXJdPVwiYm9yZGVyQ2hlY2tlZEhvdmVyXCJcclxuICBbY2xhc3Mucm91bmRlZF09XCJyb3VuZGVkXCJcclxuICBbY2xhc3MuY2hlY2tlZF09XCJjaGVja2VkICYmICFpbmRldGVybWluYXRlXCJcclxuICBbY2xhc3MuaW5kZXRlcm1pbmF0ZV09XCJpbmRldGVybWluYXRlXCJcclxuICA+XHJcbiAgPHNwYW4gY2xhc3M9XCJtcmQtY2hlY2tib3gtYm94XCIgKm5nSWY9XCIhY3VzdG9tSWNvbnNcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwibXJkLWNoZWNrYm94LXN0cmljaFwiICpuZ0lmPVwiaW5kZXRlcm1pbmF0ZVwiPjwvc3Bhbj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjaGVja2VkICYmICFpbmRldGVybWluYXRlXCI+XHJcbiAgICAgIDxzdmcgZmlsbD1cIiNmZmZmZmZcIiB3aWR0aD1cIjE2cHhcIiBoZWlnaHQ9XCIxNnB4XCIgdmlld0JveD1cIi00IDAgMzIgMzJcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHN0cm9rZT1cIiMwMDAwMDBcIiBzdHJva2Utd2lkdGg9XCIwLjAwMDMyXCI+XHJcbiAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+XHJcbiAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L2c+XHJcbiAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+IDx0aXRsZT5jaGVjazwvdGl0bGU+IDxwYXRoIGQ9XCJNMTkuMzc1IDUuMDYzbC05LjUgMTMuNjI1LTYuNTYzLTQuODc1LTMuMzEzIDQuNTk0IDExLjE4OCA4LjUzMSAxMi44MTMtMTguMzc1elwiPjwvcGF0aD48L2c+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9zcGFuPlxyXG4gIDxkaXYgY2xhc3M9XCJtcmQtY2hlY2tib3gtY3VzdG9tXCIgW25nQ2xhc3NdPVwieydpc0hvdmVyJzogIWN1c3RvbUhvdmVySWNvbnN9XCIgKm5nSWY9XCJjdXN0b21JY29uc1wiPlxyXG4gICAgPG5nLWNvbnRlbnQgKm5nSWY9XCJjaGVja2VkXCIgc2VsZWN0PVwiW2ljb24tY2hlY2tlZF1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8bmctY29udGVudCAqbmdJZj1cIiFjaGVja2VkXCIgc2VsZWN0PVwiW2ljb24tdW5jaGVja2VkXVwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibXJkLWNoZWNrYm94LWN1c3RvbS1ob3ZlclwiICpuZ0lmPVwiY3VzdG9tSG92ZXJJY29uc1wiPlxyXG4gICAgPG5nLWNvbnRlbnQgKm5nSWY9XCJjaGVja2VkXCIgc2VsZWN0PVwiW2ljb24tY2hlY2tlZC1ob3Zlcl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8bmctY29udGVudCAqbmdJZj1cIiFjaGVja2VkXCIgc2VsZWN0PVwiW2ljb24tdW5jaGVja2VkLWhvdmVyXVwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuICBcclxuICBcclxuICA8c3BhbiAjY2hlY2tib3hsYWJlbCBjbGFzcz1cIm1yZC1jaGVja2JveC1sYWJlbFwiXHJcbiAgICBbY2xhc3Muc2luZ2xlTGluZV09XCJzaW5nbGVMaW5lXCJcclxuICAgIFtjbGFzcy5lbGxpcHNpc109XCJlbGxpcHNpc1wiXHJcbiAgPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3NwYW4+XHJcbjwvZGl2PlxyXG4iXX0=