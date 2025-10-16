import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrdStepComponent } from './components/mrd-step/mrd-step.component';
import { MrdTabsModule } from '../mrd-tabs/mrd-tabs.module';
import { MrdStepperComponent } from './components/mrd-stepper/mrd-stepper.component';
import * as i0 from "@angular/core";
export class MrdStepperModule {
    /** @nocollapse */ static ɵfac = function MrdStepperModule_Factory(t) { return new (t || MrdStepperModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdStepperModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
            MrdTabsModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdStepperModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MrdStepComponent,
                    MrdStepperComponent
                ],
                imports: [
                    CommonModule,
                    MrdTabsModule
                ],
                exports: [
                    MrdStepComponent,
                    MrdStepperComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdStepperModule, { declarations: [MrdStepComponent,
        MrdStepperComponent], imports: [CommonModule,
        MrdTabsModule], exports: [MrdStepComponent,
        MrdStepperComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXN0ZXBwZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1zdGVwcGVyL21yZC1zdGVwcGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBaUJyRixNQUFNLE9BQU8sZ0JBQWdCOzZGQUFoQixnQkFBZ0I7MkZBQWhCLGdCQUFnQjsrRkFSekIsWUFBWTtZQUNaLGFBQWE7O3VGQU9KLGdCQUFnQjtjQWQ1QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGdCQUFnQjtvQkFDaEIsbUJBQW1CO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixhQUFhO2lCQUNkO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7b0JBQ2hCLG1CQUFtQjtpQkFDcEI7YUFDRjs7d0ZBQ1ksZ0JBQWdCLG1CQVp6QixnQkFBZ0I7UUFDaEIsbUJBQW1CLGFBR25CLFlBQVk7UUFDWixhQUFhLGFBR2IsZ0JBQWdCO1FBQ2hCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1yZFN0ZXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLXN0ZXAvbXJkLXN0ZXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXJkVGFic01vZHVsZSB9IGZyb20gJy4uL21yZC10YWJzL21yZC10YWJzLm1vZHVsZSc7XHJcbmltcG9ydCB7IE1yZFN0ZXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLXN0ZXBwZXIvbXJkLXN0ZXBwZXIuY29tcG9uZW50JztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTXJkU3RlcENvbXBvbmVudCxcclxuICAgIE1yZFN0ZXBwZXJDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1yZFRhYnNNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE1yZFN0ZXBDb21wb25lbnQsXHJcbiAgICBNcmRTdGVwcGVyQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkU3RlcHBlck1vZHVsZSB7IH1cclxuIl19