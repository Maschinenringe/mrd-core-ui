import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, booleanAttribute } from '@angular/core';
import { Util } from 'mrd-core';
import { sizeAttribute } from '../../../../common/transforms/size-transform';
import { colorAttribute } from '../../../../common/transforms/color-transform';
import { ConfigUtil } from '../../../../common/util/config.util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../mrd-tooltip/common/directive/tool-tip-renderer/tool-tip-renderer.directive";
const _c0 = ["checkboxlabel"];
function MrdCheckboxComponent_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 8);
    i0.ɵɵelement(2, "g", 9)(3, "g", 10);
    i0.ɵɵelementStart(4, "g", 11)(5, "title");
    i0.ɵɵtext(6, "check");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "path", 12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} }
function MrdCheckboxComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 6);
    i0.ɵɵtemplate(1, MrdCheckboxComponent_span_1_ng_container_1_Template, 8, 0, "ng-container", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.checked);
} }
function MrdCheckboxComponent_div_2_ng_content_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1, ["*ngIf", "checked"]);
} }
function MrdCheckboxComponent_div_2_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 2, ["*ngIf", "!checked"]);
} }
const _c1 = function (a0) { return { "isHover": a0 }; };
function MrdCheckboxComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, MrdCheckboxComponent_div_2_ng_content_1_Template, 1, 0, "ng-content", 7);
    i0.ɵɵtemplate(2, MrdCheckboxComponent_div_2_ng_content_2_Template, 1, 0, "ng-content", 7);
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
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtemplate(1, MrdCheckboxComponent_div_3_ng_content_1_Template, 1, 0, "ng-content", 7);
    i0.ɵɵtemplate(2, MrdCheckboxComponent_div_3_ng_content_2_Template, 1, 0, "ng-content", 7);
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
export class MrdCheckboxComponent {
    cdr;
    label;
    formControl;
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
    tooltipPosition = 'bottom';
    tooltipDisabled = false;
    checkedChange = new EventEmitter();
    config = ConfigUtil.getConfig();
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
        if (Util.isDefined(this.formControl) && Util.isDefined(this.formControl.value)) {
            this.checked = !!this.formControl.value;
        }
        if (this.tooltipIfTruncated) {
            this.tooltip = true;
        }
        if (this.tooltip && !Util.isDefined(this.tooltipText)) {
            this.tooltipText = this.label.nativeElement.innerText;
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
    // private initBaseStyle(): void {
    // }
    toggle() {
        if (this.disabled || (Util.isDefined(this.formControl) && this.formControl.disabled)) {
            return;
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
        } }, inputs: { formControl: "formControl", rounded: ["rounded", "rounded", booleanAttribute], color: ["color", "color", colorAttribute], colorHover: ["colorHover", "colorHover", colorAttribute], colorChecked: ["colorChecked", "colorChecked", colorAttribute], colorCheckedHover: ["colorCheckedHover", "colorCheckedHover", colorAttribute], bgColor: ["bgColor", "bgColor", colorAttribute], bgColorHover: ["bgColorHover", "bgColorHover", colorAttribute], bgColorChecked: ["bgColorChecked", "bgColorChecked", colorAttribute], bgColorCheckedHover: ["bgColorCheckedHover", "bgColorCheckedHover", colorAttribute], border: "border", borderHover: "borderHover", borderChecked: "borderChecked", borderCheckedHover: "borderCheckedHover", checked: ["checked", "checked", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], customIcons: ["customIcons", "customIcons", booleanAttribute], customHoverIcons: ["customHoverIcons", "customHoverIcons", booleanAttribute], checkboxSize: ["checkboxSize", "checkboxSize", sizeAttribute], checkboxHeight: ["checkboxHeight", "checkboxHeight", sizeAttribute], checkboxWidth: ["checkboxWidth", "checkboxWidth", sizeAttribute], singleLine: ["single-line", "singleLine", booleanAttribute], fitContent: ["fit-content", "fitContent", booleanAttribute], ellipsis: ["ellipsis", "ellipsis", booleanAttribute], tooltip: ["tooltip", "tooltip", booleanAttribute], tooltipIfTruncated: ["tooltipIfTruncated", "tooltipIfTruncated", booleanAttribute], tooltipText: "tooltipText", tooltipPosition: "tooltipPosition", tooltipDisabled: ["tooltipDisabled", "tooltipDisabled", booleanAttribute] }, outputs: { checkedChange: "checkedChange" }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c4, decls: 7, vars: 46, consts: [[1, "mrd-checkbox-container", 3, "ngClass", "mrdToolTip", "showToolTip", "position", "showOnTruncatedElement", "click"], ["class", "mrd-checkbox-box", 4, "ngIf"], ["class", "mrd-checkbox-custom", 3, "ngClass", 4, "ngIf"], ["class", "mrd-checkbox-custom-hover", 4, "ngIf"], [1, "mrd-checkbox-label"], ["checkboxlabel", ""], [1, "mrd-checkbox-box"], [4, "ngIf"], ["fill", "#ffffff", "width", "16px", "height", "16px", "viewBox", "-4 0 32 32", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "stroke", "#000000", "stroke-width", "0.00032"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "SVGRepo_iconCarrier"], ["d", "M19.375 5.063l-9.5 13.625-6.563-4.875-3.313 4.594 11.188 8.531 12.813-18.375z"], [1, "mrd-checkbox-custom", 3, "ngClass"], [1, "mrd-checkbox-custom-hover"]], template: function MrdCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c2);
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function MrdCheckboxComponent_Template_div_click_0_listener() { return ctx.toggle(); });
            i0.ɵɵtemplate(1, MrdCheckboxComponent_span_1_Template, 2, 1, "span", 1);
            i0.ɵɵtemplate(2, MrdCheckboxComponent_div_2_Template, 3, 5, "div", 2);
            i0.ɵɵtemplate(3, MrdCheckboxComponent_div_3_Template, 3, 2, "div", 3);
            i0.ɵɵelementStart(4, "span", 4, 5);
            i0.ɵɵprojection(6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const _r3 = i0.ɵɵreference(5);
            i0.ɵɵstyleProp("--box-height", ctx.checkboxHeight)("--box-width", ctx.checkboxWidth)("--bg-color", ctx.bgColor)("--bg-color-hover", ctx.bgColorHover)("--bg-color-checked", ctx.bgColorChecked)("--bg-color-checked-hover", ctx.bgColorCheckedHover)("--color", ctx.color)("--color-hover", ctx.colorHover)("--color-checked", ctx.colorChecked)("--color-checked-hover", ctx.colorCheckedHover)("--border", ctx.border)("--border-hover", ctx.borderHover)("--border-checked", ctx.borderChecked)("--border-checked-hover", ctx.borderCheckedHover);
            i0.ɵɵclassProp("rounded", ctx.rounded)("checked", ctx.checked);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(44, _c3, (ctx.formControl == null ? null : ctx.formControl.disabled) || ctx.disabled))("mrdToolTip", ctx.tooltipText)("showToolTip", ctx.tooltip && !ctx.tooltipDisabled)("position", ctx.tooltipPosition)("showOnTruncatedElement", ctx.tooltipIfTruncated ? _r3 : undefined);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.customIcons);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.customIcons);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.customHoverIcons);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("singleLine", ctx.singleLine)("ellipsis", ctx.ellipsis);
        } }, dependencies: [i1.NgClass, i1.NgIf, i2.ToolTipRendererDirective], styles: ["[_nghost-%COMP%]{display:block;width:-moz-fit-content;width:fit-content}.mrd-checkbox-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;cursor:pointer;color:var(--color);background-color:var(--bg-color);border:var(--border);padding:4px 8px 4px 4px;line-height:1.25em}.mrd-checkbox-container.rounded[_ngcontent-%COMP%]{border-radius:999999px}.mrd-checkbox-container[_ngcontent-%COMP%]     [icon-checked], .mrd-checkbox-container[_ngcontent-%COMP%]     [icon-unchecked], .mrd-checkbox-container[_ngcontent-%COMP%]     [icon-checked-hover], .mrd-checkbox-container[_ngcontent-%COMP%]     [icon-unchecked-hover]{display:block;max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-height);min-height:var(--box-width);margin-right:6px}.mrd-checkbox-container.checked[_ngcontent-%COMP%]{color:var(--color-checked);background-color:var(--bg-color-checked);border:var(--border-checked)}.mrd-checkbox-container.checked[_ngcontent-%COMP%]   .mrd-checkbox-box[_ngcontent-%COMP%]{background-color:#3faa49;border:none}.mrd-checkbox-container[_ngcontent-%COMP%]   .mrd-checkbox-box[_ngcontent-%COMP%]{max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-width);min-height:var(--box-height);display:inline-block;border:2px solid rgba(0,0,0,.54);border-radius:2px;text-align:center;margin-right:6px}.mrd-checkbox-container[_ngcontent-%COMP%]   .mrd-checkbox-label[_ngcontent-%COMP%]{overflow:hidden}.mrd-checkbox-container[_ngcontent-%COMP%]   .mrd-checkbox-label.singleLine[_ngcontent-%COMP%]{white-space:nowrap}.mrd-checkbox-container[_ngcontent-%COMP%]   .mrd-checkbox-label.ellipsis[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]{cursor:inherit}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]   .mrd-checkbox-box[_ngcontent-%COMP%]{border-color:#afa6a6}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]   .mrd-checkbox-box.checked[_ngcontent-%COMP%]{background-color:#afa6a6af}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]   .mrd-checkbox-label[_ngcontent-%COMP%]{color:#afa6a6}.mrd-checkbox-container[_ngcontent-%COMP%]:hover:not(.mrd-checkbox-disabled){color:var(--color-hover);background-color:var(--bg-color-hover);border:var(--border-hover)}.mrd-checkbox-container[_ngcontent-%COMP%]:hover:not(.mrd-checkbox-disabled).checked{color:var(--color-checked-hover);background-color:var(--bg-color-checked-hover);border:var(--border-checked-hover)}.mrd-checkbox-container[_ngcontent-%COMP%]:hover:not(.mrd-checkbox-disabled)   .mrd-checkbox-custom[_ngcontent-%COMP%]:not(.isHover){display:none}.mrd-checkbox-container[_ngcontent-%COMP%]:hover:not(.mrd-checkbox-disabled)   .mrd-checkbox-custom-hover[_ngcontent-%COMP%]{display:flex}.mrd-checkbox-custom[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.mrd-checkbox-custom-hover[_ngcontent-%COMP%]{display:none;flex-direction:column;justify-content:center;align-items:center}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdCheckboxComponent, [{
        type: Component,
        args: [{ selector: 'mrd-checkbox', host: {
                    "[style.max-width]": "fitContent ? 'fit-content' : '100%'",
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-checkbox-container\" [ngClass]=\"{'mrd-checkbox-disabled': formControl?.disabled || disabled}\" (click)=\"toggle()\"\r\n  [mrdToolTip]=\"tooltipText\" [showToolTip]=\"tooltip && !tooltipDisabled\" [position]=\"tooltipPosition\" [showOnTruncatedElement]=\"tooltipIfTruncated ? checkboxlabel : undefined\"\r\n  [style.--box-height]=\"checkboxHeight\" \r\n  [style.--box-width]=\"checkboxWidth\"\r\n  [style.--bg-color]=\"bgColor\"\r\n  [style.--bg-color-hover]=\"bgColorHover\"\r\n  [style.--bg-color-checked]=\"bgColorChecked\"\r\n  [style.--bg-color-checked-hover]=\"bgColorCheckedHover\"\r\n  [style.--color]=\"color\"\r\n  [style.--color-hover]=\"colorHover\"\r\n  [style.--color-checked]=\"colorChecked\"\r\n  [style.--color-checked-hover]=\"colorCheckedHover\"\r\n  [style.--border]=\"border\"\r\n  [style.--border-hover]=\"borderHover\"\r\n  [style.--border-checked]=\"borderChecked\"\r\n  [style.--border-checked-hover]=\"borderCheckedHover\"\r\n  [class.rounded]=\"rounded\"\r\n  [class.checked]=\"checked\"\r\n  >\r\n  <span class=\"mrd-checkbox-box\" *ngIf=\"!customIcons\">\r\n    <ng-container *ngIf=\"checked\">\r\n      <svg fill=\"#ffffff\" width=\"16px\" height=\"16px\" viewBox=\"-4 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"#000000\" stroke-width=\"0.00032\">\r\n        <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\r\n        <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g>\r\n        <g id=\"SVGRepo_iconCarrier\"> <title>check</title> <path d=\"M19.375 5.063l-9.5 13.625-6.563-4.875-3.313 4.594 11.188 8.531 12.813-18.375z\"></path></g>\r\n      </svg>\r\n    </ng-container>\r\n  </span>\r\n  <div class=\"mrd-checkbox-custom\" [ngClass]=\"{'isHover': !customHoverIcons}\" *ngIf=\"customIcons\">\r\n    <ng-content *ngIf=\"checked\" select=\"[icon-checked]\"></ng-content>\r\n    <ng-content *ngIf=\"!checked\" select=\"[icon-unchecked]\"></ng-content>\r\n  </div>\r\n  <div class=\"mrd-checkbox-custom-hover\" *ngIf=\"customHoverIcons\">\r\n    <ng-content *ngIf=\"checked\" select=\"[icon-checked-hover]\"></ng-content>\r\n    <ng-content *ngIf=\"!checked\" select=\"[icon-unchecked-hover]\"></ng-content>\r\n  </div>\r\n  \r\n  \r\n  <span #checkboxlabel class=\"mrd-checkbox-label\"\r\n    [class.singleLine]=\"singleLine\"\r\n    [class.ellipsis]=\"ellipsis\"\r\n  ><ng-content></ng-content></span>\r\n</div>\r\n", styles: [":host{display:block;width:-moz-fit-content;width:fit-content}.mrd-checkbox-container{display:flex;flex-direction:row;align-items:center;cursor:pointer;color:var(--color);background-color:var(--bg-color);border:var(--border);padding:4px 8px 4px 4px;line-height:1.25em}.mrd-checkbox-container.rounded{border-radius:999999px}.mrd-checkbox-container ::ng-deep [icon-checked],.mrd-checkbox-container ::ng-deep [icon-unchecked],.mrd-checkbox-container ::ng-deep [icon-checked-hover],.mrd-checkbox-container ::ng-deep [icon-unchecked-hover]{display:block;max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-height);min-height:var(--box-width);margin-right:6px}.mrd-checkbox-container.checked{color:var(--color-checked);background-color:var(--bg-color-checked);border:var(--border-checked)}.mrd-checkbox-container.checked .mrd-checkbox-box{background-color:#3faa49;border:none}.mrd-checkbox-container .mrd-checkbox-box{max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-width);min-height:var(--box-height);display:inline-block;border:2px solid rgba(0,0,0,.54);border-radius:2px;text-align:center;margin-right:6px}.mrd-checkbox-container .mrd-checkbox-label{overflow:hidden}.mrd-checkbox-container .mrd-checkbox-label.singleLine{white-space:nowrap}.mrd-checkbox-container .mrd-checkbox-label.ellipsis{white-space:nowrap;text-overflow:ellipsis}.mrd-checkbox-container.mrd-checkbox-disabled{cursor:inherit}.mrd-checkbox-container.mrd-checkbox-disabled .mrd-checkbox-box{border-color:#afa6a6}.mrd-checkbox-container.mrd-checkbox-disabled .mrd-checkbox-box.checked{background-color:#afa6a6af}.mrd-checkbox-container.mrd-checkbox-disabled .mrd-checkbox-label{color:#afa6a6}.mrd-checkbox-container:hover:not(.mrd-checkbox-disabled){color:var(--color-hover);background-color:var(--bg-color-hover);border:var(--border-hover)}.mrd-checkbox-container:hover:not(.mrd-checkbox-disabled).checked{color:var(--color-checked-hover);background-color:var(--bg-color-checked-hover);border:var(--border-checked-hover)}.mrd-checkbox-container:hover:not(.mrd-checkbox-disabled) .mrd-checkbox-custom:not(.isHover){display:none}.mrd-checkbox-container:hover:not(.mrd-checkbox-disabled) .mrd-checkbox-custom-hover{display:flex}.mrd-checkbox-custom{display:flex;flex-direction:column;justify-content:center;align-items:center}.mrd-checkbox-custom-hover{display:none;flex-direction:column;justify-content:center;align-items:center}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { label: [{
            type: ViewChild,
            args: ['checkboxlabel']
        }], formControl: [{
            type: Input
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
        }], checkedChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtY2hlY2tib3gvY29tcG9uZW50cy9tcmQtY2hlY2tib3gvbXJkLWNoZWNrYm94LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtY2hlY2tib3gvY29tcG9uZW50cy9tcmQtY2hlY2tib3gvbXJkLWNoZWNrYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0ssT0FBTyxFQUF5QixJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxjQUFjLEVBQXVCLE1BQU0sK0NBQStDLENBQUM7QUFFcEcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7Ozs7SUNlN0QsNkJBQThCO0lBQzVCLG1CQUE2SjtJQUE3Siw4QkFBNko7SUFDM0osdUJBQStDLFlBQUE7SUFFL0MsNkJBQTRCLFlBQUE7SUFBUSxxQkFBSztJQUFBLGlCQUFRO0lBQUMsMkJBQStGO0lBQUEsaUJBQUksRUFBQTtJQUV6SiwwQkFBZTs7O0lBUGpCLCtCQUFvRDtJQUNsRCw4RkFNZTtJQUNqQixpQkFBTzs7O0lBUFUsZUFBYTtJQUFiLHFDQUFhOzs7SUFTNUIsMkNBQWlFOzs7SUFDakUsNENBQW9FOzs7O0lBRnRFLCtCQUFnRztJQUM5Rix5RkFBaUU7SUFDakUs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QUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGFBQWEsRUFBQztZQUNTLGFBQWE7a0JBQXRELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsYUFBYSxFQUFDO1lBRWtDLFVBQVU7a0JBQTVFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUNTLFVBQVU7a0JBQTVFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUNiLFFBQVE7a0JBQXBELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFUyxPQUFPO2tCQUFuRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBQ1Msa0JBQWtCO2tCQUE5RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBQ2hCLFdBQVc7a0JBQTlCLEtBQUs7WUFXVSxlQUFlO2tCQUE5QixLQUFLO1lBQ3VDLGVBQWU7a0JBQTNELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFbkIsYUFBYTtrQkFBN0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCwgYm9vbGVhbkF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wsIFV0aWwgfSBmcm9tICdtcmQtY29yZSc7XHJcbmltcG9ydCB7IHNpemVBdHRyaWJ1dGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9zaXplLXRyYW5zZm9ybSc7XHJcbmltcG9ydCB7IGNvbG9yQXR0cmlidXRlLCBjb2xvclRoZW1lQXR0cmlidXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvY29sb3ItdHJhbnNmb3JtJztcclxuaW1wb3J0IHsgTXJkQmFzZUNvbG9yVGhlbWUsIE1yZENvbmZpZ01vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21vZGVsL2NvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IENvbmZpZ1V0aWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb25maWcudXRpbCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1jaGVja2JveCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWNoZWNrYm94LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgaG9zdDoge1xyXG4gICAgXCJbc3R5bGUubWF4LXdpZHRoXVwiOiBcImZpdENvbnRlbnQgPyAnZml0LWNvbnRlbnQnIDogJzEwMCUnXCIsXHJcbiAgfSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY2hlY2tib3hsYWJlbCcpIHB1YmxpYyBsYWJlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBmb3JtQ29udHJvbDogQWNjZXNzYWJsZUZvcm1Db250cm9sO1xyXG5cclxuICAvLyBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBmaWxsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLy8gQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgb3V0bGluZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHJvdW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLy8gQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcHJpbWFyeTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8vIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGFjY2VudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8vIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHdhcm46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGNvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGNvbG9ySG92ZXI6IHN0cmluZyA9ICcjMDAwMDAwJztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY29sb3JDaGVja2VkOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGNvbG9yQ2hlY2tlZEhvdmVyOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGJnQ29sb3I6IHN0cmluZyA9ICd0cmFuc3BhcmVudCc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGJnQ29sb3JIb3Zlcjogc3RyaW5nID0gJ3RyYW5zcGFyZW50JztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgYmdDb2xvckNoZWNrZWQ6IHN0cmluZyA9ICd0cmFuc3BhcmVudCc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGJnQ29sb3JDaGVja2VkSG92ZXI6IHN0cmluZyA9ICd0cmFuc3BhcmVudCc7IFxyXG4gIEBJbnB1dCgpIHB1YmxpYyBib3JkZXI6IHN0cmluZyA9ICdub25lJztcclxuICBASW5wdXQoKSBwdWJsaWMgYm9yZGVySG92ZXI6IHN0cmluZyA9ICdub25lJztcclxuICBASW5wdXQoKSBwdWJsaWMgYm9yZGVyQ2hlY2tlZDogc3RyaW5nID0gJ25vbmUnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBib3JkZXJDaGVja2VkSG92ZXI6IHN0cmluZyA9ICdub25lJztcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tSWNvbnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21Ib3Zlckljb25zOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIGNoZWNrYm94U2l6ZTogc3RyaW5nID0gJzE2cHgnO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIGNoZWNrYm94SGVpZ2h0OiBzdHJpbmc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgY2hlY2tib3hXaWR0aDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe2FsaWFzOiAnc2luZ2xlLWxpbmUnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2luZ2xlTGluZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdmaXQtY29udGVudCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBmaXRDb250ZW50OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZWxsaXBzaXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgdG9vbHRpcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHRvb2x0aXBJZlRydW5jYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgdG9vbHRpcFRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl90b29sdGlwVGV4dCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmxhYmVsKSkge1xyXG4gICAgICB0aGlzLl90b29sdGlwVGV4dCA9IHRoaXMubGFiZWwubmF0aXZlRWxlbWVudC5pbm5lclRleHQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgdG9vbHRpcFRleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl90b29sdGlwVGV4dDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfdG9vbHRpcFRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgdG9vbHRpcFBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdib3R0b20nO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHRvb2x0aXBEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgcHVibGljIGNoZWNrZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgcHJpdmF0ZSBjb25maWc6IE1yZENvbmZpZ01vZGVsID0gQ29uZmlnVXRpbC5nZXRDb25maWcoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgdGhpcy5jaGVja2VkID0gISF0aGlzLmZvcm1Db250cm9sLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudG9vbHRpcElmVHJ1bmNhdGVkKSB7XHJcbiAgICAgIHRoaXMudG9vbHRpcCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50b29sdGlwICYmICFVdGlsLmlzRGVmaW5lZCh0aGlzLnRvb2x0aXBUZXh0KSkge1xyXG4gICAgICB0aGlzLnRvb2x0aXBUZXh0ID0gdGhpcy5sYWJlbC5uYXRpdmVFbGVtZW50LmlubmVyVGV4dDtcclxuICAgIH1cclxuICAgIGlmICghVXRpbC5pc0RlZmluZWQodGhpcy5jaGVja2JveEhlaWdodCkpIHtcclxuICAgICAgdGhpcy5jaGVja2JveEhlaWdodCA9IHRoaXMuY2hlY2tib3hTaXplO1xyXG4gICAgfVxyXG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLmNoZWNrYm94V2lkdGgpKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hXaWR0aCA9IHRoaXMuY2hlY2tib3hTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIC8vIFsnY2hlY2tib3gnLCAnZmlsbCcsICdzZWxlY3RlZCcsICdwcmltYXJ5JywgJ3RleHQnXTtcclxuICAgIC8vIFsnY2hlY2tib3gnLCAnc2VsZWN0ZWQnLCAncHJpbWFyeScsICd0ZXh0J107XHJcbiAgICAvLyBbJ2Jhc2VDb2xvcicsICdwcmltYXJ5J107XHJcbiAgICAvLyBpZiAodGhpcy5wcmltYXJ5KSB7XHJcbiAgICAvLyAgIHRoaXMuY29sb3IgPSBfLmlzT2JqZWN0KHRoaXMuY29uZmlnLmJhc2VDb2xvcnMucHJpbWFyeSkgPyAodGhpcy5jb25maWcuYmFzZUNvbG9ycy5wcmltYXJ5IGFzIE1yZEJhc2VDb2xvclRoZW1lKS50ZXh0IDogdGhpcy5jb25maWcuYmFzZUNvbG9ycy5wcmltYXJ5IGFzIHN0cmluZztcclxuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5hY2NlbnQpIHtcclxuICAgIC8vICAgdGhpcy5jb2xvciA9IHRoaXMuY29uZmlnLmFjY2VudENvbG9yO1xyXG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLndhcm4pIHtcclxuICAgIC8vICAgdGhpcy5jb2xvciA9IHRoaXMuY29uZmlnLndhcm5Db2xvcjtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIC8vIHByaXZhdGUgaW5pdEJhc2VTdHlsZSgpOiB2b2lkIHtcclxuXHJcbiAgLy8gfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpICYmIHRoaXMuZm9ybUNvbnRyb2wuZGlzYWJsZWQpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmNoZWNrZWQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGVja2VkQ2hhbmdlLmVtaXQodGhpcy5jaGVja2VkKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1yZC1jaGVja2JveC1jb250YWluZXJcIiBbbmdDbGFzc109XCJ7J21yZC1jaGVja2JveC1kaXNhYmxlZCc6IGZvcm1Db250cm9sPy5kaXNhYmxlZCB8fCBkaXNhYmxlZH1cIiAoY2xpY2spPVwidG9nZ2xlKClcIlxyXG4gIFttcmRUb29sVGlwXT1cInRvb2x0aXBUZXh0XCIgW3Nob3dUb29sVGlwXT1cInRvb2x0aXAgJiYgIXRvb2x0aXBEaXNhYmxlZFwiIFtwb3NpdGlvbl09XCJ0b29sdGlwUG9zaXRpb25cIiBbc2hvd09uVHJ1bmNhdGVkRWxlbWVudF09XCJ0b29sdGlwSWZUcnVuY2F0ZWQgPyBjaGVja2JveGxhYmVsIDogdW5kZWZpbmVkXCJcclxuICBbc3R5bGUuLS1ib3gtaGVpZ2h0XT1cImNoZWNrYm94SGVpZ2h0XCIgXHJcbiAgW3N0eWxlLi0tYm94LXdpZHRoXT1cImNoZWNrYm94V2lkdGhcIlxyXG4gIFtzdHlsZS4tLWJnLWNvbG9yXT1cImJnQ29sb3JcIlxyXG4gIFtzdHlsZS4tLWJnLWNvbG9yLWhvdmVyXT1cImJnQ29sb3JIb3ZlclwiXHJcbiAgW3N0eWxlLi0tYmctY29sb3ItY2hlY2tlZF09XCJiZ0NvbG9yQ2hlY2tlZFwiXHJcbiAgW3N0eWxlLi0tYmctY29sb3ItY2hlY2tlZC1ob3Zlcl09XCJiZ0NvbG9yQ2hlY2tlZEhvdmVyXCJcclxuICBbc3R5bGUuLS1jb2xvcl09XCJjb2xvclwiXHJcbiAgW3N0eWxlLi0tY29sb3ItaG92ZXJdPVwiY29sb3JIb3ZlclwiXHJcbiAgW3N0eWxlLi0tY29sb3ItY2hlY2tlZF09XCJjb2xvckNoZWNrZWRcIlxyXG4gIFtzdHlsZS4tLWNvbG9yLWNoZWNrZWQtaG92ZXJdPVwiY29sb3JDaGVja2VkSG92ZXJcIlxyXG4gIFtzdHlsZS4tLWJvcmRlcl09XCJib3JkZXJcIlxyXG4gIFtzdHlsZS4tLWJvcmRlci1ob3Zlcl09XCJib3JkZXJIb3ZlclwiXHJcbiAgW3N0eWxlLi0tYm9yZGVyLWNoZWNrZWRdPVwiYm9yZGVyQ2hlY2tlZFwiXHJcbiAgW3N0eWxlLi0tYm9yZGVyLWNoZWNrZWQtaG92ZXJdPVwiYm9yZGVyQ2hlY2tlZEhvdmVyXCJcclxuICBbY2xhc3Mucm91bmRlZF09XCJyb3VuZGVkXCJcclxuICBbY2xhc3MuY2hlY2tlZF09XCJjaGVja2VkXCJcclxuICA+XHJcbiAgPHNwYW4gY2xhc3M9XCJtcmQtY2hlY2tib3gtYm94XCIgKm5nSWY9XCIhY3VzdG9tSWNvbnNcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjaGVja2VkXCI+XHJcbiAgICAgIDxzdmcgZmlsbD1cIiNmZmZmZmZcIiB3aWR0aD1cIjE2cHhcIiBoZWlnaHQ9XCIxNnB4XCIgdmlld0JveD1cIi00IDAgMzIgMzJcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHN0cm9rZT1cIiMwMDAwMDBcIiBzdHJva2Utd2lkdGg9XCIwLjAwMDMyXCI+XHJcbiAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+XHJcbiAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L2c+XHJcbiAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+IDx0aXRsZT5jaGVjazwvdGl0bGU+IDxwYXRoIGQ9XCJNMTkuMzc1IDUuMDYzbC05LjUgMTMuNjI1LTYuNTYzLTQuODc1LTMuMzEzIDQuNTk0IDExLjE4OCA4LjUzMSAxMi44MTMtMTguMzc1elwiPjwvcGF0aD48L2c+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9zcGFuPlxyXG4gIDxkaXYgY2xhc3M9XCJtcmQtY2hlY2tib3gtY3VzdG9tXCIgW25nQ2xhc3NdPVwieydpc0hvdmVyJzogIWN1c3RvbUhvdmVySWNvbnN9XCIgKm5nSWY9XCJjdXN0b21JY29uc1wiPlxyXG4gICAgPG5nLWNvbnRlbnQgKm5nSWY9XCJjaGVja2VkXCIgc2VsZWN0PVwiW2ljb24tY2hlY2tlZF1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8bmctY29udGVudCAqbmdJZj1cIiFjaGVja2VkXCIgc2VsZWN0PVwiW2ljb24tdW5jaGVja2VkXVwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibXJkLWNoZWNrYm94LWN1c3RvbS1ob3ZlclwiICpuZ0lmPVwiY3VzdG9tSG92ZXJJY29uc1wiPlxyXG4gICAgPG5nLWNvbnRlbnQgKm5nSWY9XCJjaGVja2VkXCIgc2VsZWN0PVwiW2ljb24tY2hlY2tlZC1ob3Zlcl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8bmctY29udGVudCAqbmdJZj1cIiFjaGVja2VkXCIgc2VsZWN0PVwiW2ljb24tdW5jaGVja2VkLWhvdmVyXVwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuICBcclxuICBcclxuICA8c3BhbiAjY2hlY2tib3hsYWJlbCBjbGFzcz1cIm1yZC1jaGVja2JveC1sYWJlbFwiXHJcbiAgICBbY2xhc3Muc2luZ2xlTGluZV09XCJzaW5nbGVMaW5lXCJcclxuICAgIFtjbGFzcy5lbGxpcHNpc109XCJlbGxpcHNpc1wiXHJcbiAgPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3NwYW4+XHJcbjwvZGl2PlxyXG4iXX0=