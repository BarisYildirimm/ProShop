import express from "express";
const router = express.Router();

import {
  getPorducts,
  getPorductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getPorducts).post(protect, admin, createProduct);
router
  .route("/:id")
  .get(getPorductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

router.route("/:id/reviews").post(protect, createProductReview);

export default router;
