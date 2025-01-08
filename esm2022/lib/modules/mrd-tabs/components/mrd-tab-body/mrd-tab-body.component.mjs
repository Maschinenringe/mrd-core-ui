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
                console.log(this.index, 'hide');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXRhYi1ib2R5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtdGFicy9jb21wb25lbnRzL21yZC10YWItYm9keS9tcmQtdGFiLWJvZHkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10YWJzL2NvbXBvbmVudHMvbXJkLXRhYi1ib2R5L21yZC10YWItYm9keS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBNEIsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFXLGdCQUFnQixFQUFFLE1BQU0sRUFBcUIsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdk0sT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7O0FBTS9DLE1BQU0sT0FBTyxnQkFBZ0I7SUFPakI7SUFDK0M7SUFQekQscUVBQXFFO0lBQzdELGFBQWEsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO0lBQzNDLDBGQUEwRjtJQUNsRixXQUFXLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztJQUV6QyxZQUNVLGdCQUFrQyxFQUNhLEtBQTBCO1FBRHpFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDYSxVQUFLLEdBQUwsS0FBSyxDQUFxQjtJQUNoRixDQUFDO0lBRUosNkVBQTZFO0lBQzdFLFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYzthQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbEMsU0FB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QkFBeEIsS0FBSztZQVNjLE1BQU07a0JBQXpCLEtBQUs7WUFTdUMsZUFBZTtrQkFBM0QsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUcxQixTQUFTO2tCQUFsQixNQUFNO1lBQ0csY0FBYztrQkFBdkIsTUFBTTtZQTZCYSxNQUFNO2tCQUF6QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiwgSW5qZWN0LCBmb3J3YXJkUmVmLCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3UmVmLCBib29sZWFuQXR0cmlidXRlLCBPdXRwdXQsIENoYW5nZURldGVjdG9yUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMnO1xyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW21yZFRhYkJvZHlIb3N0XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdFRhYkJvZHlQb3J0YWwgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKiBTdWJzY3JpcHRpb24gdG8gZXZlbnRzIGZvciB3aGVuIHRoZSB0YWIgYm9keSBiZWdpbnMgY2VudGVyaW5nLiAqL1xyXG4gIHByaXZhdGUgX2NlbnRlcmluZ1N1YiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICAvKiogU3Vic2NyaXB0aW9uIHRvIGV2ZW50cyBmb3Igd2hlbiB0aGUgdGFiIGJvZHkgZmluaXNoZXMgbGVhdmluZyBmcm9tIGNlbnRlciBwb3NpdGlvbi4gKi9cclxuICBwcml2YXRlIF9sZWF2aW5nU3ViID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBNcmRUYWJCb2R5Q29tcG9uZW50KSkgcHJpdmF0ZSBfaG9zdDogTXJkVGFiQm9keUNvbXBvbmVudCxcclxuICApIHt9XHJcblxyXG4gIC8qKiBTZXQgaW5pdGlhbCB2aXNpYmlsaXR5IG9yIHNldCB1cCBzdWJzY3JpcHRpb24gZm9yIGNoYW5naW5nIHZpc2liaWxpdHkuICovXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jZW50ZXJpbmdTdWIgPSB0aGlzLl9ob3N0Ll9nb2luZ1RvQWN0aXZlXHJcbiAgICAgIC5waXBlKHN0YXJ0V2l0aCh0aGlzLl9ob3N0LmFjdGl2ZSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKGlzQ2VudGVyaW5nOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzQ2VudGVyaW5nICYmIHRoaXMudmlld0NvbnRhaW5lclJlZi5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5pbnNlcnQodGhpcy5faG9zdC5jb250ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2xlYXZpbmdTdWIgPSB0aGlzLl9ob3N0Ll9pc0hpZGRlbi5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuX2hvc3QucHJlc2VydmVDb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIENsZWFuIHVwIGNlbnRlcmluZyBzdWJzY3JpcHRpb24uICovXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jZW50ZXJpbmdTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuX2xlYXZpbmdTdWIudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC10YWItYm9keScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC10YWItYm9keS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLXRhYi1ib2R5LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZFRhYkJvZHlDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoJ2NvbnRlbnQnKSBwdWJsaWMgc2V0IGNvbnRlbnQodmFsdWU6IFZpZXdSZWYpIHtcclxuICAgIHRoaXMuX2NvbnRlbnQgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbiAgcHVibGljIGdldCBjb250ZW50KCk6IFZpZXdSZWYge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jb250ZW50OiBWaWV3UmVmO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgc2V0IGluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2luZGV4ID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgaW5kZXgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9pbmRleDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHNldCBhY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2FjdGl2ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2FjdGl2ZTogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcHJlc2VydmVDb250ZW50OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgaGlkZVRpbWVvdXQ6IGFueTtcclxuICBAT3V0cHV0KCkgX2lzSGlkZGVuOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIF9nb2luZ1RvQWN0aXZlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHB1YmxpYyBzZXQgdHJhbnNsYXRlKHZhbHVlOiBudW1iZXJ8c3RyaW5nKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IDApIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlkZVRpbWVvdXQpO1xyXG4gICAgICB0aGlzLmhpZGVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2lzSGlkZGVuLmVtaXQodHJ1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pbmRleCwgJ2hpZGUnKVxyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIHRoaXMuX3RyYW5zbGF0ZSA9IHZhbHVlKyclJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmhpZGVUaW1lb3V0KTtcclxuICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgdGhpcy5fZ29pbmdUb0FjdGl2ZS5lbWl0KHRydWUpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl90cmFuc2xhdGUgPSB2YWx1ZSsnJSc7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgdHJhbnNsYXRlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHJhbnNsYXRlO1xyXG4gIH1cclxuICBwcml2YXRlIF90cmFuc2xhdGU6IHN0cmluZyA9ICcwJSc7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgaGlkZGVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9oaWRkZW4gPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbiAgcHVibGljIGdldCBoaWRkZW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faGlkZGVuO1xyXG4gIH1cclxuICBwcml2YXRlIF9oaWRkZW46IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge31cclxufVxyXG4iLCJcclxuPGRpdlxyXG4gIGNsYXNzPVwibXJkLXRhYi1jb250ZW50XCJcclxuICBbbmdTdHlsZV09XCJ7J3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVYKCcrdHJhbnNsYXRlKycpJywgJ2Rpc3BsYXknOiBoaWRkZW4gPyAnbm9uZScgOiAnYmxvY2snfVwiPlxyXG4gIDxuZy10ZW1wbGF0ZSBtcmRUYWJCb2R5SG9zdD48L25nLXRlbXBsYXRlPlxyXG48L2Rpdj5cclxuIl19