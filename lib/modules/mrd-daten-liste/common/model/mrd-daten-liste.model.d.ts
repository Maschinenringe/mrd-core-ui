export type MrdDatenListeWert = string | number | boolean | Date | null | undefined;
export interface MrdDatenListeSpalte<T = any> {
    /** Eindeutig je Liste; ohne `wert` zugleich die Eigenschaft des Eintrags */
    schluessel: string;
    titel: string;
    /** Breite in px; bei `flex` die Mindestbreite, zusaetzlicher Platz (z. B. mobil) geht an diese Spalte */
    breite: number;
    flex?: boolean;
    /** Ueber den Spaltenkopf bzw. das Sortier-Select sortierbar */
    sortierbar?: boolean;
    /** Anzeige-, Such- und Sortierwert; ohne Angabe `eintrag[schluessel]` */
    wert?: (eintrag: T) => MrdDatenListeWert;
    ausrichtung?: 'links' | 'mitte' | 'rechts';
}
export interface MrdDatenListeBetrieb {
    id: number;
    name: string;
}
export interface MrdDatenListeSortierOption {
    schluessel: string;
    bezeichnung: string;
}
export interface MrdDatenListeZelleKontext<T> {
    $implicit: T;
    ausgewaehlt: boolean;
}
/** Durchsuchte Werte: Eigenschaftsname des Eintrags oder Funktion */
export type MrdDatenListeSuchfeld<T = any> = string | ((eintrag: T) => MrdDatenListeWert);
