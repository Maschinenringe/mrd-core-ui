import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';
import { Util } from 'mrd-core';
import { sizeAttribute } from '../../../../common/transforms/size-transform';
import { colorAttribute } from '../../../../common/transforms/color-transform';
import { ConfigUtil } from '../../../../common/util/config.util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MrdCheckboxComponent_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 7);
    i0.ɵɵelement(2, "g", 8)(3, "g", 9);
    i0.ɵɵelementStart(4, "g", 10)(5, "title");
    i0.ɵɵtext(6, "check");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "path", 11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} }
function MrdCheckboxComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtemplate(1, MrdCheckboxComponent_span_1_ng_container_1_Template, 8, 0, "ng-container", 6);
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
const _c0 = function (a0) { return { "isHover": a0 }; };
function MrdCheckboxComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtemplate(1, MrdCheckboxComponent_div_2_ng_content_1_Template, 1, 0, "ng-content", 6);
    i0.ɵɵtemplate(2, MrdCheckboxComponent_div_2_ng_content_2_Template, 1, 0, "ng-content", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, !ctx_r1.customHoverIcons));
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
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, MrdCheckboxComponent_div_3_ng_content_1_Template, 1, 0, "ng-content", 6);
    i0.ɵɵtemplate(2, MrdCheckboxComponent_div_3_ng_content_2_Template, 1, 0, "ng-content", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.checked);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.checked);
} }
const _c1 = ["*", [["", "icon-checked", ""]], [["", "icon-unchecked", ""]], [["", "icon-checked-hover", ""]], [["", "icon-unchecked-hover", ""]]];
const _c2 = function (a0) { return { "mrd-checkbox-disabled": a0 }; };
const _c3 = ["*", "[icon-checked]", "[icon-unchecked]", "[icon-checked-hover]", "[icon-unchecked-hover]"];
export class MrdCheckboxComponent {
    cdr;
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
    checkedChange = new EventEmitter();
    config = ConfigUtil.getConfig();
    public;
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        if (Util.isDefined(this.formControl) && Util.isDefined(this.formControl.value)) {
            this.checked = !!this.formControl.value;
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
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdCheckboxComponent, selectors: [["mrd-checkbox"]], inputs: { formControl: "formControl", rounded: ["rounded", "rounded", booleanAttribute], color: ["color", "color", colorAttribute], colorHover: ["colorHover", "colorHover", colorAttribute], colorChecked: ["colorChecked", "colorChecked", colorAttribute], colorCheckedHover: ["colorCheckedHover", "colorCheckedHover", colorAttribute], bgColor: ["bgColor", "bgColor", colorAttribute], bgColorHover: ["bgColorHover", "bgColorHover", colorAttribute], bgColorChecked: ["bgColorChecked", "bgColorChecked", colorAttribute], bgColorCheckedHover: ["bgColorCheckedHover", "bgColorCheckedHover", colorAttribute], border: "border", borderHover: "borderHover", borderChecked: "borderChecked", borderCheckedHover: "borderCheckedHover", checked: ["checked", "checked", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], customIcons: ["customIcons", "customIcons", booleanAttribute], customHoverIcons: ["customHoverIcons", "customHoverIcons", booleanAttribute], checkboxSize: ["checkboxSize", "checkboxSize", sizeAttribute], checkboxHeight: ["checkboxHeight", "checkboxHeight", sizeAttribute], checkboxWidth: ["checkboxWidth", "checkboxWidth", sizeAttribute] }, outputs: { checkedChange: "checkedChange" }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c3, decls: 6, vars: 38, consts: [[1, "mrd-checkbox-container", 3, "ngClass", "click"], ["class", "mrd-checkbox-box", 4, "ngIf"], ["class", "mrd-checkbox-custom", 3, "ngClass", 4, "ngIf"], ["class", "mrd-checkbox-custom-hover", 4, "ngIf"], [1, "mrd-checkbox-label"], [1, "mrd-checkbox-box"], [4, "ngIf"], ["fill", "#ffffff", "width", "16px", "height", "16px", "viewBox", "-4 0 32 32", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "stroke", "#000000", "stroke-width", "0.00032"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "SVGRepo_iconCarrier"], ["d", "M19.375 5.063l-9.5 13.625-6.563-4.875-3.313 4.594 11.188 8.531 12.813-18.375z"], [1, "mrd-checkbox-custom", 3, "ngClass"], [1, "mrd-checkbox-custom-hover"]], template: function MrdCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function MrdCheckboxComponent_Template_div_click_0_listener() { return ctx.toggle(); });
            i0.ɵɵtemplate(1, MrdCheckboxComponent_span_1_Template, 2, 1, "span", 1);
            i0.ɵɵtemplate(2, MrdCheckboxComponent_div_2_Template, 3, 5, "div", 2);
            i0.ɵɵtemplate(3, MrdCheckboxComponent_div_3_Template, 3, 2, "div", 3);
            i0.ɵɵelementStart(4, "span", 4);
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵstyleProp("--box-height", ctx.checkboxHeight)("--box-width", ctx.checkboxWidth)("--bg-color", ctx.bgColor)("--bg-color-hover", ctx.bgColorHover)("--bg-color-checked", ctx.bgColorChecked)("--bg-color-checked-hover", ctx.bgColorCheckedHover)("--color", ctx.color)("--color-hover", ctx.colorHover)("--color-checked", ctx.colorChecked)("--color-checked-hover", ctx.colorCheckedHover)("--border", ctx.border)("--border-hover", ctx.borderHover)("--border-checked", ctx.borderChecked)("--border-checked-hover", ctx.borderCheckedHover);
            i0.ɵɵclassProp("rounded", ctx.rounded)("checked", ctx.checked);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(36, _c2, (ctx.formControl == null ? null : ctx.formControl.disabled) || ctx.disabled));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.customIcons);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.customIcons);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.customHoverIcons);
        } }, dependencies: [i1.NgClass, i1.NgIf], styles: ["[_nghost-%COMP%]{display:block;width:-moz-fit-content;width:fit-content}.mrd-checkbox-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;cursor:pointer;color:var(--color);background-color:var(--bg-color);border:var(--border);padding:4px 8px 4px 4px;line-height:1.25em}.mrd-checkbox-container.rounded[_ngcontent-%COMP%]{border-radius:999999px}.mrd-checkbox-container[_ngcontent-%COMP%]     [icon-checked], .mrd-checkbox-container[_ngcontent-%COMP%]     [icon-unchecked], .mrd-checkbox-container[_ngcontent-%COMP%]     [icon-checked-hover], .mrd-checkbox-container[_ngcontent-%COMP%]     [icon-unchecked-hover]{display:block;max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-height);min-height:var(--box-width);margin-right:6px}.mrd-checkbox-container.checked[_ngcontent-%COMP%]{color:var(--color-checked);background-color:var(--bg-color-checked);border:var(--border-checked)}.mrd-checkbox-container.checked[_ngcontent-%COMP%]   .mrd-checkbox-box[_ngcontent-%COMP%]{background-color:#3faa49;border:none}.mrd-checkbox-container[_ngcontent-%COMP%]   .mrd-checkbox-box[_ngcontent-%COMP%]{max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-width);min-height:var(--box-height);display:inline-block;border:2px solid rgba(0,0,0,.54);border-radius:2px;text-align:center;margin-right:6px}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]{cursor:inherit}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]   .mrd-checkbox-box[_ngcontent-%COMP%]{border-color:#afa6a6}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]   .mrd-checkbox-box.checked[_ngcontent-%COMP%]{background-color:#afa6a6af}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]   .mrd-checkbox-label[_ngcontent-%COMP%]{color:#afa6a6}.mrd-checkbox-container[_ngcontent-%COMP%]:hover{color:var(--color-hover);background-color:var(--bg-color-hover);border:var(--border-hover)}.mrd-checkbox-container[_ngcontent-%COMP%]:hover.checked{color:var(--color-checked-hover);background-color:var(--bg-color-checked-hover);border:var(--border-checked-hover)}.mrd-checkbox-container[_ngcontent-%COMP%]:hover   .mrd-checkbox-custom[_ngcontent-%COMP%]:not(.isHover){display:none}.mrd-checkbox-container[_ngcontent-%COMP%]:hover   .mrd-checkbox-custom-hover[_ngcontent-%COMP%]{display:flex}.mrd-checkbox-custom[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.mrd-checkbox-custom-hover[_ngcontent-%COMP%]{display:none;flex-direction:column;justify-content:center;align-items:center}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdCheckboxComponent, [{
        type: Component,
        args: [{ selector: 'mrd-checkbox', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-checkbox-container\" [ngClass]=\"{'mrd-checkbox-disabled': formControl?.disabled || disabled}\" (click)=\"toggle()\"\r\n  [style.--box-height]=\"checkboxHeight\" \r\n  [style.--box-width]=\"checkboxWidth\"\r\n  [style.--bg-color]=\"bgColor\"\r\n  [style.--bg-color-hover]=\"bgColorHover\"\r\n  [style.--bg-color-checked]=\"bgColorChecked\"\r\n  [style.--bg-color-checked-hover]=\"bgColorCheckedHover\"\r\n  [style.--color]=\"color\"\r\n  [style.--color-hover]=\"colorHover\"\r\n  [style.--color-checked]=\"colorChecked\"\r\n  [style.--color-checked-hover]=\"colorCheckedHover\"\r\n  [style.--border]=\"border\"\r\n  [style.--border-hover]=\"borderHover\"\r\n  [style.--border-checked]=\"borderChecked\"\r\n  [style.--border-checked-hover]=\"borderCheckedHover\"\r\n  [class.rounded]=\"rounded\"\r\n  [class.checked]=\"checked\"\r\n  >\r\n  <span class=\"mrd-checkbox-box\" *ngIf=\"!customIcons\">\r\n    <ng-container *ngIf=\"checked\">\r\n      <svg fill=\"#ffffff\" width=\"16px\" height=\"16px\" viewBox=\"-4 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"#000000\" stroke-width=\"0.00032\">\r\n        <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\r\n        <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g>\r\n        <g id=\"SVGRepo_iconCarrier\"> <title>check</title> <path d=\"M19.375 5.063l-9.5 13.625-6.563-4.875-3.313 4.594 11.188 8.531 12.813-18.375z\"></path></g>\r\n      </svg>\r\n    </ng-container>\r\n  </span>\r\n  <div class=\"mrd-checkbox-custom\" [ngClass]=\"{'isHover': !customHoverIcons}\" *ngIf=\"customIcons\">\r\n    <ng-content *ngIf=\"checked\" select=\"[icon-checked]\"></ng-content>\r\n    <ng-content *ngIf=\"!checked\" select=\"[icon-unchecked]\"></ng-content>\r\n  </div>\r\n  <div class=\"mrd-checkbox-custom-hover\" *ngIf=\"customHoverIcons\">\r\n    <ng-content *ngIf=\"checked\" select=\"[icon-checked-hover]\"></ng-content>\r\n    <ng-content *ngIf=\"!checked\" select=\"[icon-unchecked-hover]\"></ng-content>\r\n  </div>\r\n  \r\n  \r\n  <span class=\"mrd-checkbox-label\"><ng-content></ng-content></span>\r\n</div>\r\n", styles: [":host{display:block;width:-moz-fit-content;width:fit-content}.mrd-checkbox-container{display:flex;flex-direction:row;align-items:center;cursor:pointer;color:var(--color);background-color:var(--bg-color);border:var(--border);padding:4px 8px 4px 4px;line-height:1.25em}.mrd-checkbox-container.rounded{border-radius:999999px}.mrd-checkbox-container ::ng-deep [icon-checked],.mrd-checkbox-container ::ng-deep [icon-unchecked],.mrd-checkbox-container ::ng-deep [icon-checked-hover],.mrd-checkbox-container ::ng-deep [icon-unchecked-hover]{display:block;max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-height);min-height:var(--box-width);margin-right:6px}.mrd-checkbox-container.checked{color:var(--color-checked);background-color:var(--bg-color-checked);border:var(--border-checked)}.mrd-checkbox-container.checked .mrd-checkbox-box{background-color:#3faa49;border:none}.mrd-checkbox-container .mrd-checkbox-box{max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-width);min-height:var(--box-height);display:inline-block;border:2px solid rgba(0,0,0,.54);border-radius:2px;text-align:center;margin-right:6px}.mrd-checkbox-container.mrd-checkbox-disabled{cursor:inherit}.mrd-checkbox-container.mrd-checkbox-disabled .mrd-checkbox-box{border-color:#afa6a6}.mrd-checkbox-container.mrd-checkbox-disabled .mrd-checkbox-box.checked{background-color:#afa6a6af}.mrd-checkbox-container.mrd-checkbox-disabled .mrd-checkbox-label{color:#afa6a6}.mrd-checkbox-container:hover{color:var(--color-hover);background-color:var(--bg-color-hover);border:var(--border-hover)}.mrd-checkbox-container:hover.checked{color:var(--color-checked-hover);background-color:var(--bg-color-checked-hover);border:var(--border-checked-hover)}.mrd-checkbox-container:hover .mrd-checkbox-custom:not(.isHover){display:none}.mrd-checkbox-container:hover .mrd-checkbox-custom-hover{display:flex}.mrd-checkbox-custom{display:flex;flex-direction:column;justify-content:center;align-items:center}.mrd-checkbox-custom-hover{display:none;flex-direction:column;justify-content:center;align-items:center}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { formControl: [{
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
        }], checkedChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtY2hlY2tib3gvY29tcG9uZW50cy9tcmQtY2hlY2tib3gvbXJkLWNoZWNrYm94LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtY2hlY2tib3gvY29tcG9uZW50cy9tcmQtY2hlY2tib3gvbXJkLWNoZWNrYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSixPQUFPLEVBQXlCLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGNBQWMsRUFBdUIsTUFBTSwrQ0FBK0MsQ0FBQztBQUVwRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7SUNjN0QsNkJBQThCO0lBQzVCLG1CQUE2SjtJQUE3Siw4QkFBNko7SUFDM0osdUJBQStDLFdBQUE7SUFFL0MsNkJBQTRCLFlBQUE7SUFBUSxxQkFBSztJQUFBLGlCQUFRO0lBQUMsMkJBQStGO0lBQUEsaUJBQUksRUFBQTtJQUV6SiwwQkFBZTs7O0lBUGpCLCtCQUFvRDtJQUNsRCw4RkFNZTtJQUNqQixpQkFBTzs7O0lBUFUsZUFBYTtJQUFiLHFDQUFhOzs7SUFTNUIsMkNBQWlFOzs7SUFDakUsNENBQW9FOzs7O0lBRnRFLCtCQUFnRztJQUM5Rix5RkFBaUU7SUFDakUseUZBQW9FO0lBQ3RF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LE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBib29sZWFuQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjY2Vzc2FibGVGb3JtQ29udHJvbCwgVXRpbCB9IGZyb20gJ21yZC1jb3JlJztcclxuaW1wb3J0IHsgc2l6ZUF0dHJpYnV0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi90cmFuc2Zvcm1zL3NpemUtdHJhbnNmb3JtJztcclxuaW1wb3J0IHsgY29sb3JBdHRyaWJ1dGUsIGNvbG9yVGhlbWVBdHRyaWJ1dGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9jb2xvci10cmFuc2Zvcm0nO1xyXG5pbXBvcnQgeyBNcmRCYXNlQ29sb3JUaGVtZSwgTXJkQ29uZmlnTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vbW9kZWwvY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgQ29uZmlnVXRpbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLWNoZWNrYm94JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWNoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtY2hlY2tib3guY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIGZvcm1Db250cm9sOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2w7XHJcblxyXG4gIC8vIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGZpbGw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvLyBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBvdXRsaW5lOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcm91bmRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvLyBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBwcmltYXJ5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgLy8gQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgYWNjZW50OiBib29sZWFuID0gZmFsc2U7XHJcbiAgLy8gQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgd2FybjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY29sb3I6IHN0cmluZyA9ICcjMDAwMDAwJztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY29sb3JIb3Zlcjogc3RyaW5nID0gJyMwMDAwMDAnO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjb2xvckNoZWNrZWQ6IHN0cmluZyA9ICcjMDAwMDAwJztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY29sb3JDaGVja2VkSG92ZXI6IHN0cmluZyA9ICcjMDAwMDAwJztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgYmdDb2xvcjogc3RyaW5nID0gJ3RyYW5zcGFyZW50JztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgYmdDb2xvckhvdmVyOiBzdHJpbmcgPSAndHJhbnNwYXJlbnQnO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBiZ0NvbG9yQ2hlY2tlZDogc3RyaW5nID0gJ3RyYW5zcGFyZW50JztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgYmdDb2xvckNoZWNrZWRIb3Zlcjogc3RyaW5nID0gJ3RyYW5zcGFyZW50JzsgXHJcbiAgQElucHV0KCkgcHVibGljIGJvcmRlcjogc3RyaW5nID0gJ25vbmUnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBib3JkZXJIb3Zlcjogc3RyaW5nID0gJ25vbmUnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBib3JkZXJDaGVja2VkOiBzdHJpbmcgPSAnbm9uZSc7XHJcbiAgQElucHV0KCkgcHVibGljIGJvcmRlckNoZWNrZWRIb3Zlcjogc3RyaW5nID0gJ25vbmUnO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21JY29uczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbUhvdmVySWNvbnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgY2hlY2tib3hTaXplOiBzdHJpbmcgPSAnMTZweCc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgY2hlY2tib3hIZWlnaHQ6IHN0cmluZztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBjaGVja2JveFdpZHRoOiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2hlY2tlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBwcml2YXRlIGNvbmZpZzogTXJkQ29uZmlnTW9kZWwgPSBDb25maWdVdGlsLmdldENvbmZpZygpO1xyXG5cclxuICBwdWJsaWMgXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tlZCA9ICEhdGhpcy5mb3JtQ29udHJvbC52YWx1ZTtcclxuICAgIH1cclxuICAgIGlmICghVXRpbC5pc0RlZmluZWQodGhpcy5jaGVja2JveEhlaWdodCkpIHtcclxuICAgICAgdGhpcy5jaGVja2JveEhlaWdodCA9IHRoaXMuY2hlY2tib3hTaXplO1xyXG4gICAgfVxyXG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLmNoZWNrYm94V2lkdGgpKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hXaWR0aCA9IHRoaXMuY2hlY2tib3hTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIC8vIFsnY2hlY2tib3gnLCAnZmlsbCcsICdzZWxlY3RlZCcsICdwcmltYXJ5JywgJ3RleHQnXTtcclxuICAgIC8vIFsnY2hlY2tib3gnLCAnc2VsZWN0ZWQnLCAncHJpbWFyeScsICd0ZXh0J107XHJcbiAgICAvLyBbJ2Jhc2VDb2xvcicsICdwcmltYXJ5J107XHJcbiAgICAvLyBpZiAodGhpcy5wcmltYXJ5KSB7XHJcbiAgICAvLyAgIHRoaXMuY29sb3IgPSBfLmlzT2JqZWN0KHRoaXMuY29uZmlnLmJhc2VDb2xvcnMucHJpbWFyeSkgPyAodGhpcy5jb25maWcuYmFzZUNvbG9ycy5wcmltYXJ5IGFzIE1yZEJhc2VDb2xvclRoZW1lKS50ZXh0IDogdGhpcy5jb25maWcuYmFzZUNvbG9ycy5wcmltYXJ5IGFzIHN0cmluZztcclxuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5hY2NlbnQpIHtcclxuICAgIC8vICAgdGhpcy5jb2xvciA9IHRoaXMuY29uZmlnLmFjY2VudENvbG9yO1xyXG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLndhcm4pIHtcclxuICAgIC8vICAgdGhpcy5jb2xvciA9IHRoaXMuY29uZmlnLndhcm5Db2xvcjtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIC8vIHByaXZhdGUgaW5pdEJhc2VTdHlsZSgpOiB2b2lkIHtcclxuXHJcbiAgLy8gfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpICYmIHRoaXMuZm9ybUNvbnRyb2wuZGlzYWJsZWQpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmNoZWNrZWQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGVja2VkQ2hhbmdlLmVtaXQodGhpcy5jaGVja2VkKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1yZC1jaGVja2JveC1jb250YWluZXJcIiBbbmdDbGFzc109XCJ7J21yZC1jaGVja2JveC1kaXNhYmxlZCc6IGZvcm1Db250cm9sPy5kaXNhYmxlZCB8fCBkaXNhYmxlZH1cIiAoY2xpY2spPVwidG9nZ2xlKClcIlxyXG4gIFtzdHlsZS4tLWJveC1oZWlnaHRdPVwiY2hlY2tib3hIZWlnaHRcIiBcclxuICBbc3R5bGUuLS1ib3gtd2lkdGhdPVwiY2hlY2tib3hXaWR0aFwiXHJcbiAgW3N0eWxlLi0tYmctY29sb3JdPVwiYmdDb2xvclwiXHJcbiAgW3N0eWxlLi0tYmctY29sb3ItaG92ZXJdPVwiYmdDb2xvckhvdmVyXCJcclxuICBbc3R5bGUuLS1iZy1jb2xvci1jaGVja2VkXT1cImJnQ29sb3JDaGVja2VkXCJcclxuICBbc3R5bGUuLS1iZy1jb2xvci1jaGVja2VkLWhvdmVyXT1cImJnQ29sb3JDaGVja2VkSG92ZXJcIlxyXG4gIFtzdHlsZS4tLWNvbG9yXT1cImNvbG9yXCJcclxuICBbc3R5bGUuLS1jb2xvci1ob3Zlcl09XCJjb2xvckhvdmVyXCJcclxuICBbc3R5bGUuLS1jb2xvci1jaGVja2VkXT1cImNvbG9yQ2hlY2tlZFwiXHJcbiAgW3N0eWxlLi0tY29sb3ItY2hlY2tlZC1ob3Zlcl09XCJjb2xvckNoZWNrZWRIb3ZlclwiXHJcbiAgW3N0eWxlLi0tYm9yZGVyXT1cImJvcmRlclwiXHJcbiAgW3N0eWxlLi0tYm9yZGVyLWhvdmVyXT1cImJvcmRlckhvdmVyXCJcclxuICBbc3R5bGUuLS1ib3JkZXItY2hlY2tlZF09XCJib3JkZXJDaGVja2VkXCJcclxuICBbc3R5bGUuLS1ib3JkZXItY2hlY2tlZC1ob3Zlcl09XCJib3JkZXJDaGVja2VkSG92ZXJcIlxyXG4gIFtjbGFzcy5yb3VuZGVkXT1cInJvdW5kZWRcIlxyXG4gIFtjbGFzcy5jaGVja2VkXT1cImNoZWNrZWRcIlxyXG4gID5cclxuICA8c3BhbiBjbGFzcz1cIm1yZC1jaGVja2JveC1ib3hcIiAqbmdJZj1cIiFjdXN0b21JY29uc1wiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNoZWNrZWRcIj5cclxuICAgICAgPHN2ZyBmaWxsPVwiI2ZmZmZmZlwiIHdpZHRoPVwiMTZweFwiIGhlaWdodD1cIjE2cHhcIiB2aWV3Qm94PVwiLTQgMCAzMiAzMlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgc3Ryb2tlPVwiIzAwMDAwMFwiIHN0cm9rZS13aWR0aD1cIjAuMDAwMzJcIj5cclxuICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz5cclxuICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvZz5cclxuICAgICAgICA8ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj4gPHRpdGxlPmNoZWNrPC90aXRsZT4gPHBhdGggZD1cIk0xOS4zNzUgNS4wNjNsLTkuNSAxMy42MjUtNi41NjMtNC44NzUtMy4zMTMgNC41OTQgMTEuMTg4IDguNTMxIDEyLjgxMy0xOC4zNzV6XCI+PC9wYXRoPjwvZz5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L3NwYW4+XHJcbiAgPGRpdiBjbGFzcz1cIm1yZC1jaGVja2JveC1jdXN0b21cIiBbbmdDbGFzc109XCJ7J2lzSG92ZXInOiAhY3VzdG9tSG92ZXJJY29uc31cIiAqbmdJZj1cImN1c3RvbUljb25zXCI+XHJcbiAgICA8bmctY29udGVudCAqbmdJZj1cImNoZWNrZWRcIiBzZWxlY3Q9XCJbaWNvbi1jaGVja2VkXVwiPjwvbmctY29udGVudD5cclxuICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIWNoZWNrZWRcIiBzZWxlY3Q9XCJbaWNvbi11bmNoZWNrZWRdXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJtcmQtY2hlY2tib3gtY3VzdG9tLWhvdmVyXCIgKm5nSWY9XCJjdXN0b21Ib3Zlckljb25zXCI+XHJcbiAgICA8bmctY29udGVudCAqbmdJZj1cImNoZWNrZWRcIiBzZWxlY3Q9XCJbaWNvbi1jaGVja2VkLWhvdmVyXVwiPjwvbmctY29udGVudD5cclxuICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIWNoZWNrZWRcIiBzZWxlY3Q9XCJbaWNvbi11bmNoZWNrZWQtaG92ZXJdXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG4gIFxyXG4gIFxyXG4gIDxzcGFuIGNsYXNzPVwibXJkLWNoZWNrYm94LWxhYmVsXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj5cclxuPC9kaXY+XHJcbiJdfQ==