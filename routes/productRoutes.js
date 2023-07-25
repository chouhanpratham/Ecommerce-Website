import express from "express";
import {
  createProductControl,
  deleteProductControl,
  getProductControl,
  getSingleProductControl,
  productPhotoControl,
  updateProductControl,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductControl
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductControl
);

//get products
router.get("/get-product", getProductControl);

//single product
router.get("/get-product/:slug", getSingleProductControl);

//get photo
router.get("/product-photo/:pid", productPhotoControl);

//delete product
router.delete("/product/:pid", deleteProductControl);

export default router;
