import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IconFactoryService } from './icon-factory.service';
import { IconLib } from '../util/icon-lib';
import { MrdColor } from '../enum/color.enum';
import * as i0 from "@angular/core";
/** Namensraum, unter dem alle Symbole per `svgIcon="mrd:<symbol>[-outline|-full|-dashed][-up|-down|-left|-right]"` abrufbar sind */
export const MRD_ICON_NAMESPACE = 'mrd';
const RAHMEN = ['outline', 'full', 'dashed'];
const RICHTUNGEN = ['right', 'down', 'left', 'up'];
/**
 * Verwaltet die Symbole im 64x64-Raster, aus denen die IconFactory Icons baut:
 * die mitgelieferten aus `IconLib` und eigene des Hosts (`provideMrdIcons({symbols})`).
 */
export class MrdIconSymbolRegistryService {
    /**
     * Zuletzt erzeugte Instanz, für statische Helfer wie `PredefinedIconsService.GenerateIcon`,
     * die ohne Dependency Injection auskommen müssen.
     * @docs-private
     */
    static aktuelleInstanz = null;
    _aenderungen = new Subject();
    /** Meldet, dass Symbole hinzugekommen oder ersetzt worden sind, z. B. nach dem Laden aus der Datenbank */
    aenderungen$ = this._aenderungen.asObservable();
    symbole = new Map(Object.entries(IconLib.IconMap));
    /** Varianten ohne Rahmen, siehe `IconLib.PurMap` */
    purSymbole = new Map(Object.entries(IconLib.PurMap));
    constructor() {
        MrdIconSymbolRegistryService.aktuelleInstanz = this;
    }
    /**
     * Registriert ein eigenes Symbol (Pfade im 64x64-Raster, mit oder ohne umschliessendes `<svg>`).
     * Enthaelt es weder `fill` noch `stroke`, wird es gefuellt dargestellt, damit es sich einfaerben laesst.
     * @param svg Symbol fuer die Darstellung im Rahmen; leer, wenn es das Symbol nur ohne Rahmen gibt
     * @param pur Optionale groessere Variante, die ohne Rahmen statt `svg` verwendet wird
     * @security Das Markup wird ohne Sanitizing ins DOM uebernommen - nur Symbole aus dem eigenen Code registrieren.
     */
    addSymbol(name, svg, pur) {
        this.symbolSetzen(name, svg, pur);
        this._aenderungen.next();
        return this;
    }
    /** Registriert mehrere Symbole und meldet die Änderung nur einmal */
    addSymbols(symbole) {
        const eintraege = Object.entries(symbole);
        eintraege.forEach(([name, definition]) => {
            if (typeof definition === 'string') {
                this.symbolSetzen(name, definition);
            }
            else {
                this.symbolSetzen(name, definition.svg, definition.pur);
            }
        });
        if (eintraege.length) {
            this._aenderungen.next();
        }
        return this;
    }
    hasPurSymbol(name) {
        return this.purSymbole.has(name);
    }
    /** true, wenn es eine eigene Variante für die Darstellung im Rahmen gibt */
    hasRahmenSymbol(name) {
        return this.symbole.has(name);
    }
    /** true für die Rahmen `outline`, `full` und `dashed`, die das Symbol umschließen */
    istRahmen(name) {
        return RAHMEN.includes(name);
    }
    /** true, wenn das Symbol mit der Bibliothek ausgeliefert wird (`IconLib`); es kann trotzdem überschrieben sein */
    istMitgeliefert(name) {
        return name in IconLib.IconMap || name in IconLib.PurMap;
    }
    /** true, wenn es das Symbol mit oder ohne Rahmen gibt */
    hasSymbol(name) {
        return this.symbole.has(name) || this.purSymbole.has(name);
    }
    getSymbolNames() {
        return Array.from(new Set([...this.symbole.keys(), ...this.purSymbole.keys()]));
    }
    /** Baut das SVG; wirft einen Fehler bei unbekanntem Symbol. */
    createSvg(options) {
        const outer = this.symbolLesen(options.outer, true);
        const inner = this.symbolLesen(options.symbol, !!outer);
        const outerColor = options.outerColor ?? options.color ?? 'currentColor';
        // Auf dem gefuellten Kreis waere ein gleichfarbiges Symbol unsichtbar
        const innerColor = options.innerColor ?? (options.outer === 'full' ? MrdColor.WEISS : options.color ?? 'currentColor');
        return IconFactoryService.build({
            outer,
            inner,
            outerColor,
            innerColor,
            innerDirection: options.direction,
            size: options.size ?? 'unset'
        });
    }
    /**
     * Baut das SVG zu einem Namen wie `bearbeiten-outline` oder `pfeil-full-down`; null bei unbekanntem Symbol.
     * Reihenfolge: Symbol, optional Rahmen, optional Richtung.
     */
    createSvgFromName(name) {
        const teile = (name || '').split('-');
        let direction;
        let outer;
        if (RICHTUNGEN.includes(teile[teile.length - 1])) {
            direction = teile.pop();
        }
        if (teile.length > 1 && RAHMEN.includes(teile[teile.length - 1])) {
            outer = teile.pop();
        }
        const symbol = teile.join('-');
        if (!this.hasSymbol(symbol)) {
            return null;
        }
        return this.createSvg({ symbol, outer, direction });
    }
    /**
     * Im Rahmen das Rahmen-Symbol, ohne Rahmen die Variante ohne Rahmen; fehlt die passende, wird die jeweils andere genommen
     * (ein reines Pur-Symbol im Rahmen kann den Kreis überdecken). undefined bei unbekanntem Symbol.
     */
    findeSymbol(name, mitRahmen) {
        return mitRahmen
            ? this.symbole.get(name) ?? this.purSymbole.get(name)
            : this.purSymbole.get(name) ?? this.symbole.get(name);
    }
    symbolSetzen(name, svg, pur) {
        if (!svg && !pur) {
            throw new Error(`Das Icon-Symbol "${name}" braucht svg oder pur.`);
        }
        if (svg) {
            this.symbole.set(name, MrdIconSymbolRegistryService.normalisieren(svg));
        }
        else {
            this.symbole.delete(name);
        }
        if (pur) {
            this.purSymbole.set(name, MrdIconSymbolRegistryService.normalisieren(pur));
        }
        else {
            this.purSymbole.delete(name);
        }
    }
    /** Wie `findeSymbol`, wirft aber einen Fehler bei unbekanntem Symbol */
    symbolLesen(name, mitRahmen) {
        if (!name) {
            return undefined;
        }
        const svg = this.findeSymbol(name, mitRahmen);
        if (svg === undefined) {
            throw new Error(`Unbekanntes Icon-Symbol "${name}". Registrierte Symbole: ${this.getSymbolNames().join(', ')}`);
        }
        return svg;
    }
    static normalisieren(svg) {
        const inhalt = svg.replace(/<svg[^>]*>/, '').replace(/<\/svg>/, '').trim();
        if (/\s(fill|stroke)="/.test(inhalt)) {
            return inhalt;
        }
        return `<g fill="#000000">${inhalt}</g>`;
    }
    /** @nocollapse */ static ɵfac = function MrdIconSymbolRegistryService_Factory(t) { return new (t || MrdIconSymbolRegistryService)(); };
    /** @nocollapse */ static ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: MrdIconSymbolRegistryService, factory: MrdIconSymbolRegistryService.ɵfac, providedIn: 'root' });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdIconSymbolRegistryService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWljb24tc3ltYm9sLXJlZ2lzdHJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL2NvbW1vbi9zZXJ2aWNlL21yZC1pY29uLXN5bWJvbC1yZWdpc3RyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQWlCLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0UsT0FBTyxFQUFFLE9BQU8sRUFBWSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFPOUMsb0lBQW9JO0FBQ3BJLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLEtBQUssQ0FBQztBQTJCeEMsTUFBTSxNQUFNLEdBQW1CLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM3RCxNQUFNLFVBQVUsR0FBb0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUVwRTs7O0dBR0c7QUFJSCxNQUFNLE9BQU8sNEJBQTRCO0lBRXZDOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsZUFBZSxHQUF3QyxJQUFJLENBQUM7SUFFekQsWUFBWSxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO0lBRW5FLDBHQUEwRztJQUMxRixZQUFZLEdBQXFCLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFakUsT0FBTyxHQUF3QixJQUFJLEdBQUcsQ0FBaUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUV6RyxvREFBb0Q7SUFD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QUksRUFBRTtZQUNULE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBQ0QsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDOUMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTRCLElBQUksNEJBQTRCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pIO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRU8sTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFXO1FBQ3RDLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0UsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDcEMsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUNELE9BQU8scUJBQXFCLE1BQU0sTUFBTSxDQUFDO0lBQzNDLENBQUM7eUdBbEtVLDRCQUE0QjsrRkFBNUIsNEJBQTRCLFdBQTVCLDRCQUE0QixtQkFGM0IsTUFBTTs7dUZBRVAsNEJBQTRCO2NBSHhDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEljb25EaXJlY3Rpb24sIEljb25GYWN0b3J5U2VydmljZSB9IGZyb20gJy4vaWNvbi1mYWN0b3J5LnNlcnZpY2UnO1xuaW1wb3J0IHsgSWNvbkxpYiwgSWNvbk5hbWUgfSBmcm9tICcuLi91dGlsL2ljb24tbGliJztcbmltcG9ydCB7IE1yZENvbG9yIH0gZnJvbSAnLi4vZW51bS9jb2xvci5lbnVtJztcblxuLyoqIE1pdGdlbGllZmVydGUgU3ltYm9sbmFtZW4gbWl0IEF1dG92ZXJ2b2xsc3RhZW5kaWd1bmc7IGVpZ2VuZSBTeW1ib2xlIGRlcyBIb3N0cyBzaW5kIGFscyBiZWxpZWJpZ2VyIFN0cmluZyBlcmxhdWJ0LiAqL1xuZXhwb3J0IHR5cGUgTXJkSWNvblN5bWJvbCA9IEljb25OYW1lIHwgYCR7SWNvbk5hbWV9YCB8IChzdHJpbmcgJiB7fSk7XG5cbmV4cG9ydCB0eXBlIE1yZEljb25PdXRlciA9ICdvdXRsaW5lJyB8ICdmdWxsJyB8ICdkYXNoZWQnO1xuXG4vKiogTmFtZW5zcmF1bSwgdW50ZXIgZGVtIGFsbGUgU3ltYm9sZSBwZXIgYHN2Z0ljb249XCJtcmQ6PHN5bWJvbD5bLW91dGxpbmV8LWZ1bGx8LWRhc2hlZF1bLXVwfC1kb3dufC1sZWZ0fC1yaWdodF1cImAgYWJydWZiYXIgc2luZCAqL1xuZXhwb3J0IGNvbnN0IE1SRF9JQ09OX05BTUVTUEFDRSA9ICdtcmQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1yZEljb25TdmdPcHRpb25zIHtcbiAgc3ltYm9sPzogTXJkSWNvblN5bWJvbDtcbiAgb3V0ZXI/OiBNcmRJY29uT3V0ZXI7XG4gIC8qKiBGYXJiZSBmdWVyIFJhaG1lbiB1bmQgU3ltYm9sOyBTdGFuZGFyZCBgY3VycmVudENvbG9yYCAoVGV4dGZhcmJlIGRlciBVbWdlYnVuZykgKi9cbiAgY29sb3I/OiBzdHJpbmc7XG4gIGlubmVyQ29sb3I/OiBzdHJpbmc7XG4gIG91dGVyQ29sb3I/OiBzdHJpbmc7XG4gIGRpcmVjdGlvbj86IEljb25EaXJlY3Rpb24gfCBudW1iZXI7XG4gIHNpemU/OiBudW1iZXIgfCBzdHJpbmc7XG59XG5cbi8qKiBTeW1ib2wgbWl0IG9wdGlvbmFsZXIgZ3JvZXNzZXJlciBWYXJpYW50ZSBmdWVyIGRpZSBEYXJzdGVsbHVuZyBvaG5lIFJhaG1lbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNcmRJY29uU3ltYm9sRGVmaW5pdGlvbiB7XG4gIC8qKiBTeW1ib2wgZnVlciBkZW4gUmFobWVuOyBmZWhsdCBlcywgZ2lidCBlcyBkYXMgU3ltYm9sIG51ciBvaG5lIFJhaG1lbiAqL1xuICBzdmc/OiBzdHJpbmc7XG4gIHB1cj86IHN0cmluZztcbn1cblxuLyoqIFN5bWJvbCBlaW5lciB2b3JkZWZpbmllcnRlbiBTY2hhbHRmbGFlY2hlLCBzaWVoZSBgTXJkRGVmaW5lZEJ1dHRvbi5pY29uYCAqL1xuZXhwb3J0IGludGVyZmFjZSBNcmRJY29uRGVmaW5pdGlvbiB7XG4gIHN5bWJvbDogTXJkSWNvblN5bWJvbDtcbiAgb3V0ZXI/OiBNcmRJY29uT3V0ZXI7XG4gIGRpcmVjdGlvbj86IEljb25EaXJlY3Rpb24gfCBudW1iZXI7XG59XG5cbmNvbnN0IFJBSE1FTjogTXJkSWNvbk91dGVyW10gPSBbJ291dGxpbmUnLCAnZnVsbCcsICdkYXNoZWQnXTtcbmNvbnN0IFJJQ0hUVU5HRU46IEljb25EaXJlY3Rpb25bXSA9IFsncmlnaHQnLCAnZG93bicsICdsZWZ0JywgJ3VwJ107XG5cbi8qKlxuICogVmVyd2FsdGV0IGRpZSBTeW1ib2xlIGltIDY0eDY0LVJhc3RlciwgYXVzIGRlbmVuIGRpZSBJY29uRmFjdG9yeSBJY29ucyBiYXV0OlxuICogZGllIG1pdGdlbGllZmVydGVuIGF1cyBgSWNvbkxpYmAgdW5kIGVpZ2VuZSBkZXMgSG9zdHMgKGBwcm92aWRlTXJkSWNvbnMoe3N5bWJvbHN9KWApLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNcmRJY29uU3ltYm9sUmVnaXN0cnlTZXJ2aWNlIHtcblxuICAvKipcbiAgICogWnVsZXR6dCBlcnpldWd0ZSBJbnN0YW56LCBmw7xyIHN0YXRpc2NoZSBIZWxmZXIgd2llIGBQcmVkZWZpbmVkSWNvbnNTZXJ2aWNlLkdlbmVyYXRlSWNvbmAsXG4gICAqIGRpZSBvaG5lIERlcGVuZGVuY3kgSW5qZWN0aW9uIGF1c2tvbW1lbiBtw7xzc2VuLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFrdHVlbGxlSW5zdGFuejogTXJkSWNvblN5bWJvbFJlZ2lzdHJ5U2VydmljZSB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2FlbmRlcnVuZ2VuOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogTWVsZGV0LCBkYXNzIFN5bWJvbGUgaGluenVnZWtvbW1lbiBvZGVyIGVyc2V0enQgd29yZGVuIHNpbmQsIHouIEIuIG5hY2ggZGVtIExhZGVuIGF1cyBkZXIgRGF0ZW5iYW5rICovXG4gIHB1YmxpYyByZWFkb25seSBhZW5kZXJ1bmdlbiQ6IE9ic2VydmFibGU8dm9pZD4gPSB0aGlzLl9hZW5kZXJ1bmdlbi5hc09ic2VydmFibGUoKTtcblxuICBwcml2YXRlIHJlYWRvbmx5IHN5bWJvbGU6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPihPYmplY3QuZW50cmllcyhJY29uTGliLkljb25NYXApKTtcblxuICAvKiogVmFyaWFudGVuIG9obmUgUmFobWVuLCBzaWVoZSBgSWNvbkxpYi5QdXJNYXBgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgcHVyU3ltYm9sZTogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KE9iamVjdC5lbnRyaWVzKEljb25MaWIuUHVyTWFwKSk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgTXJkSWNvblN5bWJvbFJlZ2lzdHJ5U2VydmljZS5ha3R1ZWxsZUluc3RhbnogPSB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdHJpZXJ0IGVpbiBlaWdlbmVzIFN5bWJvbCAoUGZhZGUgaW0gNjR4NjQtUmFzdGVyLCBtaXQgb2RlciBvaG5lIHVtc2NobGllc3NlbmRlcyBgPHN2Zz5gKS5cbiAgICogRW50aGFlbHQgZXMgd2VkZXIgYGZpbGxgIG5vY2ggYHN0cm9rZWAsIHdpcmQgZXMgZ2VmdWVsbHQgZGFyZ2VzdGVsbHQsIGRhbWl0IGVzIHNpY2ggZWluZmFlcmJlbiBsYWVzc3QuXG4gICAqIEBwYXJhbSBzdmcgU3ltYm9sIGZ1ZXIgZGllIERhcnN0ZWxsdW5nIGltIFJhaG1lbjsgbGVlciwgd2VubiBlcyBkYXMgU3ltYm9sIG51ciBvaG5lIFJhaG1lbiBnaWJ0XG4gICAqIEBwYXJhbSBwdXIgT3B0aW9uYWxlIGdyb2Vzc2VyZSBWYXJpYW50ZSwgZGllIG9obmUgUmFobWVuIHN0YXR0IGBzdmdgIHZlcndlbmRldCB3aXJkXG4gICAqIEBzZWN1cml0eSBEYXMgTWFya3VwIHdpcmQgb2huZSBTYW5pdGl6aW5nIGlucyBET00gdWViZXJub21tZW4gLSBudXIgU3ltYm9sZSBhdXMgZGVtIGVpZ2VuZW4gQ29kZSByZWdpc3RyaWVyZW4uXG4gICAqL1xuICBwdWJsaWMgYWRkU3ltYm9sKG5hbWU6IHN0cmluZywgc3ZnOiBzdHJpbmcgfCBudWxsLCBwdXI/OiBzdHJpbmcpOiB0aGlzIHtcbiAgICB0aGlzLnN5bWJvbFNldHplbihuYW1lLCBzdmcsIHB1cik7XG4gICAgdGhpcy5fYWVuZGVydW5nZW4ubmV4dCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIFJlZ2lzdHJpZXJ0IG1laHJlcmUgU3ltYm9sZSB1bmQgbWVsZGV0IGRpZSDDhG5kZXJ1bmcgbnVyIGVpbm1hbCAqL1xuICBwdWJsaWMgYWRkU3ltYm9scyhzeW1ib2xlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBNcmRJY29uU3ltYm9sRGVmaW5pdGlvbj4pOiB0aGlzIHtcbiAgICBjb25zdCBlaW50cmFlZ2UgPSBPYmplY3QuZW50cmllcyhzeW1ib2xlKTtcbiAgICBlaW50cmFlZ2UuZm9yRWFjaCgoW25hbWUsIGRlZmluaXRpb25dKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGRlZmluaXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuc3ltYm9sU2V0emVuKG5hbWUsIGRlZmluaXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zeW1ib2xTZXR6ZW4obmFtZSwgZGVmaW5pdGlvbi5zdmcsIGRlZmluaXRpb24ucHVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoZWludHJhZWdlLmxlbmd0aCkge1xuICAgICAgdGhpcy5fYWVuZGVydW5nZW4ubmV4dCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBoYXNQdXJTeW1ib2wobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHVyU3ltYm9sZS5oYXMobmFtZSk7XG4gIH1cblxuICAvKiogdHJ1ZSwgd2VubiBlcyBlaW5lIGVpZ2VuZSBWYXJpYW50ZSBmw7xyIGRpZSBEYXJzdGVsbHVuZyBpbSBSYWhtZW4gZ2lidCAqL1xuICBwdWJsaWMgaGFzUmFobWVuU3ltYm9sKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN5bWJvbGUuaGFzKG5hbWUpO1xuICB9XG5cbiAgLyoqIHRydWUgZsO8ciBkaWUgUmFobWVuIGBvdXRsaW5lYCwgYGZ1bGxgIHVuZCBgZGFzaGVkYCwgZGllIGRhcyBTeW1ib2wgdW1zY2hsaWXDn2VuICovXG4gIHB1YmxpYyBpc3RSYWhtZW4obmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIFJBSE1FTi5pbmNsdWRlcyhuYW1lIGFzIE1yZEljb25PdXRlcik7XG4gIH1cblxuICAvKiogdHJ1ZSwgd2VubiBkYXMgU3ltYm9sIG1pdCBkZXIgQmlibGlvdGhlayBhdXNnZWxpZWZlcnQgd2lyZCAoYEljb25MaWJgKTsgZXMga2FubiB0cm90emRlbSDDvGJlcnNjaHJpZWJlbiBzZWluICovXG4gIHB1YmxpYyBpc3RNaXRnZWxpZWZlcnQobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG5hbWUgaW4gSWNvbkxpYi5JY29uTWFwIHx8IG5hbWUgaW4gSWNvbkxpYi5QdXJNYXA7XG4gIH1cblxuICAvKiogdHJ1ZSwgd2VubiBlcyBkYXMgU3ltYm9sIG1pdCBvZGVyIG9obmUgUmFobWVuIGdpYnQgKi9cbiAgcHVibGljIGhhc1N5bWJvbChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2xlLmhhcyhuYW1lKSB8fCB0aGlzLnB1clN5bWJvbGUuaGFzKG5hbWUpO1xuICB9XG5cbiAgcHVibGljIGdldFN5bWJvbE5hbWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KFsuLi50aGlzLnN5bWJvbGUua2V5cygpLCAuLi50aGlzLnB1clN5bWJvbGUua2V5cygpXSkpO1xuICB9XG5cbiAgLyoqIEJhdXQgZGFzIFNWRzsgd2lyZnQgZWluZW4gRmVobGVyIGJlaSB1bmJla2FubnRlbSBTeW1ib2wuICovXG4gIHB1YmxpYyBjcmVhdGVTdmcob3B0aW9uczogTXJkSWNvblN2Z09wdGlvbnMpOiBzdHJpbmcge1xuICAgIGNvbnN0IG91dGVyID0gdGhpcy5zeW1ib2xMZXNlbihvcHRpb25zLm91dGVyLCB0cnVlKTtcbiAgICBjb25zdCBpbm5lciA9IHRoaXMuc3ltYm9sTGVzZW4ob3B0aW9ucy5zeW1ib2wsICEhb3V0ZXIpO1xuICAgIGNvbnN0IG91dGVyQ29sb3IgPSBvcHRpb25zLm91dGVyQ29sb3IgPz8gb3B0aW9ucy5jb2xvciA/PyAnY3VycmVudENvbG9yJztcbiAgICAvLyBBdWYgZGVtIGdlZnVlbGx0ZW4gS3JlaXMgd2FlcmUgZWluIGdsZWljaGZhcmJpZ2VzIFN5bWJvbCB1bnNpY2h0YmFyXG4gICAgY29uc3QgaW5uZXJDb2xvciA9IG9wdGlvbnMuaW5uZXJDb2xvciA/PyAob3B0aW9ucy5vdXRlciA9PT0gJ2Z1bGwnID8gTXJkQ29sb3IuV0VJU1MgOiBvcHRpb25zLmNvbG9yID8/ICdjdXJyZW50Q29sb3InKTtcbiAgICByZXR1cm4gSWNvbkZhY3RvcnlTZXJ2aWNlLmJ1aWxkKHtcbiAgICAgIG91dGVyLFxuICAgICAgaW5uZXIsXG4gICAgICBvdXRlckNvbG9yLFxuICAgICAgaW5uZXJDb2xvcixcbiAgICAgIGlubmVyRGlyZWN0aW9uOiBvcHRpb25zLmRpcmVjdGlvbixcbiAgICAgIHNpemU6IG9wdGlvbnMuc2l6ZSA/PyAndW5zZXQnXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQmF1dCBkYXMgU1ZHIHp1IGVpbmVtIE5hbWVuIHdpZSBgYmVhcmJlaXRlbi1vdXRsaW5lYCBvZGVyIGBwZmVpbC1mdWxsLWRvd25gOyBudWxsIGJlaSB1bmJla2FubnRlbSBTeW1ib2wuXG4gICAqIFJlaWhlbmZvbGdlOiBTeW1ib2wsIG9wdGlvbmFsIFJhaG1lbiwgb3B0aW9uYWwgUmljaHR1bmcuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlU3ZnRnJvbU5hbWUobmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgY29uc3QgdGVpbGUgPSAobmFtZSB8fCAnJykuc3BsaXQoJy0nKTtcbiAgICBsZXQgZGlyZWN0aW9uOiBJY29uRGlyZWN0aW9uO1xuICAgIGxldCBvdXRlcjogTXJkSWNvbk91dGVyO1xuICAgIGlmIChSSUNIVFVOR0VOLmluY2x1ZGVzKHRlaWxlW3RlaWxlLmxlbmd0aCAtIDFdIGFzIEljb25EaXJlY3Rpb24pKSB7XG4gICAgICBkaXJlY3Rpb24gPSB0ZWlsZS5wb3AoKSBhcyBJY29uRGlyZWN0aW9uO1xuICAgIH1cbiAgICBpZiAodGVpbGUubGVuZ3RoID4gMSAmJiBSQUhNRU4uaW5jbHVkZXModGVpbGVbdGVpbGUubGVuZ3RoIC0gMV0gYXMgTXJkSWNvbk91dGVyKSkge1xuICAgICAgb3V0ZXIgPSB0ZWlsZS5wb3AoKSBhcyBNcmRJY29uT3V0ZXI7XG4gICAgfVxuICAgIGNvbnN0IHN5bWJvbCA9IHRlaWxlLmpvaW4oJy0nKTtcbiAgICBpZiAoIXRoaXMuaGFzU3ltYm9sKHN5bWJvbCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jcmVhdGVTdmcoe3N5bWJvbCwgb3V0ZXIsIGRpcmVjdGlvbn0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEltIFJhaG1lbiBkYXMgUmFobWVuLVN5bWJvbCwgb2huZSBSYWhtZW4gZGllIFZhcmlhbnRlIG9obmUgUmFobWVuOyBmZWhsdCBkaWUgcGFzc2VuZGUsIHdpcmQgZGllIGpld2VpbHMgYW5kZXJlIGdlbm9tbWVuXG4gICAqIChlaW4gcmVpbmVzIFB1ci1TeW1ib2wgaW0gUmFobWVuIGthbm4gZGVuIEtyZWlzIMO8YmVyZGVja2VuKS4gdW5kZWZpbmVkIGJlaSB1bmJla2FubnRlbSBTeW1ib2wuXG4gICAqL1xuICBwdWJsaWMgZmluZGVTeW1ib2wobmFtZTogc3RyaW5nLCBtaXRSYWhtZW46IGJvb2xlYW4pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiBtaXRSYWhtZW5cbiAgICAgID8gdGhpcy5zeW1ib2xlLmdldChuYW1lKSA/PyB0aGlzLnB1clN5bWJvbGUuZ2V0KG5hbWUpXG4gICAgICA6IHRoaXMucHVyU3ltYm9sZS5nZXQobmFtZSkgPz8gdGhpcy5zeW1ib2xlLmdldChuYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgc3ltYm9sU2V0emVuKG5hbWU6IHN0cmluZywgc3ZnOiBzdHJpbmcgfCBudWxsLCBwdXI/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXN2ZyAmJiAhcHVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYERhcyBJY29uLVN5bWJvbCBcIiR7bmFtZX1cIiBicmF1Y2h0IHN2ZyBvZGVyIHB1ci5gKTtcbiAgICB9XG4gICAgaWYgKHN2Zykge1xuICAgICAgdGhpcy5zeW1ib2xlLnNldChuYW1lLCBNcmRJY29uU3ltYm9sUmVnaXN0cnlTZXJ2aWNlLm5vcm1hbGlzaWVyZW4oc3ZnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3ltYm9sZS5kZWxldGUobmFtZSk7XG4gICAgfVxuICAgIGlmIChwdXIpIHtcbiAgICAgIHRoaXMucHVyU3ltYm9sZS5zZXQobmFtZSwgTXJkSWNvblN5bWJvbFJlZ2lzdHJ5U2VydmljZS5ub3JtYWxpc2llcmVuKHB1cikpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnB1clN5bWJvbGUuZGVsZXRlKG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBXaWUgYGZpbmRlU3ltYm9sYCwgd2lyZnQgYWJlciBlaW5lbiBGZWhsZXIgYmVpIHVuYmVrYW5udGVtIFN5bWJvbCAqL1xuICBwcml2YXRlIHN5bWJvbExlc2VuKG5hbWU6IHN0cmluZywgbWl0UmFobWVuOiBib29sZWFuKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHN2ZyA9IHRoaXMuZmluZGVTeW1ib2wobmFtZSwgbWl0UmFobWVuKTtcbiAgICBpZiAoc3ZnID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5iZWthbm50ZXMgSWNvbi1TeW1ib2wgXCIke25hbWV9XCIuIFJlZ2lzdHJpZXJ0ZSBTeW1ib2xlOiAke3RoaXMuZ2V0U3ltYm9sTmFtZXMoKS5qb2luKCcsICcpfWApO1xuICAgIH1cbiAgICByZXR1cm4gc3ZnO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgbm9ybWFsaXNpZXJlbihzdmc6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgaW5oYWx0ID0gc3ZnLnJlcGxhY2UoLzxzdmdbXj5dKj4vLCAnJykucmVwbGFjZSgvPFxcL3N2Zz4vLCAnJykudHJpbSgpO1xuICAgIGlmICgvXFxzKGZpbGx8c3Ryb2tlKT1cIi8udGVzdChpbmhhbHQpKSB7XG4gICAgICByZXR1cm4gaW5oYWx0O1xuICAgIH1cbiAgICByZXR1cm4gYDxnIGZpbGw9XCIjMDAwMDAwXCI+JHtpbmhhbHR9PC9nPmA7XG4gIH1cbn1cbiJdfQ==