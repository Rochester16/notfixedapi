import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Sample product data - replace with your actual API data
const featuredProducts = [
  {
    id: 1,
    name: "Eternal Twist Couple Wedding Ring",
    price: 4299,
    image: "/path/to/ring-image.jpg", // Update with your image path
    badge: "New"
  },
  {
    id: 2,
    name: "Midnight Faith Layered Necklace",
    price: 1299,
    image: "/path/to/necklace-image.jpg", // Update with your image path
    badge: "Hot"
  },
  {
    id: 3,
    name: "Amber Forge Ring",
    price: 4299,
    image: "/path/to/ring2-image.jpg", // Update with your image path
    badge: "Hot"
  },
  {
    id: 4,
    name: "TriLuxe Stud Earrings",
    price: 1299,
    image: "/path/to/earrings-image.jpg", // Update with your image path
    badge: "Hot"
  }
];

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Banner Section */}
      <section className="banner-section">
        <div className="banner-content">
          <div className="banner-image-container">
            <img 
              src="/path/to/banner-jewelry.jpg" // Update with your banner image
              alt="Featured Jewelry" 
              className="banner-jewelry-img"
            />
          </div>
          
          <div className="banner-text">
            <h3 className="banner-brand">AUREVRA JEWELRY</h3>
            <h1 className="banner-title">Discover Timeless Elegance</h1>
            <p className="banner-subtitle">LET YOURS SHINE WITH AUREVRA JEWELRY.</p>
            <Link to="/shop" className="shop-now-btn">Shop Now</Link>
          </div>
        </div>
      </section>

      {/* Daily Discovery Section */}
      <section className="daily-discovery-section">
        <div className="daily-discovery">
          <h2>DAILY DISCOVERY</h2>
        </div>

        <div className="products-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} />
                {product.badge && (
                  <span className={`product-badge badge-${product.badge.toLowerCase()}`}>
                    {product.badge}
                  </span>
                )}
              </div>
              
              <div className="card-body">
                <h5>{product.name}</h5>
                <p>₱ {product.price.toLocaleString()}</p>
                <button className="buy-btn">Buy</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}