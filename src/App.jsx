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
import Login from "./components/pages/developer/access/Login"
import ForgotPassword from "./components/pages/developer/access/ForgotPassword"
import CreatePassword from "./components/pages/developer/access/CreatePassword"
import Users from "./components/pages/developer/dashboard/users/Users"
import PageNotFound from "./components/partials/PageNotFound"
import ProtectedRoute from "./components/pages/developer/access/ProtectedRoute"



function App() {
  const queryClient = new QueryClient
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <StoreProvider> 
        <Router>
          <Routes>
            <Route path="/*" element={<PageNotFound/>}/>

            <Route path="/login" element={<Login/>}/>
            <Route path="/forgot-password" element={<ForgotPassword/>}/>
            <Route path="/create-password" element={<CreatePassword/>}/>

            <Route path="/projects" element={
              <ProtectedRoute>
                <Portfolio/>
              </ProtectedRoute>
            }/>

            <Route path="/services" element={
              <ProtectedRoute>
                <DashServices/>
              </ProtectedRoute>
            }/>
            
            <Route path="/skills" element={
              <ProtectedRoute>
                <DashSkills/>
              </ProtectedRoute>
            }/>
            
            <Route path="/certs" element={
              <ProtectedRoute>
                <DashCerts/>
              </ProtectedRoute>
            }/>

            <Route path="/contact" element={
              <ProtectedRoute>
                <DashContact/>
              </ProtectedRoute>
            }/>

            {/* UI */}
            <Route path="/user" element={
              <ProtectedRoute>
                <Users/>
              </ProtectedRoute>
            }/>
            <Route path="/portfolio" element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            }/>
            
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
    </>
  )
}

export default App
