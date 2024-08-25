import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import "./App.css";
import ReservationForm from "./components/ReservationForm";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Router>
      <div className="nav-bar">
        {/* Navigation tabs as buttons */}
        <h1>Dine</h1>
        <nav className="nav-links">
          <Link to="/" className="nav-button">
            [1]Home
          </Link>
          <Link to="/menu" className="nav-button">
            [2]Menu
          </Link>
          <Link to="/contact" className="nav-button">
            [3]Contact
          </Link>
        </nav>
        <button
          style={{
            display: !isVisible ? "Block" : "none",
          }}
          className="reservation"
          onClick={() => setIsVisible(true)}
        >
          make a reservation.
        </button>
        <ReservationForm isVisible={isVisible} setIsVisible={setIsVisible} />
      </div>

      {/* Define the routes */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu/*" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
