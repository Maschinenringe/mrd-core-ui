import { booleanAttribute, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BasePushStrategyObject, ObservableValue, SubscriptionHandler } from 'mrd-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MrdLabelComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "\u00A0*");
    i0.ɵɵelementContainerEnd();
} }
const _c0 = function (a0, a1, a2) { return { "mrd-label-floating": a0, "mrd-label-hidden": a1, "mrd-label-top": a2 }; };
const _c1 = ["*"];
export class MrdLabelComponent extends BasePushStrategyObject {
    cdr;
    set labelTop(value) {
        this._labelTop.value = value;
    }
    get labelTop() {
        return this._labelTop.value;
    }
    _labelTop = new ObservableValue(false);
    float = 'auto';
    floating = new ObservableValue(false);
    required = new ObservableValue(false);
    constructor(cdr) {
        super();
        this.cdr = cdr;
        this.watch(this.floating.changed, new SubscriptionHandler(() => this.cdr.detectChanges()));
        this.watch(this.required.changed, new SubscriptionHandler(() => this.cdr.detectChanges()));
        this.watch(this._labelTop.changed, new SubscriptionHandler(() => this.cdr.detectChanges()));
    }
    /** @nocollapse */ static ɵfac = function MrdLabelComponent_Factory(t) { return new (t || MrdLabelComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdLabelComponent, selectors: [["mrd-label"]], inputs: { labelTop: ["labelTop", "labelTop", booleanAttribute], float: "float" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 4, vars: 6, consts: [[1, "mrd-label-content", 3, "ngClass"], [1, "mrd-label-text"], [4, "ngIf"]], template: function MrdLabelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "span", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵtemplate(3, MrdLabelComponent_ng_container_3_Template, 2, 0, "ng-container", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c0, ctx.float === "always" || ctx.floating.value, ctx.float === "never" && ctx.floating.value, ctx.labelTop));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.required.value);
        } }, dependencies: [i1.NgClass, i1.NgIf], styles: [".mrd-label-content[_ngcontent-%COMP%]{position:absolute;top:0;left:2px;transition:top .3s,font-size .3s;color:#afa6a6;pointer-events:none;overflow:hidden;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center}.mrd-label-content[_ngcontent-%COMP%]   .mrd-label-text[_ngcontent-%COMP%]{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-label-content.mrd-label-top[_ngcontent-%COMP%]{justify-content:flex-start}.mrd-label-content.mrd-label-floating[_ngcontent-%COMP%]{top:-1.25em;font-size:.75em;justify-content:flex-start;overflow:visible}.mrd-label-content.mrd-label-hidden[_ngcontent-%COMP%]{display:none}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdLabelComponent, [{
        type: Component,
        args: [{ selector: 'mrd-label', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-label-content\" [ngClass]=\"{'mrd-label-floating': float === 'always' || floating.value, 'mrd-label-hidden': float === 'never' && floating.value, 'mrd-label-top': labelTop}\">\r\n  <span class=\"mrd-label-text\"><ng-content></ng-content><ng-container *ngIf=\"required.value\">&nbsp;*</ng-container></span>\r\n</div>\r\n", styles: [".mrd-label-content{position:absolute;top:0;left:2px;transition:top .3s,font-size .3s;color:#afa6a6;pointer-events:none;overflow:hidden;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center}.mrd-label-content .mrd-label-text{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-label-content.mrd-label-top{justify-content:flex-start}.mrd-label-content.mrd-label-floating{top:-1.25em;font-size:.75em;justify-content:flex-start;overflow:visible}.mrd-label-content.mrd-label-hidden{display:none}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { labelTop: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], float: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZm9ybS1maWVsZC9jb21wb25lbnRzL21yZC1sYWJlbC9tcmQtbGFiZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWxhYmVsL21yZC1sYWJlbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFFLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7OztJQ0FoQyw2QkFBcUM7SUFBQSx1QkFBTztJQUFBLDBCQUFlOzs7O0FEUW5ILE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxzQkFBc0I7SUFnQi9DO0lBZFosSUFBaUQsUUFBUSxDQUFDLEtBQWM7UUFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBQ08sU0FBUyxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV6RCxLQUFLLEdBQWdDLE1BQU0sQ0FBQztJQUNyRCxRQUFRLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWhFLFFBQVEsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFdkUsWUFDWSxHQUFzQjtRQUVoQyxLQUFLLEVBQUUsQ0FBQztRQUZFLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBR2hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksbUJBQW1CLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlGLENBQUM7OEZBdEJVLGlCQUFpQjs0RkFBakIsaUJBQWlCLDJFQUVULGdCQUFnQjs7WUNYckMsOEJBQTRMLGNBQUE7WUFDN0osa0JBQXlCO1lBQUEsb0ZBQTJEO1lBQUEsaUJBQU8sRUFBQTs7WUFEM0YsNkpBQTRKO1lBQ3BILGVBQW9CO1lBQXBCLHlDQUFvQjs7O3VGRFE5RSxpQkFBaUI7Y0FON0IsU0FBUzsyQkFDRSxXQUFXLG1CQUdKLHVCQUF1QixDQUFDLE1BQU07b0VBSUUsUUFBUTtrQkFBeEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQVFwQixLQUFLO2tCQUFwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vbGVhbkF0dHJpYnV0ZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhc2VQdXNoU3RyYXRlZ3lPYmplY3QsIE9ic2VydmFibGVWYWx1ZSwgU3Vic2NyaXB0aW9uSGFuZGxlciB9IGZyb20gJ21yZC1jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLWxhYmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWxhYmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtbGFiZWwuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkTGFiZWxDb21wb25lbnQgZXh0ZW5kcyBCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0IHtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IGxhYmVsVG9wKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9sYWJlbFRvcC52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IGxhYmVsVG9wKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsVG9wLnZhbHVlO1xyXG4gIH1cclxuICBwcml2YXRlIF9sYWJlbFRvcDogT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+ID0gbmV3IE9ic2VydmFibGVWYWx1ZShmYWxzZSk7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBmbG9hdDogJ2Fsd2F5cycgfCAnYXV0bycgfCAnbmV2ZXInID0gJ2F1dG8nO1xyXG4gIHB1YmxpYyBmbG9hdGluZzogT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+ID0gbmV3IE9ic2VydmFibGVWYWx1ZShmYWxzZSk7XHJcblxyXG4gIHB1YmxpYyByZXF1aXJlZDogT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+ID0gbmV3IE9ic2VydmFibGVWYWx1ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLndhdGNoKHRoaXMuZmxvYXRpbmcuY2hhbmdlZCwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKCkgPT4gdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpKSk7XHJcbiAgICB0aGlzLndhdGNoKHRoaXMucmVxdWlyZWQuY2hhbmdlZCwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKCkgPT4gdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpKSk7XHJcbiAgICB0aGlzLndhdGNoKHRoaXMuX2xhYmVsVG9wLmNoYW5nZWQsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKSkpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibXJkLWxhYmVsLWNvbnRlbnRcIiBbbmdDbGFzc109XCJ7J21yZC1sYWJlbC1mbG9hdGluZyc6IGZsb2F0ID09PSAnYWx3YXlzJyB8fCBmbG9hdGluZy52YWx1ZSwgJ21yZC1sYWJlbC1oaWRkZW4nOiBmbG9hdCA9PT0gJ25ldmVyJyAmJiBmbG9hdGluZy52YWx1ZSwgJ21yZC1sYWJlbC10b3AnOiBsYWJlbFRvcH1cIj5cclxuICA8c3BhbiBjbGFzcz1cIm1yZC1sYWJlbC10ZXh0XCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjxuZy1jb250YWluZXIgKm5nSWY9XCJyZXF1aXJlZC52YWx1ZVwiPiZuYnNwOyo8L25nLWNvbnRhaW5lcj48L3NwYW4+XHJcbjwvZGl2PlxyXG4iXX0=