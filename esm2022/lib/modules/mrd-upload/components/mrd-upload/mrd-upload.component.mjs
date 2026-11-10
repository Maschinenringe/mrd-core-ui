import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';
import { AccessableControlFactory, BaseObject, SubscriptionHandler } from 'mrd-core';
import { sizeAttribute } from '../../../../common/transforms/size-transform';
import { MrdColor } from '../../../../common/enum/color.enum';
import { MRD_UPLOAD_ALLE_DATEITYPEN } from '../../common/model/mrd-upload-format.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../mrd-form-field/components/mrd-form-field/mrd-form-field.component";
import * as i3 from "../../../mrd-form-field/components/mrd-select/mrd-select.component";
import * as i4 from "../../../mrd-form-field/components/mrd-select-option/mrd-select-option.component";
import * as i5 from "../../../mrd-form-field/components/mrd-label/mrd-label.component";
import * as i6 from "../../../mrd-icon/components/mrd-icon.component";
import * as i7 from "../../../mrd-tooltip/common/directive/tool-tip-renderer/tool-tip-renderer.directive";
import * as i8 from "../../../../s-modules/mrd-s-button/components/mrd-s-button/mrd-s-button.component";
function MrdUploadComponent_mrd_form_field_1_mrd_select_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mrd-select-option", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const eintrag_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", eintrag_r6.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(eintrag_r6.bezeichnung);
} }
function MrdUploadComponent_mrd_form_field_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mrd-form-field", 10)(1, "mrd-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mrd-select", 11);
    i0.ɵɵtemplate(4, MrdUploadComponent_mrd_form_field_1_mrd_select_option_4_Template, 2, 2, "mrd-select-option", 12);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.formatLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("mrdFormControl", ctx_r0.formatControl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.formatListe);
} }
function MrdUploadComponent_mrd_s_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-s-button", 14);
    i0.ɵɵlistener("click", function MrdUploadComponent_mrd_s_button_3_Template_mrd_s_button_click_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.zuruecksetzen($event)); });
    i0.ɵɵelement(1, "mrd-icon", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("mrdToolTip", ctx_r1.zuruecksetzenText);
    i0.ɵɵattribute("aria-label", ctx_r1.zuruecksetzenText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("color", ctx_r1.zuruecksetzenIconFarbe);
} }
function MrdUploadComponent_ng_container_5_mrd_icon_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mrd-icon", 19);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("color", ctx_r9.infoFarbe)("mrdToolTip", ctx_r9.format == null ? null : ctx_r9.format.infoIconText);
} }
function MrdUploadComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 16);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, MrdUploadComponent_ng_container_5_mrd_icon_3_Template, 1, 2, "mrd-icon", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mrd-s-button", 18);
    i0.ɵɵlistener("click", function MrdUploadComponent_ng_container_5_Template_mrd_s_button_click_4_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); const _r4 = i0.ɵɵreference(10); return i0.ɵɵresetView(ctx_r10.dateiAuswaehlen(_r4)); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.format ? ctx_r2.hinweisText : ctx_r2.formatFehltText, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.format == null ? null : ctx_r2.format.infoIconText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", !ctx_r2.format);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.buttonText);
} }
function MrdUploadComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.fehler);
} }
/**
 * Dateiauswahl per Klick oder Drag & Drop, optional mit vorgeschalteter Formatauswahl.
 * Gemeldet werden nur Dateien, die zum gewaehlten Format passen; abgelehnte kommen ueber `ungueltigeDateien`.
 *
 * `<mrd-upload [formate]="formate" (dateienChange)="dateien = $event" (formatChange)="format = $event"></mrd-upload>`
 */
