import React from 'react';
import './AboutUs.css'

function About() {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Discover who we are and what makes us unique.</p>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src="https://i.pinimg.com/736x/57/29/91/5729916c07528878017bb2fe7af4ac76.jpg" alt="About us" />
        </div>
        <div className="about-text">
          <h2>Welcome to Shopping</h2>
          <p>
            At Shopping, we believe that fashion is more than just
            clothing—it's an expression of your unique identity. Since our
            inception, we have been dedicated to providing premium-quality
            apparel and accessories for men, women, and kids.
          </p>
          <p>
            Our curated collection is handpicked with love, ensuring a perfect
            blend of style, comfort, and affordability. From trendy outfits to
            timeless classics, we aim to bring you the best of fashion, right at
            your fingertips.
          </p>
          <h3>Our Mission</h3>
          <p>
            Our mission is to deliver a seamless shopping experience while
            empowering our customers to express themselves through fashion.
          </p>
          <h3>Why Choose Us?</h3>
          <ul>
            <li>High-quality products at affordable prices.</li>
            <li>Wide range of styles for men, women, and kids.</li>
            <li>Eco-friendly and sustainable practices.</li>
            <li>Exceptional customer service and easy returns.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
