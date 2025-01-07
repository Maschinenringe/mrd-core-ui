import { Directive, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';
import * as i0 from "@angular/core";
export class HideIfTruncatedDirective {
    elementRef;
    hideIfTruncated = true;
    checkChildrenForAttribute = false;
    hideOnTruncatedElement;
    requiredHideAttribute;
    displayState = 'block';
    parentResizeElement;
    hiddenChanged = new EventEmitter();
    mutationObserver;
    resizeObserver;
    blockNextResizeEvent = false;
    resizeTimeout;
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        if (this.hideIfTruncated) {
            this.mutationObserver = new MutationObserver(() => {
                this.ngOnChanges();
            });
            this.mutationObserver.observe(this.elementRef.nativeElement, { childList: true, subtree: true, characterData: true });
            if (this.parentResizeElement) {
                this.resizeObserver = new ResizeObserver((event) => {
                    // if (this.blockNextResizeEvent) {
                    //   this.blockNextResizeEvent = false;
                    //   return;
                    // }
                    if (this.resizeTimeout) {
                        clearTimeout(this.resizeTimeout);
                    }
                    this.elementRef.nativeElement.style.display = this.displayState;
                    this.resizeTimeout = setTimeout(() => this.ngOnChanges(), 10);
                });
                this.resizeObserver.observe(this.parentResizeElement);
            }
        }
    }
    ngOnChanges() {
        if (this.hideIfTruncated) {
            const element = this.elementRef.nativeElement;
            if (element.scrollWidth <= element.clientWidth) {
                element.style.display = this.displayState;
                this.hiddenChanged.emit(false);
            }
            else {
                element.style.display = 'none';
                this.hiddenChanged.emit(true);
            }
            if (this.checkChildrenForAttribute) {
                // const element = this.elementRef.nativeElement;
                const children = element.children;
                for (let i = 0; i < children.length; i++) {
                    if (children[i].getAttribute(this.requiredHideAttribute) !== null && children[i].style) {
                        if (this.hideOnTruncatedElement) {
                            children[i].style.display = this.hideOnTruncatedElement.style.display !== 'none' && this.hideOnTruncatedElement.scrollWidth <= this.hideOnTruncatedElement.clientWidth ? this.displayState : 'none';
                        }
                        else {
                            children[i].style.display = element.style.display === 'none' || children[i].scrollWidth <= children[i].clientWidth ? this.displayState : 'none';
                        }
                    }
                }
            }
            this.blockNextResizeEvent = true;
        }
    }
    ngOnDestroy() {
        if (this.mutationObserver) {
            this.mutationObserver.disconnect();
        }
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }
    /** @nocollapse */ static ɵfac = function HideIfTruncatedDirective_Factory(t) { return new (t || HideIfTruncatedDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: HideIfTruncatedDirective, selectors: [["", "hideIfTruncated", ""]], inputs: { hideIfTruncated: ["hideIfTruncated", "hideIfTruncated", booleanAttribute], checkChildrenForAttribute: ["checkChildrenForAttribute", "checkChildrenForAttribute", booleanAttribute], hideOnTruncatedElement: "hideOnTruncatedElement", requiredHideAttribute: "requiredHideAttribute", displayState: "displayState", parentResizeElement: "parentResizeElement" }, outputs: { hiddenChanged: "hiddenChanged" }, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵNgOnChangesFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HideIfTruncatedDirective, [{
        type: Directive,
        args: [{
                selector: '[hideIfTruncated]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { hideIfTruncated: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], checkChildrenForAttribute: [{
            type: Input,
            args: [{ transform: booleanAttribute }]
        }], hideOnTruncatedElement: [{
            type: Input
        }], requiredHideAttribute: [{
            type: Input
        }], displayState: [{
            type: Input
        }], parentResizeElement: [{
            type: Input
        }], hiddenChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZS1pZi10cnVuY2F0ZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9jb21tb24vZGlyZWN0aXZlL2hpZGUtaWYtdHJ1bmNhdGVkL2hpZGUtaWYtdHJ1bmNhdGVkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUF3QixNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzFJLE1BQU0sT0FBTyx3QkFBd0I7SUFrQnpCO0lBaEI0QixlQUFlLEdBQVksSUFBSSxDQUFDO0lBQ2hDLHlCQUF5QixHQUFZLEtBQUssQ0FBQztJQUN4RSxzQkFBc0IsQ0FBYztJQUNwQyxxQkFBcUIsQ0FBUztJQUM5QixZQUFZLEdBQVcsT0FBTyxDQUFDO0lBQy9CLG1CQUFtQixDQUFjO0lBRWhDLGFBQWEsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUVyRSxnQkFBZ0IsQ0FBbUI7SUFDbkMsY0FBYyxDQUFpQjtJQUUvQixvQkFBb0IsR0FBWSxLQUFLLENBQUM7SUFDdEMsYUFBYSxDQUFNO0lBRTNCLFlBQ1UsVUFBbUM7UUFBbkMsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7SUFDMUMsQ0FBQztJQUVKLGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLENBQUMsR0FBRyxFQUFFO2dCQUNoRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxF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QUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDO3FHQWxGVSx3QkFBd0I7NEZBQXhCLHdCQUF3Qiw4R0FFaEIsZ0JBQWdCLHlGQUNoQixnQkFBZ0I7O3VGQUh4Qix3QkFBd0I7Y0FIcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7NkRBR3VDLGVBQWU7a0JBQXBELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFDRSx5QkFBeUI7a0JBQTlELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFDM0Isc0JBQXNCO2tCQUE5QixLQUFLO1lBQ0cscUJBQXFCO2tCQUE3QixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLG1CQUFtQjtrQkFBM0IsS0FBSztZQUVJLGFBQWE7a0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPdXRwdXQsIGJvb2xlYW5BdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2hpZGVJZlRydW5jYXRlZF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIaWRlSWZUcnVuY2F0ZWREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgaGlkZUlmVHJ1bmNhdGVkOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGNoZWNrQ2hpbGRyZW5Gb3JBdHRyaWJ1dGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBoaWRlT25UcnVuY2F0ZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBASW5wdXQoKSByZXF1aXJlZEhpZGVBdHRyaWJ1dGU6IHN0cmluZztcclxuICBASW5wdXQoKSBkaXNwbGF5U3RhdGU6IHN0cmluZyA9ICdibG9jayc7XHJcbiAgQElucHV0KCkgcGFyZW50UmVzaXplRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIEBPdXRwdXQoKSBoaWRkZW5DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIHByaXZhdGUgbXV0YXRpb25PYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcjtcclxuICBwcml2YXRlIHJlc2l6ZU9ic2VydmVyOiBSZXNpemVPYnNlcnZlcjtcclxuXHJcbiAgcHJpdmF0ZSBibG9ja05leHRSZXNpemVFdmVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgcmVzaXplVGltZW91dDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD5cclxuICApIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmhpZGVJZlRydW5jYXRlZCkge1xyXG4gICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHtjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUsIGNoYXJhY3RlckRhdGE6IHRydWV9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBhcmVudFJlc2l6ZUVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChldmVudCkgPT4ge1xyXG4gICAgICAgICAgLy8gaWYgKHRoaXMuYmxvY2tOZXh0UmVzaXplRXZlbnQpIHtcclxuICAgICAgICAgIC8vICAgdGhpcy5ibG9ja05leHRSZXNpemVFdmVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgLy8gICByZXR1cm47XHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICBpZiAodGhpcy5yZXNpemVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHRoaXMuZGlzcGxheVN0YXRlO1xyXG4gICAgICAgICAgdGhpcy5yZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLm5nT25DaGFuZ2VzKCksIDEwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5wYXJlbnRSZXNpemVFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5oaWRlSWZUcnVuY2F0ZWQpIHtcclxuXHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgaWYgKGVsZW1lbnQuc2Nyb2xsV2lkdGggPD0gZWxlbWVudC5jbGllbnRXaWR0aCkge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHRoaXMuZGlzcGxheVN0YXRlO1xyXG4gICAgICAgIHRoaXMuaGlkZGVuQ2hhbmdlZC5lbWl0KGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5oaWRkZW5DaGFuZ2VkLmVtaXQodHJ1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmNoZWNrQ2hpbGRyZW5Gb3JBdHRyaWJ1dGUpIHtcclxuICAgICAgICAvLyBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBlbGVtZW50LmNoaWxkcmVuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChjaGlsZHJlbltpXS5nZXRBdHRyaWJ1dGUodGhpcy5yZXF1aXJlZEhpZGVBdHRyaWJ1dGUpICE9PSBudWxsICYmIChjaGlsZHJlbltpXSBhcyBIVE1MRWxlbWVudCkuc3R5bGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGlkZU9uVHJ1bmNhdGVkRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgIChjaGlsZHJlbltpXSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZGlzcGxheSA9IHRoaXMuaGlkZU9uVHJ1bmNhdGVkRWxlbWVudC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgJiYgdGhpcy5oaWRlT25UcnVuY2F0ZWRFbGVtZW50LnNjcm9sbFdpZHRoIDw9IHRoaXMuaGlkZU9uVHJ1bmNhdGVkRWxlbWVudC5jbGllbnRXaWR0aCA/IHRoaXMuZGlzcGxheVN0YXRlIDogJ25vbmUnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIChjaGlsZHJlbltpXSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZGlzcGxheSA9IGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnIHx8IGNoaWxkcmVuW2ldLnNjcm9sbFdpZHRoIDw9IGNoaWxkcmVuW2ldLmNsaWVudFdpZHRoID8gdGhpcy5kaXNwbGF5U3RhdGUgOiAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYmxvY2tOZXh0UmVzaXplRXZlbnQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tdXRhdGlvbk9ic2VydmVyKSB7XHJcbiAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5yZXNpemVPYnNlcnZlcikge1xyXG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19