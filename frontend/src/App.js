// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";

// USER PAGES
import LoginPage from "./pages/User/LoginPage";
import RegisterPage from "./pages/User/RegisterPage";
import HomePage from "./pages/User/HomePage";

// ADMIN PAGES
import AddProductPage from "./pages/Admin/AddProductPage";
import DashboardPage from "./pages/Admin/DashboardPage";
import ProductHistory from "./pages/Admin/ProductHistory";
import ProductsPage from "./pages/Admin/ProductsPage";
import PurchaseHistory from "./pages/Admin/PurchaseHistory";
import UserCreatedHistory from "./pages/Admin/UserCreatedHistory";

// =============================================================
// Helper to read logged in user
// =============================================================
function getUser() {
  try {
    const data = JSON.parse(localStorage.getItem("user"));
    return data || null;
  } catch {
    return null;
  }
}

// =============================================================
// USER ROUTE PROTECTOR
// =============================================================
function UserRoute({ children }) {
  const user = getUser();

  if (!user) return <Navigate to="/user/login" replace />;

  if (user.role === "admin") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return children;
}

// =============================================================
// ADMIN ROUTE PROTECTOR
// =============================================================
function AdminRoute({ children }) {
  const user = getUser();

  if (!user) return <Navigate to="/user/login" replace />;

  if (user.role !== "admin") {
    return <Navigate to="/home" replace />;
  }

  return children;
}

// =============================================================
// MAIN LAYOUT
// NOTE: Header (navbar) intentionally NOT rendered here because
// pages themselves include the header to avoid duplication.
// =============================================================
function Layout() {
  const location = useLocation();

  return (
    <>
      <Routes>
        {/* LOGIN / REGISTER */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="/user/register" element={<RegisterPage />} />

        {/* USER HOME */}
        <Route
          path="/home"
          element={
            <UserRoute>
              <HomePage />
            </UserRoute>
          }
        />

        {/* ADMIN ROUTES */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <DashboardPage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <AdminRoute>
              <ProductsPage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/products/history"
          element={
            <AdminRoute>
              <ProductHistory />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/products/add"
          element={
            <AdminRoute>
              <AddProductPage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/purchases"
          element={
            <AdminRoute>
              <PurchaseHistory />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <UserCreatedHistory />
            </AdminRoute>
          }
        />
      </Routes>
    </>
  );
}

// =============================================================
// APP WRAPPER
// =============================================================
export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
