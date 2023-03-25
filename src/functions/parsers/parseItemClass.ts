import { Parser } from "@root/Parser";
import { Patterns } from "@root/Patterns";

export function parseItemClass(this: Parser): string {
    
    const match = Patterns.ItemClass.exec(this.itemtext.raw);

    if (match) {
        return match[1];
    }

    return "Unknown";
}
