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
const _c3 = function (a0, a1) { return { "step-active": a0, "step-invalid": a1 }; };
function MrdStepperComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5, 6);
    i0.ɵɵlistener("click", function MrdStepperComponent_div_1_Template_div_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const step_r2 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.activateStep(step_r2.index)); });
    i0.ɵɵelementStart(3, "div", 7);
    i0.ɵɵelementContainerStart(4);
    i0.ɵɵtext(5);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
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
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(7, _c3, step_r2.active, step_r2.touched && step_r2.mrdStepControl && !step_r2.mrdStepControl.valid));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(step_r2.index + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(step_r2.label);
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
        } }, inputs: { headerHeight: "headerHeight", selectedIndex: "selectedIndex", changeStep: "changeStep", linear: ["linear", "linear", booleanAttribute] }, outputs: { selectedStepChanged: "selectedStepChanged", selectedStepIndexChanged: "selectedStepIndexChanged" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 5, consts: [[1, "mrd-stepper-steps-container", 3, "ngStyle"], ["class", "mrd-stepper-step-container", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "mrd-stepper-content-container"], [4, "ngFor", "ngForOf"], [1, "mrd-stepper-step-container", 3, "ngClass"], [1, "mrd-stepper-step", 3, "ngClass", "click"], ["mrdStepHeader", ""], [1, "mrd-stepper-step-icon"], [1, "mrd-stepper-step-label"], ["class", "mrd-stepper-step-separator", 3, "ngClass", 4, "ngIf"], [1, "mrd-stepper-step-separator", 3, "ngClass"], [3, "content", "active", "index", "preserveContent"]], template: function MrdStepperComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, MrdStepperComponent_div_1_Template, 9, 10, "div", 1);
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
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i2.NgStyle, i3.MrdTabBodyComponent], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;flex:1 1 100%;max-height:100%}.mrd-stepper-steps-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;flex:1 1 100%}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step-container.last-step[_ngcontent-%COMP%]{flex:1 0 fit-content}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step-container[_ngcontent-%COMP%]   .mrd-stepper-step-separator[_ngcontent-%COMP%]{border-bottom:1px solid #000;width:100%}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step-container[_ngcontent-%COMP%]   .mrd-stepper-step-separator.next-step-active[_ngcontent-%COMP%]{border-color:#68b022;border-bottom-width:2px}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;min-width:-moz-fit-content;min-width:fit-content;height:100%;padding:12px 32px;color:gray;font-weight:700}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step.step-active[_ngcontent-%COMP%]:not(.step-invalid){color:#68b022}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step.step-active[_ngcontent-%COMP%]:not(.step-invalid)   .mrd-stepper-step-icon[_ngcontent-%COMP%]{background-color:#68b022}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step.step-invalid[_ngcontent-%COMP%]{color:#be1212}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step.step-invalid[_ngcontent-%COMP%]   .mrd-stepper-step-icon[_ngcontent-%COMP%]{background-color:#be1212}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step[_ngcontent-%COMP%]   .mrd-stepper-step-icon[_ngcontent-%COMP%]{border-radius:50%;background-color:gray;color:#fff;width:24px;height:24px;display:flex;flex-direction:column;align-items:center;justify-content:center}.mrd-stepper-steps-container[_ngcontent-%COMP%]   .mrd-stepper-step[_ngcontent-%COMP%]   .mrd-stepper-step-label[_ngcontent-%COMP%]{margin-left:8px}.mrd-stepper-content-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:1 1 100%;overflow:hidden;position:relative}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdStepperComponent, [{
        type: Component,
        args: [{ selector: 'mrd-stepper', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-stepper-steps-container\" [ngStyle]=\"{'height': headerHeight+'px'}\">\r\n  <div class=\"mrd-stepper-step-container\" [ngClass]=\"{'last-step': i === steps.length - 1}\" *ngFor=\"let step of steps; let i = index;\">\r\n    <div class=\"mrd-stepper-step\" #mrdStepHeader \r\n      [ngClass]=\"{'step-active': step.active, 'step-invalid': step.touched && step.mrdStepControl && !step.mrdStepControl.valid}\" (click)=\"activateStep(step.index)\">\r\n      <div class=\"mrd-stepper-step-icon\">\r\n        <ng-container>{{step.index + 1}}</ng-container>\r\n      </div>\r\n      <div class=\"mrd-stepper-step-label\">{{step.label}}</div>\r\n    </div>\r\n    <div class=\"mrd-stepper-step-separator\" [ngClass]=\"{'next-step-active': activeIndex > i}\" *ngIf=\"i < steps.length - 1\"></div>\r\n  </div>\r\n</div>\r\n<div class=\"mrd-stepper-content-container\">\r\n  <!-- <ng-content></ng-content> -->\r\n  <ng-container *ngFor=\"let tab of steps\">\r\n    <mrd-tab-body\r\n      [content]=\"tab.content\"\r\n      [active]=\"tab.active\"\r\n      [index]=\"tab.index\"\r\n      [preserveContent]=\"tab.preserveContent\"\r\n    >\r\n\r\n    </mrd-tab-body>\r\n  </ng-container>\r\n</div>", styles: [":host{display:flex;flex-direction:column;width:100%;flex:1 1 100%;max-height:100%}.mrd-stepper-steps-container{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.mrd-stepper-steps-container .mrd-stepper-step-container{display:flex;flex-direction:row;align-items:center;flex:1 1 100%}.mrd-stepper-steps-container .mrd-stepper-step-container.last-step{flex:1 0 fit-content}.mrd-stepper-steps-container .mrd-stepper-step-container .mrd-stepper-step-separator{border-bottom:1px solid #000;width:100%}.mrd-stepper-steps-container .mrd-stepper-step-container .mrd-stepper-step-separator.next-step-active{border-color:#68b022;border-bottom-width:2px}.mrd-stepper-steps-container .mrd-stepper-step{display:flex;flex-direction:row;align-items:center;justify-content:center;min-width:-moz-fit-content;min-width:fit-content;height:100%;padding:12px 32px;color:gray;font-weight:700}.mrd-stepper-steps-container .mrd-stepper-step.step-active:not(.step-invalid){color:#68b022}.mrd-stepper-steps-container .mrd-stepper-step.step-active:not(.step-invalid) .mrd-stepper-step-icon{background-color:#68b022}.mrd-stepper-steps-container .mrd-stepper-step.step-invalid{color:#be1212}.mrd-stepper-steps-container .mrd-stepper-step.step-invalid .mrd-stepper-step-icon{background-color:#be1212}.mrd-stepper-steps-container .mrd-stepper-step .mrd-stepper-step-icon{border-radius:50%;background-color:gray;color:#fff;width:24px;height:24px;display:flex;flex-direction:column;align-items:center;justify-content:center}.mrd-stepper-steps-container .mrd-stepper-step .mrd-stepper-step-label{margin-left:8px}.mrd-stepper-content-container{display:flex;flex-direction:row;flex:1 1 100%;overflow:hidden;position:relative}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.Router }, { type: i1.ActivatedRoute }]; }, { steps: [{
            type: ContentChildren,
            args: [MrdStepComponent]
        }], stepBodys: [{
            type: ViewChildren,
            args: [MrdTabBodyComponent]
        }], stepHeader: [{
            type: ViewChildren,
            args: ['mrdStepHeader']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXN0ZXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1zdGVwcGVyL2NvbXBvbmVudHMvbXJkLXN0ZXBwZXIvbXJkLXN0ZXBwZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1zdGVwcGVyL2NvbXBvbmVudHMvbXJkLXN0ZXBwZXIvbXJkLXN0ZXBwZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLGVBQWUsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMU0sT0FBTyxFQUF5QixVQUFVLEVBQW1CLG1CQUFtQixFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN2RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7SUNNOUQsMEJBQTZIOzs7O0lBQXJGLCtFQUFpRDs7Ozs7O0lBUjNGLDhCQUFxSSxnQkFBQTtJQUVMLHdOQUFTLGVBQUEsa0NBQXdCLENBQUEsSUFBQztJQUM5Siw4QkFBbUM7SUFDakMsNkJBQWM7SUFBQSxZQUFrQjtJQUFBLDBCQUFlO0lBQ2pELGlCQUFNO0lBQ04sOEJBQW9DO0lBQUEsWUFBYztJQUFBLGlCQUFNLEVBQUE7SUFFMUQsMEVBQTZIO0lBQy9ILGlCQUFNOzs7OztJQVRrQyxzRkFBaUQ7SUFFckYsZUFBMkg7SUFBM0gsZ0pBQTJIO0lBRTNHLGVBQWtCO0lBQWxCLHVDQUFrQjtJ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RixxRUFTTTtZQUNSLGlCQUFNO1lBQ04sOEJBQTJDO1lBRXpDLHNGQVNlO1lBQ2pCLGlCQUFNOztZQXhCbUMsNkVBQXlDO1lBQzJCLGVBQVU7WUFBVixtQ0FBVTtZQWF2RixlQUFRO1lBQVIsbUNBQVE7Ozt1RkREM0IsbUJBQW1CO2NBTi9CLFNBQVM7MkJBQ0UsYUFBYSxtQkFHTix1QkFBdUIsQ0FBQyxNQUFNO3NIQUlaLEtBQUs7a0JBQXZDLGVBQWU7bUJBQUMsZ0JBQWdCO1lBQ0UsU0FBUztrQkFBM0MsWUFBWTttQkFBQyxtQkFBbUI7WUFDRixVQUFVO2tCQUF4QyxZQUFZO21CQUFDLGVBQWU7WUFFVCxZQUFZO2tCQUEvQixLQUFLO1lBU2dCLGFBQWE7a0JBQWhDLEtBQUs7WUFVVSxVQUFVO2tCQUF6QixLQUFLO1lBRXVDLE1BQU07a0JBQWxELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFbkIsbUJBQW1CO2tCQUFuQyxNQUFNO1lBQ1Usd0JBQXdCO2tCQUF4QyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgYm9vbGVhbkF0dHJpYnV0ZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wsIEJhc2VPYmplY3QsIE9ic2VydmFibGVWYWx1ZSwgU3Vic2NyaXB0aW9uSGFuZGxlciwgVXRpbCB9IGZyb20gJ21yZC1jb3JlJztcclxuaW1wb3J0IHsgTXJkVGFiQm9keUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21yZC10YWJzL2NvbXBvbmVudHMvbXJkLXRhYi1ib2R5L21yZC10YWItYm9keS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNcmRTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi4vbXJkLXN0ZXAvbXJkLXN0ZXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1yZFRhYkNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21yZC10YWJzL2NvbXBvbmVudHMvbXJkLXRhYi9tcmQtdGFiLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1zdGVwcGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLXN0ZXBwZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC1zdGVwcGVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZFN0ZXBwZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlT2JqZWN0IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdHtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihNcmRTdGVwQ29tcG9uZW50KSBzdGVwczogUXVlcnlMaXN0PE1yZFN0ZXBDb21wb25lbnQ+O1xyXG4gIEBWaWV3Q2hpbGRyZW4oTXJkVGFiQm9keUNvbXBvbmVudCkgc3RlcEJvZHlzOiBRdWVyeUxpc3Q8TXJkVGFiQm9keUNvbXBvbmVudD47XHJcbiAgQFZpZXdDaGlsZHJlbignbXJkU3RlcEhlYWRlcicpIHN0ZXBIZWFkZXI6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHNldCBoZWFkZXJIZWlnaHQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLl9oZWFkZXJIZWlnaHQgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBoZWFkZXJIZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2hlYWRlckhlaWdodDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2hlYWRlckhlaWdodDogbnVtYmVyO1xyXG4gIFxyXG4gICAgQElucHV0KCkgcHVibGljIHNldCBzZWxlY3RlZEluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmFjdGl2YXRlU3RlcCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBudW1iZXI7XHJcblxyXG4gICAgQElucHV0KCkgcHVibGljIGNoYW5nZVN0ZXA6IE9ic2VydmFibGVWYWx1ZTxudW1iZXI+O1xyXG5cclxuICAgIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGxpbmVhcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0ZWRTdGVwQ2hhbmdlZDogRXZlbnRFbWl0dGVyPE1yZFN0ZXBDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBzZWxlY3RlZFN0ZXBJbmRleENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHB1YmxpYyBhY3RpdmVJbmRleDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBhY3RpdmVTdGVwOiBNcmRTdGVwQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBhY3RpdmVTdGVwQm9keTogTXJkVGFiQm9keUNvbXBvbmVudDtcclxuICBcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgICApIHtcclxuICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuc3RlcHMuZm9yRWFjaCgodGFiOiBNcmRTdGVwQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdGFiLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5jaGFuZ2VTdGVwKSkge1xyXG4gICAgICAgIHRoaXMud2F0Y2godGhpcy5jaGFuZ2VTdGVwLmNoYW5nZWQsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2YXRlU3RlcChpbmRleCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmNoYW5nZVN0ZXAudmFsdWUpKSB7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2YXRlU3RlcCh0aGlzLmNoYW5nZVN0ZXAudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5zZWxlY3RlZEluZGV4KSAmJiB0aGlzLnNlbGVjdGVkSW5kZXggIT09IHRoaXMuYWN0aXZlSW5kZXgpIHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlU3RlcCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC8vIGlmICh0aGlzLnF1ZXJ5UGFyYW1ldGVyQWN0aXZlKSB7XHJcbiAgICAgIC8vICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gICAgICAvLyAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHBhcmFtc1t0aGlzLnF1ZXJ5UGFyYW1ldGVyQWN0aXZlXSkpIHtcclxuICAgICAgLy8gICAgICAgbGV0IGluZGV4ID0gcGFyc2VJbnQocGFyYW1zW3RoaXMucXVlcnlQYXJhbWV0ZXJBY3RpdmVdKTtcclxuICAgICAgLy8gICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLnRhYnMubGVuZ3RoKSB7XHJcbiAgICAgIC8vICAgICAgICAgdGhpcy5hY3RpdmF0ZVN0ZXAoaW5kZXgpO1xyXG4gICAgICAvLyAgICAgICB9XHJcbiAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAvLyAgICAgICB0aGlzLmFjdGl2YXRlU3RlcCgwKTtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gICB9KTtcclxuICAgICAgLyp9IGVsc2UqLyBpZiAoIVV0aWwuaXNEZWZpbmVkKHRoaXMuYWN0aXZlSW5kZXgpKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZVN0ZXAoMCk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICBwdWJsaWMgYWN0aXZhdGVTdGVwKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgaWYgKHRoaXMubGluZWFyICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuYWN0aXZlU3RlcCkgJiYgaW5kZXggPiB0aGlzLmFjdGl2ZUluZGV4ICYmICF0aGlzLmFjdGl2ZVN0ZXAudmFsaWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuYWN0aXZlSW5kZXgpICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuYWN0aXZlU3RlcCkpIHtcclxuICAgICAgICBpZiAoaW5kZXggPT09IHRoaXMuYWN0aXZlSW5kZXgpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluZGV4ID4gdGhpcy5hY3RpdmVJbmRleCkge1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVTdGVwQm9keS50cmFuc2xhdGUgPSAtMTAwO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVTdGVwLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5kZXggPCB0aGlzLmFjdGl2ZUluZGV4KSB7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZVN0ZXBCb2R5LnRyYW5zbGF0ZSA9IDEwMDtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlU3RlcC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuc3RlcEJvZHlzKSkge1xyXG4gICAgICAgIHRoaXMuc3RlcEJvZHlzLmZvckVhY2goKHRhYjogTXJkVGFiQm9keUNvbXBvbmVudCwgaTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaSA8IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHRhYi50cmFuc2xhdGUgPSAtMTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGkgPiBpbmRleCkge1xyXG4gICAgICAgICAgICB0YWIudHJhbnNsYXRlID0gMTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAgIGxldCB0YWJCb2R5ID0gdGhpcy5zdGVwQm9keXMuZ2V0KGluZGV4KTtcclxuICAgICAgICBsZXQgdGFiID0gdGhpcy5zdGVwcy5nZXQoaW5kZXgpO1xyXG4gIFxyXG4gICAgICAgIC8vIEZyYWcgbWljaCBuaWNodCB3aWVzbywgYWJlciB3ZW5uIGRpZSBUYWJzIG5pY2h0IMO8YmVyIGRpZSBTdGFuZGFyZC1IZWFkZXIsIHNvbmRlcm4gw7xiZXJcclxuICAgICAgICAvLyBzZWxlY3RlZEluZGV4IG9kZXIgY2hhbmdlVGFiIGdlc2V0enQgd2VyZGVuLCBkYW5uIGlzdCBkZXIgQ29udGVudCBkZXMgVGFiQm9keXMgbWFuY2htYWwgZGVzdHJveWVkLlxyXG4gICAgICAgIC8vIERlc2hhbGIgc2V0emVuIHdpciBpaG4gaGllciB3aWVkZXIgYXVmIGRlbiBDb250ZW50IGRlcyBUYWJzLCBkZXIgaW1tZXIgZnVua3Rpb25pZXJ0LlxyXG4gICAgICAgIGlmICghdGFiQm9keS5jb250ZW50IHx8IHRhYkJvZHkuY29udGVudC5kZXN0cm95ZWQpIHtcclxuICAgICAgICAgIHRhYkJvZHkuY29udGVudCA9IHRhYi5jb250ZW50O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICB0YWIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0YWJCb2R5LnRyYW5zbGF0ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuYWN0aXZlU3RlcEJvZHkgPSB0YWJCb2R5O1xyXG4gICAgICAgIHRoaXMuYWN0aXZlU3RlcCA9IHRhYjtcclxuICBcclxuICAgICAgICAvLyBpZiAodGhpcy5xdWVyeVBhcmFtZXRlckFjdGl2ZSkge1xyXG4gICAgICAgIC8vICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW10sIHtcclxuICAgICAgICAvLyAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAvLyAgICAgICBbdGhpcy5xdWVyeVBhcmFtZXRlckFjdGl2ZV06IGluZGV4XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZSdcclxuICAgICAgICAvLyAgIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICBcclxuICAgICAgICAvLyBpZiAoIXRoaXMubm9IZWFkZXIpIHtcclxuICAgICAgICAgIC8vIGxldCBoZWFkZXIgPSB0aGlzLnN0ZXBIZWFkZXIuZ2V0KGluZGV4KTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTdGVwQ2hhbmdlZC5lbWl0KHRhYik7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFN0ZXBJbmRleENoYW5nZWQuZW1pdChpbmRleCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJtcmQtc3RlcHBlci1zdGVwcy1jb250YWluZXJcIiBbbmdTdHlsZV09XCJ7J2hlaWdodCc6IGhlYWRlckhlaWdodCsncHgnfVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJtcmQtc3RlcHBlci1zdGVwLWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cInsnbGFzdC1zdGVwJzogaSA9PT0gc3RlcHMubGVuZ3RoIC0gMX1cIiAqbmdGb3I9XCJsZXQgc3RlcCBvZiBzdGVwczsgbGV0IGkgPSBpbmRleDtcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtcmQtc3RlcHBlci1zdGVwXCIgI21yZFN0ZXBIZWFkZXIgXHJcbiAgICAgIFtuZ0NsYXNzXT1cInsnc3RlcC1hY3RpdmUnOiBzdGVwLmFjdGl2ZSwgJ3N0ZXAtaW52YWxpZCc6IHN0ZXAudG91Y2hlZCAmJiBzdGVwLm1yZFN0ZXBDb250cm9sICYmICFzdGVwLm1yZFN0ZXBDb250cm9sLnZhbGlkfVwiIChjbGljayk9XCJhY3RpdmF0ZVN0ZXAoc3RlcC5pbmRleClcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1yZC1zdGVwcGVyLXN0ZXAtaWNvblwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXI+e3tzdGVwLmluZGV4ICsgMX19PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibXJkLXN0ZXBwZXItc3RlcC1sYWJlbFwiPnt7c3RlcC5sYWJlbH19PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtcmQtc3RlcHBlci1zdGVwLXNlcGFyYXRvclwiIFtuZ0NsYXNzXT1cInsnbmV4dC1zdGVwLWFjdGl2ZSc6IGFjdGl2ZUluZGV4ID4gaX1cIiAqbmdJZj1cImkgPCBzdGVwcy5sZW5ndGggLSAxXCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwibXJkLXN0ZXBwZXItY29udGVudC1jb250YWluZXJcIj5cclxuICA8IS0tIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gLS0+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgdGFiIG9mIHN0ZXBzXCI+XHJcbiAgICA8bXJkLXRhYi1ib2R5XHJcbiAgICAgIFtjb250ZW50XT1cInRhYi5jb250ZW50XCJcclxuICAgICAgW2FjdGl2ZV09XCJ0YWIuYWN0aXZlXCJcclxuICAgICAgW2luZGV4XT1cInRhYi5pbmRleFwiXHJcbiAgICAgIFtwcmVzZXJ2ZUNvbnRlbnRdPVwidGFiLnByZXNlcnZlQ29udGVudFwiXHJcbiAgICA+XHJcblxyXG4gICAgPC9tcmQtdGFiLWJvZHk+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvZGl2PiJdfQ==