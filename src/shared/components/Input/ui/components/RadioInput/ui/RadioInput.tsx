import clsx from "clsx";
import type { RadioInputProps } from "../model/types"
import css from './index.module.scss';

export const RadioInput: React.FC<RadioInputProps> = ({
    id,
    label, 
    width='20px', 
    height='20px',
    checked,
    value,
    onChange,
    ...props
  }) => {
  return (
    <div className={clsx('input_wrapper', css.radio_input_wrapper)}>

      <label htmlFor={id} className={css.label}>
        <input
          className={css.radio_input}
          type="radio" 
          id={id}
          checked={checked}
          value={value}
          onChange={onChange}
          {...props} 
          aria-label={label}
          style={{
            '--radio-height': height ? `${height}` : 'var(--radio-height)',
            '--radio-width': width ? `${width}` : 'var(--radio-width)',
          }}
        />
        <span className={css.text}>{label}</span>
      </label>
    </div>
  )
}
