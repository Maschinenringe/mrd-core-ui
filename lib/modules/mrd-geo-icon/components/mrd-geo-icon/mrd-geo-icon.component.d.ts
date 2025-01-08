import * as i0 from "@angular/core";
/**
 * Komponente für die Darstellung von Geo-Icons (Schlagzeichnungen).
 *
 * @class MrdGeoIconComponent
 * @implements {AfterViewInit}
 */
export declare class MrdGeoIconComponent {
    private static _config;
    /**
     * Breite des Icons.
     *
     * Wird eine Zahl übergeben, wird diese als Pixelwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdGeoIconComponent
     */
    width: string;
    /**
     * Höhe des Icons.
     *
     * Wird eine Zahl übergeben, wird diese als Pixelwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdGeoIconComponent
     */
    height: string;
    /**
     * Margin um das Icon.
     *
     * Wird eine Zahl übergeben, wird diese als Pixelwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdGeoIconComponent
     */
    margin: string;
    /**
     * Übergangszeit für Farbwechsel (Selektiert <-> nicht selektiert).
     *
     * Wird eine Zahl übergeben, wird diese als Sekundenwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdGeoIconComponent
     */
    transitionTime: string;
    /**
     * Hauptfarbe des Icons.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    mainColor: string;
    /**
     * Hauptfarbe des Icons, wenn es selektiert ist.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    mainSelectedColor: string;
    /**
     * Deckkraft der Hauptfarbe des Icons.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    mainOpacity: number;
    /**
     * Deckkraft der Hauptfarbe des Icons, wenn es selektiert ist.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    mainSelectedOpacity: number;
    /**
     * Farbe der 2. Ebene des Icons.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    overlayColor: string;
    /**
     * Farbe der 2. Ebene des Icons, wenn es selektiert ist.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    overlaySelectedColor: string;
    /**
     * Deckkraft der 2. Ebene des Icons.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    overlayOpacity: number;
    /**
     * Deckkraft der 2. Ebene des Icons, wenn es selektiert ist.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    overlaySelectedOpacity: number;
    /**
     * Hintergrundfarbe des Icons, wenn es eine zweite Ebene gibt.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    backColor: string;
    /**
     * Hintergrundfarbe des Icons, wenn es eine zweite Ebene gibt und diese selektiert ist.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    backSelectedColor: string;
    /**
     * Deckkraft des Hintergrunds des Icons.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    backOpacity: number;
    /**
     * Deckkraft des Hintergrunds des Icons, wenn es selektiert ist.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    backSelectedOpacity: number;
    /**
     * Gibt an, ob das Icon selektiert ist.
     *
     * @type {boolean}
     * @memberof MrdGeoIconComponent
     */
    isSelected: boolean;
    /**
     * Daten für die Basis des Icons.
     *
     * @type {any[]}
     * @memberof MrdGeoIconComponent
     */
    set baseData(value: any[]);
    get baseData(): any[];
    private _baseData;
    /**
     * Daten für die 2. Ebene des Icons.
     *
     * @type {any[]}
     * @memberof MrdGeoIconComponent
     */
    set overlayData(value: any[]);
    get overlayData(): any[];
    /**
     * Gibt an, ob das Icon eine 2. Ebene hat.
     *
     * @type {boolean}
     * @memberof MrdGeoIconComponent
     */
    hasOverlay: boolean;
    /**
     * Beinhaltet die Daten der ersten Ebene des Icons.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    base: string;
    /**
     * Beinhaltet die Daten der zweiten Ebene des Icons.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    overlay: string;
    viewBox: string;
    private getPathString;
    mercEncode(lat: any, lng: any, w: any, h: any): number[];
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdGeoIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdGeoIconComponent, "mrd-geo-icon", never, { "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "margin": { "alias": "margin"; "required": false; }; "transitionTime": { "alias": "transitionTime"; "required": false; }; "mainColor": { "alias": "mainColor"; "required": false; }; "mainSelectedColor": { "alias": "mainSelectedColor"; "required": false; }; "mainOpacity": { "alias": "mainOpacity"; "required": false; }; "mainSelectedOpacity": { "alias": "mainSelectedOpacity"; "required": false; }; "overlayColor": { "alias": "overlayColor"; "required": false; }; "overlaySelectedColor": { "alias": "overlaySelectedColor"; "required": false; }; "overlayOpacity": { "alias": "overlayOpacity"; "required": false; }; "overlaySelectedOpacity": { "alias": "overlaySelectedOpacity"; "required": false; }; "backColor": { "alias": "backColor"; "required": false; }; "backSelectedColor": { "alias": "backSelectedColor"; "required": false; }; "backOpacity": { "alias": "backOpacity"; "required": false; }; "backSelectedOpacity": { "alias": "backSelectedOpacity"; "required": false; }; "isSelected": { "alias": "isSelected"; "required": false; }; "baseData": { "alias": "baseData"; "required": false; }; "overlayData": { "alias": "overlayData"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_width: any;
    static ngAcceptInputType_height: any;
    static ngAcceptInputType_margin: any;
    static ngAcceptInputType_transitionTime: any;
    static ngAcceptInputType_mainColor: string;
    static ngAcceptInputType_mainSelectedColor: string;
    static ngAcceptInputType_mainOpacity: any;
    static ngAcceptInputType_mainSelectedOpacity: any;
    static ngAcceptInputType_overlayColor: string;
    static ngAcceptInputType_overlaySelectedColor: string;
    static ngAcceptInputType_overlayOpacity: any;
    static ngAcceptInputType_overlaySelectedOpacity: any;
    static ngAcceptInputType_backColor: string;
    static ngAcceptInputType_backSelectedColor: string;
    static ngAcceptInputType_backOpacity: any;
    static ngAcceptInputType_backSelectedOpacity: any;
    static ngAcceptInputType_isSelected: unknown;
}
