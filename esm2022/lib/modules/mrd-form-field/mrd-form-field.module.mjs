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
import * as i5 from "../mrd-button/components/mrd-button/mrd-button.component";
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
i0.ɵɵsetComponentScope(MrdSelectComponent, [i1.NgClass, i1.NgForOf, i1.NgIf, i2.CdkConnectedOverlay, i3.ToolTipRendererDirective, i4.MrdChipComponent, i5.MrdButtonComponent, MrdSelectOptionComponent], []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWZvcm0tZmllbGQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL21yZC1mb3JtLWZpZWxkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdEcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDN0gsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7OztBQXlDakYsTUFBTSxPQUFPLGtCQUFrQjsrRkFBbEIsa0JBQWtCOzJGQUFsQixrQkFBa0I7K0ZBdEIzQixZQUFZO1lBQ1osYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixrQkFBa0I7O3VGQWdCVCxrQkFBa0I7Y0FyQzlCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1oscUJBQXFCO29CQUNyQixpQkFBaUI7b0JBQ2pCLGtCQUFrQjtvQkFDbEIsd0JBQXdCO29CQUN4QiwrQkFBK0I7b0JBQy9CLGlCQUFpQjtvQkFDakIsZ0JBQWdCO29CQUNoQixpQkFBaUI7b0JBQ2pCLGtCQUFrQjtvQkFDbEIsa0JBQWtCO29CQUNsQixtQkFBbUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsZUFBZTtvQkFDZixrQkFBa0I7aUJBQ25CO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxxQkFBcUI7b0JBQ3JCLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQix3QkFBd0I7b0JBQ3hCLCtCQUErQjtvQkFDL0IsaUJBQWlCO29CQUNqQixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtpQkFDcEI7YUFDRjs7d0ZBQ1ksa0JBQWtCLG1CQW5DM0IscUJBQXFCO1FBQ3JCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsd0JBQXdCO1FBQ3hCLCtCQUErQjtRQUMvQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLG1CQUFtQixhQUduQixZQUFZO1FBQ1osYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixrQkFBa0IsYUFHbEIscUJBQXFCO1FBQ3JCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsd0JBQXdCO1FBQ3hCLCtCQUErQjtRQUMvQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLG1CQUFtQjt1QkE5Qm5CLGtCQUFrQixxSUFDbEIsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNcmRGb3JtRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLWZvcm0tZmllbGQvbXJkLWZvcm0tZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IE1yZFRvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi9tcmQtdG9vbHRpcC9tcmQtdG9vbHRpcC5tb2R1bGUnO1xuaW1wb3J0IHsgTXJkRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLWVycm9yL21yZC1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXJkSGludENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtaGludC9tcmQtaGludC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXJkTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLWxhYmVsL21yZC1sYWJlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXJkUHJlZml4Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1wcmVmaXgvbXJkLXByZWZpeC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXJkU3VmZml4Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1zdWZmaXgvbXJkLXN1ZmZpeC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXJkRGF0ZVBpY2tlclRvZ2dsZSwgTXJkSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLWlucHV0L21yZC1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXJkU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1zZWxlY3QvbXJkLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXJkQ2hpcE1vZHVsZSB9IGZyb20gJy4uL21yZC1jaGlwL21yZC1jaGlwLm1vZHVsZSc7XG5pbXBvcnQgeyBNcmRTZWxlY3RPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLXNlbGVjdC1vcHRpb24vbXJkLXNlbGVjdC1vcHRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE1yZFNlbGVjdEN1c3RvbVRyaWdnZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLXNlbGVjdC1jdXN0b20tdHJpZ2dlci9tcmQtc2VsZWN0LWN1c3RvbS10cmlnZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNcmRDaGVja2JveE1vZHVsZSB9IGZyb20gJy4uL21yZC1jaGVja2JveC9tcmQtY2hlY2tib3gubW9kdWxlJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBNcmRCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9tcmQtYnV0dG9uL21yZC1idXR0b24ubW9kdWxlJztcbmltcG9ydCB7IE1yZERpcmVjdGl2ZU1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9kaXJlY3RpdmUvbXJkLWRpcmVjdGl2ZS5tb2R1bGUnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTXJkRm9ybUZpZWxkQ29tcG9uZW50LCBcbiAgICBNcmRJbnB1dENvbXBvbmVudCxcbiAgICBNcmRTZWxlY3RDb21wb25lbnQsXG4gICAgTXJkU2VsZWN0T3B0aW9uQ29tcG9uZW50LFxuICAgIE1yZFNlbGVjdEN1c3RvbVRyaWdnZXJDb21wb25lbnQsXG4gICAgTXJkRXJyb3JDb21wb25lbnQsIFxuICAgIE1yZEhpbnRDb21wb25lbnQsIFxuICAgIE1yZExhYmVsQ29tcG9uZW50LCBcbiAgICBNcmRQcmVmaXhDb21wb25lbnQsIFxuICAgIE1yZFN1ZmZpeENvbXBvbmVudCxcbiAgICBNcmREYXRlUGlja2VyVG9nZ2xlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgT3ZlcmxheU1vZHVsZSxcbiAgICBNcmRUb29sdGlwTW9kdWxlLFxuICAgIE1yZENoaXBNb2R1bGUsXG4gICAgTXJkQ2hlY2tib3hNb2R1bGUsXG4gICAgTXJkQnV0dG9uTW9kdWxlLFxuICAgIE1yZERpcmVjdGl2ZU1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTXJkRm9ybUZpZWxkQ29tcG9uZW50LCBcbiAgICBNcmRJbnB1dENvbXBvbmVudCxcbiAgICBNcmRTZWxlY3RDb21wb25lbnQsXG4gICAgTXJkU2VsZWN0T3B0aW9uQ29tcG9uZW50LFxuICAgIE1yZFNlbGVjdEN1c3RvbVRyaWdnZXJDb21wb25lbnQsXG4gICAgTXJkRXJyb3JDb21wb25lbnQsIFxuICAgIE1yZEhpbnRDb21wb25lbnQsIFxuICAgIE1yZExhYmVsQ29tcG9uZW50LCBcbiAgICBNcmRQcmVmaXhDb21wb25lbnQsIFxuICAgIE1yZFN1ZmZpeENvbXBvbmVudCxcbiAgICBNcmREYXRlUGlja2VyVG9nZ2xlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTXJkRm9ybUZpZWxkTW9kdWxlIHsgfVxuIl19