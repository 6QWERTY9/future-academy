
import clsx from "clsx";
import type { SectionWithBgLayoutProps } from "../model/types"
import css from './index.module.scss';

export const SectionWithBgLayout: React.FC<SectionWithBgLayoutProps> = ({children, className,title}) => {
  return (
    <section className={clsx(css.section_with_bg, className)}>
      <h3>{title}</h3>
      {children}
    </section>
  )
}
