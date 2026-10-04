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
    /** Kantenlaenge, z. B. `24`, `"1.5em"`; Standard 24px, auch fuer `svgIcon` */
    /** Kantenlaenge, z. B. `24`, `"1.5em"`; Standard bei `icon` aus der Config, bei `svgIcon` ohne Angabe wie bisher keine */
    size = '24px';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1pY29uL2NvbXBvbmVudHMvbXJkLWljb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1pY29uL2NvbXBvbmVudHMvbXJkLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQTRCLE1BQU0sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDaEwsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7QUFHL0U7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLElBQUksY0FBYyxDQUFrQixtQkFBbUIsRUFBRTtJQUN4RixVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUseUJBQXlCO0NBQ25DLENBQUMsQ0FBQztBQVVILG9CQUFvQjtBQUNwQixNQUFNLFVBQVUseUJBQXlCO0lBQ3ZDLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FB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QUFnQjs7O3lGQTBCUixnQkFBZ0IsMEJBR2hCLGdCQUFnQixnQ0FHaEIsZ0JBQWdCLDZCQU1oQixrQkFBa0IsNENBRWxCLGtCQUFrQiw0Q0FFbEIsa0JBQWtCLGtEQU1sQixhQUFhOztZQ3hJbEMsa0JBQXlCOzs7dUZEd0ZaLGdCQUFnQjtjQWQ1QixTQUFTOzJCQUNFLFVBQVUsUUFHZDtvQkFDSixNQUFNLEVBQUUsS0FBSztvQkFDYixhQUFhLEVBQUUsTUFBTTtvQkFDckIsd0JBQXdCLEVBQUUsbUJBQW1CO29CQUM3Qyx5QkFBeUIsRUFBRSxpQkFBaUI7b0JBQzVDLDZHQUE2RztvQkFDN0csZUFBZSxFQUFFLHNCQUFzQjtpQkFDeEMsbUJBQ2dCLHVCQUF1QixDQUFDLE1BQU07O3NCQWtFNUMsTUFBTTt1QkFBQyxpQkFBaUI7bUlBNUR2QixPQUFPO2tCQURWLEtBQUs7WUFvQkcsSUFBSTtrQkFBWixLQUFLO1lBR2dDLE9BQU87a0JBQTVDLEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFHRSxJQUFJO2tCQUF6QyxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBR0UsTUFBTTtrQkFBM0MsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQU1JLEtBQUs7a0JBQTVDLEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFFRSxVQUFVO2tCQUFqRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBRUUsVUFBVTtrQkFBakQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUc3QixTQUFTO2tCQUFqQixLQUFLO1lBRzZCLElBQUk7a0JBQXRDLEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsYUFBYSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgYm9vbGVhbkF0dHJpYnV0ZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXJyb3JIYW5kbGVyLCBJbmplY3QsIGluamVjdCwgSW5qZWN0aW9uVG9rZW4sIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgdGFrZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTXJkSWNvblJlZ2lzdHJ5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlL21yZC1pY29uLXJlZ2lzdHJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJkSWNvbk91dGVyLCBNcmRJY29uU3ltYm9sLCBNcmRJY29uU3ltYm9sUmVnaXN0cnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2UvbXJkLWljb24tc3ltYm9sLXJlZ2lzdHJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgSWNvbkRpcmVjdGlvbiB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlL2ljb24tZmFjdG9yeS5zZXJ2aWNlJztcbmltcG9ydCB7IHNpemVBdHRyaWJ1dGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9zaXplLXRyYW5zZm9ybSc7XG5pbXBvcnQgeyBDb25maWdVdGlsIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWwvY29uZmlnLnV0aWwnO1xuaW1wb3J0IHsgaWNvbkNvbG9yQXR0cmlidXRlIH0gZnJvbSAnLi4vY29tbW9uL3RyYW5zZm9ybXMvaWNvbi1jb2xvci10cmFuc2Zvcm0nO1xuXG5cbi8qKlxuICogSW5qZWN0aW9uIHRva2VuIHVzZWQgdG8gcHJvdmlkZSB0aGUgY3VycmVudCBsb2NhdGlvbiB0byBgTWF0SWNvbmAuXG4gKiBVc2VkIHRvIGhhbmRsZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgYW5kIHRvIHN0dWIgb3V0IGR1cmluZyB1bml0IHRlc3RzLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgTVJEX0lDT05fTE9DQVRJT04gPSBuZXcgSW5qZWN0aW9uVG9rZW48TXJkSWNvbkxvY2F0aW9uPignbXJkLWljb24tbG9jYXRpb24nLCB7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgZmFjdG9yeTogTVJEX0lDT05fTE9DQVRJT05fRkFDVE9SWSxcbn0pO1xuXG4vKipcbiAqIFN0dWJiZWQgb3V0IGxvY2F0aW9uIGZvciBgTWF0SWNvbmAuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTXJkSWNvbkxvY2F0aW9uIHtcbiAgZ2V0UGF0aG5hbWU6ICgpID0+IHN0cmluZztcbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBNUkRfSUNPTl9MT0NBVElPTl9GQUNUT1JZKCk6IE1yZEljb25Mb2NhdGlvbiB7XG4gIGNvbnN0IF9kb2N1bWVudCA9IGluamVjdChET0NVTUVOVCk7XG4gIGNvbnN0IF9sb2NhdGlvbiA9IF9kb2N1bWVudCA/IF9kb2N1bWVudC5sb2NhdGlvbiA6IG51bGw7XG5cbiAgcmV0dXJuIHtcbiAgICAvLyBOb3RlIHRoYXQgdGhpcyBuZWVkcyB0byBiZSBhIGZ1bmN0aW9uLCByYXRoZXIgdGhhbiBhIHByb3BlcnR5LCBiZWNhdXNlIEFuZ3VsYXJcbiAgICAvLyB3aWxsIG9ubHkgcmVzb2x2ZSBpdCBvbmNlLCBidXQgd2Ugd2FudCB0aGUgY3VycmVudCBwYXRoIG9uIGVhY2ggY2FsbC5cbiAgICBnZXRQYXRobmFtZTogKCkgPT4gKF9sb2NhdGlvbiA/IF9sb2NhdGlvbi5wYXRobmFtZSArIF9sb2NhdGlvbi5zZWFyY2ggOiAnJyksXG4gIH07XG59XG5cbi8qKiBTVkcgYXR0cmlidXRlcyB0aGF0IGFjY2VwdCBhIEZ1bmNJUkkgKGUuZy4gYHVybCg8c29tZXRoaW5nPilgKS4gKi9cbmNvbnN0IGZ1bmNJcmlBdHRyaWJ1dGVzID0gW1xuICAnY2xpcC1wYXRoJyxcbiAgJ2NvbG9yLXByb2ZpbGUnLFxuICAnc3JjJyxcbiAgJ2N1cnNvcicsXG4gICdmaWxsJyxcbiAgJ2ZpbHRlcicsXG4gICdtYXJrZXInLFxuICAnbWFya2VyLXN0YXJ0JyxcbiAgJ21hcmtlci1taWQnLFxuICAnbWFya2VyLWVuZCcsXG4gICdtYXNrJyxcbiAgJ3N0cm9rZScsXG5dO1xuLyoqIFNlbGVjdG9yIHRoYXQgY2FuIGJlIHVzZWQgdG8gZmluZCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgdXNpbmcgYSBgRnVuY0lSSWAuICovXG5jb25zdCBmdW5jSXJpQXR0cmlidXRlU2VsZWN0b3IgPSBmdW5jSXJpQXR0cmlidXRlcy5tYXAoYXR0ciA9PiBgWyR7YXR0cn1dYCkuam9pbignLCAnKTtcblxuLyoqIFJlZ2V4IHRoYXQgY2FuIGJlIHVzZWQgdG8gZXh0cmFjdCB0aGUgaWQgb3V0IG9mIGEgRnVuY0lSSS4gKi9cbmNvbnN0IGZ1bmNJcmlQYXR0ZXJuID0gL151cmxcXChbJ1wiXT8jKC4qPylbJ1wiXT9cXCkkLztcblxuXG4vKiogSW5wdXRzLCBkaWUgZGFzIEljb24gYXVzIGRlciBJY29uRmFjdG9yeSBiZXN0aW1tZW4gKi9cbmNvbnN0IEZBQ1RPUllfSU5QVVRTID0gWydpY29uJywgJ291dGxpbmUnLCAnZnVsbCcsICdkYXNoZWQnLCAnY29sb3InLCAnaW5uZXJDb2xvcicsICdvdXRlckNvbG9yJywgJ2RpcmVjdGlvbiddO1xuXG4vKipcbiAqIFplaWd0IGVpbiBJY29uIGFuOlxuICogLSBgaWNvbj1cImJlYXJiZWl0ZW5cIiBvdXRsaW5lYCBiYXV0IGVzIGF1cyBkZXIgSWNvbkZhY3RvcnksIG9obmUgUmVnaXN0cmllcnVuZyB1bmQgb2huZSBIVFRQO1xuICogICBkaWUgRmFyYmUgaXN0IHN0YW5kYXJkbWFlc3NpZyBkaWUgVGV4dGZhcmJlIGRlciBVbWdlYnVuZyAoYGN1cnJlbnRDb2xvcmApXG4gKiAtIGBzdmdJY29uPVwibmFtZVwiYCBiencuIGBzdmdJY29uPVwibmFtZXNwYWNlOm5hbWVcImAgaG9sdCBlaW4gaW4gZGVyIE1yZEljb25SZWdpc3RyeSByZWdpc3RyaWVydGVzIEljb247XG4gKiAgIGRpZSBGYWN0b3J5LVN5bWJvbGUgc3RlaGVuIGRvcnQgdW50ZXIgYG1yZDo8c3ltYm9sPlstb3V0bGluZXwtZnVsbHwtZGFzaGVkXVstdXB8LWRvd258LWxlZnRdYCBiZXJlaXRcbiAqIElzdCBgaWNvbmAgZ2VzZXR6dCwgaGF0IGVzIFZvcnJhbmcgdm9yIGBzdmdJY29uYC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXJkLWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tcmQtaWNvbi5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgJ3JvbGUnOiAnaW1nJyxcbiAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5tcmQtaWNvbi1zaXplZF0nOiAnISFha3R1ZWxsZUdyb2Vzc2UnLFxuICAgICdbc3R5bGUuLS1tcmQtaWNvbi1zaXplXSc6ICdha3R1ZWxsZUdyb2Vzc2UnLFxuICAgIC8vIFJlZ2lzdHJ5LUljb25zIHdlcmRlbiB1bnZlcmFlbmRlcnQgZWluZ2VoYWVuZ3Q7IHVlYmVyIGRpZSBUZXh0ZmFyYmUgd2lya3QgYGNvbG9yYCBhdWYgZGVyZW4gYGN1cnJlbnRDb2xvcmBcbiAgICAnW3N0eWxlLmNvbG9yXSc6ICchaWNvbiA/IGNvbG9yIDogbnVsbCdcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTXJkSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgLyoqIE5hbWUgb2YgdGhlIGljb24gaW4gdGhlIFNWRyBpY29uIHNldC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHN2Z0ljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc3ZnSWNvbjtcbiAgfVxuICBzZXQgc3ZnSWNvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9zdmdJY29uKSB7XG4gICAgICAvLyBFaW4gRmFjdG9yeS1JY29uIGhhdCBWb3JyYW5nOyBkZXIgV2VydCB3aXJkIGdlbWVya3QsIGZhbGxzIGBpY29uYCBzcGFldGVyIGVudGZlcm50IHdpcmRcbiAgICAgIGlmICghdGhpcy5pY29uKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZVN2Z0ljb24odmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N2Z0ljb24pIHtcbiAgICAgICAgICB0aGlzLl9jbGVhclN2Z0VsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fc3ZnSWNvbiA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9zdmdJY29uOiBzdHJpbmc7XG5cbiAgLyoqIFN5bWJvbCBhdXMgZGVyIEljb25GYWN0b3J5LCB6LiBCLiBgYmVhcmJlaXRlbmAsIGBwZmVpbGAgb2RlciBlaW4gcGVyIGBwcm92aWRlTXJkSWNvbnMoe3N5bWJvbHN9KWAgcmVnaXN0cmllcnRlcyAqL1xuICBASW5wdXQoKSBpY29uOiBNcmRJY29uU3ltYm9sO1xuXG4gIC8qKiBLcmVpcy1VbXJpc3MgdW0gZGFzIFN5bWJvbCAqL1xuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIG91dGxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogR2VmdWVsbHRlciBLcmVpczsgZGFzIFN5bWJvbCBpc3QgZGFyYXVmIHN0YW5kYXJkbWFlc3NpZyB3ZWlzcyAqL1xuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGZ1bGw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogR2VzdHJpY2hlbHRlciBLcmVpcyAqL1xuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGRhc2hlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBGYXJiZSBmdWVyIFJhaG1lbiB1bmQgU3ltYm9sOyBvaG5lIEFuZ2FiZSBkaWUgVGV4dGZhcmJlIGRlciBVbWdlYnVuZy5cbiAgICogQmVpIGBzdmdJY29uYCB3aXJkIHNpZSBhbHMgVGV4dGZhcmJlIGdlc2V0enQgdW5kIGZhZXJidCBudXIgVGVpbGUgbWl0IGBjdXJyZW50Q29sb3JgLCBmZXN0IGVpbmdldHJhZ2VuZSBGYXJiZW4gYmxlaWJlbi5cbiAgICovXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBpY29uQ29sb3JBdHRyaWJ1dGV9KSBjb2xvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBpY29uQ29sb3JBdHRyaWJ1dGV9KSBpbm5lckNvbG9yOiBzdHJpbmc7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IGljb25Db2xvckF0dHJpYnV0ZX0pIG91dGVyQ29sb3I6IHN0cmluZztcblxuICAvKiogRHJlaHVuZyBkZXMgU3ltYm9scywgei4gQi4gZnVlciBQZmVpbGUgKi9cbiAgQElucHV0KCkgZGlyZWN0aW9uOiBJY29uRGlyZWN0aW9uIHwgbnVtYmVyO1xuICAvKiogS2FudGVubGFlbmdlLCB6LiBCLiBgMjRgLCBgXCIxLjVlbVwiYDsgU3RhbmRhcmQgMjRweCwgYXVjaCBmdWVyIGBzdmdJY29uYCAqL1xuICAvKiogS2FudGVubGFlbmdlLCB6LiBCLiBgMjRgLCBgXCIxLjVlbVwiYDsgU3RhbmRhcmQgYmVpIGBpY29uYCBhdXMgZGVyIENvbmZpZywgYmVpIGBzdmdJY29uYCBvaG5lIEFuZ2FiZSB3aWUgYmlzaGVyIGtlaW5lICovXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBzaXplQXR0cmlidXRlfSkgc2l6ZTogc3RyaW5nID0gJzI0cHgnO1xuXG4gIF9zdmdOYW1lOiBzdHJpbmcgfCBudWxsO1xuICBfc3ZnTmFtZXNwYWNlOiBzdHJpbmcgfCBudWxsO1xuXG4gIC8qKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBwYWdlIHBhdGguICovXG4gIHByaXZhdGUgX3ByZXZpb3VzUGF0aD86IHN0cmluZztcblxuICAvKiogS2VlcHMgdHJhY2sgb2YgdGhlIGVsZW1lbnRzIGFuZCBhdHRyaWJ1dGVzIHRoYXQgd2UndmUgcHJlZml4ZWQgd2l0aCB0aGUgY3VycmVudCBwYXRoLiAqL1xuICBwcml2YXRlIF9lbGVtZW50c1dpdGhFeHRlcm5hbFJlZmVyZW5jZXM/OiBNYXA8RWxlbWVudCwge25hbWU6IHN0cmluZzsgdmFsdWU6IHN0cmluZ31bXT47XG5cbiAgLyoqIFN1YnNjcmlwdGlvbiB0byB0aGUgY3VycmVudCBpbi1wcm9ncmVzcyBTVkcgaWNvbiByZXF1ZXN0LiAqL1xuICBwcml2YXRlIF9jdXJyZW50SWNvbkZldGNoID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBJbmplY3QoTVJEX0lDT05fTE9DQVRJT04pIHByaXZhdGUgX2xvY2F0aW9uOiBNcmRJY29uTG9jYXRpb24sXG4gICAgcHJpdmF0ZSBfZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXIsXG4gICAgcHJpdmF0ZSBfaWNvblJlZ2lzdHJ5OiBNcmRJY29uUmVnaXN0cnlTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3N5bWJvbFJlZ2lzdHJ5OiBNcmRJY29uU3ltYm9sUmVnaXN0cnlTZXJ2aWNlLFxuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICghRkFDVE9SWV9JTlBVVFMuc29tZShpbnB1dCA9PiBpbnB1dCBpbiBjaGFuZ2VzKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pY29uKSB7XG4gICAgICB0aGlzLl9mYWN0b3J5SWNvbkFuemVpZ2VuKCk7XG4gICAgfSBlbHNlIGlmICgnaWNvbicgaW4gY2hhbmdlcyAmJiAhY2hhbmdlc1snaWNvbiddLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAvLyBpY29uIHd1cmRlIGVudGZlcm50OiBhdWYgc3ZnSWNvbiB6dXJ1ZWNrZmFsbGVuXG4gICAgICBpZiAodGhpcy5fc3ZnSWNvbikge1xuICAgICAgICB0aGlzLl91cGRhdGVTdmdJY29uKHRoaXMuX3N2Z0ljb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fY2xlYXJTdmdFbGVtZW50KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBha3R1ZWxsZUdyb2Vzc2UoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSB8fCAodGhpcy5pY29uID8gQ29uZmlnVXRpbC5nZXRDb25maWcoKS5pY29uLnNpemUgOiBudWxsKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9yYWhtZW4oKTogTXJkSWNvbk91dGVyIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5mdWxsKSB7XG4gICAgICByZXR1cm4gJ2Z1bGwnO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXNoZWQpIHtcbiAgICAgIHJldHVybiAnZGFzaGVkJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3V0bGluZSA/ICdvdXRsaW5lJyA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgX2ZhY3RvcnlJY29uQW56ZWlnZW4oKTogdm9pZCB7XG4gICAgdGhpcy5fY3VycmVudEljb25GZXRjaC51bnN1YnNjcmliZSgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdmcgPSB0aGlzLl9zeW1ib2xSZWdpc3RyeS5jcmVhdGVTdmcoe1xuICAgICAgICBzeW1ib2w6IHRoaXMuaWNvbixcbiAgICAgICAgb3V0ZXI6IHRoaXMuX3JhaG1lbixcbiAgICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICAgIGlubmVyQ29sb3I6IHRoaXMuaW5uZXJDb2xvcixcbiAgICAgICAgb3V0ZXJDb2xvcjogdGhpcy5vdXRlckNvbG9yLFxuICAgICAgICBkaXJlY3Rpb246IHRoaXMuZGlyZWN0aW9uXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3NldFN2Z0VsZW1lbnQodGhpcy5faWNvblJlZ2lzdHJ5LmNyZWF0ZVN2Z0VsZW1lbnRGcm9tVHJ1c3RlZFN0cmluZyhzdmcpKTtcbiAgICB9IGNhdGNoIChmZWhsZXIpIHtcbiAgICAgIHRoaXMuX2NsZWFyU3ZnRWxlbWVudCgpO1xuICAgICAgdGhpcy5fZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKGZlaGxlcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0U3ZnRWxlbWVudChzdmc6IFNWR0VsZW1lbnQpIHtcbiAgICB0aGlzLl9jbGVhclN2Z0VsZW1lbnQoKTtcblxuICAgIC8vIE5vdGU6IHdlIGRvIHRoaXMgZml4IGhlcmUsIHJhdGhlciB0aGFuIHRoZSBpY29uIHJlZ2lzdHJ5LCBiZWNhdXNlIHRoZVxuICAgIC8vIHJlZmVyZW5jZXMgaGF2ZSB0byBwb2ludCB0byB0aGUgVVJMIGF0IHRoZSB0aW1lIHRoYXQgdGhlIGljb24gd2FzIGNyZWF0ZWQuXG4gICAgY29uc3QgcGF0aCA9IHRoaXMuX2xvY2F0aW9uLmdldFBhdGhuYW1lKCk7XG4gICAgdGhpcy5fcHJldmlvdXNQYXRoID0gcGF0aDtcbiAgICB0aGlzLl9jYWNoZUNoaWxkcmVuV2l0aEV4dGVybmFsUmVmZXJlbmNlcyhzdmcpO1xuICAgIHRoaXMuX3ByZXBlbmRQYXRoVG9SZWZlcmVuY2VzKHBhdGgpO1xuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChzdmcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xlYXJTdmdFbGVtZW50KCkge1xuICAgIGNvbnN0IGxheW91dEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGxldCBjaGlsZENvdW50ID0gbGF5b3V0RWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLl9lbGVtZW50c1dpdGhFeHRlcm5hbFJlZmVyZW5jZXMpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnRzV2l0aEV4dGVybmFsUmVmZXJlbmNlcy5jbGVhcigpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBleGlzdGluZyBub24tZWxlbWVudCBjaGlsZCBub2RlcyBhbmQgU1ZHcywgYW5kIGFkZCB0aGUgbmV3IFNWRyBlbGVtZW50LiBOb3RlIHRoYXRcbiAgICAvLyB3ZSBjYW4ndCB1c2UgaW5uZXJIVE1MLCBiZWNhdXNlIElFIHdpbGwgdGhyb3cgaWYgdGhlIGVsZW1lbnQgaGFzIGEgZGF0YSBiaW5kaW5nLlxuICAgIHdoaWxlIChjaGlsZENvdW50LS0pIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gbGF5b3V0RWxlbWVudC5jaGlsZE5vZGVzW2NoaWxkQ291bnRdO1xuXG4gICAgICAvLyAxIGNvcnJlc3BvbmRzIHRvIE5vZGUuRUxFTUVOVF9OT0RFLiBXZSByZW1vdmUgYWxsIG5vbi1lbGVtZW50IG5vZGVzIGluIG9yZGVyIHRvIGdldCByaWRcbiAgICAgIC8vIG9mIGFueSBsb29zZSB0ZXh0IG5vZGVzLCBhcyB3ZWxsIGFzIGFueSBTVkcgZWxlbWVudHMgaW4gb3JkZXIgdG8gcmVtb3ZlIGFueSBvbGQgaWNvbnMuXG4gICAgICBpZiAoY2hpbGQubm9kZVR5cGUgIT09IDEgfHwgY2hpbGQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBlbmRzIHRoZSBjdXJyZW50IHBhdGggdG8gYWxsIGVsZW1lbnRzIHRoYXQgaGF2ZSBhbiBhdHRyaWJ1dGUgcG9pbnRpbmcgdG8gYSBgRnVuY0lSSWBcbiAgICogcmVmZXJlbmNlLiBUaGlzIGlzIHJlcXVpcmVkIGJlY2F1c2UgV2ViS2l0IGJyb3dzZXJzIHJlcXVpcmUgcmVmZXJlbmNlcyB0byBiZSBwcmVmaXhlZCB3aXRoXG4gICAqIHRoZSBjdXJyZW50IHBhdGgsIGlmIHRoZSBwYWdlIGhhcyBhIGBiYXNlYCB0YWcuXG4gICAqL1xuICBwcml2YXRlIF9wcmVwZW5kUGF0aFRvUmVmZXJlbmNlcyhwYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuX2VsZW1lbnRzV2l0aEV4dGVybmFsUmVmZXJlbmNlcztcblxuICAgIGlmIChlbGVtZW50cykge1xuICAgICAgZWxlbWVudHMuZm9yRWFjaCgoYXR0cnMsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgYXR0cnMuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGB1cmwoJyR7cGF0aH0jJHthdHRyLnZhbHVlfScpYCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhY2hlcyB0aGUgY2hpbGRyZW4gb2YgYW4gU1ZHIGVsZW1lbnQgdGhhdCBoYXZlIGB1cmwoKWBcbiAgICogcmVmZXJlbmNlcyB0aGF0IHdlIG5lZWQgdG8gcHJlZml4IHdpdGggdGhlIGN1cnJlbnQgcGF0aC5cbiAgICovXG4gIHByaXZhdGUgX2NhY2hlQ2hpbGRyZW5XaXRoRXh0ZXJuYWxSZWZlcmVuY2VzKGVsZW1lbnQ6IFNWR0VsZW1lbnQpIHtcbiAgICBjb25zdCBlbGVtZW50c1dpdGhGdW5jSXJpID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGZ1bmNJcmlBdHRyaWJ1dGVTZWxlY3Rvcik7XG4gICAgY29uc3QgZWxlbWVudHMgPSAodGhpcy5fZWxlbWVudHNXaXRoRXh0ZXJuYWxSZWZlcmVuY2VzID1cbiAgICAgIHRoaXMuX2VsZW1lbnRzV2l0aEV4dGVybmFsUmVmZXJlbmNlcyB8fCBuZXcgTWFwKCkpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50c1dpdGhGdW5jSXJpLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmdW5jSXJpQXR0cmlidXRlcy5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50V2l0aFJlZmVyZW5jZSA9IGVsZW1lbnRzV2l0aEZ1bmNJcmlbaV07XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudFdpdGhSZWZlcmVuY2UuZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAgICAgICBjb25zdCBtYXRjaCA9IHZhbHVlID8gdmFsdWUubWF0Y2goZnVuY0lyaVBhdHRlcm4pIDogbnVsbDtcblxuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICBsZXQgYXR0cmlidXRlcyA9IGVsZW1lbnRzLmdldChlbGVtZW50V2l0aFJlZmVyZW5jZSk7XG5cbiAgICAgICAgICBpZiAoIWF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgICAgIGVsZW1lbnRzLnNldChlbGVtZW50V2l0aFJlZmVyZW5jZSwgYXR0cmlidXRlcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXR0cmlidXRlcyEucHVzaCh7bmFtZTogYXR0ciwgdmFsdWU6IG1hdGNoWzFdfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZXRzIGEgbmV3IFNWRyBpY29uIHdpdGggYSBwYXJ0aWN1bGFyIG5hbWUuICovXG4gIHByaXZhdGUgX3VwZGF0ZVN2Z0ljb24ocmF3TmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3ZnTmFtZXNwYWNlID0gbnVsbDtcbiAgICB0aGlzLl9zdmdOYW1lID0gbnVsbDtcbiAgICB0aGlzLl9jdXJyZW50SWNvbkZldGNoLnVuc3Vic2NyaWJlKCk7XG5cbiAgICBpZiAocmF3TmFtZSkge1xuICAgICAgY29uc3QgW25hbWVzcGFjZSwgaWNvbk5hbWVdID0gdGhpcy5fc3BsaXRJY29uTmFtZShyYXdOYW1lKTtcblxuICAgICAgaWYgKG5hbWVzcGFjZSkge1xuICAgICAgICB0aGlzLl9zdmdOYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChpY29uTmFtZSkge1xuICAgICAgICB0aGlzLl9zdmdOYW1lID0gaWNvbk5hbWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2N1cnJlbnRJY29uRmV0Y2ggPSB0aGlzLl9pY29uUmVnaXN0cnlcbiAgICAgICAgLmdldE5hbWVkU3ZnSWNvbihpY29uTmFtZSwgbmFtZXNwYWNlKVxuICAgICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIHN2ZyA9PiB0aGlzLl9zZXRTdmdFbGVtZW50KHN2ZyksXG4gICAgICAgICAgKGVycjogRXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGBFcnJvciByZXRyaWV2aW5nIGljb24gJHtuYW1lc3BhY2V9OiR7aWNvbk5hbWV9ISAke2Vyci5tZXNzYWdlfWA7XG4gICAgICAgICAgICB0aGlzLl9lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEVycm9yKGVycm9yTWVzc2FnZSkpO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNwbGl0cyBhbiBzdmdJY29uIGJpbmRpbmcgdmFsdWUgaW50byBpdHMgaWNvbiBzZXQgYW5kIGljb24gbmFtZSBjb21wb25lbnRzLlxuICAgKiBSZXR1cm5zIGEgMi1lbGVtZW50IGFycmF5IG9mIFsoaWNvbiBzZXQpLCAoaWNvbiBuYW1lKV0uXG4gICAqIFRoZSBzZXBhcmF0b3IgZm9yIHRoZSB0d28gZmllbGRzIGlzICc6Jy4gSWYgdGhlcmUgaXMgbm8gc2VwYXJhdG9yLCBhbiBlbXB0eVxuICAgKiBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIHRoZSBpY29uIHNldCBhbmQgdGhlIGVudGlyZSB2YWx1ZSBpcyByZXR1cm5lZCBmb3JcbiAgICogdGhlIGljb24gbmFtZS4gSWYgdGhlIGFyZ3VtZW50IGlzIGZhbHN5LCByZXR1cm5zIGFuIGFycmF5IG9mIHR3byBlbXB0eSBzdHJpbmdzLlxuICAgKiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIG5hbWUgY29udGFpbnMgdHdvIG9yIG1vcmUgJzonIHNlcGFyYXRvcnMuXG4gICAqIEV4YW1wbGVzOlxuICAgKiAgIGAnc29jaWFsOmNha2UnIC0+IFsnc29jaWFsJywgJ2Nha2UnXVxuICAgKiAgICdwZW5ndWluJyAtPiBbJycsICdwZW5ndWluJ11cbiAgICogICBudWxsIC0+IFsnJywgJyddXG4gICAqICAgJ2E6YjpjJyAtPiAodGhyb3dzIEVycm9yKWBcbiAgICovXG4gIHByaXZhdGUgX3NwbGl0SWNvbk5hbWUoaWNvbk5hbWU6IHN0cmluZyk6IFtzdHJpbmcsIHN0cmluZ10ge1xuICAgIGlmICghaWNvbk5hbWUpIHtcbiAgICAgIHJldHVybiBbJycsICcnXTtcbiAgICB9XG4gICAgY29uc3QgcGFydHMgPSBpY29uTmFtZS5zcGxpdCgnOicpO1xuICAgIHN3aXRjaCAocGFydHMubGVuZ3RoKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBbJycsIHBhcnRzWzBdXTsgLy8gVXNlIGRlZmF1bHQgbmFtZXNwYWNlLlxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gPFtzdHJpbmcsIHN0cmluZ10+cGFydHM7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBpY29uIG5hbWU6IFwiJHtpY29uTmFtZX1cImApOyAvLyBUT0RPOiBhZGQgYW4gbmdEZXZNb2RlIGNoZWNrXG4gICAgfVxuICB9XG59XG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiJdfQ==