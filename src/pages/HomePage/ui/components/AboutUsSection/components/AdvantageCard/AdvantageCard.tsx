import css from './index.module.scss'
import type { AdvantageCardProps } from './model/types'

export const AdvantageCard: React.FC<AdvantageCardProps> = ({value, label}) => {
    return (
        <div className={css.advantage_card} aria-label={`${value} ${label}`}>
            <span className={css.advantage_card_value}>
                {value}
            </span>
            <span className={css.advantage_card_label}>
                {label}
            </span>
        </div>
    )
}