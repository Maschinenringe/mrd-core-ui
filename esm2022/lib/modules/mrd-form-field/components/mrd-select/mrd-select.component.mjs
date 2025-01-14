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
    i0.ɵɵproperty("value", ctx_r1.value);
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
    i0.ɵɵproperty("mrdToolTip", ctx_r10.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r10.value);
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
    i0.ɵɵproperty("prefixIcon", ctx_r16.chipPrefixIcon)("suffixIcon", ctx_r16.chipSuffixIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r17.optionLabel);
} }
function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_ng_container_1_mrd_chip_1_Template, 2, 3, "mrd-chip", 16);
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
function MrdSelectComponent_ng_template_4_mrd_select_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-select-option", 23)(1, "input", 24);
    i0.ɵɵlistener("input", function MrdSelectComponent_ng_template_4_mrd_select_option_1_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r25.searchInput($event)); })("click", function MrdSelectComponent_ng_template_4_mrd_select_option_1_Template_input_click_1_listener($event) { return $event.stopPropagation(); })("keydown", function MrdSelectComponent_ng_template_4_mrd_select_option_1_Template_input_keydown_1_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r28 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r28.onKeyDown($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r22.searchText);
} }
function MrdSelectComponent_ng_template_4_mrd_select_option_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-select-option", 25);
    i0.ɵɵlistener("optionClicked", function MrdSelectComponent_ng_template_4_mrd_select_option_3_Template_mrd_select_option_optionClicked_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r29.removeSelected()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r23.multiple ? "Auswahl l\u00F6schen" : "-");
} }
function MrdSelectComponent_ng_template_4_mrd_select_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mrd-select-option", 26);
    i0.ɵɵtext(1, "Keine Eintr\u00E4ge gefunden");
    i0.ɵɵelementEnd();
} }
function MrdSelectComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_template_4_mrd_select_option_1_Template, 2, 1, "mrd-select-option", 19);
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
    identifier = 'id';
    items = [];
    autoComplete = false;
    searchSelection = false;
    chipSelection = false;
    nullable = false;
    get multiple() {
        return this._multiple;
    }
    set multiple(value) {
        this._multiple = value;
    }
    _multiple = false;
    chipPrefixIcon;
    chipSuffixIcon;
    touched = new EventEmitter();
    focused = new EventEmitter();
    blurred = new EventEmitter();
    showOptions = new ObservableValue(false);
    optionsVisible = false;
    _showNoOptionsOnSearch = false;
    value = '';
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
            overlayY: 'bottom',
            panelClass: 'mat-mdc-select-panel-above',
        },
        {
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom',
            panelClass: 'mat-mdc-select-panel-above',
        },
    ];
    constructor(elementRef, cdr) {
        super();
        this.elementRef = elementRef;
        this.cdr = cdr;
    }
    ngOnInit() {
        this.watch(this.showOptions.changed, new SubscriptionHandler((value) => {
            if (value) {
                setTimeout(() => {
                    let optionsContainer = this.elementRef.nativeElement.querySelector('.mrd-select-options-container');
                    let optionsContainerRight = optionsContainer.getBoundingClientRect().right;
                    let optionsContainerBottom = optionsContainer.getBoundingClientRect().bottom;
                    let windowWidth = window.innerWidth;
                    if (optionsContainerRight > windowWidth) {
                        this.optionsWidthExceeded = true;
                    }
                    else {
                        this.optionsWidthExceeded = false;
                    }
                    let windowHeight = window.innerHeight;
                    if (optionsContainerBottom > windowHeight) {
                        this.optionsHeightExceeded = true;
                    }
                    else {
                        this.optionsHeightExceeded = false;
                    }
                    this.optionsVisible = true;
                    this.cdr.markForCheck();
                });
            }
            else {
                this.optionsWidthExceeded = false;
                this.optionsHeightExceeded = false;
                this.optionsVisible = false;
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
                        option.optionClick();
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
        if (Util.isDefined(this.formArrayControl) && Util.isDefined(this.formArrayControl.value)) {
            let selectedValues = (this.formArrayControl.value).map(value => value[this.identifier]);
            this.options.forEach(option => {
                if (selectedValues.includes(option.value)) {
                    option.optionClick();
                }
            });
        }
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
                    this.value = event.value;
                    this.showOptions.value = false;
                }
                else {
                    let selectedOptions = this.options.filter(option => option.selected);
                    if (Util.isDefined(this.formControl)) {
                        this.formControl.setValue(selectedOptions.length === 0 ? null : selectedOptions.map(option => option.value));
                    }
                    if (Util.isDefined(this.formArrayControl)) {
                        this.formArrayControl.reset(selectedOptions.length === 0 ? [] : selectedOptions.map(option => this.items.find(item => item[this.identifier] === option.value)));
                    }
                    this.value = selectedOptions.length === 0 ? '' : selectedOptions.map(option => option.optionValue?.nativeElement.innerText || '').join(', ');
                }
            }
            this.cdr.detectChanges();
        }));
    }
    removeSelected() {
        this.options.forEach(option => option.selected = false);
        if (Util.isDefined(this.formControl)) {
            this.formControl.setValue(null);
        }
        if (Util.isDefined(this.formArrayControl)) {
            this.formArrayControl.reset([]);
        }
        this.value = '';
        if (!this.multiple) {
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
        if (Util.isDefined(this.formArrayControl)) {
            this.formArrayControl.reset(selectedOptions.length === 0 ? [] : selectedOptions.map(option => this.items.find(item => item[this.identifier] === option.value)));
        }
        this.value = selectedOptions.length === 0 ? '' : selectedOptions.map(option => option.optionValue?.nativeElement.innerText || '').join(', ');
        this.cdr.detectChanges();
    }
    autoCompleteInput(event) {
        if (Util.isDefined(this.formControl)) {
            this.formControl.setValue(event.target.value);
        }
        this.value = event.target.value;
        this.options.forEach(option => {
            option.focused = false;
            if ((option.optionValue?.nativeElement.innerText || '').toLowerCase().indexOf(this.value.toLowerCase()) > -1) {
                option.filtered = false;
            }
            else {
                option.filtered = true;
            }
        });
        if (this.value.length > 0) {
            let filteredOptions = this.options.filter(option => !option.filtered);
            if (filteredOptions.length > 0) {
                filteredOptions[0].focused = true;
            }
            this.showNoOptionsOnSearch = filteredOptions.length === 0;
        }
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
        if ((!Util.isDefined(this.formControl) || !this.formControl.disabled) && (!Util.isDefined(this.formArrayControl) || !this.formArrayControl.control.disabled)) {
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
        } }, inputs: { formControl: ["mrdFormControl", "formControl"], formArrayControl: ["mrdFormArray", "formArrayControl"], identifier: "identifier", items: "items", autoComplete: ["autoComplete", "autoComplete", booleanAttribute], searchSelection: ["searchSelection", "searchSelection", booleanAttribute], chipSelection: ["chipSelection", "chipSelection", booleanAttribute], nullable: ["nullable", "nullable", booleanAttribute], multiple: ["multiple", "multiple", booleanAttribute], chipPrefixIcon: "chipPrefixIcon", chipSuffixIcon: "chipSuffixIcon" }, outputs: { touched: "touched", focused: "focused", blurred: "blurred" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c3, decls: 5, vars: 10, consts: [[1, "mrd-select-container", 3, "ngClass"], ["selectContainer", ""], [4, "ngIf"], ["cdk-connected-overlay", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", "cdkConnectedOverlayPanelClass", "mrd-select-options-overlay", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "backdropClick"], [3, "value", "click", "input", "keydown"], [1, "mrd-select-trigger", 3, "click"], ["showIfTruncated", "", 3, "mrdToolTip"], ["fill", "currentColor", "width", "14px", "height", "14px", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke", "#CCCCCC", "stroke-width", "0.048"], ["id", "SVGRepo_iconCarrier"], ["d", "M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"], [1, "mrd-chip-container"], ["class", "mrd-chip-values", 4, "ngIf"], [1, "mrd-chip-values"], [1, "mrd-select-trigger-chip", 3, "click"], [3, "prefixIcon", "suffixIcon", "close", 4, "ngFor", "ngForOf"], [3, "prefixIcon", "suffixIcon", "close"], [1, "flex", "flex-col", "w-full", "bg-white", "rounded-md", "shadow-md"], ["class", "mrd-select-search-option border-b border-slate-200", "noCheckbox", "", 4, "ngIf"], [1, "mrd-select-options-scroll", "max-h-60", "overflow-y-auto", "w-full", "min-w-fit"], ["noCheckbox", "", 3, "value", "optionClicked", 4, "ngIf"], ["noCheckbox", "", 4, "ngIf"], ["noCheckbox", "", 1, "mrd-select-search-option", "border-b", "border-slate-200"], ["placeholder", "Suche", 3, "value", "input", "click", "keydown"], ["noCheckbox", "", 3, "value", "optionClicked"], ["noCheckbox", ""]], template: function MrdSelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "div", 0, 1);
            i0.ɵɵtemplate(2, MrdSelectComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
            i0.ɵɵtemplate(3, MrdSelectComponent_ng_container_3_Template, 3, 2, "ng-container", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, MrdSelectComponent_ng_template_4_Template, 6, 3, "ng-template", 3);
            i0.ɵɵlistener("backdropClick", function MrdSelectComponent_Template_ng_template_backdropClick_4_listener() { return ctx.showOptions.value = false; });
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c2, ctx.formControl == null ? null : ctx.formControl.disabled));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.autoComplete);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.autoComplete);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.showOptions.value)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayMinWidth", ctx.optionsMinWidth);
        } }, styles: ["[_nghost-%COMP%]{width:100%}input[_ngcontent-%COMP%]{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-options-placing[_ngcontent-%COMP%]{position:relative;height:0}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-options-placing[_ngcontent-%COMP%]   .mrd-select-options-container[_ngcontent-%COMP%]{position:absolute;top:.5em;left:0;background-color:#fff;width:100%;min-width:-moz-fit-content;min-width:fit-content;border-bottom-right-radius:8px;border-bottom-left-radius:8px;z-index:1000;box-shadow:0 11px 15px #00000040;overflow:hidden;visibility:hidden}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-options-placing[_ngcontent-%COMP%]   .mrd-select-options-container.width-exceeded[_ngcontent-%COMP%]{right:0;left:unset}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-options-placing[_ngcontent-%COMP%]   .mrd-select-options-container.height-exceeded[_ngcontent-%COMP%]{top:unset;bottom:2.8em;border-radius:8px 8px 0 0}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-options-placing[_ngcontent-%COMP%]   .mrd-select-options-container.options-visible[_ngcontent-%COMP%]{visibility:visible}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-options-placing[_ngcontent-%COMP%]   .mrd-select-options-container[_ngcontent-%COMP%]   .mrd-select-search-option[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.2196078431)}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-options-placing[_ngcontent-%COMP%]   .mrd-select-options-container[_ngcontent-%COMP%]   .mrd-select-options-scroll[_ngcontent-%COMP%]{overflow-y:auto;max-height:15em}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-trigger[_ngcontent-%COMP%]{display:flex;height:1.5em;width:100%;cursor:pointer;padding-left:2px;flex-direction:row;align-items:center}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-trigger[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-trigger[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{margin-right:8px}.mrd-select-container[_ngcontent-%COMP%]   .mrd-chip-container[_ngcontent-%COMP%]{margin-top:4px}.mrd-select-container[_ngcontent-%COMP%]   .mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-values[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:8px}.mrd-select-container[_ngcontent-%COMP%]   .mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-values[_ngcontent-%COMP%]   .mrd-select-trigger-chip[_ngcontent-%COMP%]{display:flex;height:1.5em;min-width:30%;max-width:100%;flex:1 1 30%;cursor:pointer;padding-left:2px;flex-direction:row;align-items:center;justify-content:flex-end}.mrd-select-container[_ngcontent-%COMP%]   .mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-values[_ngcontent-%COMP%]   .mrd-select-trigger-chip[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{margin-right:8px}.mrd-select-container.mrd-select-disabled[_ngcontent-%COMP%]   .mrd-select-trigger[_ngcontent-%COMP%]{color:#afa6a6;cursor:inherit}.cdk-overlay-pane[_ngcontent-%COMP%]:not(.mat-mdc-select-panel-above){border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdSelectComponent, [{
        type: Component,
        args: [{ selector: 'mrd-select', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div #selectContainer class=\"mrd-select-container\" [ngClass]=\"{'mrd-select-disabled': formControl?.disabled}\">\r\n  <ng-container *ngIf=\"autoComplete\">\r\n    <input\r\n    (click)=\"triggerClicked()\"\r\n    [value]=\"value\"\r\n    (input)=\"autoCompleteInput($event)\"\r\n    (keydown)=\"onKeyDown($event)\"\r\n  >\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"!autoComplete\">\r\n    <ng-container *ngIf=\"customTrigger\">\r\n      <ng-content select=\"mrd-select-custom-trigger\"></ng-content>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!customTrigger\">\r\n      <ng-container *ngIf=\"!chipSelection\">\r\n        <div class=\"mrd-select-trigger\" (click)=\"triggerClicked()\">\r\n          <span [mrdToolTip]=\"value\" showIfTruncated>{{value}}</span>\r\n          <svg fill=\"currentColor\" width=\"14px\" height=\"14px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\r\n            <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#CCCCCC\" stroke-width=\"0.048\"></g>\r\n            <g id=\"SVGRepo_iconCarrier\"><path d=\"M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z\"></path></g>\r\n          </svg>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"chipSelection\">\r\n        <div class=\"mrd-chip-container\">\r\n          <div class=\"mrd-chip-values\" *ngIf=\"chipSelection\">\r\n            <ng-container *ngIf=\"selectedOptions && selectedOptions.length > 0\">\r\n              <mrd-chip *ngFor=\"let option of selectedOptions\"\r\n                (close)=\"chipClosed(option)\"\r\n                [prefixIcon]=\"chipPrefixIcon\"\r\n                [suffixIcon]=\"chipSuffixIcon\"\r\n                >{{option.optionLabel}}</mrd-chip>\r\n            </ng-container>\r\n            <div class=\"mrd-select-trigger-chip\" (click)=\"triggerClicked()\">\r\n              <svg fill=\"currentColor\" width=\"14px\" height=\"14px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\r\n                <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#CCCCCC\" stroke-width=\"0.048\"></g>\r\n                <g id=\"SVGRepo_iconCarrier\"><path d=\"M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z\"></path></g>\r\n              </svg>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n</div>\r\n\r\n<ng-template\r\n  cdk-connected-overlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\r\n  cdkConnectedOverlayPanelClass=\"mrd-select-options-overlay\"\r\n  [cdkConnectedOverlayOrigin]=\"selectContainer\"\r\n  [cdkConnectedOverlayOpen]=\"showOptions.value\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  [cdkConnectedOverlayMinWidth]=\"optionsMinWidth\"\r\n  (backdropClick)=\"showOptions.value = false\"\r\n>\r\n  <div class=\"flex flex-col w-full bg-white rounded-md shadow-md\">\r\n    <mrd-select-option *ngIf=\"searchSelection\" class=\"mrd-select-search-option border-b border-slate-200\" noCheckbox>\r\n      <input\r\n        placeholder=\"Suche\"\r\n        [value]=\"searchText\"\r\n        (input)=\"searchInput($event)\"\r\n        (click)=\"$event.stopPropagation()\"\r\n        (keydown)=\"onKeyDown($event)\"\r\n      >\r\n    </mrd-select-option>\r\n    <div class=\"mrd-select-options-scroll max-h-60 overflow-y-auto w-full min-w-fit \">\r\n      <mrd-select-option *ngIf=\"nullable\" noCheckbox [value]=\"null\" (optionClicked)=\"removeSelected()\">{{multiple ? 'Auswahl l\u00F6schen' : '-'}}</mrd-select-option>\r\n      <mrd-select-option *ngIf=\"searchSelection && searchText.length > 0 && showNoOptionsOnSearch\" noCheckbox>Keine Eintr\u00E4ge gefunden</mrd-select-option>\r\n      <ng-content select=\"mrd-select-option\"></ng-content>\r\n    </div>\r\n  </div>\r\n</ng-template>", styles: [":host{width:100%}input{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}.mrd-select-container .mrd-select-options-placing{position:relative;height:0}.mrd-select-container .mrd-select-options-placing .mrd-select-options-container{position:absolute;top:.5em;left:0;background-color:#fff;width:100%;min-width:-moz-fit-content;min-width:fit-content;border-bottom-right-radius:8px;border-bottom-left-radius:8px;z-index:1000;box-shadow:0 11px 15px #00000040;overflow:hidden;visibility:hidden}.mrd-select-container .mrd-select-options-placing .mrd-select-options-container.width-exceeded{right:0;left:unset}.mrd-select-container .mrd-select-options-placing .mrd-select-options-container.height-exceeded{top:unset;bottom:2.8em;border-radius:8px 8px 0 0}.mrd-select-container .mrd-select-options-placing .mrd-select-options-container.options-visible{visibility:visible}.mrd-select-container .mrd-select-options-placing .mrd-select-options-container .mrd-select-search-option{border-bottom:1px solid rgba(0,0,0,.2196078431)}.mrd-select-container .mrd-select-options-placing .mrd-select-options-container .mrd-select-options-scroll{overflow-y:auto;max-height:15em}.mrd-select-container .mrd-select-trigger{display:flex;height:1.5em;width:100%;cursor:pointer;padding-left:2px;flex-direction:row;align-items:center}.mrd-select-container .mrd-select-trigger>span{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-select-container .mrd-select-trigger>svg{margin-right:8px}.mrd-select-container .mrd-chip-container{margin-top:4px}.mrd-select-container .mrd-chip-container .mrd-chip-values{display:flex;flex-direction:row;flex-wrap:wrap;gap:8px}.mrd-select-container .mrd-chip-container .mrd-chip-values .mrd-select-trigger-chip{display:flex;height:1.5em;min-width:30%;max-width:100%;flex:1 1 30%;cursor:pointer;padding-left:2px;flex-direction:row;align-items:center;justify-content:flex-end}.mrd-select-container .mrd-chip-container .mrd-chip-values .mrd-select-trigger-chip>svg{margin-right:8px}.mrd-select-container.mrd-select-disabled .mrd-select-trigger{color:#afa6a6;cursor:inherit}.cdk-overlay-pane:not(.mat-mdc-select-panel-above){border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}\n"] }]
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
        }], chipPrefixIcon: [{
            type: Input
        }], chipSuffixIcon: [{
            type: Input
        }], touched: [{
            type: Output
        }], focused: [{
            type: Output
        }], blurred: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWZvcm0tZmllbGQvY29tcG9uZW50cy9tcmQtc2VsZWN0L21yZC1zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLXNlbGVjdC9tcmQtc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBbUMsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFhLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvTyxPQUFPLEVBQThDLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDMUksT0FBTyxFQUF5Qix3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ25ILE9BQU8sRUFBYyxPQUFPLEVBQWdCLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQzs7Ozs7SUNIakgsNkJBQW1DO0lBQ2pDLGdDQUtEO0lBSkMsdUtBQVMsZUFBQSx1QkFBZ0IsQ0FBQSxJQUFDLGdLQUVqQixlQUFBLGdDQUF5QixDQUFBLElBRlIsb0tBR2YsZUFBQSx3QkFBaUIsQ0FBQSxJQUhGO0lBRDFCLGlCQUtEO0lBQ0QsMEJBQWU7OztJQUpiLGVBQWU7SUFBZixvQ0FBZTs7O0lBT2YsNkJBQW9D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QU87a0JBQWhCLE1BQU07WUFDRyxPQUFPO2tCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgQ29udGVudENoaWxkcmVuLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgUXVlcnlMaXN0LCBWaWV3Q2hpbGQsIGJvb2xlYW5BdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWNjZXNzYWJsZUZvcm1BcnJheSwgQWNjZXNzYWJsZUZvcm1Db250cm9sLCBCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0LCBPYnNlcnZhYmxlVmFsdWUsIFN1YnNjcmlwdGlvbkhhbmRsZXIsIFV0aWwgfSBmcm9tICdtcmQtY29yZSc7XHJcbmltcG9ydCB7IE1yZFNlbGVjdE9wdGlvbkNoYW5nZSwgTXJkU2VsZWN0T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vbXJkLXNlbGVjdC1vcHRpb24vbXJkLXNlbGVjdC1vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uLCBkZWZlciwgbWVyZ2UsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1yZFNlbGVjdEN1c3RvbVRyaWdnZXJDb21wb25lbnQgfSBmcm9tICcuLi9tcmQtc2VsZWN0LWN1c3RvbS10cmlnZ2VyL21yZC1zZWxlY3QtY3VzdG9tLXRyaWdnZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29ubmVjdGVkUG9zaXRpb24gfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1zZWxlY3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZFNlbGVjdENvbXBvbmVudCBleHRlbmRzIEJhc2VQdXNoU3RyYXRlZ3lPYmplY3QgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCdzZWxlY3RDb250YWluZXInKSBzZWxlY3RDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oTXJkU2VsZWN0T3B0aW9uQ29tcG9uZW50KSBvcHRpb25zOiBRdWVyeUxpc3Q8TXJkU2VsZWN0T3B0aW9uQ29tcG9uZW50PjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChNcmRTZWxlY3RDdXN0b21UcmlnZ2VyQ29tcG9uZW50KSBjdXN0b21UcmlnZ2VyOiBNcmRTZWxlY3RDdXN0b21UcmlnZ2VyQ29tcG9uZW50O1xyXG5cclxuICBwcml2YXRlIF9pbml0aWFsaXplZCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcmVhZG9ubHkgb3B0aW9uU2VsZWN0aW9uQ2hhbmdlczogT2JzZXJ2YWJsZTxhbnk+ID0gZGVmZXIoKCkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHJcbiAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gb3B0aW9ucy5jaGFuZ2VzLnBpcGUoXHJcbiAgICAgICAgc3RhcnRXaXRoKG9wdGlvbnMpLFxyXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiBtZXJnZSguLi5vcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLm9wdGlvbkNsaWNrZWQpKSksXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2luaXRpYWxpemVkLnBpcGUoc3dpdGNoTWFwKCgpID0+IHRoaXMub3B0aW9uU2VsZWN0aW9uQ2hhbmdlcykpO1xyXG4gIH0pO1xyXG5cclxuICBASW5wdXQoJ21yZEZvcm1Db250cm9sJykgZm9ybUNvbnRyb2w6IEFjY2Vzc2FibGVGb3JtQ29udHJvbDtcclxuICBASW5wdXQoJ21yZEZvcm1BcnJheScpIGZvcm1BcnJheUNvbnRyb2w6IEFjY2Vzc2FibGVGb3JtQXJyYXk8YW55PjtcclxuICBASW5wdXQoKSBwdWJsaWMgaWRlbnRpZmllcjogc3RyaW5nID0gJ2lkJztcclxuICBASW5wdXQoKSBwdWJsaWMgaXRlbXM6IGFueVtdID0gW107XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBhdXRvQ29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHNlYXJjaFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgY2hpcFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgbnVsbGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pXHJcbiAgZ2V0IG11bHRpcGxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xyXG4gIH1cclxuICBzZXQgbXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX211bHRpcGxlID0gdmFsdWU7XHJcbiAgfVxyXG4gIHByaXZhdGUgX211bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBjaGlwUHJlZml4SWNvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjaGlwU3VmZml4SWNvbjogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgdG91Y2hlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBmb2N1c2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIGJsdXJyZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgcHVibGljIHNob3dPcHRpb25zOiBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj4gPSBuZXcgT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBwdWJsaWMgb3B0aW9uc1Zpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgX3Nob3dOb09wdGlvbnNPblNlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgdmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIHB1YmxpYyBzZWFyY2hUZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgcHVibGljIG9wdGlvbnNXaWR0aEV4Y2VlZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIG9wdGlvbnNIZWlnaHRFeGNlZWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIG9wdGlvbkNoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBfcG9zaXRpb25zOiBDb25uZWN0ZWRQb3NpdGlvbltdID0gW1xyXG4gICAge1xyXG4gICAgICBvcmlnaW5YOiAnc3RhcnQnLFxyXG4gICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgIG92ZXJsYXlZOiAndG9wJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG9yaWdpblg6ICdlbmQnLFxyXG4gICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgb3ZlcmxheVg6ICdlbmQnLFxyXG4gICAgICBvdmVybGF5WTogJ3RvcCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBvcmlnaW5YOiAnc3RhcnQnLFxyXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgIG92ZXJsYXlZOiAnYm90dG9tJyxcclxuICAgICAgcGFuZWxDbGFzczogJ21hdC1tZGMtc2VsZWN0LXBhbmVsLWFib3ZlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG9yaWdpblg6ICdlbmQnLFxyXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgb3ZlcmxheVg6ICdlbmQnLFxyXG4gICAgICBvdmVybGF5WTogJ2JvdHRvbScsXHJcbiAgICAgIHBhbmVsQ2xhc3M6ICdtYXQtbWRjLXNlbGVjdC1wYW5lbC1hYm92ZScsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMud2F0Y2godGhpcy5zaG93T3B0aW9ucy5jaGFuZ2VkLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigodmFsdWU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBsZXQgb3B0aW9uc0NvbnRhaW5lciA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tcmQtc2VsZWN0LW9wdGlvbnMtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICBsZXQgb3B0aW9uc0NvbnRhaW5lclJpZ2h0ID0gb3B0aW9uc0NvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodDtcclxuICAgICAgICAgIGxldCBvcHRpb25zQ29udGFpbmVyQm90dG9tID0gb3B0aW9uc0NvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XHJcbiAgICAgICAgICBsZXQgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICAgIGlmIChvcHRpb25zQ29udGFpbmVyUmlnaHQgPiB3aW5kb3dXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNXaWR0aEV4Y2VlZGVkID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1dpZHRoRXhjZWVkZWQgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICBpZiAob3B0aW9uc0NvbnRhaW5lckJvdHRvbSA+IHdpbmRvd0hlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNIZWlnaHRFeGNlZWRlZCA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNIZWlnaHRFeGNlZWRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5vcHRpb25zVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnNXaWR0aEV4Y2VlZGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zSGVpZ2h0RXhjZWVkZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9wdGlvbnNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuX2luaXRpYWxpemVkLm5leHQobnVsbCk7XHJcbiAgICB0aGlzLl9pbml0aWFsaXplZC5jb21wbGV0ZSgpO1xyXG5cclxuICAgIHRoaXMud2F0Y2godGhpcy5vcHRpb25zLmNoYW5nZXMucGlwZShzdGFydFdpdGgobnVsbCkpLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoKSA9PiB7XHJcbiAgICAgIHRoaXMuX3Jlc2V0T3B0aW9ucygpO1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sKSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkVmFsdWVzID0gKHRoaXMuZm9ybUFycmF5Q29udHJvbC52YWx1ZSkubWFwKHZhbHVlID0+IHZhbHVlW3RoaXMuaWRlbnRpZmllcl0pO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBvcHRpb24ub3B0aW9uQ2xpY2soKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSkpO1xyXG5cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmN1c3RvbVRyaWdnZXIpKSB7XHJcbiAgICAgIHRoaXMud2F0Y2godGhpcy5jdXN0b21UcmlnZ2VyLnRyaWdnZXJDbGljaywgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlckNsaWNrZWQoKTtcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcyBrYW5uIG51ciBlaW4gRm9ybUNvbnRyb2wgb2RlciBlaW4gRm9ybUFycmF5Q29udHJvbCB2ZXJ3ZW5kZXQgd2VyZGVuLicpO1xyXG4gICAgfVxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5maW5kKG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IHRoaXMuZm9ybUNvbnRyb2wudmFsdWUpPy5vcHRpb25DbGljaygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFZhbHVlcyA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWUgYXMgYW55W107XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgIGlmIChzZWxlY3RlZFZhbHVlcy5pbmNsdWRlcyhvcHRpb24udmFsdWUpKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5vcHRpb25DbGljaygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sKSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgIGxldCBzZWxlY3RlZFZhbHVlcyA9ICh0aGlzLmZvcm1BcnJheUNvbnRyb2wudmFsdWUpLm1hcCh2YWx1ZSA9PiB2YWx1ZVt0aGlzLmlkZW50aWZpZXJdKTtcclxuICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSkge1xyXG4gICAgICAgICAgb3B0aW9uLm9wdGlvbkNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3Jlc2V0T3B0aW9ucygpOiB2b2lkIHtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLm9wdGlvbkNoYW5nZVN1YnNjcmlwdGlvbikgJiYgIXRoaXMub3B0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uLmNsb3NlZCkge1xyXG4gICAgICB0aGlzLm9wdGlvbkNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vcHRpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLndhdGNoKHRoaXMub3B0aW9uU2VsZWN0aW9uQ2hhbmdlcywgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKGV2ZW50OiBNcmRTZWxlY3RPcHRpb25DaGFuZ2UpID0+IHtcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKGV2ZW50KSkge1xyXG4gICAgICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5mb2N1c2VkID0gZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2hvd05vT3B0aW9uc09uU2VhcmNoID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKGV2ZW50Lm9wdGlvbikgJiYgIXRoaXMuYXV0b0NvbXBsZXRlKSB7XHJcbiAgICAgICAgICBldmVudC5vcHRpb24uc2VsZWN0ZWQgPSB0aGlzLm11bHRpcGxlID8gZXZlbnQuY2hlY2tlZCA6IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgJiYgdGhpcy5mb3JtQ29udHJvbC52YWx1ZSAhPT0gZXZlbnQua2V5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoZXZlbnQua2V5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMudmFsdWUgPSBldmVudC52YWx1ZTtcclxuICAgICAgICAgIHRoaXMuc2hvd09wdGlvbnMudmFsdWUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCk7XHJcbiAgICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwID8gbnVsbCA6IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCkpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtQXJyYXlDb250cm9sLnJlc2V0KHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDAgPyBbXSA6IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IHRoaXMuaXRlbXMuZmluZChpdGVtID0+IGl0ZW1bdGhpcy5pZGVudGlmaWVyXSA9PT0gb3B0aW9uLnZhbHVlKSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDAgPyAnJyA6IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi5vcHRpb25WYWx1ZT8ubmF0aXZlRWxlbWVudC5pbm5lclRleHQgfHwgJycpLmpvaW4oJywgJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVTZWxlY3RlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZSk7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShudWxsKTtcclxuICAgIH1cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wpKSB7XHJcbiAgICAgIHRoaXMuZm9ybUFycmF5Q29udHJvbC5yZXNldChbXSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZhbHVlID0gJyc7XHJcbiAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgdGhpcy5zaG93T3B0aW9ucy52YWx1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoaXBDbG9zZWQob3B0aW9uOiBNcmRTZWxlY3RPcHRpb25Db21wb25lbnQpOiB2b2lkIHtcclxuICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgbGV0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCk7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwID8gbnVsbCA6IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCkpIHtcclxuICAgICAgdGhpcy5mb3JtQXJyYXlDb250cm9sLnJlc2V0KHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDAgPyBbXSA6IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IHRoaXMuaXRlbXMuZmluZChpdGVtID0+IGl0ZW1bdGhpcy5pZGVudGlmaWVyXSA9PT0gb3B0aW9uLnZhbHVlKSkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy52YWx1ZSA9IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDAgPyAnJyA6IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi5vcHRpb25WYWx1ZT8ubmF0aXZlRWxlbWVudC5pbm5lclRleHQgfHwgJycpLmpvaW4oJywgJyk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXV0b0NvbXBsZXRlSW5wdXQoZXZlbnQ6IElucHV0RXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy52YWx1ZSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICBvcHRpb24uZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICBpZiAoKG9wdGlvbi5vcHRpb25WYWx1ZT8ubmF0aXZlRWxlbWVudC5pbm5lclRleHQgfHwgJycpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICBvcHRpb24uZmlsdGVyZWQgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvcHRpb24uZmlsdGVyZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGZpbHRlcmVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+ICFvcHRpb24uZmlsdGVyZWQpO1xyXG4gICAgICBpZiAoZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmaWx0ZXJlZE9wdGlvbnNbMF0uZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zaG93Tm9PcHRpb25zT25TZWFyY2ggPSBmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VhcmNoSW5wdXQoZXZlbnQ6IElucHV0RXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VhcmNoVGV4dCA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICBvcHRpb24uZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICBpZiAoKG9wdGlvbi5vcHRpb25WYWx1ZT8ubmF0aXZlRWxlbWVudC5pbm5lclRleHQgfHwgJycpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNlYXJjaFRleHQudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgIG9wdGlvbi5maWx0ZXJlZCA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9wdGlvbi5maWx0ZXJlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMuc2VhcmNoVGV4dC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBmaWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiAhb3B0aW9uLmZpbHRlcmVkKTtcclxuICAgICAgaWYgKGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZmlsdGVyZWRPcHRpb25zWzBdLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2hvd05vT3B0aW9uc09uU2VhcmNoID0gZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgbGV0IGZpbHRlcmVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+ICFvcHRpb24uZmlsdGVyZWQpO1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBmaWx0ZXJlZE9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLmZvY3VzZWQpO1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQoc2VsZWN0ZWRPcHRpb24pKSB7XHJcbiAgICAgICAgc2VsZWN0ZWRPcHRpb24ub3B0aW9uQ2xpY2soKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgbGV0IGZvY3VzZWRPcHRpb24gPSBmaWx0ZXJlZE9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLmZvY3VzZWQpO1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQoZm9jdXNlZE9wdGlvbikpIHtcclxuICAgICAgICBsZXQgZm9jdXNlZE9wdGlvbkluZGV4ID0gZmlsdGVyZWRPcHRpb25zLmZpbmRJbmRleCgob3B0aW9uKSA9PiBvcHRpb24uZm9jdXNlZCk7XHJcbiAgICAgICAgaWYgKGZvY3VzZWRPcHRpb25JbmRleCA+IC0xICYmIGZvY3VzZWRPcHRpb25JbmRleCA8IGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggLSAyKSB7XHJcbiAgICAgICAgICBmb2N1c2VkT3B0aW9uLmZvY3VzZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGZpbHRlcmVkT3B0aW9uc1tmb2N1c2VkT3B0aW9uSW5kZXggKyAxXS5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsdGVyZWRPcHRpb25zWzBdLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgIGxldCBmb2N1c2VkT3B0aW9uID0gZmlsdGVyZWRPcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi5mb2N1c2VkKTtcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKGZvY3VzZWRPcHRpb24pKSB7XHJcbiAgICAgICAgbGV0IGZvY3VzZWRPcHRpb25JbmRleCA9IGZpbHRlcmVkT3B0aW9ucy5maW5kSW5kZXgoKG9wdGlvbikgPT4gb3B0aW9uLmZvY3VzZWQpO1xyXG4gICAgICAgIGlmIChmb2N1c2VkT3B0aW9uSW5kZXggPiAwKSB7XHJcbiAgICAgICAgICBmb2N1c2VkT3B0aW9uLmZvY3VzZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGZpbHRlcmVkT3B0aW9uc1tmb2N1c2VkT3B0aW9uSW5kZXggLSAxXS5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsdGVyZWRPcHRpb25zW2ZpbHRlcmVkT3B0aW9ucy5sZW5ndGggLSAxXS5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB0cmlnZ2VyQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIGlmICgoIVV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpIHx8ICF0aGlzLmZvcm1Db250cm9sLmRpc2FibGVkKSAmJiAoIVV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCkgfHwgIXRoaXMuZm9ybUFycmF5Q29udHJvbC5jb250cm9sLmRpc2FibGVkKSkge1xyXG4gICAgICB0aGlzLnRvdWNoZWQuZW1pdCgpO1xyXG4gICAgICB0aGlzLmZvY3VzZWQuZW1pdCgpO1xyXG4gICAgICB0aGlzLnNob3dPcHRpb25zLnZhbHVlID0gdHJ1ZTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1yZC1zZWxlY3Qtb3B0aW9ucy1vdmVybGF5IC5tcmQtc2VsZWN0LW9wdGlvbnMtc2Nyb2xsIC5tcmQtc2VsZWN0LW9wdGlvbi1pdGVtLnNlbGVjdGVkJyk7XHJcbiAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHNlbGVjdGVkT3B0aW9uKSkge1xyXG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb24uc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICduZWFyZXN0JywgaW5saW5lOiAnbmVhcmVzdCd9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDEwKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHNlbGVjdGVkT3B0aW9ucygpOiBNcmRTZWxlY3RPcHRpb25Db21wb25lbnRbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgc2hvd05vT3B0aW9uc09uU2VhcmNoKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93Tm9PcHRpb25zT25TZWFyY2ggPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzaG93Tm9PcHRpb25zT25TZWFyY2goKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd05vT3B0aW9uc09uU2VhcmNoO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzZWQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuYmx1cnJlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG9wdGlvbnNNaW5XaWR0aCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0Q29udGFpbmVyID8gYCR7dGhpcy5zZWxlY3RDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aH1weGAgOiAnYXV0byc7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgI3NlbGVjdENvbnRhaW5lciBjbGFzcz1cIm1yZC1zZWxlY3QtY29udGFpbmVyXCIgW25nQ2xhc3NdPVwieydtcmQtc2VsZWN0LWRpc2FibGVkJzogZm9ybUNvbnRyb2w/LmRpc2FibGVkfVwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJhdXRvQ29tcGxldGVcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgKGNsaWNrKT1cInRyaWdnZXJDbGlja2VkKClcIlxyXG4gICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgIChpbnB1dCk9XCJhdXRvQ29tcGxldGVJbnB1dCgkZXZlbnQpXCJcclxuICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcclxuICA+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhYXV0b0NvbXBsZXRlXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY3VzdG9tVHJpZ2dlclwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtcmQtc2VsZWN0LWN1c3RvbS10cmlnZ2VyXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWN1c3RvbVRyaWdnZXJcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjaGlwU2VsZWN0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1yZC1zZWxlY3QtdHJpZ2dlclwiIChjbGljayk9XCJ0cmlnZ2VyQ2xpY2tlZCgpXCI+XHJcbiAgICAgICAgICA8c3BhbiBbbXJkVG9vbFRpcF09XCJ2YWx1ZVwiIHNob3dJZlRydW5jYXRlZD57e3ZhbHVlfX08L3NwYW4+XHJcbiAgICAgICAgICA8c3ZnIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB3aWR0aD1cIjE0cHhcIiBoZWlnaHQ9XCIxNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+XHJcbiAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlPVwiI0NDQ0NDQ1wiIHN0cm9rZS13aWR0aD1cIjAuMDQ4XCI+PC9nPlxyXG4gICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj48cGF0aCBkPVwiTTExLjE3OCAxOS41NjlhLjk5OC45OTggMCAwIDAgMS42NDQgMGw5LTEzQS45OTkuOTk5IDAgMCAwIDIxIDVIM2ExLjAwMiAxLjAwMiAwIDAgMC0uODIyIDEuNTY5bDkgMTN6XCI+PC9wYXRoPjwvZz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNoaXBTZWxlY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXJkLWNoaXAtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibXJkLWNoaXAtdmFsdWVzXCIgKm5nSWY9XCJjaGlwU2VsZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzZWxlY3RlZE9wdGlvbnMgJiYgc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgICAgICA8bXJkLWNoaXAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBzZWxlY3RlZE9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgKGNsb3NlKT1cImNoaXBDbG9zZWQob3B0aW9uKVwiXHJcbiAgICAgICAgICAgICAgICBbcHJlZml4SWNvbl09XCJjaGlwUHJlZml4SWNvblwiXHJcbiAgICAgICAgICAgICAgICBbc3VmZml4SWNvbl09XCJjaGlwU3VmZml4SWNvblwiXHJcbiAgICAgICAgICAgICAgICA+e3tvcHRpb24ub3B0aW9uTGFiZWx9fTwvbXJkLWNoaXA+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXJkLXNlbGVjdC10cmlnZ2VyLWNoaXBcIiAoY2xpY2spPVwidHJpZ2dlckNsaWNrZWQoKVwiPlxyXG4gICAgICAgICAgICAgIDxzdmcgZmlsbD1cImN1cnJlbnRDb2xvclwiIHdpZHRoPVwiMTRweFwiIGhlaWdodD1cIjE0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+XHJcbiAgICAgICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZT1cIiNDQ0NDQ0NcIiBzdHJva2Utd2lkdGg9XCIwLjA0OFwiPjwvZz5cclxuICAgICAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPjxwYXRoIGQ9XCJNMTEuMTc4IDE5LjU2OWEuOTk4Ljk5OCAwIDAgMCAxLjY0NCAwbDktMTNBLjk5OS45OTkgMCAwIDAgMjEgNUgzYTEuMDAyIDEuMDAyIDAgMCAwLS44MjIgMS41NjlsOSAxM3pcIj48L3BhdGg+PC9nPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuXHJcbjxuZy10ZW1wbGF0ZVxyXG4gIGNkay1jb25uZWN0ZWQtb3ZlcmxheVxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5SGFzQmFja2Ryb3BdPVwidHJ1ZVwiXHJcbiAgY2RrQ29ubmVjdGVkT3ZlcmxheUJhY2tkcm9wQ2xhc3M9XCJjZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcFwiXHJcbiAgY2RrQ29ubmVjdGVkT3ZlcmxheVBhbmVsQ2xhc3M9XCJtcmQtc2VsZWN0LW9wdGlvbnMtb3ZlcmxheVwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwic2VsZWN0Q29udGFpbmVyXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwic2hvd09wdGlvbnMudmFsdWVcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cIl9wb3NpdGlvbnNcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5TWluV2lkdGhdPVwib3B0aW9uc01pbldpZHRoXCJcclxuICAoYmFja2Ryb3BDbGljayk9XCJzaG93T3B0aW9ucy52YWx1ZSA9IGZhbHNlXCJcclxuPlxyXG4gIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBiZy13aGl0ZSByb3VuZGVkLW1kIHNoYWRvdy1tZFwiPlxyXG4gICAgPG1yZC1zZWxlY3Qtb3B0aW9uICpuZ0lmPVwic2VhcmNoU2VsZWN0aW9uXCIgY2xhc3M9XCJtcmQtc2VsZWN0LXNlYXJjaC1vcHRpb24gYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTIwMFwiIG5vQ2hlY2tib3g+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU3VjaGVcIlxyXG4gICAgICAgIFt2YWx1ZV09XCJzZWFyY2hUZXh0XCJcclxuICAgICAgICAoaW5wdXQpPVwic2VhcmNoSW5wdXQoJGV2ZW50KVwiXHJcbiAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXHJcbiAgICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxyXG4gICAgICA+XHJcbiAgICA8L21yZC1zZWxlY3Qtb3B0aW9uPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1yZC1zZWxlY3Qtb3B0aW9ucy1zY3JvbGwgbWF4LWgtNjAgb3ZlcmZsb3cteS1hdXRvIHctZnVsbCBtaW4tdy1maXQgXCI+XHJcbiAgICAgIDxtcmQtc2VsZWN0LW9wdGlvbiAqbmdJZj1cIm51bGxhYmxlXCIgbm9DaGVja2JveCBbdmFsdWVdPVwibnVsbFwiIChvcHRpb25DbGlja2VkKT1cInJlbW92ZVNlbGVjdGVkKClcIj57e211bHRpcGxlID8gJ0F1c3dhaGwgbMO2c2NoZW4nIDogJy0nfX08L21yZC1zZWxlY3Qtb3B0aW9uPlxyXG4gICAgICA8bXJkLXNlbGVjdC1vcHRpb24gKm5nSWY9XCJzZWFyY2hTZWxlY3Rpb24gJiYgc2VhcmNoVGV4dC5sZW5ndGggPiAwICYmIHNob3dOb09wdGlvbnNPblNlYXJjaFwiIG5vQ2hlY2tib3g+S2VpbmUgRWludHLDpGdlIGdlZnVuZGVuPC9tcmQtc2VsZWN0LW9wdGlvbj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXJkLXNlbGVjdC1vcHRpb25cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT4iXX0=