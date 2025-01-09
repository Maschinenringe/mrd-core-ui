import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { AccessableFormControl } from 'mrd-core';
import * as i0 from "@angular/core";
export declare class MrdCheckboxComponent {
    private cdr;
    formControl: AccessableFormControl;
    checked: boolean;
    disabled: boolean;
    checkedChange: EventEmitter<boolean>;
    constructor(cdr: ChangeDetectorRef);
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdCheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdCheckboxComponent, "mrd-checkbox", never, { "formControl": { "alias": "formControl"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "checkedChange": "checkedChange"; }, never, ["*"], false, never>;
    static ngAcceptInputType_checked: unknown;
    static ngAcceptInputType_disabled: unknown;
}
