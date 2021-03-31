import { AffixType, Rarity } from "@models/enums";
import { Affix } from "@models/index";
import { Parser } from "@root/Parser";
import { Patterns } from "@root/Patterns";

export function parseAffixes(this: Parser): Affix[] | undefined {
    if ([Rarity.Normal, Rarity.Magic, Rarity.Rare, Rarity.Unique].includes(this.rarity) === false) {
        return;
    }

    if (this.prophecy !== undefined) {
        return;
    }

    const affixes: Affix[] = [];
    const sectionIndices = getAffixSectionIndices(this);

    for (const index of sectionIndices) {
        const section = this.itemtext.getSection(index);

        if (section === undefined) {
            continue;
        }

        for (const line of section.lines) {
            const affix = stringToAffix(line);
            affixes.push(affix);
        }
    }

    return affixes;
}

const stringToAffix = (affixString: string): Affix => {
    const affix: Affix = {
        text: affixString,
        formatted: "",
        values: [],
        type: AffixType.Explicit,
    };

    // Determine flags and remove them from text
    affix.text = affixString
        .replace(Patterns.AffixEnchant, "")
        .replace(Patterns.AffixImplicit, "")
        .replace(Patterns.AffixCrafted, "")
        .replace(Patterns.AffixFractured, "");

    affix.type = Patterns.AffixEnchant.test(affixString) ? AffixType.Enchant : affix.type;
    affix.type = Patterns.AffixImplicit.test(affixString) ? AffixType.Implicit : affix.type;
    affix.type = Patterns.AffixCrafted.test(affixString) ? AffixType.Crafted : affix.type;
    affix.type = Patterns.AffixFractured.test(affixString) ? AffixType.Fractured : affix.type;
    affix.type = Patterns.AffixVeiled.test(affixString) ? AffixType.Veiled : affix.type;

    // Remove digits from text
    affix.formatted = affix.text.replace(Patterns.Digits, "#");

    // Get values
    let matches;
    while ((matches = Patterns.Digits.exec(affix.text)) !== null) {
        affix.values.push(parseFloat(matches[0]));
    }

    return affix;
};

const getAffixSectionIndices = (instance: Parser): number[] => {
    const indices: number[] = [];

    // Try to find enchant section
    const enchantIdx = instance.itemtext.findSectionIndex(Patterns.AffixEnchant);
    if (enchantIdx !== undefined) {
        indices.push(enchantIdx);
    }

    // Try to find implicit section
    const implicitIdx = instance.itemtext.findSectionIndex(Patterns.AffixImplicit);
    if (implicitIdx !== undefined) {
        indices.push(implicitIdx);
    }

    // Normal items have no explicits, don't bother, also skip if unidentified
    if (instance.rarity === Rarity.Normal || instance.flags.identified === false) {
        return indices;
    }

    // If implicit index found, explicit index must be next
    if (implicitIdx !== undefined) {
        indices.push(implicitIdx + 1);
        return indices;
    }

    // If implicit index not found, but enchant, explicit index must come after enchant
    if (implicitIdx === undefined && enchantIdx !== undefined) {
        indices.push(enchantIdx + 1);
        return indices;
    }

    // If implicit and enchant index not found, explicit must come after item level
    const itemlevelIdx = instance.itemtext.findSectionIndex(Patterns.ItemLevel);
    if (itemlevelIdx !== undefined) {
        indices.push(itemlevelIdx + 1);
        return indices;
    }

    // Hope this never happens :(
    return indices;
};
