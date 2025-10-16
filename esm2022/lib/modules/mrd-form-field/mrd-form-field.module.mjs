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
import { MrdButtonModule } from '../mrd-button/mrd-button.module';
import { MrdDirectiveModule } from '../../common/directive/mrd-directive.module';
import { MrdDatepickerComponent } from './components/mrd-datepicker/mrd-datepicker.component';
import { MrdIconModule } from '../mrd-icon/mrd-icon.module';
import { MrdDateRangePickerComponent } from './components/mrd-date-range-picker/mrd-date-range-picker.component';
import { MrdDateRangeIndicatorDirective } from './common/directive/mrd-date-range-indicator.directive';
import { MrdTimepickerComponent } from './components/mrd-timepicker/mrd-timepicker.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "../mrd-tooltip/common/directive/tool-tip-renderer/tool-tip-renderer.directive";
import * as i4 from "../mrd-chip/components/mrd-chip/mrd-chip.component";
import * as i5 from "../mrd-button/components/mrd-button/mrd-button.component";
;
export class MrdFormFieldModule {
    /** @nocollapse */ static ɵfac = function MrdFormFieldModule_Factory(t) { return new (t || MrdFormFieldModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdFormFieldModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
            OverlayModule,
            MrdTooltipModule,
            MrdChipModule,
            MrdCheckboxModule,
            MrdButtonModule,
            MrdIconModule,
            MrdDirectiveModule] });
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
                    MrdDatePickerToggle,
                    MrdDatepickerComponent,
                    MrdDateRangePickerComponent,
                    MrdDateRangeIndicatorDirective,
                    MrdTimepickerComponent
                ],
                imports: [
                    CommonModule,
                    OverlayModule,
                    MrdTooltipModule,
                    MrdChipModule,
                    MrdCheckboxModule,
                    MrdButtonModule,
                    MrdIconModule,
                    MrdDirectiveModule
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
                    MrdDatePickerToggle,
                    MrdDateRangePickerComponent
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
        MrdDatePickerToggle,
        MrdDatepickerComponent,
        MrdDateRangePickerComponent,
        MrdDateRangeIndicatorDirective,
        MrdTimepickerComponent], imports: [CommonModule,
        OverlayModule,
        MrdTooltipModule,
        MrdChipModule,
        MrdCheckboxModule,
        MrdButtonModule,
        MrdIconModule,
        MrdDirectiveModule], exports: [MrdFormFieldComponent,
        MrdInputComponent,
        MrdSelectComponent,
        MrdSelectOptionComponent,
        MrdSelectCustomTriggerComponent,
        MrdErrorComponent,
        MrdHintComponent,
        MrdLabelComponent,
        MrdPrefixComponent,
        MrdSuffixComponent,
        MrdDatePickerToggle,
        MrdDateRangePickerComponent] }); })();
