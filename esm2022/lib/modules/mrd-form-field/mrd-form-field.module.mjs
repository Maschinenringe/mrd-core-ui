import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrdFormFieldComponent } from './components/mrd-form-field/mrd-form-field.component';
import { MrdTooltipModule } from '../mrd-tooltip/mrd-tooltip.module';
import { MrdErrorComponent } from './components/mrd-error/mrd-error.component';
import { MrdHintComponent } from './components/mrd-hint/mrd-hint.component';
import { MrdLabelComponent } from './components/mrd-label/mrd-label.component';
import { MrdPrefixComponent } from './components/mrd-prefix/mrd-prefix.component';
import { MrdSuffixComponent } from './components/mrd-suffix/mrd-suffix.component';
import { MrdDatePickerToggle, MrdInputComponent } from './components/mrd-input/mrd-input.component';
import { MrdSelectComponent } from './components/mrd-select/mrd-select.component';
import { MrdChipModule } from '../mrd-chip/mrd-chip.module';
import { MrdSelectOptionComponent } from './components/mrd-select-option/mrd-select-option.component';
import { MrdSelectCustomTriggerComponent } from './components/mrd-select-custom-trigger/mrd-select-custom-trigger.component';
import { MrdCheckboxModule } from '../mrd-checkbox/mrd-checkbox.module';
import { OverlayModule } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "../mrd-tooltip/common/directive/tool-tip-renderer/tool-tip-renderer.directive";
import * as i4 from "../mrd-chip/components/mrd-chip/mrd-chip.component";
export class MrdFormFieldModule {
    /** @nocollapse */ static ɵfac = function MrdFormFieldModule_Factory(t) { return new (t || MrdFormFieldModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdFormFieldModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
            OverlayModule,
            MrdTooltipModule,
            MrdChipModule,
            MrdCheckboxModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdFormFieldModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MrdFormFieldComponent,
                    MrdInputComponent,
                    MrdSelectComponent,
                    MrdSelectOptionComponent,
                    MrdSelectCustomTriggerComponent,
                    MrdErrorComponent,
                    MrdHintComponent,
                    MrdLabelComponent,
                    MrdPrefixComponent,
                    MrdSuffixComponent,
                    MrdDatePickerToggle
                ],
                imports: [
                    CommonModule,
                    OverlayModule,
                    MrdTooltipModule,
                    MrdChipModule,
                    MrdCheckboxModule
                ],
                exports: [
                    MrdFormFieldComponent,
                    MrdInputComponent,
                    MrdSelectComponent,
                    MrdSelectOptionComponent,
                    MrdSelectCustomTriggerComponent,
                    MrdErrorComponent,
                    MrdHintComponent,
                    MrdLabelComponent,
                    MrdPrefixComponent,
                    MrdSuffixComponent,
                    MrdDatePickerToggle
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdFormFieldModule, { declarations: [MrdFormFieldComponent,
        MrdInputComponent,
        MrdSelectComponent,
        MrdSelectOptionComponent,
        MrdSelectCustomTriggerComponent,
        MrdErrorComponent,
        MrdHintComponent,
        MrdLabelComponent,
        MrdPrefixComponent,
        MrdSuffixComponent,
        MrdDatePickerToggle], imports: [CommonModule,
        OverlayModule,
        MrdTooltipModule,
        MrdChipModule,
        MrdCheckboxModule], exports: [MrdFormFieldComponent,
        MrdInputComponent,
        MrdSelectComponent,
        MrdSelectOptionComponent,
        MrdSelectCustomTriggerComponent,
        MrdErrorComponent,
        MrdHintComponent,
        MrdLabelComponent,
        MrdPrefixComponent,
        MrdSuffixComponent,
        MrdDatePickerToggle] }); })();
