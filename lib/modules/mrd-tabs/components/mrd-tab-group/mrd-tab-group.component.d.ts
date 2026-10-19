import { BaseObject, ObservableValue } from 'mrd-core';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, QueryList } from '@angular/core';
import { Observable } from 'rxjs';
import { MrdTabComponent } from '../mrd-tab/mrd-tab.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MrdTabBodyComponent } from '../mrd-tab-body/mrd-tab-body.component';
import * as i0 from "@angular/core";
/** Rueckfrage vor einem Tabwechsel per Klick, z. B. "Aenderungen verwerfen?"; `false` behaelt den aktuellen Tab */
export type MrdTabWechselPruefung = (neuerIndex: number, aktuellerIndex: number) => boolean | Observable<boolean>;
export declare class MrdTabGroupComponent extends BaseObject implements AfterViewInit {
    private cdr;
    private router;
    private route;
    tabs: QueryList<MrdTabComponent>;
    tabBodys: QueryList<MrdTabBodyComponent>;
    tabHeader: QueryList<ElementRef>;
    rounded: boolean;
    labelsFit: boolean;
    noHeader: boolean;
    /** Linie unter dem aktiven Tab, die beim Wechsel mitwandert; standardmaessig aus */
    indicator: boolean;
    queryParameterActive: string;
    set headerHeight(value: number);
    get headerHeight(): number;
    private _headerHeight;
    set selectedIndex(value: number);
    get selectedIndex(): number;
    private _selectedIndex;
    changeTab: ObservableValue<number>;
    /**
     * Wird vor jedem Tabwechsel per Klick auf den Kopf gefragt; Wechsel per `selectedIndex`/`changeTab` laufen ohne Rueckfrage.
     * Ein Observable zaehlt mit seinem ersten Wert.
     */
    canChangeTab: MrdTabWechselPruefung;
    selectedTabChanged: EventEmitter<MrdTabComponent>;
    selectedTabIndexChanged: EventEmitter<number>;
    /** Fuer `[(selectedIndex)]`, gleicher Wert wie `selectedTabIndexChanged` */
    selectedIndexChange: EventEmitter<number>;
    tabUnderlineLeft: number;
    tabUnderlineWidth: number;
    private activeIndex;
    private activeTab;
    private activeTabBody;
    constructor(cdr: ChangeDetectorRef, router: Router, route: ActivatedRoute);
    ngAfterViewInit(): void;
    /** Klick auf einen Tabkopf: gesperrte Tabs ignorieren, sonst `canChangeTab` fragen */
    tabGeklickt(tab: MrdTabComponent): void;
    private tabsIndizieren;
    /** Der aktive Tab bleibt aktiv, auch wenn sich sein Index verschiebt; faellt er weg, wird der naechstliegende gewaehlt */
    private tabsGeaendert;
    private unterstreichungSetzen;
    /**
     * Nur bei echter Aenderung und erst nach dem laufenden Change-Detection-Durchlauf,
     * sonst wirft `[(selectedIndex)]` beim ersten Rendern ExpressionChangedAfterItHasBeenChecked
     */
    private indexMelden;
    activateTab(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdTabGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdTabGroupComponent, "mrd-tab-group", never, { "rounded": { "alias": "rounded"; "required": false; }; "labelsFit": { "alias": "labelsFit"; "required": false; }; "noHeader": { "alias": "noHeader"; "required": false; }; "indicator": { "alias": "indicator"; "required": false; }; "queryParameterActive": { "alias": "queryParameterActive"; "required": false; }; "headerHeight": { "alias": "headerHeight"; "required": false; }; "selectedIndex": { "alias": "selectedIndex"; "required": false; }; "changeTab": { "alias": "changeTab"; "required": false; }; "canChangeTab": { "alias": "canChangeTab"; "required": false; }; }, { "selectedTabChanged": "selectedTabChanged"; "selectedTabIndexChanged": "selectedTabIndexChanged"; "selectedIndexChange": "selectedIndexChange"; }, ["tabs"], never, false, never>;
    static ngAcceptInputType_rounded: unknown;
    static ngAcceptInputType_labelsFit: unknown;
    static ngAcceptInputType_noHeader: unknown;
    static ngAcceptInputType_indicator: unknown;
}
