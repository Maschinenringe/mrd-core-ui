import { ChangeDetectionStrategy, Component, Directive, EventEmitter, HostListener, Input, Output, ViewChild, booleanAttribute, numberAttribute } from '@angular/core';
import moment from 'moment';
import { BaseObject, SubscriptionHandler, Util, ValidatorFloat } from 'mrd-core';
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
    i0.ɵɵstyleProp("pointer-events", ctx_r0.readonly ? "none" : "auto")("text-align", ctx_r0.textEnd ? "end" : ctx_r0.centered ? "center" : "start");
    i0.ɵɵproperty("value", ctx_r0.value)("disabled", (ctx_r0.formControl == null ? null : ctx_r0.formControl.disabled) || ctx_r0.disabled)("placeholder", ctx_r0.placeholder)("decimalNumber", ctx_r0.maxDigits || ctx_r0.maxDigits === 0)("nachkommastellen", ctx_r0.maxDigits);
} }
function MrdInputComponent_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 6, 7);
    i0.ɵɵlistener("input", function MrdInputComponent_input_1_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.input($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r1.customDateToggle ? "0" : "20px")("padding", "0");
} }
const _c3 = function (a0) { return { "line-height": a0 }; };
function MrdInputComponent_textarea_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "textarea", 8, 9);
    i0.ɵɵlistener("click", function MrdInputComponent_textarea_2_Template_textarea_click_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.inputClicked($event)); })("focus", function MrdInputComponent_textarea_2_Template_textarea_focus_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.focus($event)); })("blur", function MrdInputComponent_textarea_2_Template_textarea_blur_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.blur($event)); })("input", function MrdInputComponent_textarea_2_Template_textarea_input_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.input($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("pointer-events", ctx_r2.readonly ? "none" : "auto");
    i0.ɵɵproperty("value", ctx_r2.value)("disabled", (ctx_r2.formControl == null ? null : ctx_r2.formControl.disabled) || ctx_r2.disabled)("placeholder", ctx_r2.placeholder)("ngStyle", i0.ɵɵpureFunction1(6, _c3, ctx_r2.lineHeight + "px"));
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
    set centered(value) {
        this._centered = value;
        this.cdr.detectChanges();
    }
    get centered() {
        return this._centered;
    }
    _centered = false;
    set textEnd(value) {
        this._textEnd = value;
        this.cdr.detectChanges();
    }
    get textEnd() {
        return this._textEnd;
    }
    _textEnd = false;
    datePickerToggle;
    maxDigits;
    touched = new EventEmitter();
    focused = new EventEmitter();
    blurred = new EventEmitter();
    valueChange = new EventEmitter();
    inputChange = new EventEmitter();
    isFocused = false;
    constructor(cdr) {
        super();
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        if (this.textEnd) {
            debugger;
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
        } }, inputs: { formControl: ["mrdFormControl", "formControl"], placeholder: "placeholder", value: "value", maxLength: ["maxLength", "maxLength", numberAttribute], minRows: ["minRows", "minRows", numberAttribute], maxRows: ["maxRows", "maxRows", numberAttribute], lineHeight: ["lineHeight", "lineHeight", numberAttribute], disabled: ["disabled", "disabled", booleanAttribute], readonly: ["readonly", "readonly", booleanAttribute], required: ["required", "required", booleanAttribute], textarea: ["textarea", "textarea", booleanAttribute], date: ["date", "date", booleanAttribute], customDateToggle: ["customDateToggle", "customDateToggle", booleanAttribute], centered: ["text-centered", "centered", booleanAttribute], textEnd: ["text-end", "textEnd", booleanAttribute], datePickerToggle: "datePickerToggle", maxDigits: "maxDigits" }, outputs: { touched: "touched", focused: "focused", blurred: "blurred", valueChange: "valueChange", inputChange: "inputChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c5, decls: 4, vars: 4, consts: [[3, "value", "disabled", "placeholder", "pointer-events", "text-align", "decimalNumber", "nachkommastellen", "click", "focus", "blur", "input", 4, "ngIf"], ["type", "date", 3, "width", "padding", "input", 4, "ngIf"], ["rows", "1", 3, "value", "disabled", "placeholder", "pointer-events", "ngStyle", "click", "focus", "blur", "input", 4, "ngIf"], ["class", "unfocusedOverlay", 4, "ngIf"], [3, "value", "disabled", "placeholder", "decimalNumber", "nachkommastellen", "click", "focus", "blur", "input"], ["baseInput", ""], ["type", "date", 3, "input"], ["dateInput", ""], ["rows", "1", 3, "value", "disabled", "placeholder", "ngStyle", "click", "focus", "blur", "input"], ["textArea", ""], [1, "unfocusedOverlay"]], template: function MrdInputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c4);
            i0.ɵɵtemplate(0, MrdInputComponent_input_0_Template, 2, 9, "input", 0);
            i0.ɵɵtemplate(1, MrdInputComponent_input_1_Template, 2, 4, "input", 1);
            i0.ɵɵtemplate(2, MrdInputComponent_textarea_2_Template, 2, 8, "textarea", 2);
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
        args: [{ selector: 'mrd-input', changeDetection: ChangeDetectionStrategy.OnPush, template: "<input #baseInput\r\n  (click)=\"inputClicked($event)\"\r\n  (focus)=\"focus($event)\"\r\n  (blur)=\"blur($event)\"\r\n  [value]=\"value\"\r\n  (input)=\"input($event)\"\r\n  [disabled]=\"formControl?.disabled || disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  [style.pointer-events]=\"readonly ? 'none' : 'auto'\"\r\n  [style.text-align]=\"textEnd ? 'end' : centered ? 'center' : 'start'\"\r\n  [decimalNumber]=\"maxDigits || maxDigits === 0\" [nachkommastellen]=\"maxDigits\"\r\n  *ngIf=\"!textarea\"\r\n  >\r\n<input #dateInput\r\n  *ngIf=\"date\"\r\n  [style.width]=\"customDateToggle ? '0' : '20px'\"\r\n  [style.padding]=\"'0'\"\r\n  type=\"date\"\r\n  (input)=\"input($event)\"\r\n>\r\n<textarea #textArea\r\n  (click)=\"inputClicked($event)\"\r\n  (focus)=\"focus($event)\"\r\n  (blur)=\"blur($event)\"\r\n  [value]=\"value\"\r\n  (input)=\"input($event)\"\r\n  [disabled]=\"formControl?.disabled || disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  [style.pointer-events]=\"readonly ? 'none' : 'auto'\"\r\n  *ngIf=\"textarea\"\r\n  rows=\"1\"\r\n  [ngStyle]=\"{'line-height': lineHeight + 'px'}\"\r\n></textarea>\r\n\r\n<span class=\"unfocusedOverlay\" *ngIf=\"!isFocused\">\r\n  <ng-content select=\"[unfocusedOverlay]\"></ng-content>\r\n</span>\r\n", styles: [":host{width:100%;display:flex;flex-direction:row}input{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}input[disabled]{color:#afa6a6}textarea{outline:unset;background-color:transparent;width:100%;padding:0 2px;line-height:1.5em}textarea[disabled]{color:#afa6a6}.unfocusedOverlay{position:absolute;width:100%;height:1.5em;outline:none;padding:1px 8px 0;display:flex;flex-direction:column;justify-content:center;pointer-events:none}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZm9ybS1maWVsZC9jb21wb25lbnRzL21yZC1pbnB1dC9tcmQtaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWlucHV0L21yZC1pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBUSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNOLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQXlCLFVBQVUsRUFBYyxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7Ozs7Ozs7SUNIcEgsbUNBWUc7SUFYRCxxS0FBUyxlQUFBLDJCQUFvQixDQUFBLElBQUMsd0pBQ3JCLGVBQUEsb0JBQWEsQ0FBQSxJQURRLHNKQUV0QixlQUFBLG1CQUFZLENBQUEsSUFGVSx3SkFJckIsZUFBQSxvQkFBYSxDQUFBLElBSlE7SUFEaEMsaUJBWUc7OztJQUpELG1FQUFtRCw2RUFBQTtJQUpuRCxvQ0FBZSxrR0FBQSxtQ0FBQSw2REFBQSxzQ0FBQTs7OztJQVNqQixtQ0FNQztJQURDLHVLQUFTLGVBQUEscUJBQWEsQ0FBQSxJQUFDO0lBTHpCLGlCQU1DOzs7SUFKQywrREFBK0MsZ0JBQUE7Ozs7O0lBS2pELHNDQVlDO0lBWEMsNktBQVMsZUFBQSw0QkFBb0IsQ0FBQSxJQUFDLGdLQUNyQixlQUFBLHFCQUFhLENBQUEsSUFEUSw4SkFFdEIsZUFBQSxvQkFBWSxDQUFBLElBRlUsZ0tBSXJCLGVBQUEscUJBQWEsQ0FBQSxJQUpRO0lBVy9CLGlCQUFXOzs7SUFKVixtRUFBbUQ7SUFKbkQsb0NBQWUsa0dBQUEsbUNBQUEsaUVBQUE7OztJQVVqQixnQ0FBa0Q7SUFDaEQsa0JBQXFEO0lBQ3ZELGlCQUFPOzs7O0FEekJQLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUFVO0lBZ0VyQztJQTlERixNQUFNLENBQVUsa0JBQWtCLEdBQVcsR0FBRyxDQUFDO0lBQ2pELE1BQU0sQ0FBVSxnQkFBZ0IsR0FBVyxDQUFDLENBQUM7SUFDN0MsTUFBTSxDQUFVLGdCQUFnQixHQUFXLENBQUMsQ0FBQztJQUM3QyxNQUFNLENBQVUsbUJBQW1CLEdBQVcsRUFBRSxDQUFDO0lBRWpELE1BQU0sQ0FBVSxVQUFVLEdBQVcseUJBQXlCLENBQUM7SUFDL0QsTUFBTSxDQUFVLGdCQUFnQixHQUFXLHlCQUF5QixDQUFDO0lBRTlDLGdCQUFnQixDQUErQjtJQUNoRCxlQUFlLENBQWtDO0lBQ2hELGdCQUFnQixDQUErQjtJQUVyRCxXQUFXLENBQXdCO0lBQzVDLFdBQVcsR0FBVyxHQUFHLENBQUM7SUFFMUIsS0FBSyxHQUFXLEVBQUUsQ0FBQztJQUVTLFNBQVMsQ0FBUztJQUNsQixPQUFPLEdBQVcsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUM7SUFDckQsT0FBTyxHQUFXLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDO0lBQ3JELFVBQVUsR0FBVyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQztJQUUxRCxRQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixRQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLElBQUksR0FBWSxLQUFLLENBQUM7SUFFdEIsZ0JBQWdCLEdBQVksS0FBSyxDQUFDO0lBRS9FLElBQXlFLFFBQVEsQ0FBQyxLQUFjO1FBQzlGLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNPLFNBQVMsR0FBWSxLQUFLLENBQUM7SUFFbkMsSUFBb0UsT0FBTyxDQUFDLEtBQWM7UUFDeEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ08sUUFBUSxHQUFZLEtBQUssQ0FBQTtJQUVqQixnQkFBZ0IsQ0FBYztJQUU5QixTQUFTLENBQVM7SUFFeEIsT0FBTyxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO0lBQ3ZELE9BQU8sR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUN2RCxPQUFPLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7SUFFdkQsV0FBVyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO0lBQy9ELFdBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUVsRSxTQUFTLEdBQVksS0FBSyxDQUFDO0lBRWxDLFlBQ1UsR0FBc0I7UUFFOUIsS0FBSyxFQUFFLENBQUM7UUFGQSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtJQUdoQyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixRQUFRLENBQUE7U0FDVDtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDaEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQztTQUN2RDtRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQztTQUNuRDtRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQztTQUNuRDtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDbEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQztTQUN6RDtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMzRixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUM5RCxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztTQUNoQztRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN0RixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzFCO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUksbUJBQW1CLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxjQUFjLEdBQW1CLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQXFCLEVBQUUsRUFBRSxDQUFDLFNBQVMsWUFBWSxjQUFjLENBQW1CLENBQUM7Z0JBQ3hKLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDaEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsV0FBVyxDQUFDO2lCQUM3QzthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBRU8sa0JBQWtCO1FBQ3hCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFO2dCQUN4QyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQzthQUNoQztTQUNGO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1NBQzdDO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSxLQUFLLENBQUMsS0FBaUI7UUFDNUIsSUFBSSxXQUFXLEdBQUksS0FBSyxDQUFDLE1BQTJCLENBQUMsS0FBSyxDQUFDO1FBQzNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFO2dCQUN4QyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQzthQUNoQztTQUNGO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNwQyxJQUFJLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFMUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFdkMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLGNBQWMsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUM3QztTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztZQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTyx1QkFBdUI7UUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDekQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDbEYsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDekMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDcEYsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUM3RCxDQUFDO0lBRU0sWUFBWSxDQUFDLEtBQWlCO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVNLEtBQUssQ0FBQyxLQUFpQjtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLElBQUksQ0FBQyxLQUFpQjtRQUMzQixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDNUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDNUMsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEUsSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUN2QzthQUNGO1NBQ0Y7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLGFBQWE7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuRCxDQUFDOzhGQXZMVSxpQkFBaUI7NEZBQWpCLGlCQUFpQjs7Ozs7Ozs7O3lKQW1CVCxlQUFlLG1DQUNmLGVBQWUsbUNBQ2YsZUFBZSw0Q0FDZixlQUFlLHNDQUVmLGdCQUFnQixzQ0FDaEIsZ0JBQWdCLHNDQUNoQixnQkFBZ0Isc0NBQ2hCLGdCQUFnQiwwQkFDaEIsZ0JBQWdCLDhEQUVoQixnQkFBZ0IsMkNBRVEsZ0JBQWdCLG9DQVNyQixnQkFBZ0I7O1lDcER4RCxzRUFZRztZQUNILHNFQU1DO1lBQ0QsNEVBWVk7WUFFWixvRUFFTzs7WUF6Qkosb0NBQWU7WUFHZixlQUFVO1lBQVYsK0JBQVU7WUFlVixlQUFjO1lBQWQsbUNBQWM7WUFLZSxlQUFnQjtZQUFoQixxQ0FBZ0I7Ozt1RkR2Qm5DLGlCQUFpQjtjQU43QixTQUFTOzJCQUNFLFdBQVcsbUJBR0osdUJBQXVCLENBQUMsTUFBTTtvRUFZaEIsZ0JBQWdCO2tCQUE5QyxTQUFTO21CQUFDLFdBQVc7WUFDUSxlQUFlO2tCQUE1QyxTQUFTO21CQUFDLFVBQVU7WUFDVSxnQkFBZ0I7a0JBQTlDLFNBQVM7bUJBQUMsV0FBVztZQUVHLFdBQVc7a0JBQW5DLEtBQUs7bUJBQUMsZ0JBQWdCO1lBQ1AsV0FBVztrQkFBMUIsS0FBSztZQUVVLEtBQUs7a0JBQXBCLEtBQUs7WUFFc0MsU0FBUztrQkFBcEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUM7WUFDUyxPQUFPO2tCQUFsRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBQztZQUNTLE9BQU87a0JBQWxELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFDO1lBQ1MsVUFBVTtrQkFBckQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUM7WUFFVSxRQUFRO2tCQUFwRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBQ1MsUUFBUTtrQkFBcEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUNTLFFBQVE7a0JBQXBELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFDUyxRQUFRO2tCQUFwRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBQ1MsSUFBSTtrQkFBaEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUVTLGdCQUFnQjtrQkFBNUQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUVxQyxRQUFRO2tCQUFoRixLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFTUSxPQUFPO2tCQUExRSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFTdkMsZ0JBQWdCO2tCQUEvQixLQUFLO1lBRVUsU0FBUztrQkFBeEIsS0FBSztZQUVJLE9BQU87a0JBQWhCLE1BQU07WUFDRyxPQUFPO2tCQUFoQixNQUFNO1lBQ0csT0FBTztrQkFBaEIsTUFBTTtZQUVHLFdBQVc7a0JBQXBCLE1BQU07WUFDRyxXQUFXO2tCQUFwQixNQUFNOztBQW1JVCxNQUFNLE9BQU8sbUJBQW1CO0lBS3BCO0lBSDJCLG1CQUFtQixDQUFvQjtJQUU1RSxZQUNVLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFDN0IsQ0FBQztJQUdKLGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztZQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUNyRDtJQUNILENBQUM7SUFHTSxPQUFPLENBQUMsS0FBaUI7UUFDOUIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUMxQztJQUNILENBQUM7Z0dBdEJVLG1CQUFtQjs0RkFBbkIsbUJBQW1COzBHQUFuQixtQkFBZTs7O3VGQUFmLG1CQUFtQjtjQUgvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjthQUNsQzs2REFHc0MsbUJBQW1CO2tCQUF2RCxLQUFLO21CQUFDLHFCQUFxQjtZQWdCckIsT0FBTztrQkFEYixZQUFZO21CQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdCwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIGJvb2xlYW5BdHRyaWJ1dGUsIG51bWJlckF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IE1vbWVudCB9IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IEFjY2Vzc2FibGVGb3JtQ29udHJvbCwgQmFzZU9iamVjdCwgSVZhbGlkYXRvciwgU3Vic2NyaXB0aW9uSGFuZGxlciwgVXRpbCwgVmFsaWRhdG9yRmxvYXQgfSBmcm9tICdtcmQtY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1pbnB1dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZElucHV0Q29tcG9uZW50IGV4dGVuZHMgQmFzZU9iamVjdCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01BWF9MRU5HVEg6IG51bWJlciA9IDUxMjtcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01JTl9ST1dTOiBudW1iZXIgPSAxO1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTUFYX1JPV1M6IG51bWJlciA9IDI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9MSU5FX0hFSUdIVDogbnVtYmVyID0gMjQ7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERBVEVfUkVHRVg6IFJlZ0V4cCA9IC8oXFxkezJ9KS4oXFxkezJ9KS4oXFxkezR9KS87XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREFURV9SRUdFWF9JTlBVVDogUmVnRXhwID0gLyhcXGR7NH0pLShcXGR7Mn0pLShcXGR7Mn0pLztcclxuXHJcbiAgQFZpZXdDaGlsZCgnYmFzZUlucHV0JykgcHVibGljIGJhc2VJbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcbiAgQFZpZXdDaGlsZCgndGV4dEFyZWEnKSBwdWJsaWMgdGV4dEFyZWFFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxUZXh0QXJlYUVsZW1lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoJ2RhdGVJbnB1dCcpIHB1YmxpYyBkYXRlSW5wdXRFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG5cclxuICBASW5wdXQoJ21yZEZvcm1Db250cm9sJykgZm9ybUNvbnRyb2w6IEFjY2Vzc2FibGVGb3JtQ29udHJvbDtcclxuICBASW5wdXQoKSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcgJztcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHZhbHVlOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBtYXhMZW5ndGg6IG51bWJlcjtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgcHVibGljIG1pblJvd3M6IG51bWJlciA9IE1yZElucHV0Q29tcG9uZW50LkRFRkFVTFRfTUlOX1JPV1M7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBtYXhSb3dzOiBudW1iZXIgPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX01BWF9ST1dTO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgbGluZUhlaWdodDogbnVtYmVyID0gTXJkSW5wdXRDb21wb25lbnQuREVGQVVMVF9MSU5FX0hFSUdIVDtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyByZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgdGV4dGFyZWE6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBkYXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbURhdGVUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHthbGlhczogJ3RleHQtY2VudGVyZWQnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IGNlbnRlcmVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9jZW50ZXJlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IGNlbnRlcmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NlbnRlcmVkO1xyXG4gIH1cclxuICBwcml2YXRlIF9jZW50ZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoe2FsaWFzOiAndGV4dC1lbmQnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IHRleHRFbmQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3RleHRFbmQgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbiAgcHVibGljIGdldCB0ZXh0RW5kKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHRFbmQ7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3RleHRFbmQ6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgZGF0ZVBpY2tlclRvZ2dsZTogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBtYXhEaWdpdHM6IG51bWJlcjtcclxuXHJcbiAgQE91dHB1dCgpIHRvdWNoZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgZm9jdXNlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBibHVycmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgaW5wdXRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIHB1YmxpYyBpc0ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50ZXh0RW5kKSB7XHJcbiAgICAgIGRlYnVnZ2VyXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5tYXhMZW5ndGggIT09IHVuZGVmaW5lZCAmJiBOdW1iZXIuaXNOYU4odGhpcy5tYXhMZW5ndGgpKSB7XHJcbiAgICAgIHRoaXMubWF4TGVuZ3RoID0gTXJkSW5wdXRDb21wb25lbnQuREVGQVVMVF9NQVhfTEVOR1RIO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubWluUm93cyAhPT0gdW5kZWZpbmVkICYmIE51bWJlci5pc05hTih0aGlzLm1pblJvd3MpKSB7XHJcbiAgICAgIHRoaXMubWluUm93cyA9IE1yZElucHV0Q29tcG9uZW50LkRFRkFVTFRfTUlOX1JPV1M7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5tYXhSb3dzICE9PSB1bmRlZmluZWQgJiYgTnVtYmVyLmlzTmFOKHRoaXMubWF4Um93cykpIHtcclxuICAgICAgdGhpcy5tYXhSb3dzID0gTXJkSW5wdXRDb21wb25lbnQuREVGQVVMVF9NQVhfUk9XUztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxpbmVIZWlnaHQgIT09IHVuZGVmaW5lZCAmJiBOdW1iZXIuaXNOYU4odGhpcy5saW5lSGVpZ2h0KSkge1xyXG4gICAgICB0aGlzLmxpbmVIZWlnaHQgPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX0xJTkVfSEVJR0hUO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudGV4dGFyZWEgJiYgVXRpbC5pc0RlZmluZWQodGhpcy50ZXh0QXJlYUVsZW1lbnQpICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMubWF4TGVuZ3RoKSkge1xyXG4gICAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50Lm1heExlbmd0aCA9IHRoaXMubWF4TGVuZ3RoO1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZVRleHRBcmVhSGVpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wuY29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9ybUNvbnRyb2wuY29udHJvbC52YWx1ZTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICB0aGlzLndhdGNoKHRoaXMuZm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoKSA9PiB0aGlzLmZvcm1Db250cm9sQ2hhbmdlZCgpKSk7XHJcbiAgICAgIGlmICghVXRpbC5pc0RlZmluZWQodGhpcy5tYXhEaWdpdHMpKSB7XHJcbiAgICAgICAgbGV0IGZsb2F0VmFsaWRhdG9yOiBWYWxpZGF0b3JGbG9hdCA9IHRoaXMuZm9ybUNvbnRyb2wudmFsaWRhdG9ycy5maW5kKCh2YWxpZGF0b3I6IElWYWxpZGF0b3IpID0+IHZhbGlkYXRvciBpbnN0YW5jZW9mIFZhbGlkYXRvckZsb2F0KSBhcyBWYWxpZGF0b3JGbG9hdDtcclxuICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQoZmxvYXRWYWxpZGF0b3IpICYmIFV0aWwuaXNEZWZpbmVkKGZsb2F0VmFsaWRhdG9yLmRpZ2l0c0FmdGVyKSkge1xyXG4gICAgICAgICAgdGhpcy5tYXhEaWdpdHMgPSBmbG9hdFZhbGlkYXRvci5kaWdpdHNBZnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybUNvbnRyb2xDaGFuZ2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudGV4dGFyZWEpIHtcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMudGV4dEFyZWFFbGVtZW50KSkge1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlVGV4dEFyZWFIZWlnaHQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wuY29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9ybUNvbnRyb2wuY29udHJvbC52YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlucHV0KGV2ZW50OiBJbnB1dEV2ZW50KTogdm9pZCB7XHJcbiAgICBsZXQgdGFyZ2V0VmFsdWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgaWYgKHRoaXMudGV4dGFyZWEpIHtcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMudGV4dEFyZWFFbGVtZW50KSkge1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlVGV4dEFyZWFIZWlnaHQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICBsZXQgZGF0ZUlucHV0TWF0Y2ggPSBNcmRJbnB1dENvbXBvbmVudC5EQVRFX1JFR0VYX0lOUFVULnRlc3QodGFyZ2V0VmFsdWUpO1xyXG5cclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZSh0YXJnZXRWYWx1ZSk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAodGhpcy5kYXRlICYmIGRhdGVJbnB1dE1hdGNoKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlSW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRhcmdldFZhbHVlO1xyXG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnB1dENoYW5nZS5lbWl0KHRhcmdldFZhbHVlKTtcclxuICAgIFxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVUZXh0QXJlYUhlaWdodCgpOiB2b2lkIHtcclxuICAgIHRoaXMudGV4dEFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG4gICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPVxyXG4gICAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCA+ICh0aGlzLm1heFJvd3MgKiB0aGlzLmxpbmVIZWlnaHQpID9cclxuICAgICAgICAodGhpcy5tYXhSb3dzICogdGhpcy5saW5lSGVpZ2h0KSArICdweCcgOlxyXG4gICAgICAgIHRoaXMudGV4dEFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0IDwgKHRoaXMubWluUm93cyAqIHRoaXMubGluZUhlaWdodCkgP1xyXG4gICAgICAgICh0aGlzLm1pblJvd3MgKiB0aGlzLmxpbmVIZWlnaHQpICsgJ3B4JyA6XHJcbiAgICAgICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlucHV0Q2xpY2tlZChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy50b3VjaGVkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmb2N1cyhldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5mb2N1c2VkLmVtaXQoKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBibHVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5mb3JtQ29udHJvbCAmJiB0aGlzLmRhdGUgJiYgdGhpcy5mb3JtQ29udHJvbC52YWx1ZSAmJiB0aGlzLmZvcm1Db250cm9sLnZhbHVlICE9PSAnJykge1xyXG4gICAgICBpZiAoIW1vbWVudC5pc01vbWVudCh0aGlzLmZvcm1Db250cm9sLnZhbHVlKSkge1xyXG4gICAgICAgIGxldCBtb21lbnREYXRlID0gbW9tZW50KHRoaXMuZm9ybUNvbnRyb2wudmFsdWUsICdERC5NTS5ZWVlZJykudXRjKHRydWUpO1xyXG4gICAgICAgIGlmIChtb21lbnREYXRlLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShtb21lbnREYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLmJsdXJyZWQuZW1pdCgpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZUNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGVJbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zaG93UGlja2VyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbXJkRGF0ZVBpY2tlclRvZ2dsZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmREYXRlUGlja2VyVG9nZ2xlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgnbXJkRGF0ZVBpY2tlclRvZ2dsZScpIHB1YmxpYyBtcmREYXRlUGlja2VyVG9nZ2xlOiBNcmRJbnB1dENvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcclxuICApIHt9XHJcblxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xvc2VzdCgnbXJkLWljb24nKSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gJzIwcHgnO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMjBweCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLm1yZERhdGVQaWNrZXJUb2dnbGUpKSB7XHJcbiAgICAgIHRoaXMubXJkRGF0ZVBpY2tlclRvZ2dsZS50b2dnbGVDbGlja2VkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiPGlucHV0ICNiYXNlSW5wdXRcclxuICAoY2xpY2spPVwiaW5wdXRDbGlja2VkKCRldmVudClcIlxyXG4gIChmb2N1cyk9XCJmb2N1cygkZXZlbnQpXCJcclxuICAoYmx1cik9XCJibHVyKCRldmVudClcIlxyXG4gIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgKGlucHV0KT1cImlucHV0KCRldmVudClcIlxyXG4gIFtkaXNhYmxlZF09XCJmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWRcIlxyXG4gIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgW3N0eWxlLnBvaW50ZXItZXZlbnRzXT1cInJlYWRvbmx5ID8gJ25vbmUnIDogJ2F1dG8nXCJcclxuICBbc3R5bGUudGV4dC1hbGlnbl09XCJ0ZXh0RW5kID8gJ2VuZCcgOiBjZW50ZXJlZCA/ICdjZW50ZXInIDogJ3N0YXJ0J1wiXHJcbiAgW2RlY2ltYWxOdW1iZXJdPVwibWF4RGlnaXRzIHx8IG1heERpZ2l0cyA9PT0gMFwiIFtuYWNoa29tbWFzdGVsbGVuXT1cIm1heERpZ2l0c1wiXHJcbiAgKm5nSWY9XCIhdGV4dGFyZWFcIlxyXG4gID5cclxuPGlucHV0ICNkYXRlSW5wdXRcclxuICAqbmdJZj1cImRhdGVcIlxyXG4gIFtzdHlsZS53aWR0aF09XCJjdXN0b21EYXRlVG9nZ2xlID8gJzAnIDogJzIwcHgnXCJcclxuICBbc3R5bGUucGFkZGluZ109XCInMCdcIlxyXG4gIHR5cGU9XCJkYXRlXCJcclxuICAoaW5wdXQpPVwiaW5wdXQoJGV2ZW50KVwiXHJcbj5cclxuPHRleHRhcmVhICN0ZXh0QXJlYVxyXG4gIChjbGljayk9XCJpbnB1dENsaWNrZWQoJGV2ZW50KVwiXHJcbiAgKGZvY3VzKT1cImZvY3VzKCRldmVudClcIlxyXG4gIChibHVyKT1cImJsdXIoJGV2ZW50KVwiXHJcbiAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAoaW5wdXQpPVwiaW5wdXQoJGV2ZW50KVwiXHJcbiAgW2Rpc2FibGVkXT1cImZvcm1Db250cm9sPy5kaXNhYmxlZCB8fCBkaXNhYmxlZFwiXHJcbiAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICBbc3R5bGUucG9pbnRlci1ldmVudHNdPVwicmVhZG9ubHkgPyAnbm9uZScgOiAnYXV0bydcIlxyXG4gICpuZ0lmPVwidGV4dGFyZWFcIlxyXG4gIHJvd3M9XCIxXCJcclxuICBbbmdTdHlsZV09XCJ7J2xpbmUtaGVpZ2h0JzogbGluZUhlaWdodCArICdweCd9XCJcclxuPjwvdGV4dGFyZWE+XHJcblxyXG48c3BhbiBjbGFzcz1cInVuZm9jdXNlZE92ZXJsYXlcIiAqbmdJZj1cIiFpc0ZvY3VzZWRcIj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbdW5mb2N1c2VkT3ZlcmxheV1cIj48L25nLWNvbnRlbnQ+XHJcbjwvc3Bhbj5cclxuIl19