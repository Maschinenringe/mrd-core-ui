import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, Injector } from '@angular/core';
import { Util } from 'mrd-core';
import { MrdFlyOutComponent } from '../../components/mrd-fly-out/mrd-fly-out.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
/**
 * Der Service, um FlyOuts zu öffnen und zu schließen.
 *
 * @export
 * @class FlyOutService
 */
export class FlyOutService {
    overlay;
    injector;
    /**
     * Die Map, die die offenen FlyOuts beinhaltet.
     *
     * @private
     * @type {Map<string, MrdFlyOutComponentRef>}
     * @memberof FlyOutService
     */
    overlayMap = new Map();
    constructor(overlay, injector) {
        this.overlay = overlay;
        this.injector = injector;
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' || event.key === 'Esc') {
                let maxKey;
                let keys = Array.from(this.overlayMap.keys());
                if (keys.length > 0) {
                    maxKey = keys.reduce((prev, curr) => {
                        const prevIndex = Number(prev.split(":")[1]);
                        const currIndex = Number(curr.split(":")[1]);
                        return currIndex > prevIndex ? curr : prev;
                    });
                }
                if (Util.isDefined(maxKey)) {
                    let mrdComponentRef = this.overlayMap.get(maxKey);
                    if (Util.isDefined(mrdComponentRef)) {
                        if (mrdComponentRef.componentRef.instance.closeOnEsc) {
                            mrdComponentRef.componentRef.instance.close();
                        }
                    }
                }
            }
        });
    }
    /**
     * Öffnet ein FlyOut mit der übergebenen Komponente und optionalen Konfiguration.
     *
     * @param {ComponentType<any>} component
     * @param {MrdFlyOutConfig} [config] (optional)
     * @return {MrdFlyOutComponentRef}
     * @memberof FlyOutService
     */
    open(component, config) {
        // Wir erzeugen ein neues Overlay
        let overlayRef = this.overlay.create();
        // Wir fügen die MrdFlyOutComponent in das Overlay ein
        let componentRef = overlayRef.attach(new ComponentPortal(MrdFlyOutComponent));
        // Wir setzen die ID des Overlays
        componentRef.instance.overlayId = `${Util.guid()}:${this.overlayMap.size + 1}`;
        // Wir setzen die Konfiguration
        componentRef.instance.config = config;
        // Wir erzeugen einen neuen Injector, um die Daten und die Referenz auf die MrdFlyOutComponent, an die eingebettete Komponente zu übergeben
        let contentInjector = Injector.create({
            providers: [{ provide: FlyOutData, useValue: config?.data }, { provide: (ComponentRef), useValue: componentRef }],
            parent: config?.injector ?? this.injector
        });
        // Wir fügen die eingebettete Komponente in das FlyOut ein
        let contentRef = componentRef.instance.content.createComponent(component, { injector: contentInjector });
        // Wir erzeugen unser Referenz-Objekt...
        let mrdFlyComponentRef = {
            identifier: componentRef.instance.overlayId,
            overlayRef: overlayRef,
            componentRef: componentRef,
            contentRef: contentRef,
            afterOpened: componentRef.instance.afterOpened,
            onClose: componentRef.instance.onClose,
            afterClosed: componentRef.instance.afterClosed
        };
        // ... und fügen es der Map hinzu
        this.overlayMap.set(componentRef.instance.overlayId, mrdFlyComponentRef);
        // Wenn Overlay detached/geschlossen wird, Map-Eintrag wieder entfernen
        overlayRef.detachments().subscribe(() => {
            this.overlayMap.delete(componentRef.instance.overlayId);
        });
        // Wir geben die Referenz zurück
        return mrdFlyComponentRef;
    }
    /**
     * Schließt das FlyOut mit der übergebenen ID.
     *
     * @param {string} id
     * @memberof FlyOutService
     */
    close(id) {
        // Wir holen die Referenz aus der Map
        let mrdComponentRef = this.overlayMap.get(id);
        // Wir zerstören das FlyOut und das Overlay, wenn sie noch existieren
        if (Util.isDefined(mrdComponentRef)) {
            mrdComponentRef.overlayRef.detach();
            mrdComponentRef.overlayRef.dispose();
            this.overlayMap.delete(id);
        }
    }
    /** @nocollapse */ static ɵfac = function FlyOutService_Factory(t) { return new (t || FlyOutService)(i0.ɵɵinject(i1.Overlay), i0.ɵɵinject(i0.Injector)); };
    /** @nocollapse */ static ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: FlyOutService, factory: FlyOutService.ɵfac, providedIn: 'root' });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FlyOutService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Overlay }, { type: i0.Injector }]; }, null); })();
