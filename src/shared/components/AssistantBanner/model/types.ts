export interface AssistantBannerProps {
    owlSize: 'large' | 'small';
    text: AssistantBannerTextProps;
}

export interface AssistantBannerTextProps {
    title: string;
    paragraph: string;
}