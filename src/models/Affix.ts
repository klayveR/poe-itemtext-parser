import { AffixType } from "@models/enums";

export interface Affix {
    text: string;
    formatted: string;
    values: number[];
    type: AffixType;
}
