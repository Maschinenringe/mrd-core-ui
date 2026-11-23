import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./mrd-icon-symbol-registry.service";
import * as i2 from "@angular/common/http";
export const MRD_ICON_DATENBANK_STANDARD = {
    aktiv: true,
    url: '/api/alg/icons',
    zeitlimitMs: 1500
};
/** Konfiguration für das Laden der Icon-Symbole aus der Datenbank, siehe `provideMrdIconDatenbank` */
export const MRD_ICON_DATENBANK_CONFIG = new InjectionToken('mrd-icon-datenbank-config', {
    providedIn: 'root',
    factory: () => MRD_ICON_DATENBANK_STANDARD
});
/** Schlüssel im localStorage, unter dem die zuletzt geladenen Symbole liegen */
export const MRD_ICON_CACHE_SCHLUESSEL = 'mrd-icon-symbole';
const NAME_MUSTER = /^[A-Za-z0-9_-]{1,64}$/;
const MAX_LAENGE = 50000;
const SVG_NS = 'http://www.w3.org/2000/svg';
const ERLAUBTE_ELEMENTE = new Set(['g', 'path', 'circle', 'ellipse', 'rect', 'line', 'polyline', 'polygon']);
const ERLAUBTE_ATTRIBUTE = new Set([
    'd', 'cx', 'cy', 'r', 'rx', 'ry', 'x', 'y', 'x1', 'y1', 'x2', 'y2', 'width', 'height', 'points', 'pathLength',
    'fill', 'fill-rule', 'fill-opacity', 'clip-rule', 'opacity', 'transform',
    'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit',
    'stroke-dasharray', 'stroke-dashoffset', 'stroke-opacity'
]);
/**
 * Lädt die Icon-Symbole aus der Datenbank und registriert sie in der `MrdIconSymbolRegistryService`.
 * Die mitgelieferten Symbole aus `IconLib` bleiben als Fallback; Symbole aus der Datenbank ersetzen oder ergänzen sie.
 * Die zuletzt geladenen Symbole liegen im localStorage und stehen beim nächsten Start sofort bereit.
 */
