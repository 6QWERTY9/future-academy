import { Header } from "@shared/components/Header"
import { SectionWithBgLayout } from "@shared/components/SectionWithBgLayout"
import { BrowserRouter } from "react-router-dom"





function App() {
  return (
    <BrowserRouter>
      <Header theme="light"/>
      <SectionWithBgLayout>
        a
      </SectionWithBgLayout>
    </BrowserRouter>
  )
}

export default App
