import * as _ from 'underscore';
export class ConfigUtil {
    static config;
    static customConfig;
    static setConfig(config) {
        this.config = undefined;
        this.customConfig = config;
        this.getConfig();
    }
    static getConfig() {
        if (this.config) {
            return this.config;
        }
        let defaultConfig = this.baseConfig;
        if (this.customConfig) {
            this.extendObject(defaultConfig, this.customConfig);
        }
        this.config = defaultConfig;
        return defaultConfig;
    }
    static extendObject(obj, extObj) {
        for (const [key, value] of Object.entries(extObj)) {
            if (_.isObject(value) && !_.isArray(value)) {
                obj[key] = this.extendObject(obj[key], value);
            }
            else {
                obj[key] = value;
            }
        }
        ;
        return obj;
    }
    static get baseConfig() {
        return {
            baseFont: {
                // size: "16px",
                family: "URW Din,Lato,sans-serif"
            },
            baseColors: {
                primary: "#68b022",
                accent: "#293D4F",
                warn: "#b00122",
                disabled: "#afa6a6"
            },
            formField: {
                borderRadius: "7px",
                borderRadiusRounded: "70px",
                fill: {
                    backgroundColor: "#D8DFE880"
                }
            },
            button: {
                backgroundColor: "transparent",
                textLightColor: "#ffffff",
                textDarkColor: "#000000",
                hoverColor: "#d3d3d361",
                activeColor: "#d3d3d3",
                disabled: {
                    text: "#a6a6a6",
                    background: "transparent"
                },
                border: "0 unset unset",
                borderRadius: "4px",
                minHeight: "36px",
                fontSize: "0.9em",
                iconSize: "1em",
                outline: {
                    border: "1px solid #d3d3d3"
                },
                flat: {
                    backgroundColor: "#ffffff",
                    disabled: {
                        text: "#a6a6a6",
                        background: "#d3d3d3"
                    }
                },
                raised: {
                    backgroundColor: "#ffffff",
                    disabled: {
                        text: "#a6a6a6",
                        background: "#d3d3d3"
                    }
                },
                icon: {
                    borderRadius: "50%",
                    fontSize: "1em",
                    diameter: "3em"
                },
                fab: {
                    backgroundColor: "#ffffff",
                    disabled: {
                        text: "#a6a6a6",
                        background: "#d3d3d3"
                    },
                    borderRadius: "50%",
                    fontSize: "1em",
                    diameter: "4em"
                },
                miniFab: {
                    backgroundColor: "#ffffff",
                    disabled: {
                        text: "#a6a6a6",
                        background: "#d3d3d3"
                    },
                    borderRadius: "50%",
                    fontSize: "1em",
                    diameter: "3em"
                },
                toggle: {
                    backgroundColor: "#ffffff",
                    unselectedBgColor: "#c8cac6",
                }
            },
            geoIcon: {
                width: "40px",
                height: "40px",
                margin: "5px",
                transitionTime: "1s",
                mainColor: "#000000",
                mainSelectedColor: "#ffffff",
                mainOpacity: 0.2,
                mainSelectedOpacity: 1,
                backColor: "#000000",
                backSelectedColor: "#ffffff",
                backOpacity: 0.2,
                backSelectedOpacity: 0.2,
                overlayColor: "#8ebf62",
                overlaySelectedColor: "#ffa500",
                overlayOpacity: 1,
                overlaySelectedOpacity: 1
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBRWhDLE1BQU0sT0FBTyxVQUFVO0lBRWIsTUFBTSxDQUFDLE1BQU0sQ0FBaUI7SUFFOUIsTUFBTSxDQUFDLFlBQVksQ0FBaUI7SUFFckMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFzQjtRQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxTQUFTO1FBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjtRQUVELElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFcEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO1FBQzVCLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQVEsRUFBRSxNQUFXO1FBQy9DLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2pELElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENB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QUFTO2dCQUNwQixpQkFBaUIsRUFBRSxTQUFTO2dCQUM1QixXQUFXLEVBQUUsR0FBRztnQkFDaEIsbUJBQW1CLEVBQUUsR0FBRztnQkFDeEIsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLG9CQUFvQixFQUFFLFNBQVM7Z0JBQy9CLGNBQWMsRUFBRSxDQUFDO2dCQUNqQixzQkFBc0IsRUFBRSxDQUFDO2FBQzFCO1NBQ0YsQ0FBQTtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1yZENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL21vZGVsL2NvbmZpZy5tb2RlbFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ1V0aWwge1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBjb25maWc6IE1yZENvbmZpZ01vZGVsO1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBjdXN0b21Db25maWc6IE1yZENvbmZpZ01vZGVsO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIHNldENvbmZpZyhjb25maWc6IE1yZENvbmZpZ01vZGVsKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuY3VzdG9tQ29uZmlnID0gY29uZmlnO1xyXG4gICAgdGhpcy5nZXRDb25maWcoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0Q29uZmlnKCkge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGVmYXVsdENvbmZpZyA9IHRoaXMuYmFzZUNvbmZpZztcclxuXHJcbiAgICBpZiAodGhpcy5jdXN0b21Db25maWcpIHtcclxuICAgICAgdGhpcy5leHRlbmRPYmplY3QoZGVmYXVsdENvbmZpZywgdGhpcy5jdXN0b21Db25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29uZmlnID0gZGVmYXVsdENvbmZpZztcclxuICAgIHJldHVybiBkZWZhdWx0Q29uZmlnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgZXh0ZW5kT2JqZWN0KG9iajogYW55LCBleHRPYmo6IGFueSk6IGFueSB7XHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhleHRPYmopKSB7XHJcbiAgICAgIGlmIChfLmlzT2JqZWN0KHZhbHVlKSAmJiAhXy5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgIG9ialtrZXldID0gdGhpcy5leHRlbmRPYmplY3Qob2JqW2tleV0sIHZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGdldCBiYXNlQ29uZmlnKCk6IE1yZENvbmZpZ01vZGVsIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJhc2VGb250OiB7XHJcbiAgICAgICAgLy8gc2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgICAgZmFtaWx5OiBcIlVSVyBEaW4sTGF0byxzYW5zLXNlcmlmXCJcclxuICAgICAgfSxcclxuICAgICAgYmFzZUNvbG9yczoge1xyXG4gICAgICAgIHByaW1hcnk6IFwiIzY4YjAyMlwiLFxyXG4gICAgICAgIGFjY2VudDogXCIjMjkzRDRGXCIsXHJcbiAgICAgICAgd2FybjogXCIjYjAwMTIyXCIsXHJcbiAgICAgICAgZGlzYWJsZWQ6IFwiI2FmYTZhNlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1GaWVsZDoge1xyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI3cHhcIixcclxuICAgICAgICBib3JkZXJSYWRpdXNSb3VuZGVkOiBcIjcwcHhcIixcclxuXHJcbiAgICAgICAgZmlsbDoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNEOERGRTg4MFwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBidXR0b246IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICB0ZXh0TGlnaHRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgdGV4dERhcmtDb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgaG92ZXJDb2xvcjogXCIjZDNkM2QzNjFcIixcclxuICAgICAgICBhY3RpdmVDb2xvcjogXCIjZDNkM2QzXCIsXHJcbiAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgIHRleHQ6IFwiI2E2YTZhNlwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYm9yZGVyOiBcIjAgdW5zZXQgdW5zZXRcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcblxyXG4gICAgICAgIG1pbkhlaWdodDogXCIzNnB4XCIsXHJcbiAgICAgICAgZm9udFNpemU6IFwiMC45ZW1cIixcclxuICAgICAgICBpY29uU2l6ZTogXCIxZW1cIixcclxuXHJcbiAgICAgICAgb3V0bGluZToge1xyXG4gICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZDNkM2QzXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBmbGF0OiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgICAgdGV4dDogXCIjYTZhNmE2XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2QzZDNkM1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByYWlzZWQ6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICBkaXNhYmxlZDoge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIiNhNmE2YTZcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZDNkM2QzXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGljb246IHtcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgIGZvbnRTaXplOiBcIjFlbVwiLFxyXG4gICAgICAgICAgZGlhbWV0ZXI6IFwiM2VtXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBmYWI6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICBkaXNhYmxlZDoge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIiNhNmE2YTZcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZDNkM2QzXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIixcclxuICAgICAgICAgIGRpYW1ldGVyOiBcIjRlbVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWluaUZhYjoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgIGRpc2FibGVkOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiI2E2YTZhNlwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNkM2QzZDNcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgIGZvbnRTaXplOiBcIjFlbVwiLFxyXG4gICAgICAgICAgZGlhbWV0ZXI6IFwiM2VtXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB0b2dnbGU6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICB1bnNlbGVjdGVkQmdDb2xvcjogXCIjYzhjYWM2XCIsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBnZW9JY29uOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiNDBweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCI0MHB4XCIsXHJcbiAgICAgICAgbWFyZ2luOiBcIjVweFwiLFxyXG4gICAgICAgIHRyYW5zaXRpb25UaW1lOiBcIjFzXCIsXHJcbiAgICAgICAgbWFpbkNvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgICBtYWluU2VsZWN0ZWRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgbWFpbk9wYWNpdHk6IDAuMixcclxuICAgICAgICBtYWluU2VsZWN0ZWRPcGFjaXR5OiAxLFxyXG4gICAgICAgIGJhY2tDb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgYmFja1NlbGVjdGVkQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIGJhY2tPcGFjaXR5OiAwLjIsXHJcbiAgICAgICAgYmFja1NlbGVjdGVkT3BhY2l0eTogMC4yLFxyXG4gICAgICAgIG92ZXJsYXlDb2xvcjogXCIjOGViZjYyXCIsXHJcbiAgICAgICAgb3ZlcmxheVNlbGVjdGVkQ29sb3I6IFwiI2ZmYTUwMFwiLFxyXG4gICAgICAgIG92ZXJsYXlPcGFjaXR5OiAxLFxyXG4gICAgICAgIG92ZXJsYXlTZWxlY3RlZE9wYWNpdHk6IDFcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=