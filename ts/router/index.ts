import { Router } from "express";
import actual from "./actual";

export const router = Router();

router.use("/actual", actual);