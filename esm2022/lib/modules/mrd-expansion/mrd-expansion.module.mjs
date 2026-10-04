import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrdAccordionComponent } from './components/mrd-accordion/mrd-accordion.component';
import { MrdExpansionPanelComponent } from './components/mrd-expansion-panel/mrd-expansion-panel.component';
import { MrdExpansionPanelHeaderComponent } from './components/mrd-expansion-panel-header/mrd-expansion-panel-header.component';
import { MrdExpansionPanelContentDirective } from './common/directive/mrd-expansion-panel-content.directive';
import * as i0 from "@angular/core";
export class MrdExpansionModule {
    /** @nocollapse */ static ɵfac = function MrdExpansionModule_Factory(t) { return new (t || MrdExpansionModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdExpansionModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdExpansionModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MrdAccordionComponent,
                    MrdExpansionPanelComponent,
                    MrdExpansionPanelHeaderComponent,
                    MrdExpansionPanelContentDirective
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    MrdAccordionComponent,
                    MrdExpansionPanelComponent,
                    MrdExpansionPanelHeaderComponent,
                    MrdExpansionPanelContentDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdExpansionModule, { declarations: [MrdAccordionComponent,
        MrdExpansionPanelComponent,
        MrdExpansionPanelHeaderComponent,
        MrdExpansionPanelContentDirective], imports: [CommonModule], exports: [MrdAccordionComponent,
        MrdExpansionPanelComponent,
        MrdExpansionPanelHeaderComponent,
        MrdExpansionPanelContentDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWV4cGFuc2lvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWV4cGFuc2lvbi9tcmQtZXhwYW5zaW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUM1RyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUNoSSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwwREFBMEQsQ0FBQzs7QUFtQjdHLE1BQU0sT0FBTyxrQkFBa0I7K0ZBQWxCLGtCQUFrQjsyRkFBbEIsa0JBQWtCOytGQVQzQixZQUFZOzt1RkFTSCxrQkFBa0I7Y0FqQjlCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1oscUJBQXFCO29CQUNyQiwwQkFBMEI7b0JBQzFCLGdDQUFnQztvQkFDaEMsaUNBQWlDO2lCQUNsQztnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AscUJBQXFCO29CQUNyQiwwQkFBMEI7b0JBQzFCLGdDQUFnQztvQkFDaEMsaUNBQWlDO2lCQUNsQzthQUNGOzt3RkFDWSxrQkFBa0IsbUJBZjNCLHFCQUFxQjtRQUNyQiwwQkFBMEI7UUFDMUIsZ0NBQWdDO1FBQ2hDLGlDQUFpQyxhQUdqQyxZQUFZLGFBR1oscUJBQXFCO1FBQ3JCLDBCQUEwQjtRQUMxQixnQ0FBZ0M7UUFDaEMsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNcmRBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLWFjY29yZGlvbi9tcmQtYWNjb3JkaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNcmRFeHBhbnNpb25QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtZXhwYW5zaW9uLXBhbmVsL21yZC1leHBhbnNpb24tcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IE1yZEV4cGFuc2lvblBhbmVsSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1leHBhbnNpb24tcGFuZWwtaGVhZGVyL21yZC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNcmRFeHBhbnNpb25QYW5lbENvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL2NvbW1vbi9kaXJlY3RpdmUvbXJkLWV4cGFuc2lvbi1wYW5lbC1jb250ZW50LmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1yZEFjY29yZGlvbkNvbXBvbmVudCxcbiAgICBNcmRFeHBhbnNpb25QYW5lbENvbXBvbmVudCxcbiAgICBNcmRFeHBhbnNpb25QYW5lbEhlYWRlckNvbXBvbmVudCxcbiAgICBNcmRFeHBhbnNpb25QYW5lbENvbnRlbnREaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTXJkQWNjb3JkaW9uQ29tcG9uZW50LFxuICAgIE1yZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50LFxuICAgIE1yZEV4cGFuc2lvblBhbmVsSGVhZGVyQ29tcG9uZW50LFxuICAgIE1yZEV4cGFuc2lvblBhbmVsQ29udGVudERpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1yZEV4cGFuc2lvbk1vZHVsZSB7IH1cbiJdfQ==