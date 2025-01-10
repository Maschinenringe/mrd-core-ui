import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';
import { BasePushStrategyObject, ObservableValue, SubscriptionHandler, Util } from 'mrd-core';
import { MrdSelectOptionComponent } from '../mrd-select-option/mrd-select-option.component';
import { Subject, defer, merge, startWith, switchMap } from 'rxjs';
import { MrdSelectCustomTriggerComponent } from '../mrd-select-custom-trigger/mrd-select-custom-trigger.component';
import * as i0 from "@angular/core";
function MrdSelectComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 4);
    i0.ɵɵlistener("click", function MrdSelectComponent_ng_container_1_Template_input_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.triggerClicked()); })("input", function MrdSelectComponent_ng_container_1_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.autoCompleteInput($event)); })("keydown", function MrdSelectComponent_ng_container_1_Template_input_keydown_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.onKeyDown($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r0.value);
} }
function MrdSelectComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1);
    i0.ɵɵelementContainerEnd();
} }
function MrdSelectComponent_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵlistener("click", function MrdSelectComponent_ng_container_2_ng_container_2_ng_container_1_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r11.triggerClicked()); });
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
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("mrdToolTip", ctx_r9.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r9.value);
} }
function MrdSelectComponent_ng_container_2_ng_container_2_ng_container_2_div_2_ng_container_1_mrd_chip_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-chip", 17);
    i0.ɵɵlistener("close", function MrdSelectComponent_ng_container_2_ng_container_2_ng_container_2_div_2_ng_container_1_mrd_chip_1_Template_mrd_chip_close_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r18); const option_r16 = restoredCtx.$implicit; const ctx_r17 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r17.chipClosed(option_r16)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r16 = ctx.$implicit;
    const ctx_r15 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("prefixIcon", ctx_r15.chipPrefixIcon)("suffixIcon", ctx_r15.chipSuffixIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r16.optionLabel);
} }
function MrdSelectComponent_ng_container_2_ng_container_2_ng_container_2_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_container_2_ng_container_2_ng_container_2_div_2_ng_container_1_mrd_chip_1_Template, 2, 3, "mrd-chip", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r14.selectedOptions);
} }
function MrdSelectComponent_ng_container_2_ng_container_2_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_container_2_ng_container_2_ng_container_2_div_2_ng_container_1_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementStart(2, "div", 15);
    i0.ɵɵlistener("click", function MrdSelectComponent_ng_container_2_ng_container_2_ng_container_2_div_2_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r19.triggerClicked()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 7);
    i0.ɵɵelement(4, "g", 8)(5, "g", 9);
    i0.ɵɵelementStart(6, "g", 10);
    i0.ɵɵelement(7, "path", 11);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r13.value && ctx_r13.value !== "");
} }
function MrdSelectComponent_ng_container_2_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵtemplate(2, MrdSelectComponent_ng_container_2_ng_container_2_ng_container_2_div_2_Template, 8, 1, "div", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r10.chipSelection);
} }
function MrdSelectComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_container_2_ng_container_2_ng_container_1_Template, 9, 2, "ng-container", 1);
    i0.ɵɵtemplate(2, MrdSelectComponent_ng_container_2_ng_container_2_ng_container_2_Template, 3, 1, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r8.chipSelection);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.chipSelection);
} }
function MrdSelectComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 1);
    i0.ɵɵtemplate(2, MrdSelectComponent_ng_container_2_ng_container_2_Template, 3, 2, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.customTrigger);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.customTrigger);
} }
function MrdSelectComponent_div_4_mrd_select_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-select-option", 23)(1, "input", 24);
    i0.ɵɵlistener("input", function MrdSelectComponent_div_4_mrd_select_option_1_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r24.searchInput($event)); })("click", function MrdSelectComponent_div_4_mrd_select_option_1_Template_input_click_1_listener($event) { return $event.stopPropagation(); })("keydown", function MrdSelectComponent_div_4_mrd_select_option_1_Template_input_keydown_1_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r27 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r27.onKeyDown($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r21.searchText);
} }
function MrdSelectComponent_div_4_mrd_select_option_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-select-option", 25);
    i0.ɵɵlistener("optionClicked", function MrdSelectComponent_div_4_mrd_select_option_3_Template_mrd_select_option_optionClicked_0_listener() { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r28.removeSelected()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r22.multiple ? "Auswahl l\u00F6schen" : "-");
} }
function MrdSelectComponent_div_4_mrd_select_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mrd-select-option", 26);
    i0.ɵɵtext(1, "Keine Eintr\u00E4ge gefunden");
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0, a1, a2) { return { "width-exceeded": a0, "height-exceeded": a1, "options-visible": a2 }; };
function MrdSelectComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, MrdSelectComponent_div_4_mrd_select_option_1_Template, 2, 1, "mrd-select-option", 19);
    i0.ɵɵelementStart(2, "div", 20);
    i0.ɵɵtemplate(3, MrdSelectComponent_div_4_mrd_select_option_3_Template, 2, 2, "mrd-select-option", 21);
    i0.ɵɵtemplate(4, MrdSelectComponent_div_4_mrd_select_option_4_Template, 2, 0, "mrd-select-option", 22);
    i0.ɵɵprojection(5, 1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(4, _c0, ctx_r2.optionsWidthExceeded, ctx_r2.optionsHeightExceeded, ctx_r2.optionsVisible));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.searchSelection);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.nullable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.searchSelection && ctx_r2.searchText.length > 0 && ctx_r2.showNoOptionsOnSearch);
} }
const _c1 = [[["mrd-select-custom-trigger"]], [["mrd-select-option"]]];
const _c2 = function (a0) { return { "mrd-select-disabled": a0 }; };
const _c3 = ["mrd-select-custom-trigger", "mrd-select-option"];
export class MrdSelectComponent extends BasePushStrategyObject {
    elementRef;
    cdr;
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
        this.watch(this.optionSelectionChanges, new SubscriptionHandler((event) => {
            debugger;
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
                    if (Util.isDefined(this.formControl)) {
                        let selectedOptions = this.options.filter(option => option.selected);
                        this.formControl.setValue(selectedOptions.map(option => option.value));
                    }
                    if (Util.isDefined(this.formArrayControl)) {
                        let selectedOptions = this.options.filter(option => option.selected);
                        this.formArrayControl.reset(selectedOptions.map(option => this.items.find(item => item[this.identifier] === option.value)));
                    }
                    this.value = this.options.filter(option => option.selected).map(option => option.optionLabel).join(', ');
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
        if (Util.isDefined(this.formControl)) {
            this.formControl.setValue(this.options.filter(option => option.selected).map(option => option.value));
        }
        if (Util.isDefined(this.formArrayControl)) {
            this.formArrayControl.reset(this.options.filter(option => option.selected).map(option => this.items.find(item => item[this.identifier] === option.value)));
        }
        this.cdr.detectChanges();
    }
    autoCompleteInput(event) {
        if (Util.isDefined(this.formControl)) {
            this.formControl.setValue(event.target.value);
        }
        this.value = event.target.value;
        this.options.forEach(option => {
            option.focused = false;
            if (option.optionLabel.toLowerCase().indexOf(this.value.toLowerCase()) > -1) {
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
            if (option.optionLabel.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1) {
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
            setTimeout(() => this.hideOnClickOutside(), 10);
            setTimeout(() => {
                let selectedOption = this.elementRef.nativeElement.querySelector('.mrd-select-options-scroll .mrd-select-option-item.selected');
                if (Util.isDefined(selectedOption)) {
                    selectedOption.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
                }
            }, 10);
            this.cdr.markForCheck();
        }
    }
    hideOnClickOutside() {
        let optionsContainer = this.elementRef.nativeElement.querySelector('.mrd-select-container');
        if (Util.isDefined(optionsContainer)) {
            const outsideClickListener = (e) => {
                if (!optionsContainer.contains(e.target)) {
                    if (this.showOptions.value) {
                        this.blurred.emit();
                        this.showOptions.value = false;
                        this.cdr.markForCheck();
                    }
                    removeClickListener();
                }
            };
            const removeClickListener = () => {
                document.removeEventListener('click', outsideClickListener);
            };
            document.addEventListener("click", outsideClickListener);
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
    /** @nocollapse */ static ɵfac = function MrdSelectComponent_Factory(t) { return new (t || MrdSelectComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdSelectComponent, selectors: [["mrd-select"]], contentQueries: function MrdSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, MrdSelectCustomTriggerComponent, 5);
            i0.ɵɵcontentQuery(dirIndex, MrdSelectOptionComponent, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.customTrigger = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.options = _t);
        } }, inputs: { formControl: ["mrdFormControl", "formControl"], formArrayControl: ["mrdFormArray", "formArrayControl"], identifier: "identifier", items: "items", autoComplete: ["autoComplete", "autoComplete", booleanAttribute], searchSelection: ["searchSelection", "searchSelection", booleanAttribute], chipSelection: ["chipSelection", "chipSelection", booleanAttribute], nullable: ["nullable", "nullable", booleanAttribute], multiple: ["multiple", "multiple", booleanAttribute], chipPrefixIcon: "chipPrefixIcon", chipSuffixIcon: "chipSuffixIcon" }, outputs: { touched: "touched", focused: "focused", blurred: "blurred" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c3, decls: 5, vars: 6, consts: [[1, "mrd-select-container", 3, "ngClass"], [4, "ngIf"], [1, "mrd-select-options-placing"], ["class", "mrd-select-options-container", 3, "ngClass", 4, "ngIf"], [3, "value", "click", "input", "keydown"], [1, "mrd-select-trigger", 3, "click"], ["showIfTruncated", "", 3, "mrdToolTip"], ["fill", "currentColor", "width", "14px", "height", "14px", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke", "#CCCCCC", "stroke-width", "0.048"], ["id", "SVGRepo_iconCarrier"], ["d", "M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"], [1, "mrd-chip-container"], ["class", "mrd-chip-values", 4, "ngIf"], [1, "mrd-chip-values"], [1, "mrd-select-trigger-chip", 3, "click"], [3, "prefixIcon", "suffixIcon", "close", 4, "ngFor", "ngForOf"], [3, "prefixIcon", "suffixIcon", "close"], [1, "mrd-select-options-container", 3, "ngClass"], ["class", "mrd-select-search-option", "noCheckbox", "", 4, "ngIf"], [1, "mrd-select-options-scroll"], ["noCheckbox", "", 3, "value", "optionClicked", 4, "ngIf"], ["noCheckbox", "", 4, "ngIf"], ["noCheckbox", "", 1, "mrd-select-search-option"], ["placeholder", "Suche", 3, "value", "input", "click", "keydown"], ["noCheckbox", "", 3, "value", "optionClicked"], ["noCheckbox", ""]], template: function MrdSelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, MrdSelectComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            i0.ɵɵtemplate(2, MrdSelectComponent_ng_container_2_Template, 3, 2, "ng-container", 1);
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵtemplate(4, MrdSelectComponent_div_4_Template, 6, 8, "div", 3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c2, ctx.formControl == null ? null : ctx.formControl.disabled));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.autoComplete);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.autoComplete);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.showOptions.value);
        } }, styles: ["[_nghost-%COMP%]{width:100%}input[_ngcontent-%COMP%]{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-options-placing[_ngcontent-%COMP%]{position:relative;height:0}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-options-placing[_ngcontent-%COMP%]   .mrd-select-options-container[_ngcontent-%COMP%]{position:absolute;top:.5em;left:0;background-color:#fff;width:100%;min-width:-moz-fit-content;min-width:fit-content;border-bottom-right-radius:8px;border-bottom-left-radius:8px;z-index:1000;box-shadow:0 11px 15px #00000040;overflow:hidden;visibility:hidden}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-options-placing[_ngcontent-%COMP%]   .mrd-select-options-container.width-exceeded[_ngcontent-%COMP%]{right:0;left:unset}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-options-placing[_ngcontent-%COMP%]   .mrd-select-options-container.height-exceeded[_ngcontent-%COMP%]{top:unset;bottom:2.8em;border-radius:8px 8px 0 0}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-options-placing[_ngcontent-%COMP%]   .mrd-select-options-container.options-visible[_ngcontent-%COMP%]{visibility:visible}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-options-placing[_ngcontent-%COMP%]   .mrd-select-options-container[_ngcontent-%COMP%]   .mrd-select-search-option[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.2196078431)}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-options-placing[_ngcontent-%COMP%]   .mrd-select-options-container[_ngcontent-%COMP%]   .mrd-select-options-scroll[_ngcontent-%COMP%]{overflow-y:auto;max-height:15em}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-trigger[_ngcontent-%COMP%]{display:flex;height:1.5em;width:100%;cursor:pointer;padding-left:2px;flex-direction:row;align-items:center}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-trigger[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-trigger[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{margin-right:8px}.mrd-select-container[_ngcontent-%COMP%]   .mrd-chip-container[_ngcontent-%COMP%]{margin-top:4px}.mrd-select-container[_ngcontent-%COMP%]   .mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-values[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:8px}.mrd-select-container[_ngcontent-%COMP%]   .mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-values[_ngcontent-%COMP%]   .mrd-select-trigger-chip[_ngcontent-%COMP%]{display:flex;height:1.5em;min-width:30%;max-width:100%;flex:1 1 30%;cursor:pointer;padding-left:2px;flex-direction:row;align-items:center;justify-content:flex-end}.mrd-select-container[_ngcontent-%COMP%]   .mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-values[_ngcontent-%COMP%]   .mrd-select-trigger-chip[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{margin-right:8px}.mrd-select-container.mrd-select-disabled[_ngcontent-%COMP%]   .mrd-select-trigger[_ngcontent-%COMP%]{color:#afa6a6;cursor:inherit}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdSelectComponent, [{
        type: Component,
        args: [{ selector: 'mrd-select', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-select-container\" [ngClass]=\"{'mrd-select-disabled': formControl?.disabled}\">\r\n  <ng-container *ngIf=\"autoComplete\">\r\n    <input\r\n    (click)=\"triggerClicked()\"\r\n    [value]=\"value\"\r\n    (input)=\"autoCompleteInput($event)\"\r\n    (keydown)=\"onKeyDown($event)\"\r\n  >\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"!autoComplete\">\r\n    <ng-container *ngIf=\"customTrigger\">\r\n      <ng-content select=\"mrd-select-custom-trigger\"></ng-content>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!customTrigger\">\r\n      <ng-container *ngIf=\"!chipSelection\">\r\n        <div class=\"mrd-select-trigger\" (click)=\"triggerClicked()\">\r\n          <span [mrdToolTip]=\"value\" showIfTruncated>{{value}}</span>\r\n          <svg fill=\"currentColor\" width=\"14px\" height=\"14px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\r\n            <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#CCCCCC\" stroke-width=\"0.048\"></g>\r\n            <g id=\"SVGRepo_iconCarrier\"><path d=\"M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z\"></path></g>\r\n          </svg>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"chipSelection\">\r\n        <div class=\"mrd-chip-container\">\r\n          <div class=\"mrd-chip-values\" *ngIf=\"chipSelection\">\r\n            <ng-container *ngIf=\"value && value !== ''\">\r\n              <mrd-chip *ngFor=\"let option of selectedOptions\"\r\n                (close)=\"chipClosed(option)\"\r\n                [prefixIcon]=\"chipPrefixIcon\"\r\n                [suffixIcon]=\"chipSuffixIcon\"\r\n                >{{option.optionLabel}}</mrd-chip>\r\n            </ng-container>\r\n            <div class=\"mrd-select-trigger-chip\" (click)=\"triggerClicked()\">\r\n              <svg fill=\"currentColor\" width=\"14px\" height=\"14px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\r\n                <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#CCCCCC\" stroke-width=\"0.048\"></g>\r\n                <g id=\"SVGRepo_iconCarrier\"><path d=\"M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z\"></path></g>\r\n              </svg>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n\r\n  <div class=\"mrd-select-options-placing\">\r\n    <div class=\"mrd-select-options-container\" *ngIf=\"showOptions.value\"\r\n    [ngClass]=\"{'width-exceeded': optionsWidthExceeded, 'height-exceeded': optionsHeightExceeded, 'options-visible': optionsVisible}\">\r\n      <mrd-select-option *ngIf=\"searchSelection\" class=\"mrd-select-search-option\" noCheckbox>\r\n        <input\r\n          placeholder=\"Suche\"\r\n          [value]=\"searchText\"\r\n          (input)=\"searchInput($event)\"\r\n          (click)=\"$event.stopPropagation()\"\r\n          (keydown)=\"onKeyDown($event)\"\r\n        >\r\n      </mrd-select-option>\r\n      <div class=\"mrd-select-options-scroll\">\r\n        <mrd-select-option *ngIf=\"nullable\" noCheckbox [value]=\"null\" (optionClicked)=\"removeSelected()\">{{multiple ? 'Auswahl l\u00F6schen' : '-'}}</mrd-select-option>\r\n        <mrd-select-option *ngIf=\"searchSelection && searchText.length > 0 && showNoOptionsOnSearch\" noCheckbox>Keine Eintr\u00E4ge gefunden</mrd-select-option>\r\n        <ng-content select=\"mrd-select-option\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [":host{width:100%}input{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}.mrd-select-container .mrd-select-options-placing{position:relative;height:0}.mrd-select-container .mrd-select-options-placing .mrd-select-options-container{position:absolute;top:.5em;left:0;background-color:#fff;width:100%;min-width:-moz-fit-content;min-width:fit-content;border-bottom-right-radius:8px;border-bottom-left-radius:8px;z-index:1000;box-shadow:0 11px 15px #00000040;overflow:hidden;visibility:hidden}.mrd-select-container .mrd-select-options-placing .mrd-select-options-container.width-exceeded{right:0;left:unset}.mrd-select-container .mrd-select-options-placing .mrd-select-options-container.height-exceeded{top:unset;bottom:2.8em;border-radius:8px 8px 0 0}.mrd-select-container .mrd-select-options-placing .mrd-select-options-container.options-visible{visibility:visible}.mrd-select-container .mrd-select-options-placing .mrd-select-options-container .mrd-select-search-option{border-bottom:1px solid rgba(0,0,0,.2196078431)}.mrd-select-container .mrd-select-options-placing .mrd-select-options-container .mrd-select-options-scroll{overflow-y:auto;max-height:15em}.mrd-select-container .mrd-select-trigger{display:flex;height:1.5em;width:100%;cursor:pointer;padding-left:2px;flex-direction:row;align-items:center}.mrd-select-container .mrd-select-trigger>span{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-select-container .mrd-select-trigger>svg{margin-right:8px}.mrd-select-container .mrd-chip-container{margin-top:4px}.mrd-select-container .mrd-chip-container .mrd-chip-values{display:flex;flex-direction:row;flex-wrap:wrap;gap:8px}.mrd-select-container .mrd-chip-container .mrd-chip-values .mrd-select-trigger-chip{display:flex;height:1.5em;min-width:30%;max-width:100%;flex:1 1 30%;cursor:pointer;padding-left:2px;flex-direction:row;align-items:center;justify-content:flex-end}.mrd-select-container .mrd-chip-container .mrd-chip-values .mrd-select-trigger-chip>svg{margin-right:8px}.mrd-select-container.mrd-select-disabled .mrd-select-trigger{color:#afa6a6;cursor:inherit}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { options: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWZvcm0tZmllbGQvY29tcG9uZW50cy9tcmQtc2VsZWN0L21yZC1zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLXNlbGVjdC9tcmQtc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBbUMsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BPLE9BQU8sRUFBOEMsc0JBQXNCLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMxSSxPQUFPLEVBQXlCLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDbkgsT0FBTyxFQUFjLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0UsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7Ozs7SUNIakgsNkJBQW1DO0lBQ2pDLGdDQUtEO0lBSkMsdUtBQVMsZUFBQSx1QkFBZ0IsQ0FBQSxJQUFDLGdLQUVqQixlQUFBLGdDQUF5QixDQUFBLElBRlIsb0tBR2YsZUFBQSx3QkFBaUIsQ0FBQSxJQUhGO0lBRDFCLGlCQUtEO0lBQ0QsMEJBQWU7OztJQUpiLGVBQWU7SUFBZixvQ0FBZTs7O0lBT2YsNkJBQW9DO0lBQ2xDLGtCQUE0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IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFF1ZXJ5TGlzdCwgYm9vbGVhbkF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY2Nlc3NhYmxlRm9ybUFycmF5LCBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wsIEJhc2VQdXNoU3RyYXRlZ3lPYmplY3QsIE9ic2VydmFibGVWYWx1ZSwgU3Vic2NyaXB0aW9uSGFuZGxlciwgVXRpbCB9IGZyb20gJ21yZC1jb3JlJztcclxuaW1wb3J0IHsgTXJkU2VsZWN0T3B0aW9uQ2hhbmdlLCBNcmRTZWxlY3RPcHRpb25Db21wb25lbnQgfSBmcm9tICcuLi9tcmQtc2VsZWN0LW9wdGlvbi9tcmQtc2VsZWN0LW9wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBkZWZlciwgbWVyZ2UsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1yZFNlbGVjdEN1c3RvbVRyaWdnZXJDb21wb25lbnQgfSBmcm9tICcuLi9tcmQtc2VsZWN0LWN1c3RvbS10cmlnZ2VyL21yZC1zZWxlY3QtY3VzdG9tLXRyaWdnZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC1zZWxlY3QuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgQmFzZVB1c2hTdHJhdGVneU9iamVjdCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oTXJkU2VsZWN0T3B0aW9uQ29tcG9uZW50KSBvcHRpb25zOiBRdWVyeUxpc3Q8TXJkU2VsZWN0T3B0aW9uQ29tcG9uZW50PjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChNcmRTZWxlY3RDdXN0b21UcmlnZ2VyQ29tcG9uZW50KSBjdXN0b21UcmlnZ2VyOiBNcmRTZWxlY3RDdXN0b21UcmlnZ2VyQ29tcG9uZW50O1xyXG5cclxuICBwcml2YXRlIF9pbml0aWFsaXplZCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcmVhZG9ubHkgb3B0aW9uU2VsZWN0aW9uQ2hhbmdlczogT2JzZXJ2YWJsZTxhbnk+ID0gZGVmZXIoKCkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHJcbiAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gb3B0aW9ucy5jaGFuZ2VzLnBpcGUoXHJcbiAgICAgICAgc3RhcnRXaXRoKG9wdGlvbnMpLFxyXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiBtZXJnZSguLi5vcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLm9wdGlvbkNsaWNrZWQpKSksXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2luaXRpYWxpemVkLnBpcGUoc3dpdGNoTWFwKCgpID0+IHRoaXMub3B0aW9uU2VsZWN0aW9uQ2hhbmdlcykpO1xyXG4gIH0pO1xyXG5cclxuICBASW5wdXQoJ21yZEZvcm1Db250cm9sJykgZm9ybUNvbnRyb2w6IEFjY2Vzc2FibGVGb3JtQ29udHJvbDtcclxuICBASW5wdXQoJ21yZEZvcm1BcnJheScpIGZvcm1BcnJheUNvbnRyb2w6IEFjY2Vzc2FibGVGb3JtQXJyYXk8YW55PjtcclxuICBASW5wdXQoKSBwdWJsaWMgaWRlbnRpZmllcjogc3RyaW5nID0gJ2lkJztcclxuICBASW5wdXQoKSBwdWJsaWMgaXRlbXM6IGFueVtdID0gW107XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBhdXRvQ29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHNlYXJjaFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgY2hpcFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgbnVsbGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pXHJcbiAgZ2V0IG11bHRpcGxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xyXG4gIH1cclxuICBzZXQgbXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX211bHRpcGxlID0gdmFsdWU7XHJcbiAgfVxyXG4gIHByaXZhdGUgX211bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBjaGlwUHJlZml4SWNvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjaGlwU3VmZml4SWNvbjogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgdG91Y2hlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBmb2N1c2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIGJsdXJyZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgcHVibGljIHNob3dPcHRpb25zOiBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj4gPSBuZXcgT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBwdWJsaWMgb3B0aW9uc1Zpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgX3Nob3dOb09wdGlvbnNPblNlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgdmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIHB1YmxpYyBzZWFyY2hUZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgcHVibGljIG9wdGlvbnNXaWR0aEV4Y2VlZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIG9wdGlvbnNIZWlnaHRFeGNlZWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLndhdGNoKHRoaXMuc2hvd09wdGlvbnMuY2hhbmdlZCwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKHZhbHVlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgbGV0IG9wdGlvbnNDb250YWluZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubXJkLXNlbGVjdC1vcHRpb25zLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgbGV0IG9wdGlvbnNDb250YWluZXJSaWdodCA9IG9wdGlvbnNDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQ7XHJcbiAgICAgICAgICBsZXQgb3B0aW9uc0NvbnRhaW5lckJvdHRvbSA9IG9wdGlvbnNDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xyXG4gICAgICAgICAgbGV0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgICBpZiAob3B0aW9uc0NvbnRhaW5lclJpZ2h0ID4gd2luZG93V2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zV2lkdGhFeGNlZWRlZCA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNXaWR0aEV4Y2VlZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgICAgaWYgKG9wdGlvbnNDb250YWluZXJCb3R0b20gPiB3aW5kb3dIZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zSGVpZ2h0RXhjZWVkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zSGVpZ2h0RXhjZWVkZWQgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMub3B0aW9uc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zV2lkdGhFeGNlZWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3B0aW9uc0hlaWdodEV4Y2VlZGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLl9pbml0aWFsaXplZC5uZXh0KG51bGwpO1xyXG4gICAgdGhpcy5faW5pdGlhbGl6ZWQuY29tcGxldGUoKTtcclxuXHJcbiAgICB0aGlzLndhdGNoKHRoaXMub3B0aW9ucy5jaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKG51bGwpKSwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9yZXNldE9wdGlvbnMoKTtcclxuICAgIH0pKTtcclxuXHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5jdXN0b21UcmlnZ2VyKSkge1xyXG4gICAgICB0aGlzLndhdGNoKHRoaXMuY3VzdG9tVHJpZ2dlci50cmlnZ2VyQ2xpY2ssIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHtcclxuICAgICAgICB0aGlzLnRyaWdnZXJDbGlja2VkKCk7XHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXMga2FubiBudXIgZWluIEZvcm1Db250cm9sIG9kZXIgZWluIEZvcm1BcnJheUNvbnRyb2wgdmVyd2VuZGV0IHdlcmRlbi4nKTtcclxuICAgIH1cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sLnZhbHVlKSkge1xyXG4gICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSB0aGlzLmZvcm1Db250cm9sLnZhbHVlKT8ub3B0aW9uQ2xpY2soKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlIGFzIGFueVtdO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBvcHRpb24ub3B0aW9uQ2xpY2soKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCkgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sLnZhbHVlKSkge1xyXG4gICAgICBsZXQgc2VsZWN0ZWRWYWx1ZXMgPSAodGhpcy5mb3JtQXJyYXlDb250cm9sLnZhbHVlKS5tYXAodmFsdWUgPT4gdmFsdWVbdGhpcy5pZGVudGlmaWVyXSk7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWVzLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpIHtcclxuICAgICAgICAgIG9wdGlvbi5vcHRpb25DbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9yZXNldE9wdGlvbnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLndhdGNoKHRoaXMub3B0aW9uU2VsZWN0aW9uQ2hhbmdlcywgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKGV2ZW50OiBNcmRTZWxlY3RPcHRpb25DaGFuZ2UpID0+IHtkZWJ1Z2dlclxyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQoZXZlbnQpKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLmZvY3VzZWQgPSBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gJyc7XHJcbiAgICAgICAgdGhpcy5zaG93Tm9PcHRpb25zT25TZWFyY2ggPSBmYWxzZTtcclxuICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQoZXZlbnQub3B0aW9uKSAmJiAhdGhpcy5hdXRvQ29tcGxldGUpIHtcclxuICAgICAgICAgIGV2ZW50Lm9wdGlvbi5zZWxlY3RlZCA9IHRoaXMubXVsdGlwbGUgPyBldmVudC5jaGVja2VkIDogdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSAmJiB0aGlzLmZvcm1Db250cm9sLnZhbHVlICE9PSBldmVudC5rZXkpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShldmVudC5rZXkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy52YWx1ZSA9IGV2ZW50LnZhbHVlO1xyXG4gICAgICAgICAgdGhpcy5zaG93T3B0aW9ucy52YWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoc2VsZWN0ZWRPcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sKSkge1xyXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtQXJyYXlDb250cm9sLnJlc2V0KHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IHRoaXMuaXRlbXMuZmluZChpdGVtID0+IGl0ZW1bdGhpcy5pZGVudGlmaWVyXSA9PT0gb3B0aW9uLnZhbHVlKSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCkubWFwKG9wdGlvbiA9PiBvcHRpb24ub3B0aW9uTGFiZWwpLmpvaW4oJywgJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVTZWxlY3RlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZSk7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShudWxsKTtcclxuICAgIH1cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wpKSB7XHJcbiAgICAgIHRoaXMuZm9ybUFycmF5Q29udHJvbC5yZXNldChbXSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZhbHVlID0gJyc7XHJcbiAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgdGhpcy5zaG93T3B0aW9ucy52YWx1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoaXBDbG9zZWQob3B0aW9uOiBNcmRTZWxlY3RPcHRpb25Db21wb25lbnQpOiB2b2lkIHtcclxuICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKS5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCkpIHtcclxuICAgICAgdGhpcy5mb3JtQXJyYXlDb250cm9sLnJlc2V0KHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCkubWFwKG9wdGlvbiA9PiB0aGlzLml0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtW3RoaXMuaWRlbnRpZmllcl0gPT09IG9wdGlvbi52YWx1ZSkpKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhdXRvQ29tcGxldGVJbnB1dChldmVudDogSW5wdXRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZhbHVlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgIG9wdGlvbi5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgIGlmIChvcHRpb24ub3B0aW9uTGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMudmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgIG9wdGlvbi5maWx0ZXJlZCA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9wdGlvbi5maWx0ZXJlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgZmlsdGVyZWRPcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gIW9wdGlvbi5maWx0ZXJlZCk7XHJcbiAgICAgIGlmIChmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZpbHRlcmVkT3B0aW9uc1swXS5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNob3dOb09wdGlvbnNPblNlYXJjaCA9IGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWFyY2hJbnB1dChldmVudDogSW5wdXRFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgIG9wdGlvbi5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgIGlmIChvcHRpb24ub3B0aW9uTGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgb3B0aW9uLmZpbHRlcmVkID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3B0aW9uLmZpbHRlcmVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hUZXh0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGZpbHRlcmVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+ICFvcHRpb24uZmlsdGVyZWQpO1xyXG4gICAgICBpZiAoZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmaWx0ZXJlZE9wdGlvbnNbMF0uZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zaG93Tm9PcHRpb25zT25TZWFyY2ggPSBmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBsZXQgZmlsdGVyZWRPcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gIW9wdGlvbi5maWx0ZXJlZCk7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9IGZpbHRlcmVkT3B0aW9ucy5maW5kKG9wdGlvbiA9PiBvcHRpb24uZm9jdXNlZCk7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChzZWxlY3RlZE9wdGlvbikpIHtcclxuICAgICAgICBzZWxlY3RlZE9wdGlvbi5vcHRpb25DbGljaygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICBsZXQgZm9jdXNlZE9wdGlvbiA9IGZpbHRlcmVkT3B0aW9ucy5maW5kKG9wdGlvbiA9PiBvcHRpb24uZm9jdXNlZCk7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChmb2N1c2VkT3B0aW9uKSkge1xyXG4gICAgICAgIGxldCBmb2N1c2VkT3B0aW9uSW5kZXggPSBmaWx0ZXJlZE9wdGlvbnMuZmluZEluZGV4KChvcHRpb24pID0+IG9wdGlvbi5mb2N1c2VkKTtcclxuICAgICAgICBpZiAoZm9jdXNlZE9wdGlvbkluZGV4ID4gLTEgJiYgZm9jdXNlZE9wdGlvbkluZGV4IDwgZmlsdGVyZWRPcHRpb25zLmxlbmd0aCAtIDIpIHtcclxuICAgICAgICAgIGZvY3VzZWRPcHRpb24uZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgZmlsdGVyZWRPcHRpb25zW2ZvY3VzZWRPcHRpb25JbmRleCArIDFdLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmaWx0ZXJlZE9wdGlvbnNbMF0uZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgbGV0IGZvY3VzZWRPcHRpb24gPSBmaWx0ZXJlZE9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLmZvY3VzZWQpO1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQoZm9jdXNlZE9wdGlvbikpIHtcclxuICAgICAgICBsZXQgZm9jdXNlZE9wdGlvbkluZGV4ID0gZmlsdGVyZWRPcHRpb25zLmZpbmRJbmRleCgob3B0aW9uKSA9PiBvcHRpb24uZm9jdXNlZCk7XHJcbiAgICAgICAgaWYgKGZvY3VzZWRPcHRpb25JbmRleCA+IDApIHtcclxuICAgICAgICAgIGZvY3VzZWRPcHRpb24uZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgZmlsdGVyZWRPcHRpb25zW2ZvY3VzZWRPcHRpb25JbmRleCAtIDFdLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmaWx0ZXJlZE9wdGlvbnNbZmlsdGVyZWRPcHRpb25zLmxlbmd0aCAtIDFdLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHRyaWdnZXJDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKCghVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgfHwgIXRoaXMuZm9ybUNvbnRyb2wuZGlzYWJsZWQpICYmICghVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sKSB8fCAhdGhpcy5mb3JtQXJyYXlDb250cm9sLmNvbnRyb2wuZGlzYWJsZWQpKSB7XHJcbiAgICAgIHRoaXMudG91Y2hlZC5lbWl0KCk7XHJcbiAgICAgIHRoaXMuZm9jdXNlZC5lbWl0KCk7XHJcbiAgICAgIHRoaXMuc2hvd09wdGlvbnMudmFsdWUgPSB0cnVlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaGlkZU9uQ2xpY2tPdXRzaWRlKCksIDEwKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1yZC1zZWxlY3Qtb3B0aW9ucy1zY3JvbGwgLm1yZC1zZWxlY3Qtb3B0aW9uLWl0ZW0uc2VsZWN0ZWQnKTtcclxuICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQoc2VsZWN0ZWRPcHRpb24pKSB7XHJcbiAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ25lYXJlc3QnLCBpbmxpbmU6ICduZWFyZXN0J30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTApO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGlkZU9uQ2xpY2tPdXRzaWRlKCk6IHZvaWQge1xyXG4gICAgbGV0IG9wdGlvbnNDb250YWluZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubXJkLXNlbGVjdC1jb250YWluZXInKTtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZChvcHRpb25zQ29udGFpbmVyKSkge1xyXG4gICAgICBjb25zdCBvdXRzaWRlQ2xpY2tMaXN0ZW5lciA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKCFvcHRpb25zQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0IGFzIE5vZGUpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5zaG93T3B0aW9ucy52YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJsdXJyZWQuZW1pdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dPcHRpb25zLnZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmVtb3ZlQ2xpY2tMaXN0ZW5lcigpO1xyXG4gICAgICB9fTtcclxuICAgICAgY29uc3QgcmVtb3ZlQ2xpY2tMaXN0ZW5lciA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG91dHNpZGVDbGlja0xpc3RlbmVyKTtcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3V0c2lkZUNsaWNrTGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzZWxlY3RlZE9wdGlvbnMoKTogTXJkU2VsZWN0T3B0aW9uQ29tcG9uZW50W10ge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHNob3dOb09wdGlvbnNPblNlYXJjaCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc2hvd05vT3B0aW9uc09uU2VhcmNoID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2hvd05vT3B0aW9uc09uU2VhcmNoKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dOb09wdGlvbnNPblNlYXJjaDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmb2N1cyhldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c2VkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBibHVyKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmJsdXJyZWQuZW1pdCgpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibXJkLXNlbGVjdC1jb250YWluZXJcIiBbbmdDbGFzc109XCJ7J21yZC1zZWxlY3QtZGlzYWJsZWQnOiBmb3JtQ29udHJvbD8uZGlzYWJsZWR9XCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImF1dG9Db21wbGV0ZVwiPlxyXG4gICAgPGlucHV0XHJcbiAgICAoY2xpY2spPVwidHJpZ2dlckNsaWNrZWQoKVwiXHJcbiAgICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gICAgKGlucHV0KT1cImF1dG9Db21wbGV0ZUlucHV0KCRldmVudClcIlxyXG4gICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxyXG4gID5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFhdXRvQ29tcGxldGVcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjdXN0b21UcmlnZ2VyXCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm1yZC1zZWxlY3QtY3VzdG9tLXRyaWdnZXJcIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY3VzdG9tVHJpZ2dlclwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNoaXBTZWxlY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXJkLXNlbGVjdC10cmlnZ2VyXCIgKGNsaWNrKT1cInRyaWdnZXJDbGlja2VkKClcIj5cclxuICAgICAgICAgIDxzcGFuIFttcmRUb29sVGlwXT1cInZhbHVlXCIgc2hvd0lmVHJ1bmNhdGVkPnt7dmFsdWV9fTwvc3Bhbj5cclxuICAgICAgICAgIDxzdmcgZmlsbD1cImN1cnJlbnRDb2xvclwiIHdpZHRoPVwiMTRweFwiIGhlaWdodD1cIjE0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz5cclxuICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2U9XCIjQ0NDQ0NDXCIgc3Ryb2tlLXdpZHRoPVwiMC4wNDhcIj48L2c+XHJcbiAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPjxwYXRoIGQ9XCJNMTEuMTc4IDE5LjU2OWEuOTk4Ljk5OCAwIDAgMCAxLjY0NCAwbDktMTNBLjk5OS45OTkgMCAwIDAgMjEgNUgzYTEuMDAyIDEuMDAyIDAgMCAwLS44MjIgMS41NjlsOSAxM3pcIj48L3BhdGg+PC9nPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2hpcFNlbGVjdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtcmQtY2hpcC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtcmQtY2hpcC12YWx1ZXNcIiAqbmdJZj1cImNoaXBTZWxlY3Rpb25cIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInZhbHVlICYmIHZhbHVlICE9PSAnJ1wiPlxyXG4gICAgICAgICAgICAgIDxtcmQtY2hpcCAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHNlbGVjdGVkT3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAoY2xvc2UpPVwiY2hpcENsb3NlZChvcHRpb24pXCJcclxuICAgICAgICAgICAgICAgIFtwcmVmaXhJY29uXT1cImNoaXBQcmVmaXhJY29uXCJcclxuICAgICAgICAgICAgICAgIFtzdWZmaXhJY29uXT1cImNoaXBTdWZmaXhJY29uXCJcclxuICAgICAgICAgICAgICAgID57e29wdGlvbi5vcHRpb25MYWJlbH19PC9tcmQtY2hpcD5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtcmQtc2VsZWN0LXRyaWdnZXItY2hpcFwiIChjbGljayk9XCJ0cmlnZ2VyQ2xpY2tlZCgpXCI+XHJcbiAgICAgICAgICAgICAgPHN2ZyBmaWxsPVwiY3VycmVudENvbG9yXCIgd2lkdGg9XCIxNHB4XCIgaGVpZ2h0PVwiMTRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz5cclxuICAgICAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlPVwiI0NDQ0NDQ1wiIHN0cm9rZS13aWR0aD1cIjAuMDQ4XCI+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+PHBhdGggZD1cIk0xMS4xNzggMTkuNTY5YS45OTguOTk4IDAgMCAwIDEuNjQ0IDBsOS0xM0EuOTk5Ljk5OSAwIDAgMCAyMSA1SDNhMS4wMDIgMS4wMDIgMCAwIDAtLjgyMiAxLjU2OWw5IDEzelwiPjwvcGF0aD48L2c+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJtcmQtc2VsZWN0LW9wdGlvbnMtcGxhY2luZ1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1yZC1zZWxlY3Qtb3B0aW9ucy1jb250YWluZXJcIiAqbmdJZj1cInNob3dPcHRpb25zLnZhbHVlXCJcclxuICAgIFtuZ0NsYXNzXT1cInsnd2lkdGgtZXhjZWVkZWQnOiBvcHRpb25zV2lkdGhFeGNlZWRlZCwgJ2hlaWdodC1leGNlZWRlZCc6IG9wdGlvbnNIZWlnaHRFeGNlZWRlZCwgJ29wdGlvbnMtdmlzaWJsZSc6IG9wdGlvbnNWaXNpYmxlfVwiPlxyXG4gICAgICA8bXJkLXNlbGVjdC1vcHRpb24gKm5nSWY9XCJzZWFyY2hTZWxlY3Rpb25cIiBjbGFzcz1cIm1yZC1zZWxlY3Qtc2VhcmNoLW9wdGlvblwiIG5vQ2hlY2tib3g+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN1Y2hlXCJcclxuICAgICAgICAgIFt2YWx1ZV09XCJzZWFyY2hUZXh0XCJcclxuICAgICAgICAgIChpbnB1dCk9XCJzZWFyY2hJbnB1dCgkZXZlbnQpXCJcclxuICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxyXG4gICAgICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxyXG4gICAgICAgID5cclxuICAgICAgPC9tcmQtc2VsZWN0LW9wdGlvbj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1yZC1zZWxlY3Qtb3B0aW9ucy1zY3JvbGxcIj5cclxuICAgICAgICA8bXJkLXNlbGVjdC1vcHRpb24gKm5nSWY9XCJudWxsYWJsZVwiIG5vQ2hlY2tib3ggW3ZhbHVlXT1cIm51bGxcIiAob3B0aW9uQ2xpY2tlZCk9XCJyZW1vdmVTZWxlY3RlZCgpXCI+e3ttdWx0aXBsZSA/ICdBdXN3YWhsIGzDtnNjaGVuJyA6ICctJ319PC9tcmQtc2VsZWN0LW9wdGlvbj5cclxuICAgICAgICA8bXJkLXNlbGVjdC1vcHRpb24gKm5nSWY9XCJzZWFyY2hTZWxlY3Rpb24gJiYgc2VhcmNoVGV4dC5sZW5ndGggPiAwICYmIHNob3dOb09wdGlvbnNPblNlYXJjaFwiIG5vQ2hlY2tib3g+S2VpbmUgRWludHLDpGdlIGdlZnVuZGVuPC9tcmQtc2VsZWN0LW9wdGlvbj5cclxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtcmQtc2VsZWN0LW9wdGlvblwiPjwvbmctY29udGVudD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==