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
                accent: "#e7e7e7",
                warn: "#b00122",
                disabled: "#afa6a6"
            },
            formField: {
                borderRadius: "7px",
                borderRadiusRounded: "70px",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBRWhDLE1BQU0sT0FBTyxVQUFVO0lBRWIsTUFBTSxDQUFDLE1BQU0sQ0FBaUI7SUFFOUIsTUFBTSxDQUFDLFlBQVksQ0FBaUI7SUFFckMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFzQjtRQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxTQUFTO1FBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjtRQUVELElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFcEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO1FBQzVCLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQVEsRUFBRSxNQUFXO1FBQy9DLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2pELElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUMvQztpQkFBTTtnQkFDTCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQ2xCO1NBQ0Y7UUFBQSxDQUFDO1FBQ0YsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRU8sTUFBTSxLQUFLLFVBQVU7UUFDM0IsT0FBTztZQUNMLFFBQVEsRUFBRTtnQkFDUixnQkFBZ0I7Z0JBQ2hCLE1BQU0sRUFBRSx5QkFBeUI7YUFDbEM7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsT0FBTyxFQUFFLFNBQVM7Z0JBQ2xCLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixJQUFJLEVBQUUsU0FBUztnQkFDZixRQUFRLEVBQUUsU0FBUzthQUNwQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxZQUFZLEVBQUUsS0FBSztnQkFDbkIsbUJBQW1CLEVBQUUsTUFBTTthQUM1QjtZQUNELE1BQU0sRUFBRTtnQkFDTixlQUFlLEVBQUUsYUFBYTtnQkFDOUIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsV0FBVyxFQUFFLFNBQVM7Z0JBQ3RCLFFBQVEsRUFBRTtvQkFDUixJQUFJLEVBQUUsU0FBUztvQkFDZixVQUFVLEVBQUUsYUFBYTtpQkFDMUI7Z0JBRUQsTUFBTSxFQUFFLGVBQWU7Z0JBQ3ZCLFlBQVksRUFBRSxLQUFLO2dCQUVuQixTQUFTLEVBQUUsTUFBTTtnQkFDakIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxLQUFLO2dCQUVmLE9BQU8sRUFBRTtvQkFDUCxNQUFNLEVBQUUsbUJBQW1CO2lCQUM1QjtnQkFFRCxJQUFJLEVBQUU7b0JBQ0osZUFBZSxFQUFFLFNBQVM7b0JBQzFCLFFBQVEsRUFBRTt3QkFDUixJQUFJLEVBQUUsU0FBUzt3QkFDZixVQUFVLEVBQUUsU0FBUztxQkFDdEI7aUJBQ0Y7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLGVBQWUsRUFBRSxTQUFTO29CQUMxQixRQUFRLEVBQUU7d0JBQ1IsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsVUFBVSxFQUFFLFNBQVM7cUJBQ3RCO2lCQUNGO2dCQUNELElBQUksRUFBRTtvQkFDSixZQUFZLEVBQUUsS0FBSztvQkFDbkIsUUFBUSxFQUFFLEtBQUs7b0JBQ2YsUUFBUSxFQUFFLEtBQUs7aUJBQ2hCO2dCQUVELEdBQUcsRUFBRTtvQkFDSCxlQUFlLEVBQUUsU0FBUztvQkFDMUIsUUFBUSxFQUFFO3dCQUNSLElBQUksRUFBRSxTQUFTO3dCQUNmLFVBQVUsRUFBRSxTQUFTO3FCQUN0QjtvQkFDRCxZQUFZLEVBQUUsS0FBSztvQkFDbkIsUUFBUSxFQUFFLEtBQUs7b0JBQ2YsUUFBUSxFQUFFLEtBQUs7aUJBQ2hCO2dCQUVELE9BQU8sRUFBRTtvQkFDUCxlQUFlLEVBQUUsU0FBUztvQkFDMUIsUUFBUSxFQUFFO3dCQUNSLElBQUksRUFBRSxTQUFTO3dCQUNmLFVBQVUsRUFBRSxTQUFTO3FCQUN0QjtvQkFDRCxZQUFZLEVBQUUsS0FBSztvQkFDbkIsUUFBUSxFQUFFLEtBQUs7b0JBQ2YsUUFBUSxFQUFFLEtBQUs7aUJBQ2hCO2dCQUVELE1BQU0sRUFBRTtvQkFDTixlQUFlLEVBQUUsU0FBUztvQkFDMUIsaUJBQWlCLEVBQUUsU0FBUztpQkFDN0I7YUFDRjtZQUNELE9BQU8sRUFBRTtnQkFDUCxLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUUsTUFBTTtnQkFDZCxNQUFNLEVBQUUsS0FBSztnQkFDYixjQUFjLEVBQUUsSUFBSTtnQkFDcEIsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLGlCQUFpQixFQUFFLFNBQVM7Z0JBQzVCLFdBQVcsRUFBRSxHQUFHO2dCQUNoQixtQkFBbUIsRUFBRSxDQUFDO2dCQUN0QixTQUFTLEVBQUUsU0FBUztnQkFDcEIsaUJBQWlCLEVBQUUsU0FBUztnQkFDNUIsV0FBVyxFQUFFLEdBQUc7Z0JBQ2hCLG1CQUFtQixFQUFFLEdBQUc7Z0JBQ3hCLFlBQVksRUFBRSxTQUFTO2dCQUN2QixvQkFBb0IsRUFBRSxTQUFTO2dCQUMvQixjQUFjLEVBQUUsQ0FBQztnQkFDakIsc0JBQXNCLEVBQUUsQ0FBQzthQUMxQjtTQUNGLENBQUE7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNcmRDb25maWdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbC9jb25maWcubW9kZWxcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maWdVdGlsIHtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgY29uZmlnOiBNcmRDb25maWdNb2RlbDtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgY3VzdG9tQ29uZmlnOiBNcmRDb25maWdNb2RlbDtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBzZXRDb25maWcoY29uZmlnOiBNcmRDb25maWdNb2RlbCkge1xyXG4gICAgdGhpcy5jb25maWcgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmN1c3RvbUNvbmZpZyA9IGNvbmZpZztcclxuICAgIHRoaXMuZ2V0Q29uZmlnKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldENvbmZpZygpIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZykge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWc7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRlZmF1bHRDb25maWcgPSB0aGlzLmJhc2VDb25maWc7XHJcblxyXG4gICAgaWYgKHRoaXMuY3VzdG9tQ29uZmlnKSB7XHJcbiAgICAgIHRoaXMuZXh0ZW5kT2JqZWN0KGRlZmF1bHRDb25maWcsIHRoaXMuY3VzdG9tQ29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvbmZpZyA9IGRlZmF1bHRDb25maWc7XHJcbiAgICByZXR1cm4gZGVmYXVsdENvbmZpZztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGV4dGVuZE9iamVjdChvYmo6IGFueSwgZXh0T2JqOiBhbnkpOiBhbnkge1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZXh0T2JqKSkge1xyXG4gICAgICBpZiAoXy5pc09iamVjdCh2YWx1ZSkgJiYgIV8uaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICBvYmpba2V5XSA9IHRoaXMuZXh0ZW5kT2JqZWN0KG9ialtrZXldLCB2YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBnZXQgYmFzZUNvbmZpZygpOiBNcmRDb25maWdNb2RlbCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiYXNlRm9udDoge1xyXG4gICAgICAgIC8vIHNpemU6IFwiMTZweFwiLFxyXG4gICAgICAgIGZhbWlseTogXCJVUlcgRGluLExhdG8sc2Fucy1zZXJpZlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGJhc2VDb2xvcnM6IHtcclxuICAgICAgICBwcmltYXJ5OiBcIiM2OGIwMjJcIixcclxuICAgICAgICBhY2NlbnQ6IFwiI2U3ZTdlN1wiLFxyXG4gICAgICAgIHdhcm46IFwiI2IwMDEyMlwiLFxyXG4gICAgICAgIGRpc2FibGVkOiBcIiNhZmE2YTZcIlxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtRmllbGQ6IHtcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiN3B4XCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzUm91bmRlZDogXCI3MHB4XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgIHRleHRMaWdodENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICB0ZXh0RGFya0NvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgICBob3ZlckNvbG9yOiBcIiNkM2QzZDM2MVwiLFxyXG4gICAgICAgIGFjdGl2ZUNvbG9yOiBcIiNkM2QzZDNcIixcclxuICAgICAgICBkaXNhYmxlZDoge1xyXG4gICAgICAgICAgdGV4dDogXCIjYTZhNmE2XCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBib3JkZXI6IFwiMCB1bnNldCB1bnNldFwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuXHJcbiAgICAgICAgbWluSGVpZ2h0OiBcIjM2cHhcIixcclxuICAgICAgICBmb250U2l6ZTogXCIwLjllbVwiLFxyXG4gICAgICAgIGljb25TaXplOiBcIjFlbVwiLFxyXG5cclxuICAgICAgICBvdXRsaW5lOiB7XHJcbiAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNkM2QzZDNcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGZsYXQ6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICBkaXNhYmxlZDoge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIiNhNmE2YTZcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZDNkM2QzXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJhaXNlZDoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgIGRpc2FibGVkOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiI2E2YTZhNlwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNkM2QzZDNcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgZm9udFNpemU6IFwiMWVtXCIsXHJcbiAgICAgICAgICBkaWFtZXRlcjogXCIzZW1cIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGZhYjoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgIGRpc2FibGVkOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiI2E2YTZhNlwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNkM2QzZDNcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgIGZvbnRTaXplOiBcIjFlbVwiLFxyXG4gICAgICAgICAgZGlhbWV0ZXI6IFwiNGVtXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtaW5pRmFiOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgICAgdGV4dDogXCIjYTZhNmE2XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2QzZDNkM1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgZm9udFNpemU6IFwiMWVtXCIsXHJcbiAgICAgICAgICBkaWFtZXRlcjogXCIzZW1cIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHRvZ2dsZToge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgIHVuc2VsZWN0ZWRCZ0NvbG9yOiBcIiNjOGNhYzZcIixcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGdlb0ljb246IHtcclxuICAgICAgICB3aWR0aDogXCI0MHB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcclxuICAgICAgICBtYXJnaW46IFwiNXB4XCIsXHJcbiAgICAgICAgdHJhbnNpdGlvblRpbWU6IFwiMXNcIixcclxuICAgICAgICBtYWluQ29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgIG1haW5TZWxlY3RlZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBtYWluT3BhY2l0eTogMC4yLFxyXG4gICAgICAgIG1haW5TZWxlY3RlZE9wYWNpdHk6IDEsXHJcbiAgICAgICAgYmFja0NvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgICBiYWNrU2VsZWN0ZWRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgYmFja09wYWNpdHk6IDAuMixcclxuICAgICAgICBiYWNrU2VsZWN0ZWRPcGFjaXR5OiAwLjIsXHJcbiAgICAgICAgb3ZlcmxheUNvbG9yOiBcIiM4ZWJmNjJcIixcclxuICAgICAgICBvdmVybGF5U2VsZWN0ZWRDb2xvcjogXCIjZmZhNTAwXCIsXHJcbiAgICAgICAgb3ZlcmxheU9wYWNpdHk6IDEsXHJcbiAgICAgICAgb3ZlcmxheVNlbGVjdGVkT3BhY2l0eTogMVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==