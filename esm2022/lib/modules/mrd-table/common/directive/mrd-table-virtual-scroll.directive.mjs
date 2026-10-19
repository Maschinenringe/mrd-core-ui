import { DataSource } from '@angular/cdk/collections';
import { Directive, EventEmitter, Input, Output, numberAttribute } from '@angular/core';
import { BehaviorSubject, isObservable, of } from 'rxjs';
import { MrdTableDataSource } from '../model/mrd-table-data-source';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
/** Liefert der CDK-Tabelle nur den Ausschnitt; die Gesamtdaten verwaltet die Direktive */
class AusschnittQuelle extends DataSource {
    zeilen = new BehaviorSubject([]);
    connect() {
        return this.zeilen;
    }
    disconnect() {
        // Die Direktive beendet den Strom beim Zerstoeren
    }
}
/**
 * Virtuelles Scrollen fuer `mrd-table`: gerendert werden nur die sichtbaren Zeilen samt Puffer, oben und unten halten
 * Platzhalter die Scrollhoehe. Ohne transform, daher funktionieren angeheftete Kopf-/Fusszeilen und Spalten weiter.
 *
 * Die Daten kommen ueber die Direktive statt ueber `dataSource`; alle Datenzeilen muessen genau `zeilenHoehe` hoch sein.
 * Gescrollt wird im naechsten scrollbaren Vorfahren (Hoehe bzw. max-height und overflow: auto setzen).
 *
 * `<div class="h-96 overflow-auto"><table mrd-table [mrdTableVirtualScroll]="quelle" zeilenHoehe="48">...</table></div>`
 */
