import { Rarity } from "@models/enums";
import { Parser } from "@root/Parser";
import { Patterns } from "@root/Patterns";

export function parseRarity(this: Parser): Rarity {
    const match = Patterns.Rarity.exec(this.itemtext.raw);

    if (match) {
        const matchedRarity: string = match[1];

        // TODO: Figure out why tf this loop is here
        for (const key in Rarity) {
            const value: Rarity = Rarity[key as keyof typeof Rarity];

            if (matchedRarity === value) {
                return value;
            }
        }
    }

    return Rarity.Unknown;
}
