import DiagramIcon from '@assets/Group 797.svg?react';
import BookIcon from '@assets/Group 798.svg?react';
import DeckIcon from '@assets/Group 800.svg?react';
import HumanIcon from '@assets/Group 801.svg?react';
import type { AdvantageCardProps } from '../components/AdvantageCard/model/types';


export const AdvantagesCardsData: AdvantageCardProps[] = [
    {
        icon: <DiagramIcon width={50} height={50}/>,
        desc: 'Передовой подход к образовательному процессу',
        id: 'advantage_approach_educational_process'
    },
    {
        icon: <BookIcon width={50} height={50}/>,
        desc: 'Непрерывное усовершенствование и пополнение базы курсов',
        id: 'advantage_continuous_improvement'
    },
    {
        icon: <DeckIcon width={50} height={50}/>,
        desc: 'Только практикующие преподаватели',
        id: 'advantage_practicing_teachers_only'
    },
    {
        icon: <HumanIcon width={50} height={50}/>,
        desc: 'Сопровождение на всех этапах. От начала обучения до трудоустройства',
        id: 'advantage_support_all_stages'
    },
]