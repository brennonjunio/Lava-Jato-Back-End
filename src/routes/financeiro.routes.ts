import { Router } from "express";
import { efetuarPagamentoSchema } from "../validator/atendimentos/validatorAtendimentos";
import validate from "../middlewares/validateRequest";

const financeiroRoutes = Router();
import { financeiroController } from "../modules/financeiro/controller/financeiroController";

financeiroRoutes.post("/financeiro/tipospagamentos", new financeiroController().criarTiposPagamentos);
financeiroRoutes.get("/financeiro/tipospagamentos", new financeiroController().listarTiposPagamentos);
financeiroRoutes.put("/financeiro/tipospagamentos", new financeiroController().editarTiposPagamentos);
financeiroRoutes.delete("/financeiro/tipospagamentos/:cd_pagamento", new financeiroController().deletarTipoPagamento);

//pagamentos
financeiroRoutes.post("/financeiro/pagamento",validate(efetuarPagamentoSchema), new financeiroController().efetuarPagamentoAtendimento);

export default financeiroRoutes ;