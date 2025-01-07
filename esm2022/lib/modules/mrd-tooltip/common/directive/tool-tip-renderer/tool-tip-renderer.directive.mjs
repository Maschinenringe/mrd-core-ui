import { MrdTooltipComponent } from './../../../components/mrd-tooltip/mrd-tooltip.component';
import { Directive, HostListener, Input, booleanAttribute, numberAttribute } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class ToolTipRendererDirective {
    _overlay;
    _overlayPositionBuilder;
    _elementRef;
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
    constructor(_overlay, _overlayPositionBuilder, _elementRef) {
        this._overlay = _overlay;
        this._overlayPositionBuilder = _overlayPositionBuilder;
        this._elementRef = _elementRef;
    }
    ngOnInit() {
        if (!this._showToolTip) {
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
        const positionStrategy = this._overlayPositionBuilder
            .flexibleConnectedTo(this._elementRef)
            .withPositions([{
                originX: originX,
                originY: originY,
                overlayX: overlayX,
                overlayY: overlayY,
                offsetY: offsetY,
                offsetX: offsetX
            }]);
        this._overlayRef = this._overlay.create({ positionStrategy });
    }
    /**
     * This method will be called whenever the mouse enters in the Host element
     * i.e. where this directive is applied
     * This method will show the tooltip by instantiating the CustomToolTipComponent and attaching to the overlay
     */
    show() {
        if (this.showIfTruncated) {
            const element = this._elementRef.nativeElement;
            this.disabled = element.scrollWidth <= element.clientWidth;
            if (element.style.webkitLineClamp !== '' && element.classList && element.classList.value && element.classList.value.includes('ellipsis')) {
                this.disabled = element.scrollHeight <= element.clientHeight;
            }
        }
        else if (this.showOnTruncatedElement) {
            this.disabled = this.showOnTruncatedElement.scrollWidth <= this.showOnTruncatedElement.clientWidth;
        }
        else {
            this.disabled = false;
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
    /**
     * This method will close the tooltip by detaching the component from the overlay
     */
    closeToolTip() {
        if (this._overlayRef) {
            setTimeout(() => {
                this._overlayRef.detach();
            }, this.hideDelay);
        }
    }
    /** @nocollapse */ static ɵfac = function ToolTipRendererDirective_Factory(t) { return new (t || ToolTipRendererDirective)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i1.OverlayPositionBuilder), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: ToolTipRendererDirective, selectors: [["", "mrdToolTip", ""]], hostBindings: function ToolTipRendererDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseenter", function ToolTipRendererDirective_mouseenter_HostBindingHandler() { return ctx.show(); })("mouseleave", function ToolTipRendererDirective_mouseleave_HostBindingHandler($event) { return ctx.hide($event); });
        } }, inputs: { showToolTip: "showToolTip", text: ["mrdToolTip", "text"], contentTemplate: "contentTemplate", defaultStyle: "defaultStyle", position: "position", showIfTruncated: ["showIfTruncated", "showIfTruncated", booleanAttribute], showOnTruncatedElement: "showOnTruncatedElement", keepOnTooltipHover: ["keepOnTooltipHover", "keepOnTooltipHover", booleanAttribute], showDelay: ["showDelay", "showDelay", numberAttribute], hideDelay: ["hideDelay", "hideDelay", numberAttribute] }, exportAs: ["mrdToolTip"], features: [i0.ɵɵInputTransformsFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolTipRendererDirective, [{
        type: Directive,
        args: [{
                selector: '[mrdToolTip]',
                exportAs: 'mrdToolTip'
            }]
    }], function () { return [{ type: i1.Overlay }, { type: i1.OverlayPositionBuilder }, { type: i0.ElementRef }]; }, { showToolTip: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbC10aXAtcmVuZGVyZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10b29sdGlwL2NvbW1vbi9kaXJlY3RpdmUvdG9vbC10aXAtcmVuZGVyZXIvdG9vbC10aXAtcmVuZGVyZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzlGLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQTJCLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6SSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQU90RCxNQUFNLE9BQU8sd0JBQXdCO0lBMkd6QjtJQUNBO0lBQ0E7SUEzR1Y7Ozs7T0FJRztJQUNILElBQWEsV0FBVyxDQUFDLEtBQUs7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFBQSxDQUFDO0lBQ00sWUFBWSxHQUFZLElBQUksQ0FBQztJQUVyQzs7Ozs7T0FLRztJQUNrQixJQUFJLENBQVM7SUFFbEM7Ozs7O09BS0c7SUFDTSxlQUFlLENBQW1CO0lBRTNDOzs7Ozs7O09BT0c7SUFDTSxZQUFZLEdBQVksSUFBSSxDQUFDO0lBRXRDOzs7Ozs7O09BT0c7SUFDTSxRQUFRLEdBQXdDLFFBQVEsQ0FBQztJQUVsRTs7Ozs7OztPQU9HO0lBQ21DLGVBQWUsR0FBWSxLQUFLLENBQUM7SUFFdkU7Ozs7O09BS0c7SUFDTSxzQkFBc0IsQ0FBYztJQUU3Qzs7Ozs7OztPQU9HO0lBQ21DLGtCQUFrQixHQUFZLEtBQUssQ0FBQztJQUUxRTs7Ozs7Ozs7O09BU0c7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LEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztxR0ExUFUsd0JBQXdCOzRGQUF4Qix3QkFBd0I7bUhBQXhCLFVBQU0sb0dBQU4sZ0JBQVk7aU9BeURKLGdCQUFnQixzSEFrQmhCLGdCQUFnQix5Q0FZaEIsZUFBZSx5Q0FXZixlQUFlOzt1RkFsR3ZCLHdCQUF3QjtjQUpwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxZQUFZO2FBQ3ZCO3dIQVFjLFdBQVc7a0JBQXZCLEtBQUs7WUFZZSxJQUFJO2tCQUF4QixLQUFLO21CQUFDLFlBQVk7WUFRVixlQUFlO2tCQUF2QixLQUFLO1lBVUcsWUFBWTtrQkFBcEIsS0FBSztZQVVHLFFBQVE7a0JBQWhCLEtBQUs7WUFVZ0MsZUFBZTtrQkFBcEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQVEzQixzQkFBc0I7a0JBQTlCLEtBQUs7WUFVZ0Msa0JBQWtCO2tCQUF2RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBWUMsU0FBUztrQkFBN0MsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUM7WUFXRSxTQUFTO2tCQUE3QyxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBQztZQXNFbkMsSUFBSTtrQkFESCxZQUFZO21CQUFDLFlBQVk7WUFrRDFCLElBQUk7a0JBREgsWUFBWTttQkFBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNcmRUb29sdGlwQ29tcG9uZW50IH0gZnJvbSAnLi8uLi8uLi8uLi9jb21wb25lbnRzL21yZC10b29sdGlwL21yZC10b29sdGlwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFJlZiwgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBUZW1wbGF0ZVJlZiwgRWxlbWVudFJlZiwgYm9vbGVhbkF0dHJpYnV0ZSwgbnVtYmVyQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5UG9zaXRpb25CdWlsZGVyLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbXJkVG9vbFRpcF0nLFxyXG4gIGV4cG9ydEFzOiAnbXJkVG9vbFRpcCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2xUaXBSZW5kZXJlckRpcmVjdGl2ZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBUb29sdGlwIGFuZ2V6ZWlndCB3ZXJkZW4gc29sbFxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIFRvb2xUaXBSZW5kZXJlckRpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHNldCBzaG93VG9vbFRpcCh2YWx1ZSkge1xyXG4gICAgdGhpcy5fc2hvd1Rvb2xUaXAgPSB2YWx1ZTtcclxuICAgIHRoaXMubmdPbkluaXQoKTtcclxuICB9O1xyXG4gIHByaXZhdGUgX3Nob3dUb29sVGlwOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGVyIFRleHQsIGRlciBpbSBUb29sdGlwIGFuZ2V6ZWlndCB3ZXJkZW4gc29sbFxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgVG9vbFRpcFJlbmRlcmVyRGlyZWN0aXZlXHJcbiAgICovXHJcbiAgQElucHV0KGBtcmRUb29sVGlwYCkgdGV4dDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBFaW4gZWlnZW5lcyBUZW1wbGF0ZSwgZGFzIGltIFRvb2x0aXAgYW5nZXplaWd0IHdlcmRlbiBzb2xsXHJcbiAgICpcclxuICAgKiBAdHlwZSB7VGVtcGxhdGVSZWY8YW55Pn1cclxuICAgKiBAbWVtYmVyb2YgVG9vbFRpcFJlbmRlcmVyRGlyZWN0aXZlXHJcbiAgICovXHJcbiAgQElucHV0KCkgY29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgU3RhbmRhcmQtU3R5bGUgZGVzIFRvb2x0aXBzIHZlcndlbmRldCB3ZXJkZW4gc29sbC5cclxuICAgKlxyXG4gICAqIFN0YW5kYXJkOiB0cnVlXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgVG9vbFRpcFJlbmRlcmVyRGlyZWN0aXZlXHJcbiAgICovXHJcbiAgQElucHV0KCkgZGVmYXVsdFN0eWxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGllIFBvc2l0aW9uLCBhbiBkZXIgZGVyIFRvb2x0aXAgYW5nZXplaWd0IHdlcmRlbiBzb2xsLlxyXG4gICAqXHJcbiAgICogU3RhbmRhcmQ6ICdib3R0b20nXHJcbiAgICpcclxuICAgKiBAdHlwZSB7KCd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnKX1cclxuICAgKiBAbWVtYmVyb2YgVG9vbFRpcFJlbmRlcmVyRGlyZWN0aXZlXHJcbiAgICovXHJcbiAgQElucHV0KCkgcG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnID0gJ2JvdHRvbSc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBUb29sdGlwIG51ciBhbmdlemVpZ3Qgd2VyZGVuIHNvbGwsIHdlbm4gZGVyIFRleHQgYWJnZXNjaG5pdHRlbiB3aXJkLlxyXG4gICAqXHJcbiAgICogU3RhbmRhcmQ6IGZhbHNlXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgVG9vbFRpcFJlbmRlcmVyRGlyZWN0aXZlXHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBzaG93SWZUcnVuY2F0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogV2VubiBnZXNldHp0LCB3aXJkIGRlciBUb29sdGlwIG51ciBhbmdlemVpZ3QsIHdlbm4gZGVyIEluaGFsdCBkZXMgRWxlbWVudHMgYWJnZXNjaG5pdHRlbiB3aXJkXHJcbiAgICpcclxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XHJcbiAgICogQG1lbWJlcm9mIFRvb2xUaXBSZW5kZXJlckRpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHNob3dPblRydW5jYXRlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgVG9vbHRpcCBnZcO2ZmZuZXQgYmxlaWJlbiBzb2xsLCB3ZW5uIGRlciBNYXVzemVpZ2VyIMO8YmVyIGRlbSBUb29sdGlwIGlzdC5cclxuICAgKlxyXG4gICAqIFN0YW5kYXJkOiBmYWxzZVxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIFRvb2xUaXBSZW5kZXJlckRpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkga2VlcE9uVG9vbHRpcEhvdmVyOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIHdpZSBsYW5nZSBnZXdhcnRldCB3ZXJkZW4gc29sbCwgYmV2b3IgZGVyIFRvb2x0aXAgYW5nZXplaWd0IHdpcmQuXHJcbiAgICpcclxuICAgKiBXZXJ0IGluIE1pbGxpc2VrdW5kZW5cclxuICAgKlxyXG4gICAqIFN0YW5kYXJkOiAwXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBUb29sVGlwUmVuZGVyZXJEaXJlY3RpdmVcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgc2hvd0RlbGF5OiBudW1iZXIgPSAwO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIHdpZSBsYW5nZSBnZXdhcnRldCB3ZXJkZW4gc29sbCwgYmV2b3IgZGVyIFRvb2x0aXAgZ2VzY2hsb3NzZW4gd2lyZC5cclxuICAgKlxyXG4gICAqIFdlcnQgaW4gTWlsbGlzZWt1bmRlblxyXG4gICAqXHJcbiAgICogU3RhbmRhcmQ6IDBcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIFRvb2xUaXBSZW5kZXJlckRpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBoaWRlRGVsYXk6IG51bWJlciA9IDA7XHJcblxyXG4gIHByaXZhdGUgX292ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XHJcblxyXG4gIHByaXZhdGUgZGlzYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBwcml2YXRlIHRvb2x0aXBSZWY6IENvbXBvbmVudFJlZjxNcmRUb29sdGlwQ29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LFxyXG4gICAgcHJpdmF0ZSBfb3ZlcmxheVBvc2l0aW9uQnVpbGRlcjogT3ZlcmxheVBvc2l0aW9uQnVpbGRlcixcclxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWZcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICBpZiAoIXRoaXMuX3Nob3dUb29sVGlwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdGFuZGFyZHdlcnRlIHNpbmQgZsO8ciBQb3NpdGlvbiAnYm90dG9tJ1xyXG4gICAgbGV0IG92ZXJsYXlZOiBcInRvcFwiIHwgXCJib3R0b21cIiB8IFwiY2VudGVyXCIgPSBcInRvcFwiO1xyXG4gICAgbGV0IG9mZnNldFkgPSA1O1xyXG4gICAgbGV0IG9yaWdpblk6IFwidG9wXCIgfCBcImJvdHRvbVwiIHwgXCJjZW50ZXJcIiA9IFwiYm90dG9tXCI7XHJcbiAgICBsZXQgb3JpZ2luWDogXCJzdGFydFwiIHwgXCJlbmRcIiB8IFwiY2VudGVyXCIgPSBcImNlbnRlclwiO1xyXG4gICAgbGV0IG92ZXJsYXlYOiBcInN0YXJ0XCIgfCBcImVuZFwiIHwgXCJjZW50ZXJcIiA9IFwiY2VudGVyXCI7XHJcbiAgICBsZXQgb2Zmc2V0WCA9IDA7XHJcbiAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gXCJ0b3BcIikge1xyXG4gICAgICBvcmlnaW5ZID0gXCJ0b3BcIjtcclxuICAgICAgb3ZlcmxheVkgPSBcImJvdHRvbVwiO1xyXG4gICAgICBvZmZzZXRZID0gLTU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gXCJsZWZ0XCIpIHtcclxuICAgICAgb3JpZ2luWSA9IFwiY2VudGVyXCI7XHJcbiAgICAgIG92ZXJsYXlZID0gXCJjZW50ZXJcIjtcclxuICAgICAgb2Zmc2V0WSA9IDA7XHJcbiAgICAgIG9yaWdpblggPSBcInN0YXJ0XCI7XHJcbiAgICAgIG92ZXJsYXlYID0gXCJlbmRcIjtcclxuICAgICAgb2Zmc2V0WCA9IC01O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09IFwicmlnaHRcIikge1xyXG4gICAgICBvcmlnaW5ZID0gXCJjZW50ZXJcIjtcclxuICAgICAgb3ZlcmxheVkgPSBcImNlbnRlclwiO1xyXG4gICAgICBvZmZzZXRZID0gMDtcclxuICAgICAgb3JpZ2luWCA9IFwiZW5kXCI7XHJcbiAgICAgIG92ZXJsYXlYID0gXCJzdGFydFwiO1xyXG4gICAgICBvZmZzZXRYID0gNTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5fb3ZlcmxheVBvc2l0aW9uQnVpbGRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5fZWxlbWVudFJlZilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC53aXRoUG9zaXRpb25zKFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5YOiBvcmlnaW5YLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luWTogb3JpZ2luWSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXlYOiBvdmVybGF5WCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXlZOiBvdmVybGF5WSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IG9mZnNldFksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiBvZmZzZXRYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dKTtcclxuXHJcbiAgICB0aGlzLl9vdmVybGF5UmVmID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUoeyBwb3NpdGlvblN0cmF0ZWd5fSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgd2hlbmV2ZXIgdGhlIG1vdXNlIGVudGVycyBpbiB0aGUgSG9zdCBlbGVtZW50XHJcbiAgICogaS5lLiB3aGVyZSB0aGlzIGRpcmVjdGl2ZSBpcyBhcHBsaWVkXHJcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBzaG93IHRoZSB0b29sdGlwIGJ5IGluc3RhbnRpYXRpbmcgdGhlIEN1c3RvbVRvb2xUaXBDb21wb25lbnQgYW5kIGF0dGFjaGluZyB0byB0aGUgb3ZlcmxheVxyXG4gICAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxyXG4gIHNob3coKSB7XHJcbiAgICBpZiAodGhpcy5zaG93SWZUcnVuY2F0ZWQpIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgdGhpcy5kaXNhYmxlZCA9IGVsZW1lbnQuc2Nyb2xsV2lkdGggPD0gZWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgaWYgKGVsZW1lbnQuc3R5bGUud2Via2l0TGluZUNsYW1wICE9PSAnJyAmJiBlbGVtZW50LmNsYXNzTGlzdCAmJiBlbGVtZW50LmNsYXNzTGlzdC52YWx1ZSAmJiBlbGVtZW50LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnZWxsaXBzaXMnKSkge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBlbGVtZW50LnNjcm9sbEhlaWdodCA8PSBlbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNob3dPblRydW5jYXRlZEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuc2hvd09uVHJ1bmNhdGVkRWxlbWVudC5zY3JvbGxXaWR0aCA8PSB0aGlzLnNob3dPblRydW5jYXRlZEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvL2F0dGFjaCB0aGUgY29tcG9uZW50IGlmIGl0IGhhcyBub3QgYWxyZWFkeSBhdHRhY2hlZCB0byB0aGUgb3ZlcmxheVxyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMuX292ZXJsYXlSZWYgJiYgIXRoaXMuX292ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnRvb2x0aXBSZWYgPSB0aGlzLl9vdmVybGF5UmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKE1yZFRvb2x0aXBDb21wb25lbnQpKTtcclxuICAgICAgICB0aGlzLnRvb2x0aXBSZWYuaW5zdGFuY2UudGV4dCA9IHRoaXMudGV4dDtcclxuICAgICAgICB0aGlzLnRvb2x0aXBSZWYuaW5zdGFuY2UuY29udGVudFRlbXBsYXRlID0gdGhpcy5jb250ZW50VGVtcGxhdGU7XHJcbiAgICAgICAgdGhpcy50b29sdGlwUmVmLmluc3RhbmNlLmRlZmF1bHRTdHlsZSA9IHRoaXMuZGVmYXVsdFN0eWxlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5rZWVwT25Ub29sdGlwSG92ZXIpIHtcclxuICAgICAgICAgIHRoaXMudG9vbHRpcFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50Lm9ubW91c2VsZWF2ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVRvb2xUaXAoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIHRoaXMuc2hvd0RlbGF5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNNb3VzZU92ZXJUb29sdGlwKGV2ZW50OiBNb3VzZUV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICAvLyDDnGJlcnByw7xmZSwgb2IgZGVyIE1hdXN6ZWlnZXIgc2ljaCDDvGJlciBkZW0gVG9vbHRpcCBiZWZpbmRldFxyXG4gICAgaWYgKCF0aGlzLnRvb2x0aXBSZWYpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdG9vbHRpcFJlY3QgPSB0aGlzLnRvb2x0aXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGV2ZW50LmNsaWVudFggKyAxMCA+PSB0b29sdGlwUmVjdC5sZWZ0ICYmXHJcbiAgICAgIGV2ZW50LmNsaWVudFggLSAxMCA8PSB0b29sdGlwUmVjdC5yaWdodCAmJlxyXG4gICAgICBldmVudC5jbGllbnRZICsgMTAgPj0gdG9vbHRpcFJlY3QudG9wICYmXHJcbiAgICAgIGV2ZW50LmNsaWVudFkgLSAxMCA8PSB0b29sdGlwUmVjdC5ib3R0b21cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBtb3VzZSBnb2VzIG91dCBvZiB0aGUgaG9zdCBlbGVtZW50XHJcbiAgICogaS5lLiB3aGVyZSB0aGlzIGRpcmVjdGl2ZSBpcyBhcHBsaWVkXHJcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBjbG9zZSB0aGUgdG9vbHRpcCBieSBkZXRhY2hpbmcgdGhlIG92ZXJsYXkgZnJvbSB0aGUgdmlld1xyXG4gICAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBbJyRldmVudCddKVxyXG4gIGhpZGUoZXZlbnQ/OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy50b29sdGlwUmVmICYmIHRoaXMua2VlcE9uVG9vbHRpcEhvdmVyICYmIGV2ZW50KSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5pc01vdXNlT3ZlclRvb2x0aXAoZXZlbnQpKSB7XHJcbiAgICAgICAgICB0aGlzLmNsb3NlVG9vbFRpcCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnRvb2x0aXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudC5vbm1vdXNlbGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VUb29sVGlwKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAyMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jbG9zZVRvb2xUaXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc3Ryb3kgbGlmZWN5Y2xlIGV2ZW50IGhhbmRsZXJcclxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIG1ha2Ugc3VyZSB0byBjbG9zZSB0aGUgdG9vbHRpcFxyXG4gICAqL1xyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5jbG9zZVRvb2xUaXAoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgY2xvc2UgdGhlIHRvb2x0aXAgYnkgZGV0YWNoaW5nIHRoZSBjb21wb25lbnQgZnJvbSB0aGUgb3ZlcmxheVxyXG4gICAqL1xyXG4gIHByaXZhdGUgY2xvc2VUb29sVGlwKCkge1xyXG4gICAgaWYgKHRoaXMuX292ZXJsYXlSZWYpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kZXRhY2goKTtcclxuICAgICAgfSwgdGhpcy5oaWRlRGVsYXkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=