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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWRhdHVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9jb21tb24vdmFsaWRhdGlvbi92YWxpZGF0b3ItZGF0dW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFjLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsMkdBQTJHO0FBQzNHLE1BQU0sT0FBTyxjQUFjO0lBRWxCLE1BQU0sQ0FBVSxlQUFlLEdBQVcsd0NBQXdDLENBQUM7SUFFbkYsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixLQUFLLEdBQVcsY0FBYyxDQUFDLGVBQWUsQ0FBQztJQUU5QyxLQUFLLENBQU07SUFFbkIsWUFBWSxLQUFjO1FBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFTSxTQUFTO1FBQ2QsT0FBTyxDQUFDLEtBQXNCLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDekIsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVNLFFBQVE7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixPQUFPLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBJVmFsaWRhdG9yLCBVdGlsIH0gZnJvbSAnbXJkLWNvcmUnO1xyXG5pbXBvcnQgeyBNcmREYXR1bVV0aWwgfSBmcm9tICcuLi91dGlsL2RhdHVtLnV0aWwnO1xyXG5cclxuLyoqIE1lbGRldCBFaW5nYWJlbiwgYXVzIGRlbmVuIHNpY2gga2VpbiBndWVsdGlnZXMgRGF0dW0gbGVzZW4gbGFlc3N0LiBFaW4gbGVlcmVzIEZlbGQgZ2lsdCBhbHMgZ3VlbHRpZy4gKi9cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvckRhdHVtIGltcGxlbWVudHMgSVZhbGlkYXRvciB7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU1RBTkRBUkRfRkVITEVSOiBzdHJpbmcgPSAnQml0dGUgZ2ViZW4gU2llIGVpbiBnw7xsdGlnZXMgRGF0dW0gZWluJztcclxuXHJcbiAgcHVibGljIGhhc0Vycm9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGVycm9yOiBzdHJpbmcgPSBWYWxpZGF0b3JEYXR1bS5TVEFOREFSRF9GRUhMRVI7XHJcblxyXG4gIHByaXZhdGUgdmFsdWU6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoZXJyb3I/OiBzdHJpbmcpIHtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZChlcnJvcikpIHtcclxuICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHZhbGlkYXRvcigpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGlucHV0OiBBYnN0cmFjdENvbnRyb2wpID0+IHtcclxuICAgICAgdGhpcy52YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB2YWxpZGF0ZSgpOiBhbnkge1xyXG4gICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgaWYgKE1yZERhdHVtVXRpbC5pc3RHdWVsdGlnKHRoaXMudmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XHJcbiAgICByZXR1cm4geyBpbnZhbGlkRGF0ZTogdHJ1ZSB9O1xyXG4gIH1cclxufVxyXG4iXX0=