import RegExpUtil from "@functions/RegExpUtil";
import { Flask } from "@models/index";
import { Parser } from "@root/Parser";
import { Patterns } from "@root/Patterns";

export function parseFlask(this: Parser): Flask | undefined {
    const chargesMatch = Patterns.FlaskCharges.exec(this.itemtext.raw);

    if (chargesMatch) {
        return {
            charges: {
                consumes: parseInt(chargesMatch[1], 10),
                max: parseInt(chargesMatch[2], 10),
            },
            duration: RegExpUtil.getMatchAsNumber(Patterns.FlaskDuration, this.itemtext.raw) || 0,
        };
    }
}
