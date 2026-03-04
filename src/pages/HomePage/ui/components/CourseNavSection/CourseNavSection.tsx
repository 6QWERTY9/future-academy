import { AssistantBanner } from "@shared/components/AssistantBanner"


import css from './index.module.scss';
import clsx from "clsx";
import { CourseNav } from "@features/CourseNav";



export const CourseNavSection = () => {

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
                <CourseNav/>
            </div>
        </section>
    )
}