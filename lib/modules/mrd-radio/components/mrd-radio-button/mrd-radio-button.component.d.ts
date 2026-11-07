import { AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { BaseObject } from 'mrd-core';
import { MrdRadioGroupKontext } from '../../common/mrd-radio-group.token';
import * as i0 from "@angular/core";
/** Ein Wert einer `mrd-radio-group`; die Beschriftung ist der Inhalt. */
export declare class MrdRadioButtonComponent extends BaseObject implements AfterViewInit {
    gruppe: MrdRadioGroupKontext;
    private cdr;
    private kreis;
    value: unknown;
    set disabled(value: boolean);
    get disabled(): boolean;
    private _disabled;
    constructor(gruppe: MrdRadioGroupKontext, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    get ausgewaehlt(): boolean;
    /** Per Tab erreichbar ist nur der gewaehlte Button (bzw. jeder, solange keiner gewaehlt ist); die Pfeiltasten wechseln. */
    get tabIndex(): number;
    geklickt(): void;
    taste(event: KeyboardEvent): void;
    fokussieren(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdRadioButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdRadioButtonComponent, "mrd-radio-button", never, { "value": { "alias": "value"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, ["*"], false, never>;
    static ngAcceptInputType_disabled: unknown;
}
