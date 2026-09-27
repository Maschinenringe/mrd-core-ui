import { ElementRef, EventEmitter, OnDestroy, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { MrdConfigModel } from '../../../../common/model/config.model';
import * as i0 from "@angular/core";
export declare class MrdSidenavComponent implements OnDestroy {
    private elementRef;
    private renderer;
    set opened(value: boolean);
    get opened(): boolean;
    private _opened;
    /** Beim Wechsel von mobil auf Desktop automatisch oeffnen, damit die Navigation dort nicht verschwunden bleibt */
    autoOpen: boolean;
    width: string;
    maxWidth: string;
    /** Rahmen rechts, nur in der Desktop-Ansicht */
    borderWidth: string;
    borderColor: string;
    openedChange: EventEmitter<boolean>;
    /** Informiert den Container ueber Oeffnen und Schliessen */
    readonly zustandGeaendert: Subject<void>;
    readonly config: MrdConfigModel;
    private mobil;
    constructor(elementRef: ElementRef<HTMLElement>, renderer: Renderer2);
    ngOnDestroy(): void;
    open(): void;
    close(): void;
    toggle(): void;
    /** Wird vom Container gesetzt */
    mobilSetzen(mobil: boolean): void;
    private geoeffnetSetzen;
    private klassenAktualisieren;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdSidenavComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdSidenavComponent, "mrd-sidenav", never, { "opened": { "alias": "opened"; "required": false; }; "autoOpen": { "alias": "autoOpen"; "required": false; }; "width": { "alias": "width"; "required": false; }; "maxWidth": { "alias": "maxWidth"; "required": false; }; "borderWidth": { "alias": "borderWidth"; "required": false; }; "borderColor": { "alias": "borderColor"; "required": false; }; }, { "openedChange": "openedChange"; }, never, ["*"], false, never>;
    static ngAcceptInputType_opened: unknown;
    static ngAcceptInputType_autoOpen: unknown;
    static ngAcceptInputType_width: string | number;
    static ngAcceptInputType_maxWidth: string | number;
    static ngAcceptInputType_borderWidth: string | number;
    static ngAcceptInputType_borderColor: string;
}
