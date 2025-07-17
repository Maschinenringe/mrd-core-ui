import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { Moment } from 'moment';
import { Day } from '../../components/mrd-datepicker/mrd-datepicker.component';
import * as i0 from "@angular/core";
export declare class MrdDateRangeIndicatorDirective implements AfterViewInit {
    private _elementRef;
    set startDate(value: Moment | null);
    private _startDate;
    set buttonDate(value: Day);
    private _buttonDate;
    private day;
    set hoverEndDate(value: Moment | null);
    private _hoverEndDate;
    set endDate(value: Moment | null);
    private _endDate;
    isHovering: EventEmitter<Moment>;
    constructor(_elementRef: ElementRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdDateRangeIndicatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdDateRangeIndicatorDirective, "[mrdDateRangeIndicator]", never, { "startDate": { "alias": "startDate"; "required": false; }; "buttonDate": { "alias": "mrdDateRangeIndicator"; "required": false; }; "hoverEndDate": { "alias": "hoverEndDate"; "required": false; }; "endDate": { "alias": "endDate"; "required": false; }; }, { "isHovering": "isHovering"; }, never, never, false, never>;
}
