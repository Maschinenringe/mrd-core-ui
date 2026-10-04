import { Injectable } from '@angular/core';
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
    symbole = new Map(Object.entries(IconLib.IconMap));
    /** Varianten ohne Rahmen, siehe `IconLib.PurMap` */
    purSymbole = new Map(Object.entries(IconLib.PurMap));
    /**
     * Registriert ein eigenes Symbol (Pfade im 64x64-Raster, mit oder ohne umschliessendes `<svg>`).
     * Enthaelt es weder `fill` noch `stroke`, wird es gefuellt dargestellt, damit es sich einfaerben laesst.
     * @param svg Symbol fuer die Darstellung im Rahmen; leer, wenn es das Symbol nur ohne Rahmen gibt
     * @param pur Optionale groessere Variante, die ohne Rahmen statt `svg` verwendet wird
     * @security Das Markup wird ohne Sanitizing ins DOM uebernommen - nur Symbole aus dem eigenen Code registrieren.
     */
    addSymbol(name, svg, pur) {
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
        return this;
    }
    addSymbols(symbole) {
        Object.entries(symbole).forEach(([name, definition]) => {
            if (typeof definition === 'string') {
                this.addSymbol(name, definition);
            }
            else {
                this.addSymbol(name, definition.svg, definition.pur);
            }
        });
        return this;
    }
    hasPurSymbol(name) {
        return this.purSymbole.has(name);
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
     * (ein reines Pur-Symbol im Rahmen kann den Kreis ueberdecken).
     */
    symbolLesen(name, mitRahmen) {
        if (!name) {
            return undefined;
        }
        const svg = mitRahmen
            ? this.symbole.get(name) ?? this.purSymbole.get(name)
            : this.purSymbole.get(name) ?? this.symbole.get(name);
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
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWljb24tc3ltYm9sLXJlZ2lzdHJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL2NvbW1vbi9zZXJ2aWNlL21yZC1pY29uLXN5bWJvbC1yZWdpc3RyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFpQixrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNFLE9BQU8sRUFBRSxPQUFPLEVBQVksTUFBTSxrQkFBa0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBTzlDLG9JQUFvSTtBQUNwSSxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUM7QUEyQnhDLE1BQU0sTUFBTSxHQUFtQixDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDN0QsTUFBTSxVQUFVLEdBQW9CLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFcEU7OztHQUdHO0FBSUgsTUFBTSxPQUFPLDRCQUE0QjtJQUV0QixPQUFPLEdBQXdCLElBQUksR0FBRyxDQUFpQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRXpHLG9EQUFvRDtJQUNuQyxVQUFVLEdBQXdCLElBQUksR0FBRyxDQUFpQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRTNHOzs7Ozs7T0FNRztJQUNJLFNBQVMsQ0FBQyxJQUFZLEVBQUUsR0FBa0IsRUFBRSxHQUFZO1FBQzdELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDaEIsTUFBTSxJQUFJ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QyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsSUFBSSw0QkFBNEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakg7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFTyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQVc7UUFDdEMsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzRSxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNwQyxPQUFPLE1BQU0sQ0FBQztTQUNmO1FBQ0QsT0FBTyxxQkFBcUIsTUFBTSxNQUFNLENBQUM7SUFDM0MsQ0FBQzt5R0FwSFUsNEJBQTRCOytGQUE1Qiw0QkFBNEIsV0FBNUIsNEJBQTRCLG1CQUYzQixNQUFNOzt1RkFFUCw0QkFBNEI7Y0FIeEMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkRpcmVjdGlvbiwgSWNvbkZhY3RvcnlTZXJ2aWNlIH0gZnJvbSAnLi9pY29uLWZhY3Rvcnkuc2VydmljZSc7XG5pbXBvcnQgeyBJY29uTGliLCBJY29uTmFtZSB9IGZyb20gJy4uL3V0aWwvaWNvbi1saWInO1xuaW1wb3J0IHsgTXJkQ29sb3IgfSBmcm9tICcuLi9lbnVtL2NvbG9yLmVudW0nO1xuXG4vKiogTWl0Z2VsaWVmZXJ0ZSBTeW1ib2xuYW1lbiBtaXQgQXV0b3ZlcnZvbGxzdGFlbmRpZ3VuZzsgZWlnZW5lIFN5bWJvbGUgZGVzIEhvc3RzIHNpbmQgYWxzIGJlbGllYmlnZXIgU3RyaW5nIGVybGF1YnQuICovXG5leHBvcnQgdHlwZSBNcmRJY29uU3ltYm9sID0gSWNvbk5hbWUgfCBgJHtJY29uTmFtZX1gIHwgKHN0cmluZyAmIHt9KTtcblxuZXhwb3J0IHR5cGUgTXJkSWNvbk91dGVyID0gJ291dGxpbmUnIHwgJ2Z1bGwnIHwgJ2Rhc2hlZCc7XG5cbi8qKiBOYW1lbnNyYXVtLCB1bnRlciBkZW0gYWxsZSBTeW1ib2xlIHBlciBgc3ZnSWNvbj1cIm1yZDo8c3ltYm9sPlstb3V0bGluZXwtZnVsbHwtZGFzaGVkXVstdXB8LWRvd258LWxlZnR8LXJpZ2h0XVwiYCBhYnJ1ZmJhciBzaW5kICovXG5leHBvcnQgY29uc3QgTVJEX0lDT05fTkFNRVNQQUNFID0gJ21yZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXJkSWNvblN2Z09wdGlvbnMge1xuICBzeW1ib2w/OiBNcmRJY29uU3ltYm9sO1xuICBvdXRlcj86IE1yZEljb25PdXRlcjtcbiAgLyoqIEZhcmJlIGZ1ZXIgUmFobWVuIHVuZCBTeW1ib2w7IFN0YW5kYXJkIGBjdXJyZW50Q29sb3JgIChUZXh0ZmFyYmUgZGVyIFVtZ2VidW5nKSAqL1xuICBjb2xvcj86IHN0cmluZztcbiAgaW5uZXJDb2xvcj86IHN0cmluZztcbiAgb3V0ZXJDb2xvcj86IHN0cmluZztcbiAgZGlyZWN0aW9uPzogSWNvbkRpcmVjdGlvbiB8IG51bWJlcjtcbiAgc2l6ZT86IG51bWJlciB8IHN0cmluZztcbn1cblxuLyoqIFN5bWJvbCBtaXQgb3B0aW9uYWxlciBncm9lc3NlcmVyIFZhcmlhbnRlIGZ1ZXIgZGllIERhcnN0ZWxsdW5nIG9obmUgUmFobWVuICovXG5leHBvcnQgaW50ZXJmYWNlIE1yZEljb25TeW1ib2xEZWZpbml0aW9uIHtcbiAgLyoqIFN5bWJvbCBmdWVyIGRlbiBSYWhtZW47IGZlaGx0IGVzLCBnaWJ0IGVzIGRhcyBTeW1ib2wgbnVyIG9obmUgUmFobWVuICovXG4gIHN2Zz86IHN0cmluZztcbiAgcHVyPzogc3RyaW5nO1xufVxuXG4vKiogU3ltYm9sIGVpbmVyIHZvcmRlZmluaWVydGVuIFNjaGFsdGZsYWVjaGUsIHNpZWhlIGBNcmREZWZpbmVkQnV0dG9uLmljb25gICovXG5leHBvcnQgaW50ZXJmYWNlIE1yZEljb25EZWZpbml0aW9uIHtcbiAgc3ltYm9sOiBNcmRJY29uU3ltYm9sO1xuICBvdXRlcj86IE1yZEljb25PdXRlcjtcbiAgZGlyZWN0aW9uPzogSWNvbkRpcmVjdGlvbiB8IG51bWJlcjtcbn1cblxuY29uc3QgUkFITUVOOiBNcmRJY29uT3V0ZXJbXSA9IFsnb3V0bGluZScsICdmdWxsJywgJ2Rhc2hlZCddO1xuY29uc3QgUklDSFRVTkdFTjogSWNvbkRpcmVjdGlvbltdID0gWydyaWdodCcsICdkb3duJywgJ2xlZnQnLCAndXAnXTtcblxuLyoqXG4gKiBWZXJ3YWx0ZXQgZGllIFN5bWJvbGUgaW0gNjR4NjQtUmFzdGVyLCBhdXMgZGVuZW4gZGllIEljb25GYWN0b3J5IEljb25zIGJhdXQ6XG4gKiBkaWUgbWl0Z2VsaWVmZXJ0ZW4gYXVzIGBJY29uTGliYCB1bmQgZWlnZW5lIGRlcyBIb3N0cyAoYHByb3ZpZGVNcmRJY29ucyh7c3ltYm9sc30pYCkuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1yZEljb25TeW1ib2xSZWdpc3RyeVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgc3ltYm9sZTogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KE9iamVjdC5lbnRyaWVzKEljb25MaWIuSWNvbk1hcCkpO1xuXG4gIC8qKiBWYXJpYW50ZW4gb2huZSBSYWhtZW4sIHNpZWhlIGBJY29uTGliLlB1ck1hcGAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBwdXJTeW1ib2xlOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oT2JqZWN0LmVudHJpZXMoSWNvbkxpYi5QdXJNYXApKTtcblxuICAvKipcbiAgICogUmVnaXN0cmllcnQgZWluIGVpZ2VuZXMgU3ltYm9sIChQZmFkZSBpbSA2NHg2NC1SYXN0ZXIsIG1pdCBvZGVyIG9obmUgdW1zY2hsaWVzc2VuZGVzIGA8c3ZnPmApLlxuICAgKiBFbnRoYWVsdCBlcyB3ZWRlciBgZmlsbGAgbm9jaCBgc3Ryb2tlYCwgd2lyZCBlcyBnZWZ1ZWxsdCBkYXJnZXN0ZWxsdCwgZGFtaXQgZXMgc2ljaCBlaW5mYWVyYmVuIGxhZXNzdC5cbiAgICogQHBhcmFtIHN2ZyBTeW1ib2wgZnVlciBkaWUgRGFyc3RlbGx1bmcgaW0gUmFobWVuOyBsZWVyLCB3ZW5uIGVzIGRhcyBTeW1ib2wgbnVyIG9obmUgUmFobWVuIGdpYnRcbiAgICogQHBhcmFtIHB1ciBPcHRpb25hbGUgZ3JvZXNzZXJlIFZhcmlhbnRlLCBkaWUgb2huZSBSYWhtZW4gc3RhdHQgYHN2Z2AgdmVyd2VuZGV0IHdpcmRcbiAgICogQHNlY3VyaXR5IERhcyBNYXJrdXAgd2lyZCBvaG5lIFNhbml0aXppbmcgaW5zIERPTSB1ZWJlcm5vbW1lbiAtIG51ciBTeW1ib2xlIGF1cyBkZW0gZWlnZW5lbiBDb2RlIHJlZ2lzdHJpZXJlbi5cbiAgICovXG4gIHB1YmxpYyBhZGRTeW1ib2wobmFtZTogc3RyaW5nLCBzdmc6IHN0cmluZyB8IG51bGwsIHB1cj86IHN0cmluZyk6IHRoaXMge1xuICAgIGlmICghc3ZnICYmICFwdXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRGFzIEljb24tU3ltYm9sIFwiJHtuYW1lfVwiIGJyYXVjaHQgc3ZnIG9kZXIgcHVyLmApO1xuICAgIH1cbiAgICBpZiAoc3ZnKSB7XG4gICAgICB0aGlzLnN5bWJvbGUuc2V0KG5hbWUsIE1yZEljb25TeW1ib2xSZWdpc3RyeVNlcnZpY2Uubm9ybWFsaXNpZXJlbihzdmcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zeW1ib2xlLmRlbGV0ZShuYW1lKTtcbiAgICB9XG4gICAgaWYgKHB1cikge1xuICAgICAgdGhpcy5wdXJTeW1ib2xlLnNldChuYW1lLCBNcmRJY29uU3ltYm9sUmVnaXN0cnlTZXJ2aWNlLm5vcm1hbGlzaWVyZW4ocHVyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHVyU3ltYm9sZS5kZWxldGUobmFtZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGFkZFN5bWJvbHMoc3ltYm9sZTogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgTXJkSWNvblN5bWJvbERlZmluaXRpb24+KTogdGhpcyB7XG4gICAgT2JqZWN0LmVudHJpZXMoc3ltYm9sZSkuZm9yRWFjaCgoW25hbWUsIGRlZmluaXRpb25dKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGRlZmluaXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuYWRkU3ltYm9sKG5hbWUsIGRlZmluaXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRTeW1ib2wobmFtZSwgZGVmaW5pdGlvbi5zdmcsIGRlZmluaXRpb24ucHVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBoYXNQdXJTeW1ib2wobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHVyU3ltYm9sZS5oYXMobmFtZSk7XG4gIH1cblxuICAvKiogdHJ1ZSwgd2VubiBlcyBkYXMgU3ltYm9sIG1pdCBvZGVyIG9obmUgUmFobWVuIGdpYnQgKi9cbiAgcHVibGljIGhhc1N5bWJvbChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2xlLmhhcyhuYW1lKSB8fCB0aGlzLnB1clN5bWJvbGUuaGFzKG5hbWUpO1xuICB9XG5cbiAgcHVibGljIGdldFN5bWJvbE5hbWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KFsuLi50aGlzLnN5bWJvbGUua2V5cygpLCAuLi50aGlzLnB1clN5bWJvbGUua2V5cygpXSkpO1xuICB9XG5cbiAgLyoqIEJhdXQgZGFzIFNWRzsgd2lyZnQgZWluZW4gRmVobGVyIGJlaSB1bmJla2FubnRlbSBTeW1ib2wuICovXG4gIHB1YmxpYyBjcmVhdGVTdmcob3B0aW9uczogTXJkSWNvblN2Z09wdGlvbnMpOiBzdHJpbmcge1xuICAgIGNvbnN0IG91dGVyID0gdGhpcy5zeW1ib2xMZXNlbihvcHRpb25zLm91dGVyLCB0cnVlKTtcbiAgICBjb25zdCBpbm5lciA9IHRoaXMuc3ltYm9sTGVzZW4ob3B0aW9ucy5zeW1ib2wsICEhb3V0ZXIpO1xuICAgIGNvbnN0IG91dGVyQ29sb3IgPSBvcHRpb25zLm91dGVyQ29sb3IgPz8gb3B0aW9ucy5jb2xvciA/PyAnY3VycmVudENvbG9yJztcbiAgICAvLyBBdWYgZGVtIGdlZnVlbGx0ZW4gS3JlaXMgd2FlcmUgZWluIGdsZWljaGZhcmJpZ2VzIFN5bWJvbCB1bnNpY2h0YmFyXG4gICAgY29uc3QgaW5uZXJDb2xvciA9IG9wdGlvbnMuaW5uZXJDb2xvciA/PyAob3B0aW9ucy5vdXRlciA9PT0gJ2Z1bGwnID8gTXJkQ29sb3IuV0VJU1MgOiBvcHRpb25zLmNvbG9yID8/ICdjdXJyZW50Q29sb3InKTtcbiAgICByZXR1cm4gSWNvbkZhY3RvcnlTZXJ2aWNlLmJ1aWxkKHtcbiAgICAgIG91dGVyLFxuICAgICAgaW5uZXIsXG4gICAgICBvdXRlckNvbG9yLFxuICAgICAgaW5uZXJDb2xvcixcbiAgICAgIGlubmVyRGlyZWN0aW9uOiBvcHRpb25zLmRpcmVjdGlvbixcbiAgICAgIHNpemU6IG9wdGlvbnMuc2l6ZSA/PyAndW5zZXQnXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQmF1dCBkYXMgU1ZHIHp1IGVpbmVtIE5hbWVuIHdpZSBgYmVhcmJlaXRlbi1vdXRsaW5lYCBvZGVyIGBwZmVpbC1mdWxsLWRvd25gOyBudWxsIGJlaSB1bmJla2FubnRlbSBTeW1ib2wuXG4gICAqIFJlaWhlbmZvbGdlOiBTeW1ib2wsIG9wdGlvbmFsIFJhaG1lbiwgb3B0aW9uYWwgUmljaHR1bmcuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlU3ZnRnJvbU5hbWUobmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgY29uc3QgdGVpbGUgPSAobmFtZSB8fCAnJykuc3BsaXQoJy0nKTtcbiAgICBsZXQgZGlyZWN0aW9uOiBJY29uRGlyZWN0aW9uO1xuICAgIGxldCBvdXRlcjogTXJkSWNvbk91dGVyO1xuICAgIGlmIChSSUNIVFVOR0VOLmluY2x1ZGVzKHRlaWxlW3RlaWxlLmxlbmd0aCAtIDFdIGFzIEljb25EaXJlY3Rpb24pKSB7XG4gICAgICBkaXJlY3Rpb24gPSB0ZWlsZS5wb3AoKSBhcyBJY29uRGlyZWN0aW9uO1xuICAgIH1cbiAgICBpZiAodGVpbGUubGVuZ3RoID4gMSAmJiBSQUhNRU4uaW5jbHVkZXModGVpbGVbdGVpbGUubGVuZ3RoIC0gMV0gYXMgTXJkSWNvbk91dGVyKSkge1xuICAgICAgb3V0ZXIgPSB0ZWlsZS5wb3AoKSBhcyBNcmRJY29uT3V0ZXI7XG4gICAgfVxuICAgIGNvbnN0IHN5bWJvbCA9IHRlaWxlLmpvaW4oJy0nKTtcbiAgICBpZiAoIXRoaXMuaGFzU3ltYm9sKHN5bWJvbCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jcmVhdGVTdmcoe3N5bWJvbCwgb3V0ZXIsIGRpcmVjdGlvbn0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEltIFJhaG1lbiBkYXMgUmFobWVuLVN5bWJvbCwgb2huZSBSYWhtZW4gZGllIFZhcmlhbnRlIG9obmUgUmFobWVuOyBmZWhsdCBkaWUgcGFzc2VuZGUsIHdpcmQgZGllIGpld2VpbHMgYW5kZXJlIGdlbm9tbWVuXG4gICAqIChlaW4gcmVpbmVzIFB1ci1TeW1ib2wgaW0gUmFobWVuIGthbm4gZGVuIEtyZWlzIHVlYmVyZGVja2VuKS5cbiAgICovXG4gIHByaXZhdGUgc3ltYm9sTGVzZW4obmFtZTogc3RyaW5nLCBtaXRSYWhtZW46IGJvb2xlYW4pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGlmICghbmFtZSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3Qgc3ZnID0gbWl0UmFobWVuXG4gICAgICA/IHRoaXMuc3ltYm9sZS5nZXQobmFtZSkgPz8gdGhpcy5wdXJTeW1ib2xlLmdldChuYW1lKVxuICAgICAgOiB0aGlzLnB1clN5bWJvbGUuZ2V0KG5hbWUpID8/IHRoaXMuc3ltYm9sZS5nZXQobmFtZSk7XG4gICAgaWYgKHN2ZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYmVrYW5udGVzIEljb24tU3ltYm9sIFwiJHtuYW1lfVwiLiBSZWdpc3RyaWVydGUgU3ltYm9sZTogJHt0aGlzLmdldFN5bWJvbE5hbWVzKCkuam9pbignLCAnKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHN2ZztcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIG5vcm1hbGlzaWVyZW4oc3ZnOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGluaGFsdCA9IHN2Zy5yZXBsYWNlKC88c3ZnW14+XSo+LywgJycpLnJlcGxhY2UoLzxcXC9zdmc+LywgJycpLnRyaW0oKTtcbiAgICBpZiAoL1xccyhmaWxsfHN0cm9rZSk9XCIvLnRlc3QoaW5oYWx0KSkge1xuICAgICAgcmV0dXJuIGluaGFsdDtcbiAgICB9XG4gICAgcmV0dXJuIGA8ZyBmaWxsPVwiIzAwMDAwMFwiPiR7aW5oYWx0fTwvZz5gO1xuICB9XG59XG4iXX0=