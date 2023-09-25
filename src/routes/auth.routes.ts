import { Router } from "express";

const authRouter = Router();
import { AuthController } from "../modules/auth/Controller/authController";

authRouter.post("/login", new AuthController().login);

export default authRouter;
