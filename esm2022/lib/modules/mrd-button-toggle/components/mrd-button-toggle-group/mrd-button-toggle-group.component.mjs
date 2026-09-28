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
        this.buttons.forEach((button, index) => {
            button.elementRef.nativeElement.style.width = `calc(${100 / this.buttons.length}% + 28px)`;
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
            button.borderRadius = this.borderRadius ?? this.rounded ? '50px' : '4px';
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
        } }, inputs: { rounded: ["rounded", "rounded", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], multiple: ["multiple", "multiple", booleanAttribute], index: ["index", "index", numberAttribute], primary: ["primary", "primary", booleanAttribute], accent: ["accent", "accent", booleanAttribute], warn: ["warn", "warn", booleanAttribute], customTextColor: ["color", "customTextColor", colorThemeAttribute], customBgColor: ["backgroundColor", "customBgColor", colorAttribute], keepCustomTextColor: ["keepCustomTextColor", "keepCustomTextColor", booleanAttribute], keepCustomBgColor: ["keepCustomBgColor", "keepCustomBgColor", booleanAttribute], customToggleUnselectedColor: ["unselectedBgColor", "customToggleUnselectedColor", colorAttribute], customToggleUnselectedTextColor: ["unselectedTextColor", "customToggleUnselectedTextColor", colorAttribute], customToggleSelectedColor: ["selectedBgColor", "customToggleSelectedColor", colorAttribute], customToggleSelectedTextColor: ["selectedTextColor", "customToggleSelectedTextColor", colorAttribute], minHeight: ["minHeight", "minHeight", sizeAttribute], fontSize: ["fontSize", "fontSize", sizeAttribute], borderRadius: ["borderRadius", "borderRadius", sizeAttribute], value: "value" }, outputs: { valueChange: "valueChange", indexChange: "indexChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "flex", "flex-row", "justify-center"]], template: function MrdButtonToggleGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } }, styles: ["[_nghost-%COMP%]{width:calc(100% - 48px);margin:8px 24px}[_nghost-%COMP%]     mrd-button[toggle-button]:first-of-type{margin:0 -16px 0 -32px!important}[_nghost-%COMP%]     mrd-button[toggle-button]:last-of-type{margin:0 -32px 0 -16px!important}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdButtonToggleGroupComponent, [{
        type: Component,
        args: [{ selector: 'mrd-button-toggle-group', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"flex flex-row justify-center\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", styles: [":host{width:calc(100% - 48px);margin:8px 24px}:host ::ng-deep mrd-button[toggle-button]:first-of-type{margin:0 -16px 0 -32px!important}:host ::ng-deep mrd-button[toggle-button]:last-of-type{margin:0 -32px 0 -16px!important}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { buttons: [{
            type: ContentChildren,
            args: [MrdButtonComponent]
        }], rounded: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1idXR0b24tdG9nZ2xlL2NvbXBvbmVudHMvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1idXR0b24tdG9nZ2xlL2NvbXBvbmVudHMvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDak0sT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFFdEcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7QUFTbkUsTUFBTSxPQUFPLDZCQUE4QixTQUFRLFVBQVU7SUFvTS9DO0lBbE15QixPQUFPLENBQWdDO0lBRS9CLE9BQU8sR0FBWSxLQUFLLENBQUM7SUFDdEUsSUFBaUQsUUFBUSxDQUFDLEtBQWM7UUFDdEUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QixDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDbkIsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDNEMsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUV2RSxJQUFnRCxLQUFLLENBQUMsS0FBc0I7UUFDMUUsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQjtRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFLLEtBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRTt3QkFDeEQsQ0FBQyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7d0JBQ3hCLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztxQkFDakI7eUJBQU0sSUFBSSxDQUFFLEtBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUU7d0JBQy9ELENBQUMsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO3dCQUN6QixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7cUJBQ2pCO2lCQUNGO3FCQUFNLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUU7b0JBQzNDLENBQUMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO29CQUN4QixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQ2pCO3FCQUFNLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFO29CQUMxQyxDQUFDLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztvQkFDekIsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUNqQjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUNPLGNBQWMsR0FBb0IsQ0FBQyxDQUFDO0lBRTVDOzs7Ozs7T0FNRztJQUMwQyxPQUFPLEdBQVksS0FBSyxDQUFDO0lBRXRFOzs7Ozs7T0FNRztJQUMwQyxNQUFNLEdBQVksS0FBSyxDQUFDO0lBRXJFOzs7Ozs7T0FNRztJQUMwQyxJQUFJLEdBQVksS0FBSyxDQUFDO0lBRW5FOzs7Ozs7OztPQVFHO0lBQzZELGVBQWUsQ0FBUztJQUV4Rjs7Ozs7O09BTUc7SUFDa0UsYUFBYSxDQUFTO0lBRTNGOzs7OztPQUtHO0lBQzBDLG1CQUFtQixHQUFZLEtBQUssQ0FBQztJQUNsRjs7Ozs7T0FLRztJQUMwQyxpQkFBaUIsR0FBWSxLQUFLLENBQUM7SUFFVCwyQkFBMkIsQ0FBUztJQUVsQywrQkFBK0IsQ0FBUztJQUU1Qyx5QkFBeUIsQ0FBUztJQUVoQyw2QkFBNkIsQ0FBUztJQUU3Rzs7Ozs7T0FLRztJQUN1QyxTQUFTLENBQVM7SUFDNUQ7Ozs7O09BS0c7SUFDdUMsUUFBUSxDQUFTO0lBRTNEOzs7OztPQUtHO0lBQ3VDLFlBQVksQ0FBUztJQUUvRCxJQUFvQixLQUFLLENBQUMsS0FBZ0I7UUFDeEMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN6QixPQUFPO1NBQ1I7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBcUIsRUFBRSxFQUFFO2dCQUM3QyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzVDLENBQUMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO29CQUN4QixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQ2pCO3FCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFO29CQUM5QyxDQUFDLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztvQkFDeEIsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUNqQjtxQkFBTTtvQkFDTCxDQUFDLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztvQkFDekIsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUNqQjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDTyxNQUFNLENBQVk7SUFFVCxXQUFXLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFFMUU7Ozs7O09BS0c7SUFDYyxXQUFXLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO0lBR2xHOzs7Ozs7T0FNRztJQUNLLE9BQU8sR0FBbUIsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBRXpELDJDQUEyQztJQUUzQyxZQUNZLEdBQXNCO1FBRWhDLEtBQUssRUFBRSxDQUFDO1FBRkUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7SUFHbEMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUEwQixFQUFFLEtBQWEsRUFBRSxFQUFFO1lBQ2pFLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsUUFBUSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLFdBQVcsQ0FBQztZQUMzRixzQkFBc0I7WUFDdEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM1QixNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDeEIsTUFBTSxDQUFDLGVBQWUsS0FBSyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ2hELE1BQU0sQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUM1QyxNQUFNLENBQUMsbUJBQW1CLEtBQUssSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQ3hELE1BQU0sQ0FBQyxpQkFBaUIsS0FBSyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDcEQsTUFBTSxDQUFDLDJCQUEyQixLQUFLLElBQUksQ0FBQywyQkFBMkIsQ0FBQztZQUN4RSxNQUFNLENBQUMsK0JBQStCLEtBQUssSUFBSSxDQUFDLCtCQUErQixDQUFDO1lBQ2hGLE1BQU0sQ0FBQyw2QkFBNkIsS0FBSyxJQUFJLENBQUMsNkJBQTZCLENBQUM7WUFDNUUsTUFBTSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUVsQyxNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFFekUsTUFBTSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMsS0FBa0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDO1lBRXhHLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUVyQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsRUFBRSxJQUFJLG1CQUFtQixDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUU7Z0JBQ3ZHLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUksSUFBSSxDQUFDLEtBQWtCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMsS0FBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBSSxJQUFJLENBQUMsS0FBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDakosSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFFLElBQUksQ0FBQyxLQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDcEc7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztpQkFDM0I7Z0JBQ0QsNEJBQTRCO2dCQUM1Qix5RUFBeUU7Z0JBQ3pFLHdCQUF3QjtnQkFDeEIscUNBQXFDO2dCQUNyQyx5QkFBeUI7Z0JBQ3pCLGtDQUFrQztnQkFDbEMseUJBQXlCO2dCQUN6QixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsSUFBSTtnQkFDSix3QkFBd0I7Z0JBQ3hCLDZDQUE2QztnQkFFN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7MEdBOVBVLDZCQUE2Qjs0RkFBN0IsNkJBQTZCO3dDQUV2QixrQkFBa0I7Ozs7dURBRWhCLGdCQUFnQixzQ0FDaEIsZ0JBQWdCLHNDQVNoQixnQkFBZ0IsNkJBRWhCLGVBQWUsbUNBd0NmLGdCQUFnQixnQ0FTaEIsZ0JBQWdCLDBCQVNoQixnQkFBZ0IsaURBV0EsbUJBQW1CLHVEQVNULGNBQWMsdUVBUXhDLGdCQUFnQixpRUFPaEIsZ0JBQWdCLHFGQUVZLGNBQWMsK0ZBRVosY0FBYywrRUFFbEIsY0FBYyx5RkFFWixjQUFjLHlDQVExQyxhQUFhLHNDQU9iLGFBQWEsa0RBUWIsYUFBYTs7WUM1SmxDLDhCQUEwQztZQUN4QyxrQkFBeUI7WUFDM0IsaUJBQU07Ozt1RkRjTyw2QkFBNkI7Y0FOekMsU0FBUzsyQkFDRSx5QkFBeUIsbUJBR2xCLHVCQUF1QixDQUFDLE1BQU07b0VBSVYsT0FBTztrQkFBM0MsZUFBZTttQkFBQyxrQkFBa0I7WUFFVSxPQUFPO2tCQUFuRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBQ2EsUUFBUTtrQkFBeEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQVNTLFFBQVE7a0JBQXBELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFWSxLQUFLO2tCQUFwRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBQztZQXdDVSxPQUFPO2tCQUFuRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBU1MsTUFBTTtrQkFBbEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQVNTLElBQUk7a0JBQWhELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFXNEIsZUFBZTtrQkFBOUUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFDO1lBU2MsYUFBYTtrQkFBakYsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFDO1lBUWYsbUJBQW1CO2tCQUEvRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBT1MsaUJBQWlCO2tCQUE3RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBRW1DLDJCQUEyQjtrQkFBakcsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFDO1lBRVcsK0JBQStCO2tCQUF2RyxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLHFCQUFxQixFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUM7WUFFSyx5QkFBeUI7a0JBQTdGLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBQztZQUVXLDZCQUE2QjtrQkFBbkcsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFDO1lBUXBCLFNBQVM7a0JBQWxELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsYUFBYSxFQUFDO1lBT1MsUUFBUTtrQkFBakQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUM7WUFRUyxZQUFZO2tCQUFyRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGFBQWEsRUFBQztZQUViLEtBQUs7a0JBQXhCLEtBQUs7WUErQlcsV0FBVztrQkFBM0IsTUFBTTtZQVFVLFdBQVc7a0JBQTNCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBib29sZWFuQXR0cmlidXRlLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFdmVudEVtaXR0ZXIsIElucHV0LCBudW1iZXJBdHRyaWJ1dGUsIE91dHB1dCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0LCBTdWJzY3JpcHRpb25IYW5kbGVyIH0gZnJvbSAnbXJkLWNvcmUnO1xyXG5pbXBvcnQgeyBjb2xvckF0dHJpYnV0ZSwgY29sb3JUaGVtZUF0dHJpYnV0ZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvY29sb3ItdHJhbnNmb3JtJztcclxuaW1wb3J0IHsgc2l6ZUF0dHJpYnV0ZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvc2l6ZS10cmFuc2Zvcm0nO1xyXG5pbXBvcnQgeyBNcmRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLy4uLy4uLy4uL21yZC1idXR0b24vY29tcG9uZW50cy9tcmQtYnV0dG9uL21yZC1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXJkQ29uZmlnTW9kZWwgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbC9jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgeyBDb25maWdVdGlsIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb25maWcudXRpbCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1idXR0b24tdG9nZ2xlLWdyb3VwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC1idXR0b24tdG9nZ2xlLWdyb3VwLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZEJ1dHRvblRvZ2dsZUdyb3VwQ29tcG9uZW50IGV4dGVuZHMgQmFzZU9iamVjdCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKE1yZEJ1dHRvbkNvbXBvbmVudCkgYnV0dG9uczogUXVlcnlMaXN0PE1yZEJ1dHRvbkNvbXBvbmVudD47XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHJvdW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0aGlzLmJ1dHRvbnMpIHtcclxuICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goYiA9PiB7XHJcbiAgICAgICAgYi5kaXNhYmxlZCA9IHZhbHVlO1xyXG4gICAgICAgIGIudXBkYXRlU3R5bGUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIG11bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IGluZGV4KGluZGV4OiBudW1iZXJ8bnVtYmVyW10pIHtcclxuICAgIGlmICh0aGlzLm11bHRpcGxlICYmICFBcnJheS5pc0FycmF5KGluZGV4KSkge1xyXG4gICAgICBpbmRleCA9IFtpbmRleF07XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gaW5kZXg7XHJcbiAgICBpZiAodGhpcy5idXR0b25zKSB7XHJcbiAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKChiLCBpKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgIGlmICgoaW5kZXggYXMgbnVtYmVyW10pLmluY2x1ZGVzKGkpICYmICFiLnRvZ2dsZVNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGIudG9nZ2xlU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBiLnVwZGF0ZVN0eWxlKCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCEoaW5kZXggYXMgbnVtYmVyW10pLmluY2x1ZGVzKGkpICYmIGIudG9nZ2xlU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgYi50b2dnbGVTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBiLnVwZGF0ZVN0eWxlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSBpbmRleCAmJiAhYi50b2dnbGVTZWxlY3RlZCkge1xyXG4gICAgICAgICAgYi50b2dnbGVTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICBiLnVwZGF0ZVN0eWxlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpICE9PSBpbmRleCAmJiBiLnRvZ2dsZVNlbGVjdGVkKSB7XHJcbiAgICAgICAgICBiLnRvZ2dsZVNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICBiLnVwZGF0ZVN0eWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5pbmRleENoYW5nZS5lbWl0KGluZGV4KTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbiAgcHVibGljIGdldCBpbmRleCgpOiBudW1iZXJ8bnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3NlbGVjdGVkSW5kZXg6IG51bWJlcnxudW1iZXJbXSA9IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRpZSBCdXR0b25Hcm91cCBkYXMgVGhlbWUgXCJwcmltYXJ5XCIgaGF0LlxyXG4gICAqXHJcbiAgICogSGllcmR1cmNoIHdpcmQgZGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIEJ1dHRvbnMgYXVmIGRpZSBwcmltw6RyZSBGYXJiZSBkZXMgVGhlbWVzIGdlc2V0enQuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcHJpbWFyeTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkaWUgQnV0dG9uR3JvdXAgZGFzIFRoZW1lIFwiYWNjZW50XCIgaGF0LlxyXG4gICAqXHJcbiAgICogSGllcmR1cmNoIHdpcmQgZGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIEJ1dHRvbnMgYXVmIGRpZSBBa3plbnRmYXJiZSBkZXMgVGhlbWVzIGdlc2V0enQuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgYWNjZW50OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRpZSBCdXR0b25Hcm91cCBkYXMgVGhlbWUgXCJ3YXJuXCIgaGF0LlxyXG4gICAqXHJcbiAgICogSGllcmR1cmNoIHdpcmQgZGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIEJ1dHRvbnMgYXVmIGRpZSBXYXJuZmFyYmUgZGVzIFRoZW1lcyBnZXNldHp0LlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHdhcm46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0enQgZGllIEdydW5kZmFyYmUgZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBEaWVzZSB3aXJkIGplIG5hY2ggU3R5bGUgZGVzIEJ1dHRvbnMgYWxzIEhpbnRlcmdydW5kZmFyYmUgb2RlciBUZXh0ZmFyYmUgdmVyd2VuZGV0LlxyXG4gICAqXHJcbiAgICogRXMga8O2bm5lbiBIZXgtLCBSR0ItIG9kZXIgUkdCQS1XZXJ0ZSwgc293aWUgXCJwcmltYXJ5XCIsIFwiYWNjZW50XCIgb2RlciBcIndhcm5cIiBhbmdlZ2ViZW4gd2VyZGVuLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdjb2xvcicsIHRyYW5zZm9ybTogY29sb3JUaGVtZUF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21UZXh0Q29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0enQgZGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBFcyBrw7ZubmVuIEhleC0sIFJHQi0gb2RlciBSR0JBLVdlcnRlIGFuZ2VnZWJlbiB3ZXJkZW4uXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ2JhY2tncm91bmRDb2xvcicsIHRyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tQmdDb2xvcjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkaWUgYmVudXR6ZXJkZWZpbmllcnRlIFRleHRmYXJiZSBuaWNodCBkdXJjaCBlaW4gZGVmbmllcnRlcyBUaGVtYSDDvGJlcnNjaHJpZWJlbiB3ZXJkZW4gc29sbC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBrZWVwQ3VzdG9tVGV4dENvbG9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGllIGJlbnV0emVyZGVmaW5pZXJ0ZSBIaW50ZXJncnVuZGZhcmJlIG5pY2h0IGR1cmNoIGVpbiBkZWZpbmllcnRlcyBUaGVtYSDDvGJlcnNjaHJpZWJlbiB3ZXJkZW4gc29sbC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBrZWVwQ3VzdG9tQmdDb2xvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoe2FsaWFzOiAndW5zZWxlY3RlZEJnQ29sb3InLCB0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe2FsaWFzOiAndW5zZWxlY3RlZFRleHRDb2xvcicsIHRyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe2FsaWFzOiAnc2VsZWN0ZWRCZ0NvbG9yJywgdHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21Ub2dnbGVTZWxlY3RlZENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCh7YWxpYXM6ICdzZWxlY3RlZFRleHRDb2xvcicsIHRyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tVG9nZ2xlU2VsZWN0ZWRUZXh0Q29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRGllIE1pbmRlc3Row7ZoZSBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIG1pbkhlaWdodDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIERpZSBTY2hyaWZ0Z3LDtsOfZSBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIGZvbnRTaXplOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlciBSYWRpdXMgZGVyIEVja2VuIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZyB8IG51bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgYm9yZGVyUmFkaXVzOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IGFueXxhbnlbXSkge1xyXG4gICAgaWYgKHZhbHVlID09PSB0aGlzLl92YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgdmFsdWUgPSBbdmFsdWVdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLmJ1dHRvbnMpIHtcclxuICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goKGI6IE1yZEJ1dHRvbkNvbXBvbmVudCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHZhbHVlLmluY2x1ZGVzKGIudmFsdWUpKSB7XHJcbiAgICAgICAgICBiLnRvZ2dsZVNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIGIudXBkYXRlU3R5bGUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm11bHRpcGxlICYmIHZhbHVlID09PSBiLnZhbHVlKSB7XHJcbiAgICAgICAgICBiLnRvZ2dsZVNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIGIudXBkYXRlU3R5bGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYi50b2dnbGVTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgYi51cGRhdGVTdHlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMuX3ZhbHVlKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbiAgcHVibGljIGdldCB2YWx1ZSgpOiBhbnl8YW55W10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuICBwcml2YXRlIF92YWx1ZTogYW55fGFueVtdO1xyXG5cclxuICBAT3V0cHV0KCkgcHVibGljIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKipcclxuICAgKiBEYXMgS2xpY2stRXZlbnQgZHVyY2ggZGVuIE51dHplci5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8RXZlbnQ+fVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBAT3V0cHV0KCkgcHVibGljIGluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyfG51bWJlcltdPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyfG51bWJlcltdPigpO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRGllIEtvbmZpZ3VyYXRpb24gZGVzIE1yZC1CdXR0b25zLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAdHlwZSB7TXJkQ29uZmlnTW9kZWx9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2NvbmZpZzogTXJkQ29uZmlnTW9kZWwgPSBDb25maWdVdGlsLmdldENvbmZpZygpO1xyXG5cclxuICAvLyBwdWJsaWMgYWN0aXZlSW5kZXg6IG51bWJlcnxudW1iZXJbXSA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiAhQXJyYXkuaXNBcnJheSh0aGlzLmluZGV4KSkge1xyXG4gICAgICB0aGlzLmluZGV4ID0gW3RoaXMuaW5kZXhdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5idXR0b25zLmZvckVhY2goKGJ1dHRvbjogTXJkQnV0dG9uQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGJ1dHRvbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBgY2FsYygkezEwMCAvIHRoaXMuYnV0dG9ucy5sZW5ndGh9JSArIDI4cHgpYDtcclxuICAgICAgLy8gYnV0dG9uLmZsYXQgPSB0cnVlO1xyXG4gICAgICBidXR0b24ucHJpbWFyeSA9IHRoaXMucHJpbWFyeTtcclxuICAgICAgYnV0dG9uLmFjY2VudCA9IHRoaXMuYWNjZW50O1xyXG4gICAgICBidXR0b24ud2FybiA9IHRoaXMud2FybjtcclxuICAgICAgYnV0dG9uLmN1c3RvbVRleHRDb2xvciA/Pz0gdGhpcy5jdXN0b21UZXh0Q29sb3I7XHJcbiAgICAgIGJ1dHRvbi5jdXN0b21CZ0NvbG9yID8/PSB0aGlzLmN1c3RvbUJnQ29sb3I7XHJcbiAgICAgIGJ1dHRvbi5rZWVwQ3VzdG9tVGV4dENvbG9yIHx8PSB0aGlzLmtlZXBDdXN0b21UZXh0Q29sb3I7XHJcbiAgICAgIGJ1dHRvbi5rZWVwQ3VzdG9tQmdDb2xvciB8fD0gdGhpcy5rZWVwQ3VzdG9tQmdDb2xvcjtcclxuICAgICAgYnV0dG9uLmN1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRDb2xvciA/Pz0gdGhpcy5jdXN0b21Ub2dnbGVVbnNlbGVjdGVkQ29sb3I7XHJcbiAgICAgIGJ1dHRvbi5jdXN0b21Ub2dnbGVVbnNlbGVjdGVkVGV4dENvbG9yID8/PSB0aGlzLmN1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRUZXh0Q29sb3I7XHJcbiAgICAgIGJ1dHRvbi5jdXN0b21Ub2dnbGVTZWxlY3RlZFRleHRDb2xvciA/Pz0gdGhpcy5jdXN0b21Ub2dnbGVTZWxlY3RlZFRleHRDb2xvcjtcclxuICAgICAgYnV0dG9uLm1pbkhlaWdodCA/Pz0gdGhpcy5taW5IZWlnaHQ7XHJcbiAgICAgIGJ1dHRvbi5mb250U2l6ZSA/Pz0gdGhpcy5mb250U2l6ZTtcclxuXHJcbiAgICAgIGJ1dHRvbi5ib3JkZXJSYWRpdXMgPSB0aGlzLmJvcmRlclJhZGl1cyA/PyB0aGlzLnJvdW5kZWQgPyAnNTBweCcgOiAnNHB4JztcclxuICAgICAgXHJcbiAgICAgIGJ1dHRvbi50b2dnbGVTZWxlY3RlZCA9IHRoaXMubXVsdGlwbGUgPyAodGhpcy5pbmRleCBhcyBudW1iZXJbXSkuaW5jbHVkZXMoaW5kZXgpIDogdGhpcy5pbmRleCA9PT0gaW5kZXg7XHJcbiAgICAgIFxyXG4gICAgICBidXR0b24udXBkYXRlU3R5bGUoKTtcclxuXHJcbiAgICAgIHRoaXMud2F0Y2goZnJvbUV2ZW50KGJ1dHRvbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjbGljaycpLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoZXZlbnQ6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgdGhpcy5pbmRleCA9ICh0aGlzLmluZGV4IGFzIG51bWJlcltdKS5pbmNsdWRlcyhpbmRleCkgPyAodGhpcy5pbmRleCBhcyBudW1iZXJbXSkuZmlsdGVyKGkgPT4gaSAhPT0gaW5kZXgpIDogWy4uLih0aGlzLmluZGV4IGFzIG51bWJlcltdKSwgaW5kZXhdO1xyXG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuYnV0dG9ucy5maWx0ZXIoKGIsIGkpID0+ICh0aGlzLmluZGV4IGFzIG51bWJlcltdKS5pbmNsdWRlcyhpKSkubWFwKGIgPT4gYi52YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgICAgICAgIHRoaXMudmFsdWUgPSBidXR0b24udmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuYWN0aXZlSW5kZXggPSBpbmRleDtcclxuICAgICAgICAvLyBidXR0b24udG9nZ2xlU2VsZWN0ZWQgPSB0aGlzLm11bHRpcGxlID8gIWJ1dHRvbi50b2dnbGVTZWxlY3RlZCA6IHRydWU7XHJcbiAgICAgICAgLy8gaWYgKCF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgLy8gICB0aGlzLmJ1dHRvbnMuZm9yRWFjaCgoYiwgaSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAoaSAhPT0gaW5kZXgpIHtcclxuICAgICAgICAvLyAgICAgICBiLnRvZ2dsZVNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgICAgYi51cGRhdGVTdHlsZSgpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICB9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gYnV0dG9uLnVwZGF0ZVN0eWxlKCk7XHJcbiAgICAgICAgLy8gdGhpcy5pbmRleENoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRJbmRleCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfSkpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuIl19