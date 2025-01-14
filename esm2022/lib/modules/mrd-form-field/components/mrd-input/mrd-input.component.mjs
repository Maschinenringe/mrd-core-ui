import { ChangeDetectionStrategy, Component, Directive, EventEmitter, HostListener, Input, Output, ViewChild, booleanAttribute, numberAttribute } from '@angular/core';
import * as moment from 'moment';
import { Util } from 'mrd-core';
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
    i0.ɵɵstyleProp("pointer-events", ctx_r0.readonly ? "none" : "auto")("text-align", ctx_r0.centered ? "center" : "start");
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
export class MrdInputComponent {
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
    datePickerToggle;
    touched = new EventEmitter();
    focused = new EventEmitter();
    blurred = new EventEmitter();
    valueChange = new EventEmitter();
    constructor(cdr) {
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
        if (Util.isDefined(this.formControl) && Util.isDefined(this.formControl.value)) {
            this.value = this.formControl.value;
            this.cdr.detectChanges();
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
        if (this.datePickerToggle) {
            this.datePickerToggle.addEventListener('click', (event) => {
                if (Util.isDefined(this.dateInputElement)) {
                    debugger;
                    this.dateInputElement.nativeElement.focus();
                }
            });
        }
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
            this.formControl.setValue(this.date && (dateMatch || dateInputMatch) ? (dateMatch ? moment(targetValue, 'DD.MM.YYYY').utc(true) : moment(targetValue, 'YYYY-MM-DD')) : targetValue);
            if (Util.isDefined(this.formControl.control.value)) {
                this.value = this.date ? this.formControl.value : this.formControl.control.value;
            }
            if (this.date && dateInputMatch) {
                this.baseInputElement.nativeElement.focus();
            }
        }
        else {
            this.value = targetValue;
        }
        this.valueChange.emit(this.value);
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
                    if (Util.isDefined(this.formControl.value)) {
                        this.value = this.formControl.value;
                    }
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
        } }, inputs: { formControl: ["mrdFormControl", "formControl"], placeholder: "placeholder", value: "value", maxLength: ["maxLength", "maxLength", numberAttribute], minRows: ["minRows", "minRows", numberAttribute], maxRows: ["maxRows", "maxRows", numberAttribute], lineHeight: ["lineHeight", "lineHeight", numberAttribute], disabled: ["disabled", "disabled", booleanAttribute], readonly: ["readonly", "readonly", booleanAttribute], required: ["required", "required", booleanAttribute], textarea: ["textarea", "textarea", booleanAttribute], date: ["date", "date", booleanAttribute], customDateToggle: ["customDateToggle", "customDateToggle", booleanAttribute], centered: ["centered", "centered", booleanAttribute], datePickerToggle: "datePickerToggle" }, outputs: { touched: "touched", focused: "focused", blurred: "blurred", valueChange: "valueChange" }, features: [i0.ɵɵInputTransformsFeature], decls: 3, vars: 3, consts: [[3, "value", "disabled", "placeholder", "pointer-events", "text-align", "click", "focus", "blur", "input", 4, "ngIf"], ["type", "date", 3, "width", "padding", "input", 4, "ngIf"], ["rows", "1", 3, "value", "disabled", "placeholder", "pointer-events", "ngStyle", "click", "focus", "blur", "input", 4, "ngIf"], [3, "value", "disabled", "placeholder", "click", "focus", "blur", "input"], ["baseInput", ""], ["type", "date", 3, "input"], ["dateInput", ""], ["rows", "1", 3, "value", "disabled", "placeholder", "ngStyle", "click", "focus", "blur", "input"], ["textArea", ""]], template: function MrdInputComponent_Template(rf, ctx) { if (rf & 1) {
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
        args: [{ selector: 'mrd-input', changeDetection: ChangeDetectionStrategy.OnPush, template: "<input #baseInput\r\n  (click)=\"inputClicked($event)\"\r\n  (focus)=\"focus($event)\"\r\n  (blur)=\"blur($event)\"\r\n  [value]=\"value\"\r\n  (input)=\"input($event)\"\r\n  [disabled]=\"formControl?.disabled || disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  [style.pointer-events]=\"readonly ? 'none' : 'auto'\"\r\n  [style.text-align]=\"centered ? 'center' : 'start'\"\r\n  *ngIf=\"!textarea\"\r\n  >\r\n<input #dateInput\r\n  *ngIf=\"date\"\r\n  [style.width]=\"customDateToggle ? '0' : '20px'\"\r\n  [style.padding]=\"'0'\"\r\n  type=\"date\"\r\n  (input)=\"input($event)\"\r\n>\r\n<textarea #textArea\r\n  (click)=\"inputClicked($event)\"\r\n  (focus)=\"focus($event)\"\r\n  (blur)=\"blur($event)\"\r\n  [value]=\"value\"\r\n  (input)=\"input($event)\"\r\n  [disabled]=\"formControl?.disabled || disabled\"\r\n  [placeholder]=\"placeholder\"\r\n  [style.pointer-events]=\"readonly ? 'none' : 'auto'\"\r\n  *ngIf=\"textarea\"\r\n  rows=\"1\"\r\n  [ngStyle]=\"{'line-height': lineHeight + 'px'}\"\r\n></textarea>\r\n", styles: [":host{width:100%;display:flex;flex-direction:row}input{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}input[disabled]{color:#afa6a6}textarea{outline:unset;background-color:transparent;width:100%;padding:0 2px;line-height:1.5em}\n"] }]
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
            args: [{ transform: booleanAttribute }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZm9ybS1maWVsZC9jb21wb25lbnRzL21yZC1pbnB1dC9tcmQtaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWlucHV0L21yZC1pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBUSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNOLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRWpDLE9BQU8sRUFBeUIsSUFBSSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7Ozs7OztJQ0h2RCxtQ0FXRztJQVZELHFLQUFTLGVBQUEsMkJBQW9CLENBQUEsSUFBQyx3SkFDckIsZUFBQSxvQkFBYSxDQUFBLElBRFEsc0pBRXRCLGVBQUEsbUJBQVksQ0FBQSxJQUZVLHdKQUlyQixlQUFBLG9CQUFhLENBQUEsSUFKUTtJQURoQyxpQkFXRzs7O0lBSEQsbUVBQW1ELG9EQUFBO0lBSm5ELG9DQUFlLGtHQUFBLG1DQUFBOzs7O0lBUWpCLG1DQU1DO0lBREMsdUtBQVMsZUFBQSxxQkFBYSxDQUFBLElBQUM7SUFMekIsaUJBTUM7OztJQUpDLCtEQUErQyxnQkFBQTs7Ozs7SUFLakQsc0NBWUM7SUFYQyw2S0FBUyxlQUFBLDRCQUFvQixDQUFBLElBQUMsZ0tBQ3JCLGVBQUEscUJBQWEsQ0FBQSxJ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bmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0LCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCwgYm9vbGVhbkF0dHJpYnV0ZSwgbnVtYmVyQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wsIFV0aWwgfSBmcm9tICdtcmQtY29yZSc7XHJcbmltcG9ydCB7IE1yZEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21yZC1idXR0b24vY29tcG9uZW50cy9tcmQtYnV0dG9uL21yZC1idXR0b24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWlucHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9NQVhfTEVOR1RIOiBudW1iZXIgPSA1MTI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9NSU5fUk9XUzogbnVtYmVyID0gMTtcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01BWF9ST1dTOiBudW1iZXIgPSAyO1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTElORV9IRUlHSFQ6IG51bWJlciA9IDI0O1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBEQVRFX1JFR0VYOiBSZWdFeHAgPSAvKFxcZHsyfSkuKFxcZHsyfSkuKFxcZHs0fSkvO1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERBVEVfUkVHRVhfSU5QVVQ6IFJlZ0V4cCA9IC8oXFxkezR9KS0oXFxkezJ9KS0oXFxkezJ9KS87XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2Jhc2VJbnB1dCcpIHB1YmxpYyBiYXNlSW5wdXRFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoJ3RleHRBcmVhJykgcHVibGljIHRleHRBcmVhRWxlbWVudDogRWxlbWVudFJlZjxIVE1MVGV4dEFyZWFFbGVtZW50PjtcclxuICBAVmlld0NoaWxkKCdkYXRlSW5wdXQnKSBwdWJsaWMgZGF0ZUlucHV0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuXHJcbiAgQElucHV0KCdtcmRGb3JtQ29udHJvbCcpIGZvcm1Db250cm9sOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2w7XHJcbiAgQElucHV0KCkgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnICc7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgbWF4TGVuZ3RoOiBudW1iZXI7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBtaW5Sb3dzOiBudW1iZXIgPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX01JTl9ST1dTO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgbWF4Um93czogbnVtYmVyID0gTXJkSW5wdXRDb21wb25lbnQuREVGQVVMVF9NQVhfUk9XUztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgcHVibGljIGxpbmVIZWlnaHQ6IG51bWJlciA9IE1yZElucHV0Q29tcG9uZW50LkRFRkFVTFRfTElORV9IRUlHSFQ7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHRleHRhcmVhOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21EYXRlVG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGNlbnRlcmVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBkYXRlUGlja2VyVG9nZ2xlOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgQE91dHB1dCgpIHRvdWNoZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgZm9jdXNlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBibHVycmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tYXhMZW5ndGggIT09IHVuZGVmaW5lZCAmJiBOdW1iZXIuaXNOYU4odGhpcy5tYXhMZW5ndGgpKSB7XHJcbiAgICAgIHRoaXMubWF4TGVuZ3RoID0gTXJkSW5wdXRDb21wb25lbnQuREVGQVVMVF9NQVhfTEVOR1RIO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubWluUm93cyAhPT0gdW5kZWZpbmVkICYmIE51bWJlci5pc05hTih0aGlzLm1pblJvd3MpKSB7XHJcbiAgICAgIHRoaXMubWluUm93cyA9IE1yZElucHV0Q29tcG9uZW50LkRFRkFVTFRfTUlOX1JPV1M7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5tYXhSb3dzICE9PSB1bmRlZmluZWQgJiYgTnVtYmVyLmlzTmFOKHRoaXMubWF4Um93cykpIHtcclxuICAgICAgdGhpcy5tYXhSb3dzID0gTXJkSW5wdXRDb21wb25lbnQuREVGQVVMVF9NQVhfUk9XUztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxpbmVIZWlnaHQgIT09IHVuZGVmaW5lZCAmJiBOdW1iZXIuaXNOYU4odGhpcy5saW5lSGVpZ2h0KSkge1xyXG4gICAgICB0aGlzLmxpbmVIZWlnaHQgPSBNcmRJbnB1dENvbXBvbmVudC5ERUZBVUxUX0xJTkVfSEVJR0hUO1xyXG4gICAgfVxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50ZXh0YXJlYSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLnRleHRBcmVhRWxlbWVudCkgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5tYXhMZW5ndGgpKSB7XHJcbiAgICAgIHRoaXMudGV4dEFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQubWF4TGVuZ3RoID0gdGhpcy5tYXhMZW5ndGg7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlVGV4dEFyZWFIZWlnaHQoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmRhdGUgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgJiYgIXRoaXMuZm9ybUNvbnRyb2wuY29udmVydFRvKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuY29udmVydFRvID0gKHZhbHVlOiBNb21lbnQpID0+IHtcclxuICAgICAgICByZXR1cm4gVXRpbC5pc0RlZmluZWQodmFsdWUpICYmIG1vbWVudC5pc01vbWVudCh2YWx1ZSkgPyB2YWx1ZS5mb3JtYXQoJ0RELk1NLllZWVknKSA6IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kYXRlUGlja2VyVG9nZ2xlKSB7XHJcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmRhdGVJbnB1dEVsZW1lbnQpKSB7ZGVidWdnZXJcclxuICAgICAgICAgIHRoaXMuZGF0ZUlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbnB1dChldmVudDogSW5wdXRFdmVudCk6IHZvaWQge1xyXG4gICAgbGV0IHRhcmdldFZhbHVlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIGlmICh0aGlzLnRleHRhcmVhKSB7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLnRleHRBcmVhRWxlbWVudCkpIHtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVRleHRBcmVhSGVpZ2h0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgbGV0IGRhdGVNYXRjaCA9IE1yZElucHV0Q29tcG9uZW50LkRBVEVfUkVHRVgudGVzdCh0YXJnZXRWYWx1ZSk7XHJcbiAgICAgIGxldCBkYXRlSW5wdXRNYXRjaCA9IE1yZElucHV0Q29tcG9uZW50LkRBVEVfUkVHRVhfSU5QVVQudGVzdCh0YXJnZXRWYWx1ZSk7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5kYXRlICYmIChkYXRlTWF0Y2ggfHwgZGF0ZUlucHV0TWF0Y2gpID8gKGRhdGVNYXRjaCA/IG1vbWVudCh0YXJnZXRWYWx1ZSwgJ0RELk1NLllZWVknKS51dGModHJ1ZSkgOiBtb21lbnQodGFyZ2V0VmFsdWUsICdZWVlZLU1NLUREJykpIDogdGFyZ2V0VmFsdWUpO1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmRhdGUgPyB0aGlzLmZvcm1Db250cm9sLnZhbHVlIDogdGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmRhdGUgJiYgZGF0ZUlucHV0TWF0Y2gpIHtcclxuICAgICAgICB0aGlzLmJhc2VJbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGFyZ2V0VmFsdWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZVRleHRBcmVhSGVpZ2h0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcbiAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9XHJcbiAgICAgIHRoaXMudGV4dEFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gKHRoaXMubWF4Um93cyAqIHRoaXMubGluZUhlaWdodCkgP1xyXG4gICAgICAgICh0aGlzLm1heFJvd3MgKiB0aGlzLmxpbmVIZWlnaHQpICsgJ3B4JyA6XHJcbiAgICAgICAgdGhpcy50ZXh0QXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgPCAodGhpcy5taW5Sb3dzICogdGhpcy5saW5lSGVpZ2h0KSA/XHJcbiAgICAgICAgKHRoaXMubWluUm93cyAqIHRoaXMubGluZUhlaWdodCkgKyAncHgnIDpcclxuICAgICAgICB0aGlzLnRleHRBcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5wdXRDbGlja2VkKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnRvdWNoZWQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzZWQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmZvcm1Db250cm9sICYmIHRoaXMuZGF0ZSAmJiB0aGlzLmZvcm1Db250cm9sLmNvbnRyb2wudmFsdWUgJiYgdGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlICE9PSAnJykge1xyXG4gICAgICBpZiAoIW1vbWVudC5pc01vbWVudCh0aGlzLmZvcm1Db250cm9sLmNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgICAgbGV0IG1vbWVudERhdGUgPSBtb21lbnQodGhpcy5mb3JtQ29udHJvbC5jb250cm9sLnZhbHVlLCAnREQuTU0uWVlZWScpLnV0Yyh0cnVlKTtcclxuICAgICAgICBpZiAobW9tZW50RGF0ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUobW9tZW50RGF0ZSk7XHJcbiAgICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmJsdXJyZWQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZUNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGVJbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zaG93UGlja2VyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbXJkRGF0ZVBpY2tlclRvZ2dsZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmREYXRlUGlja2VyVG9nZ2xlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgnbXJkRGF0ZVBpY2tlclRvZ2dsZScpIHB1YmxpYyBtcmREYXRlUGlja2VyVG9nZ2xlOiBNcmRJbnB1dENvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcclxuICApIHt9XHJcblxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xvc2VzdCgnbXJkLWljb24nKSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gJzIwcHgnO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMjBweCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLm1yZERhdGVQaWNrZXJUb2dnbGUpKSB7XHJcbiAgICAgIHRoaXMubXJkRGF0ZVBpY2tlclRvZ2dsZS50b2dnbGVDbGlja2VkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiPGlucHV0ICNiYXNlSW5wdXRcclxuICAoY2xpY2spPVwiaW5wdXRDbGlja2VkKCRldmVudClcIlxyXG4gIChmb2N1cyk9XCJmb2N1cygkZXZlbnQpXCJcclxuICAoYmx1cik9XCJibHVyKCRldmVudClcIlxyXG4gIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgKGlucHV0KT1cImlucHV0KCRldmVudClcIlxyXG4gIFtkaXNhYmxlZF09XCJmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWRcIlxyXG4gIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgW3N0eWxlLnBvaW50ZXItZXZlbnRzXT1cInJlYWRvbmx5ID8gJ25vbmUnIDogJ2F1dG8nXCJcclxuICBbc3R5bGUudGV4dC1hbGlnbl09XCJjZW50ZXJlZCA/ICdjZW50ZXInIDogJ3N0YXJ0J1wiXHJcbiAgKm5nSWY9XCIhdGV4dGFyZWFcIlxyXG4gID5cclxuPGlucHV0ICNkYXRlSW5wdXRcclxuICAqbmdJZj1cImRhdGVcIlxyXG4gIFtzdHlsZS53aWR0aF09XCJjdXN0b21EYXRlVG9nZ2xlID8gJzAnIDogJzIwcHgnXCJcclxuICBbc3R5bGUucGFkZGluZ109XCInMCdcIlxyXG4gIHR5cGU9XCJkYXRlXCJcclxuICAoaW5wdXQpPVwiaW5wdXQoJGV2ZW50KVwiXHJcbj5cclxuPHRleHRhcmVhICN0ZXh0QXJlYVxyXG4gIChjbGljayk9XCJpbnB1dENsaWNrZWQoJGV2ZW50KVwiXHJcbiAgKGZvY3VzKT1cImZvY3VzKCRldmVudClcIlxyXG4gIChibHVyKT1cImJsdXIoJGV2ZW50KVwiXHJcbiAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAoaW5wdXQpPVwiaW5wdXQoJGV2ZW50KVwiXHJcbiAgW2Rpc2FibGVkXT1cImZvcm1Db250cm9sPy5kaXNhYmxlZCB8fCBkaXNhYmxlZFwiXHJcbiAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICBbc3R5bGUucG9pbnRlci1ldmVudHNdPVwicmVhZG9ubHkgPyAnbm9uZScgOiAnYXV0bydcIlxyXG4gICpuZ0lmPVwidGV4dGFyZWFcIlxyXG4gIHJvd3M9XCIxXCJcclxuICBbbmdTdHlsZV09XCJ7J2xpbmUtaGVpZ2h0JzogbGluZUhlaWdodCArICdweCd9XCJcclxuPjwvdGV4dGFyZWE+XHJcbiJdfQ==