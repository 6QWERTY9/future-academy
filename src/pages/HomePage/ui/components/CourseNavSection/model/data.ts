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
            {name: 'Робототехника'},
            {name: 'Создание игр'},
            {name: 'Программирование'},
            {name: 'Мультимедиа'},
            {name: 'Шахматы'},
            {name: 'Блогинг'},
            {name: 'Создание игр'},
            {name: 'Web-разработка'},
            {name: 'Soft skills'},
        ]
    },
    {
        id: 'teens-filter',

        tags: [
            {name: 'Web-разработка'},
            {name: 'Прикладное программирование'},
            {name: 'Графическое моделирование'},
            {name: 'Game Development'},
            {name: 'Soft skills'},
            {name: 'Разработчик мобильных приложений'},
            {name: 'Блогинг'},
            {name: 'Создание игр'},
            {name: 'Программирование'},
        ]
    },
    {
        id: 'adults-filter',

        tags: [
            {name: 'Разработчик игр на Unity'},
            {name: 'Разработка ПО'},
            {name: 'Графический Дизайн'},
            {name: 'Тестировщик ПО'},
            {name: 'Интернет Маркетинг'},
            {name: 'Java-разработчик'},
            {name: 'Python–разработчик'},
            {name: 'IOS-разработчик'},
            {name: 'Программирование'},
        ]
    }
]