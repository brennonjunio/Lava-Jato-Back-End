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
//Rotas para vincular tipos de veiculos ao serviço
servicosRouters.post("/servicos/veiculos", new servicosController().criarVeiculoServico)
servicosRouters.put("/servicos/veiculos", new servicosController().editarVeiculoServico)

export default servicosRouters;
