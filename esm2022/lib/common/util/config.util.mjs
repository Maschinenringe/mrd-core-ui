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
    static getMostSpecificValue(entry) {
        let tree = entry.slice();
        while (tree.length > 0 && _.isObject(this.config[tree[0]])) {
            tree = tree.slice(1);
        }
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
            },
            checkbox: {
                checkboxSize: "16px",
                fill: {
                    unselected: {
                        primary: {
                            background: "#ffffff",
                            text: "#000000"
                        }
                    },
                    selected: {
                        primary: {
                            background: "#68b022",
                            text: "#ffffff"
                        }
                    }
                }
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBRWhDLE1BQU0sT0FBTyxVQUFVO0lBRWIsTUFBTSxDQUFDLE1BQU0sQ0FBaUI7SUFFOUIsTUFBTSxDQUFDLFlBQVksQ0FBaUI7SUFFckMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFzQjtRQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxTQUFTO1FBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjtRQUVELElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFcEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO1FBQzVCLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQVEsRUFBRSxNQUFXO1FBQy9DLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2pELElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENB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LGVBQWUsRUFBRSxTQUFTO29CQUMxQixpQkFBaUIsRUFBRSxTQUFTO2lCQUM3QjthQUNGO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLEtBQUssRUFBRSxNQUFNO2dCQUNiLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE1BQU0sRUFBRSxLQUFLO2dCQUNiLGNBQWMsRUFBRSxJQUFJO2dCQUNwQixTQUFTLEVBQUUsU0FBUztnQkFDcEIsaUJBQWlCLEVBQUUsU0FBUztnQkFDNUIsV0FBVyxFQUFFLEdBQUc7Z0JBQ2hCLG1CQUFtQixFQUFFLENBQUM7Z0JBQ3RCLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixpQkFBaUIsRUFBRSxTQUFTO2dCQUM1QixXQUFXLEVBQUUsR0FBRztnQkFDaEIsbUJBQW1CLEVBQUUsR0FBRztnQkFDeEIsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLG9CQUFvQixFQUFFLFNBQVM7Z0JBQy9CLGNBQWMsRUFBRSxDQUFDO2dCQUNqQixzQkFBc0IsRUFBRSxDQUFDO2FBQzFCO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLFlBQVksRUFBRSxNQUFNO2dCQUNwQixJQUFJLEVBQUU7b0JBQ0osVUFBVSxFQUFFO3dCQUNWLE9BQU8sRUFBRTs0QkFDUCxVQUFVLEVBQUUsU0FBUzs0QkFDckIsSUFBSSxFQUFFLFNBQVM7eUJBQ2hCO3FCQUNGO29CQUNELFFBQVEsRUFBRTt3QkFDUixPQUFPLEVBQUU7NEJBQ1AsVUFBVSxFQUFFLFNBQVM7NEJBQ3JCLElBQUksRUFBRSxTQUFTO3lCQUNoQjtxQkFDRjtpQkFDRjthQUNGO1NBQ0YsQ0FBQTtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1yZENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL21vZGVsL2NvbmZpZy5tb2RlbFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ1V0aWwge1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBjb25maWc6IE1yZENvbmZpZ01vZGVsO1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBjdXN0b21Db25maWc6IE1yZENvbmZpZ01vZGVsO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIHNldENvbmZpZyhjb25maWc6IE1yZENvbmZpZ01vZGVsKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuY3VzdG9tQ29uZmlnID0gY29uZmlnO1xyXG4gICAgdGhpcy5nZXRDb25maWcoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0Q29uZmlnKCkge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGVmYXVsdENvbmZpZyA9IHRoaXMuYmFzZUNvbmZpZztcclxuXHJcbiAgICBpZiAodGhpcy5jdXN0b21Db25maWcpIHtcclxuICAgICAgdGhpcy5leHRlbmRPYmplY3QoZGVmYXVsdENvbmZpZywgdGhpcy5jdXN0b21Db25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29uZmlnID0gZGVmYXVsdENvbmZpZztcclxuICAgIHJldHVybiBkZWZhdWx0Q29uZmlnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgZXh0ZW5kT2JqZWN0KG9iajogYW55LCBleHRPYmo6IGFueSk6IGFueSB7XHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhleHRPYmopKSB7XHJcbiAgICAgIGlmIChfLmlzT2JqZWN0KHZhbHVlKSAmJiAhXy5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgIG9ialtrZXldID0gdGhpcy5leHRlbmRPYmplY3Qob2JqW2tleV0sIHZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0TW9zdFNwZWNpZmljVmFsdWUoZW50cnk6IHN0cmluZ1tdKTogYW55IHtcclxuICAgIGxldCB0cmVlOiBzdHJpbmdbXSA9IGVudHJ5LnNsaWNlKCk7XHJcbiAgICB3aGlsZSh0cmVlLmxlbmd0aCA+IDAgJiYgXy5pc09iamVjdCh0aGlzLmNvbmZpZ1t0cmVlWzBdXSkpIHtcclxuICAgICAgdHJlZSA9IHRyZWUuc2xpY2UoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBnZXQgYmFzZUNvbmZpZygpOiBNcmRDb25maWdNb2RlbCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiYXNlRm9udDoge1xyXG4gICAgICAgIC8vIHNpemU6IFwiMTZweFwiLFxyXG4gICAgICAgIGZhbWlseTogXCJVUlcgRGluLExhdG8sc2Fucy1zZXJpZlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGJhc2VDb2xvcnM6IHtcclxuICAgICAgICBwcmltYXJ5OiBcIiM2OGIwMjJcIixcclxuICAgICAgICBhY2NlbnQ6IFwiIzI5M0Q0RlwiLFxyXG4gICAgICAgIHdhcm46IFwiI2IwMDEyMlwiLFxyXG4gICAgICAgIGRpc2FibGVkOiBcIiNhZmE2YTZcIlxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtRmllbGQ6IHtcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiN3B4XCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzUm91bmRlZDogXCI3MHB4XCIsXHJcblxyXG4gICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRDhERkU4ODBcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgdGV4dExpZ2h0Q29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIHRleHREYXJrQ29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgIGhvdmVyQ29sb3I6IFwiI2QzZDNkMzYxXCIsXHJcbiAgICAgICAgYWN0aXZlQ29sb3I6IFwiI2QzZDNkM1wiLFxyXG4gICAgICAgIGRpc2FibGVkOiB7XHJcbiAgICAgICAgICB0ZXh0OiBcIiNhNmE2YTZcIixcclxuICAgICAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGJvcmRlcjogXCIwIHVuc2V0IHVuc2V0XCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxyXG5cclxuICAgICAgICBtaW5IZWlnaHQ6IFwiMzZweFwiLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjAuOWVtXCIsXHJcbiAgICAgICAgaWNvblNpemU6IFwiMWVtXCIsXHJcblxyXG4gICAgICAgIG91dGxpbmU6IHtcclxuICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2QzZDNkM1wiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZmxhdDoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgIGRpc2FibGVkOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiI2E2YTZhNlwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNkM2QzZDNcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmFpc2VkOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgICAgdGV4dDogXCIjYTZhNmE2XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2QzZDNkM1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIixcclxuICAgICAgICAgIGRpYW1ldGVyOiBcIjNlbVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZmFiOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgICAgdGV4dDogXCIjYTZhNmE2XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2QzZDNkM1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgZm9udFNpemU6IFwiMWVtXCIsXHJcbiAgICAgICAgICBkaWFtZXRlcjogXCI0ZW1cIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1pbmlGYWI6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICBkaXNhYmxlZDoge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIiNhNmE2YTZcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZDNkM2QzXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIixcclxuICAgICAgICAgIGRpYW1ldGVyOiBcIjNlbVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgdW5zZWxlY3RlZEJnQ29sb3I6IFwiI2M4Y2FjNlwiLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZ2VvSWNvbjoge1xyXG4gICAgICAgIHdpZHRoOiBcIjQwcHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLFxyXG4gICAgICAgIG1hcmdpbjogXCI1cHhcIixcclxuICAgICAgICB0cmFuc2l0aW9uVGltZTogXCIxc1wiLFxyXG4gICAgICAgIG1haW5Db2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgbWFpblNlbGVjdGVkQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIG1haW5PcGFjaXR5OiAwLjIsXHJcbiAgICAgICAgbWFpblNlbGVjdGVkT3BhY2l0eTogMSxcclxuICAgICAgICBiYWNrQ29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgIGJhY2tTZWxlY3RlZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBiYWNrT3BhY2l0eTogMC4yLFxyXG4gICAgICAgIGJhY2tTZWxlY3RlZE9wYWNpdHk6IDAuMixcclxuICAgICAgICBvdmVybGF5Q29sb3I6IFwiIzhlYmY2MlwiLFxyXG4gICAgICAgIG92ZXJsYXlTZWxlY3RlZENvbG9yOiBcIiNmZmE1MDBcIixcclxuICAgICAgICBvdmVybGF5T3BhY2l0eTogMSxcclxuICAgICAgICBvdmVybGF5U2VsZWN0ZWRPcGFjaXR5OiAxXHJcbiAgICAgIH0sXHJcbiAgICAgIGNoZWNrYm94OiB7XHJcbiAgICAgICAgY2hlY2tib3hTaXplOiBcIjE2cHhcIixcclxuICAgICAgICBmaWxsOiB7XHJcbiAgICAgICAgICB1bnNlbGVjdGVkOiB7XHJcbiAgICAgICAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgICB0ZXh0OiBcIiMwMDAwMDBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2VsZWN0ZWQ6IHtcclxuICAgICAgICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzY4YjAyMlwiLFxyXG4gICAgICAgICAgICAgIHRleHQ6IFwiI2ZmZmZmZlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19