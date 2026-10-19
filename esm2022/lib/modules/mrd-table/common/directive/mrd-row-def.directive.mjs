import { Directive } from '@angular/core';
import { CdkFooterRowDef, CdkHeaderRowDef, CdkNoDataRow, CdkRowDef } from '@angular/cdk/table';
import * as i0 from "@angular/core";
/** Kopfzeile mit ihren Spalten: `<tr mrd-header-row *mrdHeaderRowDef="spalten; sticky: true">` */
export class MrdHeaderRowDefDirective extends CdkHeaderRowDef {
    /** @nocollapse */ static ɵfac = /** @pureOrBreakMyCode */ function () { let ɵMrdHeaderRowDefDirective_BaseFactory; return function MrdHeaderRowDefDirective_Factory(t) { return (ɵMrdHeaderRowDefDirective_BaseFactory || (ɵMrdHeaderRowDefDirective_BaseFactory = i0.ɵɵgetInheritedFactory(MrdHeaderRowDefDirective)))(t || MrdHeaderRowDefDirective); }; }();
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdHeaderRowDefDirective, selectors: [["", "mrdHeaderRowDef", ""]], inputs: { columns: ["mrdHeaderRowDef", "columns"], sticky: ["mrdHeaderRowDefSticky", "sticky"] }, features: [i0.ɵɵProvidersFeature([{ provide: CdkHeaderRowDef, useExisting: MrdHeaderRowDefDirective }]), i0.ɵɵInheritDefinitionFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdHeaderRowDefDirective, [{
        type: Directive,
        args: [{
                selector: '[mrdHeaderRowDef]',
                providers: [{ provide: CdkHeaderRowDef, useExisting: MrdHeaderRowDefDirective }],
                inputs: ['columns: mrdHeaderRowDef', 'sticky: mrdHeaderRowDefSticky']
            }]
    }], null, null); })();
/** Fusszeile mit ihren Spalten: `<tr mrd-footer-row *mrdFooterRowDef="spalten; sticky: true">` */
export class MrdFooterRowDefDirective extends CdkFooterRowDef {
    /** @nocollapse */ static ɵfac = /** @pureOrBreakMyCode */ function () { let ɵMrdFooterRowDefDirective_BaseFactory; return function MrdFooterRowDefDirective_Factory(t) { return (ɵMrdFooterRowDefDirective_BaseFactory || (ɵMrdFooterRowDefDirective_BaseFactory = i0.ɵɵgetInheritedFactory(MrdFooterRowDefDirective)))(t || MrdFooterRowDefDirective); }; }();
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdFooterRowDefDirective, selectors: [["", "mrdFooterRowDef", ""]], inputs: { columns: ["mrdFooterRowDef", "columns"], sticky: ["mrdFooterRowDefSticky", "sticky"] }, features: [i0.ɵɵProvidersFeature([{ provide: CdkFooterRowDef, useExisting: MrdFooterRowDefDirective }]), i0.ɵɵInheritDefinitionFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdFooterRowDefDirective, [{
        type: Directive,
        args: [{
                selector: '[mrdFooterRowDef]',
                providers: [{ provide: CdkFooterRowDef, useExisting: MrdFooterRowDefDirective }],
                inputs: ['columns: mrdFooterRowDef', 'sticky: mrdFooterRowDefSticky']
            }]
    }], null, null); })();
/** Datenzeile: `<tr mrd-row *mrdRowDef="let zeile; columns: spalten; when: istGruppe">` */
export class MrdRowDefDirective extends CdkRowDef {
    /** @nocollapse */ static ɵfac = /** @pureOrBreakMyCode */ function () { let ɵMrdRowDefDirective_BaseFactory; return function MrdRowDefDirective_Factory(t) { return (ɵMrdRowDefDirective_BaseFactory || (ɵMrdRowDefDirective_BaseFactory = i0.ɵɵgetInheritedFactory(MrdRowDefDirective)))(t || MrdRowDefDirective); }; }();
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdRowDefDirective, selectors: [["", "mrdRowDef", ""]], inputs: { columns: ["mrdRowDefColumns", "columns"], when: ["mrdRowDefWhen", "when"] }, features: [i0.ɵɵProvidersFeature([{ provide: CdkRowDef, useExisting: MrdRowDefDirective }]), i0.ɵɵInheritDefinitionFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdRowDefDirective, [{
        type: Directive,
        args: [{
                selector: '[mrdRowDef]',
                providers: [{ provide: CdkRowDef, useExisting: MrdRowDefDirective }],
                inputs: ['columns: mrdRowDefColumns', 'when: mrdRowDefWhen']
            }]
    }], null, null); })();
