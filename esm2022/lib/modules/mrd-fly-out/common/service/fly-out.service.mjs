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
        // Wir zerstören das FlyOut und das Overlay
        mrdComponentRef.overlayRef.detach();
        mrdComponentRef.overlayRef.dispose();
        this.overlayMap.delete(id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5LW91dC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mbHktb3V0L2NvbW1vbi9zZXJ2aWNlL2ZseS1vdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZUFBZSxFQUFpQixNQUFNLHFCQUFxQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7QUFJeEY7Ozs7O0dBS0c7QUFJSCxNQUFNLE9BQU8sYUFBYTtJQVlkO0lBQ0E7SUFYVjs7Ozs7O09BTUc7SUFDSyxVQUFVLEdBQXVDLElBQUksR0FBRyxFQUFpQyxDQUFDO0lBRWxHLFlBQ1UsT0FBZ0IsRUFDaEIsUUFBa0I7UUFEbEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3hCLENBQUM7SUFFTDs7Ozs7OztPQU9HO0lBQ0ksSUFBSSxDQUFDLFNBQTZCLEVBQUUsTUFBd0I7UUFDakUsaUNBQWlDO1FBQ2pDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdkMsc0RBQXNEO1FBQ3RELElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQzlFLGlDQUFpQztRQUNqQyxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFOUMsK0JBQStCO1FBQy9CLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUV0QywySUFBMkk7UUFDM0ksSUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxDQUFBLFlBQWdDLENBQUEsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFDLENBQUM7WUFDL0gsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3RCLENBQUMsQ0FBQztRQUNILDBEQUEwRDtRQUMxRCxJQUFJLFVBQVUsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLEVBQUMsUUFBUSxFQUFFLGVBQWUsRUFBQyxDQUFDLENBQUM7UUFFdkcsd0NBQXdDO1FBQ3hDLElBQUksa0JBQWtCLEdBQTBCO1lBQzlDLFVBQVUsRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVM7WUFDM0MsVUFBVSxFQUFFLFVBQVU7WUFDdEIsWUFBWSxFQUFFLFlBQVk7WUFDMUIsVUFBVSxFQUFFLFVBQVU7WUFDdEIsV0FBVyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsV0FBVztZQUM5QyxPQUFPLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPO1lBQ3RDLFdBQVcsRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLFdBQVc7U0FDL0MsQ0FBQztRQUNGLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRXpFLGdDQUFnQztRQUNoQyxPQUFPLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEtBQUssQ0FBQyxFQUFVO1FBQ3JCLHFDQUFxQztRQUNyQyxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QywyQ0FBMkM7UUFDM0MsZUFBZSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwQyxlQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLENBQUM7MEZBekVVLGFBQWE7K0ZBQWIsYUFBYSxXQUFiLGFBQWEsbUJBRlosTUFBTTs7dUZBRVAsYUFBYTtjQUh6QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O0FBOEVEOzs7O0dBSUc7QUFJSCxNQUFNLE9BQU8sVUFBVTtJQUNyQixJQUFJLEdBQUcsRUFBRSxDQUFDO3VGQURDLFVBQVU7K0ZBQVYsVUFBVSxXQUFWLFVBQVUsbUJBRlQsTUFBTTs7dUZBRVAsVUFBVTtjQUh0QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwsIENvbXBvbmVudFR5cGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnbXJkLWNvcmUnO1xyXG5pbXBvcnQgeyBNcmRGbHlPdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL21yZC1mbHktb3V0L21yZC1mbHktb3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1yZEZseU91dENvbXBvbmVudFJlZiB9IGZyb20gJy4uL21vZGVsL21yZC1mbHktb3V0LWNvbXBvbmVudC1yZWYnO1xyXG5pbXBvcnQgeyBNcmRGbHlPdXRDb25maWcgfSBmcm9tICcuLi9tb2RlbC9tcmQtZmx5LW91dC1jb25maWcnO1xyXG5cclxuLyoqXHJcbiAqIERlciBTZXJ2aWNlLCB1bSBGbHlPdXRzIHp1IMO2ZmZuZW4gdW5kIHp1IHNjaGxpZcOfZW4uXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIEZseU91dFNlcnZpY2VcclxuICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZseU91dFNlcnZpY2Uge1xyXG5cclxuICAvKipcclxuICAgKiBEaWUgTWFwLCBkaWUgZGllIG9mZmVuZW4gRmx5T3V0cyBiZWluaGFsdGV0LlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAdHlwZSB7TWFwPHN0cmluZywgTXJkRmx5T3V0Q29tcG9uZW50UmVmPn1cclxuICAgKiBAbWVtYmVyb2YgRmx5T3V0U2VydmljZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgb3ZlcmxheU1hcDogTWFwPHN0cmluZywgTXJkRmx5T3V0Q29tcG9uZW50UmVmPiA9IG5ldyBNYXA8c3RyaW5nLCBNcmRGbHlPdXRDb21wb25lbnRSZWY+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcclxuICApIHsgfVxyXG5cclxuICAvKipcclxuICAgKiDDlmZmbmV0IGVpbiBGbHlPdXQgbWl0IGRlciDDvGJlcmdlYmVuZW4gS29tcG9uZW50ZSB1bmQgb3B0aW9uYWxlbiBLb25maWd1cmF0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtDb21wb25lbnRUeXBlPGFueT59IGNvbXBvbmVudFxyXG4gICAqIEBwYXJhbSB7TXJkRmx5T3V0Q29uZmlnfSBbY29uZmlnXSAob3B0aW9uYWwpXHJcbiAgICogQHJldHVybiB7TXJkRmx5T3V0Q29tcG9uZW50UmVmfVxyXG4gICAqIEBtZW1iZXJvZiBGbHlPdXRTZXJ2aWNlXHJcbiAgICovXHJcbiAgcHVibGljIG9wZW4oY29tcG9uZW50OiBDb21wb25lbnRUeXBlPGFueT4sIGNvbmZpZz86IE1yZEZseU91dENvbmZpZyk6IE1yZEZseU91dENvbXBvbmVudFJlZiB7XHJcbiAgICAvLyBXaXIgZXJ6ZXVnZW4gZWluIG5ldWVzIE92ZXJsYXlcclxuICAgIGxldCBvdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSgpO1xyXG4gICAgLy8gV2lyIGbDvGdlbiBkaWUgTXJkRmx5T3V0Q29tcG9uZW50IGluIGRhcyBPdmVybGF5IGVpblxyXG4gICAgbGV0IGNvbXBvbmVudFJlZiA9IG92ZXJsYXlSZWYuYXR0YWNoKG5ldyBDb21wb25lbnRQb3J0YWwoTXJkRmx5T3V0Q29tcG9uZW50KSk7XHJcbiAgICAvLyBXaXIgc2V0emVuIGRpZSBJRCBkZXMgT3ZlcmxheXNcclxuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5vdmVybGF5SWQgPSBVdGlsLmd1aWQoKTtcclxuXHJcbiAgICAvLyBXaXIgc2V0emVuIGRpZSBLb25maWd1cmF0aW9uXHJcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuY29uZmlnID0gY29uZmlnO1xyXG5cclxuICAgIC8vIFdpciBlcnpldWdlbiBlaW5lbiBuZXVlbiBJbmplY3RvciwgdW0gZGllIERhdGVuIHVuZCBkaWUgUmVmZXJlbnogYXVmIGRpZSBNcmRGbHlPdXRDb21wb25lbnQsIGFuIGRpZSBlaW5nZWJldHRldGUgS29tcG9uZW50ZSB6dSDDvGJlcmdlYmVuXHJcbiAgICBsZXQgY29udGVudEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcclxuICAgICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEZseU91dERhdGEsIHVzZVZhbHVlOiBjb25maWc/LmRhdGF9LCB7cHJvdmlkZTogQ29tcG9uZW50UmVmPE1yZEZseU91dENvbXBvbmVudD4sIHVzZVZhbHVlOiBjb21wb25lbnRSZWZ9XSxcclxuICAgICAgcGFyZW50OiB0aGlzLmluamVjdG9yXHJcbiAgICB9KTtcclxuICAgIC8vIFdpciBmw7xnZW4gZGllIGVpbmdlYmV0dGV0ZSBLb21wb25lbnRlIGluIGRhcyBGbHlPdXQgZWluXHJcbiAgICBsZXQgY29udGVudFJlZiA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb250ZW50LmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQsIHtpbmplY3RvcjogY29udGVudEluamVjdG9yfSk7XHJcblxyXG4gICAgLy8gV2lyIGVyemV1Z2VuIHVuc2VyIFJlZmVyZW56LU9iamVrdC4uLlxyXG4gICAgbGV0IG1yZEZseUNvbXBvbmVudFJlZjogTXJkRmx5T3V0Q29tcG9uZW50UmVmID0ge1xyXG4gICAgICBpZGVudGlmaWVyOiBjb21wb25lbnRSZWYuaW5zdGFuY2Uub3ZlcmxheUlkLFxyXG4gICAgICBvdmVybGF5UmVmOiBvdmVybGF5UmVmLFxyXG4gICAgICBjb21wb25lbnRSZWY6IGNvbXBvbmVudFJlZixcclxuICAgICAgY29udGVudFJlZjogY29udGVudFJlZixcclxuICAgICAgYWZ0ZXJPcGVuZWQ6IGNvbXBvbmVudFJlZi5pbnN0YW5jZS5hZnRlck9wZW5lZCxcclxuICAgICAgb25DbG9zZTogY29tcG9uZW50UmVmLmluc3RhbmNlLm9uQ2xvc2UsXHJcbiAgICAgIGFmdGVyQ2xvc2VkOiBjb21wb25lbnRSZWYuaW5zdGFuY2UuYWZ0ZXJDbG9zZWRcclxuICAgIH07XHJcbiAgICAvLyAuLi4gdW5kIGbDvGdlbiBlcyBkZXIgTWFwIGhpbnp1XHJcbiAgICB0aGlzLm92ZXJsYXlNYXAuc2V0KGNvbXBvbmVudFJlZi5pbnN0YW5jZS5vdmVybGF5SWQsIG1yZEZseUNvbXBvbmVudFJlZik7XHJcblxyXG4gICAgLy8gV2lyIGdlYmVuIGRpZSBSZWZlcmVueiB6dXLDvGNrXHJcbiAgICByZXR1cm4gbXJkRmx5Q29tcG9uZW50UmVmO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2NobGllw590IGRhcyBGbHlPdXQgbWl0IGRlciDDvGJlcmdlYmVuZW4gSUQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcclxuICAgKiBAbWVtYmVyb2YgRmx5T3V0U2VydmljZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBjbG9zZShpZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAvLyBXaXIgaG9sZW4gZGllIFJlZmVyZW56IGF1cyBkZXIgTWFwXHJcbiAgICBsZXQgbXJkQ29tcG9uZW50UmVmID0gdGhpcy5vdmVybGF5TWFwLmdldChpZCk7XHJcbiAgICAvLyBXaXIgemVyc3TDtnJlbiBkYXMgRmx5T3V0IHVuZCBkYXMgT3ZlcmxheVxyXG4gICAgbXJkQ29tcG9uZW50UmVmLm92ZXJsYXlSZWYuZGV0YWNoKCk7XHJcbiAgICBtcmRDb21wb25lbnRSZWYub3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgICB0aGlzLm92ZXJsYXlNYXAuZGVsZXRlKGlkKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogRGVyIFNlcnZpY2UsIHVtIERhdGVuIGFuIGVpbiBGbHlPdXQgenUgw7xiZXJnZWJlbi5cclxuICpcclxuICogQGNsYXNzIEZseU91dERhdGFcclxuICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZseU91dERhdGEge1xyXG4gIGRhdGEgPSB7fTtcclxufVxyXG4iXX0=