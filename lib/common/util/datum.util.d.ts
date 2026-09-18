import moment from 'moment';
/**
 * Zentrale Datumserkennung fuer alle Datumsfelder der Bibliothek.
 *
 * Unterstuetzte Schreibweisen (Trennzeichen beliebig, z.B. . - + / , Leerzeichen):
 *   dd.mm.yyyy   dd.mm.yy   d.m.yyyy   d.m.yy   (auch gemischt: d.mm.yyyy, dd.m.yy)
 *   ddmmyyyy     ddmmyy     ddmm       dd
 *   yyyy-mm-dd   (EURO-Datum, erkannt am vierstelligen ersten Block)
 *
 * Fehlende Bestandteile werden vom heutigen Datum ergaenzt (dd -> heutiger Monat und heutiges Jahr).
 * Ein zweistelliges Jahr wird nach der moment-Regel aufgeloest: 00-68 -> 2000er, 69-99 -> 1900er.
 *
 * yy-mm-dd wird bewusst NICHT unterstuetzt, weil es nicht von dd-mm-yy unterscheidbar ist;
 * eine solche Eingabe wird als dd-mm-yy gelesen.
 */
export declare class MrdDatumUtil {
    static readonly ANZEIGE_FORMAT: string;
    private static readonly ZIFFERNBLOECKE;
    /** Liefert das erkannte Datum oder null, wenn die Eingabe kein gueltiges Datum ergibt. */
    static parse(wert: any): moment.Moment | null;
    /** True, wenn der Wert leer ist oder ein gueltiges Datum ergibt. */
    static istGueltig(wert: any): boolean;
    private static bauen;
    private static fuellen;
}
