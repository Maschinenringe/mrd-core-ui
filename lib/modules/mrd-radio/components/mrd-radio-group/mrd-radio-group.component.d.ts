import { ChangeDetectorRef, EventEmitter, QueryList } from '@angular/core';
import { AccessableFormControl, BaseObject } from 'mrd-core';
import { Observable } from 'rxjs';
import { MrdRadioGroupKontext } from '../../common/mrd-radio-group.token';
import { MrdRadioButtonComponent } from '../mrd-radio-button/mrd-radio-button.component';
import * as i0 from "@angular/core";
/**
 * Gruppe von Radio-Buttons: genau ein Wert ist gewaehlt. Bindung ueber `[(value)]` oder `[mrdFormControl]`.
 *
 * ```html
 * <mrd-radio-group [(value)]="sortierung" vertical>
 *   <mrd-radio-button value="datum">Datum</mrd-radio-button>
 *   <mrd-radio-button value="schlag">Schlagname</mrd-radio-button>
 * </mrd-radio-group>
 * ```
 */
export declare class MrdRadioGroupComponent extends BaseObject implements MrdRadioGroupKontext {
    private cdr;
    buttons: QueryList<MrdRadioButtonComponent>;
    /** Wert und Deaktivierung des Controls werden laufend uebernommen, auch nach setValue(), reset(), disable() und enable() */
    set formControl(control: AccessableFormControl);
    get formControl(): AccessableFormControl;
    private _formControl;
    private formularAbo;
    set value(value: unknown);
    get value(): unknown;
    private _value;
    set disabled(value: boolean);
    get disabled(): boolean;
    private _disabled;
    /** Buttons untereinander statt nebeneinander */
    vertical: boolean;
    /** Nur bei Auswahl durch den Benutzer, nicht beim Setzen von aussen */
    valueChange: EventEmitter<unknown>;
    private readonly geaendert$;
    readonly geaendert: Observable<void>;
    constructor(cdr: ChangeDetectorRef);
    auswaehlen(value: unknown): void;
    weiter(von: unknown, richtung: 1 | -1): void;
    private wertSetzen;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdRadioGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdRadioGroupComponent, "mrd-radio-group", never, { "formControl": { "alias": "mrdFormControl"; "required": false; }; "value": { "alias": "value"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "vertical": { "alias": "vertical"; "required": false; }; }, { "valueChange": "valueChange"; }, ["buttons"], ["*"], false, never>;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_vertical: unknown;
}
