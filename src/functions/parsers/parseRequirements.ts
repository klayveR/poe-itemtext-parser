import RegExpUtil from "@functions/RegExpUtil";
import { Requirements } from "@models/index";
import { Parser } from "@root/Parser";
import { Patterns } from "@root/Patterns";

export function parseRequirements(this: Parser): Requirements | undefined {
    if (Patterns.Requirements.test(this.itemtext.raw) === false) {
        return;
    }

    return {
        level: RegExpUtil.getMatchAsNumber(Patterns.RequirementsLevel, this.itemtext.raw) || 0,
        strength: RegExpUtil.getMatchAsNumber(Patterns.RequirementsStr, this.itemtext.raw) || 0,
        dexterity: RegExpUtil.getMatchAsNumber(Patterns.RequirementsDex, this.itemtext.raw) || 0,
        intelligence: RegExpUtil.getMatchAsNumber(Patterns.RequirementsInt, this.itemtext.raw) || 0,
    };
}
