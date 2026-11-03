import { BaseObject, SubscriptionHandler, Util } from 'mrd-core';
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, Output, ViewChildren, booleanAttribute } from '@angular/core';
import { isObservable, merge, startWith, switchMap } from 'rxjs';
import { MrdTabComponent } from '../mrd-tab/mrd-tab.component';
import { MrdTabBodyComponent } from '../mrd-tab-body/mrd-tab-body.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "../../../mrd-tooltip/common/directive/tool-tip-renderer/tool-tip-renderer.directive";
import * as i4 from "../mrd-tab-body/mrd-tab-body.component";
const _c0 = ["mrdTabHeader"];
const _c1 = function (a0, a1, a2, a3) { return { "tab-active": a0, "tab-disabled": a1, "tabs-rounded": a2, "fit-labels": a3 }; };
function MrdTabGroupComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6, 7);
    i0.ɵɵlistener("click", function MrdTabGroupComponent_div_0_div_1_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const tab_r4 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.tabGeklickt(tab_r4)); });
    i0.ɵɵtext(2);
    i0.ɵɵelement(3, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("mrdToolTip", tab_r4.tooltip)("ngClass", i0.ɵɵpureFunction4(6, _c1, tab_r4.active, tab_r4.disabled, ctx_r2.rounded, ctx_r2.labelsFit));
    i0.ɵɵattribute("aria-selected", !!tab_r4.active)("aria-disabled", tab_r4.disabled)("configname", tab_r4.configname || null);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", tab_r4.label, " ");
} }
function MrdTabGroupComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 9);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("left", ctx_r3.tabUnderlineLeft, "px")("width", ctx_r3.tabUnderlineWidth, "px");
} }
const _c2 = function (a0) { return { "height": a0 }; };
function MrdTabGroupComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, MrdTabGroupComponent_div_0_div_1_Template, 4, 11, "div", 4);
    i0.ɵɵtemplate(2, MrdTabGroupComponent_div_0_div_2_Template, 1, 4, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(3, _c2, ctx_r0.headerHeight + "px"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.tabs);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.indicator);
} }
function MrdTabGroupComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "mrd-tab-body", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tab_r8 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("content", tab_r8.content)("active", tab_r8.active)("index", tab_r8.index)("preserveContent", tab_r8.preserveContent);
} }
export class MrdTabGroupComponent extends BaseObject {
    cdr;
    router;
    route;
    tabs;
    tabBodys;
    tabHeader;
    rounded = false;
    labelsFit = false;
    noHeader = false;
    /** Linie unter dem aktiven Tab, die beim Wechsel mitwandert; standardmaessig aus */
    indicator = false;
    queryParameterActive;
    set headerHeight(value) {
        this._headerHeight = value;
        this.cdr.detectChanges();
    }
    get headerHeight() {
        return this._headerHeight;
    }
    _headerHeight;
    set selectedIndex(value) {
        this._selectedIndex = value;
        this.activateTab(value);
    }
    get selectedIndex() {
        return this._selectedIndex;
    }
    _selectedIndex;
    changeTab;
    /**
     * Wird vor jedem Tabwechsel per Klick auf den Kopf gefragt; Wechsel per `selectedIndex`/`changeTab` laufen ohne Rueckfrage.
     * Ein Observable zaehlt mit seinem ersten Wert.
     */
    canChangeTab;
    selectedTabChanged = new EventEmitter();
    selectedTabIndexChanged = new EventEmitter();
    /** Fuer `[(selectedIndex)]`, gleicher Wert wie `selectedTabIndexChanged` */
    selectedIndexChange = new EventEmitter();
    tabUnderlineLeft = 0;
    tabUnderlineWidth = 0;
    activeIndex;
    activeTab;
    activeTabBody;
    constructor(cdr, router, route) {
        super();
        this.cdr = cdr;
        this.router = router;
        this.route = route;
    }
    ngAfterViewInit() {
        this.tabsIndizieren();
        // Tabs per *ngFor koennen spaeter dazukommen oder wegfallen
        this.watch(this.tabs.changes, new SubscriptionHandler(() => this.tabsGeaendert()));
        this.watch(this.tabs.changes.pipe(startWith(this.tabs), switchMap((tabs) => merge(...tabs.map((tab) => tab.zustandGeaendert)))), new SubscriptionHandler(() => this.cdr.markForCheck()));
        if (Util.isDefined(this.changeTab)) {
            this.watch(this.changeTab.changed, new SubscriptionHandler((index) => {
                this.activateTab(index);
            }));
            if (Util.isDefined(this.changeTab.value)) {
                this.activateTab(this.changeTab.value);
            }
        }
        if (Util.isDefined(this.selectedIndex) && this.selectedIndex !== this.activeIndex) {
            this.activateTab(this.selectedIndex);
        }
        if (this.queryParameterActive) {
            this.route.queryParams.subscribe((params) => {
                if (Util.isDefined(params[this.queryParameterActive])) {
                    let index = parseInt(params[this.queryParameterActive]);
                    if (index >= 0 && index < this.tabs.length) {
                        this.activateTab(index);
                    }
                }
                else {
                    this.activateTab(0);
                }
            });
        }
        else if (!Util.isDefined(this.activeIndex)) {
            this.activateTab(0);
        }
    }
    /** Klick auf einen Tabkopf: gesperrte Tabs ignorieren, sonst `canChangeTab` fragen */
    tabGeklickt(tab) {
        if (tab.disabled || tab.index === this.activeIndex) {
            return;
        }
        if (!this.canChangeTab) {
            this.activateTab(tab.index);
            return;
        }
        const erlaubt = this.canChangeTab(tab.index, this.activeIndex);
        if (isObservable(erlaubt)) {
            this.subscribe(erlaubt, new SubscriptionHandler((ok) => {
                if (ok) {
                    this.activateTab(tab.index);
                }
            }));
        }
        else if (erlaubt) {
            this.activateTab(tab.index);
        }
    }
    tabsIndizieren() {
        this.tabs.forEach((tab, index) => {
            tab.index = index;
        });
    }
    /** Der aktive Tab bleibt aktiv, auch wenn sich sein Index verschiebt; faellt er weg, wird der naechstliegende gewaehlt */
    tabsGeaendert() {
        this.tabsIndizieren();
        this.cdr.detectChanges();
        if (this.tabs.length === 0) {
            this.activeIndex = undefined;
            this.activeTab = undefined;
            return;
        }
        const aktiv = Util.isDefined(this.activeTab) ? this.tabs.toArray().indexOf(this.activeTab) : -1;
        if (aktiv >= 0) {
            this.activeIndex = aktiv;
            this.activeTabBody = this.tabBodys.get(aktiv);
            this.unterstreichungSetzen(aktiv);
            this.cdr.detectChanges();
            this.indexMelden(aktiv);
            return;
        }
        const neu = Math.min(this.activeIndex ?? this._selectedIndex ?? 0, this.tabs.length - 1);
        this.activeIndex = undefined;
        this.activeTab = undefined;
        this.activateTab(neu);
    }
    unterstreichungSetzen(index) {
        const header = this.noHeader ? undefined : this.tabHeader?.get(index);
        if (header) {
            this.tabUnderlineLeft = header.nativeElement.offsetLeft;
            this.tabUnderlineWidth = header.nativeElement.offsetWidth;
        }
    }
    /**
     * Nur bei echter Aenderung und erst nach dem laufenden Change-Detection-Durchlauf,
     * sonst wirft `[(selectedIndex)]` beim ersten Rendern ExpressionChangedAfterItHasBeenChecked
     */
    indexMelden(index) {
        if (index === this._selectedIndex) {
            return;
        }
        this._selectedIndex = index;
        Promise.resolve().then(() => this.selectedIndexChange.emit(index));
    }
    activateTab(index) {
        if (Util.isDefined(this.activeIndex) && Util.isDefined(this.activeTab)) {
            if (index === this.activeIndex) {
                return;
            }
            if (index > this.activeIndex) {
                this.activeTabBody.translate = -100;
                this.activeTab.active = false;
            }
            if (index < this.activeIndex) {
                this.activeTabBody.translate = 100;
                this.activeTab.active = false;
            }
        }
        if (Util.isDefined(this.tabBodys)) {
            this.tabBodys.forEach((tab, i) => {
                if (i < index) {
                    tab.translate = -100;
                }
                if (i > index) {
                    tab.translate = 100;
                }
            });
            let tabBody = this.tabBodys.get(index);
            let tab = this.tabs.get(index);
            // Frag mich nicht wieso, aber wenn die Tabs nicht über die Standard-Header, sondern über
            // selectedIndex oder changeTab gesetzt werden, dann ist der Content des TabBodys manchmal destroyed.
            // Deshalb setzen wir ihn hier wieder auf den Content des Tabs, der immer funktioniert.
            if (tabBody.content.destroyed) {
                tabBody.content = tab.content;
            }
            tab.active = true;
            tabBody.translate = 0;
            this.activeIndex = index;
            this.activeTabBody = tabBody;
            this.activeTab = tab;
            if (this.queryParameterActive) {
                this.router.navigate([], {
                    queryParams: {
                        [this.queryParameterActive]: index
                    },
                    queryParamsHandling: 'merge'
                });
            }
            this.unterstreichungSetzen(index);
            this.selectedTabChanged.emit(tab);
            this.selectedTabIndexChanged.emit(index);
            this.indexMelden(index);
        }
        this.cdr.detectChanges();
    }
    /** @nocollapse */ static ɵfac = function MrdTabGroupComponent_Factory(t) { return new (t || MrdTabGroupComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdTabGroupComponent, selectors: [["mrd-tab-group"]], contentQueries: function MrdTabGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, MrdTabComponent, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabs = _t);
        } }, viewQuery: function MrdTabGroupComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(MrdTabBodyComponent, 5);
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabBodys = _t);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabHeader = _t);
        } }, inputs: { rounded: ["rounded", "rounded", booleanAttribute], labelsFit: ["labelsFit", "labelsFit", booleanAttribute], noHeader: ["noHeader", "noHeader", booleanAttribute], indicator: ["indicator", "indicator", booleanAttribute], queryParameterActive: "queryParameterActive", headerHeight: "headerHeight", selectedIndex: "selectedIndex", changeTab: "changeTab", canChangeTab: "canChangeTab" }, outputs: { selectedTabChanged: "selectedTabChanged", selectedTabIndexChanged: "selectedTabIndexChanged", selectedIndexChange: "selectedIndexChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 2, consts: [["class", "mrd-tab-group-tabs-container", "role", "tablist", 3, "ngStyle", 4, "ngIf"], [1, "mrd-tab-group-content-container"], [4, "ngFor", "ngForOf"], ["role", "tablist", 1, "mrd-tab-group-tabs-container", 3, "ngStyle"], ["class", "mrd-tab-group-tab", "role", "tab", 3, "mrdToolTip", "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "mrd-tab-underline", 3, "left", "width", 4, "ngIf"], ["role", "tab", 1, "mrd-tab-group-tab", 3, "mrdToolTip", "ngClass", "click"], ["mrdTabHeader", ""], [1, "mrd-tab-group-tab-indicator"], [1, "mrd-tab-underline"], [3, "content", "active", "index", "preserveContent"]], template: function MrdTabGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, MrdTabGroupComponent_div_0_Template, 3, 5, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtemplate(2, MrdTabGroupComponent_ng_container_2_Template, 2, 4, "ng-container", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.noHeader);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.tabs);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i2.NgStyle, i3.ToolTipRendererDirective, i4.MrdTabBodyComponent], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;flex:1 1 100%;max-height:100%}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;border-bottom:1px solid lightgrey;background-color:#e5e5e5;position:relative;overflow-x:auto;scrollbar-width:none}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-underline[_ngcontent-%COMP%]{position:absolute;bottom:0;height:2px;background-color:var(--mrd-tab-indicator-farbe, blue);transition:left .3s,width .3s}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab[_ngcontent-%COMP%]{display:flex;flex:1 1 100%;flex-direction:column;align-items:center;justify-content:center;min-width:-moz-fit-content;min-width:fit-content;height:100%;padding:12px 32px;position:relative;color:gray;font-weight:700;background-color:#f0f0f0;border:1px solid #d2d2d2}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.fit-labels[_ngcontent-%COMP%]{max-width:-moz-fit-content;max-width:fit-content}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tabs-rounded[_ngcontent-%COMP%], .mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tabs-rounded[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]{border-top-right-radius:24px;border-top-left-radius:24px}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tab-disabled[_ngcontent-%COMP%]{opacity:.5;cursor:default}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tab-disabled[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]:hover{background-color:transparent}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tab-active[_ngcontent-%COMP%]{background-color:#68b022;color:#fff;border-color:#68b022}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tab-active[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]:hover{background-color:#000;opacity:.1}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]{position:absolute;inset:0}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]:active{pointer-events:none}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]:hover{background-color:#68b022;opacity:.2}.mrd-tab-group-content-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:1 1 100%;overflow:hidden;position:relative}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdTabGroupComponent, [{
        type: Component,
        args: [{ selector: 'mrd-tab-group', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-tab-group-tabs-container\" [ngStyle]=\"{'height': headerHeight+'px'}\" *ngIf=\"!noHeader\" role=\"tablist\">\r\n  <div class=\"mrd-tab-group-tab\" #mrdTabHeader *ngFor=\"let tab of tabs\"\r\n    role=\"tab\" [attr.aria-selected]=\"!!tab.active\" [attr.aria-disabled]=\"tab.disabled\" [attr.configname]=\"tab.configname || null\" [mrdToolTip]=\"tab.tooltip\"\r\n    [ngClass]=\"{'tab-active': tab.active, 'tab-disabled': tab.disabled, 'tabs-rounded': rounded, 'fit-labels': labelsFit}\" (click)=\"tabGeklickt(tab)\">\r\n    {{tab.label}}\r\n    <div class=\"mrd-tab-group-tab-indicator\"></div>\r\n  </div>\r\n  <div class=\"mrd-tab-underline\" *ngIf=\"indicator\" [style.left.px]=\"tabUnderlineLeft\" [style.width.px]=\"tabUnderlineWidth\"></div>\r\n</div>\r\n<div class=\"mrd-tab-group-content-container\">\r\n  <!-- <ng-content></ng-content> -->\r\n  <ng-container *ngFor=\"let tab of tabs\">\r\n    <mrd-tab-body\r\n      [content]=\"tab.content\"\r\n      [active]=\"tab.active\"\r\n      [index]=\"tab.index\"\r\n      [preserveContent]=\"tab.preserveContent\"\r\n    >\r\n\r\n    </mrd-tab-body>\r\n  </ng-container>\r\n</div>\r\n", styles: [":host{display:flex;flex-direction:column;width:100%;flex:1 1 100%;max-height:100%}.mrd-tab-group-tabs-container{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;border-bottom:1px solid lightgrey;background-color:#e5e5e5;position:relative;overflow-x:auto;scrollbar-width:none}.mrd-tab-group-tabs-container .mrd-tab-underline{position:absolute;bottom:0;height:2px;background-color:var(--mrd-tab-indicator-farbe, blue);transition:left .3s,width .3s}.mrd-tab-group-tabs-container .mrd-tab-group-tab{display:flex;flex:1 1 100%;flex-direction:column;align-items:center;justify-content:center;min-width:-moz-fit-content;min-width:fit-content;height:100%;padding:12px 32px;position:relative;color:gray;font-weight:700;background-color:#f0f0f0;border:1px solid #d2d2d2}.mrd-tab-group-tabs-container .mrd-tab-group-tab.fit-labels{max-width:-moz-fit-content;max-width:fit-content}.mrd-tab-group-tabs-container .mrd-tab-group-tab.tabs-rounded,.mrd-tab-group-tabs-container .mrd-tab-group-tab.tabs-rounded .mrd-tab-group-tab-indicator{border-top-right-radius:24px;border-top-left-radius:24px}.mrd-tab-group-tabs-container .mrd-tab-group-tab.tab-disabled{opacity:.5;cursor:default}.mrd-tab-group-tabs-container .mrd-tab-group-tab.tab-disabled .mrd-tab-group-tab-indicator:hover{background-color:transparent}.mrd-tab-group-tabs-container .mrd-tab-group-tab.tab-active{background-color:#68b022;color:#fff;border-color:#68b022}.mrd-tab-group-tabs-container .mrd-tab-group-tab.tab-active .mrd-tab-group-tab-indicator:hover{background-color:#000;opacity:.1}.mrd-tab-group-tabs-container .mrd-tab-group-tab .mrd-tab-group-tab-indicator{position:absolute;inset:0}.mrd-tab-group-tabs-container .mrd-tab-group-tab .mrd-tab-group-tab-indicator:active{pointer-events:none}.mrd-tab-group-tabs-container .mrd-tab-group-tab .mrd-tab-group-tab-indicator:hover{background-color:#68b022;opacity:.2}.mrd-tab-group-content-container{display:flex;flex-direction:row;flex:1 1 100%;overflow:hidden;position:relative}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.Router }, { type: i1.ActivatedRoute }]; }, { tabs: [{
            type: ContentChildren,
            args: [MrdTabComponent]
        }], tabBodys: [{
            type: ViewChildren,
            args: [MrdTabBodyComponent]
        }], tabHeader: [{
            type: ViewChildren,
            args: ['mrdTabHeader']
        }], rounded: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], labelsFit: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], noHeader: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], indicator: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], queryParameterActive: [{
            type: Input
        }], headerHeight: [{
            type: Input
        }], selectedIndex: [{
            type: Input
        }], changeTab: [{
            type: Input
        }], canChangeTab: [{
            type: Input
        }], selectedTabChanged: [{
            type: Output
        }], selectedTabIndexChanged: [{
            type: Output
        }], selectedIndexChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXRhYi1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLXRhYnMvY29tcG9uZW50cy9tcmQtdGFiLWdyb3VwL21yZC10YWItZ3JvdXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10YWJzL2NvbXBvbmVudHMvbXJkLXRhYi1ncm91cC9tcmQtdGFiLWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQW1CLG1CQUFtQixFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNsRixPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsZUFBZSxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFhLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxTSxPQUFPLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7Ozs7Ozs7OztJQ0ozRSxpQ0FFb0o7SUFBM0IsK05BQVMsZUFBQSwwQkFBZ0IsQ0FBQSxJQUFDO0lBQ2pKLFlBQ0E7SUFBQSx5QkFBK0M7SUFDakQsaUJBQU07Ozs7SUFKMEgsMkNBQTBCLHlHQUFBO0lBQTdJLGdEQUFtQyxrQ0FBQSx5Q0FBQTtJQUU5QyxlQUNBO0lBREEsNkNBQ0E7OztJQUVGLHlCQUErSDs7O0lBQTlFLHFEQUFrQyx5Q0FBQTs7OztJQVByRiw4QkFBcUg7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QUM7WUFHUyxTQUFTO2tCQUFyRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBRXBCLG9CQUFvQjtrQkFBbkMsS0FBSztZQUVjLFlBQVk7a0JBQS9CLEtBQUs7WUFTYyxhQUFhO2tCQUFoQyxLQUFLO1lBV1UsU0FBUztrQkFBeEIsS0FBSztZQU1VLFlBQVk7a0JBQTNCLEtBQUs7WUFFVyxrQkFBa0I7a0JBQWxDLE1BQU07WUFDVSx1QkFBdUI7a0JBQXZDLE1BQU07WUFFVSxtQkFBbUI7a0JBQW5DLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlT2JqZWN0LCBPYnNlcnZhYmxlVmFsdWUsIFN1YnNjcmlwdGlvbkhhbmRsZXIsIFV0aWwgfSBmcm9tICdtcmQtY29yZSc7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgUXVlcnlMaXN0LCBWaWV3Q2hpbGRyZW4sIGJvb2xlYW5BdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgaXNPYnNlcnZhYmxlLCBtZXJnZSwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTXJkVGFiQ29tcG9uZW50IH0gZnJvbSAnLi4vbXJkLXRhYi9tcmQtdGFiLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNcmRUYWJCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi4vbXJkLXRhYi1ib2R5L21yZC10YWItYm9keS5jb21wb25lbnQnO1xyXG5cclxuLyoqIFJ1ZWNrZnJhZ2Ugdm9yIGVpbmVtIFRhYndlY2hzZWwgcGVyIEtsaWNrLCB6LiBCLiBcIkFlbmRlcnVuZ2VuIHZlcndlcmZlbj9cIjsgYGZhbHNlYCBiZWhhZWx0IGRlbiBha3R1ZWxsZW4gVGFiICovXHJcbmV4cG9ydCB0eXBlIE1yZFRhYldlY2hzZWxQcnVlZnVuZyA9IChuZXVlckluZGV4OiBudW1iZXIsIGFrdHVlbGxlckluZGV4OiBudW1iZXIpID0+IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtcmQtdGFiLWdyb3VwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLXRhYi1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLXRhYi1ncm91cC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmRUYWJHcm91cENvbXBvbmVudCBleHRlbmRzIEJhc2VPYmplY3QgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihNcmRUYWJDb21wb25lbnQpIHRhYnM6IFF1ZXJ5TGlzdDxNcmRUYWJDb21wb25lbnQ+O1xyXG4gIEBWaWV3Q2hpbGRyZW4oTXJkVGFiQm9keUNvbXBvbmVudCkgdGFiQm9keXM6IFF1ZXJ5TGlzdDxNcmRUYWJCb2R5Q29tcG9uZW50PjtcclxuICBAVmlld0NoaWxkcmVuKCdtcmRUYWJIZWFkZXInKSB0YWJIZWFkZXI6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcm91bmRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGxhYmVsc0ZpdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIG5vSGVhZGVyOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgLyoqIExpbmllIHVudGVyIGRlbSBha3RpdmVuIFRhYiwgZGllIGJlaW0gV2VjaHNlbCBtaXR3YW5kZXJ0OyBzdGFuZGFyZG1hZXNzaWcgYXVzICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgaW5kaWNhdG9yOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBxdWVyeVBhcmFtZXRlckFjdGl2ZTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgc2V0IGhlYWRlckhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9oZWFkZXJIZWlnaHQgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbiAgcHVibGljIGdldCBoZWFkZXJIZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9oZWFkZXJIZWlnaHQ7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2hlYWRlckhlaWdodDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgc2V0IHNlbGVjdGVkSW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHZhbHVlO1xyXG4gICAgdGhpcy5hY3RpdmF0ZVRhYih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xyXG4gIH1cclxuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBudW1iZXI7XHJcblxyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgY2hhbmdlVGFiOiBPYnNlcnZhYmxlVmFsdWU8bnVtYmVyPjtcclxuXHJcbiAgLyoqXHJcbiAgICogV2lyZCB2b3IgamVkZW0gVGFid2VjaHNlbCBwZXIgS2xpY2sgYXVmIGRlbiBLb3BmIGdlZnJhZ3Q7IFdlY2hzZWwgcGVyIGBzZWxlY3RlZEluZGV4YC9gY2hhbmdlVGFiYCBsYXVmZW4gb2huZSBSdWVja2ZyYWdlLlxyXG4gICAqIEVpbiBPYnNlcnZhYmxlIHphZWhsdCBtaXQgc2VpbmVtIGVyc3RlbiBXZXJ0LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjYW5DaGFuZ2VUYWI6IE1yZFRhYldlY2hzZWxQcnVlZnVuZztcclxuXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBzZWxlY3RlZFRhYkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxNcmRUYWJDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0ZWRUYWJJbmRleENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8qKiBGdWVyIGBbKHNlbGVjdGVkSW5kZXgpXWAsIGdsZWljaGVyIFdlcnQgd2llIGBzZWxlY3RlZFRhYkluZGV4Q2hhbmdlZGAgKi9cclxuICBAT3V0cHV0KCkgcHVibGljIHNlbGVjdGVkSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwdWJsaWMgdGFiVW5kZXJsaW5lTGVmdDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgdGFiVW5kZXJsaW5lV2lkdGg6IG51bWJlciA9IDA7XHJcblxyXG4gIHByaXZhdGUgYWN0aXZlSW5kZXg6IG51bWJlcjtcclxuICBwcml2YXRlIGFjdGl2ZVRhYjogTXJkVGFiQ29tcG9uZW50O1xyXG4gIHByaXZhdGUgYWN0aXZlVGFiQm9keTogTXJkVGFiQm9keUNvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhYnNJbmRpemllcmVuKCk7XHJcbiAgICAvLyBUYWJzIHBlciAqbmdGb3Iga29lbm5lbiBzcGFldGVyIGRhenVrb21tZW4gb2RlciB3ZWdmYWxsZW5cclxuICAgIHRoaXMud2F0Y2godGhpcy50YWJzLmNoYW5nZXMsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHRoaXMudGFic0dlYWVuZGVydCgpKSk7XHJcbiAgICB0aGlzLndhdGNoKHRoaXMudGFicy5jaGFuZ2VzLnBpcGUoXHJcbiAgICAgIHN0YXJ0V2l0aCh0aGlzLnRhYnMpLFxyXG4gICAgICBzd2l0Y2hNYXAoKHRhYnM6IFF1ZXJ5TGlzdDxNcmRUYWJDb21wb25lbnQ+KSA9PiBtZXJnZSguLi50YWJzLm1hcCgodGFiOiBNcmRUYWJDb21wb25lbnQpID0+IHRhYi56dXN0YW5kR2VhZW5kZXJ0KSkpXHJcbiAgICApLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoKSA9PiB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKSkpO1xyXG5cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmNoYW5nZVRhYikpIHtcclxuICAgICAgdGhpcy53YXRjaCh0aGlzLmNoYW5nZVRhYi5jaGFuZ2VkLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVUYWIoaW5kZXgpO1xyXG4gICAgICB9KSk7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmNoYW5nZVRhYi52YWx1ZSkpIHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlVGFiKHRoaXMuY2hhbmdlVGFiLnZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLnNlbGVjdGVkSW5kZXgpICYmIHRoaXMuc2VsZWN0ZWRJbmRleCAhPT0gdGhpcy5hY3RpdmVJbmRleCkge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlVGFiKHRoaXMuc2VsZWN0ZWRJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucXVlcnlQYXJhbWV0ZXJBY3RpdmUpIHtcclxuICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChwYXJhbXNbdGhpcy5xdWVyeVBhcmFtZXRlckFjdGl2ZV0pKSB7XHJcbiAgICAgICAgICBsZXQgaW5kZXggPSBwYXJzZUludChwYXJhbXNbdGhpcy5xdWVyeVBhcmFtZXRlckFjdGl2ZV0pO1xyXG4gICAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLnRhYnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVUYWIoaW5kZXgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2YXRlVGFiKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLmFjdGl2ZUluZGV4KSkge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlVGFiKDApO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLyoqIEtsaWNrIGF1ZiBlaW5lbiBUYWJrb3BmOiBnZXNwZXJydGUgVGFicyBpZ25vcmllcmVuLCBzb25zdCBgY2FuQ2hhbmdlVGFiYCBmcmFnZW4gKi9cclxuICBwdWJsaWMgdGFiR2VrbGlja3QodGFiOiBNcmRUYWJDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIGlmICh0YWIuZGlzYWJsZWQgfHwgdGFiLmluZGV4ID09PSB0aGlzLmFjdGl2ZUluZGV4KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5jYW5DaGFuZ2VUYWIpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZVRhYih0YWIuaW5kZXgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBlcmxhdWJ0OiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuY2FuQ2hhbmdlVGFiKHRhYi5pbmRleCwgdGhpcy5hY3RpdmVJbmRleCk7XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlKGVybGF1YnQpKSB7XHJcbiAgICAgIHRoaXMuc3Vic2NyaWJlKGVybGF1YnQsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKChvazogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIGlmIChvaykge1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZVRhYih0YWIuaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSkpO1xyXG4gICAgfSBlbHNlIGlmIChlcmxhdWJ0KSB7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGVUYWIodGFiLmluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdGFic0luZGl6aWVyZW4oKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiOiBNcmRUYWJDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgdGFiLmluZGV4ID0gaW5kZXg7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBEZXIgYWt0aXZlIFRhYiBibGVpYnQgYWt0aXYsIGF1Y2ggd2VubiBzaWNoIHNlaW4gSW5kZXggdmVyc2NoaWVidDsgZmFlbGx0IGVyIHdlZywgd2lyZCBkZXIgbmFlY2hzdGxpZWdlbmRlIGdld2FlaGx0ICovXHJcbiAgcHJpdmF0ZSB0YWJzR2VhZW5kZXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50YWJzSW5kaXppZXJlbigpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgaWYgKHRoaXMudGFicy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5hY3RpdmVUYWIgPSB1bmRlZmluZWQ7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGFrdGl2OiBudW1iZXIgPSBVdGlsLmlzRGVmaW5lZCh0aGlzLmFjdGl2ZVRhYikgPyB0aGlzLnRhYnMudG9BcnJheSgpLmluZGV4T2YodGhpcy5hY3RpdmVUYWIpIDogLTE7XHJcbiAgICBpZiAoYWt0aXYgPj0gMCkge1xyXG4gICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gYWt0aXY7XHJcbiAgICAgIHRoaXMuYWN0aXZlVGFiQm9keSA9IHRoaXMudGFiQm9keXMuZ2V0KGFrdGl2KTtcclxuICAgICAgdGhpcy51bnRlcnN0cmVpY2h1bmdTZXR6ZW4oYWt0aXYpO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIHRoaXMuaW5kZXhNZWxkZW4oYWt0aXYpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXU6IG51bWJlciA9IE1hdGgubWluKHRoaXMuYWN0aXZlSW5kZXggPz8gdGhpcy5fc2VsZWN0ZWRJbmRleCA/PyAwLCB0aGlzLnRhYnMubGVuZ3RoIC0gMSk7XHJcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5hY3RpdmVUYWIgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmFjdGl2YXRlVGFiKG5ldSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVudGVyc3RyZWljaHVuZ1NldHplbihpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBoZWFkZXI6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+ID0gdGhpcy5ub0hlYWRlciA/IHVuZGVmaW5lZCA6IHRoaXMudGFiSGVhZGVyPy5nZXQoaW5kZXgpO1xyXG4gICAgaWYgKGhlYWRlcikge1xyXG4gICAgICB0aGlzLnRhYlVuZGVybGluZUxlZnQgPSBoZWFkZXIubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0O1xyXG4gICAgICB0aGlzLnRhYlVuZGVybGluZVdpZHRoID0gaGVhZGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBOdXIgYmVpIGVjaHRlciBBZW5kZXJ1bmcgdW5kIGVyc3QgbmFjaCBkZW0gbGF1ZmVuZGVuIENoYW5nZS1EZXRlY3Rpb24tRHVyY2hsYXVmLFxyXG4gICAqIHNvbnN0IHdpcmZ0IGBbKHNlbGVjdGVkSW5kZXgpXWAgYmVpbSBlcnN0ZW4gUmVuZGVybiBFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaW5kZXhNZWxkZW4oaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKGluZGV4ID09PSB0aGlzLl9zZWxlY3RlZEluZGV4KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5zZWxlY3RlZEluZGV4Q2hhbmdlLmVtaXQoaW5kZXgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhY3RpdmF0ZVRhYihpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5hY3RpdmVJbmRleCkgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5hY3RpdmVUYWIpKSB7XHJcbiAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5hY3RpdmVJbmRleCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5kZXggPiB0aGlzLmFjdGl2ZUluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVUYWJCb2R5LnRyYW5zbGF0ZSA9IC0xMDA7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVUYWIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGluZGV4IDwgdGhpcy5hY3RpdmVJbmRleCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlVGFiQm9keS50cmFuc2xhdGUgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVUYWIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy50YWJCb2R5cykpIHtcclxuICAgICAgdGhpcy50YWJCb2R5cy5mb3JFYWNoKCh0YWI6IE1yZFRhYkJvZHlDb21wb25lbnQsIGk6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmIChpIDwgaW5kZXgpIHtcclxuICAgICAgICAgIHRhYi50cmFuc2xhdGUgPSAtMTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaSA+IGluZGV4KSB7XHJcbiAgICAgICAgICB0YWIudHJhbnNsYXRlID0gMTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgdGFiQm9keSA9IHRoaXMudGFiQm9keXMuZ2V0KGluZGV4KTtcclxuICAgICAgbGV0IHRhYiA9IHRoaXMudGFicy5nZXQoaW5kZXgpO1xyXG5cclxuICAgICAgLy8gRnJhZyBtaWNoIG5pY2h0IHdpZXNvLCBhYmVyIHdlbm4gZGllIFRhYnMgbmljaHQgw7xiZXIgZGllIFN0YW5kYXJkLUhlYWRlciwgc29uZGVybiDDvGJlclxyXG4gICAgICAvLyBzZWxlY3RlZEluZGV4IG9kZXIgY2hhbmdlVGFiIGdlc2V0enQgd2VyZGVuLCBkYW5uIGlzdCBkZXIgQ29udGVudCBkZXMgVGFiQm9keXMgbWFuY2htYWwgZGVzdHJveWVkLlxyXG4gICAgICAvLyBEZXNoYWxiIHNldHplbiB3aXIgaWhuIGhpZXIgd2llZGVyIGF1ZiBkZW4gQ29udGVudCBkZXMgVGFicywgZGVyIGltbWVyIGZ1bmt0aW9uaWVydC5cclxuICAgICAgaWYgKHRhYkJvZHkuY29udGVudC5kZXN0cm95ZWQpIHtcclxuICAgICAgICB0YWJCb2R5LmNvbnRlbnQgPSB0YWIuY29udGVudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGFiLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRhYkJvZHkudHJhbnNsYXRlID0gMDtcclxuICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IGluZGV4O1xyXG4gICAgICB0aGlzLmFjdGl2ZVRhYkJvZHkgPSB0YWJCb2R5O1xyXG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9IHRhYjtcclxuXHJcbiAgICAgIGlmICh0aGlzLnF1ZXJ5UGFyYW1ldGVyQWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW10sIHtcclxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICAgIFt0aGlzLnF1ZXJ5UGFyYW1ldGVyQWN0aXZlXTogaW5kZXhcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudW50ZXJzdHJlaWNodW5nU2V0emVuKGluZGV4KTtcclxuXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWJDaGFuZ2VkLmVtaXQodGFiKTtcclxuICAgICAgdGhpcy5zZWxlY3RlZFRhYkluZGV4Q2hhbmdlZC5lbWl0KGluZGV4KTtcclxuICAgICAgdGhpcy5pbmRleE1lbGRlbihpbmRleCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJtcmQtdGFiLWdyb3VwLXRhYnMtY29udGFpbmVyXCIgW25nU3R5bGVdPVwieydoZWlnaHQnOiBoZWFkZXJIZWlnaHQrJ3B4J31cIiAqbmdJZj1cIiFub0hlYWRlclwiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcbiAgPGRpdiBjbGFzcz1cIm1yZC10YWItZ3JvdXAtdGFiXCIgI21yZFRhYkhlYWRlciAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnNcIlxyXG4gICAgcm9sZT1cInRhYlwiIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwiISF0YWIuYWN0aXZlXCIgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIiBbYXR0ci5jb25maWduYW1lXT1cInRhYi5jb25maWduYW1lIHx8IG51bGxcIiBbbXJkVG9vbFRpcF09XCJ0YWIudG9vbHRpcFwiXHJcbiAgICBbbmdDbGFzc109XCJ7J3RhYi1hY3RpdmUnOiB0YWIuYWN0aXZlLCAndGFiLWRpc2FibGVkJzogdGFiLmRpc2FibGVkLCAndGFicy1yb3VuZGVkJzogcm91bmRlZCwgJ2ZpdC1sYWJlbHMnOiBsYWJlbHNGaXR9XCIgKGNsaWNrKT1cInRhYkdla2xpY2t0KHRhYilcIj5cclxuICAgIHt7dGFiLmxhYmVsfX1cclxuICAgIDxkaXYgY2xhc3M9XCJtcmQtdGFiLWdyb3VwLXRhYi1pbmRpY2F0b3JcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibXJkLXRhYi11bmRlcmxpbmVcIiAqbmdJZj1cImluZGljYXRvclwiIFtzdHlsZS5sZWZ0LnB4XT1cInRhYlVuZGVybGluZUxlZnRcIiBbc3R5bGUud2lkdGgucHhdPVwidGFiVW5kZXJsaW5lV2lkdGhcIj48L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJtcmQtdGFiLWdyb3VwLWNvbnRlbnQtY29udGFpbmVyXCI+XHJcbiAgPCEtLSA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IC0tPlxyXG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzXCI+XHJcbiAgICA8bXJkLXRhYi1ib2R5XHJcbiAgICAgIFtjb250ZW50XT1cInRhYi5jb250ZW50XCJcclxuICAgICAgW2FjdGl2ZV09XCJ0YWIuYWN0aXZlXCJcclxuICAgICAgW2luZGV4XT1cInRhYi5pbmRleFwiXHJcbiAgICAgIFtwcmVzZXJ2ZUNvbnRlbnRdPVwidGFiLnByZXNlcnZlQ29udGVudFwiXHJcbiAgICA+XHJcblxyXG4gICAgPC9tcmQtdGFiLWJvZHk+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG4iXX0=