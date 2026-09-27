export interface MrdVirtualScrollItemContext<T> {
    $implicit: T;
    index: number;
}
export interface MrdVirtualScrollRange {
    /** Erster gerenderter Index (inklusive) */
    start: number;
    /** Letzter gerenderter Index (exklusive) */
    end: number;
}
export type MrdVirtualScrollPosition = 'start' | 'center' | 'end' | 'nearest';
/** Feste Zeilenhoehe in px oder Hoehe je Eintrag; die Funktion muss fuer denselben Eintrag immer denselben Wert liefern */
export type MrdVirtualScrollItemSize<T = any> = number | ((item: T, index: number) => number);