i0.ɵɵsetComponentScope(MrdSelectComponent, [i1.NgClass, i1.NgForOf, i1.NgIf, i2.CdkConnectedOverlay, i3.ToolTipRendererDirective, i4.MrdChipComponent, MrdSelectOptionComponent], []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWZvcm0tZmllbGQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL21yZC1mb3JtLWZpZWxkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdEcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDN0gsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7QUF1Q3JELE1BQU0sT0FBTyxrQkFBa0I7K0ZBQWxCLGtCQUFrQjsyRkFBbEIsa0JBQWtCOytGQXBCM0IsWUFBWTtZQUNaLGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLGlCQUFpQjs7dUZBZ0JSLGtCQUFrQjtjQW5DOUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixxQkFBcUI7b0JBQ3JCLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQix3QkFBd0I7b0JBQ3hCLCtCQUErQjtvQkFDL0IsaUJBQWlCO29CQUNqQixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsaUJBQWlCO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AscUJBQXFCO29CQUNyQixpQkFBaUI7b0JBQ2pCLGtCQUFrQjtvQkFDbEIsd0JBQXdCO29CQUN4QiwrQkFBK0I7b0JBQy9CLGlCQUFpQjtvQkFDakIsZ0JBQWdCO29CQUNoQixpQkFBaUI7b0JBQ2pCLGtCQUFrQjtvQkFDbEIsa0JBQWtCO29CQUNsQixtQkFBbUI7aUJBQ3BCO2FBQ0Y7O3dGQUNZLGtCQUFrQixtQkFqQzNCLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLHdCQUF3QjtRQUN4QiwrQkFBK0I7UUFDL0IsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixtQkFBbUIsYUFHbkIsWUFBWTtRQUNaLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLGlCQUFpQixhQUdqQixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsK0JBQStCO1FBQy9CLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsbUJBQW1CO3VCQTVCbkIsa0JBQWtCLDhHQUNsQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1yZEZvcm1GaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtZm9ybS1maWVsZC9tcmQtZm9ybS1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXJkVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uL21yZC10b29sdGlwL21yZC10b29sdGlwLm1vZHVsZSc7XG5pbXBvcnQgeyBNcmRFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtZXJyb3IvbXJkLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNcmRIaW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1oaW50L21yZC1oaW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNcmRMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtbGFiZWwvbXJkLWxhYmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNcmRQcmVmaXhDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLXByZWZpeC9tcmQtcHJlZml4LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNcmRTdWZmaXhDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLXN1ZmZpeC9tcmQtc3VmZml4LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNcmREYXRlUGlja2VyVG9nZ2xlLCBNcmRJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtaW5wdXQvbXJkLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNcmRTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLXNlbGVjdC9tcmQtc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNcmRDaGlwTW9kdWxlIH0gZnJvbSAnLi4vbXJkLWNoaXAvbXJkLWNoaXAubW9kdWxlJztcbmltcG9ydCB7IE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtc2VsZWN0LW9wdGlvbi9tcmQtc2VsZWN0LW9wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXJkU2VsZWN0Q3VzdG9tVHJpZ2dlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtc2VsZWN0LWN1c3RvbS10cmlnZ2VyL21yZC1zZWxlY3QtY3VzdG9tLXRyaWdnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1yZENoZWNrYm94TW9kdWxlIH0gZnJvbSAnLi4vbXJkLWNoZWNrYm94L21yZC1jaGVja2JveC5tb2R1bGUnO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1yZEZvcm1GaWVsZENvbXBvbmVudCwgXG4gICAgTXJkSW5wdXRDb21wb25lbnQsXG4gICAgTXJkU2VsZWN0Q29tcG9uZW50LFxuICAgIE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudCxcbiAgICBNcmRTZWxlY3RDdXN0b21UcmlnZ2VyQ29tcG9uZW50LFxuICAgIE1yZEVycm9yQ29tcG9uZW50LCBcbiAgICBNcmRIaW50Q29tcG9uZW50LCBcbiAgICBNcmRMYWJlbENvbXBvbmVudCwgXG4gICAgTXJkUHJlZml4Q29tcG9uZW50LCBcbiAgICBNcmRTdWZmaXhDb21wb25lbnQsXG4gICAgTXJkRGF0ZVBpY2tlclRvZ2dsZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgTXJkVG9vbHRpcE1vZHVsZSxcbiAgICBNcmRDaGlwTW9kdWxlLFxuICAgIE1yZENoZWNrYm94TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBNcmRGb3JtRmllbGRDb21wb25lbnQsIFxuICAgIE1yZElucHV0Q29tcG9uZW50LFxuICAgIE1yZFNlbGVjdENvbXBvbmVudCxcbiAgICBNcmRTZWxlY3RPcHRpb25Db21wb25lbnQsXG4gICAgTXJkU2VsZWN0Q3VzdG9tVHJpZ2dlckNvbXBvbmVudCxcbiAgICBNcmRFcnJvckNvbXBvbmVudCwgXG4gICAgTXJkSGludENvbXBvbmVudCwgXG4gICAgTXJkTGFiZWxDb21wb25lbnQsIFxuICAgIE1yZFByZWZpeENvbXBvbmVudCwgXG4gICAgTXJkU3VmZml4Q29tcG9uZW50LFxuICAgIE1yZERhdGVQaWNrZXJUb2dnbGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNcmRGb3JtRmllbGRNb2R1bGUgeyB9XG4iXX0=