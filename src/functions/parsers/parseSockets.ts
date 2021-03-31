import { Sockets } from "@models/index";
import { Parser } from "@root/Parser";
import { Patterns } from "@root/Patterns";

export function parseSockets(this: Parser): Sockets | undefined {
    const match = Patterns.Sockets.exec(this.itemtext.raw);

    if (match) {
        const data: Sockets = {
            groups: [],
            count: {
                links: 0,
                sockets: 0,
            },
        };

        const socketString = match[1];

        let linkedStrings: string[] = socketString.split(" ");
        linkedStrings = linkedStrings.filter((e) => e);

        const groups: string[][] = [];
        for (const linkedString of linkedStrings) {
            const linkedArray = linkedString.split("-");
            groups.push(linkedArray);
        }

        if (groups.length > 0) {
            const lengths: number[] = groups.map((group) => group.length);
            data.count.links = Math.max(...lengths);
            data.count.sockets = lengths.reduce((pv, cv) => pv + cv, 0);
            data.groups = groups;
        }

        return data;
    }
}
