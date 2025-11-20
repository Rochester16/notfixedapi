// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// ROUTES
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoute.js"; // ✅ FIXED: must be productRoutes.js
import historyRoutes from "./routes/historyRoutes.js";

dotenv.config();
connectDB();

const app = express();

/* -------------------------------------------
   STATIC FOLDER FOR UPLOADED IMAGES
------------------------------------------- */
app.use("/uploads", express.static("uploads"));

/* -------------------------------------------
   MIDDLEWARE
------------------------------------------- */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* -------------------------------------------
   API ROUTES
------------------------------------------- */
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/history", historyRoutes);

/* -------------------------------------------
   HOME ROUTE
------------------------------------------- */
app.get("/", (req, res) => {
  res.send("API is running...");
});

/* -------------------------------------------
   START SERVER
------------------------------------------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
