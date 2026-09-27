import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, Output, ViewChild, booleanAttribute, numberAttribute } from '@angular/core';
import { colorAttribute } from '../../../../common/transforms/color-transform';
import { ConfigUtil } from '../../../../common/util/config.util';
import { MrdListItemTemplateDirective } from '../../common/directive/mrd-list-item-template.directive';
import { MrdVirtualScrollComponent } from '../../../mrd-virtual-scroll/components/mrd-virtual-scroll/mrd-virtual-scroll.component';
import { itemSizeAttribute } from '../../../mrd-virtual-scroll/common/transforms/item-size-transform';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../mrd-virtual-scroll/components/mrd-virtual-scroll/mrd-virtual-scroll.component";
function MrdListComponent_mrd_virtual_scroll_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-virtual-scroll", 1);
    i0.ɵɵlistener("visibleRangeChange", function MrdListComponent_mrd_virtual_scroll_1_Template_mrd_virtual_scroll_visibleRangeChange_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.visibleRangeChange.emit($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("items", ctx_r0.items)("itemSize", ctx_r0.itemSize)("buffer", ctx_r0.buffer)("maxHeight", ctx_r0.maxHeight)("trackBy", ctx_r0.trackBy)("itemTemplate", ctx_r0.itemTemplate == null ? null : ctx_r0.itemTemplate.templateRef);
} }
const _c0 = ["*"];
/**
 * Liste aus `mrd-list-item`s. Ohne `virtualScroll` werden die Eintraege normal projiziert,
 * mit `virtualScroll` kommen sie ueber `[items]` und ein `<ng-template mrdListItem>`.
 * Farben und Trennlinie werden als CSS-Variablen an die Eintraege vererbt.
 */
