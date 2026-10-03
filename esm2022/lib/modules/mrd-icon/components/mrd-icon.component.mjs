import { DOCUMENT } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, Inject, inject, InjectionToken, Input } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { sizeAttribute } from '../../../common/transforms/size-transform';
import { ConfigUtil } from '../../../common/util/config.util';
import { iconColorAttribute } from '../common/transforms/icon-color-transform';
import * as i0 from "@angular/core";
import * as i1 from "../../../common/service/mrd-icon-registry.service";
import * as i2 from "../../../common/service/mrd-icon-symbol-registry.service";
const _c0 = ["*"];
/**
 * Injection token used to provide the current location to `MatIcon`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * @docs-private
 */
export const MRD_ICON_LOCATION = new InjectionToken('mrd-icon-location', {
    providedIn: 'root',
    factory: MRD_ICON_LOCATION_FACTORY,
});
/** @docs-private */
export function MRD_ICON_LOCATION_FACTORY() {
    const _document = inject(DOCUMENT);
    const _location = _document ? _document.location : null;
    return {
        // Note that this needs to be a function, rather than a property, because Angular
        // will only resolve it once, but we want the current path on each call.
        getPathname: () => (_location ? _location.pathname + _location.search : ''),
    };
}
/** SVG attributes that accept a FuncIRI (e.g. `url(<something>)`). */
const funcIriAttributes = [
    'clip-path',
    'color-profile',
    'src',
    'cursor',
    'fill',
    'filter',
    'marker',
    'marker-start',
    'marker-mid',
    'marker-end',
    'mask',
    'stroke',
];
/** Selector that can be used to find all elements that are using a `FuncIRI`. */
const funcIriAttributeSelector = funcIriAttributes.map(attr => `[${attr}]`).join(', ');
/** Regex that can be used to extract the id out of a FuncIRI. */
const funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
/** Inputs, die das Icon aus der IconFactory bestimmen */
const FACTORY_INPUTS = ['icon', 'outline', 'full', 'dashed', 'color', 'innerColor', 'outerColor', 'direction'];
/**
 * Zeigt ein Icon an:
 * - `icon="bearbeiten" outline` baut es aus der IconFactory, ohne Registrierung und ohne HTTP;
 *   die Farbe ist standardmaessig die Textfarbe der Umgebung (`currentColor`)
 * - `svgIcon="name"` bzw. `svgIcon="namespace:name"` holt ein in der MrdIconRegistry registriertes Icon;
 *   die Factory-Symbole stehen dort unter `mrd:<symbol>[-outline|-full|-dashed][-up|-down|-left]` bereit
 * Ist `icon` gesetzt, hat es Vorrang vor `svgIcon`.
 */
