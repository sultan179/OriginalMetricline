// ImageSlider.js
import React, { useEffect, useRef, useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import "./ImageSlider.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const ImageSlider = ({ images, style }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      setActiveIndex(nextIndex);
      if (sliderRef.current) {
        sliderRef.current.goto(nextIndex);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [activeIndex, images.length]);

  return (
    <div style={style}>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={4000}
        selected={activeIndex}
        ref={sliderRef}
        bullets={false}
        organicArrows={true}
        buttons={true}
        animation="foldOutAnimation"
        cssModule={{
          container: 'slider-container',
          bullet: 'slider-bullet',
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            data-src={`./${image}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              maxHeight: '95%',
            }}
          >
            <img
              src={`./${image}`}
              alt={`Image ${index}`}
              style={{
                objectFit: 'contain',
                maxHeight: '100%',
                width: 'auto',
              }}
            />
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
};

export default ImageSlider;
