import { booleanAttribute, ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, Output, ViewChildren } from '@angular/core';
import { BaseObject, SubscriptionHandler, Util } from 'mrd-core';
import { MrdTabBodyComponent } from '../../../mrd-tabs/components/mrd-tab-body/mrd-tab-body.component';
import { MrdStepComponent } from '../mrd-step/mrd-step.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "../../../mrd-tabs/components/mrd-tab-body/mrd-tab-body.component";
const _c0 = ["mrdStepHeader"];
const _c1 = function (a0) { return { "next-step-active": a0 }; };
function MrdStepperComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 10);
} if (rf & 2) {
    const i_r3 = i0.ɵɵnextContext().index;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c1, ctx_r5.activeIndex > i_r3));
} }
const _c2 = function (a0) { return { "last-step": a0 }; };
const _c3 = function (a0, a1, a2, a3, a4, a5) { return { "step-active": a0, "step-invalid": a1, "topLabel": a2, "bottomLabel": a3, "leftLabel": a4, "rightLabel": a5 }; };
function MrdStepperComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5, 6);
    i0.ɵɵlistener("click", function MrdStepperComponent_div_1_Template_div_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const step_r2 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.activateStep(step_r2.index)); });
    i0.ɵɵelementStart(3, "div", 7)(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 8);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(8, MrdStepperComponent_div_1_div_8_Template, 1, 3, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const step_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c2, i_r3 === ctx_r0.steps.length - 1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction6(7, _c3, step_r2.active, step_r2.touched && step_r2.mrdStepControl && !step_r2.mrdStepControl.valid, ctx_r0.labelposition === "top", ctx_r0.labelposition === "bottom", ctx_r0.labelposition === "left", ctx_r0.labelposition === "right"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(step_r2.index + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", step_r2.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i_r3 < ctx_r0.steps.length - 1);
} }
function MrdStepperComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "mrd-tab-body", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tab_r9 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("content", tab_r9.content)("active", tab_r9.active)("index", tab_r9.index)("preserveContent", tab_r9.preserveContent);
} }
const _c4 = function (a0) { return { "height": a0 }; };
export class MrdStepperComponent extends BaseObject {
    cdr;
    router;
    route;
    steps;
    stepBodys;
    stepHeader;
    labelposition = 'right';
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
        this.activateStep(value);
    }
    get selectedIndex() {
        return this._selectedIndex;
    }
    _selectedIndex;
    changeStep;
    linear = false;
    selectedStepChanged = new EventEmitter();
    selectedStepIndexChanged = new EventEmitter();
    activeIndex;
    activeStep;
    activeStepBody;
    constructor(cdr, router, route) {
        super();
        this.cdr = cdr;
        this.router = router;
        this.route = route;
    }
    ngAfterViewInit() {
        this.steps.forEach((tab, index) => {
            tab.index = index;
        });
        if (Util.isDefined(this.changeStep)) {
            this.watch(this.changeStep.changed, new SubscriptionHandler((index) => {
                this.activateStep(index);
            }));
            if (Util.isDefined(this.changeStep.value)) {
                this.activateStep(this.changeStep.value);
            }
        }
        if (Util.isDefined(this.selectedIndex) && this.selectedIndex !== this.activeIndex) {
            this.activateStep(this.selectedIndex);
        }
        // if (this.queryParameterActive) {
        //   this.route.queryParams.subscribe((params) => {
        //     if (Util.isDefined(params[this.queryParameterActive])) {
        //       let index = parseInt(params[this.queryParameterActive]);
        //       if (index >= 0 && index < this.tabs.length) {
        //         this.activateStep(index);
        //       }
        //     } else {
        //       this.activateStep(0);
        //     }
        //   });
        /*} else*/ if (!Util.isDefined(this.activeIndex)) {
            this.activateStep(0);
        }
    }
    activateStep(index) {
        if (this.linear && Util.isDefined(this.activeStep) && index > this.activeIndex && !this.activeStep.valid) {
            return;
        }
        if (Util.isDefined(this.activeIndex) && Util.isDefined(this.activeStep)) {
            if (index === this.activeIndex) {
                return;
            }
            if (index > this.activeIndex) {
                this.activeStepBody.translate = -100;
                this.activeStep.active = false;
            }
            if (index < this.activeIndex) {
                this.activeStepBody.translate = 100;
                this.activeStep.active = false;
            }
        }
        if (Util.isDefined(this.stepBodys)) {
            this.stepBodys.forEach((tab, i) => {
                if (i < index) {
                    tab.translate = -100;
                }
                if (i > index) {
                    tab.translate = 100;
                }
            });
            let tabBody = this.stepBodys.get(index);
            let tab = this.steps.get(index);
            // Frag mich nicht wieso, aber wenn die Tabs nicht über die Standard-Header, sondern über
            // selectedIndex oder changeTab gesetzt werden, dann ist der Content des TabBodys manchmal destroyed.
            // Deshalb setzen wir ihn hier wieder auf den Content des Tabs, der immer funktioniert.
            if (!tabBody.content || tabBody.content.destroyed) {
                tabBody.content = tab.content;
            }
            tab.active = true;
            tabBody.translate = 0;
            this.activeIndex = index;
            this.activeStepBody = tabBody;
            this.activeStep = tab;
            // if (this.queryParameterActive) {
            //   this.router.navigate([], {
            //     queryParams: {
            //       [this.queryParameterActive]: index
            //     },
            //     queryParamsHandling: 'merge'
            //   });
            // }
            // if (!this.noHeader) {
            // let header = this.stepHeader.get(index);
            // }
            this.selectedStepChanged.emit(tab);
            this.selectedStepIndexChanged.emit(index);
        }
        this.cdr.detectChanges();
    }
    /** @nocollapse */ static ɵfac = function MrdStepperComponent_Factory(t) { return new (t || MrdStepperComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdStepperComponent, selectors: [["mrd-stepper"]], contentQueries: function MrdStepperComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, MrdStepComponent, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.steps = _t);
        } }, viewQuery: function MrdStepperComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(MrdTabBodyComponent, 5);
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.stepBodys = _t);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.stepHeader = _t);
        } }, inputs: { labelposition: "labelposition", headerHeight: "headerHeight", selectedIndex: "selectedIndex", changeStep: "changeStep", linear: ["linear", "linear", booleanAttribute] }, outputs: { selectedStepChanged: "selectedStepChanged", selectedStepIndexChanged: "selectedStepIndexChanged" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 5, consts: [[1, "mrd-stepper-steps-container", 3, "ngStyle"], ["class", "mrd-stepper-step-container", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "mrd-stepper-content-container"], [4, "ngFor", "ngForOf"], [1, "mrd-stepper-step-container", 3, "ngClass"], [1, "mrd-stepper-step", 3, "ngClass", "click"], ["mrdStepHeader", ""], [1, "mrd-stepper-step-icon"], [1, "mrd-stepper-step-label"], ["class", "mrd-stepper-step-separator", 3, "ngClass", 4, "ngIf"], [1, "mrd-stepper-step-separator", 3, "ngClass"], [3, "content", "active", "index", "preserveContent"]], template: function MrdStepperComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, MrdStepperComponent_div_1_Template, 9, 14, "div", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtemplate(3, MrdStepperComponent_ng_container_3_Template, 2, 4, "ng-container", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(3, _c4, ctx.headerHeight + "px"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.steps);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.steps);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i2.NgStyle, i3.MrdTabBodyComponent], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;flex:1 1 100%;max-height:100%}.mrd-stepper-steps-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;flex:1 1 100%}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step-container.last-step[_ngcontent-%COMP%]{flex:1 0 fit-content}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step-container[_ngcontent-%COMP%]   .mrd-stepper-step-separator[_ngcontent-%COMP%]{border-bottom:1px solid #000;width:100%;margin-right:-16px;margin-left:-16px}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step-container[_ngcontent-%COMP%]   .mrd-stepper-step-separator.next-step-active[_ngcontent-%COMP%]{border-color:#68b022;border-bottom-width:2px}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;min-width:-moz-fit-content;min-width:fit-content;height:100%;padding:12px 32px;color:gray;font-weight:700;cursor:pointer}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step.step-active[_ngcontent-%COMP%]:not(.step-invalid){color:#68b022}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step.step-active[_ngcontent-%COMP%]:not(.step-invalid)   .mrd-stepper-step-icon[_ngcontent-%COMP%]{background-color:#68b022}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step.step-active[_ngcontent-%COMP%]:not(.step-invalid)   .mrd-stepper-step-label[_ngcontent-%COMP%]{font-size:16px}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step.step-invalid[_ngcontent-%COMP%]{color:#be1212}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step.step-invalid[_ngcontent-%COMP%]   .mrd-stepper-step-icon[_ngcontent-%COMP%]{background-color:#be1212}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step[_ngcontent-%COMP%]   .mrd-stepper-step-icon[_ngcontent-%COMP%]{border-radius:50%;background-color:gray;color:#fff;min-width:24px;max-width:24px;min-height:24px;max-height:24px;display:flex;flex-direction:column;align-items:center;justify-content:center}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step[_ngcontent-%COMP%]   .mrd-stepper-step-icon[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-bottom:1px}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step.topLabel[_ngcontent-%COMP%]{flex-direction:column-reverse}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step.bottomLabel[_ngcontent-%COMP%]{flex-direction:column}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step.leftLabel[_ngcontent-%COMP%]{flex-direction:row-reverse}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step.leftLabel[_ngcontent-%COMP%]   .mrd-stepper-step-label[_ngcontent-%COMP%]{margin-right:8px}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step.rightLabel[_ngcontent-%COMP%]{flex-direction:row}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step.rightLabel[_ngcontent-%COMP%]   .mrd-stepper-step-label[_ngcontent-%COMP%]{margin-left:8px}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step[_ngcontent-%COMP%]   .mrd-stepper-step-label[_ngcontent-%COMP%]{transition:font-size .3s;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step[_ngcontent-%COMP%]   .mrd-stepper-step-label.label-fit[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}.mrd-stepper-content-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:1 1 100%;overflow:hidden;position:relative}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdStepperComponent, [{
        type: Component,
        args: [{ selector: 'mrd-stepper', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-stepper-steps-container\" [ngStyle]=\"{'height': headerHeight+'px'}\">\r\n  <div class=\"mrd-stepper-step-container\" [ngClass]=\"{'last-step': i === steps.length - 1}\" *ngFor=\"let step of steps; let i = index;\">\r\n    <div class=\"mrd-stepper-step\" #mrdStepHeader \r\n      [ngClass]=\"{'step-active': step.active, 'step-invalid': step.touched && step.mrdStepControl && !step.mrdStepControl.valid,\r\n        'topLabel': labelposition === 'top', 'bottomLabel': labelposition === 'bottom', 'leftLabel': labelposition === 'left', 'rightLabel': labelposition === 'right'}\" \r\n      (click)=\"activateStep(step.index)\">\r\n      <div class=\"mrd-stepper-step-icon\">\r\n        <span>{{step.index + 1}}</span>\r\n      </div>\r\n      <div class=\"mrd-stepper-step-label\">\r\n        {{step.label}}\r\n      </div>\r\n    </div>\r\n    <div class=\"mrd-stepper-step-separator\" [ngClass]=\"{'next-step-active': activeIndex > i}\" *ngIf=\"i < steps.length - 1\"></div>\r\n  </div>\r\n</div>\r\n<div class=\"mrd-stepper-content-container\">\r\n  <!-- <ng-content></ng-content> -->\r\n  <ng-container *ngFor=\"let tab of steps\">\r\n    <mrd-tab-body\r\n      [content]=\"tab.content\"\r\n      [active]=\"tab.active\"\r\n      [index]=\"tab.index\"\r\n      [preserveContent]=\"tab.preserveContent\"\r\n    >\r\n\r\n    </mrd-tab-body>\r\n  </ng-container>\r\n</div>", styles: [":host{display:flex;flex-direction:column;width:100%;flex:1 1 100%;max-height:100%}.mrd-stepper-steps-container{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.mrd-stepper-steps-container .mrd-stepper-step-container{display:flex;flex-direction:row;align-items:center;flex:1 1 100%}.mrd-stepper-steps-container .mrd-stepper-step-container.last-step{flex:1 0 fit-content}.mrd-stepper-steps-container .mrd-stepper-step-container .mrd-stepper-step-separator{border-bottom:1px solid #000;width:100%;margin-right:-16px;margin-left:-16px}.mrd-stepper-steps-container .mrd-stepper-step-container .mrd-stepper-step-separator.next-step-active{border-color:#68b022;border-bottom-width:2px}.mrd-stepper-steps-container .mrd-stepper-step{display:flex;align-items:center;justify-content:center;min-width:-moz-fit-content;min-width:fit-content;height:100%;padding:12px 32px;color:gray;font-weight:700;cursor:pointer}.mrd-stepper-steps-container .mrd-stepper-step.step-active:not(.step-invalid){color:#68b022}.mrd-stepper-steps-container .mrd-stepper-step.step-active:not(.step-invalid) .mrd-stepper-step-icon{background-color:#68b022}.mrd-stepper-steps-container .mrd-stepper-step.step-active:not(.step-invalid) .mrd-stepper-step-label{font-size:16px}.mrd-stepper-steps-container .mrd-stepper-step.step-invalid{color:#be1212}.mrd-stepper-steps-container .mrd-stepper-step.step-invalid .mrd-stepper-step-icon{background-color:#be1212}.mrd-stepper-steps-container .mrd-stepper-step .mrd-stepper-step-icon{border-radius:50%;background-color:gray;color:#fff;min-width:24px;max-width:24px;min-height:24px;max-height:24px;display:flex;flex-direction:column;align-items:center;justify-content:center}.mrd-stepper-steps-container .mrd-stepper-step .mrd-stepper-step-icon>span{margin-bottom:1px}.mrd-stepper-steps-container .mrd-stepper-step.topLabel{flex-direction:column-reverse}.mrd-stepper-steps-container .mrd-stepper-step.bottomLabel{flex-direction:column}.mrd-stepper-steps-container .mrd-stepper-step.leftLabel{flex-direction:row-reverse}.mrd-stepper-steps-container .mrd-stepper-step.leftLabel .mrd-stepper-step-label{margin-right:8px}.mrd-stepper-steps-container .mrd-stepper-step.rightLabel{flex-direction:row}.mrd-stepper-steps-container .mrd-stepper-step.rightLabel .mrd-stepper-step-label{margin-left:8px}.mrd-stepper-steps-container .mrd-stepper-step .mrd-stepper-step-label{transition:font-size .3s;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mrd-stepper-steps-container .mrd-stepper-step .mrd-stepper-step-label.label-fit{width:-moz-fit-content;width:fit-content}.mrd-stepper-content-container{display:flex;flex-direction:row;flex:1 1 100%;overflow:hidden;position:relative}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.Router }, { type: i1.ActivatedRoute }]; }, { steps: [{
            type: ContentChildren,
            args: [MrdStepComponent]
        }], stepBodys: [{
            type: ViewChildren,
            args: [MrdTabBodyComponent]
        }], stepHeader: [{
            type: ViewChildren,
            args: ['mrdStepHeader']
        }], labelposition: [{
            type: Input
        }], headerHeight: [{
            type: Input
        }], selectedIndex: [{
            type: Input
        }], changeStep: [{
            type: Input
        }], linear: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], selectedStepChanged: [{
            type: Output
        }], selectedStepIndexChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXN0ZXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1zdGVwcGVyL2NvbXBvbmVudHMvbXJkLXN0ZXBwZXIvbXJkLXN0ZXBwZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1zdGVwcGVyL2NvbXBvbmVudHMvbXJkLXN0ZXBwZXIvbXJkLXN0ZXBwZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLGVBQWUsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMU0sT0FBTyxFQUF5QixVQUFVLEVBQW1CLG1CQUFtQixFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN2RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7SUNVOUQsMEJBQTZIOzs7O0lBQXJGLCtFQUFpRDs7Ozs7O0lBWjNGLDhCQUFxSSxnQkFBQTtJQUlqSSx3TkFBUyxlQUFBLGtDQUF3QixDQUFBLElBQUM7SUFDbEMsOEJBQW1DLFdBQUE7SUFDM0IsWUFBa0I7SUFBQSxpQkFBTyxFQUFBO0lBRWpDLDhCQUFvQztJQUNsQyxZQUNGO0lBQUEsaUJBQU0sRUFBQTtJQUVSLDBFQUE2SDtJQUMvSCxpQkFBTTs7Ozs7SUFia0Msc0ZBQWlEO0lBRXJGLGVBQ2tLO0lBRGxLLHNSQUNrSztJQUcxSixlQUFrQjtJQUFsQix1Q0FBa0I7SUFHeEIsZUFDRjtJ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QzFDdkMsOEJBQW1GO1lBQ2pGLHFFQWFNO1lBQ1IsaUJBQU07WUFDTiw4QkFBMkM7WUFFekMsc0ZBU2U7WUFDakIsaUJBQU07O1lBNUJtQyw2RUFBeUM7WUFDMkIsZUFBVTtZQUFWLG1DQUFVO1lBaUJ2RixlQUFRO1lBQVIsbUNBQVE7Ozt1RkRMM0IsbUJBQW1CO2NBTi9CLFNBQVM7MkJBQ0UsYUFBYSxtQkFHTix1QkFBdUIsQ0FBQyxNQUFNO3NIQUlaLEtBQUs7a0JBQXZDLGVBQWU7bUJBQUMsZ0JBQWdCO1lBQ0UsU0FBUztrQkFBM0MsWUFBWTttQkFBQyxtQkFBbUI7WUFDRixVQUFVO2tCQUF4QyxZQUFZO21CQUFDLGVBQWU7WUFFcEIsYUFBYTtrQkFBckIsS0FBSztZQUVjLFlBQVk7a0JBQS9CLEtBQUs7WUFTZ0IsYUFBYTtrQkFBaEMsS0FBSztZQVVVLFVBQVU7a0JBQXpCLEtBQUs7WUFFdUMsTUFBTTtrQkFBbEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUVuQixtQkFBbUI7a0JBQW5DLE1BQU07WUFDVSx3QkFBd0I7a0JBQXhDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBib29sZWFuQXR0cmlidXRlLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjY2Vzc2FibGVGb3JtQ29udHJvbCwgQmFzZU9iamVjdCwgT2JzZXJ2YWJsZVZhbHVlLCBTdWJzY3JpcHRpb25IYW5kbGVyLCBVdGlsIH0gZnJvbSAnbXJkLWNvcmUnO1xyXG5pbXBvcnQgeyBNcmRUYWJCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbXJkLXRhYnMvY29tcG9uZW50cy9tcmQtdGFiLWJvZHkvbXJkLXRhYi1ib2R5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1yZFN0ZXBDb21wb25lbnQgfSBmcm9tICcuLi9tcmQtc3RlcC9tcmQtc3RlcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTXJkVGFiQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbXJkLXRhYnMvY29tcG9uZW50cy9tcmQtdGFiL21yZC10YWIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLXN0ZXBwZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtc3RlcHBlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLXN0ZXBwZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkU3RlcHBlckNvbXBvbmVudCBleHRlbmRzIEJhc2VPYmplY3QgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0e1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKE1yZFN0ZXBDb21wb25lbnQpIHN0ZXBzOiBRdWVyeUxpc3Q8TXJkU3RlcENvbXBvbmVudD47XHJcbiAgQFZpZXdDaGlsZHJlbihNcmRUYWJCb2R5Q29tcG9uZW50KSBzdGVwQm9keXM6IFF1ZXJ5TGlzdDxNcmRUYWJCb2R5Q29tcG9uZW50PjtcclxuICBAVmlld0NoaWxkcmVuKCdtcmRTdGVwSGVhZGVyJykgc3RlcEhlYWRlcjogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xyXG5cclxuICBASW5wdXQoKSBsYWJlbHBvc2l0aW9uOiAndG9wJ3wncmlnaHQnfCdib3R0b20nfCdsZWZ0JyA9ICdyaWdodCc7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgaGVhZGVySGVpZ2h0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5faGVhZGVySGVpZ2h0ID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgaGVhZGVySGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9oZWFkZXJIZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9oZWFkZXJIZWlnaHQ6IG51bWJlcjtcclxuICBcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzZXQgc2VsZWN0ZWRJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSB2YWx1ZTtcclxuICAgICAgdGhpcy5hY3RpdmF0ZVN0ZXAodmFsdWUpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcHVibGljIGdldCBzZWxlY3RlZEluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dCgpIHB1YmxpYyBjaGFuZ2VTdGVwOiBPYnNlcnZhYmxlVmFsdWU8bnVtYmVyPjtcclxuXHJcbiAgICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBsaW5lYXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAT3V0cHV0KCkgcHVibGljIHNlbGVjdGVkU3RlcENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxNcmRTdGVwQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0ZWRTdGVwSW5kZXhDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBwdWJsaWMgYWN0aXZlSW5kZXg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYWN0aXZlU3RlcDogTXJkU3RlcENvbXBvbmVudDtcclxuICAgIHByaXZhdGUgYWN0aXZlU3RlcEJvZHk6IE1yZFRhYkJvZHlDb21wb25lbnQ7XHJcbiAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG4gICAgKSB7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICB0aGlzLnN0ZXBzLmZvckVhY2goKHRhYjogTXJkU3RlcENvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRhYi5pbmRleCA9IGluZGV4O1xyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuY2hhbmdlU3RlcCkpIHtcclxuICAgICAgICB0aGlzLndhdGNoKHRoaXMuY2hhbmdlU3RlcC5jaGFuZ2VkLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZVN0ZXAoaW5kZXgpO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5jaGFuZ2VTdGVwLnZhbHVlKSkge1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZVN0ZXAodGhpcy5jaGFuZ2VTdGVwLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuc2VsZWN0ZWRJbmRleCkgJiYgdGhpcy5zZWxlY3RlZEluZGV4ICE9PSB0aGlzLmFjdGl2ZUluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZVN0ZXAodGhpcy5zZWxlY3RlZEluZGV4KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAvLyBpZiAodGhpcy5xdWVyeVBhcmFtZXRlckFjdGl2ZSkge1xyXG4gICAgICAvLyAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgLy8gICAgIGlmIChVdGlsLmlzRGVmaW5lZChwYXJhbXNbdGhpcy5xdWVyeVBhcmFtZXRlckFjdGl2ZV0pKSB7XHJcbiAgICAgIC8vICAgICAgIGxldCBpbmRleCA9IHBhcnNlSW50KHBhcmFtc1t0aGlzLnF1ZXJ5UGFyYW1ldGVyQWN0aXZlXSk7XHJcbiAgICAgIC8vICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy50YWJzLmxlbmd0aCkge1xyXG4gICAgICAvLyAgICAgICAgIHRoaXMuYWN0aXZhdGVTdGVwKGluZGV4KTtcclxuICAgICAgLy8gICAgICAgfVxyXG4gICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgLy8gICAgICAgdGhpcy5hY3RpdmF0ZVN0ZXAoMCk7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgfSk7XHJcbiAgICAgIC8qfSBlbHNlKi8gaWYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLmFjdGl2ZUluZGV4KSkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVTdGVwKDApO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgcHVibGljIGFjdGl2YXRlU3RlcChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgIGlmICh0aGlzLmxpbmVhciAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLmFjdGl2ZVN0ZXApICYmIGluZGV4ID4gdGhpcy5hY3RpdmVJbmRleCAmJiAhdGhpcy5hY3RpdmVTdGVwLnZhbGlkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmFjdGl2ZUluZGV4KSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLmFjdGl2ZVN0ZXApKSB7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLmFjdGl2ZUluZGV4KSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbmRleCA+IHRoaXMuYWN0aXZlSW5kZXgpIHtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlU3RlcEJvZHkudHJhbnNsYXRlID0gLTEwMDtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlU3RlcC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluZGV4IDwgdGhpcy5hY3RpdmVJbmRleCkge1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVTdGVwQm9keS50cmFuc2xhdGUgPSAxMDA7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZVN0ZXAuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLnN0ZXBCb2R5cykpIHtcclxuICAgICAgICB0aGlzLnN0ZXBCb2R5cy5mb3JFYWNoKCh0YWI6IE1yZFRhYkJvZHlDb21wb25lbnQsIGk6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgaWYgKGkgPCBpbmRleCkge1xyXG4gICAgICAgICAgICB0YWIudHJhbnNsYXRlID0gLTEwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChpID4gaW5kZXgpIHtcclxuICAgICAgICAgICAgdGFiLnRyYW5zbGF0ZSA9IDEwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICBcclxuICAgICAgICBsZXQgdGFiQm9keSA9IHRoaXMuc3RlcEJvZHlzLmdldChpbmRleCk7XHJcbiAgICAgICAgbGV0IHRhYiA9IHRoaXMuc3RlcHMuZ2V0KGluZGV4KTtcclxuICBcclxuICAgICAgICAvLyBGcmFnIG1pY2ggbmljaHQgd2llc28sIGFiZXIgd2VubiBkaWUgVGFicyBuaWNodCDDvGJlciBkaWUgU3RhbmRhcmQtSGVhZGVyLCBzb25kZXJuIMO8YmVyXHJcbiAgICAgICAgLy8gc2VsZWN0ZWRJbmRleCBvZGVyIGNoYW5nZVRhYiBnZXNldHp0IHdlcmRlbiwgZGFubiBpc3QgZGVyIENvbnRlbnQgZGVzIFRhYkJvZHlzIG1hbmNobWFsIGRlc3Ryb3llZC5cclxuICAgICAgICAvLyBEZXNoYWxiIHNldHplbiB3aXIgaWhuIGhpZXIgd2llZGVyIGF1ZiBkZW4gQ29udGVudCBkZXMgVGFicywgZGVyIGltbWVyIGZ1bmt0aW9uaWVydC5cclxuICAgICAgICBpZiAoIXRhYkJvZHkuY29udGVudCB8fCB0YWJCb2R5LmNvbnRlbnQuZGVzdHJveWVkKSB7XHJcbiAgICAgICAgICB0YWJCb2R5LmNvbnRlbnQgPSB0YWIuY29udGVudDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgdGFiLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGFiQm9keS50cmFuc2xhdGUgPSAwO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmFjdGl2ZVN0ZXBCb2R5ID0gdGFiQm9keTtcclxuICAgICAgICB0aGlzLmFjdGl2ZVN0ZXAgPSB0YWI7XHJcbiAgXHJcbiAgICAgICAgLy8gaWYgKHRoaXMucXVlcnlQYXJhbWV0ZXJBY3RpdmUpIHtcclxuICAgICAgICAvLyAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7XHJcbiAgICAgICAgLy8gICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgLy8gICAgICAgW3RoaXMucXVlcnlQYXJhbWV0ZXJBY3RpdmVdOiBpbmRleFxyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnXHJcbiAgICAgICAgLy8gICB9KTtcclxuICAgICAgICAvLyB9XHJcbiAgXHJcbiAgICAgICAgLy8gaWYgKCF0aGlzLm5vSGVhZGVyKSB7XHJcbiAgICAgICAgICAvLyBsZXQgaGVhZGVyID0gdGhpcy5zdGVwSGVhZGVyLmdldChpbmRleCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkU3RlcENoYW5nZWQuZW1pdCh0YWIpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTdGVwSW5kZXhDaGFuZ2VkLmVtaXQoaW5kZXgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibXJkLXN0ZXBwZXItc3RlcHMtY29udGFpbmVyXCIgW25nU3R5bGVdPVwieydoZWlnaHQnOiBoZWFkZXJIZWlnaHQrJ3B4J31cIj5cclxuICA8ZGl2IGNsYXNzPVwibXJkLXN0ZXBwZXItc3RlcC1jb250YWluZXJcIiBbbmdDbGFzc109XCJ7J2xhc3Qtc3RlcCc6IGkgPT09IHN0ZXBzLmxlbmd0aCAtIDF9XCIgKm5nRm9yPVwibGV0IHN0ZXAgb2Ygc3RlcHM7IGxldCBpID0gaW5kZXg7XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXJkLXN0ZXBwZXItc3RlcFwiICNtcmRTdGVwSGVhZGVyIFxyXG4gICAgICBbbmdDbGFzc109XCJ7J3N0ZXAtYWN0aXZlJzogc3RlcC5hY3RpdmUsICdzdGVwLWludmFsaWQnOiBzdGVwLnRvdWNoZWQgJiYgc3RlcC5tcmRTdGVwQ29udHJvbCAmJiAhc3RlcC5tcmRTdGVwQ29udHJvbC52YWxpZCxcclxuICAgICAgICAndG9wTGFiZWwnOiBsYWJlbHBvc2l0aW9uID09PSAndG9wJywgJ2JvdHRvbUxhYmVsJzogbGFiZWxwb3NpdGlvbiA9PT0gJ2JvdHRvbScsICdsZWZ0TGFiZWwnOiBsYWJlbHBvc2l0aW9uID09PSAnbGVmdCcsICdyaWdodExhYmVsJzogbGFiZWxwb3NpdGlvbiA9PT0gJ3JpZ2h0J31cIiBcclxuICAgICAgKGNsaWNrKT1cImFjdGl2YXRlU3RlcChzdGVwLmluZGV4KVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibXJkLXN0ZXBwZXItc3RlcC1pY29uXCI+XHJcbiAgICAgICAgPHNwYW4+e3tzdGVwLmluZGV4ICsgMX19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1yZC1zdGVwcGVyLXN0ZXAtbGFiZWxcIj5cclxuICAgICAgICB7e3N0ZXAubGFiZWx9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1yZC1zdGVwcGVyLXN0ZXAtc2VwYXJhdG9yXCIgW25nQ2xhc3NdPVwieyduZXh0LXN0ZXAtYWN0aXZlJzogYWN0aXZlSW5kZXggPiBpfVwiICpuZ0lmPVwiaSA8IHN0ZXBzLmxlbmd0aCAtIDFcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJtcmQtc3RlcHBlci1jb250ZW50LWNvbnRhaW5lclwiPlxyXG4gIDwhLS0gPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiAtLT5cclxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCB0YWIgb2Ygc3RlcHNcIj5cclxuICAgIDxtcmQtdGFiLWJvZHlcclxuICAgICAgW2NvbnRlbnRdPVwidGFiLmNvbnRlbnRcIlxyXG4gICAgICBbYWN0aXZlXT1cInRhYi5hY3RpdmVcIlxyXG4gICAgICBbaW5kZXhdPVwidGFiLmluZGV4XCJcclxuICAgICAgW3ByZXNlcnZlQ29udGVudF09XCJ0YWIucHJlc2VydmVDb250ZW50XCJcclxuICAgID5cclxuXHJcbiAgICA8L21yZC10YWItYm9keT5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9kaXY+Il19