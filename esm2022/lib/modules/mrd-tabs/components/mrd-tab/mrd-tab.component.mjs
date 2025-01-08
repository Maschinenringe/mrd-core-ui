import { Directive, Input, TemplateRef, ViewChild, booleanAttribute } from '@angular/core';
import * as i0 from "@angular/core";
export class MrdTabComponent {
    cdr;
    tr;
    _implicitContent;
    set label(value) {
        this._label = value;
        this.cdr.detectChanges();
    }
    get label() {
        return this._label;
    }
    _label;
    _embeddedViewRef = null;
    get content() {
        if (!this._embeddedViewRef || this._embeddedViewRef.destroyed) {
            this._embeddedViewRef = this.tr.createEmbeddedView({ $implicit: 'Angular', dateNow: new Date() });
        }
        return this._embeddedViewRef;
    }
    /**
     * Zero based index of the tab
     *
     * @memberof MrdTabComponent
     */
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
    constructor(cdr, tr) {
        this.cdr = cdr;
        this.tr = tr;
    }
    /** @nocollapse */ static ɵfac = function MrdTabComponent_Factory(t) { return new (t || MrdTabComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdTabComponent, selectors: [["", "mrdTab", ""]], viewQuery: function MrdTabComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(TemplateRef, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._implicitContent = _t.first);
        } }, inputs: { label: ["mrdTab", "label"], preserveContent: ["mrdTabPreserveContent", "preserveContent", booleanAttribute] }, features: [i0.ɵɵInputTransformsFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdTabComponent, [{
        type: Directive,
        args: [{
                selector: '[mrdTab]'
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.TemplateRef }]; }, { _implicitContent: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }], label: [{
            type: Input,
            args: ["mrdTab"]
        }], preserveContent: [{
            type: Input,
            args: [{ alias: 'mrdTabPreserveContent', transform: booleanAttribute }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXRhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLXRhYnMvY29tcG9uZW50cy9tcmQtdGFiL21yZC10YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBcUIsU0FBUyxFQUFtQixLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBVyxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNeEksTUFBTSxPQUFPLGVBQWU7SUFpRGhCO0lBQ0M7SUFoRDZCLGdCQUFnQixDQUFtQjtJQUUzRSxJQUE0QixLQUFLLENBQUMsS0FBYTtRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNPLE1BQU0sQ0FBUztJQUVmLGdCQUFnQixHQUFnQyxJQUFJLENBQUM7SUFFN0QsSUFBSSxPQUFPO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFO1lBQzdELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDbkc7UUFDRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQVcsS0FBSyxDQUFDLEtBQWE7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDTyxNQUFNLENBQVM7SUFFdkIsSUFBVyxNQUFNLENBQUMsS0FBYztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUNPLE9BQU8sQ0FBVTtJQUVtRCxlQUFlLEdBQVksS0FBSyxDQUFDO0lBRzdHLFlBQ1UsR0FBc0IsRUFDckIsRUFBb0I7UUFEckIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDckIsT0FBRSxHQUFGLEVBQUUsQ0FBa0I7SUFDNUIsQ0FBQzs0RkFuRE8sZUFBZTs0RkFBZixlQUFlOzJCQUVmLFdBQVc7Ozs7aUhBMkM0QixnQkFBZ0I7O3VGQTdDdkQsZUFBZTtjQUgzQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7YUFDckI7OEZBR3lDLGdCQUFnQjtrQkFBdkQsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO1lBRVYsS0FBSztrQkFBaEMsS0FBSzttQkFBQyxRQUFRO1lBeUM2RCxlQUFlO2tCQUExRixLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLHVCQUF1QixFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVtYmVkZGVkVmlld1JlZiwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIFZpZXdSZWYsIGJvb2xlYW5BdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttcmRUYWJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkVGFiQ29tcG9uZW50IHtcclxuXHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwge3N0YXRpYzogdHJ1ZX0pIF9pbXBsaWNpdENvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dChcIm1yZFRhYlwiKSBwdWJsaWMgc2V0IGxhYmVsKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgbGFiZWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9sYWJlbDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfbGFiZWw6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBfZW1iZWRkZWRWaWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8YW55PiB8IG51bGwgPSBudWxsO1xyXG5cclxuICBnZXQgY29udGVudCgpOiBWaWV3UmVmIHwgbnVsbCB7XHJcbiAgICBpZiAoIXRoaXMuX2VtYmVkZGVkVmlld1JlZiB8fCB0aGlzLl9lbWJlZGRlZFZpZXdSZWYuZGVzdHJveWVkKSB7XHJcbiAgICAgIHRoaXMuX2VtYmVkZGVkVmlld1JlZiA9IHRoaXMudHIuY3JlYXRlRW1iZWRkZWRWaWV3KHsgJGltcGxpY2l0OiAnQW5ndWxhcicsIGRhdGVOb3c6IG5ldyBEYXRlKCkgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fZW1iZWRkZWRWaWV3UmVmO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogWmVybyBiYXNlZCBpbmRleCBvZiB0aGUgdGFiXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkVGFiQ29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIHNldCBpbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9pbmRleCA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IGluZGV4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5kZXg7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2luZGV4OiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBzZXQgYWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9hY3RpdmUgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbiAgcHVibGljIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xyXG4gIH1cclxuICBwcml2YXRlIF9hY3RpdmU6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCh7YWxpYXM6ICdtcmRUYWJQcmVzZXJ2ZUNvbnRlbnQnLHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBwcmVzZXJ2ZUNvbnRlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcmVhZG9ubHkgdHI6IFRlbXBsYXRlUmVmPGFueT5cclxuICApIHt9XHJcbn1cclxuIl19