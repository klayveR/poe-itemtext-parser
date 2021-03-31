import { Rarity } from "@models/enums";
import { DivinationCard } from "@models/index";
import { Parser } from "@root/Parser";
import { Patterns } from "@root/Patterns";

export function parseDivinationCard(this: Parser): DivinationCard | undefined {
    if (this.rarity !== Rarity.DivinationCard) {
        return;
    }

    const stackSizeIdx = this.itemtext.findSectionIndex(Patterns.StackSize);
    if (stackSizeIdx === undefined) {
        return;
    }

    const section = this.itemtext.getSection(stackSizeIdx + 1);
    if (section !== undefined) {
        return {
            reward: section.lines,
        };
    }
}
