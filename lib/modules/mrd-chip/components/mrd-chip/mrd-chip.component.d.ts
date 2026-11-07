import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MrdChipComponent implements AfterViewInit {
    private cdr;
    chipText: ElementRef<HTMLElement> | undefined;
    primary: boolean;
    accent: boolean;
    warn: boolean;
    set color(value: string);
    get color(): string;
    private _color;
    set backgroundColor(value: string);
    get backgroundColor(): string;
    private _backgroundColor;
    clickable: boolean;
    closeable: boolean;
    prefixIcon: string;
    suffixIcon: string;
    set disabled(value: boolean);
    get disabled(): boolean;
    private _disabled;
    /**
     * Der Chip ist waehlbar: Ein Klick schaltet `selected` um und meldet den neuen Zustand ueber `selectedChange`.
     * Nicht gewaehlt ist er neutral grau, gewaehlt in der Farbe des Themes (`primary`/`accent`/`warn`, Standard `primary`)
     * bzw. in `backgroundColor`. Das Schliessen-Symbol blendet `closeable="false"` aus.
     */
    selectable: boolean;
    set selected(value: boolean);
    get selected(): boolean;
    private _selected;
    /**
     * Mit `selectable`: Der Chip schaltet nicht selbst um, sondern meldet den gewuenschten Zustand ueber `selectedChange`;
     * angezeigt wird allein `selected`. Fuer Auswahlen, die selbst entscheiden, ob ein Klick zaehlt (z. B. "Alle").
     */
    controlled: boolean;
    closeIconColor: string;
    closeIconCrossColor: string;
    close: EventEmitter<void>;
    selectedChange: EventEmitter<boolean>;
    /**
       * Die Konfiguration des Mrd-Buttons.
       *
       * @private
       * @type {MrdConfigModel}
       * @memberof MrdButtonComponent
       */
    private _config;
    chipTextValue: string;
    /** Mit `selectable`: Farben eines gewaehlten Chips, festgehalten aus den Eingaben */
    private auswahlHintergrund;
    private auswahlSchrift;
    private initialisiert;
    /** Vom Verwender gesetzte Farbe des Schliessen-Symbols; `null`: keine, die Farbe folgt dem Hintergrund */
    private eigeneSchliessenFarbe;
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    get istKlickbar(): boolean;
    chipGeklickt(): void;
    closeClicked(event: MouseEvent): void;
    private auswahlfarbenSetzen;
    private schliessenFarbenSetzen;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdChipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdChipComponent, "mrd-chip", never, { "primary": { "alias": "primary"; "required": false; }; "accent": { "alias": "accent"; "required": false; }; "warn": { "alias": "warn"; "required": false; }; "color": { "alias": "color"; "required": false; }; "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "clickable": { "alias": "clickable"; "required": false; }; "closeable": { "alias": "closeable"; "required": false; }; "prefixIcon": { "alias": "prefixIcon"; "required": false; }; "suffixIcon": { "alias": "suffixIcon"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "selectable": { "alias": "selectable"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "controlled": { "alias": "controlled"; "required": false; }; "closeIconColor": { "alias": "closeIconColor"; "required": false; }; "closeIconCrossColor": { "alias": "closeIconCrossColor"; "required": false; }; }, { "close": "close"; "selectedChange": "selectedChange"; }, never, ["*"], false, never>;
    static ngAcceptInputType_primary: unknown;
    static ngAcceptInputType_accent: unknown;
    static ngAcceptInputType_warn: unknown;
    static ngAcceptInputType_color: string;
    static ngAcceptInputType_backgroundColor: string;
    static ngAcceptInputType_clickable: unknown;
    static ngAcceptInputType_closeable: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_selectable: unknown;
    static ngAcceptInputType_selected: unknown;
    static ngAcceptInputType_controlled: unknown;
    static ngAcceptInputType_closeIconColor: string;
    static ngAcceptInputType_closeIconCrossColor: string;
}
