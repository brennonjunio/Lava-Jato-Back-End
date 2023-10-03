import {  isEmpty } from "lodash";
import { criarAgendamentoServicoDTO } from "../../servicos/dto/agendamentoServicosDTO";
import { agendamentoAtendimentosRepository } from "../repository/AtendimentosRepository";
import { useCaseAtendimentos } from "../repository/useCase/useCaseAtendimentos";
import AppStatus from "../../../shared/AppStatus";
export class AtendimentosService {
  private useCase: useCaseAtendimentos = new useCaseAtendimentos();
  private repositoryAgendamento: agendamentoAtendimentosRepository =
    new agendamentoAtendimentosRepository();

  async agendarServico(params: criarAgendamentoServicoDTO) {
    try {
      if (await this.useCase.verificaAgendaOcupada(params.cd_agenda_p)) {
        return AppStatus.appError("Agenda Já em uso", 0);
      }
      const result = await this.repositoryAgendamento.agendarAtendimento(
        params
      );

      if (result == false) {
        return AppStatus.updateFalse("Atendimento Não foi criado!", 0);
      }

      return AppStatus.appSucess("Atendimento Criado Com sucesso!", result);
    } catch (e) {
      return AppStatus.appError("Erro Ao gerar Atendimento", 0);
    }
  }
  async listarServicosAtendimentos(): Promise<any> {
    try {
      const result =
        await this.repositoryAgendamento.listarServicosAtendimentos();
      if (isEmpty(result)) {
        return AppStatus.arrayVazio;
      }
      return AppStatus.appSucess("Serviços Listados Com Sucesso!", result);
    } catch (e) {
      return AppStatus.appError("Erro Ao Listar Serviços", 0);
    }
  }
  async listarServicosAtendimentosPorCliente(
    cd_cliente_p: number
  ): Promise<any> {
    try {
      const result =
        await this.repositoryAgendamento.listarServicosAtendimentosPorCliente(
          cd_cliente_p
        );

      if (isEmpty(result)) {
        return AppStatus.arrayVazio;
      }
      return AppStatus.appSucess("Listados Com sucess", result);
    } catch (e) {
      return AppStatus.appError("Erro Ao Listar Serviços", 0);
    }
  }
  async finalizarServico(nr_sequencia: number, seq_atendimento: number) {
    try {
      const result = await this.repositoryAgendamento.finalizarServico(
        nr_sequencia,
        seq_atendimento
      );
      if (result == 0) {
        return AppStatus.updateFalse("Serviço Não Finalizado", result);
      }
      return AppStatus.updateSucess("Serviço Finalizado Com Sucesso", result);
    } catch (e) {
      return AppStatus.appError("Erro Ao Finalizar Serviço", 0);
    }
  }
  async listarServicosFinalizados() {
    try {
      const result =
        await this.repositoryAgendamento.listarAtendimentosFinalizados();
      if (isEmpty(result)) {
        return AppStatus.arrayVazio;
      }
      return AppStatus.appSucess("Serviços Listados Com Sucesso!", result);
    } catch (e) {
      return AppStatus.appError("Erro Ao Listar Serviços", 0);
    }
  }
}
