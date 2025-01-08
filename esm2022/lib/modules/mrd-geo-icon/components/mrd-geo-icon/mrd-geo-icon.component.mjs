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
        if (!d) {
            return { ps: "", vb: [0, 0, 0, 0], vbs: "0 0 1 1" };
        }
        // Wenn der zweite Level ein Array ist Handelt es sich um daten mit inselflaechen.
        // Dann wird die erste Flaeche verwendet ohne inseln
        if (Array.isArray(d) && Array.isArray(d[0]) && Array.isArray(d[0][0])) {
            d = d[0];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWdlby1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZ2VvLWljb24vY29tcG9uZW50cy9tcmQtZ2VvLWljb24vbXJkLWdlby1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZ2VvLWljb24vY29tcG9uZW50cy9tcmQtZ2VvLWljb24vbXJkLWdlby1pY29uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMvRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7O0FBRW5FOzs7OztHQUtHO0FBTUgsTUFBTSxPQUFPLG1CQUFtQjtJQUV0QixNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7SUFFeEQ7Ozs7Ozs7T0FPRztJQUVJLEtBQUssR0FBVyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBRXpEOzs7Ozs7O09BT0c7SUFFSSxNQUFNLEdBQVcsbUJBQW1CLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUUzRDs7Ozs7OztPQU9HO0lBRUksTUFBTSxHQUFXLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFFM0Q7Ozs7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QyxFQUFDO1lBWXZHLFNBQVM7a0JBRGYsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUM7WUFZNUYsaUJBQWlCO2tCQUR2QixLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDO1lBWXBHLFdBQVc7a0JBRGpCLEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFDO1lBWTVGLG1CQUFtQjtrQkFEekIsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsRUFBQztZQVM5RCxVQUFVO2tCQUF0RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBUWhCLFFBQVE7a0JBQTNCLEtBQUs7WUFtQmMsV0FBVztrQkFBOUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb2xlYW5BdHRyaWJ1dGUsIENvbXBvbmVudCwgSW5wdXQsIG51bWJlckF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBjb2xvckF0dHJpYnV0ZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvY29sb3ItdHJhbnNmb3JtJztcclxuaW1wb3J0IHsgc2l6ZUF0dHJpYnV0ZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvc2l6ZS10cmFuc2Zvcm0nO1xyXG5pbXBvcnQgeyB0aW1lQXR0cmlidXRlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy90aW1lLXRyYW5zZm9ybSc7XHJcbmltcG9ydCB7IENvbmZpZ1V0aWwgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsJztcclxuXHJcbi8qKlxyXG4gKiBLb21wb25lbnRlIGbDvHIgZGllIERhcnN0ZWxsdW5nIHZvbiBHZW8tSWNvbnMgKFNjaGxhZ3plaWNobnVuZ2VuKS5cclxuICpcclxuICogQGNsYXNzIE1yZEdlb0ljb25Db21wb25lbnRcclxuICogQGltcGxlbWVudHMge0FmdGVyVmlld0luaXR9XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1nZW8taWNvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1nZW8taWNvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLWdlby1pY29uLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZEdlb0ljb25Db21wb25lbnQge1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBfY29uZmlnID0gQ29uZmlnVXRpbC5nZXRDb25maWcoKS5nZW9JY29uO1xyXG5cclxuICAvKipcclxuICAgKiBCcmVpdGUgZGVzIEljb25zLlxyXG4gICAqXHJcbiAgICogV2lyZCBlaW5lIFphaGwgw7xiZXJnZWJlbiwgd2lyZCBkaWVzZSBhbHMgUGl4ZWx3ZXJ0IGludGVycHJldGllcnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRHZW9JY29uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06ICh2YWx1ZTogYW55KSA9PiBzaXplQXR0cmlidXRlKHZhbHVlLCBNcmRHZW9JY29uQ29tcG9uZW50Ll9jb25maWcud2lkdGgpfSlcclxuICBwdWJsaWMgd2lkdGg6IHN0cmluZyA9IE1yZEdlb0ljb25Db21wb25lbnQuX2NvbmZpZy53aWR0aDtcclxuXHJcbiAgLyoqXHJcbiAgICogSMO2aGUgZGVzIEljb25zLlxyXG4gICAqXHJcbiAgICogV2lyZCBlaW5lIFphaGwgw7xiZXJnZWJlbiwgd2lyZCBkaWVzZSBhbHMgUGl4ZWx3ZXJ0IGludGVycHJldGllcnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRHZW9JY29uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06ICh2YWx1ZTogYW55KSA9PiBzaXplQXR0cmlidXRlKHZhbHVlLCBNcmRHZW9JY29uQ29tcG9uZW50Ll9jb25maWcuaGVpZ2h0KX0pXHJcbiAgcHVibGljIGhlaWdodDogc3RyaW5nID0gTXJkR2VvSWNvbkNvbXBvbmVudC5fY29uZmlnLmhlaWdodDtcclxuXHJcbiAgLyoqXHJcbiAgICogTWFyZ2luIHVtIGRhcyBJY29uLlxyXG4gICAqXHJcbiAgICogV2lyZCBlaW5lIFphaGwgw7xiZXJnZWJlbiwgd2lyZCBkaWVzZSBhbHMgUGl4ZWx3ZXJ0IGludGVycHJldGllcnQuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nIHwgbnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRHZW9JY29uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06ICh2YWx1ZTogYW55KSA9PiBzaXplQXR0cmlidXRlKHZhbHVlLCBNcmRHZW9JY29uQ29tcG9uZW50Ll9jb25maWcubWFyZ2luKX0pXHJcbiAgcHVibGljIG1hcmdpbjogc3RyaW5nID0gTXJkR2VvSWNvbkNvbXBvbmVudC5fY29uZmlnLm1hcmdpbjtcclxuXHJcbiAgLyoqXHJcbiAgICogw5xiZXJnYW5nc3plaXQgZsO8ciBGYXJid2VjaHNlbCAoU2VsZWt0aWVydCA8LT4gbmljaHQgc2VsZWt0aWVydCkuXHJcbiAgICpcclxuICAgKiBXaXJkIGVpbmUgWmFobCDDvGJlcmdlYmVuLCB3aXJkIGRpZXNlIGFscyBTZWt1bmRlbndlcnQgaW50ZXJwcmV0aWVydC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEdlb0ljb25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogKHZhbHVlOiBhbnkpID0+IHRpbWVBdHRyaWJ1dGUodmFsdWUsIE1yZEdlb0ljb25Db21wb25lbnQuX2NvbmZpZy50cmFuc2l0aW9uVGltZSl9KVxyXG4gIHB1YmxpYyB0cmFuc2l0aW9uVGltZTogc3RyaW5nID0gTXJkR2VvSWNvbkNvbXBvbmVudC5fY29uZmlnLnRyYW5zaXRpb25UaW1lO1xyXG5cclxuICAvKipcclxuICAgKiBIYXVwdGZhcmJlIGRlcyBJY29ucy5cclxuICAgKlxyXG4gICAqIEVzIGvDtm5uZW4gSGV4LSwgUkdCLSBvZGVyIFJHQkEtV2VydGUgw7xiZXJnZWJlbiB3ZXJkZW4uXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRHZW9JY29uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06ICh2YWx1ZTogc3RyaW5nKSA9PiBjb2xvckF0dHJpYnV0ZSh2YWx1ZSwgTXJkR2VvSWNvbkNvbXBvbmVudC5fY29uZmlnLm1haW5Db2xvcil9KVxyXG4gIHB1YmxpYyBtYWluQ29sb3I6IHN0cmluZyA9IE1yZEdlb0ljb25Db21wb25lbnQuX2NvbmZpZy5tYWluQ29sb3I7XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhdXB0ZmFyYmUgZGVzIEljb25zLCB3ZW5uIGVzIHNlbGVrdGllcnQgaXN0LlxyXG4gICAqXHJcbiAgICogRXMga8O2bm5lbiBIZXgtLCBSR0ItIG9kZXIgUkdCQS1XZXJ0ZSDDvGJlcmdlYmVuIHdlcmRlbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIE1yZEdlb0ljb25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogKHZhbHVlOiBzdHJpbmcpID0+IGNvbG9yQXR0cmlidXRlKHZhbHVlLCBNcmRHZW9JY29uQ29tcG9uZW50Ll9jb25maWcubWFpblNlbGVjdGVkQ29sb3IpfSlcclxuICBwdWJsaWMgbWFpblNlbGVjdGVkQ29sb3I6IHN0cmluZyA9IE1yZEdlb0ljb25Db21wb25lbnQuX2NvbmZpZy5tYWluU2VsZWN0ZWRDb2xvcjtcclxuXHJcbiAgLyoqXHJcbiAgICogRGVja2tyYWZ0IGRlciBIYXVwdGZhcmJlIGRlcyBJY29ucy5cclxuICAgKlxyXG4gICAqIFdlcnRlIHp3aXNjaGVuIDAgdW5kIDEgc2luZCBtw7ZnbGljaC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIE1yZEdlb0ljb25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogKHZhbHVlOiBhbnkpID0+IG51bWJlckF0dHJpYnV0ZSh2YWx1ZSwgTXJkR2VvSWNvbkNvbXBvbmVudC5fY29uZmlnLm1haW5PcGFjaXR5KX0pXHJcbiAgcHVibGljIG1haW5PcGFjaXR5OiBudW1iZXIgPSBNcmRHZW9JY29uQ29tcG9uZW50Ll9jb25maWcubWFpbk9wYWNpdHk7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlY2trcmFmdCBkZXIgSGF1cHRmYXJiZSBkZXMgSWNvbnMsIHdlbm4gZXMgc2VsZWt0aWVydCBpc3QuXHJcbiAgICpcclxuICAgKiBXZXJ0ZSB6d2lzY2hlbiAwIHVuZCAxIHNpbmQgbcO2Z2xpY2guXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRHZW9JY29uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06ICh2YWx1ZTogYW55KSA9PiBudW1iZXJBdHRyaWJ1dGUodmFsdWUsIE1yZEdlb0ljb25Db21wb25lbnQuX2NvbmZpZy5tYWluU2VsZWN0ZWRPcGFjaXR5KX0pXHJcbiAgcHVibGljIG1haW5TZWxlY3RlZE9wYWNpdHk6IG51bWJlciA9IE1yZEdlb0ljb25Db21wb25lbnQuX2NvbmZpZy5tYWluU2VsZWN0ZWRPcGFjaXR5O1xyXG5cclxuICAvKipcclxuICAgKiBGYXJiZSBkZXIgMi4gRWJlbmUgZGVzIEljb25zLlxyXG4gICAqXHJcbiAgICogRXMga8O2bm5lbiBIZXgtLCBSR0ItIG9kZXIgUkdCQS1XZXJ0ZSDDvGJlcmdlYmVuIHdlcmRlbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIE1yZEdlb0ljb25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogKHZhbHVlOiBzdHJpbmcpID0+IGNvbG9yQXR0cmlidXRlKHZhbHVlLCBNcmRHZW9JY29uQ29tcG9uZW50Ll9jb25maWcub3ZlcmxheUNvbG9yKX0pXHJcbiAgcHVibGljIG92ZXJsYXlDb2xvcjogc3RyaW5nID0gTXJkR2VvSWNvbkNvbXBvbmVudC5fY29uZmlnLm92ZXJsYXlDb2xvcjtcclxuXHJcbiAgLyoqXHJcbiAgICogRmFyYmUgZGVyIDIuIEViZW5lIGRlcyBJY29ucywgd2VubiBlcyBzZWxla3RpZXJ0IGlzdC5cclxuICAgKlxyXG4gICAqIEVzIGvDtm5uZW4gSGV4LSwgUkdCLSBvZGVyIFJHQkEtV2VydGUgw7xiZXJnZWJlbiB3ZXJkZW4uXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRHZW9JY29uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06ICh2YWx1ZTogc3RyaW5nKSA9PiBjb2xvckF0dHJpYnV0ZSh2YWx1ZSwgTXJkR2VvSWNvbkNvbXBvbmVudC5fY29uZmlnLm92ZXJsYXlTZWxlY3RlZENvbG9yKX0pXHJcbiAgcHVibGljIG92ZXJsYXlTZWxlY3RlZENvbG9yOiBzdHJpbmcgPSBNcmRHZW9JY29uQ29tcG9uZW50Ll9jb25maWcub3ZlcmxheVNlbGVjdGVkQ29sb3I7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlY2trcmFmdCBkZXIgMi4gRWJlbmUgZGVzIEljb25zLlxyXG4gICAqXHJcbiAgICogV2VydGUgendpc2NoZW4gMCB1bmQgMSBzaW5kIG3DtmdsaWNoLlxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgTXJkR2VvSWNvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiAodmFsdWU6IGFueSkgPT4gbnVtYmVyQXR0cmlidXRlKHZhbHVlLCBNcmRHZW9JY29uQ29tcG9uZW50Ll9jb25maWcub3ZlcmxheU9wYWNpdHkpfSlcclxuICBwdWJsaWMgb3ZlcmxheU9wYWNpdHk6IG51bWJlciA9IE1yZEdlb0ljb25Db21wb25lbnQuX2NvbmZpZy5vdmVybGF5T3BhY2l0eTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGVja2tyYWZ0IGRlciAyLiBFYmVuZSBkZXMgSWNvbnMsIHdlbm4gZXMgc2VsZWt0aWVydCBpc3QuXHJcbiAgICpcclxuICAgKiBXZXJ0ZSB6d2lzY2hlbiAwIHVuZCAxIHNpbmQgbcO2Z2xpY2guXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRHZW9JY29uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06ICh2YWx1ZTogYW55KSA9PiBudW1iZXJBdHRyaWJ1dGUodmFsdWUsIE1yZEdlb0ljb25Db21wb25lbnQuX2NvbmZpZy5vdmVybGF5U2VsZWN0ZWRPcGFjaXR5KX0pXHJcbiAgcHVibGljIG92ZXJsYXlTZWxlY3RlZE9wYWNpdHk6IG51bWJlciA9IE1yZEdlb0ljb25Db21wb25lbnQuX2NvbmZpZy5vdmVybGF5U2VsZWN0ZWRPcGFjaXR5O1xyXG5cclxuICAvKipcclxuICAgKiBIaW50ZXJncnVuZGZhcmJlIGRlcyBJY29ucywgd2VubiBlcyBlaW5lIHp3ZWl0ZSBFYmVuZSBnaWJ0LlxyXG4gICAqXHJcbiAgICogRXMga8O2bm5lbiBIZXgtLCBSR0ItIG9kZXIgUkdCQS1XZXJ0ZSDDvGJlcmdlYmVuIHdlcmRlbi5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIE1yZEdlb0ljb25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogKHZhbHVlOiBzdHJpbmcpID0+IGNvbG9yQXR0cmlidXRlKHZhbHVlLCBNcmRHZW9JY29uQ29tcG9uZW50Ll9jb25maWcuYmFja0NvbG9yKX0pXHJcbiAgcHVibGljIGJhY2tDb2xvcjogc3RyaW5nID0gTXJkR2VvSWNvbkNvbXBvbmVudC5fY29uZmlnLmJhY2tDb2xvcjtcclxuXHJcbiAgLyoqXHJcbiAgICogSGludGVyZ3J1bmRmYXJiZSBkZXMgSWNvbnMsIHdlbm4gZXMgZWluZSB6d2VpdGUgRWJlbmUgZ2lidCB1bmQgZGllc2Ugc2VsZWt0aWVydCBpc3QuXHJcbiAgICpcclxuICAgKiBFcyBrw7ZubmVuIEhleC0sIFJHQi0gb2RlciBSR0JBLVdlcnRlIMO8YmVyZ2ViZW4gd2VyZGVuLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTXJkR2VvSWNvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiAodmFsdWU6IHN0cmluZykgPT4gY29sb3JBdHRyaWJ1dGUodmFsdWUsIE1yZEdlb0ljb25Db21wb25lbnQuX2NvbmZpZy5iYWNrU2VsZWN0ZWRDb2xvcil9KVxyXG4gIHB1YmxpYyBiYWNrU2VsZWN0ZWRDb2xvcjogc3RyaW5nID0gTXJkR2VvSWNvbkNvbXBvbmVudC5fY29uZmlnLmJhY2tTZWxlY3RlZENvbG9yO1xyXG5cclxuICAvKipcclxuICAgKiBEZWNra3JhZnQgZGVzIEhpbnRlcmdydW5kcyBkZXMgSWNvbnMuXHJcbiAgICpcclxuICAgKiBXZXJ0ZSB6d2lzY2hlbiAwIHVuZCAxIHNpbmQgbcO2Z2xpY2guXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRHZW9JY29uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06ICh2YWx1ZTogYW55KSA9PiBudW1iZXJBdHRyaWJ1dGUodmFsdWUsIE1yZEdlb0ljb25Db21wb25lbnQuX2NvbmZpZy5iYWNrT3BhY2l0eSl9KVxyXG4gIHB1YmxpYyBiYWNrT3BhY2l0eTogbnVtYmVyID0gTXJkR2VvSWNvbkNvbXBvbmVudC5fY29uZmlnLmJhY2tPcGFjaXR5O1xyXG5cclxuICAvKipcclxuICAgKiBEZWNra3JhZnQgZGVzIEhpbnRlcmdydW5kcyBkZXMgSWNvbnMsIHdlbm4gZXMgc2VsZWt0aWVydCBpc3QuXHJcbiAgICpcclxuICAgKiBXZXJ0ZSB6d2lzY2hlbiAwIHVuZCAxIHNpbmQgbcO2Z2xpY2guXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRHZW9JY29uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06ICh2YWx1ZTogYW55KSA9PiBudW1iZXJBdHRyaWJ1dGUodmFsdWUsIE1yZEdlb0ljb25Db21wb25lbnQuX2NvbmZpZy5iYWNrU2VsZWN0ZWRPcGFjaXR5KX0pXHJcbiAgcHVibGljIGJhY2tTZWxlY3RlZE9wYWNpdHk6IG51bWJlciA9IE1yZEdlb0ljb25Db21wb25lbnQuX2NvbmZpZy5iYWNrU2VsZWN0ZWRPcGFjaXR5O1xyXG5cclxuICAvKipcclxuICAgKiBHaWJ0IGFuLCBvYiBkYXMgSWNvbiBzZWxla3RpZXJ0IGlzdC5cclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBNcmRHZW9JY29uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgaXNTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBEYXRlbiBmw7xyIGRpZSBCYXNpcyBkZXMgSWNvbnMuXHJcbiAgICpcclxuICAgKiBAdHlwZSB7YW55W119XHJcbiAgICogQG1lbWJlcm9mIE1yZEdlb0ljb25Db21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgc2V0IGJhc2VEYXRhKHZhbHVlOiBhbnlbXSl7XHJcbiAgICB0aGlzLl9iYXNlRGF0YSA9IHZhbHVlO1xyXG4gICAgbGV0IHBhdGggPSB0aGlzLmdldFBhdGhTdHJpbmcodmFsdWUpO1xyXG4gICAgdGhpcy5iYXNlID0gcGF0aC5wcztcclxuICAgIHRoaXMudmlld0JveCA9IHBhdGgudmJzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBiYXNlRGF0YSgpOiBhbnlbXXtcclxuICAgIHJldHVybiB0aGlzLl9iYXNlRGF0YTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2Jhc2VEYXRhOiBhbnlbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGF0ZW4gZsO8ciBkaWUgMi4gRWJlbmUgZGVzIEljb25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge2FueVtdfVxyXG4gICAqIEBtZW1iZXJvZiBNcmRHZW9JY29uQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIHNldCBvdmVybGF5RGF0YSh2YWx1ZTogYW55W10pe1xyXG4gICAgdGhpcy5fYmFzZURhdGEgPSB2YWx1ZTtcclxuICAgIGxldCBwID0gdGhpcy5nZXRQYXRoU3RyaW5nKHZhbHVlKTtcclxuICAgIHRoaXMub3ZlcmxheSA9IHAucHM7XHJcblxyXG4gICAgaWYoIXZhbHVlKSB7XHJcbiAgICAgIHRoaXMuaGFzT3ZlcmxheSA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYXNPdmVybGF5ID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgb3ZlcmxheURhdGEoKTphbnlbXXtcclxuICAgIHJldHVybiB0aGlzLl9iYXNlRGF0YTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpYnQgYW4sIG9iIGRhcyBJY29uIGVpbmUgMi4gRWJlbmUgaGF0LlxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIE1yZEdlb0ljb25Db21wb25lbnRcclxuICAgKi9cclxuICBwdWJsaWMgaGFzT3ZlcmxheTpib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIEJlaW5oYWx0ZXQgZGllIERhdGVuIGRlciBlcnN0ZW4gRWJlbmUgZGVzIEljb25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTXJkR2VvSWNvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBiYXNlOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQmVpbmhhbHRldCBkaWUgRGF0ZW4gZGVyIHp3ZWl0ZW4gRWJlbmUgZGVzIEljb25zLlxyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgTXJkR2VvSWNvbkNvbXBvbmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVybGF5OiBzdHJpbmc7XHJcbiAgcHVibGljIHZpZXdCb3g6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBnZXRQYXRoU3RyaW5nKGQpOiBhbnl7XHJcbiAgICBpZighZCkge1xyXG4gICAgICByZXR1cm4ge3BzOlwiXCIsIHZiOiBbMCwwLDAsMF0sIHZiczogXCIwIDAgMSAxXCJ9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdlbm4gZGVyIHp3ZWl0ZSBMZXZlbCBlaW4gQXJyYXkgaXN0IEhhbmRlbHQgZXMgc2ljaCB1bSBkYXRlbiBtaXQgaW5zZWxmbGFlY2hlbi5cclxuICAgIC8vIERhbm4gd2lyZCBkaWUgZXJzdGUgRmxhZWNoZSB2ZXJ3ZW5kZXQgb2huZSBpbnNlbG5cclxuICAgIGlmKEFycmF5LmlzQXJyYXkoZCkgJiYgQXJyYXkuaXNBcnJheShkWzBdKSAmJiBBcnJheS5pc0FycmF5KGRbMF1bMF0pKSB7XHJcbiAgICAgICBkID0gZFswXTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdmIgPSBbMCwwLDAsMF07XHJcblxyXG4gICAgdmFyIHBzO1xyXG4gICAgZm9yKGxldCBpID0gMDtpIDwgZC5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgaWYoIXBzKSB7XHJcbiAgICAgICAgcHMgPSBcIk1cIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcys9IFwiTFwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgZGQyID0gdGhpcy5tZXJjRW5jb2RlKGRbaV1bMV0sZFtpXVswXSwxMDAsMTAwKTtcclxuICAgICAgbGV0IGQxID0gZGQyWzBdICogMzAwMDA7XHJcbiAgICAgIGxldCBkMiA9IGRkMlsxXSAqIDMwMDAwO1xyXG5cclxuXHJcbiAgICAgIGlmICh2YlswXSA9PSAwIHx8IHZiWzBdPmQxKSB7XHJcbiAgICAgICAgdmJbMF0gPSBkMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHZiWzFdID09IDAgfHwgdmJbMV0+ZDIpIHtcclxuICAgICAgICB2YlsxXSA9IGQyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodmJbMl0gPT0gMCB8fCB2YlsyXTxkMSkge1xyXG4gICAgICAgIHZiWzJdID0gZDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh2YlszXSA9PSAwIHx8IHZiWzNdPGQyKSB7XHJcbiAgICAgICAgdmJbM10gPSBkMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHMgKz0gZDEgK1wiIFwiICsgZDI7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHBzICs9IFwielwiO1xyXG4gICAgcmV0dXJuIHtwczpwcywgdmI6dmIsIHZiczogdmJbMF0gKyBcIiBcIiArIHZiWzFdICsgXCIgXCIgKyAodmJbMl0tdmJbMF0pICsgXCIgXCIgKyh2YlszXS12YlsxXSkgIH07XHJcbiAgfVxyXG5cclxuICBtZXJjRW5jb2RlKGxhdCwgbG5nLCB3LCBoKXtcclxuICAgIC8vIGdldCB4XHJcbiAgICB2YXIgeCA9IChsbmcgKyAxODApICogKHcgLyAzNjApO1xyXG4gICAgLy8gY29udmVydCBmcm9tIGRlZ3JlZXMgdG8gcmFkaWFuc1xyXG4gICAgdmFyIGxhdFJhZCA9IGxhdCAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAvLyBnZXQgeSB2YWx1ZVxyXG4gICAgdmFyIG1lcmNOID0gTWF0aC5sb2coTWF0aC50YW4oKE1hdGguUEkgLyA0KSArIChsYXRSYWQgLyAyKSkpO1xyXG4gICAgdmFyIHkgPSAoaCAvIDIpIC0gKHcgKiBtZXJjTiAvICgyICogTWF0aC5QSSkpO1xyXG4gICAgcmV0dXJuIFt4LHldO1xyXG4gIH1cclxufVxyXG4iLCI8c3ZnIGNsYXNzPVwiZ2VvaWNvblwiIFthdHRyLnZpZXdCb3hdPVwidmlld0JveFwiXHJcbiAgW3N0eWxlLi0td2lkdGhdPVwid2lkdGhcIlxyXG4gIFtzdHlsZS4tLWhlaWdodF09XCJoZWlnaHRcIlxyXG4gIFtzdHlsZS4tLW1hcmdpbl09XCJtYXJnaW5cIlxyXG4gIFtzdHlsZS4tLXRyYW5zaXRpb25UaW1lXT1cInRyYW5zaXRpb25UaW1lXCJcclxuICBbc3R5bGUuLS1tYWluQ29sb3JdPVwibWFpbkNvbG9yXCJcclxuICBbc3R5bGUuLS1tYWluU2VsZWN0ZWRDb2xvcl09XCJtYWluU2VsZWN0ZWRDb2xvclwiXHJcbiAgW3N0eWxlLi0tYmFja0NvbG9yXT1cImJhY2tDb2xvclwiXHJcbiAgW3N0eWxlLi0tYmFja1NlbGVjdGVkQ29sb3JdPVwiYmFja1NlbGVjdGVkQ29sb3JcIlxyXG4gIFtzdHlsZS4tLW92ZXJDb2xvcl09XCJvdmVybGF5Q29sb3JcIlxyXG4gIFtzdHlsZS4tLW92ZXJTZWxlY3RlZENvbG9yXT1cIm92ZXJsYXlTZWxlY3RlZENvbG9yXCJcclxuICBbc3R5bGUuLS1tYWluT3BhY2l0eV09XCJtYWluT3BhY2l0eVwiXHJcbiAgW3N0eWxlLi0tbWFpblNlbGVjdGVkT3BhY2l0eV09XCJtYWluU2VsZWN0ZWRPcGFjaXR5XCJcclxuICBbc3R5bGUuLS1iYWNrT3BhY2l0eV09XCJiYWNrT3BhY2l0eVwiXHJcbiAgW3N0eWxlLi0tYmFja1NlbGVjdGVkT3BhY2l0eV09XCJiYWNrU2VsZWN0ZWRPcGFjaXR5XCJcclxuICBbc3R5bGUuLS1vdmVyT3BhY2l0eV09XCJvdmVybGF5T3BhY2l0eVwiXHJcbiAgW3N0eWxlLi0tb3ZlclNlbGVjdGVkT3BhY2l0eV09XCJvdmVybGF5U2VsZWN0ZWRPcGFjaXR5XCJcclxuICA+XHJcbiAgPGc+XHJcbiAgICA8cGF0aCBbYXR0ci5kXT1cImJhc2VcIiBbbmdDbGFzc109XCJ7J3NlbGVjdGVkJzogaXNTZWxlY3RlZCwgJ21haW4nOiAhaGFzT3ZlcmxheSwgJ2JhY2snOmhhc092ZXJsYXl9XCIgPjwvcGF0aD5cclxuICAgIDxwYXRoIFthdHRyLmRdPVwib3ZlcmxheVwiIFtuZ0NsYXNzXT1cInsnc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLCAnb3Zlcic6IGhhc092ZXJsYXl9XCI+PC9wYXRoPlxyXG4gIDwvZz5cclxuPC9zdmc+XHJcbiJdfQ==