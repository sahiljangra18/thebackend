import { Router } from "express";
import registerUser from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js";

const router = Router();

router.post("/register",(
    upload.fields([
        {
            name: "avatar",
            macCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ])
), registerUser);

router.route("/login").post(loginUser)


router.route("/logout").post(verifyJWT, logoutUser)


export default router;
