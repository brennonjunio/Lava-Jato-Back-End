import { Router } from "express";

const veiculosRouter = Router();
import { veiculosController } from "../modules/veiculos/controller/veiculosController";

//rotas para tipos de veiculos
veiculosRouter.post("/veiculo/tipo", new veiculosController().criarTipoVeiculo);
veiculosRouter.get("/veiculo/tipo", new veiculosController().listarTipoVeiculo);
veiculosRouter.put("/veiculo/tipo", new veiculosController().editarTipoVeiculo);
veiculosRouter.delete("/veiculo/tipo", new veiculosController().deletarTipoVeiculo);

//rotas para vinculo de veiculos
veiculosRouter.post("/veiculo/cliente",new veiculosController().veiculoClienteCriar);
veiculosRouter.get("/veiculo/cliente",new veiculosController().listarVeiculosCliente);



export default veiculosRouter ;