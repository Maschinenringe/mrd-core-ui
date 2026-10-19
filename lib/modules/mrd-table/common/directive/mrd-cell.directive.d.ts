import { ElementRef } from '@angular/core';
import { CdkCell, CdkCellDef, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkHeaderCell, CdkHeaderCellDef } from '@angular/cdk/table';
import * as i0 from "@angular/core";
/** Template der Datenzelle einer Spalte: `<td mrd-cell *mrdCellDef="let zeile">` */
export declare class MrdCellDefDirective extends CdkCellDef {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdCellDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdCellDefDirective, "[mrdCellDef]", never, {}, {}, never, never, false, never>;
}
/** Template der Kopfzelle einer Spalte: `<th mrd-header-cell *mrdHeaderCellDef>` */
export declare class MrdHeaderCellDefDirective extends CdkHeaderCellDef {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdHeaderCellDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdHeaderCellDefDirective, "[mrdHeaderCellDef]", never, {}, {}, never, never, false, never>;
}
/** Template der Fusszelle einer Spalte: `<td mrd-footer-cell *mrdFooterCellDef>` */
export declare class MrdFooterCellDefDirective extends CdkFooterCellDef {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdFooterCellDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdFooterCellDefDirective, "[mrdFooterCellDef]", never, {}, {}, never, never, false, never>;
}
/**
 * Spalte der Tabelle; die Zellen bekommen die Klassen `cdk-column-<name>` und `mrd-column-<name>`.
 * `sticky`/`stickyEnd` heften die Spalte beim horizontalen Scrollen an, `trennlinieVor`/`trennlinieNach` ziehen eine vertikale Linie.
 */
export declare class MrdColumnDefDirective extends CdkColumnDef {
    get name(): string;
    set name(name: string);
    /** Vertikale Linie vor bzw. nach der Spalte, durch Kopf, Daten und Fuss (z. B. zwischen Spaltengruppen) */
    trennlinieVor: boolean;
    trennlinieNach: boolean;
    protected _updateColumnCssClassName(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdColumnDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdColumnDefDirective, "[mrdColumnDef]", never, { "sticky": { "alias": "sticky"; "required": false; }; "name": { "alias": "mrdColumnDef"; "required": false; }; "trennlinieVor": { "alias": "trennlinieVor"; "required": false; }; "trennlinieNach": { "alias": "trennlinieNach"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_trennlinieVor: unknown;
    static ngAcceptInputType_trennlinieNach: unknown;
}
export declare class MrdHeaderCellDirective extends CdkHeaderCell {
    readonly spalte: MrdColumnDefDirective;
    constructor(spalte: MrdColumnDefDirective, elementRef: ElementRef<HTMLElement>);
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdHeaderCellDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdHeaderCellDirective, "mrd-header-cell, th[mrd-header-cell]", never, {}, {}, never, never, false, never>;
}
export declare class MrdCellDirective extends CdkCell {
    readonly spalte: MrdColumnDefDirective;
    constructor(spalte: MrdColumnDefDirective, elementRef: ElementRef<HTMLElement>);
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdCellDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdCellDirective, "mrd-cell, td[mrd-cell]", never, {}, {}, never, never, false, never>;
}
export declare class MrdFooterCellDirective extends CdkFooterCell {
    readonly spalte: MrdColumnDefDirective;
    constructor(spalte: MrdColumnDefDirective, elementRef: ElementRef<HTMLElement>);
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdFooterCellDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdFooterCellDirective, "mrd-footer-cell, td[mrd-footer-cell]", never, {}, {}, never, never, false, never>;
}
