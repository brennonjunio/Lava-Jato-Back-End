import { Router } from "express";
import { agendaController } from "../modules/agenda/controller/agendaController";

const agendasRouter = Router();


agendasRouter.post("/agenda", new agendaController().criarAgenda);
agendasRouter.get("/agenda", new agendaController().listarAgendasDisponiveis);



export default agendasRouter ;