import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, TemplateRef, TrackByFunction } from '@angular/core';
import { MrdVirtualScrollItemContext, MrdVirtualScrollItemSize, MrdVirtualScrollPosition, MrdVirtualScrollRange } from '../../common/model/mrd-virtual-scroll.model';
import * as i0 from "@angular/core";
import * as i1 from "../../common/model/mrd-virtual-scroll.model";
interface MrdVirtualScrollEintrag<T> {
    item: T;
    index: number;
    hoehe: number;
}
/**
 * Rendert von einer langen Liste nur die sichtbaren Zeilen (plus Puffer).
 * Voraussetzungen: die Hoehe jeder Zeile ist vorab bekannt (`itemSize` als Zahl oder Funktion je Eintrag)
 * und das Element selbst hat eine feste Hoehe (z. B. ueber `height` oder `flex: 1`) oder `maxHeight` ist gesetzt.
 */
export declare class MrdVirtualScrollComponent<T = any> implements AfterViewInit, OnDestroy {
    private elementRef;
    private cdr;
    private ngZone;
    private contentItem;
    /** Alternativ zum Content-Template, z. B. wenn eine umschliessende Komponente das Template durchreicht */
    itemTemplate: TemplateRef<MrdVirtualScrollItemContext<T>>;
    set items(value: T[]);
    get items(): T[];
    private _items;
    /**
     * Zeilenhoehe in px fuer alle Eintraege oder `(item, index) => px` je Eintrag.
     * Aendert sich das Ergebnis der Funktion fuer vorhandene Items, danach `checkViewportSize()` aufrufen.
     */
    set itemSize(value: MrdVirtualScrollItemSize<T>);
    get itemSize(): MrdVirtualScrollItemSize<T>;
    private _itemSize;
    /**
     * Nur bei `itemSize` als Funktion: offsets[i] ist die Oberkante von Eintrag i, offsets[anzahl] die Gesamthoehe.
     * Bei fester Hoehe wird gerechnet statt gespeichert.
     */
    private offsets;
    /** Anzahl zusaetzlich gerenderter Zeilen ober- und unterhalb des sichtbaren Bereichs */
    buffer: number;
    trackBy: TrackByFunction<T>;
    /** Hoehe in px, bis zu der das Element mit seinem Inhalt waechst; ohne Angabe bestimmt der Aufrufer die Hoehe */
    maxHeight: number;
    visibleRangeChange: EventEmitter<MrdVirtualScrollRange>;
    sichtbareEintraege: MrdVirtualScrollEintrag<T>[];
    versatz: number;
    gesamtHoehe: number;
    private bereich;
    private initialisiert;
    private animationFrame;
    private resizeObserver;
    private readonly scrollListener;
    readonly eintragTrackBy: TrackByFunction<MrdVirtualScrollEintrag<T>>;
    constructor(elementRef: ElementRef<HTMLElement>, cdr: ChangeDetectorRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    get template(): TemplateRef<MrdVirtualScrollItemContext<T>>;
    get automatischeHoehe(): number;
    get renderedRange(): MrdVirtualScrollRange;
    /** Scrollt so, dass der Eintrag mit dem Index sichtbar ist. */
    scrollToIndex(index: number, position?: MrdVirtualScrollPosition, behavior?: ScrollBehavior): void;
    /**
     * Neu berechnen, wenn sich die Groesse von aussen geaendert hat, ohne dass der ResizeObserver es bemerkt,
     * oder wenn `itemSize` als Funktion fuer vorhandene Items andere Hoehen liefert.
     */
    checkViewportSize(): void;
    private offsetsBerechnen;
    private oberkante;
    private hoeheVon;
    /** Index des Eintrags, der die Position y (px ab Listenanfang) enthaelt */
    private indexBei;
    private bereichPlanen;
    /**
     * @param erzwingen Auch neu aufbauen, wenn sich der Bereich nicht geaendert hat (z. B. neue Items)
     * @param rendern Sofort rendern; im Input-Setter nicht noetig, weil die Change Detection ohnehin folgt
     */
    private bereichBerechnen;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdVirtualScrollComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdVirtualScrollComponent<any>, "mrd-virtual-scroll", never, { "itemTemplate": { "alias": "itemTemplate"; "required": false; }; "items": { "alias": "items"; "required": false; }; "itemSize": { "alias": "itemSize"; "required": false; }; "buffer": { "alias": "buffer"; "required": false; }; "trackBy": { "alias": "trackBy"; "required": false; }; "maxHeight": { "alias": "maxHeight"; "required": false; }; }, { "visibleRangeChange": "visibleRangeChange"; }, ["contentItem"], never, false, never>;
    static ngAcceptInputType_itemSize: i1.MrdVirtualScrollItemSize | string;
    static ngAcceptInputType_buffer: unknown;
    static ngAcceptInputType_maxHeight: unknown;
}
export {};
