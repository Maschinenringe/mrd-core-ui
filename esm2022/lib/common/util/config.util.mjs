import * as _ from 'underscore';
export class ConfigUtil {
    static config;
    static customConfig;
    static setConfig(config) {
        this.customConfig = config;
    }
    static getConfig() {
        if (this.config) {
            return this.config;
        }
        // let url = 'assets/mrd-core-ui.config.js';
        // let config: MrdConfig = {} as MrdConfig;
        // let xhr = new XMLHttpRequest();
        // xhr.open('GET', url, false);
        // xhr.onreadystatechange = () => {
        //   if (xhr.readyState === 4 && xhr.status === 200) {
        //     config = this.parseJsObject(
        //       xhr.responseText.substring(xhr.responseText.indexOf('module.exports'))
        //       .replace('module.exports =', '')
        //       .replace('module.exports=', '')
        //       .trim()
        //     );
        //   }
        // };
        // xhr.send();
        // let config = loadConfig();
        // this.config = config;
        // return config;
        let config = this.customConfig;
        let defaultConfig = this.baseConfig;
        this.extendObject(defaultConfig, config);
        this.config = defaultConfig;
        console.log(this.config);
        return defaultConfig;
    }
    // private static parseJsObject(data: string): any {
    //   const func = new Function('return ' + data + ';');
    //   return func();
    // }
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
            baseColors: {
                primary: "#68b022",
                accent: "#e7e7e7",
                warn: "#b00122",
                disabled: "#afa6a6"
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
                    borderRadius: "50%"
                },
                fab: {
                    backgroundColor: "#ffffff",
                    disabled: {
                        text: "#a6a6a6",
                        background: "#d3d3d3"
                    },
                    borderRadius: "50%"
                },
                miniFab: {
                    backgroundColor: "#ffffff",
                    disabled: {
                        text: "#a6a6a6",
                        background: "#d3d3d3"
                    },
                    borderRadius: "50%"
                }
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBRWhDLE1BQU0sT0FBTyxVQUFVO0lBRWIsTUFBTSxDQUFDLE1BQU0sQ0FBWTtJQUN6QixNQUFNLENBQUMsWUFBWSxDQUFZO0lBRWhDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBaUI7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUFTO1FBQ2QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCO1FBQ0QsNENBQTRDO1FBQzVDLDJDQUEyQztRQUMzQyxrQ0FBa0M7UUFDbEMsK0JBQStCO1FBQy9CLG1DQUFtQztRQUNuQyxzREFBc0Q7UUFDdEQsbUNBQW1DO1FBQ25DLCtFQUErRTtRQUMvRSx5Q0FBeUM7UUFDekMsd0NBQXdDO1FBQ3hDLGdCQUFnQjtRQUNoQixTQUFTO1FBQ1QsTUFBTTtRQUNOLEtBQUs7UUFDTCxjQUFjO1FBQ2QsNkJBQTZCO1FBQzdCLHdCQUF3QjtRQUN4QixpQkFBaUI7UUFFakIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMvQixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRXBDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxvREFBb0Q7SUFDcEQsdURBQXVEO0lBQ3ZELG1CQUFtQjtJQUNuQixJQUFJO0lBRUksTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFRLEVBQUUsTUFBVztRQUMvQyxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNqRCxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMxQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDL0M7aUJBQU07Z0JBQ0wsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUNsQjtTQUNGO1FBQUEsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVPLE1BQU0sS0FBSyxVQUFVO1FBQzNCLE9BQU87WUFDTCxVQUFVLEVBQUU7Z0JBQ1YsT0FBTyxFQUFFLFNBQVM7Z0JBQ2xCLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixJQUFJLEVBQUUsU0FBUztnQkFDZixRQUFRLEVBQUUsU0FBUzthQUNwQjtZQUNELE1BQU0sRUFBRTtnQkFDTixlQUFlLEVBQUUsYUFBYTtnQkFDOUIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLGFBQWEsRUFBRSxTQUFTO2dCQUN4QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsV0FBVyxFQUFFLFNBQVM7Z0JBQ3RCLFFBQVEsRUFBRTtvQkFDUixJQUFJLEVBQUUsU0FBUztvQkFDZixVQUFVLEVBQUUsYUFBYTtpQkFDMUI7Z0JBRUQsTUFBTSxFQUFFLGVBQWU7Z0JBQ3ZCLFlBQVksRUFBRSxLQUFLO2dCQUNuQixPQUFPLEVBQUU7b0JBQ1AsTUFBTSxFQUFFLG1CQUFtQjtpQkFDNUI7Z0JBRUQsSUFBSSxFQUFFO29CQUNKLGVBQWUsRUFBRSxTQUFTO29CQUMxQixRQUFRLEVBQUU7d0JBQ1IsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsVUFBVSxFQUFFLFNBQVM7cUJBQ3RCO2lCQUNGO2dCQUNELE1BQU0sRUFBRTtvQkFDTixlQUFlLEVBQUUsU0FBUztvQkFDMUIsUUFBUSxFQUFFO3dCQUNSLElBQUksRUFBRSxTQUFTO3dCQUNmLFVBQVUsRUFBRSxTQUFTO3FCQUN0QjtpQkFDRjtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osWUFBWSxFQUFFLEtBQUs7aUJBQ3BCO2dCQUVELEdBQUcsRUFBRTtvQkFDSCxlQUFlLEVBQUUsU0FBUztvQkFDMUIsUUFBUSxFQUFFO3dCQUNSLElBQUksRUFBRSxTQUFTO3dCQUNmLFVBQVUsRUFBRSxTQUFTO3FCQUN0QjtvQkFDRCxZQUFZLEVBQUUsS0FBSztpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGVBQWUsRUFBRSxTQUFTO29CQUMxQixRQUFRLEVBQUU7d0JBQ1IsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsVUFBVSxFQUFFLFNBQVM7cUJBQ3RCO29CQUNELFlBQVksRUFBRSxLQUFLO2lCQUNwQjthQUNGO1NBQ0YsQ0FBQTtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1yZENvbmZpZyB9IGZyb20gXCIuLi9tb2RlbC9jb25maWcubW9kZWxcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maWdVdGlsIHtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgY29uZmlnOiBNcmRDb25maWc7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgY3VzdG9tQ29uZmlnOiBNcmRDb25maWc7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc2V0Q29uZmlnKGNvbmZpZzogTXJkQ29uZmlnKSB7XHJcbiAgICB0aGlzLmN1c3RvbUNvbmZpZyA9IGNvbmZpZztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRDb25maWcoKSB7XHJcbiAgICBpZiAodGhpcy5jb25maWcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnO1xyXG4gICAgfVxyXG4gICAgLy8gbGV0IHVybCA9ICdhc3NldHMvbXJkLWNvcmUtdWkuY29uZmlnLmpzJztcclxuICAgIC8vIGxldCBjb25maWc6IE1yZENvbmZpZyA9IHt9IGFzIE1yZENvbmZpZztcclxuICAgIC8vIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIC8vIHhoci5vcGVuKCdHRVQnLCB1cmwsIGZhbHNlKTtcclxuICAgIC8vIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAvLyAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgIC8vICAgICBjb25maWcgPSB0aGlzLnBhcnNlSnNPYmplY3QoXHJcbiAgICAvLyAgICAgICB4aHIucmVzcG9uc2VUZXh0LnN1YnN0cmluZyh4aHIucmVzcG9uc2VUZXh0LmluZGV4T2YoJ21vZHVsZS5leHBvcnRzJykpXHJcbiAgICAvLyAgICAgICAucmVwbGFjZSgnbW9kdWxlLmV4cG9ydHMgPScsICcnKVxyXG4gICAgLy8gICAgICAgLnJlcGxhY2UoJ21vZHVsZS5leHBvcnRzPScsICcnKVxyXG4gICAgLy8gICAgICAgLnRyaW0oKVxyXG4gICAgLy8gICAgICk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH07XHJcbiAgICAvLyB4aHIuc2VuZCgpO1xyXG4gICAgLy8gbGV0IGNvbmZpZyA9IGxvYWRDb25maWcoKTtcclxuICAgIC8vIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgLy8gcmV0dXJuIGNvbmZpZztcclxuXHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5jdXN0b21Db25maWc7XHJcbiAgICBsZXQgZGVmYXVsdENvbmZpZyA9IHRoaXMuYmFzZUNvbmZpZztcclxuXHJcbiAgICB0aGlzLmV4dGVuZE9iamVjdChkZWZhdWx0Q29uZmlnLCBjb25maWcpO1xyXG5cclxuICAgIHRoaXMuY29uZmlnID0gZGVmYXVsdENvbmZpZztcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuY29uZmlnKTtcclxuICAgIHJldHVybiBkZWZhdWx0Q29uZmlnO1xyXG4gIH1cclxuXHJcbiAgLy8gcHJpdmF0ZSBzdGF0aWMgcGFyc2VKc09iamVjdChkYXRhOiBzdHJpbmcpOiBhbnkge1xyXG4gIC8vICAgY29uc3QgZnVuYyA9IG5ldyBGdW5jdGlvbigncmV0dXJuICcgKyBkYXRhICsgJzsnKTtcclxuICAvLyAgIHJldHVybiBmdW5jKCk7XHJcbiAgLy8gfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBleHRlbmRPYmplY3Qob2JqOiBhbnksIGV4dE9iajogYW55KTogYW55IHtcclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGV4dE9iaikpIHtcclxuICAgICAgaWYgKF8uaXNPYmplY3QodmFsdWUpICYmICFfLmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgb2JqW2tleV0gPSB0aGlzLmV4dGVuZE9iamVjdChvYmpba2V5XSwgdmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0IGJhc2VDb25maWcoKTogTXJkQ29uZmlnIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJhc2VDb2xvcnM6IHtcclxuICAgICAgICBwcmltYXJ5OiBcIiM2OGIwMjJcIixcclxuICAgICAgICBhY2NlbnQ6IFwiI2U3ZTdlN1wiLFxyXG4gICAgICAgIHdhcm46IFwiI2IwMDEyMlwiLFxyXG4gICAgICAgIGRpc2FibGVkOiBcIiNhZmE2YTZcIlxyXG4gICAgICB9LFxyXG4gICAgICBidXR0b246IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICB0ZXh0TGlnaHRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgdGV4dERhcmtDb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgaG92ZXJDb2xvcjogXCIjZDNkM2QzNjFcIixcclxuICAgICAgICBhY3RpdmVDb2xvcjogXCIjZDNkM2QzXCIsXHJcbiAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgIHRleHQ6IFwiI2E2YTZhNlwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYm9yZGVyOiBcIjAgdW5zZXQgdW5zZXRcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgb3V0bGluZToge1xyXG4gICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZDNkM2QzXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBmbGF0OiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgICAgdGV4dDogXCIjYTZhNmE2XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2QzZDNkM1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByYWlzZWQ6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICBkaXNhYmxlZDoge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIiNhNmE2YTZcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZDNkM2QzXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGljb246IHtcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGZhYjoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgIGRpc2FibGVkOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiI2E2YTZhNlwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNkM2QzZDNcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWluaUZhYjoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgIGRpc2FibGVkOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiI2E2YTZhNlwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNkM2QzZDNcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=