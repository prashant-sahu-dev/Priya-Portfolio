import "./Contact.css";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <p className="tagline">Get In Touch</p>
        <h2>Book Your Session</h2>
        <p className="subtext">
          Ready to look and feel beautiful? Fill out the form below and I’ll get
          back to you shortly.
        </p>
      </div>

      <div className="contact-container">
        {/* ---- Contact Form ---- */}
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone No</label>
          <input type="text" id="phone" name="phone" required />

          <label htmlFor="preferredDate">Preferred Date</label>
          <input type="date" id="preferredDate" name="preferredDate" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* ---- Contact Info ---- */}
        <div className="contact-details">
          <div className="info-card">
            <h3>Contact Information</h3>
            <div className="info-item">
              <FiPhone size={40} className="icon" />
              <div>
                <h4>Phone</h4>
                <p>(123) 456-7890</p>
              </div>
            </div>
            <div className="info-item">
              <FiMail size={40} className="icon" />
              <div>
                <h4>Email</h4>
                <p>info@example.com</p>
              </div>
            </div>
            <div className="info-item">
              <FiMapPin size={40} className="icon" />
              <div>
                <h4>Location</h4>
                <p>Narsinghpur, Madhya Pradesh</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3>Working Hours</h3>
            <p>Monday - Friday: 9 AM - 6 PM</p>
            <p>Saturday: 10 AM - 4 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
