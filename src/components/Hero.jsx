import "./Hero.css";
import { LuSparkles } from "react-icons/lu";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa6" ;

const Hero = () => {
    // ✅ Smooth scroll function
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // Close mobile nav after click
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="pre-title">
          <LuSparkles color={"#5D3A6A"} />
          <span>Professional Makeup Artist</span>
        </div>
        <h1>Priya</h1>
        <p id="hero-subtitle" >Bringing out your natural beauty</p>
        <p>
          Transform your special moments with professional makeup artistry. From
          bridal elegance to editorial creativity, I bring your vision to life
          with personalized service at your doorstep.
        </p>
        <div className="hero-buttons">
          <button className="cta-btn" onClick={() => handleScrollToSection("contact")}><LuSparkles color="white"/> Book Now</button>
          <button className="secondary-btn" onClick={() => handleScrollToSection("portfolio")}>View Portfolio</button>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <FiAward size={28}/>
            Years Experience
          </div>
          <div className="stat-item">
            <FiUsers size={28}/>
            Happy Clients
          </div>
          <div className="stat-item">
            <FaRegStar size={28}/>
            Client Rating
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="hero-img.jpg" alt="Makeup Artistry" />
      </div>
    </section>
  );
};

export default Hero;
