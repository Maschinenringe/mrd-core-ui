import { booleanAttribute, ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, Output } from '@angular/core';
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
    disabled = false;
    multiple = false;
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
    activeIndex = 0;
    constructor(cdr) {
        super();
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        this.buttons.forEach((button, index) => {
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
            if (this.activeIndex === index) {
                button.toggleSelected = this.multiple ? !button.toggleSelected : true;
            }
            button.updateStyle();
            this.watch(button.click.asObservable(), new SubscriptionHandler((event) => {
                event.stopPropagation();
                event.preventDefault();
                this.activeIndex = index;
                button.toggleSelected = this.multiple ? !button.toggleSelected : true;
                if (!this.multiple) {
                    this.buttons.forEach((b, i) => {
                        if (i !== index) {
                            b.toggleSelected = false;
                            b.updateStyle();
                        }
                    });
                }
                button.updateStyle();
                this.indexChange.emit(index);
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
        } }, inputs: { rounded: ["rounded", "rounded", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], multiple: ["multiple", "multiple", booleanAttribute], primary: ["primary", "primary", booleanAttribute], accent: ["accent", "accent", booleanAttribute], warn: ["warn", "warn", booleanAttribute], customTextColor: ["color", "customTextColor", colorThemeAttribute], customBgColor: ["backgroundColor", "customBgColor", colorAttribute], keepCustomTextColor: ["keepCustomTextColor", "keepCustomTextColor", booleanAttribute], keepCustomBgColor: ["keepCustomBgColor", "keepCustomBgColor", booleanAttribute], customToggleUnselectedColor: ["unselectedBgColor", "customToggleUnselectedColor", colorAttribute], customToggleUnselectedTextColor: ["unselectedTextColor", "customToggleUnselectedTextColor", colorAttribute], customToggleSelectedColor: ["selectedBgColor", "customToggleSelectedColor", colorAttribute], customToggleSelectedTextColor: ["selectedTextColor", "customToggleSelectedTextColor", colorAttribute], minHeight: ["minHeight", "minHeight", sizeAttribute], fontSize: ["fontSize", "fontSize", sizeAttribute], borderRadius: ["borderRadius", "borderRadius", sizeAttribute] }, outputs: { indexChange: "indexChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "flex", "flex-row"]], template: function MrdButtonToggleGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } }, styles: ["[_nghost-%COMP%]{margin:8px 24px}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdButtonToggleGroupComponent, [{
        type: Component,
        args: [{ selector: 'mrd-button-toggle-group', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"flex flex-row\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", styles: [":host{margin:8px 24px}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1idXR0b24tdG9nZ2xlL2NvbXBvbmVudHMvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1idXR0b24tdG9nZ2xlL2NvbXBvbmVudHMvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNoTCxPQUFPLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFFdEcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7QUFTbkUsTUFBTSxPQUFPLDZCQUE4QixTQUFRLFVBQVU7SUEwSC9DO0lBeEh5QixPQUFPLENBQWdDO0lBRS9CLE9BQU8sR0FBWSxLQUFLLENBQUM7SUFDekIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixRQUFRLEdBQVksS0FBSyxDQUFDO0lBRXZFOzs7Ozs7T0FNRztJQUMwQyxPQUFPLEdBQVksS0FBSyxDQUFDO0lBRXRFOzs7Ozs7T0FNRztJQUMwQyxNQUFNLEdBQVksS0FBSyxDQUFDO0lBRXJFOzs7Ozs7T0FNRztJQUMwQyxJQUFJLEdBQVksS0FBSyxDQUFDO0lBRW5FOzs7Ozs7OztPQVFHO0lBQzZELGVBQWUsQ0FBUztJQUV4Rjs7Ozs7O09BTUc7SUFDa0UsYUFBYSxDQUFTO0lBRTNGOzs7OztPQUtHO0lBQzBDLG1CQUFtQixHQUFZLEtBQUssQ0FBQztJQUNsRjs7Ozs7T0FLRztJQUMwQyxpQkFBaUIsR0FBWSxLQUFLLENBQUM7SUFFVCwyQkFBMkIsQ0FBUztJQUVsQywrQkFBK0IsQ0FBUztJQUU1Qyx5QkFBeUIsQ0FBUztJQUVoQyw2QkFBNkIsQ0FBUztJQUU3Rzs7Ozs7T0FLRztJQUN1QyxTQUFTLENBQVM7SUFDNUQ7Ozs7O09BS0c7SUFDdUMsUUFBUSxDQUFTO0lBRTNEOzs7OztPQUtHO0lBQ3VDLFlBQVksQ0FBUztJQUUvRDs7Ozs7T0FLRztJQUNjLFdBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUdoRjs7Ozs7O09BTUc7SUFDSyxPQUFPLEdBQW1CLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUVsRCxXQUFXLEdBQVcsQ0FBQyxDQUFDO0lBRS9CLFlBQ1ksR0FBc0I7UUFFaEMsS0FBSyxFQUFFLENBQUM7UUFGRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtJQUdsQyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBMEIsRUFBRSxLQUFhLEVBQUUsRUFBRTtZQUNqRSxzQkFBc0I7WUFDdEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM1QixNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDeEIsTUFBTSxDQUFDLGVBQWUsS0FBSyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ2hELE1BQU0sQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUM1QyxNQUFNLENBQUMsbUJBQW1CLEtBQUssSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQ3hELE1BQU0sQ0FBQyxpQkFBaUIsS0FBSyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDcEQsTUFBTSxDQUFDLDJCQUEyQixLQUFLLElBQUksQ0FBQywyQkFBMkIsQ0FBQztZQUN4RSxNQUFNLENBQUMsK0JBQStCLEtBQUssSUFBSSxDQUFDLCtCQUErQixDQUFDO1lBQ2hGLE1BQU0sQ0FBQyw2QkFBNkIsS0FBSyxJQUFJLENBQUMsNkJBQTZCLENBQUM7WUFDNUUsTUFBTSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUVsQyxNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFFekUsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtnQkFDOUIsTUFBTSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzthQUN2RTtZQUVELE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUVyQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxtQkFBbUIsQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFO2dCQUMvRSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLE1BQU0sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDNUIsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFOzRCQUNmLENBQUMsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDOzRCQUN6QixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7eUJBQ2pCO29CQUNILENBQUMsQ0FBQyxDQUFDO2lCQUNKO2dCQUNELE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzBHQTFLVSw2QkFBNkI7NEZBQTdCLDZCQUE2Qjt3Q0FFdkIsa0JBQWtCOzs7O3VEQUVoQixnQkFBZ0Isc0NBQ2hCLGdCQUFnQixzQ0FDaEIsZ0JBQWdCLG1DQVNoQixnQkFBZ0IsZ0NBU2hCLGdCQUFnQiwwQkFTaEIsZ0JBQWdCLGlEQVdBLG1CQUFtQix1REFTVCxjQUFjLHVFQVF4QyxnQkFBZ0IsaUVBT2hCLGdCQUFnQixxRkFFWSxjQUFjLCtGQUVaLGNBQWMsK0VBRWxCLGNBQWMseUZBRVosY0FBYyx5Q0FRMUMsYUFBYSxzQ0FPYixhQUFhLGtEQVFiLGFBQWE7O1lDbEhsQyw4QkFBMkI7WUFDekIsa0JBQXlCO1lBQzNCLGlCQUFNOzs7dUZEYU8sNkJBQTZCO2NBTnpDLFNBQVM7MkJBQ0UseUJBQXlCLG1CQUdsQix1QkFBdUIsQ0FBQyxNQUFNO29FQUlWLE9BQU87a0JBQTNDLGVBQWU7bUJBQUMsa0JBQWtCO1lBRVUsT0FBTztrQkFBbkQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUNTLFFBQVE7a0JBQXBELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFDUyxRQUFRO2tCQUFwRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBU1MsT0FBTztrQkFBbkQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQVNTLE1BQU07a0JBQWxELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFTUyxJQUFJO2tCQUFoRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBVzRCLGVBQWU7a0JBQTlFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBQztZQVNjLGFBQWE7a0JBQWpGLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBQztZQVFmLG1CQUFtQjtrQkFBL0QsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQU9TLGlCQUFpQjtrQkFBN0QsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUVtQywyQkFBMkI7a0JBQWpHLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBQztZQUVXLCtCQUErQjtrQkFBdkcsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFDO1lBRUsseUJBQXlCO2tCQUE3RixLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUM7WUFFVyw2QkFBNkI7a0JBQW5HLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBQztZQVFwQixTQUFTO2tCQUFsRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGFBQWEsRUFBQztZQU9TLFFBQVE7a0JBQWpELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsYUFBYSxFQUFDO1lBUVMsWUFBWTtrQkFBckQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUM7WUFRaEIsV0FBVztrQkFBM0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIGJvb2xlYW5BdHRyaWJ1dGUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QsIFN1YnNjcmlwdGlvbkhhbmRsZXIgfSBmcm9tICdtcmQtY29yZSc7XHJcbmltcG9ydCB7IGNvbG9yQXR0cmlidXRlLCBjb2xvclRoZW1lQXR0cmlidXRlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9jb2xvci10cmFuc2Zvcm0nO1xyXG5pbXBvcnQgeyBzaXplQXR0cmlidXRlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9zaXplLXRyYW5zZm9ybSc7XHJcbmltcG9ydCB7IE1yZEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vLi4vLi4vLi4vbXJkLWJ1dHRvbi9jb21wb25lbnRzL21yZC1idXR0b24vbXJkLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNcmRDb25maWdNb2RlbCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL21vZGVsL2NvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IENvbmZpZ1V0aWwgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtYnV0dG9uLXRvZ2dsZS1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkQnV0dG9uVG9nZ2xlR3JvdXBDb21wb25lbnQgZXh0ZW5kcyBCYXNlT2JqZWN0IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oTXJkQnV0dG9uQ29tcG9uZW50KSBidXR0b25zOiBRdWVyeUxpc3Q8TXJkQnV0dG9uQ29tcG9uZW50PjtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcm91bmRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGllIEJ1dHRvbkdyb3VwIGRhcyBUaGVtZSBcInByaW1hcnlcIiBoYXQuXHJcbiAgICpcclxuICAgKiBIaWVyZHVyY2ggd2lyZCBkaWUgSGludGVyZ3J1bmRmYXJiZSBkZXMgQnV0dG9ucyBhdWYgZGllIHByaW3DpHJlIEZhcmJlIGRlcyBUaGVtZXMgZ2VzZXR6dC5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBwcmltYXJ5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRpZSBCdXR0b25Hcm91cCBkYXMgVGhlbWUgXCJhY2NlbnRcIiBoYXQuXHJcbiAgICpcclxuICAgKiBIaWVyZHVyY2ggd2lyZCBkaWUgSGludGVyZ3J1bmRmYXJiZSBkZXMgQnV0dG9ucyBhdWYgZGllIEFremVudGZhcmJlIGRlcyBUaGVtZXMgZ2VzZXR6dC5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBhY2NlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGllIEJ1dHRvbkdyb3VwIGRhcyBUaGVtZSBcIndhcm5cIiBoYXQuXHJcbiAgICpcclxuICAgKiBIaWVyZHVyY2ggd2lyZCBkaWUgSGludGVyZ3J1bmRmYXJiZSBkZXMgQnV0dG9ucyBhdWYgZGllIFdhcm5mYXJiZSBkZXMgVGhlbWVzIGdlc2V0enQuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgd2FybjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBTZXR6dCBkaWUgR3J1bmRmYXJiZSBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIERpZXNlIHdpcmQgamUgbmFjaCBTdHlsZSBkZXMgQnV0dG9ucyBhbHMgSGludGVyZ3J1bmRmYXJiZSBvZGVyIFRleHRmYXJiZSB2ZXJ3ZW5kZXQuXHJcbiAgICpcclxuICAgKiBFcyBrw7ZubmVuIEhleC0sIFJHQi0gb2RlciBSR0JBLVdlcnRlLCBzb3dpZSBcInByaW1hcnlcIiwgXCJhY2NlbnRcIiBvZGVyIFwid2FyblwiIGFuZ2VnZWJlbiB3ZXJkZW4uXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ2NvbG9yJywgdHJhbnNmb3JtOiBjb2xvclRoZW1lQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbVRleHRDb2xvcjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBTZXR6dCBkaWUgSGludGVyZ3J1bmRmYXJiZSBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIEVzIGvDtm5uZW4gSGV4LSwgUkdCLSBvZGVyIFJHQkEtV2VydGUgYW5nZWdlYmVuIHdlcmRlbi5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe2FsaWFzOiAnYmFja2dyb3VuZENvbG9yJywgdHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21CZ0NvbG9yOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRpZSBiZW51dHplcmRlZmluaWVydGUgVGV4dGZhcmJlIG5pY2h0IGR1cmNoIGVpbiBkZWZuaWVydGVzIFRoZW1hIMO8YmVyc2NocmllYmVuIHdlcmRlbiBzb2xsLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGtlZXBDdXN0b21UZXh0Q29sb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkaWUgYmVudXR6ZXJkZWZpbmllcnRlIEhpbnRlcmdydW5kZmFyYmUgbmljaHQgZHVyY2ggZWluIGRlZmluaWVydGVzIFRoZW1hIMO8YmVyc2NocmllYmVuIHdlcmRlbiBzb2xsLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGtlZXBDdXN0b21CZ0NvbG9yOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCh7YWxpYXM6ICd1bnNlbGVjdGVkQmdDb2xvcicsIHRyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCh7YWxpYXM6ICd1bnNlbGVjdGVkVGV4dENvbG9yJywgdHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21Ub2dnbGVVbnNlbGVjdGVkVGV4dENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCh7YWxpYXM6ICdzZWxlY3RlZEJnQ29sb3InLCB0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbVRvZ2dsZVNlbGVjdGVkQ29sb3I6IHN0cmluZztcclxuXHJcbiAgQElucHV0KHthbGlhczogJ3NlbGVjdGVkVGV4dENvbG9yJywgdHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21Ub2dnbGVTZWxlY3RlZFRleHRDb2xvcjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBEaWUgTWluZGVzdGjDtmhlIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZyB8IG51bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgbWluSGVpZ2h0OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogRGllIFNjaHJpZnRncsO2w59lIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZyB8IG51bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgZm9udFNpemU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRGVyIFJhZGl1cyBkZXIgRWNrZW4gZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBib3JkZXJSYWRpdXM6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRGFzIEtsaWNrLUV2ZW50IGR1cmNoIGRlbiBOdXR6ZXIuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPEV2ZW50Pn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBpbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIERpZSBLb25maWd1cmF0aW9uIGRlcyBNcmQtQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHR5cGUge01yZENvbmZpZ01vZGVsfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBwcml2YXRlIF9jb25maWc6IE1yZENvbmZpZ01vZGVsID0gQ29uZmlnVXRpbC5nZXRDb25maWcoKTtcclxuXHJcbiAgcHVibGljIGFjdGl2ZUluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5idXR0b25zLmZvckVhY2goKGJ1dHRvbjogTXJkQnV0dG9uQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIC8vIGJ1dHRvbi5mbGF0ID0gdHJ1ZTtcclxuICAgICAgYnV0dG9uLnByaW1hcnkgPSB0aGlzLnByaW1hcnk7XHJcbiAgICAgIGJ1dHRvbi5hY2NlbnQgPSB0aGlzLmFjY2VudDtcclxuICAgICAgYnV0dG9uLndhcm4gPSB0aGlzLndhcm47XHJcbiAgICAgIGJ1dHRvbi5jdXN0b21UZXh0Q29sb3IgPz89IHRoaXMuY3VzdG9tVGV4dENvbG9yO1xyXG4gICAgICBidXR0b24uY3VzdG9tQmdDb2xvciA/Pz0gdGhpcy5jdXN0b21CZ0NvbG9yO1xyXG4gICAgICBidXR0b24ua2VlcEN1c3RvbVRleHRDb2xvciB8fD0gdGhpcy5rZWVwQ3VzdG9tVGV4dENvbG9yO1xyXG4gICAgICBidXR0b24ua2VlcEN1c3RvbUJnQ29sb3IgfHw9IHRoaXMua2VlcEN1c3RvbUJnQ29sb3I7XHJcbiAgICAgIGJ1dHRvbi5jdXN0b21Ub2dnbGVVbnNlbGVjdGVkQ29sb3IgPz89IHRoaXMuY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZENvbG9yO1xyXG4gICAgICBidXR0b24uY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvciA/Pz0gdGhpcy5jdXN0b21Ub2dnbGVVbnNlbGVjdGVkVGV4dENvbG9yO1xyXG4gICAgICBidXR0b24uY3VzdG9tVG9nZ2xlU2VsZWN0ZWRUZXh0Q29sb3IgPz89IHRoaXMuY3VzdG9tVG9nZ2xlU2VsZWN0ZWRUZXh0Q29sb3I7XHJcbiAgICAgIGJ1dHRvbi5taW5IZWlnaHQgPz89IHRoaXMubWluSGVpZ2h0O1xyXG4gICAgICBidXR0b24uZm9udFNpemUgPz89IHRoaXMuZm9udFNpemU7XHJcblxyXG4gICAgICBidXR0b24uYm9yZGVyUmFkaXVzID0gdGhpcy5ib3JkZXJSYWRpdXMgPz8gdGhpcy5yb3VuZGVkID8gJzUwcHgnIDogJzRweCc7XHJcblxyXG4gICAgICBpZiAodGhpcy5hY3RpdmVJbmRleCA9PT0gaW5kZXgpIHtcclxuICAgICAgICBidXR0b24udG9nZ2xlU2VsZWN0ZWQgPSB0aGlzLm11bHRpcGxlID8gIWJ1dHRvbi50b2dnbGVTZWxlY3RlZCA6IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGJ1dHRvbi51cGRhdGVTdHlsZSgpO1xyXG5cclxuICAgICAgdGhpcy53YXRjaChidXR0b24uY2xpY2suYXNPYnNlcnZhYmxlKCksIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBpbmRleDtcclxuICAgICAgICBidXR0b24udG9nZ2xlU2VsZWN0ZWQgPSB0aGlzLm11bHRpcGxlID8gIWJ1dHRvbi50b2dnbGVTZWxlY3RlZCA6IHRydWU7XHJcbiAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaCgoYiwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaSAhPT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICBiLnRvZ2dsZVNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgYi51cGRhdGVTdHlsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uLnVwZGF0ZVN0eWxlKCk7XHJcbiAgICAgICAgdGhpcy5pbmRleENoYW5nZS5lbWl0KGluZGV4KTtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH0pKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXJvd1wiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbiJdfQ==