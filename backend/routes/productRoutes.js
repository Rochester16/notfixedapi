import express from "express";
import multer from "multer";
import fs from "fs";

import {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct
} from "../controllers/productController.js";

import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

/* -------------------------------------------------
   Ensure /uploads folder exists
------------------------------------------------- */
const uploadPath = "uploads/";
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

/* -------------------------------------------------
   Multer Storage
------------------------------------------------- */
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadPath),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });

/* -------------------------------------------------
   PRODUCT ROUTES
------------------------------------------------- */
router.get("/", getProducts);
router.get("/:id", getProductById);

router.post(
  "/add",
  protect,
  adminOnly,
  upload.single("image"),
  addProduct
);

router.put(
  "/:id",
  protect,
  adminOnly,
  upload.single("image"),
  updateProduct
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteProduct
);
// GET /api/products/search?q=keyword
router.get("/search", async (req, res) => {
  try {
    const keyword = req.query.q || "";
    const products = await getProducts(); // getProducts should return all products

    // Filter by name (case-insensitive)
    const results = products.filter((p) =>
      p.name.toLowerCase().includes(keyword.toLowerCase())
    );

    res.json(results.slice(0, 10)); // limit to 10 results
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
