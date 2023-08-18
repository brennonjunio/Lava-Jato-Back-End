import { Router } from "express";
import { servicosController } from "../modules/servicos/controller/servicosController";

const servicosRouters = Router();

//crud de serviços
servicosRouters.post("/servicos", new servicosController().criarServico);
servicosRouters.get("/servicos", new servicosController().listarServicos);
servicosRouters.put("/servicos", new servicosController().editarServicos);
servicosRouters.delete("/servicos", new servicosController().deletarServicos);


//agendamento de serviço
servicosRouters.post("/servicos/agendamento", new servicosController().agendarServico);
servicosRouters.get("/servicos/agendamento", new servicosController().listarServicosAgendados);




export default servicosRouters ;