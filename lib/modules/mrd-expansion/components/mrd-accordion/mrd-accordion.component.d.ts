import { MrdAccordionBase, MrdAccordionPanel } from '../../common/model/mrd-accordion.model';
import * as i0 from "@angular/core";
/**
 * Fasst mehrere `mrd-expansion-panel` zusammen. Ohne `multi` ist immer hoechstens ein Panel geoeffnet.
 */
export declare class MrdAccordionComponent implements MrdAccordionBase {
    /** Mehrere Panels duerfen gleichzeitig geoeffnet sein */
    multi: boolean;
    private readonly panels;
    registrieren(panel: MrdAccordionPanel): void;
    abmelden(panel: MrdAccordionPanel): void;
    panelGeoeffnet(panel: MrdAccordionPanel): void;
    /** Nur mit `multi`, sonst bliebe ohnehin nur das letzte Panel offen */
    openAll(): void;
    closeAll(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdAccordionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdAccordionComponent, "mrd-accordion", never, { "multi": { "alias": "multi"; "required": false; }; }, {}, never, ["*"], false, never>;
    static ngAcceptInputType_multi: unknown;
}
