import { booleanAttribute, ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseObject, SubscriptionHandler, Util } from 'mrd-core';
import { merge } from 'rxjs';
import { colorAttribute } from './../../../../common/transforms/color-transform';
import { sizeAttribute } from './../../../../common/transforms/size-transform';
import { MrdToggleSwitchState } from '../../common/enum/mrd-toggle-switch-state.enum';
import { ConfigUtil } from './../../../../common/util/config.util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MrdToggleSwitchComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 7);
} if (rf & 2) {
    const bild_r2 = ctx.ngIf;
    i0.ɵɵproperty("src", bild_r2, i0.ɵɵsanitizeUrl);
} }
function MrdToggleSwitchComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "div", 9);
    i0.ɵɵlistener("click", function MrdToggleSwitchComponent_div_5_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.toggle($event, ctx_r3.MrdToggleSwitchState.LEFT)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 9);
    i0.ɵɵlistener("click", function MrdToggleSwitchComponent_div_5_Template_div_click_2_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.toggle($event, ctx_r5.MrdToggleSwitchState.RIGHT)); });
    i0.ɵɵelementEnd()();
} }
const _c0 = function (a0, a1, a2, a3, a4) { return { "mrd-toggle-switch-disabled": a0, "mrd-toggle-switch-aus": a1, "mrd-toggle-switch-state-left": a2, "mrd-toggle-switch-state-neutral": a3, "mrd-toggle-switch-state-right": a4 }; };
const _c1 = ["*"];
/**
 * Schalter mit zwei Betriebsarten:
 * - Auswahl ueber `state`/`stateChange` (links, neutral, rechts), beide Seiten in `bgColor`
 * - An/Aus ueber `[(checked)]` oder `[mrdFormControl]`: aus = links in `bgNeutralColor`, an = rechts in `bgColor`
 * Inhalt zwischen den Tags wird als klickbare Beschriftung angezeigt.
 */
