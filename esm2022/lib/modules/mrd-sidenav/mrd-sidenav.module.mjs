import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrdSidenavContainerComponent } from './components/mrd-sidenav-container/mrd-sidenav-container.component';
import { MrdSidenavComponent } from './components/mrd-sidenav/mrd-sidenav.component';
import { MrdSidenavContentComponent } from './components/mrd-sidenav-content/mrd-sidenav-content.component';
import * as i0 from "@angular/core";
export class MrdSidenavModule {
    /** @nocollapse */ static ɵfac = function MrdSidenavModule_Factory(t) { return new (t || MrdSidenavModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdSidenavModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdSidenavModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MrdSidenavContainerComponent,
                    MrdSidenavComponent,
                    MrdSidenavContentComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    MrdSidenavContainerComponent,
                    MrdSidenavComponent,
                    MrdSidenavContentComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdSidenavModule, { declarations: [MrdSidenavContainerComponent,
        MrdSidenavComponent,
        MrdSidenavContentComponent], imports: [CommonModule], exports: [MrdSidenavContainerComponent,
        MrdSidenavComponent,
        MrdSidenavContentComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXNpZGVuYXYubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1zaWRlbmF2L21yZC1zaWRlbmF2Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUNsSCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQzs7QUFtQjVHLE1BQU0sT0FBTyxnQkFBZ0I7NkZBQWhCLGdCQUFnQjsyRkFBaEIsZ0JBQWdCOytGQVJ6QixZQUFZOzt1RkFRSCxnQkFBZ0I7Y0FmNUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWiw0QkFBNEI7b0JBQzVCLG1CQUFtQjtvQkFDbkIsMEJBQTBCO2lCQUMzQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsNEJBQTRCO29CQUM1QixtQkFBbUI7b0JBQ25CLDBCQUEwQjtpQkFDM0I7YUFDRjs7d0ZBQ1ksZ0JBQWdCLG1CQWJ6Qiw0QkFBNEI7UUFDNUIsbUJBQW1CO1FBQ25CLDBCQUEwQixhQUcxQixZQUFZLGFBR1osNEJBQTRCO1FBQzVCLG1CQUFtQjtRQUNuQiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1yZFNpZGVuYXZDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLXNpZGVuYXYtY29udGFpbmVyL21yZC1zaWRlbmF2LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXJkU2lkZW5hdkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtc2lkZW5hdi9tcmQtc2lkZW5hdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXJkU2lkZW5hdkNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLXNpZGVuYXYtY29udGVudC9tcmQtc2lkZW5hdi1jb250ZW50LmNvbXBvbmVudCc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNcmRTaWRlbmF2Q29udGFpbmVyQ29tcG9uZW50LFxuICAgIE1yZFNpZGVuYXZDb21wb25lbnQsXG4gICAgTXJkU2lkZW5hdkNvbnRlbnRDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTXJkU2lkZW5hdkNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBNcmRTaWRlbmF2Q29tcG9uZW50LFxuICAgIE1yZFNpZGVuYXZDb250ZW50Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTXJkU2lkZW5hdk1vZHVsZSB7IH1cbiJdfQ==