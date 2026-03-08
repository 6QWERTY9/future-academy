export interface CourseCardProps {
    id: string;
    title: string;
    shortDescription: string;
    
    studyDuration: number; // Лучше number для работы с ползунком
    price: string;
    category: 'kids-filter' | 'teens-filter' | 'adults-filter';
    
    // Добавляем эти поля для фильтрации:
    level: 'novice' | 'intermediate' | 'pro';
    type: 'profession' | 'course' | 'special';
    tag: string;
    
    discount?: string;
    background?: string;
    isModalOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;

    fullDescription: string;
    benefits?: { id: string; icon: string; title: string; description: string }[];
    teachers?: { id: string; name: string; photo: string; position: string }[];
    faq?: { question: string; answer: string }[];
}