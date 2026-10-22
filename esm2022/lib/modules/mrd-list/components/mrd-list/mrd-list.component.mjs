import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, Input, Output, ViewChild, booleanAttribute, numberAttribute } from '@angular/core';
import { colorAttribute } from '../../../../common/transforms/color-transform';
import { ConfigUtil } from '../../../../common/util/config.util';
import { MrdListItemTemplateDirective } from '../../common/directive/mrd-list-item-template.directive';
import { MrdVirtualScrollComponent } from '../../../mrd-virtual-scroll/components/mrd-virtual-scroll/mrd-virtual-scroll.component';
import { itemSizeAttribute } from '../../../mrd-virtual-scroll/common/transforms/item-size-transform';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../mrd-virtual-scroll/components/mrd-virtual-scroll/mrd-virtual-scroll.component";
function MrdListComponent_mrd_virtual_scroll_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-virtual-scroll", 2);
    i0.ɵɵlistener("visibleRangeChange", function MrdListComponent_mrd_virtual_scroll_1_Template_mrd_virtual_scroll_visibleRangeChange_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.visibleRangeChange.emit($event)); })("sichtbarerBereichChange", function MrdListComponent_mrd_virtual_scroll_1_Template_mrd_virtual_scroll_sichtbarerBereichChange_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.sichtbarerBereichGeaendert($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("items", ctx_r0.items)("itemSize", ctx_r0.itemSize)("buffer", ctx_r0.buffer)("maxHeight", ctx_r0.maxHeight)("trackBy", ctx_r0.trackBy)("itemTemplate", ctx_r0.itemTemplate == null ? null : ctx_r0.itemTemplate.templateRef);
} }
function MrdListComponent_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function MrdListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, MrdListComponent_div_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("height", ctx_r1.anheftHoehe, "px")("right", ctx_r1.scrollbarBreite, "px");
    i0.ɵɵclassProp("mrd-list-angeheftet-unten", ctx_r1.anheftPosition === "unten");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate == null ? null : ctx_r1.itemTemplate.templateRef)("ngTemplateOutletContext", i0.ɵɵpureFunction2(8, _c0, ctx_r1.angeheftet, ctx_r1.anheftIndex));
} }
const _c1 = ["*"];
/**
 * Liste aus `mrd-list-item`s. Ohne `virtualScroll` werden die Eintraege normal projiziert,
 * mit `virtualScroll` kommen sie ueber `[items]` und ein `<ng-template mrdListItem>`.
 * Farben und Trennlinie werden als CSS-Variablen an die Eintraege vererbt.
 */
