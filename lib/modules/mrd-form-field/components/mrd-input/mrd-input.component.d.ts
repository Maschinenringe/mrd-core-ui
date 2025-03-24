import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import { AccessableFormControl, BaseObject } from 'mrd-core';
import * as i0 from "@angular/core";
export declare class MrdInputComponent extends BaseObject implements AfterViewInit {
    private cdr;
    private static readonly DEFAULT_MAX_LENGTH;
    private static readonly DEFAULT_MIN_ROWS;
    private static readonly DEFAULT_MAX_ROWS;
    private static readonly DEFAULT_LINE_HEIGHT;
    private static readonly DATE_REGEX;
    private static readonly DATE_REGEX_INPUT;
    baseInputElement: ElementRef<HTMLInputElement>;
    textAreaElement: ElementRef<HTMLTextAreaElement>;
    dateInputElement: ElementRef<HTMLInputElement>;
    formControl: AccessableFormControl;
    placeholder: string;
    value: string;
    maxLength: number;
    minRows: number;
    maxRows: number;
    lineHeight: number;
    disabled: boolean;
    readonly: boolean;
    required: boolean;
    textarea: boolean;
    date: boolean;
    customDateToggle: boolean;
    centered: boolean;
    textEnd: boolean;
    datePickerToggle: HTMLElement;
    maxDigits: number;
    touched: EventEmitter<void>;
    focused: EventEmitter<void>;
    blurred: EventEmitter<void>;
    valueChange: EventEmitter<string>;
    inputChange: EventEmitter<string>;
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    private formControlChanged;
    input(event: InputEvent): void;
    private calculateTextAreaHeight;
    inputClicked(event: MouseEvent): void;
    focus(event: FocusEvent): void;
    blur(event: FocusEvent): void;
    toggleClicked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdInputComponent, "mrd-input", never, { "formControl": { "alias": "mrdFormControl"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "value": { "alias": "value"; "required": false; }; "maxLength": { "alias": "maxLength"; "required": false; }; "minRows": { "alias": "minRows"; "required": false; }; "maxRows": { "alias": "maxRows"; "required": false; }; "lineHeight": { "alias": "lineHeight"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; "textarea": { "alias": "textarea"; "required": false; }; "date": { "alias": "date"; "required": false; }; "customDateToggle": { "alias": "customDateToggle"; "required": false; }; "centered": { "alias": "text-centered"; "required": false; }; "textEnd": { "alias": "text-end"; "required": false; }; "datePickerToggle": { "alias": "datePickerToggle"; "required": false; }; "maxDigits": { "alias": "maxDigits"; "required": false; }; }, { "touched": "touched"; "focused": "focused"; "blurred": "blurred"; "valueChange": "valueChange"; "inputChange": "inputChange"; }, never, never, false, never>;
    static ngAcceptInputType_maxLength: unknown;
    static ngAcceptInputType_minRows: unknown;
    static ngAcceptInputType_maxRows: unknown;
    static ngAcceptInputType_lineHeight: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_readonly: unknown;
    static ngAcceptInputType_required: unknown;
    static ngAcceptInputType_textarea: unknown;
    static ngAcceptInputType_date: unknown;
    static ngAcceptInputType_customDateToggle: unknown;
    static ngAcceptInputType_centered: unknown;
    static ngAcceptInputType_textEnd: unknown;
}
export declare class MrdDatePickerToggle implements AfterViewInit {
    private elementRef;
    mrdDatePickerToggle: MrdInputComponent;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    onClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdDatePickerToggle, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdDatePickerToggle, "[mrdDatePickerToggle]", never, { "mrdDatePickerToggle": { "alias": "mrdDatePickerToggle"; "required": false; }; }, {}, never, never, false, never>;
}
