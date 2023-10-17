import { Router } from "express";
import { AtendimentosController } from "../modules/atendimentos/controller/atendimentosController";
const atendimentos = Router();
import { finalizarServicoSchema } from "../validator/servicos_atendimento/validatorServicos_atendimento";
import validate from "../middlewares/validateRequest";
import { criarAtendimentoSchema } from "../validator/atendimentos/validatorAtendimentos";


atendimentos.post(
  "/atendimentos/finalizarServico",validate(finalizarServicoSchema),
  new AtendimentosController().finalizarServico
);
atendimentos.get(
  "/atendimentos/servicosFinalizados",
  new AtendimentosController().listarServicosFinalizados
);

atendimentos.post(
  "/atendimentos/agendamento",validate(criarAtendimentoSchema),
  new AtendimentosController().realizar_atendimento
);
atendimentos.get(
  "/atendimentos/agendamento",
  new AtendimentosController().listarAtendimentos
);
atendimentos.get(
  "/atendimentos/agendamento/:cd_cliente",
  new AtendimentosController().listarAtendimentosPorCliente
);

atendimentos.post(
  "/atendimentos/finalizarAtendimento/:nr_atendimento_p",
  new AtendimentosController().finalizarAtendimento
);

export default atendimentos;
