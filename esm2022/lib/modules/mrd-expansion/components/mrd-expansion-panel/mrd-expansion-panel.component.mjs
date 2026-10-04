import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Inject, Input, Optional, Output, booleanAttribute } from '@angular/core';
import { Subject } from 'rxjs';
import { colorAttribute } from '../../../../common/transforms/color-transform';
import { sizeAttribute } from '../../../../common/transforms/size-transform';
import { ConfigUtil } from '../../../../common/util/config.util';
import { MRD_ACCORDION } from '../../common/model/mrd-accordion.model';
import { MrdExpansionPanelContentDirective } from '../../common/directive/mrd-expansion-panel-content.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MrdExpansionPanelComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.lazyInhalt.templateRef);
} }
const _c0 = [[["mrd-expansion-panel-header"]], "*"];
const _c1 = ["mrd-expansion-panel-header", "*"];
let naechsteId = 0;
/**
 * Aufklappbarer Bereich mit `mrd-expansion-panel-header` als Kopf. Einzeln nutzbar oder innerhalb von `mrd-accordion`.
 * Inhalt als `ng-content` (sofort erzeugt) oder als `<ng-template mrdExpansionPanelContent>` (erst beim ersten Aufklappen).
 */
export class MrdExpansionPanelComponent {
    cdr;
    accordion;
    set expanded(value) {
        this.geoeffnetSetzen(value, false);
    }
    get expanded() {
        return this._expanded;
    }
    _expanded = false;
    set disabled(value) {
        this._disabled = value;
        this.zustandGeaendert.next();
    }
    get disabled() {
        return this._disabled;
    }
    _disabled = false;
    hideToggle = false;
    togglePosition = 'after';
    headerHeight;
    headerPadding;
    headerBackground;
    headerColor;
    background;
    /** Nur bei Bedienung ueber den Kopf oder open()/close()/toggle(), nicht beim Setzen von `expanded` */
    expandedChange = new EventEmitter();
    opened = new EventEmitter();
    closed = new EventEmitter();
    lazyInhalt;
    /** Informiert den Kopf (OnPush) ueber Aenderungen */
    zustandGeaendert = new Subject();
    config = ConfigUtil.getConfig();
    id = `mrd-expansion-panel-${naechsteId++}`;
    /** Lazy-Inhalt bleibt nach dem ersten Aufklappen erhalten, damit Zustand (z. B. Formulare) nicht verloren geht */
    inhaltErzeugt = false;
    constructor(cdr, accordion) {
        this.cdr = cdr;
        this.accordion = accordion;
        this.accordion?.registrieren(this);
    }
    ngOnDestroy() {
        this.accordion?.abmelden(this);
        this.zustandGeaendert.complete();
    }
    open() {
        this.geoeffnetSetzen(true, true);
    }
    close() {
        this.geoeffnetSetzen(false, true);
    }
    toggle() {
        this.geoeffnetSetzen(!this._expanded, true);
    }
    get headerId() {
        return `${this.id}-kopf`;
    }
    get inhaltId() {
        return `${this.id}-inhalt`;
    }
    geoeffnetSetzen(geoeffnet, ausgeben) {
        geoeffnet = !!geoeffnet;
        if (geoeffnet === this._expanded) {
            return;
        }
        this._expanded = geoeffnet;
        if (geoeffnet) {
            this.inhaltErzeugt = true;
            this.accordion?.panelGeoeffnet(this);
        }
        if (ausgeben) {
            this.expandedChange.emit(geoeffnet);
        }
        // opened/closed auch beim Setzen per Input, damit z. B. Nachladen beim Oeffnen in jedem Fall greift
        if (geoeffnet) {
            this.opened.emit();
        }
        else {
            this.closed.emit();
        }
        this.zustandGeaendert.next();
        this.cdr.markForCheck();
    }
    /** @nocollapse */ static ɵfac = function MrdExpansionPanelComponent_Factory(t) { return new (t || MrdExpansionPanelComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(MRD_ACCORDION, 8)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdExpansionPanelComponent, selectors: [["mrd-expansion-panel"]], contentQueries: function MrdExpansionPanelComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, MrdExpansionPanelContentDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.lazyInhalt = _t.first);
        } }, hostVars: 16, hostBindings: function MrdExpansionPanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("--mrd-expansion-panel-header-height", ctx.headerHeight || ctx.config.expansionPanel.headerHeight)("--mrd-expansion-panel-header-padding", ctx.headerPadding || ctx.config.expansionPanel.headerPadding)("--mrd-expansion-panel-header-background", ctx.headerBackground || ctx.config.expansionPanel.headerBackground)("--mrd-expansion-panel-header-color", ctx.headerColor || ctx.config.expansionPanel.headerColor)("--mrd-expansion-panel-background", ctx.background || ctx.config.expansionPanel.background)("--mrd-expansion-panel-dauer", ctx.config.expansionPanel.animationDuration);
            i0.ɵɵclassProp("mrd-expansion-panel-offen", ctx.expanded)("mrd-expansion-panel-disabled", ctx.disabled);
        } }, inputs: { expanded: ["expanded", "expanded", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], hideToggle: ["hideToggle", "hideToggle", booleanAttribute], togglePosition: "togglePosition", headerHeight: ["headerHeight", "headerHeight", sizeAttribute], headerPadding: "headerPadding", headerBackground: ["headerBackground", "headerBackground", colorAttribute], headerColor: ["headerColor", "headerColor", colorAttribute], background: ["background", "background", colorAttribute] }, outputs: { expandedChange: "expandedChange", opened: "opened", closed: "closed" }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c1, decls: 5, vars: 3, consts: [["role", "region", 1, "mrd-expansion-panel-koerper"], [1, "mrd-expansion-panel-inhalt"], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "ngTemplateOutlet"]], template: function MrdExpansionPanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵprojection(0);
            i0.ɵɵelementStart(1, "div", 0)(2, "div", 1);
            i0.ɵɵprojection(3, 1);
            i0.ɵɵtemplate(4, MrdExpansionPanelComponent_ng_container_4_Template, 1, 1, "ng-container", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵattribute("id", ctx.inhaltId)("aria-labelledby", ctx.headerId);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.lazyInhalt && ctx.inhaltErzeugt);
        } }, dependencies: [i1.NgIf, i1.NgTemplateOutlet], styles: ["[_nghost-%COMP%]{display:block;background:var(--mrd-expansion-panel-background)}.mrd-expansion-panel-koerper[_ngcontent-%COMP%]{display:grid;grid-template-rows:0fr;visibility:hidden;transition:grid-template-rows var(--mrd-expansion-panel-dauer) ease,visibility 0s linear var(--mrd-expansion-panel-dauer)}.mrd-expansion-panel-offen[_nghost-%COMP%]   .mrd-expansion-panel-koerper[_ngcontent-%COMP%]{grid-template-rows:1fr;visibility:visible;transition:grid-template-rows var(--mrd-expansion-panel-dauer) ease,visibility 0s}.mrd-expansion-panel-inhalt[_ngcontent-%COMP%]{min-height:0;overflow:hidden}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdExpansionPanelComponent, [{
        type: Component,
        args: [{ selector: 'mrd-expansion-panel', host: {
                    '[class.mrd-expansion-panel-offen]': 'expanded',
                    '[class.mrd-expansion-panel-disabled]': 'disabled',
                    '[style.--mrd-expansion-panel-header-height]': 'headerHeight || config.expansionPanel.headerHeight',
                    '[style.--mrd-expansion-panel-header-padding]': 'headerPadding || config.expansionPanel.headerPadding',
                    '[style.--mrd-expansion-panel-header-background]': 'headerBackground || config.expansionPanel.headerBackground',
                    '[style.--mrd-expansion-panel-header-color]': 'headerColor || config.expansionPanel.headerColor',
                    '[style.--mrd-expansion-panel-background]': 'background || config.expansionPanel.background',
                    '[style.--mrd-expansion-panel-dauer]': 'config.expansionPanel.animationDuration'
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content select=\"mrd-expansion-panel-header\"></ng-content>\n<div class=\"mrd-expansion-panel-koerper\" role=\"region\" [attr.id]=\"inhaltId\" [attr.aria-labelledby]=\"headerId\">\n  <div class=\"mrd-expansion-panel-inhalt\">\n    <ng-content></ng-content>\n    <ng-container *ngIf=\"lazyInhalt && inhaltErzeugt\" [ngTemplateOutlet]=\"lazyInhalt.templateRef\"></ng-container>\n  </div>\n</div>\n", styles: [":host{display:block;background:var(--mrd-expansion-panel-background)}.mrd-expansion-panel-koerper{display:grid;grid-template-rows:0fr;visibility:hidden;transition:grid-template-rows var(--mrd-expansion-panel-dauer) ease,visibility 0s linear var(--mrd-expansion-panel-dauer)}:host(.mrd-expansion-panel-offen) .mrd-expansion-panel-koerper{grid-template-rows:1fr;visibility:visible;transition:grid-template-rows var(--mrd-expansion-panel-dauer) ease,visibility 0s}.mrd-expansion-panel-inhalt{min-height:0;overflow:hidden}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MRD_ACCORDION]
            }] }]; }, { expanded: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], disabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], hideToggle: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], togglePosition: [{
            type: Input
        }], headerHeight: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], headerPadding: [{
            type: Input
        }], headerBackground: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], headerColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], background: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], expandedChange: [{
            type: Output
        }], opened: [{
            type: Output
        }], closed: [{
            type: Output
        }], lazyInhalt: [{
            type: ContentChild,
            args: [MrdExpansionPanelContentDirective]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWV4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWV4cGFuc2lvbi9jb21wb25lbnRzL21yZC1leHBhbnNpb24tcGFuZWwvbXJkLWV4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWV4cGFuc2lvbi9jb21wb25lbnRzL21yZC1leHBhbnNpb24tcGFuZWwvbXJkLWV4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQWEsUUFBUSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoTCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFN0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQW1FLE1BQU0sd0NBQXdDLENBQUM7QUFDeEksT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sOERBQThELENBQUM7Ozs7SUNIN0csMkJBQTZHOzs7SUFBM0QsZ0VBQTJDOzs7O0FES2pHLElBQUksVUFBVSxHQUFXLENBQUMsQ0FBQztBQUUzQjs7O0dBR0c7QUFpQkgsTUFBTSxPQUFPLDBCQUEwQjtJQXFEM0I7SUFDbUM7SUFwRDdDLElBQWlE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RSxnQkFBZ0IsRUFBQztZQVNTLFVBQVU7a0JBQXRELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFcEIsY0FBYztrQkFBN0IsS0FBSztZQUVvQyxZQUFZO2tCQUFyRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGFBQWEsRUFBQztZQUVqQixhQUFhO2tCQUE1QixLQUFLO1lBRXFDLGdCQUFnQjtrQkFBMUQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxjQUFjLEVBQUM7WUFFUyxXQUFXO2tCQUFyRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGNBQWMsRUFBQztZQUVTLFVBQVU7a0JBQXBELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsY0FBYyxFQUFDO1lBR2pCLGNBQWM7a0JBQTlCLE1BQU07WUFFVSxNQUFNO2tCQUF0QixNQUFNO1lBRVUsTUFBTTtrQkFBdEIsTUFBTTtZQUVpRCxVQUFVO2tCQUFqRSxZQUFZO21CQUFDLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgT25EZXN0cm95LCBPcHRpb25hbCwgT3V0cHV0LCBib29sZWFuQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjb2xvckF0dHJpYnV0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi90cmFuc2Zvcm1zL2NvbG9yLXRyYW5zZm9ybSc7XG5pbXBvcnQgeyBzaXplQXR0cmlidXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvc2l6ZS10cmFuc2Zvcm0nO1xuaW1wb3J0IHsgTXJkQ29uZmlnTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vbW9kZWwvY29uZmlnLm1vZGVsJztcbmltcG9ydCB7IENvbmZpZ1V0aWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb25maWcudXRpbCc7XG5pbXBvcnQgeyBNUkRfQUNDT1JESU9OLCBNcmRBY2NvcmRpb25CYXNlLCBNcmRBY2NvcmRpb25QYW5lbCwgTXJkRXhwYW5zaW9uVG9nZ2xlUG9zaXRpb24gfSBmcm9tICcuLi8uLi9jb21tb24vbW9kZWwvbXJkLWFjY29yZGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBNcmRFeHBhbnNpb25QYW5lbENvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9jb21tb24vZGlyZWN0aXZlL21yZC1leHBhbnNpb24tcGFuZWwtY29udGVudC5kaXJlY3RpdmUnO1xuXG5sZXQgbmFlY2hzdGVJZDogbnVtYmVyID0gMDtcblxuLyoqXG4gKiBBdWZrbGFwcGJhcmVyIEJlcmVpY2ggbWl0IGBtcmQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcmAgYWxzIEtvcGYuIEVpbnplbG4gbnV0emJhciBvZGVyIGlubmVyaGFsYiB2b24gYG1yZC1hY2NvcmRpb25gLlxuICogSW5oYWx0IGFscyBgbmctY29udGVudGAgKHNvZm9ydCBlcnpldWd0KSBvZGVyIGFscyBgPG5nLXRlbXBsYXRlIG1yZEV4cGFuc2lvblBhbmVsQ29udGVudD5gIChlcnN0IGJlaW0gZXJzdGVuIEF1ZmtsYXBwZW4pLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtcmQtZXhwYW5zaW9uLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1leHBhbnNpb24tcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tcmQtZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLm1yZC1leHBhbnNpb24tcGFuZWwtb2ZmZW5dJzogJ2V4cGFuZGVkJyxcbiAgICAnW2NsYXNzLm1yZC1leHBhbnNpb24tcGFuZWwtZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgICAnW3N0eWxlLi0tbXJkLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItaGVpZ2h0XSc6ICdoZWFkZXJIZWlnaHQgfHwgY29uZmlnLmV4cGFuc2lvblBhbmVsLmhlYWRlckhlaWdodCcsXG4gICAgJ1tzdHlsZS4tLW1yZC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXBhZGRpbmddJzogJ2hlYWRlclBhZGRpbmcgfHwgY29uZmlnLmV4cGFuc2lvblBhbmVsLmhlYWRlclBhZGRpbmcnLFxuICAgICdbc3R5bGUuLS1tcmQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1iYWNrZ3JvdW5kXSc6ICdoZWFkZXJCYWNrZ3JvdW5kIHx8IGNvbmZpZy5leHBhbnNpb25QYW5lbC5oZWFkZXJCYWNrZ3JvdW5kJyxcbiAgICAnW3N0eWxlLi0tbXJkLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItY29sb3JdJzogJ2hlYWRlckNvbG9yIHx8IGNvbmZpZy5leHBhbnNpb25QYW5lbC5oZWFkZXJDb2xvcicsXG4gICAgJ1tzdHlsZS4tLW1yZC1leHBhbnNpb24tcGFuZWwtYmFja2dyb3VuZF0nOiAnYmFja2dyb3VuZCB8fCBjb25maWcuZXhwYW5zaW9uUGFuZWwuYmFja2dyb3VuZCcsXG4gICAgJ1tzdHlsZS4tLW1yZC1leHBhbnNpb24tcGFuZWwtZGF1ZXJdJzogJ2NvbmZpZy5leHBhbnNpb25QYW5lbC5hbmltYXRpb25EdXJhdGlvbidcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTXJkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBNcmRBY2NvcmRpb25QYW5lbCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgZXhwYW5kZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmdlb2VmZm5ldFNldHplbih2YWx1ZSwgZmFsc2UpO1xuICB9XG4gIHB1YmxpYyBnZXQgZXhwYW5kZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cGFuZGVkO1xuICB9XG4gIHByaXZhdGUgX2V4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICB0aGlzLnp1c3RhbmRHZWFlbmRlcnQubmV4dCgpO1xuICB9XG4gIHB1YmxpYyBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgaGlkZVRvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyB0b2dnbGVQb3NpdGlvbjogTXJkRXhwYW5zaW9uVG9nZ2xlUG9zaXRpb24gPSAnYWZ0ZXInO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIGhlYWRlckhlaWdodDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJQYWRkaW5nOiBzdHJpbmc7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGhlYWRlckJhY2tncm91bmQ6IHN0cmluZztcblxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgaGVhZGVyQ29sb3I6IHN0cmluZztcblxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgYmFja2dyb3VuZDogc3RyaW5nO1xuXG4gIC8qKiBOdXIgYmVpIEJlZGllbnVuZyB1ZWJlciBkZW4gS29wZiBvZGVyIG9wZW4oKS9jbG9zZSgpL3RvZ2dsZSgpLCBuaWNodCBiZWltIFNldHplbiB2b24gYGV4cGFuZGVkYCAqL1xuICBAT3V0cHV0KCkgcHVibGljIGV4cGFuZGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQE91dHB1dCgpIHB1YmxpYyBvcGVuZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBAT3V0cHV0KCkgcHVibGljIGNsb3NlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBDb250ZW50Q2hpbGQoTXJkRXhwYW5zaW9uUGFuZWxDb250ZW50RGlyZWN0aXZlKSBwdWJsaWMgbGF6eUluaGFsdDogTXJkRXhwYW5zaW9uUGFuZWxDb250ZW50RGlyZWN0aXZlO1xuXG4gIC8qKiBJbmZvcm1pZXJ0IGRlbiBLb3BmIChPblB1c2gpIHVlYmVyIEFlbmRlcnVuZ2VuICovXG4gIHB1YmxpYyByZWFkb25seSB6dXN0YW5kR2VhZW5kZXJ0OiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBwdWJsaWMgcmVhZG9ubHkgY29uZmlnOiBNcmRDb25maWdNb2RlbCA9IENvbmZpZ1V0aWwuZ2V0Q29uZmlnKCk7XG5cbiAgcHVibGljIHJlYWRvbmx5IGlkOiBzdHJpbmcgPSBgbXJkLWV4cGFuc2lvbi1wYW5lbC0ke25hZWNoc3RlSWQrK31gO1xuXG4gIC8qKiBMYXp5LUluaGFsdCBibGVpYnQgbmFjaCBkZW0gZXJzdGVuIEF1ZmtsYXBwZW4gZXJoYWx0ZW4sIGRhbWl0IFp1c3RhbmQgKHouIEIuIEZvcm11bGFyZSkgbmljaHQgdmVybG9yZW4gZ2VodCAqL1xuICBwdWJsaWMgaW5oYWx0RXJ6ZXVndDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1SRF9BQ0NPUkRJT04pIHByaXZhdGUgYWNjb3JkaW9uOiBNcmRBY2NvcmRpb25CYXNlXG4gICkge1xuICAgIHRoaXMuYWNjb3JkaW9uPy5yZWdpc3RyaWVyZW4odGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmFjY29yZGlvbj8uYWJtZWxkZW4odGhpcyk7XG4gICAgdGhpcy56dXN0YW5kR2VhZW5kZXJ0LmNvbXBsZXRlKCk7XG4gIH1cblxuICBwdWJsaWMgb3BlbigpOiB2b2lkIHtcbiAgICB0aGlzLmdlb2VmZm5ldFNldHplbih0cnVlLCB0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmdlb2VmZm5ldFNldHplbihmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuZ2VvZWZmbmV0U2V0emVuKCF0aGlzLl9leHBhbmRlZCwgdHJ1ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGhlYWRlcklkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuaWR9LWtvcGZgO1xuICB9XG5cbiAgcHVibGljIGdldCBpbmhhbHRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmlkfS1pbmhhbHRgO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW9lZmZuZXRTZXR6ZW4oZ2VvZWZmbmV0OiBib29sZWFuLCBhdXNnZWJlbjogYm9vbGVhbik6IHZvaWQge1xuICAgIGdlb2VmZm5ldCA9ICEhZ2VvZWZmbmV0O1xuICAgIGlmIChnZW9lZmZuZXQgPT09IHRoaXMuX2V4cGFuZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2V4cGFuZGVkID0gZ2VvZWZmbmV0O1xuICAgIGlmIChnZW9lZmZuZXQpIHtcbiAgICAgIHRoaXMuaW5oYWx0RXJ6ZXVndCA9IHRydWU7XG4gICAgICB0aGlzLmFjY29yZGlvbj8ucGFuZWxHZW9lZmZuZXQodGhpcyk7XG4gICAgfVxuICAgIGlmIChhdXNnZWJlbikge1xuICAgICAgdGhpcy5leHBhbmRlZENoYW5nZS5lbWl0KGdlb2VmZm5ldCk7XG4gICAgfVxuICAgIC8vIG9wZW5lZC9jbG9zZWQgYXVjaCBiZWltIFNldHplbiBwZXIgSW5wdXQsIGRhbWl0IHouIEIuIE5hY2hsYWRlbiBiZWltIE9lZmZuZW4gaW4gamVkZW0gRmFsbCBncmVpZnRcbiAgICBpZiAoZ2VvZWZmbmV0KSB7XG4gICAgICB0aGlzLm9wZW5lZC5lbWl0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2VkLmVtaXQoKTtcbiAgICB9XG4gICAgdGhpcy56dXN0YW5kR2VhZW5kZXJ0Lm5leHQoKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIiwiPG5nLWNvbnRlbnQgc2VsZWN0PVwibXJkLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJcIj48L25nLWNvbnRlbnQ+XG48ZGl2IGNsYXNzPVwibXJkLWV4cGFuc2lvbi1wYW5lbC1rb2VycGVyXCIgcm9sZT1cInJlZ2lvblwiIFthdHRyLmlkXT1cImluaGFsdElkXCIgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImhlYWRlcklkXCI+XG4gIDxkaXYgY2xhc3M9XCJtcmQtZXhwYW5zaW9uLXBhbmVsLWluaGFsdFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGF6eUluaGFsdCAmJiBpbmhhbHRFcnpldWd0XCIgW25nVGVtcGxhdGVPdXRsZXRdPVwibGF6eUluaGFsdC50ZW1wbGF0ZVJlZlwiPjwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19