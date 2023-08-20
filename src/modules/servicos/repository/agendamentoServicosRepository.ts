import { includes } from "lodash";
import db from "../../../database/database";
import { criarAgendamentoServicoDTO } from "../dto/agendamentoServicosDTO";
import { useCaseAgendamento } from "./useCase/useCaseAgendamento";

export class agendamentoServicosRepository {
  private useCase: useCaseAgendamento = new useCaseAgendamento();

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
        veiculos_agenda: {
          select: { modelo: true, placa: true },
        },
      },
      where: {
        status_servico: "A",
        NOT: {
          cd_agenda: {
            equals: Number(null),
          },
        },
      },
    });

    return result;
  }
  async finalizarServico(nr_sequencia: number) {
    const result = await db.$executeRawUnsafe(
      `update servicos_agendados set dh_fim = current_timestamp(), status_servico = 'F' where nr_sequencia= ?`,
      nr_sequencia
    );

    const calculaHorario = await db.$executeRawUnsafe(
      `select atualizar_tempo_servico(?)`,
      nr_sequencia
    );
    return result;
  }
}
