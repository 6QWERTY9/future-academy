import type { BaseButtonProps } from "@shared/components/Button/model/types"
import css from './index.module.scss'
import clsx from "clsx"

export const OutlineButton: React.FC<Omit<BaseButtonProps, 'buttonType'>> = ({text, width, height, outlineHoverColor='blue', ...baseProps}) => {
  return (
    <button className={`button ${clsx(css.outline_btn, css[outlineHoverColor])}`} {...baseProps} style={{width, height}}>
      {text}
    </button>
  )
}
