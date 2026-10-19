import * as i0 from "@angular/core";
export declare enum MrdArrowPosition {
    Top = 0,
    TopRight = 1,
    Right = 2,
    BottomRight = 3,
    Bottom = 4,
    BottomLeft = 5,
    Left = 6,
    TopLeft = 7
}
export declare enum MrdLineStyle {
    Straight = 0,
    StraightCurve = 1,
    Curved = 2
}
export interface MrdLineOptions {
    style?: MrdLineStyle;
    color?: string;
    /** Strichstaerke als SVG-Wert, z. B. `'2'` */
    width?: string;
}
export interface MrdArrowOptions {
    /** Startpunkt am Startelement, Standard `Right` */
    from?: MrdArrowPosition;
    /** Zielpunkt am Zielelement, Standard `Left` */
    to?: MrdArrowPosition;
    /** Linienstil oder vollstaendige Linienoptionen, Standard `StraightCurve`, schwarz, 2 */
    line?: MrdLineStyle | MrdLineOptions;
}
/** Ein gezeichneter Pfeil; `clear()` entfernt ihn wieder */
export declare class MrdSvgArrow {
    readonly element: SVGSVGElement;
    constructor(element: SVGSVGElement);
    get id(): string;
    clear(): void;
}
/**
 * Zeichnet Pfeile zwischen zwei Elementen innerhalb eines gemeinsamen Root-Elements (z. B. Zuordnungen zwischen zwei Listen).
 * Positionen werden ueber offsetLeft/offsetTop bestimmt; das Root wird dafuer bei Bedarf auf `position: relative` gesetzt.
 */
export declare class MrdSvgArrowService {
    private static zaehler;
    private pfeile;
    /**
     * Zeichnet einen Pfeil von `from` nach `to`; beide muessen im `root` liegen (offsetParent = root).
     * @param options werden nicht veraendert; fehlende Werte bekommen Standardwerte
     */
    addArrow(root: HTMLElement, from: HTMLElement, to: HTMLElement, options?: MrdArrowOptions): MrdSvgArrow;
    /** Entfernt die Pfeile im `root`, ohne Angabe alle */
    clearAll(root?: HTMLElement): void;
    private svgErzeugen;
    private static optionenVervollstaendigen;
    private static gueltig;
    private static punkt;
    private static pfadDaten;
    /** Punkt auf der Strecke start-ziel, der `abstand` vor dem Ziel liegt */
    private static verkuerzen;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdSvgArrowService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MrdSvgArrowService>;
}
