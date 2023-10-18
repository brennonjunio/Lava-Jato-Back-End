import { Router } from "express";
import validate from "../middlewares/validateRequest";
import { criarUsuarioSchema } from "../validator/usuarios/validatorUsuarios";
const usuariosRouter = Router();
import { UsuariosController } from "../modules/usuarios/controller/usuariosController";

usuariosRouter.post(
  "/usuario",
  validate(criarUsuarioSchema),
  new UsuariosController().criarUsuario
);
usuariosRouter.put(
  "/usuario/:cd_usuario",
  new UsuariosController().editarUsuario
);
usuariosRouter.get("/usuario", new UsuariosController().listarUsuariosAll);

export default usuariosRouter;
