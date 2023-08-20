import { criarAgendamentoServicoDTO } from "../dto/agendamentoServicosDTO";
import { criarServicoDTO, updateServiceDTO } from "../dto/servicosDTO";
import { agendamentoServicosRepository } from "../repository/agendamentoServicosRepository";
import { servicosRepository } from "../repository/servicosRepository";
import { useCaseAgendamento } from "../repository/useCase/useCaseAgendamento";

export class servicosService {
  private repository: servicosRepository = new servicosRepository();
  private repositoryAgendamento: agendamentoServicosRepository =
    new agendamentoServicosRepository();
  private useCase: useCaseAgendamento = new useCaseAgendamento();

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
      if (await this.useCase.verificaAgendaOcupada(params.cd_agenda_p)) {
        return {
          statusCode: 204,
          message: `Agenda Já em uso, por favor, usar outra agenda, nr_agenda: ${params.cd_agenda_p}`,
        };
      }

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
  async listarServicosAgendados() {
    try {
      const result = await this.repositoryAgendamento.listarServicosAgendados();

      return {
        statusCode: 200,
        message: "Serviços Listados Com Sucesso!",
        data: result,
      };
    } catch (e) {
      throw `erro ao Agendar serviço: ${e}`;
    }
  }
  async finalizarServico(nr_sequencia: number) {
    try {
      const result = await this.repositoryAgendamento.finalizarServico(
        nr_sequencia
      );
      return {
        statusCode: 200,
        message: "Serviço Finalizado Com Sucesso!",
        data: result,
      };
    } catch (e) {
      throw `erro ao Finalizar serviço: ${e}`;
    }
  }
}

