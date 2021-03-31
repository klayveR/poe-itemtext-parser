import "mocha";

import { expect } from "chai";
import fs from "fs";
import util from "util";

import { Parser } from "@root/Parser";

const readFile = util.promisify(fs.readFile);

describe("Jewel", function () {
    let parser: Parser;

    before(async () => {
        const itemtext = await readFile("./src/resource/sample/viridian_jewel.txt", "UTF-8");
        parser = new Parser(itemtext);
    });

    it("should parse 3 explicit affixes", () => {
        expect(parser.affixes?.filter((affix) => affix.type === "explicit").length).to.be.equal(3);
    });
});
