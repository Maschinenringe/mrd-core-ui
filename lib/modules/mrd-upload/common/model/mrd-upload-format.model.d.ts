/**
 * Auswaehlbares Upload-Format. Aufrufer koennen es um eigene Felder erweitern (z. B. `url`, `handbuchUrl`);
 * `mrd-upload` gibt bei `formatChange` dasselbe Objekt zurueck.
 */
export interface MrdUploadFormat {
    key: string;
    bezeichnung: string;
    /** Erlaubte Typen wie beim `accept`-Attribut: Endungen (`.csv`), MIME-Typen (`image/*`) oder `*` fuer alle */
    acceptedDataTypes: string;
    /** Tooltip am Info-Symbol neben dem Hinweis */
    infoIconText?: string;
}
/** Wird ergaenzt, wenn `alleDateitypen` gesetzt ist oder keine Formate uebergeben werden */
export declare const MRD_UPLOAD_ALLE_DATEITYPEN: MrdUploadFormat;
