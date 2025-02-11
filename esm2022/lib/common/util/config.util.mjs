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
                    disabled: {
                        text: "#a6a6a6",
                        background: "#d3d3d3"
                    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBRWhDLE1BQU0sT0FBTyxVQUFVO0lBRWIsTUFBTSxDQUFDLE1BQU0sQ0FBaUI7SUFFOUIsTUFBTSxDQUFDLFlBQVksQ0FBaUI7SUFFckMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFzQjtRQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxTQUFTO1FBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjtRQUVELElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFcEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO1FBQzVCLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQVEsRUFBRSxNQUFXO1FBQy9DLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2pELElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENB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LGVBQWUsRUFBRSxTQUFTO29CQUMxQixpQkFBaUIsRUFBRSxTQUFTO29CQUM1QixRQUFRLEVBQUU7d0JBQ1IsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsVUFBVSxFQUFFLFNBQVM7cUJBQ3RCO2lCQUNGO2FBQ0Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsY0FBYyxFQUFFLElBQUk7Z0JBQ3BCLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixpQkFBaUIsRUFBRSxTQUFTO2dCQUM1QixXQUFXLEVBQUUsR0FBRztnQkFDaEIsbUJBQW1CLEVBQUUsQ0FBQztnQkFDdEIsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLGlCQUFpQixFQUFFLFNBQVM7Z0JBQzVCLFdBQVcsRUFBRSxHQUFHO2dCQUNoQixtQkFBbUIsRUFBRSxHQUFHO2dCQUN4QixZQUFZLEVBQUUsU0FBUztnQkFDdkIsb0JBQW9CLEVBQUUsU0FBUztnQkFDL0IsY0FBYyxFQUFFLENBQUM7Z0JBQ2pCLHNCQUFzQixFQUFFLENBQUM7YUFDMUI7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsWUFBWSxFQUFFLE1BQU07Z0JBQ3BCLElBQUksRUFBRTtvQkFDSixVQUFVLEVBQUU7d0JBQ1YsT0FBTyxFQUFFOzRCQUNQLFVBQVUsRUFBRSxTQUFTOzRCQUNyQixJQUFJLEVBQUUsU0FBUzt5QkFDaEI7cUJBQ0Y7b0JBQ0QsUUFBUSxFQUFFO3dCQUNSLE9BQU8sRUFBRTs0QkFDUCxVQUFVLEVBQUUsU0FBUzs0QkFDckIsSUFBSSxFQUFFLFNBQVM7eUJBQ2hCO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRixDQUFBO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXJkQ29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvY29uZmlnLm1vZGVsXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnVXRpbCB7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGNvbmZpZzogTXJkQ29uZmlnTW9kZWw7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGN1c3RvbUNvbmZpZzogTXJkQ29uZmlnTW9kZWw7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc2V0Q29uZmlnKGNvbmZpZzogTXJkQ29uZmlnTW9kZWwpIHtcclxuICAgIHRoaXMuY29uZmlnID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5jdXN0b21Db25maWcgPSBjb25maWc7XHJcbiAgICB0aGlzLmdldENvbmZpZygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRDb25maWcoKSB7XHJcbiAgICBpZiAodGhpcy5jb25maWcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkZWZhdWx0Q29uZmlnID0gdGhpcy5iYXNlQ29uZmlnO1xyXG5cclxuICAgIGlmICh0aGlzLmN1c3RvbUNvbmZpZykge1xyXG4gICAgICB0aGlzLmV4dGVuZE9iamVjdChkZWZhdWx0Q29uZmlnLCB0aGlzLmN1c3RvbUNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb25maWcgPSBkZWZhdWx0Q29uZmlnO1xyXG4gICAgcmV0dXJuIGRlZmF1bHRDb25maWc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBleHRlbmRPYmplY3Qob2JqOiBhbnksIGV4dE9iajogYW55KTogYW55IHtcclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGV4dE9iaikpIHtcclxuICAgICAgaWYgKF8uaXNPYmplY3QodmFsdWUpICYmICFfLmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgb2JqW2tleV0gPSB0aGlzLmV4dGVuZE9iamVjdChvYmpba2V5XSwgdmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRNb3N0U3BlY2lmaWNWYWx1ZShlbnRyeTogc3RyaW5nW10pOiBhbnkge1xyXG4gICAgbGV0IHRyZWU6IHN0cmluZ1tdID0gZW50cnkuc2xpY2UoKTtcclxuICAgIHdoaWxlKHRyZWUubGVuZ3RoID4gMCAmJiBfLmlzT2JqZWN0KHRoaXMuY29uZmlnW3RyZWVbMF1dKSkge1xyXG4gICAgICB0cmVlID0gdHJlZS5zbGljZSgxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGdldCBiYXNlQ29uZmlnKCk6IE1yZENvbmZpZ01vZGVsIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJhc2VGb250OiB7XHJcbiAgICAgICAgLy8gc2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgICAgZmFtaWx5OiBcIlVSVyBEaW4sTGF0byxzYW5zLXNlcmlmXCJcclxuICAgICAgfSxcclxuICAgICAgYmFzZUNvbG9yczoge1xyXG4gICAgICAgIHByaW1hcnk6IFwiIzY4YjAyMlwiLFxyXG4gICAgICAgIGFjY2VudDogXCIjMjkzRDRGXCIsXHJcbiAgICAgICAgd2FybjogXCIjYjAwMTIyXCIsXHJcbiAgICAgICAgZGlzYWJsZWQ6IFwiI2FmYTZhNlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1GaWVsZDoge1xyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI3cHhcIixcclxuICAgICAgICBib3JkZXJSYWRpdXNSb3VuZGVkOiBcIjcwcHhcIixcclxuXHJcbiAgICAgICAgZmlsbDoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNEOERGRTg4MFwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBidXR0b246IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICB0ZXh0TGlnaHRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgdGV4dERhcmtDb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgaG92ZXJDb2xvcjogXCIjZDNkM2QzNjFcIixcclxuICAgICAgICBhY3RpdmVDb2xvcjogXCIjZDNkM2QzXCIsXHJcbiAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgIHRleHQ6IFwiI2E2YTZhNlwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYm9yZGVyOiBcIjAgdW5zZXQgdW5zZXRcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcblxyXG4gICAgICAgIG1pbkhlaWdodDogXCIzNnB4XCIsXHJcbiAgICAgICAgZm9udFNpemU6IFwiMC45ZW1cIixcclxuICAgICAgICBpY29uU2l6ZTogXCIxZW1cIixcclxuXHJcbiAgICAgICAgb3V0bGluZToge1xyXG4gICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZDNkM2QzXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBmbGF0OiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgICAgdGV4dDogXCIjYTZhNmE2XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2QzZDNkM1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByYWlzZWQ6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICBkaXNhYmxlZDoge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIiNhNmE2YTZcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZDNkM2QzXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGljb246IHtcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgIGZvbnRTaXplOiBcIjFlbVwiLFxyXG4gICAgICAgICAgZGlhbWV0ZXI6IFwiM2VtXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBmYWI6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICBkaXNhYmxlZDoge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIiNhNmE2YTZcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZDNkM2QzXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIixcclxuICAgICAgICAgIGRpYW1ldGVyOiBcIjRlbVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWluaUZhYjoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgIGRpc2FibGVkOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiI2E2YTZhNlwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNkM2QzZDNcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgIGZvbnRTaXplOiBcIjFlbVwiLFxyXG4gICAgICAgICAgZGlhbWV0ZXI6IFwiM2VtXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB0b2dnbGU6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICB1bnNlbGVjdGVkQmdDb2xvcjogXCIjYzhjYWM2XCIsXHJcbiAgICAgICAgICBkaXNhYmxlZDoge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIiNhNmE2YTZcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZDNkM2QzXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGdlb0ljb246IHtcclxuICAgICAgICB3aWR0aDogXCI0MHB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcclxuICAgICAgICBtYXJnaW46IFwiNXB4XCIsXHJcbiAgICAgICAgdHJhbnNpdGlvblRpbWU6IFwiMXNcIixcclxuICAgICAgICBtYWluQ29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgIG1haW5TZWxlY3RlZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBtYWluT3BhY2l0eTogMC4yLFxyXG4gICAgICAgIG1haW5TZWxlY3RlZE9wYWNpdHk6IDEsXHJcbiAgICAgICAgYmFja0NvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgICBiYWNrU2VsZWN0ZWRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgYmFja09wYWNpdHk6IDAuMixcclxuICAgICAgICBiYWNrU2VsZWN0ZWRPcGFjaXR5OiAwLjIsXHJcbiAgICAgICAgb3ZlcmxheUNvbG9yOiBcIiM4ZWJmNjJcIixcclxuICAgICAgICBvdmVybGF5U2VsZWN0ZWRDb2xvcjogXCIjZmZhNTAwXCIsXHJcbiAgICAgICAgb3ZlcmxheU9wYWNpdHk6IDEsXHJcbiAgICAgICAgb3ZlcmxheVNlbGVjdGVkT3BhY2l0eTogMVxyXG4gICAgICB9LFxyXG4gICAgICBjaGVja2JveDoge1xyXG4gICAgICAgIGNoZWNrYm94U2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgICAgZmlsbDoge1xyXG4gICAgICAgICAgdW5zZWxlY3RlZDoge1xyXG4gICAgICAgICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgdGV4dDogXCIjMDAwMDAwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNlbGVjdGVkOiB7XHJcbiAgICAgICAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiM2OGIwMjJcIixcclxuICAgICAgICAgICAgICB0ZXh0OiBcIiNmZmZmZmZcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==