import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Portfolio from "./components/pages/developer/dashboard/portfolio/Portfolio"
import { StoreProvider } from "./store/StoreContext"
import Home from "./components/pages/developer/portfolio/home/Home"
import Projects from "./components/pages/developer/portfolio/projects/Projects"
import Skills from "./components/pages/developer/portfolio/skills/Skills"
import Certs from "./components/pages/developer/portfolio/certs/Certs"
import Contact from "./components/pages/developer/portfolio/contact/Contact"


function App() {
  const queryClient = new QueryClient
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <StoreProvider> 
        <Router>
          <Routes>
            <Route path="/portfolio" element={<Portfolio/>}/>
            {/* UI */}
            <Route path="/home" element={<Home/>}/>
            <Route path="/project" element={<Projects/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/certs" element={<Certs/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
    </>
  )
}

export default App
