import RegExpUtil from "@functions/RegExpUtil";
import { Metamorph } from "@models/index";
import { Parser } from "@root/Parser";
import { Patterns } from "@root/Patterns";

export function parseMetamorph(this: Parser): Metamorph | undefined {
    if (Patterns.Metamorph.test(this.itemtext.raw) === false) {
        return;
    }

    return {
        uses:
            RegExpUtil.getMatchAsString(Patterns.MetamorphAbility, this.itemtext.raw) || "Unknown",
    };
}
