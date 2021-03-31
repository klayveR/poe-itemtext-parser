import RegExpUtil from "@functions/RegExpUtil";
import { Parser } from "@root/Parser";
import { Patterns } from "@root/Patterns";

export function parseItemLevel(this: Parser): number | undefined {
    return RegExpUtil.getMatchAsNumber(Patterns.ItemLevel, this.itemtext.raw);
}
