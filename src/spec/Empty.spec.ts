import "mocha";

import { expect } from "chai";

import { Parser } from "@root/Parser";

describe("Empty string as itemtext", function () {
    let parser: Parser;

    before(() => {
        parser = new Parser("");
    });

    it("should parse name as Unknown", () => {
        expect(parser.name).to.be.equal("Unknown");
    });

    it("should parse base item as Unknown", () => {
        expect(parser.baseItem).to.be.equal("Unknown");
    });

    it("should not have any properties", () => {
        expect(parser.metamorph).to.be.undefined;
        expect(parser.beast).to.be.undefined;
        expect(parser.talisman).to.be.undefined;
        expect(parser.divinationCard).to.be.undefined;
        expect(parser.flask).to.be.undefined;
        expect(parser.sockets).to.be.undefined;
        expect(parser.stackSize).to.be.undefined;
        expect(parser.affixes).to.be.undefined;
        expect(parser.note).to.be.undefined;
        expect(parser.itemLevel).to.be.undefined;
        expect(parser.map).to.be.undefined;
        expect(parser.offense).to.be.undefined;
        expect(parser.defense).to.be.undefined;
        expect(parser.gem).to.be.undefined;
        expect(parser.requirements).to.be.undefined;
        expect(parser.quality).to.be.undefined;
    });
});
