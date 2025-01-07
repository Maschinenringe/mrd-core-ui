import { TemplateRef, ElementRef } from '@angular/core';
import { Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export declare class ToolTipRendererDirective {
    private _overlay;
    private _overlayPositionBuilder;
    private _elementRef;
    /**
     * Gibt an, ob der Tooltip angezeigt werden soll
     *
     * @memberof ToolTipRendererDirective
     */
    set showToolTip(value: any);
    private _showToolTip;
    /**
     * Der Text, der im Tooltip angezeigt werden soll
     *
     * @type {string}
     * @memberof ToolTipRendererDirective
     */
    text: string;
    /**
     * Ein eigenes Template, das im Tooltip angezeigt werden soll
     *
     * @type {TemplateRef<any>}
     * @memberof ToolTipRendererDirective
     */
    contentTemplate: TemplateRef<any>;
    /**
     * Gibt an, ob der Standard-Style des Tooltips verwendet werden soll.
     *
     * Standard: true
     *
     * @type {boolean}
     * @memberof ToolTipRendererDirective
     */
    defaultStyle: boolean;
    /**
     * Die Position, an der der Tooltip angezeigt werden soll.
     *
     * Standard: 'bottom'
     *
     * @type {('top' | 'bottom' | 'left' | 'right')}
     * @memberof ToolTipRendererDirective
     */
    position: 'top' | 'bottom' | 'left' | 'right';
    /**
     * Gibt an, ob der Tooltip nur angezeigt werden soll, wenn der Text abgeschnitten wird.
     *
     * Standard: false
     *
     * @type {boolean}
     * @memberof ToolTipRendererDirective
     */
    showIfTruncated: boolean;
    /**
     * Wenn gesetzt, wird der Tooltip nur angezeigt, wenn der Inhalt des Elements abgeschnitten wird
     *
     * @type {HTMLElement}
     * @memberof ToolTipRendererDirective
     */
    showOnTruncatedElement: HTMLElement;
    /**
     * Gibt an, ob der Tooltip geöffnet bleiben soll, wenn der Mauszeiger über dem Tooltip ist.
     *
     * Standard: false
     *
     * @type {boolean}
     * @memberof ToolTipRendererDirective
     */
    keepOnTooltipHover: boolean;
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
    showDelay: number;
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
    hideDelay: number;
    private _overlayRef;
    private disabled;
    private tooltipRef;
    constructor(_overlay: Overlay, _overlayPositionBuilder: OverlayPositionBuilder, _elementRef: ElementRef);
    ngOnInit(): void;
    /**
     * This method will be called whenever the mouse enters in the Host element
     * i.e. where this directive is applied
     * This method will show the tooltip by instantiating the CustomToolTipComponent and attaching to the overlay
     */
    show(): void;
    private isMouseOverTooltip;
    /**
     * This method will be called when the mouse goes out of the host element
     * i.e. where this directive is applied
     * This method will close the tooltip by detaching the overlay from the view
     */
    hide(event?: MouseEvent): void;
    /**
     * Destroy lifecycle event handler
     * This method will make sure to close the tooltip
     */
    ngOnDestroy(): void;
    /**
     * This method will close the tooltip by detaching the component from the overlay
     */
    private closeToolTip;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolTipRendererDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ToolTipRendererDirective, "[mrdToolTip]", ["mrdToolTip"], { "showToolTip": { "alias": "showToolTip"; "required": false; }; "text": { "alias": "mrdToolTip"; "required": false; }; "contentTemplate": { "alias": "contentTemplate"; "required": false; }; "defaultStyle": { "alias": "defaultStyle"; "required": false; }; "position": { "alias": "position"; "required": false; }; "showIfTruncated": { "alias": "showIfTruncated"; "required": false; }; "showOnTruncatedElement": { "alias": "showOnTruncatedElement"; "required": false; }; "keepOnTooltipHover": { "alias": "keepOnTooltipHover"; "required": false; }; "showDelay": { "alias": "showDelay"; "required": false; }; "hideDelay": { "alias": "hideDelay"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_showIfTruncated: unknown;
    static ngAcceptInputType_keepOnTooltipHover: unknown;
    static ngAcceptInputType_showDelay: unknown;
    static ngAcceptInputType_hideDelay: unknown;
}
