# Path of Exile Itemtext Parser

Parses itemtexts from the Path of Exile client (obtained via CTRL+C).

Please check out the [documentation](https://klayver.github.io/poe-itemtext-parser/) for more information.

# Getting started

**Install with npm:**

```bash
$ npm i @klayver/poe-itemtext-parser --save
```

# Known issues

-   Affixes are parsed incorrectly for magic, rare and unique items that have no explicit affixes

# Example

```typescript
import fs from "fs";
import util from "util";

import { Parser } from "@klayver/poe-itemtext-parser";

const readFile = util.promisify(fs.readFile);

void (async () => {
    const itemtext = await readFile("some_itemtext.txt", "UTF-8");
    const item = new Parser(itemtext);

    const data = {
        rarity: item.rarity,
        name: item.name,
        flags: item.flags,
        sockets: item.sockets,
        note: item.note,
        itemLevel: item.itemLevel,
        quality: item.quality,
        stackSize: item.stackSize,
        gem: item.gem,
        requirements: item.requirements,
        map: item.map,
        talisman: item.talisman,
        beast: item.beast,
        affixes: item.affixes,
        flask: item.flask,
        offense: item.offense,
        defense: item.defense,
        baseItem: item.baseItem,
        map: item.map,
        quality: item.quality,
        divinationCard: item.divinationCard,
        prophecy: item.prophecy,
        metamorph: item.metamorph,
    };

    console.log(JSON.stringify(data));
})();
```
