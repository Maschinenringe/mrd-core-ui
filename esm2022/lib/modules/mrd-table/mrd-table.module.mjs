import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { MrdTableComponent } from './components/mrd-table/mrd-table.component';
import { MrdFooterRowComponent, MrdHeaderRowComponent, MrdRowComponent } from './components/mrd-row/mrd-row.component';
import { MrdCellDefDirective, MrdCellDirective, MrdColumnDefDirective, MrdFooterCellDefDirective, MrdFooterCellDirective, MrdHeaderCellDefDirective, MrdHeaderCellDirective } from './common/directive/mrd-cell.directive';
import { MrdFooterRowDefDirective, MrdHeaderRowDefDirective, MrdNoDataRowDirective, MrdRowDefDirective } from './common/directive/mrd-row-def.directive';
import { MrdTableVirtualScrollDirective } from './common/directive/mrd-table-virtual-scroll.directive';
import * as i0 from "@angular/core";
const DEKLARATIONEN = [
    MrdTableComponent,
    MrdHeaderRowComponent,
    MrdRowComponent,
    MrdFooterRowComponent,
    MrdColumnDefDirective,
    MrdHeaderCellDefDirective,
    MrdCellDefDirective,
    MrdFooterCellDefDirective,
    MrdHeaderCellDirective,
    MrdCellDirective,
    MrdFooterCellDirective,
    MrdHeaderRowDefDirective,
    MrdRowDefDirective,
    MrdFooterRowDefDirective,
    MrdNoDataRowDirective,
    MrdTableVirtualScrollDirective
];
/** Tabelle auf Basis der CDK-Tabelle; sortiert wird mit dem MrdSortModule */
export class MrdTableModule {
    /** @nocollapse */ static ɵfac = function MrdTableModule_Factory(t) { return new (t || MrdTableModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdTableModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule,
            CdkTableModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdTableModule, [{
        type: NgModule,
        args: [{
                declarations: DEKLARATIONEN,
                imports: [
                    CommonModule,
                    CdkTableModule
                ],
                exports: DEKLARATIONEN
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdTableModule, { declarations: [MrdTableComponent,
        MrdHeaderRowComponent,
        MrdRowComponent,
        MrdFooterRowComponent,
        MrdColumnDefDirective,
        MrdHeaderCellDefDirective,
        MrdCellDefDirective,
        MrdFooterCellDefDirective,
        MrdHeaderCellDirective,
        MrdCellDirective,
        MrdFooterCellDirective,
        MrdHeaderRowDefDirective,
        MrdRowDefDirective,
        MrdFooterRowDefDirective,
        MrdNoDataRowDirective,
        MrdTableVirtualScrollDirective], imports: [CommonModule,
        CdkTableModule], exports: [MrdTableComponent,
        MrdHeaderRowComponent,
        MrdRowComponent,
        MrdFooterRowComponent,
        MrdColumnDefDirective,
        MrdHeaderCellDefDirective,
        MrdCellDefDirective,
        MrdFooterCellDefDirective,
        MrdHeaderCellDirective,
        MrdCellDirective,
        MrdFooterCellDirective,
        MrdHeaderRowDefDirective,
        MrdRowDefDirective,
        MrdFooterRowDefDirective,
        MrdNoDataRowDirective,
        MrdTableVirtualScrollDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtdGFibGUvbXJkLXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3ZILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRSx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzNOLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsRUFBRSxxQkFBcUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3pKLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDOztBQUV2RyxNQUFNLGFBQWEsR0FBRztJQUNwQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQiw4QkFBOEI7Q0FDL0IsQ0FBQztBQUVGLDZFQUE2RTtBQVM3RSxNQUFNLE9BQU8sY0FBYzsyRkFBZCxjQUFjOzJGQUFkLGNBQWM7K0ZBTHZCLFlBQVk7WUFDWixjQUFjOzt1RkFJTCxjQUFjO2NBUjFCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsYUFBYTtnQkFDM0IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osY0FBYztpQkFDZjtnQkFDRCxPQUFPLEVBQUUsYUFBYTthQUN2Qjs7d0ZBQ1ksY0FBYyxtQkEzQnpCLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsZUFBZTtRQUNmLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIsc0JBQXNCO1FBQ3RCLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsd0JBQXdCO1FBQ3hCLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIscUJBQXFCO1FBQ3JCLDhCQUE4QixhQU81QixZQUFZO1FBQ1osY0FBYyxhQXZCaEIsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixzQkFBc0I7UUFDdEIsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0Qix3QkFBd0I7UUFDeEIsa0JBQWtCO1FBQ2xCLHdCQUF3QjtRQUN4QixxQkFBcUI7UUFDckIsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDZGtUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBNcmRUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tcmQtdGFibGUvbXJkLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNcmRGb290ZXJSb3dDb21wb25lbnQsIE1yZEhlYWRlclJvd0NvbXBvbmVudCwgTXJkUm93Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21yZC1yb3cvbXJkLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXJkQ2VsbERlZkRpcmVjdGl2ZSwgTXJkQ2VsbERpcmVjdGl2ZSwgTXJkQ29sdW1uRGVmRGlyZWN0aXZlLCBNcmRGb290ZXJDZWxsRGVmRGlyZWN0aXZlLCBNcmRGb290ZXJDZWxsRGlyZWN0aXZlLCBNcmRIZWFkZXJDZWxsRGVmRGlyZWN0aXZlLCBNcmRIZWFkZXJDZWxsRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21tb24vZGlyZWN0aXZlL21yZC1jZWxsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNcmRGb290ZXJSb3dEZWZEaXJlY3RpdmUsIE1yZEhlYWRlclJvd0RlZkRpcmVjdGl2ZSwgTXJkTm9EYXRhUm93RGlyZWN0aXZlLCBNcmRSb3dEZWZEaXJlY3RpdmUgfSBmcm9tICcuL2NvbW1vbi9kaXJlY3RpdmUvbXJkLXJvdy1kZWYuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1yZFRhYmxlVmlydHVhbFNjcm9sbERpcmVjdGl2ZSB9IGZyb20gJy4vY29tbW9uL2RpcmVjdGl2ZS9tcmQtdGFibGUtdmlydHVhbC1zY3JvbGwuZGlyZWN0aXZlJztcblxuY29uc3QgREVLTEFSQVRJT05FTiA9IFtcbiAgTXJkVGFibGVDb21wb25lbnQsXG4gIE1yZEhlYWRlclJvd0NvbXBvbmVudCxcbiAgTXJkUm93Q29tcG9uZW50LFxuICBNcmRGb290ZXJSb3dDb21wb25lbnQsXG4gIE1yZENvbHVtbkRlZkRpcmVjdGl2ZSxcbiAgTXJkSGVhZGVyQ2VsbERlZkRpcmVjdGl2ZSxcbiAgTXJkQ2VsbERlZkRpcmVjdGl2ZSxcbiAgTXJkRm9vdGVyQ2VsbERlZkRpcmVjdGl2ZSxcbiAgTXJkSGVhZGVyQ2VsbERpcmVjdGl2ZSxcbiAgTXJkQ2VsbERpcmVjdGl2ZSxcbiAgTXJkRm9vdGVyQ2VsbERpcmVjdGl2ZSxcbiAgTXJkSGVhZGVyUm93RGVmRGlyZWN0aXZlLFxuICBNcmRSb3dEZWZEaXJlY3RpdmUsXG4gIE1yZEZvb3RlclJvd0RlZkRpcmVjdGl2ZSxcbiAgTXJkTm9EYXRhUm93RGlyZWN0aXZlLFxuICBNcmRUYWJsZVZpcnR1YWxTY3JvbGxEaXJlY3RpdmVcbl07XG5cbi8qKiBUYWJlbGxlIGF1ZiBCYXNpcyBkZXIgQ0RLLVRhYmVsbGU7IHNvcnRpZXJ0IHdpcmQgbWl0IGRlbSBNcmRTb3J0TW9kdWxlICovXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IERFS0xBUkFUSU9ORU4sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ2RrVGFibGVNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogREVLTEFSQVRJT05FTlxufSlcbmV4cG9ydCBjbGFzcyBNcmRUYWJsZU1vZHVsZSB7IH1cbiJdfQ==