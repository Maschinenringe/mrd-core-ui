import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, EventEmitter, Input, Output, ViewChild, booleanAttribute, numberAttribute } from '@angular/core';
import { BasePushStrategyObject, ObservableValue, SubscriptionHandler, Util } from 'mrd-core';
import { MrdSelectOptionComponent } from '../mrd-select-option/mrd-select-option.component';
import { Subject, defer, merge, startWith, switchMap } from 'rxjs';
import { MrdSelectCustomTriggerComponent } from '../mrd-select-custom-trigger/mrd-select-custom-trigger.component';
import { MrdSelectOptionTemplateDirective } from '../../common/directive/mrd-select-option-template.directive';
import { MrdVirtualScrollComponent } from '../../../mrd-virtual-scroll/components/mrd-virtual-scroll/mrd-virtual-scroll.component';
import { itemSizeAttribute } from '../../../mrd-virtual-scroll/common/transforms/item-size-transform';
import * as i0 from "@angular/core";
const _c0 = ["selectContainer"];
const _c1 = ["searchSelectionInput"];
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
    i0.ɵɵlistener("click", function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_1_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r12.triggerClicked()); })("focus", function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_1_Template_div_focus_1_listener() { i0.ɵɵrestoreView(_r13); const ctx_r14 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r14.onTriggerFocus()); })("blur", function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_1_Template_div_blur_1_listener() { i0.ɵɵrestoreView(_r13); const ctx_r15 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r15.onTriggerBlur()); })("keydown", function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_1_Template_div_keydown_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r16 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r16.onTriggerKeyDown($event)); });
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
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("tabindex", ctx_r10.triggerTabIndex);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("mrdToolTip", ctx_r10.showValue);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r10.showValue);
} }
function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_ng_container_1_mrd_chip_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-chip", 17);
    i0.ɵɵlistener("close", function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_ng_container_1_mrd_chip_1_Template_mrd_chip_close_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r23); const option_r21 = restoredCtx.$implicit; const ctx_r22 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r22.chipClosed(option_r21)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r21 = ctx.$implicit;
    const ctx_r20 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("prefixIcon", ctx_r20.chipPrefixIcon)("suffixIcon", ctx_r20.chipSuffixIcon)("disabled", (ctx_r20.formControl == null ? null : ctx_r20.formControl.disabled) || (ctx_r20.formArrayControl == null ? null : ctx_r20.formArrayControl.disabled) || ctx_r20.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r21.optionLabel);
} }
function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_ng_container_1_mrd_chip_1_Template, 2, 4, "mrd-chip", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r18.selectedOptions);
} }
function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_ng_container_2_mrd_chip_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-chip", 17);
    i0.ɵɵlistener("close", function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_ng_container_2_mrd_chip_1_Template_mrd_chip_close_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r27); const item_r25 = restoredCtx.$implicit; const ctx_r26 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r26.virtuellenChipSchliessen(item_r25)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const ctx_r24 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("prefixIcon", ctx_r24.chipPrefixIcon)("suffixIcon", ctx_r24.chipSuffixIcon)("disabled", (ctx_r24.formControl == null ? null : ctx_r24.formControl.disabled) || (ctx_r24.formArrayControl == null ? null : ctx_r24.formArrayControl.disabled) || ctx_r24.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r24.labelVon(item_r25));
} }
function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_ng_container_2_mrd_chip_1_Template, 2, 4, "mrd-chip", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r19.virtuelleAusgewaehlteItems);
} }
function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(2, MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementStart(3, "div", 15);
    i0.ɵɵlistener("click", function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_Template_div_click_3_listener() { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r28.triggerClicked()); })("focus", function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_Template_div_focus_3_listener() { i0.ɵɵrestoreView(_r29); const ctx_r30 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r30.onTriggerFocus()); })("blur", function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_Template_div_blur_3_listener() { i0.ɵɵrestoreView(_r29); const ctx_r31 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r31.onTriggerBlur()); })("keydown", function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_Template_div_keydown_3_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r32 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r32.onTriggerKeyDown($event)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(4, "svg", 7);
    i0.ɵɵelement(5, "g", 8)(6, "g", 9);
    i0.ɵɵelementStart(7, "g", 10);
    i0.ɵɵelement(8, "path", 11);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r17.selectedOptions && ctx_r17.selectedOptions.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r17.virtualScroll);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("tabindex", ctx_r17.triggerTabIndex);
} }
function MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵtemplate(2, MrdSelectComponent_ng_container_3_ng_container_2_ng_container_2_div_2_Template, 9, 3, "div", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r11.chipSelection);
} }
function MrdSelectComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_container_3_ng_container_2_ng_container_1_Template, 9, 3, "ng-container", 2);
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
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-select-option", 24)(1, "input", 25, 26);
    i0.ɵɵlistener("input", function MrdSelectComponent_ng_template_4_mrd_select_option_1_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r38 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r38.searchInput($event)); })("click", function MrdSelectComponent_ng_template_4_mrd_select_option_1_Template_input_click_1_listener($event) { return $event.stopPropagation(); })("keydown", function MrdSelectComponent_ng_template_4_mrd_select_option_1_Template_input_keydown_1_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r41 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r41.onKeyDown($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(3, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r33.searchText);
} }
function MrdSelectComponent_ng_template_4_mrd_select_option_3_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-select-option", 27);
    i0.ɵɵlistener("optionClicked", function MrdSelectComponent_ng_template_4_mrd_select_option_3_Template_mrd_select_option_optionClicked_0_listener() { i0.ɵɵrestoreView(_r43); const ctx_r42 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r42.removeSelected()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r34 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r34.multiple ? "Auswahl l\u00F6schen" : "-");
} }
function MrdSelectComponent_ng_template_4_mrd_select_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mrd-select-option", 28);
    i0.ɵɵtext(1, "Keine Eintr\u00E4ge gefunden");
    i0.ɵɵelementEnd();
} }
function MrdSelectComponent_ng_template_4_mrd_virtual_scroll_6_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c2 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function MrdSelectComponent_ng_template_4_mrd_virtual_scroll_6_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_template_4_mrd_virtual_scroll_6_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 34);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r51 = i0.ɵɵnextContext();
    const item_r45 = ctx_r51.$implicit;
    const i_r46 = ctx_r51.index;
    const ctx_r47 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r47.optionTemplate.templateRef)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c2, item_r45, i_r46));
} }
function MrdSelectComponent_ng_template_4_mrd_virtual_scroll_6_ng_template_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const item_r45 = i0.ɵɵnextContext().$implicit;
    const ctx_r49 = i0.ɵɵnextContext(3);
    i0.ɵɵtextInterpolate(ctx_r49.labelVon(item_r45));
} }
function MrdSelectComponent_ng_template_4_mrd_virtual_scroll_6_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-select-option", 31);
    i0.ɵɵlistener("optionClicked", function MrdSelectComponent_ng_template_4_mrd_virtual_scroll_6_ng_template_1_Template_mrd_select_option_optionClicked_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r54); const item_r45 = restoredCtx.$implicit; const ctx_r53 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r53.virtuelleOptionGeklickt(item_r45)); });
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_template_4_mrd_virtual_scroll_6_ng_template_1_ng_container_1_Template, 2, 5, "ng-container", 32);
    i0.ɵɵtemplate(2, MrdSelectComponent_ng_template_4_mrd_virtual_scroll_6_ng_template_1_ng_template_2_Template, 1, 1, "ng-template", null, 33, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r45 = ctx.$implicit;
    const i_r46 = ctx.index;
    const _r48 = i0.ɵɵreference(3);
    const ctx_r44 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", ctx_r44.wertVon(item_r45))("selected", ctx_r44.istVirtuellAusgewaehlt(item_r45))("focused", i_r46 === ctx_r44.fokusIndex);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r44.optionTemplate)("ngIfElse", _r48);
} }
function MrdSelectComponent_ng_template_4_mrd_virtual_scroll_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mrd-virtual-scroll", 29);
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_template_4_mrd_virtual_scroll_6_ng_template_1_Template, 4, 5, "ng-template", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("items", ctx_r36.gefilterteItems)("itemSize", ctx_r36.itemSize)("maxHeight", ctx_r36.virtualScrollMaxHeight)("trackBy", ctx_r36.virtuellerTrackBy);
} }
function MrdSelectComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, MrdSelectComponent_ng_template_4_mrd_select_option_1_Template, 4, 1, "mrd-select-option", 19);
    i0.ɵɵelementStart(2, "div", 20);
    i0.ɵɵtemplate(3, MrdSelectComponent_ng_template_4_mrd_select_option_3_Template, 2, 2, "mrd-select-option", 21);
    i0.ɵɵtemplate(4, MrdSelectComponent_ng_template_4_mrd_select_option_4_Template, 2, 0, "mrd-select-option", 22);
    i0.ɵɵprojection(5, 1);
    i0.ɵɵtemplate(6, MrdSelectComponent_ng_template_4_mrd_virtual_scroll_6_Template, 2, 4, "mrd-virtual-scroll", 23);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.searchSelection);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("mrd-select-options-scroll-virtuell", ctx_r3.virtualScroll);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.nullable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.searchSelection && ctx_r3.searchText.length > 0 && ctx_r3.showNoOptionsOnSearch);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.virtualScroll);
} }
const _c3 = [[["mrd-select-custom-trigger"]], [["mrd-select-option"]], [["", "addButton", ""]]];
const _c4 = function (a0) { return { "mrd-select-disabled": a0 }; };
const _c5 = ["mrd-select-custom-trigger", "mrd-select-option", "[addButton]"];
export class MrdSelectComponent extends BasePushStrategyObject {
    elementRef;
    cdr;
    selectContainer;
    searchSelectionInput;
    options;
    customTrigger;
    optionTemplate;
    virtuellesScroll;
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
    set items(value) {
        this._items = value || [];
        if (this.virtualScroll && this.virtuellInitialisiert) {
            this.virtuellFiltern(this.autoComplete ? this.showValue : this.searchText);
            this.virtuelleAnzeigeAktualisieren(false);
        }
    }
    get items() {
        return this._items;
    }
    _items = [];
    /**
     * Rendert nur die sichtbaren Optionen. Die Optionen kommen dann aus `[items]` statt aus `<mrd-select-option>`;
     * Wert ist `item[identifier]`, angezeigt wird `displayWith(item)` bzw. `item[labelKey]` oder ein `<ng-template mrdSelectOption>`.
     */
    virtualScroll = false;
    /** Nur mit `virtualScroll` */
    labelKey = 'bezeichnung';
    /** Nur mit `virtualScroll`; hat Vorrang vor `labelKey` */
    displayWith;
    /** Nur mit `virtualScroll`: Hoehe einer Option in px, fuer alle gleich oder `(item, index) => px` je Option */
    itemSize;
    /** Nur mit `virtualScroll`: maximale Hoehe der Optionsliste in px */
    virtualScrollMaxHeight = 240;
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
    chipPrefixIcon;
    chipSuffixIcon;
    showOptions = new ObservableValue(false);
    smoothScroll = false;
    searchAutofocus = true;
    touched = new EventEmitter();
    focused = new EventEmitter();
    blurred = new EventEmitter();
    /**
     * Event that is emitted when the chip close button is clicked.
     * @type {EventEmitter<void>}
     * @memberof MrdSelectComponent
     * @returns The value of the chip that was closed.
     */
    chipClose = new EventEmitter();
    valueChange = new EventEmitter();
    optionsVisible = false;
    _showNoOptionsOnSearch = false;
    standalone = false;
    showValue = '';
    searchText = '';
    optionsWidthExceeded = false;
    optionsHeightExceeded = false;
    optionChangeSubscription;
    gefilterteItems = [];
    virtuelleAusgewaehlteItems = [];
    fokusIndex = -1;
    virtuelleAuswahl = new Set();
    virtuellInitialisiert = false;
    virtuellerTrackBy = (_, item) => this.wertVon(item);
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
        this.watch(this.showOptions.changed.pipe(startWith(this.showOptions.value)), new SubscriptionHandler((value) => {
            if (!value) {
                this.blur(null);
            }
            else if (this.searchSelection && this.searchAutofocus) {
                setTimeout(() => {
                    this.searchSelectionInput?.nativeElement.focus();
                }, 500);
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
            if (Util.isDefined(this.formControl) && Util.isDefined(this.formControl.value)) {
                this.formControlChanged();
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
            this.watch(this.formArrayControl.valueChanges, new SubscriptionHandler(() => this.formArrayControlChanged()));
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
        if (Util.isDefined(this.value)) {
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
        // Prüfe, ob showOptions bereits true ist und setze den Fokus falls nötig
        if (this.showOptions.value && this.searchSelection && this.searchAutofocus) {
            setTimeout(() => {
                this.searchSelectionInput?.nativeElement.focus();
            }, 500);
        }
        if (this.virtualScroll) {
            this.virtuellInitialisiert = true;
            this.virtuellFiltern(this.autoComplete ? this.showValue : this.searchText);
            this.virtuelleAnzeigeAktualisieren(true);
        }
    }
    formControlChanged() {
        if (this.virtualScroll) {
            this.virtuelleAnzeigeAktualisieren(true);
            return;
        }
        if (this.autoComplete) {
            this.showValue = this.formControl.value;
            this.options.forEach(option => {
                option.focused = false;
                if (!Util.isDefined(this.showValue) || (option.optionValue?.nativeElement.innerText || '').toLowerCase().indexOf(this.showValue?.toLowerCase()) > -1) {
                    option.filtered = false;
                }
                else {
                    option.filtered = true;
                }
            });
            if (Util.isDefined(this.showValue) && this.showValue.length > 0) {
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
        if (this.virtualScroll) {
            this.virtuelleAnzeigeAktualisieren(true);
            return;
        }
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
        if (this.virtualScroll) {
            this.virtuelleAnzeigeAktualisieren(true);
            return;
        }
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
            if (!Util.isDefined(this.value)) {
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
                    event.option.selected = this.multiple ? (event.checked ?? false) : true;
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
                        this.formArrayAbgleichen(selectedOptions.map(option => this.items.find(item => item[this.identifier] === option.value)));
                    }
                    if (this.closeOnSelect) {
                        this.showOptions.value = false;
                    }
                }
            }
            this.cdr.detectChanges();
        }));
    }
    formArrayAbgleichen(selectedItems) {
        if (selectedItems.length === 0) {
            this.formArrayControl.reset([]);
            return;
        }
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
        this.chipCloseClicked(option.value);
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
        if (this.virtualScroll) {
            this.virtuellFiltern(this.searchText);
            this.cdr.markForCheck();
            return;
        }
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
        if (this.virtualScroll) {
            this.virtuelleTasteVerarbeiten(event);
            return;
        }
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
        if ((!Util.isDefined(this.formControl) || !this.formControl.disabled) && (!Util.isDefined(this.formArrayControl) || !this.formArrayControl.disabled) && (!this.standalone || !this.disabled)) {
            this.touched.emit();
            this.focused.emit();
            this.showOptions.value = true;
            setTimeout(() => {
                if (this.virtualScroll) {
                    // Die ausgewaehlte Option ist evtl. nicht gerendert, daher ueber den Index scrollen
                    const index = this.gefilterteItems.findIndex(item => this.virtuelleAuswahl.has(this.wertVon(item)));
                    this.virtuellesScroll?.scrollToIndex(index, 'center', this.smoothScroll ? 'smooth' : 'auto');
                    return;
                }
                let selectedOption = document.querySelector('.mrd-select-options-overlay .mrd-select-options-scroll .mrd-select-option-item.selected');
                if (Util.isDefined(selectedOption)) {
                    if (this.smoothScroll) {
                        selectedOption.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
                    }
                    else {
                        selectedOption.scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'nearest' });
                    }
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
    get istDeaktiviert() {
        return !!(this.formControl?.disabled || this.formArrayControl?.disabled || this.disabled);
    }
    /** null statt -1: ein tabindex von -1 laesst sich per Mausklick weiterhin fokussieren */
    get triggerTabIndex() {
        return this.istDeaktiviert ? null : 0;
    }
    onTriggerFocus() {
        // Blur bleibt erlaubt, damit ein waehrend des Fokus deaktiviertes Select das Formularfeld zuruecksetzt
        if (this.istDeaktiviert) {
            return;
        }
        this.focus(null);
    }
    onTriggerBlur() {
        if (!this.showOptions.value) {
            this.blur(null);
        }
    }
    onTriggerKeyDown(event) {
        if (this.showOptions.value) {
            if (event.key === 'Escape') {
                event.preventDefault();
                event.stopPropagation();
                this.showOptions.value = false;
            }
            else if (event.key === 'Tab') {
                this.showOptions.value = false;
            }
            else if (event.key === 'Enter' || event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                event.preventDefault();
                this.onKeyDown(event);
            }
            return;
        }
        if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
            event.preventDefault();
            this.triggerClicked();
        }
    }
    chipCloseClicked(value) {
        this.chipClose.emit(value);
    }
    // ---------- Virtuelles Scrolling: Zustand kommt aus items und dem Wert, nicht aus MrdSelectOptionComponents ----------
    wertVon(item) {
        return Util.isDefined(item) && typeof item === 'object' ? item[this.identifier] : item;
    }
    labelVon(item) {
        if (!Util.isDefined(item)) {
            return '';
        }
        if (Util.isDefined(this.displayWith)) {
            return this.displayWith(item) ?? '';
        }
        if (typeof item !== 'object') {
            return String(item);
        }
        const label = item[this.labelKey];
        return Util.isDefined(label) ? String(label) : '';
    }
    istVirtuellAusgewaehlt(item) {
        return this.virtuelleAuswahl.has(this.wertVon(item));
    }
    virtuelleOptionGeklickt(item) {
        const wert = this.wertVon(item);
        this.searchText = '';
        this.virtuellFiltern('');
        if (!this.multiple) {
            if (Util.isDefined(this.formControl) && this.formControl.value !== wert) {
                this.formControl.setValue(wert);
            }
            else if (this.standalone && this.value !== wert) {
                this.value = wert;
            }
            this.showOptions.value = false;
        }
        else {
            const auswahl = new Set(this.virtuelleAuswahl);
            if (auswahl.has(wert)) {
                auswahl.delete(wert);
            }
            else {
                auswahl.add(wert);
            }
            this.virtuelleWerteSetzen(this.items.map(i => this.wertVon(i)).filter(w => auswahl.has(w)));
            if (this.closeOnSelect) {
                this.showOptions.value = false;
            }
        }
        this.cdr.detectChanges();
    }
    virtuellenChipSchliessen(item) {
        const wert = this.wertVon(item);
        this.virtuelleWerteSetzen(Array.from(this.virtuelleAuswahl).filter(w => w !== wert));
        this.chipCloseClicked(wert);
        this.cdr.detectChanges();
    }
    /** Nur fuer `multiple` */
    virtuelleWerteSetzen(werte) {
        const neuerWert = werte.length === 0 ? null : werte;
        if (Util.isDefined(this.formControl)) {
            this.formControl.setValue(neuerWert);
        }
        if (this.standalone) {
            this.value = neuerWert;
        }
        if (Util.isDefined(this.formArrayControl)) {
            this.formArrayAbgleichen(werte.map(w => this.items.find(item => this.wertVon(item) === w)).filter(item => Util.isDefined(item)));
        }
    }
    ausgewaehlteWerteLesen() {
        let wert;
        if (Util.isDefined(this.formArrayControl)) {
            return (this.formArrayControl.value || []).map(eintrag => eintrag?.[this.identifier]);
        }
        else if (Util.isDefined(this.formControl)) {
            wert = this.formControl.value;
        }
        else {
            wert = this.value;
        }
        if (!Util.isDefined(wert)) {
            return [];
        }
        return this.multiple && Array.isArray(wert) ? wert : [wert];
    }
    /** @param rendern Sofort rendern; im Input-Setter nicht noetig, weil die Change Detection ohnehin folgt */
    virtuelleAnzeigeAktualisieren(rendern) {
        if (this.autoComplete) {
            this.showValue = Util.isDefined(this.formControl) ? this.formControl.value : this.value;
            this.virtuellFiltern(this.showValue);
        }
        else {
            const werte = this.ausgewaehlteWerteLesen();
            this.virtuelleAuswahl = new Set(werte);
            this.virtuelleAusgewaehlteItems = werte
                .map(w => this.items.find(item => this.wertVon(item) === w))
                .filter(item => Util.isDefined(item));
            this.showValue = this.virtuelleAusgewaehlteItems.map(item => this.labelVon(item)).join(', ');
        }
        this.cdr.markForCheck();
        if (rendern) {
            this.cdr.detectChanges();
        }
    }
    virtuellFiltern(text) {
        const suche = (text || '').toLowerCase();
        this.gefilterteItems = suche.length === 0
            ? this.items
            : this.items.filter(item => this.labelVon(item).toLowerCase().indexOf(suche) > -1);
        this.fokusIndex = suche.length > 0 && this.gefilterteItems.length > 0 ? 0 : -1;
        // Feld statt Setter, damit hier (auch aus dem items-Setter heraus) keine Change Detection angestossen wird
        this._showNoOptionsOnSearch = suche.length > 0 && this.gefilterteItems.length === 0;
    }
    virtuelleTasteVerarbeiten(event) {
        const anzahl = this.gefilterteItems.length;
        if (anzahl === 0) {
            return;
        }
        if (event.key === 'Enter') {
            if (this.fokusIndex >= 0 && this.fokusIndex < anzahl) {
                this.virtuelleOptionGeklickt(this.gefilterteItems[this.fokusIndex]);
            }
            return;
        }
        if (event.key === 'ArrowDown') {
            this.fokusIndex = Math.min(anzahl - 1, this.fokusIndex + 1);
        }
        else if (event.key === 'ArrowUp') {
            this.fokusIndex = this.fokusIndex < 0 ? anzahl - 1 : Math.max(0, this.fokusIndex - 1);
        }
        else {
            return;
        }
        this.virtuellesScroll?.scrollToIndex(this.fokusIndex);
        this.cdr.markForCheck();
    }
    get optionsMinWidth() {
        return this.selectContainer ? `${this.selectContainer.nativeElement.getBoundingClientRect().width}px` : 'auto';
    }
    /** @nocollapse */ static ɵfac = function MrdSelectComponent_Factory(t) { return new (t || MrdSelectComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdSelectComponent, selectors: [["mrd-select"]], contentQueries: function MrdSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, MrdSelectCustomTriggerComponent, 5);
            i0.ɵɵcontentQuery(dirIndex, MrdSelectOptionTemplateDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, MrdSelectOptionComponent, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.customTrigger = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.optionTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.options = _t);
        } }, viewQuery: function MrdSelectComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(MrdVirtualScrollComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectContainer = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchSelectionInput = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.virtuellesScroll = _t.first);
        } }, inputs: { formControl: ["mrdFormControl", "formControl"], formArrayControl: ["mrdFormArray", "formArrayControl"], value: "value", identifier: "identifier", items: "items", virtualScroll: ["virtualScroll", "virtualScroll", booleanAttribute], labelKey: "labelKey", displayWith: "displayWith", itemSize: ["itemSize", "itemSize", itemSizeAttribute], virtualScrollMaxHeight: ["virtualScrollMaxHeight", "virtualScrollMaxHeight", numberAttribute], autoComplete: ["autoComplete", "autoComplete", booleanAttribute], searchSelection: ["searchSelection", "searchSelection", booleanAttribute], chipSelection: ["chipSelection", "chipSelection", booleanAttribute], nullable: ["nullable", "nullable", booleanAttribute], multiple: ["multiple", "multiple", booleanAttribute], closeOnSelect: ["closeOnSelect", "closeOnSelect", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], chipPrefixIcon: "chipPrefixIcon", chipSuffixIcon: "chipSuffixIcon", showOptions: "showOptions", smoothScroll: ["smoothScroll", "smoothScroll", booleanAttribute], searchAutofocus: ["searchAutofocus", "searchAutofocus", booleanAttribute] }, outputs: { touched: "touched", focused: "focused", blurred: "blurred", chipClose: "chipClose", valueChange: "valueChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c5, decls: 5, vars: 10, consts: [[1, "mrd-select-container", 3, "ngClass"], ["selectContainer", ""], [4, "ngIf"], ["cdk-connected-overlay", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", "cdkConnectedOverlayPanelClass", "mrd-select-options-overlay", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "backdropClick"], [3, "value", "click", "input", "keydown"], [1, "mrd-select-trigger", 3, "click", "focus", "blur", "keydown"], ["showIfTruncated", "", 3, "mrdToolTip"], ["fill", "currentColor", "width", "14px", "height", "14px", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke", "#CCCCCC", "stroke-width", "0.048"], ["id", "SVGRepo_iconCarrier"], ["d", "M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"], [1, "mrd-chip-container"], ["class", "mrd-chip-values", 4, "ngIf"], [1, "mrd-chip-values"], [1, "mrd-select-trigger-chip", 3, "click", "focus", "blur", "keydown"], [3, "prefixIcon", "suffixIcon", "disabled", "close", 4, "ngFor", "ngForOf"], [3, "prefixIcon", "suffixIcon", "disabled", "close"], [1, "mrd-select-options-container"], ["class", "mrd-select-search-option", "noCheckbox", "", 4, "ngIf"], [1, "mrd-select-options-scroll"], ["noCheckbox", "", 3, "value", "optionClicked", 4, "ngIf"], ["noCheckbox", "", 4, "ngIf"], [3, "items", "itemSize", "maxHeight", "trackBy", 4, "ngIf"], ["noCheckbox", "", 1, "mrd-select-search-option"], ["placeholder", "Suche", 3, "value", "input", "click", "keydown"], ["searchSelectionInput", ""], ["noCheckbox", "", 3, "value", "optionClicked"], ["noCheckbox", ""], [3, "items", "itemSize", "maxHeight", "trackBy"], ["mrdVirtualScrollItem", ""], [1, "mrd-select-option-virtuell", 3, "value", "selected", "focused", "optionClicked"], [4, "ngIf", "ngIfElse"], ["virtuellesLabel", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function MrdSelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c3);
            i0.ɵɵelementStart(0, "div", 0, 1);
            i0.ɵɵtemplate(2, MrdSelectComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
            i0.ɵɵtemplate(3, MrdSelectComponent_ng_container_3_Template, 3, 2, "ng-container", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, MrdSelectComponent_ng_template_4_Template, 7, 6, "ng-template", 3);
            i0.ɵɵlistener("backdropClick", function MrdSelectComponent_Template_ng_template_backdropClick_4_listener() { return ctx.showOptions.value = false; });
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c4, (ctx.formControl == null ? null : ctx.formControl.disabled) || (ctx.formArrayControl == null ? null : ctx.formArrayControl.disabled) || ctx.disabled));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.autoComplete);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.autoComplete);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.showOptions.value)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayMinWidth", ctx.optionsMinWidth);
        } }, styles: ["[_nghost-%COMP%]{width:100%}input[_ngcontent-%COMP%]{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-trigger[_ngcontent-%COMP%]{display:flex;height:1.5em;width:100%;cursor:pointer;padding-left:2px;flex-direction:row;align-items:center}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-trigger[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.25em}.mrd-select-container[_ngcontent-%COMP%]   .mrd-select-trigger[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{margin-right:8px}.mrd-select-container[_ngcontent-%COMP%]   .mrd-chip-container[_ngcontent-%COMP%]{margin-top:4px}.mrd-select-container[_ngcontent-%COMP%]   .mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-values[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:8px}.mrd-select-container[_ngcontent-%COMP%]   .mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-values[_ngcontent-%COMP%]   .mrd-select-trigger-chip[_ngcontent-%COMP%]{display:flex;height:1.5em;min-width:24px;max-width:100%;flex:1 1 24px;cursor:pointer;padding-left:2px;flex-direction:row;align-items:center;justify-content:flex-end}.mrd-select-container[_ngcontent-%COMP%]   .mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-values[_ngcontent-%COMP%]   .mrd-select-trigger-chip[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{margin-right:8px}.mrd-select-container.mrd-select-disabled[_ngcontent-%COMP%]   .mrd-select-trigger[_ngcontent-%COMP%], .mrd-select-container.mrd-select-disabled[_ngcontent-%COMP%]   .mrd-select-trigger-chip[_ngcontent-%COMP%]{color:#afa6a6;cursor:inherit}  .cdk-overlay-pane.mrd-select-options-overlay .mrd-select-options-container{display:flex;flex-direction:column;width:100%;background-color:#fff;border-radius:.375rem;overflow:hidden;--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)),var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)),var(--tw-shadow)}  .cdk-overlay-pane.mrd-select-options-overlay .mrd-select-options-container .mrd-select-search-option{border-bottom:1px solid rgba(0,0,0,.2196078431)}  .cdk-overlay-pane.mrd-select-options-overlay .mrd-select-options-container .mrd-select-options-scroll{overflow-y:auto;max-height:15em}  .cdk-overlay-pane.mrd-select-options-overlay .mrd-select-options-container .mrd-select-options-scroll.mrd-select-options-scroll-virtuell{overflow-y:visible;max-height:none}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdSelectComponent, [{
        type: Component,
        args: [{ selector: 'mrd-select', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div #selectContainer class=\"mrd-select-container\" [ngClass]=\"{'mrd-select-disabled': formControl?.disabled || formArrayControl?.disabled || disabled}\">\n  <ng-container *ngIf=\"autoComplete\">\n    <input\n    (click)=\"triggerClicked()\"\n    [value]=\"showValue\"\n    (input)=\"autoCompleteInput($event)\"\n    (keydown)=\"onKeyDown($event)\"\n  >\n  </ng-container>\n\n  <ng-container *ngIf=\"!autoComplete\">\n    <ng-container *ngIf=\"customTrigger\">\n      <ng-content select=\"mrd-select-custom-trigger\"></ng-content>\n    </ng-container>\n    <ng-container *ngIf=\"!customTrigger\">\n      <ng-container *ngIf=\"!chipSelection\">\n        <div class=\"mrd-select-trigger\" (click)=\"triggerClicked()\" [attr.tabindex]=\"triggerTabIndex\" (focus)=\"onTriggerFocus()\" (blur)=\"onTriggerBlur()\" (keydown)=\"onTriggerKeyDown($event)\">\n          <span [mrdToolTip]=\"showValue\" showIfTruncated>{{showValue}}</span>\n          <svg fill=\"currentColor\" width=\"14px\" height=\"14px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\n            <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#CCCCCC\" stroke-width=\"0.048\"></g>\n            <g id=\"SVGRepo_iconCarrier\"><path d=\"M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z\"></path></g>\n          </svg>\n        </div>\n      </ng-container>\n      <ng-container *ngIf=\"chipSelection\">\n        <div class=\"mrd-chip-container\">\n          <div class=\"mrd-chip-values\" *ngIf=\"chipSelection\">\n            <ng-container *ngIf=\"selectedOptions && selectedOptions.length > 0\">\n              <mrd-chip *ngFor=\"let option of selectedOptions\"\n                (close)=\"chipClosed(option)\"\n                [prefixIcon]=\"chipPrefixIcon\"\n                [suffixIcon]=\"chipSuffixIcon\"\n                [disabled]=\"formControl?.disabled || formArrayControl?.disabled || disabled\"\n                >{{option.optionLabel}}</mrd-chip>\n            </ng-container>\n            <ng-container *ngIf=\"virtualScroll\">\n              <mrd-chip *ngFor=\"let item of virtuelleAusgewaehlteItems\"\n                (close)=\"virtuellenChipSchliessen(item)\"\n                [prefixIcon]=\"chipPrefixIcon\"\n                [suffixIcon]=\"chipSuffixIcon\"\n                [disabled]=\"formControl?.disabled || formArrayControl?.disabled || disabled\"\n                >{{labelVon(item)}}</mrd-chip>\n            </ng-container>\n            <div class=\"mrd-select-trigger-chip\" (click)=\"triggerClicked()\" [attr.tabindex]=\"triggerTabIndex\" (focus)=\"onTriggerFocus()\" (blur)=\"onTriggerBlur()\" (keydown)=\"onTriggerKeyDown($event)\">\n              <svg fill=\"currentColor\" width=\"14px\" height=\"14px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n                <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\n                <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"#CCCCCC\" stroke-width=\"0.048\"></g>\n                <g id=\"SVGRepo_iconCarrier\"><path d=\"M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z\"></path></g>\n              </svg>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</div>\n\n<ng-template\n  cdk-connected-overlay\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\n  cdkConnectedOverlayPanelClass=\"mrd-select-options-overlay\"\n  [cdkConnectedOverlayOrigin]=\"selectContainer\"\n  [cdkConnectedOverlayOpen]=\"showOptions.value\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayMinWidth]=\"optionsMinWidth\"\n  (backdropClick)=\"showOptions.value = false\"\n>\n  <div class=\"mrd-select-options-container\">\n    <mrd-select-option *ngIf=\"searchSelection\" class=\"mrd-select-search-option\" noCheckbox>\n      <input\n        placeholder=\"Suche\"\n        [value]=\"searchText\"\n        (input)=\"searchInput($event)\"\n        (click)=\"$event.stopPropagation()\"\n        (keydown)=\"onKeyDown($event)\"\n        #searchSelectionInput\n      >\n      <ng-content select=\"[addButton]\"></ng-content>\n    </mrd-select-option>\n    <div class=\"mrd-select-options-scroll\" [class.mrd-select-options-scroll-virtuell]=\"virtualScroll\">\n      <mrd-select-option *ngIf=\"nullable\" noCheckbox [value]=\"null\" (optionClicked)=\"removeSelected()\">{{multiple ? 'Auswahl l\u00F6schen' : '-'}}</mrd-select-option>\n      <mrd-select-option *ngIf=\"searchSelection && searchText.length > 0 && showNoOptionsOnSearch\" noCheckbox>Keine Eintr\u00E4ge gefunden</mrd-select-option>\n      <ng-content select=\"mrd-select-option\"></ng-content>\n      <mrd-virtual-scroll *ngIf=\"virtualScroll\"\n        [items]=\"gefilterteItems\"\n        [itemSize]=\"itemSize\"\n        [maxHeight]=\"virtualScrollMaxHeight\"\n        [trackBy]=\"virtuellerTrackBy\">\n        <ng-template mrdVirtualScrollItem let-item let-i=\"index\">\n          <mrd-select-option class=\"mrd-select-option-virtuell\"\n            [value]=\"wertVon(item)\"\n            [selected]=\"istVirtuellAusgewaehlt(item)\"\n            [focused]=\"i === fokusIndex\"\n            (optionClicked)=\"virtuelleOptionGeklickt(item)\">\n            <ng-container *ngIf=\"optionTemplate; else virtuellesLabel\">\n              <ng-container *ngTemplateOutlet=\"optionTemplate.templateRef; context: {$implicit: item, index: i}\"></ng-container>\n            </ng-container>\n            <ng-template #virtuellesLabel>{{labelVon(item)}}</ng-template>\n          </mrd-select-option>\n        </ng-template>\n      </mrd-virtual-scroll>\n    </div>\n  </div>\n</ng-template>", styles: [":host{width:100%}input{width:100%;height:1.5em;outline:none;padding:0 8px;background-color:transparent}.mrd-select-container .mrd-select-trigger{display:flex;height:1.5em;width:100%;cursor:pointer;padding-left:2px;flex-direction:row;align-items:center}.mrd-select-container .mrd-select-trigger>span{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.25em}.mrd-select-container .mrd-select-trigger>svg{margin-right:8px}.mrd-select-container .mrd-chip-container{margin-top:4px}.mrd-select-container .mrd-chip-container .mrd-chip-values{display:flex;flex-direction:row;flex-wrap:wrap;gap:8px}.mrd-select-container .mrd-chip-container .mrd-chip-values .mrd-select-trigger-chip{display:flex;height:1.5em;min-width:24px;max-width:100%;flex:1 1 24px;cursor:pointer;padding-left:2px;flex-direction:row;align-items:center;justify-content:flex-end}.mrd-select-container .mrd-chip-container .mrd-chip-values .mrd-select-trigger-chip>svg{margin-right:8px}.mrd-select-container.mrd-select-disabled .mrd-select-trigger,.mrd-select-container.mrd-select-disabled .mrd-select-trigger-chip{color:#afa6a6;cursor:inherit}::ng-deep .cdk-overlay-pane.mrd-select-options-overlay .mrd-select-options-container{display:flex;flex-direction:column;width:100%;background-color:#fff;border-radius:.375rem;overflow:hidden;--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)),var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)),var(--tw-shadow)}::ng-deep .cdk-overlay-pane.mrd-select-options-overlay .mrd-select-options-container .mrd-select-search-option{border-bottom:1px solid rgba(0,0,0,.2196078431)}::ng-deep .cdk-overlay-pane.mrd-select-options-overlay .mrd-select-options-container .mrd-select-options-scroll{overflow-y:auto;max-height:15em}::ng-deep .cdk-overlay-pane.mrd-select-options-overlay .mrd-select-options-container .mrd-select-options-scroll.mrd-select-options-scroll-virtuell{overflow-y:visible;max-height:none}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { selectContainer: [{
            type: ViewChild,
            args: ['selectContainer']
        }], searchSelectionInput: [{
            type: ViewChild,
            args: ['searchSelectionInput']
        }], options: [{
            type: ContentChildren,
            args: [MrdSelectOptionComponent]
        }], customTrigger: [{
            type: ContentChild,
            args: [MrdSelectCustomTriggerComponent]
        }], optionTemplate: [{
            type: ContentChild,
            args: [MrdSelectOptionTemplateDirective]
        }], virtuellesScroll: [{
            type: ViewChild,
            args: [MrdVirtualScrollComponent]
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
        }], virtualScroll: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], labelKey: [{
            type: Input
        }], displayWith: [{
            type: Input
        }], itemSize: [{
            type: Input,
            args: [{ transform: itemSizeAttribute }]
        }], virtualScrollMaxHeight: [{
            type: Input,
            args: [{ transform: numberAttribute }]
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
        }], chipPrefixIcon: [{
            type: Input
        }], chipSuffixIcon: [{
            type: Input
        }], showOptions: [{
            type: Input
        }], smoothScroll: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], searchAutofocus: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], touched: [{
            type: Output
        }], focused: [{
            type: Output
        }], blurred: [{
            type: Output
        }], chipClose: [{
            type: Output
        }], valueChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWZvcm0tZmllbGQvY29tcG9uZW50cy9tcmQtc2VsZWN0L21yZC1zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLXNlbGVjdC9tcmQtc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBbUMsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUE4QixTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pSLE9BQU8sRUFBbUUsc0JBQXNCLEVBQTBCLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDdkwsT0FBTyxFQUF5Qix3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ25ILE9BQU8sRUFBYyxPQUFPLEVBQWdCLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUVuSCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUMvRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3RkFBd0YsQ0FBQztBQUVuSSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQzs7Ozs7O0lDUnBHLDZCQUFtQztJQUNqQyxnQ0FLRDtJ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O2tCQUExQixLQUFLO1lBQ3VDLFlBQVk7a0JBQXhELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFUyxlQUFlO2tCQUEzRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBRTFCLE9BQU87a0JBQWhCLE1BQU07WUFDRyxPQUFPO2tCQUFoQixNQUFNO1lBQ0csT0FBTztrQkFBaEIsTUFBTTtZQVFHLFNBQVM7a0JBQWxCLE1BQU07WUFHRyxXQUFXO2tCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgQ29udGVudENoaWxkcmVuLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgUXVlcnlMaXN0LCBUcmFja0J5RnVuY3Rpb24sIFZpZXdDaGlsZCwgYm9vbGVhbkF0dHJpYnV0ZSwgbnVtYmVyQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjY2Vzc2FibGVGb3JtQXJyYXksIEFjY2Vzc2FibGVGb3JtQ29udHJvbCwgQWNjZXNzYWJsZUZvcm1Hcm91cCwgQmFzZVB1c2hTdHJhdGVneU9iamVjdCwgSUFjY2Vzc2FibGVGb3JtQ29udHJvbCwgT2JzZXJ2YWJsZVZhbHVlLCBTdWJzY3JpcHRpb25IYW5kbGVyLCBVdGlsIH0gZnJvbSAnbXJkLWNvcmUnO1xyXG5pbXBvcnQgeyBNcmRTZWxlY3RPcHRpb25DaGFuZ2UsIE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL21yZC1zZWxlY3Qtb3B0aW9uL21yZC1zZWxlY3Qtb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiwgZGVmZXIsIG1lcmdlLCBzdGFydFdpdGgsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNcmRTZWxlY3RDdXN0b21UcmlnZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vbXJkLXNlbGVjdC1jdXN0b20tdHJpZ2dlci9tcmQtc2VsZWN0LWN1c3RvbS10cmlnZ2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbm5lY3RlZFBvc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBNcmRTZWxlY3RPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9kaXJlY3RpdmUvbXJkLXNlbGVjdC1vcHRpb24tdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTXJkVmlydHVhbFNjcm9sbENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21yZC12aXJ0dWFsLXNjcm9sbC9jb21wb25lbnRzL21yZC12aXJ0dWFsLXNjcm9sbC9tcmQtdmlydHVhbC1zY3JvbGwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXJkVmlydHVhbFNjcm9sbEl0ZW1TaXplIH0gZnJvbSAnLi4vLi4vLi4vbXJkLXZpcnR1YWwtc2Nyb2xsL2NvbW1vbi9tb2RlbC9tcmQtdmlydHVhbC1zY3JvbGwubW9kZWwnO1xyXG5pbXBvcnQgeyBpdGVtU2l6ZUF0dHJpYnV0ZSB9IGZyb20gJy4uLy4uLy4uL21yZC12aXJ0dWFsLXNjcm9sbC9jb21tb24vdHJhbnNmb3Jtcy9pdGVtLXNpemUtdHJhbnNmb3JtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC1zZWxlY3QuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgQmFzZVB1c2hTdHJhdGVneU9iamVjdCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3NlbGVjdENvbnRhaW5lcicpIHNlbGVjdENvbnRhaW5lcj86IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaFNlbGVjdGlvbklucHV0Jykgc2VhcmNoU2VsZWN0aW9uSW5wdXQ/OiBFbGVtZW50UmVmO1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudCkgb3B0aW9ucz86IFF1ZXJ5TGlzdDxNcmRTZWxlY3RPcHRpb25Db21wb25lbnQ+O1xyXG5cclxuICBAQ29udGVudENoaWxkKE1yZFNlbGVjdEN1c3RvbVRyaWdnZXJDb21wb25lbnQpIGN1c3RvbVRyaWdnZXI/OiBNcmRTZWxlY3RDdXN0b21UcmlnZ2VyQ29tcG9uZW50O1xyXG5cclxuICBAQ29udGVudENoaWxkKE1yZFNlbGVjdE9wdGlvblRlbXBsYXRlRGlyZWN0aXZlKSBvcHRpb25UZW1wbGF0ZT86IE1yZFNlbGVjdE9wdGlvblRlbXBsYXRlRGlyZWN0aXZlO1xyXG5cclxuICBAVmlld0NoaWxkKE1yZFZpcnR1YWxTY3JvbGxDb21wb25lbnQpIHZpcnR1ZWxsZXNTY3JvbGw/OiBNcmRWaXJ0dWFsU2Nyb2xsQ29tcG9uZW50O1xyXG5cclxuICBwcml2YXRlIF9pbml0aWFsaXplZCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcmVhZG9ubHkgb3B0aW9uU2VsZWN0aW9uQ2hhbmdlczogT2JzZXJ2YWJsZTxhbnk+ID0gZGVmZXIoKCkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHJcbiAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gb3B0aW9ucy5jaGFuZ2VzLnBpcGUoXHJcbiAgICAgICAgc3RhcnRXaXRoKG9wdGlvbnMpLFxyXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiBtZXJnZSguLi5vcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLm9wdGlvbkNsaWNrZWQpKSksXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2luaXRpYWxpemVkLnBpcGUoc3dpdGNoTWFwKCgpID0+IHRoaXMub3B0aW9uU2VsZWN0aW9uQ2hhbmdlcykpO1xyXG4gIH0pO1xyXG5cclxuICBASW5wdXQoJ21yZEZvcm1Db250cm9sJykgZm9ybUNvbnRyb2w/OiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2w7XHJcbiAgQElucHV0KCdtcmRGb3JtQXJyYXknKSBmb3JtQXJyYXlDb250cm9sPzogQWNjZXNzYWJsZUZvcm1BcnJheTxhbnk+O1xyXG4gIEBJbnB1dCgpIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLnN0YW5kYWxvbmUgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuX3ZhbHVlID09PSB2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICB9XHJcbiAgcHVibGljIGdldCB2YWx1ZSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuICBwcml2YXRlIF92YWx1ZTogYW55O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpZGVudGlmaWVyOiBzdHJpbmcgPSAnaWQnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgaXRlbXModmFsdWU6IGFueVtdKSB7XHJcbiAgICB0aGlzLl9pdGVtcyA9IHZhbHVlIHx8IFtdO1xyXG4gICAgaWYgKHRoaXMudmlydHVhbFNjcm9sbCAmJiB0aGlzLnZpcnR1ZWxsSW5pdGlhbGlzaWVydCkge1xyXG4gICAgICB0aGlzLnZpcnR1ZWxsRmlsdGVybih0aGlzLmF1dG9Db21wbGV0ZSA/IHRoaXMuc2hvd1ZhbHVlIDogdGhpcy5zZWFyY2hUZXh0KTtcclxuICAgICAgdGhpcy52aXJ0dWVsbGVBbnplaWdlQWt0dWFsaXNpZXJlbihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgaXRlbXMoKTogYW55W10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xyXG4gIH1cclxuICBwcml2YXRlIF9pdGVtczogYW55W10gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVuZGVydCBudXIgZGllIHNpY2h0YmFyZW4gT3B0aW9uZW4uIERpZSBPcHRpb25lbiBrb21tZW4gZGFubiBhdXMgYFtpdGVtc11gIHN0YXR0IGF1cyBgPG1yZC1zZWxlY3Qtb3B0aW9uPmA7XHJcbiAgICogV2VydCBpc3QgYGl0ZW1baWRlbnRpZmllcl1gLCBhbmdlemVpZ3Qgd2lyZCBgZGlzcGxheVdpdGgoaXRlbSlgIGJ6dy4gYGl0ZW1bbGFiZWxLZXldYCBvZGVyIGVpbiBgPG5nLXRlbXBsYXRlIG1yZFNlbGVjdE9wdGlvbj5gLlxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHZpcnR1YWxTY3JvbGw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKiogTnVyIG1pdCBgdmlydHVhbFNjcm9sbGAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbGFiZWxLZXk6IHN0cmluZyA9ICdiZXplaWNobnVuZyc7XHJcbiAgLyoqIE51ciBtaXQgYHZpcnR1YWxTY3JvbGxgOyBoYXQgVm9ycmFuZyB2b3IgYGxhYmVsS2V5YCAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNwbGF5V2l0aD86IChpdGVtOiBhbnkpID0+IHN0cmluZztcclxuICAvKiogTnVyIG1pdCBgdmlydHVhbFNjcm9sbGA6IEhvZWhlIGVpbmVyIE9wdGlvbiBpbiBweCwgZnVlciBhbGxlIGdsZWljaCBvZGVyIGAoaXRlbSwgaW5kZXgpID0+IHB4YCBqZSBPcHRpb24gKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogaXRlbVNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgaXRlbVNpemU/OiBNcmRWaXJ0dWFsU2Nyb2xsSXRlbVNpemU7XHJcbiAgLyoqIE51ciBtaXQgYHZpcnR1YWxTY3JvbGxgOiBtYXhpbWFsZSBIb2VoZSBkZXIgT3B0aW9uc2xpc3RlIGluIHB4ICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyB2aXJ0dWFsU2Nyb2xsTWF4SGVpZ2h0OiBudW1iZXIgPSAyNDA7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgYXV0b0NvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBzZWFyY2hTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGNoaXBTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIG51bGxhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KVxyXG4gIHNldCBtdWx0aXBsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fbXVsdGlwbGUgPSB2YWx1ZTtcclxuICB9XHJcbiAgZ2V0IG11bHRpcGxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xyXG4gIH1cclxuICBwcml2YXRlIF9tdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgY2xvc2VPblNlbGVjdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIGNoaXBQcmVmaXhJY29uPzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjaGlwU3VmZml4SWNvbj86IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHNob3dPcHRpb25zOiBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj4gPSBuZXcgT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzbW9vdGhTY3JvbGw6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2VhcmNoQXV0b2ZvY3VzOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgQE91dHB1dCgpIHRvdWNoZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgZm9jdXNlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBibHVycmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50IHRoYXQgaXMgZW1pdHRlZCB3aGVuIHRoZSBjaGlwIGNsb3NlIGJ1dHRvbiBpcyBjbGlja2VkLlxyXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8dm9pZD59XHJcbiAgICogQG1lbWJlcm9mIE1yZFNlbGVjdENvbXBvbmVudFxyXG4gICAqIEByZXR1cm5zIFRoZSB2YWx1ZSBvZiB0aGUgY2hpcCB0aGF0IHdhcyBjbG9zZWQuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIGNoaXBDbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuXHJcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBwdWJsaWMgb3B0aW9uc1Zpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgX3Nob3dOb09wdGlvbnNPblNlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgc3RhbmRhbG9uZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgc2hvd1ZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBwdWJsaWMgc2VhcmNoVGV4dDogc3RyaW5nID0gJyc7XHJcblxyXG4gIHB1YmxpYyBvcHRpb25zV2lkdGhFeGNlZWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBvcHRpb25zSGVpZ2h0RXhjZWVkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBvcHRpb25DaGFuZ2VTdWJzY3JpcHRpb24/OiBTdWJzY3JpcHRpb247XHJcblxyXG4gIHB1YmxpYyBnZWZpbHRlcnRlSXRlbXM6IGFueVtdID0gW107XHJcbiAgcHVibGljIHZpcnR1ZWxsZUF1c2dld2FlaGx0ZUl0ZW1zOiBhbnlbXSA9IFtdO1xyXG4gIHB1YmxpYyBmb2t1c0luZGV4OiBudW1iZXIgPSAtMTtcclxuICBwcml2YXRlIHZpcnR1ZWxsZUF1c3dhaGw6IFNldDxhbnk+ID0gbmV3IFNldDxhbnk+KCk7XHJcbiAgcHJpdmF0ZSB2aXJ0dWVsbEluaXRpYWxpc2llcnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHJlYWRvbmx5IHZpcnR1ZWxsZXJUcmFja0J5OiBUcmFja0J5RnVuY3Rpb248YW55PiA9IChfOiBudW1iZXIsIGl0ZW06IGFueSkgPT4gdGhpcy53ZXJ0Vm9uKGl0ZW0pO1xyXG5cclxuXHJcbiAgX3Bvc2l0aW9uczogQ29ubmVjdGVkUG9zaXRpb25bXSA9IFtcclxuICAgIHtcclxuICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcclxuICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXHJcbiAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxyXG4gICAgICBvdmVybGF5WTogJ3RvcCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBvcmlnaW5YOiAnZW5kJyxcclxuICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXHJcbiAgICAgIG92ZXJsYXlYOiAnZW5kJyxcclxuICAgICAgb3ZlcmxheVk6ICd0b3AnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcclxuICAgICAgb3JpZ2luWTogJ3RvcCcsXHJcbiAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxyXG4gICAgICBvdmVybGF5WTogJ2JvdHRvbSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG9yaWdpblg6ICdlbmQnLFxyXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgb3ZlcmxheVg6ICdlbmQnLFxyXG4gICAgICBvdmVybGF5WTogJ2JvdHRvbSdcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy53YXRjaCh0aGlzLnNob3dPcHRpb25zLmNoYW5nZWQucGlwZShzdGFydFdpdGgodGhpcy5zaG93T3B0aW9ucy52YWx1ZSkpLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigodmFsdWU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuYmx1cihudWxsKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNlYXJjaFNlbGVjdGlvbiAmJiB0aGlzLnNlYXJjaEF1dG9mb2N1cykge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hTZWxlY3Rpb25JbnB1dD8ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICAgIH1cclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuX2luaXRpYWxpemVkLm5leHQobnVsbCk7XHJcbiAgICB0aGlzLl9pbml0aWFsaXplZC5jb21wbGV0ZSgpO1xyXG5cclxuICAgIHRoaXMud2F0Y2godGhpcy5vcHRpb25zIS5jaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKG51bGwpKSwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9yZXNldE9wdGlvbnMoKTtcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCkgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sLnZhbHVlKSkge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFZhbHVlcyA9ICh0aGlzLmZvcm1BcnJheUNvbnRyb2wudmFsdWUpLm1hcCh2YWx1ZSA9PiB2YWx1ZVt0aGlzLmlkZW50aWZpZXJdKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMhLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgIGlmIChzZWxlY3RlZFZhbHVlcy5pbmNsdWRlcyhvcHRpb24udmFsdWUpKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbENoYW5nZWQoKTtcclxuICAgICAgfVxyXG4gICAgfSkpO1xyXG5cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmN1c3RvbVRyaWdnZXIpKSB7XHJcbiAgICAgIHRoaXMud2F0Y2godGhpcy5jdXN0b21UcmlnZ2VyLnRyaWdnZXJDbGljaywgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlckNsaWNrZWQoKTtcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcyBrYW5uIG51ciBlaW4gRm9ybUNvbnRyb2wgb2RlciBlaW4gRm9ybUFycmF5Q29udHJvbCB2ZXJ3ZW5kZXQgd2VyZGVuLicpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhbmRhbG9uZSAmJiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgfHwgVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sKSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcyBrYW5uIG51ciBlaW4gTW9kZWwgb2RlciBlaW4gRm9ybUNvbnRyb2wvRm9ybUFycmF5Q29udHJvbCB2ZXJ3ZW5kZXQgd2VyZGVuLicpO1xyXG4gICAgfVxyXG4gICAgaWYgKChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSB8fCBVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wpKSAmJiB0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRWluIGRlYWt0aXZpZXJ0ZXMgU2VsZWN0IGthbm4gbmljaHQgbWl0IGVpbmVtIEZvcm1Db250cm9sIG9kZXIgRm9ybUFycmF5Q29udHJvbCB2ZXJ3ZW5kZXQgd2VyZGVuLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICB0aGlzLndhdGNoKHRoaXMuZm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoKSA9PiB0aGlzLmZvcm1Db250cm9sQ2hhbmdlZCgpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sKSkge1xyXG4gICAgICB0aGlzLndhdGNoKHRoaXMuZm9ybUFycmF5Q29udHJvbC52YWx1ZUNoYW5nZXMsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHRoaXMuZm9ybUFycmF5Q29udHJvbENoYW5nZWQoKSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhbmRhbG9uZSkge1xyXG4gICAgICB0aGlzLndhdGNoKHRoaXMudmFsdWVDaGFuZ2UsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHRoaXMubW9kZWxDaGFuZ2VkKCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zIS5maW5kKG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IHRoaXMuZm9ybUNvbnRyb2whLnZhbHVlKT8ub3B0aW9uQ2xpY2soKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlIGFzIGFueVtdO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyEuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWVzLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpIHtcclxuICAgICAgICAgICAgb3B0aW9uLm9wdGlvbkNsaWNrKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy52YWx1ZSkpIHtcclxuICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zIS5maW5kKG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IHRoaXMudmFsdWUpPy5vcHRpb25DbGljaygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFZhbHVlcyA9IHRoaXMudmFsdWUgYXMgYW55W107XHJcbiAgICAgICAgdGhpcy5vcHRpb25zIS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBvcHRpb24ub3B0aW9uQ2xpY2soKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFByw7xmZSwgb2Igc2hvd09wdGlvbnMgYmVyZWl0cyB0cnVlIGlzdCB1bmQgc2V0emUgZGVuIEZva3VzIGZhbGxzIG7DtnRpZ1xyXG4gICAgaWYgKHRoaXMuc2hvd09wdGlvbnMudmFsdWUgJiYgdGhpcy5zZWFyY2hTZWxlY3Rpb24gJiYgdGhpcy5zZWFyY2hBdXRvZm9jdXMpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hTZWxlY3Rpb25JbnB1dD8ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnZpcnR1YWxTY3JvbGwpIHtcclxuICAgICAgdGhpcy52aXJ0dWVsbEluaXRpYWxpc2llcnQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnZpcnR1ZWxsRmlsdGVybih0aGlzLmF1dG9Db21wbGV0ZSA/IHRoaXMuc2hvd1ZhbHVlIDogdGhpcy5zZWFyY2hUZXh0KTtcclxuICAgICAgdGhpcy52aXJ0dWVsbGVBbnplaWdlQWt0dWFsaXNpZXJlbih0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybUNvbnRyb2xDaGFuZ2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmlydHVhbFNjcm9sbCkge1xyXG4gICAgICB0aGlzLnZpcnR1ZWxsZUFuemVpZ2VBa3R1YWxpc2llcmVuKHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5hdXRvQ29tcGxldGUpIHtcclxuICAgICAgdGhpcy5zaG93VmFsdWUgPSB0aGlzLmZvcm1Db250cm9sIS52YWx1ZTtcclxuICAgICAgdGhpcy5vcHRpb25zIS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgb3B0aW9uLmZvY3VzZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKHRoaXMuc2hvd1ZhbHVlKSB8fCAob3B0aW9uLm9wdGlvblZhbHVlPy5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCB8fCAnJykudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2hvd1ZhbHVlPy50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgICBvcHRpb24uZmlsdGVyZWQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgb3B0aW9uLmZpbHRlcmVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5zaG93VmFsdWUpICYmIHRoaXMuc2hvd1ZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgZmlsdGVyZWRPcHRpb25zID0gdGhpcy5vcHRpb25zIS5maWx0ZXIob3B0aW9uID0+ICFvcHRpb24uZmlsdGVyZWQpO1xyXG4gICAgICAgIGlmIChmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgZmlsdGVyZWRPcHRpb25zWzBdLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dOb09wdGlvbnNPblNlYXJjaCA9IGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPT09IDA7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCEudmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy5zaG93VmFsdWUgPSAnJztcclxuICAgICAgICB0aGlzLm9wdGlvbnMhLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgIHRoaXMub3B0aW9ucyEuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gZmFsc2UpO1xyXG4gICAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMub3B0aW9ucyEuZmluZChvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSB0aGlzLmZvcm1Db250cm9sIS52YWx1ZSk7XHJcbiAgICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQob3B0aW9uKSkge1xyXG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dWYWx1ZSA9IG9wdGlvbi5vcHRpb25WYWx1ZT8ubmF0aXZlRWxlbWVudC5pbm5lclRleHQgfHwgJyc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBzZWxlY3RlZFZhbHVlcyA9IHRoaXMuZm9ybUNvbnRyb2whLnZhbHVlIGFzIGFueVtdO1xyXG4gICAgICAgICAgdGhpcy5vcHRpb25zIS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFZhbHVlcy5pbmNsdWRlcyhvcHRpb24udmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5vcHRpb25zIS5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCk7XHJcbiAgICAgICAgICB0aGlzLnNob3dWYWx1ZSA9IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDAgPyAnJyA6IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi5vcHRpb25WYWx1ZT8ubmF0aXZlRWxlbWVudC5pbm5lclRleHQgfHwgJycpLmpvaW4oJywgJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybUFycmF5Q29udHJvbENoYW5nZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52aXJ0dWFsU2Nyb2xsKSB7XHJcbiAgICAgIHRoaXMudmlydHVlbGxlQW56ZWlnZUFrdHVhbGlzaWVyZW4odHJ1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmF1dG9Db21wbGV0ZSkge1xyXG4gICAgICAvLyBUT0RPOiBJbXBsZW1lbnRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sIS5jb250cm9sLnZhbHVlKSB8fCAodGhpcy5mb3JtQXJyYXlDb250cm9sIS5jb250cm9sLnZhbHVlIGFzIGFueVtdKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0aGlzLnNob3dWYWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyEuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFZhbHVlcyA9ICh0aGlzLmZvcm1BcnJheUNvbnRyb2whLmNvbnRyb2wudmFsdWUgYXMgYW55W10pLm1hcCh2YWx1ZSA9PiB2YWx1ZVt0aGlzLmlkZW50aWZpZXJdKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMhLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgIGlmIChzZWxlY3RlZFZhbHVlcy5pbmNsdWRlcyhvcHRpb24udmFsdWUpKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5vcHRpb25zIS5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCk7XHJcbiAgICAgICAgdGhpcy5zaG93VmFsdWUgPSBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwID8gJycgOiBzZWxlY3RlZE9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24ub3B0aW9uVmFsdWU/Lm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0IHx8ICcnKS5qb2luKCcsICcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbW9kZWxDaGFuZ2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmlydHVhbFNjcm9sbCkge1xyXG4gICAgICB0aGlzLnZpcnR1ZWxsZUFuemVpZ2VBa3R1YWxpc2llcmVuKHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5hdXRvQ29tcGxldGUpIHtcclxuICAgICAgdGhpcy5zaG93VmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICB0aGlzLm9wdGlvbnMhLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICBvcHRpb24uZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICgob3B0aW9uLm9wdGlvblZhbHVlPy5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCB8fCAnJykudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2hvd1ZhbHVlPy50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgICBvcHRpb24uZmlsdGVyZWQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgb3B0aW9uLmZpbHRlcmVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAodGhpcy5zaG93VmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBmaWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMhLmZpbHRlcihvcHRpb24gPT4gIW9wdGlvbi5maWx0ZXJlZCk7XHJcbiAgICAgICAgaWYgKGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBmaWx0ZXJlZE9wdGlvbnNbMF0uZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd05vT3B0aW9uc09uU2VhcmNoID0gZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA9PT0gMDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLnZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMuc2hvd1ZhbHVlID0gJyc7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zIS5mb3JFYWNoKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnMhLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlKTtcclxuICAgICAgICAgIGxldCBvcHRpb24gPSB0aGlzLm9wdGlvbnMhLmZpbmQob3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gdGhpcy52YWx1ZSk7XHJcbiAgICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQob3B0aW9uKSkge1xyXG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dWYWx1ZSA9IG9wdGlvbi5vcHRpb25WYWx1ZT8ubmF0aXZlRWxlbWVudC5pbm5lclRleHQgfHwgJyc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBzZWxlY3RlZFZhbHVlcyA9IHRoaXMudmFsdWUgYXMgYW55W107XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnMhLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWVzLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMhLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKTtcclxuICAgICAgICAgIHRoaXMuc2hvd1ZhbHVlID0gc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCA/ICcnIDogc2VsZWN0ZWRPcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLm9wdGlvblZhbHVlPy5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCB8fCAnJykuam9pbignLCAnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcmVzZXRPcHRpb25zKCk6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMub3B0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uKSAmJiAhdGhpcy5vcHRpb25DaGFuZ2VTdWJzY3JpcHRpb24uY2xvc2VkKSB7XHJcbiAgICAgIHRoaXMub3B0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9wdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMud2F0Y2godGhpcy5vcHRpb25TZWxlY3Rpb25DaGFuZ2VzLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoZXZlbnQ6IE1yZFNlbGVjdE9wdGlvbkNoYW5nZSkgPT4ge1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQoZXZlbnQpKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnMhLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vcHRpb25zIS5mb3JFYWNoKG9wdGlvbiA9PiBvcHRpb24uZm9jdXNlZCA9IGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNlYXJjaFRleHQgPSAnJztcclxuICAgICAgICB0aGlzLm9wdGlvbnMhLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5maWx0ZXJlZCA9IGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNob3dOb09wdGlvbnNPblNlYXJjaCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChldmVudC5vcHRpb24pICYmICF0aGlzLmF1dG9Db21wbGV0ZSkge1xyXG4gICAgICAgICAgZXZlbnQub3B0aW9uLnNlbGVjdGVkID0gdGhpcy5tdWx0aXBsZSA/IChldmVudC5jaGVja2VkID8/IGZhbHNlKSA6IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgJiYgdGhpcy5mb3JtQ29udHJvbC52YWx1ZSAhPT0gZXZlbnQua2V5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoZXZlbnQua2V5KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGFuZGFsb25lICYmIHRoaXMudmFsdWUgIT09IGV2ZW50LmtleSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gZXZlbnQua2V5O1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93VmFsdWUgPSBldmVudC52YWx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuc2hvd09wdGlvbnMudmFsdWUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucyEuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQpO1xyXG4gICAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBzZWxlY3RlZE9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLnN0YW5kYWxvbmUpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDAgPyBudWxsIDogc2VsZWN0ZWRPcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybUFycmF5QWJnbGVpY2hlbihzZWxlY3RlZE9wdGlvbnMubWFwKG9wdGlvbiA9PiB0aGlzLml0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtW3RoaXMuaWRlbnRpZmllcl0gPT09IG9wdGlvbi52YWx1ZSkpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLmNsb3NlT25TZWxlY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93T3B0aW9ucy52YWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1BcnJheUFiZ2xlaWNoZW4oc2VsZWN0ZWRJdGVtczogYW55W10pOiB2b2lkIHtcclxuICAgIGlmIChzZWxlY3RlZEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmZvcm1BcnJheUNvbnRyb2whLnJlc2V0KFtdKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGl0ZW1JbmRpemVzVG9SZW1vdmU6IG51bWJlcltdID0gW107XHJcbiAgICBsZXQgaXRlbXNUb0FkZDogYW55W10gPSBzZWxlY3RlZEl0ZW1zLnNsaWNlKCk7XHJcbiAgICB0aGlzLmZvcm1BcnJheUNvbnRyb2whLmVudHJpZXMuZm9yRWFjaCgoZW50cnk6IElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LGFueT4sIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmICghVXRpbC5pc0RlZmluZWQoc2VsZWN0ZWRJdGVtcy5maW5kKGl0ZW0gPT4gaXRlbVt0aGlzLmlkZW50aWZpZXJdID09PSAoZW50cnkgYXMgQWNjZXNzYWJsZUZvcm1Hcm91cDxhbnksYW55PikuZmllbGRzW3RoaXMuaWRlbnRpZmllcl0udmFsdWUpKSkge1xyXG4gICAgICAgIGl0ZW1JbmRpemVzVG9SZW1vdmUucHVzaChpbmRleCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXRlbXNUb0FkZCA9IGl0ZW1zVG9BZGQuZmlsdGVyKGl0ZW0gPT4gaXRlbVt0aGlzLmlkZW50aWZpZXJdICE9PSAoZW50cnkgYXMgQWNjZXNzYWJsZUZvcm1Hcm91cDxhbnksYW55PikuZmllbGRzW3RoaXMuaWRlbnRpZmllcl0udmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGl0ZW1JbmRpemVzVG9SZW1vdmUucmV2ZXJzZSgpLmZvckVhY2goaW5kZXggPT4gdGhpcy5mb3JtQXJyYXlDb250cm9sIS5yZW1vdmVBdChpbmRleCwgZmFsc2UsIHtvbmx5U2VsZjogdHJ1ZX0pKTtcclxuICAgIGl0ZW1zVG9BZGQuZm9yRWFjaChpdGVtID0+IHRoaXMuZm9ybUFycmF5Q29udHJvbCEucHVzaChpdGVtKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlU2VsZWN0ZWQoKTogdm9pZCB7XHJcbiAgICAvLyB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gZmFsc2UpO1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XHJcbiAgICB9XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sKSkge1xyXG4gICAgICB0aGlzLmZvcm1BcnJheUNvbnRyb2wucmVzZXQoW10pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhbmRhbG9uZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgIH1cclxuICAgIC8vIHRoaXMuc2hvd1ZhbHVlID0gJyc7XHJcbiAgICBpZiAoIXRoaXMubXVsdGlwbGUgfHwgdGhpcy5jbG9zZU9uU2VsZWN0KSB7XHJcbiAgICAgIHRoaXMuc2hvd09wdGlvbnMudmFsdWUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGlwQ2xvc2VkKG9wdGlvbjogTXJkU2VsZWN0T3B0aW9uQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIGxldCBzZWxlY3RlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMhLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKTtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDAgPyBudWxsIDogc2VsZWN0ZWRPcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGFuZGFsb25lKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwID8gbnVsbCA6IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sKSkge1xyXG4gICAgICBsZXQgcmVtb3ZlZEluZGV4ID0gdGhpcy5mb3JtQXJyYXlDb250cm9sLmVudHJpZXMuZmluZEluZGV4KChlbnRyeTogSUFjY2Vzc2FibGVGb3JtQ29udHJvbDxhbnksYW55PikgPT4gKGVudHJ5IGFzIEFjY2Vzc2FibGVGb3JtR3JvdXA8YW55LGFueT4pLmZpZWxkc1t0aGlzLmlkZW50aWZpZXJdLnZhbHVlID09PSBvcHRpb24udmFsdWUpO1xyXG4gICAgICB0aGlzLmZvcm1BcnJheUNvbnRyb2wucmVtb3ZlQXQocmVtb3ZlZEluZGV4LCBmYWxzZSwge29ubHlTZWxmOiB0cnVlfSk7XHJcbiAgICAgIC8vIHRoaXMuZm9ybUFycmF5Q29udHJvbC5yZXNldChzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwID8gW10gOiBzZWxlY3RlZE9wdGlvbnMubWFwKG9wdGlvbiA9PiB0aGlzLml0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtW3RoaXMuaWRlbnRpZmllcl0gPT09IG9wdGlvbi52YWx1ZSkpKTtcclxuICAgIH1cclxuICAgIC8vIHRoaXMuc2hvd1ZhbHVlID0gc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCA/ICcnIDogc2VsZWN0ZWRPcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLm9wdGlvblZhbHVlPy5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCB8fCAnJykuam9pbignLCAnKTtcclxuICAgIHRoaXMuY2hpcENsb3NlQ2xpY2tlZChvcHRpb24udmFsdWUpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGF1dG9Db21wbGV0ZUlucHV0KGV2ZW50OiBJbnB1dEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZSgoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YW5kYWxvbmUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLnNob3dWYWx1ZSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICAvLyB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgLy8gICBvcHRpb24uZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgLy8gICBpZiAoKG9wdGlvbi5vcHRpb25WYWx1ZT8ubmF0aXZlRWxlbWVudC5pbm5lclRleHQgfHwgJycpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNob3dWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAvLyAgICAgb3B0aW9uLmZpbHRlcmVkID0gZmFsc2U7XHJcbiAgICAvLyAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgb3B0aW9uLmZpbHRlcmVkID0gdHJ1ZTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyBpZiAodGhpcy5zaG93VmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgLy8gICBsZXQgZmlsdGVyZWRPcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gIW9wdGlvbi5maWx0ZXJlZCk7XHJcbiAgICAvLyAgIGlmIChmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgLy8gICAgIGZpbHRlcmVkT3B0aW9uc1swXS5mb2N1c2VkID0gdHJ1ZTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gICB0aGlzLnNob3dOb09wdGlvbnNPblNlYXJjaCA9IGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPT09IDA7XHJcbiAgICAvLyB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWFyY2hJbnB1dChldmVudDogSW5wdXRFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIGlmICh0aGlzLnZpcnR1YWxTY3JvbGwpIHtcclxuICAgICAgdGhpcy52aXJ0dWVsbEZpbHRlcm4odGhpcy5zZWFyY2hUZXh0KTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMub3B0aW9ucyEuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICBvcHRpb24uZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICBpZiAoKG9wdGlvbi5vcHRpb25WYWx1ZT8ubmF0aXZlRWxlbWVudC5pbm5lclRleHQgfHwgJycpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNlYXJjaFRleHQudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgIG9wdGlvbi5maWx0ZXJlZCA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9wdGlvbi5maWx0ZXJlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMuc2VhcmNoVGV4dC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBmaWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMhLmZpbHRlcihvcHRpb24gPT4gIW9wdGlvbi5maWx0ZXJlZCk7XHJcbiAgICAgIGlmIChmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZpbHRlcmVkT3B0aW9uc1swXS5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNob3dOb09wdGlvbnNPblNlYXJjaCA9IGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZpcnR1YWxTY3JvbGwpIHtcclxuICAgICAgdGhpcy52aXJ0dWVsbGVUYXN0ZVZlcmFyYmVpdGVuKGV2ZW50KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGZpbHRlcmVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucyEuZmlsdGVyKG9wdGlvbiA9PiAhb3B0aW9uLmZpbHRlcmVkKTtcclxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gZmlsdGVyZWRPcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi5mb2N1c2VkKTtcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHNlbGVjdGVkT3B0aW9uKSkge1xyXG4gICAgICAgIHNlbGVjdGVkT3B0aW9uLm9wdGlvbkNsaWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgIGxldCBmb2N1c2VkT3B0aW9uID0gZmlsdGVyZWRPcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi5mb2N1c2VkKTtcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKGZvY3VzZWRPcHRpb24pKSB7XHJcbiAgICAgICAgbGV0IGZvY3VzZWRPcHRpb25JbmRleCA9IGZpbHRlcmVkT3B0aW9ucy5maW5kSW5kZXgoKG9wdGlvbikgPT4gb3B0aW9uLmZvY3VzZWQpO1xyXG4gICAgICAgIGlmIChmb2N1c2VkT3B0aW9uSW5kZXggPiAtMSAmJiBmb2N1c2VkT3B0aW9uSW5kZXggPCBmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoIC0gMikge1xyXG4gICAgICAgICAgZm9jdXNlZE9wdGlvbi5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgICBmaWx0ZXJlZE9wdGlvbnNbZm9jdXNlZE9wdGlvbkluZGV4ICsgMV0uZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbHRlcmVkT3B0aW9uc1swXS5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICBsZXQgZm9jdXNlZE9wdGlvbiA9IGZpbHRlcmVkT3B0aW9ucy5maW5kKG9wdGlvbiA9PiBvcHRpb24uZm9jdXNlZCk7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChmb2N1c2VkT3B0aW9uKSkge1xyXG4gICAgICAgIGxldCBmb2N1c2VkT3B0aW9uSW5kZXggPSBmaWx0ZXJlZE9wdGlvbnMuZmluZEluZGV4KChvcHRpb24pID0+IG9wdGlvbi5mb2N1c2VkKTtcclxuICAgICAgICBpZiAoZm9jdXNlZE9wdGlvbkluZGV4ID4gMCkge1xyXG4gICAgICAgICAgZm9jdXNlZE9wdGlvbi5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgICBmaWx0ZXJlZE9wdGlvbnNbZm9jdXNlZE9wdGlvbkluZGV4IC0gMV0uZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbHRlcmVkT3B0aW9uc1tmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoIC0gMV0uZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdHJpZ2dlckNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICBpZiAoKCFVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSB8fCAhdGhpcy5mb3JtQ29udHJvbC5kaXNhYmxlZCkgJiYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wpIHx8ICF0aGlzLmZvcm1BcnJheUNvbnRyb2wuZGlzYWJsZWQpICYmICghdGhpcy5zdGFuZGFsb25lIHx8ICF0aGlzLmRpc2FibGVkKSkge1xyXG4gICAgICB0aGlzLnRvdWNoZWQuZW1pdCgpO1xyXG4gICAgICB0aGlzLmZvY3VzZWQuZW1pdCgpO1xyXG4gICAgICB0aGlzLnNob3dPcHRpb25zLnZhbHVlID0gdHJ1ZTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMudmlydHVhbFNjcm9sbCkge1xyXG4gICAgICAgICAgLy8gRGllIGF1c2dld2FlaGx0ZSBPcHRpb24gaXN0IGV2dGwuIG5pY2h0IGdlcmVuZGVydCwgZGFoZXIgdWViZXIgZGVuIEluZGV4IHNjcm9sbGVuXHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2VmaWx0ZXJ0ZUl0ZW1zLmZpbmRJbmRleChpdGVtID0+IHRoaXMudmlydHVlbGxlQXVzd2FobC5oYXModGhpcy53ZXJ0Vm9uKGl0ZW0pKSk7XHJcbiAgICAgICAgICB0aGlzLnZpcnR1ZWxsZXNTY3JvbGw/LnNjcm9sbFRvSW5kZXgoaW5kZXgsICdjZW50ZXInLCB0aGlzLnNtb290aFNjcm9sbCA/ICdzbW9vdGgnIDogJ2F1dG8nKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1yZC1zZWxlY3Qtb3B0aW9ucy1vdmVybGF5IC5tcmQtc2VsZWN0LW9wdGlvbnMtc2Nyb2xsIC5tcmQtc2VsZWN0LW9wdGlvbi1pdGVtLnNlbGVjdGVkJyk7XHJcbiAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHNlbGVjdGVkT3B0aW9uKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc21vb3RoU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnbmVhcmVzdCcsIGlubGluZTogJ25lYXJlc3QnfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6ICdpbnN0YW50JywgYmxvY2s6ICduZWFyZXN0JywgaW5saW5lOiAnbmVhcmVzdCd9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIDEwKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHNlbGVjdGVkT3B0aW9ucygpOiBNcmRTZWxlY3RPcHRpb25Db21wb25lbnRbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zIS5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHNob3dOb09wdGlvbnNPblNlYXJjaCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc2hvd05vT3B0aW9uc09uU2VhcmNoID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2hvd05vT3B0aW9uc09uU2VhcmNoKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dOb09wdGlvbnNPblNlYXJjaDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmb2N1cyhldmVudDogRm9jdXNFdmVudHxudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzZWQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJsdXIoZXZlbnQ6IEZvY3VzRXZlbnR8bnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5ibHVycmVkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXN0RGVha3RpdmllcnQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISEodGhpcy5mb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgdGhpcy5mb3JtQXJyYXlDb250cm9sPy5kaXNhYmxlZCB8fCB0aGlzLmRpc2FibGVkKTtcclxuICB9XHJcblxyXG4gIC8qKiBudWxsIHN0YXR0IC0xOiBlaW4gdGFiaW5kZXggdm9uIC0xIGxhZXNzdCBzaWNoIHBlciBNYXVza2xpY2sgd2VpdGVyaGluIGZva3Vzc2llcmVuICovXHJcbiAgcHVibGljIGdldCB0cmlnZ2VyVGFiSW5kZXgoKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5pc3REZWFrdGl2aWVydCA/IG51bGwgOiAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uVHJpZ2dlckZvY3VzKCk6IHZvaWQge1xyXG4gICAgLy8gQmx1ciBibGVpYnQgZXJsYXVidCwgZGFtaXQgZWluIHdhZWhyZW5kIGRlcyBGb2t1cyBkZWFrdGl2aWVydGVzIFNlbGVjdCBkYXMgRm9ybXVsYXJmZWxkIHp1cnVlY2tzZXR6dFxyXG4gICAgaWYgKHRoaXMuaXN0RGVha3RpdmllcnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5mb2N1cyhudWxsKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblRyaWdnZXJCbHVyKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnNob3dPcHRpb25zLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuYmx1cihudWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblRyaWdnZXJLZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zaG93T3B0aW9ucy52YWx1ZSkge1xyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zaG93T3B0aW9ucy52YWx1ZSA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ1RhYicpIHtcclxuICAgICAgICB0aGlzLnNob3dPcHRpb25zLnZhbHVlID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInIHx8IGV2ZW50LmtleSA9PT0gJyAnIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy50cmlnZ2VyQ2xpY2tlZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoaXBDbG9zZUNsaWNrZWQodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGlwQ2xvc2UuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tIFZpcnR1ZWxsZXMgU2Nyb2xsaW5nOiBadXN0YW5kIGtvbW10IGF1cyBpdGVtcyB1bmQgZGVtIFdlcnQsIG5pY2h0IGF1cyBNcmRTZWxlY3RPcHRpb25Db21wb25lbnRzIC0tLS0tLS0tLS1cclxuXHJcbiAgcHVibGljIHdlcnRWb24oaXRlbTogYW55KTogYW55IHtcclxuICAgIHJldHVybiBVdGlsLmlzRGVmaW5lZChpdGVtKSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgPyBpdGVtW3RoaXMuaWRlbnRpZmllcl0gOiBpdGVtO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxhYmVsVm9uKGl0ZW06IGFueSk6IHN0cmluZyB7XHJcbiAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKGl0ZW0pKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmRpc3BsYXlXaXRoKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5kaXNwbGF5V2l0aChpdGVtKSA/PyAnJztcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgaXRlbSAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgcmV0dXJuIFN0cmluZyhpdGVtKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGxhYmVsID0gaXRlbVt0aGlzLmxhYmVsS2V5XTtcclxuICAgIHJldHVybiBVdGlsLmlzRGVmaW5lZChsYWJlbCkgPyBTdHJpbmcobGFiZWwpIDogJyc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXN0VmlydHVlbGxBdXNnZXdhZWhsdChpdGVtOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnZpcnR1ZWxsZUF1c3dhaGwuaGFzKHRoaXMud2VydFZvbihpdGVtKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdmlydHVlbGxlT3B0aW9uR2VrbGlja3QoaXRlbTogYW55KTogdm9pZCB7XHJcbiAgICBjb25zdCB3ZXJ0ID0gdGhpcy53ZXJ0Vm9uKGl0ZW0pO1xyXG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gJyc7XHJcbiAgICB0aGlzLnZpcnR1ZWxsRmlsdGVybignJyk7XHJcbiAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpICYmIHRoaXMuZm9ybUNvbnRyb2wudmFsdWUgIT09IHdlcnQpIHtcclxuICAgICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHdlcnQpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhbmRhbG9uZSAmJiB0aGlzLnZhbHVlICE9PSB3ZXJ0KSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHdlcnQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zaG93T3B0aW9ucy52YWx1ZSA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgYXVzd2FobCA9IG5ldyBTZXQodGhpcy52aXJ0dWVsbGVBdXN3YWhsKTtcclxuICAgICAgaWYgKGF1c3dhaGwuaGFzKHdlcnQpKSB7XHJcbiAgICAgICAgYXVzd2FobC5kZWxldGUod2VydCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXVzd2FobC5hZGQod2VydCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy52aXJ0dWVsbGVXZXJ0ZVNldHplbih0aGlzLml0ZW1zLm1hcChpID0+IHRoaXMud2VydFZvbihpKSkuZmlsdGVyKHcgPT4gYXVzd2FobC5oYXModykpKTtcclxuICAgICAgaWYgKHRoaXMuY2xvc2VPblNlbGVjdCkge1xyXG4gICAgICAgIHRoaXMuc2hvd09wdGlvbnMudmFsdWUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHZpcnR1ZWxsZW5DaGlwU2NobGllc3NlbihpdGVtOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IHdlcnQgPSB0aGlzLndlcnRWb24oaXRlbSk7XHJcbiAgICB0aGlzLnZpcnR1ZWxsZVdlcnRlU2V0emVuKEFycmF5LmZyb20odGhpcy52aXJ0dWVsbGVBdXN3YWhsKS5maWx0ZXIodyA9PiB3ICE9PSB3ZXJ0KSk7XHJcbiAgICB0aGlzLmNoaXBDbG9zZUNsaWNrZWQod2VydCk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogTnVyIGZ1ZXIgYG11bHRpcGxlYCAqL1xyXG4gIHByaXZhdGUgdmlydHVlbGxlV2VydGVTZXR6ZW4od2VydGU6IGFueVtdKTogdm9pZCB7XHJcbiAgICBjb25zdCBuZXVlcldlcnQgPSB3ZXJ0ZS5sZW5ndGggPT09IDAgPyBudWxsIDogd2VydGU7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShuZXVlcldlcnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhbmRhbG9uZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gbmV1ZXJXZXJ0O1xyXG4gICAgfVxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCkpIHtcclxuICAgICAgdGhpcy5mb3JtQXJyYXlBYmdsZWljaGVuKHdlcnRlLm1hcCh3ID0+IHRoaXMuaXRlbXMuZmluZChpdGVtID0+IHRoaXMud2VydFZvbihpdGVtKSA9PT0gdykpLmZpbHRlcihpdGVtID0+IFV0aWwuaXNEZWZpbmVkKGl0ZW0pKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGF1c2dld2FlaGx0ZVdlcnRlTGVzZW4oKTogYW55W10ge1xyXG4gICAgbGV0IHdlcnQ6IGFueTtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wpKSB7XHJcbiAgICAgIHJldHVybiAoKHRoaXMuZm9ybUFycmF5Q29udHJvbC52YWx1ZSBhcyBhbnlbXSkgfHwgW10pLm1hcChlaW50cmFnID0+IGVpbnRyYWc/Llt0aGlzLmlkZW50aWZpZXJdKTtcclxuICAgIH0gZWxzZSBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgd2VydCA9IHRoaXMuZm9ybUNvbnRyb2wudmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3ZXJ0ID0gdGhpcy52YWx1ZTtcclxuICAgIH1cclxuICAgIGlmICghVXRpbC5pc0RlZmluZWQod2VydCkpIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMubXVsdGlwbGUgJiYgQXJyYXkuaXNBcnJheSh3ZXJ0KSA/IHdlcnQgOiBbd2VydF07XHJcbiAgfVxyXG5cclxuICAvKiogQHBhcmFtIHJlbmRlcm4gU29mb3J0IHJlbmRlcm47IGltIElucHV0LVNldHRlciBuaWNodCBub2V0aWcsIHdlaWwgZGllIENoYW5nZSBEZXRlY3Rpb24gb2huZWhpbiBmb2xndCAqL1xyXG4gIHByaXZhdGUgdmlydHVlbGxlQW56ZWlnZUFrdHVhbGlzaWVyZW4ocmVuZGVybjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYXV0b0NvbXBsZXRlKSB7XHJcbiAgICAgIHRoaXMuc2hvd1ZhbHVlID0gVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgPyB0aGlzLmZvcm1Db250cm9sLnZhbHVlIDogdGhpcy52YWx1ZTtcclxuICAgICAgdGhpcy52aXJ0dWVsbEZpbHRlcm4odGhpcy5zaG93VmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgd2VydGUgPSB0aGlzLmF1c2dld2FlaGx0ZVdlcnRlTGVzZW4oKTtcclxuICAgICAgdGhpcy52aXJ0dWVsbGVBdXN3YWhsID0gbmV3IFNldCh3ZXJ0ZSk7XHJcbiAgICAgIHRoaXMudmlydHVlbGxlQXVzZ2V3YWVobHRlSXRlbXMgPSB3ZXJ0ZVxyXG4gICAgICAgIC5tYXAodyA9PiB0aGlzLml0ZW1zLmZpbmQoaXRlbSA9PiB0aGlzLndlcnRWb24oaXRlbSkgPT09IHcpKVxyXG4gICAgICAgIC5maWx0ZXIoaXRlbSA9PiBVdGlsLmlzRGVmaW5lZChpdGVtKSk7XHJcbiAgICAgIHRoaXMuc2hvd1ZhbHVlID0gdGhpcy52aXJ0dWVsbGVBdXNnZXdhZWhsdGVJdGVtcy5tYXAoaXRlbSA9PiB0aGlzLmxhYmVsVm9uKGl0ZW0pKS5qb2luKCcsICcpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICBpZiAocmVuZGVybikge1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZpcnR1ZWxsRmlsdGVybih0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHN1Y2hlID0gKHRleHQgfHwgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB0aGlzLmdlZmlsdGVydGVJdGVtcyA9IHN1Y2hlLmxlbmd0aCA9PT0gMFxyXG4gICAgICA/IHRoaXMuaXRlbXNcclxuICAgICAgOiB0aGlzLml0ZW1zLmZpbHRlcihpdGVtID0+IHRoaXMubGFiZWxWb24oaXRlbSkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHN1Y2hlKSA+IC0xKTtcclxuICAgIHRoaXMuZm9rdXNJbmRleCA9IHN1Y2hlLmxlbmd0aCA+IDAgJiYgdGhpcy5nZWZpbHRlcnRlSXRlbXMubGVuZ3RoID4gMCA/IDAgOiAtMTtcclxuICAgIC8vIEZlbGQgc3RhdHQgU2V0dGVyLCBkYW1pdCBoaWVyIChhdWNoIGF1cyBkZW0gaXRlbXMtU2V0dGVyIGhlcmF1cykga2VpbmUgQ2hhbmdlIERldGVjdGlvbiBhbmdlc3Rvc3NlbiB3aXJkXHJcbiAgICB0aGlzLl9zaG93Tm9PcHRpb25zT25TZWFyY2ggPSBzdWNoZS5sZW5ndGggPiAwICYmIHRoaXMuZ2VmaWx0ZXJ0ZUl0ZW1zLmxlbmd0aCA9PT0gMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmlydHVlbGxlVGFzdGVWZXJhcmJlaXRlbihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgYW56YWhsID0gdGhpcy5nZWZpbHRlcnRlSXRlbXMubGVuZ3RoO1xyXG4gICAgaWYgKGFuemFobCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgIGlmICh0aGlzLmZva3VzSW5kZXggPj0gMCAmJiB0aGlzLmZva3VzSW5kZXggPCBhbnphaGwpIHtcclxuICAgICAgICB0aGlzLnZpcnR1ZWxsZU9wdGlvbkdla2xpY2t0KHRoaXMuZ2VmaWx0ZXJ0ZUl0ZW1zW3RoaXMuZm9rdXNJbmRleF0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgIHRoaXMuZm9rdXNJbmRleCA9IE1hdGgubWluKGFuemFobCAtIDEsIHRoaXMuZm9rdXNJbmRleCArIDEpO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICB0aGlzLmZva3VzSW5kZXggPSB0aGlzLmZva3VzSW5kZXggPCAwID8gYW56YWhsIC0gMSA6IE1hdGgubWF4KDAsIHRoaXMuZm9rdXNJbmRleCAtIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy52aXJ0dWVsbGVzU2Nyb2xsPy5zY3JvbGxUb0luZGV4KHRoaXMuZm9rdXNJbmRleCk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgb3B0aW9uc01pbldpZHRoKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RDb250YWluZXIgPyBgJHt0aGlzLnNlbGVjdENvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRofXB4YCA6ICdhdXRvJztcclxuICB9XHJcbn1cclxuIiwiPGRpdiAjc2VsZWN0Q29udGFpbmVyIGNsYXNzPVwibXJkLXNlbGVjdC1jb250YWluZXJcIiBbbmdDbGFzc109XCJ7J21yZC1zZWxlY3QtZGlzYWJsZWQnOiBmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZm9ybUFycmF5Q29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWR9XCI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJhdXRvQ29tcGxldGVcIj5cbiAgICA8aW5wdXRcbiAgICAoY2xpY2spPVwidHJpZ2dlckNsaWNrZWQoKVwiXG4gICAgW3ZhbHVlXT1cInNob3dWYWx1ZVwiXG4gICAgKGlucHV0KT1cImF1dG9Db21wbGV0ZUlucHV0KCRldmVudClcIlxuICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcbiAgPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWF1dG9Db21wbGV0ZVwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjdXN0b21UcmlnZ2VyXCI+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtcmQtc2VsZWN0LWN1c3RvbS10cmlnZ2VyXCI+PC9uZy1jb250ZW50PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY3VzdG9tVHJpZ2dlclwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjaGlwU2VsZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtcmQtc2VsZWN0LXRyaWdnZXJcIiAoY2xpY2spPVwidHJpZ2dlckNsaWNrZWQoKVwiIFthdHRyLnRhYmluZGV4XT1cInRyaWdnZXJUYWJJbmRleFwiIChmb2N1cyk9XCJvblRyaWdnZXJGb2N1cygpXCIgKGJsdXIpPVwib25UcmlnZ2VyQmx1cigpXCIgKGtleWRvd24pPVwib25UcmlnZ2VyS2V5RG93bigkZXZlbnQpXCI+XG4gICAgICAgICAgPHNwYW4gW21yZFRvb2xUaXBdPVwic2hvd1ZhbHVlXCIgc2hvd0lmVHJ1bmNhdGVkPnt7c2hvd1ZhbHVlfX08L3NwYW4+XG4gICAgICAgICAgPHN2ZyBmaWxsPVwiY3VycmVudENvbG9yXCIgd2lkdGg9XCIxNHB4XCIgaGVpZ2h0PVwiMTRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz5cbiAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlPVwiI0NDQ0NDQ1wiIHN0cm9rZS13aWR0aD1cIjAuMDQ4XCI+PC9nPlxuICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+PHBhdGggZD1cIk0xMS4xNzggMTkuNTY5YS45OTguOTk4IDAgMCAwIDEuNjQ0IDBsOS0xM0EuOTk5Ljk5OSAwIDAgMCAyMSA1SDNhMS4wMDIgMS4wMDIgMCAwIDAtLjgyMiAxLjU2OWw5IDEzelwiPjwvcGF0aD48L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2hpcFNlbGVjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibXJkLWNoaXAtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1yZC1jaGlwLXZhbHVlc1wiICpuZ0lmPVwiY2hpcFNlbGVjdGlvblwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNlbGVjdGVkT3B0aW9ucyAmJiBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgICA8bXJkLWNoaXAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBzZWxlY3RlZE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgIChjbG9zZSk9XCJjaGlwQ2xvc2VkKG9wdGlvbilcIlxuICAgICAgICAgICAgICAgIFtwcmVmaXhJY29uXT1cImNoaXBQcmVmaXhJY29uXCJcbiAgICAgICAgICAgICAgICBbc3VmZml4SWNvbl09XCJjaGlwU3VmZml4SWNvblwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZvcm1Db250cm9sPy5kaXNhYmxlZCB8fCBmb3JtQXJyYXlDb250cm9sPy5kaXNhYmxlZCB8fCBkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgPnt7b3B0aW9uLm9wdGlvbkxhYmVsfX08L21yZC1jaGlwPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidmlydHVhbFNjcm9sbFwiPlxuICAgICAgICAgICAgICA8bXJkLWNoaXAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdmlydHVlbGxlQXVzZ2V3YWVobHRlSXRlbXNcIlxuICAgICAgICAgICAgICAgIChjbG9zZSk9XCJ2aXJ0dWVsbGVuQ2hpcFNjaGxpZXNzZW4oaXRlbSlcIlxuICAgICAgICAgICAgICAgIFtwcmVmaXhJY29uXT1cImNoaXBQcmVmaXhJY29uXCJcbiAgICAgICAgICAgICAgICBbc3VmZml4SWNvbl09XCJjaGlwU3VmZml4SWNvblwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZvcm1Db250cm9sPy5kaXNhYmxlZCB8fCBmb3JtQXJyYXlDb250cm9sPy5kaXNhYmxlZCB8fCBkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgPnt7bGFiZWxWb24oaXRlbSl9fTwvbXJkLWNoaXA+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtcmQtc2VsZWN0LXRyaWdnZXItY2hpcFwiIChjbGljayk9XCJ0cmlnZ2VyQ2xpY2tlZCgpXCIgW2F0dHIudGFiaW5kZXhdPVwidHJpZ2dlclRhYkluZGV4XCIgKGZvY3VzKT1cIm9uVHJpZ2dlckZvY3VzKClcIiAoYmx1cik9XCJvblRyaWdnZXJCbHVyKClcIiAoa2V5ZG93bik9XCJvblRyaWdnZXJLZXlEb3duKCRldmVudClcIj5cbiAgICAgICAgICAgICAgPHN2ZyBmaWxsPVwiY3VycmVudENvbG9yXCIgd2lkdGg9XCIxNHB4XCIgaGVpZ2h0PVwiMTRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+XG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2U9XCIjQ0NDQ0NDXCIgc3Ryb2tlLXdpZHRoPVwiMC4wNDhcIj48L2c+XG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+PHBhdGggZD1cIk0xMS4xNzggMTkuNTY5YS45OTguOTk4IDAgMCAwIDEuNjQ0IDBsOS0xM0EuOTk5Ljk5OSAwIDAgMCAyMSA1SDNhMS4wMDIgMS4wMDIgMCAwIDAtLjgyMiAxLjU2OWw5IDEzelwiPjwvcGF0aD48L2c+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZVxuICBjZGstY29ubmVjdGVkLW92ZXJsYXlcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcF09XCJ0cnVlXCJcbiAgY2RrQ29ubmVjdGVkT3ZlcmxheUJhY2tkcm9wQ2xhc3M9XCJjZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcFwiXG4gIGNka0Nvbm5lY3RlZE92ZXJsYXlQYW5lbENsYXNzPVwibXJkLXNlbGVjdC1vcHRpb25zLW92ZXJsYXlcIlxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJzZWxlY3RDb250YWluZXJcIlxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwic2hvd09wdGlvbnMudmFsdWVcIlxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJfcG9zaXRpb25zXCJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlNaW5XaWR0aF09XCJvcHRpb25zTWluV2lkdGhcIlxuICAoYmFja2Ryb3BDbGljayk9XCJzaG93T3B0aW9ucy52YWx1ZSA9IGZhbHNlXCJcbj5cbiAgPGRpdiBjbGFzcz1cIm1yZC1zZWxlY3Qtb3B0aW9ucy1jb250YWluZXJcIj5cbiAgICA8bXJkLXNlbGVjdC1vcHRpb24gKm5nSWY9XCJzZWFyY2hTZWxlY3Rpb25cIiBjbGFzcz1cIm1yZC1zZWxlY3Qtc2VhcmNoLW9wdGlvblwiIG5vQ2hlY2tib3g+XG4gICAgICA8aW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTdWNoZVwiXG4gICAgICAgIFt2YWx1ZV09XCJzZWFyY2hUZXh0XCJcbiAgICAgICAgKGlucHV0KT1cInNlYXJjaElucHV0KCRldmVudClcIlxuICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcbiAgICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICAgICAgICAjc2VhcmNoU2VsZWN0aW9uSW5wdXRcbiAgICAgID5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlthZGRCdXR0b25dXCI+PC9uZy1jb250ZW50PlxuICAgIDwvbXJkLXNlbGVjdC1vcHRpb24+XG4gICAgPGRpdiBjbGFzcz1cIm1yZC1zZWxlY3Qtb3B0aW9ucy1zY3JvbGxcIiBbY2xhc3MubXJkLXNlbGVjdC1vcHRpb25zLXNjcm9sbC12aXJ0dWVsbF09XCJ2aXJ0dWFsU2Nyb2xsXCI+XG4gICAgICA8bXJkLXNlbGVjdC1vcHRpb24gKm5nSWY9XCJudWxsYWJsZVwiIG5vQ2hlY2tib3ggW3ZhbHVlXT1cIm51bGxcIiAob3B0aW9uQ2xpY2tlZCk9XCJyZW1vdmVTZWxlY3RlZCgpXCI+e3ttdWx0aXBsZSA/ICdBdXN3YWhsIGzDtnNjaGVuJyA6ICctJ319PC9tcmQtc2VsZWN0LW9wdGlvbj5cbiAgICAgIDxtcmQtc2VsZWN0LW9wdGlvbiAqbmdJZj1cInNlYXJjaFNlbGVjdGlvbiAmJiBzZWFyY2hUZXh0Lmxlbmd0aCA+IDAgJiYgc2hvd05vT3B0aW9uc09uU2VhcmNoXCIgbm9DaGVja2JveD5LZWluZSBFaW50csOkZ2UgZ2VmdW5kZW48L21yZC1zZWxlY3Qtb3B0aW9uPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXJkLXNlbGVjdC1vcHRpb25cIj48L25nLWNvbnRlbnQ+XG4gICAgICA8bXJkLXZpcnR1YWwtc2Nyb2xsICpuZ0lmPVwidmlydHVhbFNjcm9sbFwiXG4gICAgICAgIFtpdGVtc109XCJnZWZpbHRlcnRlSXRlbXNcIlxuICAgICAgICBbaXRlbVNpemVdPVwiaXRlbVNpemVcIlxuICAgICAgICBbbWF4SGVpZ2h0XT1cInZpcnR1YWxTY3JvbGxNYXhIZWlnaHRcIlxuICAgICAgICBbdHJhY2tCeV09XCJ2aXJ0dWVsbGVyVHJhY2tCeVwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgbXJkVmlydHVhbFNjcm9sbEl0ZW0gbGV0LWl0ZW0gbGV0LWk9XCJpbmRleFwiPlxuICAgICAgICAgIDxtcmQtc2VsZWN0LW9wdGlvbiBjbGFzcz1cIm1yZC1zZWxlY3Qtb3B0aW9uLXZpcnR1ZWxsXCJcbiAgICAgICAgICAgIFt2YWx1ZV09XCJ3ZXJ0Vm9uKGl0ZW0pXCJcbiAgICAgICAgICAgIFtzZWxlY3RlZF09XCJpc3RWaXJ0dWVsbEF1c2dld2FlaGx0KGl0ZW0pXCJcbiAgICAgICAgICAgIFtmb2N1c2VkXT1cImkgPT09IGZva3VzSW5kZXhcIlxuICAgICAgICAgICAgKG9wdGlvbkNsaWNrZWQpPVwidmlydHVlbGxlT3B0aW9uR2VrbGlja3QoaXRlbSlcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvcHRpb25UZW1wbGF0ZTsgZWxzZSB2aXJ0dWVsbGVzTGFiZWxcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm9wdGlvblRlbXBsYXRlLnRlbXBsYXRlUmVmOyBjb250ZXh0OiB7JGltcGxpY2l0OiBpdGVtLCBpbmRleDogaX1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICN2aXJ0dWVsbGVzTGFiZWw+e3tsYWJlbFZvbihpdGVtKX19PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L21yZC1zZWxlY3Qtb3B0aW9uPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9tcmQtdmlydHVhbC1zY3JvbGw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT4iXX0=