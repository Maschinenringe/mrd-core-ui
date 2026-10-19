import { Directive, Input, booleanAttribute } from '@angular/core';
import { CdkCell, CdkCellDef, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkHeaderCell, CdkHeaderCellDef } from '@angular/cdk/table';
import * as i0 from "@angular/core";
/** Template der Datenzelle einer Spalte: `<td mrd-cell *mrdCellDef="let zeile">` */
export class MrdCellDefDirective extends CdkCellDef {
    /** @nocollapse */ static ɵfac = /** @pureOrBreakMyCode */ function () { let ɵMrdCellDefDirective_BaseFactory; return function MrdCellDefDirective_Factory(t) { return (ɵMrdCellDefDirective_BaseFactory || (ɵMrdCellDefDirective_BaseFactory = i0.ɵɵgetInheritedFactory(MrdCellDefDirective)))(t || MrdCellDefDirective); }; }();
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdCellDefDirective, selectors: [["", "mrdCellDef", ""]], features: [i0.ɵɵProvidersFeature([{ provide: CdkCellDef, useExisting: MrdCellDefDirective }]), i0.ɵɵInheritDefinitionFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdCellDefDirective, [{
        type: Directive,
        args: [{
                selector: '[mrdCellDef]',
                providers: [{ provide: CdkCellDef, useExisting: MrdCellDefDirective }]
            }]
    }], null, null); })();
/** Template der Kopfzelle einer Spalte: `<th mrd-header-cell *mrdHeaderCellDef>` */
export class MrdHeaderCellDefDirective extends CdkHeaderCellDef {
    /** @nocollapse */ static ɵfac = /** @pureOrBreakMyCode */ function () { let ɵMrdHeaderCellDefDirective_BaseFactory; return function MrdHeaderCellDefDirective_Factory(t) { return (ɵMrdHeaderCellDefDirective_BaseFactory || (ɵMrdHeaderCellDefDirective_BaseFactory = i0.ɵɵgetInheritedFactory(MrdHeaderCellDefDirective)))(t || MrdHeaderCellDefDirective); }; }();
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdHeaderCellDefDirective, selectors: [["", "mrdHeaderCellDef", ""]], features: [i0.ɵɵProvidersFeature([{ provide: CdkHeaderCellDef, useExisting: MrdHeaderCellDefDirective }]), i0.ɵɵInheritDefinitionFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdHeaderCellDefDirective, [{
        type: Directive,
        args: [{
                selector: '[mrdHeaderCellDef]',
                providers: [{ provide: CdkHeaderCellDef, useExisting: MrdHeaderCellDefDirective }]
            }]
    }], null, null); })();
/** Template der Fusszelle einer Spalte: `<td mrd-footer-cell *mrdFooterCellDef>` */
export class MrdFooterCellDefDirective extends CdkFooterCellDef {
    /** @nocollapse */ static ɵfac = /** @pureOrBreakMyCode */ function () { let ɵMrdFooterCellDefDirective_BaseFactory; return function MrdFooterCellDefDirective_Factory(t) { return (ɵMrdFooterCellDefDirective_BaseFactory || (ɵMrdFooterCellDefDirective_BaseFactory = i0.ɵɵgetInheritedFactory(MrdFooterCellDefDirective)))(t || MrdFooterCellDefDirective); }; }();
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdFooterCellDefDirective, selectors: [["", "mrdFooterCellDef", ""]], features: [i0.ɵɵProvidersFeature([{ provide: CdkFooterCellDef, useExisting: MrdFooterCellDefDirective }]), i0.ɵɵInheritDefinitionFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdFooterCellDefDirective, [{
        type: Directive,
        args: [{
                selector: '[mrdFooterCellDef]',
                providers: [{ provide: CdkFooterCellDef, useExisting: MrdFooterCellDefDirective }]
            }]
    }], null, null); })();
