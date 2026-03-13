import { Button } from '@shared/components/Button'
import css from './index.module.scss'
import clsx from 'clsx'
import type { CoursePromoBannerProps } from '../model/types'

export const CoursePromoBanner: React.FC<CoursePromoBannerProps> = ({text}) => {
    return (
        <section className={css.course_promo_section}>
            
            <div className={clsx(css.course_promo_section_content, 'content_center')}>
                <div className={css.text_wrapper}>
                    {text.map((item,ind) => (
                        <p className={css.text} key={`course_promo_banner_item_${ind}`}>
                            {item}
                        </p>
                    ))}
                </div>
                <Button
                buttonType='default'
                text='Записаться на курс'
                onClick={() => {return}} // Если надо передаем OnClick функцию
                width='200px'
                height='50px'
                
                />
            </div>

        </section>
    )
}