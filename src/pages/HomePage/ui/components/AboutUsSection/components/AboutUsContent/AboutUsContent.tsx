import { AdvantageCard } from "../AdvantageCard/AdvantageCard"
import { AdvantagesCardsData } from "./model/data"

import css from './index.module.scss';

export const AboutUsContent = () => {
    return (
        <div className={css.about_us_content}>
            <h3 className={css.about_us_content_title}>
                Актуальные знания от признанных экспертов рынка для новичков и практикующих специалистов.
            </h3>
            <div className={css.about_us_content_advantages_cards}>
                {AdvantagesCardsData.map(advantage => (
                    <AdvantageCard {...advantage}/>
                ))}
            </div>
        </div>
    )
}