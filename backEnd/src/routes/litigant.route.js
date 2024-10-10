import { Router } from "express";
import { getAllLitigants, getLitigantById, loginInLitigant, logoutLitigant, refreshAccessToken, registerLitigant } from "../controllers/litigant.controller.js";
import { upload } from "../middlewares/multer.middlerware.js"
import { verifyJWT } from "../middlewares/auth.middlerware.js";
const router = Router()


router.route("/register").post(upload.fields([
    {
        name: "profilePhoto",
        maxCount: 1
    }
]), registerLitigant)


router.route("/login").post(loginInLitigant)



//Secured routes
router.route("/logout").post(verifyJWT, logoutLitigant)
router.route("/refresh-token").post(refreshAccessToken)

router.route("/getalllitigants").get(getAllLitigants)
router.route("/getLitigantById").get(verifyJWT, getLitigantById)



export default router 