import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../mrd-icon/components/mrd-icon.component";
import * as i3 from "../../../mrd-button/components/mrd-button/mrd-button.component";
import * as i4 from "../../../mrd-tooltip/common/directive/tool-tip-renderer/tool-tip-renderer.directive";
const _c0 = ["chipText"];
function MrdChipComponent_mrd_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mrd-icon", 7);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("svgIcon", ctx_r0.prefixIcon);
} }
function MrdChipComponent_mrd_icon_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mrd-icon", 7);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("svgIcon", ctx_r2.suffixIcon);
} }
const _c1 = ["*"];
export class MrdChipComponent {
    cdr;
    chipText;
    prefixIcon;
    suffixIcon;
    disabled = false;
    close = new EventEmitter();
    chipTextValue;
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngAfterViewInit() {
        if (this.chipText) {
            this.chipTextValue = this.chipText.nativeElement.innerText;
        }
        this.cdr.detectChanges();
    }
    closeClicked() {
        if (!this.disabled) {
            this.close.emit();
        }
    }
    /** @nocollapse */ static ɵfac = function MrdChipComponent_Factory(t) { return new (t || MrdChipComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdChipComponent, selectors: [["mrd-chip"]], viewQuery: function MrdChipComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.chipText = _t.first);
        } }, inputs: { prefixIcon: "prefixIcon", suffixIcon: "suffixIcon", disabled: "disabled" }, outputs: { close: "close" }, ngContentSelectors: _c1, decls: 9, vars: 4, consts: [[1, "mrd-chip-container"], [1, "mrd-chip-content"], [3, "svgIcon", 4, "ngIf"], ["showIfTruncated", "", 1, "mrd-chip-text", 3, "mrdToolTip"], ["chipText", ""], ["icon-button", "", "fullIcon", "", "diameter", "1em", 3, "disabled", "click"], ["svgIcon", "mrd_close_grey"], [3, "svgIcon"]], template: function MrdChipComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, MrdChipComponent_mrd_icon_2_Template, 1, 1, "mrd-icon", 2);
            i0.ɵɵelementStart(3, "div", 3, 4);
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, MrdChipComponent_mrd_icon_6_Template, 1, 1, "mrd-icon", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mrd-button", 5);
            i0.ɵɵlistener("click", function MrdChipComponent_Template_mrd_button_click_7_listener() { return ctx.closeClicked(); });
            i0.ɵɵelement(8, "mrd-icon", 6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.prefixIcon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("mrdToolTip", ctx.chipTextValue);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.suffixIcon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("disabled", ctx.disabled);
        } }, dependencies: [i1.NgIf, i2.MrdIconComponent, i3.MrdButtonComponent, i4.ToolTipRendererDirective], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:-moz-fit-content;width:fit-content;max-width:100%}.mrd-chip-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.125em .7em;gap:1em;border-radius:2em;background-color:#ced9dd;max-width:100%}.mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;width:calc(100% - 2em);gap:.5em;line-height:1.5em}.mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-content[_ngcontent-%COMP%]   .mrd-chip-text[_ngcontent-%COMP%]{width:calc(100% - 1em);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-content[_ngcontent-%COMP%]   mrd-icon[_ngcontent-%COMP%]{display:block;width:1em;height:1em}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdChipComponent, [{
        type: Component,
        args: [{ selector: 'mrd-chip', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-chip-container\">\r\n  <div class=\"mrd-chip-content\">\r\n    <mrd-icon *ngIf=\"prefixIcon\" [svgIcon]=\"prefixIcon\"></mrd-icon>\r\n    <div #chipText class=\"mrd-chip-text\" [mrdToolTip]=\"chipTextValue\" showIfTruncated>\r\n      <ng-content></ng-content>\r\n    </div>\r\n    <mrd-icon *ngIf=\"suffixIcon\" [svgIcon]=\"suffixIcon\"></mrd-icon>\r\n  </div>\r\n\r\n  <mrd-button icon-button fullIcon diameter=\"1em\" (click)=\"closeClicked()\" [disabled]=\"disabled\">\r\n    <mrd-icon svgIcon=\"mrd_close_grey\"></mrd-icon>\r\n  </mrd-button>\r\n</div>\r\n", styles: [":host{display:flex;flex-direction:column;justify-content:center;align-items:center;width:-moz-fit-content;width:fit-content;max-width:100%}.mrd-chip-container{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.125em .7em;gap:1em;border-radius:2em;background-color:#ced9dd;max-width:100%}.mrd-chip-container .mrd-chip-content{display:flex;flex-direction:row;align-items:center;width:calc(100% - 2em);gap:.5em;line-height:1.5em}.mrd-chip-container .mrd-chip-content .mrd-chip-text{width:calc(100% - 1em);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-chip-container .mrd-chip-content mrd-icon{display:block;width:1em;height:1em}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { chipText: [{
            type: ViewChild,
            args: ['chipText']
        }], prefixIcon: [{
            type: Input,
            args: ['prefixIcon']
        }], suffixIcon: [{
            type: Input,
            args: ['suffixIcon']
        }], disabled: [{
            type: Input
        }], close: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWNoaXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1jaGlwL2NvbXBvbmVudHMvbXJkLWNoaXAvbXJkLWNoaXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1jaGlwL2NvbXBvbmVudHMvbXJkLWNoaXAvbXJkLWNoaXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQix1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7SUNFckosOEJBQStEOzs7SUFBbEMsMkNBQXNCOzs7SUFJbkQsOEJBQStEOzs7SUFBbEMsMkNBQXNCOzs7QURFdkQsTUFBTSxPQUFPLGdCQUFnQjtJQWNqQjtJQVpvQixRQUFRLENBQXNDO0lBRXZELFVBQVUsQ0FBUztJQUNuQixVQUFVLENBQVM7SUFFeEIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUVoQyxLQUFLLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7SUFFeEQsYUFBYSxDQUFTO0lBRTdCLFlBQ1UsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7SUFDN0IsQ0FBQztJQUVKLGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7U0FDNUQ7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDOzZGQTVCVSxnQkFBZ0I7NEZBQWhCLGdCQUFnQjs7Ozs7OztZQ1I3Qiw4QkFBZ0MsYUFBQTtZQUU1QiwyRUFBK0Q7WUFDL0QsaUNBQWtGO1lBQ2hGLGtCQUF5QjtZQUMzQixpQkFBTTtZQUNOLDJFQUErRDtZQUNqRSxpQkFBTTtZQUVOLHFDQUErRjtZQUEvQyxpR0FBUyxrQkFBYyxJQUFDO1lBQ3RFLDhCQUE4QztZQUNoRCxpQkFBYSxFQUFBOztZQVRBLGVBQWdCO1lBQWhCLHFDQUFnQjtZQUNVLGVBQTRCO1lBQTVCLDhDQUE0QjtZQUd0RCxlQUFnQjtZQUFoQixxQ0FBZ0I7WUFHNEMsZUFBcUI7WUFBckIsdUNBQXFCOzs7dUZERG5GLGdCQUFnQjtjQU41QixTQUFTOzJCQUNFLFVBQVUsbUJBR0gsdUJBQXVCLENBQUMsTUFBTTtvRUFJakIsUUFBUTtrQkFBckMsU0FBUzttQkFBQyxVQUFVO1lBRUEsVUFBVTtrQkFBOUIsS0FBSzttQkFBQyxZQUFZO1lBQ0UsVUFBVTtrQkFBOUIsS0FBSzttQkFBQyxZQUFZO1lBRUgsUUFBUTtrQkFBdkIsS0FBSztZQUVJLEtBQUs7a0JBQWQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtcmQtY2hpcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1jaGlwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtY2hpcC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmRDaGlwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NoaXBUZXh0JykgcHVibGljIGNoaXBUZXh0OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KCdwcmVmaXhJY29uJykgcHJlZml4SWNvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgnc3VmZml4SWNvbicpIHN1ZmZpeEljb246IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSBjbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBwdWJsaWMgY2hpcFRleHRWYWx1ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY2hpcFRleHQpIHtcclxuICAgICAgdGhpcy5jaGlwVGV4dFZhbHVlID0gdGhpcy5jaGlwVGV4dC5uYXRpdmVFbGVtZW50LmlubmVyVGV4dDtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZUNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5jbG9zZS5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJtcmQtY2hpcC1jb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwibXJkLWNoaXAtY29udGVudFwiPlxyXG4gICAgPG1yZC1pY29uICpuZ0lmPVwicHJlZml4SWNvblwiIFtzdmdJY29uXT1cInByZWZpeEljb25cIj48L21yZC1pY29uPlxyXG4gICAgPGRpdiAjY2hpcFRleHQgY2xhc3M9XCJtcmQtY2hpcC10ZXh0XCIgW21yZFRvb2xUaXBdPVwiY2hpcFRleHRWYWx1ZVwiIHNob3dJZlRydW5jYXRlZD5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bXJkLWljb24gKm5nSWY9XCJzdWZmaXhJY29uXCIgW3N2Z0ljb25dPVwic3VmZml4SWNvblwiPjwvbXJkLWljb24+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxtcmQtYnV0dG9uIGljb24tYnV0dG9uIGZ1bGxJY29uIGRpYW1ldGVyPVwiMWVtXCIgKGNsaWNrKT1cImNsb3NlQ2xpY2tlZCgpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XHJcbiAgICA8bXJkLWljb24gc3ZnSWNvbj1cIm1yZF9jbG9zZV9ncmV5XCI+PC9tcmQtaWNvbj5cclxuICA8L21yZC1idXR0b24+XHJcbjwvZGl2PlxyXG4iXX0=