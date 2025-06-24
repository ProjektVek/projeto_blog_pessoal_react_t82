import Home from "./pages/home/home"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./pages/login/Login"
import { AuthProvider } from "./contexts/AuthContext"
function App() {

  return (
    <div className="h-screen flex flex-col">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div >
  )
}

export default App
