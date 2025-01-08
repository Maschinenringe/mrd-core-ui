import { NgModule } from "@angular/core";
import { MrdFlyOutComponent } from "./components/mrd-fly-out/mrd-fly-out.component";
import { CommonModule } from "@angular/common";
import { MrdButtonModule } from "../mrd-button/mrd-button.module";
import { MrdFlyOutCloseDirective } from "./common/directive/mrd-fly-out-close.directive";
import * as i0 from "@angular/core";
export class MrdFlyOutModule {
    /** @nocollapse */ static ɵfac = function MrdFlyOutModule_Factory(t) { return new (t || MrdFlyOutModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdFlyOutModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
            MrdButtonModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdFlyOutModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MrdFlyOutComponent,
                    MrdFlyOutCloseDirective
                ],
                imports: [
                    CommonModule,
                    MrdButtonModule
                ],
                exports: [
                    MrdFlyOutComponent,
                    MrdFlyOutCloseDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdFlyOutModule, { declarations: [MrdFlyOutComponent,
        MrdFlyOutCloseDirective], imports: [CommonModule,
        MrdButtonModule], exports: [MrdFlyOutComponent,
        MrdFlyOutCloseDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWZseS1vdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mbHktb3V0L21yZC1mbHktb3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBaUJ6RixNQUFNLE9BQU8sZUFBZTs0RkFBZixlQUFlOzJGQUFmLGVBQWU7K0ZBUnhCLFlBQVk7WUFDWixlQUFlOzt1RkFPTixlQUFlO2NBZDNCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osa0JBQWtCO29CQUNsQix1QkFBdUI7aUJBQ3hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGVBQWU7aUJBQ2hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxrQkFBa0I7b0JBQ2xCLHVCQUF1QjtpQkFDeEI7YUFDRjs7d0ZBQ1ksZUFBZSxtQkFaeEIsa0JBQWtCO1FBQ2xCLHVCQUF1QixhQUd2QixZQUFZO1FBQ1osZUFBZSxhQUdmLGtCQUFrQjtRQUNsQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1yZEZseU91dENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbXJkLWZseS1vdXQvbXJkLWZseS1vdXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgTXJkQnV0dG9uTW9kdWxlIH0gZnJvbSBcIi4uL21yZC1idXR0b24vbXJkLWJ1dHRvbi5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTXJkRmx5T3V0Q2xvc2VEaXJlY3RpdmUgfSBmcm9tIFwiLi9jb21tb24vZGlyZWN0aXZlL21yZC1mbHktb3V0LWNsb3NlLmRpcmVjdGl2ZVwiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNcmRGbHlPdXRDb21wb25lbnQsXHJcbiAgICBNcmRGbHlPdXRDbG9zZURpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTXJkQnV0dG9uTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNcmRGbHlPdXRDb21wb25lbnQsXHJcbiAgICBNcmRGbHlPdXRDbG9zZURpcmVjdGl2ZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZEZseU91dE1vZHVsZSB7IH1cclxuIl19