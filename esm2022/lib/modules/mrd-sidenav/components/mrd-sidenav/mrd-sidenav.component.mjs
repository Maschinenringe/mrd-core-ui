import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';
import { Subject } from 'rxjs';
import { colorAttribute } from '../../../../common/transforms/color-transform';
import { sizeAttribute } from '../../../../common/transforms/size-transform';
import { ConfigUtil } from '../../../../common/util/config.util';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class MrdSidenavComponent {
    elementRef;
    renderer;
    set opened(value) {
        this.geoeffnetSetzen(value, false);
    }
    get opened() {
        return this._opened;
    }
    _opened = false;
    /** Beim Wechsel von mobil auf Desktop automatisch oeffnen, damit die Navigation dort nicht verschwunden bleibt */
    autoOpen = true;
    width;
    maxWidth;
    /** Rahmen rechts, nur in der Desktop-Ansicht */
    borderWidth;
    borderColor;
    openedChange = new EventEmitter();
    /** Informiert den Container ueber Oeffnen und Schliessen */
    zustandGeaendert = new Subject();
    config = ConfigUtil.getConfig();
    mobil = false;
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.klassenAktualisieren();
    }
    ngOnDestroy() {
        this.zustandGeaendert.complete();
    }
    open() {
        this.geoeffnetSetzen(true, true);
    }
    close() {
        this.geoeffnetSetzen(false, true);
    }
    toggle() {
        this.geoeffnetSetzen(!this._opened, true);
    }
    /** Wird vom Container gesetzt */
    mobilSetzen(mobil) {
        this.mobil = mobil;
        this.klassenAktualisieren();
    }
    geoeffnetSetzen(geoeffnet, ausgeben) {
        geoeffnet = !!geoeffnet;
        if (geoeffnet === this._opened) {
            return;
        }
        this._opened = geoeffnet;
        this.klassenAktualisieren();
        if (ausgeben) {
            this.openedChange.emit(geoeffnet);
        }
        this.zustandGeaendert.next();
    }
    // Direkt am Element statt per Host-Binding, damit der Zustand auch ohne Change Detection des Aufrufers (OnPush) sofort greift
    klassenAktualisieren() {
        const element = this.elementRef.nativeElement;
        if (this._opened) {
            this.renderer.removeClass(element, 'mrd-sidenav-geschlossen');
        }
        else {
            this.renderer.addClass(element, 'mrd-sidenav-geschlossen');
        }
        if (this.mobil) {
            this.renderer.addClass(element, 'mrd-sidenav-mobile');
        }
        else {
            this.renderer.removeClass(element, 'mrd-sidenav-mobile');
        }
    }
    /** @nocollapse */ static ɵfac = function MrdSidenavComponent_Factory(t) { return new (t || MrdSidenavComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdSidenavComponent, selectors: [["mrd-sidenav"]], hostVars: 6, hostBindings: function MrdSidenavComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("--mrd-sidenav-width", ctx.width || ctx.config.sidenav.width)("--mrd-sidenav-max-width", ctx.maxWidth || ctx.config.sidenav.maxWidth)("--mrd-sidenav-border", ctx.borderWidth ? ctx.borderWidth + " solid " + (ctx.borderColor || "transparent") : "none");
        } }, inputs: { opened: ["opened", "opened", booleanAttribute], autoOpen: ["autoOpen", "autoOpen", booleanAttribute], width: ["width", "width", sizeAttribute], maxWidth: ["maxWidth", "maxWidth", sizeAttribute], borderWidth: ["borderWidth", "borderWidth", sizeAttribute], borderColor: ["borderColor", "borderColor", colorAttribute] }, outputs: { openedChange: "openedChange" }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MrdSidenavComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;flex:0 0 auto;box-sizing:border-box;height:100%;width:var(--mrd-sidenav-width);max-width:var(--mrd-sidenav-max-width);border-right:var(--mrd-sidenav-border);overflow:hidden}.mrd-sidenav-mobile[_nghost-%COMP%]{width:100%;max-width:none;border-right:none}.mrd-sidenav-geschlossen[_nghost-%COMP%]{display:none}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdSidenavComponent, [{
        type: Component,
        args: [{ selector: 'mrd-sidenav', host: {
                    '[style.--mrd-sidenav-width]': 'width || config.sidenav.width',
                    '[style.--mrd-sidenav-max-width]': 'maxWidth || config.sidenav.maxWidth',
                    '[style.--mrd-sidenav-border]': "borderWidth ? borderWidth + ' solid ' + (borderColor || 'transparent') : 'none'"
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>\n", styles: [":host{display:flex;flex-direction:column;flex:0 0 auto;box-sizing:border-box;height:100%;width:var(--mrd-sidenav-width);max-width:var(--mrd-sidenav-max-width);border-right:var(--mrd-sidenav-border);overflow:hidden}:host(.mrd-sidenav-mobile){width:100%;max-width:none;border-right:none}:host(.mrd-sidenav-geschlossen){display:none}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { opened: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], autoOpen: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], width: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], maxWidth: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], borderWidth: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], borderColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], openedChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXNpZGVuYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1zaWRlbmF2L2NvbXBvbmVudHMvbXJkLXNpZGVuYXYvbXJkLXNpZGVuYXYuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1zaWRlbmF2L2NvbXBvbmVudHMvbXJkLXNpZGVuYXYvbXJkLXNpZGVuYXYuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFN0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7QUFhakUsTUFBTSxPQUFPLG1CQUFtQjtJQWdDcEI7SUFDQTtJQS9CVixJQUFpRCxNQUFNLENBQUMsS0FBYztRQUNwRSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFDTyxPQUFPLEdBQVksS0FBSyxDQUFDO0lBRWpDLGtIQUFrSDtJQUNyRSxRQUFRLEdBQVksSUFBSSxDQUFDO0lBRTVCLEtBQUssQ0FBUztJQUVkLFFBQVEsQ0FBUztJQUUzRCxnREFBZ0Q7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UUFBUTtrQkFBcEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUVNLEtBQUs7a0JBQTlDLEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsYUFBYSxFQUFDO1lBRVMsUUFBUTtrQkFBakQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUM7WUFHUyxXQUFXO2tCQUFwRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGFBQWEsRUFBQztZQUVVLFdBQVc7a0JBQXJELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsY0FBYyxFQUFDO1lBRWpCLFlBQVk7a0JBQTVCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCwgUmVuZGVyZXIyLCBib29sZWFuQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjb2xvckF0dHJpYnV0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi90cmFuc2Zvcm1zL2NvbG9yLXRyYW5zZm9ybSc7XG5pbXBvcnQgeyBzaXplQXR0cmlidXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvc2l6ZS10cmFuc2Zvcm0nO1xuaW1wb3J0IHsgTXJkQ29uZmlnTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vbW9kZWwvY29uZmlnLm1vZGVsJztcbmltcG9ydCB7IENvbmZpZ1V0aWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb25maWcudXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yZC1zaWRlbmF2JyxcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1zaWRlbmF2LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLXNpZGVuYXYuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuLS1tcmQtc2lkZW5hdi13aWR0aF0nOiAnd2lkdGggfHwgY29uZmlnLnNpZGVuYXYud2lkdGgnLFxuICAgICdbc3R5bGUuLS1tcmQtc2lkZW5hdi1tYXgtd2lkdGhdJzogJ21heFdpZHRoIHx8IGNvbmZpZy5zaWRlbmF2Lm1heFdpZHRoJyxcbiAgICAnW3N0eWxlLi0tbXJkLXNpZGVuYXYtYm9yZGVyXSc6IFwiYm9yZGVyV2lkdGggPyBib3JkZXJXaWR0aCArICcgc29saWQgJyArIChib3JkZXJDb2xvciB8fCAndHJhbnNwYXJlbnQnKSA6ICdub25lJ1wiXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE1yZFNpZGVuYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNldCBvcGVuZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmdlb2VmZm5ldFNldHplbih2YWx1ZSwgZmFsc2UpO1xuICB9XG4gIHB1YmxpYyBnZXQgb3BlbmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9vcGVuZWQ7XG4gIH1cbiAgcHJpdmF0ZSBfb3BlbmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIEJlaW0gV2VjaHNlbCB2b24gbW9iaWwgYXVmIERlc2t0b3AgYXV0b21hdGlzY2ggb2VmZm5lbiwgZGFtaXQgZGllIE5hdmlnYXRpb24gZG9ydCBuaWNodCB2ZXJzY2h3dW5kZW4gYmxlaWJ0ICovXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGF1dG9PcGVuOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyB3aWR0aDogc3RyaW5nO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIG1heFdpZHRoOiBzdHJpbmc7XG5cbiAgLyoqIFJhaG1lbiByZWNodHMsIG51ciBpbiBkZXIgRGVza3RvcC1BbnNpY2h0ICovXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIGJvcmRlcldpZHRoOiBzdHJpbmc7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGJvcmRlckNvbG9yOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIHB1YmxpYyBvcGVuZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKiogSW5mb3JtaWVydCBkZW4gQ29udGFpbmVyIHVlYmVyIE9lZmZuZW4gdW5kIFNjaGxpZXNzZW4gKi9cbiAgcHVibGljIHJlYWRvbmx5IHp1c3RhbmRHZWFlbmRlcnQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHB1YmxpYyByZWFkb25seSBjb25maWc6IE1yZENvbmZpZ01vZGVsID0gQ29uZmlnVXRpbC5nZXRDb25maWcoKTtcblxuICBwcml2YXRlIG1vYmlsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgdGhpcy5rbGFzc2VuQWt0dWFsaXNpZXJlbigpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy56dXN0YW5kR2VhZW5kZXJ0LmNvbXBsZXRlKCk7XG4gIH1cblxuICBwdWJsaWMgb3BlbigpOiB2b2lkIHtcbiAgICB0aGlzLmdlb2VmZm5ldFNldHplbih0cnVlLCB0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmdlb2VmZm5ldFNldHplbihmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuZ2VvZWZmbmV0U2V0emVuKCF0aGlzLl9vcGVuZWQsIHRydWUpO1xuICB9XG5cbiAgLyoqIFdpcmQgdm9tIENvbnRhaW5lciBnZXNldHp0ICovXG4gIHB1YmxpYyBtb2JpbFNldHplbihtb2JpbDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubW9iaWwgPSBtb2JpbDtcbiAgICB0aGlzLmtsYXNzZW5Ba3R1YWxpc2llcmVuKCk7XG4gIH1cblxuICBwcml2YXRlIGdlb2VmZm5ldFNldHplbihnZW9lZmZuZXQ6IGJvb2xlYW4sIGF1c2dlYmVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgZ2VvZWZmbmV0ID0gISFnZW9lZmZuZXQ7XG4gICAgaWYgKGdlb2VmZm5ldCA9PT0gdGhpcy5fb3BlbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX29wZW5lZCA9IGdlb2VmZm5ldDtcbiAgICB0aGlzLmtsYXNzZW5Ba3R1YWxpc2llcmVuKCk7XG4gICAgaWYgKGF1c2dlYmVuKSB7XG4gICAgICB0aGlzLm9wZW5lZENoYW5nZS5lbWl0KGdlb2VmZm5ldCk7XG4gICAgfVxuICAgIHRoaXMuenVzdGFuZEdlYWVuZGVydC5uZXh0KCk7XG4gIH1cblxuICAvLyBEaXJla3QgYW0gRWxlbWVudCBzdGF0dCBwZXIgSG9zdC1CaW5kaW5nLCBkYW1pdCBkZXIgWnVzdGFuZCBhdWNoIG9obmUgQ2hhbmdlIERldGVjdGlvbiBkZXMgQXVmcnVmZXJzIChPblB1c2gpIHNvZm9ydCBncmVpZnRcbiAgcHJpdmF0ZSBrbGFzc2VuQWt0dWFsaXNpZXJlbigpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuX29wZW5lZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCAnbXJkLXNpZGVuYXYtZ2VzY2hsb3NzZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCAnbXJkLXNpZGVuYXYtZ2VzY2hsb3NzZW4nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubW9iaWwpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgJ21yZC1zaWRlbmF2LW1vYmlsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsICdtcmQtc2lkZW5hdi1tb2JpbGUnKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiJdfQ==