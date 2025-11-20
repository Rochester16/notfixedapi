import React, { useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Success() {
  
  // Update cart count
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const count = cart.length;

      const badge = document.querySelector(".cart-count");
      if (badge) badge.textContent = count;
    };

    updateCartCount();
  }, []);

  // Load dark mode if enabled
  useEffect(() => {
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
    }
  }, []);

  return React.createElement(
    "div",
    { className: "success-page" },

    // HEADER
    React.createElement(Header, null),

    // MAIN THANK YOU BOX
    React.createElement(
      "div",
      { className: "thankyou-box" },

      React.createElement("i", {
        className: "fa-solid fa-circle-check",
        style: { fontSize: "70px", color: "green" }
      }),

      React.createElement("h2", null, "Thank You for Your Order!"),

      React.createElement(
        "p",
        null,
        "Your order has been successfully placed.",
        React.createElement("br"),
        "You can now view your order details in My Purchase."
      ),

      React.createElement(
        "div",
        { className: "btn-container" },

        React.createElement(
          "button",
          {
            className: "btn-home",
            onClick: () => (window.location.href = "/home")
          },
          "Back to Home"
        ),

        React.createElement(
          "button",
          {
            className: "btn-purchase",
            onClick: () => (window.location.href = "/purchase")
          },
          "My Purchase"
        )
      )
    ),

    // FOOTER
    React.createElement(Footer, null)
  );
}
