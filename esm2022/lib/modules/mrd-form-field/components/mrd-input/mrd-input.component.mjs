import { ChangeDetectionStrategy, Component, Directive, EventEmitter, HostListener, Input, Output, ViewChild, booleanAttribute, numberAttribute } from '@angular/core';
import moment from 'moment';
import { BaseObject, ObservableValue, SubscriptionHandler, TypeConverter, Util, ValidatorFloat } from 'mrd-core';
import { ConfigUtil } from '../../../../common/util/config.util';
import { colorAttribute } from '../../../../common/transforms/color-transform';
import * as _ from 'underscore';
import { MrdDatumUtil } from '../../../../common/util/datum.util';
import { ValidatorDatum } from '../../../../common/validation/validator-datum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "../../../mrd-button/components/mrd-button/mrd-button.component";
import * as i4 from "../../../../common/directive/decimal-number-directive/decimal-number.directive";
import * as i5 from "../../../../common/directive/time-input-directive/time-input.directive";
import * as i6 from "../mrd-datepicker/mrd-datepicker.component";
import * as i7 from "../mrd-timepicker/mrd-timepicker.component";
const _c0 = ["baseInput"];
const _c1 = ["textArea"];
const _c2 = ["dateInput"];
const _c3 = ["timeInput"];
function MrdInputComponent_input_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 5, 6);
    i0.ɵɵlistener("click", function MrdInputComponent_input_0_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.inputClicked($event)); })("focus", function MrdInputComponent_input_0_Template_input_focus_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.focus($event)); })("blur", function MrdInputComponent_input_0_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.blur($event)); })("input", function MrdInputComponent_input_0_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.input($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("pointer-events", ctx_r0.readonly ? "none" : "auto")("text-align", ctx_r0.textEnd ? "end" : ctx_r0.centered ? "center" : "start")("color", (ctx_r0.formControl == null ? null : ctx_r0.formControl.disabled) || ctx_r0.disabled ? ctx_r0.disabledColor : ctx_r0.color);
    i0.ɵɵproperty("value", ctx_r0.value)("disabled", (ctx_r0.formControl == null ? null : ctx_r0.formControl.disabled) || ctx_r0.disabled)("placeholder", !ctx_r0.labelPresent || ctx_r0.isFocused ? ctx_r0.placeholder : "")("decimalNumber", ctx_r0.number || ctx_r0.maxDigits || ctx_r0.maxDigits === 0)("nachkommastellen", ctx_r0.nachkommastellen)("timeInput", ctx_r0.time);
    i0.ɵɵattribute("inputmode", ctx_r0.number ? "decimal" : null);
} }
const _c4 = function (a0) { return { "line-height": a0 }; };
function MrdInputComponent_textarea_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "textarea", 7, 8);
    i0.ɵɵlistener("click", function MrdInputComponent_textarea_1_Template_textarea_click_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.inputClicked($event)); })("focus", function MrdInputComponent_textarea_1_Template_textarea_focus_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.focus($event)); })("blur", function MrdInputComponent_textarea_1_Template_textarea_blur_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r19 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r19.blur($event)); })("input", function MrdInputComponent_textarea_1_Template_textarea_input_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r20 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r20.input($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("pointer-events", ctx_r1.readonly ? "none" : "auto")("color", (ctx_r1.formControl == null ? null : ctx_r1.formControl.disabled) || ctx_r1.disabled ? ctx_r1.disabledColor : ctx_r1.color);
    i0.ɵɵproperty("value", ctx_r1.value)("disabled", (ctx_r1.formControl == null ? null : ctx_r1.formControl.disabled) || ctx_r1.disabled)("placeholder", !ctx_r1.labelPresent || ctx_r1.isFocused ? ctx_r1.placeholder : "")("ngStyle", i0.ɵɵpureFunction1(8, _c4, ctx_r1.lineHeight + "px"));
} }
function MrdInputComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", null, 9);
} }
function MrdInputComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "mrd-button", 10);
    i0.ɵɵlistener("click", function MrdInputComponent_div_3_Template_mrd_button_click_1_listener() { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r22.toggleClicked()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 11)(3, "defs")(4, "style");
    i0.ɵɵtext(5, ".a{fill:#494949;}");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(6, "path", 12);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", (ctx_r3.formControl == null ? null : ctx_r3.formControl.disabled) || ctx_r3.disabled);
} }
function MrdInputComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", null, 13);
} }
function MrdInputComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "mrd-button", 14);
    i0.ɵɵlistener("click", function MrdInputComponent_div_5_Template_mrd_button_click_1_listener() { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r25.toggleClicked()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 15);
    i0.ɵɵelement(3, "path", 16)(4, "path", 17)(5, "path", 18);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", (ctx_r5.formControl == null ? null : ctx_r5.formControl.disabled) || ctx_r5.disabled);
} }
function MrdInputComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 19);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} }
function MrdInputComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-datepicker", 20);
    i0.ɵɵlistener("dateChanged", function MrdInputComponent_ng_template_7_Template_mrd_datepicker_dateChanged_0_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r27.dateChanged($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("date", ctx_r7.value);
} }
function MrdInputComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-timepicker", 21);
    i0.ɵɵlistener("timeChanged", function MrdInputComponent_ng_template_8_Template_mrd_timepicker_timeChanged_0_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r29.timeChanged($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("time", ctx_r8.value);
} }
const _c5 = [[["", "unfocusedOverlay", ""]]];
const _c6 = ["[unfocusedOverlay]"];
export class MrdInputComponent extends BaseObject {
    cdr;
    static DEFAULT_MAX_LENGTH = 512;
    static DEFAULT_MIN_ROWS = 1;
    static DEFAULT_MAX_ROWS = 2;
    static DEFAULT_LINE_HEIGHT = 24;
    static DATE_REGEX_INPUT = /(\d{4})-(\d{2})-(\d{2})/;
    baseInputElement;
    textAreaElement;
    dateInputElement;
    timeInputElement;
    formControl;
    placeholder = ' ';
    value = '';
    maxLength;
    minRows = MrdInputComponent.DEFAULT_MIN_ROWS;
    maxRows = MrdInputComponent.DEFAULT_MAX_ROWS;
    lineHeight = MrdInputComponent.DEFAULT_LINE_HEIGHT;
    disabled = false;
    readonly = false;
    required = false;
    textarea = false;
    date = false;
    rangeStart = false;
    rangeEnd = false;
    time = false;
    number = false;
    customDateTimeToggle = false;
    validateOnBlur = false;
    formControlChangeOnBlur = false;
    set color(value) {
        this._color = value;
        this.cdr.markForCheck();
    }
    get color() {
        return this._color;
    }
    _color;
    set centered(value) {
        this._centered = value;
        this.cdr.markForCheck();
    }
    get centered() {
        return this._centered;
    }
    _centered = false;
    set textEnd(value) {
        this._textEnd = value;
        this.cdr.markForCheck();
    }
    get textEnd() {
        return this._textEnd;
    }
    _textEnd = false;
    datePickerToggle;
    maxDigits;
    autofocus = false;
    touched = new EventEmitter();
    focused = new EventEmitter();
    blurred = new EventEmitter();
    valueChange = new EventEmitter();
    inputChange = new EventEmitter();
    disabledColor = _.isObject(ConfigUtil.getConfig().baseColors.disabled) ? ConfigUtil.getConfig().baseColors.disabled.text : ConfigUtil.getConfig().baseColors.disabled || '#afa6a6';
    set labelPresent(value) {
        if (this._labelPresent === value) {
            return;
        }
        this._labelPresent = value;
        this.cdr.detectChanges();
    }
    get labelPresent() {
        return this._labelPresent;
    }
    _labelPresent = false;
    isFocused = false;
    showDatepicker = new ObservableValue(false);
    showTimepicker = new ObservableValue(false);
    formControlChangeValue;
    selectTimeout;
    _positions = [
        {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
        },
        {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
        },
        {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom'
        },
        {
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom'
        },
    ];
    constructor(cdr) {
        super();
        this.cdr = cdr;
    }
    ngOnDestroy() {
        clearTimeout(this.selectTimeout);
        super.ngOnDestroy();
    }
    ngAfterViewInit() {
        if (Util.isDefined(this.formControl) && this.disabled) {
            throw new Error('Ein deaktiviertes Input kann nicht mit einem FormControl verwendet werden.');
        }
        if (this.maxLength !== undefined && Number.isNaN(this.maxLength)) {
            this.maxLength = MrdInputComponent.DEFAULT_MAX_LENGTH;
        }
        if (this.minRows !== undefined && Number.isNaN(this.minRows)) {
            this.minRows = MrdInputComponent.DEFAULT_MIN_ROWS;
        }
        if (this.maxRows !== undefined && Number.isNaN(this.maxRows)) {
            this.maxRows = MrdInputComponent.DEFAULT_MAX_ROWS;
        }
        if (this.lineHeight !== undefined && Number.isNaN(this.lineHeight)) {
            this.lineHeight = MrdInputComponent.DEFAULT_LINE_HEIGHT;
        }
        if (this.textarea && Util.isDefined(this.textAreaElement)) {
            if (Util.isDefined(this.maxLength)) {
                this.textAreaElement.nativeElement.maxLength = this.maxLength;
            }
            this.calculateTextAreaHeight();
        }
        this.color = this.color || ConfigUtil.getConfig().formField?.input?.color || '#000000';
        if (this.autofocus) {
            if (this.baseInputElement) {
                this.baseInputElement.nativeElement.focus();
            }
            if (this.textAreaElement) {
                this.textAreaElement.nativeElement.focus();
            }
            if (this.dateInputElement) {
                this.dateInputElement.nativeElement.focus();
            }
            if (this.timeInputElement) {
                this.timeInputElement.nativeElement.focus();
            }
        }
        if (this.date && this.rangeStart) {
            this.textEnd = true;
        }
        if (this.date && Util.isDefined(this.formControl)) {
            let datumValidator = this.formControl.validators.find((validator) => validator instanceof ValidatorDatum);
            if (!Util.isDefined(datumValidator)) {
                this.formControl.validateWith([...this.formControl.validators, new ValidatorDatum()], { emitEvent: false });
            }
        }
        if (this.number && Util.isDefined(this.formControl)) {
            if (!Util.isDefined(this.formControl.convertTo)) {
                this.formControl.convertTo = TypeConverter.toNumber;
            }
            if (!Util.isDefined(this.formControl.showAs)) {
                this.formControl.showAs = TypeConverter.asGermanFloat;
            }
            if (_.isNumber(this.formControl.control.value)) {
                this.formControl.setValue(this.formControl.control.value, true, { emitEvent: false });
            }
        }
        if (Util.isDefined(this.formControl) && Util.isDefined(this.formControl.control.value)) {
            this.value = this.formControl.control.value;
            this.cdr.detectChanges();
        }
        if (Util.isDefined(this.formControl)) {
            this.watch(this.formControl.valueChanges, new SubscriptionHandler(() => this.formControlChanged()));
            if (!Util.isDefined(this.maxDigits)) {
                let floatValidator = this.formControl.validators.find((validator) => validator instanceof ValidatorFloat);
                if (Util.isDefined(floatValidator) && Util.isDefined(floatValidator.digitsAfter)) {
                    this.maxDigits = floatValidator.digitsAfter;
                }
            }
        }
        this.watch(this.showDatepicker.changed, new SubscriptionHandler((show) => {
            if (!show) {
                this.isFocused = false;
                this.blurred.emit();
            }
            this.cdr.detectChanges();
        }));
        this.watch(this.showTimepicker.changed, new SubscriptionHandler((show) => {
            if (!show) {
                this.isFocused = false;
                this.blurred.emit();
            }
            this.cdr.detectChanges();
        }));
    }
    formControlChanged() {
        if (this.textarea) {
            if (Util.isDefined(this.textAreaElement)) {
                this.calculateTextAreaHeight();
            }
        }
        if (Util.isDefined(this.formControl.control.value)) {
            this.value = this.formControl.control.value;
        }
        else {
            this.value = null;
        }
        this.valueChange.emit(this.value);
        this.cdr.detectChanges();
    }
    input(event) {
        let targetValue = event.target.value;
        if (this.textarea) {
            if (Util.isDefined(this.textAreaElement)) {
                this.calculateTextAreaHeight();
            }
        }
        if (Util.isDefined(this.formControl)) {
            let dateInputMatch = MrdInputComponent.DATE_REGEX_INPUT.test(targetValue);
            if (!this.formControlChangeOnBlur) {
                this.formControl.setValue(targetValue);
            }
            else {
                this.formControlChangeValue = targetValue;
            }
            if (this.date && dateInputMatch) {
                this.baseInputElement.nativeElement.focus();
            }
        }
        else {
            this.value = targetValue;
            this.valueChange.emit(this.value);
        }
        this.inputChange.emit(targetValue);
        this.cdr.detectChanges();
    }
    dateChanged(event) {
        if (Util.isDefined(this.formControl)) {
            if (!this.formControlChangeOnBlur) {
                this.formControl.setValue(event);
                this.baseInputElement.nativeElement.focus();
                this.inputChange.emit(event.format('DD.MM.YYYY'));
            }
            else {
                this.formControlChangeValue = event;
            }
        }
        else {
            this.value = event.format('DD.MM.YYYY');
            this.valueChange.emit(this.value);
            this.inputChange.emit(event.format('DD.MM.YYYY'));
        }
        this.showDatepicker.value = false;
        if (this.formControlChangeOnBlur) {
            this.blur(null);
        }
        this.cdr.detectChanges();
    }
    timeChanged(event) {
        if (Util.isDefined(this.formControl)) {
            if (!this.formControlChangeOnBlur) {
                this.formControl.setValue(event);
                this.baseInputElement.nativeElement.focus();
                this.inputChange.emit(event.format('HH:mm'));
            }
            else {
                this.formControlChangeValue = event;
            }
        }
        else {
            this.value = event.format('HH:mm');
            this.valueChange.emit(this.value);
            this.inputChange.emit(event.format('HH:mm'));
        }
        this.showTimepicker.value = false;
        if (this.formControlChangeOnBlur) {
            this.blur(null);
        }
        this.cdr.detectChanges();
    }
    get nachkommastellen() {
        return Util.isDefined(this.maxDigits) ? this.maxDigits : 99;
    }
    calculateTextAreaHeight() {
        this.textAreaElement.nativeElement.style.height = 'auto';
        this.textAreaElement.nativeElement.style.height =
            this.textAreaElement.nativeElement.scrollHeight > (this.maxRows * this.lineHeight) ?
                (this.maxRows * this.lineHeight) + 'px' :
                this.textAreaElement.nativeElement.scrollHeight < (this.minRows * this.lineHeight) ?
                    (this.minRows * this.lineHeight) + 'px' :
                    this.textAreaElement.nativeElement.scrollHeight + 'px';
    }
    inputClicked(event) {
        this.touched.emit();
    }
    focus(event) {
        this.isFocused = true;
        this.focused.emit();
        if (this.date && Util.isDefined(event) && !this.readonly && Util.isDefined(this.baseInputElement)) {
            clearTimeout(this.selectTimeout);
            this.selectTimeout = setTimeout(() => this.baseInputElement?.nativeElement?.select(), 0);
        }
        this.cdr.detectChanges();
    }
    blur(event) {
        if (this.formControlChangeOnBlur && Util.isDefined(this.formControlChangeValue)) {
            this.formControl.setValue(this.formControlChangeValue);
            let emitValue = this.formControlChangeValue;
            if (this.date && moment.isMoment(emitValue)) {
                emitValue = emitValue.format('DD.MM.YYYY');
            }
            if (this.time && moment.isMoment(emitValue)) {
                emitValue = emitValue.format('HH:mm');
            }
            this.inputChange.emit(emitValue);
            this.formControlChangeValue = undefined;
        }
        if (this.formControl && this.date) {
            let momentDate = MrdDatumUtil.parse(this.formControl.control.value);
            if (momentDate !== null) {
                this.formControl.setValue(momentDate);
            }
        }
        if (this.formControl && this.time && this.formControl.value && this.formControl.value !== '') {
            if (!moment.isMoment(this.formControl.value)) {
                let momentTime = moment(this.formControl.value, 'HH:mm').year(2020).month(0).day(1).utc(true);
                if (momentTime.isValid()) {
                    this.formControl.setValue(momentTime);
                }
            }
        }
        this.isFocused = false;
        this.blurred.emit();
        this.cdr.detectChanges();
    }
    toggleClicked() {
        // this.dateInputElement.nativeElement.showPicker();
        if (this.date) {
            this.showDatepicker.value = !this.showDatepicker.value;
            if (this.showDatepicker.value) {
                this.focus(null);
            }
        }
        if (this.time) {
            this.showTimepicker.value = !this.showTimepicker.value;
            if (this.showTimepicker.value) {
                this.focus(null);
            }
        }
        this.cdr.detectChanges();
    }
    /** @nocollapse */ static ɵfac = function MrdInputComponent_Factory(t) { return new (t || MrdInputComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdInputComponent, selectors: [["mrd-input"]], viewQuery: function MrdInputComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.baseInputElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.textAreaElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dateInputElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.timeInputElement = _t.first);
        } }, inputs: { formControl: ["mrdFormControl", "formControl"], placeholder: "placeholder", value: "value", maxLength: ["maxLength", "maxLength", numberAttribute], minRows: ["minRows", "minRows", numberAttribute], maxRows: ["maxRows", "maxRows", numberAttribute], lineHeight: ["lineHeight", "lineHeight", numberAttribute], disabled: ["disabled", "disabled", booleanAttribute], readonly: ["readonly", "readonly", booleanAttribute], required: ["required", "required", booleanAttribute], textarea: ["textarea", "textarea", booleanAttribute], date: ["date", "date", booleanAttribute], rangeStart: ["rangeStart", "rangeStart", booleanAttribute], rangeEnd: ["rangeEnd", "rangeEnd", booleanAttribute], time: ["time", "time", booleanAttribute], number: ["number", "number", booleanAttribute], customDateTimeToggle: ["customDateTimeToggle", "customDateTimeToggle", booleanAttribute], validateOnBlur: ["validateOnBlur", "validateOnBlur", booleanAttribute], formControlChangeOnBlur: ["formControlChangeOnBlur", "formControlChangeOnBlur", booleanAttribute], color: ["color", "color", colorAttribute], centered: ["text-centered", "centered", booleanAttribute], textEnd: ["text-end", "textEnd", booleanAttribute], datePickerToggle: "datePickerToggle", maxDigits: "maxDigits", autofocus: ["autofocus", "autofocus", booleanAttribute] }, outputs: { touched: "touched", focused: "focused", blurred: "blurred", valueChange: "valueChange", inputChange: "inputChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c6, decls: 9, vars: 15, consts: [[3, "value", "disabled", "placeholder", "pointer-events", "text-align", "color", "decimalNumber", "nachkommastellen", "timeInput", "click", "focus", "blur", "input", 4, "ngIf"], ["rows", "1", 3, "value", "disabled", "placeholder", "pointer-events", "color", "ngStyle", "click", "focus", "blur", "input", 4, "ngIf"], [4, "ngIf"], ["class", "unfocusedOverlay", 4, "ngIf"], ["cdk-connected-overlay", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "backdropClick"], [3, "value", "disabled", "placeholder", "decimalNumber", "nachkommastellen", "timeInput", "click", "focus", "blur", "input"], ["baseInput", ""], ["rows", "1", 3, "value", "disabled", "placeholder", "ngStyle", "click", "focus", "blur", "input"], ["textArea", ""], ["dateInput", ""], ["icon-button", "", "fullIcon", "", "diameter", "24", "iconSize", "16", 3, "disabled", "click"], ["mrd-icon", "", "xmlns", "http://www.w3.org/2000/svg", "width", "100%", "height", "100%", "viewBox", "0 0 14.986 17.127", "fit", "", "preserveAspectRatio", "xMidYMid meet", "focusable", "false"], ["d", "M14.585,5.352H.4a.4.4,0,0,1-.4-.4v-1.2A1.606,1.606,0,0,1,1.606,2.141H3.211V.4a.4.4,0,0,1,.4-.4H4.951a.4.4,0,0,1,.4.4V2.141H9.634V.4a.4.4,0,0,1,.4-.4h1.338a.4.4,0,0,1,.4.4V2.141h1.606a1.606,1.606,0,0,1,1.606,1.606v1.2A.4.4,0,0,1,14.585,5.352ZM.4,6.423H14.585a.4.4,0,0,1,.4.4v8.7a1.606,1.606,0,0,1-1.606,1.606H1.606A1.606,1.606,0,0,1,0,15.522v-8.7A.4.4,0,0,1,.4,6.423Zm10.571,4.683a.4.4,0,0,0-.4-.4H8.564V8.7a.4.4,0,0,0-.4-.4H6.824a.4.4,0,0,0-.4.4V10.7H4.416a.4.4,0,0,0-.4.4v1.338a.4.4,0,0,0,.4.4H6.423v2.007a.4.4,0,0,0,.4.4H8.162a.4.4,0,0,0,.4-.4V12.845h2.007a.4.4,0,0,0,.4-.4Z", "transform", "translate(0 0)", 1, "a"], ["timeInput", ""], ["icon-button", "", "fullIcon", "", "diameter", "24", "iconSize", "18", 3, "disabled", "click"], ["mrd-icon", "", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z", "stroke", "#000000", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 6V12", "stroke", "#000000", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M16.24 16.24L12 12", "stroke", "#000000", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "unfocusedOverlay"], [3, "date", "dateChanged"], [3, "time", "timeChanged"]], template: function MrdInputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c5);
            i0.ɵɵtemplate(0, MrdInputComponent_input_0_Template, 2, 13, "input", 0);
            i0.ɵɵtemplate(1, MrdInputComponent_textarea_1_Template, 2, 10, "textarea", 1);
            i0.ɵɵtemplate(2, MrdInputComponent_div_2_Template, 2, 0, "div", 2);
            i0.ɵɵtemplate(3, MrdInputComponent_div_3_Template, 7, 1, "div", 2);
            i0.ɵɵtemplate(4, MrdInputComponent_div_4_Template, 2, 0, "div", 2);
            i0.ɵɵtemplate(5, MrdInputComponent_div_5_Template, 6, 1, "div", 2);
            i0.ɵɵtemplate(6, MrdInputComponent_span_6_Template, 2, 0, "span", 3);
            i0.ɵɵtemplate(7, MrdInputComponent_ng_template_7_Template, 1, 1, "ng-template", 4);
            i0.ɵɵlistener("backdropClick", function MrdInputComponent_Template_ng_template_backdropClick_7_listener() { return ctx.showDatepicker.value = false; });
            i0.ɵɵtemplate(8, MrdInputComponent_ng_template_8_Template, 1, 1, "ng-template", 4);
            i0.ɵɵlistener("backdropClick", function MrdInputComponent_Template_ng_template_backdropClick_8_listener() { return ctx.showTimepicker.value = false; });
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.textarea);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.textarea);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.date);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.date && !ctx.customDateTimeToggle && !ctx.rangeStart && !ctx.rangeEnd);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.time);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.time && !ctx.customDateTimeToggle);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isFocused);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayOrigin", ctx.dateInputElement)("cdkConnectedOverlayOpen", ctx.showDatepicker.value)("cdkConnectedOverlayPositions", ctx._positions);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayOrigin", ctx.timeInputElement)("cdkConnectedOverlayOpen", ctx.showTimepicker.value)("cdkConnectedOverlayPositions", ctx._positions);
        } }, dependencies: [i1.NgIf, i1.NgStyle, i2.CdkConnectedOverlay, i3.MrdButtonComponent, i4.DecimalNumberDirective, i5.TimeInputDirective, i6.MrdDatepickerComponent, i7.MrdTimepickerComponent], styles: ["[_nghost-%COMP%]{width:100%;display:flex;flex-direction:row}input[_ngcontent-%COMP%]{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}input[disabled][_ngcontent-%COMP%]{color:#afa6a6}textarea[_ngcontent-%COMP%]{outline:unset;background-color:transparent;width:100%;padding:0 2px;line-height:1.5em}textarea[disabled][_ngcontent-%COMP%]{color:#afa6a6}.unfocusedOverlay[_ngcontent-%COMP%]{position:absolute;width:100%;height:1.5em;outline:none;padding:1px 8px 0;display:flex;flex-direction:column;justify-content:center;pointer-events:none}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdInputComponent, [{
        type: Component,
        args: [{ selector: 'mrd-input', changeDetection: ChangeDetectionStrategy.OnPush, template: "<input #baseInput\r\n  (click)=\"inputClicked($event)\"\r\n  (focus)=\"focus($event)\"\r\n  (blur)=\"blur($event)\"\r\n  [value]=\"value\"\r\n  (input)=\"input($event)\"\r\n  [disabled]=\"formControl?.disabled || disabled\"\r\n  [placeholder]=\"!labelPresent || isFocused ? placeholder : ''\"\r\n  [style.pointer-events]=\"readonly ? 'none' : 'auto'\"\r\n  [style.text-align]=\"textEnd ? 'end' : centered ? 'center' : 'start'\"\r\n  [style.color]=\"formControl?.disabled || disabled ? disabledColor : color\"\r\n  [decimalNumber]=\"number || maxDigits || maxDigits === 0\" [nachkommastellen]=\"nachkommastellen\"\r\n  [attr.inputmode]=\"number ? 'decimal' : null\"\r\n  [timeInput]=\"time\"\r\n  *ngIf=\"!textarea\"\r\n  >\r\n\r\n<textarea #textArea\r\n  (click)=\"inputClicked($event)\"\r\n  (focus)=\"focus($event)\"\r\n  (blur)=\"blur($event)\"\r\n  [value]=\"value\"\r\n  (input)=\"input($event)\"\r\n  [disabled]=\"formControl?.disabled || disabled\"\r\n  [placeholder]=\"!labelPresent || isFocused ? placeholder : ''\"\r\n  [style.pointer-events]=\"readonly ? 'none' : 'auto'\"\r\n  [style.color]=\"formControl?.disabled || disabled ? disabledColor : color\"\r\n  *ngIf=\"textarea\"\r\n  rows=\"1\"\r\n  [ngStyle]=\"{'line-height': lineHeight + 'px'}\"\r\n></textarea>\r\n\r\n\r\n<div #dateInput *ngIf=\"date\"></div>\r\n<div *ngIf=\"date && !customDateTimeToggle && !rangeStart && !rangeEnd\" >\r\n  <mrd-button icon-button fullIcon diameter=\"24\" iconSize=\"16\" (click)=\"toggleClicked()\" [disabled]=\"formControl?.disabled || disabled\">\r\n    <svg mrd-icon xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 14.986 17.127\" fit=\"\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\">\r\n      <defs><style>.a{fill:#494949;}</style></defs>\r\n      <path class=\"a\" d=\"M14.585,5.352H.4a.4.4,0,0,1-.4-.4v-1.2A1.606,1.606,0,0,1,1.606,2.141H3.211V.4a.4.4,0,0,1,.4-.4H4.951a.4.4,0,0,1,.4.4V2.141H9.634V.4a.4.4,0,0,1,.4-.4h1.338a.4.4,0,0,1,.4.4V2.141h1.606a1.606,1.606,0,0,1,1.606,1.606v1.2A.4.4,0,0,1,14.585,5.352ZM.4,6.423H14.585a.4.4,0,0,1,.4.4v8.7a1.606,1.606,0,0,1-1.606,1.606H1.606A1.606,1.606,0,0,1,0,15.522v-8.7A.4.4,0,0,1,.4,6.423Zm10.571,4.683a.4.4,0,0,0-.4-.4H8.564V8.7a.4.4,0,0,0-.4-.4H6.824a.4.4,0,0,0-.4.4V10.7H4.416a.4.4,0,0,0-.4.4v1.338a.4.4,0,0,0,.4.4H6.423v2.007a.4.4,0,0,0,.4.4H8.162a.4.4,0,0,0,.4-.4V12.845h2.007a.4.4,0,0,0,.4-.4Z\" transform=\"translate(0 0)\"></path>\r\n    </svg>\r\n  </mrd-button>\r\n</div>\r\n\r\n<div #timeInput *ngIf=\"time\"></div>\r\n<div *ngIf=\"time && !customDateTimeToggle\">  \r\n  <mrd-button icon-button fullIcon diameter=\"24\" iconSize=\"18\" (click)=\"toggleClicked()\" [disabled]=\"formControl?.disabled || disabled\">\r\n    <svg mrd-icon viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <path d=\"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z\" stroke=\"#000000\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n      <path d=\"M12 6V12\" stroke=\"#000000\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n      <path d=\"M16.24 16.24L12 12\" stroke=\"#000000\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    </svg>\r\n  </mrd-button>\r\n</div>\r\n\r\n<span class=\"unfocusedOverlay\" *ngIf=\"!isFocused\">\r\n  <ng-content select=\"[unfocusedOverlay]\"></ng-content>\r\n</span>\r\n\r\n<ng-template\r\n  cdk-connected-overlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\r\n  [cdkConnectedOverlayOrigin]=\"dateInputElement\"\r\n  [cdkConnectedOverlayOpen]=\"showDatepicker.value\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  (backdropClick)=\"showDatepicker.value = false;\"\r\n>\r\n  <mrd-datepicker\r\n    [date]=\"value\"\r\n    (dateChanged)=\"dateChanged($event)\"\r\n  ></mrd-datepicker>\r\n</ng-template>\r\n\r\n<ng-template\r\n  cdk-connected-overlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\r\n  [cdkConnectedOverlayOrigin]=\"timeInputElement\"\r\n  [cdkConnectedOverlayOpen]=\"showTimepicker.value\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  (backdropClick)=\"showTimepicker.value = false;\"\r\n>\r\n  <mrd-timepicker\r\n    [time]=\"value\"\r\n    (timeChanged)=\"timeChanged($event)\"\r\n  ></mrd-timepicker>\r\n</ng-template>", styles: [":host{width:100%;display:flex;flex-direction:row}input{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}input[disabled]{color:#afa6a6}textarea{outline:unset;background-color:transparent;width:100%;padding:0 2px;line-height:1.5em}textarea[disabled]{color:#afa6a6}.unfocusedOverlay{position:absolute;width:100%;height:1.5em;outline:none;padding:1px 8px 0;display:flex;flex-direction:column;justify-content:center;pointer-events:none}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { baseInputElement: [{
            type: ViewChild,
            args: ['baseInput']
        }], textAreaElement: [{
            type: ViewChild,
            args: ['textArea']
        }], dateInputElement: [{
            type: ViewChild,
            args: ['dateInput']
        }], timeInputElement: [{
            type: ViewChild,
            args: ['timeInput']
        }], formControl: [{
            type: Input,
            args: ['mrdFormControl']
        }], placeholder: [{
            type: Input
        }], value: [{
            type: Input
        }], maxLength: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], minRows: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], maxRows: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], lineHeight: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], disabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], readonly: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], required: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], textarea: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], date: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], rangeStart: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], rangeEnd: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], time: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], number: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], customDateTimeToggle: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], validateOnBlur: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], formControlChangeOnBlur: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], color: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], centered: [{
            type: Input,
            args: [{ alias: 'text-centered', transform: booleanAttribute }]
        }], textEnd: [{
            type: Input,
            args: [{ alias: 'text-end', transform: booleanAttribute }]
        }], datePickerToggle: [{
            type: Input
        }], maxDigits: [{
            type: Input
        }], autofocus: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], touched: [{
            type: Output
        }], focused: [{
            type: Output
        }], blurred: [{
            type: Output
        }], valueChange: [{
            type: Output
        }], inputChange: [{
            type: Output
        }] }); })();
