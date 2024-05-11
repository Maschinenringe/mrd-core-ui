import { MrdConfig } from "../model/config.model";
export declare class ConfigUtil {
    private static config;
    static getConfig(): MrdConfig;
    private static parseJsObject;
}
