import type { DetailsBenefitsItemProps } from "../../model/types"
import css from './index.module.scss';
export const BenefitsItem: React.FC<DetailsBenefitsItemProps> = ({
    icon,
    title,
    description,
    id
}) => {
    return (
        <div className={css.benefits_item} id={id}>
            {icon && (
                <div className={css.benefits_item_icon}>
                    {icon}
                </div>
            )}

            <div className={css.benefits_item_text_wrapper}>
                <h3 className={css.benefits_item_title} aria-label={title}>{title}</h3>
                <p className={css.benefits_item_description} aria-label={description}>{description}</p>
            </div>
        </div>
    )
}