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
            {name: 'Робототехника', id: 'kids-filter-robotic'},
            {name: 'Создание игр', id: 'kids-filter--game-creation-1'},
            {name: 'Программирование', id: 'kids-filter-programming'},
            {name: 'Мультимедиа', id: 'kids-filter-multimedia'},
            {name: 'Шахматы', id: 'kids-filter-chess'},
            {name: 'Блогинг', id: 'kids-filter-bloging'},
            {name: 'Создание игр', id: 'kids-filter--game-creation-2'},
            {name: 'Web-разработка', id: 'kids-filter-web-dev'},
            {name: 'Soft skills', id: 'kids-filter-soft-skills'},
        ]
    },
    {
        id: 'teens-filter',

        tags: [
            {name: 'Web-разработка', id: 'teens-filter-web-dev'},
            {name: 'Прикладное программирование', id: 'teens-filter-applied-programming'},
            {name: 'Графическое моделирование', id: 'teens-filter-graphical-modeling'},
            {name: 'Game Development', id: 'teens-filter-game-dev'},
            {name: 'Soft skills', id: 'teens-filter-soft-skills'},
            {name: 'Разработчик мобильных приложений', id: 'teens-filter-mobile-app-developer'},
            {name: 'Блогинг', id: 'teens-filter-bloging'},
            {name: 'Создание игр', id: 'teens-filter-game-creation'},
            {name: 'Программирование', id: 'teens-filter-'},
        ]
    },
    {
        id: 'adults-filter',

        tags: [
            {name: 'Разработчик игр на Unity', id: 'adults-filter-unity-game-developer'},
            {name: 'Разработка ПО', id: 'adults-filter-software-development'},
            {name: 'Графический Дизайн', id: 'adults-filter-graphic-design'},
            {name: 'Тестировщик ПО', id: 'adults-filter-software-tester'},
            {name: 'Интернет Маркетинг', id: 'adults-filter-internet-marketing'},
            {name: 'Java-разработчик', id: 'adults-filter-java-developer'},
            {name: 'Python–разработчик', id: 'adults-filter-python-developer'},
            {name: 'IOS-разработчик', id: 'adults-filter-ios-developer'},
            {name: 'Программирование', id: 'adults-filter-programmin'},
        ]
    }
]