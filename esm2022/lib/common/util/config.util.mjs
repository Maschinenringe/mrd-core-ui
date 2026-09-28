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
                    default: MrdColor.MR_GRUEN,
                    hover: MrdColor.MR_GRUEN,
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
                        default: MrdColor.MR_GRUEN,
                        hover: MrdColor.MR_GRUEN_DARK,
                        disabled: MrdColor.HELLBLAU
                    },
                    progress: {
                        default: MrdColor.MR_GRUEN_LIGHT
                    }
                },
                secondary: {
                    text: {
                        default: MrdColor.MR_GRUEN,
                        hover: MrdColor.MR_GRUEN,
                        disabled: MrdColor.HELLBLAU
                    },
                    background: {
                        default: MrdColor.TRANSPARENT,
                        hover: MrdColor.MR_GRUEN_TRANSPARENT,
                        disabled: MrdColor.TRANSPARENT
                    },
                    border: {
                        default: "2px solid " + MrdColor.MR_GRUEN,
                        hover: "2px solid " + MrdColor.MR_GRUEN,
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
                knobDisabledColor: "#f3f3f3"
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
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQWtCLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZFLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFdEMsTUFBTSxPQUFPLFVBQVU7SUFFYixNQUFNLENBQUMsTUFBTSxDQUFrQjtJQUUvQixNQUFNLENBQUMsWUFBWSxDQUFrQjtJQUV0QyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQXNCO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU0sTUFBTSxDQUFDLFNBQVM7UUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUVwQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7UUFDNUIsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBUSxFQUFFLE1BQVc7UUFDL0MsS0FBSyxNQUFNLENBQUMs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SSxFQUFFLFNBQVM7aUJBQ2hCO2FBQ0Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRSxPQUFPO2FBQ2xCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRixDQUFBO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXJkQ29sb3IgfSBmcm9tIFwiLi4vZW51bS9jb2xvci5lbnVtXCI7XHJcbmltcG9ydCB7IE1yZENvbmZpZ01vZGVsLCBNcmRTQnV0dG9uVHlwZSB9IGZyb20gXCIuLi9tb2RlbC9jb25maWcubW9kZWxcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuaW1wb3J0IHsgSWNvbk5hbWUgfSBmcm9tIFwiLi9pY29uLWxpYlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ1V0aWwge1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBjb25maWc/OiBNcmRDb25maWdNb2RlbDtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgY3VzdG9tQ29uZmlnPzogTXJkQ29uZmlnTW9kZWw7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc2V0Q29uZmlnKGNvbmZpZzogTXJkQ29uZmlnTW9kZWwpIHtcclxuICAgIHRoaXMuY29uZmlnID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5jdXN0b21Db25maWcgPSBjb25maWc7XHJcbiAgICB0aGlzLmdldENvbmZpZygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRDb25maWcoKSB7XHJcbiAgICBpZiAodGhpcy5jb25maWcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkZWZhdWx0Q29uZmlnID0gdGhpcy5iYXNlQ29uZmlnO1xyXG5cclxuICAgIGlmICh0aGlzLmN1c3RvbUNvbmZpZykge1xyXG4gICAgICB0aGlzLmV4dGVuZE9iamVjdChkZWZhdWx0Q29uZmlnLCB0aGlzLmN1c3RvbUNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb25maWcgPSBkZWZhdWx0Q29uZmlnO1xyXG4gICAgcmV0dXJuIGRlZmF1bHRDb25maWc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBleHRlbmRPYmplY3Qob2JqOiBhbnksIGV4dE9iajogYW55KTogYW55IHtcclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGV4dE9iaikpIHtcclxuICAgICAgLy8gRnVua3Rpb25lbiAoei4gQi4gaWNvbkdyb3VwKSBzaW5kIFdlcnRlLCBrZWluZSB6dSBtaXNjaGVuZGVuIE9iamVrdGU7IGZlaGxlbmRlIFp3ZWlnZSB3ZXJkZW4gbmV1IGFuZ2VsZWd0XHJcbiAgICAgIGlmIChfLmlzT2JqZWN0KHZhbHVlKSAmJiAhXy5pc0FycmF5KHZhbHVlKSAmJiAhXy5pc0Z1bmN0aW9uKHZhbHVlKSkge1xyXG4gICAgICAgIG9ialtrZXldID0gdGhpcy5leHRlbmRPYmplY3QoXy5pc09iamVjdChvYmpba2V5XSkgJiYgIV8uaXNGdW5jdGlvbihvYmpba2V5XSkgPyBvYmpba2V5XSA6IHt9LCB2YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldE1vc3RTcGVjaWZpY1ZhbHVlKGVudHJ5OiBzdHJpbmdbXSk6IGFueSB7XHJcbiAgICBsZXQgdHJlZTogc3RyaW5nW10gPSBlbnRyeS5zbGljZSgpO1xyXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWcgYXMgUmVjb3JkPHN0cmluZywgYW55PjtcclxuICAgIHdoaWxlKHRyZWUubGVuZ3RoID4gMCAmJiBfLmlzT2JqZWN0KGNvbmZpZ1t0cmVlWzBdXSkpIHtcclxuICAgICAgdHJlZSA9IHRyZWUuc2xpY2UoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBnZXQgYmFzZUNvbmZpZygpOiBNcmRDb25maWdNb2RlbCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiYXNlRm9udDoge1xyXG4gICAgICAgIHNpemU6IFwiMTZweFwiLFxyXG4gICAgICAgIHdlaWdodDogXCI0MDBcIixcclxuICAgICAgICBmYW1pbHk6IFwiTGF0byxzYW5zLXNlcmlmXCJcclxuICAgICAgfSxcclxuICAgICAgYmFzZUNvbG9yczoge1xyXG4gICAgICAgIHByaW1hcnk6IFwiIzY4YjAyMlwiLFxyXG4gICAgICAgIGFjY2VudDogXCIjMjkzRDRGXCIsXHJcbiAgICAgICAgd2FybjogXCIjYjAwMTIyXCIsXHJcbiAgICAgICAgZGlzYWJsZWQ6IFwiI2FmYTZhNlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1GaWVsZDoge1xyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI3cHhcIixcclxuICAgICAgICBib3JkZXJSYWRpdXNSb3VuZGVkOiBcIjcwcHhcIixcclxuXHJcbiAgICAgICAgZmlsbDoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNEOERGRTg4MFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgY29sb3I6IFwiIzI5M2Q0ZlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgdGV4dExpZ2h0Q29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIHRleHREYXJrQ29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgIGhvdmVyQ29sb3I6IFwiI2QzZDNkMzYxXCIsXHJcbiAgICAgICAgYWN0aXZlQ29sb3I6IFwiI2QzZDNkM1wiLFxyXG4gICAgICAgIGRpc2FibGVkOiB7XHJcbiAgICAgICAgICB0ZXh0OiBcIiNhNmE2YTZcIixcclxuICAgICAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGJvcmRlcjogXCIwIHVuc2V0IHVuc2V0XCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxyXG5cclxuICAgICAgICBtaW5IZWlnaHQ6IFwiMzZweFwiLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjAuOWVtXCIsXHJcbiAgICAgICAgaWNvblNpemU6IFwiMWVtXCIsXHJcblxyXG4gICAgICAgIG91dGxpbmU6IHtcclxuICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2QzZDNkM1wiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZmxhdDoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgIGRpc2FibGVkOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiI2E2YTZhNlwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNkM2QzZDNcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmFpc2VkOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgICAgdGV4dDogXCIjYTZhNmE2XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2QzZDNkM1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIixcclxuICAgICAgICAgIGRpYW1ldGVyOiBcIjNlbVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZmFiOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgICAgdGV4dDogXCIjYTZhNmE2XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2QzZDNkM1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgZm9udFNpemU6IFwiMWVtXCIsXHJcbiAgICAgICAgICBkaWFtZXRlcjogXCI0ZW1cIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1pbmlGYWI6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICBkaXNhYmxlZDoge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIiNhNmE2YTZcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZDNkM2QzXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIixcclxuICAgICAgICAgIGRpYW1ldGVyOiBcIjNlbVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgdW5zZWxlY3RlZEJnQ29sb3I6IFwiI2M4Y2FjNlwiLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgICAgdGV4dDogXCIjYTZhNmE2XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2QzZDNkM1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBzQnV0dG9uOiB7XHJcbiAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgZGVmYXVsdDogTXJkQ29sb3IuR1JBVV9CTEFVLFxyXG4gICAgICAgICAgaG92ZXI6IE1yZENvbG9yLkdSQVVfQkxBVSxcclxuICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5IRUxMQkxBVVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgICAgZGVmYXVsdDogTXJkQ29sb3IuVFJBTlNQQVJFTlQsXHJcbiAgICAgICAgICBob3ZlcjogTXJkQ29sb3IuSEVMTEJMQVUsXHJcbiAgICAgICAgICBkaXNhYmxlZDogTXJkQ29sb3IuVFJBTlNQQVJFTlRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb2dyZXNzOiB7XHJcbiAgICAgICAgICBkZWZhdWx0OiBNcmRDb2xvci5NUl9HUlVFTixcclxuICAgICAgICAgIGhvdmVyOiBNcmRDb2xvci5NUl9HUlVFTixcclxuICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5HUkFVX0JMQVVfTElHSFRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvcmRlcjogXCJ1bnNldFwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMTZweCAzMHB4XCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICB3ZWlnaHQ6IFwiOTAwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1pbkhlaWdodDogXCI1NnB4XCIsXHJcbiAgICAgICAgaWNvblNpemU6IFwiMjRweFwiLFxyXG4gICAgICAgIGljb25TaXplTnVtYmVyOiAyNCxcclxuICAgICAgICBkaWFtZXRlcjogXCJ1bnNldFwiLFxyXG4gICAgICAgIHRleHRJY29uR2FwOiBcIjEwcHhcIixcclxuXHJcbiAgICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBNcmRDb2xvci5XRUlTUyxcclxuICAgICAgICAgICAgaG92ZXI6IE1yZENvbG9yLldFSVNTLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogTXJkQ29sb3IuR1JBVV9CTEFVX0xJR0hUXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBNcmRDb2xvci5NUl9HUlVFTixcclxuICAgICAgICAgICAgaG92ZXI6IE1yZENvbG9yLk1SX0dSVUVOX0RBUkssXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5IRUxMQkxBVVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHByb2dyZXNzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IE1yZENvbG9yLk1SX0dSVUVOX0xJR0hUXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogTXJkQ29sb3IuTVJfR1JVRU4sXHJcbiAgICAgICAgICAgIGhvdmVyOiBNcmRDb2xvci5NUl9HUlVFTixcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IE1yZENvbG9yLkhFTExCTEFVXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBNcmRDb2xvci5UUkFOU1BBUkVOVCxcclxuICAgICAgICAgICAgaG92ZXI6IE1yZENvbG9yLk1SX0dSVUVOX1RSQU5TUEFSRU5ULFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogTXJkQ29sb3IuVFJBTlNQQVJFTlRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib3JkZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogXCIycHggc29saWQgXCIgKyBNcmRDb2xvci5NUl9HUlVFTixcclxuICAgICAgICAgICAgaG92ZXI6IFwiMnB4IHNvbGlkIFwiICsgTXJkQ29sb3IuTVJfR1JVRU4sXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBcIjJweCBzb2xpZCBcIiArIE1yZENvbG9yLkhFTExCTEFVXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBuZWdhdGl2ZToge1xyXG4gICAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBNcmRDb2xvci5XRUlTUyxcclxuICAgICAgICAgICAgaG92ZXI6IE1yZENvbG9yLldFSVNTLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogTXJkQ29sb3IuV0VJU1NcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IE1yZENvbG9yLldBUk5ST1QsXHJcbiAgICAgICAgICAgIGhvdmVyOiBNcmRDb2xvci5XQVJOUk9UX0RBUkssXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5XQVJOUk9UX0xJR0hUXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcHJvZ3Jlc3M6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogTXJkQ29sb3IuV0FSTlJPVF9MSUdIVFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmV1dHJhbExpZ2h0OiB7XHJcbiAgICAgICAgICB0ZXh0OiB7XHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5HUkFVX0JMQVVfTElHSFRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IE1yZENvbG9yLkhFTExCTEFVLFxyXG4gICAgICAgICAgICBob3ZlcjogTXJkQ29sb3IuR1JBVV9CTEFVX0xJR0hULFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogTXJkQ29sb3IuSEVMTEJMQVVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG5ldXRyYWxIYXJkOiB7XHJcbiAgICAgICAgICB0ZXh0OiB7XHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5HUkFVX0JMQVVfTElHSFRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib3JkZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogXCIycHggc29saWQgXCIgKyBNcmRDb2xvci5HUkFVX0JMQVUsXHJcbiAgICAgICAgICAgIGhvdmVyOiBcIjJweCBzb2xpZCBcIiArIE1yZENvbG9yLkdSQVVfQkxBVSxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IFwiMnB4IHNvbGlkIFwiICsgTXJkQ29sb3IuR1JBVV9CTEFVX0xJR0hUXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZXh0T25seURhcmtIb3Zlcjoge1xyXG4gICAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgICBob3ZlcjogTXJkQ29sb3IuV0VJU1NcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgIGhvdmVyOiBNcmRDb2xvci5HUkFVX0JMQVVfTElHSFRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzbWFsbDoge1xyXG4gICAgICAgICAgcGFkZGluZzogXCI4cHggMTZweFwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgbWluSGVpZ2h0OiBcIjM4cHhcIixcclxuICAgICAgICAgIHRleHRJY29uR2FwOiBcIjdweFwiLFxyXG4gICAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICB3ZWlnaHQ6IFwiNDAwXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpY29uU2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgICAgICBpY29uU2l6ZU51bWJlcjogMTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIGljb246IHtcclxuICAgICAgICAgIHBhZGRpbmc6IFwiNHB4XCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFwiMzJweFwiLFxyXG4gICAgICAgICAgaWNvblNpemU6IFwiMjRweFwiLFxyXG4gICAgICAgICAgaWNvblNpemVOdW1iZXI6IDI0LFxyXG4gICAgICAgICAgZGlhbWV0ZXI6IFwiMzJweFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdWxsSWNvbjoge1xyXG4gICAgICAgICAgcGFkZGluZzogXCIwXCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFwiMzJweFwiLFxyXG4gICAgICAgICAgaWNvblNpemU6IFwiMzJweFwiLFxyXG4gICAgICAgICAgaWNvblNpemVOdW1iZXI6IDMyLFxyXG4gICAgICAgICAgZGlhbWV0ZXI6IFwiMzJweFwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZGVmaW5lZEJ1dHRvbnM6IHtcclxuICAgICAgICAgIGJlYXJiZWl0ZW46IHtcclxuICAgICAgICAgICAgdGV4dDogJ0JlYXJiZWl0ZW4nLFxyXG4gICAgICAgICAgICB0aGVtZTogTXJkU0J1dHRvblR5cGUuTkVVVFJBTF9IQVJELFxyXG4gICAgICAgICAgICBpY29uOiB7c3ltYm9sOiBJY29uTmFtZS5CRUFSQkVJVEVOLCBvdXRlcjogJ291dGxpbmUnfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNwZWljaGVybjoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnU3BlaWNoZXJuJyxcclxuICAgICAgICAgICAgdGhlbWU6IE1yZFNCdXR0b25UeXBlLlBSSU1BUlksXHJcbiAgICAgICAgICAgIGljb246IHtzeW1ib2w6IEljb25OYW1lLkNIRUNLLCBvdXRlcjogJ291dGxpbmUnfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGFiYnJlY2hlbjoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnQWJicmVjaGVuJyxcclxuICAgICAgICAgICAgdGhlbWU6IE1yZFNCdXR0b25UeXBlLk5FVVRSQUxfTElHSFQsXHJcbiAgICAgICAgICAgIGljb246IHtzeW1ib2w6IEljb25OYW1lLlNDSExJRVNTRU4sIG91dGVyOiAnb3V0bGluZSd9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2NobGllc3Nlbkljb246IHtcclxuICAgICAgICAgICAgdGhlbWU6IE1yZFNCdXR0b25UeXBlLlRFWFRfT05MWSxcclxuICAgICAgICAgICAgaWNvbjoge3N5bWJvbDogSWNvbk5hbWUuU0NITElFU1NFTiwgb3V0ZXI6ICdvdXRsaW5lJ31cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsb2VzY2hlbjoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnTMO2c2NoZW4nLFxyXG4gICAgICAgICAgICB0aGVtZTogTXJkU0J1dHRvblR5cGUuTkVHQVRJVkUsXHJcbiAgICAgICAgICAgIGljb246IHtzeW1ib2w6IEljb25OYW1lLkxPRVNDSEVOLCBvdXRlcjogJ291dGxpbmUnfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGhpbnp1ZnVlZ2VuOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdIaW56dWbDvGdlbicsXHJcbiAgICAgICAgICAgIHRoZW1lOiBNcmRTQnV0dG9uVHlwZS5ORVVUUkFMX0hBUkQsXHJcbiAgICAgICAgICAgIGljb25FbmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpY29uOiB7c3ltYm9sOiBJY29uTmFtZS5QTFVTLCBvdXRlcjogJ291dGxpbmUnfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZ2VvSWNvbjoge1xyXG4gICAgICAgIHdpZHRoOiBcIjQwcHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLFxyXG4gICAgICAgIG1hcmdpbjogXCI1cHhcIixcclxuICAgICAgICB0cmFuc2l0aW9uVGltZTogXCIxc1wiLFxyXG4gICAgICAgIG1haW5Db2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgbWFpblNlbGVjdGVkQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIG1haW5PcGFjaXR5OiAwLjIsXHJcbiAgICAgICAgbWFpblNlbGVjdGVkT3BhY2l0eTogMSxcclxuICAgICAgICBiYWNrQ29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgIGJhY2tTZWxlY3RlZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBiYWNrT3BhY2l0eTogMC4yLFxyXG4gICAgICAgIGJhY2tTZWxlY3RlZE9wYWNpdHk6IDAuMixcclxuICAgICAgICBvdmVybGF5Q29sb3I6IFwiIzhlYmY2MlwiLFxyXG4gICAgICAgIG92ZXJsYXlTZWxlY3RlZENvbG9yOiBcIiNmZmE1MDBcIixcclxuICAgICAgICBvdmVybGF5T3BhY2l0eTogMSxcclxuICAgICAgICBvdmVybGF5U2VsZWN0ZWRPcGFjaXR5OiAxXHJcbiAgICAgIH0sXHJcbiAgICAgIGNoZWNrYm94OiB7XHJcbiAgICAgICAgY2hlY2tib3hTaXplOiBcIjE2cHhcIixcclxuICAgICAgICBmaWxsOiB7XHJcbiAgICAgICAgICB1bnNlbGVjdGVkOiB7XHJcbiAgICAgICAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgICB0ZXh0OiBcIiMwMDAwMDBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2VsZWN0ZWQ6IHtcclxuICAgICAgICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzY4YjAyMlwiLFxyXG4gICAgICAgICAgICAgIHRleHQ6IFwiI2ZmZmZmZlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRvZ2dsZVN3aXRjaDogeyAgXHJcbiAgICAgICAgd2lkdGg6IFwiNjRweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIyOHB4XCIsXHJcbiAgICAgICAgYmdDb2xvcjogXCIjNjhiMDIyXCIsXHJcbiAgICAgICAgYmdOZXV0cmFsQ29sb3I6IFwiIzc4Nzg3ODMzXCIsXHJcbiAgICAgICAga25vYkNvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBrbm9iTmV1dHJhbENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBiZ0Rpc2FibGVkQ29sb3I6IFwiI2RmZGZkZlwiLFxyXG4gICAgICAgIGtub2JEaXNhYmxlZENvbG9yOiBcIiNmM2YzZjNcIlxyXG4gICAgICB9LFxyXG4gICAgICBsaXN0OiB7XHJcbiAgICAgICAgaXRlbVNpemU6IDQ4LFxyXG4gICAgICAgIHNlbGVjdGVkQmFja2dyb3VuZENvbG9yOiBcIiM4ZmJjNjJcIixcclxuICAgICAgICBzZWxlY3RlZFRleHRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgaG92ZXJDb2xvcjogXCIjZTdlN2U3XCIsXHJcbiAgICAgICAgZGl2aWRlckNvbG9yOiBcIiMwMDAwMDAxZlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICBoZWlnaHQ6IFwiNTZweFwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMCAxNnB4XCIsXHJcbiAgICAgICAgZm9udFNpemU6IFwiMjBweFwiLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmNWY1ZjVcIixcclxuICAgICAgICB0ZXh0Q29sb3I6IFwiIzAwMDAwMGRlXCIsXHJcbiAgICAgICAgZ3JlZW46IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzhmYmM2MlwiLFxyXG4gICAgICAgICAgdGV4dDogXCIjZjVmNWY1XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdyZXk6IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2U3ZTdlN1wiLFxyXG4gICAgICAgICAgdGV4dDogXCIjNDk0OTQ5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJsdWU6IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzI5M0Q0RlwiLFxyXG4gICAgICAgICAgdGV4dDogXCIjZmZmZmZmXCJcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNpZGVuYXY6IHtcclxuICAgICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBtYXhXaWR0aDogXCI1NTBweFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGljb246IHtcclxuICAgICAgICBzaXplOiBcIjI0cHhcIlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==