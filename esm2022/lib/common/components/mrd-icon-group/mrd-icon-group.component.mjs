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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWljb24tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9jb21tb24vY29tcG9uZW50cy9tcmQtaWNvbi1ncm91cC9tcmQtaWNvbi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxlQUFlLENBQUM7QUFDakosT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBd0JoQyxNQUFNLE9BQU8scUJBQXFCO0lBRXhCLEtBQUssR0FBZ0IsRUFBRSxDQUFDO0lBQ2hDLElBQWEsSUFBSSxDQUFDLEtBQWtCO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVRLEtBQUssR0FBYSxTQUFTLENBQUM7SUFDNUIsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUNqQixPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ2hCLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDaEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUVuQiwyQ0FBMkM7SUFDbEMsV0FBVyxDQUFlO0lBRTNCLEdBQUcsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNoQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRWpDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDakIsT0FBTyxHQUFJLEtBQUssQ0FBQztJQUNqQixRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ2pCLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFFekIsMkNBQTJDO0lBQ25DLFVBQVUsR0FBZ0QsRUFBRSxDQUFDO0lBRXJFLElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEUsQ0FBQztJQUVELElBQVksY0FBYztRQUN4QixJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTyxVQUFVLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFHLE9BQU8sUUFBUSxDQUFDO1FBQ25DLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPLE9BQU8sQ0FBQztRQUNsQyxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTyxPQUFPLENBQUM7UUFDbEMsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU8sU0FBUyxDQUFDO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFdBQVc7WUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUVELHdCQUF3QjtJQUN4Qix1REFBdUQ7SUFDdkQsNkJBQTZCO0lBQzdCLGlFQUFpRTtJQUNqRSw2QkFBNkI7SUFDN0IsSUFBSTtJQUVKLFdBQVc7UUFDVCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsMERBQTBEO0lBQzlCLFlBQVk7UUFDdEMsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUMyQixZQUFZO1FBQ3RDLElBQUksSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDMEIsV0FBVztRQUNwQyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUN3QixTQUFTO1FBQ2hDLElBQUksSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNzQixPQUFPO1FBQzVCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ3FCLE1BQU07UUFDMUIsSUFBSSxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU87UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sY0FBYyxDQUFDLEVBQWU7UUFDcEMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBaUIsRUFBRSxFQUFFO1lBQzlDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUM7UUFFRixFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQztRQUNuRyxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFHLEVBQUUsQ0FBQyxXQUFXLEVBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7U0FBRSxDQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ25HLEVBQUUsQ0FBQyxTQUFTLEVBQUssR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBeUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25HLEVBQUUsQ0FBQyxPQUFPLEVBQU8sR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7U0FBRSxDQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ25HLEVBQUUsQ0FBQyxNQUFNLEVBQVEsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBd0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFFTyxnQkFBZ0I7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FDeEMsSUFBSSxDQUFDLFdBQVksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQ2pELENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU8sUUFBUSxDQUFDLElBQWlCO1FBQzlCLE1BQU0sTUFBTSxHQUFnQixFQUFFLENBQUM7UUFDL0IsS0FBSyxNQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUF5QixFQUFFO1lBQzNFLE1BQU0sQ0FBQyxLQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQ3BIO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztrR0F4SFUscUJBQXFCOzRGQUFyQixxQkFBcUI7Z0hBQXJCLGtCQUFjLDJGQUFkLGtCQUFjLHlGQUFkLGlCQUFhLHFGQUFiLGVBQVcsaUZBQVgsYUFBUywrRUFBVCxZQUFROzs7O1lBUmpCLHlCQUtNOztZQUpKLHVDQUF1QiwwQkFBQSxtQkFBQTtZQUd2Qiw0REFBdUI7Ozt1RkFJaEIscUJBQXFCO2NBakJqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osaUJBQWlCLEVBQUUsZUFBZTtvQkFDbEMsd0JBQXdCLEVBQUUsK0JBQStCO2lCQUMxRDtnQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7R0FPVDthQUNGO2dCQUljLElBQUk7a0JBQWhCLEtBQUs7WUFRRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBR0csV0FBVztrQkFBbkIsS0FBSztZQTJDc0IsWUFBWTtrQkFBdkMsWUFBWTttQkFBQyxZQUFZO1lBSUUsWUFBWTtrQkFBdkMsWUFBWTttQkFBQyxZQUFZO1lBTUMsV0FBVztrQkFBckMsWUFBWTttQkFBQyxXQUFXO1lBS0EsU0FBUztrQkFBakMsWUFBWTttQkFBQyxTQUFTO1lBS0EsT0FBTztrQkFBN0IsWUFBWTttQkFBQyxPQUFPO1lBS0MsTUFBTTtrQkFBM0IsWUFBWTttQkFBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgaW5qZWN0LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgVXRpbCB9IGZyb20gJ21yZC1jb3JlJztcblxuZXhwb3J0IHR5cGUgU3ZnU3RhdGUgPSAnZGVmYXVsdCcgfCAnaG92ZXInIHwgJ2FjdGl2ZScgfCAnZm9jdXMnIFxuICAgICAgICAgICAgICAgICAgICAgfCAnZGlzYWJsZWQnIHwgJ2xvYWRpbmcnIHwgJ2Vycm9yJyB8ICdzdWNjZXNzJztcblxuZXhwb3J0IHR5cGUgU3ZnU3RhdGVNYXAgPSBQYXJ0aWFsPFJlY29yZDxTdmdTdGF0ZSwgU2FmZUh0bWx8c3RyaW5nfG51bGw+PjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXJkLWljb24tZ3JvdXAnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuZGlzcGxheV0nOiAnXCJpbmxpbmUtZmxleFwiJyxcbiAgICAnW3N0eWxlLnBvaW50ZXItZXZlbnRzXSc6ICdob3N0RWxlbWVudCA/IFwibm9uZVwiIDogXCJhdXRvXCInXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgW3N0eWxlLndpZHRoLnB4XT1cInNpemVcIlxuICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJzaXplXCJcbiAgICAgIFtzdHlsZS5kaXNwbGF5XT1cIidmbGV4J1wiXG4gICAgICBbaW5uZXJIVE1MXT1cImFjdGl2ZVN2Z1wiPlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBNcmRJY29uR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfc3ZnczogU3ZnU3RhdGVNYXAgPSB7fTtcbiAgQElucHV0KCkgc2V0IHN2Z3ModmFsdWU6IFN2Z1N0YXRlTWFwKSB7XG4gICAgdGhpcy5fc3ZncyA9IHRoaXMuc2FuaXRpemUodmFsdWUpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIGdldCBzdmdzKCk6IFN2Z1N0YXRlTWFwIHtcbiAgICByZXR1cm4gdGhpcy5fc3ZncztcbiAgfVxuXG4gIEBJbnB1dCgpIHN0YXRlOiBTdmdTdGF0ZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaG92ZXJlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBsb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNpemUgPSAzMjtcblxuICAvLyBFeHRlcm5lcyBFbGVtZW50IGRhcyBkaWUgWnVzdMOkbmRlIHRyZWlidFxuICBASW5wdXQoKSBob3N0RWxlbWVudD86IEhUTUxFbGVtZW50O1xuXG4gIHByaXZhdGUgY2RyID0gaW5qZWN0KENoYW5nZURldGVjdG9yUmVmKTtcbiAgcHJpdmF0ZSBzYW5pdGl6ZXIgPSBpbmplY3QoRG9tU2FuaXRpemVyKTtcblxuICBwcml2YXRlIF9ob3ZlcmVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2FjdGl2ZSAgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZm9jdXNlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XG5cbiAgLy8gTGlzdGVuZXItUmVmZXJlbnplbiBmw7xyIHNww6R0ZXJlcyBDbGVhbnVwXG4gIHByaXZhdGUgX2xpc3RlbmVyczogQXJyYXk8eyBldmVudDogc3RyaW5nOyBmbjogRXZlbnRMaXN0ZW5lciB9PiA9IFtdO1xuXG4gIGdldCBhY3RpdmVTdmcoKTogU2FmZUh0bWwge1xuICAgIHJldHVybiB0aGlzLnN2Z3NbdGhpcy5lZmZlY3RpdmVTdGF0ZV0gPz8gdGhpcy5zdmdzWydkZWZhdWx0J10gPz8gJyc7XG4gIH1cblxuICBwcml2YXRlIGdldCBlZmZlY3RpdmVTdGF0ZSgpOiBTdmdTdGF0ZSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHJldHVybiAnZGlzYWJsZWQnO1xuICAgIGlmICh0aGlzLl9hY3RpdmUpICByZXR1cm4gJ2FjdGl2ZSc7XG4gICAgaWYgKHRoaXMuX2hvdmVyZWQpIHJldHVybiAnaG92ZXInO1xuICAgIGlmICh0aGlzLl9mb2N1c2VkKSByZXR1cm4gJ2ZvY3VzJztcbiAgICBpZiAodGhpcy5sb2FkaW5nKSByZXR1cm4gJ2xvYWRpbmcnO1xuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaG9zdEVsZW1lbnQpIHRoaXMuX2JpbmRUb0VsZW1lbnQodGhpcy5ob3N0RWxlbWVudCk7XG4gICAgdGhpcy5faG92ZXJlZCA9IHRoaXMuaG92ZXJlZDtcbiAgfVxuXG4gIC8vIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAvLyAgIC8vIFdlbm4gaG9zdEVsZW1lbnQgenVyIExhdWZ6ZWl0IGF1c2dldGF1c2NodCB3aXJkXG4gIC8vICAgdGhpcy5fdW5iaW5kTGlzdGVuZXJzKCk7XG4gIC8vICAgaWYgKHRoaXMuaG9zdEVsZW1lbnQpIHRoaXMuX2JpbmRUb0VsZW1lbnQodGhpcy5ob3N0RWxlbWVudCk7XG4gIC8vICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIC8vIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl91bmJpbmRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8vIFdlbm4ga2VpbiBob3N0RWxlbWVudCDihpIgS29tcG9uZW50ZSBow7ZydCBhdWYgc2ljaCBzZWxic3RcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpIG9uTW91c2VFbnRlcigpIHtcbiAgICBpZiAodGhpcy5ob3N0RWxlbWVudCB8fCB0aGlzLmRpc2FibGVkKSByZXR1cm47XG4gICAgdGhpcy5faG92ZXJlZCA9IHRydWU7IHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKSBvbk1vdXNlTGVhdmUoKSB7XG4gICAgaWYgKHRoaXMuaG9zdEVsZW1lbnQpIHJldHVybjtcbiAgICB0aGlzLl9ob3ZlcmVkID0gdGhpcy5ob3ZlcmVkOyBcbiAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTsgXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJykgb25Nb3VzZURvd24oKSB7XG4gICAgaWYgKHRoaXMuaG9zdEVsZW1lbnQgfHwgdGhpcy5kaXNhYmxlZCkgcmV0dXJuO1xuICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7IFxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNldXAnKSBvbk1vdXNlVXAoKSB7XG4gICAgaWYgKHRoaXMuaG9zdEVsZW1lbnQpIHJldHVybjtcbiAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTsgXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBvbkZvY3VzKCkge1xuICAgIGlmICh0aGlzLmhvc3RFbGVtZW50IHx8IHRoaXMuZGlzYWJsZWQpIHJldHVybjtcbiAgICB0aGlzLl9mb2N1c2VkID0gdHJ1ZTsgXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpIG9uQmx1cigpIHtcbiAgICBpZiAodGhpcy5ob3N0RWxlbWVudCkgcmV0dXJuO1xuICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTsgXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIF9iaW5kVG9FbGVtZW50KGVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IG9uID0gKGV2ZW50OiBzdHJpbmcsIGZuOiBFdmVudExpc3RlbmVyKSA9PiB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbik7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaCh7IGV2ZW50LCBmbiB9KTtcbiAgICB9O1xuXG4gICAgb24oJ21vdXNlZW50ZXInLCAoKSA9PiB7IGlmICghdGhpcy5kaXNhYmxlZCkgeyB0aGlzLl9ob3ZlcmVkID0gdHJ1ZTsgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpOyB9fSk7XG4gICAgb24oJ21vdXNlbGVhdmUnLCAoKSA9PiB7IHRoaXMuX2hvdmVyZWQgPSB0aGlzLmhvdmVyZWQ7IHRoaXMuX2FjdGl2ZSA9IGZhbHNlOyAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7IH0pO1xuICAgIG9uKCdtb3VzZWRvd24nLCAgKCkgPT4geyBpZiAoIXRoaXMuZGlzYWJsZWQpIHsgdGhpcy5fYWN0aXZlID0gdHJ1ZTsgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTsgfX0pO1xuICAgIG9uKCdtb3VzZXVwJywgICAgKCkgPT4geyB0aGlzLl9hY3RpdmUgPSBmYWxzZTsgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7IH0pO1xuICAgIG9uKCdmb2N1cycsICAgICAgKCkgPT4geyBpZiAoIXRoaXMuZGlzYWJsZWQpIHsgdGhpcy5fZm9jdXNlZCA9IHRydWU7ICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTsgfX0pO1xuICAgIG9uKCdibHVyJywgICAgICAgKCkgPT4geyB0aGlzLl9mb2N1c2VkID0gZmFsc2U7ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7IH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdW5iaW5kTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5ob3N0RWxlbWVudCkgcmV0dXJuO1xuICAgIHRoaXMuX2xpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBmbiB9KSA9PlxuICAgICAgdGhpcy5ob3N0RWxlbWVudCEucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZm4pXG4gICAgKTtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIHByaXZhdGUgc2FuaXRpemUoc3ZnczogU3ZnU3RhdGVNYXApOiBTdmdTdGF0ZU1hcCB7XG4gICAgICBjb25zdCByZXN1bHQ6IFN2Z1N0YXRlTWFwID0ge307XG4gICAgICBmb3IgKGNvbnN0IFtzdGF0ZSwgc3ZnU3RyaW5nXSBvZiBPYmplY3QuZW50cmllcyhzdmdzKSBhcyBbU3ZnU3RhdGUsIHN0cmluZ11bXSkge1xuICAgICAgICAgIHJlc3VsdFtzdGF0ZSBhcyBTdmdTdGF0ZV0gPSBVdGlsLmlzRGVmaW5lZChzdmdTdHJpbmcpID8gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoc3ZnU3RyaW5nKSA6IG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59Il19