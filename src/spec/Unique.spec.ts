import "mocha";

import { expect } from "chai";
import fs from "fs";
import util from "util";

import { Parser } from "@root/Parser";

const readFile = util.promisify(fs.readFile);

describe("Unique", function () {
    let parser: Parser;

    before(async () => {
        const itemtext = await readFile("./src/resource/sample/unique_enchanted.txt", "UTF-8");
        parser = new Parser(itemtext);
    });

    it("should parse rarity", () => {
        expect(parser.rarity).to.be.equal("Unique");
    });

    it("should parse 2 enchant affixes", () => {
        expect(parser.affixes?.filter((affix) => affix.type === "enchant").length).to.be.equal(2);
    });

    it("should parse 5 explicit affixes", () => {
        expect(parser.affixes?.filter((affix) => affix.type === "explicit").length).to.be.equal(5);
    });

    it("should have the defense property", () => {
        expect(parser.defense).to.not.be.undefined;
    });

    it("should parse energy shield", () => {
        expect(parser.defense?.energyShield).to.be.equal(312);
    });
});
