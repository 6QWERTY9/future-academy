import type { AboutAdvantagesProps } from "../model/types"
import css from './index.module.scss'

export const AboutAdvantages: React.FC<AboutAdvantagesProps> = ({
    icon,
    label,
}) => {
    return (
        <div className={css.advatage_item}>
            <div className={css.advatage_item_icon_wrapper}>
                {icon}
            </div>
            <p className={css.advatage_item_desc}>
                {label}
            </p>
        </div>
    )
}