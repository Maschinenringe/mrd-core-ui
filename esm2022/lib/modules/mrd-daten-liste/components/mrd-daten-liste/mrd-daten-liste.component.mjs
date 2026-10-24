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
        } }, inputs: { eintraege: "eintraege", spalten: "spalten", identifier: "identifier", ausgewaehlt: "ausgewaehlt", zeilenhoehe: ["zeilenhoehe", "zeilenhoehe", numberAttribute], suche: ["suche", "suche", booleanAttribute], suchPlatzhalter: "suchPlatzhalter", suchfelder: "suchfelder", suchMindestlaenge: ["suchMindestlaenge", "suchMindestlaenge", numberAttribute], suchVerzoegerung: ["suchVerzoegerung", "suchVerzoegerung", numberAttribute], kopfSortierung: ["kopfSortierung", "kopfSortierung", booleanAttribute], sortierAuswahl: ["sortierAuswahl", "sortierAuswahl", booleanAttribute], sortierung: "sortierung", inaktivPruefung: "inaktivPruefung", inaktiveAusblenden: ["inaktiveAusblenden", "inaktiveAusblenden", booleanAttribute], betriebe: "betriebe", betriebSchluessel: "betriebSchluessel", betriebFilter: "betriebFilter", laedt: ["laedt", "laedt", booleanAttribute], leerText: "leerText", volleBreite: ["volleBreite", "volleBreite", booleanAttribute] }, outputs: { auswahl: "auswahl", sortierungChange: "sortierungChange", inaktiveAusblendenChange: "inaktiveAusblendenChange", betriebFilterChange: "betriebFilterChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 10, vars: 8, consts: [[1, "mrd-daten-liste-kopfbereich"], ["class", "mrd-daten-liste-suche", 4, "ngIf"], ["class", "mrd-daten-liste-auswahlzeile", 4, "ngIf"], ["mrdSortClear", "", 1, "mrd-daten-liste-spaltenkoepfe", 3, "mrdSort", "mrdSortDisabled", "mrdSortChange"], [4, "ngFor", "ngForOf"], ["class", "mrd-daten-liste-hinweis", 4, "ngIf"], ["class", "mrd-daten-liste-liste", "divider", "", "selectable", "", "virtualScroll", "", 3, "mrd-daten-liste-leer", "items", "itemSize", "trackBy", "angeheftet", 4, "ngIf"], [1, "mrd-daten-liste-suche"], ["float", "never"], [3, "value", "valueChange"], ["icon", "suche"], [1, "mrd-daten-liste-auswahlzeile"], ["class", "mrd-daten-liste-betriebe", 4, "ngIf"], [4, "ngIf"], [1, "mrd-daten-liste-betriebe"], ["float", "always"], ["multiple", "", 3, "value", "valueChange"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "mrd-daten-liste-sortierung"], ["noCheckbox", "", 3, "value", 4, "ngFor", "ngForOf"], ["simple", "", "primary", "", "borderRadius", "6", 1, "mrd-daten-liste-richtung", 3, "value", "disabled", "valueChange"], ["toggle-button", "", "iconSize", "1.5em", "value", "asc", "tooltip", "", "tooltipText", "Aufsteigend", 3, "customToggleSelectedTextColor"], ["svgIcon", "mrd:pfeil-up"], ["toggle-button", "", "iconSize", "1.5em", "value", "desc", "tooltip", "", "tooltipText", "Absteigend", 3, "customToggleSelectedTextColor"], ["svgIcon", "mrd:pfeil-down"], ["noCheckbox", "", 3, "value"], ["class", "mrd-daten-liste-spalte", 3, "mrd-sort-header", "arrowPosition", "mrd-daten-liste-spalte-flex", "width", "mrd-daten-liste-mitte", "mrd-daten-liste-rechts", 4, "ngIf", "ngIfElse"], ["ohneSortierung", ""], [1, "mrd-daten-liste-spalte", 3, "mrd-sort-header", "arrowPosition"], [1, "mrd-daten-liste-spalte"], [1, "mrd-daten-liste-hinweis"], ["divider", "", "selectable", "", "virtualScroll", "", 1, "mrd-daten-liste-liste", 3, "items", "itemSize", "trackBy", "angeheftet"], [3, "mrdListItem"], [3, "selected", "click"], ["class", "mrd-daten-liste-spalte", 3, "mrd-daten-liste-spalte-flex", "width", "mrd-daten-liste-mitte", "mrd-daten-liste-rechts", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["standardZelle", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["showIfTruncated", "", 1, "mrd-daten-liste-text", 3, "line-clamp", "mrdToolTip"]], template: function MrdDatenListeComponent_Template(rf, ctx) { if (rf & 1) {
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
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-daten-liste-kopfbereich\">\n  <mrd-form-field *ngIf=\"suche\" class=\"mrd-daten-liste-suche\">\n    <mrd-label float=\"never\">{{suchPlatzhalter}}</mrd-label>\n    <mrd-input [value]=\"suchtext\" (valueChange)=\"suchtextGeaendert($event)\"></mrd-input>\n    <mrd-suffix><mrd-icon icon=\"suche\"></mrd-icon></mrd-suffix>\n  </mrd-form-field>\n\n  <div *ngIf=\"betriebFilterSichtbar || sortierAuswahl\" class=\"mrd-daten-liste-auswahlzeile\">\n    <mrd-form-field *ngIf=\"betriebFilterSichtbar\" class=\"mrd-daten-liste-betriebe\">\n      <mrd-label float=\"always\">Betriebe</mrd-label>\n      <mrd-select multiple [value]=\"betriebAuswahl\" (valueChange)=\"betriebFilterGeaendert($event)\">\n        <mrd-select-option [value]=\"ALLE_BETRIEBE\">Alle</mrd-select-option>\n        <mrd-select-option *ngFor=\"let betrieb of betriebe\" [value]=\"betrieb.id\">{{betrieb.name}}</mrd-select-option>\n      </mrd-select>\n    </mrd-form-field>\n    <ng-container *ngIf=\"sortierAuswahl\">\n      <mrd-form-field class=\"mrd-daten-liste-sortierung\">\n        <mrd-label float=\"always\">Sortierung</mrd-label>\n        <mrd-select [value]=\"sortierSchluessel\" (valueChange)=\"sortierSchluesselGeaendert($event)\">\n          <mrd-select-option *ngFor=\"let option of sortierOptionen\" [value]=\"option.schluessel\" noCheckbox>{{option.bezeichnung}}</mrd-select-option>\n        </mrd-select>\n      </mrd-form-field>\n      <!-- Wie in der Schlagliste; in der Standardsortierung gibt es keine Richtung -->\n      <mrd-button-toggle-group class=\"mrd-daten-liste-richtung\" simple primary borderRadius=\"6\"\n                               [value]=\"richtung\" [disabled]=\"!istSortiert\" (valueChange)=\"richtungGeaendert($event)\">\n        <mrd-button toggle-button iconSize=\"1.5em\" [customToggleSelectedTextColor]=\"MrdColor.WEISS\" value=\"asc\" tooltip tooltipText=\"Aufsteigend\">\n          <mrd-icon svgIcon=\"mrd:pfeil-up\"></mrd-icon>\n        </mrd-button>\n        <mrd-button toggle-button iconSize=\"1.5em\" [customToggleSelectedTextColor]=\"MrdColor.WEISS\" value=\"desc\" tooltip tooltipText=\"Absteigend\">\n          <mrd-icon svgIcon=\"mrd:pfeil-down\"></mrd-icon>\n        </mrd-button>\n      </mrd-button-toggle-group>\n    </ng-container>\n  </div>\n\n  <ng-content select=\"[mrdDatenListeFilter]\"></ng-content>\n</div>\n\n<div class=\"mrd-daten-liste-spaltenkoepfe\" [mrdSort]=\"kopfSortierung ? sortierung : null\" mrdSortClear [mrdSortDisabled]=\"!kopfSortierung\"\n     (mrdSortChange)=\"sortierungSetzen($event)\">\n  <ng-container *ngFor=\"let spalte of spalten\">\n    <div *ngIf=\"kopfSortierung && spalte.sortierbar; else ohneSortierung\"\n         class=\"mrd-daten-liste-spalte\" [mrd-sort-header]=\"spalte.schluessel\"\n         [arrowPosition]=\"spalte.ausrichtung === 'rechts' ? 'before' : 'after'\"\n         [class.mrd-daten-liste-spalte-flex]=\"spalte.flex\" [style.width.px]=\"spalte.breite\"\n         [class.mrd-daten-liste-mitte]=\"spalte.ausrichtung === 'mitte'\" [class.mrd-daten-liste-rechts]=\"spalte.ausrichtung === 'rechts'\">\n      {{spalte.titel}}\n    </div>\n    <ng-template #ohneSortierung>\n      <div class=\"mrd-daten-liste-spalte\" [class.mrd-daten-liste-spalte-flex]=\"spalte.flex\" [style.width.px]=\"spalte.breite\"\n           [class.mrd-daten-liste-mitte]=\"spalte.ausrichtung === 'mitte'\" [class.mrd-daten-liste-rechts]=\"spalte.ausrichtung === 'rechts'\">\n        {{spalte.titel}}\n      </div>\n    </ng-template>\n  </ng-container>\n</div>\n\n<div *ngIf=\"laedt\" class=\"mrd-daten-liste-hinweis\">\n  <mrd-progress-spinner></mrd-progress-spinner>\n</div>\n<div *ngIf=\"!laedt && angezeigt.length === 0\" class=\"mrd-daten-liste-hinweis\">{{leerText}}</div>\n\n<mrd-list *ngIf=\"!laedt\" [class.mrd-daten-liste-leer]=\"angezeigt.length === 0\" class=\"mrd-daten-liste-liste\" divider selectable virtualScroll\n          [items]=\"angezeigt\" [itemSize]=\"zeilenhoehe\" [trackBy]=\"trackBy\" [angeheftet]=\"ausgewaehlt\">\n  <ng-template [mrdListItem]=\"angezeigt\" let-eintrag>\n    <mrd-list-item [selected]=\"istAusgewaehlt(eintrag)\" [class.mrd-daten-liste-inaktiv]=\"istInaktiv(eintrag)\" (click)=\"auswahl.emit(eintrag)\">\n      <div *ngFor=\"let spalte of spalten\" class=\"mrd-daten-liste-spalte\" [class.mrd-daten-liste-spalte-flex]=\"spalte.flex\" [style.width.px]=\"spalte.breite\"\n           [class.mrd-daten-liste-mitte]=\"spalte.ausrichtung === 'mitte'\" [class.mrd-daten-liste-rechts]=\"spalte.ausrichtung === 'rechts'\">\n        <ng-container *ngIf=\"zelle(spalte.schluessel) as template; else standardZelle\">\n          <ng-container *ngTemplateOutlet=\"template; context: {$implicit: eintrag, ausgewaehlt: istAusgewaehlt(eintrag)}\"></ng-container>\n        </ng-container>\n        <ng-template #standardZelle>\n          <span class=\"mrd-daten-liste-text\" [line-clamp]=\"2\" [mrdToolTip]=\"text(spalte, eintrag)\" showIfTruncated>{{text(spalte, eintrag)}}</span>\n        </ng-template>\n      </div>\n    </mrd-list-item>\n  </ng-template>\n</mrd-list>\n\n<ng-content select=\"[mrdDatenListeAktionen]\"></ng-content>\n", styles: [":host{display:flex;flex-direction:column;box-sizing:border-box;height:100%;min-height:0;width:-moz-max-content;width:max-content;max-width:100%}:host(.mrd-daten-liste-volle-breite),:host-context(.mrd-sidenav-mobile){width:100%}.mrd-daten-liste-kopfbereich,.mrd-daten-liste-liste,.mrd-daten-liste-hinweis,:host ::ng-deep [mrdDatenListeFilter]{box-sizing:border-box;width:0;min-width:100%}:host ::ng-deep [mrdDatenListeAktionen]{box-sizing:border-box;min-width:100%}.mrd-daten-liste-kopfbereich{display:flex;flex-direction:column;gap:8px;padding:8px 16px}.mrd-daten-liste-kopfbereich:empty{display:none}.mrd-daten-liste-suche{width:100%}.mrd-daten-liste-auswahlzeile{display:flex;flex-direction:row;align-items:center;gap:8px}.mrd-daten-liste-betriebe,.mrd-daten-liste-sortierung{flex:1 1 0;min-width:0}.mrd-daten-liste-richtung{flex:0 0 80px}.mrd-daten-liste-richtung ::ng-deep mrd-button .mrd-button-container mrd-icon{margin-right:0}.mrd-daten-liste-spaltenkoepfe{display:flex;flex-direction:row;align-items:center;flex:0 0 auto;box-sizing:border-box;height:40px;padding:0 16px;overflow:hidden;scrollbar-gutter:stable;background-color:#65b32e;color:#fff;border-bottom:1px solid #FFFFFF;font-size:16px}.mrd-daten-liste-spalte{display:flex;align-items:center;flex:0 0 auto;box-sizing:border-box;min-width:0;padding-right:8px;overflow:hidden}.mrd-daten-liste-spalte.mrd-daten-liste-spalte-flex{flex:1 0 auto}.mrd-daten-liste-spalte.mrd-daten-liste-mitte{justify-content:center}.mrd-daten-liste-spalte.mrd-daten-liste-rechts{justify-content:flex-end}.mrd-daten-liste-spalte:last-child{padding-right:0}.mrd-daten-liste-text{overflow-wrap:anywhere}.mrd-daten-liste-liste{flex:1 1 auto;min-height:0}.mrd-daten-liste-liste.mrd-daten-liste-leer{display:none}:host .mrd-daten-liste-liste ::ng-deep .mrd-list-virtual-scroll{scrollbar-gutter:stable}.mrd-daten-liste-inaktiv:not(.mrd-list-item-selected){background-color:#ebeff3;color:#949ea7}.mrd-daten-liste-hinweis{display:flex;flex:1 1 auto;align-items:center;justify-content:center;padding:16px;color:#949ea7}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWRhdGVuLWxpc3RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZGF0ZW4tbGlzdGUvY29tcG9uZW50cy9tcmQtZGF0ZW4tbGlzdGUvbXJkLWRhdGVuLWxpc3RlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZGF0ZW4tbGlzdGUvY29tcG9uZW50cy9tcmQtZGF0ZW4tbGlzdGUvbXJkLWRhdGVuLWxpc3RlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBMEQsU0FBUyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyUCxPQUFPLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzNELE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFNUYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFFckcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1J6RSx5Q0FBNEQsbUJBQUE7SUFDakMsWUFBbUI7SUFBQSxpQkFBWTtJQUN4RCxvQ0FBd0U7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QUM7WUFFcEIsZUFBZTtrQkFBOUIsS0FBSztZQUdVLFVBQVU7a0JBQXpCLEtBQUs7WUFHc0MsaUJBQWlCO2tCQUE1RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBQztZQUVTLGdCQUFnQjtrQkFBM0QsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUM7WUFHVSxjQUFjO2tCQUExRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBR1MsY0FBYztrQkFBMUQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUdwQixVQUFVO2tCQUF6QixLQUFLO1lBR1UsZUFBZTtrQkFBOUIsS0FBSztZQUV1QyxrQkFBa0I7a0JBQTlELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFHcEIsUUFBUTtrQkFBdkIsS0FBSztZQUdVLGlCQUFpQjtrQkFBaEMsS0FBSztZQUdVLGFBQWE7a0JBQTVCLEtBQUs7WUFFdUMsS0FBSztrQkFBakQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUVwQixRQUFRO2tCQUF2QixLQUFLO1lBR3VDLFdBQVc7a0JBQXZELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFHbkIsT0FBTztrQkFBdkIsTUFBTTtZQUVVLGdCQUFnQjtrQkFBaEMsTUFBTTtZQUVVLHdCQUF3QjtrQkFBeEMsTUFBTTtZQUVVLG1CQUFtQjtrQkFBbkMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBRdWVyeUxpc3QsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmLCBUcmFja0J5RnVuY3Rpb24sIFZpZXdDaGlsZCwgYm9vbGVhbkF0dHJpYnV0ZSwgbnVtYmVyQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlT2JqZWN0LCBTdWJzY3JpcHRpb25IYW5kbGVyIH0gZnJvbSAnbXJkLWNvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTXJkQ29sb3IgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vZW51bS9jb2xvci5lbnVtJztcbmltcG9ydCB7IE1yZExpc3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9tcmQtbGlzdC9jb21wb25lbnRzL21yZC1saXN0L21yZC1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNcmRTb3J0aWVydW5nIH0gZnJvbSAnLi4vLi4vLi4vbXJkLXNvcnQvY29tbW9uL21vZGVsL21yZC1zb3J0Lm1vZGVsJztcbmltcG9ydCB7IE1yZERhdGVuTGlzdGVaZWxsZURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9kaXJlY3RpdmUvbXJkLWRhdGVuLWxpc3RlLXplbGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNcmREYXRlbkxpc3RlQmV0cmllYiwgTXJkRGF0ZW5MaXN0ZVNvcnRpZXJPcHRpb24sIE1yZERhdGVuTGlzdGVTcGFsdGUsIE1yZERhdGVuTGlzdGVTdWNoZmVsZCwgTXJkRGF0ZW5MaXN0ZVdlcnQsIE1yZERhdGVuTGlzdGVaZWxsZUtvbnRleHQgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kZWwvbXJkLWRhdGVuLWxpc3RlLm1vZGVsJztcbmltcG9ydCB7IE1yZERhdGVuTGlzdGVVdGlsIH0gZnJvbSAnLi4vLi4vY29tbW9uL3V0aWwvbXJkLWRhdGVuLWxpc3RlLnV0aWwnO1xuXG4vKipcbiAqIExpc3RlIG1pdCBTcGFsdGVuIGZ1ZXIgU3RhbW1kYXRlbi1TZWl0ZW46IG9iZW4gU3VjaGUsIEJldHJpZWJzLUZpbHRlciwgU29ydGllcnVuZyB1bmQgZWlnZW5lIEZpbHRlciAoYFttcmREYXRlbkxpc3RlRmlsdGVyXWApLFxuICogaW4gZGVyIE1pdHRlIFNwYWx0ZW5rb2VwZmUgdW5kIHZpcnR1ZWxsZSBMaXN0ZSwgdW50ZW4gZWlnZW5lIEFrdGlvbmVuIChgW21yZERhdGVuTGlzdGVBa3Rpb25lbl1gKSwgZG9ydCBhdWNoIGRlclxuICogU2NoYWx0ZXIgYDxtcmQtZGF0ZW4tbGlzdGUtaW5ha3Rpdi1zY2hhbHRlcj5gLlxuICogRGllIEJyZWl0ZSBlcmdpYnQgc2ljaCBhdXMgU3BhbHRlbiB1bmQgQWt0aW9uZW47IGluIGVpbmVyIG1vYmlsZW4gYG1yZC1zaWRlbmF2YCBuaW1tdCBkaWUgTGlzdGUgZGllIHZvbGxlIEJyZWl0ZSBlaW4uXG4gKiBgZWludHJhZWdlYCBrb21tZW4gaW4gZGVyIFN0YW5kYXJkc29ydGllcnVuZzsgamVkZSBTb3J0aWVydW5nIGxhZXNzdCBzaWNoIHdpZWRlciBkYXJhdWYgenVydWVja3NldHplbi5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXJkLWRhdGVuLWxpc3RlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1kYXRlbi1saXN0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21yZC1kYXRlbi1saXN0ZS5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5tcmQtZGF0ZW4tbGlzdGUtdm9sbGUtYnJlaXRlXSc6ICd2b2xsZUJyZWl0ZSdcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTXJkRGF0ZW5MaXN0ZUNvbXBvbmVudDxUID0gYW55PiBleHRlbmRzIEJhc2VPYmplY3QgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU1RBTkRBUkQ6IHN0cmluZyA9ICdfX3N0YW5kYXJkJztcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBCRVRSSUVCOiBzdHJpbmcgPSAnX19iZXRyaWViJztcbiAgLyoqIE9wdGlvbiBcIkFsbGVcIiBpbSBCZXRyaWVicy1GaWx0ZXI7IHN0ZWh0IGZ1ZXIgZWluZW4gbGVlcmVuIEZpbHRlciAqL1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFMTEVfQkVUUklFQkU6IHN0cmluZyA9ICdfX2FsbGUnO1xuXG4gIHB1YmxpYyByZWFkb25seSBBTExFX0JFVFJJRUJFOiBzdHJpbmcgPSBNcmREYXRlbkxpc3RlQ29tcG9uZW50LkFMTEVfQkVUUklFQkU7XG4gIHB1YmxpYyByZWFkb25seSBNcmRDb2xvciA9IE1yZENvbG9yO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oTXJkRGF0ZW5MaXN0ZVplbGxlRGlyZWN0aXZlKSBwdWJsaWMgc2V0IHplbGxlbih2YWx1ZTogUXVlcnlMaXN0PE1yZERhdGVuTGlzdGVaZWxsZURpcmVjdGl2ZTxUPj4pIHtcbiAgICB0aGlzLnplbGxlblRlbXBsYXRlcyA9IG5ldyBNYXAoKHZhbHVlPy50b0FycmF5KCkgPz8gW10pLm1hcCgoemVsbGU6IE1yZERhdGVuTGlzdGVaZWxsZURpcmVjdGl2ZTxUPikgPT4gW3plbGxlLnNjaGx1ZXNzZWwsIHplbGxlLnRlbXBsYXRlUmVmXSkpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgQFZpZXdDaGlsZChNcmRMaXN0Q29tcG9uZW50KSBwcml2YXRlIGxpc3RlOiBNcmRMaXN0Q29tcG9uZW50PFQ+O1xuXG4gIC8qKiBJbiBkZXIgU3RhbmRhcmRzb3J0aWVydW5nLCB6LiBCLiBkaXJla3QgYXVzIGRlbSBTdG9yZSAqL1xuICBASW5wdXQoKSBwdWJsaWMgZWludHJhZWdlOiBUW10gPSBbXTtcblxuICBASW5wdXQoKSBwdWJsaWMgc3BhbHRlbjogTXJkRGF0ZW5MaXN0ZVNwYWx0ZTxUPltdID0gW107XG5cbiAgQElucHV0KCkgcHVibGljIGlkZW50aWZpZXI6IHN0cmluZyA9ICdpZCc7XG5cbiAgLyoqIEF1c2dld2FlaGx0ZXIgRWludHJhZzsgYmxlaWJ0IHNpY2h0YmFyIChhbmdlaGVmdGV0KSwgYXVjaCB3ZW5uIGVyIGhlcmF1c2dlc2Nyb2xsdCBpc3QgKi9cbiAgQElucHV0KCkgcHVibGljIGF1c2dld2FlaGx0OiBUID0gbnVsbDtcblxuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgcHVibGljIHplaWxlbmhvZWhlOiBudW1iZXIgPSA1NjtcblxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzdWNoZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgQElucHV0KCkgcHVibGljIHN1Y2hQbGF0emhhbHRlcjogc3RyaW5nID0gJ0R1cmNoc3VjaGVuJztcblxuICAvKiogT2huZSBBbmdhYmUgd2VyZGVuIGRpZSBXZXJ0ZSBhbGxlciBTcGFsdGVuIGR1cmNoc3VjaHQgKi9cbiAgQElucHV0KCkgcHVibGljIHN1Y2hmZWxkZXI6IE1yZERhdGVuTGlzdGVTdWNoZmVsZDxUPltdO1xuXG4gIC8qKiBLdWVyemVyZSBTdWNodGV4dGUgZmlsdGVybiBuaWNodCAqL1xuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgcHVibGljIHN1Y2hNaW5kZXN0bGFlbmdlOiBudW1iZXIgPSAxO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgc3VjaFZlcnpvZWdlcnVuZzogbnVtYmVyID0gMzAwO1xuXG4gIC8qKiBTb3J0aWVyZW4gcGVyIEtsaWNrIGF1ZiBkaWUgU3BhbHRlbmtvZXBmZSAoYHNvcnRpZXJiYXJgKTsgZGVyIGRyaXR0ZSBLbGljayBzdGVsbHQgZGllIFN0YW5kYXJkc29ydGllcnVuZyB3aWVkZXIgaGVyICovXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGtvcGZTb3J0aWVydW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFNvcnRpZXJlbiBwZXIgU2VsZWN0IChzb3J0aWVyYmFyZSBTcGFsdGVuLCBiZWkgbWVocmVyZW4gQmV0cmllYmVuIGF1Y2ggXCJCZXRyaWViXCIpIHVuZCBSaWNodHVuZ3MtU2NoYWx0ZXIgKi9cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc29ydGllckF1c3dhaGw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogTGVlciBvZGVyIG9obmUgUmljaHR1bmc6IFN0YW5kYXJkc29ydGllcnVuZyAqL1xuICBASW5wdXQoKSBwdWJsaWMgc29ydGllcnVuZzogTXJkU29ydGllcnVuZyA9IG51bGw7XG5cbiAgLyoqIEtlbm56ZWljaG5ldCBpbmFrdGl2ZSBFaW50cmFlZ2U7IG51ciBkYW1pdCBlcnNjaGVpbnQgYDxtcmQtZGF0ZW4tbGlzdGUtaW5ha3Rpdi1zY2hhbHRlcj5gICovXG4gIEBJbnB1dCgpIHB1YmxpYyBpbmFrdGl2UHJ1ZWZ1bmc6IChlaW50cmFnOiBUKSA9PiBib29sZWFuO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGluYWt0aXZlQXVzYmxlbmRlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBBYiB6d2VpIEJldHJpZWJlbiBlcnNjaGVpbnQgZGVyIEJldHJpZWJzLUZpbHRlciAqL1xuICBASW5wdXQoKSBwdWJsaWMgYmV0cmllYmU6IE1yZERhdGVuTGlzdGVCZXRyaWViW10gPSBbXTtcblxuICAvKiogRWludHJhZWdlIG9obmUgQmV0cmllYiAoYmV0cmllYnN1ZWJlcmdyZWlmZW5kKSBibGVpYmVuIGJlaSBqZWRlbSBCZXRyaWVicy1GaWx0ZXIgc2ljaHRiYXIgKi9cbiAgQElucHV0KCkgcHVibGljIGJldHJpZWJTY2hsdWVzc2VsOiBzdHJpbmcgPSAnaWRCZXRyaWViJztcblxuICAvKiogTGVlcjogYWxsZSBCZXRyaWViZSAqL1xuICBASW5wdXQoKSBwdWJsaWMgYmV0cmllYkZpbHRlcjogbnVtYmVyW10gPSBbXTtcblxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBsYWVkdDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBsZWVyVGV4dDogc3RyaW5nID0gJ0tlaW5lIEVpbnRyw6RnZSBnZWZ1bmRlbic7XG5cbiAgLyoqIFZvbGxlIEJyZWl0ZSBzdGF0dCBCcmVpdGUgYXVzIGRlbiBTcGFsdGVuIChtb2JpbCBpbiBlaW5lciBgbXJkLXNpZGVuYXZgIGF1dG9tYXRpc2NoKSAqL1xuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyB2b2xsZUJyZWl0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBLbGljayBhdWYgZWluZSBaZWlsZTsgb2Igc2llIGF1c2dld2FlaGx0IHdpcmQsIGVudHNjaGVpZGV0IGRlciBBdWZydWZlciB1ZWJlciBgYXVzZ2V3YWVobHRgICovXG4gIEBPdXRwdXQoKSBwdWJsaWMgYXVzd2FobDogRXZlbnRFbWl0dGVyPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuXG4gIEBPdXRwdXQoKSBwdWJsaWMgc29ydGllcnVuZ0NoYW5nZTogRXZlbnRFbWl0dGVyPE1yZFNvcnRpZXJ1bmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxNcmRTb3J0aWVydW5nPigpO1xuXG4gIEBPdXRwdXQoKSBwdWJsaWMgaW5ha3RpdmVBdXNibGVuZGVuQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQE91dHB1dCgpIHB1YmxpYyBiZXRyaWViRmlsdGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXJbXT4oKTtcblxuICBwdWJsaWMgYW5nZXplaWd0OiBUW10gPSBbXTtcbiAgLyoqIFdlcnQgZGVzIEJldHJpZWJzLVNlbGVjdHM7IG9obmUgRmlsdGVyIHN0ZWh0IGRvcnQgXCJBbGxlXCIgKHN0YWJpbCwgZGFtaXQgZGFzIFNlbGVjdCBuaWNodCBiZWkgamVkZW0gRHVyY2hsYXVmIG5ldSBzZXR6dCkgKi9cbiAgcHVibGljIGJldHJpZWJBdXN3YWhsOiAobnVtYmVyIHwgc3RyaW5nKVtdID0gW01yZERhdGVuTGlzdGVDb21wb25lbnQuQUxMRV9CRVRSSUVCRV07XG4gIHB1YmxpYyBzdWNodGV4dDogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBzb3J0aWVyT3B0aW9uZW46IE1yZERhdGVuTGlzdGVTb3J0aWVyT3B0aW9uW10gPSBbXTtcblxuICBwdWJsaWMgcmVhZG9ubHkgdHJhY2tCeTogVHJhY2tCeUZ1bmN0aW9uPFQ+ID0gKF86IG51bWJlciwgZWludHJhZzogVCkgPT4gdGhpcy5pZFZvbihlaW50cmFnKTtcblxuICBwcml2YXRlIHplbGxlblRlbXBsYXRlczogTWFwPHN0cmluZywgVGVtcGxhdGVSZWY8TXJkRGF0ZW5MaXN0ZVplbGxlS29udGV4dDxUPj4+ID0gbmV3IE1hcCgpO1xuICBwcml2YXRlIHdpcmtzYW1lclN1Y2h0ZXh0OiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSByZWFkb25seSBzdWNodGV4dCQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLndhdGNoKHRoaXMuc3VjaHRleHQkLnBpcGUoZGVib3VuY2UoKCkgPT4gdGltZXIodGhpcy5zdWNoVmVyem9lZ2VydW5nKSkpLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLndpcmtzYW1lclN1Y2h0ZXh0ID0gdGV4dC5sZW5ndGggPj0gdGhpcy5zdWNoTWluZGVzdGxhZW5nZSA/IHRleHQgOiAnJztcbiAgICAgIHRoaXMuYWt0dWFsaXNpZXJlbigpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWydzcGFsdGVuJ10gfHwgY2hhbmdlc1snYmV0cmllYmUnXSkge1xuICAgICAgdGhpcy5zb3J0aWVyT3B0aW9uZW5CZXJlY2huZW4oKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ2JldHJpZWJGaWx0ZXInXSkge1xuICAgICAgdGhpcy5iZXRyaWViQXVzd2FobFNldHplbigpO1xuICAgIH1cbiAgICB0aGlzLmFrdHVhbGlzaWVyZW4oKTtcbiAgICBpZiAoY2hhbmdlc1snYXVzZ2V3YWVobHQnXT8uY3VycmVudFZhbHVlKSB7XG4gICAgICAvLyBOYWNoIGRlbSBSZW5kZXJuLCBkYW1pdCBkaWUgdmlydHVlbGxlIExpc3RlIGlocmUgSG9laGUga2VubnRcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy56dXJBdXN3YWhsU2Nyb2xsZW4oKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBiZXRyaWViRmlsdGVyU2ljaHRiYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICh0aGlzLmJldHJpZWJlPy5sZW5ndGggPz8gMCkgPiAxO1xuICB9XG5cbiAgcHVibGljIGdldCBzb3J0aWVyU2NobHVlc3NlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmlzdFNvcnRpZXJ0ID8gdGhpcy5zb3J0aWVydW5nLmFjdGl2ZSA6IE1yZERhdGVuTGlzdGVDb21wb25lbnQuU1RBTkRBUkQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFic3RlaWdlbmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXN0U29ydGllcnQgJiYgdGhpcy5zb3J0aWVydW5nLmRpcmVjdGlvbiA9PT0gJ2Rlc2MnO1xuICB9XG5cbiAgcHVibGljIGdldCByaWNodHVuZygpOiAnYXNjJyB8ICdkZXNjJyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmlzdFNvcnRpZXJ0ID8gdGhpcy5zb3J0aWVydW5nLmRpcmVjdGlvbiBhcyAnYXNjJyB8ICdkZXNjJyA6IG51bGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzdFNvcnRpZXJ0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuc29ydGllcnVuZz8uYWN0aXZlICYmICEhdGhpcy5zb3J0aWVydW5nPy5kaXJlY3Rpb247XG4gIH1cblxuICAvKiogU3VtbWUgZGVyIFNwYWx0ZW5icmVpdGVuOyBkaWUgTGlzdGUgc2VsYnN0IGVyZ2Flbnp0IElubmVuYWJzdGFuZCB1bmQgU2Nyb2xsYmFyICovXG4gIHB1YmxpYyBnZXQgc3BhbHRlbkJyZWl0ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNwYWx0ZW4ucmVkdWNlKChzdW1tZTogbnVtYmVyLCBzcGFsdGU6IE1yZERhdGVuTGlzdGVTcGFsdGU8VD4pID0+IHN1bW1lICsgc3BhbHRlLmJyZWl0ZSwgMCk7XG4gIH1cblxuICBwdWJsaWMgemVsbGUoc2NobHVlc3NlbDogc3RyaW5nKTogVGVtcGxhdGVSZWY8TXJkRGF0ZW5MaXN0ZVplbGxlS29udGV4dDxUPj4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnplbGxlblRlbXBsYXRlcy5nZXQoc2NobHVlc3NlbCk7XG4gIH1cblxuICBwdWJsaWMgdGV4dChzcGFsdGU6IE1yZERhdGVuTGlzdGVTcGFsdGU8VD4sIGVpbnRyYWc6IFQpOiBzdHJpbmcge1xuICAgIHJldHVybiBNcmREYXRlbkxpc3RlVXRpbC5hbHNUZXh0KE1yZERhdGVuTGlzdGVVdGlsLndlcnRWb24oc3BhbHRlLCBlaW50cmFnKSk7XG4gIH1cblxuICBwdWJsaWMgaXN0QXVzZ2V3YWVobHQoZWludHJhZzogVCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmF1c2dld2FlaGx0ICE9PSBudWxsICYmIHRoaXMuYXVzZ2V3YWVobHQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmlkVm9uKGVpbnRyYWcpID09PSB0aGlzLmlkVm9uKHRoaXMuYXVzZ2V3YWVobHQpO1xuICB9XG5cbiAgcHVibGljIGlzdEluYWt0aXYoZWludHJhZzogVCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuaW5ha3RpdlBydWVmdW5nICYmIHRoaXMuaW5ha3RpdlBydWVmdW5nKGVpbnRyYWcpO1xuICB9XG5cbiAgcHVibGljIHN1Y2h0ZXh0R2VhZW5kZXJ0KHRleHQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3VjaHRleHQgPSB0ZXh0ID8/ICcnO1xuICAgIHRoaXMuc3VjaHRleHQkLm5leHQodGhpcy5zdWNodGV4dC50cmltKCkpO1xuICB9XG5cbiAgcHVibGljIHNvcnRpZXJ1bmdTZXR6ZW4oc29ydGllcnVuZzogTXJkU29ydGllcnVuZyk6IHZvaWQge1xuICAgIHRoaXMuc29ydGllcnVuZyA9IHNvcnRpZXJ1bmc/LmRpcmVjdGlvbiA/IHNvcnRpZXJ1bmcgOiBudWxsO1xuICAgIHRoaXMuYWt0dWFsaXNpZXJlbigpO1xuICAgIHRoaXMuc29ydGllcnVuZ0NoYW5nZS5lbWl0KHRoaXMuc29ydGllcnVuZyk7XG4gIH1cblxuICBwdWJsaWMgc29ydGllclNjaGx1ZXNzZWxHZWFlbmRlcnQoc2NobHVlc3NlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhbmRhcmQgPSAhc2NobHVlc3NlbCB8fCBzY2hsdWVzc2VsID09PSBNcmREYXRlbkxpc3RlQ29tcG9uZW50LlNUQU5EQVJEO1xuICAgIHRoaXMuc29ydGllcnVuZ1NldHplbihzdGFuZGFyZCA/IG51bGwgOiB7YWN0aXZlOiBzY2hsdWVzc2VsLCBkaXJlY3Rpb246IHRoaXMuYWJzdGVpZ2VuZCA/ICdkZXNjJyA6ICdhc2MnfSk7XG4gIH1cblxuICBwdWJsaWMgcmljaHR1bmdHZWFlbmRlcnQocmljaHR1bmc6ICdhc2MnIHwgJ2Rlc2MnKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXN0U29ydGllcnQgJiYgKHJpY2h0dW5nID09PSAnYXNjJyB8fCByaWNodHVuZyA9PT0gJ2Rlc2MnKSAmJiByaWNodHVuZyAhPT0gdGhpcy5yaWNodHVuZykge1xuICAgICAgdGhpcy5zb3J0aWVydW5nU2V0emVuKHthY3RpdmU6IHRoaXMuc29ydGllcnVuZy5hY3RpdmUsIGRpcmVjdGlvbjogcmljaHR1bmd9KTtcbiAgICB9XG4gIH1cblxuICAvKiogQXVjaCBmdWVyIGA8bXJkLWRhdGVuLWxpc3RlLWluYWt0aXYtc2NoYWx0ZXI+YCwgZGVyIGF1c3NlcmhhbGIgZGllc2VyIFZpZXcgbGllZ3QgKi9cbiAgcHVibGljIGluYWt0aXZlQXVzYmxlbmRlbkdlYWVuZGVydChhdXNibGVuZGVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pbmFrdGl2ZUF1c2JsZW5kZW4gPSBhdXNibGVuZGVuO1xuICAgIHRoaXMuYWt0dWFsaXNpZXJlbigpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuaW5ha3RpdmVBdXNibGVuZGVuQ2hhbmdlLmVtaXQoYXVzYmxlbmRlbik7XG4gIH1cblxuICAvKipcbiAgICogXCJBbGxlXCIgc2NobGllc3N0IGRpZSBlaW56ZWxuZW4gQmV0cmllYmUgYXVzIHVuZCB1bWdla2VocnQ6IFdpcmQgXCJBbGxlXCIgbmV1IGFuZ2VoYWt0LCBmYWVsbHQgZGVyIEZpbHRlciB3ZWc7XG4gICAqIHdpcmQgZWluIEJldHJpZWIgYW5nZWhha3QsIHZlcnNjaHdpbmRldCBcIkFsbGVcIi4gT2huZSBCZXRyaWViIHN0ZWh0IHdpZWRlciBcIkFsbGVcIiBkYS5cbiAgICovXG4gIHB1YmxpYyBiZXRyaWViRmlsdGVyR2VhZW5kZXJ0KHdlcnRlOiAobnVtYmVyIHwgc3RyaW5nKVtdKTogdm9pZCB7XG4gICAgY29uc3QgYWxsZU5ldTogYm9vbGVhbiA9ICh3ZXJ0ZSA/PyBbXSkuaW5jbHVkZXMoTXJkRGF0ZW5MaXN0ZUNvbXBvbmVudC5BTExFX0JFVFJJRUJFKSAmJlxuICAgICAgIXRoaXMuYmV0cmllYkF1c3dhaGwuaW5jbHVkZXMoTXJkRGF0ZW5MaXN0ZUNvbXBvbmVudC5BTExFX0JFVFJJRUJFKTtcbiAgICB0aGlzLmJldHJpZWJGaWx0ZXIgPSBhbGxlTmV1ID8gW10gOiAod2VydGUgPz8gW10pLmZpbHRlcigod2VydDogbnVtYmVyIHwgc3RyaW5nKSA9PiB3ZXJ0ICE9PSBNcmREYXRlbkxpc3RlQ29tcG9uZW50LkFMTEVfQkVUUklFQkUpIGFzIG51bWJlcltdO1xuICAgIHRoaXMuYmV0cmllYkF1c3dhaGxTZXR6ZW4oKTtcbiAgICB0aGlzLmFrdHVhbGlzaWVyZW4oKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmJldHJpZWJGaWx0ZXJDaGFuZ2UuZW1pdCh0aGlzLmJldHJpZWJGaWx0ZXIpO1xuICB9XG5cbiAgcHVibGljIHp1ckF1c3dhaGxTY3JvbGxlbigpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuYW5nZXplaWd0LmZpbmRJbmRleCgoZWludHJhZzogVCkgPT4gdGhpcy5pc3RBdXNnZXdhZWhsdChlaW50cmFnKSk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHRoaXMubGlzdGU/LnNjcm9sbFRvSW5kZXgoaW5kZXgsICduZWFyZXN0Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBha3R1YWxpc2llcmVuKCk6IHZvaWQge1xuICAgIGxldCBlaW50cmFlZ2U6IFRbXSA9IHRoaXMuZWludHJhZWdlID8/IFtdO1xuICAgIGlmICh0aGlzLmluYWt0aXZlQXVzYmxlbmRlbiAmJiB0aGlzLmluYWt0aXZQcnVlZnVuZykge1xuICAgICAgLy8gRGllIEF1c3dhaGwgYmxlaWJ0IHNpY2h0YmFyLCBhdWNoIHdlbm4gc2llIGdlcmFkZSBpbmFrdGl2IGdlc2V0enQgd3VyZGVcbiAgICAgIGVpbnRyYWVnZSA9IGVpbnRyYWVnZS5maWx0ZXIoKGVpbnRyYWc6IFQpID0+ICF0aGlzLmluYWt0aXZQcnVlZnVuZyhlaW50cmFnKSB8fCB0aGlzLmlzdEF1c2dld2FlaGx0KGVpbnRyYWcpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYmV0cmllYkZpbHRlclNpY2h0YmFyICYmIHRoaXMuYmV0cmllYkZpbHRlcj8ubGVuZ3RoKSB7XG4gICAgICBlaW50cmFlZ2UgPSBlaW50cmFlZ2UuZmlsdGVyKChlaW50cmFnOiBUKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkQmV0cmllYiA9IChlaW50cmFnIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVt0aGlzLmJldHJpZWJTY2hsdWVzc2VsXSBhcyBudW1iZXI7XG4gICAgICAgIHJldHVybiBpZEJldHJpZWIgPT09IG51bGwgfHwgaWRCZXRyaWViID09PSB1bmRlZmluZWQgfHwgdGhpcy5iZXRyaWViRmlsdGVyLmluY2x1ZGVzKGlkQmV0cmllYik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZWludHJhZWdlID0gTXJkRGF0ZW5MaXN0ZVV0aWwuc3VjaGVuKGVpbnRyYWVnZSwgdGhpcy53aXJrc2FtZXJTdWNodGV4dCwgdGhpcy5zdWNoZmVsZGVyID8/IHRoaXMuc3BhbHRlbi5tYXAoKHNwYWx0ZTogTXJkRGF0ZW5MaXN0ZVNwYWx0ZTxUPikgPT5cbiAgICAgIChlaW50cmFnOiBUKSA9PiBNcmREYXRlbkxpc3RlVXRpbC53ZXJ0Vm9uKHNwYWx0ZSwgZWludHJhZykpKTtcbiAgICBpZiAodGhpcy5pc3RTb3J0aWVydCkge1xuICAgICAgZWludHJhZWdlID0gTXJkRGF0ZW5MaXN0ZVV0aWwuc29ydGllcmVuKGVpbnRyYWVnZSwgdGhpcy5zb3J0aWVyd2VydCh0aGlzLnNvcnRpZXJ1bmcuYWN0aXZlKSwgdGhpcy5zb3J0aWVydW5nLmRpcmVjdGlvbiBhcyAnYXNjJyB8ICdkZXNjJyk7XG4gICAgfVxuICAgIHRoaXMuYW5nZXplaWd0ID0gZWludHJhZWdlO1xuICB9XG5cbiAgcHJpdmF0ZSBiZXRyaWViQXVzd2FobFNldHplbigpOiB2b2lkIHtcbiAgICB0aGlzLmJldHJpZWJBdXN3YWhsID0gdGhpcy5iZXRyaWViRmlsdGVyPy5sZW5ndGggPyBbLi4udGhpcy5iZXRyaWViRmlsdGVyXSA6IFtNcmREYXRlbkxpc3RlQ29tcG9uZW50LkFMTEVfQkVUUklFQkVdO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0aWVyT3B0aW9uZW5CZXJlY2huZW4oKTogdm9pZCB7XG4gICAgY29uc3Qgb3B0aW9uZW46IE1yZERhdGVuTGlzdGVTb3J0aWVyT3B0aW9uW10gPSBbe3NjaGx1ZXNzZWw6IE1yZERhdGVuTGlzdGVDb21wb25lbnQuU1RBTkRBUkQsIGJlemVpY2hudW5nOiAnU3RhbmRhcmQnfV07XG4gICAgKHRoaXMuc3BhbHRlbiA/PyBbXSkuZmlsdGVyKChzcGFsdGU6IE1yZERhdGVuTGlzdGVTcGFsdGU8VD4pID0+IHNwYWx0ZS5zb3J0aWVyYmFyKVxuICAgICAgLmZvckVhY2goKHNwYWx0ZTogTXJkRGF0ZW5MaXN0ZVNwYWx0ZTxUPikgPT4gb3B0aW9uZW4ucHVzaCh7c2NobHVlc3NlbDogc3BhbHRlLnNjaGx1ZXNzZWwsIGJlemVpY2hudW5nOiBzcGFsdGUudGl0ZWx9KSk7XG4gICAgaWYgKHRoaXMuYmV0cmllYkZpbHRlclNpY2h0YmFyKSB7XG4gICAgICBvcHRpb25lbi5wdXNoKHtzY2hsdWVzc2VsOiBNcmREYXRlbkxpc3RlQ29tcG9uZW50LkJFVFJJRUIsIGJlemVpY2hudW5nOiAnQmV0cmllYid9KTtcbiAgICB9XG4gICAgdGhpcy5zb3J0aWVyT3B0aW9uZW4gPSBvcHRpb25lbjtcbiAgfVxuXG4gIHByaXZhdGUgc29ydGllcndlcnQoc2NobHVlc3NlbDogc3RyaW5nKTogKGVpbnRyYWc6IFQpID0+IE1yZERhdGVuTGlzdGVXZXJ0IHtcbiAgICBpZiAoc2NobHVlc3NlbCA9PT0gTXJkRGF0ZW5MaXN0ZUNvbXBvbmVudC5CRVRSSUVCKSB7XG4gICAgICByZXR1cm4gKGVpbnRyYWc6IFQpID0+IHRoaXMuYmV0cmllYmUuZmluZCgoYmV0cmllYjogTXJkRGF0ZW5MaXN0ZUJldHJpZWIpID0+XG4gICAgICAgIGJldHJpZWIuaWQgPT09IChlaW50cmFnIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVt0aGlzLmJldHJpZWJTY2hsdWVzc2VsXSk/Lm5hbWU7XG4gICAgfVxuICAgIGNvbnN0IHNwYWx0ZSA9IHRoaXMuc3BhbHRlbi5maW5kKChzOiBNcmREYXRlbkxpc3RlU3BhbHRlPFQ+KSA9PiBzLnNjaGx1ZXNzZWwgPT09IHNjaGx1ZXNzZWwpO1xuICAgIHJldHVybiBzcGFsdGUgPyAoZWludHJhZzogVCkgPT4gTXJkRGF0ZW5MaXN0ZVV0aWwud2VydFZvbihzcGFsdGUsIGVpbnRyYWcpIDogKCkgPT4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaWRWb24oZWludHJhZzogVCk6IHVua25vd24ge1xuICAgIHJldHVybiAoZWludHJhZyBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik/Llt0aGlzLmlkZW50aWZpZXJdO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibXJkLWRhdGVuLWxpc3RlLWtvcGZiZXJlaWNoXCI+XG4gIDxtcmQtZm9ybS1maWVsZCAqbmdJZj1cInN1Y2hlXCIgY2xhc3M9XCJtcmQtZGF0ZW4tbGlzdGUtc3VjaGVcIj5cbiAgICA8bXJkLWxhYmVsIGZsb2F0PVwibmV2ZXJcIj57e3N1Y2hQbGF0emhhbHRlcn19PC9tcmQtbGFiZWw+XG4gICAgPG1yZC1pbnB1dCBbdmFsdWVdPVwic3VjaHRleHRcIiAodmFsdWVDaGFuZ2UpPVwic3VjaHRleHRHZWFlbmRlcnQoJGV2ZW50KVwiPjwvbXJkLWlucHV0PlxuICAgIDxtcmQtc3VmZml4PjxtcmQtaWNvbiBpY29uPVwic3VjaGVcIj48L21yZC1pY29uPjwvbXJkLXN1ZmZpeD5cbiAgPC9tcmQtZm9ybS1maWVsZD5cblxuICA8ZGl2ICpuZ0lmPVwiYmV0cmllYkZpbHRlclNpY2h0YmFyIHx8IHNvcnRpZXJBdXN3YWhsXCIgY2xhc3M9XCJtcmQtZGF0ZW4tbGlzdGUtYXVzd2FobHplaWxlXCI+XG4gICAgPG1yZC1mb3JtLWZpZWxkICpuZ0lmPVwiYmV0cmllYkZpbHRlclNpY2h0YmFyXCIgY2xhc3M9XCJtcmQtZGF0ZW4tbGlzdGUtYmV0cmllYmVcIj5cbiAgICAgIDxtcmQtbGFiZWwgZmxvYXQ9XCJhbHdheXNcIj5CZXRyaWViZTwvbXJkLWxhYmVsPlxuICAgICAgPG1yZC1zZWxlY3QgbXVsdGlwbGUgW3ZhbHVlXT1cImJldHJpZWJBdXN3YWhsXCIgKHZhbHVlQ2hhbmdlKT1cImJldHJpZWJGaWx0ZXJHZWFlbmRlcnQoJGV2ZW50KVwiPlxuICAgICAgICA8bXJkLXNlbGVjdC1vcHRpb24gW3ZhbHVlXT1cIkFMTEVfQkVUUklFQkVcIj5BbGxlPC9tcmQtc2VsZWN0LW9wdGlvbj5cbiAgICAgICAgPG1yZC1zZWxlY3Qtb3B0aW9uICpuZ0Zvcj1cImxldCBiZXRyaWViIG9mIGJldHJpZWJlXCIgW3ZhbHVlXT1cImJldHJpZWIuaWRcIj57e2JldHJpZWIubmFtZX19PC9tcmQtc2VsZWN0LW9wdGlvbj5cbiAgICAgIDwvbXJkLXNlbGVjdD5cbiAgICA8L21yZC1mb3JtLWZpZWxkPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzb3J0aWVyQXVzd2FobFwiPlxuICAgICAgPG1yZC1mb3JtLWZpZWxkIGNsYXNzPVwibXJkLWRhdGVuLWxpc3RlLXNvcnRpZXJ1bmdcIj5cbiAgICAgICAgPG1yZC1sYWJlbCBmbG9hdD1cImFsd2F5c1wiPlNvcnRpZXJ1bmc8L21yZC1sYWJlbD5cbiAgICAgICAgPG1yZC1zZWxlY3QgW3ZhbHVlXT1cInNvcnRpZXJTY2hsdWVzc2VsXCIgKHZhbHVlQ2hhbmdlKT1cInNvcnRpZXJTY2hsdWVzc2VsR2VhZW5kZXJ0KCRldmVudClcIj5cbiAgICAgICAgICA8bXJkLXNlbGVjdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBzb3J0aWVyT3B0aW9uZW5cIiBbdmFsdWVdPVwib3B0aW9uLnNjaGx1ZXNzZWxcIiBub0NoZWNrYm94Pnt7b3B0aW9uLmJlemVpY2hudW5nfX08L21yZC1zZWxlY3Qtb3B0aW9uPlxuICAgICAgICA8L21yZC1zZWxlY3Q+XG4gICAgICA8L21yZC1mb3JtLWZpZWxkPlxuICAgICAgPCEtLSBXaWUgaW4gZGVyIFNjaGxhZ2xpc3RlOyBpbiBkZXIgU3RhbmRhcmRzb3J0aWVydW5nIGdpYnQgZXMga2VpbmUgUmljaHR1bmcgLS0+XG4gICAgICA8bXJkLWJ1dHRvbi10b2dnbGUtZ3JvdXAgY2xhc3M9XCJtcmQtZGF0ZW4tbGlzdGUtcmljaHR1bmdcIiBzaW1wbGUgcHJpbWFyeSBib3JkZXJSYWRpdXM9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwicmljaHR1bmdcIiBbZGlzYWJsZWRdPVwiIWlzdFNvcnRpZXJ0XCIgKHZhbHVlQ2hhbmdlKT1cInJpY2h0dW5nR2VhZW5kZXJ0KCRldmVudClcIj5cbiAgICAgICAgPG1yZC1idXR0b24gdG9nZ2xlLWJ1dHRvbiBpY29uU2l6ZT1cIjEuNWVtXCIgW2N1c3RvbVRvZ2dsZVNlbGVjdGVkVGV4dENvbG9yXT1cIk1yZENvbG9yLldFSVNTXCIgdmFsdWU9XCJhc2NcIiB0b29sdGlwIHRvb2x0aXBUZXh0PVwiQXVmc3RlaWdlbmRcIj5cbiAgICAgICAgICA8bXJkLWljb24gc3ZnSWNvbj1cIm1yZDpwZmVpbC11cFwiPjwvbXJkLWljb24+XG4gICAgICAgIDwvbXJkLWJ1dHRvbj5cbiAgICAgICAgPG1yZC1idXR0b24gdG9nZ2xlLWJ1dHRvbiBpY29uU2l6ZT1cIjEuNWVtXCIgW2N1c3RvbVRvZ2dsZVNlbGVjdGVkVGV4dENvbG9yXT1cIk1yZENvbG9yLldFSVNTXCIgdmFsdWU9XCJkZXNjXCIgdG9vbHRpcCB0b29sdGlwVGV4dD1cIkFic3RlaWdlbmRcIj5cbiAgICAgICAgICA8bXJkLWljb24gc3ZnSWNvbj1cIm1yZDpwZmVpbC1kb3duXCI+PC9tcmQtaWNvbj5cbiAgICAgICAgPC9tcmQtYnV0dG9uPlxuICAgICAgPC9tcmQtYnV0dG9uLXRvZ2dsZS1ncm91cD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW21yZERhdGVuTGlzdGVGaWx0ZXJdXCI+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJtcmQtZGF0ZW4tbGlzdGUtc3BhbHRlbmtvZXBmZVwiIFttcmRTb3J0XT1cImtvcGZTb3J0aWVydW5nID8gc29ydGllcnVuZyA6IG51bGxcIiBtcmRTb3J0Q2xlYXIgW21yZFNvcnREaXNhYmxlZF09XCIha29wZlNvcnRpZXJ1bmdcIlxuICAgICAobXJkU29ydENoYW5nZSk9XCJzb3J0aWVydW5nU2V0emVuKCRldmVudClcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3BhbHRlIG9mIHNwYWx0ZW5cIj5cbiAgICA8ZGl2ICpuZ0lmPVwia29wZlNvcnRpZXJ1bmcgJiYgc3BhbHRlLnNvcnRpZXJiYXI7IGVsc2Ugb2huZVNvcnRpZXJ1bmdcIlxuICAgICAgICAgY2xhc3M9XCJtcmQtZGF0ZW4tbGlzdGUtc3BhbHRlXCIgW21yZC1zb3J0LWhlYWRlcl09XCJzcGFsdGUuc2NobHVlc3NlbFwiXG4gICAgICAgICBbYXJyb3dQb3NpdGlvbl09XCJzcGFsdGUuYXVzcmljaHR1bmcgPT09ICdyZWNodHMnID8gJ2JlZm9yZScgOiAnYWZ0ZXInXCJcbiAgICAgICAgIFtjbGFzcy5tcmQtZGF0ZW4tbGlzdGUtc3BhbHRlLWZsZXhdPVwic3BhbHRlLmZsZXhcIiBbc3R5bGUud2lkdGgucHhdPVwic3BhbHRlLmJyZWl0ZVwiXG4gICAgICAgICBbY2xhc3MubXJkLWRhdGVuLWxpc3RlLW1pdHRlXT1cInNwYWx0ZS5hdXNyaWNodHVuZyA9PT0gJ21pdHRlJ1wiIFtjbGFzcy5tcmQtZGF0ZW4tbGlzdGUtcmVjaHRzXT1cInNwYWx0ZS5hdXNyaWNodHVuZyA9PT0gJ3JlY2h0cydcIj5cbiAgICAgIHt7c3BhbHRlLnRpdGVsfX1cbiAgICA8L2Rpdj5cbiAgICA8bmctdGVtcGxhdGUgI29obmVTb3J0aWVydW5nPlxuICAgICAgPGRpdiBjbGFzcz1cIm1yZC1kYXRlbi1saXN0ZS1zcGFsdGVcIiBbY2xhc3MubXJkLWRhdGVuLWxpc3RlLXNwYWx0ZS1mbGV4XT1cInNwYWx0ZS5mbGV4XCIgW3N0eWxlLndpZHRoLnB4XT1cInNwYWx0ZS5icmVpdGVcIlxuICAgICAgICAgICBbY2xhc3MubXJkLWRhdGVuLWxpc3RlLW1pdHRlXT1cInNwYWx0ZS5hdXNyaWNodHVuZyA9PT0gJ21pdHRlJ1wiIFtjbGFzcy5tcmQtZGF0ZW4tbGlzdGUtcmVjaHRzXT1cInNwYWx0ZS5hdXNyaWNodHVuZyA9PT0gJ3JlY2h0cydcIj5cbiAgICAgICAge3tzcGFsdGUudGl0ZWx9fVxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cblxuPGRpdiAqbmdJZj1cImxhZWR0XCIgY2xhc3M9XCJtcmQtZGF0ZW4tbGlzdGUtaGlud2Vpc1wiPlxuICA8bXJkLXByb2dyZXNzLXNwaW5uZXI+PC9tcmQtcHJvZ3Jlc3Mtc3Bpbm5lcj5cbjwvZGl2PlxuPGRpdiAqbmdJZj1cIiFsYWVkdCAmJiBhbmdlemVpZ3QubGVuZ3RoID09PSAwXCIgY2xhc3M9XCJtcmQtZGF0ZW4tbGlzdGUtaGlud2Vpc1wiPnt7bGVlclRleHR9fTwvZGl2PlxuXG48bXJkLWxpc3QgKm5nSWY9XCIhbGFlZHRcIiBbY2xhc3MubXJkLWRhdGVuLWxpc3RlLWxlZXJdPVwiYW5nZXplaWd0Lmxlbmd0aCA9PT0gMFwiIGNsYXNzPVwibXJkLWRhdGVuLWxpc3RlLWxpc3RlXCIgZGl2aWRlciBzZWxlY3RhYmxlIHZpcnR1YWxTY3JvbGxcbiAgICAgICAgICBbaXRlbXNdPVwiYW5nZXplaWd0XCIgW2l0ZW1TaXplXT1cInplaWxlbmhvZWhlXCIgW3RyYWNrQnldPVwidHJhY2tCeVwiIFthbmdlaGVmdGV0XT1cImF1c2dld2FlaGx0XCI+XG4gIDxuZy10ZW1wbGF0ZSBbbXJkTGlzdEl0ZW1dPVwiYW5nZXplaWd0XCIgbGV0LWVpbnRyYWc+XG4gICAgPG1yZC1saXN0LWl0ZW0gW3NlbGVjdGVkXT1cImlzdEF1c2dld2FlaGx0KGVpbnRyYWcpXCIgW2NsYXNzLm1yZC1kYXRlbi1saXN0ZS1pbmFrdGl2XT1cImlzdEluYWt0aXYoZWludHJhZylcIiAoY2xpY2spPVwiYXVzd2FobC5lbWl0KGVpbnRyYWcpXCI+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBzcGFsdGUgb2Ygc3BhbHRlblwiIGNsYXNzPVwibXJkLWRhdGVuLWxpc3RlLXNwYWx0ZVwiIFtjbGFzcy5tcmQtZGF0ZW4tbGlzdGUtc3BhbHRlLWZsZXhdPVwic3BhbHRlLmZsZXhcIiBbc3R5bGUud2lkdGgucHhdPVwic3BhbHRlLmJyZWl0ZVwiXG4gICAgICAgICAgIFtjbGFzcy5tcmQtZGF0ZW4tbGlzdGUtbWl0dGVdPVwic3BhbHRlLmF1c3JpY2h0dW5nID09PSAnbWl0dGUnXCIgW2NsYXNzLm1yZC1kYXRlbi1saXN0ZS1yZWNodHNdPVwic3BhbHRlLmF1c3JpY2h0dW5nID09PSAncmVjaHRzJ1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiemVsbGUoc3BhbHRlLnNjaGx1ZXNzZWwpIGFzIHRlbXBsYXRlOyBlbHNlIHN0YW5kYXJkWmVsbGVcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGU7IGNvbnRleHQ6IHskaW1wbGljaXQ6IGVpbnRyYWcsIGF1c2dld2FlaGx0OiBpc3RBdXNnZXdhZWhsdChlaW50cmFnKX1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjc3RhbmRhcmRaZWxsZT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1yZC1kYXRlbi1saXN0ZS10ZXh0XCIgW2xpbmUtY2xhbXBdPVwiMlwiIFttcmRUb29sVGlwXT1cInRleHQoc3BhbHRlLCBlaW50cmFnKVwiIHNob3dJZlRydW5jYXRlZD57e3RleHQoc3BhbHRlLCBlaW50cmFnKX19PC9zcGFuPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgPC9tcmQtbGlzdC1pdGVtPlxuICA8L25nLXRlbXBsYXRlPlxuPC9tcmQtbGlzdD5cblxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiW21yZERhdGVuTGlzdGVBa3Rpb25lbl1cIj48L25nLWNvbnRlbnQ+XG4iXX0=