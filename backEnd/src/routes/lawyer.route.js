import { Router } from "express";
import { loginInLawyer, registerLawyer, logOutLawyer, verifyLawyer, getAllLawyers, revokeLawyer } from "../controllers/lawyer.controller.js";
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

router.route("/verifylawyer").put(verifyLawyer)
router.route("/revokelawyer").put(revokeLawyer)
router.route("/getalllawyer").get(getAllLawyers)



export default router 