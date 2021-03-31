import RegExpUtil from "@functions/RegExpUtil";
import { Rarity } from "@models/enums";
import { Gem } from "@models/Gem";
import { Parser } from "@root/Parser";
import { Patterns } from "@root/Patterns";

export function parseGem(this: Parser): Gem | undefined {
    if (this.rarity !== Rarity.Gem) {
        return;
    }

    const section = this.itemtext.getSection(1);

    if (section === undefined) {
        return;
    }

    const data: Gem = {
        level: RegExpUtil.getMatchAsNumber(Patterns.GemLevel, section.text) || 1,
        tags: [],
    };

    // Experience
    const experienceMatch = Patterns.GemExperience.exec(this.itemtext.raw);
    if (experienceMatch) {
        data.experience = {
            current: parseInt(experienceMatch[1], 10),
            next: parseInt(experienceMatch[2], 10),
        };
    }

    // Alternate Quality
    if (Patterns.AlternateQuality.test(section.text)) {
        data.alternateQuality = this.name.replace(/\s.*/, "");
    }

    // Tags
    const tagLine = this.itemtext.getLineInSection(0, 1);
    if (tagLine) {
        data.tags = tagLine.split(", ");
    }

    return data;
}