export class MrdToggleSwitchComponent extends BaseObject {
    cdr;
    MrdToggleSwitchState = MrdToggleSwitchState;
    bgColor;
    bgNeutralColor;
    knobColor;
    knobNeutralColor;
    width;
    height;
    bgDisabledColor;
    knobDisabledColor;
    disabled = false;
    /** Schmale Schiene mit rundem Knopf in voller Hoehe; `height` ist dann der Knopf-Durchmesser */
    slim = false;
    /** Nur bei `slim` */
    trackHeight;
    /** Nur bei `slim`, z. B. `1px solid #293D4F` oder `none` */
    knobBorder;
    /** Position der Beschriftung (Inhalt zwischen den Tags) relativ zum Schalter */
    labelPosition = 'after';
    /** Bild im Knopf je Zustand (URL zu jpg/png/svg/...); in der An/Aus-Betriebsart ist links aus und rechts an */
    imageLeft;
    imageNeutral;
    imageRight;
    set state(value) {
        if (this._state !== value) {
            this._state = value;
            this.stateChange.emit(this._state);
        }
        this.cdr.detectChanges();
    }
    get state() {
        return this._state;
    }
    _state = MrdToggleSwitchState.NEUTRAL;
    /** Schaltet in die An/Aus-Betriebsart; null/undefined gilt als aus */
    set checked(value) {
        this.binaer = true;
        this._state = value ? MrdToggleSwitchState.RIGHT : MrdToggleSwitchState.LEFT;
        this.cdr.markForCheck();
    }
    get checked() {
        return this._state === MrdToggleSwitchState.RIGHT;
    }
    /** Schaltet in die An/Aus-Betriebsart und uebernimmt Wert und Deaktivierung des Controls */
    set formControl(control) {
        this.formularAbo?.unsubscribe();
        this._formControl = control;
        if (Util.isDefined(control)) {
            this.binaer = true;
            this.formularWertUebernehmen();
            // statusChanges, damit disable()/enable() auch bei OnPush sichtbar werden
            this.formularAbo = this.watch(merge(control.valueChanges, control.control.statusChanges), new SubscriptionHandler(() => this.formularWertUebernehmen()));
        }
    }
    get formControl() {
        return this._formControl;
    }
    _formControl;
    formularAbo;
    stateChange = new EventEmitter();
    /** Nur bei Bedienung durch den Nutzer, nicht beim Setzen von `checked` oder des Formularwerts */
    checkedChange = new EventEmitter();
    /** An/Aus-Betriebsart: aus wird in den Neutral-Farben dargestellt statt wie eine Auswahl-Seite */
    binaer = false;
    _config = ConfigUtil.getConfig();
    constructor(cdr) {
        super();
        this.cdr = cdr;
    }
    get istDeaktiviert() {
        return this.disabled || !!this._formControl?.disabled;
    }
    get aktuellesBild() {
        switch (this._state) {
            case MrdToggleSwitchState.LEFT: return this.imageLeft;
            case MrdToggleSwitchState.RIGHT: return this.imageRight;
            default: return this.imageNeutral;
        }
    }
    ngOnInit() {
        const slimConfig = this._config.toggleSwitch.slim ?? {};
        if (!this.width) {
            this.width = this.slim ? slimConfig.width : this._config.toggleSwitch.width;
        }
        if (!this.height) {
            this.height = this.slim ? slimConfig.height : this._config.toggleSwitch.height;
        }
        if (!this.trackHeight) {
            this.trackHeight = slimConfig.trackHeight;
        }
        if (!this.knobBorder) {
            this.knobBorder = slimConfig.knobBorder;
        }
        if (!this.bgColor) {
            this.bgColor = this._config.toggleSwitch.bgColor;
        }
        if (!this.bgNeutralColor) {
            this.bgNeutralColor = this._config.toggleSwitch.bgNeutralColor;
        }
        if (!this.knobColor) {
            this.knobColor = this._config.toggleSwitch.knobColor;
        }
        if (!this.knobNeutralColor) {
            this.knobNeutralColor = this._config.toggleSwitch.knobNeutralColor;
        }
        if (!this.bgDisabledColor) {
            this.bgDisabledColor = this._config.toggleSwitch.bgDisabledColor;
        }
        if (!this.knobDisabledColor) {
            this.knobDisabledColor = this._config.toggleSwitch.knobDisabledColor;
        }
        this.cdr.detectChanges();
    }
    toggle(event, state) {
        event.stopPropagation();
        // Leertaste wuerde sonst die Seite scrollen
        event.preventDefault();
        if (!this.istDeaktiviert) {
            if (state) {
                this.state = state;
            }
            else {
                this.state = this.state === MrdToggleSwitchState.LEFT ? MrdToggleSwitchState.RIGHT : MrdToggleSwitchState.LEFT;
            }
            if (this.binaer) {
                if (Util.isDefined(this._formControl)) {
                    this._formControl.setValue(this.checked);
                    this._formControl.markAsTouched();
                }
                this.checkedChange.emit(this.checked);
            }
        }
        this.cdr.detectChanges();
    }
    formularWertUebernehmen() {
        this._state = this._formControl.value ? MrdToggleSwitchState.RIGHT : MrdToggleSwitchState.LEFT;
        this.cdr.markForCheck();
    }
    /** @nocollapse */ static ɵfac = function MrdToggleSwitchComponent_Factory(t) { return new (t || MrdToggleSwitchComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdToggleSwitchComponent, selectors: [["mrd-toggle-switch"]], hostAttrs: ["role", "switch"], hostVars: 3, hostBindings: function MrdToggleSwitchComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.space", function MrdToggleSwitchComponent_keydown_space_HostBindingHandler($event) { return ctx.toggle($event); })("keydown.enter", function MrdToggleSwitchComponent_keydown_enter_HostBindingHandler($event) { return ctx.toggle($event); });
        } if (rf & 2) {
            i0.ɵɵattribute("aria-checked", ctx.state === ctx.MrdToggleSwitchState.RIGHT)("aria-disabled", ctx.istDeaktiviert)("tabindex", ctx.istDeaktiviert ? -1 : 0);
        } }, inputs: { bgColor: ["bgColor", "bgColor", colorAttribute], bgNeutralColor: ["bgNeutralColor", "bgNeutralColor", colorAttribute], knobColor: ["knobColor", "knobColor", colorAttribute], knobNeutralColor: ["knobNeutralColor", "knobNeutralColor", colorAttribute], width: ["width", "width", sizeAttribute], height: ["height", "height", sizeAttribute], bgDisabledColor: ["bgDisabledColor", "bgDisabledColor", colorAttribute], knobDisabledColor: ["knobDisabledColor", "knobDisabledColor", colorAttribute], disabled: ["disabled", "disabled", booleanAttribute], slim: ["slim", "slim", booleanAttribute], trackHeight: ["trackHeight", "trackHeight", sizeAttribute], knobBorder: "knobBorder", labelPosition: "labelPosition", imageLeft: "imageLeft", imageNeutral: "imageNeutral", imageRight: "imageRight", state: "state", checked: ["checked", "checked", booleanAttribute], formControl: ["mrdFormControl", "formControl"] }, outputs: { stateChange: "stateChange", checkedChange: "checkedChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 8, vars: 35, consts: [[1, "mrd-toggle-switch-wrapper"], [1, "mrd-toggle-switch-container"], [1, "mrd-toggle-switch-background", 3, "ngClass", "click"], [1, "mrd-toggle-switch-knob"], ["class", "mrd-toggle-switch-bild", "alt", "", 3, "src", 4, "ngIf"], ["class", "mrd-toggle-swtich-neutral-clickareas", 4, "ngIf"], [1, "mrd-toggle-switch-label", 3, "click"], ["alt", "", 1, "mrd-toggle-switch-bild", 3, "src"], [1, "mrd-toggle-swtich-neutral-clickareas"], [1, "mrd-toggle-switch-neutral-clickarea", 3, "click"]], template: function MrdToggleSwitchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵlistener("click", function MrdToggleSwitchComponent_Template_div_click_2_listener($event) { return ctx.toggle($event); });
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtemplate(4, MrdToggleSwitchComponent_img_4_Template, 1, 1, "img", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, MrdToggleSwitchComponent_div_5_Template, 3, 0, "div", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "span", 6);
            i0.ɵɵlistener("click", function MrdToggleSwitchComponent_Template_span_click_6_listener($event) { return ctx.toggle($event); });
            i0.ɵɵprojection(7);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵclassProp("mrd-toggle-switch-label-before", ctx.labelPosition === "before");
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("--bg-color", ctx.bgColor)("--knob-color", ctx.knobColor)("--bg-neutral-color", ctx.bgNeutralColor)("--knob-neutral-color", ctx.knobNeutralColor)("--bg-disabled-color", ctx.bgDisabledColor)("--knob-disabled-color", ctx.knobDisabledColor)("--width", ctx.width)("--height", ctx.height)("--track-height", ctx.trackHeight)("--knob-border", ctx.knobBorder);
            i0.ɵɵclassProp("mrd-toggle-switch-slim", ctx.slim);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(29, _c0, ctx.istDeaktiviert, ctx.binaer && ctx.state === ctx.MrdToggleSwitchState.LEFT, ctx.state === ctx.MrdToggleSwitchState.LEFT, ctx.state === ctx.MrdToggleSwitchState.NEUTRAL, ctx.state === ctx.MrdToggleSwitchState.RIGHT));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.aktuellesBild);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.istDeaktiviert && ctx.state === ctx.MrdToggleSwitchState.NEUTRAL);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("mrd-toggle-switch-label-disabled", ctx.istDeaktiviert);
        } }, dependencies: [i1.NgClass, i1.NgIf], styles: ["[_nghost-%COMP%]{width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;outline:none}[_nghost-%COMP%]:focus-visible   .mrd-toggle-switch-background[_ngcontent-%COMP%]{outline:2px solid var(--bg-color);outline-offset:2px}.mrd-toggle-switch-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--mrd-toggle-switch-label-gap, 8px);width:-moz-fit-content;width:fit-content}.mrd-toggle-switch-wrapper.mrd-toggle-switch-label-before[_ngcontent-%COMP%]{flex-direction:row-reverse}.mrd-toggle-switch-label[_ngcontent-%COMP%]{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.mrd-toggle-switch-label[_ngcontent-%COMP%]:empty{display:none}.mrd-toggle-switch-label.mrd-toggle-switch-label-disabled[_ngcontent-%COMP%]{cursor:initial;opacity:.6}.mrd-toggle-switch-container[_ngcontent-%COMP%]{display:block;width:var(--width);height:var(--height)}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background[_ngcontent-%COMP%]{position:relative;border-radius:999px;width:100%;height:100%}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background[_ngcontent-%COMP%]   .mrd-toggle-switch-knob[_ngcontent-%COMP%]{border-radius:999px;position:absolute;top:2px;width:calc(var(--width) * .6);height:calc(var(--height) - 4px);transition:left .3s ease;overflow:hidden}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background[_ngcontent-%COMP%]   .mrd-toggle-switch-knob[_ngcontent-%COMP%]   .mrd-toggle-switch-bild[_ngcontent-%COMP%]{display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;pointer-events:none}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background.mrd-toggle-switch-state-left[_ngcontent-%COMP%]   .mrd-toggle-switch-knob[_ngcontent-%COMP%]{left:2px}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background.mrd-toggle-switch-state-right[_ngcontent-%COMP%]   .mrd-toggle-switch-knob[_ngcontent-%COMP%]{left:calc(var(--width) - var(--width) * .6 - 2px)}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background.mrd-toggle-switch-state-neutral[_ngcontent-%COMP%]   .mrd-toggle-switch-knob[_ngcontent-%COMP%]{left:calc((var(--width) - var(--width) * .6) / 2)}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background[_ngcontent-%COMP%]:not(.mrd-toggle-switch-disabled){background-color:var(--bg-color);cursor:pointer}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background[_ngcontent-%COMP%]:not(.mrd-toggle-switch-disabled)   .mrd-toggle-switch-knob[_ngcontent-%COMP%]{background-color:var(--knob-color)}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background[_ngcontent-%COMP%]:not(.mrd-toggle-switch-disabled).mrd-toggle-switch-state-neutral, .mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background[_ngcontent-%COMP%]:not(.mrd-toggle-switch-disabled).mrd-toggle-switch-aus{background-color:var(--bg-neutral-color)}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background[_ngcontent-%COMP%]:not(.mrd-toggle-switch-disabled).mrd-toggle-switch-state-neutral   .mrd-toggle-switch-knob[_ngcontent-%COMP%], .mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background[_ngcontent-%COMP%]:not(.mrd-toggle-switch-disabled).mrd-toggle-switch-aus   .mrd-toggle-switch-knob[_ngcontent-%COMP%]{background-color:var(--knob-neutral-color)}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background[_ngcontent-%COMP%]:not(.mrd-toggle-switch-disabled)   .mrd-toggle-swtich-neutral-clickareas[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:space-between;align-items:center;pointer-events:none}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background[_ngcontent-%COMP%]:not(.mrd-toggle-switch-disabled)   .mrd-toggle-swtich-neutral-clickareas[_ngcontent-%COMP%]   .mrd-toggle-switch-neutral-clickarea[_ngcontent-%COMP%]{width:50%;height:100%;pointer-events:all}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background.mrd-toggle-switch-disabled[_ngcontent-%COMP%]{background-color:var(--bg-disabled-color);cursor:initial}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background.mrd-toggle-switch-disabled[_ngcontent-%COMP%]   .mrd-toggle-switch-knob[_ngcontent-%COMP%]{background-color:var(--knob-disabled-color)}.mrd-toggle-switch-container.mrd-toggle-switch-slim[_ngcontent-%COMP%]{position:relative}.mrd-toggle-switch-container.mrd-toggle-switch-slim[_ngcontent-%COMP%]   .mrd-toggle-switch-background[_ngcontent-%COMP%]{position:absolute;top:calc((var(--height) - var(--track-height)) / 2);height:var(--track-height)}.mrd-toggle-switch-container.mrd-toggle-switch-slim[_ngcontent-%COMP%]   .mrd-toggle-switch-background[_ngcontent-%COMP%]:before{content:\"\";position:absolute;inset:calc((var(--track-height) - var(--height)) / 2) 0}.mrd-toggle-switch-container.mrd-toggle-switch-slim[_ngcontent-%COMP%]   .mrd-toggle-switch-background[_ngcontent-%COMP%]   .mrd-toggle-switch-knob[_ngcontent-%COMP%]{box-sizing:border-box;top:calc((var(--track-height) - var(--height)) / 2);width:var(--height);height:var(--height);border:var(--knob-border);box-shadow:0 1px 3px #0000004d}.mrd-toggle-switch-container.mrd-toggle-switch-slim[_ngcontent-%COMP%]   .mrd-toggle-switch-background.mrd-toggle-switch-state-left[_ngcontent-%COMP%]   .mrd-toggle-switch-knob[_ngcontent-%COMP%]{left:0}.mrd-toggle-switch-container.mrd-toggle-switch-slim[_ngcontent-%COMP%]   .mrd-toggle-switch-background.mrd-toggle-switch-state-right[_ngcontent-%COMP%]   .mrd-toggle-switch-knob[_ngcontent-%COMP%]{left:calc(var(--width) - var(--height))}.mrd-toggle-switch-container.mrd-toggle-switch-slim[_ngcontent-%COMP%]   .mrd-toggle-switch-background.mrd-toggle-switch-state-neutral[_ngcontent-%COMP%]   .mrd-toggle-switch-knob[_ngcontent-%COMP%]{left:calc((var(--width) - var(--height)) / 2)}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdToggleSwitchComponent, [{
        type: Component,
        args: [{ selector: 'mrd-toggle-switch', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                    'role': 'switch',
                    '[attr.aria-checked]': 'state === MrdToggleSwitchState.RIGHT',
                    '[attr.aria-disabled]': 'istDeaktiviert',
                    '[attr.tabindex]': 'istDeaktiviert ? -1 : 0',
                    '(keydown.space)': 'toggle($event)',
                    '(keydown.enter)': 'toggle($event)'
                }, template: "<div class=\"mrd-toggle-switch-wrapper\" [class.mrd-toggle-switch-label-before]=\"labelPosition === 'before'\">\n    <div\n        [style.--bg-color]=\"bgColor\"\n        [style.--knob-color]=\"knobColor\"\n        [style.--bg-neutral-color]=\"bgNeutralColor\"\n        [style.--knob-neutral-color]=\"knobNeutralColor\"\n        [style.--bg-disabled-color]=\"bgDisabledColor\"\n        [style.--knob-disabled-color]=\"knobDisabledColor\"\n        [style.--width]=\"width\"\n        [style.--height]=\"height\"\n        [style.--track-height]=\"trackHeight\"\n        [style.--knob-border]=\"knobBorder\"\n        [class.mrd-toggle-switch-slim]=\"slim\"\n        class=\"mrd-toggle-switch-container\">\n        <div class=\"mrd-toggle-switch-background\" (click)=\"toggle($event)\"\n            [ngClass]=\"{'mrd-toggle-switch-disabled': istDeaktiviert,\n                    'mrd-toggle-switch-aus': binaer && state === MrdToggleSwitchState.LEFT,\n                    'mrd-toggle-switch-state-left': state === MrdToggleSwitchState.LEFT,\n                    'mrd-toggle-switch-state-neutral': state === MrdToggleSwitchState.NEUTRAL,\n                    'mrd-toggle-switch-state-right': state === MrdToggleSwitchState.RIGHT}\">\n            <div class=\"mrd-toggle-switch-knob\">\n                <img *ngIf=\"aktuellesBild as bild\" class=\"mrd-toggle-switch-bild\" [src]=\"bild\" alt=\"\">\n            </div>\n            <div class=\"mrd-toggle-swtich-neutral-clickareas\" *ngIf=\"!istDeaktiviert && state === MrdToggleSwitchState.NEUTRAL\">\n                <div class=\"mrd-toggle-switch-neutral-clickarea\" (click)=\"toggle($event,MrdToggleSwitchState.LEFT)\"></div>\n                <div class=\"mrd-toggle-switch-neutral-clickarea\" (click)=\"toggle($event,MrdToggleSwitchState.RIGHT)\"></div>\n            </div>\n        </div>\n    </div>\n    <span class=\"mrd-toggle-switch-label\" [class.mrd-toggle-switch-label-disabled]=\"istDeaktiviert\" (click)=\"toggle($event)\"><ng-content></ng-content></span>\n</div>\n", styles: [":host{width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;outline:none}:host(:focus-visible) .mrd-toggle-switch-background{outline:2px solid var(--bg-color);outline-offset:2px}.mrd-toggle-switch-wrapper{display:flex;align-items:center;gap:var(--mrd-toggle-switch-label-gap, 8px);width:-moz-fit-content;width:fit-content}.mrd-toggle-switch-wrapper.mrd-toggle-switch-label-before{flex-direction:row-reverse}.mrd-toggle-switch-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.mrd-toggle-switch-label:empty{display:none}.mrd-toggle-switch-label.mrd-toggle-switch-label-disabled{cursor:initial;opacity:.6}.mrd-toggle-switch-container{display:block;width:var(--width);height:var(--height)}.mrd-toggle-switch-container .mrd-toggle-switch-background{position:relative;border-radius:999px;width:100%;height:100%}.mrd-toggle-switch-container .mrd-toggle-switch-background .mrd-toggle-switch-knob{border-radius:999px;position:absolute;top:2px;width:calc(var(--width) * .6);height:calc(var(--height) - 4px);transition:left .3s ease;overflow:hidden}.mrd-toggle-switch-container .mrd-toggle-switch-background .mrd-toggle-switch-knob .mrd-toggle-switch-bild{display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;pointer-events:none}.mrd-toggle-switch-container .mrd-toggle-switch-background.mrd-toggle-switch-state-left .mrd-toggle-switch-knob{left:2px}.mrd-toggle-switch-container .mrd-toggle-switch-background.mrd-toggle-switch-state-right .mrd-toggle-switch-knob{left:calc(var(--width) - var(--width) * .6 - 2px)}.mrd-toggle-switch-container .mrd-toggle-switch-background.mrd-toggle-switch-state-neutral .mrd-toggle-switch-knob{left:calc((var(--width) - var(--width) * .6) / 2)}.mrd-toggle-switch-container .mrd-toggle-switch-background:not(.mrd-toggle-switch-disabled){background-color:var(--bg-color);cursor:pointer}.mrd-toggle-switch-container .mrd-toggle-switch-background:not(.mrd-toggle-switch-disabled) .mrd-toggle-switch-knob{background-color:var(--knob-color)}.mrd-toggle-switch-container .mrd-toggle-switch-background:not(.mrd-toggle-switch-disabled).mrd-toggle-switch-state-neutral,.mrd-toggle-switch-container .mrd-toggle-switch-background:not(.mrd-toggle-switch-disabled).mrd-toggle-switch-aus{background-color:var(--bg-neutral-color)}.mrd-toggle-switch-container .mrd-toggle-switch-background:not(.mrd-toggle-switch-disabled).mrd-toggle-switch-state-neutral .mrd-toggle-switch-knob,.mrd-toggle-switch-container .mrd-toggle-switch-background:not(.mrd-toggle-switch-disabled).mrd-toggle-switch-aus .mrd-toggle-switch-knob{background-color:var(--knob-neutral-color)}.mrd-toggle-switch-container .mrd-toggle-switch-background:not(.mrd-toggle-switch-disabled) .mrd-toggle-swtich-neutral-clickareas{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:space-between;align-items:center;pointer-events:none}.mrd-toggle-switch-container .mrd-toggle-switch-background:not(.mrd-toggle-switch-disabled) .mrd-toggle-swtich-neutral-clickareas .mrd-toggle-switch-neutral-clickarea{width:50%;height:100%;pointer-events:all}.mrd-toggle-switch-container .mrd-toggle-switch-background.mrd-toggle-switch-disabled{background-color:var(--bg-disabled-color);cursor:initial}.mrd-toggle-switch-container .mrd-toggle-switch-background.mrd-toggle-switch-disabled .mrd-toggle-switch-knob{background-color:var(--knob-disabled-color)}.mrd-toggle-switch-container.mrd-toggle-switch-slim{position:relative}.mrd-toggle-switch-container.mrd-toggle-switch-slim .mrd-toggle-switch-background{position:absolute;top:calc((var(--height) - var(--track-height)) / 2);height:var(--track-height)}.mrd-toggle-switch-container.mrd-toggle-switch-slim .mrd-toggle-switch-background:before{content:\"\";position:absolute;inset:calc((var(--track-height) - var(--height)) / 2) 0}.mrd-toggle-switch-container.mrd-toggle-switch-slim .mrd-toggle-switch-background .mrd-toggle-switch-knob{box-sizing:border-box;top:calc((var(--track-height) - var(--height)) / 2);width:var(--height);height:var(--height);border:var(--knob-border);box-shadow:0 1px 3px #0000004d}.mrd-toggle-switch-container.mrd-toggle-switch-slim .mrd-toggle-switch-background.mrd-toggle-switch-state-left .mrd-toggle-switch-knob{left:0}.mrd-toggle-switch-container.mrd-toggle-switch-slim .mrd-toggle-switch-background.mrd-toggle-switch-state-right .mrd-toggle-switch-knob{left:calc(var(--width) - var(--height))}.mrd-toggle-switch-container.mrd-toggle-switch-slim .mrd-toggle-switch-background.mrd-toggle-switch-state-neutral .mrd-toggle-switch-knob{left:calc((var(--width) - var(--height)) / 2)}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { bgColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], bgNeutralColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], knobColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], knobNeutralColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], width: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], height: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], bgDisabledColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], knobDisabledColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], disabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], slim: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], trackHeight: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], knobBorder: [{
            type: Input
        }], labelPosition: [{
            type: Input
        }], imageLeft: [{
            type: Input
        }], imageNeutral: [{
            type: Input
        }], imageRight: [{
            type: Input
        }], state: [{
            type: Input
        }], checked: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], formControl: [{
            type: Input,
            args: ['mrdFormControl']
        }], stateChange: [{
            type: Output
        }], checkedChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXRvZ2dsZS1zd2l0Y2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10b2dnbGUtc3dpdGNoL2NvbXBvbmVudHMvbXJkLXRvZ2dsZS1zd2l0Y2gvbXJkLXRvZ2dsZS1zd2l0Y2guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10b2dnbGUtc3dpdGNoL2NvbXBvbmVudHMvbXJkLXRvZ2dsZS1zd2l0Y2gvbXJkLXRvZ2dsZS1zd2l0Y2guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0ksT0FBTyxFQUF5QixVQUFVLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxLQUFLLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDL0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFdEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7O0lDY25ELHlCQUFzRjs7O0lBQXBCLCtDQUFZOzs7O0lBRWxGLDhCQUFvSCxhQUFBO0lBQy9ELHdLQUFTLGVBQUEsdURBQXdDLENBQUEsSUFBQztJQUFDLGlCQUFNO0lBQzFHLDhCQUFxRztJQUFwRCx3S0FBUyxlQUFBLHdEQUF5QyxDQUFBLElBQUM7SUFBQyxpQkFBTSxFQUFBOzs7O0FEaEIzSDs7Ozs7R0FLRztBQWVILE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxVQUFVO0lBK0Y1QztJQTdGSCxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztJQUVmLE9BQU8sQ0FBUztJQUVoQixjQUFjLENBQVM7SUFFdkIsU0FBUyxDQUFTO0lBRWxCLGdCQUFnQixDQUFTO0lBRTFCLEtBQUssQ0FBUztJQUVkLE1BQU0sQ0FBUztJQUVkLGVBQWUsQ0FBUztJQUV4QixpQkFBaUIsQ0FBUztJQUV4QixRQUFRLEdBQVksS0FBSyxDQUFDO0lBRWhFLGdHQUFnRztJQUMxRCxJQUFJLEdBQVksS0FBSyxDQUFDO0lBRTVELHFCQUFxQjtJQUNjLFdBQVcsQ0FBUztJQUV2RCw0REFBNEQ7SUFDbkQsVUFBVSxDQUFTO0lBRTVCLGdGQUFnRjtJQUN2RSxhQUFhLEdBQXVCLE9BQU8sQ0FBQztJQUVyRCwrR0FBK0c7SUFDdEcsU0FBUyxDQUFTO0lBRWxCLFlBQVksQ0FBUztJQUVyQixVQUFVLENBQVM7SUFFNUIsSUFBYSxLQUFLLENBQUMsS0FBMkI7UUFDNUMsSUFBRyxJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEM7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVPLE1BQU0sR0FBeUIsb0JBQW9CLENBQUMsT0FBTyxDQUFDO0lBRXBFLHNFQUFzRTtJQUN0RSxJQUEwQyxPQUFPLENBQUMsS0FBYztRQUM5RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7UUFDN0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxvQkFBb0IsQ0FBQyxLQUFLLENBQUM7SUFDcEQsQ0FBQztJQUVELDRGQUE0RjtJQUM1RixJQUE2QixXQUFXLENBQUMsT0FBOEI7UUFDckUsSUFBSSxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7WUFDL0IsMEVBQTBFO1lBQzFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUN0RixJQUFJLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNsRTtJQUNILENBQUM7SUFDRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFTyxZQUFZLENBQXdCO0lBRXBDLFdBQVcsQ0FBZTtJQUV4QixXQUFXLEdBQXVDLElBQUksWUFBWSxFQUF3QixDQUFDO0lBRXJHLGlHQUFpRztJQUN2RixhQUFhLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7SUFFN0Usa0dBQWtHO0lBQzNGLE1BQU0sR0FBWSxLQUFLLENBQUM7SUFFdkIsT0FBTyxHQUFtQixVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7SUFFekQsWUFDVSxHQUFzQjtRQUU5QixLQUFLLEVBQUUsQ0FBQztRQUZBLFFBQUcsR0FBSCxHQUFHLENBQW1CO0lBR2hDLENBQUM7SUFFRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNuQixLQUFLLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN0RCxLQUFLLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUN4RCxPQUFPLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sVUFBVSxHQUF3QixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzdFLElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7U0FDN0U7UUFDRCxJQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1NBQ2hGO1FBQ0QsSUFBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDO1NBQzNDO1FBQ0QsSUFBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDO1NBQ3pDO1FBQ0QsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7U0FDbEQ7UUFDRCxJQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQztTQUNoRTtRQUNELElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1NBQ3REO1FBQ0QsSUFBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUM7U0FDcEU7UUFDRCxJQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQztTQUNsRTtRQUNELElBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDO1NBQ3RFO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sTUFBTSxDQUFDLEtBQVksRUFBRSxLQUE0QjtRQUN0RCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsNENBQTRDO1FBQzVDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFHLEtBQUssRUFBRTtnQkFDUixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQzthQUNoSDtZQUNELElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ25DO2dCQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN2QztTQUNGO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8sdUJBQXVCO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDO1FBQy9GLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztxR0EzS1Usd0JBQXdCOzRGQUF4Qix3QkFBd0I7K0hBQXhCLGtCQUFjLDBHQUFkLGtCQUFjOzs7dURBSU4sY0FBYyx3REFFZCxjQUFjLHlDQUVkLGNBQWMsOERBRWQsY0FBYyw2QkFFZCxhQUFhLGdDQUViLGFBQWEsMkRBRWIsY0FBYyxpRUFFZCxjQUFjLHNDQUVkLGdCQUFnQiwwQkFHaEIsZ0JBQWdCLCtDQUdoQixhQUFhLDZMQTZCYixnQkFBZ0I7O1lDcEZyQyw4QkFBMkcsYUFBQSxhQUFBO1lBY3pELHdHQUFTLGtCQUFjLElBQUM7WUFNOUQsOEJBQW9DO1lBQ2hDLHlFQUFzRjtZQUMxRixpQkFBTTtZQUNOLHlFQUdNO1lBQ1YsaUJBQU0sRUFBQTtZQUVWLCtCQUF5SDtZQUF6Qix5R0FBUyxrQkFBYyxJQUFDO1lBQUMsa0JBQXlCO1lBQUEsaUJBQU8sRUFBQTs7WUE3QnRILGdGQUFtRTtZQUVsRyxlQUE0QjtZQUE1Qix5Q0FBNEIsK0JBQUEsMENBQUEsOENBQUEsNENBQUEsZ0RBQUEsc0JBQUEsd0JBQUEsbUNBQUEsaUNBQUE7WUFVNUIsa0RBQXFDO1lBR2pDLGVBSStFO1lBSi9FLCtRQUkrRTtZQUVyRSxlQUFvQjtZQUFwQix3Q0FBb0I7WUFFcUIsZUFBK0Q7WUFBL0QsNEZBQStEO1lBTXBGLGVBQXlEO1lBQXpELHNFQUF5RDs7O3VGREF0Rix3QkFBd0I7Y0FkcEMsU0FBUzsyQkFDRSxtQkFBbUIsbUJBR1osdUJBQXVCLENBQUMsTUFBTSxRQUN6QztvQkFDSixNQUFNLEVBQUUsUUFBUTtvQkFDaEIscUJBQXFCLEVBQUUsc0NBQXNDO29CQUM3RCxzQkFBc0IsRUFBRSxnQkFBZ0I7b0JBQ3hDLGlCQUFpQixFQUFFLHlCQUF5QjtvQkFDNUMsaUJBQWlCLEVBQUUsZ0JBQWdCO29CQUNuQyxpQkFBaUIsRUFBRSxnQkFBZ0I7aUJBQ3BDO29FQU1tQyxPQUFPO2tCQUExQyxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGNBQWMsRUFBQztZQUVFLGNBQWM7a0JBQWpELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsY0FBYyxFQUFDO1lBRUUsU0FBUztrQkFBNUMsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxjQUFjLEVBQUM7WUFFRSxnQkFBZ0I7a0JBQW5ELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsY0FBYyxFQUFDO1lBRUMsS0FBSztrQkFBdkMsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUM7WUFFRSxNQUFNO2tCQUF4QyxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGFBQWEsRUFBQztZQUVHLGVBQWU7a0JBQWxELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsY0FBYyxFQUFDO1lBRUUsaUJBQWlCO2tCQUFwRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGNBQWMsRUFBQztZQUVJLFFBQVE7a0JBQTdDLEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFHRSxJQUFJO2tCQUF6QyxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBR0QsV0FBVztrQkFBN0MsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUM7WUFHeEIsVUFBVTtrQkFBbEIsS0FBSztZQUdHLGFBQWE7a0JBQXJCLEtBQUs7WUFHRyxTQUFTO2tCQUFqQixLQUFLO1lBRUcsWUFBWTtrQkFBcEIsS0FBSztZQUVHLFVBQVU7a0JBQWxCLEtBQUs7WUFFTyxLQUFLO2tCQUFqQixLQUFLO1lBY29DLE9BQU87a0JBQWhELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFVUCxXQUFXO2tCQUF2QyxLQUFLO21CQUFDLGdCQUFnQjtZQW1CYixXQUFXO2tCQUFwQixNQUFNO1lBR0csYUFBYTtrQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb2xlYW5BdHRyaWJ1dGUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWNjZXNzYWJsZUZvcm1Db250cm9sLCBCYXNlT2JqZWN0LCBTdWJzY3JpcHRpb25IYW5kbGVyLCBVdGlsIH0gZnJvbSAnbXJkLWNvcmUnO1xuaW1wb3J0IHsgbWVyZ2UsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY29sb3JBdHRyaWJ1dGUgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi90cmFuc2Zvcm1zL2NvbG9yLXRyYW5zZm9ybSc7XG5pbXBvcnQgeyBzaXplQXR0cmlidXRlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9zaXplLXRyYW5zZm9ybSc7XG5pbXBvcnQgeyBNcmRUb2dnbGVTd2l0Y2hTdGF0ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9lbnVtL21yZC10b2dnbGUtc3dpdGNoLXN0YXRlLmVudW0nO1xuaW1wb3J0IHsgTXJkQ29uZmlnTW9kZWwsIE1yZFRvZ2dsZVN3aXRjaFNsaW0gfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbC9jb25maWcubW9kZWwnO1xuaW1wb3J0IHsgQ29uZmlnVXRpbCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29uZmlnLnV0aWwnO1xuXG4vKipcbiAqIFNjaGFsdGVyIG1pdCB6d2VpIEJldHJpZWJzYXJ0ZW46XG4gKiAtIEF1c3dhaGwgdWViZXIgYHN0YXRlYC9gc3RhdGVDaGFuZ2VgIChsaW5rcywgbmV1dHJhbCwgcmVjaHRzKSwgYmVpZGUgU2VpdGVuIGluIGBiZ0NvbG9yYFxuICogLSBBbi9BdXMgdWViZXIgYFsoY2hlY2tlZCldYCBvZGVyIGBbbXJkRm9ybUNvbnRyb2xdYDogYXVzID0gbGlua3MgaW4gYGJnTmV1dHJhbENvbG9yYCwgYW4gPSByZWNodHMgaW4gYGJnQ29sb3JgXG4gKiBJbmhhbHQgendpc2NoZW4gZGVuIFRhZ3Mgd2lyZCBhbHMga2xpY2tiYXJlIEJlc2NocmlmdHVuZyBhbmdlemVpZ3QuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yZC10b2dnbGUtc3dpdGNoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC10b2dnbGUtc3dpdGNoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLXRvZ2dsZS1zd2l0Y2guY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHtcbiAgICAncm9sZSc6ICdzd2l0Y2gnLFxuICAgICdbYXR0ci5hcmlhLWNoZWNrZWRdJzogJ3N0YXRlID09PSBNcmRUb2dnbGVTd2l0Y2hTdGF0ZS5SSUdIVCcsXG4gICAgJ1thdHRyLmFyaWEtZGlzYWJsZWRdJzogJ2lzdERlYWt0aXZpZXJ0JyxcbiAgICAnW2F0dHIudGFiaW5kZXhdJzogJ2lzdERlYWt0aXZpZXJ0ID8gLTEgOiAwJyxcbiAgICAnKGtleWRvd24uc3BhY2UpJzogJ3RvZ2dsZSgkZXZlbnQpJyxcbiAgICAnKGtleWRvd24uZW50ZXIpJzogJ3RvZ2dsZSgkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE1yZFRvZ2dsZVN3aXRjaENvbXBvbmVudCBleHRlbmRzIEJhc2VPYmplY3QgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBNcmRUb2dnbGVTd2l0Y2hTdGF0ZSA9IE1yZFRvZ2dsZVN3aXRjaFN0YXRlO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIGJnQ29sb3I6IHN0cmluZztcblxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBiZ05ldXRyYWxDb2xvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIGtub2JDb2xvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIGtub2JOZXV0cmFsQ29sb3I6IHN0cmluZztcblxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHdpZHRoOiBzdHJpbmc7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBoZWlnaHQ6IHN0cmluZztcblxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBiZ0Rpc2FibGVkQ29sb3I6IHN0cmluZztcblxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBrbm9iRGlzYWJsZWRDb2xvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogU2NobWFsZSBTY2hpZW5lIG1pdCBydW5kZW0gS25vcGYgaW4gdm9sbGVyIEhvZWhlOyBgaGVpZ2h0YCBpc3QgZGFubiBkZXIgS25vcGYtRHVyY2htZXNzZXIgKi9cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBzbGltOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIE51ciBiZWkgYHNsaW1gICovXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgdHJhY2tIZWlnaHQ6IHN0cmluZztcblxuICAvKiogTnVyIGJlaSBgc2xpbWAsIHouIEIuIGAxcHggc29saWQgIzI5M0Q0RmAgb2RlciBgbm9uZWAgKi9cbiAgQElucHV0KCkga25vYkJvcmRlcjogc3RyaW5nO1xuXG4gIC8qKiBQb3NpdGlvbiBkZXIgQmVzY2hyaWZ0dW5nIChJbmhhbHQgendpc2NoZW4gZGVuIFRhZ3MpIHJlbGF0aXYgenVtIFNjaGFsdGVyICovXG4gIEBJbnB1dCgpIGxhYmVsUG9zaXRpb246ICdiZWZvcmUnIHwgJ2FmdGVyJyA9ICdhZnRlcic7XG5cbiAgLyoqIEJpbGQgaW0gS25vcGYgamUgWnVzdGFuZCAoVVJMIHp1IGpwZy9wbmcvc3ZnLy4uLik7IGluIGRlciBBbi9BdXMtQmV0cmllYnNhcnQgaXN0IGxpbmtzIGF1cyB1bmQgcmVjaHRzIGFuICovXG4gIEBJbnB1dCgpIGltYWdlTGVmdDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGltYWdlTmV1dHJhbDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGltYWdlUmlnaHQ6IHN0cmluZztcblxuICBASW5wdXQoKSBzZXQgc3RhdGUodmFsdWU6IE1yZFRvZ2dsZVN3aXRjaFN0YXRlKSB7XG4gICAgaWYodGhpcy5fc3RhdGUgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZS5lbWl0KHRoaXMuX3N0YXRlKTtcbiAgICB9XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIHB1YmxpYyBnZXQgc3RhdGUoKTogTXJkVG9nZ2xlU3dpdGNoU3RhdGUge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3N0YXRlOiBNcmRUb2dnbGVTd2l0Y2hTdGF0ZSA9IE1yZFRvZ2dsZVN3aXRjaFN0YXRlLk5FVVRSQUw7XG5cbiAgLyoqIFNjaGFsdGV0IGluIGRpZSBBbi9BdXMtQmV0cmllYnNhcnQ7IG51bGwvdW5kZWZpbmVkIGdpbHQgYWxzIGF1cyAqL1xuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHNldCBjaGVja2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5iaW5hZXIgPSB0cnVlO1xuICAgIHRoaXMuX3N0YXRlID0gdmFsdWUgPyBNcmRUb2dnbGVTd2l0Y2hTdGF0ZS5SSUdIVCA6IE1yZFRvZ2dsZVN3aXRjaFN0YXRlLkxFRlQ7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgcHVibGljIGdldCBjaGVja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZSA9PT0gTXJkVG9nZ2xlU3dpdGNoU3RhdGUuUklHSFQ7XG4gIH1cblxuICAvKiogU2NoYWx0ZXQgaW4gZGllIEFuL0F1cy1CZXRyaWVic2FydCB1bmQgdWViZXJuaW1tdCBXZXJ0IHVuZCBEZWFrdGl2aWVydW5nIGRlcyBDb250cm9scyAqL1xuICBASW5wdXQoJ21yZEZvcm1Db250cm9sJykgc2V0IGZvcm1Db250cm9sKGNvbnRyb2w6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCkge1xuICAgIHRoaXMuZm9ybXVsYXJBYm8/LnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fZm9ybUNvbnRyb2wgPSBjb250cm9sO1xuICAgIGlmIChVdGlsLmlzRGVmaW5lZChjb250cm9sKSkge1xuICAgICAgdGhpcy5iaW5hZXIgPSB0cnVlO1xuICAgICAgdGhpcy5mb3JtdWxhcldlcnRVZWJlcm5laG1lbigpO1xuICAgICAgLy8gc3RhdHVzQ2hhbmdlcywgZGFtaXQgZGlzYWJsZSgpL2VuYWJsZSgpIGF1Y2ggYmVpIE9uUHVzaCBzaWNodGJhciB3ZXJkZW5cbiAgICAgIHRoaXMuZm9ybXVsYXJBYm8gPSB0aGlzLndhdGNoKG1lcmdlKGNvbnRyb2wudmFsdWVDaGFuZ2VzLCBjb250cm9sLmNvbnRyb2wuc3RhdHVzQ2hhbmdlcyksXG4gICAgICAgIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHRoaXMuZm9ybXVsYXJXZXJ0VWViZXJuZWhtZW4oKSkpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IGZvcm1Db250cm9sKCk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1Db250cm9sO1xuICB9XG5cbiAgcHJpdmF0ZSBfZm9ybUNvbnRyb2w6IEFjY2Vzc2FibGVGb3JtQ29udHJvbDtcblxuICBwcml2YXRlIGZvcm11bGFyQWJvOiBTdWJzY3JpcHRpb247XG5cbiAgQE91dHB1dCgpIHN0YXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TXJkVG9nZ2xlU3dpdGNoU3RhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxNcmRUb2dnbGVTd2l0Y2hTdGF0ZT4oKTtcblxuICAvKiogTnVyIGJlaSBCZWRpZW51bmcgZHVyY2ggZGVuIE51dHplciwgbmljaHQgYmVpbSBTZXR6ZW4gdm9uIGBjaGVja2VkYCBvZGVyIGRlcyBGb3JtdWxhcndlcnRzICovXG4gIEBPdXRwdXQoKSBjaGVja2VkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLyoqIEFuL0F1cy1CZXRyaWVic2FydDogYXVzIHdpcmQgaW4gZGVuIE5ldXRyYWwtRmFyYmVuIGRhcmdlc3RlbGx0IHN0YXR0IHdpZSBlaW5lIEF1c3dhaGwtU2VpdGUgKi9cbiAgcHVibGljIGJpbmFlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2NvbmZpZzogTXJkQ29uZmlnTW9kZWwgPSBDb25maWdVdGlsLmdldENvbmZpZygpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGdldCBpc3REZWFrdGl2aWVydCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCB8fCAhIXRoaXMuX2Zvcm1Db250cm9sPy5kaXNhYmxlZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYWt0dWVsbGVzQmlsZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHN3aXRjaCAodGhpcy5fc3RhdGUpIHtcbiAgICAgIGNhc2UgTXJkVG9nZ2xlU3dpdGNoU3RhdGUuTEVGVDogcmV0dXJuIHRoaXMuaW1hZ2VMZWZ0O1xuICAgICAgY2FzZSBNcmRUb2dnbGVTd2l0Y2hTdGF0ZS5SSUdIVDogcmV0dXJuIHRoaXMuaW1hZ2VSaWdodDtcbiAgICAgIGRlZmF1bHQ6IHJldHVybiB0aGlzLmltYWdlTmV1dHJhbDtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBzbGltQ29uZmlnOiBNcmRUb2dnbGVTd2l0Y2hTbGltID0gdGhpcy5fY29uZmlnLnRvZ2dsZVN3aXRjaC5zbGltID8/IHt9O1xuICAgIGlmKCF0aGlzLndpZHRoKSB7XG4gICAgICB0aGlzLndpZHRoID0gdGhpcy5zbGltID8gc2xpbUNvbmZpZy53aWR0aCA6IHRoaXMuX2NvbmZpZy50b2dnbGVTd2l0Y2gud2lkdGg7XG4gICAgfVxuICAgIGlmKCF0aGlzLmhlaWdodCkge1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnNsaW0gPyBzbGltQ29uZmlnLmhlaWdodCA6IHRoaXMuX2NvbmZpZy50b2dnbGVTd2l0Y2guaGVpZ2h0O1xuICAgIH1cbiAgICBpZighdGhpcy50cmFja0hlaWdodCkge1xuICAgICAgdGhpcy50cmFja0hlaWdodCA9IHNsaW1Db25maWcudHJhY2tIZWlnaHQ7XG4gICAgfVxuICAgIGlmKCF0aGlzLmtub2JCb3JkZXIpIHtcbiAgICAgIHRoaXMua25vYkJvcmRlciA9IHNsaW1Db25maWcua25vYkJvcmRlcjtcbiAgICB9XG4gICAgaWYoIXRoaXMuYmdDb2xvcikge1xuICAgICAgdGhpcy5iZ0NvbG9yID0gdGhpcy5fY29uZmlnLnRvZ2dsZVN3aXRjaC5iZ0NvbG9yO1xuICAgIH1cbiAgICBpZighdGhpcy5iZ05ldXRyYWxDb2xvcikge1xuICAgICAgdGhpcy5iZ05ldXRyYWxDb2xvciA9IHRoaXMuX2NvbmZpZy50b2dnbGVTd2l0Y2guYmdOZXV0cmFsQ29sb3I7XG4gICAgfVxuICAgIGlmKCF0aGlzLmtub2JDb2xvcikge1xuICAgICAgdGhpcy5rbm9iQ29sb3IgPSB0aGlzLl9jb25maWcudG9nZ2xlU3dpdGNoLmtub2JDb2xvcjtcbiAgICB9XG4gICAgaWYoIXRoaXMua25vYk5ldXRyYWxDb2xvcikge1xuICAgICAgdGhpcy5rbm9iTmV1dHJhbENvbG9yID0gdGhpcy5fY29uZmlnLnRvZ2dsZVN3aXRjaC5rbm9iTmV1dHJhbENvbG9yO1xuICAgIH1cbiAgICBpZighdGhpcy5iZ0Rpc2FibGVkQ29sb3IpIHtcbiAgICAgIHRoaXMuYmdEaXNhYmxlZENvbG9yID0gdGhpcy5fY29uZmlnLnRvZ2dsZVN3aXRjaC5iZ0Rpc2FibGVkQ29sb3I7XG4gICAgfVxuICAgIGlmKCF0aGlzLmtub2JEaXNhYmxlZENvbG9yKSB7XG4gICAgICB0aGlzLmtub2JEaXNhYmxlZENvbG9yID0gdGhpcy5fY29uZmlnLnRvZ2dsZVN3aXRjaC5rbm9iRGlzYWJsZWRDb2xvcjtcbiAgICB9XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZShldmVudDogRXZlbnQsIHN0YXRlPzogTXJkVG9nZ2xlU3dpdGNoU3RhdGUpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAvLyBMZWVydGFzdGUgd3VlcmRlIHNvbnN0IGRpZSBTZWl0ZSBzY3JvbGxlblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYoIXRoaXMuaXN0RGVha3RpdmllcnQpIHtcbiAgICAgIGlmKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnN0YXRlID09PSBNcmRUb2dnbGVTd2l0Y2hTdGF0ZS5MRUZUID8gTXJkVG9nZ2xlU3dpdGNoU3RhdGUuUklHSFQgOiBNcmRUb2dnbGVTd2l0Y2hTdGF0ZS5MRUZUO1xuICAgICAgfVxuICAgICAgaWYodGhpcy5iaW5hZXIpIHtcbiAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuX2Zvcm1Db250cm9sKSkge1xuICAgICAgICAgIHRoaXMuX2Zvcm1Db250cm9sLnNldFZhbHVlKHRoaXMuY2hlY2tlZCk7XG4gICAgICAgICAgdGhpcy5fZm9ybUNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hlY2tlZENoYW5nZS5lbWl0KHRoaXMuY2hlY2tlZCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybXVsYXJXZXJ0VWViZXJuZWhtZW4oKTogdm9pZCB7XG4gICAgdGhpcy5fc3RhdGUgPSB0aGlzLl9mb3JtQ29udHJvbC52YWx1ZSA/IE1yZFRvZ2dsZVN3aXRjaFN0YXRlLlJJR0hUIDogTXJkVG9nZ2xlU3dpdGNoU3RhdGUuTEVGVDtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm1yZC10b2dnbGUtc3dpdGNoLXdyYXBwZXJcIiBbY2xhc3MubXJkLXRvZ2dsZS1zd2l0Y2gtbGFiZWwtYmVmb3JlXT1cImxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnXCI+XG4gICAgPGRpdlxuICAgICAgICBbc3R5bGUuLS1iZy1jb2xvcl09XCJiZ0NvbG9yXCJcbiAgICAgICAgW3N0eWxlLi0ta25vYi1jb2xvcl09XCJrbm9iQ29sb3JcIlxuICAgICAgICBbc3R5bGUuLS1iZy1uZXV0cmFsLWNvbG9yXT1cImJnTmV1dHJhbENvbG9yXCJcbiAgICAgICAgW3N0eWxlLi0ta25vYi1uZXV0cmFsLWNvbG9yXT1cImtub2JOZXV0cmFsQ29sb3JcIlxuICAgICAgICBbc3R5bGUuLS1iZy1kaXNhYmxlZC1jb2xvcl09XCJiZ0Rpc2FibGVkQ29sb3JcIlxuICAgICAgICBbc3R5bGUuLS1rbm9iLWRpc2FibGVkLWNvbG9yXT1cImtub2JEaXNhYmxlZENvbG9yXCJcbiAgICAgICAgW3N0eWxlLi0td2lkdGhdPVwid2lkdGhcIlxuICAgICAgICBbc3R5bGUuLS1oZWlnaHRdPVwiaGVpZ2h0XCJcbiAgICAgICAgW3N0eWxlLi0tdHJhY2staGVpZ2h0XT1cInRyYWNrSGVpZ2h0XCJcbiAgICAgICAgW3N0eWxlLi0ta25vYi1ib3JkZXJdPVwia25vYkJvcmRlclwiXG4gICAgICAgIFtjbGFzcy5tcmQtdG9nZ2xlLXN3aXRjaC1zbGltXT1cInNsaW1cIlxuICAgICAgICBjbGFzcz1cIm1yZC10b2dnbGUtc3dpdGNoLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibXJkLXRvZ2dsZS1zd2l0Y2gtYmFja2dyb3VuZFwiIChjbGljayk9XCJ0b2dnbGUoJGV2ZW50KVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7J21yZC10b2dnbGUtc3dpdGNoLWRpc2FibGVkJzogaXN0RGVha3RpdmllcnQsXG4gICAgICAgICAgICAgICAgICAgICdtcmQtdG9nZ2xlLXN3aXRjaC1hdXMnOiBiaW5hZXIgJiYgc3RhdGUgPT09IE1yZFRvZ2dsZVN3aXRjaFN0YXRlLkxFRlQsXG4gICAgICAgICAgICAgICAgICAgICdtcmQtdG9nZ2xlLXN3aXRjaC1zdGF0ZS1sZWZ0Jzogc3RhdGUgPT09IE1yZFRvZ2dsZVN3aXRjaFN0YXRlLkxFRlQsXG4gICAgICAgICAgICAgICAgICAgICdtcmQtdG9nZ2xlLXN3aXRjaC1zdGF0ZS1uZXV0cmFsJzogc3RhdGUgPT09IE1yZFRvZ2dsZVN3aXRjaFN0YXRlLk5FVVRSQUwsXG4gICAgICAgICAgICAgICAgICAgICdtcmQtdG9nZ2xlLXN3aXRjaC1zdGF0ZS1yaWdodCc6IHN0YXRlID09PSBNcmRUb2dnbGVTd2l0Y2hTdGF0ZS5SSUdIVH1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtcmQtdG9nZ2xlLXN3aXRjaC1rbm9iXCI+XG4gICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cImFrdHVlbGxlc0JpbGQgYXMgYmlsZFwiIGNsYXNzPVwibXJkLXRvZ2dsZS1zd2l0Y2gtYmlsZFwiIFtzcmNdPVwiYmlsZFwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXJkLXRvZ2dsZS1zd3RpY2gtbmV1dHJhbC1jbGlja2FyZWFzXCIgKm5nSWY9XCIhaXN0RGVha3RpdmllcnQgJiYgc3RhdGUgPT09IE1yZFRvZ2dsZVN3aXRjaFN0YXRlLk5FVVRSQUxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXJkLXRvZ2dsZS1zd2l0Y2gtbmV1dHJhbC1jbGlja2FyZWFcIiAoY2xpY2spPVwidG9nZ2xlKCRldmVudCxNcmRUb2dnbGVTd2l0Y2hTdGF0ZS5MRUZUKVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtcmQtdG9nZ2xlLXN3aXRjaC1uZXV0cmFsLWNsaWNrYXJlYVwiIChjbGljayk9XCJ0b2dnbGUoJGV2ZW50LE1yZFRvZ2dsZVN3aXRjaFN0YXRlLlJJR0hUKVwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzcGFuIGNsYXNzPVwibXJkLXRvZ2dsZS1zd2l0Y2gtbGFiZWxcIiBbY2xhc3MubXJkLXRvZ2dsZS1zd2l0Y2gtbGFiZWwtZGlzYWJsZWRdPVwiaXN0RGVha3RpdmllcnRcIiAoY2xpY2spPVwidG9nZ2xlKCRldmVudClcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPlxuPC9kaXY+XG4iXX0=