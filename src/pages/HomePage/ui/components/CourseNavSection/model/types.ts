export interface FilterButtonProps {
    icon: 'kids' | 'teens' | 'adults';
    categoryName: string;
    age: string


    isActive: boolean;
    setIsActive: (categoryId: string) => void;
    id: 'kids-filter' | 'teens-filter' | 'adults-filter';
}

export interface CategoryTagsProps {
    id: 'kids-filter' | 'teens-filter' | 'adults-filter';

    tags: TagsProps[]
}

export  interface TagsProps {
    name: string;
    onClick?: (selectedTag: string, tagId: 'kids-filter' | 'teens-filter' | 'adults-filter') => void;
}

