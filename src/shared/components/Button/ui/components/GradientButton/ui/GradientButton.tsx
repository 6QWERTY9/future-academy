import type { BaseButtonProps } from "@shared/components/Button/model/types";
import css from './index.module.scss';


export const GradientButton: React.FC<Omit<BaseButtonProps, 'buttonType'>> = ({text, width, height, ...baseProps}) => {
  return (
    <button className={`button ${css.gradient_btn}`} {...baseProps} style={{width, height}}>
      {text}
    </button>
  )
}
