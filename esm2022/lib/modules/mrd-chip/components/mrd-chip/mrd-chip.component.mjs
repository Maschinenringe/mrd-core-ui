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
/** Hintergrund eines nicht gewaehlten bzw. deaktivierten Chips */
const NEUTRALER_HINTERGRUND = '#ced9dd';
const DEAKTIVIERTE_SCHRIFT = '#a6a6a6';
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
        if (this.selectable) {
            this.auswahlfarbenSetzen();
            return;
        }
        this.backgroundColor = value ? NEUTRALER_HINTERGRUND : this.backgroundColor;
        this.color = value ? DEAKTIVIERTE_SCHRIFT : this.color;
    }
    get disabled() {
        return this._disabled;
    }
    _disabled = false;
    /**
     * Der Chip ist waehlbar: Ein Klick schaltet `selected` um und meldet den neuen Zustand ueber `selectedChange`.
     * Nicht gewaehlt ist er neutral grau, gewaehlt in der Farbe des Themes (`primary`/`accent`/`warn`, Standard `primary`)
     * bzw. in `backgroundColor`. Das Schliessen-Symbol blendet `closeable="false"` aus.
     */
    selectable = false;
    set selected(value) {
        this._selected = value;
        this.auswahlfarbenSetzen();
    }
    get selected() {
        return this._selected;
    }
    _selected = false;
    /**
     * Mit `selectable`: Der Chip schaltet nicht selbst um, sondern meldet den gewuenschten Zustand ueber `selectedChange`;
     * angezeigt wird allein `selected`. Fuer Auswahlen, die selbst entscheiden, ob ein Klick zaehlt (z. B. "Alle").
     */
    controlled = false;
    closeIconColor;
    closeIconCrossColor;
    close = new EventEmitter();
    selectedChange = new EventEmitter();
    /**
       * Die Konfiguration des Mrd-Buttons.
       *
       * @private
       * @type {MrdConfigModel}
       * @memberof MrdButtonComponent
       */
    _config = ConfigUtil.getConfig();
    chipTextValue;
    /** Mit `selectable`: Farben eines gewaehlten Chips, festgehalten aus den Eingaben */
    auswahlHintergrund;
    auswahlSchrift;
    initialisiert = false;
    /** Vom Verwender gesetzte Farbe des Schliessen-Symbols; `null`: keine, die Farbe folgt dem Hintergrund */
    eigeneSchliessenFarbe;
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        if (this.selectable) {
            this.auswahlHintergrund = this.backgroundColor ??
                this._config.baseColors[this.accent ? 'accent' : this.warn ? 'warn' : 'primary'];
            this.auswahlSchrift = ColorUtil.isHexColor(this.color) ? this.color : undefined;
            this.initialisiert = true;
            this.auswahlfarbenSetzen();
        }
        else {
            if ((this.primary || this.accent || this.warn) && !this.backgroundColor) {
                this.backgroundColor = this._config.baseColors[this.primary ? 'primary' : this.accent ? 'accent' : 'warn'];
            }
            else if (!this.backgroundColor) {
                this.backgroundColor = NEUTRALER_HINTERGRUND;
            }
            if (!this.color || !ColorUtil.isHexColor(this.color)) {
                this.color = ColorUtil.shouldTextBeDark(this.backgroundColor) ? '#000000' : '#ffffff';
            }
            this.schliessenFarbenSetzen();
        }
        if (this.chipText) {
            this.chipTextValue = this.chipText.nativeElement.innerText;
        }
        this.cdr.detectChanges();
    }
    get istKlickbar() {
        return !this.disabled && (this.clickable || this.selectable);
    }
    chipGeklickt() {
        if (!this.selectable || this.disabled) {
            return;
        }
        if (this.controlled) {
            this.selectedChange.emit(!this.selected);
            return;
        }
        this.selected = !this.selected;
        this.selectedChange.emit(this.selected);
    }
    closeClicked(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        if (!this.disabled) {
            this.close.emit();
        }
    }
    auswahlfarbenSetzen() {
        if (!this.selectable || !this.initialisiert) {
            return;
        }
        const gewaehlt = this.selected && !this.disabled;
        this.backgroundColor = gewaehlt ? this.auswahlHintergrund : NEUTRALER_HINTERGRUND;
        if (this.disabled) {
            this.color = DEAKTIVIERTE_SCHRIFT;
        }
        else if (gewaehlt && this.auswahlSchrift) {
            this.color = this.auswahlSchrift;
        }
        else {
            this.color = ColorUtil.shouldTextBeDark(this.backgroundColor) ? '#000000' : '#ffffff';
        }
        this.schliessenFarbenSetzen();
        this.cdr.markForCheck();
    }
    schliessenFarbenSetzen() {
        if (this.eigeneSchliessenFarbe === undefined) {
            this.eigeneSchliessenFarbe = this.closeIconColor ?? null;
        }
        const iconBgDark = ColorUtil.shouldTextBeDark(this.backgroundColor);
        this.closeIconColor = this.eigeneSchliessenFarbe ?? (iconBgDark ? '#606367' : '#ffffff');
        this.closeIconCrossColor = this.eigeneSchliessenFarbe
            ? ColorUtil.shouldTextBeDark(this.closeIconColor) ? '#000000' : '#ffffff'
            : iconBgDark ? '#ffffff' : '#000000';
    }
    /** @nocollapse */ static ɵfac = function MrdChipComponent_Factory(t) { return new (t || MrdChipComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdChipComponent, selectors: [["mrd-chip"]], viewQuery: function MrdChipComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.chipText = _t.first);
        } }, inputs: { primary: ["primary", "primary", booleanAttribute], accent: ["accent", "accent", booleanAttribute], warn: ["warn", "warn", booleanAttribute], color: ["color", "color", colorThemeAttribute], backgroundColor: ["backgroundColor", "backgroundColor", colorAttribute], clickable: ["clickable", "clickable", booleanAttribute], closeable: ["closeable", "closeable", booleanAttribute], prefixIcon: "prefixIcon", suffixIcon: "suffixIcon", disabled: ["disabled", "disabled", booleanAttribute], selectable: ["selectable", "selectable", booleanAttribute], selected: ["selected", "selected", booleanAttribute], controlled: ["controlled", "controlled", booleanAttribute], closeIconColor: ["closeIconColor", "closeIconColor", colorAttribute], closeIconCrossColor: ["closeIconCrossColor", "closeIconCrossColor", colorAttribute] }, outputs: { close: "close", selectedChange: "selectedChange" }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c3, decls: 8, vars: 16, consts: [[1, "mrd-chip-container", 3, "ngStyle", "click"], [1, "mrd-chip-content", 3, "ngStyle"], [3, "svgIcon", 4, "ngIf"], ["showIfTruncated", "", 1, "mrd-chip-text", 3, "mrdToolTip"], ["chipText", ""], ["icon-button", "", "fullIcon", "", "diameter", "1em", 3, "disabled", "click", 4, "ngIf"], [3, "svgIcon"], ["icon-button", "", "fullIcon", "", "diameter", "1em", 3, "disabled", "click"], ["mrd-icon", "", 1, "chip-close-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "100%", "height", "100%", "viewBox", "0 0 36 36", "fit", "", "preserveAspectRatio", "xMidYMid meet", "focusable", "false"], ["transform", "translate(0 0.001)"], ["id", "X-gross-hellgrau", "transform", "translate(0 -0.001)"], ["d", "M195.722,2783.271a18,18,0,1,1-25.456,0A18,18,0,0,1,195.722,2783.271Z", "transform", "translate(-164.994 -2778)", 1, "kreis"], ["d", "M-184.391-11.15l-2.953-2.953L-190.3-11.15a1.581,1.581,0,0,1-1.12.464,1.581,1.581,0,0,1-1.12-.464,1.585,1.585,0,0,1,0-2.241l2.953-2.953-2.953-2.953a1.584,1.584,0,0,1,0-2.24,1.584,1.584,0,0,1,2.24,0l2.953,2.953,2.953-2.953a1.584,1.584,0,0,1,2.24,0,1.584,1.584,0,0,1,0,2.24l-2.953,2.953,2.953,2.953a1.585,1.585,0,0,1,0,2.241,1.579,1.579,0,0,1-1.12.464A1.579,1.579,0,0,1-184.391-11.15Z", "transform", "translate(205.343 34.343)", 1, "x"]], template: function MrdChipComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function MrdChipComponent_Template_div_click_0_listener() { return ctx.chipGeklickt(); });
            i0.ɵɵelementStart(1, "div", 1);
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
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(12, _c1, ctx.istKlickbar ? "pointer" : "default"));
            i0.ɵɵattribute("role", ctx.selectable ? "option" : null)("aria-selected", ctx.selectable ? ctx.selected : null);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(14, _c2, ctx.disabled ? "none" : "auto"));
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
        args: [{ selector: 'mrd-chip', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-chip-container\"\r\n  [ngStyle]=\"{ 'cursor': istKlickbar ? 'pointer' : 'default' }\"\r\n  [attr.role]=\"selectable ? 'option' : null\"\r\n  [attr.aria-selected]=\"selectable ? selected : null\"\r\n  (click)=\"chipGeklickt()\"\r\n  [style.--chip-color]=\"color\"\r\n  [style.--chip-background-color]=\"backgroundColor\"\r\n>\r\n  <div class=\"mrd-chip-content\" [ngStyle]=\"{'pointer-events': disabled ? 'none' : 'auto'}\">\r\n    <mrd-icon *ngIf=\"prefixIcon\" [svgIcon]=\"prefixIcon\"></mrd-icon>\r\n    <div #chipText class=\"mrd-chip-text\" [mrdToolTip]=\"chipTextValue\" showIfTruncated>\r\n      <ng-content></ng-content>\r\n    </div>\r\n    <mrd-icon *ngIf=\"suffixIcon\" [svgIcon]=\"suffixIcon\"></mrd-icon>\r\n  </div>\r\n\r\n  <mrd-button icon-button fullIcon diameter=\"1em\" (click)=\"closeClicked($event)\" [disabled]=\"disabled\" *ngIf=\"closeable\">\r\n    <!-- <mrd-icon svgIcon=\"mrd_close_grey\"></mrd-icon> -->\r\n     <span mrd-icon [style.--chip-close-icon-color]=\"closeIconColor\" [style.--chip-close-icon-cross-color]=\"closeIconCrossColor\" class=\"chip-close-icon\">\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 36 36\" fit=\"\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\">\r\n        <g transform=\"translate(0 0.001)\">\r\n          <g id=\"X-gross-hellgrau\" transform=\"translate(0 -0.001)\">\r\n            <path class=\"kreis\" d=\"M195.722,2783.271a18,18,0,1,1-25.456,0A18,18,0,0,1,195.722,2783.271Z\" transform=\"translate(-164.994 -2778)\"></path>\r\n            <path class=\"x\" d=\"M-184.391-11.15l-2.953-2.953L-190.3-11.15a1.581,1.581,0,0,1-1.12.464,1.581,1.581,0,0,1-1.12-.464,1.585,1.585,0,0,1,0-2.241l2.953-2.953-2.953-2.953a1.584,1.584,0,0,1,0-2.24,1.584,1.584,0,0,1,2.24,0l2.953,2.953,2.953-2.953a1.584,1.584,0,0,1,2.24,0,1.584,1.584,0,0,1,0,2.24l-2.953,2.953,2.953,2.953a1.585,1.585,0,0,1,0,2.241,1.579,1.579,0,0,1-1.12.464A1.579,1.579,0,0,1-184.391-11.15Z\" transform=\"translate(205.343 34.343)\"></path>\r\n          </g>\r\n        </g>\r\n      </svg>\r\n     </span>\r\n  </mrd-button>\r\n</div>\r\n", styles: [":host{display:flex;flex-direction:column;justify-content:center;align-items:center;width:-moz-fit-content;width:fit-content;max-width:100%}.mrd-chip-container{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.125em .7em;gap:1em;border-radius:2em;background-color:var(--chip-background-color);max-width:100%}.mrd-chip-container .mrd-chip-content{display:flex;flex-direction:row;align-items:center;width:100%;gap:.5em;line-height:1.5em;max-width:100%;min-width:calc(100% - 2em)}.mrd-chip-container .mrd-chip-content .mrd-chip-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--chip-color)}.mrd-chip-container mrd-icon,.mrd-chip-container span[mrd-icon].chip-close-icon{display:block;min-width:1em;width:1em;height:1em}.mrd-chip-container mrd-icon svg path.kreis,.mrd-chip-container span[mrd-icon].chip-close-icon svg path.kreis{fill:var(--chip-close-icon-color)}.mrd-chip-container mrd-icon svg path.x,.mrd-chip-container span[mrd-icon].chip-close-icon svg path.x{fill:var(--chip-close-icon-cross-color)}\n"] }]
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
        }], selectable: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], selected: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], controlled: [{
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
        }], selectedChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWNoaXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1jaGlwL2NvbXBvbmVudHMvbXJkLWNoaXAvbXJkLWNoaXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1jaGlwL2NvbXBvbmVudHMvbXJkLWNoaXAvbXJkLWNoaXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzSyxPQUFPLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDcEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7Ozs7SUNLN0QsOEJBQStEOzs7SUFBbEMsMkNBQXNCOzs7SUFJbkQsOEJBQStEOzs7SUFBbEMsMkNBQXNCOzs7O0lBR3JELHFDQUF1SDtJQUF2RSw4S0FBUyxlQUFBLDJCQUFvQixDQUFBLElBQUM7SUFFM0UsK0JBQW9KO0lBQ25KLG1CQUFvSjtJQUFwSiw4QkFBb0osWUFBQSxZQUFBO0lBRzlJLDJCQUEwSSxlQUFBO0lBRTVJLGlCQUFJLEVBQUEsRUFBQSxFQUFBLEVBQUE7OztJQVJtRSwwQ0FBcUI7SUFFbEYsZUFBZ0Q7SUFBaEQsZ0VBQWdELDZEQUFBOzs7OztBRFpwRSxrRUFBa0U7QUFDbEUsTUFBTSxxQkFBcUIsR0FBRyxTQUFTLENBQUM7QUFDeEMsTUFBTSxvQkFBb0Is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QUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBRVMsU0FBUztrQkFBckQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUVmLFVBQVU7a0JBQTlCLEtBQUs7bUJBQUMsWUFBWTtZQUNFLFVBQVU7a0JBQTlCLEtBQUs7bUJBQUMsWUFBWTtZQUU4QixRQUFRO2tCQUF4RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBbUJTLFVBQVU7a0JBQXRELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFYSxRQUFRO2tCQUF4RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBYVMsVUFBVTtrQkFBdEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUVPLGNBQWM7a0JBQXhELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsY0FBYyxFQUFDO1lBQ1MsbUJBQW1CO2tCQUE3RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGNBQWMsRUFBQztZQUV4QixLQUFLO2tCQUFkLE1BQU07WUFFRyxjQUFjO2tCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgYm9vbGVhbkF0dHJpYnV0ZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNcmRDb25maWdNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbC9jb25maWcubW9kZWwnO1xuaW1wb3J0IHsgY29sb3JBdHRyaWJ1dGUsIGNvbG9yVGhlbWVBdHRyaWJ1dGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9jb2xvci10cmFuc2Zvcm0nO1xuaW1wb3J0IHsgQ29sb3JVdGlsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29sb3IudXRpbCc7XG5pbXBvcnQgeyBDb25maWdVdGlsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29uZmlnLnV0aWwnO1xuXG4vKiogSGludGVyZ3J1bmQgZWluZXMgbmljaHQgZ2V3YWVobHRlbiBiencuIGRlYWt0aXZpZXJ0ZW4gQ2hpcHMgKi9cbmNvbnN0IE5FVVRSQUxFUl9ISU5URVJHUlVORCA9ICcjY2VkOWRkJztcbmNvbnN0IERFQUtUSVZJRVJURV9TQ0hSSUZUID0gJyNhNmE2YTYnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtcmQtY2hpcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtY2hpcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21yZC1jaGlwLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE1yZENoaXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBAVmlld0NoaWxkKCdjaGlwVGV4dCcpIHB1YmxpYyBjaGlwVGV4dDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4gfCB1bmRlZmluZWQ7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcHJpbWFyeTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBhY2NlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgd2FybjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JUaGVtZUF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xuICAgICAgdGhpcy5fY29sb3IgPSB2YWx1ZTtcbiAgIH1cbiAgIHB1YmxpYyBnZXQgY29sb3IoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gICB9XG4gICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xuXG4gICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IGJhY2tncm91bmRDb2xvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICB0aGlzLl9iYWNrZ3JvdW5kQ29sb3IgPSB2YWx1ZTtcbiAgIH1cbiAgICBwdWJsaWMgZ2V0IGJhY2tncm91bmRDb2xvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JhY2tncm91bmRDb2xvcjtcbiAgICB9XG4gICAgcHJpdmF0ZSBfYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgY2xpY2thYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgY2xvc2VhYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoJ3ByZWZpeEljb24nKSBwcmVmaXhJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgnc3VmZml4SWNvbicpIHN1ZmZpeEljb246IHN0cmluZztcblxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuICAgIGlmICh0aGlzLnNlbGVjdGFibGUpIHtcbiAgICAgIHRoaXMuYXVzd2FobGZhcmJlblNldHplbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IHZhbHVlID8gTkVVVFJBTEVSX0hJTlRFUkdSVU5EIDogdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgdGhpcy5jb2xvciA9IHZhbHVlID8gREVBS1RJVklFUlRFX1NDSFJJRlQgOiB0aGlzLmNvbG9yO1xuICB9XG4gIHB1YmxpYyBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERlciBDaGlwIGlzdCB3YWVobGJhcjogRWluIEtsaWNrIHNjaGFsdGV0IGBzZWxlY3RlZGAgdW0gdW5kIG1lbGRldCBkZW4gbmV1ZW4gWnVzdGFuZCB1ZWJlciBgc2VsZWN0ZWRDaGFuZ2VgLlxuICAgKiBOaWNodCBnZXdhZWhsdCBpc3QgZXIgbmV1dHJhbCBncmF1LCBnZXdhZWhsdCBpbiBkZXIgRmFyYmUgZGVzIFRoZW1lcyAoYHByaW1hcnlgL2BhY2NlbnRgL2B3YXJuYCwgU3RhbmRhcmQgYHByaW1hcnlgKVxuICAgKiBiencuIGluIGBiYWNrZ3JvdW5kQ29sb3JgLiBEYXMgU2NobGllc3Nlbi1TeW1ib2wgYmxlbmRldCBgY2xvc2VhYmxlPVwiZmFsc2VcImAgYXVzLlxuICAgKi9cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2VsZWN0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNldCBzZWxlY3RlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NlbGVjdGVkID0gdmFsdWU7XG4gICAgdGhpcy5hdXN3YWhsZmFyYmVuU2V0emVuKCk7XG4gIH1cbiAgcHVibGljIGdldCBzZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gIH1cbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogTWl0IGBzZWxlY3RhYmxlYDogRGVyIENoaXAgc2NoYWx0ZXQgbmljaHQgc2VsYnN0IHVtLCBzb25kZXJuIG1lbGRldCBkZW4gZ2V3dWVuc2NodGVuIFp1c3RhbmQgdWViZXIgYHNlbGVjdGVkQ2hhbmdlYDtcbiAgICogYW5nZXplaWd0IHdpcmQgYWxsZWluIGBzZWxlY3RlZGAuIEZ1ZXIgQXVzd2FobGVuLCBkaWUgc2VsYnN0IGVudHNjaGVpZGVuLCBvYiBlaW4gS2xpY2sgemFlaGx0ICh6LiBCLiBcIkFsbGVcIikuXG4gICAqL1xuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBjb250cm9sbGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGNsb3NlSWNvbkNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjbG9zZUljb25Dcm9zc0NvbG9yOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLyoqXG4gICAgICogRGllIEtvbmZpZ3VyYXRpb24gZGVzIE1yZC1CdXR0b25zLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7TXJkQ29uZmlnTW9kZWx9XG4gICAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgX2NvbmZpZzogTXJkQ29uZmlnTW9kZWwgPSBDb25maWdVdGlsLmdldENvbmZpZygpO1xuXG4gIHB1YmxpYyBjaGlwVGV4dFZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqIE1pdCBgc2VsZWN0YWJsZWA6IEZhcmJlbiBlaW5lcyBnZXdhZWhsdGVuIENoaXBzLCBmZXN0Z2VoYWx0ZW4gYXVzIGRlbiBFaW5nYWJlbiAqL1xuICBwcml2YXRlIGF1c3dhaGxIaW50ZXJncnVuZDogc3RyaW5nO1xuICBwcml2YXRlIGF1c3dhaGxTY2hyaWZ0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgaW5pdGlhbGlzaWVydDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBWb20gVmVyd2VuZGVyIGdlc2V0enRlIEZhcmJlIGRlcyBTY2hsaWVzc2VuLVN5bWJvbHM7IGBudWxsYDoga2VpbmUsIGRpZSBGYXJiZSBmb2xndCBkZW0gSGludGVyZ3J1bmQgKi9cbiAgcHJpdmF0ZSBlaWdlbmVTY2hsaWVzc2VuRmFyYmU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VsZWN0YWJsZSkge1xuICAgICAgdGhpcy5hdXN3YWhsSGludGVyZ3J1bmQgPSB0aGlzLmJhY2tncm91bmRDb2xvciA/P1xuICAgICAgICB0aGlzLl9jb25maWcuYmFzZUNvbG9yc1t0aGlzLmFjY2VudCA/ICdhY2NlbnQnIDogdGhpcy53YXJuID8gJ3dhcm4nIDogJ3ByaW1hcnknXSBhcyBzdHJpbmc7XG4gICAgICB0aGlzLmF1c3dhaGxTY2hyaWZ0ID0gQ29sb3JVdGlsLmlzSGV4Q29sb3IodGhpcy5jb2xvcikgPyB0aGlzLmNvbG9yIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5pbml0aWFsaXNpZXJ0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXVzd2FobGZhcmJlblNldHplbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoKHRoaXMucHJpbWFyeSB8fCB0aGlzLmFjY2VudCB8fCB0aGlzLndhcm4pICYmICF0aGlzLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IHRoaXMuX2NvbmZpZy5iYXNlQ29sb3JzW3RoaXMucHJpbWFyeSA/ICdwcmltYXJ5JyA6IHRoaXMuYWNjZW50ID8gJ2FjY2VudCcgOiAnd2FybiddIGFzIHN0cmluZztcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gTkVVVFJBTEVSX0hJTlRFUkdSVU5EO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmNvbG9yIHx8ICFDb2xvclV0aWwuaXNIZXhDb2xvcih0aGlzLmNvbG9yKSkge1xuICAgICAgICB0aGlzLmNvbG9yID0gQ29sb3JVdGlsLnNob3VsZFRleHRCZURhcmsodGhpcy5iYWNrZ3JvdW5kQ29sb3IpID8gJyMwMDAwMDAnIDogJyNmZmZmZmYnO1xuICAgICAgfVxuICAgICAgdGhpcy5zY2hsaWVzc2VuRmFyYmVuU2V0emVuKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2hpcFRleHQpIHtcbiAgICAgIHRoaXMuY2hpcFRleHRWYWx1ZSA9IHRoaXMuY2hpcFRleHQubmF0aXZlRWxlbWVudC5pbm5lclRleHQ7XG4gICAgfVxuXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHVibGljIGdldCBpc3RLbGlja2JhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuZGlzYWJsZWQgJiYgKHRoaXMuY2xpY2thYmxlIHx8IHRoaXMuc2VsZWN0YWJsZSk7XG4gIH1cblxuICBwdWJsaWMgY2hpcEdla2xpY2t0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zZWxlY3RhYmxlIHx8IHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29udHJvbGxlZCkge1xuICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KCF0aGlzLnNlbGVjdGVkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZCA9ICF0aGlzLnNlbGVjdGVkO1xuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZUNsaWNrZWQoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xvc2UuZW1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXVzd2FobGZhcmJlblNldHplbigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0YWJsZSB8fCAhdGhpcy5pbml0aWFsaXNpZXJ0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGdld2FlaGx0OiBib29sZWFuID0gdGhpcy5zZWxlY3RlZCAmJiAhdGhpcy5kaXNhYmxlZDtcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IGdld2FlaGx0ID8gdGhpcy5hdXN3YWhsSGludGVyZ3J1bmQgOiBORVVUUkFMRVJfSElOVEVSR1JVTkQ7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29sb3IgPSBERUFLVElWSUVSVEVfU0NIUklGVDtcbiAgICB9IGVsc2UgaWYgKGdld2FlaGx0ICYmIHRoaXMuYXVzd2FobFNjaHJpZnQpIHtcbiAgICAgIHRoaXMuY29sb3IgPSB0aGlzLmF1c3dhaGxTY2hyaWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbG9yID0gQ29sb3JVdGlsLnNob3VsZFRleHRCZURhcmsodGhpcy5iYWNrZ3JvdW5kQ29sb3IpID8gJyMwMDAwMDAnIDogJyNmZmZmZmYnO1xuICAgIH1cbiAgICB0aGlzLnNjaGxpZXNzZW5GYXJiZW5TZXR6ZW4oKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgc2NobGllc3NlbkZhcmJlblNldHplbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5laWdlbmVTY2hsaWVzc2VuRmFyYmUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5laWdlbmVTY2hsaWVzc2VuRmFyYmUgPSB0aGlzLmNsb3NlSWNvbkNvbG9yID8/IG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGljb25CZ0Rhcms6IGJvb2xlYW4gPSBDb2xvclV0aWwuc2hvdWxkVGV4dEJlRGFyayh0aGlzLmJhY2tncm91bmRDb2xvcik7XG4gICAgdGhpcy5jbG9zZUljb25Db2xvciA9IHRoaXMuZWlnZW5lU2NobGllc3NlbkZhcmJlID8/IChpY29uQmdEYXJrID8gJyM2MDYzNjcnIDogJyNmZmZmZmYnKTtcbiAgICB0aGlzLmNsb3NlSWNvbkNyb3NzQ29sb3IgPSB0aGlzLmVpZ2VuZVNjaGxpZXNzZW5GYXJiZVxuICAgICAgPyBDb2xvclV0aWwuc2hvdWxkVGV4dEJlRGFyayh0aGlzLmNsb3NlSWNvbkNvbG9yKSA/ICcjMDAwMDAwJyA6ICcjZmZmZmZmJ1xuICAgICAgOiBpY29uQmdEYXJrID8gJyNmZmZmZmYnIDogJyMwMDAwMDAnO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibXJkLWNoaXAtY29udGFpbmVyXCJcclxuICBbbmdTdHlsZV09XCJ7ICdjdXJzb3InOiBpc3RLbGlja2JhciA/ICdwb2ludGVyJyA6ICdkZWZhdWx0JyB9XCJcclxuICBbYXR0ci5yb2xlXT1cInNlbGVjdGFibGUgPyAnb3B0aW9uJyA6IG51bGxcIlxyXG4gIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwic2VsZWN0YWJsZSA/IHNlbGVjdGVkIDogbnVsbFwiXHJcbiAgKGNsaWNrKT1cImNoaXBHZWtsaWNrdCgpXCJcclxuICBbc3R5bGUuLS1jaGlwLWNvbG9yXT1cImNvbG9yXCJcclxuICBbc3R5bGUuLS1jaGlwLWJhY2tncm91bmQtY29sb3JdPVwiYmFja2dyb3VuZENvbG9yXCJcclxuPlxyXG4gIDxkaXYgY2xhc3M9XCJtcmQtY2hpcC1jb250ZW50XCIgW25nU3R5bGVdPVwieydwb2ludGVyLWV2ZW50cyc6IGRpc2FibGVkID8gJ25vbmUnIDogJ2F1dG8nfVwiPlxyXG4gICAgPG1yZC1pY29uICpuZ0lmPVwicHJlZml4SWNvblwiIFtzdmdJY29uXT1cInByZWZpeEljb25cIj48L21yZC1pY29uPlxyXG4gICAgPGRpdiAjY2hpcFRleHQgY2xhc3M9XCJtcmQtY2hpcC10ZXh0XCIgW21yZFRvb2xUaXBdPVwiY2hpcFRleHRWYWx1ZVwiIHNob3dJZlRydW5jYXRlZD5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bXJkLWljb24gKm5nSWY9XCJzdWZmaXhJY29uXCIgW3N2Z0ljb25dPVwic3VmZml4SWNvblwiPjwvbXJkLWljb24+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxtcmQtYnV0dG9uIGljb24tYnV0dG9uIGZ1bGxJY29uIGRpYW1ldGVyPVwiMWVtXCIgKGNsaWNrKT1cImNsb3NlQ2xpY2tlZCgkZXZlbnQpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgKm5nSWY9XCJjbG9zZWFibGVcIj5cclxuICAgIDwhLS0gPG1yZC1pY29uIHN2Z0ljb249XCJtcmRfY2xvc2VfZ3JleVwiPjwvbXJkLWljb24+IC0tPlxyXG4gICAgIDxzcGFuIG1yZC1pY29uIFtzdHlsZS4tLWNoaXAtY2xvc2UtaWNvbi1jb2xvcl09XCJjbG9zZUljb25Db2xvclwiIFtzdHlsZS4tLWNoaXAtY2xvc2UtaWNvbi1jcm9zcy1jb2xvcl09XCJjbG9zZUljb25Dcm9zc0NvbG9yXCIgY2xhc3M9XCJjaGlwLWNsb3NlLWljb25cIj5cclxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMzYgMzZcIiBmaXQ9XCJcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiIGZvY3VzYWJsZT1cImZhbHNlXCI+XHJcbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMC4wMDEpXCI+XHJcbiAgICAgICAgICA8ZyBpZD1cIlgtZ3Jvc3MtaGVsbGdyYXVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAtMC4wMDEpXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwia3JlaXNcIiBkPVwiTTE5NS43MjIsMjc4My4yNzFhMTgsMTgsMCwxLDEtMjUuNDU2LDBBMTgsMTgsMCwwLDEsMTk1LjcyMiwyNzgzLjI3MVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE2NC45OTQgLTI3NzgpXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICA8cGF0aCBjbGFzcz1cInhcIiBkPVwiTS0xODQuMzkxLTExLjE1bC0yLjk1My0yLjk1M0wtMTkwLjMtMTEuMTVhMS41ODEsMS41ODEsMCwwLDEtMS4xMi40NjQsMS41ODEsMS41ODEsMCwwLDEtMS4xMi0uNDY0LDEuNTg1LDEuNTg1LDAsMCwxLDAtMi4yNDFsMi45NTMtMi45NTMtMi45NTMtMi45NTNhMS41ODQsMS41ODQsMCwwLDEsMC0yLjI0LDEuNTg0LDEuNTg0LDAsMCwxLDIuMjQsMGwyLjk1MywyLjk1MywyLjk1My0yLjk1M2ExLjU4NCwxLjU4NCwwLDAsMSwyLjI0LDAsMS41ODQsMS41ODQsMCwwLDEsMCwyLjI0bC0yLjk1MywyLjk1MywyLjk1MywyLjk1M2ExLjU4NSwxLjU4NSwwLDAsMSwwLDIuMjQxLDEuNTc5LDEuNTc5LDAsMCwxLTEuMTIuNDY0QTEuNTc5LDEuNTc5LDAsMCwxLTE4NC4zOTEtMTEuMTVaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDIwNS4zNDMgMzQuMzQzKVwiPjwvcGF0aD5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgIDwvc3Bhbj5cclxuICA8L21yZC1idXR0b24+XHJcbjwvZGl2PlxyXG4iXX0=