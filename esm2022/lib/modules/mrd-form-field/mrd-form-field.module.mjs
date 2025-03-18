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
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "../mrd-tooltip/common/directive/tool-tip-renderer/tool-tip-renderer.directive";
import * as i4 from "../mrd-chip/components/mrd-chip/mrd-chip.component";
import * as i5 from "../mrd-button/components/mrd-button/mrd-button.component";
export class MrdFormFieldModule {
    /** @nocollapse */ static ɵfac = function MrdFormFieldModule_Factory(t) { return new (t || MrdFormFieldModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdFormFieldModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
            OverlayModule,
            MrdTooltipModule,
            MrdChipModule,
            MrdCheckboxModule,
            MrdButtonModule] });
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
                    MrdButtonModule
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
        MrdButtonModule], exports: [MrdFormFieldComponent,
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
i0.ɵɵsetComponentScope(MrdSelectComponent, [i1.NgClass, i1.NgForOf, i1.NgIf, i2.CdkConnectedOverlay, i3.ToolTipRendererDirective, i4.MrdChipComponent, i5.MrdButtonComponent, MrdSelectOptionComponent], []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWZvcm0tZmllbGQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL21yZC1mb3JtLWZpZWxkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdEcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDN0gsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7OztBQXdDbEUsTUFBTSxPQUFPLGtCQUFrQjsrRkFBbEIsa0JBQWtCOzJGQUFsQixrQkFBa0I7K0ZBckIzQixZQUFZO1lBQ1osYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLGVBQWU7O3VGQWdCTixrQkFBa0I7Y0FwQzlCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1oscUJBQXFCO29CQUNyQixpQkFBaUI7b0JBQ2pCLGtCQUFrQjtvQkFDbEIsd0JBQXdCO29CQUN4QiwrQkFBK0I7b0JBQy9CLGlCQUFpQjtvQkFDakIsZ0JBQWdCO29CQUNoQixpQkFBaUI7b0JBQ2pCLGtCQUFrQjtvQkFDbEIsa0JBQWtCO29CQUNsQixtQkFBbUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsZUFBZTtpQkFDaEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHFCQUFxQjtvQkFDckIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLHdCQUF3QjtvQkFDeEIsK0JBQStCO29CQUMvQixpQkFBaUI7b0JBQ2pCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO2lCQUNwQjthQUNGOzt3RkFDWSxrQkFBa0IsbUJBbEMzQixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsK0JBQStCO1FBQy9CLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsbUJBQW1CLGFBR25CLFlBQVk7UUFDWixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsZUFBZSxhQUdmLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLHdCQUF3QjtRQUN4QiwrQkFBK0I7UUFDL0IsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixtQkFBbUI7dUJBN0JuQixrQkFBa0IscUlBQ2xCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1yZEZvcm1GaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtZm9ybS1maWVsZC9tcmQtZm9ybS1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNcmRUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vbXJkLXRvb2x0aXAvbXJkLXRvb2x0aXAubW9kdWxlJztcclxuaW1wb3J0IHsgTXJkRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLWVycm9yL21yZC1lcnJvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNcmRIaW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1oaW50L21yZC1oaW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1yZExhYmVsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1sYWJlbC9tcmQtbGFiZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXJkUHJlZml4Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1wcmVmaXgvbXJkLXByZWZpeC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNcmRTdWZmaXhDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLXN1ZmZpeC9tcmQtc3VmZml4LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1yZERhdGVQaWNrZXJUb2dnbGUsIE1yZElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1pbnB1dC9tcmQtaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXJkU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1zZWxlY3QvbXJkLXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNcmRDaGlwTW9kdWxlIH0gZnJvbSAnLi4vbXJkLWNoaXAvbXJkLWNoaXAubW9kdWxlJztcclxuaW1wb3J0IHsgTXJkU2VsZWN0T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1zZWxlY3Qtb3B0aW9uL21yZC1zZWxlY3Qtb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1yZFNlbGVjdEN1c3RvbVRyaWdnZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLXNlbGVjdC1jdXN0b20tdHJpZ2dlci9tcmQtc2VsZWN0LWN1c3RvbS10cmlnZ2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1yZENoZWNrYm94TW9kdWxlIH0gZnJvbSAnLi4vbXJkLWNoZWNrYm94L21yZC1jaGVja2JveC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBNcmRCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9tcmQtYnV0dG9uL21yZC1idXR0b24ubW9kdWxlJztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE1yZEZvcm1GaWVsZENvbXBvbmVudCwgXHJcbiAgICBNcmRJbnB1dENvbXBvbmVudCxcclxuICAgIE1yZFNlbGVjdENvbXBvbmVudCxcclxuICAgIE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudCxcclxuICAgIE1yZFNlbGVjdEN1c3RvbVRyaWdnZXJDb21wb25lbnQsXHJcbiAgICBNcmRFcnJvckNvbXBvbmVudCwgXHJcbiAgICBNcmRIaW50Q29tcG9uZW50LCBcclxuICAgIE1yZExhYmVsQ29tcG9uZW50LCBcclxuICAgIE1yZFByZWZpeENvbXBvbmVudCwgXHJcbiAgICBNcmRTdWZmaXhDb21wb25lbnQsXHJcbiAgICBNcmREYXRlUGlja2VyVG9nZ2xlXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBPdmVybGF5TW9kdWxlLFxyXG4gICAgTXJkVG9vbHRpcE1vZHVsZSxcclxuICAgIE1yZENoaXBNb2R1bGUsXHJcbiAgICBNcmRDaGVja2JveE1vZHVsZSxcclxuICAgIE1yZEJ1dHRvbk1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTXJkRm9ybUZpZWxkQ29tcG9uZW50LCBcclxuICAgIE1yZElucHV0Q29tcG9uZW50LFxyXG4gICAgTXJkU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgTXJkU2VsZWN0T3B0aW9uQ29tcG9uZW50LFxyXG4gICAgTXJkU2VsZWN0Q3VzdG9tVHJpZ2dlckNvbXBvbmVudCxcclxuICAgIE1yZEVycm9yQ29tcG9uZW50LCBcclxuICAgIE1yZEhpbnRDb21wb25lbnQsIFxyXG4gICAgTXJkTGFiZWxDb21wb25lbnQsIFxyXG4gICAgTXJkUHJlZml4Q29tcG9uZW50LCBcclxuICAgIE1yZFN1ZmZpeENvbXBvbmVudCxcclxuICAgIE1yZERhdGVQaWNrZXJUb2dnbGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmRGb3JtRmllbGRNb2R1bGUgeyB9XHJcbiJdfQ==