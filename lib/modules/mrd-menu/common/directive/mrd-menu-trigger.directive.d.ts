import { Overlay } from '@angular/cdk/overlay';
import { ElementRef, EventEmitter, OnDestroy, ViewContainerRef } from '@angular/core';
import { MrdMenuComponent } from '../../components/mrd-menu/mrd-menu.component';
import * as i0 from "@angular/core";
/**
 * Oeffnet ein `mrd-menu` beim Klick auf das Element (auch auf `mrd-s-button`) in einem Overlay.
 * Geschlossen wird per Eintrag, Klick daneben, Escape oder Tab; danach geht der Fokus zurueck an den Trigger.
 */
export declare class MrdMenuTriggerDirective implements OnDestroy {
    private overlay;
    private elementRef;
    private viewContainerRef;
    menu: MrdMenuComponent;
    /** Sperrt das Oeffnen; ein deaktivierter Button als Trigger (auch der innere eines `mrd-s-button`) sperrt automatisch */
    disabled: boolean;
    readonly menuOpened: EventEmitter<void>;
    readonly menuClosed: EventEmitter<void>;
    private overlayRef;
    private abos;
    constructor(overlay: Overlay, elementRef: ElementRef<HTMLElement>, viewContainerRef: ViewContainerRef);
    ngOnDestroy(): void;
    get offen(): boolean;
    toggle(): void;
    get gesperrt(): boolean;
    open(): void;
    close(): void;
    /** Bei Komponenten wie `mrd-s-button` ist der Host selbst nicht fokussierbar, sondern der Button darin */
    private fokusZurueck;
    private positionen;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdMenuTriggerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdMenuTriggerDirective, "[mrdMenuTriggerFor]", ["mrdMenuTrigger"], { "menu": { "alias": "mrdMenuTriggerFor"; "required": true; }; "disabled": { "alias": "mrdMenuTriggerDisabled"; "required": false; }; }, { "menuOpened": "menuOpened"; "menuClosed": "menuClosed"; }, never, never, false, never>;
    static ngAcceptInputType_disabled: unknown;
}
