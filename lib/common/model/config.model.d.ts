export interface SConfigModel {
    baseColors: {
        primary: string;
        accent: string;
        warn: string;
    };
    button?: {
        primary?: string;
        accent?: string;
        warn?: string;
        textLight?: string;
        textDark?: string;
        defaultBg?: string;
        defaultHover?: string;
        defaultActive?: string;
        defaultDisabledTextColor?: string;
        defaultDisabledBgColor?: string;
        outline?: {
            border?: string;
            borderWidth?: string;
            broderStyle?: string;
        };
    };
}
