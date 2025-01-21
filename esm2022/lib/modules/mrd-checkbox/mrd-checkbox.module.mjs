import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrdCheckboxComponent } from './components/mrd-checkbox/mrd-checkbox.component';
import { MrdTooltipModule } from '../mrd-tooltip/mrd-tooltip.module';
import * as i0 from "@angular/core";
/**
 * Dieses Modul stellt den Mrd-Checkbox zur Verfügung.
 *
 * @export MrdCheckboxComponent
 * @class MrdCheckboxModule
 */
export class MrdCheckboxModule {
    /** @nocollapse */ static ɵfac = function MrdCheckboxModule_Factory(t) { return new (t || MrdCheckboxModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdCheckboxModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
            MrdTooltipModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdCheckboxModule, [{
        type: NgModule,
        args: [{
                declarations: [MrdCheckboxComponent],
                imports: [
                    CommonModule,
                    MrdTooltipModule
                ],
                exports: [MrdCheckboxComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdCheckboxModule, { declarations: [MrdCheckboxComponent], imports: [CommonModule,
        MrdTooltipModule], exports: [MrdCheckboxComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWNoZWNrYm94Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtY2hlY2tib3gvbXJkLWNoZWNrYm94Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFFckU7Ozs7O0dBS0c7QUFTSCxNQUFNLE9BQU8saUJBQWlCOzhGQUFqQixpQkFBaUI7MkZBQWpCLGlCQUFpQjsrRkFMMUIsWUFBWTtZQUNaLGdCQUFnQjs7dUZBSVAsaUJBQWlCO2NBUjdCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDcEMsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZ0JBQWdCO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNoQzs7d0ZBQ1ksaUJBQWlCLG1CQVBiLG9CQUFvQixhQUVqQyxZQUFZO1FBQ1osZ0JBQWdCLGFBRVIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTXJkQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLWNoZWNrYm94L21yZC1jaGVja2JveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNcmRUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vbXJkLXRvb2x0aXAvbXJkLXRvb2x0aXAubW9kdWxlJztcclxuXHJcbi8qKlxyXG4gKiBEaWVzZXMgTW9kdWwgc3RlbGx0IGRlbiBNcmQtQ2hlY2tib3ggenVyIFZlcmbDvGd1bmcuXHJcbiAqXHJcbiAqIEBleHBvcnQgTXJkQ2hlY2tib3hDb21wb25lbnRcclxuICogQGNsYXNzIE1yZENoZWNrYm94TW9kdWxlXHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW01yZENoZWNrYm94Q29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNcmRUb29sdGlwTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbTXJkQ2hlY2tib3hDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmRDaGVja2JveE1vZHVsZSB7IH1cclxuIl19