import type { StatsItemProps } from "../../StatsItem/model/types";

export interface DetailsHeroSectionProps {
    title: string;
    
    description?: string;
    stats: StatsItemProps[];
    ctaTitle: string;
    ctaDescription?: string;
    ctaBtnText: string;
    ctaBtnOnClick?: () => void;
    image: string;
    
}