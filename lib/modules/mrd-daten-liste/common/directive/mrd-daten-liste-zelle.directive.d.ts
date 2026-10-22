import { TemplateRef } from '@angular/core';
import { MrdDatenListeZelleKontext } from '../model/mrd-daten-liste.model';
import * as i0 from "@angular/core";
/**
 * Eigene Darstellung einer Spalte, z. B. ein Favoriten-Stern:
 * `<ng-template mrdDatenListeZelle="favorit" let-eintrag let-ausgewaehlt="ausgewaehlt">...</ng-template>`
 */
export declare class MrdDatenListeZelleDirective<T = any> {
    templateRef: TemplateRef<MrdDatenListeZelleKontext<T>>;
    /** `schluessel` der Spalte */
    schluessel: string;
    constructor(templateRef: TemplateRef<MrdDatenListeZelleKontext<T>>);
    static ngTemplateContextGuard<T>(dir: MrdDatenListeZelleDirective<T>, ctx: unknown): ctx is MrdDatenListeZelleKontext<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdDatenListeZelleDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdDatenListeZelleDirective<any>, "ng-template[mrdDatenListeZelle]", never, { "schluessel": { "alias": "mrdDatenListeZelle"; "required": true; }; }, {}, never, never, false, never>;
}
