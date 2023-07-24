import express from "express";
import {
  registerControl,
  loginControl,
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

//protected route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
