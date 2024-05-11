export declare class ColorUtil {
    static hexToRgb(hex: string): {
        r: number;
        g: number;
        b: number;
    };
    static rgbToHex(r: number, g: number, b: number): string;
    static getTextColor(color: string): string;
    static shouldTextBeDark(color: string): boolean;
    static changeColorOpacity(color: string, opacity: number): string;
    static changeColorBrightnessPercent(color: string, percent: number): string;
}
