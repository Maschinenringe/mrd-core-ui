import { BaseObject, SubscriptionHandler, Util } from 'mrd-core';
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, HostBinding, Input, Output, ViewChildren, booleanAttribute } from '@angular/core';
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
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("content", tab_r8.content)("active", tab_r8.active)("index", tab_r8.index)("preserveContent", tab_r8.preserveContent)("hoeheNachInhalt", ctx_r1.hoeheNachInhalt);
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
    /**
     * Die Gruppe wächst mit dem Inhalt des aktiven Tabs, statt eine vorgegebene Höhe zu füllen;
     * gescrollt wird dann im umgebenden Container (z. B. die ganze Seite)
     */
    hoeheNachInhalt = false;
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
        } }, hostVars: 2, hostBindings: function MrdTabGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("hoehe-nach-inhalt", ctx.hoeheNachInhalt);
        } }, inputs: { rounded: ["rounded", "rounded", booleanAttribute], labelsFit: ["labelsFit", "labelsFit", booleanAttribute], noHeader: ["noHeader", "noHeader", booleanAttribute], indicator: ["indicator", "indicator", booleanAttribute], hoeheNachInhalt: ["hoeheNachInhalt", "hoeheNachInhalt", booleanAttribute], queryParameterActive: "queryParameterActive", headerHeight: "headerHeight", selectedIndex: "selectedIndex", changeTab: "changeTab", canChangeTab: "canChangeTab" }, outputs: { selectedTabChanged: "selectedTabChanged", selectedTabIndexChanged: "selectedTabIndexChanged", selectedIndexChange: "selectedIndexChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 2, consts: [["class", "mrd-tab-group-tabs-container", "role", "tablist", 3, "ngStyle", 4, "ngIf"], [1, "mrd-tab-group-content-container"], [4, "ngFor", "ngForOf"], ["role", "tablist", 1, "mrd-tab-group-tabs-container", 3, "ngStyle"], ["class", "mrd-tab-group-tab", "role", "tab", 3, "mrdToolTip", "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "mrd-tab-underline", 3, "left", "width", 4, "ngIf"], ["role", "tab", 1, "mrd-tab-group-tab", 3, "mrdToolTip", "ngClass", "click"], ["mrdTabHeader", ""], [1, "mrd-tab-group-tab-indicator"], [1, "mrd-tab-underline"], [3, "content", "active", "index", "preserveContent", "hoeheNachInhalt"]], template: function MrdTabGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, MrdTabGroupComponent_div_0_Template, 3, 5, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtemplate(2, MrdTabGroupComponent_ng_container_2_Template, 2, 5, "ng-container", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.noHeader);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.tabs);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i2.NgStyle, i3.ToolTipRendererDirective, i4.MrdTabBodyComponent], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;flex:1 1 100%;max-height:100%}.hoehe-nach-inhalt[_nghost-%COMP%]{flex:0 0 auto;max-height:none}.hoehe-nach-inhalt[_nghost-%COMP%]   .mrd-tab-group-content-container[_ngcontent-%COMP%]{flex:0 0 auto;overflow:clip}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]{flex-shrink:0;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;border-bottom:1px solid lightgrey;background-color:#e5e5e5;position:relative;overflow-x:auto;scrollbar-width:none}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-underline[_ngcontent-%COMP%]{position:absolute;bottom:0;height:2px;background-color:var(--mrd-tab-indicator-farbe, blue);transition:left .3s,width .3s}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab[_ngcontent-%COMP%]{display:flex;flex:1 1 100%;flex-direction:column;align-items:center;justify-content:center;min-width:-moz-fit-content;min-width:fit-content;height:100%;padding:12px 32px;position:relative;color:gray;font-weight:700;background-color:#f0f0f0;border:1px solid #d2d2d2}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.fit-labels[_ngcontent-%COMP%]{max-width:-moz-fit-content;max-width:fit-content}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tabs-rounded[_ngcontent-%COMP%], .mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tabs-rounded[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]{border-top-right-radius:24px;border-top-left-radius:24px}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tab-disabled[_ngcontent-%COMP%]{opacity:.5;cursor:default}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tab-disabled[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]:hover{background-color:transparent}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tab-active[_ngcontent-%COMP%]{background-color:#68b022;color:#fff;border-color:#68b022}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tab-active[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]:hover{background-color:#000;opacity:.1}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]{position:absolute;inset:0}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]:active{pointer-events:none}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]:hover{background-color:#68b022;opacity:.2}.mrd-tab-group-content-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:1 1 100%;overflow:hidden;position:relative}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdTabGroupComponent, [{
        type: Component,
        args: [{ selector: 'mrd-tab-group', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-tab-group-tabs-container\" [ngStyle]=\"{'height': headerHeight+'px'}\" *ngIf=\"!noHeader\" role=\"tablist\">\r\n  <div class=\"mrd-tab-group-tab\" #mrdTabHeader *ngFor=\"let tab of tabs\"\r\n    role=\"tab\" [attr.aria-selected]=\"!!tab.active\" [attr.aria-disabled]=\"tab.disabled\" [attr.configname]=\"tab.configname || null\" [mrdToolTip]=\"tab.tooltip\"\r\n    [ngClass]=\"{'tab-active': tab.active, 'tab-disabled': tab.disabled, 'tabs-rounded': rounded, 'fit-labels': labelsFit}\" (click)=\"tabGeklickt(tab)\">\r\n    {{tab.label}}\r\n    <div class=\"mrd-tab-group-tab-indicator\"></div>\r\n  </div>\r\n  <div class=\"mrd-tab-underline\" *ngIf=\"indicator\" [style.left.px]=\"tabUnderlineLeft\" [style.width.px]=\"tabUnderlineWidth\"></div>\r\n</div>\r\n<div class=\"mrd-tab-group-content-container\">\r\n  <!-- <ng-content></ng-content> -->\r\n  <ng-container *ngFor=\"let tab of tabs\">\r\n    <mrd-tab-body\r\n      [content]=\"tab.content\"\r\n      [active]=\"tab.active\"\r\n      [index]=\"tab.index\"\r\n      [preserveContent]=\"tab.preserveContent\"\r\n      [hoeheNachInhalt]=\"hoeheNachInhalt\"\r\n    >\r\n\r\n    </mrd-tab-body>\r\n  </ng-container>\r\n</div>\r\n", styles: [":host{display:flex;flex-direction:column;width:100%;flex:1 1 100%;max-height:100%}:host(.hoehe-nach-inhalt){flex:0 0 auto;max-height:none}:host(.hoehe-nach-inhalt) .mrd-tab-group-content-container{flex:0 0 auto;overflow:clip}.mrd-tab-group-tabs-container{flex-shrink:0;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;border-bottom:1px solid lightgrey;background-color:#e5e5e5;position:relative;overflow-x:auto;scrollbar-width:none}.mrd-tab-group-tabs-container .mrd-tab-underline{position:absolute;bottom:0;height:2px;background-color:var(--mrd-tab-indicator-farbe, blue);transition:left .3s,width .3s}.mrd-tab-group-tabs-container .mrd-tab-group-tab{display:flex;flex:1 1 100%;flex-direction:column;align-items:center;justify-content:center;min-width:-moz-fit-content;min-width:fit-content;height:100%;padding:12px 32px;position:relative;color:gray;font-weight:700;background-color:#f0f0f0;border:1px solid #d2d2d2}.mrd-tab-group-tabs-container .mrd-tab-group-tab.fit-labels{max-width:-moz-fit-content;max-width:fit-content}.mrd-tab-group-tabs-container .mrd-tab-group-tab.tabs-rounded,.mrd-tab-group-tabs-container .mrd-tab-group-tab.tabs-rounded .mrd-tab-group-tab-indicator{border-top-right-radius:24px;border-top-left-radius:24px}.mrd-tab-group-tabs-container .mrd-tab-group-tab.tab-disabled{opacity:.5;cursor:default}.mrd-tab-group-tabs-container .mrd-tab-group-tab.tab-disabled .mrd-tab-group-tab-indicator:hover{background-color:transparent}.mrd-tab-group-tabs-container .mrd-tab-group-tab.tab-active{background-color:#68b022;color:#fff;border-color:#68b022}.mrd-tab-group-tabs-container .mrd-tab-group-tab.tab-active .mrd-tab-group-tab-indicator:hover{background-color:#000;opacity:.1}.mrd-tab-group-tabs-container .mrd-tab-group-tab .mrd-tab-group-tab-indicator{position:absolute;inset:0}.mrd-tab-group-tabs-container .mrd-tab-group-tab .mrd-tab-group-tab-indicator:active{pointer-events:none}.mrd-tab-group-tabs-container .mrd-tab-group-tab .mrd-tab-group-tab-indicator:hover{background-color:#68b022;opacity:.2}.mrd-tab-group-content-container{display:flex;flex-direction:row;flex:1 1 100%;overflow:hidden;position:relative}\n"] }]
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
        }], hoeheNachInhalt: [{
            type: HostBinding,
            args: ['class.hoehe-nach-inhalt']
        }, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXRhYi1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLXRhYnMvY29tcG9uZW50cy9tcmQtdGFiLWdyb3VwL21yZC10YWItZ3JvdXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10YWJzL2NvbXBvbmVudHMvbXJkLXRhYi1ncm91cC9tcmQtdGFiLWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQW1CLG1CQUFtQixFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNsRixPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsZUFBZSxFQUFjLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdk4sT0FBTyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7Ozs7Ozs7Ozs7SUNKM0UsaUNBRW9KO0lBQTNCLCtOQUFTLGVBQUEsMEJBQWdCLENBQUEsSUFBQztJQUNqSixZQUNBO0lBQUEseUJBQStDO0lBQ2pELGlCQUFNOzs7O0lBSjBILDJDQUEwQix5R0FBQTtJQUE3SSxnREFBbUMsa0NBQUEseUNBQUE7SUFFOUMsZUFDQTtJQURBLDZDQUNBOzs7SUFFRix5QkFBK0g7OztJQUE5RSxxREFBa0MseUNBQUE7Ozs7SUFQ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QVMsRUFBRSxnQkFBZ0IsRUFBQztZQUNTLFFBQVE7a0JBQXBELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFHUyxTQUFTO2tCQUFyRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBT1MsZUFBZTtrQkFEM0QsV0FBVzttQkFBQyx5QkFBeUI7O2tCQUNyQyxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBRXBCLG9CQUFvQjtrQkFBbkMsS0FBSztZQUVjLFlBQVk7a0JBQS9CLEtBQUs7WUFTYyxhQUFhO2tCQUFoQyxLQUFLO1lBV1UsU0FBUztrQkFBeEIsS0FBSztZQU1VLFlBQVk7a0JBQTNCLEtBQUs7WUFFVyxrQkFBa0I7a0JBQWxDLE1BQU07WUFDVSx1QkFBdUI7a0JBQXZDLE1BQU07WUFFVSxtQkFBbUI7a0JBQW5DLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlT2JqZWN0LCBPYnNlcnZhYmxlVmFsdWUsIFN1YnNjcmlwdGlvbkhhbmRsZXIsIFV0aWwgfSBmcm9tICdtcmQtY29yZSc7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT3V0cHV0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgYm9vbGVhbkF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgaXNPYnNlcnZhYmxlLCBtZXJnZSwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1yZFRhYkNvbXBvbmVudCB9IGZyb20gJy4uL21yZC10YWIvbXJkLXRhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNcmRUYWJCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi4vbXJkLXRhYi1ib2R5L21yZC10YWItYm9keS5jb21wb25lbnQnO1xuXG4vKiogUnVlY2tmcmFnZSB2b3IgZWluZW0gVGFid2VjaHNlbCBwZXIgS2xpY2ssIHouIEIuIFwiQWVuZGVydW5nZW4gdmVyd2VyZmVuP1wiOyBgZmFsc2VgIGJlaGFlbHQgZGVuIGFrdHVlbGxlbiBUYWIgKi9cbmV4cG9ydCB0eXBlIE1yZFRhYldlY2hzZWxQcnVlZnVuZyA9IChuZXVlckluZGV4OiBudW1iZXIsIGFrdHVlbGxlckluZGV4OiBudW1iZXIpID0+IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtcmQtdGFiLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC10YWItZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tcmQtdGFiLWdyb3VwLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE1yZFRhYkdyb3VwQ29tcG9uZW50IGV4dGVuZHMgQmFzZU9iamVjdCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oTXJkVGFiQ29tcG9uZW50KSB0YWJzOiBRdWVyeUxpc3Q8TXJkVGFiQ29tcG9uZW50PjtcbiAgQFZpZXdDaGlsZHJlbihNcmRUYWJCb2R5Q29tcG9uZW50KSB0YWJCb2R5czogUXVlcnlMaXN0PE1yZFRhYkJvZHlDb21wb25lbnQ+O1xuICBAVmlld0NoaWxkcmVuKCdtcmRUYWJIZWFkZXInKSB0YWJIZWFkZXI6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyByb3VuZGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGxhYmVsc0ZpdDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBub0hlYWRlcjogYm9vbGVhbiA9IGZhbHNlXG5cbiAgLyoqIExpbmllIHVudGVyIGRlbSBha3RpdmVuIFRhYiwgZGllIGJlaW0gV2VjaHNlbCBtaXR3YW5kZXJ0OyBzdGFuZGFyZG1hZXNzaWcgYXVzICovXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGluZGljYXRvcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEaWUgR3J1cHBlIHfDpGNoc3QgbWl0IGRlbSBJbmhhbHQgZGVzIGFrdGl2ZW4gVGFicywgc3RhdHQgZWluZSB2b3JnZWdlYmVuZSBIw7ZoZSB6dSBmw7xsbGVuO1xuICAgKiBnZXNjcm9sbHQgd2lyZCBkYW5uIGltIHVtZ2ViZW5kZW4gQ29udGFpbmVyICh6LiBCLiBkaWUgZ2FuemUgU2VpdGUpXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhvZWhlLW5hY2gtaW5oYWx0JylcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgaG9laGVOYWNoSW5oYWx0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgcHVibGljIHF1ZXJ5UGFyYW1ldGVyQWN0aXZlOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgcHVibGljIHNldCBoZWFkZXJIZWlnaHQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2hlYWRlckhlaWdodCA9IHZhbHVlO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICBwdWJsaWMgZ2V0IGhlYWRlckhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9oZWFkZXJIZWlnaHQ7XG4gIH1cbiAgcHJpdmF0ZSBfaGVhZGVySGVpZ2h0OiBudW1iZXI7XG5cbiAgQElucHV0KCkgcHVibGljIHNldCBzZWxlY3RlZEluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gdmFsdWU7XG4gICAgdGhpcy5hY3RpdmF0ZVRhYih2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgfVxuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBudW1iZXI7XG5cblxuICBASW5wdXQoKSBwdWJsaWMgY2hhbmdlVGFiOiBPYnNlcnZhYmxlVmFsdWU8bnVtYmVyPjtcblxuICAvKipcbiAgICogV2lyZCB2b3IgamVkZW0gVGFid2VjaHNlbCBwZXIgS2xpY2sgYXVmIGRlbiBLb3BmIGdlZnJhZ3Q7IFdlY2hzZWwgcGVyIGBzZWxlY3RlZEluZGV4YC9gY2hhbmdlVGFiYCBsYXVmZW4gb2huZSBSdWVja2ZyYWdlLlxuICAgKiBFaW4gT2JzZXJ2YWJsZSB6YWVobHQgbWl0IHNlaW5lbSBlcnN0ZW4gV2VydC5cbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBjYW5DaGFuZ2VUYWI6IE1yZFRhYldlY2hzZWxQcnVlZnVuZztcblxuICBAT3V0cHV0KCkgcHVibGljIHNlbGVjdGVkVGFiQ2hhbmdlZDogRXZlbnRFbWl0dGVyPE1yZFRhYkNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0ZWRUYWJJbmRleENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiogRnVlciBgWyhzZWxlY3RlZEluZGV4KV1gLCBnbGVpY2hlciBXZXJ0IHdpZSBgc2VsZWN0ZWRUYWJJbmRleENoYW5nZWRgICovXG4gIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIHRhYlVuZGVybGluZUxlZnQ6IG51bWJlciA9IDA7XG4gIHB1YmxpYyB0YWJVbmRlcmxpbmVXaWR0aDogbnVtYmVyID0gMDtcblxuICBwcml2YXRlIGFjdGl2ZUluZGV4OiBudW1iZXI7XG4gIHByaXZhdGUgYWN0aXZlVGFiOiBNcmRUYWJDb21wb25lbnQ7XG4gIHByaXZhdGUgYWN0aXZlVGFiQm9keTogTXJkVGFiQm9keUNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGFic0luZGl6aWVyZW4oKTtcbiAgICAvLyBUYWJzIHBlciAqbmdGb3Iga29lbm5lbiBzcGFldGVyIGRhenVrb21tZW4gb2RlciB3ZWdmYWxsZW5cbiAgICB0aGlzLndhdGNoKHRoaXMudGFicy5jaGFuZ2VzLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoKSA9PiB0aGlzLnRhYnNHZWFlbmRlcnQoKSkpO1xuICAgIHRoaXMud2F0Y2godGhpcy50YWJzLmNoYW5nZXMucGlwZShcbiAgICAgIHN0YXJ0V2l0aCh0aGlzLnRhYnMpLFxuICAgICAgc3dpdGNoTWFwKCh0YWJzOiBRdWVyeUxpc3Q8TXJkVGFiQ29tcG9uZW50PikgPT4gbWVyZ2UoLi4udGFicy5tYXAoKHRhYjogTXJkVGFiQ29tcG9uZW50KSA9PiB0YWIuenVzdGFuZEdlYWVuZGVydCkpKVxuICAgICksIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpKSk7XG5cbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5jaGFuZ2VUYWIpKSB7XG4gICAgICB0aGlzLndhdGNoKHRoaXMuY2hhbmdlVGFiLmNoYW5nZWQsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVUYWIoaW5kZXgpO1xuICAgICAgfSkpO1xuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuY2hhbmdlVGFiLnZhbHVlKSkge1xuICAgICAgICB0aGlzLmFjdGl2YXRlVGFiKHRoaXMuY2hhbmdlVGFiLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5zZWxlY3RlZEluZGV4KSAmJiB0aGlzLnNlbGVjdGVkSW5kZXggIT09IHRoaXMuYWN0aXZlSW5kZXgpIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVUYWIodGhpcy5zZWxlY3RlZEluZGV4KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5xdWVyeVBhcmFtZXRlckFjdGl2ZSkge1xuICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQocGFyYW1zW3RoaXMucXVlcnlQYXJhbWV0ZXJBY3RpdmVdKSkge1xuICAgICAgICAgIGxldCBpbmRleCA9IHBhcnNlSW50KHBhcmFtc1t0aGlzLnF1ZXJ5UGFyYW1ldGVyQWN0aXZlXSk7XG4gICAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLnRhYnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlVGFiKGluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZVRhYigwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghVXRpbC5pc0RlZmluZWQodGhpcy5hY3RpdmVJbmRleCkpIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVUYWIoMCk7XG4gICAgfVxuXG4gICAgXG4gIH1cblxuICAvKiogS2xpY2sgYXVmIGVpbmVuIFRhYmtvcGY6IGdlc3BlcnJ0ZSBUYWJzIGlnbm9yaWVyZW4sIHNvbnN0IGBjYW5DaGFuZ2VUYWJgIGZyYWdlbiAqL1xuICBwdWJsaWMgdGFiR2VrbGlja3QodGFiOiBNcmRUYWJDb21wb25lbnQpOiB2b2lkIHtcbiAgICBpZiAodGFiLmRpc2FibGVkIHx8IHRhYi5pbmRleCA9PT0gdGhpcy5hY3RpdmVJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY2FuQ2hhbmdlVGFiKSB7XG4gICAgICB0aGlzLmFjdGl2YXRlVGFiKHRhYi5pbmRleCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVybGF1YnQ6IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5jYW5DaGFuZ2VUYWIodGFiLmluZGV4LCB0aGlzLmFjdGl2ZUluZGV4KTtcbiAgICBpZiAoaXNPYnNlcnZhYmxlKGVybGF1YnQpKSB7XG4gICAgICB0aGlzLnN1YnNjcmliZShlcmxhdWJ0LCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigob2s6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYgKG9rKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZVRhYih0YWIuaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgfSBlbHNlIGlmIChlcmxhdWJ0KSB7XG4gICAgICB0aGlzLmFjdGl2YXRlVGFiKHRhYi5pbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0YWJzSW5kaXppZXJlbigpOiB2b2lkIHtcbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiOiBNcmRUYWJDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHRhYi5pbmRleCA9IGluZGV4O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIERlciBha3RpdmUgVGFiIGJsZWlidCBha3RpdiwgYXVjaCB3ZW5uIHNpY2ggc2VpbiBJbmRleCB2ZXJzY2hpZWJ0OyBmYWVsbHQgZXIgd2VnLCB3aXJkIGRlciBuYWVjaHN0bGllZ2VuZGUgZ2V3YWVobHQgKi9cbiAgcHJpdmF0ZSB0YWJzR2VhZW5kZXJ0KCk6IHZvaWQge1xuICAgIHRoaXMudGFic0luZGl6aWVyZW4oKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgaWYgKHRoaXMudGFicy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYWt0aXY6IG51bWJlciA9IFV0aWwuaXNEZWZpbmVkKHRoaXMuYWN0aXZlVGFiKSA/IHRoaXMudGFicy50b0FycmF5KCkuaW5kZXhPZih0aGlzLmFjdGl2ZVRhYikgOiAtMTtcbiAgICBpZiAoYWt0aXYgPj0gMCkge1xuICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IGFrdGl2O1xuICAgICAgdGhpcy5hY3RpdmVUYWJCb2R5ID0gdGhpcy50YWJCb2R5cy5nZXQoYWt0aXYpO1xuICAgICAgdGhpcy51bnRlcnN0cmVpY2h1bmdTZXR6ZW4oYWt0aXYpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5pbmRleE1lbGRlbihha3Rpdik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ldTogbnVtYmVyID0gTWF0aC5taW4odGhpcy5hY3RpdmVJbmRleCA/PyB0aGlzLl9zZWxlY3RlZEluZGV4ID8/IDAsIHRoaXMudGFicy5sZW5ndGggLSAxKTtcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWN0aXZlVGFiID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWN0aXZhdGVUYWIobmV1KTtcbiAgfVxuXG4gIHByaXZhdGUgdW50ZXJzdHJlaWNodW5nU2V0emVuKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBoZWFkZXI6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+ID0gdGhpcy5ub0hlYWRlciA/IHVuZGVmaW5lZCA6IHRoaXMudGFiSGVhZGVyPy5nZXQoaW5kZXgpO1xuICAgIGlmIChoZWFkZXIpIHtcbiAgICAgIHRoaXMudGFiVW5kZXJsaW5lTGVmdCA9IGhlYWRlci5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgICB0aGlzLnRhYlVuZGVybGluZVdpZHRoID0gaGVhZGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE51ciBiZWkgZWNodGVyIEFlbmRlcnVuZyB1bmQgZXJzdCBuYWNoIGRlbSBsYXVmZW5kZW4gQ2hhbmdlLURldGVjdGlvbi1EdXJjaGxhdWYsXG4gICAqIHNvbnN0IHdpcmZ0IGBbKHNlbGVjdGVkSW5kZXgpXWAgYmVpbSBlcnN0ZW4gUmVuZGVybiBFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZFxuICAgKi9cbiAgcHJpdmF0ZSBpbmRleE1lbGRlbihpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGluZGV4ID09PSB0aGlzLl9zZWxlY3RlZEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KGluZGV4KSk7XG4gIH1cblxuICBwdWJsaWMgYWN0aXZhdGVUYWIoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmFjdGl2ZUluZGV4KSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLmFjdGl2ZVRhYikpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5hY3RpdmVJbmRleCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPiB0aGlzLmFjdGl2ZUluZGV4KSB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFiQm9keS50cmFuc2xhdGUgPSAtMTAwO1xuICAgICAgICB0aGlzLmFjdGl2ZVRhYi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCA8IHRoaXMuYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYWJCb2R5LnRyYW5zbGF0ZSA9IDEwMDtcbiAgICAgICAgdGhpcy5hY3RpdmVUYWIuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMudGFiQm9keXMpKSB7XG4gICAgICB0aGlzLnRhYkJvZHlzLmZvckVhY2goKHRhYjogTXJkVGFiQm9keUNvbXBvbmVudCwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChpIDwgaW5kZXgpIHtcbiAgICAgICAgICB0YWIudHJhbnNsYXRlID0gLTEwMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA+IGluZGV4KSB7XG4gICAgICAgICAgdGFiLnRyYW5zbGF0ZSA9IDEwMDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCB0YWJCb2R5ID0gdGhpcy50YWJCb2R5cy5nZXQoaW5kZXgpO1xuICAgICAgbGV0IHRhYiA9IHRoaXMudGFicy5nZXQoaW5kZXgpO1xuXG4gICAgICAvLyBGcmFnIG1pY2ggbmljaHQgd2llc28sIGFiZXIgd2VubiBkaWUgVGFicyBuaWNodCDDvGJlciBkaWUgU3RhbmRhcmQtSGVhZGVyLCBzb25kZXJuIMO8YmVyXG4gICAgICAvLyBzZWxlY3RlZEluZGV4IG9kZXIgY2hhbmdlVGFiIGdlc2V0enQgd2VyZGVuLCBkYW5uIGlzdCBkZXIgQ29udGVudCBkZXMgVGFiQm9keXMgbWFuY2htYWwgZGVzdHJveWVkLlxuICAgICAgLy8gRGVzaGFsYiBzZXR6ZW4gd2lyIGlobiBoaWVyIHdpZWRlciBhdWYgZGVuIENvbnRlbnQgZGVzIFRhYnMsIGRlciBpbW1lciBmdW5rdGlvbmllcnQuXG4gICAgICBpZiAodGFiQm9keS5jb250ZW50LmRlc3Ryb3llZCkge1xuICAgICAgICB0YWJCb2R5LmNvbnRlbnQgPSB0YWIuY29udGVudDtcbiAgICAgIH1cblxuICAgICAgdGFiLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0YWJCb2R5LnRyYW5zbGF0ZSA9IDA7XG4gICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgICB0aGlzLmFjdGl2ZVRhYkJvZHkgPSB0YWJCb2R5O1xuICAgICAgdGhpcy5hY3RpdmVUYWIgPSB0YWI7XG5cbiAgICAgIGlmICh0aGlzLnF1ZXJ5UGFyYW1ldGVyQWN0aXZlKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7XG4gICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgIFt0aGlzLnF1ZXJ5UGFyYW1ldGVyQWN0aXZlXTogaW5kZXhcbiAgICAgICAgICB9LFxuICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZSdcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudW50ZXJzdHJlaWNodW5nU2V0emVuKGluZGV4KTtcblxuICAgICAgdGhpcy5zZWxlY3RlZFRhYkNoYW5nZWQuZW1pdCh0YWIpO1xuICAgICAgdGhpcy5zZWxlY3RlZFRhYkluZGV4Q2hhbmdlZC5lbWl0KGluZGV4KTtcbiAgICAgIHRoaXMuaW5kZXhNZWxkZW4oaW5kZXgpO1xuICAgIH1cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJtcmQtdGFiLWdyb3VwLXRhYnMtY29udGFpbmVyXCIgW25nU3R5bGVdPVwieydoZWlnaHQnOiBoZWFkZXJIZWlnaHQrJ3B4J31cIiAqbmdJZj1cIiFub0hlYWRlclwiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcbiAgPGRpdiBjbGFzcz1cIm1yZC10YWItZ3JvdXAtdGFiXCIgI21yZFRhYkhlYWRlciAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnNcIlxyXG4gICAgcm9sZT1cInRhYlwiIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwiISF0YWIuYWN0aXZlXCIgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIiBbYXR0ci5jb25maWduYW1lXT1cInRhYi5jb25maWduYW1lIHx8IG51bGxcIiBbbXJkVG9vbFRpcF09XCJ0YWIudG9vbHRpcFwiXHJcbiAgICBbbmdDbGFzc109XCJ7J3RhYi1hY3RpdmUnOiB0YWIuYWN0aXZlLCAndGFiLWRpc2FibGVkJzogdGFiLmRpc2FibGVkLCAndGFicy1yb3VuZGVkJzogcm91bmRlZCwgJ2ZpdC1sYWJlbHMnOiBsYWJlbHNGaXR9XCIgKGNsaWNrKT1cInRhYkdla2xpY2t0KHRhYilcIj5cclxuICAgIHt7dGFiLmxhYmVsfX1cclxuICAgIDxkaXYgY2xhc3M9XCJtcmQtdGFiLWdyb3VwLXRhYi1pbmRpY2F0b3JcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibXJkLXRhYi11bmRlcmxpbmVcIiAqbmdJZj1cImluZGljYXRvclwiIFtzdHlsZS5sZWZ0LnB4XT1cInRhYlVuZGVybGluZUxlZnRcIiBbc3R5bGUud2lkdGgucHhdPVwidGFiVW5kZXJsaW5lV2lkdGhcIj48L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJtcmQtdGFiLWdyb3VwLWNvbnRlbnQtY29udGFpbmVyXCI+XHJcbiAgPCEtLSA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IC0tPlxyXG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzXCI+XHJcbiAgICA8bXJkLXRhYi1ib2R5XHJcbiAgICAgIFtjb250ZW50XT1cInRhYi5jb250ZW50XCJcclxuICAgICAgW2FjdGl2ZV09XCJ0YWIuYWN0aXZlXCJcclxuICAgICAgW2luZGV4XT1cInRhYi5pbmRleFwiXHJcbiAgICAgIFtwcmVzZXJ2ZUNvbnRlbnRdPVwidGFiLnByZXNlcnZlQ29udGVudFwiXHJcbiAgICAgIFtob2VoZU5hY2hJbmhhbHRdPVwiaG9laGVOYWNoSW5oYWx0XCJcclxuICAgID5cclxuXHJcbiAgICA8L21yZC10YWItYm9keT5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9kaXY+XHJcbiJdfQ==