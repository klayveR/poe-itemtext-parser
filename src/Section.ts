import { Memoize } from "typescript-memoize";

export class Section {
    public text: string;
    public lines: string[];

    constructor(text: string) {
        this.text = Section.prepareText(text);
        this.lines = Section.getLines(this.text);
    }

    @Memoize()
    public getLine(index: number): string | undefined {
        if (typeof this.lines[index] !== "undefined") {
            return this.lines[index];
        }
    }

    /**
     * Removes trailing and leading newlines
     *
     * @param text
     * @returns
     */
    protected static prepareText(text: string): string {
        return text.replace(/^[\r\n]+|\.|[\r\n]+$/g, "");
    }

    protected static getLines(text: string): string[] {
        const lines = text.split(/\r?\n/);
        return lines.filter((e) => e);
    }
}
