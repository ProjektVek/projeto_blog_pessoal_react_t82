import Home from "./pages/home/home"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
function App() {

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
