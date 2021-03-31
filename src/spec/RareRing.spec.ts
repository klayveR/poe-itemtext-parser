import "mocha";

import { expect } from "chai";
import fs from "fs";
import util from "util";

import { Parser } from "@root/Parser";

const readFile = util.promisify(fs.readFile);

describe("Rare ring", function () {
    let parser: Parser;

    before(async () => {
        const itemtext = await readFile("./src/resource/sample/ring_catalyst.txt", "UTF-8");
        parser = new Parser(itemtext);
    });

    it("should have the fractured flag", () => {
        expect(parser.flags.fractured).to.be.true;
    });

    it("should have the corrupted flag", () => {
        expect(parser.flags.corrupted).to.be.true;
    });

    it("should have the catalyst type", () => {
        expect(parser.quality?.catalyst).to.be.equal("Caster Modifiers");
    });

    it("should have 1 fractured affix", () => {
        expect(parser.affixes?.filter((affix) => affix.type === "fractured").length).to.be.equal(1);
    });

    it("should have 1 crafted affixes", () => {
        expect(parser.affixes?.filter((affix) => affix.type === "crafted").length).to.be.equal(1);
    });
});
