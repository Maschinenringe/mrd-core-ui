import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MrdTooltipComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.text, " ");
} }
function MrdTooltipComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { "mrd-tooltip-container": a0 }; };
export class MrdTooltipComponent {
    /**
     * This is simple text which is to be shown in the tooltip
     */
    text;
    /**
     * This provides finer control on the content to be visible on the tooltip
     * This template will be injected in ToolTipRenderer directive in the consumer template
     * <ng-template #template>
     *  content.....
     * </ng-template>
     */
    contentTemplate;
    defaultStyle = true;
    constructor() { }
    ngOnInit() {
    }
    /** @nocollapse */ static ɵfac = function MrdTooltipComponent_Factory(t) { return new (t || MrdTooltipComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdTooltipComponent, selectors: [["mrd-tooltip"]], inputs: { text: "text", contentTemplate: "contentTemplate", defaultStyle: "defaultStyle" }, decls: 5, vars: 4, consts: [[3, "ngClass"], ["simpleText", ""], [4, "ngTemplateOutlet"]], template: function MrdTooltipComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "div", 0);
            i0.ɵɵtemplate(2, MrdTooltipComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, MrdTooltipComponent_ng_container_4_Template, 1, 0, "ng-container", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx.defaultStyle));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate || _r0);
        } }, dependencies: [i1.NgClass, i1.NgTemplateOutlet], styles: [".mrd-tooltip-container[_ngcontent-%COMP%]{border-radius:8px;padding:2px 12px;background:#737373;box-shadow:0 0 25px #0000004d;color:#fff;word-break:normal;max-width:350px;font-size:14px}"] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdTooltipComponent, [{
        type: Component,
        args: [{ selector: 'mrd-tooltip', template: "<div>\r\n  <div [ngClass]=\"{'mrd-tooltip-container': defaultStyle}\">\r\n    <ng-template #simpleText>\r\n      {{text}}\r\n    </ng-template>\r\n    <ng-container *ngTemplateOutlet=\"contentTemplate || simpleText\">\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n", styles: [".mrd-tooltip-container{border-radius:8px;padding:2px 12px;background:#737373;box-shadow:0 0 25px #0000004d;color:#fff;word-break:normal;max-width:350px;font-size:14px}\n"] }]
    }], function () { return []; }, { text: [{
            type: Input
        }], contentTemplate: [{
            type: Input
        }], defaultStyle: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXRvb2x0aXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10b29sdGlwL2NvbXBvbmVudHMvbXJkLXRvb2x0aXAvbXJkLXRvb2x0aXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10b29sdGlwL2NvbXBvbmVudHMvbXJkLXRvb2x0aXAvbXJkLXRvb2x0aXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXVCLE1BQU0sZUFBZSxDQUFDOzs7O0lDR2hFLFlBQ0Y7OztJQURFLDRDQUNGOzs7SUFDQSx3QkFDZTs7O0FEQ25CLE1BQU0sT0FBTyxtQkFBbUI7SUFFOUI7O09BRUc7SUFDTyxJQUFJLENBQVM7SUFFdEI7Ozs7OztPQU1HO0lBQ00sZUFBZSxDQUFtQjtJQUVsQyxZQUFZLEdBQVksSUFBSSxDQUFDO0lBRXRDLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO2dHQXJCUyxtQkFBbUI7NEZBQW5CLG1CQUFtQjtZQ1BoQywyQkFBSyxhQUFBO1lBRUQscUhBRWM7WUFDZCxzRkFDZTtZQUNqQixpQkFBTSxFQUFBOzs7WUFORCxlQUFtRDtZQUFuRCxzRUFBbUQ7WUFJdkMsZUFBK0M7WUFBL0MsNkRBQStDOzs7dUZERXJELG1CQUFtQjtjQUwvQixTQUFTOzJCQUNFLGFBQWE7c0NBU2IsSUFBSTtrQkFBWixLQUFLO1lBU0csZUFBZTtrQkFBdkIsS0FBSztZQUVHLFlBQVk7a0JBQXBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC10b29sdGlwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLXRvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC10b29sdGlwLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZFRvb2x0aXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGlzIHNpbXBsZSB0ZXh0IHdoaWNoIGlzIHRvIGJlIHNob3duIGluIHRoZSB0b29sdGlwXHJcbiAgICovXHJcbiAgIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUaGlzIHByb3ZpZGVzIGZpbmVyIGNvbnRyb2wgb24gdGhlIGNvbnRlbnQgdG8gYmUgdmlzaWJsZSBvbiB0aGUgdG9vbHRpcFxyXG4gICAgKiBUaGlzIHRlbXBsYXRlIHdpbGwgYmUgaW5qZWN0ZWQgaW4gVG9vbFRpcFJlbmRlcmVyIGRpcmVjdGl2ZSBpbiB0aGUgY29uc3VtZXIgdGVtcGxhdGVcclxuICAgICogPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZT5cclxuICAgICogIGNvbnRlbnQuLi4uLlxyXG4gICAgKiA8L25nLXRlbXBsYXRlPlxyXG4gICAgKi9cclxuICAgQElucHV0KCkgY29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICAgQElucHV0KCkgZGVmYXVsdFN0eWxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICBuZ09uSW5pdCgpIHtcclxuICAgfVxyXG59XHJcbiIsIjxkaXY+XHJcbiAgPGRpdiBbbmdDbGFzc109XCJ7J21yZC10b29sdGlwLWNvbnRhaW5lcic6IGRlZmF1bHRTdHlsZX1cIj5cclxuICAgIDxuZy10ZW1wbGF0ZSAjc2ltcGxlVGV4dD5cclxuICAgICAge3t0ZXh0fX1cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFRlbXBsYXRlIHx8IHNpbXBsZVRleHRcIj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19