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
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-decimal-container\">\n    <div class=\"mrd-decimal-content\">{{decimalValue}}</div>\n    <div class=\"mrd-digits-content\" [ngClass]=\"{'small': smallDigits}\">{{digitsValue}}</div>\n</div>\n", styles: [":host{height:100%;width:100%;display:flex;flex-direction:column;justify-content:center}.mrd-decimal-container{display:flex;flex-direction:row;align-items:baseline;font-weight:900}.mrd-decimal-container .mrd-digits-content.small{font-size:.8em}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWRlY2ltYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9jb21tb24vY29tcG9uZW50cy9tcmQtZGVjaW1hbC9jb21wb25lbnRzL21yZC1kZWNpbWFsL21yZC1kZWNpbWFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvY29tbW9uL2NvbXBvbmVudHMvbXJkLWRlY2ltYWwvY29tcG9uZW50cy9tcmQtZGVjaW1hbC9tcmQtZGVjaW1hbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hJLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDaEMsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7Ozs7QUFhaEMsTUFBTSxPQUFPLG1CQUFtQjtJQWdGcEI7SUE5RVYsSUFBb0IsZUFBZSxDQUFDLEtBQWE7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFBQSxDQUFDO0lBQ0YsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFDTyxnQkFBZ0IsQ0FBUztJQUVqQyxJQUFvQixLQUFLLENBQUMsS0FBYTtRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFXLEtBQUs7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QUFrQztZQUFDLGVBQWU7WUFBZixxQ0FBZTs7O3VGRGF6RSxtQkFBbUI7Y0FYL0IsU0FBUzsyQkFDRSxhQUFhLFFBQ2pCO29CQUNKLHFCQUFxQixFQUFFLDJEQUEyRDtvQkFDbEYsMEJBQTBCLEVBQUUsaUJBQWlCO29CQUM3QyxlQUFlLEVBQUUsT0FBTztpQkFDekIsbUJBR2dCLHVCQUF1QixDQUFDLE1BQU07b0VBSTNCLGVBQWU7a0JBQWxDLEtBQUs7WUFTYyxLQUFLO2tCQUF4QixLQUFLO1lBUzhELE9BQU87a0JBQTFFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQVNrQixRQUFRO2tCQUFoRixLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFTeEMsS0FBSztrQkFBeEIsS0FBSztZQVMwQyxTQUFTO2tCQUF4RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBQztZQVNhLFNBQVM7a0JBQXhELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFDO1lBU2MsbUJBQW1CO2tCQUFuRSxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBU1MsV0FBVztrQkFBdkQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb2xlYW5BdHRyaWJ1dGUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgbnVtYmVyQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnbXJkLWNvcmUnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXJkLWRlY2ltYWwnLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5hbGlnbi1pdGVtc10nOiAndGV4dEVuZCA/IFwiZmxleC1lbmRcIiA6IGNlbnRlcmVkID8gXCJjZW50ZXJcIiA6IFwiZmxleC1zdGFydFwiJyxcbiAgICAnW3N0eWxlLmJhY2tncm91bmQtY29sb3JdJzogJ2JhY2tncm91bmRDb2xvcicsXG4gICAgJ1tzdHlsZS5jb2xvcl0nOiAnY29sb3InXG4gIH0sXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtZGVjaW1hbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21yZC1kZWNpbWFsLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE1yZERlY2ltYWxDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgYmFja2dyb3VuZENvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9iYWNrZ3JvdW5kQ29sb3IgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfTtcbiAgcHVibGljIGdldCBiYWNrZ3JvdW5kQ29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYmFja2dyb3VuZENvbG9yO1xuICB9XG4gIHByaXZhdGUgX2JhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgcHVibGljIGdldCBjb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCh7YWxpYXM6ICd0ZXh0LWVuZCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgdGV4dEVuZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3RleHRFbmQgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBwdWJsaWMgZ2V0IHRleHRFbmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHRFbmQ7XG4gIH1cbiAgcHJpdmF0ZSBfdGV4dEVuZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCh7YWxpYXM6ICd0ZXh0LWNlbnRlcmVkJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNldCBjZW50ZXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NlbnRlcmVkID0gdmFsdWU7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgcHVibGljIGdldCBjZW50ZXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2VudGVyZWQ7XG4gIH1cbiAgcHJpdmF0ZSBfY2VudGVyZWQ6IGJvb2xlYW4gPSBmYWxzZVxuXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5nZW5lcmF0ZVZhbHVlU3RyaW5nKCk7XG4gIH1cbiAgcHVibGljIGdldCB2YWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBwcml2YXRlIF92YWx1ZTogbnVtYmVyO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IG1heERpZ2l0cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4RGlnaXRzID0gdmFsdWU7XG4gICAgdGhpcy5nZW5lcmF0ZVZhbHVlU3RyaW5nKCk7XG4gIH1cbiAgcHVibGljIGdldCBtYXhEaWdpdHMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4RGlnaXRzO1xuICB9XG4gIHByaXZhdGUgX21heERpZ2l0czogbnVtYmVyID0gOTk7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgbWluRGlnaXRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9taW5EaWdpdHMgPSB2YWx1ZTtcbiAgICB0aGlzLmdlbmVyYXRlVmFsdWVTdHJpbmcoKTtcbiAgfVxuICBwdWJsaWMgZ2V0IG1pbkRpZ2l0cygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9taW5EaWdpdHM7XG4gIH1cbiAgcHJpdmF0ZSBfbWluRGlnaXRzOiBudW1iZXIgPSAwO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNldCB0YXVzZW5kZXJ0cmVubnB1bmt0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdGF1c2VuZGVydHJlbm5wdW5rdCA9IHZhbHVlO1xuICAgIHRoaXMuZ2VuZXJhdGVWYWx1ZVN0cmluZygpO1xuICB9XG4gIHB1YmxpYyBnZXQgdGF1c2VuZGVydHJlbm5wdW5rdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdGF1c2VuZGVydHJlbm5wdW5rdDtcbiAgfVxuICBwcml2YXRlIF90YXVzZW5kZXJ0cmVubnB1bmt0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc21hbGxEaWdpdHM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGRlY2ltYWxTdHJpbmc6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIGRpZ2l0c1N0cmluZzogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkgeyB9XG5cbiAgcHVibGljIGdldCBkZWNpbWFsVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5kZWNpbWFsU3RyaW5nfSR7VXRpbC5pc0RlZmluZWROb3RFbXB0eU9yWmVybyh0aGlzLmRpZ2l0c1N0cmluZykgPyAnLCcgOiAnJ31gO1xuICB9XG5cbiAgcHVibGljIGdldCBkaWdpdHNWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRpZ2l0c1N0cmluZztcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVWYWx1ZVN0cmluZygpOiB2b2lkIHtcbiAgICBsZXQgdmFsdWVTdHJpbmcgPSAnJztcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy52YWx1ZSkgJiYgXy5pc051bWJlcih0aGlzLnZhbHVlKSAmJiAhXy5pc05hTih0aGlzLnZhbHVlKSkge1xuICAgICAgdmFsdWVTdHJpbmcgPSB0aGlzLnZhbHVlLnRvTG9jYWxlU3RyaW5nKCdkZS1ERScsIHttaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHRoaXMubWluRGlnaXRzLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHRoaXMubWF4RGlnaXRzfSk7XG5cbiAgICAgIGlmICghdGhpcy50YXVzZW5kZXJ0cmVubnB1bmt0KSB7XG4gICAgICAgIHZhbHVlU3RyaW5nID0gdmFsdWVTdHJpbmcucmVwbGFjZSgvXFwuL2csICcnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVjaW1hbFN0cmluZyA9IFV0aWwuaXNEZWZpbmVkTm90RW1wdHlPclplcm8odmFsdWVTdHJpbmcsIHRydWUsICcsJykuc3BsaXQoJywnKVswXTtcbiAgICAgIHRoaXMuZGlnaXRzU3RyaW5nID0gVXRpbC5pc0RlZmluZWROb3RFbXB0eU9yWmVybyh2YWx1ZVN0cmluZywgdHJ1ZSwgJywnKS5zcGxpdCgnLCcpWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlY2ltYWxTdHJpbmcgPSBVdGlsLmlzRGVmaW5lZCh0aGlzLnZhbHVlKSA/IHRoaXMudmFsdWUudG9TdHJpbmcoKSA6ICcnO1xuICAgICAgdGhpcy5kaWdpdHNTdHJpbmcgPSAnJztcbiAgICB9XG5cbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm1yZC1kZWNpbWFsLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJtcmQtZGVjaW1hbC1jb250ZW50XCI+e3tkZWNpbWFsVmFsdWV9fTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtcmQtZGlnaXRzLWNvbnRlbnRcIiBbbmdDbGFzc109XCJ7J3NtYWxsJzogc21hbGxEaWdpdHN9XCI+e3tkaWdpdHNWYWx1ZX19PC9kaXY+XG48L2Rpdj5cbiJdfQ==