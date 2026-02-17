

import { HomePage } from "@pages/HomePage"
import { LayoutPage } from "@shared/components/LayoutPage"

import { BrowserRouter } from "react-router-dom"





function App() {
  return (
    <BrowserRouter>
      <LayoutPage headerTheme="light">
        <HomePage/>
      </LayoutPage>
    </BrowserRouter>
  )
}

export default App
