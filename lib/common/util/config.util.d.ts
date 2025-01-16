import { MrdConfigModel } from "../model/config.model";
export declare class ConfigUtil {
    private static config;
    private static customConfig;
    static setConfig(config: MrdConfigModel): void;
    static getConfig(): MrdConfigModel;
    private static extendObject;
    static getMostSpecificValue(entry: string[]): any;
    private static get baseConfig();
}