/**
 * Der Service, um Daten an ein FlyOut zu übergeben.
 *
 * @class FlyOutData
 */
export class FlyOutData {
    data = {};
    /** @nocollapse */ static ɵfac = function FlyOutData_Factory(t) { return new (t || FlyOutData)(); };
    /** @nocollapse */ static ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: FlyOutData, factory: FlyOutData.ɵfac, providedIn: 'root' });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FlyOutData, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5LW91dC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mbHktb3V0L2NvbW1vbi9zZXJ2aWNlL2ZseS1vdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZUFBZSxFQUFpQixNQUFNLHFCQUFxQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7QUFJeEY7Ozs7O0dBS0c7QUFJSCxNQUFNLE9BQU8sYUFBYTtJQVlkO0lBQ0E7SUFYVjs7Ozs7O09BTUc7SUFDSyxVQUFVLEdBQXVDLElBQUksR0FBRyxFQUFpQyxDQUFDO0lBRWxHLFlBQ1UsT0FBZ0IsRUFDaEIsUUFBa0I7UUFEbEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBRTFCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFvQixFQUFFLEVBQUU7WUFDNUQsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLEtBQUssRUFBRTtnQkFDakQsSUFBSSxNQUEwQixDQUFDO2dCQUMvQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDbkIsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUs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QUMsR0FBRyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7UUFFSCxnQ0FBZ0M7UUFDaEMsT0FBTyxrQkFBa0IsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxLQUFLLENBQUMsRUFBVTtRQUNyQixxQ0FBcUM7UUFDckMsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUMscUVBQXFFO1FBQ3JFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUNuQyxlQUFlLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3BDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDOzBGQXRHVSxhQUFhOytGQUFiLGFBQWEsV0FBYixhQUFhLG1CQUZaLE1BQU07O3VGQUVQLGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztBQTJHRDs7OztHQUlHO0FBSUgsTUFBTSxPQUFPLFVBQVU7SUFDckIsSUFBSSxHQUFHLEVBQUUsQ0FBQzt1RkFEQyxVQUFVOytGQUFWLFVBQVUsV0FBVixVQUFVLG1CQUZULE1BQU07O3VGQUVQLFVBQVU7Y0FIdEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsLCBDb21wb25lbnRUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFJlZiwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gJ21yZC1jb3JlJztcclxuaW1wb3J0IHsgTXJkRmx5T3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tcmQtZmx5LW91dC9tcmQtZmx5LW91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNcmRGbHlPdXRDb21wb25lbnRSZWYgfSBmcm9tICcuLi9tb2RlbC9tcmQtZmx5LW91dC1jb21wb25lbnQtcmVmJztcclxuaW1wb3J0IHsgTXJkRmx5T3V0Q29uZmlnIH0gZnJvbSAnLi4vbW9kZWwvbXJkLWZseS1vdXQtY29uZmlnJztcclxuXHJcbi8qKlxyXG4gKiBEZXIgU2VydmljZSwgdW0gRmx5T3V0cyB6dSDDtmZmbmVuIHVuZCB6dSBzY2hsaWXDn2VuLlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBjbGFzcyBGbHlPdXRTZXJ2aWNlXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbHlPdXRTZXJ2aWNlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogRGllIE1hcCwgZGllIGRpZSBvZmZlbmVuIEZseU91dHMgYmVpbmhhbHRldC5cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHR5cGUge01hcDxzdHJpbmcsIE1yZEZseU91dENvbXBvbmVudFJlZj59XHJcbiAgICogQG1lbWJlcm9mIEZseU91dFNlcnZpY2VcclxuICAgKi9cclxuICBwcml2YXRlIG92ZXJsYXlNYXA6IE1hcDxzdHJpbmcsIE1yZEZseU91dENvbXBvbmVudFJlZj4gPSBuZXcgTWFwPHN0cmluZywgTXJkRmx5T3V0Q29tcG9uZW50UmVmPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXHJcbiAgKSB7IFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyB8fCBldmVudC5rZXkgPT09ICdFc2MnKSB7XHJcbiAgICAgICAgbGV0IG1heEtleTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgICAgIGxldCBrZXlzID0gQXJyYXkuZnJvbSh0aGlzLm92ZXJsYXlNYXAua2V5cygpKTtcclxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBtYXhLZXkgPSBrZXlzLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2SW5kZXggPSBOdW1iZXIocHJldi5zcGxpdChcIjpcIilbMV0pO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJySW5kZXggPSBOdW1iZXIoY3Vyci5zcGxpdChcIjpcIilbMV0pO1xyXG4gICAgICAgICAgICByZXR1cm4gY3VyckluZGV4ID4gcHJldkluZGV4ID8gY3VyciA6IHByZXY7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKG1heEtleSkpIHtcclxuICAgICAgICAgIGxldCBtcmRDb21wb25lbnRSZWYgPSB0aGlzLm92ZXJsYXlNYXAuZ2V0KG1heEtleSk7XHJcbiAgICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQobXJkQ29tcG9uZW50UmVmKSkge1xyXG4gICAgICAgICAgICBpZiAobXJkQ29tcG9uZW50UmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5jbG9zZU9uRXNjKSB7XHJcbiAgICAgICAgICAgICAgbXJkQ29tcG9uZW50UmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOWZmZuZXQgZWluIEZseU91dCBtaXQgZGVyIMO8YmVyZ2ViZW5lbiBLb21wb25lbnRlIHVuZCBvcHRpb25hbGVuIEtvbmZpZ3VyYXRpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0NvbXBvbmVudFR5cGU8YW55Pn0gY29tcG9uZW50XHJcbiAgICogQHBhcmFtIHtNcmRGbHlPdXRDb25maWd9IFtjb25maWddIChvcHRpb25hbClcclxuICAgKiBAcmV0dXJuIHtNcmRGbHlPdXRDb21wb25lbnRSZWZ9XHJcbiAgICogQG1lbWJlcm9mIEZseU91dFNlcnZpY2VcclxuICAgKi9cclxuICBwdWJsaWMgb3Blbihjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8YW55PiwgY29uZmlnPzogTXJkRmx5T3V0Q29uZmlnKTogTXJkRmx5T3V0Q29tcG9uZW50UmVmIHtcclxuICAgIC8vIFdpciBlcnpldWdlbiBlaW4gbmV1ZXMgT3ZlcmxheVxyXG4gICAgbGV0IG92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKCk7XHJcbiAgICAvLyBXaXIgZsO8Z2VuIGRpZSBNcmRGbHlPdXRDb21wb25lbnQgaW4gZGFzIE92ZXJsYXkgZWluXHJcbiAgICBsZXQgY29tcG9uZW50UmVmID0gb3ZlcmxheVJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChNcmRGbHlPdXRDb21wb25lbnQpKTtcclxuICAgIC8vIFdpciBzZXR6ZW4gZGllIElEIGRlcyBPdmVybGF5c1xyXG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLm92ZXJsYXlJZCA9IGAke1V0aWwuZ3VpZCgpfToke3RoaXMub3ZlcmxheU1hcC5zaXplICsgMX1gO1xyXG5cclxuICAgIC8vIFdpciBzZXR6ZW4gZGllIEtvbmZpZ3VyYXRpb25cclxuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb25maWcgPSBjb25maWc7XHJcblxyXG4gICAgLy8gV2lyIGVyemV1Z2VuIGVpbmVuIG5ldWVuIEluamVjdG9yLCB1bSBkaWUgRGF0ZW4gdW5kIGRpZSBSZWZlcmVueiBhdWYgZGllIE1yZEZseU91dENvbXBvbmVudCwgYW4gZGllIGVpbmdlYmV0dGV0ZSBLb21wb25lbnRlIHp1IMO8YmVyZ2ViZW5cclxuICAgIGxldCBjb250ZW50SW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xyXG4gICAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRmx5T3V0RGF0YSwgdXNlVmFsdWU6IGNvbmZpZz8uZGF0YX0sIHtwcm92aWRlOiBDb21wb25lbnRSZWY8TXJkRmx5T3V0Q29tcG9uZW50PiwgdXNlVmFsdWU6IGNvbXBvbmVudFJlZn1dLFxyXG4gICAgICBwYXJlbnQ6IGNvbmZpZz8uaW5qZWN0b3IgPz8gdGhpcy5pbmplY3RvclxyXG4gICAgfSk7XHJcbiAgICAvLyBXaXIgZsO8Z2VuIGRpZSBlaW5nZWJldHRldGUgS29tcG9uZW50ZSBpbiBkYXMgRmx5T3V0IGVpblxyXG4gICAgbGV0IGNvbnRlbnRSZWYgPSBjb21wb25lbnRSZWYuaW5zdGFuY2UuY29udGVudC5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50LCB7aW5qZWN0b3I6IGNvbnRlbnRJbmplY3Rvcn0pO1xyXG5cclxuICAgIC8vIFdpciBlcnpldWdlbiB1bnNlciBSZWZlcmVuei1PYmpla3QuLi5cclxuICAgIGxldCBtcmRGbHlDb21wb25lbnRSZWY6IE1yZEZseU91dENvbXBvbmVudFJlZiA9IHtcclxuICAgICAgaWRlbnRpZmllcjogY29tcG9uZW50UmVmLmluc3RhbmNlLm92ZXJsYXlJZCxcclxuICAgICAgb3ZlcmxheVJlZjogb3ZlcmxheVJlZixcclxuICAgICAgY29tcG9uZW50UmVmOiBjb21wb25lbnRSZWYsXHJcbiAgICAgIGNvbnRlbnRSZWY6IGNvbnRlbnRSZWYsXHJcbiAgICAgIGFmdGVyT3BlbmVkOiBjb21wb25lbnRSZWYuaW5zdGFuY2UuYWZ0ZXJPcGVuZWQsXHJcbiAgICAgIG9uQ2xvc2U6IGNvbXBvbmVudFJlZi5pbnN0YW5jZS5vbkNsb3NlLFxyXG4gICAgICBhZnRlckNsb3NlZDogY29tcG9uZW50UmVmLmluc3RhbmNlLmFmdGVyQ2xvc2VkXHJcbiAgICB9O1xyXG4gICAgLy8gLi4uIHVuZCBmw7xnZW4gZXMgZGVyIE1hcCBoaW56dVxyXG4gICAgdGhpcy5vdmVybGF5TWFwLnNldChjb21wb25lbnRSZWYuaW5zdGFuY2Uub3ZlcmxheUlkLCBtcmRGbHlDb21wb25lbnRSZWYpO1xyXG5cclxuICAgIC8vIFdlbm4gT3ZlcmxheSBkZXRhY2hlZC9nZXNjaGxvc3NlbiB3aXJkLCBNYXAtRWludHJhZyB3aWVkZXIgZW50ZmVybmVuXHJcbiAgICBvdmVybGF5UmVmLmRldGFjaG1lbnRzKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5vdmVybGF5TWFwLmRlbGV0ZShjb21wb25lbnRSZWYuaW5zdGFuY2Uub3ZlcmxheUlkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFdpciBnZWJlbiBkaWUgUmVmZXJlbnogenVyw7xja1xyXG4gICAgcmV0dXJuIG1yZEZseUNvbXBvbmVudFJlZjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNjaGxpZcOfdCBkYXMgRmx5T3V0IG1pdCBkZXIgw7xiZXJnZWJlbmVuIElELlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkXHJcbiAgICogQG1lbWJlcm9mIEZseU91dFNlcnZpY2VcclxuICAgKi9cclxuICBwdWJsaWMgY2xvc2UoaWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgLy8gV2lyIGhvbGVuIGRpZSBSZWZlcmVueiBhdXMgZGVyIE1hcFxyXG4gICAgbGV0IG1yZENvbXBvbmVudFJlZiA9IHRoaXMub3ZlcmxheU1hcC5nZXQoaWQpO1xyXG4gICAgLy8gV2lyIHplcnN0w7ZyZW4gZGFzIEZseU91dCB1bmQgZGFzIE92ZXJsYXksIHdlbm4gc2llIG5vY2ggZXhpc3RpZXJlblxyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKG1yZENvbXBvbmVudFJlZikpIHtcclxuICAgICAgbXJkQ29tcG9uZW50UmVmLm92ZXJsYXlSZWYuZGV0YWNoKCk7XHJcbiAgICAgIG1yZENvbXBvbmVudFJlZi5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcclxuICAgICAgdGhpcy5vdmVybGF5TWFwLmRlbGV0ZShpZCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIERlciBTZXJ2aWNlLCB1bSBEYXRlbiBhbiBlaW4gRmx5T3V0IHp1IMO8YmVyZ2ViZW4uXHJcbiAqXHJcbiAqIEBjbGFzcyBGbHlPdXREYXRhXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbHlPdXREYXRhIHtcclxuICBkYXRhID0ge307XHJcbn1cclxuIl19