export class MrdListComponent {
    cdr;
    itemTemplate;
    virtualScrollComponent;
    virtualScrollElement;
    /** Trennlinie unter jedem Eintrag */
    divider = false;
    /** Eintraege sind anklickbar: Zeiger-Cursor und Hover-Farbe */
    selectable = false;
    virtualScroll = false;
    /** Nur mit `virtualScroll` */
    set items(value) {
        this._items = value || [];
        this.anheftIndexBerechnen();
    }
    get items() {
        return this._items;
    }
    _items = [];
    /**
     * Nur mit `virtualScroll`: dieser Eintrag (z. B. die Auswahl) bleibt oben bzw. unten sichtbar, solange er herausgescrollt ist.
     * Erkannt wird er ueber `trackBy`, ohne `trackBy` ueber die Objekt-Identitaet.
     */
    set angeheftet(value) {
        this._angeheftet = value;
        this.anheftIndexBerechnen();
    }
    get angeheftet() {
        return this._angeheftet;
    }
    _angeheftet = null;
    /**
     * Zeilenhoehe in px; mit `virtualScroll` die feste Hoehe (Zahl oder `(item, index) => px` je Eintrag),
     * ohne `virtualScroll` die Mindesthoehe (nur als Zahl)
     */
    itemSize;
    /** Nur mit `virtualScroll`: zusaetzlich gerenderte Zeilen ober- und unterhalb des sichtbaren Bereichs */
    buffer = 5;
    /** Nur mit `virtualScroll`: maximale Hoehe in px, bis dahin waechst die Liste mit ihrem Inhalt */
    maxHeight;
    set trackBy(value) {
        this._trackBy = value;
        this.anheftIndexBerechnen();
    }
    get trackBy() {
        return this._trackBy;
    }
    _trackBy;
    selectedBackgroundColor;
    selectedTextColor;
    hoverColor;
    dividerColor;
    visibleRangeChange = new EventEmitter();
    config = ConfigUtil.getConfig();
    /** Wo der angeheftete Eintrag gerade eingeblendet ist; `null`, solange er in der Liste sichtbar ist */
    anheftPosition = null;
    anheftIndex = -1;
    scrollbarBreite = 0;
    sichtbarerBereich = null;
    constructor(cdr) {
        this.cdr = cdr;
    }
    get mindestZeilenhoehe() {
        return typeof this.itemSize === 'number' ? this.itemSize : this.config.list.itemSize;
    }
    get anheftHoehe() {
        const groesse = this.itemSize ?? this.config.list.itemSize;
        return typeof groesse === 'function' ? groesse(this._angeheftet, this.anheftIndex) : groesse;
    }
    sichtbarerBereichGeaendert(bereich) {
        this.sichtbarerBereich = bereich;
        this.anheftPositionBerechnen();
    }
    /** Nur mit `virtualScroll` wirksam */
    scrollToIndex(index, position = 'nearest', behavior = 'auto') {
        this.virtualScrollComponent?.scrollToIndex(index, position, behavior);
    }
    /** Nur mit `virtualScroll` wirksam */
    checkViewportSize() {
        this.virtualScrollComponent?.checkViewportSize();
    }
    anheftIndexBerechnen() {
        const gesucht = this._angeheftet;
        if (gesucht === null || gesucht === undefined) {
            this.anheftIndex = -1;
        }
        else if (this._trackBy) {
            this.anheftIndex = this._items.findIndex((item, index) => this._trackBy(index, item) === this._trackBy(index, gesucht));
        }
        else {
            this.anheftIndex = this._items.indexOf(gesucht);
        }
        this.anheftPositionBerechnen();
    }
    anheftPositionBerechnen() {
        let position = null;
        if (this.anheftIndex >= 0 && this.sichtbarerBereich && this.sichtbarerBereich.end > 0) {
            if (this.anheftIndex < this.sichtbarerBereich.start) {
                position = 'oben';
            }
            else if (this.anheftIndex >= this.sichtbarerBereich.end) {
                position = 'unten';
            }
        }
        const element = this.virtualScrollElement?.nativeElement;
        // Die Einblendung soll die Scrollbar nicht verdecken
        this.scrollbarBreite = element ? element.offsetWidth - element.clientWidth : 0;
        if (position !== this.anheftPosition) {
            this.anheftPosition = position;
            this.cdr.markForCheck();
        }
    }
    /** @nocollapse */ static ɵfac = function MrdListComponent_Factory(t) { return new (t || MrdListComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdListComponent, selectors: [["mrd-list"]], contentQueries: function MrdListComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, MrdListItemTemplateDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
        } }, viewQuery: function MrdListComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(MrdVirtualScrollComponent, 5);
            i0.ɵɵviewQuery(MrdVirtualScrollComponent, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.virtualScrollComponent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.virtualScrollElement = _t.first);
        } }, hostAttrs: ["role", "list"], hostVars: 14, hostBindings: function MrdListComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("--mrd-list-item-height", ctx.mindestZeilenhoehe + "px")("--mrd-list-selected-background", ctx.selectedBackgroundColor || ctx.config.list.selectedBackgroundColor)("--mrd-list-selected-text", ctx.selectedTextColor || ctx.config.list.selectedTextColor)("--mrd-list-hover", ctx.selectable ? ctx.hoverColor || ctx.config.list.hoverColor : "transparent")("--mrd-list-cursor", ctx.selectable ? "pointer" : "default")("--mrd-list-divider", ctx.divider ? "1px solid " + (ctx.dividerColor || ctx.config.list.dividerColor) : "none");
            i0.ɵɵclassProp("mrd-list-virtual", ctx.virtualScroll);
        } }, inputs: { divider: ["divider", "divider", booleanAttribute], selectable: ["selectable", "selectable", booleanAttribute], virtualScroll: ["virtualScroll", "virtualScroll", booleanAttribute], items: "items", angeheftet: "angeheftet", itemSize: ["itemSize", "itemSize", itemSizeAttribute], buffer: ["buffer", "buffer", numberAttribute], maxHeight: ["maxHeight", "maxHeight", numberAttribute], trackBy: "trackBy", selectedBackgroundColor: ["selectedBackgroundColor", "selectedBackgroundColor", colorAttribute], selectedTextColor: ["selectedTextColor", "selectedTextColor", colorAttribute], hoverColor: ["hoverColor", "hoverColor", colorAttribute], dividerColor: ["dividerColor", "dividerColor", colorAttribute] }, outputs: { visibleRangeChange: "visibleRangeChange" }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c1, decls: 3, vars: 2, consts: [["class", "mrd-list-virtual-scroll", 3, "items", "itemSize", "buffer", "maxHeight", "trackBy", "itemTemplate", "visibleRangeChange", "sichtbarerBereichChange", 4, "ngIf"], ["class", "mrd-list-angeheftet", 3, "mrd-list-angeheftet-unten", "height", "right", 4, "ngIf"], [1, "mrd-list-virtual-scroll", 3, "items", "itemSize", "buffer", "maxHeight", "trackBy", "itemTemplate", "visibleRangeChange", "sichtbarerBereichChange"], [1, "mrd-list-angeheftet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function MrdListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
            i0.ɵɵtemplate(1, MrdListComponent_mrd_virtual_scroll_1_Template, 1, 6, "mrd-virtual-scroll", 0);
            i0.ɵɵtemplate(2, MrdListComponent_div_2_Template, 2, 11, "div", 1);
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.virtualScroll);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.virtualScroll && ctx.anheftPosition);
        } }, dependencies: [i1.NgIf, i1.NgTemplateOutlet, i2.MrdVirtualScrollComponent], styles: ["[_nghost-%COMP%]{display:block}.mrd-list-virtual[_nghost-%COMP%]{display:flex;flex-direction:column;position:relative;min-height:0}.mrd-list-virtual[_nghost-%COMP%]   .mrd-list-virtual-scroll[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0}.mrd-list-angeheftet[_ngcontent-%COMP%]{position:absolute;top:0;left:0;z-index:1;overflow:hidden;background-color:#fff;box-shadow:0 2px 4px #0003}.mrd-list-angeheftet.mrd-list-angeheftet-unten[_ngcontent-%COMP%]{top:auto;bottom:0;box-shadow:0 -2px 4px #0003}"], changeDetection: 0 });
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
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>\n<mrd-virtual-scroll *ngIf=\"virtualScroll\"\n  class=\"mrd-list-virtual-scroll\"\n  [items]=\"items\"\n  [itemSize]=\"itemSize\"\n  [buffer]=\"buffer\"\n  [maxHeight]=\"maxHeight\"\n  [trackBy]=\"trackBy\"\n  [itemTemplate]=\"itemTemplate?.templateRef\"\n  (visibleRangeChange)=\"visibleRangeChange.emit($event)\"\n  (sichtbarerBereichChange)=\"sichtbarerBereichGeaendert($event)\">\n</mrd-virtual-scroll>\n<div *ngIf=\"virtualScroll && anheftPosition\"\n  class=\"mrd-list-angeheftet\"\n  [class.mrd-list-angeheftet-unten]=\"anheftPosition === 'unten'\"\n  [style.height.px]=\"anheftHoehe\"\n  [style.right.px]=\"scrollbarBreite\">\n  <ng-container *ngTemplateOutlet=\"itemTemplate?.templateRef; context: {$implicit: angeheftet, index: anheftIndex}\"></ng-container>\n</div>\n", styles: [":host{display:block}:host(.mrd-list-virtual){display:flex;flex-direction:column;position:relative;min-height:0}:host(.mrd-list-virtual) .mrd-list-virtual-scroll{flex:1 1 auto;min-height:0}.mrd-list-angeheftet{position:absolute;top:0;left:0;z-index:1;overflow:hidden;background-color:#fff;box-shadow:0 2px 4px #0003}.mrd-list-angeheftet.mrd-list-angeheftet-unten{top:auto;bottom:0;box-shadow:0 -2px 4px #0003}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { itemTemplate: [{
            type: ContentChild,
            args: [MrdListItemTemplateDirective]
        }], virtualScrollComponent: [{
            type: ViewChild,
            args: [MrdVirtualScrollComponent]
        }], virtualScrollElement: [{
            type: ViewChild,
            args: [MrdVirtualScrollComponent, { read: ElementRef }]
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
        }], angeheftet: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1saXN0L2NvbXBvbmVudHMvbXJkLWxpc3QvbXJkLWxpc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1saXN0L2NvbXBvbmVudHMvbXJkLWxpc3QvbXJkLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBbUIsU0FBUyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1TSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdGQUF3RixDQUFDO0FBRW5JLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDOzs7Ozs7SUNOdEcsNkNBU2lFO0lBRC9ELHdOQUFzQixlQUFBLHNDQUErQixDQUFBLElBQUMscU5BQzNCLGVBQUEseUNBQWtDLENBQUEsSUFEUDtJQUV4RCxpQkFBcUI7OztJQVJuQixvQ0FBZSw2QkFBQSx5QkFBQSwrQkFBQSwyQkFBQSxzRkFBQTs7O0lBY2Ysd0JBQWlJOzs7O0lBTG5JLDhCQUlxQztJQUNuQyx5RkFBaUk7SUFDbkksaUJBQU07OztJQUhKLGtEQUErQix1Q0FBQTtJQUQvQiw4RUFBOEQ7SUFHL0MsZUFBNkM7SUFBN0MsdUdBQTZDLDhGQUFBOzs7QURSOUQ7Ozs7R0FJRztBQWlCSCxNQUFNLE9BQU8sZ0JBQWdCO0lBZ0ZqQjtJQTlFeUMsWUFBWSxDQUFrQztJQUVuRCxzQkFBc0IsQ0FBK0I7SUFFakMsb0JBQW9CLENBQTBCO0lBRWhILHFDQUFxQztJQUNRLE9BQU8sR0FBWSxLQUFLLENBQUM7SUFFdEUsK0RBQStEO0lBQ2xCLFVBQVUsR0FBWSxLQUFLLENBQUM7SUFFNUIsYUFBYSxHQUFZLEtBQUssQ0FBQztJQUU1RSw4QkFBOEI7SUFDOUIsSUFBb0IsS0FBSyxDQUFDLEtBQVU7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNPLE1BQU0sR0FBUSxFQUFFLENBQUM7SUFFekI7OztPQUdHO0lBQ0gsSUFBb0IsVUFBVSxDQUFDLEtBQVE7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNPLFdBQVcsR0FBTSxJQUFJLENBQUM7SUFFOUI7OztPQUdHO0lBQzJDLFFBQVEsQ0FBOEI7SUFFcEYseUdBQXlHO0lBQzdELE1BQU0sR0FBVyxDQUFDLENBQUM7SUFFL0Qsa0dBQWtHO0lBQ3RELFNBQVMsQ0FBUztJQUU5RCxJQUFvQixPQUFPLENBQUMsS0FBeUI7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNPLFFBQVEsQ0FBcUI7SUFFTSx1QkFBdUIsQ0FBUztJQUVoQyxpQkFBaUIsQ0FBUztJQUUxQixVQUFVLENBQVM7SUFFbkIsWUFBWSxDQUFTO0lBRS9DLGtCQUFrQixHQUF3QyxJQUFJLFlBQVksRUFBeUIsQ0FBQztJQUVyRyxNQUFNLEdBQW1CLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUVoRSx1R0FBdUc7SUFDaEcsY0FBYyxHQUE0QixJQUFJLENBQUM7SUFDL0MsV0FBVyxHQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLGVBQWUsR0FBVyxDQUFDLENBQUM7SUFFM0IsaUJBQWlCLEdBQTBCLElBQUksQ0FBQztJQUV4RCxZQUNVLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0lBQzdCLENBQUM7SUFFSixJQUFXLGtCQUFrQjtRQUMzQixPQUFPLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2RixDQUFDO0lBRUQsSUFBVyxXQUFXO1FBQ3BCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzNELE9BQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUMvRixDQUFDO0lBRU0sMEJBQTBCLENBQUMsT0FBOEI7UUFDOUQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQztRQUNqQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsc0NBQXNDO0lBQy9CLGFBQWEsQ0FBQyxLQUFhLEVBQUUsV0FBcUMsU0FBUyxFQUFFLFdBQTJCLE1BQU07UUFDbkgsSUFBSSxDQUFDLHNCQUFzQixFQUFFLGFBQWEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxzQ0FBc0M7SUFDL0IsaUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxpQkFBaUIsRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFTyxvQkFBb0I7UUFDMUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNqQyxJQUFJLE9BQU8sS0FBSyxJQUFJLElBQUksT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFPLEVBQUUsS0FBYSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ3BJO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVPLHVCQUF1QjtRQUM3QixJQUFJLFFBQVEsR0FBNEIsSUFBSSxDQUFDO1FBQzdDLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQ3JGLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFO2dCQUNuRCxRQUFRLEdBQUcsTUFBTSxDQUFDO2FBQ25CO2lCQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO2dCQUN6RCxRQUFRLEdBQUcsT0FBTyxDQUFDO2FBQ3BCO1NBQ0Y7UUFDRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsYUFBYSxDQUFDO1FBQ3pELHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0UsSUFBSSxRQUFRLEtBQUssSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztZQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs2RkF2SVUsZ0JBQWdCOzRGQUFoQixnQkFBZ0I7d0NBRWIsNEJBQTRCOzs7OzsyQkFFL0IseUJBQXlCOzJCQUV6Qix5QkFBeUIsS0FBUyxVQUFVOzs7Ozs7Ozt1REFHcEMsZ0JBQWdCLDRDQUdoQixnQkFBZ0IscURBRWhCLGdCQUFnQixnRkE2QmhCLGlCQUFpQixnQ0FHakIsZUFBZSx5Q0FHZixlQUFlLHVHQVdmLGNBQWMsaUVBRWQsY0FBYyw0Q0FFZCxjQUFjLGtEQUVkLGNBQWM7O1lDaEduQyxrQkFBeUI7WUFDekIsK0ZBVXFCO1lBQ3JCLGtFQU1NOztZQWpCZSxlQUFtQjtZQUFuQix3Q0FBbUI7WUFXbEMsZUFBcUM7WUFBckMsOERBQXFDOzs7dUZEa0I5QixnQkFBZ0I7Y0FoQjVCLFNBQVM7MkJBQ0UsVUFBVSxRQUdkO29CQUNKLE1BQU0sRUFBRSxNQUFNO29CQUNkLDBCQUEwQixFQUFFLGVBQWU7b0JBQzNDLGdDQUFnQyxFQUFFLDJCQUEyQjtvQkFDN0Qsd0NBQXdDLEVBQUUsZ0VBQWdFO29CQUMxRyxrQ0FBa0MsRUFBRSxvREFBb0Q7b0JBQ3hGLDBCQUEwQixFQUFFLHFFQUFxRTtvQkFDakcsMkJBQTJCLEVBQUUsb0NBQW9DO29CQUNqRSw0QkFBNEIsRUFBRSw4RUFBOEU7aUJBQzdHLG1CQUNnQix1QkFBdUIsQ0FBQyxNQUFNO29FQUlJLFlBQVk7a0JBQTlELFlBQVk7bUJBQUMsNEJBQTRCO1lBRUksc0JBQXNCO2tCQUFuRSxTQUFTO21CQUFDLHlCQUF5QjtZQUU4QixvQkFBb0I7a0JBQXJGLFNBQVM7bUJBQUMseUJBQXlCLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO1lBR1gsT0FBTztrQkFBbkQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUdTLFVBQVU7a0JBQXRELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFUyxhQUFhO2tCQUF6RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBR2hCLEtBQUs7a0JBQXhCLEtBQUs7WUFhYyxVQUFVO2tCQUE3QixLQUFLO1lBYXdDLFFBQVE7a0JBQXJELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUM7WUFHTyxNQUFNO2tCQUFqRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBQztZQUdTLFNBQVM7a0JBQXBELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFDO1lBRWYsT0FBTztrQkFBMUIsS0FBSztZQVNxQyx1QkFBdUI7a0JBQWpFLEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsY0FBYyxFQUFDO1lBRVMsaUJBQWlCO2tCQUEzRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGNBQWMsRUFBQztZQUVTLFVBQVU7a0JBQXBELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsY0FBYyxFQUFDO1lBRVMsWUFBWTtrQkFBdEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxjQUFjLEVBQUM7WUFFakIsa0JBQWtCO2tCQUFsQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBUcmFja0J5RnVuY3Rpb24sIFZpZXdDaGlsZCwgYm9vbGVhbkF0dHJpYnV0ZSwgbnVtYmVyQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2xvckF0dHJpYnV0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi90cmFuc2Zvcm1zL2NvbG9yLXRyYW5zZm9ybSc7XG5pbXBvcnQgeyBNcmRDb25maWdNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbC9jb25maWcubW9kZWwnO1xuaW1wb3J0IHsgQ29uZmlnVXRpbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsJztcbmltcG9ydCB7IE1yZExpc3RJdGVtVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9jb21tb24vZGlyZWN0aXZlL21yZC1saXN0LWl0ZW0tdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1yZFZpcnR1YWxTY3JvbGxDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9tcmQtdmlydHVhbC1zY3JvbGwvY29tcG9uZW50cy9tcmQtdmlydHVhbC1zY3JvbGwvbXJkLXZpcnR1YWwtc2Nyb2xsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNcmRWaXJ0dWFsU2Nyb2xsSXRlbVNpemUsIE1yZFZpcnR1YWxTY3JvbGxQb3NpdGlvbiwgTXJkVmlydHVhbFNjcm9sbFJhbmdlIH0gZnJvbSAnLi4vLi4vLi4vbXJkLXZpcnR1YWwtc2Nyb2xsL2NvbW1vbi9tb2RlbC9tcmQtdmlydHVhbC1zY3JvbGwubW9kZWwnO1xuaW1wb3J0IHsgaXRlbVNpemVBdHRyaWJ1dGUgfSBmcm9tICcuLi8uLi8uLi9tcmQtdmlydHVhbC1zY3JvbGwvY29tbW9uL3RyYW5zZm9ybXMvaXRlbS1zaXplLXRyYW5zZm9ybSc7XG5cbi8qKlxuICogTGlzdGUgYXVzIGBtcmQtbGlzdC1pdGVtYHMuIE9obmUgYHZpcnR1YWxTY3JvbGxgIHdlcmRlbiBkaWUgRWludHJhZWdlIG5vcm1hbCBwcm9qaXppZXJ0LFxuICogbWl0IGB2aXJ0dWFsU2Nyb2xsYCBrb21tZW4gc2llIHVlYmVyIGBbaXRlbXNdYCB1bmQgZWluIGA8bmctdGVtcGxhdGUgbXJkTGlzdEl0ZW0+YC5cbiAqIEZhcmJlbiB1bmQgVHJlbm5saW5pZSB3ZXJkZW4gYWxzIENTUy1WYXJpYWJsZW4gYW4gZGllIEVpbnRyYWVnZSB2ZXJlcmJ0LlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtcmQtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21yZC1saXN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICAncm9sZSc6ICdsaXN0JyxcbiAgICAnW2NsYXNzLm1yZC1saXN0LXZpcnR1YWxdJzogJ3ZpcnR1YWxTY3JvbGwnLFxuICAgICdbc3R5bGUuLS1tcmQtbGlzdC1pdGVtLWhlaWdodF0nOiBcIm1pbmRlc3RaZWlsZW5ob2VoZSArICdweCdcIixcbiAgICAnW3N0eWxlLi0tbXJkLWxpc3Qtc2VsZWN0ZWQtYmFja2dyb3VuZF0nOiAnc2VsZWN0ZWRCYWNrZ3JvdW5kQ29sb3IgfHwgY29uZmlnLmxpc3Quc2VsZWN0ZWRCYWNrZ3JvdW5kQ29sb3InLFxuICAgICdbc3R5bGUuLS1tcmQtbGlzdC1zZWxlY3RlZC10ZXh0XSc6ICdzZWxlY3RlZFRleHRDb2xvciB8fCBjb25maWcubGlzdC5zZWxlY3RlZFRleHRDb2xvcicsXG4gICAgJ1tzdHlsZS4tLW1yZC1saXN0LWhvdmVyXSc6IFwic2VsZWN0YWJsZSA/IChob3ZlckNvbG9yIHx8IGNvbmZpZy5saXN0LmhvdmVyQ29sb3IpIDogJ3RyYW5zcGFyZW50J1wiLFxuICAgICdbc3R5bGUuLS1tcmQtbGlzdC1jdXJzb3JdJzogXCJzZWxlY3RhYmxlID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnXCIsXG4gICAgJ1tzdHlsZS4tLW1yZC1saXN0LWRpdmlkZXJdJzogXCJkaXZpZGVyID8gJzFweCBzb2xpZCAnICsgKGRpdmlkZXJDb2xvciB8fCBjb25maWcubGlzdC5kaXZpZGVyQ29sb3IpIDogJ25vbmUnXCJcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTXJkTGlzdENvbXBvbmVudDxUID0gYW55PiB7XG5cbiAgQENvbnRlbnRDaGlsZChNcmRMaXN0SXRlbVRlbXBsYXRlRGlyZWN0aXZlKSBwdWJsaWMgaXRlbVRlbXBsYXRlOiBNcmRMaXN0SXRlbVRlbXBsYXRlRGlyZWN0aXZlPFQ+O1xuXG4gIEBWaWV3Q2hpbGQoTXJkVmlydHVhbFNjcm9sbENvbXBvbmVudCkgcHJpdmF0ZSB2aXJ0dWFsU2Nyb2xsQ29tcG9uZW50OiBNcmRWaXJ0dWFsU2Nyb2xsQ29tcG9uZW50PFQ+O1xuXG4gIEBWaWV3Q2hpbGQoTXJkVmlydHVhbFNjcm9sbENvbXBvbmVudCwge3JlYWQ6IEVsZW1lbnRSZWZ9KSBwcml2YXRlIHZpcnR1YWxTY3JvbGxFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcblxuICAvKiogVHJlbm5saW5pZSB1bnRlciBqZWRlbSBFaW50cmFnICovXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGRpdmlkZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogRWludHJhZWdlIHNpbmQgYW5rbGlja2JhcjogWmVpZ2VyLUN1cnNvciB1bmQgSG92ZXItRmFyYmUgKi9cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2VsZWN0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHZpcnR1YWxTY3JvbGw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogTnVyIG1pdCBgdmlydHVhbFNjcm9sbGAgKi9cbiAgQElucHV0KCkgcHVibGljIHNldCBpdGVtcyh2YWx1ZTogVFtdKSB7XG4gICAgdGhpcy5faXRlbXMgPSB2YWx1ZSB8fCBbXTtcbiAgICB0aGlzLmFuaGVmdEluZGV4QmVyZWNobmVuKCk7XG4gIH1cbiAgcHVibGljIGdldCBpdGVtcygpOiBUW10ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxuICBwcml2YXRlIF9pdGVtczogVFtdID0gW107XG5cbiAgLyoqXG4gICAqIE51ciBtaXQgYHZpcnR1YWxTY3JvbGxgOiBkaWVzZXIgRWludHJhZyAoei4gQi4gZGllIEF1c3dhaGwpIGJsZWlidCBvYmVuIGJ6dy4gdW50ZW4gc2ljaHRiYXIsIHNvbGFuZ2UgZXIgaGVyYXVzZ2VzY3JvbGx0IGlzdC5cbiAgICogRXJrYW5udCB3aXJkIGVyIHVlYmVyIGB0cmFja0J5YCwgb2huZSBgdHJhY2tCeWAgdWViZXIgZGllIE9iamVrdC1JZGVudGl0YWV0LlxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIHNldCBhbmdlaGVmdGV0KHZhbHVlOiBUKSB7XG4gICAgdGhpcy5fYW5nZWhlZnRldCA9IHZhbHVlO1xuICAgIHRoaXMuYW5oZWZ0SW5kZXhCZXJlY2huZW4oKTtcbiAgfVxuICBwdWJsaWMgZ2V0IGFuZ2VoZWZ0ZXQoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuX2FuZ2VoZWZ0ZXQ7XG4gIH1cbiAgcHJpdmF0ZSBfYW5nZWhlZnRldDogVCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFplaWxlbmhvZWhlIGluIHB4OyBtaXQgYHZpcnR1YWxTY3JvbGxgIGRpZSBmZXN0ZSBIb2VoZSAoWmFobCBvZGVyIGAoaXRlbSwgaW5kZXgpID0+IHB4YCBqZSBFaW50cmFnKSxcbiAgICogb2huZSBgdmlydHVhbFNjcm9sbGAgZGllIE1pbmRlc3Rob2VoZSAobnVyIGFscyBaYWhsKVxuICAgKi9cbiAgQElucHV0KHt0cmFuc2Zvcm06IGl0ZW1TaXplQXR0cmlidXRlfSkgcHVibGljIGl0ZW1TaXplOiBNcmRWaXJ0dWFsU2Nyb2xsSXRlbVNpemU8VD47XG5cbiAgLyoqIE51ciBtaXQgYHZpcnR1YWxTY3JvbGxgOiB6dXNhZXR6bGljaCBnZXJlbmRlcnRlIFplaWxlbiBvYmVyLSB1bmQgdW50ZXJoYWxiIGRlcyBzaWNodGJhcmVuIEJlcmVpY2hzICovXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgYnVmZmVyOiBudW1iZXIgPSA1O1xuXG4gIC8qKiBOdXIgbWl0IGB2aXJ0dWFsU2Nyb2xsYDogbWF4aW1hbGUgSG9laGUgaW4gcHgsIGJpcyBkYWhpbiB3YWVjaHN0IGRpZSBMaXN0ZSBtaXQgaWhyZW0gSW5oYWx0ICovXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgbWF4SGVpZ2h0OiBudW1iZXI7XG5cbiAgQElucHV0KCkgcHVibGljIHNldCB0cmFja0J5KHZhbHVlOiBUcmFja0J5RnVuY3Rpb248VD4pIHtcbiAgICB0aGlzLl90cmFja0J5ID0gdmFsdWU7XG4gICAgdGhpcy5hbmhlZnRJbmRleEJlcmVjaG5lbigpO1xuICB9XG4gIHB1YmxpYyBnZXQgdHJhY2tCeSgpOiBUcmFja0J5RnVuY3Rpb248VD4ge1xuICAgIHJldHVybiB0aGlzLl90cmFja0J5O1xuICB9XG4gIHByaXZhdGUgX3RyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxUPjtcblxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgc2VsZWN0ZWRCYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcblxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgc2VsZWN0ZWRUZXh0Q29sb3I6IHN0cmluZztcblxuICBASW5wdXQoe3RyYW5zZm9ybTogY29sb3JBdHRyaWJ1dGV9KSBwdWJsaWMgaG92ZXJDb2xvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBjb2xvckF0dHJpYnV0ZX0pIHB1YmxpYyBkaXZpZGVyQ29sb3I6IHN0cmluZztcblxuICBAT3V0cHV0KCkgcHVibGljIHZpc2libGVSYW5nZUNoYW5nZTogRXZlbnRFbWl0dGVyPE1yZFZpcnR1YWxTY3JvbGxSYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1yZFZpcnR1YWxTY3JvbGxSYW5nZT4oKTtcblxuICBwdWJsaWMgcmVhZG9ubHkgY29uZmlnOiBNcmRDb25maWdNb2RlbCA9IENvbmZpZ1V0aWwuZ2V0Q29uZmlnKCk7XG5cbiAgLyoqIFdvIGRlciBhbmdlaGVmdGV0ZSBFaW50cmFnIGdlcmFkZSBlaW5nZWJsZW5kZXQgaXN0OyBgbnVsbGAsIHNvbGFuZ2UgZXIgaW4gZGVyIExpc3RlIHNpY2h0YmFyIGlzdCAqL1xuICBwdWJsaWMgYW5oZWZ0UG9zaXRpb246ICdvYmVuJyB8ICd1bnRlbicgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIGFuaGVmdEluZGV4OiBudW1iZXIgPSAtMTtcbiAgcHVibGljIHNjcm9sbGJhckJyZWl0ZTogbnVtYmVyID0gMDtcblxuICBwcml2YXRlIHNpY2h0YmFyZXJCZXJlaWNoOiBNcmRWaXJ0dWFsU2Nyb2xsUmFuZ2UgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgcHVibGljIGdldCBtaW5kZXN0WmVpbGVuaG9laGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuaXRlbVNpemUgPT09ICdudW1iZXInID8gdGhpcy5pdGVtU2l6ZSA6IHRoaXMuY29uZmlnLmxpc3QuaXRlbVNpemU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFuaGVmdEhvZWhlKCk6IG51bWJlciB7XG4gICAgY29uc3QgZ3JvZXNzZSA9IHRoaXMuaXRlbVNpemUgPz8gdGhpcy5jb25maWcubGlzdC5pdGVtU2l6ZTtcbiAgICByZXR1cm4gdHlwZW9mIGdyb2Vzc2UgPT09ICdmdW5jdGlvbicgPyBncm9lc3NlKHRoaXMuX2FuZ2VoZWZ0ZXQsIHRoaXMuYW5oZWZ0SW5kZXgpIDogZ3JvZXNzZTtcbiAgfVxuXG4gIHB1YmxpYyBzaWNodGJhcmVyQmVyZWljaEdlYWVuZGVydChiZXJlaWNoOiBNcmRWaXJ0dWFsU2Nyb2xsUmFuZ2UpOiB2b2lkIHtcbiAgICB0aGlzLnNpY2h0YmFyZXJCZXJlaWNoID0gYmVyZWljaDtcbiAgICB0aGlzLmFuaGVmdFBvc2l0aW9uQmVyZWNobmVuKCk7XG4gIH1cblxuICAvKiogTnVyIG1pdCBgdmlydHVhbFNjcm9sbGAgd2lya3NhbSAqL1xuICBwdWJsaWMgc2Nyb2xsVG9JbmRleChpbmRleDogbnVtYmVyLCBwb3NpdGlvbjogTXJkVmlydHVhbFNjcm9sbFBvc2l0aW9uID0gJ25lYXJlc3QnLCBiZWhhdmlvcjogU2Nyb2xsQmVoYXZpb3IgPSAnYXV0bycpOiB2b2lkIHtcbiAgICB0aGlzLnZpcnR1YWxTY3JvbGxDb21wb25lbnQ/LnNjcm9sbFRvSW5kZXgoaW5kZXgsIHBvc2l0aW9uLCBiZWhhdmlvcik7XG4gIH1cblxuICAvKiogTnVyIG1pdCBgdmlydHVhbFNjcm9sbGAgd2lya3NhbSAqL1xuICBwdWJsaWMgY2hlY2tWaWV3cG9ydFNpemUoKTogdm9pZCB7XG4gICAgdGhpcy52aXJ0dWFsU2Nyb2xsQ29tcG9uZW50Py5jaGVja1ZpZXdwb3J0U2l6ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhbmhlZnRJbmRleEJlcmVjaG5lbigpOiB2b2lkIHtcbiAgICBjb25zdCBnZXN1Y2h0ID0gdGhpcy5fYW5nZWhlZnRldDtcbiAgICBpZiAoZ2VzdWNodCA9PT0gbnVsbCB8fCBnZXN1Y2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuYW5oZWZ0SW5kZXggPSAtMTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3RyYWNrQnkpIHtcbiAgICAgIHRoaXMuYW5oZWZ0SW5kZXggPSB0aGlzLl9pdGVtcy5maW5kSW5kZXgoKGl0ZW06IFQsIGluZGV4OiBudW1iZXIpID0+IHRoaXMuX3RyYWNrQnkoaW5kZXgsIGl0ZW0pID09PSB0aGlzLl90cmFja0J5KGluZGV4LCBnZXN1Y2h0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYW5oZWZ0SW5kZXggPSB0aGlzLl9pdGVtcy5pbmRleE9mKGdlc3VjaHQpO1xuICAgIH1cbiAgICB0aGlzLmFuaGVmdFBvc2l0aW9uQmVyZWNobmVuKCk7XG4gIH1cblxuICBwcml2YXRlIGFuaGVmdFBvc2l0aW9uQmVyZWNobmVuKCk6IHZvaWQge1xuICAgIGxldCBwb3NpdGlvbjogJ29iZW4nIHwgJ3VudGVuJyB8IG51bGwgPSBudWxsO1xuICAgIGlmICh0aGlzLmFuaGVmdEluZGV4ID49IDAgJiYgdGhpcy5zaWNodGJhcmVyQmVyZWljaCAmJiB0aGlzLnNpY2h0YmFyZXJCZXJlaWNoLmVuZCA+IDApIHtcbiAgICAgIGlmICh0aGlzLmFuaGVmdEluZGV4IDwgdGhpcy5zaWNodGJhcmVyQmVyZWljaC5zdGFydCkge1xuICAgICAgICBwb3NpdGlvbiA9ICdvYmVuJztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hbmhlZnRJbmRleCA+PSB0aGlzLnNpY2h0YmFyZXJCZXJlaWNoLmVuZCkge1xuICAgICAgICBwb3NpdGlvbiA9ICd1bnRlbic7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnZpcnR1YWxTY3JvbGxFbGVtZW50Py5uYXRpdmVFbGVtZW50O1xuICAgIC8vIERpZSBFaW5ibGVuZHVuZyBzb2xsIGRpZSBTY3JvbGxiYXIgbmljaHQgdmVyZGVja2VuXG4gICAgdGhpcy5zY3JvbGxiYXJCcmVpdGUgPSBlbGVtZW50ID8gZWxlbWVudC5vZmZzZXRXaWR0aCAtIGVsZW1lbnQuY2xpZW50V2lkdGggOiAwO1xuICAgIGlmIChwb3NpdGlvbiAhPT0gdGhpcy5hbmhlZnRQb3NpdGlvbikge1xuICAgICAgdGhpcy5hbmhlZnRQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG59XG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48bXJkLXZpcnR1YWwtc2Nyb2xsICpuZ0lmPVwidmlydHVhbFNjcm9sbFwiXG4gIGNsYXNzPVwibXJkLWxpc3QtdmlydHVhbC1zY3JvbGxcIlxuICBbaXRlbXNdPVwiaXRlbXNcIlxuICBbaXRlbVNpemVdPVwiaXRlbVNpemVcIlxuICBbYnVmZmVyXT1cImJ1ZmZlclwiXG4gIFttYXhIZWlnaHRdPVwibWF4SGVpZ2h0XCJcbiAgW3RyYWNrQnldPVwidHJhY2tCeVwiXG4gIFtpdGVtVGVtcGxhdGVdPVwiaXRlbVRlbXBsYXRlPy50ZW1wbGF0ZVJlZlwiXG4gICh2aXNpYmxlUmFuZ2VDaGFuZ2UpPVwidmlzaWJsZVJhbmdlQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXG4gIChzaWNodGJhcmVyQmVyZWljaENoYW5nZSk9XCJzaWNodGJhcmVyQmVyZWljaEdlYWVuZGVydCgkZXZlbnQpXCI+XG48L21yZC12aXJ0dWFsLXNjcm9sbD5cbjxkaXYgKm5nSWY9XCJ2aXJ0dWFsU2Nyb2xsICYmIGFuaGVmdFBvc2l0aW9uXCJcbiAgY2xhc3M9XCJtcmQtbGlzdC1hbmdlaGVmdGV0XCJcbiAgW2NsYXNzLm1yZC1saXN0LWFuZ2VoZWZ0ZXQtdW50ZW5dPVwiYW5oZWZ0UG9zaXRpb24gPT09ICd1bnRlbidcIlxuICBbc3R5bGUuaGVpZ2h0LnB4XT1cImFuaGVmdEhvZWhlXCJcbiAgW3N0eWxlLnJpZ2h0LnB4XT1cInNjcm9sbGJhckJyZWl0ZVwiPlxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbVRlbXBsYXRlPy50ZW1wbGF0ZVJlZjsgY29udGV4dDogeyRpbXBsaWNpdDogYW5nZWhlZnRldCwgaW5kZXg6IGFuaGVmdEluZGV4fVwiPjwvbmctY29udGFpbmVyPlxuPC9kaXY+XG4iXX0=