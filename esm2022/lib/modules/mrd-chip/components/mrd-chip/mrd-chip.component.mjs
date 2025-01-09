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
        this.close.emit();
    }
    /** @nocollapse */ static ɵfac = function MrdChipComponent_Factory(t) { return new (t || MrdChipComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdChipComponent, selectors: [["mrd-chip"]], viewQuery: function MrdChipComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.chipText = _t.first);
        } }, inputs: { prefixIcon: "prefixIcon", suffixIcon: "suffixIcon" }, outputs: { close: "close" }, ngContentSelectors: _c1, decls: 9, vars: 3, consts: [[1, "mrd-chip-container"], [1, "mrd-chip-content"], [3, "svgIcon", 4, "ngIf"], ["showIfTruncated", "", 1, "mrd-chip-text", 3, "mrdToolTip"], ["chipText", ""], ["icon-button", "", "fullIcon", "", "diameter", "1em", 3, "click"], ["svgIcon", "mrd_close_grey"], [3, "svgIcon"]], template: function MrdChipComponent_Template(rf, ctx) { if (rf & 1) {
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
        } }, dependencies: [i1.NgIf, i2.MrdIconComponent, i3.MrdButtonComponent, i4.ToolTipRendererDirective], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:-moz-fit-content;width:fit-content;max-width:100%}.mrd-chip-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.125em .7em;gap:1em;border-radius:2em;background-color:#ced9dd;max-width:100%}.mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;width:calc(100% - 2em);gap:.5em;line-height:1.5em}.mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-content[_ngcontent-%COMP%]   .mrd-chip-text[_ngcontent-%COMP%]{width:calc(100% - 1em);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-chip-container[_ngcontent-%COMP%]   .mrd-chip-content[_ngcontent-%COMP%]   mrd-icon[_ngcontent-%COMP%]{display:block;width:1em;height:1em}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdChipComponent, [{
        type: Component,
        args: [{ selector: 'mrd-chip', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-chip-container\">\r\n  <div class=\"mrd-chip-content\">\r\n    <mrd-icon *ngIf=\"prefixIcon\" [svgIcon]=\"prefixIcon\"></mrd-icon>\r\n    <div #chipText class=\"mrd-chip-text\" [mrdToolTip]=\"chipTextValue\" showIfTruncated>\r\n      <ng-content></ng-content>\r\n    </div>\r\n    <mrd-icon *ngIf=\"suffixIcon\" [svgIcon]=\"suffixIcon\"></mrd-icon>\r\n  </div>\r\n\r\n  <mrd-button icon-button fullIcon diameter=\"1em\" (click)=\"closeClicked()\">\r\n    <mrd-icon svgIcon=\"mrd_close_grey\"></mrd-icon>\r\n  </mrd-button>\r\n</div>\r\n", styles: [":host{display:flex;flex-direction:column;justify-content:center;align-items:center;width:-moz-fit-content;width:fit-content;max-width:100%}.mrd-chip-container{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:.125em .7em;gap:1em;border-radius:2em;background-color:#ced9dd;max-width:100%}.mrd-chip-container .mrd-chip-content{display:flex;flex-direction:row;align-items:center;width:calc(100% - 2em);gap:.5em;line-height:1.5em}.mrd-chip-container .mrd-chip-content .mrd-chip-text{width:calc(100% - 1em);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mrd-chip-container .mrd-chip-content mrd-icon{display:block;width:1em;height:1em}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { chipText: [{
            type: ViewChild,
            args: ['chipText']
        }], prefixIcon: [{
            type: Input,
            args: ['prefixIcon']
        }], suffixIcon: [{
            type: Input,
            args: ['suffixIcon']
        }], close: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWNoaXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1jaGlwL2NvbXBvbmVudHMvbXJkLWNoaXAvbXJkLWNoaXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1jaGlwL2NvbXBvbmVudHMvbXJkLWNoaXAvbXJkLWNoaXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQix1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7SUNFckosOEJBQStEOzs7SUFBbEMsMkNBQXNCOzs7SUFJbkQsOEJBQStEOzs7SUFBbEMsMkNBQXNCOzs7QURFdkQsTUFBTSxPQUFPLGdCQUFnQjtJQVlqQjtJQVZvQixRQUFRLENBQXNDO0lBRXZELFVBQVUsQ0FBUztJQUNuQixVQUFVLENBQVM7SUFFOUIsS0FBSyxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO0lBRXhELGFBQWEsQ0FBUztJQUU3QixZQUNVLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0lBQzdCLENBQUM7SUFFSixlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1NBQzVEO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sWUFBWTtRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7NkZBeEJVLGdCQUFnQjs0RkFBaEIsZ0JBQWdCOzs7Ozs7O1lDUjdCLDhCQUFnQyxhQUFBO1lBRTVCLDJFQUErRDtZQUMvRCxpQ0FBa0Y7WUFDaEYsa0JBQXlCO1lBQzNCLGlCQUFNO1lBQ04sMkVBQStEO1lBQ2pFLGlCQUFNO1lBRU4scUNBQXlFO1lBQXpCLGlHQUFTLGtCQUFjLElBQUM7WUFDdEUsOEJBQThDO1lBQ2hELGlCQUFhLEVBQUE7O1lBVEEsZUFBZ0I7WUFBaEIscUNBQWdCO1lBQ1UsZUFBNEI7WUFBNUIsOENBQTRCO1lBR3RELGVBQWdCO1lBQWhCLHFDQUFnQjs7O3VGREVsQixnQkFBZ0I7Y0FONUIsU0FBUzsyQkFDRSxVQUFVLG1CQUdILHVCQUF1QixDQUFDLE1BQU07b0VBSWpCLFFBQVE7a0JBQXJDLFNBQVM7bUJBQUMsVUFBVTtZQUVBLFVBQVU7a0JBQTlCLEtBQUs7bUJBQUMsWUFBWTtZQUNFLFVBQVU7a0JBQTlCLEtBQUs7bUJBQUMsWUFBWTtZQUVULEtBQUs7a0JBQWQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtcmQtY2hpcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1jaGlwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtY2hpcC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmRDaGlwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NoaXBUZXh0JykgcHVibGljIGNoaXBUZXh0OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KCdwcmVmaXhJY29uJykgcHJlZml4SWNvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgnc3VmZml4SWNvbicpIHN1ZmZpeEljb246IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgpIGNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIHB1YmxpYyBjaGlwVGV4dFZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jaGlwVGV4dCkge1xyXG4gICAgICB0aGlzLmNoaXBUZXh0VmFsdWUgPSB0aGlzLmNoaXBUZXh0Lm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0O1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xvc2UuZW1pdCgpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibXJkLWNoaXAtY29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm1yZC1jaGlwLWNvbnRlbnRcIj5cclxuICAgIDxtcmQtaWNvbiAqbmdJZj1cInByZWZpeEljb25cIiBbc3ZnSWNvbl09XCJwcmVmaXhJY29uXCI+PC9tcmQtaWNvbj5cclxuICAgIDxkaXYgI2NoaXBUZXh0IGNsYXNzPVwibXJkLWNoaXAtdGV4dFwiIFttcmRUb29sVGlwXT1cImNoaXBUZXh0VmFsdWVcIiBzaG93SWZUcnVuY2F0ZWQ+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gICAgPG1yZC1pY29uICpuZ0lmPVwic3VmZml4SWNvblwiIFtzdmdJY29uXT1cInN1ZmZpeEljb25cIj48L21yZC1pY29uPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8bXJkLWJ1dHRvbiBpY29uLWJ1dHRvbiBmdWxsSWNvbiBkaWFtZXRlcj1cIjFlbVwiIChjbGljayk9XCJjbG9zZUNsaWNrZWQoKVwiPlxyXG4gICAgPG1yZC1pY29uIHN2Z0ljb249XCJtcmRfY2xvc2VfZ3JleVwiPjwvbXJkLWljb24+XHJcbiAgPC9tcmQtYnV0dG9uPlxyXG48L2Rpdj5cclxuIl19