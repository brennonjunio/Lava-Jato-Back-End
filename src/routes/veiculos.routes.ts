import { Router } from "express";

const veiculosRouter = Router();
import { veiculosController } from "../modules/veiculos/controller/veiculosController";

veiculosRouter.post("/veiculo/tipo", new veiculosController().criarTipoVeiculo);
veiculosRouter.get("/veiculo/tipo", new veiculosController().listarTipoVeiculo);
veiculosRouter.put("/veiculo/tipo", new veiculosController().editarTipoVeiculo);

export default veiculosRouter ;