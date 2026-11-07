import { booleanAttribute, ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { BaseObject, SubscriptionHandler, Util } from 'mrd-core';
import { merge, Subject } from 'rxjs';
import { MRD_RADIO_GROUP } from '../../common/mrd-radio-group.token';
import { MrdRadioButtonComponent } from '../mrd-radio-button/mrd-radio-button.component';
import * as i0 from "@angular/core";
const _c0 = ["*"];
/**
 * Gruppe von Radio-Buttons: genau ein Wert ist gewaehlt. Bindung ueber `[(value)]` oder `[mrdFormControl]`.
 *
 * ```html
 * <mrd-radio-group [(value)]="sortierung" vertical>
 *   <mrd-radio-button value="datum">Datum</mrd-radio-button>
 *   <mrd-radio-button value="schlag">Schlagname</mrd-radio-button>
 * </mrd-radio-group>
 * ```
 */
export class MrdRadioGroupComponent extends BaseObject {
    cdr;
    buttons;
    /** Wert und Deaktivierung des Controls werden laufend uebernommen, auch nach setValue(), reset(), disable() und enable() */
    set formControl(control) {
        this.formularAbo?.unsubscribe();
        this._formControl = control;
        if (Util.isDefined(control)) {
            this.wertSetzen(control.value);
            this.formularAbo = this.watch(merge(control.valueChanges, control.control.statusChanges), new SubscriptionHandler(() => {
                this.wertSetzen(control.value);
            }));
        }
    }
    get formControl() {
        return this._formControl;
    }
    _formControl;
    formularAbo;
    set value(value) {
        this.wertSetzen(value);
    }
    get value() {
        return this._value;
    }
    _value;
    set disabled(value) {
        this._disabled = value;
        this.geaendert$.next();
    }
    get disabled() {
        return this._disabled || (Util.isDefined(this.formControl) && this.formControl.disabled);
    }
    _disabled = false;
    /** Buttons untereinander statt nebeneinander */
    vertical = false;
    /** Nur bei Auswahl durch den Benutzer, nicht beim Setzen von aussen */
    valueChange = new EventEmitter();
    geaendert$ = new Subject();
    geaendert = this.geaendert$.asObservable();
    constructor(cdr) {
        super();
        this.cdr = cdr;
    }
    auswaehlen(value) {
        if (this.disabled || value === this._value) {
            return;
        }
        this.wertSetzen(value);
        if (Util.isDefined(this.formControl)) {
            this.formControl.setValue(value);
        }
        this.valueChange.emit(value);
    }
    weiter(von, richtung) {
        const waehlbar = (this.buttons?.toArray() ?? []).filter((button) => !button.disabled);
        if (waehlbar.length === 0) {
            return;
        }
        const index = waehlbar.findIndex((button) => button.value === von);
        const ziel = waehlbar[(index + richtung + waehlbar.length) % waehlbar.length];
        this.auswaehlen(ziel.value);
        ziel.fokussieren();
    }
    wertSetzen(value) {
        this._value = value;
        this.geaendert$.next();
        this.cdr.markForCheck();
    }
    /** @nocollapse */ static ɵfac = function MrdRadioGroupComponent_Factory(t) { return new (t || MrdRadioGroupComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdRadioGroupComponent, selectors: [["mrd-radio-group"]], contentQueries: function MrdRadioGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, MrdRadioButtonComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.buttons = _t);
        } }, hostAttrs: ["role", "radiogroup"], hostVars: 3, hostBindings: function MrdRadioGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("aria-disabled", ctx.disabled);
            i0.ɵɵclassProp("vertical", ctx.vertical);
        } }, inputs: { formControl: ["mrdFormControl", "formControl"], value: "value", disabled: ["disabled", "disabled", booleanAttribute], vertical: ["vertical", "vertical", booleanAttribute] }, outputs: { valueChange: "valueChange" }, features: [i0.ɵɵProvidersFeature([{ provide: MRD_RADIO_GROUP, useExisting: forwardRef((() => MrdRadioGroupComponent)) }]), i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MrdRadioGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, styles: ["[_nghost-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;-moz-column-gap:1.5em;column-gap:1.5em;row-gap:.25em}.vertical[_nghost-%COMP%]{flex-direction:column;align-items:flex-start}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdRadioGroupComponent, [{
        type: Component,
        args: [{ selector: 'mrd-radio-group', host: {
                    'role': 'radiogroup',
                    '[class.vertical]': 'vertical',
                    '[attr.aria-disabled]': 'disabled'
                }, providers: [{ provide: MRD_RADIO_GROUP, useExisting: forwardRef((() => MrdRadioGroupComponent)) }], changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>\n", styles: [":host{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;-moz-column-gap:1.5em;column-gap:1.5em;row-gap:.25em}:host.vertical{flex-direction:column;align-items:flex-start}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { buttons: [{
            type: ContentChildren,
            args: [MrdRadioButtonComponent, { descendants: true }]
        }], formControl: [{
            type: Input,
            args: ['mrdFormControl']
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], vertical: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], valueChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXJhZGlvLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtcmFkaW8vY29tcG9uZW50cy9tcmQtcmFkaW8tZ3JvdXAvbXJkLXJhZGlvLWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtcmFkaW8vY29tcG9uZW50cy9tcmQtcmFkaW8tZ3JvdXAvbXJkLXJhZGlvLWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDN0ssT0FBTyxFQUF5QixVQUFVLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxLQUFLLEVBQWMsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUF3QixNQUFNLG9DQUFvQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOzs7QUFFekY7Ozs7Ozs7OztHQVNHO0FBYUgsTUFBTSxPQUFPLHNCQUF1QixTQUFRLFVBQVU7SUErQ2hDO0lBN0NvRCxPQUFPLENBQXFDO0lBRXBILDRIQUE0SDtJQUM1SCxJQUFvQyxXQUFXLENBQUMsT0FBOEI7UUFDNUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxT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QyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUduQixXQUFXO2tCQUEzQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vbGVhbkF0dHJpYnV0ZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT3V0cHV0LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjY2Vzc2FibGVGb3JtQ29udHJvbCwgQmFzZU9iamVjdCwgU3Vic2NyaXB0aW9uSGFuZGxlciwgVXRpbCB9IGZyb20gJ21yZC1jb3JlJztcbmltcG9ydCB7IG1lcmdlLCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1SRF9SQURJT19HUk9VUCwgTXJkUmFkaW9Hcm91cEtvbnRleHQgfSBmcm9tICcuLi8uLi9jb21tb24vbXJkLXJhZGlvLWdyb3VwLnRva2VuJztcbmltcG9ydCB7IE1yZFJhZGlvQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vbXJkLXJhZGlvLWJ1dHRvbi9tcmQtcmFkaW8tYnV0dG9uLmNvbXBvbmVudCc7XG5cbi8qKlxuICogR3J1cHBlIHZvbiBSYWRpby1CdXR0b25zOiBnZW5hdSBlaW4gV2VydCBpc3QgZ2V3YWVobHQuIEJpbmR1bmcgdWViZXIgYFsodmFsdWUpXWAgb2RlciBgW21yZEZvcm1Db250cm9sXWAuXG4gKlxuICogYGBgaHRtbFxuICogPG1yZC1yYWRpby1ncm91cCBbKHZhbHVlKV09XCJzb3J0aWVydW5nXCIgdmVydGljYWw+XG4gKiAgIDxtcmQtcmFkaW8tYnV0dG9uIHZhbHVlPVwiZGF0dW1cIj5EYXR1bTwvbXJkLXJhZGlvLWJ1dHRvbj5cbiAqICAgPG1yZC1yYWRpby1idXR0b24gdmFsdWU9XCJzY2hsYWdcIj5TY2hsYWduYW1lPC9tcmQtcmFkaW8tYnV0dG9uPlxuICogPC9tcmQtcmFkaW8tZ3JvdXA+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXJkLXJhZGlvLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1yYWRpby1ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21yZC1yYWRpby1ncm91cC5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgJ3JvbGUnOiAncmFkaW9ncm91cCcsXG4gICAgJ1tjbGFzcy52ZXJ0aWNhbF0nOiAndmVydGljYWwnLFxuICAgICdbYXR0ci5hcmlhLWRpc2FibGVkXSc6ICdkaXNhYmxlZCdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBNUkRfUkFESU9fR1JPVVAsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1yZFJhZGlvR3JvdXBDb21wb25lbnQpIH1dLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNcmRSYWRpb0dyb3VwQ29tcG9uZW50IGV4dGVuZHMgQmFzZU9iamVjdCBpbXBsZW1lbnRzIE1yZFJhZGlvR3JvdXBLb250ZXh0IHtcblxuICBAQ29udGVudENoaWxkcmVuKE1yZFJhZGlvQnV0dG9uQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIHB1YmxpYyBidXR0b25zOiBRdWVyeUxpc3Q8TXJkUmFkaW9CdXR0b25Db21wb25lbnQ+O1xuXG4gIC8qKiBXZXJ0IHVuZCBEZWFrdGl2aWVydW5nIGRlcyBDb250cm9scyB3ZXJkZW4gbGF1ZmVuZCB1ZWJlcm5vbW1lbiwgYXVjaCBuYWNoIHNldFZhbHVlKCksIHJlc2V0KCksIGRpc2FibGUoKSB1bmQgZW5hYmxlKCkgKi9cbiAgQElucHV0KCdtcmRGb3JtQ29udHJvbCcpIHB1YmxpYyBzZXQgZm9ybUNvbnRyb2woY29udHJvbDogQWNjZXNzYWJsZUZvcm1Db250cm9sKSB7XG4gICAgdGhpcy5mb3JtdWxhckFibz8udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9mb3JtQ29udHJvbCA9IGNvbnRyb2w7XG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKGNvbnRyb2wpKSB7XG4gICAgICB0aGlzLndlcnRTZXR6ZW4oY29udHJvbC52YWx1ZSk7XG4gICAgICB0aGlzLmZvcm11bGFyQWJvID0gdGhpcy53YXRjaChtZXJnZShjb250cm9sLnZhbHVlQ2hhbmdlcywgY29udHJvbC5jb250cm9sLnN0YXR1c0NoYW5nZXMpLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoKSA9PiB7XG4gICAgICAgIHRoaXMud2VydFNldHplbihjb250cm9sLnZhbHVlKTtcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBmb3JtQ29udHJvbCgpOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xuICAgIHJldHVybiB0aGlzLl9mb3JtQ29udHJvbDtcbiAgfVxuICBwcml2YXRlIF9mb3JtQ29udHJvbDogQWNjZXNzYWJsZUZvcm1Db250cm9sO1xuICBwcml2YXRlIGZvcm11bGFyQWJvOiBTdWJzY3JpcHRpb247XG5cbiAgQElucHV0KCkgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogdW5rbm93bikge1xuICAgIHRoaXMud2VydFNldHplbih2YWx1ZSk7XG4gIH1cbiAgcHVibGljIGdldCB2YWx1ZSgpOiB1bmtub3duIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfdmFsdWU6IHVua25vd247XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmdlYWVuZGVydCQubmV4dCgpO1xuICB9XG4gIHB1YmxpYyBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkIHx8IChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSAmJiB0aGlzLmZvcm1Db250cm9sLmRpc2FibGVkKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBCdXR0b25zIHVudGVyZWluYW5kZXIgc3RhdHQgbmViZW5laW5hbmRlciAqL1xuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyB2ZXJ0aWNhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBOdXIgYmVpIEF1c3dhaGwgZHVyY2ggZGVuIEJlbnV0emVyLCBuaWNodCBiZWltIFNldHplbiB2b24gYXVzc2VuICovXG4gIEBPdXRwdXQoKSBwdWJsaWMgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjx1bmtub3duPiA9IG5ldyBFdmVudEVtaXR0ZXI8dW5rbm93bj4oKTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGdlYWVuZGVydCQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgcmVhZG9ubHkgZ2VhZW5kZXJ0OiBPYnNlcnZhYmxlPHZvaWQ+ID0gdGhpcy5nZWFlbmRlcnQkLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgYXVzd2FlaGxlbih2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHZhbHVlID09PSB0aGlzLl92YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLndlcnRTZXR6ZW4odmFsdWUpO1xuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmZvcm1Db250cm9sKSkge1xuICAgICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgd2VpdGVyKHZvbjogdW5rbm93biwgcmljaHR1bmc6IDEgfCAtMSk6IHZvaWQge1xuICAgIGNvbnN0IHdhZWhsYmFyOiBNcmRSYWRpb0J1dHRvbkNvbXBvbmVudFtdID0gKHRoaXMuYnV0dG9ucz8udG9BcnJheSgpID8/IFtdKS5maWx0ZXIoKGJ1dHRvbjogTXJkUmFkaW9CdXR0b25Db21wb25lbnQpID0+ICFidXR0b24uZGlzYWJsZWQpO1xuICAgIGlmICh3YWVobGJhci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5kZXg6IG51bWJlciA9IHdhZWhsYmFyLmZpbmRJbmRleCgoYnV0dG9uOiBNcmRSYWRpb0J1dHRvbkNvbXBvbmVudCkgPT4gYnV0dG9uLnZhbHVlID09PSB2b24pO1xuICAgIGNvbnN0IHppZWw6IE1yZFJhZGlvQnV0dG9uQ29tcG9uZW50ID0gd2FlaGxiYXJbKGluZGV4ICsgcmljaHR1bmcgKyB3YWVobGJhci5sZW5ndGgpICUgd2FlaGxiYXIubGVuZ3RoXTtcbiAgICB0aGlzLmF1c3dhZWhsZW4oemllbC52YWx1ZSk7XG4gICAgemllbC5mb2t1c3NpZXJlbigpO1xuICB9XG5cbiAgcHJpdmF0ZSB3ZXJ0U2V0emVuKHZhbHVlOiB1bmtub3duKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmdlYWVuZGVydCQubmV4dCgpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4iXX0=