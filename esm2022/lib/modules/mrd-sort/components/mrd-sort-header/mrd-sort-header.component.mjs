import { ChangeDetectionStrategy, Component, Input, Optional, booleanAttribute } from '@angular/core';
import { sizeAttribute } from '../../../../common/transforms/size-transform';
import { ConfigUtil } from '../../../../common/util/config.util';
import * as i0 from "@angular/core";
import * as i1 from "../../common/directive/mrd-sort.directive";
const _c0 = ["mrd-sort-header", ""];
const _c1 = ["*"];
/**
 * Sortierbarer Spaltenkopf innerhalb von `[mrdSort]`; funktioniert auf `th` wie auf beliebigen Elementen.
 * Der Pfeil uebernimmt die Textfarbe; bei inaktiver Spalte erscheint er nur beim Hovern.
 */
export class MrdSortHeaderComponent {
    sort;
    id;
    /** Richtung beim ersten Klick, abweichend von `mrdSortStart` (z. B. Datum zuerst absteigend) */
    start;
    disabled = false;
    /** `before` fuer rechtsbuendige Spalten, damit der Text buendig bleibt */
    arrowPosition = 'after';
    arrowSize;
    config = ConfigUtil.getConfig();
    abo;
    constructor(sort, cdr) {
        this.sort = sort;
        if (!sort) {
            throw new Error('mrd-sort-header muss innerhalb eines Elements mit [mrdSort] stehen.');
        }
        this.abo = sort.zustandGeaendert.subscribe(() => cdr.markForCheck());
    }
    ngOnDestroy() {
        this.abo.unsubscribe();
    }
    get aktiv() {
        return this.sort.active === this.id && !!this.sort.direction;
    }
    get absteigend() {
        return this.aktiv && this.sort.direction === 'desc';
    }
    get gesperrt() {
        return this.disabled || this.sort.disabled;
    }
    get ariaSort() {
        if (!this.aktiv) {
            return 'none';
        }
        return this.absteigend ? 'descending' : 'ascending';
    }
    sortieren() {
        if (!this.gesperrt) {
            this.sort.sortieren(this.id, this.start);
        }
    }
    tasteGedrueckt(event) {
        if (event.target !== event.currentTarget) {
            return;
        }
        event.preventDefault();
        this.sortieren();
    }
    /** @nocollapse */ static ɵfac = function MrdSortHeaderComponent_Factory(t) { return new (t || MrdSortHeaderComponent)(i0.ɵɵdirectiveInject(i1.MrdSortDirective, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdSortHeaderComponent, selectors: [["", "mrd-sort-header", ""]], hostAttrs: [1, "mrd-sort-header"], hostVars: 8, hostBindings: function MrdSortHeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function MrdSortHeaderComponent_click_HostBindingHandler() { return ctx.sortieren(); })("keydown.enter", function MrdSortHeaderComponent_keydown_enter_HostBindingHandler($event) { return ctx.tasteGedrueckt($event); })("keydown.space", function MrdSortHeaderComponent_keydown_space_HostBindingHandler($event) { return ctx.tasteGedrueckt($event); });
        } if (rf & 2) {
            i0.ɵɵattribute("aria-sort", ctx.ariaSort)("tabindex", ctx.gesperrt ? null : 0);
            i0.ɵɵstyleProp("--mrd-sort-pfeil-groesse", ctx.arrowSize || ctx.config.sort.arrowSize);
            i0.ɵɵclassProp("mrd-sort-header-aktiv", ctx.aktiv)("mrd-sort-header-disabled", ctx.gesperrt);
        } }, inputs: { id: ["mrd-sort-header", "id"], start: "start", disabled: ["disabled", "disabled", booleanAttribute], arrowPosition: "arrowPosition", arrowSize: ["arrowSize", "arrowSize", sizeAttribute] }, features: [i0.ɵɵInputTransformsFeature], attrs: _c0, ngContentSelectors: _c1, decls: 5, vars: 4, consts: [[1, "mrd-sort-header-container"], [1, "mrd-sort-header-inhalt"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mrd-sort-header-pfeil"], ["d", "M13 20h-2V8l-5.5 5.5-1.42-1.42L12 4.16l7.92 7.92-1.42 1.42L13 8v12z"]], template: function MrdSortHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "span", 0)(1, "span", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(3, "svg", 2);
            i0.ɵɵelement(4, "path", 3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵclassProp("mrd-sort-header-pfeil-vorne", ctx.arrowPosition === "before");
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("mrd-sort-header-pfeil-absteigend", ctx.absteigend);
        } }, styles: ["[_nghost-%COMP%]{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}[_nghost-%COMP%]:focus-visible   .mrd-sort-header-container[_ngcontent-%COMP%]{box-shadow:0 0 0 2px currentColor;border-radius:2px}.mrd-sort-header-disabled[_nghost-%COMP%]{cursor:default}.mrd-sort-header-container[_ngcontent-%COMP%]{display:inline-flex;flex-direction:row;align-items:center;gap:4px;max-width:100%}.mrd-sort-header-container.mrd-sort-header-pfeil-vorne[_ngcontent-%COMP%]{flex-direction:row-reverse}.mrd-sort-header-inhalt[_ngcontent-%COMP%]{min-width:0}.mrd-sort-header-pfeil[_ngcontent-%COMP%]{flex:0 0 auto;width:var(--mrd-sort-pfeil-groesse);height:var(--mrd-sort-pfeil-groesse);fill:currentColor;opacity:0;transition:opacity .15s ease,transform .15s ease}.mrd-sort-header-pfeil.mrd-sort-header-pfeil-absteigend[_ngcontent-%COMP%]{transform:rotate(180deg)}[_nghost-%COMP%]:not(.mrd-sort-header-disabled):hover   .mrd-sort-header-pfeil[_ngcontent-%COMP%]{opacity:.5}.mrd-sort-header-aktiv[_nghost-%COMP%]   .mrd-sort-header-pfeil[_ngcontent-%COMP%]{opacity:1}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdSortHeaderComponent, [{
        type: Component,
        args: [{ selector: '[mrd-sort-header]', host: {
                    'class': 'mrd-sort-header',
                    '[class.mrd-sort-header-aktiv]': 'aktiv',
                    '[class.mrd-sort-header-disabled]': 'gesperrt',
                    '[attr.aria-sort]': 'ariaSort',
                    '[attr.tabindex]': 'gesperrt ? null : 0',
                    '[style.--mrd-sort-pfeil-groesse]': 'arrowSize || config.sort.arrowSize',
                    '(click)': 'sortieren()',
                    '(keydown.enter)': 'tasteGedrueckt($event)',
                    '(keydown.space)': 'tasteGedrueckt($event)'
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<span class=\"mrd-sort-header-container\" [class.mrd-sort-header-pfeil-vorne]=\"arrowPosition === 'before'\">\n  <span class=\"mrd-sort-header-inhalt\"><ng-content></ng-content></span>\n  <svg class=\"mrd-sort-header-pfeil\" [class.mrd-sort-header-pfeil-absteigend]=\"absteigend\" viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n    <path d=\"M13 20h-2V8l-5.5 5.5-1.42-1.42L12 4.16l7.92 7.92-1.42 1.42L13 8v12z\"></path>\n  </svg>\n</span>\n", styles: [":host{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}:host(:focus-visible) .mrd-sort-header-container{box-shadow:0 0 0 2px currentColor;border-radius:2px}:host(.mrd-sort-header-disabled){cursor:default}.mrd-sort-header-container{display:inline-flex;flex-direction:row;align-items:center;gap:4px;max-width:100%}.mrd-sort-header-container.mrd-sort-header-pfeil-vorne{flex-direction:row-reverse}.mrd-sort-header-inhalt{min-width:0}.mrd-sort-header-pfeil{flex:0 0 auto;width:var(--mrd-sort-pfeil-groesse);height:var(--mrd-sort-pfeil-groesse);fill:currentColor;opacity:0;transition:opacity .15s ease,transform .15s ease}.mrd-sort-header-pfeil.mrd-sort-header-pfeil-absteigend{transform:rotate(180deg)}:host(:not(.mrd-sort-header-disabled):hover) .mrd-sort-header-pfeil{opacity:.5}:host(.mrd-sort-header-aktiv) .mrd-sort-header-pfeil{opacity:1}\n"] }]
    }], function () { return [{ type: i1.MrdSortDirective, decorators: [{
                type: Optional
            }] }, { type: i0.ChangeDetectorRef }]; }, { id: [{
            type: Input,
            args: [{ alias: 'mrd-sort-header', required: true }]
        }], start: [{
            type: Input
        }], disabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], arrowPosition: [{
            type: Input
        }], arrowSize: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXNvcnQtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtc29ydC9jb21wb25lbnRzL21yZC1zb3J0LWhlYWRlci9tcmQtc29ydC1oZWFkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1zb3J0L2NvbXBvbmVudHMvbXJkLXNvcnQtaGVhZGVyL21yZC1zb3J0LWhlYWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxLQUFLLEVBQWEsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBJLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUU3RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7O0FBSWpFOzs7R0FHRztBQWtCSCxNQUFNLE9BQU8sc0JBQXNCO0lBbUJYO0lBakJvQyxFQUFFLENBQVM7SUFFckUsZ0dBQWdHO0lBQ2hGLEtBQUssQ0FBZ0M7SUFFUixRQUFRLEdBQVksS0FBSyxDQUFDO0lBRXZFLDBFQUEwRTtJQUMxRCxhQUFhLEdBQXlCLE9BQU8sQ0FBQztJQUVwQixTQUFTLENBQVM7SUFFNUMsTUFBTSxHQUFtQixVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7SUFFL0MsR0FBRyxDQUFlO0lBRW5DLFlBQ3NCLElBQXNCLEVBQzFDLEdBQXNCO1FBREYsU0FBSSxHQUFKLElBQUksQ0FBa0I7UUFHMUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMscUVBQXFFLENBQUMsQ0FBQztTQUN4RjtRQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDL0QsQ0FBQztJQUVELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDO0lBQ3RELENBQUM7SUFFRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzdDLENBQUM7SUFFRCxJQUFXLFFBQVE7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFPLE1BQU0sQ0FBQztTQUNmO1FBQ0QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUN0RCxDQUFDO0lBRU0sU0FBUztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQUVNLGNBQWMsQ0FBQyxLQUFvQjtRQUN4QyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLGFBQWEsRUFBRTtZQUN4QyxPQUFPO1NBQ1I7UUFDRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7bUdBL0RVLHNCQUFzQjs0RkFBdEIsc0JBQXNCO3VHQUF0QixlQUFXLHdHQUFYLDBCQUFzQix3R0FBdEIsMEJBQXNCOzs7Ozt5R0FPZCxnQkFBZ0IseUVBS2hCLGFBQWE7O1lDekNsQywrQkFBeUcsY0FBQTtZQUNsRSxrQkFBeUI7WUFBQSxpQkFBTztZQUNyRSxtQkFBZ0k7WUFBaEksOEJBQWdJO1lBQzlILDBCQUFxRjtZQUN2RixpQkFBTSxFQUFBOztZQUpnQyw2RUFBZ0U7WUFFbkUsZUFBcUQ7WUFBckQsa0VBQXFEOzs7dUZEMkI3RSxzQkFBc0I7Y0FqQmxDLFNBQVM7MkJBQ0UsbUJBQW1CLFFBR3ZCO29CQUNKLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLCtCQUErQixFQUFFLE9BQU87b0JBQ3hDLGtDQUFrQyxFQUFFLFVBQVU7b0JBQzlDLGtCQUFrQixFQUFFLFVBQVU7b0JBQzlCLGlCQUFpQixFQUFFLHFCQUFxQjtvQkFDeEMsa0NBQWtDLEVBQUUsb0NBQW9DO29CQUN4RSxTQUFTLEVBQUUsYUFBYTtvQkFDeEIsaUJBQWlCLEVBQUUsd0JBQXdCO29CQUMzQyxpQkFBaUIsRUFBRSx3QkFBd0I7aUJBQzVDLG1CQUNnQix1QkFBdUIsQ0FBQyxNQUFNOztzQkFxQjVDLFFBQVE7d0RBakIrQyxFQUFFO2tCQUEzRCxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7WUFHakMsS0FBSztrQkFBcEIsS0FBSztZQUV1QyxRQUFRO2tCQUFwRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBR3BCLGFBQWE7a0JBQTVCLEtBQUs7WUFFb0MsU0FBUztrQkFBbEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT3B0aW9uYWwsIGJvb2xlYW5BdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2l6ZUF0dHJpYnV0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi90cmFuc2Zvcm1zL3NpemUtdHJhbnNmb3JtJztcbmltcG9ydCB7IE1yZENvbmZpZ01vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21vZGVsL2NvbmZpZy5tb2RlbCc7XG5pbXBvcnQgeyBDb25maWdVdGlsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29uZmlnLnV0aWwnO1xuaW1wb3J0IHsgTXJkU29ydERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9kaXJlY3RpdmUvbXJkLXNvcnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1yZFNvcnRBcnJvd1Bvc2l0aW9uLCBNcmRTb3J0RGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vY29tbW9uL21vZGVsL21yZC1zb3J0Lm1vZGVsJztcblxuLyoqXG4gKiBTb3J0aWVyYmFyZXIgU3BhbHRlbmtvcGYgaW5uZXJoYWxiIHZvbiBgW21yZFNvcnRdYDsgZnVua3Rpb25pZXJ0IGF1ZiBgdGhgIHdpZSBhdWYgYmVsaWViaWdlbiBFbGVtZW50ZW4uXG4gKiBEZXIgUGZlaWwgdWViZXJuaW1tdCBkaWUgVGV4dGZhcmJlOyBiZWkgaW5ha3RpdmVyIFNwYWx0ZSBlcnNjaGVpbnQgZXIgbnVyIGJlaW0gSG92ZXJuLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbXJkLXNvcnQtaGVhZGVyXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtc29ydC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tcmQtc29ydC1oZWFkZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtcmQtc29ydC1oZWFkZXInLFxuICAgICdbY2xhc3MubXJkLXNvcnQtaGVhZGVyLWFrdGl2XSc6ICdha3RpdicsXG4gICAgJ1tjbGFzcy5tcmQtc29ydC1oZWFkZXItZGlzYWJsZWRdJzogJ2dlc3BlcnJ0JyxcbiAgICAnW2F0dHIuYXJpYS1zb3J0XSc6ICdhcmlhU29ydCcsXG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICdnZXNwZXJydCA/IG51bGwgOiAwJyxcbiAgICAnW3N0eWxlLi0tbXJkLXNvcnQtcGZlaWwtZ3JvZXNzZV0nOiAnYXJyb3dTaXplIHx8IGNvbmZpZy5zb3J0LmFycm93U2l6ZScsXG4gICAgJyhjbGljayknOiAnc29ydGllcmVuKCknLFxuICAgICcoa2V5ZG93bi5lbnRlciknOiAndGFzdGVHZWRydWVja3QoJGV2ZW50KScsXG4gICAgJyhrZXlkb3duLnNwYWNlKSc6ICd0YXN0ZUdlZHJ1ZWNrdCgkZXZlbnQpJ1xuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNcmRTb3J0SGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICBASW5wdXQoe2FsaWFzOiAnbXJkLXNvcnQtaGVhZGVyJywgcmVxdWlyZWQ6IHRydWV9KSBwdWJsaWMgaWQ6IHN0cmluZztcblxuICAvKiogUmljaHR1bmcgYmVpbSBlcnN0ZW4gS2xpY2ssIGFid2VpY2hlbmQgdm9uIGBtcmRTb3J0U3RhcnRgICh6LiBCLiBEYXR1bSB6dWVyc3QgYWJzdGVpZ2VuZCkgKi9cbiAgQElucHV0KCkgcHVibGljIHN0YXJ0OiBFeGNsdWRlPE1yZFNvcnREaXJlY3Rpb24sICcnPjtcblxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBgYmVmb3JlYCBmdWVyIHJlY2h0c2J1ZW5kaWdlIFNwYWx0ZW4sIGRhbWl0IGRlciBUZXh0IGJ1ZW5kaWcgYmxlaWJ0ICovXG4gIEBJbnB1dCgpIHB1YmxpYyBhcnJvd1Bvc2l0aW9uOiBNcmRTb3J0QXJyb3dQb3NpdGlvbiA9ICdhZnRlcic7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBwdWJsaWMgYXJyb3dTaXplOiBzdHJpbmc7XG5cbiAgcHVibGljIHJlYWRvbmx5IGNvbmZpZzogTXJkQ29uZmlnTW9kZWwgPSBDb25maWdVdGlsLmdldENvbmZpZygpO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgYWJvOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBzb3J0OiBNcmRTb3J0RGlyZWN0aXZlLFxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgaWYgKCFzb3J0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21yZC1zb3J0LWhlYWRlciBtdXNzIGlubmVyaGFsYiBlaW5lcyBFbGVtZW50cyBtaXQgW21yZFNvcnRdIHN0ZWhlbi4nKTtcbiAgICB9XG4gICAgdGhpcy5hYm8gPSBzb3J0Lnp1c3RhbmRHZWFlbmRlcnQuc3Vic2NyaWJlKCgpID0+IGNkci5tYXJrRm9yQ2hlY2soKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmFiby51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIGdldCBha3RpdigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0LmFjdGl2ZSA9PT0gdGhpcy5pZCAmJiAhIXRoaXMuc29ydC5kaXJlY3Rpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFic3RlaWdlbmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWt0aXYgJiYgdGhpcy5zb3J0LmRpcmVjdGlvbiA9PT0gJ2Rlc2MnO1xuICB9XG5cbiAgcHVibGljIGdldCBnZXNwZXJydCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCB8fCB0aGlzLnNvcnQuZGlzYWJsZWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFyaWFTb3J0KCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLmFrdGl2KSB7XG4gICAgICByZXR1cm4gJ25vbmUnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hYnN0ZWlnZW5kID8gJ2Rlc2NlbmRpbmcnIDogJ2FzY2VuZGluZyc7XG4gIH1cblxuICBwdWJsaWMgc29ydGllcmVuKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5nZXNwZXJydCkge1xuICAgICAgdGhpcy5zb3J0LnNvcnRpZXJlbih0aGlzLmlkLCB0aGlzLnN0YXJ0KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdGFzdGVHZWRydWVja3QoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zb3J0aWVyZW4oKTtcbiAgfVxufVxuIiwiPHNwYW4gY2xhc3M9XCJtcmQtc29ydC1oZWFkZXItY29udGFpbmVyXCIgW2NsYXNzLm1yZC1zb3J0LWhlYWRlci1wZmVpbC12b3JuZV09XCJhcnJvd1Bvc2l0aW9uID09PSAnYmVmb3JlJ1wiPlxuICA8c3BhbiBjbGFzcz1cIm1yZC1zb3J0LWhlYWRlci1pbmhhbHRcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPlxuICA8c3ZnIGNsYXNzPVwibXJkLXNvcnQtaGVhZGVyLXBmZWlsXCIgW2NsYXNzLm1yZC1zb3J0LWhlYWRlci1wZmVpbC1hYnN0ZWlnZW5kXT1cImFic3RlaWdlbmRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgPHBhdGggZD1cIk0xMyAyMGgtMlY4bC01LjUgNS41LTEuNDItMS40MkwxMiA0LjE2bDcuOTIgNy45Mi0xLjQyIDEuNDJMMTMgOHYxMnpcIj48L3BhdGg+XG4gIDwvc3ZnPlxuPC9zcGFuPlxuIl19