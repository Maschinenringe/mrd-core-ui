import { ChangeDetectionStrategy, Component, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';
import { BaseObject, ObservableValue } from 'mrd-core';
import * as i0 from "@angular/core";
import * as i1 from "./../../common/service/fly-out.service";
import * as i2 from "@angular/common";
import * as i3 from "../../../mrd-button/components/mrd-button/mrd-button.component";
const _c0 = ["content"];
function MrdFlyOutComponent_mrd_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-button", 6);
    i0.ɵɵlistener("click", function MrdFlyOutComponent_mrd_button_4_Template_mrd_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 7);
    i0.ɵɵelement(2, "path", 8)(3, "path", 9);
    i0.ɵɵelementEnd()();
} }
const _c1 = function (a0) { return { "open": a0 }; };
const _c2 = function (a0, a1, a2, a3, a4) { return { "open": a0, "topDown": a1, "bottomUp": a2, "leftRight": a3, "rightLeft": a4 }; };
/**
 * Diese Komponente stellt ein FlyOut dar, das von oben nach unten, von unten nach oben, von links nach rechts oder von rechts nach links einfliegt.
 *
 * @export
 * @class MrdFlyOutComponent
 * @extends {BaseObject}
 * @implements {AfterViewInit}
 */
export class MrdFlyOutComponent extends BaseObject {
    cdr;
    flyOutService;
    /**
     * Die Referenz auf das Content-Element, in das die eingebettete Komponente geladen wird.
     *
     * @type {ViewContainerRef}
     * @memberof MrdFlyOutComponent
     */
    content;
    /**
     * Setzt die Konfiguration des FlyOuts.
     *
     * @memberof MrdFlyOutComponent
     */
    set config(value) {
        if (value) {
            this.flyInFrom = value.flyInFrom;
            this.disableClose = value.disableCloseOnBackdrop ?? this.disableClose;
            this.backdropColor = value.backdropColor ?? this.backdropColor;
            this.hideDefaultCloseButton = value.hideDefaultCloseButton ?? this.hideDefaultCloseButton;
            this.width = value.width ?? this.width;
            this.maxWidth = value.maxWidth ?? this.maxWidth;
            this.height = value.height ?? this.height;
            this.maxHeight = value.maxHeight ?? this.maxHeight;
            this.padding = value.padding ?? this.padding;
            this.borderRadius = value.borderRadius ?? this.borderRadius;
            this.backgroundColor = value.backgroundColor ?? this.backgroundColor;
            this.transitionTime = value.transitionTime ?? this.transitionTime;
        }
    }
    /**
     * Setzt die Richtung, aus der das FlyOut einfliegt.
     * Default: 'bottom'
     *
     * @memberof MrdFlyOutComponent
     */
    set flyInFrom(value) {
        this.topDown = this.bottomUp = this.leftRight = this.rightLeft = false;
        switch (value) {
            case 'top':
                this.topDown = true;
                break;
            case 'bottom':
                this.bottomUp = true;
                break;
            case 'left':
                this.leftRight = true;
                break;
            case 'right':
                this.rightLeft = true;
                break;
            default:
                this.bottomUp = true;
                break;
        }
    }
    /**
     * Gibt an, ob der Standard-Schließen-Button nicht angezeigt wird.
     * Default: false
     *
     * @type {boolean}
     * @memberof MrdFlyOutComponent
     */
    hideDefaultCloseButton = false;
    /**
     * Gibt an, ob das FlyOut beim Klick auf den Hintergrund nicht geschlossen wird.
     * Default: false;
     *
     * @type {boolean}
     * @memberof MrdFlyOutComponent
     */
    disableClose = false;
    /**
     * Die Farbe des Hintergrunds.
     * Default: 'rgba(0, 0, 0, 0.5)'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    backdropColor = 'rgba(0, 0, 0, 0.5)';
    /**
     * Die Breite des FlyOuts.
     * Default: 'fit-content'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    width = 'fit-content';
    /**
     * Die maximale Breite des FlyOuts.
     * Default: '95vw'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    maxWidth = '95vw';
    /**
     * Die Höhe des FlyOuts.
     * Default: 'fit-content'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    height = 'fit-content';
    /**
     * Die maximale Höhe des FlyOuts.
     * Default: '95vh'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    maxHeight = '95vh';
    /**
     * Das Padding des FlyOuts zum Rand.
     * Default: '1em'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    padding = '1em';
    /**
     * Der Radius der Ecken des FlyOuts.
     * Default: '20px'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    borderRadius = '20px';
    /**
     * Die Hintergrundfarbe des FlyOuts.
     * Default: '#fff'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    backgroundColor = '#fff';
    /**
     * Die Zeit, die das FlyOut benötigt, um zu öffnen oder zu schließen.
     * Default: '1.0s'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    transitionTime = '1.0s';
    /**
     * Das vom FlyOut ausgelöste Event, wenn das FlyOut geöffnet wurde.
     *
     * @type {EventEmitter<void>}
     * @memberof MrdFlyOutComponent
     */
    afterOpened = new EventEmitter();
    /**
     * Das vom FlyOut ausgelöste Event, wenn das FlyOut geschlossen wird.
     * Gibt einen Wert zurück, wenn über die MrdFlyOutCloseDirective ein Wert übergeben wurde.
     *
     * @type {EventEmitter<any>}
     * @memberof MrdFlyOutComponent
     */
    onClose = new EventEmitter();
    /**
     * Das vom FlyOut ausgelöste Event, wenn das FlyOut geschlossen wurde.
     * Gibt einen Wert zurück, wenn über die MrdFlyOutCloseDirective ein Wert übergeben wurde.
     *
     * @type {EventEmitter<any>}
     * @memberof MrdFlyOutComponent
     */
    afterClosed = new EventEmitter();
    /**
     * Gibt an, ob das FlyOut von oben nach unten einfliegt.
     *
     * @type {boolean}
     * @memberof MrdFlyOutComponent
     */
    topDown = false;
    /**
     * Gibt an, ob das FlyOut von unten nach oben einfliegt.
     *
     * @type {boolean}
     * @memberof MrdFlyOutComponent
     */
    bottomUp = true;
    /**
     * Gibt an, ob das FlyOut von links nach rechts einfliegt.
     *
     * @type {boolean}
     * @memberof MrdFlyOutComponent
     */
    leftRight = false;
    /**
     * Gibt an, ob das FlyOut von rechts nach links einfliegt.
     *
     * @type {boolean}
     * @memberof MrdFlyOutComponent
     */
    rightLeft = false;
    /**
     * Die ID des Overlays.
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    overlayId;
    /**
     * Der ObservableValue, der den Zustand des FlyOuts steuert.
     *
     * @type {ObservableValue<boolean>}
     * @memberof MrdFlyOutComponent
     */
    stateToggle = new ObservableValue(false);
    constructor(cdr, flyOutService) {
        super();
        this.cdr = cdr;
        this.flyOutService = flyOutService;
    }
    /**
     * Initialisiert das Einfahren des FlyOut.
     *
     * @memberof MrdFlyOutComponent
     */
    ngAfterViewInit() {
        setTimeout(() => {
            this.stateToggle.value = true;
            this.afterOpened.emit();
            this.cdr.detectChanges();
        }, 100);
    }
    /**
     * Wird aufgerufen, wenn auf den Hintergrund geklickt wurde.
     *
     * @memberof MrdFlyOutComponent
     */
    backdropClicked() {
        if (!this.disableClose) {
            this.close();
        }
    }
    /**
     * Schließt das FlyOut.
     *
     * @param {*} [returnValue]
     * @memberof MrdFlyOutComponent
     */
    close(returnValue) {
        this.onClose.emit(returnValue);
        this.stateToggle.value = false;
        this.cdr.detectChanges();
        setTimeout(() => {
            this.afterClosed.emit(returnValue);
            this.flyOutService.close(this.overlayId);
        }, 1000);
    }
    /**
     * Wird aufgerufen, wenn das FlyOut über eine MrdFlyOutCloseDirective geschlossen wird.
     *
     * @memberof MrdFlyOutComponent
     */
    closeDirectiveClicked(returnValue) {
        this.close(returnValue);
    }
    /** @nocollapse */ static ɵfac = function MrdFlyOutComponent_Factory(t) { return new (t || MrdFlyOutComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.FlyOutService)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdFlyOutComponent, selectors: [["mrd-fly-out"]], viewQuery: function MrdFlyOutComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7, ViewContainerRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 31, consts: [[1, "backdrop", 3, "ngClass", "click"], [1, "mrd-fly-out"], [1, "mrd-fly-out__container", 3, "ngClass"], [1, "mrd-fly-out__content"], ["icon-button", "", "iconSize", "2em", "class", "mrd-fly-out__close", 3, "click", 4, "ngIf"], ["content", ""], ["icon-button", "", "iconSize", "2em", 1, "mrd-fly-out__close", 3, "click"], ["mrd-icon", "", "width", "48", "height", "48", "viewBox", "0 0 48 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M43.1253 20.1956C42.3728 16.4129 40.5155 12.9384 37.7883 10.2113C34.1313 6.55443 29.1715 4.5 24 4.5C18.8285 4.5 13.8687 6.55443 10.2117 10.2113C7.48449 12.9384 5.62722 16.4129 4.87475 20.1956C4.12228 23.9782 4.5084 27.899 5.98429 31.4622C7.46017 35.0253 9.95953 38.0709 13.1663 40.2136C16.3731 42.3563 20.1432 43.5 24 43.5C27.8568 43.5 31.6269 42.3563 34.8337 40.2136C38.0405 38.0709 40.5398 35.0253 42.0157 31.4622C43.4916 27.899 43.8777 23.9782 43.1253 20.1956ZM47.5388 19.3176C46.6127 14.6621 44.3268 10.3857 40.9702 7.02923C36.4694 2.52855 30.365 0 24 0C17.635 0 11.5306 2.52855 7.02976 7.02923C3.67321 10.3857 1.38735 14.6621 0.461228 19.3176C-0.464888 23.9732 0.0103406 28.7987 1.82682 33.1842C3.64329 37.5697 6.71943 41.318 10.6662 43.9552C14.613 46.5924 19.2532 48 24 48C28.7468 48 33.387 46.5924 37.3338 43.9552C41.2806 41.318 44.3567 37.5697 46.1732 33.1842C47.9897 28.7987 48.4649 23.9732 47.5388 19.3176Z", "fill", "#949EA7"], ["d", "M27.9366 30.9242L23.9998 26.9867L20.0631 30.9242C19.867 31.1204 19.6341 31.276 19.3777 31.3821C19.1213 31.4881 18.8465 31.5425 18.5691 31.5422C18.2918 31.5424 18.0171 31.488 17.7609 31.3819C17.5047 31.2759 17.2719 31.1203 17.0758 30.9242C16.6798 30.528 16.4573 29.9907 16.4573 29.4305C16.4573 28.8704 16.6798 28.3331 17.0758 27.9369L21.0126 24.0002L17.0758 20.0634C16.8797 19.8673 16.724 19.6344 16.6179 19.3782C16.5117 19.1219 16.457 18.8472 16.457 18.5698C16.457 18.2924 16.5117 18.0177 16.6179 17.7614C16.724 17.5051 16.8797 17.2723 17.0758 17.0762C17.4719 16.6802 18.009 16.4577 18.5691 16.4577C19.1291 16.4577 19.6663 16.6802 20.0623 17.0762L23.9991 21.0129L27.9358 17.0762C28.3319 16.6802 28.869 16.4577 29.4291 16.4577C29.9891 16.4577 30.5263 16.6802 30.9223 17.0762C31.1185 17.2723 31.2741 17.5051 31.3803 17.7614C31.4865 18.0177 31.5411 18.2924 31.5411 18.5698C31.5411 18.8472 31.4865 19.1219 31.3803 19.3782C31.2741 19.6344 31.1185 19.8673 30.9223 20.0634L26.9856 24.0002L30.9223 27.9369C31.3184 28.3331 31.5408 28.8704 31.5408 29.4305C31.5408 29.9907 31.3184 30.528 30.9223 30.9242C30.7264 31.1204 30.4936 31.276 30.2373 31.3821C29.9811 31.4882 29.7064 31.5425 29.4291 31.5422C29.1519 31.5425 28.8773 31.4881 28.6212 31.382C28.3651 31.276 28.1324 31.1204 27.9366 30.9242Z", "fill", "#949EA7"]], template: function MrdFlyOutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function MrdFlyOutComponent_Template_div_click_0_listener() { return ctx.backdropClicked(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵtemplate(4, MrdFlyOutComponent_mrd_button_4_Template, 4, 0, "mrd-button", 4);
            i0.ɵɵelement(5, "div", null, 5);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵstyleProp("--bd-color", ctx.backdropColor)("--bd-transition-time", ctx.transitionTime);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(23, _c1, ctx.stateToggle.value));
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("--fo-width", ctx.width)("--fo-max-width", ctx.maxWidth)("--fo-height", ctx.height)("--fo-max-height", ctx.maxHeight)("--fo-bg-color", ctx.backgroundColor)("--fo-padding", ctx.padding)("--fo-border-radius", ctx.borderRadius)("--fo-transition-time", ctx.transitionTime);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(25, _c2, ctx.stateToggle.value, ctx.topDown, ctx.bottomUp, ctx.leftRight, ctx.rightLeft));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.hideDefaultCloseButton);
        } }, dependencies: [i2.NgClass, i2.NgIf, i3.MrdButtonComponent], styles: ["[_nghost-%COMP%]{width:100vw;height:100vh;position:absolute;inset:0}.backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:transparent;transition:background-color var(--bd-transition-time) ease-in-out;z-index:2}.backdrop.open[_ngcontent-%COMP%]{display:block;background-color:var(--bd-color)}.mrd-fly-out[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;width:100%;height:100%}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container[_ngcontent-%COMP%]{position:absolute;width:var(--fo-width);max-width:var(--fo-max-width);height:var(--fo-height);max-height:var(--fo-max-height);background-color:var(--fo-bg-color);box-shadow:0 0 10px #00000080;border-radius:var(--fo-border-radius);padding:var(--fo-padding);transition:top var(--fo-transition-time) ease-in-out,bottom var(--fo-transition-time) ease-in-out,left var(--fo-transition-time) ease-in-out,right var(--fo-transition-time) ease-in-out;z-index:3}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container[_ngcontent-%COMP%]   .mrd-fly-out__content[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.topDown[_ngcontent-%COMP%]{padding-top:4em;top:-100%}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.bottomUp[_ngcontent-%COMP%]{padding-bottom:4em;bottom:-100%}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.leftRight[_ngcontent-%COMP%]{padding-left:4em;left:-100%}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.rightLeft[_ngcontent-%COMP%]{padding-right:4em;right:-100%}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.topDown[_ngcontent-%COMP%]{top:-3em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.bottomUp[_ngcontent-%COMP%]{bottom:-2em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.leftRight[_ngcontent-%COMP%]{left:-2em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.rightLeft[_ngcontent-%COMP%]{right:-2em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__close[_ngcontent-%COMP%]{position:absolute;top:0;right:0}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdFlyOutComponent, [{
        type: Component,
        args: [{ selector: 'mrd-fly-out', changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- Der Hintergrund des FlyOuts -->\r\n<div class=\"backdrop\" [ngClass]=\"{'open': stateToggle.value}\" (click)=\"backdropClicked()\"\r\n  [style.--bd-color]=\"backdropColor\"\r\n  [style.--bd-transition-time]=\"transitionTime\"\r\n  ></div>\r\n<!-- Die \u00E4u\u00DFerste Komponente des FlyOuts, das den Container zentriert -->\r\n<div class=\"mrd-fly-out\"\r\n  [style.--fo-width]=\"width\"\r\n  [style.--fo-max-width]=\"maxWidth\"\r\n  [style.--fo-height]=\"height\"\r\n  [style.--fo-max-height]=\"maxHeight\"\r\n  [style.--fo-bg-color]=\"backgroundColor\"\r\n  [style.--fo-padding]=\"padding\"\r\n  [style.--fo-border-radius]=\"borderRadius\"\r\n  [style.--fo-transition-time]=\"transitionTime\"\r\n  >\r\n  <!-- Der Container, der das Grundlayout des FlyOuts bereitstellt -->\r\n  <div class=\"mrd-fly-out__container\" [ngClass]=\"{'open': stateToggle.value,\r\n    'topDown': topDown, 'bottomUp': bottomUp, 'leftRight': leftRight, 'rightLeft': rightLeft}\">\r\n    <!-- Der Inhalt des FlyOuts -->\r\n    <div class=\"mrd-fly-out__content\">\r\n      <!-- Der Standard Schlie\u00DFen-Button des FlyOuts -->\r\n      <mrd-button icon-button iconSize=\"2em\" (click)=\"close()\" class=\"mrd-fly-out__close\" *ngIf=\"!hideDefaultCloseButton\">\r\n        <svg mrd-icon width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M43.1253 20.1956C42.3728 16.4129 40.5155 12.9384 37.7883 10.2113C34.1313 6.55443 29.1715 4.5 24 4.5C18.8285 4.5 13.8687 6.55443 10.2117 10.2113C7.48449 12.9384 5.62722 16.4129 4.87475 20.1956C4.12228 23.9782 4.5084 27.899 5.98429 31.4622C7.46017 35.0253 9.95953 38.0709 13.1663 40.2136C16.3731 42.3563 20.1432 43.5 24 43.5C27.8568 43.5 31.6269 42.3563 34.8337 40.2136C38.0405 38.0709 40.5398 35.0253 42.0157 31.4622C43.4916 27.899 43.8777 23.9782 43.1253 20.1956ZM47.5388 19.3176C46.6127 14.6621 44.3268 10.3857 40.9702 7.02923C36.4694 2.52855 30.365 0 24 0C17.635 0 11.5306 2.52855 7.02976 7.02923C3.67321 10.3857 1.38735 14.6621 0.461228 19.3176C-0.464888 23.9732 0.0103406 28.7987 1.82682 33.1842C3.64329 37.5697 6.71943 41.318 10.6662 43.9552C14.613 46.5924 19.2532 48 24 48C28.7468 48 33.387 46.5924 37.3338 43.9552C41.2806 41.318 44.3567 37.5697 46.1732 33.1842C47.9897 28.7987 48.4649 23.9732 47.5388 19.3176Z\" fill=\"#949EA7\"/>\r\n          <path d=\"M27.9366 30.9242L23.9998 26.9867L20.0631 30.9242C19.867 31.1204 19.6341 31.276 19.3777 31.3821C19.1213 31.4881 18.8465 31.5425 18.5691 31.5422C18.2918 31.5424 18.0171 31.488 17.7609 31.3819C17.5047 31.2759 17.2719 31.1203 17.0758 30.9242C16.6798 30.528 16.4573 29.9907 16.4573 29.4305C16.4573 28.8704 16.6798 28.3331 17.0758 27.9369L21.0126 24.0002L17.0758 20.0634C16.8797 19.8673 16.724 19.6344 16.6179 19.3782C16.5117 19.1219 16.457 18.8472 16.457 18.5698C16.457 18.2924 16.5117 18.0177 16.6179 17.7614C16.724 17.5051 16.8797 17.2723 17.0758 17.0762C17.4719 16.6802 18.009 16.4577 18.5691 16.4577C19.1291 16.4577 19.6663 16.6802 20.0623 17.0762L23.9991 21.0129L27.9358 17.0762C28.3319 16.6802 28.869 16.4577 29.4291 16.4577C29.9891 16.4577 30.5263 16.6802 30.9223 17.0762C31.1185 17.2723 31.2741 17.5051 31.3803 17.7614C31.4865 18.0177 31.5411 18.2924 31.5411 18.5698C31.5411 18.8472 31.4865 19.1219 31.3803 19.3782C31.2741 19.6344 31.1185 19.8673 30.9223 20.0634L26.9856 24.0002L30.9223 27.9369C31.3184 28.3331 31.5408 28.8704 31.5408 29.4305C31.5408 29.9907 31.3184 30.528 30.9223 30.9242C30.7264 31.1204 30.4936 31.276 30.2373 31.3821C29.9811 31.4882 29.7064 31.5425 29.4291 31.5422C29.1519 31.5425 28.8773 31.4881 28.6212 31.382C28.3651 31.276 28.1324 31.1204 27.9366 30.9242Z\" fill=\"#949EA7\"/>\r\n        </svg>\r\n      </mrd-button>\r\n      <!-- Der Inhalt des FlyOuts (die eingebettete Komponente wird hier reingealden) -->\r\n      <div #content></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n", styles: [":host{width:100vw;height:100vh;position:absolute;inset:0}.backdrop{position:absolute;inset:0;background-color:transparent;transition:background-color var(--bd-transition-time) ease-in-out;z-index:2}.backdrop.open{display:block;background-color:var(--bd-color)}.mrd-fly-out{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;width:100%;height:100%}.mrd-fly-out .mrd-fly-out__container{position:absolute;width:var(--fo-width);max-width:var(--fo-max-width);height:var(--fo-height);max-height:var(--fo-max-height);background-color:var(--fo-bg-color);box-shadow:0 0 10px #00000080;border-radius:var(--fo-border-radius);padding:var(--fo-padding);transition:top var(--fo-transition-time) ease-in-out,bottom var(--fo-transition-time) ease-in-out,left var(--fo-transition-time) ease-in-out,right var(--fo-transition-time) ease-in-out;z-index:3}.mrd-fly-out .mrd-fly-out__container .mrd-fly-out__content{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center}.mrd-fly-out .mrd-fly-out__container.topDown{padding-top:4em;top:-100%}.mrd-fly-out .mrd-fly-out__container.bottomUp{padding-bottom:4em;bottom:-100%}.mrd-fly-out .mrd-fly-out__container.leftRight{padding-left:4em;left:-100%}.mrd-fly-out .mrd-fly-out__container.rightLeft{padding-right:4em;right:-100%}.mrd-fly-out .mrd-fly-out__container.open.topDown{top:-3em}.mrd-fly-out .mrd-fly-out__container.open.bottomUp{bottom:-2em}.mrd-fly-out .mrd-fly-out__container.open.leftRight{left:-2em}.mrd-fly-out .mrd-fly-out__container.open.rightLeft{right:-2em}.mrd-fly-out .mrd-fly-out__close{position:absolute;top:0;right:0}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.FlyOutService }]; }, { content: [{
            type: ViewChild,
            args: ['content', { read: ViewContainerRef, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWZseS1vdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mbHktb3V0L2NvbXBvbmVudHMvbXJkLWZseS1vdXQvbXJkLWZseS1vdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mbHktb3V0L2NvbXBvbmVudHMvbXJkLWZseS1vdXQvbXJkLWZseS1vdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFpQix1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEosT0FBTyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7O0lDb0JqRCxxQ0FBb0g7SUFBN0UsMEtBQVMsZUFBQSxjQUFPLENBQUEsSUFBQztJQUN0RCxtQkFBd0c7SUFBeEcsOEJBQXdHO0lBQ3RHLDBCQUF1OUIsY0FBQTtJQUV6OUIsaUJBQU0sRUFBQTs7OztBRHJCZDs7Ozs7OztHQU9HO0FBT0gsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFVBQVU7SUFnTnBDO0lBQ0E7SUEvTVo7Ozs7O09BS0c7SUFDa0UsT0FBTyxDQUFtQjtJQUUvRjs7OztPQUlHO0lBQ0gsSUFBVyxNQUFNLENBQUMsS0FBc0I7UUFDdEMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsc0JBQXNCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN0RSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUss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QUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxxQkFBcUIsQ0FBQyxXQUFnQjtRQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7K0ZBclFVLGtCQUFrQjs0RkFBbEIsa0JBQWtCO21DQVFBLGdCQUFnQjs7Ozs7WUMxQi9DLDhCQUdHO1lBSDJELDRGQUFTLHFCQUFpQixJQUFDO1lBR3RGLGlCQUFNO1lBRVQsOEJBU0csYUFBQSxhQUFBO1lBT0csaUZBS2E7WUFFYiwrQkFBb0I7WUFDdEIsaUJBQU0sRUFBQSxFQUFBOztZQTVCUiwrQ0FBa0MsNENBQUE7WUFEZCw0RUFBdUM7WUFNM0QsZUFBMEI7WUFBMUIsdUNBQTBCLGdDQUFBLDJCQUFBLGtDQUFBLHNDQUFBLDZCQUFBLHdDQUFBLDRDQUFBO1lBVVUsZUFDd0Q7WUFEeEQscUlBQ3dEO1lBSUgsZUFBNkI7WUFBN0Isa0RBQTZCOzs7dUZESDNHLGtCQUFrQjtjQU45QixTQUFTOzJCQUNFLGFBQWEsbUJBR04sdUJBQXVCLENBQUMsTUFBTTtnR0FVc0IsT0FBTztrQkFBM0UsU0FBUzttQkFBQyxTQUFTLEVBQUUsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZseU91dFNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL2NvbW1vbi9zZXJ2aWNlL2ZseS1vdXQuc2VydmljZSc7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYXNlT2JqZWN0LCBPYnNlcnZhYmxlVmFsdWUgfSBmcm9tICdtcmQtY29yZSc7XHJcbmltcG9ydCB7IE1yZEZseU91dENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbW1vbi9tb2RlbC9tcmQtZmx5LW91dC1jb25maWcnO1xyXG5cclxuLyoqXHJcbiAqIERpZXNlIEtvbXBvbmVudGUgc3RlbGx0IGVpbiBGbHlPdXQgZGFyLCBkYXMgdm9uIG9iZW4gbmFjaCB1bnRlbiwgdm9uIHVudGVuIG5hY2ggb2Jlbiwgdm9uIGxpbmtzIG5hY2ggcmVjaHRzIG9kZXIgdm9uIHJlY2h0cyBuYWNoIGxpbmtzIGVpbmZsaWVndC5cclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAqIEBleHRlbmRzIHtCYXNlT2JqZWN0fVxyXG4gKiBAaW1wbGVtZW50cyB7QWZ0ZXJWaWV3SW5pdH1cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLWZseS1vdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtZmx5LW91dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWZseS1vdXQuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkRmx5T3V0Q29tcG9uZW50IGV4dGVuZHMgQmFzZU9iamVjdCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICAvKipcclxuICAgKiBEaWUgUmVmZXJlbnogYXVmIGRhcyBDb250ZW50LUVsZW1lbnQsIGluIGRhcyBkaWUgZWluZ2ViZXR0ZXRlIEtvbXBvbmVudGUgZ2VsYWRlbiB3aXJkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge1ZpZXdDb250YWluZXJSZWZ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlfSkgcHVibGljIGNvbnRlbnQ6IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHp0IGRpZSBLb25maWd1cmF0aW9uIGRlcyBGbHlPdXRzLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXQgY29uZmlnKHZhbHVlOiBNcmRGbHlPdXRDb25maWcpIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLmZseUluRnJvbSA9IHZhbHVlLmZseUluRnJvbTtcclxuICAgICAgdGhpcy5kaXNhYmxlQ2xvc2UgPSB2YWx1ZS5kaXNhYmxlQ2xvc2VPbkJhY2tkcm9wID8/IHRoaXMuZGlzYWJsZUNsb3NlO1xyXG4gICAgICB0aGlzLmJhY2tkcm9wQ29sb3IgPSB2YWx1ZS5iYWNrZHJvcENvbG9yID8/IHRoaXMuYmFja2Ryb3BDb2xvcjtcclxuICAgICAgdGhpcy5oaWRlRGVmYXVsdENsb3NlQnV0dG9uID0gdmFsdWUuaGlkZURlZmF1bHRDbG9zZUJ1dHRvbiA/PyB0aGlzLmhpZGVEZWZhdWx0Q2xvc2VCdXR0b247XHJcbiAgICAgIHRoaXMud2lkdGggPSB2YWx1ZS53aWR0aCA/PyB0aGlzLndpZHRoO1xyXG4gICAgICB0aGlzLm1heFdpZHRoID0gdmFsdWUubWF4V2lkdGggPz8gdGhpcy5tYXhXaWR0aDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSB2YWx1ZS5oZWlnaHQgPz8gdGhpcy5oZWlnaHQ7XHJcbiAgICAgIHRoaXMubWF4SGVpZ2h0ID0gdmFsdWUubWF4SGVpZ2h0ID8/IHRoaXMubWF4SGVpZ2h0O1xyXG4gICAgICB0aGlzLnBhZGRpbmcgPSB2YWx1ZS5wYWRkaW5nID8/IHRoaXMucGFkZGluZztcclxuICAgICAgdGhpcy5ib3JkZXJSYWRpdXMgPSB2YWx1ZS5ib3JkZXJSYWRpdXMgPz8gdGhpcy5ib3JkZXJSYWRpdXM7XHJcbiAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gdmFsdWUuYmFja2dyb3VuZENvbG9yID8/IHRoaXMuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICB0aGlzLnRyYW5zaXRpb25UaW1lID0gdmFsdWUudHJhbnNpdGlvblRpbWUgPz8gdGhpcy50cmFuc2l0aW9uVGltZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHp0IGRpZSBSaWNodHVuZywgYXVzIGRlciBkYXMgRmx5T3V0IGVpbmZsaWVndC5cclxuICAgKiBEZWZhdWx0OiAnYm90dG9tJ1xyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXQgZmx5SW5Gcm9tKHZhbHVlIDogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcpIHtcclxuICAgIHRoaXMudG9wRG93biA9IHRoaXMuYm90dG9tVXAgPSB0aGlzLmxlZnRSaWdodCA9IHRoaXMucmlnaHRMZWZ0ID0gZmFsc2U7XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgIGNhc2UgJ3RvcCc6IHRoaXMudG9wRG93biA9IHRydWU7IGJyZWFrO1xyXG4gICAgICBjYXNlICdib3R0b20nOiB0aGlzLmJvdHRvbVVwID0gdHJ1ZTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2xlZnQnOiB0aGlzLmxlZnRSaWdodCA9IHRydWU7IGJyZWFrO1xyXG4gICAgICBjYXNlICdyaWdodCc6IHRoaXMucmlnaHRMZWZ0ID0gdHJ1ZTsgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6IHRoaXMuYm90dG9tVXAgPSB0cnVlOyBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBTdGFuZGFyZC1TY2hsaWXDn2VuLUJ1dHRvbiBuaWNodCBhbmdlemVpZ3Qgd2lyZC5cclxuICAgKiBEZWZhdWx0OiBmYWxzZVxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoaWRlRGVmYXVsdENsb3NlQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGFzIEZseU91dCBiZWltIEtsaWNrIGF1ZiBkZW4gSGludGVyZ3J1bmQgbmljaHQgZ2VzY2hsb3NzZW4gd2lyZC5cclxuICAgKiBEZWZhdWx0OiBmYWxzZTtcclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgZGlzYWJsZUNsb3NlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogRGllIEZhcmJlIGRlcyBIaW50ZXJncnVuZHMuXHJcbiAgICogRGVmYXVsdDogJ3JnYmEoMCwgMCwgMCwgMC41KSdcclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBiYWNrZHJvcENvbG9yOiBzdHJpbmcgPSAncmdiYSgwLCAwLCAwLCAwLjUpJztcclxuICAvKipcclxuICAgKiBEaWUgQnJlaXRlIGRlcyBGbHlPdXRzLlxyXG4gICAqIERlZmF1bHQ6ICdmaXQtY29udGVudCdcclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyB3aWR0aDogc3RyaW5nID0gJ2ZpdC1jb250ZW50JztcclxuICAvKipcclxuICAgKiBEaWUgbWF4aW1hbGUgQnJlaXRlIGRlcyBGbHlPdXRzLlxyXG4gICAqIERlZmF1bHQ6ICc5NXZ3J1xyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIG1heFdpZHRoOiBzdHJpbmcgPSAnOTV2dyc7XHJcbiAgLyoqXHJcbiAgICogRGllIEjDtmhlIGRlcyBGbHlPdXRzLlxyXG4gICAqIERlZmF1bHQ6ICdmaXQtY29udGVudCdcclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoZWlnaHQ6IHN0cmluZyA9ICdmaXQtY29udGVudCc7XHJcbiAgLyoqXHJcbiAgICogRGllIG1heGltYWxlIEjDtmhlIGRlcyBGbHlPdXRzLlxyXG4gICAqIERlZmF1bHQ6ICc5NXZoJ1xyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIG1heEhlaWdodDogc3RyaW5nID0gJzk1dmgnO1xyXG4gIC8qKlxyXG4gICAqIERhcyBQYWRkaW5nIGRlcyBGbHlPdXRzIHp1bSBSYW5kLlxyXG4gICAqIERlZmF1bHQ6ICcxZW0nXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgcGFkZGluZzogc3RyaW5nID0gJzFlbSc7XHJcbiAgLyoqXHJcbiAgICogRGVyIFJhZGl1cyBkZXIgRWNrZW4gZGVzIEZseU91dHMuXHJcbiAgICogRGVmYXVsdDogJzIwcHgnXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgYm9yZGVyUmFkaXVzOiBzdHJpbmcgPSAnMjBweCc7XHJcbiAgLyoqXHJcbiAgICogRGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIEZseU91dHMuXHJcbiAgICogRGVmYXVsdDogJyNmZmYnXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSAnI2ZmZic7XHJcbiAgLyoqXHJcbiAgICogRGllIFplaXQsIGRpZSBkYXMgRmx5T3V0IGJlbsO2dGlndCwgdW0genUgw7ZmZm5lbiBvZGVyIHp1IHNjaGxpZcOfZW4uXHJcbiAgICogRGVmYXVsdDogJzEuMHMnXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgdHJhbnNpdGlvblRpbWU6IHN0cmluZyA9ICcxLjBzJztcclxuXHJcbiAgLyoqXHJcbiAgICogRGFzIHZvbSBGbHlPdXQgYXVzZ2Vsw7ZzdGUgRXZlbnQsIHdlbm4gZGFzIEZseU91dCBnZcO2ZmZuZXQgd3VyZGUuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPHZvaWQ+fVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgYWZ0ZXJPcGVuZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICAvKipcclxuICAgKiBEYXMgdm9tIEZseU91dCBhdXNnZWzDtnN0ZSBFdmVudCwgd2VubiBkYXMgRmx5T3V0IGdlc2NobG9zc2VuIHdpcmQuXHJcbiAgICogR2lidCBlaW5lbiBXZXJ0IHp1csO8Y2ssIHdlbm4gw7xiZXIgZGllIE1yZEZseU91dENsb3NlRGlyZWN0aXZlIGVpbiBXZXJ0IMO8YmVyZ2ViZW4gd3VyZGUuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPGFueT59XHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8qKlxyXG4gICAqIERhcyB2b20gRmx5T3V0IGF1c2dlbMO2c3RlIEV2ZW50LCB3ZW5uIGRhcyBGbHlPdXQgZ2VzY2hsb3NzZW4gd3VyZGUuXHJcbiAgICogR2lidCBlaW5lbiBXZXJ0IHp1csO8Y2ssIHdlbm4gw7xiZXIgZGllIE1yZEZseU91dENsb3NlRGlyZWN0aXZlIGVpbiBXZXJ0IMO8YmVyZ2ViZW4gd3VyZGUuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPGFueT59XHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZnRlckNsb3NlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGFzIEZseU91dCB2b24gb2JlbiBuYWNoIHVudGVuIGVpbmZsaWVndC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgdG9wRG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRhcyBGbHlPdXQgdm9uIHVudGVuIG5hY2ggb2JlbiBlaW5mbGllZ3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIGJvdHRvbVVwOiBib29sZWFuID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkYXMgRmx5T3V0IHZvbiBsaW5rcyBuYWNoIHJlY2h0cyBlaW5mbGllZ3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIGxlZnRSaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRhcyBGbHlPdXQgdm9uIHJlY2h0cyBuYWNoIGxpbmtzIGVpbmZsaWVndC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgcmlnaHRMZWZ0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIERpZSBJRCBkZXMgT3ZlcmxheXMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcmxheUlkOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlciBPYnNlcnZhYmxlVmFsdWUsIGRlciBkZW4gWnVzdGFuZCBkZXMgRmx5T3V0cyBzdGV1ZXJ0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09ic2VydmFibGVWYWx1ZTxib29sZWFuPn1cclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRlVG9nZ2xlOiBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj4gPSBuZXcgT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByb3RlY3RlZCBmbHlPdXRTZXJ2aWNlOiBGbHlPdXRTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGlzaWVydCBkYXMgRWluZmFocmVuIGRlcyBGbHlPdXQuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdGVUb2dnbGUudmFsdWUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmFmdGVyT3BlbmVkLmVtaXQoKTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdpcmQgYXVmZ2VydWZlbiwgd2VubiBhdWYgZGVuIEhpbnRlcmdydW5kIGdla2xpY2t0IHd1cmRlLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBiYWNrZHJvcENsaWNrZWQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZUNsb3NlKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNjaGxpZcOfdCBkYXMgRmx5T3V0LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsqfSBbcmV0dXJuVmFsdWVdXHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBjbG9zZShyZXR1cm5WYWx1ZT86IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNsb3NlLmVtaXQocmV0dXJuVmFsdWUpO1xyXG4gICAgdGhpcy5zdGF0ZVRvZ2dsZS52YWx1ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYWZ0ZXJDbG9zZWQuZW1pdChyZXR1cm5WYWx1ZSk7XHJcbiAgICAgIHRoaXMuZmx5T3V0U2VydmljZS5jbG9zZSh0aGlzLm92ZXJsYXlJZCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdpcmQgYXVmZ2VydWZlbiwgd2VubiBkYXMgRmx5T3V0IMO8YmVyIGVpbmUgTXJkRmx5T3V0Q2xvc2VEaXJlY3RpdmUgZ2VzY2hsb3NzZW4gd2lyZC5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgY2xvc2VEaXJlY3RpdmVDbGlja2VkKHJldHVyblZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xvc2UocmV0dXJuVmFsdWUpO1xyXG4gIH1cclxufVxyXG4iLCI8IS0tIERlciBIaW50ZXJncnVuZCBkZXMgRmx5T3V0cyAtLT5cclxuPGRpdiBjbGFzcz1cImJhY2tkcm9wXCIgW25nQ2xhc3NdPVwieydvcGVuJzogc3RhdGVUb2dnbGUudmFsdWV9XCIgKGNsaWNrKT1cImJhY2tkcm9wQ2xpY2tlZCgpXCJcclxuICBbc3R5bGUuLS1iZC1jb2xvcl09XCJiYWNrZHJvcENvbG9yXCJcclxuICBbc3R5bGUuLS1iZC10cmFuc2l0aW9uLXRpbWVdPVwidHJhbnNpdGlvblRpbWVcIlxyXG4gID48L2Rpdj5cclxuPCEtLSBEaWUgw6R1w59lcnN0ZSBLb21wb25lbnRlIGRlcyBGbHlPdXRzLCBkYXMgZGVuIENvbnRhaW5lciB6ZW50cmllcnQgLS0+XHJcbjxkaXYgY2xhc3M9XCJtcmQtZmx5LW91dFwiXHJcbiAgW3N0eWxlLi0tZm8td2lkdGhdPVwid2lkdGhcIlxyXG4gIFtzdHlsZS4tLWZvLW1heC13aWR0aF09XCJtYXhXaWR0aFwiXHJcbiAgW3N0eWxlLi0tZm8taGVpZ2h0XT1cImhlaWdodFwiXHJcbiAgW3N0eWxlLi0tZm8tbWF4LWhlaWdodF09XCJtYXhIZWlnaHRcIlxyXG4gIFtzdHlsZS4tLWZvLWJnLWNvbG9yXT1cImJhY2tncm91bmRDb2xvclwiXHJcbiAgW3N0eWxlLi0tZm8tcGFkZGluZ109XCJwYWRkaW5nXCJcclxuICBbc3R5bGUuLS1mby1ib3JkZXItcmFkaXVzXT1cImJvcmRlclJhZGl1c1wiXHJcbiAgW3N0eWxlLi0tZm8tdHJhbnNpdGlvbi10aW1lXT1cInRyYW5zaXRpb25UaW1lXCJcclxuICA+XHJcbiAgPCEtLSBEZXIgQ29udGFpbmVyLCBkZXIgZGFzIEdydW5kbGF5b3V0IGRlcyBGbHlPdXRzIGJlcmVpdHN0ZWxsdCAtLT5cclxuICA8ZGl2IGNsYXNzPVwibXJkLWZseS1vdXRfX2NvbnRhaW5lclwiIFtuZ0NsYXNzXT1cInsnb3Blbic6IHN0YXRlVG9nZ2xlLnZhbHVlLFxyXG4gICAgJ3RvcERvd24nOiB0b3BEb3duLCAnYm90dG9tVXAnOiBib3R0b21VcCwgJ2xlZnRSaWdodCc6IGxlZnRSaWdodCwgJ3JpZ2h0TGVmdCc6IHJpZ2h0TGVmdH1cIj5cclxuICAgIDwhLS0gRGVyIEluaGFsdCBkZXMgRmx5T3V0cyAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJtcmQtZmx5LW91dF9fY29udGVudFwiPlxyXG4gICAgICA8IS0tIERlciBTdGFuZGFyZCBTY2hsaWXDn2VuLUJ1dHRvbiBkZXMgRmx5T3V0cyAtLT5cclxuICAgICAgPG1yZC1idXR0b24gaWNvbi1idXR0b24gaWNvblNpemU9XCIyZW1cIiAoY2xpY2spPVwiY2xvc2UoKVwiIGNsYXNzPVwibXJkLWZseS1vdXRfX2Nsb3NlXCIgKm5nSWY9XCIhaGlkZURlZmF1bHRDbG9zZUJ1dHRvblwiPlxyXG4gICAgICAgIDxzdmcgbXJkLWljb24gd2lkdGg9XCI0OFwiIGhlaWdodD1cIjQ4XCIgdmlld0JveD1cIjAgMCA0OCA0OFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTQzLjEyNTMgMjAuMTk1NkM0Mi4zNzI4IDE2LjQxMjkgNDAuNTE1NSAxMi45Mzg0IDM3Ljc4ODMgMTAuMjExM0MzNC4xMzEzIDYuNTU0NDMgMjkuMTcxNSA0LjUgMjQgNC41QzE4LjgyODUgNC41IDEzLjg2ODcgNi41NTQ0MyAxMC4yMTE3IDEwLjIxMTNDNy40ODQ0OSAxMi45Mzg0IDUuNjI3MjIgMTYuNDEyOSA0Ljg3NDc1IDIwLjE5NTZDNC4xMjIyOCAyMy45NzgyIDQuNTA4NCAyNy44OTkgNS45ODQyOSAzMS40NjIyQzcuNDYwMTcgMzUuMDI1MyA5Ljk1OTUzIDM4LjA3MDkgMTMuMTY2MyA0MC4yMTM2QzE2LjM3MzEgNDIuMzU2MyAyMC4xNDMyIDQzLjUgMjQgNDMuNUMyNy44NTY4IDQzLjUgMzEuNjI2OSA0Mi4zNTYzIDM0LjgzMzcgNDAuMjEzNkMzOC4wNDA1IDM4LjA3MDkgNDAuNTM5OCAzNS4wMjUzIDQyLjAxNTcgMzEuNDYyMkM0My40OTE2IDI3Ljg5OSA0My44Nzc3IDIzLjk3ODIgNDMuMTI1MyAyMC4xOTU2Wk00Ny41Mzg4IDE5LjMxNzZDNDYuNjEyNyAxNC42NjIxIDQ0LjMyNjggMTAuMzg1NyA0MC45NzAyIDcuMDI5MjNDMzYuNDY5NCAyLjUyODU1IDMwLjM2NSAwIDI0IDBDMTcuNjM1IDAgMTEuNTMwNiAyLjUyODU1IDcuMDI5NzYgNy4wMjkyM0MzLjY3MzIxIDEwLjM4NTcgMS4zODczNSAxNC42NjIxIDAuNDYxMjI4IDE5LjMxNzZDLTAuNDY0ODg4IDIzLjk3MzIgMC4wMTAzNDA2IDI4Ljc5ODcgMS44MjY4MiAzMy4xODQyQzMuNjQzMjkgMzcuNTY5NyA2LjcxOTQzIDQxLjMxOCAxMC42NjYyIDQzLjk1NTJDMTQuNjEzIDQ2LjU5MjQgMTkuMjUzMiA0OCAyNCA0OEMyOC43NDY4IDQ4IDMzLjM4NyA0Ni41OTI0IDM3LjMzMzggNDMuOTU1MkM0MS4yODA2IDQxLjMxOCA0NC4zNTY3IDM3LjU2OTcgNDYuMTczMiAzMy4xODQyQzQ3Ljk4OTcgMjguNzk4NyA0OC40NjQ5IDIzLjk3MzIgNDcuNTM4OCAxOS4zMTc2WlwiIGZpbGw9XCIjOTQ5RUE3XCIvPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0yNy45MzY2IDMwLjkyNDJMMjMuOTk5OCAyNi45ODY3TDIwLjA2MzEgMzAuOTI0MkMxOS44NjcgMzEuMTIwNCAxOS42MzQxIDMxLjI3NiAxOS4zNzc3IDMxLjM4MjFDMTkuMTIxMyAzMS40ODgxIDE4Ljg0NjUgMzEuNTQyNSAxOC41NjkxIDMxLjU0MjJDMTguMjkxOCAzMS41NDI0IDE4LjAxNzEgMzEuNDg4IDE3Ljc2MDkgMzEuMzgxOUMxNy41MDQ3IDMxLjI3NTkgMTcuMjcxOSAzMS4xMjAzIDE3LjA3NTggMzAuOTI0MkMxNi42Nzk4IDMwLjUyOCAxNi40NTczIDI5Ljk5MDcgMTYuNDU3MyAyOS40MzA1QzE2LjQ1NzMgMjguODcwNCAxNi42Nzk4IDI4LjMzMzEgMTcuMDc1OCAyNy45MzY5TDIxLjAxMjYgMjQuMDAwMkwxNy4wNzU4IDIwLjA2MzRDMTYuODc5NyAxOS44NjczIDE2LjcyNCAxOS42MzQ0IDE2LjYxNzkgMTkuMzc4MkMxNi41MTE3IDE5LjEyMTkgMTYuNDU3IDE4Ljg0NzIgMTYuNDU3IDE4LjU2OThDMTYuNDU3IDE4LjI5MjQgMTYuNTExNyAxOC4wMTc3IDE2LjYxNzkgMTcuNzYxNEMxNi43MjQgMTcuNTA1MSAxNi44Nzk3IDE3LjI3MjMgMTcuMDc1OCAxNy4wNzYyQzE3LjQ3MTkgMTYuNjgwMiAxOC4wMDkgMTYuNDU3NyAxOC41NjkxIDE2LjQ1NzdDMTkuMTI5MSAxNi40NTc3IDE5LjY2NjMgMTYuNjgwMiAyMC4wNjIzIDE3LjA3NjJMMjMuOTk5MSAyMS4wMTI5TDI3LjkzNTggMTcuMDc2MkMyOC4zMzE5IDE2LjY4MDIgMjguODY5IDE2LjQ1NzcgMjkuNDI5MSAxNi40NTc3QzI5Ljk4OTEgMTYuNDU3NyAzMC41MjYzIDE2LjY4MDIgMzAuOTIyMyAxNy4wNzYyQzMxLjExODUgMTcuMjcyMyAzMS4yNzQxIDE3LjUwNTEgMzEuMzgwMyAxNy43NjE0QzMxLjQ4NjUgMTguMDE3NyAzMS41NDExIDE4LjI5MjQgMzEuNTQxMSAxOC41Njk4QzMxLjU0MTEgMTguODQ3MiAzMS40ODY1IDE5LjEyMTkgMzEuMzgwMyAxOS4zNzgyQzMxLjI3NDEgMTkuNjM0NCAzMS4xMTg1IDE5Ljg2NzMgMzAuOTIyMyAyMC4wNjM0TDI2Ljk4NTYgMjQuMDAwMkwzMC45MjIzIDI3LjkzNjlDMzEuMzE4NCAyOC4zMzMxIDMxLjU0MDggMjguODcwNCAzMS41NDA4IDI5LjQzMDVDMzEuNTQwOCAyOS45OTA3IDMxLjMxODQgMzAuNTI4IDMwLjkyMjMgMzAuOTI0MkMzMC43MjY0IDMxLjEyMDQgMzAuNDkzNiAzMS4yNzYgMzAuMjM3MyAzMS4zODIxQzI5Ljk4MTEgMzEuNDg4MiAyOS43MDY0IDMxLjU0MjUgMjkuNDI5MSAzMS41NDIyQzI5LjE1MTkgMzEuNTQyNSAyOC44NzczIDMxLjQ4ODEgMjguNjIxMiAzMS4zODJDMjguMzY1MSAzMS4yNzYgMjguMTMyNCAzMS4xMjA0IDI3LjkzNjYgMzAuOTI0MlpcIiBmaWxsPVwiIzk0OUVBN1wiLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9tcmQtYnV0dG9uPlxyXG4gICAgICA8IS0tIERlciBJbmhhbHQgZGVzIEZseU91dHMgKGRpZSBlaW5nZWJldHRldGUgS29tcG9uZW50ZSB3aXJkIGhpZXIgcmVpbmdlYWxkZW4pIC0tPlxyXG4gICAgICA8ZGl2ICNjb250ZW50PjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuIl19