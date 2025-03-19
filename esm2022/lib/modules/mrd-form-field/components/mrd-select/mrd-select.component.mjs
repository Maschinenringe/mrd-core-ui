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
                this.options.forEach(option => option.filtered = false);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWZvcm0tZmllbGQvY29tcG9uZW50cy9tcmQtc2VsZWN0L21yZC1zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLXNlbGVjdC9tcmQtc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBbUMsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFhLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvTyxPQUFPLEVBQW1FLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDL0osT0FBTyxFQUF5Qix3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ25ILE9BQU8sRUFBYyxPQUFPLEVBQWdCLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQzs7Ozs7SUNIakgsNkJBQW1DO0lBQ2pDLGdDQUtEO0lBSkMsdUtBQVMsZUFBQSx1QkFBZ0IsQ0FBQSxJQUFDLGdLQUVqQixlQUFBLGdDQUF5QixDQUFBLElBRlIsb0tBR2YsZUFBQSx3QkFBaUIsQ0FBQSxJQUhGO0lBRDFCLGlCQUtEO0lBQ0QsMEJBQWU7OztJQUpiLGVBQW1CO0lBQW5CLHdDQUFtQjs7O0lBT25CLDZC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ZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkLCBib29sZWFuQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjY2Vzc2FibGVGb3JtQXJyYXksIEFjY2Vzc2FibGVGb3JtQ29udHJvbCwgQWNjZXNzYWJsZUZvcm1Hcm91cCwgQmFzZVB1c2hTdHJhdGVneU9iamVjdCwgT2JzZXJ2YWJsZVZhbHVlLCBTdWJzY3JpcHRpb25IYW5kbGVyLCBVdGlsIH0gZnJvbSAnbXJkLWNvcmUnO1xyXG5pbXBvcnQgeyBNcmRTZWxlY3RPcHRpb25DaGFuZ2UsIE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL21yZC1zZWxlY3Qtb3B0aW9uL21yZC1zZWxlY3Qtb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiwgZGVmZXIsIG1lcmdlLCBzdGFydFdpdGgsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNcmRTZWxlY3RDdXN0b21UcmlnZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vbXJkLXNlbGVjdC1jdXN0b20tdHJpZ2dlci9tcmQtc2VsZWN0LWN1c3RvbS10cmlnZ2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbm5lY3RlZFBvc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtcmQtc2VsZWN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLXNlbGVjdC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmRTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZCgnc2VsZWN0Q29udGFpbmVyJykgc2VsZWN0Q29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudCkgb3B0aW9uczogUXVlcnlMaXN0PE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudD47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoTXJkU2VsZWN0Q3VzdG9tVHJpZ2dlckNvbXBvbmVudCkgY3VzdG9tVHJpZ2dlcjogTXJkU2VsZWN0Q3VzdG9tVHJpZ2dlckNvbXBvbmVudDtcclxuXHJcbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHJlYWRvbmx5IG9wdGlvblNlbGVjdGlvbkNoYW5nZXM6IE9ic2VydmFibGU8YW55PiA9IGRlZmVyKCgpID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgcmV0dXJuIG9wdGlvbnMuY2hhbmdlcy5waXBlKFxyXG4gICAgICAgIHN0YXJ0V2l0aChvcHRpb25zKSxcclxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gbWVyZ2UoLi4ub3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi5vcHRpb25DbGlja2VkKSkpLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9pbml0aWFsaXplZC5waXBlKHN3aXRjaE1hcCgoKSA9PiB0aGlzLm9wdGlvblNlbGVjdGlvbkNoYW5nZXMpKTtcclxuICB9KTtcclxuXHJcbiAgQElucHV0KCdtcmRGb3JtQ29udHJvbCcpIGZvcm1Db250cm9sOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2w7XHJcbiAgQElucHV0KCdtcmRGb3JtQXJyYXknKSBmb3JtQXJyYXlDb250cm9sOiBBY2Nlc3NhYmxlRm9ybUFycmF5PGFueT47XHJcbiAgQElucHV0KCkgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuc3RhbmRhbG9uZSA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5fdmFsdWUgPT09IHZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IHZhbHVlKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3ZhbHVlOiBhbnk7XHJcbiAgQElucHV0KCkgcHVibGljIGlkZW50aWZpZXI6IHN0cmluZyA9ICdpZCc7XHJcbiAgQElucHV0KCkgcHVibGljIGl0ZW1zOiBhbnlbXSA9IFtdO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgYXV0b0NvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBzZWFyY2hTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGNoaXBTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIG51bGxhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KVxyXG4gIHNldCBtdWx0aXBsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fbXVsdGlwbGUgPSB2YWx1ZTtcclxuICB9XHJcbiAgZ2V0IG11bHRpcGxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xyXG4gIH1cclxuICBwcml2YXRlIF9tdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgY2xvc2VPblNlbGVjdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGFkZEJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgY2hpcFByZWZpeEljb246IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgY2hpcFN1ZmZpeEljb246IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgpIGFkZEJ1dHRvbkNsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHRvdWNoZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgZm9jdXNlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBibHVycmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBwdWJsaWMgc2hvd09wdGlvbnM6IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPiA9IG5ldyBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIHB1YmxpYyBvcHRpb25zVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBfc2hvd05vT3B0aW9uc09uU2VhcmNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBzdGFuZGFsb25lOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBzaG93VmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIHB1YmxpYyBzZWFyY2hUZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgcHVibGljIG9wdGlvbnNXaWR0aEV4Y2VlZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIG9wdGlvbnNIZWlnaHRFeGNlZWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIG9wdGlvbkNoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIFxyXG5cclxuICBfcG9zaXRpb25zOiBDb25uZWN0ZWRQb3NpdGlvbltdID0gW1xyXG4gICAge1xyXG4gICAgICBvcmlnaW5YOiAnc3RhcnQnLFxyXG4gICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgIG92ZXJsYXlZOiAndG9wJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG9yaWdpblg6ICdlbmQnLFxyXG4gICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgb3ZlcmxheVg6ICdlbmQnLFxyXG4gICAgICBvdmVybGF5WTogJ3RvcCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBvcmlnaW5YOiAnc3RhcnQnLFxyXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgb3JpZ2luWDogJ2VuZCcsXHJcbiAgICAgIG9yaWdpblk6ICd0b3AnLFxyXG4gICAgICBvdmVybGF5WDogJ2VuZCcsXHJcbiAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLndhdGNoKHRoaXMuc2hvd09wdGlvbnMuY2hhbmdlZCwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKHZhbHVlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICB0aGlzLmJsdXIobnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuX2luaXRpYWxpemVkLm5leHQobnVsbCk7XHJcbiAgICB0aGlzLl9pbml0aWFsaXplZC5jb21wbGV0ZSgpO1xyXG5cclxuICAgIHRoaXMud2F0Y2godGhpcy5vcHRpb25zLmNoYW5nZXMucGlwZShzdGFydFdpdGgobnVsbCkpLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoKSA9PiB7XHJcbiAgICAgIHRoaXMuX3Jlc2V0T3B0aW9ucygpO1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sKSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkVmFsdWVzID0gKHRoaXMuZm9ybUFycmF5Q29udHJvbC52YWx1ZSkubWFwKHZhbHVlID0+IHZhbHVlW3RoaXMuaWRlbnRpZmllcl0pO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KSk7XHJcblxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuY3VzdG9tVHJpZ2dlcikpIHtcclxuICAgICAgdGhpcy53YXRjaCh0aGlzLmN1c3RvbVRyaWdnZXIudHJpZ2dlckNsaWNrLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyQ2xpY2tlZCgpO1xyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VzIGthbm4gbnVyIGVpbiBGb3JtQ29udHJvbCBvZGVyIGVpbiBGb3JtQXJyYXlDb250cm9sIHZlcndlbmRldCB3ZXJkZW4uJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGFuZGFsb25lICYmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSB8fCBVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wpKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VzIGthbm4gbnVyIGVpbiBNb2RlbCBvZGVyIGVpbiBGb3JtQ29udHJvbC9Gb3JtQXJyYXlDb250cm9sIHZlcndlbmRldCB3ZXJkZW4uJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpIHx8IFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCkpICYmIHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFaW4gZGVha3RpdmllcnRlcyBTZWxlY3Qga2FubiBuaWNodCBtaXQgZWluZW0gRm9ybUNvbnRyb2wgb2RlciBGb3JtQXJyYXlDb250cm9sIHZlcndlbmRldCB3ZXJkZW4uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIHRoaXMud2F0Y2godGhpcy5mb3JtQ29udHJvbC52YWx1ZUNoYW5nZXMsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VkKCkpKTtcclxuICAgIH1cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wpKSB7XHJcbiAgICAgIHRoaXMud2F0Y2godGhpcy5mb3JtQXJyYXlDb250cm9sLmNvbnRyb2wudmFsdWVDaGFuZ2VzLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoKSA9PiB0aGlzLmZvcm1BcnJheUNvbnRyb2xDaGFuZ2VkKCkpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YW5kYWxvbmUpIHtcclxuICAgICAgdGhpcy53YXRjaCh0aGlzLnZhbHVlQ2hhbmdlLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoKSA9PiB0aGlzLm1vZGVsQ2hhbmdlZCgpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5maW5kKG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IHRoaXMuZm9ybUNvbnRyb2wudmFsdWUpPy5vcHRpb25DbGljaygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFZhbHVlcyA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWUgYXMgYW55W107XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgIGlmIChzZWxlY3RlZFZhbHVlcy5pbmNsdWRlcyhvcHRpb24udmFsdWUpKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5vcHRpb25DbGljaygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkTm90RW1wdHlPclplcm8odGhpcy52YWx1ZSkpIHtcclxuICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gdGhpcy52YWx1ZSk/Lm9wdGlvbkNsaWNrKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkVmFsdWVzID0gdGhpcy52YWx1ZSBhcyBhbnlbXTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWVzLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpIHtcclxuICAgICAgICAgICAgb3B0aW9uLm9wdGlvbkNsaWNrKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybUNvbnRyb2xDaGFuZ2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYXV0b0NvbXBsZXRlKSB7XHJcbiAgICAgIHRoaXMuc2hvd1ZhbHVlID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZTtcclxuICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICBvcHRpb24uZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICgob3B0aW9uLm9wdGlvblZhbHVlPy5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCB8fCAnJykudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2hvd1ZhbHVlPy50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgICBvcHRpb24uZmlsdGVyZWQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgb3B0aW9uLmZpbHRlcmVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAodGhpcy5zaG93VmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBmaWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiAhb3B0aW9uLmZpbHRlcmVkKTtcclxuICAgICAgICBpZiAoZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGZpbHRlcmVkT3B0aW9uc1swXS5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93Tm9PcHRpb25zT25TZWFyY2ggPSBmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoID09PSAwO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy5zaG93VmFsdWUgPSAnJztcclxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlKTtcclxuICAgICAgICAgIGxldCBvcHRpb24gPSB0aGlzLm9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSB0aGlzLmZvcm1Db250cm9sLnZhbHVlKTtcclxuICAgICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChvcHRpb24pKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1ZhbHVlID0gb3B0aW9uLm9wdGlvblZhbHVlPy5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCB8fCAnJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IHNlbGVjdGVkVmFsdWVzID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZSBhcyBhbnlbXTtcclxuICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFZhbHVlcy5pbmNsdWRlcyhvcHRpb24udmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKTtcclxuICAgICAgICAgIHRoaXMuc2hvd1ZhbHVlID0gc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCA/ICcnIDogc2VsZWN0ZWRPcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLm9wdGlvblZhbHVlPy5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCB8fCAnJykuam9pbignLCAnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtQXJyYXlDb250cm9sQ2hhbmdlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmF1dG9Db21wbGV0ZSkge1xyXG4gICAgICAvLyBUT0RPOiBJbXBsZW1lbnRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sLmNvbnRyb2wudmFsdWUpIHx8ICh0aGlzLmZvcm1BcnJheUNvbnRyb2wuY29udHJvbC52YWx1ZSBhcyBhbnlbXSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5zaG93VmFsdWUgPSAnJztcclxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFZhbHVlcyA9ICh0aGlzLmZvcm1BcnJheUNvbnRyb2wuY29udHJvbC52YWx1ZSBhcyBhbnlbXSkubWFwKHZhbHVlID0+IHZhbHVlW3RoaXMuaWRlbnRpZmllcl0pO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCk7XHJcbiAgICAgICAgdGhpcy5zaG93VmFsdWUgPSBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwID8gJycgOiBzZWxlY3RlZE9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24ub3B0aW9uVmFsdWU/Lm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0IHx8ICcnKS5qb2luKCcsICcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbW9kZWxDaGFuZ2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYXV0b0NvbXBsZXRlKSB7XHJcbiAgICAgIHRoaXMuc2hvd1ZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICBvcHRpb24uZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICgob3B0aW9uLm9wdGlvblZhbHVlPy5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCB8fCAnJykudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2hvd1ZhbHVlPy50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgICBvcHRpb24uZmlsdGVyZWQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgb3B0aW9uLmZpbHRlcmVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAodGhpcy5zaG93VmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBmaWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiAhb3B0aW9uLmZpbHRlcmVkKTtcclxuICAgICAgICBpZiAoZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGZpbHRlcmVkT3B0aW9uc1swXS5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93Tm9PcHRpb25zT25TZWFyY2ggPSBmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoID09PSAwO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIVV0aWwuaXNEZWZpbmVkTm90RW1wdHlPclplcm8odGhpcy52YWx1ZSkpIHtcclxuICAgICAgICB0aGlzLnNob3dWYWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gZmFsc2UpO1xyXG4gICAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMub3B0aW9ucy5maW5kKG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IHRoaXMudmFsdWUpO1xyXG4gICAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKG9wdGlvbikpIHtcclxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zaG93VmFsdWUgPSBvcHRpb24ub3B0aW9uVmFsdWU/Lm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0IHx8ICcnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsZXQgc2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLnZhbHVlIGFzIGFueVtdO1xyXG4gICAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWVzLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQpO1xyXG4gICAgICAgICAgdGhpcy5zaG93VmFsdWUgPSBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwID8gJycgOiBzZWxlY3RlZE9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24ub3B0aW9uVmFsdWU/Lm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0IHx8ICcnKS5qb2luKCcsICcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9yZXNldE9wdGlvbnMoKTogdm9pZCB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5vcHRpb25DaGFuZ2VTdWJzY3JpcHRpb24pICYmICF0aGlzLm9wdGlvbkNoYW5nZVN1YnNjcmlwdGlvbi5jbG9zZWQpIHtcclxuICAgICAgdGhpcy5vcHRpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIHRoaXMub3B0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy53YXRjaCh0aGlzLm9wdGlvblNlbGVjdGlvbkNoYW5nZXMsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKChldmVudDogTXJkU2VsZWN0T3B0aW9uQ2hhbmdlKSA9PiB7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChldmVudCkpIHtcclxuICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiBvcHRpb24uZm9jdXNlZCA9IGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNlYXJjaFRleHQgPSAnJztcclxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLmZpbHRlcmVkID0gZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2hvd05vT3B0aW9uc09uU2VhcmNoID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKGV2ZW50Lm9wdGlvbikgJiYgIXRoaXMuYXV0b0NvbXBsZXRlKSB7XHJcbiAgICAgICAgICBldmVudC5vcHRpb24uc2VsZWN0ZWQgPSB0aGlzLm11bHRpcGxlID8gZXZlbnQuY2hlY2tlZCA6IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgJiYgdGhpcy5mb3JtQ29udHJvbC52YWx1ZSAhPT0gZXZlbnQua2V5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoZXZlbnQua2V5KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGFuZGFsb25lICYmIHRoaXMudmFsdWUgIT09IGV2ZW50LmtleSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gZXZlbnQua2V5O1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93VmFsdWUgPSBldmVudC52YWx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuc2hvd09wdGlvbnMudmFsdWUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCk7XHJcbiAgICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwID8gbnVsbCA6IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMuc3RhbmRhbG9uZSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBzZWxlY3RlZE9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCkpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICB0aGlzLmZvcm1BcnJheUNvbnRyb2wucmVzZXQoW10pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGxldCBzZWxlY3RlZEl0ZW1zID0gc2VsZWN0ZWRPcHRpb25zLm1hcChvcHRpb24gPT4gdGhpcy5pdGVtcy5maW5kKGl0ZW0gPT4gaXRlbVt0aGlzLmlkZW50aWZpZXJdID09PSBvcHRpb24udmFsdWUpKTtcclxuICAgICAgICAgICAgICBsZXQgaXRlbUluZGl6ZXNUb1JlbW92ZTogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICAgICAgICBsZXQgaXRlbXNUb0FkZDogYW55W10gPSBzZWxlY3RlZEl0ZW1zLnNsaWNlKCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5mb3JtQXJyYXlDb250cm9sLmVudHJpZXMuZm9yRWFjaCgoZW50cnk6IEFjY2Vzc2FibGVGb3JtR3JvdXA8YW55LGFueT4sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKHNlbGVjdGVkSXRlbXMuZmluZChpdGVtID0+IGl0ZW1bdGhpcy5pZGVudGlmaWVyXSA9PT0gZW50cnkuZmllbGRzW3RoaXMuaWRlbnRpZmllcl0udmFsdWUpKSkge1xyXG4gICAgICAgICAgICAgICAgICBpdGVtSW5kaXplc1RvUmVtb3ZlLnB1c2goaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgaXRlbXNUb0FkZCA9IGl0ZW1zVG9BZGQuZmlsdGVyKGl0ZW0gPT4gaXRlbVt0aGlzLmlkZW50aWZpZXJdICE9PSBlbnRyeS5maWVsZHNbdGhpcy5pZGVudGlmaWVyXS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgaXRlbUluZGl6ZXNUb1JlbW92ZS5yZXZlcnNlKCkuZm9yRWFjaChpbmRleCA9PiB0aGlzLmZvcm1BcnJheUNvbnRyb2wucmVtb3ZlQXQoaW5kZXgsIGZhbHNlLCB7b25seVNlbGY6IHRydWV9KSk7XHJcbiAgICAgICAgICAgICAgaXRlbXNUb0FkZC5mb3JFYWNoKGl0ZW0gPT4gdGhpcy5mb3JtQXJyYXlDb250cm9sLnB1c2goaXRlbSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5jbG9zZU9uU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd09wdGlvbnMudmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVNlbGVjdGVkKCk6IHZvaWQge1xyXG4gICAgLy8gdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlKTtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKG51bGwpO1xyXG4gICAgfVxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCkpIHtcclxuICAgICAgdGhpcy5mb3JtQXJyYXlDb250cm9sLnJlc2V0KFtdKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YW5kYWxvbmUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLnNob3dWYWx1ZSA9ICcnO1xyXG4gICAgaWYgKCF0aGlzLm11bHRpcGxlIHx8IHRoaXMuY2xvc2VPblNlbGVjdCkge1xyXG4gICAgICB0aGlzLnNob3dPcHRpb25zLnZhbHVlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hpcENsb3NlZChvcHRpb246IE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgb3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICBsZXQgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKTtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDAgPyBudWxsIDogc2VsZWN0ZWRPcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGFuZGFsb25lKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwID8gbnVsbCA6IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sKSkge1xyXG4gICAgICBsZXQgcmVtb3ZlZEluZGV4ID0gdGhpcy5mb3JtQXJyYXlDb250cm9sLmVudHJpZXMuZmluZEluZGV4KChlbnRyeTogQWNjZXNzYWJsZUZvcm1Hcm91cDxhbnksYW55PikgPT4gZW50cnkuZmllbGRzW3RoaXMuaWRlbnRpZmllcl0udmFsdWUgPT09IG9wdGlvbi52YWx1ZSk7XHJcbiAgICAgIHRoaXMuZm9ybUFycmF5Q29udHJvbC5yZW1vdmVBdChyZW1vdmVkSW5kZXgsIGZhbHNlLCB7b25seVNlbGY6IHRydWV9KTtcclxuICAgICAgLy8gdGhpcy5mb3JtQXJyYXlDb250cm9sLnJlc2V0KHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDAgPyBbXSA6IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IHRoaXMuaXRlbXMuZmluZChpdGVtID0+IGl0ZW1bdGhpcy5pZGVudGlmaWVyXSA9PT0gb3B0aW9uLnZhbHVlKSkpO1xyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5zaG93VmFsdWUgPSBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwID8gJycgOiBzZWxlY3RlZE9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24ub3B0aW9uVmFsdWU/Lm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0IHx8ICcnKS5qb2luKCcsICcpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGF1dG9Db21wbGV0ZUlucHV0KGV2ZW50OiBJbnB1dEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZSgoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YW5kYWxvbmUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLnNob3dWYWx1ZSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICAvLyB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgLy8gICBvcHRpb24uZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgLy8gICBpZiAoKG9wdGlvbi5vcHRpb25WYWx1ZT8ubmF0aXZlRWxlbWVudC5pbm5lclRleHQgfHwgJycpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNob3dWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAvLyAgICAgb3B0aW9uLmZpbHRlcmVkID0gZmFsc2U7XHJcbiAgICAvLyAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgb3B0aW9uLmZpbHRlcmVkID0gdHJ1ZTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyBpZiAodGhpcy5zaG93VmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgLy8gICBsZXQgZmlsdGVyZWRPcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gIW9wdGlvbi5maWx0ZXJlZCk7XHJcbiAgICAvLyAgIGlmIChmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgLy8gICAgIGZpbHRlcmVkT3B0aW9uc1swXS5mb2N1c2VkID0gdHJ1ZTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gICB0aGlzLnNob3dOb09wdGlvbnNPblNlYXJjaCA9IGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPT09IDA7XHJcbiAgICAvLyB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWFyY2hJbnB1dChldmVudDogSW5wdXRFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgIG9wdGlvbi5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgIGlmICgob3B0aW9uLm9wdGlvblZhbHVlPy5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCB8fCAnJykudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgb3B0aW9uLmZpbHRlcmVkID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3B0aW9uLmZpbHRlcmVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hUZXh0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGZpbHRlcmVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+ICFvcHRpb24uZmlsdGVyZWQpO1xyXG4gICAgICBpZiAoZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmaWx0ZXJlZE9wdGlvbnNbMF0uZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zaG93Tm9PcHRpb25zT25TZWFyY2ggPSBmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBsZXQgZmlsdGVyZWRPcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gIW9wdGlvbi5maWx0ZXJlZCk7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9IGZpbHRlcmVkT3B0aW9ucy5maW5kKG9wdGlvbiA9PiBvcHRpb24uZm9jdXNlZCk7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChzZWxlY3RlZE9wdGlvbikpIHtcclxuICAgICAgICBzZWxlY3RlZE9wdGlvbi5vcHRpb25DbGljaygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICBsZXQgZm9jdXNlZE9wdGlvbiA9IGZpbHRlcmVkT3B0aW9ucy5maW5kKG9wdGlvbiA9PiBvcHRpb24uZm9jdXNlZCk7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChmb2N1c2VkT3B0aW9uKSkge1xyXG4gICAgICAgIGxldCBmb2N1c2VkT3B0aW9uSW5kZXggPSBmaWx0ZXJlZE9wdGlvbnMuZmluZEluZGV4KChvcHRpb24pID0+IG9wdGlvbi5mb2N1c2VkKTtcclxuICAgICAgICBpZiAoZm9jdXNlZE9wdGlvbkluZGV4ID4gLTEgJiYgZm9jdXNlZE9wdGlvbkluZGV4IDwgZmlsdGVyZWRPcHRpb25zLmxlbmd0aCAtIDIpIHtcclxuICAgICAgICAgIGZvY3VzZWRPcHRpb24uZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgZmlsdGVyZWRPcHRpb25zW2ZvY3VzZWRPcHRpb25JbmRleCArIDFdLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmaWx0ZXJlZE9wdGlvbnNbMF0uZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgbGV0IGZvY3VzZWRPcHRpb24gPSBmaWx0ZXJlZE9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLmZvY3VzZWQpO1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQoZm9jdXNlZE9wdGlvbikpIHtcclxuICAgICAgICBsZXQgZm9jdXNlZE9wdGlvbkluZGV4ID0gZmlsdGVyZWRPcHRpb25zLmZpbmRJbmRleCgob3B0aW9uKSA9PiBvcHRpb24uZm9jdXNlZCk7XHJcbiAgICAgICAgaWYgKGZvY3VzZWRPcHRpb25JbmRleCA+IDApIHtcclxuICAgICAgICAgIGZvY3VzZWRPcHRpb24uZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgZmlsdGVyZWRPcHRpb25zW2ZvY3VzZWRPcHRpb25JbmRleCAtIDFdLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmaWx0ZXJlZE9wdGlvbnNbZmlsdGVyZWRPcHRpb25zLmxlbmd0aCAtIDFdLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHRyaWdnZXJDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKCghVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgfHwgIXRoaXMuZm9ybUNvbnRyb2wuZGlzYWJsZWQpICYmICghVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sKSB8fCAhdGhpcy5mb3JtQXJyYXlDb250cm9sLmNvbnRyb2wuZGlzYWJsZWQpICYmICghdGhpcy5zdGFuZGFsb25lIHx8ICF0aGlzLmRpc2FibGVkKSkge1xyXG4gICAgICB0aGlzLnRvdWNoZWQuZW1pdCgpO1xyXG4gICAgICB0aGlzLmZvY3VzZWQuZW1pdCgpO1xyXG4gICAgICB0aGlzLnNob3dPcHRpb25zLnZhbHVlID0gdHJ1ZTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1yZC1zZWxlY3Qtb3B0aW9ucy1vdmVybGF5IC5tcmQtc2VsZWN0LW9wdGlvbnMtc2Nyb2xsIC5tcmQtc2VsZWN0LW9wdGlvbi1pdGVtLnNlbGVjdGVkJyk7XHJcbiAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHNlbGVjdGVkT3B0aW9uKSkge1xyXG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb24uc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICduZWFyZXN0JywgaW5saW5lOiAnbmVhcmVzdCd9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDEwKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkQnV0dG9uQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYWRkQnV0dG9uXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHNlbGVjdGVkT3B0aW9ucygpOiBNcmRTZWxlY3RPcHRpb25Db21wb25lbnRbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgc2hvd05vT3B0aW9uc09uU2VhcmNoKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93Tm9PcHRpb25zT25TZWFyY2ggPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzaG93Tm9PcHRpb25zT25TZWFyY2goKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd05vT3B0aW9uc09uU2VhcmNoO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzZWQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuYmx1cnJlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG9wdGlvbnNNaW5XaWR0aCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0Q29udGFpbmVyID8gYCR7dGhpcy5zZWxlY3RDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aH1weGAgOiAnYXV0byc7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgI3NlbGVjdENvbnRhaW5lciBjbGFzcz1cIm1yZC1zZWxlY3QtY29udGFpbmVyXCIgW25nQ2xhc3NdPVwieydtcmQtc2VsZWN0LWRpc2FibGVkJzogZm9ybUNvbnRyb2w/LmRpc2FibGVkIHx8IGZvcm1BcnJheUNvbnRyb2w/LmRpc2FibGVkIHx8IGRpc2FibGVkfVwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJhdXRvQ29tcGxldGVcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgKGNsaWNrKT1cInRyaWdnZXJDbGlja2VkKClcIlxyXG4gICAgW3ZhbHVlXT1cInNob3dWYWx1ZVwiXHJcbiAgICAoaW5wdXQpPVwiYXV0b0NvbXBsZXRlSW5wdXQoJGV2ZW50KVwiXHJcbiAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXHJcbiAgPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWF1dG9Db21wbGV0ZVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImN1c3RvbVRyaWdnZXJcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXJkLXNlbGVjdC1jdXN0b20tdHJpZ2dlclwiPjwvbmctY29udGVudD5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjdXN0b21UcmlnZ2VyXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY2hpcFNlbGVjdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtcmQtc2VsZWN0LXRyaWdnZXJcIiAoY2xpY2spPVwidHJpZ2dlckNsaWNrZWQoKVwiPlxyXG4gICAgICAgICAgPHNwYW4gW21yZFRvb2xUaXBdPVwic2hvd1ZhbHVlXCIgc2hvd0lmVHJ1bmNhdGVkPnt7c2hvd1ZhbHVlfX08L3NwYW4+XHJcbiAgICAgICAgICA8c3ZnIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB3aWR0aD1cIjE0cHhcIiBoZWlnaHQ9XCIxNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+XHJcbiAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlPVwiI0NDQ0NDQ1wiIHN0cm9rZS13aWR0aD1cIjAuMDQ4XCI+PC9nPlxyXG4gICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj48cGF0aCBkPVwiTTExLjE3OCAxOS41NjlhLjk5OC45OTggMCAwIDAgMS42NDQgMGw5LTEzQS45OTkuOTk5IDAgMCAwIDIxIDVIM2ExLjAwMiAxLjAwMiAwIDAgMC0uODIyIDEuNTY5bDkgMTN6XCI+PC9wYXRoPjwvZz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNoaXBTZWxlY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXJkLWNoaXAtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibXJkLWNoaXAtdmFsdWVzXCIgKm5nSWY9XCJjaGlwU2VsZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzZWxlY3RlZE9wdGlvbnMgJiYgc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgICAgICA8bXJkLWNoaXAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBzZWxlY3RlZE9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgKGNsb3NlKT1cImNoaXBDbG9zZWQob3B0aW9uKVwiXHJcbiAgICAgICAgICAgICAgICBbcHJlZml4SWNvbl09XCJjaGlwUHJlZml4SWNvblwiXHJcbiAgICAgICAgICAgICAgICBbc3VmZml4SWNvbl09XCJjaGlwU3VmZml4SWNvblwiXHJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZm9ybUNvbnRyb2w/LmRpc2FibGVkIHx8IGZvcm1BcnJheUNvbnRyb2w/LmRpc2FibGVkIHx8IGRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgID57e29wdGlvbi5vcHRpb25MYWJlbH19PC9tcmQtY2hpcD5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtcmQtc2VsZWN0LXRyaWdnZXItY2hpcFwiIChjbGljayk9XCJ0cmlnZ2VyQ2xpY2tlZCgpXCI+XHJcbiAgICAgICAgICAgICAgPHN2ZyBmaWxsPVwiY3VycmVudENvbG9yXCIgd2lkdGg9XCIxNHB4XCIgaGVpZ2h0PVwiMTRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz5cclxuICAgICAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlPVwiI0NDQ0NDQ1wiIHN0cm9rZS13aWR0aD1cIjAuMDQ4XCI+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+PHBhdGggZD1cIk0xMS4xNzggMTkuNTY5YS45OTguOTk4IDAgMCAwIDEuNjQ0IDBsOS0xM0EuOTk5Ljk5OSAwIDAgMCAyMSA1SDNhMS4wMDIgMS4wMDIgMCAwIDAtLjgyMiAxLjU2OWw5IDEzelwiPjwvcGF0aD48L2c+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlXHJcbiAgY2RrLWNvbm5lY3RlZC1vdmVybGF5XHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcF09XCJ0cnVlXCJcclxuICBjZGtDb25uZWN0ZWRPdmVybGF5QmFja2Ryb3BDbGFzcz1cImNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wXCJcclxuICBjZGtDb25uZWN0ZWRPdmVybGF5UGFuZWxDbGFzcz1cIm1yZC1zZWxlY3Qtb3B0aW9ucy1vdmVybGF5XCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJzZWxlY3RDb250YWluZXJcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJzaG93T3B0aW9ucy52YWx1ZVwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnNdPVwiX3Bvc2l0aW9uc1wiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlNaW5XaWR0aF09XCJvcHRpb25zTWluV2lkdGhcIlxyXG4gIChiYWNrZHJvcENsaWNrKT1cInNob3dPcHRpb25zLnZhbHVlID0gZmFsc2VcIlxyXG4+XHJcbiAgPGRpdiBjbGFzcz1cIm1yZC1zZWxlY3Qtb3B0aW9ucy1jb250YWluZXJcIj5cclxuICAgIDxtcmQtc2VsZWN0LW9wdGlvbiAqbmdJZj1cInNlYXJjaFNlbGVjdGlvblwiIGNsYXNzPVwibXJkLXNlbGVjdC1zZWFyY2gtb3B0aW9uXCIgbm9DaGVja2JveD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTdWNoZVwiXHJcbiAgICAgICAgW3ZhbHVlXT1cInNlYXJjaFRleHRcIlxyXG4gICAgICAgIChpbnB1dCk9XCJzZWFyY2hJbnB1dCgkZXZlbnQpXCJcclxuICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcclxuICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXHJcbiAgICAgID5cclxuICAgICAgPG1yZC1idXR0b24gaWNvbi1idXR0b24gKm5nSWY9XCJhZGRCdXR0b25cIiAoY2xpY2spPVwiYWRkQnV0dG9uQ2xpY2tlZCgpXCI+XHJcbiAgICAgICAgPHN2ZyBtcmQtaWNvbiB3aWR0aD1cIjY0XCIgaGVpZ2h0PVwiNjRcIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTU0LjYyNyA5LjM3MjMxQzU5LjEwMjQgMTMuODQ3NSA2Mi4xNTAyIDE5LjU0OTQgNjMuMzg1MSAyNS43NTY4QzY0LjYxOTkgMzEuOTY0MyA2My45ODYyIDM4LjM5ODMgNjEuNTY0MyA0NC4yNDU2QzU5LjE0MjMgNTAuMDkyOSA1NS4wNDA4IDU1LjA5MDcgNDkuNzc4NCA1OC42MDY5QzQ0LjUxNiA2Mi4xMjMyIDM4LjMyOTEgNjQgMzIgNjRDMjUuNjcxIDY0IDE5LjQ4NCA2Mi4xMjMyIDE0LjIyMTYgNTguNjA2OUM4Ljk1OTI1IDU1LjA5MDcgNC44NTc3MyA1MC4wOTI5IDIuNDM1NzYgNDQuMjQ1NkMwLjAxMzc4NzUgMzguMzk4MyAtMC42MTk4NTEgMzEuOTY0MyAwLjYxNDk3MiAyNS43NTY4QzEuODQ5NzkgMTkuNTQ5NCA0Ljg5NzYxIDEzLjg0NzUgOS4zNzMwMSA5LjM3MjMxQzE1LjM3NDEgMy4zNzE0MSAyMy41MTMzIDAgMzIgMEM0MC40ODY3IDAgNDguNjI1OSAzLjM3MTQxIDU0LjYyNyA5LjM3MjMxWlwiIGZpbGw9XCIjNjVCMzJFXCIvPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0yOS4wNDM4IDQxLjY3NThWMzQuOTMwOEgyMi4yOTg4QzIxLjkxMDUgMzQuOTMwOCAyMS41MjYgMzQuODU0NCAyMS4xNjcyIDM0LjcwNTdDMjAuODA4NCAzNC41NTcxIDIwLjQ4MjUgMzQuMzM5MyAyMC4yMDc5IDM0LjA2NDhDMTkuOTMzMyAzMy43OTAyIDE5LjcxNTUgMzMuNDY0MiAxOS41NjY5IDMzLjEwNTRDMTkuNDE4MyAzMi43NDY3IDE5LjM0MTggMzIuMzYyMiAxOS4zNDE4IDMxLjk3MzhDMTkuMzQxOCAzMS41ODU1IDE5LjQxODMgMzEuMjAxIDE5LjU2NjkgMzAuODQyMkMxOS43MTU1IDMwLjQ4MzUgMTkuOTMzMyAzMC4xNTc1IDIwLjIwNzkgMjkuODgyOUMyMC40ODI1IDI5LjYwODMgMjAuODA4NCAyOS4zOTA1IDIxLjE2NzIgMjkuMjQxOUMyMS41MjYgMjkuMDkzMyAyMS45MTA1IDI5LjAxNjggMjIuMjk4OCAyOS4wMTY4SDI5LjA0MzhWMjIuMjcxOEMyOS4wNDM3IDIxLjg4MzUgMjkuMTIgMjEuNDk5MSAyOS4yNjg1IDIxLjE0MDNDMjkuNDE3IDIwLjc4MTYgMjkuNjM0NyAyMC40NTU2IDI5LjkwOTIgMjAuMTgxQzMwLjE4MzcgMTkuOTA2NCAzMC41MDk2IDE5LjY4ODYgMzAuODY4MyAxOS41Mzk5QzMxLjIyNzEgMTkuMzkxMyAzMS42MTE1IDE5LjMxNDggMzEuOTk5OCAxOS4zMTQ4QzMyLjc4MzggMTkuMzE0OCAzMy41MzU2IDE5LjYyNjMgMzQuMDkgMjAuMTgwNkMzNC42NDQ0IDIwLjczNSAzNC45NTU4IDIxLjQ4NjkgMzQuOTU1OCAyMi4yNzA4VjI5LjAxNThINDEuNzAwOEM0Mi40ODUgMjkuMDE1OCA0My4yMzcyIDI5LjMyNzQgNDMuNzkxNyAyOS44ODE5QzQ0LjM0NjMgMzAuNDM2NSA0NC42NTc4IDMxLjE4ODYgNDQuNjU3OCAzMS45NzI4QzQ0LjY1NzggMzIuNzU3MSA0NC4zNDYzIDMzLjUwOTIgNDMuNzkxNyAzNC4wNjM4QzQzLjIzNzIgMzQuNjE4MyA0Mi40ODUgMzQuOTI5OCA0MS43MDA4IDM0LjkyOThIMzQuOTU1OFY0MS42NzM4QzM0Ljk2MyA0Mi4wNjY3IDM0Ljg5MTkgNDIuNDU3IDM0Ljc0NjYgNDIuODIyQzM0LjYwMTIgNDMuMTg3IDM0LjM4NDYgNDMuNTE5NCAzNC4xMDkzIDQzLjc5OThDMzMuODM0MSA0NC4wODAyIDMzLjUwNTcgNDQuMzAyOSAzMy4xNDM0IDQ0LjQ1NDlDMzIuNzgxMSA0NC42MDY5IDMyLjM5MjIgNDQuNjg1MiAzMS45OTkzIDQ0LjY4NTJDMzEuNjA2NCA0NC42ODUyIDMxLjIxNzQgNDQuNjA2OSAzMC44NTUxIDQ0LjQ1NDlDMzAuNDkyOSA0NC4zMDI5IDMwLjE2NDUgNDQuMDgwMiAyOS44ODkyIDQzLjc5OThDMjkuNjE0IDQzLjUxOTQgMjkuMzk3NCA0My4xODcgMjkuMjUyIDQyLjgyMkMyOS4xMDY3IDQyLjQ1NyAyOS4wMzU2IDQyLjA2NjcgMjkuMDQyOCA0MS42NzM4TDI5LjA0MzggNDEuNjc1OFpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvbXJkLWJ1dHRvbj5cclxuICAgIDwvbXJkLXNlbGVjdC1vcHRpb24+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXJkLXNlbGVjdC1vcHRpb25zLXNjcm9sbFwiPlxyXG4gICAgICA8bXJkLXNlbGVjdC1vcHRpb24gKm5nSWY9XCJudWxsYWJsZVwiIG5vQ2hlY2tib3ggW3ZhbHVlXT1cIm51bGxcIiAob3B0aW9uQ2xpY2tlZCk9XCJyZW1vdmVTZWxlY3RlZCgpXCI+e3ttdWx0aXBsZSA/ICdBdXN3YWhsIGzDtnNjaGVuJyA6ICctJ319PC9tcmQtc2VsZWN0LW9wdGlvbj5cclxuICAgICAgPG1yZC1zZWxlY3Qtb3B0aW9uICpuZ0lmPVwic2VhcmNoU2VsZWN0aW9uICYmIHNlYXJjaFRleHQubGVuZ3RoID4gMCAmJiBzaG93Tm9PcHRpb25zT25TZWFyY2hcIiBub0NoZWNrYm94PktlaW5lIEVpbnRyw6RnZSBnZWZ1bmRlbjwvbXJkLXNlbGVjdC1vcHRpb24+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm1yZC1zZWxlY3Qtb3B0aW9uXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+Il19