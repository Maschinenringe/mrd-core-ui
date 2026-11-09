import { ChangeDetectionStrategy, Component, Directive, EventEmitter, HostListener, Input, Output, ViewChild, booleanAttribute, numberAttribute } from '@angular/core';
import moment from 'moment';
import { BaseObject, ObservableValue, SubscriptionHandler, TypeConverter, Util, ValidatorFloat } from 'mrd-core';
import { ConfigUtil } from '../../../../common/util/config.util';
import { colorAttribute } from '../../../../common/transforms/color-transform';
import * as _ from 'underscore';
import { MrdDatumUtil } from '../../../../common/util/datum.util';
import { ValidatorDatum } from '../../../../common/validation/validator-datum';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "../../../mrd-button/components/mrd-button/mrd-button.component";
import * as i4 from "../../../mrd-icon/components/mrd-icon.component";
import * as i5 from "../../../../common/directive/decimal-number-directive/decimal-number.directive";
import * as i6 from "../../../../common/directive/time-input-directive/time-input.directive";
import * as i7 from "../mrd-datepicker/mrd-datepicker.component";
import * as i8 from "../mrd-timepicker/mrd-timepicker.component";
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
    i0.ɵɵstyleProp("pointer-events", ctx_r0.readonly ? "none" : "auto")("text-align", ctx_r0.textEnd ? "end" : ctx_r0.centered ? "center" : "start");
    i0.ɵɵproperty("value", ctx_r0.value)("disabled", (ctx_r0.formControl == null ? null : ctx_r0.formControl.disabled) || ctx_r0.disabled)("placeholder", !ctx_r0.labelPresent || ctx_r0.isFocused || ctx_r0.labelOben ? ctx_r0.placeholder : "")("decimalNumber", ctx_r0.number || ctx_r0.maxDigits || ctx_r0.maxDigits === 0)("nachkommastellen", ctx_r0.nachkommastellen)("timeInput", ctx_r0.time);
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
    i0.ɵɵstyleProp("pointer-events", ctx_r1.readonly ? "none" : "auto");
    i0.ɵɵproperty("value", ctx_r1.value)("disabled", (ctx_r1.formControl == null ? null : ctx_r1.formControl.disabled) || ctx_r1.disabled)("placeholder", !ctx_r1.labelPresent || ctx_r1.isFocused || ctx_r1.labelOben ? ctx_r1.placeholder : "")("ngStyle", i0.ɵɵpureFunction1(6, _c4, ctx_r1.lineHeight + "px"));
} }
function MrdInputComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", null, 9);
} }
function MrdInputComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "mrd-button", 10);
    i0.ɵɵlistener("click", function MrdInputComponent_div_3_Template_mrd_button_click_1_listener() { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r22.toggleClicked()); });
    i0.ɵɵelement(2, "mrd-icon", 11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", (ctx_r3.formControl == null ? null : ctx_r3.formControl.disabled) || ctx_r3.disabled);
} }
function MrdInputComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", null, 12);
} }
function MrdInputComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "mrd-button", 13);
    i0.ɵɵlistener("click", function MrdInputComponent_div_5_Template_mrd_button_click_1_listener() { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r25.toggleClicked()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 14);
    i0.ɵɵelement(3, "path", 15)(4, "path", 16)(5, "path", 17);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", (ctx_r5.formControl == null ? null : ctx_r5.formControl.disabled) || ctx_r5.disabled);
} }
function MrdInputComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} }
function MrdInputComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-datepicker", 19);
    i0.ɵɵlistener("dateChanged", function MrdInputComponent_ng_template_7_Template_mrd_datepicker_dateChanged_0_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r27.dateChanged($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("date", ctx_r7.value);
} }
function MrdInputComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-timepicker", 20);
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
    static DEFAULT_LINE_HEIGHT = 16;
    static DATE_REGEX_INPUT = /(\d{4})-(\d{2})-(\d{2})/;
    baseInputElement;
    textAreaElement;
    dateInputElement;
    timeInputElement;
    /** Kann nach dem Aufbau wechseln (z. B. anderer Eintrag eines FormArrays); das Feld bindet sich dann neu. */
    set formControl(value) {
        if (this._formControl === value) {
            return;
        }
        this._formControl = value;
        if (this.ansichtInitialisiert) {
            this.formControlBinden();
            this.formControlGewechselt.next();
        }
    }
    get formControl() {
        return this._formControl;
    }
    _formControl;
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
    /** Meldet `mrd-form-field`, dass `mrdFormControl` nach dem Aufbau gewechselt hat */
    formControlGewechselt = new Subject();
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
    /**
     * Von `mrd-form-field` mit mehreren Inputs (`mrd-date-range-picker`) gesetzt, solange das Label oben steht:
     * Dann ueberdeckt es keinen Placeholder, und alle Placeholder (z. B. "Von" und "Bis") bleiben sichtbar.
     */
    set labelOben(value) {
        if (this._labelOben === value) {
            return;
        }
        this._labelOben = value;
        this.cdr.detectChanges();
    }
    get labelOben() {
        return this._labelOben;
    }
    _labelOben = false;
    isFocused = false;
    showDatepicker = new ObservableValue(false);
    showTimepicker = new ObservableValue(false);
    formControlChangeValue;
    selectTimeout;
    ansichtInitialisiert = false;
    formControlAbo;
    /** Nur aus dem ValidatorFloat des Controls uebernommene Nachkommastellen werden beim Control-Wechsel neu ermittelt */
    maxDigitsAusValidator = false;
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
        // Der Overlay-Ursprung (#dateInput/#timeInput im *ngIf) steht erst nach dem ersten Rendern fest; ohne erneutes
        // Rendern wirft das Binding NG0100, sobald kein mrd-form-field (labelPresent) das Feld nachtraeglich neu rendert
        if (this.date || this.time) {
            this.cdr.detectChanges();
        }
        this.formControlBinden();
        if (Util.isDefined(this.formControl) && Util.isDefined(this.formControl.control.value)) {
            this.cdr.detectChanges();
        }
        this.ansichtInitialisiert = true;
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
    /** Uebernimmt Wert, Validatoren und Konvertierung des aktuellen Controls und abonniert dessen Aenderungen. */
    formControlBinden() {
        this.formControlAbo?.unsubscribe();
        this.formControlAbo = undefined;
        if (this.maxDigitsAusValidator) {
            this.maxDigits = undefined;
            this.maxDigitsAusValidator = false;
        }
        if (!Util.isDefined(this.formControl)) {
            return;
        }
        if (this.date) {
            let datumValidator = this.formControl.validators.find((validator) => validator instanceof ValidatorDatum);
            if (!Util.isDefined(datumValidator)) {
                this.formControl.validateWith([...this.formControl.validators, new ValidatorDatum()], { emitEvent: false });
            }
        }
        if (this.number) {
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
        if (Util.isDefined(this.formControl.control.value)) {
            this.value = this.formControl.control.value;
        }
        else if (this.ansichtInitialisiert) {
            this.value = null;
        }
        this.formControlAbo = this.watch(this.formControl.valueChanges, new SubscriptionHandler(() => this.formControlChanged()));
        if (!Util.isDefined(this.maxDigits)) {
            let floatValidator = this.formControl.validators.find((validator) => validator instanceof ValidatorFloat);
            if (Util.isDefined(floatValidator) && Util.isDefined(floatValidator.digitsAfter)) {
                this.maxDigits = floatValidator.digitsAfter;
                this.maxDigitsAusValidator = true;
            }
        }
        this.cdr.markForCheck();
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
                (this.maxRows * this.lineHeight) + 1 + 'px' :
                this.textAreaElement.nativeElement.scrollHeight < (this.minRows * this.lineHeight) ?
                    (this.minRows * this.lineHeight) + 1 + 'px' :
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
        } }, inputs: { formControl: ["mrdFormControl", "formControl"], placeholder: "placeholder", value: "value", maxLength: ["maxLength", "maxLength", numberAttribute], minRows: ["minRows", "minRows", numberAttribute], maxRows: ["maxRows", "maxRows", numberAttribute], lineHeight: ["lineHeight", "lineHeight", numberAttribute], disabled: ["disabled", "disabled", booleanAttribute], readonly: ["readonly", "readonly", booleanAttribute], required: ["required", "required", booleanAttribute], textarea: ["textarea", "textarea", booleanAttribute], date: ["date", "date", booleanAttribute], rangeStart: ["rangeStart", "rangeStart", booleanAttribute], rangeEnd: ["rangeEnd", "rangeEnd", booleanAttribute], time: ["time", "time", booleanAttribute], number: ["number", "number", booleanAttribute], customDateTimeToggle: ["customDateTimeToggle", "customDateTimeToggle", booleanAttribute], validateOnBlur: ["validateOnBlur", "validateOnBlur", booleanAttribute], formControlChangeOnBlur: ["formControlChangeOnBlur", "formControlChangeOnBlur", booleanAttribute], color: ["color", "color", colorAttribute], centered: ["text-centered", "centered", booleanAttribute], textEnd: ["text-end", "textEnd", booleanAttribute], datePickerToggle: "datePickerToggle", maxDigits: "maxDigits", autofocus: ["autofocus", "autofocus", booleanAttribute] }, outputs: { touched: "touched", focused: "focused", blurred: "blurred", valueChange: "valueChange", inputChange: "inputChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c6, decls: 9, vars: 15, consts: [[3, "value", "disabled", "placeholder", "pointer-events", "text-align", "decimalNumber", "nachkommastellen", "timeInput", "click", "focus", "blur", "input", 4, "ngIf"], ["rows", "1", 3, "value", "disabled", "placeholder", "pointer-events", "ngStyle", "click", "focus", "blur", "input", 4, "ngIf"], [4, "ngIf"], ["class", "unfocusedOverlay", 4, "ngIf"], ["cdk-connected-overlay", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "backdropClick"], [3, "value", "disabled", "placeholder", "decimalNumber", "nachkommastellen", "timeInput", "click", "focus", "blur", "input"], ["baseInput", ""], ["rows", "1", 3, "value", "disabled", "placeholder", "ngStyle", "click", "focus", "blur", "input"], ["textArea", ""], ["dateInput", ""], ["icon-button", "", "fullIcon", "", "diameter", "24", "iconSize", "16", 3, "disabled", "click"], ["icon", "kalender", "color", "#494949", "size", "16"], ["timeInput", ""], ["icon-button", "", "fullIcon", "", "diameter", "24", "iconSize", "18", 3, "disabled", "click"], ["mrd-icon", "", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z", "stroke", "#000000", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 6V12", "stroke", "#000000", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M16.24 16.24L12 12", "stroke", "#000000", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "unfocusedOverlay"], [3, "date", "dateChanged"], [3, "time", "timeChanged"]], template: function MrdInputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c5);
            i0.ɵɵtemplate(0, MrdInputComponent_input_0_Template, 2, 11, "input", 0);
            i0.ɵɵtemplate(1, MrdInputComponent_textarea_1_Template, 2, 8, "textarea", 1);
            i0.ɵɵtemplate(2, MrdInputComponent_div_2_Template, 2, 0, "div", 2);
            i0.ɵɵtemplate(3, MrdInputComponent_div_3_Template, 3, 1, "div", 2);
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
        } }, dependencies: [i1.NgIf, i1.NgStyle, i2.CdkConnectedOverlay, i3.MrdButtonComponent, i4.MrdIconComponent, i5.DecimalNumberDirective, i6.TimeInputDirective, i7.MrdDatepickerComponent, i8.MrdTimepickerComponent], styles: ["@charset \"UTF-8\";[_nghost-%COMP%]{width:100%;display:flex;flex-direction:row}input[_ngcontent-%COMP%]{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}input[disabled][_ngcontent-%COMP%]{color:#afa6a6}textarea[_ngcontent-%COMP%]{outline:unset;background-color:transparent;width:100%;padding:0 2px;line-height:1.5em}textarea[disabled][_ngcontent-%COMP%]{color:#afa6a6}textarea[_ngcontent-%COMP%]{scrollbar-color:#999 transparent}textarea[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px;background:transparent}textarea[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#999;border-radius:5px}textarea[_ngcontent-%COMP%]::-webkit-scrollbar-corner{background:transparent}.unfocusedOverlay[_ngcontent-%COMP%]{position:absolute;width:100%;height:1.5em;outline:none;padding:1px 8px 0;display:flex;flex-direction:column;justify-content:center;pointer-events:none}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdInputComponent, [{
        type: Component,
        args: [{ selector: 'mrd-input', changeDetection: ChangeDetectionStrategy.OnPush, template: "<input #baseInput\r\n  (click)=\"inputClicked($event)\"\r\n  (focus)=\"focus($event)\"\r\n  (blur)=\"blur($event)\"\r\n  [value]=\"value\"\r\n  (input)=\"input($event)\"\r\n  [disabled]=\"formControl?.disabled || disabled\"\r\n  [placeholder]=\"!labelPresent || isFocused || labelOben ? placeholder : ''\"\r\n  [style.pointer-events]=\"readonly ? 'none' : 'auto'\"\r\n  [style.text-align]=\"textEnd ? 'end' : centered ? 'center' : 'start'\"\r\n  [decimalNumber]=\"number || maxDigits || maxDigits === 0\" [nachkommastellen]=\"nachkommastellen\"\r\n  [attr.inputmode]=\"number ? 'decimal' : null\"\r\n  [timeInput]=\"time\"\r\n  *ngIf=\"!textarea\"\r\n  >\r\n\r\n<textarea #textArea\r\n  (click)=\"inputClicked($event)\"\r\n  (focus)=\"focus($event)\"\r\n  (blur)=\"blur($event)\"\r\n  [value]=\"value\"\r\n  (input)=\"input($event)\"\r\n  [disabled]=\"formControl?.disabled || disabled\"\r\n  [placeholder]=\"!labelPresent || isFocused || labelOben ? placeholder : ''\"\r\n  [style.pointer-events]=\"readonly ? 'none' : 'auto'\"\r\n  *ngIf=\"textarea\"\r\n  rows=\"1\"\r\n  [ngStyle]=\"{'line-height': lineHeight + 'px'}\"\r\n></textarea>\r\n\r\n\r\n<div #dateInput *ngIf=\"date\"></div>\r\n<div *ngIf=\"date && !customDateTimeToggle && !rangeStart && !rangeEnd\" >\r\n  <mrd-button icon-button fullIcon diameter=\"24\" iconSize=\"16\" (click)=\"toggleClicked()\" [disabled]=\"formControl?.disabled || disabled\">\r\n    <mrd-icon icon=\"kalender\" color=\"#494949\" size=\"16\"></mrd-icon>\r\n  </mrd-button>\r\n</div>\r\n\r\n<div #timeInput *ngIf=\"time\"></div>\r\n<div *ngIf=\"time && !customDateTimeToggle\">  \r\n  <mrd-button icon-button fullIcon diameter=\"24\" iconSize=\"18\" (click)=\"toggleClicked()\" [disabled]=\"formControl?.disabled || disabled\">\r\n    <svg mrd-icon viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <path d=\"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z\" stroke=\"#000000\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n      <path d=\"M12 6V12\" stroke=\"#000000\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n      <path d=\"M16.24 16.24L12 12\" stroke=\"#000000\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    </svg>\r\n  </mrd-button>\r\n</div>\r\n\r\n<span class=\"unfocusedOverlay\" *ngIf=\"!isFocused\">\r\n  <ng-content select=\"[unfocusedOverlay]\"></ng-content>\r\n</span>\r\n\r\n<ng-template\r\n  cdk-connected-overlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\r\n  [cdkConnectedOverlayOrigin]=\"dateInputElement\"\r\n  [cdkConnectedOverlayOpen]=\"showDatepicker.value\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  (backdropClick)=\"showDatepicker.value = false;\"\r\n>\r\n  <mrd-datepicker\r\n    [date]=\"value\"\r\n    (dateChanged)=\"dateChanged($event)\"\r\n  ></mrd-datepicker>\r\n</ng-template>\r\n\r\n<ng-template\r\n  cdk-connected-overlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\r\n  [cdkConnectedOverlayOrigin]=\"timeInputElement\"\r\n  [cdkConnectedOverlayOpen]=\"showTimepicker.value\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  (backdropClick)=\"showTimepicker.value = false;\"\r\n>\r\n  <mrd-timepicker\r\n    [time]=\"value\"\r\n    (timeChanged)=\"timeChanged($event)\"\r\n  ></mrd-timepicker>\r\n</ng-template>", styles: ["@charset \"UTF-8\";:host{width:100%;display:flex;flex-direction:row}input{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}input[disabled]{color:#afa6a6}textarea{outline:unset;background-color:transparent;width:100%;padding:0 2px;line-height:1.5em}textarea[disabled]{color:#afa6a6}textarea{scrollbar-color:#999 transparent}textarea::-webkit-scrollbar{width:10px;background:transparent}textarea::-webkit-scrollbar-thumb{background:#999;border-radius:5px}textarea::-webkit-scrollbar-corner{background:transparent}.unfocusedOverlay{position:absolute;width:100%;height:1.5em;outline:none;padding:1px 8px 0;display:flex;flex-direction:column;justify-content:center;pointer-events:none}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZm9ybS1maWVsZC9jb21wb25lbnRzL21yZC1pbnB1dC9tcmQtaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWlucHV0L21yZC1pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBUSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RPLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQXlCLFVBQVUsRUFBYyxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEosT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMvRSxPQUFPLEtBQUssQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUdoQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0lDWDdDLG1DQWNHO0lBYkQsdUtBQVMsZUFBQSw0QkFB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LENBQXFCO0lBRXJGLFlBQ1UsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUM3QixDQUFDO0lBR0osZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3JELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ25ELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQztJQUdNLE9BQU8sQ0FBQyxLQUFpQjtRQUM5QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzlDO0lBQ0gsQ0FBQztnR0F0QlUsbUJBQW1COzRGQUFuQixtQkFBbUI7MEdBQW5CLG1CQUFlOzs7dUZBQWYsbUJBQW1CO2NBSC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDOzZEQUcwQyx1QkFBdUI7a0JBQS9ELEtBQUs7bUJBQUMseUJBQXlCO1lBZ0J6QixPQUFPO2tCQURiLFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0LCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCwgVmlld0NoaWxkLCBib29sZWFuQXR0cmlidXRlLCBudW1iZXJBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wsIEJhc2VPYmplY3QsIElWYWxpZGF0b3IsIE9ic2VydmFibGVWYWx1ZSwgU3Vic2NyaXB0aW9uSGFuZGxlciwgVHlwZUNvbnZlcnRlciwgVXRpbCwgVmFsaWRhdG9yRmxvYXQgfSBmcm9tICdtcmQtY29yZSc7XHJcbmltcG9ydCB7IENvbmZpZ1V0aWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb25maWcudXRpbCc7XHJcbmltcG9ydCB7IGNvbG9yQXR0cmlidXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvY29sb3ItdHJhbnNmb3JtJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuaW1wb3J0IHsgTXJkQmFzZUNvbG9yVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vbW9kZWwvY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgQ29ubmVjdGVkUG9zaXRpb24gfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IE1yZERhdHVtVXRpbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlsL2RhdHVtLnV0aWwnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JEYXR1bSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi92YWxpZGF0aW9uL3ZhbGlkYXRvci1kYXR1bSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWlucHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBCYXNlT2JqZWN0IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9NQVhfTEVOR1RIOiBudW1iZXIgPSA1MTI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9NSU5fUk9XUzogbnVtYmVyID0gMTtcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01BWF9ST1dTOiBudW1iZXIgPSAyO1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTElORV9IRUlHSFQ6IG51bWJlciA9IDE2O1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBEQVRFX1JFR0VYX0lOUFVUOiBSZWdFeHAgPSAvKFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSkvO1xyXG5cclxuICBAVmlld0NoaWxkKCdiYXNlSW5wdXQnKSBwdWJsaWMgYmFzZUlucHV0RWxlbWVudD86IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcbiAgQFZpZXdDaGlsZCgndGV4dEFyZWEnKSBwdWJsaWMgdGV4dEFyZWFFbGVtZW50PzogRWxlbWVudFJlZjxIVE1MVGV4dEFyZWFFbGVtZW50PjtcclxuICBAVmlld0NoaWxkKCdkYXRlSW5wdXQnKSBwdWJsaWMgZGF0ZUlucHV0RWxlbWVudD86IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcbiAgQFZpZXdDaGlsZCgndGltZUlucHV0JykgcHVibGljIHRpbWVJbnB1dEVsZW1lbnQ/OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG5cclxuICAvKiogS2FubiBuYWNoIGRlbSBBdWZiYXUgd2VjaHNlbG4gKHouIEIuIGFuZGVyZXIgRWludHJhZyBlaW5lcyBGb3JtQXJyYXlzKTsgZGFzIEZlbGQgYmluZGV0IHNpY2ggZGFubiBuZXUuICovXHJcbiAgQElucHV0KCdtcmRGb3JtQ29udHJvbCcpIHNldCBmb3JtQ29udHJvbCh2YWx1ZTogQWNjZXNzYWJsZUZvcm1Db250cm9sfHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHRoaXMuX2Zvcm1Db250cm9sID09PSB2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9mb3JtQ29udHJvbCA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuYW5zaWNodEluaXRpYWxpc2llcnQpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbEJpbmRlbigpO1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sR2V3ZWNoc2VsdC5uZXh0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldCBmb3JtQ29udHJvbCgpOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2x8dW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9mb3JtQ29udHJvbDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfZm9ybUNvbnRyb2w/OiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2w7XHJcbiAgQElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnICc7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZTogc3RyaW5nfG51bGwgPSAnJztcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBtYXhMZW5ndGg/OiBudW1iZXI7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBtaW5Sb3dzOiBudW1iZXIgPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX01JTl9ST1dTO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgbWF4Um93czogbnVtYmVyID0gTXJkSW5wdXRDb21wb25lbnQuREVGQVVMVF9NQVhfUk9XUztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgcHVibGljIGxpbmVIZWlnaHQ6IG51bWJlciA9IE1yZElucHV0Q29tcG9uZW50LkRFRkFVTFRfTElORV9IRUlHSFQ7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHRleHRhcmVhOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHJhbmdlU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyByYW5nZUVuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHRpbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBudW1iZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tRGF0ZVRpbWVUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgdmFsaWRhdGVPbkJsdXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBmb3JtQ29udHJvbENoYW5nZU9uQmx1cjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbiAgcHVibGljIGdldCBjb2xvcigpOiBzdHJpbmd8dW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcclxuICB9XHJcbiAgcHJpdmF0ZSBfY29sb3I/OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCh7YWxpYXM6ICd0ZXh0LWNlbnRlcmVkJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNldCBjZW50ZXJlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fY2VudGVyZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IGNlbnRlcmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NlbnRlcmVkO1xyXG4gIH1cclxuICBwcml2YXRlIF9jZW50ZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoe2FsaWFzOiAndGV4dC1lbmQnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IHRleHRFbmQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3RleHRFbmQgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IHRleHRFbmQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGV4dEVuZDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfdGV4dEVuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgZGF0ZVBpY2tlclRvZ2dsZT86IEhUTUxFbGVtZW50O1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgbWF4RGlnaXRzPzogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBhdXRvZm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpIHRvdWNoZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgZm9jdXNlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBibHVycmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ3xudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nfG51bGw+KCk7XHJcbiAgQE91dHB1dCgpIGlucHV0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nfG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmd8bnVsbD4oKTtcclxuXHJcbiAgLyoqIE1lbGRldCBgbXJkLWZvcm0tZmllbGRgLCBkYXNzIGBtcmRGb3JtQ29udHJvbGAgbmFjaCBkZW0gQXVmYmF1IGdld2VjaHNlbHQgaGF0ICovXHJcbiAgcHVibGljIHJlYWRvbmx5IGZvcm1Db250cm9sR2V3ZWNoc2VsdDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIHB1YmxpYyBkaXNhYmxlZENvbG9yOiBzdHJpbmcgPSBfLmlzT2JqZWN0KENvbmZpZ1V0aWwuZ2V0Q29uZmlnKCkuYmFzZUNvbG9ycy5kaXNhYmxlZCkgPyAoQ29uZmlnVXRpbC5nZXRDb25maWcoKS5iYXNlQ29sb3JzLmRpc2FibGVkIGFzIE1yZEJhc2VDb2xvclRoZW1lKS50ZXh0IDogKENvbmZpZ1V0aWwuZ2V0Q29uZmlnKCkuYmFzZUNvbG9ycy5kaXNhYmxlZCBhcyBzdHJpbmcpIHx8ICcjYWZhNmE2JztcclxuICBwdWJsaWMgc2V0IGxhYmVsUHJlc2VudCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHRoaXMuX2xhYmVsUHJlc2VudCA9PT0gdmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbGFiZWxQcmVzZW50ID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgbGFiZWxQcmVzZW50KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsUHJlc2VudDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfbGFiZWxQcmVzZW50OiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogVm9uIGBtcmQtZm9ybS1maWVsZGAgbWl0IG1laHJlcmVuIElucHV0cyAoYG1yZC1kYXRlLXJhbmdlLXBpY2tlcmApIGdlc2V0enQsIHNvbGFuZ2UgZGFzIExhYmVsIG9iZW4gc3RlaHQ6XHJcbiAgICogRGFubiB1ZWJlcmRlY2t0IGVzIGtlaW5lbiBQbGFjZWhvbGRlciwgdW5kIGFsbGUgUGxhY2Vob2xkZXIgKHouIEIuIFwiVm9uXCIgdW5kIFwiQmlzXCIpIGJsZWliZW4gc2ljaHRiYXIuXHJcbiAgICovXHJcbiAgcHVibGljIHNldCBsYWJlbE9iZW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0aGlzLl9sYWJlbE9iZW4gPT09IHZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2xhYmVsT2JlbiA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IGxhYmVsT2JlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9sYWJlbE9iZW47XHJcbiAgfVxyXG4gIHByaXZhdGUgX2xhYmVsT2JlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpc0ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBcclxuICBwdWJsaWMgc2hvd0RhdGVwaWNrZXI6IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPiA9IG5ldyBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIHB1YmxpYyBzaG93VGltZXBpY2tlcjogT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+ID0gbmV3IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIHByaXZhdGUgZm9ybUNvbnRyb2xDaGFuZ2VWYWx1ZTogYW55O1xyXG4gIHByaXZhdGUgc2VsZWN0VGltZW91dDogYW55O1xyXG5cclxuICBwcml2YXRlIGFuc2ljaHRJbml0aWFsaXNpZXJ0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBmb3JtQ29udHJvbEFibz86IFN1YnNjcmlwdGlvbjtcclxuICAvKiogTnVyIGF1cyBkZW0gVmFsaWRhdG9yRmxvYXQgZGVzIENvbnRyb2xzIHVlYmVybm9tbWVuZSBOYWNoa29tbWFzdGVsbGVuIHdlcmRlbiBiZWltIENvbnRyb2wtV2VjaHNlbCBuZXUgZXJtaXR0ZWx0ICovXHJcbiAgcHJpdmF0ZSBtYXhEaWdpdHNBdXNWYWxpZGF0b3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgX3Bvc2l0aW9uczogQ29ubmVjdGVkUG9zaXRpb25bXSA9IFtcclxuICAgICAge1xyXG4gICAgICAgIG9yaWdpblg6ICdzdGFydCcsXHJcbiAgICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXHJcbiAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgICAgb3ZlcmxheVk6ICd0b3AnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgb3JpZ2luWDogJ2VuZCcsXHJcbiAgICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXHJcbiAgICAgICAgb3ZlcmxheVg6ICdlbmQnLFxyXG4gICAgICAgIG92ZXJsYXlZOiAndG9wJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG9yaWdpblg6ICdzdGFydCcsXHJcbiAgICAgICAgb3JpZ2luWTogJ3RvcCcsXHJcbiAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgICAgb3ZlcmxheVk6ICdib3R0b20nXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBvcmlnaW5YOiAnZW5kJyxcclxuICAgICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgICBvdmVybGF5WDogJ2VuZCcsXHJcbiAgICAgICAgb3ZlcmxheVk6ICdib3R0b20nXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuc2VsZWN0VGltZW91dCk7XHJcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpICYmIHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFaW4gZGVha3RpdmllcnRlcyBJbnB1dCBrYW5uIG5pY2h0IG1pdCBlaW5lbSBGb3JtQ29udHJvbCB2ZXJ3ZW5kZXQgd2VyZGVuLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm1heExlbmd0aCAhPT0gdW5kZWZpbmVkICYmIE51bWJlci5pc05hTih0aGlzLm1heExlbmd0aCkpIHtcclxuICAgICAgdGhpcy5tYXhMZW5ndGggPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX01BWF9MRU5HVEg7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5taW5Sb3dzICE9PSB1bmRlZmluZWQgJiYgTnVtYmVyLmlzTmFOKHRoaXMubWluUm93cykpIHtcclxuICAgICAgdGhpcy5taW5Sb3dzID0gTXJkSW5wdXRDb21wb25lbnQuREVGQVVMVF9NSU5fUk9XUztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1heFJvd3MgIT09IHVuZGVmaW5lZCAmJiBOdW1iZXIuaXNOYU4odGhpcy5tYXhSb3dzKSkge1xyXG4gICAgICB0aGlzLm1heFJvd3MgPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX01BWF9ST1dTO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGluZUhlaWdodCAhPT0gdW5kZWZpbmVkICYmIE51bWJlci5pc05hTih0aGlzLmxpbmVIZWlnaHQpKSB7XHJcbiAgICAgIHRoaXMubGluZUhlaWdodCA9IE1yZElucHV0Q29tcG9uZW50LkRFRkFVTFRfTElORV9IRUlHSFQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50ZXh0YXJlYSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLnRleHRBcmVhRWxlbWVudCkpIHtcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMubWF4TGVuZ3RoKSkge1xyXG4gICAgICAgIHRoaXMudGV4dEFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQubWF4TGVuZ3RoID0gdGhpcy5tYXhMZW5ndGg7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jYWxjdWxhdGVUZXh0QXJlYUhlaWdodCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb2xvciA9IHRoaXMuY29sb3IgfHwgQ29uZmlnVXRpbC5nZXRDb25maWcoKS5mb3JtRmllbGQ/LmlucHV0Py5jb2xvciB8fCAnIzAwMDAwMCc7XHJcblxyXG4gICAgaWYgKHRoaXMuYXV0b2ZvY3VzKSB7XHJcbiAgICAgIGlmICh0aGlzLmJhc2VJbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmJhc2VJbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnRleHRBcmVhRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMudGV4dEFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5kYXRlSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5kYXRlSW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy50aW1lSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy50aW1lSW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRhdGUgJiYgdGhpcy5yYW5nZVN0YXJ0KSB7XHJcbiAgICAgIHRoaXMudGV4dEVuZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVyIE92ZXJsYXktVXJzcHJ1bmcgKCNkYXRlSW5wdXQvI3RpbWVJbnB1dCBpbSAqbmdJZikgc3RlaHQgZXJzdCBuYWNoIGRlbSBlcnN0ZW4gUmVuZGVybiBmZXN0OyBvaG5lIGVybmV1dGVzXHJcbiAgICAvLyBSZW5kZXJuIHdpcmZ0IGRhcyBCaW5kaW5nIE5HMDEwMCwgc29iYWxkIGtlaW4gbXJkLWZvcm0tZmllbGQgKGxhYmVsUHJlc2VudCkgZGFzIEZlbGQgbmFjaHRyYWVnbGljaCBuZXUgcmVuZGVydFxyXG4gICAgaWYgKHRoaXMuZGF0ZSB8fCB0aGlzLnRpbWUpIHtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZm9ybUNvbnRyb2xCaW5kZW4oKTtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sLmNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICAgIHRoaXMuYW5zaWNodEluaXRpYWxpc2llcnQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMud2F0Y2godGhpcy5zaG93RGF0ZXBpY2tlci5jaGFuZ2VkLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoc2hvdzogYm9vbGVhbikgPT4ge1xyXG4gICAgICBpZiAoIXNob3cpIHtcclxuICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmx1cnJlZC5lbWl0KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSkpO1xyXG4gICAgdGhpcy53YXRjaCh0aGlzLnNob3dUaW1lcGlja2VyLmNoYW5nZWQsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKChzaG93OiBib29sZWFuKSA9PiB7XHJcbiAgICAgIGlmICghc2hvdykge1xyXG4gICAgICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ibHVycmVkLmVtaXQoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICAvKiogVWViZXJuaW1tdCBXZXJ0LCBWYWxpZGF0b3JlbiB1bmQgS29udmVydGllcnVuZyBkZXMgYWt0dWVsbGVuIENvbnRyb2xzIHVuZCBhYm9ubmllcnQgZGVzc2VuIEFlbmRlcnVuZ2VuLiAqL1xyXG4gIHByaXZhdGUgZm9ybUNvbnRyb2xCaW5kZW4oKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvcm1Db250cm9sQWJvPy51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5mb3JtQ29udHJvbEFibyA9IHVuZGVmaW5lZDtcclxuICAgIGlmICh0aGlzLm1heERpZ2l0c0F1c1ZhbGlkYXRvcikge1xyXG4gICAgICB0aGlzLm1heERpZ2l0cyA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5tYXhEaWdpdHNBdXNWYWxpZGF0b3IgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRlKSB7XHJcbiAgICAgIGxldCBkYXR1bVZhbGlkYXRvcjogSVZhbGlkYXRvcnx1bmRlZmluZWQgPSB0aGlzLmZvcm1Db250cm9sLnZhbGlkYXRvcnMuZmluZCgodmFsaWRhdG9yOiBJVmFsaWRhdG9yKSA9PiB2YWxpZGF0b3IgaW5zdGFuY2VvZiBWYWxpZGF0b3JEYXR1bSk7XHJcbiAgICAgIGlmICghVXRpbC5pc0RlZmluZWQoZGF0dW1WYWxpZGF0b3IpKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbC52YWxpZGF0ZVdpdGgoWy4uLnRoaXMuZm9ybUNvbnRyb2wudmFsaWRhdG9ycywgbmV3IFZhbGlkYXRvckRhdHVtKCldLCB7ZW1pdEV2ZW50OiBmYWxzZX0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubnVtYmVyKSB7XHJcbiAgICAgIGlmICghVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbC5jb252ZXJ0VG8pKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5jb252ZXJ0VG8gPSBUeXBlQ29udmVydGVyLnRvTnVtYmVyO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbC5zaG93QXMpKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5zaG93QXMgPSBUeXBlQ29udmVydGVyLmFzR2VybWFuRmxvYXQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKF8uaXNOdW1iZXIodGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlLCB0cnVlLCB7ZW1pdEV2ZW50OiBmYWxzZX0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wuY29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9ybUNvbnRyb2wuY29udHJvbC52YWx1ZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5hbnNpY2h0SW5pdGlhbGlzaWVydCkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZvcm1Db250cm9sQWJvID0gdGhpcy53YXRjaCh0aGlzLmZvcm1Db250cm9sLnZhbHVlQ2hhbmdlcywgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKCkgPT4gdGhpcy5mb3JtQ29udHJvbENoYW5nZWQoKSkpO1xyXG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLm1heERpZ2l0cykpIHtcclxuICAgICAgbGV0IGZsb2F0VmFsaWRhdG9yOiBWYWxpZGF0b3JGbG9hdCA9IHRoaXMuZm9ybUNvbnRyb2wudmFsaWRhdG9ycy5maW5kKCh2YWxpZGF0b3I6IElWYWxpZGF0b3IpID0+IHZhbGlkYXRvciBpbnN0YW5jZW9mIFZhbGlkYXRvckZsb2F0KSBhcyBWYWxpZGF0b3JGbG9hdDtcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKGZsb2F0VmFsaWRhdG9yKSAmJiBVdGlsLmlzRGVmaW5lZChmbG9hdFZhbGlkYXRvci5kaWdpdHNBZnRlcikpIHtcclxuICAgICAgICB0aGlzLm1heERpZ2l0cyA9IGZsb2F0VmFsaWRhdG9yLmRpZ2l0c0FmdGVyO1xyXG4gICAgICAgIHRoaXMubWF4RGlnaXRzQXVzVmFsaWRhdG9yID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1Db250cm9sQ2hhbmdlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRleHRhcmVhKSB7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLnRleHRBcmVhRWxlbWVudCkpIHtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVRleHRBcmVhSGVpZ2h0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sIS5jb250cm9sLnZhbHVlKSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtQ29udHJvbCEuY29udHJvbC52YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlucHV0KGV2ZW50OiBJbnB1dEV2ZW50KTogdm9pZCB7XHJcbiAgICBsZXQgdGFyZ2V0VmFsdWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgaWYgKHRoaXMudGV4dGFyZWEpIHtcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMudGV4dEFyZWFFbGVtZW50KSkge1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlVGV4dEFyZWFIZWlnaHQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICBsZXQgZGF0ZUlucHV0TWF0Y2ggPSBNcmRJbnB1dENvbXBvbmVudC5EQVRFX1JFR0VYX0lOUFVULnRlc3QodGFyZ2V0VmFsdWUpO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmZvcm1Db250cm9sQ2hhbmdlT25CbHVyKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZSh0YXJnZXRWYWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbENoYW5nZVZhbHVlID0gdGFyZ2V0VmFsdWU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmICh0aGlzLmRhdGUgJiYgZGF0ZUlucHV0TWF0Y2gpIHtcclxuICAgICAgICB0aGlzLmJhc2VJbnB1dEVsZW1lbnQhLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRhcmdldFZhbHVlO1xyXG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnB1dENoYW5nZS5lbWl0KHRhcmdldFZhbHVlKTtcclxuICAgIFxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRhdGVDaGFuZ2VkKGV2ZW50OiBNb21lbnQpOiB2b2lkIHtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICBpZiAoIXRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VPbkJsdXIpIHtcclxuICAgICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKGV2ZW50KTtcclxuICAgICAgICB0aGlzLmJhc2VJbnB1dEVsZW1lbnQhLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQoZXZlbnQuZm9ybWF0KCdERC5NTS5ZWVlZJykpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VWYWx1ZSA9IGV2ZW50O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gZXZlbnQuZm9ybWF0KCdERC5NTS5ZWVlZJyk7XHJcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgICAgdGhpcy5pbnB1dENoYW5nZS5lbWl0KGV2ZW50LmZvcm1hdCgnREQuTU0uWVlZWScpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNob3dEYXRlcGlja2VyLnZhbHVlID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5mb3JtQ29udHJvbENoYW5nZU9uQmx1cikge1xyXG4gICAgICB0aGlzLmJsdXIobnVsbCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdGltZUNoYW5nZWQoZXZlbnQ6IE1vbWVudCk6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIGlmICghdGhpcy5mb3JtQ29udHJvbENoYW5nZU9uQmx1cikge1xyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMuYmFzZUlucHV0RWxlbWVudCEubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRDaGFuZ2UuZW1pdChldmVudC5mb3JtYXQoJ0hIOm1tJykpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VWYWx1ZSA9IGV2ZW50O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gZXZlbnQuZm9ybWF0KCdISDptbScpO1xyXG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICAgIHRoaXMuaW5wdXRDaGFuZ2UuZW1pdChldmVudC5mb3JtYXQoJ0hIOm1tJykpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hvd1RpbWVwaWNrZXIudmFsdWUgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLmZvcm1Db250cm9sQ2hhbmdlT25CbHVyKSB7XHJcbiAgICAgIHRoaXMuYmx1cihudWxsKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbmFjaGtvbW1hc3RlbGxlbigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIFV0aWwuaXNEZWZpbmVkKHRoaXMubWF4RGlnaXRzKSA/IHRoaXMubWF4RGlnaXRzIDogOTk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZVRleHRBcmVhSGVpZ2h0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQhLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG4gICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQhLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID1cclxuICAgICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQhLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gKHRoaXMubWF4Um93cyAqIHRoaXMubGluZUhlaWdodCkgP1xyXG4gICAgICAgICh0aGlzLm1heFJvd3MgKiB0aGlzLmxpbmVIZWlnaHQpICsgMSArICdweCcgOlxyXG4gICAgICAgIHRoaXMudGV4dEFyZWFFbGVtZW50IS5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCA8ICh0aGlzLm1pblJvd3MgKiB0aGlzLmxpbmVIZWlnaHQpID9cclxuICAgICAgICAodGhpcy5taW5Sb3dzICogdGhpcy5saW5lSGVpZ2h0KSArIDEgKyAncHgnIDpcclxuICAgICAgICB0aGlzLnRleHRBcmVhRWxlbWVudCEubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlucHV0Q2xpY2tlZChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy50b3VjaGVkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmb2N1cyhldmVudDogRm9jdXNFdmVudHxudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgICB0aGlzLmZvY3VzZWQuZW1pdCgpO1xyXG4gICAgaWYgKHRoaXMuZGF0ZSAmJiBVdGlsLmlzRGVmaW5lZChldmVudCkgJiYgIXRoaXMucmVhZG9ubHkgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5iYXNlSW5wdXRFbGVtZW50KSkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5zZWxlY3RUaW1lb3V0KTtcclxuICAgICAgdGhpcy5zZWxlY3RUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmJhc2VJbnB1dEVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQ/LnNlbGVjdCgpLCAwKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBibHVyKGV2ZW50OiBGb2N1c0V2ZW50fG51bGwpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmZvcm1Db250cm9sQ2hhbmdlT25CbHVyICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VWYWx1ZSkpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbCEuc2V0VmFsdWUodGhpcy5mb3JtQ29udHJvbENoYW5nZVZhbHVlKTtcclxuICAgICAgbGV0IGVtaXRWYWx1ZTogYW55ID0gdGhpcy5mb3JtQ29udHJvbENoYW5nZVZhbHVlO1xyXG4gICAgICBpZiAodGhpcy5kYXRlICYmIG1vbWVudC5pc01vbWVudChlbWl0VmFsdWUpKSB7XHJcbiAgICAgICAgZW1pdFZhbHVlID0gZW1pdFZhbHVlLmZvcm1hdCgnREQuTU0uWVlZWScpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnRpbWUgJiYgbW9tZW50LmlzTW9tZW50KGVtaXRWYWx1ZSkpIHtcclxuICAgICAgICBlbWl0VmFsdWUgPSBlbWl0VmFsdWUuZm9ybWF0KCdISDptbScpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaW5wdXRDaGFuZ2UuZW1pdChlbWl0VmFsdWUpO1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sQ2hhbmdlVmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mb3JtQ29udHJvbCAmJiB0aGlzLmRhdGUpIHtcclxuICAgICAgY29uc3Qgcm9od2VydCA9IHRoaXMuZm9ybUNvbnRyb2wuY29udHJvbC52YWx1ZTtcclxuICAgICAgY29uc3QgbW9tZW50RGF0ZSA9IE1yZERhdHVtVXRpbC5wYXJzZShyb2h3ZXJ0KTtcclxuICAgICAgLy8gTnVyIHNjaHJlaWJlbiwgd2VubiBzaWNoIGRlciBhbmdlemVpZ3RlIFdlcnQgYWVuZGVydCAoei4gQi4gXCIxLjIuMjZcIiAtPiBcIjAxLjAyLjIwMjZcIik6IHNldFZhbHVlIGxvZXN0IHZhbHVlQ2hhbmdlcyBhdXMsXHJcbiAgICAgIC8vIHVuZCBtcmQtZm9ybS1maWVsZCBtYXJraWVydCBkYXMgRmVsZCBkYW5uIGFscyBnZWFlbmRlcnQsIG9id29obCBudXIgZGVyIEZva3VzIGdld2VjaHNlbHQgaGF0XHJcbiAgICAgIGNvbnN0IGFuemVpZ2UgPSBtb21lbnREYXRlICE9PSBudWxsICYmIHRoaXMuZm9ybUNvbnRyb2wuc2hvd0FzID8gdGhpcy5mb3JtQ29udHJvbC5zaG93QXMobW9tZW50RGF0ZSkgOiBtb21lbnREYXRlO1xyXG4gICAgICBpZiAobW9tZW50RGF0ZSAhPT0gbnVsbCAmJiBhbnplaWdlICE9PSByb2h3ZXJ0KSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShtb21lbnREYXRlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZm9ybUNvbnRyb2wgJiYgdGhpcy50aW1lICYmIHRoaXMuZm9ybUNvbnRyb2wudmFsdWUgJiYgdGhpcy5mb3JtQ29udHJvbC52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgaWYgKCFtb21lbnQuaXNNb21lbnQodGhpcy5mb3JtQ29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgICBsZXQgbW9tZW50VGltZSA9IG1vbWVudCh0aGlzLmZvcm1Db250cm9sLnZhbHVlLCAnSEg6bW0nKS55ZWFyKDIwMjApLm1vbnRoKDApLmRheSgxKS51dGModHJ1ZSk7XHJcbiAgICAgICAgaWYgKG1vbWVudFRpbWUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKG1vbWVudFRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuYmx1cnJlZC5lbWl0KCk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMuZGF0ZUlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNob3dQaWNrZXIoKTtcclxuICAgIGlmICh0aGlzLmRhdGUpIHtcclxuICAgICAgdGhpcy5zaG93RGF0ZXBpY2tlci52YWx1ZSA9ICF0aGlzLnNob3dEYXRlcGlja2VyLnZhbHVlO1xyXG4gICAgICBpZiAodGhpcy5zaG93RGF0ZXBpY2tlci52YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZm9jdXMobnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRpbWUpIHtcclxuICAgICAgdGhpcy5zaG93VGltZXBpY2tlci52YWx1ZSA9ICF0aGlzLnNob3dUaW1lcGlja2VyLnZhbHVlO1xyXG4gICAgICBpZiAodGhpcy5zaG93VGltZXBpY2tlci52YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZm9jdXMobnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttcmREYXRlVGltZVBpY2tlclRvZ2dsZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmREYXRlUGlja2VyVG9nZ2xlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgnbXJkRGF0ZVRpbWVQaWNrZXJUb2dnbGUnKSBwdWJsaWMgbXJkRGF0ZVRpbWVQaWNrZXJUb2dnbGU/OiBNcmRJbnB1dENvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcclxuICApIHt9XHJcblxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xvc2VzdCgnbXJkLWljb24nKSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gJzIwcHgnO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMjBweCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLm1yZERhdGVUaW1lUGlja2VyVG9nZ2xlKSkge1xyXG4gICAgICB0aGlzLm1yZERhdGVUaW1lUGlja2VyVG9nZ2xlLnRvZ2dsZUNsaWNrZWQoKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCI8aW5wdXQgI2Jhc2VJbnB1dFxyXG4gIChjbGljayk9XCJpbnB1dENsaWNrZWQoJGV2ZW50KVwiXHJcbiAgKGZvY3VzKT1cImZvY3VzKCRldmVudClcIlxyXG4gIChibHVyKT1cImJsdXIoJGV2ZW50KVwiXHJcbiAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAoaW5wdXQpPVwiaW5wdXQoJGV2ZW50KVwiXHJcbiAgW2Rpc2FibGVkXT1cImZvcm1Db250cm9sPy5kaXNhYmxlZCB8fCBkaXNhYmxlZFwiXHJcbiAgW3BsYWNlaG9sZGVyXT1cIiFsYWJlbFByZXNlbnQgfHwgaXNGb2N1c2VkIHx8IGxhYmVsT2JlbiA/IHBsYWNlaG9sZGVyIDogJydcIlxyXG4gIFtzdHlsZS5wb2ludGVyLWV2ZW50c109XCJyZWFkb25seSA/ICdub25lJyA6ICdhdXRvJ1wiXHJcbiAgW3N0eWxlLnRleHQtYWxpZ25dPVwidGV4dEVuZCA/ICdlbmQnIDogY2VudGVyZWQgPyAnY2VudGVyJyA6ICdzdGFydCdcIlxyXG4gIFtkZWNpbWFsTnVtYmVyXT1cIm51bWJlciB8fCBtYXhEaWdpdHMgfHwgbWF4RGlnaXRzID09PSAwXCIgW25hY2hrb21tYXN0ZWxsZW5dPVwibmFjaGtvbW1hc3RlbGxlblwiXHJcbiAgW2F0dHIuaW5wdXRtb2RlXT1cIm51bWJlciA/ICdkZWNpbWFsJyA6IG51bGxcIlxyXG4gIFt0aW1lSW5wdXRdPVwidGltZVwiXHJcbiAgKm5nSWY9XCIhdGV4dGFyZWFcIlxyXG4gID5cclxuXHJcbjx0ZXh0YXJlYSAjdGV4dEFyZWFcclxuICAoY2xpY2spPVwiaW5wdXRDbGlja2VkKCRldmVudClcIlxyXG4gIChmb2N1cyk9XCJmb2N1cygkZXZlbnQpXCJcclxuICAoYmx1cik9XCJibHVyKCRldmVudClcIlxyXG4gIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgKGlucHV0KT1cImlucHV0KCRldmVudClcIlxyXG4gIFtkaXNhYmxlZF09XCJmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWRcIlxyXG4gIFtwbGFjZWhvbGRlcl09XCIhbGFiZWxQcmVzZW50IHx8IGlzRm9jdXNlZCB8fCBsYWJlbE9iZW4gPyBwbGFjZWhvbGRlciA6ICcnXCJcclxuICBbc3R5bGUucG9pbnRlci1ldmVudHNdPVwicmVhZG9ubHkgPyAnbm9uZScgOiAnYXV0bydcIlxyXG4gICpuZ0lmPVwidGV4dGFyZWFcIlxyXG4gIHJvd3M9XCIxXCJcclxuICBbbmdTdHlsZV09XCJ7J2xpbmUtaGVpZ2h0JzogbGluZUhlaWdodCArICdweCd9XCJcclxuPjwvdGV4dGFyZWE+XHJcblxyXG5cclxuPGRpdiAjZGF0ZUlucHV0ICpuZ0lmPVwiZGF0ZVwiPjwvZGl2PlxyXG48ZGl2ICpuZ0lmPVwiZGF0ZSAmJiAhY3VzdG9tRGF0ZVRpbWVUb2dnbGUgJiYgIXJhbmdlU3RhcnQgJiYgIXJhbmdlRW5kXCIgPlxyXG4gIDxtcmQtYnV0dG9uIGljb24tYnV0dG9uIGZ1bGxJY29uIGRpYW1ldGVyPVwiMjRcIiBpY29uU2l6ZT1cIjE2XCIgKGNsaWNrKT1cInRvZ2dsZUNsaWNrZWQoKVwiIFtkaXNhYmxlZF09XCJmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWRcIj5cclxuICAgIDxtcmQtaWNvbiBpY29uPVwia2FsZW5kZXJcIiBjb2xvcj1cIiM0OTQ5NDlcIiBzaXplPVwiMTZcIj48L21yZC1pY29uPlxyXG4gIDwvbXJkLWJ1dHRvbj5cclxuPC9kaXY+XHJcblxyXG48ZGl2ICN0aW1lSW5wdXQgKm5nSWY9XCJ0aW1lXCI+PC9kaXY+XHJcbjxkaXYgKm5nSWY9XCJ0aW1lICYmICFjdXN0b21EYXRlVGltZVRvZ2dsZVwiPiAgXHJcbiAgPG1yZC1idXR0b24gaWNvbi1idXR0b24gZnVsbEljb24gZGlhbWV0ZXI9XCIyNFwiIGljb25TaXplPVwiMThcIiAoY2xpY2spPVwidG9nZ2xlQ2xpY2tlZCgpXCIgW2Rpc2FibGVkXT1cImZvcm1Db250cm9sPy5kaXNhYmxlZCB8fCBkaXNhYmxlZFwiPlxyXG4gICAgPHN2ZyBtcmQtaWNvbiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTIgMjFDMTYuOTcwNiAyMSAyMSAxNi45NzA2IDIxIDEyQzIxIDcuMDI5NDQgMTYuOTcwNiAzIDEyIDNDNy4wMjk0NCAzIDMgNy4wMjk0NCAzIDEyQzMgMTYuOTcwNiA3LjAyOTQ0IDIxIDEyIDIxWlwiIHN0cm9rZT1cIiMwMDAwMDBcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTIgNlYxMlwiIHN0cm9rZT1cIiMwMDAwMDBcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTYuMjQgMTYuMjRMMTIgMTJcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9tcmQtYnV0dG9uPlxyXG48L2Rpdj5cclxuXHJcbjxzcGFuIGNsYXNzPVwidW5mb2N1c2VkT3ZlcmxheVwiICpuZ0lmPVwiIWlzRm9jdXNlZFwiPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIlt1bmZvY3VzZWRPdmVybGF5XVwiPjwvbmctY29udGVudD5cclxuPC9zcGFuPlxyXG5cclxuPG5nLXRlbXBsYXRlXHJcbiAgY2RrLWNvbm5lY3RlZC1vdmVybGF5XHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcF09XCJ0cnVlXCJcclxuICBjZGtDb25uZWN0ZWRPdmVybGF5QmFja2Ryb3BDbGFzcz1cImNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJkYXRlSW5wdXRFbGVtZW50XCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwic2hvd0RhdGVwaWNrZXIudmFsdWVcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cIl9wb3NpdGlvbnNcIlxyXG4gIChiYWNrZHJvcENsaWNrKT1cInNob3dEYXRlcGlja2VyLnZhbHVlID0gZmFsc2U7XCJcclxuPlxyXG4gIDxtcmQtZGF0ZXBpY2tlclxyXG4gICAgW2RhdGVdPVwidmFsdWVcIlxyXG4gICAgKGRhdGVDaGFuZ2VkKT1cImRhdGVDaGFuZ2VkKCRldmVudClcIlxyXG4gID48L21yZC1kYXRlcGlja2VyPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlXHJcbiAgY2RrLWNvbm5lY3RlZC1vdmVybGF5XHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcF09XCJ0cnVlXCJcclxuICBjZGtDb25uZWN0ZWRPdmVybGF5QmFja2Ryb3BDbGFzcz1cImNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJ0aW1lSW5wdXRFbGVtZW50XCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwic2hvd1RpbWVwaWNrZXIudmFsdWVcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cIl9wb3NpdGlvbnNcIlxyXG4gIChiYWNrZHJvcENsaWNrKT1cInNob3dUaW1lcGlja2VyLnZhbHVlID0gZmFsc2U7XCJcclxuPlxyXG4gIDxtcmQtdGltZXBpY2tlclxyXG4gICAgW3RpbWVdPVwidmFsdWVcIlxyXG4gICAgKHRpbWVDaGFuZ2VkKT1cInRpbWVDaGFuZ2VkKCRldmVudClcIlxyXG4gID48L21yZC10aW1lcGlja2VyPlxyXG48L25nLXRlbXBsYXRlPiJdfQ==