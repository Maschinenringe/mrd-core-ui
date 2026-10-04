import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../mrd-expansion-panel/mrd-expansion-panel.component";
import * as i2 from "@angular/common";
function MrdExpansionPanelHeaderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 3);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(5);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function MrdExpansionPanelHeaderComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 3);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(5);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function MrdExpansionPanelHeaderComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 4);
    i0.ɵɵelement(1, "path", 5);
    i0.ɵɵelementEnd();
} }
const _c0 = ["*"];
/** Kopf eines `mrd-expansion-panel`; Klick, Enter und Leertaste klappen das Panel auf und zu */
export class MrdExpansionPanelHeaderComponent {
    panel;
    abo;
    constructor(panel, cdr) {
        this.panel = panel;
        this.abo = this.panel.zustandGeaendert.subscribe(() => cdr.markForCheck());
    }
    ngOnDestroy() {
        this.abo.unsubscribe();
    }
    umschalten() {
        if (!this.panel.disabled) {
            this.panel.toggle();
        }
    }
    tasteGedrueckt(event) {
        // Tasten auf Buttons o. Ae. im Kopf gehoeren diesen, nicht dem Panel
        if (event.target !== event.currentTarget) {
            return;
        }
        // Leertaste wuerde sonst die Seite scrollen
        event.preventDefault();
        this.umschalten();
    }
    /** @nocollapse */ static ɵfac = function MrdExpansionPanelHeaderComponent_Factory(t) { return new (t || MrdExpansionPanelHeaderComponent)(i0.ɵɵdirectiveInject(i1.MrdExpansionPanelComponent), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdExpansionPanelHeaderComponent, selectors: [["mrd-expansion-panel-header"]], hostAttrs: ["role", "button"], hostVars: 7, hostBindings: function MrdExpansionPanelHeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function MrdExpansionPanelHeaderComponent_click_HostBindingHandler() { return ctx.umschalten(); })("keydown.enter", function MrdExpansionPanelHeaderComponent_keydown_enter_HostBindingHandler($event) { return ctx.tasteGedrueckt($event); })("keydown.space", function MrdExpansionPanelHeaderComponent_keydown_space_HostBindingHandler($event) { return ctx.tasteGedrueckt($event); });
        } if (rf & 2) {
            i0.ɵɵattribute("id", ctx.panel.headerId)("tabindex", ctx.panel.disabled ? -1 : 0)("aria-expanded", ctx.panel.expanded)("aria-controls", ctx.panel.inhaltId)("aria-disabled", ctx.panel.disabled);
            i0.ɵɵclassProp("mrd-expansion-panel-header-disabled", ctx.panel.disabled);
        } }, ngContentSelectors: _c0, decls: 6, vars: 2, consts: [[3, "ngTemplateOutlet", 4, "ngIf"], [1, "mrd-expansion-panel-header-inhalt"], ["pfeil", ""], [3, "ngTemplateOutlet"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mrd-expansion-panel-header-pfeil"], ["d", "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"]], template: function MrdExpansionPanelHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, MrdExpansionPanelHeaderComponent_ng_container_0_Template, 1, 1, "ng-container", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, MrdExpansionPanelHeaderComponent_ng_container_3_Template, 1, 1, "ng-container", 0);
            i0.ɵɵtemplate(4, MrdExpansionPanelHeaderComponent_ng_template_4_Template, 2, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.panel.hideToggle && ctx.panel.togglePosition === "before");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.panel.hideToggle && ctx.panel.togglePosition !== "before");
        } }, dependencies: [i2.NgIf, i2.NgTemplateOutlet], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:16px;box-sizing:border-box;min-height:var(--mrd-expansion-panel-header-height);padding:var(--mrd-expansion-panel-header-padding);background:var(--mrd-expansion-panel-header-background);color:var(--mrd-expansion-panel-header-color);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}[_nghost-%COMP%]:focus-visible{box-shadow:inset 0 0 0 2px currentColor}.mrd-expansion-panel-header-disabled[_nghost-%COMP%]{cursor:default;opacity:.5}.mrd-expansion-panel-header-inhalt[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;align-items:center;min-width:0}.mrd-expansion-panel-header-pfeil[_ngcontent-%COMP%]{flex:0 0 auto;width:24px;height:24px;fill:currentColor;transition:transform var(--mrd-expansion-panel-dauer) ease}[aria-expanded=true][_nghost-%COMP%]   .mrd-expansion-panel-header-pfeil[_ngcontent-%COMP%]{transform:rotate(180deg)}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdExpansionPanelHeaderComponent, [{
        type: Component,
        args: [{ selector: 'mrd-expansion-panel-header', host: {
                    'role': 'button',
                    '[class.mrd-expansion-panel-header-disabled]': 'panel.disabled',
                    '[attr.id]': 'panel.headerId',
                    '[attr.tabindex]': 'panel.disabled ? -1 : 0',
                    '[attr.aria-expanded]': 'panel.expanded',
                    '[attr.aria-controls]': 'panel.inhaltId',
                    '[attr.aria-disabled]': 'panel.disabled',
                    '(click)': 'umschalten()',
                    '(keydown.enter)': 'tasteGedrueckt($event)',
                    '(keydown.space)': 'tasteGedrueckt($event)'
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"!panel.hideToggle && panel.togglePosition === 'before'\" [ngTemplateOutlet]=\"pfeil\"></ng-container>\n<div class=\"mrd-expansion-panel-header-inhalt\">\n  <ng-content></ng-content>\n</div>\n<ng-container *ngIf=\"!panel.hideToggle && panel.togglePosition !== 'before'\" [ngTemplateOutlet]=\"pfeil\"></ng-container>\n\n<ng-template #pfeil>\n  <svg class=\"mrd-expansion-panel-header-pfeil\" viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n    <path d=\"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z\"></path>\n  </svg>\n</ng-template>\n", styles: [":host{display:flex;flex-direction:row;align-items:center;gap:16px;box-sizing:border-box;min-height:var(--mrd-expansion-panel-header-height);padding:var(--mrd-expansion-panel-header-padding);background:var(--mrd-expansion-panel-header-background);color:var(--mrd-expansion-panel-header-color);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}:host(:focus-visible){box-shadow:inset 0 0 0 2px currentColor}:host(.mrd-expansion-panel-header-disabled){cursor:default;opacity:.5}.mrd-expansion-panel-header-inhalt{display:flex;flex:1 1 auto;align-items:center;min-width:0}.mrd-expansion-panel-header-pfeil{flex:0 0 auto;width:24px;height:24px;fill:currentColor;transition:transform var(--mrd-expansion-panel-dauer) ease}:host([aria-expanded=true]) .mrd-expansion-panel-header-pfeil{transform:rotate(180deg)}\n"] }]
    }], function () { return [{ type: i1.MrdExpansionPanelComponent }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1leHBhbnNpb24vY29tcG9uZW50cy9tcmQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci9tcmQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWV4cGFuc2lvbi9jb21wb25lbnRzL21yZC1leHBhbnNpb24tcGFuZWwtaGVhZGVyL21yZC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0FqRywyQkFBdUg7Ozs7SUFBMUMsc0NBQTBCOzs7SUFJdkcsMkJBQXVIOzs7O0lBQTFDLHNDQUEwQjs7O0lBR3JHLG1CQUFxRjtJQUFyRiw4QkFBcUY7SUFDbkYsMEJBQXlFO0lBQzNFLGlCQUFNOzs7QURMUixnR0FBZ0c7QUFtQmhHLE1BQU0sT0FBTyxnQ0FBZ0M7SUFLbEM7SUFIUSxHQUFHLENBQWU7SUFFbkMsWUFDUyxLQUFpQyxFQUN4QyxHQUFzQjtRQURmLFVBQUssR0FBTCxLQUFLLENBQTRCO1FBR3hDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxVQUFVO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRU0sY0FBYyxDQUFDLEtBQW9CO1FBQ3hDLHFFQUFxRTtRQUNyRSxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLGFBQWEsRUFBRTtZQUN4QyxPQUFPO1NBQ1I7UUFDRCw0Q0FBNEM7UUFDNUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzZHQTdCVSxnQ0FBZ0M7NEZBQWhDLGdDQUFnQztpSEFBaEMsZ0JBQVksa0hBQVosMEJBQXNCLGtIQUF0QiwwQkFBc0I7Ozs7OztZQ3ZCbkMsbUdBQXVIO1lBQ3ZILDhCQUErQztZQUM3QyxrQkFBeUI7WUFDM0IsaUJBQU07WUFDTixtR0FBdUg7WUFFdkgsa0lBSWM7O1lBVkMscUZBQTREO1lBSTVELGVBQTREO1lBQTVELHFGQUE0RDs7O3VGRG1COUQsZ0NBQWdDO2NBbEI1QyxTQUFTOzJCQUNFLDRCQUE0QixRQUdoQztvQkFDSixNQUFNLEVBQUUsUUFBUTtvQkFDaEIsNkNBQTZDLEVBQUUsZ0JBQWdCO29CQUMvRCxXQUFXLEVBQUUsZ0JBQWdCO29CQUM3QixpQkFBaUIsRUFBRSx5QkFBeUI7b0JBQzVDLHNCQUFzQixFQUFFLGdCQUFnQjtvQkFDeEMsc0JBQXNCLEVBQUUsZ0JBQWdCO29CQUN4QyxzQkFBc0IsRUFBRSxnQkFBZ0I7b0JBQ3hDLFNBQVMsRUFBRSxjQUFjO29CQUN6QixpQkFBaUIsRUFBRSx3QkFBd0I7b0JBQzNDLGlCQUFpQixFQUFFLHdCQUF3QjtpQkFDNUMsbUJBQ2dCLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1yZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi4vbXJkLWV4cGFuc2lvbi1wYW5lbC9tcmQtZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudCc7XG5cbi8qKiBLb3BmIGVpbmVzIGBtcmQtZXhwYW5zaW9uLXBhbmVsYDsgS2xpY2ssIEVudGVyIHVuZCBMZWVydGFzdGUga2xhcHBlbiBkYXMgUGFuZWwgYXVmIHVuZCB6dSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXJkLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tcmQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgJ3JvbGUnOiAnYnV0dG9uJyxcbiAgICAnW2NsYXNzLm1yZC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRpc2FibGVkXSc6ICdwYW5lbC5kaXNhYmxlZCcsXG4gICAgJ1thdHRyLmlkXSc6ICdwYW5lbC5oZWFkZXJJZCcsXG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICdwYW5lbC5kaXNhYmxlZCA/IC0xIDogMCcsXG4gICAgJ1thdHRyLmFyaWEtZXhwYW5kZWRdJzogJ3BhbmVsLmV4cGFuZGVkJyxcbiAgICAnW2F0dHIuYXJpYS1jb250cm9sc10nOiAncGFuZWwuaW5oYWx0SWQnLFxuICAgICdbYXR0ci5hcmlhLWRpc2FibGVkXSc6ICdwYW5lbC5kaXNhYmxlZCcsXG4gICAgJyhjbGljayknOiAndW1zY2hhbHRlbigpJyxcbiAgICAnKGtleWRvd24uZW50ZXIpJzogJ3Rhc3RlR2VkcnVlY2t0KCRldmVudCknLFxuICAgICcoa2V5ZG93bi5zcGFjZSknOiAndGFzdGVHZWRydWVja3QoJGV2ZW50KSdcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTXJkRXhwYW5zaW9uUGFuZWxIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgYWJvOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBhbmVsOiBNcmRFeHBhbnNpb25QYW5lbENvbXBvbmVudCxcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHRoaXMuYWJvID0gdGhpcy5wYW5lbC56dXN0YW5kR2VhZW5kZXJ0LnN1YnNjcmliZSgoKSA9PiBjZHIubWFya0ZvckNoZWNrKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5hYm8udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyB1bXNjaGFsdGVuKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wYW5lbC5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5wYW5lbC50b2dnbGUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdGFzdGVHZWRydWVja3QoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBUYXN0ZW4gYXVmIEJ1dHRvbnMgby4gQWUuIGltIEtvcGYgZ2Vob2VyZW4gZGllc2VuLCBuaWNodCBkZW0gUGFuZWxcbiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIExlZXJ0YXN0ZSB3dWVyZGUgc29uc3QgZGllIFNlaXRlIHNjcm9sbGVuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnVtc2NoYWx0ZW4oKTtcbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFwYW5lbC5oaWRlVG9nZ2xlICYmIHBhbmVsLnRvZ2dsZVBvc2l0aW9uID09PSAnYmVmb3JlJ1wiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInBmZWlsXCI+PC9uZy1jb250YWluZXI+XG48ZGl2IGNsYXNzPVwibXJkLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItaW5oYWx0XCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFwYW5lbC5oaWRlVG9nZ2xlICYmIHBhbmVsLnRvZ2dsZVBvc2l0aW9uICE9PSAnYmVmb3JlJ1wiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInBmZWlsXCI+PC9uZy1jb250YWluZXI+XG5cbjxuZy10ZW1wbGF0ZSAjcGZlaWw+XG4gIDxzdmcgY2xhc3M9XCJtcmQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1wZmVpbFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICA8cGF0aCBkPVwiTTcuNDEgOC41OSAxMiAxMy4xN2w0LjU5LTQuNThMMTggMTBsLTYgNi02LTYgMS40MS0xLjQxelwiPjwvcGF0aD5cbiAgPC9zdmc+XG48L25nLXRlbXBsYXRlPlxuIl19