import { Router } from "express";
import { registerLawyer } from "../controllers/lawyer.controller.js";
import { upload } from "../middlewares/multer.middlerware.js"
const router = Router()


router.route("/register").post(upload.fields([
    {
        name: "profilePhoto",
        maxCount: 1
    }
]), registerLawyer)





export default router 