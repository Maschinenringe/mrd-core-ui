export interface MrdConfigModel {
    baseFont?: MrdBaseFont;
    baseColors: MrdBaseColor;
    button?: MrdButton;
    sButton?: MrdSButton;
    geoIcon?: MrdGeoIcon;
    formField?: {
        focusColor?: string;
        focusColorDark?: string;
        /** Wird aus focusColor errechnet, wenn nicht angegeben */
        focusColorOutline?: string;
        errorColor?: string;
        erroColorDark?: string;
        /** Wird aus errorColor errechnet, wenn nicht angegeben */
        errorColorOutline?: string;
        borderRadius?: string;
        borderRadiusRounded?: string;
        fill?: {
            backgroundColor?: string;
        };
        input?: {
            color?: string;
        };
    };
    checkbox?: MrdCheckbox;
    toggleSwitch?: MrdToggleSwitch;
}
export interface MrdBaseFont {
    size?: string;
    family?: string;
    weight?: string;
}
export interface MrdBaseColor {
    primary?: string | MrdBaseColorTheme;
    accent?: string | MrdBaseColorTheme;
    warn?: string | MrdBaseColorTheme;
    disabled?: string | MrdBaseColorTheme;
}
export interface MrdBaseColorButton {
    primary?: string | MrdBaseColorTheme;
    accent?: string | MrdBaseColorTheme;
    warn?: string | MrdBaseColorTheme;
    disabled?: MrdBaseColorTheme;
}
export interface MrdBaseColorTheme {
    text: string;
    background: string;
    border?: string | MrdBorder;
}
export interface MrdButton extends MrdBaseColorButton, MrdButtonAppearance {
    outline?: MrdButtonAppearance;
    flat?: MrdButtonAppearance;
    raised?: MrdButtonAppearance;
    icon?: MrdButtonAppearance;
    fab?: MrdButtonAppearance;
    miniFab?: MrdButtonAppearance;
    toggle?: MrdButtonAppearance;
}
export interface MrdButtonAppearance extends MrdBaseColorButton {
    backgroundColor?: string;
    textLightColor?: string;
    textDarkColor?: string;
    hoverColor?: string;
    activeColor?: string;
    progressColor?: string;
    unselectedBgColor?: string;
    border?: string | MrdBorder;
    borderRadius?: string;
    fontSize?: string;
    fontFamily?: string;
    minHeight?: string;
    diameter?: string;
    iconSize?: string;
}
export interface MrdSButton extends MrdSButtonTheme, MrdSButtonSize {
    primary?: MrdSButtonTheme;
    secondary?: MrdSButtonTheme;
    negative?: MrdSButtonTheme;
    neutralLight?: MrdSButtonTheme;
    neutralHard?: MrdSButtonTheme;
    textOnlyDarkHover?: MrdSButtonTheme;
    small?: MrdSButtonSize;
    icon?: MrdSButtonSize;
    fullIcon?: MrdSButtonSize;
    definedButtons?: {
        bearbeiten: MrdDefinedButton;
        speichern: MrdDefinedButton;
        abbrechen: MrdDefinedButton;
        schliessenIcon: MrdDefinedButton;
        loeschen: MrdDefinedButton;
        hinzufuegen: MrdDefinedButton;
    };
}
export interface MrdSButtonTheme {
    text?: MrdSButtonStateColor;
    background?: MrdSButtonStateColor;
    progress?: MrdSButtonStateColor;
    border?: MrdSButtonStateColor | string;
}
export interface MrdSButtonStateColor {
    default?: string;
    hover?: string;
    disabled?: string;
    active?: string;
}
export interface MrdSButtonSize {
    padding?: string;
    borderRadius?: string;
    font?: MrdBaseFont;
    minHeight?: string;
    diameter?: string;
    iconSize?: string;
    iconSizeNumber?: number;
    textIconGap?: string;
}
export interface MrdPadding {
    top: string;
    right: string;
    bottom: string;
    left: string;
}
export interface MrdBorder {
    width: string;
    style: string;
    color: string;
}
export interface MrdDefinedButton {
    text?: string;
    theme?: MrdSButtonType;
    iconEnd?: boolean;
    iconGroup?: MrdDefinedButtonIconGroup;
}
export interface MrdDefinedButtonIconGroup {
    default?: (size: number) => string;
    disabled?: (size: number) => string;
    hover?: (size: number) => string;
    active?: (size: number) => string;
}
export interface MrdGeoIcon {
    width?: string;
    height?: string;
    margin?: string;
    transitionTime?: string;
    mainColor?: string;
    mainSelectedColor?: string;
    overlayColor?: string;
    overlaySelectedColor?: string;
    backColor?: string;
    backSelectedColor?: string;
    mainOpacity?: number;
    mainSelectedOpacity?: number;
    overlayOpacity?: number;
    overlaySelectedOpacity?: number;
    backOpacity?: number;
    backSelectedOpacity?: number;
}
export interface MrdCheckbox extends MrdBaseColor {
    fill?: {
        unselected?: MrdBaseColor;
        selected?: MrdBaseColor;
    };
    outline?: {
        unselected?: MrdBaseColor;
        selected?: MrdBaseColor;
    };
    checkboxSize?: string;
}
export interface MrdToggleSwitch {
    width?: string;
    height?: string;
    bgColor?: string;
    bgNeutralColor?: string;
    knobColor?: string;
    knobNeutralColor?: string;
    bgDisabledColor?: string;
    knobDisabledColor?: string;
}
export declare enum MrdSButtonType {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    NEGATIVE = "negative",
    NEUTRAL_LIGHT = "neutralLight",
    NEUTRAL_HARD = "neutralHard",
    TEXT_ONLY = "textOnly",
    TEXT_ONLY_DARK_HOVER = "textOnlyDarkHover"
}
export declare enum MrdSButtonSizeType {
    SMALL = "small",
    BIG = "big",
    ICON = "icon",
    FULL_ICON = "fullIcon"
}
