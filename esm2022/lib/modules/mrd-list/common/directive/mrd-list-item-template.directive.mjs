import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Zeilen-Template einer `mrd-list` mit `virtualScroll`:
 * `<ng-template mrdListItem let-item let-i="index"><mrd-list-item>...</mrd-list-item></ng-template>`
 */
export class MrdListItemTemplateDirective {
    templateRef;
    /** Nur fuer die Typisierung des Template-Kontexts: `[mrdListItem]="items"` */
    mrdListItem;
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
    static ngTemplateContextGuard(dir, ctx) {
        return true;
    }
    /** @nocollapse */ static ɵfac = function MrdListItemTemplateDirective_Factory(t) { return new (t || MrdListItemTemplateDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdListItemTemplateDirective, selectors: [["ng-template", "mrdListItem", ""]], inputs: { mrdListItem: "mrdListItem" } });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdListItemTemplateDirective, [{
        type: Directive,
        args: [{
                selector: 'ng-template[mrdListItem]'
            }]
    }], function () { return [{ type: i0.TemplateRef }]; }, { mrdListItem: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWxpc3QtaXRlbS10ZW1wbGF0ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWxpc3QvY29tbW9uL2RpcmVjdGl2ZS9tcmQtbGlzdC1pdGVtLXRlbXBsYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxNQUFNLGVBQWUsQ0FBQzs7QUFHOUQ7OztHQUdHO0FBSUgsTUFBTSxPQUFPLDRCQUE0QjtJQUtwQjtJQUhuQiw4RUFBOEU7SUFDckUsV0FBVyxDQUFXO0lBRS9CLFlBQW1CLFdBQXdEO1FBQXhELGdCQUFXLEdBQVgsV0FBVyxDQUE2QztJQUFHLENBQUM7SUFFL0UsTUFBTSxDQUFDLHNCQUFzQixDQUFJLEdBQW9DLEVBQUUsR0FBWTtRQUNqRixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7eUdBVFUsNEJBQTRCOzRGQUE1Qiw0QkFBNEI7O3VGQUE1Qiw0QkFBNEI7Y0FIeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7YUFDckM7OERBSVUsV0FBVztrQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNcmRWaXJ0dWFsU2Nyb2xsSXRlbUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9tcmQtdmlydHVhbC1zY3JvbGwvY29tbW9uL21vZGVsL21yZC12aXJ0dWFsLXNjcm9sbC5tb2RlbCc7XG5cbi8qKlxuICogWmVpbGVuLVRlbXBsYXRlIGVpbmVyIGBtcmQtbGlzdGAgbWl0IGB2aXJ0dWFsU2Nyb2xsYDpcbiAqIGA8bmctdGVtcGxhdGUgbXJkTGlzdEl0ZW0gbGV0LWl0ZW0gbGV0LWk9XCJpbmRleFwiPjxtcmQtbGlzdC1pdGVtPi4uLjwvbXJkLWxpc3QtaXRlbT48L25nLXRlbXBsYXRlPmBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbbXJkTGlzdEl0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBNcmRMaXN0SXRlbVRlbXBsYXRlRGlyZWN0aXZlPFQgPSBhbnk+IHtcblxuICAvKiogTnVyIGZ1ZXIgZGllIFR5cGlzaWVydW5nIGRlcyBUZW1wbGF0ZS1Lb250ZXh0czogYFttcmRMaXN0SXRlbV09XCJpdGVtc1wiYCAqL1xuICBASW5wdXQoKSBtcmRMaXN0SXRlbTogVFtdIHwgJyc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxNcmRWaXJ0dWFsU2Nyb2xsSXRlbUNvbnRleHQ8VD4+KSB7fVxuXG4gIHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPFQ+KGRpcjogTXJkTGlzdEl0ZW1UZW1wbGF0ZURpcmVjdGl2ZTxUPiwgY3R4OiB1bmtub3duKTogY3R4IGlzIE1yZFZpcnR1YWxTY3JvbGxJdGVtQ29udGV4dDxUPiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==