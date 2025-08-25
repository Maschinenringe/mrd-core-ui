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
        componentRef.instance.overlayId = Util.guid();
        // Wir setzen die Konfiguration
        componentRef.instance.config = config;
        // Wir erzeugen einen neuen Injector, um die Daten und die Referenz auf die MrdFlyOutComponent, an die eingebettete Komponente zu übergeben
        let contentInjector = Injector.create({
            providers: [{ provide: FlyOutData, useValue: config?.data }, { provide: (ComponentRef), useValue: componentRef }],
            parent: this.injector
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5LW91dC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mbHktb3V0L2NvbW1vbi9zZXJ2aWNlL2ZseS1vdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZUFBZSxFQUFpQixNQUFNLHFCQUFxQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7QUFJeEY7Ozs7O0dBS0c7QUFJSCxNQUFNLE9BQU8sYUFBYTtJQVlkO0lBQ0E7SUFYVjs7Ozs7O09BTUc7SUFDSyxVQUFVLEdBQXVDLElBQUksR0FBRyxFQUFpQyxDQUFDO0lBRWxHLFlBQ1UsT0FBZ0IsRUFDaEIsUUFBa0I7UUFEbEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3hCLENBQUM7SUFFTDs7Ozs7OztPQU9HO0lBQ0ksSUFBSSxDQUFDLFNBQTZCLEVBQUUsTUFBd0I7UUFDakUsaUNBQWlDO1FBQ2pDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdkMsc0RBQXNEO1FBQ3RELElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQzlFLGlDQUFpQztRQUNqQyxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFOUMsK0JBQStCO1FBQy9CLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUV0QywySUFBMkk7UUFDM0ksSUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxDQUFBLFlBQWdDLENBQUEsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFDLENBQUM7WUFDL0gsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3RCLENBQUMsQ0FBQztRQUNILDBEQUEwRDtRQUMxRCxJQUFJLFVBQVUsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLEVBQUMsUUFBUSxFQUFFLGVBQWUsRUFBQyxDQUFDLENBQUM7UUFFdkcsd0NBQXdDO1FBQ3hDLElBQUksa0JBQWtCLEdBQTBCO1lBQzlDLFVBQVUsRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVM7WUFDM0MsVUFBVSxFQUFFLFVBQVU7WUFDdEIsWUFBWSxFQUFFLFlBQVk7WUFDMUIsVUFBVSxFQUFFLFVBQVU7WUFDdEIsV0FBVyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsV0FBVztZQUM5QyxPQUFPLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPO1lBQ3RDLFdBQVcsRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLFdBQVc7U0FDL0MsQ0FBQztRQUNGLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRXpFLHVFQUF1RTtRQUN2RSxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO1FBRUgsZ0NBQWdDO1FBQ2hDLE9BQU8sa0JBQWtCLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLEVBQVU7UUFDckIscUNBQXFDO1FBQ3JDLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLHFFQUFxRTtRQUNyRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDbkMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNwQyxlQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzswRkFoRlUsYUFBYTsrRkFBYixhQUFhLFdBQWIsYUFBYSxtQkFGWixNQUFNOzt1RkFFUCxhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7QUFxRkQ7Ozs7R0FJRztBQUlILE1BQU0sT0FBTyxVQUFVO0lBQ3JCLElBQUksR0FBRyxFQUFFLENBQUM7dUZBREMsVUFBVTsrRkFBVixVQUFVLFdBQVYsVUFBVSxtQkFGVCxNQUFNOzt1RkFFUCxVQUFVO2NBSHRCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgQ29tcG9uZW50VHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRSZWYsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICdtcmQtY29yZSc7XHJcbmltcG9ydCB7IE1yZEZseU91dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbXJkLWZseS1vdXQvbXJkLWZseS1vdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXJkRmx5T3V0Q29tcG9uZW50UmVmIH0gZnJvbSAnLi4vbW9kZWwvbXJkLWZseS1vdXQtY29tcG9uZW50LXJlZic7XHJcbmltcG9ydCB7IE1yZEZseU91dENvbmZpZyB9IGZyb20gJy4uL21vZGVsL21yZC1mbHktb3V0LWNvbmZpZyc7XHJcblxyXG4vKipcclxuICogRGVyIFNlcnZpY2UsIHVtIEZseU91dHMgenUgw7ZmZm5lbiB1bmQgenUgc2NobGllw59lbi5cclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgRmx5T3V0U2VydmljZVxyXG4gKi9cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmx5T3V0U2VydmljZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIERpZSBNYXAsIGRpZSBkaWUgb2ZmZW5lbiBGbHlPdXRzIGJlaW5oYWx0ZXQuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEB0eXBlIHtNYXA8c3RyaW5nLCBNcmRGbHlPdXRDb21wb25lbnRSZWY+fVxyXG4gICAqIEBtZW1iZXJvZiBGbHlPdXRTZXJ2aWNlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBvdmVybGF5TWFwOiBNYXA8c3RyaW5nLCBNcmRGbHlPdXRDb21wb25lbnRSZWY+ID0gbmV3IE1hcDxzdHJpbmcsIE1yZEZseU91dENvbXBvbmVudFJlZj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxyXG4gICkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOWZmZuZXQgZWluIEZseU91dCBtaXQgZGVyIMO8YmVyZ2ViZW5lbiBLb21wb25lbnRlIHVuZCBvcHRpb25hbGVuIEtvbmZpZ3VyYXRpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0NvbXBvbmVudFR5cGU8YW55Pn0gY29tcG9uZW50XHJcbiAgICogQHBhcmFtIHtNcmRGbHlPdXRDb25maWd9IFtjb25maWddIChvcHRpb25hbClcclxuICAgKiBAcmV0dXJuIHtNcmRGbHlPdXRDb21wb25lbnRSZWZ9XHJcbiAgICogQG1lbWJlcm9mIEZseU91dFNlcnZpY2VcclxuICAgKi9cclxuICBwdWJsaWMgb3Blbihjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8YW55PiwgY29uZmlnPzogTXJkRmx5T3V0Q29uZmlnKTogTXJkRmx5T3V0Q29tcG9uZW50UmVmIHtcclxuICAgIC8vIFdpciBlcnpldWdlbiBlaW4gbmV1ZXMgT3ZlcmxheVxyXG4gICAgbGV0IG92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKCk7XHJcbiAgICAvLyBXaXIgZsO8Z2VuIGRpZSBNcmRGbHlPdXRDb21wb25lbnQgaW4gZGFzIE92ZXJsYXkgZWluXHJcbiAgICBsZXQgY29tcG9uZW50UmVmID0gb3ZlcmxheVJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChNcmRGbHlPdXRDb21wb25lbnQpKTtcclxuICAgIC8vIFdpciBzZXR6ZW4gZGllIElEIGRlcyBPdmVybGF5c1xyXG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLm92ZXJsYXlJZCA9IFV0aWwuZ3VpZCgpO1xyXG5cclxuICAgIC8vIFdpciBzZXR6ZW4gZGllIEtvbmZpZ3VyYXRpb25cclxuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb25maWcgPSBjb25maWc7XHJcblxyXG4gICAgLy8gV2lyIGVyemV1Z2VuIGVpbmVuIG5ldWVuIEluamVjdG9yLCB1bSBkaWUgRGF0ZW4gdW5kIGRpZSBSZWZlcmVueiBhdWYgZGllIE1yZEZseU91dENvbXBvbmVudCwgYW4gZGllIGVpbmdlYmV0dGV0ZSBLb21wb25lbnRlIHp1IMO8YmVyZ2ViZW5cclxuICAgIGxldCBjb250ZW50SW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xyXG4gICAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRmx5T3V0RGF0YSwgdXNlVmFsdWU6IGNvbmZpZz8uZGF0YX0sIHtwcm92aWRlOiBDb21wb25lbnRSZWY8TXJkRmx5T3V0Q29tcG9uZW50PiwgdXNlVmFsdWU6IGNvbXBvbmVudFJlZn1dLFxyXG4gICAgICBwYXJlbnQ6IHRoaXMuaW5qZWN0b3JcclxuICAgIH0pO1xyXG4gICAgLy8gV2lyIGbDvGdlbiBkaWUgZWluZ2ViZXR0ZXRlIEtvbXBvbmVudGUgaW4gZGFzIEZseU91dCBlaW5cclxuICAgIGxldCBjb250ZW50UmVmID0gY29tcG9uZW50UmVmLmluc3RhbmNlLmNvbnRlbnQuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCwge2luamVjdG9yOiBjb250ZW50SW5qZWN0b3J9KTtcclxuXHJcbiAgICAvLyBXaXIgZXJ6ZXVnZW4gdW5zZXIgUmVmZXJlbnotT2JqZWt0Li4uXHJcbiAgICBsZXQgbXJkRmx5Q29tcG9uZW50UmVmOiBNcmRGbHlPdXRDb21wb25lbnRSZWYgPSB7XHJcbiAgICAgIGlkZW50aWZpZXI6IGNvbXBvbmVudFJlZi5pbnN0YW5jZS5vdmVybGF5SWQsXHJcbiAgICAgIG92ZXJsYXlSZWY6IG92ZXJsYXlSZWYsXHJcbiAgICAgIGNvbXBvbmVudFJlZjogY29tcG9uZW50UmVmLFxyXG4gICAgICBjb250ZW50UmVmOiBjb250ZW50UmVmLFxyXG4gICAgICBhZnRlck9wZW5lZDogY29tcG9uZW50UmVmLmluc3RhbmNlLmFmdGVyT3BlbmVkLFxyXG4gICAgICBvbkNsb3NlOiBjb21wb25lbnRSZWYuaW5zdGFuY2Uub25DbG9zZSxcclxuICAgICAgYWZ0ZXJDbG9zZWQ6IGNvbXBvbmVudFJlZi5pbnN0YW5jZS5hZnRlckNsb3NlZFxyXG4gICAgfTtcclxuICAgIC8vIC4uLiB1bmQgZsO8Z2VuIGVzIGRlciBNYXAgaGluenVcclxuICAgIHRoaXMub3ZlcmxheU1hcC5zZXQoY29tcG9uZW50UmVmLmluc3RhbmNlLm92ZXJsYXlJZCwgbXJkRmx5Q29tcG9uZW50UmVmKTtcclxuXHJcbiAgICAvLyBXZW5uIE92ZXJsYXkgZGV0YWNoZWQvZ2VzY2hsb3NzZW4gd2lyZCwgTWFwLUVpbnRyYWcgd2llZGVyIGVudGZlcm5lblxyXG4gICAgb3ZlcmxheVJlZi5kZXRhY2htZW50cygpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMub3ZlcmxheU1hcC5kZWxldGUoY29tcG9uZW50UmVmLmluc3RhbmNlLm92ZXJsYXlJZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBXaXIgZ2ViZW4gZGllIFJlZmVyZW56IHp1csO8Y2tcclxuICAgIHJldHVybiBtcmRGbHlDb21wb25lbnRSZWY7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTY2hsaWXDn3QgZGFzIEZseU91dCBtaXQgZGVyIMO8YmVyZ2ViZW5lbiBJRC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZFxyXG4gICAqIEBtZW1iZXJvZiBGbHlPdXRTZXJ2aWNlXHJcbiAgICovXHJcbiAgcHVibGljIGNsb3NlKGlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIC8vIFdpciBob2xlbiBkaWUgUmVmZXJlbnogYXVzIGRlciBNYXBcclxuICAgIGxldCBtcmRDb21wb25lbnRSZWYgPSB0aGlzLm92ZXJsYXlNYXAuZ2V0KGlkKTtcclxuICAgIC8vIFdpciB6ZXJzdMO2cmVuIGRhcyBGbHlPdXQgdW5kIGRhcyBPdmVybGF5LCB3ZW5uIHNpZSBub2NoIGV4aXN0aWVyZW5cclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZChtcmRDb21wb25lbnRSZWYpKSB7XHJcbiAgICAgIG1yZENvbXBvbmVudFJlZi5vdmVybGF5UmVmLmRldGFjaCgpO1xyXG4gICAgICBtcmRDb21wb25lbnRSZWYub3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgICAgIHRoaXMub3ZlcmxheU1hcC5kZWxldGUoaWQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXIgU2VydmljZSwgdW0gRGF0ZW4gYW4gZWluIEZseU91dCB6dSDDvGJlcmdlYmVuLlxyXG4gKlxyXG4gKiBAY2xhc3MgRmx5T3V0RGF0YVxyXG4gKi9cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmx5T3V0RGF0YSB7XHJcbiAgZGF0YSA9IHt9O1xyXG59XHJcbiJdfQ==