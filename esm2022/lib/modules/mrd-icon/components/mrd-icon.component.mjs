import { DOCUMENT } from '@angular/common';
import { Component, Inject, inject, InjectionToken, Input } from '@angular/core';
import { Subscription, take } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../../common/service/mrd-icon-registry.service";
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
export class MrdIconComponent {
    _elementRef;
    _location;
    _errorHandler;
    _iconRegistry;
    /** Name of the icon in the SVG icon set. */
    get svgIcon() {
        return this._svgIcon;
    }
    set svgIcon(value) {
        if (value !== this._svgIcon) {
            if (value) {
                this._updateSvgIcon(value);
            }
            else if (this._svgIcon) {
                this._clearSvgElement();
            }
            this._svgIcon = value;
        }
    }
    _svgIcon;
    _svgName;
    _svgNamespace;
    /** Keeps track of the current page path. */
    _previousPath;
    /** Keeps track of the elements and attributes that we've prefixed with the current path. */
    _elementsWithExternalReferences;
    /** Subscription to the current in-progress SVG icon request. */
    _currentIconFetch = Subscription.EMPTY;
    constructor(_elementRef, _location, _errorHandler, _iconRegistry) {
        this._elementRef = _elementRef;
        this._location = _location;
        this._errorHandler = _errorHandler;
        this._iconRegistry = _iconRegistry;
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
    /** @nocollapse */ static ɵfac = function MrdIconComponent_Factory(t) { return new (t || MrdIconComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(MRD_ICON_LOCATION), i0.ɵɵdirectiveInject(i0.ErrorHandler), i0.ɵɵdirectiveInject(i1.MrdIconRegistryService)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdIconComponent, selectors: [["mrd-icon"]], inputs: { svgIcon: "svgIcon" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function MrdIconComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } } });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdIconComponent, [{
        type: Component,
        args: [{ selector: 'mrd-icon', template: "<ng-content></ng-content>\r\n" }]
    }], function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MRD_ICON_LOCATION]
            }] }, { type: i0.ErrorHandler }, { type: i1.MrdIconRegistryService }]; }, { svgIcon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1pY29uL2NvbXBvbmVudHMvbXJkLWljb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1pY29uL2NvbXBvbmVudHMvbXJkLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQTRCLE1BQU0sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUkxQzs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxjQUFjLENBQWtCLG1CQUFtQixFQUFFO0lBQ3hGLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLE9BQU8sRUFBRSx5QkFBeUI7Q0FDbkMsQ0FBQyxDQUFDO0FBVUgsb0JBQW9CO0FBQ3BCLE1BQU0sVUFBVSx5QkFBeUI7SUFDdkMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBRXhELE9BQU87UUFDTCxpRkFBaUY7UUFDakYsd0VBQXdFO1FBQ3hFLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFB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LEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFDL0IsQ0FBQyxHQUFVLEVBQUUsRUFBRTtnQkFDYixNQUFNLFlBQVksR0FBRyx5QkFBeUIsU0FBUyxJQUFJLFFBQVEsS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3RGLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDMUQsQ0FBQyxDQUNGLENBQUM7U0FDTDtJQUNILENBQUM7SUFFRDs7Ozs7Ozs7Ozs7O09BWUc7SUFDSyxjQUFjLENBQUMsUUFBZ0I7UUFDckMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDakI7UUFDRCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLFFBQVEsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNwQixLQUFLLENBQUM7Z0JBQ0osT0FBTyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHlCQUF5QjtZQUNsRCxLQUFLLENBQUM7Z0JBQ0osT0FBeUIsS0FBSyxDQUFDO1lBQ2pDO2dCQUNFLE1BQU0sS0FBSyxDQUFDLHVCQUF1QixRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsK0JBQStCO1NBQ25GO0lBQ0gsQ0FBQzs2RkE3S1UsZ0JBQWdCLDREQWlDakIsaUJBQWlCOzRGQWpDaEIsZ0JBQWdCOztZQy9EN0Isa0JBQXlCOzs7dUZEK0RaLGdCQUFnQjtjQUw1QixTQUFTOzJCQUNFLFVBQVU7O3NCQXFDakIsTUFBTTt1QkFBQyxpQkFBaUI7d0ZBN0J2QixPQUFPO2tCQURWLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXJyb3JIYW5kbGVyLCBJbmplY3QsIGluamVjdCwgSW5qZWN0aW9uVG9rZW4sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgdGFrZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNcmRJY29uUmVnaXN0cnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2UvbXJkLWljb24tcmVnaXN0cnkuc2VydmljZSc7XHJcblxyXG5cclxuLyoqXHJcbiAqIEluamVjdGlvbiB0b2tlbiB1c2VkIHRvIHByb3ZpZGUgdGhlIGN1cnJlbnQgbG9jYXRpb24gdG8gYE1hdEljb25gLlxyXG4gKiBVc2VkIHRvIGhhbmRsZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgYW5kIHRvIHN0dWIgb3V0IGR1cmluZyB1bml0IHRlc3RzLlxyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTVJEX0lDT05fTE9DQVRJT04gPSBuZXcgSW5qZWN0aW9uVG9rZW48TXJkSWNvbkxvY2F0aW9uPignbXJkLWljb24tbG9jYXRpb24nLCB7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG4gIGZhY3Rvcnk6IE1SRF9JQ09OX0xPQ0FUSU9OX0ZBQ1RPUlksXHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFN0dWJiZWQgb3V0IGxvY2F0aW9uIGZvciBgTWF0SWNvbmAuXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXJkSWNvbkxvY2F0aW9uIHtcclxuICBnZXRQYXRobmFtZTogKCkgPT4gc3RyaW5nO1xyXG59XHJcblxyXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gTVJEX0lDT05fTE9DQVRJT05fRkFDVE9SWSgpOiBNcmRJY29uTG9jYXRpb24ge1xyXG4gIGNvbnN0IF9kb2N1bWVudCA9IGluamVjdChET0NVTUVOVCk7XHJcbiAgY29uc3QgX2xvY2F0aW9uID0gX2RvY3VtZW50ID8gX2RvY3VtZW50LmxvY2F0aW9uIDogbnVsbDtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC8vIE5vdGUgdGhhdCB0aGlzIG5lZWRzIHRvIGJlIGEgZnVuY3Rpb24sIHJhdGhlciB0aGFuIGEgcHJvcGVydHksIGJlY2F1c2UgQW5ndWxhclxyXG4gICAgLy8gd2lsbCBvbmx5IHJlc29sdmUgaXQgb25jZSwgYnV0IHdlIHdhbnQgdGhlIGN1cnJlbnQgcGF0aCBvbiBlYWNoIGNhbGwuXHJcbiAgICBnZXRQYXRobmFtZTogKCkgPT4gKF9sb2NhdGlvbiA/IF9sb2NhdGlvbi5wYXRobmFtZSArIF9sb2NhdGlvbi5zZWFyY2ggOiAnJyksXHJcbiAgfTtcclxufVxyXG5cclxuLyoqIFNWRyBhdHRyaWJ1dGVzIHRoYXQgYWNjZXB0IGEgRnVuY0lSSSAoZS5nLiBgdXJsKDxzb21ldGhpbmc+KWApLiAqL1xyXG5jb25zdCBmdW5jSXJpQXR0cmlidXRlcyA9IFtcclxuICAnY2xpcC1wYXRoJyxcclxuICAnY29sb3ItcHJvZmlsZScsXHJcbiAgJ3NyYycsXHJcbiAgJ2N1cnNvcicsXHJcbiAgJ2ZpbGwnLFxyXG4gICdmaWx0ZXInLFxyXG4gICdtYXJrZXInLFxyXG4gICdtYXJrZXItc3RhcnQnLFxyXG4gICdtYXJrZXItbWlkJyxcclxuICAnbWFya2VyLWVuZCcsXHJcbiAgJ21hc2snLFxyXG4gICdzdHJva2UnLFxyXG5dO1xyXG4vKiogU2VsZWN0b3IgdGhhdCBjYW4gYmUgdXNlZCB0byBmaW5kIGFsbCBlbGVtZW50cyB0aGF0IGFyZSB1c2luZyBhIGBGdW5jSVJJYC4gKi9cclxuY29uc3QgZnVuY0lyaUF0dHJpYnV0ZVNlbGVjdG9yID0gZnVuY0lyaUF0dHJpYnV0ZXMubWFwKGF0dHIgPT4gYFske2F0dHJ9XWApLmpvaW4oJywgJyk7XHJcblxyXG4vKiogUmVnZXggdGhhdCBjYW4gYmUgdXNlZCB0byBleHRyYWN0IHRoZSBpZCBvdXQgb2YgYSBGdW5jSVJJLiAqL1xyXG5jb25zdCBmdW5jSXJpUGF0dGVybiA9IC9edXJsXFwoWydcIl0/IyguKj8pWydcIl0/XFwpJC87XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtcmQtaWNvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21yZC1pY29uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tcmQtaWNvbi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmRJY29uQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqIE5hbWUgb2YgdGhlIGljb24gaW4gdGhlIFNWRyBpY29uIHNldC4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBzdmdJY29uKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3ZnSWNvbjtcclxuICB9XHJcbiAgc2V0IHN2Z0ljb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9zdmdJY29uKSB7XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVN2Z0ljb24odmFsdWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3N2Z0ljb24pIHtcclxuICAgICAgICB0aGlzLl9jbGVhclN2Z0VsZW1lbnQoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9zdmdJY29uID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHByaXZhdGUgX3N2Z0ljb246IHN0cmluZztcclxuXHJcbiAgX3N2Z05hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgX3N2Z05hbWVzcGFjZTogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgLyoqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IHBhZ2UgcGF0aC4gKi9cclxuICBwcml2YXRlIF9wcmV2aW91c1BhdGg/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBLZWVwcyB0cmFjayBvZiB0aGUgZWxlbWVudHMgYW5kIGF0dHJpYnV0ZXMgdGhhdCB3ZSd2ZSBwcmVmaXhlZCB3aXRoIHRoZSBjdXJyZW50IHBhdGguICovXHJcbiAgcHJpdmF0ZSBfZWxlbWVudHNXaXRoRXh0ZXJuYWxSZWZlcmVuY2VzPzogTWFwPEVsZW1lbnQsIHtuYW1lOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmd9W10+O1xyXG5cclxuICAvKiogU3Vic2NyaXB0aW9uIHRvIHRoZSBjdXJyZW50IGluLXByb2dyZXNzIFNWRyBpY29uIHJlcXVlc3QuICovXHJcbiAgcHJpdmF0ZSBfY3VycmVudEljb25GZXRjaCA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgIEBJbmplY3QoTVJEX0lDT05fTE9DQVRJT04pIHByaXZhdGUgX2xvY2F0aW9uOiBNcmRJY29uTG9jYXRpb24sXHJcbiAgICBwcml2YXRlIF9lcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlcixcclxuICAgIHByaXZhdGUgX2ljb25SZWdpc3RyeTogTXJkSWNvblJlZ2lzdHJ5U2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIHByaXZhdGUgX3NldFN2Z0VsZW1lbnQoc3ZnOiBTVkdFbGVtZW50KSB7XHJcbiAgICB0aGlzLl9jbGVhclN2Z0VsZW1lbnQoKTtcclxuXHJcbiAgICAvLyBOb3RlOiB3ZSBkbyB0aGlzIGZpeCBoZXJlLCByYXRoZXIgdGhhbiB0aGUgaWNvbiByZWdpc3RyeSwgYmVjYXVzZSB0aGVcclxuICAgIC8vIHJlZmVyZW5jZXMgaGF2ZSB0byBwb2ludCB0byB0aGUgVVJMIGF0IHRoZSB0aW1lIHRoYXQgdGhlIGljb24gd2FzIGNyZWF0ZWQuXHJcbiAgICBjb25zdCBwYXRoID0gdGhpcy5fbG9jYXRpb24uZ2V0UGF0aG5hbWUoKTtcclxuICAgIHRoaXMuX3ByZXZpb3VzUGF0aCA9IHBhdGg7XHJcbiAgICB0aGlzLl9jYWNoZUNoaWxkcmVuV2l0aEV4dGVybmFsUmVmZXJlbmNlcyhzdmcpO1xyXG4gICAgdGhpcy5fcHJlcGVuZFBhdGhUb1JlZmVyZW5jZXMocGF0aCk7XHJcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoc3ZnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NsZWFyU3ZnRWxlbWVudCgpIHtcclxuICAgIGNvbnN0IGxheW91dEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgbGV0IGNoaWxkQ291bnQgPSBsYXlvdXRFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoO1xyXG5cclxuICAgIGlmICh0aGlzLl9lbGVtZW50c1dpdGhFeHRlcm5hbFJlZmVyZW5jZXMpIHtcclxuICAgICAgdGhpcy5fZWxlbWVudHNXaXRoRXh0ZXJuYWxSZWZlcmVuY2VzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIGV4aXN0aW5nIG5vbi1lbGVtZW50IGNoaWxkIG5vZGVzIGFuZCBTVkdzLCBhbmQgYWRkIHRoZSBuZXcgU1ZHIGVsZW1lbnQuIE5vdGUgdGhhdFxyXG4gICAgLy8gd2UgY2FuJ3QgdXNlIGlubmVySFRNTCwgYmVjYXVzZSBJRSB3aWxsIHRocm93IGlmIHRoZSBlbGVtZW50IGhhcyBhIGRhdGEgYmluZGluZy5cclxuICAgIHdoaWxlIChjaGlsZENvdW50LS0pIHtcclxuICAgICAgY29uc3QgY2hpbGQgPSBsYXlvdXRFbGVtZW50LmNoaWxkTm9kZXNbY2hpbGRDb3VudF07XHJcblxyXG4gICAgICAvLyAxIGNvcnJlc3BvbmRzIHRvIE5vZGUuRUxFTUVOVF9OT0RFLiBXZSByZW1vdmUgYWxsIG5vbi1lbGVtZW50IG5vZGVzIGluIG9yZGVyIHRvIGdldCByaWRcclxuICAgICAgLy8gb2YgYW55IGxvb3NlIHRleHQgbm9kZXMsIGFzIHdlbGwgYXMgYW55IFNWRyBlbGVtZW50cyBpbiBvcmRlciB0byByZW1vdmUgYW55IG9sZCBpY29ucy5cclxuICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlICE9PSAxIHx8IGNoaWxkLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnKSB7XHJcbiAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByZXBlbmRzIHRoZSBjdXJyZW50IHBhdGggdG8gYWxsIGVsZW1lbnRzIHRoYXQgaGF2ZSBhbiBhdHRyaWJ1dGUgcG9pbnRpbmcgdG8gYSBgRnVuY0lSSWBcclxuICAgKiByZWZlcmVuY2UuIFRoaXMgaXMgcmVxdWlyZWQgYmVjYXVzZSBXZWJLaXQgYnJvd3NlcnMgcmVxdWlyZSByZWZlcmVuY2VzIHRvIGJlIHByZWZpeGVkIHdpdGhcclxuICAgKiB0aGUgY3VycmVudCBwYXRoLCBpZiB0aGUgcGFnZSBoYXMgYSBgYmFzZWAgdGFnLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3ByZXBlbmRQYXRoVG9SZWZlcmVuY2VzKHBhdGg6IHN0cmluZykge1xyXG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLl9lbGVtZW50c1dpdGhFeHRlcm5hbFJlZmVyZW5jZXM7XHJcblxyXG4gICAgaWYgKGVsZW1lbnRzKSB7XHJcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goKGF0dHJzLCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgYXR0cnMuZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIubmFtZSwgYHVybCgnJHtwYXRofSMke2F0dHIudmFsdWV9JylgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWNoZXMgdGhlIGNoaWxkcmVuIG9mIGFuIFNWRyBlbGVtZW50IHRoYXQgaGF2ZSBgdXJsKClgXHJcbiAgICogcmVmZXJlbmNlcyB0aGF0IHdlIG5lZWQgdG8gcHJlZml4IHdpdGggdGhlIGN1cnJlbnQgcGF0aC5cclxuICAgKi9cclxuICBwcml2YXRlIF9jYWNoZUNoaWxkcmVuV2l0aEV4dGVybmFsUmVmZXJlbmNlcyhlbGVtZW50OiBTVkdFbGVtZW50KSB7XHJcbiAgICBjb25zdCBlbGVtZW50c1dpdGhGdW5jSXJpID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGZ1bmNJcmlBdHRyaWJ1dGVTZWxlY3Rvcik7XHJcbiAgICBjb25zdCBlbGVtZW50cyA9ICh0aGlzLl9lbGVtZW50c1dpdGhFeHRlcm5hbFJlZmVyZW5jZXMgPVxyXG4gICAgICB0aGlzLl9lbGVtZW50c1dpdGhFeHRlcm5hbFJlZmVyZW5jZXMgfHwgbmV3IE1hcCgpKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzV2l0aEZ1bmNJcmkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZnVuY0lyaUF0dHJpYnV0ZXMuZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50V2l0aFJlZmVyZW5jZSA9IGVsZW1lbnRzV2l0aEZ1bmNJcmlbaV07XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50V2l0aFJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoYXR0cik7XHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB2YWx1ZSA/IHZhbHVlLm1hdGNoKGZ1bmNJcmlQYXR0ZXJuKSA6IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgbGV0IGF0dHJpYnV0ZXMgPSBlbGVtZW50cy5nZXQoZWxlbWVudFdpdGhSZWZlcmVuY2UpO1xyXG5cclxuICAgICAgICAgIGlmICghYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gW107XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLnNldChlbGVtZW50V2l0aFJlZmVyZW5jZSwgYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYXR0cmlidXRlcyEucHVzaCh7bmFtZTogYXR0ciwgdmFsdWU6IG1hdGNoWzFdfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBTZXRzIGEgbmV3IFNWRyBpY29uIHdpdGggYSBwYXJ0aWN1bGFyIG5hbWUuICovXHJcbiAgcHJpdmF0ZSBfdXBkYXRlU3ZnSWNvbihyYXdOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcclxuICAgIHRoaXMuX3N2Z05hbWVzcGFjZSA9IG51bGw7XHJcbiAgICB0aGlzLl9zdmdOYW1lID0gbnVsbDtcclxuICAgIHRoaXMuX2N1cnJlbnRJY29uRmV0Y2gudW5zdWJzY3JpYmUoKTtcclxuXHJcbiAgICBpZiAocmF3TmFtZSkge1xyXG4gICAgICBjb25zdCBbbmFtZXNwYWNlLCBpY29uTmFtZV0gPSB0aGlzLl9zcGxpdEljb25OYW1lKHJhd05hbWUpO1xyXG5cclxuICAgICAgaWYgKG5hbWVzcGFjZSkge1xyXG4gICAgICAgIHRoaXMuX3N2Z05hbWVzcGFjZSA9IG5hbWVzcGFjZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGljb25OYW1lKSB7XHJcbiAgICAgICAgdGhpcy5fc3ZnTmFtZSA9IGljb25OYW1lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9jdXJyZW50SWNvbkZldGNoID0gdGhpcy5faWNvblJlZ2lzdHJ5XHJcbiAgICAgICAgLmdldE5hbWVkU3ZnSWNvbihpY29uTmFtZSwgbmFtZXNwYWNlKVxyXG4gICAgICAgIC5waXBlKHRha2UoMSkpXHJcbiAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgIHN2ZyA9PiB0aGlzLl9zZXRTdmdFbGVtZW50KHN2ZyksXHJcbiAgICAgICAgICAoZXJyOiBFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBgRXJyb3IgcmV0cmlldmluZyBpY29uICR7bmFtZXNwYWNlfToke2ljb25OYW1lfSEgJHtlcnIubWVzc2FnZX1gO1xyXG4gICAgICAgICAgICB0aGlzLl9lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEVycm9yKGVycm9yTWVzc2FnZSkpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3BsaXRzIGFuIHN2Z0ljb24gYmluZGluZyB2YWx1ZSBpbnRvIGl0cyBpY29uIHNldCBhbmQgaWNvbiBuYW1lIGNvbXBvbmVudHMuXHJcbiAgICogUmV0dXJucyBhIDItZWxlbWVudCBhcnJheSBvZiBbKGljb24gc2V0KSwgKGljb24gbmFtZSldLlxyXG4gICAqIFRoZSBzZXBhcmF0b3IgZm9yIHRoZSB0d28gZmllbGRzIGlzICc6Jy4gSWYgdGhlcmUgaXMgbm8gc2VwYXJhdG9yLCBhbiBlbXB0eVxyXG4gICAqIHN0cmluZyBpcyByZXR1cm5lZCBmb3IgdGhlIGljb24gc2V0IGFuZCB0aGUgZW50aXJlIHZhbHVlIGlzIHJldHVybmVkIGZvclxyXG4gICAqIHRoZSBpY29uIG5hbWUuIElmIHRoZSBhcmd1bWVudCBpcyBmYWxzeSwgcmV0dXJucyBhbiBhcnJheSBvZiB0d28gZW1wdHkgc3RyaW5ncy5cclxuICAgKiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIG5hbWUgY29udGFpbnMgdHdvIG9yIG1vcmUgJzonIHNlcGFyYXRvcnMuXHJcbiAgICogRXhhbXBsZXM6XHJcbiAgICogICBgJ3NvY2lhbDpjYWtlJyAtPiBbJ3NvY2lhbCcsICdjYWtlJ11cclxuICAgKiAgICdwZW5ndWluJyAtPiBbJycsICdwZW5ndWluJ11cclxuICAgKiAgIG51bGwgLT4gWycnLCAnJ11cclxuICAgKiAgICdhOmI6YycgLT4gKHRocm93cyBFcnJvcilgXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfc3BsaXRJY29uTmFtZShpY29uTmFtZTogc3RyaW5nKTogW3N0cmluZywgc3RyaW5nXSB7XHJcbiAgICBpZiAoIWljb25OYW1lKSB7XHJcbiAgICAgIHJldHVybiBbJycsICcnXTtcclxuICAgIH1cclxuICAgIGNvbnN0IHBhcnRzID0gaWNvbk5hbWUuc3BsaXQoJzonKTtcclxuICAgIHN3aXRjaCAocGFydHMubGVuZ3RoKSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICByZXR1cm4gWycnLCBwYXJ0c1swXV07IC8vIFVzZSBkZWZhdWx0IG5hbWVzcGFjZS5cclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHJldHVybiA8W3N0cmluZywgc3RyaW5nXT5wYXJ0cztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBpY29uIG5hbWU6IFwiJHtpY29uTmFtZX1cImApOyAvLyBUT0RPOiBhZGQgYW4gbmdEZXZNb2RlIGNoZWNrXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuIl19