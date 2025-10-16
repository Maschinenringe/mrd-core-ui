import { NgModule } from "@angular/core";
import { HideIfTruncatedDirective } from "./hide-if-truncated/hide-if-truncated.directive";
import { ToggleOnHoverDirective } from "./toggle-on-hover/toggle-on-hover.directive";
import { DecimalNumberDirective } from "./decimal-number-directive/decimal-number.directive";
import { TimeInputDirective } from "./time-input-directive/time-input.directive";
import * as i0 from "@angular/core";
export class MrdDirectiveModule {
    /** @nocollapse */ static ɵfac = function MrdDirectiveModule_Factory(t) { return new (t || MrdDirectiveModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdDirectiveModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({});
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdDirectiveModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    HideIfTruncatedDirective,
                    ToggleOnHoverDirective,
                    DecimalNumberDirective,
                    TimeInputDirective
                ],
                exports: [
                    HideIfTruncatedDirective,
                    ToggleOnHoverDirective,
                    DecimalNumberDirective,
                    TimeInputDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdDirectiveModule, { declarations: [HideIfTruncatedDirective,
        ToggleOnHoverDirective,
        DecimalNumberDirective,
        TimeInputDirective], exports: [HideIfTruncatedDirective,
        ToggleOnHoverDirective,
        DecimalNumberDirective,
        TimeInputDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWRpcmVjdGl2ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL2NvbW1vbi9kaXJlY3RpdmUvbXJkLWRpcmVjdGl2ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNyRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7QUFnQmpGLE1BQU0sT0FBTyxrQkFBa0I7K0ZBQWxCLGtCQUFrQjsyRkFBbEIsa0JBQWtCOzs7dUZBQWxCLGtCQUFrQjtjQWQ5QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLHdCQUF3QjtvQkFDeEIsc0JBQXNCO29CQUN0QixzQkFBc0I7b0JBQ3RCLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHdCQUF3QjtvQkFDeEIsc0JBQXNCO29CQUN0QixzQkFBc0I7b0JBQ3RCLGtCQUFrQjtpQkFDbkI7YUFDRjs7d0ZBQ1ksa0JBQWtCLG1CQVozQix3QkFBd0I7UUFDeEIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixrQkFBa0IsYUFHbEIsd0JBQXdCO1FBQ3hCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIaWRlSWZUcnVuY2F0ZWREaXJlY3RpdmUgfSBmcm9tIFwiLi9oaWRlLWlmLXRydW5jYXRlZC9oaWRlLWlmLXRydW5jYXRlZC5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgVG9nZ2xlT25Ib3ZlckRpcmVjdGl2ZSB9IGZyb20gXCIuL3RvZ2dsZS1vbi1ob3Zlci90b2dnbGUtb24taG92ZXIuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IERlY2ltYWxOdW1iZXJEaXJlY3RpdmUgfSBmcm9tIFwiLi9kZWNpbWFsLW51bWJlci1kaXJlY3RpdmUvZGVjaW1hbC1udW1iZXIuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IFRpbWVJbnB1dERpcmVjdGl2ZSB9IGZyb20gXCIuL3RpbWUtaW5wdXQtZGlyZWN0aXZlL3RpbWUtaW5wdXQuZGlyZWN0aXZlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgSGlkZUlmVHJ1bmNhdGVkRGlyZWN0aXZlLFxyXG4gICAgVG9nZ2xlT25Ib3ZlckRpcmVjdGl2ZSxcclxuICAgIERlY2ltYWxOdW1iZXJEaXJlY3RpdmUsXHJcbiAgICBUaW1lSW5wdXREaXJlY3RpdmVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEhpZGVJZlRydW5jYXRlZERpcmVjdGl2ZSxcclxuICAgIFRvZ2dsZU9uSG92ZXJEaXJlY3RpdmUsXHJcbiAgICBEZWNpbWFsTnVtYmVyRGlyZWN0aXZlLFxyXG4gICAgVGltZUlucHV0RGlyZWN0aXZlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkRGlyZWN0aXZlTW9kdWxlIHsgfVxyXG4iXX0=