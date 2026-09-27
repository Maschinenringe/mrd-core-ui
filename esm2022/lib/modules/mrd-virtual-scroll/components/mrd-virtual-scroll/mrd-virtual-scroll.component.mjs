import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, Output, numberAttribute } from '@angular/core';
import { MrdVirtualScrollItemDirective } from '../../common/directive/mrd-virtual-scroll-item.directive';
import { itemSizeAttribute } from '../../common/transforms/item-size-transform';
import { ConfigUtil } from '../../../../common/util/config.util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MrdVirtualScrollComponent_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function MrdVirtualScrollComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, MrdVirtualScrollComponent_div_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const eintrag_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("height", eintrag_r1.hoehe, "px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", i0.ɵɵpureFunction2(4, _c0, eintrag_r1.item, eintrag_r1.index));
} }
/**
 * Rendert von einer langen Liste nur die sichtbaren Zeilen (plus Puffer).
 * Voraussetzungen: die Hoehe jeder Zeile ist vorab bekannt (`itemSize` als Zahl oder Funktion je Eintrag)
 * und das Element selbst hat eine feste Hoehe (z. B. ueber `height` oder `flex: 1`) oder `maxHeight` ist gesetzt.
 */
export class MrdVirtualScrollComponent {
    elementRef;
    cdr;
    ngZone;
    contentItem;
    /** Alternativ zum Content-Template, z. B. wenn eine umschliessende Komponente das Template durchreicht */
    itemTemplate;
    set items(value) {
        this._items = value || [];
        this.offsetsBerechnen();
        this.bereichBerechnen(true, false);
    }
    get items() {
        return this._items;
    }
    _items = [];
    /**
     * Zeilenhoehe in px fuer alle Eintraege oder `(item, index) => px` je Eintrag.
     * Aendert sich das Ergebnis der Funktion fuer vorhandene Items, danach `checkViewportSize()` aufrufen.
     */
    set itemSize(value) {
        this._itemSize = value ?? ConfigUtil.getConfig().list.itemSize;
        this.offsetsBerechnen();
        this.bereichBerechnen(true, false);
    }
    get itemSize() {
        return this._itemSize;
    }
    _itemSize = ConfigUtil.getConfig().list.itemSize;
    /**
     * Nur bei `itemSize` als Funktion: offsets[i] ist die Oberkante von Eintrag i, offsets[anzahl] die Gesamthoehe.
     * Bei fester Hoehe wird gerechnet statt gespeichert.
     */
    offsets = null;
    /** Anzahl zusaetzlich gerenderter Zeilen ober- und unterhalb des sichtbaren Bereichs */
    buffer = 5;
    trackBy;
    /** Hoehe in px, bis zu der das Element mit seinem Inhalt waechst; ohne Angabe bestimmt der Aufrufer die Hoehe */
    maxHeight;
    visibleRangeChange = new EventEmitter();
    sichtbareEintraege = [];
    versatz = 0;
    gesamtHoehe = 0;
    bereich = { start: 0, end: 0 };
    initialisiert = false;
    animationFrame = null;
    resizeObserver;
    scrollListener = () => this.bereichPlanen();
    eintragTrackBy = (_, eintrag) => {
        return this.trackBy ? this.trackBy(eintrag.index, eintrag.item) : eintrag.item;
    };
    constructor(elementRef, cdr, ngZone) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.ngZone = ngZone;
    }
    ngAfterViewInit() {
        const element = this.elementRef.nativeElement;
        // Scroll- und Resize-Ereignisse ausserhalb der Zone, damit nicht jedes Scroll-Frame eine globale Change Detection ausloest
        this.ngZone.runOutsideAngular(() => {
            element.addEventListener('scroll', this.scrollListener, { passive: true });
            if (typeof ResizeObserver !== 'undefined') {
                this.resizeObserver = new ResizeObserver(() => this.bereichPlanen());
                this.resizeObserver.observe(element);
            }
        });
        this.initialisiert = true;
        this.bereichBerechnen(true, true);
    }
    ngOnDestroy() {
        this.elementRef.nativeElement.removeEventListener('scroll', this.scrollListener);
        this.resizeObserver?.disconnect();
        if (this.animationFrame !== null) {
            cancelAnimationFrame(this.animationFrame);
        }
    }
    get template() {
        return this.itemTemplate || this.contentItem?.templateRef;
    }
    get automatischeHoehe() {
        return this.maxHeight > 0 ? Math.min(this.gesamtHoehe, this.maxHeight) : null;
    }
    get renderedRange() {
        return { ...this.bereich };
    }
    /** Scrollt so, dass der Eintrag mit dem Index sichtbar ist. */
    scrollToIndex(index, position = 'nearest', behavior = 'auto') {
        if (index < 0 || index >= this._items.length) {
            return;
        }
        const element = this.elementRef.nativeElement;
        const hoehe = element.clientHeight;
        const oben = this.oberkante(index);
        const zeilenhoehe = this.hoeheVon(index);
        const unten = oben + zeilenhoehe;
        let ziel = element.scrollTop;
        switch (position) {
            case 'start':
                ziel = oben;
                break;
            case 'end':
                ziel = unten - hoehe;
                break;
            case 'center':
                ziel = oben - (hoehe - zeilenhoehe) / 2;
                break;
            default:
                if (oben < element.scrollTop) {
                    ziel = oben;
                }
                else if (unten > element.scrollTop + hoehe) {
                    ziel = unten - hoehe;
                }
        }
        ziel = Math.max(0, Math.min(ziel, this.gesamtHoehe - hoehe));
        element.scrollTo({ top: ziel, behavior });
    }
    /**
     * Neu berechnen, wenn sich die Groesse von aussen geaendert hat, ohne dass der ResizeObserver es bemerkt,
     * oder wenn `itemSize` als Funktion fuer vorhandene Items andere Hoehen liefert.
     */
    checkViewportSize() {
        this.offsetsBerechnen();
        this.bereichBerechnen(true, true);
    }
    offsetsBerechnen() {
        const groesse = this._itemSize;
        if (typeof groesse !== 'function') {
            this.offsets = null;
            return;
        }
        const anzahl = this._items.length;
        const offsets = new Float64Array(anzahl + 1);
        for (let i = 0; i < anzahl; i++) {
            offsets[i + 1] = offsets[i] + Math.max(0, groesse(this._items[i], i) || 0);
        }
        this.offsets = offsets;
    }
    oberkante(index) {
        return this.offsets ? this.offsets[index] : index * this._itemSize;
    }
    hoeheVon(index) {
        return this.offsets ? this.offsets[index + 1] - this.offsets[index] : this._itemSize;
    }
    /** Index des Eintrags, der die Position y (px ab Listenanfang) enthaelt */
    indexBei(y) {
        const anzahl = this._items.length;
        if (anzahl === 0) {
            return 0;
        }
        if (!this.offsets) {
            return Math.min(anzahl - 1, Math.floor(y / this._itemSize));
        }
        // Binaersuche nach dem letzten Eintrag mit Oberkante <= y
        let links = 0;
        let rechts = anzahl - 1;
        while (links < rechts) {
            const mitte = (links + rechts + 1) >> 1;
            if (this.offsets[mitte] <= y) {
                links = mitte;
            }
            else {
                rechts = mitte - 1;
            }
        }
        return links;
    }
    bereichPlanen() {
        if (this.animationFrame !== null) {
            return;
        }
        this.animationFrame = requestAnimationFrame(() => {
            this.animationFrame = null;
            this.bereichBerechnen(false, true);
        });
    }
    /**
     * @param erzwingen Auch neu aufbauen, wenn sich der Bereich nicht geaendert hat (z. B. neue Items)
     * @param rendern Sofort rendern; im Input-Setter nicht noetig, weil die Change Detection ohnehin folgt
     */
    bereichBerechnen(erzwingen, rendern) {
        const anzahl = this._items.length;
        this.gesamtHoehe = this.oberkante(anzahl);
        let start = 0;
        let ende = Math.min(anzahl, this.buffer * 2);
        if (this.initialisiert && anzahl > 0) {
            const element = this.elementRef.nativeElement;
            const hoehe = element.clientHeight;
            // scrollTop ist nach dem Verkleinern der Liste bis zum naechsten Layout noch der alte Wert
            const scrollTop = Math.max(0, Math.min(element.scrollTop, this.gesamtHoehe - hoehe));
            const erster = this.indexBei(scrollTop);
            const letzter = this.indexBei(scrollTop + hoehe);
            start = Math.max(0, erster - this.buffer);
            ende = Math.min(anzahl, letzter + 1 + this.buffer);
        }
        if (!erzwingen && start === this.bereich.start && ende === this.bereich.end) {
            return;
        }
        const bereichGeaendert = start !== this.bereich.start || ende !== this.bereich.end;
        this.bereich = { start, end: ende };
        this.versatz = this.oberkante(start);
        this.sichtbareEintraege = this._items.slice(start, ende).map((item, i) => ({ item, index: start + i, hoehe: this.hoeheVon(start + i) }));
        if (rendern) {
            // In der Zone rendern, damit Event-Listener im Zeilen-Template eine Change Detection ausloesen
            this.ngZone.run(() => this.cdr.detectChanges());
        }
        else {
            this.cdr.markForCheck();
        }
        if (bereichGeaendert) {
            // Asynchron, damit der Aufrufer seinen Zustand nicht waehrend einer laufenden Change Detection aendert
            const bereich = this.renderedRange;
            Promise.resolve().then(() => this.ngZone.run(() => this.visibleRangeChange.emit(bereich)));
        }
    }
    /** @nocollapse */ static ɵfac = function MrdVirtualScrollComponent_Factory(t) { return new (t || MrdVirtualScrollComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdVirtualScrollComponent, selectors: [["mrd-virtual-scroll"]], contentQueries: function MrdVirtualScrollComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, MrdVirtualScrollItemDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentItem = _t.first);
        } }, hostVars: 2, hostBindings: function MrdVirtualScrollComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("height", ctx.automatischeHoehe, "px");
        } }, inputs: { itemTemplate: "itemTemplate", items: "items", itemSize: ["itemSize", "itemSize", itemSizeAttribute], buffer: ["buffer", "buffer", numberAttribute], trackBy: "trackBy", maxHeight: ["maxHeight", "maxHeight", numberAttribute] }, outputs: { visibleRangeChange: "visibleRangeChange" }, features: [i0.ɵɵInputTransformsFeature], decls: 3, vars: 6, consts: [[1, "mrd-virtual-scroll-platzhalter"], [1, "mrd-virtual-scroll-inhalt"], ["class", "mrd-virtual-scroll-zeile", 3, "height", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mrd-virtual-scroll-zeile"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function MrdVirtualScrollComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtemplate(2, MrdVirtualScrollComponent_div_2_Template, 2, 7, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleProp("height", ctx.gesamtHoehe, "px");
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("transform", "translateY(" + ctx.versatz + "px)");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.sichtbareEintraege)("ngForTrackBy", ctx.eintragTrackBy);
        } }, dependencies: [i1.NgForOf, i1.NgTemplateOutlet], styles: ["[_nghost-%COMP%]{display:block;position:relative;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}.mrd-virtual-scroll-platzhalter[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:1px;visibility:hidden;pointer-events:none}.mrd-virtual-scroll-inhalt[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;will-change:transform}.mrd-virtual-scroll-zeile[_ngcontent-%COMP%]{box-sizing:border-box;overflow:hidden}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdVirtualScrollComponent, [{
        type: Component,
        args: [{ selector: 'mrd-virtual-scroll', host: {
                    '[style.height.px]': 'automatischeHoehe'
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-virtual-scroll-platzhalter\" [style.height.px]=\"gesamtHoehe\"></div>\n<div class=\"mrd-virtual-scroll-inhalt\" [style.transform]=\"'translateY(' + versatz + 'px)'\">\n  <div class=\"mrd-virtual-scroll-zeile\" *ngFor=\"let eintrag of sichtbareEintraege; trackBy: eintragTrackBy\" [style.height.px]=\"eintrag.hoehe\">\n    <ng-container *ngTemplateOutlet=\"template; context: {$implicit: eintrag.item, index: eintrag.index}\"></ng-container>\n  </div>\n</div>\n", styles: [":host{display:block;position:relative;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}.mrd-virtual-scroll-platzhalter{position:absolute;top:0;left:0;width:1px;visibility:hidden;pointer-events:none}.mrd-virtual-scroll-inhalt{position:absolute;top:0;left:0;width:100%;will-change:transform}.mrd-virtual-scroll-zeile{box-sizing:border-box;overflow:hidden}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }]; }, { contentItem: [{
            type: ContentChild,
            args: [MrdVirtualScrollItemDirective]
        }], itemTemplate: [{
            type: Input
        }], items: [{
            type: Input
        }], itemSize: [{
            type: Input,
            args: [{ transform: itemSizeAttribute }]
        }], buffer: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], trackBy: [{
            type: Input
        }], maxHeight: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], visibleRangeChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXZpcnR1YWwtc2Nyb2xsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtdmlydHVhbC1zY3JvbGwvY29tcG9uZW50cy9tcmQtdmlydHVhbC1zY3JvbGwvbXJkLXZpcnR1YWwtc2Nyb2xsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtdmlydHVhbC1zY3JvbGwvY29tcG9uZW50cy9tcmQtdmlydHVhbC1zY3JvbGwvbXJkLXZpcnR1YWwtc2Nyb2xsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxZQUFZLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFnQyxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOU4sT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFekcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7O0lDRDdELHdCQUFvSDs7OztJQUR0SCw4QkFBNEk7SUFDMUksa0dBQW9IO0lBQ3RILGlCQUFNOzs7O0lBRm9HLGdEQUFpQztJQUMxSCxlQUE0QjtJQUE1QixrREFBNEIsMEZBQUE7O0FEUy9DOzs7O0dBSUc7QUFVSCxNQUFNLE9BQU8seUJBQXlCO0lBOEQxQjtJQUNBO0lBQ0E7SUE5RDJDLFdBQVcsQ0FBbUM7SUFFbkcsMEdBQTBHO0lBQzFGLFlBQVksQ0FBOEM7SUFFMUUsSUFBb0IsS0FBSyxDQUFDLEtBQVU7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ08sTUFBTSxHQUFRLEVBQUUsQ0FBQztJQUV6Qjs7O09BR0c7SUFDSCxJQUFrRCxRQUFRLENBQUMsS0FBa0M7UUFDM0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLElBQUksVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ08sU0FBUyxHQUFnQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUV0Rjs7O09BR0c7SUFDSyxPQUFPLEdBQWlCLElBQUksQ0FBQztJQUVyQyx3RkFBd0Y7SUFDNUMsTUFBTSxHQUFXLENBQUMsQ0FBQztJQUUvQyxPQUFPLENBQXFCO0lBRTVDLGlIQUFpSDtJQUNyRSxTQUFTLENBQVM7SUFFN0Msa0JBQWtCLEdBQXdDLElBQUksWUFBWSxFQUF5QixDQUFDO0lBRTlHLGtCQUFrQixHQUFpQyxFQUFFLENBQUM7SUFDdEQsT0FBTyxHQUFXLENBQUMsQ0FBQztJQUNwQixXQUFXLEdBQVcsQ0FBQyxDQUFDO0lBRXZCLE9BQU8sR0FBMEIsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUNwRCxhQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLGNBQWMsR0FBVyxJQUFJLENBQUM7SUFDOUIsY0FBYyxDQUFpQjtJQUN0QixjQUFjLEdBQUcsR0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBRW5ELGNBQWMsR0FBZ0QsQ0FBQyxDQUFTLEVBQUUsT0FBbUMsRUFBRSxFQUFFO1FBQy9ILE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztJQUNqRixDQUFDLENBQUM7SUFFRixZQUNVLFVBQW1DLEVBQ25DLEdBQXNCLEVBQ3RCLE1BQWM7UUFGZCxlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3JCLENBQUM7SUFFSixlQUFlO1FBQ2IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDOUMsMkhBQTJIO1FBQzNILElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1lBQ3pFLElBQUksT0FBTyxjQUFjLEtBQUssV0FBVyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO2dCQUNyRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0QztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsQ0FBQztRQUNsQyxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxFQUFFO1lBQ2hDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDO0lBQzVELENBQUM7SUFFRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDaEYsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixPQUFPLEVBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELCtEQUErRDtJQUN4RCxhQUFhLENBQUMsS0FBYSxFQUFFLFdBQXFDLFNBQVMsRUFBRSxXQUEyQixNQUFNO1FBQ25ILElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDNUMsT0FBTztTQUNSO1FBQ0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDOUMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUNuQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLFdBQVcsQ0FBQztRQUNqQyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQzdCLFFBQVEsUUFBUSxFQUFFO1lBQ2hCLEtBQUssT0FBTztnQkFDVixJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNaLE1BQU07WUFDUixLQUFLLEtBQUs7Z0JBQ1IsSUFBSSxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hDLE1BQU07WUFDUjtnQkFDRSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFO29CQUM1QixJQUFJLEdBQUcsSUFBSSxDQUFDO2lCQUNiO3FCQUFNLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSyxFQUFFO29CQUM1QyxJQUFJLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztpQkFDdEI7U0FDSjtRQUNELElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDN0QsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksaUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLElBQUksT0FBTyxPQUFPLEtBQUssVUFBVSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLE9BQU87U0FDUjtRQUNELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xDLE1BQU0sT0FBTyxHQUFHLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9CLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzVFO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVPLFNBQVMsQ0FBQyxLQUFhO1FBQzdCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFJLElBQUksQ0FBQyxTQUFvQixDQUFDO0lBQ2pGLENBQUM7SUFFTyxRQUFRLENBQUMsS0FBYTtRQUM1QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFtQixDQUFDO0lBQ2pHLENBQUM7SUFFRCwyRUFBMkU7SUFDbkUsUUFBUSxDQUFDLENBQVM7UUFDeEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBSSxJQUFJLENBQUMsU0FBb0IsQ0FBQyxDQUFDLENBQUM7U0FDekU7UUFDRCwwREFBMEQ7UUFDMUQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN4QixPQUFPLEtBQUssR0FBRyxNQUFNLEVBQUU7WUFDckIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QixLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ0wsTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7YUFDcEI7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVPLGFBQWE7UUFDbkIsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLElBQUksRUFBRTtZQUNoQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLHFCQUFxQixDQUFDLEdBQUcsRUFBRTtZQUMvQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNLLGdCQUFnQixDQUFDLFNBQWtCLEVBQUUsT0FBZ0I7UUFDM0QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDcEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7WUFDOUMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUNuQywyRkFBMkY7WUFDM0YsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNyRixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ2pELEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwRDtRQUVELElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUMzRSxPQUFPO1NBQ1I7UUFDRCxNQUFNLGdCQUFnQixHQUFHLEtBQUssS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDbkYsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBTyxFQUFFLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbEosSUFBSSxPQUFPLEVBQUU7WUFDWCwrRkFBK0Y7WUFDL0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQix1R0FBdUc7WUFDdkcsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNuQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVGO0lBQ0gsQ0FBQztzR0E3T1UseUJBQXlCOzRGQUF6Qix5QkFBeUI7d0NBRXRCLDZCQUE2Qjs7Ozs7O3dHQW1CeEIsaUJBQWlCLGdDQWlCakIsZUFBZSw2REFLZixlQUFlO1lDckVwQyx5QkFBa0Y7WUFDbEYsOEJBQTJGO1lBQ3pGLDBFQUVNO1lBQ1IsaUJBQU07O1lBTHNDLCtDQUErQjtZQUNwQyxlQUFtRDtZQUFuRCxnRUFBbUQ7WUFDOUIsZUFBdUI7WUFBdkIsZ0RBQXVCLG9DQUFBOzs7dUZEd0J0RSx5QkFBeUI7Y0FUckMsU0FBUzsyQkFDRSxvQkFBb0IsUUFHeEI7b0JBQ0osbUJBQW1CLEVBQUUsbUJBQW1CO2lCQUN6QyxtQkFDZ0IsdUJBQXVCLENBQUMsTUFBTTtrSEFJTSxXQUFXO2tCQUEvRCxZQUFZO21CQUFDLDZCQUE2QjtZQUczQixZQUFZO2tCQUEzQixLQUFLO1lBRWMsS0FBSztrQkFBeEIsS0FBSztZQWM0QyxRQUFRO2tCQUF6RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFDO1lBaUJPLE1BQU07a0JBQWpELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFDO1lBRW5CLE9BQU87a0JBQXRCLEtBQUs7WUFHc0MsU0FBUztrQkFBcEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUM7WUFFbEIsa0JBQWtCO2tCQUFsQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE91dHB1dCwgVGVtcGxhdGVSZWYsIFRyYWNrQnlGdW5jdGlvbiwgbnVtYmVyQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNcmRWaXJ0dWFsU2Nyb2xsSXRlbURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9kaXJlY3RpdmUvbXJkLXZpcnR1YWwtc2Nyb2xsLWl0ZW0uZGlyZWN0aXZlJztcbmltcG9ydCB7IE1yZFZpcnR1YWxTY3JvbGxJdGVtQ29udGV4dCwgTXJkVmlydHVhbFNjcm9sbEl0ZW1TaXplLCBNcmRWaXJ0dWFsU2Nyb2xsUG9zaXRpb24sIE1yZFZpcnR1YWxTY3JvbGxSYW5nZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9tb2RlbC9tcmQtdmlydHVhbC1zY3JvbGwubW9kZWwnO1xuaW1wb3J0IHsgaXRlbVNpemVBdHRyaWJ1dGUgfSBmcm9tICcuLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9pdGVtLXNpemUtdHJhbnNmb3JtJztcbmltcG9ydCB7IENvbmZpZ1V0aWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb25maWcudXRpbCc7XG5cbmludGVyZmFjZSBNcmRWaXJ0dWFsU2Nyb2xsRWludHJhZzxUPiB7XG4gIGl0ZW06IFQ7XG4gIGluZGV4OiBudW1iZXI7XG4gIGhvZWhlOiBudW1iZXI7XG59XG5cbi8qKlxuICogUmVuZGVydCB2b24gZWluZXIgbGFuZ2VuIExpc3RlIG51ciBkaWUgc2ljaHRiYXJlbiBaZWlsZW4gKHBsdXMgUHVmZmVyKS5cbiAqIFZvcmF1c3NldHp1bmdlbjogZGllIEhvZWhlIGplZGVyIFplaWxlIGlzdCB2b3JhYiBiZWthbm50IChgaXRlbVNpemVgIGFscyBaYWhsIG9kZXIgRnVua3Rpb24gamUgRWludHJhZylcbiAqIHVuZCBkYXMgRWxlbWVudCBzZWxic3QgaGF0IGVpbmUgZmVzdGUgSG9laGUgKHouIEIuIHVlYmVyIGBoZWlnaHRgIG9kZXIgYGZsZXg6IDFgKSBvZGVyIGBtYXhIZWlnaHRgIGlzdCBnZXNldHp0LlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtcmQtdmlydHVhbC1zY3JvbGwnLFxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLXZpcnR1YWwtc2Nyb2xsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLXZpcnR1YWwtc2Nyb2xsLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLmhlaWdodC5weF0nOiAnYXV0b21hdGlzY2hlSG9laGUnXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE1yZFZpcnR1YWxTY3JvbGxDb21wb25lbnQ8VCA9IGFueT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBDb250ZW50Q2hpbGQoTXJkVmlydHVhbFNjcm9sbEl0ZW1EaXJlY3RpdmUpIHByaXZhdGUgY29udGVudEl0ZW06IE1yZFZpcnR1YWxTY3JvbGxJdGVtRGlyZWN0aXZlPFQ+O1xuXG4gIC8qKiBBbHRlcm5hdGl2IHp1bSBDb250ZW50LVRlbXBsYXRlLCB6LiBCLiB3ZW5uIGVpbmUgdW1zY2hsaWVzc2VuZGUgS29tcG9uZW50ZSBkYXMgVGVtcGxhdGUgZHVyY2hyZWljaHQgKi9cbiAgQElucHV0KCkgcHVibGljIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8TXJkVmlydHVhbFNjcm9sbEl0ZW1Db250ZXh0PFQ+PjtcblxuICBASW5wdXQoKSBwdWJsaWMgc2V0IGl0ZW1zKHZhbHVlOiBUW10pIHtcbiAgICB0aGlzLl9pdGVtcyA9IHZhbHVlIHx8IFtdO1xuICAgIHRoaXMub2Zmc2V0c0JlcmVjaG5lbigpO1xuICAgIHRoaXMuYmVyZWljaEJlcmVjaG5lbih0cnVlLCBmYWxzZSk7XG4gIH1cbiAgcHVibGljIGdldCBpdGVtcygpOiBUW10ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxuICBwcml2YXRlIF9pdGVtczogVFtdID0gW107XG5cbiAgLyoqXG4gICAqIFplaWxlbmhvZWhlIGluIHB4IGZ1ZXIgYWxsZSBFaW50cmFlZ2Ugb2RlciBgKGl0ZW0sIGluZGV4KSA9PiBweGAgamUgRWludHJhZy5cbiAgICogQWVuZGVydCBzaWNoIGRhcyBFcmdlYm5pcyBkZXIgRnVua3Rpb24gZnVlciB2b3JoYW5kZW5lIEl0ZW1zLCBkYW5hY2ggYGNoZWNrVmlld3BvcnRTaXplKClgIGF1ZnJ1ZmVuLlxuICAgKi9cbiAgQElucHV0KHt0cmFuc2Zvcm06IGl0ZW1TaXplQXR0cmlidXRlfSkgcHVibGljIHNldCBpdGVtU2l6ZSh2YWx1ZTogTXJkVmlydHVhbFNjcm9sbEl0ZW1TaXplPFQ+KSB7XG4gICAgdGhpcy5faXRlbVNpemUgPSB2YWx1ZSA/PyBDb25maWdVdGlsLmdldENvbmZpZygpLmxpc3QuaXRlbVNpemU7XG4gICAgdGhpcy5vZmZzZXRzQmVyZWNobmVuKCk7XG4gICAgdGhpcy5iZXJlaWNoQmVyZWNobmVuKHRydWUsIGZhbHNlKTtcbiAgfVxuICBwdWJsaWMgZ2V0IGl0ZW1TaXplKCk6IE1yZFZpcnR1YWxTY3JvbGxJdGVtU2l6ZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1TaXplO1xuICB9XG4gIHByaXZhdGUgX2l0ZW1TaXplOiBNcmRWaXJ0dWFsU2Nyb2xsSXRlbVNpemU8VD4gPSBDb25maWdVdGlsLmdldENvbmZpZygpLmxpc3QuaXRlbVNpemU7XG5cbiAgLyoqXG4gICAqIE51ciBiZWkgYGl0ZW1TaXplYCBhbHMgRnVua3Rpb246IG9mZnNldHNbaV0gaXN0IGRpZSBPYmVya2FudGUgdm9uIEVpbnRyYWcgaSwgb2Zmc2V0c1thbnphaGxdIGRpZSBHZXNhbXRob2VoZS5cbiAgICogQmVpIGZlc3RlciBIb2VoZSB3aXJkIGdlcmVjaG5ldCBzdGF0dCBnZXNwZWljaGVydC5cbiAgICovXG4gIHByaXZhdGUgb2Zmc2V0czogRmxvYXQ2NEFycmF5ID0gbnVsbDtcblxuICAvKiogQW56YWhsIHp1c2FldHpsaWNoIGdlcmVuZGVydGVyIFplaWxlbiBvYmVyLSB1bmQgdW50ZXJoYWxiIGRlcyBzaWNodGJhcmVuIEJlcmVpY2hzICovXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgYnVmZmVyOiBudW1iZXIgPSA1O1xuXG4gIEBJbnB1dCgpIHB1YmxpYyB0cmFja0J5OiBUcmFja0J5RnVuY3Rpb248VD47XG5cbiAgLyoqIEhvZWhlIGluIHB4LCBiaXMgenUgZGVyIGRhcyBFbGVtZW50IG1pdCBzZWluZW0gSW5oYWx0IHdhZWNoc3Q7IG9obmUgQW5nYWJlIGJlc3RpbW10IGRlciBBdWZydWZlciBkaWUgSG9laGUgKi9cbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBtYXhIZWlnaHQ6IG51bWJlcjtcblxuICBAT3V0cHV0KCkgcHVibGljIHZpc2libGVSYW5nZUNoYW5nZTogRXZlbnRFbWl0dGVyPE1yZFZpcnR1YWxTY3JvbGxSYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1yZFZpcnR1YWxTY3JvbGxSYW5nZT4oKTtcblxuICBwdWJsaWMgc2ljaHRiYXJlRWludHJhZWdlOiBNcmRWaXJ0dWFsU2Nyb2xsRWludHJhZzxUPltdID0gW107XG4gIHB1YmxpYyB2ZXJzYXR6OiBudW1iZXIgPSAwO1xuICBwdWJsaWMgZ2VzYW10SG9laGU6IG51bWJlciA9IDA7XG5cbiAgcHJpdmF0ZSBiZXJlaWNoOiBNcmRWaXJ0dWFsU2Nyb2xsUmFuZ2UgPSB7c3RhcnQ6IDAsIGVuZDogMH07XG4gIHByaXZhdGUgaW5pdGlhbGlzaWVydDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGFuaW1hdGlvbkZyYW1lOiBudW1iZXIgPSBudWxsO1xuICBwcml2YXRlIHJlc2l6ZU9ic2VydmVyOiBSZXNpemVPYnNlcnZlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBzY3JvbGxMaXN0ZW5lciA9ICgpOiB2b2lkID0+IHRoaXMuYmVyZWljaFBsYW5lbigpO1xuXG4gIHB1YmxpYyByZWFkb25seSBlaW50cmFnVHJhY2tCeTogVHJhY2tCeUZ1bmN0aW9uPE1yZFZpcnR1YWxTY3JvbGxFaW50cmFnPFQ+PiA9IChfOiBudW1iZXIsIGVpbnRyYWc6IE1yZFZpcnR1YWxTY3JvbGxFaW50cmFnPFQ+KSA9PiB7XG4gICAgcmV0dXJuIHRoaXMudHJhY2tCeSA/IHRoaXMudHJhY2tCeShlaW50cmFnLmluZGV4LCBlaW50cmFnLml0ZW0pIDogZWludHJhZy5pdGVtO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgLy8gU2Nyb2xsLSB1bmQgUmVzaXplLUVyZWlnbmlzc2UgYXVzc2VyaGFsYiBkZXIgWm9uZSwgZGFtaXQgbmljaHQgamVkZXMgU2Nyb2xsLUZyYW1lIGVpbmUgZ2xvYmFsZSBDaGFuZ2UgRGV0ZWN0aW9uIGF1c2xvZXN0XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbExpc3RlbmVyLCB7cGFzc2l2ZTogdHJ1ZX0pO1xuICAgICAgaWYgKHR5cGVvZiBSZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB0aGlzLmJlcmVpY2hQbGFuZW4oKSk7XG4gICAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmluaXRpYWxpc2llcnQgPSB0cnVlO1xuICAgIHRoaXMuYmVyZWljaEJlcmVjaG5lbih0cnVlLCB0cnVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsTGlzdGVuZXIpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICBpZiAodGhpcy5hbmltYXRpb25GcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB0ZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxNcmRWaXJ0dWFsU2Nyb2xsSXRlbUNvbnRleHQ8VD4+IHtcbiAgICByZXR1cm4gdGhpcy5pdGVtVGVtcGxhdGUgfHwgdGhpcy5jb250ZW50SXRlbT8udGVtcGxhdGVSZWY7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGF1dG9tYXRpc2NoZUhvZWhlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubWF4SGVpZ2h0ID4gMCA/IE1hdGgubWluKHRoaXMuZ2VzYW10SG9laGUsIHRoaXMubWF4SGVpZ2h0KSA6IG51bGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJlbmRlcmVkUmFuZ2UoKTogTXJkVmlydHVhbFNjcm9sbFJhbmdlIHtcbiAgICByZXR1cm4gey4uLnRoaXMuYmVyZWljaH07XG4gIH1cblxuICAvKiogU2Nyb2xsdCBzbywgZGFzcyBkZXIgRWludHJhZyBtaXQgZGVtIEluZGV4IHNpY2h0YmFyIGlzdC4gKi9cbiAgcHVibGljIHNjcm9sbFRvSW5kZXgoaW5kZXg6IG51bWJlciwgcG9zaXRpb246IE1yZFZpcnR1YWxTY3JvbGxQb3NpdGlvbiA9ICduZWFyZXN0JywgYmVoYXZpb3I6IFNjcm9sbEJlaGF2aW9yID0gJ2F1dG8nKTogdm9pZCB7XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLl9pdGVtcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGhvZWhlID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgY29uc3Qgb2JlbiA9IHRoaXMub2JlcmthbnRlKGluZGV4KTtcbiAgICBjb25zdCB6ZWlsZW5ob2VoZSA9IHRoaXMuaG9laGVWb24oaW5kZXgpO1xuICAgIGNvbnN0IHVudGVuID0gb2JlbiArIHplaWxlbmhvZWhlO1xuICAgIGxldCB6aWVsID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICB6aWVsID0gb2JlbjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlbmQnOlxuICAgICAgICB6aWVsID0gdW50ZW4gLSBob2VoZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICB6aWVsID0gb2JlbiAtIChob2VoZSAtIHplaWxlbmhvZWhlKSAvIDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKG9iZW4gPCBlbGVtZW50LnNjcm9sbFRvcCkge1xuICAgICAgICAgIHppZWwgPSBvYmVuO1xuICAgICAgICB9IGVsc2UgaWYgKHVudGVuID4gZWxlbWVudC5zY3JvbGxUb3AgKyBob2VoZSkge1xuICAgICAgICAgIHppZWwgPSB1bnRlbiAtIGhvZWhlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHppZWwgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih6aWVsLCB0aGlzLmdlc2FtdEhvZWhlIC0gaG9laGUpKTtcbiAgICBlbGVtZW50LnNjcm9sbFRvKHt0b3A6IHppZWwsIGJlaGF2aW9yfSk7XG4gIH1cblxuICAvKipcbiAgICogTmV1IGJlcmVjaG5lbiwgd2VubiBzaWNoIGRpZSBHcm9lc3NlIHZvbiBhdXNzZW4gZ2VhZW5kZXJ0IGhhdCwgb2huZSBkYXNzIGRlciBSZXNpemVPYnNlcnZlciBlcyBiZW1lcmt0LFxuICAgKiBvZGVyIHdlbm4gYGl0ZW1TaXplYCBhbHMgRnVua3Rpb24gZnVlciB2b3JoYW5kZW5lIEl0ZW1zIGFuZGVyZSBIb2VoZW4gbGllZmVydC5cbiAgICovXG4gIHB1YmxpYyBjaGVja1ZpZXdwb3J0U2l6ZSgpOiB2b2lkIHtcbiAgICB0aGlzLm9mZnNldHNCZXJlY2huZW4oKTtcbiAgICB0aGlzLmJlcmVpY2hCZXJlY2huZW4odHJ1ZSwgdHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIG9mZnNldHNCZXJlY2huZW4oKTogdm9pZCB7XG4gICAgY29uc3QgZ3JvZXNzZSA9IHRoaXMuX2l0ZW1TaXplO1xuICAgIGlmICh0eXBlb2YgZ3JvZXNzZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5vZmZzZXRzID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYW56YWhsID0gdGhpcy5faXRlbXMubGVuZ3RoO1xuICAgIGNvbnN0IG9mZnNldHMgPSBuZXcgRmxvYXQ2NEFycmF5KGFuemFobCArIDEpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW56YWhsOyBpKyspIHtcbiAgICAgIG9mZnNldHNbaSArIDFdID0gb2Zmc2V0c1tpXSArIE1hdGgubWF4KDAsIGdyb2Vzc2UodGhpcy5faXRlbXNbaV0sIGkpIHx8IDApO1xuICAgIH1cbiAgICB0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuICB9XG5cbiAgcHJpdmF0ZSBvYmVya2FudGUoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0cyA/IHRoaXMub2Zmc2V0c1tpbmRleF0gOiBpbmRleCAqICh0aGlzLl9pdGVtU2l6ZSBhcyBudW1iZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBob2VoZVZvbihpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRzID8gdGhpcy5vZmZzZXRzW2luZGV4ICsgMV0gLSB0aGlzLm9mZnNldHNbaW5kZXhdIDogdGhpcy5faXRlbVNpemUgYXMgbnVtYmVyO1xuICB9XG5cbiAgLyoqIEluZGV4IGRlcyBFaW50cmFncywgZGVyIGRpZSBQb3NpdGlvbiB5IChweCBhYiBMaXN0ZW5hbmZhbmcpIGVudGhhZWx0ICovXG4gIHByaXZhdGUgaW5kZXhCZWkoeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBhbnphaGwgPSB0aGlzLl9pdGVtcy5sZW5ndGg7XG4gICAgaWYgKGFuemFobCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmICghdGhpcy5vZmZzZXRzKSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4oYW56YWhsIC0gMSwgTWF0aC5mbG9vcih5IC8gKHRoaXMuX2l0ZW1TaXplIGFzIG51bWJlcikpKTtcbiAgICB9XG4gICAgLy8gQmluYWVyc3VjaGUgbmFjaCBkZW0gbGV0enRlbiBFaW50cmFnIG1pdCBPYmVya2FudGUgPD0geVxuICAgIGxldCBsaW5rcyA9IDA7XG4gICAgbGV0IHJlY2h0cyA9IGFuemFobCAtIDE7XG4gICAgd2hpbGUgKGxpbmtzIDwgcmVjaHRzKSB7XG4gICAgICBjb25zdCBtaXR0ZSA9IChsaW5rcyArIHJlY2h0cyArIDEpID4+IDE7XG4gICAgICBpZiAodGhpcy5vZmZzZXRzW21pdHRlXSA8PSB5KSB7XG4gICAgICAgIGxpbmtzID0gbWl0dGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWNodHMgPSBtaXR0ZSAtIDE7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsaW5rcztcbiAgfVxuXG4gIHByaXZhdGUgYmVyZWljaFBsYW5lbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hbmltYXRpb25GcmFtZSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuICAgICAgdGhpcy5iZXJlaWNoQmVyZWNobmVuKGZhbHNlLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gZXJ6d2luZ2VuIEF1Y2ggbmV1IGF1ZmJhdWVuLCB3ZW5uIHNpY2ggZGVyIEJlcmVpY2ggbmljaHQgZ2VhZW5kZXJ0IGhhdCAoei4gQi4gbmV1ZSBJdGVtcylcbiAgICogQHBhcmFtIHJlbmRlcm4gU29mb3J0IHJlbmRlcm47IGltIElucHV0LVNldHRlciBuaWNodCBub2V0aWcsIHdlaWwgZGllIENoYW5nZSBEZXRlY3Rpb24gb2huZWhpbiBmb2xndFxuICAgKi9cbiAgcHJpdmF0ZSBiZXJlaWNoQmVyZWNobmVuKGVyendpbmdlbjogYm9vbGVhbiwgcmVuZGVybjogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IGFuemFobCA9IHRoaXMuX2l0ZW1zLmxlbmd0aDtcbiAgICB0aGlzLmdlc2FtdEhvZWhlID0gdGhpcy5vYmVya2FudGUoYW56YWhsKTtcblxuICAgIGxldCBzdGFydCA9IDA7XG4gICAgbGV0IGVuZGUgPSBNYXRoLm1pbihhbnphaGwsIHRoaXMuYnVmZmVyICogMik7XG4gICAgaWYgKHRoaXMuaW5pdGlhbGlzaWVydCAmJiBhbnphaGwgPiAwKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBjb25zdCBob2VoZSA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgLy8gc2Nyb2xsVG9wIGlzdCBuYWNoIGRlbSBWZXJrbGVpbmVybiBkZXIgTGlzdGUgYmlzIHp1bSBuYWVjaHN0ZW4gTGF5b3V0IG5vY2ggZGVyIGFsdGUgV2VydFxuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oZWxlbWVudC5zY3JvbGxUb3AsIHRoaXMuZ2VzYW10SG9laGUgLSBob2VoZSkpO1xuICAgICAgY29uc3QgZXJzdGVyID0gdGhpcy5pbmRleEJlaShzY3JvbGxUb3ApO1xuICAgICAgY29uc3QgbGV0enRlciA9IHRoaXMuaW5kZXhCZWkoc2Nyb2xsVG9wICsgaG9laGUpO1xuICAgICAgc3RhcnQgPSBNYXRoLm1heCgwLCBlcnN0ZXIgLSB0aGlzLmJ1ZmZlcik7XG4gICAgICBlbmRlID0gTWF0aC5taW4oYW56YWhsLCBsZXR6dGVyICsgMSArIHRoaXMuYnVmZmVyKTtcbiAgICB9XG5cbiAgICBpZiAoIWVyendpbmdlbiAmJiBzdGFydCA9PT0gdGhpcy5iZXJlaWNoLnN0YXJ0ICYmIGVuZGUgPT09IHRoaXMuYmVyZWljaC5lbmQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYmVyZWljaEdlYWVuZGVydCA9IHN0YXJ0ICE9PSB0aGlzLmJlcmVpY2guc3RhcnQgfHwgZW5kZSAhPT0gdGhpcy5iZXJlaWNoLmVuZDtcbiAgICB0aGlzLmJlcmVpY2ggPSB7c3RhcnQsIGVuZDogZW5kZX07XG4gICAgdGhpcy52ZXJzYXR6ID0gdGhpcy5vYmVya2FudGUoc3RhcnQpO1xuICAgIHRoaXMuc2ljaHRiYXJlRWludHJhZWdlID0gdGhpcy5faXRlbXMuc2xpY2Uoc3RhcnQsIGVuZGUpLm1hcCgoaXRlbTogVCwgaTogbnVtYmVyKSA9PiAoe2l0ZW0sIGluZGV4OiBzdGFydCArIGksIGhvZWhlOiB0aGlzLmhvZWhlVm9uKHN0YXJ0ICsgaSl9KSk7XG5cbiAgICBpZiAocmVuZGVybikge1xuICAgICAgLy8gSW4gZGVyIFpvbmUgcmVuZGVybiwgZGFtaXQgRXZlbnQtTGlzdGVuZXIgaW0gWmVpbGVuLVRlbXBsYXRlIGVpbmUgQ2hhbmdlIERldGVjdGlvbiBhdXNsb2VzZW5cbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgaWYgKGJlcmVpY2hHZWFlbmRlcnQpIHtcbiAgICAgIC8vIEFzeW5jaHJvbiwgZGFtaXQgZGVyIEF1ZnJ1ZmVyIHNlaW5lbiBadXN0YW5kIG5pY2h0IHdhZWhyZW5kIGVpbmVyIGxhdWZlbmRlbiBDaGFuZ2UgRGV0ZWN0aW9uIGFlbmRlcnRcbiAgICAgIGNvbnN0IGJlcmVpY2ggPSB0aGlzLnJlbmRlcmVkUmFuZ2U7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLnZpc2libGVSYW5nZUNoYW5nZS5lbWl0KGJlcmVpY2gpKSk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibXJkLXZpcnR1YWwtc2Nyb2xsLXBsYXR6aGFsdGVyXCIgW3N0eWxlLmhlaWdodC5weF09XCJnZXNhbXRIb2VoZVwiPjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1yZC12aXJ0dWFsLXNjcm9sbC1pbmhhbHRcIiBbc3R5bGUudHJhbnNmb3JtXT1cIid0cmFuc2xhdGVZKCcgKyB2ZXJzYXR6ICsgJ3B4KSdcIj5cbiAgPGRpdiBjbGFzcz1cIm1yZC12aXJ0dWFsLXNjcm9sbC16ZWlsZVwiICpuZ0Zvcj1cImxldCBlaW50cmFnIG9mIHNpY2h0YmFyZUVpbnRyYWVnZTsgdHJhY2tCeTogZWludHJhZ1RyYWNrQnlcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cImVpbnRyYWcuaG9laGVcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGU7IGNvbnRleHQ6IHskaW1wbGljaXQ6IGVpbnRyYWcuaXRlbSwgaW5kZXg6IGVpbnRyYWcuaW5kZXh9XCI+PC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=