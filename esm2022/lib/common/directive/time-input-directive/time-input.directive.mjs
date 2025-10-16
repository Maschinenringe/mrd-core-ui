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
        if (currentValue.length >= 5) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1pbnB1dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL2NvbW1vbi9kaXJlY3RpdmUvdGltZS1pbnB1dC1kaXJlY3RpdmUvdGltZS1pbnB1dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUVqRjs7R0FFRztBQUlILE1BQU0sT0FBTyxrQkFBa0I7SUFFc0MsU0FBUyxHQUFZLElBQUksQ0FBQztJQUVuRixXQUFXLEdBQWtCLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRTdHLEtBQUssR0FBVyxZQUFZLENBQUM7SUFFckMsZ0JBQWUsQ0FBQztJQUdoQixTQUFTLENBQUMsS0FBb0I7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsT0FBTztTQUNWO1FBQ0QsMkNBQTJDO1FBQzNDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzVDLE9BQU87U0FDVjtRQUNELE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUEwQixDQUFDO1FBQy9DLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDakMsSUFBSSxZQUFZLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUMxQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsT0FBTztTQUNWO1FBQ0Qsb0RBQW9EO1FBQ3BELGdEQUFnRDtRQUNoRCw4QkFBOEI7UUFDOUIsd0RBQXdEO1FBQ3hELHNDQUFzQztRQUN0QyxrQ0FBa0M7UUFDbEMsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixJQUFJO1FBQ0osK0JBQStCO1FBQy9CLHlHQUF5RztRQUN6Ryw4QkFBOEI7UUFDOUIsMENBQTBDO1FBQzFDLDhCQUE4QjtRQUM5QixJQUFJO0lBRVIsQ0FBQztJQUVPLGdCQUFnQixDQUFDLEtBQWE7UUFDbEMsK0JBQStCO1FBQy9CLE1BQU0sV0FBVyxHQUFHLHVDQUF1QyxDQUFDO1FBQzVELE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOytGQS9DUSxrQkFBa0I7NEZBQWxCLGtCQUFrQjs2R0FBbEIscUJBQWlCOzZEQUVhLGdCQUFnQjs7dUZBRjlDLGtCQUFrQjtjQUg5QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGFBQWE7YUFDMUI7c0NBR29FLFNBQVM7a0JBQXpFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQVN4RCxTQUFTO2tCQURSLFlBQVk7bUJBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vbGVhbkF0dHJpYnV0ZSwgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbi8qKlxyXG4gKiBTb3JndCBmw7xyIGRpZSBrb3JyZWt0ZSBFaW5nYWJlIHZvbiBVaHJ6ZWl0ZW4gaW0gRm9ybWF0IEhIOm1tLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1t0aW1lSW5wdXRdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGltZUlucHV0RGlyZWN0aXZlIHtcclxuXHJcbiAgICBASW5wdXQoe2FsaWFzOiAndGltZUlucHV0JywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHRpbWVJbnB1dDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHJpdmF0ZSBzcGVjaWFsS2V5czogQXJyYXk8c3RyaW5nPiA9IFsnQmFja3NwYWNlJywgJ1RhYicsICdFbmQnLCAnSG9tZScsICdBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCcsICdEZWwnLCAnRGVsZXRlJ107XHJcblxyXG4gICAgcHJpdmF0ZSByZWdleDogUmVnRXhwID0gL14oWzAtOV0/fCkvO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcclxuICAgIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy50aW1lSW5wdXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBbGxvdyBCYWNrc3BhY2UsIHRhYiwgZW5kLCBhbmQgaG9tZSBrZXlzXHJcbiAgICAgICAgaWYgKHRoaXMuc3BlY2lhbEtleXMuaW5kZXhPZihldmVudC5rZXkpICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZS5sZW5ndGggPj0gNSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnN0IHNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQgfHwgMDtcclxuICAgICAgICAvLyBjb25zdCBzZWxlY3Rpb25FbmQgPSBpbnB1dC5zZWxlY3Rpb25FbmQgfHwgMDtcclxuICAgICAgICAvLyBpZiAoc2VsZWN0aW9uU3RhcnQgPT09IDApIHtcclxuICAgICAgICAvLyAgICAgLy8gRXJsYXViZSBudXIgWmlmZmVybiAwLTIgYW4gZGVyIGVyc3RlbiBQb3NpdGlvblxyXG4gICAgICAgIC8vICAgICBpZiAoIS9bMC0yXS8udGVzdChldmVudC5rZXkpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmIChzZWxlY3Rpb25TdGFydCA9PT0gMSkge31cclxuICAgICAgICAvLyBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5zbGljZSgwLCBzZWxlY3Rpb25TdGFydCkgKyBldmVudC5rZXkgKyBjdXJyZW50VmFsdWUuc2xpY2Uoc2VsZWN0aW9uRW5kKTtcclxuICAgICAgICAvLyBWYWxpZGllcnVuZyBkZXMgbmV1ZW4gV2VydHNcclxuICAgICAgICAvLyBpZiAoIXRoaXMuaXNWYWxpZFRpbWVJbnB1dChuZXdWYWx1ZSkpIHtcclxuICAgICAgICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNWYWxpZFRpbWVJbnB1dCh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gRXJsYXVidCBudXIgZGFzIEZvcm1hdCBISDptbVxyXG4gICAgICAgIGNvbnN0IHRpbWVQYXR0ZXJuID0gL14oWzAxXT9bMC05XXwyWzAtM10pOj8oWzAtNV0/WzAtOV0pPyQvO1xyXG4gICAgICAgIHJldHVybiB0aW1lUGF0dGVybi50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxufSJdfQ==