import { DOCUMENT } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, Inject, inject, InjectionToken, Input } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { MRD_ICON_NAMESPACE } from '../../../common/service/mrd-icon-symbol-registry.service';
import { sizeAttribute } from '../../../common/transforms/size-transform';
import { ConfigUtil } from '../../../common/util/config.util';
import { iconColorAttribute } from '../common/transforms/icon-color-transform';
import * as i0 from "@angular/core";
import * as i1 from "../../../common/service/mrd-icon-registry.service";
import * as i2 from "../../../common/service/mrd-icon-symbol-registry.service";
import * as i3 from "../../../common/service/mrd-icon-datenbank.service";
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
    _datenbank;
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
    _symbolAenderungen;
    constructor(_elementRef, _location, _errorHandler, _iconRegistry, _symbolRegistry, _datenbank) {
        this._elementRef = _elementRef;
        this._location = _location;
        this._errorHandler = _errorHandler;
        this._iconRegistry = _iconRegistry;
        this._symbolRegistry = _symbolRegistry;
        this._datenbank = _datenbank;
        // Ohne provideMrdIconDatenbank() im Host startet das erste Icon das Laden, ohne darauf zu warten
        void this._datenbank.laden(false);
        this._symbolAenderungen = this._symbolRegistry.aenderungen$.subscribe(() => this._symboleGeaendert());
    }
    ngOnDestroy() {
        this._symbolAenderungen.unsubscribe();
        this._currentIconFetch.unsubscribe();
    }
    /** Bereits angezeigte Icons aus Factory-Symbolen neu bauen, z. B. nachdem die Symbole aus der Datenbank da sind */
    _symboleGeaendert() {
        if (this.icon) {
            this._factoryIconAnzeigen();
        }
        else if (this._svgIcon && this._splitIconName(this._svgIcon)[0] === MRD_ICON_NAMESPACE) {
            this._updateSvgIcon(this._svgIcon);
        }
    }
    /** Ein noch unbekanntes Symbol kann mit der ausstehenden Antwort der Datenbank noch kommen */
    get _symbolKannNochKommen() {
        return this._datenbank.laeuft;
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
            if (!this._symbolKannNochKommen) {
                this._errorHandler.handleError(fehler);
            }
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
                if (namespace === MRD_ICON_NAMESPACE && this._symbolKannNochKommen) {
                    return;
                }
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
    /** @nocollapse */ static ɵfac = function MrdIconComponent_Factory(t) { return new (t || MrdIconComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(MRD_ICON_LOCATION), i0.ɵɵdirectiveInject(i0.ErrorHandler), i0.ɵɵdirectiveInject(i1.MrdIconRegistryService), i0.ɵɵdirectiveInject(i2.MrdIconSymbolRegistryService), i0.ɵɵdirectiveInject(i3.MrdIconDatenbankService)); };
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
            }] }, { type: i0.ErrorHandler }, { type: i1.MrdIconRegistryService }, { type: i2.MrdIconSymbolRegistryService }, { type: i3.MrdIconDatenbankService }]; }, { svgIcon: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1pY29uL2NvbXBvbmVudHMvbXJkLWljb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1pY29uL2NvbXBvbmVudHMvbXJkLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQTRCLE1BQU0sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBdUMsTUFBTSxlQUFlLENBQUM7QUFDM0wsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUMsT0FBTyxFQUFFLGtCQUFrQixFQUE2RCxNQUFNLDBEQUEwRCxDQUFDO0FBR3pKLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7Ozs7OztBQUcvRTs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxjQUFjLENBQWtCLG1CQUFtQixFQUFFO0lBQ3hGLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLE9BQU8sRUFBRSx5QkFBeUI7Q0FDbkMsQ0FBQyxDQUFDO0FBVUgsb0JBQW9CO0FBQ3BCLE1BQU0sVUFBVSx5QkFBeUI7SUFDdkMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lB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aEIsZ0JBQWdCLDZCQU1oQixrQkFBa0IsNENBRWxCLGtCQUFrQiw0Q0FFbEIsa0JBQWtCLGtEQU1sQixhQUFhOztZQ3pJbEMsa0JBQXlCOzs7dUZEeUZaLGdCQUFnQjtjQWQ1QixTQUFTOzJCQUNFLFVBQVUsUUFHZDtvQkFDSixNQUFNLEVBQUUsS0FBSztvQkFDYixhQUFhLEVBQUUsTUFBTTtvQkFDckIsd0JBQXdCLEVBQUUsbUJBQW1CO29CQUM3Qyx5QkFBeUIsRUFBRSxpQkFBaUI7b0JBQzVDLDZHQUE2RztvQkFDN0csZUFBZSxFQUFFLHNCQUFzQjtpQkFDeEMsbUJBQ2dCLHVCQUF1QixDQUFDLE1BQU07O3NCQW9FNUMsTUFBTTt1QkFBQyxpQkFBaUI7eUtBOUR2QixPQUFPO2tCQURWLEtBQUs7WUFvQkcsSUFBSTtrQkFBWixLQUFLO1lBR2dDLE9BQU87a0JBQTVDLEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFHRSxJQUFJO2tCQUF6QyxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBR0UsTUFBTTtrQkFBM0MsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQU1JLEtBQUs7a0JBQTVDLEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFFRSxVQUFVO2tCQUFqRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBRUUsVUFBVTtrQkFBakQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUc3QixTQUFTO2tCQUFqQixLQUFLO1lBRzZCLElBQUk7a0JBQXRDLEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsYUFBYSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgYm9vbGVhbkF0dHJpYnV0ZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXJyb3JIYW5kbGVyLCBJbmplY3QsIGluamVjdCwgSW5qZWN0aW9uVG9rZW4sIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCB0YWtlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNcmRJY29uUmVnaXN0cnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2UvbXJkLWljb24tcmVnaXN0cnkuc2VydmljZSc7XG5pbXBvcnQgeyBNUkRfSUNPTl9OQU1FU1BBQ0UsIE1yZEljb25PdXRlciwgTXJkSWNvblN5bWJvbCwgTXJkSWNvblN5bWJvbFJlZ2lzdHJ5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlL21yZC1pY29uLXN5bWJvbC1yZWdpc3RyeS5zZXJ2aWNlJztcbmltcG9ydCB7IE1yZEljb25EYXRlbmJhbmtTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2UvbXJkLWljb24tZGF0ZW5iYW5rLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWNvbkRpcmVjdGlvbiB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlL2ljb24tZmFjdG9yeS5zZXJ2aWNlJztcbmltcG9ydCB7IHNpemVBdHRyaWJ1dGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdHJhbnNmb3Jtcy9zaXplLXRyYW5zZm9ybSc7XG5pbXBvcnQgeyBDb25maWdVdGlsIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3V0aWwvY29uZmlnLnV0aWwnO1xuaW1wb3J0IHsgaWNvbkNvbG9yQXR0cmlidXRlIH0gZnJvbSAnLi4vY29tbW9uL3RyYW5zZm9ybXMvaWNvbi1jb2xvci10cmFuc2Zvcm0nO1xuXG5cbi8qKlxuICogSW5qZWN0aW9uIHRva2VuIHVzZWQgdG8gcHJvdmlkZSB0aGUgY3VycmVudCBsb2NhdGlvbiB0byBgTWF0SWNvbmAuXG4gKiBVc2VkIHRvIGhhbmRsZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgYW5kIHRvIHN0dWIgb3V0IGR1cmluZyB1bml0IHRlc3RzLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgTVJEX0lDT05fTE9DQVRJT04gPSBuZXcgSW5qZWN0aW9uVG9rZW48TXJkSWNvbkxvY2F0aW9uPignbXJkLWljb24tbG9jYXRpb24nLCB7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgZmFjdG9yeTogTVJEX0lDT05fTE9DQVRJT05fRkFDVE9SWSxcbn0pO1xuXG4vKipcbiAqIFN0dWJiZWQgb3V0IGxvY2F0aW9uIGZvciBgTWF0SWNvbmAuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTXJkSWNvbkxvY2F0aW9uIHtcbiAgZ2V0UGF0aG5hbWU6ICgpID0+IHN0cmluZztcbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBNUkRfSUNPTl9MT0NBVElPTl9GQUNUT1JZKCk6IE1yZEljb25Mb2NhdGlvbiB7XG4gIGNvbnN0IF9kb2N1bWVudCA9IGluamVjdChET0NVTUVOVCk7XG4gIGNvbnN0IF9sb2NhdGlvbiA9IF9kb2N1bWVudCA/IF9kb2N1bWVudC5sb2NhdGlvbiA6IG51bGw7XG5cbiAgcmV0dXJuIHtcbiAgICAvLyBOb3RlIHRoYXQgdGhpcyBuZWVkcyB0byBiZSBhIGZ1bmN0aW9uLCByYXRoZXIgdGhhbiBhIHByb3BlcnR5LCBiZWNhdXNlIEFuZ3VsYXJcbiAgICAvLyB3aWxsIG9ubHkgcmVzb2x2ZSBpdCBvbmNlLCBidXQgd2Ugd2FudCB0aGUgY3VycmVudCBwYXRoIG9uIGVhY2ggY2FsbC5cbiAgICBnZXRQYXRobmFtZTogKCkgPT4gKF9sb2NhdGlvbiA/IF9sb2NhdGlvbi5wYXRobmFtZSArIF9sb2NhdGlvbi5zZWFyY2ggOiAnJyksXG4gIH07XG59XG5cbi8qKiBTVkcgYXR0cmlidXRlcyB0aGF0IGFjY2VwdCBhIEZ1bmNJUkkgKGUuZy4gYHVybCg8c29tZXRoaW5nPilgKS4gKi9cbmNvbnN0IGZ1bmNJcmlBdHRyaWJ1dGVzID0gW1xuICAnY2xpcC1wYXRoJyxcbiAgJ2NvbG9yLXByb2ZpbGUnLFxuICAnc3JjJyxcbiAgJ2N1cnNvcicsXG4gICdmaWxsJyxcbiAgJ2ZpbHRlcicsXG4gICdtYXJrZXInLFxuICAnbWFya2VyLXN0YXJ0JyxcbiAgJ21hcmtlci1taWQnLFxuICAnbWFya2VyLWVuZCcsXG4gICdtYXNrJyxcbiAgJ3N0cm9rZScsXG5dO1xuLyoqIFNlbGVjdG9yIHRoYXQgY2FuIGJlIHVzZWQgdG8gZmluZCBhbGwgZWxlbWVudHMgdGhhdCBhcmUgdXNpbmcgYSBgRnVuY0lSSWAuICovXG5jb25zdCBmdW5jSXJpQXR0cmlidXRlU2VsZWN0b3IgPSBmdW5jSXJpQXR0cmlidXRlcy5tYXAoYXR0ciA9PiBgWyR7YXR0cn1dYCkuam9pbignLCAnKTtcblxuLyoqIFJlZ2V4IHRoYXQgY2FuIGJlIHVzZWQgdG8gZXh0cmFjdCB0aGUgaWQgb3V0IG9mIGEgRnVuY0lSSS4gKi9cbmNvbnN0IGZ1bmNJcmlQYXR0ZXJuID0gL151cmxcXChbJ1wiXT8jKC4qPylbJ1wiXT9cXCkkLztcblxuXG4vKiogSW5wdXRzLCBkaWUgZGFzIEljb24gYXVzIGRlciBJY29uRmFjdG9yeSBiZXN0aW1tZW4gKi9cbmNvbnN0IEZBQ1RPUllfSU5QVVRTID0gWydpY29uJywgJ291dGxpbmUnLCAnZnVsbCcsICdkYXNoZWQnLCAnY29sb3InLCAnaW5uZXJDb2xvcicsICdvdXRlckNvbG9yJywgJ2RpcmVjdGlvbiddO1xuXG4vKipcbiAqIFplaWd0IGVpbiBJY29uIGFuOlxuICogLSBgaWNvbj1cImJlYXJiZWl0ZW5cIiBvdXRsaW5lYCBiYXV0IGVzIGF1cyBkZXIgSWNvbkZhY3RvcnksIG9obmUgUmVnaXN0cmllcnVuZyB1bmQgb2huZSBIVFRQO1xuICogICBkaWUgRmFyYmUgaXN0IHN0YW5kYXJkbWFlc3NpZyBkaWUgVGV4dGZhcmJlIGRlciBVbWdlYnVuZyAoYGN1cnJlbnRDb2xvcmApXG4gKiAtIGBzdmdJY29uPVwibmFtZVwiYCBiencuIGBzdmdJY29uPVwibmFtZXNwYWNlOm5hbWVcImAgaG9sdCBlaW4gaW4gZGVyIE1yZEljb25SZWdpc3RyeSByZWdpc3RyaWVydGVzIEljb247XG4gKiAgIGRpZSBGYWN0b3J5LVN5bWJvbGUgc3RlaGVuIGRvcnQgdW50ZXIgYG1yZDo8c3ltYm9sPlstb3V0bGluZXwtZnVsbHwtZGFzaGVkXVstdXB8LWRvd258LWxlZnRdYCBiZXJlaXRcbiAqIElzdCBgaWNvbmAgZ2VzZXR6dCwgaGF0IGVzIFZvcnJhbmcgdm9yIGBzdmdJY29uYC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXJkLWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tcmQtaWNvbi5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgJ3JvbGUnOiAnaW1nJyxcbiAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5tcmQtaWNvbi1zaXplZF0nOiAnISFha3R1ZWxsZUdyb2Vzc2UnLFxuICAgICdbc3R5bGUuLS1tcmQtaWNvbi1zaXplXSc6ICdha3R1ZWxsZUdyb2Vzc2UnLFxuICAgIC8vIFJlZ2lzdHJ5LUljb25zIHdlcmRlbiB1bnZlcmFlbmRlcnQgZWluZ2VoYWVuZ3Q7IHVlYmVyIGRpZSBUZXh0ZmFyYmUgd2lya3QgYGNvbG9yYCBhdWYgZGVyZW4gYGN1cnJlbnRDb2xvcmBcbiAgICAnW3N0eWxlLmNvbG9yXSc6ICchaWNvbiA/IGNvbG9yIDogbnVsbCdcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTXJkSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAvKiogTmFtZSBvZiB0aGUgaWNvbiBpbiB0aGUgU1ZHIGljb24gc2V0LiAqL1xuICBASW5wdXQoKVxuICBnZXQgc3ZnSWNvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zdmdJY29uO1xuICB9XG4gIHNldCBzdmdJY29uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3N2Z0ljb24pIHtcbiAgICAgIC8vIEVpbiBGYWN0b3J5LUljb24gaGF0IFZvcnJhbmc7IGRlciBXZXJ0IHdpcmQgZ2VtZXJrdCwgZmFsbHMgYGljb25gIHNwYWV0ZXIgZW50ZmVybnQgd2lyZFxuICAgICAgaWYgKCF0aGlzLmljb24pIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlU3ZnSWNvbih2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3ZnSWNvbikge1xuICAgICAgICAgIHRoaXMuX2NsZWFyU3ZnRWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9zdmdJY29uID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX3N2Z0ljb246IHN0cmluZztcblxuICAvKiogU3ltYm9sIGF1cyBkZXIgSWNvbkZhY3RvcnksIHouIEIuIGBiZWFyYmVpdGVuYCwgYHBmZWlsYCBvZGVyIGVpbiBwZXIgYHByb3ZpZGVNcmRJY29ucyh7c3ltYm9sc30pYCByZWdpc3RyaWVydGVzICovXG4gIEBJbnB1dCgpIGljb246IE1yZEljb25TeW1ib2w7XG5cbiAgLyoqIEtyZWlzLVVtcmlzcyB1bSBkYXMgU3ltYm9sICovXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgb3V0bGluZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBHZWZ1ZWxsdGVyIEtyZWlzOyBkYXMgU3ltYm9sIGlzdCBkYXJhdWYgc3RhbmRhcmRtYWVzc2lnIHdlaXNzICovXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgZnVsbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBHZXN0cmljaGVsdGVyIEtyZWlzICovXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgZGFzaGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEZhcmJlIGZ1ZXIgUmFobWVuIHVuZCBTeW1ib2w7IG9obmUgQW5nYWJlIGRpZSBUZXh0ZmFyYmUgZGVyIFVtZ2VidW5nLlxuICAgKiBCZWkgYHN2Z0ljb25gIHdpcmQgc2llIGFscyBUZXh0ZmFyYmUgZ2VzZXR6dCB1bmQgZmFlcmJ0IG51ciBUZWlsZSBtaXQgYGN1cnJlbnRDb2xvcmAsIGZlc3QgZWluZ2V0cmFnZW5lIEZhcmJlbiBibGVpYmVuLlxuICAgKi9cbiAgQElucHV0KHt0cmFuc2Zvcm06IGljb25Db2xvckF0dHJpYnV0ZX0pIGNvbG9yOiBzdHJpbmc7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IGljb25Db2xvckF0dHJpYnV0ZX0pIGlubmVyQ29sb3I6IHN0cmluZztcblxuICBASW5wdXQoe3RyYW5zZm9ybTogaWNvbkNvbG9yQXR0cmlidXRlfSkgb3V0ZXJDb2xvcjogc3RyaW5nO1xuXG4gIC8qKiBEcmVodW5nIGRlcyBTeW1ib2xzLCB6LiBCLiBmdWVyIFBmZWlsZSAqL1xuICBASW5wdXQoKSBkaXJlY3Rpb246IEljb25EaXJlY3Rpb24gfCBudW1iZXI7XG4gIC8qKiBLYW50ZW5sYWVuZ2UsIHouIEIuIGAyNGAsIGBcIjEuNWVtXCJgOyBTdGFuZGFyZCAyNHB4LCBhdWNoIGZ1ZXIgYHN2Z0ljb25gICovXG4gIC8qKiBLYW50ZW5sYWVuZ2UsIHouIEIuIGAyNGAsIGBcIjEuNWVtXCJgOyBTdGFuZGFyZCBiZWkgYGljb25gIGF1cyBkZXIgQ29uZmlnLCBiZWkgYHN2Z0ljb25gIG9obmUgQW5nYWJlIHdpZSBiaXNoZXIga2VpbmUgKi9cbiAgQElucHV0KHt0cmFuc2Zvcm06IHNpemVBdHRyaWJ1dGV9KSBzaXplOiBzdHJpbmcgPSAnMjRweCc7XG5cbiAgX3N2Z05hbWU6IHN0cmluZyB8IG51bGw7XG4gIF9zdmdOYW1lc3BhY2U6IHN0cmluZyB8IG51bGw7XG5cbiAgLyoqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IHBhZ2UgcGF0aC4gKi9cbiAgcHJpdmF0ZSBfcHJldmlvdXNQYXRoPzogc3RyaW5nO1xuXG4gIC8qKiBLZWVwcyB0cmFjayBvZiB0aGUgZWxlbWVudHMgYW5kIGF0dHJpYnV0ZXMgdGhhdCB3ZSd2ZSBwcmVmaXhlZCB3aXRoIHRoZSBjdXJyZW50IHBhdGguICovXG4gIHByaXZhdGUgX2VsZW1lbnRzV2l0aEV4dGVybmFsUmVmZXJlbmNlcz86IE1hcDxFbGVtZW50LCB7bmFtZTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nfVtdPjtcblxuICAvKiogU3Vic2NyaXB0aW9uIHRvIHRoZSBjdXJyZW50IGluLXByb2dyZXNzIFNWRyBpY29uIHJlcXVlc3QuICovXG4gIHByaXZhdGUgX2N1cnJlbnRJY29uRmV0Y2ggPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfc3ltYm9sQWVuZGVydW5nZW46IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBASW5qZWN0KE1SRF9JQ09OX0xPQ0FUSU9OKSBwcml2YXRlIF9sb2NhdGlvbjogTXJkSWNvbkxvY2F0aW9uLFxuICAgIHByaXZhdGUgX2Vycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyLFxuICAgIHByaXZhdGUgX2ljb25SZWdpc3RyeTogTXJkSWNvblJlZ2lzdHJ5U2VydmljZSxcbiAgICBwcml2YXRlIF9zeW1ib2xSZWdpc3RyeTogTXJkSWNvblN5bWJvbFJlZ2lzdHJ5U2VydmljZSxcbiAgICBwcml2YXRlIF9kYXRlbmJhbms6IE1yZEljb25EYXRlbmJhbmtTZXJ2aWNlLFxuICApIHtcbiAgICAvLyBPaG5lIHByb3ZpZGVNcmRJY29uRGF0ZW5iYW5rKCkgaW0gSG9zdCBzdGFydGV0IGRhcyBlcnN0ZSBJY29uIGRhcyBMYWRlbiwgb2huZSBkYXJhdWYgenUgd2FydGVuXG4gICAgdm9pZCB0aGlzLl9kYXRlbmJhbmsubGFkZW4oZmFsc2UpO1xuICAgIHRoaXMuX3N5bWJvbEFlbmRlcnVuZ2VuID0gdGhpcy5fc3ltYm9sUmVnaXN0cnkuYWVuZGVydW5nZW4kLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9zeW1ib2xlR2VhZW5kZXJ0KCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fc3ltYm9sQWVuZGVydW5nZW4udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9jdXJyZW50SWNvbkZldGNoLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKiogQmVyZWl0cyBhbmdlemVpZ3RlIEljb25zIGF1cyBGYWN0b3J5LVN5bWJvbGVuIG5ldSBiYXVlbiwgei4gQi4gbmFjaGRlbSBkaWUgU3ltYm9sZSBhdXMgZGVyIERhdGVuYmFuayBkYSBzaW5kICovXG4gIHByaXZhdGUgX3N5bWJvbGVHZWFlbmRlcnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaWNvbikge1xuICAgICAgdGhpcy5fZmFjdG9yeUljb25BbnplaWdlbigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fc3ZnSWNvbiAmJiB0aGlzLl9zcGxpdEljb25OYW1lKHRoaXMuX3N2Z0ljb24pWzBdID09PSBNUkRfSUNPTl9OQU1FU1BBQ0UpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVN2Z0ljb24odGhpcy5fc3ZnSWNvbik7XG4gICAgfVxuICB9XG5cbiAgLyoqIEVpbiBub2NoIHVuYmVrYW5udGVzIFN5bWJvbCBrYW5uIG1pdCBkZXIgYXVzc3RlaGVuZGVuIEFudHdvcnQgZGVyIERhdGVuYmFuayBub2NoIGtvbW1lbiAqL1xuICBwcml2YXRlIGdldCBfc3ltYm9sS2Fubk5vY2hLb21tZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVuYmFuay5sYWV1ZnQ7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCFGQUNUT1JZX0lOUFVUUy5zb21lKGlucHV0ID0+IGlucHV0IGluIGNoYW5nZXMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmljb24pIHtcbiAgICAgIHRoaXMuX2ZhY3RvcnlJY29uQW56ZWlnZW4oKTtcbiAgICB9IGVsc2UgaWYgKCdpY29uJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzWydpY29uJ10uZmlyc3RDaGFuZ2UpIHtcbiAgICAgIC8vIGljb24gd3VyZGUgZW50ZmVybnQ6IGF1ZiBzdmdJY29uIHp1cnVlY2tmYWxsZW5cbiAgICAgIGlmICh0aGlzLl9zdmdJY29uKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN2Z0ljb24odGhpcy5fc3ZnSWNvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jbGVhclN2Z0VsZW1lbnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFrdHVlbGxlR3JvZXNzZSgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zaXplIHx8ICh0aGlzLmljb24gPyBDb25maWdVdGlsLmdldENvbmZpZygpLmljb24uc2l6ZSA6IG51bGwpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3JhaG1lbigpOiBNcmRJY29uT3V0ZXIgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLmZ1bGwpIHtcbiAgICAgIHJldHVybiAnZnVsbCc7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhc2hlZCkge1xuICAgICAgcmV0dXJuICdkYXNoZWQnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vdXRsaW5lID8gJ291dGxpbmUnIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmFjdG9yeUljb25BbnplaWdlbigpOiB2b2lkIHtcbiAgICB0aGlzLl9jdXJyZW50SWNvbkZldGNoLnVuc3Vic2NyaWJlKCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN2ZyA9IHRoaXMuX3N5bWJvbFJlZ2lzdHJ5LmNyZWF0ZVN2Zyh7XG4gICAgICAgIHN5bWJvbDogdGhpcy5pY29uLFxuICAgICAgICBvdXRlcjogdGhpcy5fcmFobWVuLFxuICAgICAgICBjb2xvcjogdGhpcy5jb2xvcixcbiAgICAgICAgaW5uZXJDb2xvcjogdGhpcy5pbm5lckNvbG9yLFxuICAgICAgICBvdXRlckNvbG9yOiB0aGlzLm91dGVyQ29sb3IsXG4gICAgICAgIGRpcmVjdGlvbjogdGhpcy5kaXJlY3Rpb25cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fc2V0U3ZnRWxlbWVudCh0aGlzLl9pY29uUmVnaXN0cnkuY3JlYXRlU3ZnRWxlbWVudEZyb21UcnVzdGVkU3RyaW5nKHN2ZykpO1xuICAgIH0gY2F0Y2ggKGZlaGxlcikge1xuICAgICAgdGhpcy5fY2xlYXJTdmdFbGVtZW50KCk7XG4gICAgICBpZiAoIXRoaXMuX3N5bWJvbEthbm5Ob2NoS29tbWVuKSB7XG4gICAgICAgIHRoaXMuX2Vycm9ySGFuZGxlci5oYW5kbGVFcnJvcihmZWhsZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldFN2Z0VsZW1lbnQoc3ZnOiBTVkdFbGVtZW50KSB7XG4gICAgdGhpcy5fY2xlYXJTdmdFbGVtZW50KCk7XG5cbiAgICAvLyBOb3RlOiB3ZSBkbyB0aGlzIGZpeCBoZXJlLCByYXRoZXIgdGhhbiB0aGUgaWNvbiByZWdpc3RyeSwgYmVjYXVzZSB0aGVcbiAgICAvLyByZWZlcmVuY2VzIGhhdmUgdG8gcG9pbnQgdG8gdGhlIFVSTCBhdCB0aGUgdGltZSB0aGF0IHRoZSBpY29uIHdhcyBjcmVhdGVkLlxuICAgIGNvbnN0IHBhdGggPSB0aGlzLl9sb2NhdGlvbi5nZXRQYXRobmFtZSgpO1xuICAgIHRoaXMuX3ByZXZpb3VzUGF0aCA9IHBhdGg7XG4gICAgdGhpcy5fY2FjaGVDaGlsZHJlbldpdGhFeHRlcm5hbFJlZmVyZW5jZXMoc3ZnKTtcbiAgICB0aGlzLl9wcmVwZW5kUGF0aFRvUmVmZXJlbmNlcyhwYXRoKTtcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoc3ZnKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFyU3ZnRWxlbWVudCgpIHtcbiAgICBjb25zdCBsYXlvdXRFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBsZXQgY2hpbGRDb3VudCA9IGxheW91dEVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAodGhpcy5fZWxlbWVudHNXaXRoRXh0ZXJuYWxSZWZlcmVuY2VzKSB7XG4gICAgICB0aGlzLl9lbGVtZW50c1dpdGhFeHRlcm5hbFJlZmVyZW5jZXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZXhpc3Rpbmcgbm9uLWVsZW1lbnQgY2hpbGQgbm9kZXMgYW5kIFNWR3MsIGFuZCBhZGQgdGhlIG5ldyBTVkcgZWxlbWVudC4gTm90ZSB0aGF0XG4gICAgLy8gd2UgY2FuJ3QgdXNlIGlubmVySFRNTCwgYmVjYXVzZSBJRSB3aWxsIHRocm93IGlmIHRoZSBlbGVtZW50IGhhcyBhIGRhdGEgYmluZGluZy5cbiAgICB3aGlsZSAoY2hpbGRDb3VudC0tKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IGxheW91dEVsZW1lbnQuY2hpbGROb2Rlc1tjaGlsZENvdW50XTtcblxuICAgICAgLy8gMSBjb3JyZXNwb25kcyB0byBOb2RlLkVMRU1FTlRfTk9ERS4gV2UgcmVtb3ZlIGFsbCBub24tZWxlbWVudCBub2RlcyBpbiBvcmRlciB0byBnZXQgcmlkXG4gICAgICAvLyBvZiBhbnkgbG9vc2UgdGV4dCBub2RlcywgYXMgd2VsbCBhcyBhbnkgU1ZHIGVsZW1lbnRzIGluIG9yZGVyIHRvIHJlbW92ZSBhbnkgb2xkIGljb25zLlxuICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlICE9PSAxIHx8IGNoaWxkLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnKSB7XG4gICAgICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwZW5kcyB0aGUgY3VycmVudCBwYXRoIHRvIGFsbCBlbGVtZW50cyB0aGF0IGhhdmUgYW4gYXR0cmlidXRlIHBvaW50aW5nIHRvIGEgYEZ1bmNJUklgXG4gICAqIHJlZmVyZW5jZS4gVGhpcyBpcyByZXF1aXJlZCBiZWNhdXNlIFdlYktpdCBicm93c2VycyByZXF1aXJlIHJlZmVyZW5jZXMgdG8gYmUgcHJlZml4ZWQgd2l0aFxuICAgKiB0aGUgY3VycmVudCBwYXRoLCBpZiB0aGUgcGFnZSBoYXMgYSBgYmFzZWAgdGFnLlxuICAgKi9cbiAgcHJpdmF0ZSBfcHJlcGVuZFBhdGhUb1JlZmVyZW5jZXMocGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLl9lbGVtZW50c1dpdGhFeHRlcm5hbFJlZmVyZW5jZXM7XG5cbiAgICBpZiAoZWxlbWVudHMpIHtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goKGF0dHJzLCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGF0dHJzLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBgdXJsKCcke3BhdGh9IyR7YXR0ci52YWx1ZX0nKWApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWNoZXMgdGhlIGNoaWxkcmVuIG9mIGFuIFNWRyBlbGVtZW50IHRoYXQgaGF2ZSBgdXJsKClgXG4gICAqIHJlZmVyZW5jZXMgdGhhdCB3ZSBuZWVkIHRvIHByZWZpeCB3aXRoIHRoZSBjdXJyZW50IHBhdGguXG4gICAqL1xuICBwcml2YXRlIF9jYWNoZUNoaWxkcmVuV2l0aEV4dGVybmFsUmVmZXJlbmNlcyhlbGVtZW50OiBTVkdFbGVtZW50KSB7XG4gICAgY29uc3QgZWxlbWVudHNXaXRoRnVuY0lyaSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChmdW5jSXJpQXR0cmlidXRlU2VsZWN0b3IpO1xuICAgIGNvbnN0IGVsZW1lbnRzID0gKHRoaXMuX2VsZW1lbnRzV2l0aEV4dGVybmFsUmVmZXJlbmNlcyA9XG4gICAgICB0aGlzLl9lbGVtZW50c1dpdGhFeHRlcm5hbFJlZmVyZW5jZXMgfHwgbmV3IE1hcCgpKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHNXaXRoRnVuY0lyaS5sZW5ndGg7IGkrKykge1xuICAgICAgZnVuY0lyaUF0dHJpYnV0ZXMuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudFdpdGhSZWZlcmVuY2UgPSBlbGVtZW50c1dpdGhGdW5jSXJpW2ldO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnRXaXRoUmVmZXJlbmNlLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB2YWx1ZSA/IHZhbHVlLm1hdGNoKGZ1bmNJcmlQYXR0ZXJuKSA6IG51bGw7XG5cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgbGV0IGF0dHJpYnV0ZXMgPSBlbGVtZW50cy5nZXQoZWxlbWVudFdpdGhSZWZlcmVuY2UpO1xuXG4gICAgICAgICAgaWYgKCFhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gW107XG4gICAgICAgICAgICBlbGVtZW50cy5zZXQoZWxlbWVudFdpdGhSZWZlcmVuY2UsIGF0dHJpYnV0ZXMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGF0dHJpYnV0ZXMhLnB1c2goe25hbWU6IGF0dHIsIHZhbHVlOiBtYXRjaFsxXX0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogU2V0cyBhIG5ldyBTVkcgaWNvbiB3aXRoIGEgcGFydGljdWxhciBuYW1lLiAqL1xuICBwcml2YXRlIF91cGRhdGVTdmdJY29uKHJhd05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3N2Z05hbWVzcGFjZSA9IG51bGw7XG4gICAgdGhpcy5fc3ZnTmFtZSA9IG51bGw7XG4gICAgdGhpcy5fY3VycmVudEljb25GZXRjaC51bnN1YnNjcmliZSgpO1xuXG4gICAgaWYgKHJhd05hbWUpIHtcbiAgICAgIGNvbnN0IFtuYW1lc3BhY2UsIGljb25OYW1lXSA9IHRoaXMuX3NwbGl0SWNvbk5hbWUocmF3TmFtZSk7XG5cbiAgICAgIGlmIChuYW1lc3BhY2UpIHtcbiAgICAgICAgdGhpcy5fc3ZnTmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaWNvbk5hbWUpIHtcbiAgICAgICAgdGhpcy5fc3ZnTmFtZSA9IGljb25OYW1lO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jdXJyZW50SWNvbkZldGNoID0gdGhpcy5faWNvblJlZ2lzdHJ5XG4gICAgICAgIC5nZXROYW1lZFN2Z0ljb24oaWNvbk5hbWUsIG5hbWVzcGFjZSlcbiAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICBzdmcgPT4gdGhpcy5fc2V0U3ZnRWxlbWVudChzdmcpLFxuICAgICAgICAgIChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAobmFtZXNwYWNlID09PSBNUkRfSUNPTl9OQU1FU1BBQ0UgJiYgdGhpcy5fc3ltYm9sS2Fubk5vY2hLb21tZW4pIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYEVycm9yIHJldHJpZXZpbmcgaWNvbiAke25hbWVzcGFjZX06JHtpY29uTmFtZX0hICR7ZXJyLm1lc3NhZ2V9YDtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3BsaXRzIGFuIHN2Z0ljb24gYmluZGluZyB2YWx1ZSBpbnRvIGl0cyBpY29uIHNldCBhbmQgaWNvbiBuYW1lIGNvbXBvbmVudHMuXG4gICAqIFJldHVybnMgYSAyLWVsZW1lbnQgYXJyYXkgb2YgWyhpY29uIHNldCksIChpY29uIG5hbWUpXS5cbiAgICogVGhlIHNlcGFyYXRvciBmb3IgdGhlIHR3byBmaWVsZHMgaXMgJzonLiBJZiB0aGVyZSBpcyBubyBzZXBhcmF0b3IsIGFuIGVtcHR5XG4gICAqIHN0cmluZyBpcyByZXR1cm5lZCBmb3IgdGhlIGljb24gc2V0IGFuZCB0aGUgZW50aXJlIHZhbHVlIGlzIHJldHVybmVkIGZvclxuICAgKiB0aGUgaWNvbiBuYW1lLiBJZiB0aGUgYXJndW1lbnQgaXMgZmFsc3ksIHJldHVybnMgYW4gYXJyYXkgb2YgdHdvIGVtcHR5IHN0cmluZ3MuXG4gICAqIFRocm93cyBhbiBlcnJvciBpZiB0aGUgbmFtZSBjb250YWlucyB0d28gb3IgbW9yZSAnOicgc2VwYXJhdG9ycy5cbiAgICogRXhhbXBsZXM6XG4gICAqICAgYCdzb2NpYWw6Y2FrZScgLT4gWydzb2NpYWwnLCAnY2FrZSddXG4gICAqICAgJ3Blbmd1aW4nIC0+IFsnJywgJ3Blbmd1aW4nXVxuICAgKiAgIG51bGwgLT4gWycnLCAnJ11cbiAgICogICAnYTpiOmMnIC0+ICh0aHJvd3MgRXJyb3IpYFxuICAgKi9cbiAgcHJpdmF0ZSBfc3BsaXRJY29uTmFtZShpY29uTmFtZTogc3RyaW5nKTogW3N0cmluZywgc3RyaW5nXSB7XG4gICAgaWYgKCFpY29uTmFtZSkge1xuICAgICAgcmV0dXJuIFsnJywgJyddO1xuICAgIH1cbiAgICBjb25zdCBwYXJ0cyA9IGljb25OYW1lLnNwbGl0KCc6Jyk7XG4gICAgc3dpdGNoIChwYXJ0cy5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIFsnJywgcGFydHNbMF1dOyAvLyBVc2UgZGVmYXVsdCBuYW1lc3BhY2UuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiA8W3N0cmluZywgc3RyaW5nXT5wYXJ0cztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIGljb24gbmFtZTogXCIke2ljb25OYW1lfVwiYCk7IC8vIFRPRE86IGFkZCBhbiBuZ0Rldk1vZGUgY2hlY2tcbiAgICB9XG4gIH1cbn1cbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuIl19