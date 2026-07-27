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
        } }, inputs: { value: "value", noCheckbox: ["noCheckbox", "noCheckbox", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute] }, outputs: { optionClicked: "optionClicked" }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c3, decls: 8, vars: 7, consts: [[1, "mrd-select-option-item", 3, "ngClass", "click"], ["class", "mrd-select-option-checkbox-wrapper", 4, "ngIf"], [1, "mrd-select-option-value-text"], ["optionValue", ""], [1, "mrd-select-option-checkbox-wrapper"], [3, "checked"]], template: function MrdSelectOptionComponent_Template(rf, ctx) { if (rf & 1) {
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
        } }, dependencies: [i2.NgClass, i2.NgIf, i3.MrdCheckboxComponent], styles: ["[_nghost-%COMP%]{display:block;width:100%}.mrd-select-search-option[_nghost-%COMP%]   .mrd-select-option-item[_ngcontent-%COMP%]:hover{background-color:inherit}.mrd-select-option-item[_ngcontent-%COMP%]{height:3em;border-bottom:1px solid #afafaf;white-space:nowrap;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:0 16px;cursor:pointer}.mrd-select-option-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;align-items:center}.mrd-select-option-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   .mrd-select-option-value-text[_ngcontent-%COMP%]{display:flex;flex:1;align-items:center}.mrd-select-option-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]     .mat-icon{height:20px;width:20px;font-size:20px;margin-right:6px}.mrd-select-option-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]     .mat-icon.icon-end{margin-right:0;margin-left:6px}.mrd-select-option-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   .mrd-select-option-checkbox-wrapper[_ngcontent-%COMP%]{display:flex;pointer-events:none}.mrd-select-option-item.selected[_ngcontent-%COMP%]{background-color:#3fb61a21}.mrd-select-option-item.filtered[_ngcontent-%COMP%]{display:none}.mrd-select-option-item.focused[_ngcontent-%COMP%], .mrd-select-option-item[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}.mrd-select-option-item[_ngcontent-%COMP%]:last-of-type{border-bottom:none}.mrd-select-option-item.disabled[_ngcontent-%COMP%]{pointer-events:none;opacity:.5}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdSelectOptionComponent, [{
        type: Component,
        args: [{ selector: 'mrd-select-option', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-select-option-item\" [ngClass]=\"{'selected': selected, 'filtered': filtered, 'focused': focused, 'disabled': disabled}\" (click)=\"optionClick()\">\n  <span>\n    <div *ngIf=\"multiple && !noCheckbox\" class=\"mrd-select-option-checkbox-wrapper\">\n      <!-- <span class=\"mrd-select-option-checkbox\" [ngClass]=\"{'selected': selected}\">\n        <ng-container *ngIf=\"selected\">\n          <svg fill=\"#ffffff\" width=\"16px\" height=\"16px\" viewBox=\"-4 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"#000000\" stroke-width=\"0.00032\">\n            <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\n            <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g>\n            <g id=\"SVGRepo_iconCarrier\"> <title>check</title> <path d=\"M19.375 5.063l-9.5 13.625-6.563-4.875-3.313 4.594 11.188 8.531 12.813-18.375z\"></path></g>\n          </svg>\n        </ng-container>\n      </span> -->\n      <mrd-checkbox [checked]=\"selected\"></mrd-checkbox>\n    </div>\n    <ng-content select=\"mrd-icon:not([icon-end]), [mrd-icon]:not([icon-end])\"></ng-content>\n    <span #optionValue class=\"mrd-select-option-value-text\"><ng-content></ng-content></span>\n    <ng-content select=\"mrd-icon[icon-end], [mrd-icon][icon-end]\"></ng-content>\n  </span>\n</div>\n", styles: [":host{display:block;width:100%}:host.mrd-select-search-option .mrd-select-option-item:hover{background-color:inherit}.mrd-select-option-item{height:3em;border-bottom:1px solid #afafaf;white-space:nowrap;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:0 16px;cursor:pointer}.mrd-select-option-item>span{width:100%;display:flex;flex-direction:row;align-items:center}.mrd-select-option-item>span .mrd-select-option-value-text{display:flex;flex:1;align-items:center}.mrd-select-option-item>span ::ng-deep .mat-icon{height:20px;width:20px;font-size:20px;margin-right:6px}.mrd-select-option-item>span ::ng-deep .mat-icon.icon-end{margin-right:0;margin-left:6px}.mrd-select-option-item>span .mrd-select-option-checkbox-wrapper{display:flex;pointer-events:none}.mrd-select-option-item.selected{background-color:#3fb61a21}.mrd-select-option-item.filtered{display:none}.mrd-select-option-item.focused,.mrd-select-option-item:hover{background-color:#f0f0f0}.mrd-select-option-item:last-of-type{border-bottom:none}.mrd-select-option-item.disabled{pointer-events:none;opacity:.5}\n"] }]
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXNlbGVjdC1vcHRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLXNlbGVjdC1vcHRpb24vbXJkLXNlbGVjdC1vcHRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLXNlbGVjdC1vcHRpb24vbXJkLXNlbGVjdC1vcHRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQix1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLFlBQVksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNFN0ssOEJBQWdGO0lBVTlFLGtDQUFrRDtJQUNwRCxpQkFBTTs7O0lBRFUsZUFBb0I7SUFBcEIseUNBQW9COzs7OztBREh4QyxNQUFNLE9BQU8sd0JBQXdCO0lBcUJ6QjtJQUNRO0lBQ1I7SUFyQnVCLFdBQVcsQ0FBc0M7SUFFbEUsS0FBSyxDQUFNO0lBRWtCLFVBQVUsR0FBWSxLQUFLLENBQUM7SUFFNUIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUV0RCxhQUFhLEdBQXdDLElBQUksWUFBWSxFQUF5QixDQUFDO0lBRXpHLFdBQVcsQ0FBUztJQUVwQixTQUFTLEdBQVksS0FBSyxDQUFDO0lBQzNCLFNBQVMsR0FBWSxLQUFLLENBQUM7SUFDM0IsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUUxQixRQUFRLEdBQVksS0FBSyxDQUFDO0lBRWpDLFlBQ1UsVUFBc0IsRUFDZCxNQUEwQixFQUNsQyxHQUFzQjtRQUZ0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFDbEMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7SUFDN0IsQ0FBQztJQUVKLGVBQWU7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3JDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztTQUM3RDtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsU0FBUyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO1FBQzFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQVcsUUFBUSxDQUFDLEtBQWM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFXLFFBQVEsQ0FBQyxLQUFjO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBVyxPQUFPLENBQUMsS0FBYztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztxR0FuRVUsd0JBQXdCOzRGQUF4Qix3QkFBd0I7Ozs7O2dGQU1oQixnQkFBZ0Isc0NBRWhCLGdCQUFnQjs7WUNqQnJDLDhCQUErSjtZQUF4QixrR0FBUyxpQkFBYSxJQUFDO1lBQzVKLDRCQUFNO1lBQ0oseUVBV007WUFDTixrQkFBdUY7WUFDdkYsa0NBQXdEO1lBQUEscUJBQXlCO1lBQUEsaUJBQU87WUFDeEYscUJBQTJFO1lBQzdFLGlCQUFPLEVBQUE7O1lBakIyQiwyR0FBa0c7WUFFNUgsZUFBNkI7WUFBN0Isc0RBQTZCOzs7dUZETzFCLHdCQUF3QjtjQU5wQyxTQUFTOzJCQUNFLG1CQUFtQixtQkFHWix1QkFBdUIsQ0FBQyxNQUFNOztzQkF3QjVDLElBQUk7d0RBcEIwQixXQUFXO2tCQUEzQyxTQUFTO21CQUFDLGFBQWE7WUFFUixLQUFLO2tCQUFwQixLQUFLO1lBRXVDLFVBQVU7a0JBQXRELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFUyxRQUFRO2tCQUFwRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBRW5CLGFBQWE7a0JBQTdCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0LCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIGJvb2xlYW5BdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTXJkU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vbXJkLXNlbGVjdC9tcmQtc2VsZWN0LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1zZWxlY3Qtb3B0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLXNlbGVjdC1vcHRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC1zZWxlY3Qtb3B0aW9uLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCdvcHRpb25WYWx1ZScpIHB1YmxpYyBvcHRpb25WYWx1ZTogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZTogYW55O1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBub0NoZWNrYm94OiBib29sZWFuID0gZmFsc2U7XHJcbiAgXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvcHRpb25DbGlja2VkOiBFdmVudEVtaXR0ZXI8TXJkU2VsZWN0T3B0aW9uQ2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXI8TXJkU2VsZWN0T3B0aW9uQ2hhbmdlPigpO1xyXG5cclxuICBwdWJsaWMgb3B0aW9uTGFiZWw6IHN0cmluZztcclxuXHJcbiAgcHVibGljIF9zZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBfZmlsdGVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgX2ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIG11bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQEhvc3QoKSBwcml2YXRlIHNlbGVjdDogTXJkU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm11bHRpcGxlID0gdGhpcy5zZWxlY3QubXVsdGlwbGU7XHJcbiAgICBpZiAodGhpcy5vcHRpb25WYWx1ZSkge1xyXG4gICAgICB0aGlzLm9wdGlvbkxhYmVsID0gdGhpcy5vcHRpb25WYWx1ZS5uYXRpdmVFbGVtZW50LmlubmVyVGV4dDtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcHRpb25DbGljaygpOiB2b2lkIHtcclxuICAgIHRoaXMub3B0aW9uQ2xpY2tlZC5lbWl0KHtrZXk6IHRoaXMudmFsdWUsIHZhbHVlOiB0aGlzLm9wdGlvblZhbHVlPy5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCB8fCAnJywgb3B0aW9uOiB0aGlzLCBjaGVja2VkOiAhdGhpcy5zZWxlY3RlZH0pO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHNlbGVjdGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHNlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBmaWx0ZXJlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZmlsdGVyZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBmaWx0ZXJlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9maWx0ZXJlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgZm9jdXNlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZm9jdXNlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGZvY3VzZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9jdXNlZDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1yZFNlbGVjdE9wdGlvbkNoYW5nZSB7XHJcbiAga2V5OiBhbnk7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICBvcHRpb246IE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudDtcclxuICBjaGVja2VkPzogYm9vbGVhbjtcclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibXJkLXNlbGVjdC1vcHRpb24taXRlbVwiIFtuZ0NsYXNzXT1cInsnc2VsZWN0ZWQnOiBzZWxlY3RlZCwgJ2ZpbHRlcmVkJzogZmlsdGVyZWQsICdmb2N1c2VkJzogZm9jdXNlZCwgJ2Rpc2FibGVkJzogZGlzYWJsZWR9XCIgKGNsaWNrKT1cIm9wdGlvbkNsaWNrKClcIj5cbiAgPHNwYW4+XG4gICAgPGRpdiAqbmdJZj1cIm11bHRpcGxlICYmICFub0NoZWNrYm94XCIgY2xhc3M9XCJtcmQtc2VsZWN0LW9wdGlvbi1jaGVja2JveC13cmFwcGVyXCI+XG4gICAgICA8IS0tIDxzcGFuIGNsYXNzPVwibXJkLXNlbGVjdC1vcHRpb24tY2hlY2tib3hcIiBbbmdDbGFzc109XCJ7J3NlbGVjdGVkJzogc2VsZWN0ZWR9XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzZWxlY3RlZFwiPlxuICAgICAgICAgIDxzdmcgZmlsbD1cIiNmZmZmZmZcIiB3aWR0aD1cIjE2cHhcIiBoZWlnaHQ9XCIxNnB4XCIgdmlld0JveD1cIi00IDAgMzIgMzJcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHN0cm9rZT1cIiMwMDAwMDBcIiBzdHJva2Utd2lkdGg9XCIwLjAwMDMyXCI+XG4gICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz5cbiAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9nPlxuICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+IDx0aXRsZT5jaGVjazwvdGl0bGU+IDxwYXRoIGQ9XCJNMTkuMzc1IDUuMDYzbC05LjUgMTMuNjI1LTYuNTYzLTQuODc1LTMuMzEzIDQuNTk0IDExLjE4OCA4LjUzMSAxMi44MTMtMTguMzc1elwiPjwvcGF0aD48L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9zcGFuPiAtLT5cbiAgICAgIDxtcmQtY2hlY2tib3ggW2NoZWNrZWRdPVwic2VsZWN0ZWRcIj48L21yZC1jaGVja2JveD5cbiAgICA8L2Rpdj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtcmQtaWNvbjpub3QoW2ljb24tZW5kXSksIFttcmQtaWNvbl06bm90KFtpY29uLWVuZF0pXCI+PC9uZy1jb250ZW50PlxuICAgIDxzcGFuICNvcHRpb25WYWx1ZSBjbGFzcz1cIm1yZC1zZWxlY3Qtb3B0aW9uLXZhbHVlLXRleHRcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm1yZC1pY29uW2ljb24tZW5kXSwgW21yZC1pY29uXVtpY29uLWVuZF1cIj48L25nLWNvbnRlbnQ+XG4gIDwvc3Bhbj5cbjwvZGl2PlxuIl19