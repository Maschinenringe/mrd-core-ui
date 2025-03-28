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
            MrdCheckboxModule,
            MrdButtonModule,
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
                    MrdDatePickerToggle
                ],
                imports: [
                    CommonModule,
                    OverlayModule,
                    MrdTooltipModule,
                    MrdChipModule,
                    MrdCheckboxModule,
                    MrdButtonModule,
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
        MrdCheckboxModule,
        MrdButtonModule,
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
        MrdDatePickerToggle] }); })();
i0.ɵɵsetComponentScope(MrdSelectComponent, [i1.NgClass, i1.NgForOf, i1.NgIf, i2.CdkConnectedOverlay, i3.ToolTipRendererDirective, i4.MrdChipComponent, MrdSelectOptionComponent], []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWZvcm0tZmllbGQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL21yZC1mb3JtLWZpZWxkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdEcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDN0gsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7O0FBeUNqRixNQUFNLE9BQU8sa0JBQWtCOytGQUFsQixrQkFBa0I7MkZBQWxCLGtCQUFrQjsrRkF0QjNCLFlBQVk7WUFDWixhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsZUFBZTtZQUNmLGtCQUFrQjs7dUZBZ0JULGtCQUFrQjtjQXJDOUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixxQkFBcUI7b0JBQ3JCLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQix3QkFBd0I7b0JBQ3hCLCtCQUErQjtvQkFDL0IsaUJBQWlCO29CQUNqQixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixlQUFlO29CQUNmLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHFCQUFxQjtvQkFDckIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLHdCQUF3QjtvQkFDeEIsK0JBQStCO29CQUMvQixpQkFBaUI7b0JBQ2pCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO2lCQUNwQjthQUNGOzt3RkFDWSxrQkFBa0IsbUJBbkMzQixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsK0JBQStCO1FBQy9CLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsbUJBQW1CLGFBR25CLFlBQVk7UUFDWixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGtCQUFrQixhQUdsQixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsK0JBQStCO1FBQy9CLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsbUJBQW1CO3VCQTlCbkIsa0JBQWtCLDhHQUNsQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNcmRGb3JtRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLWZvcm0tZmllbGQvbXJkLWZvcm0tZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXJkVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uL21yZC10b29sdGlwL21yZC10b29sdGlwLm1vZHVsZSc7XHJcbmltcG9ydCB7IE1yZEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1lcnJvci9tcmQtZXJyb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXJkSGludENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtaGludC9tcmQtaGludC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNcmRMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtbGFiZWwvbXJkLWxhYmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1yZFByZWZpeENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtcHJlZml4L21yZC1wcmVmaXguY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXJkU3VmZml4Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1zdWZmaXgvbXJkLXN1ZmZpeC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNcmREYXRlUGlja2VyVG9nZ2xlLCBNcmRJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtaW5wdXQvbXJkLWlucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1yZFNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtc2VsZWN0L21yZC1zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXJkQ2hpcE1vZHVsZSB9IGZyb20gJy4uL21yZC1jaGlwL21yZC1jaGlwLm1vZHVsZSc7XHJcbmltcG9ydCB7IE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtc2VsZWN0LW9wdGlvbi9tcmQtc2VsZWN0LW9wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNcmRTZWxlY3RDdXN0b21UcmlnZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1zZWxlY3QtY3VzdG9tLXRyaWdnZXIvbXJkLXNlbGVjdC1jdXN0b20tdHJpZ2dlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNcmRDaGVja2JveE1vZHVsZSB9IGZyb20gJy4uL21yZC1jaGVja2JveC9tcmQtY2hlY2tib3gubW9kdWxlJztcclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgTXJkQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vbXJkLWJ1dHRvbi9tcmQtYnV0dG9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IE1yZERpcmVjdGl2ZU1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9kaXJlY3RpdmUvbXJkLWRpcmVjdGl2ZS5tb2R1bGUnO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTXJkRm9ybUZpZWxkQ29tcG9uZW50LCBcclxuICAgIE1yZElucHV0Q29tcG9uZW50LFxyXG4gICAgTXJkU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgTXJkU2VsZWN0T3B0aW9uQ29tcG9uZW50LFxyXG4gICAgTXJkU2VsZWN0Q3VzdG9tVHJpZ2dlckNvbXBvbmVudCxcclxuICAgIE1yZEVycm9yQ29tcG9uZW50LCBcclxuICAgIE1yZEhpbnRDb21wb25lbnQsIFxyXG4gICAgTXJkTGFiZWxDb21wb25lbnQsIFxyXG4gICAgTXJkUHJlZml4Q29tcG9uZW50LCBcclxuICAgIE1yZFN1ZmZpeENvbXBvbmVudCxcclxuICAgIE1yZERhdGVQaWNrZXJUb2dnbGVcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE92ZXJsYXlNb2R1bGUsXHJcbiAgICBNcmRUb29sdGlwTW9kdWxlLFxyXG4gICAgTXJkQ2hpcE1vZHVsZSxcclxuICAgIE1yZENoZWNrYm94TW9kdWxlLFxyXG4gICAgTXJkQnV0dG9uTW9kdWxlLFxyXG4gICAgTXJkRGlyZWN0aXZlTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNcmRGb3JtRmllbGRDb21wb25lbnQsIFxyXG4gICAgTXJkSW5wdXRDb21wb25lbnQsXHJcbiAgICBNcmRTZWxlY3RDb21wb25lbnQsXHJcbiAgICBNcmRTZWxlY3RPcHRpb25Db21wb25lbnQsXHJcbiAgICBNcmRTZWxlY3RDdXN0b21UcmlnZ2VyQ29tcG9uZW50LFxyXG4gICAgTXJkRXJyb3JDb21wb25lbnQsIFxyXG4gICAgTXJkSGludENvbXBvbmVudCwgXHJcbiAgICBNcmRMYWJlbENvbXBvbmVudCwgXHJcbiAgICBNcmRQcmVmaXhDb21wb25lbnQsIFxyXG4gICAgTXJkU3VmZml4Q29tcG9uZW50LFxyXG4gICAgTXJkRGF0ZVBpY2tlclRvZ2dsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZEZvcm1GaWVsZE1vZHVsZSB7IH1cclxuIl19