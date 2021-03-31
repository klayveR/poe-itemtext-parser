import RegExpUtil from "@functions/RegExpUtil";
import { Beast } from "@models/index";
import { Parser } from "@root/Parser";
import { Patterns } from "@root/Patterns";

export function parseBeast(this: Parser): Beast | undefined {
    if (Patterns.BeastFamily.test(this.itemtext.raw) === false) {
        return;
    }

    return {
        genus: RegExpUtil.getMatchAsString(Patterns.BeastGenus, this.itemtext.raw) || "Unknown",
        group: RegExpUtil.getMatchAsString(Patterns.BeastGroup, this.itemtext.raw) || "Unknown",
        family: RegExpUtil.getMatchAsString(Patterns.BeastFamily, this.itemtext.raw) || "Unknown",
    };
}
