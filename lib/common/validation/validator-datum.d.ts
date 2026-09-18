import { ValidatorFn } from '@angular/forms';
import { IValidator } from 'mrd-core';
/** Meldet Eingaben, aus denen sich kein gueltiges Datum lesen laesst. Ein leeres Feld gilt als gueltig. */
export declare class ValidatorDatum implements IValidator {
    static readonly STANDARD_FEHLER: string;
    hasError: boolean;
    error: string;
    private value;
    constructor(error?: string);
    validator(): ValidatorFn;
    validate(): any;
}
