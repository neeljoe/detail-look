import { BrowserRouter, Routes, Route } from "react-router"
import NavbarMain from "./components/NavbarMain"
import Home from "./pages/Home"
import About from "./pages/About"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavbarMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App