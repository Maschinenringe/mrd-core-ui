import { ChangeDetectionStrategy, Component, Directive, EventEmitter, HostListener, Input, Output, ViewChild, booleanAttribute, numberAttribute } from '@angular/core';
import moment from 'moment';
import { BaseObject, SubscriptionHandler, Util, ValidatorFloat } from 'mrd-core';
import { ConfigUtil } from '../../../../common/util/config.util';
import { colorAttribute } from '../../../../common/transforms/color-transform';
import * as _ from 'underscore';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../../common/directive/decimal-number-directive/decimal-number.directive";
const _c0 = ["baseInput"];
const _c1 = ["textArea"];
const _c2 = ["dateInput"];
function MrdInputComponent_input_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 4, 5);
    i0.ɵɵlistener("click", function MrdInputComponent_input_0_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.inputClicked($event)); })("focus", function MrdInputComponent_input_0_Template_input_focus_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.focus($event)); })("blur", function MrdInputComponent_input_0_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.blur($event)); })("input", function MrdInputComponent_input_0_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.input($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("pointer-events", ctx_r0.readonly ? "none" : "auto")("text-align", ctx_r0.textEnd ? "end" : ctx_r0.centered ? "center" : "start")("color", (ctx_r0.formControl == null ? null : ctx_r0.formControl.disabled) || ctx_r0.disabled ? ctx_r0.disabledColor : ctx_r0.color);
    i0.ɵɵproperty("value", ctx_r0.value)("disabled", (ctx_r0.formControl == null ? null : ctx_r0.formControl.disabled) || ctx_r0.disabled)("placeholder", !ctx_r0.labelPresent || ctx_r0.isFocused ? ctx_r0.placeholder : "")("decimalNumber", ctx_r0.maxDigits || ctx_r0.maxDigits === 0)("nachkommastellen", ctx_r0.maxDigits);
} }
function MrdInputComponent_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 6, 7);
    i0.ɵɵlistener("input", function MrdInputComponent_input_1_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.input($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r1.customDateToggle ? "0" : "20px")("padding", "0")("color", ctx_r1.color);
} }
const _c3 = function (a0) { return { "line-height": a0 }; };
function MrdInputComponent_textarea_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "textarea", 8, 9);
    i0.ɵɵlistener("click", function MrdInputComponent_textarea_2_Template_textarea_click_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.inputClicked($event)); })("focus", function MrdInputComponent_textarea_2_Template_textarea_focus_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.focus($event)); })("blur", function MrdInputComponent_textarea_2_Template_textarea_blur_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.blur($event)); })("input", function MrdInputComponent_textarea_2_Template_textarea_input_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.input($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("pointer-events", ctx_r2.readonly ? "none" : "auto")("color", (ctx_r2.formControl == null ? null : ctx_r2.formControl.disabled) || ctx_r2.disabled ? ctx_r2.disabledColor : ctx_r2.color);
    i0.ɵɵproperty("value", ctx_r2.value)("disabled", (ctx_r2.formControl == null ? null : ctx_r2.formControl.disabled) || ctx_r2.disabled)("placeholder", !ctx_r2.labelPresent || ctx_r2.isFocused ? ctx_r2.placeholder : "")("ngStyle", i0.ɵɵpureFunction1(8, _c3, ctx_r2.lineHeight + "px"));
} }
function MrdInputComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} }
const _c4 = [[["", "unfocusedOverlay", ""]]];
const _c5 = ["[unfocusedOverlay]"];
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
    customDateToggle = false;
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
            this.formControl.setValue(targetValue);
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
        if (this.formControl && this.date && this.formControl.value && this.formControl.value !== '') {
            if (!moment.isMoment(this.formControl.value)) {
                let momentDate = moment(this.formControl.value, 'DD.MM.YYYY').utc(true);
                if (momentDate.isValid()) {
                    this.formControl.setValue(momentDate);
                }
            }
        }
        this.isFocused = false;
        this.blurred.emit();
        this.cdr.detectChanges();
    }
    toggleClicked() {
        this.dateInputElement.nativeElement.showPicker();
    }
    /** @nocollapse */ static ɵfac = function MrdInputComponent_Factory(t) { return new (t || MrdInputComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdInputComponent, selectors: [["mrd-input"]], viewQuery: function MrdInputComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.baseInputElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.textAreaElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dateInputElement = _t.first);
        } }, inputs: { formControl: ["mrdFormControl", "formControl"], placeholder: "placeholder", value: "value", maxLength: ["maxLength", "maxLength", numberAttribute], minRows: ["minRows", "minRows", numberAttribute], maxRows: ["maxRows", "maxRows", numberAttribute], lineHeight: ["lineHeight", "lineHeight", numberAttribute], disabled: ["disabled", "disabled", booleanAttribute], readonly: ["readonly", "readonly", booleanAttribute], required: ["required", "required", booleanAttribute], textarea: ["textarea", "textarea", booleanAttribute], date: ["date", "date", booleanAttribute], customDateToggle: ["customDateToggle", "customDateToggle", booleanAttribute], color: ["color", "color", colorAttribute], centered: ["text-centered", "centered", booleanAttribute], textEnd: ["text-end", "textEnd", booleanAttribute], datePickerToggle: "datePickerToggle", maxDigits: "maxDigits", autofocus: ["autofocus", "autofocus", booleanAttribute] }, outputs: { touched: "touched", focused: "focused", blurred: "blurred", valueChange: "valueChange", inputChange: "inputChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c5, decls: 4, vars: 4, consts: [[3, "value", "disabled", "placeholder", "pointer-events", "text-align", "color", "decimalNumber", "nachkommastellen", "click", "focus", "blur", "input", 4, "ngIf"], ["type", "date", 3, "width", "padding", "color", "input", 4, "ngIf"], ["rows", "1", 3, "value", "disabled", "placeholder", "pointer-events", "color", "ngStyle", "click", "focus", "blur", "input", 4, "ngIf"], ["class", "unfocusedOverlay", 4, "ngIf"], [3, "value", "disabled", "placeholder", "decimalNumber", "nachkommastellen", "click", "focus", "blur", "input"], ["baseInput", ""], ["type", "date", 3, "input"], ["dateInput", ""], ["rows", "1", 3, "value", "disabled", "placeholder", "ngStyle", "click", "focus", "blur", "input"], ["textArea", ""], [1, "unfocusedOverlay"]], template: function MrdInputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c4);
            i0.ɵɵtemplate(0, MrdInputComponent_input_0_Template, 2, 11, "input", 0);
            i0.ɵɵtemplate(1, MrdInputComponent_input_1_Template, 2, 6, "input", 1);
            i0.ɵɵtemplate(2, MrdInputComponent_textarea_2_Template, 2, 10, "textarea", 2);
            i0.ɵɵtemplate(3, MrdInputComponent_span_3_Template, 2, 0, "span", 3);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.textarea);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.date);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.textarea);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isFocused);
        } }, dependencies: [i1.NgIf, i1.NgStyle, i2.DecimalNumberDirective], styles: ["[_nghost-%COMP%]{width:100%;display:flex;flex-direction:row}input[_ngcontent-%COMP%]{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}input[disabled][_ngcontent-%COMP%]{color:#afa6a6}textarea[_ngcontent-%COMP%]{outline:unset;background-color:transparent;width:100%;padding:0 2px;line-height:1.5em}textarea[disabled][_ngcontent-%COMP%]{color:#afa6a6}.unfocusedOverlay[_ngcontent-%COMP%]{position:absolute;width:100%;height:1.5em;outline:none;padding:1px 8px 0;display:flex;flex-direction:column;justify-content:center;pointer-events:none}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdInputComponent, [{
        type: Component,
        args: [{ selector: 'mrd-input', changeDetection: ChangeDetectionStrategy.OnPush, template: "<input #baseInput\r\n  (click)=\"inputClicked($event)\"\r\n  (focus)=\"focus($event)\"\r\n  (blur)=\"blur($event)\"\r\n  [value]=\"value\"\r\n  (input)=\"input($event)\"\r\n  [disabled]=\"formControl?.disabled || disabled\"\r\n  [placeholder]=\"!labelPresent || isFocused ? placeholder : ''\"\r\n  [style.pointer-events]=\"readonly ? 'none' : 'auto'\"\r\n  [style.text-align]=\"textEnd ? 'end' : centered ? 'center' : 'start'\"\r\n  [style.color]=\"formControl?.disabled || disabled ? disabledColor : color\"\r\n  [decimalNumber]=\"maxDigits || maxDigits === 0\" [nachkommastellen]=\"maxDigits\"\r\n  *ngIf=\"!textarea\"\r\n  >\r\n<input #dateInput\r\n  *ngIf=\"date\"\r\n  [style.width]=\"customDateToggle ? '0' : '20px'\"\r\n  [style.padding]=\"'0'\"\r\n  [style.color]=\"color\"\r\n  type=\"date\"\r\n  (input)=\"input($event)\"\r\n>\r\n<textarea #textArea\r\n  (click)=\"inputClicked($event)\"\r\n  (focus)=\"focus($event)\"\r\n  (blur)=\"blur($event)\"\r\n  [value]=\"value\"\r\n  (input)=\"input($event)\"\r\n  [disabled]=\"formControl?.disabled || disabled\"\r\n  [placeholder]=\"!labelPresent || isFocused ? placeholder : ''\"\r\n  [style.pointer-events]=\"readonly ? 'none' : 'auto'\"\r\n  [style.color]=\"formControl?.disabled || disabled ? disabledColor : color\"\r\n  *ngIf=\"textarea\"\r\n  rows=\"1\"\r\n  [ngStyle]=\"{'line-height': lineHeight + 'px'}\"\r\n></textarea>\r\n\r\n<span class=\"unfocusedOverlay\" *ngIf=\"!isFocused\">\r\n  <ng-content select=\"[unfocusedOverlay]\"></ng-content>\r\n</span>\r\n", styles: [":host{width:100%;display:flex;flex-direction:row}input{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}input[disabled]{color:#afa6a6}textarea{outline:unset;background-color:transparent;width:100%;padding:0 2px;line-height:1.5em}textarea[disabled]{color:#afa6a6}.unfocusedOverlay{position:absolute;width:100%;height:1.5em;outline:none;padding:1px 8px 0;display:flex;flex-direction:column;justify-content:center;pointer-events:none}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { baseInputElement: [{
            type: ViewChild,
            args: ['baseInput']
        }], textAreaElement: [{
            type: ViewChild,
            args: ['textArea']
        }], dateInputElement: [{
            type: ViewChild,
            args: ['dateInput']
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
        }], customDateToggle: [{
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
    mrdDatePickerToggle;
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
        if (Util.isDefined(this.mrdDatePickerToggle)) {
            this.mrdDatePickerToggle.toggleClicked();
        }
    }
    /** @nocollapse */ static ɵfac = function MrdDatePickerToggle_Factory(t) { return new (t || MrdDatePickerToggle)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdDatePickerToggle, selectors: [["", "mrdDatePickerToggle", ""]], hostBindings: function MrdDatePickerToggle_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function MrdDatePickerToggle_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } }, inputs: { mrdDatePickerToggle: "mrdDatePickerToggle" } });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdDatePickerToggle, [{
        type: Directive,
        args: [{
                selector: '[mrdDatePickerToggle]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { mrdDatePickerToggle: [{
            type: Input,
            args: ['mrdDatePickerToggle']
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZm9ybS1maWVsZC9jb21wb25lbnRzL21yZC1pbnB1dC9tcmQtaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWlucHV0L21yZC1pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBUSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNOLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQXlCLFVBQVUsRUFBYyxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDL0UsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7Ozs7Ozs7OztJQ05oQyxtQ0FhRztJQVpELHFLQUFTLGVBQUEsMkJBQW9CLENBQUEsSUFBQyx3SkFDckIsZUFBQSxvQkFBYSxDQUFBLElBRFEsc0pBRXRCLGVBQUEsbUJBQVksQ0FBQSxJQUZVLHdKQUlyQixlQUFBLG9CQUFhLENBQUEsSUFKUTtJQURoQyxpQkFhRzs7O0lBTEQsbUVBQW1ELDZFQUFBLHFJQUFBO0lBSm5ELG9DQUFlLGtHQUFBLG1G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QUF1QjthQUNsQzs2REFHc0MsbUJBQW1CO2tCQUF2RCxLQUFLO21CQUFDLHFCQUFxQjtZQWdCckIsT0FBTztrQkFEYixZQUFZO21CQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdCwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIGJvb2xlYW5BdHRyaWJ1dGUsIG51bWJlckF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IE1vbWVudCB9IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IEFjY2Vzc2FibGVGb3JtQ29udHJvbCwgQmFzZU9iamVjdCwgSVZhbGlkYXRvciwgU3Vic2NyaXB0aW9uSGFuZGxlciwgVXRpbCwgVmFsaWRhdG9yRmxvYXQgfSBmcm9tICdtcmQtY29yZSc7XHJcbmltcG9ydCB7IENvbmZpZ1V0aWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb25maWcudXRpbCc7XHJcbmltcG9ydCB7IGNvbG9yQXR0cmlidXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvY29sb3ItdHJhbnNmb3JtJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuaW1wb3J0IHsgTXJkQmFzZUNvbG9yVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vbW9kZWwvY29uZmlnLm1vZGVsJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1pbnB1dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZElucHV0Q29tcG9uZW50IGV4dGVuZHMgQmFzZU9iamVjdCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01BWF9MRU5HVEg6IG51bWJlciA9IDUxMjtcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01JTl9ST1dTOiBudW1iZXIgPSAxO1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTUFYX1JPV1M6IG51bWJlciA9IDI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9MSU5FX0hFSUdIVDogbnVtYmVyID0gMjQ7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERBVEVfUkVHRVg6IFJlZ0V4cCA9IC8oXFxkezJ9KS4oXFxkezJ9KS4oXFxkezR9KS87XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREFURV9SRUdFWF9JTlBVVDogUmVnRXhwID0gLyhcXGR7NH0pLShcXGR7Mn0pLShcXGR7Mn0pLztcclxuXHJcbiAgQFZpZXdDaGlsZCgnYmFzZUlucHV0JykgcHVibGljIGJhc2VJbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcbiAgQFZpZXdDaGlsZCgndGV4dEFyZWEnKSBwdWJsaWMgdGV4dEFyZWFFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxUZXh0QXJlYUVsZW1lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoJ2RhdGVJbnB1dCcpIHB1YmxpYyBkYXRlSW5wdXRFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG5cclxuICBASW5wdXQoJ21yZEZvcm1Db250cm9sJykgZm9ybUNvbnRyb2w6IEFjY2Vzc2FibGVGb3JtQ29udHJvbDtcclxuICBASW5wdXQoKSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcgJztcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHZhbHVlOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBtYXhMZW5ndGg6IG51bWJlcjtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgcHVibGljIG1pblJvd3M6IG51bWJlciA9IE1yZElucHV0Q29tcG9uZW50LkRFRkFVTFRfTUlOX1JPV1M7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBtYXhSb3dzOiBudW1iZXIgPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX01BWF9ST1dTO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgbGluZUhlaWdodDogbnVtYmVyID0gTXJkSW5wdXRDb21wb25lbnQuREVGQVVMVF9MSU5FX0hFSUdIVDtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyByZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgdGV4dGFyZWE6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBkYXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbURhdGVUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIHNldCBjb2xvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgY29sb3IoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcclxuICB9XHJcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcclxuXHJcbiAgQElucHV0KHthbGlhczogJ3RleHQtY2VudGVyZWQnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IGNlbnRlcmVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9jZW50ZXJlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgY2VudGVyZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2VudGVyZWQ7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2NlbnRlcmVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7YWxpYXM6ICd0ZXh0LWVuZCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgdGV4dEVuZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fdGV4dEVuZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgdGV4dEVuZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl90ZXh0RW5kO1xyXG4gIH1cclxuICBwcml2YXRlIF90ZXh0RW5kOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgQElucHV0KCkgcHVibGljIGRhdGVQaWNrZXJUb2dnbGU6IEhUTUxFbGVtZW50O1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgbWF4RGlnaXRzOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGF1dG9mb2N1czogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgdG91Y2hlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBmb2N1c2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIGJsdXJyZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSBpbnB1dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgcHVibGljIGRpc2FibGVkQ29sb3I6IHN0cmluZyA9IF8uaXNPYmplY3QoQ29uZmlnVXRpbC5nZXRDb25maWcoKS5iYXNlQ29sb3JzLmRpc2FibGVkKSA/IChDb25maWdVdGlsLmdldENvbmZpZygpLmJhc2VDb2xvcnMuZGlzYWJsZWQgYXMgTXJkQmFzZUNvbG9yVGhlbWUpLnRleHQgOiAoQ29uZmlnVXRpbC5nZXRDb25maWcoKS5iYXNlQ29sb3JzLmRpc2FibGVkIGFzIHN0cmluZykgfHwgJyNhZmE2YTYnO1xyXG4gIHB1YmxpYyBsYWJlbFByZXNlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgaXNGb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpICYmIHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFaW4gZGVha3RpdmllcnRlcyBJbnB1dCBrYW5uIG5pY2h0IG1pdCBlaW5lbSBGb3JtQ29udHJvbCB2ZXJ3ZW5kZXQgd2VyZGVuLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm1heExlbmd0aCAhPT0gdW5kZWZpbmVkICYmIE51bWJlci5pc05hTih0aGlzLm1heExlbmd0aCkpIHtcclxuICAgICAgdGhpcy5tYXhMZW5ndGggPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX01BWF9MRU5HVEg7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5taW5Sb3dzICE9PSB1bmRlZmluZWQgJiYgTnVtYmVyLmlzTmFOKHRoaXMubWluUm93cykpIHtcclxuICAgICAgdGhpcy5taW5Sb3dzID0gTXJkSW5wdXRDb21wb25lbnQuREVGQVVMVF9NSU5fUk9XUztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1heFJvd3MgIT09IHVuZGVmaW5lZCAmJiBOdW1iZXIuaXNOYU4odGhpcy5tYXhSb3dzKSkge1xyXG4gICAgICB0aGlzLm1heFJvd3MgPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX01BWF9ST1dTO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGluZUhlaWdodCAhPT0gdW5kZWZpbmVkICYmIE51bWJlci5pc05hTih0aGlzLmxpbmVIZWlnaHQpKSB7XHJcbiAgICAgIHRoaXMubGluZUhlaWdodCA9IE1yZElucHV0Q29tcG9uZW50LkRFRkFVTFRfTElORV9IRUlHSFQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50ZXh0YXJlYSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLnRleHRBcmVhRWxlbWVudCkgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5tYXhMZW5ndGgpKSB7XHJcbiAgICAgIHRoaXMudGV4dEFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQubWF4TGVuZ3RoID0gdGhpcy5tYXhMZW5ndGg7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlVGV4dEFyZWFIZWlnaHQoKTtcclxuICAgIH1cclxuICAgIHRoaXMuY29sb3IgPSB0aGlzLmNvbG9yIHx8IENvbmZpZ1V0aWwuZ2V0Q29uZmlnKCkuZm9ybUZpZWxkPy5pbnB1dD8uY29sb3IgfHwgJyMwMDAwMDAnO1xyXG5cclxuICAgIGlmICh0aGlzLmF1dG9mb2N1cykge1xyXG4gICAgICBpZiAodGhpcy5iYXNlSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5iYXNlSW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy50ZXh0QXJlYUVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZGF0ZUlucHV0RWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZGF0ZUlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlKSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIHRoaXMud2F0Y2godGhpcy5mb3JtQ29udHJvbC52YWx1ZUNoYW5nZXMsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VkKCkpKTtcclxuICAgICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLm1heERpZ2l0cykpIHtcclxuICAgICAgICBsZXQgZmxvYXRWYWxpZGF0b3I6IFZhbGlkYXRvckZsb2F0ID0gdGhpcy5mb3JtQ29udHJvbC52YWxpZGF0b3JzLmZpbmQoKHZhbGlkYXRvcjogSVZhbGlkYXRvcikgPT4gdmFsaWRhdG9yIGluc3RhbmNlb2YgVmFsaWRhdG9yRmxvYXQpIGFzIFZhbGlkYXRvckZsb2F0O1xyXG4gICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChmbG9hdFZhbGlkYXRvcikgJiYgVXRpbC5pc0RlZmluZWQoZmxvYXRWYWxpZGF0b3IuZGlnaXRzQWZ0ZXIpKSB7XHJcbiAgICAgICAgICB0aGlzLm1heERpZ2l0cyA9IGZsb2F0VmFsaWRhdG9yLmRpZ2l0c0FmdGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtQ29udHJvbENoYW5nZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50ZXh0YXJlYSkge1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy50ZXh0QXJlYUVsZW1lbnQpKSB7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVUZXh0QXJlYUhlaWdodCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlKSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5wdXQoZXZlbnQ6IElucHV0RXZlbnQpOiB2b2lkIHtcclxuICAgIGxldCB0YXJnZXRWYWx1ZSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBpZiAodGhpcy50ZXh0YXJlYSkge1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy50ZXh0QXJlYUVsZW1lbnQpKSB7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVUZXh0QXJlYUhlaWdodCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIGxldCBkYXRlSW5wdXRNYXRjaCA9IE1yZElucHV0Q29tcG9uZW50LkRBVEVfUkVHRVhfSU5QVVQudGVzdCh0YXJnZXRWYWx1ZSk7XHJcblxyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHRhcmdldFZhbHVlKTtcclxuICAgICAgXHJcbiAgICAgIGlmICh0aGlzLmRhdGUgJiYgZGF0ZUlucHV0TWF0Y2gpIHtcclxuICAgICAgICB0aGlzLmJhc2VJbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGFyZ2V0VmFsdWU7XHJcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQodGFyZ2V0VmFsdWUpO1xyXG4gICAgXHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZVRleHRBcmVhSGVpZ2h0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcbiAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9XHJcbiAgICAgIHRoaXMudGV4dEFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gKHRoaXMubWF4Um93cyAqIHRoaXMubGluZUhlaWdodCkgP1xyXG4gICAgICAgICh0aGlzLm1heFJvd3MgKiB0aGlzLmxpbmVIZWlnaHQpICsgJ3B4JyA6XHJcbiAgICAgICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgPCAodGhpcy5taW5Sb3dzICogdGhpcy5saW5lSGVpZ2h0KSA/XHJcbiAgICAgICAgKHRoaXMubWluUm93cyAqIHRoaXMubGluZUhlaWdodCkgKyAncHgnIDpcclxuICAgICAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5wdXRDbGlja2VkKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnRvdWNoZWQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgICB0aGlzLmZvY3VzZWQuZW1pdCgpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmZvcm1Db250cm9sICYmIHRoaXMuZGF0ZSAmJiB0aGlzLmZvcm1Db250cm9sLnZhbHVlICYmIHRoaXMuZm9ybUNvbnRyb2wudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIGlmICghbW9tZW50LmlzTW9tZW50KHRoaXMuZm9ybUNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgICAgbGV0IG1vbWVudERhdGUgPSBtb21lbnQodGhpcy5mb3JtQ29udHJvbC52YWx1ZSwgJ0RELk1NLllZWVknKS51dGModHJ1ZSk7XHJcbiAgICAgICAgaWYgKG1vbWVudERhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKG1vbWVudERhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuYmx1cnJlZC5lbWl0KCk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0ZUlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNob3dQaWNrZXIoKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttcmREYXRlUGlja2VyVG9nZ2xlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZERhdGVQaWNrZXJUb2dnbGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQElucHV0KCdtcmREYXRlUGlja2VyVG9nZ2xlJykgcHVibGljIG1yZERhdGVQaWNrZXJUb2dnbGU6IE1yZElucHV0Q29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZlxyXG4gICkge31cclxuXHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbG9zZXN0KCdtcmQtaWNvbicpKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSAnMjBweCc7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9ICcyMHB4JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICBwdWJsaWMgb25DbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMubXJkRGF0ZVBpY2tlclRvZ2dsZSkpIHtcclxuICAgICAgdGhpcy5tcmREYXRlUGlja2VyVG9nZ2xlLnRvZ2dsZUNsaWNrZWQoKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCI8aW5wdXQgI2Jhc2VJbnB1dFxyXG4gIChjbGljayk9XCJpbnB1dENsaWNrZWQoJGV2ZW50KVwiXHJcbiAgKGZvY3VzKT1cImZvY3VzKCRldmVudClcIlxyXG4gIChibHVyKT1cImJsdXIoJGV2ZW50KVwiXHJcbiAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAoaW5wdXQpPVwiaW5wdXQoJGV2ZW50KVwiXHJcbiAgW2Rpc2FibGVkXT1cImZvcm1Db250cm9sPy5kaXNhYmxlZCB8fCBkaXNhYmxlZFwiXHJcbiAgW3BsYWNlaG9sZGVyXT1cIiFsYWJlbFByZXNlbnQgfHwgaXNGb2N1c2VkID8gcGxhY2Vob2xkZXIgOiAnJ1wiXHJcbiAgW3N0eWxlLnBvaW50ZXItZXZlbnRzXT1cInJlYWRvbmx5ID8gJ25vbmUnIDogJ2F1dG8nXCJcclxuICBbc3R5bGUudGV4dC1hbGlnbl09XCJ0ZXh0RW5kID8gJ2VuZCcgOiBjZW50ZXJlZCA/ICdjZW50ZXInIDogJ3N0YXJ0J1wiXHJcbiAgW3N0eWxlLmNvbG9yXT1cImZvcm1Db250cm9sPy5kaXNhYmxlZCB8fCBkaXNhYmxlZCA/IGRpc2FibGVkQ29sb3IgOiBjb2xvclwiXHJcbiAgW2RlY2ltYWxOdW1iZXJdPVwibWF4RGlnaXRzIHx8IG1heERpZ2l0cyA9PT0gMFwiIFtuYWNoa29tbWFzdGVsbGVuXT1cIm1heERpZ2l0c1wiXHJcbiAgKm5nSWY9XCIhdGV4dGFyZWFcIlxyXG4gID5cclxuPGlucHV0ICNkYXRlSW5wdXRcclxuICAqbmdJZj1cImRhdGVcIlxyXG4gIFtzdHlsZS53aWR0aF09XCJjdXN0b21EYXRlVG9nZ2xlID8gJzAnIDogJzIwcHgnXCJcclxuICBbc3R5bGUucGFkZGluZ109XCInMCdcIlxyXG4gIFtzdHlsZS5jb2xvcl09XCJjb2xvclwiXHJcbiAgdHlwZT1cImRhdGVcIlxyXG4gIChpbnB1dCk9XCJpbnB1dCgkZXZlbnQpXCJcclxuPlxyXG48dGV4dGFyZWEgI3RleHRBcmVhXHJcbiAgKGNsaWNrKT1cImlucHV0Q2xpY2tlZCgkZXZlbnQpXCJcclxuICAoZm9jdXMpPVwiZm9jdXMoJGV2ZW50KVwiXHJcbiAgKGJsdXIpPVwiYmx1cigkZXZlbnQpXCJcclxuICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gIChpbnB1dCk9XCJpbnB1dCgkZXZlbnQpXCJcclxuICBbZGlzYWJsZWRdPVwiZm9ybUNvbnRyb2w/LmRpc2FibGVkIHx8IGRpc2FibGVkXCJcclxuICBbcGxhY2Vob2xkZXJdPVwiIWxhYmVsUHJlc2VudCB8fCBpc0ZvY3VzZWQgPyBwbGFjZWhvbGRlciA6ICcnXCJcclxuICBbc3R5bGUucG9pbnRlci1ldmVudHNdPVwicmVhZG9ubHkgPyAnbm9uZScgOiAnYXV0bydcIlxyXG4gIFtzdHlsZS5jb2xvcl09XCJmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWQgPyBkaXNhYmxlZENvbG9yIDogY29sb3JcIlxyXG4gICpuZ0lmPVwidGV4dGFyZWFcIlxyXG4gIHJvd3M9XCIxXCJcclxuICBbbmdTdHlsZV09XCJ7J2xpbmUtaGVpZ2h0JzogbGluZUhlaWdodCArICdweCd9XCJcclxuPjwvdGV4dGFyZWE+XHJcblxyXG48c3BhbiBjbGFzcz1cInVuZm9jdXNlZE92ZXJsYXlcIiAqbmdJZj1cIiFpc0ZvY3VzZWRcIj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbdW5mb2N1c2VkT3ZlcmxheV1cIj48L25nLWNvbnRlbnQ+XHJcbjwvc3Bhbj5cclxuIl19