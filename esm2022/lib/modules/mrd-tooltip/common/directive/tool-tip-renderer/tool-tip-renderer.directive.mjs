import { MrdTooltipComponent } from './../../../components/mrd-tooltip/mrd-tooltip.component';
import { Directive, HostListener, Input, RendererStyleFlags2, booleanAttribute, numberAttribute } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
/** `line-clamp` ohne Wert steht fuer eine Zeile; null, 0 oder ungueltige Werte heben die Begrenzung auf */
export function zeilenAnzahlAttribute(value) {
    if (value === '') {
        return 1;
    }
    const anzahl = Number(value);
    return value !== null && value !== undefined && anzahl > 0 ? Math.floor(anzahl) : null;
}
export class ToolTipRendererDirective {
    _overlay;
    _overlayPositionBuilder;
    _elementRef;
    renderer;
    /**
     * Gibt an, ob der Tooltip angezeigt werden soll
     *
     * @memberof ToolTipRendererDirective
     */
    set showToolTip(value) {
        this._showToolTip = value;
        this.ngOnInit();
    }
    ;
    _showToolTip = true;
    /**
     * Der Text, der im Tooltip angezeigt werden soll
     *
     * @type {string}
     * @memberof ToolTipRendererDirective
     */
    text;
    /**
     * Ein eigenes Template, das im Tooltip angezeigt werden soll
     *
     * @type {TemplateRef<any>}
     * @memberof ToolTipRendererDirective
     */
    contentTemplate;
    /**
     * Gibt an, ob der Standard-Style des Tooltips verwendet werden soll.
     *
     * Standard: true
     *
     * @type {boolean}
     * @memberof ToolTipRendererDirective
     */
    defaultStyle = true;
    /**
     * Die Position, an der der Tooltip angezeigt werden soll.
     *
     * Standard: 'bottom'
     *
     * @type {('top' | 'bottom' | 'left' | 'right')}
     * @memberof ToolTipRendererDirective
     */
    position = 'bottom';
    /**
     * Gibt an, ob der Tooltip nur angezeigt werden soll, wenn der Text abgeschnitten wird.
     *
     * Standard: false
     *
     * @type {boolean}
     * @memberof ToolTipRendererDirective
     */
    showIfTruncated = false;
    /**
     * Wenn gesetzt, wird der Tooltip nur angezeigt, wenn der Inhalt des Elements abgeschnitten wird
     *
     * @type {HTMLElement}
     * @memberof ToolTipRendererDirective
     */
    showOnTruncatedElement;
    /**
     * Begrenzt den Inhalt auf hoechstens so viele Zeilen und kuerzt ihn mit "…".
     * Zusammen mit `showIfTruncated` erscheint der Tooltip nur, wenn Text abgeschnitten ist.
     * Die Direktive setzt dafuer `display: -webkit-box` am Element.
     *
     * Beispiel: `<span [mrdToolTip]="text" showIfTruncated [line-clamp]="2">{{text}}</span>`
     */
    set lineClamp(value) {
        this._lineClamp = value;
        this.zeilenbegrenzungAnwenden();
    }
    get lineClamp() {
        return this._lineClamp;
    }
    _lineClamp = null;
    zeilenbegrenzungGesetzt = false;
    /**
     * Gibt an, ob der Tooltip geöffnet bleiben soll, wenn der Mauszeiger über dem Tooltip ist.
     *
     * Standard: false
     *
     * @type {boolean}
     * @memberof ToolTipRendererDirective
     */
    keepOnTooltipHover = false;
    /**
     * Gibt an, wie lange gewartet werden soll, bevor der Tooltip angezeigt wird.
     *
     * Wert in Millisekunden
     *
     * Standard: 0
     *
     * @type {number}
     * @memberof ToolTipRendererDirective
     */
    showDelay = 0;
    /**
     * Gibt an, wie lange gewartet werden soll, bevor der Tooltip geschlossen wird.
     *
     * Wert in Millisekunden
     *
     * Standard: 0
     *
     * @type {number}
     * @memberof ToolTipRendererDirective
     */
    hideDelay = 0;
    _overlayRef;
    disabled = true;
    tooltipRef;
    origin;
    constructor(_overlay, _overlayPositionBuilder, _elementRef, renderer) {
        this._overlay = _overlay;
        this._overlayPositionBuilder = _overlayPositionBuilder;
        this._elementRef = _elementRef;
        this.renderer = renderer;
    }
    ngOnInit() {
        if (!this._showToolTip) {
            this.closeToolTip();
            return;
        }
        // Standardwerte sind für Position 'bottom'
        let overlayY = "top";
        let offsetY = 5;
        let originY = "bottom";
        let originX = "center";
        let overlayX = "center";
        let offsetX = 0;
        if (this.position === "top") {
            originY = "top";
            overlayY = "bottom";
            offsetY = -5;
        }
        if (this.position === "left") {
            originY = "center";
            overlayY = "center";
            offsetY = 0;
            originX = "start";
            overlayX = "end";
            offsetX = -5;
        }
        if (this.position === "right") {
            originY = "center";
            overlayY = "center";
            offsetY = 0;
            originX = "end";
            overlayX = "start";
            offsetX = 5;
        }
        this.origin = {
            originX: originX,
            originY: originY,
            overlayX: overlayX,
            overlayY: overlayY,
            offsetY: offsetY,
            offsetX: offsetX
        };
        // const positionStrategy = this._overlayPositionBuilder
        //                               .flexibleConnectedTo(this._elementRef)
        //                               .withPositions([{
        //                                                 originX: originX,
        //                                                 originY: originY,
        //                                                 overlayX: overlayX,
        //                                                 overlayY: overlayY,
        //                                                 offsetY: offsetY,
        //                                                 offsetX: offsetX
        //                                             }]);
        // this._overlayRef = this._overlay.create({ positionStrategy });
    }
    /**
     * This method will be called whenever the mouse enters in the Host element
     * i.e. where this directive is applied
     * This method will show the tooltip by instantiating the CustomToolTipComponent and attaching to the overlay
     */
    show() {
        if (!this._showToolTip) {
            return;
        }
        if (this.showIfTruncated) {
            const element = this._elementRef.nativeElement;
            // Bisheriger Weg ohne line-clamp-Input: Klasse mit "ellipsis" plus -webkit-line-clamp als Inline-Style
            const altesZeilenMuster = element.style.webkitLineClamp !== '' && element.classList?.value?.includes('ellipsis');
            this.disabled = this._lineClamp || altesZeilenMuster
                ? element.scrollHeight <= element.clientHeight
                : element.scrollWidth <= element.clientWidth;
        }
        else if (this.showOnTruncatedElement) {
            this.disabled = this.showOnTruncatedElement.scrollWidth <= this.showOnTruncatedElement.clientWidth;
        }
        else {
            this.disabled = false;
        }
        if (!this.disabled && !this._overlayRef) {
            const positionStrategy = this._overlayPositionBuilder
                .flexibleConnectedTo(this._elementRef)
                .withPositions([this.origin]);
            this._overlayRef = this._overlay.create({ positionStrategy });
        }
        //attach the component if it has not already attached to the overlay
        if (!this.disabled && this._overlayRef && !this._overlayRef.hasAttached()) {
            setTimeout(() => {
                this.tooltipRef = this._overlayRef.attach(new ComponentPortal(MrdTooltipComponent));
                this.tooltipRef.instance.text = this.text;
                this.tooltipRef.instance.contentTemplate = this.contentTemplate;
                this.tooltipRef.instance.defaultStyle = this.defaultStyle;
                if (this.keepOnTooltipHover) {
                    this.tooltipRef.location.nativeElement.onmouseleave = () => {
                        this.closeToolTip();
                    };
                }
            }, this.showDelay);
        }
    }
    isMouseOverTooltip(event) {
        // Überprüfe, ob der Mauszeiger sich über dem Tooltip befindet
        if (!this.tooltipRef) {
            return false;
        }
        const tooltipRect = this.tooltipRef.location.nativeElement.getBoundingClientRect();
        return (event.clientX + 10 >= tooltipRect.left &&
            event.clientX - 10 <= tooltipRect.right &&
            event.clientY + 10 >= tooltipRect.top &&
            event.clientY - 10 <= tooltipRect.bottom);
    }
    /**
     * This method will be called when the mouse goes out of the host element
     * i.e. where this directive is applied
     * This method will close the tooltip by detaching the overlay from the view
     */
    hide(event) {
        if (this.tooltipRef && this.keepOnTooltipHover && event) {
            setTimeout(() => {
                if (!this.isMouseOverTooltip(event)) {
                    this.closeToolTip();
                }
                else {
                    this.tooltipRef.location.nativeElement.onmouseleave = () => {
                        this.closeToolTip();
                    };
                }
            }, 200);
        }
        else {
            this.closeToolTip();
        }
    }
    /**
     * Destroy lifecycle event handler
     * This method will make sure to close the tooltip
     */
    ngOnDestroy() {
        this.closeToolTip();
    }
    zeilenbegrenzungAnwenden() {
        const element = this._elementRef.nativeElement;
        if (this._lineClamp) {
            this.renderer.setStyle(element, 'display', '-webkit-box');
            this.renderer.setStyle(element, '-webkit-box-orient', 'vertical', RendererStyleFlags2.DashCase);
            this.renderer.setStyle(element, '-webkit-line-clamp', String(this._lineClamp), RendererStyleFlags2.DashCase);
            this.renderer.setStyle(element, 'overflow', 'hidden');
            this.zeilenbegrenzungGesetzt = true;
        }
        else if (this.zeilenbegrenzungGesetzt) {
            this.renderer.removeStyle(element, 'display');
            this.renderer.removeStyle(element, '-webkit-box-orient', RendererStyleFlags2.DashCase);
            this.renderer.removeStyle(element, '-webkit-line-clamp', RendererStyleFlags2.DashCase);
            this.renderer.removeStyle(element, 'overflow');
            this.zeilenbegrenzungGesetzt = false;
        }
    }
    /**
     * This method will close the tooltip by detaching the component from the overlay
     */
    closeToolTip() {
        if (this._overlayRef) {
            setTimeout(() => {
                this._overlayRef.detach();
                this._overlayRef.dispose();
                this._overlayRef = null;
            }, this.hideDelay);
        }
    }
    /** @nocollapse */ static ɵfac = function ToolTipRendererDirective_Factory(t) { return new (t || ToolTipRendererDirective)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i1.OverlayPositionBuilder), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: ToolTipRendererDirective, selectors: [["", "mrdToolTip", ""]], hostBindings: function ToolTipRendererDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseenter", function ToolTipRendererDirective_mouseenter_HostBindingHandler() { return ctx.show(); })("mouseleave", function ToolTipRendererDirective_mouseleave_HostBindingHandler($event) { return ctx.hide($event); });
        } }, inputs: { showToolTip: "showToolTip", text: ["mrdToolTip", "text"], contentTemplate: "contentTemplate", defaultStyle: "defaultStyle", position: "position", showIfTruncated: ["showIfTruncated", "showIfTruncated", booleanAttribute], showOnTruncatedElement: "showOnTruncatedElement", lineClamp: ["line-clamp", "lineClamp", zeilenAnzahlAttribute], keepOnTooltipHover: ["keepOnTooltipHover", "keepOnTooltipHover", booleanAttribute], showDelay: ["showDelay", "showDelay", numberAttribute], hideDelay: ["hideDelay", "hideDelay", numberAttribute] }, exportAs: ["mrdToolTip"], features: [i0.ɵɵInputTransformsFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolTipRendererDirective, [{
        type: Directive,
        args: [{
                selector: '[mrdToolTip]',
                exportAs: 'mrdToolTip'
            }]
    }], function () { return [{ type: i1.Overlay }, { type: i1.OverlayPositionBuilder }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { showToolTip: [{
            type: Input
        }], text: [{
            type: Input,
            args: [`mrdToolTip`]
        }], contentTemplate: [{
            type: Input
        }], defaultStyle: [{
            type: Input
        }], position: [{
            type: Input
        }], showIfTruncated: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], showOnTruncatedElement: [{
            type: Input
        }], lineClamp: [{
            type: Input,
            args: [{ alias: 'line-clamp', transform: zeilenAnzahlAttribute }]
        }], keepOnTooltipHover: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], showDelay: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], hideDelay: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], show: [{
            type: HostListener,
            args: ['mouseenter']
        }], hide: [{
            type: HostListener,
            args: ['mouseleave', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbC10aXAtcmVuZGVyZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10b29sdGlwL2NvbW1vbi9kaXJlY3RpdmUvdG9vbC10aXAtcmVuZGVyZXIvdG9vbC10aXAtcmVuZGVyZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzlGLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXNDLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6SyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQUd0RCwyR0FBMkc7QUFDM0csTUFBTSxVQUFVLHFCQUFxQixDQUFDLEtBQXlDO0lBQzdFLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtRQUNoQixPQUFPLENBQUMsQ0FBQztLQUNWO0lBQ0QsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLE9BQU8sS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUN6RixDQUFDO0FBTUQsTUFBTSxPQUFPLHdCQUF3QjtJQStIekI7SUFDQTtJQUNBO0lBQ0E7SUFoSVY7Ozs7T0FJRztJQUNILElBQWEsV0FBVyxDQUFDLEtBQUs7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFBQSxDQUFDO0lBQ00sWUFBWSxHQUFZLElBQUksQ0FBQztJQUVyQzs7Ozs7T0FLRztJQUNrQixJQUFJLENBQVM7SUFFbEM7Ozs7O09BS0c7SUFDTSxlQUFlLENBQW1CO0lBRTNDOzs7Ozs7O09BT0c7SUFDTSxZQUFZLEdBQVksSUFBSSxDQUFDO0lBRXRDOzs7Ozs7O09BT0c7SUFDTSxRQUFRLEdBQXdDLFFBQVEsQ0FBQztJQUVsRTs7Ozs7OztPQU9HO0lBQ21DLGVBQWUsR0FBWSxLQUFLLENBQUM7SUFFdkU7Ozs7O09BS0c7SUFDTSxzQkFBc0IsQ0FBYztJQUU3Qzs7Ozs7O09BTUc7SUFDSCxJQUFvRSxTQUFTLENBQUMsS0FBb0I7UUFDaEcsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNPLFVBQVUsR0FBa0IsSUFBSSxDQUFDO0lBRWpDLHVCQUF1QixHQUFZLEtBQUssQ0FBQztJQUVqRDs7Ozs7OztPQU9HO0lBQ21DLGtCQUFrQixHQUFZLEtBQUssQ0FBQztJQUUxRTs7Ozs7Ozs7O09BU0c7SUFDa0MsU0FBUyxHQUFXLENBQUMsQ0FBQztJQUMzRDs7Ozs7Ozs7O09BU0c7SUFDa0MsU0FBUyxHQUFXLENBQUMsQ0FBQztJQUVuRCxXQUFXLENBQWE7SUFFeEIsUUFBUSxHQUFZLElBQUksQ0FBQztJQUV6QixVQUFVLENBQW9DO0lBRTlDLE1BQU0sQ0FBb0I7SUFFbEMsWUFDVSxRQUFpQixFQUNqQix1QkFBK0MsRUFDL0MsV0FBdUIsRUFDdkIsUUFBbUI7UUFIbkIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXdCO1FBQy9DLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDekIsQ0FBQztJQUVMLFFBQVE7UUFFTixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsT0FBTztTQUNSO1FBRUQsMkNBQTJDO1FBQzNDLElBQUksUUFBUSxHQUFnQyxLQUFLLENBQUM7UUFDbEQsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksT0FBTyxHQUFnQyxRQUFRLENBQUM7UUFDcEQsSUFBSSxPQUFPLEdBQStCLFFBQVEsQ0FBQztRQUNuRCxJQUFJLFFBQVEsR0FBK0IsUUFBUSxDQUFDO1FBQ3BELElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUFFO1lBQzNCLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDaEIsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUNwQixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDZDtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxNQUFNLEVBQUU7WUFDNUIsT0FBTyxHQUFHLFFBQVEsQ0FBQztZQUNuQixRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3BCLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDWixPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ2xCLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDakIsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUFFO1lBQzdCLE9BQU8sR0FBRyxRQUFRLENBQUM7WUFDbkIsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUNwQixPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ1osT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNoQixRQUFRLEdBQUcsT0FBTyxDQUFDO1lBQ25CLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDYjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsT0FBTztZQUNoQixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsUUFBUTtZQUNsQixPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsT0FBTztTQUNqQixDQUFDO1FBRUYsd0RBQXdEO1FBQ3hELHVFQUF1RTtRQUN2RSxrREFBa0Q7UUFDbEQsb0VBQW9FO1FBQ3BFLG9FQUFvRTtRQUNwRSxzRUFBc0U7UUFDdEUsc0VBQXNFO1FBQ3RFLG9FQUFvRTtRQUNwRSxtRUFBbUU7UUFDbkUsbURBQW1EO1FBQ25ELGlFQUFpRTtJQUNuRSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUVILElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixPQUFPO1NBQ1I7UUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsTUFBTSxPQUFPLEdBQWdCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1lBQzVELHVHQUF1RztZQUN2RyxNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxLQUFLLEVBQUUsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakgsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLGlCQUFpQjtnQkFDbEQsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDLFlBQVk7Z0JBQzlDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUM7U0FDaEQ7YUFBTSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQztTQUNwRzthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDdkMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCO2lCQUN4QixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2lCQUNyQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1NBQy9EO1FBRUQsb0VBQW9FO1FBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBRXpFLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BGLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztnQkFDaEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBRTFELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO29CQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLEdBQUcsRUFBRTt3QkFDekQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUN0QixDQUFDLENBQUE7aUJBQ0Y7WUFDSCxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVPLGtCQUFrQixDQUFDLEtBQWlCO1FBQzFDLDhEQUE4RDtRQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDbkYsT0FBTyxDQUNMLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJO1lBQ3RDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxLQUFLO1lBQ3ZDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxHQUFHO1lBQ3JDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQ3pDLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUVILElBQUksQ0FBQyxLQUFrQjtRQUNyQixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGtCQUFrQixJQUFJLEtBQUssRUFBRTtZQUN2RCxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ25DLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDckI7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxHQUFHLEVBQUU7d0JBQ3pELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQyxDQUFBO2lCQUNGO1lBQ0gsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTyx3QkFBd0I7UUFDOUIsTUFBTSxPQUFPLEdBQWdCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQzVELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxVQUFVLEVBQUUsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0csSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO1NBQ3JDO2FBQU0sSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2RixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxZQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQzFCLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDcEI7SUFDSCxDQUFDO3FHQXZUVSx3QkFBd0I7NEZBQXhCLHdCQUF3QjttSEFBeEIsVUFBTSxvR0FBTixnQkFBWTtpT0F5REosZ0JBQWdCLDRGQXJFckIscUJBQXFCLG9FQXlHaEIsZ0JBQWdCLHlDQVloQixlQUFlLHlDQVdmLGVBQWU7O3VGQXBIdkIsd0JBQXdCO2NBSnBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLFlBQVk7YUFDdkI7Z0pBUWMsV0FBVztrQkFBdkIsS0FBSztZQVllLElBQUk7a0JBQXhCLEtBQUs7bUJBQUMsWUFBWTtZQVFWLGVBQWU7a0JBQXZCLEtBQUs7WUFVRyxZQUFZO2tCQUFwQixLQUFLO1lBVUcsUUFBUTtrQkFBaEIsS0FBSztZQVVnQyxlQUFlO2tCQUFwRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBUTNCLHNCQUFzQjtrQkFBOUIsS0FBSztZQVM4RCxTQUFTO2tCQUE1RSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUscUJBQXFCLEVBQUM7WUFtQnhCLGtCQUFrQjtrQkFBdkQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQVlDLFNBQVM7a0JBQTdDLEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFDO1lBV0UsU0FBUztrQkFBN0MsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUM7WUFpRm5DLElBQUk7a0JBREgsWUFBWTttQkFBQyxZQUFZO1lBK0QxQixJQUFJO2tCQURILFlBQVk7bUJBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXJkVG9vbHRpcENvbXBvbmVudCB9IGZyb20gJy4vLi4vLi4vLi4vY29tcG9uZW50cy9tcmQtdG9vbHRpcC9tcmQtdG9vbHRpcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRSZWYsIERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCwgVGVtcGxhdGVSZWYsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgUmVuZGVyZXJTdHlsZUZsYWdzMiwgYm9vbGVhbkF0dHJpYnV0ZSwgbnVtYmVyQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBDb25uZWN0ZWRQb3NpdGlvbiwgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LCBPdmVybGF5LCBPdmVybGF5UG9zaXRpb25CdWlsZGVyLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5cclxuLyoqIGBsaW5lLWNsYW1wYCBvaG5lIFdlcnQgc3RlaHQgZnVlciBlaW5lIFplaWxlOyBudWxsLCAwIG9kZXIgdW5ndWVsdGlnZSBXZXJ0ZSBoZWJlbiBkaWUgQmVncmVuenVuZyBhdWYgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHplaWxlbkFuemFobEF0dHJpYnV0ZSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCk6IG51bWJlciB8IG51bGwge1xyXG4gIGlmICh2YWx1ZSA9PT0gJycpIHtcclxuICAgIHJldHVybiAxO1xyXG4gIH1cclxuICBjb25zdCBhbnphaGwgPSBOdW1iZXIodmFsdWUpO1xyXG4gIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIGFuemFobCA+IDAgPyBNYXRoLmZsb29yKGFuemFobCkgOiBudWxsO1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttcmRUb29sVGlwXScsXHJcbiAgZXhwb3J0QXM6ICdtcmRUb29sVGlwJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9vbFRpcFJlbmRlcmVyRGlyZWN0aXZlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIFRvb2x0aXAgYW5nZXplaWd0IHdlcmRlbiBzb2xsXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgVG9vbFRpcFJlbmRlcmVyRGlyZWN0aXZlXHJcbiAgICovXHJcbiAgQElucHV0KCkgc2V0IHNob3dUb29sVGlwKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9zaG93VG9vbFRpcCA9IHZhbHVlO1xyXG4gICAgdGhpcy5uZ09uSW5pdCgpO1xyXG4gIH07XHJcbiAgcHJpdmF0ZSBfc2hvd1Rvb2xUaXA6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBEZXIgVGV4dCwgZGVyIGltIFRvb2x0aXAgYW5nZXplaWd0IHdlcmRlbiBzb2xsXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBUb29sVGlwUmVuZGVyZXJEaXJlY3RpdmVcclxuICAgKi9cclxuICBASW5wdXQoYG1yZFRvb2xUaXBgKSB0ZXh0OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVpbiBlaWdlbmVzIFRlbXBsYXRlLCBkYXMgaW0gVG9vbHRpcCBhbmdlemVpZ3Qgd2VyZGVuIHNvbGxcclxuICAgKlxyXG4gICAqIEB0eXBlIHtUZW1wbGF0ZVJlZjxhbnk+fVxyXG4gICAqIEBtZW1iZXJvZiBUb29sVGlwUmVuZGVyZXJEaXJlY3RpdmVcclxuICAgKi9cclxuICBASW5wdXQoKSBjb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBTdGFuZGFyZC1TdHlsZSBkZXMgVG9vbHRpcHMgdmVyd2VuZGV0IHdlcmRlbiBzb2xsLlxyXG4gICAqXHJcbiAgICogU3RhbmRhcmQ6IHRydWVcclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBUb29sVGlwUmVuZGVyZXJEaXJlY3RpdmVcclxuICAgKi9cclxuICBASW5wdXQoKSBkZWZhdWx0U3R5bGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBEaWUgUG9zaXRpb24sIGFuIGRlciBkZXIgVG9vbHRpcCBhbmdlemVpZ3Qgd2VyZGVuIHNvbGwuXHJcbiAgICpcclxuICAgKiBTdGFuZGFyZDogJ2JvdHRvbSdcclxuICAgKlxyXG4gICAqIEB0eXBlIHsoJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcpfVxyXG4gICAqIEBtZW1iZXJvZiBUb29sVGlwUmVuZGVyZXJEaXJlY3RpdmVcclxuICAgKi9cclxuICBASW5wdXQoKSBwb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcgPSAnYm90dG9tJztcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIFRvb2x0aXAgbnVyIGFuZ2V6ZWlndCB3ZXJkZW4gc29sbCwgd2VubiBkZXIgVGV4dCBhYmdlc2Nobml0dGVuIHdpcmQuXHJcbiAgICpcclxuICAgKiBTdGFuZGFyZDogZmFsc2VcclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBUb29sVGlwUmVuZGVyZXJEaXJlY3RpdmVcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHNob3dJZlRydW5jYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBXZW5uIGdlc2V0enQsIHdpcmQgZGVyIFRvb2x0aXAgbnVyIGFuZ2V6ZWlndCwgd2VubiBkZXIgSW5oYWx0IGRlcyBFbGVtZW50cyBhYmdlc2Nobml0dGVuIHdpcmRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cclxuICAgKiBAbWVtYmVyb2YgVG9vbFRpcFJlbmRlcmVyRGlyZWN0aXZlXHJcbiAgICovXHJcbiAgQElucHV0KCkgc2hvd09uVHJ1bmNhdGVkRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJlZ3Jlbnp0IGRlbiBJbmhhbHQgYXVmIGhvZWNoc3RlbnMgc28gdmllbGUgWmVpbGVuIHVuZCBrdWVyenQgaWhuIG1pdCBcIuKAplwiLlxyXG4gICAqIFp1c2FtbWVuIG1pdCBgc2hvd0lmVHJ1bmNhdGVkYCBlcnNjaGVpbnQgZGVyIFRvb2x0aXAgbnVyLCB3ZW5uIFRleHQgYWJnZXNjaG5pdHRlbiBpc3QuXHJcbiAgICogRGllIERpcmVrdGl2ZSBzZXR6dCBkYWZ1ZXIgYGRpc3BsYXk6IC13ZWJraXQtYm94YCBhbSBFbGVtZW50LlxyXG4gICAqXHJcbiAgICogQmVpc3BpZWw6IGA8c3BhbiBbbXJkVG9vbFRpcF09XCJ0ZXh0XCIgc2hvd0lmVHJ1bmNhdGVkIFtsaW5lLWNsYW1wXT1cIjJcIj57e3RleHR9fTwvc3Bhbj5gXHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ2xpbmUtY2xhbXAnLCB0cmFuc2Zvcm06IHplaWxlbkFuemFobEF0dHJpYnV0ZX0pIHNldCBsaW5lQ2xhbXAodmFsdWU6IG51bWJlciB8IG51bGwpIHtcclxuICAgIHRoaXMuX2xpbmVDbGFtcCA9IHZhbHVlO1xyXG4gICAgdGhpcy56ZWlsZW5iZWdyZW56dW5nQW53ZW5kZW4oKTtcclxuICB9XHJcbiAgcHVibGljIGdldCBsaW5lQ2xhbXAoKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGluZUNsYW1wO1xyXG4gIH1cclxuICBwcml2YXRlIF9saW5lQ2xhbXA6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIHplaWxlbmJlZ3Jlbnp1bmdHZXNldHp0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBUb29sdGlwIGdlw7ZmZm5ldCBibGVpYmVuIHNvbGwsIHdlbm4gZGVyIE1hdXN6ZWlnZXIgw7xiZXIgZGVtIFRvb2x0aXAgaXN0LlxyXG4gICAqXHJcbiAgICogU3RhbmRhcmQ6IGZhbHNlXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgVG9vbFRpcFJlbmRlcmVyRGlyZWN0aXZlXHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBrZWVwT25Ub29sdGlwSG92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgd2llIGxhbmdlIGdld2FydGV0IHdlcmRlbiBzb2xsLCBiZXZvciBkZXIgVG9vbHRpcCBhbmdlemVpZ3Qgd2lyZC5cclxuICAgKlxyXG4gICAqIFdlcnQgaW4gTWlsbGlzZWt1bmRlblxyXG4gICAqXHJcbiAgICogU3RhbmRhcmQ6IDBcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIFRvb2xUaXBSZW5kZXJlckRpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBzaG93RGVsYXk6IG51bWJlciA9IDA7XHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgd2llIGxhbmdlIGdld2FydGV0IHdlcmRlbiBzb2xsLCBiZXZvciBkZXIgVG9vbHRpcCBnZXNjaGxvc3NlbiB3aXJkLlxyXG4gICAqXHJcbiAgICogV2VydCBpbiBNaWxsaXNla3VuZGVuXHJcbiAgICpcclxuICAgKiBTdGFuZGFyZDogMFxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgVG9vbFRpcFJlbmRlcmVyRGlyZWN0aXZlXHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIGhpZGVEZWxheTogbnVtYmVyID0gMDtcclxuXHJcbiAgcHJpdmF0ZSBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcclxuXHJcbiAgcHJpdmF0ZSBkaXNhYmxlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIHByaXZhdGUgdG9vbHRpcFJlZjogQ29tcG9uZW50UmVmPE1yZFRvb2x0aXBDb21wb25lbnQ+O1xyXG5cclxuICBwcml2YXRlIG9yaWdpbjogQ29ubmVjdGVkUG9zaXRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIHByaXZhdGUgX292ZXJsYXlQb3NpdGlvbkJ1aWxkZXI6IE92ZXJsYXlQb3NpdGlvbkJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgaWYgKCF0aGlzLl9zaG93VG9vbFRpcCkge1xyXG4gICAgICB0aGlzLmNsb3NlVG9vbFRpcCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3RhbmRhcmR3ZXJ0ZSBzaW5kIGbDvHIgUG9zaXRpb24gJ2JvdHRvbSdcclxuICAgIGxldCBvdmVybGF5WTogXCJ0b3BcIiB8IFwiYm90dG9tXCIgfCBcImNlbnRlclwiID0gXCJ0b3BcIjtcclxuICAgIGxldCBvZmZzZXRZID0gNTtcclxuICAgIGxldCBvcmlnaW5ZOiBcInRvcFwiIHwgXCJib3R0b21cIiB8IFwiY2VudGVyXCIgPSBcImJvdHRvbVwiO1xyXG4gICAgbGV0IG9yaWdpblg6IFwic3RhcnRcIiB8IFwiZW5kXCIgfCBcImNlbnRlclwiID0gXCJjZW50ZXJcIjtcclxuICAgIGxldCBvdmVybGF5WDogXCJzdGFydFwiIHwgXCJlbmRcIiB8IFwiY2VudGVyXCIgPSBcImNlbnRlclwiO1xyXG4gICAgbGV0IG9mZnNldFggPSAwO1xyXG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09IFwidG9wXCIpIHtcclxuICAgICAgb3JpZ2luWSA9IFwidG9wXCI7XHJcbiAgICAgIG92ZXJsYXlZID0gXCJib3R0b21cIjtcclxuICAgICAgb2Zmc2V0WSA9IC01O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09IFwibGVmdFwiKSB7XHJcbiAgICAgIG9yaWdpblkgPSBcImNlbnRlclwiO1xyXG4gICAgICBvdmVybGF5WSA9IFwiY2VudGVyXCI7XHJcbiAgICAgIG9mZnNldFkgPSAwO1xyXG4gICAgICBvcmlnaW5YID0gXCJzdGFydFwiO1xyXG4gICAgICBvdmVybGF5WCA9IFwiZW5kXCI7XHJcbiAgICAgIG9mZnNldFggPSAtNTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSBcInJpZ2h0XCIpIHtcclxuICAgICAgb3JpZ2luWSA9IFwiY2VudGVyXCI7XHJcbiAgICAgIG92ZXJsYXlZID0gXCJjZW50ZXJcIjtcclxuICAgICAgb2Zmc2V0WSA9IDA7XHJcbiAgICAgIG9yaWdpblggPSBcImVuZFwiO1xyXG4gICAgICBvdmVybGF5WCA9IFwic3RhcnRcIjtcclxuICAgICAgb2Zmc2V0WCA9IDU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vcmlnaW4gPSB7XHJcbiAgICAgIG9yaWdpblg6IG9yaWdpblgsXHJcbiAgICAgIG9yaWdpblk6IG9yaWdpblksXHJcbiAgICAgIG92ZXJsYXlYOiBvdmVybGF5WCxcclxuICAgICAgb3ZlcmxheVk6IG92ZXJsYXlZLFxyXG4gICAgICBvZmZzZXRZOiBvZmZzZXRZLFxyXG4gICAgICBvZmZzZXRYOiBvZmZzZXRYXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLl9vdmVybGF5UG9zaXRpb25CdWlsZGVyXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLl9lbGVtZW50UmVmKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLndpdGhQb3NpdGlvbnMoW3tcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpblg6IG9yaWdpblgsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5ZOiBvcmlnaW5ZLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheVg6IG92ZXJsYXlYLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheVk6IG92ZXJsYXlZLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogb2Zmc2V0WSxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IG9mZnNldFhcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV0pO1xyXG4gICAgLy8gdGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKHsgcG9zaXRpb25TdHJhdGVneSB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIHdoZW5ldmVyIHRoZSBtb3VzZSBlbnRlcnMgaW4gdGhlIEhvc3QgZWxlbWVudFxyXG4gICAqIGkuZS4gd2hlcmUgdGhpcyBkaXJlY3RpdmUgaXMgYXBwbGllZFxyXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgc2hvdyB0aGUgdG9vbHRpcCBieSBpbnN0YW50aWF0aW5nIHRoZSBDdXN0b21Ub29sVGlwQ29tcG9uZW50IGFuZCBhdHRhY2hpbmcgdG8gdGhlIG92ZXJsYXlcclxuICAgKi9cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcclxuICBzaG93KCkge1xyXG4gICAgaWYgKCF0aGlzLl9zaG93VG9vbFRpcCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zaG93SWZUcnVuY2F0ZWQpIHtcclxuICAgICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIC8vIEJpc2hlcmlnZXIgV2VnIG9obmUgbGluZS1jbGFtcC1JbnB1dDogS2xhc3NlIG1pdCBcImVsbGlwc2lzXCIgcGx1cyAtd2Via2l0LWxpbmUtY2xhbXAgYWxzIElubGluZS1TdHlsZVxyXG4gICAgICBjb25zdCBhbHRlc1plaWxlbk11c3RlciA9IGVsZW1lbnQuc3R5bGUud2Via2l0TGluZUNsYW1wICE9PSAnJyAmJiBlbGVtZW50LmNsYXNzTGlzdD8udmFsdWU/LmluY2x1ZGVzKCdlbGxpcHNpcycpO1xyXG4gICAgICB0aGlzLmRpc2FibGVkID0gdGhpcy5fbGluZUNsYW1wIHx8IGFsdGVzWmVpbGVuTXVzdGVyXHJcbiAgICAgICAgPyBlbGVtZW50LnNjcm9sbEhlaWdodCA8PSBlbGVtZW50LmNsaWVudEhlaWdodFxyXG4gICAgICAgIDogZWxlbWVudC5zY3JvbGxXaWR0aCA8PSBlbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNob3dPblRydW5jYXRlZEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuc2hvd09uVHJ1bmNhdGVkRWxlbWVudC5zY3JvbGxXaWR0aCA8PSB0aGlzLnNob3dPblRydW5jYXRlZEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLl9vdmVybGF5UmVmKSB7XHJcbiAgICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLl9vdmVybGF5UG9zaXRpb25CdWlsZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLl9lbGVtZW50UmVmKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLndpdGhQb3NpdGlvbnMoW3RoaXMub3JpZ2luXSk7XHJcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh7IHBvc2l0aW9uU3RyYXRlZ3kgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vYXR0YWNoIHRoZSBjb21wb25lbnQgaWYgaXQgaGFzIG5vdCBhbHJlYWR5IGF0dGFjaGVkIHRvIHRoZSBvdmVybGF5XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5fb3ZlcmxheVJlZiAmJiAhdGhpcy5fb3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XHJcbiAgICAgIFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnRvb2x0aXBSZWYgPSB0aGlzLl9vdmVybGF5UmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKE1yZFRvb2x0aXBDb21wb25lbnQpKTtcclxuICAgICAgICB0aGlzLnRvb2x0aXBSZWYuaW5zdGFuY2UudGV4dCA9IHRoaXMudGV4dDtcclxuICAgICAgICB0aGlzLnRvb2x0aXBSZWYuaW5zdGFuY2UuY29udGVudFRlbXBsYXRlID0gdGhpcy5jb250ZW50VGVtcGxhdGU7XHJcbiAgICAgICAgdGhpcy50b29sdGlwUmVmLmluc3RhbmNlLmRlZmF1bHRTdHlsZSA9IHRoaXMuZGVmYXVsdFN0eWxlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5rZWVwT25Ub29sdGlwSG92ZXIpIHtcclxuICAgICAgICAgIHRoaXMudG9vbHRpcFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50Lm9ubW91c2VsZWF2ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVRvb2xUaXAoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIHRoaXMuc2hvd0RlbGF5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNNb3VzZU92ZXJUb29sdGlwKGV2ZW50OiBNb3VzZUV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICAvLyDDnGJlcnByw7xmZSwgb2IgZGVyIE1hdXN6ZWlnZXIgc2ljaCDDvGJlciBkZW0gVG9vbHRpcCBiZWZpbmRldFxyXG4gICAgaWYgKCF0aGlzLnRvb2x0aXBSZWYpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdG9vbHRpcFJlY3QgPSB0aGlzLnRvb2x0aXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGV2ZW50LmNsaWVudFggKyAxMCA+PSB0b29sdGlwUmVjdC5sZWZ0ICYmXHJcbiAgICAgIGV2ZW50LmNsaWVudFggLSAxMCA8PSB0b29sdGlwUmVjdC5yaWdodCAmJlxyXG4gICAgICBldmVudC5jbGllbnRZICsgMTAgPj0gdG9vbHRpcFJlY3QudG9wICYmXHJcbiAgICAgIGV2ZW50LmNsaWVudFkgLSAxMCA8PSB0b29sdGlwUmVjdC5ib3R0b21cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBtb3VzZSBnb2VzIG91dCBvZiB0aGUgaG9zdCBlbGVtZW50XHJcbiAgICogaS5lLiB3aGVyZSB0aGlzIGRpcmVjdGl2ZSBpcyBhcHBsaWVkXHJcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBjbG9zZSB0aGUgdG9vbHRpcCBieSBkZXRhY2hpbmcgdGhlIG92ZXJsYXkgZnJvbSB0aGUgdmlld1xyXG4gICAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBbJyRldmVudCddKVxyXG4gIGhpZGUoZXZlbnQ/OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy50b29sdGlwUmVmICYmIHRoaXMua2VlcE9uVG9vbHRpcEhvdmVyICYmIGV2ZW50KSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5pc01vdXNlT3ZlclRvb2x0aXAoZXZlbnQpKSB7XHJcbiAgICAgICAgICB0aGlzLmNsb3NlVG9vbFRpcCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnRvb2x0aXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudC5vbm1vdXNlbGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VUb29sVGlwKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAyMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jbG9zZVRvb2xUaXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc3Ryb3kgbGlmZWN5Y2xlIGV2ZW50IGhhbmRsZXJcclxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIG1ha2Ugc3VyZSB0byBjbG9zZSB0aGUgdG9vbHRpcFxyXG4gICAqL1xyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5jbG9zZVRvb2xUaXAoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgemVpbGVuYmVncmVuenVuZ0Fud2VuZGVuKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBpZiAodGhpcy5fbGluZUNsYW1wKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWxlbWVudCwgJ2Rpc3BsYXknLCAnLXdlYmtpdC1ib3gnKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtZW50LCAnLXdlYmtpdC1ib3gtb3JpZW50JywgJ3ZlcnRpY2FsJywgUmVuZGVyZXJTdHlsZUZsYWdzMi5EYXNoQ2FzZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWxlbWVudCwgJy13ZWJraXQtbGluZS1jbGFtcCcsIFN0cmluZyh0aGlzLl9saW5lQ2xhbXApLCBSZW5kZXJlclN0eWxlRmxhZ3MyLkRhc2hDYXNlKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtZW50LCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICAgIHRoaXMuemVpbGVuYmVncmVuenVuZ0dlc2V0enQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnplaWxlbmJlZ3Jlbnp1bmdHZXNldHp0KSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUoZWxlbWVudCwgJ2Rpc3BsYXknKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShlbGVtZW50LCAnLXdlYmtpdC1ib3gtb3JpZW50JywgUmVuZGVyZXJTdHlsZUZsYWdzMi5EYXNoQ2FzZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUoZWxlbWVudCwgJy13ZWJraXQtbGluZS1jbGFtcCcsIFJlbmRlcmVyU3R5bGVGbGFnczIuRGFzaENhc2UpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKGVsZW1lbnQsICdvdmVyZmxvdycpO1xyXG4gICAgICB0aGlzLnplaWxlbmJlZ3Jlbnp1bmdHZXNldHp0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIGNsb3NlIHRoZSB0b29sdGlwIGJ5IGRldGFjaGluZyB0aGUgY29tcG9uZW50IGZyb20gdGhlIG92ZXJsYXlcclxuICAgKi9cclxuICBwcml2YXRlIGNsb3NlVG9vbFRpcCgpIHtcclxuICAgIGlmICh0aGlzLl9vdmVybGF5UmVmKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX292ZXJsYXlSZWYuZGV0YWNoKCk7XHJcbiAgICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5fb3ZlcmxheVJlZiA9IG51bGw7XHJcbiAgICAgIH0sIHRoaXMuaGlkZURlbGF5KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19