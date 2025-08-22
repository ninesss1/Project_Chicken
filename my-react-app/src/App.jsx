import "./App.css";
import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./compose/home.jsx";
import SetChicken from "./compose/setChicken.jsx";
import ChickenFry from "./compose/chicken_fry.jsx";
import AboutChicken from "./compose/aboutChicken.jsx";
import Contact from "./compose/contact.jsx";

function BottomNav() {
  return (
    <nav className="bottom-nav chicken-theme-nav">
      <Link to="/home" className="nav-btn">
        <span role="img" aria-label="home">🏠</span>
        <span className="nav-label">หน้าแรก</span>
      </Link>
      <Link to="/setChicken" className="nav-btn">
        <span role="img" aria-label="set">🍗</span>
        <span className="nav-label">เซ็ตไก่</span>
      </Link>
      <Link to="/chicken_fry" className="nav-btn">
        <span role="img" aria-label="fry">🍳</span>
        <span className="nav-label">ไก่ทอด</span>
      </Link>
      <Link to="/aboutChicken" className="nav-btn">
        <span role="img" aria-label="about">🐔</span>
        <span className="nav-label">เกี่ยวกับไก่</span>
      </Link>
      <Link to="/contact" className="nav-btn">
        <span role="img" aria-label="contact">📞</span>
        <span className="nav-label">ติดต่อเรา</span>
      </Link>
    </nav>
  );
}

function App() {
  const navLinksRef = useRef(null);
  const [isOverflow, setIsOverflow] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 1024 : false
  );

  useEffect(() => {
    function checkOverflow() {
      if (navLinksRef.current) {
        setIsOverflow(
          navLinksRef.current.scrollWidth > navLinksRef.current.clientWidth
        );
      }
    }
    function handleResize() {
      setIsMobileOrTablet(window.innerWidth <= 1024);
      checkOverflow();
    }
    checkOverflow();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const useBottomNav = isOverflow || isMobileOrTablet;

  return (
    <Router>
      <div className="app-container chicken-theme-bg">
        <header className="app-header chicken-theme-header">
          {/* แสดง Navbar ด้านบนเฉพาะเมื่อไม่ใช้ BottomNav */}
          {!useBottomNav && (
            <nav className="navbar hide-on-mobile">
              <div className="navbar-container">
                <div className="logo chicken-logo">
                  <span role="img" aria-label="logo">🍗</span> The Chicken Thief
                </div>
                <ul className="nav-links" ref={navLinksRef}>
                  <li><Link to="/home" className="nav-link">หน้าแรก</Link></li>
                  <li><Link to="/setChicken" className="nav-link">เซ็ตไก่</Link></li>
                  <li><Link to="/chicken_fry" className="nav-link">ไก่ทอด</Link></li>
                  <li><Link to="/aboutChicken" className="nav-link">เกี่ยวกับไก่</Link></li>
                  <li><Link to="/contact" className="nav-link">ติดต่อเรา</Link></li>
                </ul>
              </div>
            </nav>
          )}
          <div className="search search-top chicken-search">
            <input type="text" placeholder="ค้นหาเมนูไก่ทอด..." />
            <span className="search-icon">🔍</span>
          </div>
        </header>

        <main className="app-main chicken-theme-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/setChicken" element={<SetChicken />} />
            <Route path="/chicken_fry" element={<ChickenFry />} />
            <Route path="/aboutChicken" element={<AboutChicken />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* แสดง BottomNav เฉพาะเมื่อใช้ BottomNav */}
        {useBottomNav && <BottomNav />}
      </div>
    </Router>
  );
}
export default App;
