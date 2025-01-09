import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';
import { Util } from 'mrd-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MrdCheckboxComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 4);
    i0.ɵɵelement(2, "g", 5)(3, "g", 6);
    i0.ɵɵelementStart(4, "g", 7)(5, "title");
    i0.ɵɵtext(6, "check");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "path", 8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} }
const _c0 = function (a0) { return { "mrd-checkbox-disabled": a0 }; };
const _c1 = function (a0) { return { "checked": a0 }; };
const _c2 = ["*"];
export class MrdCheckboxComponent {
    cdr;
    formControl;
    checked = false;
    disabled = false;
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
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdCheckboxComponent, selectors: [["mrd-checkbox"]], inputs: { formControl: "formControl", checked: ["checked", "checked", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute] }, outputs: { checkedChange: "checkedChange" }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c2, decls: 5, vars: 7, consts: [[1, "mrd-checkbox-container", 3, "ngClass", "click"], [1, "mrd-checkbox-box", 3, "ngClass"], [4, "ngIf"], [1, "mrd-checkbox-label"], ["fill", "#ffffff", "width", "16px", "height", "16px", "viewBox", "-4 0 32 32", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "stroke", "#000000", "stroke-width", "0.00032"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "SVGRepo_iconCarrier"], ["d", "M19.375 5.063l-9.5 13.625-6.563-4.875-3.313 4.594 11.188 8.531 12.813-18.375z"]], template: function MrdCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function MrdCheckboxComponent_Template_div_click_0_listener() { return ctx.toggle(); });
            i0.ɵɵelementStart(1, "span", 1);
            i0.ɵɵtemplate(2, MrdCheckboxComponent_ng_container_2_Template, 8, 0, "ng-container", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "span", 3);
            i0.ɵɵprojection(4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, (ctx.formControl == null ? null : ctx.formControl.disabled) || ctx.disabled));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c1, ctx.checked));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.checked);
        } }, dependencies: [i1.NgClass, i1.NgIf], styles: ["[_nghost-%COMP%]{width:-moz-fit-content;width:fit-content}.mrd-checkbox-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;cursor:pointer}.mrd-checkbox-container[_ngcontent-%COMP%]   .mrd-checkbox-box[_ngcontent-%COMP%]{max-height:16px;max-width:16px;height:16px;width:16px;min-width:16px;min-height:16px;display:inline-block;border:2px solid rgba(0,0,0,.54);border-radius:2px;text-align:center;margin-right:6px}.mrd-checkbox-container[_ngcontent-%COMP%]   .mrd-checkbox-box.checked[_ngcontent-%COMP%]{background-color:#3faa49;border:none}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]{cursor:inherit}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]   .mrd-checkbox-box[_ngcontent-%COMP%]{border-color:#afa6a6}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]   .mrd-checkbox-box.checked[_ngcontent-%COMP%]{background-color:#afa6a6af}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]   .mrd-checkbox-label[_ngcontent-%COMP%]{color:#afa6a6}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdCheckboxComponent, [{
        type: Component,
        args: [{ selector: 'mrd-checkbox', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-checkbox-container\" [ngClass]=\"{'mrd-checkbox-disabled': formControl?.disabled || disabled}\" (click)=\"toggle()\">\r\n  <span class=\"mrd-checkbox-box\" [ngClass]=\"{'checked': checked}\">\r\n    <ng-container *ngIf=\"checked\">\r\n      <svg fill=\"#ffffff\" width=\"16px\" height=\"16px\" viewBox=\"-4 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"#000000\" stroke-width=\"0.00032\">\r\n        <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\r\n        <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g>\r\n        <g id=\"SVGRepo_iconCarrier\"> <title>check</title> <path d=\"M19.375 5.063l-9.5 13.625-6.563-4.875-3.313 4.594 11.188 8.531 12.813-18.375z\"></path></g>\r\n      </svg>\r\n    </ng-container>\r\n  </span>\r\n  <span class=\"mrd-checkbox-label\"><ng-content></ng-content></span>\r\n</div>\r\n", styles: [":host{width:-moz-fit-content;width:fit-content}.mrd-checkbox-container{display:flex;flex-direction:row;align-items:center;cursor:pointer}.mrd-checkbox-container .mrd-checkbox-box{max-height:16px;max-width:16px;height:16px;width:16px;min-width:16px;min-height:16px;display:inline-block;border:2px solid rgba(0,0,0,.54);border-radius:2px;text-align:center;margin-right:6px}.mrd-checkbox-container .mrd-checkbox-box.checked{background-color:#3faa49;border:none}.mrd-checkbox-container.mrd-checkbox-disabled{cursor:inherit}.mrd-checkbox-container.mrd-checkbox-disabled .mrd-checkbox-box{border-color:#afa6a6}.mrd-checkbox-container.mrd-checkbox-disabled .mrd-checkbox-box.checked{background-color:#afa6a6af}.mrd-checkbox-container.mrd-checkbox-disabled .mrd-checkbox-label{color:#afa6a6}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { formControl: [{
            type: Input
        }], checked: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], disabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], checkedChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtY2hlY2tib3gvY29tcG9uZW50cy9tcmQtY2hlY2tib3gvbXJkLWNoZWNrYm94LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtY2hlY2tib3gvY29tcG9uZW50cy9tcmQtY2hlY2tib3gvbXJkLWNoZWNrYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JJLE9BQU8sRUFBeUIsSUFBSSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7O0lDQ25ELDZCQUE4QjtJQUM1QixtQkFBNko7SUFBN0osOEJBQTZKO0lBQzNKLHVCQUErQyxXQUFBO0lBRS9DLDRCQUE0QixZQUFBO0lBQVEscUJBQUs7SUFBQSxpQkFBUTtJQUFDLDBCQUErRjtJQUFBLGlCQUFJLEVBQUE7SUFFekosMEJBQWU7Ozs7O0FEQ25CLE1BQU0sT0FBTyxvQkFBb0I7SUFVckI7SUFSTSxXQUFXLENBQXdCO0lBRU4sT0FBTyxHQUFZLEtBQUssQ0FBQztJQUN6QixRQUFRLEdBQVksS0FBSyxDQUFDO0lBRXRELGFBQWEsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUVwRixZQUNVLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0lBQzVCLENBQUM7SUFFRSxNQUFNO1FBQ1gsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwRixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7aUdBdkJVLG9CQUFvQjs0RkFBcEIsb0JBQW9CLHVHQUlaLGdCQUFnQixzQ0FDaEIsZ0JBQWdCOztZQ2RyQyw4QkFBZ0k7WUFBbkIsOEZBQVMsWUFBUSxJQUFDO1lBQzdILCtCQUFnRTtZQUM5RCx1RkFNZTtZQUNqQixpQkFBTztZQUNQLCtCQUFpQztZQUFBLGtCQUF5QjtZQUFBLGlCQUFPLEVBQUE7O1lBVi9CLGlJQUF3RTtZQUMzRSxlQUFnQztZQUFoQyxpRUFBZ0M7WUFDOUMsZUFBYTtZQUFiLGtDQUFhOzs7dUZET25CLG9CQUFvQjtjQU5oQyxTQUFTOzJCQUNFLGNBQWMsbUJBR1AsdUJBQXVCLENBQUMsTUFBTTtvRUFJL0IsV0FBVztrQkFBMUIsS0FBSztZQUV1QyxPQUFPO2tCQUFuRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBQ1MsUUFBUTtrQkFBcEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUVuQixhQUFhO2tCQUE3QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgYm9vbGVhbkF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wsIFV0aWwgfSBmcm9tICdtcmQtY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1jaGVja2JveCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWNoZWNrYm94LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZENoZWNrYm94Q29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIGZvcm1Db250cm9sOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2w7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgcHVibGljIGNoZWNrZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHsgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpICYmIHRoaXMuZm9ybUNvbnRyb2wuZGlzYWJsZWQpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmNoZWNrZWQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGVja2VkQ2hhbmdlLmVtaXQodGhpcy5jaGVja2VkKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1yZC1jaGVja2JveC1jb250YWluZXJcIiBbbmdDbGFzc109XCJ7J21yZC1jaGVja2JveC1kaXNhYmxlZCc6IGZvcm1Db250cm9sPy5kaXNhYmxlZCB8fCBkaXNhYmxlZH1cIiAoY2xpY2spPVwidG9nZ2xlKClcIj5cclxuICA8c3BhbiBjbGFzcz1cIm1yZC1jaGVja2JveC1ib3hcIiBbbmdDbGFzc109XCJ7J2NoZWNrZWQnOiBjaGVja2VkfVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNoZWNrZWRcIj5cclxuICAgICAgPHN2ZyBmaWxsPVwiI2ZmZmZmZlwiIHdpZHRoPVwiMTZweFwiIGhlaWdodD1cIjE2cHhcIiB2aWV3Qm94PVwiLTQgMCAzMiAzMlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgc3Ryb2tlPVwiIzAwMDAwMFwiIHN0cm9rZS13aWR0aD1cIjAuMDAwMzJcIj5cclxuICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz5cclxuICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvZz5cclxuICAgICAgICA8ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj4gPHRpdGxlPmNoZWNrPC90aXRsZT4gPHBhdGggZD1cIk0xOS4zNzUgNS4wNjNsLTkuNSAxMy42MjUtNi41NjMtNC44NzUtMy4zMTMgNC41OTQgMTEuMTg4IDguNTMxIDEyLjgxMy0xOC4zNzV6XCI+PC9wYXRoPjwvZz5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L3NwYW4+XHJcbiAgPHNwYW4gY2xhc3M9XCJtcmQtY2hlY2tib3gtbGFiZWxcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPlxyXG48L2Rpdj5cclxuIl19