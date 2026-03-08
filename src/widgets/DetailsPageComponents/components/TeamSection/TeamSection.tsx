import { PersonCard } from "@shared/components/PersonCard"
import { SectionWithBgLayout } from "@shared/components/SectionWithBgLayout"
import type { TeamSectionProps } from "./model/types"

import css from './index.module.scss';
import clsx from "clsx";

export const TeamSection: React.FC<TeamSectionProps> = ({
    title,
    persons
}) => {
    return (
        <SectionWithBgLayout>
            <div className={clsx(css.team_section_content, 'content_center')}>
                <div className={css.team_section_title_wrapper}>
                    <h2 className={css.team_section_title}>{title}</h2>
                </div>
                <div className={css.person_cards}>
                    {persons.map((item) => (
                        <PersonCard {...item} key={item.id}/>
                    ))}
                </div>
            </div>
        </SectionWithBgLayout>
    )
}