import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrdButtonComponent } from './components/mrd-button/mrd-button.component';
import { MrdProgressBarModule } from '../mrd-progress-bar/mrd-progress-bar.module';
import { MrdProgressSpinnerModule } from '../mrd-progress-spinner/mrd-progress-spinner.module';
import { MrdTooltipModule } from '../mrd-tooltip/mrd-tooltip.module';
import { MrdDirectiveModule } from '../../common/directive/mrd-directive.module';
import * as i0 from "@angular/core";
/**
 * Dieses Modul stellt den Mrd-Button zur Verfügung.
 *
 * @export MrdButtonComponent
 * @class MrdButtonModule
 */
export class MrdButtonModule {
    /** @nocollapse */ static ɵfac = function MrdButtonModule_Factory(t) { return new (t || MrdButtonModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdButtonModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
            MrdProgressBarModule,
            MrdProgressSpinnerModule,
            MrdTooltipModule,
            MrdDirectiveModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdButtonModule, [{
        type: NgModule,
        args: [{
                declarations: [MrdButtonComponent],
                imports: [
                    CommonModule,
                    MrdProgressBarModule,
                    MrdProgressSpinnerModule,
                    MrdTooltipModule,
                    MrdDirectiveModule
                ],
                exports: [MrdButtonComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdButtonModule, { declarations: [MrdButtonComponent], imports: [CommonModule,
        MrdProgressBarModule,
        MrdProgressSpinnerModule,
        MrdTooltipModule,
        MrdDirectiveModule], exports: [MrdButtonComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWJ1dHRvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWJ1dHRvbi9tcmQtYnV0dG9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7QUFFakY7Ozs7O0dBS0c7QUFZSCxNQUFNLE9BQU8sZUFBZTs0RkFBZixlQUFlOzJGQUFmLGVBQWU7K0ZBUnhCLFlBQVk7WUFDWixvQkFBb0I7WUFDcEIsd0JBQXdCO1lBQ3hCLGdCQUFnQjtZQUNoQixrQkFBa0I7O3VGQUlULGVBQWU7Y0FYM0IsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUNsQyxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixvQkFBb0I7b0JBQ3BCLHdCQUF3QjtvQkFDeEIsZ0JBQWdCO29CQUNoQixrQkFBa0I7aUJBQ25CO2dCQUNELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2FBQzlCOzt3RkFDWSxlQUFlLG1CQVZYLGtCQUFrQixhQUUvQixZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4QixnQkFBZ0I7UUFDaEIsa0JBQWtCLGFBRVYsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTXJkQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1idXR0b24vbXJkLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNcmRQcm9ncmVzc0Jhck1vZHVsZSB9IGZyb20gJy4uL21yZC1wcm9ncmVzcy1iYXIvbXJkLXByb2dyZXNzLWJhci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNcmRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi9tcmQtcHJvZ3Jlc3Mtc3Bpbm5lci9tcmQtcHJvZ3Jlc3Mtc3Bpbm5lci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNcmRUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vbXJkLXRvb2x0aXAvbXJkLXRvb2x0aXAubW9kdWxlJztcclxuaW1wb3J0IHsgTXJkRGlyZWN0aXZlTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2RpcmVjdGl2ZS9tcmQtZGlyZWN0aXZlLm1vZHVsZSc7XHJcblxyXG4vKipcclxuICogRGllc2VzIE1vZHVsIHN0ZWxsdCBkZW4gTXJkLUJ1dHRvbiB6dXIgVmVyZsO8Z3VuZy5cclxuICpcclxuICogQGV4cG9ydCBNcmRCdXR0b25Db21wb25lbnRcclxuICogQGNsYXNzIE1yZEJ1dHRvbk1vZHVsZVxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtNcmRCdXR0b25Db21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1yZFByb2dyZXNzQmFyTW9kdWxlLFxyXG4gICAgTXJkUHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxyXG4gICAgTXJkVG9vbHRpcE1vZHVsZSxcclxuICAgIE1yZERpcmVjdGl2ZU1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW01yZEJ1dHRvbkNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZEJ1dHRvbk1vZHVsZSB7IH1cclxuIl19