import { Injector } from '@angular/core';
/**
 * Das Interface für die Konfiguration der MrdFlyOutComponent.
 *
 * @interface MrdFlyOutConfig
 */
export interface MrdFlyOutConfig {
    /**
     * Daten, die an die Komponente übergeben werden, die im FlyOut eingebettet ist.
     *
     * @type {*}
     * @memberof MrdFlyOutConfig
     */
    data?: any;
    /**
     * Eltern-Injector der eingebetteten Komponente, z. B. der des Aufrufers, damit das FlyOut dessen
     * Component-Provider erbt. Default: der Injector des FlyOutService (Root).
     *
     * @type {Injector}
     * @memberof MrdFlyOutConfig
     */
    injector?: Injector;
    /**
     * Die Richtung, aus der das FlyOut einfliegt.
     * Default: 'bottom'
     *
     * @type {('top' | 'bottom' | 'left' | 'right')}
     * @memberof MrdFlyOutConfig
     */
    flyInFrom?: 'top' | 'bottom' | 'left' | 'right';
    /**
     * Gibt an, ob das FlyOut beim Klick auf den Hintergrund nicht geschlossen wird.
     * Default: false;
     *
     * @type {boolean}
     * @memberof MrdFlyOutConfig
     */
    disableCloseOnBackdrop?: boolean;
    /**
     * Die Farbe des Hintergrunds.
     * Default: 'rgba(0, 0, 0, 0.5)'
     *
     * @type {string}
     * @memberof MrdFlyOutConfig
     */
    backdropColor?: string;
    /**
     * Gibt an, ob der Standard-Schließen-Button nicht angezeigt wird.
     * Default: false
     *
     * @type {boolean}
     * @memberof MrdFlyOutConfig
     */
    hideDefaultCloseButton?: boolean;
    width?: string;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    padding?: string;
    borderRadius?: string;
    backgroundColor?: string;
    transitionTime?: string;
    centered?: boolean;
}
