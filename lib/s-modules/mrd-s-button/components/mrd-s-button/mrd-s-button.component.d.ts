import { MrdSButtonSizeType, MrdSButtonType } from './../../../../common/model/config.model';
import { BasePushStrategyObject, ObservableValue } from 'mrd-core';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { SvgStateMap } from '../../../../common/components/mrd-icon-group/mrd-icon-group.component';
import * as i0 from "@angular/core";
/**
 * Dieses Komponente stellt den Mrd-Button zur Verfügung.
 *
 * Der Button kann mittels der entsprechenden Attribute in folgenden Stilen dargestellt werden:
 * - Standard-Button (default)
 * - Icon-Button (Attributname: icon-button)
 * - Raised-Button (Attributname: raised-button)
 * - Outline-Button (Attributname: outline-button)
 * - Flat-Button (Attributname: flat-button)
 * - Fab-Button (Attributname: fab-button)
 * - MiniFab-Button (Attributname: miniFab-button)
 *
 * Weiterhin können die standard Themes (primary, accent, warn) für die Hintergrund- bzw. Textfarbe festgelegt werden (je nach Style).
 *
 * Für weitere Anpassungen siehe die Informationen der einzelnen Attribute oder die Dokumentation.
 *
 * @class MrdSButtonComponent
 * @extends {BasePushStrategyObject}
 * @implements {AfterViewInit}
 */
