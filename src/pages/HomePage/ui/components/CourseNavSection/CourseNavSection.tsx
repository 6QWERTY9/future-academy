import { AssistantBanner } from "@shared/components/AssistantBanner"
import { FilterButton } from "./components/FilterButtonProps/FilterButtonProps"
import { categoryTagsData, filterButtonData } from "./model/data"
import { useState } from "react";

import css from './index.module.scss';
import clsx from "clsx";
import { Button } from "@shared/components/Button";

export const CourseNavSection = () => {
    const [currentFilter, setCurrentFilter] = useState('kids-filter');

    const currentCategory = categoryTagsData.find(tags => tags.id === currentFilter);

    const activeTags = currentCategory ? currentCategory.tags : []

    return (
        <section className={css.course_nav_section}>
            <div className={clsx(css.course_nav_content, 'content_center')}>
                <AssistantBanner 
                    owlSize="small" 
                    text={
                        {
                            title: 'Кем вы хотите стать?',
                            paragraph: `
                                Пора найти себя 
                                и выбрать подходящий курс :)

                                Удачи!
                            `
                        }
                    }
                />

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
            </div>
        </section>
    )
}