/** Zeile, die erscheint, solange die Tabelle keine Daten hat: `<tr *mrdNoDataRow><td [attr.colspan]="n">Keine Einträge</td></tr>` */
export class MrdNoDataRowDirective extends CdkNoDataRow {
    _contentClassName = 'mrd-no-data-row';
    /** @nocollapse */ static ɵfac = /** @pureOrBreakMyCode */ function () { let ɵMrdNoDataRowDirective_BaseFactory; return function MrdNoDataRowDirective_Factory(t) { return (ɵMrdNoDataRowDirective_BaseFactory || (ɵMrdNoDataRowDirective_BaseFactory = i0.ɵɵgetInheritedFactory(MrdNoDataRowDirective)))(t || MrdNoDataRowDirective); }; }();
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdNoDataRowDirective, selectors: [["ng-template", "mrdNoDataRow", ""]], features: [i0.ɵɵProvidersFeature([{ provide: CdkNoDataRow, useExisting: MrdNoDataRowDirective }]), i0.ɵɵInheritDefinitionFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdNoDataRowDirective, [{
        type: Directive,
        args: [{
                selector: 'ng-template[mrdNoDataRow]',
                providers: [{ provide: CdkNoDataRow, useExisting: MrdNoDataRowDirective }]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXJvdy1kZWYuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10YWJsZS9jb21tb24vZGlyZWN0aXZlL21yZC1yb3ctZGVmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFL0Ysa0dBQWtHO0FBTWxHLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxlQUFlO2lTQUFoRCx3QkFBd0IsU0FBeEIsd0JBQXdCOzRGQUF4Qix3QkFBd0IsK0tBSHhCLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSx3QkFBd0IsRUFBRSxDQUFDOzt1RkFHckUsd0JBQXdCO2NBTHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVywwQkFBMEIsRUFBRSxDQUFDO2dCQUNoRixNQUFNLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSwrQkFBK0IsQ0FBQzthQUN0RTs7QUFHRCxrR0FBa0c7QUFNbEcsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGVBQWU7aVNBQWhELHdCQUF3QixTQUF4Qix3QkFBd0I7NEZBQXhCLHdCQUF3QiwrS0FIeEIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLHdCQUF3QixFQUFFLENBQUM7O3VGQUdyRSx3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLDBCQUEwQixFQUFFLENBQUM7Z0JBQ2hGLE1BQU0sRUFBRSxDQUFDLDBCQUEwQixFQUFFLCtCQUErQixDQUFDO2FBQ3RFOztBQUdELDJGQUEyRjtBQU0zRixNQUFNLE9BQU8sa0JBQXNCLFNBQVEsU0FBWTt5UUFBMUMsa0JBQWtCLFNBQWxCLGtCQUFrQjs0RkFBbEIsa0JBQWtCLDhKQUhsQixDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQzs7dUZBR3pELGtCQUFrQjtjQUw5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLG9CQUFvQixFQUFFLENBQUM7Z0JBQ3BFLE1BQU0sRUFBRSxDQUFDLDJCQUEyQixFQUFFLHFCQUFxQixDQUFDO2FBQzdEOztBQUdELHFJQUFxSTtBQUtySSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsWUFBWTtJQUM1QyxpQkFBaUIsR0FBVyxpQkFBaUIsQ0FBQztxUkFENUMscUJBQXFCLFNBQXJCLHFCQUFxQjs0RkFBckIscUJBQXFCLHFGQUZyQixDQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUscUJBQXFCLEVBQUUsQ0FBQzs7dUZBRS9ELHFCQUFxQjtjQUpqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsdUJBQXVCLEVBQUUsQ0FBQzthQUMzRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrRm9vdGVyUm93RGVmLCBDZGtIZWFkZXJSb3dEZWYsIENka05vRGF0YVJvdywgQ2RrUm93RGVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcblxuLyoqIEtvcGZ6ZWlsZSBtaXQgaWhyZW4gU3BhbHRlbjogYDx0ciBtcmQtaGVhZGVyLXJvdyAqbXJkSGVhZGVyUm93RGVmPVwic3BhbHRlbjsgc3RpY2t5OiB0cnVlXCI+YCAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21yZEhlYWRlclJvd0RlZl0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENka0hlYWRlclJvd0RlZiwgdXNlRXhpc3Rpbmc6IE1yZEhlYWRlclJvd0RlZkRpcmVjdGl2ZSB9XSxcbiAgaW5wdXRzOiBbJ2NvbHVtbnM6IG1yZEhlYWRlclJvd0RlZicsICdzdGlja3k6IG1yZEhlYWRlclJvd0RlZlN0aWNreSddXG59KVxuZXhwb3J0IGNsYXNzIE1yZEhlYWRlclJvd0RlZkRpcmVjdGl2ZSBleHRlbmRzIENka0hlYWRlclJvd0RlZiB7fVxuXG4vKiogRnVzc3plaWxlIG1pdCBpaHJlbiBTcGFsdGVuOiBgPHRyIG1yZC1mb290ZXItcm93ICptcmRGb290ZXJSb3dEZWY9XCJzcGFsdGVuOyBzdGlja3k6IHRydWVcIj5gICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXJkRm9vdGVyUm93RGVmXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrRm9vdGVyUm93RGVmLCB1c2VFeGlzdGluZzogTXJkRm9vdGVyUm93RGVmRGlyZWN0aXZlIH1dLFxuICBpbnB1dHM6IFsnY29sdW1uczogbXJkRm9vdGVyUm93RGVmJywgJ3N0aWNreTogbXJkRm9vdGVyUm93RGVmU3RpY2t5J11cbn0pXG5leHBvcnQgY2xhc3MgTXJkRm9vdGVyUm93RGVmRGlyZWN0aXZlIGV4dGVuZHMgQ2RrRm9vdGVyUm93RGVmIHt9XG5cbi8qKiBEYXRlbnplaWxlOiBgPHRyIG1yZC1yb3cgKm1yZFJvd0RlZj1cImxldCB6ZWlsZTsgY29sdW1uczogc3BhbHRlbjsgd2hlbjogaXN0R3J1cHBlXCI+YCAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21yZFJvd0RlZl0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENka1Jvd0RlZiwgdXNlRXhpc3Rpbmc6IE1yZFJvd0RlZkRpcmVjdGl2ZSB9XSxcbiAgaW5wdXRzOiBbJ2NvbHVtbnM6IG1yZFJvd0RlZkNvbHVtbnMnLCAnd2hlbjogbXJkUm93RGVmV2hlbiddXG59KVxuZXhwb3J0IGNsYXNzIE1yZFJvd0RlZkRpcmVjdGl2ZTxUPiBleHRlbmRzIENka1Jvd0RlZjxUPiB7fVxuXG4vKiogWmVpbGUsIGRpZSBlcnNjaGVpbnQsIHNvbGFuZ2UgZGllIFRhYmVsbGUga2VpbmUgRGF0ZW4gaGF0OiBgPHRyICptcmROb0RhdGFSb3c+PHRkIFthdHRyLmNvbHNwYW5dPVwiblwiPktlaW5lIEVpbnRyw6RnZTwvdGQ+PC90cj5gICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVttcmROb0RhdGFSb3ddJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDZGtOb0RhdGFSb3csIHVzZUV4aXN0aW5nOiBNcmROb0RhdGFSb3dEaXJlY3RpdmUgfV1cbn0pXG5leHBvcnQgY2xhc3MgTXJkTm9EYXRhUm93RGlyZWN0aXZlIGV4dGVuZHMgQ2RrTm9EYXRhUm93IHtcbiAgb3ZlcnJpZGUgX2NvbnRlbnRDbGFzc05hbWU6IHN0cmluZyA9ICdtcmQtbm8tZGF0YS1yb3cnO1xufVxuIl19