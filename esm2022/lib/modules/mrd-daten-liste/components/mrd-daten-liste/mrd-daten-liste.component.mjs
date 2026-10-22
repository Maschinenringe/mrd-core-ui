import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, Output, ViewChild, booleanAttribute, numberAttribute } from '@angular/core';
import { BaseObject, SubscriptionHandler } from 'mrd-core';
import { Subject, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { MrdListComponent } from '../../../mrd-list/components/mrd-list/mrd-list.component';
import { MrdDatenListeZelleDirective } from '../../common/directive/mrd-daten-liste-zelle.directive';
import { MrdDatenListeUtil } from '../../common/util/mrd-daten-liste.util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../mrd-form-field/components/mrd-form-field/mrd-form-field.component";
import * as i3 from "../../../mrd-form-field/components/mrd-input/mrd-input.component";
import * as i4 from "../../../mrd-form-field/components/mrd-select/mrd-select.component";
import * as i5 from "../../../mrd-form-field/components/mrd-select-option/mrd-select-option.component";
import * as i6 from "../../../mrd-form-field/components/mrd-label/mrd-label.component";
import * as i7 from "../../../mrd-form-field/components/mrd-suffix/mrd-suffix.component";
import * as i8 from "../../../mrd-icon/components/mrd-icon.component";
import * as i9 from "../../../mrd-list/components/mrd-list/mrd-list.component";
import * as i10 from "../../../mrd-list/components/mrd-list-item/mrd-list-item.component";
import * as i11 from "../../../mrd-list/common/directive/mrd-list-item-template.directive";
import * as i12 from "../../../mrd-progress-spinner/components/mrd-progress-spinner/mrd-progress-spinner.component";
import * as i13 from "../../../mrd-sort/common/directive/mrd-sort.directive";
import * as i14 from "../../../mrd-sort/components/mrd-sort-header/mrd-sort-header.component";
import * as i15 from "../../../mrd-toggle-switch/components/mrd-toggle-switch/mrd-toggle-switch.component";
import * as i16 from "../../../mrd-tooltip/common/directive/tool-tip-renderer/tool-tip-renderer.directive";
function MrdDatenListeComponent_mrd_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-form-field", 8)(1, "mrd-label", 9);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mrd-input", 10);
    i0.ɵɵlistener("valueChange", function MrdDatenListeComponent_mrd_form_field_1_Template_mrd_input_valueChange_3_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.suchtextGeaendert($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mrd-suffix");
    i0.ɵɵelement(5, "mrd-icon", 11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.suchPlatzhalter);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r0.suchtext);
} }
function MrdDatenListeComponent_div_2_mrd_form_field_1_mrd_select_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mrd-select-option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const betrieb_r12 = ctx.$implicit;
    i0.ɵɵproperty("value", betrieb_r12.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(betrieb_r12.name);
} }
function MrdDatenListeComponent_div_2_mrd_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-form-field", 15)(1, "mrd-label", 16);
    i0.ɵɵtext(2, "Betriebe");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mrd-select", 17);
    i0.ɵɵlistener("valueChange", function MrdDatenListeComponent_div_2_mrd_form_field_1_Template_mrd_select_valueChange_3_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r13.betriebFilterGeaendert($event)); });
    i0.ɵɵtemplate(4, MrdDatenListeComponent_div_2_mrd_form_field_1_mrd_select_option_4_Template, 2, 2, "mrd-select-option", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("value", ctx_r9.betriebFilter);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r9.betriebe);
} }
function MrdDatenListeComponent_div_2_ng_container_2_mrd_select_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mrd-select-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r16 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r16.schluessel);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r16.bezeichnung);
} }
function MrdDatenListeComponent_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mrd-form-field", 20)(2, "mrd-label", 16);
    i0.ɵɵtext(3, "Sortierung");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mrd-select", 10);
    i0.ɵɵlistener("valueChange", function MrdDatenListeComponent_div_2_ng_container_2_Template_mrd_select_valueChange_4_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r17.sortierSchluesselGeaendert($event)); });
    i0.ɵɵtemplate(5, MrdDatenListeComponent_div_2_ng_container_2_mrd_select_option_5_Template, 2, 2, "mrd-select-option", 21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "button", 22);
    i0.ɵɵlistener("click", function MrdDatenListeComponent_div_2_ng_container_2_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r18); const ctx_r19 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r19.richtungUmschalten()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(7, "svg", 23);
    i0.ɵɵelement(8, "path", 24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r10.sortierSchluessel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r10.sortierOptionen);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", !ctx_r10.istSortiert);
    i0.ɵɵattribute("aria-label", ctx_r10.absteigend ? "Absteigend sortiert" : "Aufsteigend sortiert");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("mrd-daten-liste-richtung-absteigend", ctx_r10.absteigend);
} }
function MrdDatenListeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtemplate(1, MrdDatenListeComponent_div_2_mrd_form_field_1_Template, 5, 2, "mrd-form-field", 13);
    i0.ɵɵtemplate(2, MrdDatenListeComponent_div_2_ng_container_2_Template, 9, 6, "ng-container", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.betriebFilterSichtbar);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.sortierAuswahl);
} }
function MrdDatenListeComponent_mrd_toggle_switch_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-toggle-switch", 26);
    i0.ɵɵlistener("checkedChange", function MrdDatenListeComponent_mrd_toggle_switch_4_Template_mrd_toggle_switch_checkedChange_0_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r20.inaktiveAusblendenGeaendert($event)); });
    i0.ɵɵtext(1, " Inaktive ausblenden ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("checked", ctx_r2.inaktiveAusblenden);
} }
function MrdDatenListeComponent_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const spalte_r22 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵstyleProp("width", spalte_r22.breite, "px");
    i0.ɵɵclassProp("mrd-daten-liste-spalte-flex", spalte_r22.flex)("mrd-daten-liste-mitte", spalte_r22.ausrichtung === "mitte")("mrd-daten-liste-rechts", spalte_r22.ausrichtung === "rechts");
    i0.ɵɵproperty("mrd-sort-header", spalte_r22.schluessel)("arrowPosition", spalte_r22.ausrichtung === "rechts" ? "before" : "after");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", spalte_r22.titel, " ");
} }
function MrdDatenListeComponent_ng_container_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const spalte_r22 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵstyleProp("width", spalte_r22.breite, "px");
    i0.ɵɵclassProp("mrd-daten-liste-spalte-flex", spalte_r22.flex)("mrd-daten-liste-mitte", spalte_r22.ausrichtung === "mitte")("mrd-daten-liste-rechts", spalte_r22.ausrichtung === "rechts");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", spalte_r22.titel, " ");
} }
function MrdDatenListeComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MrdDatenListeComponent_ng_container_6_div_1_Template, 2, 11, "div", 27);
    i0.ɵɵtemplate(2, MrdDatenListeComponent_ng_container_6_ng_template_2_Template, 2, 9, "ng-template", null, 28, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const spalte_r22 = ctx.$implicit;
    const _r24 = i0.ɵɵreference(3);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.kopfSortierung && spalte_r22.sortierbar)("ngIfElse", _r24);
} }
function MrdDatenListeComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵelement(1, "mrd-progress-spinner");
    i0.ɵɵelementEnd();
} }
function MrdDatenListeComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r5.leerText);
} }
function MrdDatenListeComponent_mrd_list_9_ng_template_1_div_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0, a1) { return { $implicit: a0, ausgewaehlt: a1 }; };
function MrdDatenListeComponent_mrd_list_9_ng_template_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MrdDatenListeComponent_mrd_list_9_ng_template_1_div_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 38);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const template_r35 = ctx.ngIf;
    const eintrag_r29 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r32 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", template_r35)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c0, eintrag_r29, ctx_r32.istAusgewaehlt(eintrag_r29)));
} }
function MrdDatenListeComponent_mrd_list_9_ng_template_1_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const spalte_r31 = i0.ɵɵnextContext().$implicit;
    const eintrag_r29 = i0.ɵɵnextContext().$implicit;
    const ctx_r34 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("line-clamp", 2)("mrdToolTip", ctx_r34.text(spalte_r31, eintrag_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r34.text(spalte_r31, eintrag_r29));
} }
function MrdDatenListeComponent_mrd_list_9_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtemplate(1, MrdDatenListeComponent_mrd_list_9_ng_template_1_div_1_ng_container_1_Template, 2, 5, "ng-container", 36);
    i0.ɵɵtemplate(2, MrdDatenListeComponent_mrd_list_9_ng_template_1_div_1_ng_template_2_Template, 2, 3, "ng-template", null, 37, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const spalte_r31 = ctx.$implicit;
    const _r33 = i0.ɵɵreference(3);
    const ctx_r30 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("width", spalte_r31.breite, "px");
    i0.ɵɵclassProp("mrd-daten-liste-spalte-flex", spalte_r31.flex)("mrd-daten-liste-mitte", spalte_r31.ausrichtung === "mitte")("mrd-daten-liste-rechts", spalte_r31.ausrichtung === "rechts");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r30.zelle(spalte_r31.schluessel))("ngIfElse", _r33);
} }
function MrdDatenListeComponent_mrd_list_9_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-list-item", 34);
    i0.ɵɵlistener("click", function MrdDatenListeComponent_mrd_list_9_ng_template_1_Template_mrd_list_item_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r41); const eintrag_r29 = restoredCtx.$implicit; const ctx_r40 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r40.auswahl.emit(eintrag_r29)); });
    i0.ɵɵtemplate(1, MrdDatenListeComponent_mrd_list_9_ng_template_1_div_1_Template, 4, 10, "div", 35);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const eintrag_r29 = ctx.$implicit;
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("mrd-daten-liste-inaktiv", ctx_r28.istInaktiv(eintrag_r29));
    i0.ɵɵproperty("selected", ctx_r28.istAusgewaehlt(eintrag_r29));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r28.spalten);
} }
function MrdDatenListeComponent_mrd_list_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mrd-list", 32);
    i0.ɵɵtemplate(1, MrdDatenListeComponent_mrd_list_9_ng_template_1_Template, 2, 4, "ng-template", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("mrd-daten-liste-leer", ctx_r6.angezeigt.length === 0);
    i0.ɵɵproperty("items", ctx_r6.angezeigt)("itemSize", ctx_r6.zeilenhoehe)("trackBy", ctx_r6.trackBy)("angeheftet", ctx_r6.ausgewaehlt);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("mrdListItem", ctx_r6.angezeigt);
} }
const _c1 = [[["", "mrdDatenListeFilter", ""]], [["", "mrdDatenListeAktionen", ""]]];
const _c2 = ["[mrdDatenListeFilter]", "[mrdDatenListeAktionen]"];
/**
 * Liste mit Spalten fuer Stammdaten-Seiten: oben Suche, Betriebs-Filter, Sortierung, Inaktiv-Toggle und eigene Filter
 * (`[mrdDatenListeFilter]`), in der Mitte Spaltenkoepfe und virtuelle Liste, unten eigene Aktionen (`[mrdDatenListeAktionen]`).
 * Die Breite ergibt sich aus den Spalten; in einer mobilen `mrd-sidenav` nimmt die Liste die volle Breite ein.
 * `eintraege` kommen in der Standardsortierung; jede Sortierung laesst sich wieder darauf zuruecksetzen.
 */
