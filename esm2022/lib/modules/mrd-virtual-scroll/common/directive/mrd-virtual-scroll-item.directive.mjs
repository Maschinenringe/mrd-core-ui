import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Markiert das Zeilen-Template einer virtuellen Liste:
 * `<ng-template mrdVirtualScrollItem let-item let-i="index">...</ng-template>`
 */
export class MrdVirtualScrollItemDirective {
    templateRef;
    /** Nur fuer die Typisierung des Template-Kontexts: `[mrdVirtualScrollItem]="items"` */
    mrdVirtualScrollItem;
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
    static ngTemplateContextGuard(dir, ctx) {
        return true;
    }
    /** @nocollapse */ static ɵfac = function MrdVirtualScrollItemDirective_Factory(t) { return new (t || MrdVirtualScrollItemDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdVirtualScrollItemDirective, selectors: [["ng-template", "mrdVirtualScrollItem", ""]], inputs: { mrdVirtualScrollItem: "mrdVirtualScrollItem" } });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdVirtualScrollItemDirective, [{
        type: Directive,
        args: [{
                selector: 'ng-template[mrdVirtualScrollItem]'
            }]
    }], function () { return [{ type: i0.TemplateRef }]; }, { mrdVirtualScrollItem: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXZpcnR1YWwtc2Nyb2xsLWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC12aXJ0dWFsLXNjcm9sbC9jb21tb24vZGlyZWN0aXZlL21yZC12aXJ0dWFsLXNjcm9sbC1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxNQUFNLGVBQWUsQ0FBQzs7QUFHOUQ7OztHQUdHO0FBSUgsTUFBTSxPQUFPLDZCQUE2QjtJQUtyQjtJQUhuQix1RkFBdUY7SUFDOUUsb0JBQW9CLENBQVc7SUFFeEMsWUFBbUIsV0FBd0Q7UUFBeEQsZ0JBQVcsR0FBWCxXQUFXLENBQTZDO0lBQUcsQ0FBQztJQUUvRSxNQUFNLENBQUMsc0JBQXNCLENBQUksR0FBcUMsRUFBRSxHQUFZO1FBQ2xGLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzswR0FUVSw2QkFBNkI7NEZBQTdCLDZCQUE2Qjs7dUZBQTdCLDZCQUE2QjtjQUh6QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1DQUFtQzthQUM5Qzs4REFJVSxvQkFBb0I7a0JBQTVCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTXJkVmlydHVhbFNjcm9sbEl0ZW1Db250ZXh0IH0gZnJvbSAnLi4vbW9kZWwvbXJkLXZpcnR1YWwtc2Nyb2xsLm1vZGVsJztcblxuLyoqXG4gKiBNYXJraWVydCBkYXMgWmVpbGVuLVRlbXBsYXRlIGVpbmVyIHZpcnR1ZWxsZW4gTGlzdGU6XG4gKiBgPG5nLXRlbXBsYXRlIG1yZFZpcnR1YWxTY3JvbGxJdGVtIGxldC1pdGVtIGxldC1pPVwiaW5kZXhcIj4uLi48L25nLXRlbXBsYXRlPmBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbbXJkVmlydHVhbFNjcm9sbEl0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBNcmRWaXJ0dWFsU2Nyb2xsSXRlbURpcmVjdGl2ZTxUID0gYW55PiB7XG5cbiAgLyoqIE51ciBmdWVyIGRpZSBUeXBpc2llcnVuZyBkZXMgVGVtcGxhdGUtS29udGV4dHM6IGBbbXJkVmlydHVhbFNjcm9sbEl0ZW1dPVwiaXRlbXNcImAgKi9cbiAgQElucHV0KCkgbXJkVmlydHVhbFNjcm9sbEl0ZW06IFRbXSB8ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8TXJkVmlydHVhbFNjcm9sbEl0ZW1Db250ZXh0PFQ+Pikge31cblxuICBzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZDxUPihkaXI6IE1yZFZpcnR1YWxTY3JvbGxJdGVtRGlyZWN0aXZlPFQ+LCBjdHg6IHVua25vd24pOiBjdHggaXMgTXJkVmlydHVhbFNjcm9sbEl0ZW1Db250ZXh0PFQ+IHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl19