import { Router } from "express";
import { loginInLawyer, registerLawyer, logOutLawyer } from "../controllers/lawyer.controller.js";
import { upload } from "../middlewares/multer.middlerware.js"
import { verifyJWT } from "../middlewares/lawyerAuth.middlerware.js"
const router = Router()


router.route("/register").post(upload.fields([
    {
        name: "profilePhoto",
        maxCount: 1
    }
]), registerLawyer)


router.route("/login").post(loginInLawyer)


//secured route
router.route("/logout").post(verifyJWT, logOutLawyer)




export default router 