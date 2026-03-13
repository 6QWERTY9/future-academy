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