import { isEmpty, isNull } from "lodash";
import AppStatus from "../../../shared/AppStatus";
import {
  criarServicoDTO,
  updateServiceDTO,
  vinculoVeiculoServico,
  vinculoVeiculoServicoEditar,
} from "../dto/servicosDTO";
import { servicosRepository } from "../repository/servicosRepository";
import { UseCaseService } from "../repository/useCase/useCaseService";
import { error } from "console";

export class servicosService {
  private repository: servicosRepository = new servicosRepository();
  private case: UseCaseService = new UseCaseService();

  async criarServico(param: criarServicoDTO) {
    try {
      const result = await this.repository.criarServico(param);
      return AppStatus.appSucess("Sucesso Ao Criar Serviço", param);
    } catch (e) {
      return AppStatus.appError("Erro ao Criar Serviço", 0);
    }
  }
  async listarServicos() {
    try {
      const result = await this.repository.listarServicos();
      return AppStatus.appSucess("Sucesso Ao Listar Serviços", result);
    } catch (e) {
      return AppStatus.appError("Erro ao Listar Serviços", 0);
    }
  }
  async editarServicos(params: updateServiceDTO) {
    try {
      return AppStatus.appSucess("Sucesso Ao editar Serviço", 1);
    } catch (e) {
      return AppStatus.appError("Erro ao Editar Serviço", 0);
    }
  }
  async deletarServicos(cd_servico: number): Promise<any> {
    try {
      if (!isNull(await this.case.validaServicoUsado(cd_servico))) {
        return AppStatus.updateFalse(
          "Serviço Já usado, não pode ser excluido",
          0
        );
      }

      const result = await this.repository.deletarServicos(cd_servico);
      return AppStatus.deletadoSucess;
    } catch (e) {
      return AppStatus.appError("erro ao Deletar Serviço", 0);
    }
  }
  async criarVeiculoServico(params: vinculoVeiculoServico) {
    try {
      const valida = await this.case.validaTipoVeiculoServico(params);
      if (!isEmpty(valida)) {
        return AppStatus.appError(
          "Serviço já vinculado ao tipo de veiculo",
          valida
        );
      }
      const result = await this.repository.criarVeiculoServico(params);
      return AppStatus.appSucess("Sucesso ao Vincular", result);
    } catch (e) {
      return AppStatus.appError("Erro ao vincular", e);
    }
  }
  async editarVeiculoServico(params: vinculoVeiculoServicoEditar) {
    try {

      const valida = await this.case.validaTipoVeiculoServico(params);
      if (!isEmpty(valida)) {
        return AppStatus.appError(
          "Serviço já vinculado ao tipo de veiculo",
          valida
        );
      }

      const result = await this.repository.editarVeiculoServico(params);
      console.log("🚀 ~ file: servicosService.ts:82 ~ servicosService ~ editarVeiculoServico ~ result:", result)

      return AppStatus.appSucess("Sucesso ao Editar", result);
    } catch (e) {
      return AppStatus.appError("Erro ao Editar", e);
    }
  }
}
