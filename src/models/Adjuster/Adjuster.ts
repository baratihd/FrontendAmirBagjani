type AD = {
    full_name: string;
    id: number;
    mobile: string;
    username: string;
}

type Branch = {
    name: string;
    province: {
        name: string;
        id: number;
    },
    county: {
        name: string;
        id: number;
    },
    id: number;
}

export type Adjuster = {
    id: number;
    branch: Branch;
    adjuster: AD;
}

//trasform Object to Array for best practices only for this case
export type CompatibleAdjuster = {
    id: number;
    branch: Branch[];
    adjuster: AD[];
}