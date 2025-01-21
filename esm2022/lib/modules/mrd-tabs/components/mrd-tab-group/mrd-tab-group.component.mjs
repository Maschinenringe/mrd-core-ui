import { BaseObject, SubscriptionHandler, Util } from 'mrd-core';
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, Output, ViewChildren, booleanAttribute } from '@angular/core';
import { MrdTabComponent } from '../mrd-tab/mrd-tab.component';
import { MrdTabBodyComponent } from '../mrd-tab-body/mrd-tab-body.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "../mrd-tab-body/mrd-tab-body.component";
const _c0 = ["mrdTabHeader"];
const _c1 = function (a0, a1, a2) { return { "tab-active": a0, "tabs-rounded": a1, "fit-labels": a2 }; };
function MrdTabGroupComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6, 7);
    i0.ɵɵlistener("click", function MrdTabGroupComponent_div_0_div_1_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const tab_r3 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r5.activateTab(tab_r3.index)); });
    i0.ɵɵtext(2);
    i0.ɵɵelement(3, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c1, tab_r3.active, ctx_r2.rounded, ctx_r2.labelsFit));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", tab_r3.label, " ");
} }
const _c2 = function (a0) { return { "height": a0 }; };
function MrdTabGroupComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, MrdTabGroupComponent_div_0_div_1_Template, 4, 6, "div", 4);
    i0.ɵɵelement(2, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(6, _c2, ctx_r0.headerHeight + "px"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.tabs);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("left", ctx_r0.tabUnderlineLeft, "px")("width", ctx_r0.tabUnderlineWidth, "px");
} }
function MrdTabGroupComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "mrd-tab-body", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tab_r7 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("content", tab_r7.content)("active", tab_r7.active)("index", tab_r7.index)("preserveContent", tab_r7.preserveContent);
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
    selectedTabChanged = new EventEmitter();
    selectedTabIndexChanged = new EventEmitter();
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
        this.tabs.forEach((tab, index) => {
            tab.index = index;
        });
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
    activateTab(index) {
        debugger;
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
            if (!this.noHeader) {
                let header = this.tabHeader.get(index);
                this.tabUnderlineLeft = header.nativeElement.offsetLeft;
                this.tabUnderlineWidth = header.nativeElement.offsetWidth;
            }
            this.selectedTabChanged.emit(tab);
            this.selectedTabIndexChanged.emit(index);
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
        } }, inputs: { rounded: ["rounded", "rounded", booleanAttribute], labelsFit: ["labelsFit", "labelsFit", booleanAttribute], noHeader: ["noHeader", "noHeader", booleanAttribute], queryParameterActive: "queryParameterActive", headerHeight: "headerHeight", selectedIndex: "selectedIndex", changeTab: "changeTab" }, outputs: { selectedTabChanged: "selectedTabChanged", selectedTabIndexChanged: "selectedTabIndexChanged" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 2, consts: [["class", "mrd-tab-group-tabs-container", 3, "ngStyle", 4, "ngIf"], [1, "mrd-tab-group-content-container"], [4, "ngFor", "ngForOf"], [1, "mrd-tab-group-tabs-container", 3, "ngStyle"], ["class", "mrd-tab-group-tab", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "mrd-tab-underline"], [1, "mrd-tab-group-tab", 3, "ngClass", "click"], ["mrdTabHeader", ""], [1, "mrd-tab-group-tab-indicator"], [3, "content", "active", "index", "preserveContent"]], template: function MrdTabGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, MrdTabGroupComponent_div_0_Template, 3, 8, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtemplate(2, MrdTabGroupComponent_ng_container_2_Template, 2, 4, "ng-container", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.noHeader);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.tabs);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i2.NgStyle, i3.MrdTabBodyComponent], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;flex:1 1 100%;max-height:100%}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;border-bottom:1px solid lightgrey;background-color:#e5e5e5;position:relative}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-underline[_ngcontent-%COMP%]{position:absolute;bottom:0;height:2px;background-color:#00f;transition:left .3s,width .3s}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab[_ngcontent-%COMP%]{display:flex;flex:1 1 100%;flex-direction:column;align-items:center;justify-content:center;min-width:-moz-fit-content;min-width:fit-content;height:100%;padding:12px 32px;position:relative;color:gray;font-weight:700;background-color:#f0f0f0;border:1px solid #d2d2d2}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.fit-labels[_ngcontent-%COMP%]{max-width:-moz-fit-content;max-width:fit-content}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tabs-rounded[_ngcontent-%COMP%], .mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tabs-rounded[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]{border-top-right-radius:24px;border-top-left-radius:24px}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tab-active[_ngcontent-%COMP%]{background-color:#68b022;color:#fff;border-color:#68b022}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab.tab-active[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]:hover{background-color:#000;opacity:.1}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]{position:absolute;inset:0}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]:active{pointer-events:none}.mrd-tab-group-tabs-container[_ngcontent-%COMP%]   .mrd-tab-group-tab[_ngcontent-%COMP%]   .mrd-tab-group-tab-indicator[_ngcontent-%COMP%]:hover{background-color:#68b022;opacity:.2}.mrd-tab-group-content-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:1 1 100%;overflow:hidden;position:relative}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdTabGroupComponent, [{
        type: Component,
        args: [{ selector: 'mrd-tab-group', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-tab-group-tabs-container\" [ngStyle]=\"{'height': headerHeight+'px'}\" *ngIf=\"!noHeader\">\r\n  <div class=\"mrd-tab-group-tab\" #mrdTabHeader *ngFor=\"let tab of tabs\"\r\n    [ngClass]=\"{'tab-active': tab.active, 'tabs-rounded': rounded, 'fit-labels': labelsFit}\" (click)=\"activateTab(tab.index)\">\r\n    {{tab.label}}\r\n    <div class=\"mrd-tab-group-tab-indicator\"></div>\r\n  </div>\r\n  <div class=\"mrd-tab-underline\" [style.left.px]=\"tabUnderlineLeft\" [style.width.px]=\"tabUnderlineWidth\"></div>\r\n</div>\r\n<div class=\"mrd-tab-group-content-container\">\r\n  <!-- <ng-content></ng-content> -->\r\n  <ng-container *ngFor=\"let tab of tabs\">\r\n    <mrd-tab-body\r\n      [content]=\"tab.content\"\r\n      [active]=\"tab.active\"\r\n      [index]=\"tab.index\"\r\n      [preserveContent]=\"tab.preserveContent\"\r\n    >\r\n\r\n    </mrd-tab-body>\r\n  </ng-container>\r\n</div>\r\n", styles: [":host{display:flex;flex-direction:column;width:100%;flex:1 1 100%;max-height:100%}.mrd-tab-group-tabs-container{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;border-bottom:1px solid lightgrey;background-color:#e5e5e5;position:relative}.mrd-tab-group-tabs-container .mrd-tab-underline{position:absolute;bottom:0;height:2px;background-color:#00f;transition:left .3s,width .3s}.mrd-tab-group-tabs-container .mrd-tab-group-tab{display:flex;flex:1 1 100%;flex-direction:column;align-items:center;justify-content:center;min-width:-moz-fit-content;min-width:fit-content;height:100%;padding:12px 32px;position:relative;color:gray;font-weight:700;background-color:#f0f0f0;border:1px solid #d2d2d2}.mrd-tab-group-tabs-container .mrd-tab-group-tab.fit-labels{max-width:-moz-fit-content;max-width:fit-content}.mrd-tab-group-tabs-container .mrd-tab-group-tab.tabs-rounded,.mrd-tab-group-tabs-container .mrd-tab-group-tab.tabs-rounded .mrd-tab-group-tab-indicator{border-top-right-radius:24px;border-top-left-radius:24px}.mrd-tab-group-tabs-container .mrd-tab-group-tab.tab-active{background-color:#68b022;color:#fff;border-color:#68b022}.mrd-tab-group-tabs-container .mrd-tab-group-tab.tab-active .mrd-tab-group-tab-indicator:hover{background-color:#000;opacity:.1}.mrd-tab-group-tabs-container .mrd-tab-group-tab .mrd-tab-group-tab-indicator{position:absolute;inset:0}.mrd-tab-group-tabs-container .mrd-tab-group-tab .mrd-tab-group-tab-indicator:active{pointer-events:none}.mrd-tab-group-tabs-container .mrd-tab-group-tab .mrd-tab-group-tab-indicator:hover{background-color:#68b022;opacity:.2}.mrd-tab-group-content-container{display:flex;flex-direction:row;flex:1 1 100%;overflow:hidden;position:relative}\n"] }]
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
        }], queryParameterActive: [{
            type: Input
        }], headerHeight: [{
            type: Input
        }], selectedIndex: [{
            type: Input
        }], changeTab: [{
            type: Input
        }], selectedTabChanged: [{
            type: Output
        }], selectedTabIndexChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXRhYi1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLXRhYnMvY29tcG9uZW50cy9tcmQtdGFiLWdyb3VwL21yZC10YWItZ3JvdXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10YWJzL2NvbXBvbmVudHMvbXJkLXRhYi1ncm91cC9tcmQtdGFiLWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQW1CLG1CQUFtQixFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNsRixPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsZUFBZSxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFhLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxTSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7Ozs7Ozs7OztJQ0gzRSxpQ0FDNEg7SUFBakMsK05BQVMsZUFBQSxnQ0FBc0IsQ0FBQSxJQUFDO0lBQ3pILFlBQ0E7SUFBQSx5QkFBK0M7SUFDakQsaUJBQU07Ozs7SUFISixxR0FBd0Y7SUFDeEYsZUFDQTtJQURBLDZDQUNBOzs7O0lBSkosOEJBQXNHO0lBQ3BHLDJFQUlNO0lBQ04seUJBQTZHO0lBQy9HLGlCQUFNOzs7SUFQb0MsZ0ZBQXlDO0lBQ3BCLGVBQU87SUFBUCxxQ0FBTztJQUtyQyxlQUFrQztJQUFsQyxxREFBa0MseUNBQUE7OztJQUlqRSw2QkFBdUM7SUFDckMsa0NBT2U7SUFDakIsMEJB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cEIsb0JBQW9CO2tCQUFuQyxLQUFLO1lBRWMsWUFBWTtrQkFBL0IsS0FBSztZQVNjLGFBQWE7a0JBQWhDLEtBQUs7WUFXVSxTQUFTO2tCQUF4QixLQUFLO1lBRVcsa0JBQWtCO2tCQUFsQyxNQUFNO1lBQ1UsdUJBQXVCO2tCQUF2QyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZU9iamVjdCwgT2JzZXJ2YWJsZVZhbHVlLCBTdWJzY3JpcHRpb25IYW5kbGVyLCBVdGlsIH0gZnJvbSAnbXJkLWNvcmUnO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuLCBib29sZWFuQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1yZFRhYkNvbXBvbmVudCB9IGZyb20gJy4uL21yZC10YWIvbXJkLXRhYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTXJkVGFiQm9keUNvbXBvbmVudCB9IGZyb20gJy4uL21yZC10YWItYm9keS9tcmQtdGFiLWJvZHkuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLXRhYi1ncm91cCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC10YWItZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC10YWItZ3JvdXAuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkVGFiR3JvdXBDb21wb25lbnQgZXh0ZW5kcyBCYXNlT2JqZWN0IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oTXJkVGFiQ29tcG9uZW50KSB0YWJzOiBRdWVyeUxpc3Q8TXJkVGFiQ29tcG9uZW50PjtcclxuICBAVmlld0NoaWxkcmVuKE1yZFRhYkJvZHlDb21wb25lbnQpIHRhYkJvZHlzOiBRdWVyeUxpc3Q8TXJkVGFiQm9keUNvbXBvbmVudD47XHJcbiAgQFZpZXdDaGlsZHJlbignbXJkVGFiSGVhZGVyJykgdGFiSGVhZGVyOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHJvdW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBsYWJlbHNGaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBub0hlYWRlcjogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBxdWVyeVBhcmFtZXRlckFjdGl2ZTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgc2V0IGhlYWRlckhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9oZWFkZXJIZWlnaHQgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbiAgcHVibGljIGdldCBoZWFkZXJIZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9oZWFkZXJIZWlnaHQ7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2hlYWRlckhlaWdodDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgc2V0IHNlbGVjdGVkSW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHZhbHVlO1xyXG4gICAgdGhpcy5hY3RpdmF0ZVRhYih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xyXG4gIH1cclxuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBudW1iZXI7XHJcblxyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgY2hhbmdlVGFiOiBPYnNlcnZhYmxlVmFsdWU8bnVtYmVyPjtcclxuXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBzZWxlY3RlZFRhYkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxNcmRUYWJDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0ZWRUYWJJbmRleENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwdWJsaWMgdGFiVW5kZXJsaW5lTGVmdDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgdGFiVW5kZXJsaW5lV2lkdGg6IG51bWJlciA9IDA7XHJcblxyXG4gIHByaXZhdGUgYWN0aXZlSW5kZXg6IG51bWJlcjtcclxuICBwcml2YXRlIGFjdGl2ZVRhYjogTXJkVGFiQ29tcG9uZW50O1xyXG4gIHByaXZhdGUgYWN0aXZlVGFiQm9keTogTXJkVGFiQm9keUNvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiOiBNcmRUYWJDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgdGFiLmluZGV4ID0gaW5kZXg7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5jaGFuZ2VUYWIpKSB7XHJcbiAgICAgIHRoaXMud2F0Y2godGhpcy5jaGFuZ2VUYWIuY2hhbmdlZCwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlVGFiKGluZGV4KTtcclxuICAgICAgfSkpO1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5jaGFuZ2VUYWIudmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZVRhYih0aGlzLmNoYW5nZVRhYi52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5zZWxlY3RlZEluZGV4KSAmJiB0aGlzLnNlbGVjdGVkSW5kZXggIT09IHRoaXMuYWN0aXZlSW5kZXgpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZVRhYih0aGlzLnNlbGVjdGVkSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnF1ZXJ5UGFyYW1ldGVyQWN0aXZlKSB7XHJcbiAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQocGFyYW1zW3RoaXMucXVlcnlQYXJhbWV0ZXJBY3RpdmVdKSkge1xyXG4gICAgICAgICAgbGV0IGluZGV4ID0gcGFyc2VJbnQocGFyYW1zW3RoaXMucXVlcnlQYXJhbWV0ZXJBY3RpdmVdKTtcclxuICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy50YWJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlVGFiKGluZGV4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZVRhYigwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICghVXRpbC5pc0RlZmluZWQodGhpcy5hY3RpdmVJbmRleCkpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZVRhYigwKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhY3RpdmF0ZVRhYihpbmRleDogbnVtYmVyKTogdm9pZCB7ZGVidWdnZXJcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmFjdGl2ZUluZGV4KSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLmFjdGl2ZVRhYikpIHtcclxuICAgICAgaWYgKGluZGV4ID09PSB0aGlzLmFjdGl2ZUluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmRleCA+IHRoaXMuYWN0aXZlSW5kZXgpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZVRhYkJvZHkudHJhbnNsYXRlID0gLTEwMDtcclxuICAgICAgICB0aGlzLmFjdGl2ZVRhYi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5kZXggPCB0aGlzLmFjdGl2ZUluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVUYWJCb2R5LnRyYW5zbGF0ZSA9IDEwMDtcclxuICAgICAgICB0aGlzLmFjdGl2ZVRhYi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLnRhYkJvZHlzKSkge1xyXG4gICAgICB0aGlzLnRhYkJvZHlzLmZvckVhY2goKHRhYjogTXJkVGFiQm9keUNvbXBvbmVudCwgaTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgaWYgKGkgPCBpbmRleCkge1xyXG4gICAgICAgICAgdGFiLnRyYW5zbGF0ZSA9IC0xMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpID4gaW5kZXgpIHtcclxuICAgICAgICAgIHRhYi50cmFuc2xhdGUgPSAxMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCB0YWJCb2R5ID0gdGhpcy50YWJCb2R5cy5nZXQoaW5kZXgpO1xyXG4gICAgICBsZXQgdGFiID0gdGhpcy50YWJzLmdldChpbmRleCk7XHJcblxyXG4gICAgICAvLyBGcmFnIG1pY2ggbmljaHQgd2llc28sIGFiZXIgd2VubiBkaWUgVGFicyBuaWNodCDDvGJlciBkaWUgU3RhbmRhcmQtSGVhZGVyLCBzb25kZXJuIMO8YmVyXHJcbiAgICAgIC8vIHNlbGVjdGVkSW5kZXggb2RlciBjaGFuZ2VUYWIgZ2VzZXR6dCB3ZXJkZW4sIGRhbm4gaXN0IGRlciBDb250ZW50IGRlcyBUYWJCb2R5cyBtYW5jaG1hbCBkZXN0cm95ZWQuXHJcbiAgICAgIC8vIERlc2hhbGIgc2V0emVuIHdpciBpaG4gaGllciB3aWVkZXIgYXVmIGRlbiBDb250ZW50IGRlcyBUYWJzLCBkZXIgaW1tZXIgZnVua3Rpb25pZXJ0LlxyXG4gICAgICBpZiAodGFiQm9keS5jb250ZW50LmRlc3Ryb3llZCkge1xyXG4gICAgICAgIHRhYkJvZHkuY29udGVudCA9IHRhYi5jb250ZW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0YWIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgdGFiQm9keS50cmFuc2xhdGUgPSAwO1xyXG4gICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgIHRoaXMuYWN0aXZlVGFiQm9keSA9IHRhYkJvZHk7XHJcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gdGFiO1xyXG5cclxuICAgICAgaWYgKHRoaXMucXVlcnlQYXJhbWV0ZXJBY3RpdmUpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSwge1xyXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgW3RoaXMucXVlcnlQYXJhbWV0ZXJBY3RpdmVdOiBpbmRleFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZSdcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF0aGlzLm5vSGVhZGVyKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlciA9IHRoaXMudGFiSGVhZGVyLmdldChpbmRleCk7XHJcbiAgICAgICAgdGhpcy50YWJVbmRlcmxpbmVMZWZ0ID0gaGVhZGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0TGVmdDtcclxuICAgICAgICB0aGlzLnRhYlVuZGVybGluZVdpZHRoID0gaGVhZGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWJDaGFuZ2VkLmVtaXQodGFiKTtcclxuICAgICAgdGhpcy5zZWxlY3RlZFRhYkluZGV4Q2hhbmdlZC5lbWl0KGluZGV4KTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1yZC10YWItZ3JvdXAtdGFicy1jb250YWluZXJcIiBbbmdTdHlsZV09XCJ7J2hlaWdodCc6IGhlYWRlckhlaWdodCsncHgnfVwiICpuZ0lmPVwiIW5vSGVhZGVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm1yZC10YWItZ3JvdXAtdGFiXCIgI21yZFRhYkhlYWRlciAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnNcIlxyXG4gICAgW25nQ2xhc3NdPVwieyd0YWItYWN0aXZlJzogdGFiLmFjdGl2ZSwgJ3RhYnMtcm91bmRlZCc6IHJvdW5kZWQsICdmaXQtbGFiZWxzJzogbGFiZWxzRml0fVwiIChjbGljayk9XCJhY3RpdmF0ZVRhYih0YWIuaW5kZXgpXCI+XHJcbiAgICB7e3RhYi5sYWJlbH19XHJcbiAgICA8ZGl2IGNsYXNzPVwibXJkLXRhYi1ncm91cC10YWItaW5kaWNhdG9yXCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cIm1yZC10YWItdW5kZXJsaW5lXCIgW3N0eWxlLmxlZnQucHhdPVwidGFiVW5kZXJsaW5lTGVmdFwiIFtzdHlsZS53aWR0aC5weF09XCJ0YWJVbmRlcmxpbmVXaWR0aFwiPjwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cIm1yZC10YWItZ3JvdXAtY29udGVudC1jb250YWluZXJcIj5cclxuICA8IS0tIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gLS0+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnNcIj5cclxuICAgIDxtcmQtdGFiLWJvZHlcclxuICAgICAgW2NvbnRlbnRdPVwidGFiLmNvbnRlbnRcIlxyXG4gICAgICBbYWN0aXZlXT1cInRhYi5hY3RpdmVcIlxyXG4gICAgICBbaW5kZXhdPVwidGFiLmluZGV4XCJcclxuICAgICAgW3ByZXNlcnZlQ29udGVudF09XCJ0YWIucHJlc2VydmVDb250ZW50XCJcclxuICAgID5cclxuXHJcbiAgICA8L21yZC10YWItYm9keT5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9kaXY+XHJcbiJdfQ==