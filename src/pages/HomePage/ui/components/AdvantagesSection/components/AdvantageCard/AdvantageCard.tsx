import css from './index.module.scss';
import type { AdvantageCardProps } from './model/types';

export const AdvantageCard: React.FC<AdvantageCardProps> = ({icon, desc, id}) => {
    return (
        <div className={css.advantage_card} aria-label={desc} id={id}>
            <div className={css.advantage_card_icon_wrapper}>
                {icon}
            </div>
            
            <span className={css.advantage_card_description}>
                {desc}
            </span>
        </div>
    )
}