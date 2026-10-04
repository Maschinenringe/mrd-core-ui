import { ElementRef, ErrorHandler, InjectionToken, OnChanges, SimpleChanges } from '@angular/core';
import { MrdIconRegistryService } from '../../../common/service/mrd-icon-registry.service';
import { MrdIconSymbol, MrdIconSymbolRegistryService } from '../../../common/service/mrd-icon-symbol-registry.service';
import { IconDirection } from '../../../common/service/icon-factory.service';
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
/**
 * Zeigt ein Icon an:
 * - `icon="bearbeiten" outline` baut es aus der IconFactory, ohne Registrierung und ohne HTTP;
 *   die Farbe ist standardmaessig die Textfarbe der Umgebung (`currentColor`)
 * - `svgIcon="name"` bzw. `svgIcon="namespace:name"` holt ein in der MrdIconRegistry registriertes Icon;
 *   die Factory-Symbole stehen dort unter `mrd:<symbol>[-outline|-full|-dashed][-up|-down|-left]` bereit
 * Ist `icon` gesetzt, hat es Vorrang vor `svgIcon`.
 */
export declare class MrdIconComponent implements OnChanges {
    private _elementRef;
    private _location;
    private _errorHandler;
    private _iconRegistry;
    private _symbolRegistry;
    /** Name of the icon in the SVG icon set. */
    get svgIcon(): string;
    set svgIcon(value: string);
    private _svgIcon;
    /** Symbol aus der IconFactory, z. B. `bearbeiten`, `pfeil` oder ein per `provideMrdIcons({symbols})` registriertes */
    icon: MrdIconSymbol;
    /** Kreis-Umriss um das Symbol */
    outline: boolean;
    /** Gefuellter Kreis; das Symbol ist darauf standardmaessig weiss */
    full: boolean;
    /** Gestrichelter Kreis */
    dashed: boolean;
    /**
     * Farbe fuer Rahmen und Symbol; ohne Angabe die Textfarbe der Umgebung.
     * Bei `svgIcon` wird sie als Textfarbe gesetzt und faerbt nur Teile mit `currentColor`, fest eingetragene Farben bleiben.
     */
    color: string;
    innerColor: string;
    outerColor: string;
    /** Drehung des Symbols, z. B. fuer Pfeile */
    direction: IconDirection | number;
    /** Kantenlaenge, z. B. `24`, `"1.5em"`; Standard 24px, auch fuer `svgIcon` */
    /** Kantenlaenge, z. B. `24`, `"1.5em"`; Standard bei `icon` aus der Config, bei `svgIcon` ohne Angabe wie bisher keine */
    size: string;
    _svgName: string | null;
    _svgNamespace: string | null;
    /** Keeps track of the current page path. */
    private _previousPath?;
    /** Keeps track of the elements and attributes that we've prefixed with the current path. */
    private _elementsWithExternalReferences?;
    /** Subscription to the current in-progress SVG icon request. */
    private _currentIconFetch;
    constructor(_elementRef: ElementRef<HTMLElement>, _location: MrdIconLocation, _errorHandler: ErrorHandler, _iconRegistry: MrdIconRegistryService, _symbolRegistry: MrdIconSymbolRegistryService);
    ngOnChanges(changes: SimpleChanges): void;
    get aktuelleGroesse(): string | null;
    private get _rahmen();
    private _factoryIconAnzeigen;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdIconComponent, "mrd-icon", never, { "svgIcon": { "alias": "svgIcon"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "outline": { "alias": "outline"; "required": false; }; "full": { "alias": "full"; "required": false; }; "dashed": { "alias": "dashed"; "required": false; }; "color": { "alias": "color"; "required": false; }; "innerColor": { "alias": "innerColor"; "required": false; }; "outerColor": { "alias": "outerColor"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
    static ngAcceptInputType_outline: unknown;
    static ngAcceptInputType_full: unknown;
    static ngAcceptInputType_dashed: unknown;
    static ngAcceptInputType_color: string;
    static ngAcceptInputType_innerColor: string;
    static ngAcceptInputType_outerColor: string;
    static ngAcceptInputType_size: string | number;
}
