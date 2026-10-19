import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';
import { Subscription, filter, merge } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
/**
 * Oeffnet ein `mrd-menu` beim Klick auf das Element (auch auf `mrd-s-button`) in einem Overlay.
 * Geschlossen wird per Eintrag, Klick daneben, Escape oder Tab; danach geht der Fokus zurueck an den Trigger.
 */
export class MrdMenuTriggerDirective {
    overlay;
    elementRef;
    viewContainerRef;
    menu;
    /** Sperrt das Oeffnen; ein deaktivierter Button als Trigger (auch der innere eines `mrd-s-button`) sperrt automatisch */
    disabled = false;
    menuOpened = new EventEmitter();
    menuClosed = new EventEmitter();
    overlayRef;
    abos = Subscription.EMPTY;
    constructor(overlay, elementRef, viewContainerRef) {
        this.overlay = overlay;
        this.elementRef = elementRef;
        this.viewContainerRef = viewContainerRef;
    }
    ngOnDestroy() {
        this.abos.unsubscribe();
        this.overlayRef?.dispose();
        this.overlayRef = null;
    }
    get offen() {
        return !!this.overlayRef?.hasAttached();
    }
    toggle() {
        if (this.offen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    get gesperrt() {
        if (this.disabled) {
            return true;
        }
        const element = this.elementRef.nativeElement;
        const button = element instanceof HTMLButtonElement ? element : element.querySelector('button');
        return !!button?.disabled;
    }
    open() {
        if (this.offen || !this.menu || this.gesperrt) {
            return;
        }
        if (!this.overlayRef) {
            this.overlayRef = this.overlay.create({
                positionStrategy: this.overlay.position()
                    .flexibleConnectedTo(this.elementRef)
                    .withPositions(this.positionen())
                    .withPush(false),
                scrollStrategy: this.overlay.scrollStrategies.reposition(),
                hasBackdrop: true,
                backdropClass: 'cdk-overlay-transparent-backdrop'
            });
        }
        else {
            // Position kann sich seit dem letzten Oeffnen geaendert haben (xPosition/yPosition sind Inputs)
            this.overlayRef.updatePositionStrategy(this.overlay.position()
                .flexibleConnectedTo(this.elementRef)
                .withPositions(this.positionen())
                .withPush(false));
        }
        this.overlayRef.attach(new TemplatePortal(this.menu.panelTemplate, this.viewContainerRef));
        this.abos = merge(this.overlayRef.backdropClick(), this.overlayRef.keydownEvents().pipe(filter((event) => event.key === 'Escape')), this.menu.schliessenAngefordert).subscribe(() => this.close());
        this.menu.fokusErsterEintrag();
        this.menu.opened.emit();
        this.menuOpened.emit();
    }
    close() {
        if (!this.offen) {
            return;
        }
        this.abos.unsubscribe();
        this.overlayRef.detach();
        this.fokusZurueck();
        this.menu.closed.emit();
        this.menuClosed.emit();
    }
    /** Bei Komponenten wie `mrd-s-button` ist der Host selbst nicht fokussierbar, sondern der Button darin */
    fokusZurueck() {
        const element = this.elementRef.nativeElement;
        const ziel = element.matches('button, a, [tabindex]') ? element : element.querySelector('button, a, [tabindex]') ?? element;
        ziel.focus();
    }
    positionen() {
        const [originX, gegenOriginX] = this.menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'];
        const unten = { originX, originY: 'bottom', overlayX: originX, overlayY: 'top' };
        const oben = { originX, originY: 'top', overlayX: originX, overlayY: 'bottom' };
        const [erst, dann] = this.menu.yPosition === 'above' ? [oben, unten] : [unten, oben];
        return [
            erst,
            dann,
            { ...erst, originX: gegenOriginX, overlayX: gegenOriginX },
            { ...dann, originX: gegenOriginX, overlayX: gegenOriginX }
        ];
    }
    /** @nocollapse */ static ɵfac = function MrdMenuTriggerDirective_Factory(t) { return new (t || MrdMenuTriggerDirective)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdMenuTriggerDirective, selectors: [["", "mrdMenuTriggerFor", ""]], hostAttrs: ["aria-haspopup", "menu"], hostVars: 2, hostBindings: function MrdMenuTriggerDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function MrdMenuTriggerDirective_click_HostBindingHandler() { return ctx.toggle(); });
        } if (rf & 2) {
            i0.ɵɵattribute("aria-expanded", ctx.offen)("aria-disabled", ctx.disabled || null);
        } }, inputs: { menu: ["mrdMenuTriggerFor", "menu"], disabled: ["mrdMenuTriggerDisabled", "disabled", booleanAttribute] }, outputs: { menuOpened: "menuOpened", menuClosed: "menuClosed" }, exportAs: ["mrdMenuTrigger"], features: [i0.ɵɵInputTransformsFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdMenuTriggerDirective, [{
        type: Directive,
        args: [{
                selector: '[mrdMenuTriggerFor]',
                exportAs: 'mrdMenuTrigger',
                host: {
                    'aria-haspopup': 'menu',
                    '[attr.aria-expanded]': 'offen',
                    '[attr.aria-disabled]': 'disabled || null',
                    '(click)': 'toggle()'
                }
            }]
    }], function () { return [{ type: i1.Overlay }, { type: i0.ElementRef }, { type: i0.ViewContainerRef }]; }, { menu: [{
            type: Input,
            args: [{ alias: 'mrdMenuTriggerFor', required: true }]
        }], disabled: [{
            type: Input,
            args: [{ alias: 'mrdMenuTriggerDisabled', transform: booleanAttribute }]
        }], menuOpened: [{
            type: Output
        }], menuClosed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLW1lbnUtdHJpZ2dlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLW1lbnUvY29tbW9uL2RpcmVjdGl2ZS9tcmQtbWVudS10cmlnZ2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBb0IsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFHbkQ7OztHQUdHO0FBV0gsTUFBTSxPQUFPLHVCQUF1QjtJQWN4QjtJQUNBO0lBQ0E7SUFka0QsSUFBSSxDQUFtQjtJQUVuRix5SEFBeUg7SUFDM0MsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUU5RSxVQUFVLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7SUFDMUQsVUFBVSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO0lBRTVFLFVBQVUsQ0FBYTtJQUN2QixJQUFJLEdBQWlCLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFFaEQsWUFDVSxPQUFnQixFQUNoQixVQUFtQyxFQUNuQyxnQkFBa0M7UUFGbEMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3pDLENBQUM7SUFFSixXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcs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QyxTQUFTLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckYsT0FBTztZQUNMLElBQUk7WUFDSixJQUFJO1lBQ0osRUFBQyxHQUFHLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUM7WUFDeEQsRUFBQyxHQUFHLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUM7U0FDekQsQ0FBQztJQUNKLENBQUM7b0dBM0dVLHVCQUF1Qjs0RkFBdkIsdUJBQXVCO3dHQUF2QixZQUFROzs7NkdBS2lDLGdCQUFnQjs7dUZBTHpELHVCQUF1QjtjQVZuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsSUFBSSxFQUFFO29CQUNKLGVBQWUsRUFBRSxNQUFNO29CQUN2QixzQkFBc0IsRUFBRSxPQUFPO29CQUMvQixzQkFBc0IsRUFBRSxrQkFBa0I7b0JBQzFDLFNBQVMsRUFBRSxVQUFVO2lCQUN0QjthQUNGO2tIQUc2RCxJQUFJO2tCQUEvRCxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7WUFHMkIsUUFBUTtrQkFBckYsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSx3QkFBd0IsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFM0MsVUFBVTtrQkFBbkMsTUFBTTtZQUNtQixVQUFVO2tCQUFuQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29ubmVjdGVkUG9zaXRpb24sIE92ZXJsYXksIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCwgVmlld0NvbnRhaW5lclJlZiwgYm9vbGVhbkF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBmaWx0ZXIsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNcmRNZW51Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tcmQtbWVudS9tcmQtbWVudS5jb21wb25lbnQnO1xuXG4vKipcbiAqIE9lZmZuZXQgZWluIGBtcmQtbWVudWAgYmVpbSBLbGljayBhdWYgZGFzIEVsZW1lbnQgKGF1Y2ggYXVmIGBtcmQtcy1idXR0b25gKSBpbiBlaW5lbSBPdmVybGF5LlxuICogR2VzY2hsb3NzZW4gd2lyZCBwZXIgRWludHJhZywgS2xpY2sgZGFuZWJlbiwgRXNjYXBlIG9kZXIgVGFiOyBkYW5hY2ggZ2VodCBkZXIgRm9rdXMgenVydWVjayBhbiBkZW4gVHJpZ2dlci5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21yZE1lbnVUcmlnZ2VyRm9yXScsXG4gIGV4cG9ydEFzOiAnbXJkTWVudVRyaWdnZXInLFxuICBob3N0OiB7XG4gICAgJ2FyaWEtaGFzcG9wdXAnOiAnbWVudScsXG4gICAgJ1thdHRyLmFyaWEtZXhwYW5kZWRdJzogJ29mZmVuJyxcbiAgICAnW2F0dHIuYXJpYS1kaXNhYmxlZF0nOiAnZGlzYWJsZWQgfHwgbnVsbCcsXG4gICAgJyhjbGljayknOiAndG9nZ2xlKCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTXJkTWVudVRyaWdnZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCh7YWxpYXM6ICdtcmRNZW51VHJpZ2dlckZvcicsIHJlcXVpcmVkOiB0cnVlfSkgcHVibGljIG1lbnU6IE1yZE1lbnVDb21wb25lbnQ7XG5cbiAgLyoqIFNwZXJydCBkYXMgT2VmZm5lbjsgZWluIGRlYWt0aXZpZXJ0ZXIgQnV0dG9uIGFscyBUcmlnZ2VyIChhdWNoIGRlciBpbm5lcmUgZWluZXMgYG1yZC1zLWJ1dHRvbmApIHNwZXJydCBhdXRvbWF0aXNjaCAqL1xuICBASW5wdXQoe2FsaWFzOiAnbXJkTWVudVRyaWdnZXJEaXNhYmxlZCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBwdWJsaWMgcmVhZG9ubHkgbWVudU9wZW5lZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcHVibGljIHJlYWRvbmx5IG1lbnVDbG9zZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XG4gIHByaXZhdGUgYWJvczogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZlxuICApIHt9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5hYm9zLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5vdmVybGF5UmVmPy5kaXNwb3NlKCk7XG4gICAgdGhpcy5vdmVybGF5UmVmID0gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgb2ZmZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5vdmVybGF5UmVmPy5oYXNBdHRhY2hlZCgpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vZmZlbikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGdlc3BlcnJ0KCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBidXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50ID8gZWxlbWVudCA6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gICAgcmV0dXJuICEhYnV0dG9uPy5kaXNhYmxlZDtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9mZmVuIHx8ICF0aGlzLm1lbnUgfHwgdGhpcy5nZXNwZXJydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh7XG4gICAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpXG4gICAgICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5lbGVtZW50UmVmKVxuICAgICAgICAgIC53aXRoUG9zaXRpb25zKHRoaXMucG9zaXRpb25lbigpKVxuICAgICAgICAgIC53aXRoUHVzaChmYWxzZSksXG4gICAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKCksXG4gICAgICAgIGhhc0JhY2tkcm9wOiB0cnVlLFxuICAgICAgICBiYWNrZHJvcENsYXNzOiAnY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AnXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUG9zaXRpb24ga2FubiBzaWNoIHNlaXQgZGVtIGxldHp0ZW4gT2VmZm5lbiBnZWFlbmRlcnQgaGFiZW4gKHhQb3NpdGlvbi95UG9zaXRpb24gc2luZCBJbnB1dHMpXG4gICAgICB0aGlzLm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb25TdHJhdGVneSh0aGlzLm92ZXJsYXkucG9zaXRpb24oKVxuICAgICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLmVsZW1lbnRSZWYpXG4gICAgICAgIC53aXRoUG9zaXRpb25zKHRoaXMucG9zaXRpb25lbigpKVxuICAgICAgICAud2l0aFB1c2goZmFsc2UpKTtcbiAgICB9XG4gICAgdGhpcy5vdmVybGF5UmVmLmF0dGFjaChuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5tZW51LnBhbmVsVGVtcGxhdGUsIHRoaXMudmlld0NvbnRhaW5lclJlZikpO1xuICAgIHRoaXMuYWJvcyA9IG1lcmdlKFxuICAgICAgdGhpcy5vdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKSxcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5rZXlkb3duRXZlbnRzKCkucGlwZShmaWx0ZXIoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiBldmVudC5rZXkgPT09ICdFc2NhcGUnKSksXG4gICAgICB0aGlzLm1lbnUuc2NobGllc3NlbkFuZ2Vmb3JkZXJ0XG4gICAgKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZSgpKTtcbiAgICB0aGlzLm1lbnUuZm9rdXNFcnN0ZXJFaW50cmFnKCk7XG4gICAgdGhpcy5tZW51Lm9wZW5lZC5lbWl0KCk7XG4gICAgdGhpcy5tZW51T3BlbmVkLmVtaXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMub2ZmZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5hYm9zLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgIHRoaXMuZm9rdXNadXJ1ZWNrKCk7XG4gICAgdGhpcy5tZW51LmNsb3NlZC5lbWl0KCk7XG4gICAgdGhpcy5tZW51Q2xvc2VkLmVtaXQoKTtcbiAgfVxuXG4gIC8qKiBCZWkgS29tcG9uZW50ZW4gd2llIGBtcmQtcy1idXR0b25gIGlzdCBkZXIgSG9zdCBzZWxic3QgbmljaHQgZm9rdXNzaWVyYmFyLCBzb25kZXJuIGRlciBCdXR0b24gZGFyaW4gKi9cbiAgcHJpdmF0ZSBmb2t1c1p1cnVlY2soKTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHppZWwgPSBlbGVtZW50Lm1hdGNoZXMoJ2J1dHRvbiwgYSwgW3RhYmluZGV4XScpID8gZWxlbWVudCA6IGVsZW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJ2J1dHRvbiwgYSwgW3RhYmluZGV4XScpID8/IGVsZW1lbnQ7XG4gICAgemllbC5mb2N1cygpO1xuICB9XG5cbiAgcHJpdmF0ZSBwb3NpdGlvbmVuKCk6IENvbm5lY3RlZFBvc2l0aW9uW10ge1xuICAgIGNvbnN0IFtvcmlnaW5YLCBnZWdlbk9yaWdpblhdOiAoJ3N0YXJ0JyB8ICdlbmQnKVtdID0gdGhpcy5tZW51LnhQb3NpdGlvbiA9PT0gJ2JlZm9yZScgPyBbJ2VuZCcsICdzdGFydCddIDogWydzdGFydCcsICdlbmQnXTtcbiAgICBjb25zdCB1bnRlbjogQ29ubmVjdGVkUG9zaXRpb24gPSB7b3JpZ2luWCwgb3JpZ2luWTogJ2JvdHRvbScsIG92ZXJsYXlYOiBvcmlnaW5YLCBvdmVybGF5WTogJ3RvcCd9O1xuICAgIGNvbnN0IG9iZW46IENvbm5lY3RlZFBvc2l0aW9uID0ge29yaWdpblgsIG9yaWdpblk6ICd0b3AnLCBvdmVybGF5WDogb3JpZ2luWCwgb3ZlcmxheVk6ICdib3R0b20nfTtcbiAgICBjb25zdCBbZXJzdCwgZGFubl0gPSB0aGlzLm1lbnUueVBvc2l0aW9uID09PSAnYWJvdmUnID8gW29iZW4sIHVudGVuXSA6IFt1bnRlbiwgb2Jlbl07XG4gICAgcmV0dXJuIFtcbiAgICAgIGVyc3QsXG4gICAgICBkYW5uLFxuICAgICAgey4uLmVyc3QsIG9yaWdpblg6IGdlZ2VuT3JpZ2luWCwgb3ZlcmxheVg6IGdlZ2VuT3JpZ2luWH0sXG4gICAgICB7Li4uZGFubiwgb3JpZ2luWDogZ2VnZW5PcmlnaW5YLCBvdmVybGF5WDogZ2VnZW5PcmlnaW5YfVxuICAgIF07XG4gIH1cbn1cbiJdfQ==