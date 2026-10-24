import { MrdDatenListeComponent } from '../mrd-daten-liste/mrd-daten-liste.component';
import * as i0 from "@angular/core";
/**
 * Schalter "Inaktive ausblenden" fuer die Aktionen einer `mrd-daten-liste` (z. B. in `<mrd-toolbar mrdDatenListeAktionen>`);
 * steuert die umschliessende Liste und erscheint nur, wenn sie eine `inaktivPruefung` hat.
 * `kompakt` zeigt nur den Schalter, den Text als Tooltip - fuer schmale Listen.
 */
export declare class MrdDatenListeInaktivSchalterComponent {
    liste: MrdDatenListeComponent;
    static readonly TEXT: string;
    readonly TEXT: string;
    kompakt: boolean;
    constructor(liste: MrdDatenListeComponent);
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdDatenListeInaktivSchalterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdDatenListeInaktivSchalterComponent, "mrd-daten-liste-inaktiv-schalter", never, { "kompakt": { "alias": "kompakt"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_kompakt: unknown;
}
