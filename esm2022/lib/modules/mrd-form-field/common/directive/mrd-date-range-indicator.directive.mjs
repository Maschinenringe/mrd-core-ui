import { Directive, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class MrdDateRangeIndicatorDirective {
    _elementRef;
    set startDate(value) {
        this._startDate = value;
        this.day.isSelected.value = false;
        this.day.betweenRange.value = false;
        this.day.rangeSelected.value = false;
        this.day.rangeHover.value = false;
        this.day.rangeHoverBetween.value = false;
        if (this._startDate && this._startDate.isSame(this._buttonDate, 'day')) {
            this.day.isSelected.value = true;
        }
        this.day.changed();
    }
    _startDate = null;
    set buttonDate(value) {
        this.day = value;
        this._buttonDate = value.date;
    }
    _buttonDate = null;
    day;
    set hoverEndDate(value) {
        this._hoverEndDate = value;
        this.day.rangeHover.value = false;
        this.day.rangeHoverBetween.value = false;
        if (this._hoverEndDate && this._buttonDate.isSame(this._hoverEndDate)) {
            this.day.rangeHover.value = true;
        }
        else if (this._startDate && this._hoverEndDate && this._buttonDate.isBetween(this._startDate, this._hoverEndDate, null, '[]')) {
            this.day.rangeHover.value = true;
            this.day.rangeHoverBetween.value = true;
        }
        this.day.changed();
    }
    _hoverEndDate = null;
    set endDate(value) {
        this._endDate = value;
        this.day.betweenRange.value = false;
        this.day.rangeSelected.value = false;
        if (this._endDate && this._endDate.isSame(this._buttonDate, 'day')) {
            this.day.rangeSelected.value = true;
        }
        else if (this._startDate && this._endDate && this._buttonDate.isBetween(this._startDate, this._endDate, null, '()')) {
            this.day.betweenRange.value = true;
        }
        this.day.changed();
    }
    _endDate = null;
    isHovering = new EventEmitter();
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
    ngAfterViewInit() {
        // setTimeout(() => {
        //   (this._elementRef.nativeElement as HTMLElement).firstChild?.addEventListener('mouseenter', () => {
        //     console.log('Mouse entered date range indicator', this._buttonDate);
        //     if (!Util.isDefined(this.startDate)) {
        //       return;
        //     }
        //     this.isHovering.emit(this._buttonDate);
        //   });
        // }, 500);
    }
    /** @nocollapse */ static ɵfac = function MrdDateRangeIndicatorDirective_Factory(t) { return new (t || MrdDateRangeIndicatorDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdDateRangeIndicatorDirective, selectors: [["", "mrdDateRangeIndicator", ""]], inputs: { startDate: "startDate", buttonDate: ["mrdDateRangeIndicator", "buttonDate"], hoverEndDate: "hoverEndDate", endDate: "endDate" }, outputs: { isHovering: "isHovering" } });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdDateRangeIndicatorDirective, [{
        type: Directive,
        args: [{
                selector: '[mrdDateRangeIndicator]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { startDate: [{
            type: Input
        }], buttonDate: [{
            type: Input,
            args: [{ alias: 'mrdDateRangeIndicator' }]
        }], hoverEndDate: [{
            type: Input
        }], endDate: [{
            type: Input
        }], isHovering: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWRhdGUtcmFuZ2UtaW5kaWNhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZm9ybS1maWVsZC9jb21tb24vZGlyZWN0aXZlL21yZC1kYXRlLXJhbmdlLWluZGljYXRvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQyxTQUFTLEVBQWMsWUFBWSxFQUFnQixLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU9uSSxNQUFNLE9BQU8sOEJBQThCO0lBMkQvQjtJQXpEVixJQUFvQixTQUFTLENBQUMsS0FBb0I7UUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFekMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDdEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNsQztRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDckIsQ0FB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QTVCLEtBQUs7WUFnQjhDLFVBQVU7a0JBQTdELEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsdUJBQXVCLEVBQUM7WUFPbkIsWUFBWTtrQkFBL0IsS0FBSztZQWdCYyxPQUFPO2tCQUExQixLQUFLO1lBZVcsVUFBVTtrQkFBMUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vbWVudCB9IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IERheSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbXJkLWRhdGVwaWNrZXIvbXJkLWRhdGVwaWNrZXIuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW21yZERhdGVSYW5nZUluZGljYXRvcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmREYXRlUmFuZ2VJbmRpY2F0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHNldCBzdGFydERhdGUodmFsdWU6IE1vbWVudCB8IG51bGwpIHtcclxuICAgIHRoaXMuX3N0YXJ0RGF0ZSA9IHZhbHVlO1xyXG4gICAgXHJcbiAgICB0aGlzLmRheS5pc1NlbGVjdGVkLnZhbHVlID0gZmFsc2U7XHJcbiAgICB0aGlzLmRheS5iZXR3ZWVuUmFuZ2UudmFsdWUgPSBmYWxzZTtcclxuICAgIHRoaXMuZGF5LnJhbmdlU2VsZWN0ZWQudmFsdWUgPSBmYWxzZTtcclxuICAgIHRoaXMuZGF5LnJhbmdlSG92ZXIudmFsdWUgPSBmYWxzZTtcclxuICAgIHRoaXMuZGF5LnJhbmdlSG92ZXJCZXR3ZWVuLnZhbHVlID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKHRoaXMuX3N0YXJ0RGF0ZSAmJiB0aGlzLl9zdGFydERhdGUuaXNTYW1lKHRoaXMuX2J1dHRvbkRhdGUsICdkYXknKSkge1xyXG4gICAgICB0aGlzLmRheS5pc1NlbGVjdGVkLnZhbHVlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuZGF5LmNoYW5nZWQoKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfc3RhcnREYXRlOiBNb21lbnQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgQElucHV0KHthbGlhczogJ21yZERhdGVSYW5nZUluZGljYXRvcid9KSBwdWJsaWMgc2V0IGJ1dHRvbkRhdGUodmFsdWU6IERheSkge1xyXG4gICAgdGhpcy5kYXkgPSB2YWx1ZTtcclxuICAgIHRoaXMuX2J1dHRvbkRhdGUgPSB2YWx1ZS5kYXRlO1xyXG4gIH1cclxuICBwcml2YXRlIF9idXR0b25EYXRlOiBNb21lbnQgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIGRheTogRGF5O1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgc2V0IGhvdmVyRW5kRGF0ZSh2YWx1ZTogTW9tZW50IHwgbnVsbCkge1xyXG4gICAgdGhpcy5faG92ZXJFbmREYXRlID0gdmFsdWU7XHJcbiAgICBcclxuICAgIHRoaXMuZGF5LnJhbmdlSG92ZXIudmFsdWUgPSBmYWxzZTtcclxuICAgIHRoaXMuZGF5LnJhbmdlSG92ZXJCZXR3ZWVuLnZhbHVlID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKHRoaXMuX2hvdmVyRW5kRGF0ZSAmJiB0aGlzLl9idXR0b25EYXRlLmlzU2FtZSh0aGlzLl9ob3ZlckVuZERhdGUpKSB7XHJcbiAgICAgIHRoaXMuZGF5LnJhbmdlSG92ZXIudmFsdWUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLl9zdGFydERhdGUgJiYgdGhpcy5faG92ZXJFbmREYXRlICYmIHRoaXMuX2J1dHRvbkRhdGUuaXNCZXR3ZWVuKHRoaXMuX3N0YXJ0RGF0ZSwgdGhpcy5faG92ZXJFbmREYXRlLCBudWxsLCAnW10nKSkge1xyXG4gICAgICB0aGlzLmRheS5yYW5nZUhvdmVyLnZhbHVlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5kYXkucmFuZ2VIb3ZlckJldHdlZW4udmFsdWUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kYXkuY2hhbmdlZCgpO1xyXG4gIH1cclxuICBwcml2YXRlIF9ob3ZlckVuZERhdGU6IE1vbWVudCB8IG51bGwgPSBudWxsO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgc2V0IGVuZERhdGUodmFsdWU6IE1vbWVudCB8IG51bGwpIHtcclxuICAgIHRoaXMuX2VuZERhdGUgPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLmRheS5iZXR3ZWVuUmFuZ2UudmFsdWUgPSBmYWxzZTtcclxuICAgIHRoaXMuZGF5LnJhbmdlU2VsZWN0ZWQudmFsdWUgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAodGhpcy5fZW5kRGF0ZSAmJiB0aGlzLl9lbmREYXRlLmlzU2FtZSh0aGlzLl9idXR0b25EYXRlLCAnZGF5JykpIHtcclxuICAgICAgdGhpcy5kYXkucmFuZ2VTZWxlY3RlZC52YWx1ZSA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXJ0RGF0ZSAmJiB0aGlzLl9lbmREYXRlICYmIHRoaXMuX2J1dHRvbkRhdGUuaXNCZXR3ZWVuKHRoaXMuX3N0YXJ0RGF0ZSwgdGhpcy5fZW5kRGF0ZSwgbnVsbCwgJygpJykpIHtcclxuICAgICAgdGhpcy5kYXkuYmV0d2VlblJhbmdlLnZhbHVlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuZGF5LmNoYW5nZWQoKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfZW5kRGF0ZTogTW9tZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgaXNIb3ZlcmluZzogRXZlbnRFbWl0dGVyPE1vbWVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vbWVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICkgeyB9XHJcblxyXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vICAgKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuZmlyc3RDaGlsZD8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnTW91c2UgZW50ZXJlZCBkYXRlIHJhbmdlIGluZGljYXRvcicsIHRoaXMuX2J1dHRvbkRhdGUpO1xyXG4gICAgLy8gICAgIGlmICghVXRpbC5pc0RlZmluZWQodGhpcy5zdGFydERhdGUpKSB7XHJcbiAgICAvLyAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRoaXMuaXNIb3ZlcmluZy5lbWl0KHRoaXMuX2J1dHRvbkRhdGUpO1xyXG4gICAgLy8gICB9KTtcclxuICAgIC8vIH0sIDUwMCk7XHJcbiAgfVxyXG5cclxuICAvLyBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcclxuICAvLyBwdWJsaWMgb25Ib3ZlcigpOiB2b2lkIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKCdIb3ZlcmluZyBvdmVyIGRhdGUgcmFuZ2UgaW5kaWNhdG9yJywgdGhpcy5fYnV0dG9uRGF0ZSk7XHJcbiAgLy8gICBpZiAoIVV0aWwuaXNEZWZpbmVkKHRoaXMuc3RhcnREYXRlKSkge1xyXG4gIC8vICAgICByZXR1cm47XHJcbiAgLy8gICB9XHJcbiAgLy8gICB0aGlzLmlzSG92ZXJpbmcuZW1pdCh0aGlzLl9idXR0b25EYXRlKTtcclxuICAvLyB9XHJcbn1cclxuIl19