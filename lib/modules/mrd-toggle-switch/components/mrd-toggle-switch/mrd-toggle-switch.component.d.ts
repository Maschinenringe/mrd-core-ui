import { ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { AccessableFormControl, BaseObject } from 'mrd-core';
import { MrdToggleSwitchState } from '../../common/enum/mrd-toggle-switch-state.enum';
import * as i0 from "@angular/core";
/**
 * Schalter mit zwei Betriebsarten:
 * - Auswahl ueber `state`/`stateChange` (links, neutral, rechts), beide Seiten in `bgColor`
 * - An/Aus ueber `[(checked)]` oder `[mrdFormControl]`: aus = links in `bgNeutralColor`, an = rechts in `bgColor`
 * Inhalt zwischen den Tags wird als klickbare Beschriftung angezeigt.
 */
export declare class MrdToggleSwitchComponent extends BaseObject implements OnInit {
    private cdr;
    MrdToggleSwitchState: typeof MrdToggleSwitchState;
    bgColor: string;
    bgNeutralColor: string;
    knobColor: string;
    knobNeutralColor: string;
    width: string;
    height: string;
    bgDisabledColor: string;
    knobDisabledColor: string;
    disabled: boolean;
    /** Schmale Schiene mit rundem Knopf in voller Hoehe; `height` ist dann der Knopf-Durchmesser */
    slim: boolean;
    /** Nur bei `slim` */
    trackHeight: string;
    /** Nur bei `slim`, z. B. `1px solid #293D4F` oder `none` */
    knobBorder: string;
    /** Position der Beschriftung (Inhalt zwischen den Tags) relativ zum Schalter */
    labelPosition: 'before' | 'after';
    /** Bild im Knopf je Zustand (URL zu jpg/png/svg/...); in der An/Aus-Betriebsart ist links aus und rechts an */
    imageLeft: string;
    imageNeutral: string;
    imageRight: string;
    set state(value: MrdToggleSwitchState);
    get state(): MrdToggleSwitchState;
    private _state;
    /** Schaltet in die An/Aus-Betriebsart; null/undefined gilt als aus */
    set checked(value: boolean);
    get checked(): boolean;
    /** Schaltet in die An/Aus-Betriebsart und uebernimmt Wert und Deaktivierung des Controls */
    set formControl(control: AccessableFormControl);
    get formControl(): AccessableFormControl;
    private _formControl;
    private formularAbo;
    stateChange: EventEmitter<MrdToggleSwitchState>;
    /** Nur bei Bedienung durch den Nutzer, nicht beim Setzen von `checked` oder des Formularwerts */
    checkedChange: EventEmitter<boolean>;
    /** An/Aus-Betriebsart: aus wird in den Neutral-Farben dargestellt statt wie eine Auswahl-Seite */
    binaer: boolean;
    private _config;
    constructor(cdr: ChangeDetectorRef);
    get istDeaktiviert(): boolean;
    get aktuellesBild(): string | undefined;
    ngOnInit(): void;
    toggle(event: Event, state?: MrdToggleSwitchState): void;
    private formularWertUebernehmen;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdToggleSwitchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdToggleSwitchComponent, "mrd-toggle-switch", never, { "bgColor": { "alias": "bgColor"; "required": false; }; "bgNeutralColor": { "alias": "bgNeutralColor"; "required": false; }; "knobColor": { "alias": "knobColor"; "required": false; }; "knobNeutralColor": { "alias": "knobNeutralColor"; "required": false; }; "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "bgDisabledColor": { "alias": "bgDisabledColor"; "required": false; }; "knobDisabledColor": { "alias": "knobDisabledColor"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "slim": { "alias": "slim"; "required": false; }; "trackHeight": { "alias": "trackHeight"; "required": false; }; "knobBorder": { "alias": "knobBorder"; "required": false; }; "labelPosition": { "alias": "labelPosition"; "required": false; }; "imageLeft": { "alias": "imageLeft"; "required": false; }; "imageNeutral": { "alias": "imageNeutral"; "required": false; }; "imageRight": { "alias": "imageRight"; "required": false; }; "state": { "alias": "state"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "formControl": { "alias": "mrdFormControl"; "required": false; }; }, { "stateChange": "stateChange"; "checkedChange": "checkedChange"; }, never, ["*"], false, never>;
    static ngAcceptInputType_bgColor: string;
    static ngAcceptInputType_bgNeutralColor: string;
    static ngAcceptInputType_knobColor: string;
    static ngAcceptInputType_knobNeutralColor: string;
    static ngAcceptInputType_width: string | number;
    static ngAcceptInputType_height: string | number;
    static ngAcceptInputType_bgDisabledColor: string;
    static ngAcceptInputType_knobDisabledColor: string;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_slim: unknown;
    static ngAcceptInputType_trackHeight: string | number;
    static ngAcceptInputType_checked: unknown;
}
