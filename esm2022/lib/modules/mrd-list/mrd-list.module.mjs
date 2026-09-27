import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrdListComponent } from './components/mrd-list/mrd-list.component';
import { MrdListItemComponent } from './components/mrd-list-item/mrd-list-item.component';
import { MrdListItemTemplateDirective } from './common/directive/mrd-list-item-template.directive';
import { MrdVirtualScrollModule } from '../mrd-virtual-scroll/mrd-virtual-scroll.module';
import * as i0 from "@angular/core";
export class MrdListModule {
    /** @nocollapse */ static ɵfac = function MrdListModule_Factory(t) { return new (t || MrdListModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdListModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
            MrdVirtualScrollModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdListModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MrdListComponent,
                    MrdListItemComponent,
                    MrdListItemTemplateDirective
                ],
                imports: [
                    CommonModule,
                    MrdVirtualScrollModule
                ],
                exports: [
                    MrdListComponent,
                    MrdListItemComponent,
                    MrdListItemTemplateDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdListModule, { declarations: [MrdListComponent,
        MrdListItemComponent,
        MrdListItemTemplateDirective], imports: [CommonModule,
        MrdVirtualScrollModule], exports: [MrdListComponent,
        MrdListItemComponent,
        MrdListItemTemplateDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1saXN0L21yZC1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQzs7QUFvQnpGLE1BQU0sT0FBTyxhQUFhOzBGQUFiLGFBQWE7MkZBQWIsYUFBYTsrRkFUdEIsWUFBWTtZQUNaLHNCQUFzQjs7dUZBUWIsYUFBYTtjQWhCekIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtvQkFDcEIsNEJBQTRCO2lCQUM3QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtvQkFDcEIsNEJBQTRCO2lCQUM3QjthQUNGOzt3RkFDWSxhQUFhLG1CQWR0QixnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLDRCQUE0QixhQUc1QixZQUFZO1FBQ1osc0JBQXNCLGFBR3RCLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNcmRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1saXN0L21yZC1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNcmRMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtbGlzdC1pdGVtL21yZC1saXN0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IE1yZExpc3RJdGVtVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2NvbW1vbi9kaXJlY3RpdmUvbXJkLWxpc3QtaXRlbS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTXJkVmlydHVhbFNjcm9sbE1vZHVsZSB9IGZyb20gJy4uL21yZC12aXJ0dWFsLXNjcm9sbC9tcmQtdmlydHVhbC1zY3JvbGwubW9kdWxlJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1yZExpc3RDb21wb25lbnQsXG4gICAgTXJkTGlzdEl0ZW1Db21wb25lbnQsXG4gICAgTXJkTGlzdEl0ZW1UZW1wbGF0ZURpcmVjdGl2ZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1yZFZpcnR1YWxTY3JvbGxNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE1yZExpc3RDb21wb25lbnQsXG4gICAgTXJkTGlzdEl0ZW1Db21wb25lbnQsXG4gICAgTXJkTGlzdEl0ZW1UZW1wbGF0ZURpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1yZExpc3RNb2R1bGUgeyB9XG4iXX0=