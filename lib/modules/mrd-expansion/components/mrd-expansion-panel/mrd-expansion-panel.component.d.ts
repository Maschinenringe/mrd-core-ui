import { ChangeDetectorRef, EventEmitter, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { MrdConfigModel } from '../../../../common/model/config.model';
import { MrdAccordionBase, MrdAccordionPanel, MrdExpansionTogglePosition } from '../../common/model/mrd-accordion.model';
import { MrdExpansionPanelContentDirective } from '../../common/directive/mrd-expansion-panel-content.directive';
import * as i0 from "@angular/core";
/**
 * Aufklappbarer Bereich mit `mrd-expansion-panel-header` als Kopf. Einzeln nutzbar oder innerhalb von `mrd-accordion`.
 * Inhalt als `ng-content` (sofort erzeugt) oder als `<ng-template mrdExpansionPanelContent>` (erst beim ersten Aufklappen).
 */
export declare class MrdExpansionPanelComponent implements MrdAccordionPanel, OnDestroy {
    private cdr;
    private accordion;
    set expanded(value: boolean);
    get expanded(): boolean;
    private _expanded;
    set disabled(value: boolean);
    get disabled(): boolean;
    private _disabled;
    hideToggle: boolean;
    togglePosition: MrdExpansionTogglePosition;
    headerHeight: string;
    headerPadding: string;
    headerBackground: string;
    headerColor: string;
    background: string;
    /** Nur bei Bedienung ueber den Kopf oder open()/close()/toggle(), nicht beim Setzen von `expanded` */
    expandedChange: EventEmitter<boolean>;
    opened: EventEmitter<void>;
    closed: EventEmitter<void>;
    lazyInhalt: MrdExpansionPanelContentDirective;
    /** Informiert den Kopf (OnPush) ueber Aenderungen */
    readonly zustandGeaendert: Subject<void>;
    readonly config: MrdConfigModel;
    readonly id: string;
    /** Lazy-Inhalt bleibt nach dem ersten Aufklappen erhalten, damit Zustand (z. B. Formulare) nicht verloren geht */
    inhaltErzeugt: boolean;
    constructor(cdr: ChangeDetectorRef, accordion: MrdAccordionBase);
    ngOnDestroy(): void;
    open(): void;
    close(): void;
    toggle(): void;
    get headerId(): string;
    get inhaltId(): string;
    private geoeffnetSetzen;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdExpansionPanelComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdExpansionPanelComponent, "mrd-expansion-panel", never, { "expanded": { "alias": "expanded"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "hideToggle": { "alias": "hideToggle"; "required": false; }; "togglePosition": { "alias": "togglePosition"; "required": false; }; "headerHeight": { "alias": "headerHeight"; "required": false; }; "headerPadding": { "alias": "headerPadding"; "required": false; }; "headerBackground": { "alias": "headerBackground"; "required": false; }; "headerColor": { "alias": "headerColor"; "required": false; }; "background": { "alias": "background"; "required": false; }; }, { "expandedChange": "expandedChange"; "opened": "opened"; "closed": "closed"; }, ["lazyInhalt"], ["mrd-expansion-panel-header", "*"], false, never>;
    static ngAcceptInputType_expanded: unknown;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_hideToggle: unknown;
    static ngAcceptInputType_headerHeight: string | number;
    static ngAcceptInputType_headerBackground: string;
    static ngAcceptInputType_headerColor: string;
    static ngAcceptInputType_background: string;
}
