import clsx from "clsx";
import { AboutUsContent } from "./components/AboutUsContent/AboutUsContent";
import { AboutUsVideoBlock } from "../../../../../shared/components/AboutUsVideoBlock/AboutUsVideoBlock";

import Triangle from '@assets/hero-decor/Vector-1.svg?react';
import Cross from '@assets/hero-decor/Vector-2.svg?react';
import LineOne from '@assets/hero-decor/Vector 183.svg?react';
import LineTwo from '@assets/hero-decor/Vector 184.svg?react';

import css from './index.module.scss';

export const AboutUsSection = () => {
    return (
        <section className={css.about_us_section}>
            <div className={clsx('content_center', css.about_us_content_wrapper)}>
                <AboutUsVideoBlock/>
                <AboutUsContent/>

                <Triangle 
                    className={clsx(css.about_us_section_decor, css.about_decor_triangle)}
                    width={164}
                    height={136}
                    aria-hidden="true"
                />
                <Cross 
                    className={clsx(css.about_us_section_decor, css.about_decor_cross)}
                    width={230}
                    height={230}
                    aria-hidden="true"
                />
                <LineOne 
                    className={clsx(css.about_us_section_decor, css.about_decor_line_one)}
                    width={280}
                    height={130}
                    aria-hidden="true"
                />
                <LineTwo 
                    className={clsx(css.about_us_section_decor, css.about_decor_line_two)}
                    width={350}
                    height={350}
                    aria-hidden="true"
                />
            </div>
        </section>
    )
}