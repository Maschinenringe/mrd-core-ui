import { ChangeDetectionStrategy, Component, Inject, Input, Optional, booleanAttribute } from '@angular/core';
import { MRD_MENU } from '../../common/model/mrd-menu.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../mrd-icon/components/mrd-icon.component";
const _c0 = ["mrd-menu-item", ""];
function MrdMenuItemComponent_mrd_icon_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mrd-icon", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
} }
const _c1 = ["*"];
/**
 * Eintrag in einem `mrd-menu`, am besten auf einem `button`. Ein Klick schliesst das Menue.
 * Das Icon steht vor dem Text: `icon` fuer Symbole der IconFactory, `svgIcon` fuer registrierte Icons.
 */
export class MrdMenuItemComponent {
    elementRef;
    menu;
    icon;
    svgIcon;
    disabled = false;
    istButton;
    constructor(elementRef, menu) {
        this.elementRef = elementRef;
        this.menu = menu;
        this.istButton = elementRef.nativeElement.tagName === 'BUTTON';
    }
    geklickt() {
        if (!this.disabled) {
            this.menu?.eintragGewaehlt();
        }
    }
    fokussieren() {
        this.elementRef.nativeElement.focus();
    }
    hatFokus() {
        return document.activeElement === this.elementRef.nativeElement;
    }
    /** @nocollapse */ static ɵfac = function MrdMenuItemComponent_Factory(t) { return new (t || MrdMenuItemComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(MRD_MENU, 8)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdMenuItemComponent, selectors: [["", "mrd-menu-item", ""]], hostAttrs: ["role", "menuitem", "tabindex", "-1", 1, "mrd-menu-item"], hostVars: 4, hostBindings: function MrdMenuItemComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function MrdMenuItemComponent_click_HostBindingHandler() { return ctx.geklickt(); });
        } if (rf & 2) {
            i0.ɵɵattribute("aria-disabled", ctx.disabled)("disabled", ctx.disabled && ctx.istButton ? "" : null);
            i0.ɵɵclassProp("mrd-menu-item-disabled", ctx.disabled);
        } }, inputs: { icon: "icon", svgIcon: "svgIcon", disabled: ["disabled", "disabled", booleanAttribute] }, features: [i0.ɵɵInputTransformsFeature], attrs: _c0, ngContentSelectors: _c1, decls: 3, vars: 1, consts: [["class", "mrd-menu-item-icon", "size", "20", 3, "icon", "svgIcon", 4, "ngIf"], [1, "mrd-menu-item-text"], ["size", "20", 1, "mrd-menu-item-icon", 3, "icon", "svgIcon"]], template: function MrdMenuItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, MrdMenuItemComponent_mrd_icon_0_Template, 1, 2, "mrd-icon", 0);
            i0.ɵɵelementStart(1, "span", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.icon || ctx.svgIcon);
        } }, dependencies: [i1.NgIf, i2.MrdIconComponent], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:12px;width:100%;min-height:44px;padding:0 16px;border:none;background:transparent;color:#293d4f;font:inherit;text-align:left;white-space:nowrap;cursor:pointer;outline:none}[_nghost-%COMP%]:hover, [_nghost-%COMP%]:focus-visible, [_nghost-%COMP%]:focus{background-color:#ebeff3}.mrd-menu-item-disabled[_nghost-%COMP%]{color:#949ea7;cursor:default;pointer-events:none;background:transparent}.mrd-menu-item-icon[_ngcontent-%COMP%]{flex:0 0 auto}.mrd-menu-item-text[_ngcontent-%COMP%]{flex:1 1 auto;overflow:hidden;text-overflow:ellipsis}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdMenuItemComponent, [{
        type: Component,
        args: [{ selector: '[mrd-menu-item]', host: {
                    'class': 'mrd-menu-item',
                    'role': 'menuitem',
                    'tabindex': '-1',
                    '[class.mrd-menu-item-disabled]': 'disabled',
                    '[attr.aria-disabled]': 'disabled',
                    // Bei einem button verhindert erst das native Attribut, dass (click) des Nutzers ausloest
                    '[attr.disabled]': 'disabled && istButton ? "" : null',
                    '(click)': 'geklickt()'
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<mrd-icon *ngIf=\"icon || svgIcon\" class=\"mrd-menu-item-icon\" [icon]=\"icon\" [svgIcon]=\"svgIcon\" size=\"20\"></mrd-icon>\n<span class=\"mrd-menu-item-text\"><ng-content></ng-content></span>\n", styles: [":host{display:flex;flex-direction:row;align-items:center;gap:12px;width:100%;min-height:44px;padding:0 16px;border:none;background:transparent;color:#293d4f;font:inherit;text-align:left;white-space:nowrap;cursor:pointer;outline:none}:host:hover,:host:focus-visible,:host:focus{background-color:#ebeff3}:host.mrd-menu-item-disabled{color:#949ea7;cursor:default;pointer-events:none;background:transparent}.mrd-menu-item-icon{flex:0 0 auto}.mrd-menu-item-text{flex:1 1 auto;overflow:hidden;text-overflow:ellipsis}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MRD_MENU]
            }] }]; }, { icon: [{
            type: Input
        }], svgIcon: [{
            type: Input
        }], disabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLW1lbnUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLW1lbnUvY29tcG9uZW50cy9tcmQtbWVudS1pdGVtL21yZC1tZW51LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1tZW51L2NvbXBvbmVudHMvbXJkLW1lbnUtaXRlbS9tcmQtbWVudS1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUgsT0FBTyxFQUFFLFFBQVEsRUFBcUIsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7O0lDRmhGLDhCQUFvSDs7O0lBQXZELGtDQUFhLDJCQUFBOzs7QURJMUU7OztHQUdHO0FBaUJILE1BQU0sT0FBTyxvQkFBb0I7SUFXckI7SUFDOEI7SUFWeEIsSUFBSSxDQUFnQjtJQUVwQixPQUFPLENBQVM7SUFFYSxRQUFRLEdBQVksS0FBSyxDQUFDO0lBRXZELFNBQVMsQ0FBVTtJQUVuQyxZQUNVLFVBQW1DLEVBQ0wsSUFBdUI7UUFEckQsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDTCxTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUU3RCxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQztJQUNqRSxDQUFDO0lBRU0sUUFBUTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRU0sUUFBUTtRQUNiLE9BQU8sUUFBUSxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztJQUNsRSxDQUFDO2lHQTdCVSxvQkFBb0IsNERBWVQsUUFBUTs0RkFabkIsb0JBQW9CO3FHQUFwQixjQUFVOzs7OzRGQU1GLGdCQUFnQjs7WUM5QnJDLCtFQUFvSDtZQUNwSCwrQkFBaUM7WUFBQSxrQkFBeUI7WUFBQSxpQkFBTzs7WUFEdEQsOENBQXFCOzs7dUZEd0JuQixvQkFBb0I7Y0FoQmhDLFNBQVM7MkJBQ0UsaUJBQWlCLFFBR3JCO29CQUNKLE9BQU8sRUFBRSxlQUFlO29CQUN4QixNQUFNLEVBQUUsVUFBVTtvQkFDbEIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLGdDQUFnQyxFQUFFLFVBQVU7b0JBQzVDLHNCQUFzQixFQUFFLFVBQVU7b0JBQ2xDLDBGQUEwRjtvQkFDMUYsaUJBQWlCLEVBQUUsbUNBQW1DO29CQUN0RCxTQUFTLEVBQUUsWUFBWTtpQkFDeEIsbUJBQ2dCLHVCQUF1QixDQUFDLE1BQU07O3NCQWM1QyxRQUFROztzQkFBSSxNQUFNO3VCQUFDLFFBQVE7d0JBVmQsSUFBSTtrQkFBbkIsS0FBSztZQUVVLE9BQU87a0JBQXRCLEtBQUs7WUFFdUMsUUFBUTtrQkFBcEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE9wdGlvbmFsLCBib29sZWFuQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNcmRJY29uU3ltYm9sIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3NlcnZpY2UvbXJkLWljb24tc3ltYm9sLXJlZ2lzdHJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgTVJEX01FTlUsIE1yZE1lbnVFbHRlcm50ZWlsIH0gZnJvbSAnLi4vLi4vY29tbW9uL21vZGVsL21yZC1tZW51Lm1vZGVsJztcblxuLyoqXG4gKiBFaW50cmFnIGluIGVpbmVtIGBtcmQtbWVudWAsIGFtIGJlc3RlbiBhdWYgZWluZW0gYGJ1dHRvbmAuIEVpbiBLbGljayBzY2hsaWVzc3QgZGFzIE1lbnVlLlxuICogRGFzIEljb24gc3RlaHQgdm9yIGRlbSBUZXh0OiBgaWNvbmAgZnVlciBTeW1ib2xlIGRlciBJY29uRmFjdG9yeSwgYHN2Z0ljb25gIGZ1ZXIgcmVnaXN0cmllcnRlIEljb25zLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbXJkLW1lbnUtaXRlbV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLW1lbnUtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21yZC1tZW51LWl0ZW0uY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtcmQtbWVudS1pdGVtJyxcbiAgICAncm9sZSc6ICdtZW51aXRlbScsXG4gICAgJ3RhYmluZGV4JzogJy0xJyxcbiAgICAnW2NsYXNzLm1yZC1tZW51LWl0ZW0tZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgICAnW2F0dHIuYXJpYS1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICAgIC8vIEJlaSBlaW5lbSBidXR0b24gdmVyaGluZGVydCBlcnN0IGRhcyBuYXRpdmUgQXR0cmlidXQsIGRhc3MgKGNsaWNrKSBkZXMgTnV0emVycyBhdXNsb2VzdFxuICAgICdbYXR0ci5kaXNhYmxlZF0nOiAnZGlzYWJsZWQgJiYgaXN0QnV0dG9uID8gXCJcIiA6IG51bGwnLFxuICAgICcoY2xpY2spJzogJ2dla2xpY2t0KCknXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE1yZE1lbnVJdGVtQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBwdWJsaWMgaWNvbjogTXJkSWNvblN5bWJvbDtcblxuICBASW5wdXQoKSBwdWJsaWMgc3ZnSWNvbjogc3RyaW5nO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIHJlYWRvbmx5IGlzdEJ1dHRvbjogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTVJEX01FTlUpIHByaXZhdGUgbWVudTogTXJkTWVudUVsdGVybnRlaWxcbiAgKSB7XG4gICAgdGhpcy5pc3RCdXR0b24gPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudGFnTmFtZSA9PT0gJ0JVVFRPTic7XG4gIH1cblxuICBwdWJsaWMgZ2VrbGlja3QoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLm1lbnU/LmVpbnRyYWdHZXdhZWhsdCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb2t1c3NpZXJlbigpOiB2b2lkIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgcHVibGljIGhhdEZva3VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuIiwiPG1yZC1pY29uICpuZ0lmPVwiaWNvbiB8fCBzdmdJY29uXCIgY2xhc3M9XCJtcmQtbWVudS1pdGVtLWljb25cIiBbaWNvbl09XCJpY29uXCIgW3N2Z0ljb25dPVwic3ZnSWNvblwiIHNpemU9XCIyMFwiPjwvbXJkLWljb24+XG48c3BhbiBjbGFzcz1cIm1yZC1tZW51LWl0ZW0tdGV4dFwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3NwYW4+XG4iXX0=