import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Checkout() {
  return React.createElement(
    "div",
    { className: "checkout-page" },

   

    React.createElement(
      "section",
      { className: "checkout-container" },

      React.createElement("h2", null, "Checkout"),

      React.createElement(
        "div",
        { className: "checkout-box" },

        React.createElement(
          "label",
          null,
          "Full Name:",
          React.createElement("input", { type: "text", name: "fullname" })
        ),

        React.createElement(
          "label",
          null,
          "Address:",
          React.createElement("input", { type: "text", name: "address" })
        ),

        React.createElement(
          "label",
          null,
          "Payment Method:",
          React.createElement(
            "select",
            { name: "payment" },
            React.createElement("option", { value: "cod" }, "Cash on Delivery"),
            React.createElement("option", { value: "gcash" }, "GCash")
          )
        ),

        React.createElement(
          "button",
          {
            onClick: () => {
              window.location.href = "/order-success";
            },
          },
          "Place Order"
        )
      )
    ),

    React.createElement(Footer, null)
  );
}
