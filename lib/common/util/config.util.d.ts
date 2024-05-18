import { MrdConfig } from "../model/config.model";
export declare class ConfigUtil {
    private static config;
    private static customConfig;
    static setConfig(config: MrdConfig): void;
    static getConfig(): MrdConfig;
    private static extendObject;
    private static get baseConfig();
}
