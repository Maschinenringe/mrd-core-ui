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
        else {
            this.activateTab(0);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXRhYi1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLXRhYnMvY29tcG9uZW50cy9tcmQtdGFiLWdyb3VwL21yZC10YWItZ3JvdXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10YWJzL2NvbXBvbmVudHMvbXJkLXRhYi1ncm91cC9tcmQtdGFiLWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQW1CLG1CQUFtQixFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNsRixPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsZUFBZSxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFhLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxTSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7Ozs7Ozs7OztJQ0gzRSxpQ0FDNEg7SUFBakMsK05BQVMsZUFBQSxnQ0FBc0IsQ0FBQSxJQUFDO0lBQ3pILFlBQ0E7SUFBQSx5QkFBK0M7SUFDakQsaUJBQU07Ozs7SUFISixxR0FBd0Y7SUFDeEYsZUFDQTtJQURBLDZDQUNBOzs7O0lBSkosOEJBQXNHO0lBQ3BHLDJFQUlNO0lBQ04seUJBQTZHO0lBQy9HLGlCQUFNOzs7SUFQb0MsZ0ZBQXlDO0lBQ3BCLGVBQU87SUFBUCxxQ0FBTztJQUtyQyxlQUFrQztJQUFsQyxxREFBa0MseUNBQUE7OztJQUlqRSw2QkFBdUM7SUFDckMsa0NBT2U7SUFDakIsMEJB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U0FBUztrQkFBeEIsS0FBSztZQUVXLGtCQUFrQjtrQkFBbEMsTUFBTTtZQUNVLHVCQUF1QjtrQkFBdkMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VPYmplY3QsIE9ic2VydmFibGVWYWx1ZSwgU3Vic2NyaXB0aW9uSGFuZGxlciwgVXRpbCB9IGZyb20gJ21yZC1jb3JlJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgYm9vbGVhbkF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNcmRUYWJDb21wb25lbnQgfSBmcm9tICcuLi9tcmQtdGFiL21yZC10YWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1yZFRhYkJvZHlDb21wb25lbnQgfSBmcm9tICcuLi9tcmQtdGFiLWJvZHkvbXJkLXRhYi1ib2R5LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC10YWItZ3JvdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtdGFiLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtdGFiLWdyb3VwLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZFRhYkdyb3VwQ29tcG9uZW50IGV4dGVuZHMgQmFzZU9iamVjdCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKE1yZFRhYkNvbXBvbmVudCkgdGFiczogUXVlcnlMaXN0PE1yZFRhYkNvbXBvbmVudD47XHJcbiAgQFZpZXdDaGlsZHJlbihNcmRUYWJCb2R5Q29tcG9uZW50KSB0YWJCb2R5czogUXVlcnlMaXN0PE1yZFRhYkJvZHlDb21wb25lbnQ+O1xyXG4gIEBWaWV3Q2hpbGRyZW4oJ21yZFRhYkhlYWRlcicpIHRhYkhlYWRlcjogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyByb3VuZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgbGFiZWxzRml0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgbm9IZWFkZXI6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgcXVlcnlQYXJhbWV0ZXJBY3RpdmU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHNldCBoZWFkZXJIZWlnaHQodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5faGVhZGVySGVpZ2h0ID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgaGVhZGVySGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVhZGVySGVpZ2h0O1xyXG4gIH1cclxuICBwcml2YXRlIF9oZWFkZXJIZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHNldCBzZWxlY3RlZEluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSB2YWx1ZTtcclxuICAgIHRoaXMuYWN0aXZhdGVUYWIodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzZWxlY3RlZEluZGV4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xyXG5cclxuXHJcbiAgQElucHV0KCkgcHVibGljIGNoYW5nZVRhYjogT2JzZXJ2YWJsZVZhbHVlPG51bWJlcj47XHJcblxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0ZWRUYWJDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8TXJkVGFiQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIHNlbGVjdGVkVGFiSW5kZXhDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHVibGljIHRhYlVuZGVybGluZUxlZnQ6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIHRhYlVuZGVybGluZVdpZHRoOiBudW1iZXIgPSAwO1xyXG5cclxuICBwcml2YXRlIGFjdGl2ZUluZGV4OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBhY3RpdmVUYWI6IE1yZFRhYkNvbXBvbmVudDtcclxuICBwcml2YXRlIGFjdGl2ZVRhYkJvZHk6IE1yZFRhYkJvZHlDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYjogTXJkVGFiQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHRhYi5pbmRleCA9IGluZGV4O1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMucXVlcnlQYXJhbWV0ZXJBY3RpdmUpIHtcclxuICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChwYXJhbXNbdGhpcy5xdWVyeVBhcmFtZXRlckFjdGl2ZV0pKSB7XHJcbiAgICAgICAgICBsZXQgaW5kZXggPSBwYXJzZUludChwYXJhbXNbdGhpcy5xdWVyeVBhcmFtZXRlckFjdGl2ZV0pO1xyXG4gICAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLnRhYnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVUYWIoaW5kZXgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2YXRlVGFiKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlVGFiKDApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmNoYW5nZVRhYikpIHtcclxuICAgICAgdGhpcy53YXRjaCh0aGlzLmNoYW5nZVRhYi5jaGFuZ2VkLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVUYWIoaW5kZXgpO1xyXG4gICAgICB9KSk7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmNoYW5nZVRhYi52YWx1ZSkpIHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlVGFiKHRoaXMuY2hhbmdlVGFiLnZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLnNlbGVjdGVkSW5kZXgpICYmIHRoaXMuc2VsZWN0ZWRJbmRleCAhPT0gdGhpcy5hY3RpdmVJbmRleCkge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlVGFiKHRoaXMuc2VsZWN0ZWRJbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWN0aXZhdGVUYWIoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuYWN0aXZlSW5kZXgpICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuYWN0aXZlVGFiKSkge1xyXG4gICAgICBpZiAoaW5kZXggPT09IHRoaXMuYWN0aXZlSW5kZXgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGluZGV4ID4gdGhpcy5hY3RpdmVJbmRleCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlVGFiQm9keS50cmFuc2xhdGUgPSAtMTAwO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlVGFiLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmRleCA8IHRoaXMuYWN0aXZlSW5kZXgpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZVRhYkJvZHkudHJhbnNsYXRlID0gMTAwO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlVGFiLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMudGFiQm9keXMpKSB7XHJcbiAgICAgIHRoaXMudGFiQm9keXMuZm9yRWFjaCgodGFiOiBNcmRUYWJCb2R5Q29tcG9uZW50LCBpOiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZiAoaSA8IGluZGV4KSB7XHJcbiAgICAgICAgICB0YWIudHJhbnNsYXRlID0gLTEwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGkgPiBpbmRleCkge1xyXG4gICAgICAgICAgdGFiLnRyYW5zbGF0ZSA9IDEwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IHRhYkJvZHkgPSB0aGlzLnRhYkJvZHlzLmdldChpbmRleCk7XHJcbiAgICAgIGxldCB0YWIgPSB0aGlzLnRhYnMuZ2V0KGluZGV4KTtcclxuXHJcbiAgICAgIC8vIEZyYWcgbWljaCBuaWNodCB3aWVzbywgYWJlciB3ZW5uIGRpZSBUYWJzIG5pY2h0IMO8YmVyIGRpZSBTdGFuZGFyZC1IZWFkZXIsIHNvbmRlcm4gw7xiZXJcclxuICAgICAgLy8gc2VsZWN0ZWRJbmRleCBvZGVyIGNoYW5nZVRhYiBnZXNldHp0IHdlcmRlbiwgZGFubiBpc3QgZGVyIENvbnRlbnQgZGVzIFRhYkJvZHlzIG1hbmNobWFsIGRlc3Ryb3llZC5cclxuICAgICAgLy8gRGVzaGFsYiBzZXR6ZW4gd2lyIGlobiBoaWVyIHdpZWRlciBhdWYgZGVuIENvbnRlbnQgZGVzIFRhYnMsIGRlciBpbW1lciBmdW5rdGlvbmllcnQuXHJcbiAgICAgIGlmICh0YWJCb2R5LmNvbnRlbnQuZGVzdHJveWVkKSB7XHJcbiAgICAgICAgdGFiQm9keS5jb250ZW50ID0gdGFiLmNvbnRlbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRhYi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0YWJCb2R5LnRyYW5zbGF0ZSA9IDA7XHJcbiAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBpbmRleDtcclxuICAgICAgdGhpcy5hY3RpdmVUYWJCb2R5ID0gdGFiQm9keTtcclxuICAgICAgdGhpcy5hY3RpdmVUYWIgPSB0YWI7XHJcblxyXG4gICAgICBpZiAodGhpcy5xdWVyeVBhcmFtZXRlckFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7XHJcbiAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICBbdGhpcy5xdWVyeVBhcmFtZXRlckFjdGl2ZV06IGluZGV4XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXRoaXMubm9IZWFkZXIpIHtcclxuICAgICAgICBsZXQgaGVhZGVyID0gdGhpcy50YWJIZWFkZXIuZ2V0KGluZGV4KTtcclxuICAgICAgICB0aGlzLnRhYlVuZGVybGluZUxlZnQgPSBoZWFkZXIubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0O1xyXG4gICAgICAgIHRoaXMudGFiVW5kZXJsaW5lV2lkdGggPSBoZWFkZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zZWxlY3RlZFRhYkNoYW5nZWQuZW1pdCh0YWIpO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVGFiSW5kZXhDaGFuZ2VkLmVtaXQoaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibXJkLXRhYi1ncm91cC10YWJzLWNvbnRhaW5lclwiIFtuZ1N0eWxlXT1cInsnaGVpZ2h0JzogaGVhZGVySGVpZ2h0KydweCd9XCIgKm5nSWY9XCIhbm9IZWFkZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwibXJkLXRhYi1ncm91cC10YWJcIiAjbXJkVGFiSGVhZGVyICpuZ0Zvcj1cImxldCB0YWIgb2YgdGFic1wiXHJcbiAgICBbbmdDbGFzc109XCJ7J3RhYi1hY3RpdmUnOiB0YWIuYWN0aXZlLCAndGFicy1yb3VuZGVkJzogcm91bmRlZCwgJ2ZpdC1sYWJlbHMnOiBsYWJlbHNGaXR9XCIgKGNsaWNrKT1cImFjdGl2YXRlVGFiKHRhYi5pbmRleClcIj5cclxuICAgIHt7dGFiLmxhYmVsfX1cclxuICAgIDxkaXYgY2xhc3M9XCJtcmQtdGFiLWdyb3VwLXRhYi1pbmRpY2F0b3JcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibXJkLXRhYi11bmRlcmxpbmVcIiBbc3R5bGUubGVmdC5weF09XCJ0YWJVbmRlcmxpbmVMZWZ0XCIgW3N0eWxlLndpZHRoLnB4XT1cInRhYlVuZGVybGluZVdpZHRoXCI+PC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwibXJkLXRhYi1ncm91cC1jb250ZW50LWNvbnRhaW5lclwiPlxyXG4gIDwhLS0gPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiAtLT5cclxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCB0YWIgb2YgdGFic1wiPlxyXG4gICAgPG1yZC10YWItYm9keVxyXG4gICAgICBbY29udGVudF09XCJ0YWIuY29udGVudFwiXHJcbiAgICAgIFthY3RpdmVdPVwidGFiLmFjdGl2ZVwiXHJcbiAgICAgIFtpbmRleF09XCJ0YWIuaW5kZXhcIlxyXG4gICAgICBbcHJlc2VydmVDb250ZW50XT1cInRhYi5wcmVzZXJ2ZUNvbnRlbnRcIlxyXG4gICAgPlxyXG5cclxuICAgIDwvbXJkLXRhYi1ib2R5PlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuIl19