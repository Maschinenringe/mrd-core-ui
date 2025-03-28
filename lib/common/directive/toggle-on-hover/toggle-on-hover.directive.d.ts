import { AfterViewInit, ElementRef, OnDestroy } from "@angular/core";
import * as i0 from "@angular/core";
export declare class ToggleOnHoverDirective implements AfterViewInit, OnDestroy {
    private elementRef;
    toggleOnHover: string;
    deepToggleElementSearch: boolean;
    hoverElementParentDepth: number;
    hoverElement: HTMLElement;
    displayShowStyle: string;
    displayShowStyleToggleElement: string;
    private toggleElement;
    constructor(elementRef: ElementRef<HTMLElement>);
    ngAfterViewInit(): void;
    private mouseEnter;
    private mouseLeave;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleOnHoverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ToggleOnHoverDirective, "[toggleOnHover]", never, { "toggleOnHover": { "alias": "toggleOnHover"; "required": false; }; "deepToggleElementSearch": { "alias": "deepToggleElementSearch"; "required": false; }; "hoverElementParentDepth": { "alias": "hoverElementParentDepth"; "required": false; }; "hoverElement": { "alias": "hoverElement"; "required": false; }; "displayShowStyle": { "alias": "displayShowStyle"; "required": false; }; "displayShowStyleToggleElement": { "alias": "displayShowStyleToggleElement"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_deepToggleElementSearch: unknown;
    static ngAcceptInputType_hoverElementParentDepth: unknown;
}
