import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class MrdSidenavContentComponent {
    elementRef;
    renderer;
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /** Wird vom Container gesetzt: in der mobilen Ansicht verdeckt die geoeffnete Sidenav den Inhalt */
    verborgenSetzen(verborgen) {
        if (verborgen) {
            this.renderer.addClass(this.elementRef.nativeElement, 'mrd-sidenav-content-verborgen');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'mrd-sidenav-content-verborgen');
        }
    }
    /** @nocollapse */ static ɵfac = function MrdSidenavContentComponent_Factory(t) { return new (t || MrdSidenavContentComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdSidenavContentComponent, selectors: [["mrd-sidenav-content"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MrdSidenavContentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, styles: ["[_nghost-%COMP%]{display:block;flex:1 1 auto;box-sizing:border-box;min-width:0;height:100%;overflow:auto}.mrd-sidenav-content-verborgen[_nghost-%COMP%]{display:none}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdSidenavContentComponent, [{
        type: Component,
        args: [{ selector: 'mrd-sidenav-content', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>\n", styles: [":host{display:block;flex:1 1 auto;box-sizing:border-box;min-width:0;height:100%;overflow:auto}:host(.mrd-sidenav-content-verborgen){display:none}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXNpZGVuYXYtY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLXNpZGVuYXYvY29tcG9uZW50cy9tcmQtc2lkZW5hdi1jb250ZW50L21yZC1zaWRlbmF2LWNvbnRlbnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1zaWRlbmF2L2NvbXBvbmVudHMvbXJkLXNpZGVuYXYtY29udGVudC9tcmQtc2lkZW5hdi1jb250ZW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQXlCLE1BQU0sZUFBZSxDQUFDOzs7QUFRMUYsTUFBTSxPQUFPLDBCQUEwQjtJQUczQjtJQUNBO0lBRlYsWUFDVSxVQUFtQyxFQUNuQyxRQUFtQjtRQURuQixlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxhQUFRLEdBQVIsUUFBUSxDQUFXO0lBQzFCLENBQUM7SUFFSixvR0FBb0c7SUFDN0YsZUFBZSxDQUFDLFNBQWtCO1FBQ3ZDLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsK0JBQStCLENBQUMsQ0FBQztTQUN4RjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsK0JBQStCLENBQUMsQ0FBQztTQUMzRjtJQUNILENBQUM7dUdBZFUsMEJBQTBCOzRGQUExQiwwQkFBMEI7O1lDUnZDLGtCQUF5Qjs7O3VGRFFaLDBCQUEwQjtjQU50QyxTQUFTOzJCQUNFLHFCQUFxQixtQkFHZCx1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yZC1zaWRlbmF2LWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLXNpZGVuYXYtY29udGVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21yZC1zaWRlbmF2LWNvbnRlbnQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTXJkU2lkZW5hdkNvbnRlbnRDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge31cblxuICAvKiogV2lyZCB2b20gQ29udGFpbmVyIGdlc2V0enQ6IGluIGRlciBtb2JpbGVuIEFuc2ljaHQgdmVyZGVja3QgZGllIGdlb2VmZm5ldGUgU2lkZW5hdiBkZW4gSW5oYWx0ICovXG4gIHB1YmxpYyB2ZXJib3JnZW5TZXR6ZW4odmVyYm9yZ2VuOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHZlcmJvcmdlbikge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21yZC1zaWRlbmF2LWNvbnRlbnQtdmVyYm9yZ2VuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtcmQtc2lkZW5hdi1jb250ZW50LXZlcmJvcmdlbicpO1xuICAgIH1cbiAgfVxufVxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuIl19