import { AfterViewInit, ChangeDetectorRef, EventEmitter } from '@angular/core';
import moment, { Moment } from 'moment';
import { ObservableValue } from 'mrd-core';
import * as i0 from "@angular/core";
export declare class MrdDatepickerComponent implements AfterViewInit {
    private cdr;
    date: string | Moment | null;
    range: boolean;
    startDate: Moment | null;
    endDate: Moment | null;
    dateChanged: EventEmitter<moment.Moment>;
    dateRangeChanged: EventEmitter<{
        start: Moment | null;
        end: Moment | null;
    }>;
    placeholder: string[];
    days: Day[];
    endHoverDate: Moment | null;
    monthIndex: number;
    months: string[];
    fullMonths: string[];
    year: number;
    yearRange: number[];
    showDays: boolean;
    showMonths: boolean;
    showYears: boolean;
    private today;
    private calendarDate;
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    private checkDate;
    private initYearRange;
    private initCalendar;
    trackById(index: number, item: Day): string;
    dateSelected(day: Day): void;
    yearSelected(year: number): void;
    monthSelected(month: number): void;
    changeView(): void;
    previous(): void;
    next(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdDatepickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdDatepickerComponent, "mrd-datepicker", never, { "date": { "alias": "date"; "required": false; }; "range": { "alias": "range-picker"; "required": false; }; "startDate": { "alias": "startDate"; "required": false; }; "endDate": { "alias": "endDate"; "required": false; }; }, { "dateChanged": "dateChanged"; "dateRangeChanged": "dateRangeChanged"; }, never, never, false, never>;
    static ngAcceptInputType_range: unknown;
}
export interface Day {
    date: Moment;
    day: string;
    isToday?: boolean;
    isSelected?: ObservableValue<boolean>;
    isWeekend?: boolean;
    isDisabled?: ObservableValue<boolean>;
    betweenRange?: ObservableValue<boolean>;
    rangeSelected?: ObservableValue<boolean>;
    rangeHover?: ObservableValue<boolean>;
    rangeHoverBetween?: ObservableValue<boolean>;
    changed: () => void;
}
