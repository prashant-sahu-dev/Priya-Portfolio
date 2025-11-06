import "./Portfolio.css";
import { useState } from "react";
import { portfolioImages } from "../data/data";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === activeCategory);

  const categories = ["All", "Bridal", "Party", "Editorial"];

  return (
    <section className="portfolio-section">
      <h2>My Work</h2>
      <p>
        Explore my diverse collection of makeup artistry showcasing bridal
        elegance, party glam, and editorial creativity.
      </p>

      <div className="portfolio-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={activeCategory === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-gallery">
        {filteredImages.map((img) => (
          <div key={img.id} className="portfolio-card">
            <img src={img.url} alt={img.alt}/>
            <div className="portfolio-overlay">
              <span>{img.category}</span>
              <span className="alt-text">{img.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
