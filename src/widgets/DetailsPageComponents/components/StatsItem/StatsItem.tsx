import css from './index.module.scss';
import type { StatsItemProps } from './model/types';

export const StatsItems: React.FC<StatsItemProps> = ({
    label,
    value,
    fontSize,
    fontWeight,
    color='#fff'
}) => {
    const style = {
        '--details-page-stats-items-font-size': fontSize,
        '--details-page-stats-items-font-weight': fontWeight,
        '--details-pages-stats-items-color': color || 'var(--details-pages-stats-items-color)'
    }
    return (
        <div className={css.stat_item}>
            <div className={css.line_gradient} />
            {label && <span className={css.label} style={style}>{label}:</span>}
            <span 
                className={css.value}
                style={style}
            >
                {value}
            </span>
        </div>
    )
}