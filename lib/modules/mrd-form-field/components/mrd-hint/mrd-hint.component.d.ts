import { AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MrdHintComponent implements AfterViewInit {
    private cdr;
    hintContent: ElementRef;
    ellipsis: number;
    tootltipText: string;
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdHintComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdHintComponent, "mrd-hint", never, { "ellipsis": { "alias": "ellipsis"; "required": false; }; }, {}, never, ["*"], false, never>;
    static ngAcceptInputType_ellipsis: unknown;
}
