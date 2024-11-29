import { Router } from "express";
import register from "./register";
import login from "./login";

export const router = Router();

router.use("/register", register);
router.use("/login", login);

