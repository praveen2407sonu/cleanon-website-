import React from "react";
import "../ChooseUs.css";
import { FaCheck } from "react-icons/fa";
import mainImg from "../assets/image/chooseus-1.jpg";
import img1 from "../assets/image/chooseus-2.jpg";
import img2 from "../assets/image/chooseus-3.jpg";
import img3 from "../assets/image/chooseus-4.jpg";

const ChooseUs = () => {
  const features = [
    "Experienced & Trained Team",
    "High-Quality Cleaning Products",
    "Customized Cleaning Solutions",
    "Reliable & On-Time Service",
    "Affordable & Transparent Pricing",
    "Commitment to Cleanliness & Care",
  ];

  return (
    <section className="choose-us-section">
      <div className="choose-container">
        {/* Left Content */}
        <div className="choose-content">
          <span className="choose-subtitle">Why Choose Us?</span>

          <h2>
            Delivering Cleanliness With <br />
            Care & Consistency.
          </h2>

          <p>
            At Cleanon we go beyond cleaning — we care about your comfort,
            health, and satisfaction. Our mission is to create spotless spaces
            that inspire confidence and peace of mind. Choose us, and
            experience the difference that true professionalism brings.
          </p>

          <div className="features-grid">
            {features.map((item, index) => (
              <div key={index} className="feature-item">
                <div className="check-box">
                  <FaCheck />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button className="discover-btn">Discover Why</button>
        </div>

        {/* Right Images */}
        <div className="choose-images">
          <div className="main-image">
            <img src={mainImg} alt="Cleaning Service" />
          </div>

          <div className="small-images">
            <img src={img1} alt="" className="small-img img-one" />
            <img src={img2} alt="" className="small-img img-two" />
            <img src={img3} alt="" className="small-img img-three" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;