import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import { MrdSelectComponent } from '../mrd-select/mrd-select.component';
import * as i0 from "@angular/core";
export declare class MrdSelectOptionComponent implements AfterViewInit {
    private elementRef;
    private select;
    private cdr;
    optionValue: ElementRef<HTMLElement> | undefined;
    value: any;
    noCheckbox: boolean;
    optionClicked: EventEmitter<MrdSelectOptionChange>;
    optionLabel: string;
    _selected: boolean;
    _filtered: boolean;
    _focused: boolean;
    multiple: boolean;
    constructor(elementRef: ElementRef, select: MrdSelectComponent, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    optionClick(): void;
    set selected(value: boolean);
    get selected(): boolean;
    set filtered(value: boolean);
    get filtered(): boolean;
    set focused(value: boolean);
    get focused(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdSelectOptionComponent, [null, { host: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdSelectOptionComponent, "mrd-select-option", never, { "value": { "alias": "value"; "required": false; }; "noCheckbox": { "alias": "noCheckbox"; "required": false; }; }, { "optionClicked": "optionClicked"; }, never, ["mrd-icon:not([icon-end]), [mrd-icon]:not([icon-end])", "*", "mrd-icon[icon-end], [mrd-icon][icon-end]"], false, never>;
    static ngAcceptInputType_noCheckbox: unknown;
}
export interface MrdSelectOptionChange {
    key: any;
    value: string;
    option: MrdSelectOptionComponent;
    checked?: boolean;
}
