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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL2NvbW1vbi9zZXJ2aWNlL2ljb24tZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSTNDLE1BQU0saUJBQWlCLEdBQWtDO0lBQ3ZELEtBQUssRUFBRSxDQUFDO0lBQ1IsSUFBSSxFQUFFLEVBQUU7SUFDUixJQUFJLEVBQUUsR0FBRztJQUNULEVBQUUsRUFBRSxHQUFHO0NBQ1IsQ0FBQztBQWlCRixNQUFNLE9BQU8sa0JBQWtCO0lBRXJCLE1BQU0sQ0FBVSxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBRXBDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBdUI7UUFDekMsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDN0QsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFFN0QsTUFBTSxLQUFLLEdBQWEsRUFBRSxDQUFDO1FBRTNCLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNoQixJQUFJLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakUsSUFBSSxrQkFBa0I7Z0JBQUUsT0FBTyxHQUFHLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUNqRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sT0FBTyxNQUFNLENBQUMsQ0FBQztTQUNqQztRQUVELElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNoQixJQUFJLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakUsSUFBSSxrQkFBa0I7Z0JBQUUsT0FBTyxHQUFHLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUVqRyxNQUFNLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdkUsTUFBTSxRQUFRLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBRTVELHFEQUFxRDtZQUNyRCxtRUFBbUU7WUFDbkUscURBQXFEO1lBQ3JELDhGQUE4RjtZQUM5RixXQUFXO1lBQ1QsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sT0FBTyxNQUFNLENBQUMsQ0FBQztZQUNsRyxJQUFJO1NBQ0w7UUFFRCxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM1QixPQUFPLGVBQWUsQ0FBQyxhQUFhLENBQUMsMEVBQTBFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUM1SSxDQUFDO0lBRU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFZLEVBQUUsS0FBYTtRQUNwRCxzRkFBc0Y7UUFDdEYsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU8sTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQTZDO1FBQzNFLElBQUksU0FBUyxJQUFJLElBQUk7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsT0FBTyxTQUFTLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFTyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBVztRQUMxQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckUsQ0FBQztJQUVPLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBa0IsRUFBRSxLQUFhO1FBQzdELE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxTQUFTLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDeEUsQ0FBQzsrRkFwRFUsa0JBQWtCOytGQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCLG1CQUZqQixNQUFNOzt1RkFFUCxrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBJY29uRGlyZWN0aW9uID0gJ3JpZ2h0JyB8ICdkb3duJyB8ICdsZWZ0JyB8ICd1cCc7XG5cbmNvbnN0IERJUkVDVElPTl9ERUdSRUVTOiBSZWNvcmQ8SWNvbkRpcmVjdGlvbiwgbnVtYmVyPiA9IHtcbiAgcmlnaHQ6IDAsXG4gIGRvd246IDkwLFxuICBsZWZ0OiAxODAsXG4gIHVwOiAyNzAsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEljb25CdWlsZENvbmZpZyB7XG4gIG91dGVyPzogc3RyaW5nO1xuICBpbm5lcj86IHN0cmluZztcbiAgY29sb3I/OiBzdHJpbmc7XG4gIG91dGVyQ29sb3I/OiBzdHJpbmc7XG4gIGlubmVyQ29sb3I/OiBzdHJpbmc7XG4gIHNpemU/OiBudW1iZXI7XG4gIGlubmVyRGlyZWN0aW9uPzogSWNvbkRpcmVjdGlvbiB8IG51bWJlcjtcbiAgc2NhbGVJbm5lcj86IGJvb2xlYW47XG4gIGlubmVyU2NhbGU/OiBudW1iZXI7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEljb25GYWN0b3J5U2VydmljZSB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgSU5ORVJfU0NBTEUgPSAwLjY1O1xuXG4gIHB1YmxpYyBzdGF0aWMgYnVpbGQoY29uZmlnOiBJY29uQnVpbGRDb25maWcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJlc29sdmVkT3V0ZXJDb2xvciA9IGNvbmZpZy5vdXRlckNvbG9yID8/IGNvbmZpZy5jb2xvcjtcbiAgICBjb25zdCByZXNvbHZlZElubmVyQ29sb3IgPSBjb25maWcuaW5uZXJDb2xvciA/PyBjb25maWcuY29sb3I7XG5cbiAgICBjb25zdCBwYXJ0czogc3RyaW5nW10gPSBbXTtcblxuICAgIGlmIChjb25maWcub3V0ZXIpIHtcbiAgICAgIGxldCBjb250ZW50ID0gSWNvbkZhY3RvcnlTZXJ2aWNlLmV4dHJhY3RTdmdDb250ZW50KGNvbmZpZy5vdXRlcik7XG4gICAgICBpZiAocmVzb2x2ZWRPdXRlckNvbG9yKSBjb250ZW50ID0gSWNvbkZhY3RvcnlTZXJ2aWNlLmFwcGx5RmlsbENvbG9yKGNvbnRlbnQsIHJlc29sdmVkT3V0ZXJDb2xvcik7XG4gICAgICBwYXJ0cy5wdXNoKGA8Zz4ke2NvbnRlbnR9PC9nPmApO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuaW5uZXIpIHtcbiAgICAgIGxldCBjb250ZW50ID0gSWNvbkZhY3RvcnlTZXJ2aWNlLmV4dHJhY3RTdmdDb250ZW50KGNvbmZpZy5pbm5lcik7XG4gICAgICBpZiAocmVzb2x2ZWRJbm5lckNvbG9yKSBjb250ZW50ID0gSWNvbkZhY3RvcnlTZXJ2aWNlLmFwcGx5RmlsbENvbG9yKGNvbnRlbnQsIHJlc29sdmVkSW5uZXJDb2xvcik7XG5cbiAgICAgIGNvbnN0IGRlZyA9IEljb25GYWN0b3J5U2VydmljZS5yZXNvbHZlRGlyZWN0aW9uKGNvbmZpZy5pbm5lckRpcmVjdGlvbik7XG4gICAgICBjb25zdCByb3RhdGlvbiA9IGRlZyAhPT0gMCA/IGAgcm90YXRlKCR7ZGVnfSwgMzIsIDMyKWAgOiAnJztcblxuICAgICAgLy8gaWYgKGNvbmZpZy5vdXRlciAmJiAoY29uZmlnLnNjYWxlSW5uZXIgPz8gdHJ1ZSkpIHtcbiAgICAgIC8vICAgY29uc3QgcyA9IGNvbmZpZy5pbm5lclNjYWxlID8/IEljb25GYWN0b3J5U2VydmljZS5JTk5FUl9TQ0FMRTtcbiAgICAgIC8vICAgY29uc3QgbyA9IEljb25GYWN0b3J5U2VydmljZS5pbm5lck9mZnNldCg2NCwgcyk7XG4gICAgICAvLyAgIHBhcnRzLnB1c2goYDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke299LCAke299KSBzY2FsZSgke3N9KSR7cm90YXRpb259XCI+JHtjb250ZW50fTwvZz5gKTtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIHBhcnRzLnB1c2gocm90YXRpb24gPyBgPGcgdHJhbnNmb3JtPVwiJHtyb3RhdGlvbi50cmltKCl9XCI+JHtjb250ZW50fTwvZz5gIDogYDxnPiR7Y29udGVudH08L2c+YCk7XG4gICAgICAvLyB9XG4gICAgfVxuXG4gICAgY29uc3QgcyA9IGNvbmZpZy5zaXplID8/IDY0O1xuICAgIHJldHVybiBgPHN2ZyB3aWR0aD1cIiR7c31cIiBoZWlnaHQ9XCIke3N9XCIgdmlld0JveD1cIjAgMCA2NCA2NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxcbiR7cGFydHMuam9pbignXFxuJyl9XFxuPC9zdmc+YDtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGlubmVyT2Zmc2V0KHNpemU6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgLy8gKDY0ICogKDEgLSAwLjYpKSAvIDIgPSAxMi44IOKAlCBjZW50ZXJzIHRoZSBzY2FsZWQgaW5uZXIgaWNvbiB3aXRoaW4gdGhlIDY0eDY0IGNhbnZhc1xuICAgIHJldHVybiAoc2l6ZSAqICgxIC0gc2NhbGUpKSAvIDI7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyByZXNvbHZlRGlyZWN0aW9uKGRpcmVjdGlvbjogSWNvbkRpcmVjdGlvbiB8IG51bWJlciB8IHVuZGVmaW5lZCk6IG51bWJlciB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PSBudWxsKSByZXR1cm4gMDtcbiAgICByZXR1cm4gKHR5cGVvZiBkaXJlY3Rpb24gPT09ICdudW1iZXInID8gZGlyZWN0aW9uIDogRElSRUNUSU9OX0RFR1JFRVNbZGlyZWN0aW9uXSkgPz8gMDtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGV4dHJhY3RTdmdDb250ZW50KHN2Zzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3ZnLnJlcGxhY2UoLzxzdmdbXj5dKj4vLCAnJykucmVwbGFjZSgvPFxcL3N2Zz4vLCAnJykudHJpbSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgYXBwbHlGaWxsQ29sb3Ioc3ZnQ29udGVudDogc3RyaW5nLCBjb2xvcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3ZnQ29udGVudC5yZXBsYWNlKC9maWxsPVwiKD8hbm9uZSlbXlwiXSpcIi9nLCBgZmlsbD1cIiR7Y29sb3J9XCJgKTtcbiAgfVxufVxuIl19