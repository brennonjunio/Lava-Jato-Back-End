import { Router } from "express";
import { servicosController } from "../modules/servicos/controller/servicosController";
import validate from "../middlewares/validateRequest";
import { criarServicoSchema } from "../validator/servicos_atendimento/validatorServicos_atendimento";
const servicosRouters = Router();

servicosRouters.post(
  "/servicos",
  validate(criarServicoSchema),
  new servicosController().criarServico
);
servicosRouters.get("/servicos", new servicosController().listarServicos);
servicosRouters.put("/servicos", new servicosController().editarServicos);
servicosRouters.delete(
  "/servicos/:cd_servico",
  new servicosController().deletarServicos
);

export default servicosRouters;
