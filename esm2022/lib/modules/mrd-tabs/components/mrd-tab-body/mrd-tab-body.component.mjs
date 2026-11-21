import { Component, Directive, Inject, forwardRef, Input, EventEmitter, booleanAttribute, Output, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { Subscription, startWith } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MrdTabBodyComponent_ng_template_1_Template(rf, ctx) { }
const _c0 = function (a0, a1) { return { "transform": a0, "display": a1 }; };
export class MatTabBodyPortal {
    viewContainerRef;
    _host;
    /** Subscription to events for when the tab body begins centering. */
    _centeringSub = Subscription.EMPTY;
    /** Subscription to events for when the tab body finishes leaving from center position. */
    _leavingSub = Subscription.EMPTY;
    constructor(viewContainerRef, _host) {
        this.viewContainerRef = viewContainerRef;
        this._host = _host;
    }
    /** Set initial visibility or set up subscription for changing visibility. */
    ngOnInit() {
        this._centeringSub = this._host._goingToActive
            .pipe(startWith(this._host.active))
            .subscribe((isCentering) => {
            if (isCentering && this.viewContainerRef.length === 0) {
                this.viewContainerRef.insert(this._host.content);
            }
        });
        this._leavingSub = this._host._isHidden.subscribe(() => {
            if (!this._host.preserveContent) {
                this.viewContainerRef.clear();
            }
        });
    }
    /** Clean up centering subscription. */
    ngOnDestroy() {
        this._centeringSub.unsubscribe();
        this._leavingSub.unsubscribe();
    }
    /** @nocollapse */ static ɵfac = function MatTabBodyPortal_Factory(t) { return new (t || MatTabBodyPortal)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(forwardRef(() => MrdTabBodyComponent))); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MatTabBodyPortal, selectors: [["", "mrdTabBodyHost", ""]] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatTabBodyPortal, [{
        type: Directive,
        args: [{
                selector: '[mrdTabBodyHost]'
            }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: MrdTabBodyComponent, decorators: [{
                type: Inject,
                args: [forwardRef(() => MrdTabBodyComponent)]
            }] }]; }, null); })();
