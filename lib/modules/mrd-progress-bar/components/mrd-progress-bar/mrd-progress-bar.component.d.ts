import { AfterViewInit, ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MrdProgressBarComponent implements AfterViewInit {
    private cdr;
    private config;
    set mode(mode: 'determinate' | 'indeterminate');
    get mode(): 'determinate' | 'indeterminate';
    private _mode;
    set value(value: number);
    get value(): number;
    private _value;
    set color(color: string);
    get color(): string;
    private _color;
    private _bgColor;
    get bgColor(): string;
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdProgressBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdProgressBarComponent, "mrd-progress-bar", never, { "mode": { "alias": "mode"; "required": false; }; "value": { "alias": "value"; "required": false; }; "color": { "alias": "color"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_value: unknown;
}
