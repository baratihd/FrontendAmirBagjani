export type Form = {
    is_active: boolean;
    visit_date: string | undefined;
    visit_time: string | undefined;
    covered_distance: number;
    amount_damages_assessed: number;
    description: string;
    branch: number;
    adjuster: number;
    file: number;
}