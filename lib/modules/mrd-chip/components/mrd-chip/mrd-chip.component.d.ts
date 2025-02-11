import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MrdChipComponent implements AfterViewInit {
    private cdr;
    chipText: ElementRef<HTMLElement> | undefined;
    prefixIcon: string;
    suffixIcon: string;
    disabled: boolean;
    close: EventEmitter<void>;
    chipTextValue: string;
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    closeClicked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdChipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdChipComponent, "mrd-chip", never, { "prefixIcon": { "alias": "prefixIcon"; "required": false; }; "suffixIcon": { "alias": "suffixIcon"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "close": "close"; }, never, ["*"], false, never>;
}
