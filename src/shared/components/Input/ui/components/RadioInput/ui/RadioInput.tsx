import clsx from "clsx";
import type { RadioInputProps } from "../model/types"
import css from './index.module.scss';

export const RadioInput: React.FC<RadioInputProps> = ({id,label, width='20px', height='20px', ...props}) => {
  return (
    <div className={clsx('input_wrapper', css.radio_input_wrapper)}>
      <input
        className={css.radio_input}
        type="radio" 
        id={id} 
        {...props} 
        aria-label={label}
        style={{
          '--radio-height': height ? `${height}` : 'var(--radio-height)',
          '--radio-width': width ? `${width}` : 'var(--radio-width)',
        }}
        />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
