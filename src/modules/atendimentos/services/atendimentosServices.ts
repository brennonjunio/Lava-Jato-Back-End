import {  isEmpty } from "lodash";
import { criarAgendamentoServicoDTO } from "../../servicos/dto/agendamentoServicosDTO";
import { agendamentoAtendimentosRepository } from "../repository/AtendimentosRepository";
import { useCaseAtendimentos } from "../repository/useCase/useCaseAtendimentos";
import AppStatus from "../../../shared/AppStatus";
export class AtendimentosService {
  private useCase: useCaseAtendimentos = new useCaseAtendimentos();
  private repositoryAgendamento: agendamentoAtendimentosRepository =
    new agendamentoAtendimentosRepository();

  async realizar_atendimento(params: criarAgendamentoServicoDTO) {
    try {
     
      const result = await this.repositoryAgendamento.realizar_atendimento(
        params
      );

      if (!result) {
        return AppStatus.updateFalse("Atendimento Não foi criado!", 0);
      }

      return AppStatus.appSucess("Atendimento Criado Com sucesso!", result);
    } catch (e) {
      return AppStatus.appError("Erro Ao gerar Atendimento", 0);
    }
  }
  async listarAtendimentos(): Promise<any> {
    try {
      const result =
        await this.repositoryAgendamento.listarAtendimentos();

      if (isEmpty(result)) {
        return AppStatus.arrayVazio;
      }
      return AppStatus.appSucess("Serviços Listados Com Sucesso!", result);
    } catch (e) {
      return AppStatus.appError("Erro Ao Listar Serviços", 0);
    }
  }
  async listarAtendimentosPorCliente(
    cd_cliente_p: number
  ): Promise<any> {
    try {
      const result =
        await this.repositoryAgendamento.listarAtendimentosPorCliente(
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
  async finalizarServico(nr_sequencia:number [], seq_atendimento: number) {
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
      console.log("🚀 ~ file: atendimentosServices.ts:67 ~ AtendimentosService ~ finalizarServico ~ e:", e)
      return AppStatus.appError("Erro Ao Finalizar Serviço", 0);
    }
  }
  async listarServicosFinalizados() {
    try {
      const result =
        await this.repositoryAgendamento.listarServicosFinalizados();
      if (isEmpty(result)) {
        return AppStatus.arrayVazio;
      }
      return AppStatus.appSucess("Serviços Listados Com Sucesso!", result);
    } catch (e) {
      return AppStatus.appError("Erro Ao Listar Serviços", 0);
    }
  }
  async finalizarAtendimento(param: number) {
    try {
      const result = await this.repositoryAgendamento.finalizarAtendimento(
        param
      );
      if (result.status == false) {
        return AppStatus.updateFalse(result.message, result.status);
      }
      return AppStatus.appSucess(result.message, result.status);
    } catch (e) {
      return AppStatus.appError("Erro ao Finalizar Serviço", 0);
    }
  }
}
