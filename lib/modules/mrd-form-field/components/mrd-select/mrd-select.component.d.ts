import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnInit, QueryList } from '@angular/core';
import { AccessableFormArray, AccessableFormControl, BasePushStrategyObject, ObservableValue } from 'mrd-core';
import { MrdSelectOptionComponent } from '../mrd-select-option/mrd-select-option.component';
import { Observable } from 'rxjs';
import { MrdSelectCustomTriggerComponent } from '../mrd-select-custom-trigger/mrd-select-custom-trigger.component';
import { ConnectedPosition } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export declare class MrdSelectComponent extends BasePushStrategyObject implements OnInit, AfterContentInit, AfterViewInit {
    private elementRef;
    protected cdr: ChangeDetectorRef;
    selectContainer: ElementRef;
    options: QueryList<MrdSelectOptionComponent>;
    customTrigger: MrdSelectCustomTriggerComponent;
    private _initialized;
    readonly optionSelectionChanges: Observable<any>;
    formControl: AccessableFormControl;
    formArrayControl: AccessableFormArray<any>;
    set value(value: any);
    get value(): any;
    private _value;
    identifier: string;
    items: any[];
    autoComplete: boolean;
    searchSelection: boolean;
    chipSelection: boolean;
    nullable: boolean;
    set multiple(value: boolean);
    get multiple(): boolean;
    private _multiple;
    closeOnSelect: boolean;
    disabled: boolean;
    chipPrefixIcon: string;
    chipSuffixIcon: string;
    touched: EventEmitter<void>;
    focused: EventEmitter<void>;
    blurred: EventEmitter<void>;
    /**
     * Event that is emitted when the chip close button is clicked.
     * @type {EventEmitter<void>}
     * @memberof MrdSelectComponent
     * @returns The value of the chip that was closed.
     */
    chipClose: EventEmitter<void>;
    valueChange: EventEmitter<any>;
    showOptions: ObservableValue<boolean>;
    optionsVisible: boolean;
    _showNoOptionsOnSearch: boolean;
    standalone: boolean;
    showValue: string;
    searchText: string;
    optionsWidthExceeded: boolean;
    optionsHeightExceeded: boolean;
    private optionChangeSubscription;
    _positions: ConnectedPosition[];
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    private formControlChanged;
    private formArrayControlChanged;
    private modelChanged;
    private _resetOptions;
    removeSelected(): void;
    chipClosed(option: MrdSelectOptionComponent): void;
    autoCompleteInput(event: InputEvent): void;
    searchInput(event: InputEvent): void;
    onKeyDown(event: KeyboardEvent): void;
    triggerClicked(): void;
    get selectedOptions(): MrdSelectOptionComponent[];
    set showNoOptionsOnSearch(value: boolean);
    get showNoOptionsOnSearch(): boolean;
    focus(event: FocusEvent): void;
    blur(event: FocusEvent): void;
    chipCloseClicked(value: any): void;
    get optionsMinWidth(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdSelectComponent, "mrd-select", never, { "formControl": { "alias": "mrdFormControl"; "required": false; }; "formArrayControl": { "alias": "mrdFormArray"; "required": false; }; "value": { "alias": "value"; "required": false; }; "identifier": { "alias": "identifier"; "required": false; }; "items": { "alias": "items"; "required": false; }; "autoComplete": { "alias": "autoComplete"; "required": false; }; "searchSelection": { "alias": "searchSelection"; "required": false; }; "chipSelection": { "alias": "chipSelection"; "required": false; }; "nullable": { "alias": "nullable"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "closeOnSelect": { "alias": "closeOnSelect"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "chipPrefixIcon": { "alias": "chipPrefixIcon"; "required": false; }; "chipSuffixIcon": { "alias": "chipSuffixIcon"; "required": false; }; }, { "touched": "touched"; "focused": "focused"; "blurred": "blurred"; "chipClose": "chipClose"; "valueChange": "valueChange"; }, ["customTrigger", "options"], ["mrd-select-custom-trigger", "[addButton]", "mrd-select-option"], false, never>;
    static ngAcceptInputType_autoComplete: unknown;
    static ngAcceptInputType_searchSelection: unknown;
    static ngAcceptInputType_chipSelection: unknown;
    static ngAcceptInputType_nullable: unknown;
    static ngAcceptInputType_multiple: unknown;
    static ngAcceptInputType_closeOnSelect: unknown;
    static ngAcceptInputType_disabled: unknown;
}
