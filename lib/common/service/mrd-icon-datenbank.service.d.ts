import { HttpBackend } from '@angular/common/http';
import { ErrorHandler, InjectionToken } from '@angular/core';
import { MrdIconSymbolRegistryService } from './mrd-icon-symbol-registry.service';
import * as i0 from "@angular/core";
/** Ein Icon-Symbol, wie es der Endpunkt `alg/icons` liefert (64x64-Raster wie `IconLib`) */
export interface MrdIconSymbolDto {
    name: string;
    /** Symbol für die Darstellung im Rahmen */
    svg?: string | null;
    /** Größere Variante für die Darstellung ohne Rahmen */
    pur?: string | null;
}
export interface MrdIconDatenbankConfig {
    /** false schaltet das Laden aus der Datenbank komplett ab */
    aktiv: boolean;
    /** Endpunkt, der die Symbole als `MrdIconSymbolDto[]` liefert */
    url: string;
    /** So lange wartet der Start der Anwendung höchstens auf die Symbole; danach werden sie nachträglich ausgetauscht */
    zeitlimitMs: number;
}
export declare const MRD_ICON_DATENBANK_STANDARD: MrdIconDatenbankConfig;
/** Konfiguration für das Laden der Icon-Symbole aus der Datenbank, siehe `provideMrdIconDatenbank` */
export declare const MRD_ICON_DATENBANK_CONFIG: InjectionToken<MrdIconDatenbankConfig>;
/** Schlüssel im localStorage, unter dem die zuletzt geladenen Symbole liegen */
export declare const MRD_ICON_CACHE_SCHLUESSEL = "mrd-icon-symbole";
/**
 * Lädt die Icon-Symbole aus der Datenbank und registriert sie in der `MrdIconSymbolRegistryService`.
 * Die mitgelieferten Symbole aus `IconLib` bleiben als Fallback; Symbole aus der Datenbank ersetzen oder ergänzen sie.
 * Die zuletzt geladenen Symbole liegen im localStorage und stehen beim nächsten Start sofort bereit.
 */
export declare class MrdIconDatenbankService {
    private readonly config;
    private readonly symbolRegistry;
    private readonly errorHandler;
    private readonly http;
    private ladevorgang;
    private _laeuft;
    private readonly _geladeneNamen;
    constructor(config: MrdIconDatenbankConfig, symbolRegistry: MrdIconSymbolRegistryService, errorHandler: ErrorHandler, httpBackend: HttpBackend | null);
    /** true, solange die Antwort des Endpunkts noch aussteht */
    get laeuft(): boolean;
    /** Namen der Symbole, die aus der Datenbank (oder deren Cache im localStorage) registriert wurden */
    get geladeneNamen(): ReadonlySet<string>;
    /**
     * Registriert die zwischengespeicherten Symbole sofort und lädt danach die aktuellen vom Server.
     * Das Promise wird spätestens nach `zeitlimitMs` erfüllt und nie abgelehnt; mehrere Aufrufe teilen sich einen Ladevorgang.
     * @param fehlendesHttpMelden Meldet über den ErrorHandler, wenn der Host keinen HttpClient bereitstellt
     */
    laden(fehlendesHttpMelden?: boolean): Promise<void>;
    private ladenStarten;
    private antwortUebernehmen;
    private ausCacheRegistrieren;
    private registrieren;
    private cacheSchreiben;
    /** Prüft die Symbole und liefert nur die gültigen; ungültige werden (bei Bedarf) über den ErrorHandler gemeldet */
    private gueltigeSymbole;
    /** Liefert eine Fehlerbeschreibung oder null, wenn das Symbol gültig ist */
    private static symbolPruefen;
    /**
     * Lässt nur einfache Zeichenelemente mit Geometrie- und Darstellungsattributen zu,
     * da Symbole ohne Sanitizing ins DOM übernommen werden (siehe `MrdIconSymbolRegistryService.addSymbol`).
     */
    private static markupPruefen;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdIconDatenbankService, [null, null, null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MrdIconDatenbankService>;
}
