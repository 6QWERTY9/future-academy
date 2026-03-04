import clsx from "clsx";

import type { FilterButtonProps } from "../../model/types";

import KidsIcon from '@assets/filter-btn-icons/kids.svg?react';
import TeensIcon from '@assets/filter-btn-icons/teens.svg?react';
import AdultsIcon from '@assets/filter-btn-icons/family.svg?react';

import css from './index.module.scss';



export const FilterButton: React.FC<FilterButtonProps> = ({icon, categoryName, age, isActive, setIsActive, id}) => {
    const iconMap = {
        kids: KidsIcon,
        teens: TeensIcon,
        adults: AdultsIcon,
    };

    const Icon = iconMap[icon as keyof typeof iconMap] || KidsIcon;
    
    return (
        <button 
            id={id}
            className={clsx(css.filter_button, {[css.active]: isActive})}
            onClick={() => setIsActive(id)}
            aria-label={categoryName}
        >
            <Icon width={49} height={49}/>
            <div className={css.filter_button_text_content}>
                <span className={css.category_name}>
                    {categoryName}
                </span>
                <span className={css.age}>
                    {age}
                </span>
            </div>
        </button>
    )
}