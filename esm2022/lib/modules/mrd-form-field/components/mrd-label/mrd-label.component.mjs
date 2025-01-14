import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BasePushStrategyObject, ObservableValue, SubscriptionHandler } from 'mrd-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MrdLabelComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "\u00A0*");
    i0.ɵɵelementContainerEnd();
} }
const _c0 = function (a0, a1) { return { "mrd-label-floating": a0, "mrd-label-hidden": a1 }; };
const _c1 = ["*"];
export class MrdLabelComponent extends BasePushStrategyObject {
    cdr;
    float = 'auto';
    floating = new ObservableValue(false);
    required = new ObservableValue(false);
    constructor(cdr) {
        super();
        this.cdr = cdr;
        this.watch(this.floating.changed, new SubscriptionHandler(() => this.cdr.detectChanges()));
        this.watch(this.required.changed, new SubscriptionHandler(() => this.cdr.detectChanges()));
    }
    /** @nocollapse */ static ɵfac = function MrdLabelComponent_Factory(t) { return new (t || MrdLabelComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdLabelComponent, selectors: [["mrd-label"]], inputs: { float: "float" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 3, vars: 5, consts: [[1, "mrd-label-content", 3, "ngClass"], [4, "ngIf"]], template: function MrdLabelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵtemplate(2, MrdLabelComponent_ng_container_2_Template, 2, 0, "ng-container", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c0, ctx.float === "always" || ctx.floating.value, ctx.float === "never" && ctx.floating.value));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.required.value);
        } }, dependencies: [i1.NgClass, i1.NgIf], styles: [".mrd-label-content[_ngcontent-%COMP%]{position:absolute;top:0;left:2px;transition:top .3s,font-size .3s;color:#afa6a6;pointer-events:none;width:100%;overflow:hidden;text-overflow:ellipsis;height:100%;display:flex;flex-direction:column;justify-content:center}.mrd-label-content.mrd-label-floating[_ngcontent-%COMP%]{top:-1.25em;font-size:.75em;justify-content:flex-start}.mrd-label-content.mrd-label-hidden[_ngcontent-%COMP%]{display:none}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdLabelComponent, [{
        type: Component,
        args: [{ selector: 'mrd-label', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-label-content\" [ngClass]=\"{'mrd-label-floating': float === 'always' || floating.value, 'mrd-label-hidden': float === 'never' && floating.value}\">\r\n  <ng-content></ng-content><ng-container *ngIf=\"required.value\">&nbsp;*</ng-container>\r\n</div>\r\n", styles: [".mrd-label-content{position:absolute;top:0;left:2px;transition:top .3s,font-size .3s;color:#afa6a6;pointer-events:none;width:100%;overflow:hidden;text-overflow:ellipsis;height:100%;display:flex;flex-direction:column;justify-content:center}.mrd-label-content.mrd-label-floating{top:-1.25em;font-size:.75em;justify-content:flex-start}.mrd-label-content.mrd-label-hidden{display:none}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { float: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZm9ybS1maWVsZC9jb21wb25lbnRzL21yZC1sYWJlbC9tcmQtbGFiZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWxhYmVsL21yZC1sYWJlbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7OztJQ0E3RCw2QkFBcUM7SUFBQSx1QkFBTztJQUFBLDBCQUFlOzs7O0FEUXRGLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxzQkFBc0I7SUFRL0M7SUFOSSxLQUFLLEdBQWdDLE1BQU0sQ0FBQztJQUNyRCxRQUFRLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWhFLFFBQVEsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFdkUsWUFDWSxHQUFzQjtRQUVoQyxLQUFLLEVBQUUsQ0FBQztRQUZFLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBR2hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksbUJBQW1CLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQzs4RkFiVSxpQkFBaUI7NEZBQWpCLGlCQUFpQjs7WUNUOUIsOEJBQWlLO1lBQy9KLGtCQUF5QjtZQUFBLG9GQUEyRDtZQUN0RixpQkFBTTs7WUFGeUIsK0lBQWlJO1lBQ3RILGVBQW9CO1lBQXBCLHlDQUFvQjs7O3VGRFFqRCxpQkFBaUI7Y0FON0IsU0FBUzsyQkFDRSxXQUFXLG1CQUdKLHVCQUF1QixDQUFDLE1BQU07b0VBSS9CLEtBQUs7a0JBQXBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmFzZVB1c2hTdHJhdGVneU9iamVjdCwgT2JzZXJ2YWJsZVZhbHVlLCBTdWJzY3JpcHRpb25IYW5kbGVyIH0gZnJvbSAnbXJkLWNvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtcmQtbGFiZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtbGFiZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC1sYWJlbC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmRMYWJlbENvbXBvbmVudCBleHRlbmRzIEJhc2VQdXNoU3RyYXRlZ3lPYmplY3Qge1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgZmxvYXQ6ICdhbHdheXMnIHwgJ2F1dG8nIHwgJ25ldmVyJyA9ICdhdXRvJztcclxuICBwdWJsaWMgZmxvYXRpbmc6IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPiA9IG5ldyBPYnNlcnZhYmxlVmFsdWUoZmFsc2UpO1xyXG5cclxuICBwdWJsaWMgcmVxdWlyZWQ6IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPiA9IG5ldyBPYnNlcnZhYmxlVmFsdWUoZmFsc2UpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy53YXRjaCh0aGlzLmZsb2F0aW5nLmNoYW5nZWQsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKSkpO1xyXG4gICAgdGhpcy53YXRjaCh0aGlzLnJlcXVpcmVkLmNoYW5nZWQsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKSkpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibXJkLWxhYmVsLWNvbnRlbnRcIiBbbmdDbGFzc109XCJ7J21yZC1sYWJlbC1mbG9hdGluZyc6IGZsb2F0ID09PSAnYWx3YXlzJyB8fCBmbG9hdGluZy52YWx1ZSwgJ21yZC1sYWJlbC1oaWRkZW4nOiBmbG9hdCA9PT0gJ25ldmVyJyAmJiBmbG9hdGluZy52YWx1ZX1cIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+PG5nLWNvbnRhaW5lciAqbmdJZj1cInJlcXVpcmVkLnZhbHVlXCI+Jm5ic3A7KjwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuIl19