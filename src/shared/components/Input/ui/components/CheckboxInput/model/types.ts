import type { InputHTMLAttributes } from "react";

export interface CheckboxInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label: string;
    id: string;
    width?: string;
    height?: string;
    name?: string;
}