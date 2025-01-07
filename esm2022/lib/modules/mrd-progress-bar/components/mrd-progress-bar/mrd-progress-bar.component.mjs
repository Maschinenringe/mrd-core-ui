import { ColorUtil } from './../../../../common/util/color.util';
import { ChangeDetectionStrategy, Component, Input, numberAttribute } from '@angular/core';
import { ConfigUtil } from './../../../../common/util/config.util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MrdProgressBarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 3);
} }
const _c0 = function (a0) { return { "transform": a0 }; };
function MrdProgressBarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 4);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(1, _c0, "translateX(" + ctx_r1.value + "%)"));
} }
export class MrdProgressBarComponent {
    cdr;
    config = ConfigUtil.getConfig();
    set mode(mode) {
        this._mode = mode;
    }
    get mode() {
        return this._mode;
    }
    _mode = 'indeterminate';
    set value(value) {
        this._value = Math.max(0, Math.min(100, value || 0));
    }
    get value() {
        return this.mode === 'determinate' ? this._value - 100 : -100;
    }
    _value = 0;
    set color(color) {
        if (color === 'primary') {
            color = this.config.baseColors.primary;
        }
        if (color === 'accent') {
            color = this.config.baseColors.accent;
        }
        if (color === 'warn') {
            color = this.config.baseColors.warn;
        }
        this._color = color;
        this._bgColor = ColorUtil.changeColorOpacity(color, 20);
    }
    get color() {
        return this._color;
    }
    _color = this.config.baseColors.primary;
    _bgColor = ColorUtil.changeColorOpacity(this.config.baseColors.primary, 20);
    get bgColor() {
        return this._bgColor;
    }
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
    /** @nocollapse */ static ɵfac = function MrdProgressBarComponent_Factory(t) { return new (t || MrdProgressBarComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdProgressBarComponent, selectors: [["mrd-progress-bar"]], inputs: { mode: "mode", value: ["value", "value", numberAttribute], color: "color" }, features: [i0.ɵɵInputTransformsFeature], decls: 3, vars: 6, consts: [[1, "mrd-progressbar-container"], ["class", "mrd-progressbar indeterminate", 4, "ngIf"], ["class", "mrd-progressbar determinate", 3, "ngStyle", 4, "ngIf"], [1, "mrd-progressbar", "indeterminate"], [1, "mrd-progressbar", "determinate", 3, "ngStyle"]], template: function MrdProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, MrdProgressBarComponent_div_1_Template, 1, 0, "div", 1);
            i0.ɵɵtemplate(2, MrdProgressBarComponent_div_2_Template, 1, 3, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleProp("--progress-bar-color", ctx.color)("--progress-bar-bg-color", ctx.bgColor);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.mode === "indeterminate");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.mode === "determinate");
        } }, dependencies: [i1.NgIf, i1.NgStyle], styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1;max-width:100%;min-height:5px;height:100%}.mrd-progressbar-container[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;width:100%;height:100%;overflow:hidden;background-color:var(--progress-bar-bg-color)}.mrd-progressbar-container[_ngcontent-%COMP%]   .mrd-progressbar[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--progress-bar-color)}.mrd-progressbar-container[_ngcontent-%COMP%]   .mrd-progressbar.indeterminate[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_mrd-progressbar-indeterminate-animation 1s infinite linear}.mrd-progressbar-container[_ngcontent-%COMP%]   .mrd-progressbar.determinate[_ngcontent-%COMP%]{transform:translate(-100%);transition:transform .3s linear}@keyframes _ngcontent-%COMP%_mrd-progressbar-indeterminate-animation{0%{width:100%;transform:translate(-100%)}50%{width:70%;transform:translate(0)}to{width:100%;transform:translate(100%)}}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdProgressBarComponent, [{
        type: Component,
        args: [{ selector: 'mrd-progress-bar', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-progressbar-container\"\r\n  [style.--progress-bar-color]=\"color\" [style.--progress-bar-bg-color]=\"bgColor\">\r\n  <div class=\"mrd-progressbar indeterminate\" *ngIf=\"mode === 'indeterminate'\"></div>\r\n  <div class=\"mrd-progressbar determinate\" *ngIf=\"mode === 'determinate'\" [ngStyle]=\"{'transform': 'translateX(' + value + '%)'}\"></div>\r\n</div>\r\n", styles: [":host{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1;max-width:100%;min-height:5px;height:100%}.mrd-progressbar-container{position:relative;display:flex;flex:1;width:100%;height:100%;overflow:hidden;background-color:var(--progress-bar-bg-color)}.mrd-progressbar-container .mrd-progressbar{position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--progress-bar-color)}.mrd-progressbar-container .mrd-progressbar.indeterminate{animation:mrd-progressbar-indeterminate-animation 1s infinite linear}.mrd-progressbar-container .mrd-progressbar.determinate{transform:translate(-100%);transition:transform .3s linear}@keyframes mrd-progressbar-indeterminate-animation{0%{width:100%;transform:translate(-100%)}50%{width:70%;transform:translate(0)}to{width:100%;transform:translate(100%)}}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { mode: [{
            type: Input
        }], value: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXByb2dyZXNzLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLXByb2dyZXNzLWJhci9jb21wb25lbnRzL21yZC1wcm9ncmVzcy1iYXIvbXJkLXByb2dyZXNzLWJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLXByb2dyZXNzLWJhci9jb21wb25lbnRzL21yZC1wcm9ncmVzcy1iYXIvbXJkLXByb2dyZXNzLWJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDakUsT0FBTyxFQUFpQix1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7O0lDRGpFLHlCQUFrRjs7OztJQUNsRix5QkFBc0k7OztJQUE5RCx5RkFBdUQ7O0FEUWpJLE1BQU0sT0FBTyx1QkFBdUI7SUE0Q3hCO0lBMUNGLE1BQU0sR0FBbUIsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBRXhELElBQW9CLElBQUksQ0FBQyxJQUFxQztRQUM1RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDTyxLQUFLLEdBQW9DLGVBQWUsQ0FBQztJQUVqRSxJQUFnRCxLQUFLLENBQUMsS0FBYTtRQUNqRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDaEUsQ0FBQztJQUNPLE1BQU0sR0FBVyxDQUFDLENBQUM7SUFFM0IsSUFBb0IsS0FBSyxDQUFDLEtBQWE7UUFDckMsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFpQixDQUFDO1NBQ2xEO1FBQ0QsSUFBSSxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQ3RCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFnQixDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxLQUFLLEtBQUssTUFBTSxFQUFFO1lBQ3BCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFjLENBQUM7U0FDL0M7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ08sTUFBTSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQWlCLENBQUM7SUFDMUQsUUFBUSxHQUFXLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRXRHLElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELFlBQ1UsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7SUFDN0IsQ0FBQztJQUVHLGVBQWU7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO29HQWpEVSx1QkFBdUI7NEZBQXZCLHVCQUF1Qix1RkFZZixlQUFlO1lDdkJwQyw4QkFDaUY7WUFDL0Usd0VBQWtGO1lBQ2xGLHdFQUFzSTtZQUN4SSxpQkFBTTs7WUFISixpREFBb0Msd0NBQUE7WUFDUSxlQUE4QjtZQUE5QixtREFBOEI7WUFDaEMsZUFBNEI7WUFBNUIsaURBQTRCOzs7dUZEUTNELHVCQUF1QjtjQU5uQyxTQUFTOzJCQUNFLGtCQUFrQixtQkFHWCx1QkFBdUIsQ0FBQyxNQUFNO29FQU0zQixJQUFJO2tCQUF2QixLQUFLO1lBUTBDLEtBQUs7a0JBQXBELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFDO1lBUWYsS0FBSztrQkFBeEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbG9yVXRpbCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29sb3IudXRpbCc7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgbnVtYmVyQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1yZENvbmZpZ01vZGVsIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vbW9kZWwvY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgQ29uZmlnVXRpbCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29uZmlnLnV0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtcmQtcHJvZ3Jlc3MtYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLXByb2dyZXNzLWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLXByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmRQcm9ncmVzc0JhckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBwcml2YXRlIGNvbmZpZzogTXJkQ29uZmlnTW9kZWwgPSBDb25maWdVdGlsLmdldENvbmZpZygpO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgc2V0IG1vZGUobW9kZTogJ2RldGVybWluYXRlJyB8ICdpbmRldGVybWluYXRlJykge1xyXG4gICAgdGhpcy5fbW9kZSA9IG1vZGU7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgbW9kZSgpOiAnZGV0ZXJtaW5hdGUnIHwgJ2luZGV0ZXJtaW5hdGUnIHtcclxuICAgIHJldHVybiB0aGlzLl9tb2RlO1xyXG4gIH1cclxuICBwcml2YXRlIF9tb2RlOiAnZGV0ZXJtaW5hdGUnIHwgJ2luZGV0ZXJtaW5hdGUnID0gJ2luZGV0ZXJtaW5hdGUnO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl92YWx1ZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgdmFsdWUgfHwgMCkpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnZGV0ZXJtaW5hdGUnID8gdGhpcy5fdmFsdWUgLSAxMDAgOiAtMTAwO1xyXG4gIH1cclxuICBwcml2YXRlIF92YWx1ZTogbnVtYmVyID0gMDtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICBpZiAoY29sb3IgPT09ICdwcmltYXJ5Jykge1xyXG4gICAgICBjb2xvciA9IHRoaXMuY29uZmlnLmJhc2VDb2xvcnMucHJpbWFyeSBhcyBzdHJpbmc7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sb3IgPT09ICdhY2NlbnQnKSB7XHJcbiAgICAgIGNvbG9yID0gdGhpcy5jb25maWcuYmFzZUNvbG9ycy5hY2NlbnQgYXMgc3RyaW5nO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbG9yID09PSAnd2FybicpIHtcclxuICAgICAgY29sb3IgPSB0aGlzLmNvbmZpZy5iYXNlQ29sb3JzLndhcm4gYXMgc3RyaW5nO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMuX2JnQ29sb3IgPSBDb2xvclV0aWwuY2hhbmdlQ29sb3JPcGFjaXR5KGNvbG9yLCAyMCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgY29sb3IoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcclxuICB9XHJcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZyA9IHRoaXMuY29uZmlnLmJhc2VDb2xvcnMucHJpbWFyeSBhcyBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfYmdDb2xvcjogc3RyaW5nID0gQ29sb3JVdGlsLmNoYW5nZUNvbG9yT3BhY2l0eSh0aGlzLmNvbmZpZy5iYXNlQ29sb3JzLnByaW1hcnkgYXMgc3RyaW5nLCAyMCk7XHJcblxyXG4gIHB1YmxpYyBnZXQgYmdDb2xvcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2JnQ29sb3I7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge31cclxuXHJcbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1yZC1wcm9ncmVzc2Jhci1jb250YWluZXJcIlxyXG4gIFtzdHlsZS4tLXByb2dyZXNzLWJhci1jb2xvcl09XCJjb2xvclwiIFtzdHlsZS4tLXByb2dyZXNzLWJhci1iZy1jb2xvcl09XCJiZ0NvbG9yXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm1yZC1wcm9ncmVzc2JhciBpbmRldGVybWluYXRlXCIgKm5nSWY9XCJtb2RlID09PSAnaW5kZXRlcm1pbmF0ZSdcIj48L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibXJkLXByb2dyZXNzYmFyIGRldGVybWluYXRlXCIgKm5nSWY9XCJtb2RlID09PSAnZGV0ZXJtaW5hdGUnXCIgW25nU3R5bGVdPVwieyd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWCgnICsgdmFsdWUgKyAnJSknfVwiPjwvZGl2PlxyXG48L2Rpdj5cclxuIl19