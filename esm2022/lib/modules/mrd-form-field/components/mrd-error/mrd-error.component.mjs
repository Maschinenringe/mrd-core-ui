import { ChangeDetectionStrategy, Component, Input, numberAttribute } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../mrd-tooltip/common/directive/tool-tip-renderer/tool-tip-renderer.directive";
const _c0 = function (a0) { return { "mrd-error-ellipsis": a0 }; };
const _c1 = function (a0) { return { "-webkit-line-clamp": a0 }; };
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
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdErrorComponent, selectors: [["mrd-error"]], inputs: { ellipsis: ["ellipsis", "ellipsis", numberAttribute] }, features: [i0.ɵɵInputTransformsFeature], decls: 2, vars: 8, consts: [["showIfTruncated", "", 1, "mrd-error-container", 3, "ngClass", "ngStyle", "mrdToolTip"]], template: function MrdErrorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, ctx.ellipsis > 0))("ngStyle", i0.ɵɵpureFunction1(6, _c1, ctx.ellipsis > 0 ? ctx.ellipsis : ""))("mrdToolTip", ctx.error);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx.error, "\n");
        } }, dependencies: [i1.NgClass, i1.NgStyle, i2.ToolTipRendererDirective], styles: ["[_nghost-%COMP%]{font-size:.75em;color:#db2929;display:flex;flex:0 1 fit-content}.mrd-error-container[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;min-width:-moz-fit-content;min-width:fit-content}.mrd-error-container.mrd-error-ellipsis[_ngcontent-%COMP%]{white-space:nowrap;white-space:normal;display:-webkit-box}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdErrorComponent, [{
        type: Component,
        args: [{ selector: 'mrd-error', changeDetection: ChangeDetectionStrategy.OnPush, template: "<span class=\"mrd-error-container\"\r\n  [ngClass]=\"{'mrd-error-ellipsis': ellipsis > 0}\"\r\n  [ngStyle]=\"{'-webkit-line-clamp': ellipsis > 0 ? ellipsis : ''}\"\r\n  [mrdToolTip]=\"error\" showIfTruncated>\r\n  {{error}}\r\n</span>\r\n", styles: [":host{font-size:.75em;color:#db2929;display:flex;flex:0 1 fit-content}.mrd-error-container{overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;min-width:-moz-fit-content;min-width:fit-content}.mrd-error-container.mrd-error-ellipsis{white-space:nowrap;white-space:normal;display:-webkit-box}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { ellipsis: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWVycm9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZm9ybS1maWVsZC9jb21wb25lbnRzL21yZC1lcnJvci9tcmQtZXJyb3IuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWVycm9yL21yZC1lcnJvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFROUcsTUFBTSxPQUFPLGlCQUFpQjtJQWdCbEI7SUFka0MsUUFBUSxDQUFTO0lBRXJELE1BQU0sR0FBVyxFQUFFLENBQUM7SUFFNUIsSUFBVyxLQUFLLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVELFlBQ1UsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7SUFDNUIsQ0FBQztJQUVMLGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzlELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzhGQXhCVSxpQkFBaUI7NEZBQWpCLGlCQUFpQiwyRUFFVCxlQUFlO1lDVnBDLCtCQUd1QztZQUNyQyxZQUNGO1lBQUEsaUJBQU87O1lBSkwsc0VBQWdELDZFQUFBLHlCQUFBO1lBR2hELGVBQ0Y7WUFERSwyQ0FDRjs7O3VGREdhLGlCQUFpQjtjQU43QixTQUFTOzJCQUNFLFdBQVcsbUJBR0osdUJBQXVCLENBQUMsTUFBTTtvRUFJSCxRQUFRO2tCQUFuRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgbnVtYmVyQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1lcnJvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1lcnJvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWVycm9yLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZEVycm9yQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBlbGxpcHNpczogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIF9lcnJvcjogc3RyaW5nID0gJyc7XHJcblxyXG4gIHB1YmxpYyBzZXQgZXJyb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fZXJyb3IgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZXJyb3IoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9lcnJvcjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZWxsaXBzaXMgIT09IHVuZGVmaW5lZCAmJiBOdW1iZXIuaXNOYU4odGhpcy5lbGxpcHNpcykpIHtcclxuICAgICAgdGhpcy5lbGxpcHNpcyA9IDE7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxzcGFuIGNsYXNzPVwibXJkLWVycm9yLWNvbnRhaW5lclwiXHJcbiAgW25nQ2xhc3NdPVwieydtcmQtZXJyb3ItZWxsaXBzaXMnOiBlbGxpcHNpcyA+IDB9XCJcclxuICBbbmdTdHlsZV09XCJ7Jy13ZWJraXQtbGluZS1jbGFtcCc6IGVsbGlwc2lzID4gMCA/IGVsbGlwc2lzIDogJyd9XCJcclxuICBbbXJkVG9vbFRpcF09XCJlcnJvclwiIHNob3dJZlRydW5jYXRlZD5cclxuICB7e2Vycm9yfX1cclxuPC9zcGFuPlxyXG4iXX0=