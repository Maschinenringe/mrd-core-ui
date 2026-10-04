import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrdSortDirective } from './common/directive/mrd-sort.directive';
import { MrdSortHeaderComponent } from './components/mrd-sort-header/mrd-sort-header.component';
import * as i0 from "@angular/core";
export class MrdSortModule {
    /** @nocollapse */ static ɵfac = function MrdSortModule_Factory(t) { return new (t || MrdSortModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdSortModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdSortModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MrdSortDirective,
                    MrdSortHeaderComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    MrdSortDirective,
                    MrdSortHeaderComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdSortModule, { declarations: [MrdSortDirective,
        MrdSortHeaderComponent], imports: [CommonModule], exports: [MrdSortDirective,
        MrdSortHeaderComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXNvcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1zb3J0L21yZC1zb3J0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQzs7QUFlaEcsTUFBTSxPQUFPLGFBQWE7MEZBQWIsYUFBYTsyRkFBYixhQUFhOytGQVB0QixZQUFZOzt1RkFPSCxhQUFhO2NBYnpCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osZ0JBQWdCO29CQUNoQixzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7b0JBQ2hCLHNCQUFzQjtpQkFDdkI7YUFDRjs7d0ZBQ1ksYUFBYSxtQkFYdEIsZ0JBQWdCO1FBQ2hCLHNCQUFzQixhQUd0QixZQUFZLGFBR1osZ0JBQWdCO1FBQ2hCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTXJkU29ydERpcmVjdGl2ZSB9IGZyb20gJy4vY29tbW9uL2RpcmVjdGl2ZS9tcmQtc29ydC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTXJkU29ydEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtc29ydC1oZWFkZXIvbXJkLXNvcnQtaGVhZGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1yZFNvcnREaXJlY3RpdmUsXG4gICAgTXJkU29ydEhlYWRlckNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBNcmRTb3J0RGlyZWN0aXZlLFxuICAgIE1yZFNvcnRIZWFkZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNcmRTb3J0TW9kdWxlIHsgfVxuIl19