import { isNull } from "lodash";
import AppStatus from "../../../shared/AppStatus";
import { criarServicoDTO, updateServiceDTO } from "../dto/servicosDTO";
import { servicosRepository } from "../repository/servicosRepository";
import { UseCaseService } from "../repository/useCase/useCaseService";

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
  async deletarServicos(cd_servico: number) {
    try {
      if(!isNull(await this.case.validaServicoUsado(cd_servico))){
return AppStatus.updateFalse("Serviço Ja foi usado, não pode ser excluido",0)
      }
      const result = await this.repository.deletarServicos(cd_servico);
      return AppStatus.deletadoSucess;
    } catch (e) {
      return AppStatus.appError("Erro ao Deletar Serviço", 0);
    }
  }
}
