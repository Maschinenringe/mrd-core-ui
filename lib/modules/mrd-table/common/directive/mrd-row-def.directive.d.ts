import { CdkFooterRowDef, CdkHeaderRowDef, CdkNoDataRow, CdkRowDef } from '@angular/cdk/table';
import * as i0 from "@angular/core";
/** Kopfzeile mit ihren Spalten: `<tr mrd-header-row *mrdHeaderRowDef="spalten; sticky: true">` */
export declare class MrdHeaderRowDefDirective extends CdkHeaderRowDef {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdHeaderRowDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdHeaderRowDefDirective, "[mrdHeaderRowDef]", never, { "columns": { "alias": "mrdHeaderRowDef"; "required": false; }; "sticky": { "alias": "mrdHeaderRowDefSticky"; "required": false; }; }, {}, never, never, false, never>;
}
/** Fusszeile mit ihren Spalten: `<tr mrd-footer-row *mrdFooterRowDef="spalten; sticky: true">` */
export declare class MrdFooterRowDefDirective extends CdkFooterRowDef {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdFooterRowDefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdFooterRowDefDirective, "[mrdFooterRowDef]", never, { "columns": { "alias": "mrdFooterRowDef"; "required": false; }; "sticky": { "alias": "mrdFooterRowDefSticky"; "required": false; }; }, {}, never, never, false, never>;
}
/** Datenzeile: `<tr mrd-row *mrdRowDef="let zeile; columns: spalten; when: istGruppe">` */
export declare class MrdRowDefDirective<T> extends CdkRowDef<T> {
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdRowDefDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdRowDefDirective<any>, "[mrdRowDef]", never, { "columns": { "alias": "mrdRowDefColumns"; "required": false; }; "when": { "alias": "mrdRowDefWhen"; "required": false; }; }, {}, never, never, false, never>;
}
/** Zeile, die erscheint, solange die Tabelle keine Daten hat: `<tr *mrdNoDataRow><td [attr.colspan]="n">Keine Einträge</td></tr>` */
export declare class MrdNoDataRowDirective extends CdkNoDataRow {
    _contentClassName: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdNoDataRowDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdNoDataRowDirective, "ng-template[mrdNoDataRow]", never, {}, {}, never, never, false, never>;
}
