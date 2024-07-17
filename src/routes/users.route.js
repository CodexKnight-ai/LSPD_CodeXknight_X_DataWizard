import { Router } from "express";
import { loginUser, SignupUser } from "../controllers/users.controller.js";


const router=Router();
router.route('/signup').post(SignupUser);
router.route('/login').post(loginUser);

export default router;