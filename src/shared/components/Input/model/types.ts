import type { RadioInputProps } from "../ui/components/RadioInput/model/types";
import type { CheckboxInputProps } from "../ui/components/CheckboxInput/model/types";
import type { TextInputProps } from "../ui/components/TextInput/model/types";
import type { RangeInputProps } from "../ui/components/RangeInput/model/types";

export type InputType = 'text' | 'tel' | 'password' | 'email' | 'checkbox' | 'radio' | 'range';

export interface BaseInputProps {
    type: InputType;
}

export type InputProps = 
    | ({type: 'text' | 'tel' | 'password' | 'email'} & TextInputProps)
    | ({type: 'checkbox'} & CheckboxInputProps)
    | ({type: 'radio'} & RadioInputProps)
    | ({type: 'range'} & RangeInputProps);