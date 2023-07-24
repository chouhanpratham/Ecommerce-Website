import express from "express";
import {
  loginControl,
  registerControl,
  testControl,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerControl);

//LOGIN || POST
router.post("/login", loginControl);

//test routes
router.get("/test", requireSignIn, isAdmin, testControl);

export default router;
