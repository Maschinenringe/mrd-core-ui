import * as i0 from "@angular/core";
/**
 * Sorgt für die korrekte Eingabe von Uhrzeiten im Format HH:mm.
 */
export declare class TimeInputDirective {
    timeInput: boolean;
    private specialKeys;
    private regex;
    constructor();
    onKeyDown(event: KeyboardEvent): void;
    private isValidTimeInput;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeInputDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TimeInputDirective, "[timeInput]", never, { "timeInput": { "alias": "timeInput"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_timeInput: unknown;
}
