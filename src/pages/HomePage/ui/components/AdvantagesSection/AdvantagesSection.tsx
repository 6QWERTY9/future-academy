import clsx from 'clsx';
import css from './index.module.scss';
import { AdvantagesCardsData } from './model/data';
import { AdvantageCard } from './components/AdvantageCard/AdvantageCard';
import { CTA } from '@shared/components/CTA';

export const AdvantagesSection = () => {
    return (
        <section className={css.advatages_section}>
            
            <div className={clsx(css.advatages_section_content, 'content_center')}>
                <h3 className={css.advatages_section_title}>Добро пожаловать в Академию будущего ХОД</h3>
                <div className={css.advantages_cards}>
                    
                    {AdvantagesCardsData.map(card => (
                        <AdvantageCard key={card.id} {...card}/>
                    ))}
                </div>

                <CTA/>
            </div>
        </section>
    )
}