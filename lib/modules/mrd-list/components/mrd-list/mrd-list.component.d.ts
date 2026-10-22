import { ChangeDetectorRef, EventEmitter, TrackByFunction } from '@angular/core';
import { MrdConfigModel } from '../../../../common/model/config.model';
import { MrdListItemTemplateDirective } from '../../common/directive/mrd-list-item-template.directive';
import { MrdVirtualScrollItemSize, MrdVirtualScrollPosition, MrdVirtualScrollRange } from '../../../mrd-virtual-scroll/common/model/mrd-virtual-scroll.model';
import * as i0 from "@angular/core";
import * as i1 from "../../../mrd-virtual-scroll/common/model/mrd-virtual-scroll.model";
/**
 * Liste aus `mrd-list-item`s. Ohne `virtualScroll` werden die Eintraege normal projiziert,
 * mit `virtualScroll` kommen sie ueber `[items]` und ein `<ng-template mrdListItem>`.
 * Farben und Trennlinie werden als CSS-Variablen an die Eintraege vererbt.
 */
export declare class MrdListComponent<T = any> {
    private cdr;
    itemTemplate: MrdListItemTemplateDirective<T>;
    private virtualScrollComponent;
    private virtualScrollElement;
    /** Trennlinie unter jedem Eintrag */
    divider: boolean;
    /** Eintraege sind anklickbar: Zeiger-Cursor und Hover-Farbe */
    selectable: boolean;
    virtualScroll: boolean;
    /** Nur mit `virtualScroll` */
    set items(value: T[]);
    get items(): T[];
    private _items;
    /**
     * Nur mit `virtualScroll`: dieser Eintrag (z. B. die Auswahl) bleibt oben bzw. unten sichtbar, solange er herausgescrollt ist.
     * Erkannt wird er ueber `trackBy`, ohne `trackBy` ueber die Objekt-Identitaet.
     */
    set angeheftet(value: T);
    get angeheftet(): T;
    private _angeheftet;
    /**
     * Zeilenhoehe in px; mit `virtualScroll` die feste Hoehe (Zahl oder `(item, index) => px` je Eintrag),
     * ohne `virtualScroll` die Mindesthoehe (nur als Zahl)
     */
    itemSize: MrdVirtualScrollItemSize<T>;
    /** Nur mit `virtualScroll`: zusaetzlich gerenderte Zeilen ober- und unterhalb des sichtbaren Bereichs */
    buffer: number;
    /** Nur mit `virtualScroll`: maximale Hoehe in px, bis dahin waechst die Liste mit ihrem Inhalt */
    maxHeight: number;
    set trackBy(value: TrackByFunction<T>);
    get trackBy(): TrackByFunction<T>;
    private _trackBy;
    selectedBackgroundColor: string;
    selectedTextColor: string;
    hoverColor: string;
    dividerColor: string;
    visibleRangeChange: EventEmitter<MrdVirtualScrollRange>;
    readonly config: MrdConfigModel;
    /** Wo der angeheftete Eintrag gerade eingeblendet ist; `null`, solange er in der Liste sichtbar ist */
    anheftPosition: 'oben' | 'unten' | null;
    anheftIndex: number;
    scrollbarBreite: number;
    private sichtbarerBereich;
    constructor(cdr: ChangeDetectorRef);
    get mindestZeilenhoehe(): number;
    get anheftHoehe(): number;
    sichtbarerBereichGeaendert(bereich: MrdVirtualScrollRange): void;
    /** Nur mit `virtualScroll` wirksam */
    scrollToIndex(index: number, position?: MrdVirtualScrollPosition, behavior?: ScrollBehavior): void;
    /** Nur mit `virtualScroll` wirksam */
    checkViewportSize(): void;
    private anheftIndexBerechnen;
    private anheftPositionBerechnen;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdListComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdListComponent<any>, "mrd-list", never, { "divider": { "alias": "divider"; "required": false; }; "selectable": { "alias": "selectable"; "required": false; }; "virtualScroll": { "alias": "virtualScroll"; "required": false; }; "items": { "alias": "items"; "required": false; }; "angeheftet": { "alias": "angeheftet"; "required": false; }; "itemSize": { "alias": "itemSize"; "required": false; }; "buffer": { "alias": "buffer"; "required": false; }; "maxHeight": { "alias": "maxHeight"; "required": false; }; "trackBy": { "alias": "trackBy"; "required": false; }; "selectedBackgroundColor": { "alias": "selectedBackgroundColor"; "required": false; }; "selectedTextColor": { "alias": "selectedTextColor"; "required": false; }; "hoverColor": { "alias": "hoverColor"; "required": false; }; "dividerColor": { "alias": "dividerColor"; "required": false; }; }, { "visibleRangeChange": "visibleRangeChange"; }, ["itemTemplate"], ["*"], false, never>;
    static ngAcceptInputType_divider: unknown;
    static ngAcceptInputType_selectable: unknown;
    static ngAcceptInputType_virtualScroll: unknown;
    static ngAcceptInputType_itemSize: i1.MrdVirtualScrollItemSize | string;
    static ngAcceptInputType_buffer: unknown;
    static ngAcceptInputType_maxHeight: unknown;
    static ngAcceptInputType_selectedBackgroundColor: string;
    static ngAcceptInputType_selectedTextColor: string;
    static ngAcceptInputType_hoverColor: string;
    static ngAcceptInputType_dividerColor: string;
}
