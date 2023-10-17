import { Router } from "express";
import { servicosController } from "../modules/servicos/controller/servicosController";

const servicosRouters = Router();

servicosRouters.post("/servicos", new servicosController().criarServico);
servicosRouters.get("/servicos", new servicosController().listarServicos);
servicosRouters.put("/servicos", new servicosController().editarServicos);
servicosRouters.delete("/servicos/:cd_servico", new servicosController().deletarServicos);

export default servicosRouters;