export class MrdDatePickerToggle {
    elementRef;
    mrdDateTimePickerToggle;
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        if (this.elementRef.nativeElement.closest('mrd-icon')) {
            this.elementRef.nativeElement.style.cursor = 'pointer';
            this.elementRef.nativeElement.style.width = '20px';
            this.elementRef.nativeElement.style.height = '20px';
        }
    }
    onClick(event) {
        if (Util.isDefined(this.mrdDateTimePickerToggle)) {
            this.mrdDateTimePickerToggle.toggleClicked();
        }
    }
    /** @nocollapse */ static ɵfac = function MrdDatePickerToggle_Factory(t) { return new (t || MrdDatePickerToggle)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdDatePickerToggle, selectors: [["", "mrdDateTimePickerToggle", ""]], hostBindings: function MrdDatePickerToggle_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function MrdDatePickerToggle_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } }, inputs: { mrdDateTimePickerToggle: "mrdDateTimePickerToggle" } });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdDatePickerToggle, [{
        type: Directive,
        args: [{
                selector: '[mrdDateTimePickerToggle]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { mrdDateTimePickerToggle: [{
            type: Input,
            args: ['mrdDateTimePickerToggle']
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZm9ybS1maWVsZC9jb21wb25lbnRzL21yZC1pbnB1dC9tcmQtaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWlucHV0L21yZC1pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBUSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RPLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQXlCLFVBQVUsRUFBYyxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEosT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMvRSxPQUFPLEtBQUssQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUdoQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNWL0UsbUNBZUc7SUFkRCx1S0FBUyxlQUFBLDRCQUFvQixDQUFBLElBQUMsMEpBQ3JCLGVBQUEscUJBQWEsQ0FBQSxJQURRLHdK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QUMseUJBQXlCO1lBZ0J6QixPQUFPO2tCQURiLFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0LCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCwgVmlld0NoaWxkLCBib29sZWFuQXR0cmlidXRlLCBudW1iZXJBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wsIEJhc2VPYmplY3QsIElWYWxpZGF0b3IsIE9ic2VydmFibGVWYWx1ZSwgU3Vic2NyaXB0aW9uSGFuZGxlciwgVHlwZUNvbnZlcnRlciwgVXRpbCwgVmFsaWRhdG9yRmxvYXQgfSBmcm9tICdtcmQtY29yZSc7XHJcbmltcG9ydCB7IENvbmZpZ1V0aWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb25maWcudXRpbCc7XHJcbmltcG9ydCB7IGNvbG9yQXR0cmlidXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvY29sb3ItdHJhbnNmb3JtJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuaW1wb3J0IHsgTXJkQmFzZUNvbG9yVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vbW9kZWwvY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgQ29ubmVjdGVkUG9zaXRpb24gfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IE1yZERhdHVtVXRpbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlsL2RhdHVtLnV0aWwnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JEYXR1bSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi92YWxpZGF0aW9uL3ZhbGlkYXRvci1kYXR1bSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtcmQtaW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmRJbnB1dENvbXBvbmVudCBleHRlbmRzIEJhc2VPYmplY3QgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01BWF9MRU5HVEg6IG51bWJlciA9IDUxMjtcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01JTl9ST1dTOiBudW1iZXIgPSAxO1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTUFYX1JPV1M6IG51bWJlciA9IDI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9MSU5FX0hFSUdIVDogbnVtYmVyID0gMjQ7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERBVEVfUkVHRVhfSU5QVVQ6IFJlZ0V4cCA9IC8oXFxkezR9KS0oXFxkezJ9KS0oXFxkezJ9KS87XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2Jhc2VJbnB1dCcpIHB1YmxpYyBiYXNlSW5wdXRFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoJ3RleHRBcmVhJykgcHVibGljIHRleHRBcmVhRWxlbWVudDogRWxlbWVudFJlZjxIVE1MVGV4dEFyZWFFbGVtZW50PjtcclxuICBAVmlld0NoaWxkKCdkYXRlSW5wdXQnKSBwdWJsaWMgZGF0ZUlucHV0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuICBAVmlld0NoaWxkKCd0aW1lSW5wdXQnKSBwdWJsaWMgdGltZUlucHV0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuXHJcbiAgQElucHV0KCdtcmRGb3JtQ29udHJvbCcpIGZvcm1Db250cm9sOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2w7XHJcbiAgQElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnICc7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgbWF4TGVuZ3RoOiBudW1iZXI7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBtaW5Sb3dzOiBudW1iZXIgPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX01JTl9ST1dTO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgbWF4Um93czogbnVtYmVyID0gTXJkSW5wdXRDb21wb25lbnQuREVGQVVMVF9NQVhfUk9XUztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgcHVibGljIGxpbmVIZWlnaHQ6IG51bWJlciA9IE1yZElucHV0Q29tcG9uZW50LkRFRkFVTFRfTElORV9IRUlHSFQ7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHRleHRhcmVhOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHJhbmdlU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyByYW5nZUVuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHRpbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBudW1iZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tRGF0ZVRpbWVUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgdmFsaWRhdGVPbkJsdXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBmb3JtQ29udHJvbENoYW5nZU9uQmx1cjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbiAgcHVibGljIGdldCBjb2xvcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xyXG4gIH1cclxuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe2FsaWFzOiAndGV4dC1jZW50ZXJlZCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgY2VudGVyZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2NlbnRlcmVkID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbiAgcHVibGljIGdldCBjZW50ZXJlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9jZW50ZXJlZDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfY2VudGVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHthbGlhczogJ3RleHQtZW5kJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNldCB0ZXh0RW5kKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl90ZXh0RW5kID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbiAgcHVibGljIGdldCB0ZXh0RW5kKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHRFbmQ7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3RleHRFbmQ6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgZGF0ZVBpY2tlclRvZ2dsZTogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBtYXhEaWdpdHM6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgYXV0b2ZvY3VzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSB0b3VjaGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIGZvY3VzZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgYmx1cnJlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIGlucHV0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBwdWJsaWMgZGlzYWJsZWRDb2xvcjogc3RyaW5nID0gXy5pc09iamVjdChDb25maWdVdGlsLmdldENvbmZpZygpLmJhc2VDb2xvcnMuZGlzYWJsZWQpID8gKENvbmZpZ1V0aWwuZ2V0Q29uZmlnKCkuYmFzZUNvbG9ycy5kaXNhYmxlZCBhcyBNcmRCYXNlQ29sb3JUaGVtZSkudGV4dCA6IChDb25maWdVdGlsLmdldENvbmZpZygpLmJhc2VDb2xvcnMuZGlzYWJsZWQgYXMgc3RyaW5nKSB8fCAnI2FmYTZhNic7XHJcbiAgcHVibGljIHNldCBsYWJlbFByZXNlbnQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0aGlzLl9sYWJlbFByZXNlbnQgPT09IHZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2xhYmVsUHJlc2VudCA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IGxhYmVsUHJlc2VudCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9sYWJlbFByZXNlbnQ7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2xhYmVsUHJlc2VudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpc0ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBcclxuICBwdWJsaWMgc2hvd0RhdGVwaWNrZXI6IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPiA9IG5ldyBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIHB1YmxpYyBzaG93VGltZXBpY2tlcjogT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+ID0gbmV3IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIHByaXZhdGUgZm9ybUNvbnRyb2xDaGFuZ2VWYWx1ZTogYW55O1xyXG4gIHByaXZhdGUgc2VsZWN0VGltZW91dDogYW55O1xyXG5cclxuICBfcG9zaXRpb25zOiBDb25uZWN0ZWRQb3NpdGlvbltdID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcclxuICAgICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcclxuICAgICAgICBvdmVybGF5WTogJ3RvcCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBvcmlnaW5YOiAnZW5kJyxcclxuICAgICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgICBvdmVybGF5WDogJ2VuZCcsXHJcbiAgICAgICAgb3ZlcmxheVk6ICd0b3AnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcclxuICAgICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcclxuICAgICAgICBvdmVybGF5WTogJ2JvdHRvbSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG9yaWdpblg6ICdlbmQnLFxyXG4gICAgICAgIG9yaWdpblk6ICd0b3AnLFxyXG4gICAgICAgIG92ZXJsYXlYOiAnZW5kJyxcclxuICAgICAgICBvdmVybGF5WTogJ2JvdHRvbSdcclxuICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy5zZWxlY3RUaW1lb3V0KTtcclxuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgJiYgdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VpbiBkZWFrdGl2aWVydGVzIElucHV0IGthbm4gbmljaHQgbWl0IGVpbmVtIEZvcm1Db250cm9sIHZlcndlbmRldCB3ZXJkZW4uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubWF4TGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgTnVtYmVyLmlzTmFOKHRoaXMubWF4TGVuZ3RoKSkge1xyXG4gICAgICB0aGlzLm1heExlbmd0aCA9IE1yZElucHV0Q29tcG9uZW50LkRFRkFVTFRfTUFYX0xFTkdUSDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1pblJvd3MgIT09IHVuZGVmaW5lZCAmJiBOdW1iZXIuaXNOYU4odGhpcy5taW5Sb3dzKSkge1xyXG4gICAgICB0aGlzLm1pblJvd3MgPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX01JTl9ST1dTO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubWF4Um93cyAhPT0gdW5kZWZpbmVkICYmIE51bWJlci5pc05hTih0aGlzLm1heFJvd3MpKSB7XHJcbiAgICAgIHRoaXMubWF4Um93cyA9IE1yZElucHV0Q29tcG9uZW50LkRFRkFVTFRfTUFYX1JPV1M7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5saW5lSGVpZ2h0ICE9PSB1bmRlZmluZWQgJiYgTnVtYmVyLmlzTmFOKHRoaXMubGluZUhlaWdodCkpIHtcclxuICAgICAgdGhpcy5saW5lSGVpZ2h0ID0gTXJkSW5wdXRDb21wb25lbnQuREVGQVVMVF9MSU5FX0hFSUdIVDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRleHRhcmVhICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMudGV4dEFyZWFFbGVtZW50KSkge1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5tYXhMZW5ndGgpKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5tYXhMZW5ndGggPSB0aGlzLm1heExlbmd0aDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNhbGN1bGF0ZVRleHRBcmVhSGVpZ2h0KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbG9yID0gdGhpcy5jb2xvciB8fCBDb25maWdVdGlsLmdldENvbmZpZygpLmZvcm1GaWVsZD8uaW5wdXQ/LmNvbG9yIHx8ICcjMDAwMDAwJztcclxuXHJcbiAgICBpZiAodGhpcy5hdXRvZm9jdXMpIHtcclxuICAgICAgaWYgKHRoaXMuYmFzZUlucHV0RWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuYmFzZUlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMudGV4dEFyZWFFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmRhdGVJbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmRhdGVJbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnRpbWVJbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnRpbWVJbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0ZSAmJiB0aGlzLnJhbmdlU3RhcnQpIHtcclxuICAgICAgdGhpcy50ZXh0RW5kID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRlICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIGxldCBkYXR1bVZhbGlkYXRvcjogSVZhbGlkYXRvciA9IHRoaXMuZm9ybUNvbnRyb2wudmFsaWRhdG9ycy5maW5kKCh2YWxpZGF0b3I6IElWYWxpZGF0b3IpID0+IHZhbGlkYXRvciBpbnN0YW5jZW9mIFZhbGlkYXRvckRhdHVtKTtcclxuICAgICAgaWYgKCFVdGlsLmlzRGVmaW5lZChkYXR1bVZhbGlkYXRvcikpIHtcclxuICAgICAgICB0aGlzLmZvcm1Db250cm9sLnZhbGlkYXRlV2l0aChbLi4udGhpcy5mb3JtQ29udHJvbC52YWxpZGF0b3JzLCBuZXcgVmFsaWRhdG9yRGF0dW0oKV0sIHtlbWl0RXZlbnQ6IGZhbHNlfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5udW1iZXIgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sLmNvbnZlcnRUbykpIHtcclxuICAgICAgICB0aGlzLmZvcm1Db250cm9sLmNvbnZlcnRUbyA9IFR5cGVDb252ZXJ0ZXIudG9OdW1iZXI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sLnNob3dBcykpIHtcclxuICAgICAgICB0aGlzLmZvcm1Db250cm9sLnNob3dBcyA9IFR5cGVDb252ZXJ0ZXIuYXNHZXJtYW5GbG9hdDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoXy5pc051bWJlcih0aGlzLmZvcm1Db250cm9sLmNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmZvcm1Db250cm9sLmNvbnRyb2wudmFsdWUsIHRydWUsIHtlbWl0RXZlbnQ6IGZhbHNlfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlKSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIHRoaXMud2F0Y2godGhpcy5mb3JtQ29udHJvbC52YWx1ZUNoYW5nZXMsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VkKCkpKTtcclxuICAgICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLm1heERpZ2l0cykpIHtcclxuICAgICAgICBsZXQgZmxvYXRWYWxpZGF0b3I6IFZhbGlkYXRvckZsb2F0ID0gdGhpcy5mb3JtQ29udHJvbC52YWxpZGF0b3JzLmZpbmQoKHZhbGlkYXRvcjogSVZhbGlkYXRvcikgPT4gdmFsaWRhdG9yIGluc3RhbmNlb2YgVmFsaWRhdG9yRmxvYXQpIGFzIFZhbGlkYXRvckZsb2F0O1xyXG4gICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChmbG9hdFZhbGlkYXRvcikgJiYgVXRpbC5pc0RlZmluZWQoZmxvYXRWYWxpZGF0b3IuZGlnaXRzQWZ0ZXIpKSB7XHJcbiAgICAgICAgICB0aGlzLm1heERpZ2l0cyA9IGZsb2F0VmFsaWRhdG9yLmRpZ2l0c0FmdGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMud2F0Y2godGhpcy5zaG93RGF0ZXBpY2tlci5jaGFuZ2VkLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoc2hvdzogYm9vbGVhbikgPT4ge1xyXG4gICAgICBpZiAoIXNob3cpIHtcclxuICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmx1cnJlZC5lbWl0KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSkpO1xyXG4gICAgdGhpcy53YXRjaCh0aGlzLnNob3dUaW1lcGlja2VyLmNoYW5nZWQsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKChzaG93OiBib29sZWFuKSA9PiB7XHJcbiAgICAgIGlmICghc2hvdykge1xyXG4gICAgICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ibHVycmVkLmVtaXQoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1Db250cm9sQ2hhbmdlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRleHRhcmVhKSB7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLnRleHRBcmVhRWxlbWVudCkpIHtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVRleHRBcmVhSGVpZ2h0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sLmNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmZvcm1Db250cm9sLmNvbnRyb2wudmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgIH1cclxuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbnB1dChldmVudDogSW5wdXRFdmVudCk6IHZvaWQge1xyXG4gICAgbGV0IHRhcmdldFZhbHVlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIGlmICh0aGlzLnRleHRhcmVhKSB7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLnRleHRBcmVhRWxlbWVudCkpIHtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVRleHRBcmVhSGVpZ2h0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgbGV0IGRhdGVJbnB1dE1hdGNoID0gTXJkSW5wdXRDb21wb25lbnQuREFURV9SRUdFWF9JTlBVVC50ZXN0KHRhcmdldFZhbHVlKTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5mb3JtQ29udHJvbENoYW5nZU9uQmx1cikge1xyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUodGFyZ2V0VmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VWYWx1ZSA9IHRhcmdldFZhbHVlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAodGhpcy5kYXRlICYmIGRhdGVJbnB1dE1hdGNoKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlSW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRhcmdldFZhbHVlO1xyXG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnB1dENoYW5nZS5lbWl0KHRhcmdldFZhbHVlKTtcclxuICAgIFxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRhdGVDaGFuZ2VkKGV2ZW50OiBNb21lbnQpOiB2b2lkIHtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICBpZiAoIXRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VPbkJsdXIpIHtcclxuICAgICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKGV2ZW50KTtcclxuICAgICAgICB0aGlzLmJhc2VJbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRDaGFuZ2UuZW1pdChldmVudC5mb3JtYXQoJ0RELk1NLllZWVknKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbENoYW5nZVZhbHVlID0gZXZlbnQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBldmVudC5mb3JtYXQoJ0RELk1NLllZWVknKTtcclxuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQoZXZlbnQuZm9ybWF0KCdERC5NTS5ZWVlZJykpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hvd0RhdGVwaWNrZXIudmFsdWUgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLmZvcm1Db250cm9sQ2hhbmdlT25CbHVyKSB7XHJcbiAgICAgIHRoaXMuYmx1cihudWxsKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0aW1lQ2hhbmdlZChldmVudDogTW9tZW50KTogdm9pZCB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgaWYgKCF0aGlzLmZvcm1Db250cm9sQ2hhbmdlT25CbHVyKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShldmVudCk7XHJcbiAgICAgICAgdGhpcy5iYXNlSW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQoZXZlbnQuZm9ybWF0KCdISDptbScpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmZvcm1Db250cm9sQ2hhbmdlVmFsdWUgPSBldmVudDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IGV2ZW50LmZvcm1hdCgnSEg6bW0nKTtcclxuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQoZXZlbnQuZm9ybWF0KCdISDptbScpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNob3dUaW1lcGlja2VyLnZhbHVlID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5mb3JtQ29udHJvbENoYW5nZU9uQmx1cikge1xyXG4gICAgICB0aGlzLmJsdXIobnVsbCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hY2hrb21tYXN0ZWxsZW4oKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBVdGlsLmlzRGVmaW5lZCh0aGlzLm1heERpZ2l0cykgPyB0aGlzLm1heERpZ2l0cyA6IDk5O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVUZXh0QXJlYUhlaWdodCgpOiB2b2lkIHtcclxuICAgIHRoaXMudGV4dEFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG4gICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPVxyXG4gICAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCA+ICh0aGlzLm1heFJvd3MgKiB0aGlzLmxpbmVIZWlnaHQpID9cclxuICAgICAgICAodGhpcy5tYXhSb3dzICogdGhpcy5saW5lSGVpZ2h0KSArICdweCcgOlxyXG4gICAgICAgIHRoaXMudGV4dEFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0IDwgKHRoaXMubWluUm93cyAqIHRoaXMubGluZUhlaWdodCkgP1xyXG4gICAgICAgICh0aGlzLm1pblJvd3MgKiB0aGlzLmxpbmVIZWlnaHQpICsgJ3B4JyA6XHJcbiAgICAgICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlucHV0Q2xpY2tlZChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy50b3VjaGVkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmb2N1cyhldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5mb2N1c2VkLmVtaXQoKTtcclxuICAgIGlmICh0aGlzLmRhdGUgJiYgVXRpbC5pc0RlZmluZWQoZXZlbnQpICYmICF0aGlzLnJlYWRvbmx5ICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuYmFzZUlucHV0RWxlbWVudCkpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2VsZWN0VGltZW91dCk7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5iYXNlSW5wdXRFbGVtZW50Py5uYXRpdmVFbGVtZW50Py5zZWxlY3QoKSwgMCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYmx1cihldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VPbkJsdXIgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbENoYW5nZVZhbHVlKSkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VWYWx1ZSk7XHJcbiAgICAgIGxldCBlbWl0VmFsdWU6IGFueSA9IHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VWYWx1ZTtcclxuICAgICAgaWYgKHRoaXMuZGF0ZSAmJiBtb21lbnQuaXNNb21lbnQoZW1pdFZhbHVlKSkge1xyXG4gICAgICAgIGVtaXRWYWx1ZSA9IGVtaXRWYWx1ZS5mb3JtYXQoJ0RELk1NLllZWVknKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy50aW1lICYmIG1vbWVudC5pc01vbWVudChlbWl0VmFsdWUpKSB7XHJcbiAgICAgICAgZW1pdFZhbHVlID0gZW1pdFZhbHVlLmZvcm1hdCgnSEg6bW0nKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQoZW1pdFZhbHVlKTtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbENoYW5nZVZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZm9ybUNvbnRyb2wgJiYgdGhpcy5kYXRlKSB7XHJcbiAgICAgIGxldCBtb21lbnREYXRlID0gTXJkRGF0dW1VdGlsLnBhcnNlKHRoaXMuZm9ybUNvbnRyb2wuY29udHJvbC52YWx1ZSk7XHJcbiAgICAgIGlmIChtb21lbnREYXRlICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShtb21lbnREYXRlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZm9ybUNvbnRyb2wgJiYgdGhpcy50aW1lICYmIHRoaXMuZm9ybUNvbnRyb2wudmFsdWUgJiYgdGhpcy5mb3JtQ29udHJvbC52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgaWYgKCFtb21lbnQuaXNNb21lbnQodGhpcy5mb3JtQ29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgICBsZXQgbW9tZW50VGltZSA9IG1vbWVudCh0aGlzLmZvcm1Db250cm9sLnZhbHVlLCAnSEg6bW0nKS55ZWFyKDIwMjApLm1vbnRoKDApLmRheSgxKS51dGModHJ1ZSk7XHJcbiAgICAgICAgaWYgKG1vbWVudFRpbWUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKG1vbWVudFRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuYmx1cnJlZC5lbWl0KCk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMuZGF0ZUlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNob3dQaWNrZXIoKTtcclxuICAgIGlmICh0aGlzLmRhdGUpIHtcclxuICAgICAgdGhpcy5zaG93RGF0ZXBpY2tlci52YWx1ZSA9ICF0aGlzLnNob3dEYXRlcGlja2VyLnZhbHVlO1xyXG4gICAgICBpZiAodGhpcy5zaG93RGF0ZXBpY2tlci52YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZm9jdXMobnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRpbWUpIHtcclxuICAgICAgdGhpcy5zaG93VGltZXBpY2tlci52YWx1ZSA9ICF0aGlzLnNob3dUaW1lcGlja2VyLnZhbHVlO1xyXG4gICAgICBpZiAodGhpcy5zaG93VGltZXBpY2tlci52YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZm9jdXMobnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttcmREYXRlVGltZVBpY2tlclRvZ2dsZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmREYXRlUGlja2VyVG9nZ2xlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgnbXJkRGF0ZVRpbWVQaWNrZXJUb2dnbGUnKSBwdWJsaWMgbXJkRGF0ZVRpbWVQaWNrZXJUb2dnbGU6IE1yZElucHV0Q29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZlxyXG4gICkge31cclxuXHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbG9zZXN0KCdtcmQtaWNvbicpKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSAnMjBweCc7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9ICcyMHB4JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICBwdWJsaWMgb25DbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMubXJkRGF0ZVRpbWVQaWNrZXJUb2dnbGUpKSB7XHJcbiAgICAgIHRoaXMubXJkRGF0ZVRpbWVQaWNrZXJUb2dnbGUudG9nZ2xlQ2xpY2tlZCgpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIjxpbnB1dCAjYmFzZUlucHV0XHJcbiAgKGNsaWNrKT1cImlucHV0Q2xpY2tlZCgkZXZlbnQpXCJcclxuICAoZm9jdXMpPVwiZm9jdXMoJGV2ZW50KVwiXHJcbiAgKGJsdXIpPVwiYmx1cigkZXZlbnQpXCJcclxuICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gIChpbnB1dCk9XCJpbnB1dCgkZXZlbnQpXCJcclxuICBbZGlzYWJsZWRdPVwiZm9ybUNvbnRyb2w/LmRpc2FibGVkIHx8IGRpc2FibGVkXCJcclxuICBbcGxhY2Vob2xkZXJdPVwiIWxhYmVsUHJlc2VudCB8fCBpc0ZvY3VzZWQgPyBwbGFjZWhvbGRlciA6ICcnXCJcclxuICBbc3R5bGUucG9pbnRlci1ldmVudHNdPVwicmVhZG9ubHkgPyAnbm9uZScgOiAnYXV0bydcIlxyXG4gIFtzdHlsZS50ZXh0LWFsaWduXT1cInRleHRFbmQgPyAnZW5kJyA6IGNlbnRlcmVkID8gJ2NlbnRlcicgOiAnc3RhcnQnXCJcclxuICBbc3R5bGUuY29sb3JdPVwiZm9ybUNvbnRyb2w/LmRpc2FibGVkIHx8IGRpc2FibGVkID8gZGlzYWJsZWRDb2xvciA6IGNvbG9yXCJcclxuICBbZGVjaW1hbE51bWJlcl09XCJudW1iZXIgfHwgbWF4RGlnaXRzIHx8IG1heERpZ2l0cyA9PT0gMFwiIFtuYWNoa29tbWFzdGVsbGVuXT1cIm5hY2hrb21tYXN0ZWxsZW5cIlxyXG4gIFthdHRyLmlucHV0bW9kZV09XCJudW1iZXIgPyAnZGVjaW1hbCcgOiBudWxsXCJcclxuICBbdGltZUlucHV0XT1cInRpbWVcIlxyXG4gICpuZ0lmPVwiIXRleHRhcmVhXCJcclxuICA+XHJcblxyXG48dGV4dGFyZWEgI3RleHRBcmVhXHJcbiAgKGNsaWNrKT1cImlucHV0Q2xpY2tlZCgkZXZlbnQpXCJcclxuICAoZm9jdXMpPVwiZm9jdXMoJGV2ZW50KVwiXHJcbiAgKGJsdXIpPVwiYmx1cigkZXZlbnQpXCJcclxuICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gIChpbnB1dCk9XCJpbnB1dCgkZXZlbnQpXCJcclxuICBbZGlzYWJsZWRdPVwiZm9ybUNvbnRyb2w/LmRpc2FibGVkIHx8IGRpc2FibGVkXCJcclxuICBbcGxhY2Vob2xkZXJdPVwiIWxhYmVsUHJlc2VudCB8fCBpc0ZvY3VzZWQgPyBwbGFjZWhvbGRlciA6ICcnXCJcclxuICBbc3R5bGUucG9pbnRlci1ldmVudHNdPVwicmVhZG9ubHkgPyAnbm9uZScgOiAnYXV0bydcIlxyXG4gIFtzdHlsZS5jb2xvcl09XCJmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWQgPyBkaXNhYmxlZENvbG9yIDogY29sb3JcIlxyXG4gICpuZ0lmPVwidGV4dGFyZWFcIlxyXG4gIHJvd3M9XCIxXCJcclxuICBbbmdTdHlsZV09XCJ7J2xpbmUtaGVpZ2h0JzogbGluZUhlaWdodCArICdweCd9XCJcclxuPjwvdGV4dGFyZWE+XHJcblxyXG5cclxuPGRpdiAjZGF0ZUlucHV0ICpuZ0lmPVwiZGF0ZVwiPjwvZGl2PlxyXG48ZGl2ICpuZ0lmPVwiZGF0ZSAmJiAhY3VzdG9tRGF0ZVRpbWVUb2dnbGUgJiYgIXJhbmdlU3RhcnQgJiYgIXJhbmdlRW5kXCIgPlxyXG4gIDxtcmQtYnV0dG9uIGljb24tYnV0dG9uIGZ1bGxJY29uIGRpYW1ldGVyPVwiMjRcIiBpY29uU2l6ZT1cIjE2XCIgKGNsaWNrKT1cInRvZ2dsZUNsaWNrZWQoKVwiIFtkaXNhYmxlZF09XCJmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWRcIj5cclxuICAgIDxzdmcgbXJkLWljb24geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB2aWV3Qm94PVwiMCAwIDE0Ljk4NiAxNy4xMjdcIiBmaXQ9XCJcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiIGZvY3VzYWJsZT1cImZhbHNlXCI+XHJcbiAgICAgIDxkZWZzPjxzdHlsZT4uYXtmaWxsOiM0OTQ5NDk7fTwvc3R5bGU+PC9kZWZzPlxyXG4gICAgICA8cGF0aCBjbGFzcz1cImFcIiBkPVwiTTE0LjU4NSw1LjM1MkguNGEuNC40LDAsMCwxLS40LS40di0xLjJBMS42MDYsMS42MDYsMCwwLDEsMS42MDYsMi4xNDFIMy4yMTFWLjRhLjQuNCwwLDAsMSwuNC0uNEg0Ljk1MWEuNC40LDAsMCwxLC40LjRWMi4xNDFIOS42MzRWLjRhLjQuNCwwLDAsMSwuNC0uNGgxLjMzOGEuNC40LDAsMCwxLC40LjRWMi4xNDFoMS42MDZhMS42MDYsMS42MDYsMCwwLDEsMS42MDYsMS42MDZ2MS4yQS40LjQsMCwwLDEsMTQuNTg1LDUuMzUyWk0uNCw2LjQyM0gxNC41ODVhLjQuNCwwLDAsMSwuNC40djguN2ExLjYwNiwxLjYwNiwwLDAsMS0xLjYwNiwxLjYwNkgxLjYwNkExLjYwNiwxLjYwNiwwLDAsMSwwLDE1LjUyMnYtOC43QS40LjQsMCwwLDEsLjQsNi40MjNabTEwLjU3MSw0LjY4M2EuNC40LDAsMCwwLS40LS40SDguNTY0VjguN2EuNC40LDAsMCwwLS40LS40SDYuODI0YS40LjQsMCwwLDAtLjQuNFYxMC43SDQuNDE2YS40LjQsMCwwLDAtLjQuNHYxLjMzOGEuNC40LDAsMCwwLC40LjRINi40MjN2Mi4wMDdhLjQuNCwwLDAsMCwuNC40SDguMTYyYS40LjQsMCwwLDAsLjQtLjRWMTIuODQ1aDIuMDA3YS40LjQsMCwwLDAsLjQtLjRaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMClcIj48L3BhdGg+XHJcbiAgICA8L3N2Zz5cclxuICA8L21yZC1idXR0b24+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiAjdGltZUlucHV0ICpuZ0lmPVwidGltZVwiPjwvZGl2PlxyXG48ZGl2ICpuZ0lmPVwidGltZSAmJiAhY3VzdG9tRGF0ZVRpbWVUb2dnbGVcIj4gIFxyXG4gIDxtcmQtYnV0dG9uIGljb24tYnV0dG9uIGZ1bGxJY29uIGRpYW1ldGVyPVwiMjRcIiBpY29uU2l6ZT1cIjE4XCIgKGNsaWNrKT1cInRvZ2dsZUNsaWNrZWQoKVwiIFtkaXNhYmxlZF09XCJmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWRcIj5cclxuICAgIDxzdmcgbXJkLWljb24gdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICA8cGF0aCBkPVwiTTEyIDIxQzE2Ljk3MDYgMjEgMjEgMTYuOTcwNiAyMSAxMkMyMSA3LjAyOTQ0IDE2Ljk3MDYgMyAxMiAzQzcuMDI5NDQgMyAzIDcuMDI5NDQgMyAxMkMzIDE2Ljk3MDYgNy4wMjk0NCAyMSAxMiAyMVpcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICA8cGF0aCBkPVwiTTEyIDZWMTJcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICA8cGF0aCBkPVwiTTE2LjI0IDE2LjI0TDEyIDEyXCIgc3Ryb2tlPVwiIzAwMDAwMFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIDwvbXJkLWJ1dHRvbj5cclxuPC9kaXY+XHJcblxyXG48c3BhbiBjbGFzcz1cInVuZm9jdXNlZE92ZXJsYXlcIiAqbmdJZj1cIiFpc0ZvY3VzZWRcIj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbdW5mb2N1c2VkT3ZlcmxheV1cIj48L25nLWNvbnRlbnQ+XHJcbjwvc3Bhbj5cclxuXHJcbjxuZy10ZW1wbGF0ZVxyXG4gIGNkay1jb25uZWN0ZWQtb3ZlcmxheVxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5SGFzQmFja2Ryb3BdPVwidHJ1ZVwiXHJcbiAgY2RrQ29ubmVjdGVkT3ZlcmxheUJhY2tkcm9wQ2xhc3M9XCJjZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcFwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwiZGF0ZUlucHV0RWxlbWVudFwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cInNob3dEYXRlcGlja2VyLnZhbHVlXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJfcG9zaXRpb25zXCJcclxuICAoYmFja2Ryb3BDbGljayk9XCJzaG93RGF0ZXBpY2tlci52YWx1ZSA9IGZhbHNlO1wiXHJcbj5cclxuICA8bXJkLWRhdGVwaWNrZXJcclxuICAgIFtkYXRlXT1cInZhbHVlXCJcclxuICAgIChkYXRlQ2hhbmdlZCk9XCJkYXRlQ2hhbmdlZCgkZXZlbnQpXCJcclxuICA+PC9tcmQtZGF0ZXBpY2tlcj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZVxyXG4gIGNkay1jb25uZWN0ZWQtb3ZlcmxheVxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5SGFzQmFja2Ryb3BdPVwidHJ1ZVwiXHJcbiAgY2RrQ29ubmVjdGVkT3ZlcmxheUJhY2tkcm9wQ2xhc3M9XCJjZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcFwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwidGltZUlucHV0RWxlbWVudFwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cInNob3dUaW1lcGlja2VyLnZhbHVlXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJfcG9zaXRpb25zXCJcclxuICAoYmFja2Ryb3BDbGljayk9XCJzaG93VGltZXBpY2tlci52YWx1ZSA9IGZhbHNlO1wiXHJcbj5cclxuICA8bXJkLXRpbWVwaWNrZXJcclxuICAgIFt0aW1lXT1cInZhbHVlXCJcclxuICAgICh0aW1lQ2hhbmdlZCk9XCJ0aW1lQ2hhbmdlZCgkZXZlbnQpXCJcclxuICA+PC9tcmQtdGltZXBpY2tlcj5cclxuPC9uZy10ZW1wbGF0ZT4iXX0=