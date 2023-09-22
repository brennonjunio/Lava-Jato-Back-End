import { Router } from "express";

const usuariosRouter = Router();
import { UsuariosController } from "../modules/usuarios/controller/usuariosController";

usuariosRouter.post("/usuario", new UsuariosController().criarUsuario);
usuariosRouter.put("/usuario/:cd_usuario", new UsuariosController().editarUsuario);


export default usuariosRouter;
