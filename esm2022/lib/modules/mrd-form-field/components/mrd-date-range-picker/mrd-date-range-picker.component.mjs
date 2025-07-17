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
        debugger;
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
            i0.ɵɵviewQuery(_c0, 5);
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
            args: ['dateInput']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLWRhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtZm9ybS1maWVsZC9jb21wb25lbnRzL21yZC1kYXRlLXJhbmdlLXBpY2tlci9tcmQtZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1mb3JtLWZpZWxkL2NvbXBvbmVudHMvbXJkLWRhdGUtcmFuZ2UtcGlja2VyL21yZC1kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWlCLFNBQVMsRUFBZ0IsZUFBZSxFQUF5QixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUgsT0FBTyxNQUFrQixNQUFNLFFBQVEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7Ozs7O0lDV25FLHlDQUtDO0lBREMsb05BQW9CLGVBQUEsMkJBQW9CLENBQUEsSUFBQztJQUMxQyxpQkFBaUI7OztJQUhoQiw2Q0FBd0IsNEJBQUE7Ozs7QURONUIsTUFBTSxPQUFPLDJCQUEyQjtJQUVLLE1BQU0sQ0FBK0I7SUFDakQsZ0JBQWdCLENBQTBCO0lBRWxFLGNBQWMsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFdEUsVUFBVSxHQUFrQixJQUFJLENBQUM7SUFDakMsUUFBUSxHQUFrQixJQUFJLENBQUM7SUFFL0IsVUFBVSxHQUE2QixJQUFJLENBQUM7SUFDNUMsUUFBUSxHQUE2QixJQUFJLENBQUM7SUFF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QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDcEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ25DO0lBQ0wsQ0FBQzt3R0E1RVEsMkJBQTJCOzRGQUEzQiwyQkFBMkI7d0NBRXJCLGlCQUFpQjs7Ozs7Ozs7Ozs7WUNicEMsOEJBQTZDO1lBQ3pDLGtCQUE0QztZQUM1QywrQkFBc0I7WUFDdEIscUNBQW9IO1lBQXZELG9LQUFzRDtZQUFDLDhCQUE0QztZQUFBLGlCQUFhLEVBQUE7WUFHakwsNEZBZWM7WUFSWix3SkFBd0MsS0FBSyxJQUFDOztZQUw5QyxlQUF1QztZQUF2QyxxREFBdUMsbURBQUEscURBQUEsZ0RBQUE7Ozt1RkRHNUIsMkJBQTJCO2NBTHZDLFNBQVM7MkJBQ0UsdUJBQXVCO3NDQU1VLE1BQU07a0JBQWhELGVBQWU7bUJBQUMsaUJBQWlCO1lBQ0gsZ0JBQWdCO2tCQUE5QyxTQUFTO21CQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0ZWRQb3NpdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZiwgUXVlcnlMaXN0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IG1vbWVudCwgeyBNb21lbnQgfSBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlVmFsdWUsIFV0aWwgfSBmcm9tICdtcmQtY29yZSc7XHJcbmltcG9ydCB7IE1yZElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi4vbXJkLWlucHV0L21yZC1pbnB1dC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtcmQtZGF0ZS1yYW5nZS1waWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmQtZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21yZC1kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNcmREYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihNcmRJbnB1dENvbXBvbmVudCkgcHVibGljIGlucHV0czogUXVlcnlMaXN0PE1yZElucHV0Q29tcG9uZW50PjtcclxuICBAVmlld0NoaWxkKCdkYXRlSW5wdXQnKSBwdWJsaWMgZGF0ZUlucHV0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcblxyXG4gIHB1YmxpYyBzaG93RGF0ZXBpY2tlcjogT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+ID0gbmV3IE9ic2VydmFibGVWYWx1ZShmYWxzZSk7XHJcblxyXG4gIHB1YmxpYyBzdGFydFZhbHVlOiBNb21lbnQgfCBudWxsID0gbnVsbDtcclxuICBwdWJsaWMgZW5kVmFsdWU6IE1vbWVudCB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgc3RhcnRJbnB1dDogTXJkSW5wdXRDb21wb25lbnQgfCBudWxsID0gbnVsbDtcclxuICBwdWJsaWMgZW5kSW5wdXQ6IE1yZElucHV0Q29tcG9uZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIF9wb3NpdGlvbnM6IENvbm5lY3RlZFBvc2l0aW9uW10gPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcclxuICAgICAgICAgIG9yaWdpblk6ICdib3R0b20nLFxyXG4gICAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgICAgICBvdmVybGF5WTogJ3RvcCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBvcmlnaW5YOiAnZW5kJyxcclxuICAgICAgICAgIG9yaWdpblk6ICdib3R0b20nLFxyXG4gICAgICAgICAgb3ZlcmxheVg6ICdlbmQnLFxyXG4gICAgICAgICAgb3ZlcmxheVk6ICd0b3AnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcclxuICAgICAgICAgIG9yaWdpblk6ICd0b3AnLFxyXG4gICAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgICAgICBvdmVybGF5WTogJ2JvdHRvbSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG9yaWdpblg6ICdlbmQnLFxyXG4gICAgICAgICAgb3JpZ2luWTogJ3RvcCcsXHJcbiAgICAgICAgICBvdmVybGF5WDogJ2VuZCcsXHJcbiAgICAgICAgICBvdmVybGF5WTogJ2JvdHRvbSdcclxuICAgICAgICB9LFxyXG4gICAgICBdO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICB0aGlzLnN0YXJ0SW5wdXQgPSB0aGlzLmlucHV0cy5maW5kKGlucHV0ID0+IGlucHV0LnJhbmdlU3RhcnQpO1xyXG4gICAgICB0aGlzLmVuZElucHV0ID0gdGhpcy5pbnB1dHMuZmluZChpbnB1dCA9PiBpbnB1dC5yYW5nZUVuZCk7XHJcblxyXG4gICAgICBpZiAoIXRoaXMuc3RhcnRJbnB1dCB8fCAhdGhpcy5lbmRJbnB1dCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQm90aCBzdGFydCBhbmQgZW5kIGlucHV0cyBtdXN0IGJlIHByb3ZpZGVkIGluIG1yZC1kYXRlLXJhbmdlLXBpY2tlcicpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnN0YXJ0VmFsdWUgPSBtb21lbnQodGhpcy5zdGFydElucHV0LmZvcm1Db250cm9sLnZhbHVlLCAnREQuTU0uWVlZWScpLnV0Yyh0cnVlKSB8fCBudWxsO1xyXG4gICAgICB0aGlzLmVuZFZhbHVlID0gbW9tZW50KHRoaXMuZW5kSW5wdXQuZm9ybUNvbnRyb2wudmFsdWUsICdERC5NTS5ZWVlZJykudXRjKHRydWUpIHx8IG51bGw7XHJcblxyXG4gICAgICB0aGlzLnN0YXJ0SW5wdXQuZm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGFydFZhbHVlID0gdmFsdWUgPyBtb21lbnQodmFsdWUsICdERC5NTS5ZWVlZJykudXRjKHRydWUpIDogbnVsbDtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuZW5kSW5wdXQuZm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgICAgdGhpcy5lbmRWYWx1ZSA9IHZhbHVlID8gbW9tZW50KHZhbHVlLCAnREQuTU0uWVlZWScpLnV0Yyh0cnVlKSA6IG51bGw7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByYW5nZUNoYW5nZWQodmFsdWU6IHtzdGFydDogTW9tZW50fG51bGwsIGVuZDogTW9tZW50fG51bGx9KTogdm9pZCB7ZGVidWdnZXJcclxuICAgICAgICB0aGlzLnN0YXJ0VmFsdWUgPSB2YWx1ZS5zdGFydDtcclxuICAgICAgICB0aGlzLmVuZFZhbHVlID0gdmFsdWUuZW5kO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGFydElucHV0KSB7XHJcbiAgICAgICAgICB0aGlzLnN0YXJ0SW5wdXQuZm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5zdGFydFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZW5kSW5wdXQpIHtcclxuICAgICAgICAgIHRoaXMuZW5kSW5wdXQuZm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5lbmRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5zdGFydFZhbHVlKSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLmVuZFZhbHVlKSkge1xyXG4gICAgICAgICAgdGhpcy5zaG93RGF0ZXBpY2tlci52YWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibXJkLWRhdGUtcmFuZ2UtcGlja2VyLWNvbnRhaW5lclwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibXJkLWlucHV0XCI+PC9uZy1jb250ZW50PlxyXG4gICAgPGRpdiAjZGF0ZUlucHV0PjwvZGl2PlxyXG4gICAgPG1yZC1idXR0b24gaWNvbi1idXR0b24gZnVsbEljb24gZGlhbWV0ZXI9XCIyNFwiIGljb25TaXplPVwiMTZcIiAoY2xpY2spPVwic2hvd0RhdGVwaWNrZXIudmFsdWUgPSAhc2hvd0RhdGVwaWNrZXIudmFsdWVcIj48bXJkLWljb24gc3ZnSWNvbj1cIm1yZF9jYWxlbmRhclwiPjwvbXJkLWljb24+PC9tcmQtYnV0dG9uPlxyXG48L2Rpdj5cclxuXHJcbjxuZy10ZW1wbGF0ZVxyXG4gIGNkay1jb25uZWN0ZWQtb3ZlcmxheVxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5SGFzQmFja2Ryb3BdPVwidHJ1ZVwiXHJcbiAgY2RrQ29ubmVjdGVkT3ZlcmxheUJhY2tkcm9wQ2xhc3M9XCJjZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcFwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwiZGF0ZUlucHV0RWxlbWVudFwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cInNob3dEYXRlcGlja2VyLnZhbHVlXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJfcG9zaXRpb25zXCJcclxuICAoYmFja2Ryb3BDbGljayk9XCJzaG93RGF0ZXBpY2tlci52YWx1ZSA9IGZhbHNlXCJcclxuPlxyXG4gIDxtcmQtZGF0ZXBpY2tlclxyXG4gICAgcmFuZ2UtcGlja2VyXHJcbiAgICBbc3RhcnREYXRlXT1cInN0YXJ0VmFsdWVcIlxyXG4gICAgW2VuZERhdGVdPVwiZW5kVmFsdWVcIlxyXG4gICAgKGRhdGVSYW5nZUNoYW5nZWQpPVwicmFuZ2VDaGFuZ2VkKCRldmVudClcIlxyXG4gID48L21yZC1kYXRlcGlja2VyPlxyXG48L25nLXRlbXBsYXRlPiJdfQ==