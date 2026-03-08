import Circle from '@assets/hero-decor/Vector.svg?react';
import Triangle from '@assets/hero-decor/Vector-1.svg?react';
import Cross from '@assets/hero-decor/Vector-2.svg?react';


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
            <Circle className={clsx(css.faq_decor, css.circle)} width={150} height={150}/>
            <Cross className={clsx(css.faq_decor, css.cross)} width={180} height={180}/>
            <Triangle className={clsx(css.faq_decor, css.triangle)} width={138} height={115}/>
        </section>
    )
}