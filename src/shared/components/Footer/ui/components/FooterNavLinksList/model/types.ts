export interface FooterNavLinksListProps {
    title: string;
    links: FooterNavLink[];
}

export interface FooterNavLink {
    to: string; 
    text: string;
    label: string;
}