import { ChangeDetectorRef, TemplateRef, ViewRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MrdTabComponent {
    private cdr;
    readonly tr: TemplateRef<any>;
    _implicitContent: TemplateRef<any>;
    set label(value: string);
    get label(): string;
    private _label;
    private _embeddedViewRef;
    get content(): ViewRef | null;
    /**
     * Zero based index of the tab
     *
     * @memberof MrdTabComponent
     */
    set index(value: number);
    get index(): number;
    private _index;
    set active(value: boolean);
    get active(): boolean;
    private _active;
    preserveContent: boolean;
    constructor(cdr: ChangeDetectorRef, tr: TemplateRef<any>);
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdTabComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdTabComponent, "[mrdTab]", never, { "label": { "alias": "mrdTab"; "required": false; }; "preserveContent": { "alias": "mrdTabPreserveContent"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_preserveContent: unknown;
}
