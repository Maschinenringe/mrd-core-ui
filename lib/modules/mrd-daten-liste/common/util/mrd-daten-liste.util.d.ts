import { MrdSortDirection } from '../../../mrd-sort/common/model/mrd-sort.model';
import { MrdDatenListeSpalte, MrdDatenListeSuchfeld, MrdDatenListeWert } from '../model/mrd-daten-liste.model';
/** Reine Funktionen der `mrd-daten-liste`, damit Suche und Sortierung ohne Komponente testbar sind. */
export declare class MrdDatenListeUtil {
    private static readonly SORTIERER;
    static wertVon<T>(spalte: MrdDatenListeSpalte<T>, eintrag: T): MrdDatenListeWert;
    static alsText(wert: MrdDatenListeWert): string;
    /** Leere Werte stehen unabhaengig von der Richtung am Ende. */
    static vergleichen(a: MrdDatenListeWert, b: MrdDatenListeWert, richtung: Exclude<MrdSortDirection, ''>): number;
    /** Stabil: gleiche Werte behalten die Reihenfolge der Eingabe (Standardsortierung). */
    static sortieren<T>(eintraege: T[], wert: (eintrag: T) => MrdDatenListeWert, richtung: Exclude<MrdSortDirection, ''>): T[];
    static suchen<T>(eintraege: T[], suchtext: string, suchfelder: MrdDatenListeSuchfeld<T>[]): T[];
}
