import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrdTooltipModule } from '../../modules/mrd-tooltip/mrd-tooltip.module';
import { MrdDirectiveModule } from '../../common/directive/mrd-directive.module';
import { MrdProgressBarModule } from '../../modules/mrd-progress-bar/mrd-progress-bar.module';
import { MrdProgressSpinnerModule } from '../../modules/mrd-progress-spinner/mrd-progress-spinner.module';
import { MrdSButtonComponent } from './components/mrd-s-button/mrd-s-button.component';
import { MrdIconGroupComponent } from '../../common/components/mrd-icon-group/mrd-icon-group.component';
import * as i0 from "@angular/core";
export class MrdSButtonModule {
    /** @nocollapse */ static ɵfac = function MrdSButtonModule_Factory(t) { return new (t || MrdSButtonModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdSButtonModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
            MrdTooltipModule,
            MrdDirectiveModule,
            MrdProgressBarModule,
            MrdProgressSpinnerModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdSButtonModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MrdSButtonComponent
                ],
                imports: [
                    CommonModule,
                    MrdTooltipModule,
                    MrdDirectiveModule,
                    MrdProgressBarModule,
                    MrdProgressSpinnerModule,
                    MrdIconGroupComponent
                ],
                exports: [
                    MrdSButtonComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdSButtonModule, { declarations: [MrdSButtonComponent], imports: [CommonModule,
        MrdTooltipModule,
        MrdDirectiveModule,
        MrdProgressBarModule,
        MrdProgressSpinnerModule,
        MrdIconGroupComponent], exports: [MrdSButtonComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXMtYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvcy1tb2R1bGVzL21yZC1zLWJ1dHRvbi9tcmQtcy1idXR0b24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDOztBQW9CeEcsTUFBTSxPQUFPLGdCQUFnQjs2RkFBaEIsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7K0ZBWHpCLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLG9CQUFvQjtZQUNwQix3QkFBd0I7O3VGQU9mLGdCQUFnQjtjQWhCNUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixtQkFBbUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsa0JBQWtCO29CQUNsQixvQkFBb0I7b0JBQ3BCLHdCQUF3QjtvQkFDeEIscUJBQXFCO2lCQUN0QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsbUJBQW1CO2lCQUNwQjthQUNGOzt3RkFDWSxnQkFBZ0IsbUJBZHpCLG1CQUFtQixhQUduQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLHFCQUFxQixhQUdyQixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNcmRUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9tcmQtdG9vbHRpcC9tcmQtdG9vbHRpcC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNcmREaXJlY3RpdmVNb2R1bGUgfSBmcm9tICcuLi8uLi9jb21tb24vZGlyZWN0aXZlL21yZC1kaXJlY3RpdmUubW9kdWxlJztcclxuaW1wb3J0IHsgTXJkUHJvZ3Jlc3NCYXJNb2R1bGUgfSBmcm9tICcuLi8uLi9tb2R1bGVzL21yZC1wcm9ncmVzcy1iYXIvbXJkLXByb2dyZXNzLWJhci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNcmRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi9tb2R1bGVzL21yZC1wcm9ncmVzcy1zcGlubmVyL21yZC1wcm9ncmVzcy1zcGlubmVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IE1yZFNCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLXMtYnV0dG9uL21yZC1zLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNcmRJY29uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21tb24vY29tcG9uZW50cy9tcmQtaWNvbi1ncm91cC9tcmQtaWNvbi1ncm91cC5jb21wb25lbnQnO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTXJkU0J1dHRvbkNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTXJkVG9vbHRpcE1vZHVsZSxcclxuICAgIE1yZERpcmVjdGl2ZU1vZHVsZSxcclxuICAgIE1yZFByb2dyZXNzQmFyTW9kdWxlLFxyXG4gICAgTXJkUHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxyXG4gICAgTXJkSWNvbkdyb3VwQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNcmRTQnV0dG9uQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkU0J1dHRvbk1vZHVsZSB7IH1cclxuIl19