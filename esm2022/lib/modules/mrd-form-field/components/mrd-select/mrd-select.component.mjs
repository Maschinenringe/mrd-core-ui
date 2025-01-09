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
    }
    _resetOptions() {
        this.watch(this.optionSelectionChanges, new SubscriptionHandler((event) => {
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
        if (!Util.isDefined(this.formControl) || !this.formControl.disabled) {
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
        } }, inputs: { formControl: ["mrdFormControl", "formControl"], autoComplete: ["autoComplete", "autoComplete", booleanAttribute], searchSelection: ["searchSelection", "searchSelection", booleanAttribute], chipSelection: ["chipSelection", "chipSelection", booleanAttribute], nullable: ["nullable", "nullable", booleanAttribute], multiple: ["multiple", "multiple", booleanAttribute], chipPrefixIcon: "chipPrefixIcon", chipSuffixIcon: "chipSuffixIcon" }, outputs: { touched: "touched", focused: "focused", blurred: "blurred" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c3, decls: 5, vars: 6, consts: [[1, "mrd-select-container", 3, "ngClass"], [4, "ngIf"], [1, "mrd-select-options-placing"], ["class", "mrd-select-options-container", 3, "ngClass", 4, "ngIf"], [3, "value", "click", "input", "keydown"], [1, "mrd-select-trigger", 3, "click"], ["showIfTruncated", "", 3, "mrdToolTip"], ["fill", "currentColor", "width", "14px", "height", "14px", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke", "#CCCCCC", "stroke-width", "0.048"], ["id", "SVGRepo_iconCarrier"], ["d", "M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"], [1, "mrd-chip-container"], ["class", "mrd-chip-values", 4, "ngIf"], [1, "mrd-chip-values"], [1, "mrd-select-trigger-chip", 3, "click"], [3, "prefixIcon", "suffixIcon", "close", 4, "ngFor", "ngForOf"], [3, "prefixIcon", "suffixIcon", "close"], [1, "mrd-select-options-container", 3, "ngClass"], ["class", "mrd-select-search-option", "noCheckbox", "", 4, "ngIf"], [1, "mrd-select-options-scroll"], ["noCheckbox", "", 3, "value", "optionClicked", 4, "ngIf"], ["noCheckbox", "", 4, "ngIf"], ["noCheckbox", "", 1, "mrd-select-search-option"], ["placeholder", "Suche", 3, "value", "input", "click", "keydown"], ["noCheckbox", "", 3, "value", "optionClicked"], ["noCheckbox", ""]], template: function MrdSelectComponent_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWZvcm0tZmllbGQvY29tcG9uZW50cy9tcmQtc2VsZWN0L21yZC1zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLXNlbGVjdC9tcmQtc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBbUMsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BPLE9BQU8sRUFBeUIsc0JBQXNCLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNySCxPQUFPLEVBQXlCLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDbkgsT0FBTyxFQUFjLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0UsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7Ozs7SUNIakgsNkJBQW1DO0lBQ2pDLGdDQUtEO0lBSkMsdUtBQVMsZUFBQSx1QkFBZ0IsQ0FBQSxJQUFDLGdLQUVqQixlQUFBLGdDQUF5QixDQUFBLElBRlIsb0tBR2YsZUFBQSx3QkFBaUIsQ0FBQSxJQUhGO0lBRDFCLGlCQUtEO0lBQ0QsMEJBQWU7OztJQUpiLGVBQWU7SUFBZixvQ0FBZTs7O0lBT2YsNkJBQW9DO0lBQ2xDLGtCQUE0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QUFFLGdCQUFnQixFQUFDO1lBU3BCLGNBQWM7a0JBQTdCLEtBQUs7WUFDVSxjQUFjO2tCQUE3QixLQUFLO1lBRUksT0FBTztrQkFBaEIsTUFBTTtZQUNHLE9BQU87a0JBQWhCLE1BQU07WUFDRyxPQUFPO2tCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgQ29udGVudENoaWxkcmVuLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgUXVlcnlMaXN0LCBib29sZWFuQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjY2Vzc2FibGVGb3JtQ29udHJvbCwgQmFzZVB1c2hTdHJhdGVneU9iamVjdCwgT2JzZXJ2YWJsZVZhbHVlLCBTdWJzY3JpcHRpb25IYW5kbGVyLCBVdGlsIH0gZnJvbSAnbXJkLWNvcmUnO1xyXG5pbXBvcnQgeyBNcmRTZWxlY3RPcHRpb25DaGFuZ2UsIE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL21yZC1zZWxlY3Qtb3B0aW9uL21yZC1zZWxlY3Qtb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIGRlZmVyLCBtZXJnZSwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTXJkU2VsZWN0Q3VzdG9tVHJpZ2dlckNvbXBvbmVudCB9IGZyb20gJy4uL21yZC1zZWxlY3QtY3VzdG9tLXRyaWdnZXIvbXJkLXNlbGVjdC1jdXN0b20tdHJpZ2dlci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtcmQtc2VsZWN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLXNlbGVjdC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmRTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihNcmRTZWxlY3RPcHRpb25Db21wb25lbnQpIG9wdGlvbnM6IFF1ZXJ5TGlzdDxNcmRTZWxlY3RPcHRpb25Db21wb25lbnQ+O1xyXG5cclxuICBAQ29udGVudENoaWxkKE1yZFNlbGVjdEN1c3RvbVRyaWdnZXJDb21wb25lbnQpIGN1c3RvbVRyaWdnZXI6IE1yZFNlbGVjdEN1c3RvbVRyaWdnZXJDb21wb25lbnQ7XHJcblxyXG4gIHByaXZhdGUgX2luaXRpYWxpemVkID0gbmV3IFN1YmplY3QoKTtcclxuICByZWFkb25seSBvcHRpb25TZWxlY3Rpb25DaGFuZ2VzOiBPYnNlcnZhYmxlPGFueT4gPSBkZWZlcigoKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG5cclxuICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgIHJldHVybiBvcHRpb25zLmNoYW5nZXMucGlwZShcclxuICAgICAgICBzdGFydFdpdGgob3B0aW9ucyksXHJcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+IG1lcmdlKC4uLm9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24ub3B0aW9uQ2xpY2tlZCkpKSxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5faW5pdGlhbGl6ZWQucGlwZShzd2l0Y2hNYXAoKCkgPT4gdGhpcy5vcHRpb25TZWxlY3Rpb25DaGFuZ2VzKSk7XHJcbiAgfSk7XHJcblxyXG4gIEBJbnB1dCgnbXJkRm9ybUNvbnRyb2wnKSBmb3JtQ29udHJvbDogQWNjZXNzYWJsZUZvcm1Db250cm9sO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgYXV0b0NvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBzZWFyY2hTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGNoaXBTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIG51bGxhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KVxyXG4gIGdldCBtdWx0aXBsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZTtcclxuICB9XHJcbiAgc2V0IG11bHRpcGxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9tdWx0aXBsZSA9IHZhbHVlO1xyXG4gIH1cclxuICBwcml2YXRlIF9tdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgY2hpcFByZWZpeEljb246IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgY2hpcFN1ZmZpeEljb246IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgpIHRvdWNoZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgZm9jdXNlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBibHVycmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIHB1YmxpYyBzaG93T3B0aW9uczogT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+ID0gbmV3IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgcHVibGljIG9wdGlvbnNWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIF9zaG93Tm9PcHRpb25zT25TZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBwdWJsaWMgc2VhcmNoVGV4dDogc3RyaW5nID0gJyc7XHJcblxyXG4gIHB1YmxpYyBvcHRpb25zV2lkdGhFeGNlZWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBvcHRpb25zSGVpZ2h0RXhjZWVkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy53YXRjaCh0aGlzLnNob3dPcHRpb25zLmNoYW5nZWQsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCh2YWx1ZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGxldCBvcHRpb25zQ29udGFpbmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1yZC1zZWxlY3Qtb3B0aW9ucy1jb250YWluZXInKTtcclxuICAgICAgICAgIGxldCBvcHRpb25zQ29udGFpbmVyUmlnaHQgPSBvcHRpb25zQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnJpZ2h0O1xyXG4gICAgICAgICAgbGV0IG9wdGlvbnNDb250YWluZXJCb3R0b20gPSBvcHRpb25zQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcclxuICAgICAgICAgIGxldCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgICAgaWYgKG9wdGlvbnNDb250YWluZXJSaWdodCA+IHdpbmRvd1dpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1dpZHRoRXhjZWVkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zV2lkdGhFeGNlZWRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICAgIGlmIChvcHRpb25zQ29udGFpbmVyQm90dG9tID4gd2luZG93SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc0hlaWdodEV4Y2VlZGVkID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc0hlaWdodEV4Y2VlZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMub3B0aW9uc1dpZHRoRXhjZWVkZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9wdGlvbnNIZWlnaHRFeGNlZWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3B0aW9uc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5faW5pdGlhbGl6ZWQubmV4dChudWxsKTtcclxuICAgIHRoaXMuX2luaXRpYWxpemVkLmNvbXBsZXRlKCk7XHJcblxyXG4gICAgdGhpcy53YXRjaCh0aGlzLm9wdGlvbnMuY2hhbmdlcy5waXBlKHN0YXJ0V2l0aChudWxsKSksIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHtcclxuICAgICAgdGhpcy5fcmVzZXRPcHRpb25zKCk7XHJcbiAgICB9KSk7XHJcblxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuY3VzdG9tVHJpZ2dlcikpIHtcclxuICAgICAgdGhpcy53YXRjaCh0aGlzLmN1c3RvbVRyaWdnZXIudHJpZ2dlckNsaWNrLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyQ2xpY2tlZCgpO1xyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZSk/Lm9wdGlvbkNsaWNrKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkVmFsdWVzID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZSBhcyBhbnlbXTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWVzLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpIHtcclxuICAgICAgICAgICAgb3B0aW9uLm9wdGlvbkNsaWNrKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3Jlc2V0T3B0aW9ucygpOiB2b2lkIHtcclxuICAgIHRoaXMud2F0Y2godGhpcy5vcHRpb25TZWxlY3Rpb25DaGFuZ2VzLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoZXZlbnQ6IE1yZFNlbGVjdE9wdGlvbkNoYW5nZSkgPT4ge1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQoZXZlbnQpKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLmZvY3VzZWQgPSBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gJyc7XHJcbiAgICAgICAgdGhpcy5zaG93Tm9PcHRpb25zT25TZWFyY2ggPSBmYWxzZTtcclxuICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQoZXZlbnQub3B0aW9uKSAmJiAhdGhpcy5hdXRvQ29tcGxldGUpIHtcclxuICAgICAgICAgIGV2ZW50Lm9wdGlvbi5zZWxlY3RlZCA9IHRoaXMubXVsdGlwbGUgPyBldmVudC5jaGVja2VkIDogdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSAmJiB0aGlzLmZvcm1Db250cm9sLnZhbHVlICE9PSBldmVudC5rZXkpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShldmVudC5rZXkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy52YWx1ZSA9IGV2ZW50LnZhbHVlO1xyXG4gICAgICAgICAgdGhpcy5zaG93T3B0aW9ucy52YWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoc2VsZWN0ZWRPcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKS5tYXAob3B0aW9uID0+IG9wdGlvbi5vcHRpb25MYWJlbCkuam9pbignLCAnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVNlbGVjdGVkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlKTtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKG51bGwpO1xyXG4gICAgfVxyXG4gICAgdGhpcy52YWx1ZSA9ICcnO1xyXG4gICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgIHRoaXMuc2hvd09wdGlvbnMudmFsdWUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGlwQ2xvc2VkKG9wdGlvbjogTXJkU2VsZWN0T3B0aW9uQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCkubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhdXRvQ29tcGxldGVJbnB1dChldmVudDogSW5wdXRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZhbHVlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgIG9wdGlvbi5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgIGlmIChvcHRpb24ub3B0aW9uTGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMudmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgIG9wdGlvbi5maWx0ZXJlZCA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9wdGlvbi5maWx0ZXJlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgZmlsdGVyZWRPcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gIW9wdGlvbi5maWx0ZXJlZCk7XHJcbiAgICAgIGlmIChmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZpbHRlcmVkT3B0aW9uc1swXS5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNob3dOb09wdGlvbnNPblNlYXJjaCA9IGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWFyY2hJbnB1dChldmVudDogSW5wdXRFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgIG9wdGlvbi5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgIGlmIChvcHRpb24ub3B0aW9uTGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgb3B0aW9uLmZpbHRlcmVkID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3B0aW9uLmZpbHRlcmVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hUZXh0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGZpbHRlcmVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+ICFvcHRpb24uZmlsdGVyZWQpO1xyXG4gICAgICBpZiAoZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmaWx0ZXJlZE9wdGlvbnNbMF0uZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zaG93Tm9PcHRpb25zT25TZWFyY2ggPSBmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBsZXQgZmlsdGVyZWRPcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gIW9wdGlvbi5maWx0ZXJlZCk7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9IGZpbHRlcmVkT3B0aW9ucy5maW5kKG9wdGlvbiA9PiBvcHRpb24uZm9jdXNlZCk7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChzZWxlY3RlZE9wdGlvbikpIHtcclxuICAgICAgICBzZWxlY3RlZE9wdGlvbi5vcHRpb25DbGljaygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICBsZXQgZm9jdXNlZE9wdGlvbiA9IGZpbHRlcmVkT3B0aW9ucy5maW5kKG9wdGlvbiA9PiBvcHRpb24uZm9jdXNlZCk7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChmb2N1c2VkT3B0aW9uKSkge1xyXG4gICAgICAgIGxldCBmb2N1c2VkT3B0aW9uSW5kZXggPSBmaWx0ZXJlZE9wdGlvbnMuZmluZEluZGV4KChvcHRpb24pID0+IG9wdGlvbi5mb2N1c2VkKTtcclxuICAgICAgICBpZiAoZm9jdXNlZE9wdGlvbkluZGV4ID4gLTEgJiYgZm9jdXNlZE9wdGlvbkluZGV4IDwgZmlsdGVyZWRPcHRpb25zLmxlbmd0aCAtIDIpIHtcclxuICAgICAgICAgIGZvY3VzZWRPcHRpb24uZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgZmlsdGVyZWRPcHRpb25zW2ZvY3VzZWRPcHRpb25JbmRleCArIDFdLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmaWx0ZXJlZE9wdGlvbnNbMF0uZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgbGV0IGZvY3VzZWRPcHRpb24gPSBmaWx0ZXJlZE9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLmZvY3VzZWQpO1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQoZm9jdXNlZE9wdGlvbikpIHtcclxuICAgICAgICBsZXQgZm9jdXNlZE9wdGlvbkluZGV4ID0gZmlsdGVyZWRPcHRpb25zLmZpbmRJbmRleCgob3B0aW9uKSA9PiBvcHRpb24uZm9jdXNlZCk7XHJcbiAgICAgICAgaWYgKGZvY3VzZWRPcHRpb25JbmRleCA+IDApIHtcclxuICAgICAgICAgIGZvY3VzZWRPcHRpb24uZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgZmlsdGVyZWRPcHRpb25zW2ZvY3VzZWRPcHRpb25JbmRleCAtIDFdLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmaWx0ZXJlZE9wdGlvbnNbZmlsdGVyZWRPcHRpb25zLmxlbmd0aCAtIDFdLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHRyaWdnZXJDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSB8fCAhdGhpcy5mb3JtQ29udHJvbC5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnRvdWNoZWQuZW1pdCgpO1xyXG4gICAgICB0aGlzLmZvY3VzZWQuZW1pdCgpO1xyXG4gICAgICB0aGlzLnNob3dPcHRpb25zLnZhbHVlID0gdHJ1ZTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmhpZGVPbkNsaWNrT3V0c2lkZSgpLCAxMCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tcmQtc2VsZWN0LW9wdGlvbnMtc2Nyb2xsIC5tcmQtc2VsZWN0LW9wdGlvbi1pdGVtLnNlbGVjdGVkJyk7XHJcbiAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHNlbGVjdGVkT3B0aW9uKSkge1xyXG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb24uc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICduZWFyZXN0JywgaW5saW5lOiAnbmVhcmVzdCd9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDEwKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhpZGVPbkNsaWNrT3V0c2lkZSgpOiB2b2lkIHtcclxuICAgIGxldCBvcHRpb25zQ29udGFpbmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1yZC1zZWxlY3QtY29udGFpbmVyJyk7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQob3B0aW9uc0NvbnRhaW5lcikpIHtcclxuICAgICAgY29uc3Qgb3V0c2lkZUNsaWNrTGlzdGVuZXIgPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmICghb3B0aW9uc0NvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCBhcyBOb2RlKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2hvd09wdGlvbnMudmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5ibHVycmVkLmVtaXQoKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93T3B0aW9ucy52YWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlbW92ZUNsaWNrTGlzdGVuZXIoKTtcclxuICAgICAgfX07XHJcbiAgICAgIGNvbnN0IHJlbW92ZUNsaWNrTGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvdXRzaWRlQ2xpY2tMaXN0ZW5lcik7XHJcbiAgICAgIH1cclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG91dHNpZGVDbGlja0xpc3RlbmVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2VsZWN0ZWRPcHRpb25zKCk6IE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudFtdIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBzaG93Tm9PcHRpb25zT25TZWFyY2godmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3Nob3dOb09wdGlvbnNPblNlYXJjaCA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHNob3dOb09wdGlvbnNPblNlYXJjaCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zaG93Tm9PcHRpb25zT25TZWFyY2g7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYmx1cihldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5ibHVycmVkLmVtaXQoKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1yZC1zZWxlY3QtY29udGFpbmVyXCIgW25nQ2xhc3NdPVwieydtcmQtc2VsZWN0LWRpc2FibGVkJzogZm9ybUNvbnRyb2w/LmRpc2FibGVkfVwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJhdXRvQ29tcGxldGVcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgKGNsaWNrKT1cInRyaWdnZXJDbGlja2VkKClcIlxyXG4gICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgIChpbnB1dCk9XCJhdXRvQ29tcGxldGVJbnB1dCgkZXZlbnQpXCJcclxuICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcclxuICA+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhYXV0b0NvbXBsZXRlXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY3VzdG9tVHJpZ2dlclwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtcmQtc2VsZWN0LWN1c3RvbS10cmlnZ2VyXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWN1c3RvbVRyaWdnZXJcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjaGlwU2VsZWN0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1yZC1zZWxlY3QtdHJpZ2dlclwiIChjbGljayk9XCJ0cmlnZ2VyQ2xpY2tlZCgpXCI+XHJcbiAgICAgICAgICA8c3BhbiBbbXJkVG9vbFRpcF09XCJ2YWx1ZVwiIHNob3dJZlRydW5jYXRlZD57e3ZhbHVlfX08L3NwYW4+XHJcbiAgICAgICAgICA8c3ZnIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB3aWR0aD1cIjE0cHhcIiBoZWlnaHQ9XCIxNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+XHJcbiAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlPVwiI0NDQ0NDQ1wiIHN0cm9rZS13aWR0aD1cIjAuMDQ4XCI+PC9nPlxyXG4gICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj48cGF0aCBkPVwiTTExLjE3OCAxOS41NjlhLjk5OC45OTggMCAwIDAgMS42NDQgMGw5LTEzQS45OTkuOTk5IDAgMCAwIDIxIDVIM2ExLjAwMiAxLjAwMiAwIDAgMC0uODIyIDEuNTY5bDkgMTN6XCI+PC9wYXRoPjwvZz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNoaXBTZWxlY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXJkLWNoaXAtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibXJkLWNoaXAtdmFsdWVzXCIgKm5nSWY9XCJjaGlwU2VsZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ2YWx1ZSAmJiB2YWx1ZSAhPT0gJydcIj5cclxuICAgICAgICAgICAgICA8bXJkLWNoaXAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBzZWxlY3RlZE9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgKGNsb3NlKT1cImNoaXBDbG9zZWQob3B0aW9uKVwiXHJcbiAgICAgICAgICAgICAgICBbcHJlZml4SWNvbl09XCJjaGlwUHJlZml4SWNvblwiXHJcbiAgICAgICAgICAgICAgICBbc3VmZml4SWNvbl09XCJjaGlwU3VmZml4SWNvblwiXHJcbiAgICAgICAgICAgICAgICA+e3tvcHRpb24ub3B0aW9uTGFiZWx9fTwvbXJkLWNoaXA+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXJkLXNlbGVjdC10cmlnZ2VyLWNoaXBcIiAoY2xpY2spPVwidHJpZ2dlckNsaWNrZWQoKVwiPlxyXG4gICAgICAgICAgICAgIDxzdmcgZmlsbD1cImN1cnJlbnRDb2xvclwiIHdpZHRoPVwiMTRweFwiIGhlaWdodD1cIjE0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+XHJcbiAgICAgICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZT1cIiNDQ0NDQ0NcIiBzdHJva2Utd2lkdGg9XCIwLjA0OFwiPjwvZz5cclxuICAgICAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPjxwYXRoIGQ9XCJNMTEuMTc4IDE5LjU2OWEuOTk4Ljk5OCAwIDAgMCAxLjY0NCAwbDktMTNBLjk5OS45OTkgMCAwIDAgMjEgNUgzYTEuMDAyIDEuMDAyIDAgMCAwLS44MjIgMS41NjlsOSAxM3pcIj48L3BhdGg+PC9nPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwibXJkLXNlbGVjdC1vcHRpb25zLXBsYWNpbmdcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtcmQtc2VsZWN0LW9wdGlvbnMtY29udGFpbmVyXCIgKm5nSWY9XCJzaG93T3B0aW9ucy52YWx1ZVwiXHJcbiAgICBbbmdDbGFzc109XCJ7J3dpZHRoLWV4Y2VlZGVkJzogb3B0aW9uc1dpZHRoRXhjZWVkZWQsICdoZWlnaHQtZXhjZWVkZWQnOiBvcHRpb25zSGVpZ2h0RXhjZWVkZWQsICdvcHRpb25zLXZpc2libGUnOiBvcHRpb25zVmlzaWJsZX1cIj5cclxuICAgICAgPG1yZC1zZWxlY3Qtb3B0aW9uICpuZ0lmPVwic2VhcmNoU2VsZWN0aW9uXCIgY2xhc3M9XCJtcmQtc2VsZWN0LXNlYXJjaC1vcHRpb25cIiBub0NoZWNrYm94PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdWNoZVwiXHJcbiAgICAgICAgICBbdmFsdWVdPVwic2VhcmNoVGV4dFwiXHJcbiAgICAgICAgICAoaW5wdXQpPVwic2VhcmNoSW5wdXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcclxuICAgICAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcclxuICAgICAgICA+XHJcbiAgICAgIDwvbXJkLXNlbGVjdC1vcHRpb24+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtcmQtc2VsZWN0LW9wdGlvbnMtc2Nyb2xsXCI+XHJcbiAgICAgICAgPG1yZC1zZWxlY3Qtb3B0aW9uICpuZ0lmPVwibnVsbGFibGVcIiBub0NoZWNrYm94IFt2YWx1ZV09XCJudWxsXCIgKG9wdGlvbkNsaWNrZWQpPVwicmVtb3ZlU2VsZWN0ZWQoKVwiPnt7bXVsdGlwbGUgPyAnQXVzd2FobCBsw7ZzY2hlbicgOiAnLSd9fTwvbXJkLXNlbGVjdC1vcHRpb24+XHJcbiAgICAgICAgPG1yZC1zZWxlY3Qtb3B0aW9uICpuZ0lmPVwic2VhcmNoU2VsZWN0aW9uICYmIHNlYXJjaFRleHQubGVuZ3RoID4gMCAmJiBzaG93Tm9PcHRpb25zT25TZWFyY2hcIiBub0NoZWNrYm94PktlaW5lIEVpbnRyw6RnZSBnZWZ1bmRlbjwvbXJkLXNlbGVjdC1vcHRpb24+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXJkLXNlbGVjdC1vcHRpb25cIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=