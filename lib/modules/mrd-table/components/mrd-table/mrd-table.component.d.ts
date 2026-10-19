import { CdkTable } from '@angular/cdk/table';
import * as i0 from "@angular/core";
/**
 * Tabelle auf Basis der CDK-Tabelle, als natives `<table mrd-table>` oder als Element `<mrd-table>`.
 * `dataSource` nimmt ein Array, ein Observable oder eine `MrdTableDataSource`; sortiert wird mit `mrdSort` + `mrd-sort-header`.
 *
 * `<table mrd-table [dataSource]="daten" mrdSort><ng-container mrdColumnDef="name">
 *   <th mrd-header-cell *mrdHeaderCellDef mrd-sort-header="name">Name</th><td mrd-cell *mrdCellDef="let zeile">{{zeile.name}}</td>
 * </ng-container><tr mrd-header-row *mrdHeaderRowDef="spalten; sticky: true"></tr><tr mrd-row *mrdRowDef="let zeile; columns: spalten"></tr></table>`
 */
export declare class MrdTableComponent<T> extends CdkTable<T> {
    protected stickyCssClass: string;
    protected needsPositionStickyOnElement: boolean;
    /** Vertikale Linien zwischen allen Spalten; einzelne Linien ueber `trennlinieVor`/`trennlinieNach` an `mrdColumnDef` */
    spaltenTrennlinien: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdTableComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdTableComponent<any>, "mrd-table, table[mrd-table]", ["mrdTable"], { "spaltenTrennlinien": { "alias": "spaltenTrennlinien"; "required": false; }; }, {}, never, ["caption", "colgroup, col"], false, never>;
    static ngAcceptInputType_spaltenTrennlinien: unknown;
}
