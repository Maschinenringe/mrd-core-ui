import { Directive, Input, TemplateRef, ViewChild, booleanAttribute } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class MrdTabComponent {
    cdr;
    tr;
    _implicitContent;
    set label(value) {
        this._label = value;
        this.cdr.detectChanges();
        this.zustandGeaendert.next();
    }
    get label() {
        return this._label;
    }
    _label;
    /** Gesperrter Tab: Kopf ausgegraut, Klick ohne Wirkung; per Code (`selectedIndex`) bleibt er waehlbar. `*mrdTab="'Label'; disabled: bedingung"` */
    set disabled(value) {
        this._disabled = value;
        this.zustandGeaendert.next();
    }
    get disabled() {
        return this._disabled;
    }
    _disabled = false;
    /** Meldet der (OnPush-)Tab-Gruppe Aenderungen an Beschriftung und Sperre, damit der Kopf aktualisiert wird */
    zustandGeaendert = new Subject();
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
    ngOnDestroy() {
        this.zustandGeaendert.complete();
    }
    /** @nocollapse */ static ɵfac = function MrdTabComponent_Factory(t) { return new (t || MrdTabComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdTabComponent, selectors: [["", "mrdTab", ""]], viewQuery: function MrdTabComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(TemplateRef, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._implicitContent = _t.first);
        } }, inputs: { label: ["mrdTab", "label"], disabled: ["mrdTabDisabled", "disabled", booleanAttribute], preserveContent: ["mrdTabPreserveContent", "preserveContent", booleanAttribute] }, features: [i0.ɵɵInputTransformsFeature] });
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
        }], disabled: [{
            type: Input,
            args: [{ alias: 'mrdTabDisabled', transform: booleanAttribute }]
        }], preserveContent: [{
            type: Input,
            args: [{ alias: 'mrdTabPreserveContent', transform: booleanAttribute }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXRhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLXRhYnMvY29tcG9uZW50cy9tcmQtdGFiL21yZC10YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBcUIsU0FBUyxFQUFtQixLQUFLLEVBQWEsV0FBVyxFQUFFLFNBQVMsRUFBVyxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuSixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQU0vQixNQUFNLE9BQU8sZUFBZTtJQStEaEI7SUFDQztJQTlENkIsZ0JBQWdCLENBQW1CO0lBRTNFLElBQTRCLEtBQUssQ0FBQyxLQUFhO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNPLE1BQU0sQ0FBUztJQUV2QixtSkFBbUo7SUFDbkosSUFBMEUsUUFBUSxDQUFDLEtBQWM7UUFDL0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDTyxTQUFTLEdBQVksS0FBSyxDQUFDO0lBRW5DLDhHQUE4RztJQUM5RixnQkFBZ0IsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQUU5RCxnQkFBZ0IsR0FBZ0MsSUFBSSxDQUFDO0lBRTdELElBQUksT0FBTztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRTtZQUM3RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ25HO1FBQ0QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFXLEtBQUssQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ08sTUFBTSxDQUFTO0lBRXZCLElBQVcsTUFBTSxDQUFDLEtBQWM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFDTyxPQUFPLENBQVU7SUFFbUQsZUFBZSxHQUFZLEtBQUssQ0FBQztJQUc3RyxZQUNVLEdBQXNCLEVBQ3JCLEVBQW9CO1FBRHJCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3JCLE9BQUUsR0FBRixFQUFFLENBQWtCO0lBQzVCLENBQUM7SUFFSixXQUFXO1FBQ1QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25DLENBQUM7NEZBckVVLGVBQWU7NEZBQWYsZUFBZTsyQkFFZixXQUFXOzs7OzRGQWFzQixnQkFBZ0IsaUVBNENWLGdCQUFnQjs7dUZBM0R2RCxlQUFlO2NBSDNCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTthQUNyQjs4RkFHeUMsZ0JBQWdCO2tCQUF2RCxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7WUFFVixLQUFLO2tCQUFoQyxLQUFLO21CQUFDLFFBQVE7WUFXMkQsUUFBUTtrQkFBakYsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUE0Q2UsZUFBZTtrQkFBMUYsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSx1QkFBdUIsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbWJlZGRlZFZpZXdSZWYsIElucHV0LCBPbkRlc3Ryb3ksIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIFZpZXdSZWYsIGJvb2xlYW5BdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXJkVGFiXSdcbn0pXG5leHBvcnQgY2xhc3MgTXJkVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7c3RhdGljOiB0cnVlfSkgX2ltcGxpY2l0Q29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoXCJtcmRUYWJcIikgcHVibGljIHNldCBsYWJlbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGFiZWwgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy56dXN0YW5kR2VhZW5kZXJ0Lm5leHQoKTtcbiAgfVxuICBwdWJsaWMgZ2V0IGxhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICB9XG4gIHByaXZhdGUgX2xhYmVsOiBzdHJpbmc7XG5cbiAgLyoqIEdlc3BlcnJ0ZXIgVGFiOiBLb3BmIGF1c2dlZ3JhdXQsIEtsaWNrIG9obmUgV2lya3VuZzsgcGVyIENvZGUgKGBzZWxlY3RlZEluZGV4YCkgYmxlaWJ0IGVyIHdhZWhsYmFyLiBgKm1yZFRhYj1cIidMYWJlbCc7IGRpc2FibGVkOiBiZWRpbmd1bmdcImAgKi9cbiAgQElucHV0KHthbGlhczogJ21yZFRhYkRpc2FibGVkJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XG4gICAgdGhpcy56dXN0YW5kR2VhZW5kZXJ0Lm5leHQoKTtcbiAgfVxuICBwdWJsaWMgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBNZWxkZXQgZGVyIChPblB1c2gtKVRhYi1HcnVwcGUgQWVuZGVydW5nZW4gYW4gQmVzY2hyaWZ0dW5nIHVuZCBTcGVycmUsIGRhbWl0IGRlciBLb3BmIGFrdHVhbGlzaWVydCB3aXJkICovXG4gIHB1YmxpYyByZWFkb25seSB6dXN0YW5kR2VhZW5kZXJ0OiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBwcml2YXRlIF9lbWJlZGRlZFZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxhbnk+IHwgbnVsbCA9IG51bGw7XG5cbiAgZ2V0IGNvbnRlbnQoKTogVmlld1JlZiB8IG51bGwge1xuICAgIGlmICghdGhpcy5fZW1iZWRkZWRWaWV3UmVmIHx8IHRoaXMuX2VtYmVkZGVkVmlld1JlZi5kZXN0cm95ZWQpIHtcbiAgICAgIHRoaXMuX2VtYmVkZGVkVmlld1JlZiA9IHRoaXMudHIuY3JlYXRlRW1iZWRkZWRWaWV3KHsgJGltcGxpY2l0OiAnQW5ndWxhcicsIGRhdGVOb3c6IG5ldyBEYXRlKCkgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9lbWJlZGRlZFZpZXdSZWY7XG4gIH1cblxuICAvKipcbiAgICogWmVybyBiYXNlZCBpbmRleCBvZiB0aGUgdGFiXG4gICAqXG4gICAqIEBtZW1iZXJvZiBNcmRUYWJDb21wb25lbnRcbiAgICovXG4gIHB1YmxpYyBzZXQgaW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2luZGV4ID0gdmFsdWU7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIHB1YmxpYyBnZXQgaW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faW5kZXg7XG4gIH1cbiAgcHJpdmF0ZSBfaW5kZXg6IG51bWJlcjtcblxuICBwdWJsaWMgc2V0IGFjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FjdGl2ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICBwdWJsaWMgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG4gIHByaXZhdGUgX2FjdGl2ZTogYm9vbGVhbjtcblxuICBASW5wdXQoe2FsaWFzOiAnbXJkVGFiUHJlc2VydmVDb250ZW50Jyx0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcHJlc2VydmVDb250ZW50OiBib29sZWFuID0gZmFsc2U7XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcmVhZG9ubHkgdHI6IFRlbXBsYXRlUmVmPGFueT5cbiAgKSB7fVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuenVzdGFuZEdlYWVuZGVydC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=