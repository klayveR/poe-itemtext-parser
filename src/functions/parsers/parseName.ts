import { Rarity } from "@models/enums";
import { Parser } from "@root/Parser";
import { Patterns } from "@root/Patterns";

export function parseName(this: Parser): string {
    let name = this.itemtext.getLineInSection(1, 0);

    if (name === undefined) {
        return "Unknown";
    }

    if (this.rarity === Rarity.Gem) {
        const match = Patterns.VaalGem.exec(this.itemtext.raw);

        if (match) {
            name = match[1];
        }
    }

    return name;
}
