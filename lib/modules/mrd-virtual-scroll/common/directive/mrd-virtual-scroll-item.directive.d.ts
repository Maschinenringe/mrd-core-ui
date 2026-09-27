import { TemplateRef } from '@angular/core';
import { MrdVirtualScrollItemContext } from '../model/mrd-virtual-scroll.model';
import * as i0 from "@angular/core";
/**
 * Markiert das Zeilen-Template einer virtuellen Liste:
 * `<ng-template mrdVirtualScrollItem let-item let-i="index">...</ng-template>`
 */
export declare class MrdVirtualScrollItemDirective<T = any> {
    templateRef: TemplateRef<MrdVirtualScrollItemContext<T>>;
    /** Nur fuer die Typisierung des Template-Kontexts: `[mrdVirtualScrollItem]="items"` */
    mrdVirtualScrollItem: T[] | '';
    constructor(templateRef: TemplateRef<MrdVirtualScrollItemContext<T>>);
    static ngTemplateContextGuard<T>(dir: MrdVirtualScrollItemDirective<T>, ctx: unknown): ctx is MrdVirtualScrollItemContext<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdVirtualScrollItemDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdVirtualScrollItemDirective<any>, "ng-template[mrdVirtualScrollItem]", never, { "mrdVirtualScrollItem": { "alias": "mrdVirtualScrollItem"; "required": false; }; }, {}, never, never, false, never>;
}
