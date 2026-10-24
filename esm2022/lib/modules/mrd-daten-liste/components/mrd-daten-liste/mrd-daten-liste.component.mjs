import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, Output, ViewChild, booleanAttribute, numberAttribute } from '@angular/core';
import { BaseObject, SubscriptionHandler } from 'mrd-core';
import { Subject, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { MrdColor } from '../../../../common/enum/color.enum';
import { MrdListComponent } from '../../../mrd-list/components/mrd-list/mrd-list.component';
import { MrdDatenListeZelleDirective } from '../../common/directive/mrd-daten-liste-zelle.directive';
import { MrdDatenListeUtil } from '../../common/util/mrd-daten-liste.util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../mrd-button/components/mrd-button/mrd-button.component";
import * as i3 from "../../../mrd-button-toggle/components/mrd-button-toggle-group/mrd-button-toggle-group.component";
import * as i4 from "../../../mrd-form-field/components/mrd-form-field/mrd-form-field.component";
import * as i5 from "../../../mrd-form-field/components/mrd-input/mrd-input.component";
import * as i6 from "../../../mrd-form-field/components/mrd-select/mrd-select.component";
import * as i7 from "../../../mrd-form-field/components/mrd-select-option/mrd-select-option.component";
import * as i8 from "../../../mrd-form-field/components/mrd-label/mrd-label.component";
import * as i9 from "../../../mrd-form-field/components/mrd-suffix/mrd-suffix.component";
import * as i10 from "../../../mrd-icon/components/mrd-icon.component";
import * as i11 from "../../../mrd-list/components/mrd-list/mrd-list.component";
import * as i12 from "../../../mrd-list/components/mrd-list-item/mrd-list-item.component";
import * as i13 from "../../../mrd-list/common/directive/mrd-list-item-template.directive";
import * as i14 from "../../../mrd-progress-spinner/components/mrd-progress-spinner/mrd-progress-spinner.component";
import * as i15 from "../../../mrd-sort/common/directive/mrd-sort.directive";
import * as i16 from "../../../mrd-sort/components/mrd-sort-header/mrd-sort-header.component";
import * as i17 from "../../../mrd-tooltip/common/directive/tool-tip-renderer/tool-tip-renderer.directive";
function MrdDatenListeComponent_mrd_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-form-field", 7)(1, "mrd-label", 8);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mrd-input", 9);
    i0.ɵɵlistener("valueChange", function MrdDatenListeComponent_mrd_form_field_1_Template_mrd_input_valueChange_3_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.suchtextGeaendert($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mrd-suffix");
    i0.ɵɵelement(5, "mrd-icon", 10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.suchPlatzhalter);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r0.suchtext);
} }
function MrdDatenListeComponent_div_2_mrd_form_field_1_mrd_select_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mrd-select-option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const betrieb_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", betrieb_r11.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(betrieb_r11.name);
} }
function MrdDatenListeComponent_div_2_mrd_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-form-field", 14)(1, "mrd-label", 15);
    i0.ɵɵtext(2, "Betriebe");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mrd-select", 16);
    i0.ɵɵlistener("valueChange", function MrdDatenListeComponent_div_2_mrd_form_field_1_Template_mrd_select_valueChange_3_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12.betriebFilterGeaendert($event)); });
    i0.ɵɵelementStart(4, "mrd-select-option", 17);
    i0.ɵɵtext(5, "Alle");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, MrdDatenListeComponent_div_2_mrd_form_field_1_mrd_select_option_6_Template, 2, 2, "mrd-select-option", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", ctx_r8.betriebAuswahl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r8.ALLE_BETRIEBE);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r8.betriebe);
} }
function MrdDatenListeComponent_div_2_ng_container_2_mrd_select_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mrd-select-option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r15 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r15.schluessel);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r15.bezeichnung);
} }
function MrdDatenListeComponent_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mrd-form-field", 19)(2, "mrd-label", 15);
    i0.ɵɵtext(3, "Sortierung");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mrd-select", 9);
    i0.ɵɵlistener("valueChange", function MrdDatenListeComponent_div_2_ng_container_2_Template_mrd_select_valueChange_4_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r16.sortierSchluesselGeaendert($event)); });
    i0.ɵɵtemplate(5, MrdDatenListeComponent_div_2_ng_container_2_mrd_select_option_5_Template, 2, 2, "mrd-select-option", 20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "mrd-button-toggle-group", 21);
    i0.ɵɵlistener("valueChange", function MrdDatenListeComponent_div_2_ng_container_2_Template_mrd_button_toggle_group_valueChange_6_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r18 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r18.richtungGeaendert($event)); });
    i0.ɵɵelementStart(7, "mrd-button", 22);
    i0.ɵɵelement(8, "mrd-icon", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "mrd-button", 24);
    i0.ɵɵelement(10, "mrd-icon", 25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r9.sortierSchluessel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r9.sortierOptionen);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r9.richtung)("disabled", !ctx_r9.istSortiert);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("customToggleSelectedTextColor", ctx_r9.MrdColor.WEISS);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("customToggleSelectedTextColor", ctx_r9.MrdColor.WEISS);
} }
function MrdDatenListeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, MrdDatenListeComponent_div_2_mrd_form_field_1_Template, 7, 3, "mrd-form-field", 12);
    i0.ɵɵtemplate(2, MrdDatenListeComponent_div_2_ng_container_2_Template, 11, 6, "ng-container", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.betriebFilterSichtbar);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.sortierAuswahl);
} }
function MrdDatenListeComponent_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const spalte_r19 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵstyleProp("width", spalte_r19.breite, "px");
    i0.ɵɵclassProp("mrd-daten-liste-spalte-flex", spalte_r19.flex)("mrd-daten-liste-mitte", spalte_r19.ausrichtung === "mitte")("mrd-daten-liste-rechts", spalte_r19.ausrichtung === "rechts");
    i0.ɵɵproperty("mrd-sort-header", spalte_r19.schluessel)("arrowPosition", spalte_r19.ausrichtung === "rechts" ? "before" : "after");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", spalte_r19.titel, " ");
} }
function MrdDatenListeComponent_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const spalte_r19 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵstyleProp("width", spalte_r19.breite, "px");
    i0.ɵɵclassProp("mrd-daten-liste-spalte-flex", spalte_r19.flex)("mrd-daten-liste-mitte", spalte_r19.ausrichtung === "mitte")("mrd-daten-liste-rechts", spalte_r19.ausrichtung === "rechts");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", spalte_r19.titel, " ");
} }
function MrdDatenListeComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MrdDatenListeComponent_ng_container_5_div_1_Template, 2, 11, "div", 27);
    i0.ɵɵtemplate(2, MrdDatenListeComponent_ng_container_5_ng_template_2_Template, 2, 9, "ng-template", null, 28, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const spalte_r19 = ctx.$implicit;
    const _r21 = i0.ɵɵreference(3);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.kopfSortierung && spalte_r19.sortierbar)("ngIfElse", _r21);
} }
function MrdDatenListeComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵelement(1, "mrd-progress-spinner");
    i0.ɵɵelementEnd();
} }
function MrdDatenListeComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.leerText);
} }
function MrdDatenListeComponent_mrd_list_8_ng_template_1_div_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0, a1) { return { $implicit: a0, ausgewaehlt: a1 }; };
function MrdDatenListeComponent_mrd_list_8_ng_template_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MrdDatenListeComponent_mrd_list_8_ng_template_1_div_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 38);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const template_r32 = ctx.ngIf;
    const eintrag_r26 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r29 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", template_r32)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c0, eintrag_r26, ctx_r29.istAusgewaehlt(eintrag_r26)));
} }
function MrdDatenListeComponent_mrd_list_8_ng_template_1_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const spalte_r28 = i0.ɵɵnextContext().$implicit;
    const eintrag_r26 = i0.ɵɵnextContext().$implicit;
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("line-clamp", 2)("mrdToolTip", ctx_r31.text(spalte_r28, eintrag_r26));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r31.text(spalte_r28, eintrag_r26));
} }
function MrdDatenListeComponent_mrd_list_8_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtemplate(1, MrdDatenListeComponent_mrd_list_8_ng_template_1_div_1_ng_container_1_Template, 2, 5, "ng-container", 36);
    i0.ɵɵtemplate(2, MrdDatenListeComponent_mrd_list_8_ng_template_1_div_1_ng_template_2_Template, 2, 3, "ng-template", null, 37, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const spalte_r28 = ctx.$implicit;
    const _r30 = i0.ɵɵreference(3);
    const ctx_r27 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("width", spalte_r28.breite, "px");
    i0.ɵɵclassProp("mrd-daten-liste-spalte-flex", spalte_r28.flex)("mrd-daten-liste-mitte", spalte_r28.ausrichtung === "mitte")("mrd-daten-liste-rechts", spalte_r28.ausrichtung === "rechts");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r27.zelle(spalte_r28.schluessel))("ngIfElse", _r30);
} }
function MrdDatenListeComponent_mrd_list_8_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-list-item", 34);
    i0.ɵɵlistener("click", function MrdDatenListeComponent_mrd_list_8_ng_template_1_Template_mrd_list_item_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r38); const eintrag_r26 = restoredCtx.$implicit; const ctx_r37 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r37.auswahl.emit(eintrag_r26)); });
    i0.ɵɵtemplate(1, MrdDatenListeComponent_mrd_list_8_ng_template_1_div_1_Template, 4, 10, "div", 35);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const eintrag_r26 = ctx.$implicit;
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("mrd-daten-liste-inaktiv", ctx_r25.istInaktiv(eintrag_r26));
    i0.ɵɵproperty("selected", ctx_r25.istAusgewaehlt(eintrag_r26));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r25.spalten);
} }
function MrdDatenListeComponent_mrd_list_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mrd-list", 32);
    i0.ɵɵtemplate(1, MrdDatenListeComponent_mrd_list_8_ng_template_1_Template, 2, 4, "ng-template", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("mrd-daten-liste-leer", ctx_r5.angezeigt.length === 0);
    i0.ɵɵproperty("items", ctx_r5.angezeigt)("itemSize", ctx_r5.zeilenhoehe)("trackBy", ctx_r5.trackBy)("angeheftet", ctx_r5.ausgewaehlt);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("mrdListItem", ctx_r5.angezeigt);
} }
const _c1 = [[["", "mrdDatenListeFilter", ""]], [["", "mrdDatenListeAktionen", ""]]];
const _c2 = ["[mrdDatenListeFilter]", "[mrdDatenListeAktionen]"];
/**
 * Liste mit Spalten fuer Stammdaten-Seiten: oben Suche, Betriebs-Filter, Sortierung und eigene Filter (`[mrdDatenListeFilter]`),
 * in der Mitte Spaltenkoepfe und virtuelle Liste, unten eigene Aktionen (`[mrdDatenListeAktionen]`), dort auch der
 * Schalter `<mrd-daten-liste-inaktiv-schalter>`.
 * Die Breite ergibt sich aus Spalten und Aktionen; in einer mobilen `mrd-sidenav` nimmt die Liste die volle Breite ein.
 * `eintraege` kommen in der Standardsortierung; jede Sortierung laesst sich wieder darauf zuruecksetzen.
 */
