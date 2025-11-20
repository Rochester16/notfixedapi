import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Contact() {
  return React.createElement(
    "div",
    { className: "contact-page" },

    React.createElement(Header, null),

    React.createElement(
      "section",
      { className: "contact-container" },

      React.createElement("h2", null, "Contact Us"),

      React.createElement(
        "form",
        {
          className: "contact-form",
          onSubmit: (e) => {
            e.preventDefault();
            alert("Message sent! We'll get back to you soon.");
          },
        },

        React.createElement(
          "label",
          null,
          "Your Name:",
          React.createElement("input", { type: "text", required: true })
        ),

        React.createElement(
          "label",
          null,
          "Email:",
          React.createElement("input", { type: "email", required: true })
        ),

        React.createElement(
          "label",
          null,
          "Message:",
          React.createElement("textarea", { required: true })
        ),

        React.createElement(
          "button",
          { type: "submit" },
          "Send Message"
        )
      )
    ),

    React.createElement(Footer, null)
  );
}
