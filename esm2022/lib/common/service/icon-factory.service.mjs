import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
const DIRECTION_DEGREES = {
    right: 0,
    down: 90,
    left: 180,
    up: 270,
};
export class IconFactoryService {
    static INNER_SCALE = 0.65;
    static build(config) {
        debugger;
        const resolvedOuterColor = config.outerColor ?? config.color;
        const resolvedInnerColor = config.innerColor ?? config.color;
        const parts = [];
        if (config.outer) {
            let content = IconFactoryService.extractSvgContent(config.outer);
            if (resolvedOuterColor)
                content = IconFactoryService.applyFillColor(content, resolvedOuterColor);
            parts.push(`<g>${content}</g>`);
        }
        if (config.inner) {
            let content = IconFactoryService.extractSvgContent(config.inner);
            if (resolvedInnerColor)
                content = IconFactoryService.applyFillColor(content, resolvedInnerColor);
            const deg = IconFactoryService.resolveDirection(config.innerDirection);
            const rotation = deg !== 0 ? ` rotate(${deg}, 32, 32)` : '';
            // if (config.outer && (config.scaleInner ?? true)) {
            //   const s = config.innerScale ?? IconFactoryService.INNER_SCALE;
            //   const o = IconFactoryService.innerOffset(64, s);
            //   parts.push(`<g transform="translate(${o}, ${o}) scale(${s})${rotation}">${content}</g>`);
            // } else {
            parts.push(rotation ? `<g transform="${rotation.trim()}">${content}</g>` : `<g>${content}</g>`);
            // }
        }
        const s = config.size ?? 64;
        return `<svg width="${s}" height="${s}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n${parts.join('\n')}\n</svg>`;
    }
    static innerOffset(size, scale) {
        // (64 * (1 - 0.6)) / 2 = 12.8 — centers the scaled inner icon within the 64x64 canvas
        return (size * (1 - scale)) / 2;
    }
    static resolveDirection(direction) {
        if (direction == null)
            return 0;
        return (typeof direction === 'number' ? direction : DIRECTION_DEGREES[direction]) ?? 0;
    }
    static extractSvgContent(svg) {
        return svg.replace(/<svg[^>]*>/, '').replace(/<\/svg>/, '').trim();
    }
    static applyFillColor(svgContent, color) {
        return svgContent.replace(/fill="(?!none)[^"]*"/g, `fill="${color}"`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL2NvbW1vbi9zZXJ2aWNlL2ljb24tZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSTNDLE1BQU0saUJBQWlCLEdBQWtDO0lBQ3ZELEtBQUssRUFBRSxDQUFDO0lBQ1IsSUFBSSxFQUFFLEVBQUU7SUFDUixJQUFJLEVBQUUsR0FBRztJQUNULEVBQUUsRUFBRSxHQUFHO0NBQ1IsQ0FBQztBQWlCRixNQUFNLE9BQU8sa0JBQWtCO0lBRXJCLE1BQU0sQ0FBVSxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBRXBDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBdUI7UUFBVyxRQUFRLENBQUE7UUFDNUQsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDN0QsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFFN0QsTUFBTSxLQUFLLEdBQWEsRUFBRSxDQUFDO1FBRTNCLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNoQixJQUFJLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakUsSUFBSSxrQkFBa0I7Z0JBQUUsT0FBTyxHQUFHLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUNqRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sT0FBTyxNQUFNLENBQUMsQ0FBQztTQUNqQztRQUVELElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNoQixJQUFJLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakUsSUFBSSxrQkFBa0I7Z0JBQUUsT0FBTyxHQUFHLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUVqRyxNQUFNLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdkUsTUFBTSxRQUFRLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBRTVELHFEQUFxRDtZQUNyRCxtRUFBbUU7WUFDbkUscURBQXFEO1lBQ3JELDhGQUE4RjtZQUM5RixXQUFXO1lBQ1QsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sT0FBTyxNQUFNLENBQUMsQ0FBQztZQUNsRyxJQUFJO1NBQ0w7UUFFRCxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM1QixPQUFPLGVBQWUsQ0FBQyxhQUFhLENBQUMsMEVBQTBFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUM1SSxDQUFDO0lBRU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFZLEVBQUUsS0FBYTtRQUNwRCxzRkFBc0Y7UUFDdEYsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU8sTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQTZDO1FBQzNFLElBQUksU0FBUyxJQUFJLElBQUk7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsT0FBTyxTQUFTLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFTyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBVztRQUMxQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckUsQ0FBQztJQUVPLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBa0IsRUFBRSxLQUFhO1FBQzdELE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxTQUFTLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDeEUsQ0FBQzsrRkFwRFUsa0JBQWtCOytGQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCLG1CQUZqQixNQUFNOzt1RkFFUCxrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBJY29uRGlyZWN0aW9uID0gJ3JpZ2h0JyB8ICdkb3duJyB8ICdsZWZ0JyB8ICd1cCc7XG5cbmNvbnN0IERJUkVDVElPTl9ERUdSRUVTOiBSZWNvcmQ8SWNvbkRpcmVjdGlvbiwgbnVtYmVyPiA9IHtcbiAgcmlnaHQ6IDAsXG4gIGRvd246IDkwLFxuICBsZWZ0OiAxODAsXG4gIHVwOiAyNzAsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEljb25CdWlsZENvbmZpZyB7XG4gIG91dGVyPzogc3RyaW5nO1xuICBpbm5lcj86IHN0cmluZztcbiAgY29sb3I/OiBzdHJpbmc7XG4gIG91dGVyQ29sb3I/OiBzdHJpbmc7XG4gIGlubmVyQ29sb3I/OiBzdHJpbmc7XG4gIHNpemU/OiBudW1iZXI7XG4gIGlubmVyRGlyZWN0aW9uPzogSWNvbkRpcmVjdGlvbiB8IG51bWJlcjtcbiAgc2NhbGVJbm5lcj86IGJvb2xlYW47XG4gIGlubmVyU2NhbGU/OiBudW1iZXI7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEljb25GYWN0b3J5U2VydmljZSB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgSU5ORVJfU0NBTEUgPSAwLjY1O1xuXG4gIHB1YmxpYyBzdGF0aWMgYnVpbGQoY29uZmlnOiBJY29uQnVpbGRDb25maWcpOiBzdHJpbmcge2RlYnVnZ2VyXG4gICAgY29uc3QgcmVzb2x2ZWRPdXRlckNvbG9yID0gY29uZmlnLm91dGVyQ29sb3IgPz8gY29uZmlnLmNvbG9yO1xuICAgIGNvbnN0IHJlc29sdmVkSW5uZXJDb2xvciA9IGNvbmZpZy5pbm5lckNvbG9yID8/IGNvbmZpZy5jb2xvcjtcblxuICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgaWYgKGNvbmZpZy5vdXRlcikge1xuICAgICAgbGV0IGNvbnRlbnQgPSBJY29uRmFjdG9yeVNlcnZpY2UuZXh0cmFjdFN2Z0NvbnRlbnQoY29uZmlnLm91dGVyKTtcbiAgICAgIGlmIChyZXNvbHZlZE91dGVyQ29sb3IpIGNvbnRlbnQgPSBJY29uRmFjdG9yeVNlcnZpY2UuYXBwbHlGaWxsQ29sb3IoY29udGVudCwgcmVzb2x2ZWRPdXRlckNvbG9yKTtcbiAgICAgIHBhcnRzLnB1c2goYDxnPiR7Y29udGVudH08L2c+YCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5pbm5lcikge1xuICAgICAgbGV0IGNvbnRlbnQgPSBJY29uRmFjdG9yeVNlcnZpY2UuZXh0cmFjdFN2Z0NvbnRlbnQoY29uZmlnLmlubmVyKTtcbiAgICAgIGlmIChyZXNvbHZlZElubmVyQ29sb3IpIGNvbnRlbnQgPSBJY29uRmFjdG9yeVNlcnZpY2UuYXBwbHlGaWxsQ29sb3IoY29udGVudCwgcmVzb2x2ZWRJbm5lckNvbG9yKTtcblxuICAgICAgY29uc3QgZGVnID0gSWNvbkZhY3RvcnlTZXJ2aWNlLnJlc29sdmVEaXJlY3Rpb24oY29uZmlnLmlubmVyRGlyZWN0aW9uKTtcbiAgICAgIGNvbnN0IHJvdGF0aW9uID0gZGVnICE9PSAwID8gYCByb3RhdGUoJHtkZWd9LCAzMiwgMzIpYCA6ICcnO1xuXG4gICAgICAvLyBpZiAoY29uZmlnLm91dGVyICYmIChjb25maWcuc2NhbGVJbm5lciA/PyB0cnVlKSkge1xuICAgICAgLy8gICBjb25zdCBzID0gY29uZmlnLmlubmVyU2NhbGUgPz8gSWNvbkZhY3RvcnlTZXJ2aWNlLklOTkVSX1NDQUxFO1xuICAgICAgLy8gICBjb25zdCBvID0gSWNvbkZhY3RvcnlTZXJ2aWNlLmlubmVyT2Zmc2V0KDY0LCBzKTtcbiAgICAgIC8vICAgcGFydHMucHVzaChgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKCR7b30sICR7b30pIHNjYWxlKCR7c30pJHtyb3RhdGlvbn1cIj4ke2NvbnRlbnR9PC9nPmApO1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgcGFydHMucHVzaChyb3RhdGlvbiA/IGA8ZyB0cmFuc2Zvcm09XCIke3JvdGF0aW9uLnRyaW0oKX1cIj4ke2NvbnRlbnR9PC9nPmAgOiBgPGc+JHtjb250ZW50fTwvZz5gKTtcbiAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBjb25zdCBzID0gY29uZmlnLnNpemUgPz8gNjQ7XG4gICAgcmV0dXJuIGA8c3ZnIHdpZHRoPVwiJHtzfVwiIGhlaWdodD1cIiR7c31cIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XFxuJHtwYXJ0cy5qb2luKCdcXG4nKX1cXG48L3N2Zz5gO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgaW5uZXJPZmZzZXQoc2l6ZTogbnVtYmVyLCBzY2FsZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAvLyAoNjQgKiAoMSAtIDAuNikpIC8gMiA9IDEyLjgg4oCUIGNlbnRlcnMgdGhlIHNjYWxlZCBpbm5lciBpY29uIHdpdGhpbiB0aGUgNjR4NjQgY2FudmFzXG4gICAgcmV0dXJuIChzaXplICogKDEgLSBzY2FsZSkpIC8gMjtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHJlc29sdmVEaXJlY3Rpb24oZGlyZWN0aW9uOiBJY29uRGlyZWN0aW9uIHwgbnVtYmVyIHwgdW5kZWZpbmVkKTogbnVtYmVyIHtcbiAgICBpZiAoZGlyZWN0aW9uID09IG51bGwpIHJldHVybiAwO1xuICAgIHJldHVybiAodHlwZW9mIGRpcmVjdGlvbiA9PT0gJ251bWJlcicgPyBkaXJlY3Rpb24gOiBESVJFQ1RJT05fREVHUkVFU1tkaXJlY3Rpb25dKSA/PyAwO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZXh0cmFjdFN2Z0NvbnRlbnQoc3ZnOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdmcucmVwbGFjZSgvPHN2Z1tePl0qPi8sICcnKS5yZXBsYWNlKC88XFwvc3ZnPi8sICcnKS50cmltKCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBhcHBseUZpbGxDb2xvcihzdmdDb250ZW50OiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdmdDb250ZW50LnJlcGxhY2UoL2ZpbGw9XCIoPyFub25lKVteXCJdKlwiL2csIGBmaWxsPVwiJHtjb2xvcn1cImApO1xuICB9XG59XG4iXX0=