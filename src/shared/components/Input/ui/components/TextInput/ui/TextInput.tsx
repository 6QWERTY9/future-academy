import clsx from "clsx";

import css from './index.module.scss';
import type { TextInputProps } from "../model/types";
import { useField } from "formik";

export const TextInput: React.FC<TextInputProps> = ({id,label, width='400px', height='50px', type, ...props}) => {
  const [field, meta] = useField(props.name? props.name : '');
  
    // Проверяем, была ли ошибка и "трогал" ли пользователь поле
    const isError = meta.touched && meta.error;
  return (
    <div className={clsx('input_wrapper', css.text_input_wrapper)} aria-label={label}>
      <input
        className={css.text_input}
        type={type}
        id={id} 
        {...field}
        {...props} 
        
        style={{
          '--text-input-height': height ? `${height}` : 'var(--text-input-height)',
          '--text-input-width': width ? `${width}` : 'var(--text-input-width)',
        }}
      />
      {isError && <span className={css.error_text}>{meta.error}</span>}
    </div>
  )
}

