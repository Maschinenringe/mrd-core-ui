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
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 3, 4);
    i0.ɵɵlistener("click", function MrdInputComponent_input_0_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.inputClicked($event)); })("focus", function MrdInputComponent_input_0_Template_input_focus_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.focus($event)); })("blur", function MrdInputComponent_input_0_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.blur($event)); })("input", function MrdInputComponent_input_0_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.input($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("pointer-events", ctx_r0.readonly ? "none" : "auto")("text-align", ctx_r0.textEnd ? "end" : ctx_r0.centered ? "center" : "start");
    i0.ɵɵproperty("value", ctx_r0.value)("disabled", (ctx_r0.formControl == null ? null : ctx_r0.formControl.disabled) || ctx_r0.disabled)("placeholder", ctx_r0.placeholder)("decimalNumber", ctx_r0.maxDigits || ctx_r0.maxDigits === 0)("nachkommastellen", ctx_r0.maxDigits);
} }
function MrdInputComponent_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 5, 6);
    i0.ɵɵlistener("input", function MrdInputComponent_input_1_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.input($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r1.customDateToggle ? "0" : "20px")("padding", "0");
} }
const _c3 = function (a0) { return { "line-height": a0 }; };
function MrdInputComponent_textarea_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "textarea", 7, 8);
    i0.ɵɵlistener("click", function MrdInputComponent_textarea_2_Template_textarea_click_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.inputClicked($event)); })("focus", function MrdInputComponent_textarea_2_Template_textarea_focus_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.focus($event)); })("blur", function MrdInputComponent_textarea_2_Template_textarea_blur_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.blur($event)); })("input", function MrdInputComponent_textarea_2_Template_textarea_input_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.input($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("pointer-events", ctx_r2.readonly ? "none" : "auto");
    i0.ɵɵproperty("value", ctx_r2.value)("disabled", (ctx_r2.formControl == null ? null : ctx_r2.formControl.disabled) || ctx_r2.disabled)("placeholder", ctx_r2.placeholder)("ngStyle", i0.ɵɵpureFunction1(6, _c3, ctx_r2.lineHeight + "px"));
} }
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
    centered = false;
    textEnd = false;
    datePickerToggle;
    maxDigits;
    touched = new EventEmitter();
    focused = new EventEmitter();
    blurred = new EventEmitter();
    valueChange = new EventEmitter();
    inputChange = new EventEmitter();
    constructor(cdr) {
        super();
        this.cdr = cdr;
    }
    ngAfterViewInit() {
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
        this.focused.emit();
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
        this.blurred.emit();
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
        } }, inputs: { formControl: ["mrdFormControl", "formControl"], placeholder: "placeholder", value: "value", maxLength: ["maxLength", "maxLength", numberAttribute], minRows: ["minRows", "minRows", numberAttribute], maxRows: ["maxRows", "maxRows", numberAttribute], lineHeight: ["lineHeight", "lineHeight", numberAttribute], disabled: ["disabled", "disabled", booleanAttribute], readonly: ["readonly", "readonly", booleanAttribute], required: ["required", "required", booleanAttribute], textarea: ["textarea", "textarea", booleanAttribute], date: ["date", "date", booleanAttribute], customDateToggle: ["customDateToggle", "customDateToggle", booleanAttribute], centered: ["text-centered", "centered", booleanAttribute], textEnd: ["text-end", "textEnd", booleanAttribute], datePickerToggle: "datePickerToggle", maxDigits: "maxDigits" }, outputs: { touched: "touched", focused: "focused", blurred: "blurred", valueChange: "valueChange", inputChange: "inputChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 3, consts: [[3, "value", "disabled", "placeholder", "pointer-events", "text-align", "decimalNumber", "nachkommastellen", "click", "focus", "blur", "input", 4, "ngIf"], ["type", "date", 3, "width", "padding", "input", 4, "ngIf"], ["rows", "1", 3, "value", "disabled", "placeholder", "pointer-events", "ngStyle", "click", "focus", "blur", "input", 4, "ngIf"], [3, "value", "disabled", "placeholder", "decimalNumber", "nachkommastellen", "click", "focus", "blur", "input"], ["baseInput", ""], ["type", "date", 3, "input"], ["dateInput", ""], ["rows", "1", 3, "value", "disabled", "placeholder", "ngStyle", "click", "focus", "blur", "input"], ["textArea", ""]], template: function MrdInputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, MrdInputComponent_input_0_Template, 2, 9, "input", 0);
            i0.ɵɵtemplate(1, MrdInputComponent_input_1_Template, 2, 4, "input", 1);
            i0.ɵɵtemplate(2, MrdInputComponent_textarea_2_Template, 2, 8, "textarea", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.textarea);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.date);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.textarea);
        } }, dependencies: [i1.NgIf, i1.NgStyle, i2.DecimalNumberDirective], styles: ["[_nghost-%COMP%]{width:100%;display:flex;flex-direction:row}input[_ngcontent-%COMP%]{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}input[disabled][_ngcontent-%COMP%]{color:#afa6a6}textarea[_ngcontent-%COMP%]{outline:unset;background-color:transparent;width:100%;padding:0 2px;line-height:1.5em}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdInputComponent, [{
        type: Component,
        args: [{ selector: 'mrd-input', changeDetection: ChangeDetectionStrategy.OnPush, template: "<input #baseInput\r\n  (click)=\"inputClicked($event)\"\r\n  (focus)=\"focus($event)\"\r\n  (blur)=\"blur($event)\"\r\n  [value]=\"value\"\r\n  (input)=\"input($event)\"\r\n  [disabled]=\"formControl?.disabled || disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  [style.pointer-events]=\"readonly ? 'none' : 'auto'\"\r\n  [style.text-align]=\"textEnd ? 'end' : centered ? 'center' : 'start'\"\r\n  [decimalNumber]=\"maxDigits || maxDigits === 0\" [nachkommastellen]=\"maxDigits\"\r\n  *ngIf=\"!textarea\"\r\n  >\r\n<input #dateInput\r\n  *ngIf=\"date\"\r\n  [style.width]=\"customDateToggle ? '0' : '20px'\"\r\n  [style.padding]=\"'0'\"\r\n  type=\"date\"\r\n  (input)=\"input($event)\"\r\n>\r\n<textarea #textArea\r\n  (click)=\"inputClicked($event)\"\r\n  (focus)=\"focus($event)\"\r\n  (blur)=\"blur($event)\"\r\n  [value]=\"value\"\r\n  (input)=\"input($event)\"\r\n  [disabled]=\"formControl?.disabled || disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  [style.pointer-events]=\"readonly ? 'none' : 'auto'\"\r\n  *ngIf=\"textarea\"\r\n  rows=\"1\"\r\n  [ngStyle]=\"{'line-height': lineHeight + 'px'}\"\r\n></textarea>\r\n", styles: [":host{width:100%;display:flex;flex-direction:row}input{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}input[disabled]{color:#afa6a6}textarea{outline:unset;background-color:transparent;width:100%;padding:0 2px;line-height:1.5em}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZm9ybS1maWVsZC9jb21wb25lbnRzL21yZC1pbnB1dC9tcmQtaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWlucHV0L21yZC1pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBUSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNOLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQXlCLFVBQVUsRUFBYyxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7Ozs7Ozs7SUNIcEgsbUNBWUc7SUFYRCxxS0FBUyxlQUFBLDJCQUFvQixDQUFBLElBQUMsd0pBQ3JCLGVBQUEsb0JBQWEsQ0FBQSxJQURRLHNKQUV0QixlQUFBLG1CQUFZLENBQUEsSUFGVSx3SkFJckIsZUFBQSxvQkFBYSxDQUFBLElBSlE7SUFEaEMsaUJBWUc7OztJQUpELG1FQUFtRCw2RUFBQTtJQUpuRCxvQ0FBZSxrR0FBQSxtQ0FBQSw2REFBQSxzQ0FBQTs7OztJQVNqQixtQ0FNQztJQURDLHVLQUFTLGVBQUEscUJBQWEsQ0FBQSxJQUFDO0lBTHpCLGlCQU1DOzs7SUFKQywrREFBK0MsZ0JBQUE7Ozs7O0lBS2pELHNDQVlDO0lBWEMsNktBQVMsZUFBQSw0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QyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3QsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkLCBib29sZWFuQXR0cmlidXRlLCBudW1iZXJBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wsIEJhc2VPYmplY3QsIElWYWxpZGF0b3IsIFN1YnNjcmlwdGlvbkhhbmRsZXIsIFV0aWwsIFZhbGlkYXRvckZsb2F0IH0gZnJvbSAnbXJkLWNvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtcmQtaW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmRJbnB1dENvbXBvbmVudCBleHRlbmRzIEJhc2VPYmplY3QgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9NQVhfTEVOR1RIOiBudW1iZXIgPSA1MTI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9NSU5fUk9XUzogbnVtYmVyID0gMTtcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01BWF9ST1dTOiBudW1iZXIgPSAyO1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTElORV9IRUlHSFQ6IG51bWJlciA9IDI0O1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBEQVRFX1JFR0VYOiBSZWdFeHAgPSAvKFxcZHsyfSkuKFxcZHsyfSkuKFxcZHs0fSkvO1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERBVEVfUkVHRVhfSU5QVVQ6IFJlZ0V4cCA9IC8oXFxkezR9KS0oXFxkezJ9KS0oXFxkezJ9KS87XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2Jhc2VJbnB1dCcpIHB1YmxpYyBiYXNlSW5wdXRFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoJ3RleHRBcmVhJykgcHVibGljIHRleHRBcmVhRWxlbWVudDogRWxlbWVudFJlZjxIVE1MVGV4dEFyZWFFbGVtZW50PjtcclxuICBAVmlld0NoaWxkKCdkYXRlSW5wdXQnKSBwdWJsaWMgZGF0ZUlucHV0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuXHJcbiAgQElucHV0KCdtcmRGb3JtQ29udHJvbCcpIGZvcm1Db250cm9sOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2w7XHJcbiAgQElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnICc7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgbWF4TGVuZ3RoOiBudW1iZXI7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBtaW5Sb3dzOiBudW1iZXIgPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX01JTl9ST1dTO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgbWF4Um93czogbnVtYmVyID0gTXJkSW5wdXRDb21wb25lbnQuREVGQVVMVF9NQVhfUk9XUztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgcHVibGljIGxpbmVIZWlnaHQ6IG51bWJlciA9IE1yZElucHV0Q29tcG9uZW50LkRFRkFVTFRfTElORV9IRUlHSFQ7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHRleHRhcmVhOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21EYXRlVG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7YWxpYXM6ICd0ZXh0LWNlbnRlcmVkJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGNlbnRlcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHthbGlhczogJ3RleHQtZW5kJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHRleHRFbmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIGRhdGVQaWNrZXJUb2dnbGU6IEhUTUxFbGVtZW50O1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgbWF4RGlnaXRzOiBudW1iZXI7XHJcblxyXG4gIEBPdXRwdXQoKSB0b3VjaGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIGZvY3VzZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgYmx1cnJlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIGlucHV0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm1heExlbmd0aCAhPT0gdW5kZWZpbmVkICYmIE51bWJlci5pc05hTih0aGlzLm1heExlbmd0aCkpIHtcclxuICAgICAgdGhpcy5tYXhMZW5ndGggPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX01BWF9MRU5HVEg7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5taW5Sb3dzICE9PSB1bmRlZmluZWQgJiYgTnVtYmVyLmlzTmFOKHRoaXMubWluUm93cykpIHtcclxuICAgICAgdGhpcy5taW5Sb3dzID0gTXJkSW5wdXRDb21wb25lbnQuREVGQVVMVF9NSU5fUk9XUztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1heFJvd3MgIT09IHVuZGVmaW5lZCAmJiBOdW1iZXIuaXNOYU4odGhpcy5tYXhSb3dzKSkge1xyXG4gICAgICB0aGlzLm1heFJvd3MgPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX01BWF9ST1dTO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGluZUhlaWdodCAhPT0gdW5kZWZpbmVkICYmIE51bWJlci5pc05hTih0aGlzLmxpbmVIZWlnaHQpKSB7XHJcbiAgICAgIHRoaXMubGluZUhlaWdodCA9IE1yZElucHV0Q29tcG9uZW50LkRFRkFVTFRfTElORV9IRUlHSFQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50ZXh0YXJlYSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLnRleHRBcmVhRWxlbWVudCkgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5tYXhMZW5ndGgpKSB7XHJcbiAgICAgIHRoaXMudGV4dEFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQubWF4TGVuZ3RoID0gdGhpcy5tYXhMZW5ndGg7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlVGV4dEFyZWFIZWlnaHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlKSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIHRoaXMud2F0Y2godGhpcy5mb3JtQ29udHJvbC52YWx1ZUNoYW5nZXMsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VkKCkpKTtcclxuICAgICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLm1heERpZ2l0cykpIHtcclxuICAgICAgICBsZXQgZmxvYXRWYWxpZGF0b3I6IFZhbGlkYXRvckZsb2F0ID0gdGhpcy5mb3JtQ29udHJvbC52YWxpZGF0b3JzLmZpbmQoKHZhbGlkYXRvcjogSVZhbGlkYXRvcikgPT4gdmFsaWRhdG9yIGluc3RhbmNlb2YgVmFsaWRhdG9yRmxvYXQpIGFzIFZhbGlkYXRvckZsb2F0O1xyXG4gICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChmbG9hdFZhbGlkYXRvcikgJiYgVXRpbC5pc0RlZmluZWQoZmxvYXRWYWxpZGF0b3IuZGlnaXRzQWZ0ZXIpKSB7XHJcbiAgICAgICAgICB0aGlzLm1heERpZ2l0cyA9IGZsb2F0VmFsaWRhdG9yLmRpZ2l0c0FmdGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtQ29udHJvbENoYW5nZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50ZXh0YXJlYSkge1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy50ZXh0QXJlYUVsZW1lbnQpKSB7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVUZXh0QXJlYUhlaWdodCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlKSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5wdXQoZXZlbnQ6IElucHV0RXZlbnQpOiB2b2lkIHtcclxuICAgIGxldCB0YXJnZXRWYWx1ZSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBpZiAodGhpcy50ZXh0YXJlYSkge1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy50ZXh0QXJlYUVsZW1lbnQpKSB7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVUZXh0QXJlYUhlaWdodCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIGxldCBkYXRlSW5wdXRNYXRjaCA9IE1yZElucHV0Q29tcG9uZW50LkRBVEVfUkVHRVhfSU5QVVQudGVzdCh0YXJnZXRWYWx1ZSk7XHJcblxyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHRhcmdldFZhbHVlKTtcclxuICAgICAgXHJcbiAgICAgIGlmICh0aGlzLmRhdGUgJiYgZGF0ZUlucHV0TWF0Y2gpIHtcclxuICAgICAgICB0aGlzLmJhc2VJbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGFyZ2V0VmFsdWU7XHJcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQodGFyZ2V0VmFsdWUpO1xyXG4gICAgXHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZVRleHRBcmVhSGVpZ2h0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcbiAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9XHJcbiAgICAgIHRoaXMudGV4dEFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gKHRoaXMubWF4Um93cyAqIHRoaXMubGluZUhlaWdodCkgP1xyXG4gICAgICAgICh0aGlzLm1heFJvd3MgKiB0aGlzLmxpbmVIZWlnaHQpICsgJ3B4JyA6XHJcbiAgICAgICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgPCAodGhpcy5taW5Sb3dzICogdGhpcy5saW5lSGVpZ2h0KSA/XHJcbiAgICAgICAgKHRoaXMubWluUm93cyAqIHRoaXMubGluZUhlaWdodCkgKyAncHgnIDpcclxuICAgICAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5wdXRDbGlja2VkKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnRvdWNoZWQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzZWQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmZvcm1Db250cm9sICYmIHRoaXMuZGF0ZSAmJiB0aGlzLmZvcm1Db250cm9sLnZhbHVlICYmIHRoaXMuZm9ybUNvbnRyb2wudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIGlmICghbW9tZW50LmlzTW9tZW50KHRoaXMuZm9ybUNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgICAgbGV0IG1vbWVudERhdGUgPSBtb21lbnQodGhpcy5mb3JtQ29udHJvbC52YWx1ZSwgJ0RELk1NLllZWVknKS51dGModHJ1ZSk7XHJcbiAgICAgICAgaWYgKG1vbWVudERhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKG1vbWVudERhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5ibHVycmVkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRlSW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2hvd1BpY2tlcigpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW21yZERhdGVQaWNrZXJUb2dnbGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkRGF0ZVBpY2tlclRvZ2dsZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBASW5wdXQoJ21yZERhdGVQaWNrZXJUb2dnbGUnKSBwdWJsaWMgbXJkRGF0ZVBpY2tlclRvZ2dsZTogTXJkSW5wdXRDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXHJcbiAgKSB7fVxyXG5cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoJ21yZC1pY29uJykpIHtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9ICcyMHB4JztcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzIwcHgnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5tcmREYXRlUGlja2VyVG9nZ2xlKSkge1xyXG4gICAgICB0aGlzLm1yZERhdGVQaWNrZXJUb2dnbGUudG9nZ2xlQ2xpY2tlZCgpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIjxpbnB1dCAjYmFzZUlucHV0XHJcbiAgKGNsaWNrKT1cImlucHV0Q2xpY2tlZCgkZXZlbnQpXCJcclxuICAoZm9jdXMpPVwiZm9jdXMoJGV2ZW50KVwiXHJcbiAgKGJsdXIpPVwiYmx1cigkZXZlbnQpXCJcclxuICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gIChpbnB1dCk9XCJpbnB1dCgkZXZlbnQpXCJcclxuICBbZGlzYWJsZWRdPVwiZm9ybUNvbnRyb2w/LmRpc2FibGVkIHx8IGRpc2FibGVkXCJcclxuICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gIFtzdHlsZS5wb2ludGVyLWV2ZW50c109XCJyZWFkb25seSA/ICdub25lJyA6ICdhdXRvJ1wiXHJcbiAgW3N0eWxlLnRleHQtYWxpZ25dPVwidGV4dEVuZCA/ICdlbmQnIDogY2VudGVyZWQgPyAnY2VudGVyJyA6ICdzdGFydCdcIlxyXG4gIFtkZWNpbWFsTnVtYmVyXT1cIm1heERpZ2l0cyB8fCBtYXhEaWdpdHMgPT09IDBcIiBbbmFjaGtvbW1hc3RlbGxlbl09XCJtYXhEaWdpdHNcIlxyXG4gICpuZ0lmPVwiIXRleHRhcmVhXCJcclxuICA+XHJcbjxpbnB1dCAjZGF0ZUlucHV0XHJcbiAgKm5nSWY9XCJkYXRlXCJcclxuICBbc3R5bGUud2lkdGhdPVwiY3VzdG9tRGF0ZVRvZ2dsZSA/ICcwJyA6ICcyMHB4J1wiXHJcbiAgW3N0eWxlLnBhZGRpbmddPVwiJzAnXCJcclxuICB0eXBlPVwiZGF0ZVwiXHJcbiAgKGlucHV0KT1cImlucHV0KCRldmVudClcIlxyXG4+XHJcbjx0ZXh0YXJlYSAjdGV4dEFyZWFcclxuICAoY2xpY2spPVwiaW5wdXRDbGlja2VkKCRldmVudClcIlxyXG4gIChmb2N1cyk9XCJmb2N1cygkZXZlbnQpXCJcclxuICAoYmx1cik9XCJibHVyKCRldmVudClcIlxyXG4gIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgKGlucHV0KT1cImlucHV0KCRldmVudClcIlxyXG4gIFtkaXNhYmxlZF09XCJmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWRcIlxyXG4gIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgW3N0eWxlLnBvaW50ZXItZXZlbnRzXT1cInJlYWRvbmx5ID8gJ25vbmUnIDogJ2F1dG8nXCJcclxuICAqbmdJZj1cInRleHRhcmVhXCJcclxuICByb3dzPVwiMVwiXHJcbiAgW25nU3R5bGVdPVwieydsaW5lLWhlaWdodCc6IGxpbmVIZWlnaHQgKyAncHgnfVwiXHJcbj48L3RleHRhcmVhPlxyXG4iXX0=