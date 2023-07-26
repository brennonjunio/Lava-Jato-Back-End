import { Router } from "express";

const veiculosRouter = Router();
import { veiculosController } from "../modules/veiculos/controller/veiculosController";


veiculosRouter.post("/veiculo/tipo", new veiculosController().criarTipoVeiculo);

veiculosRouter.get("/veiculo/tipo", new veiculosController().listarTipoveiculo);



export default veiculosRouter ;