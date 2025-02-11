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
    set selectedIndex(index) {
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
    get selectedIndex() {
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
        if (this.multiple && !Array.isArray(this.selectedIndex)) {
            this.selectedIndex = [this.selectedIndex];
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
            button.toggleSelected = this.multiple ? this.selectedIndex.includes(index) : this.selectedIndex === index;
            button.updateStyle();
            this.watch(button.click.asObservable(), new SubscriptionHandler((event) => {
                event.stopPropagation();
                event.preventDefault();
                if (this.multiple) {
                    this.selectedIndex = this.selectedIndex.includes(index) ? this.selectedIndex.filter(i => i !== index) : [...this.selectedIndex, index];
                }
                else {
                    this.selectedIndex = index;
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
                this.indexChange.emit(this.selectedIndex);
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
        } }, inputs: { rounded: ["rounded", "rounded", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], multiple: ["multiple", "multiple", booleanAttribute], selectedIndex: ["selectedIndex", "selectedIndex", numberAttribute], primary: ["primary", "primary", booleanAttribute], accent: ["accent", "accent", booleanAttribute], warn: ["warn", "warn", booleanAttribute], customTextColor: ["color", "customTextColor", colorThemeAttribute], customBgColor: ["backgroundColor", "customBgColor", colorAttribute], keepCustomTextColor: ["keepCustomTextColor", "keepCustomTextColor", booleanAttribute], keepCustomBgColor: ["keepCustomBgColor", "keepCustomBgColor", booleanAttribute], customToggleUnselectedColor: ["unselectedBgColor", "customToggleUnselectedColor", colorAttribute], customToggleUnselectedTextColor: ["unselectedTextColor", "customToggleUnselectedTextColor", colorAttribute], customToggleSelectedColor: ["selectedBgColor", "customToggleSelectedColor", colorAttribute], customToggleSelectedTextColor: ["selectedTextColor", "customToggleSelectedTextColor", colorAttribute], minHeight: ["minHeight", "minHeight", sizeAttribute], fontSize: ["fontSize", "fontSize", sizeAttribute], borderRadius: ["borderRadius", "borderRadius", sizeAttribute] }, outputs: { indexChange: "indexChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "flex", "flex-row", "justify-center"]], template: function MrdButtonToggleGroupComponent_Template(rf, ctx) { if (rf & 1) {
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
        }], selectedIndex: [{
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
        }], indexChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1idXR0b24tdG9nZ2xlL2NvbXBvbmVudHMvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1idXR0b24tdG9nZ2xlL2NvbXBvbmVudHMvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDak0sT0FBTyxFQUFFLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBRXRHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7O0FBU25FLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxVQUFVO0lBbUsvQztJQWpLeUIsT0FBTyxDQUFnQztJQUUvQixPQUFPLEdBQVksS0FBSyxDQUFDO0lBQ3RFLElBQWlELFFBQVEsQ0FBQyxLQUFjO1FBQ3RFLElBQUksSUFB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QkFBQyxFQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUM7WUFRUyxZQUFZO2tCQUFyRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGFBQWEsRUFBQztZQVFoQixXQUFXO2tCQUEzQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgYm9vbGVhbkF0dHJpYnV0ZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgbnVtYmVyQXR0cmlidXRlLCBPdXRwdXQsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0LCBTdWJzY3JpcHRpb25IYW5kbGVyIH0gZnJvbSAnbXJkLWNvcmUnO1xyXG5pbXBvcnQgeyBjb2xvckF0dHJpYnV0ZSwgY29sb3JUaGVtZUF0dHJpYnV0ZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvY29sb3ItdHJhbnNmb3JtJztcclxuaW1wb3J0IHsgc2l6ZUF0dHJpYnV0ZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvc2l6ZS10cmFuc2Zvcm0nO1xyXG5pbXBvcnQgeyBNcmRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLy4uLy4uLy4uL21yZC1idXR0b24vY29tcG9uZW50cy9tcmQtYnV0dG9uL21yZC1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXJkQ29uZmlnTW9kZWwgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbC9jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgeyBDb25maWdVdGlsIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb25maWcudXRpbCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1idXR0b24tdG9nZ2xlLWdyb3VwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC1idXR0b24tdG9nZ2xlLWdyb3VwLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZEJ1dHRvblRvZ2dsZUdyb3VwQ29tcG9uZW50IGV4dGVuZHMgQmFzZU9iamVjdCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKE1yZEJ1dHRvbkNvbXBvbmVudCkgYnV0dG9uczogUXVlcnlMaXN0PE1yZEJ1dHRvbkNvbXBvbmVudD47XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHJvdW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0aGlzLmJ1dHRvbnMpIHtcclxuICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goYiA9PiB7XHJcbiAgICAgICAgYi5kaXNhYmxlZCA9IHZhbHVlO1xyXG4gICAgICAgIGIudXBkYXRlU3R5bGUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIG11bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IHNlbGVjdGVkSW5kZXgoaW5kZXg6IG51bWJlcnxudW1iZXJbXSkge1xyXG4gICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgIUFycmF5LmlzQXJyYXkoaW5kZXgpKSB7XHJcbiAgICAgIGluZGV4ID0gW2luZGV4XTtcclxuICAgIH1cclxuICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuICAgIGlmICh0aGlzLmJ1dHRvbnMpIHtcclxuICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goKGIsIGkpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgaWYgKChpbmRleCBhcyBudW1iZXJbXSkuaW5jbHVkZXMoaSkgJiYgIWIudG9nZ2xlU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgYi50b2dnbGVTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGIudXBkYXRlU3R5bGUoKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoIShpbmRleCBhcyBudW1iZXJbXSkuaW5jbHVkZXMoaSkgJiYgYi50b2dnbGVTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBiLnRvZ2dsZVNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGIudXBkYXRlU3R5bGUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IGluZGV4ICYmICFiLnRvZ2dsZVNlbGVjdGVkKSB7XHJcbiAgICAgICAgICBiLnRvZ2dsZVNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIGIudXBkYXRlU3R5bGUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGkgIT09IGluZGV4ICYmIGIudG9nZ2xlU2VsZWN0ZWQpIHtcclxuICAgICAgICAgIGIudG9nZ2xlU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGIudXBkYXRlU3R5bGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLmluZGV4Q2hhbmdlLmVtaXQoaW5kZXgpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IHNlbGVjdGVkSW5kZXgoKTogbnVtYmVyfG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xyXG4gIH1cclxuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBudW1iZXJ8bnVtYmVyW10gPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkaWUgQnV0dG9uR3JvdXAgZGFzIFRoZW1lIFwicHJpbWFyeVwiIGhhdC5cclxuICAgKlxyXG4gICAqIEhpZXJkdXJjaCB3aXJkIGRpZSBIaW50ZXJncnVuZGZhcmJlIGRlcyBCdXR0b25zIGF1ZiBkaWUgcHJpbcOkcmUgRmFyYmUgZGVzIFRoZW1lcyBnZXNldHp0LlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHByaW1hcnk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGllIEJ1dHRvbkdyb3VwIGRhcyBUaGVtZSBcImFjY2VudFwiIGhhdC5cclxuICAgKlxyXG4gICAqIEhpZXJkdXJjaCB3aXJkIGRpZSBIaW50ZXJncnVuZGZhcmJlIGRlcyBCdXR0b25zIGF1ZiBkaWUgQWt6ZW50ZmFyYmUgZGVzIFRoZW1lcyBnZXNldHp0LlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGFjY2VudDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkaWUgQnV0dG9uR3JvdXAgZGFzIFRoZW1lIFwid2FyblwiIGhhdC5cclxuICAgKlxyXG4gICAqIEhpZXJkdXJjaCB3aXJkIGRpZSBIaW50ZXJncnVuZGZhcmJlIGRlcyBCdXR0b25zIGF1ZiBkaWUgV2FybmZhcmJlIGRlcyBUaGVtZXMgZ2VzZXR6dC5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyB3YXJuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHp0IGRpZSBHcnVuZGZhcmJlIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogRGllc2Ugd2lyZCBqZSBuYWNoIFN0eWxlIGRlcyBCdXR0b25zIGFscyBIaW50ZXJncnVuZGZhcmJlIG9kZXIgVGV4dGZhcmJlIHZlcndlbmRldC5cclxuICAgKlxyXG4gICAqIEVzIGvDtm5uZW4gSGV4LSwgUkdCLSBvZGVyIFJHQkEtV2VydGUsIHNvd2llIFwicHJpbWFyeVwiLCBcImFjY2VudFwiIG9kZXIgXCJ3YXJuXCIgYW5nZWdlYmVuIHdlcmRlbi5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnY29sb3InLCB0cmFuc2Zvcm06IGNvbG9yVGhlbWVBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tVGV4dENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHp0IGRpZSBIaW50ZXJncnVuZGZhcmJlIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogRXMga8O2bm5lbiBIZXgtLCBSR0ItIG9kZXIgUkdCQS1XZXJ0ZSBhbmdlZ2ViZW4gd2VyZGVuLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdiYWNrZ3JvdW5kQ29sb3InLCB0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbUJnQ29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGllIGJlbnV0emVyZGVmaW5pZXJ0ZSBUZXh0ZmFyYmUgbmljaHQgZHVyY2ggZWluIGRlZm5pZXJ0ZXMgVGhlbWEgw7xiZXJzY2hyaWViZW4gd2VyZGVuIHNvbGwuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMga2VlcEN1c3RvbVRleHRDb2xvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRpZSBiZW51dHplcmRlZmluaWVydGUgSGludGVyZ3J1bmRmYXJiZSBuaWNodCBkdXJjaCBlaW4gZGVmaW5pZXJ0ZXMgVGhlbWEgw7xiZXJzY2hyaWViZW4gd2VyZGVuIHNvbGwuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMga2VlcEN1c3RvbUJnQ29sb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHthbGlhczogJ3Vuc2VsZWN0ZWRCZ0NvbG9yJywgdHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21Ub2dnbGVVbnNlbGVjdGVkQ29sb3I6IHN0cmluZztcclxuXHJcbiAgQElucHV0KHthbGlhczogJ3Vuc2VsZWN0ZWRUZXh0Q29sb3InLCB0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRUZXh0Q29sb3I6IHN0cmluZztcclxuXHJcbiAgQElucHV0KHthbGlhczogJ3NlbGVjdGVkQmdDb2xvcicsIHRyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tVG9nZ2xlU2VsZWN0ZWRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe2FsaWFzOiAnc2VsZWN0ZWRUZXh0Q29sb3InLCB0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbVRvZ2dsZVNlbGVjdGVkVGV4dENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIERpZSBNaW5kZXN0aMO2aGUgZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBtaW5IZWlnaHQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBEaWUgU2NocmlmdGdyw7bDn2UgZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBmb250U2l6ZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBEZXIgUmFkaXVzIGRlciBFY2tlbiBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIGJvcmRlclJhZGl1czogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBEYXMgS2xpY2stRXZlbnQgZHVyY2ggZGVuIE51dHplci5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8RXZlbnQ+fVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBAT3V0cHV0KCkgcHVibGljIGluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyfG51bWJlcltdPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyfG51bWJlcltdPigpO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRGllIEtvbmZpZ3VyYXRpb24gZGVzIE1yZC1CdXR0b25zLlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAdHlwZSB7TXJkQ29uZmlnTW9kZWx9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2NvbmZpZzogTXJkQ29uZmlnTW9kZWwgPSBDb25maWdVdGlsLmdldENvbmZpZygpO1xyXG5cclxuICAvLyBwdWJsaWMgYWN0aXZlSW5kZXg6IG51bWJlcnxudW1iZXJbXSA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiAhQXJyYXkuaXNBcnJheSh0aGlzLnNlbGVjdGVkSW5kZXgpKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IFt0aGlzLnNlbGVjdGVkSW5kZXhdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5idXR0b25zLmZvckVhY2goKGJ1dHRvbjogTXJkQnV0dG9uQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGJ1dHRvbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBgY2FsYygkezEwMCAvIHRoaXMuYnV0dG9ucy5sZW5ndGh9JSArIDI4cHgpYDtcclxuICAgICAgLy8gYnV0dG9uLmZsYXQgPSB0cnVlO1xyXG4gICAgICBidXR0b24ucHJpbWFyeSA9IHRoaXMucHJpbWFyeTtcclxuICAgICAgYnV0dG9uLmFjY2VudCA9IHRoaXMuYWNjZW50O1xyXG4gICAgICBidXR0b24ud2FybiA9IHRoaXMud2FybjtcclxuICAgICAgYnV0dG9uLmN1c3RvbVRleHRDb2xvciA/Pz0gdGhpcy5jdXN0b21UZXh0Q29sb3I7XHJcbiAgICAgIGJ1dHRvbi5jdXN0b21CZ0NvbG9yID8/PSB0aGlzLmN1c3RvbUJnQ29sb3I7XHJcbiAgICAgIGJ1dHRvbi5rZWVwQ3VzdG9tVGV4dENvbG9yIHx8PSB0aGlzLmtlZXBDdXN0b21UZXh0Q29sb3I7XHJcbiAgICAgIGJ1dHRvbi5rZWVwQ3VzdG9tQmdDb2xvciB8fD0gdGhpcy5rZWVwQ3VzdG9tQmdDb2xvcjtcclxuICAgICAgYnV0dG9uLmN1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRDb2xvciA/Pz0gdGhpcy5jdXN0b21Ub2dnbGVVbnNlbGVjdGVkQ29sb3I7XHJcbiAgICAgIGJ1dHRvbi5jdXN0b21Ub2dnbGVVbnNlbGVjdGVkVGV4dENvbG9yID8/PSB0aGlzLmN1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRUZXh0Q29sb3I7XHJcbiAgICAgIGJ1dHRvbi5jdXN0b21Ub2dnbGVTZWxlY3RlZFRleHRDb2xvciA/Pz0gdGhpcy5jdXN0b21Ub2dnbGVTZWxlY3RlZFRleHRDb2xvcjtcclxuICAgICAgYnV0dG9uLm1pbkhlaWdodCA/Pz0gdGhpcy5taW5IZWlnaHQ7XHJcbiAgICAgIGJ1dHRvbi5mb250U2l6ZSA/Pz0gdGhpcy5mb250U2l6ZTtcclxuXHJcbiAgICAgIGJ1dHRvbi5ib3JkZXJSYWRpdXMgPSB0aGlzLmJvcmRlclJhZGl1cyA/PyB0aGlzLnJvdW5kZWQgPyAnNTBweCcgOiAnNHB4JztcclxuICAgICAgXHJcbiAgICAgIGJ1dHRvbi50b2dnbGVTZWxlY3RlZCA9IHRoaXMubXVsdGlwbGUgPyAodGhpcy5zZWxlY3RlZEluZGV4IGFzIG51bWJlcltdKS5pbmNsdWRlcyhpbmRleCkgOiB0aGlzLnNlbGVjdGVkSW5kZXggPT09IGluZGV4O1xyXG4gICAgICBcclxuICAgICAgYnV0dG9uLnVwZGF0ZVN0eWxlKCk7XHJcblxyXG4gICAgICB0aGlzLndhdGNoKGJ1dHRvbi5jbGljay5hc09ic2VydmFibGUoKSwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9ICh0aGlzLnNlbGVjdGVkSW5kZXggYXMgbnVtYmVyW10pLmluY2x1ZGVzKGluZGV4KSA/ICh0aGlzLnNlbGVjdGVkSW5kZXggYXMgbnVtYmVyW10pLmZpbHRlcihpID0+IGkgIT09IGluZGV4KSA6IFsuLi4odGhpcy5zZWxlY3RlZEluZGV4IGFzIG51bWJlcltdKSwgaW5kZXhdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5hY3RpdmVJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIC8vIGJ1dHRvbi50b2dnbGVTZWxlY3RlZCA9IHRoaXMubXVsdGlwbGUgPyAhYnV0dG9uLnRvZ2dsZVNlbGVjdGVkIDogdHJ1ZTtcclxuICAgICAgICAvLyBpZiAoIXRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAvLyAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKChiLCBpKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmIChpICE9PSBpbmRleCkge1xyXG4gICAgICAgIC8vICAgICAgIGIudG9nZ2xlU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgICBiLnVwZGF0ZVN0eWxlKCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBidXR0b24udXBkYXRlU3R5bGUoKTtcclxuICAgICAgICB0aGlzLmluZGV4Q2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZEluZGV4KTtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH0pKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbiJdfQ==