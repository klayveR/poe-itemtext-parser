import RegExpUtil from "@functions/RegExpUtil";
import { Defense } from "@models/index";
import { Parser } from "@root/Parser";
import { Patterns } from "@root/Patterns";

export function parseDefense(this: Parser): Defense | undefined {
    const blockChance = RegExpUtil.getMatchAsNumber(Patterns.BlockChance, this.itemtext.raw);
    const evasion = RegExpUtil.getMatchAsNumber(Patterns.Evasion, this.itemtext.raw);
    const energyShield = RegExpUtil.getMatchAsNumber(Patterns.EnergyShield, this.itemtext.raw);
    const armour = RegExpUtil.getMatchAsNumber(Patterns.Armour, this.itemtext.raw);

    if (
        blockChance !== undefined ||
        evasion !== undefined ||
        energyShield !== undefined ||
        armour !== undefined
    ) {
        return {
            blockChance: blockChance || 0,
            evasion: evasion || 0,
            energyShield: energyShield || 0,
            armour: armour || 0,
        };
    }
}
