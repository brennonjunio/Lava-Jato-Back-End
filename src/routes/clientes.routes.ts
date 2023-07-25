import { Router } from "express";

const clientesRoutes = Router();
import { ClienteController } from "../modules/clientes/controller/clientesController";


clientesRoutes.post("/cliente", new ClienteController().criarCliente);
clientesRoutes.get("/cliente", new ClienteController().listar);
clientesRoutes.put("/cliente", new ClienteController().atualizar);



export default clientesRoutes ;