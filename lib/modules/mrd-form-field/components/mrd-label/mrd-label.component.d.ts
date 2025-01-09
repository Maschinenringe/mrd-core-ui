import { ChangeDetectorRef } from '@angular/core';
import { BasePushStrategyObject, ObservableValue } from 'mrd-core';
import * as i0 from "@angular/core";
export declare class MrdLabelComponent extends BasePushStrategyObject {
    protected cdr: ChangeDetectorRef;
    float: 'always' | 'auto' | 'never';
    floating: ObservableValue<boolean>;
    required: ObservableValue<boolean>;
    constructor(cdr: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdLabelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdLabelComponent, "mrd-label", never, { "float": { "alias": "float"; "required": false; }; }, {}, never, ["*"], false, never>;
}
