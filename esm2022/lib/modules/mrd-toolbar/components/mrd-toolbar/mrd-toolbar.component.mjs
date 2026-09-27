import { ChangeDetectionStrategy, Component, Input, booleanAttribute } from '@angular/core';
import { colorAttribute } from '../../../../common/transforms/color-transform';
import { sizeAttribute } from '../../../../common/transforms/size-transform';
import { ConfigUtil } from '../../../../common/util/config.util';
import * as i0 from "@angular/core";
const _c0 = ["*"];
/**
 * Kopf- oder Fusszeile mit fester Hoehe. Die Farbe kommt aus `color`/`textColor`,
 * sonst aus den Attributen `green`, `grey` oder `blue`, sonst aus der Config.
 */
export class MrdToolbarComponent {
    /** Hintergrundfarbe; hat Vorrang vor `green`, `grey` und `blue` */
    color;
    textColor;
    green = false;
    grey = false;
    blue = false;
    height;
    padding;
    fontSize;
    config = ConfigUtil.getConfig();
    get hintergrundfarbe() {
        return this.color || this.thema?.background || this.config.toolbar.backgroundColor;
    }
    get textfarbe() {
        return this.textColor || this.thema?.text || this.config.toolbar.textColor;
    }
    get thema() {
        if (this.green) {
            return this.config.toolbar.green;
        }
        if (this.blue) {
            return this.config.toolbar.blue;
        }
        if (this.grey) {
            return this.config.toolbar.grey;
        }
        return null;
    }
    /** @nocollapse */ static ɵfac = function MrdToolbarComponent_Factory(t) { return new (t || MrdToolbarComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdToolbarComponent, selectors: [["mrd-toolbar"]], hostVars: 12, hostBindings: function MrdToolbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("--mrd-toolbar-background", ctx.hintergrundfarbe)("--mrd-toolbar-text", ctx.textfarbe)("--mrd-toolbar-height", ctx.height || ctx.config.toolbar.height)("--mrd-toolbar-padding", ctx.padding || ctx.config.toolbar.padding)("--mrd-toolbar-font-size", ctx.fontSize || ctx.config.toolbar.fontSize)("--mrd-toolbar-font-weight", ctx.config.toolbar.fontWeight);
        } }, inputs: { color: ["color", "color", colorAttribute], textColor: ["textColor", "textColor", colorAttribute], green: ["green", "green", booleanAttribute], grey: ["grey", "grey", booleanAttribute], blue: ["blue", "blue", booleanAttribute], height: ["height", "height", sizeAttribute], padding: "padding", fontSize: ["fontSize", "fontSize", sizeAttribute] }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MrdToolbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, styles: ["[_nghost-%COMP%]{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;position:relative;width:100%;height:var(--mrd-toolbar-height);min-height:var(--mrd-toolbar-height);max-height:var(--mrd-toolbar-height);padding:var(--mrd-toolbar-padding);background-color:var(--mrd-toolbar-background);color:var(--mrd-toolbar-text);font-size:var(--mrd-toolbar-font-size);font-weight:var(--mrd-toolbar-font-weight);line-height:32px;white-space:nowrap}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdToolbarComponent, [{
        type: Component,
        args: [{ selector: 'mrd-toolbar', host: {
                    '[style.--mrd-toolbar-background]': 'hintergrundfarbe',
                    '[style.--mrd-toolbar-text]': 'textfarbe',
                    '[style.--mrd-toolbar-height]': 'height || config.toolbar.height',
                    '[style.--mrd-toolbar-padding]': 'padding || config.toolbar.padding',
                    '[style.--mrd-toolbar-font-size]': 'fontSize || config.toolbar.fontSize',
                    '[style.--mrd-toolbar-font-weight]': 'config.toolbar.fontWeight'
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>\n", styles: [":host{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;position:relative;width:100%;height:var(--mrd-toolbar-height);min-height:var(--mrd-toolbar-height);max-height:var(--mrd-toolbar-height);padding:var(--mrd-toolbar-padding);background-color:var(--mrd-toolbar-background);color:var(--mrd-toolbar-text);font-size:var(--mrd-toolbar-font-size);font-weight:var(--mrd-toolbar-font-weight);line-height:32px;white-space:nowrap}\n"] }]
    }], null, { color: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], textColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], green: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], grey: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], blue: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], height: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], padding: [{
            type: Input
        }], fontSize: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10b29sYmFyL2NvbXBvbmVudHMvbXJkLXRvb2xiYXIvbXJkLXRvb2xiYXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC10b29sYmFyL2NvbXBvbmVudHMvbXJkLXRvb2xiYXIvbXJkLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUU3RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUNBQXFDLENBQUM7OztBQUVqRTs7O0dBR0c7QUFlSCxNQUFNLE9BQU8sbUJBQW1CO0lBRTlCLG1FQUFtRTtJQUN4QixLQUFLLENBQVM7SUFFZCxTQUFTLENBQVM7SUFFaEIsS0FBSyxHQUFZLEtBQUssQ0FBQztJQUV2QixJQUFJLEdBQVksS0FBSyxDQUFDO0lBRXRCLElBQUksR0FBWSxLQUFLLENBQUM7SUFFekIsTUFBTSxDQUFTO0lBRXpDLE9BQU8sQ0FBUztJQUVVLFFBQVEsQ0FBUztJQUUzQyxNQUFNLEdBQW1CLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUVoRSxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO0lBQ3JGLENBQUM7SUFFRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsSUFBWSxLQUFLO1FBQ2YsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7U0FDbEM7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztTQUNqQztRQUNELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO2dHQXhDVSxtQkFBbUI7NEZBQW5CLG1CQUFtQjs7aURBR1gsY0FBYyx5Q0FFZCxjQUFjLDZCQUVkLGdCQUFnQiwwQkFFaEIsZ0JBQWdCLDBCQUVoQixnQkFBZ0IsZ0NBRWhCLGFBQWEsMERBSWIsYUFBYTs7WUN6Q2xDLGtCQUF5Qjs7O3VGRHdCWixtQkFBbUI7Y0FkL0IsU0FBUzsyQkFDRSxhQUFhLFFBR2pCO29CQUNKLGtDQUFrQyxFQUFFLGtCQUFrQjtvQkFDdEQsNEJBQTRCLEVBQUUsV0FBVztvQkFDekMsOEJBQThCLEVBQUUsaUNBQWlDO29CQUNqRSwrQkFBK0IsRUFBRSxtQ0FBbUM7b0JBQ3BFLGlDQUFpQyxFQUFFLHFDQUFxQztvQkFDeEUsbUNBQW1DLEVBQUUsMkJBQTJCO2lCQUNqRSxtQkFDZ0IsdUJBQXVCLENBQUMsTUFBTTtnQkFLSixLQUFLO2tCQUEvQyxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGNBQWMsRUFBQztZQUVTLFNBQVM7a0JBQW5ELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsY0FBYyxFQUFDO1lBRVcsS0FBSztrQkFBakQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUVTLElBQUk7a0JBQWhELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFUyxJQUFJO2tCQUFoRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBRU0sTUFBTTtrQkFBL0MsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUM7WUFFakIsT0FBTztrQkFBdEIsS0FBSztZQUVvQyxRQUFRO2tCQUFqRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGFBQWEsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBib29sZWFuQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2xvckF0dHJpYnV0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi90cmFuc2Zvcm1zL2NvbG9yLXRyYW5zZm9ybSc7XG5pbXBvcnQgeyBzaXplQXR0cmlidXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvc2l6ZS10cmFuc2Zvcm0nO1xuaW1wb3J0IHsgTXJkQ29uZmlnTW9kZWwsIE1yZFRvb2xiYXJUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbC9jb25maWcubW9kZWwnO1xuaW1wb3J0IHsgQ29uZmlnVXRpbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsJztcblxuLyoqXG4gKiBLb3BmLSBvZGVyIEZ1c3N6ZWlsZSBtaXQgZmVzdGVyIEhvZWhlLiBEaWUgRmFyYmUga29tbXQgYXVzIGBjb2xvcmAvYHRleHRDb2xvcmAsXG4gKiBzb25zdCBhdXMgZGVuIEF0dHJpYnV0ZW4gYGdyZWVuYCwgYGdyZXlgIG9kZXIgYGJsdWVgLCBzb25zdCBhdXMgZGVyIENvbmZpZy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXJkLXRvb2xiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tcmQtdG9vbGJhci5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS4tLW1yZC10b29sYmFyLWJhY2tncm91bmRdJzogJ2hpbnRlcmdydW5kZmFyYmUnLFxuICAgICdbc3R5bGUuLS1tcmQtdG9vbGJhci10ZXh0XSc6ICd0ZXh0ZmFyYmUnLFxuICAgICdbc3R5bGUuLS1tcmQtdG9vbGJhci1oZWlnaHRdJzogJ2hlaWdodCB8fCBjb25maWcudG9vbGJhci5oZWlnaHQnLFxuICAgICdbc3R5bGUuLS1tcmQtdG9vbGJhci1wYWRkaW5nXSc6ICdwYWRkaW5nIHx8IGNvbmZpZy50b29sYmFyLnBhZGRpbmcnLFxuICAgICdbc3R5bGUuLS1tcmQtdG9vbGJhci1mb250LXNpemVdJzogJ2ZvbnRTaXplIHx8IGNvbmZpZy50b29sYmFyLmZvbnRTaXplJyxcbiAgICAnW3N0eWxlLi0tbXJkLXRvb2xiYXItZm9udC13ZWlnaHRdJzogJ2NvbmZpZy50b29sYmFyLmZvbnRXZWlnaHQnXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE1yZFRvb2xiYXJDb21wb25lbnQge1xuXG4gIC8qKiBIaW50ZXJncnVuZGZhcmJlOyBoYXQgVm9ycmFuZyB2b3IgYGdyZWVuYCwgYGdyZXlgIHVuZCBgYmx1ZWAgKi9cbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIGNvbG9yOiBzdHJpbmc7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IGNvbG9yQXR0cmlidXRlfSkgcHVibGljIHRleHRDb2xvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGdyZWVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgZ3JleTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGJsdWU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBoZWlnaHQ6IHN0cmluZztcblxuICBASW5wdXQoKSBwdWJsaWMgcGFkZGluZzogc3RyaW5nO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgcHVibGljIGZvbnRTaXplOiBzdHJpbmc7XG5cbiAgcHVibGljIHJlYWRvbmx5IGNvbmZpZzogTXJkQ29uZmlnTW9kZWwgPSBDb25maWdVdGlsLmdldENvbmZpZygpO1xuXG4gIHB1YmxpYyBnZXQgaGludGVyZ3J1bmRmYXJiZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbG9yIHx8IHRoaXMudGhlbWE/LmJhY2tncm91bmQgfHwgdGhpcy5jb25maWcudG9vbGJhci5iYWNrZ3JvdW5kQ29sb3I7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHRleHRmYXJiZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRleHRDb2xvciB8fCB0aGlzLnRoZW1hPy50ZXh0IHx8IHRoaXMuY29uZmlnLnRvb2xiYXIudGV4dENvbG9yO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgdGhlbWEoKTogTXJkVG9vbGJhclRoZW1lIHtcbiAgICBpZiAodGhpcy5ncmVlbikge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnRvb2xiYXIuZ3JlZW47XG4gICAgfVxuICAgIGlmICh0aGlzLmJsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZy50b29sYmFyLmJsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmdyZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZy50b29sYmFyLmdyZXk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4iXX0=