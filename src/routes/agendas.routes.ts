import { Router } from "express";
import { agendaController } from "../modules/agenda/controller/agendaController";

const agendasRouter = Router();


agendasRouter.post("/agenda", new agendaController().criarAgenda);


export default agendasRouter ;