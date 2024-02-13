import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const backgrounds = ["home-bg.jpg", "Home-SolarFarms.jpg", "Fertilizer.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % backgrounds.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []); // Run only once on mount

  const containerStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/Home/${backgrounds[currentSlide]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    position: 'relative',
    width: '100%',
    transition: 'background-image 0.5s ease', 
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % backgrounds.length); // Update currentSlide cyclically
  };

  return (
    <div className="home-container" style={containerStyle}>
      <Navbar />

        <div className="home-text-section">
          <h1 className="primary-heading">
            Industrial Facility Engineering, Design, and Project Execution
          </h1>
          <p className="primary-text">
            Evolving from an era of crude by rail to the latest technologies of solar farms by night, our team leads our clients through emerging markets and upcoming industries as the world transforms to renewable energy. Diversifying our knowledge for the future while leveraging off our experiences from the past, Metricline Projects leads your industry in project execution, delivery, and customer experience!
          </p>
          <div className="home-buttons">
            <button className="secondary-button">
              Services <FiArrowRight />{" "}
            </button>
            <button className="secondary-button">
              Contact us <FiArrowRight />{" "}
            </button>
          </div>
        </div>
      
      {/* <button onClick={nextSlide}></button> */}
    </div>
  );
};

export default Home;
