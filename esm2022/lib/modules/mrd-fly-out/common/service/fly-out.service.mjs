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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx5LW91dC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mbHktb3V0L2NvbW1vbi9zZXJ2aWNlL2ZseS1vdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZUFBZSxFQUFpQixNQUFNLHFCQUFxQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7QUFJeEY7Ozs7O0dBS0c7QUFJSCxNQUFNLE9BQU8sYUFBYTtJQVlkO0lBQ0E7SUFYVjs7Ozs7O09BTUc7SUFDSyxVQUFVLEdBQXVDLElBQUksR0FBRyxFQUFpQyxDQUFDO0lBRWxHLFlBQ1UsT0FBZ0IsRUFDaEIsUUFBa0I7UUFEbEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBRTFCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFvQixFQUFFLEVBQUU7WUFDNUQsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLEtBQUssRUFBRTtnQkFDakQsSUFBSSxNQUEwQixDQUFDO2dCQUMvQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDbkIsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUs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QUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO1FBRUgsZ0NBQWdDO1FBQ2hDLE9BQU8sa0JBQWtCLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLEVBQVU7UUFDckIscUNBQXFDO1FBQ3JDLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLHFFQUFxRTtRQUNyRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDbkMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNwQyxlQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzswRkF0R1UsYUFBYTsrRkFBYixhQUFhLFdBQWIsYUFBYSxtQkFGWixNQUFNOzt1RkFFUCxhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7QUEyR0Q7Ozs7R0FJRztBQUlILE1BQU0sT0FBTyxVQUFVO0lBQ3JCLElBQUksR0FBRyxFQUFFLENBQUM7dUZBREMsVUFBVTsrRkFBVixVQUFVLFdBQVYsVUFBVSxtQkFGVCxNQUFNOzt1RkFFUCxVQUFVO2NBSHRCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgQ29tcG9uZW50VHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRSZWYsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICdtcmQtY29yZSc7XHJcbmltcG9ydCB7IE1yZEZseU91dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbXJkLWZseS1vdXQvbXJkLWZseS1vdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXJkRmx5T3V0Q29tcG9uZW50UmVmIH0gZnJvbSAnLi4vbW9kZWwvbXJkLWZseS1vdXQtY29tcG9uZW50LXJlZic7XHJcbmltcG9ydCB7IE1yZEZseU91dENvbmZpZyB9IGZyb20gJy4uL21vZGVsL21yZC1mbHktb3V0LWNvbmZpZyc7XHJcblxyXG4vKipcclxuICogRGVyIFNlcnZpY2UsIHVtIEZseU91dHMgenUgw7ZmZm5lbiB1bmQgenUgc2NobGllw59lbi5cclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgRmx5T3V0U2VydmljZVxyXG4gKi9cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmx5T3V0U2VydmljZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIERpZSBNYXAsIGRpZSBkaWUgb2ZmZW5lbiBGbHlPdXRzIGJlaW5oYWx0ZXQuXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEB0eXBlIHtNYXA8c3RyaW5nLCBNcmRGbHlPdXRDb21wb25lbnRSZWY+fVxyXG4gICAqIEBtZW1iZXJvZiBGbHlPdXRTZXJ2aWNlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBvdmVybGF5TWFwOiBNYXA8c3RyaW5nLCBNcmRGbHlPdXRDb21wb25lbnRSZWY+ID0gbmV3IE1hcDxzdHJpbmcsIE1yZEZseU91dENvbXBvbmVudFJlZj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxyXG4gICkgeyBcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScgfHwgZXZlbnQua2V5ID09PSAnRXNjJykge1xyXG4gICAgICAgIGxldCBtYXhLZXk6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgICAgICBsZXQga2V5cyA9IEFycmF5LmZyb20odGhpcy5vdmVybGF5TWFwLmtleXMoKSk7XHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgbWF4S2V5ID0ga2V5cy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJldkluZGV4ID0gTnVtYmVyKHByZXYuc3BsaXQoXCI6XCIpWzFdKTtcclxuICAgICAgICAgICAgY29uc3QgY3VyckluZGV4ID0gTnVtYmVyKGN1cnIuc3BsaXQoXCI6XCIpWzFdKTtcclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJJbmRleCA+IHByZXZJbmRleCA/IGN1cnIgOiBwcmV2O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChtYXhLZXkpKSB7XHJcbiAgICAgICAgICBsZXQgbXJkQ29tcG9uZW50UmVmID0gdGhpcy5vdmVybGF5TWFwLmdldChtYXhLZXkpO1xyXG4gICAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKG1yZENvbXBvbmVudFJlZikpIHtcclxuICAgICAgICAgICAgaWYgKG1yZENvbXBvbmVudFJlZi5jb21wb25lbnRSZWYuaW5zdGFuY2UuY2xvc2VPbkVzYykge1xyXG4gICAgICAgICAgICAgIG1yZENvbXBvbmVudFJlZi5jb21wb25lbnRSZWYuaW5zdGFuY2UuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDlmZmbmV0IGVpbiBGbHlPdXQgbWl0IGRlciDDvGJlcmdlYmVuZW4gS29tcG9uZW50ZSB1bmQgb3B0aW9uYWxlbiBLb25maWd1cmF0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtDb21wb25lbnRUeXBlPGFueT59IGNvbXBvbmVudFxyXG4gICAqIEBwYXJhbSB7TXJkRmx5T3V0Q29uZmlnfSBbY29uZmlnXSAob3B0aW9uYWwpXHJcbiAgICogQHJldHVybiB7TXJkRmx5T3V0Q29tcG9uZW50UmVmfVxyXG4gICAqIEBtZW1iZXJvZiBGbHlPdXRTZXJ2aWNlXHJcbiAgICovXHJcbiAgcHVibGljIG9wZW4oY29tcG9uZW50OiBDb21wb25lbnRUeXBlPGFueT4sIGNvbmZpZz86IE1yZEZseU91dENvbmZpZyk6IE1yZEZseU91dENvbXBvbmVudFJlZiB7XHJcbiAgICAvLyBXaXIgZXJ6ZXVnZW4gZWluIG5ldWVzIE92ZXJsYXlcclxuICAgIGxldCBvdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSgpO1xyXG4gICAgLy8gV2lyIGbDvGdlbiBkaWUgTXJkRmx5T3V0Q29tcG9uZW50IGluIGRhcyBPdmVybGF5IGVpblxyXG4gICAgbGV0IGNvbXBvbmVudFJlZiA9IG92ZXJsYXlSZWYuYXR0YWNoKG5ldyBDb21wb25lbnRQb3J0YWwoTXJkRmx5T3V0Q29tcG9uZW50KSk7XHJcbiAgICAvLyBXaXIgc2V0emVuIGRpZSBJRCBkZXMgT3ZlcmxheXNcclxuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5vdmVybGF5SWQgPSBgJHtVdGlsLmd1aWQoKX06JHt0aGlzLm92ZXJsYXlNYXAuc2l6ZSArIDF9YDtcclxuXHJcbiAgICAvLyBXaXIgc2V0emVuIGRpZSBLb25maWd1cmF0aW9uXHJcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuY29uZmlnID0gY29uZmlnO1xyXG5cclxuICAgIC8vIFdpciBlcnpldWdlbiBlaW5lbiBuZXVlbiBJbmplY3RvciwgdW0gZGllIERhdGVuIHVuZCBkaWUgUmVmZXJlbnogYXVmIGRpZSBNcmRGbHlPdXRDb21wb25lbnQsIGFuIGRpZSBlaW5nZWJldHRldGUgS29tcG9uZW50ZSB6dSDDvGJlcmdlYmVuXHJcbiAgICBsZXQgY29udGVudEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcclxuICAgICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEZseU91dERhdGEsIHVzZVZhbHVlOiBjb25maWc/LmRhdGF9LCB7cHJvdmlkZTogQ29tcG9uZW50UmVmPE1yZEZseU91dENvbXBvbmVudD4sIHVzZVZhbHVlOiBjb21wb25lbnRSZWZ9XSxcclxuICAgICAgcGFyZW50OiB0aGlzLmluamVjdG9yXHJcbiAgICB9KTtcclxuICAgIC8vIFdpciBmw7xnZW4gZGllIGVpbmdlYmV0dGV0ZSBLb21wb25lbnRlIGluIGRhcyBGbHlPdXQgZWluXHJcbiAgICBsZXQgY29udGVudFJlZiA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb250ZW50LmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQsIHtpbmplY3RvcjogY29udGVudEluamVjdG9yfSk7XHJcblxyXG4gICAgLy8gV2lyIGVyemV1Z2VuIHVuc2VyIFJlZmVyZW56LU9iamVrdC4uLlxyXG4gICAgbGV0IG1yZEZseUNvbXBvbmVudFJlZjogTXJkRmx5T3V0Q29tcG9uZW50UmVmID0ge1xyXG4gICAgICBpZGVudGlmaWVyOiBjb21wb25lbnRSZWYuaW5zdGFuY2Uub3ZlcmxheUlkLFxyXG4gICAgICBvdmVybGF5UmVmOiBvdmVybGF5UmVmLFxyXG4gICAgICBjb21wb25lbnRSZWY6IGNvbXBvbmVudFJlZixcclxuICAgICAgY29udGVudFJlZjogY29udGVudFJlZixcclxuICAgICAgYWZ0ZXJPcGVuZWQ6IGNvbXBvbmVudFJlZi5pbnN0YW5jZS5hZnRlck9wZW5lZCxcclxuICAgICAgb25DbG9zZTogY29tcG9uZW50UmVmLmluc3RhbmNlLm9uQ2xvc2UsXHJcbiAgICAgIGFmdGVyQ2xvc2VkOiBjb21wb25lbnRSZWYuaW5zdGFuY2UuYWZ0ZXJDbG9zZWRcclxuICAgIH07XHJcbiAgICAvLyAuLi4gdW5kIGbDvGdlbiBlcyBkZXIgTWFwIGhpbnp1XHJcbiAgICB0aGlzLm92ZXJsYXlNYXAuc2V0KGNvbXBvbmVudFJlZi5pbnN0YW5jZS5vdmVybGF5SWQsIG1yZEZseUNvbXBvbmVudFJlZik7XHJcblxyXG4gICAgLy8gV2VubiBPdmVybGF5IGRldGFjaGVkL2dlc2NobG9zc2VuIHdpcmQsIE1hcC1FaW50cmFnIHdpZWRlciBlbnRmZXJuZW5cclxuICAgIG92ZXJsYXlSZWYuZGV0YWNobWVudHMoKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLm92ZXJsYXlNYXAuZGVsZXRlKGNvbXBvbmVudFJlZi5pbnN0YW5jZS5vdmVybGF5SWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gV2lyIGdlYmVuIGRpZSBSZWZlcmVueiB6dXLDvGNrXHJcbiAgICByZXR1cm4gbXJkRmx5Q29tcG9uZW50UmVmO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2NobGllw590IGRhcyBGbHlPdXQgbWl0IGRlciDDvGJlcmdlYmVuZW4gSUQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcclxuICAgKiBAbWVtYmVyb2YgRmx5T3V0U2VydmljZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBjbG9zZShpZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAvLyBXaXIgaG9sZW4gZGllIFJlZmVyZW56IGF1cyBkZXIgTWFwXHJcbiAgICBsZXQgbXJkQ29tcG9uZW50UmVmID0gdGhpcy5vdmVybGF5TWFwLmdldChpZCk7XHJcbiAgICAvLyBXaXIgemVyc3TDtnJlbiBkYXMgRmx5T3V0IHVuZCBkYXMgT3ZlcmxheSwgd2VubiBzaWUgbm9jaCBleGlzdGllcmVuXHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQobXJkQ29tcG9uZW50UmVmKSkge1xyXG4gICAgICBtcmRDb21wb25lbnRSZWYub3ZlcmxheVJlZi5kZXRhY2goKTtcclxuICAgICAgbXJkQ29tcG9uZW50UmVmLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG4gICAgICB0aGlzLm92ZXJsYXlNYXAuZGVsZXRlKGlkKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogRGVyIFNlcnZpY2UsIHVtIERhdGVuIGFuIGVpbiBGbHlPdXQgenUgw7xiZXJnZWJlbi5cclxuICpcclxuICogQGNsYXNzIEZseU91dERhdGFcclxuICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZseU91dERhdGEge1xyXG4gIGRhdGEgPSB7fTtcclxufVxyXG4iXX0=