export class MrdIconComponent {
    _elementRef;
    _location;
    _errorHandler;
    _iconRegistry;
    _symbolRegistry;
    /** Name of the icon in the SVG icon set. */
    get svgIcon() {
        return this._svgIcon;
    }
    set svgIcon(value) {
        if (value !== this._svgIcon) {
            // Ein Factory-Icon hat Vorrang; der Wert wird gemerkt, falls `icon` spaeter entfernt wird
            if (!this.icon) {
                if (value) {
                    this._updateSvgIcon(value);
                }
                else if (this._svgIcon) {
                    this._clearSvgElement();
                }
            }
            this._svgIcon = value;
        }
    }
    _svgIcon;
    /** Symbol aus der IconFactory, z. B. `bearbeiten`, `pfeil` oder ein per `provideMrdIcons({symbols})` registriertes */
    icon;
    /** Kreis-Umriss um das Symbol */
    outline = false;
    /** Gefuellter Kreis; das Symbol ist darauf standardmaessig weiss */
    full = false;
    /** Gestrichelter Kreis */
    dashed = false;
    /**
     * Farbe fuer Rahmen und Symbol; ohne Angabe die Textfarbe der Umgebung.
     * Bei `svgIcon` wird sie als Textfarbe gesetzt und faerbt nur Teile mit `currentColor`, fest eingetragene Farben bleiben.
     */
    color;
    innerColor;
    outerColor;
    /** Drehung des Symbols, z. B. fuer Pfeile */
    direction;
    /** Kantenlaenge, z. B. `24`, `"1.5em"`; Standard bei `icon` aus der Config, bei `svgIcon` ohne Angabe wie bisher keine */
    size;
    _svgName;
    _svgNamespace;
    /** Keeps track of the current page path. */
    _previousPath;
    /** Keeps track of the elements and attributes that we've prefixed with the current path. */
    _elementsWithExternalReferences;
    /** Subscription to the current in-progress SVG icon request. */
    _currentIconFetch = Subscription.EMPTY;
    constructor(_elementRef, _location, _errorHandler, _iconRegistry, _symbolRegistry) {
        this._elementRef = _elementRef;
        this._location = _location;
        this._errorHandler = _errorHandler;
        this._iconRegistry = _iconRegistry;
        this._symbolRegistry = _symbolRegistry;
    }
    ngOnChanges(changes) {
        if (!FACTORY_INPUTS.some(input => input in changes)) {
            return;
        }
        if (this.icon) {
            this._factoryIconAnzeigen();
        }
        else if ('icon' in changes && !changes['icon'].firstChange) {
            // icon wurde entfernt: auf svgIcon zurueckfallen
            if (this._svgIcon) {
                this._updateSvgIcon(this._svgIcon);
            }
            else {
                this._clearSvgElement();
            }
        }
    }
    get aktuelleGroesse() {
        return this.size || (this.icon ? ConfigUtil.getConfig().icon.size : null);
    }
    get _rahmen() {
        if (this.full) {
            return 'full';
        }
        if (this.dashed) {
            return 'dashed';
        }
        return this.outline ? 'outline' : undefined;
    }
    _factoryIconAnzeigen() {
        this._currentIconFetch.unsubscribe();
        try {
            const svg = this._symbolRegistry.createSvg({
                symbol: this.icon,
                outer: this._rahmen,
                color: this.color,
                innerColor: this.innerColor,
                outerColor: this.outerColor,
                direction: this.direction
            });
            this._setSvgElement(this._iconRegistry.createSvgElementFromTrustedString(svg));
        }
        catch (fehler) {
            this._clearSvgElement();
            this._errorHandler.handleError(fehler);
        }
    }
    _setSvgElement(svg) {
        this._clearSvgElement();
        // Note: we do this fix here, rather than the icon registry, because the
        // references have to point to the URL at the time that the icon was created.
        const path = this._location.getPathname();
        this._previousPath = path;
        this._cacheChildrenWithExternalReferences(svg);
        this._prependPathToReferences(path);
        this._elementRef.nativeElement.appendChild(svg);
    }
    _clearSvgElement() {
        const layoutElement = this._elementRef.nativeElement;
        let childCount = layoutElement.childNodes.length;
        if (this._elementsWithExternalReferences) {
            this._elementsWithExternalReferences.clear();
        }
        // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
        // we can't use innerHTML, because IE will throw if the element has a data binding.
        while (childCount--) {
            const child = layoutElement.childNodes[childCount];
            // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
            // of any loose text nodes, as well as any SVG elements in order to remove any old icons.
            if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
                child.remove();
            }
        }
    }
    /**
     * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
     * reference. This is required because WebKit browsers require references to be prefixed with
     * the current path, if the page has a `base` tag.
     */
    _prependPathToReferences(path) {
        const elements = this._elementsWithExternalReferences;
        if (elements) {
            elements.forEach((attrs, element) => {
                attrs.forEach(attr => {
                    element.setAttribute(attr.name, `url('${path}#${attr.value}')`);
                });
            });
        }
    }
    /**
     * Caches the children of an SVG element that have `url()`
     * references that we need to prefix with the current path.
     */
    _cacheChildrenWithExternalReferences(element) {
        const elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
        const elements = (this._elementsWithExternalReferences =
            this._elementsWithExternalReferences || new Map());
        for (let i = 0; i < elementsWithFuncIri.length; i++) {
            funcIriAttributes.forEach(attr => {
                const elementWithReference = elementsWithFuncIri[i];
                const value = elementWithReference.getAttribute(attr);
                const match = value ? value.match(funcIriPattern) : null;
                if (match) {
                    let attributes = elements.get(elementWithReference);
                    if (!attributes) {
                        attributes = [];
                        elements.set(elementWithReference, attributes);
                    }
                    attributes.push({ name: attr, value: match[1] });
                }
            });
        }
    }
    /** Sets a new SVG icon with a particular name. */
    _updateSvgIcon(rawName) {
        this._svgNamespace = null;
        this._svgName = null;
        this._currentIconFetch.unsubscribe();
        if (rawName) {
            const [namespace, iconName] = this._splitIconName(rawName);
            if (namespace) {
                this._svgNamespace = namespace;
            }
            if (iconName) {
                this._svgName = iconName;
            }
            this._currentIconFetch = this._iconRegistry
                .getNamedSvgIcon(iconName, namespace)
                .pipe(take(1))
                .subscribe(svg => this._setSvgElement(svg), (err) => {
                const errorMessage = `Error retrieving icon ${namespace}:${iconName}! ${err.message}`;
                this._errorHandler.handleError(new Error(errorMessage));
            });
        }
    }
    /**
     * Splits an svgIcon binding value into its icon set and icon name components.
     * Returns a 2-element array of [(icon set), (icon name)].
     * The separator for the two fields is ':'. If there is no separator, an empty
     * string is returned for the icon set and the entire value is returned for
     * the icon name. If the argument is falsy, returns an array of two empty strings.
     * Throws an error if the name contains two or more ':' separators.
     * Examples:
     *   `'social:cake' -> ['social', 'cake']
     *   'penguin' -> ['', 'penguin']
     *   null -> ['', '']
     *   'a:b:c' -> (throws Error)`
     */
    _splitIconName(iconName) {
        if (!iconName) {
            return ['', ''];
        }
        const parts = iconName.split(':');
        switch (parts.length) {
            case 1:
                return ['', parts[0]]; // Use default namespace.
            case 2:
                return parts;
            default:
                throw Error(`Invalid icon name: "${iconName}"`); // TODO: add an ngDevMode check
        }
    }
    /** @nocollapse */ static ɵfac = function MrdIconComponent_Factory(t) { return new (t || MrdIconComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(MRD_ICON_LOCATION), i0.ɵɵdirectiveInject(i0.ErrorHandler), i0.ɵɵdirectiveInject(i1.MrdIconRegistryService), i0.ɵɵdirectiveInject(i2.MrdIconSymbolRegistryService)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdIconComponent, selectors: [["mrd-icon"]], hostAttrs: ["role", "img", "aria-hidden", "true"], hostVars: 6, hostBindings: function MrdIconComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("--mrd-icon-size", ctx.aktuelleGroesse)("color", !ctx.icon ? ctx.color : null);
            i0.ɵɵclassProp("mrd-icon-sized", !!ctx.aktuelleGroesse);
        } }, inputs: { svgIcon: "svgIcon", icon: "icon", outline: ["outline", "outline", booleanAttribute], full: ["full", "full", booleanAttribute], dashed: ["dashed", "dashed", booleanAttribute], color: ["color", "color", iconColorAttribute], innerColor: ["innerColor", "innerColor", iconColorAttribute], outerColor: ["outerColor", "outerColor", iconColorAttribute], direction: "direction", size: ["size", "size", sizeAttribute] }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MrdIconComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, styles: [".mrd-icon-sized[_nghost-%COMP%]{display:inline-flex;flex-shrink:0;box-sizing:border-box;width:var(--mrd-icon-size);height:var(--mrd-icon-size);line-height:0;vertical-align:middle}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdIconComponent, [{
        type: Component,
        args: [{ selector: 'mrd-icon', host: {
                    'role': 'img',
                    'aria-hidden': 'true',
                    '[class.mrd-icon-sized]': '!!aktuelleGroesse',
                    '[style.--mrd-icon-size]': 'aktuelleGroesse',
                    // Registry-Icons werden unveraendert eingehaengt; ueber die Textfarbe wirkt `color` auf deren `currentColor`
                    '[style.color]': '!icon ? color : null'
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>\r\n", styles: [":host(.mrd-icon-sized){display:inline-flex;flex-shrink:0;box-sizing:border-box;width:var(--mrd-icon-size);height:var(--mrd-icon-size);line-height:0;vertical-align:middle}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MRD_ICON_LOCATION]
            }] }, { type: i0.ErrorHandler }, { type: i1.MrdIconRegistryService }, { type: i2.MrdIconSymbolRegistryService }]; }, { svgIcon: [{
            type: Input
        }], icon: [{
            type: Input
        }], outline: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], full: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], dashed: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], color: [{
            type: Input,
            args: [{ transform: iconColorAttribute }]
        }], innerColor: [{
            type: Input,
            args: [{ transform: iconColorAttribute }]
        }], outerColor: [{
            type: Input,
            args: [{ transform: iconColorAttribute }]
        }], direction: [{
            type: Input
        }], size: [{
            type: Input,
            args: [{ transform: sizeAttribute }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1pY29uL2NvbXBvbmVudHMvbXJkLWljb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1pY29uL2NvbXBvbmVudHMvbXJkLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQTRCLE1BQU0sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDaEwsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7QUFHL0U7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLElBQUksY0FBYyxDQUFrQixtQkFBbUIsRUFBRTtJQUN4RixVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUseUJBQXlCO0NBQ25DLENBQUMsQ0FBQztBQVVILG9CQUFvQjtBQUNwQixNQUFNLFVBQVUseUJBQXlCO0lBQ3ZDLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FB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QUdoQixnQkFBZ0IsZ0NBR2hCLGdCQUFnQiw2QkFNaEIsa0JBQWtCLDRDQUVsQixrQkFBa0IsNENBRWxCLGtCQUFrQixrREFNbEIsYUFBYTs7WUN4SWxDLGtCQUF5Qjs7O3VGRHdGWixnQkFBZ0I7Y0FkNUIsU0FBUzsyQkFDRSxVQUFVLFFBR2Q7b0JBQ0osTUFBTSxFQUFFLEtBQUs7b0JBQ2IsYUFBYSxFQUFFLE1BQU07b0JBQ3JCLHdCQUF3QixFQUFFLG1CQUFtQjtvQkFDN0MseUJBQXlCLEVBQUUsaUJBQWlCO29CQUM1Qyw2R0FBNkc7b0JBQzdHLGVBQWUsRUFBRSxzQkFBc0I7aUJBQ3hDLG1CQUNnQix1QkFBdUIsQ0FBQyxNQUFNOztzQkFrRTVDLE1BQU07dUJBQUMsaUJBQWlCO21JQTVEdkIsT0FBTztrQkFEVixLQUFLO1lBb0JHLElBQUk7a0JBQVosS0FBSztZQUdnQyxPQUFPO2tCQUE1QyxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBR0UsSUFBSTtrQkFBekMsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUdFLE1BQU07a0JBQTNDLEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFNSSxLQUFLO2tCQUE1QyxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBRUUsVUFBVTtrQkFBakQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUVFLFVBQVU7a0JBQWpELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFHN0IsU0FBUztrQkFBakIsS0FBSztZQUc2QixJQUFJO2tCQUF0QyxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGFBQWEsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgYm9vbGVhbkF0dHJpYnV0ZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXJyb3JIYW5kbGVyLCBJbmplY3QsIGluamVjdCwgSW5qZWN0aW9uVG9rZW4sIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCB0YWtlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1yZEljb25SZWdpc3RyeVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZS9tcmQtaWNvbi1yZWdpc3RyeS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTXJkSWNvbk91dGVyLCBNcmRJY29uU3ltYm9sLCBNcmRJY29uU3ltYm9sUmVnaXN0cnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2UvbXJkLWljb24tc3ltYm9sLXJlZ2lzdHJ5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJY29uRGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2UvaWNvbi1mYWN0b3J5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBzaXplQXR0cmlidXRlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybXMvc2l6ZS10cmFuc2Zvcm0nO1xyXG5pbXBvcnQgeyBDb25maWdVdGlsIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWwvY29uZmlnLnV0aWwnO1xyXG5pbXBvcnQgeyBpY29uQ29sb3JBdHRyaWJ1dGUgfSBmcm9tICcuLi9jb21tb24vdHJhbnNmb3Jtcy9pY29uLWNvbG9yLXRyYW5zZm9ybSc7XHJcblxyXG5cclxuLyoqXHJcbiAqIEluamVjdGlvbiB0b2tlbiB1c2VkIHRvIHByb3ZpZGUgdGhlIGN1cnJlbnQgbG9jYXRpb24gdG8gYE1hdEljb25gLlxyXG4gKiBVc2VkIHRvIGhhbmRsZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgYW5kIHRvIHN0dWIgb3V0IGR1cmluZyB1bml0IHRlc3RzLlxyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTVJEX0lDT05fTE9DQVRJT04gPSBuZXcgSW5qZWN0aW9uVG9rZW48TXJkSWNvbkxvY2F0aW9uPignbXJkLWljb24tbG9jYXRpb24nLCB7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG4gIGZhY3Rvcnk6IE1SRF9JQ09OX0xPQ0FUSU9OX0ZBQ1RPUlksXHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFN0dWJiZWQgb3V0IGxvY2F0aW9uIGZvciBgTWF0SWNvbmAuXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXJkSWNvbkxvY2F0aW9uIHtcclxuICBnZXRQYXRobmFtZTogKCkgPT4gc3RyaW5nO1xyXG59XHJcblxyXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gTVJEX0lDT05fTE9DQVRJT05fRkFDVE9SWSgpOiBNcmRJY29uTG9jYXRpb24ge1xyXG4gIGNvbnN0IF9kb2N1bWVudCA9IGluamVjdChET0NVTUVOVCk7XHJcbiAgY29uc3QgX2xvY2F0aW9uID0gX2RvY3VtZW50ID8gX2RvY3VtZW50LmxvY2F0aW9uIDogbnVsbDtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC8vIE5vdGUgdGhhdCB0aGlzIG5lZWRzIHRvIGJlIGEgZnVuY3Rpb24sIHJhdGhlciB0aGFuIGEgcHJvcGVydHksIGJlY2F1c2UgQW5ndWxhclxyXG4gICAgLy8gd2lsbCBvbmx5IHJlc29sdmUgaXQgb25jZSwgYnV0IHdlIHdhbnQgdGhlIGN1cnJlbnQgcGF0aCBvbiBlYWNoIGNhbGwuXHJcbiAgICBnZXRQYXRobmFtZTogKCkgPT4gKF9sb2NhdGlvbiA/IF9sb2NhdGlvbi5wYXRobmFtZSArIF9sb2NhdGlvbi5zZWFyY2ggOiAnJyksXHJcbiAgfTtcclxufVxyXG5cclxuLyoqIFNWRyBhdHRyaWJ1dGVzIHRoYXQgYWNjZXB0IGEgRnVuY0lSSSAoZS5nLiBgdXJsKDxzb21ldGhpbmc+KWApLiAqL1xyXG5jb25zdCBmdW5jSXJpQXR0cmlidXRlcyA9IFtcclxuICAnY2xpcC1wYXRoJyxcclxuICAnY29sb3ItcHJvZmlsZScsXHJcbiAgJ3NyYycsXHJcbiAgJ2N1cnNvcicsXHJcbiAgJ2ZpbGwnLFxyXG4gICdmaWx0ZXInLFxyXG4gICdtYXJrZXInLFxyXG4gICdtYXJrZXItc3RhcnQnLFxyXG4gICdtYXJrZXItbWlkJyxcclxuICAnbWFya2VyLWVuZCcsXHJcbiAgJ21hc2snLFxyXG4gICdzdHJva2UnLFxyXG5dO1xyXG4vKiogU2VsZWN0b3IgdGhhdCBjYW4gYmUgdXNlZCB0byBmaW5kIGFsbCBlbGVtZW50cyB0aGF0IGFyZSB1c2luZyBhIGBGdW5jSVJJYC4gKi9cclxuY29uc3QgZnVuY0lyaUF0dHJpYnV0ZVNlbGVjdG9yID0gZnVuY0lyaUF0dHJpYnV0ZXMubWFwKGF0dHIgPT4gYFske2F0dHJ9XWApLmpvaW4oJywgJyk7XHJcblxyXG4vKiogUmVnZXggdGhhdCBjYW4gYmUgdXNlZCB0byBleHRyYWN0IHRoZSBpZCBvdXQgb2YgYSBGdW5jSVJJLiAqL1xyXG5jb25zdCBmdW5jSXJpUGF0dGVybiA9IC9edXJsXFwoWydcIl0/IyguKj8pWydcIl0/XFwpJC87XHJcblxyXG5cclxuLyoqIElucHV0cywgZGllIGRhcyBJY29uIGF1cyBkZXIgSWNvbkZhY3RvcnkgYmVzdGltbWVuICovXHJcbmNvbnN0IEZBQ1RPUllfSU5QVVRTID0gWydpY29uJywgJ291dGxpbmUnLCAnZnVsbCcsICdkYXNoZWQnLCAnY29sb3InLCAnaW5uZXJDb2xvcicsICdvdXRlckNvbG9yJywgJ2RpcmVjdGlvbiddO1xyXG5cclxuLyoqXHJcbiAqIFplaWd0IGVpbiBJY29uIGFuOlxyXG4gKiAtIGBpY29uPVwiYmVhcmJlaXRlblwiIG91dGxpbmVgIGJhdXQgZXMgYXVzIGRlciBJY29uRmFjdG9yeSwgb2huZSBSZWdpc3RyaWVydW5nIHVuZCBvaG5lIEhUVFA7XHJcbiAqICAgZGllIEZhcmJlIGlzdCBzdGFuZGFyZG1hZXNzaWcgZGllIFRleHRmYXJiZSBkZXIgVW1nZWJ1bmcgKGBjdXJyZW50Q29sb3JgKVxyXG4gKiAtIGBzdmdJY29uPVwibmFtZVwiYCBiencuIGBzdmdJY29uPVwibmFtZXNwYWNlOm5hbWVcImAgaG9sdCBlaW4gaW4gZGVyIE1yZEljb25SZWdpc3RyeSByZWdpc3RyaWVydGVzIEljb247XHJcbiAqICAgZGllIEZhY3RvcnktU3ltYm9sZSBzdGVoZW4gZG9ydCB1bnRlciBgbXJkOjxzeW1ib2w+Wy1vdXRsaW5lfC1mdWxsfC1kYXNoZWRdWy11cHwtZG93bnwtbGVmdF1gIGJlcmVpdFxyXG4gKiBJc3QgYGljb25gIGdlc2V0enQsIGhhdCBlcyBWb3JyYW5nIHZvciBgc3ZnSWNvbmAuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yZC1pY29uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWljb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC1pY29uLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgaG9zdDoge1xyXG4gICAgJ3JvbGUnOiAnaW1nJyxcclxuICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcclxuICAgICdbY2xhc3MubXJkLWljb24tc2l6ZWRdJzogJyEhYWt0dWVsbGVHcm9lc3NlJyxcclxuICAgICdbc3R5bGUuLS1tcmQtaWNvbi1zaXplXSc6ICdha3R1ZWxsZUdyb2Vzc2UnLFxyXG4gICAgLy8gUmVnaXN0cnktSWNvbnMgd2VyZGVuIHVudmVyYWVuZGVydCBlaW5nZWhhZW5ndDsgdWViZXIgZGllIFRleHRmYXJiZSB3aXJrdCBgY29sb3JgIGF1ZiBkZXJlbiBgY3VycmVudENvbG9yYFxyXG4gICAgJ1tzdHlsZS5jb2xvcl0nOiAnIWljb24gPyBjb2xvciA6IG51bGwnXHJcbiAgfSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJkSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gIC8qKiBOYW1lIG9mIHRoZSBpY29uIGluIHRoZSBTVkcgaWNvbiBzZXQuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgc3ZnSWNvbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N2Z0ljb247XHJcbiAgfVxyXG4gIHNldCBzdmdJY29uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fc3ZnSWNvbikge1xyXG4gICAgICAvLyBFaW4gRmFjdG9yeS1JY29uIGhhdCBWb3JyYW5nOyBkZXIgV2VydCB3aXJkIGdlbWVya3QsIGZhbGxzIGBpY29uYCBzcGFldGVyIGVudGZlcm50IHdpcmRcclxuICAgICAgaWYgKCF0aGlzLmljb24pIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgIHRoaXMuX3VwZGF0ZVN2Z0ljb24odmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3ZnSWNvbikge1xyXG4gICAgICAgICAgdGhpcy5fY2xlYXJTdmdFbGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX3N2Z0ljb24gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgcHJpdmF0ZSBfc3ZnSWNvbjogc3RyaW5nO1xyXG5cclxuICAvKiogU3ltYm9sIGF1cyBkZXIgSWNvbkZhY3RvcnksIHouIEIuIGBiZWFyYmVpdGVuYCwgYHBmZWlsYCBvZGVyIGVpbiBwZXIgYHByb3ZpZGVNcmRJY29ucyh7c3ltYm9sc30pYCByZWdpc3RyaWVydGVzICovXHJcbiAgQElucHV0KCkgaWNvbjogTXJkSWNvblN5bWJvbDtcclxuXHJcbiAgLyoqIEtyZWlzLVVtcmlzcyB1bSBkYXMgU3ltYm9sICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBvdXRsaW5lOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiBHZWZ1ZWxsdGVyIEtyZWlzOyBkYXMgU3ltYm9sIGlzdCBkYXJhdWYgc3RhbmRhcmRtYWVzc2lnIHdlaXNzICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBmdWxsOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiBHZXN0cmljaGVsdGVyIEtyZWlzICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBkYXNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRmFyYmUgZnVlciBSYWhtZW4gdW5kIFN5bWJvbDsgb2huZSBBbmdhYmUgZGllIFRleHRmYXJiZSBkZXIgVW1nZWJ1bmcuXHJcbiAgICogQmVpIGBzdmdJY29uYCB3aXJkIHNpZSBhbHMgVGV4dGZhcmJlIGdlc2V0enQgdW5kIGZhZXJidCBudXIgVGVpbGUgbWl0IGBjdXJyZW50Q29sb3JgLCBmZXN0IGVpbmdldHJhZ2VuZSBGYXJiZW4gYmxlaWJlbi5cclxuICAgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogaWNvbkNvbG9yQXR0cmlidXRlfSkgY29sb3I6IHN0cmluZztcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGljb25Db2xvckF0dHJpYnV0ZX0pIGlubmVyQ29sb3I6IHN0cmluZztcclxuXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IGljb25Db2xvckF0dHJpYnV0ZX0pIG91dGVyQ29sb3I6IHN0cmluZztcclxuXHJcbiAgLyoqIERyZWh1bmcgZGVzIFN5bWJvbHMsIHouIEIuIGZ1ZXIgUGZlaWxlICovXHJcbiAgQElucHV0KCkgZGlyZWN0aW9uOiBJY29uRGlyZWN0aW9uIHwgbnVtYmVyO1xyXG5cclxuICAvKiogS2FudGVubGFlbmdlLCB6LiBCLiBgMjRgLCBgXCIxLjVlbVwiYDsgU3RhbmRhcmQgYmVpIGBpY29uYCBhdXMgZGVyIENvbmZpZywgYmVpIGBzdmdJY29uYCBvaG5lIEFuZ2FiZSB3aWUgYmlzaGVyIGtlaW5lICovXHJcbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBzaXplOiBzdHJpbmc7XHJcblxyXG4gIF9zdmdOYW1lOiBzdHJpbmcgfCBudWxsO1xyXG4gIF9zdmdOYW1lc3BhY2U6IHN0cmluZyB8IG51bGw7XHJcblxyXG4gIC8qKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBwYWdlIHBhdGguICovXHJcbiAgcHJpdmF0ZSBfcHJldmlvdXNQYXRoPzogc3RyaW5nO1xyXG5cclxuICAvKiogS2VlcHMgdHJhY2sgb2YgdGhlIGVsZW1lbnRzIGFuZCBhdHRyaWJ1dGVzIHRoYXQgd2UndmUgcHJlZml4ZWQgd2l0aCB0aGUgY3VycmVudCBwYXRoLiAqL1xyXG4gIHByaXZhdGUgX2VsZW1lbnRzV2l0aEV4dGVybmFsUmVmZXJlbmNlcz86IE1hcDxFbGVtZW50LCB7bmFtZTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nfVtdPjtcclxuXHJcbiAgLyoqIFN1YnNjcmlwdGlvbiB0byB0aGUgY3VycmVudCBpbi1wcm9ncmVzcyBTVkcgaWNvbiByZXF1ZXN0LiAqL1xyXG4gIHByaXZhdGUgX2N1cnJlbnRJY29uRmV0Y2ggPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXHJcbiAgICBASW5qZWN0KE1SRF9JQ09OX0xPQ0FUSU9OKSBwcml2YXRlIF9sb2NhdGlvbjogTXJkSWNvbkxvY2F0aW9uLFxyXG4gICAgcHJpdmF0ZSBfZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIsXHJcbiAgICBwcml2YXRlIF9pY29uUmVnaXN0cnk6IE1yZEljb25SZWdpc3RyeVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9zeW1ib2xSZWdpc3RyeTogTXJkSWNvblN5bWJvbFJlZ2lzdHJ5U2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmICghRkFDVE9SWV9JTlBVVFMuc29tZShpbnB1dCA9PiBpbnB1dCBpbiBjaGFuZ2VzKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pY29uKSB7XHJcbiAgICAgIHRoaXMuX2ZhY3RvcnlJY29uQW56ZWlnZW4oKTtcclxuICAgIH0gZWxzZSBpZiAoJ2ljb24nIGluIGNoYW5nZXMgJiYgIWNoYW5nZXNbJ2ljb24nXS5maXJzdENoYW5nZSkge1xyXG4gICAgICAvLyBpY29uIHd1cmRlIGVudGZlcm50OiBhdWYgc3ZnSWNvbiB6dXJ1ZWNrZmFsbGVuXHJcbiAgICAgIGlmICh0aGlzLl9zdmdJY29uKSB7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlU3ZnSWNvbih0aGlzLl9zdmdJY29uKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9jbGVhclN2Z0VsZW1lbnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBha3R1ZWxsZUdyb2Vzc2UoKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5zaXplIHx8ICh0aGlzLmljb24gPyBDb25maWdVdGlsLmdldENvbmZpZygpLmljb24uc2l6ZSA6IG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgX3JhaG1lbigpOiBNcmRJY29uT3V0ZXIgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKHRoaXMuZnVsbCkge1xyXG4gICAgICByZXR1cm4gJ2Z1bGwnO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGFzaGVkKSB7XHJcbiAgICAgIHJldHVybiAnZGFzaGVkJztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLm91dGxpbmUgPyAnb3V0bGluZScgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9mYWN0b3J5SWNvbkFuemVpZ2VuKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY3VycmVudEljb25GZXRjaC51bnN1YnNjcmliZSgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgc3ZnID0gdGhpcy5fc3ltYm9sUmVnaXN0cnkuY3JlYXRlU3ZnKHtcclxuICAgICAgICBzeW1ib2w6IHRoaXMuaWNvbixcclxuICAgICAgICBvdXRlcjogdGhpcy5fcmFobWVuLFxyXG4gICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxyXG4gICAgICAgIGlubmVyQ29sb3I6IHRoaXMuaW5uZXJDb2xvcixcclxuICAgICAgICBvdXRlckNvbG9yOiB0aGlzLm91dGVyQ29sb3IsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0aGlzLmRpcmVjdGlvblxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fc2V0U3ZnRWxlbWVudCh0aGlzLl9pY29uUmVnaXN0cnkuY3JlYXRlU3ZnRWxlbWVudEZyb21UcnVzdGVkU3RyaW5nKHN2ZykpO1xyXG4gICAgfSBjYXRjaCAoZmVobGVyKSB7XHJcbiAgICAgIHRoaXMuX2NsZWFyU3ZnRWxlbWVudCgpO1xyXG4gICAgICB0aGlzLl9lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZmVobGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NldFN2Z0VsZW1lbnQoc3ZnOiBTVkdFbGVtZW50KSB7XHJcbiAgICB0aGlzLl9jbGVhclN2Z0VsZW1lbnQoKTtcclxuXHJcbiAgICAvLyBOb3RlOiB3ZSBkbyB0aGlzIGZpeCBoZXJlLCByYXRoZXIgdGhhbiB0aGUgaWNvbiByZWdpc3RyeSwgYmVjYXVzZSB0aGVcclxuICAgIC8vIHJlZmVyZW5jZXMgaGF2ZSB0byBwb2ludCB0byB0aGUgVVJMIGF0IHRoZSB0aW1lIHRoYXQgdGhlIGljb24gd2FzIGNyZWF0ZWQuXHJcbiAgICBjb25zdCBwYXRoID0gdGhpcy5fbG9jYXRpb24uZ2V0UGF0aG5hbWUoKTtcclxuICAgIHRoaXMuX3ByZXZpb3VzUGF0aCA9IHBhdGg7XHJcbiAgICB0aGlzLl9jYWNoZUNoaWxkcmVuV2l0aEV4dGVybmFsUmVmZXJlbmNlcyhzdmcpO1xyXG4gICAgdGhpcy5fcHJlcGVuZFBhdGhUb1JlZmVyZW5jZXMocGF0aCk7XHJcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoc3ZnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NsZWFyU3ZnRWxlbWVudCgpIHtcclxuICAgIGNvbnN0IGxheW91dEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgbGV0IGNoaWxkQ291bnQgPSBsYXlvdXRFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoO1xyXG5cclxuICAgIGlmICh0aGlzLl9lbGVtZW50c1dpdGhFeHRlcm5hbFJlZmVyZW5jZXMpIHtcclxuICAgICAgdGhpcy5fZWxlbWVudHNXaXRoRXh0ZXJuYWxSZWZlcmVuY2VzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIGV4aXN0aW5nIG5vbi1lbGVtZW50IGNoaWxkIG5vZGVzIGFuZCBTVkdzLCBhbmQgYWRkIHRoZSBuZXcgU1ZHIGVsZW1lbnQuIE5vdGUgdGhhdFxyXG4gICAgLy8gd2UgY2FuJ3QgdXNlIGlubmVySFRNTCwgYmVjYXVzZSBJRSB3aWxsIHRocm93IGlmIHRoZSBlbGVtZW50IGhhcyBhIGRhdGEgYmluZGluZy5cclxuICAgIHdoaWxlIChjaGlsZENvdW50LS0pIHtcclxuICAgICAgY29uc3QgY2hpbGQgPSBsYXlvdXRFbGVtZW50LmNoaWxkTm9kZXNbY2hpbGRDb3VudF07XHJcblxyXG4gICAgICAvLyAxIGNvcnJlc3BvbmRzIHRvIE5vZGUuRUxFTUVOVF9OT0RFLiBXZSByZW1vdmUgYWxsIG5vbi1lbGVtZW50IG5vZGVzIGluIG9yZGVyIHRvIGdldCByaWRcclxuICAgICAgLy8gb2YgYW55IGxvb3NlIHRleHQgbm9kZXMsIGFzIHdlbGwgYXMgYW55IFNWRyBlbGVtZW50cyBpbiBvcmRlciB0byByZW1vdmUgYW55IG9sZCBpY29ucy5cclxuICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlICE9PSAxIHx8IGNoaWxkLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnKSB7XHJcbiAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByZXBlbmRzIHRoZSBjdXJyZW50IHBhdGggdG8gYWxsIGVsZW1lbnRzIHRoYXQgaGF2ZSBhbiBhdHRyaWJ1dGUgcG9pbnRpbmcgdG8gYSBgRnVuY0lSSWBcclxuICAgKiByZWZlcmVuY2UuIFRoaXMgaXMgcmVxdWlyZWQgYmVjYXVzZSBXZWJLaXQgYnJvd3NlcnMgcmVxdWlyZSByZWZlcmVuY2VzIHRvIGJlIHByZWZpeGVkIHdpdGhcclxuICAgKiB0aGUgY3VycmVudCBwYXRoLCBpZiB0aGUgcGFnZSBoYXMgYSBgYmFzZWAgdGFnLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3ByZXBlbmRQYXRoVG9SZWZlcmVuY2VzKHBhdGg6IHN0cmluZykge1xyXG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLl9lbGVtZW50c1dpdGhFeHRlcm5hbFJlZmVyZW5jZXM7XHJcblxyXG4gICAgaWYgKGVsZW1lbnRzKSB7XHJcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goKGF0dHJzLCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgYXR0cnMuZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIubmFtZSwgYHVybCgnJHtwYXRofSMke2F0dHIudmFsdWV9JylgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWNoZXMgdGhlIGNoaWxkcmVuIG9mIGFuIFNWRyBlbGVtZW50IHRoYXQgaGF2ZSBgdXJsKClgXHJcbiAgICogcmVmZXJlbmNlcyB0aGF0IHdlIG5lZWQgdG8gcHJlZml4IHdpdGggdGhlIGN1cnJlbnQgcGF0aC5cclxuICAgKi9cclxuICBwcml2YXRlIF9jYWNoZUNoaWxkcmVuV2l0aEV4dGVybmFsUmVmZXJlbmNlcyhlbGVtZW50OiBTVkdFbGVtZW50KSB7XHJcbiAgICBjb25zdCBlbGVtZW50c1dpdGhGdW5jSXJpID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGZ1bmNJcmlBdHRyaWJ1dGVTZWxlY3Rvcik7XHJcbiAgICBjb25zdCBlbGVtZW50cyA9ICh0aGlzLl9lbGVtZW50c1dpdGhFeHRlcm5hbFJlZmVyZW5jZXMgPVxyXG4gICAgICB0aGlzLl9lbGVtZW50c1dpdGhFeHRlcm5hbFJlZmVyZW5jZXMgfHwgbmV3IE1hcCgpKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzV2l0aEZ1bmNJcmkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZnVuY0lyaUF0dHJpYnV0ZXMuZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50V2l0aFJlZmVyZW5jZSA9IGVsZW1lbnRzV2l0aEZ1bmNJcmlbaV07XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50V2l0aFJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoYXR0cik7XHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB2YWx1ZSA/IHZhbHVlLm1hdGNoKGZ1bmNJcmlQYXR0ZXJuKSA6IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgbGV0IGF0dHJpYnV0ZXMgPSBlbGVtZW50cy5nZXQoZWxlbWVudFdpdGhSZWZlcmVuY2UpO1xyXG5cclxuICAgICAgICAgIGlmICghYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gW107XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLnNldChlbGVtZW50V2l0aFJlZmVyZW5jZSwgYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYXR0cmlidXRlcyEucHVzaCh7bmFtZTogYXR0ciwgdmFsdWU6IG1hdGNoWzFdfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBTZXRzIGEgbmV3IFNWRyBpY29uIHdpdGggYSBwYXJ0aWN1bGFyIG5hbWUuICovXHJcbiAgcHJpdmF0ZSBfdXBkYXRlU3ZnSWNvbihyYXdOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcclxuICAgIHRoaXMuX3N2Z05hbWVzcGFjZSA9IG51bGw7XHJcbiAgICB0aGlzLl9zdmdOYW1lID0gbnVsbDtcclxuICAgIHRoaXMuX2N1cnJlbnRJY29uRmV0Y2gudW5zdWJzY3JpYmUoKTtcclxuXHJcbiAgICBpZiAocmF3TmFtZSkge1xyXG4gICAgICBjb25zdCBbbmFtZXNwYWNlLCBpY29uTmFtZV0gPSB0aGlzLl9zcGxpdEljb25OYW1lKHJhd05hbWUpO1xyXG5cclxuICAgICAgaWYgKG5hbWVzcGFjZSkge1xyXG4gICAgICAgIHRoaXMuX3N2Z05hbWVzcGFjZSA9IG5hbWVzcGFjZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGljb25OYW1lKSB7XHJcbiAgICAgICAgdGhpcy5fc3ZnTmFtZSA9IGljb25OYW1lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9jdXJyZW50SWNvbkZldGNoID0gdGhpcy5faWNvblJlZ2lzdHJ5XHJcbiAgICAgICAgLmdldE5hbWVkU3ZnSWNvbihpY29uTmFtZSwgbmFtZXNwYWNlKVxyXG4gICAgICAgIC5waXBlKHRha2UoMSkpXHJcbiAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgIHN2ZyA9PiB0aGlzLl9zZXRTdmdFbGVtZW50KHN2ZyksXHJcbiAgICAgICAgICAoZXJyOiBFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBgRXJyb3IgcmV0cmlldmluZyBpY29uICR7bmFtZXNwYWNlfToke2ljb25OYW1lfSEgJHtlcnIubWVzc2FnZX1gO1xyXG4gICAgICAgICAgICB0aGlzLl9lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEVycm9yKGVycm9yTWVzc2FnZSkpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3BsaXRzIGFuIHN2Z0ljb24gYmluZGluZyB2YWx1ZSBpbnRvIGl0cyBpY29uIHNldCBhbmQgaWNvbiBuYW1lIGNvbXBvbmVudHMuXHJcbiAgICogUmV0dXJucyBhIDItZWxlbWVudCBhcnJheSBvZiBbKGljb24gc2V0KSwgKGljb24gbmFtZSldLlxyXG4gICAqIFRoZSBzZXBhcmF0b3IgZm9yIHRoZSB0d28gZmllbGRzIGlzICc6Jy4gSWYgdGhlcmUgaXMgbm8gc2VwYXJhdG9yLCBhbiBlbXB0eVxyXG4gICAqIHN0cmluZyBpcyByZXR1cm5lZCBmb3IgdGhlIGljb24gc2V0IGFuZCB0aGUgZW50aXJlIHZhbHVlIGlzIHJldHVybmVkIGZvclxyXG4gICAqIHRoZSBpY29uIG5hbWUuIElmIHRoZSBhcmd1bWVudCBpcyBmYWxzeSwgcmV0dXJucyBhbiBhcnJheSBvZiB0d28gZW1wdHkgc3RyaW5ncy5cclxuICAgKiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIG5hbWUgY29udGFpbnMgdHdvIG9yIG1vcmUgJzonIHNlcGFyYXRvcnMuXHJcbiAgICogRXhhbXBsZXM6XHJcbiAgICogICBgJ3NvY2lhbDpjYWtlJyAtPiBbJ3NvY2lhbCcsICdjYWtlJ11cclxuICAgKiAgICdwZW5ndWluJyAtPiBbJycsICdwZW5ndWluJ11cclxuICAgKiAgIG51bGwgLT4gWycnLCAnJ11cclxuICAgKiAgICdhOmI6YycgLT4gKHRocm93cyBFcnJvcilgXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfc3BsaXRJY29uTmFtZShpY29uTmFtZTogc3RyaW5nKTogW3N0cmluZywgc3RyaW5nXSB7XHJcbiAgICBpZiAoIWljb25OYW1lKSB7XHJcbiAgICAgIHJldHVybiBbJycsICcnXTtcclxuICAgIH1cclxuICAgIGNvbnN0IHBhcnRzID0gaWNvbk5hbWUuc3BsaXQoJzonKTtcclxuICAgIHN3aXRjaCAocGFydHMubGVuZ3RoKSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICByZXR1cm4gWycnLCBwYXJ0c1swXV07IC8vIFVzZSBkZWZhdWx0IG5hbWVzcGFjZS5cclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHJldHVybiA8W3N0cmluZywgc3RyaW5nXT5wYXJ0cztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBpY29uIG5hbWU6IFwiJHtpY29uTmFtZX1cImApOyAvLyBUT0RPOiBhZGQgYW4gbmdEZXZNb2RlIGNoZWNrXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuIl19