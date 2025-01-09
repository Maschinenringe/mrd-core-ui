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
        } }, inputs: { rounded: ["rounded", "rounded", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], multiple: ["multiple", "multiple", booleanAttribute], primary: ["primary", "primary", booleanAttribute], accent: ["accent", "accent", booleanAttribute], warn: ["warn", "warn", booleanAttribute], customTextColor: ["color", "customTextColor", colorThemeAttribute], customBgColor: ["backgroundColor", "customBgColor", colorAttribute], keepCustomTextColor: ["keepCustomTextColor", "keepCustomTextColor", booleanAttribute], keepCustomBgColor: ["keepCustomBgColor", "keepCustomBgColor", booleanAttribute], customToggleUnselectedColor: ["unselectedBgColor", "customToggleUnselectedColor", colorAttribute], customToggleUnselectedTextColor: ["unselectedTextColor", "customToggleUnselectedTextColor", colorAttribute], customToggleSelectedColor: ["selectedBgColor", "customToggleSelectedColor", colorAttribute], customToggleSelectedTextColor: ["selectedTextColor", "customToggleSelectedTextColor", colorAttribute], minHeight: ["minHeight", "minHeight", sizeAttribute], fontSize: ["fontSize", "fontSize", sizeAttribute], borderRadius: ["borderRadius", "borderRadius", sizeAttribute] }, outputs: { indexChange: "indexChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "flex", "flex-row", "justify-center"]], template: function MrdButtonToggleGroupComponent_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1idXR0b24tdG9nZ2xlL2NvbXBvbmVudHMvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1idXR0b24tdG9nZ2xlL2NvbXBvbmVudHMvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNoTCxPQUFPLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFFdEcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7QUFTbkUsTUFBTSxPQUFPLDZCQUE4QixTQUFRLFVBQVU7SUEwSC9DO0lBeEh5QixPQUFPLENBQWdDO0lBRS9CLE9BQU8sR0FBWSxLQUFLLENBQUM7SUFDekIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixRQUFRLEdBQVksS0FBSyxDQUFD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QUFFLGNBQWMsRUFBQztZQUVLLHlCQUF5QjtrQkFBN0YsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFDO1lBRVcsNkJBQTZCO2tCQUFuRyxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUM7WUFRcEIsU0FBUztrQkFBbEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUM7WUFPUyxRQUFRO2tCQUFqRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGFBQWEsRUFBQztZQVFTLFlBQVk7a0JBQXJELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsYUFBYSxFQUFDO1lBUWhCLFdBQVc7a0JBQTNCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBib29sZWFuQXR0cmlidXRlLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0LCBTdWJzY3JpcHRpb25IYW5kbGVyIH0gZnJvbSAnbXJkLWNvcmUnO1xyXG5pbXBvcnQgeyBjb2xvckF0dHJpYnV0ZSwgY29sb3JUaGVtZUF0dHJpYnV0ZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvY29sb3ItdHJhbnNmb3JtJztcclxuaW1wb3J0IHsgc2l6ZUF0dHJpYnV0ZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvc2l6ZS10cmFuc2Zvcm0nO1xyXG5pbXBvcnQgeyBNcmRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLy4uLy4uLy4uL21yZC1idXR0b24vY29tcG9uZW50cy9tcmQtYnV0dG9uL21yZC1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXJkQ29uZmlnTW9kZWwgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbC9jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgeyBDb25maWdVdGlsIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb25maWcudXRpbCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1idXR0b24tdG9nZ2xlLWdyb3VwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC1idXR0b24tdG9nZ2xlLWdyb3VwLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZEJ1dHRvblRvZ2dsZUdyb3VwQ29tcG9uZW50IGV4dGVuZHMgQmFzZU9iamVjdCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKE1yZEJ1dHRvbkNvbXBvbmVudCkgYnV0dG9uczogUXVlcnlMaXN0PE1yZEJ1dHRvbkNvbXBvbmVudD47XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHJvdW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIG11bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRpZSBCdXR0b25Hcm91cCBkYXMgVGhlbWUgXCJwcmltYXJ5XCIgaGF0LlxyXG4gICAqXHJcbiAgICogSGllcmR1cmNoIHdpcmQgZGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIEJ1dHRvbnMgYXVmIGRpZSBwcmltw6RyZSBGYXJiZSBkZXMgVGhlbWVzIGdlc2V0enQuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcHJpbWFyeTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkaWUgQnV0dG9uR3JvdXAgZGFzIFRoZW1lIFwiYWNjZW50XCIgaGF0LlxyXG4gICAqXHJcbiAgICogSGllcmR1cmNoIHdpcmQgZGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIEJ1dHRvbnMgYXVmIGRpZSBBa3plbnRmYXJiZSBkZXMgVGhlbWVzIGdlc2V0enQuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgYWNjZW50OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRpZSBCdXR0b25Hcm91cCBkYXMgVGhlbWUgXCJ3YXJuXCIgaGF0LlxyXG4gICAqXHJcbiAgICogSGllcmR1cmNoIHdpcmQgZGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIEJ1dHRvbnMgYXVmIGRpZSBXYXJuZmFyYmUgZGVzIFRoZW1lcyBnZXNldHp0LlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHdhcm46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0enQgZGllIEdydW5kZmFyYmUgZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBEaWVzZSB3aXJkIGplIG5hY2ggU3R5bGUgZGVzIEJ1dHRvbnMgYWxzIEhpbnRlcmdydW5kZmFyYmUgb2RlciBUZXh0ZmFyYmUgdmVyd2VuZGV0LlxyXG4gICAqXHJcbiAgICogRXMga8O2bm5lbiBIZXgtLCBSR0ItIG9kZXIgUkdCQS1XZXJ0ZSwgc293aWUgXCJwcmltYXJ5XCIsIFwiYWNjZW50XCIgb2RlciBcIndhcm5cIiBhbmdlZ2ViZW4gd2VyZGVuLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7YWxpYXM6ICdjb2xvcicsIHRyYW5zZm9ybTogY29sb3JUaGVtZUF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21UZXh0Q29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0enQgZGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIEJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBFcyBrw7ZubmVuIEhleC0sIFJHQi0gb2RlciBSR0JBLVdlcnRlIGFuZ2VnZWJlbiB3ZXJkZW4uXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ2JhY2tncm91bmRDb2xvcicsIHRyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tQmdDb2xvcjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkaWUgYmVudXR6ZXJkZWZpbmllcnRlIFRleHRmYXJiZSBuaWNodCBkdXJjaCBlaW4gZGVmbmllcnRlcyBUaGVtYSDDvGJlcnNjaHJpZWJlbiB3ZXJkZW4gc29sbC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBrZWVwQ3VzdG9tVGV4dENvbG9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGllIGJlbnV0emVyZGVmaW5pZXJ0ZSBIaW50ZXJncnVuZGZhcmJlIG5pY2h0IGR1cmNoIGVpbiBkZWZpbmllcnRlcyBUaGVtYSDDvGJlcnNjaHJpZWJlbiB3ZXJkZW4gc29sbC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRCdXR0b25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBrZWVwQ3VzdG9tQmdDb2xvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoe2FsaWFzOiAndW5zZWxlY3RlZEJnQ29sb3InLCB0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGN1c3RvbVRvZ2dsZVVuc2VsZWN0ZWRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe2FsaWFzOiAndW5zZWxlY3RlZFRleHRDb2xvcicsIHRyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe2FsaWFzOiAnc2VsZWN0ZWRCZ0NvbG9yJywgdHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBjdXN0b21Ub2dnbGVTZWxlY3RlZENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCh7YWxpYXM6ICdzZWxlY3RlZFRleHRDb2xvcicsIHRyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgY3VzdG9tVG9nZ2xlU2VsZWN0ZWRUZXh0Q29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRGllIE1pbmRlc3Row7ZoZSBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIG1pbkhlaWdodDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIERpZSBTY2hyaWZ0Z3LDtsOfZSBkZXMgQnV0dG9ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIGZvbnRTaXplOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlciBSYWRpdXMgZGVyIEVja2VuIGRlcyBCdXR0b25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZyB8IG51bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgYm9yZGVyUmFkaXVzOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIERhcyBLbGljay1FdmVudCBkdXJjaCBkZW4gTnV0emVyLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxFdmVudD59XHJcbiAgICogQG1lbWJlcm9mIE1yZEJ1dHRvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgaW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG5cclxuICAvKipcclxuICAgKiBEaWUgS29uZmlndXJhdGlvbiBkZXMgTXJkLUJ1dHRvbnMuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEB0eXBlIHtNcmRDb25maWdNb2RlbH1cclxuICAgKiBAbWVtYmVyb2YgTXJkQnV0dG9uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfY29uZmlnOiBNcmRDb25maWdNb2RlbCA9IENvbmZpZ1V0aWwuZ2V0Q29uZmlnKCk7XHJcblxyXG4gIHB1YmxpYyBhY3RpdmVJbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKChidXR0b246IE1yZEJ1dHRvbkNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICBidXR0b24uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gYGNhbGMoJHsxMDAgLyB0aGlzLmJ1dHRvbnMubGVuZ3RofSUgKyAyOHB4KWA7XHJcbiAgICAgIC8vIGJ1dHRvbi5mbGF0ID0gdHJ1ZTtcclxuICAgICAgYnV0dG9uLnByaW1hcnkgPSB0aGlzLnByaW1hcnk7XHJcbiAgICAgIGJ1dHRvbi5hY2NlbnQgPSB0aGlzLmFjY2VudDtcclxuICAgICAgYnV0dG9uLndhcm4gPSB0aGlzLndhcm47XHJcbiAgICAgIGJ1dHRvbi5jdXN0b21UZXh0Q29sb3IgPz89IHRoaXMuY3VzdG9tVGV4dENvbG9yO1xyXG4gICAgICBidXR0b24uY3VzdG9tQmdDb2xvciA/Pz0gdGhpcy5jdXN0b21CZ0NvbG9yO1xyXG4gICAgICBidXR0b24ua2VlcEN1c3RvbVRleHRDb2xvciB8fD0gdGhpcy5rZWVwQ3VzdG9tVGV4dENvbG9yO1xyXG4gICAgICBidXR0b24ua2VlcEN1c3RvbUJnQ29sb3IgfHw9IHRoaXMua2VlcEN1c3RvbUJnQ29sb3I7XHJcbiAgICAgIGJ1dHRvbi5jdXN0b21Ub2dnbGVVbnNlbGVjdGVkQ29sb3IgPz89IHRoaXMuY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZENvbG9yO1xyXG4gICAgICBidXR0b24uY3VzdG9tVG9nZ2xlVW5zZWxlY3RlZFRleHRDb2xvciA/Pz0gdGhpcy5jdXN0b21Ub2dnbGVVbnNlbGVjdGVkVGV4dENvbG9yO1xyXG4gICAgICBidXR0b24uY3VzdG9tVG9nZ2xlU2VsZWN0ZWRUZXh0Q29sb3IgPz89IHRoaXMuY3VzdG9tVG9nZ2xlU2VsZWN0ZWRUZXh0Q29sb3I7XHJcbiAgICAgIGJ1dHRvbi5taW5IZWlnaHQgPz89IHRoaXMubWluSGVpZ2h0O1xyXG4gICAgICBidXR0b24uZm9udFNpemUgPz89IHRoaXMuZm9udFNpemU7XHJcblxyXG4gICAgICBidXR0b24uYm9yZGVyUmFkaXVzID0gdGhpcy5ib3JkZXJSYWRpdXMgPz8gdGhpcy5yb3VuZGVkID8gJzUwcHgnIDogJzRweCc7XHJcblxyXG4gICAgICBpZiAodGhpcy5hY3RpdmVJbmRleCA9PT0gaW5kZXgpIHtcclxuICAgICAgICBidXR0b24udG9nZ2xlU2VsZWN0ZWQgPSB0aGlzLm11bHRpcGxlID8gIWJ1dHRvbi50b2dnbGVTZWxlY3RlZCA6IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGJ1dHRvbi51cGRhdGVTdHlsZSgpO1xyXG5cclxuICAgICAgdGhpcy53YXRjaChidXR0b24uY2xpY2suYXNPYnNlcnZhYmxlKCksIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBpbmRleDtcclxuICAgICAgICBidXR0b24udG9nZ2xlU2VsZWN0ZWQgPSB0aGlzLm11bHRpcGxlID8gIWJ1dHRvbi50b2dnbGVTZWxlY3RlZCA6IHRydWU7XHJcbiAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaCgoYiwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaSAhPT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICBiLnRvZ2dsZVNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgYi51cGRhdGVTdHlsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uLnVwZGF0ZVN0eWxlKCk7XHJcbiAgICAgICAgdGhpcy5pbmRleENoYW5nZS5lbWl0KGluZGV4KTtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH0pKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbiJdfQ==