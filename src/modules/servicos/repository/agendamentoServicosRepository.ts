import db from "../../../database/database";
import { criarAgendamentoServicoDTO } from "../dto/agendamentoServicosDTO";
export class agendamentoServicosRepository {
  async agendarServico(p: criarAgendamentoServicoDTO) {
    const result = db.$queryRawUnsafe(
      "select agendar_servico(:cd_servico_p, :cd_agenda_p, :cd_cliente_p, :cd_veiculo_p, :placa_p)",
      p.cd_servico_p,
      p.cd_agenda_p,
      p.cd_cliente_p,
      p.cd_servico_p,
      p.placa_p
    );
    return result;
  }
}
