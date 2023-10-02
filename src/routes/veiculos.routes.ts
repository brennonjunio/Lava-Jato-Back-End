import { Router } from "express";

const veiculosRouter = Router();
import { veiculosController } from "../modules/veiculos/controller/veiculosController";

//rotas para tipos de veiculos
veiculosRouter.post("/veiculo/tipo", new veiculosController().criarTipoVeiculo);

veiculosRouter.get("/veiculo/tipo", new veiculosController().listarTipoVeiculo);

veiculosRouter.put("/veiculo/tipo", new veiculosController().editarTipoVeiculo);

veiculosRouter.delete(
  "/veiculo/tipo",
  new veiculosController().deletarTipoVeiculo
);

//rotas para vinculo de veiculos
veiculosRouter.post(
  "/veiculo/cliente",
  new veiculosController().veiculoClienteCriar
);
veiculosRouter.get(
  "/veiculo/cliente",
  new veiculosController().listarVeiculosCliente
);
veiculosRouter.get(
  "/veiculo/cliente/:cd_cliente",
  new veiculosController().listarVeiculosporCliente
);

veiculosRouter.put(
  "/veiculo/cliente",
  new veiculosController().editarVeiculosCliente
);
veiculosRouter.delete(
  "/veiculo/cliente",
  new veiculosController().deletarVeiculosCliente
);

export default veiculosRouter;
