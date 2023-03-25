import "mocha";

import { expect } from "chai";
import fs from "fs";
import util from "util";

import { Parser } from "@root/Parser";

const readFile = util.promisify(fs.readFile);

describe("Rare Dragonscale Influenced", function () {
    let parser: Parser;

    before(async () => {
        const itemtext = await readFile("./src/resource/sample/dragonscale_chest.txt", "UTF-8");
        parser = new Parser(itemtext);
    });

    it('should parse item class as Body Armours', () => {
        expect(parser.itemClass).to.be.equal("Body Armours");
    });

    it("should parse base item as Full Dragonscale", () => {
        expect(parser.baseItem).to.be.equal("Full Dragonscale");
    });

    it("should parse item name as Havoc Carapace", () => {
        expect(parser.name).to.be.equal("Havoc Carapace");
    });

    it("should have an armour stat of 1019", () => {
        expect(parser.defense?.armour).to.be.equal(1019);
    });

    it("should be of the rare rarity", () => {
        expect(parser.rarity).to.be.equal("Rare");
    });

    it("should not have the synthesised flag", () => {
        expect(parser.flags.synthesised).to.be.false;
    });

    it("should have the identified flag", () => {
        expect(parser.flags.identified).to.be.true;
    });

    it("should have the defense property", () => {
        expect(parser.defense).to.not.be.undefined;
    });

    it("should not have the offense property", () => {
        expect(parser.offense).to.be.undefined;
    });

    it("should have the affixes property", () => {
        expect(parser.affixes).to.not.be.undefined;
    });

    it("should parse 2 implicit affix", () => {
        expect(parser.affixes?.filter((affix) => affix.type === "implicit").length).to.be.equal(2);
    });

    it("should parse 7 explicit affixes", () => {
        expect(parser.affixes?.filter((affix) => affix.type === "explicit").length).to.be.equal(7);
    });

    it("should have the eater of worlds influence flag", () => {
        expect(parser.flags.influence.eaterOfWorlds).to.be.true;
    })

    it("should have the searing exarch influence flag", () => {
        expect(parser.flags.influence.searingExarch).to.be.true;
    })

    it("should parse 0 veiled affix", () => {
        expect(parser.affixes?.filter((affix) => affix.type === "veiled").length).to.be.equal(0);
    });

    it("should parse socket count", () => {
        expect(parser.sockets?.count.sockets).to.be.equal(6);
    });

    it("should parse link count", () => {
        expect(parser.sockets?.count.links).to.be.equal(6);
    });

    it("should parse socket groups", () => {
        expect(parser.sockets?.groups.length).to.be.equal(1);
    });
});
