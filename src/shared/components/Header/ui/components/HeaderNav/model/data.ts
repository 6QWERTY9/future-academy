import type { HeaderNavLink } from "./types";

export const HeaderNavData: HeaderNavLink[] = [
    {
        label: 'Все курсы',
        link: '/all-courses', // 👈 Главная страница
        key: 'all-courses', // 👈 Уникальный, стабильный, kebab-case
    },
    {
        label: 'Мероприятия',
        link: '/events', // 👈 Логичный путь
        key: 'events',
    },
    {
        label: 'Базы знаний',
        link: '/knowledge-bases', // 👈 Читаемо, SEO-дружелюбно
        key: 'knowledge-bases',
    },
    {
        label: 'Карьера',
        link: '/careers', // 👈 Правильное множественное число для раздела карьеры
        key: 'careers',
    },
];
