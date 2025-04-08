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
    parentMutationObserver;
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
                this.parentMutationObserver = new MutationObserver(() => {
                    this.ngOnChanges();
                });
                this.parentMutationObserver.observe(this.parentResizeElement, { childList: true, subtree: true, characterData: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZS1pZi10cnVuY2F0ZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9jb21tb24vZGlyZWN0aXZlL2hpZGUtaWYtdHJ1bmNhdGVkL2hpZGUtaWYtdHJ1bmNhdGVkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUF3QixNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzFJLE1BQU0sT0FBTyx3QkFBd0I7SUFtQnpCO0lBakI0QixlQUFlLEdBQVksSUFBSSxDQUFDO0lBQ2hDLHlCQUF5QixHQUFZLEtBQUssQ0FBQztJQUN4RSxzQkFBc0IsQ0FBYztJQUNwQyxxQkFBcUIsQ0FBUztJQUM5QixZQUFZLEdBQVcsT0FBTyxDQUFDO0lBQy9CLG1CQUFtQixDQUFjO0lBRWhDLGFBQWEsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUVyRSxnQkFBZ0IsQ0FBbUI7SUFDbkMsc0JBQXNCLENBQW1CO0lBQ3pDLGNBQWMsQ0FBaUI7SUFFL0Isb0JBQW9CLEdBQVksS0FBSyxDQUFDO0lBQ3RDLGFBQWEsQ0FBTTtJQUUzQixZQUNVLFVBQW1DO1FBQW5DLGVBQVUsR0FBVixVQUFVLENBQXlCO0lBQzFDLENBQUM7SUFFSixlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsRUFBRTtnQkFDaEQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxFQUFDLFNBQVMsRUFBRSxJQUFJLEVB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QUssTUFBTSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO3lCQUNsSztxQkFDRjtpQkFDRjthQUNGO1lBRUQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztTQUNsQztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDO3FHQXZGVSx3QkFBd0I7NEZBQXhCLHdCQUF3Qiw4R0FFaEIsZ0JBQWdCLHlGQUNoQixnQkFBZ0I7O3VGQUh4Qix3QkFBd0I7Y0FIcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7NkRBR3VDLGVBQWU7a0JBQXBELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFDRSx5QkFBeUI7a0JBQTlELEtBQUs7bUJBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUM7WUFDM0Isc0JBQXNCO2tCQUE5QixLQUFLO1lBQ0cscUJBQXFCO2tCQUE3QixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLG1CQUFtQjtrQkFBM0IsS0FBSztZQUVJLGFBQWE7a0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPdXRwdXQsIGJvb2xlYW5BdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2hpZGVJZlRydW5jYXRlZF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIaWRlSWZUcnVuY2F0ZWREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcblxyXG4gIEBJbnB1dCh7dHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlfSkgaGlkZUlmVHJ1bmNhdGVkOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoe3RyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZX0pIGNoZWNrQ2hpbGRyZW5Gb3JBdHRyaWJ1dGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBoaWRlT25UcnVuY2F0ZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBASW5wdXQoKSByZXF1aXJlZEhpZGVBdHRyaWJ1dGU6IHN0cmluZztcclxuICBASW5wdXQoKSBkaXNwbGF5U3RhdGU6IHN0cmluZyA9ICdibG9jayc7XHJcbiAgQElucHV0KCkgcGFyZW50UmVzaXplRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIEBPdXRwdXQoKSBoaWRkZW5DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIHByaXZhdGUgbXV0YXRpb25PYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcjtcclxuICBwcml2YXRlIHBhcmVudE11dGF0aW9uT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XHJcbiAgcHJpdmF0ZSByZXNpemVPYnNlcnZlcjogUmVzaXplT2JzZXJ2ZXI7XHJcblxyXG4gIHByaXZhdGUgYmxvY2tOZXh0UmVzaXplRXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIHJlc2l6ZVRpbWVvdXQ6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+XHJcbiAgKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5oaWRlSWZUcnVuY2F0ZWQpIHtcclxuICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdPbkNoYW5nZXMoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7Y2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5wYXJlbnRSZXNpemVFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZXZlbnQpID0+IHtcclxuICAgICAgICAgIC8vIGlmICh0aGlzLmJsb2NrTmV4dFJlc2l6ZUV2ZW50KSB7XHJcbiAgICAgICAgICAvLyAgIHRoaXMuYmxvY2tOZXh0UmVzaXplRXZlbnQgPSBmYWxzZTtcclxuICAgICAgICAgIC8vICAgcmV0dXJuO1xyXG4gICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgaWYgKHRoaXMucmVzaXplVGltZW91dCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSB0aGlzLmRpc3BsYXlTdGF0ZTtcclxuICAgICAgICAgIHRoaXMucmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5uZ09uQ2hhbmdlcygpLCAxMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMucGFyZW50UmVzaXplRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRNdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50TXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMucGFyZW50UmVzaXplRWxlbWVudCwge2NoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSwgY2hhcmFjdGVyRGF0YTogdHJ1ZX0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmhpZGVJZlRydW5jYXRlZCkge1xyXG5cclxuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICBpZiAoZWxlbWVudC5zY3JvbGxXaWR0aCA8PSBlbGVtZW50LmNsaWVudFdpZHRoKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5kaXNwbGF5U3RhdGU7XHJcbiAgICAgICAgdGhpcy5oaWRkZW5DaGFuZ2VkLmVtaXQoZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLmhpZGRlbkNoYW5nZWQuZW1pdCh0cnVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuY2hlY2tDaGlsZHJlbkZvckF0dHJpYnV0ZSkge1xyXG4gICAgICAgIC8vIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGVsZW1lbnQuY2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKGNoaWxkcmVuW2ldLmdldEF0dHJpYnV0ZSh0aGlzLnJlcXVpcmVkSGlkZUF0dHJpYnV0ZSkgIT09IG51bGwgJiYgKGNoaWxkcmVuW2ldIGFzIEhUTUxFbGVtZW50KS5zdHlsZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oaWRlT25UcnVuY2F0ZWRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgKGNoaWxkcmVuW2ldIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gdGhpcy5oaWRlT25UcnVuY2F0ZWRFbGVtZW50LnN0eWxlLmRpc3BsYXkgIT09ICdub25lJyAmJiB0aGlzLmhpZGVPblRydW5jYXRlZEVsZW1lbnQuc2Nyb2xsV2lkdGggPD0gdGhpcy5oaWRlT25UcnVuY2F0ZWRFbGVtZW50LmNsaWVudFdpZHRoID8gdGhpcy5kaXNwbGF5U3RhdGUgOiAnbm9uZSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgKGNoaWxkcmVuW2ldIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgfHwgY2hpbGRyZW5baV0uc2Nyb2xsV2lkdGggPD0gY2hpbGRyZW5baV0uY2xpZW50V2lkdGggPyB0aGlzLmRpc3BsYXlTdGF0ZSA6ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5ibG9ja05leHRSZXNpemVFdmVudCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm11dGF0aW9uT2JzZXJ2ZXIpIHtcclxuICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnJlc2l6ZU9ic2VydmVyKSB7XHJcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=