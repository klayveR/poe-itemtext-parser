import "mocha";

import { expect } from "chai";
import fs from "fs";
import util from "util";

import { Parser } from "@root/Parser";

const readFile = util.promisify(fs.readFile);

describe("Currency", function () {
    let parser: Parser;

    before(async () => {
        const itemtext = await readFile("./src/resource/sample/mavens_orb.txt", "UTF-8");
        parser = new Parser(itemtext);
    });

    it("should parse rarity", () => {
        expect(parser.rarity).to.be.equal("Currency");
    });

    it("should have a stack size property", () => {
        expect(parser.stackSize).to.not.be.undefined;
    });

    it("should parse stack size", () => {
        expect(parser.stackSize?.size).to.be.equal(4);
    });

    it("should parse max stack size", () => {
        expect(parser.stackSize?.max).to.be.equal(10);
    });
});
