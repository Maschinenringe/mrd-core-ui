import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrdTabGroupComponent } from './components/mrd-tab-group/mrd-tab-group.component';
import { MrdTabComponent } from './components/mrd-tab/mrd-tab.component';
import { MatTabBodyPortal, MrdTabBodyComponent } from './components/mrd-tab-body/mrd-tab-body.component';
import { MrdTooltipModule } from '../mrd-tooltip/mrd-tooltip.module';
import * as i0 from "@angular/core";
export class MrdTabsModule {
    /** @nocollapse */ static ɵfac = function MrdTabsModule_Factory(t) { return new (t || MrdTabsModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdTabsModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
            MrdTooltipModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdTabsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MrdTabGroupComponent,
                    MrdTabComponent,
                    MrdTabBodyComponent,
                    MatTabBodyPortal
                ],
                imports: [
                    CommonModule,
                    MrdTooltipModule
                ],
                exports: [
                    MrdTabGroupComponent,
                    MrdTabComponent,
                    MrdTabBodyComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdTabsModule, { declarations: [MrdTabGroupComponent,
        MrdTabComponent,
        MrdTabBodyComponent,
        MatTabBodyPortal], imports: [CommonModule,
        MrdTooltipModule], exports: [MrdTabGroupComponent,
        MrdTabComponent,
        MrdTabBodyComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXRhYnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10YWJzL21yZC10YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDekcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBcUJyRSxNQUFNLE9BQU8sYUFBYTswRkFBYixhQUFhOzJGQUFiLGFBQWE7K0ZBVHRCLFlBQVk7WUFDWixnQkFBZ0I7O3VGQVFQLGFBQWE7Y0FqQnpCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osb0JBQW9CO29CQUNwQixlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixnQkFBZ0I7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxvQkFBb0I7b0JBQ3BCLGVBQWU7b0JBQ2YsbUJBQW1CO2lCQUNwQjthQUNGOzt3RkFDWSxhQUFhLG1CQWZ0QixvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixnQkFBZ0IsYUFHaEIsWUFBWTtRQUNaLGdCQUFnQixhQUdoQixvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1yZFRhYkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC10YWItZ3JvdXAvbXJkLXRhYi1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNcmRUYWJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLXRhYi9tcmQtdGFiLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdFRhYkJvZHlQb3J0YWwsIE1yZFRhYkJvZHlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLXRhYi1ib2R5L21yZC10YWItYm9keS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNcmRUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vbXJkLXRvb2x0aXAvbXJkLXRvb2x0aXAubW9kdWxlJztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE1yZFRhYkdyb3VwQ29tcG9uZW50LFxyXG4gICAgTXJkVGFiQ29tcG9uZW50LFxyXG4gICAgTXJkVGFiQm9keUNvbXBvbmVudCxcclxuICAgIE1hdFRhYkJvZHlQb3J0YWxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1yZFRvb2x0aXBNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE1yZFRhYkdyb3VwQ29tcG9uZW50LFxyXG4gICAgTXJkVGFiQ29tcG9uZW50LFxyXG4gICAgTXJkVGFiQm9keUNvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZFRhYnNNb2R1bGUgeyB9XHJcbiJdfQ==