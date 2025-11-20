import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);

  // Check if logged in
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      localStorage.setItem("redirectAfterLogin", "/cart");
      navigate("/login");
    }
  }, []);

  // Load cart on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Save cart & update cart count
  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));

    // Update header cart count
    const badge = document.querySelector(".cart-count");
    if (badge) badge.textContent = newCart.length;
  };

  // Increase quantity
  const increaseQty = (index) => {
    const updated = [...cart];
    updated[index].qty += 1;
    updateCart(updated);
  };

  // Decrease quantity
  const decreaseQty = (index) => {
    const updated = [...cart];
    if (updated[index].qty > 1) {
      updated[index].qty -= 1;
      updateCart(updated);
    }
  };

  // Remove item
  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    updateCart(updated);
  };

  const total = cart.reduce((t, item) => t + item.price * item.qty, 0);

  return (
    <div className="container mt-5 pt-5">
      <h2 className="fw-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center mt-5">
          <h4>Your cart is empty.</h4>
          <button className="btn btn-dark mt-3" onClick={() => navigate("/shop")}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="row">

          {/* CART ITEMS */}
          <div className="col-lg-8">
            {cart.map((item, index) => (
              <div
                key={index}
                className="d-flex align-items-center border rounded p-3 mb-3 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="me-3"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />

                <div className="flex-grow-1">
                  <h5 className="fw-bold">{item.name}</h5>
                  <p className="text-muted">₱{item.price.toLocaleString()}</p>

                  {/* QUANTITY CONTROLS */}
                  <div className="d-flex align-items-center">
                    <button className="btn btn-sm btn-outline-dark" onClick={() => decreaseQty(index)}>-</button>
                    <span className="mx-2">{item.qty}</span>
                    <button className="btn btn-sm btn-outline-dark" onClick={() => increaseQty(index)}>+</button>
                  </div>
                </div>

                {/* REMOVE BUTTON */}
                <button
                  className="btn btn-danger ms-3"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="col-lg-4">
            <div className="card p-3 shadow">
              <h5 className="fw-bold">Order Summary</h5>
              <hr />

              <p className="d-flex justify-content-between fw-bold">
                <span>Total:</span>
                <span>₱{total.toLocaleString()}</span>
              </p>

              <button className="btn btn-dark w-100 mt-3">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
