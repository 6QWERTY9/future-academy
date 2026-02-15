
import type { SectionWithBgLayoutProps } from "../model/types"
import css from './index.module.scss';

export const SectionWithBgLayout: React.FC<SectionWithBgLayoutProps> = ({children}) => {
  return (
    <section className={css.section_with_bg}>
      {children}
    </section>
  )
}
