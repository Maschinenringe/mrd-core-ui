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
        if (!this._showToolTip || !this.text || this.text === '') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbC10aXAtcmVuZGVyZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10b29sdGlwL2NvbW1vbi9kaXJlY3RpdmUvdG9vbC10aXAtcmVuZGVyZXIvdG9vbC10aXAtcmVuZGVyZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzlGLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXNDLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6SyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQUd0RCwyR0FBMkc7QUFDM0csTUFBTSxVQUFVLHFCQUFxQixDQUFDLEtBQXlDO0lBQzdFLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtRQUNoQixPQUFPLENBQUMsQ0FBQztLQUNWO0lBQ0QsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLE9BQU8sS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUN6RixDQUFDO0FBTUQsTUFBTSxPQUFPLHdCQUF3QjtJQStIekI7SUFDQTtJQUNBO0lBQ0E7SUFoSVY7Ozs7T0FJRztJQUNILElBQWEsV0FBVyxDQUFDLEtBQUs7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFBQSxDQUFD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STtrQkFESCxZQUFZO21CQUFDLFlBQVk7WUErRDFCLElBQUk7a0JBREgsWUFBWTttQkFBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNcmRUb29sdGlwQ29tcG9uZW50IH0gZnJvbSAnLi8uLi8uLi8uLi9jb21wb25lbnRzL21yZC10b29sdGlwL21yZC10b29sdGlwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFJlZiwgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBUZW1wbGF0ZVJlZiwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBSZW5kZXJlclN0eWxlRmxhZ3MyLCBib29sZWFuQXR0cmlidXRlLCBudW1iZXJBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IENvbm5lY3RlZFBvc2l0aW9uLCBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksIE92ZXJsYXksIE92ZXJsYXlQb3NpdGlvbkJ1aWxkZXIsIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcblxyXG4vKiogYGxpbmUtY2xhbXBgIG9obmUgV2VydCBzdGVodCBmdWVyIGVpbmUgWmVpbGU7IG51bGwsIDAgb2RlciB1bmd1ZWx0aWdlIFdlcnRlIGhlYmVuIGRpZSBCZWdyZW56dW5nIGF1ZiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gemVpbGVuQW56YWhsQXR0cmlidXRlKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgaWYgKHZhbHVlID09PSAnJykge1xyXG4gICAgcmV0dXJuIDE7XHJcbiAgfVxyXG4gIGNvbnN0IGFuemFobCA9IE51bWJlcih2YWx1ZSk7XHJcbiAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgYW56YWhsID4gMCA/IE1hdGguZmxvb3IoYW56YWhsKSA6IG51bGw7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW21yZFRvb2xUaXBdJyxcclxuICBleHBvcnRBczogJ21yZFRvb2xUaXAnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sVGlwUmVuZGVyZXJEaXJlY3RpdmUge1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgVG9vbHRpcCBhbmdlemVpZ3Qgd2VyZGVuIHNvbGxcclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBUb29sVGlwUmVuZGVyZXJEaXJlY3RpdmVcclxuICAgKi9cclxuICBASW5wdXQoKSBzZXQgc2hvd1Rvb2xUaXAodmFsdWUpIHtcclxuICAgIHRoaXMuX3Nob3dUb29sVGlwID0gdmFsdWU7XHJcbiAgICB0aGlzLm5nT25Jbml0KCk7XHJcbiAgfTtcclxuICBwcml2YXRlIF9zaG93VG9vbFRpcDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlciBUZXh0LCBkZXIgaW0gVG9vbHRpcCBhbmdlemVpZ3Qgd2VyZGVuIHNvbGxcclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIFRvb2xUaXBSZW5kZXJlckRpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIEBJbnB1dChgbXJkVG9vbFRpcGApIHRleHQ6IHN0cmluZ3x1bmRlZmluZWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVpbiBlaWdlbmVzIFRlbXBsYXRlLCBkYXMgaW0gVG9vbHRpcCBhbmdlemVpZ3Qgd2VyZGVuIHNvbGxcclxuICAgKlxyXG4gICAqIEB0eXBlIHtUZW1wbGF0ZVJlZjxhbnk+fVxyXG4gICAqIEBtZW1iZXJvZiBUb29sVGlwUmVuZGVyZXJEaXJlY3RpdmVcclxuICAgKi9cclxuICBASW5wdXQoKSBjb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBTdGFuZGFyZC1TdHlsZSBkZXMgVG9vbHRpcHMgdmVyd2VuZGV0IHdlcmRlbiBzb2xsLlxyXG4gICAqXHJcbiAgICogU3RhbmRhcmQ6IHRydWVcclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBUb29sVGlwUmVuZGVyZXJEaXJlY3RpdmVcclxuICAgKi9cclxuICBASW5wdXQoKSBkZWZhdWx0U3R5bGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBEaWUgUG9zaXRpb24sIGFuIGRlciBkZXIgVG9vbHRpcCBhbmdlemVpZ3Qgd2VyZGVuIHNvbGwuXHJcbiAgICpcclxuICAgKiBTdGFuZGFyZDogJ2JvdHRvbSdcclxuICAgKlxyXG4gICAqIEB0eXBlIHsoJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcpfVxyXG4gICAqIEBtZW1iZXJvZiBUb29sVGlwUmVuZGVyZXJEaXJlY3RpdmVcclxuICAgKi9cclxuICBASW5wdXQoKSBwb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcgPSAnYm90dG9tJztcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGVyIFRvb2x0aXAgbnVyIGFuZ2V6ZWlndCB3ZXJkZW4gc29sbCwgd2VubiBkZXIgVGV4dCBhYmdlc2Nobml0dGVuIHdpcmQuXHJcbiAgICpcclxuICAgKiBTdGFuZGFyZDogZmFsc2VcclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBUb29sVGlwUmVuZGVyZXJEaXJlY3RpdmVcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHNob3dJZlRydW5jYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBXZW5uIGdlc2V0enQsIHdpcmQgZGVyIFRvb2x0aXAgbnVyIGFuZ2V6ZWlndCwgd2VubiBkZXIgSW5oYWx0IGRlcyBFbGVtZW50cyBhYmdlc2Nobml0dGVuIHdpcmRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cclxuICAgKiBAbWVtYmVyb2YgVG9vbFRpcFJlbmRlcmVyRGlyZWN0aXZlXHJcbiAgICovXHJcbiAgQElucHV0KCkgc2hvd09uVHJ1bmNhdGVkRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJlZ3Jlbnp0IGRlbiBJbmhhbHQgYXVmIGhvZWNoc3RlbnMgc28gdmllbGUgWmVpbGVuIHVuZCBrdWVyenQgaWhuIG1pdCBcIuKAplwiLlxyXG4gICAqIFp1c2FtbWVuIG1pdCBgc2hvd0lmVHJ1bmNhdGVkYCBlcnNjaGVpbnQgZGVyIFRvb2x0aXAgbnVyLCB3ZW5uIFRleHQgYWJnZXNjaG5pdHRlbiBpc3QuXHJcbiAgICogRGllIERpcmVrdGl2ZSBzZXR6dCBkYWZ1ZXIgYGRpc3BsYXk6IC13ZWJraXQtYm94YCBhbSBFbGVtZW50LlxyXG4gICAqXHJcbiAgICogQmVpc3BpZWw6IGA8c3BhbiBbbXJkVG9vbFRpcF09XCJ0ZXh0XCIgc2hvd0lmVHJ1bmNhdGVkIFtsaW5lLWNsYW1wXT1cIjJcIj57e3RleHR9fTwvc3Bhbj5gXHJcbiAgICovXHJcbiAgQElucHV0KHthbGlhczogJ2xpbmUtY2xhbXAnLCB0cmFuc2Zvcm06IHplaWxlbkFuemFobEF0dHJpYnV0ZX0pIHNldCBsaW5lQ2xhbXAodmFsdWU6IG51bWJlciB8IG51bGwpIHtcclxuICAgIHRoaXMuX2xpbmVDbGFtcCA9IHZhbHVlO1xyXG4gICAgdGhpcy56ZWlsZW5iZWdyZW56dW5nQW53ZW5kZW4oKTtcclxuICB9XHJcbiAgcHVibGljIGdldCBsaW5lQ2xhbXAoKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGluZUNsYW1wO1xyXG4gIH1cclxuICBwcml2YXRlIF9saW5lQ2xhbXA6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIHplaWxlbmJlZ3Jlbnp1bmdHZXNldHp0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBUb29sdGlwIGdlw7ZmZm5ldCBibGVpYmVuIHNvbGwsIHdlbm4gZGVyIE1hdXN6ZWlnZXIgw7xiZXIgZGVtIFRvb2x0aXAgaXN0LlxyXG4gICAqXHJcbiAgICogU3RhbmRhcmQ6IGZhbHNlXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgVG9vbFRpcFJlbmRlcmVyRGlyZWN0aXZlXHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBrZWVwT25Ub29sdGlwSG92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgd2llIGxhbmdlIGdld2FydGV0IHdlcmRlbiBzb2xsLCBiZXZvciBkZXIgVG9vbHRpcCBhbmdlemVpZ3Qgd2lyZC5cclxuICAgKlxyXG4gICAqIFdlcnQgaW4gTWlsbGlzZWt1bmRlblxyXG4gICAqXHJcbiAgICogU3RhbmRhcmQ6IDBcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIFRvb2xUaXBSZW5kZXJlckRpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBzaG93RGVsYXk6IG51bWJlciA9IDA7XHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgd2llIGxhbmdlIGdld2FydGV0IHdlcmRlbiBzb2xsLCBiZXZvciBkZXIgVG9vbHRpcCBnZXNjaGxvc3NlbiB3aXJkLlxyXG4gICAqXHJcbiAgICogV2VydCBpbiBNaWxsaXNla3VuZGVuXHJcbiAgICpcclxuICAgKiBTdGFuZGFyZDogMFxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgVG9vbFRpcFJlbmRlcmVyRGlyZWN0aXZlXHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIGhpZGVEZWxheTogbnVtYmVyID0gMDtcclxuXHJcbiAgcHJpdmF0ZSBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcclxuXHJcbiAgcHJpdmF0ZSBkaXNhYmxlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIHByaXZhdGUgdG9vbHRpcFJlZjogQ29tcG9uZW50UmVmPE1yZFRvb2x0aXBDb21wb25lbnQ+O1xyXG5cclxuICBwcml2YXRlIG9yaWdpbjogQ29ubmVjdGVkUG9zaXRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIHByaXZhdGUgX292ZXJsYXlQb3NpdGlvbkJ1aWxkZXI6IE92ZXJsYXlQb3NpdGlvbkJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgaWYgKCF0aGlzLl9zaG93VG9vbFRpcCkge1xyXG4gICAgICB0aGlzLmNsb3NlVG9vbFRpcCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3RhbmRhcmR3ZXJ0ZSBzaW5kIGbDvHIgUG9zaXRpb24gJ2JvdHRvbSdcclxuICAgIGxldCBvdmVybGF5WTogXCJ0b3BcIiB8IFwiYm90dG9tXCIgfCBcImNlbnRlclwiID0gXCJ0b3BcIjtcclxuICAgIGxldCBvZmZzZXRZID0gNTtcclxuICAgIGxldCBvcmlnaW5ZOiBcInRvcFwiIHwgXCJib3R0b21cIiB8IFwiY2VudGVyXCIgPSBcImJvdHRvbVwiO1xyXG4gICAgbGV0IG9yaWdpblg6IFwic3RhcnRcIiB8IFwiZW5kXCIgfCBcImNlbnRlclwiID0gXCJjZW50ZXJcIjtcclxuICAgIGxldCBvdmVybGF5WDogXCJzdGFydFwiIHwgXCJlbmRcIiB8IFwiY2VudGVyXCIgPSBcImNlbnRlclwiO1xyXG4gICAgbGV0IG9mZnNldFggPSAwO1xyXG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09IFwidG9wXCIpIHtcclxuICAgICAgb3JpZ2luWSA9IFwidG9wXCI7XHJcbiAgICAgIG92ZXJsYXlZID0gXCJib3R0b21cIjtcclxuICAgICAgb2Zmc2V0WSA9IC01O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09IFwibGVmdFwiKSB7XHJcbiAgICAgIG9yaWdpblkgPSBcImNlbnRlclwiO1xyXG4gICAgICBvdmVybGF5WSA9IFwiY2VudGVyXCI7XHJcbiAgICAgIG9mZnNldFkgPSAwO1xyXG4gICAgICBvcmlnaW5YID0gXCJzdGFydFwiO1xyXG4gICAgICBvdmVybGF5WCA9IFwiZW5kXCI7XHJcbiAgICAgIG9mZnNldFggPSAtNTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSBcInJpZ2h0XCIpIHtcclxuICAgICAgb3JpZ2luWSA9IFwiY2VudGVyXCI7XHJcbiAgICAgIG92ZXJsYXlZID0gXCJjZW50ZXJcIjtcclxuICAgICAgb2Zmc2V0WSA9IDA7XHJcbiAgICAgIG9yaWdpblggPSBcImVuZFwiO1xyXG4gICAgICBvdmVybGF5WCA9IFwic3RhcnRcIjtcclxuICAgICAgb2Zmc2V0WCA9IDU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vcmlnaW4gPSB7XHJcbiAgICAgIG9yaWdpblg6IG9yaWdpblgsXHJcbiAgICAgIG9yaWdpblk6IG9yaWdpblksXHJcbiAgICAgIG92ZXJsYXlYOiBvdmVybGF5WCxcclxuICAgICAgb3ZlcmxheVk6IG92ZXJsYXlZLFxyXG4gICAgICBvZmZzZXRZOiBvZmZzZXRZLFxyXG4gICAgICBvZmZzZXRYOiBvZmZzZXRYXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLl9vdmVybGF5UG9zaXRpb25CdWlsZGVyXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLl9lbGVtZW50UmVmKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLndpdGhQb3NpdGlvbnMoW3tcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpblg6IG9yaWdpblgsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5ZOiBvcmlnaW5ZLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheVg6IG92ZXJsYXlYLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheVk6IG92ZXJsYXlZLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogb2Zmc2V0WSxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IG9mZnNldFhcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV0pO1xyXG4gICAgLy8gdGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKHsgcG9zaXRpb25TdHJhdGVneSB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIHdoZW5ldmVyIHRoZSBtb3VzZSBlbnRlcnMgaW4gdGhlIEhvc3QgZWxlbWVudFxyXG4gICAqIGkuZS4gd2hlcmUgdGhpcyBkaXJlY3RpdmUgaXMgYXBwbGllZFxyXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgc2hvdyB0aGUgdG9vbHRpcCBieSBpbnN0YW50aWF0aW5nIHRoZSBDdXN0b21Ub29sVGlwQ29tcG9uZW50IGFuZCBhdHRhY2hpbmcgdG8gdGhlIG92ZXJsYXlcclxuICAgKi9cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcclxuICBzaG93KCkge1xyXG4gICAgaWYgKCF0aGlzLl9zaG93VG9vbFRpcCB8fCAhdGhpcy50ZXh0IHx8IHRoaXMudGV4dCA9PT0gJycpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2hvd0lmVHJ1bmNhdGVkKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAvLyBCaXNoZXJpZ2VyIFdlZyBvaG5lIGxpbmUtY2xhbXAtSW5wdXQ6IEtsYXNzZSBtaXQgXCJlbGxpcHNpc1wiIHBsdXMgLXdlYmtpdC1saW5lLWNsYW1wIGFscyBJbmxpbmUtU3R5bGVcclxuICAgICAgY29uc3QgYWx0ZXNaZWlsZW5NdXN0ZXIgPSBlbGVtZW50LnN0eWxlLndlYmtpdExpbmVDbGFtcCAhPT0gJycgJiYgZWxlbWVudC5jbGFzc0xpc3Q/LnZhbHVlPy5pbmNsdWRlcygnZWxsaXBzaXMnKTtcclxuICAgICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuX2xpbmVDbGFtcCB8fCBhbHRlc1plaWxlbk11c3RlclxyXG4gICAgICAgID8gZWxlbWVudC5zY3JvbGxIZWlnaHQgPD0gZWxlbWVudC5jbGllbnRIZWlnaHRcclxuICAgICAgICA6IGVsZW1lbnQuc2Nyb2xsV2lkdGggPD0gZWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zaG93T25UcnVuY2F0ZWRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLnNob3dPblRydW5jYXRlZEVsZW1lbnQuc2Nyb2xsV2lkdGggPD0gdGhpcy5zaG93T25UcnVuY2F0ZWRFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5fb3ZlcmxheVJlZikge1xyXG4gICAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5fb3ZlcmxheVBvc2l0aW9uQnVpbGRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5fZWxlbWVudFJlZilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC53aXRoUG9zaXRpb25zKFt0aGlzLm9yaWdpbl0pO1xyXG4gICAgICB0aGlzLl9vdmVybGF5UmVmID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUoeyBwb3NpdGlvblN0cmF0ZWd5IH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL2F0dGFjaCB0aGUgY29tcG9uZW50IGlmIGl0IGhhcyBub3QgYWxyZWFkeSBhdHRhY2hlZCB0byB0aGUgb3ZlcmxheVxyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMuX292ZXJsYXlSZWYgJiYgIXRoaXMuX292ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xyXG4gICAgICBcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy50b29sdGlwUmVmID0gdGhpcy5fb3ZlcmxheVJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChNcmRUb29sdGlwQ29tcG9uZW50KSk7XHJcbiAgICAgICAgdGhpcy50b29sdGlwUmVmLmluc3RhbmNlLnRleHQgPSB0aGlzLnRleHQ7XHJcbiAgICAgICAgdGhpcy50b29sdGlwUmVmLmluc3RhbmNlLmNvbnRlbnRUZW1wbGF0ZSA9IHRoaXMuY29udGVudFRlbXBsYXRlO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS5kZWZhdWx0U3R5bGUgPSB0aGlzLmRlZmF1bHRTdHlsZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMua2VlcE9uVG9vbHRpcEhvdmVyKSB7XHJcbiAgICAgICAgICB0aGlzLnRvb2x0aXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudC5vbm1vdXNlbGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VUb29sVGlwKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB0aGlzLnNob3dEZWxheSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTW91c2VPdmVyVG9vbHRpcChldmVudDogTW91c2VFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gw5xiZXJwcsO8ZmUsIG9iIGRlciBNYXVzemVpZ2VyIHNpY2ggw7xiZXIgZGVtIFRvb2x0aXAgYmVmaW5kZXRcclxuICAgIGlmICghdGhpcy50b29sdGlwUmVmKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRvb2x0aXBSZWN0ID0gdGhpcy50b29sdGlwUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBldmVudC5jbGllbnRYICsgMTAgPj0gdG9vbHRpcFJlY3QubGVmdCAmJlxyXG4gICAgICBldmVudC5jbGllbnRYIC0gMTAgPD0gdG9vbHRpcFJlY3QucmlnaHQgJiZcclxuICAgICAgZXZlbnQuY2xpZW50WSArIDEwID49IHRvb2x0aXBSZWN0LnRvcCAmJlxyXG4gICAgICBldmVudC5jbGllbnRZIC0gMTAgPD0gdG9vbHRpcFJlY3QuYm90dG9tXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgbW91c2UgZ29lcyBvdXQgb2YgdGhlIGhvc3QgZWxlbWVudFxyXG4gICAqIGkuZS4gd2hlcmUgdGhpcyBkaXJlY3RpdmUgaXMgYXBwbGllZFxyXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgY2xvc2UgdGhlIHRvb2x0aXAgYnkgZGV0YWNoaW5nIHRoZSBvdmVybGF5IGZyb20gdGhlIHZpZXdcclxuICAgKi9cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJywgWyckZXZlbnQnXSlcclxuICBoaWRlKGV2ZW50PzogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKHRoaXMudG9vbHRpcFJlZiAmJiB0aGlzLmtlZXBPblRvb2x0aXBIb3ZlciAmJiBldmVudCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNNb3VzZU92ZXJUb29sdGlwKGV2ZW50KSkge1xyXG4gICAgICAgICAgdGhpcy5jbG9zZVRvb2xUaXAoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy50b29sdGlwUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQub25tb3VzZWxlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlVG9vbFRpcCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgMjAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2xvc2VUb29sVGlwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXN0cm95IGxpZmVjeWNsZSBldmVudCBoYW5kbGVyXHJcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBtYWtlIHN1cmUgdG8gY2xvc2UgdGhlIHRvb2x0aXBcclxuICAgKi9cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuY2xvc2VUb29sVGlwKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHplaWxlbmJlZ3Jlbnp1bmdBbndlbmRlbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMuX2xpbmVDbGFtcCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsZW1lbnQsICdkaXNwbGF5JywgJy13ZWJraXQtYm94Jyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWxlbWVudCwgJy13ZWJraXQtYm94LW9yaWVudCcsICd2ZXJ0aWNhbCcsIFJlbmRlcmVyU3R5bGVGbGFnczIuRGFzaENhc2UpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsZW1lbnQsICctd2Via2l0LWxpbmUtY2xhbXAnLCBTdHJpbmcodGhpcy5fbGluZUNsYW1wKSwgUmVuZGVyZXJTdHlsZUZsYWdzMi5EYXNoQ2FzZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWxlbWVudCwgJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG4gICAgICB0aGlzLnplaWxlbmJlZ3Jlbnp1bmdHZXNldHp0ID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy56ZWlsZW5iZWdyZW56dW5nR2VzZXR6dCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKGVsZW1lbnQsICdkaXNwbGF5Jyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUoZWxlbWVudCwgJy13ZWJraXQtYm94LW9yaWVudCcsIFJlbmRlcmVyU3R5bGVGbGFnczIuRGFzaENhc2UpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKGVsZW1lbnQsICctd2Via2l0LWxpbmUtY2xhbXAnLCBSZW5kZXJlclN0eWxlRmxhZ3MyLkRhc2hDYXNlKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShlbGVtZW50LCAnb3ZlcmZsb3cnKTtcclxuICAgICAgdGhpcy56ZWlsZW5iZWdyZW56dW5nR2VzZXR6dCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBjbG9zZSB0aGUgdG9vbHRpcCBieSBkZXRhY2hpbmcgdGhlIGNvbXBvbmVudCBmcm9tIHRoZSBvdmVybGF5XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjbG9zZVRvb2xUaXAoKSB7XHJcbiAgICBpZiAodGhpcy5fb3ZlcmxheVJlZikge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9vdmVybGF5UmVmLmRldGFjaCgpO1xyXG4gICAgICAgIHRoaXMuX292ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuX292ZXJsYXlSZWYgPSBudWxsO1xyXG4gICAgICB9LCB0aGlzLmhpZGVEZWxheSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==