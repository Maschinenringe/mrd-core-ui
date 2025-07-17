import { ConnectedPosition } from '@angular/cdk/overlay';
import { AfterViewInit, ElementRef, QueryList } from '@angular/core';
import { Moment } from 'moment';
import { ObservableValue } from 'mrd-core';
import { MrdInputComponent } from '../mrd-input/mrd-input.component';
import * as i0 from "@angular/core";
export declare class MrdDateRangePickerComponent implements AfterViewInit {
    inputs: QueryList<MrdInputComponent>;
    dateInputElement: ElementRef<HTMLElement>;
    showDatepicker: ObservableValue<boolean>;
    startValue: Moment | null;
    endValue: Moment | null;
    startInput: MrdInputComponent | null;
    endInput: MrdInputComponent | null;
    _positions: ConnectedPosition[];
    constructor();
    ngAfterViewInit(): void;
    rangeChanged(value: {
        start: Moment | null;
        end: Moment | null;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdDateRangePickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdDateRangePickerComponent, "mrd-date-range-picker", never, {}, {}, ["inputs"], ["mrd-input"], false, never>;
}
