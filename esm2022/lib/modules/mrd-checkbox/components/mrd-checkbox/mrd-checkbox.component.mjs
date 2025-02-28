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
    checkedChange = new EventEmitter();
    config = ConfigUtil.getConfig();
    constructor(cdr) {
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
        if (this.tooltip && Util.isDefined(this.label) && !this.customTooltipText && (!Util.isDefined(this.tooltipText) || this.tooltipText !== this.label.nativeElement.innerText)) {
            this._tooltipText = this.label.nativeElement.innerText;
        }
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
        } }, inputs: { formControl: ["mrdFormControl", "formControl"], rounded: ["rounded", "rounded", booleanAttribute], color: ["color", "color", colorAttribute], colorHover: ["colorHover", "colorHover", colorAttribute], colorChecked: ["colorChecked", "colorChecked", colorAttribute], colorCheckedHover: ["colorCheckedHover", "colorCheckedHover", colorAttribute], bgColor: ["bgColor", "bgColor", colorAttribute], bgColorHover: ["bgColorHover", "bgColorHover", colorAttribute], bgColorChecked: ["bgColorChecked", "bgColorChecked", colorAttribute], bgColorCheckedHover: ["bgColorCheckedHover", "bgColorCheckedHover", colorAttribute], border: "border", borderHover: "borderHover", borderChecked: "borderChecked", borderCheckedHover: "borderCheckedHover", checked: ["checked", "checked", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], customIcons: ["customIcons", "customIcons", booleanAttribute], customHoverIcons: ["customHoverIcons", "customHoverIcons", booleanAttribute], checkboxSize: ["checkboxSize", "checkboxSize", sizeAttribute], checkboxHeight: ["checkboxHeight", "checkboxHeight", sizeAttribute], checkboxWidth: ["checkboxWidth", "checkboxWidth", sizeAttribute], singleLine: ["single-line", "singleLine", booleanAttribute], fitContent: ["fit-content", "fitContent", booleanAttribute], ellipsis: ["ellipsis", "ellipsis", booleanAttribute], tooltip: ["tooltip", "tooltip", booleanAttribute], tooltipIfTruncated: ["tooltipIfTruncated", "tooltipIfTruncated", booleanAttribute], tooltipText: "tooltipText", tooltipPosition: "tooltipPosition", tooltipDisabled: ["tooltipDisabled", "tooltipDisabled", booleanAttribute] }, outputs: { checkedChange: "checkedChange" }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c4, decls: 7, vars: 46, consts: [[1, "mrd-checkbox-container", 3, "ngClass", "mrdToolTip", "showToolTip", "position", "showOnTruncatedElement", "click"], ["class", "mrd-checkbox-box", 4, "ngIf"], ["class", "mrd-checkbox-custom", 3, "ngClass", 4, "ngIf"], ["class", "mrd-checkbox-custom-hover", 4, "ngIf"], [1, "mrd-checkbox-label"], ["checkboxlabel", ""], [1, "mrd-checkbox-box"], [4, "ngIf"], ["fill", "#ffffff", "width", "16px", "height", "16px", "viewBox", "-4 0 32 32", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "stroke", "#000000", "stroke-width", "0.00032"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "SVGRepo_iconCarrier"], ["d", "M19.375 5.063l-9.5 13.625-6.563-4.875-3.313 4.594 11.188 8.531 12.813-18.375z"], [1, "mrd-checkbox-custom", 3, "ngClass"], [1, "mrd-checkbox-custom-hover"]], template: function MrdCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtY2hlY2tib3gvY29tcG9uZW50cy9tcmQtY2hlY2tib3gvbXJkLWNoZWNrYm94LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtY2hlY2tib3gvY29tcG9uZW50cy9tcmQtY2hlY2tib3gvbXJkLWNoZWNrYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBbUMsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0wsT0FBTyxFQUF5QixJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxjQUFjLEVBQXVCLE1BQU0sK0NBQStDLENBQUM7QUFFcEcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7Ozs7SUNlN0QsNkJBQThCO0lBQzVCLG1CQUE2SjtJQUE3Siw4QkFBNko7SUFDM0osdUJBQStDLFlBQUE7SUFFL0MsNkJBQTRCLFlBQUE7SUFBUSxxQkFBSztJQUFBLGlCQUFRO0lBQUMsMkJBQStGO0lBQUEsaUJBQUksRUFBQTtJQUV6SiwwQkFBZTs7O0lBUGpCLCtCQUFvRDtJQUNsRCw4RkFNZTtJQUNqQixpQkFBTzs7O0lBUFUsZUFBYTtJQUFiLHFDQUFhOzs7SUFTNUIsMkNBQWlFOzs7SUFDakUsNENBQW9FOzs7O0lBRnRFLCtCQUFnRztJQUM5Rix5RkFBaUU7SUFDakUs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bnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkLCBib29sZWFuQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjY2Vzc2FibGVGb3JtQ29udHJvbCwgVXRpbCB9IGZyb20gJ21yZC1jb3JlJztcclxuaW1wb3J0IHsgc2l6ZUF0dHJpYnV0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi90cmFuc2Zvcm1zL3NpemUtdHJhbnNmb3JtJztcclxuaW1wb3J0IHsgY29sb3JBdHRyaWJ1dGUsIGNvbG9yVGhlbWVBdHRyaWJ1dGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9jb2xvci10cmFuc2Zvcm0nO1xyXG5pbXBvcnQgeyBNcmRCYXNlQ29sb3JUaGVtZSwgTXJkQ29uZmlnTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vbW9kZWwvY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgQ29uZmlnVXRpbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLWNoZWNrYm94JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWNoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtY2hlY2tib3guY29tcG9uZW50LnNjc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICBcIltzdHlsZS5tYXgtd2lkdGhdXCI6IFwiZml0Q29udGVudCA/ICdmaXQtY29udGVudCcgOiAnMTAwJSdcIixcclxuICB9LFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmRDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQge1xyXG5cclxuICBAVmlld0NoaWxkKCdjaGVja2JveGxhYmVsJykgcHVibGljIGxhYmVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcclxuXHJcbiAgQElucHV0KCdtcmRGb3JtQ29udHJvbCcpIHB1YmxpYyBmb3JtQ29udHJvbDogQWNjZXNzYWJsZUZvcm1Db250cm9sO1xyXG5cclxuICAvLyBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBmaWxsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLy8gQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgb3V0bGluZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHJvdW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLy8gQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcHJpbWFyeTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8vIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGFjY2VudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8vIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHdhcm46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGNvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGNvbG9ySG92ZXI6IHN0cmluZyA9ICcjMDAwMDAwJztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY29sb3JDaGVja2VkOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGNvbG9yQ2hlY2tlZEhvdmVyOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGJnQ29sb3I6IHN0cmluZyA9ICd0cmFuc3BhcmVudCc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGJnQ29sb3JIb3Zlcjogc3RyaW5nID0gJ3RyYW5zcGFyZW50JztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgYmdDb2xvckNoZWNrZWQ6IHN0cmluZyA9ICd0cmFuc3BhcmVudCc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGJnQ29sb3JDaGVja2VkSG92ZXI6IHN0cmluZyA9ICd0cmFuc3BhcmVudCc7IFxyXG4gIEBJbnB1dCgpIHB1YmxpYyBib3JkZXI6IHN0cmluZyA9ICdub25lJztcclxuICBASW5wdXQoKSBwdWJsaWMgYm9yZGVySG92ZXI6IHN0cmluZyA9ICdub25lJztcclxuICBASW5wdXQoKSBwdWJsaWMgYm9yZGVyQ2hlY2tlZDogc3RyaW5nID0gJ25vbmUnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBib3JkZXJDaGVja2VkSG92ZXI6IHN0cmluZyA9ICdub25lJztcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tSWNvbnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21Ib3Zlckljb25zOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIGNoZWNrYm94U2l6ZTogc3RyaW5nID0gJzE2cHgnO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIGNoZWNrYm94SGVpZ2h0OiBzdHJpbmc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgY2hlY2tib3hXaWR0aDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe2FsaWFzOiAnc2luZ2xlLWxpbmUnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2luZ2xlTGluZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdmaXQtY29udGVudCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBmaXRDb250ZW50OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZWxsaXBzaXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgdG9vbHRpcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHRvb2x0aXBJZlRydW5jYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgdG9vbHRpcFRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLmN1c3RvbVRvb2x0aXBUZXh0ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5fdG9vbHRpcFRleHQgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5sYWJlbCkpIHtcclxuICAgICAgdGhpcy5fdG9vbHRpcFRleHQgPSB0aGlzLmxhYmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0O1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgZ2V0IHRvb2x0aXBUZXh0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG9vbHRpcFRleHQ7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3Rvb2x0aXBUZXh0OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBjdXN0b21Ub29sdGlwVGV4dDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0b29sdGlwUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnID0gJ2JvdHRvbSc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgdG9vbHRpcERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2hlY2tlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBwcml2YXRlIGNvbmZpZzogTXJkQ29uZmlnTW9kZWwgPSBDb25maWdVdGlsLmdldENvbmZpZygpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sLnZhbHVlKSkge1xyXG4gICAgICB0aGlzLmNoZWNrZWQgPSAhIXRoaXMuZm9ybUNvbnRyb2wudmFsdWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50b29sdGlwSWZUcnVuY2F0ZWQpIHtcclxuICAgICAgdGhpcy50b29sdGlwID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRvb2x0aXAgJiYgIVV0aWwuaXNEZWZpbmVkKHRoaXMudG9vbHRpcFRleHQpKSB7XHJcbiAgICAgIHRoaXMuX3Rvb2x0aXBUZXh0ID0gdGhpcy5sYWJlbC5uYXRpdmVFbGVtZW50LmlubmVyVGV4dDtcclxuICAgIH1cclxuICAgIGlmICghVXRpbC5pc0RlZmluZWQodGhpcy5jaGVja2JveEhlaWdodCkpIHtcclxuICAgICAgdGhpcy5jaGVja2JveEhlaWdodCA9IHRoaXMuY2hlY2tib3hTaXplO1xyXG4gICAgfVxyXG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLmNoZWNrYm94V2lkdGgpKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hXaWR0aCA9IHRoaXMuY2hlY2tib3hTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIC8vIFsnY2hlY2tib3gnLCAnZmlsbCcsICdzZWxlY3RlZCcsICdwcmltYXJ5JywgJ3RleHQnXTtcclxuICAgIC8vIFsnY2hlY2tib3gnLCAnc2VsZWN0ZWQnLCAncHJpbWFyeScsICd0ZXh0J107XHJcbiAgICAvLyBbJ2Jhc2VDb2xvcicsICdwcmltYXJ5J107XHJcbiAgICAvLyBpZiAodGhpcy5wcmltYXJ5KSB7XHJcbiAgICAvLyAgIHRoaXMuY29sb3IgPSBfLmlzT2JqZWN0KHRoaXMuY29uZmlnLmJhc2VDb2xvcnMucHJpbWFyeSkgPyAodGhpcy5jb25maWcuYmFzZUNvbG9ycy5wcmltYXJ5IGFzIE1yZEJhc2VDb2xvclRoZW1lKS50ZXh0IDogdGhpcy5jb25maWcuYmFzZUNvbG9ycy5wcmltYXJ5IGFzIHN0cmluZztcclxuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5hY2NlbnQpIHtcclxuICAgIC8vICAgdGhpcy5jb2xvciA9IHRoaXMuY29uZmlnLmFjY2VudENvbG9yO1xyXG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLndhcm4pIHtcclxuICAgIC8vICAgdGhpcy5jb2xvciA9IHRoaXMuY29uZmlnLndhcm5Db2xvcjtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRvb2x0aXAgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5sYWJlbCkgJiYgIXRoaXMuY3VzdG9tVG9vbHRpcFRleHQgJiYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLnRvb2x0aXBUZXh0KSB8fCB0aGlzLnRvb2x0aXBUZXh0ICE9PSB0aGlzLmxhYmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0KSkge1xyXG4gICAgICB0aGlzLl90b29sdGlwVGV4dCA9IHRoaXMubGFiZWwubmF0aXZlRWxlbWVudC5pbm5lclRleHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBwcml2YXRlIGluaXRCYXNlU3R5bGUoKTogdm9pZCB7XHJcblxyXG4gIC8vIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSAmJiB0aGlzLmZvcm1Db250cm9sLmRpc2FibGVkKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5jaGVja2VkKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2hlY2tlZENoYW5nZS5lbWl0KHRoaXMuY2hlY2tlZCk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJtcmQtY2hlY2tib3gtY29udGFpbmVyXCIgW25nQ2xhc3NdPVwieydtcmQtY2hlY2tib3gtZGlzYWJsZWQnOiBmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWR9XCIgKGNsaWNrKT1cInRvZ2dsZSgpXCJcclxuICBbbXJkVG9vbFRpcF09XCJ0b29sdGlwVGV4dFwiIFtzaG93VG9vbFRpcF09XCJ0b29sdGlwICYmICF0b29sdGlwRGlzYWJsZWRcIiBbcG9zaXRpb25dPVwidG9vbHRpcFBvc2l0aW9uXCIgW3Nob3dPblRydW5jYXRlZEVsZW1lbnRdPVwidG9vbHRpcElmVHJ1bmNhdGVkID8gY2hlY2tib3hsYWJlbCA6IHVuZGVmaW5lZFwiXHJcbiAgW3N0eWxlLi0tYm94LWhlaWdodF09XCJjaGVja2JveEhlaWdodFwiIFxyXG4gIFtzdHlsZS4tLWJveC13aWR0aF09XCJjaGVja2JveFdpZHRoXCJcclxuICBbc3R5bGUuLS1iZy1jb2xvcl09XCJiZ0NvbG9yXCJcclxuICBbc3R5bGUuLS1iZy1jb2xvci1ob3Zlcl09XCJiZ0NvbG9ySG92ZXJcIlxyXG4gIFtzdHlsZS4tLWJnLWNvbG9yLWNoZWNrZWRdPVwiYmdDb2xvckNoZWNrZWRcIlxyXG4gIFtzdHlsZS4tLWJnLWNvbG9yLWNoZWNrZWQtaG92ZXJdPVwiYmdDb2xvckNoZWNrZWRIb3ZlclwiXHJcbiAgW3N0eWxlLi0tY29sb3JdPVwiY29sb3JcIlxyXG4gIFtzdHlsZS4tLWNvbG9yLWhvdmVyXT1cImNvbG9ySG92ZXJcIlxyXG4gIFtzdHlsZS4tLWNvbG9yLWNoZWNrZWRdPVwiY29sb3JDaGVja2VkXCJcclxuICBbc3R5bGUuLS1jb2xvci1jaGVja2VkLWhvdmVyXT1cImNvbG9yQ2hlY2tlZEhvdmVyXCJcclxuICBbc3R5bGUuLS1ib3JkZXJdPVwiYm9yZGVyXCJcclxuICBbc3R5bGUuLS1ib3JkZXItaG92ZXJdPVwiYm9yZGVySG92ZXJcIlxyXG4gIFtzdHlsZS4tLWJvcmRlci1jaGVja2VkXT1cImJvcmRlckNoZWNrZWRcIlxyXG4gIFtzdHlsZS4tLWJvcmRlci1jaGVja2VkLWhvdmVyXT1cImJvcmRlckNoZWNrZWRIb3ZlclwiXHJcbiAgW2NsYXNzLnJvdW5kZWRdPVwicm91bmRlZFwiXHJcbiAgW2NsYXNzLmNoZWNrZWRdPVwiY2hlY2tlZFwiXHJcbiAgPlxyXG4gIDxzcGFuIGNsYXNzPVwibXJkLWNoZWNrYm94LWJveFwiICpuZ0lmPVwiIWN1c3RvbUljb25zXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2hlY2tlZFwiPlxyXG4gICAgICA8c3ZnIGZpbGw9XCIjZmZmZmZmXCIgd2lkdGg9XCIxNnB4XCIgaGVpZ2h0PVwiMTZweFwiIHZpZXdCb3g9XCItNCAwIDMyIDMyXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMC4wMDAzMlwiPlxyXG4gICAgICAgIDxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCI+PC9nPlxyXG4gICAgICAgIDxnIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9nPlxyXG4gICAgICAgIDxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPiA8dGl0bGU+Y2hlY2s8L3RpdGxlPiA8cGF0aCBkPVwiTTE5LjM3NSA1LjA2M2wtOS41IDEzLjYyNS02LjU2My00Ljg3NS0zLjMxMyA0LjU5NCAxMS4xODggOC41MzEgMTIuODEzLTE4LjM3NXpcIj48L3BhdGg+PC9nPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvc3Bhbj5cclxuICA8ZGl2IGNsYXNzPVwibXJkLWNoZWNrYm94LWN1c3RvbVwiIFtuZ0NsYXNzXT1cInsnaXNIb3Zlcic6ICFjdXN0b21Ib3Zlckljb25zfVwiICpuZ0lmPVwiY3VzdG9tSWNvbnNcIj5cclxuICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiY2hlY2tlZFwiIHNlbGVjdD1cIltpY29uLWNoZWNrZWRdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhY2hlY2tlZFwiIHNlbGVjdD1cIltpY29uLXVuY2hlY2tlZF1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cIm1yZC1jaGVja2JveC1jdXN0b20taG92ZXJcIiAqbmdJZj1cImN1c3RvbUhvdmVySWNvbnNcIj5cclxuICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiY2hlY2tlZFwiIHNlbGVjdD1cIltpY29uLWNoZWNrZWQtaG92ZXJdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhY2hlY2tlZFwiIHNlbGVjdD1cIltpY29uLXVuY2hlY2tlZC1ob3Zlcl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbiAgXHJcbiAgXHJcbiAgPHNwYW4gI2NoZWNrYm94bGFiZWwgY2xhc3M9XCJtcmQtY2hlY2tib3gtbGFiZWxcIlxyXG4gICAgW2NsYXNzLnNpbmdsZUxpbmVdPVwic2luZ2xlTGluZVwiXHJcbiAgICBbY2xhc3MuZWxsaXBzaXNdPVwiZWxsaXBzaXNcIlxyXG4gID48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPlxyXG48L2Rpdj5cclxuIl19