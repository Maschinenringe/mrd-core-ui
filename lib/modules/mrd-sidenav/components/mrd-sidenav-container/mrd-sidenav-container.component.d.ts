import { AfterContentInit, ChangeDetectorRef, EventEmitter, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Seitenlayout aus `mrd-sidenav` (links) und `mrd-sidenav-content`.
 * Unterhalb von `breakpoint` ist die Ansicht mobil: die Sidenav nimmt die volle Breite ein und verdeckt den Inhalt, solange sie geoeffnet ist.
 */
export declare class MrdSidenavContainerComponent implements AfterContentInit, OnDestroy {
    private cdr;
    private sidenav;
    private content;
    /** Fensterbreite in px, ab der die Desktop-Ansicht gilt (Standard wie Tailwind `lg`) */
    set breakpoint(value: number);
    get breakpoint(): number;
    private _breakpoint;
    /** Wird beim Start und bei jedem Wechsel zwischen mobiler und Desktop-Ansicht ausgegeben */
    mobileChange: EventEmitter<boolean>;
    mobile: boolean;
    private initialisiert;
    private mediaQuery;
    private sidenavSubscription;
    private readonly mediaQueryListener;
    constructor(cdr: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private mediaQueryEinrichten;
    private mediaQueryEntfernen;
    private mobilSetzen;
    private zustandAnwenden;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdSidenavContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdSidenavContainerComponent, "mrd-sidenav-container", never, { "breakpoint": { "alias": "breakpoint"; "required": false; }; }, { "mobileChange": "mobileChange"; }, ["sidenav", "content"], ["mrd-sidenav", "mrd-sidenav-content"], false, never>;
    static ngAcceptInputType_breakpoint: unknown;
}
