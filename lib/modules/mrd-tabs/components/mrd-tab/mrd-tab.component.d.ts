import { ChangeDetectorRef, OnDestroy, TemplateRef, ViewRef } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class MrdTabComponent implements OnDestroy {
    private cdr;
    readonly tr: TemplateRef<any>;
    _implicitContent: TemplateRef<any>;
    set label(value: string);
    get label(): string;
    private _label;
    /** Gesperrter Tab: Kopf ausgegraut, Klick ohne Wirkung; per Code (`selectedIndex`) bleibt er waehlbar. `*mrdTab="'Label'; disabled: bedingung"` */
    set disabled(value: boolean);
    get disabled(): boolean;
    private _disabled;
    /** Meldet der (OnPush-)Tab-Gruppe Aenderungen an Beschriftung und Sperre, damit der Kopf aktualisiert wird */
    readonly zustandGeaendert: Subject<void>;
    private _embeddedViewRef;
    get content(): ViewRef | null;
    /**
     * Zero based index of the tab
     *
     * @memberof MrdTabComponent
     */
    set index(value: number);
    get index(): number;
    private _index;
    set active(value: boolean);
    get active(): boolean;
    private _active;
    preserveContent: boolean;
    constructor(cdr: ChangeDetectorRef, tr: TemplateRef<any>);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdTabComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MrdTabComponent, "[mrdTab]", never, { "label": { "alias": "mrdTab"; "required": false; }; "disabled": { "alias": "mrdTabDisabled"; "required": false; }; "preserveContent": { "alias": "mrdTabPreserveContent"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_preserveContent: unknown;
}
