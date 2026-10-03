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
            const rohwert = this.formControl.control.value;
            const momentDate = MrdDatumUtil.parse(rohwert);
            // Nur schreiben, wenn sich der angezeigte Wert aendert (z. B. "1.2.26" -> "01.02.2026"): setValue loest valueChanges aus,
            // und mrd-form-field markiert das Feld dann als geaendert, obwohl nur der Fokus gewechselt hat
            const anzeige = momentDate !== null && this.formControl.showAs ? this.formControl.showAs(momentDate) : momentDate;
            if (momentDate !== null && anzeige !== rohwert) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZm9ybS1maWVsZC9jb21wb25lbnRzL21yZC1pbnB1dC9tcmQtaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWlucHV0L21yZC1pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBUSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RPLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQXlCLFVBQVUsRUFBYyxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEosT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMvRSxPQUFPLEtBQUssQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUdoQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNWL0UsbUNBZUc7SUFkRCx1S0FBUyxlQUFBLDRCQUFvQixDQUFBLElBQUMsMEpBQ3JCLGVBQUEscUJBQWEsQ0FBQSxJQURRLHdK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UyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUM5QztJQUNILENBQUM7Z0dBdEJVLG1CQUFtQjs0RkFBbkIsbUJBQW1COzBHQUFuQixtQkFBZTs7O3VGQUFmLG1CQUFtQjtjQUgvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjthQUN0Qzs2REFHMEMsdUJBQXVCO2tCQUEvRCxLQUFLO21CQUFDLHlCQUF5QjtZQWdCekIsT0FBTztrQkFEYixZQUFZO21CQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdCwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQsIFZpZXdDaGlsZCwgYm9vbGVhbkF0dHJpYnV0ZSwgbnVtYmVyQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgQWNjZXNzYWJsZUZvcm1Db250cm9sLCBCYXNlT2JqZWN0LCBJVmFsaWRhdG9yLCBPYnNlcnZhYmxlVmFsdWUsIFN1YnNjcmlwdGlvbkhhbmRsZXIsIFR5cGVDb252ZXJ0ZXIsIFV0aWwsIFZhbGlkYXRvckZsb2F0IH0gZnJvbSAnbXJkLWNvcmUnO1xyXG5pbXBvcnQgeyBDb25maWdVdGlsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29uZmlnLnV0aWwnO1xyXG5pbXBvcnQgeyBjb2xvckF0dHJpYnV0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi90cmFuc2Zvcm1zL2NvbG9yLXRyYW5zZm9ybSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcbmltcG9ydCB7IE1yZEJhc2VDb2xvclRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21vZGVsL2NvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IENvbm5lY3RlZFBvc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBNcmREYXR1bVV0aWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbC9kYXR1bS51dGlsJztcclxuaW1wb3J0IHsgVmFsaWRhdG9yRGF0dW0gfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdmFsaWRhdGlvbi92YWxpZGF0b3ItZGF0dW0nO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWlucHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBCYXNlT2JqZWN0IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9NQVhfTEVOR1RIOiBudW1iZXIgPSA1MTI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9NSU5fUk9XUzogbnVtYmVyID0gMTtcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01BWF9ST1dTOiBudW1iZXIgPSAyO1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTElORV9IRUlHSFQ6IG51bWJlciA9IDI0O1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBEQVRFX1JFR0VYX0lOUFVUOiBSZWdFeHAgPSAvKFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSkvO1xyXG5cclxuICBAVmlld0NoaWxkKCdiYXNlSW5wdXQnKSBwdWJsaWMgYmFzZUlucHV0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuICBAVmlld0NoaWxkKCd0ZXh0QXJlYScpIHB1YmxpYyB0ZXh0QXJlYUVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTFRleHRBcmVhRWxlbWVudD47XHJcbiAgQFZpZXdDaGlsZCgnZGF0ZUlucHV0JykgcHVibGljIGRhdGVJbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcbiAgQFZpZXdDaGlsZCgndGltZUlucHV0JykgcHVibGljIHRpbWVJbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcblxyXG4gIEBJbnB1dCgnbXJkRm9ybUNvbnRyb2wnKSBmb3JtQ29udHJvbDogQWNjZXNzYWJsZUZvcm1Db250cm9sO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyAnO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgdmFsdWU6IHN0cmluZyA9ICcnO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgcHVibGljIG1heExlbmd0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgbWluUm93czogbnVtYmVyID0gTXJkSW5wdXRDb21wb25lbnQuREVGQVVMVF9NSU5fUk9XUztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgcHVibGljIG1heFJvd3M6IG51bWJlciA9IE1yZElucHV0Q29tcG9uZW50LkRFRkFVTFRfTUFYX1JPV1M7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBsaW5lSGVpZ2h0OiBudW1iZXIgPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX0xJTkVfSEVJR0hUO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHJlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyB0ZXh0YXJlYTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGRhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyByYW5nZVN0YXJ0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcmFuZ2VFbmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyB0aW1lOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgbnVtYmVyOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbURhdGVUaW1lVG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHZhbGlkYXRlT25CbHVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZm9ybUNvbnRyb2xDaGFuZ2VPbkJsdXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIHNldCBjb2xvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgY29sb3IoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcclxuICB9XHJcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcclxuXHJcbiAgQElucHV0KHthbGlhczogJ3RleHQtY2VudGVyZWQnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IGNlbnRlcmVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9jZW50ZXJlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgY2VudGVyZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2VudGVyZWQ7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2NlbnRlcmVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7YWxpYXM6ICd0ZXh0LWVuZCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgdGV4dEVuZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fdGV4dEVuZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgdGV4dEVuZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl90ZXh0RW5kO1xyXG4gIH1cclxuICBwcml2YXRlIF90ZXh0RW5kOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgQElucHV0KCkgcHVibGljIGRhdGVQaWNrZXJUb2dnbGU6IEhUTUxFbGVtZW50O1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgbWF4RGlnaXRzOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGF1dG9mb2N1czogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgdG91Y2hlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBmb2N1c2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIGJsdXJyZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSBpbnB1dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgcHVibGljIGRpc2FibGVkQ29sb3I6IHN0cmluZyA9IF8uaXNPYmplY3QoQ29uZmlnVXRpbC5nZXRDb25maWcoKS5iYXNlQ29sb3JzLmRpc2FibGVkKSA/IChDb25maWdVdGlsLmdldENvbmZpZygpLmJhc2VDb2xvcnMuZGlzYWJsZWQgYXMgTXJkQmFzZUNvbG9yVGhlbWUpLnRleHQgOiAoQ29uZmlnVXRpbC5nZXRDb25maWcoKS5iYXNlQ29sb3JzLmRpc2FibGVkIGFzIHN0cmluZykgfHwgJyNhZmE2YTYnO1xyXG4gIHB1YmxpYyBzZXQgbGFiZWxQcmVzZW50KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5fbGFiZWxQcmVzZW50ID09PSB2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9sYWJlbFByZXNlbnQgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbiAgcHVibGljIGdldCBsYWJlbFByZXNlbnQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGFiZWxQcmVzZW50O1xyXG4gIH1cclxuICBwcml2YXRlIF9sYWJlbFByZXNlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgaXNGb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgXHJcbiAgcHVibGljIHNob3dEYXRlcGlja2VyOiBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj4gPSBuZXcgT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBwdWJsaWMgc2hvd1RpbWVwaWNrZXI6IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPiA9IG5ldyBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBwcml2YXRlIGZvcm1Db250cm9sQ2hhbmdlVmFsdWU6IGFueTtcclxuICBwcml2YXRlIHNlbGVjdFRpbWVvdXQ6IGFueTtcclxuXHJcbiAgX3Bvc2l0aW9uczogQ29ubmVjdGVkUG9zaXRpb25bXSA9IFtcclxuICAgICAge1xyXG4gICAgICAgIG9yaWdpblg6ICdzdGFydCcsXHJcbiAgICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXHJcbiAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgICAgb3ZlcmxheVk6ICd0b3AnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgb3JpZ2luWDogJ2VuZCcsXHJcbiAgICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXHJcbiAgICAgICAgb3ZlcmxheVg6ICdlbmQnLFxyXG4gICAgICAgIG92ZXJsYXlZOiAndG9wJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG9yaWdpblg6ICdzdGFydCcsXHJcbiAgICAgICAgb3JpZ2luWTogJ3RvcCcsXHJcbiAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgICAgb3ZlcmxheVk6ICdib3R0b20nXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBvcmlnaW5YOiAnZW5kJyxcclxuICAgICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgICBvdmVybGF5WDogJ2VuZCcsXHJcbiAgICAgICAgb3ZlcmxheVk6ICdib3R0b20nXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuc2VsZWN0VGltZW91dCk7XHJcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpICYmIHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFaW4gZGVha3RpdmllcnRlcyBJbnB1dCBrYW5uIG5pY2h0IG1pdCBlaW5lbSBGb3JtQ29udHJvbCB2ZXJ3ZW5kZXQgd2VyZGVuLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm1heExlbmd0aCAhPT0gdW5kZWZpbmVkICYmIE51bWJlci5pc05hTih0aGlzLm1heExlbmd0aCkpIHtcclxuICAgICAgdGhpcy5tYXhMZW5ndGggPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX01BWF9MRU5HVEg7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5taW5Sb3dzICE9PSB1bmRlZmluZWQgJiYgTnVtYmVyLmlzTmFOKHRoaXMubWluUm93cykpIHtcclxuICAgICAgdGhpcy5taW5Sb3dzID0gTXJkSW5wdXRDb21wb25lbnQuREVGQVVMVF9NSU5fUk9XUztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1heFJvd3MgIT09IHVuZGVmaW5lZCAmJiBOdW1iZXIuaXNOYU4odGhpcy5tYXhSb3dzKSkge1xyXG4gICAgICB0aGlzLm1heFJvd3MgPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX01BWF9ST1dTO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGluZUhlaWdodCAhPT0gdW5kZWZpbmVkICYmIE51bWJlci5pc05hTih0aGlzLmxpbmVIZWlnaHQpKSB7XHJcbiAgICAgIHRoaXMubGluZUhlaWdodCA9IE1yZElucHV0Q29tcG9uZW50LkRFRkFVTFRfTElORV9IRUlHSFQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50ZXh0YXJlYSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLnRleHRBcmVhRWxlbWVudCkpIHtcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMubWF4TGVuZ3RoKSkge1xyXG4gICAgICAgIHRoaXMudGV4dEFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQubWF4TGVuZ3RoID0gdGhpcy5tYXhMZW5ndGg7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jYWxjdWxhdGVUZXh0QXJlYUhlaWdodCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb2xvciA9IHRoaXMuY29sb3IgfHwgQ29uZmlnVXRpbC5nZXRDb25maWcoKS5mb3JtRmllbGQ/LmlucHV0Py5jb2xvciB8fCAnIzAwMDAwMCc7XHJcblxyXG4gICAgaWYgKHRoaXMuYXV0b2ZvY3VzKSB7XHJcbiAgICAgIGlmICh0aGlzLmJhc2VJbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmJhc2VJbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnRleHRBcmVhRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMudGV4dEFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5kYXRlSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5kYXRlSW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy50aW1lSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy50aW1lSW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRhdGUgJiYgdGhpcy5yYW5nZVN0YXJ0KSB7XHJcbiAgICAgIHRoaXMudGV4dEVuZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0ZSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICBsZXQgZGF0dW1WYWxpZGF0b3I6IElWYWxpZGF0b3IgPSB0aGlzLmZvcm1Db250cm9sLnZhbGlkYXRvcnMuZmluZCgodmFsaWRhdG9yOiBJVmFsaWRhdG9yKSA9PiB2YWxpZGF0b3IgaW5zdGFuY2VvZiBWYWxpZGF0b3JEYXR1bSk7XHJcbiAgICAgIGlmICghVXRpbC5pc0RlZmluZWQoZGF0dW1WYWxpZGF0b3IpKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbC52YWxpZGF0ZVdpdGgoWy4uLnRoaXMuZm9ybUNvbnRyb2wudmFsaWRhdG9ycywgbmV3IFZhbGlkYXRvckRhdHVtKCldLCB7ZW1pdEV2ZW50OiBmYWxzZX0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubnVtYmVyICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIGlmICghVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbC5jb252ZXJ0VG8pKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5jb252ZXJ0VG8gPSBUeXBlQ29udmVydGVyLnRvTnVtYmVyO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbC5zaG93QXMpKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5zaG93QXMgPSBUeXBlQ29udmVydGVyLmFzR2VybWFuRmxvYXQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKF8uaXNOdW1iZXIodGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlLCB0cnVlLCB7ZW1pdEV2ZW50OiBmYWxzZX0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wuY29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9ybUNvbnRyb2wuY29udHJvbC52YWx1ZTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICB0aGlzLndhdGNoKHRoaXMuZm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoKSA9PiB0aGlzLmZvcm1Db250cm9sQ2hhbmdlZCgpKSk7XHJcbiAgICAgIGlmICghVXRpbC5pc0RlZmluZWQodGhpcy5tYXhEaWdpdHMpKSB7XHJcbiAgICAgICAgbGV0IGZsb2F0VmFsaWRhdG9yOiBWYWxpZGF0b3JGbG9hdCA9IHRoaXMuZm9ybUNvbnRyb2wudmFsaWRhdG9ycy5maW5kKCh2YWxpZGF0b3I6IElWYWxpZGF0b3IpID0+IHZhbGlkYXRvciBpbnN0YW5jZW9mIFZhbGlkYXRvckZsb2F0KSBhcyBWYWxpZGF0b3JGbG9hdDtcclxuICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQoZmxvYXRWYWxpZGF0b3IpICYmIFV0aWwuaXNEZWZpbmVkKGZsb2F0VmFsaWRhdG9yLmRpZ2l0c0FmdGVyKSkge1xyXG4gICAgICAgICAgdGhpcy5tYXhEaWdpdHMgPSBmbG9hdFZhbGlkYXRvci5kaWdpdHNBZnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLndhdGNoKHRoaXMuc2hvd0RhdGVwaWNrZXIuY2hhbmdlZCwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKHNob3c6IGJvb2xlYW4pID0+IHtcclxuICAgICAgaWYgKCFzaG93KSB7XHJcbiAgICAgICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJsdXJyZWQuZW1pdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pKTtcclxuICAgIHRoaXMud2F0Y2godGhpcy5zaG93VGltZXBpY2tlci5jaGFuZ2VkLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoc2hvdzogYm9vbGVhbikgPT4ge1xyXG4gICAgICBpZiAoIXNob3cpIHtcclxuICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmx1cnJlZC5lbWl0KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtQ29udHJvbENoYW5nZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50ZXh0YXJlYSkge1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy50ZXh0QXJlYUVsZW1lbnQpKSB7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVUZXh0QXJlYUhlaWdodCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlKSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5wdXQoZXZlbnQ6IElucHV0RXZlbnQpOiB2b2lkIHtcclxuICAgIGxldCB0YXJnZXRWYWx1ZSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBpZiAodGhpcy50ZXh0YXJlYSkge1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy50ZXh0QXJlYUVsZW1lbnQpKSB7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVUZXh0QXJlYUhlaWdodCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIGxldCBkYXRlSW5wdXRNYXRjaCA9IE1yZElucHV0Q29tcG9uZW50LkRBVEVfUkVHRVhfSU5QVVQudGVzdCh0YXJnZXRWYWx1ZSk7XHJcblxyXG4gICAgICBpZiAoIXRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VPbkJsdXIpIHtcclxuICAgICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHRhcmdldFZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmZvcm1Db250cm9sQ2hhbmdlVmFsdWUgPSB0YXJnZXRWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKHRoaXMuZGF0ZSAmJiBkYXRlSW5wdXRNYXRjaCkge1xyXG4gICAgICAgIHRoaXMuYmFzZUlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB0YXJnZXRWYWx1ZTtcclxuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5wdXRDaGFuZ2UuZW1pdCh0YXJnZXRWYWx1ZSk7XHJcbiAgICBcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkYXRlQ2hhbmdlZChldmVudDogTW9tZW50KTogdm9pZCB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgaWYgKCF0aGlzLmZvcm1Db250cm9sQ2hhbmdlT25CbHVyKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShldmVudCk7XHJcbiAgICAgICAgdGhpcy5iYXNlSW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQoZXZlbnQuZm9ybWF0KCdERC5NTS5ZWVlZJykpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VWYWx1ZSA9IGV2ZW50O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gZXZlbnQuZm9ybWF0KCdERC5NTS5ZWVlZJyk7XHJcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgICAgdGhpcy5pbnB1dENoYW5nZS5lbWl0KGV2ZW50LmZvcm1hdCgnREQuTU0uWVlZWScpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNob3dEYXRlcGlja2VyLnZhbHVlID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5mb3JtQ29udHJvbENoYW5nZU9uQmx1cikge1xyXG4gICAgICB0aGlzLmJsdXIobnVsbCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdGltZUNoYW5nZWQoZXZlbnQ6IE1vbWVudCk6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIGlmICghdGhpcy5mb3JtQ29udHJvbENoYW5nZU9uQmx1cikge1xyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMuYmFzZUlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5pbnB1dENoYW5nZS5lbWl0KGV2ZW50LmZvcm1hdCgnSEg6bW0nKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbENoYW5nZVZhbHVlID0gZXZlbnQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBldmVudC5mb3JtYXQoJ0hIOm1tJyk7XHJcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgICAgdGhpcy5pbnB1dENoYW5nZS5lbWl0KGV2ZW50LmZvcm1hdCgnSEg6bW0nKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zaG93VGltZXBpY2tlci52YWx1ZSA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VPbkJsdXIpIHtcclxuICAgICAgdGhpcy5ibHVyKG51bGwpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYWNoa29tbWFzdGVsbGVuKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gVXRpbC5pc0RlZmluZWQodGhpcy5tYXhEaWdpdHMpID8gdGhpcy5tYXhEaWdpdHMgOiA5OTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlVGV4dEFyZWFIZWlnaHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICAgIHRoaXMudGV4dEFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID1cclxuICAgICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgPiAodGhpcy5tYXhSb3dzICogdGhpcy5saW5lSGVpZ2h0KSA/XHJcbiAgICAgICAgKHRoaXMubWF4Um93cyAqIHRoaXMubGluZUhlaWdodCkgKyAncHgnIDpcclxuICAgICAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCA8ICh0aGlzLm1pblJvd3MgKiB0aGlzLmxpbmVIZWlnaHQpID9cclxuICAgICAgICAodGhpcy5taW5Sb3dzICogdGhpcy5saW5lSGVpZ2h0KSArICdweCcgOlxyXG4gICAgICAgIHRoaXMudGV4dEFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbnB1dENsaWNrZWQoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMudG91Y2hlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcclxuICAgIHRoaXMuZm9jdXNlZC5lbWl0KCk7XHJcbiAgICBpZiAodGhpcy5kYXRlICYmIFV0aWwuaXNEZWZpbmVkKGV2ZW50KSAmJiAhdGhpcy5yZWFkb25seSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLmJhc2VJbnB1dEVsZW1lbnQpKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNlbGVjdFRpbWVvdXQpO1xyXG4gICAgICB0aGlzLnNlbGVjdFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYmFzZUlucHV0RWxlbWVudD8ubmF0aXZlRWxlbWVudD8uc2VsZWN0KCksIDApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmZvcm1Db250cm9sQ2hhbmdlT25CbHVyICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VWYWx1ZSkpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmZvcm1Db250cm9sQ2hhbmdlVmFsdWUpO1xyXG4gICAgICBsZXQgZW1pdFZhbHVlOiBhbnkgPSB0aGlzLmZvcm1Db250cm9sQ2hhbmdlVmFsdWU7XHJcbiAgICAgIGlmICh0aGlzLmRhdGUgJiYgbW9tZW50LmlzTW9tZW50KGVtaXRWYWx1ZSkpIHtcclxuICAgICAgICBlbWl0VmFsdWUgPSBlbWl0VmFsdWUuZm9ybWF0KCdERC5NTS5ZWVlZJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMudGltZSAmJiBtb21lbnQuaXNNb21lbnQoZW1pdFZhbHVlKSkge1xyXG4gICAgICAgIGVtaXRWYWx1ZSA9IGVtaXRWYWx1ZS5mb3JtYXQoJ0hIOm1tJyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pbnB1dENoYW5nZS5lbWl0KGVtaXRWYWx1ZSk7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VWYWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZvcm1Db250cm9sICYmIHRoaXMuZGF0ZSkge1xyXG4gICAgICBjb25zdCByb2h3ZXJ0ID0gdGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlO1xyXG4gICAgICBjb25zdCBtb21lbnREYXRlID0gTXJkRGF0dW1VdGlsLnBhcnNlKHJvaHdlcnQpO1xyXG4gICAgICAvLyBOdXIgc2NocmVpYmVuLCB3ZW5uIHNpY2ggZGVyIGFuZ2V6ZWlndGUgV2VydCBhZW5kZXJ0ICh6LiBCLiBcIjEuMi4yNlwiIC0+IFwiMDEuMDIuMjAyNlwiKTogc2V0VmFsdWUgbG9lc3QgdmFsdWVDaGFuZ2VzIGF1cyxcclxuICAgICAgLy8gdW5kIG1yZC1mb3JtLWZpZWxkIG1hcmtpZXJ0IGRhcyBGZWxkIGRhbm4gYWxzIGdlYWVuZGVydCwgb2J3b2hsIG51ciBkZXIgRm9rdXMgZ2V3ZWNoc2VsdCBoYXRcclxuICAgICAgY29uc3QgYW56ZWlnZSA9IG1vbWVudERhdGUgIT09IG51bGwgJiYgdGhpcy5mb3JtQ29udHJvbC5zaG93QXMgPyB0aGlzLmZvcm1Db250cm9sLnNob3dBcyhtb21lbnREYXRlKSA6IG1vbWVudERhdGU7XHJcbiAgICAgIGlmIChtb21lbnREYXRlICE9PSBudWxsICYmIGFuemVpZ2UgIT09IHJvaHdlcnQpIHtcclxuICAgICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKG1vbWVudERhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mb3JtQ29udHJvbCAmJiB0aGlzLnRpbWUgJiYgdGhpcy5mb3JtQ29udHJvbC52YWx1ZSAmJiB0aGlzLmZvcm1Db250cm9sLnZhbHVlICE9PSAnJykge1xyXG4gICAgICBpZiAoIW1vbWVudC5pc01vbWVudCh0aGlzLmZvcm1Db250cm9sLnZhbHVlKSkge1xyXG4gICAgICAgIGxldCBtb21lbnRUaW1lID0gbW9tZW50KHRoaXMuZm9ybUNvbnRyb2wudmFsdWUsICdISDptbScpLnllYXIoMjAyMCkubW9udGgoMCkuZGF5KDEpLnV0Yyh0cnVlKTtcclxuICAgICAgICBpZiAobW9tZW50VGltZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUobW9tZW50VGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5ibHVycmVkLmVtaXQoKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgLy8gdGhpcy5kYXRlSW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2hvd1BpY2tlcigpO1xyXG4gICAgaWYgKHRoaXMuZGF0ZSkge1xyXG4gICAgICB0aGlzLnNob3dEYXRlcGlja2VyLnZhbHVlID0gIXRoaXMuc2hvd0RhdGVwaWNrZXIudmFsdWU7XHJcbiAgICAgIGlmICh0aGlzLnNob3dEYXRlcGlja2VyLnZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1cyhudWxsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudGltZSkge1xyXG4gICAgICB0aGlzLnNob3dUaW1lcGlja2VyLnZhbHVlID0gIXRoaXMuc2hvd1RpbWVwaWNrZXIudmFsdWU7XHJcbiAgICAgIGlmICh0aGlzLnNob3dUaW1lcGlja2VyLnZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1cyhudWxsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW21yZERhdGVUaW1lUGlja2VyVG9nZ2xlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZERhdGVQaWNrZXJUb2dnbGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQElucHV0KCdtcmREYXRlVGltZVBpY2tlclRvZ2dsZScpIHB1YmxpYyBtcmREYXRlVGltZVBpY2tlclRvZ2dsZTogTXJkSW5wdXRDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXHJcbiAgKSB7fVxyXG5cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoJ21yZC1pY29uJykpIHtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9ICcyMHB4JztcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzIwcHgnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5tcmREYXRlVGltZVBpY2tlclRvZ2dsZSkpIHtcclxuICAgICAgdGhpcy5tcmREYXRlVGltZVBpY2tlclRvZ2dsZS50b2dnbGVDbGlja2VkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiPGlucHV0ICNiYXNlSW5wdXRcclxuICAoY2xpY2spPVwiaW5wdXRDbGlja2VkKCRldmVudClcIlxyXG4gIChmb2N1cyk9XCJmb2N1cygkZXZlbnQpXCJcclxuICAoYmx1cik9XCJibHVyKCRldmVudClcIlxyXG4gIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgKGlucHV0KT1cImlucHV0KCRldmVudClcIlxyXG4gIFtkaXNhYmxlZF09XCJmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWRcIlxyXG4gIFtwbGFjZWhvbGRlcl09XCIhbGFiZWxQcmVzZW50IHx8IGlzRm9jdXNlZCA/IHBsYWNlaG9sZGVyIDogJydcIlxyXG4gIFtzdHlsZS5wb2ludGVyLWV2ZW50c109XCJyZWFkb25seSA/ICdub25lJyA6ICdhdXRvJ1wiXHJcbiAgW3N0eWxlLnRleHQtYWxpZ25dPVwidGV4dEVuZCA/ICdlbmQnIDogY2VudGVyZWQgPyAnY2VudGVyJyA6ICdzdGFydCdcIlxyXG4gIFtzdHlsZS5jb2xvcl09XCJmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWQgPyBkaXNhYmxlZENvbG9yIDogY29sb3JcIlxyXG4gIFtkZWNpbWFsTnVtYmVyXT1cIm51bWJlciB8fCBtYXhEaWdpdHMgfHwgbWF4RGlnaXRzID09PSAwXCIgW25hY2hrb21tYXN0ZWxsZW5dPVwibmFjaGtvbW1hc3RlbGxlblwiXHJcbiAgW2F0dHIuaW5wdXRtb2RlXT1cIm51bWJlciA/ICdkZWNpbWFsJyA6IG51bGxcIlxyXG4gIFt0aW1lSW5wdXRdPVwidGltZVwiXHJcbiAgKm5nSWY9XCIhdGV4dGFyZWFcIlxyXG4gID5cclxuXHJcbjx0ZXh0YXJlYSAjdGV4dEFyZWFcclxuICAoY2xpY2spPVwiaW5wdXRDbGlja2VkKCRldmVudClcIlxyXG4gIChmb2N1cyk9XCJmb2N1cygkZXZlbnQpXCJcclxuICAoYmx1cik9XCJibHVyKCRldmVudClcIlxyXG4gIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgKGlucHV0KT1cImlucHV0KCRldmVudClcIlxyXG4gIFtkaXNhYmxlZF09XCJmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWRcIlxyXG4gIFtwbGFjZWhvbGRlcl09XCIhbGFiZWxQcmVzZW50IHx8IGlzRm9jdXNlZCA/IHBsYWNlaG9sZGVyIDogJydcIlxyXG4gIFtzdHlsZS5wb2ludGVyLWV2ZW50c109XCJyZWFkb25seSA/ICdub25lJyA6ICdhdXRvJ1wiXHJcbiAgW3N0eWxlLmNvbG9yXT1cImZvcm1Db250cm9sPy5kaXNhYmxlZCB8fCBkaXNhYmxlZCA/IGRpc2FibGVkQ29sb3IgOiBjb2xvclwiXHJcbiAgKm5nSWY9XCJ0ZXh0YXJlYVwiXHJcbiAgcm93cz1cIjFcIlxyXG4gIFtuZ1N0eWxlXT1cInsnbGluZS1oZWlnaHQnOiBsaW5lSGVpZ2h0ICsgJ3B4J31cIlxyXG4+PC90ZXh0YXJlYT5cclxuXHJcblxyXG48ZGl2ICNkYXRlSW5wdXQgKm5nSWY9XCJkYXRlXCI+PC9kaXY+XHJcbjxkaXYgKm5nSWY9XCJkYXRlICYmICFjdXN0b21EYXRlVGltZVRvZ2dsZSAmJiAhcmFuZ2VTdGFydCAmJiAhcmFuZ2VFbmRcIiA+XHJcbiAgPG1yZC1idXR0b24gaWNvbi1idXR0b24gZnVsbEljb24gZGlhbWV0ZXI9XCIyNFwiIGljb25TaXplPVwiMTZcIiAoY2xpY2spPVwidG9nZ2xlQ2xpY2tlZCgpXCIgW2Rpc2FibGVkXT1cImZvcm1Db250cm9sPy5kaXNhYmxlZCB8fCBkaXNhYmxlZFwiPlxyXG4gICAgPHN2ZyBtcmQtaWNvbiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMTQuOTg2IDE3LjEyN1wiIGZpdD1cIlwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCIgZm9jdXNhYmxlPVwiZmFsc2VcIj5cclxuICAgICAgPGRlZnM+PHN0eWxlPi5he2ZpbGw6IzQ5NDk0OTt9PC9zdHlsZT48L2RlZnM+XHJcbiAgICAgIDxwYXRoIGNsYXNzPVwiYVwiIGQ9XCJNMTQuNTg1LDUuMzUySC40YS40LjQsMCwwLDEtLjQtLjR2LTEuMkExLjYwNiwxLjYwNiwwLDAsMSwxLjYwNiwyLjE0MUgzLjIxMVYuNGEuNC40LDAsMCwxLC40LS40SDQuOTUxYS40LjQsMCwwLDEsLjQuNFYyLjE0MUg5LjYzNFYuNGEuNC40LDAsMCwxLC40LS40aDEuMzM4YS40LjQsMCwwLDEsLjQuNFYyLjE0MWgxLjYwNmExLjYwNiwxLjYwNiwwLDAsMSwxLjYwNiwxLjYwNnYxLjJBLjQuNCwwLDAsMSwxNC41ODUsNS4zNTJaTS40LDYuNDIzSDE0LjU4NWEuNC40LDAsMCwxLC40LjR2OC43YTEuNjA2LDEuNjA2LDAsMCwxLTEuNjA2LDEuNjA2SDEuNjA2QTEuNjA2LDEuNjA2LDAsMCwxLDAsMTUuNTIydi04LjdBLjQuNCwwLDAsMSwuNCw2LjQyM1ptMTAuNTcxLDQuNjgzYS40LjQsMCwwLDAtLjQtLjRIOC41NjRWOC43YS40LjQsMCwwLDAtLjQtLjRINi44MjRhLjQuNCwwLDAsMC0uNC40VjEwLjdINC40MTZhLjQuNCwwLDAsMC0uNC40djEuMzM4YS40LjQsMCwwLDAsLjQuNEg2LjQyM3YyLjAwN2EuNC40LDAsMCwwLC40LjRIOC4xNjJhLjQuNCwwLDAsMCwuNC0uNFYxMi44NDVoMi4wMDdhLjQuNCwwLDAsMCwuNC0uNFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAwKVwiPjwvcGF0aD5cclxuICAgIDwvc3ZnPlxyXG4gIDwvbXJkLWJ1dHRvbj5cclxuPC9kaXY+XHJcblxyXG48ZGl2ICN0aW1lSW5wdXQgKm5nSWY9XCJ0aW1lXCI+PC9kaXY+XHJcbjxkaXYgKm5nSWY9XCJ0aW1lICYmICFjdXN0b21EYXRlVGltZVRvZ2dsZVwiPiAgXHJcbiAgPG1yZC1idXR0b24gaWNvbi1idXR0b24gZnVsbEljb24gZGlhbWV0ZXI9XCIyNFwiIGljb25TaXplPVwiMThcIiAoY2xpY2spPVwidG9nZ2xlQ2xpY2tlZCgpXCIgW2Rpc2FibGVkXT1cImZvcm1Db250cm9sPy5kaXNhYmxlZCB8fCBkaXNhYmxlZFwiPlxyXG4gICAgPHN2ZyBtcmQtaWNvbiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTIgMjFDMTYuOTcwNiAyMSAyMSAxNi45NzA2IDIxIDEyQzIxIDcuMDI5NDQgMTYuOTcwNiAzIDEyIDNDNy4wMjk0NCAzIDMgNy4wMjk0NCAzIDEyQzMgMTYuOTcwNiA3LjAyOTQ0IDIxIDEyIDIxWlwiIHN0cm9rZT1cIiMwMDAwMDBcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTIgNlYxMlwiIHN0cm9rZT1cIiMwMDAwMDBcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTYuMjQgMTYuMjRMMTIgMTJcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9tcmQtYnV0dG9uPlxyXG48L2Rpdj5cclxuXHJcbjxzcGFuIGNsYXNzPVwidW5mb2N1c2VkT3ZlcmxheVwiICpuZ0lmPVwiIWlzRm9jdXNlZFwiPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIlt1bmZvY3VzZWRPdmVybGF5XVwiPjwvbmctY29udGVudD5cclxuPC9zcGFuPlxyXG5cclxuPG5nLXRlbXBsYXRlXHJcbiAgY2RrLWNvbm5lY3RlZC1vdmVybGF5XHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcF09XCJ0cnVlXCJcclxuICBjZGtDb25uZWN0ZWRPdmVybGF5QmFja2Ryb3BDbGFzcz1cImNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJkYXRlSW5wdXRFbGVtZW50XCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwic2hvd0RhdGVwaWNrZXIudmFsdWVcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cIl9wb3NpdGlvbnNcIlxyXG4gIChiYWNrZHJvcENsaWNrKT1cInNob3dEYXRlcGlja2VyLnZhbHVlID0gZmFsc2U7XCJcclxuPlxyXG4gIDxtcmQtZGF0ZXBpY2tlclxyXG4gICAgW2RhdGVdPVwidmFsdWVcIlxyXG4gICAgKGRhdGVDaGFuZ2VkKT1cImRhdGVDaGFuZ2VkKCRldmVudClcIlxyXG4gID48L21yZC1kYXRlcGlja2VyPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlXHJcbiAgY2RrLWNvbm5lY3RlZC1vdmVybGF5XHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcF09XCJ0cnVlXCJcclxuICBjZGtDb25uZWN0ZWRPdmVybGF5QmFja2Ryb3BDbGFzcz1cImNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJ0aW1lSW5wdXRFbGVtZW50XCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwic2hvd1RpbWVwaWNrZXIudmFsdWVcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cIl9wb3NpdGlvbnNcIlxyXG4gIChiYWNrZHJvcENsaWNrKT1cInNob3dUaW1lcGlja2VyLnZhbHVlID0gZmFsc2U7XCJcclxuPlxyXG4gIDxtcmQtdGltZXBpY2tlclxyXG4gICAgW3RpbWVdPVwidmFsdWVcIlxyXG4gICAgKHRpbWVDaGFuZ2VkKT1cInRpbWVDaGFuZ2VkKCRldmVudClcIlxyXG4gID48L21yZC10aW1lcGlja2VyPlxyXG48L25nLXRlbXBsYXRlPiJdfQ==