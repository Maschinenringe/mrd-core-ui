import { Injectable } from '@angular/core';
import { IconFactoryService } from './icon-factory.service';
import { IconLib } from '../util/icon-lib';
import * as i0 from "@angular/core";
/**
 * Erzeugt Icon-Kombinationen als SVG-String mit festen Farben, z. B. fuer `iconGroup`/`iconStateMap` des mrd-s-button,
 * wenn sich Icon oder Farbe je Zustand unterscheiden sollen. Sonst ist `<mrd-icon icon="..." outline>` einfacher,
 * weil es die Textfarbe uebernimmt.
 */
export class PredefinedIconsService {
    static GenerateIcon(outer, inner, color, size = 24, innerDirection = 'right') {
        return IconFactoryService.build({
            outer: outer != null ? IconLib.IconMap[outer] : undefined,
            // Ohne Rahmen die groessere Variante, im Rahmen das Rahmen-Symbol; fehlt eine davon, die andere
            inner: inner != null
                ? (outer == null ? IconLib.PurMap[inner] ?? IconLib.IconMap[inner] : IconLib.IconMap[inner] ?? IconLib.PurMap[inner])
                : undefined,
            color: typeof color === 'string' ? color : undefined,
            outerColor: typeof color === 'object' ? color.outer : undefined,
            innerColor: typeof color === 'object' ? color.inner : undefined,
            size,
            innerDirection
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZGVmaW5lZC1pY29ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9jb21tb24vc2VydmljZS9wcmVkZWZpbmVkLWljb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWlCLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0UsT0FBTyxFQUFFLE9BQU8sRUFBWSxNQUFNLGtCQUFrQixDQUFDOztBQUdyRDs7OztHQUlHO0FBSUgsTUFBTSxPQUFPLHNCQUFzQjtJQUUxQixNQUFNLENBQUMsWUFBWSxDQUFDLEtBQXlCLEVBQUUsS0FBeUIsRUFBRSxLQUFrRCxFQUFFLE9BQWUsRUFBRSxFQUFFLGlCQUF5QyxPQUFPO1FBQ3RNLE9BQU8sa0JBQWtCLENBQUMsS0FBSyxDQUFDO1lBQzlCLEtBQUssRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQ3pELGdHQUFnRztZQUNoRyxLQUFLLEVBQUUsS0FBSyxJQUFJLElBQUk7Z0JBQ2xCLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNySCxDQUFDLENBQUMsU0FBUztZQUNiLEtBQUssRUFBRSxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNwRCxVQUFVLEVBQUUsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQy9ELFVBQVUsRUFBRSxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDL0QsSUFBSTtZQUNKLGNBQWM7U0FDZixDQUFDLENBQUM7SUFDTCxDQUFDO21HQWZVLHNCQUFzQjsrRkFBdEIsc0JBQXNCLFdBQXRCLHNCQUFzQixtQkFGckIsTUFBTTs7dUZBRVAsc0JBQXNCO2NBSGxDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25EaXJlY3Rpb24sIEljb25GYWN0b3J5U2VydmljZSB9IGZyb20gJy4vaWNvbi1mYWN0b3J5LnNlcnZpY2UnO1xuaW1wb3J0IHsgSWNvbkxpYiwgSWNvbk5hbWUgfSBmcm9tICcuLi91dGlsL2ljb24tbGliJztcbmltcG9ydCB7IE1yZENvbG9yIH0gZnJvbSAnLi4vZW51bS9jb2xvci5lbnVtJztcblxuLyoqXG4gKiBFcnpldWd0IEljb24tS29tYmluYXRpb25lbiBhbHMgU1ZHLVN0cmluZyBtaXQgZmVzdGVuIEZhcmJlbiwgei4gQi4gZnVlciBgaWNvbkdyb3VwYC9gaWNvblN0YXRlTWFwYCBkZXMgbXJkLXMtYnV0dG9uLFxuICogd2VubiBzaWNoIEljb24gb2RlciBGYXJiZSBqZSBadXN0YW5kIHVudGVyc2NoZWlkZW4gc29sbGVuLiBTb25zdCBpc3QgYDxtcmQtaWNvbiBpY29uPVwiLi4uXCIgb3V0bGluZT5gIGVpbmZhY2hlcixcbiAqIHdlaWwgZXMgZGllIFRleHRmYXJiZSB1ZWJlcm5pbW10LlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQcmVkZWZpbmVkSWNvbnNTZXJ2aWNlIHtcblxuICBwdWJsaWMgc3RhdGljIEdlbmVyYXRlSWNvbihvdXRlcjogSWNvbk5hbWV8dW5kZWZpbmVkLCBpbm5lcjogSWNvbk5hbWV8dW5kZWZpbmVkLCBjb2xvcjogTXJkQ29sb3J8e2lubmVyOiBNcmRDb2xvciwgb3V0ZXI6IE1yZENvbG9yfSwgc2l6ZTogbnVtYmVyID0gMjQsIGlubmVyRGlyZWN0aW9uOiBudW1iZXIgfCBJY29uRGlyZWN0aW9uID0gJ3JpZ2h0Jyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEljb25GYWN0b3J5U2VydmljZS5idWlsZCh7XG4gICAgICBvdXRlcjogb3V0ZXIgIT0gbnVsbCA/IEljb25MaWIuSWNvbk1hcFtvdXRlcl0gOiB1bmRlZmluZWQsXG4gICAgICAvLyBPaG5lIFJhaG1lbiBkaWUgZ3JvZXNzZXJlIFZhcmlhbnRlLCBpbSBSYWhtZW4gZGFzIFJhaG1lbi1TeW1ib2w7IGZlaGx0IGVpbmUgZGF2b24sIGRpZSBhbmRlcmVcbiAgICAgIGlubmVyOiBpbm5lciAhPSBudWxsXG4gICAgICAgID8gKG91dGVyID09IG51bGwgPyBJY29uTGliLlB1ck1hcFtpbm5lcl0gPz8gSWNvbkxpYi5JY29uTWFwW2lubmVyXSA6IEljb25MaWIuSWNvbk1hcFtpbm5lcl0gPz8gSWNvbkxpYi5QdXJNYXBbaW5uZXJdKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGNvbG9yOiB0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnID8gY29sb3IgOiB1bmRlZmluZWQsXG4gICAgICBvdXRlckNvbG9yOiB0eXBlb2YgY29sb3IgPT09ICdvYmplY3QnID8gY29sb3Iub3V0ZXIgOiB1bmRlZmluZWQsXG4gICAgICBpbm5lckNvbG9yOiB0eXBlb2YgY29sb3IgPT09ICdvYmplY3QnID8gY29sb3IuaW5uZXIgOiB1bmRlZmluZWQsXG4gICAgICBzaXplLFxuICAgICAgaW5uZXJEaXJlY3Rpb25cbiAgICB9KTtcbiAgfVxufVxuIl19