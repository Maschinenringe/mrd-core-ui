import { booleanAttribute, ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { colorAttribute } from './../../../../common/transforms/color-transform';
import { sizeAttribute } from './../../../../common/transforms/size-transform';
import { MrdToggleSwitchState } from '../../common/enum/mrd-toggle-switch-state.enum';
import { ConfigUtil } from './../../../../common/util/config.util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MrdToggleSwitchComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5);
    i0.ɵɵlistener("click", function MrdToggleSwitchComponent_div_3_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggle($event, ctx_r1.MrdToggleSwitchState.LEFT)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵlistener("click", function MrdToggleSwitchComponent_div_3_Template_div_click_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.toggle($event, ctx_r3.MrdToggleSwitchState.RIGHT)); });
    i0.ɵɵelementEnd()();
} }
const _c0 = function (a0, a1, a2, a3) { return { "mrd-toggle-switch-disabled": a0, "mrd-toggle-switch-state-left": a1, "mrd-toggle-switch-state-neutral": a2, "mrd-toggle-switch-state-right": a3 }; };
export class MrdToggleSwitchComponent {
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
    stateChange = new EventEmitter();
    _config = ConfigUtil.getConfig();
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngOnInit() {
        if (!this.width) {
            this.width = this._config.toggleSwitch.width;
        }
        if (!this.height) {
            this.height = this._config.toggleSwitch.height;
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
        if (!this.disabled) {
            if (state) {
                this.state = state;
            }
            else {
                this.state = this.state === MrdToggleSwitchState.LEFT ? MrdToggleSwitchState.RIGHT : MrdToggleSwitchState.LEFT;
            }
        }
        this.cdr.detectChanges();
    }
    /** @nocollapse */ static ɵfac = function MrdToggleSwitchComponent_Factory(t) { return new (t || MrdToggleSwitchComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdToggleSwitchComponent, selectors: [["mrd-toggle-switch"]], inputs: { bgColor: ["bgColor", "bgColor", colorAttribute], bgNeutralColor: ["bgNeutralColor", "bgNeutralColor", colorAttribute], knobColor: ["knobColor", "knobColor", colorAttribute], knobNeutralColor: ["knobNeutralColor", "knobNeutralColor", colorAttribute], width: ["width", "width", sizeAttribute], height: ["height", "height", sizeAttribute], bgDisabledColor: ["bgDisabledColor", "bgDisabledColor", colorAttribute], knobDisabledColor: ["knobDisabledColor", "knobDisabledColor", colorAttribute], disabled: ["disabled", "disabled", booleanAttribute], state: "state" }, outputs: { stateChange: "stateChange" }, features: [i0.ɵɵInputTransformsFeature], decls: 4, vars: 23, consts: [[1, "mrd-toggle-switch-container"], [1, "mrd-toggle-switch-background", 3, "ngClass", "click"], [1, "mrd-toggle-switch-knob"], ["class", "mrd-toggle-swtich-neutral-clickareas", 4, "ngIf"], [1, "mrd-toggle-swtich-neutral-clickareas"], [1, "mrd-toggle-switch-neutral-clickarea", 3, "click"]], template: function MrdToggleSwitchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵlistener("click", function MrdToggleSwitchComponent_Template_div_click_1_listener($event) { return ctx.toggle($event); });
            i0.ɵɵelement(2, "div", 2);
            i0.ɵɵtemplate(3, MrdToggleSwitchComponent_div_3_Template, 3, 0, "div", 3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵstyleProp("--bg-color", ctx.bgColor)("--knob-color", ctx.knobColor)("--bg-neutral-color", ctx.bgNeutralColor)("--knob-neutral-color", ctx.knobNeutralColor)("--bg-disabled-color", ctx.bgDisabledColor)("--knob-disabled-color", ctx.knobDisabledColor)("--width", ctx.width)("--height", ctx.height);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(18, _c0, ctx.disabled, ctx.state === ctx.MrdToggleSwitchState.LEFT, ctx.state === ctx.MrdToggleSwitchState.NEUTRAL, ctx.state === ctx.MrdToggleSwitchState.RIGHT));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.disabled && ctx.state === ctx.MrdToggleSwitchState.NEUTRAL);
        } }, dependencies: [i1.NgClass, i1.NgIf], styles: ["[_nghost-%COMP%]{width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}.mrd-toggle-switch-container[_ngcontent-%COMP%]{display:block;width:var(--width);height:var(--height)}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background[_ngcontent-%COMP%]{position:relative;border-radius:999px;width:100%;height:100%}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background[_ngcontent-%COMP%]   .mrd-toggle-switch-knob[_ngcontent-%COMP%]{border-radius:999px;position:absolute;top:2px;width:calc(var(--width) * .6);height:calc(var(--height) - 4px);transition:left .3s ease}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background.mrd-toggle-switch-state-left[_ngcontent-%COMP%]   .mrd-toggle-switch-knob[_ngcontent-%COMP%]{left:2px}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background.mrd-toggle-switch-state-right[_ngcontent-%COMP%]   .mrd-toggle-switch-knob[_ngcontent-%COMP%]{left:calc(var(--width) - var(--width) * .6 - 2px)}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background.mrd-toggle-switch-state-neutral[_ngcontent-%COMP%]   .mrd-toggle-switch-knob[_ngcontent-%COMP%]{left:calc((var(--width) - var(--width) * .6) / 2)}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background[_ngcontent-%COMP%]:not(.mrd-toggle-switch-disabled){background-color:var(--bg-color);cursor:pointer}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background[_ngcontent-%COMP%]:not(.mrd-toggle-switch-disabled)   .mrd-toggle-switch-knob[_ngcontent-%COMP%]{background-color:var(--knob-color)}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background[_ngcontent-%COMP%]:not(.mrd-toggle-switch-disabled).mrd-toggle-switch-state-neutral{background-color:var(--bg-neutral-color)}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background[_ngcontent-%COMP%]:not(.mrd-toggle-switch-disabled).mrd-toggle-switch-state-neutral   .mrd-toggle-switch-knob[_ngcontent-%COMP%]{background-color:var(--knob-neutral-color)}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background[_ngcontent-%COMP%]:not(.mrd-toggle-switch-disabled)   .mrd-toggle-swtich-neutral-clickareas[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:space-between;align-items:center;pointer-events:none}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background[_ngcontent-%COMP%]:not(.mrd-toggle-switch-disabled)   .mrd-toggle-swtich-neutral-clickareas[_ngcontent-%COMP%]   .mrd-toggle-switch-neutral-clickarea[_ngcontent-%COMP%]{width:50%;height:100%;pointer-events:all}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background.mrd-toggle-switch-disabled[_ngcontent-%COMP%]{background-color:var(--bg-disabled-color);cursor:initial}.mrd-toggle-switch-container[_ngcontent-%COMP%]   .mrd-toggle-switch-background.mrd-toggle-switch-disabled[_ngcontent-%COMP%]   .mrd-toggle-switch-knob[_ngcontent-%COMP%]{background-color:var(--knob-disabled-color)}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdToggleSwitchComponent, [{
        type: Component,
        args: [{ selector: 'mrd-toggle-switch', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div \n    [style.--bg-color]=\"bgColor\"\n    [style.--knob-color]=\"knobColor\"\n    [style.--bg-neutral-color]=\"bgNeutralColor\"\n    [style.--knob-neutral-color]=\"knobNeutralColor\"\n    [style.--bg-disabled-color]=\"bgDisabledColor\"\n    [style.--knob-disabled-color]=\"knobDisabledColor\"\n    [style.--width]=\"width\"\n    [style.--height]=\"height\"\n    class=\"mrd-toggle-switch-container\">\n    <div class=\"mrd-toggle-switch-background\" (click)=\"toggle($event)\"\n        [ngClass]=\"{'mrd-toggle-switch-disabled': disabled,\n                'mrd-toggle-switch-state-left': state === MrdToggleSwitchState.LEFT, \n                'mrd-toggle-switch-state-neutral': state === MrdToggleSwitchState.NEUTRAL,\n                'mrd-toggle-switch-state-right': state === MrdToggleSwitchState.RIGHT}\">\n        <div class=\"mrd-toggle-switch-knob\"></div>\n        <div class=\"mrd-toggle-swtich-neutral-clickareas\" *ngIf=\"!disabled && state === MrdToggleSwitchState.NEUTRAL\">\n            <div class=\"mrd-toggle-switch-neutral-clickarea\" (click)=\"toggle($event,MrdToggleSwitchState.LEFT)\"></div>\n            <div class=\"mrd-toggle-switch-neutral-clickarea\" (click)=\"toggle($event,MrdToggleSwitchState.RIGHT)\"></div>\n        </div>\n    </div>\n</div>", styles: [":host{width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}.mrd-toggle-switch-container{display:block;width:var(--width);height:var(--height)}.mrd-toggle-switch-container .mrd-toggle-switch-background{position:relative;border-radius:999px;width:100%;height:100%}.mrd-toggle-switch-container .mrd-toggle-switch-background .mrd-toggle-switch-knob{border-radius:999px;position:absolute;top:2px;width:calc(var(--width) * .6);height:calc(var(--height) - 4px);transition:left .3s ease}.mrd-toggle-switch-container .mrd-toggle-switch-background.mrd-toggle-switch-state-left .mrd-toggle-switch-knob{left:2px}.mrd-toggle-switch-container .mrd-toggle-switch-background.mrd-toggle-switch-state-right .mrd-toggle-switch-knob{left:calc(var(--width) - var(--width) * .6 - 2px)}.mrd-toggle-switch-container .mrd-toggle-switch-background.mrd-toggle-switch-state-neutral .mrd-toggle-switch-knob{left:calc((var(--width) - var(--width) * .6) / 2)}.mrd-toggle-switch-container .mrd-toggle-switch-background:not(.mrd-toggle-switch-disabled){background-color:var(--bg-color);cursor:pointer}.mrd-toggle-switch-container .mrd-toggle-switch-background:not(.mrd-toggle-switch-disabled) .mrd-toggle-switch-knob{background-color:var(--knob-color)}.mrd-toggle-switch-container .mrd-toggle-switch-background:not(.mrd-toggle-switch-disabled).mrd-toggle-switch-state-neutral{background-color:var(--bg-neutral-color)}.mrd-toggle-switch-container .mrd-toggle-switch-background:not(.mrd-toggle-switch-disabled).mrd-toggle-switch-state-neutral .mrd-toggle-switch-knob{background-color:var(--knob-neutral-color)}.mrd-toggle-switch-container .mrd-toggle-switch-background:not(.mrd-toggle-switch-disabled) .mrd-toggle-swtich-neutral-clickareas{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:space-between;align-items:center;pointer-events:none}.mrd-toggle-switch-container .mrd-toggle-switch-background:not(.mrd-toggle-switch-disabled) .mrd-toggle-swtich-neutral-clickareas .mrd-toggle-switch-neutral-clickarea{width:50%;height:100%;pointer-events:all}.mrd-toggle-switch-container .mrd-toggle-switch-background.mrd-toggle-switch-disabled{background-color:var(--bg-disabled-color);cursor:initial}.mrd-toggle-switch-container .mrd-toggle-switch-background.mrd-toggle-switch-disabled .mrd-toggle-switch-knob{background-color:var(--knob-disabled-color)}\n"] }]
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
        }], state: [{
            type: Input
        }], stateChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXRvZ2dsZS1zd2l0Y2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10b2dnbGUtc3dpdGNoL2NvbXBvbmVudHMvbXJkLXRvZ2dsZS1zd2l0Y2gvbXJkLXRvZ2dsZS1zd2l0Y2guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10b2dnbGUtc3dpdGNoL2NvbXBvbmVudHMvbXJkLXRvZ2dsZS1zd2l0Y2gvbXJkLXRvZ2dsZS1zd2l0Y2guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0ksT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUV0RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7O0lDVzNELDhCQUE4RyxhQUFBO0lBQ3pELHdLQUFTLGVBQUEsdURBQXdDLENBQUEsSUFBQztJQUFDLGlCQUFNO0lBQzFHLDhCQUFxRztJQUFwRCx3S0FBUyxlQUFBLHdEQUF5QyxDQUFBLElBQUM7SUFBQyxpQkFBTSxFQUFBOzs7QURMdkgsTUFBTSxPQUFPLHdCQUF3QjtJQXdDekI7SUF0Q0gsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7SUFFZixPQUFPLENBQVM7SUFFaEIsY0FBYyxDQUFTO0lBRXZCLFNBQVMsQ0FBUztJQUVs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QWdCLEVBQUM7WUFFdkIsS0FBSztrQkFBakIsS0FBSztZQWFJLFdBQVc7a0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib29sZWFuQXR0cmlidXRlLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbG9yQXR0cmlidXRlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9jb2xvci10cmFuc2Zvcm0nO1xuaW1wb3J0IHsgc2l6ZUF0dHJpYnV0ZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvc2l6ZS10cmFuc2Zvcm0nO1xuaW1wb3J0IHsgTXJkVG9nZ2xlU3dpdGNoU3RhdGUgfSBmcm9tICcuLi8uLi9jb21tb24vZW51bS9tcmQtdG9nZ2xlLXN3aXRjaC1zdGF0ZS5lbnVtJztcbmltcG9ydCB7IE1yZENvbmZpZ01vZGVsIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vbW9kZWwvY29uZmlnLm1vZGVsJztcbmltcG9ydCB7IENvbmZpZ1V0aWwgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXJkLXRvZ2dsZS1zd2l0Y2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLXRvZ2dsZS1zd2l0Y2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tcmQtdG9nZ2xlLXN3aXRjaC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNcmRUb2dnbGVTd2l0Y2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBNcmRUb2dnbGVTd2l0Y2hTdGF0ZSA9IE1yZFRvZ2dsZVN3aXRjaFN0YXRlO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIGJnQ29sb3I6IHN0cmluZztcblxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBiZ05ldXRyYWxDb2xvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIGtub2JDb2xvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIGtub2JOZXV0cmFsQ29sb3I6IHN0cmluZztcblxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHdpZHRoOiBzdHJpbmc7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBoZWlnaHQ6IHN0cmluZztcblxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBiZ0Rpc2FibGVkQ29sb3I6IHN0cmluZztcblxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBrbm9iRGlzYWJsZWRDb2xvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBzZXQgc3RhdGUodmFsdWU6IE1yZFRvZ2dsZVN3aXRjaFN0YXRlKSB7XG4gICAgaWYodGhpcy5fc3RhdGUgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZS5lbWl0KHRoaXMuX3N0YXRlKTtcbiAgICB9XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIHB1YmxpYyBnZXQgc3RhdGUoKTogTXJkVG9nZ2xlU3dpdGNoU3RhdGUge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfSBcbiAgXG4gIHByaXZhdGUgX3N0YXRlOiBNcmRUb2dnbGVTd2l0Y2hTdGF0ZSA9IE1yZFRvZ2dsZVN3aXRjaFN0YXRlLk5FVVRSQUw7XG5cbiAgQE91dHB1dCgpIHN0YXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TXJkVG9nZ2xlU3dpdGNoU3RhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxNcmRUb2dnbGVTd2l0Y2hTdGF0ZT4oKTtcblxuICBwcml2YXRlIF9jb25maWc6IE1yZENvbmZpZ01vZGVsID0gQ29uZmlnVXRpbC5nZXRDb25maWcoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZighdGhpcy53aWR0aCkge1xuICAgICAgdGhpcy53aWR0aCA9IHRoaXMuX2NvbmZpZy50b2dnbGVTd2l0Y2gud2lkdGg7XG4gICAgfVxuICAgIGlmKCF0aGlzLmhlaWdodCkge1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLl9jb25maWcudG9nZ2xlU3dpdGNoLmhlaWdodDtcbiAgICB9XG4gICAgaWYoIXRoaXMuYmdDb2xvcikge1xuICAgICAgdGhpcy5iZ0NvbG9yID0gdGhpcy5fY29uZmlnLnRvZ2dsZVN3aXRjaC5iZ0NvbG9yO1xuICAgIH1cbiAgICBpZighdGhpcy5iZ05ldXRyYWxDb2xvcikge1xuICAgICAgdGhpcy5iZ05ldXRyYWxDb2xvciA9IHRoaXMuX2NvbmZpZy50b2dnbGVTd2l0Y2guYmdOZXV0cmFsQ29sb3I7XG4gICAgfVxuICAgIGlmKCF0aGlzLmtub2JDb2xvcikge1xuICAgICAgdGhpcy5rbm9iQ29sb3IgPSB0aGlzLl9jb25maWcudG9nZ2xlU3dpdGNoLmtub2JDb2xvcjtcbiAgICB9XG4gICAgaWYoIXRoaXMua25vYk5ldXRyYWxDb2xvcikge1xuICAgICAgdGhpcy5rbm9iTmV1dHJhbENvbG9yID0gdGhpcy5fY29uZmlnLnRvZ2dsZVN3aXRjaC5rbm9iTmV1dHJhbENvbG9yO1xuICAgIH1cbiAgICBpZighdGhpcy5iZ0Rpc2FibGVkQ29sb3IpIHtcbiAgICAgIHRoaXMuYmdEaXNhYmxlZENvbG9yID0gdGhpcy5fY29uZmlnLnRvZ2dsZVN3aXRjaC5iZ0Rpc2FibGVkQ29sb3I7XG4gICAgfVxuICAgIGlmKCF0aGlzLmtub2JEaXNhYmxlZENvbG9yKSB7XG4gICAgICB0aGlzLmtub2JEaXNhYmxlZENvbG9yID0gdGhpcy5fY29uZmlnLnRvZ2dsZVN3aXRjaC5rbm9iRGlzYWJsZWRDb2xvcjtcbiAgICB9XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZShldmVudDogUG9pbnRlckV2ZW50LCBzdGF0ZT86IE1yZFRvZ2dsZVN3aXRjaFN0YXRlKTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGlmKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnN0YXRlID09PSBNcmRUb2dnbGVTd2l0Y2hTdGF0ZS5MRUZUID8gTXJkVG9nZ2xlU3dpdGNoU3RhdGUuUklHSFQgOiBNcmRUb2dnbGVTd2l0Y2hTdGF0ZS5MRUZUO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbn1cbiIsIjxkaXYgXG4gICAgW3N0eWxlLi0tYmctY29sb3JdPVwiYmdDb2xvclwiXG4gICAgW3N0eWxlLi0ta25vYi1jb2xvcl09XCJrbm9iQ29sb3JcIlxuICAgIFtzdHlsZS4tLWJnLW5ldXRyYWwtY29sb3JdPVwiYmdOZXV0cmFsQ29sb3JcIlxuICAgIFtzdHlsZS4tLWtub2ItbmV1dHJhbC1jb2xvcl09XCJrbm9iTmV1dHJhbENvbG9yXCJcbiAgICBbc3R5bGUuLS1iZy1kaXNhYmxlZC1jb2xvcl09XCJiZ0Rpc2FibGVkQ29sb3JcIlxuICAgIFtzdHlsZS4tLWtub2ItZGlzYWJsZWQtY29sb3JdPVwia25vYkRpc2FibGVkQ29sb3JcIlxuICAgIFtzdHlsZS4tLXdpZHRoXT1cIndpZHRoXCJcbiAgICBbc3R5bGUuLS1oZWlnaHRdPVwiaGVpZ2h0XCJcbiAgICBjbGFzcz1cIm1yZC10b2dnbGUtc3dpdGNoLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJtcmQtdG9nZ2xlLXN3aXRjaC1iYWNrZ3JvdW5kXCIgKGNsaWNrKT1cInRvZ2dsZSgkZXZlbnQpXCJcbiAgICAgICAgW25nQ2xhc3NdPVwieydtcmQtdG9nZ2xlLXN3aXRjaC1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICAgICAgICAgICAgICdtcmQtdG9nZ2xlLXN3aXRjaC1zdGF0ZS1sZWZ0Jzogc3RhdGUgPT09IE1yZFRvZ2dsZVN3aXRjaFN0YXRlLkxFRlQsIFxuICAgICAgICAgICAgICAgICdtcmQtdG9nZ2xlLXN3aXRjaC1zdGF0ZS1uZXV0cmFsJzogc3RhdGUgPT09IE1yZFRvZ2dsZVN3aXRjaFN0YXRlLk5FVVRSQUwsXG4gICAgICAgICAgICAgICAgJ21yZC10b2dnbGUtc3dpdGNoLXN0YXRlLXJpZ2h0Jzogc3RhdGUgPT09IE1yZFRvZ2dsZVN3aXRjaFN0YXRlLlJJR0hUfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibXJkLXRvZ2dsZS1zd2l0Y2gta25vYlwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibXJkLXRvZ2dsZS1zd3RpY2gtbmV1dHJhbC1jbGlja2FyZWFzXCIgKm5nSWY9XCIhZGlzYWJsZWQgJiYgc3RhdGUgPT09IE1yZFRvZ2dsZVN3aXRjaFN0YXRlLk5FVVRSQUxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtcmQtdG9nZ2xlLXN3aXRjaC1uZXV0cmFsLWNsaWNrYXJlYVwiIChjbGljayk9XCJ0b2dnbGUoJGV2ZW50LE1yZFRvZ2dsZVN3aXRjaFN0YXRlLkxFRlQpXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXJkLXRvZ2dsZS1zd2l0Y2gtbmV1dHJhbC1jbGlja2FyZWFcIiAoY2xpY2spPVwidG9nZ2xlKCRldmVudCxNcmRUb2dnbGVTd2l0Y2hTdGF0ZS5SSUdIVClcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=