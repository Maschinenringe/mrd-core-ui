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
const _c1 = [[["mrd-icon", 3, "icon-end", ""], ["", "mrd-icon", "", 3, "icon-end", ""]], "*", [["mrd-icon", "icon-end", ""], ["", "mrd-icon", "", "icon-end", ""]]];
const _c2 = function (a0, a1, a2, a3) { return { "selected": a0, "filtered": a1, "focused": a2, "disabled": a3 }; };
const _c3 = ["mrd-icon:not([icon-end]), [mrd-icon]:not([icon-end])", "*", "mrd-icon[icon-end], [mrd-icon][icon-end]"];
export class MrdSelectOptionComponent {
    elementRef;
    select;
    cdr;
    optionValue;
    value;
    noCheckbox = false;
    disabled = false;
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
    /** Als Input nur fuer das virtuelle Scrolling im mrd-select; sonst setzt das Select den Zustand selbst */
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
        } }, inputs: { value: "value", noCheckbox: ["noCheckbox", "noCheckbox", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], selected: "selected", focused: "focused" }, outputs: { optionClicked: "optionClicked" }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c3, decls: 8, vars: 7, consts: [[1, "mrd-select-option-item", 3, "ngClass", "click"], ["class", "mrd-select-option-checkbox-wrapper", 4, "ngIf"], [1, "mrd-select-option-value-text"], ["optionValue", ""], [1, "mrd-select-option-checkbox-wrapper"], [3, "checked"]], template: function MrdSelectOptionComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(2, _c2, ctx.selected, ctx.filtered, ctx.focused, ctx.disabled));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.multiple && !ctx.noCheckbox);
        } }, dependencies: [i2.NgClass, i2.NgIf, i3.MrdCheckboxComponent], styles: ["[_nghost-%COMP%]{display:block;width:100%}.mrd-select-option-virtuell[_nghost-%COMP%]{height:100%}.mrd-select-option-virtuell[_nghost-%COMP%]   .mrd-select-option-item[_ngcontent-%COMP%]{height:100%;box-sizing:border-box}.mrd-select-search-option[_nghost-%COMP%]   .mrd-select-option-item[_ngcontent-%COMP%]:hover{background-color:inherit}.mrd-select-option-item[_ngcontent-%COMP%]{height:3em;border-bottom:1px solid #afafaf;white-space:nowrap;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:0 16px;cursor:pointer}.mrd-select-option-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;align-items:center}.mrd-select-option-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   .mrd-select-option-value-text[_ngcontent-%COMP%]{display:flex;flex:1;align-items:center}.mrd-select-option-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]     .mat-icon{height:20px;width:20px;font-size:20px;margin-right:6px}.mrd-select-option-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]     .mat-icon.icon-end{margin-right:0;margin-left:6px}.mrd-select-option-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   .mrd-select-option-checkbox-wrapper[_ngcontent-%COMP%]{display:flex;pointer-events:none}.mrd-select-option-item.selected[_ngcontent-%COMP%]{background-color:#3fb61a21}.mrd-select-option-item.filtered[_ngcontent-%COMP%]{display:none}.mrd-select-option-item.focused[_ngcontent-%COMP%], .mrd-select-option-item[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}.mrd-select-option-item[_ngcontent-%COMP%]:last-of-type{border-bottom:none}.mrd-select-option-item.disabled[_ngcontent-%COMP%]{pointer-events:none;opacity:.5}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdSelectOptionComponent, [{
        type: Component,
        args: [{ selector: 'mrd-select-option', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-select-option-item\" [ngClass]=\"{'selected': selected, 'filtered': filtered, 'focused': focused, 'disabled': disabled}\" (click)=\"optionClick()\">\n  <span>\n    <div *ngIf=\"multiple && !noCheckbox\" class=\"mrd-select-option-checkbox-wrapper\">\n      <!-- <span class=\"mrd-select-option-checkbox\" [ngClass]=\"{'selected': selected}\">\n        <ng-container *ngIf=\"selected\">\n          <svg fill=\"#ffffff\" width=\"16px\" height=\"16px\" viewBox=\"-4 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"#000000\" stroke-width=\"0.00032\">\n            <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\n            <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g>\n            <g id=\"SVGRepo_iconCarrier\"> <title>check</title> <path d=\"M19.375 5.063l-9.5 13.625-6.563-4.875-3.313 4.594 11.188 8.531 12.813-18.375z\"></path></g>\n          </svg>\n        </ng-container>\n      </span> -->\n      <mrd-checkbox [checked]=\"selected\"></mrd-checkbox>\n    </div>\n    <ng-content select=\"mrd-icon:not([icon-end]), [mrd-icon]:not([icon-end])\"></ng-content>\n    <span #optionValue class=\"mrd-select-option-value-text\"><ng-content></ng-content></span>\n    <ng-content select=\"mrd-icon[icon-end], [mrd-icon][icon-end]\"></ng-content>\n  </span>\n</div>\n", styles: [":host{display:block;width:100%}:host.mrd-select-option-virtuell{height:100%}:host.mrd-select-option-virtuell .mrd-select-option-item{height:100%;box-sizing:border-box}:host.mrd-select-search-option .mrd-select-option-item:hover{background-color:inherit}.mrd-select-option-item{height:3em;border-bottom:1px solid #afafaf;white-space:nowrap;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:0 16px;cursor:pointer}.mrd-select-option-item>span{width:100%;display:flex;flex-direction:row;align-items:center}.mrd-select-option-item>span .mrd-select-option-value-text{display:flex;flex:1;align-items:center}.mrd-select-option-item>span ::ng-deep .mat-icon{height:20px;width:20px;font-size:20px;margin-right:6px}.mrd-select-option-item>span ::ng-deep .mat-icon.icon-end{margin-right:0;margin-left:6px}.mrd-select-option-item>span .mrd-select-option-checkbox-wrapper{display:flex;pointer-events:none}.mrd-select-option-item.selected{background-color:#3fb61a21}.mrd-select-option-item.filtered{display:none}.mrd-select-option-item.focused,.mrd-select-option-item:hover{background-color:#f0f0f0}.mrd-select-option-item:last-of-type{border-bottom:none}.mrd-select-option-item.disabled{pointer-events:none;opacity:.5}\n"] }]
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
        }], disabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], optionClicked: [{
            type: Output
        }], selected: [{
            type: Input
        }], focused: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXNlbGVjdC1vcHRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLXNlbGVjdC1vcHRpb24vbXJkLXNlbGVjdC1vcHRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLXNlbGVjdC1vcHRpb24vbXJkLXNlbGVjdC1vcHRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQix1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLFlBQVksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNFN0ssOEJBQWdGO0lBVTlFLGtDQUFrRDtJQUNwRCxpQkFBTTs7O0lBRFUsZUFBb0I7SUFBcEIseUNBQW9COzs7OztBREh4QyxNQUFNLE9BQU8sd0JBQXdCO0lBcUJ6QjtJQUNRO0lBQ1I7SUFyQnVCLFdBQVcsQ0FBc0M7SUFFbEUsS0FBSyxDQUFNO0lBRWtCLFVBQVUsR0FBWSxLQUFLLENBQUM7SUFFNUIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUV0RCxhQUFhLEdBQXdDLElBQUksWUFBWSxFQUF5QixDQUFDO0lBRXpHLFdBQVcsQ0FBUztJQUVwQixTQUFTLEdBQVksS0FBSyxDQUFDO0lBQzNCLFNBQVMsR0FBWSxLQUFLLENBQUM7SUFDM0IsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUUxQixRQUFRLEdBQVksS0FBSyxDQUFDO0lBRWpDLFlBQ1UsVUFBc0IsRUFDZCxNQUEwQixFQUNsQyxHQUFzQjtRQUZ0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aWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdCwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkLCBib29sZWFuQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1yZFNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4uL21yZC1zZWxlY3QvbXJkLXNlbGVjdC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtcmQtc2VsZWN0LW9wdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1zZWxlY3Qtb3B0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtc2VsZWN0LW9wdGlvbi5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmRTZWxlY3RPcHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZCgnb3B0aW9uVmFsdWUnKSBwdWJsaWMgb3B0aW9uVmFsdWU6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgdmFsdWU6IGFueTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgbm9DaGVja2JveDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb3B0aW9uQ2xpY2tlZDogRXZlbnRFbWl0dGVyPE1yZFNlbGVjdE9wdGlvbkNoYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1yZFNlbGVjdE9wdGlvbkNoYW5nZT4oKTtcclxuXHJcbiAgcHVibGljIG9wdGlvbkxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBfc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgX2ZpbHRlcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIF9mb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBtdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIEBIb3N0KCkgcHJpdmF0ZSBzZWxlY3Q6IE1yZFNlbGVjdENvbXBvbmVudCxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5tdWx0aXBsZSA9IHRoaXMuc2VsZWN0Lm11bHRpcGxlO1xyXG4gICAgaWYgKHRoaXMub3B0aW9uVmFsdWUpIHtcclxuICAgICAgdGhpcy5vcHRpb25MYWJlbCA9IHRoaXMub3B0aW9uVmFsdWUubmF0aXZlRWxlbWVudC5pbm5lclRleHQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3B0aW9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wdGlvbkNsaWNrZWQuZW1pdCh7a2V5OiB0aGlzLnZhbHVlLCB2YWx1ZTogdGhpcy5vcHRpb25WYWx1ZT8ubmF0aXZlRWxlbWVudC5pbm5lclRleHQgfHwgJycsIG9wdGlvbjogdGhpcywgY2hlY2tlZDogIXRoaXMuc2VsZWN0ZWR9KTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEFscyBJbnB1dCBudXIgZnVlciBkYXMgdmlydHVlbGxlIFNjcm9sbGluZyBpbSBtcmQtc2VsZWN0OyBzb25zdCBzZXR6dCBkYXMgU2VsZWN0IGRlbiBadXN0YW5kIHNlbGJzdCAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgc2VsZWN0ZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGZpbHRlcmVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9maWx0ZXJlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGZpbHRlcmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcmVkO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgcHVibGljIHNldCBmb2N1c2VkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9mb2N1c2VkID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZm9jdXNlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9mb2N1c2VkO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXJkU2VsZWN0T3B0aW9uQ2hhbmdlIHtcclxuICBrZXk6IGFueTtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIG9wdGlvbjogTXJkU2VsZWN0T3B0aW9uQ29tcG9uZW50O1xyXG4gIGNoZWNrZWQ/OiBib29sZWFuO1xyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJtcmQtc2VsZWN0LW9wdGlvbi1pdGVtXCIgW25nQ2xhc3NdPVwieydzZWxlY3RlZCc6IHNlbGVjdGVkLCAnZmlsdGVyZWQnOiBmaWx0ZXJlZCwgJ2ZvY3VzZWQnOiBmb2N1c2VkLCAnZGlzYWJsZWQnOiBkaXNhYmxlZH1cIiAoY2xpY2spPVwib3B0aW9uQ2xpY2soKVwiPlxuICA8c3Bhbj5cbiAgICA8ZGl2ICpuZ0lmPVwibXVsdGlwbGUgJiYgIW5vQ2hlY2tib3hcIiBjbGFzcz1cIm1yZC1zZWxlY3Qtb3B0aW9uLWNoZWNrYm94LXdyYXBwZXJcIj5cbiAgICAgIDwhLS0gPHNwYW4gY2xhc3M9XCJtcmQtc2VsZWN0LW9wdGlvbi1jaGVja2JveFwiIFtuZ0NsYXNzXT1cInsnc2VsZWN0ZWQnOiBzZWxlY3RlZH1cIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNlbGVjdGVkXCI+XG4gICAgICAgICAgPHN2ZyBmaWxsPVwiI2ZmZmZmZlwiIHdpZHRoPVwiMTZweFwiIGhlaWdodD1cIjE2cHhcIiB2aWV3Qm94PVwiLTQgMCAzMiAzMlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgc3Ryb2tlPVwiIzAwMDAwMFwiIHN0cm9rZS13aWR0aD1cIjAuMDAwMzJcIj5cbiAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCI+PC9nPlxuICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L2c+XG4gICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj4gPHRpdGxlPmNoZWNrPC90aXRsZT4gPHBhdGggZD1cIk0xOS4zNzUgNS4wNjNsLTkuNSAxMy42MjUtNi41NjMtNC44NzUtMy4zMTMgNC41OTQgMTEuMTg4IDguNTMxIDEyLjgxMy0xOC4zNzV6XCI+PC9wYXRoPjwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L3NwYW4+IC0tPlxuICAgICAgPG1yZC1jaGVja2JveCBbY2hlY2tlZF09XCJzZWxlY3RlZFwiPjwvbXJkLWNoZWNrYm94PlxuICAgIDwvZGl2PlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm1yZC1pY29uOm5vdChbaWNvbi1lbmRdKSwgW21yZC1pY29uXTpub3QoW2ljb24tZW5kXSlcIj48L25nLWNvbnRlbnQ+XG4gICAgPHNwYW4gI29wdGlvblZhbHVlIGNsYXNzPVwibXJkLXNlbGVjdC1vcHRpb24tdmFsdWUtdGV4dFwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3NwYW4+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXJkLWljb25baWNvbi1lbmRdLCBbbXJkLWljb25dW2ljb24tZW5kXVwiPjwvbmctY29udGVudD5cbiAgPC9zcGFuPlxuPC9kaXY+XG4iXX0=