import "mocha";

import { expect } from "chai";
import fs from "fs";
import util from "util";

import { Parser } from "@root/Parser";

const readFile = util.promisify(fs.readFile);

describe("Divination Card", function () {
    let parser: Parser;

    before(async () => {
        const itemtext = await readFile("./src/resource/sample/divination_card.txt", "UTF-8");
        parser = new Parser(itemtext);
    });

    it("should parse rarity", () => {
        expect(parser.rarity).to.be.equal("Divination Card");
    });

    it("should have divination card property", () => {
        expect(parser.divinationCard).to.not.be.null;
    });

    it("should parse reward", () => {
        expect(parser.divinationCard?.reward[0]).to.be.equal("Diamond Ring");
    });
});
