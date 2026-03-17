import type { ButtonHTMLAttributes } from "react";

export interface TabsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    isActive: boolean;
}