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
    _config = this.readConfig();
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
    readConfig() {
        let url = './s-material.config.js';
        let config = {};
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                config = JSON.parse(xhr.responseText);
            }
        };
        xhr.send();
        return config;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWJ1dHRvbi9jb21wb25lbnRzL21yZC1idXR0b24vbXJkLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWJ1dHRvbi9jb21wb25lbnRzL21yZC1idXR0b24vbXJkLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzNDLE9BQU8sRUFBaUIsdUJBQXVCLEVBQXFCLFNBQVMsRUFBZ0IsS0FBSyxFQUFrQixnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1SixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7O0FBUy9ELE1BQU0sT0FBTyxrQkFBa0I7SUF3Rm5CO0lBdEZrRCxJQUFJLEdBQVksS0FBSyxDQUFDO0lBQ3BCLE1BQU0sR0FBWSxLQUFLLENBQUM7SUFDdkIsT0FBTyxHQUFZLEtBQUssQ0FBQztJQUM1QixJQUFJLEdBQVksS0FBSyxDQUFDO0lBQ3ZCLEdBQUcsR0FBWSxLQUFLLENBQUM7SUFDakIsT0FBTyxHQUFZLEtBQUssQ0FBQztJQUV4RixJQUFpRCxPQUFPLENBQUMsS0FBYztRQUNyRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxP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QUUsZ0JBQWdCLEVBQUM7WUFFWixPQUFPO2tCQUF2RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBYWEsTUFBTTtrQkFBdEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQWFhLElBQUk7a0JBQXBELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFjYSxRQUFRO2tCQUF4RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBT3BCLE9BQU87a0JBQXRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlVmFsdWUgfSBmcm9tICdtcmQtY29yZSc7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIGJvb2xlYW5BdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbG9yVXRpbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbG9yLnV0aWwnO1xuaW1wb3J0IHsgU0NvbmZpZ01vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21vZGVsL2NvbmZpZy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yZC1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21yZC1idXR0b24uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTXJkQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBASW5wdXQoe2FsaWFzOiAnaWNvbi1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBpY29uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCh7YWxpYXM6ICdyYWlzZWQtYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcmFpc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCh7YWxpYXM6ICdvdXRsaW5lLWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIG91dGxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KHthbGlhczogJ2ZsYXQtYnV0dG9uJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgZmxhdDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoe2FsaWFzOiAnZmFiLWJ1dHRvbicsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGZhYjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoe2FsaWFzOiAnbWluaUZhYi1idXR0b24nLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBtaW5pRmFiOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IHByaW1hcnkodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9wcmltYXJ5ID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmJnQ29sb3IgPSB0aGlzLl9jb25maWcuYmFzZUNvbG9ycy5wcmltYXJ5O1xuICAgICAgdGhpcy50ZXh0Q29sb3IgPSBDb2xvclV0aWwuc2hvdWxkVGV4dEJlRGFyayh0aGlzLl9jb25maWcuYmFzZUNvbG9ycy5wcmltYXJ5KSA/IHRoaXMudGV4dERhcmtDb2xvciA6IHRoaXMudGV4dExpZ2h0Q29sb3I7XG4gICAgICB0aGlzLmhvdmVyQ29sb3IgPSBDb2xvclV0aWwuY2hhbmdlQ29sb3JPcGFjaXR5KHRoaXMuX2NvbmZpZy5iYXNlQ29sb3JzLnByaW1hcnksIDEwKTtcbiAgICAgIHRoaXMuYWN0aXZlQ29sb3IgPSBDb2xvclV0aWwuY2hhbmdlQ29sb3JPcGFjaXR5KENvbG9yVXRpbC5jaGFuZ2VDb2xvckJyaWdodG5lc3NQZXJjZW50KHRoaXMuX2NvbmZpZy5iYXNlQ29sb3JzLnByaW1hcnksIDEwKSwgMzApO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IHByaW1hcnkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW1hcnk7XG4gIH1cbiAgcHJpdmF0ZSBfcHJpbWFyeTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgYWNjZW50KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWNjZW50ID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmJnQ29sb3IgPSB0aGlzLl9jb25maWcuYmFzZUNvbG9ycy5hY2NlbnQ7XG4gICAgICB0aGlzLnRleHRDb2xvciA9IENvbG9yVXRpbC5zaG91bGRUZXh0QmVEYXJrKHRoaXMuX2NvbmZpZy5iYXNlQ29sb3JzLmFjY2VudCkgPyB0aGlzLnRleHREYXJrQ29sb3IgOiB0aGlzLnRleHRMaWdodENvbG9yO1xuICAgICAgdGhpcy5ob3ZlckNvbG9yID0gQ29sb3JVdGlsLmNoYW5nZUNvbG9yT3BhY2l0eSh0aGlzLl9jb25maWcuYmFzZUNvbG9ycy5hY2NlbnQsIDIwKTtcbiAgICAgIHRoaXMuYWN0aXZlQ29sb3IgPSBDb2xvclV0aWwuY2hhbmdlQ29sb3JPcGFjaXR5KENvbG9yVXRpbC5jaGFuZ2VDb2xvckJyaWdodG5lc3NQZXJjZW50KHRoaXMuX2NvbmZpZy5iYXNlQ29sb3JzLmFjY2VudCwgMTApLCAzMCk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQgYWNjZW50KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY2NlbnQ7XG4gIH1cbiAgcHJpdmF0ZSBfYWNjZW50OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNldCB3YXJuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fd2FybiA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5iZ0NvbG9yID0gdGhpcy5fY29uZmlnLmJhc2VDb2xvcnMud2FybjtcbiAgICAgIHRoaXMudGV4dENvbG9yID0gQ29sb3JVdGlsLnNob3VsZFRleHRCZURhcmsodGhpcy5fY29uZmlnLmJhc2VDb2xvcnMud2FybikgPyB0aGlzLnRleHREYXJrQ29sb3IgOiB0aGlzLnRleHRMaWdodENvbG9yO1xuICAgICAgdGhpcy5ob3ZlckNvbG9yID0gQ29sb3JVdGlsLmNoYW5nZUNvbG9yT3BhY2l0eSh0aGlzLl9jb25maWcuYmFzZUNvbG9ycy53YXJuLCAyMCk7XG4gICAgICB0aGlzLmFjdGl2ZUNvbG9yID0gQ29sb3JVdGlsLmNoYW5nZUNvbG9yT3BhY2l0eShDb2xvclV0aWwuY2hhbmdlQ29sb3JCcmlnaHRuZXNzUGVyY2VudCh0aGlzLl9jb25maWcuYmFzZUNvbG9ycy53YXJuLCAxMCksIDMwKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCB3YXJuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl93YXJuO1xuICB9XG4gIHByaXZhdGUgX3dhcm46IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuICB9O1xuICBwdWJsaWMgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgbG9hZGluZzogT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+ID0gbmV3IE9ic2VydmFibGVWYWx1ZShmYWxzZSk7XG5cbiAgLy8gQE91dHB1dCgpIHB1YmxpYyBjbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgX2NvbmZpZzogU0NvbmZpZ01vZGVsID0gdGhpcy5yZWFkQ29uZmlnKCk7XG5cbiAgcHJpdmF0ZSBfZGVmYXVsdEJnQ29sb3I6IHN0cmluZyA9ICd0cmFuc3BhcmVudCc7XG4gIHByaXZhdGUgX2RlZmF1bHRUZXh0TGlnaHRDb2xvcjogc3RyaW5nID0gJyNmZmZmZmYnO1xuICBwcml2YXRlIF9kZWZhdWx0VGV4dERhcmtDb2xvcjogc3RyaW5nID0gJyMwMDAwMDAnO1xuICBwcml2YXRlIF9kZWZhdWx0SG92ZXJDb2xvcjogc3RyaW5nID0gJyNkM2QzZDM2MSc7XG4gIHByaXZhdGUgX2RlZmF1bHRBY3RpdmVDb2xvcjogc3RyaW5nID0gJyNkM2QzZDMnO1xuICBwcml2YXRlIF9kZWZhdWx0RGlzYWJsZWRUZXh0Q29sb3I6IHN0cmluZyA9ICcjYTZhNmE2JztcbiAgcHJpdmF0ZSBfZGVmYXVsdERpc2FibGVkQmdDb2xvcjogc3RyaW5nID0gJyNkM2QzZDMnO1xuXG4gIHByaXZhdGUgX2RlZmF1bHRPdXRsaW5lQm9yZGVyV2lkdGg6IHN0cmluZyA9ICcxcHgnO1xuICBwcml2YXRlIF9kZWZhdWx0T3V0bGluZUJvcmRlclN0eWxlOiBzdHJpbmcgPSAnc29saWQnO1xuICBwcml2YXRlIF9kZWZhdWx0T3V0bGluZUJvcmRlckNvbG9yOiBzdHJpbmcgPSAnI2QzZDNkMyc7XG5cbiAgcHVibGljIGJnQ29sb3I6IHN0cmluZyA9IHRoaXMuX2NvbmZpZz8uYnV0dG9uPy5kZWZhdWx0QmcgfHwgdGhpcy5fZGVmYXVsdEJnQ29sb3I7XG4gIHByaXZhdGUgdGV4dExpZ2h0Q29sb3I6IHN0cmluZyA9IHRoaXMuX2NvbmZpZz8uYnV0dG9uPy50ZXh0TGlnaHQgfHwgdGhpcy5fZGVmYXVsdFRleHRMaWdodENvbG9yO1xuICBwcml2YXRlIHRleHREYXJrQ29sb3I6IHN0cmluZyA9IHRoaXMuX2NvbmZpZz8uYnV0dG9uPy50ZXh0RGFyayB8fCB0aGlzLl9kZWZhdWx0VGV4dERhcmtDb2xvcjtcbiAgcHVibGljIHRleHRDb2xvcjogc3RyaW5nID0gdGhpcy50ZXh0RGFya0NvbG9yO1xuICBwdWJsaWMgaG92ZXJDb2xvcjogc3RyaW5nID0gdGhpcy5fY29uZmlnPy5idXR0b24/LmRlZmF1bHRIb3ZlciB8fCB0aGlzLl9kZWZhdWx0SG92ZXJDb2xvcjtcbiAgcHVibGljIGFjdGl2ZUNvbG9yOiBzdHJpbmcgPSB0aGlzLl9jb25maWc/LmJ1dHRvbj8uZGVmYXVsdEFjdGl2ZSB8fCB0aGlzLl9kZWZhdWx0QWN0aXZlQ29sb3I7XG4gIHB1YmxpYyBkaXNhYmxlZFRleHRDb2xvcjogc3RyaW5nID0gdGhpcy5fY29uZmlnPy5idXR0b24/LmRlZmF1bHREaXNhYmxlZFRleHRDb2xvciB8fCB0aGlzLl9kZWZhdWx0RGlzYWJsZWRUZXh0Q29sb3I7XG4gIHB1YmxpYyBkaXNhYmxlZEJnQ29sb3I6IHN0cmluZyA9IHRoaXMuX2NvbmZpZz8uYnV0dG9uPy5kZWZhdWx0RGlzYWJsZWRCZ0NvbG9yIHx8IHRoaXMuX2RlZmF1bHREaXNhYmxlZEJnQ29sb3I7XG5cbiAgcHVibGljIG91dGxpbmVCb3JkZXJXaWR0aDogc3RyaW5nID0gdGhpcy5fY29uZmlnPy5idXR0b24/Lm91dGxpbmU/LmJvcmRlcldpZHRoIHx8IHRoaXMuX2RlZmF1bHRPdXRsaW5lQm9yZGVyV2lkdGg7XG4gIHB1YmxpYyBvdXRsaW5lQm9yZGVyU3R5bGU6IHN0cmluZyA9IHRoaXMuX2NvbmZpZz8uYnV0dG9uPy5vdXRsaW5lPy5icm9kZXJTdHlsZSB8fCB0aGlzLl9kZWZhdWx0T3V0bGluZUJvcmRlclN0eWxlO1xuICBwdWJsaWMgb3V0bGluZUJvcmRlckNvbG9yOiBzdHJpbmcgPSB0aGlzLl9jb25maWc/LmJ1dHRvbj8ub3V0bGluZT8uYm9yZGVyIHx8IHRoaXMuX2RlZmF1bHRPdXRsaW5lQm9yZGVyQ29sb3I7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBwcml2YXRlIHJlYWRDb25maWcoKTogU0NvbmZpZ01vZGVsIHtcbiAgICBsZXQgdXJsID0gJy4vcy1tYXRlcmlhbC5jb25maWcuanMnO1xuICAgIGxldCBjb25maWc6IFNDb25maWdNb2RlbCA9IHt9IGFzIFNDb25maWdNb2RlbDtcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgZmFsc2UpO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGNvbmZpZyA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB4aHIuc2VuZCgpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBsZXQgdGhlbWVzQ291bnQgPSBbdGhpcy5wcmltYXJ5LCB0aGlzLmFjY2VudCwgdGhpcy53YXJuXS5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZSkubGVuZ3RoO1xuICAgIGlmICh0aGVtZXNDb3VudCA+IDEpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ09ubHkgb25lIHRoZW1lIGNhbiBiZSBzZXQgYXQgYSB0aW1lLiBQbGVhc2Ugc2V0IG9ubHkgb25lIG9mIHRoZSBmb2xsb3dpbmc6IHByaW1hcnksIGFjY2VudCwgd2FybicpO1xuICAgIH1cbiAgICBsZXQgYXBwZWFyYW5jZUNvdW50ID0gW3RoaXMuaWNvbiwgdGhpcy5yYWlzZWQsIHRoaXMub3V0bGluZSwgdGhpcy5mbGF0LCB0aGlzLmZhYiwgdGhpcy5taW5pRmFiXS5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZSkubGVuZ3RoO1xuICAgIGlmIChhcHBlYXJhbmNlQ291bnQgPiAxKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdPbmx5IG9uZSBhcHBlYXJhbmNlIGNhbiBiZSBzZXQgYXQgYSB0aW1lLiBQbGVhc2Ugc2V0IG9ubHkgb25lIG9mIHRoZSBmb2xsb3dpbmc6IGljb24sIHJhaXNlZCwgb3V0bGluZSwgZmxhdCwgZmFiLCBtaW5pRmFiJyk7XG4gICAgfVxuICAgIGlmIChhcHBlYXJhbmNlQ291bnQgPT09IDAgfHwgdGhpcy5vdXRsaW5lIHx8IHRoaXMuaWNvbikge1xuICAgICAgaWYgKHRoZW1lc0NvdW50ID09PSAxKSB7XG4gICAgICAgIHRoaXMudGV4dENvbG9yID0gdGhpcy5iZ0NvbG9yO1xuICAgICAgICB0aGlzLmJnQ29sb3IgPSB0aGlzLl9kZWZhdWx0QmdDb2xvcjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGlzYWJsZWRCZ0NvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICB9XG4gICAgaWYgKCh0aGlzLnJhaXNlZCB8fCB0aGlzLmZsYXQpICYmIHRoZW1lc0NvdW50ID09PSAwKSB7XG4gICAgICB0aGlzLmJnQ29sb3IgPSAnd2hpdGUnO1xuICAgIH1cblxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIiwiPGJ1dHRvbiBjbGFzcz1cInMtYnV0dG9uLWNvbnRhaW5lclwiXG4gIFtzdHlsZS4tLWJnLWNvbG9yXT1cImJnQ29sb3JcIlxuICBbc3R5bGUuLS10ZXh0LWNvbG9yXT1cInRleHRDb2xvclwiXG4gIFtzdHlsZS4tLWRpc2FibGVkLXRleHQtY29sb3JdPVwiZGlzYWJsZWRUZXh0Q29sb3JcIlxuICBbc3R5bGUuLS1kaXNhYmxlZC1iZy1jb2xvcl09XCJkaXNhYmxlZEJnQ29sb3JcIlxuICBbc3R5bGUuLS1vdXRsaW5lLXdpZHRoXT1cIm91dGxpbmVCb3JkZXJXaWR0aFwiXG4gIFtzdHlsZS4tLW91dGxpbmUtY29sb3JdPVwib3V0bGluZUJvcmRlckNvbG9yXCJcbiAgW3N0eWxlLi0tb3V0bGluZS1zdHlsZV09XCJvdXRsaW5lQm9yZGVyU3R5bGVcIlxuICBbbmdDbGFzc109XCJ7J3MtaWNvbi1idXR0b24nOiBpY29uLCAncy1yYWlzZWQtYnV0dG9uJzogcmFpc2VkLCAncy1vdXRsaW5lLWJ1dHRvbic6IG91dGxpbmUsXG4gICAgJ3MtZmxhdC1idXR0b24nOiBmbGF0LCAncy1mYWItYnV0dG9uJzogZmFiLCAncy1taW5pLWZhYi1idXR0b24nOiBtaW5pRmFiLCAnZGlzYWJsZWQnOiBkaXNhYmxlZH1cIj5cbiAgPGRpdiBjbGFzcz1cInMtYnV0dG9uLWZvY3VzXCIgW3N0eWxlLi0taG92ZXItY29sb3JdPVwiaG92ZXJDb2xvclwiIFtzdHlsZS4tLWFjdGl2ZS1jb2xvcl09XCJhY3RpdmVDb2xvclwiPjwvZGl2PlxuICA8c3BhbiBjbGFzcz1cInMtYnV0dG9uLWNvbnRlbnRcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPlxuPC9idXR0b24+XG4iXX0=