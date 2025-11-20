// src/components/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/AdminNavbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/user/login");
  };

  return (
    <nav className="admin-navbar">
      <h2 className="admin-logo">AUREVRA Admin</h2>

      <ul className="admin-nav-links">
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/products">Products</Link></li>
        <li><Link to="/admin/products/history">Product History</Link></li>
        <li><Link to="/admin/purchases">Purchases</Link></li>
        <li><Link to="/admin/users">User Accounts</Link></li>
      </ul>

      <button className="admin-logout-btn" onClick={logout}>
        Logout
      </button>
    </nav>
  );
}
