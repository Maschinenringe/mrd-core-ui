import { booleanAttribute, Component, Input, numberAttribute } from '@angular/core';
import { colorAttribute } from './../../../../common/transforms/color-transform';
import { sizeAttribute } from './../../../../common/transforms/size-transform';
import { timeAttribute } from './../../../../common/transforms/time-transform';
import { ConfigUtil } from './../../../../common/util/config.util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a0, a1, a2) { return { "selected": a0, "main": a1, "back": a2 }; };
const _c1 = function (a0, a1) { return { "selected": a0, "over": a1 }; };
/**
 * Komponente für die Darstellung von Geo-Icons (Schlagzeichnungen).
 *
 * @class MrdGeoIconComponent
 * @implements {AfterViewInit}
 */
export class MrdGeoIconComponent {
    static _config = ConfigUtil.getConfig().geoIcon;
    /**
     * Breite des Icons.
     *
     * Wird eine Zahl übergeben, wird diese als Pixelwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdGeoIconComponent
     */
    width = MrdGeoIconComponent._config.width;
    /**
     * Höhe des Icons.
     *
     * Wird eine Zahl übergeben, wird diese als Pixelwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdGeoIconComponent
     */
    height = MrdGeoIconComponent._config.height;
    /**
     * Margin um das Icon.
     *
     * Wird eine Zahl übergeben, wird diese als Pixelwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdGeoIconComponent
     */
    margin = MrdGeoIconComponent._config.margin;
    /**
     * Übergangszeit für Farbwechsel (Selektiert <-> nicht selektiert).
     *
     * Wird eine Zahl übergeben, wird diese als Sekundenwert interpretiert.
     *
     * @type {string | number}
     * @memberof MrdGeoIconComponent
     */
    transitionTime = MrdGeoIconComponent._config.transitionTime;
    /**
     * Hauptfarbe des Icons.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    mainColor = MrdGeoIconComponent._config.mainColor;
    /**
     * Hauptfarbe des Icons, wenn es selektiert ist.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    mainSelectedColor = MrdGeoIconComponent._config.mainSelectedColor;
    /**
     * Deckkraft der Hauptfarbe des Icons.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    mainOpacity = MrdGeoIconComponent._config.mainOpacity;
    /**
     * Deckkraft der Hauptfarbe des Icons, wenn es selektiert ist.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    mainSelectedOpacity = MrdGeoIconComponent._config.mainSelectedOpacity;
    /**
     * Farbe der 2. Ebene des Icons.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    overlayColor = MrdGeoIconComponent._config.overlayColor;
    /**
     * Farbe der 2. Ebene des Icons, wenn es selektiert ist.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    overlaySelectedColor = MrdGeoIconComponent._config.overlaySelectedColor;
    /**
     * Deckkraft der 2. Ebene des Icons.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    overlayOpacity = MrdGeoIconComponent._config.overlayOpacity;
    /**
     * Deckkraft der 2. Ebene des Icons, wenn es selektiert ist.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    overlaySelectedOpacity = MrdGeoIconComponent._config.overlaySelectedOpacity;
    /**
     * Hintergrundfarbe des Icons, wenn es eine zweite Ebene gibt.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    backColor = MrdGeoIconComponent._config.backColor;
    /**
     * Hintergrundfarbe des Icons, wenn es eine zweite Ebene gibt und diese selektiert ist.
     *
     * Es können Hex-, RGB- oder RGBA-Werte übergeben werden.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    backSelectedColor = MrdGeoIconComponent._config.backSelectedColor;
    /**
     * Deckkraft des Hintergrunds des Icons.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    backOpacity = MrdGeoIconComponent._config.backOpacity;
    /**
     * Deckkraft des Hintergrunds des Icons, wenn es selektiert ist.
     *
     * Werte zwischen 0 und 1 sind möglich.
     *
     * @type {number}
     * @memberof MrdGeoIconComponent
     */
    backSelectedOpacity = MrdGeoIconComponent._config.backSelectedOpacity;
    /**
     * Gibt an, ob das Icon selektiert ist.
     *
     * @type {boolean}
     * @memberof MrdGeoIconComponent
     */
    isSelected = false;
    /**
     * Daten für die Basis des Icons.
     *
     * @type {any[]}
     * @memberof MrdGeoIconComponent
     */
    set baseData(value) {
        this._baseData = value;
        let path = this.getPathString(value);
        this.base = path.ps;
        this.viewBox = path.vbs;
    }
    get baseData() {
        return this._baseData;
    }
    _baseData;
    /**
     * Daten für die 2. Ebene des Icons.
     *
     * @type {any[]}
     * @memberof MrdGeoIconComponent
     */
    set overlayData(value) {
        this._baseData = value;
        let p = this.getPathString(value);
        this.overlay = p.ps;
        if (!value) {
            this.hasOverlay = false;
        }
        else {
            this.hasOverlay = true;
        }
    }
    get overlayData() {
        return this._baseData;
    }
    /**
     * Gibt an, ob das Icon eine 2. Ebene hat.
     *
     * @type {boolean}
     * @memberof MrdGeoIconComponent
     */
    hasOverlay;
    /**
     * Beinhaltet die Daten der ersten Ebene des Icons.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    base;
    /**
     * Beinhaltet die Daten der zweiten Ebene des Icons.
     *
     * @type {string}
     * @memberof MrdGeoIconComponent
     */
    overlay;
    viewBox;
    getPathString(d) {
        // Wenn der zweite Level ein Array ist Handelt es sich um daten mit inselflaechen.
        // Dann wird die erste Flaeche verwendet ohne inseln
        if (Array.isArray(d) && Array.isArray(d[0]) && Array.isArray(d[0][0])) {
            d = d[0];
        }
        // Ohne Punkte entstuende sonst der ungueltige SVG-Pfad "undefinedz"
        if (!d || d.length === 0) {
            return { ps: "", vb: [0, 0, 0, 0], vbs: "0 0 1 1" };
        }
        var vb = [0, 0, 0, 0];
        var ps;
        for (let i = 0; i < d.length; i++) {
            if (!ps) {
                ps = "M";
            }
            else {
                ps += "L";
            }
            let dd2 = this.mercEncode(d[i][1], d[i][0], 100, 100);
            let d1 = dd2[0] * 30000;
            let d2 = dd2[1] * 30000;
            if (vb[0] == 0 || vb[0] > d1) {
                vb[0] = d1;
            }
            if (vb[1] == 0 || vb[1] > d2) {
                vb[1] = d2;
            }
            if (vb[2] == 0 || vb[2] < d1) {
                vb[2] = d1;
            }
            if (vb[3] == 0 || vb[3] < d2) {
                vb[3] = d2;
            }
            ps += d1 + " " + d2;
        }
        ps += "z";
        return { ps: ps, vb: vb, vbs: vb[0] + " " + vb[1] + " " + (vb[2] - vb[0]) + " " + (vb[3] - vb[1]) };
    }
    mercEncode(lat, lng, w, h) {
        // get x
        var x = (lng + 180) * (w / 360);
        // convert from degrees to radians
        var latRad = lat * Math.PI / 180;
        // get y value
        var mercN = Math.log(Math.tan((Math.PI / 4) + (latRad / 2)));
        var y = (h / 2) - (w * mercN / (2 * Math.PI));
        return [x, y];
    }
    /** @nocollapse */ static ɵfac = function MrdGeoIconComponent_Factory(t) { return new (t || MrdGeoIconComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdGeoIconComponent, selectors: [["mrd-geo-icon"]], inputs: { width: ["width", "width", (value) => sizeAttribute(value, MrdGeoIconComponent._config.width)], height: ["height", "height", (value) => sizeAttribute(value, MrdGeoIconComponent._config.height)], margin: ["margin", "margin", (value) => sizeAttribute(value, MrdGeoIconComponent._config.margin)], transitionTime: ["transitionTime", "transitionTime", (value) => timeAttribute(value, MrdGeoIconComponent._config.transitionTime)], mainColor: ["mainColor", "mainColor", (value) => colorAttribute(value, MrdGeoIconComponent._config.mainColor)], mainSelectedColor: ["mainSelectedColor", "mainSelectedColor", (value) => colorAttribute(value, MrdGeoIconComponent._config.mainSelectedColor)], mainOpacity: ["mainOpacity", "mainOpacity", (value) => numberAttribute(value, MrdGeoIconComponent._config.mainOpacity)], mainSelectedOpacity: ["mainSelectedOpacity", "mainSelectedOpacity", (value) => numberAttribute(value, MrdGeoIconComponent._config.mainSelectedOpacity)], overlayColor: ["overlayColor", "overlayColor", (value) => colorAttribute(value, MrdGeoIconComponent._config.overlayColor)], overlaySelectedColor: ["overlaySelectedColor", "overlaySelectedColor", (value) => colorAttribute(value, MrdGeoIconComponent._config.overlaySelectedColor)], overlayOpacity: ["overlayOpacity", "overlayOpacity", (value) => numberAttribute(value, MrdGeoIconComponent._config.overlayOpacity)], overlaySelectedOpacity: ["overlaySelectedOpacity", "overlaySelectedOpacity", (value) => numberAttribute(value, MrdGeoIconComponent._config.overlaySelectedOpacity)], backColor: ["backColor", "backColor", (value) => colorAttribute(value, MrdGeoIconComponent._config.backColor)], backSelectedColor: ["backSelectedColor", "backSelectedColor", (value) => colorAttribute(value, MrdGeoIconComponent._config.backSelectedColor)], backOpacity: ["backOpacity", "backOpacity", (value) => numberAttribute(value, MrdGeoIconComponent._config.backOpacity)], backSelectedOpacity: ["backSelectedOpacity", "backSelectedOpacity", (value) => numberAttribute(value, MrdGeoIconComponent._config.backSelectedOpacity)], isSelected: ["isSelected", "isSelected", booleanAttribute], baseData: "baseData", overlayData: "overlayData" }, features: [i0.ɵɵInputTransformsFeature], decls: 4, vars: 44, consts: [[1, "geoicon"], [3, "ngClass"]], template: function MrdGeoIconComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(0, "svg", 0)(1, "g");
            i0.ɵɵelement(2, "path", 1)(3, "path", 1);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵstyleProp("--width", ctx.width)("--height", ctx.height)("--margin", ctx.margin)("--transitionTime", ctx.transitionTime)("--mainColor", ctx.mainColor)("--mainSelectedColor", ctx.mainSelectedColor)("--backColor", ctx.backColor)("--backSelectedColor", ctx.backSelectedColor)("--overColor", ctx.overlayColor)("--overSelectedColor", ctx.overlaySelectedColor)("--mainOpacity", ctx.mainOpacity)("--mainSelectedOpacity", ctx.mainSelectedOpacity)("--backOpacity", ctx.backOpacity)("--backSelectedOpacity", ctx.backSelectedOpacity)("--overOpacity", ctx.overlayOpacity)("--overSelectedOpacity", ctx.overlaySelectedOpacity);
            i0.ɵɵattribute("viewBox", ctx.viewBox);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(37, _c0, ctx.isSelected, !ctx.hasOverlay, ctx.hasOverlay));
            i0.ɵɵattribute("d", ctx.base);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(41, _c1, ctx.isSelected, ctx.hasOverlay));
            i0.ɵɵattribute("d", ctx.overlay);
        } }, dependencies: [i1.NgClass], styles: [".geoicon[_ngcontent-%COMP%]{width:var(--width);height:var(--height);margin:var(--margin)}.geoicon[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{opacity:var(--mainOpacity);fill:var(--mainColor);transition:fill var(--transitionTime),opacity var(--transitionTime)}.geoicon[_ngcontent-%COMP%]   .main.selected[_ngcontent-%COMP%]{opacity:var(--mainSelectedOpacity);fill:var(--mainSelectedColor)}.geoicon[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{opacity:var(--backOpacity);fill:var(--backColor);transition:fill var(--transitionTime)}.geoicon[_ngcontent-%COMP%]   .back.selected[_ngcontent-%COMP%]{opacity:var(--backSelectedOpacity);fill:var(--backSelectedColor)}.geoicon[_ngcontent-%COMP%]   .over[_ngcontent-%COMP%]{opacity:var(--overOpacity);fill:var(--overColor);transition:fill var(--transitionTime)}.geoicon[_ngcontent-%COMP%]   .over.selected[_ngcontent-%COMP%]{opacity:var(--overSelectedOpacity);fill:var(--overSelectedColor)}"] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdGeoIconComponent, [{
        type: Component,
        args: [{ selector: 'mrd-geo-icon', template: "<svg class=\"geoicon\" [attr.viewBox]=\"viewBox\"\r\n  [style.--width]=\"width\"\r\n  [style.--height]=\"height\"\r\n  [style.--margin]=\"margin\"\r\n  [style.--transitionTime]=\"transitionTime\"\r\n  [style.--mainColor]=\"mainColor\"\r\n  [style.--mainSelectedColor]=\"mainSelectedColor\"\r\n  [style.--backColor]=\"backColor\"\r\n  [style.--backSelectedColor]=\"backSelectedColor\"\r\n  [style.--overColor]=\"overlayColor\"\r\n  [style.--overSelectedColor]=\"overlaySelectedColor\"\r\n  [style.--mainOpacity]=\"mainOpacity\"\r\n  [style.--mainSelectedOpacity]=\"mainSelectedOpacity\"\r\n  [style.--backOpacity]=\"backOpacity\"\r\n  [style.--backSelectedOpacity]=\"backSelectedOpacity\"\r\n  [style.--overOpacity]=\"overlayOpacity\"\r\n  [style.--overSelectedOpacity]=\"overlaySelectedOpacity\"\r\n  >\r\n  <g>\r\n    <path [attr.d]=\"base\" [ngClass]=\"{'selected': isSelected, 'main': !hasOverlay, 'back':hasOverlay}\" ></path>\r\n    <path [attr.d]=\"overlay\" [ngClass]=\"{'selected': isSelected, 'over': hasOverlay}\"></path>\r\n  </g>\r\n</svg>\r\n", styles: [".geoicon{width:var(--width);height:var(--height);margin:var(--margin)}.geoicon .main{opacity:var(--mainOpacity);fill:var(--mainColor);transition:fill var(--transitionTime),opacity var(--transitionTime)}.geoicon .main.selected{opacity:var(--mainSelectedOpacity);fill:var(--mainSelectedColor)}.geoicon .back{opacity:var(--backOpacity);fill:var(--backColor);transition:fill var(--transitionTime)}.geoicon .back.selected{opacity:var(--backSelectedOpacity);fill:var(--backSelectedColor)}.geoicon .over{opacity:var(--overOpacity);fill:var(--overColor);transition:fill var(--transitionTime)}.geoicon .over.selected{opacity:var(--overSelectedOpacity);fill:var(--overSelectedColor)}\n"] }]
    }], null, { width: [{
            type: Input,
            args: [{ transform: (value) => sizeAttribute(value, MrdGeoIconComponent._config.width) }]
        }], height: [{
            type: Input,
            args: [{ transform: (value) => sizeAttribute(value, MrdGeoIconComponent._config.height) }]
        }], margin: [{
            type: Input,
            args: [{ transform: (value) => sizeAttribute(value, MrdGeoIconComponent._config.margin) }]
        }], transitionTime: [{
            type: Input,
            args: [{ transform: (value) => timeAttribute(value, MrdGeoIconComponent._config.transitionTime) }]
        }], mainColor: [{
            type: Input,
            args: [{ transform: (value) => colorAttribute(value, MrdGeoIconComponent._config.mainColor) }]
        }], mainSelectedColor: [{
            type: Input,
            args: [{ transform: (value) => colorAttribute(value, MrdGeoIconComponent._config.mainSelectedColor) }]
        }], mainOpacity: [{
            type: Input,
            args: [{ transform: (value) => numberAttribute(value, MrdGeoIconComponent._config.mainOpacity) }]
        }], mainSelectedOpacity: [{
            type: Input,
            args: [{ transform: (value) => numberAttribute(value, MrdGeoIconComponent._config.mainSelectedOpacity) }]
        }], overlayColor: [{
            type: Input,
            args: [{ transform: (value) => colorAttribute(value, MrdGeoIconComponent._config.overlayColor) }]
        }], overlaySelectedColor: [{
            type: Input,
            args: [{ transform: (value) => colorAttribute(value, MrdGeoIconComponent._config.overlaySelectedColor) }]
        }], overlayOpacity: [{
            type: Input,
            args: [{ transform: (value) => numberAttribute(value, MrdGeoIconComponent._config.overlayOpacity) }]
        }], overlaySelectedOpacity: [{
            type: Input,
            args: [{ transform: (value) => numberAttribute(value, MrdGeoIconComponent._config.overlaySelectedOpacity) }]
        }], backColor: [{
            type: Input,
            args: [{ transform: (value) => colorAttribute(value, MrdGeoIconComponent._config.backColor) }]
        }], backSelectedColor: [{
            type: Input,
            args: [{ transform: (value) => colorAttribute(value, MrdGeoIconComponent._config.backSelectedColor) }]
        }], backOpacity: [{
            type: Input,
            args: [{ transform: (value) => numberAttribute(value, MrdGeoIconComponent._config.backOpacity) }]
        }], backSelectedOpacity: [{
            type: Input,
            args: [{ transform: (value) => numberAttribute(value, MrdGeoIconComponent._config.backSelectedOpacity) }]
        }], isSelected: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], baseData: [{
            type: Input
        }], overlayData: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWdlby1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZ2VvLWljb24vY29tcG9uZW50cy9tcmQtZ2VvLWljb24vbXJkLWdlby1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZ2VvLWljb24vY29tcG9uZW50cy9tcmQtZ2VvLWljb24vbXJkLWdlby1pY29uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMvRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7O0FBRW5FOzs7OztHQUtHO0FBTUgsTUFBTSxPQUFPLG1CQUFtQjtJQUV0QixNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7SUFFeEQ7Ozs7Ozs7T0FPRztJQUVJLEtBQUssR0FBVyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBRXpEOzs7Ozs7O09BT0c7SUFFSSxNQUFNLEdBQVcsbUJBQW1CLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUUzRDs7Ozs7OztPQU9HO0lBRUksTUFBTSxHQUFXLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFFM0Q7Ozs7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QyxLQUFLLEVBQUUsbUJBQW1CLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLEVBQUM7WUFZdkcsU0FBUztrQkFEZixLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBQztZQVk1RixpQkFBaUI7a0JBRHZCLEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsbUJBQW1CLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQUM7WUFZcEcsV0FBVztrQkFEakIsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUM7WUFZNUYsbUJBQW1CO2tCQUR6QixLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFDO1lBUzlELFVBQVU7a0JBQXRELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFRaEIsUUFBUTtrQkFBM0IsS0FBSztZQW1CYyxXQUFXO2tCQUE5QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vbGVhbkF0dHJpYnV0ZSwgQ29tcG9uZW50LCBJbnB1dCwgbnVtYmVyQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGNvbG9yQXR0cmlidXRlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9jb2xvci10cmFuc2Zvcm0nO1xyXG5pbXBvcnQgeyBzaXplQXR0cmlidXRlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9zaXplLXRyYW5zZm9ybSc7XHJcbmltcG9ydCB7IHRpbWVBdHRyaWJ1dGUgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi90cmFuc2Zvcm1zL3RpbWUtdHJhbnNmb3JtJztcclxuaW1wb3J0IHsgQ29uZmlnVXRpbCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29uZmlnLnV0aWwnO1xyXG5cclxuLyoqXHJcbiAqIEtvbXBvbmVudGUgZsO8ciBkaWUgRGFyc3RlbGx1bmcgdm9uIEdlby1JY29ucyAoU2NobGFnemVpY2hudW5nZW4pLlxyXG4gKlxyXG4gKiBAY2xhc3MgTXJkR2VvSWNvbkNvbXBvbmVudFxyXG4gKiBAaW1wbGVtZW50cyB7QWZ0ZXJWaWV3SW5pdH1cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXJkLWdlby1pY29uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWdlby1pY29uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtZ2VvLWljb24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkR2VvSWNvbkNvbXBvbmVudCB7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIF9jb25maWcgPSBDb25maWdVdGlsLmdldENvbmZpZygpLmdlb0ljb247XHJcblxyXG4gIC8qKlxyXG4gICAqIEJyZWl0ZSBkZXMgSWNvbnMuXHJcbiAgICpcclxuICAgKiBXaXJkIGVpbmUgWmFobCDDvGJlcmdlYmVuLCB3aXJkIGRpZXNlIGFscyBQaXhlbHdlcnQgaW50ZXJwcmV0aWVydC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEdlb0ljb25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogKHZhbHVlOiBhbnkpID0+IHNpemVBdHRyaWJ1dGUodmFsdWUsIE1yZEdlb0ljb25Db21wb25lbnQuX2NvbmZpZy53aWR0aCl9KVxyXG4gIHB1YmxpYyB3aWR0aDogc3RyaW5nID0gTXJkR2VvSWNvbkNvbXBvbmVudC5fY29uZmlnLndpZHRoO1xyXG5cclxuICAvKipcclxuICAgKiBIw7ZoZSBkZXMgSWNvbnMuXHJcbiAgICpcclxuICAgKiBXaXJkIGVpbmUgWmFobCDDvGJlcmdlYmVuLCB3aXJkIGRpZXNlIGFscyBQaXhlbHdlcnQgaW50ZXJwcmV0aWVydC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEdlb0ljb25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogKHZhbHVlOiBhbnkpID0+IHNpemVBdHRyaWJ1dGUodmFsdWUsIE1yZEdlb0ljb25Db21wb25lbnQuX2NvbmZpZy5oZWlnaHQpfSlcclxuICBwdWJsaWMgaGVpZ2h0OiBzdHJpbmcgPSBNcmRHZW9JY29uQ29tcG9uZW50Ll9jb25maWcuaGVpZ2h0O1xyXG5cclxuICAvKipcclxuICAgKiBNYXJnaW4gdW0gZGFzIEljb24uXHJcbiAgICpcclxuICAgKiBXaXJkIGVpbmUgWmFobCDDvGJlcmdlYmVuLCB3aXJkIGRpZXNlIGFscyBQaXhlbHdlcnQgaW50ZXJwcmV0aWVydC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEdlb0ljb25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogKHZhbHVlOiBhbnkpID0+IHNpemVBdHRyaWJ1dGUodmFsdWUsIE1yZEdlb0ljb25Db21wb25lbnQuX2NvbmZpZy5tYXJnaW4pfSlcclxuICBwdWJsaWMgbWFyZ2luOiBzdHJpbmcgPSBNcmRHZW9JY29uQ29tcG9uZW50Ll9jb25maWcubWFyZ2luO1xyXG5cclxuICAvKipcclxuICAgKiDDnGJlcmdhbmdzemVpdCBmw7xyIEZhcmJ3ZWNoc2VsIChTZWxla3RpZXJ0IDwtPiBuaWNodCBzZWxla3RpZXJ0KS5cclxuICAgKlxyXG4gICAqIFdpcmQgZWluZSBaYWhsIMO8YmVyZ2ViZW4sIHdpcmQgZGllc2UgYWxzIFNla3VuZGVud2VydCBpbnRlcnByZXRpZXJ0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZyB8IG51bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgTXJkR2VvSWNvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiAodmFsdWU6IGFueSkgPT4gdGltZUF0dHJpYnV0ZSh2YWx1ZSwgTXJkR2VvSWNvbkNvbXBvbmVudC5fY29uZmlnLnRyYW5zaXRpb25UaW1lKX0pXHJcbiAgcHVibGljIHRyYW5zaXRpb25UaW1lOiBzdHJpbmcgPSBNcmRHZW9JY29uQ29tcG9uZW50Ll9jb25maWcudHJhbnNpdGlvblRpbWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhdXB0ZmFyYmUgZGVzIEljb25zLlxyXG4gICAqXHJcbiAgICogRXMga8O2bm5lbiBIZXgtLCBSR0ItIG9kZXIgUkdCQS1XZXJ0ZSDDvGJlcmdlYmVuIHdlcmRlbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIE1yZEdlb0ljb25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogKHZhbHVlOiBzdHJpbmcpID0+IGNvbG9yQXR0cmlidXRlKHZhbHVlLCBNcmRHZW9JY29uQ29tcG9uZW50Ll9jb25maWcubWFpbkNvbG9yKX0pXHJcbiAgcHVibGljIG1haW5Db2xvcjogc3RyaW5nID0gTXJkR2VvSWNvbkNvbXBvbmVudC5fY29uZmlnLm1haW5Db2xvcjtcclxuXHJcbiAgLyoqXHJcbiAgICogSGF1cHRmYXJiZSBkZXMgSWNvbnMsIHdlbm4gZXMgc2VsZWt0aWVydCBpc3QuXHJcbiAgICpcclxuICAgKiBFcyBrw7ZubmVuIEhleC0sIFJHQi0gb2RlciBSR0JBLVdlcnRlIMO8YmVyZ2ViZW4gd2VyZGVuLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTXJkR2VvSWNvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiAodmFsdWU6IHN0cmluZykgPT4gY29sb3JBdHRyaWJ1dGUodmFsdWUsIE1yZEdlb0ljb25Db21wb25lbnQuX2NvbmZpZy5tYWluU2VsZWN0ZWRDb2xvcil9KVxyXG4gIHB1YmxpYyBtYWluU2VsZWN0ZWRDb2xvcjogc3RyaW5nID0gTXJkR2VvSWNvbkNvbXBvbmVudC5fY29uZmlnLm1haW5TZWxlY3RlZENvbG9yO1xyXG5cclxuICAvKipcclxuICAgKiBEZWNra3JhZnQgZGVyIEhhdXB0ZmFyYmUgZGVzIEljb25zLlxyXG4gICAqXHJcbiAgICogV2VydGUgendpc2NoZW4gMCB1bmQgMSBzaW5kIG3DtmdsaWNoLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgTXJkR2VvSWNvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiAodmFsdWU6IGFueSkgPT4gbnVtYmVyQXR0cmlidXRlKHZhbHVlLCBNcmRHZW9JY29uQ29tcG9uZW50Ll9jb25maWcubWFpbk9wYWNpdHkpfSlcclxuICBwdWJsaWMgbWFpbk9wYWNpdHk6IG51bWJlciA9IE1yZEdlb0ljb25Db21wb25lbnQuX2NvbmZpZy5tYWluT3BhY2l0eTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGVja2tyYWZ0IGRlciBIYXVwdGZhcmJlIGRlcyBJY29ucywgd2VubiBlcyBzZWxla3RpZXJ0IGlzdC5cclxuICAgKlxyXG4gICAqIFdlcnRlIHp3aXNjaGVuIDAgdW5kIDEgc2luZCBtw7ZnbGljaC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEdlb0ljb25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogKHZhbHVlOiBhbnkpID0+IG51bWJlckF0dHJpYnV0ZSh2YWx1ZSwgTXJkR2VvSWNvbkNvbXBvbmVudC5fY29uZmlnLm1haW5TZWxlY3RlZE9wYWNpdHkpfSlcclxuICBwdWJsaWMgbWFpblNlbGVjdGVkT3BhY2l0eTogbnVtYmVyID0gTXJkR2VvSWNvbkNvbXBvbmVudC5fY29uZmlnLm1haW5TZWxlY3RlZE9wYWNpdHk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEZhcmJlIGRlciAyLiBFYmVuZSBkZXMgSWNvbnMuXHJcbiAgICpcclxuICAgKiBFcyBrw7ZubmVuIEhleC0sIFJHQi0gb2RlciBSR0JBLVdlcnRlIMO8YmVyZ2ViZW4gd2VyZGVuLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTXJkR2VvSWNvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiAodmFsdWU6IHN0cmluZykgPT4gY29sb3JBdHRyaWJ1dGUodmFsdWUsIE1yZEdlb0ljb25Db21wb25lbnQuX2NvbmZpZy5vdmVybGF5Q29sb3IpfSlcclxuICBwdWJsaWMgb3ZlcmxheUNvbG9yOiBzdHJpbmcgPSBNcmRHZW9JY29uQ29tcG9uZW50Ll9jb25maWcub3ZlcmxheUNvbG9yO1xyXG5cclxuICAvKipcclxuICAgKiBGYXJiZSBkZXIgMi4gRWJlbmUgZGVzIEljb25zLCB3ZW5uIGVzIHNlbGVrdGllcnQgaXN0LlxyXG4gICAqXHJcbiAgICogRXMga8O2bm5lbiBIZXgtLCBSR0ItIG9kZXIgUkdCQS1XZXJ0ZSDDvGJlcmdlYmVuIHdlcmRlbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIE1yZEdlb0ljb25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogKHZhbHVlOiBzdHJpbmcpID0+IGNvbG9yQXR0cmlidXRlKHZhbHVlLCBNcmRHZW9JY29uQ29tcG9uZW50Ll9jb25maWcub3ZlcmxheVNlbGVjdGVkQ29sb3IpfSlcclxuICBwdWJsaWMgb3ZlcmxheVNlbGVjdGVkQ29sb3I6IHN0cmluZyA9IE1yZEdlb0ljb25Db21wb25lbnQuX2NvbmZpZy5vdmVybGF5U2VsZWN0ZWRDb2xvcjtcclxuXHJcbiAgLyoqXHJcbiAgICogRGVja2tyYWZ0IGRlciAyLiBFYmVuZSBkZXMgSWNvbnMuXHJcbiAgICpcclxuICAgKiBXZXJ0ZSB6d2lzY2hlbiAwIHVuZCAxIHNpbmQgbcO2Z2xpY2guXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRHZW9JY29uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06ICh2YWx1ZTogYW55KSA9PiBudW1iZXJBdHRyaWJ1dGUodmFsdWUsIE1yZEdlb0ljb25Db21wb25lbnQuX2NvbmZpZy5vdmVybGF5T3BhY2l0eSl9KVxyXG4gIHB1YmxpYyBvdmVybGF5T3BhY2l0eTogbnVtYmVyID0gTXJkR2VvSWNvbkNvbXBvbmVudC5fY29uZmlnLm92ZXJsYXlPcGFjaXR5O1xyXG5cclxuICAvKipcclxuICAgKiBEZWNra3JhZnQgZGVyIDIuIEViZW5lIGRlcyBJY29ucywgd2VubiBlcyBzZWxla3RpZXJ0IGlzdC5cclxuICAgKlxyXG4gICAqIFdlcnRlIHp3aXNjaGVuIDAgdW5kIDEgc2luZCBtw7ZnbGljaC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEdlb0ljb25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogKHZhbHVlOiBhbnkpID0+IG51bWJlckF0dHJpYnV0ZSh2YWx1ZSwgTXJkR2VvSWNvbkNvbXBvbmVudC5fY29uZmlnLm92ZXJsYXlTZWxlY3RlZE9wYWNpdHkpfSlcclxuICBwdWJsaWMgb3ZlcmxheVNlbGVjdGVkT3BhY2l0eTogbnVtYmVyID0gTXJkR2VvSWNvbkNvbXBvbmVudC5fY29uZmlnLm92ZXJsYXlTZWxlY3RlZE9wYWNpdHk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEhpbnRlcmdydW5kZmFyYmUgZGVzIEljb25zLCB3ZW5uIGVzIGVpbmUgendlaXRlIEViZW5lIGdpYnQuXHJcbiAgICpcclxuICAgKiBFcyBrw7ZubmVuIEhleC0sIFJHQi0gb2RlciBSR0JBLVdlcnRlIMO8YmVyZ2ViZW4gd2VyZGVuLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTXJkR2VvSWNvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiAodmFsdWU6IHN0cmluZykgPT4gY29sb3JBdHRyaWJ1dGUodmFsdWUsIE1yZEdlb0ljb25Db21wb25lbnQuX2NvbmZpZy5iYWNrQ29sb3IpfSlcclxuICBwdWJsaWMgYmFja0NvbG9yOiBzdHJpbmcgPSBNcmRHZW9JY29uQ29tcG9uZW50Ll9jb25maWcuYmFja0NvbG9yO1xyXG5cclxuICAvKipcclxuICAgKiBIaW50ZXJncnVuZGZhcmJlIGRlcyBJY29ucywgd2VubiBlcyBlaW5lIHp3ZWl0ZSBFYmVuZSBnaWJ0IHVuZCBkaWVzZSBzZWxla3RpZXJ0IGlzdC5cclxuICAgKlxyXG4gICAqIEVzIGvDtm5uZW4gSGV4LSwgUkdCLSBvZGVyIFJHQkEtV2VydGUgw7xiZXJnZWJlbiB3ZXJkZW4uXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRHZW9JY29uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06ICh2YWx1ZTogc3RyaW5nKSA9PiBjb2xvckF0dHJpYnV0ZSh2YWx1ZSwgTXJkR2VvSWNvbkNvbXBvbmVudC5fY29uZmlnLmJhY2tTZWxlY3RlZENvbG9yKX0pXHJcbiAgcHVibGljIGJhY2tTZWxlY3RlZENvbG9yOiBzdHJpbmcgPSBNcmRHZW9JY29uQ29tcG9uZW50Ll9jb25maWcuYmFja1NlbGVjdGVkQ29sb3I7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlY2trcmFmdCBkZXMgSGludGVyZ3J1bmRzIGRlcyBJY29ucy5cclxuICAgKlxyXG4gICAqIFdlcnRlIHp3aXNjaGVuIDAgdW5kIDEgc2luZCBtw7ZnbGljaC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEdlb0ljb25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogKHZhbHVlOiBhbnkpID0+IG51bWJlckF0dHJpYnV0ZSh2YWx1ZSwgTXJkR2VvSWNvbkNvbXBvbmVudC5fY29uZmlnLmJhY2tPcGFjaXR5KX0pXHJcbiAgcHVibGljIGJhY2tPcGFjaXR5OiBudW1iZXIgPSBNcmRHZW9JY29uQ29tcG9uZW50Ll9jb25maWcuYmFja09wYWNpdHk7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlY2trcmFmdCBkZXMgSGludGVyZ3J1bmRzIGRlcyBJY29ucywgd2VubiBlcyBzZWxla3RpZXJ0IGlzdC5cclxuICAgKlxyXG4gICAqIFdlcnRlIHp3aXNjaGVuIDAgdW5kIDEgc2luZCBtw7ZnbGljaC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEdlb0ljb25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogKHZhbHVlOiBhbnkpID0+IG51bWJlckF0dHJpYnV0ZSh2YWx1ZSwgTXJkR2VvSWNvbkNvbXBvbmVudC5fY29uZmlnLmJhY2tTZWxlY3RlZE9wYWNpdHkpfSlcclxuICBwdWJsaWMgYmFja1NlbGVjdGVkT3BhY2l0eTogbnVtYmVyID0gTXJkR2VvSWNvbkNvbXBvbmVudC5fY29uZmlnLmJhY2tTZWxlY3RlZE9wYWNpdHk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRhcyBJY29uIHNlbGVrdGllcnQgaXN0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEdlb0ljb25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBpc1NlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIERhdGVuIGbDvHIgZGllIEJhc2lzIGRlcyBJY29ucy5cclxuICAgKlxyXG4gICAqIEB0eXBlIHthbnlbXX1cclxuICAgKiBAbWVtYmVyb2YgTXJkR2VvSWNvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgYmFzZURhdGEodmFsdWU6IGFueVtdKXtcclxuICAgIHRoaXMuX2Jhc2VEYXRhID0gdmFsdWU7XHJcbiAgICBsZXQgcGF0aCA9IHRoaXMuZ2V0UGF0aFN0cmluZyh2YWx1ZSk7XHJcbiAgICB0aGlzLmJhc2UgPSBwYXRoLnBzO1xyXG4gICAgdGhpcy52aWV3Qm94ID0gcGF0aC52YnM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGJhc2VEYXRhKCk6IGFueVtde1xyXG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VEYXRhO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYmFzZURhdGE6IGFueVtdO1xyXG5cclxuICAvKipcclxuICAgKiBEYXRlbiBmw7xyIGRpZSAyLiBFYmVuZSBkZXMgSWNvbnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7YW55W119XHJcbiAgICogQG1lbWJlcm9mIE1yZEdlb0ljb25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgc2V0IG92ZXJsYXlEYXRhKHZhbHVlOiBhbnlbXSl7XHJcbiAgICB0aGlzLl9iYXNlRGF0YSA9IHZhbHVlO1xyXG4gICAgbGV0IHAgPSB0aGlzLmdldFBhdGhTdHJpbmcodmFsdWUpO1xyXG4gICAgdGhpcy5vdmVybGF5ID0gcC5wcztcclxuXHJcbiAgICBpZighdmFsdWUpIHtcclxuICAgICAgdGhpcy5oYXNPdmVybGF5ID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhc092ZXJsYXkgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBvdmVybGF5RGF0YSgpOmFueVtde1xyXG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VEYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2lidCBhbiwgb2IgZGFzIEljb24gZWluZSAyLiBFYmVuZSBoYXQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgKiBAbWVtYmVyb2YgTXJkR2VvSWNvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBoYXNPdmVybGF5OmJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogQmVpbmhhbHRldCBkaWUgRGF0ZW4gZGVyIGVyc3RlbiBFYmVuZSBkZXMgSWNvbnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRHZW9JY29uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIGJhc2U6IHN0cmluZztcclxuICAvKipcclxuICAgKiBCZWluaGFsdGV0IGRpZSBEYXRlbiBkZXIgendlaXRlbiBFYmVuZSBkZXMgSWNvbnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRHZW9JY29uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJsYXk6IHN0cmluZztcclxuICBwdWJsaWMgdmlld0JveDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGdldFBhdGhTdHJpbmcoZCk6IGFueXtcclxuICAgIC8vIFdlbm4gZGVyIHp3ZWl0ZSBMZXZlbCBlaW4gQXJyYXkgaXN0IEhhbmRlbHQgZXMgc2ljaCB1bSBkYXRlbiBtaXQgaW5zZWxmbGFlY2hlbi5cclxuICAgIC8vIERhbm4gd2lyZCBkaWUgZXJzdGUgRmxhZWNoZSB2ZXJ3ZW5kZXQgb2huZSBpbnNlbG5cclxuICAgIGlmKEFycmF5LmlzQXJyYXkoZCkgJiYgQXJyYXkuaXNBcnJheShkWzBdKSAmJiBBcnJheS5pc0FycmF5KGRbMF1bMF0pKSB7XHJcbiAgICAgICBkID0gZFswXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPaG5lIFB1bmt0ZSBlbnRzdHVlbmRlIHNvbnN0IGRlciB1bmd1ZWx0aWdlIFNWRy1QZmFkIFwidW5kZWZpbmVkelwiXHJcbiAgICBpZighZCB8fCBkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4ge3BzOlwiXCIsIHZiOiBbMCwwLDAsMF0sIHZiczogXCIwIDAgMSAxXCJ9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB2YiA9IFswLDAsMCwwXTtcclxuXHJcbiAgICB2YXIgcHM7XHJcbiAgICBmb3IobGV0IGkgPSAwO2kgPCBkLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICBpZighcHMpIHtcclxuICAgICAgICBwcyA9IFwiTVwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBzKz0gXCJMXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBkZDIgPSB0aGlzLm1lcmNFbmNvZGUoZFtpXVsxXSxkW2ldWzBdLDEwMCwxMDApO1xyXG4gICAgICBsZXQgZDEgPSBkZDJbMF0gKiAzMDAwMDtcclxuICAgICAgbGV0IGQyID0gZGQyWzFdICogMzAwMDA7XHJcblxyXG5cclxuICAgICAgaWYgKHZiWzBdID09IDAgfHwgdmJbMF0+ZDEpIHtcclxuICAgICAgICB2YlswXSA9IGQxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodmJbMV0gPT0gMCB8fCB2YlsxXT5kMikge1xyXG4gICAgICAgIHZiWzFdID0gZDI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh2YlsyXSA9PSAwIHx8IHZiWzJdPGQxKSB7XHJcbiAgICAgICAgdmJbMl0gPSBkMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHZiWzNdID09IDAgfHwgdmJbM108ZDIpIHtcclxuICAgICAgICB2YlszXSA9IGQyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwcyArPSBkMSArXCIgXCIgKyBkMjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHMgKz0gXCJ6XCI7XHJcbiAgICByZXR1cm4ge3BzOnBzLCB2Yjp2YiwgdmJzOiB2YlswXSArIFwiIFwiICsgdmJbMV0gKyBcIiBcIiArICh2YlsyXS12YlswXSkgKyBcIiBcIiArKHZiWzNdLXZiWzFdKSAgfTtcclxuICB9XHJcblxyXG4gIG1lcmNFbmNvZGUobGF0LCBsbmcsIHcsIGgpe1xyXG4gICAgLy8gZ2V0IHhcclxuICAgIHZhciB4ID0gKGxuZyArIDE4MCkgKiAodyAvIDM2MCk7XHJcbiAgICAvLyBjb252ZXJ0IGZyb20gZGVncmVlcyB0byByYWRpYW5zXHJcbiAgICB2YXIgbGF0UmFkID0gbGF0ICogTWF0aC5QSSAvIDE4MDtcclxuICAgIC8vIGdldCB5IHZhbHVlXHJcbiAgICB2YXIgbWVyY04gPSBNYXRoLmxvZyhNYXRoLnRhbigoTWF0aC5QSSAvIDQpICsgKGxhdFJhZCAvIDIpKSk7XHJcbiAgICB2YXIgeSA9IChoIC8gMikgLSAodyAqIG1lcmNOIC8gKDIgKiBNYXRoLlBJKSk7XHJcbiAgICByZXR1cm4gW3gseV07XHJcbiAgfVxyXG59XHJcbiIsIjxzdmcgY2xhc3M9XCJnZW9pY29uXCIgW2F0dHIudmlld0JveF09XCJ2aWV3Qm94XCJcclxuICBbc3R5bGUuLS13aWR0aF09XCJ3aWR0aFwiXHJcbiAgW3N0eWxlLi0taGVpZ2h0XT1cImhlaWdodFwiXHJcbiAgW3N0eWxlLi0tbWFyZ2luXT1cIm1hcmdpblwiXHJcbiAgW3N0eWxlLi0tdHJhbnNpdGlvblRpbWVdPVwidHJhbnNpdGlvblRpbWVcIlxyXG4gIFtzdHlsZS4tLW1haW5Db2xvcl09XCJtYWluQ29sb3JcIlxyXG4gIFtzdHlsZS4tLW1haW5TZWxlY3RlZENvbG9yXT1cIm1haW5TZWxlY3RlZENvbG9yXCJcclxuICBbc3R5bGUuLS1iYWNrQ29sb3JdPVwiYmFja0NvbG9yXCJcclxuICBbc3R5bGUuLS1iYWNrU2VsZWN0ZWRDb2xvcl09XCJiYWNrU2VsZWN0ZWRDb2xvclwiXHJcbiAgW3N0eWxlLi0tb3ZlckNvbG9yXT1cIm92ZXJsYXlDb2xvclwiXHJcbiAgW3N0eWxlLi0tb3ZlclNlbGVjdGVkQ29sb3JdPVwib3ZlcmxheVNlbGVjdGVkQ29sb3JcIlxyXG4gIFtzdHlsZS4tLW1haW5PcGFjaXR5XT1cIm1haW5PcGFjaXR5XCJcclxuICBbc3R5bGUuLS1tYWluU2VsZWN0ZWRPcGFjaXR5XT1cIm1haW5TZWxlY3RlZE9wYWNpdHlcIlxyXG4gIFtzdHlsZS4tLWJhY2tPcGFjaXR5XT1cImJhY2tPcGFjaXR5XCJcclxuICBbc3R5bGUuLS1iYWNrU2VsZWN0ZWRPcGFjaXR5XT1cImJhY2tTZWxlY3RlZE9wYWNpdHlcIlxyXG4gIFtzdHlsZS4tLW92ZXJPcGFjaXR5XT1cIm92ZXJsYXlPcGFjaXR5XCJcclxuICBbc3R5bGUuLS1vdmVyU2VsZWN0ZWRPcGFjaXR5XT1cIm92ZXJsYXlTZWxlY3RlZE9wYWNpdHlcIlxyXG4gID5cclxuICA8Zz5cclxuICAgIDxwYXRoIFthdHRyLmRdPVwiYmFzZVwiIFtuZ0NsYXNzXT1cInsnc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLCAnbWFpbic6ICFoYXNPdmVybGF5LCAnYmFjayc6aGFzT3ZlcmxheX1cIiA+PC9wYXRoPlxyXG4gICAgPHBhdGggW2F0dHIuZF09XCJvdmVybGF5XCIgW25nQ2xhc3NdPVwieydzZWxlY3RlZCc6IGlzU2VsZWN0ZWQsICdvdmVyJzogaGFzT3ZlcmxheX1cIj48L3BhdGg+XHJcbiAgPC9nPlxyXG48L3N2Zz5cclxuIl19