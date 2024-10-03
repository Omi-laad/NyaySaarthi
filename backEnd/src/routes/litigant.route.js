import { Router } from "express";
import { registerLitigant } from "../controllers/litigant.controller.js";
const router = Router()


router.route("/register").post(registerLitigant)





export default router 