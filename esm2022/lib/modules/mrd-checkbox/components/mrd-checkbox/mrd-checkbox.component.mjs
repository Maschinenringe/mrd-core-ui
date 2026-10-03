import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, booleanAttribute } from '@angular/core';
import { BaseObject, SubscriptionHandler, Util } from 'mrd-core';
import { merge } from 'rxjs';
import { sizeAttribute } from '../../../../common/transforms/size-transform';
import { colorAttribute } from '../../../../common/transforms/color-transform';
import { ConfigUtil } from '../../../../common/util/config.util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../mrd-tooltip/common/directive/tool-tip-renderer/tool-tip-renderer.directive";
const _c0 = ["checkboxlabel"];
function MrdCheckboxComponent_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 8);
    i0.ɵɵelement(2, "g", 9)(3, "g", 10);
    i0.ɵɵelementStart(4, "g", 11)(5, "title");
    i0.ɵɵtext(6, "check");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "path", 12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} }
function MrdCheckboxComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 6);
    i0.ɵɵtemplate(1, MrdCheckboxComponent_span_1_ng_container_1_Template, 8, 0, "ng-container", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.checked);
} }
function MrdCheckboxComponent_div_2_ng_content_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1, ["*ngIf", "checked"]);
} }
function MrdCheckboxComponent_div_2_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 2, ["*ngIf", "!checked"]);
} }
const _c1 = function (a0) { return { "isHover": a0 }; };
function MrdCheckboxComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, MrdCheckboxComponent_div_2_ng_content_1_Template, 1, 0, "ng-content", 7);
    i0.ɵɵtemplate(2, MrdCheckboxComponent_div_2_ng_content_2_Template, 1, 0, "ng-content", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c1, !ctx_r1.customHoverIcons));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.checked);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.checked);
} }
function MrdCheckboxComponent_div_3_ng_content_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 3, ["*ngIf", "checked"]);
} }
function MrdCheckboxComponent_div_3_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 4, ["*ngIf", "!checked"]);
} }
function MrdCheckboxComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtemplate(1, MrdCheckboxComponent_div_3_ng_content_1_Template, 1, 0, "ng-content", 7);
    i0.ɵɵtemplate(2, MrdCheckboxComponent_div_3_ng_content_2_Template, 1, 0, "ng-content", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.checked);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.checked);
} }
const _c2 = ["*", [["", "icon-checked", ""]], [["", "icon-unchecked", ""]], [["", "icon-checked-hover", ""]], [["", "icon-unchecked-hover", ""]]];
const _c3 = function (a0) { return { "mrd-checkbox-disabled": a0 }; };
const _c4 = ["*", "[icon-checked]", "[icon-unchecked]", "[icon-checked-hover]", "[icon-unchecked-hover]"];
export class MrdCheckboxComponent extends BaseObject {
    cdr;
    label;
    /** Wert und Deaktivierung des Controls werden laufend uebernommen, auch nach setValue(), reset(), disable() und enable() */
    set formControl(control) {
        this.formularAbo?.unsubscribe();
        this._formControl = control;
        if (Util.isDefined(control)) {
            if (Util.isDefined(control.value)) {
                this.checked = !!control.value;
            }
            // statusChanges, damit disable()/enable() auch bei OnPush sofort sichtbar werden
            this.formularAbo = this.watch(merge(control.valueChanges, control.control.statusChanges), new SubscriptionHandler(() => {
                this.checked = !!control.value;
                this.cdr.markForCheck();
            }));
        }
    }
    get formControl() {
        return this._formControl;
    }
    _formControl;
    formularAbo;
    // @Input({transform: booleanAttribute}) public fill: boolean = false;
    // @Input({transform: booleanAttribute}) public outline: boolean = false;
    rounded = false;
    // @Input({transform: booleanAttribute}) public primary: boolean = false;
    // @Input({transform: booleanAttribute}) public accent: boolean = false;
    // @Input({transform: booleanAttribute}) public warn: boolean = false;
    color = '#000000';
    colorHover = '#000000';
    colorChecked = '#000000';
    colorCheckedHover = '#000000';
    bgColor = 'transparent';
    bgColorHover = 'transparent';
    bgColorChecked = 'transparent';
    bgColorCheckedHover = 'transparent';
    border = 'none';
    borderHover = 'none';
    borderChecked = 'none';
    borderCheckedHover = 'none';
    checked = false;
    disabled = false;
    customIcons = false;
    customHoverIcons = false;
    checkboxSize = '16px';
    checkboxHeight;
    checkboxWidth;
    singleLine = false;
    fitContent = false;
    ellipsis = false;
    tooltip = false;
    tooltipIfTruncated = false;
    set tooltipText(value) {
        if (Util.isDefined(value)) {
            this.customTooltipText = true;
            this._tooltipText = value;
        }
        else if (Util.isDefined(this.label)) {
            this._tooltipText = this.label.nativeElement.innerText;
        }
    }
    get tooltipText() {
        return this._tooltipText;
    }
    _tooltipText;
    customTooltipText = false;
    tooltipPosition = 'bottom';
    tooltipDisabled = false;
    /**
     * Die Checkbox schaltet nicht selbst um, sondern meldet den gewuenschten Wert ueber `checkedChange`;
     * angezeigt wird allein `checked`. Fuer Listen, die selbst entscheiden, ob ein Klick zaehlt. Nicht mit `mrdFormControl` kombinieren.
     */
    controlled = false;
    /** Klick nicht an umgebende Elemente weitergeben (auch wenn deaktiviert), z. B. in einer klickbaren Zeile */
    stopPropagation = false;
    checkedChange = new EventEmitter();
    config = ConfigUtil.getConfig();
    constructor(cdr) {
        super();
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        if (Util.isDefined(this.formControl) && Util.isDefined(this.formControl.value)) {
            this.checked = !!this.formControl.value;
        }
        if (this.tooltipIfTruncated) {
            this.tooltip = true;
        }
        if (this.tooltip && !Util.isDefined(this.tooltipText)) {
            this._tooltipText = this.label.nativeElement.innerText;
        }
        if (!Util.isDefined(this.checkboxHeight)) {
            this.checkboxHeight = this.checkboxSize;
        }
        if (!Util.isDefined(this.checkboxWidth)) {
            this.checkboxWidth = this.checkboxSize;
        }
        this.cdr.detectChanges();
        // ['checkbox', 'fill', 'selected', 'primary', 'text'];
        // ['checkbox', 'selected', 'primary', 'text'];
        // ['baseColor', 'primary'];
        // if (this.primary) {
        //   this.color = _.isObject(this.config.baseColors.primary) ? (this.config.baseColors.primary as MrdBaseColorTheme).text : this.config.baseColors.primary as string;
        // } else if (this.accent) {
        //   this.color = this.config.accentColor;
        // } else if (this.warn) {
        //   this.color = this.config.warnColor;
        // }
    }
    ngAfterViewChecked() {
        // Ohne Beschriftung entfaellt der Abstand zwischen Kaestchen und Text. Direkt am DOM, weil sich die Beschriftung
        // erst nach der Pruefung des Templates ergibt (projizierter Inhalt) - ein Binding wuerde hier ExpressionChanged ausloesen.
        if (Util.isDefined(this.label)) {
            const ohneText = (this.label.nativeElement.textContent ?? '').trim().length === 0;
            this.label.nativeElement.parentElement?.classList.toggle('ohne-text', ohneText);
        }
        if (this.tooltip && Util.isDefined(this.label) && !this.customTooltipText && (!Util.isDefined(this.tooltipText) || this.tooltipText !== this.label.nativeElement.innerText)) {
            this._tooltipText = this.label.nativeElement.innerText;
        }
    }
    // private initBaseStyle(): void {
    // }
    toggle(event) {
        if (this.stopPropagation) {
            event?.stopPropagation();
        }
        if (this.disabled || (Util.isDefined(this.formControl) && this.formControl.disabled)) {
            return;
        }
        if (this.controlled) {
            this.checkedChange.emit(!this.checked);
            return;
        }
        this.checked = !this.checked;
        if (Util.isDefined(this.formControl)) {
            this.formControl.setValue(this.checked);
        }
        this.checkedChange.emit(this.checked);
        this.cdr.detectChanges();
    }
    /** @nocollapse */ static ɵfac = function MrdCheckboxComponent_Factory(t) { return new (t || MrdCheckboxComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdCheckboxComponent, selectors: [["mrd-checkbox"]], viewQuery: function MrdCheckboxComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.label = _t.first);
        } }, hostVars: 2, hostBindings: function MrdCheckboxComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("max-width", ctx.fitContent ? "fit-content" : "100%");
        } }, inputs: { formControl: ["mrdFormControl", "formControl"], rounded: ["rounded", "rounded", booleanAttribute], color: ["color", "color", colorAttribute], colorHover: ["colorHover", "colorHover", colorAttribute], colorChecked: ["colorChecked", "colorChecked", colorAttribute], colorCheckedHover: ["colorCheckedHover", "colorCheckedHover", colorAttribute], bgColor: ["bgColor", "bgColor", colorAttribute], bgColorHover: ["bgColorHover", "bgColorHover", colorAttribute], bgColorChecked: ["bgColorChecked", "bgColorChecked", colorAttribute], bgColorCheckedHover: ["bgColorCheckedHover", "bgColorCheckedHover", colorAttribute], border: "border", borderHover: "borderHover", borderChecked: "borderChecked", borderCheckedHover: "borderCheckedHover", checked: ["checked", "checked", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], customIcons: ["customIcons", "customIcons", booleanAttribute], customHoverIcons: ["customHoverIcons", "customHoverIcons", booleanAttribute], checkboxSize: ["checkboxSize", "checkboxSize", sizeAttribute], checkboxHeight: ["checkboxHeight", "checkboxHeight", sizeAttribute], checkboxWidth: ["checkboxWidth", "checkboxWidth", sizeAttribute], singleLine: ["single-line", "singleLine", booleanAttribute], fitContent: ["fit-content", "fitContent", booleanAttribute], ellipsis: ["ellipsis", "ellipsis", booleanAttribute], tooltip: ["tooltip", "tooltip", booleanAttribute], tooltipIfTruncated: ["tooltipIfTruncated", "tooltipIfTruncated", booleanAttribute], tooltipText: "tooltipText", tooltipPosition: "tooltipPosition", tooltipDisabled: ["tooltipDisabled", "tooltipDisabled", booleanAttribute], controlled: ["controlled", "controlled", booleanAttribute], stopPropagation: ["stopPropagation", "stopPropagation", booleanAttribute] }, outputs: { checkedChange: "checkedChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c4, decls: 7, vars: 46, consts: [[1, "mrd-checkbox-container", 3, "ngClass", "mrdToolTip", "showToolTip", "position", "showOnTruncatedElement", "click"], ["class", "mrd-checkbox-box", 4, "ngIf"], ["class", "mrd-checkbox-custom", 3, "ngClass", 4, "ngIf"], ["class", "mrd-checkbox-custom-hover", 4, "ngIf"], [1, "mrd-checkbox-label"], ["checkboxlabel", ""], [1, "mrd-checkbox-box"], [4, "ngIf"], ["fill", "#ffffff", "width", "16px", "height", "16px", "viewBox", "-4 0 32 32", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "stroke", "#000000", "stroke-width", "0.00032"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "SVGRepo_iconCarrier"], ["d", "M19.375 5.063l-9.5 13.625-6.563-4.875-3.313 4.594 11.188 8.531 12.813-18.375z"], [1, "mrd-checkbox-custom", 3, "ngClass"], [1, "mrd-checkbox-custom-hover"]], template: function MrdCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c2);
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function MrdCheckboxComponent_Template_div_click_0_listener($event) { return ctx.toggle($event); });
            i0.ɵɵtemplate(1, MrdCheckboxComponent_span_1_Template, 2, 1, "span", 1);
            i0.ɵɵtemplate(2, MrdCheckboxComponent_div_2_Template, 3, 5, "div", 2);
            i0.ɵɵtemplate(3, MrdCheckboxComponent_div_3_Template, 3, 2, "div", 3);
            i0.ɵɵelementStart(4, "span", 4, 5);
            i0.ɵɵprojection(6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const _r3 = i0.ɵɵreference(5);
            i0.ɵɵstyleProp("--box-height", ctx.checkboxHeight)("--box-width", ctx.checkboxWidth)("--bg-color", ctx.bgColor)("--bg-color-hover", ctx.bgColorHover)("--bg-color-checked", ctx.bgColorChecked)("--bg-color-checked-hover", ctx.bgColorCheckedHover)("--color", ctx.color)("--color-hover", ctx.colorHover)("--color-checked", ctx.colorChecked)("--color-checked-hover", ctx.colorCheckedHover)("--border", ctx.border)("--border-hover", ctx.borderHover)("--border-checked", ctx.borderChecked)("--border-checked-hover", ctx.borderCheckedHover);
            i0.ɵɵclassProp("rounded", ctx.rounded)("checked", ctx.checked);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(44, _c3, (ctx.formControl == null ? null : ctx.formControl.disabled) || ctx.disabled))("mrdToolTip", ctx.tooltipText)("showToolTip", ctx.tooltip && !ctx.tooltipDisabled)("position", ctx.tooltipPosition)("showOnTruncatedElement", ctx.tooltipIfTruncated ? _r3 : undefined);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.customIcons);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.customIcons);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.customHoverIcons);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("singleLine", ctx.singleLine)("ellipsis", ctx.ellipsis);
        } }, dependencies: [i1.NgClass, i1.NgIf, i2.ToolTipRendererDirective], styles: ["[_nghost-%COMP%]{display:block;width:-moz-fit-content;width:fit-content}.mrd-checkbox-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;cursor:pointer;color:var(--color);background-color:var(--bg-color);border:var(--border);padding:4px 8px 4px 4px;line-height:1.25em}.mrd-checkbox-container.rounded[_ngcontent-%COMP%]{border-radius:999999px}.mrd-checkbox-container.ohne-text[_ngcontent-%COMP%]   .mrd-checkbox-box[_ngcontent-%COMP%], .mrd-checkbox-container.ohne-text[_ngcontent-%COMP%]     [icon-checked], .mrd-checkbox-container.ohne-text[_ngcontent-%COMP%]     [icon-unchecked], .mrd-checkbox-container.ohne-text[_ngcontent-%COMP%]     [icon-checked-hover], .mrd-checkbox-container.ohne-text[_ngcontent-%COMP%]     [icon-unchecked-hover]{margin-right:0}.mrd-checkbox-container[_ngcontent-%COMP%]     [icon-checked], .mrd-checkbox-container[_ngcontent-%COMP%]     [icon-unchecked], .mrd-checkbox-container[_ngcontent-%COMP%]     [icon-checked-hover], .mrd-checkbox-container[_ngcontent-%COMP%]     [icon-unchecked-hover]{display:block;max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-height);min-height:var(--box-width);margin-right:6px}.mrd-checkbox-container.checked[_ngcontent-%COMP%]{color:var(--color-checked);background-color:var(--bg-color-checked);border:var(--border-checked)}.mrd-checkbox-container.checked[_ngcontent-%COMP%]   .mrd-checkbox-box[_ngcontent-%COMP%]{background-color:#65b32e;border:none}.mrd-checkbox-container[_ngcontent-%COMP%]   .mrd-checkbox-box[_ngcontent-%COMP%]{max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-width);min-height:var(--box-height);display:inline-block;border:2px solid rgba(0,0,0,.54);border-radius:2px;text-align:center;margin-right:6px}.mrd-checkbox-container[_ngcontent-%COMP%]   .mrd-checkbox-label[_ngcontent-%COMP%]{overflow:hidden}.mrd-checkbox-container[_ngcontent-%COMP%]   .mrd-checkbox-label.singleLine[_ngcontent-%COMP%]{white-space:nowrap}.mrd-checkbox-container[_ngcontent-%COMP%]   .mrd-checkbox-label.ellipsis[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]{cursor:inherit}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]   .mrd-checkbox-box[_ngcontent-%COMP%]{border-color:#afa6a6}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]   .mrd-checkbox-box.checked[_ngcontent-%COMP%]{background-color:#afa6a6af}.mrd-checkbox-container.mrd-checkbox-disabled[_ngcontent-%COMP%]   .mrd-checkbox-label[_ngcontent-%COMP%]{color:#afa6a6}.mrd-checkbox-container[_ngcontent-%COMP%]:hover:not(.mrd-checkbox-disabled){color:var(--color-hover);background-color:var(--bg-color-hover);border:var(--border-hover)}.mrd-checkbox-container[_ngcontent-%COMP%]:hover:not(.mrd-checkbox-disabled).checked{color:var(--color-checked-hover);background-color:var(--bg-color-checked-hover);border:var(--border-checked-hover)}.mrd-checkbox-container[_ngcontent-%COMP%]:hover:not(.mrd-checkbox-disabled)   .mrd-checkbox-custom[_ngcontent-%COMP%]:not(.isHover){display:none}.mrd-checkbox-container[_ngcontent-%COMP%]:hover:not(.mrd-checkbox-disabled)   .mrd-checkbox-custom-hover[_ngcontent-%COMP%]{display:flex}.mrd-checkbox-custom[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.mrd-checkbox-custom-hover[_ngcontent-%COMP%]{display:none;flex-direction:column;justify-content:center;align-items:center}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdCheckboxComponent, [{
        type: Component,
        args: [{ selector: 'mrd-checkbox', host: {
                    "[style.max-width]": "fitContent ? 'fit-content' : '100%'",
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-checkbox-container\" [ngClass]=\"{'mrd-checkbox-disabled': formControl?.disabled || disabled}\" (click)=\"toggle($event)\"\r\n  [mrdToolTip]=\"tooltipText\" [showToolTip]=\"tooltip && !tooltipDisabled\" [position]=\"tooltipPosition\" [showOnTruncatedElement]=\"tooltipIfTruncated ? checkboxlabel : undefined\"\r\n  [style.--box-height]=\"checkboxHeight\" \r\n  [style.--box-width]=\"checkboxWidth\"\r\n  [style.--bg-color]=\"bgColor\"\r\n  [style.--bg-color-hover]=\"bgColorHover\"\r\n  [style.--bg-color-checked]=\"bgColorChecked\"\r\n  [style.--bg-color-checked-hover]=\"bgColorCheckedHover\"\r\n  [style.--color]=\"color\"\r\n  [style.--color-hover]=\"colorHover\"\r\n  [style.--color-checked]=\"colorChecked\"\r\n  [style.--color-checked-hover]=\"colorCheckedHover\"\r\n  [style.--border]=\"border\"\r\n  [style.--border-hover]=\"borderHover\"\r\n  [style.--border-checked]=\"borderChecked\"\r\n  [style.--border-checked-hover]=\"borderCheckedHover\"\r\n  [class.rounded]=\"rounded\"\r\n  [class.checked]=\"checked\"\r\n  >\r\n  <span class=\"mrd-checkbox-box\" *ngIf=\"!customIcons\">\r\n    <ng-container *ngIf=\"checked\">\r\n      <svg fill=\"#ffffff\" width=\"16px\" height=\"16px\" viewBox=\"-4 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"#000000\" stroke-width=\"0.00032\">\r\n        <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\r\n        <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g>\r\n        <g id=\"SVGRepo_iconCarrier\"> <title>check</title> <path d=\"M19.375 5.063l-9.5 13.625-6.563-4.875-3.313 4.594 11.188 8.531 12.813-18.375z\"></path></g>\r\n      </svg>\r\n    </ng-container>\r\n  </span>\r\n  <div class=\"mrd-checkbox-custom\" [ngClass]=\"{'isHover': !customHoverIcons}\" *ngIf=\"customIcons\">\r\n    <ng-content *ngIf=\"checked\" select=\"[icon-checked]\"></ng-content>\r\n    <ng-content *ngIf=\"!checked\" select=\"[icon-unchecked]\"></ng-content>\r\n  </div>\r\n  <div class=\"mrd-checkbox-custom-hover\" *ngIf=\"customHoverIcons\">\r\n    <ng-content *ngIf=\"checked\" select=\"[icon-checked-hover]\"></ng-content>\r\n    <ng-content *ngIf=\"!checked\" select=\"[icon-unchecked-hover]\"></ng-content>\r\n  </div>\r\n  \r\n  \r\n  <span #checkboxlabel class=\"mrd-checkbox-label\"\r\n    [class.singleLine]=\"singleLine\"\r\n    [class.ellipsis]=\"ellipsis\"\r\n  ><ng-content></ng-content></span>\r\n</div>\r\n", styles: [":host{display:block;width:-moz-fit-content;width:fit-content}.mrd-checkbox-container{display:flex;flex-direction:row;align-items:center;cursor:pointer;color:var(--color);background-color:var(--bg-color);border:var(--border);padding:4px 8px 4px 4px;line-height:1.25em}.mrd-checkbox-container.rounded{border-radius:999999px}.mrd-checkbox-container.ohne-text .mrd-checkbox-box,.mrd-checkbox-container.ohne-text ::ng-deep [icon-checked],.mrd-checkbox-container.ohne-text ::ng-deep [icon-unchecked],.mrd-checkbox-container.ohne-text ::ng-deep [icon-checked-hover],.mrd-checkbox-container.ohne-text ::ng-deep [icon-unchecked-hover]{margin-right:0}.mrd-checkbox-container ::ng-deep [icon-checked],.mrd-checkbox-container ::ng-deep [icon-unchecked],.mrd-checkbox-container ::ng-deep [icon-checked-hover],.mrd-checkbox-container ::ng-deep [icon-unchecked-hover]{display:block;max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-height);min-height:var(--box-width);margin-right:6px}.mrd-checkbox-container.checked{color:var(--color-checked);background-color:var(--bg-color-checked);border:var(--border-checked)}.mrd-checkbox-container.checked .mrd-checkbox-box{background-color:#65b32e;border:none}.mrd-checkbox-container .mrd-checkbox-box{max-height:var(--box-height);max-width:var(--box-width);height:var(--box-height);width:var(--box-width);min-width:var(--box-width);min-height:var(--box-height);display:inline-block;border:2px solid rgba(0,0,0,.54);border-radius:2px;text-align:center;margin-right:6px}.mrd-checkbox-container .mrd-checkbox-label{overflow:hidden}.mrd-checkbox-container .mrd-checkbox-label.singleLine{white-space:nowrap}.mrd-checkbox-container .mrd-checkbox-label.ellipsis{white-space:nowrap;text-overflow:ellipsis}.mrd-checkbox-container.mrd-checkbox-disabled{cursor:inherit}.mrd-checkbox-container.mrd-checkbox-disabled .mrd-checkbox-box{border-color:#afa6a6}.mrd-checkbox-container.mrd-checkbox-disabled .mrd-checkbox-box.checked{background-color:#afa6a6af}.mrd-checkbox-container.mrd-checkbox-disabled .mrd-checkbox-label{color:#afa6a6}.mrd-checkbox-container:hover:not(.mrd-checkbox-disabled){color:var(--color-hover);background-color:var(--bg-color-hover);border:var(--border-hover)}.mrd-checkbox-container:hover:not(.mrd-checkbox-disabled).checked{color:var(--color-checked-hover);background-color:var(--bg-color-checked-hover);border:var(--border-checked-hover)}.mrd-checkbox-container:hover:not(.mrd-checkbox-disabled) .mrd-checkbox-custom:not(.isHover){display:none}.mrd-checkbox-container:hover:not(.mrd-checkbox-disabled) .mrd-checkbox-custom-hover{display:flex}.mrd-checkbox-custom{display:flex;flex-direction:column;justify-content:center;align-items:center}.mrd-checkbox-custom-hover{display:none;flex-direction:column;justify-content:center;align-items:center}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { label: [{
            type: ViewChild,
            args: ['checkboxlabel']
        }], formControl: [{
            type: Input,
            args: ['mrdFormControl']
        }], rounded: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], color: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], colorHover: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], colorChecked: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], colorCheckedHover: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], bgColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], bgColorHover: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], bgColorChecked: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], bgColorCheckedHover: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], border: [{
            type: Input
        }], borderHover: [{
            type: Input
        }], borderChecked: [{
            type: Input
        }], borderCheckedHover: [{
            type: Input
        }], checked: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], disabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], customIcons: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], customHoverIcons: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], checkboxSize: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], checkboxHeight: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], checkboxWidth: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], singleLine: [{
            type: Input,
            args: [{ alias: 'single-line', transform: booleanAttribute }]
        }], fitContent: [{
            type: Input,
            args: [{ alias: 'fit-content', transform: booleanAttribute }]
        }], ellipsis: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], tooltip: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], tooltipIfTruncated: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], tooltipText: [{
            type: Input
        }], tooltipPosition: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], controlled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], stopPropagation: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], checkedChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtY2hlY2tib3gvY29tcG9uZW50cy9tcmQtY2hlY2tib3gvbXJkLWNoZWNrYm94LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtY2hlY2tib3gvY29tcG9uZW50cy9tcmQtY2hlY2tib3gvbXJkLWNoZWNrYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBbUMsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0wsT0FBTyxFQUF5QixVQUFVLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxLQUFLLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUF1QixNQUFNLCtDQUErQyxDQUFDO0FBRXBHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7O0lDYzdELDZCQUE4QjtJQUM1QixtQkFBNko7SUFBN0osOEJBQTZKO0lBQzNKLHVCQUErQyxZQUFBO0lBRS9DLDZCQUE0QixZQUFBO0lBQVEscUJBQUs7SUFBQSxpQkFBUTtJQUFDLDJCQUErRjtJQUFBLGlCQUFJLEVBQUE7SUFFekosMEJBQWU7OztJQVBqQiwrQkFBb0Q7SUFDbEQsOEZBTWU7SUFDakIsaUJBQU87OztJQVBVLGVBQWE7SUFBYixxQ0FBYTs7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QkFBQyxFQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBQ1MsVUFBVTtrQkFBNUUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBQ2IsUUFBUTtrQkFBcEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUVTLE9BQU87a0JBQW5ELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFDUyxrQkFBa0I7a0JBQTlELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFDaEIsV0FBVztrQkFBOUIsS0FBSztZQWFVLGVBQWU7a0JBQTlCLEtBQUs7WUFDdUMsZUFBZTtrQkFBM0QsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQU1TLFVBQVU7a0JBQXRELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFUyxlQUFlO2tCQUEzRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBRW5CLGFBQWE7a0JBQTdCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdDaGVja2VkLCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIGJvb2xlYW5BdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWNjZXNzYWJsZUZvcm1Db250cm9sLCBCYXNlT2JqZWN0LCBTdWJzY3JpcHRpb25IYW5kbGVyLCBVdGlsIH0gZnJvbSAnbXJkLWNvcmUnO1xyXG5pbXBvcnQgeyBtZXJnZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHNpemVBdHRyaWJ1dGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9zaXplLXRyYW5zZm9ybSc7XHJcbmltcG9ydCB7IGNvbG9yQXR0cmlidXRlLCBjb2xvclRoZW1lQXR0cmlidXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvY29sb3ItdHJhbnNmb3JtJztcclxuaW1wb3J0IHsgTXJkQmFzZUNvbG9yVGhlbWUsIE1yZENvbmZpZ01vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21vZGVsL2NvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IENvbmZpZ1V0aWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb25maWcudXRpbCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1jaGVja2JveCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWNoZWNrYm94LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgaG9zdDoge1xyXG4gICAgXCJbc3R5bGUubWF4LXdpZHRoXVwiOiBcImZpdENvbnRlbnQgPyAnZml0LWNvbnRlbnQnIDogJzEwMCUnXCIsXHJcbiAgfSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkQ2hlY2tib3hDb21wb25lbnQgZXh0ZW5kcyBCYXNlT2JqZWN0IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NoZWNrYm94bGFiZWwnKSBwdWJsaWMgbGFiZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAvKiogV2VydCB1bmQgRGVha3RpdmllcnVuZyBkZXMgQ29udHJvbHMgd2VyZGVuIGxhdWZlbmQgdWViZXJub21tZW4sIGF1Y2ggbmFjaCBzZXRWYWx1ZSgpLCByZXNldCgpLCBkaXNhYmxlKCkgdW5kIGVuYWJsZSgpICovXHJcbiAgQElucHV0KCdtcmRGb3JtQ29udHJvbCcpIHB1YmxpYyBzZXQgZm9ybUNvbnRyb2woY29udHJvbDogQWNjZXNzYWJsZUZvcm1Db250cm9sKSB7XHJcbiAgICB0aGlzLmZvcm11bGFyQWJvPy51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5fZm9ybUNvbnRyb2wgPSBjb250cm9sO1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKGNvbnRyb2wpKSB7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChjb250cm9sLnZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9ICEhY29udHJvbC52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgICAvLyBzdGF0dXNDaGFuZ2VzLCBkYW1pdCBkaXNhYmxlKCkvZW5hYmxlKCkgYXVjaCBiZWkgT25QdXNoIHNvZm9ydCBzaWNodGJhciB3ZXJkZW5cclxuICAgICAgdGhpcy5mb3JtdWxhckFibyA9IHRoaXMud2F0Y2gobWVyZ2UoY29udHJvbC52YWx1ZUNoYW5nZXMsIGNvbnRyb2wuY29udHJvbC5zdGF0dXNDaGFuZ2VzKSwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9ICEhY29udHJvbC52YWx1ZTtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgZ2V0IGZvcm1Db250cm9sKCk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9ybUNvbnRyb2w7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2Zvcm1Db250cm9sOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2w7XHJcbiAgcHJpdmF0ZSBmb3JtdWxhckFibzogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAvLyBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBmaWxsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLy8gQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgb3V0bGluZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHJvdW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLy8gQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcHJpbWFyeTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8vIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGFjY2VudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8vIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHdhcm46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGNvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGNvbG9ySG92ZXI6IHN0cmluZyA9ICcjMDAwMDAwJztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY29sb3JDaGVja2VkOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGNvbG9yQ2hlY2tlZEhvdmVyOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGJnQ29sb3I6IHN0cmluZyA9ICd0cmFuc3BhcmVudCc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGJnQ29sb3JIb3Zlcjogc3RyaW5nID0gJ3RyYW5zcGFyZW50JztcclxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgYmdDb2xvckNoZWNrZWQ6IHN0cmluZyA9ICd0cmFuc3BhcmVudCc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGJnQ29sb3JDaGVja2VkSG92ZXI6IHN0cmluZyA9ICd0cmFuc3BhcmVudCc7IFxyXG4gIEBJbnB1dCgpIHB1YmxpYyBib3JkZXI6IHN0cmluZyA9ICdub25lJztcclxuICBASW5wdXQoKSBwdWJsaWMgYm9yZGVySG92ZXI6IHN0cmluZyA9ICdub25lJztcclxuICBASW5wdXQoKSBwdWJsaWMgYm9yZGVyQ2hlY2tlZDogc3RyaW5nID0gJ25vbmUnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBib3JkZXJDaGVja2VkSG92ZXI6IHN0cmluZyA9ICdub25lJztcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tSWNvbnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21Ib3Zlckljb25zOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIGNoZWNrYm94U2l6ZTogc3RyaW5nID0gJzE2cHgnO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIGNoZWNrYm94SGVpZ2h0OiBzdHJpbmc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgY2hlY2tib3hXaWR0aDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe2FsaWFzOiAnc2luZ2xlLWxpbmUnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2luZ2xlTGluZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdmaXQtY29udGVudCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBmaXRDb250ZW50OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZWxsaXBzaXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgdG9vbHRpcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHRvb2x0aXBJZlRydW5jYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgdG9vbHRpcFRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLmN1c3RvbVRvb2x0aXBUZXh0ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5fdG9vbHRpcFRleHQgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5sYWJlbCkpIHtcclxuICAgICAgdGhpcy5fdG9vbHRpcFRleHQgPSB0aGlzLmxhYmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0O1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgZ2V0IHRvb2x0aXBUZXh0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG9vbHRpcFRleHQ7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3Rvb2x0aXBUZXh0OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBjdXN0b21Ub29sdGlwVGV4dDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0b29sdGlwUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnID0gJ2JvdHRvbSc7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgdG9vbHRpcERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIERpZSBDaGVja2JveCBzY2hhbHRldCBuaWNodCBzZWxic3QgdW0sIHNvbmRlcm4gbWVsZGV0IGRlbiBnZXd1ZW5zY2h0ZW4gV2VydCB1ZWJlciBgY2hlY2tlZENoYW5nZWA7XHJcbiAgICogYW5nZXplaWd0IHdpcmQgYWxsZWluIGBjaGVja2VkYC4gRnVlciBMaXN0ZW4sIGRpZSBzZWxic3QgZW50c2NoZWlkZW4sIG9iIGVpbiBLbGljayB6YWVobHQuIE5pY2h0IG1pdCBgbXJkRm9ybUNvbnRyb2xgIGtvbWJpbmllcmVuLlxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGNvbnRyb2xsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKiogS2xpY2sgbmljaHQgYW4gdW1nZWJlbmRlIEVsZW1lbnRlIHdlaXRlcmdlYmVuIChhdWNoIHdlbm4gZGVha3RpdmllcnQpLCB6LiBCLiBpbiBlaW5lciBrbGlja2JhcmVuIFplaWxlICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc3RvcFByb3BhZ2F0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2hlY2tlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBwcml2YXRlIGNvbmZpZzogTXJkQ29uZmlnTW9kZWwgPSBDb25maWdVdGlsLmdldENvbmZpZygpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sLnZhbHVlKSkge1xyXG4gICAgICB0aGlzLmNoZWNrZWQgPSAhIXRoaXMuZm9ybUNvbnRyb2wudmFsdWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50b29sdGlwSWZUcnVuY2F0ZWQpIHtcclxuICAgICAgdGhpcy50b29sdGlwID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRvb2x0aXAgJiYgIVV0aWwuaXNEZWZpbmVkKHRoaXMudG9vbHRpcFRleHQpKSB7XHJcbiAgICAgIHRoaXMuX3Rvb2x0aXBUZXh0ID0gdGhpcy5sYWJlbC5uYXRpdmVFbGVtZW50LmlubmVyVGV4dDtcclxuICAgIH1cclxuICAgIGlmICghVXRpbC5pc0RlZmluZWQodGhpcy5jaGVja2JveEhlaWdodCkpIHtcclxuICAgICAgdGhpcy5jaGVja2JveEhlaWdodCA9IHRoaXMuY2hlY2tib3hTaXplO1xyXG4gICAgfVxyXG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh0aGlzLmNoZWNrYm94V2lkdGgpKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hXaWR0aCA9IHRoaXMuY2hlY2tib3hTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIC8vIFsnY2hlY2tib3gnLCAnZmlsbCcsICdzZWxlY3RlZCcsICdwcmltYXJ5JywgJ3RleHQnXTtcclxuICAgIC8vIFsnY2hlY2tib3gnLCAnc2VsZWN0ZWQnLCAncHJpbWFyeScsICd0ZXh0J107XHJcbiAgICAvLyBbJ2Jhc2VDb2xvcicsICdwcmltYXJ5J107XHJcbiAgICAvLyBpZiAodGhpcy5wcmltYXJ5KSB7XHJcbiAgICAvLyAgIHRoaXMuY29sb3IgPSBfLmlzT2JqZWN0KHRoaXMuY29uZmlnLmJhc2VDb2xvcnMucHJpbWFyeSkgPyAodGhpcy5jb25maWcuYmFzZUNvbG9ycy5wcmltYXJ5IGFzIE1yZEJhc2VDb2xvclRoZW1lKS50ZXh0IDogdGhpcy5jb25maWcuYmFzZUNvbG9ycy5wcmltYXJ5IGFzIHN0cmluZztcclxuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5hY2NlbnQpIHtcclxuICAgIC8vICAgdGhpcy5jb2xvciA9IHRoaXMuY29uZmlnLmFjY2VudENvbG9yO1xyXG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLndhcm4pIHtcclxuICAgIC8vICAgdGhpcy5jb2xvciA9IHRoaXMuY29uZmlnLndhcm5Db2xvcjtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIC8vIE9obmUgQmVzY2hyaWZ0dW5nIGVudGZhZWxsdCBkZXIgQWJzdGFuZCB6d2lzY2hlbiBLYWVzdGNoZW4gdW5kIFRleHQuIERpcmVrdCBhbSBET00sIHdlaWwgc2ljaCBkaWUgQmVzY2hyaWZ0dW5nXHJcbiAgICAvLyBlcnN0IG5hY2ggZGVyIFBydWVmdW5nIGRlcyBUZW1wbGF0ZXMgZXJnaWJ0IChwcm9qaXppZXJ0ZXIgSW5oYWx0KSAtIGVpbiBCaW5kaW5nIHd1ZXJkZSBoaWVyIEV4cHJlc3Npb25DaGFuZ2VkIGF1c2xvZXNlbi5cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmxhYmVsKSkge1xyXG4gICAgICBjb25zdCBvaG5lVGV4dCA9ICh0aGlzLmxhYmVsLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQgPz8gJycpLnRyaW0oKS5sZW5ndGggPT09IDA7XHJcbiAgICAgIHRoaXMubGFiZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QudG9nZ2xlKCdvaG5lLXRleHQnLCBvaG5lVGV4dCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50b29sdGlwICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMubGFiZWwpICYmICF0aGlzLmN1c3RvbVRvb2x0aXBUZXh0ICYmICghVXRpbC5pc0RlZmluZWQodGhpcy50b29sdGlwVGV4dCkgfHwgdGhpcy50b29sdGlwVGV4dCAhPT0gdGhpcy5sYWJlbC5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCkpIHtcclxuICAgICAgdGhpcy5fdG9vbHRpcFRleHQgPSB0aGlzLmxhYmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gcHJpdmF0ZSBpbml0QmFzZVN0eWxlKCk6IHZvaWQge1xyXG5cclxuICAvLyB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGUoZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgIGV2ZW50Py5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSAmJiB0aGlzLmZvcm1Db250cm9sLmRpc2FibGVkKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jb250cm9sbGVkKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tlZENoYW5nZS5lbWl0KCF0aGlzLmNoZWNrZWQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZm9ybUNvbnRyb2wpKSB7XHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5jaGVja2VkKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2hlY2tlZENoYW5nZS5lbWl0KHRoaXMuY2hlY2tlZCk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJtcmQtY2hlY2tib3gtY29udGFpbmVyXCIgW25nQ2xhc3NdPVwieydtcmQtY2hlY2tib3gtZGlzYWJsZWQnOiBmb3JtQ29udHJvbD8uZGlzYWJsZWQgfHwgZGlzYWJsZWR9XCIgKGNsaWNrKT1cInRvZ2dsZSgkZXZlbnQpXCJcclxuICBbbXJkVG9vbFRpcF09XCJ0b29sdGlwVGV4dFwiIFtzaG93VG9vbFRpcF09XCJ0b29sdGlwICYmICF0b29sdGlwRGlzYWJsZWRcIiBbcG9zaXRpb25dPVwidG9vbHRpcFBvc2l0aW9uXCIgW3Nob3dPblRydW5jYXRlZEVsZW1lbnRdPVwidG9vbHRpcElmVHJ1bmNhdGVkID8gY2hlY2tib3hsYWJlbCA6IHVuZGVmaW5lZFwiXHJcbiAgW3N0eWxlLi0tYm94LWhlaWdodF09XCJjaGVja2JveEhlaWdodFwiIFxyXG4gIFtzdHlsZS4tLWJveC13aWR0aF09XCJjaGVja2JveFdpZHRoXCJcclxuICBbc3R5bGUuLS1iZy1jb2xvcl09XCJiZ0NvbG9yXCJcclxuICBbc3R5bGUuLS1iZy1jb2xvci1ob3Zlcl09XCJiZ0NvbG9ySG92ZXJcIlxyXG4gIFtzdHlsZS4tLWJnLWNvbG9yLWNoZWNrZWRdPVwiYmdDb2xvckNoZWNrZWRcIlxyXG4gIFtzdHlsZS4tLWJnLWNvbG9yLWNoZWNrZWQtaG92ZXJdPVwiYmdDb2xvckNoZWNrZWRIb3ZlclwiXHJcbiAgW3N0eWxlLi0tY29sb3JdPVwiY29sb3JcIlxyXG4gIFtzdHlsZS4tLWNvbG9yLWhvdmVyXT1cImNvbG9ySG92ZXJcIlxyXG4gIFtzdHlsZS4tLWNvbG9yLWNoZWNrZWRdPVwiY29sb3JDaGVja2VkXCJcclxuICBbc3R5bGUuLS1jb2xvci1jaGVja2VkLWhvdmVyXT1cImNvbG9yQ2hlY2tlZEhvdmVyXCJcclxuICBbc3R5bGUuLS1ib3JkZXJdPVwiYm9yZGVyXCJcclxuICBbc3R5bGUuLS1ib3JkZXItaG92ZXJdPVwiYm9yZGVySG92ZXJcIlxyXG4gIFtzdHlsZS4tLWJvcmRlci1jaGVja2VkXT1cImJvcmRlckNoZWNrZWRcIlxyXG4gIFtzdHlsZS4tLWJvcmRlci1jaGVja2VkLWhvdmVyXT1cImJvcmRlckNoZWNrZWRIb3ZlclwiXHJcbiAgW2NsYXNzLnJvdW5kZWRdPVwicm91bmRlZFwiXHJcbiAgW2NsYXNzLmNoZWNrZWRdPVwiY2hlY2tlZFwiXHJcbiAgPlxyXG4gIDxzcGFuIGNsYXNzPVwibXJkLWNoZWNrYm94LWJveFwiICpuZ0lmPVwiIWN1c3RvbUljb25zXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2hlY2tlZFwiPlxyXG4gICAgICA8c3ZnIGZpbGw9XCIjZmZmZmZmXCIgd2lkdGg9XCIxNnB4XCIgaGVpZ2h0PVwiMTZweFwiIHZpZXdCb3g9XCItNCAwIDMyIDMyXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMC4wMDAzMlwiPlxyXG4gICAgICAgIDxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCI+PC9nPlxyXG4gICAgICAgIDxnIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9nPlxyXG4gICAgICAgIDxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPiA8dGl0bGU+Y2hlY2s8L3RpdGxlPiA8cGF0aCBkPVwiTTE5LjM3NSA1LjA2M2wtOS41IDEzLjYyNS02LjU2My00Ljg3NS0zLjMxMyA0LjU5NCAxMS4xODggOC41MzEgMTIuODEzLTE4LjM3NXpcIj48L3BhdGg+PC9nPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvc3Bhbj5cclxuICA8ZGl2IGNsYXNzPVwibXJkLWNoZWNrYm94LWN1c3RvbVwiIFtuZ0NsYXNzXT1cInsnaXNIb3Zlcic6ICFjdXN0b21Ib3Zlckljb25zfVwiICpuZ0lmPVwiY3VzdG9tSWNvbnNcIj5cclxuICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiY2hlY2tlZFwiIHNlbGVjdD1cIltpY29uLWNoZWNrZWRdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhY2hlY2tlZFwiIHNlbGVjdD1cIltpY29uLXVuY2hlY2tlZF1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cIm1yZC1jaGVja2JveC1jdXN0b20taG92ZXJcIiAqbmdJZj1cImN1c3RvbUhvdmVySWNvbnNcIj5cclxuICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiY2hlY2tlZFwiIHNlbGVjdD1cIltpY29uLWNoZWNrZWQtaG92ZXJdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhY2hlY2tlZFwiIHNlbGVjdD1cIltpY29uLXVuY2hlY2tlZC1ob3Zlcl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbiAgXHJcbiAgXHJcbiAgPHNwYW4gI2NoZWNrYm94bGFiZWwgY2xhc3M9XCJtcmQtY2hlY2tib3gtbGFiZWxcIlxyXG4gICAgW2NsYXNzLnNpbmdsZUxpbmVdPVwic2luZ2xlTGluZVwiXHJcbiAgICBbY2xhc3MuZWxsaXBzaXNdPVwiZWxsaXBzaXNcIlxyXG4gID48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPlxyXG48L2Rpdj5cclxuIl19