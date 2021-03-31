import RegExpUtil from "@functions/RegExpUtil";
import { Map } from "@models/index";
import { Parser } from "@root/Parser";
import { Patterns } from "@root/Patterns";

export function parseMap(this: Parser): Map | undefined {
    if (Patterns.MapTier.test(this.itemtext.raw) === false) {
        return;
    }

    return {
        quantity: RegExpUtil.getMatchAsNumber(Patterns.MapQuantity, this.itemtext.raw) || 0,
        rarity: RegExpUtil.getMatchAsNumber(Patterns.MapRarity, this.itemtext.raw) || 0,
        packSize: RegExpUtil.getMatchAsNumber(Patterns.MapPackSize, this.itemtext.raw) || 0,
        tier: RegExpUtil.getMatchAsNumber(Patterns.MapTier, this.itemtext.raw) || 0,
        blighted: Patterns.MapBlighted.test(this.itemtext.raw),
        shaped: Patterns.MapShaped.test(this.itemtext.raw),
        elder: Patterns.MapElder.test(this.itemtext.raw),
        region: RegExpUtil.getMatchAsString(Patterns.MapRegion, this.itemtext.raw) || "Unknown",
    };
}
