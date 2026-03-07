import { Button } from "@shared/components/Button";

import Circle from '@assets/hero-decor/Vector.svg?react';
import Triangle from '@assets/hero-decor/Vector-1.svg?react';
import Cross from '@assets/hero-decor/Vector-2.svg?react';
import LineOne from '@assets/hero-decor/Vector 181.svg?react';
import LineTwo from '@assets/hero-decor/Vector 178.svg?react';
import LineThree from '@assets/hero-decor/Vector 179.svg?react';

import css from './index.module.scss'
import clsx from "clsx";
import { StatsItems } from "@widgets/DetailsPageComponents/components/StatsItem/StatsItem";
import type { DetailsHeroSectionProps } from "./model/types";
import { getAssetPath } from "@shared/lib/getPath";



export const HeroSection: React.FC<DetailsHeroSectionProps> = ({
    title,
    description,
    stats,
    ctaTitle,
    ctaDescription,
    ctaBtnText,
    ctaBtnOnClick,
    image
}) => {
    return (
        <section className={css.details_hero_section}>
            <div className={clsx(css.hero_section_content, 'content_center')}>
                <div className={css.hero_section_content_text}>
                    <div className={css.hero_section_content_title_wrapper}>
                        <h1 className={css.hero_section_content_text_title}>{title}</h1>
                        {description && <p className={css.hero_section_content_text_paragraph}>{description}</p>}
                    </div>
                    
                    <div className={css.hero_section_content_stats}>
                        {stats.map((stat, index) => (
                        <StatsItems key={index} label={stat.label} value={stat.value} />
                        ))}
                    </div>
                    <div className={css.hero_section_content_cta}>
                        <h3 className={css.hero_section_content_cta_title}>
                            {ctaTitle}
                        </h3>
                        {ctaDescription &&  <p className={css.hero_section_content_cta_paragraph}>{ctaDescription}</p> }

                        <Button
                            buttonType="default"
                            text={ctaBtnText}
                            width="280px"
                            height="50px"
                            onClick={ctaBtnOnClick}
                        />
                    </div>
                </div>
                <div className={css.hero_section_content_image}>
                    <img src={getAssetPath(image)} alt="asdas" />
                </div>
            </div>

            <Triangle className={clsx(css.hero_decor, css.triangle_one)} width={98} height={81}/>
            <Triangle className={clsx(css.hero_decor, css.triangle_two)} width={138} height={115}/>
            <Cross className={clsx(css.hero_decor, css.cross)} width={100} height={100}/>
            <Circle className={clsx(css.hero_decor, css.circle)} width={128} height={128}/>
            <LineOne className={clsx(css.hero_decor, css.line_one)} width={338} height={131}/>
            <LineOne className={clsx(css.hero_decor, css.line_one_reverse)} width={338} height={131}/>
            <LineTwo className={clsx(css.hero_decor, css.line_two)} width={126} height={266}/>
            <LineThree className={clsx(css.hero_decor, css.line_three)} width={399} height={90}/>
        </section>
    )
}