export class MrdIconDatenbankService {
    config;
    symbolRegistry;
    errorHandler;
    http;
    ladevorgang = null;
    _laeuft = false;
    _geladeneNamen = new Set();
    constructor(config, symbolRegistry, errorHandler, httpBackend) {
        this.config = config;
        this.symbolRegistry = symbolRegistry;
        this.errorHandler = errorHandler;
        // Eigener HttpClient ohne die Interceptors des Hosts: der Endpunkt braucht keine Anmeldung
        this.http = httpBackend ? new HttpClient(httpBackend) : null;
    }
    /** true, solange die Antwort des Endpunkts noch aussteht */
    get laeuft() {
        return this._laeuft;
    }
    /** Namen der Symbole, die aus der Datenbank (oder deren Cache im localStorage) registriert wurden */
    get geladeneNamen() {
        return this._geladeneNamen;
    }
    /**
     * Registriert die zwischengespeicherten Symbole sofort und lädt danach die aktuellen vom Server.
     * Das Promise wird spätestens nach `zeitlimitMs` erfüllt und nie abgelehnt; mehrere Aufrufe teilen sich einen Ladevorgang.
     * @param fehlendesHttpMelden Meldet über den ErrorHandler, wenn der Host keinen HttpClient bereitstellt
     */
    laden(fehlendesHttpMelden = true) {
        if (!this.config.aktiv) {
            return Promise.resolve();
        }
        if (!this.ladevorgang) {
            this.ladevorgang = this.ladenStarten(fehlendesHttpMelden);
        }
        return this.ladevorgang;
    }
    ladenStarten(fehlendesHttpMelden) {
        this.ausCacheRegistrieren();
        if (!this.http) {
            if (fehlendesHttpMelden) {
                this.errorHandler.handleError(new Error('MrdIconDatenbankService: Kein HttpClient vorhanden (HttpClientModule fehlt), es bleibt bei den mitgelieferten Icons.'));
            }
            return Promise.resolve();
        }
        const http = this.http;
        this._laeuft = true;
        return new Promise((erledigt) => {
            // Nach dem Zeitlimit startet die Anwendung; die Symbole werden dann nachträglich ausgetauscht
            const timer = setTimeout(erledigt, this.config.zeitlimitMs);
            const beenden = () => {
                this._laeuft = false;
                clearTimeout(timer);
                erledigt();
            };
            http.get(this.config.url).subscribe({
                next: (antwort) => {
                    try {
                        this.antwortUebernehmen(antwort);
                    }
                    catch (fehler) {
                        this.errorHandler.handleError(fehler);
                    }
                    finally {
                        beenden();
                    }
                },
                // Server nicht erreichbar: es bleibt bei Cache und mitgelieferten Symbolen
                error: () => beenden()
            });
        });
    }
    antwortUebernehmen(antwort) {
        const symbole = this.gueltigeSymbole(antwort, true);
        // Leer ist der Fehlerfall des Servers: Cache und Registry bleiben unverändert
        if (!Object.keys(symbole).length) {
            return;
        }
        this.registrieren(symbole);
        this.cacheSchreiben(Object.entries(symbole).map(([name, definition]) => ({ name, ...definition })));
    }
    ausCacheRegistrieren() {
        let gespeichert;
        try {
            const text = localStorage.getItem(MRD_ICON_CACHE_SCHLUESSEL);
            gespeichert = text ? JSON.parse(text) : null;
        }
        catch {
            return;
        }
        const symbole = this.gueltigeSymbole(gespeichert, false);
        if (Object.keys(symbole).length) {
            this.registrieren(symbole);
        }
    }
    registrieren(symbole) {
        Object.keys(symbole).forEach((name) => this._geladeneNamen.add(name));
        this.symbolRegistry.addSymbols(symbole);
    }
    cacheSchreiben(symbole) {
        try {
            localStorage.setItem(MRD_ICON_CACHE_SCHLUESSEL, JSON.stringify(symbole));
        }
        catch {
            // localStorage gesperrt oder voll: dann eben ohne Cache
        }
    }
    /** Prüft die Symbole und liefert nur die gültigen; ungültige werden (bei Bedarf) über den ErrorHandler gemeldet */
    gueltigeSymbole(daten, fehlerMelden) {
        // Ohne Prototyp, damit ein Name wie "__proto__" ein normaler Eintrag bleibt
        const ergebnis = Object.create(null);
        if (!Array.isArray(daten)) {
            return ergebnis;
        }
        daten.forEach((dto) => {
            const fehler = MrdIconDatenbankService.symbolPruefen(dto);
            if (fehler) {
                if (fehlerMelden) {
                    this.errorHandler.handleError(new Error(`Icon-Symbol aus der Datenbank verworfen: ${fehler}`));
                }
                return;
            }
            ergebnis[dto.name] = { svg: dto.svg || undefined, pur: dto.pur || undefined };
        });
        return ergebnis;
    }
    /** Liefert eine Fehlerbeschreibung oder null, wenn das Symbol gültig ist */
    static symbolPruefen(dto) {
        if (!dto || typeof dto.name !== 'string' || !NAME_MUSTER.test(dto.name)) {
            return `ungültiger Name ${JSON.stringify(dto?.name)}`;
        }
        if (!dto.svg && !dto.pur) {
            return `"${dto.name}" hat weder svg noch pur`;
        }
        for (const markup of [dto.svg, dto.pur]) {
            if (markup) {
                const fehler = MrdIconDatenbankService.markupPruefen(markup);
                if (fehler) {
                    return `"${dto.name}": ${fehler}`;
                }
            }
        }
        return null;
    }
    /**
     * Lässt nur einfache Zeichenelemente mit Geometrie- und Darstellungsattributen zu,
     * da Symbole ohne Sanitizing ins DOM übernommen werden (siehe `MrdIconSymbolRegistryService.addSymbol`).
     */
    static markupPruefen(markup) {
        if (typeof markup !== 'string' || markup.length > MAX_LAENGE) {
            return 'Markup fehlt oder ist zu lang';
        }
        // Eine umschließende <svg>-Hülle entfernt auch die Registry beim Normalisieren
        const inhalt = markup.replace(/<svg[^>]*>/, '').replace(/<\/svg>/, '');
        const dokument = new DOMParser().parseFromString(`<svg xmlns="${SVG_NS}">${inhalt}</svg>`, 'image/svg+xml');
        const wurzel = dokument.documentElement;
        if (wurzel.localName !== 'svg' || dokument.getElementsByTagName('parsererror').length) {
            return 'Markup ist kein gültiges SVG';
        }
        const elemente = Array.from(wurzel.getElementsByTagName('*'));
        for (const element of elemente) {
            if (element.namespaceURI !== SVG_NS || !ERLAUBTE_ELEMENTE.has(element.localName)) {
                return `Element <${element.localName}> ist nicht erlaubt`;
            }
            for (const attribut of Array.from(element.attributes)) {
                // Aus Grafikprogrammen kopierte Pfade tragen oft den (überflüssigen) SVG-Namensraum
                if (attribut.name === 'xmlns' && attribut.value === SVG_NS) {
                    continue;
                }
                if (!ERLAUBTE_ATTRIBUTE.has(attribut.name) || /url\s*\(|javascript:/i.test(attribut.value)) {
                    return `Attribut ${attribut.name} an <${element.localName}> ist nicht erlaubt`;
                }
            }
        }
        return null;
    }
    /** @nocollapse */ static ɵfac = function MrdIconDatenbankService_Factory(t) { return new (t || MrdIconDatenbankService)(i0.ɵɵinject(MRD_ICON_DATENBANK_CONFIG), i0.ɵɵinject(i1.MrdIconSymbolRegistryService), i0.ɵɵinject(i0.ErrorHandler), i0.ɵɵinject(i2.HttpBackend, 8)); };
    /** @nocollapse */ static ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: MrdIconDatenbankService, factory: MrdIconDatenbankService.ɵfac, providedIn: 'root' });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdIconDatenbankService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MRD_ICON_DATENBANK_CONFIG]
            }] }, { type: i1.MrdIconSymbolRegistryService }, { type: i0.ErrorHandler }, { type: i2.HttpBackend, decorators: [{
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWljb24tZGF0ZW5iYW5rLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL2NvbW1vbi9zZXJ2aWNlL21yZC1pY29uLWRhdGVuYmFuay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBZSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQWdCLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQXFCM0YsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQTJCO0lBQ2pFLEtBQUssRUFBRSxJQUFJO0lBQ1gsR0FBRyxFQUFFLGdCQUFnQjtJQUNyQixXQUFXLEVBQUUsSUFBSTtDQUNsQixDQUFDO0FBRUYsc0dBQXNHO0FBQ3RHLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUFHLElBQUksY0FBYyxDQUF5QiwyQkFBMkIsRUFBRTtJQUMvRyxVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsMkJBQTJCO0NBQzNDLENBQUMsQ0FBQztBQUVILGdGQUFnRjtBQUNoRixNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBRyxrQkFBa0IsQ0FBQztBQUU1RCxNQUFNLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQztBQUM1QyxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDekIsTUFBTSxNQUFNLEdBQUcsNEJBQTRCLENBQUM7QUFDNUMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsQ0FBUyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ3JILE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxHQUFHLENBQVM7SUFD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QVEsQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEtBQUssTUFBTSxFQUFFO29CQUMxRCxTQUFTO2lCQUNWO2dCQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzFGLE9BQU8sWUFBWSxRQUFRLENBQUMsSUFBSSxRQUFRLE9BQU8sQ0FBQyxTQUFTLHFCQUFxQixDQUFDO2lCQUNoRjthQUNGO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7b0dBMUxVLHVCQUF1QixjQVF4Qix5QkFBeUI7K0ZBUnhCLHVCQUF1QixXQUF2Qix1QkFBdUIsbUJBRnRCLE1BQU07O3VGQUVQLHVCQUF1QjtjQUhuQyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQVNJLE1BQU07dUJBQUMseUJBQXlCOztzQkFHaEMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBCYWNrZW5kLCBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRXJyb3JIYW5kbGVyLCBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTXJkSWNvblN5bWJvbERlZmluaXRpb24sIE1yZEljb25TeW1ib2xSZWdpc3RyeVNlcnZpY2UgfSBmcm9tICcuL21yZC1pY29uLXN5bWJvbC1yZWdpc3RyeS5zZXJ2aWNlJztcblxuLyoqIEVpbiBJY29uLVN5bWJvbCwgd2llIGVzIGRlciBFbmRwdW5rdCBgYWxnL2ljb25zYCBsaWVmZXJ0ICg2NHg2NC1SYXN0ZXIgd2llIGBJY29uTGliYCkgKi9cbmV4cG9ydCBpbnRlcmZhY2UgTXJkSWNvblN5bWJvbER0byB7XG4gIG5hbWU6IHN0cmluZztcbiAgLyoqIFN5bWJvbCBmw7xyIGRpZSBEYXJzdGVsbHVuZyBpbSBSYWhtZW4gKi9cbiAgc3ZnPzogc3RyaW5nIHwgbnVsbDtcbiAgLyoqIEdyw7bDn2VyZSBWYXJpYW50ZSBmw7xyIGRpZSBEYXJzdGVsbHVuZyBvaG5lIFJhaG1lbiAqL1xuICBwdXI/OiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1yZEljb25EYXRlbmJhbmtDb25maWcge1xuICAvKiogZmFsc2Ugc2NoYWx0ZXQgZGFzIExhZGVuIGF1cyBkZXIgRGF0ZW5iYW5rIGtvbXBsZXR0IGFiICovXG4gIGFrdGl2OiBib29sZWFuO1xuICAvKiogRW5kcHVua3QsIGRlciBkaWUgU3ltYm9sZSBhbHMgYE1yZEljb25TeW1ib2xEdG9bXWAgbGllZmVydCAqL1xuICB1cmw6IHN0cmluZztcbiAgLyoqIFNvIGxhbmdlIHdhcnRldCBkZXIgU3RhcnQgZGVyIEFud2VuZHVuZyBow7ZjaHN0ZW5zIGF1ZiBkaWUgU3ltYm9sZTsgZGFuYWNoIHdlcmRlbiBzaWUgbmFjaHRyw6RnbGljaCBhdXNnZXRhdXNjaHQgKi9cbiAgemVpdGxpbWl0TXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IE1SRF9JQ09OX0RBVEVOQkFOS19TVEFOREFSRDogTXJkSWNvbkRhdGVuYmFua0NvbmZpZyA9IHtcbiAgYWt0aXY6IHRydWUsXG4gIHVybDogJy9hcGkvYWxnL2ljb25zJyxcbiAgemVpdGxpbWl0TXM6IDE1MDBcbn07XG5cbi8qKiBLb25maWd1cmF0aW9uIGbDvHIgZGFzIExhZGVuIGRlciBJY29uLVN5bWJvbGUgYXVzIGRlciBEYXRlbmJhbmssIHNpZWhlIGBwcm92aWRlTXJkSWNvbkRhdGVuYmFua2AgKi9cbmV4cG9ydCBjb25zdCBNUkRfSUNPTl9EQVRFTkJBTktfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPE1yZEljb25EYXRlbmJhbmtDb25maWc+KCdtcmQtaWNvbi1kYXRlbmJhbmstY29uZmlnJywge1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIGZhY3Rvcnk6ICgpID0+IE1SRF9JQ09OX0RBVEVOQkFOS19TVEFOREFSRFxufSk7XG5cbi8qKiBTY2hsw7xzc2VsIGltIGxvY2FsU3RvcmFnZSwgdW50ZXIgZGVtIGRpZSB6dWxldHp0IGdlbGFkZW5lbiBTeW1ib2xlIGxpZWdlbiAqL1xuZXhwb3J0IGNvbnN0IE1SRF9JQ09OX0NBQ0hFX1NDSExVRVNTRUwgPSAnbXJkLWljb24tc3ltYm9sZSc7XG5cbmNvbnN0IE5BTUVfTVVTVEVSID0gL15bQS1aYS16MC05Xy1dezEsNjR9JC87XG5jb25zdCBNQVhfTEFFTkdFID0gNTAwMDA7XG5jb25zdCBTVkdfTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuY29uc3QgRVJMQVVCVEVfRUxFTUVOVEUgPSBuZXcgU2V0PHN0cmluZz4oWydnJywgJ3BhdGgnLCAnY2lyY2xlJywgJ2VsbGlwc2UnLCAncmVjdCcsICdsaW5lJywgJ3BvbHlsaW5lJywgJ3BvbHlnb24nXSk7XG5jb25zdCBFUkxBVUJURV9BVFRSSUJVVEUgPSBuZXcgU2V0PHN0cmluZz4oW1xuICAnZCcsICdjeCcsICdjeScsICdyJywgJ3J4JywgJ3J5JywgJ3gnLCAneScsICd4MScsICd5MScsICd4MicsICd5MicsICd3aWR0aCcsICdoZWlnaHQnLCAncG9pbnRzJywgJ3BhdGhMZW5ndGgnLFxuICAnZmlsbCcsICdmaWxsLXJ1bGUnLCAnZmlsbC1vcGFjaXR5JywgJ2NsaXAtcnVsZScsICdvcGFjaXR5JywgJ3RyYW5zZm9ybScsXG4gICdzdHJva2UnLCAnc3Ryb2tlLXdpZHRoJywgJ3N0cm9rZS1saW5lY2FwJywgJ3N0cm9rZS1saW5lam9pbicsICdzdHJva2UtbWl0ZXJsaW1pdCcsXG4gICdzdHJva2UtZGFzaGFycmF5JywgJ3N0cm9rZS1kYXNob2Zmc2V0JywgJ3N0cm9rZS1vcGFjaXR5J1xuXSk7XG5cbi8qKlxuICogTMOkZHQgZGllIEljb24tU3ltYm9sZSBhdXMgZGVyIERhdGVuYmFuayB1bmQgcmVnaXN0cmllcnQgc2llIGluIGRlciBgTXJkSWNvblN5bWJvbFJlZ2lzdHJ5U2VydmljZWAuXG4gKiBEaWUgbWl0Z2VsaWVmZXJ0ZW4gU3ltYm9sZSBhdXMgYEljb25MaWJgIGJsZWliZW4gYWxzIEZhbGxiYWNrOyBTeW1ib2xlIGF1cyBkZXIgRGF0ZW5iYW5rIGVyc2V0emVuIG9kZXIgZXJnw6RuemVuIHNpZS5cbiAqIERpZSB6dWxldHp0IGdlbGFkZW5lbiBTeW1ib2xlIGxpZWdlbiBpbSBsb2NhbFN0b3JhZ2UgdW5kIHN0ZWhlbiBiZWltIG7DpGNoc3RlbiBTdGFydCBzb2ZvcnQgYmVyZWl0LlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNcmRJY29uRGF0ZW5iYW5rU2VydmljZSB7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBodHRwOiBIdHRwQ2xpZW50IHwgbnVsbDtcbiAgcHJpdmF0ZSBsYWRldm9yZ2FuZzogUHJvbWlzZTx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9sYWV1ZnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSByZWFkb25seSBfZ2VsYWRlbmVOYW1lbjogU2V0PHN0cmluZz4gPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KE1SRF9JQ09OX0RBVEVOQkFOS19DT05GSUcpIHByaXZhdGUgcmVhZG9ubHkgY29uZmlnOiBNcmRJY29uRGF0ZW5iYW5rQ29uZmlnLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3ltYm9sUmVnaXN0cnk6IE1yZEljb25TeW1ib2xSZWdpc3RyeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcixcbiAgICBAT3B0aW9uYWwoKSBodHRwQmFja2VuZDogSHR0cEJhY2tlbmQgfCBudWxsXG4gICkge1xuICAgIC8vIEVpZ2VuZXIgSHR0cENsaWVudCBvaG5lIGRpZSBJbnRlcmNlcHRvcnMgZGVzIEhvc3RzOiBkZXIgRW5kcHVua3QgYnJhdWNodCBrZWluZSBBbm1lbGR1bmdcbiAgICB0aGlzLmh0dHAgPSBodHRwQmFja2VuZCA/IG5ldyBIdHRwQ2xpZW50KGh0dHBCYWNrZW5kKSA6IG51bGw7XG4gIH1cblxuICAvKiogdHJ1ZSwgc29sYW5nZSBkaWUgQW50d29ydCBkZXMgRW5kcHVua3RzIG5vY2ggYXVzc3RlaHQgKi9cbiAgcHVibGljIGdldCBsYWV1ZnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2xhZXVmdDtcbiAgfVxuXG4gIC8qKiBOYW1lbiBkZXIgU3ltYm9sZSwgZGllIGF1cyBkZXIgRGF0ZW5iYW5rIChvZGVyIGRlcmVuIENhY2hlIGltIGxvY2FsU3RvcmFnZSkgcmVnaXN0cmllcnQgd3VyZGVuICovXG4gIHB1YmxpYyBnZXQgZ2VsYWRlbmVOYW1lbigpOiBSZWFkb25seVNldDxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fZ2VsYWRlbmVOYW1lbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RyaWVydCBkaWUgendpc2NoZW5nZXNwZWljaGVydGVuIFN5bWJvbGUgc29mb3J0IHVuZCBsw6RkdCBkYW5hY2ggZGllIGFrdHVlbGxlbiB2b20gU2VydmVyLlxuICAgKiBEYXMgUHJvbWlzZSB3aXJkIHNww6R0ZXN0ZW5zIG5hY2ggYHplaXRsaW1pdE1zYCBlcmbDvGxsdCB1bmQgbmllIGFiZ2VsZWhudDsgbWVocmVyZSBBdWZydWZlIHRlaWxlbiBzaWNoIGVpbmVuIExhZGV2b3JnYW5nLlxuICAgKiBAcGFyYW0gZmVobGVuZGVzSHR0cE1lbGRlbiBNZWxkZXQgw7xiZXIgZGVuIEVycm9ySGFuZGxlciwgd2VubiBkZXIgSG9zdCBrZWluZW4gSHR0cENsaWVudCBiZXJlaXRzdGVsbHRcbiAgICovXG4gIHB1YmxpYyBsYWRlbihmZWhsZW5kZXNIdHRwTWVsZGVuOiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghdGhpcy5jb25maWcuYWt0aXYpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmxhZGV2b3JnYW5nKSB7XG4gICAgICB0aGlzLmxhZGV2b3JnYW5nID0gdGhpcy5sYWRlblN0YXJ0ZW4oZmVobGVuZGVzSHR0cE1lbGRlbik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxhZGV2b3JnYW5nO1xuICB9XG5cbiAgcHJpdmF0ZSBsYWRlblN0YXJ0ZW4oZmVobGVuZGVzSHR0cE1lbGRlbjogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuYXVzQ2FjaGVSZWdpc3RyaWVyZW4oKTtcblxuICAgIGlmICghdGhpcy5odHRwKSB7XG4gICAgICBpZiAoZmVobGVuZGVzSHR0cE1lbGRlbikge1xuICAgICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgRXJyb3IoXG4gICAgICAgICAgJ01yZEljb25EYXRlbmJhbmtTZXJ2aWNlOiBLZWluIEh0dHBDbGllbnQgdm9yaGFuZGVuIChIdHRwQ2xpZW50TW9kdWxlIGZlaGx0KSwgZXMgYmxlaWJ0IGJlaSBkZW4gbWl0Z2VsaWVmZXJ0ZW4gSWNvbnMuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGh0dHAgPSB0aGlzLmh0dHA7XG4gICAgdGhpcy5fbGFldWZ0ID0gdHJ1ZTtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKGVybGVkaWd0OiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgICAvLyBOYWNoIGRlbSBaZWl0bGltaXQgc3RhcnRldCBkaWUgQW53ZW5kdW5nOyBkaWUgU3ltYm9sZSB3ZXJkZW4gZGFubiBuYWNodHLDpGdsaWNoIGF1c2dldGF1c2NodFxuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KGVybGVkaWd0LCB0aGlzLmNvbmZpZy56ZWl0bGltaXRNcyk7XG4gICAgICBjb25zdCBiZWVuZGVuID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLl9sYWV1ZnQgPSBmYWxzZTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgZXJsZWRpZ3QoKTtcbiAgICAgIH07XG4gICAgICBodHRwLmdldDxNcmRJY29uU3ltYm9sRHRvW10+KHRoaXMuY29uZmlnLnVybCkuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogKGFudHdvcnQ6IE1yZEljb25TeW1ib2xEdG9bXSkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmFudHdvcnRVZWJlcm5laG1lbihhbnR3b3J0KTtcbiAgICAgICAgICB9IGNhdGNoIChmZWhsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKGZlaGxlcik7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGJlZW5kZW4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIFNlcnZlciBuaWNodCBlcnJlaWNoYmFyOiBlcyBibGVpYnQgYmVpIENhY2hlIHVuZCBtaXRnZWxpZWZlcnRlbiBTeW1ib2xlblxuICAgICAgICBlcnJvcjogKCkgPT4gYmVlbmRlbigpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYW50d29ydFVlYmVybmVobWVuKGFudHdvcnQ6IE1yZEljb25TeW1ib2xEdG9bXSk6IHZvaWQge1xuICAgIGNvbnN0IHN5bWJvbGUgPSB0aGlzLmd1ZWx0aWdlU3ltYm9sZShhbnR3b3J0LCB0cnVlKTtcbiAgICAvLyBMZWVyIGlzdCBkZXIgRmVobGVyZmFsbCBkZXMgU2VydmVyczogQ2FjaGUgdW5kIFJlZ2lzdHJ5IGJsZWliZW4gdW52ZXLDpG5kZXJ0XG4gICAgaWYgKCFPYmplY3Qua2V5cyhzeW1ib2xlKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZWdpc3RyaWVyZW4oc3ltYm9sZSk7XG4gICAgdGhpcy5jYWNoZVNjaHJlaWJlbihPYmplY3QuZW50cmllcyhzeW1ib2xlKS5tYXAoKFtuYW1lLCBkZWZpbml0aW9uXSkgPT4gKHtuYW1lLCAuLi5kZWZpbml0aW9ufSkpKTtcbiAgfVxuXG4gIHByaXZhdGUgYXVzQ2FjaGVSZWdpc3RyaWVyZW4oKTogdm9pZCB7XG4gICAgbGV0IGdlc3BlaWNoZXJ0OiB1bmtub3duO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0ZXh0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTVJEX0lDT05fQ0FDSEVfU0NITFVFU1NFTCk7XG4gICAgICBnZXNwZWljaGVydCA9IHRleHQgPyBKU09OLnBhcnNlKHRleHQpIDogbnVsbDtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3ltYm9sZSA9IHRoaXMuZ3VlbHRpZ2VTeW1ib2xlKGdlc3BlaWNoZXJ0LCBmYWxzZSk7XG4gICAgaWYgKE9iamVjdC5rZXlzKHN5bWJvbGUpLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZWdpc3RyaWVyZW4oc3ltYm9sZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3RyaWVyZW4oc3ltYm9sZTogUmVjb3JkPHN0cmluZywgTXJkSWNvblN5bWJvbERlZmluaXRpb24+KTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXMoc3ltYm9sZSkuZm9yRWFjaCgobmFtZTogc3RyaW5nKSA9PiB0aGlzLl9nZWxhZGVuZU5hbWVuLmFkZChuYW1lKSk7XG4gICAgdGhpcy5zeW1ib2xSZWdpc3RyeS5hZGRTeW1ib2xzKHN5bWJvbGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWNoZVNjaHJlaWJlbihzeW1ib2xlOiBNcmRJY29uU3ltYm9sRHRvW10pOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTVJEX0lDT05fQ0FDSEVfU0NITFVFU1NFTCwgSlNPTi5zdHJpbmdpZnkoc3ltYm9sZSkpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gbG9jYWxTdG9yYWdlIGdlc3BlcnJ0IG9kZXIgdm9sbDogZGFubiBlYmVuIG9obmUgQ2FjaGVcbiAgICB9XG4gIH1cblxuICAvKiogUHLDvGZ0IGRpZSBTeW1ib2xlIHVuZCBsaWVmZXJ0IG51ciBkaWUgZ8O8bHRpZ2VuOyB1bmfDvGx0aWdlIHdlcmRlbiAoYmVpIEJlZGFyZikgw7xiZXIgZGVuIEVycm9ySGFuZGxlciBnZW1lbGRldCAqL1xuICBwcml2YXRlIGd1ZWx0aWdlU3ltYm9sZShkYXRlbjogdW5rbm93biwgZmVobGVyTWVsZGVuOiBib29sZWFuKTogUmVjb3JkPHN0cmluZywgTXJkSWNvblN5bWJvbERlZmluaXRpb24+IHtcbiAgICAvLyBPaG5lIFByb3RvdHlwLCBkYW1pdCBlaW4gTmFtZSB3aWUgXCJfX3Byb3RvX19cIiBlaW4gbm9ybWFsZXIgRWludHJhZyBibGVpYnRcbiAgICBjb25zdCBlcmdlYm5pczogUmVjb3JkPHN0cmluZywgTXJkSWNvblN5bWJvbERlZmluaXRpb24+ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0ZW4pKSB7XG4gICAgICByZXR1cm4gZXJnZWJuaXM7XG4gICAgfVxuICAgIGRhdGVuLmZvckVhY2goKGR0bzogTXJkSWNvblN5bWJvbER0bykgPT4ge1xuICAgICAgY29uc3QgZmVobGVyID0gTXJkSWNvbkRhdGVuYmFua1NlcnZpY2Uuc3ltYm9sUHJ1ZWZlbihkdG8pO1xuICAgICAgaWYgKGZlaGxlcikge1xuICAgICAgICBpZiAoZmVobGVyTWVsZGVuKSB7XG4gICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEVycm9yKGBJY29uLVN5bWJvbCBhdXMgZGVyIERhdGVuYmFuayB2ZXJ3b3JmZW46ICR7ZmVobGVyfWApKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlcmdlYm5pc1tkdG8ubmFtZV0gPSB7c3ZnOiBkdG8uc3ZnIHx8IHVuZGVmaW5lZCwgcHVyOiBkdG8ucHVyIHx8IHVuZGVmaW5lZH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGVyZ2VibmlzO1xuICB9XG5cbiAgLyoqIExpZWZlcnQgZWluZSBGZWhsZXJiZXNjaHJlaWJ1bmcgb2RlciBudWxsLCB3ZW5uIGRhcyBTeW1ib2wgZ8O8bHRpZyBpc3QgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgc3ltYm9sUHJ1ZWZlbihkdG86IE1yZEljb25TeW1ib2xEdG8pOiBzdHJpbmcgfCBudWxsIHtcbiAgICBpZiAoIWR0byB8fCB0eXBlb2YgZHRvLm5hbWUgIT09ICdzdHJpbmcnIHx8ICFOQU1FX01VU1RFUi50ZXN0KGR0by5uYW1lKSkge1xuICAgICAgcmV0dXJuIGB1bmfDvGx0aWdlciBOYW1lICR7SlNPTi5zdHJpbmdpZnkoZHRvPy5uYW1lKX1gO1xuICAgIH1cbiAgICBpZiAoIWR0by5zdmcgJiYgIWR0by5wdXIpIHtcbiAgICAgIHJldHVybiBgXCIke2R0by5uYW1lfVwiIGhhdCB3ZWRlciBzdmcgbm9jaCBwdXJgO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG1hcmt1cCBvZiBbZHRvLnN2ZywgZHRvLnB1cl0pIHtcbiAgICAgIGlmIChtYXJrdXApIHtcbiAgICAgICAgY29uc3QgZmVobGVyID0gTXJkSWNvbkRhdGVuYmFua1NlcnZpY2UubWFya3VwUHJ1ZWZlbihtYXJrdXApO1xuICAgICAgICBpZiAoZmVobGVyKSB7XG4gICAgICAgICAgcmV0dXJuIGBcIiR7ZHRvLm5hbWV9XCI6ICR7ZmVobGVyfWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogTMOkc3N0IG51ciBlaW5mYWNoZSBaZWljaGVuZWxlbWVudGUgbWl0IEdlb21ldHJpZS0gdW5kIERhcnN0ZWxsdW5nc2F0dHJpYnV0ZW4genUsXG4gICAqIGRhIFN5bWJvbGUgb2huZSBTYW5pdGl6aW5nIGlucyBET00gw7xiZXJub21tZW4gd2VyZGVuIChzaWVoZSBgTXJkSWNvblN5bWJvbFJlZ2lzdHJ5U2VydmljZS5hZGRTeW1ib2xgKS5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIG1hcmt1cFBydWVmZW4obWFya3VwOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBpZiAodHlwZW9mIG1hcmt1cCAhPT0gJ3N0cmluZycgfHwgbWFya3VwLmxlbmd0aCA+IE1BWF9MQUVOR0UpIHtcbiAgICAgIHJldHVybiAnTWFya3VwIGZlaGx0IG9kZXIgaXN0IHp1IGxhbmcnO1xuICAgIH1cbiAgICAvLyBFaW5lIHVtc2NobGllw59lbmRlIDxzdmc+LUjDvGxsZSBlbnRmZXJudCBhdWNoIGRpZSBSZWdpc3RyeSBiZWltIE5vcm1hbGlzaWVyZW5cbiAgICBjb25zdCBpbmhhbHQgPSBtYXJrdXAucmVwbGFjZSgvPHN2Z1tePl0qPi8sICcnKS5yZXBsYWNlKC88XFwvc3ZnPi8sICcnKTtcbiAgICBjb25zdCBkb2t1bWVudCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoYDxzdmcgeG1sbnM9XCIke1NWR19OU31cIj4ke2luaGFsdH08L3N2Zz5gLCAnaW1hZ2Uvc3ZnK3htbCcpO1xuICAgIGNvbnN0IHd1cnplbCA9IGRva3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBpZiAod3VyemVsLmxvY2FsTmFtZSAhPT0gJ3N2ZycgfHwgZG9rdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3BhcnNlcmVycm9yJykubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gJ01hcmt1cCBpc3Qga2VpbiBnw7xsdGlnZXMgU1ZHJztcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudGUgPSBBcnJheS5mcm9tKHd1cnplbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpKTtcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudGUpIHtcbiAgICAgIGlmIChlbGVtZW50Lm5hbWVzcGFjZVVSSSAhPT0gU1ZHX05TIHx8ICFFUkxBVUJURV9FTEVNRU5URS5oYXMoZWxlbWVudC5sb2NhbE5hbWUpKSB7XG4gICAgICAgIHJldHVybiBgRWxlbWVudCA8JHtlbGVtZW50LmxvY2FsTmFtZX0+IGlzdCBuaWNodCBlcmxhdWJ0YDtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgYXR0cmlidXQgb2YgQXJyYXkuZnJvbShlbGVtZW50LmF0dHJpYnV0ZXMpKSB7XG4gICAgICAgIC8vIEF1cyBHcmFmaWtwcm9ncmFtbWVuIGtvcGllcnRlIFBmYWRlIHRyYWdlbiBvZnQgZGVuICjDvGJlcmZsw7xzc2lnZW4pIFNWRy1OYW1lbnNyYXVtXG4gICAgICAgIGlmIChhdHRyaWJ1dC5uYW1lID09PSAneG1sbnMnICYmIGF0dHJpYnV0LnZhbHVlID09PSBTVkdfTlMpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUVSTEFVQlRFX0FUVFJJQlVURS5oYXMoYXR0cmlidXQubmFtZSkgfHwgL3VybFxccypcXCh8amF2YXNjcmlwdDovaS50ZXN0KGF0dHJpYnV0LnZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBgQXR0cmlidXQgJHthdHRyaWJ1dC5uYW1lfSBhbiA8JHtlbGVtZW50LmxvY2FsTmFtZX0+IGlzdCBuaWNodCBlcmxhdWJ0YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIl19