import { Router } from "express";
import { AtendimentosController } from "../modules/atendimentos/controller/atendimentosController";
const atendimentos = Router();
import { finalizarServicoSchema,agendarServicoSchema } from "../validator/servicos_atendimento/validatorServicos_atendimento";
import validate from "../middlewares/validateRequest";

//crud de serviços

atendimentos.post(
  "/atendimentos/finalizarServico",validate(finalizarServicoSchema),
  new AtendimentosController().finalizarServico
);
atendimentos.get(
  "/atendimentos/servicosFinalizados",
  new AtendimentosController().listarAtendimentosFinalizados
);

atendimentos.post(
  "/atendimentos/agendamento",
  new AtendimentosController().realizar_atendimento
);
atendimentos.get(
  "/atendimentos/agendamento",
  new AtendimentosController().listarServicosAtendimentos
);
atendimentos.get(
  "/atendimentos/agendamento/:cd_cliente",
  new AtendimentosController().listarServicosAtendimentosPorCliente
);

atendimentos.post(
  "/atendimentos/finalizarAtendimento/:nr_atendimento_p",
  new AtendimentosController().finalizarAtendimento
);

export default atendimentos;
