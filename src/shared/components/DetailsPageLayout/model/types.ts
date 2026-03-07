export interface DetailsPageLayoutProps {
    hero: React.ReactNode;      // Шапка (заголовок + фото)
    infoBar: React.ReactNode;   // Полоса под шапкой (с совой или иконками)
    sidebar?: React.ReactNode;   // Правая колонка (если будет нужна)
    children: React.ReactNode;   // Программа, описание, галерея
    team?: React.ReactNode;      // Секция с карточками людей (темная)
    faq?: React.ReactNode; 
    }