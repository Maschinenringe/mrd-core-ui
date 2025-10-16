import { Directive, Input, TemplateRef, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
export class MrdStepComponent {
    cdr;
    tr;
    _implicitContent;
    set label(value) {
        this._label = value;
    }
    get label() {
        return this._label;
    }
    _label;
    mrdStepControl;
    _embeddedViewRef = null;
    get content() {
        if (!this._embeddedViewRef || this._embeddedViewRef.destroyed) {
            this._embeddedViewRef = this.tr.createEmbeddedView({ $implicit: 'Angular', dateNow: new Date() });
        }
        return this._embeddedViewRef;
    }
    /**
     * Zero based index of the step
     *
     * @memberof MrdStepComponent
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
        if (this._active && !value) {
            this._touched = true;
        }
        this._active = value;
        this.cdr.detectChanges();
    }
    get active() {
        return this._active;
    }
    _active;
    // @Input({alias: 'mrdTabPreserveContent',transform: booleanAttribute}) public preserveContent: boolean = false;
    get valid() {
        return !this.mrdStepControl || this.mrdStepControl.valid;
    }
    get touched() {
        return this._touched;
    }
    _touched = false;
    constructor(cdr, tr) {
        this.cdr = cdr;
        this.tr = tr;
    }
    /** @nocollapse */ static ɵfac = function MrdStepComponent_Factory(t) { return new (t || MrdStepComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdStepComponent, selectors: [["", "mrdStep", ""]], viewQuery: function MrdStepComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(TemplateRef, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._implicitContent = _t.first);
        } }, inputs: { label: ["mrdStep", "label"], mrdStepControl: "mrdStepControl" } });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdStepComponent, [{
        type: Directive,
        args: [{
                selector: '[mrdStep]'
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.TemplateRef }]; }, { _implicitContent: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }], label: [{
            type: Input,
            args: ['mrdStep']
        }], mrdStepControl: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1zdGVwcGVyL2NvbXBvbmVudHMvbXJkLXN0ZXAvbXJkLXN0ZXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBeUUsU0FBUyxFQUFvQixLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBVyxNQUFNLGVBQWUsQ0FBQzs7QUFNM0ssTUFBTSxPQUFPLGdCQUFnQjtJQTZEakI7SUFDQztJQTVENkIsZ0JBQWdCLENBQW1CO0lBRTNFLElBQTZCLEtBQUssQ0FBQyxLQUFhO1FBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNPLE1BQU0sQ0FBUztJQUVQLGNBQWMsQ0FBd0I7SUFFOUMsZ0JBQWdCLEdBQWdDLElBQUksQ0FBQztJQUU3RCxJQUFJLE9BQU87UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7WUFDN0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNuRztRQUNELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBVyxLQUFLLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNPLE1BQU0sQ0FBUztJQUV2QixJQUFXLE1BQU0sQ0FBQyxLQUFjO1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRTtZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ08sT0FBTyxDQUFVO0lBRXpCLGdIQUFnSDtJQUVoSCxJQUFXLEtBQUs7UUFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztJQUMzRCxDQUFDO0lBRUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ08sUUFBUSxHQUFZLEtBQUssQ0FBQztJQUVsQyxZQUNVLEdBQXNCLEVBQ3JCLEVBQW9CO1FBRHJCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3JCLE9BQUUsR0FBRixFQUFFLENBQWtCO0lBQzVCLENBQUM7NkZBL0RPLGdCQUFnQjs0RkFBaEIsZ0JBQWdCOzJCQUVoQixXQUFXOzs7Ozs7dUZBRlgsZ0JBQWdCO2NBSDVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsV0FBVzthQUN0Qjs4RkFHeUMsZ0JBQWdCO2tCQUF2RCxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7WUFFVCxLQUFLO2tCQUFqQyxLQUFLO21CQUFDLFNBQVM7WUFRQSxjQUFjO2tCQUE3QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsICBDb250ZW50Q2hpbGQsICBEaXJlY3RpdmUsICBFbWJlZGRlZFZpZXdSZWYsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBWaWV3UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB9IGZyb20gJ21yZC1jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW21yZFN0ZXBdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkU3RlcENvbXBvbmVudCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHtzdGF0aWM6IHRydWV9KSBfaW1wbGljaXRDb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoJ21yZFN0ZXAnKSBwdWJsaWMgc2V0IGxhYmVsKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgbGFiZWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9sYWJlbDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfbGFiZWw6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgcHVibGljIG1yZFN0ZXBDb250cm9sOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2w7XHJcblxyXG4gIHByaXZhdGUgX2VtYmVkZGVkVmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPGFueT4gfCBudWxsID0gbnVsbDtcclxuXHJcbiAgZ2V0IGNvbnRlbnQoKTogVmlld1JlZiB8IG51bGwge1xyXG4gICAgaWYgKCF0aGlzLl9lbWJlZGRlZFZpZXdSZWYgfHwgdGhpcy5fZW1iZWRkZWRWaWV3UmVmLmRlc3Ryb3llZCkge1xyXG4gICAgICB0aGlzLl9lbWJlZGRlZFZpZXdSZWYgPSB0aGlzLnRyLmNyZWF0ZUVtYmVkZGVkVmlldyh7ICRpbXBsaWNpdDogJ0FuZ3VsYXInLCBkYXRlTm93OiBuZXcgRGF0ZSgpIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2VtYmVkZGVkVmlld1JlZjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFplcm8gYmFzZWQgaW5kZXggb2YgdGhlIHN0ZXBcclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRTdGVwQ29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIHNldCBpbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9pbmRleCA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IGluZGV4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5kZXg7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2luZGV4OiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBzZXQgYWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5fYWN0aXZlICYmICF2YWx1ZSkge1xyXG4gICAgICB0aGlzLl90b3VjaGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuX2FjdGl2ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2FjdGl2ZTogYm9vbGVhbjtcclxuXHJcbiAgLy8gQElucHV0KHthbGlhczogJ21yZFRhYlByZXNlcnZlQ29udGVudCcsdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHByZXNlcnZlQ29udGVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLm1yZFN0ZXBDb250cm9sIHx8IHRoaXMubXJkU3RlcENvbnRyb2wudmFsaWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHRvdWNoZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG91Y2hlZDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfdG91Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHJlYWRvbmx5IHRyOiBUZW1wbGF0ZVJlZjxhbnk+XHJcbiAgKSB7fVxyXG59XHJcbiJdfQ==