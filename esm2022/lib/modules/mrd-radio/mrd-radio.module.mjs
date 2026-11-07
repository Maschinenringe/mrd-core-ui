import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrdRadioGroupComponent } from './components/mrd-radio-group/mrd-radio-group.component';
import { MrdRadioButtonComponent } from './components/mrd-radio-button/mrd-radio-button.component';
import * as i0 from "@angular/core";
/**
 * Dieses Modul stellt die Mrd-Radio-Buttons zur Verfügung.
 *
 * @export MrdRadioGroupComponent, MrdRadioButtonComponent
 * @class MrdRadioModule
 */
export class MrdRadioModule {
    /** @nocollapse */ static ɵfac = function MrdRadioModule_Factory(t) { return new (t || MrdRadioModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdRadioModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdRadioModule, [{
        type: NgModule,
        args: [{
                declarations: [MrdRadioGroupComponent, MrdRadioButtonComponent],
                imports: [CommonModule],
                exports: [MrdRadioGroupComponent, MrdRadioButtonComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdRadioModule, { declarations: [MrdRadioGroupComponent, MrdRadioButtonComponent], imports: [CommonModule], exports: [MrdRadioGroupComponent, MrdRadioButtonComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXJhZGlvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtcmFkaW8vbXJkLXJhZGlvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQzs7QUFFbkc7Ozs7O0dBS0c7QUFNSCxNQUFNLE9BQU8sY0FBYzsyRkFBZCxjQUFjOzJGQUFkLGNBQWM7K0ZBSGYsWUFBWTs7dUZBR1gsY0FBYztjQUwxQixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsdUJBQXVCLENBQUM7Z0JBQy9ELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsdUJBQXVCLENBQUM7YUFDM0Q7O3dGQUNZLGNBQWMsbUJBSlYsc0JBQXNCLEVBQUUsdUJBQXVCLGFBQ3BELFlBQVksYUFDWixzQkFBc0IsRUFBRSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1yZFJhZGlvR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLXJhZGlvLWdyb3VwL21yZC1yYWRpby1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXJkUmFkaW9CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLXJhZGlvLWJ1dHRvbi9tcmQtcmFkaW8tYnV0dG9uLmNvbXBvbmVudCc7XG5cbi8qKlxuICogRGllc2VzIE1vZHVsIHN0ZWxsdCBkaWUgTXJkLVJhZGlvLUJ1dHRvbnMgenVyIFZlcmbDvGd1bmcuXG4gKlxuICogQGV4cG9ydCBNcmRSYWRpb0dyb3VwQ29tcG9uZW50LCBNcmRSYWRpb0J1dHRvbkNvbXBvbmVudFxuICogQGNsYXNzIE1yZFJhZGlvTW9kdWxlXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW01yZFJhZGlvR3JvdXBDb21wb25lbnQsIE1yZFJhZGlvQnV0dG9uQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtNcmRSYWRpb0dyb3VwQ29tcG9uZW50LCBNcmRSYWRpb0J1dHRvbkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTXJkUmFkaW9Nb2R1bGUgeyB9XG4iXX0=