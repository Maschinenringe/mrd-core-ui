import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
/***
 * Limitiert die Eingabe einer Zahl auf x (default 2) Nachkommastellen.
 */
export declare class DecimalNumberDirective implements OnChanges {
    private el;
    decimalNumber: boolean;
    nachkommastellen: number;
    private regex;
    private specialKeys;
    constructor(el: ElementRef);
    onKeyDown(event: KeyboardEvent): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DecimalNumberDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DecimalNumberDirective, "[decimalNumber]", never, { "decimalNumber": { "alias": "decimalNumber"; "required": false; }; "nachkommastellen": { "alias": "nachkommastellen"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_decimalNumber: unknown;
}
