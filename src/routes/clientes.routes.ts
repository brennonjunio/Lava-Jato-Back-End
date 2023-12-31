import { Router } from "express";
import validate from "../middlewares/validateRequest";
const clientesRoutes = Router();
import { ClienteController } from "../modules/clientes/controller/clientesController";
import cadastrarClientes from "../validator/clientes/cadastrarClientes";
import { buscarCep } from "../shared/buscaCEp";



clientesRoutes.post("/cliente",validate(cadastrarClientes), new ClienteController().criarCliente);
clientesRoutes.get("/cliente", new ClienteController().listar);
clientesRoutes.put("/cliente", new ClienteController().atualizar);
clientesRoutes.delete("/cliente/:cd_cliente", new ClienteController().deletar);
clientesRoutes.get("/cliente/buscarCep/:cep", buscarCep);


export default clientesRoutes ;