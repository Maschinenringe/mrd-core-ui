import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrdVirtualScrollComponent } from './components/mrd-virtual-scroll/mrd-virtual-scroll.component';
import { MrdVirtualScrollItemDirective } from './common/directive/mrd-virtual-scroll-item.directive';
import * as i0 from "@angular/core";
export class MrdVirtualScrollModule {
    /** @nocollapse */ static ɵfac = function MrdVirtualScrollModule_Factory(t) { return new (t || MrdVirtualScrollModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdVirtualScrollModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdVirtualScrollModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MrdVirtualScrollComponent,
                    MrdVirtualScrollItemDirective
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    MrdVirtualScrollComponent,
                    MrdVirtualScrollItemDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdVirtualScrollModule, { declarations: [MrdVirtualScrollComponent,
        MrdVirtualScrollItemDirective], imports: [CommonModule], exports: [MrdVirtualScrollComponent,
        MrdVirtualScrollItemDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXZpcnR1YWwtc2Nyb2xsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtdmlydHVhbC1zY3JvbGwvbXJkLXZpcnR1YWwtc2Nyb2xsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7QUFpQnJHLE1BQU0sT0FBTyxzQkFBc0I7bUdBQXRCLHNCQUFzQjsyRkFBdEIsc0JBQXNCOytGQVAvQixZQUFZOzt1RkFPSCxzQkFBc0I7Y0FibEMsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWix5QkFBeUI7b0JBQ3pCLDZCQUE2QjtpQkFDOUI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHlCQUF5QjtvQkFDekIsNkJBQTZCO2lCQUM5QjthQUNGOzt3RkFDWSxzQkFBc0IsbUJBWC9CLHlCQUF5QjtRQUN6Qiw2QkFBNkIsYUFHN0IsWUFBWSxhQUdaLHlCQUF5QjtRQUN6Qiw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1yZFZpcnR1YWxTY3JvbGxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLXZpcnR1YWwtc2Nyb2xsL21yZC12aXJ0dWFsLXNjcm9sbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXJkVmlydHVhbFNjcm9sbEl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL2NvbW1vbi9kaXJlY3RpdmUvbXJkLXZpcnR1YWwtc2Nyb2xsLWl0ZW0uZGlyZWN0aXZlJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1yZFZpcnR1YWxTY3JvbGxDb21wb25lbnQsXG4gICAgTXJkVmlydHVhbFNjcm9sbEl0ZW1EaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTXJkVmlydHVhbFNjcm9sbENvbXBvbmVudCxcbiAgICBNcmRWaXJ0dWFsU2Nyb2xsSXRlbURpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1yZFZpcnR1YWxTY3JvbGxNb2R1bGUgeyB9XG4iXX0=