import { Router } from "express";

const authRouter = Router();
import { AuthController } from "../modules/auth/Controller/authController";

authRouter.post("/login", new AuthController().login);
authRouter.get("/login", new AuthController().loadSession);


export default authRouter;