export class MrdDatenListeComponent extends BaseObject {
    cdr;
    static STANDARD = '__standard';
    static BETRIEB = '__betrieb';
    /** Option "Alle" im Betriebs-Filter; steht fuer einen leeren Filter */
    static ALLE_BETRIEBE = '__alle';
    ALLE_BETRIEBE = MrdDatenListeComponent.ALLE_BETRIEBE;
    MrdColor = MrdColor;
    set zellen(value) {
        this.zellenTemplates = new Map((value?.toArray() ?? []).map((zelle) => [zelle.schluessel, zelle.templateRef]));
        this.cdr.markForCheck();
    }
    liste;
    /** In der Standardsortierung, z. B. direkt aus dem Store */
    eintraege = [];
    spalten = [];
    identifier = 'id';
    /** Ausgewaehlter Eintrag; bleibt sichtbar (angeheftet), auch wenn er herausgescrollt ist */
    ausgewaehlt = null;
    zeilenhoehe = 56;
    suche = true;
    suchPlatzhalter = 'Durchsuchen';
    /** Ohne Angabe werden die Werte aller Spalten durchsucht */
    suchfelder;
    /** Kuerzere Suchtexte filtern nicht */
    suchMindestlaenge = 1;
    suchVerzoegerung = 300;
    /** Sortieren per Klick auf die Spaltenkoepfe (`sortierbar`); der dritte Klick stellt die Standardsortierung wieder her */
    kopfSortierung = false;
    /** Sortieren per Select (sortierbare Spalten, bei mehreren Betrieben auch "Betrieb") und Richtungs-Schalter */
    sortierAuswahl = false;
    /** Leer oder ohne Richtung: Standardsortierung */
    sortierung = null;
    /** Kennzeichnet inaktive Eintraege; nur damit erscheint `<mrd-daten-liste-inaktiv-schalter>` */
    inaktivPruefung;
    inaktiveAusblenden = false;
    /** Ab zwei Betrieben erscheint der Betriebs-Filter */
    betriebe = [];
    /** Eintraege ohne Betrieb (betriebsuebergreifend) bleiben bei jedem Betriebs-Filter sichtbar */
    betriebSchluessel = 'idBetrieb';
    /** Leer: alle Betriebe */
    betriebFilter = [];
    laedt = false;
    leerText = 'Keine Einträge gefunden';
    /** Volle Breite statt Breite aus den Spalten (mobil in einer `mrd-sidenav` automatisch) */
    volleBreite = false;
    /** Klick auf eine Zeile; ob sie ausgewaehlt wird, entscheidet der Aufrufer ueber `ausgewaehlt` */
    auswahl = new EventEmitter();
    sortierungChange = new EventEmitter();
    inaktiveAusblendenChange = new EventEmitter();
    betriebFilterChange = new EventEmitter();
    angezeigt = [];
    /** Wert des Betriebs-Selects; ohne Filter steht dort "Alle" (stabil, damit das Select nicht bei jedem Durchlauf neu setzt) */
    betriebAuswahl = [MrdDatenListeComponent.ALLE_BETRIEBE];
    suchtext = '';
    sortierOptionen = [];
    trackBy = (_, eintrag) => this.idVon(eintrag);
    zellenTemplates = new Map();
    wirksamerSuchtext = '';
    suchtext$ = new Subject();
    constructor(cdr) {
        super();
        this.cdr = cdr;
        this.watch(this.suchtext$.pipe(debounce(() => timer(this.suchVerzoegerung))), new SubscriptionHandler((text) => {
            this.wirksamerSuchtext = text.length >= this.suchMindestlaenge ? text : '';
            this.aktualisieren();
            this.cdr.markForCheck();
        }));
    }
    ngOnChanges(changes) {
        if (changes['spalten'] || changes['betriebe']) {
            this.sortierOptionenBerechnen();
        }
        if (changes['betriebFilter']) {
            this.betriebAuswahlSetzen();
        }
        this.aktualisieren();
        if (changes['ausgewaehlt']?.currentValue) {
            // Nach dem Rendern, damit die virtuelle Liste ihre Hoehe kennt
            Promise.resolve().then(() => this.zurAuswahlScrollen());
        }
    }
    get betriebFilterSichtbar() {
        return (this.betriebe?.length ?? 0) > 1;
    }
    get sortierSchluessel() {
        return this.istSortiert ? this.sortierung.active : MrdDatenListeComponent.STANDARD;
    }
    get absteigend() {
        return this.istSortiert && this.sortierung.direction === 'desc';
    }
    get richtung() {
        return this.istSortiert ? this.sortierung.direction : null;
    }
    get istSortiert() {
        return !!this.sortierung?.active && !!this.sortierung?.direction;
    }
    /** Summe der Spaltenbreiten; die Liste selbst ergaenzt Innenabstand und Scrollbar */
    get spaltenBreite() {
        return this.spalten.reduce((summe, spalte) => summe + spalte.breite, 0);
    }
    zelle(schluessel) {
        return this.zellenTemplates.get(schluessel);
    }
    text(spalte, eintrag) {
        return MrdDatenListeUtil.alsText(MrdDatenListeUtil.wertVon(spalte, eintrag));
    }
    istAusgewaehlt(eintrag) {
        return this.ausgewaehlt !== null && this.ausgewaehlt !== undefined && this.idVon(eintrag) === this.idVon(this.ausgewaehlt);
    }
    istInaktiv(eintrag) {
        return !!this.inaktivPruefung && this.inaktivPruefung(eintrag);
    }
    suchtextGeaendert(text) {
        this.suchtext = text ?? '';
        this.suchtext$.next(this.suchtext.trim());
    }
    sortierungSetzen(sortierung) {
        this.sortierung = sortierung?.direction ? sortierung : null;
        this.aktualisieren();
        this.sortierungChange.emit(this.sortierung);
    }
    sortierSchluesselGeaendert(schluessel) {
        const standard = !schluessel || schluessel === MrdDatenListeComponent.STANDARD;
        this.sortierungSetzen(standard ? null : { active: schluessel, direction: this.absteigend ? 'desc' : 'asc' });
    }
    richtungGeaendert(richtung) {
        if (this.istSortiert && (richtung === 'asc' || richtung === 'desc') && richtung !== this.richtung) {
            this.sortierungSetzen({ active: this.sortierung.active, direction: richtung });
        }
    }
    /** Auch fuer `<mrd-daten-liste-inaktiv-schalter>`, der ausserhalb dieser View liegt */
    inaktiveAusblendenGeaendert(ausblenden) {
        this.inaktiveAusblenden = ausblenden;
        this.aktualisieren();
        this.cdr.markForCheck();
        this.inaktiveAusblendenChange.emit(ausblenden);
    }
    /**
     * "Alle" schliesst die einzelnen Betriebe aus und umgekehrt: Wird "Alle" neu angehakt, faellt der Filter weg;
     * wird ein Betrieb angehakt, verschwindet "Alle". Ohne Betrieb steht wieder "Alle" da.
     */
    betriebFilterGeaendert(werte) {
        const alleNeu = (werte ?? []).includes(MrdDatenListeComponent.ALLE_BETRIEBE) &&
            !this.betriebAuswahl.includes(MrdDatenListeComponent.ALLE_BETRIEBE);
        this.betriebFilter = alleNeu ? [] : (werte ?? []).filter((wert) => wert !== MrdDatenListeComponent.ALLE_BETRIEBE);
        this.betriebAuswahlSetzen();
        this.aktualisieren();
        this.cdr.markForCheck();
        this.betriebFilterChange.emit(this.betriebFilter);
    }
    zurAuswahlScrollen() {
        const index = this.angezeigt.findIndex((eintrag) => this.istAusgewaehlt(eintrag));
        if (index >= 0) {
            this.liste?.scrollToIndex(index, 'nearest');
        }
    }
    aktualisieren() {
        let eintraege = this.eintraege ?? [];
        if (this.inaktiveAusblenden && this.inaktivPruefung) {
            // Die Auswahl bleibt sichtbar, auch wenn sie gerade inaktiv gesetzt wurde
            eintraege = eintraege.filter((eintrag) => !this.inaktivPruefung(eintrag) || this.istAusgewaehlt(eintrag));
        }
        if (this.betriebFilterSichtbar && this.betriebFilter?.length) {
            eintraege = eintraege.filter((eintrag) => {
                const idBetrieb = eintrag[this.betriebSchluessel];
                return idBetrieb === null || idBetrieb === undefined || this.betriebFilter.includes(idBetrieb);
            });
        }
        eintraege = MrdDatenListeUtil.suchen(eintraege, this.wirksamerSuchtext, this.suchfelder ?? this.spalten.map((spalte) => (eintrag) => MrdDatenListeUtil.wertVon(spalte, eintrag)));
        if (this.istSortiert) {
            eintraege = MrdDatenListeUtil.sortieren(eintraege, this.sortierwert(this.sortierung.active), this.sortierung.direction);
        }
        this.angezeigt = eintraege;
    }
    betriebAuswahlSetzen() {
        this.betriebAuswahl = this.betriebFilter?.length ? [...this.betriebFilter] : [MrdDatenListeComponent.ALLE_BETRIEBE];
    }
    sortierOptionenBerechnen() {
        const optionen = [{ schluessel: MrdDatenListeComponent.STANDARD, bezeichnung: 'Standard' }];
        (this.spalten ?? []).filter((spalte) => spalte.sortierbar)
            .forEach((spalte) => optionen.push({ schluessel: spalte.schluessel, bezeichnung: spalte.titel }));
        if (this.betriebFilterSichtbar) {
            optionen.push({ schluessel: MrdDatenListeComponent.BETRIEB, bezeichnung: 'Betrieb' });
        }
        this.sortierOptionen = optionen;
    }
    sortierwert(schluessel) {
        if (schluessel === MrdDatenListeComponent.BETRIEB) {
            return (eintrag) => this.betriebe.find((betrieb) => betrieb.id === eintrag[this.betriebSchluessel])?.name;
        }
        const spalte = this.spalten.find((s) => s.schluessel === schluessel);
        return spalte ? (eintrag) => MrdDatenListeUtil.wertVon(spalte, eintrag) : () => null;
    }
    idVon(eintrag) {
        return eintrag?.[this.identifier];
    }
    /** @nocollapse */ static ɵfac = function MrdDatenListeComponent_Factory(t) { return new (t || MrdDatenListeComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdDatenListeComponent, selectors: [["mrd-daten-liste"]], contentQueries: function MrdDatenListeComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, MrdDatenListeZelleDirective, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.zellen = _t);
        } }, viewQuery: function MrdDatenListeComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(MrdListComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.liste = _t.first);
        } }, hostVars: 2, hostBindings: function MrdDatenListeComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("mrd-daten-liste-volle-breite", ctx.volleBreite);
        } }, inputs: { eintraege: "eintraege", spalten: "spalten", identifier: "identifier", ausgewaehlt: "ausgewaehlt", zeilenhoehe: ["zeilenhoehe", "zeilenhoehe", numberAttribute], suche: ["suche", "suche", booleanAttribute], suchPlatzhalter: "suchPlatzhalter", suchfelder: "suchfelder", suchMindestlaenge: ["suchMindestlaenge", "suchMindestlaenge", numberAttribute], suchVerzoegerung: ["suchVerzoegerung", "suchVerzoegerung", numberAttribute], kopfSortierung: ["kopfSortierung", "kopfSortierung", booleanAttribute], sortierAuswahl: ["sortierAuswahl", "sortierAuswahl", booleanAttribute], sortierung: "sortierung", inaktivPruefung: "inaktivPruefung", inaktiveAusblenden: ["inaktiveAusblenden", "inaktiveAusblenden", booleanAttribute], betriebe: "betriebe", betriebSchluessel: "betriebSchluessel", betriebFilter: "betriebFilter", laedt: ["laedt", "laedt", booleanAttribute], leerText: "leerText", volleBreite: ["volleBreite", "volleBreite", booleanAttribute] }, outputs: { auswahl: "auswahl", sortierungChange: "sortierungChange", inaktiveAusblendenChange: "inaktiveAusblendenChange", betriebFilterChange: "betriebFilterChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 10, vars: 8, consts: [[1, "mrd-daten-liste-kopfbereich"], ["newFill", "", "small", "", "class", "mrd-daten-liste-suche", 4, "ngIf"], ["class", "mrd-daten-liste-auswahlzeile", 4, "ngIf"], ["mrdSortClear", "", 1, "mrd-daten-liste-spaltenkoepfe", 3, "mrdSort", "mrdSortDisabled", "mrdSortChange"], [4, "ngFor", "ngForOf"], ["class", "mrd-daten-liste-hinweis", 4, "ngIf"], ["class", "mrd-daten-liste-liste", "divider", "", "selectable", "", "virtualScroll", "", 3, "mrd-daten-liste-leer", "items", "itemSize", "trackBy", "angeheftet", 4, "ngIf"], ["newFill", "", "small", "", 1, "mrd-daten-liste-suche"], ["float", "never"], [3, "value", "valueChange"], ["size", "32", "icon", "suche"], [1, "mrd-daten-liste-auswahlzeile"], ["newFill", "", "small", "", "class", "mrd-daten-liste-betriebe", 4, "ngIf"], [4, "ngIf"], ["newFill", "", "small", "", 1, "mrd-daten-liste-betriebe"], ["float", "always"], ["multiple", "", 3, "value", "valueChange"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["newFill", "", "small", "", 1, "mrd-daten-liste-sortierung"], ["noCheckbox", "", 3, "value", 4, "ngFor", "ngForOf"], ["simple", "", "primary", "", "borderRadius", "6", 1, "mrd-daten-liste-richtung", 3, "value", "disabled", "valueChange"], ["toggle-button", "", "iconSize", "1.5em", "value", "asc", "tooltip", "", "tooltipText", "Aufsteigend", 3, "customToggleSelectedTextColor"], ["svgIcon", "mrd:pfeil-up"], ["toggle-button", "", "iconSize", "1.5em", "value", "desc", "tooltip", "", "tooltipText", "Absteigend", 3, "customToggleSelectedTextColor"], ["svgIcon", "mrd:pfeil-down"], ["noCheckbox", "", 3, "value"], ["class", "mrd-daten-liste-spalte", 3, "mrd-sort-header", "arrowPosition", "mrd-daten-liste-spalte-flex", "width", "mrd-daten-liste-mitte", "mrd-daten-liste-rechts", 4, "ngIf", "ngIfElse"], ["ohneSortierung", ""], [1, "mrd-daten-liste-spalte", 3, "mrd-sort-header", "arrowPosition"], [1, "mrd-daten-liste-spalte"], [1, "mrd-daten-liste-hinweis"], ["divider", "", "selectable", "", "virtualScroll", "", 1, "mrd-daten-liste-liste", 3, "items", "itemSize", "trackBy", "angeheftet"], [3, "mrdListItem"], [3, "selected", "click"], ["class", "mrd-daten-liste-spalte", 3, "mrd-daten-liste-spalte-flex", "width", "mrd-daten-liste-mitte", "mrd-daten-liste-rechts", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["standardZelle", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["showIfTruncated", "", 1, "mrd-daten-liste-text", 3, "line-clamp", "mrdToolTip"]], template: function MrdDatenListeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, MrdDatenListeComponent_mrd_form_field_1_Template, 6, 2, "mrd-form-field", 1);
            i0.ɵɵtemplate(2, MrdDatenListeComponent_div_2_Template, 3, 2, "div", 2);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵlistener("mrdSortChange", function MrdDatenListeComponent_Template_div_mrdSortChange_4_listener($event) { return ctx.sortierungSetzen($event); });
            i0.ɵɵtemplate(5, MrdDatenListeComponent_ng_container_5_Template, 4, 2, "ng-container", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, MrdDatenListeComponent_div_6_Template, 2, 0, "div", 5);
            i0.ɵɵtemplate(7, MrdDatenListeComponent_div_7_Template, 2, 1, "div", 5);
            i0.ɵɵtemplate(8, MrdDatenListeComponent_mrd_list_8_Template, 2, 7, "mrd-list", 6);
            i0.ɵɵprojection(9, 1);
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.suche);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.betriebFilterSichtbar || ctx.sortierAuswahl);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("mrdSort", ctx.kopfSortierung ? ctx.sortierung : null)("mrdSortDisabled", !ctx.kopfSortierung);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.spalten);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.laedt);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.laedt && ctx.angezeigt.length === 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.laedt);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i2.MrdButtonComponent, i3.MrdButtonToggleGroupComponent, i4.MrdFormFieldComponent, i5.MrdInputComponent, i6.MrdSelectComponent, i7.MrdSelectOptionComponent, i8.MrdLabelComponent, i9.MrdSuffixComponent, i10.MrdIconComponent, i11.MrdListComponent, i12.MrdListItemComponent, i13.MrdListItemTemplateDirective, i14.MrdProgressSpinnerComponent, i15.MrdSortDirective, i16.MrdSortHeaderComponent, i17.ToolTipRendererDirective], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;box-sizing:border-box;height:100%;min-height:0;width:-moz-max-content;width:max-content;max-width:100%}.mrd-daten-liste-volle-breite[_nghost-%COMP%], .mrd-sidenav-mobile[_nghost-%COMP%], .mrd-sidenav-mobile   [_nghost-%COMP%]{width:100%}.mrd-daten-liste-kopfbereich[_ngcontent-%COMP%], .mrd-daten-liste-liste[_ngcontent-%COMP%], .mrd-daten-liste-hinweis[_ngcontent-%COMP%], [_nghost-%COMP%]     [mrdDatenListeFilter]{box-sizing:border-box;width:0;min-width:100%}[_nghost-%COMP%]     [mrdDatenListeAktionen]{box-sizing:border-box;min-width:100%}.mrd-daten-liste-kopfbereich[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;padding:8px 16px}.mrd-daten-liste-kopfbereich[_ngcontent-%COMP%]:empty{display:none}.mrd-daten-liste-suche[_ngcontent-%COMP%]{width:100%}.mrd-daten-liste-auswahlzeile[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:8px}.mrd-daten-liste-betriebe[_ngcontent-%COMP%], .mrd-daten-liste-sortierung[_ngcontent-%COMP%]{flex:1 1 0;min-width:0}.mrd-daten-liste-richtung[_ngcontent-%COMP%]{flex:0 0 80px}.mrd-daten-liste-richtung[_ngcontent-%COMP%]     mrd-button .mrd-button-container mrd-icon{margin-right:0}.mrd-daten-liste-spaltenkoepfe[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;flex:0 0 auto;box-sizing:border-box;height:40px;padding:0 16px;overflow:hidden;scrollbar-gutter:stable;background-color:#65b32e;color:#fff;border-bottom:1px solid #FFFFFF;font-size:16px}.mrd-daten-liste-spalte[_ngcontent-%COMP%]{display:flex;align-items:center;flex:0 0 auto;box-sizing:border-box;min-width:0;padding-right:8px;overflow:hidden}.mrd-daten-liste-spalte.mrd-daten-liste-spalte-flex[_ngcontent-%COMP%]{flex:1 0 auto}.mrd-daten-liste-spalte.mrd-daten-liste-mitte[_ngcontent-%COMP%]{justify-content:center}.mrd-daten-liste-spalte.mrd-daten-liste-rechts[_ngcontent-%COMP%]{justify-content:flex-end}.mrd-daten-liste-spalte[_ngcontent-%COMP%]:last-child{padding-right:0}.mrd-daten-liste-text[_ngcontent-%COMP%]{overflow-wrap:anywhere}.mrd-daten-liste-liste[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0}.mrd-daten-liste-liste.mrd-daten-liste-leer[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .mrd-daten-liste-liste[_ngcontent-%COMP%]     .mrd-list-virtual-scroll{scrollbar-gutter:stable}.mrd-daten-liste-inaktiv[_ngcontent-%COMP%]:not(.mrd-list-item-selected){background-color:#ebeff3;color:#949ea7}.mrd-daten-liste-hinweis[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;align-items:center;justify-content:center;padding:16px;color:#949ea7}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdDatenListeComponent, [{
        type: Component,
        args: [{ selector: 'mrd-daten-liste', host: {
                    '[class.mrd-daten-liste-volle-breite]': 'volleBreite'
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-daten-liste-kopfbereich\">\n  <mrd-form-field newFill small *ngIf=\"suche\" class=\"mrd-daten-liste-suche\">\n    <mrd-label float=\"never\">{{suchPlatzhalter}}</mrd-label>\n    <mrd-input [value]=\"suchtext\" (valueChange)=\"suchtextGeaendert($event)\"></mrd-input>\n    <mrd-suffix><mrd-icon size=\"32\" icon=\"suche\"></mrd-icon></mrd-suffix>\n  </mrd-form-field>\n\n  <div *ngIf=\"betriebFilterSichtbar || sortierAuswahl\" class=\"mrd-daten-liste-auswahlzeile\">\n    <mrd-form-field newFill small *ngIf=\"betriebFilterSichtbar\" class=\"mrd-daten-liste-betriebe\">\n      <mrd-label float=\"always\">Betriebe</mrd-label>\n      <mrd-select multiple [value]=\"betriebAuswahl\" (valueChange)=\"betriebFilterGeaendert($event)\">\n        <mrd-select-option [value]=\"ALLE_BETRIEBE\">Alle</mrd-select-option>\n        <mrd-select-option *ngFor=\"let betrieb of betriebe\" [value]=\"betrieb.id\">{{betrieb.name}}</mrd-select-option>\n      </mrd-select>\n    </mrd-form-field>\n    <ng-container *ngIf=\"sortierAuswahl\">\n      <mrd-form-field newFill small class=\"mrd-daten-liste-sortierung\">\n        <mrd-label float=\"always\">Sortierung</mrd-label>\n        <mrd-select [value]=\"sortierSchluessel\" (valueChange)=\"sortierSchluesselGeaendert($event)\">\n          <mrd-select-option *ngFor=\"let option of sortierOptionen\" [value]=\"option.schluessel\" noCheckbox>{{option.bezeichnung}}</mrd-select-option>\n        </mrd-select>\n      </mrd-form-field>\n      <!-- Wie in der Schlagliste; in der Standardsortierung gibt es keine Richtung -->\n      <mrd-button-toggle-group class=\"mrd-daten-liste-richtung\" simple primary borderRadius=\"6\"\n                               [value]=\"richtung\" [disabled]=\"!istSortiert\" (valueChange)=\"richtungGeaendert($event)\">\n        <mrd-button toggle-button iconSize=\"1.5em\" [customToggleSelectedTextColor]=\"MrdColor.WEISS\" value=\"asc\" tooltip tooltipText=\"Aufsteigend\">\n          <mrd-icon svgIcon=\"mrd:pfeil-up\"></mrd-icon>\n        </mrd-button>\n        <mrd-button toggle-button iconSize=\"1.5em\" [customToggleSelectedTextColor]=\"MrdColor.WEISS\" value=\"desc\" tooltip tooltipText=\"Absteigend\">\n          <mrd-icon svgIcon=\"mrd:pfeil-down\"></mrd-icon>\n        </mrd-button>\n      </mrd-button-toggle-group>\n    </ng-container>\n  </div>\n\n  <ng-content select=\"[mrdDatenListeFilter]\"></ng-content>\n</div>\n\n<div class=\"mrd-daten-liste-spaltenkoepfe\" [mrdSort]=\"kopfSortierung ? sortierung : null\" mrdSortClear [mrdSortDisabled]=\"!kopfSortierung\"\n     (mrdSortChange)=\"sortierungSetzen($event)\">\n  <ng-container *ngFor=\"let spalte of spalten\">\n    <div *ngIf=\"kopfSortierung && spalte.sortierbar; else ohneSortierung\"\n         class=\"mrd-daten-liste-spalte\" [mrd-sort-header]=\"spalte.schluessel\"\n         [arrowPosition]=\"spalte.ausrichtung === 'rechts' ? 'before' : 'after'\"\n         [class.mrd-daten-liste-spalte-flex]=\"spalte.flex\" [style.width.px]=\"spalte.breite\"\n         [class.mrd-daten-liste-mitte]=\"spalte.ausrichtung === 'mitte'\" [class.mrd-daten-liste-rechts]=\"spalte.ausrichtung === 'rechts'\">\n      {{spalte.titel}}\n    </div>\n    <ng-template #ohneSortierung>\n      <div class=\"mrd-daten-liste-spalte\" [class.mrd-daten-liste-spalte-flex]=\"spalte.flex\" [style.width.px]=\"spalte.breite\"\n           [class.mrd-daten-liste-mitte]=\"spalte.ausrichtung === 'mitte'\" [class.mrd-daten-liste-rechts]=\"spalte.ausrichtung === 'rechts'\">\n        {{spalte.titel}}\n      </div>\n    </ng-template>\n  </ng-container>\n</div>\n\n<div *ngIf=\"laedt\" class=\"mrd-daten-liste-hinweis\">\n  <mrd-progress-spinner></mrd-progress-spinner>\n</div>\n<div *ngIf=\"!laedt && angezeigt.length === 0\" class=\"mrd-daten-liste-hinweis\">{{leerText}}</div>\n\n<mrd-list *ngIf=\"!laedt\" [class.mrd-daten-liste-leer]=\"angezeigt.length === 0\" class=\"mrd-daten-liste-liste\" divider selectable virtualScroll\n          [items]=\"angezeigt\" [itemSize]=\"zeilenhoehe\" [trackBy]=\"trackBy\" [angeheftet]=\"ausgewaehlt\">\n  <ng-template [mrdListItem]=\"angezeigt\" let-eintrag>\n    <mrd-list-item [selected]=\"istAusgewaehlt(eintrag)\" [class.mrd-daten-liste-inaktiv]=\"istInaktiv(eintrag)\" (click)=\"auswahl.emit(eintrag)\">\n      <div *ngFor=\"let spalte of spalten\" class=\"mrd-daten-liste-spalte\" [class.mrd-daten-liste-spalte-flex]=\"spalte.flex\" [style.width.px]=\"spalte.breite\"\n           [class.mrd-daten-liste-mitte]=\"spalte.ausrichtung === 'mitte'\" [class.mrd-daten-liste-rechts]=\"spalte.ausrichtung === 'rechts'\">\n        <ng-container *ngIf=\"zelle(spalte.schluessel) as template; else standardZelle\">\n          <ng-container *ngTemplateOutlet=\"template; context: {$implicit: eintrag, ausgewaehlt: istAusgewaehlt(eintrag)}\"></ng-container>\n        </ng-container>\n        <ng-template #standardZelle>\n          <span class=\"mrd-daten-liste-text\" [line-clamp]=\"2\" [mrdToolTip]=\"text(spalte, eintrag)\" showIfTruncated>{{text(spalte, eintrag)}}</span>\n        </ng-template>\n      </div>\n    </mrd-list-item>\n  </ng-template>\n</mrd-list>\n\n<ng-content select=\"[mrdDatenListeAktionen]\"></ng-content>\n", styles: [":host{display:flex;flex-direction:column;box-sizing:border-box;height:100%;min-height:0;width:-moz-max-content;width:max-content;max-width:100%}:host(.mrd-daten-liste-volle-breite),:host-context(.mrd-sidenav-mobile){width:100%}.mrd-daten-liste-kopfbereich,.mrd-daten-liste-liste,.mrd-daten-liste-hinweis,:host ::ng-deep [mrdDatenListeFilter]{box-sizing:border-box;width:0;min-width:100%}:host ::ng-deep [mrdDatenListeAktionen]{box-sizing:border-box;min-width:100%}.mrd-daten-liste-kopfbereich{display:flex;flex-direction:column;gap:8px;padding:8px 16px}.mrd-daten-liste-kopfbereich:empty{display:none}.mrd-daten-liste-suche{width:100%}.mrd-daten-liste-auswahlzeile{display:flex;flex-direction:row;align-items:center;gap:8px}.mrd-daten-liste-betriebe,.mrd-daten-liste-sortierung{flex:1 1 0;min-width:0}.mrd-daten-liste-richtung{flex:0 0 80px}.mrd-daten-liste-richtung ::ng-deep mrd-button .mrd-button-container mrd-icon{margin-right:0}.mrd-daten-liste-spaltenkoepfe{display:flex;flex-direction:row;align-items:center;flex:0 0 auto;box-sizing:border-box;height:40px;padding:0 16px;overflow:hidden;scrollbar-gutter:stable;background-color:#65b32e;color:#fff;border-bottom:1px solid #FFFFFF;font-size:16px}.mrd-daten-liste-spalte{display:flex;align-items:center;flex:0 0 auto;box-sizing:border-box;min-width:0;padding-right:8px;overflow:hidden}.mrd-daten-liste-spalte.mrd-daten-liste-spalte-flex{flex:1 0 auto}.mrd-daten-liste-spalte.mrd-daten-liste-mitte{justify-content:center}.mrd-daten-liste-spalte.mrd-daten-liste-rechts{justify-content:flex-end}.mrd-daten-liste-spalte:last-child{padding-right:0}.mrd-daten-liste-text{overflow-wrap:anywhere}.mrd-daten-liste-liste{flex:1 1 auto;min-height:0}.mrd-daten-liste-liste.mrd-daten-liste-leer{display:none}:host .mrd-daten-liste-liste ::ng-deep .mrd-list-virtual-scroll{scrollbar-gutter:stable}.mrd-daten-liste-inaktiv:not(.mrd-list-item-selected){background-color:#ebeff3;color:#949ea7}.mrd-daten-liste-hinweis{display:flex;flex:1 1 auto;align-items:center;justify-content:center;padding:16px;color:#949ea7}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { zellen: [{
            type: ContentChildren,
            args: [MrdDatenListeZelleDirective]
        }], liste: [{
            type: ViewChild,
            args: [MrdListComponent]
        }], eintraege: [{
            type: Input
        }], spalten: [{
            type: Input
        }], identifier: [{
            type: Input
        }], ausgewaehlt: [{
            type: Input
        }], zeilenhoehe: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], suche: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], suchPlatzhalter: [{
            type: Input
        }], suchfelder: [{
            type: Input
        }], suchMindestlaenge: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], suchVerzoegerung: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], kopfSortierung: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], sortierAuswahl: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], sortierung: [{
            type: Input
        }], inaktivPruefung: [{
            type: Input
        }], inaktiveAusblenden: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], betriebe: [{
            type: Input
        }], betriebSchluessel: [{
            type: Input
        }], betriebFilter: [{
            type: Input
        }], laedt: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], leerText: [{
            type: Input
        }], volleBreite: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], auswahl: [{
            type: Output
        }], sortierungChange: [{
            type: Output
        }], inaktiveAusblendenChange: [{
            type: Output
        }], betriebFilterChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWRhdGVuLWxpc3RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZGF0ZW4tbGlzdGUvY29tcG9uZW50cy9tcmQtZGF0ZW4tbGlzdGUvbXJkLWRhdGVuLWxpc3RlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZGF0ZW4tbGlzdGUvY29tcG9uZW50cy9tcmQtZGF0ZW4tbGlzdGUvbXJkLWRhdGVuLWxpc3RlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBMEQsU0FBUyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyUCxPQUFPLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzNELE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFNUYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFFckcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1J6RSx5Q0FBMEUsbUJBQUE7SUFDL0MsWUFBbUI7SUFBQSxpQkFBWTtJQUN4RCxvQ0FBd0U7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QUFDO1lBRXBCLGVBQWU7a0JBQTlCLEtBQUs7WUFHVSxVQUFVO2tCQUF6QixLQUFLO1lBR3NDLGlCQUFpQjtrQkFBNUQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUM7WUFFUyxnQkFBZ0I7a0JBQTNELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFDO1lBR1UsY0FBYztrQkFBMUQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUdTLGNBQWM7a0JBQTFELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFHcEIsVUFBVTtrQkFBekIsS0FBSztZQUdVLGVBQWU7a0JBQTlCLEtBQUs7WUFFdUMsa0JBQWtCO2tCQUE5RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBR3BCLFFBQVE7a0JBQXZCLEtBQUs7WUFHVSxpQkFBaUI7a0JBQWhDLEtBQUs7WUFHVSxhQUFhO2tCQUE1QixLQUFLO1lBRXVDLEtBQUs7a0JBQWpELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFcEIsUUFBUTtrQkFBdkIsS0FBSztZQUd1QyxXQUFXO2tCQUF2RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBR25CLE9BQU87a0JBQXZCLE1BQU07WUFFVSxnQkFBZ0I7a0JBQWhDLE1BQU07WUFFVSx3QkFBd0I7a0JBQXhDLE1BQU07WUFFVSxtQkFBbUI7a0JBQW5DLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgUXVlcnlMaXN0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgVHJhY2tCeUZ1bmN0aW9uLCBWaWV3Q2hpbGQsIGJvb2xlYW5BdHRyaWJ1dGUsIG51bWJlckF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZU9iamVjdCwgU3Vic2NyaXB0aW9uSGFuZGxlciB9IGZyb20gJ21yZC1jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1yZENvbG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2VudW0vY29sb3IuZW51bSc7XG5pbXBvcnQgeyBNcmRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbXJkLWxpc3QvY29tcG9uZW50cy9tcmQtbGlzdC9tcmQtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXJkU29ydGllcnVuZyB9IGZyb20gJy4uLy4uLy4uL21yZC1zb3J0L2NvbW1vbi9tb2RlbC9tcmQtc29ydC5tb2RlbCc7XG5pbXBvcnQgeyBNcmREYXRlbkxpc3RlWmVsbGVEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9jb21tb24vZGlyZWN0aXZlL21yZC1kYXRlbi1saXN0ZS16ZWxsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTXJkRGF0ZW5MaXN0ZUJldHJpZWIsIE1yZERhdGVuTGlzdGVTb3J0aWVyT3B0aW9uLCBNcmREYXRlbkxpc3RlU3BhbHRlLCBNcmREYXRlbkxpc3RlU3VjaGZlbGQsIE1yZERhdGVuTGlzdGVXZXJ0LCBNcmREYXRlbkxpc3RlWmVsbGVLb250ZXh0IH0gZnJvbSAnLi4vLi4vY29tbW9uL21vZGVsL21yZC1kYXRlbi1saXN0ZS5tb2RlbCc7XG5pbXBvcnQgeyBNcmREYXRlbkxpc3RlVXRpbCB9IGZyb20gJy4uLy4uL2NvbW1vbi91dGlsL21yZC1kYXRlbi1saXN0ZS51dGlsJztcblxuLyoqXG4gKiBMaXN0ZSBtaXQgU3BhbHRlbiBmdWVyIFN0YW1tZGF0ZW4tU2VpdGVuOiBvYmVuIFN1Y2hlLCBCZXRyaWVicy1GaWx0ZXIsIFNvcnRpZXJ1bmcgdW5kIGVpZ2VuZSBGaWx0ZXIgKGBbbXJkRGF0ZW5MaXN0ZUZpbHRlcl1gKSxcbiAqIGluIGRlciBNaXR0ZSBTcGFsdGVua29lcGZlIHVuZCB2aXJ0dWVsbGUgTGlzdGUsIHVudGVuIGVpZ2VuZSBBa3Rpb25lbiAoYFttcmREYXRlbkxpc3RlQWt0aW9uZW5dYCksIGRvcnQgYXVjaCBkZXJcbiAqIFNjaGFsdGVyIGA8bXJkLWRhdGVuLWxpc3RlLWluYWt0aXYtc2NoYWx0ZXI+YC5cbiAqIERpZSBCcmVpdGUgZXJnaWJ0IHNpY2ggYXVzIFNwYWx0ZW4gdW5kIEFrdGlvbmVuOyBpbiBlaW5lciBtb2JpbGVuIGBtcmQtc2lkZW5hdmAgbmltbXQgZGllIExpc3RlIGRpZSB2b2xsZSBCcmVpdGUgZWluLlxuICogYGVpbnRyYWVnZWAga29tbWVuIGluIGRlciBTdGFuZGFyZHNvcnRpZXJ1bmc7IGplZGUgU29ydGllcnVuZyBsYWVzc3Qgc2ljaCB3aWVkZXIgZGFyYXVmIHp1cnVlY2tzZXR6ZW4uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yZC1kYXRlbi1saXN0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtZGF0ZW4tbGlzdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tcmQtZGF0ZW4tbGlzdGUuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubXJkLWRhdGVuLWxpc3RlLXZvbGxlLWJyZWl0ZV0nOiAndm9sbGVCcmVpdGUnXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE1yZERhdGVuTGlzdGVDb21wb25lbnQ8VCA9IGFueT4gZXh0ZW5kcyBCYXNlT2JqZWN0IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNUQU5EQVJEOiBzdHJpbmcgPSAnX19zdGFuZGFyZCc7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQkVUUklFQjogc3RyaW5nID0gJ19fYmV0cmllYic7XG4gIC8qKiBPcHRpb24gXCJBbGxlXCIgaW0gQmV0cmllYnMtRmlsdGVyOyBzdGVodCBmdWVyIGVpbmVuIGxlZXJlbiBGaWx0ZXIgKi9cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBBTExFX0JFVFJJRUJFOiBzdHJpbmcgPSAnX19hbGxlJztcblxuICBwdWJsaWMgcmVhZG9ubHkgQUxMRV9CRVRSSUVCRTogc3RyaW5nID0gTXJkRGF0ZW5MaXN0ZUNvbXBvbmVudC5BTExFX0JFVFJJRUJFO1xuICBwdWJsaWMgcmVhZG9ubHkgTXJkQ29sb3IgPSBNcmRDb2xvcjtcblxuICBAQ29udGVudENoaWxkcmVuKE1yZERhdGVuTGlzdGVaZWxsZURpcmVjdGl2ZSkgcHVibGljIHNldCB6ZWxsZW4odmFsdWU6IFF1ZXJ5TGlzdDxNcmREYXRlbkxpc3RlWmVsbGVEaXJlY3RpdmU8VD4+KSB7XG4gICAgdGhpcy56ZWxsZW5UZW1wbGF0ZXMgPSBuZXcgTWFwKCh2YWx1ZT8udG9BcnJheSgpID8/IFtdKS5tYXAoKHplbGxlOiBNcmREYXRlbkxpc3RlWmVsbGVEaXJlY3RpdmU8VD4pID0+IFt6ZWxsZS5zY2hsdWVzc2VsLCB6ZWxsZS50ZW1wbGF0ZVJlZl0pKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoTXJkTGlzdENvbXBvbmVudCkgcHJpdmF0ZSBsaXN0ZTogTXJkTGlzdENvbXBvbmVudDxUPjtcblxuICAvKiogSW4gZGVyIFN0YW5kYXJkc29ydGllcnVuZywgei4gQi4gZGlyZWt0IGF1cyBkZW0gU3RvcmUgKi9cbiAgQElucHV0KCkgcHVibGljIGVpbnRyYWVnZTogVFtdID0gW107XG5cbiAgQElucHV0KCkgcHVibGljIHNwYWx0ZW46IE1yZERhdGVuTGlzdGVTcGFsdGU8VD5bXSA9IFtdO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBpZGVudGlmaWVyOiBzdHJpbmcgPSAnaWQnO1xuXG4gIC8qKiBBdXNnZXdhZWhsdGVyIEVpbnRyYWc7IGJsZWlidCBzaWNodGJhciAoYW5nZWhlZnRldCksIGF1Y2ggd2VubiBlciBoZXJhdXNnZXNjcm9sbHQgaXN0ICovXG4gIEBJbnB1dCgpIHB1YmxpYyBhdXNnZXdhZWhsdDogVCA9IG51bGw7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyB6ZWlsZW5ob2VoZTogbnVtYmVyID0gNTY7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc3VjaGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBzdWNoUGxhdHpoYWx0ZXI6IHN0cmluZyA9ICdEdXJjaHN1Y2hlbic7XG5cbiAgLyoqIE9obmUgQW5nYWJlIHdlcmRlbiBkaWUgV2VydGUgYWxsZXIgU3BhbHRlbiBkdXJjaHN1Y2h0ICovXG4gIEBJbnB1dCgpIHB1YmxpYyBzdWNoZmVsZGVyOiBNcmREYXRlbkxpc3RlU3VjaGZlbGQ8VD5bXTtcblxuICAvKiogS3VlcnplcmUgU3VjaHRleHRlIGZpbHRlcm4gbmljaHQgKi9cbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBzdWNoTWluZGVzdGxhZW5nZTogbnVtYmVyID0gMTtcblxuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgcHVibGljIHN1Y2hWZXJ6b2VnZXJ1bmc6IG51bWJlciA9IDMwMDtcblxuICAvKiogU29ydGllcmVuIHBlciBLbGljayBhdWYgZGllIFNwYWx0ZW5rb2VwZmUgKGBzb3J0aWVyYmFyYCk7IGRlciBkcml0dGUgS2xpY2sgc3RlbGx0IGRpZSBTdGFuZGFyZHNvcnRpZXJ1bmcgd2llZGVyIGhlciAqL1xuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBrb3BmU29ydGllcnVuZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBTb3J0aWVyZW4gcGVyIFNlbGVjdCAoc29ydGllcmJhcmUgU3BhbHRlbiwgYmVpIG1laHJlcmVuIEJldHJpZWJlbiBhdWNoIFwiQmV0cmllYlwiKSB1bmQgUmljaHR1bmdzLVNjaGFsdGVyICovXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNvcnRpZXJBdXN3YWhsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIExlZXIgb2RlciBvaG5lIFJpY2h0dW5nOiBTdGFuZGFyZHNvcnRpZXJ1bmcgKi9cbiAgQElucHV0KCkgcHVibGljIHNvcnRpZXJ1bmc6IE1yZFNvcnRpZXJ1bmcgPSBudWxsO1xuXG4gIC8qKiBLZW5uemVpY2huZXQgaW5ha3RpdmUgRWludHJhZWdlOyBudXIgZGFtaXQgZXJzY2hlaW50IGA8bXJkLWRhdGVuLWxpc3RlLWluYWt0aXYtc2NoYWx0ZXI+YCAqL1xuICBASW5wdXQoKSBwdWJsaWMgaW5ha3RpdlBydWVmdW5nOiAoZWludHJhZzogVCkgPT4gYm9vbGVhbjtcblxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBpbmFrdGl2ZUF1c2JsZW5kZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogQWIgendlaSBCZXRyaWViZW4gZXJzY2hlaW50IGRlciBCZXRyaWVicy1GaWx0ZXIgKi9cbiAgQElucHV0KCkgcHVibGljIGJldHJpZWJlOiBNcmREYXRlbkxpc3RlQmV0cmllYltdID0gW107XG5cbiAgLyoqIEVpbnRyYWVnZSBvaG5lIEJldHJpZWIgKGJldHJpZWJzdWViZXJncmVpZmVuZCkgYmxlaWJlbiBiZWkgamVkZW0gQmV0cmllYnMtRmlsdGVyIHNpY2h0YmFyICovXG4gIEBJbnB1dCgpIHB1YmxpYyBiZXRyaWViU2NobHVlc3NlbDogc3RyaW5nID0gJ2lkQmV0cmllYic7XG5cbiAgLyoqIExlZXI6IGFsbGUgQmV0cmllYmUgKi9cbiAgQElucHV0KCkgcHVibGljIGJldHJpZWJGaWx0ZXI6IG51bWJlcltdID0gW107XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgbGFlZHQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBwdWJsaWMgbGVlclRleHQ6IHN0cmluZyA9ICdLZWluZSBFaW50csOkZ2UgZ2VmdW5kZW4nO1xuXG4gIC8qKiBWb2xsZSBCcmVpdGUgc3RhdHQgQnJlaXRlIGF1cyBkZW4gU3BhbHRlbiAobW9iaWwgaW4gZWluZXIgYG1yZC1zaWRlbmF2YCBhdXRvbWF0aXNjaCkgKi9cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgdm9sbGVCcmVpdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogS2xpY2sgYXVmIGVpbmUgWmVpbGU7IG9iIHNpZSBhdXNnZXdhZWhsdCB3aXJkLCBlbnRzY2hlaWRldCBkZXIgQXVmcnVmZXIgdWViZXIgYGF1c2dld2FlaGx0YCAqL1xuICBAT3V0cHV0KCkgcHVibGljIGF1c3dhaGw6IEV2ZW50RW1pdHRlcjxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcblxuICBAT3V0cHV0KCkgcHVibGljIHNvcnRpZXJ1bmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxNcmRTb3J0aWVydW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8TXJkU29ydGllcnVuZz4oKTtcblxuICBAT3V0cHV0KCkgcHVibGljIGluYWt0aXZlQXVzYmxlbmRlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBPdXRwdXQoKSBwdWJsaWMgYmV0cmllYkZpbHRlckNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcltdPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyW10+KCk7XG5cbiAgcHVibGljIGFuZ2V6ZWlndDogVFtdID0gW107XG4gIC8qKiBXZXJ0IGRlcyBCZXRyaWVicy1TZWxlY3RzOyBvaG5lIEZpbHRlciBzdGVodCBkb3J0IFwiQWxsZVwiIChzdGFiaWwsIGRhbWl0IGRhcyBTZWxlY3QgbmljaHQgYmVpIGplZGVtIER1cmNobGF1ZiBuZXUgc2V0enQpICovXG4gIHB1YmxpYyBiZXRyaWViQXVzd2FobDogKG51bWJlciB8IHN0cmluZylbXSA9IFtNcmREYXRlbkxpc3RlQ29tcG9uZW50LkFMTEVfQkVUUklFQkVdO1xuICBwdWJsaWMgc3VjaHRleHQ6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgc29ydGllck9wdGlvbmVuOiBNcmREYXRlbkxpc3RlU29ydGllck9wdGlvbltdID0gW107XG5cbiAgcHVibGljIHJlYWRvbmx5IHRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxUPiA9IChfOiBudW1iZXIsIGVpbnRyYWc6IFQpID0+IHRoaXMuaWRWb24oZWludHJhZyk7XG5cbiAgcHJpdmF0ZSB6ZWxsZW5UZW1wbGF0ZXM6IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPE1yZERhdGVuTGlzdGVaZWxsZUtvbnRleHQ8VD4+PiA9IG5ldyBNYXAoKTtcbiAgcHJpdmF0ZSB3aXJrc2FtZXJTdWNodGV4dDogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgcmVhZG9ubHkgc3VjaHRleHQkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy53YXRjaCh0aGlzLnN1Y2h0ZXh0JC5waXBlKGRlYm91bmNlKCgpID0+IHRpbWVyKHRoaXMuc3VjaFZlcnpvZWdlcnVuZykpKSwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy53aXJrc2FtZXJTdWNodGV4dCA9IHRleHQubGVuZ3RoID49IHRoaXMuc3VjaE1pbmRlc3RsYWVuZ2UgPyB0ZXh0IDogJyc7XG4gICAgICB0aGlzLmFrdHVhbGlzaWVyZW4oKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlc1snc3BhbHRlbiddIHx8IGNoYW5nZXNbJ2JldHJpZWJlJ10pIHtcbiAgICAgIHRoaXMuc29ydGllck9wdGlvbmVuQmVyZWNobmVuKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydiZXRyaWViRmlsdGVyJ10pIHtcbiAgICAgIHRoaXMuYmV0cmllYkF1c3dhaGxTZXR6ZW4oKTtcbiAgICB9XG4gICAgdGhpcy5ha3R1YWxpc2llcmVuKCk7XG4gICAgaWYgKGNoYW5nZXNbJ2F1c2dld2FlaGx0J10/LmN1cnJlbnRWYWx1ZSkge1xuICAgICAgLy8gTmFjaCBkZW0gUmVuZGVybiwgZGFtaXQgZGllIHZpcnR1ZWxsZSBMaXN0ZSBpaHJlIEhvZWhlIGtlbm50XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuenVyQXVzd2FobFNjcm9sbGVuKCkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYmV0cmllYkZpbHRlclNpY2h0YmFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5iZXRyaWViZT8ubGVuZ3RoID8/IDApID4gMTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc29ydGllclNjaGx1ZXNzZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pc3RTb3J0aWVydCA/IHRoaXMuc29ydGllcnVuZy5hY3RpdmUgOiBNcmREYXRlbkxpc3RlQ29tcG9uZW50LlNUQU5EQVJEO1xuICB9XG5cbiAgcHVibGljIGdldCBhYnN0ZWlnZW5kKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzdFNvcnRpZXJ0ICYmIHRoaXMuc29ydGllcnVuZy5kaXJlY3Rpb24gPT09ICdkZXNjJztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmljaHR1bmcoKTogJ2FzYycgfCAnZGVzYycgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5pc3RTb3J0aWVydCA/IHRoaXMuc29ydGllcnVuZy5kaXJlY3Rpb24gYXMgJ2FzYycgfCAnZGVzYycgOiBudWxsO1xuICB9XG5cbiAgcHVibGljIGdldCBpc3RTb3J0aWVydCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLnNvcnRpZXJ1bmc/LmFjdGl2ZSAmJiAhIXRoaXMuc29ydGllcnVuZz8uZGlyZWN0aW9uO1xuICB9XG5cbiAgLyoqIFN1bW1lIGRlciBTcGFsdGVuYnJlaXRlbjsgZGllIExpc3RlIHNlbGJzdCBlcmdhZW56dCBJbm5lbmFic3RhbmQgdW5kIFNjcm9sbGJhciAqL1xuICBwdWJsaWMgZ2V0IHNwYWx0ZW5CcmVpdGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zcGFsdGVuLnJlZHVjZSgoc3VtbWU6IG51bWJlciwgc3BhbHRlOiBNcmREYXRlbkxpc3RlU3BhbHRlPFQ+KSA9PiBzdW1tZSArIHNwYWx0ZS5icmVpdGUsIDApO1xuICB9XG5cbiAgcHVibGljIHplbGxlKHNjaGx1ZXNzZWw6IHN0cmluZyk6IFRlbXBsYXRlUmVmPE1yZERhdGVuTGlzdGVaZWxsZUtvbnRleHQ8VD4+IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy56ZWxsZW5UZW1wbGF0ZXMuZ2V0KHNjaGx1ZXNzZWwpO1xuICB9XG5cbiAgcHVibGljIHRleHQoc3BhbHRlOiBNcmREYXRlbkxpc3RlU3BhbHRlPFQ+LCBlaW50cmFnOiBUKTogc3RyaW5nIHtcbiAgICByZXR1cm4gTXJkRGF0ZW5MaXN0ZVV0aWwuYWxzVGV4dChNcmREYXRlbkxpc3RlVXRpbC53ZXJ0Vm9uKHNwYWx0ZSwgZWludHJhZykpO1xuICB9XG5cbiAgcHVibGljIGlzdEF1c2dld2FlaGx0KGVpbnRyYWc6IFQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hdXNnZXdhZWhsdCAhPT0gbnVsbCAmJiB0aGlzLmF1c2dld2FlaGx0ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5pZFZvbihlaW50cmFnKSA9PT0gdGhpcy5pZFZvbih0aGlzLmF1c2dld2FlaGx0KTtcbiAgfVxuXG4gIHB1YmxpYyBpc3RJbmFrdGl2KGVpbnRyYWc6IFQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmluYWt0aXZQcnVlZnVuZyAmJiB0aGlzLmluYWt0aXZQcnVlZnVuZyhlaW50cmFnKTtcbiAgfVxuXG4gIHB1YmxpYyBzdWNodGV4dEdlYWVuZGVydCh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN1Y2h0ZXh0ID0gdGV4dCA/PyAnJztcbiAgICB0aGlzLnN1Y2h0ZXh0JC5uZXh0KHRoaXMuc3VjaHRleHQudHJpbSgpKTtcbiAgfVxuXG4gIHB1YmxpYyBzb3J0aWVydW5nU2V0emVuKHNvcnRpZXJ1bmc6IE1yZFNvcnRpZXJ1bmcpOiB2b2lkIHtcbiAgICB0aGlzLnNvcnRpZXJ1bmcgPSBzb3J0aWVydW5nPy5kaXJlY3Rpb24gPyBzb3J0aWVydW5nIDogbnVsbDtcbiAgICB0aGlzLmFrdHVhbGlzaWVyZW4oKTtcbiAgICB0aGlzLnNvcnRpZXJ1bmdDaGFuZ2UuZW1pdCh0aGlzLnNvcnRpZXJ1bmcpO1xuICB9XG5cbiAgcHVibGljIHNvcnRpZXJTY2hsdWVzc2VsR2VhZW5kZXJ0KHNjaGx1ZXNzZWw6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHN0YW5kYXJkID0gIXNjaGx1ZXNzZWwgfHwgc2NobHVlc3NlbCA9PT0gTXJkRGF0ZW5MaXN0ZUNvbXBvbmVudC5TVEFOREFSRDtcbiAgICB0aGlzLnNvcnRpZXJ1bmdTZXR6ZW4oc3RhbmRhcmQgPyBudWxsIDoge2FjdGl2ZTogc2NobHVlc3NlbCwgZGlyZWN0aW9uOiB0aGlzLmFic3RlaWdlbmQgPyAnZGVzYycgOiAnYXNjJ30pO1xuICB9XG5cbiAgcHVibGljIHJpY2h0dW5nR2VhZW5kZXJ0KHJpY2h0dW5nOiAnYXNjJyB8ICdkZXNjJyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzdFNvcnRpZXJ0ICYmIChyaWNodHVuZyA9PT0gJ2FzYycgfHwgcmljaHR1bmcgPT09ICdkZXNjJykgJiYgcmljaHR1bmcgIT09IHRoaXMucmljaHR1bmcpIHtcbiAgICAgIHRoaXMuc29ydGllcnVuZ1NldHplbih7YWN0aXZlOiB0aGlzLnNvcnRpZXJ1bmcuYWN0aXZlLCBkaXJlY3Rpb246IHJpY2h0dW5nfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEF1Y2ggZnVlciBgPG1yZC1kYXRlbi1saXN0ZS1pbmFrdGl2LXNjaGFsdGVyPmAsIGRlciBhdXNzZXJoYWxiIGRpZXNlciBWaWV3IGxpZWd0ICovXG4gIHB1YmxpYyBpbmFrdGl2ZUF1c2JsZW5kZW5HZWFlbmRlcnQoYXVzYmxlbmRlbjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaW5ha3RpdmVBdXNibGVuZGVuID0gYXVzYmxlbmRlbjtcbiAgICB0aGlzLmFrdHVhbGlzaWVyZW4oKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmluYWt0aXZlQXVzYmxlbmRlbkNoYW5nZS5lbWl0KGF1c2JsZW5kZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiQWxsZVwiIHNjaGxpZXNzdCBkaWUgZWluemVsbmVuIEJldHJpZWJlIGF1cyB1bmQgdW1nZWtlaHJ0OiBXaXJkIFwiQWxsZVwiIG5ldSBhbmdlaGFrdCwgZmFlbGx0IGRlciBGaWx0ZXIgd2VnO1xuICAgKiB3aXJkIGVpbiBCZXRyaWViIGFuZ2VoYWt0LCB2ZXJzY2h3aW5kZXQgXCJBbGxlXCIuIE9obmUgQmV0cmllYiBzdGVodCB3aWVkZXIgXCJBbGxlXCIgZGEuXG4gICAqL1xuICBwdWJsaWMgYmV0cmllYkZpbHRlckdlYWVuZGVydCh3ZXJ0ZTogKG51bWJlciB8IHN0cmluZylbXSk6IHZvaWQge1xuICAgIGNvbnN0IGFsbGVOZXU6IGJvb2xlYW4gPSAod2VydGUgPz8gW10pLmluY2x1ZGVzKE1yZERhdGVuTGlzdGVDb21wb25lbnQuQUxMRV9CRVRSSUVCRSkgJiZcbiAgICAgICF0aGlzLmJldHJpZWJBdXN3YWhsLmluY2x1ZGVzKE1yZERhdGVuTGlzdGVDb21wb25lbnQuQUxMRV9CRVRSSUVCRSk7XG4gICAgdGhpcy5iZXRyaWViRmlsdGVyID0gYWxsZU5ldSA/IFtdIDogKHdlcnRlID8/IFtdKS5maWx0ZXIoKHdlcnQ6IG51bWJlciB8IHN0cmluZykgPT4gd2VydCAhPT0gTXJkRGF0ZW5MaXN0ZUNvbXBvbmVudC5BTExFX0JFVFJJRUJFKSBhcyBudW1iZXJbXTtcbiAgICB0aGlzLmJldHJpZWJBdXN3YWhsU2V0emVuKCk7XG4gICAgdGhpcy5ha3R1YWxpc2llcmVuKCk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5iZXRyaWViRmlsdGVyQ2hhbmdlLmVtaXQodGhpcy5iZXRyaWViRmlsdGVyKTtcbiAgfVxuXG4gIHB1YmxpYyB6dXJBdXN3YWhsU2Nyb2xsZW4oKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmFuZ2V6ZWlndC5maW5kSW5kZXgoKGVpbnRyYWc6IFQpID0+IHRoaXMuaXN0QXVzZ2V3YWVobHQoZWludHJhZykpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLmxpc3RlPy5zY3JvbGxUb0luZGV4KGluZGV4LCAnbmVhcmVzdCcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWt0dWFsaXNpZXJlbigpOiB2b2lkIHtcbiAgICBsZXQgZWludHJhZWdlOiBUW10gPSB0aGlzLmVpbnRyYWVnZSA/PyBbXTtcbiAgICBpZiAodGhpcy5pbmFrdGl2ZUF1c2JsZW5kZW4gJiYgdGhpcy5pbmFrdGl2UHJ1ZWZ1bmcpIHtcbiAgICAgIC8vIERpZSBBdXN3YWhsIGJsZWlidCBzaWNodGJhciwgYXVjaCB3ZW5uIHNpZSBnZXJhZGUgaW5ha3RpdiBnZXNldHp0IHd1cmRlXG4gICAgICBlaW50cmFlZ2UgPSBlaW50cmFlZ2UuZmlsdGVyKChlaW50cmFnOiBUKSA9PiAhdGhpcy5pbmFrdGl2UHJ1ZWZ1bmcoZWludHJhZykgfHwgdGhpcy5pc3RBdXNnZXdhZWhsdChlaW50cmFnKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmJldHJpZWJGaWx0ZXJTaWNodGJhciAmJiB0aGlzLmJldHJpZWJGaWx0ZXI/Lmxlbmd0aCkge1xuICAgICAgZWludHJhZWdlID0gZWludHJhZWdlLmZpbHRlcigoZWludHJhZzogVCkgPT4ge1xuICAgICAgICBjb25zdCBpZEJldHJpZWIgPSAoZWludHJhZyBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilbdGhpcy5iZXRyaWViU2NobHVlc3NlbF0gYXMgbnVtYmVyO1xuICAgICAgICByZXR1cm4gaWRCZXRyaWViID09PSBudWxsIHx8IGlkQmV0cmllYiA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuYmV0cmllYkZpbHRlci5pbmNsdWRlcyhpZEJldHJpZWIpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGVpbnRyYWVnZSA9IE1yZERhdGVuTGlzdGVVdGlsLnN1Y2hlbihlaW50cmFlZ2UsIHRoaXMud2lya3NhbWVyU3VjaHRleHQsIHRoaXMuc3VjaGZlbGRlciA/PyB0aGlzLnNwYWx0ZW4ubWFwKChzcGFsdGU6IE1yZERhdGVuTGlzdGVTcGFsdGU8VD4pID0+XG4gICAgICAoZWludHJhZzogVCkgPT4gTXJkRGF0ZW5MaXN0ZVV0aWwud2VydFZvbihzcGFsdGUsIGVpbnRyYWcpKSk7XG4gICAgaWYgKHRoaXMuaXN0U29ydGllcnQpIHtcbiAgICAgIGVpbnRyYWVnZSA9IE1yZERhdGVuTGlzdGVVdGlsLnNvcnRpZXJlbihlaW50cmFlZ2UsIHRoaXMuc29ydGllcndlcnQodGhpcy5zb3J0aWVydW5nLmFjdGl2ZSksIHRoaXMuc29ydGllcnVuZy5kaXJlY3Rpb24gYXMgJ2FzYycgfCAnZGVzYycpO1xuICAgIH1cbiAgICB0aGlzLmFuZ2V6ZWlndCA9IGVpbnRyYWVnZTtcbiAgfVxuXG4gIHByaXZhdGUgYmV0cmllYkF1c3dhaGxTZXR6ZW4oKTogdm9pZCB7XG4gICAgdGhpcy5iZXRyaWViQXVzd2FobCA9IHRoaXMuYmV0cmllYkZpbHRlcj8ubGVuZ3RoID8gWy4uLnRoaXMuYmV0cmllYkZpbHRlcl0gOiBbTXJkRGF0ZW5MaXN0ZUNvbXBvbmVudC5BTExFX0JFVFJJRUJFXTtcbiAgfVxuXG4gIHByaXZhdGUgc29ydGllck9wdGlvbmVuQmVyZWNobmVuKCk6IHZvaWQge1xuICAgIGNvbnN0IG9wdGlvbmVuOiBNcmREYXRlbkxpc3RlU29ydGllck9wdGlvbltdID0gW3tzY2hsdWVzc2VsOiBNcmREYXRlbkxpc3RlQ29tcG9uZW50LlNUQU5EQVJELCBiZXplaWNobnVuZzogJ1N0YW5kYXJkJ31dO1xuICAgICh0aGlzLnNwYWx0ZW4gPz8gW10pLmZpbHRlcigoc3BhbHRlOiBNcmREYXRlbkxpc3RlU3BhbHRlPFQ+KSA9PiBzcGFsdGUuc29ydGllcmJhcilcbiAgICAgIC5mb3JFYWNoKChzcGFsdGU6IE1yZERhdGVuTGlzdGVTcGFsdGU8VD4pID0+IG9wdGlvbmVuLnB1c2goe3NjaGx1ZXNzZWw6IHNwYWx0ZS5zY2hsdWVzc2VsLCBiZXplaWNobnVuZzogc3BhbHRlLnRpdGVsfSkpO1xuICAgIGlmICh0aGlzLmJldHJpZWJGaWx0ZXJTaWNodGJhcikge1xuICAgICAgb3B0aW9uZW4ucHVzaCh7c2NobHVlc3NlbDogTXJkRGF0ZW5MaXN0ZUNvbXBvbmVudC5CRVRSSUVCLCBiZXplaWNobnVuZzogJ0JldHJpZWInfSk7XG4gICAgfVxuICAgIHRoaXMuc29ydGllck9wdGlvbmVuID0gb3B0aW9uZW47XG4gIH1cblxuICBwcml2YXRlIHNvcnRpZXJ3ZXJ0KHNjaGx1ZXNzZWw6IHN0cmluZyk6IChlaW50cmFnOiBUKSA9PiBNcmREYXRlbkxpc3RlV2VydCB7XG4gICAgaWYgKHNjaGx1ZXNzZWwgPT09IE1yZERhdGVuTGlzdGVDb21wb25lbnQuQkVUUklFQikge1xuICAgICAgcmV0dXJuIChlaW50cmFnOiBUKSA9PiB0aGlzLmJldHJpZWJlLmZpbmQoKGJldHJpZWI6IE1yZERhdGVuTGlzdGVCZXRyaWViKSA9PlxuICAgICAgICBiZXRyaWViLmlkID09PSAoZWludHJhZyBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilbdGhpcy5iZXRyaWViU2NobHVlc3NlbF0pPy5uYW1lO1xuICAgIH1cbiAgICBjb25zdCBzcGFsdGUgPSB0aGlzLnNwYWx0ZW4uZmluZCgoczogTXJkRGF0ZW5MaXN0ZVNwYWx0ZTxUPikgPT4gcy5zY2hsdWVzc2VsID09PSBzY2hsdWVzc2VsKTtcbiAgICByZXR1cm4gc3BhbHRlID8gKGVpbnRyYWc6IFQpID0+IE1yZERhdGVuTGlzdGVVdGlsLndlcnRWb24oc3BhbHRlLCBlaW50cmFnKSA6ICgpID0+IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGlkVm9uKGVpbnRyYWc6IFQpOiB1bmtub3duIHtcbiAgICByZXR1cm4gKGVpbnRyYWcgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pPy5bdGhpcy5pZGVudGlmaWVyXTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm1yZC1kYXRlbi1saXN0ZS1rb3BmYmVyZWljaFwiPlxuICA8bXJkLWZvcm0tZmllbGQgbmV3RmlsbCBzbWFsbCAqbmdJZj1cInN1Y2hlXCIgY2xhc3M9XCJtcmQtZGF0ZW4tbGlzdGUtc3VjaGVcIj5cbiAgICA8bXJkLWxhYmVsIGZsb2F0PVwibmV2ZXJcIj57e3N1Y2hQbGF0emhhbHRlcn19PC9tcmQtbGFiZWw+XG4gICAgPG1yZC1pbnB1dCBbdmFsdWVdPVwic3VjaHRleHRcIiAodmFsdWVDaGFuZ2UpPVwic3VjaHRleHRHZWFlbmRlcnQoJGV2ZW50KVwiPjwvbXJkLWlucHV0PlxuICAgIDxtcmQtc3VmZml4PjxtcmQtaWNvbiBzaXplPVwiMzJcIiBpY29uPVwic3VjaGVcIj48L21yZC1pY29uPjwvbXJkLXN1ZmZpeD5cbiAgPC9tcmQtZm9ybS1maWVsZD5cblxuICA8ZGl2ICpuZ0lmPVwiYmV0cmllYkZpbHRlclNpY2h0YmFyIHx8IHNvcnRpZXJBdXN3YWhsXCIgY2xhc3M9XCJtcmQtZGF0ZW4tbGlzdGUtYXVzd2FobHplaWxlXCI+XG4gICAgPG1yZC1mb3JtLWZpZWxkIG5ld0ZpbGwgc21hbGwgKm5nSWY9XCJiZXRyaWViRmlsdGVyU2ljaHRiYXJcIiBjbGFzcz1cIm1yZC1kYXRlbi1saXN0ZS1iZXRyaWViZVwiPlxuICAgICAgPG1yZC1sYWJlbCBmbG9hdD1cImFsd2F5c1wiPkJldHJpZWJlPC9tcmQtbGFiZWw+XG4gICAgICA8bXJkLXNlbGVjdCBtdWx0aXBsZSBbdmFsdWVdPVwiYmV0cmllYkF1c3dhaGxcIiAodmFsdWVDaGFuZ2UpPVwiYmV0cmllYkZpbHRlckdlYWVuZGVydCgkZXZlbnQpXCI+XG4gICAgICAgIDxtcmQtc2VsZWN0LW9wdGlvbiBbdmFsdWVdPVwiQUxMRV9CRVRSSUVCRVwiPkFsbGU8L21yZC1zZWxlY3Qtb3B0aW9uPlxuICAgICAgICA8bXJkLXNlbGVjdC1vcHRpb24gKm5nRm9yPVwibGV0IGJldHJpZWIgb2YgYmV0cmllYmVcIiBbdmFsdWVdPVwiYmV0cmllYi5pZFwiPnt7YmV0cmllYi5uYW1lfX08L21yZC1zZWxlY3Qtb3B0aW9uPlxuICAgICAgPC9tcmQtc2VsZWN0PlxuICAgIDwvbXJkLWZvcm0tZmllbGQ+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNvcnRpZXJBdXN3YWhsXCI+XG4gICAgICA8bXJkLWZvcm0tZmllbGQgbmV3RmlsbCBzbWFsbCBjbGFzcz1cIm1yZC1kYXRlbi1saXN0ZS1zb3J0aWVydW5nXCI+XG4gICAgICAgIDxtcmQtbGFiZWwgZmxvYXQ9XCJhbHdheXNcIj5Tb3J0aWVydW5nPC9tcmQtbGFiZWw+XG4gICAgICAgIDxtcmQtc2VsZWN0IFt2YWx1ZV09XCJzb3J0aWVyU2NobHVlc3NlbFwiICh2YWx1ZUNoYW5nZSk9XCJzb3J0aWVyU2NobHVlc3NlbEdlYWVuZGVydCgkZXZlbnQpXCI+XG4gICAgICAgICAgPG1yZC1zZWxlY3Qtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygc29ydGllck9wdGlvbmVuXCIgW3ZhbHVlXT1cIm9wdGlvbi5zY2hsdWVzc2VsXCIgbm9DaGVja2JveD57e29wdGlvbi5iZXplaWNobnVuZ319PC9tcmQtc2VsZWN0LW9wdGlvbj5cbiAgICAgICAgPC9tcmQtc2VsZWN0PlxuICAgICAgPC9tcmQtZm9ybS1maWVsZD5cbiAgICAgIDwhLS0gV2llIGluIGRlciBTY2hsYWdsaXN0ZTsgaW4gZGVyIFN0YW5kYXJkc29ydGllcnVuZyBnaWJ0IGVzIGtlaW5lIFJpY2h0dW5nIC0tPlxuICAgICAgPG1yZC1idXR0b24tdG9nZ2xlLWdyb3VwIGNsYXNzPVwibXJkLWRhdGVuLWxpc3RlLXJpY2h0dW5nXCIgc2ltcGxlIHByaW1hcnkgYm9yZGVyUmFkaXVzPVwiNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInJpY2h0dW5nXCIgW2Rpc2FibGVkXT1cIiFpc3RTb3J0aWVydFwiICh2YWx1ZUNoYW5nZSk9XCJyaWNodHVuZ0dlYWVuZGVydCgkZXZlbnQpXCI+XG4gICAgICAgIDxtcmQtYnV0dG9uIHRvZ2dsZS1idXR0b24gaWNvblNpemU9XCIxLjVlbVwiIFtjdXN0b21Ub2dnbGVTZWxlY3RlZFRleHRDb2xvcl09XCJNcmRDb2xvci5XRUlTU1wiIHZhbHVlPVwiYXNjXCIgdG9vbHRpcCB0b29sdGlwVGV4dD1cIkF1ZnN0ZWlnZW5kXCI+XG4gICAgICAgICAgPG1yZC1pY29uIHN2Z0ljb249XCJtcmQ6cGZlaWwtdXBcIj48L21yZC1pY29uPlxuICAgICAgICA8L21yZC1idXR0b24+XG4gICAgICAgIDxtcmQtYnV0dG9uIHRvZ2dsZS1idXR0b24gaWNvblNpemU9XCIxLjVlbVwiIFtjdXN0b21Ub2dnbGVTZWxlY3RlZFRleHRDb2xvcl09XCJNcmRDb2xvci5XRUlTU1wiIHZhbHVlPVwiZGVzY1wiIHRvb2x0aXAgdG9vbHRpcFRleHQ9XCJBYnN0ZWlnZW5kXCI+XG4gICAgICAgICAgPG1yZC1pY29uIHN2Z0ljb249XCJtcmQ6cGZlaWwtZG93blwiPjwvbXJkLWljb24+XG4gICAgICAgIDwvbXJkLWJ1dHRvbj5cbiAgICAgIDwvbXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXA+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIlttcmREYXRlbkxpc3RlRmlsdGVyXVwiPjwvbmctY29udGVudD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwibXJkLWRhdGVuLWxpc3RlLXNwYWx0ZW5rb2VwZmVcIiBbbXJkU29ydF09XCJrb3BmU29ydGllcnVuZyA/IHNvcnRpZXJ1bmcgOiBudWxsXCIgbXJkU29ydENsZWFyIFttcmRTb3J0RGlzYWJsZWRdPVwiIWtvcGZTb3J0aWVydW5nXCJcbiAgICAgKG1yZFNvcnRDaGFuZ2UpPVwic29ydGllcnVuZ1NldHplbigkZXZlbnQpXCI+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHNwYWx0ZSBvZiBzcGFsdGVuXCI+XG4gICAgPGRpdiAqbmdJZj1cImtvcGZTb3J0aWVydW5nICYmIHNwYWx0ZS5zb3J0aWVyYmFyOyBlbHNlIG9obmVTb3J0aWVydW5nXCJcbiAgICAgICAgIGNsYXNzPVwibXJkLWRhdGVuLWxpc3RlLXNwYWx0ZVwiIFttcmQtc29ydC1oZWFkZXJdPVwic3BhbHRlLnNjaGx1ZXNzZWxcIlxuICAgICAgICAgW2Fycm93UG9zaXRpb25dPVwic3BhbHRlLmF1c3JpY2h0dW5nID09PSAncmVjaHRzJyA/ICdiZWZvcmUnIDogJ2FmdGVyJ1wiXG4gICAgICAgICBbY2xhc3MubXJkLWRhdGVuLWxpc3RlLXNwYWx0ZS1mbGV4XT1cInNwYWx0ZS5mbGV4XCIgW3N0eWxlLndpZHRoLnB4XT1cInNwYWx0ZS5icmVpdGVcIlxuICAgICAgICAgW2NsYXNzLm1yZC1kYXRlbi1saXN0ZS1taXR0ZV09XCJzcGFsdGUuYXVzcmljaHR1bmcgPT09ICdtaXR0ZSdcIiBbY2xhc3MubXJkLWRhdGVuLWxpc3RlLXJlY2h0c109XCJzcGFsdGUuYXVzcmljaHR1bmcgPT09ICdyZWNodHMnXCI+XG4gICAgICB7e3NwYWx0ZS50aXRlbH19XG4gICAgPC9kaXY+XG4gICAgPG5nLXRlbXBsYXRlICNvaG5lU29ydGllcnVuZz5cbiAgICAgIDxkaXYgY2xhc3M9XCJtcmQtZGF0ZW4tbGlzdGUtc3BhbHRlXCIgW2NsYXNzLm1yZC1kYXRlbi1saXN0ZS1zcGFsdGUtZmxleF09XCJzcGFsdGUuZmxleFwiIFtzdHlsZS53aWR0aC5weF09XCJzcGFsdGUuYnJlaXRlXCJcbiAgICAgICAgICAgW2NsYXNzLm1yZC1kYXRlbi1saXN0ZS1taXR0ZV09XCJzcGFsdGUuYXVzcmljaHR1bmcgPT09ICdtaXR0ZSdcIiBbY2xhc3MubXJkLWRhdGVuLWxpc3RlLXJlY2h0c109XCJzcGFsdGUuYXVzcmljaHR1bmcgPT09ICdyZWNodHMnXCI+XG4gICAgICAgIHt7c3BhbHRlLnRpdGVsfX1cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG5cbjxkaXYgKm5nSWY9XCJsYWVkdFwiIGNsYXNzPVwibXJkLWRhdGVuLWxpc3RlLWhpbndlaXNcIj5cbiAgPG1yZC1wcm9ncmVzcy1zcGlubmVyPjwvbXJkLXByb2dyZXNzLXNwaW5uZXI+XG48L2Rpdj5cbjxkaXYgKm5nSWY9XCIhbGFlZHQgJiYgYW5nZXplaWd0Lmxlbmd0aCA9PT0gMFwiIGNsYXNzPVwibXJkLWRhdGVuLWxpc3RlLWhpbndlaXNcIj57e2xlZXJUZXh0fX08L2Rpdj5cblxuPG1yZC1saXN0ICpuZ0lmPVwiIWxhZWR0XCIgW2NsYXNzLm1yZC1kYXRlbi1saXN0ZS1sZWVyXT1cImFuZ2V6ZWlndC5sZW5ndGggPT09IDBcIiBjbGFzcz1cIm1yZC1kYXRlbi1saXN0ZS1saXN0ZVwiIGRpdmlkZXIgc2VsZWN0YWJsZSB2aXJ0dWFsU2Nyb2xsXG4gICAgICAgICAgW2l0ZW1zXT1cImFuZ2V6ZWlndFwiIFtpdGVtU2l6ZV09XCJ6ZWlsZW5ob2VoZVwiIFt0cmFja0J5XT1cInRyYWNrQnlcIiBbYW5nZWhlZnRldF09XCJhdXNnZXdhZWhsdFwiPlxuICA8bmctdGVtcGxhdGUgW21yZExpc3RJdGVtXT1cImFuZ2V6ZWlndFwiIGxldC1laW50cmFnPlxuICAgIDxtcmQtbGlzdC1pdGVtIFtzZWxlY3RlZF09XCJpc3RBdXNnZXdhZWhsdChlaW50cmFnKVwiIFtjbGFzcy5tcmQtZGF0ZW4tbGlzdGUtaW5ha3Rpdl09XCJpc3RJbmFrdGl2KGVpbnRyYWcpXCIgKGNsaWNrKT1cImF1c3dhaGwuZW1pdChlaW50cmFnKVwiPlxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgc3BhbHRlIG9mIHNwYWx0ZW5cIiBjbGFzcz1cIm1yZC1kYXRlbi1saXN0ZS1zcGFsdGVcIiBbY2xhc3MubXJkLWRhdGVuLWxpc3RlLXNwYWx0ZS1mbGV4XT1cInNwYWx0ZS5mbGV4XCIgW3N0eWxlLndpZHRoLnB4XT1cInNwYWx0ZS5icmVpdGVcIlxuICAgICAgICAgICBbY2xhc3MubXJkLWRhdGVuLWxpc3RlLW1pdHRlXT1cInNwYWx0ZS5hdXNyaWNodHVuZyA9PT0gJ21pdHRlJ1wiIFtjbGFzcy5tcmQtZGF0ZW4tbGlzdGUtcmVjaHRzXT1cInNwYWx0ZS5hdXNyaWNodHVuZyA9PT0gJ3JlY2h0cydcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInplbGxlKHNwYWx0ZS5zY2hsdWVzc2VsKSBhcyB0ZW1wbGF0ZTsgZWxzZSBzdGFuZGFyZFplbGxlXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlOyBjb250ZXh0OiB7JGltcGxpY2l0OiBlaW50cmFnLCBhdXNnZXdhZWhsdDogaXN0QXVzZ2V3YWVobHQoZWludHJhZyl9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctdGVtcGxhdGUgI3N0YW5kYXJkWmVsbGU+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtcmQtZGF0ZW4tbGlzdGUtdGV4dFwiIFtsaW5lLWNsYW1wXT1cIjJcIiBbbXJkVG9vbFRpcF09XCJ0ZXh0KHNwYWx0ZSwgZWludHJhZylcIiBzaG93SWZUcnVuY2F0ZWQ+e3t0ZXh0KHNwYWx0ZSwgZWludHJhZyl9fTwvc3Bhbj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvbXJkLWxpc3QtaXRlbT5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvbXJkLWxpc3Q+XG5cbjxuZy1jb250ZW50IHNlbGVjdD1cIlttcmREYXRlbkxpc3RlQWt0aW9uZW5dXCI+PC9uZy1jb250ZW50PlxuIl19