import * as i0 from '@angular/core';
import { booleanAttribute, Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { ObservableValue } from 'mrd-core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class ConfigUtil {
    static config;
    static getConfig() {
        if (this.config) {
            return this.config;
        }
        let url = 'assets/mrd-core-ui.config.json';
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
}

class ColorUtil {
    static hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    static rgbToHex(r, g, b) {
        return [r, g, b].map((x) => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('');
    }
    static getTextColor(color) {
        const rgb = ColorUtil.hexToRgb(color);
        if (rgb) {
            const brightness = Math.round(((rgb.r * 299) + (rgb.g * 587) + (rgb.b * 114)) / 1000);
            return brightness > 125 ? 'black' : 'white';
        }
        return 'black';
    }
    static shouldTextBeDark(color) {
        const rgb = ColorUtil.hexToRgb(color);
        if (rgb) {
            const brightness = Math.round(((rgb.r * 299) + (rgb.g * 587) + (rgb.b * 114)) / 1000);
            return brightness > 125;
        }
        return true;
    }
    static changeColorOpacity(color, opacity) {
        if (opacity > 1) {
            opacity /= 100;
        }
        const rgb = ColorUtil.hexToRgb(color);
        if (rgb) {
            return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
        }
        return color;
    }
    static changeColorBrightnessPercent(color, percent) {
        const rgb = ColorUtil.hexToRgb(color);
        if (rgb) {
            return '#' + ColorUtil.rgbToHex(Math.min(255, Math.max(0, Math.round(rgb.r * (1 + percent / 100)))), Math.min(255, Math.max(0, Math.round(rgb.g * (1 + percent / 100)))), Math.min(255, Math.max(0, Math.round(rgb.b * (1 + percent / 100)))));
        }
        return color;
    }
}

const _c0 = function (a0, a1, a2, a3, a4, a5, a6) { return { "s-icon-button": a0, "s-raised-button": a1, "s-outline-button": a2, "s-flat-button": a3, "s-fab-button": a4, "s-mini-fab-button": a5, "disabled": a6 }; };
const _c1 = ["*"];
class MrdButtonComponent {
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

class MrdButtonModule {
    /** @nocollapse */ static ɵfac = function MrdButtonModule_Factory(t) { return new (t || MrdButtonModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: MrdButtonModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdButtonModule, [{
        type: NgModule,
        args: [{
                declarations: [MrdButtonComponent],
                imports: [CommonModule],
                exports: [MrdButtonComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MrdButtonModule, { declarations: [MrdButtonComponent], imports: [CommonModule], exports: [MrdButtonComponent] }); })();

/*
 * Public API Surface of mrd-core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MrdButtonComponent, MrdButtonModule };
//# sourceMappingURL=mrd-core-ui.mjs.map
