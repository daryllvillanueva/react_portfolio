import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Portfolio from "./components/pages/developer/dashboard/portfolio/Portfolio"
import { StoreProvider } from "./store/StoreContext"
import Home from "./components/pages/developer/portfolio/home/Home"
import Projects from "./components/pages/developer/portfolio/projects/Projects"
import Skills from "./components/pages/developer/portfolio/skills/Skills"
import Certs from "./components/pages/developer/portfolio/certs/Certs"
import Contact from "./components/pages/developer/portfolio/contact/Contact"
import DashSkills from "./components/pages/developer/dashboard/skills/DashSkills"
import DashServices from "./components/pages/developer/dashboard/services/DashServices"
import DashContact from "./components/pages/developer/dashboard/contact/DashContact"
import DashCerts from "./components/pages/developer/dashboard/certs/DashCerts"



function App() {
  const queryClient = new QueryClient
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <StoreProvider> 
        <Router>
          <Routes>
            <Route path="/dashboard/projects" element={<Portfolio/>}/>
            <Route path="/dashboard/services" element={<DashServices/>}/>
            <Route path="/dashboard/skills" element={<DashSkills/>}/>
            <Route path="/dashboard/certs" element={<DashCerts/>}/>
            <Route path="/dashboard/contact" element={<DashContact/>}/>
            {/* UI */}
            <Route path="/portfolio" element={<Home/>}/>
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
    </>
  )
}

export default App
