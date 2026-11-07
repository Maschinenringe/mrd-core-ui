import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
/** Was ein Radio-Button von seiner Gruppe braucht; als Token, damit Button und Gruppe sich nicht gegenseitig importieren. */
export interface MrdRadioGroupKontext {
    readonly value: unknown;
    readonly disabled: boolean;
    /** Meldet jede Aenderung von Wert oder Deaktivierung, damit die Buttons (OnPush) neu zeichnen */
    readonly geaendert: Observable<void>;
    auswaehlen(value: unknown): void;
    /** Pfeiltasten: zum naechsten (`1`) bzw. vorherigen (`-1`) waehlbaren Button der Gruppe */
    weiter(von: unknown, richtung: 1 | -1): void;
}
export declare const MRD_RADIO_GROUP: InjectionToken<MrdRadioGroupKontext>;
