import { useState, useEffect } from "react";
import { LuSparkles, LuMenu, LuX } from "react-icons/lu";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 10) {
        header.classList.add("glass");
        header.classList.remove("transparent");
      } else {
        header.classList.add("transparent");
        header.classList.remove("glass");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header transparent">
      <div className="logo">
        <div className="logo-icon">
          <LuSparkles size={35} color="#5D3A6A" />
        </div>
        <div className="logo-text">
          <h1>Priya</h1>
          <p>MAKEUP ARTISTRY</p>
        </div>
      </div>

      {/* ✅ Desktop Navigation */}
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <button className="nav-link">About</button>
        <button className="nav-link">Portfolio</button>
        <button className="nav-link">Services</button>
        <button className="nav-link">Testimonial</button>
        <button className="nav-link" id="book-now">
          <div>
            <LuSparkles color="#ffffff" />
          </div>
          <span>Book Now</span>
        </button>
      </nav>

      {/* ✅ Mobile Menu Icon */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <LuX size={28} /> : <LuMenu size={28} />}
      </div>
    </header>
  );
};

export default Header;
