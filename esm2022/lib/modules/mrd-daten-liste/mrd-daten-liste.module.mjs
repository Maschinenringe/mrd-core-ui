import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MrdFormFieldModule } from '../mrd-form-field/mrd-form-field.module';
import { MrdIconModule } from '../mrd-icon/mrd-icon.module';
import { MrdListModule } from '../mrd-list/mrd-list.module';
import { MrdProgressSpinnerModule } from '../mrd-progress-spinner/mrd-progress-spinner.module';
import { MrdSortModule } from '../mrd-sort/mrd-sort.module';
import { MrdToggleSwitchModule } from '../mrd-toggle-switch/mrd-toggle-switch.module';
import { MrdTooltipModule } from '../mrd-tooltip/mrd-tooltip.module';
import { MrdDatenListeZelleDirective } from './common/directive/mrd-daten-liste-zelle.directive';
import { MrdDatenListeComponent } from './components/mrd-daten-liste/mrd-daten-liste.component';
import * as i0 from "@angular/core";
export class MrdDatenListeModule {
    /** @nocollapse */ static ɵfac = function MrdDatenListeModule_Factory(t) { return new (t || MrdDatenListeModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdDatenListeModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
            MrdFormFieldModule,
            MrdIconModule,
            MrdListModule,
            MrdProgressSpinnerModule,
            MrdSortModule,
            MrdToggleSwitchModule,
            MrdTooltipModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdDatenListeModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MrdDatenListeComponent,
                    MrdDatenListeZelleDirective
                ],
                imports: [
                    CommonModule,
                    MrdFormFieldModule,
                    MrdIconModule,
                    MrdListModule,
                    MrdProgressSpinnerModule,
                    MrdSortModule,
                    MrdToggleSwitchModule,
                    MrdTooltipModule
                ],
                exports: [
                    MrdDatenListeComponent,
                    MrdDatenListeZelleDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdDatenListeModule, { declarations: [MrdDatenListeComponent,
        MrdDatenListeZelleDirective], imports: [CommonModule,
        MrdFormFieldModule,
        MrdIconModule,
        MrdListModule,
        MrdProgressSpinnerModule,
        MrdSortModule,
        MrdToggleSwitchModule,
        MrdTooltipModule], exports: [MrdDatenListeComponent,
        MrdDatenListeZelleDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWRhdGVuLWxpc3RlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZGF0ZW4tbGlzdGUvbXJkLWRhdGVuLWxpc3RlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQzs7QUFzQmhHLE1BQU0sT0FBTyxtQkFBbUI7Z0dBQW5CLG1CQUFtQjsyRkFBbkIsbUJBQW1COytGQWQ1QixZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixhQUFhO1lBQ2Isd0JBQXdCO1lBQ3hCLGFBQWE7WUFDYixxQkFBcUI7WUFDckIsZ0JBQWdCOzt1RkFPUCxtQkFBbUI7Y0FwQi9CLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osc0JBQXNCO29CQUN0QiwyQkFBMkI7aUJBQzVCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixhQUFhO29CQUNiLHdCQUF3QjtvQkFDeEIsYUFBYTtvQkFDYixxQkFBcUI7b0JBQ3JCLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHNCQUFzQjtvQkFDdEIsMkJBQTJCO2lCQUM1QjthQUNGOzt3RkFDWSxtQkFBbUIsbUJBbEI1QixzQkFBc0I7UUFDdEIsMkJBQTJCLGFBRzNCLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGFBQWE7UUFDYix3QkFBd0I7UUFDeEIsYUFBYTtRQUNiLHFCQUFxQjtRQUNyQixnQkFBZ0IsYUFHaEIsc0JBQXNCO1FBQ3RCLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTXJkRm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnLi4vbXJkLWZvcm0tZmllbGQvbXJkLWZvcm0tZmllbGQubW9kdWxlJztcbmltcG9ydCB7IE1yZEljb25Nb2R1bGUgfSBmcm9tICcuLi9tcmQtaWNvbi9tcmQtaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTXJkTGlzdE1vZHVsZSB9IGZyb20gJy4uL21yZC1saXN0L21yZC1saXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBNcmRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi9tcmQtcHJvZ3Jlc3Mtc3Bpbm5lci9tcmQtcHJvZ3Jlc3Mtc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgTXJkU29ydE1vZHVsZSB9IGZyb20gJy4uL21yZC1zb3J0L21yZC1zb3J0Lm1vZHVsZSc7XG5pbXBvcnQgeyBNcmRUb2dnbGVTd2l0Y2hNb2R1bGUgfSBmcm9tICcuLi9tcmQtdG9nZ2xlLXN3aXRjaC9tcmQtdG9nZ2xlLXN3aXRjaC5tb2R1bGUnO1xuaW1wb3J0IHsgTXJkVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uL21yZC10b29sdGlwL21yZC10b29sdGlwLm1vZHVsZSc7XG5pbXBvcnQgeyBNcmREYXRlbkxpc3RlWmVsbGVEaXJlY3RpdmUgfSBmcm9tICcuL2NvbW1vbi9kaXJlY3RpdmUvbXJkLWRhdGVuLWxpc3RlLXplbGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNcmREYXRlbkxpc3RlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1kYXRlbi1saXN0ZS9tcmQtZGF0ZW4tbGlzdGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTXJkRGF0ZW5MaXN0ZUNvbXBvbmVudCxcbiAgICBNcmREYXRlbkxpc3RlWmVsbGVEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNcmRGb3JtRmllbGRNb2R1bGUsXG4gICAgTXJkSWNvbk1vZHVsZSxcbiAgICBNcmRMaXN0TW9kdWxlLFxuICAgIE1yZFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBNcmRTb3J0TW9kdWxlLFxuICAgIE1yZFRvZ2dsZVN3aXRjaE1vZHVsZSxcbiAgICBNcmRUb29sdGlwTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBNcmREYXRlbkxpc3RlQ29tcG9uZW50LFxuICAgIE1yZERhdGVuTGlzdGVaZWxsZURpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1yZERhdGVuTGlzdGVNb2R1bGUgeyB9XG4iXX0=