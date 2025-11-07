import "./Footer.css";
import { LuInstagram } from "react-icons/lu";
import { LuFacebook } from "react-icons/lu";
import { PiWhatsappLogo } from "react-icons/pi";

const Footer = () => {
    // ✅ Smooth scroll function
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // Close mobile nav after click
    }
  };

  return (
    <>
      <footer>
        <div>
          <h2>Priya</h2>
          <p>
            Professional makeup artist specializing in bridal, party, and
            editorial looks. Bringing out your natural beauty with personalized
            service.
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <button onClick={() => handleScrollToSection("about")}>About me</button>
            </li>
            <li>
              <button onClick={() => handleScrollToSection("portfolio")}>Portfolio</button>
            </li>
            <li>
              <button onClick={() => handleScrollToSection("services")}>Services</button>
            </li>
            <li>
              <button onClick={() => handleScrollToSection("testimonials")}>Testimonials</button>
            </li>
          </ul>
        </div>
        <div>
          <h3>Services</h3>
          <ul>
            <li>Bridal Makeup</li>
            <li>Party Makeup</li>
            <li>Editorial Looks</li>
            <li>Home Services Available</li>
          </ul>
        </div>
        <div>
          <h3>Contaact me</h3>
          <ul>
            <li>+91 6264327136</li>
            <li>priya.makeup@example.com</li>
            <li>Narsinghpur, Madhya Pradesh</li>
          </ul>
          <div>
            <LuInstagram />
            <LuFacebook />
            <PiWhatsappLogo />
          </div>
        </div>
        <hr />
        <div>
          <div>
            © 2025 Priya - Professional Makeup Artist. All rights reserved.
          </div>
          <div>Made with Love ❤️ For beauty PS Creations</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
