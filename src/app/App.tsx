
import { Footer } from "@shared/components/Footer"
import { Header } from "@shared/components/Header"

import { BrowserRouter } from "react-router-dom"





function App() {
  return (
    <BrowserRouter>
      <Header theme="light"/>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
