import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./compose/home.jsx";
import SetChicken from "./compose/setChicken.jsx";
import ChickenFry from "./compose/chicken_fry.jsx";
import AboutChicken from "./compose/aboutChicken.jsx";
import Contact from "./compose/contact.jsx";

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <Link to="/home">
        <span role="img" aria-label="home">🏠</span>
        <span className="nav-label">หน้าแรก</span>
      </Link>
      <Link to="/setChicken">
        <span role="img" aria-label="set">🍗</span>
        <span className="nav-label">เซ็ตไก่</span>
      </Link>
      <Link to="/chicken_fry">
        <span role="img" aria-label="fry">🍳</span>
        <span className="nav-label">ไก่ทอด</span>
      </Link>
      <Link to="/aboutChicken">
        <span role="img" aria-label="about">🐔</span>
        <span className="nav-label">เกี่ยวกับไก่</span>
      </Link>
      <Link to="/contact">
        <span role="img" aria-label="contact">📞</span>
        <span className="nav-label">ติดต่อเรา</span>
      </Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div>
        <header>
          <title>The Chicken Thief</title>
          <nav className="navbar">
            <div className="logo">The Chicken Thief</div>
            <ul className="nav-links">
              <li>
                <Link to="/home">หน้าแรก</Link>
              </li>
              <li>
                <Link to="/setChicken">เซ็ตไก่</Link>
              </li>
              <li>
                <Link to="/chicken_fry">ไก่ทอด</Link>
              </li>
              <li>
                <Link to="/aboutChicken">เกี่ยวกับไก่</Link>
              </li>
              <li>
                <Link to="/contact">ติดต่อเรา</Link>
              </li>
            </ul>
            <div className="search">
              <input type="text" placeholder="ค้นหา" />
              <span className="search-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="7" stroke="#ff7e5f" strokeWidth="2"/>
                  <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#ff7e5f" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
