import { ChangeDetectionStrategy, Component, Input, booleanAttribute } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class MrdListItemComponent {
    selected = false;
    disabled = false;
    /** @nocollapse */ static ɵfac = function MrdListItemComponent_Factory(t) { return new (t || MrdListItemComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdListItemComponent, selectors: [["mrd-list-item"]], hostAttrs: ["role", "listitem"], hostVars: 6, hostBindings: function MrdListItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("aria-current", ctx.selected ? "true" : null)("aria-disabled", ctx.disabled ? "true" : null);
            i0.ɵɵclassProp("mrd-list-item-selected", ctx.selected)("mrd-list-item-disabled", ctx.disabled);
        } }, inputs: { selected: ["selected", "selected", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute] }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MrdListItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, styles: ["[_nghost-%COMP%]{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;width:100%;min-height:var(--mrd-list-item-height, 48px);padding:0 16px;border-bottom:var(--mrd-list-divider, none);cursor:var(--mrd-list-cursor, default)}[_nghost-%COMP%]:hover{background-color:var(--mrd-list-hover, transparent)}.mrd-list-item-selected[_nghost-%COMP%]{background-color:var(--mrd-list-selected-background, #65B32E);color:var(--mrd-list-selected-text, #FFFFFF)}.mrd-list-item-disabled[_nghost-%COMP%]{opacity:.5;pointer-events:none}.mrd-list-virtual[_nghost-%COMP%], .mrd-list-virtual   [_nghost-%COMP%]{height:100%;min-height:0}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdListItemComponent, [{
        type: Component,
        args: [{ selector: 'mrd-list-item', host: {
                    'role': 'listitem',
                    '[class.mrd-list-item-selected]': 'selected',
                    '[class.mrd-list-item-disabled]': 'disabled',
                    '[attr.aria-current]': "selected ? 'true' : null",
                    '[attr.aria-disabled]': "disabled ? 'true' : null"
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>\n", styles: [":host{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;width:100%;min-height:var(--mrd-list-item-height, 48px);padding:0 16px;border-bottom:var(--mrd-list-divider, none);cursor:var(--mrd-list-cursor, default)}:host(:hover){background-color:var(--mrd-list-hover, transparent)}:host(.mrd-list-item-selected){background-color:var(--mrd-list-selected-background, #65B32E);color:var(--mrd-list-selected-text, #FFFFFF)}:host(.mrd-list-item-disabled){opacity:.5;pointer-events:none}:host-context(.mrd-list-virtual){height:100%;min-height:0}\n"] }]
    }], null, { selected: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], disabled: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWxpc3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL21vZHVsZXMvbXJkLWxpc3QvY29tcG9uZW50cy9tcmQtbGlzdC1pdGVtL21yZC1saXN0LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1saXN0L2NvbXBvbmVudHMvbXJkLWxpc3QtaXRlbS9tcmQtbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFlNUYsTUFBTSxPQUFPLG9CQUFvQjtJQUVjLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFFMUIsUUFBUSxHQUFZLEtBQUssQ0FBQztpR0FKNUQsb0JBQW9COzRGQUFwQixvQkFBb0I7OzswREFFWixnQkFBZ0Isc0NBRWhCLGdCQUFnQjs7WUNuQnJDLGtCQUF5Qjs7O3VGRGVaLG9CQUFvQjtjQWJoQyxTQUFTOzJCQUNFLGVBQWUsUUFHbkI7b0JBQ0osTUFBTSxFQUFFLFVBQVU7b0JBQ2xCLGdDQUFnQyxFQUFFLFVBQVU7b0JBQzVDLGdDQUFnQyxFQUFFLFVBQVU7b0JBQzVDLHFCQUFxQixFQUFFLDBCQUEwQjtvQkFDakQsc0JBQXNCLEVBQUUsMEJBQTBCO2lCQUNuRCxtQkFDZ0IsdUJBQXVCLENBQUMsTUFBTTtnQkFJRixRQUFRO2tCQUFwRCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFDO1lBRVMsUUFBUTtrQkFBcEQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBib29sZWFuQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yZC1saXN0LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLWxpc3QtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21yZC1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgICdyb2xlJzogJ2xpc3RpdGVtJyxcbiAgICAnW2NsYXNzLm1yZC1saXN0LWl0ZW0tc2VsZWN0ZWRdJzogJ3NlbGVjdGVkJyxcbiAgICAnW2NsYXNzLm1yZC1saXN0LWl0ZW0tZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgICAnW2F0dHIuYXJpYS1jdXJyZW50XSc6IFwic2VsZWN0ZWQgPyAndHJ1ZScgOiBudWxsXCIsXG4gICAgJ1thdHRyLmFyaWEtZGlzYWJsZWRdJzogXCJkaXNhYmxlZCA/ICd0cnVlJyA6IG51bGxcIlxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNcmRMaXN0SXRlbUNvbXBvbmVudCB7XG5cbiAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBwdWJsaWMgc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xufVxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuIl19