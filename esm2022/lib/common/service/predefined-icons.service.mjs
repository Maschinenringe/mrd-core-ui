import { Injectable } from '@angular/core';
import { IconFactoryService } from './icon-factory.service';
import { IconLib } from '../util/icon-lib';
import { MrdIconSymbolRegistryService } from './mrd-icon-symbol-registry.service';
import * as i0 from "@angular/core";
/**
 * Erzeugt Icon-Kombinationen als SVG-String mit festen Farben, z. B. fuer `iconGroup`/`iconStateMap` des mrd-s-button,
 * wenn sich Icon oder Farbe je Zustand unterscheiden sollen. Sonst ist `<mrd-icon icon="..." outline>` einfacher,
 * weil es die Textfarbe uebernimmt.
 * Die Symbole kommen aus der `MrdIconSymbolRegistryService` (inkl. der aus der Datenbank geladenen);
 * der erzeugte String ändert sich aber nicht mehr, wenn später neue Symbole geladen werden.
 */
export class PredefinedIconsService {
    static GenerateIcon(outer, inner, color, size = 24, innerDirection = 'right') {
        return IconFactoryService.build({
            outer: outer != null ? PredefinedIconsService.symbol(outer, true) : undefined,
            // Ohne Rahmen die groessere Variante, im Rahmen das Rahmen-Symbol; fehlt eine davon, die andere
            inner: inner != null ? PredefinedIconsService.symbol(inner, outer != null) : undefined,
            color: typeof color === 'string' ? color : undefined,
            outerColor: typeof color === 'object' ? color.outer : undefined,
            innerColor: typeof color === 'object' ? color.inner : undefined,
            size,
            innerDirection
        });
    }
    /** Aus der Symbol-Registry; ohne Registry-Instanz (vor dem ersten Inject) direkt aus `IconLib` */
    static symbol(name, mitRahmen) {
        const registry = MrdIconSymbolRegistryService.aktuelleInstanz;
        if (registry) {
            return registry.findeSymbol(name, mitRahmen);
        }
        return mitRahmen ? IconLib.IconMap[name] ?? IconLib.PurMap[name] : IconLib.PurMap[name] ?? IconLib.IconMap[name];
    }
    /** @nocollapse */ static ɵfac = function PredefinedIconsService_Factory(t) { return new (t || PredefinedIconsService)(); };
    /** @nocollapse */ static ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: PredefinedIconsService, factory: PredefinedIconsService.ɵfac, providedIn: 'root' });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PredefinedIconsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZGVmaW5lZC1pY29ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9jb21tb24vc2VydmljZS9wcmVkZWZpbmVkLWljb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWlCLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0UsT0FBTyxFQUFFLE9BQU8sRUFBWSxNQUFNLGtCQUFrQixDQUFDO0FBRXJELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztBQUVsRjs7Ozs7O0dBTUc7QUFJSCxNQUFNLE9BQU8sc0JBQXNCO0lBRTFCLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBeUIsRUFBRSxLQUF5QixFQUFFLEtBQWtELEVBQUUsT0FBZSxFQUFFLEVBQUUsaUJBQXlDLE9BQU87UUFDdE0sT0FBTyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7WUFDOUIsS0FBSyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDN0UsZ0dBQWdHO1lBQ2hHLEtBQUssRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUN0RixLQUFLLEVBQUUsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDcEQsVUFBVSxFQUFFLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUztZQUMvRCxVQUFVLEVBQUUsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQy9ELElBQUk7WUFDSixjQUFjO1NBQ2YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGtHQUFrRztJQUMxRixNQUFNLENBQUMsTUFBTSxDQUFDLElBQWMsRUFBRSxTQUFrQjtRQUN0RCxNQUFNLFFBQVEsR0FBRyw0QkFBNEIsQ0FBQyxlQUFlLENBQUM7UUFDOUQsSUFBSSxRQUFRLEVBQUU7WUFDWixPQUFPLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25ILENBQUM7bUdBdEJVLHNCQUFzQjsrRkFBdEIsc0JBQXNCLFdBQXRCLHNCQUFzQixtQkFGckIsTUFBTTs7dUZBRVAsc0JBQXNCO2NBSGxDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25EaXJlY3Rpb24sIEljb25GYWN0b3J5U2VydmljZSB9IGZyb20gJy4vaWNvbi1mYWN0b3J5LnNlcnZpY2UnO1xuaW1wb3J0IHsgSWNvbkxpYiwgSWNvbk5hbWUgfSBmcm9tICcuLi91dGlsL2ljb24tbGliJztcbmltcG9ydCB7IE1yZENvbG9yIH0gZnJvbSAnLi4vZW51bS9jb2xvci5lbnVtJztcbmltcG9ydCB7IE1yZEljb25TeW1ib2xSZWdpc3RyeVNlcnZpY2UgfSBmcm9tICcuL21yZC1pY29uLXN5bWJvbC1yZWdpc3RyeS5zZXJ2aWNlJztcblxuLyoqXG4gKiBFcnpldWd0IEljb24tS29tYmluYXRpb25lbiBhbHMgU1ZHLVN0cmluZyBtaXQgZmVzdGVuIEZhcmJlbiwgei4gQi4gZnVlciBgaWNvbkdyb3VwYC9gaWNvblN0YXRlTWFwYCBkZXMgbXJkLXMtYnV0dG9uLFxuICogd2VubiBzaWNoIEljb24gb2RlciBGYXJiZSBqZSBadXN0YW5kIHVudGVyc2NoZWlkZW4gc29sbGVuLiBTb25zdCBpc3QgYDxtcmQtaWNvbiBpY29uPVwiLi4uXCIgb3V0bGluZT5gIGVpbmZhY2hlcixcbiAqIHdlaWwgZXMgZGllIFRleHRmYXJiZSB1ZWJlcm5pbW10LlxuICogRGllIFN5bWJvbGUga29tbWVuIGF1cyBkZXIgYE1yZEljb25TeW1ib2xSZWdpc3RyeVNlcnZpY2VgIChpbmtsLiBkZXIgYXVzIGRlciBEYXRlbmJhbmsgZ2VsYWRlbmVuKTtcbiAqIGRlciBlcnpldWd0ZSBTdHJpbmcgw6RuZGVydCBzaWNoIGFiZXIgbmljaHQgbWVociwgd2VubiBzcMOkdGVyIG5ldWUgU3ltYm9sZSBnZWxhZGVuIHdlcmRlbi5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUHJlZGVmaW5lZEljb25zU2VydmljZSB7XG5cbiAgcHVibGljIHN0YXRpYyBHZW5lcmF0ZUljb24ob3V0ZXI6IEljb25OYW1lfHVuZGVmaW5lZCwgaW5uZXI6IEljb25OYW1lfHVuZGVmaW5lZCwgY29sb3I6IE1yZENvbG9yfHtpbm5lcjogTXJkQ29sb3IsIG91dGVyOiBNcmRDb2xvcn0sIHNpemU6IG51bWJlciA9IDI0LCBpbm5lckRpcmVjdGlvbjogbnVtYmVyIHwgSWNvbkRpcmVjdGlvbiA9ICdyaWdodCcpOiBzdHJpbmcge1xuICAgIHJldHVybiBJY29uRmFjdG9yeVNlcnZpY2UuYnVpbGQoe1xuICAgICAgb3V0ZXI6IG91dGVyICE9IG51bGwgPyBQcmVkZWZpbmVkSWNvbnNTZXJ2aWNlLnN5bWJvbChvdXRlciwgdHJ1ZSkgOiB1bmRlZmluZWQsXG4gICAgICAvLyBPaG5lIFJhaG1lbiBkaWUgZ3JvZXNzZXJlIFZhcmlhbnRlLCBpbSBSYWhtZW4gZGFzIFJhaG1lbi1TeW1ib2w7IGZlaGx0IGVpbmUgZGF2b24sIGRpZSBhbmRlcmVcbiAgICAgIGlubmVyOiBpbm5lciAhPSBudWxsID8gUHJlZGVmaW5lZEljb25zU2VydmljZS5zeW1ib2woaW5uZXIsIG91dGVyICE9IG51bGwpIDogdW5kZWZpbmVkLFxuICAgICAgY29sb3I6IHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgPyBjb2xvciA6IHVuZGVmaW5lZCxcbiAgICAgIG91dGVyQ29sb3I6IHR5cGVvZiBjb2xvciA9PT0gJ29iamVjdCcgPyBjb2xvci5vdXRlciA6IHVuZGVmaW5lZCxcbiAgICAgIGlubmVyQ29sb3I6IHR5cGVvZiBjb2xvciA9PT0gJ29iamVjdCcgPyBjb2xvci5pbm5lciA6IHVuZGVmaW5lZCxcbiAgICAgIHNpemUsXG4gICAgICBpbm5lckRpcmVjdGlvblxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEF1cyBkZXIgU3ltYm9sLVJlZ2lzdHJ5OyBvaG5lIFJlZ2lzdHJ5LUluc3RhbnogKHZvciBkZW0gZXJzdGVuIEluamVjdCkgZGlyZWt0IGF1cyBgSWNvbkxpYmAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgc3ltYm9sKG5hbWU6IEljb25OYW1lLCBtaXRSYWhtZW46IGJvb2xlYW4pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHJlZ2lzdHJ5ID0gTXJkSWNvblN5bWJvbFJlZ2lzdHJ5U2VydmljZS5ha3R1ZWxsZUluc3Rhbno7XG4gICAgaWYgKHJlZ2lzdHJ5KSB7XG4gICAgICByZXR1cm4gcmVnaXN0cnkuZmluZGVTeW1ib2wobmFtZSwgbWl0UmFobWVuKTtcbiAgICB9XG4gICAgcmV0dXJuIG1pdFJhaG1lbiA/IEljb25MaWIuSWNvbk1hcFtuYW1lXSA/PyBJY29uTGliLlB1ck1hcFtuYW1lXSA6IEljb25MaWIuUHVyTWFwW25hbWVdID8/IEljb25MaWIuSWNvbk1hcFtuYW1lXTtcbiAgfVxufVxuIl19