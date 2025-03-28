import { booleanAttribute, Directive, Input, numberAttribute } from "@angular/core";
import * as i0 from "@angular/core";
export class ToggleOnHoverDirective {
    elementRef;
    toggleOnHover;
    deepToggleElementSearch = false;
    hoverElementParentDepth = 1;
    hoverElement;
    displayShowStyle = 'block';
    displayShowStyleToggleElement = 'block';
    toggleElement;
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        this.toggleElement = this.deepToggleElementSearch ? document.querySelector(`[toggleElement='${this.toggleOnHover}']`) : this.elementRef.nativeElement.parentElement.querySelector(`[toggleElement='${this.toggleOnHover}']`);
        if (!this.toggleElement) {
            console.error(`Toggle element with attribute 'toggleElement="${this.toggleOnHover}"' not found`);
            return;
        }
        this.toggleElement.style.display = 'none';
        if (!this.hoverElement) {
            let parentElement = this.elementRef.nativeElement;
            for (let i = 0; i < this.hoverElementParentDepth; i++) {
                parentElement = parentElement.parentElement;
            }
            this.hoverElement = parentElement;
        }
        this.hoverElement.addEventListener('mouseenter', this.mouseEnter.bind(this));
        this.hoverElement.addEventListener('mouseleave', this.mouseLeave.bind(this));
    }
    mouseEnter() {
        this.toggleElement.style.display = this.displayShowStyleToggleElement;
        this.elementRef.nativeElement.style.display = 'none';
    }
    mouseLeave() {
        this.toggleElement.style.display = 'none';
        this.elementRef.nativeElement.style.display = this.displayShowStyle;
    }
    ngOnDestroy() {
        this.hoverElement.removeEventListener('mouseenter', this.mouseEnter.bind(this));
        this.hoverElement.removeEventListener('mouseleave', this.mouseLeave.bind(this));
    }
    /** @nocollapse */ static ɵfac = function ToggleOnHoverDirective_Factory(t) { return new (t || ToggleOnHoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: ToggleOnHoverDirective, selectors: [["", "toggleOnHover", ""]], inputs: { toggleOnHover: "toggleOnHover", deepToggleElementSearch: ["deepToggleElementSearch", "deepToggleElementSearch", booleanAttribute], hoverElementParentDepth: ["hoverElementParentDepth", "hoverElementParentDepth", numberAttribute], hoverElement: "hoverElement", displayShowStyle: "displayShowStyle", displayShowStyleToggleElement: "displayShowStyleToggleElement" }, features: [i0.ɵɵInputTransformsFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToggleOnHoverDirective, [{
        type: Directive,
        args: [{
                selector: '[toggleOnHover]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { toggleOnHover: [{
            type: Input
        }], deepToggleElementSearch: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], hoverElementParentDepth: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], hoverElement: [{
            type: Input
        }], displayShowStyle: [{
            type: Input
        }], displayShowStyleToggleElement: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLW9uLWhvdmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvY29tbW9uL2RpcmVjdGl2ZS90b2dnbGUtb24taG92ZXIvdG9nZ2xlLW9uLWhvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLGdCQUFnQixFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQUUsZUFBZSxFQUFhLE1BQU0sZUFBZSxDQUFDOztBQU8xSCxNQUFNLE9BQU8sc0JBQXNCO0lBZ0JuQjtJQWRILGFBQWEsQ0FBUztJQUVPLHVCQUF1QixHQUFZLEtBQUssQ0FBQztJQUUxQyx1QkFBdUIsR0FBVyxDQUFDLENBQUM7SUFFaEUsWUFBWSxDQUFjO0lBRTFCLGdCQUFnQixHQUFXLE9BQU8sQ0FBQztJQUNuQyw2QkFBNkIsR0FBVyxPQUFPLENBQUM7SUFFakQsYUFBYSxDQUFjO0lBRW5DLFlBQ1ksVUFBbUM7UUFBbkMsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7SUFDM0MsQ0FBQztJQUVMLGVBQWU7UUFDWCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFDO1FBQzdOLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsaURBQWlELElBQUksQ0FBQyxhQUFhLGNBQWMsQ0FBQyxDQUFDO1lBQ2pHLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFFMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDcEIsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7WUFDbEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbkQsYUFBYSxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUM7YUFDL0M7WUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQztTQUNyQztRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRU8sVUFBVTtRQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsNkJBQTZCLENBQUM7UUFDdEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDekQsQ0FBQztJQUVPLFVBQVU7UUFDZCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ3hFLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7bUdBcERRLHNCQUFzQjs0RkFBdEIsc0JBQXNCLG9LQUlaLGdCQUFnQixtRkFFaEIsZUFBZTs7dUZBTnpCLHNCQUFzQjtjQUhsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjthQUM1Qjs2REFHWSxhQUFhO2tCQUFyQixLQUFLO1lBRWdDLHVCQUF1QjtrQkFBNUQsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBQztZQUVDLHVCQUF1QjtrQkFBM0QsS0FBSzttQkFBQyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUM7WUFFMUIsWUFBWTtrQkFBcEIsS0FBSztZQUVHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLDZCQUE2QjtrQkFBckMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIGJvb2xlYW5BdHRyaWJ1dGUsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIG51bWJlckF0dHJpYnV0ZSwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbdG9nZ2xlT25Ib3Zlcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2dnbGVPbkhvdmVyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKSB0b2dnbGVPbkhvdmVyOiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KHt0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGV9KSBkZWVwVG9nZ2xlRWxlbWVudFNlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBJbnB1dCh7dHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGV9KSBob3ZlckVsZW1lbnRQYXJlbnREZXB0aDogbnVtYmVyID0gMTtcclxuXHJcbiAgICBASW5wdXQoKSBob3ZlckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIEBJbnB1dCgpIGRpc3BsYXlTaG93U3R5bGU6IHN0cmluZyA9ICdibG9jayc7XHJcbiAgICBASW5wdXQoKSBkaXNwbGF5U2hvd1N0eWxlVG9nZ2xlRWxlbWVudDogc3RyaW5nID0gJ2Jsb2NrJztcclxuXHJcbiAgICBwcml2YXRlIHRvZ2dsZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD5cclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlRWxlbWVudCA9IHRoaXMuZGVlcFRvZ2dsZUVsZW1lbnRTZWFyY2ggPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbdG9nZ2xlRWxlbWVudD0nJHt0aGlzLnRvZ2dsZU9uSG92ZXJ9J11gKSA6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihgW3RvZ2dsZUVsZW1lbnQ9JyR7dGhpcy50b2dnbGVPbkhvdmVyfSddYCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRvZ2dsZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVG9nZ2xlIGVsZW1lbnQgd2l0aCBhdHRyaWJ1dGUgJ3RvZ2dsZUVsZW1lbnQ9XCIke3RoaXMudG9nZ2xlT25Ib3Zlcn1cIicgbm90IGZvdW5kYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b2dnbGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0aGlzLmhvdmVyRWxlbWVudCkge1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50RWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaG92ZXJFbGVtZW50UGFyZW50RGVwdGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhvdmVyRWxlbWVudCA9IHBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhvdmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5tb3VzZUVudGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuaG92ZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm1vdXNlTGVhdmUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3VzZUVudGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5kaXNwbGF5U2hvd1N0eWxlVG9nZ2xlRWxlbWVudDtcclxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW91c2VMZWF2ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5kaXNwbGF5U2hvd1N0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaG92ZXJFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLm1vdXNlRW50ZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5ob3ZlckVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMubW91c2VMZWF2ZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxufSJdfQ==