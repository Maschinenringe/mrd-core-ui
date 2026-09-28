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
    /** Farbe fuer Rahmen und Symbol; ohne Angabe die Textfarbe der Umgebung */
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
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdIconComponent, selectors: [["mrd-icon"]], hostAttrs: ["role", "img", "aria-hidden", "true"], hostVars: 4, hostBindings: function MrdIconComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("--mrd-icon-size", ctx.aktuelleGroesse);
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
                    '[style.--mrd-icon-size]': 'aktuelleGroesse'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1pY29uL2NvbXBvbmVudHMvbXJkLWljb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1pY29uL2NvbXBvbmVudHMvbXJkLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQTRCLE1BQU0sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDaEwsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7QUFHL0U7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLElBQUksY0FBYyxDQUFrQixtQkFBbUIsRUFBRTtJQUN4RixVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUseUJBQXlCO0NBQ25DLENBQUMsQ0FBQztBQVVILG9CQUFvQjtBQUNwQixNQUFNLFVBQVUseUJBQXlCO0lBQ3ZDLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FB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QUdoQixnQkFBZ0IsZ0NBR2hCLGdCQUFnQiw2QkFHaEIsa0JBQWtCLDRDQUVsQixrQkFBa0IsNENBRWxCLGtCQUFrQixrREFNbEIsYUFBYTs7WUNuSWxDLGtCQUF5Qjs7O3VGRHNGWixnQkFBZ0I7Y0FaNUIsU0FBUzsyQkFDRSxVQUFVLFFBR2Q7b0JBQ0osTUFBTSxFQUFFLEtBQUs7b0JBQ2IsYUFBYSxFQUFFLE1BQU07b0JBQ3JCLHdCQUF3QixFQUFFLG1CQUFtQjtvQkFDN0MseUJBQXlCLEVBQUUsaUJBQWlCO2lCQUM3QyxtQkFDZ0IsdUJBQXVCLENBQUMsTUFBTTs7c0JBK0Q1QyxNQUFNO3VCQUFDLGlCQUFpQjttSUF6RHZCLE9BQU87a0JBRFYsS0FBSztZQW9CRyxJQUFJO2tCQUFaLEtBQUs7WUFHZ0MsT0FBTztrQkFBNUMsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUdFLElBQUk7a0JBQXpDLEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFHRSxNQUFNO2tCQUEzQyxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBR0ksS0FBSztrQkFBNUMsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUVFLFVBQVU7a0JBQWpELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFFRSxVQUFVO2tCQUFqRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBRzdCLFNBQVM7a0JBQWpCLEtBQUs7WUFHNkIsSUFBSTtrQkFBdEMsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IGJvb2xlYW5BdHRyaWJ1dGUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEVycm9ySGFuZGxlciwgSW5qZWN0LCBpbmplY3QsIEluamVjdGlvblRva2VuLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgdGFrZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNcmRJY29uUmVnaXN0cnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2UvbXJkLWljb24tcmVnaXN0cnkuc2VydmljZSc7XHJcbmltcG9ydCB7IE1yZEljb25PdXRlciwgTXJkSWNvblN5bWJvbCwgTXJkSWNvblN5bWJvbFJlZ2lzdHJ5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlL21yZC1pY29uLXN5bWJvbC1yZWdpc3RyeS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSWNvbkRpcmVjdGlvbiB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlL2ljb24tZmFjdG9yeS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgc2l6ZUF0dHJpYnV0ZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi90cmFuc2Zvcm1zL3NpemUtdHJhbnNmb3JtJztcclxuaW1wb3J0IHsgQ29uZmlnVXRpbCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsJztcclxuaW1wb3J0IHsgaWNvbkNvbG9yQXR0cmlidXRlIH0gZnJvbSAnLi4vY29tbW9uL3RyYW5zZm9ybXMvaWNvbi1jb2xvci10cmFuc2Zvcm0nO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBJbmplY3Rpb24gdG9rZW4gdXNlZCB0byBwcm92aWRlIHRoZSBjdXJyZW50IGxvY2F0aW9uIHRvIGBNYXRJY29uYC5cclxuICogVXNlZCB0byBoYW5kbGUgc2VydmVyLXNpZGUgcmVuZGVyaW5nIGFuZCB0byBzdHViIG91dCBkdXJpbmcgdW5pdCB0ZXN0cy5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1SRF9JQ09OX0xPQ0FUSU9OID0gbmV3IEluamVjdGlvblRva2VuPE1yZEljb25Mb2NhdGlvbj4oJ21yZC1pY29uLWxvY2F0aW9uJywge1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxuICBmYWN0b3J5OiBNUkRfSUNPTl9MT0NBVElPTl9GQUNUT1JZLFxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBTdHViYmVkIG91dCBsb2NhdGlvbiBmb3IgYE1hdEljb25gLlxyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE1yZEljb25Mb2NhdGlvbiB7XHJcbiAgZ2V0UGF0aG5hbWU6ICgpID0+IHN0cmluZztcclxufVxyXG5cclxuLyoqIEBkb2NzLXByaXZhdGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIE1SRF9JQ09OX0xPQ0FUSU9OX0ZBQ1RPUlkoKTogTXJkSWNvbkxvY2F0aW9uIHtcclxuICBjb25zdCBfZG9jdW1lbnQgPSBpbmplY3QoRE9DVU1FTlQpO1xyXG4gIGNvbnN0IF9sb2NhdGlvbiA9IF9kb2N1bWVudCA/IF9kb2N1bWVudC5sb2NhdGlvbiA6IG51bGw7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAvLyBOb3RlIHRoYXQgdGhpcyBuZWVkcyB0byBiZSBhIGZ1bmN0aW9uLCByYXRoZXIgdGhhbiBhIHByb3BlcnR5LCBiZWNhdXNlIEFuZ3VsYXJcclxuICAgIC8vIHdpbGwgb25seSByZXNvbHZlIGl0IG9uY2UsIGJ1dCB3ZSB3YW50IHRoZSBjdXJyZW50IHBhdGggb24gZWFjaCBjYWxsLlxyXG4gICAgZ2V0UGF0aG5hbWU6ICgpID0+IChfbG9jYXRpb24gPyBfbG9jYXRpb24ucGF0aG5hbWUgKyBfbG9jYXRpb24uc2VhcmNoIDogJycpLFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKiBTVkcgYXR0cmlidXRlcyB0aGF0IGFjY2VwdCBhIEZ1bmNJUkkgKGUuZy4gYHVybCg8c29tZXRoaW5nPilgKS4gKi9cclxuY29uc3QgZnVuY0lyaUF0dHJpYnV0ZXMgPSBbXHJcbiAgJ2NsaXAtcGF0aCcsXHJcbiAgJ2NvbG9yLXByb2ZpbGUnLFxyXG4gICdzcmMnLFxyXG4gICdjdXJzb3InLFxyXG4gICdmaWxsJyxcclxuICAnZmlsdGVyJyxcclxuICAnbWFya2VyJyxcclxuICAnbWFya2VyLXN0YXJ0JyxcclxuICAnbWFya2VyLW1pZCcsXHJcbiAgJ21hcmtlci1lbmQnLFxyXG4gICdtYXNrJyxcclxuICAnc3Ryb2tlJyxcclxuXTtcclxuLyoqIFNlbGVjdG9yIHRoYXQgY2FuIGJlIHVzZWQgdG8gZmluZCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgdXNpbmcgYSBgRnVuY0lSSWAuICovXHJcbmNvbnN0IGZ1bmNJcmlBdHRyaWJ1dGVTZWxlY3RvciA9IGZ1bmNJcmlBdHRyaWJ1dGVzLm1hcChhdHRyID0+IGBbJHthdHRyfV1gKS5qb2luKCcsICcpO1xyXG5cclxuLyoqIFJlZ2V4IHRoYXQgY2FuIGJlIHVzZWQgdG8gZXh0cmFjdCB0aGUgaWQgb3V0IG9mIGEgRnVuY0lSSS4gKi9cclxuY29uc3QgZnVuY0lyaVBhdHRlcm4gPSAvXnVybFxcKFsnXCJdPyMoLio/KVsnXCJdP1xcKSQvO1xyXG5cclxuXHJcbi8qKiBJbnB1dHMsIGRpZSBkYXMgSWNvbiBhdXMgZGVyIEljb25GYWN0b3J5IGJlc3RpbW1lbiAqL1xyXG5jb25zdCBGQUNUT1JZX0lOUFVUUyA9IFsnaWNvbicsICdvdXRsaW5lJywgJ2Z1bGwnLCAnZGFzaGVkJywgJ2NvbG9yJywgJ2lubmVyQ29sb3InLCAnb3V0ZXJDb2xvcicsICdkaXJlY3Rpb24nXTtcclxuXHJcbi8qKlxyXG4gKiBaZWlndCBlaW4gSWNvbiBhbjpcclxuICogLSBgaWNvbj1cImJlYXJiZWl0ZW5cIiBvdXRsaW5lYCBiYXV0IGVzIGF1cyBkZXIgSWNvbkZhY3RvcnksIG9obmUgUmVnaXN0cmllcnVuZyB1bmQgb2huZSBIVFRQO1xyXG4gKiAgIGRpZSBGYXJiZSBpc3Qgc3RhbmRhcmRtYWVzc2lnIGRpZSBUZXh0ZmFyYmUgZGVyIFVtZ2VidW5nIChgY3VycmVudENvbG9yYClcclxuICogLSBgc3ZnSWNvbj1cIm5hbWVcImAgYnp3LiBgc3ZnSWNvbj1cIm5hbWVzcGFjZTpuYW1lXCJgIGhvbHQgZWluIGluIGRlciBNcmRJY29uUmVnaXN0cnkgcmVnaXN0cmllcnRlcyBJY29uO1xyXG4gKiAgIGRpZSBGYWN0b3J5LVN5bWJvbGUgc3RlaGVuIGRvcnQgdW50ZXIgYG1yZDo8c3ltYm9sPlstb3V0bGluZXwtZnVsbHwtZGFzaGVkXVstdXB8LWRvd258LWxlZnRdYCBiZXJlaXRcclxuICogSXN0IGBpY29uYCBnZXNldHp0LCBoYXQgZXMgVm9ycmFuZyB2b3IgYHN2Z0ljb25gLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtcmQtaWNvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1pY29uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtaWNvbi5jb21wb25lbnQuc2NzcyddLFxyXG4gIGhvc3Q6IHtcclxuICAgICdyb2xlJzogJ2ltZycsXHJcbiAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXHJcbiAgICAnW2NsYXNzLm1yZC1pY29uLXNpemVkXSc6ICchIWFrdHVlbGxlR3JvZXNzZScsXHJcbiAgICAnW3N0eWxlLi0tbXJkLWljb24tc2l6ZV0nOiAnYWt0dWVsbGVHcm9lc3NlJ1xyXG4gIH0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yZEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICAvKiogTmFtZSBvZiB0aGUgaWNvbiBpbiB0aGUgU1ZHIGljb24gc2V0LiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHN2Z0ljb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zdmdJY29uO1xyXG4gIH1cclxuICBzZXQgc3ZnSWNvbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3N2Z0ljb24pIHtcclxuICAgICAgLy8gRWluIEZhY3RvcnktSWNvbiBoYXQgVm9ycmFuZzsgZGVyIFdlcnQgd2lyZCBnZW1lcmt0LCBmYWxscyBgaWNvbmAgc3BhZXRlciBlbnRmZXJudCB3aXJkXHJcbiAgICAgIGlmICghdGhpcy5pY29uKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICB0aGlzLl91cGRhdGVTdmdJY29uKHZhbHVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N2Z0ljb24pIHtcclxuICAgICAgICAgIHRoaXMuX2NsZWFyU3ZnRWxlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9zdmdJY29uID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHByaXZhdGUgX3N2Z0ljb246IHN0cmluZztcclxuXHJcbiAgLyoqIFN5bWJvbCBhdXMgZGVyIEljb25GYWN0b3J5LCB6LiBCLiBgYmVhcmJlaXRlbmAsIGBwZmVpbGAgb2RlciBlaW4gcGVyIGBwcm92aWRlTXJkSWNvbnMoe3N5bWJvbHN9KWAgcmVnaXN0cmllcnRlcyAqL1xyXG4gIEBJbnB1dCgpIGljb246IE1yZEljb25TeW1ib2w7XHJcblxyXG4gIC8qKiBLcmVpcy1VbXJpc3MgdW0gZGFzIFN5bWJvbCAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgb3V0bGluZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKiogR2VmdWVsbHRlciBLcmVpczsgZGFzIFN5bWJvbCBpc3QgZGFyYXVmIHN0YW5kYXJkbWFlc3NpZyB3ZWlzcyAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgZnVsbDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKiogR2VzdHJpY2hlbHRlciBLcmVpcyAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgZGFzaGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiBGYXJiZSBmdWVyIFJhaG1lbiB1bmQgU3ltYm9sOyBvaG5lIEFuZ2FiZSBkaWUgVGV4dGZhcmJlIGRlciBVbWdlYnVuZyAqL1xyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBpY29uQ29sb3JBdHRyaWJ1dGV9KSBjb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogaWNvbkNvbG9yQXR0cmlidXRlfSkgaW5uZXJDb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoe3RyYW5zZm9ybTogaWNvbkNvbG9yQXR0cmlidXRlfSkgb3V0ZXJDb2xvcjogc3RyaW5nO1xyXG5cclxuICAvKiogRHJlaHVuZyBkZXMgU3ltYm9scywgei4gQi4gZnVlciBQZmVpbGUgKi9cclxuICBASW5wdXQoKSBkaXJlY3Rpb246IEljb25EaXJlY3Rpb24gfCBudW1iZXI7XHJcblxyXG4gIC8qKiBLYW50ZW5sYWVuZ2UsIHouIEIuIGAyNGAsIGBcIjEuNWVtXCJgOyBTdGFuZGFyZCBiZWkgYGljb25gIGF1cyBkZXIgQ29uZmlnLCBiZWkgYHN2Z0ljb25gIG9obmUgQW5nYWJlIHdpZSBiaXNoZXIga2VpbmUgKi9cclxuICBASW5wdXQoe3RyYW5zZm9ybTogc2l6ZUF0dHJpYnV0ZX0pIHNpemU6IHN0cmluZztcclxuXHJcbiAgX3N2Z05hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgX3N2Z05hbWVzcGFjZTogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgLyoqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IHBhZ2UgcGF0aC4gKi9cclxuICBwcml2YXRlIF9wcmV2aW91c1BhdGg/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBLZWVwcyB0cmFjayBvZiB0aGUgZWxlbWVudHMgYW5kIGF0dHJpYnV0ZXMgdGhhdCB3ZSd2ZSBwcmVmaXhlZCB3aXRoIHRoZSBjdXJyZW50IHBhdGguICovXHJcbiAgcHJpdmF0ZSBfZWxlbWVudHNXaXRoRXh0ZXJuYWxSZWZlcmVuY2VzPzogTWFwPEVsZW1lbnQsIHtuYW1lOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmd9W10+O1xyXG5cclxuICAvKiogU3Vic2NyaXB0aW9uIHRvIHRoZSBjdXJyZW50IGluLXByb2dyZXNzIFNWRyBpY29uIHJlcXVlc3QuICovXHJcbiAgcHJpdmF0ZSBfY3VycmVudEljb25GZXRjaCA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgIEBJbmplY3QoTVJEX0lDT05fTE9DQVRJT04pIHByaXZhdGUgX2xvY2F0aW9uOiBNcmRJY29uTG9jYXRpb24sXHJcbiAgICBwcml2YXRlIF9lcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcixcclxuICAgIHByaXZhdGUgX2ljb25SZWdpc3RyeTogTXJkSWNvblJlZ2lzdHJ5U2VydmljZSxcclxuICAgIHByaXZhdGUgX3N5bWJvbFJlZ2lzdHJ5OiBNcmRJY29uU3ltYm9sUmVnaXN0cnlTZXJ2aWNlLFxyXG4gICkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKCFGQUNUT1JZX0lOUFVUUy5zb21lKGlucHV0ID0+IGlucHV0IGluIGNoYW5nZXMpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmljb24pIHtcclxuICAgICAgdGhpcy5fZmFjdG9yeUljb25BbnplaWdlbigpO1xyXG4gICAgfSBlbHNlIGlmICgnaWNvbicgaW4gY2hhbmdlcyAmJiAhY2hhbmdlc1snaWNvbiddLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgIC8vIGljb24gd3VyZGUgZW50ZmVybnQ6IGF1ZiBzdmdJY29uIHp1cnVlY2tmYWxsZW5cclxuICAgICAgaWYgKHRoaXMuX3N2Z0ljb24pIHtcclxuICAgICAgICB0aGlzLl91cGRhdGVTdmdJY29uKHRoaXMuX3N2Z0ljb24pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2NsZWFyU3ZnRWxlbWVudCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGFrdHVlbGxlR3JvZXNzZSgpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLnNpemUgfHwgKHRoaXMuaWNvbiA/IENvbmZpZ1V0aWwuZ2V0Q29uZmlnKCkuaWNvbi5zaXplIDogbnVsbCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBfcmFobWVuKCk6IE1yZEljb25PdXRlciB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAodGhpcy5mdWxsKSB7XHJcbiAgICAgIHJldHVybiAnZnVsbCc7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kYXNoZWQpIHtcclxuICAgICAgcmV0dXJuICdkYXNoZWQnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMub3V0bGluZSA/ICdvdXRsaW5lJyA6IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2ZhY3RvcnlJY29uQW56ZWlnZW4oKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jdXJyZW50SWNvbkZldGNoLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzdmcgPSB0aGlzLl9zeW1ib2xSZWdpc3RyeS5jcmVhdGVTdmcoe1xyXG4gICAgICAgIHN5bWJvbDogdGhpcy5pY29uLFxyXG4gICAgICAgIG91dGVyOiB0aGlzLl9yYWhtZW4sXHJcbiAgICAgICAgY29sb3I6IHRoaXMuY29sb3IsXHJcbiAgICAgICAgaW5uZXJDb2xvcjogdGhpcy5pbm5lckNvbG9yLFxyXG4gICAgICAgIG91dGVyQ29sb3I6IHRoaXMub3V0ZXJDb2xvcixcclxuICAgICAgICBkaXJlY3Rpb246IHRoaXMuZGlyZWN0aW9uXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLl9zZXRTdmdFbGVtZW50KHRoaXMuX2ljb25SZWdpc3RyeS5jcmVhdGVTdmdFbGVtZW50RnJvbVRydXN0ZWRTdHJpbmcoc3ZnKSk7XHJcbiAgICB9IGNhdGNoIChmZWhsZXIpIHtcclxuICAgICAgdGhpcy5fY2xlYXJTdmdFbGVtZW50KCk7XHJcbiAgICAgIHRoaXMuX2Vycm9ySGFuZGxlci5oYW5kbGVFcnJvcihmZWhsZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0U3ZnRWxlbWVudChzdmc6IFNWR0VsZW1lbnQpIHtcclxuICAgIHRoaXMuX2NsZWFyU3ZnRWxlbWVudCgpO1xyXG5cclxuICAgIC8vIE5vdGU6IHdlIGRvIHRoaXMgZml4IGhlcmUsIHJhdGhlciB0aGFuIHRoZSBpY29uIHJlZ2lzdHJ5LCBiZWNhdXNlIHRoZVxyXG4gICAgLy8gcmVmZXJlbmNlcyBoYXZlIHRvIHBvaW50IHRvIHRoZSBVUkwgYXQgdGhlIHRpbWUgdGhhdCB0aGUgaWNvbiB3YXMgY3JlYXRlZC5cclxuICAgIGNvbnN0IHBhdGggPSB0aGlzLl9sb2NhdGlvbi5nZXRQYXRobmFtZSgpO1xyXG4gICAgdGhpcy5fcHJldmlvdXNQYXRoID0gcGF0aDtcclxuICAgIHRoaXMuX2NhY2hlQ2hpbGRyZW5XaXRoRXh0ZXJuYWxSZWZlcmVuY2VzKHN2Zyk7XHJcbiAgICB0aGlzLl9wcmVwZW5kUGF0aFRvUmVmZXJlbmNlcyhwYXRoKTtcclxuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChzdmcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY2xlYXJTdmdFbGVtZW50KCkge1xyXG4gICAgY29uc3QgbGF5b3V0RWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBsZXQgY2hpbGRDb3VudCA9IGxheW91dEVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg7XHJcblxyXG4gICAgaWYgKHRoaXMuX2VsZW1lbnRzV2l0aEV4dGVybmFsUmVmZXJlbmNlcykge1xyXG4gICAgICB0aGlzLl9lbGVtZW50c1dpdGhFeHRlcm5hbFJlZmVyZW5jZXMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgZXhpc3Rpbmcgbm9uLWVsZW1lbnQgY2hpbGQgbm9kZXMgYW5kIFNWR3MsIGFuZCBhZGQgdGhlIG5ldyBTVkcgZWxlbWVudC4gTm90ZSB0aGF0XHJcbiAgICAvLyB3ZSBjYW4ndCB1c2UgaW5uZXJIVE1MLCBiZWNhdXNlIElFIHdpbGwgdGhyb3cgaWYgdGhlIGVsZW1lbnQgaGFzIGEgZGF0YSBiaW5kaW5nLlxyXG4gICAgd2hpbGUgKGNoaWxkQ291bnQtLSkge1xyXG4gICAgICBjb25zdCBjaGlsZCA9IGxheW91dEVsZW1lbnQuY2hpbGROb2Rlc1tjaGlsZENvdW50XTtcclxuXHJcbiAgICAgIC8vIDEgY29ycmVzcG9uZHMgdG8gTm9kZS5FTEVNRU5UX05PREUuIFdlIHJlbW92ZSBhbGwgbm9uLWVsZW1lbnQgbm9kZXMgaW4gb3JkZXIgdG8gZ2V0IHJpZFxyXG4gICAgICAvLyBvZiBhbnkgbG9vc2UgdGV4dCBub2RlcywgYXMgd2VsbCBhcyBhbnkgU1ZHIGVsZW1lbnRzIGluIG9yZGVyIHRvIHJlbW92ZSBhbnkgb2xkIGljb25zLlxyXG4gICAgICBpZiAoY2hpbGQubm9kZVR5cGUgIT09IDEgfHwgY2hpbGQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2ZycpIHtcclxuICAgICAgICBjaGlsZC5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJlcGVuZHMgdGhlIGN1cnJlbnQgcGF0aCB0byBhbGwgZWxlbWVudHMgdGhhdCBoYXZlIGFuIGF0dHJpYnV0ZSBwb2ludGluZyB0byBhIGBGdW5jSVJJYFxyXG4gICAqIHJlZmVyZW5jZS4gVGhpcyBpcyByZXF1aXJlZCBiZWNhdXNlIFdlYktpdCBicm93c2VycyByZXF1aXJlIHJlZmVyZW5jZXMgdG8gYmUgcHJlZml4ZWQgd2l0aFxyXG4gICAqIHRoZSBjdXJyZW50IHBhdGgsIGlmIHRoZSBwYWdlIGhhcyBhIGBiYXNlYCB0YWcuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfcHJlcGVuZFBhdGhUb1JlZmVyZW5jZXMocGF0aDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuX2VsZW1lbnRzV2l0aEV4dGVybmFsUmVmZXJlbmNlcztcclxuXHJcbiAgICBpZiAoZWxlbWVudHMpIHtcclxuICAgICAgZWxlbWVudHMuZm9yRWFjaCgoYXR0cnMsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICBhdHRycy5mb3JFYWNoKGF0dHIgPT4ge1xyXG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBgdXJsKCcke3BhdGh9IyR7YXR0ci52YWx1ZX0nKWApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhY2hlcyB0aGUgY2hpbGRyZW4gb2YgYW4gU1ZHIGVsZW1lbnQgdGhhdCBoYXZlIGB1cmwoKWBcclxuICAgKiByZWZlcmVuY2VzIHRoYXQgd2UgbmVlZCB0byBwcmVmaXggd2l0aCB0aGUgY3VycmVudCBwYXRoLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2NhY2hlQ2hpbGRyZW5XaXRoRXh0ZXJuYWxSZWZlcmVuY2VzKGVsZW1lbnQ6IFNWR0VsZW1lbnQpIHtcclxuICAgIGNvbnN0IGVsZW1lbnRzV2l0aEZ1bmNJcmkgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZnVuY0lyaUF0dHJpYnV0ZVNlbGVjdG9yKTtcclxuICAgIGNvbnN0IGVsZW1lbnRzID0gKHRoaXMuX2VsZW1lbnRzV2l0aEV4dGVybmFsUmVmZXJlbmNlcyA9XHJcbiAgICAgIHRoaXMuX2VsZW1lbnRzV2l0aEV4dGVybmFsUmVmZXJlbmNlcyB8fCBuZXcgTWFwKCkpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHNXaXRoRnVuY0lyaS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmdW5jSXJpQXR0cmlidXRlcy5mb3JFYWNoKGF0dHIgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRXaXRoUmVmZXJlbmNlID0gZWxlbWVudHNXaXRoRnVuY0lyaVtpXTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnRXaXRoUmVmZXJlbmNlLmdldEF0dHJpYnV0ZShhdHRyKTtcclxuICAgICAgICBjb25zdCBtYXRjaCA9IHZhbHVlID8gdmFsdWUubWF0Y2goZnVuY0lyaVBhdHRlcm4pIDogbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICBsZXQgYXR0cmlidXRlcyA9IGVsZW1lbnRzLmdldChlbGVtZW50V2l0aFJlZmVyZW5jZSk7XHJcblxyXG4gICAgICAgICAgaWYgKCFhdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSBbXTtcclxuICAgICAgICAgICAgZWxlbWVudHMuc2V0KGVsZW1lbnRXaXRoUmVmZXJlbmNlLCBhdHRyaWJ1dGVzKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhdHRyaWJ1dGVzIS5wdXNoKHtuYW1lOiBhdHRyLCB2YWx1ZTogbWF0Y2hbMV19KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFNldHMgYSBuZXcgU1ZHIGljb24gd2l0aCBhIHBhcnRpY3VsYXIgbmFtZS4gKi9cclxuICBwcml2YXRlIF91cGRhdGVTdmdJY29uKHJhd05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xyXG4gICAgdGhpcy5fc3ZnTmFtZXNwYWNlID0gbnVsbDtcclxuICAgIHRoaXMuX3N2Z05hbWUgPSBudWxsO1xyXG4gICAgdGhpcy5fY3VycmVudEljb25GZXRjaC51bnN1YnNjcmliZSgpO1xyXG5cclxuICAgIGlmIChyYXdOYW1lKSB7XHJcbiAgICAgIGNvbnN0IFtuYW1lc3BhY2UsIGljb25OYW1lXSA9IHRoaXMuX3NwbGl0SWNvbk5hbWUocmF3TmFtZSk7XHJcblxyXG4gICAgICBpZiAobmFtZXNwYWNlKSB7XHJcbiAgICAgICAgdGhpcy5fc3ZnTmFtZXNwYWNlID0gbmFtZXNwYWNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaWNvbk5hbWUpIHtcclxuICAgICAgICB0aGlzLl9zdmdOYW1lID0gaWNvbk5hbWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX2N1cnJlbnRJY29uRmV0Y2ggPSB0aGlzLl9pY29uUmVnaXN0cnlcclxuICAgICAgICAuZ2V0TmFtZWRTdmdJY29uKGljb25OYW1lLCBuYW1lc3BhY2UpXHJcbiAgICAgICAgLnBpcGUodGFrZSgxKSlcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgc3ZnID0+IHRoaXMuX3NldFN2Z0VsZW1lbnQoc3ZnKSxcclxuICAgICAgICAgIChlcnI6IEVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGBFcnJvciByZXRyaWV2aW5nIGljb24gJHtuYW1lc3BhY2V9OiR7aWNvbk5hbWV9ISAke2Vyci5tZXNzYWdlfWA7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTcGxpdHMgYW4gc3ZnSWNvbiBiaW5kaW5nIHZhbHVlIGludG8gaXRzIGljb24gc2V0IGFuZCBpY29uIG5hbWUgY29tcG9uZW50cy5cclxuICAgKiBSZXR1cm5zIGEgMi1lbGVtZW50IGFycmF5IG9mIFsoaWNvbiBzZXQpLCAoaWNvbiBuYW1lKV0uXHJcbiAgICogVGhlIHNlcGFyYXRvciBmb3IgdGhlIHR3byBmaWVsZHMgaXMgJzonLiBJZiB0aGVyZSBpcyBubyBzZXBhcmF0b3IsIGFuIGVtcHR5XHJcbiAgICogc3RyaW5nIGlzIHJldHVybmVkIGZvciB0aGUgaWNvbiBzZXQgYW5kIHRoZSBlbnRpcmUgdmFsdWUgaXMgcmV0dXJuZWQgZm9yXHJcbiAgICogdGhlIGljb24gbmFtZS4gSWYgdGhlIGFyZ3VtZW50IGlzIGZhbHN5LCByZXR1cm5zIGFuIGFycmF5IG9mIHR3byBlbXB0eSBzdHJpbmdzLlxyXG4gICAqIFRocm93cyBhbiBlcnJvciBpZiB0aGUgbmFtZSBjb250YWlucyB0d28gb3IgbW9yZSAnOicgc2VwYXJhdG9ycy5cclxuICAgKiBFeGFtcGxlczpcclxuICAgKiAgIGAnc29jaWFsOmNha2UnIC0+IFsnc29jaWFsJywgJ2Nha2UnXVxyXG4gICAqICAgJ3Blbmd1aW4nIC0+IFsnJywgJ3Blbmd1aW4nXVxyXG4gICAqICAgbnVsbCAtPiBbJycsICcnXVxyXG4gICAqICAgJ2E6YjpjJyAtPiAodGhyb3dzIEVycm9yKWBcclxuICAgKi9cclxuICBwcml2YXRlIF9zcGxpdEljb25OYW1lKGljb25OYW1lOiBzdHJpbmcpOiBbc3RyaW5nLCBzdHJpbmddIHtcclxuICAgIGlmICghaWNvbk5hbWUpIHtcclxuICAgICAgcmV0dXJuIFsnJywgJyddO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGFydHMgPSBpY29uTmFtZS5zcGxpdCgnOicpO1xyXG4gICAgc3dpdGNoIChwYXJ0cy5sZW5ndGgpIHtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiBbJycsIHBhcnRzWzBdXTsgLy8gVXNlIGRlZmF1bHQgbmFtZXNwYWNlLlxyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgcmV0dXJuIDxbc3RyaW5nLCBzdHJpbmddPnBhcnRzO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIGljb24gbmFtZTogXCIke2ljb25OYW1lfVwiYCk7IC8vIFRPRE86IGFkZCBhbiBuZ0Rldk1vZGUgY2hlY2tcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4iXX0=