import { booleanAttribute, ChangeDetectionStrategy, Component, Input, numberAttribute } from '@angular/core';
import { Util } from 'mrd-core';
import * as _ from 'underscore';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a0) { return { "small": a0 }; };
export class MrdDecimalComponent {
    cdr;
    set backgroundColor(value) {
        this._backgroundColor = value;
        this.cdr.markForCheck();
    }
    ;
    get backgroundColor() {
        return this._backgroundColor;
    }
    _backgroundColor;
    set color(value) {
        this._color = value;
        this.cdr.markForCheck();
    }
    get color() {
        return this._color;
    }
    _color;
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
        this.generateValueString();
    }
    get value() {
        return this._value;
    }
    _value;
    set maxDigits(value) {
        this._maxDigits = value;
        this.generateValueString();
    }
    get maxDigits() {
        return this._maxDigits;
    }
    _maxDigits = 99;
    set minDigits(value) {
        this._minDigits = value;
        this.generateValueString();
    }
    get minDigits() {
        return this._minDigits;
    }
    _minDigits = 0;
    set tausendertrennpunkt(value) {
        this._tausendertrennpunkt = value;
        this.generateValueString();
    }
    get tausendertrennpunkt() {
        return this._tausendertrennpunkt;
    }
    _tausendertrennpunkt = false;
    smallDigits = false;
    decimalString = '';
    digitsString = '';
    constructor(cdr) {
        this.cdr = cdr;
    }
    get decimalValue() {
        return `${this.decimalString}${Util.isDefinedNotEmptyOrZero(this.digitsString) ? ',' : ''}`;
    }
    get digitsValue() {
        return this.digitsString;
    }
    generateValueString() {
        let valueString = '';
        if (Util.isDefined(this.value) && _.isNumber(this.value) && !_.isNaN(this.value)) {
            valueString = this.value.toLocaleString('de-DE', { minimumFractionDigits: this.minDigits, maximumFractionDigits: this.maxDigits });
            if (!this.tausendertrennpunkt) {
                valueString = valueString.replace(/\./g, '');
            }
            this.decimalString = Util.isDefinedNotEmptyOrZero(valueString, true, ',').split(',')[0];
            this.digitsString = Util.isDefinedNotEmptyOrZero(valueString, true, ',').split(',')[1];
        }
        else {
            this.decimalString = Util.isDefined(this.value) ? this.value.toString() : '';
            this.digitsString = '';
        }
        this.cdr.markForCheck();
    }
    /** @nocollapse */ static ɵfac = function MrdDecimalComponent_Factory(t) { return new (t || MrdDecimalComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdDecimalComponent, selectors: [["mrd-decimal"]], hostVars: 6, hostBindings: function MrdDecimalComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("align-items", ctx.textEnd ? "flex-end" : ctx.centered ? "center" : "flex-start")("background-color", ctx.backgroundColor)("color", ctx.color);
        } }, inputs: { backgroundColor: "backgroundColor", color: "color", textEnd: ["text-end", "textEnd", booleanAttribute], centered: ["text-centered", "centered", booleanAttribute], value: "value", maxDigits: ["maxDigits", "maxDigits", numberAttribute], minDigits: ["minDigits", "minDigits", numberAttribute], tausendertrennpunkt: ["tausendertrennpunkt", "tausendertrennpunkt", booleanAttribute], smallDigits: ["smallDigits", "smallDigits", booleanAttribute] }, features: [i0.ɵɵInputTransformsFeature], decls: 5, vars: 5, consts: [[1, "mrd-decimal-container"], [1, "mrd-decimal-content"], [1, "mrd-digits-content", 3, "ngClass"]], template: function MrdDecimalComponent_Template(rf, ctx) { if (rf & 1) {
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
                    '[style.background-color]': 'backgroundColor',
                    '[style.color]': 'color'
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-decimal-container\">\r\n    <div class=\"mrd-decimal-content\">{{decimalValue}}</div>\r\n    <div class=\"mrd-digits-content\" [ngClass]=\"{'small': smallDigits}\">{{digitsValue}}</div>\r\n</div>\r\n", styles: [":host{height:100%;width:100%;display:flex;flex-direction:column;justify-content:center}.mrd-decimal-container{display:flex;flex-direction:row;align-items:baseline;font-weight:900}.mrd-decimal-container .mrd-digits-content.small{font-size:.8em}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { backgroundColor: [{
            type: Input
        }], color: [{
            type: Input
        }], textEnd: [{
            type: Input,
            args: [{ alias: 'text-end', transform: booleanAttribute }]
        }], centered: [{
            type: Input,
            args: [{ alias: 'text-centered', transform: booleanAttribute }]
        }], value: [{
            type: Input
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWRlY2ltYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9jb21tb24vY29tcG9uZW50cy9tcmQtZGVjaW1hbC9jb21wb25lbnRzL21yZC1kZWNpbWFsL21yZC1kZWNpbWFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvY29tbW9uL2NvbXBvbmVudHMvbXJkLWRlY2ltYWwvY29tcG9uZW50cy9tcmQtZGVjaW1hbC9tcmQtZGVjaW1hbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hJLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDaEMsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7Ozs7QUFhaEMsTUFBTSxPQUFPLG1CQUFtQjtJQWdGcEI7SUE5RVYsSUFBb0IsZUFBZSxDQUFDLEtBQWE7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFBQSxDQUFDO0lBQ0YsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFDTyxnQkFBZ0IsQ0FBUztJQUVqQyxJQUFvQixLQUFLLENBQUMsS0FBYTtRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFXLEtBQUs7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QUFrQztZQUFDLGVBQWU7WUFBZixxQ0FBZTs7O3VGRGF6RSxtQkFBbUI7Y0FYL0IsU0FBUzsyQkFDRSxhQUFhLFFBQ2pCO29CQUNKLHFCQUFxQixFQUFFLDJEQUEyRDtvQkFDbEYsMEJBQTBCLEVBQUUsaUJBQWlCO29CQUM3QyxlQUFlLEVBQUUsT0FBTztpQkFDekIsbUJBR2dCLHVCQUF1QixDQUFDLE1BQU07b0VBSTNCLGVBQWU7a0JBQWxDLEtBQUs7WUFTYyxLQUFLO2tCQUF4QixLQUFLO1lBUzhELE9BQU87a0JBQTFFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQVNrQixRQUFRO2tCQUFoRixLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFTeEMsS0FBSztrQkFBeEIsS0FBSztZQVMwQyxTQUFTO2tCQUF4RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBQztZQVNhLFNBQVM7a0JBQXhELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFDO1lBU2MsbUJBQW1CO2tCQUFuRSxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBU1MsV0FBVztrQkFBdkQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb2xlYW5BdHRyaWJ1dGUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgbnVtYmVyQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICdtcmQtY29yZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1kZWNpbWFsJyxcclxuICBob3N0OiB7XHJcbiAgICAnW3N0eWxlLmFsaWduLWl0ZW1zXSc6ICd0ZXh0RW5kID8gXCJmbGV4LWVuZFwiIDogY2VudGVyZWQgPyBcImNlbnRlclwiIDogXCJmbGV4LXN0YXJ0XCInLFxyXG4gICAgJ1tzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXSc6ICdiYWNrZ3JvdW5kQ29sb3InLFxyXG4gICAgJ1tzdHlsZS5jb2xvcl0nOiAnY29sb3InXHJcbiAgfSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWRlY2ltYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC1kZWNpbWFsLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZERlY2ltYWxDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgc2V0IGJhY2tncm91bmRDb2xvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9iYWNrZ3JvdW5kQ29sb3IgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH07XHJcbiAgcHVibGljIGdldCBiYWNrZ3JvdW5kQ29sb3IoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2JhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbiAgcHVibGljIGdldCBjb2xvcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xyXG4gIH1cclxuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe2FsaWFzOiAndGV4dC1lbmQnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IHRleHRFbmQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3RleHRFbmQgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IHRleHRFbmQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGV4dEVuZDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfdGV4dEVuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoe2FsaWFzOiAndGV4dC1jZW50ZXJlZCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgY2VudGVyZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2NlbnRlcmVkID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbiAgcHVibGljIGdldCBjZW50ZXJlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9jZW50ZXJlZDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfY2VudGVyZWQ6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmdlbmVyYXRlVmFsdWVTdHJpbmcoKTtcclxuICB9XHJcbiAgcHVibGljIGdldCB2YWx1ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuICBwcml2YXRlIF92YWx1ZTogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgcHVibGljIHNldCBtYXhEaWdpdHModmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fbWF4RGlnaXRzID0gdmFsdWU7XHJcbiAgICB0aGlzLmdlbmVyYXRlVmFsdWVTdHJpbmcoKTtcclxuICB9XHJcbiAgcHVibGljIGdldCBtYXhEaWdpdHMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9tYXhEaWdpdHM7XHJcbiAgfVxyXG4gIHByaXZhdGUgX21heERpZ2l0czogbnVtYmVyID0gOTk7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IG1pbkRpZ2l0cyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9taW5EaWdpdHMgPSB2YWx1ZTtcclxuICAgIHRoaXMuZ2VuZXJhdGVWYWx1ZVN0cmluZygpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IG1pbkRpZ2l0cygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX21pbkRpZ2l0cztcclxuICB9XHJcbiAgcHJpdmF0ZSBfbWluRGlnaXRzOiBudW1iZXIgPSAwO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgdGF1c2VuZGVydHJlbm5wdW5rdCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fdGF1c2VuZGVydHJlbm5wdW5rdCA9IHZhbHVlO1xyXG4gICAgdGhpcy5nZW5lcmF0ZVZhbHVlU3RyaW5nKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgdGF1c2VuZGVydHJlbm5wdW5rdCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl90YXVzZW5kZXJ0cmVubnB1bmt0O1xyXG4gIH1cclxuICBwcml2YXRlIF90YXVzZW5kZXJ0cmVubnB1bmt0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNtYWxsRGlnaXRzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgZGVjaW1hbFN0cmluZzogc3RyaW5nID0gJyc7XHJcbiAgcHJpdmF0ZSBkaWdpdHNTdHJpbmc6IHN0cmluZyA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkgeyB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZGVjaW1hbFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5kZWNpbWFsU3RyaW5nfSR7VXRpbC5pc0RlZmluZWROb3RFbXB0eU9yWmVybyh0aGlzLmRpZ2l0c1N0cmluZykgPyAnLCcgOiAnJ31gO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkaWdpdHNWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZGlnaXRzU3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZVZhbHVlU3RyaW5nKCk6IHZvaWQge1xyXG4gICAgbGV0IHZhbHVlU3RyaW5nID0gJyc7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy52YWx1ZSkgJiYgXy5pc051bWJlcih0aGlzLnZhbHVlKSAmJiAhXy5pc05hTih0aGlzLnZhbHVlKSkge1xyXG4gICAgICB2YWx1ZVN0cmluZyA9IHRoaXMudmFsdWUudG9Mb2NhbGVTdHJpbmcoJ2RlLURFJywge21pbmltdW1GcmFjdGlvbkRpZ2l0czogdGhpcy5taW5EaWdpdHMsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogdGhpcy5tYXhEaWdpdHN9KTtcclxuXHJcbiAgICAgIGlmICghdGhpcy50YXVzZW5kZXJ0cmVubnB1bmt0KSB7XHJcbiAgICAgICAgdmFsdWVTdHJpbmcgPSB2YWx1ZVN0cmluZy5yZXBsYWNlKC9cXC4vZywgJycpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGVjaW1hbFN0cmluZyA9IFV0aWwuaXNEZWZpbmVkTm90RW1wdHlPclplcm8odmFsdWVTdHJpbmcsIHRydWUsICcsJykuc3BsaXQoJywnKVswXTtcclxuICAgICAgdGhpcy5kaWdpdHNTdHJpbmcgPSBVdGlsLmlzRGVmaW5lZE5vdEVtcHR5T3JaZXJvKHZhbHVlU3RyaW5nLCB0cnVlLCAnLCcpLnNwbGl0KCcsJylbMV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRlY2ltYWxTdHJpbmcgPSBVdGlsLmlzRGVmaW5lZCh0aGlzLnZhbHVlKSA/IHRoaXMudmFsdWUudG9TdHJpbmcoKSA6ICcnO1xyXG4gICAgICB0aGlzLmRpZ2l0c1N0cmluZyA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibXJkLWRlY2ltYWwtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXJkLWRlY2ltYWwtY29udGVudFwiPnt7ZGVjaW1hbFZhbHVlfX08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtcmQtZGlnaXRzLWNvbnRlbnRcIiBbbmdDbGFzc109XCJ7J3NtYWxsJzogc21hbGxEaWdpdHN9XCI+e3tkaWdpdHNWYWx1ZX19PC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=