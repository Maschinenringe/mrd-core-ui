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
    resizeObserver;
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
        this.updateContainerSize();
        if (typeof ResizeObserver !== 'undefined') {
            this.resizeObserver = new ResizeObserver(() => this.updateContainerSize(this.stateToggle.value));
            this.resizeObserver.observe(this.container.nativeElement);
        }
        setTimeout(() => {
            this.stateToggle.value = true;
            this.afterOpened.emit();
            this.cdr.detectChanges();
        }, 100);
    }
    ngOnDestroy() {
        this.resizeObserver?.disconnect();
        super.ngOnDestroy();
    }
    updateContainerSize(withoutTransition = false) {
        let element = this.container.nativeElement;
        if (withoutTransition) {
            element.style.transition = 'none';
        }
        element.style.setProperty('--fo-container-height', element.offsetHeight + 'px');
        element.style.setProperty('--fo-container-width', element.offsetWidth + 'px');
        if (withoutTransition) {
            void element.offsetHeight;
            element.style.transition = '';
        }
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
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 32, consts: [[1, "backdrop", 3, "ngClass", "click"], [1, "mrd-fly-out"], [1, "mrd-fly-out__container", 3, "ngClass"], ["container", ""], [1, "mrd-fly-out__content"], ["icon-button", "", "iconSize", "2em", "class", "mrd-fly-out__close", 3, "click", 4, "ngIf"], ["content", ""], ["icon-button", "", "iconSize", "2em", 1, "mrd-fly-out__close", 3, "click"], ["mrd-icon", "", "width", "48", "height", "48", "viewBox", "0 0 48 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M43.1253 20.1956C42.3728 16.4129 40.5155 12.9384 37.7883 10.2113C34.1313 6.55443 29.1715 4.5 24 4.5C18.8285 4.5 13.8687 6.55443 10.2117 10.2113C7.48449 12.9384 5.62722 16.4129 4.87475 20.1956C4.12228 23.9782 4.5084 27.899 5.98429 31.4622C7.46017 35.0253 9.95953 38.0709 13.1663 40.2136C16.3731 42.3563 20.1432 43.5 24 43.5C27.8568 43.5 31.6269 42.3563 34.8337 40.2136C38.0405 38.0709 40.5398 35.0253 42.0157 31.4622C43.4916 27.899 43.8777 23.9782 43.1253 20.1956ZM47.5388 19.3176C46.6127 14.6621 44.3268 10.3857 40.9702 7.02923C36.4694 2.52855 30.365 0 24 0C17.635 0 11.5306 2.52855 7.02976 7.02923C3.67321 10.3857 1.38735 14.6621 0.461228 19.3176C-0.464888 23.9732 0.0103406 28.7987 1.82682 33.1842C3.64329 37.5697 6.71943 41.318 10.6662 43.9552C14.613 46.5924 19.2532 48 24 48C28.7468 48 33.387 46.5924 37.3338 43.9552C41.2806 41.318 44.3567 37.5697 46.1732 33.1842C47.9897 28.7987 48.4649 23.9732 47.5388 19.3176Z", "fill", "#949EA7"], ["d", "M27.9366 30.9242L23.9998 26.9867L20.0631 30.9242C19.867 31.1204 19.6341 31.276 19.3777 31.3821C19.1213 31.4881 18.8465 31.5425 18.5691 31.5422C18.2918 31.5424 18.0171 31.488 17.7609 31.3819C17.5047 31.2759 17.2719 31.1203 17.0758 30.9242C16.6798 30.528 16.4573 29.9907 16.4573 29.4305C16.4573 28.8704 16.6798 28.3331 17.0758 27.9369L21.0126 24.0002L17.0758 20.0634C16.8797 19.8673 16.724 19.6344 16.6179 19.3782C16.5117 19.1219 16.457 18.8472 16.457 18.5698C16.457 18.2924 16.5117 18.0177 16.6179 17.7614C16.724 17.5051 16.8797 17.2723 17.0758 17.0762C17.4719 16.6802 18.009 16.4577 18.5691 16.4577C19.1291 16.4577 19.6663 16.6802 20.0623 17.0762L23.9991 21.0129L27.9358 17.0762C28.3319 16.6802 28.869 16.4577 29.4291 16.4577C29.9891 16.4577 30.5263 16.6802 30.9223 17.0762C31.1185 17.2723 31.2741 17.5051 31.3803 17.7614C31.4865 18.0177 31.5411 18.2924 31.5411 18.5698C31.5411 18.8472 31.4865 19.1219 31.3803 19.3782C31.2741 19.6344 31.1185 19.8673 30.9223 20.0634L26.9856 24.0002L30.9223 27.9369C31.3184 28.3331 31.5408 28.8704 31.5408 29.4305C31.5408 29.9907 31.3184 30.528 30.9223 30.9242C30.7264 31.1204 30.4936 31.276 30.2373 31.3821C29.9811 31.4882 29.7064 31.5425 29.4291 31.5422C29.1519 31.5425 28.8773 31.4881 28.6212 31.382C28.3651 31.276 28.1324 31.1204 27.9366 30.9242Z", "fill", "#949EA7"]], template: function MrdFlyOutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function MrdFlyOutComponent_Template_div_click_0_listener() { return ctx.backdropClicked(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "div", 1)(2, "div", 2, 3)(4, "div", 4);
            i0.ɵɵtemplate(5, MrdFlyOutComponent_mrd_button_5_Template, 4, 0, "mrd-button", 5);
            i0.ɵɵelement(6, "div", null, 6);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵstyleProp("--bd-color", ctx.backdropColor)("--bd-transition-time", ctx.transitionTime);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(23, _c2, ctx.stateToggle.value));
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("--fo-width", ctx.width)("--fo-max-width", ctx.maxWidth)("--fo-height", ctx.height)("--fo-max-height", ctx.maxHeight)("--fo-bg-color", ctx.backgroundColor)("--fo-padding", ctx.padding)("--fo-border-radius", ctx.borderRadius)("--fo-transition-time", ctx.transitionTime);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction6(25, _c3, ctx.stateToggle.value, ctx.centered, ctx.topDown, ctx.bottomUp, ctx.leftRight, ctx.rightLeft));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.hideDefaultCloseButton);
        } }, dependencies: [i2.NgClass, i2.NgIf, i3.MrdButtonComponent], styles: ["[_nghost-%COMP%]{width:100vw;height:100vh;position:absolute;inset:0}.backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:transparent;transition:background-color var(--bd-transition-time) ease-in-out;z-index:2}.backdrop.open[_ngcontent-%COMP%]{display:block;background-color:var(--bd-color)}.mrd-fly-out[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container[_ngcontent-%COMP%]{position:absolute;width:var(--fo-width);max-width:var(--fo-max-width);height:var(--fo-height);max-height:var(--fo-max-height);background-color:var(--fo-bg-color);box-shadow:0 0 10px #00000080;border-radius:var(--fo-border-radius);padding:var(--fo-padding);transition:top var(--fo-transition-time) ease-in-out,bottom var(--fo-transition-time) ease-in-out,left var(--fo-transition-time) ease-in-out,right var(--fo-transition-time) ease-in-out;z-index:3}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container[_ngcontent-%COMP%]   .mrd-fly-out__content[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.topDown[_ngcontent-%COMP%]{padding-top:3.5em;top:-100%}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.topDown.centered[_ngcontent-%COMP%]{padding-top:1em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.bottomUp[_ngcontent-%COMP%]{padding-bottom:3.5em;bottom:-100%}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.bottomUp.centered[_ngcontent-%COMP%]{padding-bottom:1em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.leftRight[_ngcontent-%COMP%]{padding-left:3.5em;left:-100%}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.leftRight.centered[_ngcontent-%COMP%]{padding-left:1em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.rightLeft[_ngcontent-%COMP%]{padding-right:3.5em;right:-100%}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.rightLeft.centered[_ngcontent-%COMP%]{padding-right:1em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.topDown[_ngcontent-%COMP%]{top:-3em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.topDown.centered[_ngcontent-%COMP%]{top:calc(50% - var(--fo-container-height) / 2)}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.bottomUp[_ngcontent-%COMP%]{bottom:-2em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.bottomUp.centered[_ngcontent-%COMP%]{bottom:calc(50% - var(--fo-container-height) / 2)}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.leftRight[_ngcontent-%COMP%]{left:-2em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.leftRight.centered[_ngcontent-%COMP%]{left:calc(50% - var(--fo-container-width) / 2)}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.rightLeft[_ngcontent-%COMP%]{right:-2em}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__container.open.rightLeft.centered[_ngcontent-%COMP%]{right:calc(50% - var(--fo-container-width) / 2)}.mrd-fly-out[_ngcontent-%COMP%]   .mrd-fly-out__close[_ngcontent-%COMP%]{position:absolute;top:0;right:0;z-index:10000}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdFlyOutComponent, [{
        type: Component,
        args: [{ selector: 'mrd-fly-out', changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- Der Hintergrund des FlyOuts -->\r\n<div class=\"backdrop\" [ngClass]=\"{'open': stateToggle.value}\" (click)=\"backdropClicked()\"\r\n  [style.--bd-color]=\"backdropColor\"\r\n  [style.--bd-transition-time]=\"transitionTime\"\r\n  ></div>\r\n<!-- Die \u00E4u\u00DFerste Komponente des FlyOuts, das den Container zentriert -->\r\n<div class=\"mrd-fly-out\"\r\n  [style.--fo-width]=\"width\"\r\n  [style.--fo-max-width]=\"maxWidth\"\r\n  [style.--fo-height]=\"height\"\r\n  [style.--fo-max-height]=\"maxHeight\"\r\n  [style.--fo-bg-color]=\"backgroundColor\"\r\n  [style.--fo-padding]=\"padding\"\r\n  [style.--fo-border-radius]=\"borderRadius\"\r\n  [style.--fo-transition-time]=\"transitionTime\"\r\n  >\r\n  <!-- Der Container, der das Grundlayout des FlyOuts bereitstellt -->\r\n  <div #container class=\"mrd-fly-out__container\" [ngClass]=\"{'open': stateToggle.value, 'centered': centered,\r\n    'topDown': topDown, 'bottomUp': bottomUp, 'leftRight': leftRight, 'rightLeft': rightLeft}\">\r\n    <!-- Der Inhalt des FlyOuts -->\r\n    <div class=\"mrd-fly-out__content\">\r\n      <!-- Der Standard Schlie\u00DFen-Button des FlyOuts -->\r\n      <mrd-button icon-button iconSize=\"2em\" (click)=\"close()\" class=\"mrd-fly-out__close\" *ngIf=\"!hideDefaultCloseButton\">\r\n        <svg mrd-icon width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M43.1253 20.1956C42.3728 16.4129 40.5155 12.9384 37.7883 10.2113C34.1313 6.55443 29.1715 4.5 24 4.5C18.8285 4.5 13.8687 6.55443 10.2117 10.2113C7.48449 12.9384 5.62722 16.4129 4.87475 20.1956C4.12228 23.9782 4.5084 27.899 5.98429 31.4622C7.46017 35.0253 9.95953 38.0709 13.1663 40.2136C16.3731 42.3563 20.1432 43.5 24 43.5C27.8568 43.5 31.6269 42.3563 34.8337 40.2136C38.0405 38.0709 40.5398 35.0253 42.0157 31.4622C43.4916 27.899 43.8777 23.9782 43.1253 20.1956ZM47.5388 19.3176C46.6127 14.6621 44.3268 10.3857 40.9702 7.02923C36.4694 2.52855 30.365 0 24 0C17.635 0 11.5306 2.52855 7.02976 7.02923C3.67321 10.3857 1.38735 14.6621 0.461228 19.3176C-0.464888 23.9732 0.0103406 28.7987 1.82682 33.1842C3.64329 37.5697 6.71943 41.318 10.6662 43.9552C14.613 46.5924 19.2532 48 24 48C28.7468 48 33.387 46.5924 37.3338 43.9552C41.2806 41.318 44.3567 37.5697 46.1732 33.1842C47.9897 28.7987 48.4649 23.9732 47.5388 19.3176Z\" fill=\"#949EA7\"/>\r\n          <path d=\"M27.9366 30.9242L23.9998 26.9867L20.0631 30.9242C19.867 31.1204 19.6341 31.276 19.3777 31.3821C19.1213 31.4881 18.8465 31.5425 18.5691 31.5422C18.2918 31.5424 18.0171 31.488 17.7609 31.3819C17.5047 31.2759 17.2719 31.1203 17.0758 30.9242C16.6798 30.528 16.4573 29.9907 16.4573 29.4305C16.4573 28.8704 16.6798 28.3331 17.0758 27.9369L21.0126 24.0002L17.0758 20.0634C16.8797 19.8673 16.724 19.6344 16.6179 19.3782C16.5117 19.1219 16.457 18.8472 16.457 18.5698C16.457 18.2924 16.5117 18.0177 16.6179 17.7614C16.724 17.5051 16.8797 17.2723 17.0758 17.0762C17.4719 16.6802 18.009 16.4577 18.5691 16.4577C19.1291 16.4577 19.6663 16.6802 20.0623 17.0762L23.9991 21.0129L27.9358 17.0762C28.3319 16.6802 28.869 16.4577 29.4291 16.4577C29.9891 16.4577 30.5263 16.6802 30.9223 17.0762C31.1185 17.2723 31.2741 17.5051 31.3803 17.7614C31.4865 18.0177 31.5411 18.2924 31.5411 18.5698C31.5411 18.8472 31.4865 19.1219 31.3803 19.3782C31.2741 19.6344 31.1185 19.8673 30.9223 20.0634L26.9856 24.0002L30.9223 27.9369C31.3184 28.3331 31.5408 28.8704 31.5408 29.4305C31.5408 29.9907 31.3184 30.528 30.9223 30.9242C30.7264 31.1204 30.4936 31.276 30.2373 31.3821C29.9811 31.4882 29.7064 31.5425 29.4291 31.5422C29.1519 31.5425 28.8773 31.4881 28.6212 31.382C28.3651 31.276 28.1324 31.1204 27.9366 30.9242Z\" fill=\"#949EA7\"/>\r\n        </svg>\r\n      </mrd-button>\r\n      <!-- Der Inhalt des FlyOuts (die eingebettete Komponente wird hier reingealden) -->\r\n      <div #content></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n", styles: [":host{width:100vw;height:100vh;position:absolute;inset:0}.backdrop{position:absolute;inset:0;background-color:transparent;transition:background-color var(--bd-transition-time) ease-in-out;z-index:2}.backdrop.open{display:block;background-color:var(--bd-color)}.mrd-fly-out{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%}.mrd-fly-out .mrd-fly-out__container{position:absolute;width:var(--fo-width);max-width:var(--fo-max-width);height:var(--fo-height);max-height:var(--fo-max-height);background-color:var(--fo-bg-color);box-shadow:0 0 10px #00000080;border-radius:var(--fo-border-radius);padding:var(--fo-padding);transition:top var(--fo-transition-time) ease-in-out,bottom var(--fo-transition-time) ease-in-out,left var(--fo-transition-time) ease-in-out,right var(--fo-transition-time) ease-in-out;z-index:3}.mrd-fly-out .mrd-fly-out__container .mrd-fly-out__content{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center}.mrd-fly-out .mrd-fly-out__container.topDown{padding-top:3.5em;top:-100%}.mrd-fly-out .mrd-fly-out__container.topDown.centered{padding-top:1em}.mrd-fly-out .mrd-fly-out__container.bottomUp{padding-bottom:3.5em;bottom:-100%}.mrd-fly-out .mrd-fly-out__container.bottomUp.centered{padding-bottom:1em}.mrd-fly-out .mrd-fly-out__container.leftRight{padding-left:3.5em;left:-100%}.mrd-fly-out .mrd-fly-out__container.leftRight.centered{padding-left:1em}.mrd-fly-out .mrd-fly-out__container.rightLeft{padding-right:3.5em;right:-100%}.mrd-fly-out .mrd-fly-out__container.rightLeft.centered{padding-right:1em}.mrd-fly-out .mrd-fly-out__container.open.topDown{top:-3em}.mrd-fly-out .mrd-fly-out__container.open.topDown.centered{top:calc(50% - var(--fo-container-height) / 2)}.mrd-fly-out .mrd-fly-out__container.open.bottomUp{bottom:-2em}.mrd-fly-out .mrd-fly-out__container.open.bottomUp.centered{bottom:calc(50% - var(--fo-container-height) / 2)}.mrd-fly-out .mrd-fly-out__container.open.leftRight{left:-2em}.mrd-fly-out .mrd-fly-out__container.open.leftRight.centered{left:calc(50% - var(--fo-container-width) / 2)}.mrd-fly-out .mrd-fly-out__container.open.rightLeft{right:-2em}.mrd-fly-out .mrd-fly-out__container.open.rightLeft.centered{right:calc(50% - var(--fo-container-width) / 2)}.mrd-fly-out .mrd-fly-out__close{position:absolute;top:0;right:0;z-index:10000}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.FlyOutService }]; }, { container: [{
            type: ViewChild,
            args: ['container']
        }], content: [{
            type: ViewChild,
            args: ['content', { read: ViewContainerRef, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWZseS1vdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mbHktb3V0L2NvbXBvbmVudHMvbXJkLWZseS1vdXQvbXJkLWZseS1vdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mbHktb3V0L2NvbXBvbmVudHMvbXJkLWZseS1vdXQvbXJkLWZseS1vdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFpQix1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLFlBQVksRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUosT0FBTyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7OztJQ29CakQscUNBQW9IO0lBQTdFLDBLQUFTLGVBQUEsY0FBTyxDQUFBLElBQUM7SUFDdEQsbUJBQXdHO0lBQXhHLDhCQUF3RztJQUN0RywwQkFBdTlCLGVBQUE7SUFFejlCLGlCQUFNLEVBQUE7Ozs7QURyQmQ7Ozs7Ozs7R0FPRztBQU9ILE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxVQUFVO0lBK05wQztJQUNBO0lBOU5tQixTQUFTLENBQTBCO0lBRWxFOzs7OztPQUtHO0lBQ2tFLE9BQU8sQ0FBbUI7SUFFL0Y7Ozs7T0FJRztJQUNILElBQVcsTUFBTSxDQUFDLEtBQXNCO1FBQ3RDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLHNCQUFzQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDdEUsSUFBSSxD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bnRlbnQiOlsiaW1wb3J0IHsgRmx5T3V0U2VydmljZSB9IGZyb20gJy4vLi4vLi4vY29tbW9uL3NlcnZpY2UvZmx5LW91dC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhc2VPYmplY3QsIE9ic2VydmFibGVWYWx1ZSB9IGZyb20gJ21yZC1jb3JlJztcclxuaW1wb3J0IHsgTXJkRmx5T3V0Q29uZmlnIH0gZnJvbSAnLi4vLi4vY29tbW9uL21vZGVsL21yZC1mbHktb3V0LWNvbmZpZyc7XHJcblxyXG4vKipcclxuICogRGllc2UgS29tcG9uZW50ZSBzdGVsbHQgZWluIEZseU91dCBkYXIsIGRhcyB2b24gb2JlbiBuYWNoIHVudGVuLCB2b24gdW50ZW4gbmFjaCBvYmVuLCB2b24gbGlua3MgbmFjaCByZWNodHMgb2RlciB2b24gcmVjaHRzIG5hY2ggbGlua3MgZWluZmxpZWd0LlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBjbGFzcyBNcmRGbHlPdXRDb21wb25lbnRcclxuICogQGV4dGVuZHMge0Jhc2VPYmplY3R9XHJcbiAqIEBpbXBsZW1lbnRzIHtBZnRlclZpZXdJbml0fVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtcmQtZmx5LW91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1mbHktb3V0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtZmx5LW91dC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmRGbHlPdXRDb21wb25lbnQgZXh0ZW5kcyBCYXNlT2JqZWN0IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIHB1YmxpYyBjb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAvKipcclxuICAgKiBEaWUgUmVmZXJlbnogYXVmIGRhcyBDb250ZW50LUVsZW1lbnQsIGluIGRhcyBkaWUgZWluZ2ViZXR0ZXRlIEtvbXBvbmVudGUgZ2VsYWRlbiB3aXJkLlxyXG4gICAqXHJcbiAgICogQHR5cGUge1ZpZXdDb250YWluZXJSZWZ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlfSkgcHVibGljIGNvbnRlbnQ6IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHp0IGRpZSBLb25maWd1cmF0aW9uIGRlcyBGbHlPdXRzLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXQgY29uZmlnKHZhbHVlOiBNcmRGbHlPdXRDb25maWcpIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLmZseUluRnJvbSA9IHZhbHVlLmZseUluRnJvbTtcclxuICAgICAgdGhpcy5kaXNhYmxlQ2xvc2UgPSB2YWx1ZS5kaXNhYmxlQ2xvc2VPbkJhY2tkcm9wID8/IHRoaXMuZGlzYWJsZUNsb3NlO1xyXG4gICAgICB0aGlzLmJhY2tkcm9wQ29sb3IgPSB2YWx1ZS5iYWNrZHJvcENvbG9yID8/IHRoaXMuYmFja2Ryb3BDb2xvcjtcclxuICAgICAgdGhpcy5oaWRlRGVmYXVsdENsb3NlQnV0dG9uID0gdmFsdWUuaGlkZURlZmF1bHRDbG9zZUJ1dHRvbiA/PyB0aGlzLmhpZGVEZWZhdWx0Q2xvc2VCdXR0b247XHJcbiAgICAgIHRoaXMud2lkdGggPSB2YWx1ZS53aWR0aCA/PyB0aGlzLndpZHRoO1xyXG4gICAgICB0aGlzLm1heFdpZHRoID0gdmFsdWUubWF4V2lkdGggPz8gdGhpcy5tYXhXaWR0aDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSB2YWx1ZS5oZWlnaHQgPz8gdGhpcy5oZWlnaHQ7XHJcbiAgICAgIHRoaXMubWF4SGVpZ2h0ID0gdmFsdWUubWF4SGVpZ2h0ID8/IHRoaXMubWF4SGVpZ2h0O1xyXG4gICAgICB0aGlzLnBhZGRpbmcgPSB2YWx1ZS5wYWRkaW5nID8/IHRoaXMucGFkZGluZztcclxuICAgICAgdGhpcy5ib3JkZXJSYWRpdXMgPSB2YWx1ZS5ib3JkZXJSYWRpdXMgPz8gdGhpcy5ib3JkZXJSYWRpdXM7XHJcbiAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gdmFsdWUuYmFja2dyb3VuZENvbG9yID8/IHRoaXMuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICB0aGlzLnRyYW5zaXRpb25UaW1lID0gdmFsdWUudHJhbnNpdGlvblRpbWUgPz8gdGhpcy50cmFuc2l0aW9uVGltZTtcclxuICAgICAgdGhpcy5jZW50ZXJlZCA9IHZhbHVlLmNlbnRlcmVkID8/IHRoaXMuY2VudGVyZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXR6dCBkaWUgUmljaHR1bmcsIGF1cyBkZXIgZGFzIEZseU91dCBlaW5mbGllZ3QuXHJcbiAgICogRGVmYXVsdDogJ2JvdHRvbSdcclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgc2V0IGZseUluRnJvbSh2YWx1ZSA6ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnKSB7XHJcbiAgICB0aGlzLnRvcERvd24gPSB0aGlzLmJvdHRvbVVwID0gdGhpcy5sZWZ0UmlnaHQgPSB0aGlzLnJpZ2h0TGVmdCA9IGZhbHNlO1xyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICBjYXNlICd0b3AnOiB0aGlzLnRvcERvd24gPSB0cnVlOyBicmVhaztcclxuICAgICAgY2FzZSAnYm90dG9tJzogdGhpcy5ib3R0b21VcCA9IHRydWU7IGJyZWFrO1xyXG4gICAgICBjYXNlICdsZWZ0JzogdGhpcy5sZWZ0UmlnaHQgPSB0cnVlOyBicmVhaztcclxuICAgICAgY2FzZSAncmlnaHQnOiB0aGlzLnJpZ2h0TGVmdCA9IHRydWU7IGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OiB0aGlzLmJvdHRvbVVwID0gdHJ1ZTsgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkZXIgU3RhbmRhcmQtU2NobGllw59lbi1CdXR0b24gbmljaHQgYW5nZXplaWd0IHdpcmQuXHJcbiAgICogRGVmYXVsdDogZmFsc2VcclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgaGlkZURlZmF1bHRDbG9zZUJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRhcyBGbHlPdXQgYmVpbSBLbGljayBhdWYgZGVuIEhpbnRlcmdydW5kIG5pY2h0IGdlc2NobG9zc2VuIHdpcmQuXHJcbiAgICogRGVmYXVsdDogZmFsc2U7XHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIGRpc2FibGVDbG9zZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRhcyBGbHlPdXQgYmVpbSBEcsO8Y2tlbiBkZXIgRXNjYXBlLVRhc3RlIGdlc2NobG9zc2VuIHdpcmQuXHJcbiAgICogRGVmYXVsdDogdHJ1ZTtcclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgY2xvc2VPbkVzYzogYm9vbGVhbiA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogRGllIEZhcmJlIGRlcyBIaW50ZXJncnVuZHMuXHJcbiAgICogRGVmYXVsdDogJ3JnYmEoMCwgMCwgMCwgMC41KSdcclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBiYWNrZHJvcENvbG9yOiBzdHJpbmcgPSAncmdiYSgwLCAwLCAwLCAwLjUpJztcclxuICAvKipcclxuICAgKiBEaWUgQnJlaXRlIGRlcyBGbHlPdXRzLlxyXG4gICAqIERlZmF1bHQ6ICdmaXQtY29udGVudCdcclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyB3aWR0aDogc3RyaW5nID0gJ2ZpdC1jb250ZW50JztcclxuICAvKipcclxuICAgKiBEaWUgbWF4aW1hbGUgQnJlaXRlIGRlcyBGbHlPdXRzLlxyXG4gICAqIERlZmF1bHQ6ICc5NXZ3J1xyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIG1heFdpZHRoOiBzdHJpbmcgPSAnOTV2dyc7XHJcbiAgLyoqXHJcbiAgICogRGllIEjDtmhlIGRlcyBGbHlPdXRzLlxyXG4gICAqIERlZmF1bHQ6ICdmaXQtY29udGVudCdcclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoZWlnaHQ6IHN0cmluZyA9ICdmaXQtY29udGVudCc7XHJcbiAgLyoqXHJcbiAgICogRGllIG1heGltYWxlIEjDtmhlIGRlcyBGbHlPdXRzLlxyXG4gICAqIERlZmF1bHQ6ICc5NXZoJ1xyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIG1heEhlaWdodDogc3RyaW5nID0gJzk1dmgnO1xyXG4gIC8qKlxyXG4gICAqIERhcyBQYWRkaW5nIGRlcyBGbHlPdXRzIHp1bSBSYW5kLlxyXG4gICAqIERlZmF1bHQ6ICcxZW0nXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgcGFkZGluZzogc3RyaW5nID0gJzFlbSc7XHJcbiAgLyoqXHJcbiAgICogRGVyIFJhZGl1cyBkZXIgRWNrZW4gZGVzIEZseU91dHMuXHJcbiAgICogRGVmYXVsdDogJzIwcHgnXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgYm9yZGVyUmFkaXVzOiBzdHJpbmcgPSAnMjBweCc7XHJcbiAgLyoqXHJcbiAgICogRGllIEhpbnRlcmdydW5kZmFyYmUgZGVzIEZseU91dHMuXHJcbiAgICogRGVmYXVsdDogJyNmZmYnXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSAnI2ZmZic7XHJcbiAgLyoqXHJcbiAgICogRGllIFplaXQsIGRpZSBkYXMgRmx5T3V0IGJlbsO2dGlndCwgdW0genUgw7ZmZm5lbiBvZGVyIHp1IHNjaGxpZcOfZW4uXHJcbiAgICogRGVmYXVsdDogJzUwMG1zJ1xyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIHRyYW5zaXRpb25UaW1lOiBzdHJpbmcgPSAnNTAwbXMnO1xyXG5cclxuICAvKipcclxuICAgKiBEYXMgdm9tIEZseU91dCBhdXNnZWzDtnN0ZSBFdmVudCwgd2VubiBkYXMgRmx5T3V0IGdlw7ZmZm5ldCB3dXJkZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8dm9pZD59XHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZnRlck9wZW5lZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIC8qKlxyXG4gICAqIERhcyB2b20gRmx5T3V0IGF1c2dlbMO2c3RlIEV2ZW50LCB3ZW5uIGRhcyBGbHlPdXQgZ2VzY2hsb3NzZW4gd2lyZC5cclxuICAgKiBHaWJ0IGVpbmVuIFdlcnQgenVyw7xjaywgd2VubiDDvGJlciBkaWUgTXJkRmx5T3V0Q2xvc2VEaXJlY3RpdmUgZWluIFdlcnQgw7xiZXJnZWJlbiB3dXJkZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8YW55Pn1cclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLyoqXHJcbiAgICogRGFzIHZvbSBGbHlPdXQgYXVzZ2Vsw7ZzdGUgRXZlbnQsIHdlbm4gZGFzIEZseU91dCBnZXNjaGxvc3NlbiB3dXJkZS5cclxuICAgKiBHaWJ0IGVpbmVuIFdlcnQgenVyw7xjaywgd2VubiDDvGJlciBkaWUgTXJkRmx5T3V0Q2xvc2VEaXJlY3RpdmUgZWluIFdlcnQgw7xiZXJnZWJlbiB3dXJkZS5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8YW55Pn1cclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIGFmdGVyQ2xvc2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkYXMgRmx5T3V0IHZvbiBvYmVuIG5hY2ggdW50ZW4gZWluZmxpZWd0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyB0b3BEb3duOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGFzIEZseU91dCB2b24gdW50ZW4gbmFjaCBvYmVuIGVpbmZsaWVndC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgYm90dG9tVXA6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRhcyBGbHlPdXQgdm9uIGxpbmtzIG5hY2ggcmVjaHRzIGVpbmZsaWVndC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgbGVmdFJpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGFzIEZseU91dCB2b24gcmVjaHRzIG5hY2ggbGlua3MgZWluZmxpZWd0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyByaWdodExlZnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGNlbnRlcmVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIERpZSBJRCBkZXMgT3ZlcmxheXMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgb3ZlcmxheUlkOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlciBPYnNlcnZhYmxlVmFsdWUsIGRlciBkZW4gWnVzdGFuZCBkZXMgRmx5T3V0cyBzdGV1ZXJ0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge09ic2VydmFibGVWYWx1ZTxib29sZWFuPn1cclxuICAgKiBAbWVtYmVyb2YgTXJkRmx5T3V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRlVG9nZ2xlOiBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj4gPSBuZXcgT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgcHJpdmF0ZSByZXNpemVPYnNlcnZlcjogUmVzaXplT2JzZXJ2ZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcm90ZWN0ZWQgZmx5T3V0U2VydmljZTogRmx5T3V0U2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpc2llcnQgZGFzIEVpbmZhaHJlbiBkZXMgRmx5T3V0LlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE1yZEZseU91dENvbXBvbmVudFxyXG4gICAqL1xyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ29udGFpbmVyU2l6ZSgpO1xyXG4gICAgaWYgKHR5cGVvZiBSZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB0aGlzLnVwZGF0ZUNvbnRhaW5lclNpemUodGhpcy5zdGF0ZVRvZ2dsZS52YWx1ZSkpO1xyXG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zdGF0ZVRvZ2dsZS52YWx1ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuYWZ0ZXJPcGVuZWQuZW1pdCgpO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9LCAxMDApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XHJcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVDb250YWluZXJTaXplKHdpdGhvdXRUcmFuc2l0aW9uOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGxldCBlbGVtZW50ID0gdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudDtcclxuICAgIGlmICh3aXRob3V0VHJhbnNpdGlvbikge1xyXG4gICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZvLWNvbnRhaW5lci1oZWlnaHQnLCBlbGVtZW50Lm9mZnNldEhlaWdodCArICdweCcpO1xyXG4gICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mby1jb250YWluZXItd2lkdGgnLCBlbGVtZW50Lm9mZnNldFdpZHRoICsgJ3B4Jyk7XHJcbiAgICBpZiAod2l0aG91dFRyYW5zaXRpb24pIHtcclxuICAgICAgdm9pZCBlbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXaXJkIGF1ZmdlcnVmZW4sIHdlbm4gYXVmIGRlbiBIaW50ZXJncnVuZCBnZWtsaWNrdCB3dXJkZS5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgYmFja2Ryb3BDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVDbG9zZSkge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTY2hsaWXDn3QgZGFzIEZseU91dC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Kn0gW3JldHVyblZhbHVlXVxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgY2xvc2UocmV0dXJuVmFsdWU/OiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25DbG9zZS5lbWl0KHJldHVyblZhbHVlKTtcclxuICAgIHRoaXMuc3RhdGVUb2dnbGUudmFsdWUgPSBmYWxzZTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmFmdGVyQ2xvc2VkLmVtaXQocmV0dXJuVmFsdWUpO1xyXG4gICAgICB0aGlzLmZseU91dFNlcnZpY2UuY2xvc2UodGhpcy5vdmVybGF5SWQpO1xyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdpcmQgYXVmZ2VydWZlbiwgd2VubiBkYXMgRmx5T3V0IMO8YmVyIGVpbmUgTXJkRmx5T3V0Q2xvc2VEaXJlY3RpdmUgZ2VzY2hsb3NzZW4gd2lyZC5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBNcmRGbHlPdXRDb21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgY2xvc2VEaXJlY3RpdmVDbGlja2VkKHJldHVyblZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xvc2UocmV0dXJuVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBjb250YWluZXJIZWlnaHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcj8ubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBjb250YWluZXJXaWR0aCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyPy5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoICsgJ3B4JztcclxuICB9XHJcbn1cclxuIiwiPCEtLSBEZXIgSGludGVyZ3J1bmQgZGVzIEZseU91dHMgLS0+XHJcbjxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiIFtuZ0NsYXNzXT1cInsnb3Blbic6IHN0YXRlVG9nZ2xlLnZhbHVlfVwiIChjbGljayk9XCJiYWNrZHJvcENsaWNrZWQoKVwiXHJcbiAgW3N0eWxlLi0tYmQtY29sb3JdPVwiYmFja2Ryb3BDb2xvclwiXHJcbiAgW3N0eWxlLi0tYmQtdHJhbnNpdGlvbi10aW1lXT1cInRyYW5zaXRpb25UaW1lXCJcclxuICA+PC9kaXY+XHJcbjwhLS0gRGllIMOkdcOfZXJzdGUgS29tcG9uZW50ZSBkZXMgRmx5T3V0cywgZGFzIGRlbiBDb250YWluZXIgemVudHJpZXJ0IC0tPlxyXG48ZGl2IGNsYXNzPVwibXJkLWZseS1vdXRcIlxyXG4gIFtzdHlsZS4tLWZvLXdpZHRoXT1cIndpZHRoXCJcclxuICBbc3R5bGUuLS1mby1tYXgtd2lkdGhdPVwibWF4V2lkdGhcIlxyXG4gIFtzdHlsZS4tLWZvLWhlaWdodF09XCJoZWlnaHRcIlxyXG4gIFtzdHlsZS4tLWZvLW1heC1oZWlnaHRdPVwibWF4SGVpZ2h0XCJcclxuICBbc3R5bGUuLS1mby1iZy1jb2xvcl09XCJiYWNrZ3JvdW5kQ29sb3JcIlxyXG4gIFtzdHlsZS4tLWZvLXBhZGRpbmddPVwicGFkZGluZ1wiXHJcbiAgW3N0eWxlLi0tZm8tYm9yZGVyLXJhZGl1c109XCJib3JkZXJSYWRpdXNcIlxyXG4gIFtzdHlsZS4tLWZvLXRyYW5zaXRpb24tdGltZV09XCJ0cmFuc2l0aW9uVGltZVwiXHJcbiAgPlxyXG4gIDwhLS0gRGVyIENvbnRhaW5lciwgZGVyIGRhcyBHcnVuZGxheW91dCBkZXMgRmx5T3V0cyBiZXJlaXRzdGVsbHQgLS0+XHJcbiAgPGRpdiAjY29udGFpbmVyIGNsYXNzPVwibXJkLWZseS1vdXRfX2NvbnRhaW5lclwiIFtuZ0NsYXNzXT1cInsnb3Blbic6IHN0YXRlVG9nZ2xlLnZhbHVlLCAnY2VudGVyZWQnOiBjZW50ZXJlZCxcclxuICAgICd0b3BEb3duJzogdG9wRG93biwgJ2JvdHRvbVVwJzogYm90dG9tVXAsICdsZWZ0UmlnaHQnOiBsZWZ0UmlnaHQsICdyaWdodExlZnQnOiByaWdodExlZnR9XCI+XHJcbiAgICA8IS0tIERlciBJbmhhbHQgZGVzIEZseU91dHMgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXJkLWZseS1vdXRfX2NvbnRlbnRcIj5cclxuICAgICAgPCEtLSBEZXIgU3RhbmRhcmQgU2NobGllw59lbi1CdXR0b24gZGVzIEZseU91dHMgLS0+XHJcbiAgICAgIDxtcmQtYnV0dG9uIGljb24tYnV0dG9uIGljb25TaXplPVwiMmVtXCIgKGNsaWNrKT1cImNsb3NlKClcIiBjbGFzcz1cIm1yZC1mbHktb3V0X19jbG9zZVwiICpuZ0lmPVwiIWhpZGVEZWZhdWx0Q2xvc2VCdXR0b25cIj5cclxuICAgICAgICA8c3ZnIG1yZC1pY29uIHdpZHRoPVwiNDhcIiBoZWlnaHQ9XCI0OFwiIHZpZXdCb3g9XCIwIDAgNDggNDhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk00My4xMjUzIDIwLjE5NTZDNDIuMzcyOCAxNi40MTI5IDQwLjUxNTUgMTIuOTM4NCAzNy43ODgzIDEwLjIxMTNDMzQuMTMxMyA2LjU1NDQzIDI5LjE3MTUgNC41IDI0IDQuNUMxOC44Mjg1IDQuNSAxMy44Njg3IDYuNTU0NDMgMTAuMjExNyAxMC4yMTEzQzcuNDg0NDkgMTIuOTM4NCA1LjYyNzIyIDE2LjQxMjkgNC44NzQ3NSAyMC4xOTU2QzQuMTIyMjggMjMuOTc4MiA0LjUwODQgMjcuODk5IDUuOTg0MjkgMzEuNDYyMkM3LjQ2MDE3IDM1LjAyNTMgOS45NTk1MyAzOC4wNzA5IDEzLjE2NjMgNDAuMjEzNkMxNi4zNzMxIDQyLjM1NjMgMjAuMTQzMiA0My41IDI0IDQzLjVDMjcuODU2OCA0My41IDMxLjYyNjkgNDIuMzU2MyAzNC44MzM3IDQwLjIxMzZDMzguMDQwNSAzOC4wNzA5IDQwLjUzOTggMzUuMDI1MyA0Mi4wMTU3IDMxLjQ2MjJDNDMuNDkxNiAyNy44OTkgNDMuODc3NyAyMy45NzgyIDQzLjEyNTMgMjAuMTk1NlpNNDcuNTM4OCAxOS4zMTc2QzQ2LjYxMjcgMTQuNjYyMSA0NC4zMjY4IDEwLjM4NTcgNDAuOTcwMiA3LjAyOTIzQzM2LjQ2OTQgMi41Mjg1NSAzMC4zNjUgMCAyNCAwQzE3LjYzNSAwIDExLjUzMDYgMi41Mjg1NSA3LjAyOTc2IDcuMDI5MjNDMy42NzMyMSAxMC4zODU3IDEuMzg3MzUgMTQuNjYyMSAwLjQ2MTIyOCAxOS4zMTc2Qy0wLjQ2NDg4OCAyMy45NzMyIDAuMDEwMzQwNiAyOC43OTg3IDEuODI2ODIgMzMuMTg0MkMzLjY0MzI5IDM3LjU2OTcgNi43MTk0MyA0MS4zMTggMTAuNjY2MiA0My45NTUyQzE0LjYxMyA0Ni41OTI0IDE5LjI1MzIgNDggMjQgNDhDMjguNzQ2OCA0OCAzMy4zODcgNDYuNTkyNCAzNy4zMzM4IDQzLjk1NTJDNDEuMjgwNiA0MS4zMTggNDQuMzU2NyAzNy41Njk3IDQ2LjE3MzIgMzMuMTg0MkM0Ny45ODk3IDI4Ljc5ODcgNDguNDY0OSAyMy45NzMyIDQ3LjUzODggMTkuMzE3NlpcIiBmaWxsPVwiIzk0OUVBN1wiLz5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNMjcuOTM2NiAzMC45MjQyTDIzLjk5OTggMjYuOTg2N0wyMC4wNjMxIDMwLjkyNDJDMTkuODY3IDMxLjEyMDQgMTkuNjM0MSAzMS4yNzYgMTkuMzc3NyAzMS4zODIxQzE5LjEyMTMgMzEuNDg4MSAxOC44NDY1IDMxLjU0MjUgMTguNTY5MSAzMS41NDIyQzE4LjI5MTggMzEuNTQyNCAxOC4wMTcxIDMxLjQ4OCAxNy43NjA5IDMxLjM4MTlDMTcuNTA0NyAzMS4yNzU5IDE3LjI3MTkgMzEuMTIwMyAxNy4wNzU4IDMwLjkyNDJDMTYuNjc5OCAzMC41MjggMTYuNDU3MyAyOS45OTA3IDE2LjQ1NzMgMjkuNDMwNUMxNi40NTczIDI4Ljg3MDQgMTYuNjc5OCAyOC4zMzMxIDE3LjA3NTggMjcuOTM2OUwyMS4wMTI2IDI0LjAwMDJMMTcuMDc1OCAyMC4wNjM0QzE2Ljg3OTcgMTkuODY3MyAxNi43MjQgMTkuNjM0NCAxNi42MTc5IDE5LjM3ODJDMTYuNTExNyAxOS4xMjE5IDE2LjQ1NyAxOC44NDcyIDE2LjQ1NyAxOC41Njk4QzE2LjQ1NyAxOC4yOTI0IDE2LjUxMTcgMTguMDE3NyAxNi42MTc5IDE3Ljc2MTRDMTYuNzI0IDE3LjUwNTEgMTYuODc5NyAxNy4yNzIzIDE3LjA3NTggMTcuMDc2MkMxNy40NzE5IDE2LjY4MDIgMTguMDA5IDE2LjQ1NzcgMTguNTY5MSAxNi40NTc3QzE5LjEyOTEgMTYuNDU3NyAxOS42NjYzIDE2LjY4MDIgMjAuMDYyMyAxNy4wNzYyTDIzLjk5OTEgMjEuMDEyOUwyNy45MzU4IDE3LjA3NjJDMjguMzMxOSAxNi42ODAyIDI4Ljg2OSAxNi40NTc3IDI5LjQyOTEgMTYuNDU3N0MyOS45ODkxIDE2LjQ1NzcgMzAuNTI2MyAxNi42ODAyIDMwLjkyMjMgMTcuMDc2MkMzMS4xMTg1IDE3LjI3MjMgMzEuMjc0MSAxNy41MDUxIDMxLjM4MDMgMTcuNzYxNEMzMS40ODY1IDE4LjAxNzcgMzEuNTQxMSAxOC4yOTI0IDMxLjU0MTEgMTguNTY5OEMzMS41NDExIDE4Ljg0NzIgMzEuNDg2NSAxOS4xMjE5IDMxLjM4MDMgMTkuMzc4MkMzMS4yNzQxIDE5LjYzNDQgMzEuMTE4NSAxOS44NjczIDMwLjkyMjMgMjAuMDYzNEwyNi45ODU2IDI0LjAwMDJMMzAuOTIyMyAyNy45MzY5QzMxLjMxODQgMjguMzMzMSAzMS41NDA4IDI4Ljg3MDQgMzEuNTQwOCAyOS40MzA1QzMxLjU0MDggMjkuOTkwNyAzMS4zMTg0IDMwLjUyOCAzMC45MjIzIDMwLjkyNDJDMzAuNzI2NCAzMS4xMjA0IDMwLjQ5MzYgMzEuMjc2IDMwLjIzNzMgMzEuMzgyMUMyOS45ODExIDMxLjQ4ODIgMjkuNzA2NCAzMS41NDI1IDI5LjQyOTEgMzEuNTQyMkMyOS4xNTE5IDMxLjU0MjUgMjguODc3MyAzMS40ODgxIDI4LjYyMTIgMzEuMzgyQzI4LjM2NTEgMzEuMjc2IDI4LjEzMjQgMzEuMTIwNCAyNy45MzY2IDMwLjkyNDJaXCIgZmlsbD1cIiM5NDlFQTdcIi8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvbXJkLWJ1dHRvbj5cclxuICAgICAgPCEtLSBEZXIgSW5oYWx0IGRlcyBGbHlPdXRzIChkaWUgZWluZ2ViZXR0ZXRlIEtvbXBvbmVudGUgd2lyZCBoaWVyIHJlaW5nZWFsZGVuKSAtLT5cclxuICAgICAgPGRpdiAjY29udGVudD48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiJdfQ==