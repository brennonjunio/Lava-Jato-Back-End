import _ from "lodash";
import db from "../../../database/database";
import { criarAgendamentoServicoDTO } from "../../servicos/dto/agendamentoServicosDTO";
import { MapeamentoServicos } from "./useCase/mapeamentoServicos";

export class agendamentoAtendimentosRepository {
  private mapeamento: MapeamentoServicos = new MapeamentoServicos();

  async realizar_atendimento(p: criarAgendamentoServicoDTO) {
    const agendamento = (await db.$queryRawUnsafe(
      "select realizar_atendimento(:horario_p, :cd_cliente_p, :cd_usuario_p) as sequencia",
      p.horario_p,
      p.cd_cliente_p,
      p.cd_usuario_p
    )) as { sequencia: number }[];
    console.log("🚀 ~ file: AtendimentosRepository.ts:16 ~ agendamentoAtendimentosRepository ~ realizar_atendimento ~ agendamento:", agendamento)

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
      "select gerar_movimentacao_servico(?,?,?)",
      p.cd_cliente_p,
      p.cd_usuario_p,
      agendamento[0].sequencia
    );
    return agendamento[0].sequencia != 0 ? true : false;
  }
  async listarServicosAtendimentos() {
    const query = (await db.$queryRawUnsafe(
      "select * from vw_listar_atendimentos"
    )) as any;
    const result = await this.mapeamento.mapearServicos(query);
    return result;
  }
  async listarServicosAtendimentosPorCliente(cd_cliente_p: number) {
    const query = (await db.$queryRawUnsafe(
      `select * from vw_listar_atendimentos where cd_cliente = ${cd_cliente_p}`
    )) as any;
    const result = await this.mapeamento.mapearServicos(query);
    return result;
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
    const result = await db.$queryRawUnsafe(
      "select * from vw_listar_servicos where status_servico = 'F'"
    );
    return result;
  }

  async finalizarAtendimento(param: number) {
    const query = (await db.$queryRawUnsafe(
      "select finalizarAtendimento(?) as atendimento",
      param
    )) as any;
    const result = query[0].atendimento;
    return result;
  }
}
