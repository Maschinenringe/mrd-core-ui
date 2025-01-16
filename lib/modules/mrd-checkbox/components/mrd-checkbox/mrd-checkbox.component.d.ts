import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { AccessableFormControl } from 'mrd-core';
import * as i0 from "@angular/core";
export declare class MrdCheckboxComponent {
    private cdr;
    formControl: AccessableFormControl;
    checked: boolean;
    disabled: boolean;
    customIcons: boolean;
    checkboxHeight: string;
    checkboxWidth: string;
    checkedChange: EventEmitter<boolean>;
    constructor(cdr: ChangeDetectorRef);
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdCheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdCheckboxComponent, "mrd-checkbox", never, { "formControl": { "alias": "formControl"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "customIcons": { "alias": "customIcons"; "required": false; }; "checkboxHeight": { "alias": "checkboxHeight"; "required": false; }; "checkboxWidth": { "alias": "checkboxWidth"; "required": false; }; }, { "checkedChange": "checkedChange"; }, never, ["[icon-checked]", "[icon-unchecked]", "*"], false, never>;
    static ngAcceptInputType_checked: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_customIcons: unknown;
    static ngAcceptInputType_checkboxHeight: string | number;
    static ngAcceptInputType_checkboxWidth: string | number;
}
