import { Rarity } from "@models/enums";
import { Parser } from "@root/Parser";
import { Patterns } from "@root/Patterns";

export function parseName(this: Parser): string {
    let name = this.itemtext.getLineInSection(1, 0);

    // if the item has an Item Class: line then the name 1 more line down
    // this is a bit hacky but it allows for backwards compatibility
    if (Patterns.ItemClass.test(this.itemtext.raw)) {
        name = this.itemtext.getLineInSection(2, 0);
    }

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
