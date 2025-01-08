import { ComponentRef, Directive, HostListener, Inject, Input } from "@angular/core";
import * as i0 from "@angular/core";
/**
 * Diese Directive kann verwendet werden, um das, die Komponente umgebende, FlyOut zu schließen.
 * Wird ein Wert übergebene, wird dieser über die Events onClose und afterClosed der FlyOut-Komponente zurückgegeben.
 *
 * @class MrdFlyOutCloseDirective
 */
export class MrdFlyOutCloseDirective {
    componentRef;
    /**
     * Setzt den Wert, der über die Events onClose und afterClosed der FlyOut-Komponente zurückgegeben wird.
     * Default: undefined
     *
     * @memberof MrdFlyOutCloseDirective
     */
    set mrdFlyOutClose(value) {
        this.value = value === '' ? undefined : value;
    }
    /**
     * Der Rückgabewert, der über die Events onClose und afterClosed der FlyOut-Komponente zurückgegeben wird.
     *
     * @private
     * @type {*}
     * @memberof MrdFlyOutCloseDirective
     */
    value;
    constructor(
    // Wir injecten die MrdFlyOutComponent, um die closeDirectiveClicked-Methode aufrufen zu können
    componentRef) {
        this.componentRef = componentRef;
    }
    /**
     * Der Hostlistener, wenn das Element der Directive geklickt wird.
     * Falls die Komponente innerhalb eines MrdFlyOuts liegt,
     * wird die closeDirectiveClicked-Methode der FlyOut-Komponente mit dem übergebenen Rückgabewert aufgerufen.
     */
    onClick() {
        this.componentRef?.instance.closeDirectiveClicked(this.value);
    }
    ;
    /** @nocollapse */ static ɵfac = function MrdFlyOutCloseDirective_Factory(t) { return new (t || MrdFlyOutCloseDirective)(i0.ɵɵdirectiveInject((ComponentRef))); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdFlyOutCloseDirective, selectors: [["", "mrdFlyOutClose", ""]], hostBindings: function MrdFlyOutCloseDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function MrdFlyOutCloseDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } }, inputs: { mrdFlyOutClose: "mrdFlyOutClose" } });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdFlyOutCloseDirective, [{
        type: Directive,
        args: [{
                selector: '[mrdFlyOutClose]'
            }]
    }], function () { return [{ type: i0.ComponentRef, decorators: [{
                type: Inject,
                args: [(ComponentRef)]
            }] }]; }, { mrdFlyOutClose: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWZseS1vdXQtY2xvc2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mbHktb3V0L2NvbW1vbi9kaXJlY3RpdmUvbXJkLWZseS1vdXQtY2xvc2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUdyRjs7Ozs7R0FLRztBQUlILE1BQU0sT0FBTyx1QkFBdUI7SUF1QmlCO0lBckJuRDs7Ozs7T0FLRztJQUNILElBQW9CLGNBQWMsQ0FBQyxLQUFVO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLEtBQUssQ0FBTTtJQUVyQjtJQUNJLCtGQUErRjtJQUM5QyxZQUE4QztRQUE5QyxpQkFBWSxHQUFaLFlBQVksQ0FBa0M7SUFDOUYsQ0FBQztJQUVKOzs7O09BSUc7SUFDZ0MsT0FBTztRQUN4QyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUFBLENBQUM7b0dBakNTLHVCQUF1Qix1QkF1QnhCLENBQUEsWUFBZ0MsQ0FBQTs0RkF2Qi9CLHVCQUF1Qjs4R0FBdkIsbUJBQWU7Ozt1RkFBZix1QkFBdUI7Y0FIbkMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7YUFDL0I7O3NCQXdCSSxNQUFNO3VCQUFDLENBQUEsWUFBZ0MsQ0FBQTt3QkFmdEIsY0FBYztrQkFBakMsS0FBSztZQXVCNkIsT0FBTztrQkFBekMsWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRSZWYsIERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbmplY3QsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTXJkRmx5T3V0Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbXJkLWZseS1vdXQvbXJkLWZseS1vdXQuY29tcG9uZW50XCI7XHJcblxyXG4vKipcclxuICogRGllc2UgRGlyZWN0aXZlIGthbm4gdmVyd2VuZGV0IHdlcmRlbiwgdW0gZGFzLCBkaWUgS29tcG9uZW50ZSB1bWdlYmVuZGUsIEZseU91dCB6dSBzY2hsaWXDn2VuLlxyXG4gKiBXaXJkIGVpbiBXZXJ0IMO8YmVyZ2ViZW5lLCB3aXJkIGRpZXNlciDDvGJlciBkaWUgRXZlbnRzIG9uQ2xvc2UgdW5kIGFmdGVyQ2xvc2VkIGRlciBGbHlPdXQtS29tcG9uZW50ZSB6dXLDvGNrZ2VnZWJlbi5cclxuICpcclxuICogQGNsYXNzIE1yZEZseU91dENsb3NlRGlyZWN0aXZlXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW21yZEZseU91dENsb3NlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZEZseU91dENsb3NlRGlyZWN0aXZlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0enQgZGVuIFdlcnQsIGRlciDDvGJlciBkaWUgRXZlbnRzIG9uQ2xvc2UgdW5kIGFmdGVyQ2xvc2VkIGRlciBGbHlPdXQtS29tcG9uZW50ZSB6dXLDvGNrZ2VnZWJlbiB3aXJkLlxyXG4gICAqIERlZmF1bHQ6IHVuZGVmaW5lZFxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENsb3NlRGlyZWN0aXZlXHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIHNldCBtcmRGbHlPdXRDbG9zZSh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgPT09ICcnID8gdW5kZWZpbmVkIDogdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXIgUsO8Y2tnYWJld2VydCwgZGVyIMO8YmVyIGRpZSBFdmVudHMgb25DbG9zZSB1bmQgYWZ0ZXJDbG9zZWQgZGVyIEZseU91dC1Lb21wb25lbnRlIHp1csO8Y2tnZWdlYmVuIHdpcmQuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEB0eXBlIHsqfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDbG9zZURpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgdmFsdWU6IGFueTtcclxuXHJcbmNvbnN0cnVjdG9yKFxyXG4gICAgLy8gV2lyIGluamVjdGVuIGRpZSBNcmRGbHlPdXRDb21wb25lbnQsIHVtIGRpZSBjbG9zZURpcmVjdGl2ZUNsaWNrZWQtTWV0aG9kZSBhdWZydWZlbiB6dSBrw7ZubmVuXHJcbiAgICBASW5qZWN0KENvbXBvbmVudFJlZjxNcmRGbHlPdXRDb21wb25lbnQ+KSBwdWJsaWMgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8TXJkRmx5T3V0Q29tcG9uZW50PlxyXG4gICkge31cclxuXHJcbiAgLyoqXHJcbiAgICogRGVyIEhvc3RsaXN0ZW5lciwgd2VubiBkYXMgRWxlbWVudCBkZXIgRGlyZWN0aXZlIGdla2xpY2t0IHdpcmQuXHJcbiAgICogRmFsbHMgZGllIEtvbXBvbmVudGUgaW5uZXJoYWxiIGVpbmVzIE1yZEZseU91dHMgbGllZ3QsXHJcbiAgICogd2lyZCBkaWUgY2xvc2VEaXJlY3RpdmVDbGlja2VkLU1ldGhvZGUgZGVyIEZseU91dC1Lb21wb25lbnRlIG1pdCBkZW0gw7xiZXJnZWJlbmVuIFLDvGNrZ2FiZXdlcnQgYXVmZ2VydWZlbi5cclxuICAgKi9cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uQ2xpY2soKSB7XHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZj8uaW5zdGFuY2UuY2xvc2VEaXJlY3RpdmVDbGlja2VkKHRoaXMudmFsdWUpO1xyXG4gIH07XHJcbn1cclxuXHJcbiJdfQ==