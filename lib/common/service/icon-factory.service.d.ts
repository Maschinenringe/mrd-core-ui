import * as i0 from "@angular/core";
export type IconDirection = 'right' | 'down' | 'left' | 'up';
export interface IconBuildConfig {
    outer?: string;
    inner?: string;
    color?: string;
    outerColor?: string;
    innerColor?: string;
    size?: number;
    innerDirection?: IconDirection | number;
    scaleInner?: boolean;
    innerScale?: number;
}
export declare class IconFactoryService {
    private static readonly INNER_SCALE;
    static build(config: IconBuildConfig): string;
    private static innerOffset;
    private static resolveDirection;
    private static extractSvgContent;
    private static applyFillColor;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconFactoryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IconFactoryService>;
}
