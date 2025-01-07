import { Component, Input, booleanAttribute, numberAttribute } from '@angular/core';
import { ConfigUtil } from './../../../../common/util/config.util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MrdProgressSpinnerComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 4);
    i0.ɵɵelement(1, "circle", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("viewBox", ctx_r1.viewBox);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("stroke-dasharray", ctx_r1.strokeCircumference, "px")("stroke-width", ctx_r1.circleStrokeWidth, "%")("stroke-dashoffset", ctx_r1.strokeCircumference / 2, "px");
    i0.ɵɵattribute("r", ctx_r1.circleRadius);
} }
function MrdProgressSpinnerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    i0.ɵɵelementContainer(3, 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 10);
    i0.ɵɵelementContainer(5, 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 11);
    i0.ɵɵelementContainer(7, 9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵstyleProp("--spinner-color", ctx_r2.color);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function MrdProgressSpinnerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 4);
    i0.ɵɵelement(2, "circle", 13);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("--spinner-color", ctx_r3.color);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("viewBox", ctx_r3.viewBox);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("stroke-dasharray", ctx_r3.strokeCircumference, "px")("stroke-dashoffset", ctx_r3.strokeDashOffset, "px")("stroke-width", ctx_r3.circleStrokeWidth, "%");
    i0.ɵɵattribute("r", ctx_r3.circleRadius);
} }
function MrdProgressSpinnerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 15);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.labelText, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.dots);
} }
export class MrdProgressSpinnerComponent {
    config = ConfigUtil.getConfig();
    mode = 'indeterminate';
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
    }
    get color() {
        return this._color;
    }
    _color = this.config.baseColors.primary;
    get value() {
        return this.mode === 'determinate' ? this._value : 0;
    }
    set value(v) {
        this._value = Math.max(0, Math.min(100, v || 0));
    }
    _value = 0;
    get diameter() {
        return this._diameter;
    }
    set diameter(size) {
        this._diameter = size || 0;
    }
    _diameter = 100;
    get strokeWidth() {
        return this._strokeWidth ?? this.diameter / 10;
    }
    set strokeWidth(value) {
        this._strokeWidth = value || 0;
    }
    _strokeWidth;
    showLabel = false;
    set labelText(label) {
        this._labelText = label;
    }
    get labelText() {
        return this._labelText || '';
    }
    _labelText = 'Lade Daten';
    dots = '';
    interval;
    get circleRadius() {
        return (this.diameter - this.strokeWidth) / 2;
    }
    get strokeCircumference() {
        return 2 * Math.PI * this.circleRadius;
    }
    get strokeDashOffset() {
        if (this.mode === 'determinate') {
            return (this.strokeCircumference * (100 - this._value)) / 100;
        }
        return null;
    }
    get circleStrokeWidth() {
        if (this.diameter === 110) {
            debugger;
        }
        return (this.strokeWidth / this.diameter) * 100;
    }
    get viewBox() {
        const viewBox = this.circleRadius * 2 + this.strokeWidth;
        return `0 0 ${viewBox} ${viewBox}`;
    }
    ngAfterViewInit() {
        if (this.showLabel) {
            this.interval = setInterval(() => {
                if (this.dots.length === 3) {
                    this.dots = '';
                }
                else {
                    this.dots = this.dots + '.';
                }
            }, 700);
        }
    }
    ngOnDestroy() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
    /** @nocollapse */ static ɵfac = function MrdProgressSpinnerComponent_Factory(t) { return new (t || MrdProgressSpinnerComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdProgressSpinnerComponent, selectors: [["mrd-progress-spinner"]], hostVars: 6, hostBindings: function MrdProgressSpinnerComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("width", ctx.diameter, "px")("height", ctx.diameter, "px")("margin-bottom", ctx.showLabel ? 1.5 : 0, "em");
        } }, inputs: { mode: "mode", color: "color", value: ["value", "value", numberAttribute], diameter: ["diameter", "diameter", numberAttribute], strokeWidth: ["strokeWidth", "strokeWidth", numberAttribute], showLabel: ["showLabel", "showLabel", booleanAttribute], labelText: "labelText" }, features: [i0.ɵɵInputTransformsFeature], decls: 5, vars: 3, consts: [["circle", ""], ["class", "mrd-spinner-indeterminate-container", "aria-hidden", "true", 3, "--spinner-color", 4, "ngIf"], ["class", "mrd-progess-spinner-determinate-container", "aria-hidden", "true", 3, "--spinner-color", 4, "ngIf"], ["class", "mrd-progress-spinner-label", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mrd-spinner-indeterminate-circle-svg"], ["cx", "50%", "cy", "50%", 1, "mrd-spinner-indeterminate-circle-svg-circle"], ["aria-hidden", "true", 1, "mrd-spinner-indeterminate-container"], [1, "mrd-spinner-indeterminate-spinners"], [1, "mrd-spinner-indeterminate-part", "mrd-spinner-indeterminate-part-left"], [3, "ngTemplateOutlet"], [1, "mrd-spinner-indeterminate-gap-part"], [1, "mrd-spinner-indeterminate-part", "mrd-spinner-indeterminate-part-right"], ["aria-hidden", "true", 1, "mrd-progess-spinner-determinate-container"], ["cx", "50%", "cy", "50%", 1, "mrd-spinner-determinate-circle-svg-circle"], [1, "mrd-progress-spinner-label"], [1, "mrd-progress-spinner-label-dots"]], template: function MrdProgressSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, MrdProgressSpinnerComponent_ng_template_0_Template, 2, 8, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, MrdProgressSpinnerComponent_div_2_Template, 8, 5, "div", 1);
            i0.ɵɵtemplate(3, MrdProgressSpinnerComponent_div_3_Template, 3, 10, "div", 2);
            i0.ɵɵtemplate(4, MrdProgressSpinnerComponent_div_4_Template, 4, 2, "div", 3);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.mode === "indeterminate");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.mode === "determinate");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showLabel);
        } }, dependencies: [i1.NgIf, i1.NgTemplateOutlet], styles: ["[_nghost-%COMP%]{position:relative;display:block}.mrd-progess-spinner-determinate-container[_ngcontent-%COMP%]{transform:rotate(-90deg)}.mrd-spinner-determinate-circle-svg-circle[_ngcontent-%COMP%]{transition:stroke-dashoffset .5s 0ms cubic-bezier(0,0,.2,1)}.mrd-progess-spinner-determinate-container[_ngcontent-%COMP%], .mrd-spinner-indeterminate-circle-svg[_ngcontent-%COMP%], .mrd-spinner-indeterminate-container[_ngcontent-%COMP%], .mrd-spinner-indeterminate-spinners[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%}.mrd-spinner-indeterminate-container[_ngcontent-%COMP%]{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mrd-spinner-indeterminate-spinners[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_mrd-spinner-indeterminate-spinners-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mrd-spinner-indeterminate-part[_ngcontent-%COMP%]{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mrd-spinner-indeterminate-gap-part[_ngcontent-%COMP%]{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mrd-spinner-indeterminate-container[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_mrd-spinner-indeterminate-container-rotate 1.5682352941176s linear infinite}.mrd-spinner-indeterminate-container[_ngcontent-%COMP%]{opacity:1}.mrd-spinner-determinate-circle-svg-circle[_ngcontent-%COMP%], .mrd-spinner-indeterminate-circle-svg[_ngcontent-%COMP%]{stroke:var(--spinner-color)}.mrd-spinner-indeterminate-part[_ngcontent-%COMP%]   .mrd-spinner-indeterminate-circle-svg[_ngcontent-%COMP%]{width:200%}.mrd-spinner-indeterminate-part-right[_ngcontent-%COMP%]   .mrd-spinner-indeterminate-circle-svg[_ngcontent-%COMP%]{left:-100%}.mrd-spinner-determinate-circle-svg-circle-graphic[_ngcontent-%COMP%], .mrd-spinner-indeterminate-circle-svg[_ngcontent-%COMP%]{fill:#0000}.mrd-spinner-indeterminate-gap-part[_ngcontent-%COMP%]   .mrd-spinner-indeterminate-circle-svg[_ngcontent-%COMP%]{left:-900%;width:2000%;transform:rotate(180deg)}.mrd-progress-spinner-label[_ngcontent-%COMP%]{position:absolute;height:1.5em;margin:0 .25em;bottom:-1.5em;left:6px;right:0;text-align:center}.mrd-progress-spinner-label[_ngcontent-%COMP%]   .mrd-progress-spinner-label-dots[_ngcontent-%COMP%]{display:inline-block;width:12px;text-align:start}.mrd-spinner-indeterminate-part-left[_ngcontent-%COMP%]   .mrd-spinner-indeterminate-circle-svg[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_mrd-spinner-indeterminate-circle-left-rotate 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mrd-spinner-indeterminate-part-right[_ngcontent-%COMP%]   .mrd-spinner-indeterminate-circle-svg[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_mrd-spinner-indeterminate-circle-right-rotate 1333ms cubic-bezier(.4,0,.2,1) infinite both}@keyframes _ngcontent-%COMP%_mrd-spinner-indeterminate-circle-right-rotate{0%{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}@keyframes _ngcontent-%COMP%_mrd-spinner-indeterminate-circle-left-rotate{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes _ngcontent-%COMP%_mrd-spinner-indeterminate-spinners-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(1080deg)}}@keyframes _ngcontent-%COMP%_mrd-spinner-indeterminate-container-rotate{to{transform:rotate(360deg)}}"] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdProgressSpinnerComponent, [{
        type: Component,
        args: [{ selector: 'mrd-progress-spinner', host: {
                    '[style.width.px]': 'diameter',
                    '[style.height.px]': 'diameter',
                    '[style.margin-bottom.em]': 'showLabel ? 1.5 : 0'
                }, template: "<ng-template #circle>\r\n  <svg xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\" class=\"mrd-spinner-indeterminate-circle-svg\" [attr.viewBox]=\"viewBox\">\r\n    <circle cx=\"50%\" cy=\"50%\" class=\"mrd-spinner-indeterminate-circle-svg-circle\" [attr.r]=\"circleRadius\"\r\n      [style.stroke-dasharray.px]=\"strokeCircumference\" [style.stroke-width.%]=\"circleStrokeWidth\" [style.stroke-dashoffset.px]=\"strokeCircumference / 2\"\r\n      ></circle>\r\n  </svg>\r\n</ng-template>\r\n\r\n<div class=\"mrd-spinner-indeterminate-container\" aria-hidden=\"true\" *ngIf=\"mode === 'indeterminate'\" [style.--spinner-color]=\"color\">\r\n  <div class=\"mrd-spinner-indeterminate-spinners\">\r\n    <div class=\"mrd-spinner-indeterminate-part mrd-spinner-indeterminate-part-left\">\r\n      <ng-container [ngTemplateOutlet]=\"circle\"></ng-container>\r\n    </div>\r\n    <div class=\"mrd-spinner-indeterminate-gap-part\">\r\n      <ng-container [ngTemplateOutlet]=\"circle\"></ng-container>\r\n    </div>\r\n    <div class=\"mrd-spinner-indeterminate-part mrd-spinner-indeterminate-part-right\">\r\n      <ng-container [ngTemplateOutlet]=\"circle\"></ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"mrd-progess-spinner-determinate-container\" aria-hidden=\"true\" *ngIf=\"mode === 'determinate'\" [style.--spinner-color]=\"color\">\r\n  <svg class=\"mrd-spinner-indeterminate-circle-svg\" [attr.viewBox]=\"viewBox\"\r\n       xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\">\r\n    <circle [attr.r]=\"circleRadius\"\r\n            [style.stroke-dasharray.px]=\"strokeCircumference\"\r\n            [style.stroke-dashoffset.px]=\"strokeDashOffset\"\r\n            [style.stroke-width.%]=\"circleStrokeWidth\"\r\n            class=\"mrd-spinner-determinate-circle-svg-circle\"\r\n            cx=\"50%\" cy=\"50%\"/>\r\n  </svg>\r\n</div>\r\n\r\n<div class=\"mrd-progress-spinner-label\" *ngIf=\"showLabel\">\r\n  {{labelText}}<span class=\"mrd-progress-spinner-label-dots\">{{dots}}</span>\r\n</div>\r\n", styles: [":host{position:relative;display:block}.mrd-progess-spinner-determinate-container{transform:rotate(-90deg)}.mrd-spinner-determinate-circle-svg-circle{transition:stroke-dashoffset .5s 0ms cubic-bezier(0,0,.2,1)}.mrd-progess-spinner-determinate-container,.mrd-spinner-indeterminate-circle-svg,.mrd-spinner-indeterminate-container,.mrd-spinner-indeterminate-spinners{position:absolute;width:100%;height:100%}.mrd-spinner-indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mrd-spinner-indeterminate-spinners{animation:mrd-spinner-indeterminate-spinners-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mrd-spinner-indeterminate-part{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mrd-spinner-indeterminate-gap-part{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mrd-spinner-indeterminate-container{animation:mrd-spinner-indeterminate-container-rotate 1.5682352941176s linear infinite}.mrd-spinner-indeterminate-container{opacity:1}.mrd-spinner-determinate-circle-svg-circle,.mrd-spinner-indeterminate-circle-svg{stroke:var(--spinner-color)}.mrd-spinner-indeterminate-part .mrd-spinner-indeterminate-circle-svg{width:200%}.mrd-spinner-indeterminate-part-right .mrd-spinner-indeterminate-circle-svg{left:-100%}.mrd-spinner-determinate-circle-svg-circle-graphic,.mrd-spinner-indeterminate-circle-svg{fill:#0000}.mrd-spinner-indeterminate-gap-part .mrd-spinner-indeterminate-circle-svg{left:-900%;width:2000%;transform:rotate(180deg)}.mrd-progress-spinner-label{position:absolute;height:1.5em;margin:0 .25em;bottom:-1.5em;left:6px;right:0;text-align:center}.mrd-progress-spinner-label .mrd-progress-spinner-label-dots{display:inline-block;width:12px;text-align:start}.mrd-spinner-indeterminate-part-left .mrd-spinner-indeterminate-circle-svg{animation:mrd-spinner-indeterminate-circle-left-rotate 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mrd-spinner-indeterminate-part-right .mrd-spinner-indeterminate-circle-svg{animation:mrd-spinner-indeterminate-circle-right-rotate 1333ms cubic-bezier(.4,0,.2,1) infinite both}@keyframes mrd-spinner-indeterminate-circle-right-rotate{0%{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}@keyframes mrd-spinner-indeterminate-circle-left-rotate{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mrd-spinner-indeterminate-spinners-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(1080deg)}}@keyframes mrd-spinner-indeterminate-container-rotate{to{transform:rotate(360deg)}}\n"] }]
    }], null, { mode: [{
            type: Input
        }], color: [{
            type: Input
        }], value: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], diameter: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], strokeWidth: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], showLabel: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], labelText: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXByb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1wcm9ncmVzcy1zcGlubmVyL2NvbXBvbmVudHMvbXJkLXByb2dyZXNzLXNwaW5uZXIvbXJkLXByb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1wcm9ncmVzcy1zcGlubmVyL2NvbXBvbmVudHMvbXJkLXByb2dyZXNzLXNwaW5uZXIvbXJkLXByb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsS0FBSyxFQUFhLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7SUNEakUsbUJBQWdJO0lBQWhJLDhCQUFnSTtJQUM5SCw0QkFFWTtJQUNkLGlCQUFNOzs7SUFKaUcseUNBQXdCO0lBRTNILGVBQWlEO0lBQWpELG9FQUFpRCwrQ0FBQSwyREFBQTtJQUQyQix3Q0FBdUI7OztJQU16Ryw4QkFBcUksYUFBQSxhQUFBO0lBRy9ILDJCQUF5RDtJQUMzRCxpQkFBTTtJQUNOLCtCQUFnRDtJQUM5QywyQkFBeUQ7SUFDM0QsaUJBQU07SUFDTiwrQkFBaUY7SUFDL0UsMkJBQXlEO0lBQzNELGlCQUFNLEVBQUEsRUFBQTs7OztJQVYyRiwrQ0FBK0I7SUFHaEgsZUFBMkI7SUFBM0Isc0NBQTJCO0lBRzNCLGVBQTJCO0lBQTNCLHNDQUEyQjtJQUczQixlQUEyQjtJQUEzQixzQ0FBMkI7OztJQUsvQywrQkFBeUk7SUFDdkksbUJBQzBEO0lBRDFELDhCQUMwRDtJQUN4RCw2QkFLMkI7SUFDN0IsaUJBQU0sRUFBQTs7O0lBVGlHLCtDQUErQjtJQUNwRixlQUF3QjtJQUF4Qix5Q0FBd0I7SUFHaEUsZUFBaUQ7SUFBakQsb0VBQWlELG9EQUFBLCtDQUFBO0lBRGpELHdDQUF1Qjs7O0lBU25DLCtCQUEwRDtJQUN4RCxZQUFhO0lBQUEsZ0NBQThDO0lBQUEsWUFBUTtJQUFBLGlCQUFPLEVBQUE7OztJQUExRSxlQUFhO0lBQWIsZ0RBQWE7SUFBOEMsZUFBUTtJQUFSLGlDQUFROztBRHJCckUsTUFBTSxPQUFPLDJCQUEyQjtJQUU5QixNQUFNLEdBQW1CLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUV4QyxJQUFJLEdBQW9DLGVBQWUsQ0FBQztJQUV4RSxJQUFvQixLQUFLLENBQUMsS0FBYTtRQUNyQyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQWlCLENBQUM7U0FDbEQ7UUFDRCxJQUFJLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDdEIsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQWdCLENBQUM7U0FDakQ7UUFDRCxJQUFJLEtBQUssS0FBSyxNQUFNLEVBQUU7WUFDcEIsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQWMsQ0FBQztTQUMvQztRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNPLE1BQU0sR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFpQixDQUFDO0lBRWxFLElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsQ0FBUztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDTyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBRW5CLElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsSUFBWTtRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNPLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFFeEIsSUFDSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFDRCxJQUFJLFdBQVcsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ08sWUFBWSxDQUFTO0lBRWdCLFNBQVMsR0FBWSxLQUFLLENBQUM7SUFFeEUsSUFBb0IsU0FBUyxDQUFDLEtBQWE7UUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDTyxVQUFVLEdBQVcsWUFBWSxDQUFDO0lBRW5DLElBQUksR0FBVyxFQUFFLENBQUM7SUFDakIsUUFBUSxDQUFNO0lBRXRCLElBQVcsWUFBWTtRQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDekMsQ0FBQztJQUVELElBQVcsZ0JBQWdCO1FBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxhQUFhLEVBQUU7WUFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDL0Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxJQUFXLGlCQUFpQjtRQUMxQixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssR0FBRyxFQUFFO1lBQ3pCLFFBQVEsQ0FBQztTQUNWO1FBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNsRCxDQUFDO0lBRUQsSUFBVyxPQUFPO1FBQ2hCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDekQsT0FBTyxPQUFPLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBRSxHQUFHLEVBQUU7Z0JBQ2hDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztpQkFDaEI7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztpQkFDN0I7WUFDSCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDO3dHQTFHVSwyQkFBMkI7NEZBQTNCLDJCQUEyQjs7K0VBdUJuQixlQUFlLHNDQVNmLGVBQWUsK0NBU2YsZUFBZSx5Q0FTZixnQkFBZ0I7WUNoRXJDLDZIQU1jO1lBRWQsNEVBWU07WUFFTiw2RUFVTTtZQUVOLDRFQUVNOztZQTVCK0QsZUFBOEI7WUFBOUIsbURBQThCO1lBY3hCLGVBQTRCO1lBQTVCLGlEQUE0QjtZQVk5RCxlQUFlO1lBQWYsb0NBQWU7Ozt1RkRwQjNDLDJCQUEyQjtjQVZ2QyxTQUFTOzJCQUNFLHNCQUFzQixRQUMxQjtvQkFDSixrQkFBa0IsRUFBRSxVQUFVO29CQUM5QixtQkFBbUIsRUFBRSxVQUFVO29CQUMvQiwwQkFBMEIsRUFBRSxxQkFBcUI7aUJBQ2xEO2dCQVFlLElBQUk7a0JBQW5CLEtBQUs7WUFFYyxLQUFLO2tCQUF4QixLQUFLO1lBa0JGLEtBQUs7a0JBRFIsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUM7WUFVL0IsUUFBUTtrQkFEWCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBQztZQVUvQixXQUFXO2tCQURkLEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFDO1lBU1UsU0FBUztrQkFBckQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUVoQixTQUFTO2tCQUE1QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBib29sZWFuQXR0cmlidXRlLCBudW1iZXJBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTXJkQ29uZmlnTW9kZWwgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbC9jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgeyBDb25maWdVdGlsIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb25maWcudXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1wcm9ncmVzcy1zcGlubmVyJyxcclxuICBob3N0OiB7XHJcbiAgICAnW3N0eWxlLndpZHRoLnB4XSc6ICdkaWFtZXRlcicsXHJcbiAgICAnW3N0eWxlLmhlaWdodC5weF0nOiAnZGlhbWV0ZXInLFxyXG4gICAgJ1tzdHlsZS5tYXJnaW4tYm90dG9tLmVtXSc6ICdzaG93TGFiZWwgPyAxLjUgOiAwJ1xyXG4gIH0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtcHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmRQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBwcml2YXRlIGNvbmZpZzogTXJkQ29uZmlnTW9kZWwgPSBDb25maWdVdGlsLmdldENvbmZpZygpO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgbW9kZTogJ2RldGVybWluYXRlJyB8ICdpbmRldGVybWluYXRlJyA9ICdpbmRldGVybWluYXRlJztcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICBpZiAoY29sb3IgPT09ICdwcmltYXJ5Jykge1xyXG4gICAgICBjb2xvciA9IHRoaXMuY29uZmlnLmJhc2VDb2xvcnMucHJpbWFyeSBhcyBzdHJpbmc7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sb3IgPT09ICdhY2NlbnQnKSB7XHJcbiAgICAgIGNvbG9yID0gdGhpcy5jb25maWcuYmFzZUNvbG9ycy5hY2NlbnQgYXMgc3RyaW5nO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbG9yID09PSAnd2FybicpIHtcclxuICAgICAgY29sb3IgPSB0aGlzLmNvbmZpZy5iYXNlQ29sb3JzLndhcm4gYXMgc3RyaW5nO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcclxuICB9XHJcbiAgcHVibGljIGdldCBjb2xvcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xyXG4gIH1cclxuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nID0gdGhpcy5jb25maWcuYmFzZUNvbG9ycy5wcmltYXJ5IGFzIHN0cmluZztcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pXHJcbiAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnZGV0ZXJtaW5hdGUnID8gdGhpcy5fdmFsdWUgOiAwO1xyXG4gIH1cclxuICBzZXQgdmFsdWUodjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl92YWx1ZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgdiB8fCAwKSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3ZhbHVlID0gMDtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pXHJcbiAgZ2V0IGRpYW1ldGVyKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlhbWV0ZXI7XHJcbiAgfVxyXG4gIHNldCBkaWFtZXRlcihzaXplOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2RpYW1ldGVyID0gc2l6ZSB8fCAwO1xyXG4gIH1cclxuICBwcml2YXRlIF9kaWFtZXRlciA9IDEwMDtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pXHJcbiAgZ2V0IHN0cm9rZVdpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3Ryb2tlV2lkdGggPz8gdGhpcy5kaWFtZXRlciAvIDEwO1xyXG4gIH1cclxuICBzZXQgc3Ryb2tlV2lkdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fc3Ryb2tlV2lkdGggPSB2YWx1ZSB8fCAwO1xyXG4gIH1cclxuICBwcml2YXRlIF9zdHJva2VXaWR0aDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzaG93TGFiZWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHNldCBsYWJlbFRleHQobGFiZWw6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbGFiZWxUZXh0ID0gbGFiZWw7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgbGFiZWxUZXh0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGFiZWxUZXh0IHx8ICcnO1xyXG4gIH1cclxuICBwcml2YXRlIF9sYWJlbFRleHQ6IHN0cmluZyA9ICdMYWRlIERhdGVuJztcclxuXHJcbiAgcHVibGljIGRvdHM6IHN0cmluZyA9ICcnO1xyXG4gIHByaXZhdGUgaW50ZXJ2YWw6IGFueTtcclxuXHJcbiAgcHVibGljIGdldCBjaXJjbGVSYWRpdXMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAodGhpcy5kaWFtZXRlciAtIHRoaXMuc3Ryb2tlV2lkdGgpIC8gMjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc3Ryb2tlQ2lyY3VtZmVyZW5jZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIDIgKiBNYXRoLlBJICogdGhpcy5jaXJjbGVSYWRpdXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHN0cm9rZURhc2hPZmZzZXQoKSB7XHJcbiAgICBpZiAodGhpcy5tb2RlID09PSAnZGV0ZXJtaW5hdGUnKSB7XHJcbiAgICAgIHJldHVybiAodGhpcy5zdHJva2VDaXJjdW1mZXJlbmNlICogKDEwMCAtIHRoaXMuX3ZhbHVlKSkgLyAxMDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgY2lyY2xlU3Ryb2tlV2lkdGgoKSB7XHJcbiAgICBpZiAodGhpcy5kaWFtZXRlciA9PT0gMTEwKSB7XHJcbiAgICAgIGRlYnVnZ2VyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICh0aGlzLnN0cm9rZVdpZHRoIC8gdGhpcy5kaWFtZXRlcikgKiAxMDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHZpZXdCb3goKSB7XHJcbiAgICBjb25zdCB2aWV3Qm94ID0gdGhpcy5jaXJjbGVSYWRpdXMgKiAyICsgdGhpcy5zdHJva2VXaWR0aDtcclxuICAgIHJldHVybiBgMCAwICR7dmlld0JveH0gJHt2aWV3Qm94fWA7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zaG93TGFiZWwpIHtcclxuICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZG90cy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgIHRoaXMuZG90cyA9ICcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmRvdHMgPSB0aGlzLmRvdHMgKyAnLic7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCA3MDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnRlcnZhbCkge1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8bmctdGVtcGxhdGUgI2NpcmNsZT5cclxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGNsYXNzPVwibXJkLXNwaW5uZXItaW5kZXRlcm1pbmF0ZS1jaXJjbGUtc3ZnXCIgW2F0dHIudmlld0JveF09XCJ2aWV3Qm94XCI+XHJcbiAgICA8Y2lyY2xlIGN4PVwiNTAlXCIgY3k9XCI1MCVcIiBjbGFzcz1cIm1yZC1zcGlubmVyLWluZGV0ZXJtaW5hdGUtY2lyY2xlLXN2Zy1jaXJjbGVcIiBbYXR0ci5yXT1cImNpcmNsZVJhZGl1c1wiXHJcbiAgICAgIFtzdHlsZS5zdHJva2UtZGFzaGFycmF5LnB4XT1cInN0cm9rZUNpcmN1bWZlcmVuY2VcIiBbc3R5bGUuc3Ryb2tlLXdpZHRoLiVdPVwiY2lyY2xlU3Ryb2tlV2lkdGhcIiBbc3R5bGUuc3Ryb2tlLWRhc2hvZmZzZXQucHhdPVwic3Ryb2tlQ2lyY3VtZmVyZW5jZSAvIDJcIlxyXG4gICAgICA+PC9jaXJjbGU+XHJcbiAgPC9zdmc+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48ZGl2IGNsYXNzPVwibXJkLXNwaW5uZXItaW5kZXRlcm1pbmF0ZS1jb250YWluZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAqbmdJZj1cIm1vZGUgPT09ICdpbmRldGVybWluYXRlJ1wiIFtzdHlsZS4tLXNwaW5uZXItY29sb3JdPVwiY29sb3JcIj5cclxuICA8ZGl2IGNsYXNzPVwibXJkLXNwaW5uZXItaW5kZXRlcm1pbmF0ZS1zcGlubmVyc1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1yZC1zcGlubmVyLWluZGV0ZXJtaW5hdGUtcGFydCBtcmQtc3Bpbm5lci1pbmRldGVybWluYXRlLXBhcnQtbGVmdFwiPlxyXG4gICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNpcmNsZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXJkLXNwaW5uZXItaW5kZXRlcm1pbmF0ZS1nYXAtcGFydFwiPlxyXG4gICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNpcmNsZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXJkLXNwaW5uZXItaW5kZXRlcm1pbmF0ZS1wYXJ0IG1yZC1zcGlubmVyLWluZGV0ZXJtaW5hdGUtcGFydC1yaWdodFwiPlxyXG4gICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNpcmNsZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cIm1yZC1wcm9nZXNzLXNwaW5uZXItZGV0ZXJtaW5hdGUtY29udGFpbmVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgKm5nSWY9XCJtb2RlID09PSAnZGV0ZXJtaW5hdGUnXCIgW3N0eWxlLi0tc3Bpbm5lci1jb2xvcl09XCJjb2xvclwiPlxyXG4gIDxzdmcgY2xhc3M9XCJtcmQtc3Bpbm5lci1pbmRldGVybWluYXRlLWNpcmNsZS1zdmdcIiBbYXR0ci52aWV3Qm94XT1cInZpZXdCb3hcIlxyXG4gICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZvY3VzYWJsZT1cImZhbHNlXCI+XHJcbiAgICA8Y2lyY2xlIFthdHRyLnJdPVwiY2lyY2xlUmFkaXVzXCJcclxuICAgICAgICAgICAgW3N0eWxlLnN0cm9rZS1kYXNoYXJyYXkucHhdPVwic3Ryb2tlQ2lyY3VtZmVyZW5jZVwiXHJcbiAgICAgICAgICAgIFtzdHlsZS5zdHJva2UtZGFzaG9mZnNldC5weF09XCJzdHJva2VEYXNoT2Zmc2V0XCJcclxuICAgICAgICAgICAgW3N0eWxlLnN0cm9rZS13aWR0aC4lXT1cImNpcmNsZVN0cm9rZVdpZHRoXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJtcmQtc3Bpbm5lci1kZXRlcm1pbmF0ZS1jaXJjbGUtc3ZnLWNpcmNsZVwiXHJcbiAgICAgICAgICAgIGN4PVwiNTAlXCIgY3k9XCI1MCVcIi8+XHJcbiAgPC9zdmc+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cIm1yZC1wcm9ncmVzcy1zcGlubmVyLWxhYmVsXCIgKm5nSWY9XCJzaG93TGFiZWxcIj5cclxuICB7e2xhYmVsVGV4dH19PHNwYW4gY2xhc3M9XCJtcmQtcHJvZ3Jlc3Mtc3Bpbm5lci1sYWJlbC1kb3RzXCI+e3tkb3RzfX08L3NwYW4+XHJcbjwvZGl2PlxyXG4iXX0=