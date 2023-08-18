import { Router } from "express";

const financeiroRoutes = Router();
import { financeiroController } from "../modules/financeiro/controller/financeiroController";

financeiroRoutes.post("/financeiro/tipospagamentos", new financeiroController().criarTiposPagamentos);
financeiroRoutes.get("/financeiro/tipospagamentos", new financeiroController().listarTiposPagamentos);


export default financeiroRoutes ;