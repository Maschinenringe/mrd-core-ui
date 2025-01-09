import { ChangeDetectionStrategy, Component, Input, ViewChild, numberAttribute } from '@angular/core';
import { Util } from 'mrd-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../mrd-tooltip/common/directive/tool-tip-renderer/tool-tip-renderer.directive";
const _c0 = ["hintContent"];
const _c1 = function (a0) { return { "mrd-hint-ellipsis": a0 }; };
const _c2 = function (a0) { return { "-webkit-line-clamp": a0 }; };
const _c3 = ["*"];
export class MrdHintComponent {
    cdr;
    hintContent;
    ellipsis;
    tootltipText = '';
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        if (Util.isDefined(this.hintContent) && Util.isDefined(this.hintContent.nativeElement) && Util.isDefined(this.hintContent.nativeElement.innerText)) {
            this.tootltipText = this.hintContent.nativeElement.innerText;
        }
        if (this.ellipsis !== undefined && Number.isNaN(this.ellipsis)) {
            this.ellipsis = 1;
        }
        this.cdr.detectChanges();
    }
    /** @nocollapse */ static ɵfac = function MrdHintComponent_Factory(t) { return new (t || MrdHintComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdHintComponent, selectors: [["mrd-hint"]], viewQuery: function MrdHintComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.hintContent = _t.first);
        } }, inputs: { ellipsis: ["ellipsis", "ellipsis", numberAttribute] }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c3, decls: 3, vars: 7, consts: [["showIfTruncated", "", 1, "mrd-hint-container", 3, "ngClass", "ngStyle", "mrdToolTip"], ["hintContent", ""]], template: function MrdHintComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "span", 0, 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c1, ctx.ellipsis > 0))("ngStyle", i0.ɵɵpureFunction1(5, _c2, ctx.ellipsis > 0 ? ctx.ellipsis : ""))("mrdToolTip", ctx.tootltipText);
        } }, dependencies: [i1.NgClass, i1.NgStyle, i2.ToolTipRendererDirective], styles: ["[_nghost-%COMP%]{font-size:.75em;color:#afa6a6;display:flex;flex:1 1 fit-content}.mrd-hint-container[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;min-width:-moz-fit-content;min-width:fit-content}.mrd-hint-container.mrd-hint-ellipsis[_ngcontent-%COMP%]{white-space:nowrap;white-space:normal;display:-webkit-box}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdHintComponent, [{
        type: Component,
        args: [{ selector: 'mrd-hint', changeDetection: ChangeDetectionStrategy.OnPush, template: "<span class=\"mrd-hint-container\"\r\n  [ngClass]=\"{'mrd-hint-ellipsis': ellipsis > 0}\"\r\n  [ngStyle]=\"{'-webkit-line-clamp': ellipsis > 0 ? ellipsis : ''}\"\r\n  [mrdToolTip]=\"tootltipText\" showIfTruncated #hintContent>\r\n  <ng-content></ng-content>\r\n</span>\r\n", styles: [":host{font-size:.75em;color:#afa6a6;display:flex;flex:1 1 fit-content}.mrd-hint-container{overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;min-width:-moz-fit-content;min-width:fit-content}.mrd-hint-container.mrd-hint-ellipsis{white-space:nowrap;white-space:normal;display:-webkit-box}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { hintContent: [{
            type: ViewChild,
            args: ['hintContent']
        }], ellipsis: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWhpbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWhpbnQvbXJkLWhpbnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWhpbnQvbXJkLWhpbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQix1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLEtBQUssRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BKLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7O0FBUWhDLE1BQU0sT0FBTyxnQkFBZ0I7SUFTakI7SUFQZ0IsV0FBVyxDQUFhO0lBRU4sUUFBUSxDQUFTO0lBRXRELFlBQVksR0FBVyxFQUFFLENBQUM7SUFFakMsWUFDVSxHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtJQUM1QixDQUFDO0lBRUwsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDbEosSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7U0FDOUQ7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzlELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzZGQXJCVSxnQkFBZ0I7NEZBQWhCLGdCQUFnQjs7Ozs7MERBSVIsZUFBZTs7WUNicEMsa0NBRzJEO1lBQ3pELGtCQUF5QjtZQUMzQixpQkFBTzs7WUFKTCxzRUFBK0MsNkVBQUEsZ0NBQUE7Ozt1RkRRcEMsZ0JBQWdCO2NBTjVCLFNBQVM7MkJBQ0UsVUFBVSxtQkFHSCx1QkFBdUIsQ0FBQyxNQUFNO29FQUlyQixXQUFXO2tCQUFwQyxTQUFTO21CQUFDLGFBQWE7WUFFb0IsUUFBUTtrQkFBbkQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCwgbnVtYmVyQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICdtcmQtY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1oaW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWhpbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC1oaW50LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZEhpbnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZCgnaGludENvbnRlbnQnKSBoaW50Q29udGVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBlbGxpcHNpczogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgdG9vdGx0aXBUZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5oaW50Q29udGVudCkgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5oaW50Q29udGVudC5uYXRpdmVFbGVtZW50KSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLmhpbnRDb250ZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0KSkge1xyXG4gICAgICB0aGlzLnRvb3RsdGlwVGV4dCA9IHRoaXMuaGludENvbnRlbnQubmF0aXZlRWxlbWVudC5pbm5lclRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZWxsaXBzaXMgIT09IHVuZGVmaW5lZCAmJiBOdW1iZXIuaXNOYU4odGhpcy5lbGxpcHNpcykpIHtcclxuICAgICAgdGhpcy5lbGxpcHNpcyA9IDE7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxzcGFuIGNsYXNzPVwibXJkLWhpbnQtY29udGFpbmVyXCJcclxuICBbbmdDbGFzc109XCJ7J21yZC1oaW50LWVsbGlwc2lzJzogZWxsaXBzaXMgPiAwfVwiXHJcbiAgW25nU3R5bGVdPVwieyctd2Via2l0LWxpbmUtY2xhbXAnOiBlbGxpcHNpcyA+IDAgPyBlbGxpcHNpcyA6ICcnfVwiXHJcbiAgW21yZFRvb2xUaXBdPVwidG9vdGx0aXBUZXh0XCIgc2hvd0lmVHJ1bmNhdGVkICNoaW50Q29udGVudD5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvc3Bhbj5cclxuIl19