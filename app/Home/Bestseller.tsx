'use client';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Bestseller() {
  AOS.init({ duration: 600 })
  return (
    <section className="bestseller-main">
      <h4 className="bestseller-title">Best Sellers</h4>
      <div className="bestseller">
        <div
          data-aos-duration="600"
          data-aos="fade-right"
          className="bestseller-cards"
        >
          <img
            src="https://res.cloudinary.com/dxi9wcchp/image/upload/v1677862525/ssbakers/sweetrabdi_oggfnf.png"
            alt="sweet rabdi cake"
          />
          <h5>Sweet Rabdi</h5>
          <button>Know More</button>
        </div>
        <div data-aos="fade-left" className="bestseller-cards">
          <img
            src="https://res.cloudinary.com/dxi9wcchp/image/upload/v1677862525/ssbakers/sweetrabdi_oggfnf.png"
            alt="sweet rabdi cake"
          />
          <h5>Sweet Rabdi</h5>
          <button>Know More</button>
        </div>
        <div data-aos="fade-right" className="bestseller-cards">
          <img
            src="https://res.cloudinary.com/dxi9wcchp/image/upload/v1677862525/ssbakers/sweetrabdi_oggfnf.png"
            alt="sweet rabdi cake"
          />
          <h5>Sweet Rabdi</h5>
          <button>Know More</button>
        </div>
        <div data-aos="fade-left" className="bestseller-cards">
          <img
            src="https://res.cloudinary.com/dxi9wcchp/image/upload/v1677862525/ssbakers/sweetrabdi_oggfnf.png"
            alt="sweet rabdi cake"
          />
          <h5>Sweet Rabdi</h5>
          <button>Know More</button>
        </div>
      </div>
    </section>
  );
}
