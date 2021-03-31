import { Memoize } from "typescript-memoize";

import { Patterns } from "@root/Patterns";
import { Section } from "@root/Section";

export class ItemText {
    public raw: string;
    public sections: Section[];

    constructor(itemtext: string) {
        this.raw = ItemText.prepareText(itemtext);
        this.sections = ItemText.getSections(this.raw);
    }

    @Memoize()
    public findSectionIndex(pattern: RegExp): number | undefined {
        for (let i = 0; i < this.sections.length; i++) {
            const section = this.sections[i];
            if (pattern.test(section.text)) {
                return i;
            }
        }
    }

    @Memoize()
    public getSection(index: number): Section | undefined {
        if (typeof this.sections[index] !== "undefined") {
            return this.sections[index];
        }
    }

    @Memoize()
    public getLineInSection(lineIdx: number, sectionIdx: number): string | undefined {
        const section = this.getSection(sectionIdx);

        if (section !== undefined) {
            return section.getLine(lineIdx);
        }
    }

    protected static prepareText(text: string): string {
        const prepared = text.replace(Patterns.CannotUse, "");
        return prepared.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm, "");
    }

    protected static getSections(text: string): Section[] {
        let sectionStrings = text.split(Patterns.SectionDelimiter);
        sectionStrings = sectionStrings.filter((e) => e);

        const sections: Section[] = [];
        for (const sectionString of sectionStrings) {
            const section = new Section(sectionString);
            sections.push(section);
        }

        return sections;
    }
}
