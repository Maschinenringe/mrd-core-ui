import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnInit, QueryList, TrackByFunction } from '@angular/core';
import { AccessableFormArray, AccessableFormControl, BasePushStrategyObject, ObservableValue } from 'mrd-core';
import { MrdSelectOptionComponent } from '../mrd-select-option/mrd-select-option.component';
import { Observable } from 'rxjs';
import { MrdSelectCustomTriggerComponent } from '../mrd-select-custom-trigger/mrd-select-custom-trigger.component';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { MrdSelectOptionTemplateDirective } from '../../common/directive/mrd-select-option-template.directive';
import { MrdVirtualScrollComponent } from '../../../mrd-virtual-scroll/components/mrd-virtual-scroll/mrd-virtual-scroll.component';
import { MrdVirtualScrollItemSize } from '../../../mrd-virtual-scroll/common/model/mrd-virtual-scroll.model';
import * as i0 from "@angular/core";
import * as i1 from "../../../mrd-virtual-scroll/common/model/mrd-virtual-scroll.model";
export declare class MrdSelectComponent extends BasePushStrategyObject implements OnInit, AfterContentInit, AfterViewInit {
    private elementRef;
    protected cdr: ChangeDetectorRef;
    selectContainer: ElementRef;
    searchSelectionInput: ElementRef;
    options: QueryList<MrdSelectOptionComponent>;
    customTrigger: MrdSelectCustomTriggerComponent;
    optionTemplate: MrdSelectOptionTemplateDirective;
    virtuellesScroll: MrdVirtualScrollComponent;
    private _initialized;
    readonly optionSelectionChanges: Observable<any>;
    formControl: AccessableFormControl;
    formArrayControl: AccessableFormArray<any>;
    set value(value: any);
    get value(): any;
    private _value;
    identifier: string;
    set items(value: any[]);
    get items(): any[];
    private _items;
    /**
     * Rendert nur die sichtbaren Optionen. Die Optionen kommen dann aus `[items]` statt aus `<mrd-select-option>`;
     * Wert ist `item[identifier]`, angezeigt wird `displayWith(item)` bzw. `item[labelKey]` oder ein `<ng-template mrdSelectOption>`.
     */
    virtualScroll: boolean;
    /** Nur mit `virtualScroll` */
    labelKey: string;
    /** Nur mit `virtualScroll`; hat Vorrang vor `labelKey` */
    displayWith: (item: any) => string;
    /** Nur mit `virtualScroll`: Hoehe einer Option in px, fuer alle gleich oder `(item, index) => px` je Option */
    itemSize: MrdVirtualScrollItemSize;
    /** Nur mit `virtualScroll`: maximale Hoehe der Optionsliste in px */
    virtualScrollMaxHeight: number;
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
    showOptions: ObservableValue<boolean>;
    smoothScroll: boolean;
    searchAutofocus: boolean;
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
    optionsVisible: boolean;
    _showNoOptionsOnSearch: boolean;
    standalone: boolean;
    showValue: string;
    searchText: string;
    optionsWidthExceeded: boolean;
    optionsHeightExceeded: boolean;
    private optionChangeSubscription;
    gefilterteItems: any[];
    virtuelleAusgewaehlteItems: any[];
    fokusIndex: number;
    private virtuelleAuswahl;
    private virtuellInitialisiert;
    readonly virtuellerTrackBy: TrackByFunction<any>;
    _positions: ConnectedPosition[];
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    private formControlChanged;
    private formArrayControlChanged;
    private modelChanged;
    private _resetOptions;
    private formArrayAbgleichen;
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
    get istDeaktiviert(): boolean;
    /** null statt -1: ein tabindex von -1 laesst sich per Mausklick weiterhin fokussieren */
    get triggerTabIndex(): number | null;
    onTriggerFocus(): void;
    onTriggerBlur(): void;
    onTriggerKeyDown(event: KeyboardEvent): void;
    chipCloseClicked(value: any): void;
    wertVon(item: any): any;
    labelVon(item: any): string;
    istVirtuellAusgewaehlt(item: any): boolean;
    virtuelleOptionGeklickt(item: any): void;
    virtuellenChipSchliessen(item: any): void;
    /** Nur fuer `multiple` */
    private virtuelleWerteSetzen;
    private ausgewaehlteWerteLesen;
    /** @param rendern Sofort rendern; im Input-Setter nicht noetig, weil die Change Detection ohnehin folgt */
    private virtuelleAnzeigeAktualisieren;
    private virtuellFiltern;
    private virtuelleTasteVerarbeiten;
    get optionsMinWidth(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdSelectComponent, "mrd-select", never, { "formControl": { "alias": "mrdFormControl"; "required": false; }; "formArrayControl": { "alias": "mrdFormArray"; "required": false; }; "value": { "alias": "value"; "required": false; }; "identifier": { "alias": "identifier"; "required": false; }; "items": { "alias": "items"; "required": false; }; "virtualScroll": { "alias": "virtualScroll"; "required": false; }; "labelKey": { "alias": "labelKey"; "required": false; }; "displayWith": { "alias": "displayWith"; "required": false; }; "itemSize": { "alias": "itemSize"; "required": false; }; "virtualScrollMaxHeight": { "alias": "virtualScrollMaxHeight"; "required": false; }; "autoComplete": { "alias": "autoComplete"; "required": false; }; "searchSelection": { "alias": "searchSelection"; "required": false; }; "chipSelection": { "alias": "chipSelection"; "required": false; }; "nullable": { "alias": "nullable"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "closeOnSelect": { "alias": "closeOnSelect"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "chipPrefixIcon": { "alias": "chipPrefixIcon"; "required": false; }; "chipSuffixIcon": { "alias": "chipSuffixIcon"; "required": false; }; "showOptions": { "alias": "showOptions"; "required": false; }; "smoothScroll": { "alias": "smoothScroll"; "required": false; }; "searchAutofocus": { "alias": "searchAutofocus"; "required": false; }; }, { "touched": "touched"; "focused": "focused"; "blurred": "blurred"; "chipClose": "chipClose"; "valueChange": "valueChange"; }, ["customTrigger", "optionTemplate", "options"], ["mrd-select-custom-trigger", "[addButton]", "mrd-select-option"], false, never>;
    static ngAcceptInputType_virtualScroll: unknown;
    static ngAcceptInputType_itemSize: i1.MrdVirtualScrollItemSize | string;
    static ngAcceptInputType_virtualScrollMaxHeight: unknown;
    static ngAcceptInputType_autoComplete: unknown;
    static ngAcceptInputType_searchSelection: unknown;
    static ngAcceptInputType_chipSelection: unknown;
    static ngAcceptInputType_nullable: unknown;
    static ngAcceptInputType_multiple: unknown;
    static ngAcceptInputType_closeOnSelect: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_smoothScroll: unknown;
    static ngAcceptInputType_searchAutofocus: unknown;
}
