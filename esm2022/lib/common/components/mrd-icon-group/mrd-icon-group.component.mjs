import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, inject, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Util } from 'mrd-core';
import * as i0 from "@angular/core";
export class MrdIconGroupComponent {
    _svgs = {};
    set svgs(value) {
        this._svgs = this.sanitize(value);
        this.cdr.markForCheck();
    }
    get svgs() {
        return this._svgs;
    }
    state = 'default';
    disabled = false;
    hovered = false;
    loading = false;
    size = 32;
    // Externes Element das die Zustände treibt
    hostElement;
    cdr = inject(ChangeDetectorRef);
    sanitizer = inject(DomSanitizer);
    _hovered = false;
    _active = false;
    _focused = false;
    _loading = false;
    // Listener-Referenzen für späteres Cleanup
    _listeners = [];
    get activeSvg() {
        return this.svgs[this.effectiveState] ?? this.svgs['default'] ?? '';
    }
    get effectiveState() {
        if (this.disabled)
            return 'disabled';
        if (this._active)
            return 'active';
        if (this._hovered)
            return 'hover';
        if (this._focused)
            return 'focus';
        if (this.loading)
            return 'loading';
        return this.state;
    }
    ngOnInit() {
        if (this.hostElement)
            this._bindToElement(this.hostElement);
        this._hovered = this.hovered;
    }
    // ngOnChanges(): void {
    //   // Wenn hostElement zur Laufzeit ausgetauscht wird
    //   this._unbindListeners();
    //   if (this.hostElement) this._bindToElement(this.hostElement);
    //   this.cdr.markForCheck();
    // }
    ngOnDestroy() {
        this._unbindListeners();
    }
    // Wenn kein hostElement → Komponente hört auf sich selbst
    onMouseEnter() {
        if (this.hostElement || this.disabled)
            return;
        this._hovered = true;
        this.cdr.markForCheck();
    }
    onMouseLeave() {
        if (this.hostElement)
            return;
        this._hovered = this.hovered;
        this._active = false;
        this.cdr.markForCheck();
    }
    onMouseDown() {
        if (this.hostElement || this.disabled)
            return;
        this._active = true;
        this.cdr.markForCheck();
    }
    onMouseUp() {
        if (this.hostElement)
            return;
        this._active = false;
        this.cdr.markForCheck();
    }
    onFocus() {
        if (this.hostElement || this.disabled)
            return;
        this._focused = true;
        this.cdr.markForCheck();
    }
    onBlur() {
        if (this.hostElement)
            return;
        this._focused = false;
        this.cdr.markForCheck();
    }
    _bindToElement(el) {
        const on = (event, fn) => {
            el.addEventListener(event, fn);
            this._listeners.push({ event, fn });
        };
        on('mouseenter', () => { if (!this.disabled) {
            this._hovered = true;
            this.cdr.markForCheck();
        } });
        on('mouseleave', () => { this._hovered = this.hovered; this._active = false; this.cdr.markForCheck(); });
        on('mousedown', () => { if (!this.disabled) {
            this._active = true;
            this.cdr.markForCheck();
        } });
        on('mouseup', () => { this._active = false; this.cdr.markForCheck(); });
        on('focus', () => { if (!this.disabled) {
            this._focused = true;
            this.cdr.markForCheck();
        } });
        on('blur', () => { this._focused = false; this.cdr.markForCheck(); });
    }
    _unbindListeners() {
        if (!this.hostElement)
            return;
        this._listeners.forEach(({ event, fn }) => this.hostElement.removeEventListener(event, fn));
        this._listeners = [];
    }
    sanitize(svgs) {
        const result = {};
        for (const [state, svgString] of Object.entries(svgs)) {
            result[state] = Util.isDefined(svgString) ? this.sanitizer.bypassSecurityTrustHtml(svgString) : null;
        }
        return result;
    }
    /** @nocollapse */ static ɵfac = function MrdIconGroupComponent_Factory(t) { return new (t || MrdIconGroupComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdIconGroupComponent, selectors: [["mrd-icon-group"]], hostVars: 4, hostBindings: function MrdIconGroupComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseenter", function MrdIconGroupComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function MrdIconGroupComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); })("mousedown", function MrdIconGroupComponent_mousedown_HostBindingHandler() { return ctx.onMouseDown(); })("mouseup", function MrdIconGroupComponent_mouseup_HostBindingHandler() { return ctx.onMouseUp(); })("focus", function MrdIconGroupComponent_focus_HostBindingHandler() { return ctx.onFocus(); })("blur", function MrdIconGroupComponent_blur_HostBindingHandler() { return ctx.onBlur(); });
        } if (rf & 2) {
            i0.ɵɵstyleProp("display", "inline-flex")("pointer-events", ctx.hostElement ? "none" : "auto");
        } }, inputs: { svgs: "svgs", state: "state", disabled: "disabled", hovered: "hovered", loading: "loading", size: "size", hostElement: "hostElement" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 1, vars: 7, consts: [[3, "innerHTML"]], template: function MrdIconGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } if (rf & 2) {
            i0.ɵɵstyleProp("width", ctx.size, "px")("height", ctx.size, "px")("display", "flex");
            i0.ɵɵproperty("innerHTML", ctx.activeSvg, i0.ɵɵsanitizeHtml);
        } }, encapsulation: 2, changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdIconGroupComponent, [{
        type: Component,
        args: [{
                selector: 'mrd-icon-group',
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[style.display]': '"inline-flex"',
                    '[style.pointer-events]': 'hostElement ? "none" : "auto"'
                },
                template: `
    <div
      [style.width.px]="size"
      [style.height.px]="size"
      [style.display]="'flex'"
      [innerHTML]="activeSvg">
    </div>
  `,
            }]
    }], null, { svgs: [{
            type: Input
        }], state: [{
            type: Input
        }], disabled: [{
            type: Input
        }], hovered: [{
            type: Input
        }], loading: [{
            type: Input
        }], size: [{
            type: Input
        }], hostElement: [{
            type: Input
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }], onMouseDown: [{
            type: HostListener,
            args: ['mousedown']
        }], onMouseUp: [{
            type: HostListener,
            args: ['mouseup']
        }], onFocus: [{
            type: HostListener,
            args: ['focus']
        }], onBlur: [{
            type: HostListener,
            args: ['blur']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWljb24tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9jb21tb24vY29tcG9uZW50cy9tcmQtaWNvbi1ncm91cC9tcmQtaWNvbi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxlQUFlLENBQUM7QUFDakosT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBd0JoQyxNQUFNLE9BQU8scUJBQXFCO0lBRXhCLEtBQUssR0FBZ0IsRUFBRSxDQUFDO0lBQ2hDLElBQWEsSUFBSSxDQUFDLEtBQWtCO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVRLEtBQUssR0FBYSxTQUFTLENBQUM7SUFDNUIsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUNqQixPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ2hCLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDaEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUVuQiwyQ0FBMkM7SUFDbEMsV0FBVyxDQUFlO0lBRTNCLEdBQUcsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNoQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRWpDLFFBQVEsR0FBRyxL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QkFBQSxtQkFBQTtZQUd2Qiw0REFBdUI7Ozt1RkFJaEIscUJBQXFCO2NBakJqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osaUJBQWlCLEVBQUUsZUFBZTtvQkFDbEMsd0JBQXdCLEVBQUUsK0JBQStCO2lCQUMxRDtnQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7R0FPVDthQUNGO2dCQUljLElBQUk7a0JBQWhCLEtBQUs7WUFRRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBR0csV0FBVztrQkFBbkIsS0FBSztZQTJDc0IsWUFBWTtrQkFBdkMsWUFBWTttQkFBQyxZQUFZO1lBSUUsWUFBWTtrQkFBdkMsWUFBWTttQkFBQyxZQUFZO1lBTUMsV0FBVztrQkFBckMsWUFBWTttQkFBQyxXQUFXO1lBS0EsU0FBUztrQkFBakMsWUFBWTttQkFBQyxTQUFTO1lBS0EsT0FBTztrQkFBN0IsWUFBWTttQkFBQyxPQUFPO1lBS0MsTUFBTTtrQkFBM0IsWUFBWTttQkFBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgaW5qZWN0LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICdtcmQtY29yZSc7XHJcblxyXG5leHBvcnQgdHlwZSBTdmdTdGF0ZSA9ICdkZWZhdWx0JyB8ICdob3ZlcicgfCAnYWN0aXZlJyB8ICdmb2N1cycgXHJcbiAgICAgICAgICAgICAgICAgICAgIHwgJ2Rpc2FibGVkJyB8ICdsb2FkaW5nJyB8ICdlcnJvcicgfCAnc3VjY2Vzcyc7XHJcblxyXG5leHBvcnQgdHlwZSBTdmdTdGF0ZU1hcCA9IFBhcnRpYWw8UmVjb3JkPFN2Z1N0YXRlLCBTYWZlSHRtbHxzdHJpbmd8bnVsbD4+O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtcmQtaWNvbi1ncm91cCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICAnW3N0eWxlLmRpc3BsYXldJzogJ1wiaW5saW5lLWZsZXhcIicsXHJcbiAgICAnW3N0eWxlLnBvaW50ZXItZXZlbnRzXSc6ICdob3N0RWxlbWVudCA/IFwibm9uZVwiIDogXCJhdXRvXCInXHJcbiAgfSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdlxyXG4gICAgICBbc3R5bGUud2lkdGgucHhdPVwic2l6ZVwiXHJcbiAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwic2l6ZVwiXHJcbiAgICAgIFtzdHlsZS5kaXNwbGF5XT1cIidmbGV4J1wiXHJcbiAgICAgIFtpbm5lckhUTUxdPVwiYWN0aXZlU3ZnXCI+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkSWNvbkdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBwcml2YXRlIF9zdmdzOiBTdmdTdGF0ZU1hcCA9IHt9O1xyXG4gIEBJbnB1dCgpIHNldCBzdmdzKHZhbHVlOiBTdmdTdGF0ZU1hcCkge1xyXG4gICAgdGhpcy5fc3ZncyA9IHRoaXMuc2FuaXRpemUodmFsdWUpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG4gIGdldCBzdmdzKCk6IFN2Z1N0YXRlTWFwIHtcclxuICAgIHJldHVybiB0aGlzLl9zdmdzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgc3RhdGU6IFN2Z1N0YXRlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaG92ZXJlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaXplID0gMzI7XHJcblxyXG4gIC8vIEV4dGVybmVzIEVsZW1lbnQgZGFzIGRpZSBadXN0w6RuZGUgdHJlaWJ0XHJcbiAgQElucHV0KCkgaG9zdEVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBjZHIgPSBpbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gIHByaXZhdGUgc2FuaXRpemVyID0gaW5qZWN0KERvbVNhbml0aXplcik7XHJcblxyXG4gIHByaXZhdGUgX2hvdmVyZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIF9hY3RpdmUgID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfZm9jdXNlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2xvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgLy8gTGlzdGVuZXItUmVmZXJlbnplbiBmw7xyIHNww6R0ZXJlcyBDbGVhbnVwXHJcbiAgcHJpdmF0ZSBfbGlzdGVuZXJzOiBBcnJheTx7IGV2ZW50OiBzdHJpbmc7IGZuOiBFdmVudExpc3RlbmVyIH0+ID0gW107XHJcblxyXG4gIGdldCBhY3RpdmVTdmcoKTogU2FmZUh0bWwge1xyXG4gICAgcmV0dXJuIHRoaXMuc3Znc1t0aGlzLmVmZmVjdGl2ZVN0YXRlXSA/PyB0aGlzLnN2Z3NbJ2RlZmF1bHQnXSA/PyAnJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IGVmZmVjdGl2ZVN0YXRlKCk6IFN2Z1N0YXRlIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm4gJ2Rpc2FibGVkJztcclxuICAgIGlmICh0aGlzLl9hY3RpdmUpICByZXR1cm4gJ2FjdGl2ZSc7XHJcbiAgICBpZiAodGhpcy5faG92ZXJlZCkgcmV0dXJuICdob3Zlcic7XHJcbiAgICBpZiAodGhpcy5fZm9jdXNlZCkgcmV0dXJuICdmb2N1cyc7XHJcbiAgICBpZiAodGhpcy5sb2FkaW5nKSByZXR1cm4gJ2xvYWRpbmcnO1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmhvc3RFbGVtZW50KSB0aGlzLl9iaW5kVG9FbGVtZW50KHRoaXMuaG9zdEVsZW1lbnQpO1xyXG4gICAgdGhpcy5faG92ZXJlZCA9IHRoaXMuaG92ZXJlZDtcclxuICB9XHJcblxyXG4gIC8vIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gIC8vICAgLy8gV2VubiBob3N0RWxlbWVudCB6dXIgTGF1ZnplaXQgYXVzZ2V0YXVzY2h0IHdpcmRcclxuICAvLyAgIHRoaXMuX3VuYmluZExpc3RlbmVycygpO1xyXG4gIC8vICAgaWYgKHRoaXMuaG9zdEVsZW1lbnQpIHRoaXMuX2JpbmRUb0VsZW1lbnQodGhpcy5ob3N0RWxlbWVudCk7XHJcbiAgLy8gICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAvLyB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fdW5iaW5kTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICAvLyBXZW5uIGtlaW4gaG9zdEVsZW1lbnQg4oaSIEtvbXBvbmVudGUgaMO2cnQgYXVmIHNpY2ggc2VsYnN0XHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpIG9uTW91c2VFbnRlcigpIHtcclxuICAgIGlmICh0aGlzLmhvc3RFbGVtZW50IHx8IHRoaXMuZGlzYWJsZWQpIHJldHVybjtcclxuICAgIHRoaXMuX2hvdmVyZWQgPSB0cnVlOyB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpIG9uTW91c2VMZWF2ZSgpIHtcclxuICAgIGlmICh0aGlzLmhvc3RFbGVtZW50KSByZXR1cm47XHJcbiAgICB0aGlzLl9ob3ZlcmVkID0gdGhpcy5ob3ZlcmVkOyBcclxuICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlOyBcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nKSBvbk1vdXNlRG93bigpIHtcclxuICAgIGlmICh0aGlzLmhvc3RFbGVtZW50IHx8IHRoaXMuZGlzYWJsZWQpIHJldHVybjtcclxuICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7IFxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNldXAnKSBvbk1vdXNlVXAoKSB7XHJcbiAgICBpZiAodGhpcy5ob3N0RWxlbWVudCkgcmV0dXJuO1xyXG4gICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7IFxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgb25Gb2N1cygpIHtcclxuICAgIGlmICh0aGlzLmhvc3RFbGVtZW50IHx8IHRoaXMuZGlzYWJsZWQpIHJldHVybjtcclxuICAgIHRoaXMuX2ZvY3VzZWQgPSB0cnVlOyBcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuICBASG9zdExpc3RlbmVyKCdibHVyJykgb25CbHVyKCkge1xyXG4gICAgaWYgKHRoaXMuaG9zdEVsZW1lbnQpIHJldHVybjtcclxuICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTsgXHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2JpbmRUb0VsZW1lbnQoZWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBvbiA9IChldmVudDogc3RyaW5nLCBmbjogRXZlbnRMaXN0ZW5lcikgPT4ge1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbik7XHJcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKHsgZXZlbnQsIGZuIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbignbW91c2VlbnRlcicsICgpID0+IHsgaWYgKCF0aGlzLmRpc2FibGVkKSB7IHRoaXMuX2hvdmVyZWQgPSB0cnVlOyAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7IH19KTtcclxuICAgIG9uKCdtb3VzZWxlYXZlJywgKCkgPT4geyB0aGlzLl9ob3ZlcmVkID0gdGhpcy5ob3ZlcmVkOyB0aGlzLl9hY3RpdmUgPSBmYWxzZTsgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpOyB9KTtcclxuICAgIG9uKCdtb3VzZWRvd24nLCAgKCkgPT4geyBpZiAoIXRoaXMuZGlzYWJsZWQpIHsgdGhpcy5fYWN0aXZlID0gdHJ1ZTsgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTsgfX0pO1xyXG4gICAgb24oJ21vdXNldXAnLCAgICAoKSA9PiB7IHRoaXMuX2FjdGl2ZSA9IGZhbHNlOyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTsgfSk7XHJcbiAgICBvbignZm9jdXMnLCAgICAgICgpID0+IHsgaWYgKCF0aGlzLmRpc2FibGVkKSB7IHRoaXMuX2ZvY3VzZWQgPSB0cnVlOyAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7IH19KTtcclxuICAgIG9uKCdibHVyJywgICAgICAgKCkgPT4geyB0aGlzLl9mb2N1c2VkID0gZmFsc2U7ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7IH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdW5iaW5kTGlzdGVuZXJzKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmhvc3RFbGVtZW50KSByZXR1cm47XHJcbiAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgZm4gfSkgPT5cclxuICAgICAgdGhpcy5ob3N0RWxlbWVudCEucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZm4pXHJcbiAgICApO1xyXG4gICAgdGhpcy5fbGlzdGVuZXJzID0gW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNhbml0aXplKHN2Z3M6IFN2Z1N0YXRlTWFwKTogU3ZnU3RhdGVNYXAge1xyXG4gICAgICBjb25zdCByZXN1bHQ6IFN2Z1N0YXRlTWFwID0ge307XHJcbiAgICAgIGZvciAoY29uc3QgW3N0YXRlLCBzdmdTdHJpbmddIG9mIE9iamVjdC5lbnRyaWVzKHN2Z3MpIGFzIFtTdmdTdGF0ZSwgc3RyaW5nXVtdKSB7XHJcbiAgICAgICAgICByZXN1bHRbc3RhdGUgYXMgU3ZnU3RhdGVdID0gVXRpbC5pc0RlZmluZWQoc3ZnU3RyaW5nKSA/IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHN2Z1N0cmluZykgOiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59Il19