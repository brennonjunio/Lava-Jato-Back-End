import _ from "lodash";
import db from "../../../database/database";
import { criarAgendamentoServicoDTO } from "../../servicos/dto/agendamentoServicosDTO";
import { useCaseAtendimentos } from "./useCase/useCaseAtendimentos";

export class agendamentoAtendimentosRepository {
  private useCase: useCaseAtendimentos = new useCaseAtendimentos();

  async agendarAtendimento(p: criarAgendamentoServicoDTO) {
    const agendamento = (await db.$queryRawUnsafe(
      "select agendar_servico(:cd_agenda_p, :cd_cliente_p, :cd_usuario_p) as sequencia",
      p.cd_agenda_p,
      p.cd_cliente_p,
      p.cd_usuario_p
    )) as { sequencia: number }[];

    for (const cd_servico of p.cd_servico_p) {
      await db.$queryRawUnsafe(
        "insert into servicos_atendimento (nr_seq_atendimento,cd_servico,cd_veiculo,placa,cd_usuario) values (?,?,?,?,?)",
        agendamento[0].sequencia,
        cd_servico,
        p.cd_veiculo_p,
        p.placa_p,
        p.cd_usuario_p
      );
    }

    const gerarMovimentacao = await db.$queryRawUnsafe(
      "select gerar_movimentacao_servico(?,?,?,?)",
      p.cd_cliente_p,
      p.cd_usuario_p,
      p.cd_agenda_p,
      agendamento[0].sequencia
    );
    return true;
  }
  async listarServicosAtendimentos(): Promise<any[]> {
    const result = (await db.$queryRawUnsafe(
      "select * from vw_listar_atendimentos"
    )) as any;

    const groupedData = _.groupBy(result, (row) => row.nr_atendimento);

    const atendimentosMapeados = _.map(groupedData, (group) => {
      const {
        nr_atendimento,
        dh_inicio_atendimento,
        valor_total,
        qtd_servicos_atendimento,
        dh_fim_atendimento,
        status_atendimento,
      } = group[0];

      const dadosCLiente = _.uniqBy(group, "cd_cliente").map((row) => {
        const { cliente, cd_cliente, contato } = row;

        return {
          cliente,
          cd_cliente,
          contato,
        };
      });

      const dadosServico = _.map(group, (row) => {
        const {
          nr_servico_atendimento,
          cd_veiculo,
          placa,
          cd_servico,
          tipo_veiculo,
          modelo_veiculo,
          valor,
          servico,
          status_servico,
          dh_inicio_servico,
          dh_fim_servico,
        } = row;

        return {
          nr_servico_atendimento,
          cd_veiculo,
          placa,
          cd_servico,
          tipo_veiculo,
          modelo_veiculo,
          valor,
          servico,
          status_servico,
          dh_inicio_servico,
          dh_fim_servico,
        };
      });

      const atendimentoData = {
        nr_atendimento,
        dh_inicio_atendimento,
        valor_total,
        qtd_servicos_atendimento,
        dh_fim_atendimento,
        status_atendimento,
        dadosCLiente: dadosCLiente,
        dadosServico,
      };

      return {
        dadosAtendimento: atendimentoData,
      };
    });

    return atendimentosMapeados;
  }
  async finalizarServico(nr_sequencia: number, seq_atendimento: number) {
    const result = await db.$executeRawUnsafe(
      `update servicos_atendimento set dh_fim = current_timestamp(), status = 'F' where nr_sequencia= ? and nr_seq_atendimento = ?`,
      nr_sequencia,
      seq_atendimento
    );

    const calculaHorario = await db.$executeRawUnsafe(
      `select atualizar_tempo_servico(?,?)`,
      nr_sequencia,
      seq_atendimento
    );
    return result;
  }

  async listarAtendimentosFinalizados() {
    const result = await db.atendimentos.findMany({
      where: { status_servico: "F" },
      include: { clientes: { select: { nm_cliente: true } } },
    });
    return result;
  }
}
