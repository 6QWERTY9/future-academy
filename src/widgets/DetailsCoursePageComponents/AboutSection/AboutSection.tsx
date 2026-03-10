import clsx from "clsx";
import { AboutAdvantages } from "../AboutAdvantages/AboutAdvantages"
import type { AboutSectionProps } from "../model/types"
import css from './index.module.scss';

export const AboutSection: React.FC<AboutSectionProps> = ({
    title,
    aboutDescription,
    items
}) => {
    return (
        <section className={css.details_course_about_section}>
            <div className={clsx(css.about_section_content, 'content_center')}>
                <div className={css.about_section_text_wrapper}>
                    <h2 className={css.about_section_title}>{title}</h2>
                    <p className={css.about_section_description}>{aboutDescription}</p>
                </div>

                <div className={css.about_section_advantages_items}>
                    {items.map(item => (
                        <AboutAdvantages key={item.id} {...item}/>
                    ))}
                </div>
            </div>
        </section>
    )
}