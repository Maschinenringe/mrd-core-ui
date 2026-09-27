import { TemplateRef } from '@angular/core';
import { MrdVirtualScrollItemContext } from '../../../mrd-virtual-scroll/common/model/mrd-virtual-scroll.model';
import * as i0 from "@angular/core";
/**
 * Inhalt einer Option im `mrd-select` mit `virtualScroll`; ohne Template wird das Label angezeigt:
 * `<ng-template mrdSelectOption let-item>{{item.bezeichnung}} ({{item.nummer}})</ng-template>`
 */
export declare class MrdSelectOptionTemplateDirective<T = any> {
    templateRef: TemplateRef<MrdVirtualScrollItemContext<T>>;
    /** Nur fuer die Typisierung des Template-Kontexts: `[mrdSelectOption]="items"` */
    mrdSelectOption: T[] | '';
    constructor(templateRef: TemplateRef<MrdVirtualScrollItemContext<T>>);
    static ngTemplateContextGuard<T>(dir: MrdSelectOptionTemplateDirective<T>, ctx: unknown): ctx is MrdVirtualScrollItemContext<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdSelectOptionTemplateDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdSelectOptionTemplateDirective<any>, "ng-template[mrdSelectOption]", never, { "mrdSelectOption": { "alias": "mrdSelectOption"; "required": false; }; }, {}, never, never, false, never>;
}
