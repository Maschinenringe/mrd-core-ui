import { OnInit, ViewContainerRef, EventEmitter, ViewRef, ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MatTabBodyPortal implements OnInit {
    private viewContainerRef;
    private _host;
    /** Subscription to events for when the tab body begins centering. */
    private _centeringSub;
    /** Subscription to events for when the tab body finishes leaving from center position. */
    private _leavingSub;
    constructor(viewContainerRef: ViewContainerRef, _host: MrdTabBodyComponent);
    /** Set initial visibility or set up subscription for changing visibility. */
    ngOnInit(): void;
    /** Clean up centering subscription. */
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatTabBodyPortal, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatTabBodyPortal, "[mrdTabBodyHost]", never, {}, {}, never, never, false, never>;
}
export declare class MrdTabBodyComponent {
    private cdr;
    set content(value: ViewRef);
    get content(): ViewRef;
    private _content;
    set index(value: number);
    get index(): number;
    private _index;
    set active(value: boolean);
    get active(): boolean;
    private _active;
    preserveContent: boolean;
    private hideTimeout;
    _isHidden: EventEmitter<boolean>;
    _goingToActive: EventEmitter<boolean>;
    set translate(value: number | string);
    get translate(): string;
    private _translate;
    set hidden(value: boolean);
    get hidden(): boolean;
    private _hidden;
    constructor(cdr: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdTabBodyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdTabBodyComponent, "mrd-tab-body", never, { "content": { "alias": "content"; "required": false; }; "index": { "alias": "index"; "required": false; }; "active": { "alias": "active"; "required": false; }; "preserveContent": { "alias": "preserveContent"; "required": false; }; "hidden": { "alias": "hidden"; "required": false; }; }, { "_isHidden": "_isHidden"; "_goingToActive": "_goingToActive"; }, never, never, false, never>;
    static ngAcceptInputType_preserveContent: unknown;
}
