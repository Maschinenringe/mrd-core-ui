import { booleanAttribute, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BasePushStrategyObject, ObservableValue, SubscriptionHandler } from 'mrd-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MrdLabelComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "\u00A0*");
    i0.ɵɵelementContainerEnd();
} }
const _c0 = function (a0, a1, a2) { return { "mrd-label-floating": a0, "mrd-label-hidden": a1, "mrd-label-top": a2 }; };
const _c1 = ["*"];
export class MrdLabelComponent extends BasePushStrategyObject {
    cdr;
    labelTop = false;
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
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdLabelComponent, selectors: [["mrd-label"]], inputs: { labelTop: ["labelTop", "labelTop", booleanAttribute], float: "float" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 3, vars: 6, consts: [[1, "mrd-label-content", 3, "ngClass"], [4, "ngIf"]], template: function MrdLabelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵtemplate(2, MrdLabelComponent_ng_container_2_Template, 2, 0, "ng-container", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c0, ctx.float === "always" || ctx.floating.value, ctx.float === "never" && ctx.floating.value, ctx.labelTop));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.required.value);
        } }, dependencies: [i1.NgClass, i1.NgIf], styles: [".mrd-label-content[_ngcontent-%COMP%]{position:absolute;top:0;left:2px;transition:top .3s,font-size .3s;color:#afa6a6;pointer-events:none;width:100%;overflow:hidden;text-overflow:ellipsis;height:100%;display:flex;flex-direction:column;justify-content:center}.mrd-label-content.mrd-label-top[_ngcontent-%COMP%]{justify-content:flex-start}.mrd-label-content.mrd-label-floating[_ngcontent-%COMP%]{top:-1.25em;font-size:.75em;justify-content:flex-start}.mrd-label-content.mrd-label-hidden[_ngcontent-%COMP%]{display:none}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdLabelComponent, [{
        type: Component,
        args: [{ selector: 'mrd-label', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-label-content\" [ngClass]=\"{'mrd-label-floating': float === 'always' || floating.value, 'mrd-label-hidden': float === 'never' && floating.value, 'mrd-label-top': labelTop}\">\r\n  <ng-content></ng-content><ng-container *ngIf=\"required.value\">&nbsp;*</ng-container>\r\n</div>\r\n", styles: [".mrd-label-content{position:absolute;top:0;left:2px;transition:top .3s,font-size .3s;color:#afa6a6;pointer-events:none;width:100%;overflow:hidden;text-overflow:ellipsis;height:100%;display:flex;flex-direction:column;justify-content:center}.mrd-label-content.mrd-label-top{justify-content:flex-start}.mrd-label-content.mrd-label-floating{top:-1.25em;font-size:.75em;justify-content:flex-start}.mrd-label-content.mrd-label-hidden{display:none}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { labelTop: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], float: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZm9ybS1maWVsZC9jb21wb25lbnRzL21yZC1sYWJlbC9tcmQtbGFiZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWxhYmVsL21yZC1sYWJlbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFFLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7OztJQ0E3RCw2QkFBcUM7SUFBQSx1QkFBTztJQUFBLDBCQUFlOzs7O0FEUXRGLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxzQkFBc0I7SUFVL0M7SUFSaUMsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUV2RCxLQUFLLEdBQWdDLE1BQU0sQ0FBQztJQUNyRCxRQUFRLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWhFLFFBQVEsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFdkUsWUFDWSxHQUFzQjtRQUVoQyxLQUFLLEVBQUUsQ0FBQztRQUZFLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBR2hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksbUJBQW1CLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQzs4RkFmVSxpQkFBaUI7NEZBQWpCLGlCQUFpQiwyRUFFVCxnQkFBZ0I7O1lDWHJDLDhCQUE0TDtZQUMxTCxrQkFBeUI7WUFBQSxvRkFBMkQ7WUFDdEYsaUJBQU07O1lBRnlCLDZKQUE0SjtZQUNqSixlQUFvQjtZQUFwQix5Q0FBb0I7Ozt1RkRRakQsaUJBQWlCO2NBTjdCLFNBQVM7MkJBQ0UsV0FBVyxtQkFHSix1QkFBdUIsQ0FBQyxNQUFNO29FQUlGLFFBQVE7a0JBQXBELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFcEIsS0FBSztrQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb2xlYW5BdHRyaWJ1dGUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0LCBPYnNlcnZhYmxlVmFsdWUsIFN1YnNjcmlwdGlvbkhhbmRsZXIgfSBmcm9tICdtcmQtY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1sYWJlbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1sYWJlbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWxhYmVsLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZExhYmVsQ29tcG9uZW50IGV4dGVuZHMgQmFzZVB1c2hTdHJhdGVneU9iamVjdCB7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGxhYmVsVG9wOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBmbG9hdDogJ2Fsd2F5cycgfCAnYXV0bycgfCAnbmV2ZXInID0gJ2F1dG8nO1xyXG4gIHB1YmxpYyBmbG9hdGluZzogT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+ID0gbmV3IE9ic2VydmFibGVWYWx1ZShmYWxzZSk7XHJcblxyXG4gIHB1YmxpYyByZXF1aXJlZDogT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+ID0gbmV3IE9ic2VydmFibGVWYWx1ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLndhdGNoKHRoaXMuZmxvYXRpbmcuY2hhbmdlZCwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKCkgPT4gdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpKSk7XHJcbiAgICB0aGlzLndhdGNoKHRoaXMucmVxdWlyZWQuY2hhbmdlZCwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKCkgPT4gdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpKSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJtcmQtbGFiZWwtY29udGVudFwiIFtuZ0NsYXNzXT1cInsnbXJkLWxhYmVsLWZsb2F0aW5nJzogZmxvYXQgPT09ICdhbHdheXMnIHx8IGZsb2F0aW5nLnZhbHVlLCAnbXJkLWxhYmVsLWhpZGRlbic6IGZsb2F0ID09PSAnbmV2ZXInICYmIGZsb2F0aW5nLnZhbHVlLCAnbXJkLWxhYmVsLXRvcCc6IGxhYmVsVG9wfVwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD48bmctY29udGFpbmVyICpuZ0lmPVwicmVxdWlyZWQudmFsdWVcIj4mbmJzcDsqPC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG4iXX0=