import React from "react";
import Footer from "../../components/footer";

export default function AboutUs() {
    return React.createElement(
        "div",
        { className: "about-page-container" },

        // ABOUT SECTION
        React.createElement(
            "section",
            { className: "about-section" },

            // LEFT CONTENT
            React.createElement(
                "div",
                { className: "about-content" },
                React.createElement("h2", null, "Our Story"),
                React.createElement(
                    "p",
                    null,
                    "Aurevra Jewelry is a timeless collection crafted for those who find beauty in elegance and meaning in every detail. Inspired by classic sophistication and modern artistry, each piece in our collection is designed to capture individuality and confidence."
                ),
                React.createElement(
                    "p",
                    null,
                    "Founded in 2025, Aurevra Jewelry was born from a passion for creativity and craftsmanship. Our goal is to offer jewelry that transcends trends — pieces that become part of your story, symbolizing milestones, love, and legacy."
                ),
                React.createElement(
                    "p",
                    null,
                    "From design to delivery, every creation is carefully handcrafted using premium materials to ensure both durability and allure. We believe jewelry is not just an accessory — it’s a reflection of who you are."
                ),
                React.createElement(
                    "p",
                    null,
                    "Whether you’re celebrating life’s grandest moments or everyday victories, Aurevra Jewelry helps you shine with confidence, grace, and authenticity."
                )
            ),

            // RIGHT IMAGE
            React.createElement(
                "div",
                { className: "about-image" },
                React.createElement("img", {
                    src: "/jewelry/aboutus.png",
                    alt: "Aurevra Jewelry Workshop"
                })
            )
        ),

        // FOOTER
        React.createElement(Footer, null)
    );
}
