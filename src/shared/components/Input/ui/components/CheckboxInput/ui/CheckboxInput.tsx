import clsx from "clsx"
import css from './index.module.scss';
import type { CheckboxInputProps } from "../model/types";

export const CheckBoxInput: React.FC<CheckboxInputProps> = ({label, id, width='20px', height='20px', ...props}) => {
  return (
    <div className={clsx('input_wrapper', css.checkbox_input_wrapper)}>
      <input
        className={css.checkbox_input}
        type="checkbox" 
        id={id} 
        {...props} 
        aria-label={label}
        style={{
          '--checkbox-height': height ? `${height}` : 'var(--checkbox-height)',
          '--checkbox-width': width ? `${width}` : 'var(--checkbox-width)',
        }}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}