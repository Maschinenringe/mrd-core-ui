import { CdkTable } from '@angular/cdk/table';
import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MrdTableDataSource } from '../model/mrd-table-data-source';
import * as i0 from "@angular/core";
/** Daten fuer die virtuelle Tabelle; eine MrdTableDataSource liefert sie bereits gefiltert und sortiert */
export type MrdTableVirtualScrollDaten<T> = MrdTableDataSource<T> | T[] | Observable<T[]>;
/** Gerenderter Ausschnitt: Index der ersten und hinter der letzten gerenderten Zeile (inkl. Puffer) */
export interface MrdTableVirtualScrollBereich {
    start: number;
    ende: number;
}
/**
 * Virtuelles Scrollen fuer `mrd-table`: gerendert werden nur die sichtbaren Zeilen samt Puffer, oben und unten halten
 * Platzhalter die Scrollhoehe. Ohne transform, daher funktionieren angeheftete Kopf-/Fusszeilen und Spalten weiter.
 *
 * Die Daten kommen ueber die Direktive statt ueber `dataSource`; alle Datenzeilen muessen genau `zeilenHoehe` hoch sein.
 * Gescrollt wird im naechsten scrollbaren Vorfahren (Hoehe bzw. max-height und overflow: auto setzen).
 *
 * `<div class="h-96 overflow-auto"><table mrd-table [mrdTableVirtualScroll]="quelle" zeilenHoehe="48">...</table></div>`
 */
export declare class MrdTableVirtualScrollDirective<T> implements OnInit, AfterViewInit, OnDestroy {
    private tabelle;
    private elementRef;
    private ngZone;
    set daten(daten: MrdTableVirtualScrollDaten<T>);
    /** Feste Hoehe jeder Datenzeile in px */
    zeilenHoehe: number;
    /** Zusaetzlich gerenderte Zeilen ober- und unterhalb des sichtbaren Bereichs */
    puffer: number;
    readonly bereichGeaendert: EventEmitter<MrdTableVirtualScrollBereich>;
    bereich: MrdTableVirtualScrollBereich;
    /** Anzahl aller Zeilen (nach Filter) */
    get anzahl(): number;
    private alle;
    private readonly quelle;
    private datenAbo;
    private vorherigeQuelle;
    private scrollContainer;
    private platzhalterOben;
    private platzhalterUnten;
    private groessenBeobachter;
    private bereit;
    private readonly scrollHandler;
    constructor(tabelle: CdkTable<T>, elementRef: ElementRef<HTMLElement>, ngZone: NgZone);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /** Scrollt zur Zeile mit dem Index (bezogen auf die gefilterten und sortierten Daten) */
    scrollToIndex(index: number, behavior?: ScrollBehavior): void;
    /** Berechnet den Ausschnitt; `erzwingen`, wenn sich die Daten geaendert haben */
    private aktualisieren;
    /**
     * Abstand vom Anfang des Scrollinhalts bis zur ersten Datenzeile (Inhalt ueber der Tabelle und Kopfzeilen),
     * gemessen am oberen Platzhalter; angeheftete Kopfzeilen verschieben ihn nicht
     */
    private datenBeginn;
    private scrollContainerSuchen;
    /**
     * Platzhalter direkt vor der ersten und hinter der letzten Datenzeile. Angular fuegt Zeilen vor dem Anker des
     * Zeilen-Outlets ein, die Platzhalter bleiben daher an ihrem Platz.
     */
    private platzhalterEinfuegen;
    private platzhalterErzeugen;
    private platzhalterSetzen;
    /** Bleibt auch mit Hoehe 0 im Layout, weil datenBeginn() am oberen Platzhalter misst */
    private platzhalterHoehe;
    private spaltenAnzahl;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdTableVirtualScrollDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdTableVirtualScrollDirective<any>, "table[mrd-table][mrdTableVirtualScroll], mrd-table[mrdTableVirtualScroll]", ["mrdTableVirtualScroll"], { "daten": { "alias": "mrdTableVirtualScroll"; "required": true; }; "zeilenHoehe": { "alias": "zeilenHoehe"; "required": true; }; "puffer": { "alias": "puffer"; "required": false; }; }, { "bereichGeaendert": "bereichGeaendert"; }, never, never, false, never>;
    static ngAcceptInputType_zeilenHoehe: unknown;
    static ngAcceptInputType_puffer: unknown;
}
