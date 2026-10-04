import { InjectionToken } from '@angular/core';
/** Was ein Panel vom umgebenden Akkordeon braucht; als Token, damit Panel und Akkordeon sich nicht gegenseitig importieren */
export interface MrdAccordionBase {
    registrieren(panel: MrdAccordionPanel): void;
    abmelden(panel: MrdAccordionPanel): void;
    panelGeoeffnet(panel: MrdAccordionPanel): void;
}
export interface MrdAccordionPanel {
    readonly expanded: boolean;
    open(): void;
    close(): void;
}
export declare const MRD_ACCORDION: InjectionToken<MrdAccordionBase>;
export type MrdExpansionTogglePosition = 'before' | 'after';
