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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS11aS9zcmMvbGliL2NvbW1vbi91dGlsL2NvbmZpZy51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQWtCLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZFLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFdEMsTUFBTSxPQUFPLFVBQVU7SUFFYixNQUFNLENBQUMsTUFBTSxDQUFrQjtJQUUvQixNQUFNLENBQUMsWUFBWSxDQUFrQjtJQUV0QyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQXNCO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU0sTUFBTSxDQUFDLFNBQVM7UUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUVwQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7UUFDNUIsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBUSxFQUFFLE1BQVc7UUFDL0MsS0FBSyxNQUFNLENBQUMs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QUUsU0FBUztnQkFDckIsWUFBWSxFQUFFLFdBQVc7YUFDMUI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixVQUFVLEVBQUUsS0FBSztnQkFDakIsZUFBZSxFQUFFLFNBQVM7Z0JBQzFCLFNBQVMsRUFBRSxXQUFXO2dCQUN0QixLQUFLLEVBQUU7b0JBQ0wsVUFBVSxFQUFFLFFBQVEsQ0FBQyxLQUFLO29CQUMxQixJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUs7aUJBQ3JCO2dCQUNELElBQUksRUFBRTtvQkFDSixVQUFVLEVBQUUsU0FBUztvQkFDckIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJO2lCQUNwQjtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osVUFBVSxFQUFFLFFBQVEsQ0FBQyxTQUFTO29CQUM5QixJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUs7aUJBQ3JCO2FBQ0Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRSxPQUFPO2FBQ2xCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxNQUFNO2FBQ2I7WUFDRCxjQUFjLEVBQUU7Z0JBQ2QsWUFBWSxFQUFFLE1BQU07Z0JBQ3BCLGFBQWEsRUFBRSxRQUFRO2dCQUN2QixnQkFBZ0IsRUFBRSxRQUFRLENBQUMsS0FBSztnQkFDaEMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxJQUFJO2dCQUMxQixVQUFVLEVBQUUsUUFBUSxDQUFDLEtBQUs7Z0JBQzFCLGlCQUFpQixFQUFFLE9BQU87YUFDM0I7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osU0FBUyxFQUFFLE1BQU07YUFDbEI7U0FDRixDQUFBO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTXJkQ29sb3IgfSBmcm9tIFwiLi4vZW51bS9jb2xvci5lbnVtXCI7XG5pbXBvcnQgeyBNcmRDb25maWdNb2RlbCwgTXJkU0J1dHRvblR5cGUgfSBmcm9tIFwiLi4vbW9kZWwvY29uZmlnLm1vZGVsXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IHsgSWNvbk5hbWUgfSBmcm9tIFwiLi9pY29uLWxpYlwiO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlnVXRpbCB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgY29uZmlnPzogTXJkQ29uZmlnTW9kZWw7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgY3VzdG9tQ29uZmlnPzogTXJkQ29uZmlnTW9kZWw7XG5cbiAgcHVibGljIHN0YXRpYyBzZXRDb25maWcoY29uZmlnOiBNcmRDb25maWdNb2RlbCkge1xuICAgIHRoaXMuY29uZmlnID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY3VzdG9tQ29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuZ2V0Q29uZmlnKCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldENvbmZpZygpIHtcbiAgICBpZiAodGhpcy5jb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgICB9XG5cbiAgICBsZXQgZGVmYXVsdENvbmZpZyA9IHRoaXMuYmFzZUNvbmZpZztcblxuICAgIGlmICh0aGlzLmN1c3RvbUNvbmZpZykge1xuICAgICAgdGhpcy5leHRlbmRPYmplY3QoZGVmYXVsdENvbmZpZywgdGhpcy5jdXN0b21Db25maWcpO1xuICAgIH1cblxuICAgIHRoaXMuY29uZmlnID0gZGVmYXVsdENvbmZpZztcbiAgICByZXR1cm4gZGVmYXVsdENvbmZpZztcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGV4dGVuZE9iamVjdChvYmo6IGFueSwgZXh0T2JqOiBhbnkpOiBhbnkge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGV4dE9iaikpIHtcbiAgICAgIC8vIEZ1bmt0aW9uZW4gKHouIEIuIGljb25Hcm91cCkgc2luZCBXZXJ0ZSwga2VpbmUgenUgbWlzY2hlbmRlbiBPYmpla3RlOyBmZWhsZW5kZSBad2VpZ2Ugd2VyZGVuIG5ldSBhbmdlbGVndFxuICAgICAgaWYgKF8uaXNPYmplY3QodmFsdWUpICYmICFfLmlzQXJyYXkodmFsdWUpICYmICFfLmlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgIG9ialtrZXldID0gdGhpcy5leHRlbmRPYmplY3QoXy5pc09iamVjdChvYmpba2V5XSkgJiYgIV8uaXNGdW5jdGlvbihvYmpba2V5XSkgPyBvYmpba2V5XSA6IHt9LCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0TW9zdFNwZWNpZmljVmFsdWUoZW50cnk6IHN0cmluZ1tdKTogYW55IHtcbiAgICBsZXQgdHJlZTogc3RyaW5nW10gPSBlbnRyeS5zbGljZSgpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnIGFzIFJlY29yZDxzdHJpbmcsIGFueT47XG4gICAgd2hpbGUodHJlZS5sZW5ndGggPiAwICYmIF8uaXNPYmplY3QoY29uZmlnW3RyZWVbMF1dKSkge1xuICAgICAgdHJlZSA9IHRyZWUuc2xpY2UoMSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0IGJhc2VDb25maWcoKTogTXJkQ29uZmlnTW9kZWwge1xuICAgIHJldHVybiB7XG4gICAgICBiYXNlRm9udDoge1xuICAgICAgICBzaXplOiBcIjE2cHhcIixcbiAgICAgICAgd2VpZ2h0OiBcIjQwMFwiLFxuICAgICAgICBmYW1pbHk6IFwiTGF0byxzYW5zLXNlcmlmXCJcbiAgICAgIH0sXG4gICAgICBiYXNlQ29sb3JzOiB7XG4gICAgICAgIHByaW1hcnk6IE1yZENvbG9yLkdSVUVOLFxuICAgICAgICBhY2NlbnQ6IE1yZENvbG9yLkdSQVVfQkxBVSxcbiAgICAgICAgd2FybjogTXJkQ29sb3IuV0FSTlJPVCxcbiAgICAgICAgZGlzYWJsZWQ6IFwiI2FmYTZhNlwiXG4gICAgICB9LFxuICAgICAgZm9ybUZpZWxkOiB7XG4gICAgICAgIGJvcmRlclJhZGl1czogXCI3cHhcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzUm91bmRlZDogXCI3MHB4XCIsXG5cbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRDhERkU4ODBcIlxuICAgICAgICB9LFxuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgIGNvbG9yOiBNcmRDb2xvci5HUkFVX0JMQVVcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBidXR0b246IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgIHRleHRMaWdodENvbG9yOiBNcmRDb2xvci5XRUlTUyxcbiAgICAgICAgdGV4dERhcmtDb2xvcjogTXJkQ29sb3IuU0NIV0FSWixcbiAgICAgICAgaG92ZXJDb2xvcjogXCIjZDNkM2QzNjFcIixcbiAgICAgICAgYWN0aXZlQ29sb3I6IFwiI2QzZDNkM1wiLFxuICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgIHRleHQ6IFwiI2E2YTZhNlwiLFxuICAgICAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIlxuICAgICAgICB9LFxuXG4gICAgICAgIGJvcmRlcjogXCIwIHVuc2V0IHVuc2V0XCIsXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcblxuICAgICAgICBtaW5IZWlnaHQ6IFwiMzZweFwiLFxuICAgICAgICBmb250U2l6ZTogXCIwLjllbVwiLFxuICAgICAgICBpY29uU2l6ZTogXCIxZW1cIixcblxuICAgICAgICBvdXRsaW5lOiB7XG4gICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZDNkM2QzXCJcbiAgICAgICAgfSxcblxuICAgICAgICBmbGF0OiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBNcmRDb2xvci5XRUlTUyxcbiAgICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdGV4dDogXCIjYTZhNmE2XCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNkM2QzZDNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmFpc2VkOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBNcmRDb2xvci5XRUlTUyxcbiAgICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdGV4dDogXCIjYTZhNmE2XCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNkM2QzZDNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIixcbiAgICAgICAgICBkaWFtZXRlcjogXCIzZW1cIlxuICAgICAgICB9LFxuXG4gICAgICAgIGZhYjoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogTXJkQ29sb3IuV0VJU1MsXG4gICAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHRleHQ6IFwiI2E2YTZhNlwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZDNkM2QzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIixcbiAgICAgICAgICBkaWFtZXRlcjogXCI0ZW1cIlxuICAgICAgICB9LFxuXG4gICAgICAgIG1pbmlGYWI6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IE1yZENvbG9yLldFSVNTLFxuICAgICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIiNhNmE2YTZcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2QzZDNkM1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgZm9udFNpemU6IFwiMWVtXCIsXG4gICAgICAgICAgZGlhbWV0ZXI6IFwiM2VtXCJcbiAgICAgICAgfSxcblxuICAgICAgICB0b2dnbGU6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IE1yZENvbG9yLldFSVNTLFxuICAgICAgICAgIHVuc2VsZWN0ZWRCZ0NvbG9yOiBcIiNjOGNhYzZcIixcbiAgICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdGV4dDogXCIjYTZhNmE2XCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNkM2QzZDNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNCdXR0b246IHtcbiAgICAgICAgdGV4dDoge1xuICAgICAgICAgIGRlZmF1bHQ6IE1yZENvbG9yLkdSQVVfQkxBVSxcbiAgICAgICAgICBob3ZlcjogTXJkQ29sb3IuR1JBVV9CTEFVLFxuICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5IRUxMQkxBVVxuICAgICAgICB9LFxuICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgZGVmYXVsdDogTXJkQ29sb3IuVFJBTlNQQVJFTlQsXG4gICAgICAgICAgaG92ZXI6IE1yZENvbG9yLkhFTExCTEFVLFxuICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5UUkFOU1BBUkVOVFxuICAgICAgICB9LFxuICAgICAgICBwcm9ncmVzczoge1xuICAgICAgICAgIGRlZmF1bHQ6IE1yZENvbG9yLkdSVUVOLFxuICAgICAgICAgIGhvdmVyOiBNcmRDb2xvci5HUlVFTixcbiAgICAgICAgICBkaXNhYmxlZDogTXJkQ29sb3IuR1JBVV9CTEFVX0xJR0hUXG4gICAgICAgIH0sXG4gICAgICAgIGJvcmRlcjogXCJ1bnNldFwiLFxuICAgICAgICBwYWRkaW5nOiBcIjE2cHggMzBweFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgICAgICBmb250OiB7XG4gICAgICAgICAgd2VpZ2h0OiBcIjkwMFwiXG4gICAgICAgIH0sXG4gICAgICAgIG1pbkhlaWdodDogXCI1NnB4XCIsXG4gICAgICAgIGljb25TaXplOiBcIjI0cHhcIixcbiAgICAgICAgaWNvblNpemVOdW1iZXI6IDI0LFxuICAgICAgICBkaWFtZXRlcjogXCJ1bnNldFwiLFxuICAgICAgICB0ZXh0SWNvbkdhcDogXCIxMHB4XCIsXG5cbiAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IE1yZENvbG9yLldFSVNTLFxuICAgICAgICAgICAgaG92ZXI6IE1yZENvbG9yLldFSVNTLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IE1yZENvbG9yLkdSQVVfQkxBVV9MSUdIVFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogTXJkQ29sb3IuR1JVRU4sXG4gICAgICAgICAgICBob3ZlcjogTXJkQ29sb3IuR1JVRU5fREFSSyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5IRUxMQkxBVVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IE1yZENvbG9yLkdSVUVOX0xJR0hUXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBNcmRDb2xvci5HUlVFTixcbiAgICAgICAgICAgIGhvdmVyOiBNcmRDb2xvci5HUlVFTixcbiAgICAgICAgICAgIGRpc2FibGVkOiBNcmRDb2xvci5IRUxMQkxBVVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogTXJkQ29sb3IuVFJBTlNQQVJFTlQsXG4gICAgICAgICAgICBob3ZlcjogTXJkQ29sb3IuR1JVRU5fVFJBTlNQQVJFTlQsXG4gICAgICAgICAgICBkaXNhYmxlZDogTXJkQ29sb3IuVFJBTlNQQVJFTlRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvcmRlcjoge1xuICAgICAgICAgICAgZGVmYXVsdDogXCIycHggc29saWQgXCIgKyBNcmRDb2xvci5HUlVFTixcbiAgICAgICAgICAgIGhvdmVyOiBcIjJweCBzb2xpZCBcIiArIE1yZENvbG9yLkdSVUVOLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IFwiMnB4IHNvbGlkIFwiICsgTXJkQ29sb3IuSEVMTEJMQVVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG5lZ2F0aXZlOiB7XG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgZGVmYXVsdDogTXJkQ29sb3IuV0VJU1MsXG4gICAgICAgICAgICBob3ZlcjogTXJkQ29sb3IuV0VJU1MsXG4gICAgICAgICAgICBkaXNhYmxlZDogTXJkQ29sb3IuV0VJU1NcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IE1yZENvbG9yLldBUk5ST1QsXG4gICAgICAgICAgICBob3ZlcjogTXJkQ29sb3IuV0FSTlJPVF9EQVJLLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IE1yZENvbG9yLldBUk5ST1RfTElHSFRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHByb2dyZXNzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBNcmRDb2xvci5XQVJOUk9UX0xJR0hUXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBuZXV0cmFsTGlnaHQ6IHtcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBkaXNhYmxlZDogTXJkQ29sb3IuR1JBVV9CTEFVX0xJR0hUXG4gICAgICAgICAgfSxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBNcmRDb2xvci5IRUxMQkxBVSxcbiAgICAgICAgICAgIGhvdmVyOiBNcmRDb2xvci5HUkFVX0JMQVVfTElHSFQsXG4gICAgICAgICAgICBkaXNhYmxlZDogTXJkQ29sb3IuSEVMTEJMQVVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG5ldXRyYWxIYXJkOiB7XG4gICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgZGlzYWJsZWQ6IE1yZENvbG9yLkdSQVVfQkxBVV9MSUdIVFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9yZGVyOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBcIjJweCBzb2xpZCBcIiArIE1yZENvbG9yLkdSQVVfQkxBVSxcbiAgICAgICAgICAgIGhvdmVyOiBcIjJweCBzb2xpZCBcIiArIE1yZENvbG9yLkdSQVVfQkxBVSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBcIjJweCBzb2xpZCBcIiArIE1yZENvbG9yLkdSQVVfQkxBVV9MSUdIVFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGV4dE9ubHlEYXJrSG92ZXI6IHtcbiAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICBob3ZlcjogTXJkQ29sb3IuV0VJU1NcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgICAgIGhvdmVyOiBNcmRDb2xvci5HUkFVX0JMQVVfTElHSFRcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc21hbGw6IHtcbiAgICAgICAgICBwYWRkaW5nOiBcIjhweCAxNnB4XCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgIG1pbkhlaWdodDogXCIzOHB4XCIsXG4gICAgICAgICAgdGV4dEljb25HYXA6IFwiN3B4XCIsXG4gICAgICAgICAgZm9udDoge1xuICAgICAgICAgICAgd2VpZ2h0OiBcIjQwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpY29uU2l6ZTogXCIxNnB4XCIsXG4gICAgICAgICAgaWNvblNpemVOdW1iZXI6IDE2XG4gICAgICAgIH0sXG4gICAgICAgIGljb246IHtcbiAgICAgICAgICBwYWRkaW5nOiBcIjRweFwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICBtaW5IZWlnaHQ6IFwiMzJweFwiLFxuICAgICAgICAgIGljb25TaXplOiBcIjI0cHhcIixcbiAgICAgICAgICBpY29uU2l6ZU51bWJlcjogMjQsXG4gICAgICAgICAgZGlhbWV0ZXI6IFwiMzJweFwiXG4gICAgICAgIH0sXG4gICAgICAgIGZ1bGxJY29uOiB7XG4gICAgICAgICAgcGFkZGluZzogXCIwXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgIG1pbkhlaWdodDogXCIzMnB4XCIsXG4gICAgICAgICAgaWNvblNpemU6IFwiMzJweFwiLFxuICAgICAgICAgIGljb25TaXplTnVtYmVyOiAzMixcbiAgICAgICAgICBkaWFtZXRlcjogXCIzMnB4XCJcbiAgICAgICAgfSxcblxuICAgICAgICBkZWZpbmVkQnV0dG9uczoge1xuICAgICAgICAgIGJlYXJiZWl0ZW46IHtcbiAgICAgICAgICAgIHRleHQ6ICdCZWFyYmVpdGVuJyxcbiAgICAgICAgICAgIHRoZW1lOiBNcmRTQnV0dG9uVHlwZS5ORVVUUkFMX0hBUkQsXG4gICAgICAgICAgICBpY29uOiB7c3ltYm9sOiBJY29uTmFtZS5CRUFSQkVJVEVOLCBvdXRlcjogJ291dGxpbmUnfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3BlaWNoZXJuOiB7XG4gICAgICAgICAgICB0ZXh0OiAnU3BlaWNoZXJuJyxcbiAgICAgICAgICAgIHRoZW1lOiBNcmRTQnV0dG9uVHlwZS5QUklNQVJZLFxuICAgICAgICAgICAgaWNvbjoge3N5bWJvbDogSWNvbk5hbWUuQ0hFQ0ssIG91dGVyOiAnb3V0bGluZSd9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhYmJyZWNoZW46IHtcbiAgICAgICAgICAgIHRleHQ6ICdBYmJyZWNoZW4nLFxuICAgICAgICAgICAgdGhlbWU6IE1yZFNCdXR0b25UeXBlLk5FVVRSQUxfTElHSFQsXG4gICAgICAgICAgICBpY29uOiB7c3ltYm9sOiBJY29uTmFtZS5TQ0hMSUVTU0VOLCBvdXRlcjogJ291dGxpbmUnfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2NobGllc3Nlbkljb246IHtcbiAgICAgICAgICAgIHRoZW1lOiBNcmRTQnV0dG9uVHlwZS5URVhUX09OTFksXG4gICAgICAgICAgICBpY29uOiB7c3ltYm9sOiBJY29uTmFtZS5TQ0hMSUVTU0VOLCBvdXRlcjogJ291dGxpbmUnfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbG9lc2NoZW46IHtcbiAgICAgICAgICAgIHRleHQ6ICdMw7ZzY2hlbicsXG4gICAgICAgICAgICB0aGVtZTogTXJkU0J1dHRvblR5cGUuTkVHQVRJVkUsXG4gICAgICAgICAgICBpY29uOiB7c3ltYm9sOiBJY29uTmFtZS5MT0VTQ0hFTiwgb3V0ZXI6ICdvdXRsaW5lJ31cbiAgICAgICAgICB9LFxuICAgICAgICAgIGhpbnp1ZnVlZ2VuOiB7XG4gICAgICAgICAgICB0ZXh0OiAnSGluenVmw7xnZW4nLFxuICAgICAgICAgICAgdGhlbWU6IE1yZFNCdXR0b25UeXBlLk5FVVRSQUxfSEFSRCxcbiAgICAgICAgICAgIGljb25FbmQ6IGZhbHNlLFxuICAgICAgICAgICAgaWNvbjoge3N5bWJvbDogSWNvbk5hbWUuUExVUywgb3V0ZXI6ICdvdXRsaW5lJ31cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBnZW9JY29uOiB7XG4gICAgICAgIHdpZHRoOiBcIjQwcHhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcbiAgICAgICAgbWFyZ2luOiBcIjVweFwiLFxuICAgICAgICB0cmFuc2l0aW9uVGltZTogXCIxc1wiLFxuICAgICAgICBtYWluQ29sb3I6IE1yZENvbG9yLlNDSFdBUlosXG4gICAgICAgIG1haW5TZWxlY3RlZENvbG9yOiBNcmRDb2xvci5XRUlTUyxcbiAgICAgICAgbWFpbk9wYWNpdHk6IDAuMixcbiAgICAgICAgbWFpblNlbGVjdGVkT3BhY2l0eTogMSxcbiAgICAgICAgYmFja0NvbG9yOiBNcmRDb2xvci5TQ0hXQVJaLFxuICAgICAgICBiYWNrU2VsZWN0ZWRDb2xvcjogTXJkQ29sb3IuV0VJU1MsXG4gICAgICAgIGJhY2tPcGFjaXR5OiAwLjIsXG4gICAgICAgIGJhY2tTZWxlY3RlZE9wYWNpdHk6IDAuMixcbiAgICAgICAgb3ZlcmxheUNvbG9yOiBNcmRDb2xvci5HUlVFTl9MSUdIVCxcbiAgICAgICAgb3ZlcmxheVNlbGVjdGVkQ29sb3I6IFwiI2ZmYTUwMFwiLFxuICAgICAgICBvdmVybGF5T3BhY2l0eTogMSxcbiAgICAgICAgb3ZlcmxheVNlbGVjdGVkT3BhY2l0eTogMVxuICAgICAgfSxcbiAgICAgIGNoZWNrYm94OiB7XG4gICAgICAgIGNoZWNrYm94U2l6ZTogXCIxNnB4XCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICB1bnNlbGVjdGVkOiB7XG4gICAgICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IE1yZENvbG9yLldFSVNTLFxuICAgICAgICAgICAgICB0ZXh0OiBNcmRDb2xvci5TQ0hXQVJaXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZWxlY3RlZDoge1xuICAgICAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBNcmRDb2xvci5HUlVFTixcbiAgICAgICAgICAgICAgdGV4dDogTXJkQ29sb3IuV0VJU1NcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0b2dnbGVTd2l0Y2g6IHsgIFxuICAgICAgICB3aWR0aDogXCI2NHB4XCIsXG4gICAgICAgIGhlaWdodDogXCIyOHB4XCIsXG4gICAgICAgIGJnQ29sb3I6IE1yZENvbG9yLkdSVUVOLFxuICAgICAgICBiZ05ldXRyYWxDb2xvcjogXCIjNzg3ODc4MzNcIixcbiAgICAgICAga25vYkNvbG9yOiBNcmRDb2xvci5XRUlTUyxcbiAgICAgICAga25vYk5ldXRyYWxDb2xvcjogTXJkQ29sb3IuV0VJU1MsXG4gICAgICAgIGJnRGlzYWJsZWRDb2xvcjogXCIjZGZkZmRmXCIsXG4gICAgICAgIGtub2JEaXNhYmxlZENvbG9yOiBcIiNmM2YzZjNcIixcbiAgICAgICAgc2xpbToge1xuICAgICAgICAgIHdpZHRoOiBcIjQwcHhcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMjRweFwiLFxuICAgICAgICAgIHRyYWNrSGVpZ2h0OiBcIjEycHhcIixcbiAgICAgICAgICBrbm9iQm9yZGVyOiBcIjFweCBzb2xpZCAjMjkzRDRGXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxpc3Q6IHtcbiAgICAgICAgaXRlbVNpemU6IDQ4LFxuICAgICAgICBzZWxlY3RlZEJhY2tncm91bmRDb2xvcjogTXJkQ29sb3IuR1JVRU4sXG4gICAgICAgIHNlbGVjdGVkVGV4dENvbG9yOiBNcmRDb2xvci5XRUlTUyxcbiAgICAgICAgaG92ZXJDb2xvcjogXCIjZTdlN2U3XCIsXG4gICAgICAgIGRpdmlkZXJDb2xvcjogXCIjMDAwMDAwMWZcIlxuICAgICAgfSxcbiAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgaGVpZ2h0OiBcIjU2cHhcIixcbiAgICAgICAgcGFkZGluZzogXCIwIDE2cHhcIixcbiAgICAgICAgZm9udFNpemU6IFwiMjBweFwiLFxuICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y1ZjVmNVwiLFxuICAgICAgICB0ZXh0Q29sb3I6IFwiIzAwMDAwMGRlXCIsXG4gICAgICAgIGdyZWVuOiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogTXJkQ29sb3IuR1JVRU4sXG4gICAgICAgICAgdGV4dDogTXJkQ29sb3IuV0VJU1NcbiAgICAgICAgfSxcbiAgICAgICAgZ3JleToge1xuICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2U3ZTdlN1wiLFxuICAgICAgICAgIHRleHQ6IE1yZENvbG9yLkdSQVVcbiAgICAgICAgfSxcbiAgICAgICAgYmx1ZToge1xuICAgICAgICAgIGJhY2tncm91bmQ6IE1yZENvbG9yLkdSQVVfQkxBVSxcbiAgICAgICAgICB0ZXh0OiBNcmRDb2xvci5XRUlTU1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2lkZW5hdjoge1xuICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIG1heFdpZHRoOiBcIjU1MHB4XCJcbiAgICAgIH0sXG4gICAgICBpY29uOiB7XG4gICAgICAgIHNpemU6IFwiMjRweFwiXG4gICAgICB9LFxuICAgICAgZXhwYW5zaW9uUGFuZWw6IHtcbiAgICAgICAgaGVhZGVySGVpZ2h0OiBcIjU2cHhcIixcbiAgICAgICAgaGVhZGVyUGFkZGluZzogXCIwIDI0cHhcIixcbiAgICAgICAgaGVhZGVyQmFja2dyb3VuZDogTXJkQ29sb3IuV0VJU1MsXG4gICAgICAgIGhlYWRlckNvbG9yOiBNcmRDb2xvci5HUkFVLFxuICAgICAgICBiYWNrZ3JvdW5kOiBNcmRDb2xvci5XRUlTUyxcbiAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IFwiMjI1bXNcIlxuICAgICAgfSxcbiAgICAgIHNvcnQ6IHtcbiAgICAgICAgYXJyb3dTaXplOiBcIjE2cHhcIlxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19