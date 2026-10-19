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
                primary: MrdColor.GRUEN,
                accent: MrdColor.GRAU_BLAU,
                warn: MrdColor.WARNROT,
                disabled: "#afa6a6"
            },
            formField: {
                borderRadius: "7px",
                borderRadiusRounded: "70px",
                fill: {
                    backgroundColor: "#D8DFE880"
                },
                newFill: {
                    backgroundColor: "#EBEFF3"
                },
                input: {
                    color: MrdColor.GRAU_BLAU
                },
            },
            button: {
                backgroundColor: "transparent",
                textLightColor: MrdColor.WEISS,
                textDarkColor: MrdColor.SCHWARZ,
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
                    backgroundColor: MrdColor.WEISS,
                    disabled: {
                        text: "#a6a6a6",
                        background: "#d3d3d3"
                    }
                },
                raised: {
                    backgroundColor: MrdColor.WEISS,
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
                    backgroundColor: MrdColor.WEISS,
                    disabled: {
                        text: "#a6a6a6",
                        background: "#d3d3d3"
                    },
                    borderRadius: "50%",
                    fontSize: "1em",
                    diameter: "4em"
                },
                miniFab: {
                    backgroundColor: MrdColor.WEISS,
                    disabled: {
                        text: "#a6a6a6",
                        background: "#d3d3d3"
                    },
                    borderRadius: "50%",
                    fontSize: "1em",
                    diameter: "3em"
                },
                toggle: {
                    backgroundColor: MrdColor.WEISS,
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
                mainColor: MrdColor.SCHWARZ,
                mainSelectedColor: MrdColor.WEISS,
                mainOpacity: 0.2,
                mainSelectedOpacity: 1,
                backColor: MrdColor.SCHWARZ,
                backSelectedColor: MrdColor.WEISS,
                backOpacity: 0.2,
                backSelectedOpacity: 0.2,
                overlayColor: MrdColor.GRUEN_LIGHT,
                overlaySelectedColor: "#ffa500",
                overlayOpacity: 1,
                overlaySelectedOpacity: 1
            },
            checkbox: {
                checkboxSize: "16px",
                fill: {
                    unselected: {
                        primary: {
                            background: MrdColor.WEISS,
                            text: MrdColor.SCHWARZ
                        }
                    },
                    selected: {
                        primary: {
                            background: MrdColor.GRUEN,
                            text: MrdColor.WEISS
                        }
                    }
                }
            },
            toggleSwitch: {
                width: "64px",
                height: "28px",
                bgColor: MrdColor.GRUEN,
                bgNeutralColor: "#78787833",
                knobColor: MrdColor.WEISS,
                knobNeutralColor: MrdColor.WEISS,
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
                selectedBackgroundColor: MrdColor.GRUEN,
                selectedTextColor: MrdColor.WEISS,
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
                    background: MrdColor.GRUEN,
                    text: MrdColor.WEISS
                },
                grey: {
                    background: "#e7e7e7",
                    text: MrdColor.GRAU
                },
                blue: {
                    background: MrdColor.GRAU_BLAU,
                    text: MrdColor.WEISS
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
                headerBackground: MrdColor.WEISS,
                headerColor: MrdColor.GRAU,
                background: MrdColor.WEISS,
                animationDuration: "225ms"
            },
            sort: {
                arrowSize: "16px"
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQWtCLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZFLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFdEMsTUFBTSxPQUFPLFVBQVU7SUFFYixNQUFNLENBQUMsTUFBTSxDQUFrQjtJQUUvQixNQUFNLENBQUMsWUFBWSxDQUFrQjtJQUV0QyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQXNCO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU0sTUFBTSxDQUFDLFNBQVM7UUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUVwQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7UUFDNUIsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBUSxFQUFFLE1BQVc7UUFDL0MsS0FBSyxNQUFNLENBQUMs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b20gXCIuLi9lbnVtL2NvbG9yLmVudW1cIjtcbmltcG9ydCB7IE1yZENvbmZpZ01vZGVsLCBNcmRTQnV0dG9uVHlwZSB9IGZyb20gXCIuLi9tb2RlbC9jb25maWcubW9kZWxcIjtcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQgeyBJY29uTmFtZSB9IGZyb20gXCIuL2ljb24tbGliXCI7XG5cbmV4cG9ydCBjbGFzcyBDb25maWdVdGlsIHtcblxuICBwcml2YXRlIHN0YXRpYyBjb25maWc/OiBNcmRDb25maWdNb2RlbDtcblxuICBwcml2YXRlIHN0YXRpYyBjdXN0b21Db25maWc/OiBNcmRDb25maWdNb2RlbDtcblxuICBwdWJsaWMgc3RhdGljIHNldENvbmZpZyhjb25maWc6IE1yZENvbmZpZ01vZGVsKSB7XG4gICAgdGhpcy5jb25maWcgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jdXN0b21Db25maWcgPSBjb25maWc7XG4gICAgdGhpcy5nZXRDb25maWcoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0Q29uZmlnKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICAgIH1cblxuICAgIGxldCBkZWZhdWx0Q29uZmlnID0gdGhpcy5iYXNlQ29uZmlnO1xuXG4gICAgaWYgKHRoaXMuY3VzdG9tQ29uZmlnKSB7XG4gICAgICB0aGlzLmV4dGVuZE9iamVjdChkZWZhdWx0Q29uZmlnLCB0aGlzLmN1c3RvbUNvbmZpZyk7XG4gICAgfVxuXG4gICAgdGhpcy5jb25maWcgPSBkZWZhdWx0Q29uZmlnO1xuICAgIHJldHVybiBkZWZhdWx0Q29uZmlnO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZXh0ZW5kT2JqZWN0KG9iajogYW55LCBleHRPYmo6IGFueSk6IGFueSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZXh0T2JqKSkge1xuICAgICAgLy8gRnVua3Rpb25lbiAoei4gQi4gaWNvbkdyb3VwKSBzaW5kIFdlcnRlLCBrZWluZSB6dSBtaXNjaGVuZGVuIE9iamVrdGU7IGZlaGxlbmRlIFp3ZWlnZSB3ZXJkZW4gbmV1IGFuZ2VsZWd0XG4gICAgICBpZiAoXy5pc09iamVjdCh2YWx1ZSkgJiYgIV8uaXNBcnJheSh2YWx1ZSkgJiYgIV8uaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSB0aGlzLmV4dGVuZE9iamVjdChfLmlzT2JqZWN0KG9ialtrZXldKSAmJiAhXy5pc0Z1bmN0aW9uKG9ialtrZXldKSA/IG9ialtrZXldIDoge30sIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRNb3N0U3BlY2lmaWNWYWx1ZShlbnRyeTogc3RyaW5nW10pOiBhbnkge1xuICAgIGxldCB0cmVlOiBzdHJpbmdbXSA9IGVudHJ5LnNsaWNlKCk7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWcgYXMgUmVjb3JkPHN0cmluZywgYW55PjtcbiAgICB3aGlsZSh0cmVlLmxlbmd0aCA+IDAgJiYgXy5pc09iamVjdChjb25maWdbdHJlZVswXV0pKSB7XG4gICAgICB0cmVlID0gdHJlZS5zbGljZSgxKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBnZXQgYmFzZUNvbmZpZygpOiBNcmRDb25maWdNb2RlbCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhc2VGb250OiB7XG4gICAgICAgIHNpemU6IFwiMTZweFwiLFxuICAgICAgICB3ZWlnaHQ6IFwiNDAwXCIsXG4gICAgICAgIGZhbWlseTogXCJMYXRvLHNhbnMtc2VyaWZcIlxuICAgICAgfSxcbiAgICAgIGJhc2VDb2xvcnM6IHtcbiAgICAgICAgcHJpbWFyeTogTXJkQ29sb3IuR1JVRU4sXG4gICAgICAgIGFjY2VudDogTXJkQ29sb3IuR1JBVV9CTEFVLFxuICAgICAgICB3YXJuOiBNcmRDb2xvci5XQVJOUk9ULFxuICAgICAgICBkaXNhYmxlZDogXCIjYWZhNmE2XCJcbiAgICAgIH0sXG4gICAgICBmb3JtRmllbGQ6IHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjdweFwiLFxuICAgICAgICBib3JkZXJSYWRpdXNSb3VuZGVkOiBcIjcwcHhcIixcblxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNEOERGRTg4MFwiXG4gICAgICAgIH0sXG4gICAgICAgIG5ld0ZpbGw6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0VCRUZGM1wiXG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgY29sb3I6IE1yZENvbG9yLkdSQVVfQkxBVVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgdGV4dExpZ2h0Q29sb3I6IE1yZENvbG9yLldFSVNTLFxuICAgICAgICB0ZXh0RGFya0NvbG9yOiBNcmRDb2xvci5TQ0hXQVJaLFxuICAgICAgICBob3ZlckNvbG9yOiBcIiNkM2QzZDM2MVwiLFxuICAgICAgICBhY3RpdmVDb2xvcjogXCIjZDNkM2QzXCIsXG4gICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgdGV4dDogXCIjYTZhNmE2XCIsXG4gICAgICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgYm9yZGVyOiBcIjAgdW5zZXQgdW5zZXRcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuXG4gICAgICAgIG1pbkhlaWdodDogXCIzNnB4XCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjAuOWVtXCIsXG4gICAgICAgIGljb25TaXplOiBcIjFlbVwiLFxuXG4gICAgICAgIG91dGxpbmU6IHtcbiAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNkM2QzZDNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIGZsYXQ6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IE1yZENvbG9yLldFSVNTLFxuICAgICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIiNhNmE2YTZcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2QzZDNkM1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByYWlzZWQ6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IE1yZENvbG9yLldFSVNTLFxuICAgICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIiNhNmE2YTZcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2QzZDNkM1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpY29uOiB7XG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgIGZvbnRTaXplOiBcIjFlbVwiLFxuICAgICAgICAgIGRpYW1ldGVyOiBcIjNlbVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgZmFiOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBNcmRDb2xvci5XRUlTUyxcbiAgICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdGV4dDogXCIjYTZhNmE2XCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNkM2QzZDNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgIGZvbnRTaXplOiBcIjFlbVwiLFxuICAgICAgICAgIGRpYW1ldGVyOiBcIjRlbVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWluaUZhYjoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogTXJkQ29sb3IuV0VJU1MsXG4gICAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHRleHQ6IFwiI2E2YTZhNlwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZDNkM2QzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIixcbiAgICAgICAgICBkaWFtZXRlcjogXCIzZW1cIlxuICAgICAgICB9LFxuXG4gICAgICAgIHRvZ2dsZToge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogTXJkQ29sb3IuV0VJU1MsXG4gICAgICAgICAgdW5zZWxlY3RlZEJnQ29sb3I6IFwiI2M4Y2FjNlwiLFxuICAgICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIiNhNmE2YTZcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2QzZDNkM1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc0J1dHRvbjoge1xuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgZGVmYXVsdDogTXJkQ29sb3IuR1JBVV9CTEFVLFxuICAgICAgICAgIGhvdmVyOiBNcmRDb2xvci5HUkFVX0JMQVUsXG4gICAgICAgICAgZGlzYWJsZWQ6IE1yZENvbG9yLkhFTExCTEFVXG4gICAgICAgIH0sXG4gICAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgICBkZWZhdWx0OiBNcmRDb2xvci5UUkFOU1BBUkVOVCxcbiAgICAgICAgICBob3ZlcjogTXJkQ29sb3IuSEVMTEJMQVUsXG4gICAgICAgICAgZGlzYWJsZWQ6IE1yZENvbG9yLlRSQU5TUEFSRU5UXG4gICAgICAgIH0sXG4gICAgICAgIHByb2dyZXNzOiB7XG4gICAgICAgICAgZGVmYXVsdDogTXJkQ29sb3IuR1JVRU4sXG4gICAgICAgICAgaG92ZXI6IE1yZENvbG9yLkdSVUVOLFxuICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5HUkFVX0JMQVVfTElHSFRcbiAgICAgICAgfSxcbiAgICAgICAgYm9yZGVyOiBcInVuc2V0XCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMTZweCAzMHB4XCIsXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXG4gICAgICAgIGZvbnQ6IHtcbiAgICAgICAgICB3ZWlnaHQ6IFwiOTAwXCJcbiAgICAgICAgfSxcbiAgICAgICAgbWluSGVpZ2h0OiBcIjU2cHhcIixcbiAgICAgICAgaWNvblNpemU6IFwiMjRweFwiLFxuICAgICAgICBpY29uU2l6ZU51bWJlcjogMjQsXG4gICAgICAgIGRpYW1ldGVyOiBcInVuc2V0XCIsXG4gICAgICAgIHRleHRJY29uR2FwOiBcIjEwcHhcIixcblxuICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgZGVmYXVsdDogTXJkQ29sb3IuV0VJU1MsXG4gICAgICAgICAgICBob3ZlcjogTXJkQ29sb3IuV0VJU1MsXG4gICAgICAgICAgICBkaXNhYmxlZDogTXJkQ29sb3IuR1JBVV9CTEFVX0xJR0hUXG4gICAgICAgICAgfSxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBNcmRDb2xvci5HUlVFTixcbiAgICAgICAgICAgIGhvdmVyOiBNcmRDb2xvci5HUlVFTl9EQVJLLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IE1yZENvbG9yLkhFTExCTEFVXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm9ncmVzczoge1xuICAgICAgICAgICAgZGVmYXVsdDogTXJkQ29sb3IuR1JVRU5fTElHSFRcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IE1yZENvbG9yLkdSVUVOLFxuICAgICAgICAgICAgaG92ZXI6IE1yZENvbG9yLkdSVUVOLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IE1yZENvbG9yLkhFTExCTEFVXG4gICAgICAgICAgfSxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBNcmRDb2xvci5UUkFOU1BBUkVOVCxcbiAgICAgICAgICAgIGhvdmVyOiBNcmRDb2xvci5HUlVFTl9UUkFOU1BBUkVOVCxcbiAgICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5UUkFOU1BBUkVOVFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9yZGVyOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBcIjJweCBzb2xpZCBcIiArIE1yZENvbG9yLkdSVUVOLFxuICAgICAgICAgICAgaG92ZXI6IFwiMnB4IHNvbGlkIFwiICsgTXJkQ29sb3IuR1JVRU4sXG4gICAgICAgICAgICBkaXNhYmxlZDogXCIycHggc29saWQgXCIgKyBNcmRDb2xvci5IRUxMQkxBVVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbmVnYXRpdmU6IHtcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBNcmRDb2xvci5XRUlTUyxcbiAgICAgICAgICAgIGhvdmVyOiBNcmRDb2xvci5XRUlTUyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5XRUlTU1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogTXJkQ29sb3IuV0FSTlJPVCxcbiAgICAgICAgICAgIGhvdmVyOiBNcmRDb2xvci5XQVJOUk9UX0RBUkssXG4gICAgICAgICAgICBkaXNhYmxlZDogTXJkQ29sb3IuV0FSTlJPVF9MSUdIVFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IE1yZENvbG9yLldBUk5ST1RfTElHSFRcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG5ldXRyYWxMaWdodDoge1xuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5HUkFVX0JMQVVfTElHSFRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IE1yZENvbG9yLkhFTExCTEFVLFxuICAgICAgICAgICAgaG92ZXI6IE1yZENvbG9yLkdSQVVfQkxBVV9MSUdIVCxcbiAgICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5IRUxMQkxBVVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbmV1dHJhbEhhcmQ6IHtcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBkaXNhYmxlZDogTXJkQ29sb3IuR1JBVV9CTEFVX0xJR0hUXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib3JkZXI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiMnB4IHNvbGlkIFwiICsgTXJkQ29sb3IuR1JBVV9CTEFVLFxuICAgICAgICAgICAgaG92ZXI6IFwiMnB4IHNvbGlkIFwiICsgTXJkQ29sb3IuR1JBVV9CTEFVLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IFwiMnB4IHNvbGlkIFwiICsgTXJkQ29sb3IuR1JBVV9CTEFVX0xJR0hUXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0ZXh0T25seURhcmtIb3Zlcjoge1xuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIGhvdmVyOiBNcmRDb2xvci5XRUlTU1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgICAgaG92ZXI6IE1yZENvbG9yLkdSQVVfQkxBVV9MSUdIVFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBzbWFsbDoge1xuICAgICAgICAgIHBhZGRpbmc6IFwiOHB4IDE2cHhcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgbWluSGVpZ2h0OiBcIjM4cHhcIixcbiAgICAgICAgICB0ZXh0SWNvbkdhcDogXCI3cHhcIixcbiAgICAgICAgICBmb250OiB7XG4gICAgICAgICAgICB3ZWlnaHQ6IFwiNDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGljb25TaXplOiBcIjE2cHhcIixcbiAgICAgICAgICBpY29uU2l6ZU51bWJlcjogMTZcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgIHBhZGRpbmc6IFwiNHB4XCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgIG1pbkhlaWdodDogXCIzMnB4XCIsXG4gICAgICAgICAgaWNvblNpemU6IFwiMjRweFwiLFxuICAgICAgICAgIGljb25TaXplTnVtYmVyOiAyNCxcbiAgICAgICAgICBkaWFtZXRlcjogXCIzMnB4XCJcbiAgICAgICAgfSxcbiAgICAgICAgZnVsbEljb246IHtcbiAgICAgICAgICBwYWRkaW5nOiBcIjBcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgbWluSGVpZ2h0OiBcIjMycHhcIixcbiAgICAgICAgICBpY29uU2l6ZTogXCIzMnB4XCIsXG4gICAgICAgICAgaWNvblNpemVOdW1iZXI6IDMyLFxuICAgICAgICAgIGRpYW1ldGVyOiBcIjMycHhcIlxuICAgICAgICB9LFxuXG4gICAgICAgIGRlZmluZWRCdXR0b25zOiB7XG4gICAgICAgICAgYmVhcmJlaXRlbjoge1xuICAgICAgICAgICAgdGV4dDogJ0JlYXJiZWl0ZW4nLFxuICAgICAgICAgICAgdGhlbWU6IE1yZFNCdXR0b25UeXBlLk5FVVRSQUxfSEFSRCxcbiAgICAgICAgICAgIGljb246IHtzeW1ib2w6IEljb25OYW1lLkJFQVJCRUlURU4sIG91dGVyOiAnb3V0bGluZSd9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzcGVpY2hlcm46IHtcbiAgICAgICAgICAgIHRleHQ6ICdTcGVpY2hlcm4nLFxuICAgICAgICAgICAgdGhlbWU6IE1yZFNCdXR0b25UeXBlLlBSSU1BUlksXG4gICAgICAgICAgICBpY29uOiB7c3ltYm9sOiBJY29uTmFtZS5DSEVDSywgb3V0ZXI6ICdvdXRsaW5lJ31cbiAgICAgICAgICB9LFxuICAgICAgICAgIGFiYnJlY2hlbjoge1xuICAgICAgICAgICAgdGV4dDogJ0FiYnJlY2hlbicsXG4gICAgICAgICAgICB0aGVtZTogTXJkU0J1dHRvblR5cGUuTkVVVFJBTF9MSUdIVCxcbiAgICAgICAgICAgIGljb246IHtzeW1ib2w6IEljb25OYW1lLlNDSExJRVNTRU4sIG91dGVyOiAnb3V0bGluZSd9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzY2hsaWVzc2VuSWNvbjoge1xuICAgICAgICAgICAgdGhlbWU6IE1yZFNCdXR0b25UeXBlLlRFWFRfT05MWSxcbiAgICAgICAgICAgIGljb246IHtzeW1ib2w6IEljb25OYW1lLlNDSExJRVNTRU4sIG91dGVyOiAnb3V0bGluZSd9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBsb2VzY2hlbjoge1xuICAgICAgICAgICAgdGV4dDogJ0zDtnNjaGVuJyxcbiAgICAgICAgICAgIHRoZW1lOiBNcmRTQnV0dG9uVHlwZS5ORUdBVElWRSxcbiAgICAgICAgICAgIGljb246IHtzeW1ib2w6IEljb25OYW1lLkxPRVNDSEVOLCBvdXRlcjogJ291dGxpbmUnfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGluenVmdWVnZW46IHtcbiAgICAgICAgICAgIHRleHQ6ICdIaW56dWbDvGdlbicsXG4gICAgICAgICAgICB0aGVtZTogTXJkU0J1dHRvblR5cGUuTkVVVFJBTF9IQVJELFxuICAgICAgICAgICAgaWNvbkVuZDogZmFsc2UsXG4gICAgICAgICAgICBpY29uOiB7c3ltYm9sOiBJY29uTmFtZS5QTFVTLCBvdXRlcjogJ291dGxpbmUnfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdlb0ljb246IHtcbiAgICAgICAgd2lkdGg6IFwiNDBweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLFxuICAgICAgICBtYXJnaW46IFwiNXB4XCIsXG4gICAgICAgIHRyYW5zaXRpb25UaW1lOiBcIjFzXCIsXG4gICAgICAgIG1haW5Db2xvcjogTXJkQ29sb3IuU0NIV0FSWixcbiAgICAgICAgbWFpblNlbGVjdGVkQ29sb3I6IE1yZENvbG9yLldFSVNTLFxuICAgICAgICBtYWluT3BhY2l0eTogMC4yLFxuICAgICAgICBtYWluU2VsZWN0ZWRPcGFjaXR5OiAxLFxuICAgICAgICBiYWNrQ29sb3I6IE1yZENvbG9yLlNDSFdBUlosXG4gICAgICAgIGJhY2tTZWxlY3RlZENvbG9yOiBNcmRDb2xvci5XRUlTUyxcbiAgICAgICAgYmFja09wYWNpdHk6IDAuMixcbiAgICAgICAgYmFja1NlbGVjdGVkT3BhY2l0eTogMC4yLFxuICAgICAgICBvdmVybGF5Q29sb3I6IE1yZENvbG9yLkdSVUVOX0xJR0hULFxuICAgICAgICBvdmVybGF5U2VsZWN0ZWRDb2xvcjogXCIjZmZhNTAwXCIsXG4gICAgICAgIG92ZXJsYXlPcGFjaXR5OiAxLFxuICAgICAgICBvdmVybGF5U2VsZWN0ZWRPcGFjaXR5OiAxXG4gICAgICB9LFxuICAgICAgY2hlY2tib3g6IHtcbiAgICAgICAgY2hlY2tib3hTaXplOiBcIjE2cHhcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgIHVuc2VsZWN0ZWQ6IHtcbiAgICAgICAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogTXJkQ29sb3IuV0VJU1MsXG4gICAgICAgICAgICAgIHRleHQ6IE1yZENvbG9yLlNDSFdBUlpcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlbGVjdGVkOiB7XG4gICAgICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IE1yZENvbG9yLkdSVUVOLFxuICAgICAgICAgICAgICB0ZXh0OiBNcmRDb2xvci5XRUlTU1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRvZ2dsZVN3aXRjaDogeyAgXG4gICAgICAgIHdpZHRoOiBcIjY0cHhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjI4cHhcIixcbiAgICAgICAgYmdDb2xvcjogTXJkQ29sb3IuR1JVRU4sXG4gICAgICAgIGJnTmV1dHJhbENvbG9yOiBcIiM3ODc4NzgzM1wiLFxuICAgICAgICBrbm9iQ29sb3I6IE1yZENvbG9yLldFSVNTLFxuICAgICAgICBrbm9iTmV1dHJhbENvbG9yOiBNcmRDb2xvci5XRUlTUyxcbiAgICAgICAgYmdEaXNhYmxlZENvbG9yOiBcIiNkZmRmZGZcIixcbiAgICAgICAga25vYkRpc2FibGVkQ29sb3I6IFwiI2YzZjNmM1wiLFxuICAgICAgICBzbGltOiB7XG4gICAgICAgICAgd2lkdGg6IFwiNDBweFwiLFxuICAgICAgICAgIGhlaWdodDogXCIyNHB4XCIsXG4gICAgICAgICAgdHJhY2tIZWlnaHQ6IFwiMTJweFwiLFxuICAgICAgICAgIGtub2JCb3JkZXI6IFwiMXB4IHNvbGlkICMyOTNENEZcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbGlzdDoge1xuICAgICAgICBpdGVtU2l6ZTogNDgsXG4gICAgICAgIHNlbGVjdGVkQmFja2dyb3VuZENvbG9yOiBNcmRDb2xvci5HUlVFTixcbiAgICAgICAgc2VsZWN0ZWRUZXh0Q29sb3I6IE1yZENvbG9yLldFSVNTLFxuICAgICAgICBob3ZlckNvbG9yOiBcIiNlN2U3ZTdcIixcbiAgICAgICAgZGl2aWRlckNvbG9yOiBcIiMwMDAwMDAxZlwiXG4gICAgICB9LFxuICAgICAgdG9vbGJhcjoge1xuICAgICAgICBoZWlnaHQ6IFwiNTZweFwiLFxuICAgICAgICBwYWRkaW5nOiBcIjAgMTZweFwiLFxuICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjVmNWY1XCIsXG4gICAgICAgIHRleHRDb2xvcjogXCIjMDAwMDAwZGVcIixcbiAgICAgICAgZ3JlZW46IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBNcmRDb2xvci5HUlVFTixcbiAgICAgICAgICB0ZXh0OiBNcmRDb2xvci5XRUlTU1xuICAgICAgICB9LFxuICAgICAgICBncmV5OiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogXCIjZTdlN2U3XCIsXG4gICAgICAgICAgdGV4dDogTXJkQ29sb3IuR1JBVVxuICAgICAgICB9LFxuICAgICAgICBibHVlOiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogTXJkQ29sb3IuR1JBVV9CTEFVLFxuICAgICAgICAgIHRleHQ6IE1yZENvbG9yLldFSVNTXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzaWRlbmF2OiB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgbWF4V2lkdGg6IFwiNTUwcHhcIlxuICAgICAgfSxcbiAgICAgIGljb246IHtcbiAgICAgICAgc2l6ZTogXCIyNHB4XCJcbiAgICAgIH0sXG4gICAgICBleHBhbnNpb25QYW5lbDoge1xuICAgICAgICBoZWFkZXJIZWlnaHQ6IFwiNTZweFwiLFxuICAgICAgICBoZWFkZXJQYWRkaW5nOiBcIjAgMjRweFwiLFxuICAgICAgICBoZWFkZXJCYWNrZ3JvdW5kOiBNcmRDb2xvci5XRUlTUyxcbiAgICAgICAgaGVhZGVyQ29sb3I6IE1yZENvbG9yLkdSQVUsXG4gICAgICAgIGJhY2tncm91bmQ6IE1yZENvbG9yLldFSVNTLFxuICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogXCIyMjVtc1wiXG4gICAgICB9LFxuICAgICAgc29ydDoge1xuICAgICAgICBhcnJvd1NpemU6IFwiMTZweFwiXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=