// 1. Базовый контент (только данные)
interface BentoBaseContent {
    title: string;
    desc?: string;
    dateDay?: string;
    dateMonth?: string;
    icon?: React.ReactNode;
    id: string;
}

// 2. Стили (теперь они плоские, без вложенности)
interface BentoBaseStyles {
    background?: string;
    gridArea?: string;
    contentDirection?: 'row' | 'column';
    className?: string;
}

// 3. Вариант с кнопкой
export interface BentoCardWithButton extends BentoBaseContent, BentoBaseStyles {
    buttonText: string;
    onButtonClick?: () => void;
    href?: never; // Гарантируем, что href не будет передан
}

// 4. Вариант-ссылка
export interface BentoCardAsLink extends BentoBaseContent, BentoBaseStyles {
    href: string;
    buttonText?: never; // Гарантируем, что кнопка не будет передана
    onButtonClick?: never;
}

// Общий тип для компонента
export type BentoCardProps = BentoCardWithButton | BentoCardAsLink;