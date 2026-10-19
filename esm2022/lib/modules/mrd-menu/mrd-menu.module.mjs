import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { MrdIconModule } from '../mrd-icon/mrd-icon.module';
import { MrdMenuComponent } from './components/mrd-menu/mrd-menu.component';
import { MrdMenuItemComponent } from './components/mrd-menu-item/mrd-menu-item.component';
import { MrdMenuDividerComponent } from './components/mrd-menu-divider/mrd-menu-divider.component';
import { MrdMenuTriggerDirective } from './common/directive/mrd-menu-trigger.directive';
import * as i0 from "@angular/core";
export class MrdMenuModule {
    /** @nocollapse */ static ɵfac = function MrdMenuModule_Factory(t) { return new (t || MrdMenuModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdMenuModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
            OverlayModule,
            MrdIconModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdMenuModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MrdMenuComponent,
                    MrdMenuItemComponent,
                    MrdMenuDividerComponent,
                    MrdMenuTriggerDirective
                ],
                imports: [
                    CommonModule,
                    OverlayModule,
                    MrdIconModule
                ],
                exports: [
                    MrdMenuComponent,
                    MrdMenuItemComponent,
                    MrdMenuDividerComponent,
                    MrdMenuTriggerDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdMenuModule, { declarations: [MrdMenuComponent,
        MrdMenuItemComponent,
        MrdMenuDividerComponent,
        MrdMenuTriggerDirective], imports: [CommonModule,
        OverlayModule,
        MrdIconModule], exports: [MrdMenuComponent,
        MrdMenuItemComponent,
        MrdMenuDividerComponent,
        MrdMenuTriggerDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLW1lbnUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1tZW51L21yZC1tZW51Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDOztBQXFCeEYsTUFBTSxPQUFPLGFBQWE7MEZBQWIsYUFBYTsyRkFBYixhQUFhOytGQVh0QixZQUFZO1lBQ1osYUFBYTtZQUNiLGFBQWE7O3VGQVNKLGFBQWE7Y0FuQnpCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osZ0JBQWdCO29CQUNoQixvQkFBb0I7b0JBQ3BCLHVCQUF1QjtvQkFDdkIsdUJBQXVCO2lCQUN4QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixhQUFhO29CQUNiLGFBQWE7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtvQkFDaEIsb0JBQW9CO29CQUNwQix1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtpQkFDeEI7YUFDRjs7d0ZBQ1ksYUFBYSxtQkFqQnRCLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsdUJBQXVCO1FBQ3ZCLHVCQUF1QixhQUd2QixZQUFZO1FBQ1osYUFBYTtRQUNiLGFBQWEsYUFHYixnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2Qix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBNcmRJY29uTW9kdWxlIH0gZnJvbSAnLi4vbXJkLWljb24vbXJkLWljb24ubW9kdWxlJztcbmltcG9ydCB7IE1yZE1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLW1lbnUvbXJkLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IE1yZE1lbnVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1tZW51LWl0ZW0vbXJkLW1lbnUtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXJkTWVudURpdmlkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXJkLW1lbnUtZGl2aWRlci9tcmQtbWVudS1kaXZpZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNcmRNZW51VHJpZ2dlckRpcmVjdGl2ZSB9IGZyb20gJy4vY29tbW9uL2RpcmVjdGl2ZS9tcmQtbWVudS10cmlnZ2VyLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1yZE1lbnVDb21wb25lbnQsXG4gICAgTXJkTWVudUl0ZW1Db21wb25lbnQsXG4gICAgTXJkTWVudURpdmlkZXJDb21wb25lbnQsXG4gICAgTXJkTWVudVRyaWdnZXJEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBPdmVybGF5TW9kdWxlLFxuICAgIE1yZEljb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE1yZE1lbnVDb21wb25lbnQsXG4gICAgTXJkTWVudUl0ZW1Db21wb25lbnQsXG4gICAgTXJkTWVudURpdmlkZXJDb21wb25lbnQsXG4gICAgTXJkTWVudVRyaWdnZXJEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNcmRNZW51TW9kdWxlIHsgfVxuIl19