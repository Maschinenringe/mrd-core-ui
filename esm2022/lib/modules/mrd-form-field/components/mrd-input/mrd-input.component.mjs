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
            }
            else {
                this.formControlChangeValue = event;
            }
        }
        else {
            this.value = event.format('DD.MM.YYYY');
            this.valueChange.emit(this.value);
        }
        this.inputChange.emit(event.format('DD.MM.YYYY'));
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
            }
            else {
                this.formControlChangeValue = event;
            }
        }
        else {
            this.value = event.format('HH:mm');
            this.valueChange.emit(this.value);
        }
        this.inputChange.emit(event.format('HH:mm'));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZm9ybS1maWVsZC9jb21wb25lbnRzL21yZC1pbnB1dC9tcmQtaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWlucHV0L21yZC1pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBUSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNOLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQXlCLFVBQVUsRUFBYyxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNySSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQy9FLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNOaEMsbUNBY0c7SUFiRCx1S0FBUyxlQUFBLDRCQUFvQixDQUFBLElBQUMsMEpBQ3JCLGVBQUEscUJBQWEsQ0FBQSxJQURRLHdKQUV0QixlQUFBLG9CQUFZLENBQUEsSUFGVSwwSkFJckIsZUFBQSxxQkFBYSxDQUFBLElBSlE7SUFEaEMsaUJBY0c7OztJQU5ELG1FQUFtRCw2RUFBQSxxSUFBQTtJQUpu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O0lBRXBGLFlBQ1UsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUM3QixDQUFDO0lBR0osZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3JELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ25ELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQztJQUdNLE9BQU8sQ0FBQyxLQUFpQjtRQUM5QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzlDO0lBQ0gsQ0FBQztnR0F0QlUsbUJBQW1COzRGQUFuQixtQkFBbUI7MEdBQW5CLG1CQUFlOzs7dUZBQWYsbUJBQW1CO2NBSC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDOzZEQUcwQyx1QkFBdUI7a0JBQS9ELEtBQUs7bUJBQUMseUJBQXlCO1lBZ0J6QixPQUFPO2tCQURiLFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0LCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCwgYm9vbGVhbkF0dHJpYnV0ZSwgbnVtYmVyQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgQWNjZXNzYWJsZUZvcm1Db250cm9sLCBCYXNlT2JqZWN0LCBJVmFsaWRhdG9yLCBPYnNlcnZhYmxlVmFsdWUsIFN1YnNjcmlwdGlvbkhhbmRsZXIsIFV0aWwsIFZhbGlkYXRvckZsb2F0IH0gZnJvbSAnbXJkLWNvcmUnO1xyXG5pbXBvcnQgeyBDb25maWdVdGlsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29uZmlnLnV0aWwnO1xyXG5pbXBvcnQgeyBjb2xvckF0dHJpYnV0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi90cmFuc2Zvcm1zL2NvbG9yLXRyYW5zZm9ybSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcbmltcG9ydCB7IE1yZEJhc2VDb2xvclRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21vZGVsL2NvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IENvbm5lY3RlZFBvc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWlucHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBCYXNlT2JqZWN0IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTUFYX0xFTkdUSDogbnVtYmVyID0gNTEyO1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTUlOX1JPV1M6IG51bWJlciA9IDE7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9NQVhfUk9XUzogbnVtYmVyID0gMjtcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0xJTkVfSEVJR0hUOiBudW1iZXIgPSAyNDtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREFURV9SRUdFWDogUmVnRXhwID0gLyhcXGR7Mn0pLihcXGR7Mn0pLihcXGR7NH0pLztcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBEQVRFX1JFR0VYX0lOUFVUOiBSZWdFeHAgPSAvKFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSkvO1xyXG5cclxuICBAVmlld0NoaWxkKCdiYXNlSW5wdXQnKSBwdWJsaWMgYmFzZUlucHV0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuICBAVmlld0NoaWxkKCd0ZXh0QXJlYScpIHB1YmxpYyB0ZXh0QXJlYUVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTFRleHRBcmVhRWxlbWVudD47XHJcbiAgQFZpZXdDaGlsZCgnZGF0ZUlucHV0JykgcHVibGljIGRhdGVJbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcbiAgQFZpZXdDaGlsZCgndGltZUlucHV0JykgcHVibGljIHRpbWVJbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcblxyXG4gIEBJbnB1dCgnbXJkRm9ybUNvbnRyb2wnKSBmb3JtQ29udHJvbDogQWNjZXNzYWJsZUZvcm1Db250cm9sO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyAnO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgdmFsdWU6IHN0cmluZyA9ICcnO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgcHVibGljIG1heExlbmd0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgbWluUm93czogbnVtYmVyID0gTXJkSW5wdXRDb21wb25lbnQuREVGQVVMVF9NSU5fUk9XUztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgcHVibGljIG1heFJvd3M6IG51bWJlciA9IE1yZElucHV0Q29tcG9uZW50LkRFRkFVTFRfTUFYX1JPV1M7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBsaW5lSGVpZ2h0OiBudW1iZXIgPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX0xJTkVfSEVJR0hUO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHJlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyB0ZXh0YXJlYTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGRhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyByYW5nZVN0YXJ0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcmFuZ2VFbmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyB0aW1lOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbURhdGVUaW1lVG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHZhbGlkYXRlT25CbHVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZm9ybUNvbnRyb2xDaGFuZ2VPbkJsdXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIHNldCBjb2xvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgY29sb3IoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcclxuICB9XHJcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcclxuXHJcbiAgQElucHV0KHthbGlhczogJ3RleHQtY2VudGVyZWQnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IGNlbnRlcmVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9jZW50ZXJlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgY2VudGVyZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2VudGVyZWQ7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2NlbnRlcmVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7YWxpYXM6ICd0ZXh0LWVuZCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgdGV4dEVuZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fdGV4dEVuZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgdGV4dEVuZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl90ZXh0RW5kO1xyXG4gIH1cclxuICBwcml2YXRlIF90ZXh0RW5kOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgQElucHV0KCkgcHVibGljIGRhdGVQaWNrZXJUb2dnbGU6IEhUTUxFbGVtZW50O1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgbWF4RGlnaXRzOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGF1dG9mb2N1czogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgdG91Y2hlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBmb2N1c2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIGJsdXJyZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSBpbnB1dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgcHVibGljIGRpc2FibGVkQ29sb3I6IHN0cmluZyA9IF8uaXNPYmplY3QoQ29uZmlnVXRpbC5nZXRDb25maWcoKS5iYXNlQ29sb3JzLmRpc2FibGVkKSA/IChDb25maWdVdGlsLmdldENvbmZpZygpLmJhc2VDb2xvcnMuZGlzYWJsZWQgYXMgTXJkQmFzZUNvbG9yVGhlbWUpLnRleHQgOiAoQ29uZmlnVXRpbC5nZXRDb25maWcoKS5iYXNlQ29sb3JzLmRpc2FibGVkIGFzIHN0cmluZykgfHwgJyNhZmE2YTYnO1xyXG4gIHB1YmxpYyBsYWJlbFByZXNlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgaXNGb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgXHJcbiAgcHVibGljIHNob3dEYXRlcGlja2VyOiBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj4gPSBuZXcgT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBwdWJsaWMgc2hvd1RpbWVwaWNrZXI6IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPiA9IG5ldyBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBwcml2YXRlIGZvcm1Db250cm9sQ2hhbmdlVmFsdWU6IGFueTtcclxuXHJcbiAgX3Bvc2l0aW9uczogQ29ubmVjdGVkUG9zaXRpb25bXSA9IFtcclxuICAgICAge1xyXG4gICAgICAgIG9yaWdpblg6ICdzdGFydCcsXHJcbiAgICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXHJcbiAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgICAgb3ZlcmxheVk6ICd0b3AnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgb3JpZ2luWDogJ2VuZCcsXHJcbiAgICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXHJcbiAgICAgICAgb3ZlcmxheVg6ICdlbmQnLFxyXG4gICAgICAgIG92ZXJsYXlZOiAndG9wJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG9yaWdpblg6ICdzdGFydCcsXHJcbiAgICAgICAgb3JpZ2luWTogJ3RvcCcsXHJcbiAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgICAgb3ZlcmxheVk6ICdib3R0b20nXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBvcmlnaW5YOiAnZW5kJyxcclxuICAgICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgICBvdmVybGF5WDogJ2VuZCcsXHJcbiAgICAgICAgb3ZlcmxheVk6ICdib3R0b20nXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSAmJiB0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRWluIGRlYWt0aXZpZXJ0ZXMgSW5wdXQga2FubiBuaWNodCBtaXQgZWluZW0gRm9ybUNvbnRyb2wgdmVyd2VuZGV0IHdlcmRlbi4nKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5tYXhMZW5ndGggIT09IHVuZGVmaW5lZCAmJiBOdW1iZXIuaXNOYU4odGhpcy5tYXhMZW5ndGgpKSB7XHJcbiAgICAgIHRoaXMubWF4TGVuZ3RoID0gTXJkSW5wdXRDb21wb25lbnQuREVGQVVMVF9NQVhfTEVOR1RIO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubWluUm93cyAhPT0gdW5kZWZpbmVkICYmIE51bWJlci5pc05hTih0aGlzLm1pblJvd3MpKSB7XHJcbiAgICAgIHRoaXMubWluUm93cyA9IE1yZElucHV0Q29tcG9uZW50LkRFRkFVTFRfTUlOX1JPV1M7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5tYXhSb3dzICE9PSB1bmRlZmluZWQgJiYgTnVtYmVyLmlzTmFOKHRoaXMubWF4Um93cykpIHtcclxuICAgICAgdGhpcy5tYXhSb3dzID0gTXJkSW5wdXRDb21wb25lbnQuREVGQVVMVF9NQVhfUk9XUztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxpbmVIZWlnaHQgIT09IHVuZGVmaW5lZCAmJiBOdW1iZXIuaXNOYU4odGhpcy5saW5lSGVpZ2h0KSkge1xyXG4gICAgICB0aGlzLmxpbmVIZWlnaHQgPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX0xJTkVfSEVJR0hUO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudGV4dGFyZWEgJiYgVXRpbC5pc0RlZmluZWQodGhpcy50ZXh0QXJlYUVsZW1lbnQpICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMubWF4TGVuZ3RoKSkge1xyXG4gICAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50Lm1heExlbmd0aCA9IHRoaXMubWF4TGVuZ3RoO1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZVRleHRBcmVhSGVpZ2h0KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbG9yID0gdGhpcy5jb2xvciB8fCBDb25maWdVdGlsLmdldENvbmZpZygpLmZvcm1GaWVsZD8uaW5wdXQ/LmNvbG9yIHx8ICcjMDAwMDAwJztcclxuXHJcbiAgICBpZiAodGhpcy5hdXRvZm9jdXMpIHtcclxuICAgICAgaWYgKHRoaXMuYmFzZUlucHV0RWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuYmFzZUlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMudGV4dEFyZWFFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmRhdGVJbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmRhdGVJbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnRpbWVJbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnRpbWVJbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0ZSAmJiB0aGlzLnJhbmdlU3RhcnQpIHtcclxuICAgICAgdGhpcy50ZXh0RW5kID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlKSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIHRoaXMud2F0Y2godGhpcy5mb3JtQ29udHJvbC52YWx1ZUNoYW5nZXMsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VkKCkpKTtcclxuICAgICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLm1heERpZ2l0cykpIHtcclxuICAgICAgICBsZXQgZmxvYXRWYWxpZGF0b3I6IFZhbGlkYXRvckZsb2F0ID0gdGhpcy5mb3JtQ29udHJvbC52YWxpZGF0b3JzLmZpbmQoKHZhbGlkYXRvcjogSVZhbGlkYXRvcikgPT4gdmFsaWRhdG9yIGluc3RhbmNlb2YgVmFsaWRhdG9yRmxvYXQpIGFzIFZhbGlkYXRvckZsb2F0O1xyXG4gICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChmbG9hdFZhbGlkYXRvcikgJiYgVXRpbC5pc0RlZmluZWQoZmxvYXRWYWxpZGF0b3IuZGlnaXRzQWZ0ZXIpKSB7XHJcbiAgICAgICAgICB0aGlzLm1heERpZ2l0cyA9IGZsb2F0VmFsaWRhdG9yLmRpZ2l0c0FmdGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtQ29udHJvbENoYW5nZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50ZXh0YXJlYSkge1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy50ZXh0QXJlYUVsZW1lbnQpKSB7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVUZXh0QXJlYUhlaWdodCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlKSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5wdXQoZXZlbnQ6IElucHV0RXZlbnQpOiB2b2lkIHtcclxuICAgIGxldCB0YXJnZXRWYWx1ZSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBpZiAodGhpcy50ZXh0YXJlYSkge1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy50ZXh0QXJlYUVsZW1lbnQpKSB7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVUZXh0QXJlYUhlaWdodCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIGxldCBkYXRlSW5wdXRNYXRjaCA9IE1yZElucHV0Q29tcG9uZW50LkRBVEVfUkVHRVhfSU5QVVQudGVzdCh0YXJnZXRWYWx1ZSk7XHJcblxyXG4gICAgICBpZiAoIXRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VPbkJsdXIpIHtcclxuICAgICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHRhcmdldFZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmZvcm1Db250cm9sQ2hhbmdlVmFsdWUgPSB0YXJnZXRWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKHRoaXMuZGF0ZSAmJiBkYXRlSW5wdXRNYXRjaCkge1xyXG4gICAgICAgIHRoaXMuYmFzZUlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB0YXJnZXRWYWx1ZTtcclxuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5wdXRDaGFuZ2UuZW1pdCh0YXJnZXRWYWx1ZSk7XHJcbiAgICBcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkYXRlQ2hhbmdlZChldmVudDogTW9tZW50KTogdm9pZCB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgaWYgKCF0aGlzLmZvcm1Db250cm9sQ2hhbmdlT25CbHVyKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShldmVudCk7XHJcbiAgICAgICAgdGhpcy5iYXNlSW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmZvcm1Db250cm9sQ2hhbmdlVmFsdWUgPSBldmVudDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IGV2ZW50LmZvcm1hdCgnREQuTU0uWVlZWScpO1xyXG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnB1dENoYW5nZS5lbWl0KGV2ZW50LmZvcm1hdCgnREQuTU0uWVlZWScpKTtcclxuICAgIFxyXG4gICAgdGhpcy5zaG93RGF0ZXBpY2tlci52YWx1ZSA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VPbkJsdXIpIHtcclxuICAgICAgdGhpcy5ibHVyKG51bGwpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRpbWVDaGFuZ2VkKGV2ZW50OiBNb21lbnQpOiB2b2lkIHtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICBpZiAoIXRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VPbkJsdXIpIHtcclxuICAgICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKGV2ZW50KTtcclxuICAgICAgICB0aGlzLmJhc2VJbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VWYWx1ZSA9IGV2ZW50O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gZXZlbnQuZm9ybWF0KCdISDptbScpO1xyXG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnB1dENoYW5nZS5lbWl0KGV2ZW50LmZvcm1hdCgnSEg6bW0nKSk7XHJcbiAgICBcclxuICAgIHRoaXMuc2hvd1RpbWVwaWNrZXIudmFsdWUgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLmZvcm1Db250cm9sQ2hhbmdlT25CbHVyKSB7XHJcbiAgICAgIHRoaXMuYmx1cihudWxsKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlVGV4dEFyZWFIZWlnaHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICAgIHRoaXMudGV4dEFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID1cclxuICAgICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgPiAodGhpcy5tYXhSb3dzICogdGhpcy5saW5lSGVpZ2h0KSA/XHJcbiAgICAgICAgKHRoaXMubWF4Um93cyAqIHRoaXMubGluZUhlaWdodCkgKyAncHgnIDpcclxuICAgICAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCA8ICh0aGlzLm1pblJvd3MgKiB0aGlzLmxpbmVIZWlnaHQpID9cclxuICAgICAgICAodGhpcy5taW5Sb3dzICogdGhpcy5saW5lSGVpZ2h0KSArICdweCcgOlxyXG4gICAgICAgIHRoaXMudGV4dEFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbnB1dENsaWNrZWQoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMudG91Y2hlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcclxuICAgIHRoaXMuZm9jdXNlZC5lbWl0KCk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYmx1cihldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VPbkJsdXIgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbENoYW5nZVZhbHVlKSkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VWYWx1ZSk7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VWYWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZvcm1Db250cm9sICYmIHRoaXMuZGF0ZSAmJiB0aGlzLmZvcm1Db250cm9sLnZhbHVlICYmIHRoaXMuZm9ybUNvbnRyb2wudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIGlmICghbW9tZW50LmlzTW9tZW50KHRoaXMuZm9ybUNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgICAgbGV0IG1vbWVudERhdGUgPSBtb21lbnQodGhpcy5mb3JtQ29udHJvbC52YWx1ZSwgJ0RELk1NLllZWVknKS51dGModHJ1ZSk7XHJcbiAgICAgICAgaWYgKG1vbWVudERhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKG1vbWVudERhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZm9ybUNvbnRyb2wgJiYgdGhpcy50aW1lICYmIHRoaXMuZm9ybUNvbnRyb2wudmFsdWUgJiYgdGhpcy5mb3JtQ29udHJvbC52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgaWYgKCFtb21lbnQuaXNNb21lbnQodGhpcy5mb3JtQ29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgICBsZXQgbW9tZW50VGltZSA9IG1vbWVudCh0aGlzLmZvcm1Db250cm9sLnZhbHVlLCAnSEg6bW0nKS55ZWFyKDIwMjApLm1vbnRoKDApLmRheSgxKS51dGModHJ1ZSk7XHJcbiAgICAgICAgaWYgKG1vbWVudFRpbWUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKG1vbWVudFRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuYmx1cnJlZC5lbWl0KCk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMuZGF0ZUlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNob3dQaWNrZXIoKTtcclxuICAgIGlmICh0aGlzLmRhdGUpIHtcclxuICAgICAgdGhpcy5zaG93RGF0ZXBpY2tlci52YWx1ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50aW1lKSB7XHJcbiAgICAgIHRoaXMuc2hvd1RpbWVwaWNrZXIudmFsdWUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW21yZERhdGVUaW1lUGlja2VyVG9nZ2xlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZERhdGVQaWNrZXJUb2dnbGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQElucHV0KCdtcmREYXRlVGltZVBpY2tlclRvZ2dsZScpIHB1YmxpYyBtcmREYXRlVGltZVBpY2tlclRvZ2dsZTogTXJkSW5wdXRDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXHJcbiAgKSB7fVxyXG5cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoJ21yZC1pY29uJykpIHtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9ICcyMHB4JztcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzIwcHgnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5tcmREYXRlVGltZVBpY2tlclRvZ2dsZSkpIHtcclxuICAgICAgdGhpcy5tcmREYXRlVGltZVBpY2tlclRvZ2dsZS50b2dnbGVDbGlja2VkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiPGlucHV0ICNiYXNlSW5wdXRcclxuICAoY2xpY2spPVwiaW5wdXRDbGlja2VkKCRldmVudClcIlxyXG4gIChmb2N1cyk9XCJmb2N1cygkZXZlbnQpXCJcclxuICAoYmx1cik9XCJibHVyKCRldmVudClcIlxyXG4gIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgKGlucHV0KT1cImlucHV0KCRldmVudClcIlxyXG4gIFtkaXNhYmxlZF09XCJmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWRcIlxyXG4gIFtwbGFjZWhvbGRlcl09XCIhbGFiZWxQcmVzZW50IHx8IGlzRm9jdXNlZCA/IHBsYWNlaG9sZGVyIDogJydcIlxyXG4gIFtzdHlsZS5wb2ludGVyLWV2ZW50c109XCJyZWFkb25seSA/ICdub25lJyA6ICdhdXRvJ1wiXHJcbiAgW3N0eWxlLnRleHQtYWxpZ25dPVwidGV4dEVuZCA/ICdlbmQnIDogY2VudGVyZWQgPyAnY2VudGVyJyA6ICdzdGFydCdcIlxyXG4gIFtzdHlsZS5jb2xvcl09XCJmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWQgPyBkaXNhYmxlZENvbG9yIDogY29sb3JcIlxyXG4gIFtkZWNpbWFsTnVtYmVyXT1cIm1heERpZ2l0cyB8fCBtYXhEaWdpdHMgPT09IDBcIiBbbmFjaGtvbW1hc3RlbGxlbl09XCJtYXhEaWdpdHNcIlxyXG4gIFt0aW1lSW5wdXRdPVwidGltZVwiXHJcbiAgKm5nSWY9XCIhdGV4dGFyZWFcIlxyXG4gID5cclxuXHJcbjx0ZXh0YXJlYSAjdGV4dEFyZWFcclxuICAoY2xpY2spPVwiaW5wdXRDbGlja2VkKCRldmVudClcIlxyXG4gIChmb2N1cyk9XCJmb2N1cygkZXZlbnQpXCJcclxuICAoYmx1cik9XCJibHVyKCRldmVudClcIlxyXG4gIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgKGlucHV0KT1cImlucHV0KCRldmVudClcIlxyXG4gIFtkaXNhYmxlZF09XCJmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWRcIlxyXG4gIFtwbGFjZWhvbGRlcl09XCIhbGFiZWxQcmVzZW50IHx8IGlzRm9jdXNlZCA/IHBsYWNlaG9sZGVyIDogJydcIlxyXG4gIFtzdHlsZS5wb2ludGVyLWV2ZW50c109XCJyZWFkb25seSA/ICdub25lJyA6ICdhdXRvJ1wiXHJcbiAgW3N0eWxlLmNvbG9yXT1cImZvcm1Db250cm9sPy5kaXNhYmxlZCB8fCBkaXNhYmxlZCA/IGRpc2FibGVkQ29sb3IgOiBjb2xvclwiXHJcbiAgKm5nSWY9XCJ0ZXh0YXJlYVwiXHJcbiAgcm93cz1cIjFcIlxyXG4gIFtuZ1N0eWxlXT1cInsnbGluZS1oZWlnaHQnOiBsaW5lSGVpZ2h0ICsgJ3B4J31cIlxyXG4+PC90ZXh0YXJlYT5cclxuXHJcblxyXG48ZGl2ICNkYXRlSW5wdXQgKm5nSWY9XCJkYXRlXCI+PC9kaXY+XHJcbjxkaXYgKm5nSWY9XCJkYXRlICYmICFjdXN0b21EYXRlVGltZVRvZ2dsZSAmJiAhcmFuZ2VTdGFydCAmJiAhcmFuZ2VFbmRcIiA+XHJcbiAgPG1yZC1idXR0b24gaWNvbi1idXR0b24gZnVsbEljb24gZGlhbWV0ZXI9XCIyNFwiIGljb25TaXplPVwiMTZcIiAoY2xpY2spPVwic2hvd0RhdGVwaWNrZXIudmFsdWUgPSAhc2hvd0RhdGVwaWNrZXIudmFsdWVcIiBbZGlzYWJsZWRdPVwiZm9ybUNvbnRyb2w/LmRpc2FibGVkIHx8IGRpc2FibGVkXCI+XHJcbiAgICA8c3ZnIG1yZC1pY29uIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIjAgMCAxNC45ODYgMTcuMTI3XCIgZml0PVwiXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIiBmb2N1c2FibGU9XCJmYWxzZVwiPlxyXG4gICAgICA8ZGVmcz48c3R5bGU+LmF7ZmlsbDojNDk0OTQ5O308L3N0eWxlPjwvZGVmcz5cclxuICAgICAgPHBhdGggY2xhc3M9XCJhXCIgZD1cIk0xNC41ODUsNS4zNTJILjRhLjQuNCwwLDAsMS0uNC0uNHYtMS4yQTEuNjA2LDEuNjA2LDAsMCwxLDEuNjA2LDIuMTQxSDMuMjExVi40YS40LjQsMCwwLDEsLjQtLjRINC45NTFhLjQuNCwwLDAsMSwuNC40VjIuMTQxSDkuNjM0Vi40YS40LjQsMCwwLDEsLjQtLjRoMS4zMzhhLjQuNCwwLDAsMSwuNC40VjIuMTQxaDEuNjA2YTEuNjA2LDEuNjA2LDAsMCwxLDEuNjA2LDEuNjA2djEuMkEuNC40LDAsMCwxLDE0LjU4NSw1LjM1MlpNLjQsNi40MjNIMTQuNTg1YS40LjQsMCwwLDEsLjQuNHY4LjdhMS42MDYsMS42MDYsMCwwLDEtMS42MDYsMS42MDZIMS42MDZBMS42MDYsMS42MDYsMCwwLDEsMCwxNS41MjJ2LTguN0EuNC40LDAsMCwxLC40LDYuNDIzWm0xMC41NzEsNC42ODNhLjQuNCwwLDAsMC0uNC0uNEg4LjU2NFY4LjdhLjQuNCwwLDAsMC0uNC0uNEg2LjgyNGEuNC40LDAsMCwwLS40LjRWMTAuN0g0LjQxNmEuNC40LDAsMCwwLS40LjR2MS4zMzhhLjQuNCwwLDAsMCwuNC40SDYuNDIzdjIuMDA3YS40LjQsMCwwLDAsLjQuNEg4LjE2MmEuNC40LDAsMCwwLC40LS40VjEyLjg0NWgyLjAwN2EuNC40LDAsMCwwLC40LS40WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDApXCI+PC9wYXRoPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9tcmQtYnV0dG9uPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgI3RpbWVJbnB1dCAqbmdJZj1cInRpbWVcIj48L2Rpdj5cclxuPGRpdiAqbmdJZj1cInRpbWUgJiYgIWN1c3RvbURhdGVUaW1lVG9nZ2xlXCI+ICBcclxuICA8bXJkLWJ1dHRvbiBpY29uLWJ1dHRvbiBmdWxsSWNvbiBkaWFtZXRlcj1cIjI0XCIgaWNvblNpemU9XCIxOFwiIChjbGljayk9XCJzaG93VGltZXBpY2tlci52YWx1ZSA9ICFzaG93VGltZXBpY2tlci52YWx1ZVwiIFtkaXNhYmxlZF09XCJmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWRcIj5cclxuICAgIDxzdmcgbXJkLWljb24gdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICA8cGF0aCBkPVwiTTEyIDIxQzE2Ljk3MDYgMjEgMjEgMTYuOTcwNiAyMSAxMkMyMSA3LjAyOTQ0IDE2Ljk3MDYgMyAxMiAzQzcuMDI5NDQgMyAzIDcuMDI5NDQgMyAxMkMzIDE2Ljk3MDYgNy4wMjk0NCAyMSAxMiAyMVpcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICA8cGF0aCBkPVwiTTEyIDZWMTJcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICA8cGF0aCBkPVwiTTE2LjI0IDE2LjI0TDEyIDEyXCIgc3Ryb2tlPVwiIzAwMDAwMFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIDwvbXJkLWJ1dHRvbj5cclxuPC9kaXY+XHJcblxyXG48c3BhbiBjbGFzcz1cInVuZm9jdXNlZE92ZXJsYXlcIiAqbmdJZj1cIiFpc0ZvY3VzZWRcIj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbdW5mb2N1c2VkT3ZlcmxheV1cIj48L25nLWNvbnRlbnQ+XHJcbjwvc3Bhbj5cclxuXHJcbjxuZy10ZW1wbGF0ZVxyXG4gIGNkay1jb25uZWN0ZWQtb3ZlcmxheVxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5SGFzQmFja2Ryb3BdPVwidHJ1ZVwiXHJcbiAgY2RrQ29ubmVjdGVkT3ZlcmxheUJhY2tkcm9wQ2xhc3M9XCJjZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcFwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwiZGF0ZUlucHV0RWxlbWVudFwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cInNob3dEYXRlcGlja2VyLnZhbHVlXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJfcG9zaXRpb25zXCJcclxuICAoYmFja2Ryb3BDbGljayk9XCJzaG93RGF0ZXBpY2tlci52YWx1ZSA9IGZhbHNlXCJcclxuPlxyXG4gIDxtcmQtZGF0ZXBpY2tlclxyXG4gICAgW2RhdGVdPVwidmFsdWVcIlxyXG4gICAgKGRhdGVDaGFuZ2VkKT1cImRhdGVDaGFuZ2VkKCRldmVudClcIlxyXG4gID48L21yZC1kYXRlcGlja2VyPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlXHJcbiAgY2RrLWNvbm5lY3RlZC1vdmVybGF5XHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcF09XCJ0cnVlXCJcclxuICBjZGtDb25uZWN0ZWRPdmVybGF5QmFja2Ryb3BDbGFzcz1cImNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJ0aW1lSW5wdXRFbGVtZW50XCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwic2hvd1RpbWVwaWNrZXIudmFsdWVcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cIl9wb3NpdGlvbnNcIlxyXG4gIChiYWNrZHJvcENsaWNrKT1cInNob3dUaW1lcGlja2VyLnZhbHVlID0gZmFsc2VcIlxyXG4+XHJcbiAgPG1yZC10aW1lcGlja2VyXHJcbiAgICBbdGltZV09XCJ2YWx1ZVwiXHJcbiAgICAodGltZUNoYW5nZWQpPVwidGltZUNoYW5nZWQoJGV2ZW50KVwiXHJcbiAgPjwvbXJkLXRpbWVwaWNrZXI+XHJcbjwvbmctdGVtcGxhdGU+Il19