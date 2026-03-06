

import { CourseFilter } from "@features/CourseFilter"
import { CourseNav } from "@features/CourseNav"
import { LayoutPage } from "@shared/components/LayoutPage"
import { CourseCardsList } from "@widgets/CourseCardsList"

import css from './index.module.scss'
import clsx from "clsx"


export const CoursesPage = () => {
    return (
        <LayoutPage headerTheme="dark">
            <section className={css.courses_section}>
                <h1 className={clsx(css.courses_title, 'content_center')}>Все программы обучения</h1>
                <div className={clsx(css.courses_content, 'content_center')}>
                    
                    <aside>
                        <CourseFilter/>
                    </aside>
                    <div className={css.courses_cards}>
                        <CourseNav/>
                        <CourseCardsList/>
                    </div>
                </div>
            </section>
        </LayoutPage>
    )
}