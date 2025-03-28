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
    specialKeys = ['Backspace', 'Tab', 'End', 'Home', '-', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
    constructor(el) {
        this.el = el;
        this.regex = new RegExp(`^\\d*\\,?\\d{0,${this.nachkommastellen}}$`);
    }
    onKeyDown(event) {
        if (!this.decimalNumber) {
            return;
        }
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjaW1hbC1udW1iZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9jb21tb24vZGlyZWN0aXZlL2RlY2ltYWwtbnVtYmVyLWRpcmVjdGl2ZS9kZWNpbWFsLW51bWJlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQzs7QUFFdkg7O0dBRUc7QUFJSCxNQUFNLE9BQU8sc0JBQXNCO0lBUWI7SUFOeUIsYUFBYSxHQUFZLElBQUksQ0FBQztJQUUzRCxnQkFBZ0IsR0FBVyxDQUFDLENBQUM7SUFFckMsS0FBSyxHQUFXLElBQUksTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDL0MsV0FBVyxHQUFrQixDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDMUgsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQW9CO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZCLE9BQU87U0FDUjtRQUNELDJDQUEyQztRQUMzQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM5QyxPQUFPO1NBQ1I7UUFDRCxJQUFJLE9BQU8sR0FBVyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDbEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO1FBQ3RELE1BQU0sSUFBSSxHQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTlILElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0MsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVNLFdBQVcsQ0FBQyxPQUFzQjtRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLGtCQUFrQixJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7bUdBL0JVLHNCQUFzQjs0RkFBdEIsc0JBQXNCO2lIQUF0QixxQkFBaUI7eUVBRVQsZ0JBQWdCOzt1RkFGeEIsc0JBQXNCO2NBSGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzZEQUc4QyxhQUFhO2tCQUF6RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBRXBCLGdCQUFnQjtrQkFBL0IsS0FBSztZQVFOLFNBQVM7a0JBRFIsWUFBWTttQkFBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib29sZWFuQXR0cmlidXRlLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqKlxyXG4gKiBMaW1pdGllcnQgZGllIEVpbmdhYmUgZWluZXIgWmFobCBhdWYgeCAoZGVmYXVsdCAyKSBOYWNoa29tbWFzdGVsbGVuLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZGVjaW1hbE51bWJlcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWNpbWFsTnVtYmVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZGVjaW1hbE51bWJlcjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBuYWNoa29tbWFzdGVsbGVuOiBudW1iZXIgPSAyO1xyXG5cclxuICBwcml2YXRlIHJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKC9eXFxkKlxcLD9cXGR7MCwyfSQvZyk7XHJcbiAgcHJpdmF0ZSBzcGVjaWFsS2V5czogQXJyYXk8c3RyaW5nPiA9IFsnQmFja3NwYWNlJywgJ1RhYicsICdFbmQnLCAnSG9tZScsICctJywgJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0JywgJ0RlbCcsICdEZWxldGUnXTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLnJlZ2V4ID0gbmV3IFJlZ0V4cChgXlxcXFxkKlxcXFwsP1xcXFxkezAsJHt0aGlzLm5hY2hrb21tYXN0ZWxsZW59fSRgKTtcclxuICB9XHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuZGVjaW1hbE51bWJlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBBbGxvdyBCYWNrc3BhY2UsIHRhYiwgZW5kLCBhbmQgaG9tZSBrZXlzXHJcbiAgICBpZiAodGhpcy5zcGVjaWFsS2V5cy5pbmRleE9mKGV2ZW50LmtleSkgIT09IC0xKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBjdXJyZW50OiBzdHJpbmcgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWU7XHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydDtcclxuICAgIGNvbnN0IG5leHQ6IHN0cmluZyA9IFtjdXJyZW50LnNsaWNlKDAsIHBvc2l0aW9uKSwgZXZlbnQua2V5ID09ICdEZWNpbWFsJyA/ICcsJyA6IGV2ZW50LmtleSwgY3VycmVudC5zbGljZShwb3NpdGlvbildLmpvaW4oJycpO1xyXG5cclxuICAgIGlmIChuZXh0ICYmICFTdHJpbmcobmV4dCkubWF0Y2godGhpcy5yZWdleCkpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlZ2V4ID0gbmV3IFJlZ0V4cChgXlxcXFxkKlxcXFwsP1xcXFxkezAsJHt0aGlzLm5hY2hrb21tYXN0ZWxsZW59fSRgKTtcclxuICB9XHJcbn0iXX0=