i0.ɵɵsetComponentScope(MrdSelectComponent, [i1.NgClass, i1.NgForOf, i1.NgIf, i2.CdkConnectedOverlay, i3.ToolTipRendererDirective, i4.MrdChipComponent, MrdSelectOptionComponent], []);
i0.ɵɵsetComponentScope(MrdDatepickerComponent, [i1.NgForOf, i1.NgIf, i5.MrdButtonComponent, MrdDateRangeIndicatorDirective], []);
i0.ɵɵsetComponentScope(MrdTimepickerComponent, [i1.NgForOf, i5.MrdButtonComponent, MrdFormFieldComponent,
    MrdSelectComponent,
    MrdSelectOptionComponent], []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWZvcm0tZmllbGQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL21yZC1mb3JtLWZpZWxkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdEcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDN0gsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDakgsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDdkcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0RBQXNELENBQUM7Ozs7Ozs7QUFIbEMsQ0FBQztBQWtEN0QsTUFBTSxPQUFPLGtCQUFrQjsrRkFBbEIsa0JBQWtCOzJGQUFsQixrQkFBa0I7K0ZBeEIzQixZQUFZO1lBQ1osYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixhQUFhO1lBQ2Isa0JBQWtCOzt1RkFpQlQsa0JBQWtCO2NBM0M5QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLHFCQUFxQjtvQkFDckIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLHdCQUF3QjtvQkFDeEIsK0JBQStCO29CQUMvQixpQkFBaUI7b0JBQ2pCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQixzQkFBc0I7b0JBQ3RCLDJCQUEyQjtvQkFDM0IsOEJBQThCO29CQUM5QixzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsZUFBZTtvQkFDZixhQUFhO29CQUNiLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHFCQUFxQjtvQkFDckIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLHdCQUF3QjtvQkFDeEIsK0JBQStCO29CQUMvQixpQkFBaUI7b0JBQ2pCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQiwyQkFBMkI7aUJBQzVCO2FBQ0Y7O3dGQUNZLGtCQUFrQixtQkF6QzNCLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLHdCQUF3QjtRQUN4QiwrQkFBK0I7UUFDL0IsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLDJCQUEyQjtRQUMzQiw4QkFBOEI7UUFDOUIsc0JBQXNCLGFBR3RCLFlBQVk7UUFDWixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGFBQWE7UUFDYixrQkFBa0IsYUFHbEIscUJBQXFCO1FBQ3JCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsd0JBQXdCO1FBQ3hCLCtCQUErQjtRQUMvQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQiwyQkFBMkI7dUJBcEMzQixrQkFBa0IsOEdBQ2xCLHdCQUF3Qjt1QkFReEIsc0JBQXNCLCtDQUV0Qiw4QkFBOEI7dUJBQzlCLHNCQUFzQixzQ0FkdEIscUJBQXFCO0lBRXJCLGtCQUFrQjtJQUNsQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNcmRGb3JtRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLWZvcm0tZmllbGQvbXJkLWZvcm0tZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXJkVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uL21yZC10b29sdGlwL21yZC10b29sdGlwLm1vZHVsZSc7XHJcbmltcG9ydCB7IE1yZEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1lcnJvci9tcmQtZXJyb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXJkSGludENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtaGludC9tcmQtaGludC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNcmRMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtbGFiZWwvbXJkLWxhYmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1yZFByZWZpeENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtcHJlZml4L21yZC1wcmVmaXguY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXJkU3VmZml4Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1zdWZmaXgvbXJkLXN1ZmZpeC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNcmREYXRlUGlja2VyVG9nZ2xlLCBNcmRJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtaW5wdXQvbXJkLWlucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1yZFNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtc2VsZWN0L21yZC1zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXJkQ2hpcE1vZHVsZSB9IGZyb20gJy4uL21yZC1jaGlwL21yZC1jaGlwLm1vZHVsZSc7XHJcbmltcG9ydCB7IE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtc2VsZWN0LW9wdGlvbi9tcmQtc2VsZWN0LW9wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNcmRTZWxlY3RDdXN0b21UcmlnZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1zZWxlY3QtY3VzdG9tLXRyaWdnZXIvbXJkLXNlbGVjdC1jdXN0b20tdHJpZ2dlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNcmRDaGVja2JveE1vZHVsZSB9IGZyb20gJy4uL21yZC1jaGVja2JveC9tcmQtY2hlY2tib3gubW9kdWxlJztcclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgTXJkQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vbXJkLWJ1dHRvbi9tcmQtYnV0dG9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IE1yZERpcmVjdGl2ZU1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9kaXJlY3RpdmUvbXJkLWRpcmVjdGl2ZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNcmREYXRlcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1kYXRlcGlja2VyL21yZC1kYXRlcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1yZEljb25Nb2R1bGUgfSBmcm9tICcuLi9tcmQtaWNvbi9tcmQtaWNvbi5tb2R1bGUnOztcclxuaW1wb3J0IHsgTXJkRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1kYXRlLXJhbmdlLXBpY2tlci9tcmQtZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXJkRGF0ZVJhbmdlSW5kaWNhdG9yRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21tb24vZGlyZWN0aXZlL21yZC1kYXRlLXJhbmdlLWluZGljYXRvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNcmRUaW1lcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC10aW1lcGlja2VyL21yZC10aW1lcGlja2VyLmNvbXBvbmVudCc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNcmRGb3JtRmllbGRDb21wb25lbnQsIFxyXG4gICAgTXJkSW5wdXRDb21wb25lbnQsXHJcbiAgICBNcmRTZWxlY3RDb21wb25lbnQsXHJcbiAgICBNcmRTZWxlY3RPcHRpb25Db21wb25lbnQsXHJcbiAgICBNcmRTZWxlY3RDdXN0b21UcmlnZ2VyQ29tcG9uZW50LFxyXG4gICAgTXJkRXJyb3JDb21wb25lbnQsIFxyXG4gICAgTXJkSGludENvbXBvbmVudCwgXHJcbiAgICBNcmRMYWJlbENvbXBvbmVudCwgXHJcbiAgICBNcmRQcmVmaXhDb21wb25lbnQsIFxyXG4gICAgTXJkU3VmZml4Q29tcG9uZW50LFxyXG4gICAgTXJkRGF0ZVBpY2tlclRvZ2dsZSxcclxuICAgIE1yZERhdGVwaWNrZXJDb21wb25lbnQsXHJcbiAgICBNcmREYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQsXHJcbiAgICBNcmREYXRlUmFuZ2VJbmRpY2F0b3JEaXJlY3RpdmUsXHJcbiAgICBNcmRUaW1lcGlja2VyQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBPdmVybGF5TW9kdWxlLFxyXG4gICAgTXJkVG9vbHRpcE1vZHVsZSxcclxuICAgIE1yZENoaXBNb2R1bGUsXHJcbiAgICBNcmRDaGVja2JveE1vZHVsZSxcclxuICAgIE1yZEJ1dHRvbk1vZHVsZSxcclxuICAgIE1yZEljb25Nb2R1bGUsXHJcbiAgICBNcmREaXJlY3RpdmVNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE1yZEZvcm1GaWVsZENvbXBvbmVudCwgXHJcbiAgICBNcmRJbnB1dENvbXBvbmVudCxcclxuICAgIE1yZFNlbGVjdENvbXBvbmVudCxcclxuICAgIE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudCxcclxuICAgIE1yZFNlbGVjdEN1c3RvbVRyaWdnZXJDb21wb25lbnQsXHJcbiAgICBNcmRFcnJvckNvbXBvbmVudCwgXHJcbiAgICBNcmRIaW50Q29tcG9uZW50LCBcclxuICAgIE1yZExhYmVsQ29tcG9uZW50LCBcclxuICAgIE1yZFByZWZpeENvbXBvbmVudCwgXHJcbiAgICBNcmRTdWZmaXhDb21wb25lbnQsXHJcbiAgICBNcmREYXRlUGlja2VyVG9nZ2xlLFxyXG4gICAgTXJkRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkRm9ybUZpZWxkTW9kdWxlIHsgfVxyXG4iXX0=