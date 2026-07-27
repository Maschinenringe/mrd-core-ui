import { MrdColor } from "../enum/color.enum";
import { MrdSButtonType } from "../model/config.model";
import * as _ from 'underscore';
import { PredefinedIconsService } from "../service/predefined-icons.service";
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
                        iconGroup: {
                            default: PredefinedIconsService.BearbeitenOutlineBlau,
                            disabled: PredefinedIconsService.BearbeitenOutlineGrauBlauLight
                        }
                    },
                    speichern: {
                        text: 'Speichern',
                        theme: MrdSButtonType.PRIMARY,
                        iconGroup: {
                            default: PredefinedIconsService.SpeichernOutlineWeiss,
                            disabled: PredefinedIconsService.SpeichernOutlineGrauBlauLight
                        }
                    },
                    abbrechen: {
                        text: 'Abbrechen',
                        theme: MrdSButtonType.NEUTRAL_LIGHT,
                        iconGroup: {
                            default: PredefinedIconsService.SchliessenOutlineBlau,
                            disabled: PredefinedIconsService.SchliessenOutlineGrauBlauLight
                        }
                    },
                    schliessenIcon: {
                        theme: MrdSButtonType.TEXT_ONLY,
                        iconGroup: {
                            default: PredefinedIconsService.SchliessenOutlineBlau,
                            disabled: PredefinedIconsService.SchliessenOutlineHellblau
                        }
                    },
                    loeschen: {
                        text: 'Löschen',
                        theme: MrdSButtonType.NEGATIVE,
                        iconGroup: {
                            default: PredefinedIconsService.LoeschenOutlineWeiss,
                            disabled: PredefinedIconsService.LoeschenOutlineWeiss
                        }
                    },
                    hinzufuegen: {
                        text: 'Hinzufügen',
                        theme: MrdSButtonType.NEUTRAL_HARD,
                        iconEnd: false,
                        iconGroup: {
                            default: PredefinedIconsService.HinzufuegenOutlineBlau,
                            disabled: PredefinedIconsService.HinzufuegenOutlineGrauBlauLight
                        }
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
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQWtCLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZFLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBRWhDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRzdFLE1BQU0sT0FBTyxVQUFVO0lBRWIsTUFBTSxDQUFDLE1BQU0sQ0FBa0I7SUFFL0IsTUFBTSxDQUFDLFlBQVksQ0FBa0I7SUFFdEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFzQjtRQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxTQUFTO1FBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjtRQUVELElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFcEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO1FBQzVCLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQVEsRUFBRSxNQUFXO1FBQy9DLEtBQUssTUFBTSxD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RUFBRTtvQkFDSixVQUFVLEVBQUU7d0JBQ1YsT0FBTyxFQUFFOzRCQUNQLFVBQVUsRUFBRSxTQUFTOzRCQUNyQixJQUFJLEVBQUUsU0FBUzt5QkFDaEI7cUJBQ0Y7b0JBQ0QsUUFBUSxFQUFFO3dCQUNSLE9BQU8sRUFBRTs0QkFDUCxVQUFVLEVBQUUsU0FBUzs0QkFDckIsSUFBSSxFQUFFLFNBQVM7eUJBQ2hCO3FCQUNGO2lCQUNGO2FBQ0Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osS0FBSyxFQUFFLE1BQU07Z0JBQ2IsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFLFNBQVM7Z0JBQ2xCLGNBQWMsRUFBRSxXQUFXO2dCQUMzQixTQUFTLEVBQUUsU0FBUztnQkFDcEIsZ0JBQWdCLEVBQUUsU0FBUztnQkFDM0IsZUFBZSxFQUFFLFNBQVM7Z0JBQzFCLGlCQUFpQixFQUFFLFNBQVM7YUFDN0I7U0FDRixDQUFBO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXJkQ29sb3IgfSBmcm9tIFwiLi4vZW51bS9jb2xvci5lbnVtXCI7XHJcbmltcG9ydCB7IE1yZENvbmZpZ01vZGVsLCBNcmRTQnV0dG9uVHlwZSB9IGZyb20gXCIuLi9tb2RlbC9jb25maWcubW9kZWxcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuaW1wb3J0IHsgSWNvbkZhY3RvcnlTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2UvaWNvbi1mYWN0b3J5LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUHJlZGVmaW5lZEljb25zU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlL3ByZWRlZmluZWQtaWNvbnMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBJY29uTmFtZSB9IGZyb20gXCIuL2ljb24tbGliXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnVXRpbCB7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGNvbmZpZz86IE1yZENvbmZpZ01vZGVsO1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBjdXN0b21Db25maWc/OiBNcmRDb25maWdNb2RlbDtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBzZXRDb25maWcoY29uZmlnOiBNcmRDb25maWdNb2RlbCkge1xyXG4gICAgdGhpcy5jb25maWcgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmN1c3RvbUNvbmZpZyA9IGNvbmZpZztcclxuICAgIHRoaXMuZ2V0Q29uZmlnKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldENvbmZpZygpIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZykge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWc7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRlZmF1bHRDb25maWcgPSB0aGlzLmJhc2VDb25maWc7XHJcblxyXG4gICAgaWYgKHRoaXMuY3VzdG9tQ29uZmlnKSB7XHJcbiAgICAgIHRoaXMuZXh0ZW5kT2JqZWN0KGRlZmF1bHRDb25maWcsIHRoaXMuY3VzdG9tQ29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvbmZpZyA9IGRlZmF1bHRDb25maWc7XHJcbiAgICByZXR1cm4gZGVmYXVsdENvbmZpZztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGV4dGVuZE9iamVjdChvYmo6IGFueSwgZXh0T2JqOiBhbnkpOiBhbnkge1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZXh0T2JqKSkge1xyXG4gICAgICBpZiAoXy5pc09iamVjdCh2YWx1ZSkgJiYgIV8uaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICBvYmpba2V5XSA9IHRoaXMuZXh0ZW5kT2JqZWN0KG9ialtrZXldLCB2YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldE1vc3RTcGVjaWZpY1ZhbHVlKGVudHJ5OiBzdHJpbmdbXSk6IGFueSB7XHJcbiAgICBsZXQgdHJlZTogc3RyaW5nW10gPSBlbnRyeS5zbGljZSgpO1xyXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWcgYXMgUmVjb3JkPHN0cmluZywgYW55PjtcclxuICAgIHdoaWxlKHRyZWUubGVuZ3RoID4gMCAmJiBfLmlzT2JqZWN0KGNvbmZpZ1t0cmVlWzBdXSkpIHtcclxuICAgICAgdHJlZSA9IHRyZWUuc2xpY2UoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBnZXQgYmFzZUNvbmZpZygpOiBNcmRDb25maWdNb2RlbCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiYXNlRm9udDoge1xyXG4gICAgICAgIHNpemU6IFwiMTZweFwiLFxyXG4gICAgICAgIHdlaWdodDogXCI0MDBcIixcclxuICAgICAgICBmYW1pbHk6IFwiTGF0byxzYW5zLXNlcmlmXCJcclxuICAgICAgfSxcclxuICAgICAgYmFzZUNvbG9yczoge1xyXG4gICAgICAgIHByaW1hcnk6IFwiIzY4YjAyMlwiLFxyXG4gICAgICAgIGFjY2VudDogXCIjMjkzRDRGXCIsXHJcbiAgICAgICAgd2FybjogXCIjYjAwMTIyXCIsXHJcbiAgICAgICAgZGlzYWJsZWQ6IFwiI2FmYTZhNlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1GaWVsZDoge1xyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI3cHhcIixcclxuICAgICAgICBib3JkZXJSYWRpdXNSb3VuZGVkOiBcIjcwcHhcIixcclxuXHJcbiAgICAgICAgZmlsbDoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNEOERGRTg4MFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgY29sb3I6IFwiIzI5M2Q0ZlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgdGV4dExpZ2h0Q29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIHRleHREYXJrQ29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgIGhvdmVyQ29sb3I6IFwiI2QzZDNkMzYxXCIsXHJcbiAgICAgICAgYWN0aXZlQ29sb3I6IFwiI2QzZDNkM1wiLFxyXG4gICAgICAgIGRpc2FibGVkOiB7XHJcbiAgICAgICAgICB0ZXh0OiBcIiNhNmE2YTZcIixcclxuICAgICAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGJvcmRlcjogXCIwIHVuc2V0IHVuc2V0XCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxyXG5cclxuICAgICAgICBtaW5IZWlnaHQ6IFwiMzZweFwiLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjAuOWVtXCIsXHJcbiAgICAgICAgaWNvblNpemU6IFwiMWVtXCIsXHJcblxyXG4gICAgICAgIG91dGxpbmU6IHtcclxuICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2QzZDNkM1wiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZmxhdDoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgIGRpc2FibGVkOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiI2E2YTZhNlwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNkM2QzZDNcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmFpc2VkOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgICAgdGV4dDogXCIjYTZhNmE2XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2QzZDNkM1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIixcclxuICAgICAgICAgIGRpYW1ldGVyOiBcIjNlbVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZmFiOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgICAgdGV4dDogXCIjYTZhNmE2XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2QzZDNkM1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgZm9udFNpemU6IFwiMWVtXCIsXHJcbiAgICAgICAgICBkaWFtZXRlcjogXCI0ZW1cIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1pbmlGYWI6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICBkaXNhYmxlZDoge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIiNhNmE2YTZcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZDNkM2QzXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIixcclxuICAgICAgICAgIGRpYW1ldGVyOiBcIjNlbVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdG9nZ2xlOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgdW5zZWxlY3RlZEJnQ29sb3I6IFwiI2M4Y2FjNlwiLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgICAgdGV4dDogXCIjYTZhNmE2XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2QzZDNkM1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBzQnV0dG9uOiB7XHJcbiAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgZGVmYXVsdDogTXJkQ29sb3IuR1JBVV9CTEFVLFxyXG4gICAgICAgICAgaG92ZXI6IE1yZENvbG9yLkdSQVVfQkxBVSxcclxuICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5IRUxMQkxBVVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgICAgZGVmYXVsdDogTXJkQ29sb3IuVFJBTlNQQVJFTlQsXHJcbiAgICAgICAgICBob3ZlcjogTXJkQ29sb3IuSEVMTEJMQVUsXHJcbiAgICAgICAgICBkaXNhYmxlZDogTXJkQ29sb3IuVFJBTlNQQVJFTlRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb2dyZXNzOiB7XHJcbiAgICAgICAgICBkZWZhdWx0OiBNcmRDb2xvci5NUl9HUlVFTixcclxuICAgICAgICAgIGhvdmVyOiBNcmRDb2xvci5NUl9HUlVFTixcclxuICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5HUkFVX0JMQVVfTElHSFRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvcmRlcjogXCJ1bnNldFwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMTZweCAzMHB4XCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICB3ZWlnaHQ6IFwiOTAwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1pbkhlaWdodDogXCI1NnB4XCIsXHJcbiAgICAgICAgaWNvblNpemU6IFwiMjRweFwiLFxyXG4gICAgICAgIGljb25TaXplTnVtYmVyOiAyNCxcclxuICAgICAgICBkaWFtZXRlcjogXCJ1bnNldFwiLFxyXG4gICAgICAgIHRleHRJY29uR2FwOiBcIjEwcHhcIixcclxuXHJcbiAgICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBNcmRDb2xvci5XRUlTUyxcclxuICAgICAgICAgICAgaG92ZXI6IE1yZENvbG9yLldFSVNTLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogTXJkQ29sb3IuR1JBVV9CTEFVX0xJR0hUXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBNcmRDb2xvci5NUl9HUlVFTixcclxuICAgICAgICAgICAgaG92ZXI6IE1yZENvbG9yLk1SX0dSVUVOX0RBUkssXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5IRUxMQkxBVVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHByb2dyZXNzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IE1yZENvbG9yLk1SX0dSVUVOX0xJR0hUXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogTXJkQ29sb3IuTVJfR1JVRU4sXHJcbiAgICAgICAgICAgIGhvdmVyOiBNcmRDb2xvci5NUl9HUlVFTixcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IE1yZENvbG9yLkhFTExCTEFVXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBNcmRDb2xvci5UUkFOU1BBUkVOVCxcclxuICAgICAgICAgICAgaG92ZXI6IE1yZENvbG9yLk1SX0dSVUVOX1RSQU5TUEFSRU5ULFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogTXJkQ29sb3IuVFJBTlNQQVJFTlRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib3JkZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogXCIycHggc29saWQgXCIgKyBNcmRDb2xvci5NUl9HUlVFTixcclxuICAgICAgICAgICAgaG92ZXI6IFwiMnB4IHNvbGlkIFwiICsgTXJkQ29sb3IuTVJfR1JVRU4sXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBcIjJweCBzb2xpZCBcIiArIE1yZENvbG9yLkhFTExCTEFVXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBuZWdhdGl2ZToge1xyXG4gICAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBNcmRDb2xvci5XRUlTUyxcclxuICAgICAgICAgICAgaG92ZXI6IE1yZENvbG9yLldFSVNTLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogTXJkQ29sb3IuV0VJU1NcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IE1yZENvbG9yLldBUk5ST1QsXHJcbiAgICAgICAgICAgIGhvdmVyOiBNcmRDb2xvci5XQVJOUk9UX0RBUkssXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5XQVJOUk9UX0xJR0hUXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcHJvZ3Jlc3M6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogTXJkQ29sb3IuV0FSTlJPVF9MSUdIVFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmV1dHJhbExpZ2h0OiB7XHJcbiAgICAgICAgICB0ZXh0OiB7XHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5HUkFVX0JMQVVfTElHSFRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IE1yZENvbG9yLkhFTExCTEFVLFxyXG4gICAgICAgICAgICBob3ZlcjogTXJkQ29sb3IuR1JBVV9CTEFVX0xJR0hULFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogTXJkQ29sb3IuSEVMTEJMQVVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG5ldXRyYWxIYXJkOiB7XHJcbiAgICAgICAgICB0ZXh0OiB7XHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5HUkFVX0JMQVVfTElHSFRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib3JkZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogXCIycHggc29saWQgXCIgKyBNcmRDb2xvci5HUkFVX0JMQVUsXHJcbiAgICAgICAgICAgIGhvdmVyOiBcIjJweCBzb2xpZCBcIiArIE1yZENvbG9yLkdSQVVfQkxBVSxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IFwiMnB4IHNvbGlkIFwiICsgTXJkQ29sb3IuR1JBVV9CTEFVX0xJR0hUXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZXh0T25seURhcmtIb3Zlcjoge1xyXG4gICAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgICBob3ZlcjogTXJkQ29sb3IuV0VJU1NcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgIGhvdmVyOiBNcmRDb2xvci5HUkFVX0JMQVVfTElHSFRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzbWFsbDoge1xyXG4gICAgICAgICAgcGFkZGluZzogXCI4cHggMTZweFwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgbWluSGVpZ2h0OiBcIjM4cHhcIixcclxuICAgICAgICAgIHRleHRJY29uR2FwOiBcIjdweFwiLFxyXG4gICAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICB3ZWlnaHQ6IFwiNDAwXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpY29uU2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgICAgICBpY29uU2l6ZU51bWJlcjogMTZcclxuICAgICAgICB9LFxyXG4gICAgICAgIGljb246IHtcclxuICAgICAgICAgIHBhZGRpbmc6IFwiNHB4XCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFwiMzJweFwiLFxyXG4gICAgICAgICAgaWNvblNpemU6IFwiMjRweFwiLFxyXG4gICAgICAgICAgaWNvblNpemVOdW1iZXI6IDI0LFxyXG4gICAgICAgICAgZGlhbWV0ZXI6IFwiMzJweFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdWxsSWNvbjoge1xyXG4gICAgICAgICAgcGFkZGluZzogXCIwXCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICBtaW5IZWlnaHQ6IFwiMzJweFwiLFxyXG4gICAgICAgICAgaWNvblNpemU6IFwiMzJweFwiLFxyXG4gICAgICAgICAgaWNvblNpemVOdW1iZXI6IDMyLFxyXG4gICAgICAgICAgZGlhbWV0ZXI6IFwiMzJweFwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZGVmaW5lZEJ1dHRvbnM6IHtcclxuICAgICAgICAgIGJlYXJiZWl0ZW46IHtcclxuICAgICAgICAgICAgdGV4dDogJ0JlYXJiZWl0ZW4nLFxyXG4gICAgICAgICAgICB0aGVtZTogTXJkU0J1dHRvblR5cGUuTkVVVFJBTF9IQVJELFxyXG4gICAgICAgICAgICBpY29uR3JvdXA6IHtcclxuICAgICAgICAgICAgICBkZWZhdWx0OiBQcmVkZWZpbmVkSWNvbnNTZXJ2aWNlLkJlYXJiZWl0ZW5PdXRsaW5lQmxhdSxcclxuICAgICAgICAgICAgICBkaXNhYmxlZDogUHJlZGVmaW5lZEljb25zU2VydmljZS5CZWFyYmVpdGVuT3V0bGluZUdyYXVCbGF1TGlnaHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNwZWljaGVybjoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnU3BlaWNoZXJuJyxcclxuICAgICAgICAgICAgdGhlbWU6IE1yZFNCdXR0b25UeXBlLlBSSU1BUlksXHJcbiAgICAgICAgICAgIGljb25Hcm91cDoge1xyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6IFByZWRlZmluZWRJY29uc1NlcnZpY2UuU3BlaWNoZXJuT3V0bGluZVdlaXNzLFxyXG4gICAgICAgICAgICAgIGRpc2FibGVkOiBQcmVkZWZpbmVkSWNvbnNTZXJ2aWNlLlNwZWljaGVybk91dGxpbmVHcmF1QmxhdUxpZ2h0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBhYmJyZWNoZW46IHtcclxuICAgICAgICAgICAgdGV4dDogJ0FiYnJlY2hlbicsXHJcbiAgICAgICAgICAgIHRoZW1lOiBNcmRTQnV0dG9uVHlwZS5ORVVUUkFMX0xJR0hULFxyXG4gICAgICAgICAgICBpY29uR3JvdXA6IHtcclxuICAgICAgICAgICAgICBkZWZhdWx0OiBQcmVkZWZpbmVkSWNvbnNTZXJ2aWNlLlNjaGxpZXNzZW5PdXRsaW5lQmxhdSxcclxuICAgICAgICAgICAgICBkaXNhYmxlZDogUHJlZGVmaW5lZEljb25zU2VydmljZS5TY2hsaWVzc2VuT3V0bGluZUdyYXVCbGF1TGlnaHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNjaGxpZXNzZW5JY29uOiB7XHJcbiAgICAgICAgICAgIHRoZW1lOiBNcmRTQnV0dG9uVHlwZS5URVhUX09OTFksXHJcbiAgICAgICAgICAgIGljb25Hcm91cDoge1xyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6IFByZWRlZmluZWRJY29uc1NlcnZpY2UuU2NobGllc3Nlbk91dGxpbmVCbGF1LFxyXG4gICAgICAgICAgICAgIGRpc2FibGVkOiBQcmVkZWZpbmVkSWNvbnNTZXJ2aWNlLlNjaGxpZXNzZW5PdXRsaW5lSGVsbGJsYXVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGxvZXNjaGVuOiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdMw7ZzY2hlbicsXHJcbiAgICAgICAgICAgIHRoZW1lOiBNcmRTQnV0dG9uVHlwZS5ORUdBVElWRSxcclxuICAgICAgICAgICAgaWNvbkdyb3VwOiB7XHJcbiAgICAgICAgICAgICAgZGVmYXVsdDogUHJlZGVmaW5lZEljb25zU2VydmljZS5Mb2VzY2hlbk91dGxpbmVXZWlzcyxcclxuICAgICAgICAgICAgICBkaXNhYmxlZDogUHJlZGVmaW5lZEljb25zU2VydmljZS5Mb2VzY2hlbk91dGxpbmVXZWlzc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaGluenVmdWVnZW46IHtcclxuICAgICAgICAgICAgdGV4dDogJ0hpbnp1ZsO8Z2VuJyxcclxuICAgICAgICAgICAgdGhlbWU6IE1yZFNCdXR0b25UeXBlLk5FVVRSQUxfSEFSRCxcclxuICAgICAgICAgICAgaWNvbkVuZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGljb25Hcm91cDoge1xyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6IFByZWRlZmluZWRJY29uc1NlcnZpY2UuSGluenVmdWVnZW5PdXRsaW5lQmxhdSxcclxuICAgICAgICAgICAgICBkaXNhYmxlZDogUHJlZGVmaW5lZEljb25zU2VydmljZS5IaW56dWZ1ZWdlbk91dGxpbmVHcmF1QmxhdUxpZ2h0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGdlb0ljb246IHtcclxuICAgICAgICB3aWR0aDogXCI0MHB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcclxuICAgICAgICBtYXJnaW46IFwiNXB4XCIsXHJcbiAgICAgICAgdHJhbnNpdGlvblRpbWU6IFwiMXNcIixcclxuICAgICAgICBtYWluQ29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgIG1haW5TZWxlY3RlZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBtYWluT3BhY2l0eTogMC4yLFxyXG4gICAgICAgIG1haW5TZWxlY3RlZE9wYWNpdHk6IDEsXHJcbiAgICAgICAgYmFja0NvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgICBiYWNrU2VsZWN0ZWRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgYmFja09wYWNpdHk6IDAuMixcclxuICAgICAgICBiYWNrU2VsZWN0ZWRPcGFjaXR5OiAwLjIsXHJcbiAgICAgICAgb3ZlcmxheUNvbG9yOiBcIiM4ZWJmNjJcIixcclxuICAgICAgICBvdmVybGF5U2VsZWN0ZWRDb2xvcjogXCIjZmZhNTAwXCIsXHJcbiAgICAgICAgb3ZlcmxheU9wYWNpdHk6IDEsXHJcbiAgICAgICAgb3ZlcmxheVNlbGVjdGVkT3BhY2l0eTogMVxyXG4gICAgICB9LFxyXG4gICAgICBjaGVja2JveDoge1xyXG4gICAgICAgIGNoZWNrYm94U2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgICAgZmlsbDoge1xyXG4gICAgICAgICAgdW5zZWxlY3RlZDoge1xyXG4gICAgICAgICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgdGV4dDogXCIjMDAwMDAwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNlbGVjdGVkOiB7XHJcbiAgICAgICAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiM2OGIwMjJcIixcclxuICAgICAgICAgICAgICB0ZXh0OiBcIiNmZmZmZmZcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB0b2dnbGVTd2l0Y2g6IHsgIFxyXG4gICAgICAgIHdpZHRoOiBcIjY0cHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMjhweFwiLFxyXG4gICAgICAgIGJnQ29sb3I6IFwiIzY4YjAyMlwiLFxyXG4gICAgICAgIGJnTmV1dHJhbENvbG9yOiBcIiM3ODc4NzgzM1wiLFxyXG4gICAgICAgIGtub2JDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAga25vYk5ldXRyYWxDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgYmdEaXNhYmxlZENvbG9yOiBcIiNkZmRmZGZcIixcclxuICAgICAgICBrbm9iRGlzYWJsZWRDb2xvcjogXCIjZjNmM2YzXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=