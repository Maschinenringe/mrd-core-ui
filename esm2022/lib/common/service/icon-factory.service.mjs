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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL2NvbW1vbi9zZXJ2aWNlL2ljb24tZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSTNDLE1BQU0saUJBQWlCLEdBQWtDO0lBQ3ZELEtBQUssRUFBRSxDQUFDO0lBQ1IsSUFBSSxFQUFFLEVBQUU7SUFDUixJQUFJLEVBQUUsR0FBRztJQUNULEVBQUUsRUFBRSxHQUFHO0NBQ1IsQ0FBQztBQWlCRixNQUFNLE9BQU8sa0JBQWtCO0lBRXJCLE1BQU0sQ0FBVSxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBRXBDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBdUI7UUFDekMsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDN0QsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFFN0QsTUFBTSxLQUFLLEdBQWEsRUFBRSxDQUFDO1FBRTNCLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNoQixJQUFJLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakUsSUFBSSxrQkFBa0I7Z0JBQUUsT0FBTyxHQUFHLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUNqRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sT0FBTyxNQUFNLENBQUMsQ0FBQztTQUNqQztRQUVELElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNoQixJQUFJLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakUsSUFBSSxrQkFBa0I7Z0JBQUUsT0FBTyxHQUFHLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUVqRyxNQUFNLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdkUsTUFBTSxRQUFRLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBRTVELHFEQUFxRDtZQUNyRCxtRUFBbUU7WUFDbkUscURBQXFEO1lBQ3JELDhGQUE4RjtZQUM5RixXQUFXO1lBQ1QsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sT0FBTyxNQUFNLENBQUMsQ0FBQztZQUNsRyxJQUFJO1NBQ0w7UUFFRCxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM1QixPQUFPLGVBQWUsQ0FBQyxhQUFhLENBQUMsMEVBQTBFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUM1SSxDQUFDO0lBRU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFZLEVBQUUsS0FBYTtRQUNwRCxzRkFBc0Y7UUFDdEYsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU8sTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQTZDO1FBQzNFLElBQUksU0FBUyxJQUFJLElBQUk7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsT0FBTyxTQUFTLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFTyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBVztRQUMxQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckUsQ0FBQztJQUVPLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBa0IsRUFBRSxLQUFhO1FBQzdELE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxTQUFTLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDeEUsQ0FBQzsrRkFwRFUsa0JBQWtCOytGQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCLG1CQUZqQixNQUFNOzt1RkFFUCxrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgSWNvbkRpcmVjdGlvbiA9ICdyaWdodCcgfCAnZG93bicgfCAnbGVmdCcgfCAndXAnO1xyXG5cclxuY29uc3QgRElSRUNUSU9OX0RFR1JFRVM6IFJlY29yZDxJY29uRGlyZWN0aW9uLCBudW1iZXI+ID0ge1xyXG4gIHJpZ2h0OiAwLFxyXG4gIGRvd246IDkwLFxyXG4gIGxlZnQ6IDE4MCxcclxuICB1cDogMjcwLFxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJY29uQnVpbGRDb25maWcge1xyXG4gIG91dGVyPzogc3RyaW5nO1xyXG4gIGlubmVyPzogc3RyaW5nO1xyXG4gIGNvbG9yPzogc3RyaW5nO1xyXG4gIG91dGVyQ29sb3I/OiBzdHJpbmc7XHJcbiAgaW5uZXJDb2xvcj86IHN0cmluZztcclxuICBzaXplPzogbnVtYmVyO1xyXG4gIGlubmVyRGlyZWN0aW9uPzogSWNvbkRpcmVjdGlvbiB8IG51bWJlcjtcclxuICBzY2FsZUlubmVyPzogYm9vbGVhbjtcclxuICBpbm5lclNjYWxlPzogbnVtYmVyO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJY29uRmFjdG9yeVNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBJTk5FUl9TQ0FMRSA9IDAuNjU7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYnVpbGQoY29uZmlnOiBJY29uQnVpbGRDb25maWcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgcmVzb2x2ZWRPdXRlckNvbG9yID0gY29uZmlnLm91dGVyQ29sb3IgPz8gY29uZmlnLmNvbG9yO1xyXG4gICAgY29uc3QgcmVzb2x2ZWRJbm5lckNvbG9yID0gY29uZmlnLmlubmVyQ29sb3IgPz8gY29uZmlnLmNvbG9yO1xyXG5cclxuICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIGlmIChjb25maWcub3V0ZXIpIHtcclxuICAgICAgbGV0IGNvbnRlbnQgPSBJY29uRmFjdG9yeVNlcnZpY2UuZXh0cmFjdFN2Z0NvbnRlbnQoY29uZmlnLm91dGVyKTtcclxuICAgICAgaWYgKHJlc29sdmVkT3V0ZXJDb2xvcikgY29udGVudCA9IEljb25GYWN0b3J5U2VydmljZS5hcHBseUZpbGxDb2xvcihjb250ZW50LCByZXNvbHZlZE91dGVyQ29sb3IpO1xyXG4gICAgICBwYXJ0cy5wdXNoKGA8Zz4ke2NvbnRlbnR9PC9nPmApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb25maWcuaW5uZXIpIHtcclxuICAgICAgbGV0IGNvbnRlbnQgPSBJY29uRmFjdG9yeVNlcnZpY2UuZXh0cmFjdFN2Z0NvbnRlbnQoY29uZmlnLmlubmVyKTtcclxuICAgICAgaWYgKHJlc29sdmVkSW5uZXJDb2xvcikgY29udGVudCA9IEljb25GYWN0b3J5U2VydmljZS5hcHBseUZpbGxDb2xvcihjb250ZW50LCByZXNvbHZlZElubmVyQ29sb3IpO1xyXG5cclxuICAgICAgY29uc3QgZGVnID0gSWNvbkZhY3RvcnlTZXJ2aWNlLnJlc29sdmVEaXJlY3Rpb24oY29uZmlnLmlubmVyRGlyZWN0aW9uKTtcclxuICAgICAgY29uc3Qgcm90YXRpb24gPSBkZWcgIT09IDAgPyBgIHJvdGF0ZSgke2RlZ30sIDMyLCAzMilgIDogJyc7XHJcblxyXG4gICAgICAvLyBpZiAoY29uZmlnLm91dGVyICYmIChjb25maWcuc2NhbGVJbm5lciA/PyB0cnVlKSkge1xyXG4gICAgICAvLyAgIGNvbnN0IHMgPSBjb25maWcuaW5uZXJTY2FsZSA/PyBJY29uRmFjdG9yeVNlcnZpY2UuSU5ORVJfU0NBTEU7XHJcbiAgICAgIC8vICAgY29uc3QgbyA9IEljb25GYWN0b3J5U2VydmljZS5pbm5lck9mZnNldCg2NCwgcyk7XHJcbiAgICAgIC8vICAgcGFydHMucHVzaChgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKCR7b30sICR7b30pIHNjYWxlKCR7c30pJHtyb3RhdGlvbn1cIj4ke2NvbnRlbnR9PC9nPmApO1xyXG4gICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIHBhcnRzLnB1c2gocm90YXRpb24gPyBgPGcgdHJhbnNmb3JtPVwiJHtyb3RhdGlvbi50cmltKCl9XCI+JHtjb250ZW50fTwvZz5gIDogYDxnPiR7Y29udGVudH08L2c+YCk7XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzID0gY29uZmlnLnNpemUgPz8gNjQ7XHJcbiAgICByZXR1cm4gYDxzdmcgd2lkdGg9XCIke3N9XCIgaGVpZ2h0PVwiJHtzfVwiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cXG4ke3BhcnRzLmpvaW4oJ1xcbicpfVxcbjwvc3ZnPmA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBpbm5lck9mZnNldChzaXplOiBudW1iZXIsIHNjYWxlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgLy8gKDY0ICogKDEgLSAwLjYpKSAvIDIgPSAxMi44IOKAlCBjZW50ZXJzIHRoZSBzY2FsZWQgaW5uZXIgaWNvbiB3aXRoaW4gdGhlIDY0eDY0IGNhbnZhc1xyXG4gICAgcmV0dXJuIChzaXplICogKDEgLSBzY2FsZSkpIC8gMjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHJlc29sdmVEaXJlY3Rpb24oZGlyZWN0aW9uOiBJY29uRGlyZWN0aW9uIHwgbnVtYmVyIHwgdW5kZWZpbmVkKTogbnVtYmVyIHtcclxuICAgIGlmIChkaXJlY3Rpb24gPT0gbnVsbCkgcmV0dXJuIDA7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBkaXJlY3Rpb24gPT09ICdudW1iZXInID8gZGlyZWN0aW9uIDogRElSRUNUSU9OX0RFR1JFRVNbZGlyZWN0aW9uXSkgPz8gMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGV4dHJhY3RTdmdDb250ZW50KHN2Zzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzdmcucmVwbGFjZSgvPHN2Z1tePl0qPi8sICcnKS5yZXBsYWNlKC88XFwvc3ZnPi8sICcnKS50cmltKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBhcHBseUZpbGxDb2xvcihzdmdDb250ZW50OiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHN2Z0NvbnRlbnQucmVwbGFjZSgvZmlsbD1cIig/IW5vbmUpW15cIl0qXCIvZywgYGZpbGw9XCIke2NvbG9yfVwiYCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==