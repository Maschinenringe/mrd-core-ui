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
    closeIconColor: string;
    closeIconCrossColor: string;
    close: EventEmitter<void>;
    /**
       * Die Konfiguration des Mrd-Buttons.
       *
       * @private
       * @type {MrdConfigModel}
       * @memberof MrdButtonComponent
       */
    private _config;
    chipTextValue: string;
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    closeClicked(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdChipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdChipComponent, "mrd-chip", never, { "primary": { "alias": "primary"; "required": false; }; "accent": { "alias": "accent"; "required": false; }; "warn": { "alias": "warn"; "required": false; }; "color": { "alias": "color"; "required": false; }; "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "clickable": { "alias": "clickable"; "required": false; }; "closeable": { "alias": "closeable"; "required": false; }; "prefixIcon": { "alias": "prefixIcon"; "required": false; }; "suffixIcon": { "alias": "suffixIcon"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "closeIconColor": { "alias": "closeIconColor"; "required": false; }; "closeIconCrossColor": { "alias": "closeIconCrossColor"; "required": false; }; }, { "close": "close"; }, never, ["*"], false, never>;
    static ngAcceptInputType_primary: unknown;
    static ngAcceptInputType_accent: unknown;
    static ngAcceptInputType_warn: unknown;
    static ngAcceptInputType_color: string;
    static ngAcceptInputType_backgroundColor: string;
    static ngAcceptInputType_clickable: unknown;
    static ngAcceptInputType_closeable: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_closeIconColor: string;
    static ngAcceptInputType_closeIconCrossColor: string;
}
