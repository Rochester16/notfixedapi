import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api";
import "../../styles/Auth.css";

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await API.post("/auth/login", formData);

            // FIRST API FORMAT:
            // { message, token, email, name, role }
            const { token, name, email, role } = res.data;

            if (!token || !email) {
                throw new Error("Missing login data from server");
            }

            // Save to localStorage
            localStorage.setItem("token", token);
            localStorage.setItem(
                "user",
                JSON.stringify({ name, email, role })
            );

            // Redirect → ALWAYS go to home (your request)
            navigate("/home");
        } catch (err) {
            alert(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="auth-container">
            <img className="auth-logo" src="/jewelry/logo.png" alt="logo" />

            <h2>LOGIN</h2>

            <div className="auth-box">
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="auth-btn">
                        LOG IN
                    </button>
                </form>

                <div className="auth-footer">
                    Don’t have an account?
                    <a href="/user/register">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
