import { booleanAttribute, ChangeDetectionStrategy, Component, Input, numberAttribute } from '@angular/core';
import { Util } from 'mrd-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a0) { return { "small": a0 }; };
export class MrdDecimalComponent {
    cdr;
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
        let valueString = value.toLocaleString('de-DE', { minimumFractionDigits: this.minDigits, maximumFractionDigits: this.maxDigits });
        if (!this.tausendertrennpunkt) {
            valueString = valueString.replace(/\./g, '');
        }
        this.decimalString = valueString.split(',')[0];
        this.digitsString = valueString.split(',')[1];
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
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdDecimalComponent, selectors: [["mrd-decimal"]], hostVars: 2, hostBindings: function MrdDecimalComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("align-items", ctx.textEnd ? "flex-end" : ctx.centered ? "center" : "flex-start");
        } }, inputs: { textEnd: ["text-end", "textEnd", booleanAttribute], centered: ["text-centered", "centered", booleanAttribute], value: ["value", "value", numberAttribute], maxDigits: ["maxDigits", "maxDigits", numberAttribute], minDigits: ["minDigits", "minDigits", numberAttribute], tausendertrennpunkt: ["tausendertrennpunkt", "tausendertrennpunkt", booleanAttribute], smallDigits: ["smallDigits", "smallDigits", booleanAttribute] }, features: [i0.ɵɵInputTransformsFeature], decls: 5, vars: 5, consts: [[1, "mrd-decimal-container"], [1, "mrd-decimal-content"], [1, "mrd-digits-content", 3, "ngClass"]], template: function MrdDecimalComponent_Template(rf, ctx) { if (rf & 1) {
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
        } }, dependencies: [i1.NgClass], styles: ["[_nghost-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;background-color:#fff}.mrd-decimal-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:baseline;font-weight:900}.mrd-decimal-container[_ngcontent-%COMP%]   .mrd-digits-content.small[_ngcontent-%COMP%]{font-size:.8em}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdDecimalComponent, [{
        type: Component,
        args: [{ selector: 'mrd-decimal', host: {
                    '[style.align-items]': 'textEnd ? "flex-end" : centered ? "center" : "flex-start"'
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-decimal-container\">\n    <div class=\"mrd-decimal-content\">{{decimalValue}}</div>\n    <div class=\"mrd-digits-content\" [ngClass]=\"{'small': smallDigits}\">{{digitsValue}}</div>\n</div>\n", styles: [":host{height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;background-color:#fff}.mrd-decimal-container{display:flex;flex-direction:row;align-items:baseline;font-weight:900}.mrd-decimal-container .mrd-digits-content.small{font-size:.8em}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { textEnd: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWRlY2ltYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9jb21tb24vY29tcG9uZW50cy9tcmQtZGVjaW1hbC9jb21wb25lbnRzL21yZC1kZWNpbWFsL21yZC1kZWNpbWFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvY29tbW9uL2NvbXBvbmVudHMvbXJkLWRlY2ltYWwvY29tcG9uZW50cy9tcmQtZGVjaW1hbC9tcmQtZGVjaW1hbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hJLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7QUFXaEMsTUFBTSxPQUFPLG1CQUFtQjtJQTZDcEI7SUEzQ1YsSUFBb0UsT0FBTyxDQUFDLEtBQWM7UUFDeEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ08sUUFBUSxHQUFZLEtBQUssQ0FBQztJQUVsQyxJQUF5RSxRQUFRLENBQUMsS0FBYztRQUM5RixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7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LGdCQUFnQixFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vbGVhbkF0dHJpYnV0ZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBudW1iZXJBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFV0aWwgfSBmcm9tICdtcmQtY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yZC1kZWNpbWFsJyxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuYWxpZ24taXRlbXNdJzogJ3RleHRFbmQgPyBcImZsZXgtZW5kXCIgOiBjZW50ZXJlZCA/IFwiY2VudGVyXCIgOiBcImZsZXgtc3RhcnRcIidcbiAgfSxcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1kZWNpbWFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWRlY2ltYWwuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTXJkRGVjaW1hbENvbXBvbmVudCB7XG5cbiAgQElucHV0KHthbGlhczogJ3RleHQtZW5kJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNldCB0ZXh0RW5kKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdGV4dEVuZCA9IHZhbHVlO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIHB1YmxpYyBnZXQgdGV4dEVuZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dEVuZDtcbiAgfVxuICBwcml2YXRlIF90ZXh0RW5kOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KHthbGlhczogJ3RleHQtY2VudGVyZWQnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IGNlbnRlcmVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2VudGVyZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBwdWJsaWMgZ2V0IGNlbnRlcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jZW50ZXJlZDtcbiAgfVxuICBwcml2YXRlIF9jZW50ZXJlZDogYm9vbGVhbiA9IGZhbHNlXG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgbGV0IHZhbHVlU3RyaW5nID0gdmFsdWUudG9Mb2NhbGVTdHJpbmcoJ2RlLURFJywge21pbmltdW1GcmFjdGlvbkRpZ2l0czogdGhpcy5taW5EaWdpdHMsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogdGhpcy5tYXhEaWdpdHN9KTtcbiAgICBpZiAoIXRoaXMudGF1c2VuZGVydHJlbm5wdW5rdCkge1xuICAgICAgdmFsdWVTdHJpbmcgPSB2YWx1ZVN0cmluZy5yZXBsYWNlKC9cXC4vZywgJycpO1xuICAgIH1cbiAgICB0aGlzLmRlY2ltYWxTdHJpbmcgPSB2YWx1ZVN0cmluZy5zcGxpdCgnLCcpWzBdO1xuICAgIHRoaXMuZGlnaXRzU3RyaW5nID0gdmFsdWVTdHJpbmcuc3BsaXQoJywnKVsxXTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBwdWJsaWMgZ2V0IHZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHByaXZhdGUgX3ZhbHVlOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBkZWNpbWFsU3RyaW5nOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBkaWdpdHNTdHJpbmc6IHN0cmluZyA9ICcnO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgbWF4RGlnaXRzOiBudW1iZXIgPSA5OTtcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBtaW5EaWdpdHM6IG51bWJlciA9IDA7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgdGF1c2VuZGVydHJlbm5wdW5rdDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzbWFsbERpZ2l0czogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHsgfVxuXG4gIHB1YmxpYyBnZXQgZGVjaW1hbFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuZGVjaW1hbFN0cmluZ30ke1V0aWwuaXNEZWZpbmVkTm90RW1wdHlPclplcm8odGhpcy5kaWdpdHNTdHJpbmcpID8gJywnIDogJyd9YDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGlnaXRzVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kaWdpdHNTdHJpbmc7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJtcmQtZGVjaW1hbC1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwibXJkLWRlY2ltYWwtY29udGVudFwiPnt7ZGVjaW1hbFZhbHVlfX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibXJkLWRpZ2l0cy1jb250ZW50XCIgW25nQ2xhc3NdPVwieydzbWFsbCc6IHNtYWxsRGlnaXRzfVwiPnt7ZGlnaXRzVmFsdWV9fTwvZGl2PlxuPC9kaXY+XG4iXX0=