import { ComponentRef } from "@angular/core";
import { MrdFlyOutComponent } from "../../components/mrd-fly-out/mrd-fly-out.component";
import * as i0 from "@angular/core";
/**
 * Diese Directive kann verwendet werden, um das, die Komponente umgebende, FlyOut zu schließen.
 * Wird ein Wert übergebene, wird dieser über die Events onClose und afterClosed der FlyOut-Komponente zurückgegeben.
 *
 * @class MrdFlyOutCloseDirective
 */
export declare class MrdFlyOutCloseDirective {
    componentRef: ComponentRef<MrdFlyOutComponent>;
    /**
     * Setzt den Wert, der über die Events onClose und afterClosed der FlyOut-Komponente zurückgegeben wird.
     * Default: undefined
     *
     * @memberof MrdFlyOutCloseDirective
     */
    set mrdFlyOutClose(value: any);
    /**
     * Der Rückgabewert, der über die Events onClose und afterClosed der FlyOut-Komponente zurückgegeben wird.
     *
     * @private
     * @type {*}
     * @memberof MrdFlyOutCloseDirective
     */
    private value;
    constructor(componentRef: ComponentRef<MrdFlyOutComponent>);
    /**
     * Der Hostlistener, wenn das Element der Directive geklickt wird.
     * Falls die Komponente innerhalb eines MrdFlyOuts liegt,
     * wird die closeDirectiveClicked-Methode der FlyOut-Komponente mit dem übergebenen Rückgabewert aufgerufen.
     */
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdFlyOutCloseDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdFlyOutCloseDirective, "[mrdFlyOutClose]", never, { "mrdFlyOutClose": { "alias": "mrdFlyOutClose"; "required": false; }; }, {}, never, never, false, never>;
}
