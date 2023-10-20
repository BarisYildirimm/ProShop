import express from "express";
const router = express.Router();

import {
  getPorducts,
  getPorductById,
} from "../controllers/productController.js";

router.route("/").get(getPorducts);
router.route("/:id").get(getPorductById);

export default router;
