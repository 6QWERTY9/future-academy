
import type { InputProps } from "../model/types";
import { CheckBoxInput } from "./components/CheckboxInput/ui/CheckboxInput";
import { RadioInput } from "./components/RadioInput";
import { RangeInput } from "./components/RangeInput";
import { TextInput } from "./components/TextInput";

export const Input: React.FC<InputProps> = (props) => {
  
  switch(props.type) {
    case 'radio': 
      return <RadioInput {...props}/>
    case 'checkbox': 
      return <CheckBoxInput {...props}/>;
    case 'range': 
      return <RangeInput {...props}/>
    default: 
      return <TextInput {...props}/>
    
  }
}
