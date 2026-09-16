import { booleanAttribute, Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
/***
 * Limitiert die Eingabe einer Zahl auf x (default 2) Nachkommastellen.
 */
export class DecimalNumberDirective {
    el;
    decimalNumber = true;
    nachkommastellen = 2;
    regex = new RegExp(/^\d*\,?\d{0,2}$/g);
    specialKeys = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
    constructor(el) {
        this.el = el;
        this.regex = new RegExp(`^\\d*\\,?\\d{0,${this.nachkommastellen}}$`);
    }
    onKeyDown(event) {
        if (!this.decimalNumber) {
            return;
        }
        // Allow Backspace, tab, end, and home keys
        if (event.ctrlKey || event.metaKey || this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        let current = this.el.nativeElement.value;
        const position = this.el.nativeElement.selectionStart;
        const next = [current.slice(0, position), event.key == 'Decimal' ? ',' : event.key, current.slice(position)].join('');
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    }
    ngOnChanges(changes) {
        this.regex = new RegExp(`^\\d*\\,?\\d{0,${this.nachkommastellen}}$`);
    }
    /** @nocollapse */ static ɵfac = function DecimalNumberDirective_Factory(t) { return new (t || DecimalNumberDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: DecimalNumberDirective, selectors: [["", "decimalNumber", ""]], hostBindings: function DecimalNumberDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown", function DecimalNumberDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
        } }, inputs: { decimalNumber: ["decimalNumber", "decimalNumber", booleanAttribute], nachkommastellen: "nachkommastellen" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵNgOnChangesFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DecimalNumberDirective, [{
        type: Directive,
        args: [{
                selector: '[decimalNumber]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { decimalNumber: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], nachkommastellen: [{
            type: Input
        }], onKeyDown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjaW1hbC1udW1iZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9jb21tb24vZGlyZWN0aXZlL2RlY2ltYWwtbnVtYmVyLWRpcmVjdGl2ZS9kZWNpbWFsLW51bWJlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQzs7QUFFdkg7O0dBRUc7QUFJSCxNQUFNLE9BQU8sc0JBQXNCO0lBUWI7SUFOeUIsYUFBYSxHQUFZLElBQUksQ0FBQztJQUUzRCxnQkFBZ0IsR0FBVyxDQUFDLENBQUM7SUFFckMsS0FBSyxHQUFXLElBQUksTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDL0MsV0FBVyxHQUFrQixDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNySCxZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLGtCQUFrQixJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBb0I7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsT0FBTztTQUNSO1FBQ0QsMkNBQTJDO1FBQzNDLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNoRixPQUFPO1NBQ1I7UUFDRCxJQUFJLE9BQU8sR0FBVyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDbEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO1FBQ3RELE1BQU0sSUFBSSxHQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTlILElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0MsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVNLFdBQVcsQ0FBQyxPQUFzQjtRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLGtCQUFrQixJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7bUdBL0JVLHNCQUFzQjs0RkFBdEIsc0JBQXNCO2lIQUF0QixxQkFBaUI7eUVBRVQsZ0JBQWdCOzt1RkFGeEIsc0JBQXNCO2NBSGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzZEQUc4QyxhQUFhO2tCQUF6RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBRXBCLGdCQUFnQjtrQkFBL0IsS0FBSztZQVFOLFNBQVM7a0JBRFIsWUFBWTttQkFBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib29sZWFuQXR0cmlidXRlLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqKlxyXG4gKiBMaW1pdGllcnQgZGllIEVpbmdhYmUgZWluZXIgWmFobCBhdWYgeCAoZGVmYXVsdCAyKSBOYWNoa29tbWFzdGVsbGVuLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZGVjaW1hbE51bWJlcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWNpbWFsTnVtYmVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZGVjaW1hbE51bWJlcjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBuYWNoa29tbWFzdGVsbGVuOiBudW1iZXIgPSAyO1xyXG5cclxuICBwcml2YXRlIHJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKC9eXFxkKlxcLD9cXGR7MCwyfSQvZyk7XHJcbiAgcHJpdmF0ZSBzcGVjaWFsS2V5czogQXJyYXk8c3RyaW5nPiA9IFsnQmFja3NwYWNlJywgJ1RhYicsICdFbmQnLCAnSG9tZScsICdBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCcsICdEZWwnLCAnRGVsZXRlJ107XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5yZWdleCA9IG5ldyBSZWdFeHAoYF5cXFxcZCpcXFxcLD9cXFxcZHswLCR7dGhpcy5uYWNoa29tbWFzdGVsbGVufX0kYCk7XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxyXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmRlY2ltYWxOdW1iZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gQWxsb3cgQmFja3NwYWNlLCB0YWIsIGVuZCwgYW5kIGhvbWUga2V5c1xyXG4gICAgaWYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSB8fCB0aGlzLnNwZWNpYWxLZXlzLmluZGV4T2YoZXZlbnQua2V5KSAhPT0gLTEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGN1cnJlbnQ6IHN0cmluZyA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZTtcclxuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgY29uc3QgbmV4dDogc3RyaW5nID0gW2N1cnJlbnQuc2xpY2UoMCwgcG9zaXRpb24pLCBldmVudC5rZXkgPT0gJ0RlY2ltYWwnID8gJywnIDogZXZlbnQua2V5LCBjdXJyZW50LnNsaWNlKHBvc2l0aW9uKV0uam9pbignJyk7XHJcblxyXG4gICAgaWYgKG5leHQgJiYgIVN0cmluZyhuZXh0KS5tYXRjaCh0aGlzLnJlZ2V4KSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMucmVnZXggPSBuZXcgUmVnRXhwKGBeXFxcXGQqXFxcXCw/XFxcXGR7MCwke3RoaXMubmFjaGtvbW1hc3RlbGxlbn19JGApO1xyXG4gIH1cclxufSJdfQ==