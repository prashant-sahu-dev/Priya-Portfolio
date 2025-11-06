import "./Testimonials.css";
import { FaRegStar } from "react-icons/fa6" ;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "Bridal Makeup",
      text: "Priya made me feel like an absolute princess on my wedding day! Her attention to detail and understanding of what I wanted was incredible. The makeup lasted all day and looked flawless in photos.",
    },
    {
      name: "Neha Patel",
      role: "Party Makeup",
      text: "I absolutely loved my party look! It was exactly what I had imagined – bold yet elegant. Thank you for making me shine all night long!",
    },
    {
      name: "Simran Kaur",
      role: "Editorial Shoot",
      text: "Working with Priya was amazing! Her creative vision and expertise transformed our shoot into something truly magical. Highly recommend!",
    },
    {
      name: "Riya Mehta",
      role: "Bridal Makeup",
      text: "The best decision I made was booking Priya! She’s professional, calm, and super talented. My makeup didn’t budge at all during the ceremony.",
    },
    {
      name: "Kritika Verma",
      role: "Engagement Look",
      text: "Her makeup skills are on point! Loved the flawless base and natural glow she created for my engagement. She’s my go-to now!",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <p className="tagline">Client Love</p>
        <h2>What Our Clients Say</h2>
        <p className="description">
          Don’t just take my word for it — hear from my wonderful clients about their experiences.
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="testimonial-swiper"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="testimonial-hearts">
                {[...Array(5)].map((_, i) => (
                   <FaRegStar key={i} />
                ))}
              </div>
              <p className="testimonial-text">“{item.text}”</p>
              <h4 className="testimonial-name">{item.name}</h4>
              <p className="testimonial-role">{item.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
