import "mocha";

import { expect } from "chai";
import fs from "fs";
import util from "util";

import { Parser } from "@root/Parser";

const readFile = util.promisify(fs.readFile);

describe("Talisman", function () {
    let parser: Parser;

    before(async () => {
        const itemtext = await readFile("./src/resource/sample/talisman.txt", "UTF-8");
        parser = new Parser(itemtext);
    });

    it("should have the talisman property", () => {
        expect(parser.talisman).to.not.be.undefined;
    });

    it("should parse talisman tier", () => {
        expect(parser.talisman?.tier).to.be.equal(3);
    });
});