export class MrdListComponent {
    itemTemplate;
    virtualScrollComponent;
    /** Trennlinie unter jedem Eintrag */
    divider = false;
    /** Eintraege sind anklickbar: Zeiger-Cursor und Hover-Farbe */
    selectable = false;
    virtualScroll = false;
    /** Nur mit `virtualScroll` */
    items = [];
    /**
     * Zeilenhoehe in px; mit `virtualScroll` die feste Hoehe (Zahl oder `(item, index) => px` je Eintrag),
     * ohne `virtualScroll` die Mindesthoehe (nur als Zahl)
     */
    itemSize;
    /** Nur mit `virtualScroll`: zusaetzlich gerenderte Zeilen ober- und unterhalb des sichtbaren Bereichs */
    buffer = 5;
    /** Nur mit `virtualScroll`: maximale Hoehe in px, bis dahin waechst die Liste mit ihrem Inhalt */
    maxHeight;
    trackBy;
    selectedBackgroundColor;
    selectedTextColor;
    hoverColor;
    dividerColor;
    visibleRangeChange = new EventEmitter();
    config = ConfigUtil.getConfig();
    get mindestZeilenhoehe() {
        return typeof this.itemSize === 'number' ? this.itemSize : this.config.list.itemSize;
    }
    /** Nur mit `virtualScroll` wirksam */
    scrollToIndex(index, position = 'nearest', behavior = 'auto') {
        this.virtualScrollComponent?.scrollToIndex(index, position, behavior);
    }
    /** Nur mit `virtualScroll` wirksam */
    checkViewportSize() {
        this.virtualScrollComponent?.checkViewportSize();
    }
    /** @nocollapse */ static ɵfac = function MrdListComponent_Factory(t) { return new (t || MrdListComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdListComponent, selectors: [["mrd-list"]], contentQueries: function MrdListComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, MrdListItemTemplateDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
        } }, viewQuery: function MrdListComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(MrdVirtualScrollComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.virtualScrollComponent = _t.first);
        } }, hostAttrs: ["role", "list"], hostVars: 14, hostBindings: function MrdListComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("--mrd-list-item-height", ctx.mindestZeilenhoehe + "px")("--mrd-list-selected-background", ctx.selectedBackgroundColor || ctx.config.list.selectedBackgroundColor)("--mrd-list-selected-text", ctx.selectedTextColor || ctx.config.list.selectedTextColor)("--mrd-list-hover", ctx.selectable ? ctx.hoverColor || ctx.config.list.hoverColor : "transparent")("--mrd-list-cursor", ctx.selectable ? "pointer" : "default")("--mrd-list-divider", ctx.divider ? "1px solid " + (ctx.dividerColor || ctx.config.list.dividerColor) : "none");
            i0.ɵɵclassProp("mrd-list-virtual", ctx.virtualScroll);
        } }, inputs: { divider: ["divider", "divider", booleanAttribute], selectable: ["selectable", "selectable", booleanAttribute], virtualScroll: ["virtualScroll", "virtualScroll", booleanAttribute], items: "items", itemSize: ["itemSize", "itemSize", itemSizeAttribute], buffer: ["buffer", "buffer", numberAttribute], maxHeight: ["maxHeight", "maxHeight", numberAttribute], trackBy: "trackBy", selectedBackgroundColor: ["selectedBackgroundColor", "selectedBackgroundColor", colorAttribute], selectedTextColor: ["selectedTextColor", "selectedTextColor", colorAttribute], hoverColor: ["hoverColor", "hoverColor", colorAttribute], dividerColor: ["dividerColor", "dividerColor", colorAttribute] }, outputs: { visibleRangeChange: "visibleRangeChange" }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["class", "mrd-list-virtual-scroll", 3, "items", "itemSize", "buffer", "maxHeight", "trackBy", "itemTemplate", "visibleRangeChange", 4, "ngIf"], [1, "mrd-list-virtual-scroll", 3, "items", "itemSize", "buffer", "maxHeight", "trackBy", "itemTemplate", "visibleRangeChange"]], template: function MrdListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
            i0.ɵɵtemplate(1, MrdListComponent_mrd_virtual_scroll_1_Template, 1, 6, "mrd-virtual-scroll", 0);
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.virtualScroll);
        } }, dependencies: [i1.NgIf, i2.MrdVirtualScrollComponent], styles: ["[_nghost-%COMP%]{display:block}.mrd-list-virtual[_nghost-%COMP%]{display:flex;flex-direction:column;min-height:0}.mrd-list-virtual[_nghost-%COMP%]   .mrd-list-virtual-scroll[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdListComponent, [{
        type: Component,
        args: [{ selector: 'mrd-list', host: {
                    'role': 'list',
                    '[class.mrd-list-virtual]': 'virtualScroll',
                    '[style.--mrd-list-item-height]': "mindestZeilenhoehe + 'px'",
                    '[style.--mrd-list-selected-background]': 'selectedBackgroundColor || config.list.selectedBackgroundColor',
                    '[style.--mrd-list-selected-text]': 'selectedTextColor || config.list.selectedTextColor',
                    '[style.--mrd-list-hover]': "selectable ? (hoverColor || config.list.hoverColor) : 'transparent'",
                    '[style.--mrd-list-cursor]': "selectable ? 'pointer' : 'default'",
                    '[style.--mrd-list-divider]': "divider ? '1px solid ' + (dividerColor || config.list.dividerColor) : 'none'"
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>\n<mrd-virtual-scroll *ngIf=\"virtualScroll\"\n  class=\"mrd-list-virtual-scroll\"\n  [items]=\"items\"\n  [itemSize]=\"itemSize\"\n  [buffer]=\"buffer\"\n  [maxHeight]=\"maxHeight\"\n  [trackBy]=\"trackBy\"\n  [itemTemplate]=\"itemTemplate?.templateRef\"\n  (visibleRangeChange)=\"visibleRangeChange.emit($event)\">\n</mrd-virtual-scroll>\n", styles: [":host{display:block}:host(.mrd-list-virtual){display:flex;flex-direction:column;min-height:0}:host(.mrd-list-virtual) .mrd-list-virtual-scroll{flex:1 1 auto;min-height:0}\n"] }]
    }], null, { itemTemplate: [{
            type: ContentChild,
            args: [MrdListItemTemplateDirective]
        }], virtualScrollComponent: [{
            type: ViewChild,
            args: [MrdVirtualScrollComponent]
        }], divider: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], selectable: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], virtualScroll: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], items: [{
            type: Input
        }], itemSize: [{
            type: Input,
            args: [{ transform: itemSizeAttribute }]
        }], buffer: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], maxHeight: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], trackBy: [{
            type: Input
        }], selectedBackgroundColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], selectedTextColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], hoverColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], dividerColor: [{
            type: Input,
            args: [{ transform: colorAttribute }]
        }], visibleRangeChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1saXN0L2NvbXBvbmVudHMvbXJkLWxpc3QvbXJkLWxpc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1saXN0L2NvbXBvbmVudHMvbXJkLWxpc3QvbXJkLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQW1CLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0ssT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRS9FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN2RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3RkFBd0YsQ0FBQztBQUVuSSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQzs7Ozs7O0lDTnRHLDZDQVF5RDtJQUF2RCx3TkFBc0IsZUFBQSxzQ0FBK0IsQ0FBQSxJQUFDO0lBQ3hELGlCQUFxQjs7O0lBUG5CLG9DQUFlLDZCQUFBLHlCQUFBLCtCQUFBLDJCQUFBLHNGQUFBOzs7QURNakI7Ozs7R0FJRztBQWlCSCxNQUFNLE9BQU8sZ0JBQWdCO0lBRXdCLFlBQVksQ0FBa0M7SUFFbkQsc0JBQXNCLENBQStCO0lBRW5HLHFDQUFxQztJQUNRLE9BQU8sR0FBWSxLQUFLLENBQUM7SUFFdEUs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U0FBUyxFQUFFLGNBQWMsRUFBQztZQUVTLFVBQVU7a0JBQXBELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsY0FBYyxFQUFDO1lBRVMsWUFBWTtrQkFBdEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxjQUFjLEVBQUM7WUFFakIsa0JBQWtCO2tCQUFsQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRyYWNrQnlGdW5jdGlvbiwgVmlld0NoaWxkLCBib29sZWFuQXR0cmlidXRlLCBudW1iZXJBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbG9yQXR0cmlidXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvY29sb3ItdHJhbnNmb3JtJztcbmltcG9ydCB7IE1yZENvbmZpZ01vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21vZGVsL2NvbmZpZy5tb2RlbCc7XG5pbXBvcnQgeyBDb25maWdVdGlsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29uZmlnLnV0aWwnO1xuaW1wb3J0IHsgTXJkTGlzdEl0ZW1UZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9kaXJlY3RpdmUvbXJkLWxpc3QtaXRlbS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTXJkVmlydHVhbFNjcm9sbENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21yZC12aXJ0dWFsLXNjcm9sbC9jb21wb25lbnRzL21yZC12aXJ0dWFsLXNjcm9sbC9tcmQtdmlydHVhbC1zY3JvbGwuY29tcG9uZW50JztcbmltcG9ydCB7IE1yZFZpcnR1YWxTY3JvbGxJdGVtU2l6ZSwgTXJkVmlydHVhbFNjcm9sbFBvc2l0aW9uLCBNcmRWaXJ0dWFsU2Nyb2xsUmFuZ2UgfSBmcm9tICcuLi8uLi8uLi9tcmQtdmlydHVhbC1zY3JvbGwvY29tbW9uL21vZGVsL21yZC12aXJ0dWFsLXNjcm9sbC5tb2RlbCc7XG5pbXBvcnQgeyBpdGVtU2l6ZUF0dHJpYnV0ZSB9IGZyb20gJy4uLy4uLy4uL21yZC12aXJ0dWFsLXNjcm9sbC9jb21tb24vdHJhbnNmb3Jtcy9pdGVtLXNpemUtdHJhbnNmb3JtJztcblxuLyoqXG4gKiBMaXN0ZSBhdXMgYG1yZC1saXN0LWl0ZW1gcy4gT2huZSBgdmlydHVhbFNjcm9sbGAgd2VyZGVuIGRpZSBFaW50cmFlZ2Ugbm9ybWFsIHByb2ppemllcnQsXG4gKiBtaXQgYHZpcnR1YWxTY3JvbGxgIGtvbW1lbiBzaWUgdWViZXIgYFtpdGVtc11gIHVuZCBlaW4gYDxuZy10ZW1wbGF0ZSBtcmRMaXN0SXRlbT5gLlxuICogRmFyYmVuIHVuZCBUcmVubmxpbmllIHdlcmRlbiBhbHMgQ1NTLVZhcmlhYmxlbiBhbiBkaWUgRWludHJhZWdlIHZlcmVyYnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yZC1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWxpc3QuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgICdyb2xlJzogJ2xpc3QnLFxuICAgICdbY2xhc3MubXJkLWxpc3QtdmlydHVhbF0nOiAndmlydHVhbFNjcm9sbCcsXG4gICAgJ1tzdHlsZS4tLW1yZC1saXN0LWl0ZW0taGVpZ2h0XSc6IFwibWluZGVzdFplaWxlbmhvZWhlICsgJ3B4J1wiLFxuICAgICdbc3R5bGUuLS1tcmQtbGlzdC1zZWxlY3RlZC1iYWNrZ3JvdW5kXSc6ICdzZWxlY3RlZEJhY2tncm91bmRDb2xvciB8fCBjb25maWcubGlzdC5zZWxlY3RlZEJhY2tncm91bmRDb2xvcicsXG4gICAgJ1tzdHlsZS4tLW1yZC1saXN0LXNlbGVjdGVkLXRleHRdJzogJ3NlbGVjdGVkVGV4dENvbG9yIHx8IGNvbmZpZy5saXN0LnNlbGVjdGVkVGV4dENvbG9yJyxcbiAgICAnW3N0eWxlLi0tbXJkLWxpc3QtaG92ZXJdJzogXCJzZWxlY3RhYmxlID8gKGhvdmVyQ29sb3IgfHwgY29uZmlnLmxpc3QuaG92ZXJDb2xvcikgOiAndHJhbnNwYXJlbnQnXCIsXG4gICAgJ1tzdHlsZS4tLW1yZC1saXN0LWN1cnNvcl0nOiBcInNlbGVjdGFibGUgPyAncG9pbnRlcicgOiAnZGVmYXVsdCdcIixcbiAgICAnW3N0eWxlLi0tbXJkLWxpc3QtZGl2aWRlcl0nOiBcImRpdmlkZXIgPyAnMXB4IHNvbGlkICcgKyAoZGl2aWRlckNvbG9yIHx8IGNvbmZpZy5saXN0LmRpdmlkZXJDb2xvcikgOiAnbm9uZSdcIlxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNcmRMaXN0Q29tcG9uZW50PFQgPSBhbnk+IHtcblxuICBAQ29udGVudENoaWxkKE1yZExpc3RJdGVtVGVtcGxhdGVEaXJlY3RpdmUpIHB1YmxpYyBpdGVtVGVtcGxhdGU6IE1yZExpc3RJdGVtVGVtcGxhdGVEaXJlY3RpdmU8VD47XG5cbiAgQFZpZXdDaGlsZChNcmRWaXJ0dWFsU2Nyb2xsQ29tcG9uZW50KSBwcml2YXRlIHZpcnR1YWxTY3JvbGxDb21wb25lbnQ6IE1yZFZpcnR1YWxTY3JvbGxDb21wb25lbnQ8VD47XG5cbiAgLyoqIFRyZW5ubGluaWUgdW50ZXIgamVkZW0gRWludHJhZyAqL1xuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBkaXZpZGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIEVpbnRyYWVnZSBzaW5kIGFua2xpY2tiYXI6IFplaWdlci1DdXJzb3IgdW5kIEhvdmVyLUZhcmJlICovXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNlbGVjdGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyB2aXJ0dWFsU2Nyb2xsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIE51ciBtaXQgYHZpcnR1YWxTY3JvbGxgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBpdGVtczogVFtdID0gW107XG5cbiAgLyoqXG4gICAqIFplaWxlbmhvZWhlIGluIHB4OyBtaXQgYHZpcnR1YWxTY3JvbGxgIGRpZSBmZXN0ZSBIb2VoZSAoWmFobCBvZGVyIGAoaXRlbSwgaW5kZXgpID0+IHB4YCBqZSBFaW50cmFnKSxcbiAgICogb2huZSBgdmlydHVhbFNjcm9sbGAgZGllIE1pbmRlc3Rob2VoZSAobnVyIGFscyBaYWhsKVxuICAgKi9cbiAgQElucHV0KHt0cmFuc2Zvcm06IGl0ZW1TaXplQXR0cmlidXRlfSkgcHVibGljIGl0ZW1TaXplOiBNcmRWaXJ0dWFsU2Nyb2xsSXRlbVNpemU8VD47XG5cbiAgLyoqIE51ciBtaXQgYHZpcnR1YWxTY3JvbGxgOiB6dXNhZXR6bGljaCBnZXJlbmRlcnRlIFplaWxlbiBvYmVyLSB1bmQgdW50ZXJoYWxiIGRlcyBzaWNodGJhcmVuIEJlcmVpY2hzICovXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgYnVmZmVyOiBudW1iZXIgPSA1O1xuXG4gIC8qKiBOdXIgbWl0IGB2aXJ0dWFsU2Nyb2xsYDogbWF4aW1hbGUgSG9laGUgaW4gcHgsIGJpcyBkYWhpbiB3YWVjaHN0IGRpZSBMaXN0ZSBtaXQgaWhyZW0gSW5oYWx0ICovXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgbWF4SGVpZ2h0OiBudW1iZXI7XG5cbiAgQElucHV0KCkgcHVibGljIHRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxUPjtcblxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgc2VsZWN0ZWRCYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcblxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgc2VsZWN0ZWRUZXh0Q29sb3I6IHN0cmluZztcblxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgaG92ZXJDb2xvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBkaXZpZGVyQ29sb3I6IHN0cmluZztcblxuICBAT3V0cHV0KCkgcHVibGljIHZpc2libGVSYW5nZUNoYW5nZTogRXZlbnRFbWl0dGVyPE1yZFZpcnR1YWxTY3JvbGxSYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1yZFZpcnR1YWxTY3JvbGxSYW5nZT4oKTtcblxuICBwdWJsaWMgcmVhZG9ubHkgY29uZmlnOiBNcmRDb25maWdNb2RlbCA9IENvbmZpZ1V0aWwuZ2V0Q29uZmlnKCk7XG5cbiAgcHVibGljIGdldCBtaW5kZXN0WmVpbGVuaG9laGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuaXRlbVNpemUgPT09ICdudW1iZXInID8gdGhpcy5pdGVtU2l6ZSA6IHRoaXMuY29uZmlnLmxpc3QuaXRlbVNpemU7XG4gIH1cblxuICAvKiogTnVyIG1pdCBgdmlydHVhbFNjcm9sbGAgd2lya3NhbSAqL1xuICBwdWJsaWMgc2Nyb2xsVG9JbmRleChpbmRleDogbnVtYmVyLCBwb3NpdGlvbjogTXJkVmlydHVhbFNjcm9sbFBvc2l0aW9uID0gJ25lYXJlc3QnLCBiZWhhdmlvcjogU2Nyb2xsQmVoYXZpb3IgPSAnYXV0bycpOiB2b2lkIHtcbiAgICB0aGlzLnZpcnR1YWxTY3JvbGxDb21wb25lbnQ/LnNjcm9sbFRvSW5kZXgoaW5kZXgsIHBvc2l0aW9uLCBiZWhhdmlvcik7XG4gIH1cblxuICAvKiogTnVyIG1pdCBgdmlydHVhbFNjcm9sbGAgd2lya3NhbSAqL1xuICBwdWJsaWMgY2hlY2tWaWV3cG9ydFNpemUoKTogdm9pZCB7XG4gICAgdGhpcy52aXJ0dWFsU2Nyb2xsQ29tcG9uZW50Py5jaGVja1ZpZXdwb3J0U2l6ZSgpO1xuICB9XG59XG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48bXJkLXZpcnR1YWwtc2Nyb2xsICpuZ0lmPVwidmlydHVhbFNjcm9sbFwiXG4gIGNsYXNzPVwibXJkLWxpc3QtdmlydHVhbC1zY3JvbGxcIlxuICBbaXRlbXNdPVwiaXRlbXNcIlxuICBbaXRlbVNpemVdPVwiaXRlbVNpemVcIlxuICBbYnVmZmVyXT1cImJ1ZmZlclwiXG4gIFttYXhIZWlnaHRdPVwibWF4SGVpZ2h0XCJcbiAgW3RyYWNrQnldPVwidHJhY2tCeVwiXG4gIFtpdGVtVGVtcGxhdGVdPVwiaXRlbVRlbXBsYXRlPy50ZW1wbGF0ZVJlZlwiXG4gICh2aXNpYmxlUmFuZ2VDaGFuZ2UpPVwidmlzaWJsZVJhbmdlQ2hhbmdlLmVtaXQoJGV2ZW50KVwiPlxuPC9tcmQtdmlydHVhbC1zY3JvbGw+XG4iXX0=