/**
 * Spalte der Tabelle; die Zellen bekommen die Klassen `cdk-column-<name>` und `mrd-column-<name>`.
 * `sticky`/`stickyEnd` heften die Spalte beim horizontalen Scrollen an, `trennlinieVor`/`trennlinieNach` ziehen eine vertikale Linie.
 */
export class MrdColumnDefDirective extends CdkColumnDef {
    get name() {
        return this._name;
    }
    set name(name) {
        this._setNameInput(name);
    }
    /** Vertikale Linie vor bzw. nach der Spalte, durch Kopf, Daten und Fuss (z. B. zwischen Spaltengruppen) */
    trennlinieVor = false;
    trennlinieNach = false;
    _updateColumnCssClassName() {
        super._updateColumnCssClassName();
        this._columnCssClassName.push(`mrd-column-${this.cssClassFriendlyName}`);
    }
    /** @nocollapse */ static ɵfac = /** @pureOrBreakMyCode */ function () { let ɵMrdColumnDefDirective_BaseFactory; return function MrdColumnDefDirective_Factory(t) { return (ɵMrdColumnDefDirective_BaseFactory || (ɵMrdColumnDefDirective_BaseFactory = i0.ɵɵgetInheritedFactory(MrdColumnDefDirective)))(t || MrdColumnDefDirective); }; }();
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdColumnDefDirective, selectors: [["", "mrdColumnDef", ""]], inputs: { sticky: "sticky", name: ["mrdColumnDef", "name"], trennlinieVor: ["trennlinieVor", "trennlinieVor", booleanAttribute], trennlinieNach: ["trennlinieNach", "trennlinieNach", booleanAttribute] }, features: [i0.ɵɵProvidersFeature([{ provide: CdkColumnDef, useExisting: MrdColumnDefDirective }]), i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdColumnDefDirective, [{
        type: Directive,
        args: [{
                selector: '[mrdColumnDef]',
                inputs: ['sticky'],
                providers: [{ provide: CdkColumnDef, useExisting: MrdColumnDefDirective }]
            }]
    }], null, { name: [{
            type: Input,
            args: ['mrdColumnDef']
        }], trennlinieVor: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], trennlinieNach: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }] }); })();
export class MrdHeaderCellDirective extends CdkHeaderCell {
    spalte;
    constructor(spalte, elementRef) {
        super(spalte, elementRef);
        this.spalte = spalte;
    }
    /** @nocollapse */ static ɵfac = function MrdHeaderCellDirective_Factory(t) { return new (t || MrdHeaderCellDirective)(i0.ɵɵdirectiveInject(MrdColumnDefDirective), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdHeaderCellDirective, selectors: [["mrd-header-cell"], ["th", "mrd-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "mrd-header-cell"], hostVars: 4, hostBindings: function MrdHeaderCellDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("mrd-trennlinie-vor", ctx.spalte.trennlinieVor)("mrd-trennlinie-nach", ctx.spalte.trennlinieNach);
        } }, features: [i0.ɵɵInheritDefinitionFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdHeaderCellDirective, [{
        type: Directive,
        args: [{
                selector: 'mrd-header-cell, th[mrd-header-cell]',
                host: {
                    'class': 'mrd-header-cell',
                    '[class.mrd-trennlinie-vor]': 'spalte.trennlinieVor',
                    '[class.mrd-trennlinie-nach]': 'spalte.trennlinieNach',
                    'role': 'columnheader'
                }
            }]
    }], function () { return [{ type: MrdColumnDefDirective }, { type: i0.ElementRef }]; }, null); })();
export class MrdCellDirective extends CdkCell {
    spalte;
    constructor(spalte, elementRef) {
        super(spalte, elementRef);
        this.spalte = spalte;
    }
    /** @nocollapse */ static ɵfac = function MrdCellDirective_Factory(t) { return new (t || MrdCellDirective)(i0.ɵɵdirectiveInject(MrdColumnDefDirective), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdCellDirective, selectors: [["mrd-cell"], ["td", "mrd-cell", ""]], hostAttrs: [1, "mrd-cell"], hostVars: 4, hostBindings: function MrdCellDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("mrd-trennlinie-vor", ctx.spalte.trennlinieVor)("mrd-trennlinie-nach", ctx.spalte.trennlinieNach);
        } }, features: [i0.ɵɵInheritDefinitionFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdCellDirective, [{
        type: Directive,
        args: [{
                selector: 'mrd-cell, td[mrd-cell]',
                host: {
                    'class': 'mrd-cell',
                    '[class.mrd-trennlinie-vor]': 'spalte.trennlinieVor',
                    '[class.mrd-trennlinie-nach]': 'spalte.trennlinieNach'
                }
            }]
    }], function () { return [{ type: MrdColumnDefDirective }, { type: i0.ElementRef }]; }, null); })();
