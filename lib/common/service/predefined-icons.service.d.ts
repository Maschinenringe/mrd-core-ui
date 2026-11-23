import { IconDirection } from './icon-factory.service';
import { IconName } from '../util/icon-lib';
import { MrdColor } from '../enum/color.enum';
import * as i0 from "@angular/core";
/**
 * Erzeugt Icon-Kombinationen als SVG-String mit festen Farben, z. B. fuer `iconGroup`/`iconStateMap` des mrd-s-button,
 * wenn sich Icon oder Farbe je Zustand unterscheiden sollen. Sonst ist `<mrd-icon icon="..." outline>` einfacher,
 * weil es die Textfarbe uebernimmt.
 * Die Symbole kommen aus der `MrdIconSymbolRegistryService` (inkl. der aus der Datenbank geladenen);
 * der erzeugte String ändert sich aber nicht mehr, wenn später neue Symbole geladen werden.
 */
export declare class PredefinedIconsService {
    static GenerateIcon(outer: IconName | undefined, inner: IconName | undefined, color: MrdColor | {
        inner: MrdColor;
        outer: MrdColor;
    }, size?: number, innerDirection?: number | IconDirection): string;
    /** Aus der Symbol-Registry; ohne Registry-Instanz (vor dem ersten Inject) direkt aus `IconLib` */
    private static symbol;
    static ɵfac: i0.ɵɵFactoryDeclaration<PredefinedIconsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PredefinedIconsService>;
}
