import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Inhalt eines Panels, der erst beim ersten Aufklappen erzeugt wird (danach bleibt er bestehen):
 * `<ng-template mrdExpansionPanelContent>...</ng-template>`
 */
export declare class MrdExpansionPanelContentDirective {
    templateRef: TemplateRef<unknown>;
    constructor(templateRef: TemplateRef<unknown>);
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdExpansionPanelContentDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdExpansionPanelContentDirective, "ng-template[mrdExpansionPanelContent]", never, {}, {}, never, never, false, never>;
}
