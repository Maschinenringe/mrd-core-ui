import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { AccessableFormControl, BaseObject } from 'mrd-core';
import { MrdUploadFormat } from '../../common/model/mrd-upload-format.model';
import * as i0 from "@angular/core";
/**
 * Dateiauswahl per Klick oder Drag & Drop, optional mit vorgeschalteter Formatauswahl.
 * Gemeldet werden nur Dateien, die zum gewaehlten Format passen; abgelehnte kommen ueber `ungueltigeDateien`.
 *
 * `<mrd-upload [formate]="formate" (dateienChange)="dateien = $event" (formatChange)="format = $event"></mrd-upload>`
 */
export declare class MrdUploadComponent<T extends MrdUploadFormat = MrdUploadFormat> extends BaseObject {
    private cdr;
    /** Auswaehlbare Formate; das Array wird nicht veraendert */
    set formate(formate: T[]);
    get formate(): T[];
    private _formate;
    /** Ergaenzt "Alle Dateitypen" als Format */
    set alleDateitypen(wert: boolean);
    get alleDateitypen(): boolean;
    private _alleDateitypen;
    /** Mehrere Dateien zulassen; sonst zaehlt nur die erste */
    mehrfach: boolean;
    iconGroesse: string;
    formatLabel: string;
    hinweisText: string;
    formatFehltText: string;
    buttonText: string;
    keineDateiText: string;
    ungueltigText: string;
    zuruecksetzenText: string;
    readonly dateienChange: EventEmitter<File[]>;
    readonly formatChange: EventEmitter<T | null>;
    readonly ungueltigeDateien: EventEmitter<File[]>;
    /** Eigenes Control je Instanz, damit mehrere Upload-Felder sich nicht gegenseitig die Auswahl ueberschreiben */
    readonly infoFarbe: string;
    readonly formatControl: AccessableFormControl;
    /** Formate samt ergaenztem "Alle Dateitypen" */
    formatListe: T[];
    dateien: File[];
    fehler: string | null;
    ziehen: boolean;
    constructor(cdr: ChangeDetectorRef);
    get format(): T | null;
    get dateinamen(): string;
    dateiAuswaehlen(eingabe: HTMLInputElement): void;
    dateiGewaehlt(event: Event): void;
    ueberBereich(event: DragEvent): void;
    ablegen(event: DragEvent): void;
    zuruecksetzen(event?: Event): void;
    /** Passende Dateien uebernehmen, unpassende melden; ohne passende bleibt die bisherige Auswahl */
    private dateienUebernehmen;
    private formatListeAufbauen;
    /** Wie das `accept`-Attribut: Endungen ohne Gross-/Kleinschreibung, MIME-Typen auch mit `/*`, `*` fuer alle */
    static istErlaubt(datei: File, erlaubt: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdUploadComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdUploadComponent<any>, "mrd-upload", never, { "formate": { "alias": "formate"; "required": false; }; "alleDateitypen": { "alias": "alleDateitypen"; "required": false; }; "mehrfach": { "alias": "mehrfach"; "required": false; }; "iconGroesse": { "alias": "iconGroesse"; "required": false; }; "formatLabel": { "alias": "formatLabel"; "required": false; }; "hinweisText": { "alias": "hinweisText"; "required": false; }; "formatFehltText": { "alias": "formatFehltText"; "required": false; }; "buttonText": { "alias": "buttonText"; "required": false; }; "keineDateiText": { "alias": "keineDateiText"; "required": false; }; "ungueltigText": { "alias": "ungueltigText"; "required": false; }; "zuruecksetzenText": { "alias": "zuruecksetzenText"; "required": false; }; }, { "dateienChange": "dateienChange"; "formatChange": "formatChange"; "ungueltigeDateien": "ungueltigeDateien"; }, never, never, false, never>;
    static ngAcceptInputType_alleDateitypen: unknown;
    static ngAcceptInputType_mehrfach: unknown;
    static ngAcceptInputType_iconGroesse: string | number;
}
