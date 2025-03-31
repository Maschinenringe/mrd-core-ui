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
        if (!this._showToolTip) {
            return;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbC10aXAtcmVuZGVyZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10b29sdGlwL2NvbW1vbi9kaXJlY3RpdmUvdG9vbC10aXAtcmVuZGVyZXIvdG9vbC10aXAtcmVuZGVyZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzlGLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQTJCLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6SSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQU90RCxNQUFNLE9BQU8sd0JBQXdCO0lBMkd6QjtJQUNBO0lBQ0E7SUEzR1Y7Ozs7T0FJRztJQUNILElBQWEsV0FBVyxDQUFDLEtBQUs7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFBQSxDQUFDO0lBQ00sWUFBWSxHQUFZLElBQUksQ0FBQztJQUVyQzs7Ozs7T0FLRztJQUNrQixJQUFJLENBQVM7SUFFbEM7Ozs7O09BS0c7SUFDTSxlQUFlLENBQW1CO0lBRTNDOzs7Ozs7O09BT0c7SUFDTSxZQUFZLEdBQVksSUFBSSxDQUFDO0lBRXRDOzs7Ozs7O09BT0c7SUFDTSxRQUFRLEdBQXdDLFFBQVEsQ0FBQztJQUVsRTs7Ozs7OztPQU9HO0lBQ21DLGVBQWUsR0FBWSxLQUFLLENBQUM7SUFFdkU7Ozs7O09BS0c7SUFDTSxzQkFBc0IsQ0FBYztJQUU3Qzs7Ozs7OztPQU9HO0lBQ21DLGtCQUFrQixHQUFZLEtBQUssQ0FBQztJQUUxRTs7Ozs7Ozs7O09BU0c7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QUN0QixDQUFDO0lBRUQ7O09BRUc7SUFDSyxZQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7cUdBOVBVLHdCQUF3Qjs0RkFBeEIsd0JBQXdCO21IQUF4QixVQUFNLG9HQUFOLGdCQUFZO2lPQXlESixnQkFBZ0Isc0hBa0JoQixnQkFBZ0IseUNBWWhCLGVBQWUseUNBV2YsZUFBZTs7dUZBbEd2Qix3QkFBd0I7Y0FKcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsWUFBWTthQUN2Qjt3SEFRYyxXQUFXO2tCQUF2QixLQUFLO1lBWWUsSUFBSTtrQkFBeEIsS0FBSzttQkFBQyxZQUFZO1lBUVYsZUFBZTtrQkFBdkIsS0FBSztZQVVHLFlBQVk7a0JBQXBCLEtBQUs7WUFVRyxRQUFRO2tCQUFoQixLQUFLO1lBVWdDLGVBQWU7a0JBQXBELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFRM0Isc0JBQXNCO2tCQUE5QixLQUFLO1lBVWdDLGtCQUFrQjtrQkFBdkQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQVlDLFNBQVM7a0JBQTdDLEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFDO1lBV0UsU0FBUztrQkFBN0MsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUM7WUF1RW5DLElBQUk7a0JBREgsWUFBWTttQkFBQyxZQUFZO1lBcUQxQixJQUFJO2tCQURILFlBQVk7bUJBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXJkVG9vbHRpcENvbXBvbmVudCB9IGZyb20gJy4vLi4vLi4vLi4vY29tcG9uZW50cy9tcmQtdG9vbHRpcC9tcmQtdG9vbHRpcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRSZWYsIERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCwgVGVtcGxhdGVSZWYsIEVsZW1lbnRSZWYsIGJvb2xlYW5BdHRyaWJ1dGUsIG51bWJlckF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVBvc2l0aW9uQnVpbGRlciwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW21yZFRvb2xUaXBdJyxcclxuICBleHBvcnRBczogJ21yZFRvb2xUaXAnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sVGlwUmVuZGVyZXJEaXJlY3RpdmUge1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgVG9vbHRpcCBhbmdlemVpZ3Qgd2VyZGVuIHNvbGxcclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBUb29sVGlwUmVuZGVyZXJEaXJlY3RpdmVcclxuICAgKi9cclxuICBASW5wdXQoKSBzZXQgc2hvd1Rvb2xUaXAodmFsdWUpIHtcclxuICAgIHRoaXMuX3Nob3dUb29sVGlwID0gdmFsdWU7XHJcbiAgICB0aGlzLm5nT25Jbml0KCk7XHJcbiAgfTtcclxuICBwcml2YXRlIF9zaG93VG9vbFRpcDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlciBUZXh0LCBkZXIgaW0gVG9vbHRpcCBhbmdlemVpZ3Qgd2VyZGVuIHNvbGxcclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIFRvb2xUaXBSZW5kZXJlckRpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIEBJbnB1dChgbXJkVG9vbFRpcGApIHRleHQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRWluIGVpZ2VuZXMgVGVtcGxhdGUsIGRhcyBpbSBUb29sdGlwIGFuZ2V6ZWlndCB3ZXJkZW4gc29sbFxyXG4gICAqXHJcbiAgICogQHR5cGUge1RlbXBsYXRlUmVmPGFueT59XHJcbiAgICogQG1lbWJlcm9mIFRvb2xUaXBSZW5kZXJlckRpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIFN0YW5kYXJkLVN0eWxlIGRlcyBUb29sdGlwcyB2ZXJ3ZW5kZXQgd2VyZGVuIHNvbGwuXHJcbiAgICpcclxuICAgKiBTdGFuZGFyZDogdHJ1ZVxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIFRvb2xUaXBSZW5kZXJlckRpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRTdHlsZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIERpZSBQb3NpdGlvbiwgYW4gZGVyIGRlciBUb29sdGlwIGFuZ2V6ZWlndCB3ZXJkZW4gc29sbC5cclxuICAgKlxyXG4gICAqIFN0YW5kYXJkOiAnYm90dG9tJ1xyXG4gICAqXHJcbiAgICogQHR5cGUgeygndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0Jyl9XHJcbiAgICogQG1lbWJlcm9mIFRvb2xUaXBSZW5kZXJlckRpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdib3R0b20nO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgVG9vbHRpcCBudXIgYW5nZXplaWd0IHdlcmRlbiBzb2xsLCB3ZW5uIGRlciBUZXh0IGFiZ2VzY2huaXR0ZW4gd2lyZC5cclxuICAgKlxyXG4gICAqIFN0YW5kYXJkOiBmYWxzZVxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIFRvb2xUaXBSZW5kZXJlckRpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgc2hvd0lmVHJ1bmNhdGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFdlbm4gZ2VzZXR6dCwgd2lyZCBkZXIgVG9vbHRpcCBudXIgYW5nZXplaWd0LCB3ZW5uIGRlciBJbmhhbHQgZGVzIEVsZW1lbnRzIGFiZ2VzY2huaXR0ZW4gd2lyZFxyXG4gICAqXHJcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxyXG4gICAqIEBtZW1iZXJvZiBUb29sVGlwUmVuZGVyZXJEaXJlY3RpdmVcclxuICAgKi9cclxuICBASW5wdXQoKSBzaG93T25UcnVuY2F0ZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIFRvb2x0aXAgZ2XDtmZmbmV0IGJsZWliZW4gc29sbCwgd2VubiBkZXIgTWF1c3plaWdlciDDvGJlciBkZW0gVG9vbHRpcCBpc3QuXHJcbiAgICpcclxuICAgKiBTdGFuZGFyZDogZmFsc2VcclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBUb29sVGlwUmVuZGVyZXJEaXJlY3RpdmVcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGtlZXBPblRvb2x0aXBIb3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCB3aWUgbGFuZ2UgZ2V3YXJ0ZXQgd2VyZGVuIHNvbGwsIGJldm9yIGRlciBUb29sdGlwIGFuZ2V6ZWlndCB3aXJkLlxyXG4gICAqXHJcbiAgICogV2VydCBpbiBNaWxsaXNla3VuZGVuXHJcbiAgICpcclxuICAgKiBTdGFuZGFyZDogMFxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgVG9vbFRpcFJlbmRlcmVyRGlyZWN0aXZlXHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHNob3dEZWxheTogbnVtYmVyID0gMDtcclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCB3aWUgbGFuZ2UgZ2V3YXJ0ZXQgd2VyZGVuIHNvbGwsIGJldm9yIGRlciBUb29sdGlwIGdlc2NobG9zc2VuIHdpcmQuXHJcbiAgICpcclxuICAgKiBXZXJ0IGluIE1pbGxpc2VrdW5kZW5cclxuICAgKlxyXG4gICAqIFN0YW5kYXJkOiAwXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBUb29sVGlwUmVuZGVyZXJEaXJlY3RpdmVcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgaGlkZURlbGF5OiBudW1iZXIgPSAwO1xyXG5cclxuICBwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmO1xyXG5cclxuICBwcml2YXRlIGRpc2FibGVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgcHJpdmF0ZSB0b29sdGlwUmVmOiBDb21wb25lbnRSZWY8TXJkVG9vbHRpcENvbXBvbmVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIHByaXZhdGUgX292ZXJsYXlQb3NpdGlvbkJ1aWxkZXI6IE92ZXJsYXlQb3NpdGlvbkJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgaWYgKCF0aGlzLl9zaG93VG9vbFRpcCkge1xyXG4gICAgICB0aGlzLmNsb3NlVG9vbFRpcCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3RhbmRhcmR3ZXJ0ZSBzaW5kIGbDvHIgUG9zaXRpb24gJ2JvdHRvbSdcclxuICAgIGxldCBvdmVybGF5WTogXCJ0b3BcIiB8IFwiYm90dG9tXCIgfCBcImNlbnRlclwiID0gXCJ0b3BcIjtcclxuICAgIGxldCBvZmZzZXRZID0gNTtcclxuICAgIGxldCBvcmlnaW5ZOiBcInRvcFwiIHwgXCJib3R0b21cIiB8IFwiY2VudGVyXCIgPSBcImJvdHRvbVwiO1xyXG4gICAgbGV0IG9yaWdpblg6IFwic3RhcnRcIiB8IFwiZW5kXCIgfCBcImNlbnRlclwiID0gXCJjZW50ZXJcIjtcclxuICAgIGxldCBvdmVybGF5WDogXCJzdGFydFwiIHwgXCJlbmRcIiB8IFwiY2VudGVyXCIgPSBcImNlbnRlclwiO1xyXG4gICAgbGV0IG9mZnNldFggPSAwO1xyXG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09IFwidG9wXCIpIHtcclxuICAgICAgb3JpZ2luWSA9IFwidG9wXCI7XHJcbiAgICAgIG92ZXJsYXlZID0gXCJib3R0b21cIjtcclxuICAgICAgb2Zmc2V0WSA9IC01O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09IFwibGVmdFwiKSB7XHJcbiAgICAgIG9yaWdpblkgPSBcImNlbnRlclwiO1xyXG4gICAgICBvdmVybGF5WSA9IFwiY2VudGVyXCI7XHJcbiAgICAgIG9mZnNldFkgPSAwO1xyXG4gICAgICBvcmlnaW5YID0gXCJzdGFydFwiO1xyXG4gICAgICBvdmVybGF5WCA9IFwiZW5kXCI7XHJcbiAgICAgIG9mZnNldFggPSAtNTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSBcInJpZ2h0XCIpIHtcclxuICAgICAgb3JpZ2luWSA9IFwiY2VudGVyXCI7XHJcbiAgICAgIG92ZXJsYXlZID0gXCJjZW50ZXJcIjtcclxuICAgICAgb2Zmc2V0WSA9IDA7XHJcbiAgICAgIG9yaWdpblggPSBcImVuZFwiO1xyXG4gICAgICBvdmVybGF5WCA9IFwic3RhcnRcIjtcclxuICAgICAgb2Zmc2V0WCA9IDU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMuX292ZXJsYXlQb3NpdGlvbkJ1aWxkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuX2VsZW1lbnRSZWYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAud2l0aFBvc2l0aW9ucyhbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luWDogb3JpZ2luWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpblk6IG9yaWdpblksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5WDogb3ZlcmxheVgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5WTogb3ZlcmxheVksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiBvZmZzZXRZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogb2Zmc2V0WFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XSk7XHJcblxyXG4gICAgdGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKHsgcG9zaXRpb25TdHJhdGVneX0pO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIHdoZW5ldmVyIHRoZSBtb3VzZSBlbnRlcnMgaW4gdGhlIEhvc3QgZWxlbWVudFxyXG4gICAqIGkuZS4gd2hlcmUgdGhpcyBkaXJlY3RpdmUgaXMgYXBwbGllZFxyXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgc2hvdyB0aGUgdG9vbHRpcCBieSBpbnN0YW50aWF0aW5nIHRoZSBDdXN0b21Ub29sVGlwQ29tcG9uZW50IGFuZCBhdHRhY2hpbmcgdG8gdGhlIG92ZXJsYXlcclxuICAgKi9cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcclxuICBzaG93KCkge1xyXG4gICAgaWYgKCF0aGlzLl9zaG93VG9vbFRpcCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zaG93SWZUcnVuY2F0ZWQpIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgdGhpcy5kaXNhYmxlZCA9IGVsZW1lbnQuc2Nyb2xsV2lkdGggPD0gZWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgaWYgKGVsZW1lbnQuc3R5bGUud2Via2l0TGluZUNsYW1wICE9PSAnJyAmJiBlbGVtZW50LmNsYXNzTGlzdCAmJiBlbGVtZW50LmNsYXNzTGlzdC52YWx1ZSAmJiBlbGVtZW50LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnZWxsaXBzaXMnKSkge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBlbGVtZW50LnNjcm9sbEhlaWdodCA8PSBlbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNob3dPblRydW5jYXRlZEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuc2hvd09uVHJ1bmNhdGVkRWxlbWVudC5zY3JvbGxXaWR0aCA8PSB0aGlzLnNob3dPblRydW5jYXRlZEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvL2F0dGFjaCB0aGUgY29tcG9uZW50IGlmIGl0IGhhcyBub3QgYWxyZWFkeSBhdHRhY2hlZCB0byB0aGUgb3ZlcmxheVxyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMuX292ZXJsYXlSZWYgJiYgIXRoaXMuX292ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnRvb2x0aXBSZWYgPSB0aGlzLl9vdmVybGF5UmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKE1yZFRvb2x0aXBDb21wb25lbnQpKTtcclxuICAgICAgICB0aGlzLnRvb2x0aXBSZWYuaW5zdGFuY2UudGV4dCA9IHRoaXMudGV4dDtcclxuICAgICAgICB0aGlzLnRvb2x0aXBSZWYuaW5zdGFuY2UuY29udGVudFRlbXBsYXRlID0gdGhpcy5jb250ZW50VGVtcGxhdGU7XHJcbiAgICAgICAgdGhpcy50b29sdGlwUmVmLmluc3RhbmNlLmRlZmF1bHRTdHlsZSA9IHRoaXMuZGVmYXVsdFN0eWxlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5rZWVwT25Ub29sdGlwSG92ZXIpIHtcclxuICAgICAgICAgIHRoaXMudG9vbHRpcFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50Lm9ubW91c2VsZWF2ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVRvb2xUaXAoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIHRoaXMuc2hvd0RlbGF5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNNb3VzZU92ZXJUb29sdGlwKGV2ZW50OiBNb3VzZUV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICAvLyDDnGJlcnByw7xmZSwgb2IgZGVyIE1hdXN6ZWlnZXIgc2ljaCDDvGJlciBkZW0gVG9vbHRpcCBiZWZpbmRldFxyXG4gICAgaWYgKCF0aGlzLnRvb2x0aXBSZWYpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdG9vbHRpcFJlY3QgPSB0aGlzLnRvb2x0aXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGV2ZW50LmNsaWVudFggKyAxMCA+PSB0b29sdGlwUmVjdC5sZWZ0ICYmXHJcbiAgICAgIGV2ZW50LmNsaWVudFggLSAxMCA8PSB0b29sdGlwUmVjdC5yaWdodCAmJlxyXG4gICAgICBldmVudC5jbGllbnRZICsgMTAgPj0gdG9vbHRpcFJlY3QudG9wICYmXHJcbiAgICAgIGV2ZW50LmNsaWVudFkgLSAxMCA8PSB0b29sdGlwUmVjdC5ib3R0b21cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBtb3VzZSBnb2VzIG91dCBvZiB0aGUgaG9zdCBlbGVtZW50XHJcbiAgICogaS5lLiB3aGVyZSB0aGlzIGRpcmVjdGl2ZSBpcyBhcHBsaWVkXHJcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBjbG9zZSB0aGUgdG9vbHRpcCBieSBkZXRhY2hpbmcgdGhlIG92ZXJsYXkgZnJvbSB0aGUgdmlld1xyXG4gICAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBbJyRldmVudCddKVxyXG4gIGhpZGUoZXZlbnQ/OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy50b29sdGlwUmVmICYmIHRoaXMua2VlcE9uVG9vbHRpcEhvdmVyICYmIGV2ZW50KSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5pc01vdXNlT3ZlclRvb2x0aXAoZXZlbnQpKSB7XHJcbiAgICAgICAgICB0aGlzLmNsb3NlVG9vbFRpcCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnRvb2x0aXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudC5vbm1vdXNlbGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VUb29sVGlwKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAyMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jbG9zZVRvb2xUaXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc3Ryb3kgbGlmZWN5Y2xlIGV2ZW50IGhhbmRsZXJcclxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIG1ha2Ugc3VyZSB0byBjbG9zZSB0aGUgdG9vbHRpcFxyXG4gICAqL1xyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5jbG9zZVRvb2xUaXAoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgY2xvc2UgdGhlIHRvb2x0aXAgYnkgZGV0YWNoaW5nIHRoZSBjb21wb25lbnQgZnJvbSB0aGUgb3ZlcmxheVxyXG4gICAqL1xyXG4gIHByaXZhdGUgY2xvc2VUb29sVGlwKCkge1xyXG4gICAgaWYgKHRoaXMuX292ZXJsYXlSZWYpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kZXRhY2goKTtcclxuICAgICAgfSwgdGhpcy5oaWRlRGVsYXkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=