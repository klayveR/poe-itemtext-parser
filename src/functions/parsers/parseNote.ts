import RegExpUtil from "@functions/RegExpUtil";
import { Parser } from "@root/Parser";
import { Patterns } from "@root/Patterns";

export function parseNote(this: Parser): string | undefined {
    return RegExpUtil.getMatchAsString(Patterns.Note, this.itemtext.raw);
}
