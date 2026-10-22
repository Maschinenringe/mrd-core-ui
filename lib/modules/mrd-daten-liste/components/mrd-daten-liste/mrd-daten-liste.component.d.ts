import { ChangeDetectorRef, EventEmitter, OnChanges, QueryList, SimpleChanges, TemplateRef, TrackByFunction } from '@angular/core';
import { BaseObject } from 'mrd-core';
import { MrdSortierung } from '../../../mrd-sort/common/model/mrd-sort.model';
import { MrdDatenListeZelleDirective } from '../../common/directive/mrd-daten-liste-zelle.directive';
import { MrdDatenListeBetrieb, MrdDatenListeSortierOption, MrdDatenListeSpalte, MrdDatenListeSuchfeld, MrdDatenListeZelleKontext } from '../../common/model/mrd-daten-liste.model';
import * as i0 from "@angular/core";
/**
 * Liste mit Spalten fuer Stammdaten-Seiten: oben Suche, Betriebs-Filter, Sortierung, Inaktiv-Toggle und eigene Filter
 * (`[mrdDatenListeFilter]`), in der Mitte Spaltenkoepfe und virtuelle Liste, unten eigene Aktionen (`[mrdDatenListeAktionen]`).
 * Die Breite ergibt sich aus den Spalten; in einer mobilen `mrd-sidenav` nimmt die Liste die volle Breite ein.
 * `eintraege` kommen in der Standardsortierung; jede Sortierung laesst sich wieder darauf zuruecksetzen.
 */
