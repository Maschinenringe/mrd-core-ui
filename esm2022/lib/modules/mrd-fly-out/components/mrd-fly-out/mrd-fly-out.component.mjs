import { ChangeDetectionStrategy, Component, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';
import { BaseObject, ObservableValue } from 'mrd-core';
import * as i0 from "@angular/core";
import * as i1 from "./../../common/service/fly-out.service";
import * as i2 from "@angular/common";
import * as i3 from "../../../mrd-button/components/mrd-button/mrd-button.component";
const _c0 = ["container"];
const _c1 = ["content"];
function MrdFlyOutComponent_mrd_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-button", 7);
    i0.ɵɵlistener("click", function MrdFlyOutComponent_mrd_button_5_Template_mrd_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.close()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 8);
    i0.ɵɵelement(2, "path", 9)(3, "path", 10);
    i0.ɵɵelementEnd()();
} }
const _c2 = function (a0) { return { "open": a0 }; };
const _c3 = function (a0, a1, a2, a3, a4, a5) { return { "open": a0, "centered": a1, "topDown": a2, "bottomUp": a3, "leftRight": a4, "rightLeft": a5 }; };
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
    container;
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
            this.centered = value.centered ?? this.centered;
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
     * Gibt an, ob das FlyOut beim Drücken der Escape-Taste geschlossen wird.
     * Default: true;
     *
     * @type {boolean}
     * @memberof MrdFlyOutComponent
     */
    closeOnEsc = true;
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
     * Default: '500ms'
     *
     * @type {string}
     * @memberof MrdFlyOutComponent
     */
    transitionTime = '500ms';
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
    centered = false;
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
        }, 500);
    }
    /**
     * Wird aufgerufen, wenn das FlyOut über eine MrdFlyOutCloseDirective geschlossen wird.
     *
     * @memberof MrdFlyOutComponent
     */
    closeDirectiveClicked(returnValue) {
        this.close(returnValue);
    }
    get containerHeight() {
        return this.container?.nativeElement.offsetHeight + 'px';
    }
    get containerWidth() {
        return this.container?.nativeElement.offsetWidth + 'px';
    }
    /** @nocollapse */ static ɵfac = function MrdFlyOutComponent_Factory(t) { return new (t || MrdFlyOutComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.FlyOutService)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdFlyOutComponent, selectors: [["mrd-fly-out"]], viewQuery: function MrdFlyOutComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 7, ViewContainerRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 36, consts: [[1, "backdrop", 3, "ngClass", "click"], [1, "mrd-fly-out"], [1, "mrd-fly-out__container", 3, "ngClass"], ["container", ""], [1, "mrd-fly-out__content"], ["icon-button", "", "iconSize", "2em", "class", "mrd-fly-out__close", 3, "click", 4, "ngIf"], ["content", ""], ["icon-button", "", "iconSize", "2em", 1, "mrd-fly-out__close", 3, "click"], ["mrd-icon", "", "width", "48", "height", "48", "viewBox", "0 0 48 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M43.1253 20.1956C42.3728 16.4129 40.5155 12.9384 37.7883 10.2113C34.1313 6.55443 29.1715 4.5 24 4.5C18.8285 4.5 13.8687 6.55443 10.2117 10.2113C7.48449 12.9384 5.62722 16.4129 4.87475 20.1956C4.12228 23.9782 4.5084 27.899 5.98429 31.4622C7.46017 35.0253 9.95953 38.0709 13.1663 40.2136C16.3731 42.3563 20.1432 43.5 24 43.5C27.8568 43.5 31.6269 42.3563 34.8337 40.2136C38.0405 38.0709 40.5398 35.0253 42.0157 31.4622C43.4916 27.899 43.8777 23.9782 43.1253 20.1956ZM47.5388 19.3176C46.6127 14.6621 44.3268 10.3857 40.9702 7.02923C36.4694 2.52855 30.365 0 24 0C17.635 0 11.5306 2.52855 7.02976 7.02923C3.67321 10.3857 1.38735 14.6621 0.461228 19.3176C-0.464888 23.9732 0.0103406 28.7987 1.82682 33.1842C3.64329 37.5697 6.71943 41.318 10.6662 43.9552C14.613 46.5924 19.2532 48 24 48C28.7468 48 33.387 46.5924 37.3338 43.9552C41.2806 41.318 44.3567 37.5697 46.1732 33.1842C47.9897 28.7987 48.4649 23.9732 47.5388 19.3176Z", "fill", "#949EA7"], ["d", "M27.9366 30.9242L23.9998 26.9867L20.0631 30.9242C19.867 31.1204 19.6341 31.276 19.3777 31.3821C19.1213 31.4881 18.8465 31.5425 18.5691 31.5422C18.2918 31.5424 18.0171 31.488 17.7609 31.3819C17.5047 31.2759 17.2719 31.1203 17.0758 30.9242C16.6798 30.528 16.4573 29.9907 16.4573 29.4305C16.4573 28.8704 16.6798 28.3331 17.0758 27.9369L21.0126 24.0002L17.0758 20.0634C16.8797 19.8673 16.724 19.6344 16.6179 19.3782C16.5117 19.1219 16.457 18.8472 16.457 18.5698C16.457 18.2924 16.5117 18.0177 16.6179 17.7614C16.724 17.5051 16.8797 17.2723 17.0758 17.0762C17.4719 16.6802 18.009 16.4577 18.5691 16.4577C19.1291 16.4577 19.6663 16.6802 20.0623 17.0762L23.9991 21.0129L27.9358 17.0762C28.3319 16.6802 28.869 16.4577 29.4291 16.4577C29.9891 16.4577 30.5263 16.6802 30.9223 17.0762C31.1185 17.2723 31.2741 17.5051 31.3803 17.7614C31.4865 18.0177 31.5411 18.2924 31.5411 18.5698C31.5411 18.8472 31.4865 19.1219 31.3803 19.3782C31.2741 19.6344 31.1185 19.8673 30.9223 20.0634L26.9856 24.0002L30.9223 27.9369C31.3184 28.3331 31.5408 28.8704 31.5408 29.4305C31.5408 29.9907 31.3184 30.528 30.9223 30.9242C30.7264 31.1204 30.4936 31.276 30.2373 31.3821C29.9811 31.4882 29.7064 31.5425 29.4291 31.5422C29.1519 31.5425 28.8773 31.4881 28.6212 31.382C28.3651 31.276 28.1324 31.1204 27.9366 30.9242Z", "fill", "#949EA7"]], template: function MrdFlyOutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function MrdFlyOutComponent_Template_div_click_0_listener() { return ctx.backdropClicked(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "div", 1)(2, "div", 2, 3)(4, "div", 4);
            i0.ɵɵtemplate(5, MrdFlyOutComponent_mrd_button_5_Template, 4, 0, "mrd-button", 5);
            i0.ɵɵelement(6, "div", null, 6);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵstyleProp("--bd-color", ctx.backdropColor)("--bd-transition-time", ctx.transitionTime);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(27, _c2, ctx.stateToggle.value));
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("--fo-width", ctx.width)("--fo-max-width", ctx.maxWidth)("--fo-height", ctx.height)("--fo-max-height", ctx.maxHeight)("--fo-bg-color", ctx.backgroundColor)("--fo-padding", ctx.padding)("--fo-border-radius", ctx.borderRadius)("--fo-transition-time", ctx.transitionTime)("--fo-container-height", ctx.containerHeight)("--fo-container-width", ctx.containerWidth);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction6(29, _c3, ctx.stateToggle.value, ctx.centered, ctx.topDown, ctx.bottomUp, ctx.leftRight, ctx.rightLeft));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.hideDefaultCloseButton);
        } }, dependencies: [i2.NgClass, i2.NgIf, i3.MrdButtonComponent], styles: ["[_nghost-%COMP%]{width:100vw;height:100vh;position:absolute;inset:0}.backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:transparent;transition:background-color var(--bd-transition-time) ease-in-out;z-index:2}.backdrop.open[_ngcontent-%COMP%]{display:block;background-color:var(--bd-color)}.mrd-fly-out[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container[_ngcontent-%COMP%]{position:absolute;width:var(--fo-width);max-width:var(--fo-max-width);height:var(--fo-height);max-height:var(--fo-max-height);background-color:var(--fo-bg-color);box-shadow:0 0 10px #00000080;border-radius:var(--fo-border-radius);padding:var(--fo-padding);transition:top var(--fo-transition-time) ease-in-out,bottom var(--fo-transition-time) ease-in-out,left var(--fo-transition-time) ease-in-out,right var(--fo-transition-time) ease-in-out;z-index:3}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container[_ngcontent-%COMP%]   .mrd-fly-out__content[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.topDown[_ngcontent-%COMP%]{padding-top:3.5em;top:-100%}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.topDown.centered[_ngcontent-%COMP%]{padding-top:1em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.bottomUp[_ngcontent-%COMP%]{padding-bottom:3.5em;bottom:-100%}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.bottomUp.centered[_ngcontent-%COMP%]{padding-bottom:1em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.leftRight[_ngcontent-%COMP%]{padding-left:3.5em;left:-100%}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.leftRight.centered[_ngcontent-%COMP%]{padding-left:1em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.rightLeft[_ngcontent-%COMP%]{padding-right:3.5em;right:-100%}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.rightLeft.centered[_ngcontent-%COMP%]{padding-right:1em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.topDown[_ngcontent-%COMP%]{top:-3em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.topDown.centered[_ngcontent-%COMP%]{top:calc(50% - var(--fo-container-height) / 2)}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.bottomUp[_ngcontent-%COMP%]{bottom:-2em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.bottomUp.centered[_ngcontent-%COMP%]{bottom:calc(50% - var(--fo-container-height) / 2)}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.leftRight[_ngcontent-%COMP%]{left:-2em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.leftRight.centered[_ngcontent-%COMP%]{left:calc(50% - var(--fo-container-width) / 2)}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.rightLeft[_ngcontent-%COMP%]{right:-2em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.rightLeft.centered[_ngcontent-%COMP%]{right:calc(50% - var(--fo-container-width) / 2)}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__close[_ngcontent-%COMP%]{position:absolute;top:0;right:0;z-index:10000}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdFlyOutComponent, [{
        type: Component,
        args: [{ selector: 'mrd-fly-out', changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- Der Hintergrund des FlyOuts -->\r\n<div class=\"backdrop\" [ngClass]=\"{'open': stateToggle.value}\" (click)=\"backdropClicked()\"\r\n  [style.--bd-color]=\"backdropColor\"\r\n  [style.--bd-transition-time]=\"transitionTime\"\r\n  ></div>\r\n<!-- Die \u00E4u\u00DFerste Komponente des FlyOuts, das den Container zentriert -->\r\n<div class=\"mrd-fly-out\"\r\n  [style.--fo-width]=\"width\"\r\n  [style.--fo-max-width]=\"maxWidth\"\r\n  [style.--fo-height]=\"height\"\r\n  [style.--fo-max-height]=\"maxHeight\"\r\n  [style.--fo-bg-color]=\"backgroundColor\"\r\n  [style.--fo-padding]=\"padding\"\r\n  [style.--fo-border-radius]=\"borderRadius\"\r\n  [style.--fo-transition-time]=\"transitionTime\"\r\n  [style.--fo-container-height]=\"containerHeight\"\r\n  [style.--fo-container-width]=\"containerWidth\"\r\n  >\r\n  <!-- Der Container, der das Grundlayout des FlyOuts bereitstellt -->\r\n  <div #container class=\"mrd-fly-out__container\" [ngClass]=\"{'open': stateToggle.value, 'centered': centered,\r\n    'topDown': topDown, 'bottomUp': bottomUp, 'leftRight': leftRight, 'rightLeft': rightLeft}\">\r\n    <!-- Der Inhalt des FlyOuts -->\r\n    <div class=\"mrd-fly-out__content\">\r\n      <!-- Der Standard Schlie\u00DFen-Button des FlyOuts -->\r\n      <mrd-button icon-button iconSize=\"2em\" (click)=\"close()\" class=\"mrd-fly-out__close\" *ngIf=\"!hideDefaultCloseButton\">\r\n        <svg mrd-icon width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M43.1253 20.1956C42.3728 16.4129 40.5155 12.9384 37.7883 10.2113C34.1313 6.55443 29.1715 4.5 24 4.5C18.8285 4.5 13.8687 6.55443 10.2117 10.2113C7.48449 12.9384 5.62722 16.4129 4.87475 20.1956C4.12228 23.9782 4.5084 27.899 5.98429 31.4622C7.46017 35.0253 9.95953 38.0709 13.1663 40.2136C16.3731 42.3563 20.1432 43.5 24 43.5C27.8568 43.5 31.6269 42.3563 34.8337 40.2136C38.0405 38.0709 40.5398 35.0253 42.0157 31.4622C43.4916 27.899 43.8777 23.9782 43.1253 20.1956ZM47.5388 19.3176C46.6127 14.6621 44.3268 10.3857 40.9702 7.02923C36.4694 2.52855 30.365 0 24 0C17.635 0 11.5306 2.52855 7.02976 7.02923C3.67321 10.3857 1.38735 14.6621 0.461228 19.3176C-0.464888 23.9732 0.0103406 28.7987 1.82682 33.1842C3.64329 37.5697 6.71943 41.318 10.6662 43.9552C14.613 46.5924 19.2532 48 24 48C28.7468 48 33.387 46.5924 37.3338 43.9552C41.2806 41.318 44.3567 37.5697 46.1732 33.1842C47.9897 28.7987 48.4649 23.9732 47.5388 19.3176Z\" fill=\"#949EA7\"/>\r\n          <path d=\"M27.9366 30.9242L23.9998 26.9867L20.0631 30.9242C19.867 31.1204 19.6341 31.276 19.3777 31.3821C19.1213 31.4881 18.8465 31.5425 18.5691 31.5422C18.2918 31.5424 18.0171 31.488 17.7609 31.3819C17.5047 31.2759 17.2719 31.1203 17.0758 30.9242C16.6798 30.528 16.4573 29.9907 16.4573 29.4305C16.4573 28.8704 16.6798 28.3331 17.0758 27.9369L21.0126 24.0002L17.0758 20.0634C16.8797 19.8673 16.724 19.6344 16.6179 19.3782C16.5117 19.1219 16.457 18.8472 16.457 18.5698C16.457 18.2924 16.5117 18.0177 16.6179 17.7614C16.724 17.5051 16.8797 17.2723 17.0758 17.0762C17.4719 16.6802 18.009 16.4577 18.5691 16.4577C19.1291 16.4577 19.6663 16.6802 20.0623 17.0762L23.9991 21.0129L27.9358 17.0762C28.3319 16.6802 28.869 16.4577 29.4291 16.4577C29.9891 16.4577 30.5263 16.6802 30.9223 17.0762C31.1185 17.2723 31.2741 17.5051 31.3803 17.7614C31.4865 18.0177 31.5411 18.2924 31.5411 18.5698C31.5411 18.8472 31.4865 19.1219 31.3803 19.3782C31.2741 19.6344 31.1185 19.8673 30.9223 20.0634L26.9856 24.0002L30.9223 27.9369C31.3184 28.3331 31.5408 28.8704 31.5408 29.4305C31.5408 29.9907 31.3184 30.528 30.9223 30.9242C30.7264 31.1204 30.4936 31.276 30.2373 31.3821C29.9811 31.4882 29.7064 31.5425 29.4291 31.5422C29.1519 31.5425 28.8773 31.4881 28.6212 31.382C28.3651 31.276 28.1324 31.1204 27.9366 30.9242Z\" fill=\"#949EA7\"/>\r\n        </svg>\r\n      </mrd-button>\r\n      <!-- Der Inhalt des FlyOuts (die eingebettete Komponente wird hier reingealden) -->\r\n      <div #content></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n", styles: [":host{width:100vw;height:100vh;position:absolute;inset:0}.backdrop{position:absolute;inset:0;background-color:transparent;transition:background-color var(--bd-transition-time) ease-in-out;z-index:2}.backdrop.open{display:block;background-color:var(--bd-color)}.mrd-fly-out{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%}.mrd-fly-out .mrd-fly-out__container{position:absolute;width:var(--fo-width);max-width:var(--fo-max-width);height:var(--fo-height);max-height:var(--fo-max-height);background-color:var(--fo-bg-color);box-shadow:0 0 10px #00000080;border-radius:var(--fo-border-radius);padding:var(--fo-padding);transition:top var(--fo-transition-time) ease-in-out,bottom var(--fo-transition-time) ease-in-out,left var(--fo-transition-time) ease-in-out,right var(--fo-transition-time) ease-in-out;z-index:3}.mrd-fly-out .mrd-fly-out__container .mrd-fly-out__content{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center}.mrd-fly-out .mrd-fly-out__container.topDown{padding-top:3.5em;top:-100%}.mrd-fly-out .mrd-fly-out__container.topDown.centered{padding-top:1em}.mrd-fly-out .mrd-fly-out__container.bottomUp{padding-bottom:3.5em;bottom:-100%}.mrd-fly-out .mrd-fly-out__container.bottomUp.centered{padding-bottom:1em}.mrd-fly-out .mrd-fly-out__container.leftRight{padding-left:3.5em;left:-100%}.mrd-fly-out .mrd-fly-out__container.leftRight.centered{padding-left:1em}.mrd-fly-out .mrd-fly-out__container.rightLeft{padding-right:3.5em;right:-100%}.mrd-fly-out .mrd-fly-out__container.rightLeft.centered{padding-right:1em}.mrd-fly-out .mrd-fly-out__container.open.topDown{top:-3em}.mrd-fly-out .mrd-fly-out__container.open.topDown.centered{top:calc(50% - var(--fo-container-height) / 2)}.mrd-fly-out .mrd-fly-out__container.open.bottomUp{bottom:-2em}.mrd-fly-out .mrd-fly-out__container.open.bottomUp.centered{bottom:calc(50% - var(--fo-container-height) / 2)}.mrd-fly-out .mrd-fly-out__container.open.leftRight{left:-2em}.mrd-fly-out .mrd-fly-out__container.open.leftRight.centered{left:calc(50% - var(--fo-container-width) / 2)}.mrd-fly-out .mrd-fly-out__container.open.rightLeft{right:-2em}.mrd-fly-out .mrd-fly-out__container.open.rightLeft.centered{right:calc(50% - var(--fo-container-width) / 2)}.mrd-fly-out .mrd-fly-out__close{position:absolute;top:0;right:0;z-index:10000}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.FlyOutService }]; }, { container: [{
            type: ViewChild,
            args: ['container']
        }], content: [{
            type: ViewChild,
            args: ['content', { read: ViewContainerRef, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWZseS1vdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mbHktb3V0L2NvbXBvbmVudHMvbXJkLWZseS1vdXQvbXJkLWZseS1vdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mbHktb3V0L2NvbXBvbmVudHMvbXJkLWZseS1vdXQvbXJkLWZseS1vdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFpQix1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLFlBQVksRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUosT0FBTyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7OztJQ3NCakQscUNBQW9IO0lBQTdFLDBLQUFTLGVBQUEsY0FBTyxDQUFBLElBQUM7SUFDdEQsbUJBQXdHO0lBQXhHLDhCQUF3RztJQUN0RywwQkFBdTlCLGVBQUE7SUFFejlCLGlCQUFNLEVBQUE7Ozs7QUR2QmQ7Ozs7Ozs7R0FPRztBQU9ILE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxVQUFVO0lBNk5wQztJQUNBO0lBNU5tQixTQUFTLENBQTBCO0lBRWxFOzs7OztPQUtHO0lBQ2tFLE9BQU8sQ0FBbUI7SUFFL0Y7Ozs7T0FJRztJQUNILElBQVcsTUFBTSxDQUFDLEtBQXNCO1FBQ3RDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLHNCQUFzQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDdEUsSUFBSSxD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QyxXQUFXO1lBUStDLE9BQU87a0JBQTNFLFNBQVM7bUJBQUMsU0FBUyxFQUFFLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbHlPdXRTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9jb21tb24vc2VydmljZS9mbHktb3V0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmFzZU9iamVjdCwgT2JzZXJ2YWJsZVZhbHVlIH0gZnJvbSAnbXJkLWNvcmUnO1xyXG5pbXBvcnQgeyBNcmRGbHlPdXRDb25maWcgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kZWwvbXJkLWZseS1vdXQtY29uZmlnJztcclxuXHJcbi8qKlxyXG4gKiBEaWVzZSBLb21wb25lbnRlIHN0ZWxsdCBlaW4gRmx5T3V0IGRhciwgZGFzIHZvbiBvYmVuIG5hY2ggdW50ZW4sIHZvbiB1bnRlbiBuYWNoIG9iZW4sIHZvbiBsaW5rcyBuYWNoIHJlY2h0cyBvZGVyIHZvbiByZWNodHMgbmFjaCBsaW5rcyBlaW5mbGllZ3QuXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIE1yZEZseU91dENvbXBvbmVudFxyXG4gKiBAZXh0ZW5kcyB7QmFzZU9iamVjdH1cclxuICogQGltcGxlbWVudHMge0FmdGVyVmlld0luaXR9XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1mbHktb3V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWZseS1vdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC1mbHktb3V0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZEZseU91dENvbXBvbmVudCBleHRlbmRzIEJhc2VPYmplY3QgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgcHVibGljIGNvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcblxyXG4gIC8qKlxyXG4gICAqIERpZSBSZWZlcmVueiBhdWYgZGFzIENvbnRlbnQtRWxlbWVudCwgaW4gZGFzIGRpZSBlaW5nZWJldHRldGUgS29tcG9uZW50ZSBnZWxhZGVuIHdpcmQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Vmlld0NvbnRhaW5lclJlZn1cclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgQFZpZXdDaGlsZCgnY29udGVudCcsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWV9KSBwdWJsaWMgY29udGVudDogVmlld0NvbnRhaW5lclJlZjtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0enQgZGllIEtvbmZpZ3VyYXRpb24gZGVzIEZseU91dHMuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIHNldCBjb25maWcodmFsdWU6IE1yZEZseU91dENvbmZpZykge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZmx5SW5Gcm9tID0gdmFsdWUuZmx5SW5Gcm9tO1xyXG4gICAgICB0aGlzLmRpc2FibGVDbG9zZSA9IHZhbHVlLmRpc2FibGVDbG9zZU9uQmFja2Ryb3AgPz8gdGhpcy5kaXNhYmxlQ2xvc2U7XHJcbiAgICAgIHRoaXMuYmFja2Ryb3BDb2xvciA9IHZhbHVlLmJhY2tkcm9wQ29sb3IgPz8gdGhpcy5iYWNrZHJvcENvbG9yO1xyXG4gICAgICB0aGlzLmhpZGVEZWZhdWx0Q2xvc2VCdXR0b24gPSB2YWx1ZS5oaWRlRGVmYXVsdENsb3NlQnV0dG9uID8/IHRoaXMuaGlkZURlZmF1bHRDbG9zZUJ1dHRvbjtcclxuICAgICAgdGhpcy53aWR0aCA9IHZhbHVlLndpZHRoID8/IHRoaXMud2lkdGg7XHJcbiAgICAgIHRoaXMubWF4V2lkdGggPSB2YWx1ZS5tYXhXaWR0aCA/PyB0aGlzLm1heFdpZHRoO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IHZhbHVlLmhlaWdodCA/PyB0aGlzLmhlaWdodDtcclxuICAgICAgdGhpcy5tYXhIZWlnaHQgPSB2YWx1ZS5tYXhIZWlnaHQgPz8gdGhpcy5tYXhIZWlnaHQ7XHJcbiAgICAgIHRoaXMucGFkZGluZyA9IHZhbHVlLnBhZGRpbmcgPz8gdGhpcy5wYWRkaW5nO1xyXG4gICAgICB0aGlzLmJvcmRlclJhZGl1cyA9IHZhbHVlLmJvcmRlclJhZGl1cyA/PyB0aGlzLmJvcmRlclJhZGl1cztcclxuICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSB2YWx1ZS5iYWNrZ3JvdW5kQ29sb3IgPz8gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgIHRoaXMudHJhbnNpdGlvblRpbWUgPSB2YWx1ZS50cmFuc2l0aW9uVGltZSA/PyB0aGlzLnRyYW5zaXRpb25UaW1lO1xyXG4gICAgICB0aGlzLmNlbnRlcmVkID0gdmFsdWUuY2VudGVyZWQgPz8gdGhpcy5jZW50ZXJlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHp0IGRpZSBSaWNodHVuZywgYXVzIGRlciBkYXMgRmx5T3V0IGVpbmZsaWVndC5cclxuICAgKiBEZWZhdWx0OiAnYm90dG9tJ1xyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXQgZmx5SW5Gcm9tKHZhbHVlIDogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcpIHtcclxuICAgIHRoaXMudG9wRG93biA9IHRoaXMuYm90dG9tVXAgPSB0aGlzLmxlZnRSaWdodCA9IHRoaXMucmlnaHRMZWZ0ID0gZmFsc2U7XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgIGNhc2UgJ3RvcCc6IHRoaXMudG9wRG93biA9IHRydWU7IGJyZWFrO1xyXG4gICAgICBjYXNlICdib3R0b20nOiB0aGlzLmJvdHRvbVVwID0gdHJ1ZTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2xlZnQnOiB0aGlzLmxlZnRSaWdodCA9IHRydWU7IGJyZWFrO1xyXG4gICAgICBjYXNlICdyaWdodCc6IHRoaXMucmlnaHRMZWZ0ID0gdHJ1ZTsgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6IHRoaXMuYm90dG9tVXAgPSB0cnVlOyBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRlciBTdGFuZGFyZC1TY2hsaWXDn2VuLUJ1dHRvbiBuaWNodCBhbmdlemVpZ3Qgd2lyZC5cclxuICAgKiBEZWZhdWx0OiBmYWxzZVxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoaWRlRGVmYXVsdENsb3NlQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGFzIEZseU91dCBiZWltIEtsaWNrIGF1ZiBkZW4gSGludGVyZ3J1bmQgbmljaHQgZ2VzY2hsb3NzZW4gd2lyZC5cclxuICAgKiBEZWZhdWx0OiBmYWxzZTtcclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgZGlzYWJsZUNsb3NlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGFzIEZseU91dCBiZWltIERyw7xja2VuIGRlciBFc2NhcGUtVGFzdGUgZ2VzY2hsb3NzZW4gd2lyZC5cclxuICAgKiBEZWZhdWx0OiB0cnVlO1xyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBjbG9zZU9uRXNjOiBib29sZWFuID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBEaWUgRmFyYmUgZGVzIEhpbnRlcmdydW5kcy5cclxuICAgKiBEZWZhdWx0OiAncmdiYSgwLCAwLCAwLCAwLjUpJ1xyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIGJhY2tkcm9wQ29sb3I6IHN0cmluZyA9ICdyZ2JhKDAsIDAsIDAsIDAuNSknO1xyXG4gIC8qKlxyXG4gICAqIERpZSBCcmVpdGUgZGVzIEZseU91dHMuXHJcbiAgICogRGVmYXVsdDogJ2ZpdC1jb250ZW50J1xyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIHdpZHRoOiBzdHJpbmcgPSAnZml0LWNvbnRlbnQnO1xyXG4gIC8qKlxyXG4gICAqIERpZSBtYXhpbWFsZSBCcmVpdGUgZGVzIEZseU91dHMuXHJcbiAgICogRGVmYXVsdDogJzk1dncnXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgbWF4V2lkdGg6IHN0cmluZyA9ICc5NXZ3JztcclxuICAvKipcclxuICAgKiBEaWUgSMO2aGUgZGVzIEZseU91dHMuXHJcbiAgICogRGVmYXVsdDogJ2ZpdC1jb250ZW50J1xyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIGhlaWdodDogc3RyaW5nID0gJ2ZpdC1jb250ZW50JztcclxuICAvKipcclxuICAgKiBEaWUgbWF4aW1hbGUgSMO2aGUgZGVzIEZseU91dHMuXHJcbiAgICogRGVmYXVsdDogJzk1dmgnXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgbWF4SGVpZ2h0OiBzdHJpbmcgPSAnOTV2aCc7XHJcbiAgLyoqXHJcbiAgICogRGFzIFBhZGRpbmcgZGVzIEZseU91dHMgenVtIFJhbmQuXHJcbiAgICogRGVmYXVsdDogJzFlbSdcclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBwYWRkaW5nOiBzdHJpbmcgPSAnMWVtJztcclxuICAvKipcclxuICAgKiBEZXIgUmFkaXVzIGRlciBFY2tlbiBkZXMgRmx5T3V0cy5cclxuICAgKiBEZWZhdWx0OiAnMjBweCdcclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBib3JkZXJSYWRpdXM6IHN0cmluZyA9ICcyMHB4JztcclxuICAvKipcclxuICAgKiBEaWUgSGludGVyZ3J1bmRmYXJiZSBkZXMgRmx5T3V0cy5cclxuICAgKiBEZWZhdWx0OiAnI2ZmZidcclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9ICcjZmZmJztcclxuICAvKipcclxuICAgKiBEaWUgWmVpdCwgZGllIGRhcyBGbHlPdXQgYmVuw7Z0aWd0LCB1bSB6dSDDtmZmbmVuIG9kZXIgenUgc2NobGllw59lbi5cclxuICAgKiBEZWZhdWx0OiAnNTAwbXMnXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgdHJhbnNpdGlvblRpbWU6IHN0cmluZyA9ICc1MDBtcyc7XHJcblxyXG4gIC8qKlxyXG4gICAqIERhcyB2b20gRmx5T3V0IGF1c2dlbMO2c3RlIEV2ZW50LCB3ZW5uIGRhcyBGbHlPdXQgZ2XDtmZmbmV0IHd1cmRlLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjx2b2lkPn1cclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIGFmdGVyT3BlbmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgLyoqXHJcbiAgICogRGFzIHZvbSBGbHlPdXQgYXVzZ2Vsw7ZzdGUgRXZlbnQsIHdlbm4gZGFzIEZseU91dCBnZXNjaGxvc3NlbiB3aXJkLlxyXG4gICAqIEdpYnQgZWluZW4gV2VydCB6dXLDvGNrLCB3ZW5uIMO8YmVyIGRpZSBNcmRGbHlPdXRDbG9zZURpcmVjdGl2ZSBlaW4gV2VydCDDvGJlcmdlYmVuIHd1cmRlLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxhbnk+fVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgb25DbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvKipcclxuICAgKiBEYXMgdm9tIEZseU91dCBhdXNnZWzDtnN0ZSBFdmVudCwgd2VubiBkYXMgRmx5T3V0IGdlc2NobG9zc2VuIHd1cmRlLlxyXG4gICAqIEdpYnQgZWluZW4gV2VydCB6dXLDvGNrLCB3ZW5uIMO8YmVyIGRpZSBNcmRGbHlPdXRDbG9zZURpcmVjdGl2ZSBlaW4gV2VydCDDvGJlcmdlYmVuIHd1cmRlLlxyXG4gICAqXHJcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxhbnk+fVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgYWZ0ZXJDbG9zZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRhcyBGbHlPdXQgdm9uIG9iZW4gbmFjaCB1bnRlbiBlaW5mbGllZ3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIHRvcERvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkYXMgRmx5T3V0IHZvbiB1bnRlbiBuYWNoIG9iZW4gZWluZmxpZWd0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBib3R0b21VcDogYm9vbGVhbiA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGFzIEZseU91dCB2b24gbGlua3MgbmFjaCByZWNodHMgZWluZmxpZWd0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBsZWZ0UmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkYXMgRmx5T3V0IHZvbiByZWNodHMgbmFjaCBsaW5rcyBlaW5mbGllZ3QuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIHJpZ2h0TGVmdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgY2VudGVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGllIElEIGRlcyBPdmVybGF5cy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVybGF5SWQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRGVyIE9ic2VydmFibGVWYWx1ZSwgZGVyIGRlbiBadXN0YW5kIGRlcyBGbHlPdXRzIHN0ZXVlcnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7T2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+fVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGVUb2dnbGU6IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPiA9IG5ldyBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJvdGVjdGVkIGZseU91dFNlcnZpY2U6IEZseU91dFNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXNpZXJ0IGRhcyBFaW5mYWhyZW4gZGVzIEZseU91dC5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zdGF0ZVRvZ2dsZS52YWx1ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuYWZ0ZXJPcGVuZWQuZW1pdCgpO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9LCAxMDApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV2lyZCBhdWZnZXJ1ZmVuLCB3ZW5uIGF1ZiBkZW4gSGludGVyZ3J1bmQgZ2VrbGlja3Qgd3VyZGUuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIGJhY2tkcm9wQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlQ2xvc2UpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2NobGllw590IGRhcyBGbHlPdXQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyp9IFtyZXR1cm5WYWx1ZV1cclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIGNsb3NlKHJldHVyblZhbHVlPzogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2xvc2UuZW1pdChyZXR1cm5WYWx1ZSk7XHJcbiAgICB0aGlzLnN0YXRlVG9nZ2xlLnZhbHVlID0gZmFsc2U7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5hZnRlckNsb3NlZC5lbWl0KHJldHVyblZhbHVlKTtcclxuICAgICAgdGhpcy5mbHlPdXRTZXJ2aWNlLmNsb3NlKHRoaXMub3ZlcmxheUlkKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXaXJkIGF1ZmdlcnVmZW4sIHdlbm4gZGFzIEZseU91dCDDvGJlciBlaW5lIE1yZEZseU91dENsb3NlRGlyZWN0aXZlIGdlc2NobG9zc2VuIHdpcmQuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIGNsb3NlRGlyZWN0aXZlQ2xpY2tlZChyZXR1cm5WYWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmNsb3NlKHJldHVyblZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgY29udGFpbmVySGVpZ2h0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXI/Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgY29udGFpbmVyV2lkdGgoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcj8ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCArICdweCc7XHJcbiAgfVxyXG59XHJcbiIsIjwhLS0gRGVyIEhpbnRlcmdydW5kIGRlcyBGbHlPdXRzIC0tPlxyXG48ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIiBbbmdDbGFzc109XCJ7J29wZW4nOiBzdGF0ZVRvZ2dsZS52YWx1ZX1cIiAoY2xpY2spPVwiYmFja2Ryb3BDbGlja2VkKClcIlxyXG4gIFtzdHlsZS4tLWJkLWNvbG9yXT1cImJhY2tkcm9wQ29sb3JcIlxyXG4gIFtzdHlsZS4tLWJkLXRyYW5zaXRpb24tdGltZV09XCJ0cmFuc2l0aW9uVGltZVwiXHJcbiAgPjwvZGl2PlxyXG48IS0tIERpZSDDpHXDn2Vyc3RlIEtvbXBvbmVudGUgZGVzIEZseU91dHMsIGRhcyBkZW4gQ29udGFpbmVyIHplbnRyaWVydCAtLT5cclxuPGRpdiBjbGFzcz1cIm1yZC1mbHktb3V0XCJcclxuICBbc3R5bGUuLS1mby13aWR0aF09XCJ3aWR0aFwiXHJcbiAgW3N0eWxlLi0tZm8tbWF4LXdpZHRoXT1cIm1heFdpZHRoXCJcclxuICBbc3R5bGUuLS1mby1oZWlnaHRdPVwiaGVpZ2h0XCJcclxuICBbc3R5bGUuLS1mby1tYXgtaGVpZ2h0XT1cIm1heEhlaWdodFwiXHJcbiAgW3N0eWxlLi0tZm8tYmctY29sb3JdPVwiYmFja2dyb3VuZENvbG9yXCJcclxuICBbc3R5bGUuLS1mby1wYWRkaW5nXT1cInBhZGRpbmdcIlxyXG4gIFtzdHlsZS4tLWZvLWJvcmRlci1yYWRpdXNdPVwiYm9yZGVyUmFkaXVzXCJcclxuICBbc3R5bGUuLS1mby10cmFuc2l0aW9uLXRpbWVdPVwidHJhbnNpdGlvblRpbWVcIlxyXG4gIFtzdHlsZS4tLWZvLWNvbnRhaW5lci1oZWlnaHRdPVwiY29udGFpbmVySGVpZ2h0XCJcclxuICBbc3R5bGUuLS1mby1jb250YWluZXItd2lkdGhdPVwiY29udGFpbmVyV2lkdGhcIlxyXG4gID5cclxuICA8IS0tIERlciBDb250YWluZXIsIGRlciBkYXMgR3J1bmRsYXlvdXQgZGVzIEZseU91dHMgYmVyZWl0c3RlbGx0IC0tPlxyXG4gIDxkaXYgI2NvbnRhaW5lciBjbGFzcz1cIm1yZC1mbHktb3V0X19jb250YWluZXJcIiBbbmdDbGFzc109XCJ7J29wZW4nOiBzdGF0ZVRvZ2dsZS52YWx1ZSwgJ2NlbnRlcmVkJzogY2VudGVyZWQsXHJcbiAgICAndG9wRG93bic6IHRvcERvd24sICdib3R0b21VcCc6IGJvdHRvbVVwLCAnbGVmdFJpZ2h0JzogbGVmdFJpZ2h0LCAncmlnaHRMZWZ0JzogcmlnaHRMZWZ0fVwiPlxyXG4gICAgPCEtLSBEZXIgSW5oYWx0IGRlcyBGbHlPdXRzIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1yZC1mbHktb3V0X19jb250ZW50XCI+XHJcbiAgICAgIDwhLS0gRGVyIFN0YW5kYXJkIFNjaGxpZcOfZW4tQnV0dG9uIGRlcyBGbHlPdXRzIC0tPlxyXG4gICAgICA8bXJkLWJ1dHRvbiBpY29uLWJ1dHRvbiBpY29uU2l6ZT1cIjJlbVwiIChjbGljayk9XCJjbG9zZSgpXCIgY2xhc3M9XCJtcmQtZmx5LW91dF9fY2xvc2VcIiAqbmdJZj1cIiFoaWRlRGVmYXVsdENsb3NlQnV0dG9uXCI+XHJcbiAgICAgICAgPHN2ZyBtcmQtaWNvbiB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDhcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNDMuMTI1MyAyMC4xOTU2QzQyLjM3MjggMTYuNDEyOSA0MC41MTU1IDEyLjkzODQgMzcuNzg4MyAxMC4yMTEzQzM0LjEzMTMgNi41NTQ0MyAyOS4xNzE1IDQuNSAyNCA0LjVDMTguODI4NSA0LjUgMTMuODY4NyA2LjU1NDQzIDEwLjIxMTcgMTAuMjExM0M3LjQ4NDQ5IDEyLjkzODQgNS42MjcyMiAxNi40MTI5IDQuODc0NzUgMjAuMTk1NkM0LjEyMjI4IDIzLjk3ODIgNC41MDg0IDI3Ljg5OSA1Ljk4NDI5IDMxLjQ2MjJDNy40NjAxNyAzNS4wMjUzIDkuOTU5NTMgMzguMDcwOSAxMy4xNjYzIDQwLjIxMzZDMTYuMzczMSA0Mi4zNTYzIDIwLjE0MzIgNDMuNSAyNCA0My41QzI3Ljg1NjggNDMuNSAzMS42MjY5IDQyLjM1NjMgMzQuODMzNyA0MC4yMTM2QzM4LjA0MDUgMzguMDcwOSA0MC41Mzk4IDM1LjAyNTMgNDIuMDE1NyAzMS40NjIyQzQzLjQ5MTYgMjcuODk5IDQzLjg3NzcgMjMuOTc4MiA0My4xMjUzIDIwLjE5NTZaTTQ3LjUzODggMTkuMzE3NkM0Ni42MTI3IDE0LjY2MjEgNDQuMzI2OCAxMC4zODU3IDQwLjk3MDIgNy4wMjkyM0MzNi40Njk0IDIuNTI4NTUgMzAuMzY1IDAgMjQgMEMxNy42MzUgMCAxMS41MzA2IDIuNTI4NTUgNy4wMjk3NiA3LjAyOTIzQzMuNjczMjEgMTAuMzg1NyAxLjM4NzM1IDE0LjY2MjEgMC40NjEyMjggMTkuMzE3NkMtMC40NjQ4ODggMjMuOTczMiAwLjAxMDM0MDYgMjguNzk4NyAxLjgyNjgyIDMzLjE4NDJDMy42NDMyOSAzNy41Njk3IDYuNzE5NDMgNDEuMzE4IDEwLjY2NjIgNDMuOTU1MkMxNC42MTMgNDYuNTkyNCAxOS4yNTMyIDQ4IDI0IDQ4QzI4Ljc0NjggNDggMzMuMzg3IDQ2LjU5MjQgMzcuMzMzOCA0My45NTUyQzQxLjI4MDYgNDEuMzE4IDQ0LjM1NjcgMzcuNTY5NyA0Ni4xNzMyIDMzLjE4NDJDNDcuOTg5NyAyOC43OTg3IDQ4LjQ2NDkgMjMuOTczMiA0Ny41Mzg4IDE5LjMxNzZaXCIgZmlsbD1cIiM5NDlFQTdcIi8+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTI3LjkzNjYgMzAuOTI0MkwyMy45OTk4IDI2Ljk4NjdMMjAuMDYzMSAzMC45MjQyQzE5Ljg2NyAzMS4xMjA0IDE5LjYzNDEgMzEuMjc2IDE5LjM3NzcgMzEuMzgyMUMxOS4xMjEzIDMxLjQ4ODEgMTguODQ2NSAzMS41NDI1IDE4LjU2OTEgMzEuNTQyMkMxOC4yOTE4IDMxLjU0MjQgMTguMDE3MSAzMS40ODggMTcuNzYwOSAzMS4zODE5QzE3LjUwNDcgMzEuMjc1OSAxNy4yNzE5IDMxLjEyMDMgMTcuMDc1OCAzMC45MjQyQzE2LjY3OTggMzAuNTI4IDE2LjQ1NzMgMjkuOTkwNyAxNi40NTczIDI5LjQzMDVDMTYuNDU3MyAyOC44NzA0IDE2LjY3OTggMjguMzMzMSAxNy4wNzU4IDI3LjkzNjlMMjEuMDEyNiAyNC4wMDAyTDE3LjA3NTggMjAuMDYzNEMxNi44Nzk3IDE5Ljg2NzMgMTYuNzI0IDE5LjYzNDQgMTYuNjE3OSAxOS4zNzgyQzE2LjUxMTcgMTkuMTIxOSAxNi40NTcgMTguODQ3MiAxNi40NTcgMTguNTY5OEMxNi40NTcgMTguMjkyNCAxNi41MTE3IDE4LjAxNzcgMTYuNjE3OSAxNy43NjE0QzE2LjcyNCAxNy41MDUxIDE2Ljg3OTcgMTcuMjcyMyAxNy4wNzU4IDE3LjA3NjJDMTcuNDcxOSAxNi42ODAyIDE4LjAwOSAxNi40NTc3IDE4LjU2OTEgMTYuNDU3N0MxOS4xMjkxIDE2LjQ1NzcgMTkuNjY2MyAxNi42ODAyIDIwLjA2MjMgMTcuMDc2MkwyMy45OTkxIDIxLjAxMjlMMjcuOTM1OCAxNy4wNzYyQzI4LjMzMTkgMTYuNjgwMiAyOC44NjkgMTYuNDU3NyAyOS40MjkxIDE2LjQ1NzdDMjkuOTg5MSAxNi40NTc3IDMwLjUyNjMgMTYuNjgwMiAzMC45MjIzIDE3LjA3NjJDMzEuMTE4NSAxNy4yNzIzIDMxLjI3NDEgMTcuNTA1MSAzMS4zODAzIDE3Ljc2MTRDMzEuNDg2NSAxOC4wMTc3IDMxLjU0MTEgMTguMjkyNCAzMS41NDExIDE4LjU2OThDMzEuNTQxMSAxOC44NDcyIDMxLjQ4NjUgMTkuMTIxOSAzMS4zODAzIDE5LjM3ODJDMzEuMjc0MSAxOS42MzQ0IDMxLjExODUgMTkuODY3MyAzMC45MjIzIDIwLjA2MzRMMjYuOTg1NiAyNC4wMDAyTDMwLjkyMjMgMjcuOTM2OUMzMS4zMTg0IDI4LjMzMzEgMzEuNTQwOCAyOC44NzA0IDMxLjU0MDggMjkuNDMwNUMzMS41NDA4IDI5Ljk5MDcgMzEuMzE4NCAzMC41MjggMzAuOTIyMyAzMC45MjQyQzMwLjcyNjQgMzEuMTIwNCAzMC40OTM2IDMxLjI3NiAzMC4yMzczIDMxLjM4MjFDMjkuOTgxMSAzMS40ODgyIDI5LjcwNjQgMzEuNTQyNSAyOS40MjkxIDMxLjU0MjJDMjkuMTUxOSAzMS41NDI1IDI4Ljg3NzMgMzEuNDg4MSAyOC42MjEyIDMxLjM4MkMyOC4zNjUxIDMxLjI3NiAyOC4xMzI0IDMxLjEyMDQgMjcuOTM2NiAzMC45MjQyWlwiIGZpbGw9XCIjOTQ5RUE3XCIvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L21yZC1idXR0b24+XHJcbiAgICAgIDwhLS0gRGVyIEluaGFsdCBkZXMgRmx5T3V0cyAoZGllIGVpbmdlYmV0dGV0ZSBLb21wb25lbnRlIHdpcmQgaGllciByZWluZ2VhbGRlbikgLS0+XHJcbiAgICAgIDxkaXYgI2NvbnRlbnQ+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4iXX0=