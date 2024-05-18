export interface MrdConfig {
    baseColors: MrdBaseColor;
    button?: MrdButton;
    formField?: {
        focusColor?: string;
        focusColorDark?: string;
        /** Wird aus focusColor errechnet, wenn nicht angegeben */
        focusColorOutline?: string;
        errorColor?: string;
        erroColorDark?: string;
        /** Wird aus errorColor errechnet, wenn nicht angegeben */
        errorColorOutline?: string;
    };
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
}
export interface MrdButtonAppearance extends MrdBaseColorButton {
    backgroundColor?: string;
    textLightColor?: string;
    textDarkColor?: string;
    hoverColor?: string;
    activeColor?: string;
    border?: string | MrdBorder;
    borderRadius?: string;
}
export interface MrdBorder {
    width: string;
    style: string;
    color: string;
}
