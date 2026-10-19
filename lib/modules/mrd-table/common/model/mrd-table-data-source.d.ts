import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { MrdSortDirective } from '../../../mrd-sort/common/directive/mrd-sort.directive';
/**
 * Datenquelle fuer `mrd-table` mit clientseitiger Sortierung (ueber `mrdSort`) und Textfilter.
 * Ohne Sortierung und Filter genuegt ein einfaches Array als `dataSource`.
 *
 * `quelle = new MrdTableDataSource(zeilen); quelle.sort = this.sortierung; quelle.filter = 'weizen';`
 */
export declare class MrdTableDataSource<T> extends DataSource<T> {
    /** Ungefilterte, unsortierte Daten */
    get data(): T[];
    set data(daten: T[]);
    private _daten;
    /** Suchtext; leer zeigt alle Zeilen */
    get filter(): string;
    set filter(filter: string);
    private _filter;
    /** Sortier-Direktive der Tabelle; sortiert wird bei jedem Klick und bei Aenderung von `[mrdSort]` */
    get sort(): MrdSortDirective | null;
    set sort(sort: MrdSortDirective | null);
    private _sort;
    /** Daten nach dem Filter, vor der Sortierung */
    filteredData: T[];
    /** Liefert den Sortierwert einer Zeile fuer die Spalte (Id aus `mrd-sort-header`); Standard ist die gleichnamige Eigenschaft */
    sortingDataAccessor: (zeile: T, spalte: string) => string | number | null | undefined;
    /** true, wenn die Zeile zum (kleingeschriebenen, getrimmten) Filter passt; Standard durchsucht alle einfachen Werte */
    filterPredicate: (zeile: T, filter: string) => boolean;
    private readonly renderDaten;
    private sortAbo;
    constructor(daten?: T[]);
    connect(): Observable<T[]>;
    disconnect(): void;
    /**
     * Sortiert eine Kopie der Daten; Leerwerte (null, undefined, '') stehen in beiden Richtungen am Ende.
     * Texte werden deutsch verglichen (Umlaute, Zahlen im Text numerisch, Gross-/Kleinschreibung egal).
     */
    sortData(daten: T[], sort: MrdSortDirective): T[];
    private sortBeobachten;
    private aktualisieren;
    private static istLeer;
    private static textWerte;
}
