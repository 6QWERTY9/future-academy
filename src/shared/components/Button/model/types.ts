import type { ButtonHTMLAttributes } from "react";

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    width?: string;
    height?: string;
    outlineHoverColor?: 'blue' | 'black';
    buttonType: 'gradient' | 'outline' | 'default';
}

