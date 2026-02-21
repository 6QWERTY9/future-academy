import type { BaseButtonProps } from "@shared/components/Button/model/types";
import css from './index.module.scss';


export const GradientButton: React.FC<Omit<BaseButtonProps, 'buttonType'>> = ({text, width, height, border, ...baseProps}) => {
  return (
    <button 
      className={`button ${css.gradient_btn}`} 
      {...baseProps} 
      style={{'--button-height': height || 'var(--button-height)', '--button-width': width || 'var(--button-width)', '--button-border' : border || 'var(--button-border)'}}  
      aria-label={text} 
      role="button" 
      type="button"
      >
      {text}
    </button>
  )
}
