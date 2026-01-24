import clsx from "clsx";

import css from './index.module.scss';
import type { TextInputProps } from "../model/types";

export const TextInput: React.FC<TextInputProps> = ({id,label, width='400px', height='50px', type, ...props}) => {
  return (
    <div className={clsx('input_wrapper', css.text_input_wrapper)} aria-label={label}>
      <input
        className={css.text_input}
        type={type}
        id={id} 
        {...props} 
        
        style={{
          '--text-input-height': height ? `${height}` : 'var(--text-input-height)',
          '--text-input-width': width ? `${width}` : 'var(--text-input-width)',
        }}
      />
    </div>
  )
}

