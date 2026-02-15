import { AssistantBanner } from "@shared/components/AssistantBanner"
import { Header } from "@shared/components/Header"

import { BrowserRouter } from "react-router-dom"





function App() {
  return (
    <BrowserRouter>
      <Header theme="light"/>

      <AssistantBanner 
        owlSize="large" 
        text={{
          title:'Кем вы хотите стать?', 
          paragraph: `Пора найти себя и выбрать подходящий курс :)
          
          
          Удачи!`
        }}/>

        <AssistantBanner 
        owlSize="small" 
        text={{
          title:'Кем вы хотите стать?', 
          paragraph: `Пора найти себя и выбрать подходящий курс :)
          
          
          Удачи!`
        }}/>
        
    </BrowserRouter>
  )
}

export default App
