import BaseItems from "@resource/base_items.json";
import { Parser } from "@root/Parser";

export function parseBaseItem(this: Parser): string {
    const section = this.itemtext.getSection(0);
    if (section === undefined) {
        return "Unknown";
    }

    if (this.prophecy !== undefined) {
        return "Prophecy";
    }

    if (this.beast !== undefined) {
        return "Imprinted Bestiary Orb";
    }

    if (this.metamorph !== undefined) {
        return getMetamorphBaseItem(section.lines[1]);
    }

    // If Rare/Unique: line 3, if Normal/Magic: line 2
    let baseItem = section.lines.length === 3 ? section.lines[2] : section.lines[1];

    baseItem = section.lines.length === 4 ? section.lines[3] : baseItem;

    // Check if this base item is in game files
    // This will remove prefix/suffix from magic items, synthesised prefix, blighted prefix, ...
    const found = Object.values(BaseItems).find((item) => {
        return baseItem.includes(item.name);
    });

    if (found !== undefined) {
        baseItem = found.name;
    }

    return baseItem;
}

const getMetamorphBaseItem = (baseItem: string): string => {
    const types = ["Heart", "Brain", "Liver", "Lung", "Eye"];

    for (const type of types) {
        if (baseItem.includes(type)) {
            return `Metamorph ${type}`;
        }
    }

    return "Unknown Metamorph Sample";
};
