import { IconDirection } from './icon-factory.service';
import { IconName } from '../util/icon-lib';
import * as i0 from "@angular/core";
/** Mitgelieferte Symbolnamen mit Autovervollstaendigung; eigene Symbole des Hosts sind als beliebiger String erlaubt. */
export type MrdIconSymbol = IconName | `${IconName}` | (string & {});
export type MrdIconOuter = 'outline' | 'full' | 'dashed';
/** Namensraum, unter dem alle Symbole per `svgIcon="mrd:<symbol>[-outline|-full|-dashed][-up|-down|-left|-right]"` abrufbar sind */
export declare const MRD_ICON_NAMESPACE = "mrd";
export interface MrdIconSvgOptions {
    symbol?: MrdIconSymbol;
    outer?: MrdIconOuter;
    /** Farbe fuer Rahmen und Symbol; Standard `currentColor` (Textfarbe der Umgebung) */
    color?: string;
    innerColor?: string;
    outerColor?: string;
    direction?: IconDirection | number;
    size?: number | string;
}
/** Symbol mit optionaler groesserer Variante fuer die Darstellung ohne Rahmen */
export interface MrdIconSymbolDefinition {
    /** Symbol fuer den Rahmen; fehlt es, gibt es das Symbol nur ohne Rahmen */
    svg?: string;
    pur?: string;
}
/** Symbol einer vordefinierten Schaltflaeche, siehe `MrdDefinedButton.icon` */
export interface MrdIconDefinition {
    symbol: MrdIconSymbol;
    outer?: MrdIconOuter;
    direction?: IconDirection | number;
}
/**
 * Verwaltet die Symbole im 64x64-Raster, aus denen die IconFactory Icons baut:
 * die mitgelieferten aus `IconLib` und eigene des Hosts (`provideMrdIcons({symbols})`).
 */
export declare class MrdIconSymbolRegistryService {
    private readonly symbole;
    /** Varianten ohne Rahmen, siehe `IconLib.PurMap` */
    private readonly purSymbole;
    /**
     * Registriert ein eigenes Symbol (Pfade im 64x64-Raster, mit oder ohne umschliessendes `<svg>`).
     * Enthaelt es weder `fill` noch `stroke`, wird es gefuellt dargestellt, damit es sich einfaerben laesst.
     * @param svg Symbol fuer die Darstellung im Rahmen; leer, wenn es das Symbol nur ohne Rahmen gibt
     * @param pur Optionale groessere Variante, die ohne Rahmen statt `svg` verwendet wird
     * @security Das Markup wird ohne Sanitizing ins DOM uebernommen - nur Symbole aus dem eigenen Code registrieren.
     */
    addSymbol(name: string, svg: string | null, pur?: string): this;
    addSymbols(symbole: Record<string, string | MrdIconSymbolDefinition>): this;
    hasPurSymbol(name: string): boolean;
    /** true, wenn es das Symbol mit oder ohne Rahmen gibt */
    hasSymbol(name: string): boolean;
    getSymbolNames(): string[];
    /** Baut das SVG; wirft einen Fehler bei unbekanntem Symbol. */
    createSvg(options: MrdIconSvgOptions): string;
    /**
     * Baut das SVG zu einem Namen wie `bearbeiten-outline` oder `pfeil-full-down`; null bei unbekanntem Symbol.
     * Reihenfolge: Symbol, optional Rahmen, optional Richtung.
     */
    createSvgFromName(name: string): string | null;
    /**
     * Im Rahmen das Rahmen-Symbol, ohne Rahmen die Variante ohne Rahmen; fehlt die passende, wird die jeweils andere genommen
     * (ein reines Pur-Symbol im Rahmen kann den Kreis ueberdecken).
     */
    private symbolLesen;
    private static normalisieren;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdIconSymbolRegistryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MrdIconSymbolRegistryService>;
}
