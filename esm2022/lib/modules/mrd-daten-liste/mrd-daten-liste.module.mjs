import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MrdButtonModule } from '../mrd-button/mrd-button.module';
import { MrdButtonToggleModule } from '../mrd-button-toggle/mrd-button-toggle.module';
import { MrdFormFieldModule } from '../mrd-form-field/mrd-form-field.module';
import { MrdIconModule } from '../mrd-icon/mrd-icon.module';
import { MrdListModule } from '../mrd-list/mrd-list.module';
import { MrdProgressSpinnerModule } from '../mrd-progress-spinner/mrd-progress-spinner.module';
import { MrdSortModule } from '../mrd-sort/mrd-sort.module';
import { MrdToggleSwitchModule } from '../mrd-toggle-switch/mrd-toggle-switch.module';
import { MrdTooltipModule } from '../mrd-tooltip/mrd-tooltip.module';
import { MrdDatenListeZelleDirective } from './common/directive/mrd-daten-liste-zelle.directive';
import { MrdDatenListeInaktivSchalterComponent } from './components/mrd-daten-liste-inaktiv-schalter/mrd-daten-liste-inaktiv-schalter.component';
import { MrdDatenListeComponent } from './components/mrd-daten-liste/mrd-daten-liste.component';
import * as i0 from "@angular/core";
export class MrdDatenListeModule {
    /** @nocollapse */ static ɵfac = function MrdDatenListeModule_Factory(t) { return new (t || MrdDatenListeModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdDatenListeModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
            MrdButtonModule,
            MrdButtonToggleModule,
            MrdFormFieldModule,
            MrdIconModule,
            MrdListModule,
            MrdProgressSpinnerModule,
            MrdSortModule,
            MrdToggleSwitchModule,
            MrdTooltipModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdDatenListeModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MrdDatenListeComponent,
                    MrdDatenListeInaktivSchalterComponent,
                    MrdDatenListeZelleDirective
                ],
                imports: [
                    CommonModule,
                    MrdButtonModule,
                    MrdButtonToggleModule,
                    MrdFormFieldModule,
                    MrdIconModule,
                    MrdListModule,
                    MrdProgressSpinnerModule,
                    MrdSortModule,
                    MrdToggleSwitchModule,
                    MrdTooltipModule
                ],
                exports: [
                    MrdDatenListeComponent,
                    MrdDatenListeInaktivSchalterComponent,
                    MrdDatenListeZelleDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdDatenListeModule, { declarations: [MrdDatenListeComponent,
        MrdDatenListeInaktivSchalterComponent,
        MrdDatenListeZelleDirective], imports: [CommonModule,
        MrdButtonModule,
        MrdButtonToggleModule,
        MrdFormFieldModule,
        MrdIconModule,
        MrdListModule,
        MrdProgressSpinnerModule,
        MrdSortModule,
        MrdToggleSwitchModule,
        MrdTooltipModule], exports: [MrdDatenListeComponent,
        MrdDatenListeInaktivSchalterComponent,
        MrdDatenListeZelleDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWRhdGVuLWxpc3RlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZGF0ZW4tbGlzdGUvbXJkLWRhdGVuLWxpc3RlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDakcsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sMEZBQTBGLENBQUM7QUFDakosT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0RBQXdELENBQUM7O0FBMEJoRyxNQUFNLE9BQU8sbUJBQW1CO2dHQUFuQixtQkFBbUI7MkZBQW5CLG1CQUFtQjsrRkFqQjVCLFlBQVk7WUFDWixlQUFlO1lBQ2YscUJBQXFCO1lBQ3JCLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsYUFBYTtZQUNiLHdCQUF3QjtZQUN4QixhQUFhO1lBQ2IscUJBQXFCO1lBQ3JCLGdCQUFnQjs7dUZBUVAsbUJBQW1CO2NBeEIvQixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLHNCQUFzQjtvQkFDdEIscUNBQXFDO29CQUNyQywyQkFBMkI7aUJBQzVCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YscUJBQXFCO29CQUNyQixrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYix3QkFBd0I7b0JBQ3hCLGFBQWE7b0JBQ2IscUJBQXFCO29CQUNyQixnQkFBZ0I7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxzQkFBc0I7b0JBQ3RCLHFDQUFxQztvQkFDckMsMkJBQTJCO2lCQUM1QjthQUNGOzt3RkFDWSxtQkFBbUIsbUJBdEI1QixzQkFBc0I7UUFDdEIscUNBQXFDO1FBQ3JDLDJCQUEyQixhQUczQixZQUFZO1FBQ1osZUFBZTtRQUNmLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGFBQWE7UUFDYix3QkFBd0I7UUFDeEIsYUFBYTtRQUNiLHFCQUFxQjtRQUNyQixnQkFBZ0IsYUFHaEIsc0JBQXNCO1FBQ3RCLHFDQUFxQztRQUNyQywyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1yZEJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL21yZC1idXR0b24vbXJkLWJ1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTXJkQnV0dG9uVG9nZ2xlTW9kdWxlIH0gZnJvbSAnLi4vbXJkLWJ1dHRvbi10b2dnbGUvbXJkLWJ1dHRvbi10b2dnbGUubW9kdWxlJztcbmltcG9ydCB7IE1yZEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJy4uL21yZC1mb3JtLWZpZWxkL21yZC1mb3JtLWZpZWxkLm1vZHVsZSc7XG5pbXBvcnQgeyBNcmRJY29uTW9kdWxlIH0gZnJvbSAnLi4vbXJkLWljb24vbXJkLWljb24ubW9kdWxlJztcbmltcG9ydCB7IE1yZExpc3RNb2R1bGUgfSBmcm9tICcuLi9tcmQtbGlzdC9tcmQtbGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgTXJkUHJvZ3Jlc3NTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vbXJkLXByb2dyZXNzLXNwaW5uZXIvbXJkLXByb2dyZXNzLXNwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IE1yZFNvcnRNb2R1bGUgfSBmcm9tICcuLi9tcmQtc29ydC9tcmQtc29ydC5tb2R1bGUnO1xuaW1wb3J0IHsgTXJkVG9nZ2xlU3dpdGNoTW9kdWxlIH0gZnJvbSAnLi4vbXJkLXRvZ2dsZS1zd2l0Y2gvbXJkLXRvZ2dsZS1zd2l0Y2gubW9kdWxlJztcbmltcG9ydCB7IE1yZFRvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi9tcmQtdG9vbHRpcC9tcmQtdG9vbHRpcC5tb2R1bGUnO1xuaW1wb3J0IHsgTXJkRGF0ZW5MaXN0ZVplbGxlRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21tb24vZGlyZWN0aXZlL21yZC1kYXRlbi1saXN0ZS16ZWxsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTXJkRGF0ZW5MaXN0ZUluYWt0aXZTY2hhbHRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtZGF0ZW4tbGlzdGUtaW5ha3Rpdi1zY2hhbHRlci9tcmQtZGF0ZW4tbGlzdGUtaW5ha3Rpdi1zY2hhbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXJkRGF0ZW5MaXN0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtZGF0ZW4tbGlzdGUvbXJkLWRhdGVuLWxpc3RlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1yZERhdGVuTGlzdGVDb21wb25lbnQsXG4gICAgTXJkRGF0ZW5MaXN0ZUluYWt0aXZTY2hhbHRlckNvbXBvbmVudCxcbiAgICBNcmREYXRlbkxpc3RlWmVsbGVEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNcmRCdXR0b25Nb2R1bGUsXG4gICAgTXJkQnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIE1yZEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNcmRJY29uTW9kdWxlLFxuICAgIE1yZExpc3RNb2R1bGUsXG4gICAgTXJkUHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgIE1yZFNvcnRNb2R1bGUsXG4gICAgTXJkVG9nZ2xlU3dpdGNoTW9kdWxlLFxuICAgIE1yZFRvb2x0aXBNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE1yZERhdGVuTGlzdGVDb21wb25lbnQsXG4gICAgTXJkRGF0ZW5MaXN0ZUluYWt0aXZTY2hhbHRlckNvbXBvbmVudCxcbiAgICBNcmREYXRlbkxpc3RlWmVsbGVEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNcmREYXRlbkxpc3RlTW9kdWxlIHsgfVxuIl19