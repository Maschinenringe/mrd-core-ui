import { Directive, Input, TemplateRef, ViewChild, booleanAttribute } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class MrdTabComponent {
    cdr;
    tr;
    _implicitContent;
    set label(value) {
        this._label = value;
        this.cdr.detectChanges();
        this.zustandGeaendert.next();
    }
    get label() {
        return this._label;
    }
    _label;
    /** Gesperrter Tab: Kopf ausgegraut, Klick ohne Wirkung; per Code (`selectedIndex`) bleibt er waehlbar. `*mrdTab="'Label'; disabled: bedingung"` */
    set disabled(value) {
        this._disabled = value;
        this.zustandGeaendert.next();
    }
    get disabled() {
        return this._disabled;
    }
    _disabled = false;
    /**
     * Landet als `configname`-Attribut am Tabkopf, damit die Rollenpruefung (`ROLE_GUARD` aus mrd-core) den Kopf
     * findet und ausblenden kann. `*mrdTab="'Label'; configname: 'mat-tab::name'"`
     */
    set configname(value) {
        this._configname = value;
        this.zustandGeaendert.next();
    }
    get configname() {
        return this._configname;
    }
    _configname;
    /** Meldet der (OnPush-)Tab-Gruppe Aenderungen an Beschriftung, Sperre und Configname, damit der Kopf aktualisiert wird */
    zustandGeaendert = new Subject();
    _embeddedViewRef = null;
    get content() {
        if (!this._embeddedViewRef || this._embeddedViewRef.destroyed) {
            this._embeddedViewRef = this.tr.createEmbeddedView({ $implicit: 'Angular', dateNow: new Date() });
        }
        return this._embeddedViewRef;
    }
    /**
     * Zero based index of the tab
     *
     * @memberof MrdTabComponent
     */
    set index(value) {
        this._index = value;
        this.cdr.detectChanges();
    }
    get index() {
        return this._index;
    }
    _index;
    set active(value) {
        this._active = value;
        this.cdr.detectChanges();
    }
    get active() {
        return this._active;
    }
    _active;
    preserveContent = false;
    constructor(cdr, tr) {
        this.cdr = cdr;
        this.tr = tr;
    }
    ngOnDestroy() {
        this.zustandGeaendert.complete();
    }
    /** @nocollapse */ static ɵfac = function MrdTabComponent_Factory(t) { return new (t || MrdTabComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: MrdTabComponent, selectors: [["", "mrdTab", ""]], viewQuery: function MrdTabComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(TemplateRef, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._implicitContent = _t.first);
        } }, inputs: { label: ["mrdTab", "label"], disabled: ["mrdTabDisabled", "disabled", booleanAttribute], configname: ["mrdTabConfigname", "configname"], preserveContent: ["mrdTabPreserveContent", "preserveContent", booleanAttribute] }, features: [i0.ɵɵInputTransformsFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdTabComponent, [{
        type: Directive,
        args: [{
                selector: '[mrdTab]'
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.TemplateRef }]; }, { _implicitContent: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }], label: [{
            type: Input,
            args: ["mrdTab"]
        }], disabled: [{
            type: Input,
            args: [{ alias: 'mrdTabDisabled', transform: booleanAttribute }]
        }], configname: [{
            type: Input,
            args: ['mrdTabConfigname']
        }], preserveContent: [{
            type: Input,
            args: [{ alias: 'mrdTabPreserveContent', transform: booleanAttribute }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXRhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLXRhYnMvY29tcG9uZW50cy9tcmQtdGFiL21yZC10YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBcUIsU0FBUyxFQUFtQixLQUFLLEVBQWEsV0FBVyxFQUFFLFNBQVMsRUFBVyxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuSixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQU0vQixNQUFNLE9BQU8sZUFBZTtJQTRFaEI7SUFDQztJQTNFNkIsZ0JBQWdCLENBQW1CO0lBRTNFLElBQTRCLEtBQUssQ0FBQyxLQUFhO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNPLE1BQU0sQ0FBUztJQUV2QixtSkFBbUo7SUFDbkosSUFBMEUsUUFBUSxDQUFDLEtBQWM7UUFDL0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDTyxTQUFTLEdBQVksS0FBSyxDQUFDO0lBRW5DOzs7T0FHRztJQUNILElBQXNDLFVBQVUsQ0FBQyxLQUFhO1FBQzVELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ08sV0FBVyxDQUFTO0lBRTVCLDBIQUEwSDtJQUMxRyxnQkFBZ0IsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQUU5RCxnQkFBZ0IsR0FBZ0MsSUFBSSxDQUFDO0lBRTdELElBQUksT0FBTztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRTtZQUM3RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ25HO1FBQ0QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFXLEtBQUssQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ08sTUFBTSxDQUFTO0lBRXZCLElBQVcsTUFBTSxDQUFDLEtBQWM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFDTyxPQUFPLENBQVU7SUFFbUQsZUFBZSxHQUFZLEtBQUssQ0FBQztJQUc3RyxZQUNVLEdBQXNCLEVBQ3JCLEVBQW9CO1FBRHJCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3JCLE9BQUUsR0FBRixFQUFFLENBQWtCO0lBQzVCLENBQUM7SUFFSixXQUFXO1FBQ1QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25DLENBQUM7NEZBbEZVLGVBQWU7NEZBQWYsZUFBZTsyQkFFZixXQUFXOzs7OzRGQWFzQixnQkFBZ0IsaUhBeURWLGdCQUFnQjs7dUZBeEV2RCxlQUFlO2NBSDNCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTthQUNyQjs4RkFHeUMsZ0JBQWdCO2tCQUF2RCxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7WUFFVixLQUFLO2tCQUFoQyxLQUFLO21CQUFDLFFBQVE7WUFXMkQsUUFBUTtrQkFBakYsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFhdkIsVUFBVTtrQkFBL0MsS0FBSzttQkFBQyxrQkFBa0I7WUE0Q21ELGVBQWU7a0JBQTFGLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsdUJBQXVCLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRW1iZWRkZWRWaWV3UmVmLCBJbnB1dCwgT25EZXN0cm95LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBWaWV3UmVmLCBib29sZWFuQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21yZFRhYl0nXG59KVxuZXhwb3J0IGNsYXNzIE1yZFRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwge3N0YXRpYzogdHJ1ZX0pIF9pbXBsaWNpdENvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KFwibXJkVGFiXCIpIHB1YmxpYyBzZXQgbGFiZWwodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuenVzdGFuZEdlYWVuZGVydC5uZXh0KCk7XG4gIH1cbiAgcHVibGljIGdldCBsYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgfVxuICBwcml2YXRlIF9sYWJlbDogc3RyaW5nO1xuXG4gIC8qKiBHZXNwZXJydGVyIFRhYjogS29wZiBhdXNnZWdyYXV0LCBLbGljayBvaG5lIFdpcmt1bmc7IHBlciBDb2RlIChgc2VsZWN0ZWRJbmRleGApIGJsZWlidCBlciB3YWVobGJhci4gYCptcmRUYWI9XCInTGFiZWwnOyBkaXNhYmxlZDogYmVkaW5ndW5nXCJgICovXG4gIEBJbnB1dCh7YWxpYXM6ICdtcmRUYWJEaXNhYmxlZCcsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuICAgIHRoaXMuenVzdGFuZEdlYWVuZGVydC5uZXh0KCk7XG4gIH1cbiAgcHVibGljIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogTGFuZGV0IGFscyBgY29uZmlnbmFtZWAtQXR0cmlidXQgYW0gVGFia29wZiwgZGFtaXQgZGllIFJvbGxlbnBydWVmdW5nIChgUk9MRV9HVUFSRGAgYXVzIG1yZC1jb3JlKSBkZW4gS29wZlxuICAgKiBmaW5kZXQgdW5kIGF1c2JsZW5kZW4ga2Fubi4gYCptcmRUYWI9XCInTGFiZWwnOyBjb25maWduYW1lOiAnbWF0LXRhYjo6bmFtZSdcImBcbiAgICovXG4gIEBJbnB1dCgnbXJkVGFiQ29uZmlnbmFtZScpIHB1YmxpYyBzZXQgY29uZmlnbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29uZmlnbmFtZSA9IHZhbHVlO1xuICAgIHRoaXMuenVzdGFuZEdlYWVuZGVydC5uZXh0KCk7XG4gIH1cbiAgcHVibGljIGdldCBjb25maWduYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZ25hbWU7XG4gIH1cbiAgcHJpdmF0ZSBfY29uZmlnbmFtZTogc3RyaW5nO1xuXG4gIC8qKiBNZWxkZXQgZGVyIChPblB1c2gtKVRhYi1HcnVwcGUgQWVuZGVydW5nZW4gYW4gQmVzY2hyaWZ0dW5nLCBTcGVycmUgdW5kIENvbmZpZ25hbWUsIGRhbWl0IGRlciBLb3BmIGFrdHVhbGlzaWVydCB3aXJkICovXG4gIHB1YmxpYyByZWFkb25seSB6dXN0YW5kR2VhZW5kZXJ0OiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBwcml2YXRlIF9lbWJlZGRlZFZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxhbnk+IHwgbnVsbCA9IG51bGw7XG5cbiAgZ2V0IGNvbnRlbnQoKTogVmlld1JlZiB8IG51bGwge1xuICAgIGlmICghdGhpcy5fZW1iZWRkZWRWaWV3UmVmIHx8IHRoaXMuX2VtYmVkZGVkVmlld1JlZi5kZXN0cm95ZWQpIHtcbiAgICAgIHRoaXMuX2VtYmVkZGVkVmlld1JlZiA9IHRoaXMudHIuY3JlYXRlRW1iZWRkZWRWaWV3KHsgJGltcGxpY2l0OiAnQW5ndWxhcicsIGRhdGVOb3c6IG5ldyBEYXRlKCkgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9lbWJlZGRlZFZpZXdSZWY7XG4gIH1cblxuICAvKipcbiAgICogWmVybyBiYXNlZCBpbmRleCBvZiB0aGUgdGFiXG4gICAqXG4gICAqIEBtZW1iZXJvZiBNcmRUYWJDb21wb25lbnRcbiAgICovXG4gIHB1YmxpYyBzZXQgaW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2luZGV4ID0gdmFsdWU7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIHB1YmxpYyBnZXQgaW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faW5kZXg7XG4gIH1cbiAgcHJpdmF0ZSBfaW5kZXg6IG51bWJlcjtcblxuICBwdWJsaWMgc2V0IGFjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FjdGl2ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICBwdWJsaWMgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG4gIHByaXZhdGUgX2FjdGl2ZTogYm9vbGVhbjtcblxuICBASW5wdXQoe2FsaWFzOiAnbXJkVGFiUHJlc2VydmVDb250ZW50Jyx0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgcHJlc2VydmVDb250ZW50OiBib29sZWFuID0gZmFsc2U7XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcmVhZG9ubHkgdHI6IFRlbXBsYXRlUmVmPGFueT5cbiAgKSB7fVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuenVzdGFuZEdlYWVuZGVydC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=