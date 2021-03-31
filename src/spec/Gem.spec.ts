import "mocha";

import { expect } from "chai";
import fs from "fs";
import util from "util";

import { Parser } from "@root/Parser";

const readFile = util.promisify(fs.readFile);

describe("Gem", function () {
    let parser: Parser;

    before(async () => {
        const itemtext = await readFile("./src/resource/sample/anomalous_gem.txt", "UTF-8");
        parser = new Parser(itemtext);
    });

    it("should parse name", () => {
        expect(parser.name).to.be.equal("Anomalous Vaal Discipline");
    });

    it("should parse base item", () => {
        expect(parser.baseItem).to.be.equal("Discipline");
    });

    it("should parse rarity", () => {
        expect(parser.rarity).to.be.equal("Gem");
    });

    it("should have the gem property", () => {
        expect(parser.gem).to.not.be.undefined;
    });

    it("should have 5 tags", () => {
        expect(parser.gem?.tags.length).to.be.equal(5);
    });

    it("should parse quality", () => {
        expect(parser.quality?.value).to.be.equal(14);
    });

    it("should parse alternate quality", () => {
        expect(parser.gem?.alternateQuality).to.be.equal("Anomalous");
    });

    it("should parse experience", () => {
        expect(parser.gem?.experience?.current).to.be.equal(211877683);
        expect(parser.gem?.experience?.next).to.be.equal(211877683);
    });

    it("should parse level", () => {
        expect(parser.gem?.level).to.be.equal(19);
    });

    it("should parse requirements", () => {
        expect(parser.requirements?.level).to.be.equal(68);
        expect(parser.requirements?.intelligence).to.be.equal(151);
    });
});
