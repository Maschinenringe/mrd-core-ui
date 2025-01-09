import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrdChipComponent } from './components/mrd-chip/mrd-chip.component';
import { MrdIconModule } from '../mrd-icon/mrd-icon.module';
import { MrdButtonModule } from '../mrd-button/mrd-button.module';
import { MrdTooltipModule } from '../mrd-tooltip/mrd-tooltip.module';
import * as i0 from "@angular/core";
/**
 * Dieses Modul stellt den Mrd-Chip zur Verfügung.
 *
 * @export MrdChipComponent
 * @class MrdChipModule
 */
export class MrdChipModule {
    /** @nocollapse */ static ɵfac = function MrdChipModule_Factory(t) { return new (t || MrdChipModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdChipModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
            MrdIconModule,
            MrdButtonModule,
            MrdTooltipModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdChipModule, [{
        type: NgModule,
        args: [{
                declarations: [MrdChipComponent],
                imports: [
                    CommonModule,
                    MrdIconModule,
                    MrdButtonModule,
                    MrdTooltipModule
                ],
                exports: [MrdChipComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdChipModule, { declarations: [MrdChipComponent], imports: [CommonModule,
        MrdIconModule,
        MrdButtonModule,
        MrdTooltipModule], exports: [MrdChipComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWNoaXAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1jaGlwL21yZC1jaGlwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQUVyRTs7Ozs7R0FLRztBQVdILE1BQU0sT0FBTyxhQUFhOzBGQUFiLGFBQWE7MkZBQWIsYUFBYTsrRkFQdEIsWUFBWTtZQUNaLGFBQWE7WUFDYixlQUFlO1lBQ2YsZ0JBQWdCOzt1RkFJUCxhQUFhO2NBVnpCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDaEMsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixlQUFlO29CQUNmLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDNUI7O3dGQUNZLGFBQWEsbUJBVFQsZ0JBQWdCLGFBRTdCLFlBQVk7UUFDWixhQUFhO1FBQ2IsZUFBZTtRQUNmLGdCQUFnQixhQUVSLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1yZENoaXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLWNoaXAvbXJkLWNoaXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXJkSWNvbk1vZHVsZSB9IGZyb20gJy4uL21yZC1pY29uL21yZC1pY29uLm1vZHVsZSc7XHJcbmltcG9ydCB7IE1yZEJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL21yZC1idXR0b24vbXJkLWJ1dHRvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNcmRUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vbXJkLXRvb2x0aXAvbXJkLXRvb2x0aXAubW9kdWxlJztcclxuXHJcbi8qKlxyXG4gKiBEaWVzZXMgTW9kdWwgc3RlbGx0IGRlbiBNcmQtQ2hpcCB6dXIgVmVyZsO8Z3VuZy5cclxuICpcclxuICogQGV4cG9ydCBNcmRDaGlwQ29tcG9uZW50XHJcbiAqIEBjbGFzcyBNcmRDaGlwTW9kdWxlXHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW01yZENoaXBDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1yZEljb25Nb2R1bGUsXHJcbiAgICBNcmRCdXR0b25Nb2R1bGUsXHJcbiAgICBNcmRUb29sdGlwTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbTXJkQ2hpcENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZENoaXBNb2R1bGUgeyB9XHJcbiJdfQ==