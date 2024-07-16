import { Router } from "express";
import { SignupUser } from "../controllers/users.controller.js";


const router=Router();
router.route('/signup').post(SignupUser);

export default router;