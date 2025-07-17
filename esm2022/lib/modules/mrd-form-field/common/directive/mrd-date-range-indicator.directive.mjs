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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWRhdGUtcmFuZ2UtaW5kaWNhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZm9ybS1maWVsZC9jb21tb24vZGlyZWN0aXZlL21yZC1kYXRlLXJhbmdlLWluZGljYXRvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQyxTQUFTLEVBQWMsWUFBWSxFQUFnQixLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU9uSSxNQUFNLE9BQU8sOEJBQThCO0lBMkQvQjtJQXpEVixJQUFvQixTQUFTLENBQUMsS0FBb0I7UUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFekMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDdEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNsQztRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDckIsQ0FB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QTVCLEtBQUs7WUFnQjhDLFVBQVU7a0JBQTdELEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsdUJBQXVCLEVBQUM7WUFPbkIsWUFBWTtrQkFBL0IsS0FBSztZQWdCYyxPQUFPO2tCQUExQixLQUFLO1lBZVcsVUFBVTtrQkFBMUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgRGF5IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tcmQtZGF0ZXBpY2tlci9tcmQtZGF0ZXBpY2tlci5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXJkRGF0ZVJhbmdlSW5kaWNhdG9yXSdcbn0pXG5leHBvcnQgY2xhc3MgTXJkRGF0ZVJhbmdlSW5kaWNhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgQElucHV0KCkgcHVibGljIHNldCBzdGFydERhdGUodmFsdWU6IE1vbWVudCB8IG51bGwpIHtcbiAgICB0aGlzLl9zdGFydERhdGUgPSB2YWx1ZTtcbiAgICBcbiAgICB0aGlzLmRheS5pc1NlbGVjdGVkLnZhbHVlID0gZmFsc2U7XG4gICAgdGhpcy5kYXkuYmV0d2VlblJhbmdlLnZhbHVlID0gZmFsc2U7XG4gICAgdGhpcy5kYXkucmFuZ2VTZWxlY3RlZC52YWx1ZSA9IGZhbHNlO1xuICAgIHRoaXMuZGF5LnJhbmdlSG92ZXIudmFsdWUgPSBmYWxzZTtcbiAgICB0aGlzLmRheS5yYW5nZUhvdmVyQmV0d2Vlbi52YWx1ZSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuX3N0YXJ0RGF0ZSAmJiB0aGlzLl9zdGFydERhdGUuaXNTYW1lKHRoaXMuX2J1dHRvbkRhdGUsICdkYXknKSkge1xuICAgICAgdGhpcy5kYXkuaXNTZWxlY3RlZC52YWx1ZSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuZGF5LmNoYW5nZWQoKTtcbiAgfVxuICBwcml2YXRlIF9zdGFydERhdGU6IE1vbWVudCB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCh7YWxpYXM6ICdtcmREYXRlUmFuZ2VJbmRpY2F0b3InfSkgcHVibGljIHNldCBidXR0b25EYXRlKHZhbHVlOiBEYXkpIHtcbiAgICB0aGlzLmRheSA9IHZhbHVlO1xuICAgIHRoaXMuX2J1dHRvbkRhdGUgPSB2YWx1ZS5kYXRlO1xuICB9XG4gIHByaXZhdGUgX2J1dHRvbkRhdGU6IE1vbWVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGRheTogRGF5O1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgaG92ZXJFbmREYXRlKHZhbHVlOiBNb21lbnQgfCBudWxsKSB7XG4gICAgdGhpcy5faG92ZXJFbmREYXRlID0gdmFsdWU7XG4gICAgXG4gICAgdGhpcy5kYXkucmFuZ2VIb3Zlci52YWx1ZSA9IGZhbHNlO1xuICAgIHRoaXMuZGF5LnJhbmdlSG92ZXJCZXR3ZWVuLnZhbHVlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5faG92ZXJFbmREYXRlICYmIHRoaXMuX2J1dHRvbkRhdGUuaXNTYW1lKHRoaXMuX2hvdmVyRW5kRGF0ZSkpIHtcbiAgICAgIHRoaXMuZGF5LnJhbmdlSG92ZXIudmFsdWUgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhcnREYXRlICYmIHRoaXMuX2hvdmVyRW5kRGF0ZSAmJiB0aGlzLl9idXR0b25EYXRlLmlzQmV0d2Vlbih0aGlzLl9zdGFydERhdGUsIHRoaXMuX2hvdmVyRW5kRGF0ZSwgbnVsbCwgJ1tdJykpIHtcbiAgICAgIHRoaXMuZGF5LnJhbmdlSG92ZXIudmFsdWUgPSB0cnVlO1xuICAgICAgdGhpcy5kYXkucmFuZ2VIb3ZlckJldHdlZW4udmFsdWUgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmRheS5jaGFuZ2VkKCk7XG4gIH1cbiAgcHJpdmF0ZSBfaG92ZXJFbmREYXRlOiBNb21lbnQgfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKSBwdWJsaWMgc2V0IGVuZERhdGUodmFsdWU6IE1vbWVudCB8IG51bGwpIHtcbiAgICB0aGlzLl9lbmREYXRlID0gdmFsdWU7XG5cbiAgICB0aGlzLmRheS5iZXR3ZWVuUmFuZ2UudmFsdWUgPSBmYWxzZTtcbiAgICB0aGlzLmRheS5yYW5nZVNlbGVjdGVkLnZhbHVlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5fZW5kRGF0ZSAmJiB0aGlzLl9lbmREYXRlLmlzU2FtZSh0aGlzLl9idXR0b25EYXRlLCAnZGF5JykpIHtcbiAgICAgIHRoaXMuZGF5LnJhbmdlU2VsZWN0ZWQudmFsdWUgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhcnREYXRlICYmIHRoaXMuX2VuZERhdGUgJiYgdGhpcy5fYnV0dG9uRGF0ZS5pc0JldHdlZW4odGhpcy5fc3RhcnREYXRlLCB0aGlzLl9lbmREYXRlLCBudWxsLCAnKCknKSkge1xuICAgICAgdGhpcy5kYXkuYmV0d2VlblJhbmdlLnZhbHVlID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5kYXkuY2hhbmdlZCgpO1xuICB9XG4gIHByaXZhdGUgX2VuZERhdGU6IE1vbWVudCB8IG51bGwgPSBudWxsO1xuXG4gIEBPdXRwdXQoKSBwdWJsaWMgaXNIb3ZlcmluZzogRXZlbnRFbWl0dGVyPE1vbWVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vbWVudD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICApIHsgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5maXJzdENoaWxkPy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnTW91c2UgZW50ZXJlZCBkYXRlIHJhbmdlIGluZGljYXRvcicsIHRoaXMuX2J1dHRvbkRhdGUpO1xuICAgIC8vICAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKHRoaXMuc3RhcnREYXRlKSkge1xuICAgIC8vICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICB0aGlzLmlzSG92ZXJpbmcuZW1pdCh0aGlzLl9idXR0b25EYXRlKTtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH0sIDUwMCk7XG4gIH1cblxuICAvLyBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgLy8gcHVibGljIG9uSG92ZXIoKTogdm9pZCB7XG4gIC8vICAgY29uc29sZS5sb2coJ0hvdmVyaW5nIG92ZXIgZGF0ZSByYW5nZSBpbmRpY2F0b3InLCB0aGlzLl9idXR0b25EYXRlKTtcbiAgLy8gICBpZiAoIVV0aWwuaXNEZWZpbmVkKHRoaXMuc3RhcnREYXRlKSkge1xuICAvLyAgICAgcmV0dXJuO1xuICAvLyAgIH1cbiAgLy8gICB0aGlzLmlzSG92ZXJpbmcuZW1pdCh0aGlzLl9idXR0b25EYXRlKTtcbiAgLy8gfVxufVxuIl19