import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import { AccessableFormControl } from 'mrd-core';
import * as i0 from "@angular/core";
export declare class MrdCheckboxComponent implements AfterViewInit, AfterViewChecked {
    private cdr;
    label: ElementRef<HTMLElement>;
    formControl: AccessableFormControl;
    rounded: boolean;
    color: string;
    colorHover: string;
    colorChecked: string;
    colorCheckedHover: string;
    bgColor: string;
    bgColorHover: string;
    bgColorChecked: string;
    bgColorCheckedHover: string;
    border: string;
    borderHover: string;
    borderChecked: string;
    borderCheckedHover: string;
    checked: boolean;
    disabled: boolean;
    customIcons: boolean;
    customHoverIcons: boolean;
    checkboxSize: string;
    checkboxHeight: string;
    checkboxWidth: string;
    singleLine: boolean;
    fitContent: boolean;
    ellipsis: boolean;
    tooltip: boolean;
    tooltipIfTruncated: boolean;
    set tooltipText(value: string);
    get tooltipText(): string;
    private _tooltipText;
    private customTooltipText;
    tooltipPosition: 'top' | 'bottom' | 'left' | 'right';
    tooltipDisabled: boolean;
    checkedChange: EventEmitter<boolean>;
    private config;
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdCheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdCheckboxComponent, "mrd-checkbox", never, { "formControl": { "alias": "formControl"; "required": false; }; "rounded": { "alias": "rounded"; "required": false; }; "color": { "alias": "color"; "required": false; }; "colorHover": { "alias": "colorHover"; "required": false; }; "colorChecked": { "alias": "colorChecked"; "required": false; }; "colorCheckedHover": { "alias": "colorCheckedHover"; "required": false; }; "bgColor": { "alias": "bgColor"; "required": false; }; "bgColorHover": { "alias": "bgColorHover"; "required": false; }; "bgColorChecked": { "alias": "bgColorChecked"; "required": false; }; "bgColorCheckedHover": { "alias": "bgColorCheckedHover"; "required": false; }; "border": { "alias": "border"; "required": false; }; "borderHover": { "alias": "borderHover"; "required": false; }; "borderChecked": { "alias": "borderChecked"; "required": false; }; "borderCheckedHover": { "alias": "borderCheckedHover"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "customIcons": { "alias": "customIcons"; "required": false; }; "customHoverIcons": { "alias": "customHoverIcons"; "required": false; }; "checkboxSize": { "alias": "checkboxSize"; "required": false; }; "checkboxHeight": { "alias": "checkboxHeight"; "required": false; }; "checkboxWidth": { "alias": "checkboxWidth"; "required": false; }; "singleLine": { "alias": "single-line"; "required": false; }; "fitContent": { "alias": "fit-content"; "required": false; }; "ellipsis": { "alias": "ellipsis"; "required": false; }; "tooltip": { "alias": "tooltip"; "required": false; }; "tooltipIfTruncated": { "alias": "tooltipIfTruncated"; "required": false; }; "tooltipText": { "alias": "tooltipText"; "required": false; }; "tooltipPosition": { "alias": "tooltipPosition"; "required": false; }; "tooltipDisabled": { "alias": "tooltipDisabled"; "required": false; }; }, { "checkedChange": "checkedChange"; }, never, ["[icon-checked]", "[icon-unchecked]", "[icon-checked-hover]", "[icon-unchecked-hover]", "*"], false, never>;
    static ngAcceptInputType_rounded: unknown;
    static ngAcceptInputType_color: string;
    static ngAcceptInputType_colorHover: string;
    static ngAcceptInputType_colorChecked: string;
    static ngAcceptInputType_colorCheckedHover: string;
    static ngAcceptInputType_bgColor: string;
    static ngAcceptInputType_bgColorHover: string;
    static ngAcceptInputType_bgColorChecked: string;
    static ngAcceptInputType_bgColorCheckedHover: string;
    static ngAcceptInputType_checked: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_customIcons: unknown;
    static ngAcceptInputType_customHoverIcons: unknown;
    static ngAcceptInputType_checkboxSize: string | number;
    static ngAcceptInputType_checkboxHeight: string | number;
    static ngAcceptInputType_checkboxWidth: string | number;
    static ngAcceptInputType_singleLine: unknown;
    static ngAcceptInputType_fitContent: unknown;
    static ngAcceptInputType_ellipsis: unknown;
    static ngAcceptInputType_tooltip: unknown;
    static ngAcceptInputType_tooltipIfTruncated: unknown;
    static ngAcceptInputType_tooltipDisabled: unknown;
}
