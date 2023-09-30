import { Router } from "express";
import validate from "../middlewares/validateRequest";
const clientesRoutes = Router();
import { ClienteController } from "../modules/clientes/controller/clientesController";
import clientesDTO from "../modules/clientes/dto/criarClienteDTO";

clientesRoutes.post("/cliente",validate(clientesDTO), new ClienteController().criarCliente);
clientesRoutes.get("/cliente", new ClienteController().listar);
clientesRoutes.put("/cliente", new ClienteController().atualizar);
clientesRoutes.delete("/cliente", new ClienteController().deletar);
clientesRoutes.patch("/cliente", new ClienteController().inativar);





export default clientesRoutes ;