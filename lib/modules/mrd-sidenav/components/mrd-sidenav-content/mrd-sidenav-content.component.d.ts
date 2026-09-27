import { ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MrdSidenavContentComponent {
    private elementRef;
    private renderer;
    constructor(elementRef: ElementRef<HTMLElement>, renderer: Renderer2);
    /** Wird vom Container gesetzt: in der mobilen Ansicht verdeckt die geoeffnete Sidenav den Inhalt */
    verborgenSetzen(verborgen: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdSidenavContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdSidenavContentComponent, "mrd-sidenav-content", never, {}, {}, never, ["*"], false, never>;
}
