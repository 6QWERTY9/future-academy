import clsx from 'clsx'

import { StatsItems } from '@widgets/DetailsPageComponents/components/StatsItem/StatsItem'
import { Button } from '@shared/components/Button'

import type { CourseOrderSectionProps } from '../model/types'

import Circle from '@assets/hero-decor/Vector.svg?react';
import Triangle from '@assets/hero-decor/Vector-1.svg?react';
import Cross from '@assets/hero-decor/Vector-2.svg?react';
import Owl from '@assets/owl.svg?react'

import css from './index.module.scss'


export const CourseOrderSection = ({title, desc, stats}: CourseOrderSectionProps) => {
    return (
        <section className={css.course_order_section}>
            <div className={clsx(css.course_order_section_content, 'content_center')}>
                <div className={css.header}>
                    <h2 className={css.title}>
                        {title}
                    </h2>
                    <p className={css.desc}>
                        {desc}
                    </p>
                </div>

                <div className={css.stats_items}>
                    {stats.map((item, index) => (
                        <StatsItems
                            key={index}
                            label={item.label}
                            value={item.value}
                            fontSize={item.fontSize}
                            fontWeight={item.fontWeight}
                            color='#00093C'
                        />
                    ))}
                </div>
                <Button
                    buttonType='default'
                    text='Записаться на курс'
                    width='200px'
                    height='50px'
                />
            </div>

            <Circle width={128} height={128} className={clsx(css.order_decor, css.circle)}/>
            <Triangle width={160} height={130} className={clsx(css.order_decor, css.triangle)}/>
            <Triangle width={160} height={130} className={clsx(css.order_decor, css.triangle_mirrored)}/>
            <Cross width={230} height={230} className={clsx(css.order_decor, css.cross)}/>
            <Owl width={196} height={210} className={clsx(css.order_decor, css.owl)}/>
        </section>
    )
}