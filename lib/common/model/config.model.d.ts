export interface MrdConfigModel {
    baseFont?: MrdBaseFont;
    baseColors: MrdBaseColor;
    button?: MrdButton;
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
    };
}
export interface MrdBaseFont {
    size?: string;
    family: string;
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
export interface MrdBorder {
    width: string;
    style: string;
    color: string;
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
