import { booleanAttribute, Directive, HostListener, Input } from "@angular/core";
import * as i0 from "@angular/core";
/**
 * Sorgt für die korrekte Eingabe von Uhrzeiten im Format HH:mm.
 */
export class TimeInputDirective {
    timeInput = true;
    specialKeys = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
    regex = /^([0-9]?|)/;
    constructor() { }
    onKeyDown(event) {
        if (!this.timeInput) {
            return;
        }
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        const input = event.target;
        const currentValue = input.value;
        if (currentValue.length >= 5 && input.selectionStart === input.selectionEnd) {
            event.preventDefault();
            return;
        }
        // const selectionStart = input.selectionStart || 0;
        // const selectionEnd = input.selectionEnd || 0;
        // if (selectionStart === 0) {
        //     // Erlaube nur Ziffern 0-2 an der ersten Position
        //     if (!/[0-2]/.test(event.key)) {
        //         event.preventDefault();
        //         return;
        //     }
        // }
        // if (selectionStart === 1) {}
        // const newValue = currentValue.slice(0, selectionStart) + event.key + currentValue.slice(selectionEnd);
        // Validierung des neuen Werts
        // if (!this.isValidTimeInput(newValue)) {
        //     event.preventDefault();
        // }
    }
    isValidTimeInput(value) {
        // Erlaubt nur das Format HH:mm
        const timePattern = /^([01]?[0-9]|2[0-3]):?([0-5]?[0-9])?$/;
        return timePattern.test(value);
    }
    /** @nocollapse */ static ɵfac = function TimeInputDirective_Factory(t) { return new (t || TimeInputDirective)(); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: TimeInputDirective, selectors: [["", "timeInput", ""]], hostBindings: function TimeInputDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown", function TimeInputDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
        } }, inputs: { timeInput: ["timeInput", "timeInput", booleanAttribute] }, features: [i0.ɵɵInputTransformsFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimeInputDirective, [{
        type: Directive,
        args: [{
                selector: '[timeInput]'
            }]
    }], function () { return []; }, { timeInput: [{
            type: Input,
            args: [{ alias: 'timeInput', transform: booleanAttribute }]
        }], onKeyDown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1pbnB1dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL2NvbW1vbi9kaXJlY3RpdmUvdGltZS1pbnB1dC1kaXJlY3RpdmUvdGltZS1pbnB1dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUVqRjs7R0FFRztBQUlILE1BQU0sT0FBTyxrQkFBa0I7SUFFc0MsU0FBUyxHQUFZLElBQUksQ0FBQztJQUVuRixXQUFXLEdBQWtCLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRTdHLEtBQUssR0FBVyxZQUFZLENBQUM7SUFFckMsZ0JBQWUsQ0FBQztJQUdoQixTQUFTLENBQUMsS0FBb0I7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsT0FBTztTQUNWO1FBQ0QsMkNBQTJDO1FBQzNDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzVDLE9BQU87U0FDVjtRQUNELE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUEwQixDQUFDO1FBQy9DLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDakMsSUFBSSxZQUFZLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsY0FBYyxLQUFLLEtBQUssQ0FBQyxZQUFZLEVBQUU7WUFDekUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLE9BQU87U0FDVjtRQUNELG9EQUFvRDtRQUNwRCxnREFBZ0Q7UUFDaEQsOEJBQThCO1FBQzlCLHdEQUF3RDtRQUN4RCxzQ0FBc0M7UUFDdEMsa0NBQWtDO1FBQ2xDLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsSUFBSTtRQUNKLCtCQUErQjtRQUMvQix5R0FBeUc7UUFDekcsOEJBQThCO1FBQzlCLDBDQUEwQztRQUMxQyw4QkFBOEI7UUFDOUIsSUFBSTtJQUVSLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxLQUFhO1FBQ2xDLCtCQUErQjtRQUMvQixNQUFNLFdBQVcsR0FBRyx1Q0FBdUMsQ0FBQztRQUM1RCxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzsrRkEvQ1Esa0JBQWtCOzRGQUFsQixrQkFBa0I7NkdBQWxCLHFCQUFpQjs2REFFYSxnQkFBZ0I7O3VGQUY5QyxrQkFBa0I7Y0FIOUIsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxhQUFhO2FBQzFCO3NDQUdvRSxTQUFTO2tCQUF6RSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFTeEQsU0FBUztrQkFEUixZQUFZO21CQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb2xlYW5BdHRyaWJ1dGUsIERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG4vKipcclxuICogU29yZ3QgZsO8ciBkaWUga29ycmVrdGUgRWluZ2FiZSB2b24gVWhyemVpdGVuIGltIEZvcm1hdCBISDptbS5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbdGltZUlucHV0XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVJbnB1dERpcmVjdGl2ZSB7XHJcblxyXG4gICAgQElucHV0KHthbGlhczogJ3RpbWVJbnB1dCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyB0aW1lSW5wdXQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHByaXZhdGUgc3BlY2lhbEtleXM6IEFycmF5PHN0cmluZz4gPSBbJ0JhY2tzcGFjZScsICdUYWInLCAnRW5kJywgJ0hvbWUnLCAnQXJyb3dMZWZ0JywgJ0Fycm93UmlnaHQnLCAnRGVsJywgJ0RlbGV0ZSddO1xyXG5cclxuICAgIHByaXZhdGUgcmVnZXg6IFJlZ0V4cCA9IC9eKFswLTldP3wpLztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMudGltZUlucHV0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWxsb3cgQmFja3NwYWNlLCB0YWIsIGVuZCwgYW5kIGhvbWUga2V5c1xyXG4gICAgICAgIGlmICh0aGlzLnNwZWNpYWxLZXlzLmluZGV4T2YoZXZlbnQua2V5KSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIGlmIChjdXJyZW50VmFsdWUubGVuZ3RoID49IDUgJiYgaW5wdXQuc2VsZWN0aW9uU3RhcnQgPT09IGlucHV0LnNlbGVjdGlvbkVuZCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnN0IHNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQgfHwgMDtcclxuICAgICAgICAvLyBjb25zdCBzZWxlY3Rpb25FbmQgPSBpbnB1dC5zZWxlY3Rpb25FbmQgfHwgMDtcclxuICAgICAgICAvLyBpZiAoc2VsZWN0aW9uU3RhcnQgPT09IDApIHtcclxuICAgICAgICAvLyAgICAgLy8gRXJsYXViZSBudXIgWmlmZmVybiAwLTIgYW4gZGVyIGVyc3RlbiBQb3NpdGlvblxyXG4gICAgICAgIC8vICAgICBpZiAoIS9bMC0yXS8udGVzdChldmVudC5rZXkpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmIChzZWxlY3Rpb25TdGFydCA9PT0gMSkge31cclxuICAgICAgICAvLyBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5zbGljZSgwLCBzZWxlY3Rpb25TdGFydCkgKyBldmVudC5rZXkgKyBjdXJyZW50VmFsdWUuc2xpY2Uoc2VsZWN0aW9uRW5kKTtcclxuICAgICAgICAvLyBWYWxpZGllcnVuZyBkZXMgbmV1ZW4gV2VydHNcclxuICAgICAgICAvLyBpZiAoIXRoaXMuaXNWYWxpZFRpbWVJbnB1dChuZXdWYWx1ZSkpIHtcclxuICAgICAgICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNWYWxpZFRpbWVJbnB1dCh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gRXJsYXVidCBudXIgZGFzIEZvcm1hdCBISDptbVxyXG4gICAgICAgIGNvbnN0IHRpbWVQYXR0ZXJuID0gL14oWzAxXT9bMC05XXwyWzAtM10pOj8oWzAtNV0/WzAtOV0pPyQvO1xyXG4gICAgICAgIHJldHVybiB0aW1lUGF0dGVybi50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxufSJdfQ==