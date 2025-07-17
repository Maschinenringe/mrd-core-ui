import { booleanAttribute, ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import moment, { isMoment } from 'moment';
import { ObservableValue, Util } from 'mrd-core';
import * as i0 from "@angular/core";
function MrdDatepickerComponent_ng_container_10_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 8);
} }
const _c0 = function (a0, a1) { return { "today": a0, "selected": a1 }; };
function MrdDatepickerComponent_ng_container_10_ng_container_18_mrd_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-button", 12);
    i0.ɵɵlistener("click", function MrdDatepickerComponent_ng_container_10_ng_container_18_mrd_button_1_Template_mrd_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const d_r8 = restoredCtx.$implicit; const ctx_r9 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r9.dateSelected(d_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r8 = ctx.$implicit;
    i0.ɵɵclassMap(i0.ɵɵpureFunction2(3, _c0, d_r8.isToday && !d_r8.isSelected.value, d_r8.isSelected.value));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", d_r8.day, " ");
} }
function MrdDatepickerComponent_ng_container_10_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MrdDatepickerComponent_ng_container_10_ng_container_18_mrd_button_1_Template, 2, 6, "mrd-button", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.days);
} }
function MrdDatepickerComponent_ng_container_10_ng_container_19_mrd_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-button", 14);
    i0.ɵɵlistener("click", function MrdDatepickerComponent_ng_container_10_ng_container_19_mrd_button_1_Template_mrd_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r14); const d_r12 = restoredCtx.$implicit; const ctx_r13 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r13.dateSelected(d_r12)); })("isHovering", function MrdDatepickerComponent_ng_container_10_ng_container_19_mrd_button_1_Template_mrd_button_isHovering_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r15.endHoverDate = $event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r12 = ctx.$implicit;
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("today", d_r12.isToday && !d_r12.isSelected.value)("selected", d_r12.isSelected.value)("rangeSelected", d_r12.rangeSelected.value)("betweenRange", d_r12.betweenRange.value)("rangeHover", d_r12.rangeHover.value)("rangeHoverBetween", d_r12.rangeHoverBetween.value);
    i0.ɵɵproperty("mrdDateRangeIndicator", d_r12)("startDate", ctx_r11.startDate)("endDate", ctx_r11.endDate)("hoverEndDate", ctx_r11.endHoverDate);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", d_r12.day, " ");
} }
function MrdDatepickerComponent_ng_container_10_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MrdDatepickerComponent_ng_container_10_ng_container_19_mrd_button_1_Template, 2, 17, "mrd-button", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.days)("ngForTrackBy", ctx_r5.trackById);
} }
function MrdDatepickerComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 7)(2, "div", 8);
    i0.ɵɵtext(3, "Mo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 8);
    i0.ɵɵtext(5, "Di");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 8);
    i0.ɵɵtext(7, "Mi");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 8);
    i0.ɵɵtext(9, "Do");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 8);
    i0.ɵɵtext(11, "Fr");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 8);
    i0.ɵɵtext(13, "Sa");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 8);
    i0.ɵɵtext(15, "So");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 9);
    i0.ɵɵtemplate(17, MrdDatepickerComponent_ng_container_10_div_17_Template, 1, 0, "div", 10);
    i0.ɵɵtemplate(18, MrdDatepickerComponent_ng_container_10_ng_container_18_Template, 2, 1, "ng-container", 6);
    i0.ɵɵtemplate(19, MrdDatepickerComponent_ng_container_10_ng_container_19_Template, 2, 2, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("ngForOf", ctx_r0.placeholder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.range);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.range);
} }
const _c1 = function (a0) { return { "selected": a0 }; };
function MrdDatepickerComponent_ng_container_11_mrd_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-button", 17);
    i0.ɵɵlistener("click", function MrdDatepickerComponent_ng_container_11_mrd_button_2_Template_mrd_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const y_r17 = restoredCtx.$implicit; const ctx_r18 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r18.yearSelected(y_r17)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const y_r17 = ctx.$implicit;
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(i0.ɵɵpureFunction1(3, _c1, y_r17 === ctx_r16.year));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", y_r17, " ");
} }
function MrdDatepickerComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 15);
    i0.ɵɵtemplate(2, MrdDatepickerComponent_ng_container_11_mrd_button_2_Template, 2, 5, "mrd-button", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.yearRange);
} }
function MrdDatepickerComponent_ng_container_12_mrd_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-button", 17);
    i0.ɵɵlistener("click", function MrdDatepickerComponent_ng_container_12_mrd_button_2_Template_mrd_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r24); const m_r21 = restoredCtx.$implicit; const ctx_r23 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r23.monthSelected(m_r21)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(i0.ɵɵpureFunction1(3, _c1, i_r22 === ctx_r20.monthIndex));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", m_r21, " ");
} }
function MrdDatepickerComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵtemplate(2, MrdDatepickerComponent_ng_container_12_mrd_button_2_Template, 2, 5, "mrd-button", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.fullMonths);
} }
export class MrdDatepickerComponent {
    cdr;
    date = null;
    range = false;
    startDate = null;
    endDate = null;
    dateChanged = new EventEmitter();
    dateRangeChanged = new EventEmitter();
    placeholder = [];
    days = [];
    endHoverDate = null;
    monthIndex = 0;
    months = ['JAN', 'FEB', 'MÄR', 'APR', 'MAI', 'JUN', 'JUL', 'AUG', 'SEP', 'OKT', 'NOV', 'DEZ'];
    fullMonths = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    year = 0;
    yearRange = [];
    showDays = true;
    showMonths = false;
    showYears = false;
    today = moment().utc(true);
    calendarDate = moment().utc(true);
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        if (!this.range) {
            this.date = this.checkDate(this.date);
            if (Util.isDefined(this.date) && this.date.isValid()) {
                this.calendarDate = this.date.clone().utc(true);
            }
        }
        else {
            this.startDate = this.checkDate(this.startDate);
            this.endDate = this.checkDate(this.endDate);
            if (Util.isDefined(this.startDate) && this.startDate.isValid()) {
                this.calendarDate = this.startDate.clone().utc(true);
            }
            else if (Util.isDefined(this.endDate) && this.endDate.isValid()) {
                this.calendarDate = this.endDate.clone().utc(true);
            }
        }
        this.initCalendar(this.calendarDate.startOf('month'));
        this.initYearRange();
        this.cdr.markForCheck();
    }
    checkDate(dateValue) {
        if (!Util.isDefined(dateValue)) {
            return null;
        }
        if (!isMoment(dateValue)) {
            dateValue = moment(dateValue, 'DD.MM.YYYY').utc(true);
        }
        else if (!dateValue.isValid()) {
            dateValue = moment().utc(true);
        }
        return dateValue;
    }
    initYearRange() {
        let todayYear = this.today.year();
        this.yearRange = Array.from({ length: 15 }, (_, i) => todayYear - 7 + i);
        let dateYear = moment(this.date, 'DD.MM.YYYY').year();
        if (!this.yearRange.includes(dateYear)) {
            while (dateYear < this.yearRange[0]) {
                this.yearRange = this.yearRange.map(y => y - 15);
            }
            while (dateYear > this.yearRange[this.yearRange.length - 1]) {
                this.yearRange = this.yearRange.map(y => y + 15);
            }
        }
        this.cdr.markForCheck();
    }
    initCalendar(startOfMonth) {
        let startDayOfWeek = (startOfMonth.clone().weekday() + 6) % 7; // Adjust to start on Monday;
        let monthDays = startOfMonth.clone().daysInMonth();
        this.monthIndex = startOfMonth.clone().month();
        this.year = startOfMonth.clone().year();
        this.days = [];
        this.placeholder = [];
        this.cdr.detectChanges();
        this.placeholder = Array.from({ length: startDayOfWeek }, (_, i) => '');
        this.days = Array.from({ length: monthDays }, (_, i) => {
            let dayMoment = moment(startOfMonth).add(i, 'days');
            let day = {
                date: dayMoment,
                day: dayMoment.format('D'),
                isToday: dayMoment.isSame(this.today, 'day'),
                isSelected: new ObservableValue(this.date && dayMoment.isSame(this.date, 'day')),
                isWeekend: dayMoment.day() === 0 || dayMoment.day() === 6,
                isDisabled: new ObservableValue(false),
                betweenRange: new ObservableValue(false),
                rangeSelected: new ObservableValue(false),
                rangeHover: new ObservableValue(false),
                rangeHoverBetween: new ObservableValue(false),
                changed: () => {
                    console.log(this.days);
                    // let tempArray = this.days.slice();
                    // this.days = [];
                    // this.cdr.detectChanges();
                    // this.days = tempArray;
                    // this.days = [...this.days]; // Trigger change detection for the days array
                    // setTimeout(() => {
                    // this.showDays = false;
                    // this.cdr.detectChanges();
                    // this.showDays = true;
                    this.cdr.detectChanges();
                    this.cdr.markForCheck();
                    // },100);
                }
            };
            day.isSelected.changed.subscribe(() => { this.cdr.markForCheck(); });
            day.rangeSelected.changed.subscribe(() => { this.cdr.markForCheck(); });
            day.betweenRange.changed.subscribe(() => { this.cdr.markForCheck(); });
            day.rangeHover.changed.subscribe(() => { this.cdr.markForCheck(); });
            day.rangeHoverBetween.changed.subscribe(() => { this.cdr.markForCheck(); });
            return day;
        });
        this.cdr.markForCheck();
    }
    // getDays(): Day[] {
    //   return [...this.days];
    // }
    trackById(index, item) {
        return item.day;
    }
    dateSelected(day) {
        if (!this.range) {
            if (!day.isDisabled.value) {
                let selected = this.days.find(d => d.isSelected);
                if (selected) {
                    selected.isSelected.value = false;
                }
                this.date = day.date;
                day.isSelected.value = true;
                this.dateChanged.emit(this.date);
            }
            let tempArray = this.days.slice();
            this.days = [];
            this.cdr.detectChanges();
            this.days = tempArray;
            this.cdr.markForCheck();
        }
        else {
            if (!day.isDisabled.value) {
                if (this.startDate && this.endDate) {
                    this.startDate = null;
                    this.endDate = null;
                    // this.days.forEach(d => {
                    //   d.isSelected = false;
                    //   d.rangeSelected = false;
                    //   d.betweenRange = false;
                    // });
                }
                if (!this.startDate) {
                    this.startDate = day.date.clone();
                }
                else if (!this.endDate && day.date.isAfter(this.startDate)) {
                    this.endDate = day.date.clone();
                }
                else if (day.date.isBefore(this.startDate)) {
                    this.endDate = this.startDate.clone();
                    this.startDate = day.date.clone();
                }
                else {
                    return; // Invalid selection
                }
                // let selectedStart = this.days.find(d => d.isSelected);
                // let selectedEnd = this.days.find(d => d.rangeSelected);
                // if (selectedStart) {
                //   selectedStart.isSelected = false;
                // }
                // if (selectedEnd) {
                //   selectedEnd.rangeSelected = false;
                // }
                // day.isSelected = true;
                this.dateRangeChanged.emit({ start: this.startDate, end: this.endDate });
                this.cdr.detectChanges();
            }
        }
    }
    yearSelected(year) {
        this.year = year;
        this.showYears = false;
        this.showMonths = true;
        this.showDays = false;
        this.calendarDate = this.calendarDate.year(year);
        this.initCalendar(this.calendarDate.startOf('month'));
    }
    monthSelected(month) {
        this.monthIndex = month;
        this.showYears = false;
        this.showMonths = false;
        this.showDays = true;
        this.calendarDate = this.calendarDate.month(month);
        this.initCalendar(this.calendarDate.startOf('month'));
    }
    changeView() {
        if (this.showDays) {
            this.showDays = false;
            this.showMonths = false;
            this.showYears = true;
        }
        else if (this.showMonths) {
            this.showDays = true;
            this.showMonths = false;
            this.showYears = false;
        }
        else {
            this.showDays = false;
            this.showMonths = true;
            this.showYears = false;
        }
        this.cdr.markForCheck();
    }
    previous() {
        if (this.showDays) {
            this.calendarDate = this.calendarDate.subtract(1, 'month');
            this.initCalendar(this.calendarDate.startOf('month'));
        }
        if (this.showMonths) {
            this.calendarDate = this.calendarDate.subtract(1, 'year');
            this.initCalendar(this.calendarDate.startOf('month'));
        }
        if (this.showYears) {
            this.yearRange = this.yearRange.map(y => y - 15);
            this.cdr.markForCheck();
        }
    }
    next() {
        if (this.showDays) {
            this.calendarDate = this.calendarDate.add(1, 'month');
            this.initCalendar(this.calendarDate.startOf('month'));
        }
        if (this.showMonths) {
            this.calendarDate = this.calendarDate.add(1, 'year');
            this.initCalendar(this.calendarDate.startOf('month'));
        }
        if (this.showYears) {
            this.yearRange = this.yearRange.map(y => y + 15);
            this.cdr.markForCheck();
        }
    }
    /** @nocollapse */ static ɵfac = function MrdDatepickerComponent_Factory(t) { return new (t || MrdDatepickerComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdDatepickerComponent, selectors: [["mrd-datepicker"]], inputs: { date: "date", range: ["range-picker", "range", booleanAttribute], startDate: "startDate", endDate: "endDate" }, outputs: { dateChanged: "dateChanged", dateRangeChanged: "dateRangeChanged" }, features: [i0.ɵɵInputTransformsFeature], decls: 13, vars: 5, consts: [[1, "mrd-datepicker-container"], [1, "mrd-datepicker-header"], [3, "click"], [1, "mrd-datepicker-header-navigation"], ["icon-button", "", 3, "click"], [1, "mrd-datepicker-content"], [4, "ngIf"], [1, "mrd-datepicker-weekdays"], [1, "mrd-datepicker-weekday"], [1, "mrd-datepicker-weekdays", "wrap"], ["class", "mrd-datepicker-weekday", 4, "ngFor", "ngForOf"], ["icon-button", "", "fullIcon", "", "diameter", "2em", "class", "mrd-datepicker-weekday", 3, "class", "click", 4, "ngFor", "ngForOf"], ["icon-button", "", "fullIcon", "", "diameter", "2em", 1, "mrd-datepicker-weekday", 3, "click"], ["icon-button", "", "fullIcon", "", "diameter", "2em", "class", "mrd-datepicker-weekday", 3, "today", "selected", "rangeSelected", "betweenRange", "rangeHover", "rangeHoverBetween", "mrdDateRangeIndicator", "startDate", "endDate", "hoverEndDate", "click", "isHovering", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["icon-button", "", "fullIcon", "", "diameter", "2em", 1, "mrd-datepicker-weekday", 3, "mrdDateRangeIndicator", "startDate", "endDate", "hoverEndDate", "click", "isHovering"], [1, "mrd-datepicker-years"], ["outline-button", "", "diameter", "2em", 3, "class", "click", 4, "ngFor", "ngForOf"], ["outline-button", "", "diameter", "2em", 3, "click"], [1, "mrd-datepicker-months"]], template: function MrdDatepickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "mrd-button", 2);
            i0.ɵɵlistener("click", function MrdDatepickerComponent_Template_mrd_button_click_2_listener() { return ctx.changeView(); });
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3)(5, "mrd-button", 4);
            i0.ɵɵlistener("click", function MrdDatepickerComponent_Template_mrd_button_click_5_listener() { return ctx.previous(); });
            i0.ɵɵtext(6, "<");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mrd-button", 4);
            i0.ɵɵlistener("click", function MrdDatepickerComponent_Template_mrd_button_click_7_listener() { return ctx.next(); });
            i0.ɵɵtext(8, ">");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(9, "div", 5);
            i0.ɵɵtemplate(10, MrdDatepickerComponent_ng_container_10_Template, 20, 3, "ng-container", 6);
            i0.ɵɵtemplate(11, MrdDatepickerComponent_ng_container_11_Template, 3, 1, "ng-container", 6);
            i0.ɵɵtemplate(12, MrdDatepickerComponent_ng_container_12_Template, 3, 1, "ng-container", 6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2("", ctx.months[ctx.monthIndex], " ", ctx.year, "");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.showDays);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showYears);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showMonths);
        } }, styles: ["[_nghost-%COMP%]{height:300px}.mrd-datepicker-container[_ngcontent-%COMP%]{width:275px;min-height:272px;max-height:312px;background:#fff;border-radius:12px;padding:8px;box-shadow:5px 5px 20px -5px #00000052;-webkit-box-shadow:5px 5px 20px -5px rgba(0,0,0,.3215686275)}.mrd-datepicker-container[_ngcontent-%COMP%]   .mrd-datepicker-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.mrd-datepicker-container[_ngcontent-%COMP%]   .mrd-datepicker-header[_ngcontent-%COMP%]   .mrd-datepicker-header-navigation[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.mrd-datepicker-container[_ngcontent-%COMP%]   .mrd-datepicker-content[_ngcontent-%COMP%]{padding:12px}.mrd-datepicker-container[_ngcontent-%COMP%]   .mrd-datepicker-content[_ngcontent-%COMP%]   .mrd-datepicker-weekdays[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:4px}.mrd-datepicker-container[_ngcontent-%COMP%]   .mrd-datepicker-content[_ngcontent-%COMP%]   .mrd-datepicker-weekdays.wrap[_ngcontent-%COMP%]{flex-wrap:wrap}.mrd-datepicker-container[_ngcontent-%COMP%]   .mrd-datepicker-content[_ngcontent-%COMP%]   .mrd-datepicker-weekdays[_ngcontent-%COMP%]   .mrd-datepicker-weekday[_ngcontent-%COMP%]{width:30px;height:30px;text-align:center;font-weight:700;color:#666;border-radius:50%}.mrd-datepicker-container[_ngcontent-%COMP%]   .mrd-datepicker-content[_ngcontent-%COMP%]   .mrd-datepicker-weekdays[_ngcontent-%COMP%]   .mrd-datepicker-weekday.today[_ngcontent-%COMP%]{border:1px solid #000}.mrd-datepicker-container[_ngcontent-%COMP%]   .mrd-datepicker-content[_ngcontent-%COMP%]   .mrd-datepicker-weekdays[_ngcontent-%COMP%]   .mrd-datepicker-weekday.betweenRange[_ngcontent-%COMP%]{background:#69b02288}.mrd-datepicker-container[_ngcontent-%COMP%]   .mrd-datepicker-content[_ngcontent-%COMP%]   .mrd-datepicker-weekdays[_ngcontent-%COMP%]   .mrd-datepicker-weekday.rangeHover[_ngcontent-%COMP%]{border:1px dotted #666}.mrd-datepicker-container[_ngcontent-%COMP%]   .mrd-datepicker-content[_ngcontent-%COMP%]   .mrd-datepicker-weekdays[_ngcontent-%COMP%]   .mrd-datepicker-weekday.rangeHover.rangeHoverBetween[_ngcontent-%COMP%]{border-radius:0}.mrd-datepicker-container[_ngcontent-%COMP%]   .mrd-datepicker-content[_ngcontent-%COMP%]   .mrd-datepicker-weekdays[_ngcontent-%COMP%]   .mrd-datepicker-weekday.selected[_ngcontent-%COMP%], .mrd-datepicker-container[_ngcontent-%COMP%]   .mrd-datepicker-content[_ngcontent-%COMP%]   .mrd-datepicker-weekdays[_ngcontent-%COMP%]   .mrd-datepicker-weekday.rangeSelected[_ngcontent-%COMP%]{background:#68b022}.mrd-datepicker-container[_ngcontent-%COMP%]   .mrd-datepicker-content[_ngcontent-%COMP%]   .mrd-datepicker-weekdays[_ngcontent-%COMP%]     .mrd-datepicker-weekday.selected .mrd-button-text-content, .mrd-datepicker-container[_ngcontent-%COMP%]   .mrd-datepicker-content[_ngcontent-%COMP%]   .mrd-datepicker-weekdays[_ngcontent-%COMP%]     .mrd-datepicker-weekday.rangeSelected .mrd-button-text-content, .mrd-datepicker-container[_ngcontent-%COMP%]   .mrd-datepicker-content[_ngcontent-%COMP%]   .mrd-datepicker-weekdays[_ngcontent-%COMP%]     .mrd-datepicker-weekday.betweenRange .mrd-button-text-content{color:#fff}.mrd-datepicker-container[_ngcontent-%COMP%]   .mrd-datepicker-content[_ngcontent-%COMP%]   .mrd-datepicker-years[_ngcontent-%COMP%], .mrd-datepicker-container[_ngcontent-%COMP%]   .mrd-datepicker-content[_ngcontent-%COMP%]   .mrd-datepicker-months[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;gap:8px}.mrd-datepicker-container[_ngcontent-%COMP%]   .mrd-datepicker-content[_ngcontent-%COMP%]   .mrd-datepicker-months[_ngcontent-%COMP%]   mrd-button[_ngcontent-%COMP%]{width:105px}.mrd-datepicker-container[_ngcontent-%COMP%]   .mrd-datepicker-content[_ngcontent-%COMP%]     .mrd-datepicker-years .selected .mrd-button-container, .mrd-datepicker-container[_ngcontent-%COMP%]   .mrd-datepicker-content[_ngcontent-%COMP%]     .mrd-datepicker-months .selected .mrd-button-container{border-color:#68b022;border-width:2px}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdDatepickerComponent, [{
        type: Component,
        args: [{ selector: 'mrd-datepicker', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-datepicker-container\">\r\n    <div class=\"mrd-datepicker-header\">\r\n        <mrd-button (click)=\"changeView()\">{{months[monthIndex]}} {{year}}</mrd-button>\r\n        <div class=\"mrd-datepicker-header-navigation\">\r\n            <mrd-button icon-button (click)=\"previous()\"><</mrd-button>\r\n            <mrd-button icon-button (click)=\"next()\">></mrd-button>\r\n        </div>\r\n    </div>\r\n    <div class=\"mrd-datepicker-content\">\r\n        <ng-container *ngIf=\"showDays\">\r\n            <div class=\"mrd-datepicker-weekdays\">\r\n                <div class=\"mrd-datepicker-weekday\">Mo</div>\r\n                <div class=\"mrd-datepicker-weekday\">Di</div>\r\n                <div class=\"mrd-datepicker-weekday\">Mi</div>\r\n                <div class=\"mrd-datepicker-weekday\">Do</div>\r\n                <div class=\"mrd-datepicker-weekday\">Fr</div>\r\n                <div class=\"mrd-datepicker-weekday\">Sa</div>\r\n                <div class=\"mrd-datepicker-weekday\">So</div>\r\n            </div>\r\n            <div class=\"mrd-datepicker-weekdays wrap\">\r\n                <div class=\"mrd-datepicker-weekday\" *ngFor=\"let p of placeholder\"></div>\r\n                <ng-container *ngIf=\"!range\">\r\n                    <mrd-button icon-button fullIcon diameter=\"2em\" [class]=\"{'today': d.isToday && !d.isSelected.value, 'selected': d.isSelected.value}\"\r\n                        class=\"mrd-datepicker-weekday\" *ngFor=\"let d of days\" (click)=\"dateSelected(d)\">\r\n                        {{d.day}}\r\n                    </mrd-button>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"range\">\r\n                    <mrd-button icon-button fullIcon diameter=\"2em\" \r\n                    [class.today]=\"d.isToday && !d.isSelected.value\" \r\n                    [class.selected]=\"d.isSelected.value\" \r\n                    [class.rangeSelected]=\"d.rangeSelected.value\"\r\n                    [class.betweenRange]=\"d.betweenRange.value\"\r\n                    [class.rangeHover]=\"d.rangeHover.value\"\r\n                    [class.rangeHoverBetween]=\"d.rangeHoverBetween.value\"\r\n                        class=\"mrd-datepicker-weekday\" *ngFor=\"let d of days; trackBy: trackById\" (click)=\"dateSelected(d)\"\r\n                        [mrdDateRangeIndicator]=\"d\" [startDate]=\"startDate\" [endDate]=\"endDate\" [hoverEndDate]=\"endHoverDate\" (isHovering)=\"endHoverDate = $event\">\r\n                        {{d.day}}\r\n                    </mrd-button>\r\n                </ng-container>\r\n            </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"showYears\">\r\n            <div class=\"mrd-datepicker-years\">\r\n                <mrd-button outline-button diameter=\"2em\" [class]=\"{'selected': y === year}\" *ngFor=\"let y of yearRange;\"\r\n                    (click)=\"yearSelected(y)\">\r\n                    {{y}}\r\n                </mrd-button>\r\n            </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"showMonths\">\r\n            <div class=\"mrd-datepicker-months\">\r\n                <mrd-button outline-button diameter=\"2em\" [class]=\"{'selected': i === monthIndex}\" *ngFor=\"let m of fullMonths; let i = index\"\r\n                    (click)=\"monthSelected(m)\">\r\n                    {{m}}\r\n                </mrd-button>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</div>", styles: [":host{height:300px}.mrd-datepicker-container{width:275px;min-height:272px;max-height:312px;background:#fff;border-radius:12px;padding:8px;box-shadow:5px 5px 20px -5px #00000052;-webkit-box-shadow:5px 5px 20px -5px rgba(0,0,0,.3215686275)}.mrd-datepicker-container .mrd-datepicker-header{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.mrd-datepicker-container .mrd-datepicker-header .mrd-datepicker-header-navigation{display:flex;flex-direction:row;align-items:center}.mrd-datepicker-container .mrd-datepicker-content{padding:12px}.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays{display:flex;flex-direction:row;gap:4px}.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays.wrap{flex-wrap:wrap}.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays .mrd-datepicker-weekday{width:30px;height:30px;text-align:center;font-weight:700;color:#666;border-radius:50%}.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays .mrd-datepicker-weekday.today{border:1px solid #000}.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays .mrd-datepicker-weekday.betweenRange{background:#69b02288}.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays .mrd-datepicker-weekday.rangeHover{border:1px dotted #666}.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays .mrd-datepicker-weekday.rangeHover.rangeHoverBetween{border-radius:0}.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays .mrd-datepicker-weekday.selected,.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays .mrd-datepicker-weekday.rangeSelected{background:#68b022}.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays ::ng-deep .mrd-datepicker-weekday.selected .mrd-button-text-content,.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays ::ng-deep .mrd-datepicker-weekday.rangeSelected .mrd-button-text-content,.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays ::ng-deep .mrd-datepicker-weekday.betweenRange .mrd-button-text-content{color:#fff}.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-years,.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-months{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;gap:8px}.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-months mrd-button{width:105px}.mrd-datepicker-container .mrd-datepicker-content ::ng-deep .mrd-datepicker-years .selected .mrd-button-container,.mrd-datepicker-container .mrd-datepicker-content ::ng-deep .mrd-datepicker-months .selected .mrd-button-container{border-color:#68b022;border-width:2px}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { date: [{
            type: Input
        }], range: [{
            type: Input,
            args: [{ transform: booleanAttribute, alias: 'range-picker' }]
        }], startDate: [{
            type: Input
        }], endDate: [{
            type: Input
        }], dateChanged: [{
            type: Output
        }], dateRangeChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWRhdGVwaWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWRhdGVwaWNrZXIvbXJkLWRhdGVwaWNrZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWRhdGVwaWNrZXIvbXJkLWRhdGVwaWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BKLE9BQU8sTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFVLE1BQU0sUUFBUSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7SUNrQmpDLHlCQUF3RTs7Ozs7SUFFcEUsc0NBQ29GO0lBQTFCLHdRQUFTLGVBQUEseUJBQWUsQ0FBQSxJQUFDO0lBQy9FLFlBQ0o7SUFBQSxpQkFBYTs7O0lBSG1DLHdHQUFxRjtJQUVqSSxlQUNKO0lBREkseUNBQ0o7OztJQUpKLDZCQUE2QjtJQUN6QixzSEFHYTtJQUNqQiwwQkFBZTs7O0lBSHNDLGVBQU87SUFBUCxxQ0FBTzs7OztJQUt4RCxzQ0FRK0k7SUFEakUsMFFBQVMsZUFBQSwyQkFBZSxDQUFBLElBQUMscVFBQUE7SUFFbkcsWUFDSjtJQUFBLGlCQUFhOzs7O0lBVGIsaUVBQWdELG9DQUFBLDRDQUFBLDBDQUFBLHNDQUFBLG9EQUFBO0lBTzVDLDZDQUEyQixnQ0FBQSw0QkFBQSxz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QyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBQztZQUNsRCxTQUFTO2tCQUFqQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBRUksV0FBVztrQkFBcEIsTUFBTTtZQUNHLGdCQUFnQjtrQkFBekIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIGJvb2xlYW5BdHRyaWJ1dGUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IG1vbWVudCwgeyBpc01vbWVudCwgTW9tZW50IH0gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZVZhbHVlLCBVdGlsIH0gZnJvbSAnbXJkLWNvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtcmQtZGF0ZXBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1kYXRlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtZGF0ZXBpY2tlci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmREYXRlcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGRhdGU6IHN0cmluZyB8IE1vbWVudCB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlLCBhbGlhczogJ3JhbmdlLXBpY2tlcid9KSByYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHN0YXJ0RGF0ZTogTW9tZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgZW5kRGF0ZTogTW9tZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIEBPdXRwdXQoKSBkYXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8TW9tZW50PigpO1xyXG4gIEBPdXRwdXQoKSBkYXRlUmFuZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7IHN0YXJ0OiBNb21lbnQgfCBudWxsLCBlbmQ6IE1vbWVudCB8IG51bGwgfT4oKTtcclxuXHJcbiAgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHB1YmxpYyBkYXlzOiBEYXlbXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgZW5kSG92ZXJEYXRlOiBNb21lbnQgfCBudWxsID0gbnVsbDtcclxuICBcclxuICBwdWJsaWMgbW9udGhJbmRleDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgbW9udGhzOiBzdHJpbmdbXSA9IFsnSkFOJywgJ0ZFQicsICdNw4RSJywgJ0FQUicsICdNQUknLCAnSlVOJywgJ0pVTCcsICdBVUcnLCAnU0VQJywgJ09LVCcsICdOT1YnLCAnREVaJ107XHJcbiAgcHVibGljIGZ1bGxNb250aHM6IHN0cmluZ1tdID0gWydKYW51YXInLCAnRmVicnVhcicsICdNw6RyeicsICdBcHJpbCcsICdNYWknLCAnSnVuaScsICdKdWxpJywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2t0b2JlcicsICdOb3ZlbWJlcicsICdEZXplbWJlciddO1xyXG4gIHB1YmxpYyB5ZWFyOiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyB5ZWFyUmFuZ2U6IG51bWJlcltdID0gW107XHJcblxyXG4gIHB1YmxpYyBzaG93RGF5czogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHVibGljIHNob3dNb250aHM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgc2hvd1llYXJzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgdG9kYXk6IE1vbWVudCA9IG1vbWVudCgpLnV0Yyh0cnVlKTtcclxuICBwcml2YXRlIGNhbGVuZGFyRGF0ZTogTW9tZW50ID0gbW9tZW50KCkudXRjKHRydWUpO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMucmFuZ2UpIHtcclxuICAgICAgdGhpcy5kYXRlID0gdGhpcy5jaGVja0RhdGUodGhpcy5kYXRlKTtcclxuXHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmRhdGUpICYmIHRoaXMuZGF0ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICB0aGlzLmNhbGVuZGFyRGF0ZSA9IHRoaXMuZGF0ZS5jbG9uZSgpLnV0Yyh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGFydERhdGUgPSB0aGlzLmNoZWNrRGF0ZSh0aGlzLnN0YXJ0RGF0ZSk7XHJcbiAgICAgIHRoaXMuZW5kRGF0ZSA9IHRoaXMuY2hlY2tEYXRlKHRoaXMuZW5kRGF0ZSk7XHJcblxyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5zdGFydERhdGUpICYmIHRoaXMuc3RhcnREYXRlLmlzVmFsaWQoKSkge1xyXG4gICAgICAgIHRoaXMuY2FsZW5kYXJEYXRlID0gdGhpcy5zdGFydERhdGUuY2xvbmUoKS51dGModHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5lbmREYXRlKSAmJiB0aGlzLmVuZERhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgdGhpcy5jYWxlbmRhckRhdGUgPSB0aGlzLmVuZERhdGUuY2xvbmUoKS51dGModHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICB0aGlzLmluaXRDYWxlbmRhcih0aGlzLmNhbGVuZGFyRGF0ZS5zdGFydE9mKCdtb250aCcpKTtcclxuXHJcbiAgICB0aGlzLmluaXRZZWFyUmFuZ2UoKTtcclxuICAgIFxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrRGF0ZShkYXRlVmFsdWU6IHN0cmluZ3xNb21lbnR8bnVsbCk6IE1vbWVudHxudWxsIHtcclxuICAgIGlmICghVXRpbC5pc0RlZmluZWQoZGF0ZVZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICghaXNNb21lbnQoZGF0ZVZhbHVlKSkge1xyXG4gICAgICBkYXRlVmFsdWUgPSBtb21lbnQoZGF0ZVZhbHVlLCAnREQuTU0uWVlZWScpLnV0Yyh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAoIWRhdGVWYWx1ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgZGF0ZVZhbHVlID0gbW9tZW50KCkudXRjKHRydWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGVWYWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdFllYXJSYW5nZSgpOiB2b2lkIHtcclxuICAgIGxldCB0b2RheVllYXIgPSB0aGlzLnRvZGF5LnllYXIoKTtcclxuICAgIHRoaXMueWVhclJhbmdlID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTUgfSwgKF8sIGkpID0+IHRvZGF5WWVhciAtIDcgKyBpKTtcclxuXHJcbiAgICBsZXQgZGF0ZVllYXIgPSBtb21lbnQodGhpcy5kYXRlLCAnREQuTU0uWVlZWScpLnllYXIoKTtcclxuICAgIGlmICghdGhpcy55ZWFyUmFuZ2UuaW5jbHVkZXMoZGF0ZVllYXIpKSB7XHJcbiAgICAgIHdoaWxlIChkYXRlWWVhciA8IHRoaXMueWVhclJhbmdlWzBdKSB7XHJcbiAgICAgICAgdGhpcy55ZWFyUmFuZ2UgPSB0aGlzLnllYXJSYW5nZS5tYXAoeSA9PiB5IC0gMTUpO1xyXG4gICAgICB9XHJcbiAgICAgIHdoaWxlIChkYXRlWWVhciA+IHRoaXMueWVhclJhbmdlW3RoaXMueWVhclJhbmdlLmxlbmd0aCAtIDFdKSB7XHJcbiAgICAgICAgdGhpcy55ZWFyUmFuZ2UgPSB0aGlzLnllYXJSYW5nZS5tYXAoeSA9PiB5ICsgMTUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdENhbGVuZGFyKHN0YXJ0T2ZNb250aDogTW9tZW50KTogdm9pZCB7XHJcbiAgICBsZXQgc3RhcnREYXlPZldlZWsgPSAoc3RhcnRPZk1vbnRoLmNsb25lKCkud2Vla2RheSgpICsgNikgJSA3OyAvLyBBZGp1c3QgdG8gc3RhcnQgb24gTW9uZGF5O1xyXG4gICAgbGV0IG1vbnRoRGF5cyA9IHN0YXJ0T2ZNb250aC5jbG9uZSgpLmRheXNJbk1vbnRoKCk7XHJcblxyXG4gICAgdGhpcy5tb250aEluZGV4ID0gc3RhcnRPZk1vbnRoLmNsb25lKCkubW9udGgoKTtcclxuICAgIHRoaXMueWVhciA9IHN0YXJ0T2ZNb250aC5jbG9uZSgpLnllYXIoKTtcclxuXHJcbiAgICB0aGlzLmRheXMgPSBbXTtcclxuICAgIHRoaXMucGxhY2Vob2xkZXIgPSBbXTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMucGxhY2Vob2xkZXIgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzdGFydERheU9mV2VlayB9LCAoXywgaSkgPT4gJycpO1xyXG4gICAgXHJcbiAgICB0aGlzLmRheXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBtb250aERheXMgfSwgKF8sIGkpID0+IHtcclxuICAgICAgbGV0IGRheU1vbWVudCA9IG1vbWVudChzdGFydE9mTW9udGgpLmFkZChpLCAnZGF5cycpO1xyXG4gICAgICBsZXQgZGF5ID0ge1xyXG4gICAgICAgIGRhdGU6IGRheU1vbWVudCxcclxuICAgICAgICBkYXk6IGRheU1vbWVudC5mb3JtYXQoJ0QnKSxcclxuICAgICAgICBpc1RvZGF5OiBkYXlNb21lbnQuaXNTYW1lKHRoaXMudG9kYXksICdkYXknKSxcclxuICAgICAgICBpc1NlbGVjdGVkOiBuZXcgT2JzZXJ2YWJsZVZhbHVlKHRoaXMuZGF0ZSAmJiBkYXlNb21lbnQuaXNTYW1lKHRoaXMuZGF0ZSwgJ2RheScpKSxcclxuICAgICAgICBpc1dlZWtlbmQ6IGRheU1vbWVudC5kYXkoKSA9PT0gMCB8fCBkYXlNb21lbnQuZGF5KCkgPT09IDYsXHJcbiAgICAgICAgaXNEaXNhYmxlZDogbmV3IE9ic2VydmFibGVWYWx1ZShmYWxzZSksIC8vIFBsYWNlaG9sZGVyIGZvciBmdXR1cmUgbG9naWNcclxuICAgICAgICBiZXR3ZWVuUmFuZ2U6IG5ldyBPYnNlcnZhYmxlVmFsdWUoZmFsc2UpLFxyXG4gICAgICAgIHJhbmdlU2VsZWN0ZWQ6IG5ldyBPYnNlcnZhYmxlVmFsdWUoZmFsc2UpLFxyXG4gICAgICAgIHJhbmdlSG92ZXI6IG5ldyBPYnNlcnZhYmxlVmFsdWUoZmFsc2UpLFxyXG4gICAgICAgIHJhbmdlSG92ZXJCZXR3ZWVuOiBuZXcgT2JzZXJ2YWJsZVZhbHVlKGZhbHNlKSxcclxuICAgICAgICBjaGFuZ2VkOiAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRheXMpOyBcclxuICAgICAgICAgIC8vIGxldCB0ZW1wQXJyYXkgPSB0aGlzLmRheXMuc2xpY2UoKTtcclxuICAgICAgICAgIC8vIHRoaXMuZGF5cyA9IFtdO1xyXG4gICAgICAgICAgLy8gdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgLy8gdGhpcy5kYXlzID0gdGVtcEFycmF5O1xyXG4gICAgICAgICAgLy8gdGhpcy5kYXlzID0gWy4uLnRoaXMuZGF5c107IC8vIFRyaWdnZXIgY2hhbmdlIGRldGVjdGlvbiBmb3IgdGhlIGRheXMgYXJyYXlcclxuICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgLy8gdGhpcy5zaG93RGF5cyA9IGZhbHNlO1xyXG4gICAgICAgICAgLy8gdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgLy8gdGhpcy5zaG93RGF5cyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7IFxyXG4gICAgICAgICAgLy8gfSwxMDApO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBkYXkuaXNTZWxlY3RlZC5jaGFuZ2VkLnN1YnNjcmliZSgoKSA9PiB7dGhpcy5jZHIubWFya0ZvckNoZWNrKCk7IH0pO1xyXG4gICAgICBkYXkucmFuZ2VTZWxlY3RlZC5jaGFuZ2VkLnN1YnNjcmliZSgoKSA9PiB7dGhpcy5jZHIubWFya0ZvckNoZWNrKCk7IH0pO1xyXG4gICAgICBkYXkuYmV0d2VlblJhbmdlLmNoYW5nZWQuc3Vic2NyaWJlKCgpID0+IHt0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTsgfSk7XHJcbiAgICAgIGRheS5yYW5nZUhvdmVyLmNoYW5nZWQuc3Vic2NyaWJlKCgpID0+IHt0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTsgfSk7XHJcbiAgICAgIGRheS5yYW5nZUhvdmVyQmV0d2Vlbi5jaGFuZ2VkLnN1YnNjcmliZSgoKSA9PiB7dGhpcy5jZHIubWFya0ZvckNoZWNrKCk7IH0pO1xyXG4gICAgICByZXR1cm4gZGF5O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8vIGdldERheXMoKTogRGF5W10ge1xyXG4gIC8vICAgcmV0dXJuIFsuLi50aGlzLmRheXNdO1xyXG4gIC8vIH1cclxuXHJcbiAgdHJhY2tCeUlkKGluZGV4OiBudW1iZXIsIGl0ZW06IERheSkge1xyXG4gICAgcmV0dXJuIGl0ZW0uZGF5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRhdGVTZWxlY3RlZChkYXk6IERheSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnJhbmdlKSB7XHJcbiAgICAgIGlmICghZGF5LmlzRGlzYWJsZWQudmFsdWUpIHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLmRheXMuZmluZChkID0+IGQuaXNTZWxlY3RlZCk7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICBzZWxlY3RlZC5pc1NlbGVjdGVkLnZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXkuZGF0ZTtcclxuICAgICAgICBkYXkuaXNTZWxlY3RlZC52YWx1ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kYXRlQ2hhbmdlZC5lbWl0KHRoaXMuZGF0ZSk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBsZXQgdGVtcEFycmF5ID0gdGhpcy5kYXlzLnNsaWNlKCk7XHJcbiAgICAgIHRoaXMuZGF5cyA9IFtdO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIHRoaXMuZGF5cyA9IHRlbXBBcnJheTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIWRheS5pc0Rpc2FibGVkLnZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnREYXRlICYmIHRoaXMuZW5kRGF0ZSkge1xyXG4gICAgICAgICAgdGhpcy5zdGFydERhdGUgPSBudWxsO1xyXG4gICAgICAgICAgdGhpcy5lbmREYXRlID0gbnVsbDtcclxuICAgICAgICAgIC8vIHRoaXMuZGF5cy5mb3JFYWNoKGQgPT4ge1xyXG4gICAgICAgICAgLy8gICBkLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIC8vICAgZC5yYW5nZVNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAvLyAgIGQuYmV0d2VlblJhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAvLyB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zdGFydERhdGUpIHtcclxuICAgICAgICAgIHRoaXMuc3RhcnREYXRlID0gZGF5LmRhdGUuY2xvbmUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmVuZERhdGUgJiYgZGF5LmRhdGUuaXNBZnRlcih0aGlzLnN0YXJ0RGF0ZSkpIHtcclxuICAgICAgICAgIHRoaXMuZW5kRGF0ZSA9IGRheS5kYXRlLmNsb25lKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXkuZGF0ZS5pc0JlZm9yZSh0aGlzLnN0YXJ0RGF0ZSkpIHtcclxuICAgICAgICAgIHRoaXMuZW5kRGF0ZSA9IHRoaXMuc3RhcnREYXRlLmNsb25lKCk7XHJcbiAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IGRheS5kYXRlLmNsb25lKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybjsgLy8gSW52YWxpZCBzZWxlY3Rpb25cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGxldCBzZWxlY3RlZFN0YXJ0ID0gdGhpcy5kYXlzLmZpbmQoZCA9PiBkLmlzU2VsZWN0ZWQpO1xyXG4gICAgICAgIC8vIGxldCBzZWxlY3RlZEVuZCA9IHRoaXMuZGF5cy5maW5kKGQgPT4gZC5yYW5nZVNlbGVjdGVkKTtcclxuICAgICAgICAvLyBpZiAoc2VsZWN0ZWRTdGFydCkge1xyXG4gICAgICAgIC8vICAgc2VsZWN0ZWRTdGFydC5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGlmIChzZWxlY3RlZEVuZCkge1xyXG4gICAgICAgIC8vICAgc2VsZWN0ZWRFbmQucmFuZ2VTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gZGF5LmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGVSYW5nZUNoYW5nZWQuZW1pdCh7IHN0YXJ0OiB0aGlzLnN0YXJ0RGF0ZSwgZW5kOiB0aGlzLmVuZERhdGUgfSk7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgeWVhclNlbGVjdGVkKHllYXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy55ZWFyID0geWVhcjtcclxuICAgIHRoaXMuc2hvd1llYXJzID0gZmFsc2U7XHJcbiAgICB0aGlzLnNob3dNb250aHMgPSB0cnVlO1xyXG4gICAgdGhpcy5zaG93RGF5cyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuY2FsZW5kYXJEYXRlID0gdGhpcy5jYWxlbmRhckRhdGUueWVhcih5ZWFyKTtcclxuICAgIFxyXG4gICAgdGhpcy5pbml0Q2FsZW5kYXIodGhpcy5jYWxlbmRhckRhdGUuc3RhcnRPZignbW9udGgnKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbW9udGhTZWxlY3RlZChtb250aDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm1vbnRoSW5kZXggPSBtb250aDtcclxuICAgIHRoaXMuc2hvd1llYXJzID0gZmFsc2U7XHJcbiAgICB0aGlzLnNob3dNb250aHMgPSBmYWxzZTtcclxuICAgIHRoaXMuc2hvd0RheXMgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuY2FsZW5kYXJEYXRlID0gdGhpcy5jYWxlbmRhckRhdGUubW9udGgobW9udGgpO1xyXG4gICAgXHJcbiAgICB0aGlzLmluaXRDYWxlbmRhcih0aGlzLmNhbGVuZGFyRGF0ZS5zdGFydE9mKCdtb250aCcpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFuZ2VWaWV3KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2hvd0RheXMpIHtcclxuICAgICAgdGhpcy5zaG93RGF5cyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dNb250aHMgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93WWVhcnMgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNob3dNb250aHMpIHtcclxuICAgICAgdGhpcy5zaG93RGF5cyA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd01vbnRocyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dZZWFycyA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaG93RGF5cyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNob3dNb250aHMgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNob3dZZWFycyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHJldmlvdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zaG93RGF5cykge1xyXG4gICAgICB0aGlzLmNhbGVuZGFyRGF0ZSA9IHRoaXMuY2FsZW5kYXJEYXRlLnN1YnRyYWN0KDEsICdtb250aCcpO1xyXG4gICAgICB0aGlzLmluaXRDYWxlbmRhcih0aGlzLmNhbGVuZGFyRGF0ZS5zdGFydE9mKCdtb250aCcpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNob3dNb250aHMpIHtcclxuICAgICAgdGhpcy5jYWxlbmRhckRhdGUgPSB0aGlzLmNhbGVuZGFyRGF0ZS5zdWJ0cmFjdCgxLCAneWVhcicpO1xyXG4gICAgICB0aGlzLmluaXRDYWxlbmRhcih0aGlzLmNhbGVuZGFyRGF0ZS5zdGFydE9mKCdtb250aCcpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNob3dZZWFycykge1xyXG4gICAgICB0aGlzLnllYXJSYW5nZSA9IHRoaXMueWVhclJhbmdlLm1hcCh5ID0+IHkgLSAxNSk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5leHQoKTogdm9pZCB7XHJcbiAgIGlmICh0aGlzLnNob3dEYXlzKSB7XHJcbiAgICAgIHRoaXMuY2FsZW5kYXJEYXRlID0gdGhpcy5jYWxlbmRhckRhdGUuYWRkKDEsICdtb250aCcpO1xyXG4gICAgICB0aGlzLmluaXRDYWxlbmRhcih0aGlzLmNhbGVuZGFyRGF0ZS5zdGFydE9mKCdtb250aCcpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNob3dNb250aHMpIHtcclxuICAgICAgdGhpcy5jYWxlbmRhckRhdGUgPSB0aGlzLmNhbGVuZGFyRGF0ZS5hZGQoMSwgJ3llYXInKTtcclxuICAgICAgdGhpcy5pbml0Q2FsZW5kYXIodGhpcy5jYWxlbmRhckRhdGUuc3RhcnRPZignbW9udGgnKSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zaG93WWVhcnMpIHtcclxuICAgICAgdGhpcy55ZWFyUmFuZ2UgPSB0aGlzLnllYXJSYW5nZS5tYXAoeSA9PiB5ICsgMTUpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF5IHtcclxuICBkYXRlOiBNb21lbnQ7XHJcbiAgZGF5OiBzdHJpbmc7XHJcbiAgaXNUb2RheT86IGJvb2xlYW47XHJcbiAgaXNTZWxlY3RlZD86IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPjtcclxuICBpc1dlZWtlbmQ/OiBib29sZWFuO1xyXG4gIGlzRGlzYWJsZWQ/OiBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj47XHJcblxyXG4gIGJldHdlZW5SYW5nZT86IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPjtcclxuICByYW5nZVNlbGVjdGVkPzogT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+O1xyXG4gIHJhbmdlSG92ZXI/OiBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj47XHJcbiAgcmFuZ2VIb3ZlckJldHdlZW4/OiBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj47XHJcblxyXG4gIGNoYW5nZWQ6ICgpID0+IHZvaWQ7XHJcbn0iLCI8ZGl2IGNsYXNzPVwibXJkLWRhdGVwaWNrZXItY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXJkLWRhdGVwaWNrZXItaGVhZGVyXCI+XHJcbiAgICAgICAgPG1yZC1idXR0b24gKGNsaWNrKT1cImNoYW5nZVZpZXcoKVwiPnt7bW9udGhzW21vbnRoSW5kZXhdfX0ge3t5ZWFyfX08L21yZC1idXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1yZC1kYXRlcGlja2VyLWhlYWRlci1uYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgIDxtcmQtYnV0dG9uIGljb24tYnV0dG9uIChjbGljayk9XCJwcmV2aW91cygpXCI+PDwvbXJkLWJ1dHRvbj5cclxuICAgICAgICAgICAgPG1yZC1idXR0b24gaWNvbi1idXR0b24gKGNsaWNrKT1cIm5leHQoKVwiPj48L21yZC1idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtcmQtZGF0ZXBpY2tlci1jb250ZW50XCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dEYXlzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtcmQtZGF0ZXBpY2tlci13ZWVrZGF5c1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yZC1kYXRlcGlja2VyLXdlZWtkYXlcIj5NbzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yZC1kYXRlcGlja2VyLXdlZWtkYXlcIj5EaTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yZC1kYXRlcGlja2VyLXdlZWtkYXlcIj5NaTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yZC1kYXRlcGlja2VyLXdlZWtkYXlcIj5EbzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yZC1kYXRlcGlja2VyLXdlZWtkYXlcIj5GcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yZC1kYXRlcGlja2VyLXdlZWtkYXlcIj5TYTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yZC1kYXRlcGlja2VyLXdlZWtkYXlcIj5TbzwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yZC1kYXRlcGlja2VyLXdlZWtkYXlzIHdyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtcmQtZGF0ZXBpY2tlci13ZWVrZGF5XCIgKm5nRm9yPVwibGV0IHAgb2YgcGxhY2Vob2xkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcmFuZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bXJkLWJ1dHRvbiBpY29uLWJ1dHRvbiBmdWxsSWNvbiBkaWFtZXRlcj1cIjJlbVwiIFtjbGFzc109XCJ7J3RvZGF5JzogZC5pc1RvZGF5ICYmICFkLmlzU2VsZWN0ZWQudmFsdWUsICdzZWxlY3RlZCc6IGQuaXNTZWxlY3RlZC52YWx1ZX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1yZC1kYXRlcGlja2VyLXdlZWtkYXlcIiAqbmdGb3I9XCJsZXQgZCBvZiBkYXlzXCIgKGNsaWNrKT1cImRhdGVTZWxlY3RlZChkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2QuZGF5fX1cclxuICAgICAgICAgICAgICAgICAgICA8L21yZC1idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJyYW5nZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtcmQtYnV0dG9uIGljb24tYnV0dG9uIGZ1bGxJY29uIGRpYW1ldGVyPVwiMmVtXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLnRvZGF5XT1cImQuaXNUb2RheSAmJiAhZC5pc1NlbGVjdGVkLnZhbHVlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cImQuaXNTZWxlY3RlZC52YWx1ZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5yYW5nZVNlbGVjdGVkXT1cImQucmFuZ2VTZWxlY3RlZC52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmJldHdlZW5SYW5nZV09XCJkLmJldHdlZW5SYW5nZS52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLnJhbmdlSG92ZXJdPVwiZC5yYW5nZUhvdmVyLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MucmFuZ2VIb3ZlckJldHdlZW5dPVwiZC5yYW5nZUhvdmVyQmV0d2Vlbi52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXJkLWRhdGVwaWNrZXItd2Vla2RheVwiICpuZ0Zvcj1cImxldCBkIG9mIGRheXM7IHRyYWNrQnk6IHRyYWNrQnlJZFwiIChjbGljayk9XCJkYXRlU2VsZWN0ZWQoZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbXJkRGF0ZVJhbmdlSW5kaWNhdG9yXT1cImRcIiBbc3RhcnREYXRlXT1cInN0YXJ0RGF0ZVwiIFtlbmREYXRlXT1cImVuZERhdGVcIiBbaG92ZXJFbmREYXRlXT1cImVuZEhvdmVyRGF0ZVwiIChpc0hvdmVyaW5nKT1cImVuZEhvdmVyRGF0ZSA9ICRldmVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2QuZGF5fX1cclxuICAgICAgICAgICAgICAgICAgICA8L21yZC1idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dZZWFyc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXJkLWRhdGVwaWNrZXIteWVhcnNcIj5cclxuICAgICAgICAgICAgICAgIDxtcmQtYnV0dG9uIG91dGxpbmUtYnV0dG9uIGRpYW1ldGVyPVwiMmVtXCIgW2NsYXNzXT1cInsnc2VsZWN0ZWQnOiB5ID09PSB5ZWFyfVwiICpuZ0Zvcj1cImxldCB5IG9mIHllYXJSYW5nZTtcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ5ZWFyU2VsZWN0ZWQoeSlcIj5cclxuICAgICAgICAgICAgICAgICAgICB7e3l9fVxyXG4gICAgICAgICAgICAgICAgPC9tcmQtYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd01vbnRoc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXJkLWRhdGVwaWNrZXItbW9udGhzXCI+XHJcbiAgICAgICAgICAgICAgICA8bXJkLWJ1dHRvbiBvdXRsaW5lLWJ1dHRvbiBkaWFtZXRlcj1cIjJlbVwiIFtjbGFzc109XCJ7J3NlbGVjdGVkJzogaSA9PT0gbW9udGhJbmRleH1cIiAqbmdGb3I9XCJsZXQgbSBvZiBmdWxsTW9udGhzOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwibW9udGhTZWxlY3RlZChtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7bX19XHJcbiAgICAgICAgICAgICAgICA8L21yZC1idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PiJdfQ==