import type { BentoCardProps } from "../components/BentoGridCard/model/types";

import MonitorIcon from '@assets/monitor.svg?react';
import DiagramIcon from '@assets/diagram.svg?react';
import NewspapperIcon from '@assets/newspaper.svg?react';
import TestIcon from '@assets/test.svg?react'

export const bentoCardsData: BentoCardProps[] = [
    {
        id:'bento-card-open-day',
        title: 'День открытых дверей',
        desc: 'Приглашаем всех желающих на бесплатную экскурсию в мир востребованных профессий и полезных навыков',
        dateDay: '25',
        dateMonth: 'ноябрь',
        background: '#F7BC75',
        gridArea: '1 / 1 / 2 / 5', // Пример: растягиваем на всю верхнюю строку
        contentDirection: 'row',
        buttonText: 'Записаться',
        // onButtonClick: () => console.log('Клик!'),
        className: 'first'
        
    },
    {
        id:'bento-card-training-programs',
        title: 'Программы обучения',
        desc: 'В списке наших курсов вы сможете найти профессию и занятие по душе, изучить новое и получить практические знания, которые помогут получить работу мечты.',
        icon: <MonitorIcon width={77} height={77}/>,
        background: '#E1E9FF', // Светло-синий как на макете
        gridArea: '2 / 1 / 4 / 2', // Пример: высокая карточка слева
        contentDirection: 'column',
        buttonText: 'Подробнее',
        onButtonClick: () => {console.log('click')}
        
    },
    {
        id:'bento-card-news-academy',
        title: 'Новости Академии',
        icon: <NewspapperIcon width={77} height={77}/>,
        background: '#C7F4D4', // Светло-зеленый как на макете
        gridArea: '2 / 2 / 3 / 3',
        contentDirection: 'column',
        // Здесь можно добавить href: '/news', тогда TypeScript скажет убрать buttonText
        href: '/news' 
    },
    {
        id:'bento-card-it-world',
        title: 'Мир IT',
        icon: <DiagramIcon width={68} height={68}/>,
        background: '#ffc7fcff', // Светло-розовый как на макете
        gridArea: '2 / 3 / 3 / 4',
        contentDirection: 'column',
        href: '/it-world'
    },
    {
        id:'bento-card-try-test',
        title: 'Попробуй!',
        desc: 'Пройдите тест и узнайте свои способности в сфере информационных технологий',
        icon: <TestIcon width={98} height={98}/>,
        background: '#FFE38E',
        gridArea: '3 / 2 / 4 / 4', // Широкая карточка внизу справа
        contentDirection: 'row',
        href: '/test'
    },
];