import { criarAgendamentoServicoDTO } from "../dto/agendamentoServicosDTO";
import { criarServicoDTO, updateServiceDTO } from "../dto/servicosDTO";
import { agendamentoServicosRepository } from "../repository/agendamentoServicosRepository";
import { servicosRepository } from "../repository/servicosRepository";

export class servicosService {
  private repository: servicosRepository = new servicosRepository();
  private repositoryAgendamento: agendamentoServicosRepository =
    new agendamentoServicosRepository();

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
        message: "Serviços listados Com Sucesso!",
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
  async deletarServicos(cd_servico: number) {
    try {
      const result = await this.repository.deletarServicos(cd_servico);
      return {
        statusCode: 200,
        message: "Serviço Deletado com Sucesso!",
        data: result,
      };
    } catch (e) {
      throw `erro ao deletar serviço: ${e}`;
    }
  }
  async agendarServico(params: criarAgendamentoServicoDTO) {
    try {
      const result = await this.repositoryAgendamento.agendarServico(params);
      return {
        statusCode: 200,
        message: "Serviço Agendado Com Sucesso!",
        data: result,
      };
    } catch (e) {
      throw `erro ao Agendar serviço: ${e}`;
    }
  }
}
