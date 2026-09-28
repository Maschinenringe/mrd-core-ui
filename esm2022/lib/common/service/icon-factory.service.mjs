import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
const DIRECTION_DEGREES = {
    right: 0,
    down: 90,
    left: 180,
    up: 270,
};
/** Baut aus Symbolen im 64x64-Raster (aeusserer Rahmen + inneres Symbol) ein SVG. */
export class IconFactoryService {
    static build(config) {
        const resolvedOuterColor = config.outerColor ?? config.color;
        const resolvedInnerColor = config.innerColor ?? config.color;
        const parts = [];
        if (config.outer) {
            let content = IconFactoryService.extractSvgContent(config.outer);
            if (resolvedOuterColor)
                content = IconFactoryService.applyColor(content, resolvedOuterColor);
            parts.push(`<g>${content}</g>`);
        }
        if (config.inner) {
            let content = IconFactoryService.extractSvgContent(config.inner);
            if (resolvedInnerColor)
                content = IconFactoryService.applyColor(content, resolvedInnerColor);
            const deg = IconFactoryService.resolveDirection(config.innerDirection);
            parts.push(deg !== 0 ? `<g transform="rotate(${deg}, 32, 32)">${content}</g>` : `<g>${content}</g>`);
        }
        const s = config.size ?? 64;
        return `<svg width="${s}" height="${s}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n${parts.join('\n')}\n</svg>`;
    }
    static resolveDirection(direction) {
        if (direction == null)
            return 0;
        return (typeof direction === 'number' ? direction : DIRECTION_DEGREES[direction]) ?? 0;
    }
    static extractSvgContent(svg) {
        return svg.replace(/<svg[^>]*>/, '').replace(/<\/svg>/, '').trim();
    }
    /** Ersetzt vorhandene fill- und stroke-Farben; `none` bleibt erhalten, damit Aussparungen nicht gefuellt werden. */
    static applyColor(svgContent, color) {
        return svgContent
            .replace(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
            .replace(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`);
    }
    /** @nocollapse */ static ɵfac = function IconFactoryService_Factory(t) { return new (t || IconFactoryService)(); };
    /** @nocollapse */ static ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: IconFactoryService, factory: IconFactoryService.ɵfac, providedIn: 'root' });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconFactoryService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL2NvbW1vbi9zZXJ2aWNlL2ljb24tZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSTNDLE1BQU0saUJBQWlCLEdBQWtDO0lBQ3ZELEtBQUssRUFBRSxDQUFDO0lBQ1IsSUFBSSxFQUFFLEVBQUU7SUFDUixJQUFJLEVBQUUsR0FBRztJQUNULEVBQUUsRUFBRSxHQUFHO0NBQ1IsQ0FBQztBQVlGLHFGQUFxRjtBQUlyRixNQUFNLE9BQU8sa0JBQWtCO0lBRXRCLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBdUI7UUFDekMsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDN0QsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFFN0QsTUFBTSxLQUFLLEdBQWEsRUFBRSxDQUFDO1FBRTNCLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNoQixJQUFJLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakUsSUFBSSxrQkFBa0I7Z0JBQUUsT0FBTyxHQUFHLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUM3RixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sT0FBTyxNQUFNLENBQUMsQ0FBQztTQUNqQztRQUVELElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNoQixJQUFJLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakUsSUFBSSxrQkFBa0I7Z0JBQUUsT0FBTyxHQUFHLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUU3RixNQUFNLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdkUsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsR0FBRyxjQUFjLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLE9BQU8sTUFBTSxDQUFDLENBQUM7U0FDdEc7UUFFRCxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM1QixPQUFPLGVBQWUsQ0FBQyxhQUFhLENBQUMsMEVBQTBFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUM1SSxDQUFDO0lBRU8sTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQTZDO1FBQzNFLElBQUksU0FBUyxJQUFJLElBQUk7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsT0FBTyxTQUFTLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFTyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBVztRQUMxQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckUsQ0FBQztJQUVELG9IQUFvSDtJQUM1RyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQWtCLEVBQUUsS0FBYTtRQUN6RCxPQUFPLFVBQVU7YUFDZCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsU0FBUyxLQUFLLEdBQUcsQ0FBQzthQUNuRCxPQUFPLENBQUMseUJBQXlCLEVBQUUsV0FBVyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQzdELENBQUM7K0ZBeENVLGtCQUFrQjsrRkFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQixtQkFGakIsTUFBTTs7dUZBRVAsa0JBQWtCO2NBSDlCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgSWNvbkRpcmVjdGlvbiA9ICdyaWdodCcgfCAnZG93bicgfCAnbGVmdCcgfCAndXAnO1xuXG5jb25zdCBESVJFQ1RJT05fREVHUkVFUzogUmVjb3JkPEljb25EaXJlY3Rpb24sIG51bWJlcj4gPSB7XG4gIHJpZ2h0OiAwLFxuICBkb3duOiA5MCxcbiAgbGVmdDogMTgwLFxuICB1cDogMjcwLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJY29uQnVpbGRDb25maWcge1xuICBvdXRlcj86IHN0cmluZztcbiAgaW5uZXI/OiBzdHJpbmc7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBvdXRlckNvbG9yPzogc3RyaW5nO1xuICBpbm5lckNvbG9yPzogc3RyaW5nO1xuICBzaXplPzogbnVtYmVyIHwgc3RyaW5nO1xuICBpbm5lckRpcmVjdGlvbj86IEljb25EaXJlY3Rpb24gfCBudW1iZXI7XG59XG5cbi8qKiBCYXV0IGF1cyBTeW1ib2xlbiBpbSA2NHg2NC1SYXN0ZXIgKGFldXNzZXJlciBSYWhtZW4gKyBpbm5lcmVzIFN5bWJvbCkgZWluIFNWRy4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEljb25GYWN0b3J5U2VydmljZSB7XG5cbiAgcHVibGljIHN0YXRpYyBidWlsZChjb25maWc6IEljb25CdWlsZENvbmZpZyk6IHN0cmluZyB7XG4gICAgY29uc3QgcmVzb2x2ZWRPdXRlckNvbG9yID0gY29uZmlnLm91dGVyQ29sb3IgPz8gY29uZmlnLmNvbG9yO1xuICAgIGNvbnN0IHJlc29sdmVkSW5uZXJDb2xvciA9IGNvbmZpZy5pbm5lckNvbG9yID8/IGNvbmZpZy5jb2xvcjtcblxuICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgaWYgKGNvbmZpZy5vdXRlcikge1xuICAgICAgbGV0IGNvbnRlbnQgPSBJY29uRmFjdG9yeVNlcnZpY2UuZXh0cmFjdFN2Z0NvbnRlbnQoY29uZmlnLm91dGVyKTtcbiAgICAgIGlmIChyZXNvbHZlZE91dGVyQ29sb3IpIGNvbnRlbnQgPSBJY29uRmFjdG9yeVNlcnZpY2UuYXBwbHlDb2xvcihjb250ZW50LCByZXNvbHZlZE91dGVyQ29sb3IpO1xuICAgICAgcGFydHMucHVzaChgPGc+JHtjb250ZW50fTwvZz5gKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmlubmVyKSB7XG4gICAgICBsZXQgY29udGVudCA9IEljb25GYWN0b3J5U2VydmljZS5leHRyYWN0U3ZnQ29udGVudChjb25maWcuaW5uZXIpO1xuICAgICAgaWYgKHJlc29sdmVkSW5uZXJDb2xvcikgY29udGVudCA9IEljb25GYWN0b3J5U2VydmljZS5hcHBseUNvbG9yKGNvbnRlbnQsIHJlc29sdmVkSW5uZXJDb2xvcik7XG5cbiAgICAgIGNvbnN0IGRlZyA9IEljb25GYWN0b3J5U2VydmljZS5yZXNvbHZlRGlyZWN0aW9uKGNvbmZpZy5pbm5lckRpcmVjdGlvbik7XG4gICAgICBwYXJ0cy5wdXNoKGRlZyAhPT0gMCA/IGA8ZyB0cmFuc2Zvcm09XCJyb3RhdGUoJHtkZWd9LCAzMiwgMzIpXCI+JHtjb250ZW50fTwvZz5gIDogYDxnPiR7Y29udGVudH08L2c+YCk7XG4gICAgfVxuXG4gICAgY29uc3QgcyA9IGNvbmZpZy5zaXplID8/IDY0O1xuICAgIHJldHVybiBgPHN2ZyB3aWR0aD1cIiR7c31cIiBoZWlnaHQ9XCIke3N9XCIgdmlld0JveD1cIjAgMCA2NCA2NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxcbiR7cGFydHMuam9pbignXFxuJyl9XFxuPC9zdmc+YDtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHJlc29sdmVEaXJlY3Rpb24oZGlyZWN0aW9uOiBJY29uRGlyZWN0aW9uIHwgbnVtYmVyIHwgdW5kZWZpbmVkKTogbnVtYmVyIHtcbiAgICBpZiAoZGlyZWN0aW9uID09IG51bGwpIHJldHVybiAwO1xuICAgIHJldHVybiAodHlwZW9mIGRpcmVjdGlvbiA9PT0gJ251bWJlcicgPyBkaXJlY3Rpb24gOiBESVJFQ1RJT05fREVHUkVFU1tkaXJlY3Rpb25dKSA/PyAwO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZXh0cmFjdFN2Z0NvbnRlbnQoc3ZnOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdmcucmVwbGFjZSgvPHN2Z1tePl0qPi8sICcnKS5yZXBsYWNlKC88XFwvc3ZnPi8sICcnKS50cmltKCk7XG4gIH1cblxuICAvKiogRXJzZXR6dCB2b3JoYW5kZW5lIGZpbGwtIHVuZCBzdHJva2UtRmFyYmVuOyBgbm9uZWAgYmxlaWJ0IGVyaGFsdGVuLCBkYW1pdCBBdXNzcGFydW5nZW4gbmljaHQgZ2VmdWVsbHQgd2VyZGVuLiAqL1xuICBwcml2YXRlIHN0YXRpYyBhcHBseUNvbG9yKHN2Z0NvbnRlbnQ6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHN2Z0NvbnRlbnRcbiAgICAgIC5yZXBsYWNlKC9maWxsPVwiKD8hbm9uZSlbXlwiXSpcIi9nLCBgZmlsbD1cIiR7Y29sb3J9XCJgKVxuICAgICAgLnJlcGxhY2UoL3N0cm9rZT1cIig/IW5vbmUpW15cIl0qXCIvZywgYHN0cm9rZT1cIiR7Y29sb3J9XCJgKTtcbiAgfVxufVxuIl19