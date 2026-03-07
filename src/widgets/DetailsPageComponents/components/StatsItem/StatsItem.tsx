import css from './index.module.scss';
import type { StatsItemProps } from './model/types';

export const StatsItems: React.FC<StatsItemProps> = ({
    label,
    value,
    ...fontStyle
}) => {
    const style = {
        '--details-page-stats-items-font-size': fontStyle.fontSize || 'var(--details-page-stats-items-font-size)',
        '--details-page-stats-items-font-weight': fontStyle.fontWeight || 'var(--details-page-stats-items-font-weight)'
    }
    return (
        <div className={css.stat_item}>
            <div className={css.line_gradient} />
            {label && <span className={css.label}>{label}:</span>}
            <span 
                className={css.value}
                style={style}
            >
                {value}
            </span>
        </div>
    )
}