import { Util } from "mrd-core";
import { ColorUtil } from "../../common/util/color.util";
export function colorAttribute(value, fallbackValue) {
    if (!Util.isDefined(value)) {
        return fallbackValue || null;
    }
    if (ColorUtil.isRgbColor(value)) {
        return ColorUtil.rgbStringToHex(value);
    }
    else if (ColorUtil.isRgbaColor(value)) {
        return ColorUtil.rgbaStringToHex(value);
    }
    else if (ColorUtil.isHexColor(value)) {
        return value;
    }
    else {
        console.error('Farben können nur Hex-, RGB- oder RGBA-Werte sein. (Wert: ' + value + ')');
        return fallbackValue || null;
    }
}
export function colorThemeAttribute(value, fallbackValue) {
    if (!Util.isDefined(value)) {
        return fallbackValue || null;
    }
    if (ColorUtil.isRgbColor(value)) {
        return ColorUtil.rgbStringToHex(value);
    }
    else if (ColorUtil.isRgbaColor(value)) {
        return ColorUtil.rgbaStringToHex(value);
    }
    else if (ColorUtil.isHexColor(value)) {
        return value;
    }
    else if (['primary', 'accent', 'warn'].includes(value)) {
        this.primary = value === 'primary';
        this.accent = value === 'accent';
        this.warn = value === 'warn';
    }
    else {
        console.error('Farben können nur Hex-, RGB- , RGBA-Werte oder "primary", "accent" oder "warn" sein. (Wert: ' + value + ')');
        return fallbackValue || null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItdHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUtdWkvc3JjL2xpYi9jb21tb24vdHJhbnNmb3Jtcy9jb2xvci10cmFuc2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNoQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFekQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxLQUFhLEVBQUUsYUFBc0I7SUFDbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTyxhQUFhLElBQUksSUFBSSxDQUFDO0tBQzlCO0lBQ0QsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQy9CLE9BQU8sU0FBUyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4QztTQUFNLElBQUksU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN2QyxPQUFPLFNBQVMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDekM7U0FBTSxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdEMsT0FBTyxLQUFLLENBQUM7S0FDZDtTQUFNO1FBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyw0REFBNEQsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDMUYsT0FBTyxhQUFhLElBQUksSUFBSSxDQUFDO0tBQzlCO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxLQUFhLEVBQUUsYUFBc0I7SUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTyxhQUFhLElBQUksSUFBSSxDQUFDO0tBQzlCO0lBQ0QsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQy9CLE9BQU8sU0FBUyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4QztTQUFNLElBQUksU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN2QyxPQUFPLFNBQVMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDekM7U0FBTSxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdEMsT0FBTyxLQUFLLENBQUM7S0FDZDtTQUFNLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssS0FBSyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEtBQUssUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxLQUFLLE1BQU0sQ0FBQztLQUM5QjtTQUFNO1FBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyw4RkFBOEYsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDNUgsT0FBTyxhQUFhLElBQUksSUFBSSxDQUFDO0tBQzlCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFV0aWwgfSBmcm9tIFwibXJkLWNvcmVcIjtcclxuaW1wb3J0IHsgQ29sb3JVdGlsIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsL2NvbG9yLnV0aWxcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xvckF0dHJpYnV0ZSh2YWx1ZTogc3RyaW5nLCBmYWxsYmFja1ZhbHVlPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICBpZiAoIVV0aWwuaXNEZWZpbmVkKHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIGZhbGxiYWNrVmFsdWUgfHwgbnVsbDtcclxuICB9XHJcbiAgaWYgKENvbG9yVXRpbC5pc1JnYkNvbG9yKHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIENvbG9yVXRpbC5yZ2JTdHJpbmdUb0hleCh2YWx1ZSk7XHJcbiAgfSBlbHNlIGlmIChDb2xvclV0aWwuaXNSZ2JhQ29sb3IodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gQ29sb3JVdGlsLnJnYmFTdHJpbmdUb0hleCh2YWx1ZSk7XHJcbiAgfSBlbHNlIGlmIChDb2xvclV0aWwuaXNIZXhDb2xvcih2YWx1ZSkpIHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcignRmFyYmVuIGvDtm5uZW4gbnVyIEhleC0sIFJHQi0gb2RlciBSR0JBLVdlcnRlIHNlaW4uIChXZXJ0OiAnICsgdmFsdWUgKyAnKScpO1xyXG4gICAgcmV0dXJuIGZhbGxiYWNrVmFsdWUgfHwgbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xvclRoZW1lQXR0cmlidXRlKHZhbHVlOiBzdHJpbmcsIGZhbGxiYWNrVmFsdWU/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIGlmICghVXRpbC5pc0RlZmluZWQodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gZmFsbGJhY2tWYWx1ZSB8fCBudWxsO1xyXG4gIH1cclxuICBpZiAoQ29sb3JVdGlsLmlzUmdiQ29sb3IodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gQ29sb3JVdGlsLnJnYlN0cmluZ1RvSGV4KHZhbHVlKTtcclxuICB9IGVsc2UgaWYgKENvbG9yVXRpbC5pc1JnYmFDb2xvcih2YWx1ZSkpIHtcclxuICAgIHJldHVybiBDb2xvclV0aWwucmdiYVN0cmluZ1RvSGV4KHZhbHVlKTtcclxuICB9IGVsc2UgaWYgKENvbG9yVXRpbC5pc0hleENvbG9yKHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH0gZWxzZSBpZiAoWydwcmltYXJ5JywgJ2FjY2VudCcsICd3YXJuJ10uaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICB0aGlzLnByaW1hcnkgPSB2YWx1ZSA9PT0gJ3ByaW1hcnknO1xyXG4gICAgdGhpcy5hY2NlbnQgPSB2YWx1ZSA9PT0gJ2FjY2VudCc7XHJcbiAgICB0aGlzLndhcm4gPSB2YWx1ZSA9PT0gJ3dhcm4nO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdGYXJiZW4ga8O2bm5lbiBudXIgSGV4LSwgUkdCLSAsIFJHQkEtV2VydGUgb2RlciBcInByaW1hcnlcIiwgXCJhY2NlbnRcIiBvZGVyIFwid2FyblwiIHNlaW4uIChXZXJ0OiAnICsgdmFsdWUgKyAnKScpO1xyXG4gICAgcmV0dXJuIGZhbGxiYWNrVmFsdWUgfHwgbnVsbDtcclxuICB9XHJcbn1cclxuIl19