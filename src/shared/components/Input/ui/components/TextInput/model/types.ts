import type { InputHTMLAttributes } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    width?: string;
    height?: string;
    name?: string;
}