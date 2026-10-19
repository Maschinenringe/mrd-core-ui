import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrdFormFieldModule } from '../mrd-form-field/mrd-form-field.module';
import { MrdIconModule } from '../mrd-icon/mrd-icon.module';
import { MrdTooltipModule } from '../mrd-tooltip/mrd-tooltip.module';
import { MrdSButtonModule } from '../../s-modules/mrd-s-button/mrd-s-button.module';
import { MrdUploadComponent } from './components/mrd-upload/mrd-upload.component';
import * as i0 from "@angular/core";
export class MrdUploadModule {
    /** @nocollapse */ static ɵfac = function MrdUploadModule_Factory(t) { return new (t || MrdUploadModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdUploadModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
            MrdFormFieldModule,
            MrdIconModule,
            MrdTooltipModule,
            MrdSButtonModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdUploadModule, [{
        type: NgModule,
        args: [{
                declarations: [MrdUploadComponent],
                imports: [
                    CommonModule,
                    MrdFormFieldModule,
                    MrdIconModule,
                    MrdTooltipModule,
                    MrdSButtonModule
                ],
                exports: [MrdUploadComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdUploadModule, { declarations: [MrdUploadComponent], imports: [CommonModule,
        MrdFormFieldModule,
        MrdIconModule,
        MrdTooltipModule,
        MrdSButtonModule], exports: [MrdUploadComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXVwbG9hZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLXVwbG9hZC9tcmQtdXBsb2FkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDcEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7O0FBYWxGLE1BQU0sT0FBTyxlQUFlOzRGQUFmLGVBQWU7MkZBQWYsZUFBZTsrRkFSeEIsWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLGdCQUFnQjs7dUZBSVAsZUFBZTtjQVgzQixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2xDLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDOUI7O3dGQUNZLGVBQWUsbUJBVlgsa0JBQWtCLGFBRS9CLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixnQkFBZ0IsYUFFUixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1yZEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJy4uL21yZC1mb3JtLWZpZWxkL21yZC1mb3JtLWZpZWxkLm1vZHVsZSc7XG5pbXBvcnQgeyBNcmRJY29uTW9kdWxlIH0gZnJvbSAnLi4vbXJkLWljb24vbXJkLWljb24ubW9kdWxlJztcbmltcG9ydCB7IE1yZFRvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi9tcmQtdG9vbHRpcC9tcmQtdG9vbHRpcC5tb2R1bGUnO1xuaW1wb3J0IHsgTXJkU0J1dHRvbk1vZHVsZSB9IGZyb20gJy4uLy4uL3MtbW9kdWxlcy9tcmQtcy1idXR0b24vbXJkLXMtYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBNcmRVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLXVwbG9hZC9tcmQtdXBsb2FkLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW01yZFVwbG9hZENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTXJkRm9ybUZpZWxkTW9kdWxlLFxuICAgIE1yZEljb25Nb2R1bGUsXG4gICAgTXJkVG9vbHRpcE1vZHVsZSxcbiAgICBNcmRTQnV0dG9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtNcmRVcGxvYWRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1yZFVwbG9hZE1vZHVsZSB7IH1cbiJdfQ==