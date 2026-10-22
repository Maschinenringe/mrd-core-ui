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
    /**
     * Tatsaechlich sichtbare Zeilen ohne Puffer (auch angeschnittene), z. B. um eine ausgewaehlte Zeile anzuheften,
     * sobald sie herausgescrollt ist. `visibleRangeChange` meldet dagegen den gerenderten Bereich inklusive Puffer.
     */
    sichtbarerBereichChange = new EventEmitter();
    sichtbareEintraege = [];
    versatz = 0;
    gesamtHoehe = 0;
    bereich = { start: 0, end: 0 };
    sichtbarerBereich = { start: 0, end: 0 };
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
    sichtbarenBereichSetzen(bereich) {
        if (bereich.start === this.sichtbarerBereich.start && bereich.end === this.sichtbarerBereich.end) {
            return;
        }
        this.sichtbarerBereich = bereich;
        Promise.resolve().then(() => this.ngZone.run(() => this.sichtbarerBereichChange.emit({ ...bereich })));
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
            // Die Zeile ab der Unterkante (scrollTop + hoehe) ist nicht mehr sichtbar, deshalb ein Pixel davor
            this.sichtbarenBereichSetzen({ start: erster, end: this.indexBei(Math.max(scrollTop, scrollTop + hoehe - 1)) + 1 });
        }
        else if (this.initialisiert) {
            this.sichtbarenBereichSetzen({ start: 0, end: 0 });
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
        } }, inputs: { itemTemplate: "itemTemplate", items: "items", itemSize: ["itemSize", "itemSize", itemSizeAttribute], buffer: ["buffer", "buffer", numberAttribute], trackBy: "trackBy", maxHeight: ["maxHeight", "maxHeight", numberAttribute] }, outputs: { visibleRangeChange: "visibleRangeChange", sichtbarerBereichChange: "sichtbarerBereichChange" }, features: [i0.ɵɵInputTransformsFeature], decls: 3, vars: 6, consts: [[1, "mrd-virtual-scroll-platzhalter"], [1, "mrd-virtual-scroll-inhalt"], ["class", "mrd-virtual-scroll-zeile", 3, "height", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mrd-virtual-scroll-zeile"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function MrdVirtualScrollComponent_Template(rf, ctx) { if (rf & 1) {
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
        }], sichtbarerBereichChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXZpcnR1YWwtc2Nyb2xsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtdmlydHVhbC1zY3JvbGwvY29tcG9uZW50cy9tcmQtdmlydHVhbC1zY3JvbGwvbXJkLXZpcnR1YWwtc2Nyb2xsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtdmlydHVhbC1zY3JvbGwvY29tcG9uZW50cy9tcmQtdmlydHVhbC1zY3JvbGwvbXJkLXZpcnR1YWwtc2Nyb2xsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxZQUFZLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFnQyxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOU4sT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFekcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7O0lDRDdELHdCQUFvSDs7OztJQUR0SCw4QkFBNEk7SUFDMUksa0dBQW9IO0lBQ3RILGlCQUFNOzs7O0lBRm9HLGdEQUFpQztJQUMxSCxlQUE0QjtJQUE1QixrREFBNEIsMEZBQUE7O0FEUy9DOzs7O0dBSUc7QUFVSCxNQUFNLE9BQU8seUJBQXlCO0lBcUUxQjtJQUNBO0lBQ0E7SUFyRTJDLFdBQVcsQ0FBbUM7SUFFbkcsMEdBQTBHO0lBQzFGLFlBQVksQ0FBOEM7SUFFMUUsSUFBb0IsS0FBSyxDQUFDLEtBQVU7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLElB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QUVNO1lBQ1IsaUJBQU07O1lBTHNDLCtDQUErQjtZQUNwQyxlQUFtRDtZQUFuRCxnRUFBbUQ7WUFDOUIsZUFBdUI7WUFBdkIsZ0RBQXVCLG9DQUFBOzs7dUZEd0J0RSx5QkFBeUI7Y0FUckMsU0FBUzsyQkFDRSxvQkFBb0IsUUFHeEI7b0JBQ0osbUJBQW1CLEVBQUUsbUJBQW1CO2lCQUN6QyxtQkFDZ0IsdUJBQXVCLENBQUMsTUFBTTtrSEFJTSxXQUFXO2tCQUEvRCxZQUFZO21CQUFDLDZCQUE2QjtZQUczQixZQUFZO2tCQUEzQixLQUFLO1lBRWMsS0FBSztrQkFBeEIsS0FBSztZQWM0QyxRQUFRO2tCQUF6RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFDO1lBaUJPLE1BQU07a0JBQWpELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFDO1lBRW5CLE9BQU87a0JBQXRCLEtBQUs7WUFHc0MsU0FBUztrQkFBcEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUM7WUFFbEIsa0JBQWtCO2tCQUFsQyxNQUFNO1lBTVUsdUJBQXVCO2tCQUF2QyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE91dHB1dCwgVGVtcGxhdGVSZWYsIFRyYWNrQnlGdW5jdGlvbiwgbnVtYmVyQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNcmRWaXJ0dWFsU2Nyb2xsSXRlbURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9kaXJlY3RpdmUvbXJkLXZpcnR1YWwtc2Nyb2xsLWl0ZW0uZGlyZWN0aXZlJztcbmltcG9ydCB7IE1yZFZpcnR1YWxTY3JvbGxJdGVtQ29udGV4dCwgTXJkVmlydHVhbFNjcm9sbEl0ZW1TaXplLCBNcmRWaXJ0dWFsU2Nyb2xsUG9zaXRpb24sIE1yZFZpcnR1YWxTY3JvbGxSYW5nZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9tb2RlbC9tcmQtdmlydHVhbC1zY3JvbGwubW9kZWwnO1xuaW1wb3J0IHsgaXRlbVNpemVBdHRyaWJ1dGUgfSBmcm9tICcuLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9pdGVtLXNpemUtdHJhbnNmb3JtJztcbmltcG9ydCB7IENvbmZpZ1V0aWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb25maWcudXRpbCc7XG5cbmludGVyZmFjZSBNcmRWaXJ0dWFsU2Nyb2xsRWludHJhZzxUPiB7XG4gIGl0ZW06IFQ7XG4gIGluZGV4OiBudW1iZXI7XG4gIGhvZWhlOiBudW1iZXI7XG59XG5cbi8qKlxuICogUmVuZGVydCB2b24gZWluZXIgbGFuZ2VuIExpc3RlIG51ciBkaWUgc2ljaHRiYXJlbiBaZWlsZW4gKHBsdXMgUHVmZmVyKS5cbiAqIFZvcmF1c3NldHp1bmdlbjogZGllIEhvZWhlIGplZGVyIFplaWxlIGlzdCB2b3JhYiBiZWthbm50IChgaXRlbVNpemVgIGFscyBaYWhsIG9kZXIgRnVua3Rpb24gamUgRWludHJhZylcbiAqIHVuZCBkYXMgRWxlbWVudCBzZWxic3QgaGF0IGVpbmUgZmVzdGUgSG9laGUgKHouIEIuIHVlYmVyIGBoZWlnaHRgIG9kZXIgYGZsZXg6IDFgKSBvZGVyIGBtYXhIZWlnaHRgIGlzdCBnZXNldHp0LlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtcmQtdmlydHVhbC1zY3JvbGwnLFxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLXZpcnR1YWwtc2Nyb2xsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLXZpcnR1YWwtc2Nyb2xsLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLmhlaWdodC5weF0nOiAnYXV0b21hdGlzY2hlSG9laGUnXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE1yZFZpcnR1YWxTY3JvbGxDb21wb25lbnQ8VCA9IGFueT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBDb250ZW50Q2hpbGQoTXJkVmlydHVhbFNjcm9sbEl0ZW1EaXJlY3RpdmUpIHByaXZhdGUgY29udGVudEl0ZW06IE1yZFZpcnR1YWxTY3JvbGxJdGVtRGlyZWN0aXZlPFQ+O1xuXG4gIC8qKiBBbHRlcm5hdGl2IHp1bSBDb250ZW50LVRlbXBsYXRlLCB6LiBCLiB3ZW5uIGVpbmUgdW1zY2hsaWVzc2VuZGUgS29tcG9uZW50ZSBkYXMgVGVtcGxhdGUgZHVyY2hyZWljaHQgKi9cbiAgQElucHV0KCkgcHVibGljIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8TXJkVmlydHVhbFNjcm9sbEl0ZW1Db250ZXh0PFQ+PjtcblxuICBASW5wdXQoKSBwdWJsaWMgc2V0IGl0ZW1zKHZhbHVlOiBUW10pIHtcbiAgICB0aGlzLl9pdGVtcyA9IHZhbHVlIHx8IFtdO1xuICAgIHRoaXMub2Zmc2V0c0JlcmVjaG5lbigpO1xuICAgIHRoaXMuYmVyZWljaEJlcmVjaG5lbih0cnVlLCBmYWxzZSk7XG4gIH1cbiAgcHVibGljIGdldCBpdGVtcygpOiBUW10ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxuICBwcml2YXRlIF9pdGVtczogVFtdID0gW107XG5cbiAgLyoqXG4gICAqIFplaWxlbmhvZWhlIGluIHB4IGZ1ZXIgYWxsZSBFaW50cmFlZ2Ugb2RlciBgKGl0ZW0sIGluZGV4KSA9PiBweGAgamUgRWludHJhZy5cbiAgICogQWVuZGVydCBzaWNoIGRhcyBFcmdlYm5pcyBkZXIgRnVua3Rpb24gZnVlciB2b3JoYW5kZW5lIEl0ZW1zLCBkYW5hY2ggYGNoZWNrVmlld3BvcnRTaXplKClgIGF1ZnJ1ZmVuLlxuICAgKi9cbiAgQElucHV0KHt0cmFuc2Zvcm06IGl0ZW1TaXplQXR0cmlidXRlfSkgcHVibGljIHNldCBpdGVtU2l6ZSh2YWx1ZTogTXJkVmlydHVhbFNjcm9sbEl0ZW1TaXplPFQ+KSB7XG4gICAgdGhpcy5faXRlbVNpemUgPSB2YWx1ZSA/PyBDb25maWdVdGlsLmdldENvbmZpZygpLmxpc3QuaXRlbVNpemU7XG4gICAgdGhpcy5vZmZzZXRzQmVyZWNobmVuKCk7XG4gICAgdGhpcy5iZXJlaWNoQmVyZWNobmVuKHRydWUsIGZhbHNlKTtcbiAgfVxuICBwdWJsaWMgZ2V0IGl0ZW1TaXplKCk6IE1yZFZpcnR1YWxTY3JvbGxJdGVtU2l6ZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1TaXplO1xuICB9XG4gIHByaXZhdGUgX2l0ZW1TaXplOiBNcmRWaXJ0dWFsU2Nyb2xsSXRlbVNpemU8VD4gPSBDb25maWdVdGlsLmdldENvbmZpZygpLmxpc3QuaXRlbVNpemU7XG5cbiAgLyoqXG4gICAqIE51ciBiZWkgYGl0ZW1TaXplYCBhbHMgRnVua3Rpb246IG9mZnNldHNbaV0gaXN0IGRpZSBPYmVya2FudGUgdm9uIEVpbnRyYWcgaSwgb2Zmc2V0c1thbnphaGxdIGRpZSBHZXNhbXRob2VoZS5cbiAgICogQmVpIGZlc3RlciBIb2VoZSB3aXJkIGdlcmVjaG5ldCBzdGF0dCBnZXNwZWljaGVydC5cbiAgICovXG4gIHByaXZhdGUgb2Zmc2V0czogRmxvYXQ2NEFycmF5ID0gbnVsbDtcblxuICAvKiogQW56YWhsIHp1c2FldHpsaWNoIGdlcmVuZGVydGVyIFplaWxlbiBvYmVyLSB1bmQgdW50ZXJoYWxiIGRlcyBzaWNodGJhcmVuIEJlcmVpY2hzICovXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgYnVmZmVyOiBudW1iZXIgPSA1O1xuXG4gIEBJbnB1dCgpIHB1YmxpYyB0cmFja0J5OiBUcmFja0J5RnVuY3Rpb248VD47XG5cbiAgLyoqIEhvZWhlIGluIHB4LCBiaXMgenUgZGVyIGRhcyBFbGVtZW50IG1pdCBzZWluZW0gSW5oYWx0IHdhZWNoc3Q7IG9obmUgQW5nYWJlIGJlc3RpbW10IGRlciBBdWZydWZlciBkaWUgSG9laGUgKi9cbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBtYXhIZWlnaHQ6IG51bWJlcjtcblxuICBAT3V0cHV0KCkgcHVibGljIHZpc2libGVSYW5nZUNoYW5nZTogRXZlbnRFbWl0dGVyPE1yZFZpcnR1YWxTY3JvbGxSYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1yZFZpcnR1YWxTY3JvbGxSYW5nZT4oKTtcblxuICAvKipcbiAgICogVGF0c2FlY2hsaWNoIHNpY2h0YmFyZSBaZWlsZW4gb2huZSBQdWZmZXIgKGF1Y2ggYW5nZXNjaG5pdHRlbmUpLCB6LiBCLiB1bSBlaW5lIGF1c2dld2FlaGx0ZSBaZWlsZSBhbnp1aGVmdGVuLFxuICAgKiBzb2JhbGQgc2llIGhlcmF1c2dlc2Nyb2xsdCBpc3QuIGB2aXNpYmxlUmFuZ2VDaGFuZ2VgIG1lbGRldCBkYWdlZ2VuIGRlbiBnZXJlbmRlcnRlbiBCZXJlaWNoIGlua2x1c2l2ZSBQdWZmZXIuXG4gICAqL1xuICBAT3V0cHV0KCkgcHVibGljIHNpY2h0YmFyZXJCZXJlaWNoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TXJkVmlydHVhbFNjcm9sbFJhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXI8TXJkVmlydHVhbFNjcm9sbFJhbmdlPigpO1xuXG4gIHB1YmxpYyBzaWNodGJhcmVFaW50cmFlZ2U6IE1yZFZpcnR1YWxTY3JvbGxFaW50cmFnPFQ+W10gPSBbXTtcbiAgcHVibGljIHZlcnNhdHo6IG51bWJlciA9IDA7XG4gIHB1YmxpYyBnZXNhbXRIb2VoZTogbnVtYmVyID0gMDtcblxuICBwcml2YXRlIGJlcmVpY2g6IE1yZFZpcnR1YWxTY3JvbGxSYW5nZSA9IHtzdGFydDogMCwgZW5kOiAwfTtcbiAgcHJpdmF0ZSBzaWNodGJhcmVyQmVyZWljaDogTXJkVmlydHVhbFNjcm9sbFJhbmdlID0ge3N0YXJ0OiAwLCBlbmQ6IDB9O1xuICBwcml2YXRlIGluaXRpYWxpc2llcnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBhbmltYXRpb25GcmFtZTogbnVtYmVyID0gbnVsbDtcbiAgcHJpdmF0ZSByZXNpemVPYnNlcnZlcjogUmVzaXplT2JzZXJ2ZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2Nyb2xsTGlzdGVuZXIgPSAoKTogdm9pZCA9PiB0aGlzLmJlcmVpY2hQbGFuZW4oKTtcblxuICBwdWJsaWMgcmVhZG9ubHkgZWludHJhZ1RyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxNcmRWaXJ0dWFsU2Nyb2xsRWludHJhZzxUPj4gPSAoXzogbnVtYmVyLCBlaW50cmFnOiBNcmRWaXJ0dWFsU2Nyb2xsRWludHJhZzxUPikgPT4ge1xuICAgIHJldHVybiB0aGlzLnRyYWNrQnkgPyB0aGlzLnRyYWNrQnkoZWludHJhZy5pbmRleCwgZWludHJhZy5pdGVtKSA6IGVpbnRyYWcuaXRlbTtcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIC8vIFNjcm9sbC0gdW5kIFJlc2l6ZS1FcmVpZ25pc3NlIGF1c3NlcmhhbGIgZGVyIFpvbmUsIGRhbWl0IG5pY2h0IGplZGVzIFNjcm9sbC1GcmFtZSBlaW5lIGdsb2JhbGUgQ2hhbmdlIERldGVjdGlvbiBhdXNsb2VzdFxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxMaXN0ZW5lciwge3Bhc3NpdmU6IHRydWV9KTtcbiAgICAgIGlmICh0eXBlb2YgUmVzaXplT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4gdGhpcy5iZXJlaWNoUGxhbmVuKCkpO1xuICAgICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5pbml0aWFsaXNpZXJ0ID0gdHJ1ZTtcbiAgICB0aGlzLmJlcmVpY2hCZXJlY2huZW4odHJ1ZSwgdHJ1ZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbExpc3RlbmVyKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uRnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8TXJkVmlydHVhbFNjcm9sbEl0ZW1Db250ZXh0PFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbVRlbXBsYXRlIHx8IHRoaXMuY29udGVudEl0ZW0/LnRlbXBsYXRlUmVmO1xuICB9XG5cbiAgcHVibGljIGdldCBhdXRvbWF0aXNjaGVIb2VoZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1heEhlaWdodCA+IDAgPyBNYXRoLm1pbih0aGlzLmdlc2FtdEhvZWhlLCB0aGlzLm1heEhlaWdodCkgOiBudWxsO1xuICB9XG5cbiAgcHVibGljIGdldCByZW5kZXJlZFJhbmdlKCk6IE1yZFZpcnR1YWxTY3JvbGxSYW5nZSB7XG4gICAgcmV0dXJuIHsuLi50aGlzLmJlcmVpY2h9O1xuICB9XG5cbiAgLyoqIFNjcm9sbHQgc28sIGRhc3MgZGVyIEVpbnRyYWcgbWl0IGRlbSBJbmRleCBzaWNodGJhciBpc3QuICovXG4gIHB1YmxpYyBzY3JvbGxUb0luZGV4KGluZGV4OiBudW1iZXIsIHBvc2l0aW9uOiBNcmRWaXJ0dWFsU2Nyb2xsUG9zaXRpb24gPSAnbmVhcmVzdCcsIGJlaGF2aW9yOiBTY3JvbGxCZWhhdmlvciA9ICdhdXRvJyk6IHZvaWQge1xuICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5faXRlbXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBob2VoZSA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIGNvbnN0IG9iZW4gPSB0aGlzLm9iZXJrYW50ZShpbmRleCk7XG4gICAgY29uc3QgemVpbGVuaG9laGUgPSB0aGlzLmhvZWhlVm9uKGluZGV4KTtcbiAgICBjb25zdCB1bnRlbiA9IG9iZW4gKyB6ZWlsZW5ob2VoZTtcbiAgICBsZXQgemllbCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgemllbCA9IG9iZW47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgemllbCA9IHVudGVuIC0gaG9laGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2VudGVyJzpcbiAgICAgICAgemllbCA9IG9iZW4gLSAoaG9laGUgLSB6ZWlsZW5ob2VoZSkgLyAyO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChvYmVuIDwgZWxlbWVudC5zY3JvbGxUb3ApIHtcbiAgICAgICAgICB6aWVsID0gb2JlbjtcbiAgICAgICAgfSBlbHNlIGlmICh1bnRlbiA+IGVsZW1lbnQuc2Nyb2xsVG9wICsgaG9laGUpIHtcbiAgICAgICAgICB6aWVsID0gdW50ZW4gLSBob2VoZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB6aWVsID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oemllbCwgdGhpcy5nZXNhbXRIb2VoZSAtIGhvZWhlKSk7XG4gICAgZWxlbWVudC5zY3JvbGxUbyh7dG9wOiB6aWVsLCBiZWhhdmlvcn0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE5ldSBiZXJlY2huZW4sIHdlbm4gc2ljaCBkaWUgR3JvZXNzZSB2b24gYXVzc2VuIGdlYWVuZGVydCBoYXQsIG9obmUgZGFzcyBkZXIgUmVzaXplT2JzZXJ2ZXIgZXMgYmVtZXJrdCxcbiAgICogb2RlciB3ZW5uIGBpdGVtU2l6ZWAgYWxzIEZ1bmt0aW9uIGZ1ZXIgdm9yaGFuZGVuZSBJdGVtcyBhbmRlcmUgSG9laGVuIGxpZWZlcnQuXG4gICAqL1xuICBwdWJsaWMgY2hlY2tWaWV3cG9ydFNpemUoKTogdm9pZCB7XG4gICAgdGhpcy5vZmZzZXRzQmVyZWNobmVuKCk7XG4gICAgdGhpcy5iZXJlaWNoQmVyZWNobmVuKHRydWUsIHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBvZmZzZXRzQmVyZWNobmVuKCk6IHZvaWQge1xuICAgIGNvbnN0IGdyb2Vzc2UgPSB0aGlzLl9pdGVtU2l6ZTtcbiAgICBpZiAodHlwZW9mIGdyb2Vzc2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMub2Zmc2V0cyA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGFuemFobCA9IHRoaXMuX2l0ZW1zLmxlbmd0aDtcbiAgICBjb25zdCBvZmZzZXRzID0gbmV3IEZsb2F0NjRBcnJheShhbnphaGwgKyAxKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuemFobDsgaSsrKSB7XG4gICAgICBvZmZzZXRzW2kgKyAxXSA9IG9mZnNldHNbaV0gKyBNYXRoLm1heCgwLCBncm9lc3NlKHRoaXMuX2l0ZW1zW2ldLCBpKSB8fCAwKTtcbiAgICB9XG4gICAgdGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcbiAgfVxuXG4gIHByaXZhdGUgb2JlcmthbnRlKGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHMgPyB0aGlzLm9mZnNldHNbaW5kZXhdIDogaW5kZXggKiAodGhpcy5faXRlbVNpemUgYXMgbnVtYmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgaG9laGVWb24oaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0cyA/IHRoaXMub2Zmc2V0c1tpbmRleCArIDFdIC0gdGhpcy5vZmZzZXRzW2luZGV4XSA6IHRoaXMuX2l0ZW1TaXplIGFzIG51bWJlcjtcbiAgfVxuXG4gIC8qKiBJbmRleCBkZXMgRWludHJhZ3MsIGRlciBkaWUgUG9zaXRpb24geSAocHggYWIgTGlzdGVuYW5mYW5nKSBlbnRoYWVsdCAqL1xuICBwcml2YXRlIGluZGV4QmVpKHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgYW56YWhsID0gdGhpcy5faXRlbXMubGVuZ3RoO1xuICAgIGlmIChhbnphaGwgPT09IDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoIXRoaXMub2Zmc2V0cykge1xuICAgICAgcmV0dXJuIE1hdGgubWluKGFuemFobCAtIDEsIE1hdGguZmxvb3IoeSAvICh0aGlzLl9pdGVtU2l6ZSBhcyBudW1iZXIpKSk7XG4gICAgfVxuICAgIC8vIEJpbmFlcnN1Y2hlIG5hY2ggZGVtIGxldHp0ZW4gRWludHJhZyBtaXQgT2JlcmthbnRlIDw9IHlcbiAgICBsZXQgbGlua3MgPSAwO1xuICAgIGxldCByZWNodHMgPSBhbnphaGwgLSAxO1xuICAgIHdoaWxlIChsaW5rcyA8IHJlY2h0cykge1xuICAgICAgY29uc3QgbWl0dGUgPSAobGlua3MgKyByZWNodHMgKyAxKSA+PiAxO1xuICAgICAgaWYgKHRoaXMub2Zmc2V0c1ttaXR0ZV0gPD0geSkge1xuICAgICAgICBsaW5rcyA9IG1pdHRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVjaHRzID0gbWl0dGUgLSAxO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGlua3M7XG4gIH1cblxuICBwcml2YXRlIGJlcmVpY2hQbGFuZW4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uRnJhbWUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5hbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gbnVsbDtcbiAgICAgIHRoaXMuYmVyZWljaEJlcmVjaG5lbihmYWxzZSwgdHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNpY2h0YmFyZW5CZXJlaWNoU2V0emVuKGJlcmVpY2g6IE1yZFZpcnR1YWxTY3JvbGxSYW5nZSk6IHZvaWQge1xuICAgIGlmIChiZXJlaWNoLnN0YXJ0ID09PSB0aGlzLnNpY2h0YmFyZXJCZXJlaWNoLnN0YXJ0ICYmIGJlcmVpY2guZW5kID09PSB0aGlzLnNpY2h0YmFyZXJCZXJlaWNoLmVuZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNpY2h0YmFyZXJCZXJlaWNoID0gYmVyZWljaDtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLnNpY2h0YmFyZXJCZXJlaWNoQ2hhbmdlLmVtaXQoey4uLmJlcmVpY2h9KSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBlcnp3aW5nZW4gQXVjaCBuZXUgYXVmYmF1ZW4sIHdlbm4gc2ljaCBkZXIgQmVyZWljaCBuaWNodCBnZWFlbmRlcnQgaGF0ICh6LiBCLiBuZXVlIEl0ZW1zKVxuICAgKiBAcGFyYW0gcmVuZGVybiBTb2ZvcnQgcmVuZGVybjsgaW0gSW5wdXQtU2V0dGVyIG5pY2h0IG5vZXRpZywgd2VpbCBkaWUgQ2hhbmdlIERldGVjdGlvbiBvaG5laGluIGZvbGd0XG4gICAqL1xuICBwcml2YXRlIGJlcmVpY2hCZXJlY2huZW4oZXJ6d2luZ2VuOiBib29sZWFuLCByZW5kZXJuOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgYW56YWhsID0gdGhpcy5faXRlbXMubGVuZ3RoO1xuICAgIHRoaXMuZ2VzYW10SG9laGUgPSB0aGlzLm9iZXJrYW50ZShhbnphaGwpO1xuXG4gICAgbGV0IHN0YXJ0ID0gMDtcbiAgICBsZXQgZW5kZSA9IE1hdGgubWluKGFuemFobCwgdGhpcy5idWZmZXIgKiAyKTtcbiAgICBpZiAodGhpcy5pbml0aWFsaXNpZXJ0ICYmIGFuemFobCA+IDApIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIGNvbnN0IGhvZWhlID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAvLyBzY3JvbGxUb3AgaXN0IG5hY2ggZGVtIFZlcmtsZWluZXJuIGRlciBMaXN0ZSBiaXMgenVtIG5hZWNoc3RlbiBMYXlvdXQgbm9jaCBkZXIgYWx0ZSBXZXJ0XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihlbGVtZW50LnNjcm9sbFRvcCwgdGhpcy5nZXNhbXRIb2VoZSAtIGhvZWhlKSk7XG4gICAgICBjb25zdCBlcnN0ZXIgPSB0aGlzLmluZGV4QmVpKHNjcm9sbFRvcCk7XG4gICAgICBjb25zdCBsZXR6dGVyID0gdGhpcy5pbmRleEJlaShzY3JvbGxUb3AgKyBob2VoZSk7XG4gICAgICBzdGFydCA9IE1hdGgubWF4KDAsIGVyc3RlciAtIHRoaXMuYnVmZmVyKTtcbiAgICAgIGVuZGUgPSBNYXRoLm1pbihhbnphaGwsIGxldHp0ZXIgKyAxICsgdGhpcy5idWZmZXIpO1xuICAgICAgLy8gRGllIFplaWxlIGFiIGRlciBVbnRlcmthbnRlIChzY3JvbGxUb3AgKyBob2VoZSkgaXN0IG5pY2h0IG1laHIgc2ljaHRiYXIsIGRlc2hhbGIgZWluIFBpeGVsIGRhdm9yXG4gICAgICB0aGlzLnNpY2h0YmFyZW5CZXJlaWNoU2V0emVuKHtzdGFydDogZXJzdGVyLCBlbmQ6IHRoaXMuaW5kZXhCZWkoTWF0aC5tYXgoc2Nyb2xsVG9wLCBzY3JvbGxUb3AgKyBob2VoZSAtIDEpKSArIDF9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaW5pdGlhbGlzaWVydCkge1xuICAgICAgdGhpcy5zaWNodGJhcmVuQmVyZWljaFNldHplbih7c3RhcnQ6IDAsIGVuZDogMH0pO1xuICAgIH1cblxuICAgIGlmICghZXJ6d2luZ2VuICYmIHN0YXJ0ID09PSB0aGlzLmJlcmVpY2guc3RhcnQgJiYgZW5kZSA9PT0gdGhpcy5iZXJlaWNoLmVuZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBiZXJlaWNoR2VhZW5kZXJ0ID0gc3RhcnQgIT09IHRoaXMuYmVyZWljaC5zdGFydCB8fCBlbmRlICE9PSB0aGlzLmJlcmVpY2guZW5kO1xuICAgIHRoaXMuYmVyZWljaCA9IHtzdGFydCwgZW5kOiBlbmRlfTtcbiAgICB0aGlzLnZlcnNhdHogPSB0aGlzLm9iZXJrYW50ZShzdGFydCk7XG4gICAgdGhpcy5zaWNodGJhcmVFaW50cmFlZ2UgPSB0aGlzLl9pdGVtcy5zbGljZShzdGFydCwgZW5kZSkubWFwKChpdGVtOiBULCBpOiBudW1iZXIpID0+ICh7aXRlbSwgaW5kZXg6IHN0YXJ0ICsgaSwgaG9laGU6IHRoaXMuaG9laGVWb24oc3RhcnQgKyBpKX0pKTtcblxuICAgIGlmIChyZW5kZXJuKSB7XG4gICAgICAvLyBJbiBkZXIgWm9uZSByZW5kZXJuLCBkYW1pdCBFdmVudC1MaXN0ZW5lciBpbSBaZWlsZW4tVGVtcGxhdGUgZWluZSBDaGFuZ2UgRGV0ZWN0aW9uIGF1c2xvZXNlblxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICBpZiAoYmVyZWljaEdlYWVuZGVydCkge1xuICAgICAgLy8gQXN5bmNocm9uLCBkYW1pdCBkZXIgQXVmcnVmZXIgc2VpbmVuIFp1c3RhbmQgbmljaHQgd2FlaHJlbmQgZWluZXIgbGF1ZmVuZGVuIENoYW5nZSBEZXRlY3Rpb24gYWVuZGVydFxuICAgICAgY29uc3QgYmVyZWljaCA9IHRoaXMucmVuZGVyZWRSYW5nZTtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMudmlzaWJsZVJhbmdlQ2hhbmdlLmVtaXQoYmVyZWljaCkpKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJtcmQtdmlydHVhbC1zY3JvbGwtcGxhdHpoYWx0ZXJcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cImdlc2FtdEhvZWhlXCI+PC9kaXY+XG48ZGl2IGNsYXNzPVwibXJkLXZpcnR1YWwtc2Nyb2xsLWluaGFsdFwiIFtzdHlsZS50cmFuc2Zvcm1dPVwiJ3RyYW5zbGF0ZVkoJyArIHZlcnNhdHogKyAncHgpJ1wiPlxuICA8ZGl2IGNsYXNzPVwibXJkLXZpcnR1YWwtc2Nyb2xsLXplaWxlXCIgKm5nRm9yPVwibGV0IGVpbnRyYWcgb2Ygc2ljaHRiYXJlRWludHJhZWdlOyB0cmFja0J5OiBlaW50cmFnVHJhY2tCeVwiIFtzdHlsZS5oZWlnaHQucHhdPVwiZWludHJhZy5ob2VoZVwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZTsgY29udGV4dDogeyRpbXBsaWNpdDogZWludHJhZy5pdGVtLCBpbmRleDogZWludHJhZy5pbmRleH1cIj48L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==