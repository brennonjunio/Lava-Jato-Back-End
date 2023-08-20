import { includes } from "lodash";
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
  async listarServicosAgendados() {
    const result = await db.servicos_agendados.findMany({
      include: {
        clientes: { select: { nm_cliente: true } },
        veiculos_agenda:  {
          select: { modelo: true, placa: true } ,
        },
      },
      where: {
        NOT: {
          cd_agenda: {
            equals: Number(null),
          },
        },
      },
    });

    return result;
  }
}
