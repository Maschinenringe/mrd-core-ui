import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Inhalt eines Panels, der erst beim ersten Aufklappen erzeugt wird (danach bleibt er bestehen):
 * `<ng-template mrdExpansionPanelContent>...</ng-template>`
 */
export class MrdExpansionPanelContentDirective {
    templateRef;
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
    /** @nocollapse */ static ɵfac = function MrdExpansionPanelContentDirective_Factory(t) { return new (t || MrdExpansionPanelContentDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdExpansionPanelContentDirective, selectors: [["ng-template", "mrdExpansionPanelContent", ""]] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdExpansionPanelContentDirective, [{
        type: Directive,
        args: [{
                selector: 'ng-template[mrdExpansionPanelContent]'
            }]
    }], function () { return [{ type: i0.TemplateRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWV4cGFuc2lvbi1wYW5lbC1jb250ZW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZXhwYW5zaW9uL2NvbW1vbi9kaXJlY3RpdmUvbXJkLWV4cGFuc2lvbi1wYW5lbC1jb250ZW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFlLE1BQU0sZUFBZSxDQUFDOztBQUV2RDs7O0dBR0c7QUFJSCxNQUFNLE9BQU8saUNBQWlDO0lBQ3pCO0lBQW5CLFlBQW1CLFdBQWlDO1FBQWpDLGdCQUFXLEdBQVgsV0FBVyxDQUFzQjtJQUFJLENBQUM7OEdBRDlDLGlDQUFpQzs0RkFBakMsaUNBQWlDOzt1RkFBakMsaUNBQWlDO2NBSDdDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUNBQXVDO2FBQ2xEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEluaGFsdCBlaW5lcyBQYW5lbHMsIGRlciBlcnN0IGJlaW0gZXJzdGVuIEF1ZmtsYXBwZW4gZXJ6ZXVndCB3aXJkIChkYW5hY2ggYmxlaWJ0IGVyIGJlc3RlaGVuKTpcbiAqIGA8bmctdGVtcGxhdGUgbXJkRXhwYW5zaW9uUGFuZWxDb250ZW50Pi4uLjwvbmctdGVtcGxhdGU+YFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVttcmRFeHBhbnNpb25QYW5lbENvbnRlbnRdJ1xufSlcbmV4cG9ydCBjbGFzcyBNcmRFeHBhbnNpb25QYW5lbENvbnRlbnREaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHVua25vd24+KSB7IH1cbn1cbiJdfQ==