export class MrdDatenListeComponent extends BaseObject {
    cdr;
    static STANDARD = '__standard';
    static BETRIEB = '__betrieb';
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
    /** Kennzeichnet inaktive Eintraege; nur damit erscheint der Toggle "Inaktive ausblenden" */
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
    richtungUmschalten() {
        if (this.istSortiert) {
            this.sortierungSetzen({ active: this.sortierung.active, direction: this.absteigend ? 'asc' : 'desc' });
        }
    }
    inaktiveAusblendenGeaendert(ausblenden) {
        this.inaktiveAusblenden = ausblenden;
        this.aktualisieren();
        this.inaktiveAusblendenChange.emit(ausblenden);
    }
    betriebFilterGeaendert(ids) {
        this.betriebFilter = ids ?? [];
        this.aktualisieren();
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
        } }, inputs: { eintraege: "eintraege", spalten: "spalten", identifier: "identifier", ausgewaehlt: "ausgewaehlt", zeilenhoehe: ["zeilenhoehe", "zeilenhoehe", numberAttribute], suche: ["suche", "suche", booleanAttribute], suchPlatzhalter: "suchPlatzhalter", suchfelder: "suchfelder", suchMindestlaenge: ["suchMindestlaenge", "suchMindestlaenge", numberAttribute], suchVerzoegerung: ["suchVerzoegerung", "suchVerzoegerung", numberAttribute], kopfSortierung: ["kopfSortierung", "kopfSortierung", booleanAttribute], sortierAuswahl: ["sortierAuswahl", "sortierAuswahl", booleanAttribute], sortierung: "sortierung", inaktivPruefung: "inaktivPruefung", inaktiveAusblenden: ["inaktiveAusblenden", "inaktiveAusblenden", booleanAttribute], betriebe: "betriebe", betriebSchluessel: "betriebSchluessel", betriebFilter: "betriebFilter", laedt: ["laedt", "laedt", booleanAttribute], leerText: "leerText", volleBreite: ["volleBreite", "volleBreite", booleanAttribute] }, outputs: { auswahl: "auswahl", sortierungChange: "sortierungChange", inaktiveAusblendenChange: "inaktiveAusblendenChange", betriebFilterChange: "betriebFilterChange" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 11, vars: 9, consts: [[1, "mrd-daten-liste-kopfbereich"], ["class", "mrd-daten-liste-suche", 4, "ngIf"], ["class", "mrd-daten-liste-auswahlzeile", 4, "ngIf"], ["slim", "", "class", "mrd-daten-liste-inaktiv-toggle", 3, "checked", "checkedChange", 4, "ngIf"], ["mrdSortClear", "", 1, "mrd-daten-liste-spaltenkoepfe", 3, "mrdSort", "mrdSortDisabled", "mrdSortChange"], [4, "ngFor", "ngForOf"], ["class", "mrd-daten-liste-hinweis", 4, "ngIf"], ["class", "mrd-daten-liste-liste", "divider", "", "selectable", "", "virtualScroll", "", 3, "mrd-daten-liste-leer", "items", "itemSize", "trackBy", "angeheftet", 4, "ngIf"], [1, "mrd-daten-liste-suche"], ["float", "never"], [3, "value", "valueChange"], ["icon", "suche"], [1, "mrd-daten-liste-auswahlzeile"], ["class", "mrd-daten-liste-betriebe", 4, "ngIf"], [4, "ngIf"], [1, "mrd-daten-liste-betriebe"], ["float", "always"], ["multiple", "", 3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "mrd-daten-liste-sortierung"], ["noCheckbox", "", 3, "value", 4, "ngFor", "ngForOf"], ["type", "button", 1, "mrd-daten-liste-richtung", 3, "disabled", "click"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M13 20h-2V8l-5.5 5.5-1.42-1.42L12 4.16l7.92 7.92-1.42 1.42L13 8v12z"], ["noCheckbox", "", 3, "value"], ["slim", "", 1, "mrd-daten-liste-inaktiv-toggle", 3, "checked", "checkedChange"], ["class", "mrd-daten-liste-spalte", 3, "mrd-sort-header", "arrowPosition", "mrd-daten-liste-spalte-flex", "width", "mrd-daten-liste-mitte", "mrd-daten-liste-rechts", 4, "ngIf", "ngIfElse"], ["ohneSortierung", ""], [1, "mrd-daten-liste-spalte", 3, "mrd-sort-header", "arrowPosition"], [1, "mrd-daten-liste-spalte"], [1, "mrd-daten-liste-hinweis"], ["divider", "", "selectable", "", "virtualScroll", "", 1, "mrd-daten-liste-liste", 3, "items", "itemSize", "trackBy", "angeheftet"], [3, "mrdListItem"], [3, "selected", "click"], ["class", "mrd-daten-liste-spalte", 3, "mrd-daten-liste-spalte-flex", "width", "mrd-daten-liste-mitte", "mrd-daten-liste-rechts", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["standardZelle", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["showIfTruncated", "", 1, "mrd-daten-liste-text", 3, "line-clamp", "mrdToolTip"]], template: function MrdDatenListeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, MrdDatenListeComponent_mrd_form_field_1_Template, 6, 2, "mrd-form-field", 1);
            i0.ɵɵtemplate(2, MrdDatenListeComponent_div_2_Template, 3, 2, "div", 2);
            i0.ɵɵprojection(3);
            i0.ɵɵtemplate(4, MrdDatenListeComponent_mrd_toggle_switch_4_Template, 2, 1, "mrd-toggle-switch", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 4);
            i0.ɵɵlistener("mrdSortChange", function MrdDatenListeComponent_Template_div_mrdSortChange_5_listener($event) { return ctx.sortierungSetzen($event); });
            i0.ɵɵtemplate(6, MrdDatenListeComponent_ng_container_6_Template, 4, 2, "ng-container", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, MrdDatenListeComponent_div_7_Template, 2, 0, "div", 6);
            i0.ɵɵtemplate(8, MrdDatenListeComponent_div_8_Template, 2, 1, "div", 6);
            i0.ɵɵtemplate(9, MrdDatenListeComponent_mrd_list_9_Template, 2, 7, "mrd-list", 7);
            i0.ɵɵprojection(10, 1);
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.suche);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.betriebFilterSichtbar || ctx.sortierAuswahl);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.inaktivPruefung);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("mrdSort", ctx.kopfSortierung ? ctx.sortierung : null)("mrdSortDisabled", !ctx.kopfSortierung);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.spalten);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.laedt);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.laedt && ctx.angezeigt.length === 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.laedt);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i2.MrdFormFieldComponent, i3.MrdInputComponent, i4.MrdSelectComponent, i5.MrdSelectOptionComponent, i6.MrdLabelComponent, i7.MrdSuffixComponent, i8.MrdIconComponent, i9.MrdListComponent, i10.MrdListItemComponent, i11.MrdListItemTemplateDirective, i12.MrdProgressSpinnerComponent, i13.MrdSortDirective, i14.MrdSortHeaderComponent, i15.MrdToggleSwitchComponent, i16.ToolTipRendererDirective], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;box-sizing:border-box;height:100%;min-height:0;width:-moz-max-content;width:max-content;max-width:100%}.mrd-daten-liste-volle-breite[_nghost-%COMP%], .mrd-sidenav-mobile[_nghost-%COMP%], .mrd-sidenav-mobile   [_nghost-%COMP%]{width:100%}.mrd-daten-liste-kopfbereich[_ngcontent-%COMP%], .mrd-daten-liste-liste[_ngcontent-%COMP%], .mrd-daten-liste-hinweis[_ngcontent-%COMP%], [_nghost-%COMP%]     [mrdDatenListeFilter], [_nghost-%COMP%]     [mrdDatenListeAktionen]{box-sizing:border-box;width:0;min-width:100%}.mrd-daten-liste-kopfbereich[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;padding:8px 16px}.mrd-daten-liste-kopfbereich[_ngcontent-%COMP%]:empty{display:none}.mrd-daten-liste-suche[_ngcontent-%COMP%]{width:100%}.mrd-daten-liste-auswahlzeile[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:8px}.mrd-daten-liste-betriebe[_ngcontent-%COMP%], .mrd-daten-liste-sortierung[_ngcontent-%COMP%]{flex:1 1 0;min-width:0}.mrd-daten-liste-richtung[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex:0 0 auto;width:40px;height:40px;padding:0;border:none;border-radius:50%;background:transparent;color:#494949;cursor:pointer}.mrd-daten-liste-richtung[_ngcontent-%COMP%]:hover:not(:disabled){background-color:#ebeff3}.mrd-daten-liste-richtung[_ngcontent-%COMP%]:disabled{opacity:.4;cursor:default}.mrd-daten-liste-richtung[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:24px;height:24px;fill:currentColor;transition:transform .15s ease}.mrd-daten-liste-richtung[_ngcontent-%COMP%]   svg.mrd-daten-liste-richtung-absteigend[_ngcontent-%COMP%]{transform:rotate(180deg)}.mrd-daten-liste-spaltenkoepfe[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;flex:0 0 auto;box-sizing:border-box;height:40px;padding:0 16px;overflow:hidden;scrollbar-gutter:stable;background-color:#65b32e;color:#fff;border-bottom:1px solid #FFFFFF;font-size:16px}.mrd-daten-liste-spalte[_ngcontent-%COMP%]{display:flex;align-items:center;flex:0 0 auto;box-sizing:border-box;min-width:0;padding-right:8px;overflow:hidden}.mrd-daten-liste-spalte.mrd-daten-liste-spalte-flex[_ngcontent-%COMP%]{flex:1 0 auto}.mrd-daten-liste-spalte.mrd-daten-liste-mitte[_ngcontent-%COMP%]{justify-content:center}.mrd-daten-liste-spalte.mrd-daten-liste-rechts[_ngcontent-%COMP%]{justify-content:flex-end}.mrd-daten-liste-spalte[_ngcontent-%COMP%]:last-child{padding-right:0}.mrd-daten-liste-text[_ngcontent-%COMP%]{overflow-wrap:anywhere}.mrd-daten-liste-liste[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0}.mrd-daten-liste-liste.mrd-daten-liste-leer[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .mrd-daten-liste-liste[_ngcontent-%COMP%]     .mrd-list-virtual-scroll{scrollbar-gutter:stable}.mrd-daten-liste-inaktiv[_ngcontent-%COMP%]:not(.mrd-list-item-selected){color:#949ea7}.mrd-daten-liste-hinweis[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;align-items:center;justify-content:center;padding:16px;color:#949ea7}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdDatenListeComponent, [{
        type: Component,
        args: [{ selector: 'mrd-daten-liste', host: {
                    '[class.mrd-daten-liste-volle-breite]': 'volleBreite'
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-daten-liste-kopfbereich\">\n  <mrd-form-field *ngIf=\"suche\" class=\"mrd-daten-liste-suche\">\n    <mrd-label float=\"never\">{{suchPlatzhalter}}</mrd-label>\n    <mrd-input [value]=\"suchtext\" (valueChange)=\"suchtextGeaendert($event)\"></mrd-input>\n    <mrd-suffix><mrd-icon icon=\"suche\"></mrd-icon></mrd-suffix>\n  </mrd-form-field>\n\n  <div *ngIf=\"betriebFilterSichtbar || sortierAuswahl\" class=\"mrd-daten-liste-auswahlzeile\">\n    <mrd-form-field *ngIf=\"betriebFilterSichtbar\" class=\"mrd-daten-liste-betriebe\">\n      <mrd-label float=\"always\">Betriebe</mrd-label>\n      <mrd-select multiple [value]=\"betriebFilter\" (valueChange)=\"betriebFilterGeaendert($event)\">\n        <mrd-select-option *ngFor=\"let betrieb of betriebe\" [value]=\"betrieb.id\">{{betrieb.name}}</mrd-select-option>\n      </mrd-select>\n    </mrd-form-field>\n    <ng-container *ngIf=\"sortierAuswahl\">\n      <mrd-form-field class=\"mrd-daten-liste-sortierung\">\n        <mrd-label float=\"always\">Sortierung</mrd-label>\n        <mrd-select [value]=\"sortierSchluessel\" (valueChange)=\"sortierSchluesselGeaendert($event)\">\n          <mrd-select-option *ngFor=\"let option of sortierOptionen\" [value]=\"option.schluessel\" noCheckbox>{{option.bezeichnung}}</mrd-select-option>\n        </mrd-select>\n      </mrd-form-field>\n      <button type=\"button\" class=\"mrd-daten-liste-richtung\" [disabled]=\"!istSortiert\" (click)=\"richtungUmschalten()\"\n              [attr.aria-label]=\"absteigend ? 'Absteigend sortiert' : 'Aufsteigend sortiert'\">\n        <svg [class.mrd-daten-liste-richtung-absteigend]=\"absteigend\" viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n          <path d=\"M13 20h-2V8l-5.5 5.5-1.42-1.42L12 4.16l7.92 7.92-1.42 1.42L13 8v12z\"></path>\n        </svg>\n      </button>\n    </ng-container>\n  </div>\n\n  <ng-content select=\"[mrdDatenListeFilter]\"></ng-content>\n\n  <mrd-toggle-switch *ngIf=\"inaktivPruefung\" slim class=\"mrd-daten-liste-inaktiv-toggle\"\n                     [checked]=\"inaktiveAusblenden\" (checkedChange)=\"inaktiveAusblendenGeaendert($event)\">\n    Inaktive ausblenden\n  </mrd-toggle-switch>\n</div>\n\n<div class=\"mrd-daten-liste-spaltenkoepfe\" [mrdSort]=\"kopfSortierung ? sortierung : null\" mrdSortClear [mrdSortDisabled]=\"!kopfSortierung\"\n     (mrdSortChange)=\"sortierungSetzen($event)\">\n  <ng-container *ngFor=\"let spalte of spalten\">\n    <div *ngIf=\"kopfSortierung && spalte.sortierbar; else ohneSortierung\"\n         class=\"mrd-daten-liste-spalte\" [mrd-sort-header]=\"spalte.schluessel\"\n         [arrowPosition]=\"spalte.ausrichtung === 'rechts' ? 'before' : 'after'\"\n         [class.mrd-daten-liste-spalte-flex]=\"spalte.flex\" [style.width.px]=\"spalte.breite\"\n         [class.mrd-daten-liste-mitte]=\"spalte.ausrichtung === 'mitte'\" [class.mrd-daten-liste-rechts]=\"spalte.ausrichtung === 'rechts'\">\n      {{spalte.titel}}\n    </div>\n    <ng-template #ohneSortierung>\n      <div class=\"mrd-daten-liste-spalte\" [class.mrd-daten-liste-spalte-flex]=\"spalte.flex\" [style.width.px]=\"spalte.breite\"\n           [class.mrd-daten-liste-mitte]=\"spalte.ausrichtung === 'mitte'\" [class.mrd-daten-liste-rechts]=\"spalte.ausrichtung === 'rechts'\">\n        {{spalte.titel}}\n      </div>\n    </ng-template>\n  </ng-container>\n</div>\n\n<div *ngIf=\"laedt\" class=\"mrd-daten-liste-hinweis\">\n  <mrd-progress-spinner></mrd-progress-spinner>\n</div>\n<div *ngIf=\"!laedt && angezeigt.length === 0\" class=\"mrd-daten-liste-hinweis\">{{leerText}}</div>\n\n<mrd-list *ngIf=\"!laedt\" [class.mrd-daten-liste-leer]=\"angezeigt.length === 0\" class=\"mrd-daten-liste-liste\" divider selectable virtualScroll\n          [items]=\"angezeigt\" [itemSize]=\"zeilenhoehe\" [trackBy]=\"trackBy\" [angeheftet]=\"ausgewaehlt\">\n  <ng-template [mrdListItem]=\"angezeigt\" let-eintrag>\n    <mrd-list-item [selected]=\"istAusgewaehlt(eintrag)\" [class.mrd-daten-liste-inaktiv]=\"istInaktiv(eintrag)\" (click)=\"auswahl.emit(eintrag)\">\n      <div *ngFor=\"let spalte of spalten\" class=\"mrd-daten-liste-spalte\" [class.mrd-daten-liste-spalte-flex]=\"spalte.flex\" [style.width.px]=\"spalte.breite\"\n           [class.mrd-daten-liste-mitte]=\"spalte.ausrichtung === 'mitte'\" [class.mrd-daten-liste-rechts]=\"spalte.ausrichtung === 'rechts'\">\n        <ng-container *ngIf=\"zelle(spalte.schluessel) as template; else standardZelle\">\n          <ng-container *ngTemplateOutlet=\"template; context: {$implicit: eintrag, ausgewaehlt: istAusgewaehlt(eintrag)}\"></ng-container>\n        </ng-container>\n        <ng-template #standardZelle>\n          <span class=\"mrd-daten-liste-text\" [line-clamp]=\"2\" [mrdToolTip]=\"text(spalte, eintrag)\" showIfTruncated>{{text(spalte, eintrag)}}</span>\n        </ng-template>\n      </div>\n    </mrd-list-item>\n  </ng-template>\n</mrd-list>\n\n<ng-content select=\"[mrdDatenListeAktionen]\"></ng-content>\n", styles: [":host{display:flex;flex-direction:column;box-sizing:border-box;height:100%;min-height:0;width:-moz-max-content;width:max-content;max-width:100%}:host(.mrd-daten-liste-volle-breite),:host-context(.mrd-sidenav-mobile){width:100%}.mrd-daten-liste-kopfbereich,.mrd-daten-liste-liste,.mrd-daten-liste-hinweis,:host ::ng-deep [mrdDatenListeFilter],:host ::ng-deep [mrdDatenListeAktionen]{box-sizing:border-box;width:0;min-width:100%}.mrd-daten-liste-kopfbereich{display:flex;flex-direction:column;gap:8px;padding:8px 16px}.mrd-daten-liste-kopfbereich:empty{display:none}.mrd-daten-liste-suche{width:100%}.mrd-daten-liste-auswahlzeile{display:flex;flex-direction:row;align-items:center;gap:8px}.mrd-daten-liste-betriebe,.mrd-daten-liste-sortierung{flex:1 1 0;min-width:0}.mrd-daten-liste-richtung{display:flex;align-items:center;justify-content:center;flex:0 0 auto;width:40px;height:40px;padding:0;border:none;border-radius:50%;background:transparent;color:#494949;cursor:pointer}.mrd-daten-liste-richtung:hover:not(:disabled){background-color:#ebeff3}.mrd-daten-liste-richtung:disabled{opacity:.4;cursor:default}.mrd-daten-liste-richtung svg{width:24px;height:24px;fill:currentColor;transition:transform .15s ease}.mrd-daten-liste-richtung svg.mrd-daten-liste-richtung-absteigend{transform:rotate(180deg)}.mrd-daten-liste-spaltenkoepfe{display:flex;flex-direction:row;align-items:center;flex:0 0 auto;box-sizing:border-box;height:40px;padding:0 16px;overflow:hidden;scrollbar-gutter:stable;background-color:#65b32e;color:#fff;border-bottom:1px solid #FFFFFF;font-size:16px}.mrd-daten-liste-spalte{display:flex;align-items:center;flex:0 0 auto;box-sizing:border-box;min-width:0;padding-right:8px;overflow:hidden}.mrd-daten-liste-spalte.mrd-daten-liste-spalte-flex{flex:1 0 auto}.mrd-daten-liste-spalte.mrd-daten-liste-mitte{justify-content:center}.mrd-daten-liste-spalte.mrd-daten-liste-rechts{justify-content:flex-end}.mrd-daten-liste-spalte:last-child{padding-right:0}.mrd-daten-liste-text{overflow-wrap:anywhere}.mrd-daten-liste-liste{flex:1 1 auto;min-height:0}.mrd-daten-liste-liste.mrd-daten-liste-leer{display:none}:host .mrd-daten-liste-liste ::ng-deep .mrd-list-virtual-scroll{scrollbar-gutter:stable}.mrd-daten-liste-inaktiv:not(.mrd-list-item-selected){color:#949ea7}.mrd-daten-liste-hinweis{display:flex;flex:1 1 auto;align-items:center;justify-content:center;padding:16px;color:#949ea7}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWRhdGVuLWxpc3RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZGF0ZW4tbGlzdGUvY29tcG9uZW50cy9tcmQtZGF0ZW4tbGlzdGUvbXJkLWRhdGVuLWxpc3RlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZGF0ZW4tbGlzdGUvY29tcG9uZW50cy9tcmQtZGF0ZW4tbGlzdGUvbXJkLWRhdGVuLWxpc3RlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBMEQsU0FBUyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyUCxPQUFPLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzNELE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUU1RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUVyRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNQekUseUNBQTRELG1CQUFBO0lBQ2pDLFlBQW1CO0lBQUEsaUJBQVk7SUFDeEQscUNBQXdFO0lBQTFDLG1NQUFlLGVBQUEsZ0NBQXlCLENBQUEsSUFBQztJQUFDLGlCQUFZ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Z0I7a0JBQTNELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFDO1lBR1UsY0FBYztrQkFBMUQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUdTLGNBQWM7a0JBQTFELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFHcEIsVUFBVTtrQkFBekIsS0FBSztZQUdVLGVBQWU7a0JBQTlCLEtBQUs7WUFFdUMsa0JBQWtCO2tCQUE5RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBR3BCLFFBQVE7a0JBQXZCLEtBQUs7WUFHVSxpQkFBaUI7a0JBQWhDLEtBQUs7WUFHVSxhQUFhO2tCQUE1QixLQUFLO1lBRXVDLEtBQUs7a0JBQWpELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFFcEIsUUFBUTtrQkFBdkIsS0FBSztZQUd1QyxXQUFXO2tCQUF2RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBR25CLE9BQU87a0JBQXZCLE1BQU07WUFFVSxnQkFBZ0I7a0JBQWhDLE1BQU07WUFFVSx3QkFBd0I7a0JBQXhDLE1BQU07WUFFVSxtQkFBbUI7a0JBQW5DLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgUXVlcnlMaXN0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgVHJhY2tCeUZ1bmN0aW9uLCBWaWV3Q2hpbGQsIGJvb2xlYW5BdHRyaWJ1dGUsIG51bWJlckF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZU9iamVjdCwgU3Vic2NyaXB0aW9uSGFuZGxlciB9IGZyb20gJ21yZC1jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1yZExpc3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9tcmQtbGlzdC9jb21wb25lbnRzL21yZC1saXN0L21yZC1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNcmRTb3J0aWVydW5nIH0gZnJvbSAnLi4vLi4vLi4vbXJkLXNvcnQvY29tbW9uL21vZGVsL21yZC1zb3J0Lm1vZGVsJztcbmltcG9ydCB7IE1yZERhdGVuTGlzdGVaZWxsZURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9kaXJlY3RpdmUvbXJkLWRhdGVuLWxpc3RlLXplbGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNcmREYXRlbkxpc3RlQmV0cmllYiwgTXJkRGF0ZW5MaXN0ZVNvcnRpZXJPcHRpb24sIE1yZERhdGVuTGlzdGVTcGFsdGUsIE1yZERhdGVuTGlzdGVTdWNoZmVsZCwgTXJkRGF0ZW5MaXN0ZVdlcnQsIE1yZERhdGVuTGlzdGVaZWxsZUtvbnRleHQgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kZWwvbXJkLWRhdGVuLWxpc3RlLm1vZGVsJztcbmltcG9ydCB7IE1yZERhdGVuTGlzdGVVdGlsIH0gZnJvbSAnLi4vLi4vY29tbW9uL3V0aWwvbXJkLWRhdGVuLWxpc3RlLnV0aWwnO1xuXG4vKipcbiAqIExpc3RlIG1pdCBTcGFsdGVuIGZ1ZXIgU3RhbW1kYXRlbi1TZWl0ZW46IG9iZW4gU3VjaGUsIEJldHJpZWJzLUZpbHRlciwgU29ydGllcnVuZywgSW5ha3Rpdi1Ub2dnbGUgdW5kIGVpZ2VuZSBGaWx0ZXJcbiAqIChgW21yZERhdGVuTGlzdGVGaWx0ZXJdYCksIGluIGRlciBNaXR0ZSBTcGFsdGVua29lcGZlIHVuZCB2aXJ0dWVsbGUgTGlzdGUsIHVudGVuIGVpZ2VuZSBBa3Rpb25lbiAoYFttcmREYXRlbkxpc3RlQWt0aW9uZW5dYCkuXG4gKiBEaWUgQnJlaXRlIGVyZ2lidCBzaWNoIGF1cyBkZW4gU3BhbHRlbjsgaW4gZWluZXIgbW9iaWxlbiBgbXJkLXNpZGVuYXZgIG5pbW10IGRpZSBMaXN0ZSBkaWUgdm9sbGUgQnJlaXRlIGVpbi5cbiAqIGBlaW50cmFlZ2VgIGtvbW1lbiBpbiBkZXIgU3RhbmRhcmRzb3J0aWVydW5nOyBqZWRlIFNvcnRpZXJ1bmcgbGFlc3N0IHNpY2ggd2llZGVyIGRhcmF1ZiB6dXJ1ZWNrc2V0emVuLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtcmQtZGF0ZW4tbGlzdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWRhdGVuLWxpc3RlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWRhdGVuLWxpc3RlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLm1yZC1kYXRlbi1saXN0ZS12b2xsZS1icmVpdGVdJzogJ3ZvbGxlQnJlaXRlJ1xuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNcmREYXRlbkxpc3RlQ29tcG9uZW50PFQgPSBhbnk+IGV4dGVuZHMgQmFzZU9iamVjdCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBTVEFOREFSRDogc3RyaW5nID0gJ19fc3RhbmRhcmQnO1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJFVFJJRUI6IHN0cmluZyA9ICdfX2JldHJpZWInO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oTXJkRGF0ZW5MaXN0ZVplbGxlRGlyZWN0aXZlKSBwdWJsaWMgc2V0IHplbGxlbih2YWx1ZTogUXVlcnlMaXN0PE1yZERhdGVuTGlzdGVaZWxsZURpcmVjdGl2ZTxUPj4pIHtcbiAgICB0aGlzLnplbGxlblRlbXBsYXRlcyA9IG5ldyBNYXAoKHZhbHVlPy50b0FycmF5KCkgPz8gW10pLm1hcCgoemVsbGU6IE1yZERhdGVuTGlzdGVaZWxsZURpcmVjdGl2ZTxUPikgPT4gW3plbGxlLnNjaGx1ZXNzZWwsIHplbGxlLnRlbXBsYXRlUmVmXSkpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgQFZpZXdDaGlsZChNcmRMaXN0Q29tcG9uZW50KSBwcml2YXRlIGxpc3RlOiBNcmRMaXN0Q29tcG9uZW50PFQ+O1xuXG4gIC8qKiBJbiBkZXIgU3RhbmRhcmRzb3J0aWVydW5nLCB6LiBCLiBkaXJla3QgYXVzIGRlbSBTdG9yZSAqL1xuICBASW5wdXQoKSBwdWJsaWMgZWludHJhZWdlOiBUW10gPSBbXTtcblxuICBASW5wdXQoKSBwdWJsaWMgc3BhbHRlbjogTXJkRGF0ZW5MaXN0ZVNwYWx0ZTxUPltdID0gW107XG5cbiAgQElucHV0KCkgcHVibGljIGlkZW50aWZpZXI6IHN0cmluZyA9ICdpZCc7XG5cbiAgLyoqIEF1c2dld2FlaGx0ZXIgRWludHJhZzsgYmxlaWJ0IHNpY2h0YmFyIChhbmdlaGVmdGV0KSwgYXVjaCB3ZW5uIGVyIGhlcmF1c2dlc2Nyb2xsdCBpc3QgKi9cbiAgQElucHV0KCkgcHVibGljIGF1c2dld2FlaGx0OiBUID0gbnVsbDtcblxuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgcHVibGljIHplaWxlbmhvZWhlOiBudW1iZXIgPSA1NjtcblxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBzdWNoZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgQElucHV0KCkgcHVibGljIHN1Y2hQbGF0emhhbHRlcjogc3RyaW5nID0gJ0R1cmNoc3VjaGVuJztcblxuICAvKiogT2huZSBBbmdhYmUgd2VyZGVuIGRpZSBXZXJ0ZSBhbGxlciBTcGFsdGVuIGR1cmNoc3VjaHQgKi9cbiAgQElucHV0KCkgcHVibGljIHN1Y2hmZWxkZXI6IE1yZERhdGVuTGlzdGVTdWNoZmVsZDxUPltdO1xuXG4gIC8qKiBLdWVyemVyZSBTdWNodGV4dGUgZmlsdGVybiBuaWNodCAqL1xuICBASW5wdXQoe3RyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlfSkgcHVibGljIHN1Y2hNaW5kZXN0bGFlbmdlOiBudW1iZXIgPSAxO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBwdWJsaWMgc3VjaFZlcnpvZWdlcnVuZzogbnVtYmVyID0gMzAwO1xuXG4gIC8qKiBTb3J0aWVyZW4gcGVyIEtsaWNrIGF1ZiBkaWUgU3BhbHRlbmtvZXBmZSAoYHNvcnRpZXJiYXJgKTsgZGVyIGRyaXR0ZSBLbGljayBzdGVsbHQgZGllIFN0YW5kYXJkc29ydGllcnVuZyB3aWVkZXIgaGVyICovXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIGtvcGZTb3J0aWVydW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFNvcnRpZXJlbiBwZXIgU2VsZWN0IChzb3J0aWVyYmFyZSBTcGFsdGVuLCBiZWkgbWVocmVyZW4gQmV0cmllYmVuIGF1Y2ggXCJCZXRyaWViXCIpIHVuZCBSaWNodHVuZ3MtU2NoYWx0ZXIgKi9cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc29ydGllckF1c3dhaGw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogTGVlciBvZGVyIG9obmUgUmljaHR1bmc6IFN0YW5kYXJkc29ydGllcnVuZyAqL1xuICBASW5wdXQoKSBwdWJsaWMgc29ydGllcnVuZzogTXJkU29ydGllcnVuZyA9IG51bGw7XG5cbiAgLyoqIEtlbm56ZWljaG5ldCBpbmFrdGl2ZSBFaW50cmFlZ2U7IG51ciBkYW1pdCBlcnNjaGVpbnQgZGVyIFRvZ2dsZSBcIkluYWt0aXZlIGF1c2JsZW5kZW5cIiAqL1xuICBASW5wdXQoKSBwdWJsaWMgaW5ha3RpdlBydWVmdW5nOiAoZWludHJhZzogVCkgPT4gYm9vbGVhbjtcblxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBpbmFrdGl2ZUF1c2JsZW5kZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogQWIgendlaSBCZXRyaWViZW4gZXJzY2hlaW50IGRlciBCZXRyaWVicy1GaWx0ZXIgKi9cbiAgQElucHV0KCkgcHVibGljIGJldHJpZWJlOiBNcmREYXRlbkxpc3RlQmV0cmllYltdID0gW107XG5cbiAgLyoqIEVpbnRyYWVnZSBvaG5lIEJldHJpZWIgKGJldHJpZWJzdWViZXJncmVpZmVuZCkgYmxlaWJlbiBiZWkgamVkZW0gQmV0cmllYnMtRmlsdGVyIHNpY2h0YmFyICovXG4gIEBJbnB1dCgpIHB1YmxpYyBiZXRyaWViU2NobHVlc3NlbDogc3RyaW5nID0gJ2lkQmV0cmllYic7XG5cbiAgLyoqIExlZXI6IGFsbGUgQmV0cmllYmUgKi9cbiAgQElucHV0KCkgcHVibGljIGJldHJpZWJGaWx0ZXI6IG51bWJlcltdID0gW107XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgbGFlZHQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBwdWJsaWMgbGVlclRleHQ6IHN0cmluZyA9ICdLZWluZSBFaW50csOkZ2UgZ2VmdW5kZW4nO1xuXG4gIC8qKiBWb2xsZSBCcmVpdGUgc3RhdHQgQnJlaXRlIGF1cyBkZW4gU3BhbHRlbiAobW9iaWwgaW4gZWluZXIgYG1yZC1zaWRlbmF2YCBhdXRvbWF0aXNjaCkgKi9cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgdm9sbGVCcmVpdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogS2xpY2sgYXVmIGVpbmUgWmVpbGU7IG9iIHNpZSBhdXNnZXdhZWhsdCB3aXJkLCBlbnRzY2hlaWRldCBkZXIgQXVmcnVmZXIgdWViZXIgYGF1c2dld2FlaGx0YCAqL1xuICBAT3V0cHV0KCkgcHVibGljIGF1c3dhaGw6IEV2ZW50RW1pdHRlcjxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcblxuICBAT3V0cHV0KCkgcHVibGljIHNvcnRpZXJ1bmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxNcmRTb3J0aWVydW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8TXJkU29ydGllcnVuZz4oKTtcblxuICBAT3V0cHV0KCkgcHVibGljIGluYWt0aXZlQXVzYmxlbmRlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBPdXRwdXQoKSBwdWJsaWMgYmV0cmllYkZpbHRlckNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcltdPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyW10+KCk7XG5cbiAgcHVibGljIGFuZ2V6ZWlndDogVFtdID0gW107XG4gIHB1YmxpYyBzdWNodGV4dDogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBzb3J0aWVyT3B0aW9uZW46IE1yZERhdGVuTGlzdGVTb3J0aWVyT3B0aW9uW10gPSBbXTtcblxuICBwdWJsaWMgcmVhZG9ubHkgdHJhY2tCeTogVHJhY2tCeUZ1bmN0aW9uPFQ+ID0gKF86IG51bWJlciwgZWludHJhZzogVCkgPT4gdGhpcy5pZFZvbihlaW50cmFnKTtcblxuICBwcml2YXRlIHplbGxlblRlbXBsYXRlczogTWFwPHN0cmluZywgVGVtcGxhdGVSZWY8TXJkRGF0ZW5MaXN0ZVplbGxlS29udGV4dDxUPj4+ID0gbmV3IE1hcCgpO1xuICBwcml2YXRlIHdpcmtzYW1lclN1Y2h0ZXh0OiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSByZWFkb25seSBzdWNodGV4dCQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLndhdGNoKHRoaXMuc3VjaHRleHQkLnBpcGUoZGVib3VuY2UoKCkgPT4gdGltZXIodGhpcy5zdWNoVmVyem9lZ2VydW5nKSkpLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLndpcmtzYW1lclN1Y2h0ZXh0ID0gdGV4dC5sZW5ndGggPj0gdGhpcy5zdWNoTWluZGVzdGxhZW5nZSA/IHRleHQgOiAnJztcbiAgICAgIHRoaXMuYWt0dWFsaXNpZXJlbigpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWydzcGFsdGVuJ10gfHwgY2hhbmdlc1snYmV0cmllYmUnXSkge1xuICAgICAgdGhpcy5zb3J0aWVyT3B0aW9uZW5CZXJlY2huZW4oKTtcbiAgICB9XG4gICAgdGhpcy5ha3R1YWxpc2llcmVuKCk7XG4gICAgaWYgKGNoYW5nZXNbJ2F1c2dld2FlaGx0J10/LmN1cnJlbnRWYWx1ZSkge1xuICAgICAgLy8gTmFjaCBkZW0gUmVuZGVybiwgZGFtaXQgZGllIHZpcnR1ZWxsZSBMaXN0ZSBpaHJlIEhvZWhlIGtlbm50XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuenVyQXVzd2FobFNjcm9sbGVuKCkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYmV0cmllYkZpbHRlclNpY2h0YmFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5iZXRyaWViZT8ubGVuZ3RoID8/IDApID4gMTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc29ydGllclNjaGx1ZXNzZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pc3RTb3J0aWVydCA/IHRoaXMuc29ydGllcnVuZy5hY3RpdmUgOiBNcmREYXRlbkxpc3RlQ29tcG9uZW50LlNUQU5EQVJEO1xuICB9XG5cbiAgcHVibGljIGdldCBhYnN0ZWlnZW5kKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzdFNvcnRpZXJ0ICYmIHRoaXMuc29ydGllcnVuZy5kaXJlY3Rpb24gPT09ICdkZXNjJztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXN0U29ydGllcnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5zb3J0aWVydW5nPy5hY3RpdmUgJiYgISF0aGlzLnNvcnRpZXJ1bmc/LmRpcmVjdGlvbjtcbiAgfVxuXG4gIC8qKiBTdW1tZSBkZXIgU3BhbHRlbmJyZWl0ZW47IGRpZSBMaXN0ZSBzZWxic3QgZXJnYWVuenQgSW5uZW5hYnN0YW5kIHVuZCBTY3JvbGxiYXIgKi9cbiAgcHVibGljIGdldCBzcGFsdGVuQnJlaXRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc3BhbHRlbi5yZWR1Y2UoKHN1bW1lOiBudW1iZXIsIHNwYWx0ZTogTXJkRGF0ZW5MaXN0ZVNwYWx0ZTxUPikgPT4gc3VtbWUgKyBzcGFsdGUuYnJlaXRlLCAwKTtcbiAgfVxuXG4gIHB1YmxpYyB6ZWxsZShzY2hsdWVzc2VsOiBzdHJpbmcpOiBUZW1wbGF0ZVJlZjxNcmREYXRlbkxpc3RlWmVsbGVLb250ZXh0PFQ+PiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuemVsbGVuVGVtcGxhdGVzLmdldChzY2hsdWVzc2VsKTtcbiAgfVxuXG4gIHB1YmxpYyB0ZXh0KHNwYWx0ZTogTXJkRGF0ZW5MaXN0ZVNwYWx0ZTxUPiwgZWludHJhZzogVCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIE1yZERhdGVuTGlzdGVVdGlsLmFsc1RleHQoTXJkRGF0ZW5MaXN0ZVV0aWwud2VydFZvbihzcGFsdGUsIGVpbnRyYWcpKTtcbiAgfVxuXG4gIHB1YmxpYyBpc3RBdXNnZXdhZWhsdChlaW50cmFnOiBUKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXVzZ2V3YWVobHQgIT09IG51bGwgJiYgdGhpcy5hdXNnZXdhZWhsdCAhPT0gdW5kZWZpbmVkICYmIHRoaXMuaWRWb24oZWludHJhZykgPT09IHRoaXMuaWRWb24odGhpcy5hdXNnZXdhZWhsdCk7XG4gIH1cblxuICBwdWJsaWMgaXN0SW5ha3RpdihlaW50cmFnOiBUKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5pbmFrdGl2UHJ1ZWZ1bmcgJiYgdGhpcy5pbmFrdGl2UHJ1ZWZ1bmcoZWludHJhZyk7XG4gIH1cblxuICBwdWJsaWMgc3VjaHRleHRHZWFlbmRlcnQodGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdWNodGV4dCA9IHRleHQgPz8gJyc7XG4gICAgdGhpcy5zdWNodGV4dCQubmV4dCh0aGlzLnN1Y2h0ZXh0LnRyaW0oKSk7XG4gIH1cblxuICBwdWJsaWMgc29ydGllcnVuZ1NldHplbihzb3J0aWVydW5nOiBNcmRTb3J0aWVydW5nKTogdm9pZCB7XG4gICAgdGhpcy5zb3J0aWVydW5nID0gc29ydGllcnVuZz8uZGlyZWN0aW9uID8gc29ydGllcnVuZyA6IG51bGw7XG4gICAgdGhpcy5ha3R1YWxpc2llcmVuKCk7XG4gICAgdGhpcy5zb3J0aWVydW5nQ2hhbmdlLmVtaXQodGhpcy5zb3J0aWVydW5nKTtcbiAgfVxuXG4gIHB1YmxpYyBzb3J0aWVyU2NobHVlc3NlbEdlYWVuZGVydChzY2hsdWVzc2VsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBzdGFuZGFyZCA9ICFzY2hsdWVzc2VsIHx8IHNjaGx1ZXNzZWwgPT09IE1yZERhdGVuTGlzdGVDb21wb25lbnQuU1RBTkRBUkQ7XG4gICAgdGhpcy5zb3J0aWVydW5nU2V0emVuKHN0YW5kYXJkID8gbnVsbCA6IHthY3RpdmU6IHNjaGx1ZXNzZWwsIGRpcmVjdGlvbjogdGhpcy5hYnN0ZWlnZW5kID8gJ2Rlc2MnIDogJ2FzYyd9KTtcbiAgfVxuXG4gIHB1YmxpYyByaWNodHVuZ1Vtc2NoYWx0ZW4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXN0U29ydGllcnQpIHtcbiAgICAgIHRoaXMuc29ydGllcnVuZ1NldHplbih7YWN0aXZlOiB0aGlzLnNvcnRpZXJ1bmcuYWN0aXZlLCBkaXJlY3Rpb246IHRoaXMuYWJzdGVpZ2VuZCA/ICdhc2MnIDogJ2Rlc2MnfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGluYWt0aXZlQXVzYmxlbmRlbkdlYWVuZGVydChhdXNibGVuZGVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pbmFrdGl2ZUF1c2JsZW5kZW4gPSBhdXNibGVuZGVuO1xuICAgIHRoaXMuYWt0dWFsaXNpZXJlbigpO1xuICAgIHRoaXMuaW5ha3RpdmVBdXNibGVuZGVuQ2hhbmdlLmVtaXQoYXVzYmxlbmRlbik7XG4gIH1cblxuICBwdWJsaWMgYmV0cmllYkZpbHRlckdlYWVuZGVydChpZHM6IG51bWJlcltdKTogdm9pZCB7XG4gICAgdGhpcy5iZXRyaWViRmlsdGVyID0gaWRzID8/IFtdO1xuICAgIHRoaXMuYWt0dWFsaXNpZXJlbigpO1xuICAgIHRoaXMuYmV0cmllYkZpbHRlckNoYW5nZS5lbWl0KHRoaXMuYmV0cmllYkZpbHRlcik7XG4gIH1cblxuICBwdWJsaWMgenVyQXVzd2FobFNjcm9sbGVuKCk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hbmdlemVpZ3QuZmluZEluZGV4KChlaW50cmFnOiBUKSA9PiB0aGlzLmlzdEF1c2dld2FlaGx0KGVpbnRyYWcpKTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5saXN0ZT8uc2Nyb2xsVG9JbmRleChpbmRleCwgJ25lYXJlc3QnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFrdHVhbGlzaWVyZW4oKTogdm9pZCB7XG4gICAgbGV0IGVpbnRyYWVnZTogVFtdID0gdGhpcy5laW50cmFlZ2UgPz8gW107XG4gICAgaWYgKHRoaXMuaW5ha3RpdmVBdXNibGVuZGVuICYmIHRoaXMuaW5ha3RpdlBydWVmdW5nKSB7XG4gICAgICAvLyBEaWUgQXVzd2FobCBibGVpYnQgc2ljaHRiYXIsIGF1Y2ggd2VubiBzaWUgZ2VyYWRlIGluYWt0aXYgZ2VzZXR6dCB3dXJkZVxuICAgICAgZWludHJhZWdlID0gZWludHJhZWdlLmZpbHRlcigoZWludHJhZzogVCkgPT4gIXRoaXMuaW5ha3RpdlBydWVmdW5nKGVpbnRyYWcpIHx8IHRoaXMuaXN0QXVzZ2V3YWVobHQoZWludHJhZykpO1xuICAgIH1cbiAgICBpZiAodGhpcy5iZXRyaWViRmlsdGVyU2ljaHRiYXIgJiYgdGhpcy5iZXRyaWViRmlsdGVyPy5sZW5ndGgpIHtcbiAgICAgIGVpbnRyYWVnZSA9IGVpbnRyYWVnZS5maWx0ZXIoKGVpbnRyYWc6IFQpID0+IHtcbiAgICAgICAgY29uc3QgaWRCZXRyaWViID0gKGVpbnRyYWcgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW3RoaXMuYmV0cmllYlNjaGx1ZXNzZWxdIGFzIG51bWJlcjtcbiAgICAgICAgcmV0dXJuIGlkQmV0cmllYiA9PT0gbnVsbCB8fCBpZEJldHJpZWIgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmJldHJpZWJGaWx0ZXIuaW5jbHVkZXMoaWRCZXRyaWViKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBlaW50cmFlZ2UgPSBNcmREYXRlbkxpc3RlVXRpbC5zdWNoZW4oZWludHJhZWdlLCB0aGlzLndpcmtzYW1lclN1Y2h0ZXh0LCB0aGlzLnN1Y2hmZWxkZXIgPz8gdGhpcy5zcGFsdGVuLm1hcCgoc3BhbHRlOiBNcmREYXRlbkxpc3RlU3BhbHRlPFQ+KSA9PlxuICAgICAgKGVpbnRyYWc6IFQpID0+IE1yZERhdGVuTGlzdGVVdGlsLndlcnRWb24oc3BhbHRlLCBlaW50cmFnKSkpO1xuICAgIGlmICh0aGlzLmlzdFNvcnRpZXJ0KSB7XG4gICAgICBlaW50cmFlZ2UgPSBNcmREYXRlbkxpc3RlVXRpbC5zb3J0aWVyZW4oZWludHJhZWdlLCB0aGlzLnNvcnRpZXJ3ZXJ0KHRoaXMuc29ydGllcnVuZy5hY3RpdmUpLCB0aGlzLnNvcnRpZXJ1bmcuZGlyZWN0aW9uIGFzICdhc2MnIHwgJ2Rlc2MnKTtcbiAgICB9XG4gICAgdGhpcy5hbmdlemVpZ3QgPSBlaW50cmFlZ2U7XG4gIH1cblxuICBwcml2YXRlIHNvcnRpZXJPcHRpb25lbkJlcmVjaG5lbigpOiB2b2lkIHtcbiAgICBjb25zdCBvcHRpb25lbjogTXJkRGF0ZW5MaXN0ZVNvcnRpZXJPcHRpb25bXSA9IFt7c2NobHVlc3NlbDogTXJkRGF0ZW5MaXN0ZUNvbXBvbmVudC5TVEFOREFSRCwgYmV6ZWljaG51bmc6ICdTdGFuZGFyZCd9XTtcbiAgICAodGhpcy5zcGFsdGVuID8/IFtdKS5maWx0ZXIoKHNwYWx0ZTogTXJkRGF0ZW5MaXN0ZVNwYWx0ZTxUPikgPT4gc3BhbHRlLnNvcnRpZXJiYXIpXG4gICAgICAuZm9yRWFjaCgoc3BhbHRlOiBNcmREYXRlbkxpc3RlU3BhbHRlPFQ+KSA9PiBvcHRpb25lbi5wdXNoKHtzY2hsdWVzc2VsOiBzcGFsdGUuc2NobHVlc3NlbCwgYmV6ZWljaG51bmc6IHNwYWx0ZS50aXRlbH0pKTtcbiAgICBpZiAodGhpcy5iZXRyaWViRmlsdGVyU2ljaHRiYXIpIHtcbiAgICAgIG9wdGlvbmVuLnB1c2goe3NjaGx1ZXNzZWw6IE1yZERhdGVuTGlzdGVDb21wb25lbnQuQkVUUklFQiwgYmV6ZWljaG51bmc6ICdCZXRyaWViJ30pO1xuICAgIH1cbiAgICB0aGlzLnNvcnRpZXJPcHRpb25lbiA9IG9wdGlvbmVuO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0aWVyd2VydChzY2hsdWVzc2VsOiBzdHJpbmcpOiAoZWludHJhZzogVCkgPT4gTXJkRGF0ZW5MaXN0ZVdlcnQge1xuICAgIGlmIChzY2hsdWVzc2VsID09PSBNcmREYXRlbkxpc3RlQ29tcG9uZW50LkJFVFJJRUIpIHtcbiAgICAgIHJldHVybiAoZWludHJhZzogVCkgPT4gdGhpcy5iZXRyaWViZS5maW5kKChiZXRyaWViOiBNcmREYXRlbkxpc3RlQmV0cmllYikgPT5cbiAgICAgICAgYmV0cmllYi5pZCA9PT0gKGVpbnRyYWcgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW3RoaXMuYmV0cmllYlNjaGx1ZXNzZWxdKT8ubmFtZTtcbiAgICB9XG4gICAgY29uc3Qgc3BhbHRlID0gdGhpcy5zcGFsdGVuLmZpbmQoKHM6IE1yZERhdGVuTGlzdGVTcGFsdGU8VD4pID0+IHMuc2NobHVlc3NlbCA9PT0gc2NobHVlc3NlbCk7XG4gICAgcmV0dXJuIHNwYWx0ZSA/IChlaW50cmFnOiBUKSA9PiBNcmREYXRlbkxpc3RlVXRpbC53ZXJ0Vm9uKHNwYWx0ZSwgZWludHJhZykgOiAoKSA9PiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBpZFZvbihlaW50cmFnOiBUKTogdW5rbm93biB7XG4gICAgcmV0dXJuIChlaW50cmFnIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KT8uW3RoaXMuaWRlbnRpZmllcl07XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJtcmQtZGF0ZW4tbGlzdGUta29wZmJlcmVpY2hcIj5cbiAgPG1yZC1mb3JtLWZpZWxkICpuZ0lmPVwic3VjaGVcIiBjbGFzcz1cIm1yZC1kYXRlbi1saXN0ZS1zdWNoZVwiPlxuICAgIDxtcmQtbGFiZWwgZmxvYXQ9XCJuZXZlclwiPnt7c3VjaFBsYXR6aGFsdGVyfX08L21yZC1sYWJlbD5cbiAgICA8bXJkLWlucHV0IFt2YWx1ZV09XCJzdWNodGV4dFwiICh2YWx1ZUNoYW5nZSk9XCJzdWNodGV4dEdlYWVuZGVydCgkZXZlbnQpXCI+PC9tcmQtaW5wdXQ+XG4gICAgPG1yZC1zdWZmaXg+PG1yZC1pY29uIGljb249XCJzdWNoZVwiPjwvbXJkLWljb24+PC9tcmQtc3VmZml4PlxuICA8L21yZC1mb3JtLWZpZWxkPlxuXG4gIDxkaXYgKm5nSWY9XCJiZXRyaWViRmlsdGVyU2ljaHRiYXIgfHwgc29ydGllckF1c3dhaGxcIiBjbGFzcz1cIm1yZC1kYXRlbi1saXN0ZS1hdXN3YWhsemVpbGVcIj5cbiAgICA8bXJkLWZvcm0tZmllbGQgKm5nSWY9XCJiZXRyaWViRmlsdGVyU2ljaHRiYXJcIiBjbGFzcz1cIm1yZC1kYXRlbi1saXN0ZS1iZXRyaWViZVwiPlxuICAgICAgPG1yZC1sYWJlbCBmbG9hdD1cImFsd2F5c1wiPkJldHJpZWJlPC9tcmQtbGFiZWw+XG4gICAgICA8bXJkLXNlbGVjdCBtdWx0aXBsZSBbdmFsdWVdPVwiYmV0cmllYkZpbHRlclwiICh2YWx1ZUNoYW5nZSk9XCJiZXRyaWViRmlsdGVyR2VhZW5kZXJ0KCRldmVudClcIj5cbiAgICAgICAgPG1yZC1zZWxlY3Qtb3B0aW9uICpuZ0Zvcj1cImxldCBiZXRyaWViIG9mIGJldHJpZWJlXCIgW3ZhbHVlXT1cImJldHJpZWIuaWRcIj57e2JldHJpZWIubmFtZX19PC9tcmQtc2VsZWN0LW9wdGlvbj5cbiAgICAgIDwvbXJkLXNlbGVjdD5cbiAgICA8L21yZC1mb3JtLWZpZWxkPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzb3J0aWVyQXVzd2FobFwiPlxuICAgICAgPG1yZC1mb3JtLWZpZWxkIGNsYXNzPVwibXJkLWRhdGVuLWxpc3RlLXNvcnRpZXJ1bmdcIj5cbiAgICAgICAgPG1yZC1sYWJlbCBmbG9hdD1cImFsd2F5c1wiPlNvcnRpZXJ1bmc8L21yZC1sYWJlbD5cbiAgICAgICAgPG1yZC1zZWxlY3QgW3ZhbHVlXT1cInNvcnRpZXJTY2hsdWVzc2VsXCIgKHZhbHVlQ2hhbmdlKT1cInNvcnRpZXJTY2hsdWVzc2VsR2VhZW5kZXJ0KCRldmVudClcIj5cbiAgICAgICAgICA8bXJkLXNlbGVjdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBzb3J0aWVyT3B0aW9uZW5cIiBbdmFsdWVdPVwib3B0aW9uLnNjaGx1ZXNzZWxcIiBub0NoZWNrYm94Pnt7b3B0aW9uLmJlemVpY2hudW5nfX08L21yZC1zZWxlY3Qtb3B0aW9uPlxuICAgICAgICA8L21yZC1zZWxlY3Q+XG4gICAgICA8L21yZC1mb3JtLWZpZWxkPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtcmQtZGF0ZW4tbGlzdGUtcmljaHR1bmdcIiBbZGlzYWJsZWRdPVwiIWlzdFNvcnRpZXJ0XCIgKGNsaWNrKT1cInJpY2h0dW5nVW1zY2hhbHRlbigpXCJcbiAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhYnN0ZWlnZW5kID8gJ0Fic3RlaWdlbmQgc29ydGllcnQnIDogJ0F1ZnN0ZWlnZW5kIHNvcnRpZXJ0J1wiPlxuICAgICAgICA8c3ZnIFtjbGFzcy5tcmQtZGF0ZW4tbGlzdGUtcmljaHR1bmctYWJzdGVpZ2VuZF09XCJhYnN0ZWlnZW5kXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTMgMjBoLTJWOGwtNS41IDUuNS0xLjQyLTEuNDJMMTIgNC4xNmw3LjkyIDcuOTItMS40MiAxLjQyTDEzIDh2MTJ6XCI+PC9wYXRoPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cblxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbbXJkRGF0ZW5MaXN0ZUZpbHRlcl1cIj48L25nLWNvbnRlbnQ+XG5cbiAgPG1yZC10b2dnbGUtc3dpdGNoICpuZ0lmPVwiaW5ha3RpdlBydWVmdW5nXCIgc2xpbSBjbGFzcz1cIm1yZC1kYXRlbi1saXN0ZS1pbmFrdGl2LXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJpbmFrdGl2ZUF1c2JsZW5kZW5cIiAoY2hlY2tlZENoYW5nZSk9XCJpbmFrdGl2ZUF1c2JsZW5kZW5HZWFlbmRlcnQoJGV2ZW50KVwiPlxuICAgIEluYWt0aXZlIGF1c2JsZW5kZW5cbiAgPC9tcmQtdG9nZ2xlLXN3aXRjaD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwibXJkLWRhdGVuLWxpc3RlLXNwYWx0ZW5rb2VwZmVcIiBbbXJkU29ydF09XCJrb3BmU29ydGllcnVuZyA/IHNvcnRpZXJ1bmcgOiBudWxsXCIgbXJkU29ydENsZWFyIFttcmRTb3J0RGlzYWJsZWRdPVwiIWtvcGZTb3J0aWVydW5nXCJcbiAgICAgKG1yZFNvcnRDaGFuZ2UpPVwic29ydGllcnVuZ1NldHplbigkZXZlbnQpXCI+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHNwYWx0ZSBvZiBzcGFsdGVuXCI+XG4gICAgPGRpdiAqbmdJZj1cImtvcGZTb3J0aWVydW5nICYmIHNwYWx0ZS5zb3J0aWVyYmFyOyBlbHNlIG9obmVTb3J0aWVydW5nXCJcbiAgICAgICAgIGNsYXNzPVwibXJkLWRhdGVuLWxpc3RlLXNwYWx0ZVwiIFttcmQtc29ydC1oZWFkZXJdPVwic3BhbHRlLnNjaGx1ZXNzZWxcIlxuICAgICAgICAgW2Fycm93UG9zaXRpb25dPVwic3BhbHRlLmF1c3JpY2h0dW5nID09PSAncmVjaHRzJyA/ICdiZWZvcmUnIDogJ2FmdGVyJ1wiXG4gICAgICAgICBbY2xhc3MubXJkLWRhdGVuLWxpc3RlLXNwYWx0ZS1mbGV4XT1cInNwYWx0ZS5mbGV4XCIgW3N0eWxlLndpZHRoLnB4XT1cInNwYWx0ZS5icmVpdGVcIlxuICAgICAgICAgW2NsYXNzLm1yZC1kYXRlbi1saXN0ZS1taXR0ZV09XCJzcGFsdGUuYXVzcmljaHR1bmcgPT09ICdtaXR0ZSdcIiBbY2xhc3MubXJkLWRhdGVuLWxpc3RlLXJlY2h0c109XCJzcGFsdGUuYXVzcmljaHR1bmcgPT09ICdyZWNodHMnXCI+XG4gICAgICB7e3NwYWx0ZS50aXRlbH19XG4gICAgPC9kaXY+XG4gICAgPG5nLXRlbXBsYXRlICNvaG5lU29ydGllcnVuZz5cbiAgICAgIDxkaXYgY2xhc3M9XCJtcmQtZGF0ZW4tbGlzdGUtc3BhbHRlXCIgW2NsYXNzLm1yZC1kYXRlbi1saXN0ZS1zcGFsdGUtZmxleF09XCJzcGFsdGUuZmxleFwiIFtzdHlsZS53aWR0aC5weF09XCJzcGFsdGUuYnJlaXRlXCJcbiAgICAgICAgICAgW2NsYXNzLm1yZC1kYXRlbi1saXN0ZS1taXR0ZV09XCJzcGFsdGUuYXVzcmljaHR1bmcgPT09ICdtaXR0ZSdcIiBbY2xhc3MubXJkLWRhdGVuLWxpc3RlLXJlY2h0c109XCJzcGFsdGUuYXVzcmljaHR1bmcgPT09ICdyZWNodHMnXCI+XG4gICAgICAgIHt7c3BhbHRlLnRpdGVsfX1cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG5cbjxkaXYgKm5nSWY9XCJsYWVkdFwiIGNsYXNzPVwibXJkLWRhdGVuLWxpc3RlLWhpbndlaXNcIj5cbiAgPG1yZC1wcm9ncmVzcy1zcGlubmVyPjwvbXJkLXByb2dyZXNzLXNwaW5uZXI+XG48L2Rpdj5cbjxkaXYgKm5nSWY9XCIhbGFlZHQgJiYgYW5nZXplaWd0Lmxlbmd0aCA9PT0gMFwiIGNsYXNzPVwibXJkLWRhdGVuLWxpc3RlLWhpbndlaXNcIj57e2xlZXJUZXh0fX08L2Rpdj5cblxuPG1yZC1saXN0ICpuZ0lmPVwiIWxhZWR0XCIgW2NsYXNzLm1yZC1kYXRlbi1saXN0ZS1sZWVyXT1cImFuZ2V6ZWlndC5sZW5ndGggPT09IDBcIiBjbGFzcz1cIm1yZC1kYXRlbi1saXN0ZS1saXN0ZVwiIGRpdmlkZXIgc2VsZWN0YWJsZSB2aXJ0dWFsU2Nyb2xsXG4gICAgICAgICAgW2l0ZW1zXT1cImFuZ2V6ZWlndFwiIFtpdGVtU2l6ZV09XCJ6ZWlsZW5ob2VoZVwiIFt0cmFja0J5XT1cInRyYWNrQnlcIiBbYW5nZWhlZnRldF09XCJhdXNnZXdhZWhsdFwiPlxuICA8bmctdGVtcGxhdGUgW21yZExpc3RJdGVtXT1cImFuZ2V6ZWlndFwiIGxldC1laW50cmFnPlxuICAgIDxtcmQtbGlzdC1pdGVtIFtzZWxlY3RlZF09XCJpc3RBdXNnZXdhZWhsdChlaW50cmFnKVwiIFtjbGFzcy5tcmQtZGF0ZW4tbGlzdGUtaW5ha3Rpdl09XCJpc3RJbmFrdGl2KGVpbnRyYWcpXCIgKGNsaWNrKT1cImF1c3dhaGwuZW1pdChlaW50cmFnKVwiPlxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgc3BhbHRlIG9mIHNwYWx0ZW5cIiBjbGFzcz1cIm1yZC1kYXRlbi1saXN0ZS1zcGFsdGVcIiBbY2xhc3MubXJkLWRhdGVuLWxpc3RlLXNwYWx0ZS1mbGV4XT1cInNwYWx0ZS5mbGV4XCIgW3N0eWxlLndpZHRoLnB4XT1cInNwYWx0ZS5icmVpdGVcIlxuICAgICAgICAgICBbY2xhc3MubXJkLWRhdGVuLWxpc3RlLW1pdHRlXT1cInNwYWx0ZS5hdXNyaWNodHVuZyA9PT0gJ21pdHRlJ1wiIFtjbGFzcy5tcmQtZGF0ZW4tbGlzdGUtcmVjaHRzXT1cInNwYWx0ZS5hdXNyaWNodHVuZyA9PT0gJ3JlY2h0cydcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInplbGxlKHNwYWx0ZS5zY2hsdWVzc2VsKSBhcyB0ZW1wbGF0ZTsgZWxzZSBzdGFuZGFyZFplbGxlXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlOyBjb250ZXh0OiB7JGltcGxpY2l0OiBlaW50cmFnLCBhdXNnZXdhZWhsdDogaXN0QXVzZ2V3YWVobHQoZWludHJhZyl9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctdGVtcGxhdGUgI3N0YW5kYXJkWmVsbGU+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtcmQtZGF0ZW4tbGlzdGUtdGV4dFwiIFtsaW5lLWNsYW1wXT1cIjJcIiBbbXJkVG9vbFRpcF09XCJ0ZXh0KHNwYWx0ZSwgZWludHJhZylcIiBzaG93SWZUcnVuY2F0ZWQ+e3t0ZXh0KHNwYWx0ZSwgZWludHJhZyl9fTwvc3Bhbj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvbXJkLWxpc3QtaXRlbT5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvbXJkLWxpc3Q+XG5cbjxuZy1jb250ZW50IHNlbGVjdD1cIlttcmREYXRlbkxpc3RlQWt0aW9uZW5dXCI+PC9uZy1jb250ZW50PlxuIl19