export class MrdTabBodyComponent {
    cdr;
    set content(value) {
        this._content = value;
        this.cdr.detectChanges();
    }
    get content() {
        return this._content;
    }
    _content;
    set index(value) {
        this._index = value;
        this.cdr.detectChanges();
    }
    get index() {
        return this._index;
    }
    _index;
    set active(value) {
        this._active = value;
        this.cdr.detectChanges();
    }
    get active() {
        return this._active;
    }
    _active;
    preserveContent = false;
    hoeheNachInhalt = false;
    get imFluss() {
        return this.hoeheNachInhalt && this.active;
    }
    hideTimeout;
    _isHidden = new EventEmitter();
    _goingToActive = new EventEmitter();
    set translate(value) {
        if (value !== 0) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = setTimeout(() => {
                this.hidden = true;
                this._isHidden.emit(true);
                this.cdr.detectChanges();
            }, 1000);
            this._translate = value + '%';
        }
        else {
            clearTimeout(this.hideTimeout);
            this.hidden = false;
            this._goingToActive.emit(true);
            setTimeout(() => {
                this._translate = value + '%';
                this.cdr.detectChanges();
            }, 1);
        }
        this.cdr.detectChanges();
    }
    get translate() {
        return this._translate;
    }
    _translate = '0%';
    set hidden(value) {
        this._hidden = value;
        this.cdr.detectChanges();
    }
    get hidden() {
        return this._hidden;
    }
    _hidden = true;
    constructor(cdr) {
        this.cdr = cdr;
    }
    /** @nocollapse */ static ɵfac = function MrdTabBodyComponent_Factory(t) { return new (t || MrdTabBodyComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdTabBodyComponent, selectors: [["mrd-tab-body"]], hostVars: 2, hostBindings: function MrdTabBodyComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("im-fluss", ctx.imFluss);
        } }, inputs: { content: "content", index: "index", active: "active", preserveContent: ["preserveContent", "preserveContent", booleanAttribute], hoeheNachInhalt: ["hoeheNachInhalt", "hoeheNachInhalt", booleanAttribute], hidden: "hidden" }, outputs: { _isHidden: "_isHidden", _goingToActive: "_goingToActive" }, features: [i0.ɵɵInputTransformsFeature], decls: 2, vars: 4, consts: [[1, "mrd-tab-content", 3, "ngStyle"], ["mrdTabBodyHost", ""]], template: function MrdTabBodyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, MrdTabBodyComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(1, _c0, "translateX(" + ctx.translate + ")", ctx.hidden ? "none" : "block"));
        } }, dependencies: [i1.NgStyle, MatTabBodyPortal], styles: [".mrd-tab-content[_ngcontent-%COMP%]{display:block;position:absolute;inset:0;transition:transform 1s ease-out}.im-fluss[_nghost-%COMP%]{display:block;flex:1 1 100%;min-width:0}.im-fluss[_nghost-%COMP%]   .mrd-tab-content[_ngcontent-%COMP%]{position:relative}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdTabBodyComponent, [{
        type: Component,
        args: [{ selector: 'mrd-tab-body', changeDetection: ChangeDetectionStrategy.OnPush, template: "\r\n<div\r\n  class=\"mrd-tab-content\"\r\n  [ngStyle]=\"{'transform': 'translateX('+translate+')', 'display': hidden ? 'none' : 'block'}\">\r\n  <ng-template mrdTabBodyHost></ng-template>\r\n</div>\r\n", styles: [".mrd-tab-content{display:block;position:absolute;inset:0;transition:transform 1s ease-out}:host(.im-fluss){display:block;flex:1 1 100%;min-width:0}:host(.im-fluss) .mrd-tab-content{position:relative}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { content: [{
            type: Input,
            args: ['content']
        }], index: [{
            type: Input
        }], active: [{
            type: Input
        }], preserveContent: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], hoeheNachInhalt: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], imFluss: [{
            type: HostBinding,
            args: ['class.im-fluss']
        }], _isHidden: [{
            type: Output
        }], _goingToActive: [{
            type: Output
        }], hidden: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXRhYi1ib2R5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtdGFicy9jb21wb25lbnRzL21yZC10YWItYm9keS9tcmQtdGFiLWJvZHkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10YWJzL2NvbXBvbmVudHMvbXJkLXRhYi1ib2R5L21yZC10YWItYm9keS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBNEIsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFXLGdCQUFnQixFQUFFLE1BQU0sRUFBcUIsdUJBQXVCLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BOLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7OztBQU0vQyxNQUFNLE9BQU8sZ0JBQWdCO0lBT2pCO0lBQytDO0lBUHpELHFFQUFxRTtJQUM3RCxhQUFhLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztJQUMzQywwRkFBMEY7SUFDbEYsV0FBVyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFFekMsWUFDVSxnQkFBa0MsRUFDYSxLQUEwQjtRQUR6RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2EsVUFBSyxHQUFMLEtBQUssQ0FBcUI7SUFDaEYsQ0FBQztJQUVKLDZFQUE2RTtJQUM3RSxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWM7YUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFD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QUdQLHVCQUF1QixDQUFDLE1BQU07b0VBSWxCLE9BQU87a0JBQW5DLEtBQUs7bUJBQUMsU0FBUztZQVVJLEtBQUs7a0JBQXhCLEtBQUs7WUFTYyxNQUFNO2tCQUF6QixLQUFLO1lBU3VDLGVBQWU7a0JBQTNELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFUyxlQUFlO2tCQUEzRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBRU0sT0FBTztrQkFBaEQsV0FBVzttQkFBQyxnQkFBZ0I7WUFLbkIsU0FBUztrQkFBbEIsTUFBTTtZQUNHLGNBQWM7a0JBQXZCLE1BQU07WUE0QmEsTUFBTTtrQkFBekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYsIEluamVjdCwgZm9yd2FyZFJlZiwgSW5wdXQsIEV2ZW50RW1pdHRlciwgVmlld1JlZiwgYm9vbGVhbkF0dHJpYnV0ZSwgT3V0cHV0LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMnO1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttcmRUYWJCb2R5SG9zdF0nXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRhYkJvZHlQb3J0YWwgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKiogU3Vic2NyaXB0aW9uIHRvIGV2ZW50cyBmb3Igd2hlbiB0aGUgdGFiIGJvZHkgYmVnaW5zIGNlbnRlcmluZy4gKi9cbiAgcHJpdmF0ZSBfY2VudGVyaW5nU3ViID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAvKiogU3Vic2NyaXB0aW9uIHRvIGV2ZW50cyBmb3Igd2hlbiB0aGUgdGFiIGJvZHkgZmluaXNoZXMgbGVhdmluZyBmcm9tIGNlbnRlciBwb3NpdGlvbi4gKi9cbiAgcHJpdmF0ZSBfbGVhdmluZ1N1YiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IE1yZFRhYkJvZHlDb21wb25lbnQpKSBwcml2YXRlIF9ob3N0OiBNcmRUYWJCb2R5Q29tcG9uZW50LFxuICApIHt9XG5cbiAgLyoqIFNldCBpbml0aWFsIHZpc2liaWxpdHkgb3Igc2V0IHVwIHN1YnNjcmlwdGlvbiBmb3IgY2hhbmdpbmcgdmlzaWJpbGl0eS4gKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fY2VudGVyaW5nU3ViID0gdGhpcy5faG9zdC5fZ29pbmdUb0FjdGl2ZVxuICAgICAgLnBpcGUoc3RhcnRXaXRoKHRoaXMuX2hvc3QuYWN0aXZlKSlcbiAgICAgIC5zdWJzY3JpYmUoKGlzQ2VudGVyaW5nOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmIChpc0NlbnRlcmluZyAmJiB0aGlzLnZpZXdDb250YWluZXJSZWYubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmluc2VydCh0aGlzLl9ob3N0LmNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHRoaXMuX2xlYXZpbmdTdWIgPSB0aGlzLl9ob3N0Ll9pc0hpZGRlbi5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9ob3N0LnByZXNlcnZlQ29udGVudCkge1xuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBDbGVhbiB1cCBjZW50ZXJpbmcgc3Vic2NyaXB0aW9uLiAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jZW50ZXJpbmdTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9sZWF2aW5nU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtcmQtdGFiLWJvZHknLFxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLXRhYi1ib2R5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLXRhYi1ib2R5LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE1yZFRhYkJvZHlDb21wb25lbnQge1xuXG4gIEBJbnB1dCgnY29udGVudCcpIHB1YmxpYyBzZXQgY29udGVudCh2YWx1ZTogVmlld1JlZikge1xuICAgIHRoaXMuX2NvbnRlbnQgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbiAgcHVibGljIGdldCBjb250ZW50KCk6IFZpZXdSZWYge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfY29udGVudDogVmlld1JlZjtcblxuICBASW5wdXQoKSBwdWJsaWMgc2V0IGluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pbmRleCA9IHZhbHVlO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICBwdWJsaWMgZ2V0IGluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2luZGV4O1xuICB9XG4gIHByaXZhdGUgX2luZGV4OiBudW1iZXI7XG5cbiAgQElucHV0KCkgcHVibGljIHNldCBhY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hY3RpdmUgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbiAgcHVibGljIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuICBwcml2YXRlIF9hY3RpdmU6IGJvb2xlYW47XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcHJlc2VydmVDb250ZW50OiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgaG9laGVOYWNoSW5oYWx0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pbS1mbHVzcycpIHB1YmxpYyBnZXQgaW1GbHVzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ob2VoZU5hY2hJbmhhbHQgJiYgdGhpcy5hY3RpdmU7XG4gIH1cblxuICBwcml2YXRlIGhpZGVUaW1lb3V0OiBhbnk7XG4gIEBPdXRwdXQoKSBfaXNIaWRkZW46IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIF9nb2luZ1RvQWN0aXZlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIHNldCB0cmFuc2xhdGUodmFsdWU6IG51bWJlcnxzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgIT09IDApIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmhpZGVUaW1lb3V0KTtcbiAgICAgIHRoaXMuaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLl9pc0hpZGRlbi5lbWl0KHRydWUpO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIHRoaXMuX3RyYW5zbGF0ZSA9IHZhbHVlKyclJztcbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlkZVRpbWVvdXQpO1xuICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2dvaW5nVG9BY3RpdmUuZW1pdCh0cnVlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl90cmFuc2xhdGUgPSB2YWx1ZSsnJSc7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sIDEpO1xuICAgIH1cblxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICBwdWJsaWMgZ2V0IHRyYW5zbGF0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90cmFuc2xhdGU7XG4gIH1cbiAgcHJpdmF0ZSBfdHJhbnNsYXRlOiBzdHJpbmcgPSAnMCUnO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgaGlkZGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGlkZGVuID0gdmFsdWU7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIHB1YmxpYyBnZXQgaGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oaWRkZW47XG4gIH1cbiAgcHJpdmF0ZSBfaGlkZGVuOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxufVxuIiwiXHJcbjxkaXZcclxuICBjbGFzcz1cIm1yZC10YWItY29udGVudFwiXHJcbiAgW25nU3R5bGVdPVwieyd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWCgnK3RyYW5zbGF0ZSsnKScsICdkaXNwbGF5JzogaGlkZGVuID8gJ25vbmUnIDogJ2Jsb2NrJ31cIj5cclxuICA8bmctdGVtcGxhdGUgbXJkVGFiQm9keUhvc3Q+PC9uZy10ZW1wbGF0ZT5cclxuPC9kaXY+XHJcbiJdfQ==