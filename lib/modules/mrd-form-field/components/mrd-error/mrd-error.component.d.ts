import { ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MrdErrorComponent {
    private cdr;
    ellipsis: number;
    private _error;
    set error(value: string);
    get error(): string;
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdErrorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdErrorComponent, "mrd-error", never, { "ellipsis": { "alias": "ellipsis"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_ellipsis: unknown;
}
