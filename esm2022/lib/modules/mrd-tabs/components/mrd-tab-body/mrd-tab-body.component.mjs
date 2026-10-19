import { Component, Directive, Inject, forwardRef, Input, EventEmitter, booleanAttribute, Output, ChangeDetectionStrategy } from '@angular/core';
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
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdTabBodyComponent, selectors: [["mrd-tab-body"]], inputs: { content: "content", index: "index", active: "active", preserveContent: ["preserveContent", "preserveContent", booleanAttribute], hidden: "hidden" }, outputs: { _isHidden: "_isHidden", _goingToActive: "_goingToActive" }, features: [i0.ɵɵInputTransformsFeature], decls: 2, vars: 4, consts: [[1, "mrd-tab-content", 3, "ngStyle"], ["mrdTabBodyHost", ""]], template: function MrdTabBodyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, MrdTabBodyComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(1, _c0, "translateX(" + ctx.translate + ")", ctx.hidden ? "none" : "block"));
        } }, dependencies: [i1.NgStyle, MatTabBodyPortal], styles: [".mrd-tab-content[_ngcontent-%COMP%]{display:block;position:absolute;inset:0;transition:transform 1s ease-out}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdTabBodyComponent, [{
        type: Component,
        args: [{ selector: 'mrd-tab-body', changeDetection: ChangeDetectionStrategy.OnPush, template: "\r\n<div\r\n  class=\"mrd-tab-content\"\r\n  [ngStyle]=\"{'transform': 'translateX('+translate+')', 'display': hidden ? 'none' : 'block'}\">\r\n  <ng-template mrdTabBodyHost></ng-template>\r\n</div>\r\n", styles: [".mrd-tab-content{display:block;position:absolute;inset:0;transition:transform 1s ease-out}\n"] }]
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
        }], _isHidden: [{
            type: Output
        }], _goingToActive: [{
            type: Output
        }], hidden: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXRhYi1ib2R5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtdGFicy9jb21wb25lbnRzL21yZC10YWItYm9keS9tcmQtdGFiLWJvZHkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10YWJzL2NvbXBvbmVudHMvbXJkLXRhYi1ib2R5L21yZC10YWItYm9keS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBNEIsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFXLGdCQUFnQixFQUFFLE1BQU0sRUFBcUIsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdk0sT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7O0FBTS9DLE1BQU0sT0FBTyxnQkFBZ0I7SUFPakI7SUFDK0M7SUFQekQscUVBQXFFO0lBQzdELGFBQWEsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO0lBQzNDLDBGQUEwRjtJQUNsRixXQUFXLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztJQUV6QyxZQUNVLGdCQUFrQyxFQUNhLEtBQTBCO1FBRHpFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDYSxVQUFLLEdBQUwsS0FBSyxDQUFxQjtJQUNoRixDQUFDO0lBRUosNkVBQTZFO0lBQzdFLFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYzthQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbEMsU0FB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RUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFHMUIsU0FBUztrQkFBbEIsTUFBTTtZQUNHLGNBQWM7a0JBQXZCLE1BQU07WUE0QmEsTUFBTTtrQkFBekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYsIEluamVjdCwgZm9yd2FyZFJlZiwgSW5wdXQsIEV2ZW50RW1pdHRlciwgVmlld1JlZiwgYm9vbGVhbkF0dHJpYnV0ZSwgT3V0cHV0LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcyc7XG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21yZFRhYkJvZHlIb3N0XSdcbn0pXG5leHBvcnQgY2xhc3MgTWF0VGFiQm9keVBvcnRhbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKiBTdWJzY3JpcHRpb24gdG8gZXZlbnRzIGZvciB3aGVuIHRoZSB0YWIgYm9keSBiZWdpbnMgY2VudGVyaW5nLiAqL1xuICBwcml2YXRlIF9jZW50ZXJpbmdTdWIgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIC8qKiBTdWJzY3JpcHRpb24gdG8gZXZlbnRzIGZvciB3aGVuIHRoZSB0YWIgYm9keSBmaW5pc2hlcyBsZWF2aW5nIGZyb20gY2VudGVyIHBvc2l0aW9uLiAqL1xuICBwcml2YXRlIF9sZWF2aW5nU3ViID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gTXJkVGFiQm9keUNvbXBvbmVudCkpIHByaXZhdGUgX2hvc3Q6IE1yZFRhYkJvZHlDb21wb25lbnQsXG4gICkge31cblxuICAvKiogU2V0IGluaXRpYWwgdmlzaWJpbGl0eSBvciBzZXQgdXAgc3Vic2NyaXB0aW9uIGZvciBjaGFuZ2luZyB2aXNpYmlsaXR5LiAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jZW50ZXJpbmdTdWIgPSB0aGlzLl9ob3N0Ll9nb2luZ1RvQWN0aXZlXG4gICAgICAucGlwZShzdGFydFdpdGgodGhpcy5faG9zdC5hY3RpdmUpKVxuICAgICAgLnN1YnNjcmliZSgoaXNDZW50ZXJpbmc6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYgKGlzQ2VudGVyaW5nICYmIHRoaXMudmlld0NvbnRhaW5lclJlZi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuaW5zZXJ0KHRoaXMuX2hvc3QuY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5fbGVhdmluZ1N1YiA9IHRoaXMuX2hvc3QuX2lzSGlkZGVuLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2hvc3QucHJlc2VydmVDb250ZW50KSB7XG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIENsZWFuIHVwIGNlbnRlcmluZyBzdWJzY3JpcHRpb24uICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2NlbnRlcmluZ1N1Yi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2xlYXZpbmdTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yZC10YWItYm9keScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtdGFiLWJvZHkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tcmQtdGFiLWJvZHkuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTXJkVGFiQm9keUNvbXBvbmVudCB7XG5cbiAgQElucHV0KCdjb250ZW50JykgcHVibGljIHNldCBjb250ZW50KHZhbHVlOiBWaWV3UmVmKSB7XG4gICAgdGhpcy5fY29udGVudCA9IHZhbHVlO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICBwdWJsaWMgZ2V0IGNvbnRlbnQoKTogVmlld1JlZiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7XG4gIH1cblxuICBwcml2YXRlIF9jb250ZW50OiBWaWV3UmVmO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgaW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2luZGV4ID0gdmFsdWU7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIHB1YmxpYyBnZXQgaW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faW5kZXg7XG4gIH1cbiAgcHJpdmF0ZSBfaW5kZXg6IG51bWJlcjtcblxuICBASW5wdXQoKSBwdWJsaWMgc2V0IGFjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FjdGl2ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICBwdWJsaWMgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG4gIHByaXZhdGUgX2FjdGl2ZTogYm9vbGVhbjtcblxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBwcmVzZXJ2ZUNvbnRlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGhpZGVUaW1lb3V0OiBhbnk7XG4gIEBPdXRwdXQoKSBfaXNIaWRkZW46IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIF9nb2luZ1RvQWN0aXZlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIHNldCB0cmFuc2xhdGUodmFsdWU6IG51bWJlcnxzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgIT09IDApIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmhpZGVUaW1lb3V0KTtcbiAgICAgIHRoaXMuaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLl9pc0hpZGRlbi5lbWl0KHRydWUpO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIHRoaXMuX3RyYW5zbGF0ZSA9IHZhbHVlKyclJztcbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlkZVRpbWVvdXQpO1xuICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2dvaW5nVG9BY3RpdmUuZW1pdCh0cnVlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl90cmFuc2xhdGUgPSB2YWx1ZSsnJSc7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sIDEpO1xuICAgIH1cblxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICBwdWJsaWMgZ2V0IHRyYW5zbGF0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90cmFuc2xhdGU7XG4gIH1cbiAgcHJpdmF0ZSBfdHJhbnNsYXRlOiBzdHJpbmcgPSAnMCUnO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgaGlkZGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGlkZGVuID0gdmFsdWU7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIHB1YmxpYyBnZXQgaGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oaWRkZW47XG4gIH1cbiAgcHJpdmF0ZSBfaGlkZGVuOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxufVxuIiwiXHJcbjxkaXZcclxuICBjbGFzcz1cIm1yZC10YWItY29udGVudFwiXHJcbiAgW25nU3R5bGVdPVwieyd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWCgnK3RyYW5zbGF0ZSsnKScsICdkaXNwbGF5JzogaGlkZGVuID8gJ25vbmUnIDogJ2Jsb2NrJ31cIj5cclxuICA8bmctdGVtcGxhdGUgbXJkVGFiQm9keUhvc3Q+PC9uZy10ZW1wbGF0ZT5cclxuPC9kaXY+XHJcbiJdfQ==