export declare class MrdDatenListeComponent<T = any> extends BaseObject implements OnChanges {
    private cdr;
    static readonly STANDARD: string;
    static readonly BETRIEB: string;
    set zellen(value: QueryList<MrdDatenListeZelleDirective<T>>);
    private liste;
    /** In der Standardsortierung, z. B. direkt aus dem Store */
    eintraege: T[];
    spalten: MrdDatenListeSpalte<T>[];
    identifier: string;
    /** Ausgewaehlter Eintrag; bleibt sichtbar (angeheftet), auch wenn er herausgescrollt ist */
    ausgewaehlt: T;
    zeilenhoehe: number;
    suche: boolean;
    suchPlatzhalter: string;
    /** Ohne Angabe werden die Werte aller Spalten durchsucht */
    suchfelder: MrdDatenListeSuchfeld<T>[];
    /** Kuerzere Suchtexte filtern nicht */
    suchMindestlaenge: number;
    suchVerzoegerung: number;
    /** Sortieren per Klick auf die Spaltenkoepfe (`sortierbar`); der dritte Klick stellt die Standardsortierung wieder her */
    kopfSortierung: boolean;
    /** Sortieren per Select (sortierbare Spalten, bei mehreren Betrieben auch "Betrieb") und Richtungs-Schalter */
    sortierAuswahl: boolean;
    /** Leer oder ohne Richtung: Standardsortierung */
    sortierung: MrdSortierung;
    /** Kennzeichnet inaktive Eintraege; nur damit erscheint der Toggle "Inaktive ausblenden" */
    inaktivPruefung: (eintrag: T) => boolean;
    inaktiveAusblenden: boolean;
    /** Ab zwei Betrieben erscheint der Betriebs-Filter */
    betriebe: MrdDatenListeBetrieb[];
    /** Eintraege ohne Betrieb (betriebsuebergreifend) bleiben bei jedem Betriebs-Filter sichtbar */
    betriebSchluessel: string;
    /** Leer: alle Betriebe */
    betriebFilter: number[];
    laedt: boolean;
    leerText: string;
    /** Volle Breite statt Breite aus den Spalten (mobil in einer `mrd-sidenav` automatisch) */
    volleBreite: boolean;
    /** Klick auf eine Zeile; ob sie ausgewaehlt wird, entscheidet der Aufrufer ueber `ausgewaehlt` */
    auswahl: EventEmitter<T>;
    sortierungChange: EventEmitter<MrdSortierung>;
    inaktiveAusblendenChange: EventEmitter<boolean>;
    betriebFilterChange: EventEmitter<number[]>;
    angezeigt: T[];
    suchtext: string;
    sortierOptionen: MrdDatenListeSortierOption[];
    readonly trackBy: TrackByFunction<T>;
    private zellenTemplates;
    private wirksamerSuchtext;
    private readonly suchtext$;
    constructor(cdr: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    get betriebFilterSichtbar(): boolean;
    get sortierSchluessel(): string;
    get absteigend(): boolean;
    get istSortiert(): boolean;
    /** Summe der Spaltenbreiten; die Liste selbst ergaenzt Innenabstand und Scrollbar */
    get spaltenBreite(): number;
    zelle(schluessel: string): TemplateRef<MrdDatenListeZelleKontext<T>> | undefined;
    text(spalte: MrdDatenListeSpalte<T>, eintrag: T): string;
    istAusgewaehlt(eintrag: T): boolean;
    istInaktiv(eintrag: T): boolean;
    suchtextGeaendert(text: string): void;
    sortierungSetzen(sortierung: MrdSortierung): void;
    sortierSchluesselGeaendert(schluessel: string): void;
    richtungUmschalten(): void;
    inaktiveAusblendenGeaendert(ausblenden: boolean): void;
    betriebFilterGeaendert(ids: number[]): void;
    zurAuswahlScrollen(): void;
    private aktualisieren;
    private sortierOptionenBerechnen;
    private sortierwert;
    private idVon;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdDatenListeComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdDatenListeComponent<any>, "mrd-daten-liste", never, { "eintraege": { "alias": "eintraege"; "required": false; }; "spalten": { "alias": "spalten"; "required": false; }; "identifier": { "alias": "identifier"; "required": false; }; "ausgewaehlt": { "alias": "ausgewaehlt"; "required": false; }; "zeilenhoehe": { "alias": "zeilenhoehe"; "required": false; }; "suche": { "alias": "suche"; "required": false; }; "suchPlatzhalter": { "alias": "suchPlatzhalter"; "required": false; }; "suchfelder": { "alias": "suchfelder"; "required": false; }; "suchMindestlaenge": { "alias": "suchMindestlaenge"; "required": false; }; "suchVerzoegerung": { "alias": "suchVerzoegerung"; "required": false; }; "kopfSortierung": { "alias": "kopfSortierung"; "required": false; }; "sortierAuswahl": { "alias": "sortierAuswahl"; "required": false; }; "sortierung": { "alias": "sortierung"; "required": false; }; "inaktivPruefung": { "alias": "inaktivPruefung"; "required": false; }; "inaktiveAusblenden": { "alias": "inaktiveAusblenden"; "required": false; }; "betriebe": { "alias": "betriebe"; "required": false; }; "betriebSchluessel": { "alias": "betriebSchluessel"; "required": false; }; "betriebFilter": { "alias": "betriebFilter"; "required": false; }; "laedt": { "alias": "laedt"; "required": false; }; "leerText": { "alias": "leerText"; "required": false; }; "volleBreite": { "alias": "volleBreite"; "required": false; }; }, { "auswahl": "auswahl"; "sortierungChange": "sortierungChange"; "inaktiveAusblendenChange": "inaktiveAusblendenChange"; "betriebFilterChange": "betriebFilterChange"; }, ["zellen"], ["[mrdDatenListeFilter]", "[mrdDatenListeAktionen]"], false, never>;
    static ngAcceptInputType_zeilenhoehe: unknown;
    static ngAcceptInputType_suche: unknown;
    static ngAcceptInputType_suchMindestlaenge: unknown;
    static ngAcceptInputType_suchVerzoegerung: unknown;
    static ngAcceptInputType_kopfSortierung: unknown;
    static ngAcceptInputType_sortierAuswahl: unknown;
    static ngAcceptInputType_inaktiveAusblenden: unknown;
    static ngAcceptInputType_laedt: unknown;
    static ngAcceptInputType_volleBreite: unknown;
}
