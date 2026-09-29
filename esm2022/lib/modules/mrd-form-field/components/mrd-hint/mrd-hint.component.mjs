import { ChangeDetectionStrategy, Component, Input, ViewChild, numberAttribute } from '@angular/core';
import { Util } from 'mrd-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../mrd-tooltip/common/directive/tool-tip-renderer/tool-tip-renderer.directive";
const _c0 = ["hintContent"];
const _c1 = function (a0) { return { "mrd-hint-ellipsis": a0 }; };
const _c2 = ["*"];
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
        } }, inputs: { ellipsis: ["ellipsis", "ellipsis", numberAttribute] }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c2, decls: 3, vars: 5, consts: [["showIfTruncated", "", 1, "mrd-hint-container", 3, "ngClass", "line-clamp", "mrdToolTip"], ["hintContent", ""]], template: function MrdHintComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "span", 0, 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c1, ctx.ellipsis > 0))("line-clamp", ctx.ellipsis > 0 ? ctx.ellipsis : null)("mrdToolTip", ctx.tootltipText);
        } }, dependencies: [i1.NgClass, i2.ToolTipRendererDirective], styles: ["[_nghost-%COMP%]{font-size:.75em;color:#afa6a6;display:flex;flex:1 1 fit-content}.mrd-hint-container[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;min-width:-moz-fit-content;min-width:fit-content}.mrd-hint-container.mrd-hint-ellipsis[_ngcontent-%COMP%]{white-space:nowrap;white-space:normal;display:-webkit-box}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdHintComponent, [{
        type: Component,
        args: [{ selector: 'mrd-hint', changeDetection: ChangeDetectionStrategy.OnPush, template: "<span class=\"mrd-hint-container\"\r\n  [ngClass]=\"{'mrd-hint-ellipsis': ellipsis > 0}\"\r\n  [line-clamp]=\"ellipsis > 0 ? ellipsis : null\"\r\n  [mrdToolTip]=\"tootltipText\" showIfTruncated #hintContent>\r\n  <ng-content></ng-content>\r\n</span>\r\n", styles: [":host{font-size:.75em;color:#afa6a6;display:flex;flex:1 1 fit-content}.mrd-hint-container{overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;min-width:-moz-fit-content;min-width:fit-content}.mrd-hint-container.mrd-hint-ellipsis{white-space:nowrap;white-space:normal;display:-webkit-box}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { hintContent: [{
            type: ViewChild,
            args: ['hintContent']
        }], ellipsis: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWhpbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWhpbnQvbXJkLWhpbnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWhpbnQvbXJkLWhpbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQix1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLEtBQUssRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BKLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7QUFRaEMsTUFBTSxPQUFPLGdCQUFnQjtJQVNqQjtJQVBnQixXQUFXLENBQWE7SUFFTixRQUFRLENBQVM7SUFFdEQsWUFBWSxHQUFXLEVBQUUsQ0FBQztJQUVqQyxZQUNVLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0lBQzVCLENBQUM7SUFFTCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNsSixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztTQUM5RDtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7NkZBckJVLGdCQUFnQjs0RkFBaEIsZ0JBQWdCOzs7OzswREFJUixlQUFlOztZQ2JwQyxrQ0FHMkQ7WUFDekQsa0JBQXlCO1lBQzNCLGlCQUFPOztZQUpMLHNFQUErQyxzREFBQSxnQ0FBQTs7O3VGRFFwQyxnQkFBZ0I7Y0FONUIsU0FBUzsyQkFDRSxVQUFVLG1CQUdILHVCQUF1QixDQUFDLE1BQU07b0VBSXJCLFdBQVc7a0JBQXBDLFNBQVM7bUJBQUMsYUFBYTtZQUVvQixRQUFRO2tCQUFuRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkLCBudW1iZXJBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gJ21yZC1jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLWhpbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtaGludC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWhpbnQuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkSGludENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCdoaW50Q29udGVudCcpIGhpbnRDb250ZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgcHVibGljIGVsbGlwc2lzOiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyB0b290bHRpcFRleHQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmhpbnRDb250ZW50KSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLmhpbnRDb250ZW50Lm5hdGl2ZUVsZW1lbnQpICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuaGludENvbnRlbnQubmF0aXZlRWxlbWVudC5pbm5lclRleHQpKSB7XHJcbiAgICAgIHRoaXMudG9vdGx0aXBUZXh0ID0gdGhpcy5oaW50Q29udGVudC5uYXRpdmVFbGVtZW50LmlubmVyVGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5lbGxpcHNpcyAhPT0gdW5kZWZpbmVkICYmIE51bWJlci5pc05hTih0aGlzLmVsbGlwc2lzKSkge1xyXG4gICAgICB0aGlzLmVsbGlwc2lzID0gMTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbn1cclxuIiwiPHNwYW4gY2xhc3M9XCJtcmQtaGludC1jb250YWluZXJcIlxyXG4gIFtuZ0NsYXNzXT1cInsnbXJkLWhpbnQtZWxsaXBzaXMnOiBlbGxpcHNpcyA+IDB9XCJcclxuICBbbGluZS1jbGFtcF09XCJlbGxpcHNpcyA+IDAgPyBlbGxpcHNpcyA6IG51bGxcIlxyXG4gIFttcmRUb29sVGlwXT1cInRvb3RsdGlwVGV4dFwiIHNob3dJZlRydW5jYXRlZCAjaGludENvbnRlbnQ+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L3NwYW4+XHJcbiJdfQ==