import { OnInit, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MrdTooltipComponent implements OnInit {
    /**
     * This is simple text which is to be shown in the tooltip
     */
    text: string;
    /**
     * This provides finer control on the content to be visible on the tooltip
     * This template will be injected in ToolTipRenderer directive in the consumer template
     * <ng-template #template>
     *  content.....
     * </ng-template>
     */
    contentTemplate: TemplateRef<any>;
    defaultStyle: boolean;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrdTooltipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrdTooltipComponent, "mrd-tooltip", never, { "text": { "alias": "text"; "required": false; }; "contentTemplate": { "alias": "contentTemplate"; "required": false; }; "defaultStyle": { "alias": "defaultStyle"; "required": false; }; }, {}, never, never, false, never>;
}
