export interface DetailsBenefitsItemProps {
    icon?: React.ReactNode;
    title: string;
    description: string;
    id?: string;
}

export interface DetailsBenefitsSectionProps {
    assistanBannerText: string;
    benefitsItems: DetailsBenefitsItemProps[];
}