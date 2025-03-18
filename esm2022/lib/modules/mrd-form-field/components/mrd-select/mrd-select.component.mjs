import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, EventEmitter, Input, Output, ViewChild, booleanAttribute } from '@angular/core';
import { BasePushStrategyObject, ObservableValue, SubscriptionHandler, Util } from 'mrd-core';
import { MrdSelectOptionComponent } from '../mrd-select-option/mrd-select-option.component';
import { Subject, defer, merge, startWith, switchMap } from 'rxjs';
import { MrdSelectCustomTriggerComponent } from '../mrd-select-custom-trigger/mrd-select-custom-trigger.component';
import * as i0 from "@angular/core";
const _c0 = ["selectContainer"];
function MrdSelectComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 4);
    i0.ɵɵlistener("click", function MrdSelectComponent_ng_container_2_Template_input_click_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.triggerClicked()); })("input", function MrdSelectComponent_ng_container_2_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.autoCompleteInput($event)); })("keydown", function MrdSelectComponent_ng_container_2_Template_input_keydown_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.onKeyDown($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r1.showValue);
} }
function MrdSelectComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1);
    i0.ɵɵelementContainerEnd();
} }
function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵlistener("click", function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_1_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r12.triggerClicked()); });
    i0.ɵɵelementStart(2, "span", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(4, "svg", 7);
    i0.ɵɵelement(5, "g", 8)(6, "g", 9);
    i0.ɵɵelementStart(7, "g", 10);
    i0.ɵɵelement(8, "path", 11);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("mrdToolTip", ctx_r10.showValue);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r10.showValue);
} }
function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_ng_container_1_mrd_chip_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-chip", 17);
    i0.ɵɵlistener("close", function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_ng_container_1_mrd_chip_1_Template_mrd_chip_close_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const option_r17 = restoredCtx.$implicit; const ctx_r18 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r18.chipClosed(option_r17)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r17 = ctx.$implicit;
    const ctx_r16 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("prefixIcon", ctx_r16.chipPrefixIcon)("suffixIcon", ctx_r16.chipSuffixIcon)("disabled", (ctx_r16.formControl == null ? null : ctx_r16.formControl.disabled) || (ctx_r16.formArrayControl == null ? null : ctx_r16.formArrayControl.disabled) || ctx_r16.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r17.optionLabel);
} }
function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_ng_container_1_mrd_chip_1_Template, 2, 4, "mrd-chip", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r15.selectedOptions);
} }
function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementStart(2, "div", 15);
    i0.ɵɵlistener("click", function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r20.triggerClicked()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 7);
    i0.ɵɵelement(4, "g", 8)(5, "g", 9);
    i0.ɵɵelementStart(6, "g", 10);
    i0.ɵɵelement(7, "path", 11);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r14.selectedOptions && ctx_r14.selectedOptions.length > 0);
} }
function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵtemplate(2, MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_Template, 8, 1, "div", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r11.chipSelection);
} }
function MrdSelectComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_container_3_ng_container_2_ng_container_1_Template, 9, 2, "ng-container", 2);
    i0.ɵɵtemplate(2, MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_Template, 3, 1, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r9.chipSelection);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.chipSelection);
} }
function MrdSelectComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 2);
    i0.ɵɵtemplate(2, MrdSelectComponent_ng_container_3_ng_container_2_Template, 3, 2, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.customTrigger);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.customTrigger);
} }
function MrdSelectComponent_ng_template_4_mrd_select_option_1_mrd_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-button", 26);
    i0.ɵɵlistener("click", function MrdSelectComponent_ng_template_4_mrd_select_option_1_mrd_button_2_Template_mrd_button_click_0_listener() { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r26.addButtonClicked()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 27);
    i0.ɵɵelement(2, "path", 28)(3, "path", 29);
    i0.ɵɵelementEnd()();
} }
function MrdSelectComponent_ng_template_4_mrd_select_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-select-option", 23)(1, "input", 24);
    i0.ɵɵlistener("input", function MrdSelectComponent_ng_template_4_mrd_select_option_1_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r28.searchInput($event)); })("click", function MrdSelectComponent_ng_template_4_mrd_select_option_1_Template_input_click_1_listener($event) { return $event.stopPropagation(); })("keydown", function MrdSelectComponent_ng_template_4_mrd_select_option_1_Template_input_keydown_1_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r31 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r31.onKeyDown($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, MrdSelectComponent_ng_template_4_mrd_select_option_1_mrd_button_2_Template, 4, 0, "mrd-button", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r22.searchText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r22.addButton);
} }
function MrdSelectComponent_ng_template_4_mrd_select_option_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-select-option", 30);
    i0.ɵɵlistener("optionClicked", function MrdSelectComponent_ng_template_4_mrd_select_option_3_Template_mrd_select_option_optionClicked_0_listener() { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r32.removeSelected()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r23.multiple ? "Auswahl l\u00F6schen" : "-");
} }
function MrdSelectComponent_ng_template_4_mrd_select_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mrd-select-option", 31);
    i0.ɵɵtext(1, "Keine Eintr\u00E4ge gefunden");
    i0.ɵɵelementEnd();
} }
function MrdSelectComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_template_4_mrd_select_option_1_Template, 3, 2, "mrd-select-option", 19);
    i0.ɵɵelementStart(2, "div", 20);
    i0.ɵɵtemplate(3, MrdSelectComponent_ng_template_4_mrd_select_option_3_Template, 2, 2, "mrd-select-option", 21);
    i0.ɵɵtemplate(4, MrdSelectComponent_ng_template_4_mrd_select_option_4_Template, 2, 0, "mrd-select-option", 22);
    i0.ɵɵprojection(5, 1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.searchSelection);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.nullable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.searchSelection && ctx_r3.searchText.length > 0 && ctx_r3.showNoOptionsOnSearch);
} }
const _c1 = [[["mrd-select-custom-trigger"]], [["mrd-select-option"]]];
const _c2 = function (a0) { return { "mrd-select-disabled": a0 }; };
const _c3 = ["mrd-select-custom-trigger", "mrd-select-option"];
export class MrdSelectComponent extends BasePushStrategyObject {
    elementRef;
    cdr;
    selectContainer;
    options;
    customTrigger;
    _initialized = new Subject();
    optionSelectionChanges = defer(() => {
        const options = this.options;
        if (options) {
            return options.changes.pipe(startWith(options), switchMap(() => merge(...options.map(option => option.optionClicked))));
        }
        return this._initialized.pipe(switchMap(() => this.optionSelectionChanges));
    });
    formControl;
    formArrayControl;
    set value(value) {
        this.standalone = true;
        if (this._value === value) {
            return;
        }
        this._value = value;
        this.valueChange.emit(value);
    }
    get value() {
        return this._value;
    }
    _value;
    identifier = 'id';
    items = [];
    autoComplete = false;
    searchSelection = false;
    chipSelection = false;
    nullable = false;
    set multiple(value) {
        this._multiple = value;
    }
    get multiple() {
        return this._multiple;
    }
    _multiple = false;
    closeOnSelect = false;
    disabled = false;
    addButton = false;
    chipPrefixIcon;
    chipSuffixIcon;
    addButtonClick = new EventEmitter();
    touched = new EventEmitter();
    focused = new EventEmitter();
    blurred = new EventEmitter();
    valueChange = new EventEmitter();
    showOptions = new ObservableValue(false);
    optionsVisible = false;
    _showNoOptionsOnSearch = false;
    standalone = false;
    showValue = '';
    searchText = '';
    optionsWidthExceeded = false;
    optionsHeightExceeded = false;
    optionChangeSubscription;
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
    constructor(elementRef, cdr) {
        super();
        this.elementRef = elementRef;
        this.cdr = cdr;
    }
    ngOnInit() {
        this.watch(this.showOptions.changed, new SubscriptionHandler((value) => {
            if (!value) {
                this.blur(null);
            }
        }));
    }
    ngAfterContentInit() {
        this._initialized.next(null);
        this._initialized.complete();
        this.watch(this.options.changes.pipe(startWith(null)), new SubscriptionHandler(() => {
            this._resetOptions();
            if (Util.isDefined(this.formArrayControl) && Util.isDefined(this.formArrayControl.value)) {
                let selectedValues = (this.formArrayControl.value).map(value => value[this.identifier]);
                this.options.forEach(option => {
                    if (selectedValues.includes(option.value)) {
                        option.selected = true;
                    }
                });
            }
        }));
        if (Util.isDefined(this.customTrigger)) {
            this.watch(this.customTrigger.triggerClick, new SubscriptionHandler(() => {
                this.triggerClicked();
            }));
        }
    }
    ngAfterViewInit() {
        if (Util.isDefined(this.formControl) && Util.isDefined(this.formArrayControl)) {
            throw new Error('Es kann nur ein FormControl oder ein FormArrayControl verwendet werden.');
        }
        if (this.standalone && (Util.isDefined(this.formControl) || Util.isDefined(this.formArrayControl))) {
            throw new Error('Es kann nur ein Model oder ein FormControl/FormArrayControl verwendet werden.');
        }
        if ((Util.isDefined(this.formControl) || Util.isDefined(this.formArrayControl)) && this.disabled) {
            throw new Error('Ein deaktiviertes Select kann nicht mit einem FormControl oder FormArrayControl verwendet werden.');
        }
        if (Util.isDefined(this.formControl)) {
            this.watch(this.formControl.valueChanges, new SubscriptionHandler(() => this.formControlChanged()));
        }
        if (Util.isDefined(this.formArrayControl)) {
            this.watch(this.formArrayControl.control.valueChanges, new SubscriptionHandler(() => this.formArrayControlChanged()));
        }
        if (this.standalone) {
            this.watch(this.valueChange, new SubscriptionHandler(() => this.modelChanged()));
        }
        if (Util.isDefined(this.formControl) && Util.isDefined(this.formControl.value)) {
            if (!this.multiple) {
                this.options.find(option => option.value === this.formControl.value)?.optionClick();
            }
            else {
                let selectedValues = this.formControl.value;
                this.options.forEach(option => {
                    if (selectedValues.includes(option.value)) {
                        option.optionClick();
                    }
                });
            }
        }
        if (Util.isDefinedNotEmptyOrZero(this.value)) {
            if (!this.multiple) {
                this.options.find(option => option.value === this.value)?.optionClick();
            }
            else {
                let selectedValues = this.value;
                this.options.forEach(option => {
                    if (selectedValues.includes(option.value)) {
                        option.optionClick();
                    }
                });
            }
        }
    }
    formControlChanged() {
        if (this.autoComplete) {
            this.showValue = this.formControl.value;
            this.options.forEach(option => {
                option.focused = false;
                if ((option.optionValue?.nativeElement.innerText || '').toLowerCase().indexOf(this.showValue?.toLowerCase()) > -1) {
                    option.filtered = false;
                }
                else {
                    option.filtered = true;
                }
            });
            if (this.showValue.length > 0) {
                let filteredOptions = this.options.filter(option => !option.filtered);
                if (filteredOptions.length > 0) {
                    filteredOptions[0].focused = true;
                }
                this.showNoOptionsOnSearch = filteredOptions.length === 0;
            }
        }
        else {
            if (!Util.isDefined(this.formControl.value)) {
                this.showValue = '';
                this.options.forEach(option => option.selected = false);
            }
            else {
                if (!this.multiple) {
                    this.options.forEach(option => option.selected = false);
                    let option = this.options.find(option => option.value === this.formControl.value);
                    if (Util.isDefined(option)) {
                        option.selected = true;
                        this.showValue = option.optionValue?.nativeElement.innerText || '';
                    }
                }
                else {
                    let selectedValues = this.formControl.value;
                    this.options.forEach(option => {
                        if (selectedValues.includes(option.value)) {
                            option.selected = true;
                        }
                        else {
                            option.selected = false;
                        }
                    });
                    let selectedOptions = this.options.filter(option => option.selected);
                    this.showValue = selectedOptions.length === 0 ? '' : selectedOptions.map(option => option.optionValue?.nativeElement.innerText || '').join(', ');
                }
            }
        }
        this.cdr.markForCheck();
        this.cdr.detectChanges();
    }
    formArrayControlChanged() {
        if (this.autoComplete) {
            // TODO: Implement
        }
        else {
            if (!Util.isDefined(this.formArrayControl.control.value) || this.formArrayControl.control.value.length === 0) {
                this.showValue = '';
                this.options.forEach(option => option.selected = false);
            }
            else {
                let selectedValues = this.formArrayControl.control.value.map(value => value[this.identifier]);
                this.options.forEach(option => {
                    if (selectedValues.includes(option.value)) {
                        option.selected = true;
                    }
                    else {
                        option.selected = false;
                    }
                });
                let selectedOptions = this.options.filter(option => option.selected);
                this.showValue = selectedOptions.length === 0 ? '' : selectedOptions.map(option => option.optionValue?.nativeElement.innerText || '').join(', ');
            }
        }
        this.cdr.markForCheck();
        this.cdr.detectChanges();
    }
    modelChanged() {
        if (this.autoComplete) {
            this.showValue = this.value;
            this.options.forEach(option => {
                option.focused = false;
                if ((option.optionValue?.nativeElement.innerText || '').toLowerCase().indexOf(this.showValue?.toLowerCase()) > -1) {
                    option.filtered = false;
                }
                else {
                    option.filtered = true;
                }
            });
            if (this.showValue.length > 0) {
                let filteredOptions = this.options.filter(option => !option.filtered);
                if (filteredOptions.length > 0) {
                    filteredOptions[0].focused = true;
                }
                this.showNoOptionsOnSearch = filteredOptions.length === 0;
            }
        }
        else {
            if (!Util.isDefinedNotEmptyOrZero(this.value)) {
                this.showValue = '';
                this.options.forEach(option => option.selected = false);
            }
            else {
                if (!this.multiple) {
                    this.options.forEach(option => option.selected = false);
                    let option = this.options.find(option => option.value === this.value);
                    if (Util.isDefined(option)) {
                        option.selected = true;
                        this.showValue = option.optionValue?.nativeElement.innerText || '';
                    }
                }
                else {
                    let selectedValues = this.value;
                    this.options.forEach(option => {
                        if (selectedValues.includes(option.value)) {
                            option.selected = true;
                        }
                        else {
                            option.selected = false;
                        }
                    });
                    let selectedOptions = this.options.filter(option => option.selected);
                    this.showValue = selectedOptions.length === 0 ? '' : selectedOptions.map(option => option.optionValue?.nativeElement.innerText || '').join(', ');
                }
            }
        }
        this.cdr.markForCheck();
        this.cdr.detectChanges();
    }
    _resetOptions() {
        if (Util.isDefined(this.optionChangeSubscription) && !this.optionChangeSubscription.closed) {
            this.optionChangeSubscription.unsubscribe();
        }
        this.optionChangeSubscription = this.watch(this.optionSelectionChanges, new SubscriptionHandler((event) => {
            if (Util.isDefined(event)) {
                if (!this.multiple) {
                    this.options.forEach(option => option.selected = false);
                }
                this.options.forEach(option => option.focused = false);
                this.searchText = '';
                this.showNoOptionsOnSearch = false;
                if (Util.isDefined(event.option) && !this.autoComplete) {
                    event.option.selected = this.multiple ? event.checked : true;
                    this.cdr.markForCheck();
                    this.cdr.detectChanges();
                }
                if (!this.multiple) {
                    if (Util.isDefined(this.formControl) && this.formControl.value !== event.key) {
                        this.formControl.setValue(event.key);
                    }
                    else if (this.standalone && this.value !== event.key) {
                        this.value = event.key;
                    }
                    else {
                        this.showValue = event.value;
                    }
                    this.showOptions.value = false;
                }
                else {
                    let selectedOptions = this.options.filter(option => option.selected);
                    if (Util.isDefined(this.formControl)) {
                        this.formControl.setValue(selectedOptions.length === 0 ? null : selectedOptions.map(option => option.value));
                    }
                    if (this.standalone) {
                        this.value = selectedOptions.length === 0 ? null : selectedOptions.map(option => option.value);
                    }
                    if (Util.isDefined(this.formArrayControl)) {
                        if (selectedOptions.length === 0) {
                            this.formArrayControl.reset([]);
                        }
                        else {
                            let selectedItems = selectedOptions.map(option => this.items.find(item => item[this.identifier] === option.value));
                            let itemIndizesToRemove = [];
                            let itemsToAdd = selectedItems.slice();
                            this.formArrayControl.entries.forEach((entry, index) => {
                                if (!Util.isDefined(selectedItems.find(item => item[this.identifier] === entry.fields[this.identifier].value))) {
                                    itemIndizesToRemove.push(index);
                                }
                                else {
                                    itemsToAdd = itemsToAdd.filter(item => item[this.identifier] !== entry.fields[this.identifier].value);
                                }
                            });
                            itemIndizesToRemove.reverse().forEach(index => this.formArrayControl.removeAt(index, false, { onlySelf: true }));
                            itemsToAdd.forEach(item => this.formArrayControl.push(item));
                        }
                    }
                    if (this.closeOnSelect) {
                        this.showOptions.value = false;
                    }
                }
            }
            this.cdr.detectChanges();
        }));
    }
    removeSelected() {
        // this.options.forEach(option => option.selected = false);
        if (Util.isDefined(this.formControl)) {
            this.formControl.setValue(null);
        }
        if (Util.isDefined(this.formArrayControl)) {
            this.formArrayControl.reset([]);
        }
        if (this.standalone) {
            this.value = null;
        }
        // this.showValue = '';
        if (!this.multiple || this.closeOnSelect) {
            this.showOptions.value = false;
        }
        this.cdr.detectChanges();
    }
    chipClosed(option) {
        option.selected = false;
        let selectedOptions = this.options.filter(option => option.selected);
        if (Util.isDefined(this.formControl)) {
            this.formControl.setValue(selectedOptions.length === 0 ? null : selectedOptions.map(option => option.value));
        }
        if (this.standalone) {
            this.value = selectedOptions.length === 0 ? null : selectedOptions.map(option => option.value);
        }
        if (Util.isDefined(this.formArrayControl)) {
            let removedIndex = this.formArrayControl.entries.findIndex((entry) => entry.fields[this.identifier].value === option.value);
            this.formArrayControl.removeAt(removedIndex, false, { onlySelf: true });
            // this.formArrayControl.reset(selectedOptions.length === 0 ? [] : selectedOptions.map(option => this.items.find(item => item[this.identifier] === option.value)));
        }
        // this.showValue = selectedOptions.length === 0 ? '' : selectedOptions.map(option => option.optionValue?.nativeElement.innerText || '').join(', ');
        this.cdr.detectChanges();
    }
    autoCompleteInput(event) {
        if (Util.isDefined(this.formControl)) {
            this.formControl.setValue(event.target.value);
        }
        if (this.standalone) {
            this.value = event.target.value;
        }
        // this.showValue = (event.target as HTMLInputElement).value;
        // this.options.forEach(option => {
        //   option.focused = false;
        //   if ((option.optionValue?.nativeElement.innerText || '').toLowerCase().indexOf(this.showValue.toLowerCase()) > -1) {
        //     option.filtered = false;
        //   } else {
        //     option.filtered = true;
        //   }
        // });
        // if (this.showValue.length > 0) {
        //   let filteredOptions = this.options.filter(option => !option.filtered);
        //   if (filteredOptions.length > 0) {
        //     filteredOptions[0].focused = true;
        //   }
        //   this.showNoOptionsOnSearch = filteredOptions.length === 0;
        // }
        this.cdr.markForCheck();
    }
    searchInput(event) {
        this.searchText = event.target.value;
        this.options.forEach(option => {
            option.focused = false;
            if ((option.optionValue?.nativeElement.innerText || '').toLowerCase().indexOf(this.searchText.toLowerCase()) > -1) {
                option.filtered = false;
            }
            else {
                option.filtered = true;
            }
        });
        if (this.searchText.length > 0) {
            let filteredOptions = this.options.filter(option => !option.filtered);
            if (filteredOptions.length > 0) {
                filteredOptions[0].focused = true;
            }
            this.showNoOptionsOnSearch = filteredOptions.length === 0;
        }
        this.cdr.markForCheck();
    }
    onKeyDown(event) {
        let filteredOptions = this.options.filter(option => !option.filtered);
        if (event.key === 'Enter') {
            let selectedOption = filteredOptions.find(option => option.focused);
            if (Util.isDefined(selectedOption)) {
                selectedOption.optionClick();
            }
        }
        if (event.key === 'ArrowDown') {
            let focusedOption = filteredOptions.find(option => option.focused);
            if (Util.isDefined(focusedOption)) {
                let focusedOptionIndex = filteredOptions.findIndex((option) => option.focused);
                if (focusedOptionIndex > -1 && focusedOptionIndex < filteredOptions.length - 2) {
                    focusedOption.focused = false;
                    filteredOptions[focusedOptionIndex + 1].focused = true;
                }
            }
            else {
                filteredOptions[0].focused = true;
            }
            this.cdr.markForCheck();
        }
        if (event.key === 'ArrowUp') {
            let focusedOption = filteredOptions.find(option => option.focused);
            if (Util.isDefined(focusedOption)) {
                let focusedOptionIndex = filteredOptions.findIndex((option) => option.focused);
                if (focusedOptionIndex > 0) {
                    focusedOption.focused = false;
                    filteredOptions[focusedOptionIndex - 1].focused = true;
                }
            }
            else {
                filteredOptions[filteredOptions.length - 1].focused = true;
            }
            this.cdr.markForCheck();
        }
    }
    triggerClicked() {
        if ((!Util.isDefined(this.formControl) || !this.formControl.disabled) && (!Util.isDefined(this.formArrayControl) || !this.formArrayControl.control.disabled) && (!this.standalone || !this.disabled)) {
            this.touched.emit();
            this.focused.emit();
            this.showOptions.value = true;
            setTimeout(() => {
                let selectedOption = document.querySelector('.mrd-select-options-overlay .mrd-select-options-scroll .mrd-select-option-item.selected');
                if (Util.isDefined(selectedOption)) {
                    selectedOption.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
                }
            }, 10);
            this.cdr.markForCheck();
        }
    }
    addButtonClicked() {
        this.addButton;
    }
    get selectedOptions() {
        return this.options.filter(option => option.selected);
    }
    set showNoOptionsOnSearch(value) {
        this._showNoOptionsOnSearch = value;
        this.cdr.markForCheck();
        this.cdr.detectChanges();
    }
    get showNoOptionsOnSearch() {
        return this._showNoOptionsOnSearch;
    }
    focus(event) {
        this.focused.emit();
    }
    blur(event) {
        this.blurred.emit();
    }
    get optionsMinWidth() {
        return this.selectContainer ? `${this.selectContainer.nativeElement.getBoundingClientRect().width}px` : 'auto';
    }
    /** @nocollapse */ static ɵfac = function MrdSelectComponent_Factory(t) { return new (t || MrdSelectComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdSelectComponent, selectors: [["mrd-select"]], contentQueries: function MrdSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, MrdSelectCustomTriggerComponent, 5);
            i0.ɵɵcontentQuery(dirIndex, MrdSelectOptionComponent, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.customTrigger = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.options = _t);
        } }, viewQuery: function MrdSelectComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectContainer = _t.first);
        } }, inputs: { formControl: ["mrdFormControl", "formControl"], formArrayControl: ["mrdFormArray", "formArrayControl"], value: "value", identifier: "identifier", items: "items", autoComplete: ["autoComplete", "autoComplete", booleanAttribute], searchSelection: ["searchSelection", "searchSelection", booleanAttribute], chipSelection: ["chipSelection", "chipSelection", booleanAttribute], nullable: ["nullable", "nullable", booleanAttribute], multiple: ["multiple", "multiple", booleanAttribute], closeOnSelect: ["closeOnSelect", "closeOnSelect", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], addButton: ["addButton", "addButton", booleanAttribute], chipPrefixIcon: "chipPrefixIcon", chipSuffixIcon: "chipSuffixIcon" }, outputs: { addButtonClick: "addButtonClick", touched: "touched", focused: "focused", blurred: "blurred", valueChange: "valueChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c3, decls: 5, vars: 10, consts: [[1, "mrd-select-container", 3, "ngClass"], ["selectContainer", ""], [4, "ngIf"], ["cdk-connected-overlay", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", "cdkConnectedOverlayPanelClass", "mrd-select-options-overlay", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "backdropClick"], [3, "value", "click", "input", "keydown"], [1, "mrd-select-trigger", 3, "click"], ["showIfTruncated", "", 3, "mrdToolTip"], ["fill", "currentColor", "width", "14px", "height", "14px", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke", "#CCCCCC", "stroke-width", "0.048"], ["id", "SVGRepo_iconCarrier"], ["d", "M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"], [1, "mrd-chip-container"], ["class", "mrd-chip-values", 4, "ngIf"], [1, "mrd-chip-values"], [1, "mrd-select-trigger-chip", 3, "click"], [3, "prefixIcon", "suffixIcon", "disabled", "close", 4, "ngFor", "ngForOf"], [3, "prefixIcon", "suffixIcon", "disabled", "close"], [1, "mrd-select-options-container"], ["class", "mrd-select-search-option", "noCheckbox", "", 4, "ngIf"], [1, "mrd-select-options-scroll"], ["noCheckbox", "", 3, "value", "optionClicked", 4, "ngIf"], ["noCheckbox", "", 4, "ngIf"], ["noCheckbox", "", 1, "mrd-select-search-option"], ["placeholder", "Suche", 3, "value", "input", "click", "keydown"], ["icon-button", "", 3, "click", 4, "ngIf"], ["icon-button", "", 3, "click"], ["mrd-icon", "", "width", "64", "height", "64", "viewBox", "0 0 64 64", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M54.627 9.37231C59.1024 13.8475 62.1502 19.5494 63.3851 25.7568C64.6199 31.9643 63.9862 38.3983 61.5643 44.2456C59.1423 50.0929 55.0408 55.0907 49.7784 58.6069C44.516 62.1232 38.3291 64 32 64C25.671 64 19.484 62.1232 14.2216 58.6069C8.95925 55.0907 4.85773 50.0929 2.43576 44.2456C0.0137875 38.3983 -0.619851 31.9643 0.614972 25.7568C1.84979 19.5494 4.89761 13.8475 9.37301 9.37231C15.3741 3.37141 23.5133 0 32 0C40.4867 0 48.6259 3.37141 54.627 9.37231Z", "fill", "#65B32E"], ["d", "M29.0438 41.6758V34.9308H22.2988C21.9105 34.9308 21.526 34.8544 21.1672 34.7057C20.8084 34.5571 20.4825 34.3393 20.2079 34.0648C19.9333 33.7902 19.7155 33.4642 19.5669 33.1054C19.4183 32.7467 19.3418 32.3622 19.3418 31.9738C19.3418 31.5855 19.4183 31.201 19.5669 30.8422C19.7155 30.4835 19.9333 30.1575 20.2079 29.8829C20.4825 29.6083 20.8084 29.3905 21.1672 29.2419C21.526 29.0933 21.9105 29.0168 22.2988 29.0168H29.0438V22.2718C29.0437 21.8835 29.12 21.4991 29.2685 21.1403C29.417 20.7816 29.6347 20.4556 29.9092 20.181C30.1837 19.9064 30.5096 19.6886 30.8683 19.5399C31.2271 19.3913 31.6115 19.3148 31.9998 19.3148C32.7838 19.3148 33.5356 19.6263 34.09 20.1806C34.6444 20.735 34.9558 21.4869 34.9558 22.2708V29.0158H41.7008C42.485 29.0158 43.2372 29.3274 43.7917 29.8819C44.3463 30.4365 44.6578 31.1886 44.6578 31.9728C44.6578 32.7571 44.3463 33.5092 43.7917 34.0638C43.2372 34.6183 42.485 34.9298 41.7008 34.9298H34.9558V41.6738C34.963 42.0667 34.8919 42.457 34.7466 42.822C34.6012 43.187 34.3846 43.5194 34.1093 43.7998C33.8341 44.0802 33.5057 44.3029 33.1434 44.4549C32.7811 44.6069 32.3922 44.6852 31.9993 44.6852C31.6064 44.6852 31.2174 44.6069 30.8551 44.4549C30.4929 44.3029 30.1645 44.0802 29.8892 43.7998C29.614 43.5194 29.3974 43.187 29.252 42.822C29.1067 42.457 29.0356 42.0667 29.0428 41.6738L29.0438 41.6758Z", "fill", "white"], ["noCheckbox", "", 3, "value", "optionClicked"], ["noCheckbox", ""]], template: function MrdSelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "div", 0, 1);
            i0.ɵɵtemplate(2, MrdSelectComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
            i0.ɵɵtemplate(3, MrdSelectComponent_ng_container_3_Template, 3, 2, "ng-container", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, MrdSelectComponent_ng_template_4_Template, 6, 3, "ng-template", 3);
            i0.ɵɵlistener("backdropClick", function MrdSelectComponent_Template_ng_template_backdropClick_4_listener() { return ctx.showOptions.value = false; });
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c2, (ctx.formControl == null ? null : ctx.formControl.disabled) || (ctx.formArrayControl == null ? null : ctx.formArrayControl.disabled) || ctx.disabled));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.autoComplete);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.autoComplete);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.showOptions.value)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayMinWidth", ctx.optionsMinWidth);
        } }, styles: ["[_nghost-%COMP%]{width:100%}input[_ngcontent-%COMP%]{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-trigger[_ngcontent-%COMP%]{display:flex;height:1.5em;width:100%;cursor:pointer;padding-left:2px;flex-direction:row;align-items:center}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-trigger[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.25em}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-trigger[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{margin-right:8px}.mrd-select-container[_ngcontent-%COMP%]   .mrd-chip-container[_ngcontent-%COMP%]{margin-top:4px}.mrd-select-container[_ngcontent-%COMP%]   .mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-values[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:8px}.mrd-select-container[_ngcontent-%COMP%]   .mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-values[_ngcontent-%COMP%]   .mrd-select-trigger-chip[_ngcontent-%COMP%]{display:flex;height:1.5em;min-width:24px;max-width:100%;flex:1 1 24px;cursor:pointer;padding-left:2px;flex-direction:row;align-items:center;justify-content:flex-end}.mrd-select-container[_ngcontent-%COMP%]   .mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-values[_ngcontent-%COMP%]   .mrd-select-trigger-chip[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{margin-right:8px}.mrd-select-container.mrd-select-disabled[_ngcontent-%COMP%]   .mrd-select-trigger[_ngcontent-%COMP%]{color:#afa6a6;cursor:inherit}  .cdk-overlay-pane.mrd-select-options-overlay .mrd-select-options-container{display:flex;flex-direction:column;width:100%;background-color:#fff;border-radius:.375rem;overflow:hidden;--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)),var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)),var(--tw-shadow)}  .cdk-overlay-pane.mrd-select-options-overlay .mrd-select-options-container .mrd-select-search-option{border-bottom:1px solid rgba(0,0,0,.2196078431)}  .cdk-overlay-pane.mrd-select-options-overlay .mrd-select-options-container .mrd-select-options-scroll{overflow-y:auto;max-height:15em}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdSelectComponent, [{
        type: Component,
        args: [{ selector: 'mrd-select', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div #selectContainer class=\"mrd-select-container\" [ngClass]=\"{'mrd-select-disabled': formControl?.disabled || formArrayControl?.disabled || disabled}\">\r\n  <ng-container *ngIf=\"autoComplete\">\r\n    <input\r\n    (click)=\"triggerClicked()\"\r\n    [value]=\"showValue\"\r\n    (input)=\"autoCompleteInput($event)\"\r\n    (keydown)=\"onKeyDown($event)\"\r\n  >\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"!autoComplete\">\r\n    <ng-container *ngIf=\"customTrigger\">\r\n      <ng-content select=\"mrd-select-custom-trigger\"></ng-content>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!customTrigger\">\r\n      <ng-container *ngIf=\"!chipSelection\">\r\n        <div class=\"mrd-select-trigger\" (click)=\"triggerClicked()\">\r\n          <span [mrdToolTip]=\"showValue\" showIfTruncated>{{showValue}}</span>\r\n          <svg fill=\"currentColor\" width=\"14px\" height=\"14px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\r\n            <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#CCCCCC\" stroke-width=\"0.048\"></g>\r\n            <g id=\"SVGRepo_iconCarrier\"><path d=\"M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z\"></path></g>\r\n          </svg>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"chipSelection\">\r\n        <div class=\"mrd-chip-container\">\r\n          <div class=\"mrd-chip-values\" *ngIf=\"chipSelection\">\r\n            <ng-container *ngIf=\"selectedOptions && selectedOptions.length > 0\">\r\n              <mrd-chip *ngFor=\"let option of selectedOptions\"\r\n                (close)=\"chipClosed(option)\"\r\n                [prefixIcon]=\"chipPrefixIcon\"\r\n                [suffixIcon]=\"chipSuffixIcon\"\r\n                [disabled]=\"formControl?.disabled || formArrayControl?.disabled || disabled\"\r\n                >{{option.optionLabel}}</mrd-chip>\r\n            </ng-container>\r\n            <div class=\"mrd-select-trigger-chip\" (click)=\"triggerClicked()\">\r\n              <svg fill=\"currentColor\" width=\"14px\" height=\"14px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\r\n                <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#CCCCCC\" stroke-width=\"0.048\"></g>\r\n                <g id=\"SVGRepo_iconCarrier\"><path d=\"M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z\"></path></g>\r\n              </svg>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n</div>\r\n\r\n<ng-template\r\n  cdk-connected-overlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\r\n  cdkConnectedOverlayPanelClass=\"mrd-select-options-overlay\"\r\n  [cdkConnectedOverlayOrigin]=\"selectContainer\"\r\n  [cdkConnectedOverlayOpen]=\"showOptions.value\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  [cdkConnectedOverlayMinWidth]=\"optionsMinWidth\"\r\n  (backdropClick)=\"showOptions.value = false\"\r\n>\r\n  <div class=\"mrd-select-options-container\">\r\n    <mrd-select-option *ngIf=\"searchSelection\" class=\"mrd-select-search-option\" noCheckbox>\r\n      <input\r\n        placeholder=\"Suche\"\r\n        [value]=\"searchText\"\r\n        (input)=\"searchInput($event)\"\r\n        (click)=\"$event.stopPropagation()\"\r\n        (keydown)=\"onKeyDown($event)\"\r\n      >\r\n      <mrd-button icon-button *ngIf=\"addButton\" (click)=\"addButtonClicked()\">\r\n        <svg mrd-icon width=\"64\" height=\"64\" viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <path d=\"M54.627 9.37231C59.1024 13.8475 62.1502 19.5494 63.3851 25.7568C64.6199 31.9643 63.9862 38.3983 61.5643 44.2456C59.1423 50.0929 55.0408 55.0907 49.7784 58.6069C44.516 62.1232 38.3291 64 32 64C25.671 64 19.484 62.1232 14.2216 58.6069C8.95925 55.0907 4.85773 50.0929 2.43576 44.2456C0.0137875 38.3983 -0.619851 31.9643 0.614972 25.7568C1.84979 19.5494 4.89761 13.8475 9.37301 9.37231C15.3741 3.37141 23.5133 0 32 0C40.4867 0 48.6259 3.37141 54.627 9.37231Z\" fill=\"#65B32E\"/>\r\n          <path d=\"M29.0438 41.6758V34.9308H22.2988C21.9105 34.9308 21.526 34.8544 21.1672 34.7057C20.8084 34.5571 20.4825 34.3393 20.2079 34.0648C19.9333 33.7902 19.7155 33.4642 19.5669 33.1054C19.4183 32.7467 19.3418 32.3622 19.3418 31.9738C19.3418 31.5855 19.4183 31.201 19.5669 30.8422C19.7155 30.4835 19.9333 30.1575 20.2079 29.8829C20.4825 29.6083 20.8084 29.3905 21.1672 29.2419C21.526 29.0933 21.9105 29.0168 22.2988 29.0168H29.0438V22.2718C29.0437 21.8835 29.12 21.4991 29.2685 21.1403C29.417 20.7816 29.6347 20.4556 29.9092 20.181C30.1837 19.9064 30.5096 19.6886 30.8683 19.5399C31.2271 19.3913 31.6115 19.3148 31.9998 19.3148C32.7838 19.3148 33.5356 19.6263 34.09 20.1806C34.6444 20.735 34.9558 21.4869 34.9558 22.2708V29.0158H41.7008C42.485 29.0158 43.2372 29.3274 43.7917 29.8819C44.3463 30.4365 44.6578 31.1886 44.6578 31.9728C44.6578 32.7571 44.3463 33.5092 43.7917 34.0638C43.2372 34.6183 42.485 34.9298 41.7008 34.9298H34.9558V41.6738C34.963 42.0667 34.8919 42.457 34.7466 42.822C34.6012 43.187 34.3846 43.5194 34.1093 43.7998C33.8341 44.0802 33.5057 44.3029 33.1434 44.4549C32.7811 44.6069 32.3922 44.6852 31.9993 44.6852C31.6064 44.6852 31.2174 44.6069 30.8551 44.4549C30.4929 44.3029 30.1645 44.0802 29.8892 43.7998C29.614 43.5194 29.3974 43.187 29.252 42.822C29.1067 42.457 29.0356 42.0667 29.0428 41.6738L29.0438 41.6758Z\" fill=\"white\"/>\r\n        </svg>\r\n      </mrd-button>\r\n    </mrd-select-option>\r\n    <div class=\"mrd-select-options-scroll\">\r\n      <mrd-select-option *ngIf=\"nullable\" noCheckbox [value]=\"null\" (optionClicked)=\"removeSelected()\">{{multiple ? 'Auswahl l\u00F6schen' : '-'}}</mrd-select-option>\r\n      <mrd-select-option *ngIf=\"searchSelection && searchText.length > 0 && showNoOptionsOnSearch\" noCheckbox>Keine Eintr\u00E4ge gefunden</mrd-select-option>\r\n      <ng-content select=\"mrd-select-option\"></ng-content>\r\n    </div>\r\n  </div>\r\n</ng-template>", styles: [":host{width:100%}input{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}.mrd-select-container .mrd-select-trigger{display:flex;height:1.5em;width:100%;cursor:pointer;padding-left:2px;flex-direction:row;align-items:center}.mrd-select-container .mrd-select-trigger>span{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.25em}.mrd-select-container .mrd-select-trigger>svg{margin-right:8px}.mrd-select-container .mrd-chip-container{margin-top:4px}.mrd-select-container .mrd-chip-container .mrd-chip-values{display:flex;flex-direction:row;flex-wrap:wrap;gap:8px}.mrd-select-container .mrd-chip-container .mrd-chip-values .mrd-select-trigger-chip{display:flex;height:1.5em;min-width:24px;max-width:100%;flex:1 1 24px;cursor:pointer;padding-left:2px;flex-direction:row;align-items:center;justify-content:flex-end}.mrd-select-container .mrd-chip-container .mrd-chip-values .mrd-select-trigger-chip>svg{margin-right:8px}.mrd-select-container.mrd-select-disabled .mrd-select-trigger{color:#afa6a6;cursor:inherit}::ng-deep .cdk-overlay-pane.mrd-select-options-overlay .mrd-select-options-container{display:flex;flex-direction:column;width:100%;background-color:#fff;border-radius:.375rem;overflow:hidden;--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)),var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)),var(--tw-shadow)}::ng-deep .cdk-overlay-pane.mrd-select-options-overlay .mrd-select-options-container .mrd-select-search-option{border-bottom:1px solid rgba(0,0,0,.2196078431)}::ng-deep .cdk-overlay-pane.mrd-select-options-overlay .mrd-select-options-container .mrd-select-options-scroll{overflow-y:auto;max-height:15em}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { selectContainer: [{
            type: ViewChild,
            args: ['selectContainer']
        }], options: [{
            type: ContentChildren,
            args: [MrdSelectOptionComponent]
        }], customTrigger: [{
            type: ContentChild,
            args: [MrdSelectCustomTriggerComponent]
        }], formControl: [{
            type: Input,
            args: ['mrdFormControl']
        }], formArrayControl: [{
            type: Input,
            args: ['mrdFormArray']
        }], value: [{
            type: Input
        }], identifier: [{
            type: Input
        }], items: [{
            type: Input
        }], autoComplete: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], searchSelection: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], chipSelection: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], nullable: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], multiple: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], closeOnSelect: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], disabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], addButton: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], chipPrefixIcon: [{
            type: Input
        }], chipSuffixIcon: [{
            type: Input
        }], addButtonClick: [{
            type: Output
        }], touched: [{
            type: Output
        }], focused: [{
            type: Output
        }], blurred: [{
            type: Output
        }], valueChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWZvcm0tZmllbGQvY29tcG9uZW50cy9tcmQtc2VsZWN0L21yZC1zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLXNlbGVjdC9tcmQtc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBbUMsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFhLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvTyxPQUFPLEVBQW1FLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDL0osT0FBTyxFQUF5Qix3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ25ILE9BQU8sRUFBYyxPQUFPLEVBQWdCLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQzs7Ozs7SUNIakgsNkJBQW1DO0lBQ2pDLGdDQUtEO0lBSkMsdUtBQVMsZUFBQSx1QkFBZ0IsQ0FBQSxJQUFDLGdLQUVqQixlQUFBLGdDQUF5QixDQUFBLElBRlIsb0tBR2YsZUFBQSx3QkFBaUIsQ0FBQSxJQUhGO0lBRDFCLGlCQUtEO0lBQ0QsMEJBQWU7OztJQUpiLGVBQW1CO0lBQW5CLHdDQUFtQjs7O0lBT25CLDZC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ZSxPQUFPO2tCQUFqRCxlQUFlO21CQUFDLHdCQUF3QjtZQUVNLGFBQWE7a0JBQTNELFlBQVk7bUJBQUMsK0JBQStCO1lBZ0JwQixXQUFXO2tCQUFuQyxLQUFLO21CQUFDLGdCQUFnQjtZQUNBLGdCQUFnQjtrQkFBdEMsS0FBSzttQkFBQyxjQUFjO1lBQ1IsS0FBSztrQkFBakIsS0FBSztZQVlVLFVBQVU7a0JBQXpCLEtBQUs7WUFDVSxLQUFLO2tCQUFwQixLQUFLO1lBQ2dDLFlBQVk7a0JBQWpELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFDRSxlQUFlO2tCQUFwRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBQ0UsYUFBYTtrQkFBbEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUNFLFFBQVE7a0JBQTdDLEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFaEMsUUFBUTtrQkFEWCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBUUUsYUFBYTtrQkFBbEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUNFLFFBQVE7a0JBQTdDLEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFDRSxTQUFTO2tCQUE5QyxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBRXBCLGNBQWM7a0JBQTdCLEtBQUs7WUFDVSxjQUFjO2tCQUE3QixLQUFLO1lBRUksY0FBYztrQkFBdkIsTUFBTTtZQUNHLE9BQU87a0JBQWhCLE1BQU07WUFDRyxPQUFPO2tCQUFoQixNQUFNO1lBQ0csT0FBTztrQkFBaEIsTUFBTTtZQUNHLFdBQVc7a0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBDb250ZW50Q2hpbGRyZW4sIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZCwgYm9vbGVhbkF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY2Nlc3NhYmxlRm9ybUFycmF5LCBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wsIEFjY2Vzc2FibGVGb3JtR3JvdXAsIEJhc2VQdXNoU3RyYXRlZ3lPYmplY3QsIE9ic2VydmFibGVWYWx1ZSwgU3Vic2NyaXB0aW9uSGFuZGxlciwgVXRpbCB9IGZyb20gJ21yZC1jb3JlJztcclxuaW1wb3J0IHsgTXJkU2VsZWN0T3B0aW9uQ2hhbmdlLCBNcmRTZWxlY3RPcHRpb25Db21wb25lbnQgfSBmcm9tICcuLi9tcmQtc2VsZWN0LW9wdGlvbi9tcmQtc2VsZWN0LW9wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24sIGRlZmVyLCBtZXJnZSwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTXJkU2VsZWN0Q3VzdG9tVHJpZ2dlckNvbXBvbmVudCB9IGZyb20gJy4uL21yZC1zZWxlY3QtY3VzdG9tLXRyaWdnZXIvbXJkLXNlbGVjdC1jdXN0b20tdHJpZ2dlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25uZWN0ZWRQb3NpdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC1zZWxlY3QuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgQmFzZVB1c2hTdHJhdGVneU9iamVjdCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3NlbGVjdENvbnRhaW5lcicpIHNlbGVjdENvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihNcmRTZWxlY3RPcHRpb25Db21wb25lbnQpIG9wdGlvbnM6IFF1ZXJ5TGlzdDxNcmRTZWxlY3RPcHRpb25Db21wb25lbnQ+O1xyXG5cclxuICBAQ29udGVudENoaWxkKE1yZFNlbGVjdEN1c3RvbVRyaWdnZXJDb21wb25lbnQpIGN1c3RvbVRyaWdnZXI6IE1yZFNlbGVjdEN1c3RvbVRyaWdnZXJDb21wb25lbnQ7XHJcblxyXG4gIHByaXZhdGUgX2luaXRpYWxpemVkID0gbmV3IFN1YmplY3QoKTtcclxuICByZWFkb25seSBvcHRpb25TZWxlY3Rpb25DaGFuZ2VzOiBPYnNlcnZhYmxlPGFueT4gPSBkZWZlcigoKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG5cclxuICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgIHJldHVybiBvcHRpb25zLmNoYW5nZXMucGlwZShcclxuICAgICAgICBzdGFydFdpdGgob3B0aW9ucyksXHJcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+IG1lcmdlKC4uLm9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24ub3B0aW9uQ2xpY2tlZCkpKSxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5faW5pdGlhbGl6ZWQucGlwZShzd2l0Y2hNYXAoKCkgPT4gdGhpcy5vcHRpb25TZWxlY3Rpb25DaGFuZ2VzKSk7XHJcbiAgfSk7XHJcblxyXG4gIEBJbnB1dCgnbXJkRm9ybUNvbnRyb2wnKSBmb3JtQ29udHJvbDogQWNjZXNzYWJsZUZvcm1Db250cm9sO1xyXG4gIEBJbnB1dCgnbXJkRm9ybUFycmF5JykgZm9ybUFycmF5Q29udHJvbDogQWNjZXNzYWJsZUZvcm1BcnJheTxhbnk+O1xyXG4gIEBJbnB1dCgpIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLnN0YW5kYWxvbmUgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuX3ZhbHVlID09PSB2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICB9XHJcbiAgcHVibGljIGdldCB2YWx1ZSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuICBwcml2YXRlIF92YWx1ZTogYW55O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpZGVudGlmaWVyOiBzdHJpbmcgPSAnaWQnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpdGVtczogYW55W10gPSBbXTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGF1dG9Db21wbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgc2VhcmNoU2VsZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBjaGlwU2VsZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBudWxsYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSlcclxuICBzZXQgbXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX211bHRpcGxlID0gdmFsdWU7XHJcbiAgfVxyXG4gIGdldCBtdWx0aXBsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBhZGRCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIGNoaXBQcmVmaXhJY29uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIGNoaXBTdWZmaXhJY29uOiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSBhZGRCdXR0b25DbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSB0b3VjaGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIGZvY3VzZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgYmx1cnJlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgcHVibGljIHNob3dPcHRpb25zOiBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj4gPSBuZXcgT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBwdWJsaWMgb3B0aW9uc1Zpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgX3Nob3dOb09wdGlvbnNPblNlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgc3RhbmRhbG9uZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgc2hvd1ZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBwdWJsaWMgc2VhcmNoVGV4dDogc3RyaW5nID0gJyc7XHJcblxyXG4gIHB1YmxpYyBvcHRpb25zV2lkdGhFeGNlZWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBvcHRpb25zSGVpZ2h0RXhjZWVkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBvcHRpb25DaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBcclxuXHJcbiAgX3Bvc2l0aW9uczogQ29ubmVjdGVkUG9zaXRpb25bXSA9IFtcclxuICAgIHtcclxuICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcclxuICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXHJcbiAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxyXG4gICAgICBvdmVybGF5WTogJ3RvcCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBvcmlnaW5YOiAnZW5kJyxcclxuICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXHJcbiAgICAgIG92ZXJsYXlYOiAnZW5kJyxcclxuICAgICAgb3ZlcmxheVk6ICd0b3AnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcclxuICAgICAgb3JpZ2luWTogJ3RvcCcsXHJcbiAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxyXG4gICAgICBvdmVybGF5WTogJ2JvdHRvbSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG9yaWdpblg6ICdlbmQnLFxyXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgb3ZlcmxheVg6ICdlbmQnLFxyXG4gICAgICBvdmVybGF5WTogJ2JvdHRvbSdcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy53YXRjaCh0aGlzLnNob3dPcHRpb25zLmNoYW5nZWQsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCh2YWx1ZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5ibHVyKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLl9pbml0aWFsaXplZC5uZXh0KG51bGwpO1xyXG4gICAgdGhpcy5faW5pdGlhbGl6ZWQuY29tcGxldGUoKTtcclxuXHJcbiAgICB0aGlzLndhdGNoKHRoaXMub3B0aW9ucy5jaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKG51bGwpKSwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9yZXNldE9wdGlvbnMoKTtcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCkgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sLnZhbHVlKSkge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFZhbHVlcyA9ICh0aGlzLmZvcm1BcnJheUNvbnRyb2wudmFsdWUpLm1hcCh2YWx1ZSA9PiB2YWx1ZVt0aGlzLmlkZW50aWZpZXJdKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWVzLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpIHtcclxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSkpO1xyXG5cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmN1c3RvbVRyaWdnZXIpKSB7XHJcbiAgICAgIHRoaXMud2F0Y2godGhpcy5jdXN0b21UcmlnZ2VyLnRyaWdnZXJDbGljaywgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlckNsaWNrZWQoKTtcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcyBrYW5uIG51ciBlaW4gRm9ybUNvbnRyb2wgb2RlciBlaW4gRm9ybUFycmF5Q29udHJvbCB2ZXJ3ZW5kZXQgd2VyZGVuLicpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhbmRhbG9uZSAmJiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgfHwgVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sKSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcyBrYW5uIG51ciBlaW4gTW9kZWwgb2RlciBlaW4gRm9ybUNvbnRyb2wvRm9ybUFycmF5Q29udHJvbCB2ZXJ3ZW5kZXQgd2VyZGVuLicpO1xyXG4gICAgfVxyXG4gICAgaWYgKChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSB8fCBVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wpKSAmJiB0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRWluIGRlYWt0aXZpZXJ0ZXMgU2VsZWN0IGthbm4gbmljaHQgbWl0IGVpbmVtIEZvcm1Db250cm9sIG9kZXIgRm9ybUFycmF5Q29udHJvbCB2ZXJ3ZW5kZXQgd2VyZGVuLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICB0aGlzLndhdGNoKHRoaXMuZm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoKSA9PiB0aGlzLmZvcm1Db250cm9sQ2hhbmdlZCgpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sKSkge1xyXG4gICAgICB0aGlzLndhdGNoKHRoaXMuZm9ybUFycmF5Q29udHJvbC5jb250cm9sLnZhbHVlQ2hhbmdlcywgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKCkgPT4gdGhpcy5mb3JtQXJyYXlDb250cm9sQ2hhbmdlZCgpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGFuZGFsb25lKSB7XHJcbiAgICAgIHRoaXMud2F0Y2godGhpcy52YWx1ZUNoYW5nZSwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKCkgPT4gdGhpcy5tb2RlbENoYW5nZWQoKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sLnZhbHVlKSkge1xyXG4gICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSB0aGlzLmZvcm1Db250cm9sLnZhbHVlKT8ub3B0aW9uQ2xpY2soKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlIGFzIGFueVtdO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBvcHRpb24ub3B0aW9uQ2xpY2soKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZE5vdEVtcHR5T3JaZXJvKHRoaXMudmFsdWUpKSB7XHJcbiAgICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5maW5kKG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IHRoaXMudmFsdWUpPy5vcHRpb25DbGljaygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFZhbHVlcyA9IHRoaXMudmFsdWUgYXMgYW55W107XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgIGlmIChzZWxlY3RlZFZhbHVlcy5pbmNsdWRlcyhvcHRpb24udmFsdWUpKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5vcHRpb25DbGljaygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1Db250cm9sQ2hhbmdlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmF1dG9Db21wbGV0ZSkge1xyXG4gICAgICB0aGlzLnNob3dWYWx1ZSA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWU7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgb3B0aW9uLmZvY3VzZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoKG9wdGlvbi5vcHRpb25WYWx1ZT8ubmF0aXZlRWxlbWVudC5pbm5lclRleHQgfHwgJycpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNob3dWYWx1ZT8udG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgICAgb3B0aW9uLmZpbHRlcmVkID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG9wdGlvbi5maWx0ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMuc2hvd1ZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgZmlsdGVyZWRPcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gIW9wdGlvbi5maWx0ZXJlZCk7XHJcbiAgICAgICAgaWYgKGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBmaWx0ZXJlZE9wdGlvbnNbMF0uZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd05vT3B0aW9uc09uU2VhcmNoID0gZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA9PT0gMDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sLnZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMuc2hvd1ZhbHVlID0gJyc7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZSk7XHJcbiAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5vcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZSk7XHJcbiAgICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQob3B0aW9uKSkge1xyXG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dWYWx1ZSA9IG9wdGlvbi5vcHRpb25WYWx1ZT8ubmF0aXZlRWxlbWVudC5pbm5lclRleHQgfHwgJyc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBzZWxlY3RlZFZhbHVlcyA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWUgYXMgYW55W107XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCk7XHJcbiAgICAgICAgICB0aGlzLnNob3dWYWx1ZSA9IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDAgPyAnJyA6IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi5vcHRpb25WYWx1ZT8ubmF0aXZlRWxlbWVudC5pbm5lclRleHQgfHwgJycpLmpvaW4oJywgJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybUFycmF5Q29udHJvbENoYW5nZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hdXRvQ29tcGxldGUpIHtcclxuICAgICAgLy8gVE9ETzogSW1wbGVtZW50XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbC5jb250cm9sLnZhbHVlKSB8fCAodGhpcy5mb3JtQXJyYXlDb250cm9sLmNvbnRyb2wudmFsdWUgYXMgYW55W10pLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuc2hvd1ZhbHVlID0gJyc7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRWYWx1ZXMgPSAodGhpcy5mb3JtQXJyYXlDb250cm9sLmNvbnRyb2wudmFsdWUgYXMgYW55W10pLm1hcCh2YWx1ZSA9PiB2YWx1ZVt0aGlzLmlkZW50aWZpZXJdKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWVzLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpIHtcclxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQpO1xyXG4gICAgICAgIHRoaXMuc2hvd1ZhbHVlID0gc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCA/ICcnIDogc2VsZWN0ZWRPcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLm9wdGlvblZhbHVlPy5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCB8fCAnJykuam9pbignLCAnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1vZGVsQ2hhbmdlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmF1dG9Db21wbGV0ZSkge1xyXG4gICAgICB0aGlzLnNob3dWYWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgb3B0aW9uLmZvY3VzZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoKG9wdGlvbi5vcHRpb25WYWx1ZT8ubmF0aXZlRWxlbWVudC5pbm5lclRleHQgfHwgJycpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNob3dWYWx1ZT8udG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgICAgb3B0aW9uLmZpbHRlcmVkID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG9wdGlvbi5maWx0ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMuc2hvd1ZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgZmlsdGVyZWRPcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gIW9wdGlvbi5maWx0ZXJlZCk7XHJcbiAgICAgICAgaWYgKGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBmaWx0ZXJlZE9wdGlvbnNbMF0uZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd05vT3B0aW9uc09uU2VhcmNoID0gZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA9PT0gMDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCFVdGlsLmlzRGVmaW5lZE5vdEVtcHR5T3JaZXJvKHRoaXMudmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy5zaG93VmFsdWUgPSAnJztcclxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlKTtcclxuICAgICAgICAgIGxldCBvcHRpb24gPSB0aGlzLm9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSB0aGlzLnZhbHVlKTtcclxuICAgICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChvcHRpb24pKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1ZhbHVlID0gb3B0aW9uLm9wdGlvblZhbHVlPy5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCB8fCAnJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IHNlbGVjdGVkVmFsdWVzID0gdGhpcy52YWx1ZSBhcyBhbnlbXTtcclxuICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFZhbHVlcy5pbmNsdWRlcyhvcHRpb24udmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKTtcclxuICAgICAgICAgIHRoaXMuc2hvd1ZhbHVlID0gc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCA/ICcnIDogc2VsZWN0ZWRPcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLm9wdGlvblZhbHVlPy5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCB8fCAnJykuam9pbignLCAnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcmVzZXRPcHRpb25zKCk6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMub3B0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uKSAmJiAhdGhpcy5vcHRpb25DaGFuZ2VTdWJzY3JpcHRpb24uY2xvc2VkKSB7XHJcbiAgICAgIHRoaXMub3B0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9wdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMud2F0Y2godGhpcy5vcHRpb25TZWxlY3Rpb25DaGFuZ2VzLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoZXZlbnQ6IE1yZFNlbGVjdE9wdGlvbkNoYW5nZSkgPT4ge1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQoZXZlbnQpKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLmZvY3VzZWQgPSBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gJyc7XHJcbiAgICAgICAgdGhpcy5zaG93Tm9PcHRpb25zT25TZWFyY2ggPSBmYWxzZTtcclxuICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQoZXZlbnQub3B0aW9uKSAmJiAhdGhpcy5hdXRvQ29tcGxldGUpIHtcclxuICAgICAgICAgIGV2ZW50Lm9wdGlvbi5zZWxlY3RlZCA9IHRoaXMubXVsdGlwbGUgPyBldmVudC5jaGVja2VkIDogdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSAmJiB0aGlzLmZvcm1Db250cm9sLnZhbHVlICE9PSBldmVudC5rZXkpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShldmVudC5rZXkpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YW5kYWxvbmUgJiYgdGhpcy52YWx1ZSAhPT0gZXZlbnQua2V5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBldmVudC5rZXk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dWYWx1ZSA9IGV2ZW50LnZhbHVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5zaG93T3B0aW9ucy52YWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKTtcclxuICAgICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDAgPyBudWxsIDogc2VsZWN0ZWRPcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5zdGFuZGFsb25lKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwID8gbnVsbCA6IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sKSkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuZm9ybUFycmF5Q29udHJvbC5yZXNldChbXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkSXRlbXMgPSBzZWxlY3RlZE9wdGlvbnMubWFwKG9wdGlvbiA9PiB0aGlzLml0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtW3RoaXMuaWRlbnRpZmllcl0gPT09IG9wdGlvbi52YWx1ZSkpO1xyXG4gICAgICAgICAgICAgIGxldCBpdGVtSW5kaXplc1RvUmVtb3ZlOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgICAgICAgIGxldCBpdGVtc1RvQWRkOiBhbnlbXSA9IHNlbGVjdGVkSXRlbXMuc2xpY2UoKTtcclxuICAgICAgICAgICAgICB0aGlzLmZvcm1BcnJheUNvbnRyb2wuZW50cmllcy5mb3JFYWNoKChlbnRyeTogQWNjZXNzYWJsZUZvcm1Hcm91cDxhbnksYW55PiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghVXRpbC5pc0RlZmluZWQoc2VsZWN0ZWRJdGVtcy5maW5kKGl0ZW0gPT4gaXRlbVt0aGlzLmlkZW50aWZpZXJdID09PSBlbnRyeS5maWVsZHNbdGhpcy5pZGVudGlmaWVyXS52YWx1ZSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1JbmRpemVzVG9SZW1vdmUucHVzaChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBpdGVtc1RvQWRkID0gaXRlbXNUb0FkZC5maWx0ZXIoaXRlbSA9PiBpdGVtW3RoaXMuaWRlbnRpZmllcl0gIT09IGVudHJ5LmZpZWxkc1t0aGlzLmlkZW50aWZpZXJdLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBpdGVtSW5kaXplc1RvUmVtb3ZlLnJldmVyc2UoKS5mb3JFYWNoKGluZGV4ID0+IHRoaXMuZm9ybUFycmF5Q29udHJvbC5yZW1vdmVBdChpbmRleCwgZmFsc2UsIHtvbmx5U2VsZjogdHJ1ZX0pKTtcclxuICAgICAgICAgICAgICBpdGVtc1RvQWRkLmZvckVhY2goaXRlbSA9PiB0aGlzLmZvcm1BcnJheUNvbnRyb2wucHVzaChpdGVtKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLmNsb3NlT25TZWxlY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93T3B0aW9ucy52YWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlU2VsZWN0ZWQoKTogdm9pZCB7XHJcbiAgICAvLyB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gZmFsc2UpO1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XHJcbiAgICB9XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sKSkge1xyXG4gICAgICB0aGlzLmZvcm1BcnJheUNvbnRyb2wucmVzZXQoW10pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhbmRhbG9uZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgIH1cclxuICAgIC8vIHRoaXMuc2hvd1ZhbHVlID0gJyc7XHJcbiAgICBpZiAoIXRoaXMubXVsdGlwbGUgfHwgdGhpcy5jbG9zZU9uU2VsZWN0KSB7XHJcbiAgICAgIHRoaXMuc2hvd09wdGlvbnMudmFsdWUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGlwQ2xvc2VkKG9wdGlvbjogTXJkU2VsZWN0T3B0aW9uQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIGxldCBzZWxlY3RlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQpO1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBzZWxlY3RlZE9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YW5kYWxvbmUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDAgPyBudWxsIDogc2VsZWN0ZWRPcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wpKSB7XHJcbiAgICAgIGxldCByZW1vdmVkSW5kZXggPSB0aGlzLmZvcm1BcnJheUNvbnRyb2wuZW50cmllcy5maW5kSW5kZXgoKGVudHJ5OiBBY2Nlc3NhYmxlRm9ybUdyb3VwPGFueSxhbnk+KSA9PiBlbnRyeS5maWVsZHNbdGhpcy5pZGVudGlmaWVyXS52YWx1ZSA9PT0gb3B0aW9uLnZhbHVlKTtcclxuICAgICAgdGhpcy5mb3JtQXJyYXlDb250cm9sLnJlbW92ZUF0KHJlbW92ZWRJbmRleCwgZmFsc2UsIHtvbmx5U2VsZjogdHJ1ZX0pO1xyXG4gICAgICAvLyB0aGlzLmZvcm1BcnJheUNvbnRyb2wucmVzZXQoc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCA/IFtdIDogc2VsZWN0ZWRPcHRpb25zLm1hcChvcHRpb24gPT4gdGhpcy5pdGVtcy5maW5kKGl0ZW0gPT4gaXRlbVt0aGlzLmlkZW50aWZpZXJdID09PSBvcHRpb24udmFsdWUpKSk7XHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLnNob3dWYWx1ZSA9IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDAgPyAnJyA6IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi5vcHRpb25WYWx1ZT8ubmF0aXZlRWxlbWVudC5pbm5lclRleHQgfHwgJycpLmpvaW4oJywgJyk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXV0b0NvbXBsZXRlSW5wdXQoZXZlbnQ6IElucHV0RXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhbmRhbG9uZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIH1cclxuICAgIC8vIHRoaXMuc2hvd1ZhbHVlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIC8vIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAvLyAgIG9wdGlvbi5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICAvLyAgIGlmICgob3B0aW9uLm9wdGlvblZhbHVlPy5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCB8fCAnJykudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2hvd1ZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgIC8vICAgICBvcHRpb24uZmlsdGVyZWQgPSBmYWxzZTtcclxuICAgIC8vICAgfSBlbHNlIHtcclxuICAgIC8vICAgICBvcHRpb24uZmlsdGVyZWQgPSB0cnVlO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGlmICh0aGlzLnNob3dWYWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgIGxldCBmaWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiAhb3B0aW9uLmZpbHRlcmVkKTtcclxuICAgIC8vICAgaWYgKGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgICAgZmlsdGVyZWRPcHRpb25zWzBdLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIHRoaXMuc2hvd05vT3B0aW9uc09uU2VhcmNoID0gZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA9PT0gMDtcclxuICAgIC8vIH1cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlYXJjaElucHV0KGV2ZW50OiBJbnB1dEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnNlYXJjaFRleHQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgb3B0aW9uLmZvY3VzZWQgPSBmYWxzZTtcclxuICAgICAgaWYgKChvcHRpb24ub3B0aW9uVmFsdWU/Lm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0IHx8ICcnKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5zZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICBvcHRpb24uZmlsdGVyZWQgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvcHRpb24uZmlsdGVyZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLnNlYXJjaFRleHQubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgZmlsdGVyZWRPcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gIW9wdGlvbi5maWx0ZXJlZCk7XHJcbiAgICAgIGlmIChmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZpbHRlcmVkT3B0aW9uc1swXS5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNob3dOb09wdGlvbnNPblNlYXJjaCA9IGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGxldCBmaWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiAhb3B0aW9uLmZpbHRlcmVkKTtcclxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gZmlsdGVyZWRPcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi5mb2N1c2VkKTtcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHNlbGVjdGVkT3B0aW9uKSkge1xyXG4gICAgICAgIHNlbGVjdGVkT3B0aW9uLm9wdGlvbkNsaWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgIGxldCBmb2N1c2VkT3B0aW9uID0gZmlsdGVyZWRPcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi5mb2N1c2VkKTtcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKGZvY3VzZWRPcHRpb24pKSB7XHJcbiAgICAgICAgbGV0IGZvY3VzZWRPcHRpb25JbmRleCA9IGZpbHRlcmVkT3B0aW9ucy5maW5kSW5kZXgoKG9wdGlvbikgPT4gb3B0aW9uLmZvY3VzZWQpO1xyXG4gICAgICAgIGlmIChmb2N1c2VkT3B0aW9uSW5kZXggPiAtMSAmJiBmb2N1c2VkT3B0aW9uSW5kZXggPCBmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoIC0gMikge1xyXG4gICAgICAgICAgZm9jdXNlZE9wdGlvbi5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgICBmaWx0ZXJlZE9wdGlvbnNbZm9jdXNlZE9wdGlvbkluZGV4ICsgMV0uZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbHRlcmVkT3B0aW9uc1swXS5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICBsZXQgZm9jdXNlZE9wdGlvbiA9IGZpbHRlcmVkT3B0aW9ucy5maW5kKG9wdGlvbiA9PiBvcHRpb24uZm9jdXNlZCk7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChmb2N1c2VkT3B0aW9uKSkge1xyXG4gICAgICAgIGxldCBmb2N1c2VkT3B0aW9uSW5kZXggPSBmaWx0ZXJlZE9wdGlvbnMuZmluZEluZGV4KChvcHRpb24pID0+IG9wdGlvbi5mb2N1c2VkKTtcclxuICAgICAgICBpZiAoZm9jdXNlZE9wdGlvbkluZGV4ID4gMCkge1xyXG4gICAgICAgICAgZm9jdXNlZE9wdGlvbi5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgICBmaWx0ZXJlZE9wdGlvbnNbZm9jdXNlZE9wdGlvbkluZGV4IC0gMV0uZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbHRlcmVkT3B0aW9uc1tmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoIC0gMV0uZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdHJpZ2dlckNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICBpZiAoKCFVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSB8fCAhdGhpcy5mb3JtQ29udHJvbC5kaXNhYmxlZCkgJiYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wpIHx8ICF0aGlzLmZvcm1BcnJheUNvbnRyb2wuY29udHJvbC5kaXNhYmxlZCkgJiYgKCF0aGlzLnN0YW5kYWxvbmUgfHwgIXRoaXMuZGlzYWJsZWQpKSB7XHJcbiAgICAgIHRoaXMudG91Y2hlZC5lbWl0KCk7XHJcbiAgICAgIHRoaXMuZm9jdXNlZC5lbWl0KCk7XHJcbiAgICAgIHRoaXMuc2hvd09wdGlvbnMudmFsdWUgPSB0cnVlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXJkLXNlbGVjdC1vcHRpb25zLW92ZXJsYXkgLm1yZC1zZWxlY3Qtb3B0aW9ucy1zY3JvbGwgLm1yZC1zZWxlY3Qtb3B0aW9uLWl0ZW0uc2VsZWN0ZWQnKTtcclxuICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQoc2VsZWN0ZWRPcHRpb24pKSB7XHJcbiAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ25lYXJlc3QnLCBpbmxpbmU6ICduZWFyZXN0J30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTApO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRCdXR0b25DbGlja2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5hZGRCdXR0b25cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2VsZWN0ZWRPcHRpb25zKCk6IE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudFtdIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBzaG93Tm9PcHRpb25zT25TZWFyY2godmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3Nob3dOb09wdGlvbnNPblNlYXJjaCA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHNob3dOb09wdGlvbnNPblNlYXJjaCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zaG93Tm9PcHRpb25zT25TZWFyY2g7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYmx1cihldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5ibHVycmVkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgb3B0aW9uc01pbldpZHRoKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RDb250YWluZXIgPyBgJHt0aGlzLnNlbGVjdENvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRofXB4YCA6ICdhdXRvJztcclxuICB9XHJcbn1cclxuIiwiPGRpdiAjc2VsZWN0Q29udGFpbmVyIGNsYXNzPVwibXJkLXNlbGVjdC1jb250YWluZXJcIiBbbmdDbGFzc109XCJ7J21yZC1zZWxlY3QtZGlzYWJsZWQnOiBmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZm9ybUFycmF5Q29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWR9XCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImF1dG9Db21wbGV0ZVwiPlxyXG4gICAgPGlucHV0XHJcbiAgICAoY2xpY2spPVwidHJpZ2dlckNsaWNrZWQoKVwiXHJcbiAgICBbdmFsdWVdPVwic2hvd1ZhbHVlXCJcclxuICAgIChpbnB1dCk9XCJhdXRvQ29tcGxldGVJbnB1dCgkZXZlbnQpXCJcclxuICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcclxuICA+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhYXV0b0NvbXBsZXRlXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY3VzdG9tVHJpZ2dlclwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtcmQtc2VsZWN0LWN1c3RvbS10cmlnZ2VyXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWN1c3RvbVRyaWdnZXJcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjaGlwU2VsZWN0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1yZC1zZWxlY3QtdHJpZ2dlclwiIChjbGljayk9XCJ0cmlnZ2VyQ2xpY2tlZCgpXCI+XHJcbiAgICAgICAgICA8c3BhbiBbbXJkVG9vbFRpcF09XCJzaG93VmFsdWVcIiBzaG93SWZUcnVuY2F0ZWQ+e3tzaG93VmFsdWV9fTwvc3Bhbj5cclxuICAgICAgICAgIDxzdmcgZmlsbD1cImN1cnJlbnRDb2xvclwiIHdpZHRoPVwiMTRweFwiIGhlaWdodD1cIjE0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz5cclxuICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2U9XCIjQ0NDQ0NDXCIgc3Ryb2tlLXdpZHRoPVwiMC4wNDhcIj48L2c+XHJcbiAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPjxwYXRoIGQ9XCJNMTEuMTc4IDE5LjU2OWEuOTk4Ljk5OCAwIDAgMCAxLjY0NCAwbDktMTNBLjk5OS45OTkgMCAwIDAgMjEgNUgzYTEuMDAyIDEuMDAyIDAgMCAwLS44MjIgMS41NjlsOSAxM3pcIj48L3BhdGg+PC9nPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2hpcFNlbGVjdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtcmQtY2hpcC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtcmQtY2hpcC12YWx1ZXNcIiAqbmdJZj1cImNoaXBTZWxlY3Rpb25cIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNlbGVjdGVkT3B0aW9ucyAmJiBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID4gMFwiPlxyXG4gICAgICAgICAgICAgIDxtcmQtY2hpcCAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHNlbGVjdGVkT3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAoY2xvc2UpPVwiY2hpcENsb3NlZChvcHRpb24pXCJcclxuICAgICAgICAgICAgICAgIFtwcmVmaXhJY29uXT1cImNoaXBQcmVmaXhJY29uXCJcclxuICAgICAgICAgICAgICAgIFtzdWZmaXhJY29uXT1cImNoaXBTdWZmaXhJY29uXCJcclxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZm9ybUFycmF5Q29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgPnt7b3B0aW9uLm9wdGlvbkxhYmVsfX08L21yZC1jaGlwPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yZC1zZWxlY3QtdHJpZ2dlci1jaGlwXCIgKGNsaWNrKT1cInRyaWdnZXJDbGlja2VkKClcIj5cclxuICAgICAgICAgICAgICA8c3ZnIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB3aWR0aD1cIjE0cHhcIiBoZWlnaHQ9XCIxNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCI+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2U9XCIjQ0NDQ0NDXCIgc3Ryb2tlLXdpZHRoPVwiMC4wNDhcIj48L2c+XHJcbiAgICAgICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj48cGF0aCBkPVwiTTExLjE3OCAxOS41NjlhLjk5OC45OTggMCAwIDAgMS42NDQgMGw5LTEzQS45OTkuOTk5IDAgMCAwIDIxIDVIM2ExLjAwMiAxLjAwMiAwIDAgMC0uODIyIDEuNTY5bDkgMTN6XCI+PC9wYXRoPjwvZz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGVcclxuICBjZGstY29ubmVjdGVkLW92ZXJsYXlcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheUhhc0JhY2tkcm9wXT1cInRydWVcIlxyXG4gIGNka0Nvbm5lY3RlZE92ZXJsYXlCYWNrZHJvcENsYXNzPVwiY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3BcIlxyXG4gIGNka0Nvbm5lY3RlZE92ZXJsYXlQYW5lbENsYXNzPVwibXJkLXNlbGVjdC1vcHRpb25zLW92ZXJsYXlcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cInNlbGVjdENvbnRhaW5lclwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cInNob3dPcHRpb25zLnZhbHVlXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJfcG9zaXRpb25zXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU1pbldpZHRoXT1cIm9wdGlvbnNNaW5XaWR0aFwiXHJcbiAgKGJhY2tkcm9wQ2xpY2spPVwic2hvd09wdGlvbnMudmFsdWUgPSBmYWxzZVwiXHJcbj5cclxuICA8ZGl2IGNsYXNzPVwibXJkLXNlbGVjdC1vcHRpb25zLWNvbnRhaW5lclwiPlxyXG4gICAgPG1yZC1zZWxlY3Qtb3B0aW9uICpuZ0lmPVwic2VhcmNoU2VsZWN0aW9uXCIgY2xhc3M9XCJtcmQtc2VsZWN0LXNlYXJjaC1vcHRpb25cIiBub0NoZWNrYm94PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlN1Y2hlXCJcclxuICAgICAgICBbdmFsdWVdPVwic2VhcmNoVGV4dFwiXHJcbiAgICAgICAgKGlucHV0KT1cInNlYXJjaElucHV0KCRldmVudClcIlxyXG4gICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxyXG4gICAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcclxuICAgICAgPlxyXG4gICAgICA8bXJkLWJ1dHRvbiBpY29uLWJ1dHRvbiAqbmdJZj1cImFkZEJ1dHRvblwiIChjbGljayk9XCJhZGRCdXR0b25DbGlja2VkKClcIj5cclxuICAgICAgICA8c3ZnIG1yZC1pY29uIHdpZHRoPVwiNjRcIiBoZWlnaHQ9XCI2NFwiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNNTQuNjI3IDkuMzcyMzFDNTkuMTAyNCAxMy44NDc1IDYyLjE1MDIgMTkuNTQ5NCA2My4zODUxIDI1Ljc1NjhDNjQuNjE5OSAzMS45NjQzIDYzLjk4NjIgMzguMzk4MyA2MS41NjQzIDQ0LjI0NTZDNTkuMTQyMyA1MC4wOTI5IDU1LjA0MDggNTUuMDkwNyA0OS43Nzg0IDU4LjYwNjlDNDQuNTE2IDYyLjEyMzIgMzguMzI5MSA2NCAzMiA2NEMyNS42NzEgNjQgMTkuNDg0IDYyLjEyMzIgMTQuMjIxNiA1OC42MDY5QzguOTU5MjUgNTUuMDkwNyA0Ljg1NzczIDUwLjA5MjkgMi40MzU3NiA0NC4yNDU2QzAuMDEzNzg3NSAzOC4zOTgzIC0wLjYxOTg1MSAzMS45NjQzIDAuNjE0OTcyIDI1Ljc1NjhDMS44NDk3OSAxOS41NDk0IDQuODk3NjEgMTMuODQ3NSA5LjM3MzAxIDkuMzcyMzFDMTUuMzc0MSAzLjM3MTQxIDIzLjUxMzMgMCAzMiAwQzQwLjQ4NjcgMCA0OC42MjU5IDMuMzcxNDEgNTQuNjI3IDkuMzcyMzFaXCIgZmlsbD1cIiM2NUIzMkVcIi8+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTI5LjA0MzggNDEuNjc1OFYzNC45MzA4SDIyLjI5ODhDMjEuOTEwNSAzNC45MzA4IDIxLjUyNiAzNC44NTQ0IDIxLjE2NzIgMzQuNzA1N0MyMC44MDg0IDM0LjU1NzEgMjAuNDgyNSAzNC4zMzkzIDIwLjIwNzkgMzQuMDY0OEMxOS45MzMzIDMzLjc5MDIgMTkuNzE1NSAzMy40NjQyIDE5LjU2NjkgMzMuMTA1NEMxOS40MTgzIDMyLjc0NjcgMTkuMzQxOCAzMi4zNjIyIDE5LjM0MTggMzEuOTczOEMxOS4zNDE4IDMxLjU4NTUgMTkuNDE4MyAzMS4yMDEgMTkuNTY2OSAzMC44NDIyQzE5LjcxNTUgMzAuNDgzNSAxOS45MzMzIDMwLjE1NzUgMjAuMjA3OSAyOS44ODI5QzIwLjQ4MjUgMjkuNjA4MyAyMC44MDg0IDI5LjM5MDUgMjEuMTY3MiAyOS4yNDE5QzIxLjUyNiAyOS4wOTMzIDIxLjkxMDUgMjkuMDE2OCAyMi4yOTg4IDI5LjAxNjhIMjkuMDQzOFYyMi4yNzE4QzI5LjA0MzcgMjEuODgzNSAyOS4xMiAyMS40OTkxIDI5LjI2ODUgMjEuMTQwM0MyOS40MTcgMjAuNzgxNiAyOS42MzQ3IDIwLjQ1NTYgMjkuOTA5MiAyMC4xODFDMzAuMTgzNyAxOS45MDY0IDMwLjUwOTYgMTkuNjg4NiAzMC44NjgzIDE5LjUzOTlDMzEuMjI3MSAxOS4zOTEzIDMxLjYxMTUgMTkuMzE0OCAzMS45OTk4IDE5LjMxNDhDMzIuNzgzOCAxOS4zMTQ4IDMzLjUzNTYgMTkuNjI2MyAzNC4wOSAyMC4xODA2QzM0LjY0NDQgMjAuNzM1IDM0Ljk1NTggMjEuNDg2OSAzNC45NTU4IDIyLjI3MDhWMjkuMDE1OEg0MS43MDA4QzQyLjQ4NSAyOS4wMTU4IDQzLjIzNzIgMjkuMzI3NCA0My43OTE3IDI5Ljg4MTlDNDQuMzQ2MyAzMC40MzY1IDQ0LjY1NzggMzEuMTg4NiA0NC42NTc4IDMxLjk3MjhDNDQuNjU3OCAzMi43NTcxIDQ0LjM0NjMgMzMuNTA5MiA0My43OTE3IDM0LjA2MzhDNDMuMjM3MiAzNC42MTgzIDQyLjQ4NSAzNC45Mjk4IDQxLjcwMDggMzQuOTI5OEgzNC45NTU4VjQxLjY3MzhDMzQuOTYzIDQyLjA2NjcgMzQuODkxOSA0Mi40NTcgMzQuNzQ2NiA0Mi44MjJDMzQuNjAxMiA0My4xODcgMzQuMzg0NiA0My41MTk0IDM0LjEwOTMgNDMuNzk5OEMzMy44MzQxIDQ0LjA4MDIgMzMuNTA1NyA0NC4zMDI5IDMzLjE0MzQgNDQuNDU0OUMzMi43ODExIDQ0LjYwNjkgMzIuMzkyMiA0NC42ODUyIDMxLjk5OTMgNDQuNjg1MkMzMS42MDY0IDQ0LjY4NTIgMzEuMjE3NCA0NC42MDY5IDMwLjg1NTEgNDQuNDU0OUMzMC40OTI5IDQ0LjMwMjkgMzAuMTY0NSA0NC4wODAyIDI5Ljg4OTIgNDMuNzk5OEMyOS42MTQgNDMuNTE5NCAyOS4zOTc0IDQzLjE4NyAyOS4yNTIgNDIuODIyQzI5LjEwNjcgNDIuNDU3IDI5LjAzNTYgNDIuMDY2NyAyOS4wNDI4IDQxLjY3MzhMMjkuMDQzOCA0MS42NzU4WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9tcmQtYnV0dG9uPlxyXG4gICAgPC9tcmQtc2VsZWN0LW9wdGlvbj5cclxuICAgIDxkaXYgY2xhc3M9XCJtcmQtc2VsZWN0LW9wdGlvbnMtc2Nyb2xsXCI+XHJcbiAgICAgIDxtcmQtc2VsZWN0LW9wdGlvbiAqbmdJZj1cIm51bGxhYmxlXCIgbm9DaGVja2JveCBbdmFsdWVdPVwibnVsbFwiIChvcHRpb25DbGlja2VkKT1cInJlbW92ZVNlbGVjdGVkKClcIj57e211bHRpcGxlID8gJ0F1c3dhaGwgbMO2c2NoZW4nIDogJy0nfX08L21yZC1zZWxlY3Qtb3B0aW9uPlxyXG4gICAgICA8bXJkLXNlbGVjdC1vcHRpb24gKm5nSWY9XCJzZWFyY2hTZWxlY3Rpb24gJiYgc2VhcmNoVGV4dC5sZW5ndGggPiAwICYmIHNob3dOb09wdGlvbnNPblNlYXJjaFwiIG5vQ2hlY2tib3g+S2VpbmUgRWludHLDpGdlIGdlZnVuZGVuPC9tcmQtc2VsZWN0LW9wdGlvbj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXJkLXNlbGVjdC1vcHRpb25cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT4iXX0=