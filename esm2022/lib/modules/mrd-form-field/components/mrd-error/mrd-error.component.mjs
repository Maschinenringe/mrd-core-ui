import { ChangeDetectionStrategy, Component, Input, numberAttribute } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../mrd-tooltip/common/directive/tool-tip-renderer/tool-tip-renderer.directive";
const _c0 = function (a0) { return { "mrd-error-ellipsis": a0 }; };
export class MrdErrorComponent {
    cdr;
    ellipsis;
    _error = '';
    set error(value) {
        this._error = value;
        this.cdr.detectChanges();
    }
    get error() {
        return this._error;
    }
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        if (this.ellipsis !== undefined && Number.isNaN(this.ellipsis)) {
            this.ellipsis = 1;
        }
        this.cdr.detectChanges();
    }
    /** @nocollapse */ static ɵfac = function MrdErrorComponent_Factory(t) { return new (t || MrdErrorComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdErrorComponent, selectors: [["mrd-error"]], inputs: { ellipsis: ["ellipsis", "ellipsis", numberAttribute] }, features: [i0.ɵɵInputTransformsFeature], decls: 2, vars: 6, consts: [["showIfTruncated", "", 1, "mrd-error-container", 3, "ngClass", "line-clamp", "mrdToolTip"]], template: function MrdErrorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, ctx.ellipsis > 0))("line-clamp", ctx.ellipsis > 0 ? ctx.ellipsis : null)("mrdToolTip", ctx.error);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx.error, "\n");
        } }, dependencies: [i1.NgClass, i2.ToolTipRendererDirective], styles: ["[_nghost-%COMP%]{font-size:.75em;color:#db2929;display:flex;flex:0 1 fit-content}.mrd-error-container[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;min-width:-moz-fit-content;min-width:fit-content}.mrd-error-container.mrd-error-ellipsis[_ngcontent-%COMP%]{white-space:nowrap;white-space:normal;display:-webkit-box}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdErrorComponent, [{
        type: Component,
        args: [{ selector: 'mrd-error', changeDetection: ChangeDetectionStrategy.OnPush, template: "<span class=\"mrd-error-container\"\r\n  [ngClass]=\"{'mrd-error-ellipsis': ellipsis > 0}\"\r\n  [line-clamp]=\"ellipsis > 0 ? ellipsis : null\"\r\n  [mrdToolTip]=\"error\" showIfTruncated>\r\n  {{error}}\r\n</span>\r\n", styles: [":host{font-size:.75em;color:#db2929;display:flex;flex:0 1 fit-content}.mrd-error-container{overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;min-width:-moz-fit-content;min-width:fit-content}.mrd-error-container.mrd-error-ellipsis{white-space:nowrap;white-space:normal;display:-webkit-box}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { ellipsis: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWVycm9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZm9ybS1maWVsZC9jb21wb25lbnRzL21yZC1lcnJvci9tcmQtZXJyb3IuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWVycm9yL21yZC1lcnJvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQVE5RyxNQUFNLE9BQU8saUJBQWlCO0lBZ0JsQjtJQWRrQyxRQUFRLENBQVM7SUFFckQsTUFBTSxHQUFXLEVBQUUsQ0FBQztJQUU1QixJQUFXLEtBQUssQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsWUFDVSxHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtJQUM1QixDQUFDO0lBRUwsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OEZBeEJVLGlCQUFpQjs0RkFBakIsaUJBQWlCLDJFQUVULGVBQWU7WUNWcEMsK0JBR3VDO1lBQ3JDLFlBQ0Y7WUFBQSxpQkFBTzs7WUFKTCxzRUFBZ0Qsc0RBQUEseUJBQUE7WUFHaEQsZUFDRjtZQURFLDJDQUNGOzs7dUZER2EsaUJBQWlCO2NBTjdCLFNBQVM7MkJBQ0UsV0FBVyxtQkFHSix1QkFBdUIsQ0FBQyxNQUFNO29FQUlILFFBQVE7a0JBQW5ELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBudW1iZXJBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLWVycm9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWVycm9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtZXJyb3IuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkRXJyb3JDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgcHVibGljIGVsbGlwc2lzOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgX2Vycm9yOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgcHVibGljIHNldCBlcnJvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9lcnJvciA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBlcnJvcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lbGxpcHNpcyAhPT0gdW5kZWZpbmVkICYmIE51bWJlci5pc05hTih0aGlzLmVsbGlwc2lzKSkge1xyXG4gICAgICB0aGlzLmVsbGlwc2lzID0gMTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcbn1cclxuIiwiPHNwYW4gY2xhc3M9XCJtcmQtZXJyb3ItY29udGFpbmVyXCJcclxuICBbbmdDbGFzc109XCJ7J21yZC1lcnJvci1lbGxpcHNpcyc6IGVsbGlwc2lzID4gMH1cIlxyXG4gIFtsaW5lLWNsYW1wXT1cImVsbGlwc2lzID4gMCA/IGVsbGlwc2lzIDogbnVsbFwiXHJcbiAgW21yZFRvb2xUaXBdPVwiZXJyb3JcIiBzaG93SWZUcnVuY2F0ZWQ+XHJcbiAge3tlcnJvcn19XHJcbjwvc3Bhbj5cclxuIl19