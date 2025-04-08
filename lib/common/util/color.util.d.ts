export declare class ColorUtil {
    static isHexColor(color: string): boolean;
    static isRgbColor(color: string): boolean;
    static isRgbaColor(color: string): boolean;
    static hexToRgb(hex: string): {
        r: number;
        g: number;
        b: number;
    };
    static hexToRgba(hex: string): {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    static hexHasAlpha(hex: string): boolean;
    static rgbToHex(r: number, g: number, b: number, a?: number): string;
    static rgbaToHex(r: number, g: number, b: number, a: number): string;
    static rgbStringToRgba(rgb: string): {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    static rgbStringToHex(rgb: string): string;
    static rgbaStringToHex(rgba: string): string;
    static rgbaStringToRgb(rgba: string): {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    static shouldTextBeDark(color: string, debug?: boolean): boolean;
    static changeColorOpacity(color: string, opacity: number): string;
    static changeColorBrightnessPercent(color: string, percent: number): string;
}
