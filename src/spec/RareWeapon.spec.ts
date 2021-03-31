import "mocha";

import { expect } from "chai";
import fs from "fs";
import util from "util";

import { Parser } from "@root/Parser";

const readFile = util.promisify(fs.readFile);

describe("Rare weapon", function () {
    let parser: Parser;

    before(async () => {
        const itemtext = await readFile("./src/resource/sample/explode_wand.txt", "UTF-8");
        parser = new Parser(itemtext);
    });

    it("should parse base item as Tornado Wand", () => {
        expect(parser.baseItem).to.be.equal("Tornado Wand");
    });

    it("should have the synthesised flag", () => {
        expect(parser.flags.synthesised).to.be.true;
    });

    it("should have the identified flag", () => {
        expect(parser.flags.identified).to.be.true;
    });

    it("should have the offense property", () => {
        expect(parser.offense).to.not.be.undefined;
    });

    it("should have the affixes property", () => {
        expect(parser.affixes).to.not.be.undefined;
    });

    it("should parse 2 enchant affixes", () => {
        expect(parser.affixes?.filter((affix) => affix.type === "enchant").length).to.be.equal(2);
    });

    it("should parse 1 implicit affix", () => {
        expect(parser.affixes?.filter((affix) => affix.type === "implicit").length).to.be.equal(1);
    });

    it("should parse 4 explicit affixes", () => {
        expect(parser.affixes?.filter((affix) => affix.type === "explicit").length).to.be.equal(4);
    });

    it("should parse 1 veiled affix", () => {
        expect(parser.affixes?.filter((affix) => affix.type === "veiled").length).to.be.equal(1);
    });

    it("should parse socket count", () => {
        expect(parser.sockets?.count.sockets).to.be.equal(3);
    });

    it("should parse link count", () => {
        expect(parser.sockets?.count.links).to.be.equal(3);
    });

    it("should parse socket groups", () => {
        expect(parser.sockets?.groups.length).to.be.equal(1);
    });
});
