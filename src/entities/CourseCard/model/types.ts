export interface CourseCardProps {
    id?: string;
    title?: string;
    shortDescription?: string;
    fullDescription?: string;
    studyDuration?: string;
    discount?: string;
    onClick?: () => void;
    onClose?: () => void;
    isModalOpen?: boolean;
    price?: string;
    category?: string;
    background?: string;
}