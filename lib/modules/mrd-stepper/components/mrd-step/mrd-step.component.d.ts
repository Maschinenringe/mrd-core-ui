import { ChangeDetectorRef, TemplateRef, ViewRef } from '@angular/core';
import { AccessableFormControl } from 'mrd-core';
import * as i0 from "@angular/core";
export declare class MrdStepComponent {
    private cdr;
    readonly tr: TemplateRef<any>;
    _implicitContent: TemplateRef<any>;
    set label(value: string);
    get label(): string;
    private _label;
    mrdStepControl: AccessableFormControl;
    private _embeddedViewRef;
    get content(): ViewRef | null;
    /**
     * Zero based index of the step
     *
     * @memberof MrdStepComponent
     */
    set index(value: number);
    get index(): number;
    private _index;
    set active(value: boolean);
    get active(): boolean;
    private _active;
    get valid(): boolean;
    get touched(): boolean;
    private _touched;
    constructor(cdr: ChangeDetectorRef, tr: TemplateRef<any>);
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdStepComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdStepComponent, "[mrdStep]", never, { "label": { "alias": "mrdStep"; "required": false; }; "mrdStepControl": { "alias": "mrdStepControl"; "required": false; }; }, {}, never, never, false, never>;
}
