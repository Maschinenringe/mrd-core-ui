import { TemplateRef } from '@angular/core';
import { MrdVirtualScrollItemContext } from '../../../mrd-virtual-scroll/common/model/mrd-virtual-scroll.model';
import * as i0 from "@angular/core";
/**
 * Zeilen-Template einer `mrd-list` mit `virtualScroll`:
 * `<ng-template mrdListItem let-item let-i="index"><mrd-list-item>...</mrd-list-item></ng-template>`
 */
export declare class MrdListItemTemplateDirective<T = any> {
    templateRef: TemplateRef<MrdVirtualScrollItemContext<T>>;
    /** Nur fuer die Typisierung des Template-Kontexts: `[mrdListItem]="items"` */
    mrdListItem: T[] | '';
    constructor(templateRef: TemplateRef<MrdVirtualScrollItemContext<T>>);
    static ngTemplateContextGuard<T>(dir: MrdListItemTemplateDirective<T>, ctx: unknown): ctx is MrdVirtualScrollItemContext<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdListItemTemplateDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdListItemTemplateDirective<any>, "ng-template[mrdListItem]", never, { "mrdListItem": { "alias": "mrdListItem"; "required": false; }; }, {}, never, never, false, never>;
}
