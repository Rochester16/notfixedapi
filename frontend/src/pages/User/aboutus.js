import React from 'react';

const AboutUs = () => {
  return (
    <div className="main-content">
      <div className="about-section">
        <div className="about-content">
          <h2 className="section-title">OUR STORY & CRAFT</h2> {/* Adjusted from about-content h2 */}
          <p>
            Our story began with a simple dedication: to move beyond fleeting trends and create jewelry with enduring significance. This commitment is woven into every design. We honor the meticulous process of master craftsmanship, utilizing expert hands and premium materials to ensure that each piece not only beautifully reflects the unique spirit of the wearer, but is also built to be cherished for generations.
          </p>
        </div>
        <div className="about-image">
          {/*  */}
          <img src="path/to/craft-image.jpg" alt="Jewelers crafting jewelry" />
        </div>
      </div>
      {/* Assuming the footer section (dark brown with contact info) is rendered by Footer.js */}
    </div>
  );
};

export default AboutUs;