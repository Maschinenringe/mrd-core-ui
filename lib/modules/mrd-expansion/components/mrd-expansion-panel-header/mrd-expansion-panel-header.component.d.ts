import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MrdExpansionPanelComponent } from '../mrd-expansion-panel/mrd-expansion-panel.component';
import * as i0 from "@angular/core";
/** Kopf eines `mrd-expansion-panel`; Klick, Enter und Leertaste klappen das Panel auf und zu */
export declare class MrdExpansionPanelHeaderComponent implements OnDestroy {
    panel: MrdExpansionPanelComponent;
    private readonly abo;
    constructor(panel: MrdExpansionPanelComponent, cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    umschalten(): void;
    tasteGedrueckt(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdExpansionPanelHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdExpansionPanelHeaderComponent, "mrd-expansion-panel-header", never, {}, {}, never, ["*"], false, never>;
}
