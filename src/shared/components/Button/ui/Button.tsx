import type { BaseButtonProps } from "../model/types";
import { DefaultButton } from "./components/DefaultButton";
import { GradientButton } from "./components/GradientButton";
import { OutlineButton } from "./components/OutlineButton";


export const Button: React.FC<BaseButtonProps> = ({buttonType, ...props}) => {
  switch (buttonType) {
    case "gradient": 
      return <GradientButton {...props}/>;
    case 'outline': 
      return <OutlineButton {...props}/>
    default: 
      return <DefaultButton {...props}/>
  }
}
