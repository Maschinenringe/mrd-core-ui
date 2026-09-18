import { Util } from 'mrd-core';
import { MrdDatumUtil } from '../util/datum.util';
/** Meldet Eingaben, aus denen sich kein gueltiges Datum lesen laesst. Ein leeres Feld gilt als gueltig. */
export class ValidatorDatum {
    static STANDARD_FEHLER = 'Bitte geben Sie ein gültiges Datum ein';
    hasError = false;
    error = ValidatorDatum.STANDARD_FEHLER;
    value;
    constructor(error) {
        if (Util.isDefined(error)) {
            this.error = error;
        }
    }
    validator() {
        return (input) => {
            this.value = input.value;
            return this.validate();
        };
    }
    validate() {
        this.hasError = false;
        if (MrdDatumUtil.istGueltig(this.value)) {
            return null;
        }
        this.hasError = true;
        return { invalidDate: true };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWRhdHVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9jb21tb24vdmFsaWRhdGlvbi92YWxpZGF0b3ItZGF0dW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFjLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsMkdBQTJHO0FBQzNHLE1BQU0sT0FBTyxjQUFjO0lBRWxCLE1BQU0sQ0FBVSxlQUFlLEdBQVcsd0NBQXdDLENBQUM7SUFFbkYsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixLQUFLLEdBQVcsY0FBYyxDQUFDLGVBQWUsQ0FBQztJQUU5QyxLQUFLLENBQU07SUFFbkIsWUFBWSxLQUFjO1FBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFTSxTQUFTO1FBQ2QsT0FBTyxDQUFDLEtBQXNCLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDekIsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVNLFFBQVE7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixPQUFPLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSVZhbGlkYXRvciwgVXRpbCB9IGZyb20gJ21yZC1jb3JlJztcbmltcG9ydCB7IE1yZERhdHVtVXRpbCB9IGZyb20gJy4uL3V0aWwvZGF0dW0udXRpbCc7XG5cbi8qKiBNZWxkZXQgRWluZ2FiZW4sIGF1cyBkZW5lbiBzaWNoIGtlaW4gZ3VlbHRpZ2VzIERhdHVtIGxlc2VuIGxhZXNzdC4gRWluIGxlZXJlcyBGZWxkIGdpbHQgYWxzIGd1ZWx0aWcuICovXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yRGF0dW0gaW1wbGVtZW50cyBJVmFsaWRhdG9yIHtcblxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNUQU5EQVJEX0ZFSExFUjogc3RyaW5nID0gJ0JpdHRlIGdlYmVuIFNpZSBlaW4gZ8O8bHRpZ2VzIERhdHVtIGVpbic7XG5cbiAgcHVibGljIGhhc0Vycm9yOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBlcnJvcjogc3RyaW5nID0gVmFsaWRhdG9yRGF0dW0uU1RBTkRBUkRfRkVITEVSO1xuXG4gIHByaXZhdGUgdmFsdWU6IGFueTtcblxuICBjb25zdHJ1Y3RvcihlcnJvcj86IHN0cmluZykge1xuICAgIGlmIChVdGlsLmlzRGVmaW5lZChlcnJvcikpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdmFsaWRhdG9yKCk6IFZhbGlkYXRvckZuIHtcbiAgICByZXR1cm4gKGlucHV0OiBBYnN0cmFjdENvbnRyb2wpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyB2YWxpZGF0ZSgpOiBhbnkge1xuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICBpZiAoTXJkRGF0dW1VdGlsLmlzdEd1ZWx0aWcodGhpcy52YWx1ZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICByZXR1cm4geyBpbnZhbGlkRGF0ZTogdHJ1ZSB9O1xuICB9XG59XG4iXX0=