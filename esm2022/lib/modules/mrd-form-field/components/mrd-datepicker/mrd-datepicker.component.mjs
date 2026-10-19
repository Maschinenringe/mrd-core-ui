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
    i0.ɵɵlistener("click", function MrdDatepickerComponent_ng_container_12_mrd_button_2_Template_mrd_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r24); const i_r22 = restoredCtx.index; const ctx_r23 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r23.monthSelected(i_r22)); });
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
    // In ngOnInit statt ngAfterViewInit: Kalender und Jahre stehen beim ersten Rendern fest (sonst NG0100 ausserhalb des Overlays)
    ngOnInit() {
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
        args: [{ selector: 'mrd-datepicker', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-datepicker-container\">\n    <div class=\"mrd-datepicker-header\">\n        <mrd-button (click)=\"changeView()\">{{months[monthIndex]}} {{year}}</mrd-button>\n        <div class=\"mrd-datepicker-header-navigation\">\n            <mrd-button icon-button (click)=\"previous()\"><</mrd-button>\n            <mrd-button icon-button (click)=\"next()\">></mrd-button>\n        </div>\n    </div>\n    <div class=\"mrd-datepicker-content\">\n        <ng-container *ngIf=\"showDays\">\n            <div class=\"mrd-datepicker-weekdays\">\n                <div class=\"mrd-datepicker-weekday\">Mo</div>\n                <div class=\"mrd-datepicker-weekday\">Di</div>\n                <div class=\"mrd-datepicker-weekday\">Mi</div>\n                <div class=\"mrd-datepicker-weekday\">Do</div>\n                <div class=\"mrd-datepicker-weekday\">Fr</div>\n                <div class=\"mrd-datepicker-weekday\">Sa</div>\n                <div class=\"mrd-datepicker-weekday\">So</div>\n            </div>\n            <div class=\"mrd-datepicker-weekdays wrap\">\n                <div class=\"mrd-datepicker-weekday\" *ngFor=\"let p of placeholder\"></div>\n                <ng-container *ngIf=\"!range\">\n                    <mrd-button icon-button fullIcon diameter=\"2em\" [class]=\"{'today': d.isToday && !d.isSelected.value, 'selected': d.isSelected.value}\"\n                        class=\"mrd-datepicker-weekday\" *ngFor=\"let d of days\" (click)=\"dateSelected(d)\">\n                        {{d.day}}\n                    </mrd-button>\n                </ng-container>\n                <ng-container *ngIf=\"range\">\n                    <mrd-button icon-button fullIcon diameter=\"2em\" \n                    [class.today]=\"d.isToday && !d.isSelected.value\" \n                    [class.selected]=\"d.isSelected.value\" \n                    [class.rangeSelected]=\"d.rangeSelected.value\"\n                    [class.betweenRange]=\"d.betweenRange.value\"\n                    [class.rangeHover]=\"d.rangeHover.value\"\n                    [class.rangeHoverBetween]=\"d.rangeHoverBetween.value\"\n                        class=\"mrd-datepicker-weekday\" *ngFor=\"let d of days; trackBy: trackById\" (click)=\"dateSelected(d)\"\n                        [mrdDateRangeIndicator]=\"d\" [startDate]=\"startDate\" [endDate]=\"endDate\" [hoverEndDate]=\"endHoverDate\" (isHovering)=\"endHoverDate = $event\">\n                        {{d.day}}\n                    </mrd-button>\n                </ng-container>\n            </div>\n        </ng-container>\n        <ng-container *ngIf=\"showYears\">\n            <div class=\"mrd-datepicker-years\">\n                <mrd-button outline-button diameter=\"2em\" [class]=\"{'selected': y === year}\" *ngFor=\"let y of yearRange;\"\n                    (click)=\"yearSelected(y)\">\n                    {{y}}\n                </mrd-button>\n            </div>\n        </ng-container>\n        <ng-container *ngIf=\"showMonths\">\n            <div class=\"mrd-datepicker-months\">\n                <mrd-button outline-button diameter=\"2em\" [class]=\"{'selected': i === monthIndex}\" *ngFor=\"let m of fullMonths; let i = index\"\n                    (click)=\"monthSelected(i)\">\n                    {{m}}\n                </mrd-button>\n            </div>\n        </ng-container>\n    </div>\n</div>", styles: [":host{height:300px}.mrd-datepicker-container{width:275px;min-height:272px;max-height:312px;background:#fff;border-radius:12px;padding:8px;box-shadow:5px 5px 20px -5px #00000052;-webkit-box-shadow:5px 5px 20px -5px rgba(0,0,0,.3215686275)}.mrd-datepicker-container .mrd-datepicker-header{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.mrd-datepicker-container .mrd-datepicker-header .mrd-datepicker-header-navigation{display:flex;flex-direction:row;align-items:center}.mrd-datepicker-container .mrd-datepicker-content{padding:12px}.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays{display:flex;flex-direction:row;gap:4px}.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays.wrap{flex-wrap:wrap}.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays .mrd-datepicker-weekday{width:30px;height:30px;text-align:center;font-weight:700;color:#666;border-radius:50%}.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays .mrd-datepicker-weekday.today{border:1px solid #000}.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays .mrd-datepicker-weekday.betweenRange{background:#69b02288}.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays .mrd-datepicker-weekday.rangeHover{border:1px dotted #666}.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays .mrd-datepicker-weekday.rangeHover.rangeHoverBetween{border-radius:0}.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays .mrd-datepicker-weekday.selected,.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays .mrd-datepicker-weekday.rangeSelected{background:#68b022}.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays ::ng-deep .mrd-datepicker-weekday.selected .mrd-button-text-content,.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays ::ng-deep .mrd-datepicker-weekday.rangeSelected .mrd-button-text-content,.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-weekdays ::ng-deep .mrd-datepicker-weekday.betweenRange .mrd-button-text-content{color:#fff}.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-years,.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-months{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;gap:8px}.mrd-datepicker-container .mrd-datepicker-content .mrd-datepicker-months mrd-button{width:105px}.mrd-datepicker-container .mrd-datepicker-content ::ng-deep .mrd-datepicker-years .selected .mrd-button-container,.mrd-datepicker-container .mrd-datepicker-content ::ng-deep .mrd-datepicker-months .selected .mrd-button-container{border-color:#68b022;border-width:2px}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWRhdGVwaWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWRhdGVwaWNrZXIvbXJkLWRhdGVwaWNrZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWRhdGVwaWNrZXIvbXJkLWRhdGVwaWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0ksT0FBTyxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQVUsTUFBTSxRQUFRLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7OztJQ2tCakMseUJBQXdFOzs7OztJQUVwRSxzQ0FDb0Y7SUFBMUIsd1FBQVMsZUFBQSx5QkFBZSxDQUFBLElBQUM7SUFDL0UsWUFDSjtJQUFBLGlCQUFhOzs7SUFIbUMsd0dBQXFGO0lBRWpJLGVBQ0o7SUFESSx5Q0FDSjs7O0lBSkosNkJBQTZCO0lBQ3pCLHNIQUdhO0lBQ2pCLDBCQUFlOzs7SUFIc0MsZUFBTztJQUFQLHFDQUFPOzs7O0lBS3hELHNDQVErSTtJQURqRSwwUUFBUyxlQUFBLDJCQUFlLENBQUEsSUFBQyxxUUFBQTtJQUVuRyxZQUNKO0lBQUEsaUJBQWE7Ozs7SUFUYixpRUFBZ0Qsb0NBQUEsNENBQUEsMENBQUEsc0NBQUEsb0RBQUE7SUFPNUMsNkNBQTJCLGdDQUFBLDRCQUFBLHND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QUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBQztZQUNsRCxTQUFTO2tCQUFqQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBRUksV0FBVztrQkFBcEIsTUFBTTtZQUNHLGdCQUFnQjtrQkFBekIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb2xlYW5BdHRyaWJ1dGUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IG1vbWVudCwgeyBpc01vbWVudCwgTW9tZW50IH0gZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IE9ic2VydmFibGVWYWx1ZSwgVXRpbCB9IGZyb20gJ21yZC1jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXJkLWRhdGVwaWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWRhdGVwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tcmQtZGF0ZXBpY2tlci5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNcmREYXRlcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBkYXRlOiBzdHJpbmcgfCBNb21lbnQgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUsIGFsaWFzOiAncmFuZ2UtcGlja2VyJ30pIHJhbmdlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHN0YXJ0RGF0ZTogTW9tZW50IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGVuZERhdGU6IE1vbWVudCB8IG51bGwgPSBudWxsO1xuXG4gIEBPdXRwdXQoKSBkYXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8TW9tZW50PigpO1xuICBAT3V0cHV0KCkgZGF0ZVJhbmdlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBzdGFydDogTW9tZW50IHwgbnVsbCwgZW5kOiBNb21lbnQgfCBudWxsIH0+KCk7XG5cbiAgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmdbXSA9IFtdO1xuICBwdWJsaWMgZGF5czogRGF5W10gPSBbXTtcblxuICBwdWJsaWMgZW5kSG92ZXJEYXRlOiBNb21lbnQgfCBudWxsID0gbnVsbDtcbiAgXG4gIHB1YmxpYyBtb250aEluZGV4OiBudW1iZXIgPSAwO1xuICBwdWJsaWMgbW9udGhzOiBzdHJpbmdbXSA9IFsnSkFOJywgJ0ZFQicsICdNw4RSJywgJ0FQUicsICdNQUknLCAnSlVOJywgJ0pVTCcsICdBVUcnLCAnU0VQJywgJ09LVCcsICdOT1YnLCAnREVaJ107XG4gIHB1YmxpYyBmdWxsTW9udGhzOiBzdHJpbmdbXSA9IFsnSmFudWFyJywgJ0ZlYnJ1YXInLCAnTcOkcnonLCAnQXByaWwnLCAnTWFpJywgJ0p1bmknLCAnSnVsaScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09rdG9iZXInLCAnTm92ZW1iZXInLCAnRGV6ZW1iZXInXTtcbiAgcHVibGljIHllYXI6IG51bWJlciA9IDA7XG4gIHB1YmxpYyB5ZWFyUmFuZ2U6IG51bWJlcltdID0gW107XG5cbiAgcHVibGljIHNob3dEYXlzOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIHNob3dNb250aHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNob3dZZWFyczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgdG9kYXk6IE1vbWVudCA9IG1vbWVudCgpLnV0Yyh0cnVlKTtcbiAgcHJpdmF0ZSBjYWxlbmRhckRhdGU6IE1vbWVudCA9IG1vbWVudCgpLnV0Yyh0cnVlKTtcbiAgXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgLy8gSW4gbmdPbkluaXQgc3RhdHQgbmdBZnRlclZpZXdJbml0OiBLYWxlbmRlciB1bmQgSmFocmUgc3RlaGVuIGJlaW0gZXJzdGVuIFJlbmRlcm4gZmVzdCAoc29uc3QgTkcwMTAwIGF1c3NlcmhhbGIgZGVzIE92ZXJsYXlzKVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmFuZ2UpIHtcbiAgICAgIHRoaXMuZGF0ZSA9IHRoaXMuY2hlY2tEYXRlKHRoaXMuZGF0ZSk7XG5cbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmRhdGUpICYmIHRoaXMuZGF0ZS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgdGhpcy5jYWxlbmRhckRhdGUgPSB0aGlzLmRhdGUuY2xvbmUoKS51dGModHJ1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhcnREYXRlID0gdGhpcy5jaGVja0RhdGUodGhpcy5zdGFydERhdGUpO1xuICAgICAgdGhpcy5lbmREYXRlID0gdGhpcy5jaGVja0RhdGUodGhpcy5lbmREYXRlKTtcblxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuc3RhcnREYXRlKSAmJiB0aGlzLnN0YXJ0RGF0ZS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgdGhpcy5jYWxlbmRhckRhdGUgPSB0aGlzLnN0YXJ0RGF0ZS5jbG9uZSgpLnV0Yyh0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5lbmREYXRlKSAmJiB0aGlzLmVuZERhdGUuaXNWYWxpZCgpKSB7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJEYXRlID0gdGhpcy5lbmREYXRlLmNsb25lKCkudXRjKHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBcbiAgICB0aGlzLmluaXRDYWxlbmRhcih0aGlzLmNhbGVuZGFyRGF0ZS5zdGFydE9mKCdtb250aCcpKTtcblxuICAgIHRoaXMuaW5pdFllYXJSYW5nZSgpO1xuICAgIFxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0RhdGUoZGF0ZVZhbHVlOiBzdHJpbmd8TW9tZW50fG51bGwpOiBNb21lbnR8bnVsbCB7XG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZChkYXRlVmFsdWUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFpc01vbWVudChkYXRlVmFsdWUpKSB7XG4gICAgICBkYXRlVmFsdWUgPSBtb21lbnQoZGF0ZVZhbHVlLCAnREQuTU0uWVlZWScpLnV0Yyh0cnVlKTtcbiAgICB9IGVsc2UgaWYgKCFkYXRlVmFsdWUuaXNWYWxpZCgpKSB7XG4gICAgICBkYXRlVmFsdWUgPSBtb21lbnQoKS51dGModHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlVmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGluaXRZZWFyUmFuZ2UoKTogdm9pZCB7XG4gICAgbGV0IHRvZGF5WWVhciA9IHRoaXMudG9kYXkueWVhcigpO1xuICAgIHRoaXMueWVhclJhbmdlID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTUgfSwgKF8sIGkpID0+IHRvZGF5WWVhciAtIDcgKyBpKTtcblxuICAgIGxldCBkYXRlWWVhciA9IG1vbWVudCh0aGlzLmRhdGUsICdERC5NTS5ZWVlZJykueWVhcigpO1xuICAgIGlmICghdGhpcy55ZWFyUmFuZ2UuaW5jbHVkZXMoZGF0ZVllYXIpKSB7XG4gICAgICB3aGlsZSAoZGF0ZVllYXIgPCB0aGlzLnllYXJSYW5nZVswXSkge1xuICAgICAgICB0aGlzLnllYXJSYW5nZSA9IHRoaXMueWVhclJhbmdlLm1hcCh5ID0+IHkgLSAxNSk7XG4gICAgICB9XG4gICAgICB3aGlsZSAoZGF0ZVllYXIgPiB0aGlzLnllYXJSYW5nZVt0aGlzLnllYXJSYW5nZS5sZW5ndGggLSAxXSkge1xuICAgICAgICB0aGlzLnllYXJSYW5nZSA9IHRoaXMueWVhclJhbmdlLm1hcCh5ID0+IHkgKyAxNSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0Q2FsZW5kYXIoc3RhcnRPZk1vbnRoOiBNb21lbnQpOiB2b2lkIHtcbiAgICBsZXQgc3RhcnREYXlPZldlZWsgPSAoc3RhcnRPZk1vbnRoLmNsb25lKCkud2Vla2RheSgpICsgNikgJSA3OyAvLyBBZGp1c3QgdG8gc3RhcnQgb24gTW9uZGF5O1xuICAgIGxldCBtb250aERheXMgPSBzdGFydE9mTW9udGguY2xvbmUoKS5kYXlzSW5Nb250aCgpO1xuXG4gICAgdGhpcy5tb250aEluZGV4ID0gc3RhcnRPZk1vbnRoLmNsb25lKCkubW9udGgoKTtcbiAgICB0aGlzLnllYXIgPSBzdGFydE9mTW9udGguY2xvbmUoKS55ZWFyKCk7XG5cbiAgICB0aGlzLmRheXMgPSBbXTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gW107XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzdGFydERheU9mV2VlayB9LCAoXywgaSkgPT4gJycpO1xuICAgIFxuICAgIHRoaXMuZGF5cyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IG1vbnRoRGF5cyB9LCAoXywgaSkgPT4ge1xuICAgICAgbGV0IGRheU1vbWVudCA9IG1vbWVudChzdGFydE9mTW9udGgpLmFkZChpLCAnZGF5cycpO1xuICAgICAgbGV0IGRheSA9IHtcbiAgICAgICAgZGF0ZTogZGF5TW9tZW50LFxuICAgICAgICBkYXk6IGRheU1vbWVudC5mb3JtYXQoJ0QnKSxcbiAgICAgICAgaXNUb2RheTogZGF5TW9tZW50LmlzU2FtZSh0aGlzLnRvZGF5LCAnZGF5JyksXG4gICAgICAgIGlzU2VsZWN0ZWQ6IG5ldyBPYnNlcnZhYmxlVmFsdWUodGhpcy5kYXRlICYmIGRheU1vbWVudC5pc1NhbWUodGhpcy5kYXRlLCAnZGF5JykpLFxuICAgICAgICBpc1dlZWtlbmQ6IGRheU1vbWVudC5kYXkoKSA9PT0gMCB8fCBkYXlNb21lbnQuZGF5KCkgPT09IDYsXG4gICAgICAgIGlzRGlzYWJsZWQ6IG5ldyBPYnNlcnZhYmxlVmFsdWUoZmFsc2UpLCAvLyBQbGFjZWhvbGRlciBmb3IgZnV0dXJlIGxvZ2ljXG4gICAgICAgIGJldHdlZW5SYW5nZTogbmV3IE9ic2VydmFibGVWYWx1ZShmYWxzZSksXG4gICAgICAgIHJhbmdlU2VsZWN0ZWQ6IG5ldyBPYnNlcnZhYmxlVmFsdWUoZmFsc2UpLFxuICAgICAgICByYW5nZUhvdmVyOiBuZXcgT2JzZXJ2YWJsZVZhbHVlKGZhbHNlKSxcbiAgICAgICAgcmFuZ2VIb3ZlckJldHdlZW46IG5ldyBPYnNlcnZhYmxlVmFsdWUoZmFsc2UpLFxuICAgICAgICBjaGFuZ2VkOiAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXlzKTsgXG4gICAgICAgICAgLy8gbGV0IHRlbXBBcnJheSA9IHRoaXMuZGF5cy5zbGljZSgpO1xuICAgICAgICAgIC8vIHRoaXMuZGF5cyA9IFtdO1xuICAgICAgICAgIC8vIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAvLyB0aGlzLmRheXMgPSB0ZW1wQXJyYXk7XG4gICAgICAgICAgLy8gdGhpcy5kYXlzID0gWy4uLnRoaXMuZGF5c107IC8vIFRyaWdnZXIgY2hhbmdlIGRldGVjdGlvbiBmb3IgdGhlIGRheXMgYXJyYXlcbiAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvLyB0aGlzLnNob3dEYXlzID0gZmFsc2U7XG4gICAgICAgICAgLy8gdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgIC8vIHRoaXMuc2hvd0RheXMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7IFxuICAgICAgICAgIC8vIH0sMTAwKTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGRheS5pc1NlbGVjdGVkLmNoYW5nZWQuc3Vic2NyaWJlKCgpID0+IHt0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTsgfSk7XG4gICAgICBkYXkucmFuZ2VTZWxlY3RlZC5jaGFuZ2VkLnN1YnNjcmliZSgoKSA9PiB7dGhpcy5jZHIubWFya0ZvckNoZWNrKCk7IH0pO1xuICAgICAgZGF5LmJldHdlZW5SYW5nZS5jaGFuZ2VkLnN1YnNjcmliZSgoKSA9PiB7dGhpcy5jZHIubWFya0ZvckNoZWNrKCk7IH0pO1xuICAgICAgZGF5LnJhbmdlSG92ZXIuY2hhbmdlZC5zdWJzY3JpYmUoKCkgPT4ge3RoaXMuY2RyLm1hcmtGb3JDaGVjaygpOyB9KTtcbiAgICAgIGRheS5yYW5nZUhvdmVyQmV0d2Vlbi5jaGFuZ2VkLnN1YnNjcmliZSgoKSA9PiB7dGhpcy5jZHIubWFya0ZvckNoZWNrKCk7IH0pO1xuICAgICAgcmV0dXJuIGRheTtcbiAgICB9KTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8vIGdldERheXMoKTogRGF5W10ge1xuICAvLyAgIHJldHVybiBbLi4udGhpcy5kYXlzXTtcbiAgLy8gfVxuXG4gIHRyYWNrQnlJZChpbmRleDogbnVtYmVyLCBpdGVtOiBEYXkpIHtcbiAgICByZXR1cm4gaXRlbS5kYXk7XG4gIH1cblxuICBwdWJsaWMgZGF0ZVNlbGVjdGVkKGRheTogRGF5KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJhbmdlKSB7XG4gICAgICBpZiAoIWRheS5pc0Rpc2FibGVkLnZhbHVlKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZCA9IHRoaXMuZGF5cy5maW5kKGQgPT4gZC5pc1NlbGVjdGVkKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgc2VsZWN0ZWQuaXNTZWxlY3RlZC52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXRlID0gZGF5LmRhdGU7XG4gICAgICAgIGRheS5pc1NlbGVjdGVkLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kYXRlQ2hhbmdlZC5lbWl0KHRoaXMuZGF0ZSk7XG4gICAgICB9XG4gICAgXG4gICAgICBsZXQgdGVtcEFycmF5ID0gdGhpcy5kYXlzLnNsaWNlKCk7XG4gICAgICB0aGlzLmRheXMgPSBbXTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuZGF5cyA9IHRlbXBBcnJheTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWRheS5pc0Rpc2FibGVkLnZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0RGF0ZSAmJiB0aGlzLmVuZERhdGUpIHtcbiAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG51bGw7XG4gICAgICAgICAgdGhpcy5lbmREYXRlID0gbnVsbDtcbiAgICAgICAgICAvLyB0aGlzLmRheXMuZm9yRWFjaChkID0+IHtcbiAgICAgICAgICAvLyAgIGQuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgIC8vICAgZC5yYW5nZVNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgLy8gICBkLmJldHdlZW5SYW5nZSA9IGZhbHNlO1xuICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0RGF0ZSkge1xuICAgICAgICAgIHRoaXMuc3RhcnREYXRlID0gZGF5LmRhdGUuY2xvbmUoKTtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5lbmREYXRlICYmIGRheS5kYXRlLmlzQWZ0ZXIodGhpcy5zdGFydERhdGUpKSB7XG4gICAgICAgICAgdGhpcy5lbmREYXRlID0gZGF5LmRhdGUuY2xvbmUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXkuZGF0ZS5pc0JlZm9yZSh0aGlzLnN0YXJ0RGF0ZSkpIHtcbiAgICAgICAgICB0aGlzLmVuZERhdGUgPSB0aGlzLnN0YXJ0RGF0ZS5jbG9uZSgpO1xuICAgICAgICAgIHRoaXMuc3RhcnREYXRlID0gZGF5LmRhdGUuY2xvbmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm47IC8vIEludmFsaWQgc2VsZWN0aW9uXG4gICAgICAgIH1cblxuICAgICAgICAvLyBsZXQgc2VsZWN0ZWRTdGFydCA9IHRoaXMuZGF5cy5maW5kKGQgPT4gZC5pc1NlbGVjdGVkKTtcbiAgICAgICAgLy8gbGV0IHNlbGVjdGVkRW5kID0gdGhpcy5kYXlzLmZpbmQoZCA9PiBkLnJhbmdlU2VsZWN0ZWQpO1xuICAgICAgICAvLyBpZiAoc2VsZWN0ZWRTdGFydCkge1xuICAgICAgICAvLyAgIHNlbGVjdGVkU3RhcnQuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgICAgICAvLyBpZiAoc2VsZWN0ZWRFbmQpIHtcbiAgICAgICAgLy8gICBzZWxlY3RlZEVuZC5yYW5nZVNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBkYXkuaXNTZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5kYXRlUmFuZ2VDaGFuZ2VkLmVtaXQoeyBzdGFydDogdGhpcy5zdGFydERhdGUsIGVuZDogdGhpcy5lbmREYXRlIH0pO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHllYXJTZWxlY3RlZCh5ZWFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnllYXIgPSB5ZWFyO1xuICAgIHRoaXMuc2hvd1llYXJzID0gZmFsc2U7XG4gICAgdGhpcy5zaG93TW9udGhzID0gdHJ1ZTtcbiAgICB0aGlzLnNob3dEYXlzID0gZmFsc2U7XG5cbiAgICB0aGlzLmNhbGVuZGFyRGF0ZSA9IHRoaXMuY2FsZW5kYXJEYXRlLnllYXIoeWVhcik7XG4gICAgXG4gICAgdGhpcy5pbml0Q2FsZW5kYXIodGhpcy5jYWxlbmRhckRhdGUuc3RhcnRPZignbW9udGgnKSk7XG4gIH1cblxuICBwdWJsaWMgbW9udGhTZWxlY3RlZChtb250aDogbnVtYmVyKSB7XG4gICAgdGhpcy5tb250aEluZGV4ID0gbW9udGg7XG4gICAgdGhpcy5zaG93WWVhcnMgPSBmYWxzZTtcbiAgICB0aGlzLnNob3dNb250aHMgPSBmYWxzZTtcbiAgICB0aGlzLnNob3dEYXlzID0gdHJ1ZTtcblxuICAgIHRoaXMuY2FsZW5kYXJEYXRlID0gdGhpcy5jYWxlbmRhckRhdGUubW9udGgobW9udGgpO1xuICAgIFxuICAgIHRoaXMuaW5pdENhbGVuZGFyKHRoaXMuY2FsZW5kYXJEYXRlLnN0YXJ0T2YoJ21vbnRoJykpO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZVZpZXcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvd0RheXMpIHtcbiAgICAgIHRoaXMuc2hvd0RheXMgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2hvd01vbnRocyA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93WWVhcnMgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zaG93TW9udGhzKSB7XG4gICAgICB0aGlzLnNob3dEYXlzID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2hvd01vbnRocyA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93WWVhcnMgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93RGF5cyA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93TW9udGhzID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2hvd1llYXJzID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIHByZXZpb3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3dEYXlzKSB7XG4gICAgICB0aGlzLmNhbGVuZGFyRGF0ZSA9IHRoaXMuY2FsZW5kYXJEYXRlLnN1YnRyYWN0KDEsICdtb250aCcpO1xuICAgICAgdGhpcy5pbml0Q2FsZW5kYXIodGhpcy5jYWxlbmRhckRhdGUuc3RhcnRPZignbW9udGgnKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNob3dNb250aHMpIHtcbiAgICAgIHRoaXMuY2FsZW5kYXJEYXRlID0gdGhpcy5jYWxlbmRhckRhdGUuc3VidHJhY3QoMSwgJ3llYXInKTtcbiAgICAgIHRoaXMuaW5pdENhbGVuZGFyKHRoaXMuY2FsZW5kYXJEYXRlLnN0YXJ0T2YoJ21vbnRoJykpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaG93WWVhcnMpIHtcbiAgICAgIHRoaXMueWVhclJhbmdlID0gdGhpcy55ZWFyUmFuZ2UubWFwKHkgPT4geSAtIDE1KTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZXh0KCk6IHZvaWQge1xuICAgaWYgKHRoaXMuc2hvd0RheXMpIHtcbiAgICAgIHRoaXMuY2FsZW5kYXJEYXRlID0gdGhpcy5jYWxlbmRhckRhdGUuYWRkKDEsICdtb250aCcpO1xuICAgICAgdGhpcy5pbml0Q2FsZW5kYXIodGhpcy5jYWxlbmRhckRhdGUuc3RhcnRPZignbW9udGgnKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNob3dNb250aHMpIHtcbiAgICAgIHRoaXMuY2FsZW5kYXJEYXRlID0gdGhpcy5jYWxlbmRhckRhdGUuYWRkKDEsICd5ZWFyJyk7XG4gICAgICB0aGlzLmluaXRDYWxlbmRhcih0aGlzLmNhbGVuZGFyRGF0ZS5zdGFydE9mKCdtb250aCcpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2hvd1llYXJzKSB7XG4gICAgICB0aGlzLnllYXJSYW5nZSA9IHRoaXMueWVhclJhbmdlLm1hcCh5ID0+IHkgKyAxNSk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXkge1xuICBkYXRlOiBNb21lbnQ7XG4gIGRheTogc3RyaW5nO1xuICBpc1RvZGF5PzogYm9vbGVhbjtcbiAgaXNTZWxlY3RlZD86IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPjtcbiAgaXNXZWVrZW5kPzogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZD86IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPjtcblxuICBiZXR3ZWVuUmFuZ2U/OiBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj47XG4gIHJhbmdlU2VsZWN0ZWQ/OiBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj47XG4gIHJhbmdlSG92ZXI/OiBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj47XG4gIHJhbmdlSG92ZXJCZXR3ZWVuPzogT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+O1xuXG4gIGNoYW5nZWQ6ICgpID0+IHZvaWQ7XG59IiwiPGRpdiBjbGFzcz1cIm1yZC1kYXRlcGlja2VyLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJtcmQtZGF0ZXBpY2tlci1oZWFkZXJcIj5cbiAgICAgICAgPG1yZC1idXR0b24gKGNsaWNrKT1cImNoYW5nZVZpZXcoKVwiPnt7bW9udGhzW21vbnRoSW5kZXhdfX0ge3t5ZWFyfX08L21yZC1idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtcmQtZGF0ZXBpY2tlci1oZWFkZXItbmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgPG1yZC1idXR0b24gaWNvbi1idXR0b24gKGNsaWNrKT1cInByZXZpb3VzKClcIj48PC9tcmQtYnV0dG9uPlxuICAgICAgICAgICAgPG1yZC1idXR0b24gaWNvbi1idXR0b24gKGNsaWNrKT1cIm5leHQoKVwiPj48L21yZC1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtcmQtZGF0ZXBpY2tlci1jb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93RGF5c1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yZC1kYXRlcGlja2VyLXdlZWtkYXlzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yZC1kYXRlcGlja2VyLXdlZWtkYXlcIj5NbzwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtcmQtZGF0ZXBpY2tlci13ZWVrZGF5XCI+RGk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXJkLWRhdGVwaWNrZXItd2Vla2RheVwiPk1pPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yZC1kYXRlcGlja2VyLXdlZWtkYXlcIj5EbzwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtcmQtZGF0ZXBpY2tlci13ZWVrZGF5XCI+RnI8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXJkLWRhdGVwaWNrZXItd2Vla2RheVwiPlNhPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yZC1kYXRlcGlja2VyLXdlZWtkYXlcIj5TbzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXJkLWRhdGVwaWNrZXItd2Vla2RheXMgd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtcmQtZGF0ZXBpY2tlci13ZWVrZGF5XCIgKm5nRm9yPVwibGV0IHAgb2YgcGxhY2Vob2xkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJhbmdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtcmQtYnV0dG9uIGljb24tYnV0dG9uIGZ1bGxJY29uIGRpYW1ldGVyPVwiMmVtXCIgW2NsYXNzXT1cInsndG9kYXknOiBkLmlzVG9kYXkgJiYgIWQuaXNTZWxlY3RlZC52YWx1ZSwgJ3NlbGVjdGVkJzogZC5pc1NlbGVjdGVkLnZhbHVlfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1yZC1kYXRlcGlja2VyLXdlZWtkYXlcIiAqbmdGb3I9XCJsZXQgZCBvZiBkYXlzXCIgKGNsaWNrKT1cImRhdGVTZWxlY3RlZChkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tkLmRheX19XG4gICAgICAgICAgICAgICAgICAgIDwvbXJkLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicmFuZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1yZC1idXR0b24gaWNvbi1idXR0b24gZnVsbEljb24gZGlhbWV0ZXI9XCIyZW1cIiBcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLnRvZGF5XT1cImQuaXNUb2RheSAmJiAhZC5pc1NlbGVjdGVkLnZhbHVlXCIgXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJkLmlzU2VsZWN0ZWQudmFsdWVcIiBcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLnJhbmdlU2VsZWN0ZWRdPVwiZC5yYW5nZVNlbGVjdGVkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmJldHdlZW5SYW5nZV09XCJkLmJldHdlZW5SYW5nZS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5yYW5nZUhvdmVyXT1cImQucmFuZ2VIb3Zlci52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5yYW5nZUhvdmVyQmV0d2Vlbl09XCJkLnJhbmdlSG92ZXJCZXR3ZWVuLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXJkLWRhdGVwaWNrZXItd2Vla2RheVwiICpuZ0Zvcj1cImxldCBkIG9mIGRheXM7IHRyYWNrQnk6IHRyYWNrQnlJZFwiIChjbGljayk9XCJkYXRlU2VsZWN0ZWQoZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW21yZERhdGVSYW5nZUluZGljYXRvcl09XCJkXCIgW3N0YXJ0RGF0ZV09XCJzdGFydERhdGVcIiBbZW5kRGF0ZV09XCJlbmREYXRlXCIgW2hvdmVyRW5kRGF0ZV09XCJlbmRIb3ZlckRhdGVcIiAoaXNIb3ZlcmluZyk9XCJlbmRIb3ZlckRhdGUgPSAkZXZlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZC5kYXl9fVxuICAgICAgICAgICAgICAgICAgICA8L21yZC1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93WWVhcnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtcmQtZGF0ZXBpY2tlci15ZWFyc1wiPlxuICAgICAgICAgICAgICAgIDxtcmQtYnV0dG9uIG91dGxpbmUtYnV0dG9uIGRpYW1ldGVyPVwiMmVtXCIgW2NsYXNzXT1cInsnc2VsZWN0ZWQnOiB5ID09PSB5ZWFyfVwiICpuZ0Zvcj1cImxldCB5IG9mIHllYXJSYW5nZTtcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwieWVhclNlbGVjdGVkKHkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7eX19XG4gICAgICAgICAgICAgICAgPC9tcmQtYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd01vbnRoc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yZC1kYXRlcGlja2VyLW1vbnRoc1wiPlxuICAgICAgICAgICAgICAgIDxtcmQtYnV0dG9uIG91dGxpbmUtYnV0dG9uIGRpYW1ldGVyPVwiMmVtXCIgW2NsYXNzXT1cInsnc2VsZWN0ZWQnOiBpID09PSBtb250aEluZGV4fVwiICpuZ0Zvcj1cImxldCBtIG9mIGZ1bGxNb250aHM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwibW9udGhTZWxlY3RlZChpKVwiPlxuICAgICAgICAgICAgICAgICAgICB7e219fVxuICAgICAgICAgICAgICAgIDwvbXJkLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdfQ==