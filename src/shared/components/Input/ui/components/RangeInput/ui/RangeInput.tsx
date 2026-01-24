import clsx from "clsx";
import type { RangeInputProps } from "../model/types"
import css from './index.module.scss';


export const RangeInput: React.FC<RangeInputProps> = ({id, width='300px', height='2px', label, onChange, min, max, value, step, ...props}) => {
  
  const fillWidth = ((value - min) / (max - min)) * 100;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    onChange?.(newValue);
  };
  
  return (
    <div className={clsx('input_wrapper', css.range_input_wrapper)}>
      <input
        className={css.range_input}
        type="range" 
        id={id} 
        {...props} 
        aria-label={label}
        onChange={handleChange}
        max={max}
        min={min}
        step={step}
        value={value}
        style={{
          '--range-height': height ? `${height}` : 'var(--range-height)',
          '--range-width': width ? `${width}` : 'var(--range-width)',
          '--fill-width': `${fillWidth}%`,
        }}
        />
    </div>
  )
}
