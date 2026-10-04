export type MrdSortDirection = 'asc' | 'desc' | '';
export interface MrdSortierung {
    /** Id der Spalte (Wert von `mrd-sort-header`) */
    active: string;
    direction: MrdSortDirection;
}
export type MrdSortArrowPosition = 'before' | 'after';
