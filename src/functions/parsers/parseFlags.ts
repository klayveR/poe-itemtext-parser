import { Flags } from "@models/Flags";
import { Parser } from "@root/Parser";
import { Patterns } from "@root/Patterns";

export function parseFlags(this: Parser): Flags {
    return {
        influence: {
            shaper: Patterns.InfluenceShaper.test(this.itemtext.raw),
            elder: Patterns.InfluenceElder.test(this.itemtext.raw),
            warlord: Patterns.InfluenceWarlord.test(this.itemtext.raw),
            redeemer: Patterns.InfluenceRedeemer.test(this.itemtext.raw),
            hunter: Patterns.InfluenceHunter.test(this.itemtext.raw),
            crusader: Patterns.InfluenceCrusader.test(this.itemtext.raw),
            eaterOfWorlds: Patterns.InfluenceEaterOfWorlds.test(this.itemtext.raw),
            searingExarch: Patterns.InfluenceSearingExarch.test(this.itemtext.raw)
        },
        relic: Patterns.Relic.test(this.itemtext.raw),
        replica: Patterns.Replica.test(this.name),
        corrupted: Patterns.Corrupted.test(this.itemtext.raw),
        identified: Patterns.Unidentified.test(this.itemtext.raw) === false,
        synthesised: Patterns.Synthesised.test(this.itemtext.raw),
        fractured: Patterns.Fractured.test(this.itemtext.raw),
        mirrored: Patterns.Mirrored.test(this.itemtext.raw),
        veiled: Patterns.AffixVeiled.test(this.itemtext.raw),
    };
}