export class MrdUploadComponent extends BaseObject {
    cdr;
    /** Auswaehlbare Formate; das Array wird nicht veraendert */
    set formate(formate) {
        this._formate = formate ?? [];
        this.formatListeAufbauen();
    }
    get formate() {
        return this._formate;
    }
    _formate = [];
    /** Ergaenzt "Alle Dateitypen" als Format */
    set alleDateitypen(wert) {
        this._alleDateitypen = wert;
        this.formatListeAufbauen();
    }
    get alleDateitypen() {
        return this._alleDateitypen;
    }
    _alleDateitypen = false;
    /** Mehrere Dateien zulassen; sonst zaehlt nur die erste */
    mehrfach = false;
    iconGroesse = '48px';
    formatLabel = 'Wähle ein Format';
    hinweisText = 'Klicke hier oder ziehe deine Datei hierher.';
    formatFehltText = 'Bitte wähle zuerst ein Format aus.';
    buttonText = 'Datei auswählen';
    keineDateiText = 'Keine Datei ausgewählt';
    ungueltigText = 'Dateityp nicht zulässig';
    zuruecksetzenText = 'Dateiauswahl zurücksetzen';
    dateienChange = new EventEmitter();
    formatChange = new EventEmitter();
    ungueltigeDateien = new EventEmitter();
    /** Eigenes Control je Instanz, damit mehrere Upload-Felder sich nicht gegenseitig die Auswahl ueberschreiben */
    infoFarbe = MrdColor.GRUEN;
    zuruecksetzenIconFarbe = MrdColor.WARNROT;
    formatControl = AccessableControlFactory.simpleControl(null, []);
    /** Formate samt ergaenztem "Alle Dateitypen" */
    formatListe = [];
    dateien = [];
    fehler = null;
    ziehen = false;
    constructor(cdr) {
        super();
        this.cdr = cdr;
        this.watch(this.formatControl.valueChanges, new SubscriptionHandler(() => {
            this.fehler = null;
            this.cdr.markForCheck();
            // Verzoegert: die automatische Auswahl passiert beim Setzen von `formate` mitten in der Change Detection des Aufrufers
            const format = this.format;
            Promise.resolve().then(() => this.formatChange.emit(format));
        }));
        // Ohne gebundenes `formate` liefe der Setter nie; dann gibt es nur "Alle Dateitypen"
        this.formatListeAufbauen();
    }
    get format() {
        return this.formatListe.find((format) => format.key === this.formatControl.value) ?? null;
    }
    get dateinamen() {
        if (this.dateien.length === 0) {
            return this.keineDateiText;
        }
        const namen = this.dateien.map((datei) => datei.name).join(', ');
        return this.dateien.length === 1 ? `Datei: ${namen}` : `Dateien: ${namen}`;
    }
    dateiAuswaehlen(eingabe) {
        if (this.format && this.dateien.length === 0) {
            eingabe.click();
        }
    }
    dateiGewaehlt(event) {
        const eingabe = event.target;
        this.dateienUebernehmen(Array.from(eingabe.files ?? []));
        // Sonst loest dieselbe Datei beim naechsten Auswaehlen kein change mehr aus
        eingabe.value = '';
    }
    ueberBereich(event) {
        event.preventDefault();
        this.ziehen = !!this.format;
    }
    ablegen(event) {
        event.preventDefault();
        this.ziehen = false;
        if (!this.format) {
            return;
        }
        this.dateienUebernehmen(Array.from(event.dataTransfer?.files ?? []));
    }
    zuruecksetzen(event) {
        event?.stopPropagation();
        this.dateien = [];
        this.fehler = null;
        this.dateienChange.emit([]);
        this.cdr.markForCheck();
    }
    /** Passende Dateien uebernehmen, unpassende melden; ohne passende bleibt die bisherige Auswahl */
    dateienUebernehmen(dateien) {
        if (dateien.length === 0) {
            return;
        }
        const kandidaten = this.mehrfach ? dateien : dateien.slice(0, 1);
        const erlaubt = this.format?.acceptedDataTypes ?? '*';
        const gueltig = kandidaten.filter((datei) => MrdUploadComponent.istErlaubt(datei, erlaubt));
        const ungueltig = kandidaten.filter((datei) => !gueltig.includes(datei));
        this.fehler = ungueltig.length > 0 ? `${this.ungueltigText}: ${ungueltig.map((datei) => datei.name).join(', ')}` : null;
        if (ungueltig.length > 0) {
            this.ungueltigeDateien.emit(ungueltig);
        }
        if (gueltig.length > 0) {
            this.dateien = gueltig;
            this.dateienChange.emit(gueltig);
        }
        this.cdr.markForCheck();
    }
    formatListeAufbauen() {
        const ergaenzen = this._alleDateitypen || this._formate.length === 0;
        this.formatListe = ergaenzen ? [...this._formate, MRD_UPLOAD_ALLE_DATEITYPEN] : [...this._formate];
        const aktuell = this.formatControl.value;
        if (this.formatListe.length === 1) {
            this.formatControl.setValue(this.formatListe[0].key);
        }
        else if (aktuell !== null && !this.formatListe.some((format) => format.key === aktuell)) {
            this.formatControl.setValue(null);
        }
    }
    /** Wie das `accept`-Attribut: Endungen ohne Gross-/Kleinschreibung, MIME-Typen auch mit `/*`, `*` fuer alle */
    static istErlaubt(datei, erlaubt) {
        const typen = (erlaubt ?? '').split(',').map((typ) => typ.trim().toLowerCase()).filter((typ) => typ.length > 0);
        if (typen.length === 0 || typen.includes('*')) {
            return true;
        }
        const name = datei.name.toLowerCase();
        const mime = (datei.type ?? '').toLowerCase();
        return typen.some((typ) => {
            if (typ.startsWith('.')) {
                return name.endsWith(typ);
            }
            if (typ.endsWith('/*')) {
                return mime.startsWith(typ.slice(0, -1));
            }
            return mime === typ;
        });
    }
    /** @nocollapse */ static ɵfac = function MrdUploadComponent_Factory(t) { return new (t || MrdUploadComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdUploadComponent, selectors: [["mrd-upload"]], inputs: { formate: "formate", alleDateitypen: ["alleDateitypen", "alleDateitypen", booleanAttribute], mehrfach: ["mehrfach", "mehrfach", booleanAttribute], iconGroesse: ["iconGroesse", "iconGroesse", sizeAttribute], formatLabel: "formatLabel", hinweisText: "hinweisText", formatFehltText: "formatFehltText", buttonText: "buttonText", keineDateiText: "keineDateiText", ungueltigText: "ungueltigText", zuruecksetzenText: "zuruecksetzenText" }, outputs: { dateienChange: "dateienChange", formatChange: "formatChange", ungueltigeDateien: "ungueltigeDateien" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 15, consts: [[1, "mrd-upload"], ["fill", "", "class", "mrd-upload-format", 4, "ngIf"], ["role", "button", 1, "mrd-upload-bereich", 3, "click", "dragover", "dragleave", "drop"], ["size", "fullIcon", "class", "mrd-upload-zuruecksetzen", 3, "mrdToolTip", "click", 4, "ngIf"], ["icon", "upload", 1, "mrd-upload-icon", 3, "size"], [4, "ngIf"], [1, "mrd-upload-dateiname"], ["class", "mrd-upload-fehler", "role", "alert", 4, "ngIf"], ["type", "file", "hidden", "", 3, "multiple", "accept", "change"], ["dateiEingabe", ""], ["fill", "", 1, "mrd-upload-format"], [3, "mrdFormControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["size", "fullIcon", 1, "mrd-upload-zuruecksetzen", 3, "mrdToolTip", "click"], ["icon", "schliessen", "size", "32", 3, "color"], [1, "mrd-upload-hinweis"], ["class", "mrd-upload-info", "icon", "info", "full", "", "size", "18", 3, "color", "mrdToolTip", 4, "ngIf"], ["theme", "primary", "size", "small", 3, "disabled", "click"], ["icon", "info", "full", "", "size", "18", 1, "mrd-upload-info", 3, "color", "mrdToolTip"], ["role", "alert", 1, "mrd-upload-fehler"]], template: function MrdUploadComponent_Template(rf, ctx) { if (rf & 1) {
            const _r12 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, MrdUploadComponent_mrd_form_field_1_Template, 5, 3, "mrd-form-field", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵlistener("click", function MrdUploadComponent_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r12); const _r4 = i0.ɵɵreference(10); return i0.ɵɵresetView(ctx.dateiAuswaehlen(_r4)); })("dragover", function MrdUploadComponent_Template_div_dragover_2_listener($event) { return ctx.ueberBereich($event); })("dragleave", function MrdUploadComponent_Template_div_dragleave_2_listener() { return ctx.ziehen = false; })("drop", function MrdUploadComponent_Template_div_drop_2_listener($event) { return ctx.ablegen($event); });
            i0.ɵɵtemplate(3, MrdUploadComponent_mrd_s_button_3_Template, 2, 3, "mrd-s-button", 3);
            i0.ɵɵelement(4, "mrd-icon", 4);
            i0.ɵɵtemplate(5, MrdUploadComponent_ng_container_5_Template, 6, 4, "ng-container", 5);
            i0.ɵɵelementStart(6, "span", 6);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, MrdUploadComponent_span_8_Template, 2, 1, "span", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "input", 8, 9);
            i0.ɵɵlistener("change", function MrdUploadComponent_Template_input_change_9_listener($event) { return ctx.dateiGewaehlt($event); });
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            let tmp_11_0;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.formatListe.length > 1);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("mrd-upload-gesperrt", !ctx.format)("mrd-upload-ziehen", ctx.ziehen)("mrd-upload-mit-dateien", ctx.dateien.length > 0);
            i0.ɵɵattribute("aria-disabled", !ctx.format);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.dateien.length > 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("size", ctx.iconGroesse);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.dateien.length === 0);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.dateinamen);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.fehler);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("multiple", ctx.mehrfach)("accept", (tmp_11_0 = ctx.format == null ? null : ctx.format.acceptedDataTypes) !== null && tmp_11_0 !== undefined ? tmp_11_0 : "");
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.MrdFormFieldComponent, i3.MrdSelectComponent, i4.MrdSelectOptionComponent, i5.MrdLabelComponent, i6.MrdIconComponent, i7.ToolTipRendererDirective, i8.MrdSButtonComponent], styles: ["[_nghost-%COMP%]{display:block}.mrd-upload[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:16px}.mrd-upload-format[_ngcontent-%COMP%]{width:260px}.mrd-upload-bereich[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;box-sizing:border-box;width:100%;max-width:420px;padding:24px;border:2px dashed #949EA7;border-radius:10px;background-color:#ebeff3;color:#293d4f;cursor:pointer;transition:background-color .2s ease,border-color .2s ease}.mrd-upload-bereich[_ngcontent-%COMP%]:hover:not(.mrd-upload-gesperrt):not(.mrd-upload-mit-dateien){background-color:#d8dfe8}.mrd-upload-bereich.mrd-upload-ziehen[_ngcontent-%COMP%]{border-color:#65b32e;background-color:#e0f0d4}.mrd-upload-bereich.mrd-upload-gesperrt[_ngcontent-%COMP%]{cursor:default;opacity:.6}.mrd-upload-bereich.mrd-upload-mit-dateien[_ngcontent-%COMP%]{cursor:default}.mrd-upload-icon[_ngcontent-%COMP%]{color:#65b32e}.mrd-upload-hinweis[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;text-align:center}.mrd-upload-info[_ngcontent-%COMP%]{cursor:help}.mrd-upload-dateiname[_ngcontent-%COMP%]{font-size:.875em;text-align:center;word-break:break-word}.mrd-upload-fehler[_ngcontent-%COMP%]{font-size:.875em;color:#da0000;text-align:center}.mrd-upload-zuruecksetzen[_ngcontent-%COMP%]{position:absolute;top:8px;right:8px;display:inline-flex;padding:0;border:none;background:transparent;color:#da0000;cursor:pointer}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdUploadComponent, [{
        type: Component,
        args: [{ selector: 'mrd-upload', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mrd-upload\">\n  <mrd-form-field fill *ngIf=\"formatListe.length > 1\" class=\"mrd-upload-format\">\n    <mrd-label>{{formatLabel}}</mrd-label>\n    <mrd-select [mrdFormControl]=\"formatControl\">\n      <mrd-select-option *ngFor=\"let eintrag of formatListe\" [value]=\"eintrag.key\">{{eintrag.bezeichnung}}</mrd-select-option>\n    </mrd-select>\n  </mrd-form-field>\n\n  <div class=\"mrd-upload-bereich\" role=\"button\"\n    [class.mrd-upload-gesperrt]=\"!format\"\n    [class.mrd-upload-ziehen]=\"ziehen\"\n    [class.mrd-upload-mit-dateien]=\"dateien.length > 0\"\n    [attr.aria-disabled]=\"!format\"\n    (click)=\"dateiAuswaehlen(dateiEingabe)\"\n    (dragover)=\"ueberBereich($event)\"\n    (dragleave)=\"ziehen = false\"\n    (drop)=\"ablegen($event)\">\n    <mrd-s-button size=\"fullIcon\" class=\"mrd-upload-zuruecksetzen\" *ngIf=\"dateien.length > 0\"\n      [mrdToolTip]=\"zuruecksetzenText\" [attr.aria-label]=\"zuruecksetzenText\" (click)=\"zuruecksetzen($event)\">\n      <mrd-icon icon=\"schliessen\" [color]=\"zuruecksetzenIconFarbe\" size=\"32\"></mrd-icon>\n    </mrd-s-button>\n\n    <mrd-icon class=\"mrd-upload-icon\" icon=\"upload\" [size]=\"iconGroesse\"></mrd-icon>\n\n    <ng-container *ngIf=\"dateien.length === 0\">\n      <span class=\"mrd-upload-hinweis\">\n        {{format ? hinweisText : formatFehltText}}\n        <mrd-icon *ngIf=\"format?.infoIconText\" class=\"mrd-upload-info\" icon=\"info\" full [color]=\"infoFarbe\" size=\"18\" [mrdToolTip]=\"format?.infoIconText\"></mrd-icon>\n      </span>\n      <mrd-s-button theme=\"primary\" size=\"small\" [disabled]=\"!format\" (click)=\"dateiAuswaehlen(dateiEingabe)\">{{buttonText}}</mrd-s-button>\n    </ng-container>\n\n    <span class=\"mrd-upload-dateiname\">{{dateinamen}}</span>\n    <span class=\"mrd-upload-fehler\" *ngIf=\"fehler\" role=\"alert\">{{fehler}}</span>\n  </div>\n\n  <!-- Ausserhalb des Bereichs, sonst loest dessen Klick-Handler beim programmatischen click() erneut aus -->\n  <input #dateiEingabe type=\"file\" hidden [multiple]=\"mehrfach\" [accept]=\"format?.acceptedDataTypes ?? ''\" (change)=\"dateiGewaehlt($event)\">\n</div>\n", styles: [":host{display:block}.mrd-upload{display:flex;flex-direction:column;align-items:center;gap:16px}.mrd-upload-format{width:260px}.mrd-upload-bereich{position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;box-sizing:border-box;width:100%;max-width:420px;padding:24px;border:2px dashed #949EA7;border-radius:10px;background-color:#ebeff3;color:#293d4f;cursor:pointer;transition:background-color .2s ease,border-color .2s ease}.mrd-upload-bereich:hover:not(.mrd-upload-gesperrt):not(.mrd-upload-mit-dateien){background-color:#d8dfe8}.mrd-upload-bereich.mrd-upload-ziehen{border-color:#65b32e;background-color:#e0f0d4}.mrd-upload-bereich.mrd-upload-gesperrt{cursor:default;opacity:.6}.mrd-upload-bereich.mrd-upload-mit-dateien{cursor:default}.mrd-upload-icon{color:#65b32e}.mrd-upload-hinweis{display:inline-flex;align-items:center;gap:4px;text-align:center}.mrd-upload-info{cursor:help}.mrd-upload-dateiname{font-size:.875em;text-align:center;word-break:break-word}.mrd-upload-fehler{font-size:.875em;color:#da0000;text-align:center}.mrd-upload-zuruecksetzen{position:absolute;top:8px;right:8px;display:inline-flex;padding:0;border:none;background:transparent;color:#da0000;cursor:pointer}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { formate: [{
            type: Input
        }], alleDateitypen: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], mehrfach: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], iconGroesse: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }], formatLabel: [{
            type: Input
        }], hinweisText: [{
            type: Input
        }], formatFehltText: [{
            type: Input
        }], buttonText: [{
            type: Input
        }], keineDateiText: [{
            type: Input
        }], ungueltigText: [{
            type: Input
        }], zuruecksetzenText: [{
            type: Input
        }], dateienChange: [{
            type: Output
        }], formatChange: [{
            type: Output
        }], ungueltigeDateien: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXVwbG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLXVwbG9hZC9jb21wb25lbnRzL21yZC11cGxvYWQvbXJkLXVwbG9hZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLXVwbG9hZC9jb21wb25lbnRzL21yZC11cGxvYWQvbXJkLXVwbG9hZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySSxPQUFPLEVBQUUsd0JBQXdCLEVBQXlCLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlELE9BQU8sRUFBRSwwQkFBMEIsRUFBbUIsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7Ozs7Ozs7SUNBbkcsNkNBQTZFO0lBQUEsWUFBdUI7SUFBQSxpQkFBb0I7OztJQUFqRSxzQ0FBcUI7SUFBQyxlQUF1QjtJQUF2Qiw0Q0FBdUI7OztJQUh4RywwQ0FBOEUsZ0JBQUE7SUFDakUsWUFBZTtJQUFBLGlCQUFZO0lBQ3RDLHNDQUE2QztJQUMzQyxpSEFBd0g7SUFDMUgsaUJBQWEsRUFBQTs7O0lBSEYsZUFBZTtJQUFmLHdDQUFlO0lBQ2QsZUFBZ0M7SUFBaEMscURBQWdDO0lBQ0gsZUFBYztJQUFkLDRDQUFjOzs7O0lBYXZELHdDQUN5RztJQUFoQyxvTEFBUyxlQUFBLDRCQUFxQixDQUFBLElBQUM7SUFDdEcsK0JBQWtGO0lBQ3BGLGlCQUFlOzs7SUFGYixxREFBZ0M7SUFBQyxzREFBcUM7SUFDMUMsZUFBZ0M7SUFBaEMscURBQWdDOzs7SUFRMUQsK0JBQTZKOzs7SUFBN0Usd0NBQW1CLHlFQUFBOzs7O0lBSHZHLDZCQUEyQztJQUN6QyxnQ0FBaUM7SUFDL0IsWUFDQTtJQUFBLDZGQUE2SjtJQUMvSixpQkFBTztJQUNQLHdDQUF3RztJQUF4QyxnTkFBUyxlQUFBLDRCQUE2QixDQUFBLElBQUM7SUFBQyxZQUFjO0lBQUEsaUJBQWU7SUFDdkksMEJBQWU7OztJQUpYLGVBQ0E7SUFEQSw0RkFDQTtJQUFXLGVBQTBCO0lBQTFCLGdGQUEwQjtJQUVJLGVBQW9CO0lBQXBCLHlDQUFvQjtJQUF5QyxlQUFjO0lBQWQsdUNBQWM7OztJQUl4SCxnQ0FBNEQ7SUFBQSxZQUFVO0lBQUEsaUJBQU87OztJQUFqQixlQUFVO0lBQVYsbUNBQVU7O0FEM0IxRTs7Ozs7R0FLRztBQU9ILE1BQU0sT0FBTyxrQkFBZ0UsU0FBUSxVQUFVO0lBbUR6RTtJQWpEcEIsNERBQTREO0lBQzVELElBQW9CLE9BQU8sQ0FBQyxPQUFZO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ08sUUFBUSxHQUFRLEVBQUUsQ0FBQztJQUUzQiw0Q0FBNEM7SUFDNUMsSUFBaUQsY0FBYyxDQUFDLElBQWE7UUFDM0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUNPLGVBQWUsR0FBWSxLQUFLLENBQUM7SUFFekMsMkRBQTJEO0lBQ2QsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUU3QixXQUFXLEdBQVcsTUFBTSxDQUFDO0lBRXZELFdBQVcsR0FBVyxrQkFBa0IsQ0FBQztJQUN6QyxXQUFXLEdBQVcsNkNBQTZDLENBQUM7SUFDcEUsZUFBZSxHQUFXLG9DQUFvQyxDQUFDO0lBQy9ELFVBQVUsR0FBVyxpQkFBaUIsQ0FBQztJQUN2QyxjQUFjLEdBQVcsd0JBQXdCLENBQUM7SUFDbEQsYUFBYSxHQUFXLHlCQUF5QixDQUFDO0lBQ2xELGlCQUFpQixHQUFXLDJCQUEyQixDQUFDO0lBRTlDLGFBQWEsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUNqRSxZQUFZLEdBQTJCLElBQUksWUFBWSxFQUFZLENBQUM7SUFDcEUsaUJBQWlCLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7SUFFL0YsZ0hBQWdIO0lBQ2hHLFNBQVMsR0FBVyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQ25DLHNCQUFzQixHQUFXLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFFbEQsYUFBYSxHQUEwQix3QkFBd0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRXhHLGdEQUFnRDtJQUN6QyxXQUFXLEdBQVEsRUFBRSxDQUFDO0lBQ3RCLE9BQU8sR0FBVyxFQUFFLENBQUM7SUFDckIsTUFBTSxHQUFrQixJQUFJLENBQUM7SUFDN0IsTUFBTSxHQUFZLEtBQUssQ0FBQztJQUUvQixZQUFvQixHQUFzQjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQURVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBRXhDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxtQkFBbUIsQ0FBQyxHQUFHLEVBQUU7WUFDdkUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN4Qix1SEFBdUg7WUFDdkgsTUFBTSxNQUFNLEdBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNyQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNKLHFGQUFxRjtRQUNyRixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQztJQUMvRixDQUFDO0lBRUQsSUFBVyxVQUFVO1FBQ25CLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUM1QjtRQUNELE1BQU0sS0FBSyxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBVyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9FLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLEtBQUssRUFBRSxDQUFDO0lBQzdFLENBQUM7SUFFTSxlQUFlLENBQUMsT0FBeUI7UUFDOUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM1QyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDO0lBRU0sYUFBYSxDQUFDLEtBQVk7UUFDL0IsTUFBTSxPQUFPLEdBQXFCLEtBQUssQ0FBQyxNQUEwQixDQUFDO1FBQ25FLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6RCw0RUFBNEU7UUFDNUUsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVNLFlBQVksQ0FBQyxLQUFnQjtRQUNsQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBRU0sT0FBTyxDQUFDLEtBQWdCO1FBQzdCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFTSxhQUFhLENBQUMsS0FBYTtRQUNoQyxLQUFLLEVBQUUsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsa0dBQWtHO0lBQzFGLGtCQUFrQixDQUFDLE9BQWU7UUFDeEMsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN4QixPQUFPO1NBQ1I7UUFDRCxNQUFNLFVBQVUsR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLE1BQU0sT0FBTyxHQUFXLElBQUksQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLElBQUksR0FBRyxDQUFDO1FBQzlELE1BQU0sT0FBTyxHQUFXLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFXLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMxRyxNQUFNLFNBQVMsR0FBVyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUV2RixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEtBQUssU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQVcsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDOUgsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsQztRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVPLG1CQUFtQjtRQUN6QixNQUFNLFNBQVMsR0FBWSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsMEJBQStCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RyxNQUFNLE9BQU8sR0FBa0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDeEQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0RDthQUFNLElBQUksT0FBTyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBUyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLE9BQU8sQ0FBQyxFQUFFO1lBQzVGLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUVELCtHQUErRztJQUN4RyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQVcsRUFBRSxPQUFlO1FBQ25ELE1BQU0sS0FBSyxHQUFhLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxSSxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0MsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE1BQU0sSUFBSSxHQUFXLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUMsTUFBTSxJQUFJLEdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQVcsRUFBRSxFQUFFO1lBQ2hDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdkIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNCO1lBQ0QsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN0QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFDO1lBQ0QsT0FBTyxJQUFJLEtBQUssR0FBRyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzsrRkFoS1Usa0JBQWtCOzRGQUFsQixrQkFBa0Isa0hBYVYsZ0JBQWdCLHNDQVVoQixnQkFBZ0IsK0NBRWhCLGFBQWE7O1lDM0NsQyw4QkFBd0I7WUFDdEIseUZBS2lCO1lBRWpCLDhCQVEyQjtZQUh6QixvSkFBUyxlQUFBLHdCQUE2QixDQUFBLElBQUMsMkZBQzNCLHdCQUFvQixJQURPLG9HQUVqQixLQUFLLElBRlksbUZBRy9CLG1CQUFlLElBSGdCO1lBSXZDLHFGQUdlO1lBRWYsOEJBQWdGO1lBRWhGLHFGQU1lO1lBRWYsK0JBQW1DO1lBQUEsWUFBYztZQUFBLGlCQUFPO1lBQ3hELHFFQUE2RTtZQUMvRSxpQkFBTTtZQUdOLG1DQUEwSTtZQUFqQyxzR0FBVSx5QkFBcUIsSUFBQztZQUF6SSxpQkFBMEksRUFBQTs7O1lBcENwSCxlQUE0QjtZQUE1QixpREFBNEI7WUFRaEQsZUFBcUM7WUFBckMsa0RBQXFDLGlDQUFBLGtEQUFBO1lBR3JDLDRDQUE4QjtZQUtrQyxlQUF3QjtZQUF4Qiw2Q0FBd0I7WUFLeEMsZUFBb0I7WUFBcEIsc0NBQW9CO1lBRXJELGVBQTBCO1lBQTFCLCtDQUEwQjtZQVFOLGVBQWM7WUFBZCxvQ0FBYztZQUNoQixlQUFZO1lBQVosaUNBQVk7WUFJUCxlQUFxQjtZQUFyQix1Q0FBcUIsb0lBQUE7Ozt1RkRuQmxELGtCQUFrQjtjQU45QixTQUFTOzJCQUNFLFlBQVksbUJBR0wsdUJBQXVCLENBQUMsTUFBTTtvRUFLM0IsT0FBTztrQkFBMUIsS0FBSztZQVUyQyxjQUFjO2tCQUE5RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBVVMsUUFBUTtrQkFBcEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUVNLFdBQVc7a0JBQXBELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsYUFBYSxFQUFDO1lBRWpCLFdBQVc7a0JBQTFCLEtBQUs7WUFDVSxXQUFXO2tCQUExQixLQUFLO1lBQ1UsZUFBZTtrQkFBOUIsS0FBSztZQUNVLFVBQVU7a0JBQXpCLEtBQUs7WUFDVSxjQUFjO2tCQUE3QixLQUFLO1lBQ1UsYUFBYTtrQkFBNUIsS0FBSztZQUNVLGlCQUFpQjtrQkFBaEMsS0FBSztZQUVvQixhQUFhO2tCQUF0QyxNQUFNO1lBQ21CLFlBQVk7a0JBQXJDLE1BQU07WUFDbUIsaUJBQWlCO2tCQUExQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgYm9vbGVhbkF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWNjZXNzYWJsZUNvbnRyb2xGYWN0b3J5LCBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wsIEJhc2VPYmplY3QsIFN1YnNjcmlwdGlvbkhhbmRsZXIgfSBmcm9tICdtcmQtY29yZSc7XG5pbXBvcnQgeyBzaXplQXR0cmlidXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvc2l6ZS10cmFuc2Zvcm0nO1xuaW1wb3J0IHsgTXJkQ29sb3IgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vZW51bS9jb2xvci5lbnVtJztcbmltcG9ydCB7IE1SRF9VUExPQURfQUxMRV9EQVRFSVRZUEVOLCBNcmRVcGxvYWRGb3JtYXQgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kZWwvbXJkLXVwbG9hZC1mb3JtYXQubW9kZWwnO1xuXG4vKipcbiAqIERhdGVpYXVzd2FobCBwZXIgS2xpY2sgb2RlciBEcmFnICYgRHJvcCwgb3B0aW9uYWwgbWl0IHZvcmdlc2NoYWx0ZXRlciBGb3JtYXRhdXN3YWhsLlxuICogR2VtZWxkZXQgd2VyZGVuIG51ciBEYXRlaWVuLCBkaWUgenVtIGdld2FlaGx0ZW4gRm9ybWF0IHBhc3NlbjsgYWJnZWxlaG50ZSBrb21tZW4gdWViZXIgYHVuZ3VlbHRpZ2VEYXRlaWVuYC5cbiAqXG4gKiBgPG1yZC11cGxvYWQgW2Zvcm1hdGVdPVwiZm9ybWF0ZVwiIChkYXRlaWVuQ2hhbmdlKT1cImRhdGVpZW4gPSAkZXZlbnRcIiAoZm9ybWF0Q2hhbmdlKT1cImZvcm1hdCA9ICRldmVudFwiPjwvbXJkLXVwbG9hZD5gXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yZC11cGxvYWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21yZC11cGxvYWQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTXJkVXBsb2FkQ29tcG9uZW50PFQgZXh0ZW5kcyBNcmRVcGxvYWRGb3JtYXQgPSBNcmRVcGxvYWRGb3JtYXQ+IGV4dGVuZHMgQmFzZU9iamVjdCB7XG5cbiAgLyoqIEF1c3dhZWhsYmFyZSBGb3JtYXRlOyBkYXMgQXJyYXkgd2lyZCBuaWNodCB2ZXJhZW5kZXJ0ICovXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgZm9ybWF0ZShmb3JtYXRlOiBUW10pIHtcbiAgICB0aGlzLl9mb3JtYXRlID0gZm9ybWF0ZSA/PyBbXTtcbiAgICB0aGlzLmZvcm1hdExpc3RlQXVmYmF1ZW4oKTtcbiAgfVxuICBwdWJsaWMgZ2V0IGZvcm1hdGUoKTogVFtdIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0ZTtcbiAgfVxuICBwcml2YXRlIF9mb3JtYXRlOiBUW10gPSBbXTtcblxuICAvKiogRXJnYWVuenQgXCJBbGxlIERhdGVpdHlwZW5cIiBhbHMgRm9ybWF0ICovXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgcHVibGljIHNldCBhbGxlRGF0ZWl0eXBlbih3ZXJ0OiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWxsZURhdGVpdHlwZW4gPSB3ZXJ0O1xuICAgIHRoaXMuZm9ybWF0TGlzdGVBdWZiYXVlbigpO1xuICB9XG4gIHB1YmxpYyBnZXQgYWxsZURhdGVpdHlwZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbGVEYXRlaXR5cGVuO1xuICB9XG4gIHByaXZhdGUgX2FsbGVEYXRlaXR5cGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIE1laHJlcmUgRGF0ZWllbiB6dWxhc3Nlbjsgc29uc3QgemFlaGx0IG51ciBkaWUgZXJzdGUgKi9cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgbWVocmZhY2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHB1YmxpYyBpY29uR3JvZXNzZTogc3RyaW5nID0gJzQ4cHgnO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBmb3JtYXRMYWJlbDogc3RyaW5nID0gJ1fDpGhsZSBlaW4gRm9ybWF0JztcbiAgQElucHV0KCkgcHVibGljIGhpbndlaXNUZXh0OiBzdHJpbmcgPSAnS2xpY2tlIGhpZXIgb2RlciB6aWVoZSBkZWluZSBEYXRlaSBoaWVyaGVyLic7XG4gIEBJbnB1dCgpIHB1YmxpYyBmb3JtYXRGZWhsdFRleHQ6IHN0cmluZyA9ICdCaXR0ZSB3w6RobGUgenVlcnN0IGVpbiBGb3JtYXQgYXVzLic7XG4gIEBJbnB1dCgpIHB1YmxpYyBidXR0b25UZXh0OiBzdHJpbmcgPSAnRGF0ZWkgYXVzd8OkaGxlbic7XG4gIEBJbnB1dCgpIHB1YmxpYyBrZWluZURhdGVpVGV4dDogc3RyaW5nID0gJ0tlaW5lIERhdGVpIGF1c2dld8OkaGx0JztcbiAgQElucHV0KCkgcHVibGljIHVuZ3VlbHRpZ1RleHQ6IHN0cmluZyA9ICdEYXRlaXR5cCBuaWNodCB6dWzDpHNzaWcnO1xuICBASW5wdXQoKSBwdWJsaWMgenVydWVja3NldHplblRleHQ6IHN0cmluZyA9ICdEYXRlaWF1c3dhaGwgenVyw7xja3NldHplbic7XG5cbiAgQE91dHB1dCgpIHB1YmxpYyByZWFkb25seSBkYXRlaWVuQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RmlsZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZVtdPigpO1xuICBAT3V0cHV0KCkgcHVibGljIHJlYWRvbmx5IGZvcm1hdENoYW5nZTogRXZlbnRFbWl0dGVyPFQgfCBudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXI8VCB8IG51bGw+KCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgcmVhZG9ubHkgdW5ndWVsdGlnZURhdGVpZW46IEV2ZW50RW1pdHRlcjxGaWxlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlW10+KCk7XG5cbiAgLyoqIEVpZ2VuZXMgQ29udHJvbCBqZSBJbnN0YW56LCBkYW1pdCBtZWhyZXJlIFVwbG9hZC1GZWxkZXIgc2ljaCBuaWNodCBnZWdlbnNlaXRpZyBkaWUgQXVzd2FobCB1ZWJlcnNjaHJlaWJlbiAqL1xuICBwdWJsaWMgcmVhZG9ubHkgaW5mb0ZhcmJlOiBzdHJpbmcgPSBNcmRDb2xvci5HUlVFTjtcbiAgcHVibGljIHJlYWRvbmx5IHp1cnVlY2tzZXR6ZW5JY29uRmFyYmU6IHN0cmluZyA9IE1yZENvbG9yLldBUk5ST1Q7XG5cbiAgcHVibGljIHJlYWRvbmx5IGZvcm1hdENvbnRyb2w6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCA9IEFjY2Vzc2FibGVDb250cm9sRmFjdG9yeS5zaW1wbGVDb250cm9sKG51bGwsIFtdKTtcblxuICAvKiogRm9ybWF0ZSBzYW10IGVyZ2Flbnp0ZW0gXCJBbGxlIERhdGVpdHlwZW5cIiAqL1xuICBwdWJsaWMgZm9ybWF0TGlzdGU6IFRbXSA9IFtdO1xuICBwdWJsaWMgZGF0ZWllbjogRmlsZVtdID0gW107XG4gIHB1YmxpYyBmZWhsZXI6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgemllaGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLndhdGNoKHRoaXMuZm9ybWF0Q29udHJvbC52YWx1ZUNoYW5nZXMsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHtcbiAgICAgIHRoaXMuZmVobGVyID0gbnVsbDtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgLy8gVmVyem9lZ2VydDogZGllIGF1dG9tYXRpc2NoZSBBdXN3YWhsIHBhc3NpZXJ0IGJlaW0gU2V0emVuIHZvbiBgZm9ybWF0ZWAgbWl0dGVuIGluIGRlciBDaGFuZ2UgRGV0ZWN0aW9uIGRlcyBBdWZydWZlcnNcbiAgICAgIGNvbnN0IGZvcm1hdDogVCB8IG51bGwgPSB0aGlzLmZvcm1hdDtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5mb3JtYXRDaGFuZ2UuZW1pdChmb3JtYXQpKTtcbiAgICB9KSk7XG4gICAgLy8gT2huZSBnZWJ1bmRlbmVzIGBmb3JtYXRlYCBsaWVmZSBkZXIgU2V0dGVyIG5pZTsgZGFubiBnaWJ0IGVzIG51ciBcIkFsbGUgRGF0ZWl0eXBlblwiXG4gICAgdGhpcy5mb3JtYXRMaXN0ZUF1ZmJhdWVuKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZvcm1hdCgpOiBUIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0TGlzdGUuZmluZCgoZm9ybWF0OiBUKSA9PiBmb3JtYXQua2V5ID09PSB0aGlzLmZvcm1hdENvbnRyb2wudmFsdWUpID8/IG51bGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGVpbmFtZW4oKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5kYXRlaWVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMua2VpbmVEYXRlaVRleHQ7XG4gICAgfVxuICAgIGNvbnN0IG5hbWVuOiBzdHJpbmcgPSB0aGlzLmRhdGVpZW4ubWFwKChkYXRlaTogRmlsZSkgPT4gZGF0ZWkubmFtZSkuam9pbignLCAnKTtcbiAgICByZXR1cm4gdGhpcy5kYXRlaWVuLmxlbmd0aCA9PT0gMSA/IGBEYXRlaTogJHtuYW1lbn1gIDogYERhdGVpZW46ICR7bmFtZW59YDtcbiAgfVxuXG4gIHB1YmxpYyBkYXRlaUF1c3dhZWhsZW4oZWluZ2FiZTogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZvcm1hdCAmJiB0aGlzLmRhdGVpZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICBlaW5nYWJlLmNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRhdGVpR2V3YWVobHQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgZWluZ2FiZTogSFRNTElucHV0RWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHRoaXMuZGF0ZWllblVlYmVybmVobWVuKEFycmF5LmZyb20oZWluZ2FiZS5maWxlcyA/PyBbXSkpO1xuICAgIC8vIFNvbnN0IGxvZXN0IGRpZXNlbGJlIERhdGVpIGJlaW0gbmFlY2hzdGVuIEF1c3dhZWhsZW4ga2VpbiBjaGFuZ2UgbWVociBhdXNcbiAgICBlaW5nYWJlLnZhbHVlID0gJyc7XG4gIH1cblxuICBwdWJsaWMgdWViZXJCZXJlaWNoKGV2ZW50OiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuemllaGVuID0gISF0aGlzLmZvcm1hdDtcbiAgfVxuXG4gIHB1YmxpYyBhYmxlZ2VuKGV2ZW50OiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuemllaGVuID0gZmFsc2U7XG4gICAgaWYgKCF0aGlzLmZvcm1hdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRhdGVpZW5VZWJlcm5laG1lbihBcnJheS5mcm9tKGV2ZW50LmRhdGFUcmFuc2Zlcj8uZmlsZXMgPz8gW10pKTtcbiAgfVxuXG4gIHB1YmxpYyB6dXJ1ZWNrc2V0emVuKGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudD8uc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5kYXRlaWVuID0gW107XG4gICAgdGhpcy5mZWhsZXIgPSBudWxsO1xuICAgIHRoaXMuZGF0ZWllbkNoYW5nZS5lbWl0KFtdKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKiBQYXNzZW5kZSBEYXRlaWVuIHVlYmVybmVobWVuLCB1bnBhc3NlbmRlIG1lbGRlbjsgb2huZSBwYXNzZW5kZSBibGVpYnQgZGllIGJpc2hlcmlnZSBBdXN3YWhsICovXG4gIHByaXZhdGUgZGF0ZWllblVlYmVybmVobWVuKGRhdGVpZW46IEZpbGVbXSk6IHZvaWQge1xuICAgIGlmIChkYXRlaWVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBrYW5kaWRhdGVuOiBGaWxlW10gPSB0aGlzLm1laHJmYWNoID8gZGF0ZWllbiA6IGRhdGVpZW4uc2xpY2UoMCwgMSk7XG4gICAgY29uc3QgZXJsYXVidDogc3RyaW5nID0gdGhpcy5mb3JtYXQ/LmFjY2VwdGVkRGF0YVR5cGVzID8/ICcqJztcbiAgICBjb25zdCBndWVsdGlnOiBGaWxlW10gPSBrYW5kaWRhdGVuLmZpbHRlcigoZGF0ZWk6IEZpbGUpID0+IE1yZFVwbG9hZENvbXBvbmVudC5pc3RFcmxhdWJ0KGRhdGVpLCBlcmxhdWJ0KSk7XG4gICAgY29uc3QgdW5ndWVsdGlnOiBGaWxlW10gPSBrYW5kaWRhdGVuLmZpbHRlcigoZGF0ZWk6IEZpbGUpID0+ICFndWVsdGlnLmluY2x1ZGVzKGRhdGVpKSk7XG5cbiAgICB0aGlzLmZlaGxlciA9IHVuZ3VlbHRpZy5sZW5ndGggPiAwID8gYCR7dGhpcy51bmd1ZWx0aWdUZXh0fTogJHt1bmd1ZWx0aWcubWFwKChkYXRlaTogRmlsZSkgPT4gZGF0ZWkubmFtZSkuam9pbignLCAnKX1gIDogbnVsbDtcbiAgICBpZiAodW5ndWVsdGlnLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMudW5ndWVsdGlnZURhdGVpZW4uZW1pdCh1bmd1ZWx0aWcpO1xuICAgIH1cbiAgICBpZiAoZ3VlbHRpZy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmRhdGVpZW4gPSBndWVsdGlnO1xuICAgICAgdGhpcy5kYXRlaWVuQ2hhbmdlLmVtaXQoZ3VlbHRpZyk7XG4gICAgfVxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRMaXN0ZUF1ZmJhdWVuKCk6IHZvaWQge1xuICAgIGNvbnN0IGVyZ2FlbnplbjogYm9vbGVhbiA9IHRoaXMuX2FsbGVEYXRlaXR5cGVuIHx8IHRoaXMuX2Zvcm1hdGUubGVuZ3RoID09PSAwO1xuICAgIHRoaXMuZm9ybWF0TGlzdGUgPSBlcmdhZW56ZW4gPyBbLi4udGhpcy5fZm9ybWF0ZSwgTVJEX1VQTE9BRF9BTExFX0RBVEVJVFlQRU4gYXMgVF0gOiBbLi4udGhpcy5fZm9ybWF0ZV07XG4gICAgY29uc3QgYWt0dWVsbDogc3RyaW5nIHwgbnVsbCA9IHRoaXMuZm9ybWF0Q29udHJvbC52YWx1ZTtcbiAgICBpZiAodGhpcy5mb3JtYXRMaXN0ZS5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuZm9ybWF0Q29udHJvbC5zZXRWYWx1ZSh0aGlzLmZvcm1hdExpc3RlWzBdLmtleSk7XG4gICAgfSBlbHNlIGlmIChha3R1ZWxsICE9PSBudWxsICYmICF0aGlzLmZvcm1hdExpc3RlLnNvbWUoKGZvcm1hdDogVCkgPT4gZm9ybWF0LmtleSA9PT0gYWt0dWVsbCkpIHtcbiAgICAgIHRoaXMuZm9ybWF0Q29udHJvbC5zZXRWYWx1ZShudWxsKTtcbiAgICB9XG4gIH1cblxuICAvKiogV2llIGRhcyBgYWNjZXB0YC1BdHRyaWJ1dDogRW5kdW5nZW4gb2huZSBHcm9zcy0vS2xlaW5zY2hyZWlidW5nLCBNSU1FLVR5cGVuIGF1Y2ggbWl0IGAvKmAsIGAqYCBmdWVyIGFsbGUgKi9cbiAgcHVibGljIHN0YXRpYyBpc3RFcmxhdWJ0KGRhdGVpOiBGaWxlLCBlcmxhdWJ0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCB0eXBlbjogc3RyaW5nW10gPSAoZXJsYXVidCA/PyAnJykuc3BsaXQoJywnKS5tYXAoKHR5cDogc3RyaW5nKSA9PiB0eXAudHJpbSgpLnRvTG93ZXJDYXNlKCkpLmZpbHRlcigodHlwOiBzdHJpbmcpID0+IHR5cC5sZW5ndGggPiAwKTtcbiAgICBpZiAodHlwZW4ubGVuZ3RoID09PSAwIHx8IHR5cGVuLmluY2x1ZGVzKCcqJykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBuYW1lOiBzdHJpbmcgPSBkYXRlaS5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgbWltZTogc3RyaW5nID0gKGRhdGVpLnR5cGUgPz8gJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHR5cGVuLnNvbWUoKHR5cDogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodHlwLnN0YXJ0c1dpdGgoJy4nKSkge1xuICAgICAgICByZXR1cm4gbmFtZS5lbmRzV2l0aCh0eXApO1xuICAgICAgfVxuICAgICAgaWYgKHR5cC5lbmRzV2l0aCgnLyonKSkge1xuICAgICAgICByZXR1cm4gbWltZS5zdGFydHNXaXRoKHR5cC5zbGljZSgwLCAtMSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1pbWUgPT09IHR5cDtcbiAgICB9KTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm1yZC11cGxvYWRcIj5cbiAgPG1yZC1mb3JtLWZpZWxkIGZpbGwgKm5nSWY9XCJmb3JtYXRMaXN0ZS5sZW5ndGggPiAxXCIgY2xhc3M9XCJtcmQtdXBsb2FkLWZvcm1hdFwiPlxuICAgIDxtcmQtbGFiZWw+e3tmb3JtYXRMYWJlbH19PC9tcmQtbGFiZWw+XG4gICAgPG1yZC1zZWxlY3QgW21yZEZvcm1Db250cm9sXT1cImZvcm1hdENvbnRyb2xcIj5cbiAgICAgIDxtcmQtc2VsZWN0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZWludHJhZyBvZiBmb3JtYXRMaXN0ZVwiIFt2YWx1ZV09XCJlaW50cmFnLmtleVwiPnt7ZWludHJhZy5iZXplaWNobnVuZ319PC9tcmQtc2VsZWN0LW9wdGlvbj5cbiAgICA8L21yZC1zZWxlY3Q+XG4gIDwvbXJkLWZvcm0tZmllbGQ+XG5cbiAgPGRpdiBjbGFzcz1cIm1yZC11cGxvYWQtYmVyZWljaFwiIHJvbGU9XCJidXR0b25cIlxuICAgIFtjbGFzcy5tcmQtdXBsb2FkLWdlc3BlcnJ0XT1cIiFmb3JtYXRcIlxuICAgIFtjbGFzcy5tcmQtdXBsb2FkLXppZWhlbl09XCJ6aWVoZW5cIlxuICAgIFtjbGFzcy5tcmQtdXBsb2FkLW1pdC1kYXRlaWVuXT1cImRhdGVpZW4ubGVuZ3RoID4gMFwiXG4gICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCIhZm9ybWF0XCJcbiAgICAoY2xpY2spPVwiZGF0ZWlBdXN3YWVobGVuKGRhdGVpRWluZ2FiZSlcIlxuICAgIChkcmFnb3Zlcik9XCJ1ZWJlckJlcmVpY2goJGV2ZW50KVwiXG4gICAgKGRyYWdsZWF2ZSk9XCJ6aWVoZW4gPSBmYWxzZVwiXG4gICAgKGRyb3ApPVwiYWJsZWdlbigkZXZlbnQpXCI+XG4gICAgPG1yZC1zLWJ1dHRvbiBzaXplPVwiZnVsbEljb25cIiBjbGFzcz1cIm1yZC11cGxvYWQtenVydWVja3NldHplblwiICpuZ0lmPVwiZGF0ZWllbi5sZW5ndGggPiAwXCJcbiAgICAgIFttcmRUb29sVGlwXT1cInp1cnVlY2tzZXR6ZW5UZXh0XCIgW2F0dHIuYXJpYS1sYWJlbF09XCJ6dXJ1ZWNrc2V0emVuVGV4dFwiIChjbGljayk9XCJ6dXJ1ZWNrc2V0emVuKCRldmVudClcIj5cbiAgICAgIDxtcmQtaWNvbiBpY29uPVwic2NobGllc3NlblwiIFtjb2xvcl09XCJ6dXJ1ZWNrc2V0emVuSWNvbkZhcmJlXCIgc2l6ZT1cIjMyXCI+PC9tcmQtaWNvbj5cbiAgICA8L21yZC1zLWJ1dHRvbj5cblxuICAgIDxtcmQtaWNvbiBjbGFzcz1cIm1yZC11cGxvYWQtaWNvblwiIGljb249XCJ1cGxvYWRcIiBbc2l6ZV09XCJpY29uR3JvZXNzZVwiPjwvbXJkLWljb24+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0ZWllbi5sZW5ndGggPT09IDBcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwibXJkLXVwbG9hZC1oaW53ZWlzXCI+XG4gICAgICAgIHt7Zm9ybWF0ID8gaGlud2Vpc1RleHQgOiBmb3JtYXRGZWhsdFRleHR9fVxuICAgICAgICA8bXJkLWljb24gKm5nSWY9XCJmb3JtYXQ/LmluZm9JY29uVGV4dFwiIGNsYXNzPVwibXJkLXVwbG9hZC1pbmZvXCIgaWNvbj1cImluZm9cIiBmdWxsIFtjb2xvcl09XCJpbmZvRmFyYmVcIiBzaXplPVwiMThcIiBbbXJkVG9vbFRpcF09XCJmb3JtYXQ/LmluZm9JY29uVGV4dFwiPjwvbXJkLWljb24+XG4gICAgICA8L3NwYW4+XG4gICAgICA8bXJkLXMtYnV0dG9uIHRoZW1lPVwicHJpbWFyeVwiIHNpemU9XCJzbWFsbFwiIFtkaXNhYmxlZF09XCIhZm9ybWF0XCIgKGNsaWNrKT1cImRhdGVpQXVzd2FlaGxlbihkYXRlaUVpbmdhYmUpXCI+e3tidXR0b25UZXh0fX08L21yZC1zLWJ1dHRvbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDxzcGFuIGNsYXNzPVwibXJkLXVwbG9hZC1kYXRlaW5hbWVcIj57e2RhdGVpbmFtZW59fTwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cIm1yZC11cGxvYWQtZmVobGVyXCIgKm5nSWY9XCJmZWhsZXJcIiByb2xlPVwiYWxlcnRcIj57e2ZlaGxlcn19PC9zcGFuPlxuICA8L2Rpdj5cblxuICA8IS0tIEF1c3NlcmhhbGIgZGVzIEJlcmVpY2hzLCBzb25zdCBsb2VzdCBkZXNzZW4gS2xpY2stSGFuZGxlciBiZWltIHByb2dyYW1tYXRpc2NoZW4gY2xpY2soKSBlcm5ldXQgYXVzIC0tPlxuICA8aW5wdXQgI2RhdGVpRWluZ2FiZSB0eXBlPVwiZmlsZVwiIGhpZGRlbiBbbXVsdGlwbGVdPVwibWVocmZhY2hcIiBbYWNjZXB0XT1cImZvcm1hdD8uYWNjZXB0ZWREYXRhVHlwZXMgPz8gJydcIiAoY2hhbmdlKT1cImRhdGVpR2V3YWVobHQoJGV2ZW50KVwiPlxuPC9kaXY+XG4iXX0=