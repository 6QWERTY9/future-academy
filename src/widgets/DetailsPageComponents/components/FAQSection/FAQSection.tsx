import { AccordionItem } from "@shared/components/AccordionItem"
import type { FAQSectionProps } from "./model/types"
import css from './index.module.scss'
import clsx from "clsx"

export const FAQSection: React.FC<FAQSectionProps> = ({items}) => {
    return (
        <section className={css.details_faq_section}>
            <div className={clsx(css.details_faq_section_content, 'content_center')}>
                <h2>Найдите ответ на свой вопрос</h2>
                <div className={css.faq_items}>
                    {items.map((item, index) => (
                        <AccordionItem {...item} key={index}/>
                    ))}
                </div>
                
            </div>
        </section>
    )
}