export declare class MrdSButtonComponent extends BasePushStrategyObject implements OnInit, AfterViewInit, OnDestroy {
    protected cdr: ChangeDetectorRef;
    private renderer;
    elementRef: ElementRef<HTMLElement>;
    /**
     * Referenz auf das Text-Element des Buttons.
     *
     * @type {ElementRef<HTMLElement>}
     * @memberof MrdSButtonComponent
     */
    mrdButtonTextContent?: ElementRef<HTMLElement>;
    /**
     * Referenz auf das Touch-Area-Element des Buttons.
     *
     * @type {ElementRef<HTMLElement>}
     * @memberof MrdSButtonComponent
     */
    buttonTouchArea?: ElementRef<HTMLElement>;
    /**
     * Gibt an, welches Theme der Button hat.
     *
     * @memberof MrdSButtonComponent
     */
    theme?: MrdSButtonType;
    /**
     * Gibt an, ob der Button ein Edit-Button ist.
     *
     * @type {boolean}
     * @memberof MrdSButtonComponent
     */
    editButton: boolean;
    saveButton: boolean;
    cancelButton: boolean;
    closeIconButton: boolean;
    deleteButton: boolean;
    addButton: boolean;
    /**
     * Gibt an, ob der Button ein Toggle-Button ist.
     *
     * Toggle-Buttons sollten immer innerhalb einer Toggle-Button-Group verwendet werden.
     * Standardmäßig haben sie einen weißen Hintergrund und die Textfarbe ist schwarz, außerdem besitzen sie im selektierten Zustand einen Schatten.
     *
     * @type {boolean}
     * @memberof MrdSButtonComponent
     */
    toggle: boolean;
    /**
     * Gibt an, ob der Button, als Toggle-Button, selektiert ist.
     *
     * @type {boolean}
     * @memberof MrdSButtonComponent
     */
    toggleSelected: boolean;
    /**
     * Gibt an, ob der Button deaktiviert ist.
     *
     * @memberof MrdSButtonComponent
     */
    disabled: boolean;
    /**
     * Gibt an, ob der Button deaktiviert ist.
     *
     * @memberof MrdSButtonComponent
     */
    hovered: boolean;
    /**
     * Eine ObservableValue, die übergeben werden kann, um zu bestimmen,
     * ob der Button einen Ladebalken/Ladespinner anzeigen soll.
     *
     * @memberof MrdSButtonComponent
     */
    loading?: ObservableValue<boolean>;
    /**
     * Ein boolean, der bestimmt, ob der Button einen Ladebalken/Ladespinner anzeigen soll.
     *
     * @type {boolean}
     * @memberof MrdSButtonComponent
     */
    isLoading: boolean;
    /**
     * Eine ObservableValue, die übergeben werden kann, um den Fortschritt des Ladebalkens/Ladespinners zu bestimmen.
     *
     * @type {ObservableValue<number>}
     * @memberof MrdSButtonComponent
     */
    loadingProgress?: ObservableValue<number>;
    /**
     * Gibt an, ob der Button-Text verschwindet, wenn er zu lang ist und ausgepunktet werden würde.
     *
     * @type {boolean}
     * @memberof MrdSButtonComponent
     */
    collapse: boolean;
    private _collapseTo;
    /**
     * Gibt an, ob der Button einen Tooltip anzeigen soll.
     *
     * Der Tooltip-Text wird standardmäßig aus dem Inhalt des Buttons ohne durch [mrd-icon] gekennzeichnete Icons generiert.
     *
     * @type {boolean}
     * @memberof MrdSButtonComponent
     */
    showTooltip: boolean;
    /**
     * Der Text des Tooltips.
     *
     * @type {string}
     * @memberof MrdSButtonComponent
     */
    tooltipText?: string;
    /**
     * Gibt an, ob der Tooltip nur angezeigt werden soll, wenn der Button-Text ausgepunktet wird.
     *
     * @type {boolean}
     * @memberof MrdSButtonComponent
     */
    set tooltipIfTruncated(value: boolean);
    get tooltipIfTruncated(): boolean;
    private _tooltipIfTruncated;
    /**
     * Gibt an, ob der Tooltip nur angezeigt werden soll, wenn der Button collabiert ist.
     *
     * @type {boolean}
     * @memberof MrdSButtonComponent
     */
    tooltipIfCollapsed: boolean;
    /**
     * Gibt an, ob Icon des Buttons die volle Größe des Buttons einnehmen soll.
     *
     * @type {boolean}
     * @memberof MrdSButtonComponent
     */
    size: MrdSButtonSizeType;
    /**
     * Der Wert des Buttons als Toggle-Button.
     *
     * @type {any}
     * @memberof MrdSButtonComponent
     */
    value?: any;
    iconStateMap: SvgStateMap | undefined;
    iconEnd: boolean;
    /**
     * Das Klick-Event durch den Nutzer.
     *
     * @type {EventEmitter<Event>}
     * @memberof MrdSButtonComponent
     */
    click: EventEmitter<Event>;
    /**
     * Die Konfiguration des Mrd-Buttons.
     *
     * @private
     * @type {MrdConfigModel}
     * @memberof MrdSButtonComponent
     */
    private _config;
    private mouseEnterListener?;
    private mouseLeaveListener?;
    private uncollapsedAppearance?;
    private buttonConfig?;
    private themeConfig?;
    private sizeConfig?;
    textColor?: string;
    hoverTextColor?: string;
    disabledTextColor?: string;
    activeTextColor?: string;
    bgColor?: string;
    hoverBgColor?: string;
    disabledBgColor?: string;
    activeBgColor?: string;
    border?: string;
    hoverBorder?: string;
    disabledBorder?: string;
    activeBorder?: string;
    progressColor?: string;
    hoverProgressColor?: string;
    disabledProgressColor?: string;
    activeProgressColor?: string;
    toggleUnselectedColor?: string;
    borderRadius?: string;
    minHeight?: string;
    fontSize?: string;
    fontFamily?: string;
    fontWeight?: string;
    diameter?: string;
    iconSize?: string;
    iconSizeNumber?: number;
    textIconGap?: string;
    padding?: string;
    isIconButton: boolean;
    isFullIcon: boolean;
    isCollapsed: boolean;
    isHovered: boolean;
    isSpecificButton: boolean;
    isTouchHovered: boolean;
    isTouchActive: boolean;
    buttonText: string;
    defaultButtonText: string;
    constructor(cdr: ChangeDetectorRef, renderer: Renderer2, elementRef: ElementRef<HTMLElement>);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    updateStyle(): void;
    /**
     * Callback, wenn sich der Collabs-Status des Buttons ändert.
     *
     * @param isCollapsed Gibt an, ob der Button kollabiert ist.
     */
    buttonCollapsed(isCollapsed: boolean): void;
    onClick(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdSButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdSButtonComponent, "mrd-s-button", never, { "theme": { "alias": "theme"; "required": false; }; "editButton": { "alias": "edit-button"; "required": false; }; "saveButton": { "alias": "save-button"; "required": false; }; "cancelButton": { "alias": "cancel-button"; "required": false; }; "closeIconButton": { "alias": "close-icon-button"; "required": false; }; "deleteButton": { "alias": "delete-button"; "required": false; }; "addButton": { "alias": "add-button"; "required": false; }; "toggle": { "alias": "toggle-button"; "required": false; }; "toggleSelected": { "alias": "selected"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "hovered": { "alias": "hovered"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "isLoading": { "alias": "isLoading"; "required": false; }; "loadingProgress": { "alias": "loadingProgress"; "required": false; }; "showTooltip": { "alias": "tooltip"; "required": false; }; "tooltipText": { "alias": "tooltipText"; "required": false; }; "tooltipIfTruncated": { "alias": "tooltipIfTruncated"; "required": false; }; "tooltipIfCollapsed": { "alias": "tooltipIfCollapsed"; "required": false; }; "size": { "alias": "size"; "required": false; }; "value": { "alias": "value"; "required": false; }; "iconStateMap": { "alias": "iconStateMap"; "required": false; }; "iconEnd": { "alias": "iconEnd"; "required": false; }; }, { "click": "click"; }, never, ["mrd-icon:not([icon-end]), [mrd-icon]:not([icon-end])", ":not([mrd-icon]):not(mrd-icon)", "mrd-icon[icon-end], [mrd-icon][icon-end]"], false, never>;
    static ngAcceptInputType_editButton: unknown;
    static ngAcceptInputType_saveButton: unknown;
    static ngAcceptInputType_cancelButton: unknown;
    static ngAcceptInputType_closeIconButton: unknown;
    static ngAcceptInputType_deleteButton: unknown;
    static ngAcceptInputType_addButton: unknown;
    static ngAcceptInputType_toggle: unknown;
    static ngAcceptInputType_toggleSelected: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_hovered: unknown;
    static ngAcceptInputType_isLoading: unknown;
    static ngAcceptInputType_showTooltip: unknown;
    static ngAcceptInputType_tooltipIfTruncated: unknown;
    static ngAcceptInputType_tooltipIfCollapsed: unknown;
    static ngAcceptInputType_iconEnd: unknown;
}
