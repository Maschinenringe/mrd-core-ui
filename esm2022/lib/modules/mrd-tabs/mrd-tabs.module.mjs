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
                    MrdTabComponent,
                    MrdTabBodyComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdTabsModule, { declarations: [MrdTabGroupComponent,
        MrdTabComponent,
        MrdTabBodyComponent,
        MatTabBodyPortal], imports: [CommonModule], exports: [MrdTabGroupComponent,
        MrdTabComponent,
        MrdTabBodyComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXRhYnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10YWJzL21yZC10YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0RBQWtELENBQUM7O0FBb0J6RyxNQUFNLE9BQU8sYUFBYTswRkFBYixhQUFhOzJGQUFiLGFBQWE7K0ZBUnRCLFlBQVk7O3VGQVFILGFBQWE7Y0FoQnpCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osb0JBQW9CO29CQUNwQixlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asb0JBQW9CO29CQUNwQixlQUFlO29CQUNmLG1CQUFtQjtpQkFDcEI7YUFDRjs7d0ZBQ1ksYUFBYSxtQkFkdEIsb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsZ0JBQWdCLGFBR2hCLFlBQVksYUFHWixvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1yZFRhYkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC10YWItZ3JvdXAvbXJkLXRhYi1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNcmRUYWJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLXRhYi9tcmQtdGFiLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdFRhYkJvZHlQb3J0YWwsIE1yZFRhYkJvZHlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLXRhYi1ib2R5L21yZC10YWItYm9keS5jb21wb25lbnQnO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTXJkVGFiR3JvdXBDb21wb25lbnQsXHJcbiAgICBNcmRUYWJDb21wb25lbnQsXHJcbiAgICBNcmRUYWJCb2R5Q29tcG9uZW50LFxyXG4gICAgTWF0VGFiQm9keVBvcnRhbFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNcmRUYWJHcm91cENvbXBvbmVudCxcclxuICAgIE1yZFRhYkNvbXBvbmVudCxcclxuICAgIE1yZFRhYkJvZHlDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmRUYWJzTW9kdWxlIHsgfVxyXG4iXX0=