import { EventEmitter, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { MrdSortDirection, MrdSortierung } from '../model/mrd-sort.model';
import * as i0 from "@angular/core";
/**
 * Haelt die Sortierung fuer alle `mrd-sort-header` darunter (Tabellenkopf, Div-Zeile o. Ae.).
 * Der Zustand kommt von aussen (`[mrdSort]`), z. B. aus einem Cookie; `mrdSortChange` meldet nur Klicks.
 *
 * `<tr [mrdSort]="sortierung" (mrdSortChange)="sortieren($event)"><th mrd-sort-header="datum">Datum</th></tr>`
 */
export declare class MrdSortDirective implements OnDestroy {
    /** Ohne Wert (`mrdSort` als reines Attribut) ist nichts sortiert */
    set sortierung(value: MrdSortierung | '' | null);
    /** Richtung beim ersten Klick auf eine Spalte; je Spalte ueber `start` am Header ueberschreibbar */
    start: Exclude<MrdSortDirection, ''>;
    /** Dritter Klick hebt die Sortierung auf; ohne bleibt es beim Wechsel zwischen auf- und absteigend */
    clear: boolean;
    set disabled(value: boolean);
    get disabled(): boolean;
    private _disabled;
    readonly mrdSortChange: EventEmitter<MrdSortierung>;
    active: string;
    direction: MrdSortDirection;
    /** Informiert die Header (OnPush) ueber Aenderungen */
    readonly zustandGeaendert: Subject<void>;
    ngOnDestroy(): void;
    /** Wird vom Header beim Klick aufgerufen */
    sortieren(id: string, start?: Exclude<MrdSortDirection, ''>): void;
    private naechsteRichtung;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdSortDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdSortDirective, "[mrdSort]", ["mrdSort"], { "sortierung": { "alias": "mrdSort"; "required": false; }; "start": { "alias": "mrdSortStart"; "required": false; }; "clear": { "alias": "mrdSortClear"; "required": false; }; "disabled": { "alias": "mrdSortDisabled"; "required": false; }; }, { "mrdSortChange": "mrdSortChange"; }, never, never, false, never>;
    static ngAcceptInputType_clear: unknown;
    static ngAcceptInputType_disabled: unknown;
}
