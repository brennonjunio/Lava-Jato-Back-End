import { criarServicoDTO, updateServiceDTO } from "../dto/servicosDTO";
import { servicosRepository } from "../repository/servicosRepository";

export class servicosService {
  private repository: servicosRepository = new servicosRepository();
  async criarServico(param: criarServicoDTO) {
    try {
      const result = await this.repository.criarServico(param);
      return {
        statusCode: 200,
        message: "Serviço Criado Com Sucesso!",
        data: result,
      };
    } catch (e) {
      throw `erro na Criação Do serviço: ${e}`;
    }
  }
  async listarServicos() {
    try {
      const result = await this.repository.listarServicos();
      return {
        statusCode: 200,
        message: "Serviço Criado Com Sucesso!",
        data: result,
      };
    } catch (e) {
      throw `erro Ao Listar Serviços: ${e}`;
    }
  }
  async editarServicos(params: updateServiceDTO) {
    try {
      const result = await this.repository.editarServicos(params);
      return {
        statusCode: 200,
        message: "Serviço Editado Com Sucesso!",
        data: result,
      };
    } catch (e) {
      throw `erro na Edição do serviço: ${e}`;
    }
  }
}
