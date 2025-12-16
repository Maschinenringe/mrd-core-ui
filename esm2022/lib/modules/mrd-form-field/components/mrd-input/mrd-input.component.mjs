import { ChangeDetectionStrategy, Component, Directive, EventEmitter, HostListener, Input, Output, ViewChild, booleanAttribute, numberAttribute } from '@angular/core';
import moment from 'moment';
import { BaseObject, ObservableValue, SubscriptionHandler, Util, ValidatorFloat } from 'mrd-core';
import { ConfigUtil } from '../../../../common/util/config.util';
import { colorAttribute } from '../../../../common/transforms/color-transform';
import * as _ from 'underscore';
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
    i0.ɵɵproperty("value", ctx_r0.value)("disabled", (ctx_r0.formControl == null ? null : ctx_r0.formControl.disabled) || ctx_r0.disabled)("placeholder", !ctx_r0.labelPresent || ctx_r0.isFocused ? ctx_r0.placeholder : "")("decimalNumber", ctx_r0.maxDigits || ctx_r0.maxDigits === 0)("nachkommastellen", ctx_r0.maxDigits)("timeInput", ctx_r0.time);
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
    i0.ɵɵlistener("click", function MrdInputComponent_div_3_Template_mrd_button_click_1_listener() { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r22.showDatepicker.value = !ctx_r22.showDatepicker.value); });
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
    i0.ɵɵlistener("click", function MrdInputComponent_div_5_Template_mrd_button_click_1_listener() { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r25.showTimepicker.value = !ctx_r25.showTimepicker.value); });
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
    static DATE_REGEX = /(\d{2}).(\d{2}).(\d{4})/;
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
    labelPresent = false;
    isFocused = false;
    showDatepicker = new ObservableValue(false);
    showTimepicker = new ObservableValue(false);
    formControlChangeValue;
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
        if (this.textarea && Util.isDefined(this.textAreaElement) && Util.isDefined(this.maxLength)) {
            this.textAreaElement.nativeElement.maxLength = this.maxLength;
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
        if (this.formControl && this.date && this.formControl.value && this.formControl.value !== '') {
            if (!moment.isMoment(this.formControl.value)) {
                let momentDate = moment(this.formControl.value, 'DD.MM.YYYY').utc(true);
                if (momentDate.isValid()) {
                    this.formControl.setValue(momentDate);
                }
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
            this.showDatepicker.value = true;
        }
        if (this.time) {
            this.showTimepicker.value = true;
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
        } }, inputs: { formControl: ["mrdFormControl", "formControl"], placeholder: "placeholder", value: "value", maxLength: ["maxLength", "maxLength", numberAttribute], minRows: ["minRows", "minRows", numberAttribute], maxRows: ["maxRows", "maxRows", numberAttribute], lineHeight: ["lineHeight", "lineHeight", numberAttribute], disabled: ["disabled", "disabled", booleanAttribute], readonly: ["readonly", "readonly", booleanAttribute], required: ["required", "required", booleanAttribute], textarea: ["textarea", "textarea", booleanAttribute], date: ["date", "date", booleanAttribute], rangeStart: ["rangeStart", "rangeStart", booleanAttribute], rangeEnd: ["rangeEnd", "rangeEnd", booleanAttribute], time: ["time", "time", booleanAttribute], customDateTimeToggle: ["customDateTimeToggle", "customDateTimeToggle", booleanAttribute], validateOnBlur: ["validateOnBlur", "validateOnBlur", booleanAttribute], formControlChangeOnBlur: ["formControlChangeOnBlur", "formControlChangeOnBlur", booleanAttribute], color: ["color", "color", colorAttribute], centered: ["text-centered", "centered", booleanAttribute], textEnd: ["text-end", "textEnd", booleanAttribute], datePickerToggle: "datePickerToggle", maxDigits: "maxDigits", autofocus: ["autofocus", "autofocus", booleanAttribute] }, outputs: { touched: "touched", focused: "focused", blurred: "blurred", valueChange: "valueChange", inputChange: "inputChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c6, decls: 9, vars: 15, consts: [[3, "value", "disabled", "placeholder", "pointer-events", "text-align", "color", "decimalNumber", "nachkommastellen", "timeInput", "click", "focus", "blur", "input", 4, "ngIf"], ["rows", "1", 3, "value", "disabled", "placeholder", "pointer-events", "color", "ngStyle", "click", "focus", "blur", "input", 4, "ngIf"], [4, "ngIf"], ["class", "unfocusedOverlay", 4, "ngIf"], ["cdk-connected-overlay", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "backdropClick"], [3, "value", "disabled", "placeholder", "decimalNumber", "nachkommastellen", "timeInput", "click", "focus", "blur", "input"], ["baseInput", ""], ["rows", "1", 3, "value", "disabled", "placeholder", "ngStyle", "click", "focus", "blur", "input"], ["textArea", ""], ["dateInput", ""], ["icon-button", "", "fullIcon", "", "diameter", "24", "iconSize", "16", 3, "disabled", "click"], ["mrd-icon", "", "xmlns", "http://www.w3.org/2000/svg", "width", "100%", "height", "100%", "viewBox", "0 0 14.986 17.127", "fit", "", "preserveAspectRatio", "xMidYMid meet", "focusable", "false"], ["d", "M14.585,5.352H.4a.4.4,0,0,1-.4-.4v-1.2A1.606,1.606,0,0,1,1.606,2.141H3.211V.4a.4.4,0,0,1,.4-.4H4.951a.4.4,0,0,1,.4.4V2.141H9.634V.4a.4.4,0,0,1,.4-.4h1.338a.4.4,0,0,1,.4.4V2.141h1.606a1.606,1.606,0,0,1,1.606,1.606v1.2A.4.4,0,0,1,14.585,5.352ZM.4,6.423H14.585a.4.4,0,0,1,.4.4v8.7a1.606,1.606,0,0,1-1.606,1.606H1.606A1.606,1.606,0,0,1,0,15.522v-8.7A.4.4,0,0,1,.4,6.423Zm10.571,4.683a.4.4,0,0,0-.4-.4H8.564V8.7a.4.4,0,0,0-.4-.4H6.824a.4.4,0,0,0-.4.4V10.7H4.416a.4.4,0,0,0-.4.4v1.338a.4.4,0,0,0,.4.4H6.423v2.007a.4.4,0,0,0,.4.4H8.162a.4.4,0,0,0,.4-.4V12.845h2.007a.4.4,0,0,0,.4-.4Z", "transform", "translate(0 0)", 1, "a"], ["timeInput", ""], ["icon-button", "", "fullIcon", "", "diameter", "24", "iconSize", "18", 3, "disabled", "click"], ["mrd-icon", "", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z", "stroke", "#000000", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 6V12", "stroke", "#000000", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M16.24 16.24L12 12", "stroke", "#000000", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "unfocusedOverlay"], [3, "date", "dateChanged"], [3, "time", "timeChanged"]], template: function MrdInputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c5);
            i0.ɵɵtemplate(0, MrdInputComponent_input_0_Template, 2, 12, "input", 0);
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
        args: [{ selector: 'mrd-input', changeDetection: ChangeDetectionStrategy.OnPush, template: "<input #baseInput\r\n  (click)=\"inputClicked($event)\"\r\n  (focus)=\"focus($event)\"\r\n  (blur)=\"blur($event)\"\r\n  [value]=\"value\"\r\n  (input)=\"input($event)\"\r\n  [disabled]=\"formControl?.disabled || disabled\"\r\n  [placeholder]=\"!labelPresent || isFocused ? placeholder : ''\"\r\n  [style.pointer-events]=\"readonly ? 'none' : 'auto'\"\r\n  [style.text-align]=\"textEnd ? 'end' : centered ? 'center' : 'start'\"\r\n  [style.color]=\"formControl?.disabled || disabled ? disabledColor : color\"\r\n  [decimalNumber]=\"maxDigits || maxDigits === 0\" [nachkommastellen]=\"maxDigits\"\r\n  [timeInput]=\"time\"\r\n  *ngIf=\"!textarea\"\r\n  >\r\n\r\n<textarea #textArea\r\n  (click)=\"inputClicked($event)\"\r\n  (focus)=\"focus($event)\"\r\n  (blur)=\"blur($event)\"\r\n  [value]=\"value\"\r\n  (input)=\"input($event)\"\r\n  [disabled]=\"formControl?.disabled || disabled\"\r\n  [placeholder]=\"!labelPresent || isFocused ? placeholder : ''\"\r\n  [style.pointer-events]=\"readonly ? 'none' : 'auto'\"\r\n  [style.color]=\"formControl?.disabled || disabled ? disabledColor : color\"\r\n  *ngIf=\"textarea\"\r\n  rows=\"1\"\r\n  [ngStyle]=\"{'line-height': lineHeight + 'px'}\"\r\n></textarea>\r\n\r\n\r\n<div #dateInput *ngIf=\"date\"></div>\r\n<div *ngIf=\"date && !customDateTimeToggle && !rangeStart && !rangeEnd\" >\r\n  <mrd-button icon-button fullIcon diameter=\"24\" iconSize=\"16\" (click)=\"showDatepicker.value = !showDatepicker.value\" [disabled]=\"formControl?.disabled || disabled\">\r\n    <svg mrd-icon xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 14.986 17.127\" fit=\"\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\">\r\n      <defs><style>.a{fill:#494949;}</style></defs>\r\n      <path class=\"a\" d=\"M14.585,5.352H.4a.4.4,0,0,1-.4-.4v-1.2A1.606,1.606,0,0,1,1.606,2.141H3.211V.4a.4.4,0,0,1,.4-.4H4.951a.4.4,0,0,1,.4.4V2.141H9.634V.4a.4.4,0,0,1,.4-.4h1.338a.4.4,0,0,1,.4.4V2.141h1.606a1.606,1.606,0,0,1,1.606,1.606v1.2A.4.4,0,0,1,14.585,5.352ZM.4,6.423H14.585a.4.4,0,0,1,.4.4v8.7a1.606,1.606,0,0,1-1.606,1.606H1.606A1.606,1.606,0,0,1,0,15.522v-8.7A.4.4,0,0,1,.4,6.423Zm10.571,4.683a.4.4,0,0,0-.4-.4H8.564V8.7a.4.4,0,0,0-.4-.4H6.824a.4.4,0,0,0-.4.4V10.7H4.416a.4.4,0,0,0-.4.4v1.338a.4.4,0,0,0,.4.4H6.423v2.007a.4.4,0,0,0,.4.4H8.162a.4.4,0,0,0,.4-.4V12.845h2.007a.4.4,0,0,0,.4-.4Z\" transform=\"translate(0 0)\"></path>\r\n    </svg>\r\n  </mrd-button>\r\n</div>\r\n\r\n<div #timeInput *ngIf=\"time\"></div>\r\n<div *ngIf=\"time && !customDateTimeToggle\">  \r\n  <mrd-button icon-button fullIcon diameter=\"24\" iconSize=\"18\" (click)=\"showTimepicker.value = !showTimepicker.value\" [disabled]=\"formControl?.disabled || disabled\">\r\n    <svg mrd-icon viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <path d=\"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z\" stroke=\"#000000\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n      <path d=\"M12 6V12\" stroke=\"#000000\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n      <path d=\"M16.24 16.24L12 12\" stroke=\"#000000\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    </svg>\r\n  </mrd-button>\r\n</div>\r\n\r\n<span class=\"unfocusedOverlay\" *ngIf=\"!isFocused\">\r\n  <ng-content select=\"[unfocusedOverlay]\"></ng-content>\r\n</span>\r\n\r\n<ng-template\r\n  cdk-connected-overlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\r\n  [cdkConnectedOverlayOrigin]=\"dateInputElement\"\r\n  [cdkConnectedOverlayOpen]=\"showDatepicker.value\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  (backdropClick)=\"showDatepicker.value = false\"\r\n>\r\n  <mrd-datepicker\r\n    [date]=\"value\"\r\n    (dateChanged)=\"dateChanged($event)\"\r\n  ></mrd-datepicker>\r\n</ng-template>\r\n\r\n<ng-template\r\n  cdk-connected-overlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\r\n  [cdkConnectedOverlayOrigin]=\"timeInputElement\"\r\n  [cdkConnectedOverlayOpen]=\"showTimepicker.value\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  (backdropClick)=\"showTimepicker.value = false\"\r\n>\r\n  <mrd-timepicker\r\n    [time]=\"value\"\r\n    (timeChanged)=\"timeChanged($event)\"\r\n  ></mrd-timepicker>\r\n</ng-template>", styles: [":host{width:100%;display:flex;flex-direction:row}input{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}input[disabled]{color:#afa6a6}textarea{outline:unset;background-color:transparent;width:100%;padding:0 2px;line-height:1.5em}textarea[disabled]{color:#afa6a6}.unfocusedOverlay{position:absolute;width:100%;height:1.5em;outline:none;padding:1px 8px 0;display:flex;flex-direction:column;justify-content:center;pointer-events:none}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZm9ybS1maWVsZC9jb21wb25lbnRzL21yZC1pbnB1dC9tcmQtaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWlucHV0L21yZC1pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBUSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNOLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQXlCLFVBQVUsRUFBYyxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNySSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQy9FLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNOaEMsbUNBY0c7SUFiRCx1S0FBUyxlQUFBLDRCQUFvQixDQUFBLElBQUMsMEpBQ3JCLGVBQUEscUJBQWEsQ0FBQSxJQURRLHdKQUV0QixlQUFBLG9CQUFZLENBQUEsSUFGVSwwSkFJckIsZUFBQSxxQkFBYSxDQUFBLElBSlE7SUFEaEMsaUJBY0c7OztJQU5ELG1FQUFtRCw2RUFBQSxxSUFBQTtJQUpu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dUJBQXVCLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDOUM7SUFDSCxDQUFDO2dHQXRCVSxtQkFBbUI7NEZBQW5CLG1CQUFtQjswR0FBbkIsbUJBQWU7Ozt1RkFBZixtQkFBbUI7Y0FIL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7NkRBRzBDLHVCQUF1QjtrQkFBL0QsS0FBSzttQkFBQyx5QkFBeUI7WUFnQnpCLE9BQU87a0JBRGIsWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3QsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkLCBib29sZWFuQXR0cmlidXRlLCBudW1iZXJBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wsIEJhc2VPYmplY3QsIElWYWxpZGF0b3IsIE9ic2VydmFibGVWYWx1ZSwgU3Vic2NyaXB0aW9uSGFuZGxlciwgVXRpbCwgVmFsaWRhdG9yRmxvYXQgfSBmcm9tICdtcmQtY29yZSc7XHJcbmltcG9ydCB7IENvbmZpZ1V0aWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb25maWcudXRpbCc7XHJcbmltcG9ydCB7IGNvbG9yQXR0cmlidXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvY29sb3ItdHJhbnNmb3JtJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuaW1wb3J0IHsgTXJkQmFzZUNvbG9yVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vbW9kZWwvY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgQ29ubmVjdGVkUG9zaXRpb24gfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtcmQtaW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmRJbnB1dENvbXBvbmVudCBleHRlbmRzIEJhc2VPYmplY3QgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9NQVhfTEVOR1RIOiBudW1iZXIgPSA1MTI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9NSU5fUk9XUzogbnVtYmVyID0gMTtcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01BWF9ST1dTOiBudW1iZXIgPSAyO1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTElORV9IRUlHSFQ6IG51bWJlciA9IDI0O1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBEQVRFX1JFR0VYOiBSZWdFeHAgPSAvKFxcZHsyfSkuKFxcZHsyfSkuKFxcZHs0fSkvO1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERBVEVfUkVHRVhfSU5QVVQ6IFJlZ0V4cCA9IC8oXFxkezR9KS0oXFxkezJ9KS0oXFxkezJ9KS87XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2Jhc2VJbnB1dCcpIHB1YmxpYyBiYXNlSW5wdXRFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoJ3RleHRBcmVhJykgcHVibGljIHRleHRBcmVhRWxlbWVudDogRWxlbWVudFJlZjxIVE1MVGV4dEFyZWFFbGVtZW50PjtcclxuICBAVmlld0NoaWxkKCdkYXRlSW5wdXQnKSBwdWJsaWMgZGF0ZUlucHV0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuICBAVmlld0NoaWxkKCd0aW1lSW5wdXQnKSBwdWJsaWMgdGltZUlucHV0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuXHJcbiAgQElucHV0KCdtcmRGb3JtQ29udHJvbCcpIGZvcm1Db250cm9sOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2w7XHJcbiAgQElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnICc7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgbWF4TGVuZ3RoOiBudW1iZXI7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBtaW5Sb3dzOiBudW1iZXIgPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX01JTl9ST1dTO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgbWF4Um93czogbnVtYmVyID0gTXJkSW5wdXRDb21wb25lbnQuREVGQVVMVF9NQVhfUk9XUztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgcHVibGljIGxpbmVIZWlnaHQ6IG51bWJlciA9IE1yZElucHV0Q29tcG9uZW50LkRFRkFVTFRfTElORV9IRUlHSFQ7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHRleHRhcmVhOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHJhbmdlU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyByYW5nZUVuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHRpbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tRGF0ZVRpbWVUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgdmFsaWRhdGVPbkJsdXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBmb3JtQ29udHJvbENoYW5nZU9uQmx1cjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbiAgcHVibGljIGdldCBjb2xvcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xyXG4gIH1cclxuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe2FsaWFzOiAndGV4dC1jZW50ZXJlZCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgY2VudGVyZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2NlbnRlcmVkID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbiAgcHVibGljIGdldCBjZW50ZXJlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9jZW50ZXJlZDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfY2VudGVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHthbGlhczogJ3RleHQtZW5kJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNldCB0ZXh0RW5kKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl90ZXh0RW5kID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbiAgcHVibGljIGdldCB0ZXh0RW5kKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHRFbmQ7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3RleHRFbmQ6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgZGF0ZVBpY2tlclRvZ2dsZTogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBtYXhEaWdpdHM6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgYXV0b2ZvY3VzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSB0b3VjaGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIGZvY3VzZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgYmx1cnJlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIGlucHV0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBwdWJsaWMgZGlzYWJsZWRDb2xvcjogc3RyaW5nID0gXy5pc09iamVjdChDb25maWdVdGlsLmdldENvbmZpZygpLmJhc2VDb2xvcnMuZGlzYWJsZWQpID8gKENvbmZpZ1V0aWwuZ2V0Q29uZmlnKCkuYmFzZUNvbG9ycy5kaXNhYmxlZCBhcyBNcmRCYXNlQ29sb3JUaGVtZSkudGV4dCA6IChDb25maWdVdGlsLmdldENvbmZpZygpLmJhc2VDb2xvcnMuZGlzYWJsZWQgYXMgc3RyaW5nKSB8fCAnI2FmYTZhNic7XHJcbiAgcHVibGljIGxhYmVsUHJlc2VudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpc0ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBcclxuICBwdWJsaWMgc2hvd0RhdGVwaWNrZXI6IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPiA9IG5ldyBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIHB1YmxpYyBzaG93VGltZXBpY2tlcjogT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+ID0gbmV3IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIHByaXZhdGUgZm9ybUNvbnRyb2xDaGFuZ2VWYWx1ZTogYW55O1xyXG5cclxuICBfcG9zaXRpb25zOiBDb25uZWN0ZWRQb3NpdGlvbltdID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcclxuICAgICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcclxuICAgICAgICBvdmVybGF5WTogJ3RvcCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBvcmlnaW5YOiAnZW5kJyxcclxuICAgICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgICBvdmVybGF5WDogJ2VuZCcsXHJcbiAgICAgICAgb3ZlcmxheVk6ICd0b3AnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcclxuICAgICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcclxuICAgICAgICBvdmVybGF5WTogJ2JvdHRvbSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG9yaWdpblg6ICdlbmQnLFxyXG4gICAgICAgIG9yaWdpblk6ICd0b3AnLFxyXG4gICAgICAgIG92ZXJsYXlYOiAnZW5kJyxcclxuICAgICAgICBvdmVybGF5WTogJ2JvdHRvbSdcclxuICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpICYmIHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFaW4gZGVha3RpdmllcnRlcyBJbnB1dCBrYW5uIG5pY2h0IG1pdCBlaW5lbSBGb3JtQ29udHJvbCB2ZXJ3ZW5kZXQgd2VyZGVuLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm1heExlbmd0aCAhPT0gdW5kZWZpbmVkICYmIE51bWJlci5pc05hTih0aGlzLm1heExlbmd0aCkpIHtcclxuICAgICAgdGhpcy5tYXhMZW5ndGggPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX01BWF9MRU5HVEg7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5taW5Sb3dzICE9PSB1bmRlZmluZWQgJiYgTnVtYmVyLmlzTmFOKHRoaXMubWluUm93cykpIHtcclxuICAgICAgdGhpcy5taW5Sb3dzID0gTXJkSW5wdXRDb21wb25lbnQuREVGQVVMVF9NSU5fUk9XUztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1heFJvd3MgIT09IHVuZGVmaW5lZCAmJiBOdW1iZXIuaXNOYU4odGhpcy5tYXhSb3dzKSkge1xyXG4gICAgICB0aGlzLm1heFJvd3MgPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX01BWF9ST1dTO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGluZUhlaWdodCAhPT0gdW5kZWZpbmVkICYmIE51bWJlci5pc05hTih0aGlzLmxpbmVIZWlnaHQpKSB7XHJcbiAgICAgIHRoaXMubGluZUhlaWdodCA9IE1yZElucHV0Q29tcG9uZW50LkRFRkFVTFRfTElORV9IRUlHSFQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50ZXh0YXJlYSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLnRleHRBcmVhRWxlbWVudCkgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5tYXhMZW5ndGgpKSB7XHJcbiAgICAgIHRoaXMudGV4dEFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQubWF4TGVuZ3RoID0gdGhpcy5tYXhMZW5ndGg7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlVGV4dEFyZWFIZWlnaHQoKTtcclxuICAgIH1cclxuICAgIHRoaXMuY29sb3IgPSB0aGlzLmNvbG9yIHx8IENvbmZpZ1V0aWwuZ2V0Q29uZmlnKCkuZm9ybUZpZWxkPy5pbnB1dD8uY29sb3IgfHwgJyMwMDAwMDAnO1xyXG5cclxuICAgIGlmICh0aGlzLmF1dG9mb2N1cykge1xyXG4gICAgICBpZiAodGhpcy5iYXNlSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5iYXNlSW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy50ZXh0QXJlYUVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZGF0ZUlucHV0RWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZGF0ZUlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMudGltZUlucHV0RWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMudGltZUlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRlICYmIHRoaXMucmFuZ2VTdGFydCkge1xyXG4gICAgICB0aGlzLnRleHRFbmQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sLmNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmZvcm1Db250cm9sLmNvbnRyb2wudmFsdWU7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgdGhpcy53YXRjaCh0aGlzLmZvcm1Db250cm9sLnZhbHVlQ2hhbmdlcywgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKCkgPT4gdGhpcy5mb3JtQ29udHJvbENoYW5nZWQoKSkpO1xyXG4gICAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKHRoaXMubWF4RGlnaXRzKSkge1xyXG4gICAgICAgIGxldCBmbG9hdFZhbGlkYXRvcjogVmFsaWRhdG9yRmxvYXQgPSB0aGlzLmZvcm1Db250cm9sLnZhbGlkYXRvcnMuZmluZCgodmFsaWRhdG9yOiBJVmFsaWRhdG9yKSA9PiB2YWxpZGF0b3IgaW5zdGFuY2VvZiBWYWxpZGF0b3JGbG9hdCkgYXMgVmFsaWRhdG9yRmxvYXQ7XHJcbiAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKGZsb2F0VmFsaWRhdG9yKSAmJiBVdGlsLmlzRGVmaW5lZChmbG9hdFZhbGlkYXRvci5kaWdpdHNBZnRlcikpIHtcclxuICAgICAgICAgIHRoaXMubWF4RGlnaXRzID0gZmxvYXRWYWxpZGF0b3IuZGlnaXRzQWZ0ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1Db250cm9sQ2hhbmdlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRleHRhcmVhKSB7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLnRleHRBcmVhRWxlbWVudCkpIHtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVRleHRBcmVhSGVpZ2h0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sLmNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmZvcm1Db250cm9sLmNvbnRyb2wudmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgIH1cclxuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbnB1dChldmVudDogSW5wdXRFdmVudCk6IHZvaWQge1xyXG4gICAgbGV0IHRhcmdldFZhbHVlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIGlmICh0aGlzLnRleHRhcmVhKSB7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLnRleHRBcmVhRWxlbWVudCkpIHtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVRleHRBcmVhSGVpZ2h0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgbGV0IGRhdGVJbnB1dE1hdGNoID0gTXJkSW5wdXRDb21wb25lbnQuREFURV9SRUdFWF9JTlBVVC50ZXN0KHRhcmdldFZhbHVlKTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5mb3JtQ29udHJvbENoYW5nZU9uQmx1cikge1xyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUodGFyZ2V0VmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VWYWx1ZSA9IHRhcmdldFZhbHVlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAodGhpcy5kYXRlICYmIGRhdGVJbnB1dE1hdGNoKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlSW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRhcmdldFZhbHVlO1xyXG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnB1dENoYW5nZS5lbWl0KHRhcmdldFZhbHVlKTtcclxuICAgIFxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRhdGVDaGFuZ2VkKGV2ZW50OiBNb21lbnQpOiB2b2lkIHtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICBpZiAoIXRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VPbkJsdXIpIHtcclxuICAgICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKGV2ZW50KTtcclxuICAgICAgICB0aGlzLmJhc2VJbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRDaGFuZ2UuZW1pdChldmVudC5mb3JtYXQoJ0RELk1NLllZWVknKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbENoYW5nZVZhbHVlID0gZXZlbnQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBldmVudC5mb3JtYXQoJ0RELk1NLllZWVknKTtcclxuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQoZXZlbnQuZm9ybWF0KCdERC5NTS5ZWVlZJykpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hvd0RhdGVwaWNrZXIudmFsdWUgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLmZvcm1Db250cm9sQ2hhbmdlT25CbHVyKSB7XHJcbiAgICAgIHRoaXMuYmx1cihudWxsKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0aW1lQ2hhbmdlZChldmVudDogTW9tZW50KTogdm9pZCB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgaWYgKCF0aGlzLmZvcm1Db250cm9sQ2hhbmdlT25CbHVyKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShldmVudCk7XHJcbiAgICAgICAgdGhpcy5iYXNlSW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQoZXZlbnQuZm9ybWF0KCdISDptbScpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmZvcm1Db250cm9sQ2hhbmdlVmFsdWUgPSBldmVudDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IGV2ZW50LmZvcm1hdCgnSEg6bW0nKTtcclxuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQoZXZlbnQuZm9ybWF0KCdISDptbScpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNob3dUaW1lcGlja2VyLnZhbHVlID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5mb3JtQ29udHJvbENoYW5nZU9uQmx1cikge1xyXG4gICAgICB0aGlzLmJsdXIobnVsbCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZVRleHRBcmVhSGVpZ2h0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcbiAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9XHJcbiAgICAgIHRoaXMudGV4dEFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gKHRoaXMubWF4Um93cyAqIHRoaXMubGluZUhlaWdodCkgP1xyXG4gICAgICAgICh0aGlzLm1heFJvd3MgKiB0aGlzLmxpbmVIZWlnaHQpICsgJ3B4JyA6XHJcbiAgICAgICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgPCAodGhpcy5taW5Sb3dzICogdGhpcy5saW5lSGVpZ2h0KSA/XHJcbiAgICAgICAgKHRoaXMubWluUm93cyAqIHRoaXMubGluZUhlaWdodCkgKyAncHgnIDpcclxuICAgICAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5wdXRDbGlja2VkKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnRvdWNoZWQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgICB0aGlzLmZvY3VzZWQuZW1pdCgpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmZvcm1Db250cm9sQ2hhbmdlT25CbHVyICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VWYWx1ZSkpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmZvcm1Db250cm9sQ2hhbmdlVmFsdWUpO1xyXG4gICAgICBsZXQgZW1pdFZhbHVlOiBhbnkgPSB0aGlzLmZvcm1Db250cm9sQ2hhbmdlVmFsdWU7XHJcbiAgICAgIGlmICh0aGlzLmRhdGUgJiYgbW9tZW50LmlzTW9tZW50KGVtaXRWYWx1ZSkpIHtcclxuICAgICAgICBlbWl0VmFsdWUgPSBlbWl0VmFsdWUuZm9ybWF0KCdERC5NTS5ZWVlZJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMudGltZSAmJiBtb21lbnQuaXNNb21lbnQoZW1pdFZhbHVlKSkge1xyXG4gICAgICAgIGVtaXRWYWx1ZSA9IGVtaXRWYWx1ZS5mb3JtYXQoJ0hIOm1tJyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pbnB1dENoYW5nZS5lbWl0KGVtaXRWYWx1ZSk7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VWYWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZvcm1Db250cm9sICYmIHRoaXMuZGF0ZSAmJiB0aGlzLmZvcm1Db250cm9sLnZhbHVlICYmIHRoaXMuZm9ybUNvbnRyb2wudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIGlmICghbW9tZW50LmlzTW9tZW50KHRoaXMuZm9ybUNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgICAgbGV0IG1vbWVudERhdGUgPSBtb21lbnQodGhpcy5mb3JtQ29udHJvbC52YWx1ZSwgJ0RELk1NLllZWVknKS51dGModHJ1ZSk7XHJcbiAgICAgICAgaWYgKG1vbWVudERhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKG1vbWVudERhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZm9ybUNvbnRyb2wgJiYgdGhpcy50aW1lICYmIHRoaXMuZm9ybUNvbnRyb2wudmFsdWUgJiYgdGhpcy5mb3JtQ29udHJvbC52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgaWYgKCFtb21lbnQuaXNNb21lbnQodGhpcy5mb3JtQ29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgICBsZXQgbW9tZW50VGltZSA9IG1vbWVudCh0aGlzLmZvcm1Db250cm9sLnZhbHVlLCAnSEg6bW0nKS55ZWFyKDIwMjApLm1vbnRoKDApLmRheSgxKS51dGModHJ1ZSk7XHJcbiAgICAgICAgaWYgKG1vbWVudFRpbWUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKG1vbWVudFRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuYmx1cnJlZC5lbWl0KCk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMuZGF0ZUlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNob3dQaWNrZXIoKTtcclxuICAgIGlmICh0aGlzLmRhdGUpIHtcclxuICAgICAgdGhpcy5zaG93RGF0ZXBpY2tlci52YWx1ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50aW1lKSB7XHJcbiAgICAgIHRoaXMuc2hvd1RpbWVwaWNrZXIudmFsdWUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW21yZERhdGVUaW1lUGlja2VyVG9nZ2xlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZERhdGVQaWNrZXJUb2dnbGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQElucHV0KCdtcmREYXRlVGltZVBpY2tlclRvZ2dsZScpIHB1YmxpYyBtcmREYXRlVGltZVBpY2tlclRvZ2dsZTogTXJkSW5wdXRDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXHJcbiAgKSB7fVxyXG5cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoJ21yZC1pY29uJykpIHtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9ICcyMHB4JztcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzIwcHgnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5tcmREYXRlVGltZVBpY2tlclRvZ2dsZSkpIHtcclxuICAgICAgdGhpcy5tcmREYXRlVGltZVBpY2tlclRvZ2dsZS50b2dnbGVDbGlja2VkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiPGlucHV0ICNiYXNlSW5wdXRcclxuICAoY2xpY2spPVwiaW5wdXRDbGlja2VkKCRldmVudClcIlxyXG4gIChmb2N1cyk9XCJmb2N1cygkZXZlbnQpXCJcclxuICAoYmx1cik9XCJibHVyKCRldmVudClcIlxyXG4gIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgKGlucHV0KT1cImlucHV0KCRldmVudClcIlxyXG4gIFtkaXNhYmxlZF09XCJmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWRcIlxyXG4gIFtwbGFjZWhvbGRlcl09XCIhbGFiZWxQcmVzZW50IHx8IGlzRm9jdXNlZCA/IHBsYWNlaG9sZGVyIDogJydcIlxyXG4gIFtzdHlsZS5wb2ludGVyLWV2ZW50c109XCJyZWFkb25seSA/ICdub25lJyA6ICdhdXRvJ1wiXHJcbiAgW3N0eWxlLnRleHQtYWxpZ25dPVwidGV4dEVuZCA/ICdlbmQnIDogY2VudGVyZWQgPyAnY2VudGVyJyA6ICdzdGFydCdcIlxyXG4gIFtzdHlsZS5jb2xvcl09XCJmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWQgPyBkaXNhYmxlZENvbG9yIDogY29sb3JcIlxyXG4gIFtkZWNpbWFsTnVtYmVyXT1cIm1heERpZ2l0cyB8fCBtYXhEaWdpdHMgPT09IDBcIiBbbmFjaGtvbW1hc3RlbGxlbl09XCJtYXhEaWdpdHNcIlxyXG4gIFt0aW1lSW5wdXRdPVwidGltZVwiXHJcbiAgKm5nSWY9XCIhdGV4dGFyZWFcIlxyXG4gID5cclxuXHJcbjx0ZXh0YXJlYSAjdGV4dEFyZWFcclxuICAoY2xpY2spPVwiaW5wdXRDbGlja2VkKCRldmVudClcIlxyXG4gIChmb2N1cyk9XCJmb2N1cygkZXZlbnQpXCJcclxuICAoYmx1cik9XCJibHVyKCRldmVudClcIlxyXG4gIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgKGlucHV0KT1cImlucHV0KCRldmVudClcIlxyXG4gIFtkaXNhYmxlZF09XCJmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWRcIlxyXG4gIFtwbGFjZWhvbGRlcl09XCIhbGFiZWxQcmVzZW50IHx8IGlzRm9jdXNlZCA/IHBsYWNlaG9sZGVyIDogJydcIlxyXG4gIFtzdHlsZS5wb2ludGVyLWV2ZW50c109XCJyZWFkb25seSA/ICdub25lJyA6ICdhdXRvJ1wiXHJcbiAgW3N0eWxlLmNvbG9yXT1cImZvcm1Db250cm9sPy5kaXNhYmxlZCB8fCBkaXNhYmxlZCA/IGRpc2FibGVkQ29sb3IgOiBjb2xvclwiXHJcbiAgKm5nSWY9XCJ0ZXh0YXJlYVwiXHJcbiAgcm93cz1cIjFcIlxyXG4gIFtuZ1N0eWxlXT1cInsnbGluZS1oZWlnaHQnOiBsaW5lSGVpZ2h0ICsgJ3B4J31cIlxyXG4+PC90ZXh0YXJlYT5cclxuXHJcblxyXG48ZGl2ICNkYXRlSW5wdXQgKm5nSWY9XCJkYXRlXCI+PC9kaXY+XHJcbjxkaXYgKm5nSWY9XCJkYXRlICYmICFjdXN0b21EYXRlVGltZVRvZ2dsZSAmJiAhcmFuZ2VTdGFydCAmJiAhcmFuZ2VFbmRcIiA+XHJcbiAgPG1yZC1idXR0b24gaWNvbi1idXR0b24gZnVsbEljb24gZGlhbWV0ZXI9XCIyNFwiIGljb25TaXplPVwiMTZcIiAoY2xpY2spPVwic2hvd0RhdGVwaWNrZXIudmFsdWUgPSAhc2hvd0RhdGVwaWNrZXIudmFsdWVcIiBbZGlzYWJsZWRdPVwiZm9ybUNvbnRyb2w/LmRpc2FibGVkIHx8IGRpc2FibGVkXCI+XHJcbiAgICA8c3ZnIG1yZC1pY29uIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIjAgMCAxNC45ODYgMTcuMTI3XCIgZml0PVwiXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIiBmb2N1c2FibGU9XCJmYWxzZVwiPlxyXG4gICAgICA8ZGVmcz48c3R5bGU+LmF7ZmlsbDojNDk0OTQ5O308L3N0eWxlPjwvZGVmcz5cclxuICAgICAgPHBhdGggY2xhc3M9XCJhXCIgZD1cIk0xNC41ODUsNS4zNTJILjRhLjQuNCwwLDAsMS0uNC0uNHYtMS4yQTEuNjA2LDEuNjA2LDAsMCwxLDEuNjA2LDIuMTQxSDMuMjExVi40YS40LjQsMCwwLDEsLjQtLjRINC45NTFhLjQuNCwwLDAsMSwuNC40VjIuMTQxSDkuNjM0Vi40YS40LjQsMCwwLDEsLjQtLjRoMS4zMzhhLjQuNCwwLDAsMSwuNC40VjIuMTQxaDEuNjA2YTEuNjA2LDEuNjA2LDAsMCwxLDEuNjA2LDEuNjA2djEuMkEuNC40LDAsMCwxLDE0LjU4NSw1LjM1MlpNLjQsNi40MjNIMTQuNTg1YS40LjQsMCwwLDEsLjQuNHY4LjdhMS42MDYsMS42MDYsMCwwLDEtMS42MDYsMS42MDZIMS42MDZBMS42MDYsMS42MDYsMCwwLDEsMCwxNS41MjJ2LTguN0EuNC40LDAsMCwxLC40LDYuNDIzWm0xMC41NzEsNC42ODNhLjQuNCwwLDAsMC0uNC0uNEg4LjU2NFY4LjdhLjQuNCwwLDAsMC0uNC0uNEg2LjgyNGEuNC40LDAsMCwwLS40LjRWMTAuN0g0LjQxNmEuNC40LDAsMCwwLS40LjR2MS4zMzhhLjQuNCwwLDAsMCwuNC40SDYuNDIzdjIuMDA3YS40LjQsMCwwLDAsLjQuNEg4LjE2MmEuNC40LDAsMCwwLC40LS40VjEyLjg0NWgyLjAwN2EuNC40LDAsMCwwLC40LS40WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDApXCI+PC9wYXRoPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9tcmQtYnV0dG9uPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgI3RpbWVJbnB1dCAqbmdJZj1cInRpbWVcIj48L2Rpdj5cclxuPGRpdiAqbmdJZj1cInRpbWUgJiYgIWN1c3RvbURhdGVUaW1lVG9nZ2xlXCI+ICBcclxuICA8bXJkLWJ1dHRvbiBpY29uLWJ1dHRvbiBmdWxsSWNvbiBkaWFtZXRlcj1cIjI0XCIgaWNvblNpemU9XCIxOFwiIChjbGljayk9XCJzaG93VGltZXBpY2tlci52YWx1ZSA9ICFzaG93VGltZXBpY2tlci52YWx1ZVwiIFtkaXNhYmxlZF09XCJmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWRcIj5cclxuICAgIDxzdmcgbXJkLWljb24gdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICA8cGF0aCBkPVwiTTEyIDIxQzE2Ljk3MDYgMjEgMjEgMTYuOTcwNiAyMSAxMkMyMSA3LjAyOTQ0IDE2Ljk3MDYgMyAxMiAzQzcuMDI5NDQgMyAzIDcuMDI5NDQgMyAxMkMzIDE2Ljk3MDYgNy4wMjk0NCAyMSAxMiAyMVpcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICA8cGF0aCBkPVwiTTEyIDZWMTJcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICA8cGF0aCBkPVwiTTE2LjI0IDE2LjI0TDEyIDEyXCIgc3Ryb2tlPVwiIzAwMDAwMFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIDwvbXJkLWJ1dHRvbj5cclxuPC9kaXY+XHJcblxyXG48c3BhbiBjbGFzcz1cInVuZm9jdXNlZE92ZXJsYXlcIiAqbmdJZj1cIiFpc0ZvY3VzZWRcIj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbdW5mb2N1c2VkT3ZlcmxheV1cIj48L25nLWNvbnRlbnQ+XHJcbjwvc3Bhbj5cclxuXHJcbjxuZy10ZW1wbGF0ZVxyXG4gIGNkay1jb25uZWN0ZWQtb3ZlcmxheVxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5SGFzQmFja2Ryb3BdPVwidHJ1ZVwiXHJcbiAgY2RrQ29ubmVjdGVkT3ZlcmxheUJhY2tkcm9wQ2xhc3M9XCJjZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcFwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwiZGF0ZUlucHV0RWxlbWVudFwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cInNob3dEYXRlcGlja2VyLnZhbHVlXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJfcG9zaXRpb25zXCJcclxuICAoYmFja2Ryb3BDbGljayk9XCJzaG93RGF0ZXBpY2tlci52YWx1ZSA9IGZhbHNlXCJcclxuPlxyXG4gIDxtcmQtZGF0ZXBpY2tlclxyXG4gICAgW2RhdGVdPVwidmFsdWVcIlxyXG4gICAgKGRhdGVDaGFuZ2VkKT1cImRhdGVDaGFuZ2VkKCRldmVudClcIlxyXG4gID48L21yZC1kYXRlcGlja2VyPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlXHJcbiAgY2RrLWNvbm5lY3RlZC1vdmVybGF5XHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcF09XCJ0cnVlXCJcclxuICBjZGtDb25uZWN0ZWRPdmVybGF5QmFja2Ryb3BDbGFzcz1cImNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJ0aW1lSW5wdXRFbGVtZW50XCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwic2hvd1RpbWVwaWNrZXIudmFsdWVcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cIl9wb3NpdGlvbnNcIlxyXG4gIChiYWNrZHJvcENsaWNrKT1cInNob3dUaW1lcGlja2VyLnZhbHVlID0gZmFsc2VcIlxyXG4+XHJcbiAgPG1yZC10aW1lcGlja2VyXHJcbiAgICBbdGltZV09XCJ2YWx1ZVwiXHJcbiAgICAodGltZUNoYW5nZWQpPVwidGltZUNoYW5nZWQoJGV2ZW50KVwiXHJcbiAgPjwvbXJkLXRpbWVwaWNrZXI+XHJcbjwvbmctdGVtcGxhdGU+Il19