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
    disabled = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1idXR0b24tdG9nZ2xlL2NvbXBvbmVudHMvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1idXR0b24tdG9nZ2xlL2NvbXBvbmVudHMvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDak0sT0FBTyxFQUFFLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBRXRHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7O0FBU25FLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxVQUFVO0lBMkovQztJQXpKeUIsT0FBTyxDQUFnQztJQUUvQixPQUFPLEdBQVksS0FBSyxDQUFDO0lBQ3pCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsUUFBUSxHQUFZ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QVMsRUFBRSxnQkFBZ0IsRUFBQztZQVc0QixlQUFlO2tCQUE5RSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUM7WUFTYyxhQUFhO2tCQUFqRixLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUM7WUFRZixtQkFBbUI7a0JBQS9ELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFPUyxpQkFBaUI7a0JBQTdELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFbUMsMkJBQTJCO2tCQUFqRyxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUM7WUFFVywrQkFBK0I7a0JBQXZHLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBQztZQUVLLHlCQUF5QjtrQkFBN0YsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFDO1lBRVcsNkJBQTZCO2tCQUFuRyxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUM7WUFRcEIsU0FBUztrQkFBbEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUM7WUFPUyxRQUFRO2tCQUFqRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGFBQWEsRUFBQztZQVFTLFlBQVk7a0JBQXJELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsYUFBYSxFQUFDO1lBUWhCLFdBQVc7a0JBQTNCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBib29sZWFuQXR0cmlidXRlLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFdmVudEVtaXR0ZXIsIElucHV0LCBudW1iZXJBdHRyaWJ1dGUsIE91dHB1dCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QsIFN1YnNjcmlwdGlvbkhhbmRsZXIgfSBmcm9tICdtcmQtY29yZSc7XHJcbmltcG9ydCB7IGNvbG9yQXR0cmlidXRlLCBjb2xvclRoZW1lQXR0cmlidXRlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9jb2xvci10cmFuc2Zvcm0nO1xyXG5pbXBvcnQgeyBzaXplQXR0cmlidXRlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9zaXplLXRyYW5zZm9ybSc7XHJcbmltcG9ydCB7IE1yZEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vLi4vLi4vLi4vbXJkLWJ1dHRvbi9jb21wb25lbnRzL21yZC1idXR0b24vbXJkLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNcmRDb25maWdNb2RlbCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL21vZGVsL2NvbmZpZy5tb2RlbCc7XHJcbmltcG9ydCB7IENvbmZpZ1V0aWwgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtYnV0dG9uLXRvZ2dsZS1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkQnV0dG9uVG9nZ2xlR3JvdXBDb21wb25lbnQgZXh0ZW5kcyBCYXNlT2JqZWN0IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oTXJkQnV0dG9uQ29tcG9uZW50KSBidXR0b25zOiBRdWVyeUxpc3Q8TXJkQnV0dG9uQ29tcG9uZW50PjtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcm91bmRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgc2VsZWN0ZWRJbmRleChpbmRleDogbnVtYmVyfG51bWJlcltdKSB7XHJcbiAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiAhQXJyYXkuaXNBcnJheShpbmRleCkpIHtcclxuICAgICAgaW5kZXggPSBbaW5kZXhdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xyXG4gICAgaWYgKHRoaXMuYnV0dG9ucykge1xyXG4gICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaCgoYiwgaSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICBpZiAoKGluZGV4IGFzIG51bWJlcltdKS5pbmNsdWRlcyhpKSAmJiAhYi50b2dnbGVTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBiLnRvZ2dsZVNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgYi51cGRhdGVTdHlsZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICghKGluZGV4IGFzIG51bWJlcltdKS5pbmNsdWRlcyhpKSAmJiBiLnRvZ2dsZVNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGIudG9nZ2xlU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYi51cGRhdGVTdHlsZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gaW5kZXggJiYgIWIudG9nZ2xlU2VsZWN0ZWQpIHtcclxuICAgICAgICAgIGIudG9nZ2xlU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgYi51cGRhdGVTdHlsZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaSAhPT0gaW5kZXggJiYgYi50b2dnbGVTZWxlY3RlZCkge1xyXG4gICAgICAgICAgYi50b2dnbGVTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgYi51cGRhdGVTdHlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuaW5kZXhDaGFuZ2UuZW1pdChpbmRleCk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgc2VsZWN0ZWRJbmRleCgpOiBudW1iZXJ8bnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3NlbGVjdGVkSW5kZXg6IG51bWJlcnxudW1iZXJbXSA9IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRpZSBCdXR0b25Hcm91cCBkYXMgVGhlbWUgXCJwcmltYXJ5XCIgaGF0LlxyXG4gICAqXHJcbiAgICogSGllcmR1cmNoIHdpcmQgZGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIEJ1dHRvbnMgYXVmIGRpZSBwcmltw6RyZSBGYXJiZSBkZXMgVGhlbWVzIGdlc2V0enQuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcHJpbWFyeTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkaWUgQnV0dG9uR3JvdXAgZGFzIFRoZW1lIFwiYWNjZW50XCIgaGF0LlxyXG4gICAqXHJcbiAgICogSGllcmR1cmNoIHdpcmQgZGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIEJ1dHRvbnMgYXVmIGRpZSBBa3plbnRmYXJiZSBkZXMgVGhlbWVzIGdlc2V0enQuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgYWNjZW50OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRpZSBCdXR0b25Hcm91cCBkYXMgVGhlbWUgXCJ3YXJuXCIgaGF0LlxyXG4gICAqXHJcbiAgICogSGllcmR1cmNoIHdpcmQgZGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIEJ1dHRvbnMgYXVmIGRpZSBXYXJuZmFyYmUgZGVzIFRoZW1lcyBnZXNldHp0LlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHdhcm46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0enQgZGllIEdydW5kZmFyYmUgZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBEaWVzZSB3aXJkIGplIG5hY2ggU3R5bGUgZGVzIEJ1dHRvbnMgYWxzIEhpbnRlcmdydW5kZmFyYmUgb2RlciBUZXh0ZmFyYmUgdmVyd2VuZGV0LlxyXG4gICAqXHJcbiAgICogRXMga8O2bm5lbiBIZXgtLCBSR0ItIG9kZXIgUkdCQS1XZXJ0ZSwgc293aWUgXCJwcmltYXJ5XCIsIFwiYWNjZW50XCIgb2RlciBcIndhcm5cIiBhbmdlZ2ViZW4gd2VyZGVuLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdjb2xvcicsIHRyYW5zZm9ybTogY29sb3JUaGVtZUF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21UZXh0Q29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0enQgZGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBFcyBrw7ZubmVuIEhleC0sIFJHQi0gb2RlciBSR0JBLVdlcnRlIGFuZ2VnZWJlbiB3ZXJkZW4uXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ2JhY2tncm91bmRDb2xvcicsIHRyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tQmdDb2xvcjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkaWUgYmVudXR6ZXJkZWZpbmllcnRlIFRleHRmYXJiZSBuaWNodCBkdXJjaCBlaW4gZGVmbmllcnRlcyBUaGVtYSDDvGJlcnNjaHJpZWJlbiB3ZXJkZW4gc29sbC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBrZWVwQ3VzdG9tVGV4dENvbG9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGllIGJlbnV0emVyZGVmaW5pZXJ0ZSBIaW50ZXJncnVuZGZhcmJlIG5pY2h0IGR1cmNoIGVpbiBkZWZpbmllcnRlcyBUaGVtYSDDvGJlcnNjaHJpZWJlbiB3ZXJkZW4gc29sbC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBrZWVwQ3VzdG9tQmdDb2xvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoe2FsaWFzOiAndW5zZWxlY3RlZEJnQ29sb3InLCB0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe2FsaWFzOiAndW5zZWxlY3RlZFRleHRDb2xvcicsIHRyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe2FsaWFzOiAnc2VsZWN0ZWRCZ0NvbG9yJywgdHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21Ub2dnbGVTZWxlY3RlZENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCh7YWxpYXM6ICdzZWxlY3RlZFRleHRDb2xvcicsIHRyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tVG9nZ2xlU2VsZWN0ZWRUZXh0Q29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRGllIE1pbmRlc3Row7ZoZSBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIG1pbkhlaWdodDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIERpZSBTY2hyaWZ0Z3LDtsOfZSBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIGZvbnRTaXplOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlciBSYWRpdXMgZGVyIEVja2VuIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZyB8IG51bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgYm9yZGVyUmFkaXVzOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIERhcyBLbGljay1FdmVudCBkdXJjaCBkZW4gTnV0emVyLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxFdmVudD59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgaW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXJ8bnVtYmVyW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXJ8bnVtYmVyW10+KCk7XHJcblxyXG5cclxuICAvKipcclxuICAgKiBEaWUgS29uZmlndXJhdGlvbiBkZXMgTXJkLUJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEB0eXBlIHtNcmRDb25maWdNb2RlbH1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfY29uZmlnOiBNcmRDb25maWdNb2RlbCA9IENvbmZpZ1V0aWwuZ2V0Q29uZmlnKCk7XHJcblxyXG4gIC8vIHB1YmxpYyBhY3RpdmVJbmRleDogbnVtYmVyfG51bWJlcltdID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm11bHRpcGxlICYmICFBcnJheS5pc0FycmF5KHRoaXMuc2VsZWN0ZWRJbmRleCkpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gW3RoaXMuc2VsZWN0ZWRJbmRleF07XHJcbiAgICB9XHJcbiAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uOiBNcmRCdXR0b25Db21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgYnV0dG9uLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IGBjYWxjKCR7MTAwIC8gdGhpcy5idXR0b25zLmxlbmd0aH0lICsgMjhweClgO1xyXG4gICAgICAvLyBidXR0b24uZmxhdCA9IHRydWU7XHJcbiAgICAgIGJ1dHRvbi5wcmltYXJ5ID0gdGhpcy5wcmltYXJ5O1xyXG4gICAgICBidXR0b24uYWNjZW50ID0gdGhpcy5hY2NlbnQ7XHJcbiAgICAgIGJ1dHRvbi53YXJuID0gdGhpcy53YXJuO1xyXG4gICAgICBidXR0b24uY3VzdG9tVGV4dENvbG9yID8/PSB0aGlzLmN1c3RvbVRleHRDb2xvcjtcclxuICAgICAgYnV0dG9uLmN1c3RvbUJnQ29sb3IgPz89IHRoaXMuY3VzdG9tQmdDb2xvcjtcclxuICAgICAgYnV0dG9uLmtlZXBDdXN0b21UZXh0Q29sb3IgfHw9IHRoaXMua2VlcEN1c3RvbVRleHRDb2xvcjtcclxuICAgICAgYnV0dG9uLmtlZXBDdXN0b21CZ0NvbG9yIHx8PSB0aGlzLmtlZXBDdXN0b21CZ0NvbG9yO1xyXG4gICAgICBidXR0b24uY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZENvbG9yID8/PSB0aGlzLmN1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRDb2xvcjtcclxuICAgICAgYnV0dG9uLmN1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRUZXh0Q29sb3IgPz89IHRoaXMuY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvcjtcclxuICAgICAgYnV0dG9uLmN1c3RvbVRvZ2dsZVNlbGVjdGVkVGV4dENvbG9yID8/PSB0aGlzLmN1c3RvbVRvZ2dsZVNlbGVjdGVkVGV4dENvbG9yO1xyXG4gICAgICBidXR0b24ubWluSGVpZ2h0ID8/PSB0aGlzLm1pbkhlaWdodDtcclxuICAgICAgYnV0dG9uLmZvbnRTaXplID8/PSB0aGlzLmZvbnRTaXplO1xyXG5cclxuICAgICAgYnV0dG9uLmJvcmRlclJhZGl1cyA9IHRoaXMuYm9yZGVyUmFkaXVzID8/IHRoaXMucm91bmRlZCA/ICc1MHB4JyA6ICc0cHgnO1xyXG4gICAgICBcclxuICAgICAgYnV0dG9uLnRvZ2dsZVNlbGVjdGVkID0gdGhpcy5tdWx0aXBsZSA/ICh0aGlzLnNlbGVjdGVkSW5kZXggYXMgbnVtYmVyW10pLmluY2x1ZGVzKGluZGV4KSA6IHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXg7XHJcbiAgICAgIFxyXG4gICAgICBidXR0b24udXBkYXRlU3R5bGUoKTtcclxuXHJcbiAgICAgIHRoaXMud2F0Y2goYnV0dG9uLmNsaWNrLmFzT2JzZXJ2YWJsZSgpLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoZXZlbnQ6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gKHRoaXMuc2VsZWN0ZWRJbmRleCBhcyBudW1iZXJbXSkuaW5jbHVkZXMoaW5kZXgpID8gKHRoaXMuc2VsZWN0ZWRJbmRleCBhcyBudW1iZXJbXSkuZmlsdGVyKGkgPT4gaSAhPT0gaW5kZXgpIDogWy4uLih0aGlzLnNlbGVjdGVkSW5kZXggYXMgbnVtYmVyW10pLCBpbmRleF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLmFjdGl2ZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgLy8gYnV0dG9uLnRvZ2dsZVNlbGVjdGVkID0gdGhpcy5tdWx0aXBsZSA/ICFidXR0b24udG9nZ2xlU2VsZWN0ZWQgOiB0cnVlO1xyXG4gICAgICAgIC8vIGlmICghdGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgIC8vICAgdGhpcy5idXR0b25zLmZvckVhY2goKGIsIGkpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKGkgIT09IGluZGV4KSB7XHJcbiAgICAgICAgLy8gICAgICAgYi50b2dnbGVTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAgIGIudXBkYXRlU3R5bGUoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGJ1dHRvbi51cGRhdGVTdHlsZSgpO1xyXG4gICAgICAgIHRoaXMuaW5kZXhDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfSkpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuIl19