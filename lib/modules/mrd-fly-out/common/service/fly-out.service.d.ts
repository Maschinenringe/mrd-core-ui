import { Overlay } from '@angular/cdk/overlay';
import { ComponentType } from '@angular/cdk/portal';
import { Injector } from '@angular/core';
import { MrdFlyOutComponentRef } from '../model/mrd-fly-out-component-ref';
import { MrdFlyOutConfig } from '../model/mrd-fly-out-config';
import * as i0 from "@angular/core";
/**
 * Der Service, um FlyOuts zu öffnen und zu schließen.
 *
 * @export
 * @class FlyOutService
 */
export declare class FlyOutService {
    private overlay;
    private injector;
    /**
     * Die Map, die die offenen FlyOuts beinhaltet.
     *
     * @private
     * @type {Map<string, MrdFlyOutComponentRef>}
     * @memberof FlyOutService
     */
    private overlayMap;
    constructor(overlay: Overlay, injector: Injector);
    /**
     * Öffnet ein FlyOut mit der übergebenen Komponente und optionalen Konfiguration.
     *
     * @param {ComponentType<any>} component
     * @param {MrdFlyOutConfig} [config] (optional)
     * @return {MrdFlyOutComponentRef}
     * @memberof FlyOutService
     */
    open(component: ComponentType<any>, config?: MrdFlyOutConfig): MrdFlyOutComponentRef;
    /**
     * Schließt das FlyOut mit der übergebenen ID.
     *
     * @param {string} id
     * @memberof FlyOutService
     */
    close(id: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlyOutService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FlyOutService>;
}
/**
 * Der Service, um Daten an ein FlyOut zu übergeben.
 *
 * @class FlyOutData
 */
export declare class FlyOutData {
    data: {};
    static ɵfac: i0.ɵɵFactoryDeclaration<FlyOutData, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FlyOutData>;
}
