import { InjectionToken } from '@angular/core';
/** `after`: Menue beginnt an der linken Kante des Triggers und waechst nach rechts; `before`: buendig an der rechten Kante */
export type MrdMenuPositionX = 'before' | 'after';
/** `below`: unter dem Trigger; `above`: darueber. Reicht der Platz nicht, wird auf die Gegenseite ausgewichen. */
export type MrdMenuPositionY = 'above' | 'below';
/** Anlass, aus dem das Menue sich schliessen moechte */
export type MrdMenuSchliessGrund = 'eintrag' | 'escape' | 'tab';
/** Was ein Eintrag vom umgebenden Menue braucht; als Token, damit Menue und Eintrag sich nicht gegenseitig importieren */
export interface MrdMenuElternteil {
    eintragGewaehlt(): void;
}
export declare const MRD_MENU: InjectionToken<MrdMenuElternteil>;
