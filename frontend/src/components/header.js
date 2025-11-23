import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/UserNavbar.css";

export default function UserNavbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/user/login");
  };

  return (
    <nav className="nav-container">
      <div className="nav-left">
        <img src="/jewelry/logo.png" className="nav-logo" alt="logo" />
        <h1 className="nav-title">AUREVRA JEWELRY</h1>
      </div>

      <ul className="nav-links">
        <li><Link to="/user/home">Home</Link></li>
        <li><Link to="/user/products">Shop</Link></li>
        <li><Link to="/user/search">Search</Link></li>
        <li><Link to="/user/wishlist">Wishlist</Link></li>
        <li><Link to="/user/contact">Contact Us</Link></li>
      </ul>

      <div className="nav-right">
        <img src="/jewelry/cart.png" className="nav-icon" alt="cart" />
        <img src="/jewelry/user.png" className="nav-icon" alt="profile" />

        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}
