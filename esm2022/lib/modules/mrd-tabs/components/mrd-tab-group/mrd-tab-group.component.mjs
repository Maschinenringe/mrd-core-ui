import { BaseObject, SubscriptionHandler, Util } from 'mrd-core';
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, Output, ViewChildren, booleanAttribute } from '@angular/core';
import { isObservable, merge, startWith, switchMap } from 'rxjs';
import { MrdTabComponent } from '../mrd-tab/mrd-tab.component';
import { MrdTabBodyComponent } from '../mrd-tab-body/mrd-tab-body.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "../mrd-tab-body/mrd-tab-body.component";
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
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(5, _c1, tab_r4.active, tab_r4.disabled, ctx_r2.rounded, ctx_r2.labelsFit));
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
    i0.ɵɵtemplate(1, MrdTabGroupComponent_div_0_div_1_Template, 4, 10, "div", 4);
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
        } }, inputs: { rounded: ["rounded", "rounded", booleanAttribute], labelsFit: ["labelsFit", "labelsFit", booleanAttribute], noHeader: ["noHeader", "noHeader", booleanAttribute], indicator: ["indicator", "indicator", booleanAttribute], queryParameterActive: "queryParameterActive", headerHeight: "headerHeight", selectedIndex: "selectedIndex", changeTab: "changeTab", canChangeTab: "canChangeTab" }, outputs: { selectedTabChanged: "selectedTabChanged", selectedTabIndexChanged: "selectedTabIndexChanged", selectedIndexChange: "selectedIndexChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 2, consts: [["class", "mrd-tab-group-tabs-container", "role", "tablist", 3, "ngStyle", 4, "ngIf"], [1, "mrd-tab-group-content-container"], [4, "ngFor", "ngForOf"], ["role", "tablist", 1, "mrd-tab-group-tabs-container", 3, "ngStyle"], ["class", "mrd-tab-group-tab", "role", "tab", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "mrd-tab-underline", 3, "left", "width", 4, "ngIf"], ["role", "tab", 1, "mrd-tab-group-tab", 3, "ngClass", "click"], ["mrdTabHeader", ""], [1, "mrd-tab-group-tab-indicator"], [1, "mrd-tab-underline"], [3, "content", "active", "index", "preserveContent"]], template: function MrdTabGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, MrdTabGroupComponent_div_0_Template, 3, 5, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtemplate(2, MrdTabGroupComponent_ng_container_2_Template, 2, 4, "ng-container", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.noHeader);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.tabs);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i2.NgStyle, i3.MrdTabBodyComponent], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;flex:1 1 100%;max-height:100%}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;border-bottom:1px solid lightgrey;background-color:#e5e5e5;position:relative;overflow-x:auto;scrollbar-width:none}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-underline[_ngcontent-%COMP%]{position:absolute;bottom:0;height:2px;background-color:var(--mrd-tab-indicator-farbe, blue);transition:left .3s,width .3s}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab[_ngcontent-%COMP%]{display:flex;flex:1 1 100%;flex-direction:column;align-items:center;justify-content:center;min-width:-moz-fit-content;min-width:fit-content;height:100%;padding:12px 32px;position:relative;color:gray;font-weight:700;background-color:#f0f0f0;border:1px solid #d2d2d2}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.fit-labels[_ngcontent-%COMP%]{max-width:-moz-fit-content;max-width:fit-content}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tabs-rounded[_ngcontent-%COMP%], .mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tabs-rounded[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]{border-top-right-radius:24px;border-top-left-radius:24px}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tab-disabled[_ngcontent-%COMP%]{opacity:.5;cursor:default}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tab-disabled[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]:hover{background-color:transparent}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tab-active[_ngcontent-%COMP%]{background-color:#68b022;color:#fff;border-color:#68b022}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tab-active[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]:hover{background-color:#000;opacity:.1}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]{position:absolute;inset:0}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]:active{pointer-events:none}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]:hover{background-color:#68b022;opacity:.2}.mrd-tab-group-content-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:1 1 100%;overflow:hidden;position:relative}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdTabGroupComponent, [{
        type: Component,
        args: [{ selector: 'mrd-tab-group', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-tab-group-tabs-container\" [ngStyle]=\"{'height': headerHeight+'px'}\" *ngIf=\"!noHeader\" role=\"tablist\">\r\n  <div class=\"mrd-tab-group-tab\" #mrdTabHeader *ngFor=\"let tab of tabs\"\r\n    role=\"tab\" [attr.aria-selected]=\"!!tab.active\" [attr.aria-disabled]=\"tab.disabled\" [attr.configname]=\"tab.configname || null\"\r\n    [ngClass]=\"{'tab-active': tab.active, 'tab-disabled': tab.disabled, 'tabs-rounded': rounded, 'fit-labels': labelsFit}\" (click)=\"tabGeklickt(tab)\">\r\n    {{tab.label}}\r\n    <div class=\"mrd-tab-group-tab-indicator\"></div>\r\n  </div>\r\n  <div class=\"mrd-tab-underline\" *ngIf=\"indicator\" [style.left.px]=\"tabUnderlineLeft\" [style.width.px]=\"tabUnderlineWidth\"></div>\r\n</div>\r\n<div class=\"mrd-tab-group-content-container\">\r\n  <!-- <ng-content></ng-content> -->\r\n  <ng-container *ngFor=\"let tab of tabs\">\r\n    <mrd-tab-body\r\n      [content]=\"tab.content\"\r\n      [active]=\"tab.active\"\r\n      [index]=\"tab.index\"\r\n      [preserveContent]=\"tab.preserveContent\"\r\n    >\r\n\r\n    </mrd-tab-body>\r\n  </ng-container>\r\n</div>\r\n", styles: [":host{display:flex;flex-direction:column;width:100%;flex:1 1 100%;max-height:100%}.mrd-tab-group-tabs-container{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;border-bottom:1px solid lightgrey;background-color:#e5e5e5;position:relative;overflow-x:auto;scrollbar-width:none}.mrd-tab-group-tabs-container .mrd-tab-underline{position:absolute;bottom:0;height:2px;background-color:var(--mrd-tab-indicator-farbe, blue);transition:left .3s,width .3s}.mrd-tab-group-tabs-container .mrd-tab-group-tab{display:flex;flex:1 1 100%;flex-direction:column;align-items:center;justify-content:center;min-width:-moz-fit-content;min-width:fit-content;height:100%;padding:12px 32px;position:relative;color:gray;font-weight:700;background-color:#f0f0f0;border:1px solid #d2d2d2}.mrd-tab-group-tabs-container .mrd-tab-group-tab.fit-labels{max-width:-moz-fit-content;max-width:fit-content}.mrd-tab-group-tabs-container .mrd-tab-group-tab.tabs-rounded,.mrd-tab-group-tabs-container .mrd-tab-group-tab.tabs-rounded .mrd-tab-group-tab-indicator{border-top-right-radius:24px;border-top-left-radius:24px}.mrd-tab-group-tabs-container .mrd-tab-group-tab.tab-disabled{opacity:.5;cursor:default}.mrd-tab-group-tabs-container .mrd-tab-group-tab.tab-disabled .mrd-tab-group-tab-indicator:hover{background-color:transparent}.mrd-tab-group-tabs-container .mrd-tab-group-tab.tab-active{background-color:#68b022;color:#fff;border-color:#68b022}.mrd-tab-group-tabs-container .mrd-tab-group-tab.tab-active .mrd-tab-group-tab-indicator:hover{background-color:#000;opacity:.1}.mrd-tab-group-tabs-container .mrd-tab-group-tab .mrd-tab-group-tab-indicator{position:absolute;inset:0}.mrd-tab-group-tabs-container .mrd-tab-group-tab .mrd-tab-group-tab-indicator:active{pointer-events:none}.mrd-tab-group-tabs-container .mrd-tab-group-tab .mrd-tab-group-tab-indicator:hover{background-color:#68b022;opacity:.2}.mrd-tab-group-content-container{display:flex;flex-direction:row;flex:1 1 100%;overflow:hidden;position:relative}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXRhYi1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLXRhYnMvY29tcG9uZW50cy9tcmQtdGFiLWdyb3VwL21yZC10YWItZ3JvdXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10YWJzL2NvbXBvbmVudHMvbXJkLXRhYi1ncm91cC9tcmQtdGFiLWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQW1CLG1CQUFtQixFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNsRixPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsZUFBZSxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFhLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxTSxPQUFPLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7Ozs7Ozs7O0lDSjNFLGlDQUVvSjtJQUEzQiwrTkFBUyxlQUFBLDBCQUFnQixDQUFBLElBQUM7SUFDakosWUFDQTtJQUFBLHlCQUErQztJQUNqRCxpQkFBTTs7OztJQUhKLHNIQUFzSDtJQUQzRyxnREFBbUMsa0NBQUEseUNBQUE7SUFFOUMsZUFDQTtJQURBLDZDQUNBOzs7SUFFRix5QkFBK0g7OztJQUE5RSxxREFBa0MseUNBQUE7Ozs7SUFQckYsOEJBQXFIO0lBQ25ILDRF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U0FBUztrQkFBckQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUVwQixvQkFBb0I7a0JBQW5DLEtBQUs7WUFFYyxZQUFZO2tCQUEvQixLQUFLO1lBU2MsYUFBYTtrQkFBaEMsS0FBSztZQVdVLFNBQVM7a0JBQXhCLEtBQUs7WUFNVSxZQUFZO2tCQUEzQixLQUFLO1lBRVcsa0JBQWtCO2tCQUFsQyxNQUFNO1lBQ1UsdUJBQXVCO2tCQUF2QyxNQUFNO1lBRVUsbUJBQW1CO2tCQUFuQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZU9iamVjdCwgT2JzZXJ2YWJsZVZhbHVlLCBTdWJzY3JpcHRpb25IYW5kbGVyLCBVdGlsIH0gZnJvbSAnbXJkLWNvcmUnO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuLCBib29sZWFuQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIGlzT2JzZXJ2YWJsZSwgbWVyZ2UsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1yZFRhYkNvbXBvbmVudCB9IGZyb20gJy4uL21yZC10YWIvbXJkLXRhYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTXJkVGFiQm9keUNvbXBvbmVudCB9IGZyb20gJy4uL21yZC10YWItYm9keS9tcmQtdGFiLWJvZHkuY29tcG9uZW50JztcclxuXHJcbi8qKiBSdWVja2ZyYWdlIHZvciBlaW5lbSBUYWJ3ZWNoc2VsIHBlciBLbGljaywgei4gQi4gXCJBZW5kZXJ1bmdlbiB2ZXJ3ZXJmZW4/XCI7IGBmYWxzZWAgYmVoYWVsdCBkZW4gYWt0dWVsbGVuIFRhYiAqL1xyXG5leHBvcnQgdHlwZSBNcmRUYWJXZWNoc2VsUHJ1ZWZ1bmcgPSAobmV1ZXJJbmRleDogbnVtYmVyLCBha3R1ZWxsZXJJbmRleDogbnVtYmVyKSA9PiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLXRhYi1ncm91cCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC10YWItZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC10YWItZ3JvdXAuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkVGFiR3JvdXBDb21wb25lbnQgZXh0ZW5kcyBCYXNlT2JqZWN0IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oTXJkVGFiQ29tcG9uZW50KSB0YWJzOiBRdWVyeUxpc3Q8TXJkVGFiQ29tcG9uZW50PjtcclxuICBAVmlld0NoaWxkcmVuKE1yZFRhYkJvZHlDb21wb25lbnQpIHRhYkJvZHlzOiBRdWVyeUxpc3Q8TXJkVGFiQm9keUNvbXBvbmVudD47XHJcbiAgQFZpZXdDaGlsZHJlbignbXJkVGFiSGVhZGVyJykgdGFiSGVhZGVyOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHJvdW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBsYWJlbHNGaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBub0hlYWRlcjogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gIC8qKiBMaW5pZSB1bnRlciBkZW0gYWt0aXZlbiBUYWIsIGRpZSBiZWltIFdlY2hzZWwgbWl0d2FuZGVydDsgc3RhbmRhcmRtYWVzc2lnIGF1cyAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGluZGljYXRvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgcXVlcnlQYXJhbWV0ZXJBY3RpdmU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHNldCBoZWFkZXJIZWlnaHQodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5faGVhZGVySGVpZ2h0ID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgaGVhZGVySGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVhZGVySGVpZ2h0O1xyXG4gIH1cclxuICBwcml2YXRlIF9oZWFkZXJIZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHNldCBzZWxlY3RlZEluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSB2YWx1ZTtcclxuICAgIHRoaXMuYWN0aXZhdGVUYWIodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzZWxlY3RlZEluZGV4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xyXG5cclxuXHJcbiAgQElucHV0KCkgcHVibGljIGNoYW5nZVRhYjogT2JzZXJ2YWJsZVZhbHVlPG51bWJlcj47XHJcblxyXG4gIC8qKlxyXG4gICAqIFdpcmQgdm9yIGplZGVtIFRhYndlY2hzZWwgcGVyIEtsaWNrIGF1ZiBkZW4gS29wZiBnZWZyYWd0OyBXZWNoc2VsIHBlciBgc2VsZWN0ZWRJbmRleGAvYGNoYW5nZVRhYmAgbGF1ZmVuIG9obmUgUnVlY2tmcmFnZS5cclxuICAgKiBFaW4gT2JzZXJ2YWJsZSB6YWVobHQgbWl0IHNlaW5lbSBlcnN0ZW4gV2VydC5cclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgY2FuQ2hhbmdlVGFiOiBNcmRUYWJXZWNoc2VsUHJ1ZWZ1bmc7XHJcblxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0ZWRUYWJDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8TXJkVGFiQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIHNlbGVjdGVkVGFiSW5kZXhDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvKiogRnVlciBgWyhzZWxlY3RlZEluZGV4KV1gLCBnbGVpY2hlciBXZXJ0IHdpZSBgc2VsZWN0ZWRUYWJJbmRleENoYW5nZWRgICovXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBzZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHVibGljIHRhYlVuZGVybGluZUxlZnQ6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIHRhYlVuZGVybGluZVdpZHRoOiBudW1iZXIgPSAwO1xyXG5cclxuICBwcml2YXRlIGFjdGl2ZUluZGV4OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBhY3RpdmVUYWI6IE1yZFRhYkNvbXBvbmVudDtcclxuICBwcml2YXRlIGFjdGl2ZVRhYkJvZHk6IE1yZFRhYkJvZHlDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50YWJzSW5kaXppZXJlbigpO1xyXG4gICAgLy8gVGFicyBwZXIgKm5nRm9yIGtvZW5uZW4gc3BhZXRlciBkYXp1a29tbWVuIG9kZXIgd2VnZmFsbGVuXHJcbiAgICB0aGlzLndhdGNoKHRoaXMudGFicy5jaGFuZ2VzLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoKSA9PiB0aGlzLnRhYnNHZWFlbmRlcnQoKSkpO1xyXG4gICAgdGhpcy53YXRjaCh0aGlzLnRhYnMuY2hhbmdlcy5waXBlKFxyXG4gICAgICBzdGFydFdpdGgodGhpcy50YWJzKSxcclxuICAgICAgc3dpdGNoTWFwKCh0YWJzOiBRdWVyeUxpc3Q8TXJkVGFiQ29tcG9uZW50PikgPT4gbWVyZ2UoLi4udGFicy5tYXAoKHRhYjogTXJkVGFiQ29tcG9uZW50KSA9PiB0YWIuenVzdGFuZEdlYWVuZGVydCkpKVxyXG4gICAgKSwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKCkgPT4gdGhpcy5jZHIubWFya0ZvckNoZWNrKCkpKTtcclxuXHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5jaGFuZ2VUYWIpKSB7XHJcbiAgICAgIHRoaXMud2F0Y2godGhpcy5jaGFuZ2VUYWIuY2hhbmdlZCwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlVGFiKGluZGV4KTtcclxuICAgICAgfSkpO1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5jaGFuZ2VUYWIudmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZVRhYih0aGlzLmNoYW5nZVRhYi52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5zZWxlY3RlZEluZGV4KSAmJiB0aGlzLnNlbGVjdGVkSW5kZXggIT09IHRoaXMuYWN0aXZlSW5kZXgpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZVRhYih0aGlzLnNlbGVjdGVkSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnF1ZXJ5UGFyYW1ldGVyQWN0aXZlKSB7XHJcbiAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQocGFyYW1zW3RoaXMucXVlcnlQYXJhbWV0ZXJBY3RpdmVdKSkge1xyXG4gICAgICAgICAgbGV0IGluZGV4ID0gcGFyc2VJbnQocGFyYW1zW3RoaXMucXVlcnlQYXJhbWV0ZXJBY3RpdmVdKTtcclxuICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy50YWJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlVGFiKGluZGV4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZVRhYigwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICghVXRpbC5pc0RlZmluZWQodGhpcy5hY3RpdmVJbmRleCkpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZVRhYigwKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8qKiBLbGljayBhdWYgZWluZW4gVGFia29wZjogZ2VzcGVycnRlIFRhYnMgaWdub3JpZXJlbiwgc29uc3QgYGNhbkNoYW5nZVRhYmAgZnJhZ2VuICovXHJcbiAgcHVibGljIHRhYkdla2xpY2t0KHRhYjogTXJkVGFiQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGFiLmRpc2FibGVkIHx8IHRhYi5pbmRleCA9PT0gdGhpcy5hY3RpdmVJbmRleCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuY2FuQ2hhbmdlVGFiKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGVUYWIodGFiLmluZGV4KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZXJsYXVidDogYm9vbGVhbiB8IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmNhbkNoYW5nZVRhYih0YWIuaW5kZXgsIHRoaXMuYWN0aXZlSW5kZXgpO1xyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZShlcmxhdWJ0KSkge1xyXG4gICAgICB0aGlzLnN1YnNjcmliZShlcmxhdWJ0LCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigob2s6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICBpZiAob2spIHtcclxuICAgICAgICAgIHRoaXMuYWN0aXZhdGVUYWIodGFiLmluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pKTtcclxuICAgIH0gZWxzZSBpZiAoZXJsYXVidCkge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlVGFiKHRhYi5pbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRhYnNJbmRpemllcmVuKCk6IHZvaWQge1xyXG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYjogTXJkVGFiQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHRhYi5pbmRleCA9IGluZGV4O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogRGVyIGFrdGl2ZSBUYWIgYmxlaWJ0IGFrdGl2LCBhdWNoIHdlbm4gc2ljaCBzZWluIEluZGV4IHZlcnNjaGllYnQ7IGZhZWxsdCBlciB3ZWcsIHdpcmQgZGVyIG5hZWNoc3RsaWVnZW5kZSBnZXdhZWhsdCAqL1xyXG4gIHByaXZhdGUgdGFic0dlYWVuZGVydCgpOiB2b2lkIHtcclxuICAgIHRoaXMudGFic0luZGl6aWVyZW4oKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIGlmICh0aGlzLnRhYnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSB1bmRlZmluZWQ7XHJcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gdW5kZWZpbmVkO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBha3RpdjogbnVtYmVyID0gVXRpbC5pc0RlZmluZWQodGhpcy5hY3RpdmVUYWIpID8gdGhpcy50YWJzLnRvQXJyYXkoKS5pbmRleE9mKHRoaXMuYWN0aXZlVGFiKSA6IC0xO1xyXG4gICAgaWYgKGFrdGl2ID49IDApIHtcclxuICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IGFrdGl2O1xyXG4gICAgICB0aGlzLmFjdGl2ZVRhYkJvZHkgPSB0aGlzLnRhYkJvZHlzLmdldChha3Rpdik7XHJcbiAgICAgIHRoaXMudW50ZXJzdHJlaWNodW5nU2V0emVuKGFrdGl2KTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB0aGlzLmluZGV4TWVsZGVuKGFrdGl2KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV1OiBudW1iZXIgPSBNYXRoLm1pbih0aGlzLmFjdGl2ZUluZGV4ID8/IHRoaXMuX3NlbGVjdGVkSW5kZXggPz8gMCwgdGhpcy50YWJzLmxlbmd0aCAtIDEpO1xyXG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuYWN0aXZlVGFiID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5hY3RpdmF0ZVRhYihuZXUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1bnRlcnN0cmVpY2h1bmdTZXR6ZW4oaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgaGVhZGVyOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiA9IHRoaXMubm9IZWFkZXIgPyB1bmRlZmluZWQgOiB0aGlzLnRhYkhlYWRlcj8uZ2V0KGluZGV4KTtcclxuICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgdGhpcy50YWJVbmRlcmxpbmVMZWZ0ID0gaGVhZGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0TGVmdDtcclxuICAgICAgdGhpcy50YWJVbmRlcmxpbmVXaWR0aCA9IGhlYWRlci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTnVyIGJlaSBlY2h0ZXIgQWVuZGVydW5nIHVuZCBlcnN0IG5hY2ggZGVtIGxhdWZlbmRlbiBDaGFuZ2UtRGV0ZWN0aW9uLUR1cmNobGF1ZixcclxuICAgKiBzb25zdCB3aXJmdCBgWyhzZWxlY3RlZEluZGV4KV1gIGJlaW0gZXJzdGVuIFJlbmRlcm4gRXhwcmVzc2lvbkNoYW5nZWRBZnRlckl0SGFzQmVlbkNoZWNrZWRcclxuICAgKi9cclxuICBwcml2YXRlIGluZGV4TWVsZGVuKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChpbmRleCA9PT0gdGhpcy5fc2VsZWN0ZWRJbmRleCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gaW5kZXg7XHJcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KGluZGV4KSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWN0aXZhdGVUYWIoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuYWN0aXZlSW5kZXgpICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuYWN0aXZlVGFiKSkge1xyXG4gICAgICBpZiAoaW5kZXggPT09IHRoaXMuYWN0aXZlSW5kZXgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGluZGV4ID4gdGhpcy5hY3RpdmVJbmRleCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlVGFiQm9keS50cmFuc2xhdGUgPSAtMTAwO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlVGFiLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmRleCA8IHRoaXMuYWN0aXZlSW5kZXgpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZVRhYkJvZHkudHJhbnNsYXRlID0gMTAwO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlVGFiLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMudGFiQm9keXMpKSB7XHJcbiAgICAgIHRoaXMudGFiQm9keXMuZm9yRWFjaCgodGFiOiBNcmRUYWJCb2R5Q29tcG9uZW50LCBpOiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZiAoaSA8IGluZGV4KSB7XHJcbiAgICAgICAgICB0YWIudHJhbnNsYXRlID0gLTEwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGkgPiBpbmRleCkge1xyXG4gICAgICAgICAgdGFiLnRyYW5zbGF0ZSA9IDEwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IHRhYkJvZHkgPSB0aGlzLnRhYkJvZHlzLmdldChpbmRleCk7XHJcbiAgICAgIGxldCB0YWIgPSB0aGlzLnRhYnMuZ2V0KGluZGV4KTtcclxuXHJcbiAgICAgIC8vIEZyYWcgbWljaCBuaWNodCB3aWVzbywgYWJlciB3ZW5uIGRpZSBUYWJzIG5pY2h0IMO8YmVyIGRpZSBTdGFuZGFyZC1IZWFkZXIsIHNvbmRlcm4gw7xiZXJcclxuICAgICAgLy8gc2VsZWN0ZWRJbmRleCBvZGVyIGNoYW5nZVRhYiBnZXNldHp0IHdlcmRlbiwgZGFubiBpc3QgZGVyIENvbnRlbnQgZGVzIFRhYkJvZHlzIG1hbmNobWFsIGRlc3Ryb3llZC5cclxuICAgICAgLy8gRGVzaGFsYiBzZXR6ZW4gd2lyIGlobiBoaWVyIHdpZWRlciBhdWYgZGVuIENvbnRlbnQgZGVzIFRhYnMsIGRlciBpbW1lciBmdW5rdGlvbmllcnQuXHJcbiAgICAgIGlmICh0YWJCb2R5LmNvbnRlbnQuZGVzdHJveWVkKSB7XHJcbiAgICAgICAgdGFiQm9keS5jb250ZW50ID0gdGFiLmNvbnRlbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRhYi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0YWJCb2R5LnRyYW5zbGF0ZSA9IDA7XHJcbiAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBpbmRleDtcclxuICAgICAgdGhpcy5hY3RpdmVUYWJCb2R5ID0gdGFiQm9keTtcclxuICAgICAgdGhpcy5hY3RpdmVUYWIgPSB0YWI7XHJcblxyXG4gICAgICBpZiAodGhpcy5xdWVyeVBhcmFtZXRlckFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7XHJcbiAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICBbdGhpcy5xdWVyeVBhcmFtZXRlckFjdGl2ZV06IGluZGV4XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnVudGVyc3RyZWljaHVuZ1NldHplbihpbmRleCk7XHJcblxyXG4gICAgICB0aGlzLnNlbGVjdGVkVGFiQ2hhbmdlZC5lbWl0KHRhYik7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWJJbmRleENoYW5nZWQuZW1pdChpbmRleCk7XHJcbiAgICAgIHRoaXMuaW5kZXhNZWxkZW4oaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibXJkLXRhYi1ncm91cC10YWJzLWNvbnRhaW5lclwiIFtuZ1N0eWxlXT1cInsnaGVpZ2h0JzogaGVhZGVySGVpZ2h0KydweCd9XCIgKm5nSWY9XCIhbm9IZWFkZXJcIiByb2xlPVwidGFibGlzdFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJtcmQtdGFiLWdyb3VwLXRhYlwiICNtcmRUYWJIZWFkZXIgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzXCJcclxuICAgIHJvbGU9XCJ0YWJcIiBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cIiEhdGFiLmFjdGl2ZVwiIFthdHRyLmFyaWEtZGlzYWJsZWRdPVwidGFiLmRpc2FibGVkXCIgW2F0dHIuY29uZmlnbmFtZV09XCJ0YWIuY29uZmlnbmFtZSB8fCBudWxsXCJcclxuICAgIFtuZ0NsYXNzXT1cInsndGFiLWFjdGl2ZSc6IHRhYi5hY3RpdmUsICd0YWItZGlzYWJsZWQnOiB0YWIuZGlzYWJsZWQsICd0YWJzLXJvdW5kZWQnOiByb3VuZGVkLCAnZml0LWxhYmVscyc6IGxhYmVsc0ZpdH1cIiAoY2xpY2spPVwidGFiR2VrbGlja3QodGFiKVwiPlxyXG4gICAge3t0YWIubGFiZWx9fVxyXG4gICAgPGRpdiBjbGFzcz1cIm1yZC10YWItZ3JvdXAtdGFiLWluZGljYXRvclwiPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJtcmQtdGFiLXVuZGVybGluZVwiICpuZ0lmPVwiaW5kaWNhdG9yXCIgW3N0eWxlLmxlZnQucHhdPVwidGFiVW5kZXJsaW5lTGVmdFwiIFtzdHlsZS53aWR0aC5weF09XCJ0YWJVbmRlcmxpbmVXaWR0aFwiPjwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cIm1yZC10YWItZ3JvdXAtY29udGVudC1jb250YWluZXJcIj5cclxuICA8IS0tIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gLS0+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnNcIj5cclxuICAgIDxtcmQtdGFiLWJvZHlcclxuICAgICAgW2NvbnRlbnRdPVwidGFiLmNvbnRlbnRcIlxyXG4gICAgICBbYWN0aXZlXT1cInRhYi5hY3RpdmVcIlxyXG4gICAgICBbaW5kZXhdPVwidGFiLmluZGV4XCJcclxuICAgICAgW3ByZXNlcnZlQ29udGVudF09XCJ0YWIucHJlc2VydmVDb250ZW50XCJcclxuICAgID5cclxuXHJcbiAgICA8L21yZC10YWItYm9keT5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9kaXY+XHJcbiJdfQ==