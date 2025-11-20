import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FrontDoor() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  function goLogin() {
    navigate("/user/login");
  }

  return React.createElement(
    "div",
    { className: "min-h-screen", style: { backgroundColor: "#E8E3D6" } },

    /* HEADER */
    React.createElement(
      "header",
      { className: "flex items-center justify-between px-8 py-6 relative z-50" },

      /* LOGO */
      React.createElement(
        "div",
        { className: "flex items-center space-x-3 cursor-pointer" },
        React.createElement("div", { className: "relative w-16 h-16" }),
        React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            { className: "text-2xl font-serif text-amber-700 tracking-wide" },
            "AUREVRA"
          ),
          React.createElement(
            "p",
            { className: "text-xs tracking-widest text-amber-700" },
            "JEWELRY"
          )
        )
      ),

      /* NAV */
      React.createElement(
        "nav",
        { className: "hidden md:flex items-center space-x-8" },
        React.createElement(
          "button",
          {
            onClick: goLogin,
            className: "text-gray-800 hover:text-amber-700 font-medium"
          },
          "SHOP"
        ),
        React.createElement(
          "button",
          {
            onClick: goLogin,
            className: "text-gray-800 hover:text-amber-700 font-medium"
          },
          "ABOUT US"
        ),
        React.createElement(
          "button",
          {
            onClick: goLogin,
            className: "text-gray-800 hover:text-amber-700 font-medium"
          },
          "COLLECTIONS"
        ),
        React.createElement(
          "button",
          {
            onClick: goLogin,
            className: "text-gray-800 hover:text-amber-700 font-medium"
          },
          "CONTACTS"
        )
      ),

      /* ICONS (search, cart) */
      React.createElement(
        "div",
        { className: "flex items-center space-x-4" },
        React.createElement(
          "button",
          { onClick: goLogin },
          "🔍"
        ),
        React.createElement(
          "button",
          { onClick: goLogin },
          "🛒"
        ),
        React.createElement(
          "button",
          {
            className: "md:hidden p-2",
            onClick: () => setMobileMenuOpen(!mobileMenuOpen)
          },
          mobileMenuOpen ? "✖️" : "☰"
        )
      )
    ),

    /* MOBILE MENU */
    mobileMenuOpen &&
      React.createElement(
        "div",
        {
          className:
            "md:hidden absolute top-24 left-0 right-0 bg-white px-8 py-6"
        },
        React.createElement(
          "nav",
          { className: "flex flex-col space-y-4" },
          React.createElement(
            "button",
            { onClick: goLogin, className: "py-2" },
            "SHOP"
          ),
          React.createElement(
            "button",
            { onClick: goLogin, className: "py-2" },
            "ABOUT US"
          ),
          React.createElement(
            "button",
            { onClick: goLogin, className: "py-2" },
            "COLLECTIONS"
          ),
          React.createElement(
            "button",
            { onClick: goLogin, className: "py-2" },
            "CONTACTS"
          )
        )
      ),

    /* HERO (simplified) */
    React.createElement(
      "div",
      { className: "text-center mt-20" },
      React.createElement(
        "h2",
        { className: "text-5xl font-serif text-gray-900" },
        "DISCOVER TIMELESS ELEGANCE"
      ),
      React.createElement(
        "button",
        {
          className:
            "mt-8 px-6 py-3 bg-amber-700 text-white rounded-full",
          onClick: goLogin
        },
        "SHOP NOW"
      )
    )
  );
}
