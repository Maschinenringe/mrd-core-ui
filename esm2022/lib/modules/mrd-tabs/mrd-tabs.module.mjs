import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrdTabGroupComponent } from './components/mrd-tab-group/mrd-tab-group.component';
import { MrdTabComponent } from './components/mrd-tab/mrd-tab.component';
import { MatTabBodyPortal, MrdTabBodyComponent } from './components/mrd-tab-body/mrd-tab-body.component';
import * as i0 from "@angular/core";
export class MrdTabsModule {
    /** @nocollapse */ static ɵfac = function MrdTabsModule_Factory(t) { return new (t || MrdTabsModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdTabsModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule] });
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
                    CommonModule
                ],
                exports: [
                    MrdTabGroupComponent,
                    MrdTabComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdTabsModule, { declarations: [MrdTabGroupComponent,
        MrdTabComponent,
        MrdTabBodyComponent,
        MatTabBodyPortal], imports: [CommonModule], exports: [MrdTabGroupComponent,
        MrdTabComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXRhYnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10YWJzL21yZC10YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0RBQWtELENBQUM7O0FBbUJ6RyxNQUFNLE9BQU8sYUFBYTswRkFBYixhQUFhOzJGQUFiLGFBQWE7K0ZBUHRCLFlBQVk7O3VGQU9ILGFBQWE7Y0FmekIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixvQkFBb0I7b0JBQ3BCLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixnQkFBZ0I7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxvQkFBb0I7b0JBQ3BCLGVBQWU7aUJBQ2hCO2FBQ0Y7O3dGQUNZLGFBQWEsbUJBYnRCLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGdCQUFnQixhQUdoQixZQUFZLGFBR1osb0JBQW9CO1FBQ3BCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNcmRUYWJHcm91cENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtdGFiLWdyb3VwL21yZC10YWItZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXJkVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC10YWIvbXJkLXRhYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRUYWJCb2R5UG9ydGFsLCBNcmRUYWJCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC10YWItYm9keS9tcmQtdGFiLWJvZHkuY29tcG9uZW50JztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE1yZFRhYkdyb3VwQ29tcG9uZW50LFxyXG4gICAgTXJkVGFiQ29tcG9uZW50LFxyXG4gICAgTXJkVGFiQm9keUNvbXBvbmVudCxcclxuICAgIE1hdFRhYkJvZHlQb3J0YWxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTXJkVGFiR3JvdXBDb21wb25lbnQsXHJcbiAgICBNcmRUYWJDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmRUYWJzTW9kdWxlIHsgfVxyXG4iXX0=