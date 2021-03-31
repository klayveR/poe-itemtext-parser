import "mocha";

import { expect } from "chai";
import fs from "fs";
import util from "util";

import { Parser } from "@root/Parser";

const readFile = util.promisify(fs.readFile);

describe("Metamorph Sample", function () {
    let parser: Parser;

    before(async () => {
        const itemtext = await readFile("./src/resource/sample/metamorph_sample.txt", "UTF-8");
        parser = new Parser(itemtext);
    });

    it("should parse base item as Metamorph Brain", () => {
        expect(parser.baseItem).to.be.equal("Metamorph Brain");
    });

    it("should have a metamorph property", () => {
        expect(parser.metamorph).to.not.be.undefined;
    });

    it("should parse metamorph ability correctly", () => {
        expect(parser.metamorph?.uses).to.be.equal("Shock Cascade");
    });
});
