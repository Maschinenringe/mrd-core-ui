import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';
import { Util } from 'mrd-core';
import { sizeAttribute } from '../../../../common/transforms/size-transform';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MrdCheckboxComponent_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 5);
    i0.ɵɵelement(2, "g", 6)(3, "g", 7);
    i0.ɵɵelementStart(4, "g", 8)(5, "title");
    i0.ɵɵtext(6, "check");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "path", 9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} }
const _c0 = function (a0) { return { "checked": a0 }; };
function MrdCheckboxComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵtemplate(1, MrdCheckboxComponent_span_1_ng_container_1_Template, 8, 0, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r0.checked));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.checked);
} }
function MrdCheckboxComponent_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1, ["*ngIf", "checked"]);
} }
function MrdCheckboxComponent_ng_content_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 2, ["*ngIf", "!checked"]);
} }
const _c1 = ["*", [["", "icon-checked", ""]], [["", "icon-unchecked", ""]]];
const _c2 = function (a0) { return { "mrd-checkbox-disabled": a0 }; };
const _c3 = ["*", "[icon-checked]", "[icon-unchecked]"];
export class MrdCheckboxComponent {
    cdr;
    formControl;
    checked = false;
    disabled = false;
    customIcons = false;
    checkboxHeight = '16px';
    checkboxWidth = '16px';
    checkedChange = new EventEmitter();
    constructor(cdr) {
        this.cdr = cdr;
    }
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
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdCheckboxComponent, selectors: [["mrd-checkbox"]], inputs: { formControl: "formControl", checked: ["checked", "checked", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], customIcons: ["customIcons", "customIcons", booleanAttribute], checkboxHeight: ["checkboxHeight", "checkboxHeight", sizeAttribute], checkboxWidth: ["checkboxWidth", "checkboxWidth", sizeAttribute] }, outputs: { checkedChange: "checkedChange" }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c3, decls: 6, vars: 10, consts: [[1, "mrd-checkbox-container", 3, "ngClass", "click"], ["class", "mrd-checkbox-box", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "mrd-checkbox-label"], [1, "mrd-checkbox-box", 3, "ngClass"], ["fill", "#ffffff", "width", "16px", "height", "16px", "viewBox", "-4 0 32 32", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "stroke", "#000000", "stroke-width", "0.00032"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "SVGRepo_iconCarrier"], ["d", "M19.375 5.063l-9.5 13.625-6.563-4.875-3.313 4.594 11.188 8.531 12.813-18.375z"]], template: function MrdCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function MrdCheckboxComponent_Template_div_click_0_listener() { return ctx.toggle(); });
            i0.ɵɵtemplate(1, MrdCheckboxComponent_span_1_Template, 2, 4, "span", 1);
            i0.ɵɵtemplate(2, MrdCheckboxComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
            i0.ɵɵtemplate(3, MrdCheckboxComponent_ng_content_3_Template, 1, 0, "ng-content", 2);
            i0.ɵɵelementStart(4, "span", 3);
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵstyleProp("--box-height", ctx.checkboxHeight)("--box-width", ctx.checkboxWidth);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c2, (ctx.formControl == null ? null : ctx.formControl.disabled) || ctx.disabled));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.customIcons);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.checked);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.checked);
        } }, dependencies: [i1.NgClass, i1.NgIf], styles: ["[_nghost-%COMP%]{width:-moz-fit-content;width:fit-content}.mrd-checkbox-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;cursor:pointer}.mrd-checkbox-container[_ngcontent-%COMP%]     [icon-checked], .mrd-checkbox-container[_ngcontent-%COMP%]     [icon-unchecked]{max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-height);min-height:var(--box-width)}.mrd-checkbox-container[_ngcontent-%COMP%]   .mrd-checkbox-box[_ngcontent-%COMP%]{max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-width);min-height:var(--box-height);display:inline-block;border:2px solid rgba(0,0,0,.54);border-radius:2px;text-align:center;margin-right:6px}.mrd-checkbox-container[_ngcontent-%COMP%]   .mrd-checkbox-box.checked[_ngcontent-%COMP%]{background-color:#3faa49;border:none}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]{cursor:inherit}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]   .mrd-checkbox-box[_ngcontent-%COMP%]{border-color:#afa6a6}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]   .mrd-checkbox-box.checked[_ngcontent-%COMP%]{background-color:#afa6a6af}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]   .mrd-checkbox-label[_ngcontent-%COMP%]{color:#afa6a6}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdCheckboxComponent, [{
        type: Component,
        args: [{ selector: 'mrd-checkbox', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-checkbox-container\" [ngClass]=\"{'mrd-checkbox-disabled': formControl?.disabled || disabled}\" (click)=\"toggle()\"\r\n  [style.--box-height]=\"checkboxHeight\" [style.--box-width]=\"checkboxWidth\">\r\n  <span class=\"mrd-checkbox-box\" [ngClass]=\"{'checked': checked}\" *ngIf=\"!customIcons\">\r\n    <ng-container *ngIf=\"checked\">\r\n      <svg fill=\"#ffffff\" width=\"16px\" height=\"16px\" viewBox=\"-4 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"#000000\" stroke-width=\"0.00032\">\r\n        <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\r\n        <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g>\r\n        <g id=\"SVGRepo_iconCarrier\"> <title>check</title> <path d=\"M19.375 5.063l-9.5 13.625-6.563-4.875-3.313 4.594 11.188 8.531 12.813-18.375z\"></path></g>\r\n      </svg>\r\n    </ng-container>\r\n  </span>\r\n  <ng-content *ngIf=\"checked\" select=\"[icon-checked]\"></ng-content>\r\n  <ng-content *ngIf=\"!checked\" select=\"[icon-unchecked]\"></ng-content>\r\n  <span class=\"mrd-checkbox-label\"><ng-content></ng-content></span>\r\n</div>\r\n", styles: [":host{width:-moz-fit-content;width:fit-content}.mrd-checkbox-container{display:flex;flex-direction:row;align-items:center;cursor:pointer}.mrd-checkbox-container ::ng-deep [icon-checked],.mrd-checkbox-container ::ng-deep [icon-unchecked]{max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-height);min-height:var(--box-width)}.mrd-checkbox-container .mrd-checkbox-box{max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-width);min-height:var(--box-height);display:inline-block;border:2px solid rgba(0,0,0,.54);border-radius:2px;text-align:center;margin-right:6px}.mrd-checkbox-container .mrd-checkbox-box.checked{background-color:#3faa49;border:none}.mrd-checkbox-container.mrd-checkbox-disabled{cursor:inherit}.mrd-checkbox-container.mrd-checkbox-disabled .mrd-checkbox-box{border-color:#afa6a6}.mrd-checkbox-container.mrd-checkbox-disabled .mrd-checkbox-box.checked{background-color:#afa6a6af}.mrd-checkbox-container.mrd-checkbox-disabled .mrd-checkbox-label{color:#afa6a6}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { formControl: [{
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
        }], checkboxHeight: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], checkboxWidth: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], checkedChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtY2hlY2tib3gvY29tcG9uZW50cy9tcmQtY2hlY2tib3gvbXJkLWNoZWNrYm94LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtY2hlY2tib3gvY29tcG9uZW50cy9tcmQtY2hlY2tib3gvbXJkLWNoZWNrYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JJLE9BQU8sRUFBeUIsSUFBSSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7OztJQ0N6RSw2QkFBOEI7SUFDNUIsbUJBQTZKO0lBQTdKLDhCQUE2SjtJQUMzSix1QkFBK0MsV0FBQTtJQUUvQyw0QkFBNEIsWUFBQTtJQUFRLHFCQUFLO0lBQUEsaUJBQVE7SUFBQywwQkFBK0Y7SUFBQSxpQkFBSSxFQUFBO0lBRXpKLDBCQUFlOzs7O0lBUGpCLCtCQUFxRjtJQUNuRiw4RkFNZTtJQUNqQixpQkFBTzs7O0lBUndCLG9FQUFnQztJQUM5QyxlQUFhO0lBQWIscUNBQWE7OztJQVE5QiwyQ0FBaUU7OztJQUNqRSw0Q0FBb0U7Ozs7O0FERnRFLE1BQU0sT0FBTyxvQkFBb0I7SUFjckI7SUFaTSxXQUFXLENBQXdCO0lBRU4sT0FBTyxHQUFZLEtBQUssQ0FBQztJQUN6QixRQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLFdBQVcsR0FBWSxLQUFLLENBQUM7SUFFaEMsY0FBYyxHQUFXLE1BQU0sQ0FBQztJQUNoQyxhQUFhLEdBQVcsTUFBTSxDQUFDO0lBRXhELGFBQWEsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUVwRixZQUNVLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0lBQzVCLENBQUM7SUFFRSxNQUFNO1FBQ1gsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwRixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7aUdBM0JVLG9CQUFvQjs0RkFBcEIsb0JBQW9CLHVHQUlaLGdCQUFnQixzQ0FDaEIsZ0JBQWdCLCtDQUNoQixnQkFBZ0Isd0RBRWhCLGFBQWEscURBQ2IsYUFBYTs7WUNuQmxDLDhCQUM0RTtZQURpQyw4RkFBUyxZQUFRLElBQUM7WUFFN0gsdUVBUU87WUFDUCxtRkFBaUU7WUFDakUsbUZBQW9FO1lBQ3BFLCtCQUFpQztZQUFBLGtCQUF5QjtZQUFBLGlCQUFPLEVBQUE7O1lBWmpFLGtEQUFxQyxrQ0FBQTtZQURILGlJQUF3RTtZQUV6QyxlQUFrQjtZQUFsQix1Q0FBa0I7WUFTdEUsZUFBYTtZQUFiLGtDQUFhO1lBQ2IsZUFBYztZQUFkLG1DQUFjOzs7dUZERmhCLG9CQUFvQjtjQU5oQyxTQUFTOzJCQUNFLGNBQWMsbUJBR1AsdUJBQXVCLENBQUMsTUFBTTtvRUFJL0IsV0FBVztrQkFBMUIsS0FBSztZQUV1QyxPQUFPO2tCQUFuRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBQ1MsUUFBUTtrQkFBcEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUNTLFdBQVc7a0JBQXZELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFTSxjQUFjO2tCQUF2RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGFBQWEsRUFBQztZQUNTLGFBQWE7a0JBQXRELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsYUFBYSxFQUFDO1lBRWhCLGFBQWE7a0JBQTdCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBib29sZWFuQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjY2Vzc2FibGVGb3JtQ29udHJvbCwgVXRpbCB9IGZyb20gJ21yZC1jb3JlJztcclxuaW1wb3J0IHsgc2l6ZUF0dHJpYnV0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi90cmFuc2Zvcm1zL3NpemUtdHJhbnNmb3JtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLWNoZWNrYm94JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWNoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtY2hlY2tib3guY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkQ2hlY2tib3hDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgZm9ybUNvbnRyb2w6IEFjY2Vzc2FibGVGb3JtQ29udHJvbDtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tSWNvbnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgY2hlY2tib3hIZWlnaHQ6IHN0cmluZyA9ICcxNnB4JztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBjaGVja2JveFdpZHRoOiBzdHJpbmcgPSAnMTZweCc7XHJcblxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2hlY2tlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkgeyB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgJiYgdGhpcy5mb3JtQ29udHJvbC5kaXNhYmxlZCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHRoaXMuY2hlY2tlZCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoZWNrZWRDaGFuZ2UuZW1pdCh0aGlzLmNoZWNrZWQpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibXJkLWNoZWNrYm94LWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cInsnbXJkLWNoZWNrYm94LWRpc2FibGVkJzogZm9ybUNvbnRyb2w/LmRpc2FibGVkIHx8IGRpc2FibGVkfVwiIChjbGljayk9XCJ0b2dnbGUoKVwiXHJcbiAgW3N0eWxlLi0tYm94LWhlaWdodF09XCJjaGVja2JveEhlaWdodFwiIFtzdHlsZS4tLWJveC13aWR0aF09XCJjaGVja2JveFdpZHRoXCI+XHJcbiAgPHNwYW4gY2xhc3M9XCJtcmQtY2hlY2tib3gtYm94XCIgW25nQ2xhc3NdPVwieydjaGVja2VkJzogY2hlY2tlZH1cIiAqbmdJZj1cIiFjdXN0b21JY29uc1wiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNoZWNrZWRcIj5cclxuICAgICAgPHN2ZyBmaWxsPVwiI2ZmZmZmZlwiIHdpZHRoPVwiMTZweFwiIGhlaWdodD1cIjE2cHhcIiB2aWV3Qm94PVwiLTQgMCAzMiAzMlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgc3Ryb2tlPVwiIzAwMDAwMFwiIHN0cm9rZS13aWR0aD1cIjAuMDAwMzJcIj5cclxuICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz5cclxuICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvZz5cclxuICAgICAgICA8ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj4gPHRpdGxlPmNoZWNrPC90aXRsZT4gPHBhdGggZD1cIk0xOS4zNzUgNS4wNjNsLTkuNSAxMy42MjUtNi41NjMtNC44NzUtMy4zMTMgNC41OTQgMTEuMTg4IDguNTMxIDEyLjgxMy0xOC4zNzV6XCI+PC9wYXRoPjwvZz5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L3NwYW4+XHJcbiAgPG5nLWNvbnRlbnQgKm5nSWY9XCJjaGVja2VkXCIgc2VsZWN0PVwiW2ljb24tY2hlY2tlZF1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhY2hlY2tlZFwiIHNlbGVjdD1cIltpY29uLXVuY2hlY2tlZF1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPHNwYW4gY2xhc3M9XCJtcmQtY2hlY2tib3gtbGFiZWxcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPlxyXG48L2Rpdj5cclxuIl19