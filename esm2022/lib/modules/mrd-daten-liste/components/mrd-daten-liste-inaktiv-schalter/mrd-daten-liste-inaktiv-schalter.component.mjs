import { Component, booleanAttribute, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../mrd-daten-liste/mrd-daten-liste.component";
import * as i2 from "@angular/common";
import * as i3 from "../../../mrd-toggle-switch/components/mrd-toggle-switch/mrd-toggle-switch.component";
import * as i4 from "../../../mrd-tooltip/common/directive/tool-tip-renderer/tool-tip-renderer.directive";
function MrdDatenListeInaktivSchalterComponent_mrd_toggle_switch_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.TEXT);
} }
function MrdDatenListeInaktivSchalterComponent_mrd_toggle_switch_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-toggle-switch", 1);
    i0.ɵɵlistener("checkedChange", function MrdDatenListeInaktivSchalterComponent_mrd_toggle_switch_0_Template_mrd_toggle_switch_checkedChange_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.liste.inaktiveAusblendenGeaendert($event)); });
    i0.ɵɵtemplate(1, MrdDatenListeInaktivSchalterComponent_mrd_toggle_switch_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("mrdToolTip", ctx_r0.kompakt ? ctx_r0.TEXT : null)("checked", ctx_r0.liste.inaktiveAusblenden);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.kompakt);
} }
/**
 * Schalter "Inaktive ausblenden" fuer die Aktionen einer `mrd-daten-liste` (z. B. in `<mrd-toolbar mrdDatenListeAktionen>`);
 * steuert die umschliessende Liste und erscheint nur, wenn sie eine `inaktivPruefung` hat.
 * `kompakt` zeigt nur den Schalter, den Text als Tooltip - fuer schmale Listen.
 */
