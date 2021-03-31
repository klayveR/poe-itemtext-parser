import RegExpUtil from "@functions/RegExpUtil";
import { Quality } from "@models/index";
import { Parser } from "@root/Parser";
import { Patterns } from "@root/Patterns";

export function parseQuality(this: Parser): Quality | undefined {
    if (Patterns.Quality.test(this.itemtext.raw) === false) {
        return;
    }

    const data: Quality = {
        value: RegExpUtil.getMatchAsNumber(Patterns.Quality, this.itemtext.raw) || 0,
    };

    const catalyst = RegExpUtil.getMatchAsString(Patterns.QualityCatalyst, this.itemtext.raw);

    if (catalyst !== undefined) {
        data.catalyst = catalyst;
    }

    return data;
}
