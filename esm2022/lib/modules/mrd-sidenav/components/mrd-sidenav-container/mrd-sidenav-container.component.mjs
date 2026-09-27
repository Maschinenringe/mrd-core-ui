import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, Output, numberAttribute } from '@angular/core';
import { ConfigUtil } from '../../../../common/util/config.util';
import { MrdSidenavComponent } from '../mrd-sidenav/mrd-sidenav.component';
import { MrdSidenavContentComponent } from '../mrd-sidenav-content/mrd-sidenav-content.component';
import * as i0 from "@angular/core";
const _c0 = [[["mrd-sidenav"]], [["mrd-sidenav-content"]]];
const _c1 = ["mrd-sidenav", "mrd-sidenav-content"];
/**
 * Seitenlayout aus `mrd-sidenav` (links) und `mrd-sidenav-content`.
 * Unterhalb von `breakpoint` ist die Ansicht mobil: die Sidenav nimmt die volle Breite ein und verdeckt den Inhalt, solange sie geoeffnet ist.
 */
export class MrdSidenavContainerComponent {
    cdr;
    sidenav;
    content;
    /** Fensterbreite in px, ab der die Desktop-Ansicht gilt (Standard wie Tailwind `lg`) */
    set breakpoint(value) {
        this._breakpoint = value > 0 ? value : ConfigUtil.getConfig().sidenav.breakpoint;
        if (this.initialisiert) {
            // Nicht waehrend der Change Detection des Aufrufers, weil dabei openedChange/mobileChange ausgegeben werden koennen
            Promise.resolve().then(() => this.mediaQueryEinrichten(false));
        }
    }
    get breakpoint() {
        return this._breakpoint;
    }
    _breakpoint = ConfigUtil.getConfig().sidenav.breakpoint;
    /** Wird beim Start und bei jedem Wechsel zwischen mobiler und Desktop-Ansicht ausgegeben */
    mobileChange = new EventEmitter();
    mobile = false;
    initialisiert = false;
    mediaQuery;
    sidenavSubscription;
    mediaQueryListener = (event) => this.mobilSetzen(event.matches, false);
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngAfterContentInit() {
        this.initialisiert = true;
        this.sidenavSubscription = this.sidenav?.zustandGeaendert.subscribe(() => this.zustandAnwenden());
        this.mediaQueryEinrichten(true);
    }
    ngOnDestroy() {
        this.mediaQueryEntfernen();
        this.sidenavSubscription?.unsubscribe();
    }
    mediaQueryEinrichten(initial) {
        this.mediaQueryEntfernen();
        if (typeof window === 'undefined' || !window.matchMedia) {
            this.zustandAnwenden();
            return;
        }
        // -0.02px wie bei Tailwind/Bootstrap, damit sich mobil und Desktop genau am Breakpoint nicht ueberschneiden
        this.mediaQuery = window.matchMedia(`(max-width: ${this._breakpoint - 0.02}px)`);
        this.mediaQuery.addEventListener('change', this.mediaQueryListener);
        this.mobilSetzen(this.mediaQuery.matches, initial);
    }
    mediaQueryEntfernen() {
        this.mediaQuery?.removeEventListener('change', this.mediaQueryListener);
        this.mediaQuery = null;
    }
    mobilSetzen(mobil, initial) {
        if (!initial && mobil === this.mobile) {
            return;
        }
        const warMobil = this.mobile;
        this.mobile = mobil;
        if (!initial && warMobil && !mobil && this.sidenav?.autoOpen) {
            this.sidenav.open();
        }
        this.zustandAnwenden();
        this.cdr.markForCheck();
        if (initial) {
            // Nicht synchron waehrend der Change Detection des Aufrufers ausgeben
            Promise.resolve().then(() => this.mobileChange.emit(this.mobile));
        }
        else {
            this.mobileChange.emit(this.mobile);
        }
    }
    zustandAnwenden() {
        this.sidenav?.mobilSetzen(this.mobile);
        this.content?.verborgenSetzen(this.mobile && !!this.sidenav?.opened);
    }
    /** @nocollapse */ static ɵfac = function MrdSidenavContainerComponent_Factory(t) { return new (t || MrdSidenavContainerComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: MrdSidenavContainerComponent, selectors: [["mrd-sidenav-container"]], contentQueries: function MrdSidenavContainerComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, MrdSidenavComponent, 4);
            i0.ɵɵcontentQuery(dirIndex, MrdSidenavContentComponent, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sidenav = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
        } }, hostVars: 2, hostBindings: function MrdSidenavContainerComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("mrd-sidenav-container-mobile", ctx.mobile);
        } }, inputs: { breakpoint: ["breakpoint", "breakpoint", numberAttribute] }, outputs: { mobileChange: "mobileChange" }, features: [i0.ɵɵInputTransformsFeature], ngContentSelectors: _c1, decls: 2, vars: 0, template: function MrdSidenavContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵprojection(0);
            i0.ɵɵprojection(1, 1);
        } }, styles: ["[_nghost-%COMP%]{display:flex;flex-direction:row;box-sizing:border-box;position:relative;width:100%;height:100%;overflow:hidden}"], changeDetection: 0 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MrdSidenavContainerComponent, [{
        type: Component,
        args: [{ selector: 'mrd-sidenav-container', host: {
                    '[class.mrd-sidenav-container-mobile]': 'mobile'
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content select=\"mrd-sidenav\"></ng-content>\n<ng-content select=\"mrd-sidenav-content\"></ng-content>\n", styles: [":host{display:flex;flex-direction:row;box-sizing:border-box;position:relative;width:100%;height:100%;overflow:hidden}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { sidenav: [{
            type: ContentChild,
            args: [MrdSidenavComponent, { descendants: false }]
        }], content: [{
            type: ContentChild,
            args: [MrdSidenavContentComponent, { descendants: false }]
        }], breakpoint: [{
            type: Input,
            args: [{ transform: numberAttribute }]
        }], mobileChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJkLXNpZGVuYXYtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlLXVpL3NyYy9saWIvbW9kdWxlcy9tcmQtc2lkZW5hdi9jb21wb25lbnRzL21yZC1zaWRlbmF2LWNvbnRhaW5lci9tcmQtc2lkZW5hdi1jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9tb2R1bGVzL21yZC1zaWRlbmF2L2NvbXBvbmVudHMvbXJkLXNpZGVuYXYtY29udGFpbmVyL21yZC1zaWRlbmF2LWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW9CLHVCQUF1QixFQUFxQixTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvSyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7Ozs7QUFFbEc7OztHQUdHO0FBVUgsTUFBTSxPQUFPLDRCQUE0QjtJQThCN0I7SUE1QnVELE9BQU8sQ0FBc0I7SUFFdEIsT0FBTyxDQUE2QjtJQUU1Ryx3RkFBd0Y7SUFDeEYsSUFBZ0QsVUFBVSxDQUFDLEtBQWE7UUFDdEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQ2pGLElBQUksSUFBSSxDQUFDLGFBQWEs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T0FBTyxFQUFFO1lBQ1gsc0VBQXNFO1lBQ3RFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDbkU7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7SUFFTyxlQUFlO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7eUdBbkZVLDRCQUE0Qjs0RkFBNUIsNEJBQTRCO3dDQUV6QixtQkFBbUI7d0NBRW5CLDBCQUEwQjs7Ozs7OztnRUFHckIsZUFBZTs7WUMxQnBDLGtCQUE4QztZQUM5QyxxQkFBc0Q7Ozt1RkRrQnpDLDRCQUE0QjtjQVR4QyxTQUFTOzJCQUNFLHVCQUF1QixRQUczQjtvQkFDSixzQ0FBc0MsRUFBRSxRQUFRO2lCQUNqRCxtQkFDZ0IsdUJBQXVCLENBQUMsTUFBTTtvRUFJa0IsT0FBTztrQkFBdkUsWUFBWTttQkFBQyxtQkFBbUIsRUFBRSxFQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUM7WUFFaUIsT0FBTztrQkFBOUUsWUFBWTttQkFBQywwQkFBMEIsRUFBRSxFQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUM7WUFHZCxVQUFVO2tCQUF6RCxLQUFLO21CQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBQztZQWFsQixZQUFZO2tCQUE1QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQsIG51bWJlckF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb25maWdVdGlsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29uZmlnLnV0aWwnO1xuaW1wb3J0IHsgTXJkU2lkZW5hdkNvbXBvbmVudCB9IGZyb20gJy4uL21yZC1zaWRlbmF2L21yZC1zaWRlbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNcmRTaWRlbmF2Q29udGVudENvbXBvbmVudCB9IGZyb20gJy4uL21yZC1zaWRlbmF2LWNvbnRlbnQvbXJkLXNpZGVuYXYtY29udGVudC5jb21wb25lbnQnO1xuXG4vKipcbiAqIFNlaXRlbmxheW91dCBhdXMgYG1yZC1zaWRlbmF2YCAobGlua3MpIHVuZCBgbXJkLXNpZGVuYXYtY29udGVudGAuXG4gKiBVbnRlcmhhbGIgdm9uIGBicmVha3BvaW50YCBpc3QgZGllIEFuc2ljaHQgbW9iaWw6IGRpZSBTaWRlbmF2IG5pbW10IGRpZSB2b2xsZSBCcmVpdGUgZWluIHVuZCB2ZXJkZWNrdCBkZW4gSW5oYWx0LCBzb2xhbmdlIHNpZSBnZW9lZmZuZXQgaXN0LlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtcmQtc2lkZW5hdi1jb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbXJkLXNpZGVuYXYtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXJkLXNpZGVuYXYtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLm1yZC1zaWRlbmF2LWNvbnRhaW5lci1tb2JpbGVdJzogJ21vYmlsZSdcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTXJkU2lkZW5hdkNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cbiAgQENvbnRlbnRDaGlsZChNcmRTaWRlbmF2Q29tcG9uZW50LCB7ZGVzY2VuZGFudHM6IGZhbHNlfSkgcHJpdmF0ZSBzaWRlbmF2OiBNcmRTaWRlbmF2Q29tcG9uZW50O1xuXG4gIEBDb250ZW50Q2hpbGQoTXJkU2lkZW5hdkNvbnRlbnRDb21wb25lbnQsIHtkZXNjZW5kYW50czogZmFsc2V9KSBwcml2YXRlIGNvbnRlbnQ6IE1yZFNpZGVuYXZDb250ZW50Q29tcG9uZW50O1xuXG4gIC8qKiBGZW5zdGVyYnJlaXRlIGluIHB4LCBhYiBkZXIgZGllIERlc2t0b3AtQW5zaWNodCBnaWx0IChTdGFuZGFyZCB3aWUgVGFpbHdpbmQgYGxnYCkgKi9cbiAgQElucHV0KHt0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZX0pIHB1YmxpYyBzZXQgYnJlYWtwb2ludCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYnJlYWtwb2ludCA9IHZhbHVlID4gMCA/IHZhbHVlIDogQ29uZmlnVXRpbC5nZXRDb25maWcoKS5zaWRlbmF2LmJyZWFrcG9pbnQ7XG4gICAgaWYgKHRoaXMuaW5pdGlhbGlzaWVydCkge1xuICAgICAgLy8gTmljaHQgd2FlaHJlbmQgZGVyIENoYW5nZSBEZXRlY3Rpb24gZGVzIEF1ZnJ1ZmVycywgd2VpbCBkYWJlaSBvcGVuZWRDaGFuZ2UvbW9iaWxlQ2hhbmdlIGF1c2dlZ2ViZW4gd2VyZGVuIGtvZW5uZW5cbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5tZWRpYVF1ZXJ5RWlucmljaHRlbihmYWxzZSkpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IGJyZWFrcG9pbnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fYnJlYWtwb2ludDtcbiAgfVxuICBwcml2YXRlIF9icmVha3BvaW50OiBudW1iZXIgPSBDb25maWdVdGlsLmdldENvbmZpZygpLnNpZGVuYXYuYnJlYWtwb2ludDtcblxuICAvKiogV2lyZCBiZWltIFN0YXJ0IHVuZCBiZWkgamVkZW0gV2VjaHNlbCB6d2lzY2hlbiBtb2JpbGVyIHVuZCBEZXNrdG9wLUFuc2ljaHQgYXVzZ2VnZWJlbiAqL1xuICBAT3V0cHV0KCkgcHVibGljIG1vYmlsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHB1YmxpYyBtb2JpbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGluaXRpYWxpc2llcnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBtZWRpYVF1ZXJ5OiBNZWRpYVF1ZXJ5TGlzdDtcbiAgcHJpdmF0ZSBzaWRlbmF2U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcmVhZG9ubHkgbWVkaWFRdWVyeUxpc3RlbmVyID0gKGV2ZW50OiBNZWRpYVF1ZXJ5TGlzdEV2ZW50KTogdm9pZCA9PiB0aGlzLm1vYmlsU2V0emVuKGV2ZW50Lm1hdGNoZXMsIGZhbHNlKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRpYWxpc2llcnQgPSB0cnVlO1xuICAgIHRoaXMuc2lkZW5hdlN1YnNjcmlwdGlvbiA9IHRoaXMuc2lkZW5hdj8uenVzdGFuZEdlYWVuZGVydC5zdWJzY3JpYmUoKCkgPT4gdGhpcy56dXN0YW5kQW53ZW5kZW4oKSk7XG4gICAgdGhpcy5tZWRpYVF1ZXJ5RWlucmljaHRlbih0cnVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubWVkaWFRdWVyeUVudGZlcm5lbigpO1xuICAgIHRoaXMuc2lkZW5hdlN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgbWVkaWFRdWVyeUVpbnJpY2h0ZW4oaW5pdGlhbDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubWVkaWFRdWVyeUVudGZlcm5lbigpO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhd2luZG93Lm1hdGNoTWVkaWEpIHtcbiAgICAgIHRoaXMuenVzdGFuZEFud2VuZGVuKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIC0wLjAycHggd2llIGJlaSBUYWlsd2luZC9Cb290c3RyYXAsIGRhbWl0IHNpY2ggbW9iaWwgdW5kIERlc2t0b3AgZ2VuYXUgYW0gQnJlYWtwb2ludCBuaWNodCB1ZWJlcnNjaG5laWRlblxuICAgIHRoaXMubWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKGAobWF4LXdpZHRoOiAke3RoaXMuX2JyZWFrcG9pbnQgLSAwLjAyfXB4KWApO1xuICAgIHRoaXMubWVkaWFRdWVyeS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm1lZGlhUXVlcnlMaXN0ZW5lcik7XG4gICAgdGhpcy5tb2JpbFNldHplbih0aGlzLm1lZGlhUXVlcnkubWF0Y2hlcywgaW5pdGlhbCk7XG4gIH1cblxuICBwcml2YXRlIG1lZGlhUXVlcnlFbnRmZXJuZW4oKTogdm9pZCB7XG4gICAgdGhpcy5tZWRpYVF1ZXJ5Py5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm1lZGlhUXVlcnlMaXN0ZW5lcik7XG4gICAgdGhpcy5tZWRpYVF1ZXJ5ID0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgbW9iaWxTZXR6ZW4obW9iaWw6IGJvb2xlYW4sIGluaXRpYWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIWluaXRpYWwgJiYgbW9iaWwgPT09IHRoaXMubW9iaWxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHdhck1vYmlsID0gdGhpcy5tb2JpbGU7XG4gICAgdGhpcy5tb2JpbGUgPSBtb2JpbDtcbiAgICBpZiAoIWluaXRpYWwgJiYgd2FyTW9iaWwgJiYgIW1vYmlsICYmIHRoaXMuc2lkZW5hdj8uYXV0b09wZW4pIHtcbiAgICAgIHRoaXMuc2lkZW5hdi5vcGVuKCk7XG4gICAgfVxuICAgIHRoaXMuenVzdGFuZEFud2VuZGVuKCk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgaWYgKGluaXRpYWwpIHtcbiAgICAgIC8vIE5pY2h0IHN5bmNocm9uIHdhZWhyZW5kIGRlciBDaGFuZ2UgRGV0ZWN0aW9uIGRlcyBBdWZydWZlcnMgYXVzZ2ViZW5cbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5tb2JpbGVDaGFuZ2UuZW1pdCh0aGlzLm1vYmlsZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vYmlsZUNoYW5nZS5lbWl0KHRoaXMubW9iaWxlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHp1c3RhbmRBbndlbmRlbigpOiB2b2lkIHtcbiAgICB0aGlzLnNpZGVuYXY/Lm1vYmlsU2V0emVuKHRoaXMubW9iaWxlKTtcbiAgICB0aGlzLmNvbnRlbnQ/LnZlcmJvcmdlblNldHplbih0aGlzLm1vYmlsZSAmJiAhIXRoaXMuc2lkZW5hdj8ub3BlbmVkKTtcbiAgfVxufVxuIiwiPG5nLWNvbnRlbnQgc2VsZWN0PVwibXJkLXNpZGVuYXZcIj48L25nLWNvbnRlbnQ+XG48bmctY29udGVudCBzZWxlY3Q9XCJtcmQtc2lkZW5hdi1jb250ZW50XCI+PC9uZy1jb250ZW50PlxuIl19