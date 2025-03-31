import { booleanAttribute, ChangeDetectionStrategy, Component, Input, numberAttribute } from '@angular/core';
import { Util } from 'mrd-core';
import * as _ from 'underscore';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a0) { return { "small": a0 }; };
export class MrdDecimalComponent {
    cdr;
    backgroundColor = 'transparent';
    set textEnd(value) {
        this._textEnd = value;
        this.cdr.markForCheck();
    }
    get textEnd() {
        return this._textEnd;
    }
    _textEnd = false;
    set centered(value) {
        this._centered = value;
        this.cdr.markForCheck();
    }
    get centered() {
        return this._centered;
    }
    _centered = false;
    set value(value) {
        this._value = value;
        let valueString = '';
        if (Util.isDefined(value) && _.isNumber(value) && !_.isNaN(value)) {
            valueString = value.toLocaleString('de-DE', { minimumFractionDigits: this.minDigits, maximumFractionDigits: this.maxDigits });
        }
        if (!this.tausendertrennpunkt) {
            valueString = valueString.replace(/\./g, '');
        }
        this.decimalString = Util.isDefinedNotEmptyOrZero(valueString, true, ',').split(',')[0];
        this.digitsString = Util.isDefinedNotEmptyOrZero(valueString, true, ',').split(',')[1];
        this.cdr.markForCheck();
    }
    get value() {
        return this._value;
    }
    _value;
    decimalString = '';
    digitsString = '';
    maxDigits = 99;
    minDigits = 0;
    tausendertrennpunkt = false;
    smallDigits = false;
    constructor(cdr) {
        this.cdr = cdr;
    }
    get decimalValue() {
        return `${this.decimalString}${Util.isDefinedNotEmptyOrZero(this.digitsString) ? ',' : ''}`;
    }
    get digitsValue() {
        return this.digitsString;
    }
    /** @nocollapse */ static ɵfac = function MrdDecimalComponent_Factory(t) { return new (t || MrdDecimalComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdDecimalComponent, selectors: [["mrd-decimal"]], hostVars: 4, hostBindings: function MrdDecimalComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("align-items", ctx.textEnd ? "flex-end" : ctx.centered ? "center" : "flex-start")("background-color", ctx.backgroundColor);
        } }, inputs: { backgroundColor: "backgroundColor", textEnd: ["text-end", "textEnd", booleanAttribute], centered: ["text-centered", "centered", booleanAttribute], value: ["value", "value", numberAttribute], maxDigits: ["maxDigits", "maxDigits", numberAttribute], minDigits: ["minDigits", "minDigits", numberAttribute], tausendertrennpunkt: ["tausendertrennpunkt", "tausendertrennpunkt", booleanAttribute], smallDigits: ["smallDigits", "smallDigits", booleanAttribute] }, features: [i0.ɵɵInputTransformsFeature], decls: 5, vars: 5, consts: [[1, "mrd-decimal-container"], [1, "mrd-decimal-content"], [1, "mrd-digits-content", 3, "ngClass"]], template: function MrdDecimalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.decimalValue);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx.smallDigits));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx.digitsValue);
        } }, dependencies: [i1.NgClass], styles: ["[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column;justify-content:center}.mrd-decimal-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:baseline;font-weight:900}.mrd-decimal-container[_ngcontent-%COMP%]   .mrd-digits-content.small[_ngcontent-%COMP%]{font-size:.8em}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdDecimalComponent, [{
        type: Component,
        args: [{ selector: 'mrd-decimal', host: {
                    '[style.align-items]': 'textEnd ? "flex-end" : centered ? "center" : "flex-start"',
                    '[style.background-color]': 'backgroundColor'
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-decimal-container\">\n    <div class=\"mrd-decimal-content\">{{decimalValue}}</div>\n    <div class=\"mrd-digits-content\" [ngClass]=\"{'small': smallDigits}\">{{digitsValue}}</div>\n</div>\n", styles: [":host{height:100%;width:100%;display:flex;flex-direction:column;justify-content:center}.mrd-decimal-container{display:flex;flex-direction:row;align-items:baseline;font-weight:900}.mrd-decimal-container .mrd-digits-content.small{font-size:.8em}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { backgroundColor: [{
            type: Input
        }], textEnd: [{
            type: Input,
            args: [{ alias: 'text-end', transform: booleanAttribute }]
        }], centered: [{
            type: Input,
            args: [{ alias: 'text-centered', transform: booleanAttribute }]
        }], value: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], maxDigits: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], minDigits: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], tausendertrennpunkt: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], smallDigits: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWRlY2ltYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9jb21tb24vY29tcG9uZW50cy9tcmQtZGVjaW1hbC9jb21wb25lbnRzL21yZC1kZWNpbWFsL21yZC1kZWNpbWFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvY29tbW9uL2NvbXBvbmVudHMvbXJkLWRlY2ltYWwvY29tcG9uZW50cy9tcmQtZGVjaW1hbC9tcmQtZGVjaW1hbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hJLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDaEMsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7Ozs7QUFZaEMsTUFBTSxPQUFPLG1CQUFtQjtJQW1EcEI7SUFqRE0sZUFBZSxHQUFXLGFBQWEsQ0FBQztJQUV4RCxJQUFvRSxPQUFPLENBQUMsS0FBYztRQUN4RixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDTyxRQUFRLEdBQVksS0FBSyxDQUFDO0lBRWxDLElBQXlFLFFBQVEsQ0FBQyxLQUFjO1FBQzlGLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIs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U0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBU2tCLFFBQVE7a0JBQWhGLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQVNaLEtBQUs7a0JBQXBELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFDO1lBc0JTLFNBQVM7a0JBQXBELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFDO1lBQ1MsU0FBUztrQkFBcEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUM7WUFFVSxtQkFBbUI7a0JBQS9ELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFDUyxXQUFXO2tCQUF2RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vbGVhbkF0dHJpYnV0ZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBudW1iZXJBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFV0aWwgfSBmcm9tICdtcmQtY29yZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtcmQtZGVjaW1hbCcsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLmFsaWduLWl0ZW1zXSc6ICd0ZXh0RW5kID8gXCJmbGV4LWVuZFwiIDogY2VudGVyZWQgPyBcImNlbnRlclwiIDogXCJmbGV4LXN0YXJ0XCInLFxuICAgICdbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl0nOiAnYmFja2dyb3VuZENvbG9yJ1xuICB9LFxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWRlY2ltYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tcmQtZGVjaW1hbC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNcmREZWNpbWFsQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBwdWJsaWMgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSAndHJhbnNwYXJlbnQnO1xuXG4gIEBJbnB1dCh7YWxpYXM6ICd0ZXh0LWVuZCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgdGV4dEVuZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3RleHRFbmQgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBwdWJsaWMgZ2V0IHRleHRFbmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHRFbmQ7XG4gIH1cbiAgcHJpdmF0ZSBfdGV4dEVuZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCh7YWxpYXM6ICd0ZXh0LWNlbnRlcmVkJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNldCBjZW50ZXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NlbnRlcmVkID0gdmFsdWU7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgcHVibGljIGdldCBjZW50ZXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2VudGVyZWQ7XG4gIH1cbiAgcHJpdmF0ZSBfY2VudGVyZWQ6IGJvb2xlYW4gPSBmYWxzZVxuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIGxldCB2YWx1ZVN0cmluZyA9ICcnO1xuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh2YWx1ZSkgJiYgXy5pc051bWJlcih2YWx1ZSkgJiYgIV8uaXNOYU4odmFsdWUpKSB7XG4gICAgICB2YWx1ZVN0cmluZyA9IHZhbHVlLnRvTG9jYWxlU3RyaW5nKCdkZS1ERScsIHttaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHRoaXMubWluRGlnaXRzLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHRoaXMubWF4RGlnaXRzfSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnRhdXNlbmRlcnRyZW5ucHVua3QpIHtcbiAgICAgIHZhbHVlU3RyaW5nID0gdmFsdWVTdHJpbmcucmVwbGFjZSgvXFwuL2csICcnKTtcbiAgICB9XG4gICAgdGhpcy5kZWNpbWFsU3RyaW5nID0gVXRpbC5pc0RlZmluZWROb3RFbXB0eU9yWmVybyh2YWx1ZVN0cmluZywgdHJ1ZSwgJywnKS5zcGxpdCgnLCcpWzBdO1xuICAgIHRoaXMuZGlnaXRzU3RyaW5nID0gVXRpbC5pc0RlZmluZWROb3RFbXB0eU9yWmVybyh2YWx1ZVN0cmluZywgdHJ1ZSwgJywnKS5zcGxpdCgnLCcpWzFdO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIHB1YmxpYyBnZXQgdmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlcjtcblxuICBwcml2YXRlIGRlY2ltYWxTdHJpbmc6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIGRpZ2l0c1N0cmluZzogc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBtYXhEaWdpdHM6IG51bWJlciA9IDk5O1xuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgcHVibGljIG1pbkRpZ2l0czogbnVtYmVyID0gMDtcblxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyB0YXVzZW5kZXJ0cmVubnB1bmt0OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNtYWxsRGlnaXRzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkgeyB9XG5cbiAgcHVibGljIGdldCBkZWNpbWFsVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5kZWNpbWFsU3RyaW5nfSR7VXRpbC5pc0RlZmluZWROb3RFbXB0eU9yWmVybyh0aGlzLmRpZ2l0c1N0cmluZykgPyAnLCcgOiAnJ31gO1xuICB9XG5cbiAgcHVibGljIGdldCBkaWdpdHNWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRpZ2l0c1N0cmluZztcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm1yZC1kZWNpbWFsLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJtcmQtZGVjaW1hbC1jb250ZW50XCI+e3tkZWNpbWFsVmFsdWV9fTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtcmQtZGlnaXRzLWNvbnRlbnRcIiBbbmdDbGFzc109XCJ7J3NtYWxsJzogc21hbGxEaWdpdHN9XCI+e3tkaWdpdHNWYWx1ZX19PC9kaXY+XG48L2Rpdj5cbiJdfQ==