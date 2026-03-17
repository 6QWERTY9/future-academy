import clsx from "clsx";
import type { TabsProps } from "../model/types";
import css from './index.module.scss';
export default function Tabs({text, isActive, ...props}: TabsProps) {
  return (
    <button
    className={clsx(css.tab, {[css.active]: isActive})}
    aria-label={text}
    type="button"
    {...props}
    >
      <span className={css.tabs_text}>
        {text}
      </span>
    </button>
  )
}
