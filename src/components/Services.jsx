import "./Services.css";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { LuSparkles } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { LuHouse } from "react-icons/lu";

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-content">
        <h2>What I Offer</h2>
        <p>
          Professional makeup services tailored to your unique style and
          occasion.
        </p>
        <div className="service-offerings">
          <div className="service-offering">
            <div className="service-icon">
              <FaRegHeart />
            </div>
            <h3>Bridal Makeup</h3>
            <p>
              Make your special day unforgettable with stunning bridal makeup
              that lasts all day. From traditional to contemporary looks, I
              create the perfect bridal glow tailored to your style.
            </p>
            <ul>
              <li>✓ Pre-bridal consultation</li>
              <li>✓ Trial session included</li>
              <li>✓ Long-lasting waterproof products</li>
              <li>✓ Complimentary touch-up kit</li>
            </ul>
          </div>
          <div className="service-offering">
            <div className="service-icon">
              <LuSparkles />
            </div>
            <h3>Party Makeup</h3>
            <p>
              Stand out at any occasion with glamorous party makeup. Whether
              it's a cocktail party, reception, or festive celebration, I'll
              create a look that makes you shine.
            </p>
            <ul>
              <li>✓ Customized to your outfit</li>
              <li>✓ Perfect for photography</li>
              <li>✓ Trend-focused styles</li>
              <li>✓ Quick and efficient</li>
            </ul>
          </div>
          <div className="service-offering">
            <div className="service-icon">
              <MdOutlinePhotoCamera />
            </div>
            <h3>Editorial Makeup</h3>
            <p>
              Bold, artistic, and fashion-forward makeup for photoshoots,
              fashion shows, and creative projects. Let's bring your artistic
              vision to life with stunning editorial makeup.
            </p>
            <ul>
              <li>✓ Creative and unique designs</li>
              <li>✓ High-fashion techniques</li>
              <li>✓ Portfolio-worthy results</li>
              <li>✓ Concept collaboration</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Home Service Banner with premium styling */}
        <div className="home-service-banner">
        <div><LuHouse /></div>  
          <h2>Experience Luxury at Home</h2>
          <p>
            Enjoy professional makeup services in the comfort of your own home. I bring all the necessary equipment and products to create your perfect look wherever you are.
          </p>
          <div className="home-service-benefits">
            <div>Convenient & Comfortable</div>
            <div>Professional Setup</div>
            <div>Premium Products</div>
          </div>
        </div>
    </section>
  );
};

export default Services;
