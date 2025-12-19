import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Equipo from "./pages/Equipo";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
