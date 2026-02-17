import clsx from 'clsx';

import Circle from '@assets/hero-decor/Vector.svg?react';
import Cross from '@assets/hero-decor/Vector-2.svg?react';
import Triangle from '@assets/hero-decor/Vector-1.svg?react';
import FirstLine from '@assets/hero-decor/Vector 181.svg?react';


import css from './index.module.scss';

export const HeroSection = () => {
    return (
        <section className={clsx(css.hero_section)}>
            <div className={clsx(css.hero_section_content)}>
                    <div className={css.hero_section_content_text}>
                        <h1 className={css.hero_section_title}>Образовательная платформа ХОД Future Academy</h1>
                        <p className={css.hero_section_paragraph}>Актуальные знания для новичков и профессионалов</p>
                        
                    </div>

                    
            </div>
            <Cross className={clsx(css.hero_decor, css.cross)}  aria-hidden="true"/>
            <Triangle className={clsx(css.hero_decor, css.triangle)}  aria-hidden="true"/>
            <Circle className={clsx(css.hero_decor, css.circle)}  aria-hidden="true"/>
            <FirstLine className={clsx(css.hero_decor, css.first_line)}  aria-hidden="true"/>
        </section>
    )
}