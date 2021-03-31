import RegExpUtil from "@functions/RegExpUtil";
import { Talisman } from "@models/index";
import { Parser } from "@root/Parser";
import { Patterns } from "@root/Patterns";

export function parseTalisman(this: Parser): Talisman | undefined {
    if (Patterns.TalismanTier.test(this.itemtext.raw) === false) {
        return;
    }

    return {
        tier: RegExpUtil.getMatchAsNumber(Patterns.TalismanTier, this.itemtext.raw) || 0,
    };
}
