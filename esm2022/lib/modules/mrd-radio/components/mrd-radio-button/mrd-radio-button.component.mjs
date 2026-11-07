import { booleanAttribute, ChangeDetectionStrategy, Component, Inject, Input, ViewChild } from '@angular/core';
import { BaseObject, SubscriptionHandler } from 'mrd-core';
import { MRD_RADIO_GROUP } from '../../common/mrd-radio-group.token';
import * as i0 from "@angular/core";
const _c0 = ["kreis"];
const _c1 = ["*"];
/** Ein Wert einer `mrd-radio-group`; die Beschriftung ist der Inhalt. */
export class MrdRadioButtonComponent extends BaseObject {
    gruppe;
    cdr;
    kreis;
    value;
    set disabled(value) {
        this._disabled = value;
    }
    get disabled() {
        return this._disabled || this.gruppe.disabled;
    }
    _disabled = false;
    constructor(gruppe, cdr) {
        super();
        this.gruppe = gruppe;
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        this.watch(this.gruppe.geaendert, new SubscriptionHandler(() => this.cdr.markForCheck()));
    }
    get ausgewaehlt() {
        return this.gruppe.value === this.value;
    }
    /** Per Tab erreichbar ist nur der gewaehlte Button (bzw. jeder, solange keiner gewaehlt ist); die Pfeiltasten wechseln. */
    get tabIndex() {
        return !this.disabled && (this.ausgewaehlt || this.gruppe.value === undefined || this.gruppe.value === null) ? 0 : -1;
    }
    geklickt() {
        if (!this.disabled) {
            this.gruppe.auswaehlen(this.value);
        }
    }
    taste(event) {
        switch (event.key) {
            case 'ArrowDown':
            case 'ArrowRight':
                event.preventDefault();
                this.gruppe.weiter(this.value, 1);
                break;
            case 'ArrowUp':
            case 'ArrowLeft':
                event.preventDefault();
                this.gruppe.weiter(this.value, -1);
                break;
            case ' ':
            case 'Enter':
                event.preventDefault();
                this.geklickt();
                break;
        }
    }
    fokussieren() {
        this.kreis?.nativeElement.focus();
    }
    /** @nocollapse */ static ɵfac = function MrdRadioButtonComponent_Factory(t) { return new (t || MrdRadioButtonComponent)(i0.ɵɵdirectiveInject(MRD_RADIO_GROUP), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdRadioButtonComponent, selectors: [["mrd-radio-button"]], viewQuery: function MrdRadioButtonComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.kreis = _t.first);
        } }, inputs: { value: "value", disabled: ["disabled", "disabled", booleanAttribute] }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 6, vars: 7, consts: [[1, "mrd-radio-container", 3, "click"], ["role", "radio", 1, "mrd-radio-kreis", 3, "tabIndex", "keydown"], ["kreis", ""], [1, "mrd-radio-punkt"], [1, "mrd-radio-label"]], template: function MrdRadioButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function MrdRadioButtonComponent_Template_div_click_0_listener() { return ctx.geklickt(); });
            i0.ɵɵelementStart(1, "span", 1, 2);
            i0.ɵɵlistener("keydown", function MrdRadioButtonComponent_Template_span_keydown_1_listener($event) { return ctx.taste($event); });
            i0.ɵɵelement(3, "span", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span", 4);
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵclassProp("ausgewaehlt", ctx.ausgewaehlt)("deaktiviert", ctx.disabled);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("tabIndex", ctx.tabIndex);
            i0.ɵɵattribute("aria-checked", ctx.ausgewaehlt)("aria-disabled", ctx.disabled);
        } }, styles: ["[_nghost-%COMP%]{display:block;width:-moz-fit-content;width:fit-content}.mrd-radio-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:8px;padding:4px 0;line-height:1.25em;cursor:pointer}.mrd-radio-kreis[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;width:18px;min-width:18px;height:18px;border:2px solid rgba(0,0,0,.54);border-radius:50%;outline:none;transition:border-color .15s}.mrd-radio-kreis[_ngcontent-%COMP%]:focus-visible{box-shadow:0 0 0 3px #e0f0d4}.mrd-radio-punkt[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background-color:#65b32e;transform:scale(0);transition:transform .15s}.mrd-radio-container.ausgewaehlt[_ngcontent-%COMP%]   .mrd-radio-kreis[_ngcontent-%COMP%]{border-color:#65b32e}.mrd-radio-container.ausgewaehlt[_ngcontent-%COMP%]   .mrd-radio-punkt[_ngcontent-%COMP%]{transform:scale(1)}.mrd-radio-container[_ngcontent-%COMP%]:hover:not(.deaktiviert):not(.ausgewaehlt)   .mrd-radio-kreis[_ngcontent-%COMP%]{border-color:#293d4f}.mrd-radio-container.deaktiviert[_ngcontent-%COMP%]{cursor:default}.mrd-radio-container.deaktiviert[_ngcontent-%COMP%]   .mrd-radio-kreis[_ngcontent-%COMP%]{border-color:#afa6a6}.mrd-radio-container.deaktiviert[_ngcontent-%COMP%]   .mrd-radio-punkt[_ngcontent-%COMP%]{background-color:#afa6a6}.mrd-radio-container.deaktiviert[_ngcontent-%COMP%]   .mrd-radio-label[_ngcontent-%COMP%]{color:#afa6a6}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdRadioButtonComponent, [{
        type: Component,
        args: [{ selector: 'mrd-radio-button', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-radio-container\"\n  [class.ausgewaehlt]=\"ausgewaehlt\"\n  [class.deaktiviert]=\"disabled\"\n  (click)=\"geklickt()\">\n  <span #kreis class=\"mrd-radio-kreis\"\n    role=\"radio\"\n    [attr.aria-checked]=\"ausgewaehlt\"\n    [attr.aria-disabled]=\"disabled\"\n    [tabIndex]=\"tabIndex\"\n    (keydown)=\"taste($event)\">\n    <span class=\"mrd-radio-punkt\"></span>\n  </span>\n  <span class=\"mrd-radio-label\"><ng-content></ng-content></span>\n</div>\n", styles: [":host{display:block;width:-moz-fit-content;width:fit-content}.mrd-radio-container{display:flex;flex-direction:row;align-items:center;gap:8px;padding:4px 0;line-height:1.25em;cursor:pointer}.mrd-radio-kreis{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;width:18px;min-width:18px;height:18px;border:2px solid rgba(0,0,0,.54);border-radius:50%;outline:none;transition:border-color .15s}.mrd-radio-kreis:focus-visible{box-shadow:0 0 0 3px #e0f0d4}.mrd-radio-punkt{width:8px;height:8px;border-radius:50%;background-color:#65b32e;transform:scale(0);transition:transform .15s}.mrd-radio-container.ausgewaehlt .mrd-radio-kreis{border-color:#65b32e}.mrd-radio-container.ausgewaehlt .mrd-radio-punkt{transform:scale(1)}.mrd-radio-container:hover:not(.deaktiviert):not(.ausgewaehlt) .mrd-radio-kreis{border-color:#293d4f}.mrd-radio-container.deaktiviert{cursor:default}.mrd-radio-container.deaktiviert .mrd-radio-kreis{border-color:#afa6a6}.mrd-radio-container.deaktiviert .mrd-radio-punkt{background-color:#afa6a6}.mrd-radio-container.deaktiviert .mrd-radio-label{color:#afa6a6}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MRD_RADIO_GROUP]
            }] }, { type: i0.ChangeDetectorRef }]; }, { kreis: [{
            type: ViewChild,
            args: ['kreis']
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXJhZGlvLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLXJhZGlvL2NvbXBvbmVudHMvbXJkLXJhZGlvLWJ1dHRvbi9tcmQtcmFkaW8tYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtcmFkaW8vY29tcG9uZW50cy9tcmQtcmFkaW8tYnV0dG9uL21yZC1yYWRpby1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdKLE9BQU8sRUFBRSxVQUFVLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBd0IsTUFBTSxvQ0FBb0MsQ0FBQzs7OztBQUUzRix5RUFBeUU7QUFPekUsTUFBTSxPQUFPLHVCQUF3QixTQUFRLFVBQVU7SUFlbkI7SUFDeEI7SUFka0IsS0FBSyxDQUEwQjtJQUUzQyxLQUFLLENBQVU7SUFFL0IsSUFBaUQsUUFBUSxDQUFDLEtBQWM7UUFDdEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDaEQsQ0FBQztJQUNPLFNBQVMsR0FBWSxLQUFLLENBQUM7SUFFbkMsWUFDa0MsTUFBNEIsRUFDcEQsR0FBc0I7UUFFOUIsS0FBSyxFQUFFLENBQUM7UUFId0IsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDcEQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7SUFHaEMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksbUJBQW1CLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDMUMsQ0FBQztJQUVELDJIQUEySDtJQUMzSCxJQUFXLFFBQVE7UUFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4SCxDQUFDO0lBRU0sUUFBUTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsS0FBb0I7UUFDL0IsUUFBUSxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ2pCLEtBQUssV0FBVyxDQUFDO1lBQ2pCLEtBQUssWUFBWTtnQkFDZixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLE1BQU07WUFDUixLQUFLLFNBQVMsQ0FBQztZQUNmLEtBQUssV0FBVztnQkFDZCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsTUFBTTtZQUNSLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxPQUFPO2dCQUNWLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQixNQUFNO1NBQ1Q7SUFDSCxDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwQyxDQUFDO29HQTlEVSx1QkFBdUIsdUJBZXhCLGVBQWU7NEZBZmQsdUJBQXVCOzs7OzswRUFNZixnQkFBZ0I7O1lDakJyQyw4QkFHdUI7WUFBckIsaUdBQVMsY0FBVSxJQUFDO1lBQ3BCLGtDQUs0QjtZQUExQiw0R0FBVyxpQkFBYSxJQUFDO1lBQ3pCLDBCQUFxQztZQUN2QyxpQkFBTztZQUNQLCtCQUE4QjtZQUFBLGtCQUF5QjtZQUFBLGlCQUFPLEVBQUE7O1lBWDlELDhDQUFpQyw2QkFBQTtZQU8vQixlQUFxQjtZQUFyQix1Q0FBcUI7WUFGckIsK0NBQWlDLCtCQUFBOzs7dUZES3hCLHVCQUF1QjtjQU5uQyxTQUFTOzJCQUNFLGtCQUFrQixtQkFHWCx1QkFBdUIsQ0FBQyxNQUFNOztzQkFpQjVDLE1BQU07dUJBQUMsZUFBZTt3REFiRyxLQUFLO2tCQUFoQyxTQUFTO21CQUFDLE9BQU87WUFFRixLQUFLO2tCQUFwQixLQUFLO1lBRTJDLFFBQVE7a0JBQXhELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBib29sZWFuQXR0cmlidXRlLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlT2JqZWN0LCBTdWJzY3JpcHRpb25IYW5kbGVyIH0gZnJvbSAnbXJkLWNvcmUnO1xuaW1wb3J0IHsgTVJEX1JBRElPX0dST1VQLCBNcmRSYWRpb0dyb3VwS29udGV4dCB9IGZyb20gJy4uLy4uL2NvbW1vbi9tcmQtcmFkaW8tZ3JvdXAudG9rZW4nO1xuXG4vKiogRWluIFdlcnQgZWluZXIgYG1yZC1yYWRpby1ncm91cGA7IGRpZSBCZXNjaHJpZnR1bmcgaXN0IGRlciBJbmhhbHQuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtcmQtcmFkaW8tYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1yYWRpby1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tcmQtcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE1yZFJhZGlvQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgQmFzZU9iamVjdCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIEBWaWV3Q2hpbGQoJ2tyZWlzJykgcHJpdmF0ZSBrcmVpczogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG5cbiAgQElucHV0KCkgcHVibGljIHZhbHVlOiB1bmtub3duO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQgfHwgdGhpcy5ncnVwcGUuZGlzYWJsZWQ7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KE1SRF9SQURJT19HUk9VUCkgcHVibGljIGdydXBwZTogTXJkUmFkaW9Hcm91cEtvbnRleHQsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy53YXRjaCh0aGlzLmdydXBwZS5nZWFlbmRlcnQsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGF1c2dld2FlaGx0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmdydXBwZS52YWx1ZSA9PT0gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIC8qKiBQZXIgVGFiIGVycmVpY2hiYXIgaXN0IG51ciBkZXIgZ2V3YWVobHRlIEJ1dHRvbiAoYnp3LiBqZWRlciwgc29sYW5nZSBrZWluZXIgZ2V3YWVobHQgaXN0KTsgZGllIFBmZWlsdGFzdGVuIHdlY2hzZWxuLiAqL1xuICBwdWJsaWMgZ2V0IHRhYkluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuICF0aGlzLmRpc2FibGVkICYmICh0aGlzLmF1c2dld2FlaGx0IHx8IHRoaXMuZ3J1cHBlLnZhbHVlID09PSB1bmRlZmluZWQgfHwgdGhpcy5ncnVwcGUudmFsdWUgPT09IG51bGwpID8gMCA6IC0xO1xuICB9XG5cbiAgcHVibGljIGdla2xpY2t0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5ncnVwcGUuYXVzd2FlaGxlbih0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdGFzdGUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmdydXBwZS53ZWl0ZXIodGhpcy52YWx1ZSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmdydXBwZS53ZWl0ZXIodGhpcy52YWx1ZSwgLTEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJyAnOlxuICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmdla2xpY2t0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb2t1c3NpZXJlbigpOiB2b2lkIHtcbiAgICB0aGlzLmtyZWlzPy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJtcmQtcmFkaW8tY29udGFpbmVyXCJcbiAgW2NsYXNzLmF1c2dld2FlaGx0XT1cImF1c2dld2FlaGx0XCJcbiAgW2NsYXNzLmRlYWt0aXZpZXJ0XT1cImRpc2FibGVkXCJcbiAgKGNsaWNrKT1cImdla2xpY2t0KClcIj5cbiAgPHNwYW4gI2tyZWlzIGNsYXNzPVwibXJkLXJhZGlvLWtyZWlzXCJcbiAgICByb2xlPVwicmFkaW9cIlxuICAgIFthdHRyLmFyaWEtY2hlY2tlZF09XCJhdXNnZXdhZWhsdFwiXG4gICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgW3RhYkluZGV4XT1cInRhYkluZGV4XCJcbiAgICAoa2V5ZG93bik9XCJ0YXN0ZSgkZXZlbnQpXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJtcmQtcmFkaW8tcHVua3RcIj48L3NwYW4+XG4gIDwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9XCJtcmQtcmFkaW8tbGFiZWxcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPlxuPC9kaXY+XG4iXX0=