import "mocha";

import { expect } from "chai";
import fs from "fs";
import util from "util";

import { Parser } from "@root/Parser";

const readFile = util.promisify(fs.readFile);

describe("Beast", function () {
    let parser: Parser;

    before(async () => {
        const itemtext = await readFile("./src/resource/sample/beast.txt", "UTF-8");
        parser = new Parser(itemtext);
    });

    it("should parse base item as Imprinted Bestiary Orb", () => {
        expect(parser.baseItem).to.be.equal("Imprinted Bestiary Orb");
    });

    it("should have a beast property", () => {
        expect(parser.beast).to.not.be.undefined;
    });

    it("should parse beast family", () => {
        expect(parser.beast?.family).to.be.equal("The Deep");
    });

    it("should parse beast genus", () => {
        expect(parser.beast?.genus).to.be.equal("Maws");
    });

    it("should parse beast group", () => {
        expect(parser.beast?.group).to.be.equal("Amphibians");
    });
});
