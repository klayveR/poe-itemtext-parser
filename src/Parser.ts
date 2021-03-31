import { Memoize } from "typescript-memoize";

import * as Parsers from "@functions/parsers";
import * as Enums from "@models/enums";
import * as Models from "@models/index";
import { ItemText } from "@root/ItemText";

export class Parser {
    public itemtext: ItemText;

    constructor(itemtext: string) {
        this.itemtext = new ItemText(itemtext);
    }

    protected parseRarity = Parsers.parseRarity;
    protected parseName = Parsers.parseName;
    protected parseItemLevel = Parsers.parseItemLevel;
    protected parseNote = Parsers.parseNote;
    protected parseFlags = Parsers.parseFlags;
    protected parseRequirements = Parsers.parseRequirements;
    protected parseOffense = Parsers.parseOffense;
    protected parseDefense = Parsers.parseDefense;
    protected parseFlask = Parsers.parseFlask;
    protected parseSockets = Parsers.parseSockets;
    protected parseStackSize = Parsers.parseStackSize;
    protected parseBeast = Parsers.parseBeast;
    protected parseGem = Parsers.parseGem;
    protected parseTalisman = Parsers.parseTalisman;
    protected parseBaseItem = Parsers.parseBaseItem;
    protected parseAffixes = Parsers.parseAffixes;
    protected parseMap = Parsers.parseMap;
    protected parseQuality = Parsers.parseQuality;
    protected parseDivinationCard = Parsers.parseDivinationCard;
    protected parseProphecy = Parsers.parseProphecy;
    protected parseMetamorph = Parsers.parseMetamorph;

    @Memoize()
    public get parsed(): Record<string, unknown> {
        return {
            baseItem: this.baseItem,
            rarity: this.rarity,
            name: this.name,
            itemLevel: this.itemLevel,
            note: this.note,
            flags: this.flags,
            requirements: this.requirements,
            offense: this.offense,
            defense: this.defense,
            flask: this.flask,
            sockets: this.sockets,
            stackSize: this.stackSize,
            beast: this.beast,
            gem: this.gem,
            talisman: this.talisman,
            affixes: this.affixes,
            map: this.map,
            quality: this.quality,
            divinationCard: this.divinationCard,
            prophecy: this.prophecy,
            metamorph: this.metamorph,
        };
    }

    @Memoize()
    public get rarity(): Enums.Rarity {
        return this.parseRarity();
    }

    @Memoize()
    public get name(): string {
        return this.parseName();
    }

    @Memoize()
    public get baseItem(): string {
        return this.parseBaseItem();
    }

    @Memoize()
    public get flags(): Models.Flags {
        return this.parseFlags();
    }

    @Memoize()
    public get itemLevel(): number | undefined {
        return this.parseItemLevel();
    }

    @Memoize()
    public get note(): string | undefined {
        return this.parseNote();
    }

    @Memoize()
    public get requirements(): Models.Requirements | undefined {
        return this.parseRequirements();
    }

    @Memoize()
    public get offense(): Models.Offense | undefined {
        return this.parseOffense();
    }

    @Memoize()
    public get defense(): Models.Defense | undefined {
        return this.parseDefense();
    }

    @Memoize()
    public get flask(): Models.Flask | undefined {
        return this.parseFlask();
    }

    @Memoize()
    public get sockets(): Models.Sockets | undefined {
        return this.parseSockets();
    }

    @Memoize()
    public get stackSize(): Models.StackSize | undefined {
        return this.parseStackSize();
    }

    @Memoize()
    public get beast(): Models.Beast | undefined {
        return this.parseBeast();
    }

    @Memoize()
    public get gem(): Models.Gem | undefined {
        return this.parseGem();
    }

    @Memoize()
    public get talisman(): Models.Talisman | undefined {
        return this.parseTalisman();
    }

    @Memoize()
    public get affixes(): Models.Affix[] | undefined {
        return this.parseAffixes();
    }

    @Memoize()
    public get map(): Models.Map | undefined {
        return this.parseMap();
    }

    @Memoize()
    public get quality(): Models.Quality | undefined {
        return this.parseQuality();
    }

    @Memoize()
    public get divinationCard(): Models.DivinationCard | undefined {
        return this.parseDivinationCard();
    }

    @Memoize()
    public get prophecy(): Models.Prophecy | undefined {
        return this.parseProphecy();
    }

    @Memoize()
    public get metamorph(): Models.Metamorph | undefined {
        return this.parseMetamorph();
    }
}
