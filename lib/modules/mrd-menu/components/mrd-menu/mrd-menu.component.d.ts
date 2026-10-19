import { EventEmitter, OnDestroy, QueryList, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { MrdMenuItemComponent } from '../mrd-menu-item/mrd-menu-item.component';
import { MrdMenuElternteil, MrdMenuPositionX, MrdMenuPositionY, MrdMenuSchliessGrund } from '../../common/model/mrd-menu.model';
import * as i0 from "@angular/core";
/**
 * Aufklappmenue, das ueber `[mrdMenuTriggerFor]` geoeffnet wird. Der Inhalt erscheint erst beim Oeffnen im Overlay.
 *
 * `<mrd-s-button [mrdMenuTriggerFor]="menu">...</mrd-s-button>`
 * `<mrd-menu #menu="mrdMenu"><button mrd-menu-item icon="download">Exportieren</button></mrd-menu>`
 */
export declare class MrdMenuComponent implements MrdMenuElternteil, OnDestroy {
    panelTemplate: TemplateRef<unknown>;
    eintraege: QueryList<MrdMenuItemComponent>;
    xPosition: MrdMenuPositionX;
    yPosition: MrdMenuPositionY;
    /** Zusaetzliche CSS-Klasse(n) am Panel, z. B. fuer eine Mindestbreite */
    panelClass: string;
    readonly opened: EventEmitter<void>;
    readonly closed: EventEmitter<void>;
    /** Der Trigger entscheidet ueber das Schliessen, weil ihm das Overlay gehoert */
    readonly schliessenAngefordert: Subject<MrdMenuSchliessGrund>;
    ngOnDestroy(): void;
    eintragGewaehlt(): void;
    fokusErsterEintrag(): void;
    tasteGedrueckt(event: KeyboardEvent): void;
    private aktiveEintraege;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdMenuComponent, "mrd-menu", ["mrdMenu"], { "xPosition": { "alias": "xPosition"; "required": false; }; "yPosition": { "alias": "yPosition"; "required": false; }; "panelClass": { "alias": "panelClass"; "required": false; }; }, { "opened": "opened"; "closed": "closed"; }, ["eintraege"], ["*"], false, never>;
}
