import clsx from 'clsx';
import css from './index.module.scss';
import { bentoCardsData } from './model/data';
import { BentoGridCard } from './components/BentoGridCard/BentoGridCard';

export const BentoGridSection = () => {
    return (
        <section className={css.bento_grid_section} >
            <div className={clsx(css.bento_grid_section_content, 'content_center')}>
                {bentoCardsData.map(card => (
                    <BentoGridCard
                        key={card.id}
                        {...card}
                    />
                ))}
            </div>
        </section>
    )
}