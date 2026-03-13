import type { StatsItemProps } from "@widgets/DetailsPageComponents/components/StatsItem/model/types";

export interface AboutAdvantagesProps {
    id: string
    icon: React.ReactNode;
    label: string
}

export interface AboutSectionProps {
    title: string;
    aboutDescription: string;
    items: AboutAdvantagesProps[]
}

export interface CoursePromoBannerProps {
    text: string[]
}

export interface CourseGalleryProps {
    title: string;
    desc: string;
    images: string[]
}

export interface CourseOrderSectionProps {
    title: string;
    desc: string;
    stats: StatsItemProps[]
}