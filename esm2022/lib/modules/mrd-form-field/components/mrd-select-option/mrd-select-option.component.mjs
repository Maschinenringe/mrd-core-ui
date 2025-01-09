import { ChangeDetectionStrategy, Component, EventEmitter, Host, Input, Output, ViewChild, booleanAttribute } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../mrd-select/mrd-select.component";
import * as i2 from "@angular/common";
import * as i3 from "../../../mrd-checkbox/components/mrd-checkbox/mrd-checkbox.component";
const _c0 = ["optionValue"];
function MrdSelectOptionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelement(1, "mrd-checkbox", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r0.selected);
} }
const _c1 = [[["mat-icon", 9, "icon-end"]], "*", [["mat-icon", 8, "icon-end"]]];
const _c2 = function (a0, a1, a2) { return { "selected": a0, "filtered": a1, "focused": a2 }; };
const _c3 = ["mat-icon:not(.icon-end)", "*", "mat-icon.icon-end"];
export class MrdSelectOptionComponent {
    elementRef;
    select;
    cdr;
    optionValue;
    value;
    noCheckbox = false;
    optionClicked = new EventEmitter();
    optionLabel;
    _selected = false;
    _filtered = false;
    _focused = false;
    multiple = false;
    constructor(elementRef, select, cdr) {
        this.elementRef = elementRef;
        this.select = select;
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        this.multiple = this.select.multiple;
        if (this.optionValue) {
            this.optionLabel = this.optionValue.nativeElement.innerText;
        }
        this.cdr.detectChanges();
    }
    optionClick() {
        this.optionClicked.emit({ key: this.value, value: this.optionValue?.nativeElement.innerText || '', option: this, checked: !this.selected });
        this.cdr.markForCheck();
    }
    set selected(value) {
        this._selected = value;
        this.cdr.detectChanges();
        this.cdr.markForCheck();
    }
    get selected() {
        return this._selected;
    }
    set filtered(value) {
        this._filtered = value;
        this.cdr.detectChanges();
        this.cdr.markForCheck();
    }
    get filtered() {
        return this._filtered;
    }
    set focused(value) {
        this._focused = value;
        this.cdr.detectChanges();
        this.cdr.markForCheck();
    }
    get focused() {
        return this._focused;
    }
    /** @nocollapse */ static ɵfac = function MrdSelectOptionComponent_Factory(t) { return new (t || MrdSelectOptionComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.MrdSelectComponent, 1), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdSelectOptionComponent, selectors: [["mrd-select-option"]], viewQuery: function MrdSelectOptionComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.optionValue = _t.first);
        } }, inputs: { value: "value", noCheckbox: ["noCheckbox", "noCheckbox", booleanAttribute] }, outputs: { optionClicked: "optionClicked" }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c3, decls: 8, vars: 6, consts: [[1, "mrd-select-option-item", 3, "ngClass", "click"], ["class", "mrd-select-option-checkbox-wrapper", 4, "ngIf"], [1, "mrd-select-option-value-text"], ["optionValue", ""], [1, "mrd-select-option-checkbox-wrapper"], [3, "checked"]], template: function MrdSelectOptionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function MrdSelectOptionComponent_Template_div_click_0_listener() { return ctx.optionClick(); });
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtemplate(2, MrdSelectOptionComponent_div_2_Template, 2, 1, "div", 1);
            i0.ɵɵprojection(3);
            i0.ɵɵelementStart(4, "span", 2, 3);
            i0.ɵɵprojection(6, 1);
            i0.ɵɵelementEnd();
            i0.ɵɵprojection(7, 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c2, ctx.selected, ctx.filtered, ctx.focused));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.multiple && !ctx.noCheckbox);
        } }, dependencies: [i2.NgClass, i2.NgIf, i3.MrdCheckboxComponent], styles: ["[_nghost-%COMP%]{display:block;width:100%}.mrd-select-search-option[_nghost-%COMP%]   .mrd-select-option-item[_ngcontent-%COMP%]:hover{background-color:inherit}.mrd-select-option-item[_ngcontent-%COMP%]{height:3em;border-bottom:1px solid #afafaf;white-space:nowrap;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:0 16px;cursor:pointer}.mrd-select-option-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;align-items:center}.mrd-select-option-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   .mrd-select-option-value-text[_ngcontent-%COMP%]{display:flex;flex:1}.mrd-select-option-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]     .mat-icon{height:20px;width:20px;font-size:20px;margin-right:6px}.mrd-select-option-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]     .mat-icon.icon-end{margin-right:0;margin-left:6px}.mrd-select-option-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   .mrd-select-option-checkbox-wrapper[_ngcontent-%COMP%]{display:flex;pointer-events:none}.mrd-select-option-item.selected[_ngcontent-%COMP%]{background-color:#3fb61a21}.mrd-select-option-item.filtered[_ngcontent-%COMP%]{display:none}.mrd-select-option-item.focused[_ngcontent-%COMP%], .mrd-select-option-item[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}.mrd-select-option-item[_ngcontent-%COMP%]:last-of-type{border-bottom:none}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdSelectOptionComponent, [{
        type: Component,
        args: [{ selector: 'mrd-select-option', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-select-option-item\" [ngClass]=\"{'selected': selected, 'filtered': filtered, 'focused': focused}\" (click)=\"optionClick()\">\r\n  <span>\r\n    <div *ngIf=\"multiple && !noCheckbox\" class=\"mrd-select-option-checkbox-wrapper\">\r\n      <!-- <span class=\"mrd-select-option-checkbox\" [ngClass]=\"{'selected': selected}\">\r\n        <ng-container *ngIf=\"selected\">\r\n          <svg fill=\"#ffffff\" width=\"16px\" height=\"16px\" viewBox=\"-4 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"#000000\" stroke-width=\"0.00032\">\r\n            <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\r\n            <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g>\r\n            <g id=\"SVGRepo_iconCarrier\"> <title>check</title> <path d=\"M19.375 5.063l-9.5 13.625-6.563-4.875-3.313 4.594 11.188 8.531 12.813-18.375z\"></path></g>\r\n          </svg>\r\n        </ng-container>\r\n      </span> -->\r\n      <mrd-checkbox [checked]=\"selected\"></mrd-checkbox>\r\n    </div>\r\n    <ng-content select=\"mat-icon:not(.icon-end)\"></ng-content>\r\n    <span #optionValue class=\"mrd-select-option-value-text\"><ng-content></ng-content></span>\r\n    <ng-content select=\"mat-icon.icon-end\"></ng-content>\r\n  </span>\r\n</div>\r\n", styles: [":host{display:block;width:100%}:host.mrd-select-search-option .mrd-select-option-item:hover{background-color:inherit}.mrd-select-option-item{height:3em;border-bottom:1px solid #afafaf;white-space:nowrap;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:0 16px;cursor:pointer}.mrd-select-option-item>span{width:100%;display:flex;flex-direction:row;align-items:center}.mrd-select-option-item>span .mrd-select-option-value-text{display:flex;flex:1}.mrd-select-option-item>span ::ng-deep .mat-icon{height:20px;width:20px;font-size:20px;margin-right:6px}.mrd-select-option-item>span ::ng-deep .mat-icon.icon-end{margin-right:0;margin-left:6px}.mrd-select-option-item>span .mrd-select-option-checkbox-wrapper{display:flex;pointer-events:none}.mrd-select-option-item.selected{background-color:#3fb61a21}.mrd-select-option-item.filtered{display:none}.mrd-select-option-item.focused,.mrd-select-option-item:hover{background-color:#f0f0f0}.mrd-select-option-item:last-of-type{border-bottom:none}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.MrdSelectComponent, decorators: [{
                type: Host
            }] }, { type: i0.ChangeDetectorRef }]; }, { optionValue: [{
            type: ViewChild,
            args: ['optionValue']
        }], value: [{
            type: Input
        }], noCheckbox: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], optionClicked: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXNlbGVjdC1vcHRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLXNlbGVjdC1vcHRpb24vbXJkLXNlbGVjdC1vcHRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLXNlbGVjdC1vcHRpb24vbXJkLXNlbGVjdC1vcHRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQix1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLFlBQVksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNFN0ssOEJBQWdGO0lBVTlFLGtDQUFrRDtJQUNwRCxpQkFBTTs7O0lBRFUsZUFBb0I7SUFBcEIseUNBQW9COzs7OztBREh4QyxNQUFNLE9BQU8sd0JBQXdCO0lBbUJ6QjtJQUNRO0lBQ1I7SUFuQnVCLFdBQVcsQ0FBc0M7SUFFbEUsS0FBSyxDQUFNO0lBRWtCLFVBQVUsR0FBWSxLQUFLLENBQUM7SUFFeEQsYUFBYSxHQUF3QyxJQUFJLFlBQVksRUFBeUIsQ0FBQztJQUV6RyxXQUFXLENBQVM7SUFFcEIsU0FBUyxHQUFZLEtBQUssQ0FBQztJQUMzQixTQUFTLEdBQVksS0FBSyxDQUFDO0lBQzNCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFFMUIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUVqQyxZQUNVLFVBQXNCLEVBQ2QsTUFBMEIsRUFDbEMsR0FBc0I7UUFGdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQW9CO1FBQ2xDLFFBQUcsR0FBSCxHQUFHLENBQW1CO0lBQzdCLENBQUM7SUFFSixlQUFlO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNyQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7U0FDN0Q7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLFNBQVMsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztRQUMxSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFXLFFBQVEsQ0FBQyxLQUFjO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBVyxRQUFRLENBQUMsS0FBYztRQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQVcsT0FBTyxDQUFDLEtBQWM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7cUdBakVVLHdCQUF3Qjs0RkFBeEIsd0JBQXdCOzs7OztnRkFNaEIsZ0JBQWdCOztZQ2ZyQyw4QkFBeUk7WUFBeEIsa0dBQVMsaUJBQWEsSUFBQztZQUN0SSw0QkFBTTtZQUNKLHlFQVdNO1lBQ04sa0JBQTBEO1lBQzFELGtDQUF3RDtZQUFBLHFCQUF5QjtZQUFBLGlCQUFPO1lBQ3hGLHFCQUFvRDtZQUN0RCxpQkFBTyxFQUFBOztZQWpCMkIsNkZBQTRFO1lBRXRHLGVBQTZCO1lBQTdCLHNEQUE2Qjs7O3VGRE8xQix3QkFBd0I7Y0FOcEMsU0FBUzsyQkFDRSxtQkFBbUIsbUJBR1osdUJBQXVCLENBQUMsTUFBTTs7c0JBc0I1QyxJQUFJO3dEQWxCMEIsV0FBVztrQkFBM0MsU0FBUzttQkFBQyxhQUFhO1lBRVIsS0FBSztrQkFBcEIsS0FBSztZQUV1QyxVQUFVO2tCQUF0RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBRW5CLGFBQWE7a0JBQTdCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0LCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIGJvb2xlYW5BdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTXJkU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vbXJkLXNlbGVjdC9tcmQtc2VsZWN0LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1zZWxlY3Qtb3B0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLXNlbGVjdC1vcHRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC1zZWxlY3Qtb3B0aW9uLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCdvcHRpb25WYWx1ZScpIHB1YmxpYyBvcHRpb25WYWx1ZTogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZTogYW55O1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBub0NoZWNrYm94OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb3B0aW9uQ2xpY2tlZDogRXZlbnRFbWl0dGVyPE1yZFNlbGVjdE9wdGlvbkNoYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1yZFNlbGVjdE9wdGlvbkNoYW5nZT4oKTtcclxuXHJcbiAgcHVibGljIG9wdGlvbkxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBfc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgX2ZpbHRlcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIF9mb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBtdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIEBIb3N0KCkgcHJpdmF0ZSBzZWxlY3Q6IE1yZFNlbGVjdENvbXBvbmVudCxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5tdWx0aXBsZSA9IHRoaXMuc2VsZWN0Lm11bHRpcGxlO1xyXG4gICAgaWYgKHRoaXMub3B0aW9uVmFsdWUpIHtcclxuICAgICAgdGhpcy5vcHRpb25MYWJlbCA9IHRoaXMub3B0aW9uVmFsdWUubmF0aXZlRWxlbWVudC5pbm5lclRleHQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3B0aW9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wdGlvbkNsaWNrZWQuZW1pdCh7a2V5OiB0aGlzLnZhbHVlLCB2YWx1ZTogdGhpcy5vcHRpb25WYWx1ZT8ubmF0aXZlRWxlbWVudC5pbm5lclRleHQgfHwgJycsIG9wdGlvbjogdGhpcywgY2hlY2tlZDogIXRoaXMuc2VsZWN0ZWR9KTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBzZWxlY3RlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzZWxlY3RlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgZmlsdGVyZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2ZpbHRlcmVkID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZmlsdGVyZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGZvY3VzZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2ZvY3VzZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBmb2N1c2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNcmRTZWxlY3RPcHRpb25DaGFuZ2Uge1xyXG4gIGtleTogYW55O1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgb3B0aW9uOiBNcmRTZWxlY3RPcHRpb25Db21wb25lbnQ7XHJcbiAgY2hlY2tlZD86IGJvb2xlYW47XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1yZC1zZWxlY3Qtb3B0aW9uLWl0ZW1cIiBbbmdDbGFzc109XCJ7J3NlbGVjdGVkJzogc2VsZWN0ZWQsICdmaWx0ZXJlZCc6IGZpbHRlcmVkLCAnZm9jdXNlZCc6IGZvY3VzZWR9XCIgKGNsaWNrKT1cIm9wdGlvbkNsaWNrKClcIj5cclxuICA8c3Bhbj5cclxuICAgIDxkaXYgKm5nSWY9XCJtdWx0aXBsZSAmJiAhbm9DaGVja2JveFwiIGNsYXNzPVwibXJkLXNlbGVjdC1vcHRpb24tY2hlY2tib3gtd3JhcHBlclwiPlxyXG4gICAgICA8IS0tIDxzcGFuIGNsYXNzPVwibXJkLXNlbGVjdC1vcHRpb24tY2hlY2tib3hcIiBbbmdDbGFzc109XCJ7J3NlbGVjdGVkJzogc2VsZWN0ZWR9XCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNlbGVjdGVkXCI+XHJcbiAgICAgICAgICA8c3ZnIGZpbGw9XCIjZmZmZmZmXCIgd2lkdGg9XCIxNnB4XCIgaGVpZ2h0PVwiMTZweFwiIHZpZXdCb3g9XCItNCAwIDMyIDMyXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMC4wMDAzMlwiPlxyXG4gICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz5cclxuICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L2c+XHJcbiAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPiA8dGl0bGU+Y2hlY2s8L3RpdGxlPiA8cGF0aCBkPVwiTTE5LjM3NSA1LjA2M2wtOS41IDEzLjYyNS02LjU2My00Ljg3NS0zLjMxMyA0LjU5NCAxMS4xODggOC41MzEgMTIuODEzLTE4LjM3NXpcIj48L3BhdGg+PC9nPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvc3Bhbj4gLS0+XHJcbiAgICAgIDxtcmQtY2hlY2tib3ggW2NoZWNrZWRdPVwic2VsZWN0ZWRcIj48L21yZC1jaGVja2JveD5cclxuICAgIDwvZGl2PlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibWF0LWljb246bm90KC5pY29uLWVuZClcIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8c3BhbiAjb3B0aW9uVmFsdWUgY2xhc3M9XCJtcmQtc2VsZWN0LW9wdGlvbi12YWx1ZS10ZXh0XCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm1hdC1pY29uLmljb24tZW5kXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvc3Bhbj5cclxuPC9kaXY+XHJcbiJdfQ==