import { MrdConfigModel } from '../../../../common/model/config.model';
import * as i0 from "@angular/core";
/**
 * Kopf- oder Fusszeile mit fester Hoehe. Die Farbe kommt aus `color`/`textColor`,
 * sonst aus den Attributen `green`, `grey` oder `blue`, sonst aus der Config.
 */
export declare class MrdToolbarComponent {
    /** Hintergrundfarbe; hat Vorrang vor `green`, `grey` und `blue` */
    color: string;
    textColor: string;
    green: boolean;
    grey: boolean;
    blue: boolean;
    height: string;
    padding: string;
    fontSize: string;
    readonly config: MrdConfigModel;
    get hintergrundfarbe(): string;
    get textfarbe(): string;
    private get thema();
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdToolbarComponent, "mrd-toolbar", never, { "color": { "alias": "color"; "required": false; }; "textColor": { "alias": "textColor"; "required": false; }; "green": { "alias": "green"; "required": false; }; "grey": { "alias": "grey"; "required": false; }; "blue": { "alias": "blue"; "required": false; }; "height": { "alias": "height"; "required": false; }; "padding": { "alias": "padding"; "required": false; }; "fontSize": { "alias": "fontSize"; "required": false; }; }, {}, never, ["*"], false, never>;
    static ngAcceptInputType_color: string;
    static ngAcceptInputType_textColor: string;
    static ngAcceptInputType_green: unknown;
    static ngAcceptInputType_grey: unknown;
    static ngAcceptInputType_blue: unknown;
    static ngAcceptInputType_height: string | number;
    static ngAcceptInputType_fontSize: string | number;
}
