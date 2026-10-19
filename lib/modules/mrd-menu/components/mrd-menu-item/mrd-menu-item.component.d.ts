import { ElementRef } from '@angular/core';
import { MrdIconSymbol } from '../../../../common/service/mrd-icon-symbol-registry.service';
import { MrdMenuElternteil } from '../../common/model/mrd-menu.model';
import * as i0 from "@angular/core";
/**
 * Eintrag in einem `mrd-menu`, am besten auf einem `button`. Ein Klick schliesst das Menue.
 * Das Icon steht vor dem Text: `icon` fuer Symbole der IconFactory, `svgIcon` fuer registrierte Icons.
 */
export declare class MrdMenuItemComponent {
    private elementRef;
    private menu;
    icon: MrdIconSymbol;
    svgIcon: string;
    disabled: boolean;
    readonly istButton: boolean;
    constructor(elementRef: ElementRef<HTMLElement>, menu: MrdMenuElternteil);
    geklickt(): void;
    fokussieren(): void;
    hatFokus(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdMenuItemComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdMenuItemComponent, "[mrd-menu-item]", never, { "icon": { "alias": "icon"; "required": false; }; "svgIcon": { "alias": "svgIcon"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, ["*"], false, never>;
    static ngAcceptInputType_disabled: unknown;
}
