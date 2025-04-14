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
                family: "Lato,sans-serif"
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
                },
                input: {
                    color: "#293d4f"
                },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBRWhDLE1BQU0sT0FBTyxVQUFVO0lBRWIsTUFBTSxDQUFDLE1BQU0sQ0FBaUI7SUFFOUIsTUFBTSxDQUFDLFlBQVksQ0FBaUI7SUFFckMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFzQjtRQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxTQUFTO1FBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjtRQUVELElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFcEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO1FBQzVCLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQVEsRUFBRSxNQUFXO1FBQy9DLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2pELElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENB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LFFBQVEsRUFBRSxLQUFLO2lCQUNoQjtnQkFFRCxNQUFNLEVBQUU7b0JBQ04sZUFBZSxFQUFFLFNBQVM7b0JBQzFCLGlCQUFpQixFQUFFLFNBQVM7b0JBQzVCLFFBQVEsRUFBRTt3QkFDUixJQUFJLEVBQUUsU0FBUzt3QkFDZixVQUFVLEVBQUUsU0FBUztxQkFDdEI7aUJBQ0Y7YUFDRjtZQUNELE9BQU8sRUFBRTtnQkFDUCxLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUUsTUFBTTtnQkFDZCxNQUFNLEVBQUUsS0FBSztnQkFDYixjQUFjLEVBQUUsSUFBSTtnQkFDcEIsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLGlCQUFpQixFQUFFLFNBQVM7Z0JBQzVCLFdBQVcsRUFBRSxHQUFHO2dCQUNoQixtQkFBbUIsRUFBRSxDQUFDO2dCQUN0QixTQUFTLEVBQUUsU0FBUztnQkFDcEIsaUJBQWlCLEVBQUUsU0FBUztnQkFDNUIsV0FBVyxFQUFFLEdBQUc7Z0JBQ2hCLG1CQUFtQixFQUFFLEdBQUc7Z0JBQ3hCLFlBQVksRUFBRSxTQUFTO2dCQUN2QixvQkFBb0IsRUFBRSxTQUFTO2dCQUMvQixjQUFjLEVBQUUsQ0FBQztnQkFDakIsc0JBQXNCLEVBQUUsQ0FBQzthQUMxQjtZQUNELFFBQVEsRUFBRTtnQkFDUixZQUFZLEVBQUUsTUFBTTtnQkFDcEIsSUFBSSxFQUFFO29CQUNKLFVBQVUsRUFBRTt3QkFDVixPQUFPLEVBQUU7NEJBQ1AsVUFBVSxFQUFFLFNBQVM7NEJBQ3JCLElBQUksRUFBRSxTQUFTO3lCQUNoQjtxQkFDRjtvQkFDRCxRQUFRLEVBQUU7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQLFVBQVUsRUFBRSxTQUFTOzRCQUNyQixJQUFJLEVBQUUsU0FBUzt5QkFDaEI7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGLENBQUE7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNcmRDb25maWdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbC9jb25maWcubW9kZWxcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maWdVdGlsIHtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgY29uZmlnOiBNcmRDb25maWdNb2RlbDtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgY3VzdG9tQ29uZmlnOiBNcmRDb25maWdNb2RlbDtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBzZXRDb25maWcoY29uZmlnOiBNcmRDb25maWdNb2RlbCkge1xyXG4gICAgdGhpcy5jb25maWcgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmN1c3RvbUNvbmZpZyA9IGNvbmZpZztcclxuICAgIHRoaXMuZ2V0Q29uZmlnKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldENvbmZpZygpIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZykge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWc7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRlZmF1bHRDb25maWcgPSB0aGlzLmJhc2VDb25maWc7XHJcblxyXG4gICAgaWYgKHRoaXMuY3VzdG9tQ29uZmlnKSB7XHJcbiAgICAgIHRoaXMuZXh0ZW5kT2JqZWN0KGRlZmF1bHRDb25maWcsIHRoaXMuY3VzdG9tQ29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvbmZpZyA9IGRlZmF1bHRDb25maWc7XHJcbiAgICByZXR1cm4gZGVmYXVsdENvbmZpZztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGV4dGVuZE9iamVjdChvYmo6IGFueSwgZXh0T2JqOiBhbnkpOiBhbnkge1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZXh0T2JqKSkge1xyXG4gICAgICBpZiAoXy5pc09iamVjdCh2YWx1ZSkgJiYgIV8uaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICBvYmpba2V5XSA9IHRoaXMuZXh0ZW5kT2JqZWN0KG9ialtrZXldLCB2YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldE1vc3RTcGVjaWZpY1ZhbHVlKGVudHJ5OiBzdHJpbmdbXSk6IGFueSB7XHJcbiAgICBsZXQgdHJlZTogc3RyaW5nW10gPSBlbnRyeS5zbGljZSgpO1xyXG4gICAgd2hpbGUodHJlZS5sZW5ndGggPiAwICYmIF8uaXNPYmplY3QodGhpcy5jb25maWdbdHJlZVswXV0pKSB7XHJcbiAgICAgIHRyZWUgPSB0cmVlLnNsaWNlKDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0IGJhc2VDb25maWcoKTogTXJkQ29uZmlnTW9kZWwge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmFzZUZvbnQ6IHtcclxuICAgICAgICAvLyBzaXplOiBcIjE2cHhcIixcclxuICAgICAgICBmYW1pbHk6IFwiTGF0byxzYW5zLXNlcmlmXCJcclxuICAgICAgfSxcclxuICAgICAgYmFzZUNvbG9yczoge1xyXG4gICAgICAgIHByaW1hcnk6IFwiIzY4YjAyMlwiLFxyXG4gICAgICAgIGFjY2VudDogXCIjMjkzRDRGXCIsXHJcbiAgICAgICAgd2FybjogXCIjYjAwMTIyXCIsXHJcbiAgICAgICAgZGlzYWJsZWQ6IFwiI2FmYTZhNlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1GaWVsZDoge1xyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI3cHhcIixcclxuICAgICAgICBib3JkZXJSYWRpdXNSb3VuZGVkOiBcIjcwcHhcIixcclxuXHJcbiAgICAgICAgZmlsbDoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNEOERGRTg4MFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgY29sb3I6IFwiIzI5M2Q0ZlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgdGV4dExpZ2h0Q29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIHRleHREYXJrQ29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgIGhvdmVyQ29sb3I6IFwiI2QzZDNkMzYxXCIsXHJcbiAgICAgICAgYWN0aXZlQ29sb3I6IFwiI2QzZDNkM1wiLFxyXG4gICAgICAgIGRpc2FibGVkOiB7XHJcbiAgICAgICAgICB0ZXh0OiBcIiNhNmE2YTZcIixcclxuICAgICAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGJvcmRlcjogXCIwIHVuc2V0IHVuc2V0XCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxyXG5cclxuICAgICAgICBtaW5IZWlnaHQ6IFwiMzZweFwiLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjAuOWVtXCIsXHJcbiAgICAgICAgaWNvblNpemU6IFwiMWVtXCIsXHJcblxyXG4gICAgICAgIG91dGxpbmU6IHtcclxuICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2QzZDNkM1wiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZmxhdDoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgIGRpc2FibGVkOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiI2E2YTZhNlwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNkM2QzZDNcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmFpc2VkOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgICAgdGV4dDogXCIjYTZhNmE2XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2QzZDNkM1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIixcclxuICAgICAgICAgIGRpYW1ldGVyOiBcIjNlbVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZmFiOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgICAgdGV4dDogXCIjYTZhNmE2XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2QzZDNkM1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgZm9udFNpemU6IFwiMWVtXCIsXHJcbiAgICAgICAgICBkaWFtZXRlcjogXCI0ZW1cIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1pbmlGYWI6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICBkaXNhYmxlZDoge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIiNhNmE2YTZcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZDNkM2QzXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIixcclxuICAgICAgICAgIGRpYW1ldGVyOiBcIjNlbVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgdW5zZWxlY3RlZEJnQ29sb3I6IFwiI2M4Y2FjNlwiLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgICAgdGV4dDogXCIjYTZhNmE2XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2QzZDNkM1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBnZW9JY29uOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiNDBweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCI0MHB4XCIsXHJcbiAgICAgICAgbWFyZ2luOiBcIjVweFwiLFxyXG4gICAgICAgIHRyYW5zaXRpb25UaW1lOiBcIjFzXCIsXHJcbiAgICAgICAgbWFpbkNvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgICBtYWluU2VsZWN0ZWRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgbWFpbk9wYWNpdHk6IDAuMixcclxuICAgICAgICBtYWluU2VsZWN0ZWRPcGFjaXR5OiAxLFxyXG4gICAgICAgIGJhY2tDb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgYmFja1NlbGVjdGVkQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIGJhY2tPcGFjaXR5OiAwLjIsXHJcbiAgICAgICAgYmFja1NlbGVjdGVkT3BhY2l0eTogMC4yLFxyXG4gICAgICAgIG92ZXJsYXlDb2xvcjogXCIjOGViZjYyXCIsXHJcbiAgICAgICAgb3ZlcmxheVNlbGVjdGVkQ29sb3I6IFwiI2ZmYTUwMFwiLFxyXG4gICAgICAgIG92ZXJsYXlPcGFjaXR5OiAxLFxyXG4gICAgICAgIG92ZXJsYXlTZWxlY3RlZE9wYWNpdHk6IDFcclxuICAgICAgfSxcclxuICAgICAgY2hlY2tib3g6IHtcclxuICAgICAgICBjaGVja2JveFNpemU6IFwiMTZweFwiLFxyXG4gICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgIHVuc2VsZWN0ZWQ6IHtcclxuICAgICAgICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgIHRleHQ6IFwiIzAwMDAwMFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZWxlY3RlZDoge1xyXG4gICAgICAgICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjNjhiMDIyXCIsXHJcbiAgICAgICAgICAgICAgdGV4dDogXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=