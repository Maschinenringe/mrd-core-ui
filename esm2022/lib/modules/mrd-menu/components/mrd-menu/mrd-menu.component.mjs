import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { MrdMenuItemComponent } from '../mrd-menu-item/mrd-menu-item.component';
import { MRD_MENU } from '../../common/model/mrd-menu.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MrdMenuComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵlistener("keydown", function MrdMenuComponent_ng_template_0_Template_div_keydown_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.tasteGedrueckt($event)); });
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.panelClass);
} }
const _c0 = ["*"];
/**
 * Aufklappmenue, das ueber `[mrdMenuTriggerFor]` geoeffnet wird. Der Inhalt erscheint erst beim Oeffnen im Overlay.
 *
 * `<mrd-s-button [mrdMenuTriggerFor]="menu">...</mrd-s-button>`
 * `<mrd-menu #menu="mrdMenu"><button mrd-menu-item icon="download">Exportieren</button></mrd-menu>`
 */
export class MrdMenuComponent {
    panelTemplate;
    eintraege;
    xPosition = 'after';
    yPosition = 'below';
    /** Zusaetzliche CSS-Klasse(n) am Panel, z. B. fuer eine Mindestbreite */
    panelClass;
    opened = new EventEmitter();
    closed = new EventEmitter();
    /** Der Trigger entscheidet ueber das Schliessen, weil ihm das Overlay gehoert */
    schliessenAngefordert = new Subject();
    ngOnDestroy() {
        this.schliessenAngefordert.complete();
    }
    eintragGewaehlt() {
        this.schliessenAngefordert.next('eintrag');
    }
    fokusErsterEintrag() {
        this.aktiveEintraege()[0]?.fokussieren();
    }
    tasteGedrueckt(event) {
        const aktive = this.aktiveEintraege();
        const aktuell = aktive.findIndex((eintrag) => eintrag.hatFokus());
        let ziel;
        switch (event.key) {
            case 'ArrowDown':
                ziel = aktuell < 0 || aktuell === aktive.length - 1 ? 0 : aktuell + 1;
                break;
            case 'ArrowUp':
                ziel = aktuell <= 0 ? aktive.length - 1 : aktuell - 1;
                break;
            case 'Home':
                ziel = 0;
                break;
            case 'End':
                ziel = aktive.length - 1;
                break;
            case 'Tab':
                this.schliessenAngefordert.next('tab');
                return;
            default:
                return;
        }
        event.preventDefault();
        aktive[ziel]?.fokussieren();
    }
    aktiveEintraege() {
        return this.eintraege ? this.eintraege.filter((eintrag) => !eintrag.disabled) : [];
    }
    /** @nocollapse */ static ɵfac = function MrdMenuComponent_Factory(t) { return new (t || MrdMenuComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdMenuComponent, selectors: [["mrd-menu"]], contentQueries: function MrdMenuComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, MrdMenuItemComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.eintraege = _t);
        } }, viewQuery: function MrdMenuComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(TemplateRef, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.panelTemplate = _t.first);
        } }, inputs: { xPosition: "xPosition", yPosition: "yPosition", panelClass: "panelClass" }, outputs: { opened: "opened", closed: "closed" }, exportAs: ["mrdMenu"], features: [i0.ɵɵProvidersFeature([{ provide: MRD_MENU, useExisting: MrdMenuComponent }])], ngContentSelectors: _c0, decls: 1, vars: 0, consts: [["role", "menu", 1, "mrd-menu-panel", 3, "ngClass", "keydown"]], template: function MrdMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, MrdMenuComponent_ng_template_0_Template, 2, 1, "ng-template");
        } }, dependencies: [i1.NgClass], styles: [".mrd-menu-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:180px;max-width:320px;max-height:calc(100vh - 48px);overflow-y:auto;padding:8px 0;background-color:#fff;color:#293d4f;border-radius:8px;box-shadow:0 4px 16px #16222e33;outline:none}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdMenuComponent, [{
        type: Component,
        args: [{ selector: 'mrd-menu', exportAs: 'mrdMenu', providers: [{ provide: MRD_MENU, useExisting: MrdMenuComponent }], changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template>\n  <div class=\"mrd-menu-panel\" [ngClass]=\"panelClass\" role=\"menu\" (keydown)=\"tasteGedrueckt($event)\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n", styles: [".mrd-menu-panel{display:flex;flex-direction:column;min-width:180px;max-width:320px;max-height:calc(100vh - 48px);overflow-y:auto;padding:8px 0;background-color:#fff;color:#293d4f;border-radius:8px;box-shadow:0 4px 16px #16222e33;outline:none}\n"] }]
    }], null, { panelTemplate: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }], eintraege: [{
            type: ContentChildren,
            args: [MrdMenuItemComponent, { descendants: true }]
        }], xPosition: [{
            type: Input
        }], yPosition: [{
            type: Input
        }], panelClass: [{
            type: Input
        }], opened: [{
            type: Output
        }], closed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1tZW51L2NvbXBvbmVudHMvbXJkLW1lbnUvbXJkLW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1tZW51L2NvbXBvbmVudHMvbXJkLW1lbnUvbXJkLW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQWEsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvSixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQStFLE1BQU0sbUNBQW1DLENBQUM7Ozs7O0lDRnhJLDhCQUFrRztJQUFuQyw0S0FBVyxlQUFBLDZCQUFzQixDQUFBLElBQUM7SUFDL0Ysa0JBQXlCO0lBQzNCLGlCQUFNOzs7SUFGc0IsMkNBQXNCOzs7QURJcEQ7Ozs7O0dBS0c7QUFTSCxNQUFNLE9BQU8sZ0JBQWdCO0lBRW9CLGFBQWEsQ0FBdUI7SUFFaEIsU0FBUyxDQUFrQztJQUU5RixTQUFTLEdBQXFCLE9BQU8sQ0FBQztJQUV0QyxTQUFTLEdBQXFCLE9BQU8sQ0FBQztJQUV0RCx5RUFBeUU7SUFDekQsVUFBVSxDQUFTO0lBRVQsTUFBTSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO0lBQ3RELE1BQU0sR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUVoRixpRkFBaUY7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cmF0ZWd5LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQsIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTXJkTWVudUl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9tcmQtbWVudS1pdGVtL21yZC1tZW51LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IE1SRF9NRU5VLCBNcmRNZW51RWx0ZXJudGVpbCwgTXJkTWVudVBvc2l0aW9uWCwgTXJkTWVudVBvc2l0aW9uWSwgTXJkTWVudVNjaGxpZXNzR3J1bmQgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kZWwvbXJkLW1lbnUubW9kZWwnO1xuXG4vKipcbiAqIEF1ZmtsYXBwbWVudWUsIGRhcyB1ZWJlciBgW21yZE1lbnVUcmlnZ2VyRm9yXWAgZ2VvZWZmbmV0IHdpcmQuIERlciBJbmhhbHQgZXJzY2hlaW50IGVyc3QgYmVpbSBPZWZmbmVuIGltIE92ZXJsYXkuXG4gKlxuICogYDxtcmQtcy1idXR0b24gW21yZE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIj4uLi48L21yZC1zLWJ1dHRvbj5gXG4gKiBgPG1yZC1tZW51ICNtZW51PVwibXJkTWVudVwiPjxidXR0b24gbXJkLW1lbnUtaXRlbSBpY29uPVwiZG93bmxvYWRcIj5FeHBvcnRpZXJlbjwvYnV0dG9uPjwvbXJkLW1lbnU+YFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtcmQtbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21yZC1tZW51LmNvbXBvbmVudC5zY3NzJ10sXG4gIGV4cG9ydEFzOiAnbXJkTWVudScsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBNUkRfTUVOVSwgdXNlRXhpc3Rpbmc6IE1yZE1lbnVDb21wb25lbnR9XSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTXJkTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE1yZE1lbnVFbHRlcm50ZWlsLCBPbkRlc3Ryb3kge1xuXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHtzdGF0aWM6IHRydWV9KSBwdWJsaWMgcGFuZWxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dW5rbm93bj47XG5cbiAgQENvbnRlbnRDaGlsZHJlbihNcmRNZW51SXRlbUNvbXBvbmVudCwge2Rlc2NlbmRhbnRzOiB0cnVlfSkgcHVibGljIGVpbnRyYWVnZTogUXVlcnlMaXN0PE1yZE1lbnVJdGVtQ29tcG9uZW50PjtcblxuICBASW5wdXQoKSBwdWJsaWMgeFBvc2l0aW9uOiBNcmRNZW51UG9zaXRpb25YID0gJ2FmdGVyJztcblxuICBASW5wdXQoKSBwdWJsaWMgeVBvc2l0aW9uOiBNcmRNZW51UG9zaXRpb25ZID0gJ2JlbG93JztcblxuICAvKiogWnVzYWV0emxpY2hlIENTUy1LbGFzc2UobikgYW0gUGFuZWwsIHouIEIuIGZ1ZXIgZWluZSBNaW5kZXN0YnJlaXRlICovXG4gIEBJbnB1dCgpIHB1YmxpYyBwYW5lbENsYXNzOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIHB1YmxpYyByZWFkb25seSBvcGVuZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHB1YmxpYyByZWFkb25seSBjbG9zZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKiogRGVyIFRyaWdnZXIgZW50c2NoZWlkZXQgdWViZXIgZGFzIFNjaGxpZXNzZW4sIHdlaWwgaWhtIGRhcyBPdmVybGF5IGdlaG9lcnQgKi9cbiAgcHVibGljIHJlYWRvbmx5IHNjaGxpZXNzZW5BbmdlZm9yZGVydDogU3ViamVjdDxNcmRNZW51U2NobGllc3NHcnVuZD4gPSBuZXcgU3ViamVjdDxNcmRNZW51U2NobGllc3NHcnVuZD4oKTtcblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnNjaGxpZXNzZW5BbmdlZm9yZGVydC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHVibGljIGVpbnRyYWdHZXdhZWhsdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNjaGxpZXNzZW5BbmdlZm9yZGVydC5uZXh0KCdlaW50cmFnJyk7XG4gIH1cblxuICBwdWJsaWMgZm9rdXNFcnN0ZXJFaW50cmFnKCk6IHZvaWQge1xuICAgIHRoaXMuYWt0aXZlRWludHJhZWdlKClbMF0/LmZva3Vzc2llcmVuKCk7XG4gIH1cblxuICBwdWJsaWMgdGFzdGVHZWRydWVja3QoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBha3RpdmUgPSB0aGlzLmFrdGl2ZUVpbnRyYWVnZSgpO1xuICAgIGNvbnN0IGFrdHVlbGwgPSBha3RpdmUuZmluZEluZGV4KChlaW50cmFnOiBNcmRNZW51SXRlbUNvbXBvbmVudCkgPT4gZWludHJhZy5oYXRGb2t1cygpKTtcbiAgICBsZXQgemllbDogbnVtYmVyO1xuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICB6aWVsID0gYWt0dWVsbCA8IDAgfHwgYWt0dWVsbCA9PT0gYWt0aXZlLmxlbmd0aCAtIDEgPyAwIDogYWt0dWVsbCArIDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIHppZWwgPSBha3R1ZWxsIDw9IDAgPyBha3RpdmUubGVuZ3RoIC0gMSA6IGFrdHVlbGwgLSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICB6aWVsID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFbmQnOlxuICAgICAgICB6aWVsID0gYWt0aXZlLmxlbmd0aCAtIDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnVGFiJzpcbiAgICAgICAgdGhpcy5zY2hsaWVzc2VuQW5nZWZvcmRlcnQubmV4dCgndGFiJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBha3RpdmVbemllbF0/LmZva3Vzc2llcmVuKCk7XG4gIH1cblxuICBwcml2YXRlIGFrdGl2ZUVpbnRyYWVnZSgpOiBNcmRNZW51SXRlbUNvbXBvbmVudFtdIHtcbiAgICByZXR1cm4gdGhpcy5laW50cmFlZ2UgPyB0aGlzLmVpbnRyYWVnZS5maWx0ZXIoKGVpbnRyYWc6IE1yZE1lbnVJdGVtQ29tcG9uZW50KSA9PiAhZWludHJhZy5kaXNhYmxlZCkgOiBbXTtcbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibXJkLW1lbnUtcGFuZWxcIiBbbmdDbGFzc109XCJwYW5lbENsYXNzXCIgcm9sZT1cIm1lbnVcIiAoa2V5ZG93bik9XCJ0YXN0ZUdlZHJ1ZWNrdCgkZXZlbnQpXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=