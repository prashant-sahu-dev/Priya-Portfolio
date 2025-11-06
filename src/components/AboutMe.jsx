import "./AboutMe.css";
import { LuSparkles } from "react-icons/lu";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { LuHouse } from "react-icons/lu";

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-image">
        <img src="aboutMe-img.jpg" alt="About Me" />
        <div className="about-me-image-overlay">
          <h4>500+ Happy Clients</h4>
          <span>Satisfied Client</span>
        </div>
      </div>
      <div className="about-me-content">
        <h2>About Me</h2>
        <h1>
          <span style={{ color: "black" }}>Creating Beauty,</span> One Face at a
          Time
        </h1>
        <p>
          With over 8 years of experience in the beauty industry, I specialize
          in creating stunning makeup looks that enhance your natural beauty. My
          passion lies in making every client feel confident and beautiful,
          whether it's for their wedding day, a special event, or a creative
          photoshoot.
        </p>
        <p>
          I believe that makeup is an art form that should celebrate
          individuality. Using premium products and the latest techniques, I
          work closely with each client to understand their vision and bring it
          to life. My expertise spans from traditional bridal makeup to
          contemporary editorial looks.
        </p>
        <p>
          What sets me apart is my personalized approach and attention to
          detail. I offer convenient home services, ensuring you feel relaxed
          and comfortable throughout the process. Let me help you look and feel
          your absolute best!
        </p>
        <div className="about-me-stats">
          <div className="about-me-stat-item">
            <FiAward size={24} />
            <h4>Certified Professional</h4>
            <p>8 Years Experience</p>
          </div>
          <div className="about-me-stat-item">
            <FaRegHeart size={24} />
            <h4>Premium Products</h4>
            <p>High-quality makeup brands</p>
          </div>
          <div className="about-me-stat-item">
            <LuHouse size={24} />
            <h4>Home Service</h4>
            <p>Convenience at your doorstep</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
