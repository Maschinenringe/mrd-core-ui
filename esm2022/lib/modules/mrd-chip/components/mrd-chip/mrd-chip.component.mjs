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
    i0.ɵɵelement(1, "mrd-icon", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r3.disabled);
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
        } }, inputs: { primary: ["primary", "primary", booleanAttribute], accent: ["accent", "accent", booleanAttribute], warn: ["warn", "warn", booleanAttribute], color: ["color", "color", colorThemeAttribute], backgroundColor: ["backgroundColor", "backgroundColor", colorAttribute], clickable: ["clickable", "clickable", booleanAttribute], closeable: ["closeable", "closeable", booleanAttribute], prefixIcon: "prefixIcon", suffixIcon: "suffixIcon", disabled: ["disabled", "disabled", booleanAttribute] }, outputs: { close: "close" }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c3, decls: 8, vars: 14, consts: [[1, "mrd-chip-container", 3, "ngStyle"], [1, "mrd-chip-content", 3, "ngStyle"], [3, "svgIcon", 4, "ngIf"], ["showIfTruncated", "", 1, "mrd-chip-text", 3, "mrdToolTip"], ["chipText", ""], ["icon-button", "", "fullIcon", "", "diameter", "1em", 3, "disabled", "click", 4, "ngIf"], [3, "svgIcon"], ["icon-button", "", "fullIcon", "", "diameter", "1em", 3, "disabled", "click"], ["svgIcon", "mrd_close_grey"]], template: function MrdChipComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, MrdChipComponent_mrd_icon_2_Template, 1, 1, "mrd-icon", 2);
            i0.ɵɵelementStart(3, "div", 3, 4);
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, MrdChipComponent_mrd_icon_6_Template, 1, 1, "mrd-icon", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, MrdChipComponent_mrd_button_7_Template, 2, 1, "mrd-button", 5);
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
        } }, dependencies: [i1.NgIf, i1.NgStyle, i2.MrdIconComponent, i3.MrdButtonComponent, i4.ToolTipRendererDirective], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:-moz-fit-content;width:fit-content;max-width:100%}.mrd-chip-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.125em .7em;gap:1em;border-radius:2em;background-color:var(--chip-background-color);max-width:100%}.mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;width:100%;gap:.5em;line-height:1.5em;max-width:100%;min-width:calc(100% - 2em)}.mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-content[_ngcontent-%COMP%]   .mrd-chip-text[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--chip-color)}.mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-content[_ngcontent-%COMP%]   mrd-icon[_ngcontent-%COMP%]{display:block;min-width:1em;width:1em;height:1em}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdChipComponent, [{
        type: Component,
        args: [{ selector: 'mrd-chip', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-chip-container\"\r\n  [ngStyle]=\"{ 'cursor': disabled || !clickable ? 'default' : 'pointer' }\"\r\n  [style.--chip-color]=\"color\"\r\n  [style.--chip-background-color]=\"backgroundColor\"\r\n>\r\n  <div class=\"mrd-chip-content\" [ngStyle]=\"{'pointer-events': disabled ? 'none' : 'auto'}\">\r\n    <mrd-icon *ngIf=\"prefixIcon\" [svgIcon]=\"prefixIcon\"></mrd-icon>\r\n    <div #chipText class=\"mrd-chip-text\" [mrdToolTip]=\"chipTextValue\" showIfTruncated>\r\n      <ng-content></ng-content>\r\n    </div>\r\n    <mrd-icon *ngIf=\"suffixIcon\" [svgIcon]=\"suffixIcon\"></mrd-icon>\r\n  </div>\r\n\r\n  <mrd-button icon-button fullIcon diameter=\"1em\" (click)=\"closeClicked($event)\" [disabled]=\"disabled\" *ngIf=\"closeable\">\r\n    <mrd-icon svgIcon=\"mrd_close_grey\"></mrd-icon>\r\n  </mrd-button>\r\n</div>\r\n", styles: [":host{display:flex;flex-direction:column;justify-content:center;align-items:center;width:-moz-fit-content;width:fit-content;max-width:100%}.mrd-chip-container{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.125em .7em;gap:1em;border-radius:2em;background-color:var(--chip-background-color);max-width:100%}.mrd-chip-container .mrd-chip-content{display:flex;flex-direction:row;align-items:center;width:100%;gap:.5em;line-height:1.5em;max-width:100%;min-width:calc(100% - 2em)}.mrd-chip-container .mrd-chip-content .mrd-chip-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--chip-color)}.mrd-chip-container .mrd-chip-content mrd-icon{display:block;min-width:1em;width:1em;height:1em}\n"] }]
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
        }], close: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWNoaXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1jaGlwL2NvbXBvbmVudHMvbXJkLWNoaXAvbXJkLWNoaXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1jaGlwL2NvbXBvbmVudHMvbXJkLWNoaXAvbXJkLWNoaXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzSyxPQUFPLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDcEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7Ozs7SUNFN0QsOEJBQStEOzs7SUFBbEMsMkNBQXNCOzs7SUFJbkQsOEJBQStEOzs7SUFBbEMsMkNBQXNCOzs7O0lBR3JELHFDQUF1SDtJQUF2RSw4S0FBUyxlQUFBLDJCQUFvQixDQUFBLElBQUM7SUFDNUUsOEJBQThDO0lBQ2hELGlCQUFhOzs7SUFGa0UsMENBQXFCOzs7OztBRER0RyxNQUFNLE9BQU8sZ0JBQWdCO0lBdURqQjtJQXJEb0IsUUFBUSxDQUFzQztJQUUvQixPQUFPLEdBQVksS0FBSyxDQUFDO0lBQ3pCLE1BQU0sR0FBWSxLQUFLLENBQUM7SUFDeEIsSUFBSSxHQUFZLEtBQUssQ0FBQztJQUVsRSxJQUFvRCxLQUFLLENBQUMsS0FBYTtRQUNwRSxJQUFJLENBQUMs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QkFBeEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQVUxQixLQUFLO2tCQUFkLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBib29sZWFuQXR0cmlidXRlLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTXJkQ29uZmlnTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vbW9kZWwvY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgY29sb3JBdHRyaWJ1dGUsIGNvbG9yVGhlbWVBdHRyaWJ1dGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9jb2xvci10cmFuc2Zvcm0nO1xyXG5pbXBvcnQgeyBDb2xvclV0aWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb2xvci51dGlsJztcclxuaW1wb3J0IHsgQ29uZmlnVXRpbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLWNoaXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtY2hpcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWNoaXAuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkQ2hpcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCdjaGlwVGV4dCcpIHB1YmxpYyBjaGlwVGV4dDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHByaW1hcnk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBhY2NlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyB3YXJuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JUaGVtZUF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBnZXQgY29sb3IoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9jb2xvcjtcclxuICAgfVxyXG4gICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xyXG5cclxuICAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIHNldCBiYWNrZ3JvdW5kQ29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICB0aGlzLl9iYWNrZ3JvdW5kQ29sb3IgPSB2YWx1ZTtcclxuICAgfVxyXG4gICAgcHVibGljIGdldCBiYWNrZ3JvdW5kQ29sb3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JhY2tncm91bmRDb2xvcjtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2JhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBjbGlja2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBjbG9zZWFibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoJ3ByZWZpeEljb24nKSBwcmVmaXhJY29uOiBzdHJpbmc7XHJcbiAgQElucHV0KCdzdWZmaXhJY29uJykgc3VmZml4SWNvbjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IHZhbHVlID8gJyNjZWQ5ZGQnIDogdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLmNvbG9yID0gdmFsdWUgPyAnI2E2YTZhNicgOiB0aGlzLmNvbG9yO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IGRpc2FibGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICAgKiBEaWUgS29uZmlndXJhdGlvbiBkZXMgTXJkLUJ1dHRvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEB0eXBlIHtNcmRDb25maWdNb2RlbH1cclxuICAgICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBNcmRDb25maWdNb2RlbCA9IENvbmZpZ1V0aWwuZ2V0Q29uZmlnKCk7XHJcblxyXG4gIHB1YmxpYyBjaGlwVGV4dFZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoKHRoaXMucHJpbWFyeSB8fCB0aGlzLmFjY2VudCB8fCB0aGlzLndhcm4pICYmICF0aGlzLmJhY2tncm91bmRDb2xvcikge1xyXG4gICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IHRoaXMuX2NvbmZpZy5iYXNlQ29sb3JzW3RoaXMucHJpbWFyeSA/ICdwcmltYXJ5JyA6IHRoaXMuYWNjZW50ID8gJ2FjY2VudCcgOiAnd2FybiddIGFzIHN0cmluZzsgXHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmJhY2tncm91bmRDb2xvcikge1xyXG4gICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9ICcjY2VkOWRkJztcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5jb2xvciB8fCAhQ29sb3JVdGlsLmlzSGV4Q29sb3IodGhpcy5jb2xvcikpIHtcclxuICAgICAgdGhpcy5jb2xvciA9IENvbG9yVXRpbC5zaG91bGRUZXh0QmVEYXJrKHRoaXMuYmFja2dyb3VuZENvbG9yKSA/ICcjMDAwMDAwJyA6ICcjZmZmZmZmJztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNoaXBUZXh0KSB7XHJcbiAgICAgIHRoaXMuY2hpcFRleHRWYWx1ZSA9IHRoaXMuY2hpcFRleHQubmF0aXZlRWxlbWVudC5pbm5lclRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlQ2xpY2tlZChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmNsb3NlLmVtaXQoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1yZC1jaGlwLWNvbnRhaW5lclwiXHJcbiAgW25nU3R5bGVdPVwieyAnY3Vyc29yJzogZGlzYWJsZWQgfHwgIWNsaWNrYWJsZSA/ICdkZWZhdWx0JyA6ICdwb2ludGVyJyB9XCJcclxuICBbc3R5bGUuLS1jaGlwLWNvbG9yXT1cImNvbG9yXCJcclxuICBbc3R5bGUuLS1jaGlwLWJhY2tncm91bmQtY29sb3JdPVwiYmFja2dyb3VuZENvbG9yXCJcclxuPlxyXG4gIDxkaXYgY2xhc3M9XCJtcmQtY2hpcC1jb250ZW50XCIgW25nU3R5bGVdPVwieydwb2ludGVyLWV2ZW50cyc6IGRpc2FibGVkID8gJ25vbmUnIDogJ2F1dG8nfVwiPlxyXG4gICAgPG1yZC1pY29uICpuZ0lmPVwicHJlZml4SWNvblwiIFtzdmdJY29uXT1cInByZWZpeEljb25cIj48L21yZC1pY29uPlxyXG4gICAgPGRpdiAjY2hpcFRleHQgY2xhc3M9XCJtcmQtY2hpcC10ZXh0XCIgW21yZFRvb2xUaXBdPVwiY2hpcFRleHRWYWx1ZVwiIHNob3dJZlRydW5jYXRlZD5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bXJkLWljb24gKm5nSWY9XCJzdWZmaXhJY29uXCIgW3N2Z0ljb25dPVwic3VmZml4SWNvblwiPjwvbXJkLWljb24+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxtcmQtYnV0dG9uIGljb24tYnV0dG9uIGZ1bGxJY29uIGRpYW1ldGVyPVwiMWVtXCIgKGNsaWNrKT1cImNsb3NlQ2xpY2tlZCgkZXZlbnQpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgKm5nSWY9XCJjbG9zZWFibGVcIj5cclxuICAgIDxtcmQtaWNvbiBzdmdJY29uPVwibXJkX2Nsb3NlX2dyZXlcIj48L21yZC1pY29uPlxyXG4gIDwvbXJkLWJ1dHRvbj5cclxuPC9kaXY+XHJcbiJdfQ==