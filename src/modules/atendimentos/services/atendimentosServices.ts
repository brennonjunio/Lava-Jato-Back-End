import { criarAgendamentoServicoDTO } from "../../servicos/dto/agendamentoServicosDTO";
import { agendamentoAtendimentosRepository } from "../repository/AtendimentosRepository";
import { useCaseAtendimentos } from "../repository/useCase/useCaseAtendimentos";
export class AtendimentosService {
  private useCase: useCaseAtendimentos = new useCaseAtendimentos();
  private repositoryAgendamento: agendamentoAtendimentosRepository =
    new agendamentoAtendimentosRepository();
  async agendarServico(params: criarAgendamentoServicoDTO) {
    if (await this.useCase.verificaAgendaOcupada(params.cd_agenda_p)) {
      throw `Agenda Já em uso, por favor, usar outra agenda`;
    }
    try {
      const result = await this.repositoryAgendamento.agendarAtendimento(
        params
      );
      return {
        status: true,
        statusCode: 200,
        message: "Serviço Agendado Com Sucesso!",
        data: result,
      };
    } catch (e) {
      throw `erro ao Agendar serviço: ${e}`;
    }
  }
  async listarServicosAgendados() {
    try {
      const result = await this.repositoryAgendamento.listarServicosAgendados();

      return {
        status: true,
        statusCode: 200,
        message: "Serviços Listados Com Sucesso!",
        data: result,
      };
    } catch (e) {
      throw `erro ao Agendar serviço: ${e}`;
    }
  }
  async finalizarServico(nr_sequencia: number, seq_atendimento: number) {
    try {
      const result = await this.repositoryAgendamento.finalizarServico(
        nr_sequencia,
        seq_atendimento
      );
      return {
        status: true,
        statusCode: 200,
        message: "Serviço Finalizado Com Sucesso!",
        data: result,
      };
    } catch (e) {
      throw `erro ao Finalizar serviço: ${e}`;
    }
  }
  async listarServicosFinalizados() {
    try {
      const result =
        await this.repositoryAgendamento.listarAtendimentosFinalizados();
      return {
        status: true,
        statusCode: 200,
        message: "Serviços Listados Com sucesso!",
        data: result,
      };
    } catch (e) {
      throw `erro ao Listar serviço: ${e}`;
    }
  }
}
