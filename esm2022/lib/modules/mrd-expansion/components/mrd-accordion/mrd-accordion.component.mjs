import { ChangeDetectionStrategy, Component, Input, booleanAttribute } from '@angular/core';
import { MRD_ACCORDION } from '../../common/model/mrd-accordion.model';
import * as i0 from "@angular/core";
const _c0 = ["*"];
/**
 * Fasst mehrere `mrd-expansion-panel` zusammen. Ohne `multi` ist immer hoechstens ein Panel geoeffnet.
 */
export class MrdAccordionComponent {
    /** Mehrere Panels duerfen gleichzeitig geoeffnet sein */
    multi = false;
    panels = new Set();
    registrieren(panel) {
        this.panels.add(panel);
    }
    abmelden(panel) {
        this.panels.delete(panel);
    }
    panelGeoeffnet(panel) {
        if (!this.multi) {
            this.panels.forEach((p) => p !== panel && p.close());
        }
    }
    /** Nur mit `multi`, sonst bliebe ohnehin nur das letzte Panel offen */
    openAll() {
        if (this.multi) {
            this.panels.forEach((p) => p.open());
        }
    }
    closeAll() {
        this.panels.forEach((p) => p.close());
    }
    /** @nocollapse */ static ɵfac = function MrdAccordionComponent_Factory(t) { return new (t || MrdAccordionComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdAccordionComponent, selectors: [["mrd-accordion"]], inputs: { multi: ["multi", "multi", booleanAttribute] }, features: [i0.ɵɵProvidersFeature([{ provide: MRD_ACCORDION, useExisting: MrdAccordionComponent }]), i0.ɵɵInputTransformsFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MrdAccordionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, styles: ["[_nghost-%COMP%]{display:block}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdAccordionComponent, [{
        type: Component,
        args: [{ selector: 'mrd-accordion', providers: [{ provide: MRD_ACCORDION, useExisting: MrdAccordionComponent }], changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>\n", styles: [":host{display:block}\n"] }]
    }], null, { multi: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWFjY29yZGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWV4cGFuc2lvbi9jb21wb25lbnRzL21yZC1hY2NvcmRpb24vbXJkLWFjY29yZGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWV4cGFuc2lvbi9jb21wb25lbnRzL21yZC1hY2NvcmRpb24vbXJkLWFjY29yZGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUsYUFBYSxFQUF1QyxNQUFNLHdDQUF3QyxDQUFDOzs7QUFFNUc7O0dBRUc7QUFRSCxNQUFNLE9BQU8scUJBQXFCO0lBRWhDLHlEQUF5RDtJQUNaLEtBQUssR0FBWSxLQUFLLENBQUM7SUFFbkQsTUFBTSxHQUEyQixJQUFJLEdBQUcsRUFBcUIsQ0FBQztJQUV4RSxZQUFZLENBQUMsS0FBd0I7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVNLFFBQVEsQ0FBQyxLQUF3QjtRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU0sY0FBYyxDQUFDLEtBQXdCO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFvQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ3pFO0lBQ0gsQ0FBQztJQUVELHVFQUF1RTtJQUNoRSxPQUFPO1FBQ1osSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFvQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUN6RDtJQUNILENBQUM7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFvQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO2tHQTlCVSxxQkFBcUI7NEZBQXJCLHFCQUFxQixzRUFHYixnQkFBZ0Isc0NBTnhCLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxxQkFBcUIsRUFBRSxDQUFDOztZQ1Y3RSxrQkFBeUI7Ozt1RkRhWixxQkFBcUI7Y0FQakMsU0FBUzsyQkFDRSxlQUFlLGFBR2QsQ0FBQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyx1QkFBdUIsRUFBRSxDQUFDLG1CQUMxRCx1QkFBdUIsQ0FBQyxNQUFNO2dCQUtGLEtBQUs7a0JBQWpELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgYm9vbGVhbkF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTVJEX0FDQ09SRElPTiwgTXJkQWNjb3JkaW9uQmFzZSwgTXJkQWNjb3JkaW9uUGFuZWwgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kZWwvbXJkLWFjY29yZGlvbi5tb2RlbCc7XG5cbi8qKlxuICogRmFzc3QgbWVocmVyZSBgbXJkLWV4cGFuc2lvbi1wYW5lbGAgenVzYW1tZW4uIE9obmUgYG11bHRpYCBpc3QgaW1tZXIgaG9lY2hzdGVucyBlaW4gUGFuZWwgZ2VvZWZmbmV0LlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtcmQtYWNjb3JkaW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1hY2NvcmRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tcmQtYWNjb3JkaW9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTVJEX0FDQ09SRElPTiwgdXNlRXhpc3Rpbmc6IE1yZEFjY29yZGlvbkNvbXBvbmVudCB9XSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTXJkQWNjb3JkaW9uQ29tcG9uZW50IGltcGxlbWVudHMgTXJkQWNjb3JkaW9uQmFzZSB7XG5cbiAgLyoqIE1laHJlcmUgUGFuZWxzIGR1ZXJmZW4gZ2xlaWNoemVpdGlnIGdlb2VmZm5ldCBzZWluICovXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIG11bHRpOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBwYW5lbHM6IFNldDxNcmRBY2NvcmRpb25QYW5lbD4gPSBuZXcgU2V0PE1yZEFjY29yZGlvblBhbmVsPigpO1xuXG4gIHB1YmxpYyByZWdpc3RyaWVyZW4ocGFuZWw6IE1yZEFjY29yZGlvblBhbmVsKTogdm9pZCB7XG4gICAgdGhpcy5wYW5lbHMuYWRkKHBhbmVsKTtcbiAgfVxuXG4gIHB1YmxpYyBhYm1lbGRlbihwYW5lbDogTXJkQWNjb3JkaW9uUGFuZWwpOiB2b2lkIHtcbiAgICB0aGlzLnBhbmVscy5kZWxldGUocGFuZWwpO1xuICB9XG5cbiAgcHVibGljIHBhbmVsR2VvZWZmbmV0KHBhbmVsOiBNcmRBY2NvcmRpb25QYW5lbCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5tdWx0aSkge1xuICAgICAgdGhpcy5wYW5lbHMuZm9yRWFjaCgocDogTXJkQWNjb3JkaW9uUGFuZWwpID0+IHAgIT09IHBhbmVsICYmIHAuY2xvc2UoKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIE51ciBtaXQgYG11bHRpYCwgc29uc3QgYmxpZWJlIG9obmVoaW4gbnVyIGRhcyBsZXR6dGUgUGFuZWwgb2ZmZW4gKi9cbiAgcHVibGljIG9wZW5BbGwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubXVsdGkpIHtcbiAgICAgIHRoaXMucGFuZWxzLmZvckVhY2goKHA6IE1yZEFjY29yZGlvblBhbmVsKSA9PiBwLm9wZW4oKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsb3NlQWxsKCk6IHZvaWQge1xuICAgIHRoaXMucGFuZWxzLmZvckVhY2goKHA6IE1yZEFjY29yZGlvblBhbmVsKSA9PiBwLmNsb3NlKCkpO1xuICB9XG59XG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4iXX0=