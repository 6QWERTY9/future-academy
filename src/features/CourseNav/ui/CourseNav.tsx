
import { useState } from "react";

import css from './index.module.scss';

import { Button } from "@shared/components/Button";
import { FilterButton } from "./components/FilterButtonProps/FilterButtonProps";
import { categoryTagsData, filterButtonData } from "../model/data";


export default function CourseNav() {
    const [currentFilter, setCurrentFilter] = useState('kids-filter');

    const currentCategory = categoryTagsData.find(tags => tags.id === currentFilter);

    const activeTags = currentCategory ? currentCategory.tags : []
    return (
        <div className={css.course_nav}>
            <div className={css.course_nav_category_btn}>
                {filterButtonData.map((props) => (
                    <FilterButton
                        key={props.id}
                        {...props}
                        isActive={currentFilter === props.id}
                        setIsActive={setCurrentFilter}
                    />
                ))}
            </div>
            <div className={css.course_nav_tags}>
                {activeTags.map((tags) => (
                    <Button
                        key={tags.id}
                        text={tags.name}
                        buttonType="gradient"
                        width="max-content"
                        height="50px"
                    />
                ))}
            </div>
        </div>
    )
}
