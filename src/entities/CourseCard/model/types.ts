export interface CourseCardProps {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    studyDuration: number; // Лучше number для работы с ползунком
    price: string;
    category: 'kids' | 'teens' | 'adults';
    
    // Добавляем эти поля для фильтрации:
    level: 'novice' | 'intermediate' | 'pro';
    type: 'profession' | 'course' | 'special';
    
    discount?: string;
    background?: string;
    isModalOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}