export class MrdFooterCellDirective extends CdkFooterCell {
    spalte;
    constructor(spalte, elementRef) {
        super(spalte, elementRef);
        this.spalte = spalte;
    }
    /** @nocollapse */ static ɵfac = function MrdFooterCellDirective_Factory(t) { return new (t || MrdFooterCellDirective)(i0.ɵɵdirectiveInject(MrdColumnDefDirective), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdFooterCellDirective, selectors: [["mrd-footer-cell"], ["td", "mrd-footer-cell", ""]], hostAttrs: [1, "mrd-footer-cell"], hostVars: 4, hostBindings: function MrdFooterCellDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("mrd-trennlinie-vor", ctx.spalte.trennlinieVor)("mrd-trennlinie-nach", ctx.spalte.trennlinieNach);
        } }, features: [i0.ɵɵInheritDefinitionFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdFooterCellDirective, [{
        type: Directive,
        args: [{
                selector: 'mrd-footer-cell, td[mrd-footer-cell]',
                host: {
                    'class': 'mrd-footer-cell',
                    '[class.mrd-trennlinie-vor]': 'spalte.trennlinieVor',
                    '[class.mrd-trennlinie-nach]': 'spalte.trennlinieNach'
                }
            }]
    }], function () { return [{ type: MrdColumnDefDirective }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWNlbGwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10YWJsZS9jb21tb24vZGlyZWN0aXZlL21yZC1jZWxsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUV6SSxvRkFBb0Y7QUFLcEYsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFVBQVU7NlFBQXRDLG1CQUFtQixTQUFuQixtQkFBbUI7NEZBQW5CLG1CQUFtQix3RUFGbkIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLENBQUM7O3VGQUUzRCxtQkFBbUI7Y0FKL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxxQkFBcUIsRUFBRSxDQUFDO2FBQ3ZFOztBQUdELG9GQUFvRjtBQUtwRixNQUFNLE9BQU8seUJBQTBCLFNBQVEsZ0JBQWdCO3FTQUFsRCx5QkFBeUIsU0FBekIseUJBQXlCOzRGQUF6Qix5QkFBeUIsOEVBRnpCLENBQUMsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLHlCQUF5QixFQUFFLENBQUM7O3VGQUV2RSx5QkFBeUI7Y0FKckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFF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NkIsRUFBRSx1QkFBdUI7aUJBQ3ZEO2FBQ0Y7O0FBZUQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGFBQWE7SUFDM0I7SUFBNUIsWUFBNEIsTUFBNkIsRUFBRSxVQUFtQztRQUM1RixLQUFLLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBREEsV0FBTSxHQUFOLE1BQU0sQ0FBdUI7SUFFekQsQ0FBQzttR0FIVSxzQkFBc0I7NEZBQXRCLHNCQUFzQjs7Ozt1RkFBdEIsc0JBQXNCO2NBUmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCxJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsNEJBQTRCLEVBQUUsc0JBQXNCO29CQUNwRCw2QkFBNkIsRUFBRSx1QkFBdUI7aUJBQ3ZEO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBib29sZWFuQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtDZWxsLCBDZGtDZWxsRGVmLCBDZGtDb2x1bW5EZWYsIENka0Zvb3RlckNlbGwsIENka0Zvb3RlckNlbGxEZWYsIENka0hlYWRlckNlbGwsIENka0hlYWRlckNlbGxEZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuXG4vKiogVGVtcGxhdGUgZGVyIERhdGVuemVsbGUgZWluZXIgU3BhbHRlOiBgPHRkIG1yZC1jZWxsICptcmRDZWxsRGVmPVwibGV0IHplaWxlXCI+YCAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21yZENlbGxEZWZdJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDZGtDZWxsRGVmLCB1c2VFeGlzdGluZzogTXJkQ2VsbERlZkRpcmVjdGl2ZSB9XVxufSlcbmV4cG9ydCBjbGFzcyBNcmRDZWxsRGVmRGlyZWN0aXZlIGV4dGVuZHMgQ2RrQ2VsbERlZiB7fVxuXG4vKiogVGVtcGxhdGUgZGVyIEtvcGZ6ZWxsZSBlaW5lciBTcGFsdGU6IGA8dGggbXJkLWhlYWRlci1jZWxsICptcmRIZWFkZXJDZWxsRGVmPmAgKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttcmRIZWFkZXJDZWxsRGVmXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrSGVhZGVyQ2VsbERlZiwgdXNlRXhpc3Rpbmc6IE1yZEhlYWRlckNlbGxEZWZEaXJlY3RpdmUgfV1cbn0pXG5leHBvcnQgY2xhc3MgTXJkSGVhZGVyQ2VsbERlZkRpcmVjdGl2ZSBleHRlbmRzIENka0hlYWRlckNlbGxEZWYge31cblxuLyoqIFRlbXBsYXRlIGRlciBGdXNzemVsbGUgZWluZXIgU3BhbHRlOiBgPHRkIG1yZC1mb290ZXItY2VsbCAqbXJkRm9vdGVyQ2VsbERlZj5gICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXJkRm9vdGVyQ2VsbERlZl0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENka0Zvb3RlckNlbGxEZWYsIHVzZUV4aXN0aW5nOiBNcmRGb290ZXJDZWxsRGVmRGlyZWN0aXZlIH1dXG59KVxuZXhwb3J0IGNsYXNzIE1yZEZvb3RlckNlbGxEZWZEaXJlY3RpdmUgZXh0ZW5kcyBDZGtGb290ZXJDZWxsRGVmIHt9XG5cbi8qKlxuICogU3BhbHRlIGRlciBUYWJlbGxlOyBkaWUgWmVsbGVuIGJla29tbWVuIGRpZSBLbGFzc2VuIGBjZGstY29sdW1uLTxuYW1lPmAgdW5kIGBtcmQtY29sdW1uLTxuYW1lPmAuXG4gKiBgc3RpY2t5YC9gc3RpY2t5RW5kYCBoZWZ0ZW4gZGllIFNwYWx0ZSBiZWltIGhvcml6b250YWxlbiBTY3JvbGxlbiBhbiwgYHRyZW5ubGluaWVWb3JgL2B0cmVubmxpbmllTmFjaGAgemllaGVuIGVpbmUgdmVydGlrYWxlIExpbmllLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXJkQ29sdW1uRGVmXScsXG4gIGlucHV0czogWydzdGlja3knXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDZGtDb2x1bW5EZWYsIHVzZUV4aXN0aW5nOiBNcmRDb2x1bW5EZWZEaXJlY3RpdmUgfV1cbn0pXG5leHBvcnQgY2xhc3MgTXJkQ29sdW1uRGVmRGlyZWN0aXZlIGV4dGVuZHMgQ2RrQ29sdW1uRGVmIHtcblxuICBASW5wdXQoJ21yZENvbHVtbkRlZicpXG4gIG92ZXJyaWRlIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgb3ZlcnJpZGUgc2V0IG5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2V0TmFtZUlucHV0KG5hbWUpO1xuICB9XG5cbiAgLyoqIFZlcnRpa2FsZSBMaW5pZSB2b3IgYnp3LiBuYWNoIGRlciBTcGFsdGUsIGR1cmNoIEtvcGYsIERhdGVuIHVuZCBGdXNzICh6LiBCLiB6d2lzY2hlbiBTcGFsdGVuZ3J1cHBlbikgKi9cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgdHJlbm5saW5pZVZvcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyB0cmVubmxpbmllTmFjaDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBfdXBkYXRlQ29sdW1uQ3NzQ2xhc3NOYW1lKCk6IHZvaWQge1xuICAgIHN1cGVyLl91cGRhdGVDb2x1bW5Dc3NDbGFzc05hbWUoKTtcbiAgICB0aGlzLl9jb2x1bW5Dc3NDbGFzc05hbWUucHVzaChgbXJkLWNvbHVtbi0ke3RoaXMuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbXJkLWhlYWRlci1jZWxsLCB0aFttcmQtaGVhZGVyLWNlbGxdJyxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtcmQtaGVhZGVyLWNlbGwnLFxuICAgICdbY2xhc3MubXJkLXRyZW5ubGluaWUtdm9yXSc6ICdzcGFsdGUudHJlbm5saW5pZVZvcicsXG4gICAgJ1tjbGFzcy5tcmQtdHJlbm5saW5pZS1uYWNoXSc6ICdzcGFsdGUudHJlbm5saW5pZU5hY2gnLFxuICAgICdyb2xlJzogJ2NvbHVtbmhlYWRlcidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBNcmRIZWFkZXJDZWxsRGlyZWN0aXZlIGV4dGVuZHMgQ2RrSGVhZGVyQ2VsbCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBzcGFsdGU6IE1yZENvbHVtbkRlZkRpcmVjdGl2ZSwgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHtcbiAgICBzdXBlcihzcGFsdGUsIGVsZW1lbnRSZWYpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ21yZC1jZWxsLCB0ZFttcmQtY2VsbF0nLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ21yZC1jZWxsJyxcbiAgICAnW2NsYXNzLm1yZC10cmVubmxpbmllLXZvcl0nOiAnc3BhbHRlLnRyZW5ubGluaWVWb3InLFxuICAgICdbY2xhc3MubXJkLXRyZW5ubGluaWUtbmFjaF0nOiAnc3BhbHRlLnRyZW5ubGluaWVOYWNoJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE1yZENlbGxEaXJlY3RpdmUgZXh0ZW5kcyBDZGtDZWxsIHtcbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHNwYWx0ZTogTXJkQ29sdW1uRGVmRGlyZWN0aXZlLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xuICAgIHN1cGVyKHNwYWx0ZSwgZWxlbWVudFJlZik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbXJkLWZvb3Rlci1jZWxsLCB0ZFttcmQtZm9vdGVyLWNlbGxdJyxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtcmQtZm9vdGVyLWNlbGwnLFxuICAgICdbY2xhc3MubXJkLXRyZW5ubGluaWUtdm9yXSc6ICdzcGFsdGUudHJlbm5saW5pZVZvcicsXG4gICAgJ1tjbGFzcy5tcmQtdHJlbm5saW5pZS1uYWNoXSc6ICdzcGFsdGUudHJlbm5saW5pZU5hY2gnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTXJkRm9vdGVyQ2VsbERpcmVjdGl2ZSBleHRlbmRzIENka0Zvb3RlckNlbGwge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgc3BhbHRlOiBNcmRDb2x1bW5EZWZEaXJlY3RpdmUsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XG4gICAgc3VwZXIoc3BhbHRlLCBlbGVtZW50UmVmKTtcbiAgfVxufVxuIl19