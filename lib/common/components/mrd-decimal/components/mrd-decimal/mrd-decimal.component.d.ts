import { ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MrdDecimalComponent {
    private cdr;
    backgroundColor: string;
    set textEnd(value: boolean);
    get textEnd(): boolean;
    private _textEnd;
    set centered(value: boolean);
    get centered(): boolean;
    private _centered;
    set value(value: number);
    get value(): number;
    private _value;
    private decimalString;
    private digitsString;
    maxDigits: number;
    minDigits: number;
    tausendertrennpunkt: boolean;
    smallDigits: boolean;
    constructor(cdr: ChangeDetectorRef);
    get decimalValue(): string;
    get digitsValue(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdDecimalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdDecimalComponent, "mrd-decimal", never, { "backgroundColor": { "alias": "backgroundColor"; "required": false; }; "textEnd": { "alias": "text-end"; "required": false; }; "centered": { "alias": "text-centered"; "required": false; }; "value": { "alias": "value"; "required": false; }; "maxDigits": { "alias": "maxDigits"; "required": false; }; "minDigits": { "alias": "minDigits"; "required": false; }; "tausendertrennpunkt": { "alias": "tausendertrennpunkt"; "required": false; }; "smallDigits": { "alias": "smallDigits"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_textEnd: unknown;
    static ngAcceptInputType_centered: unknown;
    static ngAcceptInputType_value: unknown;
    static ngAcceptInputType_maxDigits: unknown;
    static ngAcceptInputType_minDigits: unknown;
    static ngAcceptInputType_tausendertrennpunkt: unknown;
    static ngAcceptInputType_smallDigits: unknown;
}
