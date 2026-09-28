import * as i0 from "@angular/core";
export type IconDirection = 'right' | 'down' | 'left' | 'up';
export interface IconBuildConfig {
    outer?: string;
    inner?: string;
    color?: string;
    outerColor?: string;
    innerColor?: string;
    size?: number | string;
    innerDirection?: IconDirection | number;
}
/** Baut aus Symbolen im 64x64-Raster (aeusserer Rahmen + inneres Symbol) ein SVG. */
export declare class IconFactoryService {
    static build(config: IconBuildConfig): string;
    private static resolveDirection;
    private static extractSvgContent;
    /** Ersetzt vorhandene fill- und stroke-Farben; `none` bleibt erhalten, damit Aussparungen nicht gefuellt werden. */
    private static applyColor;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconFactoryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IconFactoryService>;
}
