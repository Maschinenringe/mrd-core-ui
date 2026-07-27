import { IconDirection } from './icon-factory.service';
import { IconName } from '../util/icon-lib';
import { MrdColor } from '../enum/color.enum';
import * as i0 from "@angular/core";
export declare class PredefinedIconsService {
    static GenerateIcon(outer: IconName | undefined, inner: IconName | undefined, color: MrdColor | {
        inner: MrdColor;
        outer: MrdColor;
    }, size?: number, innerDirection?: number | IconDirection): string;
    static BearbeitenOutlineBlau(size: number): string;
    static BearbeitenOutlineMrGruen(size: number): string;
    static BearbeitenOutlineGrauBlauLight(size: number): string;
    static SpeichernOutlineWeiss(size: number): string;
    static SpeichernOutlineGrauBlauLight(size: number): string;
    static SchliessenOutlineBlau(size: number): string;
    static SchliessenOutlineGrauBlauLight(size: number): string;
    static SchliessenOutlineHellblau(size: number): string;
    static LoeschenOutlineWeiss(size: number): string;
    static HinzufuegenOutlineBlau(size: number): string;
    static HinzufuegenOutlineGrauBlauLight(size: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PredefinedIconsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PredefinedIconsService>;
}
