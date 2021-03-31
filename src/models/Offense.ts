export interface Offense {
    range: number;
    critChance: number;
    aps: number;
    damage: {
        physical: DamageRange;
        fire: DamageRange;
        cold: DamageRange;
        lightning: DamageRange;
        chaos: DamageRange;
    };
    dps: {
        physical: number;
        fire: number;
        cold: number;
        lightning: number;
        elemental: number;
        chaos: number;
        total: number;
    };
}

export interface DamageRange {
    min: number;
    max: number;
}
