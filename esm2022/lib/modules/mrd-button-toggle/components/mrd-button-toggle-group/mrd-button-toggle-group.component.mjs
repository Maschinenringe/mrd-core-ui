import { booleanAttribute, ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, numberAttribute, Output } from '@angular/core';
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
            this.watch(button.click.asObservable(), new SubscriptionHandler((event) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1idXR0b24tdG9nZ2xlL2NvbXBvbmVudHMvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1idXR0b24tdG9nZ2xlL2NvbXBvbmVudHMvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDak0sT0FBTyxFQUFFLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBRXRHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7O0FBU25FLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxVQUFVO0lBb00vQztJQWxNeUIsT0FBTyxDQUFnQztJQUUvQixPQUFPLEdBQVksS0FBSyxDQUFDO0lBQ3RFLElBQWlELFFBQVEsQ0FBQyxLQUFjO1FBQ3RFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQzRDLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFFdkUsSUFBZ0QsS0FBSyxDQUFDLEtBQXNCO1FBQzFFLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakI7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDakIsSUFBSyxLQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUU7d0JBQ3hELENBQUMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO3dCQUN4QixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7cUJBQ2pCO3lCQUFNLElBQUksQ0FBRSxLQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFO3dCQUMvRCxDQUFDLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQzt3QkFDekIsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO3FCQUNqQjtpQkFDRjtxQkFBTSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFO29CQUMzQyxDQUFDLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztvQkFDeEIsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUNqQjtxQkFBTSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLGNBQWMsRUFBRTtvQkFDMUMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDakI7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFDTyxjQUFjLEdBQW9CLENBQUMsQ0FBQztJQUU1Qzs7Ozs7O09BTUc7SUFDMEMsT0FBTyxHQUFZLEtBQUssQ0FBQztJQUV0RTs7Ozs7O09BTUc7SUFDMEMsTUFBTSxHQUFZLEtBQUssQ0FBQztJQUVyRTs7Ozs7O09BTUc7SUFDMEMsSUFBSSxHQUFZLEtBQUssQ0FBQztJQUVuRTs7Ozs7Ozs7T0FRRztJQUM2RCxlQUFlLENBQVM7SUFFeEY7Ozs7OztPQU1HO0lBQ2tFLGFBQWEsQ0FBUztJQUUzRjs7Ozs7T0FLRztJQUMwQyxtQkFBbUIsR0FBWSxLQUFLLENBQUM7SUFDbEY7Ozs7O09BS0c7SUFDMEMsaUJBQWlCLEdBQVksS0FBSyxDQUFDO0lBRVQsMkJBQTJCLENBQVM7SUFFbEMsK0JBQStCLENBQVM7SUFFNUMseUJBQXlCLENBQVM7SUFFaEMsNkJBQTZCLENBQVM7SUFFN0c7Ozs7O09BS0c7SUFDdUMsU0FBUyxDQUFTO0lBQzVEOzs7OztPQUtHO0lBQ3VDLFFBQVEsQ0FBUztJQUUzRDs7Ozs7T0FLRztJQUN1QyxZQUFZLENBQVM7SUFFL0QsSUFBb0IsS0FBSyxDQUFDLEtBQWdCO1FBQ3hDLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDekIsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQXFCLEVBQUUsRUFBRTtnQkFDN0MsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUM1QyxDQUFDLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztvQkFDeEIsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUNqQjtxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRTtvQkFDOUMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBQ3hCLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDakI7cUJBQU07b0JBQ0wsQ0FBQyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDakI7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ08sTUFBTSxDQUFZO0lBRVQsV0FBVyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRTFFOzs7OztPQUtHO0lBQ2MsV0FBVyxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztJQUdsRzs7Ozs7O09BTUc7SUFDSyxPQUFPLEdBQW1CLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUV6RCwyQ0FBMkM7SUFFM0MsWUFDWSxHQUFzQjtRQUVoQyxLQUFLLEVBQUUsQ0FBQztRQUZFLFFBQUcsR0FBSCxHQUFHLENBQW1CO0lBR2xDLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBMEIsRUFBRSxLQUFhLEVBQUUsRUFBRTtZQUNqRSxNQUFNLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFFBQVEsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxXQUFXLENBQUM7WUFDM0Ysc0JBQXNCO1lBQ3RCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM5QixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDNUIsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxlQUFlLEtBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUNoRCxNQUFNLENBQUMsYUFBYSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDNUMsTUFBTSxDQUFDLG1CQUFtQixLQUFLLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztZQUN4RCxNQUFNLENBQUMsaUJBQWlCLEtBQUssSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ3BELE1BQU0sQ0FBQywyQkFBMkIsS0FBSyxJQUFJLENBQUMsMkJBQTJCLENBQUM7WUFDeEUsTUFBTSxDQUFDLCtCQUErQixLQUFLLElBQUksQ0FBQywrQkFBK0IsQ0FBQztZQUNoRixNQUFNLENBQUMsNkJBQTZCLEtBQUssSUFBSSxDQUFDLDZCQUE2QixDQUFDO1lBQzVFLE1BQU0sQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNwQyxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7WUFFbEMsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBRXpFLE1BQU0sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUUsSUFBSSxDQUFDLEtBQWtCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQztZQUV4RyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksbUJBQW1CLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRTtnQkFDL0UsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDakIsSUFBSSxDQUFDLEtBQUssR0FBSSxJQUFJLENBQUMsS0FBa0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxLQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFJLElBQUksQ0FBQyxLQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNqSixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUUsSUFBSSxDQUFDLEtBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNwRztxQkFBTTtvQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO2lCQUMzQjtnQkFDRCw0QkFBNEI7Z0JBQzVCLHlFQUF5RTtnQkFDekUsd0JBQXdCO2dCQUN4QixxQ0FBcUM7Z0JBQ3JDLHlCQUF5QjtnQkFDekIsa0NBQWtDO2dCQUNsQyx5QkFBeUI7Z0JBQ3pCLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixJQUFJO2dCQUNKLHdCQUF3QjtnQkFDeEIsNkNBQTZDO2dCQUU3QyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzswR0E5UFUsNkJBQTZCOzRGQUE3Qiw2QkFBNkI7d0NBRXZCLGtCQUFrQjs7Ozt1REFFaEIsZ0JBQWdCLHNDQUNoQixnQkFBZ0Isc0NBU2hCLGdCQUFnQiw2QkFFaEIsZUFBZSxtQ0F3Q2YsZ0JBQWdCLGdDQVNoQixnQkFBZ0IsMEJBU2hCLGdCQUFnQixpREFXQSxtQkFBbUIsdURBU1QsY0FBYyx1RUFReEMsZ0JBQWdCLGlFQU9oQixnQkFBZ0IscUZBRVksY0FBYywrRkFFWixjQUFjLCtFQUVsQixjQUFjLHlGQUVaLGNBQWMseUNBUTFDLGFBQWEsc0NBT2IsYUFBYSxrREFRYixhQUFhOztZQzNKbEMsOEJBQTBDO1lBQ3hDLGtCQUF5QjtZQUMzQixpQkFBTTs7O3VGRGFPLDZCQUE2QjtjQU56QyxTQUFTOzJCQUNFLHlCQUF5QixtQkFHbEIsdUJBQXVCLENBQUMsTUFBTTtvRUFJVixPQUFPO2tCQUEzQyxlQUFlO21CQUFDLGtCQUFrQjtZQUVVLE9BQU87a0JBQW5ELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFDYSxRQUFRO2tCQUF4RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBU1MsUUFBUTtrQkFBcEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUVZLEtBQUs7a0JBQXBELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFDO1lBd0NVLE9BQU87a0JBQW5ELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFTUyxNQUFNO2tCQUFsRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBU1MsSUFBSTtrQkFBaEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQVc0QixlQUFlO2tCQUE5RSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUM7WUFTYyxhQUFhO2tCQUFqRixLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUM7WUFRZixtQkFBbUI7a0JBQS9ELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFPUyxpQkFBaUI7a0JBQTdELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFbUMsMkJBQTJCO2tCQUFqRyxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUM7WUFFVywrQkFBK0I7a0JBQXZHLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBQztZQUVLLHlCQUF5QjtrQkFBN0YsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFDO1lBRVcsNkJBQTZCO2tCQUFuRyxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUM7WUFRcEIsU0FBUztrQkFBbEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUM7WUFPUyxRQUFRO2tCQUFqRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGFBQWEsRUFBQztZQVFTLFlBQVk7a0JBQXJELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsYUFBYSxFQUFDO1lBRWIsS0FBSztrQkFBeEIsS0FBSztZQStCVyxXQUFXO2tCQUEzQixNQUFNO1lBUVUsV0FBVztrQkFBM0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIGJvb2xlYW5BdHRyaWJ1dGUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEV2ZW50RW1pdHRlciwgSW5wdXQsIG51bWJlckF0dHJpYnV0ZSwgT3V0cHV0LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCwgU3Vic2NyaXB0aW9uSGFuZGxlciB9IGZyb20gJ21yZC1jb3JlJztcclxuaW1wb3J0IHsgY29sb3JBdHRyaWJ1dGUsIGNvbG9yVGhlbWVBdHRyaWJ1dGUgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi90cmFuc2Zvcm1zL2NvbG9yLXRyYW5zZm9ybSc7XHJcbmltcG9ydCB7IHNpemVBdHRyaWJ1dGUgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi90cmFuc2Zvcm1zL3NpemUtdHJhbnNmb3JtJztcclxuaW1wb3J0IHsgTXJkQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi8uLi8uLi8uLi9tcmQtYnV0dG9uL2NvbXBvbmVudHMvbXJkLWJ1dHRvbi9tcmQtYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1yZENvbmZpZ01vZGVsIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vbW9kZWwvY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgQ29uZmlnVXRpbCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29uZmlnLnV0aWwnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtcmQtYnV0dG9uLXRvZ2dsZS1ncm91cCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1idXR0b24tdG9nZ2xlLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtYnV0dG9uLXRvZ2dsZS1ncm91cC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmRCdXR0b25Ub2dnbGVHcm91cENvbXBvbmVudCBleHRlbmRzIEJhc2VPYmplY3QgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihNcmRCdXR0b25Db21wb25lbnQpIGJ1dHRvbnM6IFF1ZXJ5TGlzdDxNcmRCdXR0b25Db21wb25lbnQ+O1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyByb3VuZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5idXR0b25zKSB7XHJcbiAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGIgPT4ge1xyXG4gICAgICAgIGIuZGlzYWJsZWQgPSB2YWx1ZTtcclxuICAgICAgICBiLnVwZGF0ZVN0eWxlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBtdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgcHVibGljIHNldCBpbmRleChpbmRleDogbnVtYmVyfG51bWJlcltdKSB7XHJcbiAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiAhQXJyYXkuaXNBcnJheShpbmRleCkpIHtcclxuICAgICAgaW5kZXggPSBbaW5kZXhdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xyXG4gICAgaWYgKHRoaXMuYnV0dG9ucykge1xyXG4gICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaCgoYiwgaSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICBpZiAoKGluZGV4IGFzIG51bWJlcltdKS5pbmNsdWRlcyhpKSAmJiAhYi50b2dnbGVTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBiLnRvZ2dsZVNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgYi51cGRhdGVTdHlsZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICghKGluZGV4IGFzIG51bWJlcltdKS5pbmNsdWRlcyhpKSAmJiBiLnRvZ2dsZVNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGIudG9nZ2xlU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYi51cGRhdGVTdHlsZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gaW5kZXggJiYgIWIudG9nZ2xlU2VsZWN0ZWQpIHtcclxuICAgICAgICAgIGIudG9nZ2xlU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgYi51cGRhdGVTdHlsZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaSAhPT0gaW5kZXggJiYgYi50b2dnbGVTZWxlY3RlZCkge1xyXG4gICAgICAgICAgYi50b2dnbGVTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgYi51cGRhdGVTdHlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuaW5kZXhDaGFuZ2UuZW1pdChpbmRleCk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgaW5kZXgoKTogbnVtYmVyfG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xyXG4gIH1cclxuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBudW1iZXJ8bnVtYmVyW10gPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkaWUgQnV0dG9uR3JvdXAgZGFzIFRoZW1lIFwicHJpbWFyeVwiIGhhdC5cclxuICAgKlxyXG4gICAqIEhpZXJkdXJjaCB3aXJkIGRpZSBIaW50ZXJncnVuZGZhcmJlIGRlcyBCdXR0b25zIGF1ZiBkaWUgcHJpbcOkcmUgRmFyYmUgZGVzIFRoZW1lcyBnZXNldHp0LlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHByaW1hcnk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGllIEJ1dHRvbkdyb3VwIGRhcyBUaGVtZSBcImFjY2VudFwiIGhhdC5cclxuICAgKlxyXG4gICAqIEhpZXJkdXJjaCB3aXJkIGRpZSBIaW50ZXJncnVuZGZhcmJlIGRlcyBCdXR0b25zIGF1ZiBkaWUgQWt6ZW50ZmFyYmUgZGVzIFRoZW1lcyBnZXNldHp0LlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGFjY2VudDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkaWUgQnV0dG9uR3JvdXAgZGFzIFRoZW1lIFwid2FyblwiIGhhdC5cclxuICAgKlxyXG4gICAqIEhpZXJkdXJjaCB3aXJkIGRpZSBIaW50ZXJncnVuZGZhcmJlIGRlcyBCdXR0b25zIGF1ZiBkaWUgV2FybmZhcmJlIGRlcyBUaGVtZXMgZ2VzZXR6dC5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyB3YXJuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHp0IGRpZSBHcnVuZGZhcmJlIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogRGllc2Ugd2lyZCBqZSBuYWNoIFN0eWxlIGRlcyBCdXR0b25zIGFscyBIaW50ZXJncnVuZGZhcmJlIG9kZXIgVGV4dGZhcmJlIHZlcndlbmRldC5cclxuICAgKlxyXG4gICAqIEVzIGvDtm5uZW4gSGV4LSwgUkdCLSBvZGVyIFJHQkEtV2VydGUsIHNvd2llIFwicHJpbWFyeVwiLCBcImFjY2VudFwiIG9kZXIgXCJ3YXJuXCIgYW5nZWdlYmVuIHdlcmRlbi5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnY29sb3InLCB0cmFuc2Zvcm06IGNvbG9yVGhlbWVBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tVGV4dENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHp0IGRpZSBIaW50ZXJncnVuZGZhcmJlIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogRXMga8O2bm5lbiBIZXgtLCBSR0ItIG9kZXIgUkdCQS1XZXJ0ZSBhbmdlZ2ViZW4gd2VyZGVuLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdiYWNrZ3JvdW5kQ29sb3InLCB0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbUJnQ29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGllIGJlbnV0emVyZGVmaW5pZXJ0ZSBUZXh0ZmFyYmUgbmljaHQgZHVyY2ggZWluIGRlZm5pZXJ0ZXMgVGhlbWEgw7xiZXJzY2hyaWViZW4gd2VyZGVuIHNvbGwuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMga2VlcEN1c3RvbVRleHRDb2xvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRpZSBiZW51dHplcmRlZmluaWVydGUgSGludGVyZ3J1bmRmYXJiZSBuaWNodCBkdXJjaCBlaW4gZGVmaW5pZXJ0ZXMgVGhlbWEgw7xiZXJzY2hyaWViZW4gd2VyZGVuIHNvbGwuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMga2VlcEN1c3RvbUJnQ29sb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHthbGlhczogJ3Vuc2VsZWN0ZWRCZ0NvbG9yJywgdHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21Ub2dnbGVVbnNlbGVjdGVkQ29sb3I6IHN0cmluZztcclxuXHJcbiAgQElucHV0KHthbGlhczogJ3Vuc2VsZWN0ZWRUZXh0Q29sb3InLCB0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRUZXh0Q29sb3I6IHN0cmluZztcclxuXHJcbiAgQElucHV0KHthbGlhczogJ3NlbGVjdGVkQmdDb2xvcicsIHRyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tVG9nZ2xlU2VsZWN0ZWRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe2FsaWFzOiAnc2VsZWN0ZWRUZXh0Q29sb3InLCB0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbVRvZ2dsZVNlbGVjdGVkVGV4dENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIERpZSBNaW5kZXN0aMO2aGUgZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBtaW5IZWlnaHQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBEaWUgU2NocmlmdGdyw7bDn2UgZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBmb250U2l6ZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBEZXIgUmFkaXVzIGRlciBFY2tlbiBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIGJvcmRlclJhZGl1czogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBhbnl8YW55W10pIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5fdmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgIHZhbHVlID0gW3ZhbHVlXTtcclxuICAgIH1cclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICBpZiAodGhpcy5idXR0b25zKSB7XHJcbiAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKChiOiBNcmRCdXR0b25Db21wb25lbnQpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiB2YWx1ZS5pbmNsdWRlcyhiLnZhbHVlKSkge1xyXG4gICAgICAgICAgYi50b2dnbGVTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICBiLnVwZGF0ZVN0eWxlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5tdWx0aXBsZSAmJiB2YWx1ZSA9PT0gYi52YWx1ZSkge1xyXG4gICAgICAgICAgYi50b2dnbGVTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICBiLnVwZGF0ZVN0eWxlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGIudG9nZ2xlU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGIudXBkYXRlU3R5bGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLl92YWx1ZSk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgdmFsdWUoKTogYW55fGFueVtdIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfdmFsdWU6IGFueXxhbnlbXTtcclxuXHJcbiAgQE91dHB1dCgpIHB1YmxpYyB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGFzIEtsaWNrLUV2ZW50IGR1cmNoIGRlbiBOdXR6ZXIuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPEV2ZW50Pn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBpbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcnxudW1iZXJbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcnxudW1iZXJbXT4oKTtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIERpZSBLb25maWd1cmF0aW9uIGRlcyBNcmQtQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHR5cGUge01yZENvbmZpZ01vZGVsfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBwcml2YXRlIF9jb25maWc6IE1yZENvbmZpZ01vZGVsID0gQ29uZmlnVXRpbC5nZXRDb25maWcoKTtcclxuXHJcbiAgLy8gcHVibGljIGFjdGl2ZUluZGV4OiBudW1iZXJ8bnVtYmVyW10gPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgIUFycmF5LmlzQXJyYXkodGhpcy5pbmRleCkpIHtcclxuICAgICAgdGhpcy5pbmRleCA9IFt0aGlzLmluZGV4XTtcclxuICAgIH1cclxuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKChidXR0b246IE1yZEJ1dHRvbkNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICBidXR0b24uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gYGNhbGMoJHsxMDAgLyB0aGlzLmJ1dHRvbnMubGVuZ3RofSUgKyAyOHB4KWA7XHJcbiAgICAgIC8vIGJ1dHRvbi5mbGF0ID0gdHJ1ZTtcclxuICAgICAgYnV0dG9uLnByaW1hcnkgPSB0aGlzLnByaW1hcnk7XHJcbiAgICAgIGJ1dHRvbi5hY2NlbnQgPSB0aGlzLmFjY2VudDtcclxuICAgICAgYnV0dG9uLndhcm4gPSB0aGlzLndhcm47XHJcbiAgICAgIGJ1dHRvbi5jdXN0b21UZXh0Q29sb3IgPz89IHRoaXMuY3VzdG9tVGV4dENvbG9yO1xyXG4gICAgICBidXR0b24uY3VzdG9tQmdDb2xvciA/Pz0gdGhpcy5jdXN0b21CZ0NvbG9yO1xyXG4gICAgICBidXR0b24ua2VlcEN1c3RvbVRleHRDb2xvciB8fD0gdGhpcy5rZWVwQ3VzdG9tVGV4dENvbG9yO1xyXG4gICAgICBidXR0b24ua2VlcEN1c3RvbUJnQ29sb3IgfHw9IHRoaXMua2VlcEN1c3RvbUJnQ29sb3I7XHJcbiAgICAgIGJ1dHRvbi5jdXN0b21Ub2dnbGVVbnNlbGVjdGVkQ29sb3IgPz89IHRoaXMuY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZENvbG9yO1xyXG4gICAgICBidXR0b24uY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvciA/Pz0gdGhpcy5jdXN0b21Ub2dnbGVVbnNlbGVjdGVkVGV4dENvbG9yO1xyXG4gICAgICBidXR0b24uY3VzdG9tVG9nZ2xlU2VsZWN0ZWRUZXh0Q29sb3IgPz89IHRoaXMuY3VzdG9tVG9nZ2xlU2VsZWN0ZWRUZXh0Q29sb3I7XHJcbiAgICAgIGJ1dHRvbi5taW5IZWlnaHQgPz89IHRoaXMubWluSGVpZ2h0O1xyXG4gICAgICBidXR0b24uZm9udFNpemUgPz89IHRoaXMuZm9udFNpemU7XHJcblxyXG4gICAgICBidXR0b24uYm9yZGVyUmFkaXVzID0gdGhpcy5ib3JkZXJSYWRpdXMgPz8gdGhpcy5yb3VuZGVkID8gJzUwcHgnIDogJzRweCc7XHJcbiAgICAgIFxyXG4gICAgICBidXR0b24udG9nZ2xlU2VsZWN0ZWQgPSB0aGlzLm11bHRpcGxlID8gKHRoaXMuaW5kZXggYXMgbnVtYmVyW10pLmluY2x1ZGVzKGluZGV4KSA6IHRoaXMuaW5kZXggPT09IGluZGV4O1xyXG4gICAgICBcclxuICAgICAgYnV0dG9uLnVwZGF0ZVN0eWxlKCk7XHJcblxyXG4gICAgICB0aGlzLndhdGNoKGJ1dHRvbi5jbGljay5hc09ic2VydmFibGUoKSwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgIHRoaXMuaW5kZXggPSAodGhpcy5pbmRleCBhcyBudW1iZXJbXSkuaW5jbHVkZXMoaW5kZXgpID8gKHRoaXMuaW5kZXggYXMgbnVtYmVyW10pLmZpbHRlcihpID0+IGkgIT09IGluZGV4KSA6IFsuLi4odGhpcy5pbmRleCBhcyBudW1iZXJbXSksIGluZGV4XTtcclxuICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmJ1dHRvbnMuZmlsdGVyKChiLCBpKSA9PiAodGhpcy5pbmRleCBhcyBudW1iZXJbXSkuaW5jbHVkZXMoaSkpLm1hcChiID0+IGIudmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlID0gYnV0dG9uLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLmFjdGl2ZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgLy8gYnV0dG9uLnRvZ2dsZVNlbGVjdGVkID0gdGhpcy5tdWx0aXBsZSA/ICFidXR0b24udG9nZ2xlU2VsZWN0ZWQgOiB0cnVlO1xyXG4gICAgICAgIC8vIGlmICghdGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgIC8vICAgdGhpcy5idXR0b25zLmZvckVhY2goKGIsIGkpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKGkgIT09IGluZGV4KSB7XHJcbiAgICAgICAgLy8gICAgICAgYi50b2dnbGVTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAgIGIudXBkYXRlU3R5bGUoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGJ1dHRvbi51cGRhdGVTdHlsZSgpO1xyXG4gICAgICAgIC8vIHRoaXMuaW5kZXhDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xyXG5cclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH0pKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbiJdfQ==