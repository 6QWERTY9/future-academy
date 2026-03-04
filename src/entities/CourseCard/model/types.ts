export interface CourseCardProps {
    id?: string;
    title?: string;
    shortDescription?: string;
    fullDescription?: string;
    studyDuration?: string;
    discount?: string;
    onClick?: () => void;
    price?: string;
}