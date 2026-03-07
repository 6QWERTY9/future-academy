import clsx from "clsx";

import { AssistantBanner } from "@shared/components/AssistantBanner"
import { BenefitsItem } from "./components/BenefitsItem/BenefitsItem"


import css from './index.module.scss';
import type { DetailsBenefitsSectionProps } from "./model/types";

export const BenefitsSection: React.FC<DetailsBenefitsSectionProps> = ({
    assistanBannerText,
    benefitsItems
}) => {
    return (
        <section className={css.details_benefits_section}>
            <div className={clsx(css.details_benefits_section_content, 'content_center')}>
                <AssistantBanner 
                    owlSize="small"
                    text={{
                        paragraph: assistanBannerText
                    }}
                />

                <div className={css.benefits_items}>
                    {benefitsItems.map(item => (
                        <BenefitsItem
                        key={item.id}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}