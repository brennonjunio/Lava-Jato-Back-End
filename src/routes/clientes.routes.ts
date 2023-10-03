import { Router } from "express";
import validate from "../middlewares/validateRequest";
const clientesRoutes = Router();
import { ClienteController } from "../modules/clientes/controller/clientesController";
import cadastrarClientes from "../validator/clientes/cadastrarClientes";
clientesRoutes.post("/cliente",validate(cadastrarClientes), new ClienteController().criarCliente);
clientesRoutes.get("/cliente", new ClienteController().listar);
clientesRoutes.put("/cliente", new ClienteController().atualizar);
clientesRoutes.delete("/cliente/:cd_agenda", new ClienteController().deletar);
clientesRoutes.patch("/cliente", new ClienteController().inativar);





export default clientesRoutes ;