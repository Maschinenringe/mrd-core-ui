import { booleanAttribute, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { colorAttribute, colorThemeAttribute } from '../../../../common/transforms/color-transform';
import { ColorUtil } from '../../../../common/util/color.util';
import { ConfigUtil } from '../../../../common/util/config.util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../mrd-icon/components/mrd-icon.component";
import * as i3 from "../../../mrd-button/components/mrd-button/mrd-button.component";
import * as i4 from "../../../mrd-tooltip/common/directive/tool-tip-renderer/tool-tip-renderer.directive";
const _c0 = ["chipText"];
function MrdChipComponent_mrd_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mrd-icon", 6);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("svgIcon", ctx_r0.prefixIcon);
} }
function MrdChipComponent_mrd_icon_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mrd-icon", 6);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("svgIcon", ctx_r2.suffixIcon);
} }
function MrdChipComponent_mrd_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-button", 7);
    i0.ɵɵlistener("click", function MrdChipComponent_mrd_button_7_Template_mrd_button_click_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.closeClicked($event)); });
    i0.ɵɵelementStart(1, "span", 8);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 9)(3, "g", 10)(4, "g", 11);
    i0.ɵɵelement(5, "path", 12)(6, "path", 13);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r3.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("--chip-close-icon-color", ctx_r3.closeIconColor)("--chip-close-icon-cross-color", ctx_r3.closeIconCrossColor);
} }
const _c1 = function (a0) { return { "cursor": a0 }; };
const _c2 = function (a0) { return { "pointer-events": a0 }; };
const _c3 = ["*"];
export class MrdChipComponent {
    cdr;
    chipText;
    primary = false;
    accent = false;
    warn = false;
    set color(value) {
        this._color = value;
    }
    get color() {
        return this._color;
    }
    _color;
    set backgroundColor(value) {
        this._backgroundColor = value;
    }
    get backgroundColor() {
        return this._backgroundColor;
    }
    _backgroundColor;
    clickable = false;
    closeable = true;
    prefixIcon;
    suffixIcon;
    set disabled(value) {
        this._disabled = value;
        this.backgroundColor = value ? '#ced9dd' : this.backgroundColor;
        this.color = value ? '#a6a6a6' : this.color;
    }
    get disabled() {
        return this._disabled;
    }
    _disabled = false;
    closeIconColor;
    closeIconCrossColor;
    close = new EventEmitter();
    /**
       * Die Konfiguration des Mrd-Buttons.
       *
       * @private
       * @type {MrdConfigModel}
       * @memberof MrdButtonComponent
       */
    _config = ConfigUtil.getConfig();
    chipTextValue;
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        if ((this.primary || this.accent || this.warn) && !this.backgroundColor) {
            this.backgroundColor = this._config.baseColors[this.primary ? 'primary' : this.accent ? 'accent' : 'warn'];
        }
        else if (!this.backgroundColor) {
            this.backgroundColor = '#ced9dd';
        }
        if (!this.color || !ColorUtil.isHexColor(this.color)) {
            this.color = ColorUtil.shouldTextBeDark(this.backgroundColor) ? '#000000' : '#ffffff';
        }
        let iconBgDark = ColorUtil.shouldTextBeDark(this.backgroundColor);
        let customIconBg = true;
        if (!this.closeIconColor) {
            this.closeIconColor = iconBgDark ? '#606367' : '#ffffff';
            customIconBg = false;
        }
        this.closeIconCrossColor = customIconBg ? ColorUtil.shouldTextBeDark(this.closeIconColor) ? '#000000' : '#ffffff' : iconBgDark ? '#ffffff' : '#000000';
        if (this.chipText) {
            this.chipTextValue = this.chipText.nativeElement.innerText;
        }
        this.cdr.detectChanges();
    }
    closeClicked(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        if (!this.disabled) {
            this.close.emit();
        }
    }
    /** @nocollapse */ static ɵfac = function MrdChipComponent_Factory(t) { return new (t || MrdChipComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdChipComponent, selectors: [["mrd-chip"]], viewQuery: function MrdChipComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.chipText = _t.first);
        } }, inputs: { primary: ["primary", "primary", booleanAttribute], accent: ["accent", "accent", booleanAttribute], warn: ["warn", "warn", booleanAttribute], color: ["color", "color", colorThemeAttribute], backgroundColor: ["backgroundColor", "backgroundColor", colorAttribute], clickable: ["clickable", "clickable", booleanAttribute], closeable: ["closeable", "closeable", booleanAttribute], prefixIcon: "prefixIcon", suffixIcon: "suffixIcon", disabled: ["disabled", "disabled", booleanAttribute], closeIconColor: ["closeIconColor", "closeIconColor", colorAttribute], closeIconCrossColor: ["closeIconCrossColor", "closeIconCrossColor", colorAttribute] }, outputs: { close: "close" }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c3, decls: 8, vars: 14, consts: [[1, "mrd-chip-container", 3, "ngStyle"], [1, "mrd-chip-content", 3, "ngStyle"], [3, "svgIcon", 4, "ngIf"], ["showIfTruncated", "", 1, "mrd-chip-text", 3, "mrdToolTip"], ["chipText", ""], ["icon-button", "", "fullIcon", "", "diameter", "1em", 3, "disabled", "click", 4, "ngIf"], [3, "svgIcon"], ["icon-button", "", "fullIcon", "", "diameter", "1em", 3, "disabled", "click"], ["mrd-icon", "", 1, "chip-close-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "100%", "height", "100%", "viewBox", "0 0 36 36", "fit", "", "preserveAspectRatio", "xMidYMid meet", "focusable", "false"], ["transform", "translate(0 0.001)"], ["id", "X-gross-hellgrau", "transform", "translate(0 -0.001)"], ["d", "M195.722,2783.271a18,18,0,1,1-25.456,0A18,18,0,0,1,195.722,2783.271Z", "transform", "translate(-164.994 -2778)", 1, "kreis"], ["d", "M-184.391-11.15l-2.953-2.953L-190.3-11.15a1.581,1.581,0,0,1-1.12.464,1.581,1.581,0,0,1-1.12-.464,1.585,1.585,0,0,1,0-2.241l2.953-2.953-2.953-2.953a1.584,1.584,0,0,1,0-2.24,1.584,1.584,0,0,1,2.24,0l2.953,2.953,2.953-2.953a1.584,1.584,0,0,1,2.24,0,1.584,1.584,0,0,1,0,2.24l-2.953,2.953,2.953,2.953a1.585,1.585,0,0,1,0,2.241,1.579,1.579,0,0,1-1.12.464A1.579,1.579,0,0,1-184.391-11.15Z", "transform", "translate(205.343 34.343)", 1, "x"]], template: function MrdChipComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, MrdChipComponent_mrd_icon_2_Template, 1, 1, "mrd-icon", 2);
            i0.ɵɵelementStart(3, "div", 3, 4);
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, MrdChipComponent_mrd_icon_6_Template, 1, 1, "mrd-icon", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, MrdChipComponent_mrd_button_7_Template, 7, 5, "mrd-button", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleProp("--chip-color", ctx.color)("--chip-background-color", ctx.backgroundColor);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(10, _c1, ctx.disabled || !ctx.clickable ? "default" : "pointer"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(12, _c2, ctx.disabled ? "none" : "auto"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.prefixIcon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("mrdToolTip", ctx.chipTextValue);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.suffixIcon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.closeable);
        } }, dependencies: [i1.NgIf, i1.NgStyle, i2.MrdIconComponent, i3.MrdButtonComponent, i4.ToolTipRendererDirective], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:-moz-fit-content;width:fit-content;max-width:100%}.mrd-chip-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.125em .7em;gap:1em;border-radius:2em;background-color:var(--chip-background-color);max-width:100%}.mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;width:100%;gap:.5em;line-height:1.5em;max-width:100%;min-width:calc(100% - 2em)}.mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-content[_ngcontent-%COMP%]   .mrd-chip-text[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--chip-color)}.mrd-chip-container[_ngcontent-%COMP%]   mrd-icon[_ngcontent-%COMP%], .mrd-chip-container[_ngcontent-%COMP%]   span[mrd-icon].chip-close-icon[_ngcontent-%COMP%]{display:block;min-width:1em;width:1em;height:1em}.mrd-chip-container[_ngcontent-%COMP%]   mrd-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path.kreis[_ngcontent-%COMP%], .mrd-chip-container[_ngcontent-%COMP%]   span[mrd-icon].chip-close-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path.kreis[_ngcontent-%COMP%]{fill:var(--chip-close-icon-color)}.mrd-chip-container[_ngcontent-%COMP%]   mrd-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path.x[_ngcontent-%COMP%], .mrd-chip-container[_ngcontent-%COMP%]   span[mrd-icon].chip-close-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path.x[_ngcontent-%COMP%]{fill:var(--chip-close-icon-cross-color)}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdChipComponent, [{
        type: Component,
        args: [{ selector: 'mrd-chip', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-chip-container\"\r\n  [ngStyle]=\"{ 'cursor': disabled || !clickable ? 'default' : 'pointer' }\"\r\n  [style.--chip-color]=\"color\"\r\n  [style.--chip-background-color]=\"backgroundColor\"\r\n>\r\n  <div class=\"mrd-chip-content\" [ngStyle]=\"{'pointer-events': disabled ? 'none' : 'auto'}\">\r\n    <mrd-icon *ngIf=\"prefixIcon\" [svgIcon]=\"prefixIcon\"></mrd-icon>\r\n    <div #chipText class=\"mrd-chip-text\" [mrdToolTip]=\"chipTextValue\" showIfTruncated>\r\n      <ng-content></ng-content>\r\n    </div>\r\n    <mrd-icon *ngIf=\"suffixIcon\" [svgIcon]=\"suffixIcon\"></mrd-icon>\r\n  </div>\r\n\r\n  <mrd-button icon-button fullIcon diameter=\"1em\" (click)=\"closeClicked($event)\" [disabled]=\"disabled\" *ngIf=\"closeable\">\r\n    <!-- <mrd-icon svgIcon=\"mrd_close_grey\"></mrd-icon> -->\r\n     <span mrd-icon [style.--chip-close-icon-color]=\"closeIconColor\" [style.--chip-close-icon-cross-color]=\"closeIconCrossColor\" class=\"chip-close-icon\">\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 36 36\" fit=\"\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\">\r\n        <g transform=\"translate(0 0.001)\">\r\n          <g id=\"X-gross-hellgrau\" transform=\"translate(0 -0.001)\">\r\n            <path class=\"kreis\" d=\"M195.722,2783.271a18,18,0,1,1-25.456,0A18,18,0,0,1,195.722,2783.271Z\" transform=\"translate(-164.994 -2778)\"></path>\r\n            <path class=\"x\" d=\"M-184.391-11.15l-2.953-2.953L-190.3-11.15a1.581,1.581,0,0,1-1.12.464,1.581,1.581,0,0,1-1.12-.464,1.585,1.585,0,0,1,0-2.241l2.953-2.953-2.953-2.953a1.584,1.584,0,0,1,0-2.24,1.584,1.584,0,0,1,2.24,0l2.953,2.953,2.953-2.953a1.584,1.584,0,0,1,2.24,0,1.584,1.584,0,0,1,0,2.24l-2.953,2.953,2.953,2.953a1.585,1.585,0,0,1,0,2.241,1.579,1.579,0,0,1-1.12.464A1.579,1.579,0,0,1-184.391-11.15Z\" transform=\"translate(205.343 34.343)\"></path>\r\n          </g>\r\n        </g>\r\n      </svg>\r\n     </span>\r\n  </mrd-button>\r\n</div>\r\n", styles: [":host{display:flex;flex-direction:column;justify-content:center;align-items:center;width:-moz-fit-content;width:fit-content;max-width:100%}.mrd-chip-container{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.125em .7em;gap:1em;border-radius:2em;background-color:var(--chip-background-color);max-width:100%}.mrd-chip-container .mrd-chip-content{display:flex;flex-direction:row;align-items:center;width:100%;gap:.5em;line-height:1.5em;max-width:100%;min-width:calc(100% - 2em)}.mrd-chip-container .mrd-chip-content .mrd-chip-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--chip-color)}.mrd-chip-container mrd-icon,.mrd-chip-container span[mrd-icon].chip-close-icon{display:block;min-width:1em;width:1em;height:1em}.mrd-chip-container mrd-icon svg path.kreis,.mrd-chip-container span[mrd-icon].chip-close-icon svg path.kreis{fill:var(--chip-close-icon-color)}.mrd-chip-container mrd-icon svg path.x,.mrd-chip-container span[mrd-icon].chip-close-icon svg path.x{fill:var(--chip-close-icon-cross-color)}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { chipText: [{
            type: ViewChild,
            args: ['chipText']
        }], primary: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], accent: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], warn: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], color: [{
            type: Input,
            args: [{ transform: colorThemeAttribute }]
        }], backgroundColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], clickable: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], closeable: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], prefixIcon: [{
            type: Input,
            args: ['prefixIcon']
        }], suffixIcon: [{
            type: Input,
            args: ['suffixIcon']
        }], disabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], closeIconColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], closeIconCrossColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], close: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWNoaXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1jaGlwL2NvbXBvbmVudHMvbXJkLWNoaXAvbXJkLWNoaXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1jaGlwL2NvbXBvbmVudHMvbXJkLWNoaXAvbXJkLWNoaXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzSyxPQUFPLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDcEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7Ozs7SUNFN0QsOEJBQStEOzs7SUFBbEMsMkNBQXNCOzs7SUFJbkQsOEJBQStEOzs7SUFBbEMsMkNBQXNCOzs7O0lBR3JELHFDQUF1SDtJQUF2RSw4S0FBUyxlQUFBLDJCQUFvQixDQUFBLElBQUM7SUFFM0UsK0JBQW9KO0lBQ25KLG1CQUFvSjtJQUFwSiw4QkFBb0osWUFBQSxZQUFBO0lBRzlJLDJCQUEwSSxlQUFBO0lBRTVJLGlCQUFJLEVBQUEsRUFBQSxFQUFBLEVBQUE7OztJQVJtRSwwQ0FBcUI7SUFFbEYsZUFBZ0Q7SUFBaEQsZ0VBQWdELDZEQUFBOzs7OztBREhwRSxNQUFNLE9BQU8sZ0JBQWdCO0lBMERqQjtJQXhEb0IsUUFBUSxDQUFzQztJQUUvQixPQUFPLEdBQVks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QUFnQjtZQUFoQixxQ0FBZ0I7WUFHeUUsZUFBZTtZQUFmLG9DQUFlOzs7dUZERDFHLGdCQUFnQjtjQU41QixTQUFTOzJCQUNFLFVBQVUsbUJBR0gsdUJBQXVCLENBQUMsTUFBTTtvRUFJakIsUUFBUTtrQkFBckMsU0FBUzttQkFBQyxVQUFVO1lBRXdCLE9BQU87a0JBQW5ELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFDUyxNQUFNO2tCQUFsRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBQ1MsSUFBSTtrQkFBaEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUVpQixLQUFLO2tCQUF4RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLG1CQUFtQixFQUFDO1lBUVEsZUFBZTtrQkFBN0QsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxjQUFjLEVBQUM7WUFRVSxTQUFTO2tCQUFyRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBRVMsU0FBUztrQkFBckQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUVmLFVBQVU7a0JBQTlCLEtBQUs7bUJBQUMsWUFBWTtZQUNFLFVBQVU7a0JBQTlCLEtBQUs7bUJBQUMsWUFBWTtZQUU4QixRQUFRO2tCQUF4RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBVU8sY0FBYztrQkFBeEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxjQUFjLEVBQUM7WUFDUyxtQkFBbUI7a0JBQTdELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsY0FBYyxFQUFDO1lBRXhCLEtBQUs7a0JBQWQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIGJvb2xlYW5BdHRyaWJ1dGUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNcmRDb25maWdNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbC9jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgeyBjb2xvckF0dHJpYnV0ZSwgY29sb3JUaGVtZUF0dHJpYnV0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi90cmFuc2Zvcm1zL2NvbG9yLXRyYW5zZm9ybSc7XHJcbmltcG9ydCB7IENvbG9yVXRpbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbG9yLnV0aWwnO1xyXG5pbXBvcnQgeyBDb25maWdVdGlsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29uZmlnLnV0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtcmQtY2hpcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1jaGlwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtY2hpcC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmRDaGlwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NoaXBUZXh0JykgcHVibGljIGNoaXBUZXh0OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcHJpbWFyeTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGFjY2VudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHdhcm46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIEBJbnB1dCh7dHJhbnNmb3JtOiBjb2xvclRoZW1lQXR0cmlidXRlfSkgcHVibGljIHNldCBjb2xvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XHJcbiAgIH1cclxuICAgcHVibGljIGdldCBjb2xvcigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xyXG4gICB9XHJcbiAgIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XHJcblxyXG4gICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IGJhY2tncm91bmRDb2xvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgIHRoaXMuX2JhY2tncm91bmRDb2xvciA9IHZhbHVlO1xyXG4gICB9XHJcbiAgICBwdWJsaWMgZ2V0IGJhY2tncm91bmRDb2xvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmFja2dyb3VuZENvbG9yO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGNsaWNrYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGNsb3NlYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgncHJlZml4SWNvbicpIHByZWZpeEljb246IHN0cmluZztcclxuICBASW5wdXQoJ3N1ZmZpeEljb24nKSBzdWZmaXhJY29uOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gdmFsdWUgPyAnI2NlZDlkZCcgOiB0aGlzLmJhY2tncm91bmRDb2xvcjtcclxuICAgIHRoaXMuY29sb3IgPSB2YWx1ZSA/ICcjYTZhNmE2JyA6IHRoaXMuY29sb3I7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgZGlzYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjbG9zZUljb25Db2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjbG9zZUljb25Dcm9zc0NvbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSBjbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAvKipcclxuICAgICAqIERpZSBLb25maWd1cmF0aW9uIGRlcyBNcmQtQnV0dG9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHR5cGUge01yZENvbmZpZ01vZGVsfVxyXG4gICAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9jb25maWc6IE1yZENvbmZpZ01vZGVsID0gQ29uZmlnVXRpbC5nZXRDb25maWcoKTtcclxuXHJcbiAgcHVibGljIGNoaXBUZXh0VmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICgodGhpcy5wcmltYXJ5IHx8IHRoaXMuYWNjZW50IHx8IHRoaXMud2FybikgJiYgIXRoaXMuYmFja2dyb3VuZENvbG9yKSB7XHJcbiAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gdGhpcy5fY29uZmlnLmJhc2VDb2xvcnNbdGhpcy5wcmltYXJ5ID8gJ3ByaW1hcnknIDogdGhpcy5hY2NlbnQgPyAnYWNjZW50JyA6ICd3YXJuJ10gYXMgc3RyaW5nOyBcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMuYmFja2dyb3VuZENvbG9yKSB7XHJcbiAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gJyNjZWQ5ZGQnO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLmNvbG9yIHx8ICFDb2xvclV0aWwuaXNIZXhDb2xvcih0aGlzLmNvbG9yKSkge1xyXG4gICAgICB0aGlzLmNvbG9yID0gQ29sb3JVdGlsLnNob3VsZFRleHRCZURhcmsodGhpcy5iYWNrZ3JvdW5kQ29sb3IpID8gJyMwMDAwMDAnIDogJyNmZmZmZmYnO1xyXG4gICAgfVxyXG4gICAgbGV0IGljb25CZ0Rhcms6IGJvb2xlYW4gPSBDb2xvclV0aWwuc2hvdWxkVGV4dEJlRGFyayh0aGlzLmJhY2tncm91bmRDb2xvcilcclxuICAgIGxldCBjdXN0b21JY29uQmc6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgaWYgKCF0aGlzLmNsb3NlSWNvbkNvbG9yKSB7XHJcbiAgICAgIHRoaXMuY2xvc2VJY29uQ29sb3IgPSBpY29uQmdEYXJrID8gJyM2MDYzNjcnIDogJyNmZmZmZmYnO1xyXG4gICAgICBjdXN0b21JY29uQmcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuY2xvc2VJY29uQ3Jvc3NDb2xvciA9IGN1c3RvbUljb25CZyA/IENvbG9yVXRpbC5zaG91bGRUZXh0QmVEYXJrKHRoaXMuY2xvc2VJY29uQ29sb3IpID8gJyMwMDAwMDAnIDogJyNmZmZmZmYnIDogaWNvbkJnRGFyayA/ICcjZmZmZmZmJyA6ICcjMDAwMDAwJztcclxuXHJcbiAgICBpZiAodGhpcy5jaGlwVGV4dCkge1xyXG4gICAgICB0aGlzLmNoaXBUZXh0VmFsdWUgPSB0aGlzLmNoaXBUZXh0Lm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZUNsaWNrZWQoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5jbG9zZS5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJtcmQtY2hpcC1jb250YWluZXJcIlxyXG4gIFtuZ1N0eWxlXT1cInsgJ2N1cnNvcic6IGRpc2FibGVkIHx8ICFjbGlja2FibGUgPyAnZGVmYXVsdCcgOiAncG9pbnRlcicgfVwiXHJcbiAgW3N0eWxlLi0tY2hpcC1jb2xvcl09XCJjb2xvclwiXHJcbiAgW3N0eWxlLi0tY2hpcC1iYWNrZ3JvdW5kLWNvbG9yXT1cImJhY2tncm91bmRDb2xvclwiXHJcbj5cclxuICA8ZGl2IGNsYXNzPVwibXJkLWNoaXAtY29udGVudFwiIFtuZ1N0eWxlXT1cInsncG9pbnRlci1ldmVudHMnOiBkaXNhYmxlZCA/ICdub25lJyA6ICdhdXRvJ31cIj5cclxuICAgIDxtcmQtaWNvbiAqbmdJZj1cInByZWZpeEljb25cIiBbc3ZnSWNvbl09XCJwcmVmaXhJY29uXCI+PC9tcmQtaWNvbj5cclxuICAgIDxkaXYgI2NoaXBUZXh0IGNsYXNzPVwibXJkLWNoaXAtdGV4dFwiIFttcmRUb29sVGlwXT1cImNoaXBUZXh0VmFsdWVcIiBzaG93SWZUcnVuY2F0ZWQ+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gICAgPG1yZC1pY29uICpuZ0lmPVwic3VmZml4SWNvblwiIFtzdmdJY29uXT1cInN1ZmZpeEljb25cIj48L21yZC1pY29uPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8bXJkLWJ1dHRvbiBpY29uLWJ1dHRvbiBmdWxsSWNvbiBkaWFtZXRlcj1cIjFlbVwiIChjbGljayk9XCJjbG9zZUNsaWNrZWQoJGV2ZW50KVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiICpuZ0lmPVwiY2xvc2VhYmxlXCI+XHJcbiAgICA8IS0tIDxtcmQtaWNvbiBzdmdJY29uPVwibXJkX2Nsb3NlX2dyZXlcIj48L21yZC1pY29uPiAtLT5cclxuICAgICA8c3BhbiBtcmQtaWNvbiBbc3R5bGUuLS1jaGlwLWNsb3NlLWljb24tY29sb3JdPVwiY2xvc2VJY29uQ29sb3JcIiBbc3R5bGUuLS1jaGlwLWNsb3NlLWljb24tY3Jvc3MtY29sb3JdPVwiY2xvc2VJY29uQ3Jvc3NDb2xvclwiIGNsYXNzPVwiY2hpcC1jbG9zZS1pY29uXCI+XHJcbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB2aWV3Qm94PVwiMCAwIDM2IDM2XCIgZml0PVwiXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIiBmb2N1c2FibGU9XCJmYWxzZVwiPlxyXG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDAuMDAxKVwiPlxyXG4gICAgICAgICAgPGcgaWQ9XCJYLWdyb3NzLWhlbGxncmF1XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgLTAuMDAxKVwiPlxyXG4gICAgICAgICAgICA8cGF0aCBjbGFzcz1cImtyZWlzXCIgZD1cIk0xOTUuNzIyLDI3ODMuMjcxYTE4LDE4LDAsMSwxLTI1LjQ1NiwwQTE4LDE4LDAsMCwxLDE5NS43MjIsMjc4My4yNzFaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNjQuOTk0IC0yNzc4KVwiPjwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJ4XCIgZD1cIk0tMTg0LjM5MS0xMS4xNWwtMi45NTMtMi45NTNMLTE5MC4zLTExLjE1YTEuNTgxLDEuNTgxLDAsMCwxLTEuMTIuNDY0LDEuNTgxLDEuNTgxLDAsMCwxLTEuMTItLjQ2NCwxLjU4NSwxLjU4NSwwLDAsMSwwLTIuMjQxbDIuOTUzLTIuOTUzLTIuOTUzLTIuOTUzYTEuNTg0LDEuNTg0LDAsMCwxLDAtMi4yNCwxLjU4NCwxLjU4NCwwLDAsMSwyLjI0LDBsMi45NTMsMi45NTMsMi45NTMtMi45NTNhMS41ODQsMS41ODQsMCwwLDEsMi4yNCwwLDEuNTg0LDEuNTg0LDAsMCwxLDAsMi4yNGwtMi45NTMsMi45NTMsMi45NTMsMi45NTNhMS41ODUsMS41ODUsMCwwLDEsMCwyLjI0MSwxLjU3OSwxLjU3OSwwLDAsMS0xLjEyLjQ2NEExLjU3OSwxLjU3OSwwLDAsMS0xODQuMzkxLTExLjE1WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyMDUuMzQzIDM0LjM0MylcIj48L3BhdGg+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L3N2Zz5cclxuICAgICA8L3NwYW4+XHJcbiAgPC9tcmQtYnV0dG9uPlxyXG48L2Rpdj5cclxuIl19