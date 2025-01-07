import { ElementRef, ErrorHandler, InjectionToken } from '@angular/core';
import { MrdIconRegistryService } from '../../../common/service/mrd-icon-registry.service';
import * as i0 from "@angular/core";
/**
 * Injection token used to provide the current location to `MatIcon`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * @docs-private
 */
export declare const MRD_ICON_LOCATION: InjectionToken<MrdIconLocation>;
/**
 * Stubbed out location for `MatIcon`.
 * @docs-private
 */
export interface MrdIconLocation {
    getPathname: () => string;
}
/** @docs-private */
export declare function MRD_ICON_LOCATION_FACTORY(): MrdIconLocation;
export declare class MrdIconComponent {
    private _elementRef;
    private _location;
    private _errorHandler;
    private _iconRegistry;
    /** Name of the icon in the SVG icon set. */
    get svgIcon(): string;
    set svgIcon(value: string);
    private _svgIcon;
    _svgName: string | null;
    _svgNamespace: string | null;
    /** Keeps track of the current page path. */
    private _previousPath?;
    /** Keeps track of the elements and attributes that we've prefixed with the current path. */
    private _elementsWithExternalReferences?;
    /** Subscription to the current in-progress SVG icon request. */
    private _currentIconFetch;
    constructor(_elementRef: ElementRef<HTMLElement>, _location: MrdIconLocation, _errorHandler: ErrorHandler, _iconRegistry: MrdIconRegistryService);
    private _setSvgElement;
    private _clearSvgElement;
    /**
     * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
     * reference. This is required because WebKit browsers require references to be prefixed with
     * the current path, if the page has a `base` tag.
     */
    private _prependPathToReferences;
    /**
     * Caches the children of an SVG element that have `url()`
     * references that we need to prefix with the current path.
     */
    private _cacheChildrenWithExternalReferences;
    /** Sets a new SVG icon with a particular name. */
    private _updateSvgIcon;
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
    private _splitIconName;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdIconComponent, "mrd-icon", never, { "svgIcon": { "alias": "svgIcon"; "required": false; }; }, {}, never, ["*"], false, never>;
}
