import { Directive, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Haelt die Sortierung fuer alle `mrd-sort-header` darunter (Tabellenkopf, Div-Zeile o. Ae.).
 * Der Zustand kommt von aussen (`[mrdSort]`), z. B. aus einem Cookie; `mrdSortChange` meldet nur Klicks.
 *
 * `<tr [mrdSort]="sortierung" (mrdSortChange)="sortieren($event)"><th mrd-sort-header="datum">Datum</th></tr>`
 */
export class MrdSortDirective {
    /** Ohne Wert (`mrdSort` als reines Attribut) ist nichts sortiert */
    set sortierung(value) {
        this.active = value ? value.active : null;
        this.direction = value ? value.direction : '';
        this.zustandGeaendert.next();
    }
    /** Richtung beim ersten Klick auf eine Spalte; je Spalte ueber `start` am Header ueberschreibbar */
    start = 'asc';
    /** Dritter Klick hebt die Sortierung auf; ohne bleibt es beim Wechsel zwischen auf- und absteigend */
    clear = false;
    set disabled(value) {
        this._disabled = value;
        this.zustandGeaendert.next();
    }
    get disabled() {
        return this._disabled;
    }
    _disabled = false;
    mrdSortChange = new EventEmitter();
    active = null;
    direction = '';
    /** Informiert die Header (OnPush) ueber Aenderungen */
    zustandGeaendert = new Subject();
    ngOnDestroy() {
        this.zustandGeaendert.complete();
    }
    /** Wird vom Header beim Klick aufgerufen */
    sortieren(id, start) {
        const erste = start || this.start;
        this.direction = this.naechsteRichtung(id, erste);
        this.active = this.direction ? id : null;
        this.zustandGeaendert.next();
        this.mrdSortChange.emit({ active: this.active ?? id, direction: this.direction });
    }
    naechsteRichtung(id, erste) {
        if (this.active !== id || !this.direction) {
            return erste;
        }
        if (this.direction === erste) {
            return erste === 'asc' ? 'desc' : 'asc';
        }
        return this.clear ? '' : erste;
    }
    /** @nocollapse */ static ɵfac = function MrdSortDirective_Factory(t) { return new (t || MrdSortDirective)(); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdSortDirective, selectors: [["", "mrdSort", ""]], inputs: { sortierung: ["mrdSort", "sortierung"], start: ["mrdSortStart", "start"], clear: ["mrdSortClear", "clear", booleanAttribute], disabled: ["mrdSortDisabled", "disabled", booleanAttribute] }, outputs: { mrdSortChange: "mrdSortChange" }, exportAs: ["mrdSort"], features: [i0.ɵɵInputTransformsFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdSortDirective, [{
        type: Directive,
        args: [{
                selector: '[mrdSort]',
                exportAs: 'mrdSort'
            }]
    }], null, { sortierung: [{
            type: Input,
            args: ['mrdSort']
        }], start: [{
            type: Input,
            args: ['mrdSortStart']
        }], clear: [{
            type: Input,
            args: [{ alias: 'mrdSortClear', transform: booleanAttribute }]
        }], disabled: [{
            type: Input,
            args: [{ alias: 'mrdSortDisabled', transform: booleanAttribute }]
        }], mrdSortChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXNvcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1zb3J0L2NvbW1vbi9kaXJlY3RpdmUvbXJkLXNvcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHL0I7Ozs7O0dBS0c7QUFLSCxNQUFNLE9BQU8sZ0JBQWdCO0lBRTNCLG9FQUFvRTtJQUNwRSxJQUE2QixVQUFVLENBQUMsS0FBZ0M7UUFDdEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsb0dBQW9HO0lBQ3RFLEtBQUssR0FBa0MsS0FBSyxDQUFDO0lBRTNFLHNHQUFzRztJQUNsQyxLQUFLLEdBQVksS0FBSyxDQUFDO0lBRTNGLElBQTJFLFFBQVEsQ0FBQyxLQUFjO1FBQ2hHLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ08sU0FBUyxHQUFZLEtBQUssQ0FBQztJQUVULGFBQWEsR0FBZ0MsSUFBSSxZQUFZLEVBQWlCLENBQUM7SUFFbEcsTUFBTSxHQUFXLElBQUksQ0FBQztJQUN0QixTQUFTLEdBQXFCLEVBQUUsQ0FBQztJQUV4Qyx1REFBdUQ7SUFDdkMsZ0JBQWdCLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7SUFFdEUsV0FBVztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsNENBQTRDO0lBQ3JDLFNBQVMsQ0FBQyxFQUFVLEVBQUUsS0FBcUM7UUFDaEUsTUFBTSxLQUFLLEdBQWtDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVPLGdCQUFnQixDQUFDLEVBQVUsRUFBRSxLQUFvQztRQUN2RSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN6QyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssRUFBRTtZQUM1QixPQUFPLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNqQyxDQUFDOzZGQXJEVSxnQkFBZ0I7NEZBQWhCLGdCQUFnQix3SkFhZSxnQkFBZ0IsNkNBRWIsZ0JBQWdCOzt1RkFmbEQsZ0JBQWdCO2NBSjVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLFNBQVM7YUFDcEI7Z0JBSThCLFVBQVU7a0JBQXRDLEtBQUs7bUJBQUMsU0FBUztZQU9jLEtBQUs7a0JBQWxDLEtBQUs7bUJBQUMsY0FBYztZQUcrQyxLQUFLO2tCQUF4RSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFZ0IsUUFBUTtrQkFBbEYsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFTcEMsYUFBYTtrQkFBdEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQsIGJvb2xlYW5BdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1yZFNvcnREaXJlY3Rpb24sIE1yZFNvcnRpZXJ1bmcgfSBmcm9tICcuLi9tb2RlbC9tcmQtc29ydC5tb2RlbCc7XG5cbi8qKlxuICogSGFlbHQgZGllIFNvcnRpZXJ1bmcgZnVlciBhbGxlIGBtcmQtc29ydC1oZWFkZXJgIGRhcnVudGVyIChUYWJlbGxlbmtvcGYsIERpdi1aZWlsZSBvLiBBZS4pLlxuICogRGVyIFp1c3RhbmQga29tbXQgdm9uIGF1c3NlbiAoYFttcmRTb3J0XWApLCB6LiBCLiBhdXMgZWluZW0gQ29va2llOyBgbXJkU29ydENoYW5nZWAgbWVsZGV0IG51ciBLbGlja3MuXG4gKlxuICogYDx0ciBbbXJkU29ydF09XCJzb3J0aWVydW5nXCIgKG1yZFNvcnRDaGFuZ2UpPVwic29ydGllcmVuKCRldmVudClcIj48dGggbXJkLXNvcnQtaGVhZGVyPVwiZGF0dW1cIj5EYXR1bTwvdGg+PC90cj5gXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttcmRTb3J0XScsXG4gIGV4cG9ydEFzOiAnbXJkU29ydCdcbn0pXG5leHBvcnQgY2xhc3MgTXJkU29ydERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgLyoqIE9obmUgV2VydCAoYG1yZFNvcnRgIGFscyByZWluZXMgQXR0cmlidXQpIGlzdCBuaWNodHMgc29ydGllcnQgKi9cbiAgQElucHV0KCdtcmRTb3J0JykgcHVibGljIHNldCBzb3J0aWVydW5nKHZhbHVlOiBNcmRTb3J0aWVydW5nIHwgJycgfCBudWxsKSB7XG4gICAgdGhpcy5hY3RpdmUgPSB2YWx1ZSA/IHZhbHVlLmFjdGl2ZSA6IG51bGw7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSB2YWx1ZSA/IHZhbHVlLmRpcmVjdGlvbiA6ICcnO1xuICAgIHRoaXMuenVzdGFuZEdlYWVuZGVydC5uZXh0KCk7XG4gIH1cblxuICAvKiogUmljaHR1bmcgYmVpbSBlcnN0ZW4gS2xpY2sgYXVmIGVpbmUgU3BhbHRlOyBqZSBTcGFsdGUgdWViZXIgYHN0YXJ0YCBhbSBIZWFkZXIgdWViZXJzY2hyZWliYmFyICovXG4gIEBJbnB1dCgnbXJkU29ydFN0YXJ0JykgcHVibGljIHN0YXJ0OiBFeGNsdWRlPE1yZFNvcnREaXJlY3Rpb24sICcnPiA9ICdhc2MnO1xuXG4gIC8qKiBEcml0dGVyIEtsaWNrIGhlYnQgZGllIFNvcnRpZXJ1bmcgYXVmOyBvaG5lIGJsZWlidCBlcyBiZWltIFdlY2hzZWwgendpc2NoZW4gYXVmLSB1bmQgYWJzdGVpZ2VuZCAqL1xuICBASW5wdXQoe2FsaWFzOiAnbXJkU29ydENsZWFyJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGNsZWFyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KHthbGlhczogJ21yZFNvcnREaXNhYmxlZCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuICAgIHRoaXMuenVzdGFuZEdlYWVuZGVydC5uZXh0KCk7XG4gIH1cbiAgcHVibGljIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgcHVibGljIHJlYWRvbmx5IG1yZFNvcnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxNcmRTb3J0aWVydW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8TXJkU29ydGllcnVuZz4oKTtcblxuICBwdWJsaWMgYWN0aXZlOiBzdHJpbmcgPSBudWxsO1xuICBwdWJsaWMgZGlyZWN0aW9uOiBNcmRTb3J0RGlyZWN0aW9uID0gJyc7XG5cbiAgLyoqIEluZm9ybWllcnQgZGllIEhlYWRlciAoT25QdXNoKSB1ZWJlciBBZW5kZXJ1bmdlbiAqL1xuICBwdWJsaWMgcmVhZG9ubHkgenVzdGFuZEdlYWVuZGVydDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy56dXN0YW5kR2VhZW5kZXJ0LmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKiogV2lyZCB2b20gSGVhZGVyIGJlaW0gS2xpY2sgYXVmZ2VydWZlbiAqL1xuICBwdWJsaWMgc29ydGllcmVuKGlkOiBzdHJpbmcsIHN0YXJ0PzogRXhjbHVkZTxNcmRTb3J0RGlyZWN0aW9uLCAnJz4pOiB2b2lkIHtcbiAgICBjb25zdCBlcnN0ZTogRXhjbHVkZTxNcmRTb3J0RGlyZWN0aW9uLCAnJz4gPSBzdGFydCB8fCB0aGlzLnN0YXJ0O1xuICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5uYWVjaHN0ZVJpY2h0dW5nKGlkLCBlcnN0ZSk7XG4gICAgdGhpcy5hY3RpdmUgPSB0aGlzLmRpcmVjdGlvbiA/IGlkIDogbnVsbDtcbiAgICB0aGlzLnp1c3RhbmRHZWFlbmRlcnQubmV4dCgpO1xuICAgIHRoaXMubXJkU29ydENoYW5nZS5lbWl0KHsgYWN0aXZlOiB0aGlzLmFjdGl2ZSA/PyBpZCwgZGlyZWN0aW9uOiB0aGlzLmRpcmVjdGlvbiB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbmFlY2hzdGVSaWNodHVuZyhpZDogc3RyaW5nLCBlcnN0ZTogRXhjbHVkZTxNcmRTb3J0RGlyZWN0aW9uLCAnJz4pOiBNcmRTb3J0RGlyZWN0aW9uIHtcbiAgICBpZiAodGhpcy5hY3RpdmUgIT09IGlkIHx8ICF0aGlzLmRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuIGVyc3RlO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IGVyc3RlKSB7XG4gICAgICByZXR1cm4gZXJzdGUgPT09ICdhc2MnID8gJ2Rlc2MnIDogJ2FzYyc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNsZWFyID8gJycgOiBlcnN0ZTtcbiAgfVxufVxuIl19