import "mocha";

import { expect } from "chai";
import fs from "fs";
import util from "util";

import { Parser } from "@root/Parser";

const readFile = util.promisify(fs.readFile);

describe("Map", function () {
    let parser: Parser;

    before(async () => {
        const itemtext = await readFile("./src/resource/sample/fractured_tower.txt", "UTF-8");
        parser = new Parser(itemtext);
    });

    it("should parse note", () => {
        expect(parser.note).to.be.equal("~price 0.5 jewellers");
    });

    it("should have map property", () => {
        expect(parser.map).to.not.be.undefined;
    });

    it("should parse map tier", () => {
        expect(parser.map?.tier).to.be.equal(2);
    });

    it("should parse map quantity", () => {
        expect(parser.map?.quantity).to.be.equal(94);
    });

    it("should parse map rarity", () => {
        expect(parser.map?.rarity).to.be.equal(36);
    });

    it("should parse map pack size", () => {
        expect(parser.map?.packSize).to.be.equal(23);
    });

    it("should parse map region", () => {
        expect(parser.map?.region).to.be.equal("Glennach Cairns");
    });
});
