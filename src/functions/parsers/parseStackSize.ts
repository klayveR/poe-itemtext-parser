import { StackSize } from "@models/index";
import { Parser } from "@root/Parser";
import { Patterns } from "@root/Patterns";

export function parseStackSize(this: Parser): StackSize | undefined {
    const match = Patterns.StackSize.exec(this.itemtext.raw);

    if (match) {
        return {
            size: parseInt(match[1].replace(/,/g, ""), 10),
            max: parseInt(match[2].replace(/,/g, ""), 10),
        };
    }
}