export class MrdTableVirtualScrollDirective {
    tabelle;
    elementRef;
    ngZone;
    set daten(daten) {
        this.datenAbo?.unsubscribe();
        this.vorherigeQuelle?.disconnect();
        this.vorherigeQuelle = daten instanceof MrdTableDataSource ? daten : null;
        const strom = daten instanceof MrdTableDataSource
            ? daten.connect()
            : isObservable(daten) ? daten : of(daten ?? []);
        this.datenAbo = strom.subscribe((zeilen) => {
            this.alle = zeilen ?? [];
            this.aktualisieren(true);
        });
    }
    /** Feste Hoehe jeder Datenzeile in px */
    zeilenHoehe;
    /** Zusaetzlich gerenderte Zeilen ober- und unterhalb des sichtbaren Bereichs */
    puffer = 10;
    bereichGeaendert = new EventEmitter();
    bereich = { start: 0, ende: 0 };
    /** Anzahl aller Zeilen (nach Filter) */
    get anzahl() {
        return this.alle.length;
    }
    alle = [];
    quelle = new AusschnittQuelle();
    datenAbo;
    vorherigeQuelle = null;
    scrollContainer;
    platzhalterOben;
    platzhalterUnten;
    groessenBeobachter;
    bereit = false;
    scrollHandler = () => this.aktualisieren(false);
    constructor(tabelle, elementRef, ngZone) {
        this.tabelle = tabelle;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
    }
    ngOnInit() {
        this.tabelle.dataSource = this.quelle;
    }
    ngAfterViewInit() {
        this.scrollContainer = this.scrollContainerSuchen();
        // Sonst verschiebt der Browser beim Austauschen der Zeilen die Scrollposition (Scroll Anchoring)
        this.scrollContainer.style.overflowAnchor = 'none';
        this.platzhalterEinfuegen();
        this.ngZone.runOutsideAngular(() => {
            this.scrollContainer.addEventListener('scroll', this.scrollHandler, { passive: true });
            this.groessenBeobachter = new ResizeObserver(() => this.aktualisieren(false));
            this.groessenBeobachter.observe(this.scrollContainer);
        });
        this.bereit = true;
        // Erst nach dem laufenden Change-Detection-Durchlauf: neue Zeilen in ngAfterViewInit wuerden NG0100 ausloesen
        Promise.resolve().then(() => this.aktualisieren(true));
    }
    ngOnDestroy() {
        this.scrollContainer?.removeEventListener('scroll', this.scrollHandler);
        this.groessenBeobachter?.disconnect();
        this.datenAbo?.unsubscribe();
        this.vorherigeQuelle?.disconnect();
        this.quelle.zeilen.complete();
        this.platzhalterOben?.remove();
        this.platzhalterUnten?.remove();
    }
    /** Scrollt zur Zeile mit dem Index (bezogen auf die gefilterten und sortierten Daten) */
    scrollToIndex(index, behavior = 'auto') {
        const ziel = Math.max(0, Math.min(index, this.alle.length - 1));
        this.scrollContainer?.scrollTo({ top: this.datenBeginn() + ziel * this.zeilenHoehe, behavior });
    }
    /** Berechnet den Ausschnitt; `erzwingen`, wenn sich die Daten geaendert haben */
    aktualisieren(erzwingen) {
        if (!this.bereit) {
            this.quelle.zeilen.next(this.alle.slice(0, this.puffer * 2));
            return;
        }
        const hoehe = Math.max(this.zeilenHoehe, 1);
        const sichtbarAb = Math.max(0, this.scrollContainer.scrollTop - this.datenBeginn());
        const erste = Math.floor(sichtbarAb / hoehe);
        const sichtbar = Math.ceil(this.scrollContainer.clientHeight / hoehe) + 1;
        const start = Math.max(0, Math.min(erste - this.puffer, this.alle.length));
        const ende = Math.min(this.alle.length, erste + sichtbar + this.puffer);
        if (!erzwingen && start === this.bereich.start && ende === this.bereich.ende) {
            return;
        }
        this.bereich = { start, ende: Math.max(start, ende) };
        this.platzhalterSetzen(start * hoehe, (this.alle.length - this.bereich.ende) * hoehe);
        // Nur bei geaendertem Ausschnitt zurueck in die Zone, damit Scrollen allein keine Change Detection ausloest
        this.ngZone.run(() => {
            this.quelle.zeilen.next(this.alle.slice(this.bereich.start, this.bereich.ende));
            this.bereichGeaendert.emit(this.bereich);
        });
    }
    /**
     * Abstand vom Anfang des Scrollinhalts bis zur ersten Datenzeile (Inhalt ueber der Tabelle und Kopfzeilen),
     * gemessen am oberen Platzhalter; angeheftete Kopfzeilen verschieben ihn nicht
     */
    datenBeginn() {
        const container = this.scrollContainer.getBoundingClientRect();
        return this.platzhalterOben.getBoundingClientRect().top - container.top - this.scrollContainer.clientTop + this.scrollContainer.scrollTop;
    }
    scrollContainerSuchen() {
        let element = this.elementRef.nativeElement.parentElement;
        while (element) {
            const overflow = getComputedStyle(element).overflowY;
            if (overflow === 'auto' || overflow === 'scroll') {
                return element;
            }
            element = element.parentElement;
        }
        return document.scrollingElement ?? document.documentElement;
    }
    /**
     * Platzhalter direkt vor der ersten und hinter der letzten Datenzeile. Angular fuegt Zeilen vor dem Anker des
     * Zeilen-Outlets ein, die Platzhalter bleiben daher an ihrem Platz.
     */
    platzhalterEinfuegen() {
        const anker = this.tabelle._rowOutlet.elementRef.nativeElement;
        const kopfAnker = this.tabelle._headerRowOutlet.elementRef.nativeElement;
        const eltern = anker.parentNode;
        const nativ = this.elementRef.nativeElement.tagName === 'TABLE';
        this.platzhalterOben = this.platzhalterErzeugen(nativ);
        this.platzhalterUnten = this.platzhalterErzeugen(nativ);
        // Native Tabelle: eigener tbody; Element-Variante: Datenzeilen folgen auf den Anker der Kopfzeilen
        const vorErsterZeile = eltern === kopfAnker.parentNode ? kopfAnker.nextSibling : eltern.firstChild;
        eltern.insertBefore(this.platzhalterOben, vorErsterZeile);
        eltern.insertBefore(this.platzhalterUnten, anker.nextSibling);
    }
    platzhalterErzeugen(nativ) {
        const platzhalter = document.createElement(nativ ? 'tr' : 'div');
        platzhalter.className = 'mrd-table-virtual-platzhalter';
        platzhalter.setAttribute('aria-hidden', 'true');
        if (nativ) {
            platzhalter.appendChild(document.createElement('td'));
        }
        return platzhalter;
    }
    platzhalterSetzen(oben, unten) {
        const spalten = this.spaltenAnzahl();
        this.platzhalterHoehe(this.platzhalterOben, oben, spalten);
        this.platzhalterHoehe(this.platzhalterUnten, unten, spalten);
    }
    /** Bleibt auch mit Hoehe 0 im Layout, weil datenBeginn() am oberen Platzhalter misst */
    platzhalterHoehe(platzhalter, hoehe, spalten) {
        const zelle = platzhalter.firstElementChild;
        (zelle ?? platzhalter).style.height = `${hoehe}px`;
        if (zelle) {
            zelle.colSpan = spalten;
        }
    }
    spaltenAnzahl() {
        const zeile = this.elementRef.nativeElement.querySelector('.mrd-row, .mrd-header-row');
        return Math.max(1, zeile ? Array.from(zeile.children).reduce((summe, zelle) => summe + (zelle.colSpan || 1), 0) : 1);
    }
    /** @nocollapse */ static ɵfac = function MrdTableVirtualScrollDirective_Factory(t) { return new (t || MrdTableVirtualScrollDirective)(i0.ɵɵdirectiveInject(i1.CdkTable), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdTableVirtualScrollDirective, selectors: [["table", "mrd-table", "", "mrdTableVirtualScroll", ""], ["mrd-table", "mrdTableVirtualScroll", ""]], hostAttrs: [1, "mrd-table-virtual"], hostVars: 2, hostBindings: function MrdTableVirtualScrollDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("--mrd-table-zeilen-hoehe", ctx.zeilenHoehe, "px");
        } }, inputs: { daten: ["mrdTableVirtualScroll", "daten"], zeilenHoehe: ["zeilenHoehe", "zeilenHoehe", numberAttribute], puffer: ["puffer", "puffer", numberAttribute] }, outputs: { bereichGeaendert: "bereichGeaendert" }, exportAs: ["mrdTableVirtualScroll"], features: [i0.ɵɵInputTransformsFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdTableVirtualScrollDirective, [{
        type: Directive,
        args: [{
                selector: 'table[mrd-table][mrdTableVirtualScroll], mrd-table[mrdTableVirtualScroll]',
                exportAs: 'mrdTableVirtualScroll',
                host: {
                    'class': 'mrd-table-virtual',
                    '[style.--mrd-table-zeilen-hoehe.px]': 'zeilenHoehe'
                }
            }]
    }], function () { return [{ type: i1.CdkTable }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, { daten: [{
            type: Input,
            args: [{ alias: 'mrdTableVirtualScroll', required: true }]
        }], zeilenHoehe: [{
            type: Input,
            args: [{ required: true, transform: numberAttribute }]
        }], puffer: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], bereichGeaendert: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXRhYmxlLXZpcnR1YWwtc2Nyb2xsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtdGFibGUvY29tbW9uL2RpcmVjdGl2ZS9tcmQtdGFibGUtdmlydHVhbC1zY3JvbGwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV0RCxPQUFPLEVBQWlCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUE2QixNQUFNLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlJLE9BQU8sRUFBRSxlQUFlLEVBQTRCLFlBQVksRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7OztBQVdwRSwwRkFBMEY7QUFDMUYsTUFBTSxnQkFBb0IsU0FBUSxVQUFhO0lBQzdCLE1BQU0sR0FBeUIsSUFBSSxlQUFlLENBQU0sRUFBRSxDQUFDLENBQUM7SUFFckUsT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRU0sVUFBVTtRQUNmLGtEQUFrRDtJQUNwRCxDQUFDO0NBQ0Y7QUFFRDs7Ozs7Ozs7R0FRRztBQVNILE1BQU0sT0FBTyw4QkFBOEI7SUEwQy9CO0lBQ0E7SUFDQTtJQTFDVixJQUFvRSxLQUFLLENBQUMsS0FBb0M7UUFDNUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxFQUFFLFVBQVUsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxZQUFZLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUks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QThCOzRGQUE5Qiw4QkFBOEI7OzhHQWdCTixlQUFlLGdDQUcvQixlQUFlOzt1RkFuQnZCLDhCQUE4QjtjQVIxQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJFQUEyRTtnQkFDckYsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsSUFBSSxFQUFFO29CQUNKLE9BQU8sRUFBRSxtQkFBbUI7b0JBQzVCLHFDQUFxQyxFQUFFLGFBQWE7aUJBQ3JEO2FBQ0Y7eUdBR3FFLEtBQUs7a0JBQXhFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQztZQWNLLFdBQVc7a0JBQXRFLEtBQUs7bUJBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUM7WUFHUCxNQUFNO2tCQUFqRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBQztZQUVULGdCQUFnQjtrQkFBekMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgQ2RrVGFibGUgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIG51bWJlckF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIGlzT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1yZFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJy4uL21vZGVsL21yZC10YWJsZS1kYXRhLXNvdXJjZSc7XG5cbi8qKiBEYXRlbiBmdWVyIGRpZSB2aXJ0dWVsbGUgVGFiZWxsZTsgZWluZSBNcmRUYWJsZURhdGFTb3VyY2UgbGllZmVydCBzaWUgYmVyZWl0cyBnZWZpbHRlcnQgdW5kIHNvcnRpZXJ0ICovXG5leHBvcnQgdHlwZSBNcmRUYWJsZVZpcnR1YWxTY3JvbGxEYXRlbjxUPiA9IE1yZFRhYmxlRGF0YVNvdXJjZTxUPiB8IFRbXSB8IE9ic2VydmFibGU8VFtdPjtcblxuLyoqIEdlcmVuZGVydGVyIEF1c3NjaG5pdHQ6IEluZGV4IGRlciBlcnN0ZW4gdW5kIGhpbnRlciBkZXIgbGV0enRlbiBnZXJlbmRlcnRlbiBaZWlsZSAoaW5rbC4gUHVmZmVyKSAqL1xuZXhwb3J0IGludGVyZmFjZSBNcmRUYWJsZVZpcnR1YWxTY3JvbGxCZXJlaWNoIHtcbiAgc3RhcnQ6IG51bWJlcjtcbiAgZW5kZTogbnVtYmVyO1xufVxuXG4vKiogTGllZmVydCBkZXIgQ0RLLVRhYmVsbGUgbnVyIGRlbiBBdXNzY2huaXR0OyBkaWUgR2VzYW10ZGF0ZW4gdmVyd2FsdGV0IGRpZSBEaXJla3RpdmUgKi9cbmNsYXNzIEF1c3NjaG5pdHRRdWVsbGU8VD4gZXh0ZW5kcyBEYXRhU291cmNlPFQ+IHtcbiAgcHVibGljIHJlYWRvbmx5IHplaWxlbjogQmVoYXZpb3JTdWJqZWN0PFRbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFRbXT4oW10pO1xuXG4gIHB1YmxpYyBjb25uZWN0KCk6IE9ic2VydmFibGU8VFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuemVpbGVuO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3QoKTogdm9pZCB7XG4gICAgLy8gRGllIERpcmVrdGl2ZSBiZWVuZGV0IGRlbiBTdHJvbSBiZWltIFplcnN0b2VyZW5cbiAgfVxufVxuXG4vKipcbiAqIFZpcnR1ZWxsZXMgU2Nyb2xsZW4gZnVlciBgbXJkLXRhYmxlYDogZ2VyZW5kZXJ0IHdlcmRlbiBudXIgZGllIHNpY2h0YmFyZW4gWmVpbGVuIHNhbXQgUHVmZmVyLCBvYmVuIHVuZCB1bnRlbiBoYWx0ZW5cbiAqIFBsYXR6aGFsdGVyIGRpZSBTY3JvbGxob2VoZS4gT2huZSB0cmFuc2Zvcm0sIGRhaGVyIGZ1bmt0aW9uaWVyZW4gYW5nZWhlZnRldGUgS29wZi0vRnVzc3plaWxlbiB1bmQgU3BhbHRlbiB3ZWl0ZXIuXG4gKlxuICogRGllIERhdGVuIGtvbW1lbiB1ZWJlciBkaWUgRGlyZWt0aXZlIHN0YXR0IHVlYmVyIGBkYXRhU291cmNlYDsgYWxsZSBEYXRlbnplaWxlbiBtdWVzc2VuIGdlbmF1IGB6ZWlsZW5Ib2VoZWAgaG9jaCBzZWluLlxuICogR2VzY3JvbGx0IHdpcmQgaW0gbmFlY2hzdGVuIHNjcm9sbGJhcmVuIFZvcmZhaHJlbiAoSG9laGUgYnp3LiBtYXgtaGVpZ2h0IHVuZCBvdmVyZmxvdzogYXV0byBzZXR6ZW4pLlxuICpcbiAqIGA8ZGl2IGNsYXNzPVwiaC05NiBvdmVyZmxvdy1hdXRvXCI+PHRhYmxlIG1yZC10YWJsZSBbbXJkVGFibGVWaXJ0dWFsU2Nyb2xsXT1cInF1ZWxsZVwiIHplaWxlbkhvZWhlPVwiNDhcIj4uLi48L3RhYmxlPjwvZGl2PmBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAndGFibGVbbXJkLXRhYmxlXVttcmRUYWJsZVZpcnR1YWxTY3JvbGxdLCBtcmQtdGFibGVbbXJkVGFibGVWaXJ0dWFsU2Nyb2xsXScsXG4gIGV4cG9ydEFzOiAnbXJkVGFibGVWaXJ0dWFsU2Nyb2xsJyxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtcmQtdGFibGUtdmlydHVhbCcsXG4gICAgJ1tzdHlsZS4tLW1yZC10YWJsZS16ZWlsZW4taG9laGUucHhdJzogJ3plaWxlbkhvZWhlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE1yZFRhYmxlVmlydHVhbFNjcm9sbERpcmVjdGl2ZTxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoe2FsaWFzOiAnbXJkVGFibGVWaXJ0dWFsU2Nyb2xsJywgcmVxdWlyZWQ6IHRydWV9KSBwdWJsaWMgc2V0IGRhdGVuKGRhdGVuOiBNcmRUYWJsZVZpcnR1YWxTY3JvbGxEYXRlbjxUPikge1xuICAgIHRoaXMuZGF0ZW5BYm8/LnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy52b3JoZXJpZ2VRdWVsbGU/LmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLnZvcmhlcmlnZVF1ZWxsZSA9IGRhdGVuIGluc3RhbmNlb2YgTXJkVGFibGVEYXRhU291cmNlID8gZGF0ZW4gOiBudWxsO1xuICAgIGNvbnN0IHN0cm9tOiBPYnNlcnZhYmxlPHJlYWRvbmx5IFRbXT4gPSBkYXRlbiBpbnN0YW5jZW9mIE1yZFRhYmxlRGF0YVNvdXJjZVxuICAgICAgPyBkYXRlbi5jb25uZWN0KClcbiAgICAgIDogaXNPYnNlcnZhYmxlKGRhdGVuKSA/IGRhdGVuIDogb2YoZGF0ZW4gPz8gW10pO1xuICAgIHRoaXMuZGF0ZW5BYm8gPSBzdHJvbS5zdWJzY3JpYmUoKHplaWxlbjogcmVhZG9ubHkgVFtdKSA9PiB7XG4gICAgICB0aGlzLmFsbGUgPSB6ZWlsZW4gPz8gW107XG4gICAgICB0aGlzLmFrdHVhbGlzaWVyZW4odHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogRmVzdGUgSG9laGUgamVkZXIgRGF0ZW56ZWlsZSBpbiBweCAqL1xuICBASW5wdXQoe3JlcXVpcmVkOiB0cnVlLCB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyB6ZWlsZW5Ib2VoZTogbnVtYmVyO1xuXG4gIC8qKiBadXNhZXR6bGljaCBnZXJlbmRlcnRlIFplaWxlbiBvYmVyLSB1bmQgdW50ZXJoYWxiIGRlcyBzaWNodGJhcmVuIEJlcmVpY2hzICovXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgcHVmZmVyOiBudW1iZXIgPSAxMDtcblxuICBAT3V0cHV0KCkgcHVibGljIHJlYWRvbmx5IGJlcmVpY2hHZWFlbmRlcnQ6IEV2ZW50RW1pdHRlcjxNcmRUYWJsZVZpcnR1YWxTY3JvbGxCZXJlaWNoPiA9IG5ldyBFdmVudEVtaXR0ZXI8TXJkVGFibGVWaXJ0dWFsU2Nyb2xsQmVyZWljaD4oKTtcblxuICBwdWJsaWMgYmVyZWljaDogTXJkVGFibGVWaXJ0dWFsU2Nyb2xsQmVyZWljaCA9IHsgc3RhcnQ6IDAsIGVuZGU6IDAgfTtcblxuICAvKiogQW56YWhsIGFsbGVyIFplaWxlbiAobmFjaCBGaWx0ZXIpICovXG4gIHB1YmxpYyBnZXQgYW56YWhsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuYWxsZS5sZW5ndGg7XG4gIH1cblxuICBwcml2YXRlIGFsbGU6IHJlYWRvbmx5IFRbXSA9IFtdO1xuICBwcml2YXRlIHJlYWRvbmx5IHF1ZWxsZTogQXVzc2Nobml0dFF1ZWxsZTxUPiA9IG5ldyBBdXNzY2huaXR0UXVlbGxlPFQ+KCk7XG4gIHByaXZhdGUgZGF0ZW5BYm86IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSB2b3JoZXJpZ2VRdWVsbGU6IE1yZFRhYmxlRGF0YVNvdXJjZTxUPiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHNjcm9sbENvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgcGxhdHpoYWx0ZXJPYmVuOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBwbGF0emhhbHRlclVudGVuOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBncm9lc3NlbkJlb2JhY2h0ZXI6IFJlc2l6ZU9ic2VydmVyO1xuICBwcml2YXRlIGJlcmVpdDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHJlYWRvbmx5IHNjcm9sbEhhbmRsZXI6ICgpID0+IHZvaWQgPSAoKTogdm9pZCA9PiB0aGlzLmFrdHVhbGlzaWVyZW4oZmFsc2UpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGFiZWxsZTogQ2RrVGFibGU8VD4sXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRhYmVsbGUuZGF0YVNvdXJjZSA9IHRoaXMucXVlbGxlO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyID0gdGhpcy5zY3JvbGxDb250YWluZXJTdWNoZW4oKTtcbiAgICAvLyBTb25zdCB2ZXJzY2hpZWJ0IGRlciBCcm93c2VyIGJlaW0gQXVzdGF1c2NoZW4gZGVyIFplaWxlbiBkaWUgU2Nyb2xscG9zaXRpb24gKFNjcm9sbCBBbmNob3JpbmcpXG4gICAgdGhpcy5zY3JvbGxDb250YWluZXIuc3R5bGUub3ZlcmZsb3dBbmNob3IgPSAnbm9uZSc7XG4gICAgdGhpcy5wbGF0emhhbHRlckVpbmZ1ZWdlbigpO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlciwge3Bhc3NpdmU6IHRydWV9KTtcbiAgICAgIHRoaXMuZ3JvZXNzZW5CZW9iYWNodGVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKCgpID0+IHRoaXMuYWt0dWFsaXNpZXJlbihmYWxzZSkpO1xuICAgICAgdGhpcy5ncm9lc3NlbkJlb2JhY2h0ZXIub2JzZXJ2ZSh0aGlzLnNjcm9sbENvbnRhaW5lcik7XG4gICAgfSk7XG4gICAgdGhpcy5iZXJlaXQgPSB0cnVlO1xuICAgIC8vIEVyc3QgbmFjaCBkZW0gbGF1ZmVuZGVuIENoYW5nZS1EZXRlY3Rpb24tRHVyY2hsYXVmOiBuZXVlIFplaWxlbiBpbiBuZ0FmdGVyVmlld0luaXQgd3VlcmRlbiBORzAxMDAgYXVzbG9lc2VuXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmFrdHVhbGlzaWVyZW4odHJ1ZSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zY3JvbGxDb250YWluZXI/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gICAgdGhpcy5ncm9lc3NlbkJlb2JhY2h0ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLmRhdGVuQWJvPy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMudm9yaGVyaWdlUXVlbGxlPy5kaXNjb25uZWN0KCk7XG4gICAgdGhpcy5xdWVsbGUuemVpbGVuLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5wbGF0emhhbHRlck9iZW4/LnJlbW92ZSgpO1xuICAgIHRoaXMucGxhdHpoYWx0ZXJVbnRlbj8ucmVtb3ZlKCk7XG4gIH1cblxuICAvKiogU2Nyb2xsdCB6dXIgWmVpbGUgbWl0IGRlbSBJbmRleCAoYmV6b2dlbiBhdWYgZGllIGdlZmlsdGVydGVuIHVuZCBzb3J0aWVydGVuIERhdGVuKSAqL1xuICBwdWJsaWMgc2Nyb2xsVG9JbmRleChpbmRleDogbnVtYmVyLCBiZWhhdmlvcjogU2Nyb2xsQmVoYXZpb3IgPSAnYXV0bycpOiB2b2lkIHtcbiAgICBjb25zdCB6aWVsOiBudW1iZXIgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihpbmRleCwgdGhpcy5hbGxlLmxlbmd0aCAtIDEpKTtcbiAgICB0aGlzLnNjcm9sbENvbnRhaW5lcj8uc2Nyb2xsVG8oeyB0b3A6IHRoaXMuZGF0ZW5CZWdpbm4oKSArIHppZWwgKiB0aGlzLnplaWxlbkhvZWhlLCBiZWhhdmlvciB9KTtcbiAgfVxuXG4gIC8qKiBCZXJlY2huZXQgZGVuIEF1c3NjaG5pdHQ7IGBlcnp3aW5nZW5gLCB3ZW5uIHNpY2ggZGllIERhdGVuIGdlYWVuZGVydCBoYWJlbiAqL1xuICBwcml2YXRlIGFrdHVhbGlzaWVyZW4oZXJ6d2luZ2VuOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmJlcmVpdCkge1xuICAgICAgdGhpcy5xdWVsbGUuemVpbGVuLm5leHQodGhpcy5hbGxlLnNsaWNlKDAsIHRoaXMucHVmZmVyICogMikpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBob2VoZTogbnVtYmVyID0gTWF0aC5tYXgodGhpcy56ZWlsZW5Ib2VoZSwgMSk7XG4gICAgY29uc3Qgc2ljaHRiYXJBYjogbnVtYmVyID0gTWF0aC5tYXgoMCwgdGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wIC0gdGhpcy5kYXRlbkJlZ2lubigpKTtcbiAgICBjb25zdCBlcnN0ZTogbnVtYmVyID0gTWF0aC5mbG9vcihzaWNodGJhckFiIC8gaG9laGUpO1xuICAgIGNvbnN0IHNpY2h0YmFyOiBudW1iZXIgPSBNYXRoLmNlaWwodGhpcy5zY3JvbGxDb250YWluZXIuY2xpZW50SGVpZ2h0IC8gaG9laGUpICsgMTtcbiAgICBjb25zdCBzdGFydDogbnVtYmVyID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oZXJzdGUgLSB0aGlzLnB1ZmZlciwgdGhpcy5hbGxlLmxlbmd0aCkpO1xuICAgIGNvbnN0IGVuZGU6IG51bWJlciA9IE1hdGgubWluKHRoaXMuYWxsZS5sZW5ndGgsIGVyc3RlICsgc2ljaHRiYXIgKyB0aGlzLnB1ZmZlcik7XG5cbiAgICBpZiAoIWVyendpbmdlbiAmJiBzdGFydCA9PT0gdGhpcy5iZXJlaWNoLnN0YXJ0ICYmIGVuZGUgPT09IHRoaXMuYmVyZWljaC5lbmRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYmVyZWljaCA9IHsgc3RhcnQsIGVuZGU6IE1hdGgubWF4KHN0YXJ0LCBlbmRlKSB9O1xuICAgIHRoaXMucGxhdHpoYWx0ZXJTZXR6ZW4oc3RhcnQgKiBob2VoZSwgKHRoaXMuYWxsZS5sZW5ndGggLSB0aGlzLmJlcmVpY2guZW5kZSkgKiBob2VoZSk7XG4gICAgLy8gTnVyIGJlaSBnZWFlbmRlcnRlbSBBdXNzY2huaXR0IHp1cnVlY2sgaW4gZGllIFpvbmUsIGRhbWl0IFNjcm9sbGVuIGFsbGVpbiBrZWluZSBDaGFuZ2UgRGV0ZWN0aW9uIGF1c2xvZXN0XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMucXVlbGxlLnplaWxlbi5uZXh0KHRoaXMuYWxsZS5zbGljZSh0aGlzLmJlcmVpY2guc3RhcnQsIHRoaXMuYmVyZWljaC5lbmRlKSk7XG4gICAgICB0aGlzLmJlcmVpY2hHZWFlbmRlcnQuZW1pdCh0aGlzLmJlcmVpY2gpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFic3RhbmQgdm9tIEFuZmFuZyBkZXMgU2Nyb2xsaW5oYWx0cyBiaXMgenVyIGVyc3RlbiBEYXRlbnplaWxlIChJbmhhbHQgdWViZXIgZGVyIFRhYmVsbGUgdW5kIEtvcGZ6ZWlsZW4pLFxuICAgKiBnZW1lc3NlbiBhbSBvYmVyZW4gUGxhdHpoYWx0ZXI7IGFuZ2VoZWZ0ZXRlIEtvcGZ6ZWlsZW4gdmVyc2NoaWViZW4gaWhuIG5pY2h0XG4gICAqL1xuICBwcml2YXRlIGRhdGVuQmVnaW5uKCk6IG51bWJlciB7XG4gICAgY29uc3QgY29udGFpbmVyOiBET01SZWN0ID0gdGhpcy5zY3JvbGxDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHRoaXMucGxhdHpoYWx0ZXJPYmVuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGNvbnRhaW5lci50b3AgLSB0aGlzLnNjcm9sbENvbnRhaW5lci5jbGllbnRUb3AgKyB0aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3A7XG4gIH1cblxuICBwcml2YXRlIHNjcm9sbENvbnRhaW5lclN1Y2hlbigpOiBIVE1MRWxlbWVudCB7XG4gICAgbGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IG92ZXJmbG93OiBzdHJpbmcgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLm92ZXJmbG93WTtcbiAgICAgIGlmIChvdmVyZmxvdyA9PT0gJ2F1dG8nIHx8IG92ZXJmbG93ID09PSAnc2Nyb2xsJykge1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IGFzIEhUTUxFbGVtZW50ID8/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQbGF0emhhbHRlciBkaXJla3Qgdm9yIGRlciBlcnN0ZW4gdW5kIGhpbnRlciBkZXIgbGV0enRlbiBEYXRlbnplaWxlLiBBbmd1bGFyIGZ1ZWd0IFplaWxlbiB2b3IgZGVtIEFua2VyIGRlc1xuICAgKiBaZWlsZW4tT3V0bGV0cyBlaW4sIGRpZSBQbGF0emhhbHRlciBibGVpYmVuIGRhaGVyIGFuIGlocmVtIFBsYXR6LlxuICAgKi9cbiAgcHJpdmF0ZSBwbGF0emhhbHRlckVpbmZ1ZWdlbigpOiB2b2lkIHtcbiAgICBjb25zdCBhbmtlcjogTm9kZSA9IHRoaXMudGFiZWxsZS5fcm93T3V0bGV0LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBrb3BmQW5rZXI6IE5vZGUgPSB0aGlzLnRhYmVsbGUuX2hlYWRlclJvd091dGxldC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgZWx0ZXJuOiBOb2RlID0gYW5rZXIucGFyZW50Tm9kZTtcbiAgICBjb25zdCBuYXRpdjogYm9vbGVhbiA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnRhZ05hbWUgPT09ICdUQUJMRSc7XG4gICAgdGhpcy5wbGF0emhhbHRlck9iZW4gPSB0aGlzLnBsYXR6aGFsdGVyRXJ6ZXVnZW4obmF0aXYpO1xuICAgIHRoaXMucGxhdHpoYWx0ZXJVbnRlbiA9IHRoaXMucGxhdHpoYWx0ZXJFcnpldWdlbihuYXRpdik7XG4gICAgLy8gTmF0aXZlIFRhYmVsbGU6IGVpZ2VuZXIgdGJvZHk7IEVsZW1lbnQtVmFyaWFudGU6IERhdGVuemVpbGVuIGZvbGdlbiBhdWYgZGVuIEFua2VyIGRlciBLb3BmemVpbGVuXG4gICAgY29uc3Qgdm9yRXJzdGVyWmVpbGU6IE5vZGUgfCBudWxsID0gZWx0ZXJuID09PSBrb3BmQW5rZXIucGFyZW50Tm9kZSA/IGtvcGZBbmtlci5uZXh0U2libGluZyA6IGVsdGVybi5maXJzdENoaWxkO1xuICAgIGVsdGVybi5pbnNlcnRCZWZvcmUodGhpcy5wbGF0emhhbHRlck9iZW4sIHZvckVyc3RlclplaWxlKTtcbiAgICBlbHRlcm4uaW5zZXJ0QmVmb3JlKHRoaXMucGxhdHpoYWx0ZXJVbnRlbiwgYW5rZXIubmV4dFNpYmxpbmcpO1xuICB9XG5cbiAgcHJpdmF0ZSBwbGF0emhhbHRlckVyemV1Z2VuKG5hdGl2OiBib29sZWFuKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHBsYXR6aGFsdGVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmF0aXYgPyAndHInIDogJ2RpdicpO1xuICAgIHBsYXR6aGFsdGVyLmNsYXNzTmFtZSA9ICdtcmQtdGFibGUtdmlydHVhbC1wbGF0emhhbHRlcic7XG4gICAgcGxhdHpoYWx0ZXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgaWYgKG5hdGl2KSB7XG4gICAgICBwbGF0emhhbHRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpKTtcbiAgICB9XG4gICAgcmV0dXJuIHBsYXR6aGFsdGVyO1xuICB9XG5cbiAgcHJpdmF0ZSBwbGF0emhhbHRlclNldHplbihvYmVuOiBudW1iZXIsIHVudGVuOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBzcGFsdGVuOiBudW1iZXIgPSB0aGlzLnNwYWx0ZW5BbnphaGwoKTtcbiAgICB0aGlzLnBsYXR6aGFsdGVySG9laGUodGhpcy5wbGF0emhhbHRlck9iZW4sIG9iZW4sIHNwYWx0ZW4pO1xuICAgIHRoaXMucGxhdHpoYWx0ZXJIb2VoZSh0aGlzLnBsYXR6aGFsdGVyVW50ZW4sIHVudGVuLCBzcGFsdGVuKTtcbiAgfVxuXG4gIC8qKiBCbGVpYnQgYXVjaCBtaXQgSG9laGUgMCBpbSBMYXlvdXQsIHdlaWwgZGF0ZW5CZWdpbm4oKSBhbSBvYmVyZW4gUGxhdHpoYWx0ZXIgbWlzc3QgKi9cbiAgcHJpdmF0ZSBwbGF0emhhbHRlckhvZWhlKHBsYXR6aGFsdGVyOiBIVE1MRWxlbWVudCwgaG9laGU6IG51bWJlciwgc3BhbHRlbjogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgemVsbGU6IEhUTUxUYWJsZUNlbGxFbGVtZW50IHwgbnVsbCA9IHBsYXR6aGFsdGVyLmZpcnN0RWxlbWVudENoaWxkIGFzIEhUTUxUYWJsZUNlbGxFbGVtZW50IHwgbnVsbDtcbiAgICAoemVsbGUgPz8gcGxhdHpoYWx0ZXIpLnN0eWxlLmhlaWdodCA9IGAke2hvZWhlfXB4YDtcbiAgICBpZiAoemVsbGUpIHtcbiAgICAgIHplbGxlLmNvbFNwYW4gPSBzcGFsdGVuO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3BhbHRlbkFuemFobCgpOiBudW1iZXIge1xuICAgIGNvbnN0IHplaWxlOiBFbGVtZW50IHwgbnVsbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tcmQtcm93LCAubXJkLWhlYWRlci1yb3cnKTtcbiAgICByZXR1cm4gTWF0aC5tYXgoMSwgemVpbGUgPyBBcnJheS5mcm9tKHplaWxlLmNoaWxkcmVuKS5yZWR1Y2UoKHN1bW1lOiBudW1iZXIsIHplbGxlOiBFbGVtZW50KSA9PiBzdW1tZSArICgoemVsbGUgYXMgSFRNTFRhYmxlQ2VsbEVsZW1lbnQpLmNvbFNwYW4gfHwgMSksIDApIDogMSk7XG4gIH1cbn1cbiJdfQ==