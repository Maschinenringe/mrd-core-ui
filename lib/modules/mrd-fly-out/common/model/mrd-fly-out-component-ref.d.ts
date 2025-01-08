import { OverlayRef } from "@angular/cdk/overlay";
import { ComponentRef, EventEmitter } from "@angular/core";
import { MrdFlyOutComponent } from "../../components/mrd-fly-out/mrd-fly-out.component";
/**
 * Interface für die Referenz auf ein FlyOut.
 *
 * @interface MrdFlyOutComponentRef
 */
export interface MrdFlyOutComponentRef {
    /**
     * Der Identifier des FlyOuts
     *
     * @type {string}
     * @memberof MrdFlyOutComponentRef
     */
    identifier: string;
    /**
     * Die Referenz auf das Overlay, in dem das FlyOut liegt
     *
     * @type {OverlayRef}
     * @memberof MrdFlyOutComponentRef
     */
    overlayRef: OverlayRef;
    /**
     * Die Referenz auf die MrdFlyOutComponent
     *
     * @type {ComponentRef<MrdFlyOutComponent>}
     * @memberof MrdFlyOutComponentRef
     */
    componentRef: ComponentRef<MrdFlyOutComponent>;
    /**
     * Die Referenz auf die in das FlyOut geladene Komponente
     *
     * @type {ComponentRef<any>}
     * @memberof MrdFlyOutComponentRef
     */
    contentRef: ComponentRef<any>;
    /**
     * Das vom FlyOut ausgelöste Event, wenn das FlyOut geöffnet wurde
     *
     * @type {EventEmitter<void>}
     * @memberof MrdFlyOutComponentRef
     */
    afterOpened?: EventEmitter<void>;
    /**
     * Das vom FlyOut ausgelöste Event, wenn das FlyOut geschlossen wird.
     * Gibt einen Wert zurück, wenn über die MrdFlyOutCloseDirective ein Wert übergeben wurde.
     *
     * @type {EventEmitter<any>}
     * @memberof MrdFlyOutComponentRef
     */
    onClose?: EventEmitter<any>;
    /**
     * Das vom FlyOut ausgelöste Event, wenn das FlyOut geschlossen wurde.
     * Gibt einen Wert zurück, wenn über die MrdFlyOutCloseDirective ein Wert übergeben wurde.
     *
     * @type {EventEmitter<any>}
     * @memberof MrdFlyOutComponentRef
     */
    afterClosed?: EventEmitter<any>;
}
