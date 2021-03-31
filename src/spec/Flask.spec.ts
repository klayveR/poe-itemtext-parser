import "mocha";

import { expect } from "chai";
import fs from "fs";
import util from "util";

import { Parser } from "@root/Parser";

const readFile = util.promisify(fs.readFile);

describe("Flask", function () {
    let parser: Parser;

    before(async () => {
        const itemtext = await readFile("./src/resource/sample/flask.txt", "UTF-8");
        parser = new Parser(itemtext);
    });

    it("should parse rarity", () => {
        expect(parser.rarity).to.be.equal("Normal");
    });

    it("should have a flask property", () => {
        expect(parser.flask).to.not.be.undefined;
    });

    it("should parse flask duration", () => {
        expect(parser.flask?.duration).to.be.equal(8);
    });

    it("should parse charges consumed on use", () => {
        expect(parser.flask?.charges.consumes).to.be.equal(20);
    });

    it("should parse max charges", () => {
        expect(parser.flask?.charges.max).to.be.equal(60);
    });

    it("should have no explicit affixes", () => {
        expect(parser.affixes?.filter((affix) => affix.type === "explicit").length).to.be.equal(0);
    });
});
