export interface Gem {
    tags: string[];
    level: number;
    alternateQuality?: string;
    experience?: {
        current: number;
        next: number;
    };
}
