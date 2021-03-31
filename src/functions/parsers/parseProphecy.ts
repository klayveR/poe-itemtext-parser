import { Prophecy } from "@models/index";
import { Parser } from "@root/Parser";
import { Patterns } from "@root/Patterns";

export function parseProphecy(this: Parser): Prophecy | undefined {
    if (Patterns.Prophecy.test(this.itemtext.raw) === false) {
        return;
    }

    const flavourTextSection = this.itemtext.getSection(1);
    const objectiveSection = this.itemtext.getSection(2);
    if (flavourTextSection === undefined || objectiveSection === undefined) {
        return;
    }

    return {
        objective: objectiveSection.lines.join(),
        flavourText: flavourTextSection.lines.join(),
    };
}
