import { EnvironmentProviders } from '@angular/core';
import { MrdIconDatenbankConfig } from '../../../../common/service/mrd-icon-datenbank.service';
import { MrdIconSymbolDefinition } from '../../../../common/service/mrd-icon-symbol-registry.service';
export interface MrdIconsConfig {
    /** Namensraum fuer `icons` und `literals`; ohne Angabe der Standard-Namensraum (`svgIcon="name"`) */
    namespace?: string;
    /** Wird jedem Namen aus `icons` und `literals` vorangestellt, z. B. `'mrd_'` fuer bestehende Templates */
    prefix?: string;
    /** Basis-URL der SVG-Dateien, z. B. `'assets/icons/'` */
    basePath?: string;
    /** SVG-Dateien (per HTTP geladen): als Liste ist der Name der Dateiname ohne `.svg`, sonst `{name: 'datei.svg'}` */
    icons?: string[] | Record<string, string>;
    /** SVG-Markup ohne HTTP, `{name: '<svg ...>...</svg>'}`; nur Markup aus dem eigenen Code (wird nicht bereinigt) */
    literals?: Record<string, string>;
    /**
     * Eigene Symbole im 64x64-Raster fuer `<mrd-icon icon="name" outline>` und `svgIcon="mrd:name"`;
     * mit `{svg, pur}` zusaetzlich eine groessere Variante fuer die Darstellung ohne Rahmen;
     * sie gelten global, `namespace` und `prefix` wirken hier nicht
     */
    symbols?: Record<string, string | MrdIconSymbolDefinition>;
}
/**
 * Registriert Icons fuer `mrd-icon`, im AppModule oder einem Lazy-Modul:
 * `providers: [provideMrdIcons({prefix: 'mrd_', basePath: 'assets/icons/', icons: ['favorite', 'plant']})]`
 * Fuer Datei-Icons muss der Host `HttpClient` bereitstellen.
 */
export declare function provideMrdIcons(...configs: MrdIconsConfig[]): EnvironmentProviders;
/**
 * Lädt die Icon-Symbole beim Start der Anwendung aus der Datenbank (Endpunkt `alg/icons` des AllgemeinService),
 * nur im AppModule: `providers: [provideMrdIconDatenbank()]`.
 * Der Start wartet höchstens `zeitlimitMs` darauf, sonst werden die Icons nachträglich ausgetauscht.
 * Ohne diesen Provider lädt `mrd-icon` die Symbole beim ersten Icon trotzdem, dann aber ohne zu warten.
 * Bis die Symbole da sind und wenn der Server nicht erreichbar ist, gelten die mitgelieferten Icons.
 * Voraussetzung: Der Host stellt `HttpClient` bereit (`HttpClientModule`).
 */
export declare function provideMrdIconDatenbank(config?: Partial<MrdIconDatenbankConfig>): EnvironmentProviders;
