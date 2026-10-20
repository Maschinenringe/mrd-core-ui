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
    /** Kann nach dem Aufbau wechseln (z. B. anderer Eintrag eines FormArrays); das Select bindet sich dann neu. */
    set formControl(value) {
        if (this._formControl === value) {
            return;
        }
        this._formControl = value;
        this.nachControlWechselNeuBinden();
    }
    get formControl() {
        return this._formControl;
    }
    _formControl;
    set formArrayControl(value) {
        if (this._formArrayControl === value) {
            return;
        }
        this._formArrayControl = value;
        this.nachControlWechselNeuBinden();
    }
    get formArrayControl() {
        return this._formArrayControl;
    }
    _formArrayControl;
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
    /** Meldet `mrd-form-field`, dass `mrdFormControl` bzw. `mrdFormArray` nach dem Aufbau gewechselt hat */
    formControlGewechselt = new Subject();
    ansichtInitialisiert = false;
    formControlAbo;
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
            // [value] kommt oft vor den Optionen an (z. B. per *ngFor nachgeladen); die Anzeige erst mit ihnen aufloesen
            if (this.standalone && !this.autoComplete) {
                this.modelChanged();
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
        this.formControlAbonnieren();
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
        this.ansichtInitialisiert = true;
    }
    formControlAbonnieren() {
        this.formControlAbo?.unsubscribe();
        this.formControlAbo = undefined;
        if (Util.isDefined(this.formControl)) {
            this.formControlAbo = this.watch(this.formControl.valueChanges, new SubscriptionHandler(() => this.formControlChanged()));
        }
        else if (Util.isDefined(this.formArrayControl)) {
            this.formControlAbo = this.watch(this.formArrayControl.valueChanges, new SubscriptionHandler(() => this.formArrayControlChanged()));
        }
    }
    /** Vor dem Aufbau uebernimmt ngAfterViewInit das Binden; danach Anzeige und Abo auf das neue Control umstellen. */
    nachControlWechselNeuBinden() {
        if (!this.ansichtInitialisiert) {
            return;
        }
        this.formControlAbonnieren();
        if (Util.isDefined(this.formControl)) {
            this.formControlChanged();
        }
        else if (Util.isDefined(this.formArrayControl)) {
            this.formArrayControlChanged();
        }
        else {
            this.showValue = '';
            this.options?.forEach(option => option.selected = false);
            this.cdr.markForCheck();
        }
        this.formControlGewechselt.next();
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
                    // Ohne passende Option bliebe sonst der Text des vorherigen Werts bzw. Controls stehen
                    this.showValue = Util.isDefined(option) ? option.optionValue?.nativeElement.innerText || '' : '';
                    if (Util.isDefined(option)) {
                        option.selected = true;
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
                    // Ohne passende Option bliebe sonst der Text des vorherigen Werts stehen
                    this.showValue = Util.isDefined(option) ? option.optionValue?.nativeElement.innerText || '' : '';
                    if (Util.isDefined(option)) {
                        option.selected = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWZvcm0tZmllbGQvY29tcG9uZW50cy9tcmQtc2VsZWN0L21yZC1zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLXNlbGVjdC9tcmQtc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBbUMsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUE4QixTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pSLE9BQU8sRUFBbUUsc0JBQXNCLEVBQTBCLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDdkwsT0FBTyxFQUF5Qix3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ25ILE9BQU8sRUFBYyxPQUFPLEVBQWdCLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUVuSCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUMvRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3RkFBd0YsQ0FBQztBQUVuSSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQzs7Ozs7O0lDUnBHLDZCQUFtQztJQUNqQyxnQ0FLRDtJQUpDLHVLQUFTLGVBQUEsdUJBQWdCLENBQUEsSUFBQyxnS0FFakIsZUFBQSxnQ0FBeUIsQ0FBQSxJQUZSLG9LQUdmLGVBQUEsd0JBQWlCLENBQUEsSUFIRjtJQUQxQixpQkFLRDtJQUNELDBCQUFlOzs7SUFKYixlQUFtQjtJQUFuQix3Q0FBbUI7OztJQU9uQiw2QkFBb0M7SUFDbEMsa0JBQTREO0lBQzlELDBCQUFlOzs7O0lBRWIsNkJBQXFDO0lBQ25DLDhCQUFzTDtJQUF0SixzTUFBUyxlQUFBLHdCQUFnQixDQUFBLElBQUMseUxBQTRDLGVBQUEsd0JBQWdCLENBQUEsSUFBNUQsdUxBQXNFLGVBQUEsdUJBQWUsQ0FBQSxJQUFyRixtTUFBa0csZUFBQSxnQ0FBd0IsQ0FBQSxJQUExSDtJQUN4RCwrQkFBK0M7SUFBQSxZQUFhO0lBQUEsaUJBQU87SUFDbkUsbUJBQTJHO0lBQTNHLDhCQUEyRztJQUN6Ryx1QkFBK0MsV0FBQTtJQUUvQyw2QkFBNEI7SUFBQSwyQkFBcUg7SUFBQSxpQkFBSSxFQUFBLEVBQUE7SUFHM0osMEJBQWU7OztJQVI4QyxlQUFpQztJQUFqQyxtREFBaUM7SUFDcEYsZUFBd0I7SUFBeEIsOENBQXdCO0lBQWlCLGVBQWE7SUFBYix1Q0FBYTs7OztJQVl4RCxvQ0FLRztJQUpELHlTQUFTLGVBQUEsOEJBQWtCLENBQUEsSUFBQztJQUkzQixZQUFzQjtJQUFBLGlCQUFXOzs7O0lBSGxDLG1EQUE2QixzQ0FBQSxzTEFBQTtJQUc1QixlQUFzQjtJQUF0Qiw0Q0FBc0I7OztJQU4zQiw2QkFBb0U7SUFDbEUsZ0pBS29DO0lBQ3RDLDBCQUFlOzs7SUFOZ0IsZUFBa0I7SUFBbEIsaURBQWtCOzs7O0lBUS9DLG9DQUtHO0lBSkQsdVNBQVMsZUFBQSwwQ0FBOEIsQ0FBQSxJQUFDO0lBSXZDLFlBQWtCO0lBQUEsaUJBQVc7Ozs7SUFIOUIsbURBQTZCLHNDQUFBLHNMQUFBO0lBRzVCLGVBQWtCO0lBQWxCLGdEQUFrQjs7O0lBTnZCLDZCQUFvQztJQUNsQyxnSkFLZ0M7SUFDbEMsMEJBQWU7OztJQU5jLGVBQTZCO0lBQTdCLDREQUE2Qjs7OztJQVY1RCwrQkFBbUQ7SUFDakQsd0lBT2U7SUFDZix3SUFPZTtJQUNmLCtCQUEyTDtJQUF0Siw0TUFBUyxlQUFBLHdCQUFnQixDQUFBLElBQUMsK0xBQTRDLGVBQUEsd0JBQWdCLENBQUEsSUFBNUQsNkxBQXNFLGVBQUEsdUJBQWUsQ0FBQSxJQUFyRix5TUFBa0csZUFBQSxnQ0FBd0IsQ0FBQSxJQUExSDtJQUM3RCxtQkFBMkc7SUFBM0csOEJBQTJHO0lBQ3pHLHVCQUErQyxXQUFBO0lBRS9DLDZCQUE0QjtJQUFBLDJCQUFxSDtJQUFBLGlCQUFJLEVBQUEsRUFBQSxFQUFBOzs7SUFwQjFJLGVBQW1EO0lBQW5ELG9GQUFtRDtJQVFuRCxlQUFtQjtJQUFuQiw0Q0FBbUI7SUFROEIsZUFBaUM7SUFBakMsbURBQWlDOzs7SUFuQnZHLDZCQUFvQztJQUNsQywrQkFBZ0M7SUFDOUIsaUhBd0JNO0lBQ1IsaUJBQU07SUFDUiwwQkFBZTs7O0lBMUJtQixlQUFtQjtJQUFuQiw0Q0FBbUI7OztJQWJ2RCw2QkFBcUM7SUFDbkMsbUhBU2U7SUFDZixtSEE0QmU7SUFDakIsMEJBQWU7OztJQXZDRSxlQUFvQjtJQUFwQiw0Q0FBb0I7SUFVcEIsZUFBbUI7SUFBbkIsMkNBQW1COzs7SUFmdEMsNkJBQW9DO0lBQ2xDLG9HQUVlO0lBQ2Ysb0dBd0NlO0lBQ2pCLDBCQUFlOzs7SUE1Q0UsZUFBbUI7SUFBbkIsMkNBQW1CO0lBR25CLGVBQW9CO0lBQXBCLDRDQUFvQjs7OztJQXdEbkMsNkNBQXVGLG9CQUFBO0lBSW5GLG1NQUFTLGVBQUEsMkJBQW1CLENBQUEsSUFBQyx5SEFDcEIsd0JBQXdCLElBREosMExBRWxCLGVBQUEseUJBQWlCLENBQUEsSUFGQztJQUgvQixpQkFPQztJQUNELHFCQUE4QztJQUNoRCxpQkFBb0I7OztJQVBoQixlQUFvQjtJQUFwQiwwQ0FBb0I7Ozs7SUFTdEIsNkNBQWlHO0lBQW5DLHlOQUFpQixlQUFBLHdCQUFnQixDQUFBLElBQUM7SUFBQyxZQUFzQztJQUFBLGlCQUFvQjs7O0lBQTVHLDRCQUFjO0lBQW9DLGVBQXNDO0lBQXRDLHFFQUFzQzs7O0lBQ3ZJLDZDQUF3RztJQUFBLDRDQUF1QjtJQUFBLGlCQUFvQjs7O0lBYzNJLHdCQUFrSDs7OztJQURwSCw2QkFBMkQ7SUFDekQsc0pBQWtIO0lBQ3BILDBCQUFlOzs7Ozs7SUFERSxlQUE4QztJQUE5QyxxRUFBOEMsd0VBQUE7OztJQUVqQyxZQUFrQjs7OztJQUFsQixnREFBa0I7Ozs7SUFSbEQsNkNBSWtEO0lBQWhELG9TQUFpQixlQUFBLHlDQUE2QixDQUFBLElBQUM7SUFDL0MsdUlBRWU7SUFDZixzS0FBOEQ7SUFDaEUsaUJBQW9COzs7Ozs7SUFSbEIsaURBQXVCLHNEQUFBLHlDQUFBO0lBSVIsZUFBc0I7SUFBdEIsNkNBQXNCLGtCQUFBOzs7SUFYM0MsOENBSWdDO0lBQzlCLHVIQVdjO0lBQ2hCLGlCQUFxQjs7O0lBaEJuQiwrQ0FBeUIsOEJBQUEsNkNBQUEsc0NBQUE7OztJQWpCL0IsK0JBQTBDO0lBQ3hDLDhHQVVvQjtJQUNwQiwrQkFBa0c7SUFDaEcsOEdBQTJKO0lBQzNKLDhHQUFtSjtJQUNuSixxQkFBb0Q7SUFDcEQsZ0hBaUJxQjtJQUN2QixpQkFBTSxFQUFBOzs7SUFqQ2MsZUFBcUI7SUFBckIsNkNBQXFCO0lBV0YsZUFBMEQ7SUFBMUQsMEVBQTBEO0lBQzNFLGVBQWM7SUFBZCxzQ0FBYztJQUNkLGVBQXVFO0lBQXZFLDZHQUF1RTtJQUV0RSxlQUFtQjtJQUFuQiwyQ0FBbUI7Ozs7O0FEcEU5QyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsc0JBQXNCO0lBd0xsRDtJQUNFO0lBdkxrQixlQUFlLENBQWM7SUFFeEIsb0JBQW9CLENBQWM7SUFFMUIsT0FBTyxDQUF1QztJQUUxQyxhQUFhLENBQW1DO0lBRS9DLGNBQWMsQ0FBb0M7SUFFNUQsZ0JBQWdCLENBQTZCO0lBRTNFLFlBQVksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQzVCLHNCQUFzQixHQUFvQixLQUFLLENBQUMsR0FBRyxFQUFFO1FBQzVELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFN0IsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUN6QixTQUFTLENBQUMsT0FBTyxDQUFDLEVBQ2xCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FDdkUsQ0FBQztTQUNIO1FBRUQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDLENBQUMsQ0FBQztJQUVILCtHQUErRztJQUMvRyxJQUE2QixXQUFXLENBQUMsS0FBc0M7UUFDN0UsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLEtBQUssRUFBRTtZQUMvQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFDTyxZQUFZLENBQXlCO0lBQzdDLElBQTJCLGdCQUFnQixDQUFDLEtBQXlDO1FBQ25GLElBQUksSUFBSSxDQUFDLGlCQUFpQixLQUFLLEtBQUssRUFBRTtZQUNwQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBQ08saUJBQWlCLENBQTRCO0lBQ3JELElBQWEsS0FBSyxDQUFDLEtBQVU7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtZQUN6QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDTyxNQUFNLENBQU07SUFDSixVQUFVLEdBQVcsSUFBSSxDQUFDO0lBQzFDLElBQW9CLEtBQUssQ0FBQyxLQUFZO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQ3BELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzNFLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7SUFDRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNPLE1BQU0sR0FBVSxFQUFFLENBQUM7SUFFM0I7OztPQUdHO0lBQzBDLGFBQWEsR0FBWSxLQUFLLENBQUM7SUFDNUUsOEJBQThCO0lBQ2QsUUFBUSxHQUFXLGFBQWEsQ0FBQztJQUNqRCwwREFBMEQ7SUFDMUMsV0FBVyxDQUF5QjtJQUNwRCwrR0FBK0c7SUFDakUsUUFBUSxDQUE0QjtJQUNsRixxRUFBcUU7SUFDekIsc0JBQXNCLEdBQVcsR0FBRyxDQUFDO0lBRTNDLFlBQVksR0FBWSxLQUFLLENBQUM7SUFDOUIsZUFBZSxHQUFZLEtBQUssQ0FBQztJQUNqQyxhQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDaEUsSUFDSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDTyxTQUFTLEdBQVksS0FBSyxDQUFDO0lBQ0csYUFBYSxHQUFZLEtBQUssQ0FBQztJQUMvQixRQUFRLEdBQVksS0FBSyxDQUFDO0lBRWhELGNBQWMsQ0FBVTtJQUN4QixjQUFjLENBQVU7SUFFeEIsV0FBVyxHQUE2QixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztJQUMvQyxZQUFZLEdBQVksS0FBSyxDQUFDO0lBRTlCLGVBQWUsR0FBWSxJQUFJLENBQUM7SUFFbkUsT0FBTyxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO0lBQ3ZELE9BQU8sR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUN2RCxPQUFPLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7SUFFakU7Ozs7O09BS0c7SUFDTyxTQUFTLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7SUFHekQsV0FBVyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRW5FLHdHQUF3RztJQUN4RixxQkFBcUIsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQUVuRSxvQkFBb0IsR0FBWSxLQUFLLENBQUM7SUFDdEMsY0FBYyxDQUFnQjtJQUUvQixjQUFjLEdBQVksS0FBSyxDQUFDO0lBQ2hDLHNCQUFzQixHQUFZLEtBQUssQ0FBQztJQUV4QyxVQUFVLEdBQVksS0FBSyxDQUFDO0lBRTVCLFNBQVMsR0FBVyxFQUFFLENBQUM7SUFDdkIsVUFBVSxHQUFXLEVBQUUsQ0FBQztJQUV4QixvQkFBb0IsR0FBWSxLQUFLLENBQUM7SUFDdEMscUJBQXFCLEdBQVksS0FBSyxDQUFDO0lBRXRDLHdCQUF3QixDQUFnQjtJQUV6QyxlQUFlLEdBQVUsRUFBRSxDQUFDO0lBQzVCLDBCQUEwQixHQUFVLEVBQUUsQ0FBQztJQUN2QyxVQUFVLEdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDdkIsZ0JBQWdCLEdBQWEsSUFBSSxHQUFHLEVBQU8sQ0FBQztJQUM1QyxxQkFBcUIsR0FBWSxLQUFLLENBQUM7SUFFL0IsaUJBQWlCLEdBQXlCLENBQUMsQ0FBUyxFQUFFLElBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUd2RyxVQUFVLEdBQXdCO1FBQ2hDO1lBQ0UsT0FBTyxFQUFFLE9BQU87WUFDaEIsT0FBTyxFQUFFLFFBQVE7WUFDakIsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLEtBQUs7U0FDaEI7UUFDRDtZQUNFLE9BQU8sRUFBRSxLQUFLO1lBQ2QsT0FBTyxFQUFFLFFBQVE7WUFDakIsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsS0FBSztTQUNoQjtRQUNEO1lBQ0UsT0FBTyxFQUFFLE9BQU87WUFDaEIsT0FBTyxFQUFFLEtBQUs7WUFDZCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsUUFBUTtTQUNuQjtRQUNEO1lBQ0UsT0FBTyxFQUFFLEtBQUs7WUFDZCxPQUFPLEVBQUUsS0FBSztZQUNkLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLFFBQVE7U0FDbkI7S0FDRixDQUFDO0lBRUYsWUFDVSxVQUFzQixFQUNwQixHQUFzQjtRQUVoQyxLQUFLLEVBQUUsQ0FBQztRQUhBLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7SUFHbEMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksbUJBQW1CLENBQUMsQ0FBQyxLQUFjLEVBQUUsRUFBRTtZQUN0SCxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakI7aUJBQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3ZELFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLG9CQUFvQixFQUFFLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDbkQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksbUJBQW1CLENBQUMsR0FBRyxFQUFFO1lBQ25GLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3hGLElBQUksY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDeEYsSUFBSSxDQUFDLE9BQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQzdCLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ3pDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO3FCQUN4QjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKO1lBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzlFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2FBQzNCO1lBQ0QsNkdBQTZHO1lBQzdHLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjtRQUNILENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFSixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxtQkFBbUIsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3ZFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUM3RSxNQUFNLElBQUksS0FBSyxDQUFDLHlFQUF5RSxDQUFDLENBQUM7U0FDNUY7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUU7WUFDbEcsTUFBTSxJQUFJLEtBQUssQ0FBQywrRUFBK0UsQ0FBQyxDQUFDO1NBQ2xHO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hHLE1BQU0sSUFBSSxLQUFLLENBQUMsbUdBQW1HLENBQUMsQ0FBQztTQUN0SDtRQUVELElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xGO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxPQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsV0FBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQ3ZGO2lCQUFNO2dCQUNMLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBYyxDQUFDO2dCQUNyRCxJQUFJLENBQUMsT0FBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDN0IsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDekMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO3FCQUN0QjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNsQixJQUFJLENBQUMsT0FBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDO2FBQzFFO2lCQUFNO2dCQUNMLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFjLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxPQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUM3QixJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUN6QyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7cUJBQ3RCO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtRQUVELHlFQUF5RTtRQUN6RSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUMxRSxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbkQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztZQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzRSxJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUM7UUFDRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFTyxxQkFBcUI7UUFDM0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxXQUFXLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMzSDthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNySTtJQUNILENBQUM7SUFFRCxtSEFBbUg7SUFDM0csMkJBQTJCO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDOUIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztTQUNoQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVPLGtCQUFrQjtRQUN4QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxPQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM3QixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQ3BKLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2lCQUN6QjtxQkFBTTtvQkFDTCxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztpQkFDeEI7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMvRCxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RSxJQUFJLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUM5QixlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztpQkFDbkM7Z0JBQ0QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO2FBQzNEO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7YUFDMUQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxPQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQztvQkFDekQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxXQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3BGLHVGQUF1RjtvQkFDdkYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQ2pHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTt3QkFDMUIsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7cUJBQ3hCO2lCQUNGO3FCQUFNO29CQUNMLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFZLENBQUMsS0FBYyxDQUFDO29CQUN0RCxJQUFJLENBQUMsT0FBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTt3QkFDN0IsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTs0QkFDekMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7eUJBQ3hCOzZCQUFNOzRCQUNMLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO3lCQUN6QjtvQkFDSCxDQUFDLENBQUMsQ0FBQztvQkFDSCxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDbEo7YUFDRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTyx1QkFBdUI7UUFDN0IsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxPQUFPO1NBQ1I7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsa0JBQWtCO1NBQ25CO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWlCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFLLElBQUksQ0FBQyxnQkFBaUIsQ0FBQyxPQUFPLENBQUMsS0FBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3pILElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7YUFDMUQ7aUJBQU07Z0JBQ0wsSUFBSSxjQUFjLEdBQUksSUFBSSxDQUFDLGdCQUFpQixDQUFDLE9BQU8sQ0FBQyxLQUFlLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUMxRyxJQUFJLENBQUMsT0FBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDN0IsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDekMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7cUJBQ3hCO3lCQUFNO3dCQUNMLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO3FCQUN6QjtnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsSjtTQUNGO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTyxZQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekMsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsT0FBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDN0IsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDakgsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7aUJBQ3pCO3FCQUFNO29CQUNMLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2lCQUN4QjtZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzdCLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3ZFLElBQUksZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQzlCLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2lCQUNuQztnQkFDRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7YUFDM0Q7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDO2FBQzFEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNsQixJQUFJLENBQUMsT0FBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7b0JBQ3pELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZFLHlFQUF5RTtvQkFDekUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQ2pHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTt3QkFDMUIsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7cUJBQ3hCO2lCQUNGO3FCQUFNO29CQUNMLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFjLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxPQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO3dCQUM3QixJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFOzRCQUN6QyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzt5QkFDeEI7NkJBQU07NEJBQ0wsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7eUJBQ3pCO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUNILElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN0RSxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNsSjthQUNGO1NBQ0Y7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVPLGFBQWE7UUFDbkIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRTtZQUMxRixJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDN0M7UUFDRCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxtQkFBbUIsQ0FBQyxDQUFDLEtBQTRCLEVBQUUsRUFBRTtZQUMvSCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNsQixJQUFJLENBQUMsT0FBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7aUJBQzFEO2dCQUNELElBQUksQ0FBQyxPQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxPQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFDekQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztnQkFDbkMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQ3RELEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUN4RSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO2lCQUMxQjtnQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDbEIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsR0FBRyxFQUFFO3dCQUM1RSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3RDO3lCQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxHQUFHLEVBQUU7d0JBQ3RELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztxQkFDeEI7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO3FCQUM5QjtvQkFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7aUJBQ2hDO3FCQUFNO29CQUNMLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN0RSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO3dCQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7cUJBQzlHO29CQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTt3QkFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNoRztvQkFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7d0JBQ3pDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQzFIO29CQUNELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTt3QkFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO3FCQUNoQztpQkFDRjthQUNGO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVPLG1CQUFtQixDQUFDLGFBQW9CO1FBQzlDLElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGdCQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLG1CQUFtQixHQUFhLEVBQUUsQ0FBQztRQUN2QyxJQUFJLFVBQVUsR0FBVSxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLGdCQUFpQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFzQyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFNLEtBQXNDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNoSixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDakM7aUJBQU07Z0JBQ0wsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFNLEtBQXNDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6STtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFpQixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNoSCxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSxjQUFjO1FBQ25CLDJEQUEyRDtRQUMzRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakM7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7UUFDRCx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSxVQUFVLENBQUMsTUFBZ0M7UUFDaEQsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDOUc7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hHO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQ3pDLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBc0MsRUFBRSxFQUFFLENBQUUsS0FBc0MsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7WUFDdEUsbUtBQW1LO1NBQ3BLO1FBQ0Qsb0pBQW9KO1FBQ3BKLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0saUJBQWlCLENBQUMsS0FBaUI7UUFDeEMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBRSxLQUFLLENBQUMsTUFBMkIsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyRTtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFJLEtBQUssQ0FBQyxNQUEyQixDQUFDLEtBQUssQ0FBQztTQUN2RDtRQUNELDZEQUE2RDtRQUM3RCxtQ0FBbUM7UUFDbkMsNEJBQTRCO1FBQzVCLHdIQUF3SDtRQUN4SCwrQkFBK0I7UUFDL0IsYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixNQUFNO1FBQ04sTUFBTTtRQUNOLG1DQUFtQztRQUNuQywyRUFBMkU7UUFDM0Usc0NBQXNDO1FBQ3RDLHlDQUF5QztRQUN6QyxNQUFNO1FBQ04sK0RBQStEO1FBQy9ELElBQUk7UUFDSixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTSxXQUFXLENBQUMsS0FBaUI7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBSSxLQUFLLENBQUMsTUFBMkIsQ0FBQyxLQUFLLENBQUM7UUFDM0QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDeEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE9BQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0IsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNqSCxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzthQUN6QjtpQkFBTTtnQkFDTCxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUN4QjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2RSxJQUFJLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUM5QixlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNuQztZQUNELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztTQUMzRDtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLFNBQVMsQ0FBQyxLQUFvQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLE9BQU87U0FDUjtRQUNELElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkUsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRTtZQUN6QixJQUFJLGNBQWMsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDbEMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzlCO1NBQ0Y7UUFDRCxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssV0FBVyxFQUFFO1lBQzdCLElBQUksYUFBYSxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUNqQyxJQUFJLGtCQUFrQixHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDL0UsSUFBSSxrQkFBa0IsR0FBRyxDQUFDLENBQUMsSUFBSSxrQkFBa0IsR0FBRyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDOUUsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQzlCLGVBQWUsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2lCQUN4RDthQUNGO2lCQUFNO2dCQUNMLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ25DO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN6QjtRQUNELElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxhQUFhLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQ2pDLElBQUksa0JBQWtCLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvRSxJQUFJLGtCQUFrQixHQUFHLENBQUMsRUFBRTtvQkFDMUIsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQzlCLGVBQWUsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2lCQUN4RDthQUNGO2lCQUFNO2dCQUNMLGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDNUQ7WUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzVMLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDOUIsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ3RCLG9GQUFvRjtvQkFDcEYsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDN0YsT0FBTztpQkFDUjtnQkFDRCxJQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHlGQUF5RixDQUFDLENBQUM7Z0JBQ3ZJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFBRTtvQkFDbEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO3dCQUNyQixjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO3FCQUMxRjt5QkFBTTt3QkFDTCxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO3FCQUMzRjtpQkFDRjtZQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLE9BQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELElBQVcscUJBQXFCLENBQUMsS0FBYztRQUM3QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDckMsQ0FBQztJQUVNLEtBQUssQ0FBQyxLQUFzQjtRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTSxJQUFJLENBQUMsS0FBc0I7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVELHlGQUF5RjtJQUN6RixJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sY0FBYztRQUNuQix1R0FBdUc7UUFDdkcsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVNLGFBQWE7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakI7SUFDSCxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsS0FBb0I7UUFDMUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRTtZQUMxQixJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFO2dCQUMxQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ2hDO2lCQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxLQUFLLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNoQztpQkFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssT0FBTyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssV0FBVyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFO2dCQUN4RixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdkI7WUFDRCxPQUFPO1NBQ1I7UUFDRCxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssT0FBTyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssV0FBVyxFQUFFO1lBQzNFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsS0FBVTtRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsd0hBQXdIO0lBRWpILE9BQU8sQ0FBQyxJQUFTO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN6RixDQUFDO0lBRU0sUUFBUSxDQUFDLElBQVM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekIsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyQztRQUNELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JCO1FBQ0QsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFTSxzQkFBc0IsQ0FBQyxJQUFTO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVNLHVCQUF1QixDQUFDLElBQVM7UUFDdEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO2dCQUN2RSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQztpQkFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ25CO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ2hDO2FBQU07WUFDTCxNQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUMvQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEI7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQjtZQUNELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNoQztTQUNGO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sd0JBQXdCLENBQUMsSUFBUztRQUN2QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCwwQkFBMEI7SUFDbEIsb0JBQW9CLENBQUMsS0FBWTtRQUN2QyxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDcEQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUN4QjtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xJO0lBQ0gsQ0FBQztJQUVPLHNCQUFzQjtRQUM1QixJQUFJLElBQVMsQ0FBQztRQUNkLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUN6QyxPQUFPLENBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQWUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztTQUNsRzthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDM0MsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1NBQy9CO2FBQU07WUFDTCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNuQjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCwyR0FBMkc7SUFDbkcsNkJBQTZCLENBQUMsT0FBZ0I7UUFDcEQsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLEtBQUs7aUJBQ3BDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUY7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFTyxlQUFlLENBQUMsSUFBWTtRQUNsQyxNQUFNLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUN2QyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDWixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9FLDJHQUEyRztRQUMzRyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFTyx5QkFBeUIsQ0FBQyxLQUFvQjtRQUNwRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztRQUMzQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDaEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRTtZQUN6QixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxFQUFFO2dCQUNwRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzthQUNyRTtZQUNELE9BQU87U0FDUjtRQUNELElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxXQUFXLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM3RDthQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN2RjthQUFNO1lBQ0wsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDakgsQ0FBQzsrRkE3MkJVLGtCQUFrQjs0RkFBbEIsa0JBQWtCO3dDQVFmLCtCQUErQjt3Q0FFL0IsZ0NBQWdDO3dDQUo3Qix3QkFBd0I7Ozs7Ozs7OzsyQkFNOUIseUJBQXlCOzs7Ozs7Mk9Bb0VqQixnQkFBZ0Isd0ZBTWhCLGlCQUFpQixnRkFFakIsZUFBZSxrREFFZixnQkFBZ0IsMkRBQ2hCLGdCQUFnQixxREFDaEIsZ0JBQWdCLHNDQUNoQixnQkFBZ0Isc0NBQ2hCLGdCQUFnQixxREFRaEIsZ0JBQWdCLHNDQUNoQixnQkFBZ0Isa0pBTWhCLGdCQUFnQiwyREFFaEIsZ0JBQWdCOztZQ2hJckMsaUNBQXdKO1lBQ3RKLHFGQU9lO1lBRWYscUZBNkNlO1lBQ2pCLGlCQUFNO1lBRU4sbUZBK0NjO1lBdENaLDRJQUFxQyxLQUFLLElBQUM7OztZQW5FTSwwTUFBb0c7WUFDdEksZUFBa0I7WUFBbEIsdUNBQWtCO1lBU2xCLGVBQW1CO1lBQW5CLHdDQUFtQjtZQWtEbEMsZUFBdUM7WUFBdkMscURBQXVDLGtDQUFBLGtEQUFBLGdEQUFBLG9EQUFBOzs7dUZEM0M1QixrQkFBa0I7Y0FOOUIsU0FBUzsyQkFDRSxZQUFZLG1CQUdMLHVCQUF1QixDQUFDLE1BQU07NkZBSWpCLGVBQWU7a0JBQTVDLFNBQVM7bUJBQUMsaUJBQWlCO1lBRU8sb0JBQW9CO2tCQUF0RCxTQUFTO21CQUFDLHNCQUFzQjtZQUVVLE9BQU87a0JBQWpELGVBQWU7bUJBQUMsd0JBQXdCO1lBRU0sYUFBYTtrQkFBM0QsWUFBWTttQkFBQywrQkFBK0I7WUFFRyxjQUFjO2tCQUE3RCxZQUFZO21CQUFDLGdDQUFnQztZQUVSLGdCQUFnQjtrQkFBckQsU0FBUzttQkFBQyx5QkFBeUI7WUFpQlAsV0FBVztrQkFBdkMsS0FBSzttQkFBQyxnQkFBZ0I7WUFXSSxnQkFBZ0I7a0JBQTFDLEtBQUs7bUJBQUMsY0FBYztZQVdSLEtBQUs7a0JBQWpCLEtBQUs7WUFZVSxVQUFVO2tCQUF6QixLQUFLO1lBQ2MsS0FBSztrQkFBeEIsS0FBSztZQWdCdUMsYUFBYTtrQkFBekQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUVwQixRQUFRO2tCQUF2QixLQUFLO1lBRVUsV0FBVztrQkFBMUIsS0FBSztZQUV3QyxRQUFRO2tCQUFyRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFDO1lBRU8sc0JBQXNCO2tCQUFqRSxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBQztZQUVHLFlBQVk7a0JBQWpELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFDRSxlQUFlO2tCQUFwRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBQ0UsYUFBYTtrQkFBbEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUNFLFFBQVE7a0JBQTdDLEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFaEMsUUFBUTtrQkFEWCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBUUUsYUFBYTtrQkFBbEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUNFLFFBQVE7a0JBQTdDLEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFcEIsY0FBYztrQkFBN0IsS0FBSztZQUNVLGNBQWM7a0JBQTdCLEtBQUs7WUFFVSxXQUFXO2tCQUExQixLQUFLO1lBQ3VDLFlBQVk7a0JBQXhELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFUyxlQUFlO2tCQUEzRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBRTFCLE9BQU87a0JBQWhCLE1BQU07WUFDRyxPQUFPO2tCQUFoQixNQUFNO1lBQ0csT0FBTztrQkFBaEIsTUFBTTtZQVFHLFNBQVM7a0JBQWxCLE1BQU07WUFHRyxXQUFXO2tCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgQ29udGVudENoaWxkcmVuLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgUXVlcnlMaXN0LCBUcmFja0J5RnVuY3Rpb24sIFZpZXdDaGlsZCwgYm9vbGVhbkF0dHJpYnV0ZSwgbnVtYmVyQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjY2Vzc2FibGVGb3JtQXJyYXksIEFjY2Vzc2FibGVGb3JtQ29udHJvbCwgQWNjZXNzYWJsZUZvcm1Hcm91cCwgQmFzZVB1c2hTdHJhdGVneU9iamVjdCwgSUFjY2Vzc2FibGVGb3JtQ29udHJvbCwgT2JzZXJ2YWJsZVZhbHVlLCBTdWJzY3JpcHRpb25IYW5kbGVyLCBVdGlsIH0gZnJvbSAnbXJkLWNvcmUnO1xyXG5pbXBvcnQgeyBNcmRTZWxlY3RPcHRpb25DaGFuZ2UsIE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL21yZC1zZWxlY3Qtb3B0aW9uL21yZC1zZWxlY3Qtb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiwgZGVmZXIsIG1lcmdlLCBzdGFydFdpdGgsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNcmRTZWxlY3RDdXN0b21UcmlnZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vbXJkLXNlbGVjdC1jdXN0b20tdHJpZ2dlci9tcmQtc2VsZWN0LWN1c3RvbS10cmlnZ2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbm5lY3RlZFBvc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBNcmRTZWxlY3RPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9kaXJlY3RpdmUvbXJkLXNlbGVjdC1vcHRpb24tdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTXJkVmlydHVhbFNjcm9sbENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21yZC12aXJ0dWFsLXNjcm9sbC9jb21wb25lbnRzL21yZC12aXJ0dWFsLXNjcm9sbC9tcmQtdmlydHVhbC1zY3JvbGwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXJkVmlydHVhbFNjcm9sbEl0ZW1TaXplIH0gZnJvbSAnLi4vLi4vLi4vbXJkLXZpcnR1YWwtc2Nyb2xsL2NvbW1vbi9tb2RlbC9tcmQtdmlydHVhbC1zY3JvbGwubW9kZWwnO1xyXG5pbXBvcnQgeyBpdGVtU2l6ZUF0dHJpYnV0ZSB9IGZyb20gJy4uLy4uLy4uL21yZC12aXJ0dWFsLXNjcm9sbC9jb21tb24vdHJhbnNmb3Jtcy9pdGVtLXNpemUtdHJhbnNmb3JtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC1zZWxlY3QuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgQmFzZVB1c2hTdHJhdGVneU9iamVjdCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3NlbGVjdENvbnRhaW5lcicpIHNlbGVjdENvbnRhaW5lcj86IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaFNlbGVjdGlvbklucHV0Jykgc2VhcmNoU2VsZWN0aW9uSW5wdXQ/OiBFbGVtZW50UmVmO1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudCkgb3B0aW9ucz86IFF1ZXJ5TGlzdDxNcmRTZWxlY3RPcHRpb25Db21wb25lbnQ+O1xyXG5cclxuICBAQ29udGVudENoaWxkKE1yZFNlbGVjdEN1c3RvbVRyaWdnZXJDb21wb25lbnQpIGN1c3RvbVRyaWdnZXI/OiBNcmRTZWxlY3RDdXN0b21UcmlnZ2VyQ29tcG9uZW50O1xyXG5cclxuICBAQ29udGVudENoaWxkKE1yZFNlbGVjdE9wdGlvblRlbXBsYXRlRGlyZWN0aXZlKSBvcHRpb25UZW1wbGF0ZT86IE1yZFNlbGVjdE9wdGlvblRlbXBsYXRlRGlyZWN0aXZlO1xyXG5cclxuICBAVmlld0NoaWxkKE1yZFZpcnR1YWxTY3JvbGxDb21wb25lbnQpIHZpcnR1ZWxsZXNTY3JvbGw/OiBNcmRWaXJ0dWFsU2Nyb2xsQ29tcG9uZW50O1xyXG5cclxuICBwcml2YXRlIF9pbml0aWFsaXplZCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcmVhZG9ubHkgb3B0aW9uU2VsZWN0aW9uQ2hhbmdlczogT2JzZXJ2YWJsZTxhbnk+ID0gZGVmZXIoKCkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHJcbiAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gb3B0aW9ucy5jaGFuZ2VzLnBpcGUoXHJcbiAgICAgICAgc3RhcnRXaXRoKG9wdGlvbnMpLFxyXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiBtZXJnZSguLi5vcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLm9wdGlvbkNsaWNrZWQpKSksXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2luaXRpYWxpemVkLnBpcGUoc3dpdGNoTWFwKCgpID0+IHRoaXMub3B0aW9uU2VsZWN0aW9uQ2hhbmdlcykpO1xyXG4gIH0pO1xyXG5cclxuICAvKiogS2FubiBuYWNoIGRlbSBBdWZiYXUgd2VjaHNlbG4gKHouIEIuIGFuZGVyZXIgRWludHJhZyBlaW5lcyBGb3JtQXJyYXlzKTsgZGFzIFNlbGVjdCBiaW5kZXQgc2ljaCBkYW5uIG5ldS4gKi9cclxuICBASW5wdXQoJ21yZEZvcm1Db250cm9sJykgc2V0IGZvcm1Db250cm9sKHZhbHVlOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2x8dW5kZWZpbmVkKSB7XHJcbiAgICBpZiAodGhpcy5fZm9ybUNvbnRyb2wgPT09IHZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2Zvcm1Db250cm9sID0gdmFsdWU7XHJcbiAgICB0aGlzLm5hY2hDb250cm9sV2VjaHNlbE5ldUJpbmRlbigpO1xyXG4gIH1cclxuICBnZXQgZm9ybUNvbnRyb2woKTogQWNjZXNzYWJsZUZvcm1Db250cm9sfHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9ybUNvbnRyb2w7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2Zvcm1Db250cm9sPzogQWNjZXNzYWJsZUZvcm1Db250cm9sO1xyXG4gIEBJbnB1dCgnbXJkRm9ybUFycmF5Jykgc2V0IGZvcm1BcnJheUNvbnRyb2wodmFsdWU6IEFjY2Vzc2FibGVGb3JtQXJyYXk8YW55Pnx1bmRlZmluZWQpIHtcclxuICAgIGlmICh0aGlzLl9mb3JtQXJyYXlDb250cm9sID09PSB2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9mb3JtQXJyYXlDb250cm9sID0gdmFsdWU7XHJcbiAgICB0aGlzLm5hY2hDb250cm9sV2VjaHNlbE5ldUJpbmRlbigpO1xyXG4gIH1cclxuICBnZXQgZm9ybUFycmF5Q29udHJvbCgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PGFueT58dW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9mb3JtQXJyYXlDb250cm9sO1xyXG4gIH1cclxuICBwcml2YXRlIF9mb3JtQXJyYXlDb250cm9sPzogQWNjZXNzYWJsZUZvcm1BcnJheTxhbnk+O1xyXG4gIEBJbnB1dCgpIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLnN0YW5kYWxvbmUgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuX3ZhbHVlID09PSB2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICB9XHJcbiAgcHVibGljIGdldCB2YWx1ZSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuICBwcml2YXRlIF92YWx1ZTogYW55O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpZGVudGlmaWVyOiBzdHJpbmcgPSAnaWQnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgaXRlbXModmFsdWU6IGFueVtdKSB7XHJcbiAgICB0aGlzLl9pdGVtcyA9IHZhbHVlIHx8IFtdO1xyXG4gICAgaWYgKHRoaXMudmlydHVhbFNjcm9sbCAmJiB0aGlzLnZpcnR1ZWxsSW5pdGlhbGlzaWVydCkge1xyXG4gICAgICB0aGlzLnZpcnR1ZWxsRmlsdGVybih0aGlzLmF1dG9Db21wbGV0ZSA/IHRoaXMuc2hvd1ZhbHVlIDogdGhpcy5zZWFyY2hUZXh0KTtcclxuICAgICAgdGhpcy52aXJ0dWVsbGVBbnplaWdlQWt0dWFsaXNpZXJlbihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgaXRlbXMoKTogYW55W10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xyXG4gIH1cclxuICBwcml2YXRlIF9pdGVtczogYW55W10gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVuZGVydCBudXIgZGllIHNpY2h0YmFyZW4gT3B0aW9uZW4uIERpZSBPcHRpb25lbiBrb21tZW4gZGFubiBhdXMgYFtpdGVtc11gIHN0YXR0IGF1cyBgPG1yZC1zZWxlY3Qtb3B0aW9uPmA7XHJcbiAgICogV2VydCBpc3QgYGl0ZW1baWRlbnRpZmllcl1gLCBhbmdlemVpZ3Qgd2lyZCBgZGlzcGxheVdpdGgoaXRlbSlgIGJ6dy4gYGl0ZW1bbGFiZWxLZXldYCBvZGVyIGVpbiBgPG5nLXRlbXBsYXRlIG1yZFNlbGVjdE9wdGlvbj5gLlxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHZpcnR1YWxTY3JvbGw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKiogTnVyIG1pdCBgdmlydHVhbFNjcm9sbGAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbGFiZWxLZXk6IHN0cmluZyA9ICdiZXplaWNobnVuZyc7XHJcbiAgLyoqIE51ciBtaXQgYHZpcnR1YWxTY3JvbGxgOyBoYXQgVm9ycmFuZyB2b3IgYGxhYmVsS2V5YCAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNwbGF5V2l0aD86IChpdGVtOiBhbnkpID0+IHN0cmluZztcclxuICAvKiogTnVyIG1pdCBgdmlydHVhbFNjcm9sbGA6IEhvZWhlIGVpbmVyIE9wdGlvbiBpbiBweCwgZnVlciBhbGxlIGdsZWljaCBvZGVyIGAoaXRlbSwgaW5kZXgpID0+IHB4YCBqZSBPcHRpb24gKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogaXRlbVNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgaXRlbVNpemU/OiBNcmRWaXJ0dWFsU2Nyb2xsSXRlbVNpemU7XHJcbiAgLyoqIE51ciBtaXQgYHZpcnR1YWxTY3JvbGxgOiBtYXhpbWFsZSBIb2VoZSBkZXIgT3B0aW9uc2xpc3RlIGluIHB4ICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyB2aXJ0dWFsU2Nyb2xsTWF4SGVpZ2h0OiBudW1iZXIgPSAyNDA7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgYXV0b0NvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBzZWFyY2hTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGNoaXBTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIG51bGxhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KVxyXG4gIHNldCBtdWx0aXBsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fbXVsdGlwbGUgPSB2YWx1ZTtcclxuICB9XHJcbiAgZ2V0IG11bHRpcGxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xyXG4gIH1cclxuICBwcml2YXRlIF9tdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgY2xvc2VPblNlbGVjdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIGNoaXBQcmVmaXhJY29uPzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjaGlwU3VmZml4SWNvbj86IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHNob3dPcHRpb25zOiBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj4gPSBuZXcgT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzbW9vdGhTY3JvbGw6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2VhcmNoQXV0b2ZvY3VzOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgQE91dHB1dCgpIHRvdWNoZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgZm9jdXNlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBibHVycmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50IHRoYXQgaXMgZW1pdHRlZCB3aGVuIHRoZSBjaGlwIGNsb3NlIGJ1dHRvbiBpcyBjbGlja2VkLlxyXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8dm9pZD59XHJcbiAgICogQG1lbWJlcm9mIE1yZFNlbGVjdENvbXBvbmVudFxyXG4gICAqIEByZXR1cm5zIFRoZSB2YWx1ZSBvZiB0aGUgY2hpcCB0aGF0IHdhcyBjbG9zZWQuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIGNoaXBDbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuXHJcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKiogTWVsZGV0IGBtcmQtZm9ybS1maWVsZGAsIGRhc3MgYG1yZEZvcm1Db250cm9sYCBiencuIGBtcmRGb3JtQXJyYXlgIG5hY2ggZGVtIEF1ZmJhdSBnZXdlY2hzZWx0IGhhdCAqL1xyXG4gIHB1YmxpYyByZWFkb25seSBmb3JtQ29udHJvbEdld2VjaHNlbHQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBwcml2YXRlIGFuc2ljaHRJbml0aWFsaXNpZXJ0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBmb3JtQ29udHJvbEFibz86IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgcHVibGljIG9wdGlvbnNWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIF9zaG93Tm9PcHRpb25zT25TZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHN0YW5kYWxvbmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHNob3dWYWx1ZTogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIHNlYXJjaFRleHQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICBwdWJsaWMgb3B0aW9uc1dpZHRoRXhjZWVkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgb3B0aW9uc0hlaWdodEV4Y2VlZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgb3B0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uPzogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBwdWJsaWMgZ2VmaWx0ZXJ0ZUl0ZW1zOiBhbnlbXSA9IFtdO1xyXG4gIHB1YmxpYyB2aXJ0dWVsbGVBdXNnZXdhZWhsdGVJdGVtczogYW55W10gPSBbXTtcclxuICBwdWJsaWMgZm9rdXNJbmRleDogbnVtYmVyID0gLTE7XHJcbiAgcHJpdmF0ZSB2aXJ0dWVsbGVBdXN3YWhsOiBTZXQ8YW55PiA9IG5ldyBTZXQ8YW55PigpO1xyXG4gIHByaXZhdGUgdmlydHVlbGxJbml0aWFsaXNpZXJ0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyByZWFkb25seSB2aXJ0dWVsbGVyVHJhY2tCeTogVHJhY2tCeUZ1bmN0aW9uPGFueT4gPSAoXzogbnVtYmVyLCBpdGVtOiBhbnkpID0+IHRoaXMud2VydFZvbihpdGVtKTtcclxuXHJcblxyXG4gIF9wb3NpdGlvbnM6IENvbm5lY3RlZFBvc2l0aW9uW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIG9yaWdpblg6ICdzdGFydCcsXHJcbiAgICAgIG9yaWdpblk6ICdib3R0b20nLFxyXG4gICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcclxuICAgICAgb3ZlcmxheVk6ICd0b3AnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgb3JpZ2luWDogJ2VuZCcsXHJcbiAgICAgIG9yaWdpblk6ICdib3R0b20nLFxyXG4gICAgICBvdmVybGF5WDogJ2VuZCcsXHJcbiAgICAgIG92ZXJsYXlZOiAndG9wJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG9yaWdpblg6ICdzdGFydCcsXHJcbiAgICAgIG9yaWdpblk6ICd0b3AnLFxyXG4gICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcclxuICAgICAgb3ZlcmxheVk6ICdib3R0b20nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBvcmlnaW5YOiAnZW5kJyxcclxuICAgICAgb3JpZ2luWTogJ3RvcCcsXHJcbiAgICAgIG92ZXJsYXlYOiAnZW5kJyxcclxuICAgICAgb3ZlcmxheVk6ICdib3R0b20nXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMud2F0Y2godGhpcy5zaG93T3B0aW9ucy5jaGFuZ2VkLnBpcGUoc3RhcnRXaXRoKHRoaXMuc2hvd09wdGlvbnMudmFsdWUpKSwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKHZhbHVlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICB0aGlzLmJsdXIobnVsbCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWFyY2hTZWxlY3Rpb24gJiYgdGhpcy5zZWFyY2hBdXRvZm9jdXMpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoU2VsZWN0aW9uSW5wdXQ/Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgICB9XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLl9pbml0aWFsaXplZC5uZXh0KG51bGwpO1xyXG4gICAgdGhpcy5faW5pdGlhbGl6ZWQuY29tcGxldGUoKTtcclxuXHJcbiAgICB0aGlzLndhdGNoKHRoaXMub3B0aW9ucyEuY2hhbmdlcy5waXBlKHN0YXJ0V2l0aChudWxsKSksIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHtcclxuICAgICAgdGhpcy5fcmVzZXRPcHRpb25zKCk7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wpICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRWYWx1ZXMgPSAodGhpcy5mb3JtQXJyYXlDb250cm9sLnZhbHVlKS5tYXAodmFsdWUgPT4gdmFsdWVbdGhpcy5pZGVudGlmaWVyXSk7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zIS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sLnZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VkKCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gW3ZhbHVlXSBrb21tdCBvZnQgdm9yIGRlbiBPcHRpb25lbiBhbiAoei4gQi4gcGVyICpuZ0ZvciBuYWNoZ2VsYWRlbik7IGRpZSBBbnplaWdlIGVyc3QgbWl0IGlobmVuIGF1ZmxvZXNlblxyXG4gICAgICBpZiAodGhpcy5zdGFuZGFsb25lICYmICF0aGlzLmF1dG9Db21wbGV0ZSkge1xyXG4gICAgICAgIHRoaXMubW9kZWxDaGFuZ2VkKCk7XHJcbiAgICAgIH1cclxuICAgIH0pKTtcclxuXHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5jdXN0b21UcmlnZ2VyKSkge1xyXG4gICAgICB0aGlzLndhdGNoKHRoaXMuY3VzdG9tVHJpZ2dlci50cmlnZ2VyQ2xpY2ssIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHtcclxuICAgICAgICB0aGlzLnRyaWdnZXJDbGlja2VkKCk7XHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXMga2FubiBudXIgZWluIEZvcm1Db250cm9sIG9kZXIgZWluIEZvcm1BcnJheUNvbnRyb2wgdmVyd2VuZGV0IHdlcmRlbi4nKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YW5kYWxvbmUgJiYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpIHx8IFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCkpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXMga2FubiBudXIgZWluIE1vZGVsIG9kZXIgZWluIEZvcm1Db250cm9sL0Zvcm1BcnJheUNvbnRyb2wgdmVyd2VuZGV0IHdlcmRlbi4nKTtcclxuICAgIH1cclxuICAgIGlmICgoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgfHwgVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sKSkgJiYgdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VpbiBkZWFrdGl2aWVydGVzIFNlbGVjdCBrYW5uIG5pY2h0IG1pdCBlaW5lbSBGb3JtQ29udHJvbCBvZGVyIEZvcm1BcnJheUNvbnRyb2wgdmVyd2VuZGV0IHdlcmRlbi4nKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZvcm1Db250cm9sQWJvbm5pZXJlbigpO1xyXG4gICAgaWYgKHRoaXMuc3RhbmRhbG9uZSkge1xyXG4gICAgICB0aGlzLndhdGNoKHRoaXMudmFsdWVDaGFuZ2UsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHRoaXMubW9kZWxDaGFuZ2VkKCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zIS5maW5kKG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IHRoaXMuZm9ybUNvbnRyb2whLnZhbHVlKT8ub3B0aW9uQ2xpY2soKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlIGFzIGFueVtdO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyEuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWVzLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpIHtcclxuICAgICAgICAgICAgb3B0aW9uLm9wdGlvbkNsaWNrKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy52YWx1ZSkpIHtcclxuICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zIS5maW5kKG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IHRoaXMudmFsdWUpPy5vcHRpb25DbGljaygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZFZhbHVlcyA9IHRoaXMudmFsdWUgYXMgYW55W107XHJcbiAgICAgICAgdGhpcy5vcHRpb25zIS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBvcHRpb24ub3B0aW9uQ2xpY2soKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFByw7xmZSwgb2Igc2hvd09wdGlvbnMgYmVyZWl0cyB0cnVlIGlzdCB1bmQgc2V0emUgZGVuIEZva3VzIGZhbGxzIG7DtnRpZ1xyXG4gICAgaWYgKHRoaXMuc2hvd09wdGlvbnMudmFsdWUgJiYgdGhpcy5zZWFyY2hTZWxlY3Rpb24gJiYgdGhpcy5zZWFyY2hBdXRvZm9jdXMpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hTZWxlY3Rpb25JbnB1dD8ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnZpcnR1YWxTY3JvbGwpIHtcclxuICAgICAgdGhpcy52aXJ0dWVsbEluaXRpYWxpc2llcnQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnZpcnR1ZWxsRmlsdGVybih0aGlzLmF1dG9Db21wbGV0ZSA/IHRoaXMuc2hvd1ZhbHVlIDogdGhpcy5zZWFyY2hUZXh0KTtcclxuICAgICAgdGhpcy52aXJ0dWVsbGVBbnplaWdlQWt0dWFsaXNpZXJlbih0cnVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuYW5zaWNodEluaXRpYWxpc2llcnQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtQ29udHJvbEFib25uaWVyZW4oKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvcm1Db250cm9sQWJvPy51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5mb3JtQ29udHJvbEFibyA9IHVuZGVmaW5lZDtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sQWJvID0gdGhpcy53YXRjaCh0aGlzLmZvcm1Db250cm9sLnZhbHVlQ2hhbmdlcywgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKCkgPT4gdGhpcy5mb3JtQ29udHJvbENoYW5nZWQoKSkpO1xyXG4gICAgfSBlbHNlIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wpKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2xBYm8gPSB0aGlzLndhdGNoKHRoaXMuZm9ybUFycmF5Q29udHJvbC52YWx1ZUNoYW5nZXMsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHRoaXMuZm9ybUFycmF5Q29udHJvbENoYW5nZWQoKSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFZvciBkZW0gQXVmYmF1IHVlYmVybmltbXQgbmdBZnRlclZpZXdJbml0IGRhcyBCaW5kZW47IGRhbmFjaCBBbnplaWdlIHVuZCBBYm8gYXVmIGRhcyBuZXVlIENvbnRyb2wgdW1zdGVsbGVuLiAqL1xyXG4gIHByaXZhdGUgbmFjaENvbnRyb2xXZWNoc2VsTmV1QmluZGVuKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmFuc2ljaHRJbml0aWFsaXNpZXJ0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZm9ybUNvbnRyb2xBYm9ubmllcmVuKCk7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbENoYW5nZWQoKTtcclxuICAgIH0gZWxzZSBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sKSkge1xyXG4gICAgICB0aGlzLmZvcm1BcnJheUNvbnRyb2xDaGFuZ2VkKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNob3dWYWx1ZSA9ICcnO1xyXG4gICAgICB0aGlzLm9wdGlvbnM/LmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvcm1Db250cm9sR2V3ZWNoc2VsdC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1Db250cm9sQ2hhbmdlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZpcnR1YWxTY3JvbGwpIHtcclxuICAgICAgdGhpcy52aXJ0dWVsbGVBbnplaWdlQWt0dWFsaXNpZXJlbih0cnVlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYXV0b0NvbXBsZXRlKSB7XHJcbiAgICAgIHRoaXMuc2hvd1ZhbHVlID0gdGhpcy5mb3JtQ29udHJvbCEudmFsdWU7XHJcbiAgICAgIHRoaXMub3B0aW9ucyEuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgIG9wdGlvbi5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLnNob3dWYWx1ZSkgfHwgKG9wdGlvbi5vcHRpb25WYWx1ZT8ubmF0aXZlRWxlbWVudC5pbm5lclRleHQgfHwgJycpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNob3dWYWx1ZT8udG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgICAgb3B0aW9uLmZpbHRlcmVkID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG9wdGlvbi5maWx0ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuc2hvd1ZhbHVlKSAmJiB0aGlzLnNob3dWYWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IGZpbHRlcmVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucyEuZmlsdGVyKG9wdGlvbiA9PiAhb3B0aW9uLmZpbHRlcmVkKTtcclxuICAgICAgICBpZiAoZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGZpbHRlcmVkT3B0aW9uc1swXS5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93Tm9PcHRpb25zT25TZWFyY2ggPSBmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoID09PSAwO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2whLnZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMuc2hvd1ZhbHVlID0gJyc7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zIS5mb3JFYWNoKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnMhLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlKTtcclxuICAgICAgICAgIGxldCBvcHRpb24gPSB0aGlzLm9wdGlvbnMhLmZpbmQob3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gdGhpcy5mb3JtQ29udHJvbCEudmFsdWUpO1xyXG4gICAgICAgICAgLy8gT2huZSBwYXNzZW5kZSBPcHRpb24gYmxpZWJlIHNvbnN0IGRlciBUZXh0IGRlcyB2b3JoZXJpZ2VuIFdlcnRzIGJ6dy4gQ29udHJvbHMgc3RlaGVuXHJcbiAgICAgICAgICB0aGlzLnNob3dWYWx1ZSA9IFV0aWwuaXNEZWZpbmVkKG9wdGlvbikgPyBvcHRpb24ub3B0aW9uVmFsdWU/Lm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0IHx8ICcnIDogJyc7XHJcbiAgICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQob3B0aW9uKSkge1xyXG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsZXQgc2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLmZvcm1Db250cm9sIS52YWx1ZSBhcyBhbnlbXTtcclxuICAgICAgICAgIHRoaXMub3B0aW9ucyEuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucyEuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQpO1xyXG4gICAgICAgICAgdGhpcy5zaG93VmFsdWUgPSBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwID8gJycgOiBzZWxlY3RlZE9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24ub3B0aW9uVmFsdWU/Lm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0IHx8ICcnKS5qb2luKCcsICcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1BcnJheUNvbnRyb2xDaGFuZ2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmlydHVhbFNjcm9sbCkge1xyXG4gICAgICB0aGlzLnZpcnR1ZWxsZUFuemVpZ2VBa3R1YWxpc2llcmVuKHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5hdXRvQ29tcGxldGUpIHtcclxuICAgICAgLy8gVE9ETzogSW1wbGVtZW50XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCEuY29udHJvbC52YWx1ZSkgfHwgKHRoaXMuZm9ybUFycmF5Q29udHJvbCEuY29udHJvbC52YWx1ZSBhcyBhbnlbXSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5zaG93VmFsdWUgPSAnJztcclxuICAgICAgICB0aGlzLm9wdGlvbnMhLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRWYWx1ZXMgPSAodGhpcy5mb3JtQXJyYXlDb250cm9sIS5jb250cm9sLnZhbHVlIGFzIGFueVtdKS5tYXAodmFsdWUgPT4gdmFsdWVbdGhpcy5pZGVudGlmaWVyXSk7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zIS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucyEuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQpO1xyXG4gICAgICAgIHRoaXMuc2hvd1ZhbHVlID0gc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCA/ICcnIDogc2VsZWN0ZWRPcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLm9wdGlvblZhbHVlPy5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCB8fCAnJykuam9pbignLCAnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1vZGVsQ2hhbmdlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZpcnR1YWxTY3JvbGwpIHtcclxuICAgICAgdGhpcy52aXJ0dWVsbGVBbnplaWdlQWt0dWFsaXNpZXJlbih0cnVlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYXV0b0NvbXBsZXRlKSB7XHJcbiAgICAgIHRoaXMuc2hvd1ZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgdGhpcy5vcHRpb25zIS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgb3B0aW9uLmZvY3VzZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoKG9wdGlvbi5vcHRpb25WYWx1ZT8ubmF0aXZlRWxlbWVudC5pbm5lclRleHQgfHwgJycpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNob3dWYWx1ZT8udG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgICAgb3B0aW9uLmZpbHRlcmVkID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG9wdGlvbi5maWx0ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMuc2hvd1ZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgZmlsdGVyZWRPcHRpb25zID0gdGhpcy5vcHRpb25zIS5maWx0ZXIob3B0aW9uID0+ICFvcHRpb24uZmlsdGVyZWQpO1xyXG4gICAgICAgIGlmIChmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgZmlsdGVyZWRPcHRpb25zWzBdLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dOb09wdGlvbnNPblNlYXJjaCA9IGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPT09IDA7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghVXRpbC5pc0RlZmluZWQodGhpcy52YWx1ZSkpIHtcclxuICAgICAgICB0aGlzLnNob3dWYWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyEuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgdGhpcy5vcHRpb25zIS5mb3JFYWNoKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZSk7XHJcbiAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5vcHRpb25zIS5maW5kKG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IHRoaXMudmFsdWUpO1xyXG4gICAgICAgICAgLy8gT2huZSBwYXNzZW5kZSBPcHRpb24gYmxpZWJlIHNvbnN0IGRlciBUZXh0IGRlcyB2b3JoZXJpZ2VuIFdlcnRzIHN0ZWhlblxyXG4gICAgICAgICAgdGhpcy5zaG93VmFsdWUgPSBVdGlsLmlzRGVmaW5lZChvcHRpb24pID8gb3B0aW9uLm9wdGlvblZhbHVlPy5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCB8fCAnJyA6ICcnO1xyXG4gICAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKG9wdGlvbikpIHtcclxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IHNlbGVjdGVkVmFsdWVzID0gdGhpcy52YWx1ZSBhcyBhbnlbXTtcclxuICAgICAgICAgIHRoaXMub3B0aW9ucyEuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucyEuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQpO1xyXG4gICAgICAgICAgdGhpcy5zaG93VmFsdWUgPSBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwID8gJycgOiBzZWxlY3RlZE9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24ub3B0aW9uVmFsdWU/Lm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0IHx8ICcnKS5qb2luKCcsICcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9yZXNldE9wdGlvbnMoKTogdm9pZCB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5vcHRpb25DaGFuZ2VTdWJzY3JpcHRpb24pICYmICF0aGlzLm9wdGlvbkNoYW5nZVN1YnNjcmlwdGlvbi5jbG9zZWQpIHtcclxuICAgICAgdGhpcy5vcHRpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIHRoaXMub3B0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy53YXRjaCh0aGlzLm9wdGlvblNlbGVjdGlvbkNoYW5nZXMsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKChldmVudDogTXJkU2VsZWN0T3B0aW9uQ2hhbmdlKSA9PiB7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChldmVudCkpIHtcclxuICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgIHRoaXMub3B0aW9ucyEuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9wdGlvbnMhLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5mb2N1c2VkID0gZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9ICcnO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyEuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLmZpbHRlcmVkID0gZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2hvd05vT3B0aW9uc09uU2VhcmNoID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKGV2ZW50Lm9wdGlvbikgJiYgIXRoaXMuYXV0b0NvbXBsZXRlKSB7XHJcbiAgICAgICAgICBldmVudC5vcHRpb24uc2VsZWN0ZWQgPSB0aGlzLm11bHRpcGxlID8gKGV2ZW50LmNoZWNrZWQgPz8gZmFsc2UpIDogdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSAmJiB0aGlzLmZvcm1Db250cm9sLnZhbHVlICE9PSBldmVudC5rZXkpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShldmVudC5rZXkpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YW5kYWxvbmUgJiYgdGhpcy52YWx1ZSAhPT0gZXZlbnQua2V5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBldmVudC5rZXk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dWYWx1ZSA9IGV2ZW50LnZhbHVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5zaG93T3B0aW9ucy52YWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5vcHRpb25zIS5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCk7XHJcbiAgICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwID8gbnVsbCA6IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMuc3RhbmRhbG9uZSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBzZWxlY3RlZE9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCkpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtQXJyYXlBYmdsZWljaGVuKHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IHRoaXMuaXRlbXMuZmluZChpdGVtID0+IGl0ZW1bdGhpcy5pZGVudGlmaWVyXSA9PT0gb3B0aW9uLnZhbHVlKSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMuY2xvc2VPblNlbGVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dPcHRpb25zLnZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybUFycmF5QWJnbGVpY2hlbihzZWxlY3RlZEl0ZW1zOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKHNlbGVjdGVkSXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMuZm9ybUFycmF5Q29udHJvbCEucmVzZXQoW10pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgaXRlbUluZGl6ZXNUb1JlbW92ZTogbnVtYmVyW10gPSBbXTtcclxuICAgIGxldCBpdGVtc1RvQWRkOiBhbnlbXSA9IHNlbGVjdGVkSXRlbXMuc2xpY2UoKTtcclxuICAgIHRoaXMuZm9ybUFycmF5Q29udHJvbCEuZW50cmllcy5mb3JFYWNoKChlbnRyeTogSUFjY2Vzc2FibGVGb3JtQ29udHJvbDxhbnksYW55PiwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKCFVdGlsLmlzRGVmaW5lZChzZWxlY3RlZEl0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtW3RoaXMuaWRlbnRpZmllcl0gPT09IChlbnRyeSBhcyBBY2Nlc3NhYmxlRm9ybUdyb3VwPGFueSxhbnk+KS5maWVsZHNbdGhpcy5pZGVudGlmaWVyXS52YWx1ZSkpKSB7XHJcbiAgICAgICAgaXRlbUluZGl6ZXNUb1JlbW92ZS5wdXNoKGluZGV4KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpdGVtc1RvQWRkID0gaXRlbXNUb0FkZC5maWx0ZXIoaXRlbSA9PiBpdGVtW3RoaXMuaWRlbnRpZmllcl0gIT09IChlbnRyeSBhcyBBY2Nlc3NhYmxlRm9ybUdyb3VwPGFueSxhbnk+KS5maWVsZHNbdGhpcy5pZGVudGlmaWVyXS52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaXRlbUluZGl6ZXNUb1JlbW92ZS5yZXZlcnNlKCkuZm9yRWFjaChpbmRleCA9PiB0aGlzLmZvcm1BcnJheUNvbnRyb2whLnJlbW92ZUF0KGluZGV4LCBmYWxzZSwge29ubHlTZWxmOiB0cnVlfSkpO1xyXG4gICAgaXRlbXNUb0FkZC5mb3JFYWNoKGl0ZW0gPT4gdGhpcy5mb3JtQXJyYXlDb250cm9sIS5wdXNoKGl0ZW0pKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVTZWxlY3RlZCgpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZSk7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShudWxsKTtcclxuICAgIH1cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wpKSB7XHJcbiAgICAgIHRoaXMuZm9ybUFycmF5Q29udHJvbC5yZXNldChbXSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGFuZGFsb25lKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5zaG93VmFsdWUgPSAnJztcclxuICAgIGlmICghdGhpcy5tdWx0aXBsZSB8fCB0aGlzLmNsb3NlT25TZWxlY3QpIHtcclxuICAgICAgdGhpcy5zaG93T3B0aW9ucy52YWx1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoaXBDbG9zZWQob3B0aW9uOiBNcmRTZWxlY3RPcHRpb25Db21wb25lbnQpOiB2b2lkIHtcclxuICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgbGV0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucyEuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQpO1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBzZWxlY3RlZE9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YW5kYWxvbmUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDAgPyBudWxsIDogc2VsZWN0ZWRPcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wpKSB7XHJcbiAgICAgIGxldCByZW1vdmVkSW5kZXggPSB0aGlzLmZvcm1BcnJheUNvbnRyb2wuZW50cmllcy5maW5kSW5kZXgoKGVudHJ5OiBJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSxhbnk+KSA9PiAoZW50cnkgYXMgQWNjZXNzYWJsZUZvcm1Hcm91cDxhbnksYW55PikuZmllbGRzW3RoaXMuaWRlbnRpZmllcl0udmFsdWUgPT09IG9wdGlvbi52YWx1ZSk7XHJcbiAgICAgIHRoaXMuZm9ybUFycmF5Q29udHJvbC5yZW1vdmVBdChyZW1vdmVkSW5kZXgsIGZhbHNlLCB7b25seVNlbGY6IHRydWV9KTtcclxuICAgICAgLy8gdGhpcy5mb3JtQXJyYXlDb250cm9sLnJlc2V0KHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDAgPyBbXSA6IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IHRoaXMuaXRlbXMuZmluZChpdGVtID0+IGl0ZW1bdGhpcy5pZGVudGlmaWVyXSA9PT0gb3B0aW9uLnZhbHVlKSkpO1xyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5zaG93VmFsdWUgPSBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwID8gJycgOiBzZWxlY3RlZE9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24ub3B0aW9uVmFsdWU/Lm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0IHx8ICcnKS5qb2luKCcsICcpO1xyXG4gICAgdGhpcy5jaGlwQ2xvc2VDbGlja2VkKG9wdGlvbi52YWx1ZSk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXV0b0NvbXBsZXRlSW5wdXQoZXZlbnQ6IElucHV0RXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhbmRhbG9uZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIH1cclxuICAgIC8vIHRoaXMuc2hvd1ZhbHVlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIC8vIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAvLyAgIG9wdGlvbi5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICAvLyAgIGlmICgob3B0aW9uLm9wdGlvblZhbHVlPy5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCB8fCAnJykudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2hvd1ZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgIC8vICAgICBvcHRpb24uZmlsdGVyZWQgPSBmYWxzZTtcclxuICAgIC8vICAgfSBlbHNlIHtcclxuICAgIC8vICAgICBvcHRpb24uZmlsdGVyZWQgPSB0cnVlO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGlmICh0aGlzLnNob3dWYWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgIGxldCBmaWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiAhb3B0aW9uLmZpbHRlcmVkKTtcclxuICAgIC8vICAgaWYgKGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgICAgZmlsdGVyZWRPcHRpb25zWzBdLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIHRoaXMuc2hvd05vT3B0aW9uc09uU2VhcmNoID0gZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA9PT0gMDtcclxuICAgIC8vIH1cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlYXJjaElucHV0KGV2ZW50OiBJbnB1dEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnNlYXJjaFRleHQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgaWYgKHRoaXMudmlydHVhbFNjcm9sbCkge1xyXG4gICAgICB0aGlzLnZpcnR1ZWxsRmlsdGVybih0aGlzLnNlYXJjaFRleHQpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vcHRpb25zIS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgIG9wdGlvbi5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgIGlmICgob3B0aW9uLm9wdGlvblZhbHVlPy5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCB8fCAnJykudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgb3B0aW9uLmZpbHRlcmVkID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3B0aW9uLmZpbHRlcmVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hUZXh0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGZpbHRlcmVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucyEuZmlsdGVyKG9wdGlvbiA9PiAhb3B0aW9uLmZpbHRlcmVkKTtcclxuICAgICAgaWYgKGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZmlsdGVyZWRPcHRpb25zWzBdLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2hvd05vT3B0aW9uc09uU2VhcmNoID0gZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmlydHVhbFNjcm9sbCkge1xyXG4gICAgICB0aGlzLnZpcnR1ZWxsZVRhc3RlVmVyYXJiZWl0ZW4oZXZlbnQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZmlsdGVyZWRPcHRpb25zID0gdGhpcy5vcHRpb25zIS5maWx0ZXIob3B0aW9uID0+ICFvcHRpb24uZmlsdGVyZWQpO1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBmaWx0ZXJlZE9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLmZvY3VzZWQpO1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQoc2VsZWN0ZWRPcHRpb24pKSB7XHJcbiAgICAgICAgc2VsZWN0ZWRPcHRpb24ub3B0aW9uQ2xpY2soKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgbGV0IGZvY3VzZWRPcHRpb24gPSBmaWx0ZXJlZE9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLmZvY3VzZWQpO1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQoZm9jdXNlZE9wdGlvbikpIHtcclxuICAgICAgICBsZXQgZm9jdXNlZE9wdGlvbkluZGV4ID0gZmlsdGVyZWRPcHRpb25zLmZpbmRJbmRleCgob3B0aW9uKSA9PiBvcHRpb24uZm9jdXNlZCk7XHJcbiAgICAgICAgaWYgKGZvY3VzZWRPcHRpb25JbmRleCA+IC0xICYmIGZvY3VzZWRPcHRpb25JbmRleCA8IGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggLSAyKSB7XHJcbiAgICAgICAgICBmb2N1c2VkT3B0aW9uLmZvY3VzZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGZpbHRlcmVkT3B0aW9uc1tmb2N1c2VkT3B0aW9uSW5kZXggKyAxXS5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsdGVyZWRPcHRpb25zWzBdLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgIGxldCBmb2N1c2VkT3B0aW9uID0gZmlsdGVyZWRPcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi5mb2N1c2VkKTtcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKGZvY3VzZWRPcHRpb24pKSB7XHJcbiAgICAgICAgbGV0IGZvY3VzZWRPcHRpb25JbmRleCA9IGZpbHRlcmVkT3B0aW9ucy5maW5kSW5kZXgoKG9wdGlvbikgPT4gb3B0aW9uLmZvY3VzZWQpO1xyXG4gICAgICAgIGlmIChmb2N1c2VkT3B0aW9uSW5kZXggPiAwKSB7XHJcbiAgICAgICAgICBmb2N1c2VkT3B0aW9uLmZvY3VzZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGZpbHRlcmVkT3B0aW9uc1tmb2N1c2VkT3B0aW9uSW5kZXggLSAxXS5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsdGVyZWRPcHRpb25zW2ZpbHRlcmVkT3B0aW9ucy5sZW5ndGggLSAxXS5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB0cmlnZ2VyQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIGlmICgoIVV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpIHx8ICF0aGlzLmZvcm1Db250cm9sLmRpc2FibGVkKSAmJiAoIVV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCkgfHwgIXRoaXMuZm9ybUFycmF5Q29udHJvbC5kaXNhYmxlZCkgJiYgKCF0aGlzLnN0YW5kYWxvbmUgfHwgIXRoaXMuZGlzYWJsZWQpKSB7XHJcbiAgICAgIHRoaXMudG91Y2hlZC5lbWl0KCk7XHJcbiAgICAgIHRoaXMuZm9jdXNlZC5lbWl0KCk7XHJcbiAgICAgIHRoaXMuc2hvd09wdGlvbnMudmFsdWUgPSB0cnVlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy52aXJ0dWFsU2Nyb2xsKSB7XHJcbiAgICAgICAgICAvLyBEaWUgYXVzZ2V3YWVobHRlIE9wdGlvbiBpc3QgZXZ0bC4gbmljaHQgZ2VyZW5kZXJ0LCBkYWhlciB1ZWJlciBkZW4gSW5kZXggc2Nyb2xsZW5cclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZWZpbHRlcnRlSXRlbXMuZmluZEluZGV4KGl0ZW0gPT4gdGhpcy52aXJ0dWVsbGVBdXN3YWhsLmhhcyh0aGlzLndlcnRWb24oaXRlbSkpKTtcclxuICAgICAgICAgIHRoaXMudmlydHVlbGxlc1Njcm9sbD8uc2Nyb2xsVG9JbmRleChpbmRleCwgJ2NlbnRlcicsIHRoaXMuc21vb3RoU2Nyb2xsID8gJ3Ntb290aCcgOiAnYXV0bycpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXJkLXNlbGVjdC1vcHRpb25zLW92ZXJsYXkgLm1yZC1zZWxlY3Qtb3B0aW9ucy1zY3JvbGwgLm1yZC1zZWxlY3Qtb3B0aW9uLWl0ZW0uc2VsZWN0ZWQnKTtcclxuICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQoc2VsZWN0ZWRPcHRpb24pKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5zbW9vdGhTY3JvbGwpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24uc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICduZWFyZXN0JywgaW5saW5lOiAnbmVhcmVzdCd9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogJ2luc3RhbnQnLCBibG9jazogJ25lYXJlc3QnLCBpbmxpbmU6ICduZWFyZXN0J30pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTApO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2VsZWN0ZWRPcHRpb25zKCk6IE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudFtdIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMhLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgc2hvd05vT3B0aW9uc09uU2VhcmNoKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93Tm9PcHRpb25zT25TZWFyY2ggPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzaG93Tm9PcHRpb25zT25TZWFyY2goKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd05vT3B0aW9uc09uU2VhcmNoO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50fG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYmx1cihldmVudDogRm9jdXNFdmVudHxudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLmJsdXJyZWQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc3REZWFrdGl2aWVydCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhISh0aGlzLmZvcm1Db250cm9sPy5kaXNhYmxlZCB8fCB0aGlzLmZvcm1BcnJheUNvbnRyb2w/LmRpc2FibGVkIHx8IHRoaXMuZGlzYWJsZWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqIG51bGwgc3RhdHQgLTE6IGVpbiB0YWJpbmRleCB2b24gLTEgbGFlc3N0IHNpY2ggcGVyIE1hdXNrbGljayB3ZWl0ZXJoaW4gZm9rdXNzaWVyZW4gKi9cclxuICBwdWJsaWMgZ2V0IHRyaWdnZXJUYWJJbmRleCgpOiBudW1iZXIgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLmlzdERlYWt0aXZpZXJ0ID8gbnVsbCA6IDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25UcmlnZ2VyRm9jdXMoKTogdm9pZCB7XHJcbiAgICAvLyBCbHVyIGJsZWlidCBlcmxhdWJ0LCBkYW1pdCBlaW4gd2FlaHJlbmQgZGVzIEZva3VzIGRlYWt0aXZpZXJ0ZXMgU2VsZWN0IGRhcyBGb3JtdWxhcmZlbGQgenVydWVja3NldHp0XHJcbiAgICBpZiAodGhpcy5pc3REZWFrdGl2aWVydCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvY3VzKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uVHJpZ2dlckJsdXIoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuc2hvd09wdGlvbnMudmFsdWUpIHtcclxuICAgICAgdGhpcy5ibHVyKG51bGwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uVHJpZ2dlcktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNob3dPcHRpb25zLnZhbHVlKSB7XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnNob3dPcHRpb25zLnZhbHVlID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnVGFiJykge1xyXG4gICAgICAgIHRoaXMuc2hvd09wdGlvbnMudmFsdWUgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJyB8fCBldmVudC5rZXkgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgfHwgZXZlbnQua2V5ID09PSAnICcgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLnRyaWdnZXJDbGlja2VkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hpcENsb3NlQ2xpY2tlZCh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmNoaXBDbG9zZS5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0gVmlydHVlbGxlcyBTY3JvbGxpbmc6IFp1c3RhbmQga29tbXQgYXVzIGl0ZW1zIHVuZCBkZW0gV2VydCwgbmljaHQgYXVzIE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudHMgLS0tLS0tLS0tLVxyXG5cclxuICBwdWJsaWMgd2VydFZvbihpdGVtOiBhbnkpOiBhbnkge1xyXG4gICAgcmV0dXJuIFV0aWwuaXNEZWZpbmVkKGl0ZW0pICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyA/IGl0ZW1bdGhpcy5pZGVudGlmaWVyXSA6IGl0ZW07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbGFiZWxWb24oaXRlbTogYW55KTogc3RyaW5nIHtcclxuICAgIGlmICghVXRpbC5pc0RlZmluZWQoaXRlbSkpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZGlzcGxheVdpdGgpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlXaXRoKGl0ZW0pID8/ICcnO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBpdGVtICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGFiZWwgPSBpdGVtW3RoaXMubGFiZWxLZXldO1xyXG4gICAgcmV0dXJuIFV0aWwuaXNEZWZpbmVkKGxhYmVsKSA/IFN0cmluZyhsYWJlbCkgOiAnJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc3RWaXJ0dWVsbEF1c2dld2FlaGx0KGl0ZW06IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmlydHVlbGxlQXVzd2FobC5oYXModGhpcy53ZXJ0Vm9uKGl0ZW0pKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB2aXJ0dWVsbGVPcHRpb25HZWtsaWNrdChpdGVtOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IHdlcnQgPSB0aGlzLndlcnRWb24oaXRlbSk7XHJcbiAgICB0aGlzLnNlYXJjaFRleHQgPSAnJztcclxuICAgIHRoaXMudmlydHVlbGxGaWx0ZXJuKCcnKTtcclxuICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgJiYgdGhpcy5mb3JtQ29udHJvbC52YWx1ZSAhPT0gd2VydCkge1xyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUod2VydCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGFuZGFsb25lICYmIHRoaXMudmFsdWUgIT09IHdlcnQpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gd2VydDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNob3dPcHRpb25zLnZhbHVlID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBhdXN3YWhsID0gbmV3IFNldCh0aGlzLnZpcnR1ZWxsZUF1c3dhaGwpO1xyXG4gICAgICBpZiAoYXVzd2FobC5oYXMod2VydCkpIHtcclxuICAgICAgICBhdXN3YWhsLmRlbGV0ZSh3ZXJ0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhdXN3YWhsLmFkZCh3ZXJ0KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnZpcnR1ZWxsZVdlcnRlU2V0emVuKHRoaXMuaXRlbXMubWFwKGkgPT4gdGhpcy53ZXJ0Vm9uKGkpKS5maWx0ZXIodyA9PiBhdXN3YWhsLmhhcyh3KSkpO1xyXG4gICAgICBpZiAodGhpcy5jbG9zZU9uU2VsZWN0KSB7XHJcbiAgICAgICAgdGhpcy5zaG93T3B0aW9ucy52YWx1ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdmlydHVlbGxlbkNoaXBTY2hsaWVzc2VuKGl0ZW06IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3Qgd2VydCA9IHRoaXMud2VydFZvbihpdGVtKTtcclxuICAgIHRoaXMudmlydHVlbGxlV2VydGVTZXR6ZW4oQXJyYXkuZnJvbSh0aGlzLnZpcnR1ZWxsZUF1c3dhaGwpLmZpbHRlcih3ID0+IHcgIT09IHdlcnQpKTtcclxuICAgIHRoaXMuY2hpcENsb3NlQ2xpY2tlZCh3ZXJ0KTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIC8qKiBOdXIgZnVlciBgbXVsdGlwbGVgICovXHJcbiAgcHJpdmF0ZSB2aXJ0dWVsbGVXZXJ0ZVNldHplbih3ZXJ0ZTogYW55W10pOiB2b2lkIHtcclxuICAgIGNvbnN0IG5ldWVyV2VydCA9IHdlcnRlLmxlbmd0aCA9PT0gMCA/IG51bGwgOiB3ZXJ0ZTtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKG5ldWVyV2VydCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGFuZGFsb25lKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBuZXVlcldlcnQ7XHJcbiAgICB9XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sKSkge1xyXG4gICAgICB0aGlzLmZvcm1BcnJheUFiZ2xlaWNoZW4od2VydGUubWFwKHcgPT4gdGhpcy5pdGVtcy5maW5kKGl0ZW0gPT4gdGhpcy53ZXJ0Vm9uKGl0ZW0pID09PSB3KSkuZmlsdGVyKGl0ZW0gPT4gVXRpbC5pc0RlZmluZWQoaXRlbSkpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXVzZ2V3YWVobHRlV2VydGVMZXNlbigpOiBhbnlbXSB7XHJcbiAgICBsZXQgd2VydDogYW55O1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCkpIHtcclxuICAgICAgcmV0dXJuICgodGhpcy5mb3JtQXJyYXlDb250cm9sLnZhbHVlIGFzIGFueVtdKSB8fCBbXSkubWFwKGVpbnRyYWcgPT4gZWludHJhZz8uW3RoaXMuaWRlbnRpZmllcl0pO1xyXG4gICAgfSBlbHNlIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICB3ZXJ0ID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdlcnQgPSB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh3ZXJ0KSkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSAmJiBBcnJheS5pc0FycmF5KHdlcnQpID8gd2VydCA6IFt3ZXJ0XTtcclxuICB9XHJcblxyXG4gIC8qKiBAcGFyYW0gcmVuZGVybiBTb2ZvcnQgcmVuZGVybjsgaW0gSW5wdXQtU2V0dGVyIG5pY2h0IG5vZXRpZywgd2VpbCBkaWUgQ2hhbmdlIERldGVjdGlvbiBvaG5laGluIGZvbGd0ICovXHJcbiAgcHJpdmF0ZSB2aXJ0dWVsbGVBbnplaWdlQWt0dWFsaXNpZXJlbihyZW5kZXJuOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hdXRvQ29tcGxldGUpIHtcclxuICAgICAgdGhpcy5zaG93VmFsdWUgPSBVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSA/IHRoaXMuZm9ybUNvbnRyb2wudmFsdWUgOiB0aGlzLnZhbHVlO1xyXG4gICAgICB0aGlzLnZpcnR1ZWxsRmlsdGVybih0aGlzLnNob3dWYWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB3ZXJ0ZSA9IHRoaXMuYXVzZ2V3YWVobHRlV2VydGVMZXNlbigpO1xyXG4gICAgICB0aGlzLnZpcnR1ZWxsZUF1c3dhaGwgPSBuZXcgU2V0KHdlcnRlKTtcclxuICAgICAgdGhpcy52aXJ0dWVsbGVBdXNnZXdhZWhsdGVJdGVtcyA9IHdlcnRlXHJcbiAgICAgICAgLm1hcCh3ID0+IHRoaXMuaXRlbXMuZmluZChpdGVtID0+IHRoaXMud2VydFZvbihpdGVtKSA9PT0gdykpXHJcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IFV0aWwuaXNEZWZpbmVkKGl0ZW0pKTtcclxuICAgICAgdGhpcy5zaG93VmFsdWUgPSB0aGlzLnZpcnR1ZWxsZUF1c2dld2FlaGx0ZUl0ZW1zLm1hcChpdGVtID0+IHRoaXMubGFiZWxWb24oaXRlbSkpLmpvaW4oJywgJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIGlmIChyZW5kZXJuKSB7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmlydHVlbGxGaWx0ZXJuKHRleHQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3Qgc3VjaGUgPSAodGV4dCB8fCAnJykudG9Mb3dlckNhc2UoKTtcclxuICAgIHRoaXMuZ2VmaWx0ZXJ0ZUl0ZW1zID0gc3VjaGUubGVuZ3RoID09PSAwXHJcbiAgICAgID8gdGhpcy5pdGVtc1xyXG4gICAgICA6IHRoaXMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gdGhpcy5sYWJlbFZvbihpdGVtKS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3VjaGUpID4gLTEpO1xyXG4gICAgdGhpcy5mb2t1c0luZGV4ID0gc3VjaGUubGVuZ3RoID4gMCAmJiB0aGlzLmdlZmlsdGVydGVJdGVtcy5sZW5ndGggPiAwID8gMCA6IC0xO1xyXG4gICAgLy8gRmVsZCBzdGF0dCBTZXR0ZXIsIGRhbWl0IGhpZXIgKGF1Y2ggYXVzIGRlbSBpdGVtcy1TZXR0ZXIgaGVyYXVzKSBrZWluZSBDaGFuZ2UgRGV0ZWN0aW9uIGFuZ2VzdG9zc2VuIHdpcmRcclxuICAgIHRoaXMuX3Nob3dOb09wdGlvbnNPblNlYXJjaCA9IHN1Y2hlLmxlbmd0aCA+IDAgJiYgdGhpcy5nZWZpbHRlcnRlSXRlbXMubGVuZ3RoID09PSAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2aXJ0dWVsbGVUYXN0ZVZlcmFyYmVpdGVuKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBhbnphaGwgPSB0aGlzLmdlZmlsdGVydGVJdGVtcy5sZW5ndGg7XHJcbiAgICBpZiAoYW56YWhsID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgaWYgKHRoaXMuZm9rdXNJbmRleCA+PSAwICYmIHRoaXMuZm9rdXNJbmRleCA8IGFuemFobCkge1xyXG4gICAgICAgIHRoaXMudmlydHVlbGxlT3B0aW9uR2VrbGlja3QodGhpcy5nZWZpbHRlcnRlSXRlbXNbdGhpcy5mb2t1c0luZGV4XSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgdGhpcy5mb2t1c0luZGV4ID0gTWF0aC5taW4oYW56YWhsIC0gMSwgdGhpcy5mb2t1c0luZGV4ICsgMSk7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgIHRoaXMuZm9rdXNJbmRleCA9IHRoaXMuZm9rdXNJbmRleCA8IDAgPyBhbnphaGwgLSAxIDogTWF0aC5tYXgoMCwgdGhpcy5mb2t1c0luZGV4IC0gMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnZpcnR1ZWxsZXNTY3JvbGw/LnNjcm9sbFRvSW5kZXgodGhpcy5mb2t1c0luZGV4KTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBvcHRpb25zTWluV2lkdGgoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdENvbnRhaW5lciA/IGAke3RoaXMuc2VsZWN0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGh9cHhgIDogJ2F1dG8nO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICNzZWxlY3RDb250YWluZXIgY2xhc3M9XCJtcmQtc2VsZWN0LWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cInsnbXJkLXNlbGVjdC1kaXNhYmxlZCc6IGZvcm1Db250cm9sPy5kaXNhYmxlZCB8fCBmb3JtQXJyYXlDb250cm9sPy5kaXNhYmxlZCB8fCBkaXNhYmxlZH1cIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImF1dG9Db21wbGV0ZVwiPlxuICAgIDxpbnB1dFxuICAgIChjbGljayk9XCJ0cmlnZ2VyQ2xpY2tlZCgpXCJcbiAgICBbdmFsdWVdPVwic2hvd1ZhbHVlXCJcbiAgICAoaW5wdXQpPVwiYXV0b0NvbXBsZXRlSW5wdXQoJGV2ZW50KVwiXG4gICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICA+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhYXV0b0NvbXBsZXRlXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImN1c3RvbVRyaWdnZXJcIj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm1yZC1zZWxlY3QtY3VzdG9tLXRyaWdnZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjdXN0b21UcmlnZ2VyXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNoaXBTZWxlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1yZC1zZWxlY3QtdHJpZ2dlclwiIChjbGljayk9XCJ0cmlnZ2VyQ2xpY2tlZCgpXCIgW2F0dHIudGFiaW5kZXhdPVwidHJpZ2dlclRhYkluZGV4XCIgKGZvY3VzKT1cIm9uVHJpZ2dlckZvY3VzKClcIiAoYmx1cik9XCJvblRyaWdnZXJCbHVyKClcIiAoa2V5ZG93bik9XCJvblRyaWdnZXJLZXlEb3duKCRldmVudClcIj5cbiAgICAgICAgICA8c3BhbiBbbXJkVG9vbFRpcF09XCJzaG93VmFsdWVcIiBzaG93SWZUcnVuY2F0ZWQ+e3tzaG93VmFsdWV9fTwvc3Bhbj5cbiAgICAgICAgICA8c3ZnIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB3aWR0aD1cIjE0cHhcIiBoZWlnaHQ9XCIxNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCI+PC9nPlxuICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2U9XCIjQ0NDQ0NDXCIgc3Ryb2tlLXdpZHRoPVwiMC4wNDhcIj48L2c+XG4gICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj48cGF0aCBkPVwiTTExLjE3OCAxOS41NjlhLjk5OC45OTggMCAwIDAgMS42NDQgMGw5LTEzQS45OTkuOTk5IDAgMCAwIDIxIDVIM2ExLjAwMiAxLjAwMiAwIDAgMC0uODIyIDEuNTY5bDkgMTN6XCI+PC9wYXRoPjwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjaGlwU2VsZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtcmQtY2hpcC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibXJkLWNoaXAtdmFsdWVzXCIgKm5nSWY9XCJjaGlwU2VsZWN0aW9uXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2VsZWN0ZWRPcHRpb25zICYmIHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgIDxtcmQtY2hpcCAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHNlbGVjdGVkT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgKGNsb3NlKT1cImNoaXBDbG9zZWQob3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgW3ByZWZpeEljb25dPVwiY2hpcFByZWZpeEljb25cIlxuICAgICAgICAgICAgICAgIFtzdWZmaXhJY29uXT1cImNoaXBTdWZmaXhJY29uXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZm9ybUNvbnRyb2w/LmRpc2FibGVkIHx8IGZvcm1BcnJheUNvbnRyb2w/LmRpc2FibGVkIHx8IGRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICA+e3tvcHRpb24ub3B0aW9uTGFiZWx9fTwvbXJkLWNoaXA+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ2aXJ0dWFsU2Nyb2xsXCI+XG4gICAgICAgICAgICAgIDxtcmQtY2hpcCAqbmdGb3I9XCJsZXQgaXRlbSBvZiB2aXJ0dWVsbGVBdXNnZXdhZWhsdGVJdGVtc1wiXG4gICAgICAgICAgICAgICAgKGNsb3NlKT1cInZpcnR1ZWxsZW5DaGlwU2NobGllc3NlbihpdGVtKVwiXG4gICAgICAgICAgICAgICAgW3ByZWZpeEljb25dPVwiY2hpcFByZWZpeEljb25cIlxuICAgICAgICAgICAgICAgIFtzdWZmaXhJY29uXT1cImNoaXBTdWZmaXhJY29uXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZm9ybUNvbnRyb2w/LmRpc2FibGVkIHx8IGZvcm1BcnJheUNvbnRyb2w/LmRpc2FibGVkIHx8IGRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICA+e3tsYWJlbFZvbihpdGVtKX19PC9tcmQtY2hpcD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yZC1zZWxlY3QtdHJpZ2dlci1jaGlwXCIgKGNsaWNrKT1cInRyaWdnZXJDbGlja2VkKClcIiBbYXR0ci50YWJpbmRleF09XCJ0cmlnZ2VyVGFiSW5kZXhcIiAoZm9jdXMpPVwib25UcmlnZ2VyRm9jdXMoKVwiIChibHVyKT1cIm9uVHJpZ2dlckJsdXIoKVwiIChrZXlkb3duKT1cIm9uVHJpZ2dlcktleURvd24oJGV2ZW50KVwiPlxuICAgICAgICAgICAgICA8c3ZnIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB3aWR0aD1cIjE0cHhcIiBoZWlnaHQ9XCIxNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz5cbiAgICAgICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZT1cIiNDQ0NDQ0NcIiBzdHJva2Utd2lkdGg9XCIwLjA0OFwiPjwvZz5cbiAgICAgICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj48cGF0aCBkPVwiTTExLjE3OCAxOS41NjlhLjk5OC45OTggMCAwIDAgMS42NDQgMGw5LTEzQS45OTkuOTk5IDAgMCAwIDIxIDVIM2ExLjAwMiAxLjAwMiAwIDAgMC0uODIyIDEuNTY5bDkgMTN6XCI+PC9wYXRoPjwvZz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cblxuPG5nLXRlbXBsYXRlXG4gIGNkay1jb25uZWN0ZWQtb3ZlcmxheVxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheUhhc0JhY2tkcm9wXT1cInRydWVcIlxuICBjZGtDb25uZWN0ZWRPdmVybGF5QmFja2Ryb3BDbGFzcz1cImNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wXCJcbiAgY2RrQ29ubmVjdGVkT3ZlcmxheVBhbmVsQ2xhc3M9XCJtcmQtc2VsZWN0LW9wdGlvbnMtb3ZlcmxheVwiXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cInNlbGVjdENvbnRhaW5lclwiXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJzaG93T3B0aW9ucy52YWx1ZVwiXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cIl9wb3NpdGlvbnNcIlxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU1pbldpZHRoXT1cIm9wdGlvbnNNaW5XaWR0aFwiXG4gIChiYWNrZHJvcENsaWNrKT1cInNob3dPcHRpb25zLnZhbHVlID0gZmFsc2VcIlxuPlxuICA8ZGl2IGNsYXNzPVwibXJkLXNlbGVjdC1vcHRpb25zLWNvbnRhaW5lclwiPlxuICAgIDxtcmQtc2VsZWN0LW9wdGlvbiAqbmdJZj1cInNlYXJjaFNlbGVjdGlvblwiIGNsYXNzPVwibXJkLXNlbGVjdC1zZWFyY2gtb3B0aW9uXCIgbm9DaGVja2JveD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBwbGFjZWhvbGRlcj1cIlN1Y2hlXCJcbiAgICAgICAgW3ZhbHVlXT1cInNlYXJjaFRleHRcIlxuICAgICAgICAoaW5wdXQpPVwic2VhcmNoSW5wdXQoJGV2ZW50KVwiXG4gICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxuICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAgICNzZWFyY2hTZWxlY3Rpb25JbnB1dFxuICAgICAgPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2FkZEJ1dHRvbl1cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9tcmQtc2VsZWN0LW9wdGlvbj5cbiAgICA8ZGl2IGNsYXNzPVwibXJkLXNlbGVjdC1vcHRpb25zLXNjcm9sbFwiIFtjbGFzcy5tcmQtc2VsZWN0LW9wdGlvbnMtc2Nyb2xsLXZpcnR1ZWxsXT1cInZpcnR1YWxTY3JvbGxcIj5cbiAgICAgIDxtcmQtc2VsZWN0LW9wdGlvbiAqbmdJZj1cIm51bGxhYmxlXCIgbm9DaGVja2JveCBbdmFsdWVdPVwibnVsbFwiIChvcHRpb25DbGlja2VkKT1cInJlbW92ZVNlbGVjdGVkKClcIj57e211bHRpcGxlID8gJ0F1c3dhaGwgbMO2c2NoZW4nIDogJy0nfX08L21yZC1zZWxlY3Qtb3B0aW9uPlxuICAgICAgPG1yZC1zZWxlY3Qtb3B0aW9uICpuZ0lmPVwic2VhcmNoU2VsZWN0aW9uICYmIHNlYXJjaFRleHQubGVuZ3RoID4gMCAmJiBzaG93Tm9PcHRpb25zT25TZWFyY2hcIiBub0NoZWNrYm94PktlaW5lIEVpbnRyw6RnZSBnZWZ1bmRlbjwvbXJkLXNlbGVjdC1vcHRpb24+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtcmQtc2VsZWN0LW9wdGlvblwiPjwvbmctY29udGVudD5cbiAgICAgIDxtcmQtdmlydHVhbC1zY3JvbGwgKm5nSWY9XCJ2aXJ0dWFsU2Nyb2xsXCJcbiAgICAgICAgW2l0ZW1zXT1cImdlZmlsdGVydGVJdGVtc1wiXG4gICAgICAgIFtpdGVtU2l6ZV09XCJpdGVtU2l6ZVwiXG4gICAgICAgIFttYXhIZWlnaHRdPVwidmlydHVhbFNjcm9sbE1heEhlaWdodFwiXG4gICAgICAgIFt0cmFja0J5XT1cInZpcnR1ZWxsZXJUcmFja0J5XCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBtcmRWaXJ0dWFsU2Nyb2xsSXRlbSBsZXQtaXRlbSBsZXQtaT1cImluZGV4XCI+XG4gICAgICAgICAgPG1yZC1zZWxlY3Qtb3B0aW9uIGNsYXNzPVwibXJkLXNlbGVjdC1vcHRpb24tdmlydHVlbGxcIlxuICAgICAgICAgICAgW3ZhbHVlXT1cIndlcnRWb24oaXRlbSlcIlxuICAgICAgICAgICAgW3NlbGVjdGVkXT1cImlzdFZpcnR1ZWxsQXVzZ2V3YWVobHQoaXRlbSlcIlxuICAgICAgICAgICAgW2ZvY3VzZWRdPVwiaSA9PT0gZm9rdXNJbmRleFwiXG4gICAgICAgICAgICAob3B0aW9uQ2xpY2tlZCk9XCJ2aXJ0dWVsbGVPcHRpb25HZWtsaWNrdChpdGVtKVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wdGlvblRlbXBsYXRlOyBlbHNlIHZpcnR1ZWxsZXNMYWJlbFwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwib3B0aW9uVGVtcGxhdGUudGVtcGxhdGVSZWY7IGNvbnRleHQ6IHskaW1wbGljaXQ6IGl0ZW0sIGluZGV4OiBpfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI3ZpcnR1ZWxsZXNMYWJlbD57e2xhYmVsVm9uKGl0ZW0pfX08L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvbXJkLXNlbGVjdC1vcHRpb24+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L21yZC12aXJ0dWFsLXNjcm9sbD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPiJdfQ==