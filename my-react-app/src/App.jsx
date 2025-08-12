import "./App.css";

function App() {
  return (
    <div>
      <header>
        <title>The Chicken Thief</title>
        <nav className="navbar">
          <div className="logo">The Chicken Thief</div>
          <ul className="nav-links">
            <li>
              <a href="./compose/home.jsx">หน้าแรก</a>
            </li>
            <li>
              <a href="./compose/setChicken.jsx">เซ็ตไก่</a>
            </li>
            <li>
              <a href="./compose/chicken_fry.jsx">ไก่ทอด</a>
            </li>
            <li>
              <a href="./compose/aboutChicken.jsx">เกี่ยวกับไก่</a>
            </li>
            <li>
              <a href="./compose/contact.jsx">ติดต่อเรา</a>
            </li>
          </ul>
          <div className="search">
            <input type="text" placeholder="ค้นหา" />
            <span className="search-icon">
              {/* ใช้ emoji หรือ SVG แทนไอคอน */}
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" stroke="#ff7e5f" strokeWidth="2"/>
                <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#ff7e5f" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
