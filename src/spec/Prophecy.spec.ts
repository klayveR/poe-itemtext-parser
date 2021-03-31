import "mocha";

import { expect } from "chai";
import fs from "fs";
import util from "util";

import { Parser } from "@root/Parser";

const readFile = util.promisify(fs.readFile);

describe("Prophecy", function () {
    let parser: Parser;

    before(async () => {
        const itemtext = await readFile("./src/resource/sample/prophecy.txt", "UTF-8");
        parser = new Parser(itemtext);
    });

    it("should parse base item as Prophecy", () => {
        expect(parser.baseItem).to.be.equal("Prophecy");
    });

    it("should have the prophecy property", () => {
        expect(parser.prophecy).to.not.be.undefined;
    });

    it("should not have the affixes property", () => {
        expect(parser.affixes).to.be.undefined;
    });

    it("should parse flavour text correctly", () => {
        expect(parser.prophecy?.flavourText).to.be.equal(
            "Beyond the golden gears, the edges of reality crack, and something hidden from sight spills through"
        );
    });

    it("should parse objective correctly", () => {
        expect(parser.prophecy?.objective).to.be.equal(
            "You will find and destroy monsters from Beyond who are trying to invade Wraeclast through the map device"
        );
    });
});
