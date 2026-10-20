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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWZvcm0tZmllbGQvY29tcG9uZW50cy9tcmQtc2VsZWN0L21yZC1zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLXNlbGVjdC9tcmQtc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBbUMsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUE4QixTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pSLE9BQU8sRUFBbUUsc0JBQXNCLEVBQTBCLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDdkwsT0FBTyxFQUF5Qix3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ25ILE9BQU8sRUFBYyxPQUFPLEVBQWdCLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUVuSCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUMvRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3RkFBd0YsQ0FBQztBQUVuSSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQzs7Ozs7O0lDUnBHLDZCQUFtQztJQUNqQyxnQ0FLRDtJ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QkFBakUsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUM7WUFFRyxZQUFZO2tCQUFqRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBQ0UsZUFBZTtrQkFBcEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUNFLGFBQWE7a0JBQWxELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFDRSxRQUFRO2tCQUE3QyxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBRWhDLFFBQVE7a0JBRFgsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQVFFLGFBQWE7a0JBQWxELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFDRSxRQUFRO2tCQUE3QyxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBRXBCLGNBQWM7a0JBQTdCLEtBQUs7WUFDVSxjQUFjO2tCQUE3QixLQUFLO1lBRVUsV0FBVztrQkFBMUIsS0FBSztZQUN1QyxZQUFZO2tCQUF4RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBRVMsZUFBZTtrQkFBM0QsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUUxQixPQUFPO2tCQUFoQixNQUFNO1lBQ0csT0FBTztrQkFBaEIsTUFBTTtZQUNHLE9BQU87a0JBQWhCLE1BQU07WUFRRyxTQUFTO2tCQUFsQixNQUFNO1lBR0csV0FBVztrQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFF1ZXJ5TGlzdCwgVHJhY2tCeUZ1bmN0aW9uLCBWaWV3Q2hpbGQsIGJvb2xlYW5BdHRyaWJ1dGUsIG51bWJlckF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY2Nlc3NhYmxlRm9ybUFycmF5LCBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wsIEFjY2Vzc2FibGVGb3JtR3JvdXAsIEJhc2VQdXNoU3RyYXRlZ3lPYmplY3QsIElBY2Nlc3NhYmxlRm9ybUNvbnRyb2wsIE9ic2VydmFibGVWYWx1ZSwgU3Vic2NyaXB0aW9uSGFuZGxlciwgVXRpbCB9IGZyb20gJ21yZC1jb3JlJztcclxuaW1wb3J0IHsgTXJkU2VsZWN0T3B0aW9uQ2hhbmdlLCBNcmRTZWxlY3RPcHRpb25Db21wb25lbnQgfSBmcm9tICcuLi9tcmQtc2VsZWN0LW9wdGlvbi9tcmQtc2VsZWN0LW9wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24sIGRlZmVyLCBtZXJnZSwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTXJkU2VsZWN0Q3VzdG9tVHJpZ2dlckNvbXBvbmVudCB9IGZyb20gJy4uL21yZC1zZWxlY3QtY3VzdG9tLXRyaWdnZXIvbXJkLXNlbGVjdC1jdXN0b20tdHJpZ2dlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25uZWN0ZWRQb3NpdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgTXJkU2VsZWN0T3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9jb21tb24vZGlyZWN0aXZlL21yZC1zZWxlY3Qtb3B0aW9uLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1yZFZpcnR1YWxTY3JvbGxDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9tcmQtdmlydHVhbC1zY3JvbGwvY29tcG9uZW50cy9tcmQtdmlydHVhbC1zY3JvbGwvbXJkLXZpcnR1YWwtc2Nyb2xsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1yZFZpcnR1YWxTY3JvbGxJdGVtU2l6ZSB9IGZyb20gJy4uLy4uLy4uL21yZC12aXJ0dWFsLXNjcm9sbC9jb21tb24vbW9kZWwvbXJkLXZpcnR1YWwtc2Nyb2xsLm1vZGVsJztcclxuaW1wb3J0IHsgaXRlbVNpemVBdHRyaWJ1dGUgfSBmcm9tICcuLi8uLi8uLi9tcmQtdmlydHVhbC1zY3JvbGwvY29tbW9uL3RyYW5zZm9ybXMvaXRlbS1zaXplLXRyYW5zZm9ybSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1zZWxlY3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZFNlbGVjdENvbXBvbmVudCBleHRlbmRzIEJhc2VQdXNoU3RyYXRlZ3lPYmplY3QgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCdzZWxlY3RDb250YWluZXInKSBzZWxlY3RDb250YWluZXI/OiBFbGVtZW50UmVmO1xyXG5cclxuICBAVmlld0NoaWxkKCdzZWFyY2hTZWxlY3Rpb25JbnB1dCcpIHNlYXJjaFNlbGVjdGlvbklucHV0PzogRWxlbWVudFJlZjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihNcmRTZWxlY3RPcHRpb25Db21wb25lbnQpIG9wdGlvbnM/OiBRdWVyeUxpc3Q8TXJkU2VsZWN0T3B0aW9uQ29tcG9uZW50PjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChNcmRTZWxlY3RDdXN0b21UcmlnZ2VyQ29tcG9uZW50KSBjdXN0b21UcmlnZ2VyPzogTXJkU2VsZWN0Q3VzdG9tVHJpZ2dlckNvbXBvbmVudDtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChNcmRTZWxlY3RPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSkgb3B0aW9uVGVtcGxhdGU/OiBNcmRTZWxlY3RPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZTtcclxuXHJcbiAgQFZpZXdDaGlsZChNcmRWaXJ0dWFsU2Nyb2xsQ29tcG9uZW50KSB2aXJ0dWVsbGVzU2Nyb2xsPzogTXJkVmlydHVhbFNjcm9sbENvbXBvbmVudDtcclxuXHJcbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHJlYWRvbmx5IG9wdGlvblNlbGVjdGlvbkNoYW5nZXM6IE9ic2VydmFibGU8YW55PiA9IGRlZmVyKCgpID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgcmV0dXJuIG9wdGlvbnMuY2hhbmdlcy5waXBlKFxyXG4gICAgICAgIHN0YXJ0V2l0aChvcHRpb25zKSxcclxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gbWVyZ2UoLi4ub3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi5vcHRpb25DbGlja2VkKSkpLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9pbml0aWFsaXplZC5waXBlKHN3aXRjaE1hcCgoKSA9PiB0aGlzLm9wdGlvblNlbGVjdGlvbkNoYW5nZXMpKTtcclxuICB9KTtcclxuXHJcbiAgLyoqIEthbm4gbmFjaCBkZW0gQXVmYmF1IHdlY2hzZWxuICh6LiBCLiBhbmRlcmVyIEVpbnRyYWcgZWluZXMgRm9ybUFycmF5cyk7IGRhcyBTZWxlY3QgYmluZGV0IHNpY2ggZGFubiBuZXUuICovXHJcbiAgQElucHV0KCdtcmRGb3JtQ29udHJvbCcpIHNldCBmb3JtQ29udHJvbCh2YWx1ZTogQWNjZXNzYWJsZUZvcm1Db250cm9sfHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHRoaXMuX2Zvcm1Db250cm9sID09PSB2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9mb3JtQ29udHJvbCA9IHZhbHVlO1xyXG4gICAgdGhpcy5uYWNoQ29udHJvbFdlY2hzZWxOZXVCaW5kZW4oKTtcclxuICB9XHJcbiAgZ2V0IGZvcm1Db250cm9sKCk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbHx1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1Db250cm9sO1xyXG4gIH1cclxuICBwcml2YXRlIF9mb3JtQ29udHJvbD86IEFjY2Vzc2FibGVGb3JtQ29udHJvbDtcclxuICBASW5wdXQoJ21yZEZvcm1BcnJheScpIHNldCBmb3JtQXJyYXlDb250cm9sKHZhbHVlOiBBY2Nlc3NhYmxlRm9ybUFycmF5PGFueT58dW5kZWZpbmVkKSB7XHJcbiAgICBpZiAodGhpcy5fZm9ybUFycmF5Q29udHJvbCA9PT0gdmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fZm9ybUFycmF5Q29udHJvbCA9IHZhbHVlO1xyXG4gICAgdGhpcy5uYWNoQ29udHJvbFdlY2hzZWxOZXVCaW5kZW4oKTtcclxuICB9XHJcbiAgZ2V0IGZvcm1BcnJheUNvbnRyb2woKTogQWNjZXNzYWJsZUZvcm1BcnJheTxhbnk+fHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9ybUFycmF5Q29udHJvbDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfZm9ybUFycmF5Q29udHJvbD86IEFjY2Vzc2FibGVGb3JtQXJyYXk8YW55PjtcclxuICBASW5wdXQoKSBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5zdGFuZGFsb25lID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLl92YWx1ZSA9PT0gdmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgdmFsdWUoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfdmFsdWU6IGFueTtcclxuICBASW5wdXQoKSBwdWJsaWMgaWRlbnRpZmllcjogc3RyaW5nID0gJ2lkJztcclxuICBASW5wdXQoKSBwdWJsaWMgc2V0IGl0ZW1zKHZhbHVlOiBhbnlbXSkge1xyXG4gICAgdGhpcy5faXRlbXMgPSB2YWx1ZSB8fCBbXTtcclxuICAgIGlmICh0aGlzLnZpcnR1YWxTY3JvbGwgJiYgdGhpcy52aXJ0dWVsbEluaXRpYWxpc2llcnQpIHtcclxuICAgICAgdGhpcy52aXJ0dWVsbEZpbHRlcm4odGhpcy5hdXRvQ29tcGxldGUgPyB0aGlzLnNob3dWYWx1ZSA6IHRoaXMuc2VhcmNoVGV4dCk7XHJcbiAgICAgIHRoaXMudmlydHVlbGxlQW56ZWlnZUFrdHVhbGlzaWVyZW4oZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgZ2V0IGl0ZW1zKCk6IGFueVtdIHtcclxuICAgIHJldHVybiB0aGlzLl9pdGVtcztcclxuICB9XHJcbiAgcHJpdmF0ZSBfaXRlbXM6IGFueVtdID0gW107XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbmRlcnQgbnVyIGRpZSBzaWNodGJhcmVuIE9wdGlvbmVuLiBEaWUgT3B0aW9uZW4ga29tbWVuIGRhbm4gYXVzIGBbaXRlbXNdYCBzdGF0dCBhdXMgYDxtcmQtc2VsZWN0LW9wdGlvbj5gO1xyXG4gICAqIFdlcnQgaXN0IGBpdGVtW2lkZW50aWZpZXJdYCwgYW5nZXplaWd0IHdpcmQgYGRpc3BsYXlXaXRoKGl0ZW0pYCBiencuIGBpdGVtW2xhYmVsS2V5XWAgb2RlciBlaW4gYDxuZy10ZW1wbGF0ZSBtcmRTZWxlY3RPcHRpb24+YC5cclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyB2aXJ0dWFsU2Nyb2xsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqIE51ciBtaXQgYHZpcnR1YWxTY3JvbGxgICovXHJcbiAgQElucHV0KCkgcHVibGljIGxhYmVsS2V5OiBzdHJpbmcgPSAnYmV6ZWljaG51bmcnO1xyXG4gIC8qKiBOdXIgbWl0IGB2aXJ0dWFsU2Nyb2xsYDsgaGF0IFZvcnJhbmcgdm9yIGBsYWJlbEtleWAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgZGlzcGxheVdpdGg/OiAoaXRlbTogYW55KSA9PiBzdHJpbmc7XHJcbiAgLyoqIE51ciBtaXQgYHZpcnR1YWxTY3JvbGxgOiBIb2VoZSBlaW5lciBPcHRpb24gaW4gcHgsIGZ1ZXIgYWxsZSBnbGVpY2ggb2RlciBgKGl0ZW0sIGluZGV4KSA9PiBweGAgamUgT3B0aW9uICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGl0ZW1TaXplQXR0cmlidXRlfSkgcHVibGljIGl0ZW1TaXplPzogTXJkVmlydHVhbFNjcm9sbEl0ZW1TaXplO1xyXG4gIC8qKiBOdXIgbWl0IGB2aXJ0dWFsU2Nyb2xsYDogbWF4aW1hbGUgSG9laGUgZGVyIE9wdGlvbnNsaXN0ZSBpbiBweCAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgdmlydHVhbFNjcm9sbE1heEhlaWdodDogbnVtYmVyID0gMjQwO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGF1dG9Db21wbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgc2VhcmNoU2VsZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBjaGlwU2VsZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBudWxsYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSlcclxuICBzZXQgbXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX211bHRpcGxlID0gdmFsdWU7XHJcbiAgfVxyXG4gIGdldCBtdWx0aXBsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBjaGlwUHJlZml4SWNvbj86IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgY2hpcFN1ZmZpeEljb24/OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBzaG93T3B0aW9uczogT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+ID0gbmV3IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc21vb3RoU2Nyb2xsOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNlYXJjaEF1dG9mb2N1czogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIEBPdXRwdXQoKSB0b3VjaGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIGZvY3VzZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgYmx1cnJlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAvKipcclxuICAgKiBFdmVudCB0aGF0IGlzIGVtaXR0ZWQgd2hlbiB0aGUgY2hpcCBjbG9zZSBidXR0b24gaXMgY2xpY2tlZC5cclxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPHZvaWQ+fVxyXG4gICAqIEBtZW1iZXJvZiBNcmRTZWxlY3RDb21wb25lbnRcclxuICAgKiBAcmV0dXJucyBUaGUgdmFsdWUgb2YgdGhlIGNoaXAgdGhhdCB3YXMgY2xvc2VkLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBjaGlwQ2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcblxyXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqIE1lbGRldCBgbXJkLWZvcm0tZmllbGRgLCBkYXNzIGBtcmRGb3JtQ29udHJvbGAgYnp3LiBgbXJkRm9ybUFycmF5YCBuYWNoIGRlbSBBdWZiYXUgZ2V3ZWNoc2VsdCBoYXQgKi9cclxuICBwdWJsaWMgcmVhZG9ubHkgZm9ybUNvbnRyb2xHZXdlY2hzZWx0OiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgcHJpdmF0ZSBhbnNpY2h0SW5pdGlhbGlzaWVydDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZm9ybUNvbnRyb2xBYm8/OiBTdWJzY3JpcHRpb247XHJcblxyXG4gIHB1YmxpYyBvcHRpb25zVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBfc2hvd05vT3B0aW9uc09uU2VhcmNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBzdGFuZGFsb25lOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBzaG93VmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIHB1YmxpYyBzZWFyY2hUZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgcHVibGljIG9wdGlvbnNXaWR0aEV4Y2VlZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIG9wdGlvbnNIZWlnaHRFeGNlZWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIG9wdGlvbkNoYW5nZVN1YnNjcmlwdGlvbj86IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgcHVibGljIGdlZmlsdGVydGVJdGVtczogYW55W10gPSBbXTtcclxuICBwdWJsaWMgdmlydHVlbGxlQXVzZ2V3YWVobHRlSXRlbXM6IGFueVtdID0gW107XHJcbiAgcHVibGljIGZva3VzSW5kZXg6IG51bWJlciA9IC0xO1xyXG4gIHByaXZhdGUgdmlydHVlbGxlQXVzd2FobDogU2V0PGFueT4gPSBuZXcgU2V0PGFueT4oKTtcclxuICBwcml2YXRlIHZpcnR1ZWxsSW5pdGlhbGlzaWVydDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgcmVhZG9ubHkgdmlydHVlbGxlclRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxhbnk+ID0gKF86IG51bWJlciwgaXRlbTogYW55KSA9PiB0aGlzLndlcnRWb24oaXRlbSk7XHJcblxyXG5cclxuICBfcG9zaXRpb25zOiBDb25uZWN0ZWRQb3NpdGlvbltdID0gW1xyXG4gICAge1xyXG4gICAgICBvcmlnaW5YOiAnc3RhcnQnLFxyXG4gICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgIG92ZXJsYXlZOiAndG9wJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG9yaWdpblg6ICdlbmQnLFxyXG4gICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgb3ZlcmxheVg6ICdlbmQnLFxyXG4gICAgICBvdmVybGF5WTogJ3RvcCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBvcmlnaW5YOiAnc3RhcnQnLFxyXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgb3JpZ2luWDogJ2VuZCcsXHJcbiAgICAgIG9yaWdpblk6ICd0b3AnLFxyXG4gICAgICBvdmVybGF5WDogJ2VuZCcsXHJcbiAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLndhdGNoKHRoaXMuc2hvd09wdGlvbnMuY2hhbmdlZC5waXBlKHN0YXJ0V2l0aCh0aGlzLnNob3dPcHRpb25zLnZhbHVlKSksIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCh2YWx1ZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5ibHVyKG51bGwpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2VhcmNoU2VsZWN0aW9uICYmIHRoaXMuc2VhcmNoQXV0b2ZvY3VzKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaFNlbGVjdGlvbklucHV0Py5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgfVxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5faW5pdGlhbGl6ZWQubmV4dChudWxsKTtcclxuICAgIHRoaXMuX2luaXRpYWxpemVkLmNvbXBsZXRlKCk7XHJcblxyXG4gICAgdGhpcy53YXRjaCh0aGlzLm9wdGlvbnMhLmNoYW5nZXMucGlwZShzdGFydFdpdGgobnVsbCkpLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoKSA9PiB7XHJcbiAgICAgIHRoaXMuX3Jlc2V0T3B0aW9ucygpO1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sKSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkVmFsdWVzID0gKHRoaXMuZm9ybUFycmF5Q29udHJvbC52YWx1ZSkubWFwKHZhbHVlID0+IHZhbHVlW3RoaXMuaWRlbnRpZmllcl0pO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyEuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWVzLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpIHtcclxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgICB0aGlzLmZvcm1Db250cm9sQ2hhbmdlZCgpO1xyXG4gICAgICB9XHJcbiAgICB9KSk7XHJcblxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuY3VzdG9tVHJpZ2dlcikpIHtcclxuICAgICAgdGhpcy53YXRjaCh0aGlzLmN1c3RvbVRyaWdnZXIudHJpZ2dlckNsaWNrLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyQ2xpY2tlZCgpO1xyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VzIGthbm4gbnVyIGVpbiBGb3JtQ29udHJvbCBvZGVyIGVpbiBGb3JtQXJyYXlDb250cm9sIHZlcndlbmRldCB3ZXJkZW4uJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGFuZGFsb25lICYmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSB8fCBVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wpKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VzIGthbm4gbnVyIGVpbiBNb2RlbCBvZGVyIGVpbiBGb3JtQ29udHJvbC9Gb3JtQXJyYXlDb250cm9sIHZlcndlbmRldCB3ZXJkZW4uJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpIHx8IFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCkpICYmIHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFaW4gZGVha3RpdmllcnRlcyBTZWxlY3Qga2FubiBuaWNodCBtaXQgZWluZW0gRm9ybUNvbnRyb2wgb2RlciBGb3JtQXJyYXlDb250cm9sIHZlcndlbmRldCB3ZXJkZW4uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mb3JtQ29udHJvbEFib25uaWVyZW4oKTtcclxuICAgIGlmICh0aGlzLnN0YW5kYWxvbmUpIHtcclxuICAgICAgdGhpcy53YXRjaCh0aGlzLnZhbHVlQ2hhbmdlLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoKSA9PiB0aGlzLm1vZGVsQ2hhbmdlZCgpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyEuZmluZChvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSB0aGlzLmZvcm1Db250cm9sIS52YWx1ZSk/Lm9wdGlvbkNsaWNrKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkVmFsdWVzID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZSBhcyBhbnlbXTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMhLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgIGlmIChzZWxlY3RlZFZhbHVlcy5pbmNsdWRlcyhvcHRpb24udmFsdWUpKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5vcHRpb25DbGljaygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMudmFsdWUpKSB7XHJcbiAgICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyEuZmluZChvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSB0aGlzLnZhbHVlKT8ub3B0aW9uQ2xpY2soKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLnZhbHVlIGFzIGFueVtdO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyEuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWVzLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpIHtcclxuICAgICAgICAgICAgb3B0aW9uLm9wdGlvbkNsaWNrKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBQcsO8ZmUsIG9iIHNob3dPcHRpb25zIGJlcmVpdHMgdHJ1ZSBpc3QgdW5kIHNldHplIGRlbiBGb2t1cyBmYWxscyBuw7Z0aWdcclxuICAgIGlmICh0aGlzLnNob3dPcHRpb25zLnZhbHVlICYmIHRoaXMuc2VhcmNoU2VsZWN0aW9uICYmIHRoaXMuc2VhcmNoQXV0b2ZvY3VzKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoU2VsZWN0aW9uSW5wdXQ/Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy52aXJ0dWFsU2Nyb2xsKSB7XHJcbiAgICAgIHRoaXMudmlydHVlbGxJbml0aWFsaXNpZXJ0ID0gdHJ1ZTtcclxuICAgICAgdGhpcy52aXJ0dWVsbEZpbHRlcm4odGhpcy5hdXRvQ29tcGxldGUgPyB0aGlzLnNob3dWYWx1ZSA6IHRoaXMuc2VhcmNoVGV4dCk7XHJcbiAgICAgIHRoaXMudmlydHVlbGxlQW56ZWlnZUFrdHVhbGlzaWVyZW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmFuc2ljaHRJbml0aWFsaXNpZXJ0ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybUNvbnRyb2xBYm9ubmllcmVuKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb3JtQ29udHJvbEFibz8udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuZm9ybUNvbnRyb2xBYm8gPSB1bmRlZmluZWQ7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbEFibyA9IHRoaXMud2F0Y2godGhpcy5mb3JtQ29udHJvbC52YWx1ZUNoYW5nZXMsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VkKCkpKTtcclxuICAgIH0gZWxzZSBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sKSkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sQWJvID0gdGhpcy53YXRjaCh0aGlzLmZvcm1BcnJheUNvbnRyb2wudmFsdWVDaGFuZ2VzLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoKSA9PiB0aGlzLmZvcm1BcnJheUNvbnRyb2xDaGFuZ2VkKCkpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBWb3IgZGVtIEF1ZmJhdSB1ZWJlcm5pbW10IG5nQWZ0ZXJWaWV3SW5pdCBkYXMgQmluZGVuOyBkYW5hY2ggQW56ZWlnZSB1bmQgQWJvIGF1ZiBkYXMgbmV1ZSBDb250cm9sIHVtc3RlbGxlbi4gKi9cclxuICBwcml2YXRlIG5hY2hDb250cm9sV2VjaHNlbE5ldUJpbmRlbigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5hbnNpY2h0SW5pdGlhbGlzaWVydCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvcm1Db250cm9sQWJvbm5pZXJlbigpO1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2xDaGFuZ2VkKCk7XHJcbiAgICB9IGVsc2UgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCkpIHtcclxuICAgICAgdGhpcy5mb3JtQXJyYXlDb250cm9sQ2hhbmdlZCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaG93VmFsdWUgPSAnJztcclxuICAgICAgdGhpcy5vcHRpb25zPy5mb3JFYWNoKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZSk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5mb3JtQ29udHJvbEdld2VjaHNlbHQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtQ29udHJvbENoYW5nZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52aXJ0dWFsU2Nyb2xsKSB7XHJcbiAgICAgIHRoaXMudmlydHVlbGxlQW56ZWlnZUFrdHVhbGlzaWVyZW4odHJ1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmF1dG9Db21wbGV0ZSkge1xyXG4gICAgICB0aGlzLnNob3dWYWx1ZSA9IHRoaXMuZm9ybUNvbnRyb2whLnZhbHVlO1xyXG4gICAgICB0aGlzLm9wdGlvbnMhLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICBvcHRpb24uZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghVXRpbC5pc0RlZmluZWQodGhpcy5zaG93VmFsdWUpIHx8IChvcHRpb24ub3B0aW9uVmFsdWU/Lm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0IHx8ICcnKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5zaG93VmFsdWU/LnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgIG9wdGlvbi5maWx0ZXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBvcHRpb24uZmlsdGVyZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLnNob3dWYWx1ZSkgJiYgdGhpcy5zaG93VmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBmaWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMhLmZpbHRlcihvcHRpb24gPT4gIW9wdGlvbi5maWx0ZXJlZCk7XHJcbiAgICAgICAgaWYgKGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBmaWx0ZXJlZE9wdGlvbnNbMF0uZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd05vT3B0aW9uc09uU2VhcmNoID0gZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA9PT0gMDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sIS52YWx1ZSkpIHtcclxuICAgICAgICB0aGlzLnNob3dWYWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyEuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgdGhpcy5vcHRpb25zIS5mb3JFYWNoKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZSk7XHJcbiAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5vcHRpb25zIS5maW5kKG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IHRoaXMuZm9ybUNvbnRyb2whLnZhbHVlKTtcclxuICAgICAgICAgIC8vIE9obmUgcGFzc2VuZGUgT3B0aW9uIGJsaWViZSBzb25zdCBkZXIgVGV4dCBkZXMgdm9yaGVyaWdlbiBXZXJ0cyBiencuIENvbnRyb2xzIHN0ZWhlblxyXG4gICAgICAgICAgdGhpcy5zaG93VmFsdWUgPSBVdGlsLmlzRGVmaW5lZChvcHRpb24pID8gb3B0aW9uLm9wdGlvblZhbHVlPy5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCB8fCAnJyA6ICcnO1xyXG4gICAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKG9wdGlvbikpIHtcclxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IHNlbGVjdGVkVmFsdWVzID0gdGhpcy5mb3JtQ29udHJvbCEudmFsdWUgYXMgYW55W107XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnMhLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWVzLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMhLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKTtcclxuICAgICAgICAgIHRoaXMuc2hvd1ZhbHVlID0gc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCA/ICcnIDogc2VsZWN0ZWRPcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLm9wdGlvblZhbHVlPy5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCB8fCAnJykuam9pbignLCAnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtQXJyYXlDb250cm9sQ2hhbmdlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZpcnR1YWxTY3JvbGwpIHtcclxuICAgICAgdGhpcy52aXJ0dWVsbGVBbnplaWdlQWt0dWFsaXNpZXJlbih0cnVlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYXV0b0NvbXBsZXRlKSB7XHJcbiAgICAgIC8vIFRPRE86IEltcGxlbWVudFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2whLmNvbnRyb2wudmFsdWUpIHx8ICh0aGlzLmZvcm1BcnJheUNvbnRyb2whLmNvbnRyb2wudmFsdWUgYXMgYW55W10pLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuc2hvd1ZhbHVlID0gJyc7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zIS5mb3JFYWNoKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkVmFsdWVzID0gKHRoaXMuZm9ybUFycmF5Q29udHJvbCEuY29udHJvbC52YWx1ZSBhcyBhbnlbXSkubWFwKHZhbHVlID0+IHZhbHVlW3RoaXMuaWRlbnRpZmllcl0pO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyEuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWVzLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpIHtcclxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMhLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKTtcclxuICAgICAgICB0aGlzLnNob3dWYWx1ZSA9IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDAgPyAnJyA6IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi5vcHRpb25WYWx1ZT8ubmF0aXZlRWxlbWVudC5pbm5lclRleHQgfHwgJycpLmpvaW4oJywgJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb2RlbENoYW5nZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52aXJ0dWFsU2Nyb2xsKSB7XHJcbiAgICAgIHRoaXMudmlydHVlbGxlQW56ZWlnZUFrdHVhbGlzaWVyZW4odHJ1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmF1dG9Db21wbGV0ZSkge1xyXG4gICAgICB0aGlzLnNob3dWYWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgIHRoaXMub3B0aW9ucyEuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgIG9wdGlvbi5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKChvcHRpb24ub3B0aW9uVmFsdWU/Lm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0IHx8ICcnKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5zaG93VmFsdWU/LnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgIG9wdGlvbi5maWx0ZXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBvcHRpb24uZmlsdGVyZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh0aGlzLnNob3dWYWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IGZpbHRlcmVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucyEuZmlsdGVyKG9wdGlvbiA9PiAhb3B0aW9uLmZpbHRlcmVkKTtcclxuICAgICAgICBpZiAoZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGZpbHRlcmVkT3B0aW9uc1swXS5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93Tm9PcHRpb25zT25TZWFyY2ggPSBmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoID09PSAwO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKHRoaXMudmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy5zaG93VmFsdWUgPSAnJztcclxuICAgICAgICB0aGlzLm9wdGlvbnMhLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgIHRoaXMub3B0aW9ucyEuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gZmFsc2UpO1xyXG4gICAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMub3B0aW9ucyEuZmluZChvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSB0aGlzLnZhbHVlKTtcclxuICAgICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChvcHRpb24pKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1ZhbHVlID0gb3B0aW9uLm9wdGlvblZhbHVlPy5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCB8fCAnJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IHNlbGVjdGVkVmFsdWVzID0gdGhpcy52YWx1ZSBhcyBhbnlbXTtcclxuICAgICAgICAgIHRoaXMub3B0aW9ucyEuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucyEuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQpO1xyXG4gICAgICAgICAgdGhpcy5zaG93VmFsdWUgPSBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwID8gJycgOiBzZWxlY3RlZE9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24ub3B0aW9uVmFsdWU/Lm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0IHx8ICcnKS5qb2luKCcsICcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9yZXNldE9wdGlvbnMoKTogdm9pZCB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5vcHRpb25DaGFuZ2VTdWJzY3JpcHRpb24pICYmICF0aGlzLm9wdGlvbkNoYW5nZVN1YnNjcmlwdGlvbi5jbG9zZWQpIHtcclxuICAgICAgdGhpcy5vcHRpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIHRoaXMub3B0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy53YXRjaCh0aGlzLm9wdGlvblNlbGVjdGlvbkNoYW5nZXMsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKChldmVudDogTXJkU2VsZWN0T3B0aW9uQ2hhbmdlKSA9PiB7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChldmVudCkpIHtcclxuICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgIHRoaXMub3B0aW9ucyEuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkID0gZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9wdGlvbnMhLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5mb2N1c2VkID0gZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9ICcnO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyEuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLmZpbHRlcmVkID0gZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2hvd05vT3B0aW9uc09uU2VhcmNoID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKGV2ZW50Lm9wdGlvbikgJiYgIXRoaXMuYXV0b0NvbXBsZXRlKSB7XHJcbiAgICAgICAgICBldmVudC5vcHRpb24uc2VsZWN0ZWQgPSB0aGlzLm11bHRpcGxlID8gKGV2ZW50LmNoZWNrZWQgPz8gZmFsc2UpIDogdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSAmJiB0aGlzLmZvcm1Db250cm9sLnZhbHVlICE9PSBldmVudC5rZXkpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShldmVudC5rZXkpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YW5kYWxvbmUgJiYgdGhpcy52YWx1ZSAhPT0gZXZlbnQua2V5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBldmVudC5rZXk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dWYWx1ZSA9IGV2ZW50LnZhbHVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5zaG93T3B0aW9ucy52YWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5vcHRpb25zIS5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCk7XHJcbiAgICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwID8gbnVsbCA6IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMuc3RhbmRhbG9uZSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBzZWxlY3RlZE9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCkpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtQXJyYXlBYmdsZWljaGVuKHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IHRoaXMuaXRlbXMuZmluZChpdGVtID0+IGl0ZW1bdGhpcy5pZGVudGlmaWVyXSA9PT0gb3B0aW9uLnZhbHVlKSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMuY2xvc2VPblNlbGVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dPcHRpb25zLnZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybUFycmF5QWJnbGVpY2hlbihzZWxlY3RlZEl0ZW1zOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKHNlbGVjdGVkSXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMuZm9ybUFycmF5Q29udHJvbCEucmVzZXQoW10pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgaXRlbUluZGl6ZXNUb1JlbW92ZTogbnVtYmVyW10gPSBbXTtcclxuICAgIGxldCBpdGVtc1RvQWRkOiBhbnlbXSA9IHNlbGVjdGVkSXRlbXMuc2xpY2UoKTtcclxuICAgIHRoaXMuZm9ybUFycmF5Q29udHJvbCEuZW50cmllcy5mb3JFYWNoKChlbnRyeTogSUFjY2Vzc2FibGVGb3JtQ29udHJvbDxhbnksYW55PiwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKCFVdGlsLmlzRGVmaW5lZChzZWxlY3RlZEl0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtW3RoaXMuaWRlbnRpZmllcl0gPT09IChlbnRyeSBhcyBBY2Nlc3NhYmxlRm9ybUdyb3VwPGFueSxhbnk+KS5maWVsZHNbdGhpcy5pZGVudGlmaWVyXS52YWx1ZSkpKSB7XHJcbiAgICAgICAgaXRlbUluZGl6ZXNUb1JlbW92ZS5wdXNoKGluZGV4KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpdGVtc1RvQWRkID0gaXRlbXNUb0FkZC5maWx0ZXIoaXRlbSA9PiBpdGVtW3RoaXMuaWRlbnRpZmllcl0gIT09IChlbnRyeSBhcyBBY2Nlc3NhYmxlRm9ybUdyb3VwPGFueSxhbnk+KS5maWVsZHNbdGhpcy5pZGVudGlmaWVyXS52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaXRlbUluZGl6ZXNUb1JlbW92ZS5yZXZlcnNlKCkuZm9yRWFjaChpbmRleCA9PiB0aGlzLmZvcm1BcnJheUNvbnRyb2whLnJlbW92ZUF0KGluZGV4LCBmYWxzZSwge29ubHlTZWxmOiB0cnVlfSkpO1xyXG4gICAgaXRlbXNUb0FkZC5mb3JFYWNoKGl0ZW0gPT4gdGhpcy5mb3JtQXJyYXlDb250cm9sIS5wdXNoKGl0ZW0pKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVTZWxlY3RlZCgpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZSk7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkpIHtcclxuICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShudWxsKTtcclxuICAgIH1cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wpKSB7XHJcbiAgICAgIHRoaXMuZm9ybUFycmF5Q29udHJvbC5yZXNldChbXSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGFuZGFsb25lKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5zaG93VmFsdWUgPSAnJztcclxuICAgIGlmICghdGhpcy5tdWx0aXBsZSB8fCB0aGlzLmNsb3NlT25TZWxlY3QpIHtcclxuICAgICAgdGhpcy5zaG93T3B0aW9ucy52YWx1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoaXBDbG9zZWQob3B0aW9uOiBNcmRTZWxlY3RPcHRpb25Db21wb25lbnQpOiB2b2lkIHtcclxuICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgbGV0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucyEuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQpO1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBzZWxlY3RlZE9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YW5kYWxvbmUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDAgPyBudWxsIDogc2VsZWN0ZWRPcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1BcnJheUNvbnRyb2wpKSB7XHJcbiAgICAgIGxldCByZW1vdmVkSW5kZXggPSB0aGlzLmZvcm1BcnJheUNvbnRyb2wuZW50cmllcy5maW5kSW5kZXgoKGVudHJ5OiBJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSxhbnk+KSA9PiAoZW50cnkgYXMgQWNjZXNzYWJsZUZvcm1Hcm91cDxhbnksYW55PikuZmllbGRzW3RoaXMuaWRlbnRpZmllcl0udmFsdWUgPT09IG9wdGlvbi52YWx1ZSk7XHJcbiAgICAgIHRoaXMuZm9ybUFycmF5Q29udHJvbC5yZW1vdmVBdChyZW1vdmVkSW5kZXgsIGZhbHNlLCB7b25seVNlbGY6IHRydWV9KTtcclxuICAgICAgLy8gdGhpcy5mb3JtQXJyYXlDb250cm9sLnJlc2V0KHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDAgPyBbXSA6IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IHRoaXMuaXRlbXMuZmluZChpdGVtID0+IGl0ZW1bdGhpcy5pZGVudGlmaWVyXSA9PT0gb3B0aW9uLnZhbHVlKSkpO1xyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5zaG93VmFsdWUgPSBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwID8gJycgOiBzZWxlY3RlZE9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24ub3B0aW9uVmFsdWU/Lm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0IHx8ICcnKS5qb2luKCcsICcpO1xyXG4gICAgdGhpcy5jaGlwQ2xvc2VDbGlja2VkKG9wdGlvbi52YWx1ZSk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXV0b0NvbXBsZXRlSW5wdXQoZXZlbnQ6IElucHV0RXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhbmRhbG9uZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIH1cclxuICAgIC8vIHRoaXMuc2hvd1ZhbHVlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIC8vIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAvLyAgIG9wdGlvbi5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICAvLyAgIGlmICgob3B0aW9uLm9wdGlvblZhbHVlPy5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCB8fCAnJykudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2hvd1ZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgIC8vICAgICBvcHRpb24uZmlsdGVyZWQgPSBmYWxzZTtcclxuICAgIC8vICAgfSBlbHNlIHtcclxuICAgIC8vICAgICBvcHRpb24uZmlsdGVyZWQgPSB0cnVlO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGlmICh0aGlzLnNob3dWYWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgIGxldCBmaWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiAhb3B0aW9uLmZpbHRlcmVkKTtcclxuICAgIC8vICAgaWYgKGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgICAgZmlsdGVyZWRPcHRpb25zWzBdLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIHRoaXMuc2hvd05vT3B0aW9uc09uU2VhcmNoID0gZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA9PT0gMDtcclxuICAgIC8vIH1cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlYXJjaElucHV0KGV2ZW50OiBJbnB1dEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnNlYXJjaFRleHQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgaWYgKHRoaXMudmlydHVhbFNjcm9sbCkge1xyXG4gICAgICB0aGlzLnZpcnR1ZWxsRmlsdGVybih0aGlzLnNlYXJjaFRleHQpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vcHRpb25zIS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgIG9wdGlvbi5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgIGlmICgob3B0aW9uLm9wdGlvblZhbHVlPy5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCB8fCAnJykudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgb3B0aW9uLmZpbHRlcmVkID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3B0aW9uLmZpbHRlcmVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hUZXh0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGZpbHRlcmVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucyEuZmlsdGVyKG9wdGlvbiA9PiAhb3B0aW9uLmZpbHRlcmVkKTtcclxuICAgICAgaWYgKGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZmlsdGVyZWRPcHRpb25zWzBdLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2hvd05vT3B0aW9uc09uU2VhcmNoID0gZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmlydHVhbFNjcm9sbCkge1xyXG4gICAgICB0aGlzLnZpcnR1ZWxsZVRhc3RlVmVyYXJiZWl0ZW4oZXZlbnQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZmlsdGVyZWRPcHRpb25zID0gdGhpcy5vcHRpb25zIS5maWx0ZXIob3B0aW9uID0+ICFvcHRpb24uZmlsdGVyZWQpO1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBmaWx0ZXJlZE9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLmZvY3VzZWQpO1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQoc2VsZWN0ZWRPcHRpb24pKSB7XHJcbiAgICAgICAgc2VsZWN0ZWRPcHRpb24ub3B0aW9uQ2xpY2soKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgbGV0IGZvY3VzZWRPcHRpb24gPSBmaWx0ZXJlZE9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLmZvY3VzZWQpO1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQoZm9jdXNlZE9wdGlvbikpIHtcclxuICAgICAgICBsZXQgZm9jdXNlZE9wdGlvbkluZGV4ID0gZmlsdGVyZWRPcHRpb25zLmZpbmRJbmRleCgob3B0aW9uKSA9PiBvcHRpb24uZm9jdXNlZCk7XHJcbiAgICAgICAgaWYgKGZvY3VzZWRPcHRpb25JbmRleCA+IC0xICYmIGZvY3VzZWRPcHRpb25JbmRleCA8IGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggLSAyKSB7XHJcbiAgICAgICAgICBmb2N1c2VkT3B0aW9uLmZvY3VzZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGZpbHRlcmVkT3B0aW9uc1tmb2N1c2VkT3B0aW9uSW5kZXggKyAxXS5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsdGVyZWRPcHRpb25zWzBdLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgIGxldCBmb2N1c2VkT3B0aW9uID0gZmlsdGVyZWRPcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi5mb2N1c2VkKTtcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKGZvY3VzZWRPcHRpb24pKSB7XHJcbiAgICAgICAgbGV0IGZvY3VzZWRPcHRpb25JbmRleCA9IGZpbHRlcmVkT3B0aW9ucy5maW5kSW5kZXgoKG9wdGlvbikgPT4gb3B0aW9uLmZvY3VzZWQpO1xyXG4gICAgICAgIGlmIChmb2N1c2VkT3B0aW9uSW5kZXggPiAwKSB7XHJcbiAgICAgICAgICBmb2N1c2VkT3B0aW9uLmZvY3VzZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGZpbHRlcmVkT3B0aW9uc1tmb2N1c2VkT3B0aW9uSW5kZXggLSAxXS5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsdGVyZWRPcHRpb25zW2ZpbHRlcmVkT3B0aW9ucy5sZW5ndGggLSAxXS5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB0cmlnZ2VyQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIGlmICgoIVV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpIHx8ICF0aGlzLmZvcm1Db250cm9sLmRpc2FibGVkKSAmJiAoIVV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCkgfHwgIXRoaXMuZm9ybUFycmF5Q29udHJvbC5kaXNhYmxlZCkgJiYgKCF0aGlzLnN0YW5kYWxvbmUgfHwgIXRoaXMuZGlzYWJsZWQpKSB7XHJcbiAgICAgIHRoaXMudG91Y2hlZC5lbWl0KCk7XHJcbiAgICAgIHRoaXMuZm9jdXNlZC5lbWl0KCk7XHJcbiAgICAgIHRoaXMuc2hvd09wdGlvbnMudmFsdWUgPSB0cnVlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy52aXJ0dWFsU2Nyb2xsKSB7XHJcbiAgICAgICAgICAvLyBEaWUgYXVzZ2V3YWVobHRlIE9wdGlvbiBpc3QgZXZ0bC4gbmljaHQgZ2VyZW5kZXJ0LCBkYWhlciB1ZWJlciBkZW4gSW5kZXggc2Nyb2xsZW5cclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZWZpbHRlcnRlSXRlbXMuZmluZEluZGV4KGl0ZW0gPT4gdGhpcy52aXJ0dWVsbGVBdXN3YWhsLmhhcyh0aGlzLndlcnRWb24oaXRlbSkpKTtcclxuICAgICAgICAgIHRoaXMudmlydHVlbGxlc1Njcm9sbD8uc2Nyb2xsVG9JbmRleChpbmRleCwgJ2NlbnRlcicsIHRoaXMuc21vb3RoU2Nyb2xsID8gJ3Ntb290aCcgOiAnYXV0bycpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXJkLXNlbGVjdC1vcHRpb25zLW92ZXJsYXkgLm1yZC1zZWxlY3Qtb3B0aW9ucy1zY3JvbGwgLm1yZC1zZWxlY3Qtb3B0aW9uLWl0ZW0uc2VsZWN0ZWQnKTtcclxuICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQoc2VsZWN0ZWRPcHRpb24pKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5zbW9vdGhTY3JvbGwpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24uc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICduZWFyZXN0JywgaW5saW5lOiAnbmVhcmVzdCd9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogJ2luc3RhbnQnLCBibG9jazogJ25lYXJlc3QnLCBpbmxpbmU6ICduZWFyZXN0J30pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTApO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2VsZWN0ZWRPcHRpb25zKCk6IE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudFtdIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMhLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgc2hvd05vT3B0aW9uc09uU2VhcmNoKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93Tm9PcHRpb25zT25TZWFyY2ggPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzaG93Tm9PcHRpb25zT25TZWFyY2goKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd05vT3B0aW9uc09uU2VhcmNoO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50fG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYmx1cihldmVudDogRm9jdXNFdmVudHxudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLmJsdXJyZWQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc3REZWFrdGl2aWVydCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhISh0aGlzLmZvcm1Db250cm9sPy5kaXNhYmxlZCB8fCB0aGlzLmZvcm1BcnJheUNvbnRyb2w/LmRpc2FibGVkIHx8IHRoaXMuZGlzYWJsZWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqIG51bGwgc3RhdHQgLTE6IGVpbiB0YWJpbmRleCB2b24gLTEgbGFlc3N0IHNpY2ggcGVyIE1hdXNrbGljayB3ZWl0ZXJoaW4gZm9rdXNzaWVyZW4gKi9cclxuICBwdWJsaWMgZ2V0IHRyaWdnZXJUYWJJbmRleCgpOiBudW1iZXIgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLmlzdERlYWt0aXZpZXJ0ID8gbnVsbCA6IDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25UcmlnZ2VyRm9jdXMoKTogdm9pZCB7XHJcbiAgICAvLyBCbHVyIGJsZWlidCBlcmxhdWJ0LCBkYW1pdCBlaW4gd2FlaHJlbmQgZGVzIEZva3VzIGRlYWt0aXZpZXJ0ZXMgU2VsZWN0IGRhcyBGb3JtdWxhcmZlbGQgenVydWVja3NldHp0XHJcbiAgICBpZiAodGhpcy5pc3REZWFrdGl2aWVydCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvY3VzKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uVHJpZ2dlckJsdXIoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuc2hvd09wdGlvbnMudmFsdWUpIHtcclxuICAgICAgdGhpcy5ibHVyKG51bGwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uVHJpZ2dlcktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNob3dPcHRpb25zLnZhbHVlKSB7XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnNob3dPcHRpb25zLnZhbHVlID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnVGFiJykge1xyXG4gICAgICAgIHRoaXMuc2hvd09wdGlvbnMudmFsdWUgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJyB8fCBldmVudC5rZXkgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgfHwgZXZlbnQua2V5ID09PSAnICcgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLnRyaWdnZXJDbGlja2VkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hpcENsb3NlQ2xpY2tlZCh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmNoaXBDbG9zZS5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0gVmlydHVlbGxlcyBTY3JvbGxpbmc6IFp1c3RhbmQga29tbXQgYXVzIGl0ZW1zIHVuZCBkZW0gV2VydCwgbmljaHQgYXVzIE1yZFNlbGVjdE9wdGlvbkNvbXBvbmVudHMgLS0tLS0tLS0tLVxyXG5cclxuICBwdWJsaWMgd2VydFZvbihpdGVtOiBhbnkpOiBhbnkge1xyXG4gICAgcmV0dXJuIFV0aWwuaXNEZWZpbmVkKGl0ZW0pICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyA/IGl0ZW1bdGhpcy5pZGVudGlmaWVyXSA6IGl0ZW07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbGFiZWxWb24oaXRlbTogYW55KTogc3RyaW5nIHtcclxuICAgIGlmICghVXRpbC5pc0RlZmluZWQoaXRlbSkpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZGlzcGxheVdpdGgpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlXaXRoKGl0ZW0pID8/ICcnO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBpdGVtICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGFiZWwgPSBpdGVtW3RoaXMubGFiZWxLZXldO1xyXG4gICAgcmV0dXJuIFV0aWwuaXNEZWZpbmVkKGxhYmVsKSA/IFN0cmluZyhsYWJlbCkgOiAnJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc3RWaXJ0dWVsbEF1c2dld2FlaGx0KGl0ZW06IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudmlydHVlbGxlQXVzd2FobC5oYXModGhpcy53ZXJ0Vm9uKGl0ZW0pKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB2aXJ0dWVsbGVPcHRpb25HZWtsaWNrdChpdGVtOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IHdlcnQgPSB0aGlzLndlcnRWb24oaXRlbSk7XHJcbiAgICB0aGlzLnNlYXJjaFRleHQgPSAnJztcclxuICAgIHRoaXMudmlydHVlbGxGaWx0ZXJuKCcnKTtcclxuICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQ29udHJvbCkgJiYgdGhpcy5mb3JtQ29udHJvbC52YWx1ZSAhPT0gd2VydCkge1xyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUod2VydCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGFuZGFsb25lICYmIHRoaXMudmFsdWUgIT09IHdlcnQpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gd2VydDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNob3dPcHRpb25zLnZhbHVlID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBhdXN3YWhsID0gbmV3IFNldCh0aGlzLnZpcnR1ZWxsZUF1c3dhaGwpO1xyXG4gICAgICBpZiAoYXVzd2FobC5oYXMod2VydCkpIHtcclxuICAgICAgICBhdXN3YWhsLmRlbGV0ZSh3ZXJ0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhdXN3YWhsLmFkZCh3ZXJ0KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnZpcnR1ZWxsZVdlcnRlU2V0emVuKHRoaXMuaXRlbXMubWFwKGkgPT4gdGhpcy53ZXJ0Vm9uKGkpKS5maWx0ZXIodyA9PiBhdXN3YWhsLmhhcyh3KSkpO1xyXG4gICAgICBpZiAodGhpcy5jbG9zZU9uU2VsZWN0KSB7XHJcbiAgICAgICAgdGhpcy5zaG93T3B0aW9ucy52YWx1ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdmlydHVlbGxlbkNoaXBTY2hsaWVzc2VuKGl0ZW06IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3Qgd2VydCA9IHRoaXMud2VydFZvbihpdGVtKTtcclxuICAgIHRoaXMudmlydHVlbGxlV2VydGVTZXR6ZW4oQXJyYXkuZnJvbSh0aGlzLnZpcnR1ZWxsZUF1c3dhaGwpLmZpbHRlcih3ID0+IHcgIT09IHdlcnQpKTtcclxuICAgIHRoaXMuY2hpcENsb3NlQ2xpY2tlZCh3ZXJ0KTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIC8qKiBOdXIgZnVlciBgbXVsdGlwbGVgICovXHJcbiAgcHJpdmF0ZSB2aXJ0dWVsbGVXZXJ0ZVNldHplbih3ZXJ0ZTogYW55W10pOiB2b2lkIHtcclxuICAgIGNvbnN0IG5ldWVyV2VydCA9IHdlcnRlLmxlbmd0aCA9PT0gMCA/IG51bGwgOiB3ZXJ0ZTtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKG5ldWVyV2VydCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGFuZGFsb25lKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBuZXVlcldlcnQ7XHJcbiAgICB9XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5mb3JtQXJyYXlDb250cm9sKSkge1xyXG4gICAgICB0aGlzLmZvcm1BcnJheUFiZ2xlaWNoZW4od2VydGUubWFwKHcgPT4gdGhpcy5pdGVtcy5maW5kKGl0ZW0gPT4gdGhpcy53ZXJ0Vm9uKGl0ZW0pID09PSB3KSkuZmlsdGVyKGl0ZW0gPT4gVXRpbC5pc0RlZmluZWQoaXRlbSkpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXVzZ2V3YWVobHRlV2VydGVMZXNlbigpOiBhbnlbXSB7XHJcbiAgICBsZXQgd2VydDogYW55O1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUFycmF5Q29udHJvbCkpIHtcclxuICAgICAgcmV0dXJuICgodGhpcy5mb3JtQXJyYXlDb250cm9sLnZhbHVlIGFzIGFueVtdKSB8fCBbXSkubWFwKGVpbnRyYWcgPT4gZWludHJhZz8uW3RoaXMuaWRlbnRpZmllcl0pO1xyXG4gICAgfSBlbHNlIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xyXG4gICAgICB3ZXJ0ID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdlcnQgPSB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh3ZXJ0KSkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSAmJiBBcnJheS5pc0FycmF5KHdlcnQpID8gd2VydCA6IFt3ZXJ0XTtcclxuICB9XHJcblxyXG4gIC8qKiBAcGFyYW0gcmVuZGVybiBTb2ZvcnQgcmVuZGVybjsgaW0gSW5wdXQtU2V0dGVyIG5pY2h0IG5vZXRpZywgd2VpbCBkaWUgQ2hhbmdlIERldGVjdGlvbiBvaG5laGluIGZvbGd0ICovXHJcbiAgcHJpdmF0ZSB2aXJ0dWVsbGVBbnplaWdlQWt0dWFsaXNpZXJlbihyZW5kZXJuOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hdXRvQ29tcGxldGUpIHtcclxuICAgICAgdGhpcy5zaG93VmFsdWUgPSBVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSA/IHRoaXMuZm9ybUNvbnRyb2wudmFsdWUgOiB0aGlzLnZhbHVlO1xyXG4gICAgICB0aGlzLnZpcnR1ZWxsRmlsdGVybih0aGlzLnNob3dWYWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB3ZXJ0ZSA9IHRoaXMuYXVzZ2V3YWVobHRlV2VydGVMZXNlbigpO1xyXG4gICAgICB0aGlzLnZpcnR1ZWxsZUF1c3dhaGwgPSBuZXcgU2V0KHdlcnRlKTtcclxuICAgICAgdGhpcy52aXJ0dWVsbGVBdXNnZXdhZWhsdGVJdGVtcyA9IHdlcnRlXHJcbiAgICAgICAgLm1hcCh3ID0+IHRoaXMuaXRlbXMuZmluZChpdGVtID0+IHRoaXMud2VydFZvbihpdGVtKSA9PT0gdykpXHJcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IFV0aWwuaXNEZWZpbmVkKGl0ZW0pKTtcclxuICAgICAgdGhpcy5zaG93VmFsdWUgPSB0aGlzLnZpcnR1ZWxsZUF1c2dld2FlaGx0ZUl0ZW1zLm1hcChpdGVtID0+IHRoaXMubGFiZWxWb24oaXRlbSkpLmpvaW4oJywgJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIGlmIChyZW5kZXJuKSB7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmlydHVlbGxGaWx0ZXJuKHRleHQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3Qgc3VjaGUgPSAodGV4dCB8fCAnJykudG9Mb3dlckNhc2UoKTtcclxuICAgIHRoaXMuZ2VmaWx0ZXJ0ZUl0ZW1zID0gc3VjaGUubGVuZ3RoID09PSAwXHJcbiAgICAgID8gdGhpcy5pdGVtc1xyXG4gICAgICA6IHRoaXMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gdGhpcy5sYWJlbFZvbihpdGVtKS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3VjaGUpID4gLTEpO1xyXG4gICAgdGhpcy5mb2t1c0luZGV4ID0gc3VjaGUubGVuZ3RoID4gMCAmJiB0aGlzLmdlZmlsdGVydGVJdGVtcy5sZW5ndGggPiAwID8gMCA6IC0xO1xyXG4gICAgLy8gRmVsZCBzdGF0dCBTZXR0ZXIsIGRhbWl0IGhpZXIgKGF1Y2ggYXVzIGRlbSBpdGVtcy1TZXR0ZXIgaGVyYXVzKSBrZWluZSBDaGFuZ2UgRGV0ZWN0aW9uIGFuZ2VzdG9zc2VuIHdpcmRcclxuICAgIHRoaXMuX3Nob3dOb09wdGlvbnNPblNlYXJjaCA9IHN1Y2hlLmxlbmd0aCA+IDAgJiYgdGhpcy5nZWZpbHRlcnRlSXRlbXMubGVuZ3RoID09PSAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2aXJ0dWVsbGVUYXN0ZVZlcmFyYmVpdGVuKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBhbnphaGwgPSB0aGlzLmdlZmlsdGVydGVJdGVtcy5sZW5ndGg7XHJcbiAgICBpZiAoYW56YWhsID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgaWYgKHRoaXMuZm9rdXNJbmRleCA+PSAwICYmIHRoaXMuZm9rdXNJbmRleCA8IGFuemFobCkge1xyXG4gICAgICAgIHRoaXMudmlydHVlbGxlT3B0aW9uR2VrbGlja3QodGhpcy5nZWZpbHRlcnRlSXRlbXNbdGhpcy5mb2t1c0luZGV4XSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgdGhpcy5mb2t1c0luZGV4ID0gTWF0aC5taW4oYW56YWhsIC0gMSwgdGhpcy5mb2t1c0luZGV4ICsgMSk7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgIHRoaXMuZm9rdXNJbmRleCA9IHRoaXMuZm9rdXNJbmRleCA8IDAgPyBhbnphaGwgLSAxIDogTWF0aC5tYXgoMCwgdGhpcy5mb2t1c0luZGV4IC0gMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnZpcnR1ZWxsZXNTY3JvbGw/LnNjcm9sbFRvSW5kZXgodGhpcy5mb2t1c0luZGV4KTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBvcHRpb25zTWluV2lkdGgoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdENvbnRhaW5lciA/IGAke3RoaXMuc2VsZWN0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGh9cHhgIDogJ2F1dG8nO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICNzZWxlY3RDb250YWluZXIgY2xhc3M9XCJtcmQtc2VsZWN0LWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cInsnbXJkLXNlbGVjdC1kaXNhYmxlZCc6IGZvcm1Db250cm9sPy5kaXNhYmxlZCB8fCBmb3JtQXJyYXlDb250cm9sPy5kaXNhYmxlZCB8fCBkaXNhYmxlZH1cIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImF1dG9Db21wbGV0ZVwiPlxuICAgIDxpbnB1dFxuICAgIChjbGljayk9XCJ0cmlnZ2VyQ2xpY2tlZCgpXCJcbiAgICBbdmFsdWVdPVwic2hvd1ZhbHVlXCJcbiAgICAoaW5wdXQpPVwiYXV0b0NvbXBsZXRlSW5wdXQoJGV2ZW50KVwiXG4gICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICA+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhYXV0b0NvbXBsZXRlXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImN1c3RvbVRyaWdnZXJcIj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm1yZC1zZWxlY3QtY3VzdG9tLXRyaWdnZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjdXN0b21UcmlnZ2VyXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNoaXBTZWxlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1yZC1zZWxlY3QtdHJpZ2dlclwiIChjbGljayk9XCJ0cmlnZ2VyQ2xpY2tlZCgpXCIgW2F0dHIudGFiaW5kZXhdPVwidHJpZ2dlclRhYkluZGV4XCIgKGZvY3VzKT1cIm9uVHJpZ2dlckZvY3VzKClcIiAoYmx1cik9XCJvblRyaWdnZXJCbHVyKClcIiAoa2V5ZG93bik9XCJvblRyaWdnZXJLZXlEb3duKCRldmVudClcIj5cbiAgICAgICAgICA8c3BhbiBbbXJkVG9vbFRpcF09XCJzaG93VmFsdWVcIiBzaG93SWZUcnVuY2F0ZWQ+e3tzaG93VmFsdWV9fTwvc3Bhbj5cbiAgICAgICAgICA8c3ZnIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB3aWR0aD1cIjE0cHhcIiBoZWlnaHQ9XCIxNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCI+PC9nPlxuICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2U9XCIjQ0NDQ0NDXCIgc3Ryb2tlLXdpZHRoPVwiMC4wNDhcIj48L2c+XG4gICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj48cGF0aCBkPVwiTTExLjE3OCAxOS41NjlhLjk5OC45OTggMCAwIDAgMS42NDQgMGw5LTEzQS45OTkuOTk5IDAgMCAwIDIxIDVIM2ExLjAwMiAxLjAwMiAwIDAgMC0uODIyIDEuNTY5bDkgMTN6XCI+PC9wYXRoPjwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjaGlwU2VsZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtcmQtY2hpcC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibXJkLWNoaXAtdmFsdWVzXCIgKm5nSWY9XCJjaGlwU2VsZWN0aW9uXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2VsZWN0ZWRPcHRpb25zICYmIHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgIDxtcmQtY2hpcCAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHNlbGVjdGVkT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgKGNsb3NlKT1cImNoaXBDbG9zZWQob3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgW3ByZWZpeEljb25dPVwiY2hpcFByZWZpeEljb25cIlxuICAgICAgICAgICAgICAgIFtzdWZmaXhJY29uXT1cImNoaXBTdWZmaXhJY29uXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZm9ybUNvbnRyb2w/LmRpc2FibGVkIHx8IGZvcm1BcnJheUNvbnRyb2w/LmRpc2FibGVkIHx8IGRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICA+e3tvcHRpb24ub3B0aW9uTGFiZWx9fTwvbXJkLWNoaXA+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ2aXJ0dWFsU2Nyb2xsXCI+XG4gICAgICAgICAgICAgIDxtcmQtY2hpcCAqbmdGb3I9XCJsZXQgaXRlbSBvZiB2aXJ0dWVsbGVBdXNnZXdhZWhsdGVJdGVtc1wiXG4gICAgICAgICAgICAgICAgKGNsb3NlKT1cInZpcnR1ZWxsZW5DaGlwU2NobGllc3NlbihpdGVtKVwiXG4gICAgICAgICAgICAgICAgW3ByZWZpeEljb25dPVwiY2hpcFByZWZpeEljb25cIlxuICAgICAgICAgICAgICAgIFtzdWZmaXhJY29uXT1cImNoaXBTdWZmaXhJY29uXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZm9ybUNvbnRyb2w/LmRpc2FibGVkIHx8IGZvcm1BcnJheUNvbnRyb2w/LmRpc2FibGVkIHx8IGRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICA+e3tsYWJlbFZvbihpdGVtKX19PC9tcmQtY2hpcD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yZC1zZWxlY3QtdHJpZ2dlci1jaGlwXCIgKGNsaWNrKT1cInRyaWdnZXJDbGlja2VkKClcIiBbYXR0ci50YWJpbmRleF09XCJ0cmlnZ2VyVGFiSW5kZXhcIiAoZm9jdXMpPVwib25UcmlnZ2VyRm9jdXMoKVwiIChibHVyKT1cIm9uVHJpZ2dlckJsdXIoKVwiIChrZXlkb3duKT1cIm9uVHJpZ2dlcktleURvd24oJGV2ZW50KVwiPlxuICAgICAgICAgICAgICA8c3ZnIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB3aWR0aD1cIjE0cHhcIiBoZWlnaHQ9XCIxNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz5cbiAgICAgICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZT1cIiNDQ0NDQ0NcIiBzdHJva2Utd2lkdGg9XCIwLjA0OFwiPjwvZz5cbiAgICAgICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj48cGF0aCBkPVwiTTExLjE3OCAxOS41NjlhLjk5OC45OTggMCAwIDAgMS42NDQgMGw5LTEzQS45OTkuOTk5IDAgMCAwIDIxIDVIM2ExLjAwMiAxLjAwMiAwIDAgMC0uODIyIDEuNTY5bDkgMTN6XCI+PC9wYXRoPjwvZz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cblxuPG5nLXRlbXBsYXRlXG4gIGNkay1jb25uZWN0ZWQtb3ZlcmxheVxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheUhhc0JhY2tkcm9wXT1cInRydWVcIlxuICBjZGtDb25uZWN0ZWRPdmVybGF5QmFja2Ryb3BDbGFzcz1cImNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wXCJcbiAgY2RrQ29ubmVjdGVkT3ZlcmxheVBhbmVsQ2xhc3M9XCJtcmQtc2VsZWN0LW9wdGlvbnMtb3ZlcmxheVwiXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cInNlbGVjdENvbnRhaW5lclwiXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJzaG93T3B0aW9ucy52YWx1ZVwiXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cIl9wb3NpdGlvbnNcIlxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU1pbldpZHRoXT1cIm9wdGlvbnNNaW5XaWR0aFwiXG4gIChiYWNrZHJvcENsaWNrKT1cInNob3dPcHRpb25zLnZhbHVlID0gZmFsc2VcIlxuPlxuICA8ZGl2IGNsYXNzPVwibXJkLXNlbGVjdC1vcHRpb25zLWNvbnRhaW5lclwiPlxuICAgIDxtcmQtc2VsZWN0LW9wdGlvbiAqbmdJZj1cInNlYXJjaFNlbGVjdGlvblwiIGNsYXNzPVwibXJkLXNlbGVjdC1zZWFyY2gtb3B0aW9uXCIgbm9DaGVja2JveD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBwbGFjZWhvbGRlcj1cIlN1Y2hlXCJcbiAgICAgICAgW3ZhbHVlXT1cInNlYXJjaFRleHRcIlxuICAgICAgICAoaW5wdXQpPVwic2VhcmNoSW5wdXQoJGV2ZW50KVwiXG4gICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxuICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAgICNzZWFyY2hTZWxlY3Rpb25JbnB1dFxuICAgICAgPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2FkZEJ1dHRvbl1cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9tcmQtc2VsZWN0LW9wdGlvbj5cbiAgICA8ZGl2IGNsYXNzPVwibXJkLXNlbGVjdC1vcHRpb25zLXNjcm9sbFwiIFtjbGFzcy5tcmQtc2VsZWN0LW9wdGlvbnMtc2Nyb2xsLXZpcnR1ZWxsXT1cInZpcnR1YWxTY3JvbGxcIj5cbiAgICAgIDxtcmQtc2VsZWN0LW9wdGlvbiAqbmdJZj1cIm51bGxhYmxlXCIgbm9DaGVja2JveCBbdmFsdWVdPVwibnVsbFwiIChvcHRpb25DbGlja2VkKT1cInJlbW92ZVNlbGVjdGVkKClcIj57e211bHRpcGxlID8gJ0F1c3dhaGwgbMO2c2NoZW4nIDogJy0nfX08L21yZC1zZWxlY3Qtb3B0aW9uPlxuICAgICAgPG1yZC1zZWxlY3Qtb3B0aW9uICpuZ0lmPVwic2VhcmNoU2VsZWN0aW9uICYmIHNlYXJjaFRleHQubGVuZ3RoID4gMCAmJiBzaG93Tm9PcHRpb25zT25TZWFyY2hcIiBub0NoZWNrYm94PktlaW5lIEVpbnRyw6RnZSBnZWZ1bmRlbjwvbXJkLXNlbGVjdC1vcHRpb24+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtcmQtc2VsZWN0LW9wdGlvblwiPjwvbmctY29udGVudD5cbiAgICAgIDxtcmQtdmlydHVhbC1zY3JvbGwgKm5nSWY9XCJ2aXJ0dWFsU2Nyb2xsXCJcbiAgICAgICAgW2l0ZW1zXT1cImdlZmlsdGVydGVJdGVtc1wiXG4gICAgICAgIFtpdGVtU2l6ZV09XCJpdGVtU2l6ZVwiXG4gICAgICAgIFttYXhIZWlnaHRdPVwidmlydHVhbFNjcm9sbE1heEhlaWdodFwiXG4gICAgICAgIFt0cmFja0J5XT1cInZpcnR1ZWxsZXJUcmFja0J5XCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBtcmRWaXJ0dWFsU2Nyb2xsSXRlbSBsZXQtaXRlbSBsZXQtaT1cImluZGV4XCI+XG4gICAgICAgICAgPG1yZC1zZWxlY3Qtb3B0aW9uIGNsYXNzPVwibXJkLXNlbGVjdC1vcHRpb24tdmlydHVlbGxcIlxuICAgICAgICAgICAgW3ZhbHVlXT1cIndlcnRWb24oaXRlbSlcIlxuICAgICAgICAgICAgW3NlbGVjdGVkXT1cImlzdFZpcnR1ZWxsQXVzZ2V3YWVobHQoaXRlbSlcIlxuICAgICAgICAgICAgW2ZvY3VzZWRdPVwiaSA9PT0gZm9rdXNJbmRleFwiXG4gICAgICAgICAgICAob3B0aW9uQ2xpY2tlZCk9XCJ2aXJ0dWVsbGVPcHRpb25HZWtsaWNrdChpdGVtKVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wdGlvblRlbXBsYXRlOyBlbHNlIHZpcnR1ZWxsZXNMYWJlbFwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwib3B0aW9uVGVtcGxhdGUudGVtcGxhdGVSZWY7IGNvbnRleHQ6IHskaW1wbGljaXQ6IGl0ZW0sIGluZGV4OiBpfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI3ZpcnR1ZWxsZXNMYWJlbD57e2xhYmVsVm9uKGl0ZW0pfX08L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvbXJkLXNlbGVjdC1vcHRpb24+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L21yZC12aXJ0dWFsLXNjcm9sbD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPiJdfQ==