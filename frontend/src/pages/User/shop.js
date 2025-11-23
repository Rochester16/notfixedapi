// src/pages/User/ShopPage.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../../api";
import UserNavbar from "../../components/userNavBar";
import Footer from "../../components/footer";
import "../../styles/shop.css"; // put your styling here

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  // Extract ?search=keyword
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search") || "";

  useEffect(() => {
    loadProducts();
  }, [searchQuery]);

  const loadProducts = async () => {
    setLoading(true);

    try {
      let res;

      if (searchQuery) {
        // Call search endpoint
        res = await API.get(`/products/search?q=${searchQuery}`);
      } else {
        // Load all products
        res = await API.get("/products");
      }

      setProducts(res.data);
    } catch (err) {
      console.error("Error loading products:", err);
    }

    setLoading(false);
  };

  return (
    <>
      <UserNavbar />

      <div className="shop-page">
        <h2 className="page-title">
          {searchQuery ? `Search results for "${searchQuery}"` : "All Jewelry"}
        </h2>

        {loading ? (
          <p>Loading items...</p>
        ) : products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="product-grid">
            {products.map((p) => (
              <div className="product-card" key={p._id}>
                <img src={`http://localhost:5000/${p.image}`} alt={p.name} />

                <h3>{p.name}</h3>
                <p>₱ {p.price.toLocaleString()}</p>

                <button className="buy-btn">BUY</button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
