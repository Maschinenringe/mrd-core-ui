import { AfterViewInit, ElementRef, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class HideIfTruncatedDirective implements AfterViewInit, OnChanges, OnDestroy {
    private elementRef;
    hideIfTruncated: boolean;
    checkChildrenForAttribute: boolean;
    hideOnTruncatedElement: HTMLElement;
    requiredHideAttribute: string;
    displayState: string;
    parentResizeElement: HTMLElement;
    hiddenChanged: EventEmitter<boolean>;
    private mutationObserver;
    private resizeObserver;
    private blockNextResizeEvent;
    private resizeTimeout;
    constructor(elementRef: ElementRef<HTMLElement>);
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HideIfTruncatedDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HideIfTruncatedDirective, "[hideIfTruncated]", never, { "hideIfTruncated": { "alias": "hideIfTruncated"; "required": false; }; "checkChildrenForAttribute": { "alias": "checkChildrenForAttribute"; "required": false; }; "hideOnTruncatedElement": { "alias": "hideOnTruncatedElement"; "required": false; }; "requiredHideAttribute": { "alias": "requiredHideAttribute"; "required": false; }; "displayState": { "alias": "displayState"; "required": false; }; "parentResizeElement": { "alias": "parentResizeElement"; "required": false; }; }, { "hiddenChanged": "hiddenChanged"; }, never, never, false, never>;
    static ngAcceptInputType_hideIfTruncated: unknown;
    static ngAcceptInputType_checkChildrenForAttribute: unknown;
}
