import type { InputHTMLAttributes } from "react";

export interface RangeInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'min' | 'max' | 'step'| 'value'>{
    label: string;
    id: string;
    name?: string;

    width?: string;
    height?: string;
    
    onChange: (value: number) => void;

    max: number;
    min: number;
    step: number;
    value: number;
}