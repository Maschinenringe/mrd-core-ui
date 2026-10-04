import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MrdConfigModel } from '../../../../common/model/config.model';
import { MrdSortDirective } from '../../common/directive/mrd-sort.directive';
import { MrdSortArrowPosition, MrdSortDirection } from '../../common/model/mrd-sort.model';
import * as i0 from "@angular/core";
/**
 * Sortierbarer Spaltenkopf innerhalb von `[mrdSort]`; funktioniert auf `th` wie auf beliebigen Elementen.
 * Der Pfeil uebernimmt die Textfarbe; bei inaktiver Spalte erscheint er nur beim Hovern.
 */
export declare class MrdSortHeaderComponent implements OnDestroy {
    private sort;
    id: string;
    /** Richtung beim ersten Klick, abweichend von `mrdSortStart` (z. B. Datum zuerst absteigend) */
    start: Exclude<MrdSortDirection, ''>;
    disabled: boolean;
    /** `before` fuer rechtsbuendige Spalten, damit der Text buendig bleibt */
    arrowPosition: MrdSortArrowPosition;
    arrowSize: string;
    readonly config: MrdConfigModel;
    private readonly abo;
    constructor(sort: MrdSortDirective, cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    get aktiv(): boolean;
    get absteigend(): boolean;
    get gesperrt(): boolean;
    get ariaSort(): string;
    sortieren(): void;
    tasteGedrueckt(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdSortHeaderComponent, [{ optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdSortHeaderComponent, "[mrd-sort-header]", never, { "id": { "alias": "mrd-sort-header"; "required": true; }; "start": { "alias": "start"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "arrowPosition": { "alias": "arrowPosition"; "required": false; }; "arrowSize": { "alias": "arrowSize"; "required": false; }; }, {}, never, ["*"], false, never>;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_arrowSize: string | number;
}
