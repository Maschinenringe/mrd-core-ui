import { MrdVirtualScrollItemSize } from '../model/mrd-virtual-scroll.model';
/**
 * Nimmt eine Zahl (auch als Attribut-String) oder eine Funktion; ungueltige Werte ergeben null (= Standard aus der Config).
 * Nicht generisch, weil Angular keine generischen Input-Transforms erlaubt (NG1010).
 */
export declare function itemSizeAttribute(value: MrdVirtualScrollItemSize | string): MrdVirtualScrollItemSize;
