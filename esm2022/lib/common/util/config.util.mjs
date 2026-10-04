import { MrdColor } from "../enum/color.enum";
import { MrdSButtonType } from "../model/config.model";
import * as _ from 'underscore';
import { IconName } from "./icon-lib";
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
            // Funktionen (z. B. iconGroup) sind Werte, keine zu mischenden Objekte; fehlende Zweige werden neu angelegt
            if (_.isObject(value) && !_.isArray(value) && !_.isFunction(value)) {
                obj[key] = this.extendObject(_.isObject(obj[key]) && !_.isFunction(obj[key]) ? obj[key] : {}, value);
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
        const config = this.config;
        while (tree.length > 0 && _.isObject(config[tree[0]])) {
            tree = tree.slice(1);
        }
    }
    static get baseConfig() {
        return {
            baseFont: {
                size: "16px",
                weight: "400",
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
            sButton: {
                text: {
                    default: MrdColor.GRAU_BLAU,
                    hover: MrdColor.GRAU_BLAU,
                    disabled: MrdColor.HELLBLAU
                },
                background: {
                    default: MrdColor.TRANSPARENT,
                    hover: MrdColor.HELLBLAU,
                    disabled: MrdColor.TRANSPARENT
                },
                progress: {
                    default: MrdColor.GRUEN,
                    hover: MrdColor.GRUEN,
                    disabled: MrdColor.GRAU_BLAU_LIGHT
                },
                border: "unset",
                padding: "16px 30px",
                borderRadius: "10px",
                font: {
                    weight: "900"
                },
                minHeight: "56px",
                iconSize: "24px",
                iconSizeNumber: 24,
                diameter: "unset",
                textIconGap: "10px",
                primary: {
                    text: {
                        default: MrdColor.WEISS,
                        hover: MrdColor.WEISS,
                        disabled: MrdColor.GRAU_BLAU_LIGHT
                    },
                    background: {
                        default: MrdColor.GRUEN,
                        hover: MrdColor.GRUEN_DARK,
                        disabled: MrdColor.HELLBLAU
                    },
                    progress: {
                        default: MrdColor.GRUEN_LIGHT
                    }
                },
                secondary: {
                    text: {
                        default: MrdColor.GRUEN,
                        hover: MrdColor.GRUEN,
                        disabled: MrdColor.HELLBLAU
                    },
                    background: {
                        default: MrdColor.TRANSPARENT,
                        hover: MrdColor.GRUEN_TRANSPARENT,
                        disabled: MrdColor.TRANSPARENT
                    },
                    border: {
                        default: "2px solid " + MrdColor.GRUEN,
                        hover: "2px solid " + MrdColor.GRUEN,
                        disabled: "2px solid " + MrdColor.HELLBLAU
                    }
                },
                negative: {
                    text: {
                        default: MrdColor.WEISS,
                        hover: MrdColor.WEISS,
                        disabled: MrdColor.WEISS
                    },
                    background: {
                        default: MrdColor.WARNROT,
                        hover: MrdColor.WARNROT_DARK,
                        disabled: MrdColor.WARNROT_LIGHT
                    },
                    progress: {
                        default: MrdColor.WARNROT_LIGHT
                    }
                },
                neutralLight: {
                    text: {
                        disabled: MrdColor.GRAU_BLAU_LIGHT
                    },
                    background: {
                        default: MrdColor.HELLBLAU,
                        hover: MrdColor.GRAU_BLAU_LIGHT,
                        disabled: MrdColor.HELLBLAU
                    }
                },
                neutralHard: {
                    text: {
                        disabled: MrdColor.GRAU_BLAU_LIGHT
                    },
                    border: {
                        default: "2px solid " + MrdColor.GRAU_BLAU,
                        hover: "2px solid " + MrdColor.GRAU_BLAU,
                        disabled: "2px solid " + MrdColor.GRAU_BLAU_LIGHT
                    }
                },
                textOnlyDarkHover: {
                    text: {
                        hover: MrdColor.WEISS
                    },
                    background: {
                        hover: MrdColor.GRAU_BLAU_LIGHT
                    }
                },
                small: {
                    padding: "8px 16px",
                    borderRadius: "5px",
                    minHeight: "38px",
                    textIconGap: "7px",
                    font: {
                        weight: "400"
                    },
                    iconSize: "16px",
                    iconSizeNumber: 16
                },
                icon: {
                    padding: "4px",
                    borderRadius: "50%",
                    minHeight: "32px",
                    iconSize: "24px",
                    iconSizeNumber: 24,
                    diameter: "32px"
                },
                fullIcon: {
                    padding: "0",
                    borderRadius: "50%",
                    minHeight: "32px",
                    iconSize: "32px",
                    iconSizeNumber: 32,
                    diameter: "32px"
                },
                definedButtons: {
                    bearbeiten: {
                        text: 'Bearbeiten',
                        theme: MrdSButtonType.NEUTRAL_HARD,
                        icon: { symbol: IconName.BEARBEITEN, outer: 'outline' }
                    },
                    speichern: {
                        text: 'Speichern',
                        theme: MrdSButtonType.PRIMARY,
                        icon: { symbol: IconName.CHECK, outer: 'outline' }
                    },
                    abbrechen: {
                        text: 'Abbrechen',
                        theme: MrdSButtonType.NEUTRAL_LIGHT,
                        icon: { symbol: IconName.SCHLIESSEN, outer: 'outline' }
                    },
                    schliessenIcon: {
                        theme: MrdSButtonType.TEXT_ONLY,
                        icon: { symbol: IconName.SCHLIESSEN, outer: 'outline' }
                    },
                    loeschen: {
                        text: 'Löschen',
                        theme: MrdSButtonType.NEGATIVE,
                        icon: { symbol: IconName.LOESCHEN, outer: 'outline' }
                    },
                    hinzufuegen: {
                        text: 'Hinzufügen',
                        theme: MrdSButtonType.NEUTRAL_HARD,
                        iconEnd: false,
                        icon: { symbol: IconName.PLUS, outer: 'outline' }
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
            },
            toggleSwitch: {
                width: "64px",
                height: "28px",
                bgColor: "#68b022",
                bgNeutralColor: "#78787833",
                knobColor: "#ffffff",
                knobNeutralColor: "#ffffff",
                bgDisabledColor: "#dfdfdf",
                knobDisabledColor: "#f3f3f3",
                slim: {
                    width: "40px",
                    height: "24px",
                    trackHeight: "12px",
                    knobBorder: "1px solid #293D4F"
                }
            },
            list: {
                itemSize: 48,
                selectedBackgroundColor: "#8fbc62",
                selectedTextColor: "#ffffff",
                hoverColor: "#e7e7e7",
                dividerColor: "#0000001f"
            },
            toolbar: {
                height: "56px",
                padding: "0 16px",
                fontSize: "20px",
                fontWeight: "500",
                backgroundColor: "#f5f5f5",
                textColor: "#000000de",
                green: {
                    background: "#8fbc62",
                    text: "#f5f5f5"
                },
                grey: {
                    background: "#e7e7e7",
                    text: "#494949"
                },
                blue: {
                    background: "#293D4F",
                    text: "#ffffff"
                }
            },
            sidenav: {
                breakpoint: 1024,
                width: "100%",
                maxWidth: "550px"
            },
            icon: {
                size: "24px"
            },
            expansionPanel: {
                headerHeight: "56px",
                headerPadding: "0 24px",
                headerBackground: "#ffffff",
                headerColor: "#494949",
                background: "#ffffff",
                animationDuration: "225ms"
            },
            sort: {
                arrowSize: "16px"
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQWtCLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZFLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFdEMsTUFBTSxPQUFPLFVBQVU7SUFFYixNQUFNLENBQUMsTUFBTSxDQUFrQjtJQUUvQixNQUFNLENBQUMsWUFBWSxDQUFrQjtJQUV0QyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQXNCO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU0sTUFBTSxDQUFDLFNBQVM7UUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUVwQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7UUFDNUIsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBUSxFQUFFLE1BQVc7UUFDL0MsS0FBSyxNQUFNLENBQUMs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Q0QsSUFBSSxFQUFFO29CQUNKLFVBQVUsRUFBRSxTQUFTO29CQUNyQixJQUFJLEVBQUUsU0FBUztpQkFDaEI7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLFVBQVUsRUFBRSxTQUFTO29CQUNyQixJQUFJLEVBQUUsU0FBUztpQkFDaEI7YUFDRjtZQUNELE9BQU8sRUFBRTtnQkFDUCxVQUFVLEVBQUUsSUFBSTtnQkFDaEIsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsUUFBUSxFQUFFLE9BQU87YUFDbEI7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLE1BQU07YUFDYjtZQUNELGNBQWMsRUFBRTtnQkFDZCxZQUFZLEVBQUUsTUFBTTtnQkFDcEIsYUFBYSxFQUFFLFFBQVE7Z0JBQ3ZCLGdCQUFnQixFQUFFLFNBQVM7Z0JBQzNCLFdBQVcsRUFBRSxTQUFTO2dCQUN0QixVQUFVLEVBQUUsU0FBUztnQkFDckIsaUJBQWlCLEVBQUUsT0FBTzthQUMzQjtZQUNELElBQUksRUFBRTtnQkFDSixTQUFTLEVBQUUsTUFBTTthQUNsQjtTQUNGLENBQUE7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNcmRDb2xvciB9IGZyb20gXCIuLi9lbnVtL2NvbG9yLmVudW1cIjtcclxuaW1wb3J0IHsgTXJkQ29uZmlnTW9kZWwsIE1yZFNCdXR0b25UeXBlIH0gZnJvbSBcIi4uL21vZGVsL2NvbmZpZy5tb2RlbFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQgeyBJY29uTmFtZSB9IGZyb20gXCIuL2ljb24tbGliXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnVXRpbCB7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGNvbmZpZz86IE1yZENvbmZpZ01vZGVsO1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBjdXN0b21Db25maWc/OiBNcmRDb25maWdNb2RlbDtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBzZXRDb25maWcoY29uZmlnOiBNcmRDb25maWdNb2RlbCkge1xyXG4gICAgdGhpcy5jb25maWcgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmN1c3RvbUNvbmZpZyA9IGNvbmZpZztcclxuICAgIHRoaXMuZ2V0Q29uZmlnKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldENvbmZpZygpIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZykge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWc7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRlZmF1bHRDb25maWcgPSB0aGlzLmJhc2VDb25maWc7XHJcblxyXG4gICAgaWYgKHRoaXMuY3VzdG9tQ29uZmlnKSB7XHJcbiAgICAgIHRoaXMuZXh0ZW5kT2JqZWN0KGRlZmF1bHRDb25maWcsIHRoaXMuY3VzdG9tQ29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvbmZpZyA9IGRlZmF1bHRDb25maWc7XHJcbiAgICByZXR1cm4gZGVmYXVsdENvbmZpZztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGV4dGVuZE9iamVjdChvYmo6IGFueSwgZXh0T2JqOiBhbnkpOiBhbnkge1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZXh0T2JqKSkge1xyXG4gICAgICAvLyBGdW5rdGlvbmVuICh6LiBCLiBpY29uR3JvdXApIHNpbmQgV2VydGUsIGtlaW5lIHp1IG1pc2NoZW5kZW4gT2JqZWt0ZTsgZmVobGVuZGUgWndlaWdlIHdlcmRlbiBuZXUgYW5nZWxlZ3RcclxuICAgICAgaWYgKF8uaXNPYmplY3QodmFsdWUpICYmICFfLmlzQXJyYXkodmFsdWUpICYmICFfLmlzRnVuY3Rpb24odmFsdWUpKSB7XHJcbiAgICAgICAgb2JqW2tleV0gPSB0aGlzLmV4dGVuZE9iamVjdChfLmlzT2JqZWN0KG9ialtrZXldKSAmJiAhXy5pc0Z1bmN0aW9uKG9ialtrZXldKSA/IG9ialtrZXldIDoge30sIHZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0TW9zdFNwZWNpZmljVmFsdWUoZW50cnk6IHN0cmluZ1tdKTogYW55IHtcclxuICAgIGxldCB0cmVlOiBzdHJpbmdbXSA9IGVudHJ5LnNsaWNlKCk7XHJcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZyBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xyXG4gICAgd2hpbGUodHJlZS5sZW5ndGggPiAwICYmIF8uaXNPYmplY3QoY29uZmlnW3RyZWVbMF1dKSkge1xyXG4gICAgICB0cmVlID0gdHJlZS5zbGljZSgxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGdldCBiYXNlQ29uZmlnKCk6IE1yZENvbmZpZ01vZGVsIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJhc2VGb250OiB7XHJcbiAgICAgICAgc2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgICAgd2VpZ2h0OiBcIjQwMFwiLFxyXG4gICAgICAgIGZhbWlseTogXCJMYXRvLHNhbnMtc2VyaWZcIlxyXG4gICAgICB9LFxyXG4gICAgICBiYXNlQ29sb3JzOiB7XHJcbiAgICAgICAgcHJpbWFyeTogXCIjNjhiMDIyXCIsXHJcbiAgICAgICAgYWNjZW50OiBcIiMyOTNENEZcIixcclxuICAgICAgICB3YXJuOiBcIiNiMDAxMjJcIixcclxuICAgICAgICBkaXNhYmxlZDogXCIjYWZhNmE2XCJcclxuICAgICAgfSxcclxuICAgICAgZm9ybUZpZWxkOiB7XHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjdweFwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1c1JvdW5kZWQ6IFwiNzBweFwiLFxyXG5cclxuICAgICAgICBmaWxsOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0Q4REZFODgwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICBjb2xvcjogXCIjMjkzZDRmXCJcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBidXR0b246IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICB0ZXh0TGlnaHRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgdGV4dERhcmtDb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgaG92ZXJDb2xvcjogXCIjZDNkM2QzNjFcIixcclxuICAgICAgICBhY3RpdmVDb2xvcjogXCIjZDNkM2QzXCIsXHJcbiAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgIHRleHQ6IFwiI2E2YTZhNlwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYm9yZGVyOiBcIjAgdW5zZXQgdW5zZXRcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcblxyXG4gICAgICAgIG1pbkhlaWdodDogXCIzNnB4XCIsXHJcbiAgICAgICAgZm9udFNpemU6IFwiMC45ZW1cIixcclxuICAgICAgICBpY29uU2l6ZTogXCIxZW1cIixcclxuXHJcbiAgICAgICAgb3V0bGluZToge1xyXG4gICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZDNkM2QzXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBmbGF0OiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgICAgdGV4dDogXCIjYTZhNmE2XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2QzZDNkM1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByYWlzZWQ6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICBkaXNhYmxlZDoge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIiNhNmE2YTZcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZDNkM2QzXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGljb246IHtcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgIGZvbnRTaXplOiBcIjFlbVwiLFxyXG4gICAgICAgICAgZGlhbWV0ZXI6IFwiM2VtXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBmYWI6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICBkaXNhYmxlZDoge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIiNhNmE2YTZcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZDNkM2QzXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIixcclxuICAgICAgICAgIGRpYW1ldGVyOiBcIjRlbVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWluaUZhYjoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgIGRpc2FibGVkOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiI2E2YTZhNlwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNkM2QzZDNcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgIGZvbnRTaXplOiBcIjFlbVwiLFxyXG4gICAgICAgICAgZGlhbWV0ZXI6IFwiM2VtXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB0b2dnbGU6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICB1bnNlbGVjdGVkQmdDb2xvcjogXCIjYzhjYWM2XCIsXHJcbiAgICAgICAgICBkaXNhYmxlZDoge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIiNhNmE2YTZcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZDNkM2QzXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNCdXR0b246IHtcclxuICAgICAgICB0ZXh0OiB7XHJcbiAgICAgICAgICBkZWZhdWx0OiBNcmRDb2xvci5HUkFVX0JMQVUsXHJcbiAgICAgICAgICBob3ZlcjogTXJkQ29sb3IuR1JBVV9CTEFVLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IE1yZENvbG9yLkhFTExCTEFVXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgICBkZWZhdWx0OiBNcmRDb2xvci5UUkFOU1BBUkVOVCxcclxuICAgICAgICAgIGhvdmVyOiBNcmRDb2xvci5IRUxMQkxBVSxcclxuICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5UUkFOU1BBUkVOVFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvZ3Jlc3M6IHtcclxuICAgICAgICAgIGRlZmF1bHQ6IE1yZENvbG9yLkdSVUVOLFxyXG4gICAgICAgICAgaG92ZXI6IE1yZENvbG9yLkdSVUVOLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IE1yZENvbG9yLkdSQVVfQkxBVV9MSUdIVFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9yZGVyOiBcInVuc2V0XCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIxNnB4IDMwcHhcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxyXG4gICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgIHdlaWdodDogXCI5MDBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWluSGVpZ2h0OiBcIjU2cHhcIixcclxuICAgICAgICBpY29uU2l6ZTogXCIyNHB4XCIsXHJcbiAgICAgICAgaWNvblNpemVOdW1iZXI6IDI0LFxyXG4gICAgICAgIGRpYW1ldGVyOiBcInVuc2V0XCIsXHJcbiAgICAgICAgdGV4dEljb25HYXA6IFwiMTBweFwiLFxyXG5cclxuICAgICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgICB0ZXh0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IE1yZENvbG9yLldFSVNTLFxyXG4gICAgICAgICAgICBob3ZlcjogTXJkQ29sb3IuV0VJU1MsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5HUkFVX0JMQVVfTElHSFRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IE1yZENvbG9yLkdSVUVOLFxyXG4gICAgICAgICAgICBob3ZlcjogTXJkQ29sb3IuR1JVRU5fREFSSyxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IE1yZENvbG9yLkhFTExCTEFVXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcHJvZ3Jlc3M6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogTXJkQ29sb3IuR1JVRU5fTElHSFRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBNcmRDb2xvci5HUlVFTixcclxuICAgICAgICAgICAgaG92ZXI6IE1yZENvbG9yLkdSVUVOLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogTXJkQ29sb3IuSEVMTEJMQVVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IE1yZENvbG9yLlRSQU5TUEFSRU5ULFxyXG4gICAgICAgICAgICBob3ZlcjogTXJkQ29sb3IuR1JVRU5fVFJBTlNQQVJFTlQsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5UUkFOU1BBUkVOVFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvcmRlcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBcIjJweCBzb2xpZCBcIiArIE1yZENvbG9yLkdSVUVOLFxyXG4gICAgICAgICAgICBob3ZlcjogXCIycHggc29saWQgXCIgKyBNcmRDb2xvci5HUlVFTixcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IFwiMnB4IHNvbGlkIFwiICsgTXJkQ29sb3IuSEVMTEJMQVVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG5lZ2F0aXZlOiB7XHJcbiAgICAgICAgICB0ZXh0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IE1yZENvbG9yLldFSVNTLFxyXG4gICAgICAgICAgICBob3ZlcjogTXJkQ29sb3IuV0VJU1MsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5XRUlTU1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogTXJkQ29sb3IuV0FSTlJPVCxcclxuICAgICAgICAgICAgaG92ZXI6IE1yZENvbG9yLldBUk5ST1RfREFSSyxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IE1yZENvbG9yLldBUk5ST1RfTElHSFRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwcm9ncmVzczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBNcmRDb2xvci5XQVJOUk9UX0xJR0hUXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBuZXV0cmFsTGlnaHQ6IHtcclxuICAgICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IE1yZENvbG9yLkdSQVVfQkxBVV9MSUdIVFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogTXJkQ29sb3IuSEVMTEJMQVUsXHJcbiAgICAgICAgICAgIGhvdmVyOiBNcmRDb2xvci5HUkFVX0JMQVVfTElHSFQsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5IRUxMQkxBVVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmV1dHJhbEhhcmQ6IHtcclxuICAgICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IE1yZENvbG9yLkdSQVVfQkxBVV9MSUdIVFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvcmRlcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBcIjJweCBzb2xpZCBcIiArIE1yZENvbG9yLkdSQVVfQkxBVSxcclxuICAgICAgICAgICAgaG92ZXI6IFwiMnB4IHNvbGlkIFwiICsgTXJkQ29sb3IuR1JBVV9CTEFVLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogXCIycHggc29saWQgXCIgKyBNcmRDb2xvci5HUkFVX0JMQVVfTElHSFRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHRleHRPbmx5RGFya0hvdmVyOiB7XHJcbiAgICAgICAgICB0ZXh0OiB7XHJcbiAgICAgICAgICAgIGhvdmVyOiBNcmRDb2xvci5XRUlTU1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICAgICAgaG92ZXI6IE1yZENvbG9yLkdSQVVfQkxBVV9MSUdIVFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNtYWxsOiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiBcIjhweCAxNnB4XCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFwiMzhweFwiLFxyXG4gICAgICAgICAgdGV4dEljb25HYXA6IFwiN3B4XCIsXHJcbiAgICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgIHdlaWdodDogXCI0MDBcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGljb25TaXplOiBcIjE2cHhcIixcclxuICAgICAgICAgIGljb25TaXplTnVtYmVyOiAxNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgcGFkZGluZzogXCI0cHhcIixcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgIG1pbkhlaWdodDogXCIzMnB4XCIsXHJcbiAgICAgICAgICBpY29uU2l6ZTogXCIyNHB4XCIsXHJcbiAgICAgICAgICBpY29uU2l6ZU51bWJlcjogMjQsXHJcbiAgICAgICAgICBkaWFtZXRlcjogXCIzMnB4XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bGxJY29uOiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiBcIjBcIixcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgIG1pbkhlaWdodDogXCIzMnB4XCIsXHJcbiAgICAgICAgICBpY29uU2l6ZTogXCIzMnB4XCIsXHJcbiAgICAgICAgICBpY29uU2l6ZU51bWJlcjogMzIsXHJcbiAgICAgICAgICBkaWFtZXRlcjogXCIzMnB4XCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkZWZpbmVkQnV0dG9uczoge1xyXG4gICAgICAgICAgYmVhcmJlaXRlbjoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnQmVhcmJlaXRlbicsXHJcbiAgICAgICAgICAgIHRoZW1lOiBNcmRTQnV0dG9uVHlwZS5ORVVUUkFMX0hBUkQsXHJcbiAgICAgICAgICAgIGljb246IHtzeW1ib2w6IEljb25OYW1lLkJFQVJCRUlURU4sIG91dGVyOiAnb3V0bGluZSd9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3BlaWNoZXJuOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdTcGVpY2hlcm4nLFxyXG4gICAgICAgICAgICB0aGVtZTogTXJkU0J1dHRvblR5cGUuUFJJTUFSWSxcclxuICAgICAgICAgICAgaWNvbjoge3N5bWJvbDogSWNvbk5hbWUuQ0hFQ0ssIG91dGVyOiAnb3V0bGluZSd9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYWJicmVjaGVuOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdBYmJyZWNoZW4nLFxyXG4gICAgICAgICAgICB0aGVtZTogTXJkU0J1dHRvblR5cGUuTkVVVFJBTF9MSUdIVCxcclxuICAgICAgICAgICAgaWNvbjoge3N5bWJvbDogSWNvbk5hbWUuU0NITElFU1NFTiwgb3V0ZXI6ICdvdXRsaW5lJ31cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzY2hsaWVzc2VuSWNvbjoge1xyXG4gICAgICAgICAgICB0aGVtZTogTXJkU0J1dHRvblR5cGUuVEVYVF9PTkxZLFxyXG4gICAgICAgICAgICBpY29uOiB7c3ltYm9sOiBJY29uTmFtZS5TQ0hMSUVTU0VOLCBvdXRlcjogJ291dGxpbmUnfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGxvZXNjaGVuOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdMw7ZzY2hlbicsXHJcbiAgICAgICAgICAgIHRoZW1lOiBNcmRTQnV0dG9uVHlwZS5ORUdBVElWRSxcclxuICAgICAgICAgICAgaWNvbjoge3N5bWJvbDogSWNvbk5hbWUuTE9FU0NIRU4sIG91dGVyOiAnb3V0bGluZSd9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaGluenVmdWVnZW46IHtcclxuICAgICAgICAgICAgdGV4dDogJ0hpbnp1ZsO8Z2VuJyxcclxuICAgICAgICAgICAgdGhlbWU6IE1yZFNCdXR0b25UeXBlLk5FVVRSQUxfSEFSRCxcclxuICAgICAgICAgICAgaWNvbkVuZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGljb246IHtzeW1ib2w6IEljb25OYW1lLlBMVVMsIG91dGVyOiAnb3V0bGluZSd9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBnZW9JY29uOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiNDBweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCI0MHB4XCIsXHJcbiAgICAgICAgbWFyZ2luOiBcIjVweFwiLFxyXG4gICAgICAgIHRyYW5zaXRpb25UaW1lOiBcIjFzXCIsXHJcbiAgICAgICAgbWFpbkNvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgICBtYWluU2VsZWN0ZWRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgbWFpbk9wYWNpdHk6IDAuMixcclxuICAgICAgICBtYWluU2VsZWN0ZWRPcGFjaXR5OiAxLFxyXG4gICAgICAgIGJhY2tDb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgYmFja1NlbGVjdGVkQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIGJhY2tPcGFjaXR5OiAwLjIsXHJcbiAgICAgICAgYmFja1NlbGVjdGVkT3BhY2l0eTogMC4yLFxyXG4gICAgICAgIG92ZXJsYXlDb2xvcjogXCIjOGViZjYyXCIsXHJcbiAgICAgICAgb3ZlcmxheVNlbGVjdGVkQ29sb3I6IFwiI2ZmYTUwMFwiLFxyXG4gICAgICAgIG92ZXJsYXlPcGFjaXR5OiAxLFxyXG4gICAgICAgIG92ZXJsYXlTZWxlY3RlZE9wYWNpdHk6IDFcclxuICAgICAgfSxcclxuICAgICAgY2hlY2tib3g6IHtcclxuICAgICAgICBjaGVja2JveFNpemU6IFwiMTZweFwiLFxyXG4gICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgIHVuc2VsZWN0ZWQ6IHtcclxuICAgICAgICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgIHRleHQ6IFwiIzAwMDAwMFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZWxlY3RlZDoge1xyXG4gICAgICAgICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjNjhiMDIyXCIsXHJcbiAgICAgICAgICAgICAgdGV4dDogXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgdG9nZ2xlU3dpdGNoOiB7ICBcclxuICAgICAgICB3aWR0aDogXCI2NHB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjI4cHhcIixcclxuICAgICAgICBiZ0NvbG9yOiBcIiM2OGIwMjJcIixcclxuICAgICAgICBiZ05ldXRyYWxDb2xvcjogXCIjNzg3ODc4MzNcIixcclxuICAgICAgICBrbm9iQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIGtub2JOZXV0cmFsQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIGJnRGlzYWJsZWRDb2xvcjogXCIjZGZkZmRmXCIsXHJcbiAgICAgICAga25vYkRpc2FibGVkQ29sb3I6IFwiI2YzZjNmM1wiLFxyXG4gICAgICAgIHNsaW06IHtcclxuICAgICAgICAgIHdpZHRoOiBcIjQwcHhcIixcclxuICAgICAgICAgIGhlaWdodDogXCIyNHB4XCIsXHJcbiAgICAgICAgICB0cmFja0hlaWdodDogXCIxMnB4XCIsXHJcbiAgICAgICAgICBrbm9iQm9yZGVyOiBcIjFweCBzb2xpZCAjMjkzRDRGXCJcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGxpc3Q6IHtcclxuICAgICAgICBpdGVtU2l6ZTogNDgsXHJcbiAgICAgICAgc2VsZWN0ZWRCYWNrZ3JvdW5kQ29sb3I6IFwiIzhmYmM2MlwiLFxyXG4gICAgICAgIHNlbGVjdGVkVGV4dENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBob3ZlckNvbG9yOiBcIiNlN2U3ZTdcIixcclxuICAgICAgICBkaXZpZGVyQ29sb3I6IFwiIzAwMDAwMDFmXCJcclxuICAgICAgfSxcclxuICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgIGhlaWdodDogXCI1NnB4XCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIwIDE2cHhcIixcclxuICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXHJcbiAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y1ZjVmNVwiLFxyXG4gICAgICAgIHRleHRDb2xvcjogXCIjMDAwMDAwZGVcIixcclxuICAgICAgICBncmVlbjoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogXCIjOGZiYzYyXCIsXHJcbiAgICAgICAgICB0ZXh0OiBcIiNmNWY1ZjVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ3JleToge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogXCIjZTdlN2U3XCIsXHJcbiAgICAgICAgICB0ZXh0OiBcIiM0OTQ5NDlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmx1ZToge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogXCIjMjkzRDRGXCIsXHJcbiAgICAgICAgICB0ZXh0OiBcIiNmZmZmZmZcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgc2lkZW5hdjoge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIG1heFdpZHRoOiBcIjU1MHB4XCJcclxuICAgICAgfSxcclxuICAgICAgaWNvbjoge1xyXG4gICAgICAgIHNpemU6IFwiMjRweFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGV4cGFuc2lvblBhbmVsOiB7XHJcbiAgICAgICAgaGVhZGVySGVpZ2h0OiBcIjU2cHhcIixcclxuICAgICAgICBoZWFkZXJQYWRkaW5nOiBcIjAgMjRweFwiLFxyXG4gICAgICAgIGhlYWRlckJhY2tncm91bmQ6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIGhlYWRlckNvbG9yOiBcIiM0OTQ5NDlcIixcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogXCIyMjVtc1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHNvcnQ6IHtcclxuICAgICAgICBhcnJvd1NpemU6IFwiMTZweFwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19