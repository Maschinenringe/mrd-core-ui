import { ConfigUtil } from './../../../../common/util/config.util';
import { ObservableValue } from 'mrd-core';
import { ChangeDetectionStrategy, Component, Input, booleanAttribute } from '@angular/core';
import { ColorUtil } from '../../../../common/util/color.util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a0, a1, a2, a3, a4, a5, a6) { return { "s-icon-button": a0, "s-raised-button": a1, "s-outline-button": a2, "s-flat-button": a3, "s-fab-button": a4, "s-mini-fab-button": a5, "disabled": a6 }; };
const _c1 = ["*"];
export class MrdButtonComponent {
    cdr;
    icon = false;
    raised = false;
    outline = false;
    flat = false;
    fab = false;
    miniFab = false;
    set primary(value) {
        this._primary = value;
        if (value) {
            this.bgColor = this._config.baseColors.primary;
            this.textColor = ColorUtil.shouldTextBeDark(this._config.baseColors.primary) ? this.textDarkColor : this.textLightColor;
            this.hoverColor = ColorUtil.changeColorOpacity(this._config.baseColors.primary, 10);
            this.activeColor = ColorUtil.changeColorOpacity(ColorUtil.changeColorBrightnessPercent(this._config.baseColors.primary, 10), 30);
        }
    }
    get primary() {
        return this._primary;
    }
    _primary = false;
    set accent(value) {
        this._accent = value;
        if (value) {
            this.bgColor = this._config.baseColors.accent;
            this.textColor = ColorUtil.shouldTextBeDark(this._config.baseColors.accent) ? this.textDarkColor : this.textLightColor;
            this.hoverColor = ColorUtil.changeColorOpacity(this._config.baseColors.accent, 20);
            this.activeColor = ColorUtil.changeColorOpacity(ColorUtil.changeColorBrightnessPercent(this._config.baseColors.accent, 10), 30);
        }
    }
    get accent() {
        return this._accent;
    }
    _accent = false;
    set warn(value) {
        this._warn = value;
        if (value) {
            this.bgColor = this._config.baseColors.warn;
            this.textColor = ColorUtil.shouldTextBeDark(this._config.baseColors.warn) ? this.textDarkColor : this.textLightColor;
            this.hoverColor = ColorUtil.changeColorOpacity(this._config.baseColors.warn, 20);
            this.activeColor = ColorUtil.changeColorOpacity(ColorUtil.changeColorBrightnessPercent(this._config.baseColors.warn, 10), 30);
        }
    }
    get warn() {
        return this._warn;
    }
    _warn = false;
    set disabled(value) {
        this._disabled = value;
    }
    ;
    get disabled() {
        return this._disabled;
    }
    _disabled = false;
    loading = new ObservableValue(false);
    // @Output() public click: EventEmitter<void> = new EventEmitter();
    _config = ConfigUtil.getConfig();
    _defaultBgColor = 'transparent';
    _defaultTextLightColor = '#ffffff';
    _defaultTextDarkColor = '#000000';
    _defaultHoverColor = '#d3d3d361';
    _defaultActiveColor = '#d3d3d3';
    _defaultDisabledTextColor = '#a6a6a6';
    _defaultDisabledBgColor = '#d3d3d3';
    _defaultOutlineBorderWidth = '1px';
    _defaultOutlineBorderStyle = 'solid';
    _defaultOutlineBorderColor = '#d3d3d3';
    bgColor = this._config?.button?.defaultBg || this._defaultBgColor;
    textLightColor = this._config?.button?.textLight || this._defaultTextLightColor;
    textDarkColor = this._config?.button?.textDark || this._defaultTextDarkColor;
    textColor = this.textDarkColor;
    hoverColor = this._config?.button?.defaultHover || this._defaultHoverColor;
    activeColor = this._config?.button?.defaultActive || this._defaultActiveColor;
    disabledTextColor = this._config?.button?.defaultDisabledTextColor || this._defaultDisabledTextColor;
    disabledBgColor = this._config?.button?.defaultDisabledBgColor || this._defaultDisabledBgColor;
    outlineBorderWidth = this._config?.button?.outline?.borderWidth || this._defaultOutlineBorderWidth;
    outlineBorderStyle = this._config?.button?.outline?.broderStyle || this._defaultOutlineBorderStyle;
    outlineBorderColor = this._config?.button?.outline?.border || this._defaultOutlineBorderColor;
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        let themesCount = [this.primary, this.accent, this.warn].filter((value) => value).length;
        if (themesCount > 1) {
            console.error('Only one theme can be set at a time. Please set only one of the following: primary, accent, warn');
        }
        let appearanceCount = [this.icon, this.raised, this.outline, this.flat, this.fab, this.miniFab].filter((value) => value).length;
        if (appearanceCount > 1) {
            console.error('Only one appearance can be set at a time. Please set only one of the following: icon, raised, outline, flat, fab, miniFab');
        }
        if (appearanceCount === 0 || this.outline || this.icon) {
            if (themesCount === 1) {
                this.textColor = this.bgColor;
                this.bgColor = this._defaultBgColor;
            }
            this.disabledBgColor = 'transparent';
        }
        if ((this.raised || this.flat) && themesCount === 0) {
            this.bgColor = 'white';
        }
        this.cdr.detectChanges();
    }
    /** @nocollapse */ static ɵfac = function MrdButtonComponent_Factory(t) { return new (t || MrdButtonComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdButtonComponent, selectors: [["mrd-button"]], inputs: { icon: ["icon-button", "icon", booleanAttribute], raised: ["raised-button", "raised", booleanAttribute], outline: ["outline-button", "outline", booleanAttribute], flat: ["flat-button", "flat", booleanAttribute], fab: ["fab-button", "fab", booleanAttribute], miniFab: ["miniFab-button", "miniFab", booleanAttribute], primary: ["primary", "primary", booleanAttribute], accent: ["accent", "accent", booleanAttribute], warn: ["warn", "warn", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], loading: "loading" }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c1, decls: 4, vars: 27, consts: [[1, "s-button-container", 3, "ngClass"], [1, "s-button-focus"], [1, "s-button-content"]], template: function MrdButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵelement(1, "div", 1);
            i0.ɵɵelementStart(2, "span", 2);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵstyleProp("--bg-color", ctx.bgColor)("--text-color", ctx.textColor)("--disabled-text-color", ctx.disabledTextColor)("--disabled-bg-color", ctx.disabledBgColor)("--outline-width", ctx.outlineBorderWidth)("--outline-color", ctx.outlineBorderColor)("--outline-style", ctx.outlineBorderStyle);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction7(19, _c0, ctx.icon, ctx.raised, ctx.outline, ctx.flat, ctx.fab, ctx.miniFab, ctx.disabled));
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("--hover-color", ctx.hoverColor)("--active-color", ctx.activeColor);
        } }, dependencies: [i1.NgClass], styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center}.s-button-container[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:center;min-height:36px;min-width:64px;padding:0 16px;font-size:.9em;font-weight:700;letter-spacing:.1px;border-radius:4px;background-color:var(--bg-color);color:var(--text-color)}.s-button-container[_ngcontent-%COMP%]   .s-button-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;z-index:1}.s-button-container.disabled[_ngcontent-%COMP%]{color:var(--disabled-text-color);background-color:var(--disabled-bg-color);pointer-events:none;cursor:initial}.s-button-container[_ngcontent-%COMP%]:hover:not(.disabled)   .s-button-focus[_ngcontent-%COMP%]{background-color:var(--hover-color)}.s-button-container[_ngcontent-%COMP%]:active:not(.disabled)   .s-button-focus[_ngcontent-%COMP%]{background-color:var(--active-color)}.s-button-container[_ngcontent-%COMP%]   .s-button-focus[_ngcontent-%COMP%]{position:absolute;inset:0;border-radius:4px}.s-button-container.s-outline-button[_ngcontent-%COMP%]{border:var(--outline-width) var(--outline-style) var(--outline-color)}.s-button-container.s-raised-button[_ngcontent-%COMP%]:not(.disabled){--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.s-button-container.s-raised-button[_ngcontent-%COMP%]:not(.disabled):active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.s-button-container.s-icon-button[_ngcontent-%COMP%]{min-width:unset;min-height:unset;width:3em;height:3em;font-size:1em;padding:0;border-radius:50%}.s-button-container.s-icon-button[_ngcontent-%COMP%]   .s-button-focus[_ngcontent-%COMP%]{border-radius:50%}.s-button-container.s-icon-button[_ngcontent-%COMP%]     [s-icon]{margin:0}.s-button-container[_ngcontent-%COMP%]     [s-icon]{font-size:1.5em;margin-right:4px;margin-top:2px}.s-button-container[_ngcontent-%COMP%]     [s-icon][icon-end]{margin-right:0;margin-left:4px}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdButtonComponent, [{
        type: Component,
        args: [{ selector: 'mrd-button', changeDetection: ChangeDetectionStrategy.OnPush, template: "<button class=\"s-button-container\"\n  [style.--bg-color]=\"bgColor\"\n  [style.--text-color]=\"textColor\"\n  [style.--disabled-text-color]=\"disabledTextColor\"\n  [style.--disabled-bg-color]=\"disabledBgColor\"\n  [style.--outline-width]=\"outlineBorderWidth\"\n  [style.--outline-color]=\"outlineBorderColor\"\n  [style.--outline-style]=\"outlineBorderStyle\"\n  [ngClass]=\"{'s-icon-button': icon, 's-raised-button': raised, 's-outline-button': outline,\n    's-flat-button': flat, 's-fab-button': fab, 's-mini-fab-button': miniFab, 'disabled': disabled}\">\n  <div class=\"s-button-focus\" [style.--hover-color]=\"hoverColor\" [style.--active-color]=\"activeColor\"></div>\n  <span class=\"s-button-content\"><ng-content></ng-content></span>\n</button>\n", styles: [":host{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center}.s-button-container{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:center;min-height:36px;min-width:64px;padding:0 16px;font-size:.9em;font-weight:700;letter-spacing:.1px;border-radius:4px;background-color:var(--bg-color);color:var(--text-color)}.s-button-container .s-button-content{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;z-index:1}.s-button-container.disabled{color:var(--disabled-text-color);background-color:var(--disabled-bg-color);pointer-events:none;cursor:initial}.s-button-container:hover:not(.disabled) .s-button-focus{background-color:var(--hover-color)}.s-button-container:active:not(.disabled) .s-button-focus{background-color:var(--active-color)}.s-button-container .s-button-focus{position:absolute;inset:0;border-radius:4px}.s-button-container.s-outline-button{border:var(--outline-width) var(--outline-style) var(--outline-color)}.s-button-container.s-raised-button:not(.disabled){--webkit-box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .25);box-shadow:1px 1px 6px 2px #00000040}.s-button-container.s-raised-button:not(.disabled):active{--webkit-box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, .25);box-shadow:2px 2px 6px 3px #00000040}.s-button-container.s-icon-button{min-width:unset;min-height:unset;width:3em;height:3em;font-size:1em;padding:0;border-radius:50%}.s-button-container.s-icon-button .s-button-focus{border-radius:50%}.s-button-container.s-icon-button ::ng-deep [s-icon]{margin:0}.s-button-container ::ng-deep [s-icon]{font-size:1.5em;margin-right:4px;margin-top:2px}.s-button-container ::ng-deep [s-icon][icon-end]{margin-right:0;margin-left:4px}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { icon: [{
            type: Input,
            args: [{ alias: 'icon-button', transform: booleanAttribute }]
        }], raised: [{
            type: Input,
            args: [{ alias: 'raised-button', transform: booleanAttribute }]
        }], outline: [{
            type: Input,
            args: [{ alias: 'outline-button', transform: booleanAttribute }]
        }], flat: [{
            type: Input,
            args: [{ alias: 'flat-button', transform: booleanAttribute }]
        }], fab: [{
            type: Input,
            args: [{ alias: 'fab-button', transform: booleanAttribute }]
        }], miniFab: [{
            type: Input,
            args: [{ alias: 'miniFab-button', transform: booleanAttribute }]
        }], primary: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], accent: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], warn: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], disabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], loading: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWJ1dHRvbi9jb21wb25lbnRzL21yZC1idXR0b24vbXJkLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWJ1dHRvbi9jb21wb25lbnRzL21yZC1idXR0b24vbXJkLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMzQyxPQUFPLEVBQWlCLHVCQUF1QixFQUFxQixTQUFTLEVBQWdCLEtBQUssRUFBa0IsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUosT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7OztBQVMvRCxNQUFNLE9BQU8sa0JBQWtCO0lBd0ZuQjtJQXRGa0QsSUFBSSxHQUFZLEtBQUssQ0FBQztJQUNwQixNQUFNLEdBQVksS0FBSyxDQUFDO0lBQ3ZCLE9BQU8sR0FBWSxLQUFLLENBQUM7SUFDNUIsSUFBSSxHQUFZLEtBQUssQ0FBQztJQUN2QixHQUFHLEdBQVksS0FBSyxDQUFDO0lBQ2pCLE9BQU8sR0FBWSxLQUFLLENBQUM7SUFFeEYsSUFBaUQsT0FBTyxDQUFDLEtBQWM7UUFDckUsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUMvQyxJQUFJLENBQUMs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QUFrQyxtQ0FBQTs7O3VGREVuRCxrQkFBa0I7Y0FOOUIsU0FBUzsyQkFDRSxZQUFZLG1CQUdMLHVCQUF1QixDQUFDLE1BQU07b0VBSWEsSUFBSTtrQkFBL0QsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBQ0ksTUFBTTtrQkFBbkUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBQ0csT0FBTztrQkFBckUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFDRCxJQUFJO2tCQUEvRCxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFDQyxHQUFHO2tCQUE3RCxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFDTSxPQUFPO2tCQUFyRSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUVaLE9BQU87a0JBQXZELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFhYSxNQUFNO2tCQUF0RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBYWEsSUFBSTtrQkFBcEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQWNhLFFBQVE7a0JBQXhELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFPcEIsT0FBTztrQkFBdEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ1V0aWwgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsJztcbmltcG9ydCB7IE9ic2VydmFibGVWYWx1ZSB9IGZyb20gJ21yZC1jb3JlJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgYm9vbGVhbkF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3JVdGlsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29sb3IudXRpbCc7XG5pbXBvcnQgeyBTQ29uZmlnTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vbW9kZWwvY29uZmlnLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXJkLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWJ1dHRvbi5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNcmRCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIEBJbnB1dCh7YWxpYXM6ICdpY29uLWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGljb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KHthbGlhczogJ3JhaXNlZC1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSByYWlzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KHthbGlhczogJ291dGxpbmUtYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgb3V0bGluZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoe2FsaWFzOiAnZmxhdC1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBmbGF0OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCh7YWxpYXM6ICdmYWItYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgZmFiOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCh7YWxpYXM6ICdtaW5pRmFiLWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIG1pbmlGYWI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgcHJpbWFyeSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3ByaW1hcnkgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuYmdDb2xvciA9IHRoaXMuX2NvbmZpZy5iYXNlQ29sb3JzLnByaW1hcnk7XG4gICAgICB0aGlzLnRleHRDb2xvciA9IENvbG9yVXRpbC5zaG91bGRUZXh0QmVEYXJrKHRoaXMuX2NvbmZpZy5iYXNlQ29sb3JzLnByaW1hcnkpID8gdGhpcy50ZXh0RGFya0NvbG9yIDogdGhpcy50ZXh0TGlnaHRDb2xvcjtcbiAgICAgIHRoaXMuaG92ZXJDb2xvciA9IENvbG9yVXRpbC5jaGFuZ2VDb2xvck9wYWNpdHkodGhpcy5fY29uZmlnLmJhc2VDb2xvcnMucHJpbWFyeSwgMTApO1xuICAgICAgdGhpcy5hY3RpdmVDb2xvciA9IENvbG9yVXRpbC5jaGFuZ2VDb2xvck9wYWNpdHkoQ29sb3JVdGlsLmNoYW5nZUNvbG9yQnJpZ2h0bmVzc1BlcmNlbnQodGhpcy5fY29uZmlnLmJhc2VDb2xvcnMucHJpbWFyeSwgMTApLCAzMCk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgcHJpbWFyeSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpbWFyeTtcbiAgfVxuICBwcml2YXRlIF9wcmltYXJ5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNldCBhY2NlbnQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hY2NlbnQgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuYmdDb2xvciA9IHRoaXMuX2NvbmZpZy5iYXNlQ29sb3JzLmFjY2VudDtcbiAgICAgIHRoaXMudGV4dENvbG9yID0gQ29sb3JVdGlsLnNob3VsZFRleHRCZURhcmsodGhpcy5fY29uZmlnLmJhc2VDb2xvcnMuYWNjZW50KSA/IHRoaXMudGV4dERhcmtDb2xvciA6IHRoaXMudGV4dExpZ2h0Q29sb3I7XG4gICAgICB0aGlzLmhvdmVyQ29sb3IgPSBDb2xvclV0aWwuY2hhbmdlQ29sb3JPcGFjaXR5KHRoaXMuX2NvbmZpZy5iYXNlQ29sb3JzLmFjY2VudCwgMjApO1xuICAgICAgdGhpcy5hY3RpdmVDb2xvciA9IENvbG9yVXRpbC5jaGFuZ2VDb2xvck9wYWNpdHkoQ29sb3JVdGlsLmNoYW5nZUNvbG9yQnJpZ2h0bmVzc1BlcmNlbnQodGhpcy5fY29uZmlnLmJhc2VDb2xvcnMuYWNjZW50LCAxMCksIDMwKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBhY2NlbnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2VudDtcbiAgfVxuICBwcml2YXRlIF9hY2NlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IHdhcm4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl93YXJuID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmJnQ29sb3IgPSB0aGlzLl9jb25maWcuYmFzZUNvbG9ycy53YXJuO1xuICAgICAgdGhpcy50ZXh0Q29sb3IgPSBDb2xvclV0aWwuc2hvdWxkVGV4dEJlRGFyayh0aGlzLl9jb25maWcuYmFzZUNvbG9ycy53YXJuKSA/IHRoaXMudGV4dERhcmtDb2xvciA6IHRoaXMudGV4dExpZ2h0Q29sb3I7XG4gICAgICB0aGlzLmhvdmVyQ29sb3IgPSBDb2xvclV0aWwuY2hhbmdlQ29sb3JPcGFjaXR5KHRoaXMuX2NvbmZpZy5iYXNlQ29sb3JzLndhcm4sIDIwKTtcbiAgICAgIHRoaXMuYWN0aXZlQ29sb3IgPSBDb2xvclV0aWwuY2hhbmdlQ29sb3JPcGFjaXR5KENvbG9yVXRpbC5jaGFuZ2VDb2xvckJyaWdodG5lc3NQZXJjZW50KHRoaXMuX2NvbmZpZy5iYXNlQ29sb3JzLndhcm4sIDEwKSwgMzApO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IHdhcm4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3dhcm47XG4gIH1cbiAgcHJpdmF0ZSBfd2FybjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XG4gIH07XG4gIHB1YmxpYyBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBsb2FkaW5nOiBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj4gPSBuZXcgT2JzZXJ2YWJsZVZhbHVlKGZhbHNlKTtcblxuICAvLyBAT3V0cHV0KCkgcHVibGljIGNsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJpdmF0ZSBfY29uZmlnOiBTQ29uZmlnTW9kZWwgPSBDb25maWdVdGlsLmdldENvbmZpZygpO1xuXG4gIHByaXZhdGUgX2RlZmF1bHRCZ0NvbG9yOiBzdHJpbmcgPSAndHJhbnNwYXJlbnQnO1xuICBwcml2YXRlIF9kZWZhdWx0VGV4dExpZ2h0Q29sb3I6IHN0cmluZyA9ICcjZmZmZmZmJztcbiAgcHJpdmF0ZSBfZGVmYXVsdFRleHREYXJrQ29sb3I6IHN0cmluZyA9ICcjMDAwMDAwJztcbiAgcHJpdmF0ZSBfZGVmYXVsdEhvdmVyQ29sb3I6IHN0cmluZyA9ICcjZDNkM2QzNjEnO1xuICBwcml2YXRlIF9kZWZhdWx0QWN0aXZlQ29sb3I6IHN0cmluZyA9ICcjZDNkM2QzJztcbiAgcHJpdmF0ZSBfZGVmYXVsdERpc2FibGVkVGV4dENvbG9yOiBzdHJpbmcgPSAnI2E2YTZhNic7XG4gIHByaXZhdGUgX2RlZmF1bHREaXNhYmxlZEJnQ29sb3I6IHN0cmluZyA9ICcjZDNkM2QzJztcblxuICBwcml2YXRlIF9kZWZhdWx0T3V0bGluZUJvcmRlcldpZHRoOiBzdHJpbmcgPSAnMXB4JztcbiAgcHJpdmF0ZSBfZGVmYXVsdE91dGxpbmVCb3JkZXJTdHlsZTogc3RyaW5nID0gJ3NvbGlkJztcbiAgcHJpdmF0ZSBfZGVmYXVsdE91dGxpbmVCb3JkZXJDb2xvcjogc3RyaW5nID0gJyNkM2QzZDMnO1xuXG4gIHB1YmxpYyBiZ0NvbG9yOiBzdHJpbmcgPSB0aGlzLl9jb25maWc/LmJ1dHRvbj8uZGVmYXVsdEJnIHx8IHRoaXMuX2RlZmF1bHRCZ0NvbG9yO1xuICBwcml2YXRlIHRleHRMaWdodENvbG9yOiBzdHJpbmcgPSB0aGlzLl9jb25maWc/LmJ1dHRvbj8udGV4dExpZ2h0IHx8IHRoaXMuX2RlZmF1bHRUZXh0TGlnaHRDb2xvcjtcbiAgcHJpdmF0ZSB0ZXh0RGFya0NvbG9yOiBzdHJpbmcgPSB0aGlzLl9jb25maWc/LmJ1dHRvbj8udGV4dERhcmsgfHwgdGhpcy5fZGVmYXVsdFRleHREYXJrQ29sb3I7XG4gIHB1YmxpYyB0ZXh0Q29sb3I6IHN0cmluZyA9IHRoaXMudGV4dERhcmtDb2xvcjtcbiAgcHVibGljIGhvdmVyQ29sb3I6IHN0cmluZyA9IHRoaXMuX2NvbmZpZz8uYnV0dG9uPy5kZWZhdWx0SG92ZXIgfHwgdGhpcy5fZGVmYXVsdEhvdmVyQ29sb3I7XG4gIHB1YmxpYyBhY3RpdmVDb2xvcjogc3RyaW5nID0gdGhpcy5fY29uZmlnPy5idXR0b24/LmRlZmF1bHRBY3RpdmUgfHwgdGhpcy5fZGVmYXVsdEFjdGl2ZUNvbG9yO1xuICBwdWJsaWMgZGlzYWJsZWRUZXh0Q29sb3I6IHN0cmluZyA9IHRoaXMuX2NvbmZpZz8uYnV0dG9uPy5kZWZhdWx0RGlzYWJsZWRUZXh0Q29sb3IgfHwgdGhpcy5fZGVmYXVsdERpc2FibGVkVGV4dENvbG9yO1xuICBwdWJsaWMgZGlzYWJsZWRCZ0NvbG9yOiBzdHJpbmcgPSB0aGlzLl9jb25maWc/LmJ1dHRvbj8uZGVmYXVsdERpc2FibGVkQmdDb2xvciB8fCB0aGlzLl9kZWZhdWx0RGlzYWJsZWRCZ0NvbG9yO1xuXG4gIHB1YmxpYyBvdXRsaW5lQm9yZGVyV2lkdGg6IHN0cmluZyA9IHRoaXMuX2NvbmZpZz8uYnV0dG9uPy5vdXRsaW5lPy5ib3JkZXJXaWR0aCB8fCB0aGlzLl9kZWZhdWx0T3V0bGluZUJvcmRlcldpZHRoO1xuICBwdWJsaWMgb3V0bGluZUJvcmRlclN0eWxlOiBzdHJpbmcgPSB0aGlzLl9jb25maWc/LmJ1dHRvbj8ub3V0bGluZT8uYnJvZGVyU3R5bGUgfHwgdGhpcy5fZGVmYXVsdE91dGxpbmVCb3JkZXJTdHlsZTtcbiAgcHVibGljIG91dGxpbmVCb3JkZXJDb2xvcjogc3RyaW5nID0gdGhpcy5fY29uZmlnPy5idXR0b24/Lm91dGxpbmU/LmJvcmRlciB8fCB0aGlzLl9kZWZhdWx0T3V0bGluZUJvcmRlckNvbG9yO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgbGV0IHRoZW1lc0NvdW50ID0gW3RoaXMucHJpbWFyeSwgdGhpcy5hY2NlbnQsIHRoaXMud2Fybl0uZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUpLmxlbmd0aDtcbiAgICBpZiAodGhlbWVzQ291bnQgPiAxKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdPbmx5IG9uZSB0aGVtZSBjYW4gYmUgc2V0IGF0IGEgdGltZS4gUGxlYXNlIHNldCBvbmx5IG9uZSBvZiB0aGUgZm9sbG93aW5nOiBwcmltYXJ5LCBhY2NlbnQsIHdhcm4nKTtcbiAgICB9XG4gICAgbGV0IGFwcGVhcmFuY2VDb3VudCA9IFt0aGlzLmljb24sIHRoaXMucmFpc2VkLCB0aGlzLm91dGxpbmUsIHRoaXMuZmxhdCwgdGhpcy5mYWIsIHRoaXMubWluaUZhYl0uZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUpLmxlbmd0aDtcbiAgICBpZiAoYXBwZWFyYW5jZUNvdW50ID4gMSkge1xuICAgICAgY29uc29sZS5lcnJvcignT25seSBvbmUgYXBwZWFyYW5jZSBjYW4gYmUgc2V0IGF0IGEgdGltZS4gUGxlYXNlIHNldCBvbmx5IG9uZSBvZiB0aGUgZm9sbG93aW5nOiBpY29uLCByYWlzZWQsIG91dGxpbmUsIGZsYXQsIGZhYiwgbWluaUZhYicpO1xuICAgIH1cbiAgICBpZiAoYXBwZWFyYW5jZUNvdW50ID09PSAwIHx8IHRoaXMub3V0bGluZSB8fCB0aGlzLmljb24pIHtcbiAgICAgIGlmICh0aGVtZXNDb3VudCA9PT0gMSkge1xuICAgICAgICB0aGlzLnRleHRDb2xvciA9IHRoaXMuYmdDb2xvcjtcbiAgICAgICAgdGhpcy5iZ0NvbG9yID0gdGhpcy5fZGVmYXVsdEJnQ29sb3I7XG4gICAgICB9XG4gICAgICB0aGlzLmRpc2FibGVkQmdDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgfVxuICAgIGlmICgodGhpcy5yYWlzZWQgfHwgdGhpcy5mbGF0KSAmJiB0aGVtZXNDb3VudCA9PT0gMCkge1xuICAgICAgdGhpcy5iZ0NvbG9yID0gJ3doaXRlJztcbiAgICB9XG5cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbn1cbiIsIjxidXR0b24gY2xhc3M9XCJzLWJ1dHRvbi1jb250YWluZXJcIlxuICBbc3R5bGUuLS1iZy1jb2xvcl09XCJiZ0NvbG9yXCJcbiAgW3N0eWxlLi0tdGV4dC1jb2xvcl09XCJ0ZXh0Q29sb3JcIlxuICBbc3R5bGUuLS1kaXNhYmxlZC10ZXh0LWNvbG9yXT1cImRpc2FibGVkVGV4dENvbG9yXCJcbiAgW3N0eWxlLi0tZGlzYWJsZWQtYmctY29sb3JdPVwiZGlzYWJsZWRCZ0NvbG9yXCJcbiAgW3N0eWxlLi0tb3V0bGluZS13aWR0aF09XCJvdXRsaW5lQm9yZGVyV2lkdGhcIlxuICBbc3R5bGUuLS1vdXRsaW5lLWNvbG9yXT1cIm91dGxpbmVCb3JkZXJDb2xvclwiXG4gIFtzdHlsZS4tLW91dGxpbmUtc3R5bGVdPVwib3V0bGluZUJvcmRlclN0eWxlXCJcbiAgW25nQ2xhc3NdPVwieydzLWljb24tYnV0dG9uJzogaWNvbiwgJ3MtcmFpc2VkLWJ1dHRvbic6IHJhaXNlZCwgJ3Mtb3V0bGluZS1idXR0b24nOiBvdXRsaW5lLFxuICAgICdzLWZsYXQtYnV0dG9uJzogZmxhdCwgJ3MtZmFiLWJ1dHRvbic6IGZhYiwgJ3MtbWluaS1mYWItYnV0dG9uJzogbWluaUZhYiwgJ2Rpc2FibGVkJzogZGlzYWJsZWR9XCI+XG4gIDxkaXYgY2xhc3M9XCJzLWJ1dHRvbi1mb2N1c1wiIFtzdHlsZS4tLWhvdmVyLWNvbG9yXT1cImhvdmVyQ29sb3JcIiBbc3R5bGUuLS1hY3RpdmUtY29sb3JdPVwiYWN0aXZlQ29sb3JcIj48L2Rpdj5cbiAgPHNwYW4gY2xhc3M9XCJzLWJ1dHRvbi1jb250ZW50XCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj5cbjwvYnV0dG9uPlxuIl19