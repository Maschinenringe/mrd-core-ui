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
    /** Tooltip am Tabkopf; ohne Text (null, leer) erscheint keiner. `*mrdTab="'Label'; tooltip: text"` */
    set tooltip(value) {
        this._tooltip = value;
        this.zustandGeaendert.next();
    }
    get tooltip() {
        return this._tooltip;
    }
    _tooltip = null;
    /** Meldet der (OnPush-)Tab-Gruppe Aenderungen an Beschriftung, Sperre, Configname und Tooltip, damit der Kopf aktualisiert wird */
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
        } }, inputs: { label: ["mrdTab", "label"], disabled: ["mrdTabDisabled", "disabled", booleanAttribute], configname: ["mrdTabConfigname", "configname"], tooltip: ["mrdTabTooltip", "tooltip"], preserveContent: ["mrdTabPreserveContent", "preserveContent", booleanAttribute] }, features: [i0.ɵɵInputTransformsFeature] });
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
        }], tooltip: [{
            type: Input,
            args: ['mrdTabTooltip']
        }], preserveContent: [{
            type: Input,
            args: [{ alias: 'mrdTabPreserveContent', transform: booleanAttribute }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXRhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLXRhYnMvY29tcG9uZW50cy9tcmQtdGFiL21yZC10YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBcUIsU0FBUyxFQUFtQixLQUFLLEVBQWEsV0FBVyxFQUFFLFNBQVMsRUFBVyxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuSixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQU0vQixNQUFNLE9BQU8sZUFBZTtJQXNGaEI7SUFDQztJQXJGNkIsZ0JBQWdCLENBQW1CO0lBRTNFLElBQTRCLEtBQUssQ0FBQyxLQUFhO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNPLE1BQU0sQ0FBUztJQUV2QixtSkFBbUo7SUFDbkosSUFBMEUsUUFBUSxDQUFDLEtBQWM7UUFDL0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDTyxTQUFTLEdBQVksS0FBSyxDQUFDO0lBRW5DOzs7T0FHRztJQUNILElBQXNDLFVBQVUsQ0FBQyxLQUFhO1FBQzVELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ08sV0FBVyxDQUFTO0lBRTVCLHNHQUFzRztJQUN0RyxJQUFtQyxPQUFPLENBQUMsS0FBb0I7UUFDN0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDTyxRQUFRLEdBQWtCLElBQUksQ0FBQztJQUV2QyxtSUFBbUk7SUFDbkgsZ0JBQWdCLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7SUFFOUQsZ0JBQWdCLEdBQWdDLElBQUksQ0FBQztJQUU3RCxJQUFJLE9BQU87UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7WUFDN0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNuRztRQUNELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBVyxLQUFLLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNPLE1BQU0sQ0FBUztJQUV2QixJQUFXLE1BQU0sQ0FBQyxLQUFjO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ08sT0FBTyxDQUFVO0lBRW1ELGVBQWUsR0FBWSxLQUFLLENBQUM7SUFHN0csWUFDVSxHQUFzQixFQUNyQixFQUFvQjtRQURyQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNyQixPQUFFLEdBQUYsRUFBRSxDQUFrQjtJQUM1QixDQUFDO0lBRUosV0FBVztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzRGQTVGVSxlQUFlOzRGQUFmLGVBQWU7MkJBRWYsV0FBVzs7Ozs0RkFhc0IsZ0JBQWdCLHdKQW1FVixnQkFBZ0I7O3VGQWxGdkQsZUFBZTtjQUgzQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7YUFDckI7OEZBR3lDLGdCQUFnQjtrQkFBdkQsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO1lBRVYsS0FBSztrQkFBaEMsS0FBSzttQkFBQyxRQUFRO1lBVzJELFFBQVE7a0JBQWpGLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBYXZCLFVBQVU7a0JBQS9DLEtBQUs7bUJBQUMsa0JBQWtCO1lBVVUsT0FBTztrQkFBekMsS0FBSzttQkFBQyxlQUFlO1lBNENzRCxlQUFlO2tCQUExRixLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLHVCQUF1QixFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVtYmVkZGVkVmlld1JlZiwgSW5wdXQsIE9uRGVzdHJveSwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgVmlld1JlZiwgYm9vbGVhbkF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttcmRUYWJdJ1xufSlcbmV4cG9ydCBjbGFzcyBNcmRUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHtzdGF0aWM6IHRydWV9KSBfaW1wbGljaXRDb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dChcIm1yZFRhYlwiKSBwdWJsaWMgc2V0IGxhYmVsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYWJlbCA9IHZhbHVlO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLnp1c3RhbmRHZWFlbmRlcnQubmV4dCgpO1xuICB9XG4gIHB1YmxpYyBnZXQgbGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gIH1cbiAgcHJpdmF0ZSBfbGFiZWw6IHN0cmluZztcblxuICAvKiogR2VzcGVycnRlciBUYWI6IEtvcGYgYXVzZ2VncmF1dCwgS2xpY2sgb2huZSBXaXJrdW5nOyBwZXIgQ29kZSAoYHNlbGVjdGVkSW5kZXhgKSBibGVpYnQgZXIgd2FlaGxiYXIuIGAqbXJkVGFiPVwiJ0xhYmVsJzsgZGlzYWJsZWQ6IGJlZGluZ3VuZ1wiYCAqL1xuICBASW5wdXQoe2FsaWFzOiAnbXJkVGFiRGlzYWJsZWQnLCB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICB0aGlzLnp1c3RhbmRHZWFlbmRlcnQubmV4dCgpO1xuICB9XG4gIHB1YmxpYyBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIExhbmRldCBhbHMgYGNvbmZpZ25hbWVgLUF0dHJpYnV0IGFtIFRhYmtvcGYsIGRhbWl0IGRpZSBSb2xsZW5wcnVlZnVuZyAoYFJPTEVfR1VBUkRgIGF1cyBtcmQtY29yZSkgZGVuIEtvcGZcbiAgICogZmluZGV0IHVuZCBhdXNibGVuZGVuIGthbm4uIGAqbXJkVGFiPVwiJ0xhYmVsJzsgY29uZmlnbmFtZTogJ21hdC10YWI6Om5hbWUnXCJgXG4gICAqL1xuICBASW5wdXQoJ21yZFRhYkNvbmZpZ25hbWUnKSBwdWJsaWMgc2V0IGNvbmZpZ25hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbmZpZ25hbWUgPSB2YWx1ZTtcbiAgICB0aGlzLnp1c3RhbmRHZWFlbmRlcnQubmV4dCgpO1xuICB9XG4gIHB1YmxpYyBnZXQgY29uZmlnbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWduYW1lO1xuICB9XG4gIHByaXZhdGUgX2NvbmZpZ25hbWU6IHN0cmluZztcblxuICAvKiogVG9vbHRpcCBhbSBUYWJrb3BmOyBvaG5lIFRleHQgKG51bGwsIGxlZXIpIGVyc2NoZWludCBrZWluZXIuIGAqbXJkVGFiPVwiJ0xhYmVsJzsgdG9vbHRpcDogdGV4dFwiYCAqL1xuICBASW5wdXQoJ21yZFRhYlRvb2x0aXAnKSBwdWJsaWMgc2V0IHRvb2x0aXAodmFsdWU6IHN0cmluZyB8IG51bGwpIHtcbiAgICB0aGlzLl90b29sdGlwID0gdmFsdWU7XG4gICAgdGhpcy56dXN0YW5kR2VhZW5kZXJ0Lm5leHQoKTtcbiAgfVxuICBwdWJsaWMgZ2V0IHRvb2x0aXAoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXA7XG4gIH1cbiAgcHJpdmF0ZSBfdG9vbHRpcDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIE1lbGRldCBkZXIgKE9uUHVzaC0pVGFiLUdydXBwZSBBZW5kZXJ1bmdlbiBhbiBCZXNjaHJpZnR1bmcsIFNwZXJyZSwgQ29uZmlnbmFtZSB1bmQgVG9vbHRpcCwgZGFtaXQgZGVyIEtvcGYgYWt0dWFsaXNpZXJ0IHdpcmQgKi9cbiAgcHVibGljIHJlYWRvbmx5IHp1c3RhbmRHZWFlbmRlcnQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHByaXZhdGUgX2VtYmVkZGVkVmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPGFueT4gfCBudWxsID0gbnVsbDtcblxuICBnZXQgY29udGVudCgpOiBWaWV3UmVmIHwgbnVsbCB7XG4gICAgaWYgKCF0aGlzLl9lbWJlZGRlZFZpZXdSZWYgfHwgdGhpcy5fZW1iZWRkZWRWaWV3UmVmLmRlc3Ryb3llZCkge1xuICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3UmVmID0gdGhpcy50ci5jcmVhdGVFbWJlZGRlZFZpZXcoeyAkaW1wbGljaXQ6ICdBbmd1bGFyJywgZGF0ZU5vdzogbmV3IERhdGUoKSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2VtYmVkZGVkVmlld1JlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBaZXJvIGJhc2VkIGluZGV4IG9mIHRoZSB0YWJcbiAgICpcbiAgICogQG1lbWJlcm9mIE1yZFRhYkNvbXBvbmVudFxuICAgKi9cbiAgcHVibGljIHNldCBpbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faW5kZXggPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbiAgcHVibGljIGdldCBpbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pbmRleDtcbiAgfVxuICBwcml2YXRlIF9pbmRleDogbnVtYmVyO1xuXG4gIHB1YmxpYyBzZXQgYWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gdmFsdWU7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIHB1YmxpYyBnZXQgYWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XG4gIH1cbiAgcHJpdmF0ZSBfYWN0aXZlOiBib29sZWFuO1xuXG4gIEBJbnB1dCh7YWxpYXM6ICdtcmRUYWJQcmVzZXJ2ZUNvbnRlbnQnLHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBwcmVzZXJ2ZUNvbnRlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICByZWFkb25seSB0cjogVGVtcGxhdGVSZWY8YW55PlxuICApIHt9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy56dXN0YW5kR2VhZW5kZXJ0LmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==