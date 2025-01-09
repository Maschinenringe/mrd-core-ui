import { Component, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class MrdSelectCustomTriggerComponent {
    triggerClick = new EventEmitter();
    triggerClicked() {
        this.triggerClick.emit();
    }
    /** @nocollapse */ static ɵfac = function MrdSelectCustomTriggerComponent_Factory(t) { return new (t || MrdSelectCustomTriggerComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdSelectCustomTriggerComponent, selectors: [["mrd-select-custom-trigger"]], outputs: { triggerClick: "triggerClick" }, ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[3, "click"]], template: function MrdSelectCustomTriggerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵlistener("click", function MrdSelectCustomTriggerComponent_Template_span_click_0_listener() { return ctx.triggerClicked(); });
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } }, styles: ["[_nghost-%COMP%]{display:block;height:1.5em;width:100%;cursor:pointer;padding-left:2px}[_nghost-%COMP%] > span[_ngcontent-%COMP%]{width:100%;height:100%;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdSelectCustomTriggerComponent, [{
        type: Component,
        args: [{ selector: 'mrd-select-custom-trigger', template: "<span (click)=\"triggerClicked()\"><ng-content></ng-content></span>\r\n", styles: [":host{display:block;height:1.5em;width:100%;cursor:pointer;padding-left:2px}:host>span{width:100%;height:100%;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"] }]
    }], null, { triggerClick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXNlbGVjdC1jdXN0b20tdHJpZ2dlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWZvcm0tZmllbGQvY29tcG9uZW50cy9tcmQtc2VsZWN0LWN1c3RvbS10cmlnZ2VyL21yZC1zZWxlY3QtY3VzdG9tLXRyaWdnZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLXNlbGVjdC1jdXN0b20tdHJpZ2dlci9tcmQtc2VsZWN0LWN1c3RvbS10cmlnZ2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBT2hFLE1BQU0sT0FBTywrQkFBK0I7SUFFekIsWUFBWSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO0lBRXRFLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDOzRHQU5VLCtCQUErQjs0RkFBL0IsK0JBQStCOztZQ1A1QywrQkFBaUM7WUFBM0IsMEdBQVMsb0JBQWdCLElBQUM7WUFBQyxrQkFBeUI7WUFBQSxpQkFBTzs7O3VGRE9wRCwrQkFBK0I7Y0FMM0MsU0FBUzsyQkFDRSwyQkFBMkI7Z0JBTXBCLFlBQVk7a0JBQTVCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1zZWxlY3QtY3VzdG9tLXRyaWdnZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtc2VsZWN0LWN1c3RvbS10cmlnZ2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtc2VsZWN0LWN1c3RvbS10cmlnZ2VyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZFNlbGVjdEN1c3RvbVRyaWdnZXJDb21wb25lbnQge1xyXG5cclxuICBAT3V0cHV0KCkgcHVibGljIHRyaWdnZXJDbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBwdWJsaWMgdHJpZ2dlckNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyaWdnZXJDbGljay5lbWl0KCk7XHJcbiAgfVxyXG59XHJcbiIsIjxzcGFuIChjbGljayk9XCJ0cmlnZ2VyQ2xpY2tlZCgpXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj5cclxuIl19