export class MrdDatenListeInaktivSchalterComponent {
    liste;
    static TEXT = 'Inaktive ausblenden';
    TEXT = MrdDatenListeInaktivSchalterComponent.TEXT;
    kompakt = false;
    constructor(liste) {
        this.liste = liste;
    }
    /** @nocollapse */ static ɵfac = function MrdDatenListeInaktivSchalterComponent_Factory(t) { return new (t || MrdDatenListeInaktivSchalterComponent)(i0.ɵɵdirectiveInject(i1.MrdDatenListeComponent)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdDatenListeInaktivSchalterComponent, selectors: [["mrd-daten-liste-inaktiv-schalter"]], inputs: { kompakt: ["kompakt", "kompakt", booleanAttribute] }, features: [i0.ɵɵInputTransformsFeature], decls: 1, vars: 1, consts: [["slim", "", 3, "mrdToolTip", "checked", "checkedChange", 4, "ngIf"], ["slim", "", 3, "mrdToolTip", "checked", "checkedChange"], [4, "ngIf"]], template: function MrdDatenListeInaktivSchalterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, MrdDatenListeInaktivSchalterComponent_mrd_toggle_switch_0_Template, 2, 3, "mrd-toggle-switch", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.liste.inaktivPruefung);
        } }, dependencies: [i2.NgIf, i3.MrdToggleSwitchComponent, i4.ToolTipRendererDirective], styles: ["[_nghost-%COMP%]{display:inline-flex;align-items:center;flex:0 0 auto;white-space:nowrap;font-size:14px}"] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdDatenListeInaktivSchalterComponent, [{
        type: Component,
        args: [{ selector: 'mrd-daten-liste-inaktiv-schalter', template: "<mrd-toggle-switch *ngIf=\"liste.inaktivPruefung\" slim [mrdToolTip]=\"kompakt ? TEXT : null\"\n                   [checked]=\"liste.inaktiveAusblenden\" (checkedChange)=\"liste.inaktiveAusblendenGeaendert($event)\">\n  <ng-container *ngIf=\"!kompakt\">{{TEXT}}</ng-container>\n</mrd-toggle-switch>\n", styles: [":host{display:inline-flex;align-items:center;flex:0 0 auto;white-space:nowrap;font-size:14px}\n"] }]
    }], function () { return [{ type: i1.MrdDatenListeComponent }]; }, { kompakt: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWRhdGVuLWxpc3RlLWluYWt0aXYtc2NoYWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1kYXRlbi1saXN0ZS9jb21wb25lbnRzL21yZC1kYXRlbi1saXN0ZS1pbmFrdGl2LXNjaGFsdGVyL21yZC1kYXRlbi1saXN0ZS1pbmFrdGl2LXNjaGFsdGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZGF0ZW4tbGlzdGUvY29tcG9uZW50cy9tcmQtZGF0ZW4tbGlzdGUtaW5ha3Rpdi1zY2hhbHRlci9tcmQtZGF0ZW4tbGlzdGUtaW5ha3Rpdi1zY2hhbHRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ0VqRSw2QkFBK0I7SUFBQSxZQUFRO0lBQUEsMEJBQWU7OztJQUF2QixlQUFRO0lBQVIsaUNBQVE7Ozs7SUFGekMsNENBQ29IO0lBQTVELGlPQUFpQixlQUFBLGdEQUF5QyxDQUFBLElBQUM7SUFDakgsNEhBQXNEO0lBQ3hELGlCQUFvQjs7O0lBSGtDLGdFQUFvQyw0Q0FBQTtJQUV6RSxlQUFjO0lBQWQsc0NBQWM7O0FEQy9COzs7O0dBSUc7QUFNSCxNQUFNLE9BQU8scUNBQXFDO0lBU3ZDO0lBUEYsTUFBTSxDQUFVLElBQUksR0FBVyxxQkFBcUIsQ0FBQztJQUU1QyxJQUFJLEdBQVcscUNBQXFDLENBQUMsSUFBSSxDQUFDO0lBRTdCLE9BQU8sR0FBWSxLQUFLLENBQUM7SUFFdEUsWUFDUyxLQUE2QjtRQUE3QixVQUFLLEdBQUwsS0FBSyxDQUF3QjtJQUNuQyxDQUFDO2tIQVZPLHFDQUFxQzs0RkFBckMscUNBQXFDLCtGQU03QixnQkFBZ0I7WUNuQnJDLGtIQUdvQjs7WUFIQSxnREFBMkI7Ozt1RkRhbEMscUNBQXFDO2NBTGpELFNBQVM7MkJBQ0Usa0NBQWtDO3lFQVVDLE9BQU87a0JBQW5ELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGJvb2xlYW5BdHRyaWJ1dGUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNcmREYXRlbkxpc3RlQ29tcG9uZW50IH0gZnJvbSAnLi4vbXJkLWRhdGVuLWxpc3RlL21yZC1kYXRlbi1saXN0ZS5jb21wb25lbnQnO1xuXG4vKipcbiAqIFNjaGFsdGVyIFwiSW5ha3RpdmUgYXVzYmxlbmRlblwiIGZ1ZXIgZGllIEFrdGlvbmVuIGVpbmVyIGBtcmQtZGF0ZW4tbGlzdGVgICh6LiBCLiBpbiBgPG1yZC10b29sYmFyIG1yZERhdGVuTGlzdGVBa3Rpb25lbj5gKTtcbiAqIHN0ZXVlcnQgZGllIHVtc2NobGllc3NlbmRlIExpc3RlIHVuZCBlcnNjaGVpbnQgbnVyLCB3ZW5uIHNpZSBlaW5lIGBpbmFrdGl2UHJ1ZWZ1bmdgIGhhdC5cbiAqIGBrb21wYWt0YCB6ZWlndCBudXIgZGVuIFNjaGFsdGVyLCBkZW4gVGV4dCBhbHMgVG9vbHRpcCAtIGZ1ZXIgc2NobWFsZSBMaXN0ZW4uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yZC1kYXRlbi1saXN0ZS1pbmFrdGl2LXNjaGFsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1kYXRlbi1saXN0ZS1pbmFrdGl2LXNjaGFsdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWRhdGVuLWxpc3RlLWluYWt0aXYtc2NoYWx0ZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNcmREYXRlbkxpc3RlSW5ha3RpdlNjaGFsdGVyQ29tcG9uZW50IHtcblxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRFWFQ6IHN0cmluZyA9ICdJbmFrdGl2ZSBhdXNibGVuZGVuJztcblxuICBwdWJsaWMgcmVhZG9ubHkgVEVYVDogc3RyaW5nID0gTXJkRGF0ZW5MaXN0ZUluYWt0aXZTY2hhbHRlckNvbXBvbmVudC5URVhUO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGtvbXBha3Q6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbGlzdGU6IE1yZERhdGVuTGlzdGVDb21wb25lbnRcbiAgKSB7fVxufVxuIiwiPG1yZC10b2dnbGUtc3dpdGNoICpuZ0lmPVwibGlzdGUuaW5ha3RpdlBydWVmdW5nXCIgc2xpbSBbbXJkVG9vbFRpcF09XCJrb21wYWt0ID8gVEVYVCA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cImxpc3RlLmluYWt0aXZlQXVzYmxlbmRlblwiIChjaGVja2VkQ2hhbmdlKT1cImxpc3RlLmluYWt0aXZlQXVzYmxlbmRlbkdlYWVuZGVydCgkZXZlbnQpXCI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIha29tcGFrdFwiPnt7VEVYVH19PC9uZy1jb250YWluZXI+XG48L21yZC10b2dnbGUtc3dpdGNoPlxuIl19