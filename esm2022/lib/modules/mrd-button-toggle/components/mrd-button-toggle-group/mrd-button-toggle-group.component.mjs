import { booleanAttribute, ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, numberAttribute, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { BaseObject, SubscriptionHandler } from 'mrd-core';
import { colorAttribute, colorThemeAttribute } from './../../../../common/transforms/color-transform';
import { sizeAttribute } from './../../../../common/transforms/size-transform';
import { MrdButtonComponent } from './../../../mrd-button/components/mrd-button/mrd-button.component';
import { ConfigUtil } from './../../../../common/util/config.util';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class MrdButtonToggleGroupComponent extends BaseObject {
    cdr;
    buttons;
    rounded = false;
    /**
     * Gibt an, ob die ButtonGroup als einfache Variante dargestellt wird.
     *
     * Die Buttons stossen ohne Ueberlappung aneinander, der selektierte Button wird nur eingefaerbt
     * (keine Vergroesserung, kein Schatten) und nur die Aussenecken der Gruppe sind abgerundet.
     *
     * @memberof MrdButtonToggleGroupComponent
     */
    simple = false;
    set disabled(value) {
        if (this.buttons) {
            this.buttons.forEach(b => {
                b.disabled = value;
                b.updateStyle();
            });
        }
        this.cdr.detectChanges();
    }
    multiple = false;
    set index(index) {
        if (this.multiple && !Array.isArray(index)) {
            index = [index];
        }
        this._selectedIndex = index;
        if (this.buttons) {
            this.buttons.forEach((b, i) => {
                if (this.multiple) {
                    if (index.includes(i) && !b.toggleSelected) {
                        b.toggleSelected = true;
                        b.updateStyle();
                    }
                    else if (!index.includes(i) && b.toggleSelected) {
                        b.toggleSelected = false;
                        b.updateStyle();
                    }
                }
                else if (i === index && !b.toggleSelected) {
                    b.toggleSelected = true;
                    b.updateStyle();
                }
                else if (i !== index && b.toggleSelected) {
                    b.toggleSelected = false;
                    b.updateStyle();
                }
            });
        }
        this.indexChange.emit(index);
        this.cdr.detectChanges();
    }
    get index() {
        return this._selectedIndex;
    }
    _selectedIndex = 0;
    /**
     * Gibt an, ob die ButtonGroup das Theme "primary" hat.
     *
     * Hierdurch wird die Hintergrundfarbe des Buttons auf die primäre Farbe des Themes gesetzt.
     *
     * @memberof MrdButtonComponent
     */
    primary = false;
    /**
     * Gibt an, ob die ButtonGroup das Theme "accent" hat.
     *
     * Hierdurch wird die Hintergrundfarbe des Buttons auf die Akzentfarbe des Themes gesetzt.
     *
     * @memberof MrdButtonComponent
     */
    accent = false;
    /**
     * Gibt an, ob die ButtonGroup das Theme "warn" hat.
     *
     * Hierdurch wird die Hintergrundfarbe des Buttons auf die Warnfarbe des Themes gesetzt.
     *
     * @memberof MrdButtonComponent
     */
    warn = false;
    /**
     * Setzt die Grundfarbe des Buttons.
     *
     * Diese wird je nach Style des Buttons als Hintergrundfarbe oder Textfarbe verwendet.
     *
     * Es können Hex-, RGB- oder RGBA-Werte, sowie "primary", "accent" oder "warn" angegeben werden.
     *
     * @memberof MrdButtonComponent
     */
    customTextColor;
    /**
     * Setzt die Hintergrundfarbe des Buttons.
     *
     * Es können Hex-, RGB- oder RGBA-Werte angegeben werden.
     *
     * @memberof MrdButtonComponent
     */
    customBgColor;
    /**
     * Gibt an, ob die benutzerdefinierte Textfarbe nicht durch ein defniertes Thema überschrieben werden soll.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    keepCustomTextColor = false;
    /**
     * Gibt an, ob die benutzerdefinierte Hintergrundfarbe nicht durch ein definiertes Thema überschrieben werden soll.
     *
     * @type {boolean}
     * @memberof MrdButtonComponent
     */
    keepCustomBgColor = false;
    customToggleUnselectedColor;
    customToggleUnselectedTextColor;
    customToggleSelectedColor;
    customToggleSelectedTextColor;
    /**
     * Die Mindesthöhe des Buttons.
     *
     * @type {string | number}
     * @memberof MrdButtonComponent
     */
    minHeight;
    /**
     * Die Schriftgröße des Buttons.
     *
     * @type {string | number}
     * @memberof MrdButtonComponent
     */
    fontSize;
    /**
     * Der Radius der Ecken des Buttons.
     *
     * @type {string | number}
     * @memberof MrdButtonComponent
     */
    borderRadius;
    set value(value) {
        if (value === this._value) {
            return;
        }
        if (this.multiple && !Array.isArray(value)) {
            value = [value];
        }
        this._value = value;
        if (this.buttons) {
            this.buttons.forEach((b) => {
                if (this.multiple && value.includes(b.value)) {
                    b.toggleSelected = true;
                    b.updateStyle();
                }
                else if (!this.multiple && value === b.value) {
                    b.toggleSelected = true;
                    b.updateStyle();
                }
                else {
                    b.toggleSelected = false;
                    b.updateStyle();
                }
            });
        }
        this.valueChange.emit(this._value);
        this.cdr.detectChanges();
    }
    get value() {
        return this._value;
    }
    _value;
    valueChange = new EventEmitter();
    /**
     * Das Klick-Event durch den Nutzer.
     *
     * @type {EventEmitter<Event>}
     * @memberof MrdButtonComponent
     */
    indexChange = new EventEmitter();
    /**
     * Die Konfiguration des Mrd-Buttons.
     *
     * @private
     * @type {MrdConfigModel}
     * @memberof MrdButtonComponent
     */
    _config = ConfigUtil.getConfig();
    // public activeIndex: number|number[] = 0;
    constructor(cdr) {
        super();
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        if (this.multiple && !Array.isArray(this.index)) {
            this.index = [this.index];
        }
        const anzahl = this.buttons.length;
        const radius = this.borderRadius ?? (this.rounded ? '50px' : '4px');
        this.buttons.forEach((button, index) => {
            button.elementRef.nativeElement.style.width = this.simple ? `${100 / anzahl}%` : `calc(${100 / anzahl}% + 28px)`;
            button.toggleSimple = this.simple;
            // button.flat = true;
            button.primary = this.primary;
            button.accent = this.accent;
            button.warn = this.warn;
            button.customTextColor ??= this.customTextColor;
            button.customBgColor ??= this.customBgColor;
            button.keepCustomTextColor ||= this.keepCustomTextColor;
            button.keepCustomBgColor ||= this.keepCustomBgColor;
            button.customToggleUnselectedColor ??= this.customToggleUnselectedColor;
            button.customToggleUnselectedTextColor ??= this.customToggleUnselectedTextColor;
            button.customToggleSelectedTextColor ??= this.customToggleSelectedTextColor;
            button.minHeight ??= this.minHeight;
            button.fontSize ??= this.fontSize;
            // In der einfachen Variante sind nur die Aussenecken der Gruppe abgerundet
            button.borderRadius = !this.simple || anzahl === 1 ? radius :
                index === 0 ? `${radius} 0 0 ${radius}` :
                    index === anzahl - 1 ? `0 ${radius} ${radius} 0` : '0';
            button.toggleSelected = this.multiple ? this.index.includes(index) : this.index === index;
            button.updateStyle();
            this.watch(fromEvent(button.elementRef.nativeElement, 'click'), new SubscriptionHandler((event) => {
                event.stopPropagation();
                event.preventDefault();
                if (this.multiple) {
                    this.index = this.index.includes(index) ? this.index.filter(i => i !== index) : [...this.index, index];
                    this.value = this.buttons.filter((b, i) => this.index.includes(i)).map(b => b.value);
                }
                else {
                    this.index = index;
                    this.value = button.value;
                }
                // this.activeIndex = index;
                // button.toggleSelected = this.multiple ? !button.toggleSelected : true;
                // if (!this.multiple) {
                //   this.buttons.forEach((b, i) => {
                //     if (i !== index) {
                //       b.toggleSelected = false;
                //       b.updateStyle();
                //     }
                //   });
                // }
                // button.updateStyle();
                // this.indexChange.emit(this.selectedIndex);
                this.cdr.detectChanges();
            }));
        });
        this.cdr.detectChanges();
    }
    /** @nocollapse */ static ɵfac = function MrdButtonToggleGroupComponent_Factory(t) { return new (t || MrdButtonToggleGroupComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdButtonToggleGroupComponent, selectors: [["mrd-button-toggle-group"]], contentQueries: function MrdButtonToggleGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, MrdButtonComponent, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.buttons = _t);
        } }, hostVars: 2, hostBindings: function MrdButtonToggleGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("simple", ctx.simple);
        } }, inputs: { rounded: ["rounded", "rounded", booleanAttribute], simple: ["simple", "simple", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], multiple: ["multiple", "multiple", booleanAttribute], index: ["index", "index", numberAttribute], primary: ["primary", "primary", booleanAttribute], accent: ["accent", "accent", booleanAttribute], warn: ["warn", "warn", booleanAttribute], customTextColor: ["color", "customTextColor", colorThemeAttribute], customBgColor: ["backgroundColor", "customBgColor", colorAttribute], keepCustomTextColor: ["keepCustomTextColor", "keepCustomTextColor", booleanAttribute], keepCustomBgColor: ["keepCustomBgColor", "keepCustomBgColor", booleanAttribute], customToggleUnselectedColor: ["unselectedBgColor", "customToggleUnselectedColor", colorAttribute], customToggleUnselectedTextColor: ["unselectedTextColor", "customToggleUnselectedTextColor", colorAttribute], customToggleSelectedColor: ["selectedBgColor", "customToggleSelectedColor", colorAttribute], customToggleSelectedTextColor: ["selectedTextColor", "customToggleSelectedTextColor", colorAttribute], minHeight: ["minHeight", "minHeight", sizeAttribute], fontSize: ["fontSize", "fontSize", sizeAttribute], borderRadius: ["borderRadius", "borderRadius", sizeAttribute], value: "value" }, outputs: { valueChange: "valueChange", indexChange: "indexChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "flex", "flex-row", "justify-center"]], template: function MrdButtonToggleGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } }, styles: ["[_nghost-%COMP%]{width:calc(100% - 48px);margin:8px 24px}[_nghost-%COMP%]     mrd-button[toggle-button]:first-of-type{margin:0 -16px 0 -32px!important}[_nghost-%COMP%]     mrd-button[toggle-button]:last-of-type{margin:0 -32px 0 -16px!important}.simple[_nghost-%COMP%]{width:100%;margin:8px 0}.simple[_nghost-%COMP%]     mrd-button[toggle-button]{margin:0!important}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdButtonToggleGroupComponent, [{
        type: Component,
        args: [{ selector: 'mrd-button-toggle-group', host: {
                    '[class.simple]': 'simple'
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"flex flex-row justify-center\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", styles: [":host{width:calc(100% - 48px);margin:8px 24px}:host ::ng-deep mrd-button[toggle-button]:first-of-type{margin:0 -16px 0 -32px!important}:host ::ng-deep mrd-button[toggle-button]:last-of-type{margin:0 -32px 0 -16px!important}:host(.simple){width:100%;margin:8px 0}:host(.simple) ::ng-deep mrd-button[toggle-button]{margin:0!important}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { buttons: [{
            type: ContentChildren,
            args: [MrdButtonComponent]
        }], rounded: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], simple: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], disabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], multiple: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], index: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], primary: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], accent: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], warn: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], customTextColor: [{
            type: Input,
            args: [{ alias: 'color', transform: colorThemeAttribute }]
        }], customBgColor: [{
            type: Input,
            args: [{ alias: 'backgroundColor', transform: colorAttribute }]
        }], keepCustomTextColor: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], keepCustomBgColor: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], customToggleUnselectedColor: [{
            type: Input,
            args: [{ alias: 'unselectedBgColor', transform: colorAttribute }]
        }], customToggleUnselectedTextColor: [{
            type: Input,
            args: [{ alias: 'unselectedTextColor', transform: colorAttribute }]
        }], customToggleSelectedColor: [{
            type: Input,
            args: [{ alias: 'selectedBgColor', transform: colorAttribute }]
        }], customToggleSelectedTextColor: [{
            type: Input,
            args: [{ alias: 'selectedTextColor', transform: colorAttribute }]
        }], minHeight: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], fontSize: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], borderRadius: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], value: [{
            type: Input
        }], valueChange: [{
            type: Output
        }], indexChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1idXR0b24tdG9nZ2xlL2NvbXBvbmVudHMvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1idXR0b24tdG9nZ2xlL2NvbXBvbmVudHMvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDak0sT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFFdEcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7QUFZbkUsTUFBTSxPQUFPLDZCQUE4QixTQUFRLFVBQVU7SUE4TS9DO0lBNU15QixPQUFPLENBQWdDO0lBRS9CLE9BQU8sR0FBWSxLQUFLLENBQUM7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QWEsRUFBQztZQVFTLFlBQVk7a0JBQXJELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsYUFBYSxFQUFDO1lBRWIsS0FBSztrQkFBeEIsS0FBSztZQStCVyxXQUFXO2tCQUEzQixNQUFNO1lBUVUsV0FBVztrQkFBM0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIGJvb2xlYW5BdHRyaWJ1dGUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEV2ZW50RW1pdHRlciwgSW5wdXQsIG51bWJlckF0dHJpYnV0ZSwgT3V0cHV0LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QsIFN1YnNjcmlwdGlvbkhhbmRsZXIgfSBmcm9tICdtcmQtY29yZSc7XHJcbmltcG9ydCB7IGNvbG9yQXR0cmlidXRlLCBjb2xvclRoZW1lQXR0cmlidXRlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9jb2xvci10cmFuc2Zvcm0nO1xyXG5pbXBvcnQgeyBzaXplQXR0cmlidXRlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9zaXplLXRyYW5zZm9ybSc7XHJcbmltcG9ydCB7IE1yZEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vLi4vLi4vLi4vbXJkLWJ1dHRvbi9jb21wb25lbnRzL21yZC1idXR0b24vbXJkLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNcmRDb25maWdNb2RlbCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL21vZGVsL2NvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IENvbmZpZ1V0aWwgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtYnV0dG9uLXRvZ2dsZS1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50LnNjc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLnNpbXBsZV0nOiAnc2ltcGxlJ1xyXG4gIH0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZEJ1dHRvblRvZ2dsZUdyb3VwQ29tcG9uZW50IGV4dGVuZHMgQmFzZU9iamVjdCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKE1yZEJ1dHRvbkNvbXBvbmVudCkgYnV0dG9uczogUXVlcnlMaXN0PE1yZEJ1dHRvbkNvbXBvbmVudD47XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHJvdW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGllIEJ1dHRvbkdyb3VwIGFscyBlaW5mYWNoZSBWYXJpYW50ZSBkYXJnZXN0ZWxsdCB3aXJkLlxyXG4gICAqXHJcbiAgICogRGllIEJ1dHRvbnMgc3Rvc3NlbiBvaG5lIFVlYmVybGFwcHVuZyBhbmVpbmFuZGVyLCBkZXIgc2VsZWt0aWVydGUgQnV0dG9uIHdpcmQgbnVyIGVpbmdlZmFlcmJ0XHJcbiAgICogKGtlaW5lIFZlcmdyb2Vzc2VydW5nLCBrZWluIFNjaGF0dGVuKSB1bmQgbnVyIGRpZSBBdXNzZW5lY2tlbiBkZXIgR3J1cHBlIHNpbmQgYWJnZXJ1bmRldC5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Ub2dnbGVHcm91cENvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNpbXBsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHRoaXMuYnV0dG9ucykge1xyXG4gICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChiID0+IHtcclxuICAgICAgICBiLmRpc2FibGVkID0gdmFsdWU7XHJcbiAgICAgICAgYi51cGRhdGVTdHlsZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgaW5kZXgoaW5kZXg6IG51bWJlcnxudW1iZXJbXSkge1xyXG4gICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgIUFycmF5LmlzQXJyYXkoaW5kZXgpKSB7XHJcbiAgICAgIGluZGV4ID0gW2luZGV4XTtcclxuICAgIH1cclxuICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuICAgIGlmICh0aGlzLmJ1dHRvbnMpIHtcclxuICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goKGIsIGkpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgaWYgKChpbmRleCBhcyBudW1iZXJbXSkuaW5jbHVkZXMoaSkgJiYgIWIudG9nZ2xlU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgYi50b2dnbGVTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGIudXBkYXRlU3R5bGUoKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoIShpbmRleCBhcyBudW1iZXJbXSkuaW5jbHVkZXMoaSkgJiYgYi50b2dnbGVTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBiLnRvZ2dsZVNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGIudXBkYXRlU3R5bGUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IGluZGV4ICYmICFiLnRvZ2dsZVNlbGVjdGVkKSB7XHJcbiAgICAgICAgICBiLnRvZ2dsZVNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIGIudXBkYXRlU3R5bGUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGkgIT09IGluZGV4ICYmIGIudG9nZ2xlU2VsZWN0ZWQpIHtcclxuICAgICAgICAgIGIudG9nZ2xlU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGIudXBkYXRlU3R5bGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLmluZGV4Q2hhbmdlLmVtaXQoaW5kZXgpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IGluZGV4KCk6IG51bWJlcnxudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleDogbnVtYmVyfG51bWJlcltdID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGllIEJ1dHRvbkdyb3VwIGRhcyBUaGVtZSBcInByaW1hcnlcIiBoYXQuXHJcbiAgICpcclxuICAgKiBIaWVyZHVyY2ggd2lyZCBkaWUgSGludGVyZ3J1bmRmYXJiZSBkZXMgQnV0dG9ucyBhdWYgZGllIHByaW3DpHJlIEZhcmJlIGRlcyBUaGVtZXMgZ2VzZXR6dC5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBwcmltYXJ5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRpZSBCdXR0b25Hcm91cCBkYXMgVGhlbWUgXCJhY2NlbnRcIiBoYXQuXHJcbiAgICpcclxuICAgKiBIaWVyZHVyY2ggd2lyZCBkaWUgSGludGVyZ3J1bmRmYXJiZSBkZXMgQnV0dG9ucyBhdWYgZGllIEFremVudGZhcmJlIGRlcyBUaGVtZXMgZ2VzZXR6dC5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBhY2NlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGllIEJ1dHRvbkdyb3VwIGRhcyBUaGVtZSBcIndhcm5cIiBoYXQuXHJcbiAgICpcclxuICAgKiBIaWVyZHVyY2ggd2lyZCBkaWUgSGludGVyZ3J1bmRmYXJiZSBkZXMgQnV0dG9ucyBhdWYgZGllIFdhcm5mYXJiZSBkZXMgVGhlbWVzIGdlc2V0enQuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgd2FybjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBTZXR6dCBkaWUgR3J1bmRmYXJiZSBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIERpZXNlIHdpcmQgamUgbmFjaCBTdHlsZSBkZXMgQnV0dG9ucyBhbHMgSGludGVyZ3J1bmRmYXJiZSBvZGVyIFRleHRmYXJiZSB2ZXJ3ZW5kZXQuXHJcbiAgICpcclxuICAgKiBFcyBrw7ZubmVuIEhleC0sIFJHQi0gb2RlciBSR0JBLVdlcnRlLCBzb3dpZSBcInByaW1hcnlcIiwgXCJhY2NlbnRcIiBvZGVyIFwid2FyblwiIGFuZ2VnZWJlbiB3ZXJkZW4uXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ2NvbG9yJywgdHJhbnNmb3JtOiBjb2xvclRoZW1lQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbVRleHRDb2xvcjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBTZXR6dCBkaWUgSGludGVyZ3J1bmRmYXJiZSBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIEVzIGvDtm5uZW4gSGV4LSwgUkdCLSBvZGVyIFJHQkEtV2VydGUgYW5nZWdlYmVuIHdlcmRlbi5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnYmFja2dyb3VuZENvbG9yJywgdHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21CZ0NvbG9yOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRpZSBiZW51dHplcmRlZmluaWVydGUgVGV4dGZhcmJlIG5pY2h0IGR1cmNoIGVpbiBkZWZuaWVydGVzIFRoZW1hIMO8YmVyc2NocmllYmVuIHdlcmRlbiBzb2xsLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGtlZXBDdXN0b21UZXh0Q29sb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkaWUgYmVudXR6ZXJkZWZpbmllcnRlIEhpbnRlcmdydW5kZmFyYmUgbmljaHQgZHVyY2ggZWluIGRlZmluaWVydGVzIFRoZW1hIMO8YmVyc2NocmllYmVuIHdlcmRlbiBzb2xsLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGtlZXBDdXN0b21CZ0NvbG9yOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7YWxpYXM6ICd1bnNlbGVjdGVkQmdDb2xvcicsIHRyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCh7YWxpYXM6ICd1bnNlbGVjdGVkVGV4dENvbG9yJywgdHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21Ub2dnbGVVbnNlbGVjdGVkVGV4dENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCh7YWxpYXM6ICdzZWxlY3RlZEJnQ29sb3InLCB0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbVRvZ2dsZVNlbGVjdGVkQ29sb3I6IHN0cmluZztcclxuXHJcbiAgQElucHV0KHthbGlhczogJ3NlbGVjdGVkVGV4dENvbG9yJywgdHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21Ub2dnbGVTZWxlY3RlZFRleHRDb2xvcjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBEaWUgTWluZGVzdGjDtmhlIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZyB8IG51bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgbWluSGVpZ2h0OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogRGllIFNjaHJpZnRncsO2w59lIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZyB8IG51bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgZm9udFNpemU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRGVyIFJhZGl1cyBkZXIgRWNrZW4gZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBib3JkZXJSYWRpdXM6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogYW55fGFueVtdKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IHRoaXMuX3ZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm11bHRpcGxlICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICB2YWx1ZSA9IFt2YWx1ZV07XHJcbiAgICB9XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuYnV0dG9ucykge1xyXG4gICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaCgoYjogTXJkQnV0dG9uQ29tcG9uZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgdmFsdWUuaW5jbHVkZXMoYi52YWx1ZSkpIHtcclxuICAgICAgICAgIGIudG9nZ2xlU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgYi51cGRhdGVTdHlsZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMubXVsdGlwbGUgJiYgdmFsdWUgPT09IGIudmFsdWUpIHtcclxuICAgICAgICAgIGIudG9nZ2xlU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgYi51cGRhdGVTdHlsZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBiLnRvZ2dsZVNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICBiLnVwZGF0ZVN0eWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy5fdmFsdWUpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IHZhbHVlKCk6IGFueXxhbnlbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3ZhbHVlOiBhbnl8YW55W107XHJcblxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIERhcyBLbGljay1FdmVudCBkdXJjaCBkZW4gTnV0emVyLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxFdmVudD59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgaW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXJ8bnVtYmVyW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXJ8bnVtYmVyW10+KCk7XHJcblxyXG5cclxuICAvKipcclxuICAgKiBEaWUgS29uZmlndXJhdGlvbiBkZXMgTXJkLUJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEB0eXBlIHtNcmRDb25maWdNb2RlbH1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfY29uZmlnOiBNcmRDb25maWdNb2RlbCA9IENvbmZpZ1V0aWwuZ2V0Q29uZmlnKCk7XHJcblxyXG4gIC8vIHB1YmxpYyBhY3RpdmVJbmRleDogbnVtYmVyfG51bWJlcltdID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm11bHRpcGxlICYmICFBcnJheS5pc0FycmF5KHRoaXMuaW5kZXgpKSB7XHJcbiAgICAgIHRoaXMuaW5kZXggPSBbdGhpcy5pbmRleF07XHJcbiAgICB9XHJcbiAgICBjb25zdCBhbnphaGwgPSB0aGlzLmJ1dHRvbnMubGVuZ3RoO1xyXG4gICAgY29uc3QgcmFkaXVzID0gdGhpcy5ib3JkZXJSYWRpdXMgPz8gKHRoaXMucm91bmRlZCA/ICc1MHB4JyA6ICc0cHgnKTtcclxuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKChidXR0b246IE1yZEJ1dHRvbkNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICBidXR0b24uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gdGhpcy5zaW1wbGUgPyBgJHsxMDAgLyBhbnphaGx9JWAgOiBgY2FsYygkezEwMCAvIGFuemFobH0lICsgMjhweClgO1xyXG4gICAgICBidXR0b24udG9nZ2xlU2ltcGxlID0gdGhpcy5zaW1wbGU7XHJcbiAgICAgIC8vIGJ1dHRvbi5mbGF0ID0gdHJ1ZTtcclxuICAgICAgYnV0dG9uLnByaW1hcnkgPSB0aGlzLnByaW1hcnk7XHJcbiAgICAgIGJ1dHRvbi5hY2NlbnQgPSB0aGlzLmFjY2VudDtcclxuICAgICAgYnV0dG9uLndhcm4gPSB0aGlzLndhcm47XHJcbiAgICAgIGJ1dHRvbi5jdXN0b21UZXh0Q29sb3IgPz89IHRoaXMuY3VzdG9tVGV4dENvbG9yO1xyXG4gICAgICBidXR0b24uY3VzdG9tQmdDb2xvciA/Pz0gdGhpcy5jdXN0b21CZ0NvbG9yO1xyXG4gICAgICBidXR0b24ua2VlcEN1c3RvbVRleHRDb2xvciB8fD0gdGhpcy5rZWVwQ3VzdG9tVGV4dENvbG9yO1xyXG4gICAgICBidXR0b24ua2VlcEN1c3RvbUJnQ29sb3IgfHw9IHRoaXMua2VlcEN1c3RvbUJnQ29sb3I7XHJcbiAgICAgIGJ1dHRvbi5jdXN0b21Ub2dnbGVVbnNlbGVjdGVkQ29sb3IgPz89IHRoaXMuY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZENvbG9yO1xyXG4gICAgICBidXR0b24uY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvciA/Pz0gdGhpcy5jdXN0b21Ub2dnbGVVbnNlbGVjdGVkVGV4dENvbG9yO1xyXG4gICAgICBidXR0b24uY3VzdG9tVG9nZ2xlU2VsZWN0ZWRUZXh0Q29sb3IgPz89IHRoaXMuY3VzdG9tVG9nZ2xlU2VsZWN0ZWRUZXh0Q29sb3I7XHJcbiAgICAgIGJ1dHRvbi5taW5IZWlnaHQgPz89IHRoaXMubWluSGVpZ2h0O1xyXG4gICAgICBidXR0b24uZm9udFNpemUgPz89IHRoaXMuZm9udFNpemU7XHJcblxyXG4gICAgICAvLyBJbiBkZXIgZWluZmFjaGVuIFZhcmlhbnRlIHNpbmQgbnVyIGRpZSBBdXNzZW5lY2tlbiBkZXIgR3J1cHBlIGFiZ2VydW5kZXRcclxuICAgICAgYnV0dG9uLmJvcmRlclJhZGl1cyA9ICF0aGlzLnNpbXBsZSB8fCBhbnphaGwgPT09IDEgPyByYWRpdXMgOlxyXG4gICAgICAgIGluZGV4ID09PSAwID8gYCR7cmFkaXVzfSAwIDAgJHtyYWRpdXN9YCA6XHJcbiAgICAgICAgaW5kZXggPT09IGFuemFobCAtIDEgPyBgMCAke3JhZGl1c30gJHtyYWRpdXN9IDBgIDogJzAnO1xyXG4gICAgICBcclxuICAgICAgYnV0dG9uLnRvZ2dsZVNlbGVjdGVkID0gdGhpcy5tdWx0aXBsZSA/ICh0aGlzLmluZGV4IGFzIG51bWJlcltdKS5pbmNsdWRlcyhpbmRleCkgOiB0aGlzLmluZGV4ID09PSBpbmRleDtcclxuICAgICAgXHJcbiAgICAgIGJ1dHRvbi51cGRhdGVTdHlsZSgpO1xyXG5cclxuICAgICAgdGhpcy53YXRjaChmcm9tRXZlbnQoYnV0dG9uLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NsaWNrJyksIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICB0aGlzLmluZGV4ID0gKHRoaXMuaW5kZXggYXMgbnVtYmVyW10pLmluY2x1ZGVzKGluZGV4KSA/ICh0aGlzLmluZGV4IGFzIG51bWJlcltdKS5maWx0ZXIoaSA9PiBpICE9PSBpbmRleCkgOiBbLi4uKHRoaXMuaW5kZXggYXMgbnVtYmVyW10pLCBpbmRleF07XHJcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5idXR0b25zLmZpbHRlcigoYiwgaSkgPT4gKHRoaXMuaW5kZXggYXMgbnVtYmVyW10pLmluY2x1ZGVzKGkpKS5tYXAoYiA9PiBiLnZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgdGhpcy52YWx1ZSA9IGJ1dHRvbi52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5hY3RpdmVJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIC8vIGJ1dHRvbi50b2dnbGVTZWxlY3RlZCA9IHRoaXMubXVsdGlwbGUgPyAhYnV0dG9uLnRvZ2dsZVNlbGVjdGVkIDogdHJ1ZTtcclxuICAgICAgICAvLyBpZiAoIXRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAvLyAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKChiLCBpKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmIChpICE9PSBpbmRleCkge1xyXG4gICAgICAgIC8vICAgICAgIGIudG9nZ2xlU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgICBiLnVwZGF0ZVN0eWxlKCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBidXR0b24udXBkYXRlU3R5bGUoKTtcclxuICAgICAgICAvLyB0aGlzLmluZGV4Q2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZEluZGV4KTtcclxuXHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9KSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXJcIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG4iXX0=