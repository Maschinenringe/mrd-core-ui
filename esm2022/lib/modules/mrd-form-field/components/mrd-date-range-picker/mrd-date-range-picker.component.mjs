import { Component, ContentChildren, ViewChild } from '@angular/core';
import moment from 'moment';
import { ObservableValue, Util } from 'mrd-core';
import { MrdInputComponent } from '../mrd-input/mrd-input.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "../../../mrd-button/components/mrd-button/mrd-button.component";
import * as i3 from "../../../mrd-icon/components/mrd-icon.component";
import * as i4 from "../mrd-datepicker/mrd-datepicker.component";
const _c0 = ["dateInput"];
function MrdDateRangePickerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mrd-datepicker", 5);
    i0.ɵɵlistener("dateRangeChanged", function MrdDateRangePickerComponent_ng_template_6_Template_mrd_datepicker_dateRangeChanged_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.rangeChanged($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("startDate", ctx_r1.startValue)("endDate", ctx_r1.endValue);
} }
const _c1 = [[["mrd-input"]]];
const _c2 = ["mrd-input"];
export class MrdDateRangePickerComponent {
    inputs;
    // static, damit der Overlay-Ursprung schon beim ersten Rendern feststeht (sonst NG0100)
    dateInputElement;
    showDatepicker = new ObservableValue(false);
    startValue = null;
    endValue = null;
    startInput = null;
    endInput = null;
    _positions = [
        {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
        },
        {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
        },
        {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom'
        },
        {
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom'
        },
    ];
    constructor() { }
    ngAfterViewInit() {
        this.startInput = this.inputs.find(input => input.rangeStart);
        this.endInput = this.inputs.find(input => input.rangeEnd);
        if (!this.startInput || !this.endInput) {
            throw new Error('Both start and end inputs must be provided in mrd-date-range-picker');
        }
        this.startValue = moment(this.startInput.formControl.value, 'DD.MM.YYYY').utc(true) || null;
        this.endValue = moment(this.endInput.formControl.value, 'DD.MM.YYYY').utc(true) || null;
        this.startInput.formControl.valueChanges.subscribe(value => {
            this.startValue = value ? moment(value, 'DD.MM.YYYY').utc(true) : null;
        });
        this.endInput.formControl.valueChanges.subscribe(value => {
            this.endValue = value ? moment(value, 'DD.MM.YYYY').utc(true) : null;
        });
    }
    rangeChanged(value) {
        this.startValue = value.start;
        this.endValue = value.end;
        if (this.startInput) {
            this.startInput.formControl.setValue(this.startValue);
        }
        if (this.endInput) {
            this.endInput.formControl.setValue(this.endValue);
        }
        if (Util.isDefined(this.startValue) && Util.isDefined(this.endValue)) {
            this.showDatepicker.value = false;
        }
    }
    /** @nocollapse */ static ɵfac = function MrdDateRangePickerComponent_Factory(t) { return new (t || MrdDateRangePickerComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdDateRangePickerComponent, selectors: [["mrd-date-range-picker"]], contentQueries: function MrdDateRangePickerComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, MrdInputComponent, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputs = _t);
        } }, viewQuery: function MrdDateRangePickerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dateInputElement = _t.first);
        } }, ngContentSelectors: _c2, decls: 7, vars: 4, consts: [[1, "mrd-date-range-picker-container"], ["dateInput", ""], ["icon-button", "", "fullIcon", "", "diameter", "24", "iconSize", "16", 3, "click"], ["svgIcon", "mrd_calendar"], ["cdk-connected-overlay", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "backdropClick"], ["range-picker", "", 3, "startDate", "endDate", "dateRangeChanged"]], template: function MrdDateRangePickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelement(2, "div", null, 1);
            i0.ɵɵelementStart(4, "mrd-button", 2);
            i0.ɵɵlistener("click", function MrdDateRangePickerComponent_Template_mrd_button_click_4_listener() { return ctx.showDatepicker.value = !ctx.showDatepicker.value; });
            i0.ɵɵelement(5, "mrd-icon", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(6, MrdDateRangePickerComponent_ng_template_6_Template, 1, 2, "ng-template", 4);
            i0.ɵɵlistener("backdropClick", function MrdDateRangePickerComponent_Template_ng_template_backdropClick_6_listener() { return ctx.showDatepicker.value = false; });
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayOrigin", ctx.dateInputElement)("cdkConnectedOverlayOpen", ctx.showDatepicker.value)("cdkConnectedOverlayPositions", ctx._positions);
        } }, dependencies: [i1.CdkConnectedOverlay, i2.MrdButtonComponent, i3.MrdIconComponent, i4.MrdDatepickerComponent], styles: [".mrd-date-range-picker-container[_ngcontent-%COMP%]{display:flex;flex-direction:row}"] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdDateRangePickerComponent, [{
        type: Component,
        args: [{ selector: 'mrd-date-range-picker', template: "<div class=\"mrd-date-range-picker-container\">\r\n    <ng-content select=\"mrd-input\"></ng-content>\r\n    <div #dateInput></div>\r\n    <mrd-button icon-button fullIcon diameter=\"24\" iconSize=\"16\" (click)=\"showDatepicker.value = !showDatepicker.value\"><mrd-icon svgIcon=\"mrd_calendar\"></mrd-icon></mrd-button>\r\n</div>\r\n\r\n<ng-template\r\n  cdk-connected-overlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\r\n  [cdkConnectedOverlayOrigin]=\"dateInputElement\"\r\n  [cdkConnectedOverlayOpen]=\"showDatepicker.value\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  (backdropClick)=\"showDatepicker.value = false\"\r\n>\r\n  <mrd-datepicker\r\n    range-picker\r\n    [startDate]=\"startValue\"\r\n    [endDate]=\"endValue\"\r\n    (dateRangeChanged)=\"rangeChanged($event)\"\r\n  ></mrd-datepicker>\r\n</ng-template>", styles: [".mrd-date-range-picker-container{display:flex;flex-direction:row}\n"] }]
    }], function () { return []; }, { inputs: [{
            type: ContentChildren,
            args: [MrdInputComponent]
        }], dateInputElement: [{
            type: ViewChild,
            args: ['dateInput', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWRhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZm9ybS1maWVsZC9jb21wb25lbnRzL21yZC1kYXRlLXJhbmdlLXBpY2tlci9tcmQtZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWRhdGUtcmFuZ2UtcGlja2VyL21yZC1kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWlCLFNBQVMsRUFBZ0IsZUFBZSxFQUF5QixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUgsT0FBTyxNQUFrQixNQUFNLFFBQVEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7Ozs7O0lDV25FLHlDQUtDO0lBREMsb05BQW9CLGVBQUEsMkJBQW9CLENBQUEsSUFBQztJQUMxQyxpQkFBaUI7OztJQUhoQiw2Q0FBd0IsNEJBQUE7Ozs7QURONUIsTUFBTSxPQUFPLDJCQUEyQjtJQUVLLE1BQU0sQ0FBK0I7SUFDaEYsd0ZBQXdGO0lBQ3pDLGdCQUFnQixDQUEwQjtJQUVsRixjQUFjLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXRFLFVBQVUsR0FBa0IsSUFBSSxDQUFDO0lBQ2pDLFFBQVEsR0FBa0IsSUFBSSxDQUFDO0lBRS9CLFVBQVUsR0FBNkIsSUFBSSxDQUFDO0lBQzVDLFFBQVEsR0FBNkIsSUFBSSxDQUFDO0lBRWpELFVBQVUsR0FBd0I7UUFDNUI7WUFDRSxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsUUFBUTtZQUNqQixRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsS0FBSztTQUNoQjtRQUNEO1lBQ0UsT0FBTyxFQUFFLEtBQUs7WUFDZCxPQUFPLEVBQUUsUUFBUTtZQUNqQixRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSxLQUFLO1NBQ2hCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsS0FBSztZQUNkLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxRQUFRO1NBQ25CO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsS0FBSztZQUNkLE9BQU8sRUFBRSxLQUFLO1lBQ2QsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsUUFBUTtTQUNuQjtLQUNGLENBQUM7SUFHSixnQkFBZSxDQUFDO0lBRWhCLGVBQWU7UUFDYixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3RDLE1BQU0sSUFBSSxLQUFLLENBQUMscUVBQXFFLENBQUMsQ0FBQztTQUN4RjtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDO1FBQzVGLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDO1FBRXhGLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDekUsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3ZFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLFlBQVksQ0FBQyxLQUE2QztRQUM3RCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBRTFCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbkQ7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNuQztJQUNMLENBQUM7d0dBN0VRLDJCQUEyQjs0RkFBM0IsMkJBQTJCO3dDQUVyQixpQkFBaUI7Ozs7Ozs7Ozs7O1lDYnBDLDhCQUE2QztZQUN6QyxrQkFBNEM7WUFDNUMsK0JBQXNCO1lBQ3RCLHFDQUFvSDtZQUF2RCxvS0FBc0Q7WUFBQyw4QkFBNEM7WUFBQSxpQkFBYSxFQUFBO1lBR2pMLDRGQWVjO1lBUlosd0pBQXdDLEtBQUssSUFBQzs7WUFMOUMsZUFBdUM7WUFBdkMscURBQXVDLG1EQUFBLHFEQUFBLGdEQUFBOzs7dUZERzVCLDJCQUEyQjtjQUx2QyxTQUFTOzJCQUNFLHVCQUF1QjtzQ0FNVSxNQUFNO2tCQUFoRCxlQUFlO21CQUFDLGlCQUFpQjtZQUVhLGdCQUFnQjtrQkFBOUQsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29ubmVjdGVkUG9zaXRpb24gfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgQ29udGVudENoaWxkcmVuLCBFbGVtZW50UmVmLCBRdWVyeUxpc3QsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IG1vbWVudCwgeyBNb21lbnQgfSBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZVZhbHVlLCBVdGlsIH0gZnJvbSAnbXJkLWNvcmUnO1xuaW1wb3J0IHsgTXJkSW5wdXRDb21wb25lbnQgfSBmcm9tICcuLi9tcmQtaW5wdXQvbXJkLWlucHV0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yZC1kYXRlLXJhbmdlLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tcmQtZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNcmREYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBAQ29udGVudENoaWxkcmVuKE1yZElucHV0Q29tcG9uZW50KSBwdWJsaWMgaW5wdXRzOiBRdWVyeUxpc3Q8TXJkSW5wdXRDb21wb25lbnQ+O1xuICAvLyBzdGF0aWMsIGRhbWl0IGRlciBPdmVybGF5LVVyc3BydW5nIHNjaG9uIGJlaW0gZXJzdGVuIFJlbmRlcm4gZmVzdHN0ZWh0IChzb25zdCBORzAxMDApXG4gIEBWaWV3Q2hpbGQoJ2RhdGVJbnB1dCcsIHtzdGF0aWM6IHRydWV9KSBwdWJsaWMgZGF0ZUlucHV0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG5cbiAgcHVibGljIHNob3dEYXRlcGlja2VyOiBPYnNlcnZhYmxlVmFsdWU8Ym9vbGVhbj4gPSBuZXcgT2JzZXJ2YWJsZVZhbHVlKGZhbHNlKTtcblxuICBwdWJsaWMgc3RhcnRWYWx1ZTogTW9tZW50IHwgbnVsbCA9IG51bGw7XG4gIHB1YmxpYyBlbmRWYWx1ZTogTW9tZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgcHVibGljIHN0YXJ0SW5wdXQ6IE1yZElucHV0Q29tcG9uZW50IHwgbnVsbCA9IG51bGw7XG4gIHB1YmxpYyBlbmRJbnB1dDogTXJkSW5wdXRDb21wb25lbnQgfCBudWxsID0gbnVsbDtcblxuICBfcG9zaXRpb25zOiBDb25uZWN0ZWRQb3NpdGlvbltdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICAgICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcbiAgICAgICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICAgICAgICBvdmVybGF5WTogJ3RvcCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBvcmlnaW5YOiAnZW5kJyxcbiAgICAgICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcbiAgICAgICAgICBvdmVybGF5WDogJ2VuZCcsXG4gICAgICAgICAgb3ZlcmxheVk6ICd0b3AnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICAgICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICAgICAgICBvdmVybGF5WTogJ2JvdHRvbSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG9yaWdpblg6ICdlbmQnLFxuICAgICAgICAgIG9yaWdpblk6ICd0b3AnLFxuICAgICAgICAgIG92ZXJsYXlYOiAnZW5kJyxcbiAgICAgICAgICBvdmVybGF5WTogJ2JvdHRvbSdcbiAgICAgICAgfSxcbiAgICAgIF07XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuc3RhcnRJbnB1dCA9IHRoaXMuaW5wdXRzLmZpbmQoaW5wdXQgPT4gaW5wdXQucmFuZ2VTdGFydCk7XG4gICAgICB0aGlzLmVuZElucHV0ID0gdGhpcy5pbnB1dHMuZmluZChpbnB1dCA9PiBpbnB1dC5yYW5nZUVuZCk7XG5cbiAgICAgIGlmICghdGhpcy5zdGFydElucHV0IHx8ICF0aGlzLmVuZElucHV0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQm90aCBzdGFydCBhbmQgZW5kIGlucHV0cyBtdXN0IGJlIHByb3ZpZGVkIGluIG1yZC1kYXRlLXJhbmdlLXBpY2tlcicpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YXJ0VmFsdWUgPSBtb21lbnQodGhpcy5zdGFydElucHV0LmZvcm1Db250cm9sLnZhbHVlLCAnREQuTU0uWVlZWScpLnV0Yyh0cnVlKSB8fCBudWxsO1xuICAgICAgdGhpcy5lbmRWYWx1ZSA9IG1vbWVudCh0aGlzLmVuZElucHV0LmZvcm1Db250cm9sLnZhbHVlLCAnREQuTU0uWVlZWScpLnV0Yyh0cnVlKSB8fCBudWxsO1xuXG4gICAgICB0aGlzLnN0YXJ0SW5wdXQuZm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgIHRoaXMuc3RhcnRWYWx1ZSA9IHZhbHVlID8gbW9tZW50KHZhbHVlLCAnREQuTU0uWVlZWScpLnV0Yyh0cnVlKSA6IG51bGw7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZW5kSW5wdXQuZm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgIHRoaXMuZW5kVmFsdWUgPSB2YWx1ZSA/IG1vbWVudCh2YWx1ZSwgJ0RELk1NLllZWVknKS51dGModHJ1ZSkgOiBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJhbmdlQ2hhbmdlZCh2YWx1ZToge3N0YXJ0OiBNb21lbnR8bnVsbCwgZW5kOiBNb21lbnR8bnVsbH0pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGFydFZhbHVlID0gdmFsdWUuc3RhcnQ7XG4gICAgICAgIHRoaXMuZW5kVmFsdWUgPSB2YWx1ZS5lbmQ7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhcnRJbnB1dCkge1xuICAgICAgICAgIHRoaXMuc3RhcnRJbnB1dC5mb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLnN0YXJ0VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVuZElucHV0KSB7XG4gICAgICAgICAgdGhpcy5lbmRJbnB1dC5mb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLmVuZFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLnN0YXJ0VmFsdWUpICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMuZW5kVmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5zaG93RGF0ZXBpY2tlci52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm1yZC1kYXRlLXJhbmdlLXBpY2tlci1jb250YWluZXJcIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm1yZC1pbnB1dFwiPjwvbmctY29udGVudD5cclxuICAgIDxkaXYgI2RhdGVJbnB1dD48L2Rpdj5cclxuICAgIDxtcmQtYnV0dG9uIGljb24tYnV0dG9uIGZ1bGxJY29uIGRpYW1ldGVyPVwiMjRcIiBpY29uU2l6ZT1cIjE2XCIgKGNsaWNrKT1cInNob3dEYXRlcGlja2VyLnZhbHVlID0gIXNob3dEYXRlcGlja2VyLnZhbHVlXCI+PG1yZC1pY29uIHN2Z0ljb249XCJtcmRfY2FsZW5kYXJcIj48L21yZC1pY29uPjwvbXJkLWJ1dHRvbj5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGVcclxuICBjZGstY29ubmVjdGVkLW92ZXJsYXlcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheUhhc0JhY2tkcm9wXT1cInRydWVcIlxyXG4gIGNka0Nvbm5lY3RlZE92ZXJsYXlCYWNrZHJvcENsYXNzPVwiY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3BcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cImRhdGVJbnB1dEVsZW1lbnRcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJzaG93RGF0ZXBpY2tlci52YWx1ZVwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnNdPVwiX3Bvc2l0aW9uc1wiXHJcbiAgKGJhY2tkcm9wQ2xpY2spPVwic2hvd0RhdGVwaWNrZXIudmFsdWUgPSBmYWxzZVwiXHJcbj5cclxuICA8bXJkLWRhdGVwaWNrZXJcclxuICAgIHJhbmdlLXBpY2tlclxyXG4gICAgW3N0YXJ0RGF0ZV09XCJzdGFydFZhbHVlXCJcclxuICAgIFtlbmREYXRlXT1cImVuZFZhbHVlXCJcclxuICAgIChkYXRlUmFuZ2VDaGFuZ2VkKT1cInJhbmdlQ2hhbmdlZCgkZXZlbnQpXCJcclxuICA+PC9tcmQtZGF0ZXBpY2tlcj5cclxuPC9uZy10ZW1wbGF0ZT4iXX0=