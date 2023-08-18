import { Router } from "express";

const financeiroRoutes = Router();
import { financeiroController } from "../modules/financeiro/controller/financeiroController";

financeiroRoutes.post("/financeiro/tipospagamentos", new financeiroController().criarTiposPagamentos);
financeiroRoutes.get("/financeiro/tipospagamentos", new financeiroController().listarTiposPagamentos);
financeiroRoutes.put("/financeiro/tipospagamentos", new financeiroController().editarTiposPagamentos);
financeiroRoutes.delete("/financeiro/tipospagamentos", new financeiroController().deletarTipoPagamento);

export default financeiroRoutes ;