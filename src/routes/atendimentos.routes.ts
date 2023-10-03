import { Router } from "express";
import { AtendimentosController } from "../modules/atendimentos/controller/atendimentosController";
const atendimentos = Router();

//crud de serviços

atendimentos.post(
  "/atendimentos/finalizarServico",
  new AtendimentosController().finalizarServico
);
atendimentos.get(
  "/atendimentos/servicosFinalizados",
  new AtendimentosController().listarAtendimentosFinalizados
);

atendimentos.post(
  "/atendimentos/agendamento",
  new AtendimentosController().agendarServico
);
atendimentos.get(
  "/atendimentos/agendamento",
  new AtendimentosController().listarServicosAtendimentos
);
atendimentos.get(
  "/atendimentos/agendamento/:cd_cliente",
  new AtendimentosController().listarServicosAtendimentosPorCliente
);

export default atendimentos;
