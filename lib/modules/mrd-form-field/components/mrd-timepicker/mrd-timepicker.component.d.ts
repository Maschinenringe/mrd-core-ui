import { AfterViewInit, EventEmitter } from '@angular/core';
import moment, { Moment } from 'moment';
import * as i0 from "@angular/core";
export declare class MrdTimepickerComponent implements AfterViewInit {
    time: string | Moment | null;
    timeChanged: EventEmitter<moment.Moment>;
    hour: number;
    minute: number;
    hours: number[];
    minutes: number[];
    constructor();
    ngAfterViewInit(): void;
    private checkDate;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdTimepickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdTimepickerComponent, "mrd-timepicker", never, { "time": { "alias": "time"; "required": false; }; }, { "timeChanged": "timeChanged"; }, never, never, false, never>;
}
