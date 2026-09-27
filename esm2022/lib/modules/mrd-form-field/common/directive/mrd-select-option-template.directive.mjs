import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Inhalt einer Option im `mrd-select` mit `virtualScroll`; ohne Template wird das Label angezeigt:
 * `<ng-template mrdSelectOption let-item>{{item.bezeichnung}} ({{item.nummer}})</ng-template>`
 */
export class MrdSelectOptionTemplateDirective {
    templateRef;
    /** Nur fuer die Typisierung des Template-Kontexts: `[mrdSelectOption]="items"` */
    mrdSelectOption;
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
    static ngTemplateContextGuard(dir, ctx) {
        return true;
    }
    /** @nocollapse */ static ɵfac = function MrdSelectOptionTemplateDirective_Factory(t) { return new (t || MrdSelectOptionTemplateDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdSelectOptionTemplateDirective, selectors: [["ng-template", "mrdSelectOption", ""]], inputs: { mrdSelectOption: "mrdSelectOption" } });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdSelectOptionTemplateDirective, [{
        type: Directive,
        args: [{
                selector: 'ng-template[mrdSelectOption]'
            }]
    }], function () { return [{ type: i0.TemplateRef }]; }, { mrdSelectOption: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXNlbGVjdC1vcHRpb24tdGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbW1vbi9kaXJlY3RpdmUvbXJkLXNlbGVjdC1vcHRpb24tdGVtcGxhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLE1BQU0sZUFBZSxDQUFDOztBQUc5RDs7O0dBR0c7QUFJSCxNQUFNLE9BQU8sZ0NBQWdDO0lBS3hCO0lBSG5CLGtGQUFrRjtJQUN6RSxlQUFlLENBQVc7SUFFbkMsWUFBbUIsV0FBd0Q7UUFBeEQsZ0JBQVcsR0FBWCxXQUFXLENBQTZDO0lBQUcsQ0FBQztJQUUvRSxNQUFNLENBQUMsc0JBQXNCLENBQUksR0FBd0MsRUFBRSxHQUFZO1FBQ3JGLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs2R0FUVSxnQ0FBZ0M7NEZBQWhDLGdDQUFnQzs7dUZBQWhDLGdDQUFnQztjQUg1QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjthQUN6Qzs4REFJVSxlQUFlO2tCQUF2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1yZFZpcnR1YWxTY3JvbGxJdGVtQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL21yZC12aXJ0dWFsLXNjcm9sbC9jb21tb24vbW9kZWwvbXJkLXZpcnR1YWwtc2Nyb2xsLm1vZGVsJztcblxuLyoqXG4gKiBJbmhhbHQgZWluZXIgT3B0aW9uIGltIGBtcmQtc2VsZWN0YCBtaXQgYHZpcnR1YWxTY3JvbGxgOyBvaG5lIFRlbXBsYXRlIHdpcmQgZGFzIExhYmVsIGFuZ2V6ZWlndDpcbiAqIGA8bmctdGVtcGxhdGUgbXJkU2VsZWN0T3B0aW9uIGxldC1pdGVtPnt7aXRlbS5iZXplaWNobnVuZ319ICh7e2l0ZW0ubnVtbWVyfX0pPC9uZy10ZW1wbGF0ZT5gXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW21yZFNlbGVjdE9wdGlvbl0nXG59KVxuZXhwb3J0IGNsYXNzIE1yZFNlbGVjdE9wdGlvblRlbXBsYXRlRGlyZWN0aXZlPFQgPSBhbnk+IHtcblxuICAvKiogTnVyIGZ1ZXIgZGllIFR5cGlzaWVydW5nIGRlcyBUZW1wbGF0ZS1Lb250ZXh0czogYFttcmRTZWxlY3RPcHRpb25dPVwiaXRlbXNcImAgKi9cbiAgQElucHV0KCkgbXJkU2VsZWN0T3B0aW9uOiBUW10gfCAnJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE1yZFZpcnR1YWxTY3JvbGxJdGVtQ29udGV4dDxUPj4pIHt9XG5cbiAgc3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8VD4oZGlyOiBNcmRTZWxlY3RPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZTxUPiwgY3R4OiB1bmtub3duKTogY3R4IGlzIE1yZFZpcnR1YWxTY3JvbGxJdGVtQ29udGV4dDxUPiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==