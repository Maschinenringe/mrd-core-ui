import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Eigene Darstellung einer Spalte, z. B. ein Favoriten-Stern:
 * `<ng-template mrdDatenListeZelle="favorit" let-eintrag let-ausgewaehlt="ausgewaehlt">...</ng-template>`
 */
export class MrdDatenListeZelleDirective {
    templateRef;
    /** `schluessel` der Spalte */
    schluessel;
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
    static ngTemplateContextGuard(dir, ctx) {
        return true;
    }
    /** @nocollapse */ static ɵfac = function MrdDatenListeZelleDirective_Factory(t) { return new (t || MrdDatenListeZelleDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdDatenListeZelleDirective, selectors: [["ng-template", "mrdDatenListeZelle", ""]], inputs: { schluessel: ["mrdDatenListeZelle", "schluessel"] } });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdDatenListeZelleDirective, [{
        type: Directive,
        args: [{
                selector: 'ng-template[mrdDatenListeZelle]'
            }]
    }], function () { return [{ type: i0.TemplateRef }]; }, { schluessel: [{
            type: Input,
            args: [{ alias: 'mrdDatenListeZelle', required: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWRhdGVuLWxpc3RlLXplbGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZGF0ZW4tbGlzdGUvY29tbW9uL2RpcmVjdGl2ZS9tcmQtZGF0ZW4tbGlzdGUtemVsbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLE1BQU0sZUFBZSxDQUFDOztBQUc5RDs7O0dBR0c7QUFJSCxNQUFNLE9BQU8sMkJBQTJCO0lBS25CO0lBSG5CLDhCQUE4QjtJQUMrQixVQUFVLENBQVM7SUFFaEYsWUFBbUIsV0FBc0Q7UUFBdEQsZ0JBQVcsR0FBWCxXQUFXLENBQTJDO0lBQUcsQ0FBQztJQUU3RSxNQUFNLENBQUMsc0JBQXNCLENBQUksR0FBbUMsRUFBRSxHQUFZO1FBQ2hGLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzt3R0FUVSwyQkFBMkI7NEZBQTNCLDJCQUEyQjs7dUZBQTNCLDJCQUEyQjtjQUh2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlDQUFpQzthQUM1Qzs4REFJOEQsVUFBVTtrQkFBdEUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1yZERhdGVuTGlzdGVaZWxsZUtvbnRleHQgfSBmcm9tICcuLi9tb2RlbC9tcmQtZGF0ZW4tbGlzdGUubW9kZWwnO1xuXG4vKipcbiAqIEVpZ2VuZSBEYXJzdGVsbHVuZyBlaW5lciBTcGFsdGUsIHouIEIuIGVpbiBGYXZvcml0ZW4tU3Rlcm46XG4gKiBgPG5nLXRlbXBsYXRlIG1yZERhdGVuTGlzdGVaZWxsZT1cImZhdm9yaXRcIiBsZXQtZWludHJhZyBsZXQtYXVzZ2V3YWVobHQ9XCJhdXNnZXdhZWhsdFwiPi4uLjwvbmctdGVtcGxhdGU+YFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVttcmREYXRlbkxpc3RlWmVsbGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBNcmREYXRlbkxpc3RlWmVsbGVEaXJlY3RpdmU8VCA9IGFueT4ge1xuXG4gIC8qKiBgc2NobHVlc3NlbGAgZGVyIFNwYWx0ZSAqL1xuICBASW5wdXQoe2FsaWFzOiAnbXJkRGF0ZW5MaXN0ZVplbGxlJywgcmVxdWlyZWQ6IHRydWV9KSBwdWJsaWMgc2NobHVlc3NlbDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8TXJkRGF0ZW5MaXN0ZVplbGxlS29udGV4dDxUPj4pIHt9XG5cbiAgc3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8VD4oZGlyOiBNcmREYXRlbkxpc3RlWmVsbGVEaXJlY3RpdmU8VD4sIGN0eDogdW5rbm93bik6IGN0eCBpcyBNcmREYXRlbkxpc3RlWmVsbGVLb250ZXh0PFQ+IHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl19