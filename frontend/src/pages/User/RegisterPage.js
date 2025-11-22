import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api";
import "../../styles/Auth.css";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    });

    const navigate = useNavigate();

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await API.post("/auth/register", formData);

            // FIRST API FORMAT:
            // { message, id, name, email, role }
            const { name, email } = res.data;

            if (!email) {
                throw new Error("Missing registration data from server");
            }

            alert("Registration successful!");

            // Redirect to login page
            navigate("/user/login");

        } catch (err) {
            alert(err.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div className="auth-container">

            <img className="auth-logo" src="/jewelry/logo.png" alt="logo" />

            <h2>SIGN UP</h2>

            <div className="auth-box">
                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        onChange={handleChange}
                        required
                    />

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

                    <select
                        name="role"
                        onChange={handleChange}
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>

                    <button type="submit" className="auth-btn">
                        CREATE ACCOUNT
                    </button>
                </form>

                <div className="auth-footer">
                    Already have an account?
                    <a href="/user/login">Log In</a>
                </div>
            </div>

        </div>
    );
};

export default RegisterPage;
