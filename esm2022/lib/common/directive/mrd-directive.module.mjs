import { NgModule } from "@angular/core";
import { HideIfTruncatedDirective } from "./hide-if-truncated/hide-if-truncated.directive";
import { ToggleOnHoverDirective } from "./toggle-on-hover/toggle-on-hover.directive";
import { DecimalNumberDirective } from "./decimal-number-directive/decimal-number.directive";
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
                    DecimalNumberDirective
                ],
                exports: [
                    HideIfTruncatedDirective,
                    ToggleOnHoverDirective,
                    DecimalNumberDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdDirectiveModule, { declarations: [HideIfTruncatedDirective,
        ToggleOnHoverDirective,
        DecimalNumberDirective], exports: [HideIfTruncatedDirective,
        ToggleOnHoverDirective,
        DecimalNumberDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWRpcmVjdGl2ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL2NvbW1vbi9kaXJlY3RpdmUvbXJkLWRpcmVjdGl2ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNyRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7QUFjN0YsTUFBTSxPQUFPLGtCQUFrQjsrRkFBbEIsa0JBQWtCOzJGQUFsQixrQkFBa0I7Ozt1RkFBbEIsa0JBQWtCO2NBWjlCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osd0JBQXdCO29CQUN4QixzQkFBc0I7b0JBQ3RCLHNCQUFzQjtpQkFDdkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHdCQUF3QjtvQkFDeEIsc0JBQXNCO29CQUN0QixzQkFBc0I7aUJBQ3ZCO2FBQ0Y7O3dGQUNZLGtCQUFrQixtQkFWM0Isd0JBQXdCO1FBQ3hCLHNCQUFzQjtRQUN0QixzQkFBc0IsYUFHdEIsd0JBQXdCO1FBQ3hCLHNCQUFzQjtRQUN0QixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEhpZGVJZlRydW5jYXRlZERpcmVjdGl2ZSB9IGZyb20gXCIuL2hpZGUtaWYtdHJ1bmNhdGVkL2hpZGUtaWYtdHJ1bmNhdGVkLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBUb2dnbGVPbkhvdmVyRGlyZWN0aXZlIH0gZnJvbSBcIi4vdG9nZ2xlLW9uLWhvdmVyL3RvZ2dsZS1vbi1ob3Zlci5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgRGVjaW1hbE51bWJlckRpcmVjdGl2ZSB9IGZyb20gXCIuL2RlY2ltYWwtbnVtYmVyLWRpcmVjdGl2ZS9kZWNpbWFsLW51bWJlci5kaXJlY3RpdmVcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBIaWRlSWZUcnVuY2F0ZWREaXJlY3RpdmUsXHJcbiAgICBUb2dnbGVPbkhvdmVyRGlyZWN0aXZlLFxyXG4gICAgRGVjaW1hbE51bWJlckRpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgSGlkZUlmVHJ1bmNhdGVkRGlyZWN0aXZlLFxyXG4gICAgVG9nZ2xlT25Ib3ZlckRpcmVjdGl2ZSxcclxuICAgIERlY2ltYWxOdW1iZXJEaXJlY3RpdmVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmREaXJlY3RpdmVNb2R1bGUgeyB9XHJcbiJdfQ==