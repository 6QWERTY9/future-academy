import type { CategoryTagsProps, FilterButtonProps } from "./types";

export const filterButtonData: Omit<FilterButtonProps, 'isActive' | 'setIsActive'>[] = [
    {id: 'kids-filter', categoryName: 'Дети', age: '8 — 14 лет', icon: 'kids'},
    {id: 'teens-filter', categoryName: 'Подростки', age: '14 — 18 лет', icon: 'teens'},
    {id: 'adults-filter', categoryName: 'Взрослые', age: '18 — ∞ ', icon: 'adults'},
]

export const categoryTagsData: CategoryTagsProps[] = [
    {
        id: "kids-filter",
        tags: [
        { name: "Робототехника", id: "robotic" },
        { name: "Создание игр", id: "game-dev" },
        { name: "Программирование", id: "programming" },
        { name: "Мультимедиа", id: "multimedia" },
        { name: "Шахматы", id: "chess" },
        { name: "Блогинг", id: "blogging" },
        { name: "Soft skills", id: "soft-skills" },
        ]
    },
    {
        id: "teens-filter",
        tags: [
        { name: "Web-разработка", id: "web" },
        { name: "Прикладное программирование", id: "applied" },
        { name: "Графическое моделирование", id: "graphics" },
        { name: "Game Development", id: "game-dev" },
        { name: "Мобильные приложения", id: "mobile" },
        { name: "Блогинг", id: "blogging" },
        { name: "Программирование", id: "programming" },
        ]
    },
    {
        id: "adults-filter",
        tags: [
        { name: "Unity", id: "unity" },
        { name: "Разработка ПО", id: "software" },
        { name: "Графический дизайн", id: "design" },
        { name: "Тестировщик", id: "testing" },
        { name: "Интернет-маркетинг", id: "marketing" },
        { name: "Java-разработчик", id: "java" },
        { name: "Python-разработчик", id: "python" },
        { name: "iOS-разработчик", id: "ios" },
        ]
    }
];