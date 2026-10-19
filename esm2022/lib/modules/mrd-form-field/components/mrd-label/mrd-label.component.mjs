import { booleanAttribute, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BasePushStrategyObject, ObservableValue, SubscriptionHandler } from 'mrd-core';
import { MrdColor } from '../../../../common/enum/color.enum';
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
    labelColor = MrdColor.GRAU_BLAU;
    labelFloatingColor = MrdColor.GRAU_BLAU_LIGHT;
    constructor(cdr) {
        super();
        this.cdr = cdr;
        this.watch(this.floating.changed, new SubscriptionHandler(() => this.cdr.detectChanges()));
        this.watch(this.required.changed, new SubscriptionHandler(() => this.cdr.detectChanges()));
        this.watch(this._labelTop.changed, new SubscriptionHandler(() => this.cdr.detectChanges()));
    }
    /** @nocollapse */ static ɵfac = function MrdLabelComponent_Factory(t) { return new (t || MrdLabelComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdLabelComponent, selectors: [["mrd-label"]], inputs: { labelTop: ["labelTop", "labelTop", booleanAttribute], float: "float" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 4, vars: 10, consts: [[1, "mrd-label-content", 3, "ngClass"], [1, "mrd-label-text"], [4, "ngIf"]], template: function MrdLabelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "span", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵtemplate(3, MrdLabelComponent_ng_container_3_Template, 2, 0, "ng-container", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵstyleProp("--label-color", ctx.labelColor)("--label-floating-color", ctx.labelFloatingColor);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(6, _c0, ctx.float === "always" || ctx.floating.value, ctx.float === "never" && ctx.floating.value, ctx.labelTop));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.required.value);
        } }, dependencies: [i1.NgClass, i1.NgIf], styles: [".mrd-label-content[_ngcontent-%COMP%]{position:absolute;top:0;left:2px;transition:top .3s,font-size .3s;color:var(--label-color);pointer-events:none;overflow:hidden;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center}.mrd-label-content[_ngcontent-%COMP%]   .mrd-label-text[_ngcontent-%COMP%]{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-label-content.mrd-label-top[_ngcontent-%COMP%]{justify-content:flex-start}.mrd-label-content.mrd-label-floating[_ngcontent-%COMP%]{top:-1.25em;font-size:.75em;color:var(--label-floating-color);justify-content:flex-start;overflow:visible;line-height:20px}.mrd-label-content.mrd-label-hidden[_ngcontent-%COMP%]{display:none}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdLabelComponent, [{
        type: Component,
        args: [{ selector: 'mrd-label', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-label-content\" \n  [style.--label-color]=\"labelColor\"\n  [style.--label-floating-color]=\"labelFloatingColor\"\n  [ngClass]=\"{'mrd-label-floating': float === 'always' || floating.value, 'mrd-label-hidden': float === 'never' && floating.value, 'mrd-label-top': labelTop}\">\n  <span class=\"mrd-label-text\"><ng-content></ng-content><ng-container *ngIf=\"required.value\">&nbsp;*</ng-container></span>\n</div>\n", styles: [".mrd-label-content{position:absolute;top:0;left:2px;transition:top .3s,font-size .3s;color:var(--label-color);pointer-events:none;overflow:hidden;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center}.mrd-label-content .mrd-label-text{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-label-content.mrd-label-top{justify-content:flex-start}.mrd-label-content.mrd-label-floating{top:-1.25em;font-size:.75em;color:var(--label-floating-color);justify-content:flex-start;overflow:visible;line-height:20px}.mrd-label-content.mrd-label-hidden{display:none}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { labelTop: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], float: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZm9ybS1maWVsZC9jb21wb25lbnRzL21yZC1sYWJlbC9tcmQtbGFiZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWxhYmVsL21yZC1sYWJlbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFFLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN4RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7SUNFTiw2QkFBcUM7SUFBQSx1QkFBTztJQUFBLDBCQUFlOzs7O0FETW5ILE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxzQkFBc0I7SUFtQi9DO0lBakJaLElBQWlELFFBQVEsQ0FBQyxLQUFjO1FBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUNPLFNBQVMsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFekQsS0FBSyxHQUFnQyxNQUFNLENBQUM7SUFDckQsUUFBUSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVoRSxRQUFRLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWhFLFVBQVUsR0FBVyxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQ3hDLGtCQUFrQixHQUFXLFFBQVEsQ0FBQyxlQUFlLENBQUM7SUFFN0QsWUFDWSxHQUFzQjtRQUVoQyxLQUFLLEVBQUUsQ0FBQztRQUZFLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBR2hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksbUJBQW1CLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlGLENBQUM7OEZBekJVLGlCQUFpQjs0RkFBakIsaUJBQWlCLDJFQUVULGdCQUFnQjs7WUNackMsOEJBRytKLGNBQUE7WUFDaEksa0JBQXlCO1lBQUEsb0ZBQTJEO1lBQUEsaUJBQU8sRUFBQTs7WUFIeEgsK0NBQWtDLGtEQUFBO1lBRWxDLDZKQUE0SjtZQUN2RixlQUFvQjtZQUFwQix5Q0FBb0I7Ozt1RkRNOUUsaUJBQWlCO2NBTjdCLFNBQVM7MkJBQ0UsV0FBVyxtQkFHSix1QkFBdUIsQ0FBQyxNQUFNO29FQUlFLFFBQVE7a0JBQXhELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFRcEIsS0FBSztrQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb2xlYW5BdHRyaWJ1dGUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0LCBPYnNlcnZhYmxlVmFsdWUsIFN1YnNjcmlwdGlvbkhhbmRsZXIgfSBmcm9tICdtcmQtY29yZSc7XHJcbmltcG9ydCB7IE1yZENvbG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2VudW0vY29sb3IuZW51bSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1sYWJlbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1sYWJlbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWxhYmVsLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZExhYmVsQ29tcG9uZW50IGV4dGVuZHMgQmFzZVB1c2hTdHJhdGVneU9iamVjdCB7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNldCBsYWJlbFRvcCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fbGFiZWxUb3AudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbiAgcHVibGljIGdldCBsYWJlbFRvcCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9sYWJlbFRvcC52YWx1ZTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfbGFiZWxUb3A6IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPiA9IG5ldyBPYnNlcnZhYmxlVmFsdWUoZmFsc2UpO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgZmxvYXQ6ICdhbHdheXMnIHwgJ2F1dG8nIHwgJ25ldmVyJyA9ICdhdXRvJztcclxuICBwdWJsaWMgZmxvYXRpbmc6IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPiA9IG5ldyBPYnNlcnZhYmxlVmFsdWUoZmFsc2UpO1xyXG5cclxuICBwdWJsaWMgcmVxdWlyZWQ6IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPiA9IG5ldyBPYnNlcnZhYmxlVmFsdWUoZmFsc2UpO1xyXG5cclxuICBwdWJsaWMgbGFiZWxDb2xvcjogc3RyaW5nID0gTXJkQ29sb3IuR1JBVV9CTEFVO1xyXG4gIHB1YmxpYyBsYWJlbEZsb2F0aW5nQ29sb3I6IHN0cmluZyA9IE1yZENvbG9yLkdSQVVfQkxBVV9MSUdIVDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMud2F0Y2godGhpcy5mbG9hdGluZy5jaGFuZ2VkLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoKSA9PiB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCkpKTtcclxuICAgIHRoaXMud2F0Y2godGhpcy5yZXF1aXJlZC5jaGFuZ2VkLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoKSA9PiB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCkpKTtcclxuICAgIHRoaXMud2F0Y2godGhpcy5fbGFiZWxUb3AuY2hhbmdlZCwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKCkgPT4gdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpKSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJtcmQtbGFiZWwtY29udGVudFwiIFxuICBbc3R5bGUuLS1sYWJlbC1jb2xvcl09XCJsYWJlbENvbG9yXCJcbiAgW3N0eWxlLi0tbGFiZWwtZmxvYXRpbmctY29sb3JdPVwibGFiZWxGbG9hdGluZ0NvbG9yXCJcbiAgW25nQ2xhc3NdPVwieydtcmQtbGFiZWwtZmxvYXRpbmcnOiBmbG9hdCA9PT0gJ2Fsd2F5cycgfHwgZmxvYXRpbmcudmFsdWUsICdtcmQtbGFiZWwtaGlkZGVuJzogZmxvYXQgPT09ICduZXZlcicgJiYgZmxvYXRpbmcudmFsdWUsICdtcmQtbGFiZWwtdG9wJzogbGFiZWxUb3B9XCI+XG4gIDxzcGFuIGNsYXNzPVwibXJkLWxhYmVsLXRleHRcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PG5nLWNvbnRhaW5lciAqbmdJZj1cInJlcXVpcmVkLnZhbHVlXCI+Jm5ic3A7KjwvbmctY29udGFpbmVyPjwvc3Bhbj5cbjwvZGl2PlxuIl19