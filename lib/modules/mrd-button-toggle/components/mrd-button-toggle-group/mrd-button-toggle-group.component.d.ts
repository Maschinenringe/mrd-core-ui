import { AfterViewInit, ChangeDetectorRef, EventEmitter, QueryList } from '@angular/core';
import { BaseObject } from 'mrd-core';
import { MrdButtonComponent } from './../../../mrd-button/components/mrd-button/mrd-button.component';
import * as i0 from "@angular/core";
export declare class MrdButtonToggleGroupComponent extends BaseObject implements AfterViewInit {
    protected cdr: ChangeDetectorRef;
    buttons: QueryList<MrdButtonComponent>;
    rounded: boolean;
    set disabled(value: boolean);
    multiple: boolean;
    set index(index: number | number[]);
    get index(): number | number[];
    private _selectedIndex;
    /**
     * Gibt an, ob die ButtonGroup das Theme "primary" hat.
     *
     * Hierdurch wird die Hintergrundfarbe des Buttons auf die primäre Farbe des Themes gesetzt.
     *
     * @memberof MrdButtonComponent
     */
    primary: boolean;
    /**
     * Gibt an, ob die ButtonGroup das Theme "accent" hat.
     *
     * Hierdurch wird die Hintergrundfarbe des Buttons auf die Akzentfarbe des Themes gesetzt.
     *
     * @memberof MrdButtonComponent
     */
    accent: boolean;
    /**
     * Gibt an, ob die ButtonGroup das Theme "warn" hat.
     *
     * Hierdurch wird die Hintergrundfarbe des Buttons auf die Warnfarbe des Themes gesetzt.
     *
     * @memberof MrdButtonComponent
     */
    warn: boolean;
    /**
     * Setzt die Grundfarbe des Buttons.
     *
     * Diese wird je nach Style des Buttons als Hintergrundfarbe oder Textfarbe verwendet.
     *
     * Es können Hex-, RGB- oder RGBA-Werte, sowie "primary", "accent" oder "warn" angegeben werden.
     *
     * @memberof MrdButtonComponent
     */
    customTextColor: string;
    /**
     * Setzt die Hintergrundfarbe des Buttons.
     *
     * Es können Hex-, RGB- oder RGBA-Werte angegeben werden.
     *
     * @memberof MrdButtonComponent
     */
    customBgColor: string;
    /**
     * Gibt an, ob die benutzerdefinierte Textfarbe nicht durch ein defniertes Thema überschrieben werden soll.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    keepCustomTextColor: boolean;
    /**
     * Gibt an, ob die benutzerdefinierte Hintergrundfarbe nicht durch ein definiertes Thema überschrieben werden soll.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    keepCustomBgColor: boolean;
    customToggleUnselectedColor: string;
    customToggleUnselectedTextColor: string;
    customToggleSelectedColor: string;
    customToggleSelectedTextColor: string;
    /**
     * Die Mindesthöhe des Buttons.
     *
     * @type {string | number}
     * @memberof MrdButtonComponent
     */
    minHeight: string;
    /**
     * Die Schriftgröße des Buttons.
     *
     * @type {string | number}
     * @memberof MrdButtonComponent
     */
    fontSize: string;
    /**
     * Der Radius der Ecken des Buttons.
     *
     * @type {string | number}
     * @memberof MrdButtonComponent
     */
    borderRadius: string;
    set value(value: any | any[]);
    get value(): any | any[];
    private _value;
    valueChange: EventEmitter<any>;
    /**
     * Das Klick-Event durch den Nutzer.
     *
     * @type {EventEmitter<Event>}
     * @memberof MrdButtonComponent
     */
    indexChange: EventEmitter<number | number[]>;
    /**
     * Die Konfiguration des Mrd-Buttons.
     *
     * @private
     * @type {MrdConfigModel}
     * @memberof MrdButtonComponent
     */
    private _config;
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdButtonToggleGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdButtonToggleGroupComponent, "mrd-button-toggle-group", never, { "rounded": { "alias": "rounded"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "index": { "alias": "index"; "required": false; }; "primary": { "alias": "primary"; "required": false; }; "accent": { "alias": "accent"; "required": false; }; "warn": { "alias": "warn"; "required": false; }; "customTextColor": { "alias": "color"; "required": false; }; "customBgColor": { "alias": "backgroundColor"; "required": false; }; "keepCustomTextColor": { "alias": "keepCustomTextColor"; "required": false; }; "keepCustomBgColor": { "alias": "keepCustomBgColor"; "required": false; }; "customToggleUnselectedColor": { "alias": "unselectedBgColor"; "required": false; }; "customToggleUnselectedTextColor": { "alias": "unselectedTextColor"; "required": false; }; "customToggleSelectedColor": { "alias": "selectedBgColor"; "required": false; }; "customToggleSelectedTextColor": { "alias": "selectedTextColor"; "required": false; }; "minHeight": { "alias": "minHeight"; "required": false; }; "fontSize": { "alias": "fontSize"; "required": false; }; "borderRadius": { "alias": "borderRadius"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "valueChange": "valueChange"; "indexChange": "indexChange"; }, ["buttons"], ["*"], false, never>;
    static ngAcceptInputType_rounded: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_multiple: unknown;
    static ngAcceptInputType_index: unknown;
    static ngAcceptInputType_primary: unknown;
    static ngAcceptInputType_accent: unknown;
    static ngAcceptInputType_warn: unknown;
    static ngAcceptInputType_customTextColor: string;
    static ngAcceptInputType_customBgColor: string;
    static ngAcceptInputType_keepCustomTextColor: unknown;
    static ngAcceptInputType_keepCustomBgColor: unknown;
    static ngAcceptInputType_customToggleUnselectedColor: string;
    static ngAcceptInputType_customToggleUnselectedTextColor: string;
    static ngAcceptInputType_customToggleSelectedColor: string;
    static ngAcceptInputType_customToggleSelectedTextColor: string;
    static ngAcceptInputType_minHeight: string | number;
    static ngAcceptInputType_fontSize: string | number;
    static ngAcceptInputType_borderRadius: string | number;
}
