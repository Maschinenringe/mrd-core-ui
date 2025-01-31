import { ChangeDetectionStrategy, Component, Directive, EventEmitter, HostListener, Input, Output, ViewChild, booleanAttribute, numberAttribute } from '@angular/core';
import moment from 'moment';
import { BaseObject, SubscriptionHandler, Util } from 'mrd-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
    i0.ɵɵproperty("value", ctx_r0.value)("disabled", (ctx_r0.formControl == null ? null : ctx_r0.formControl.disabled) || ctx_r0.disabled)("placeholder", ctx_r0.placeholder);
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
    touched = new EventEmitter();
    focused = new EventEmitter();
    blurred = new EventEmitter();
    valueChange = new EventEmitter();
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
        if (this.date && Util.isDefined(this.formControl) && !this.formControl.convertTo) {
            this.formControl.convertTo = (value) => {
                return Util.isDefined(value) && moment.isMoment(value) ? value.format('DD.MM.YYYY') : value;
            };
        }
        if (Util.isDefined(this.formControl) && Util.isDefined(this.formControl.value)) {
            this.value = this.formControl.value;
            this.cdr.detectChanges();
        }
        if (Util.isDefined(this.formControl)) {
            this.watch(this.formControl.valueChanges, new SubscriptionHandler(() => this.formControlChanged()));
        }
    }
    formControlChanged() {
        if (this.textarea) {
            if (Util.isDefined(this.textAreaElement)) {
                this.calculateTextAreaHeight();
            }
        }
        if (Util.isDefined(this.formControl.control.value)) {
            this.value = this.date ? this.formControl.value : this.formControl.control.value;
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
            let dateMatch = MrdInputComponent.DATE_REGEX.test(targetValue);
            let dateInputMatch = MrdInputComponent.DATE_REGEX_INPUT.test(targetValue);
            this.formControl.setValue(this.date && (dateMatch || dateInputMatch) ? (dateMatch ? moment(targetValue, 'DD.MM.YYYY').utc(true) : moment(targetValue, 'YYYY-MM-DD').utc(true)) : targetValue);
            if (this.date && dateInputMatch) {
                this.baseInputElement.nativeElement.focus();
            }
        }
        else {
            this.value = targetValue;
            this.valueChange.emit(this.value);
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
        this.focused.emit();
    }
    blur(event) {
        if (this.formControl && this.date && this.formControl.control.value && this.formControl.control.value !== '') {
            if (!moment.isMoment(this.formControl.control.value)) {
                let momentDate = moment(this.formControl.control.value, 'DD.MM.YYYY').utc(true);
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
        } }, inputs: { formControl: ["mrdFormControl", "formControl"], placeholder: "placeholder", value: "value", maxLength: ["maxLength", "maxLength", numberAttribute], minRows: ["minRows", "minRows", numberAttribute], maxRows: ["maxRows", "maxRows", numberAttribute], lineHeight: ["lineHeight", "lineHeight", numberAttribute], disabled: ["disabled", "disabled", booleanAttribute], readonly: ["readonly", "readonly", booleanAttribute], required: ["required", "required", booleanAttribute], textarea: ["textarea", "textarea", booleanAttribute], date: ["date", "date", booleanAttribute], customDateToggle: ["customDateToggle", "customDateToggle", booleanAttribute], centered: ["text-centered", "centered", booleanAttribute], textEnd: ["text-end", "textEnd", booleanAttribute], datePickerToggle: "datePickerToggle" }, outputs: { touched: "touched", focused: "focused", blurred: "blurred", valueChange: "valueChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 3, consts: [[3, "value", "disabled", "placeholder", "pointer-events", "text-align", "click", "focus", "blur", "input", 4, "ngIf"], ["type", "date", 3, "width", "padding", "input", 4, "ngIf"], ["rows", "1", 3, "value", "disabled", "placeholder", "pointer-events", "ngStyle", "click", "focus", "blur", "input", 4, "ngIf"], [3, "value", "disabled", "placeholder", "click", "focus", "blur", "input"], ["baseInput", ""], ["type", "date", 3, "input"], ["dateInput", ""], ["rows", "1", 3, "value", "disabled", "placeholder", "ngStyle", "click", "focus", "blur", "input"], ["textArea", ""]], template: function MrdInputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, MrdInputComponent_input_0_Template, 2, 7, "input", 0);
            i0.ɵɵtemplate(1, MrdInputComponent_input_1_Template, 2, 4, "input", 1);
            i0.ɵɵtemplate(2, MrdInputComponent_textarea_2_Template, 2, 8, "textarea", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.textarea);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.date);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.textarea);
        } }, dependencies: [i1.NgIf, i1.NgStyle], styles: ["[_nghost-%COMP%]{width:100%;display:flex;flex-direction:row}input[_ngcontent-%COMP%]{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}input[disabled][_ngcontent-%COMP%]{color:#afa6a6}textarea[_ngcontent-%COMP%]{outline:unset;background-color:transparent;width:100%;padding:0 2px;line-height:1.5em}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdInputComponent, [{
        type: Component,
        args: [{ selector: 'mrd-input', changeDetection: ChangeDetectionStrategy.OnPush, template: "<input #baseInput\r\n  (click)=\"inputClicked($event)\"\r\n  (focus)=\"focus($event)\"\r\n  (blur)=\"blur($event)\"\r\n  [value]=\"value\"\r\n  (input)=\"input($event)\"\r\n  [disabled]=\"formControl?.disabled || disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  [style.pointer-events]=\"readonly ? 'none' : 'auto'\"\r\n  [style.text-align]=\"textEnd ? 'end' : centered ? 'center' : 'start'\"\r\n  *ngIf=\"!textarea\"\r\n  >\r\n<input #dateInput\r\n  *ngIf=\"date\"\r\n  [style.width]=\"customDateToggle ? '0' : '20px'\"\r\n  [style.padding]=\"'0'\"\r\n  type=\"date\"\r\n  (input)=\"input($event)\"\r\n>\r\n<textarea #textArea\r\n  (click)=\"inputClicked($event)\"\r\n  (focus)=\"focus($event)\"\r\n  (blur)=\"blur($event)\"\r\n  [value]=\"value\"\r\n  (input)=\"input($event)\"\r\n  [disabled]=\"formControl?.disabled || disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  [style.pointer-events]=\"readonly ? 'none' : 'auto'\"\r\n  *ngIf=\"textarea\"\r\n  rows=\"1\"\r\n  [ngStyle]=\"{'line-height': lineHeight + 'px'}\"\r\n></textarea>\r\n", styles: [":host{width:100%;display:flex;flex-direction:row}input{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}input[disabled]{color:#afa6a6}textarea{outline:unset;background-color:transparent;width:100%;padding:0 2px;line-height:1.5em}\n"] }]
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
        }], touched: [{
            type: Output
        }], focused: [{
            type: Output
        }], blurred: [{
            type: Output
        }], valueChange: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZm9ybS1maWVsZC9jb21wb25lbnRzL21yZC1pbnB1dC9tcmQtaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWlucHV0L21yZC1pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBUSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNOLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQXlCLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7O0lDSHhGLG1DQVdHO0lBVkQscUtBQVMsZUFBQSwyQkFBb0IsQ0FBQSxJQUFDLHdKQUNyQixlQUFBLG9CQUFhLENBQUEsSUFEUSxzSkFFdEIsZUFBQSxtQkFBWSxDQUFBLElBRlUsd0pBSXJCLGVBQUEsb0JBQWEsQ0FBQSxJQUpRO0lBRGhDLGlCQVdHOzs7SUFIRCxtRUFBbUQsNkVBQUE7SUFKbkQsb0NBQWUsa0dBQUEsbUNBQUE7Ozs7SUFRakIsbUNBTUM7SUFEQyx1S0FBUyxlQUFBLHFCQUFhLENBQUEsSUFBQztJQUx6QixpQkFNQzs7O0lBSkMsK0RBQStDLGdCQUFBOzs7OztJQUtqRCxzQ0FZQztJQVhDLDZLQUFTLGVBQUEsNEJBQW9CLENBQUEsSUFBQyxnS0FDckIs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QUM1QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDMUM7SUFDSCxDQUFDO2dHQXRCVSxtQkFBbUI7NEZBQW5CLG1CQUFtQjswR0FBbkIsbUJBQWU7Ozt1RkFBZixtQkFBbUI7Y0FIL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7YUFDbEM7NkRBR3NDLG1CQUFtQjtrQkFBdkQsS0FBSzttQkFBQyxxQkFBcUI7WUFnQnJCLE9BQU87a0JBRGIsWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3QsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkLCBib29sZWFuQXR0cmlidXRlLCBudW1iZXJBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wsIEJhc2VPYmplY3QsIFN1YnNjcmlwdGlvbkhhbmRsZXIsIFV0aWwgfSBmcm9tICdtcmQtY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1pbnB1dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZElucHV0Q29tcG9uZW50IGV4dGVuZHMgQmFzZU9iamVjdCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01BWF9MRU5HVEg6IG51bWJlciA9IDUxMjtcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01JTl9ST1dTOiBudW1iZXIgPSAxO1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTUFYX1JPV1M6IG51bWJlciA9IDI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9MSU5FX0hFSUdIVDogbnVtYmVyID0gMjQ7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERBVEVfUkVHRVg6IFJlZ0V4cCA9IC8oXFxkezJ9KS4oXFxkezJ9KS4oXFxkezR9KS87XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREFURV9SRUdFWF9JTlBVVDogUmVnRXhwID0gLyhcXGR7NH0pLShcXGR7Mn0pLShcXGR7Mn0pLztcclxuXHJcbiAgQFZpZXdDaGlsZCgnYmFzZUlucHV0JykgcHVibGljIGJhc2VJbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcbiAgQFZpZXdDaGlsZCgndGV4dEFyZWEnKSBwdWJsaWMgdGV4dEFyZWFFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxUZXh0QXJlYUVsZW1lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoJ2RhdGVJbnB1dCcpIHB1YmxpYyBkYXRlSW5wdXRFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG5cclxuICBASW5wdXQoJ21yZEZvcm1Db250cm9sJykgZm9ybUNvbnRyb2w6IEFjY2Vzc2FibGVGb3JtQ29udHJvbDtcclxuICBASW5wdXQoKSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcgJztcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHZhbHVlOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBtYXhMZW5ndGg6IG51bWJlcjtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgcHVibGljIG1pblJvd3M6IG51bWJlciA9IE1yZElucHV0Q29tcG9uZW50LkRFRkFVTFRfTUlOX1JPV1M7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBtYXhSb3dzOiBudW1iZXIgPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX01BWF9ST1dTO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgbGluZUhlaWdodDogbnVtYmVyID0gTXJkSW5wdXRDb21wb25lbnQuREVGQVVMVF9MSU5FX0hFSUdIVDtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyByZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgdGV4dGFyZWE6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBkYXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbURhdGVUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHthbGlhczogJ3RleHQtY2VudGVyZWQnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgY2VudGVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe2FsaWFzOiAndGV4dC1lbmQnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgdGV4dEVuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgZGF0ZVBpY2tlclRvZ2dsZTogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIEBPdXRwdXQoKSB0b3VjaGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIGZvY3VzZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgYmx1cnJlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubWF4TGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgTnVtYmVyLmlzTmFOKHRoaXMubWF4TGVuZ3RoKSkge1xyXG4gICAgICB0aGlzLm1heExlbmd0aCA9IE1yZElucHV0Q29tcG9uZW50LkRFRkFVTFRfTUFYX0xFTkdUSDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1pblJvd3MgIT09IHVuZGVmaW5lZCAmJiBOdW1iZXIuaXNOYU4odGhpcy5taW5Sb3dzKSkge1xyXG4gICAgICB0aGlzLm1pblJvd3MgPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX01JTl9ST1dTO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubWF4Um93cyAhPT0gdW5kZWZpbmVkICYmIE51bWJlci5pc05hTih0aGlzLm1heFJvd3MpKSB7XHJcbiAgICAgIHRoaXMubWF4Um93cyA9IE1yZElucHV0Q29tcG9uZW50LkRFRkFVTFRfTUFYX1JPV1M7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5saW5lSGVpZ2h0ICE9PSB1bmRlZmluZWQgJiYgTnVtYmVyLmlzTmFOKHRoaXMubGluZUhlaWdodCkpIHtcclxuICAgICAgdGhpcy5saW5lSGVpZ2h0ID0gTXJkSW5wdXRDb21wb25lbnQuREVGQVVMVF9MSU5FX0hFSUdIVDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRleHRhcmVhICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMudGV4dEFyZWFFbGVtZW50KSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLm1heExlbmd0aCkpIHtcclxuICAgICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5tYXhMZW5ndGggPSB0aGlzLm1heExlbmd0aDtcclxuICAgICAgdGhpcy5jYWxjdWxhdGVUZXh0QXJlYUhlaWdodCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGF0ZSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSAmJiAhdGhpcy5mb3JtQ29udHJvbC5jb252ZXJ0VG8pIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5jb252ZXJ0VG8gPSAodmFsdWU6IE1vbWVudCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBVdGlsLmlzRGVmaW5lZCh2YWx1ZSkgJiYgbW9tZW50LmlzTW9tZW50KHZhbHVlKSA/IHZhbHVlLmZvcm1hdCgnREQuTU0uWVlZWScpIDogdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWU7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgdGhpcy53YXRjaCh0aGlzLmZvcm1Db250cm9sLnZhbHVlQ2hhbmdlcywgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKCkgPT4gdGhpcy5mb3JtQ29udHJvbENoYW5nZWQoKSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtQ29udHJvbENoYW5nZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50ZXh0YXJlYSkge1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy50ZXh0QXJlYUVsZW1lbnQpKSB7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVUZXh0QXJlYUhlaWdodCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlKSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5kYXRlID8gdGhpcy5mb3JtQ29udHJvbC52YWx1ZSA6IHRoaXMuZm9ybUNvbnRyb2wuY29udHJvbC52YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlucHV0KGV2ZW50OiBJbnB1dEV2ZW50KTogdm9pZCB7XHJcbiAgICBsZXQgdGFyZ2V0VmFsdWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgaWYgKHRoaXMudGV4dGFyZWEpIHtcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMudGV4dEFyZWFFbGVtZW50KSkge1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlVGV4dEFyZWFIZWlnaHQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICBsZXQgZGF0ZU1hdGNoID0gTXJkSW5wdXRDb21wb25lbnQuREFURV9SRUdFWC50ZXN0KHRhcmdldFZhbHVlKTtcclxuICAgICAgbGV0IGRhdGVJbnB1dE1hdGNoID0gTXJkSW5wdXRDb21wb25lbnQuREFURV9SRUdFWF9JTlBVVC50ZXN0KHRhcmdldFZhbHVlKTtcclxuXHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5kYXRlICYmIChkYXRlTWF0Y2ggfHwgZGF0ZUlucHV0TWF0Y2gpID8gKGRhdGVNYXRjaCA/IG1vbWVudCh0YXJnZXRWYWx1ZSwgJ0RELk1NLllZWVknKS51dGModHJ1ZSkgOiBtb21lbnQodGFyZ2V0VmFsdWUsICdZWVlZLU1NLUREJykudXRjKHRydWUpKSA6IHRhcmdldFZhbHVlKTtcclxuICAgICAgXHJcbiAgICAgIGlmICh0aGlzLmRhdGUgJiYgZGF0ZUlucHV0TWF0Y2gpIHtcclxuICAgICAgICB0aGlzLmJhc2VJbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGFyZ2V0VmFsdWU7XHJcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVUZXh0QXJlYUhlaWdodCgpOiB2b2lkIHtcclxuICAgIHRoaXMudGV4dEFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG4gICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPVxyXG4gICAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCA+ICh0aGlzLm1heFJvd3MgKiB0aGlzLmxpbmVIZWlnaHQpID9cclxuICAgICAgICAodGhpcy5tYXhSb3dzICogdGhpcy5saW5lSGVpZ2h0KSArICdweCcgOlxyXG4gICAgICAgIHRoaXMudGV4dEFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0IDwgKHRoaXMubWluUm93cyAqIHRoaXMubGluZUhlaWdodCkgP1xyXG4gICAgICAgICh0aGlzLm1pblJvd3MgKiB0aGlzLmxpbmVIZWlnaHQpICsgJ3B4JyA6XHJcbiAgICAgICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlucHV0Q2xpY2tlZChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy50b3VjaGVkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmb2N1cyhldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c2VkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBibHVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5mb3JtQ29udHJvbCAmJiB0aGlzLmRhdGUgJiYgdGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlICYmIHRoaXMuZm9ybUNvbnRyb2wuY29udHJvbC52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgaWYgKCFtb21lbnQuaXNNb21lbnQodGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlKSkge1xyXG4gICAgICAgIGxldCBtb21lbnREYXRlID0gbW9tZW50KHRoaXMuZm9ybUNvbnRyb2wuY29udHJvbC52YWx1ZSwgJ0RELk1NLllZWVknKS51dGModHJ1ZSk7XHJcbiAgICAgICAgaWYgKG1vbWVudERhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKG1vbWVudERhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5ibHVycmVkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRlSW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2hvd1BpY2tlcigpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW21yZERhdGVQaWNrZXJUb2dnbGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkRGF0ZVBpY2tlclRvZ2dsZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBASW5wdXQoJ21yZERhdGVQaWNrZXJUb2dnbGUnKSBwdWJsaWMgbXJkRGF0ZVBpY2tlclRvZ2dsZTogTXJkSW5wdXRDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXHJcbiAgKSB7fVxyXG5cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoJ21yZC1pY29uJykpIHtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9ICcyMHB4JztcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzIwcHgnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5tcmREYXRlUGlja2VyVG9nZ2xlKSkge1xyXG4gICAgICB0aGlzLm1yZERhdGVQaWNrZXJUb2dnbGUudG9nZ2xlQ2xpY2tlZCgpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIjxpbnB1dCAjYmFzZUlucHV0XHJcbiAgKGNsaWNrKT1cImlucHV0Q2xpY2tlZCgkZXZlbnQpXCJcclxuICAoZm9jdXMpPVwiZm9jdXMoJGV2ZW50KVwiXHJcbiAgKGJsdXIpPVwiYmx1cigkZXZlbnQpXCJcclxuICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gIChpbnB1dCk9XCJpbnB1dCgkZXZlbnQpXCJcclxuICBbZGlzYWJsZWRdPVwiZm9ybUNvbnRyb2w/LmRpc2FibGVkIHx8IGRpc2FibGVkXCJcclxuICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gIFtzdHlsZS5wb2ludGVyLWV2ZW50c109XCJyZWFkb25seSA/ICdub25lJyA6ICdhdXRvJ1wiXHJcbiAgW3N0eWxlLnRleHQtYWxpZ25dPVwidGV4dEVuZCA/ICdlbmQnIDogY2VudGVyZWQgPyAnY2VudGVyJyA6ICdzdGFydCdcIlxyXG4gICpuZ0lmPVwiIXRleHRhcmVhXCJcclxuICA+XHJcbjxpbnB1dCAjZGF0ZUlucHV0XHJcbiAgKm5nSWY9XCJkYXRlXCJcclxuICBbc3R5bGUud2lkdGhdPVwiY3VzdG9tRGF0ZVRvZ2dsZSA/ICcwJyA6ICcyMHB4J1wiXHJcbiAgW3N0eWxlLnBhZGRpbmddPVwiJzAnXCJcclxuICB0eXBlPVwiZGF0ZVwiXHJcbiAgKGlucHV0KT1cImlucHV0KCRldmVudClcIlxyXG4+XHJcbjx0ZXh0YXJlYSAjdGV4dEFyZWFcclxuICAoY2xpY2spPVwiaW5wdXRDbGlja2VkKCRldmVudClcIlxyXG4gIChmb2N1cyk9XCJmb2N1cygkZXZlbnQpXCJcclxuICAoYmx1cik9XCJibHVyKCRldmVudClcIlxyXG4gIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgKGlucHV0KT1cImlucHV0KCRldmVudClcIlxyXG4gIFtkaXNhYmxlZF09XCJmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWRcIlxyXG4gIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgW3N0eWxlLnBvaW50ZXItZXZlbnRzXT1cInJlYWRvbmx5ID8gJ25vbmUnIDogJ2F1dG8nXCJcclxuICAqbmdJZj1cInRleHRhcmVhXCJcclxuICByb3dzPVwiMVwiXHJcbiAgW25nU3R5bGVdPVwieydsaW5lLWhlaWdodCc6IGxpbmVIZWlnaHQgKyAncHgnfVwiXHJcbj48L3RleHRhcmVhPlxyXG4iXX0=