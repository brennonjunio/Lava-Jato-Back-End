import AppStatus from "../../../shared/AppStatus";
import { criarServicoDTO, updateServiceDTO } from "../dto/servicosDTO";
import { servicosRepository } from "../repository/servicosRepository";

export class servicosService {
  private repository: servicosRepository = new servicosRepository();

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
      const result = await this.repository.deletarServicos(cd_servico);
      return AppStatus.appSucess("Sucesso Ao Deletar Serviço", 1);
    } catch (e) {
      return AppStatus.appError("Erro ao Deletar Serviço", 0);
    }
  }
}
